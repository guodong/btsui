import React from "react";
import { connect } from "alt-react";
import accountUtils from "common/account_utils";
import utils from "common/utils";
import Translate from "react-translate-component";
import ChainTypes from "../Utility/ChainTypes";
import BindToChainState from "../Utility/BindToChainState";
import BlockTradesGateway from "../DepositWithdraw/BlockTradesGateway";
import OpenLedgerFiatDepositWithdrawal from "../DepositWithdraw/openledger/OpenLedgerFiatDepositWithdrawal";
import OpenLedgerFiatTransactionHistory from "../DepositWithdraw/openledger/OpenLedgerFiatTransactionHistory";
import BlockTradesBridgeDepositRequest from "../DepositWithdraw/blocktrades/BlockTradesBridgeDepositRequest";
import HelpContent from "../Utility/HelpContent";
import AccountStore from "stores/AccountStore";
import SettingsStore from "stores/SettingsStore";
import SettingsActions from "actions/SettingsActions";
import { Apis } from "bitsharesjs-ws";
import { settingsAPIs, rudexAPIs } from "api/apiConfig";
import BitKapital from "../DepositWithdraw/BitKapital";
import RuDexGateway from "../DepositWithdraw/rudex/RuDexGateway";
import GatewayStore from "stores/GatewayStore";
import GatewayActions from "actions/GatewayActions";
import AccountImage from "../Account/AccountImage";

class AccountDepositWithdraw extends React.Component {

    static propTypes = {
        account: ChainTypes.ChainAccount.isRequired,
        contained: React.PropTypes.bool
    };

    static defaultProps = {
        contained: false
    };

    constructor(props) {
        super();
        this.state = {
            olService: props.viewSettings.get("olService", "gateway"),
            rudexService: props.viewSettings.get("rudexService", "gateway"),
            btService: props.viewSettings.get("btService", "bridge"),
            metaService: props.viewSettings.get("metaService", "bridge"),
            activeService: props.viewSettings.get("activeService", 0)
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            nextProps.account !== this.props.account ||
            nextProps.servicesDown !== this.props.servicesDown ||
            !utils.are_equal_shallow(nextProps.blockTradesBackedCoins, this.props.blockTradesBackedCoins) ||
            !utils.are_equal_shallow(nextProps.openLedgerBackedCoins, this.props.openLedgerBackedCoins) ||
            nextState.olService !== this.state.olService ||
            nextState.rudexService !== this.state.rudexService ||
            nextState.btService !== this.state.btService ||
            nextState.metaService !== this.state.metaService ||
            nextState.activeService !== this.state.activeService
        );
    }

    componentWillMount() {
        accountUtils.getFinalFeeAsset(this.props.account, "transfer");
    }

    toggleOLService(service) {
        this.setState({
            olService: service
        });

        SettingsActions.changeViewSetting({
            olService: service
        });
    }

    toggleRuDEXService(service) {
        this.setState({
            rudexService: service
        });

        SettingsActions.changeViewSetting({
            rudexService: service
        });
    }

    toggleBTService(service) {
        this.setState({
            btService: service
        });

        SettingsActions.changeViewSetting({
            btService: service
        });
    }

    toggleMetaService(service) {
        this.setState({
            metaService: service
        });

        SettingsActions.changeViewSetting({
            metaService: service
        });
    }

    onSetService(e) {
        //let index = this.state.services.indexOf(e.target.value);
        this.setState({
            activeService: parseInt(e.target.value)
        });

        SettingsActions.changeViewSetting({
            activeService: parseInt(e.target.value)
        });
    }

    renderServices(openLedgerGatewayCoins, rudexGatewayCoins) {
        //let services = ["Openledger (OPEN.X)", "BlockTrades (TRADE.X)", "Transwiser", "BitKapital"];
        let serList = [];
        let { account } = this.props;
        let { olService, btService, rudexService } = this.state;

        serList.push({
            name: "Openledger (OPEN.X)",
            template: (
                <div className="content-block">
                        {/* <div className="float-right">
                            <a href="https://www.ccedk.com/" target="__blank" rel="noopener noreferrer"><Translate content="gateway.website" /></a>
                        </div> */}
                        <div className="service-selector">
                            <ul className="button-group segmented no-margin">
                                <li onClick={this.toggleOLService.bind(this, "gateway")} className={olService === "gateway" ? "is-active" : ""}><a><Translate content="gateway.gateway" /></a></li>
                                <li onClick={this.toggleOLService.bind(this, "fiat")} className={olService === "fiat" ? "is-active" : ""}><a>Fiat</a></li>
                            </ul>
                        </div>

                        {olService === "gateway" && openLedgerGatewayCoins.length ?
                        <BlockTradesGateway
                            account={account}
                            coins={openLedgerGatewayCoins}
                            provider="openledger"
                        /> : null}

                        {olService === "fiat" ?
                        <div>
                            <div style={{paddingBottom: 15}}><Translate component="h5" content="gateway.fiat_text" /></div>

                            <OpenLedgerFiatDepositWithdrawal
                                rpc_url={settingsAPIs.RPC_URL}
                                account={account}
                                issuer_account="openledger-fiat" />
                            <OpenLedgerFiatTransactionHistory
                                rpc_url={settingsAPIs.RPC_URL}
                                account={account} />
                        </div> : null}
                    </div>
            )
        });

        serList.push({
            name: "RuDEX (RUDEX.X)",
            template: (
                <div className="content-block">
                    <div className="service-selector">
                        <ul className="button-group segmented no-margin">
                            <li onClick={this.toggleRuDEXService.bind(this, "gateway")}
                                className={rudexService === "gateway" ? "is-active" : ""}><a><Translate
                                content="gateway.gateway"/></a></li>
                            <li onClick={this.toggleRuDEXService.bind(this, "fiat")}
                                className={rudexService === "fiat" ? "is-active" : ""}><a>Fiat</a></li>
                        </ul>
                    </div>

                    {rudexService === "gateway" && rudexGatewayCoins.length ?
                        <RuDexGateway account={account} coins={rudexGatewayCoins}/> : null}

                    {rudexService === "fiat" ?
                        <div>
                            <Translate content="gateway.rudex.coming_soon" />
                        </div> : null}
                </div>
            )
        });

        serList.push({
            name: "BlockTrades",
            template: (
                <div>
                        <div className="content-block">
                            {/* <div className="float-right"><a href="https://blocktrades.us" target="__blank" rel="noopener noreferrer"><Translate content="gateway.website" /></a></div> */}

                            <div className="service-selector">
                                <ul className="button-group segmented no-margin">
                                    <li onClick={this.toggleBTService.bind(this, "bridge")} className={btService === "bridge" ? "is-active" : ""}><a><Translate content="gateway.bridge" /></a></li>
                                </ul>
                            </div>

                            <BlockTradesBridgeDepositRequest
                                gateway="blocktrades"
                                issuer_account="blocktrades"
                                account={account}
                                initial_deposit_input_coin_type="btc"
                                initial_deposit_output_coin_type="bts"
                                initial_deposit_estimated_input_amount="1.0"
                                initial_withdraw_input_coin_type="bts"
                                initial_withdraw_output_coin_type="btc"
                                initial_withdraw_estimated_input_amount="100000"
                                initial_conversion_input_coin_type="bts"
                                initial_conversion_output_coin_type="bitbtc"
                                initial_conversion_estimated_input_amount="1000"
                            />
                        </div>
                        <div className="content-block">
                        </div>
                    </div>)
        });

        serList.push({
            name: "BitKapital",
            template: (<BitKapital viewSettings={this.props.viewSettings} account={account}/>)
        });

        return serList;
    }

    render() {
        let { account, servicesDown } = this.props;
        let { activeService } = this.state;

        let openLedgerGatewayCoins = this.props.openLedgerBackedCoins.map(coin => {
            return coin;
        })
        .sort((a, b) => {
            if (a.symbol < b.symbol)
                return -1;
            if (a.symbol > b.symbol)
                return 1;
            return 0;
        });

        let rudexGatewayCoins = this.props.rudexBackedCoins.map(coin => {
            return coin;
        })
        .sort((a, b) => {
            if (a.symbol < b.symbol)
                return -1;
            if (a.symbol > b.symbol)
                return 1;
            return 0;
        });

        let services = this.renderServices(openLedgerGatewayCoins, rudexGatewayCoins);

        let options = services.map((services_obj, index) => {
            return <option key={index} value={index}>{services_obj.name}</option>;
        });

        const serviceNames = ["OPEN", "RUDEX", "TRADE", "BITKAPITAL"];
        const currentServiceName = serviceNames[activeService];
        const currentServiceDown = servicesDown.get(currentServiceName);

        return (
            <div className={this.props.contained ? "grid-content" : "grid-container"}>
                <h2>BTSVIP第三方承兑商</h2>
                <div style={{float: "left", margin: "10px 20px", border: "1px solid rgb(187, 187, 187)", width: "300px", fontSize: "14px"}}>
                    <div style={{padding: "10px", fontSize: "14px"}}><img
                        src="https://www.hellobts.com/static/image/dz-header.jpg" width="50px" height="50px"
                        style={{float: "left"}}/>
                        <div style={{float: "left", marginLeft: "25px", width: "200px"}}><div style={{display: "block"}}>西北矿主<span style={{float: "right", color: "red"}}>保证金20万元</span></div>
                            <div style={{display: "block", marginTop: "7px"}}><img
                                src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEISURBVChTdZChSwRREMa/2VvBaDRcEU80GK4IFxXOy0aLsNe8pkHkgsly8YJRWMRqs8nB/QMWwWCxGYxGQXY/v7l97LLs3Q8eM/N9M+/xBsuYpTh9SXERyhpRiHXMrk1nnmI9KCWNAd1+otA1YPMPOC/UCukV80e0s8yelXa9JvAdt3hwdIYvrx2bPditnEOZ+5reCHoNeT/yPszwGoF8k9Bb1ewEr5fl/Iz6CZ4IjgprNTl5ORhiuvj0IMF9Dl4tnCXowhtv9rzckhHvIW0gr/x0OUBDJ6RNzHZDVg20YNsetYBfhQnJsW8naHseneoFoKO13cXkVj/h+HiISbzGHW1oqtMuuoB/nSxJYwHeGAwAAAAASUVORK5CYII="
                                width="13px" height="13px" style={{float: "left"}}/><img
                                src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEISURBVChTdZChSwRREMa/2VvBaDRcEU80GK4IFxXOy0aLsNe8pkHkgsly8YJRWMRqs8nB/QMWwWCxGYxGQXY/v7l97LLs3Q8eM/N9M+/xBsuYpTh9SXERyhpRiHXMrk1nnmI9KCWNAd1+otA1YPMPOC/UCukV80e0s8yelXa9JvAdt3hwdIYvrx2bPditnEOZ+5reCHoNeT/yPszwGoF8k9Bb1ewEr5fl/Iz6CZ4IjgprNTl5ORhiuvj0IMF9Dl4tnCXowhtv9rzckhHvIW0gr/x0OUBDJ6RNzHZDVg20YNsetYBfhQnJsW8naHseneoFoKO13cXkVj/h+HiISbzGHW1oqtMuuoB/nSxJYwHeGAwAAAAASUVORK5CYII="
                                width="13px" height="13px" style={{float: "left"}}/><img
                                src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEISURBVChTdZChSwRREMa/2VvBaDRcEU80GK4IFxXOy0aLsNe8pkHkgsly8YJRWMRqs8nB/QMWwWCxGYxGQXY/v7l97LLs3Q8eM/N9M+/xBsuYpTh9SXERyhpRiHXMrk1nnmI9KCWNAd1+otA1YPMPOC/UCukV80e0s8yelXa9JvAdt3hwdIYvrx2bPditnEOZ+5reCHoNeT/yPszwGoF8k9Bb1ewEr5fl/Iz6CZ4IjgprNTl5ORhiuvj0IMF9Dl4tnCXowhtv9rzckhHvIW0gr/x0OUBDJ6RNzHZDVg20YNsetYBfhQnJsW8naHseneoFoKO13cXkVj/h+HiISbzGHW1oqtMuuoB/nSxJYwHeGAwAAAAASUVORK5CYII="
                                width="13px" height="13px" style={{float: "left"}}/><img
                                src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEISURBVChTdZChSwRREMa/2VvBaDRcEU80GK4IFxXOy0aLsNe8pkHkgsly8YJRWMRqs8nB/QMWwWCxGYxGQXY/v7l97LLs3Q8eM/N9M+/xBsuYpTh9SXERyhpRiHXMrk1nnmI9KCWNAd1+otA1YPMPOC/UCukV80e0s8yelXa9JvAdt3hwdIYvrx2bPditnEOZ+5reCHoNeT/yPszwGoF8k9Bb1ewEr5fl/Iz6CZ4IjgprNTl5ORhiuvj0IMF9Dl4tnCXowhtv9rzckhHvIW0gr/x0OUBDJ6RNzHZDVg20YNsetYBfhQnJsW8naHseneoFoKO13cXkVj/h+HiISbzGHW1oqtMuuoB/nSxJYwHeGAwAAAAASUVORK5CYII="
                                width="13px" height="13px" style={{float: "left"}}/><img
                                src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEISURBVChTdZChSwRREMa/2VvBaDRcEU80GK4IFxXOy0aLsNe8pkHkgsly8YJRWMRqs8nB/QMWwWCxGYxGQXY/v7l97LLs3Q8eM/N9M+/xBsuYpTh9SXERyhpRiHXMrk1nnmI9KCWNAd1+otA1YPMPOC/UCukV80e0s8yelXa9JvAdt3hwdIYvrx2bPditnEOZ+5reCHoNeT/yPszwGoF8k9Bb1ewEr5fl/Iz6CZ4IjgprNTl5ORhiuvj0IMF9Dl4tnCXowhtv9rzckhHvIW0gr/x0OUBDJ6RNzHZDVg20YNsetYBfhQnJsW8naHseneoFoKO13cXkVj/h+HiISbzGHW1oqtMuuoB/nSxJYwHeGAwAAAAASUVORK5CYII="
                                width="13px" height="13px" style={{float: "left"}}/></div>
                        </div></div>
                    <div style={{clear: "both"}}></div>
                    <div style={{padding: "5px 6px 5px 12px", marginTop: "15px", background: "rgb(99, 99, 99)"}} >
                        <img
                        src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAUCAYAAABWMrcvAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGpSURBVDhPhVI9TwJBEN07ILE4En+AjQmJFBQSOGil8H+QWFrYWGppYdBogZ1Gi+ukJTYmkNic5IhntLDgB1BQkAAJxQK+mRuPO794Ccy8mXk7cztrqAhc191IpVIHi8ViGzSDX88wDB/8plgsfnAREIo8z6sieYGidQlFMZ3P58eTyeSyUqlokyIkgLn9Q0BYM02zZlnWERGDRkokEm8RgUbHO9hXxLbgV2GtIKX0bDazjW63W0Pi8CsIf9e27bZw1el0chA9RQ5tmCjKCVHUISoglEqld5jzgHFNjr4pG1DGs9gYUOiKq9AxS6JBQDn560VERqOaAY3nC6fkXqvVWhMaAvF9ccn3Tfw1hXPrdDr9gBXwyLikDPx7uDvECdhXk5eLxAsMvYJV6I9Go01eLka84tBqXONFTFk0Ho8dmD75/2CKxfLhLCL1qm7IO+VymQ9mESGZTNaRGAr9Do23dyr+UpTP54e4vbrQGBB3CoVCT+hSRJCZdcCW0FrHRo+JZOZGwEK0EffEZ8REBHQLZydgmSfihvghwqk+vuEMLo3p4JU/ciKEUp83MbWCrDkhzwAAAABJRU5ErkJggg=="/><span
                        style={{fontSize: "12px", marginLeft: "5px"}}>兰州市</span><a
                        href="tencent://message/?uin=2158079469&amp;amp;Site=联系代理&amp;amp;Menu=yes"
                        style={{float: "right", marginTop: "-1px", display: "inline-block", padding: "3px 4px", color: "rgb(255, 255, 255)", background: "rgb(70, 130, 180)", fontSize: "14px", width: "70px", textAlign: "center"}}><img
                        src="data:image/png;base64,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"
                        style={{width: "16px", height: "16px"}}/>&nbsp;QQ&nbsp;
                    </a>
                    </div>
                    <img src="https://www.hellobts.com/static/image/dz-weixin.jpg"
                         style={{width: "100%", height: "100%", display: "none"}}/>
                </div>
                <div style={{float: "left", margin: "10px 20px", border: "1px solid rgb(187, 187, 187)", width: "300px", fontSize: "14px"}}>
                    <div style={{padding: "10px", fontSize: "14px"}}><img
                        src="https://www.hellobts.com/static/image/dz-header.jpg" width="50px" height="50px"
                        style={{float: "left"}}/>
                        <div style={{float: "left", marginLeft: "25px", width: "200px"}}><div style={{display: "block"}}>白菜<span style={{float: "right", color: "red"}}>保证金12万元</span></div>
                            <div style={{display: "block", marginTop: "7px"}}><img
                                src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEISURBVChTdZChSwRREMa/2VvBaDRcEU80GK4IFxXOy0aLsNe8pkHkgsly8YJRWMRqs8nB/QMWwWCxGYxGQXY/v7l97LLs3Q8eM/N9M+/xBsuYpTh9SXERyhpRiHXMrk1nnmI9KCWNAd1+otA1YPMPOC/UCukV80e0s8yelXa9JvAdt3hwdIYvrx2bPditnEOZ+5reCHoNeT/yPszwGoF8k9Bb1ewEr5fl/Iz6CZ4IjgprNTl5ORhiuvj0IMF9Dl4tnCXowhtv9rzckhHvIW0gr/x0OUBDJ6RNzHZDVg20YNsetYBfhQnJsW8naHseneoFoKO13cXkVj/h+HiISbzGHW1oqtMuuoB/nSxJYwHeGAwAAAAASUVORK5CYII="
                                width="13px" height="13px" style={{float: "left"}}/><img
                                src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEISURBVChTdZChSwRREMa/2VvBaDRcEU80GK4IFxXOy0aLsNe8pkHkgsly8YJRWMRqs8nB/QMWwWCxGYxGQXY/v7l97LLs3Q8eM/N9M+/xBsuYpTh9SXERyhpRiHXMrk1nnmI9KCWNAd1+otA1YPMPOC/UCukV80e0s8yelXa9JvAdt3hwdIYvrx2bPditnEOZ+5reCHoNeT/yPszwGoF8k9Bb1ewEr5fl/Iz6CZ4IjgprNTl5ORhiuvj0IMF9Dl4tnCXowhtv9rzckhHvIW0gr/x0OUBDJ6RNzHZDVg20YNsetYBfhQnJsW8naHseneoFoKO13cXkVj/h+HiISbzGHW1oqtMuuoB/nSxJYwHeGAwAAAAASUVORK5CYII="
                                width="13px" height="13px" style={{float: "left"}}/><img
                                src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEISURBVChTdZChSwRREMa/2VvBaDRcEU80GK4IFxXOy0aLsNe8pkHkgsly8YJRWMRqs8nB/QMWwWCxGYxGQXY/v7l97LLs3Q8eM/N9M+/xBsuYpTh9SXERyhpRiHXMrk1nnmI9KCWNAd1+otA1YPMPOC/UCukV80e0s8yelXa9JvAdt3hwdIYvrx2bPditnEOZ+5reCHoNeT/yPszwGoF8k9Bb1ewEr5fl/Iz6CZ4IjgprNTl5ORhiuvj0IMF9Dl4tnCXowhtv9rzckhHvIW0gr/x0OUBDJ6RNzHZDVg20YNsetYBfhQnJsW8naHseneoFoKO13cXkVj/h+HiISbzGHW1oqtMuuoB/nSxJYwHeGAwAAAAASUVORK5CYII="
                                width="13px" height="13px" style={{float: "left"}}/><img
                                src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEISURBVChTdZChSwRREMa/2VvBaDRcEU80GK4IFxXOy0aLsNe8pkHkgsly8YJRWMRqs8nB/QMWwWCxGYxGQXY/v7l97LLs3Q8eM/N9M+/xBsuYpTh9SXERyhpRiHXMrk1nnmI9KCWNAd1+otA1YPMPOC/UCukV80e0s8yelXa9JvAdt3hwdIYvrx2bPditnEOZ+5reCHoNeT/yPszwGoF8k9Bb1ewEr5fl/Iz6CZ4IjgprNTl5ORhiuvj0IMF9Dl4tnCXowhtv9rzckhHvIW0gr/x0OUBDJ6RNzHZDVg20YNsetYBfhQnJsW8naHseneoFoKO13cXkVj/h+HiISbzGHW1oqtMuuoB/nSxJYwHeGAwAAAAASUVORK5CYII="
                                width="13px" height="13px" style={{float: "left"}}/><img
                                src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEISURBVChTdZChSwRREMa/2VvBaDRcEU80GK4IFxXOy0aLsNe8pkHkgsly8YJRWMRqs8nB/QMWwWCxGYxGQXY/v7l97LLs3Q8eM/N9M+/xBsuYpTh9SXERyhpRiHXMrk1nnmI9KCWNAd1+otA1YPMPOC/UCukV80e0s8yelXa9JvAdt3hwdIYvrx2bPditnEOZ+5reCHoNeT/yPszwGoF8k9Bb1ewEr5fl/Iz6CZ4IjgprNTl5ORhiuvj0IMF9Dl4tnCXowhtv9rzckhHvIW0gr/x0OUBDJ6RNzHZDVg20YNsetYBfhQnJsW8naHseneoFoKO13cXkVj/h+HiISbzGHW1oqtMuuoB/nSxJYwHeGAwAAAAASUVORK5CYII="
                                width="13px" height="13px" style={{float: "left"}}/></div>
                        </div></div>
                    <div style={{clear: "both"}}></div>
                    <div style={{padding: "5px 6px 5px 12px", marginTop: "15px", background: "rgb(99, 99, 99)"}} >
                        <img
                            src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAUCAYAAABWMrcvAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGpSURBVDhPhVI9TwJBEN07ILE4En+AjQmJFBQSOGil8H+QWFrYWGppYdBogZ1Gi+ukJTYmkNic5IhntLDgB1BQkAAJxQK+mRuPO794Ccy8mXk7cztrqAhc191IpVIHi8ViGzSDX88wDB/8plgsfnAREIo8z6sieYGidQlFMZ3P58eTyeSyUqlokyIkgLn9Q0BYM02zZlnWERGDRkokEm8RgUbHO9hXxLbgV2GtIKX0bDazjW63W0Pi8CsIf9e27bZw1el0chA9RQ5tmCjKCVHUISoglEqld5jzgHFNjr4pG1DGs9gYUOiKq9AxS6JBQDn560VERqOaAY3nC6fkXqvVWhMaAvF9ccn3Tfw1hXPrdDr9gBXwyLikDPx7uDvECdhXk5eLxAsMvYJV6I9Go01eLka84tBqXONFTFk0Ho8dmD75/2CKxfLhLCL1qm7IO+VymQ9mESGZTNaRGAr9Do23dyr+UpTP54e4vbrQGBB3CoVCT+hSRJCZdcCW0FrHRo+JZOZGwEK0EffEZ8REBHQLZydgmSfihvghwqk+vuEMLo3p4JU/ciKEUp83MbWCrDkhzwAAAABJRU5ErkJggg=="/><span
                        style={{fontSize: "12px", marginLeft: "5px"}}>上海市</span><a
                        href="tencent://message/?uin=837227177&amp;amp;Site=联系代理&amp;amp;Menu=yes"
                        style={{float: "right", marginTop: "-1px", display: "inline-block", padding: "3px 4px", color: "rgb(255, 255, 255)", background: "rgb(70, 130, 180)", fontSize: "14px", width: "70px", textAlign: "center"}}><img
                        src="data:image/png;base64,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"
                        style={{width: "16px", height: "16px"}}/>&nbsp;QQ&nbsp;
                    </a>
                    </div>
                    <img src="https://www.hellobts.com/static/image/dz-weixin.jpg"
                         style={{width: "100%", height: "100%", display: "none"}}/>
                </div>
                <div style={{float: "left", margin: "10px 20px", border: "1px solid rgb(187, 187, 187)", width: "300px", fontSize: "14px"}}>
                    <div style={{padding: "10px", fontSize: "14px"}}><img
                        src="https://www.hellobts.com/static/image/dz-header.jpg" width="50px" height="50px"
                        style={{float: "left"}}/>
                        <div style={{float: "left", marginLeft: "25px", width: "200px"}}><div style={{display: "block"}}>嘿。你的益达！<span style={{float: "right", color: "red"}}>保证金10万元</span></div>
                            <div style={{display: "block", marginTop: "7px"}}><img
                                src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEISURBVChTdZChSwRREMa/2VvBaDRcEU80GK4IFxXOy0aLsNe8pkHkgsly8YJRWMRqs8nB/QMWwWCxGYxGQXY/v7l97LLs3Q8eM/N9M+/xBsuYpTh9SXERyhpRiHXMrk1nnmI9KCWNAd1+otA1YPMPOC/UCukV80e0s8yelXa9JvAdt3hwdIYvrx2bPditnEOZ+5reCHoNeT/yPszwGoF8k9Bb1ewEr5fl/Iz6CZ4IjgprNTl5ORhiuvj0IMF9Dl4tnCXowhtv9rzckhHvIW0gr/x0OUBDJ6RNzHZDVg20YNsetYBfhQnJsW8naHseneoFoKO13cXkVj/h+HiISbzGHW1oqtMuuoB/nSxJYwHeGAwAAAAASUVORK5CYII="
                                width="13px" height="13px" style={{float: "left"}}/><img
                                src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEISURBVChTdZChSwRREMa/2VvBaDRcEU80GK4IFxXOy0aLsNe8pkHkgsly8YJRWMRqs8nB/QMWwWCxGYxGQXY/v7l97LLs3Q8eM/N9M+/xBsuYpTh9SXERyhpRiHXMrk1nnmI9KCWNAd1+otA1YPMPOC/UCukV80e0s8yelXa9JvAdt3hwdIYvrx2bPditnEOZ+5reCHoNeT/yPszwGoF8k9Bb1ewEr5fl/Iz6CZ4IjgprNTl5ORhiuvj0IMF9Dl4tnCXowhtv9rzckhHvIW0gr/x0OUBDJ6RNzHZDVg20YNsetYBfhQnJsW8naHseneoFoKO13cXkVj/h+HiISbzGHW1oqtMuuoB/nSxJYwHeGAwAAAAASUVORK5CYII="
                                width="13px" height="13px" style={{float: "left"}}/><img
                                src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEISURBVChTdZChSwRREMa/2VvBaDRcEU80GK4IFxXOy0aLsNe8pkHkgsly8YJRWMRqs8nB/QMWwWCxGYxGQXY/v7l97LLs3Q8eM/N9M+/xBsuYpTh9SXERyhpRiHXMrk1nnmI9KCWNAd1+otA1YPMPOC/UCukV80e0s8yelXa9JvAdt3hwdIYvrx2bPditnEOZ+5reCHoNeT/yPszwGoF8k9Bb1ewEr5fl/Iz6CZ4IjgprNTl5ORhiuvj0IMF9Dl4tnCXowhtv9rzckhHvIW0gr/x0OUBDJ6RNzHZDVg20YNsetYBfhQnJsW8naHseneoFoKO13cXkVj/h+HiISbzGHW1oqtMuuoB/nSxJYwHeGAwAAAAASUVORK5CYII="
                                width="13px" height="13px" style={{float: "left"}}/><img
                                src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEISURBVChTdZChSwRREMa/2VvBaDRcEU80GK4IFxXOy0aLsNe8pkHkgsly8YJRWMRqs8nB/QMWwWCxGYxGQXY/v7l97LLs3Q8eM/N9M+/xBsuYpTh9SXERyhpRiHXMrk1nnmI9KCWNAd1+otA1YPMPOC/UCukV80e0s8yelXa9JvAdt3hwdIYvrx2bPditnEOZ+5reCHoNeT/yPszwGoF8k9Bb1ewEr5fl/Iz6CZ4IjgprNTl5ORhiuvj0IMF9Dl4tnCXowhtv9rzckhHvIW0gr/x0OUBDJ6RNzHZDVg20YNsetYBfhQnJsW8naHseneoFoKO13cXkVj/h+HiISbzGHW1oqtMuuoB/nSxJYwHeGAwAAAAASUVORK5CYII="
                                width="13px" height="13px" style={{float: "left"}}/><img
                                src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEISURBVChTdZChSwRREMa/2VvBaDRcEU80GK4IFxXOy0aLsNe8pkHkgsly8YJRWMRqs8nB/QMWwWCxGYxGQXY/v7l97LLs3Q8eM/N9M+/xBsuYpTh9SXERyhpRiHXMrk1nnmI9KCWNAd1+otA1YPMPOC/UCukV80e0s8yelXa9JvAdt3hwdIYvrx2bPditnEOZ+5reCHoNeT/yPszwGoF8k9Bb1ewEr5fl/Iz6CZ4IjgprNTl5ORhiuvj0IMF9Dl4tnCXowhtv9rzckhHvIW0gr/x0OUBDJ6RNzHZDVg20YNsetYBfhQnJsW8naHseneoFoKO13cXkVj/h+HiISbzGHW1oqtMuuoB/nSxJYwHeGAwAAAAASUVORK5CYII="
                                width="13px" height="13px" style={{float: "left"}}/></div>
                        </div></div>
                    <div style={{clear: "both"}}></div>
                    <div style={{padding: "5px 6px 5px 12px", marginTop: "15px", background: "rgb(99, 99, 99)"}} >
                        <img
                            src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAUCAYAAABWMrcvAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGpSURBVDhPhVI9TwJBEN07ILE4En+AjQmJFBQSOGil8H+QWFrYWGppYdBogZ1Gi+ukJTYmkNic5IhntLDgB1BQkAAJxQK+mRuPO794Ccy8mXk7cztrqAhc191IpVIHi8ViGzSDX88wDB/8plgsfnAREIo8z6sieYGidQlFMZ3P58eTyeSyUqlokyIkgLn9Q0BYM02zZlnWERGDRkokEm8RgUbHO9hXxLbgV2GtIKX0bDazjW63W0Pi8CsIf9e27bZw1el0chA9RQ5tmCjKCVHUISoglEqld5jzgHFNjr4pG1DGs9gYUOiKq9AxS6JBQDn560VERqOaAY3nC6fkXqvVWhMaAvF9ccn3Tfw1hXPrdDr9gBXwyLikDPx7uDvECdhXk5eLxAsMvYJV6I9Go01eLka84tBqXONFTFk0Ho8dmD75/2CKxfLhLCL1qm7IO+VymQ9mESGZTNaRGAr9Do23dyr+UpTP54e4vbrQGBB3CoVCT+hSRJCZdcCW0FrHRo+JZOZGwEK0EffEZ8REBHQLZydgmSfihvghwqk+vuEMLo3p4JU/ciKEUp83MbWCrDkhzwAAAABJRU5ErkJggg=="/><span
                        style={{fontSize: "12px", marginLeft: "5px"}}>武汉市</span><a
                        href="tencent://message/?uin=1194729873&amp;amp;Site=联系代理&amp;amp;Menu=yes"
                        style={{float: "right", marginTop: "-1px", display: "inline-block", padding: "3px 4px", color: "rgb(255, 255, 255)", background: "rgb(70, 130, 180)", fontSize: "14px", width: "70px", textAlign: "center"}}><img
                        src="data:image/png;base64,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"
                        style={{width: "16px", height: "16px"}}/>&nbsp;QQ&nbsp;
                    </a>
                    </div>
                    <img src="https://www.hellobts.com/static/image/dz-weixin.jpg"
                         style={{width: "100%", height: "100%", display: "none"}}/>
                </div>
                <div style={{float: "left", margin: "10px 20px", border: "1px solid rgb(187, 187, 187)", width: "300px", fontSize: "14px"}}>
                    <div style={{padding: "10px", fontSize: "14px"}}><img
                        src="https://www.hellobts.com/static/image/dz-header.jpg" width="50px" height="50px"
                        style={{float: "left"}}/>
                        <div style={{float: "left", marginLeft: "25px", width: "200px"}}><div style={{display: "block"}}>点点<span style={{float: "right", color: "red"}}>保证金10万元</span></div>
                            <div style={{display: "block", marginTop: "7px"}}><img
                                src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEISURBVChTdZChSwRREMa/2VvBaDRcEU80GK4IFxXOy0aLsNe8pkHkgsly8YJRWMRqs8nB/QMWwWCxGYxGQXY/v7l97LLs3Q8eM/N9M+/xBsuYpTh9SXERyhpRiHXMrk1nnmI9KCWNAd1+otA1YPMPOC/UCukV80e0s8yelXa9JvAdt3hwdIYvrx2bPditnEOZ+5reCHoNeT/yPszwGoF8k9Bb1ewEr5fl/Iz6CZ4IjgprNTl5ORhiuvj0IMF9Dl4tnCXowhtv9rzckhHvIW0gr/x0OUBDJ6RNzHZDVg20YNsetYBfhQnJsW8naHseneoFoKO13cXkVj/h+HiISbzGHW1oqtMuuoB/nSxJYwHeGAwAAAAASUVORK5CYII="
                                width="13px" height="13px" style={{float: "left"}}/><img
                                src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEISURBVChTdZChSwRREMa/2VvBaDRcEU80GK4IFxXOy0aLsNe8pkHkgsly8YJRWMRqs8nB/QMWwWCxGYxGQXY/v7l97LLs3Q8eM/N9M+/xBsuYpTh9SXERyhpRiHXMrk1nnmI9KCWNAd1+otA1YPMPOC/UCukV80e0s8yelXa9JvAdt3hwdIYvrx2bPditnEOZ+5reCHoNeT/yPszwGoF8k9Bb1ewEr5fl/Iz6CZ4IjgprNTl5ORhiuvj0IMF9Dl4tnCXowhtv9rzckhHvIW0gr/x0OUBDJ6RNzHZDVg20YNsetYBfhQnJsW8naHseneoFoKO13cXkVj/h+HiISbzGHW1oqtMuuoB/nSxJYwHeGAwAAAAASUVORK5CYII="
                                width="13px" height="13px" style={{float: "left"}}/><img
                                src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEISURBVChTdZChSwRREMa/2VvBaDRcEU80GK4IFxXOy0aLsNe8pkHkgsly8YJRWMRqs8nB/QMWwWCxGYxGQXY/v7l97LLs3Q8eM/N9M+/xBsuYpTh9SXERyhpRiHXMrk1nnmI9KCWNAd1+otA1YPMPOC/UCukV80e0s8yelXa9JvAdt3hwdIYvrx2bPditnEOZ+5reCHoNeT/yPszwGoF8k9Bb1ewEr5fl/Iz6CZ4IjgprNTl5ORhiuvj0IMF9Dl4tnCXowhtv9rzckhHvIW0gr/x0OUBDJ6RNzHZDVg20YNsetYBfhQnJsW8naHseneoFoKO13cXkVj/h+HiISbzGHW1oqtMuuoB/nSxJYwHeGAwAAAAASUVORK5CYII="
                                width="13px" height="13px" style={{float: "left"}}/><img
                                src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEISURBVChTdZChSwRREMa/2VvBaDRcEU80GK4IFxXOy0aLsNe8pkHkgsly8YJRWMRqs8nB/QMWwWCxGYxGQXY/v7l97LLs3Q8eM/N9M+/xBsuYpTh9SXERyhpRiHXMrk1nnmI9KCWNAd1+otA1YPMPOC/UCukV80e0s8yelXa9JvAdt3hwdIYvrx2bPditnEOZ+5reCHoNeT/yPszwGoF8k9Bb1ewEr5fl/Iz6CZ4IjgprNTl5ORhiuvj0IMF9Dl4tnCXowhtv9rzckhHvIW0gr/x0OUBDJ6RNzHZDVg20YNsetYBfhQnJsW8naHseneoFoKO13cXkVj/h+HiISbzGHW1oqtMuuoB/nSxJYwHeGAwAAAAASUVORK5CYII="
                                width="13px" height="13px" style={{float: "left"}}/><img
                                src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEISURBVChTdZChSwRREMa/2VvBaDRcEU80GK4IFxXOy0aLsNe8pkHkgsly8YJRWMRqs8nB/QMWwWCxGYxGQXY/v7l97LLs3Q8eM/N9M+/xBsuYpTh9SXERyhpRiHXMrk1nnmI9KCWNAd1+otA1YPMPOC/UCukV80e0s8yelXa9JvAdt3hwdIYvrx2bPditnEOZ+5reCHoNeT/yPszwGoF8k9Bb1ewEr5fl/Iz6CZ4IjgprNTl5ORhiuvj0IMF9Dl4tnCXowhtv9rzckhHvIW0gr/x0OUBDJ6RNzHZDVg20YNsetYBfhQnJsW8naHseneoFoKO13cXkVj/h+HiISbzGHW1oqtMuuoB/nSxJYwHeGAwAAAAASUVORK5CYII="
                                width="13px" height="13px" style={{float: "left"}}/></div>
                        </div></div>
                    <div style={{clear: "both"}}></div>
                    <div style={{padding: "5px 6px 5px 12px", marginTop: "15px", background: "rgb(99, 99, 99)"}} >
                        <img
                            src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAUCAYAAABWMrcvAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGpSURBVDhPhVI9TwJBEN07ILE4En+AjQmJFBQSOGil8H+QWFrYWGppYdBogZ1Gi+ukJTYmkNic5IhntLDgB1BQkAAJxQK+mRuPO794Ccy8mXk7cztrqAhc191IpVIHi8ViGzSDX88wDB/8plgsfnAREIo8z6sieYGidQlFMZ3P58eTyeSyUqlokyIkgLn9Q0BYM02zZlnWERGDRkokEm8RgUbHO9hXxLbgV2GtIKX0bDazjW63W0Pi8CsIf9e27bZw1el0chA9RQ5tmCjKCVHUISoglEqld5jzgHFNjr4pG1DGs9gYUOiKq9AxS6JBQDn560VERqOaAY3nC6fkXqvVWhMaAvF9ccn3Tfw1hXPrdDr9gBXwyLikDPx7uDvECdhXk5eLxAsMvYJV6I9Go01eLka84tBqXONFTFk0Ho8dmD75/2CKxfLhLCL1qm7IO+VymQ9mESGZTNaRGAr9Do23dyr+UpTP54e4vbrQGBB3CoVCT+hSRJCZdcCW0FrHRo+JZOZGwEK0EffEZ8REBHQLZydgmSfihvghwqk+vuEMLo3p4JU/ciKEUp83MbWCrDkhzwAAAABJRU5ErkJggg=="/><span
                        style={{fontSize: "12px", marginLeft: "5px"}}>广州市</span><a
                        href="tencent://message/?uin=77036553&amp;amp;Site=联系代理&amp;amp;Menu=yes"
                        style={{float: "right", marginTop: "-1px", display: "inline-block", padding: "3px 4px", color: "rgb(255, 255, 255)", background: "rgb(70, 130, 180)", fontSize: "14px", width: "70px", textAlign: "center"}}><img
                        src="data:image/png;base64,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"
                        style={{width: "16px", height: "16px"}}/>&nbsp;QQ&nbsp;
                    </a>
                    </div>
                    <img src="https://www.hellobts.com/static/image/dz-weixin.jpg"
                         style={{width: "100%", height: "100%", display: "none"}}/>
                </div>
                <div style={{float: "left", margin: "10px 20px", border: "1px solid rgb(187, 187, 187)", width: "300px", fontSize: "14px"}}>
                    <div style={{padding: "10px", fontSize: "14px"}}><img
                        src="https://www.hellobts.com/static/image/dz-header.jpg" width="50px" height="50px"
                        style={{float: "left"}}/>
                        <div style={{float: "left", marginLeft: "25px", width: "200px"}}><div style={{display: "block"}}>勇敢的心<span style={{float: "right", color: "red"}}>保证金10万元</span></div>
                            <div style={{display: "block", marginTop: "7px"}}><img
                                src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEISURBVChTdZChSwRREMa/2VvBaDRcEU80GK4IFxXOy0aLsNe8pkHkgsly8YJRWMRqs8nB/QMWwWCxGYxGQXY/v7l97LLs3Q8eM/N9M+/xBsuYpTh9SXERyhpRiHXMrk1nnmI9KCWNAd1+otA1YPMPOC/UCukV80e0s8yelXa9JvAdt3hwdIYvrx2bPditnEOZ+5reCHoNeT/yPszwGoF8k9Bb1ewEr5fl/Iz6CZ4IjgprNTl5ORhiuvj0IMF9Dl4tnCXowhtv9rzckhHvIW0gr/x0OUBDJ6RNzHZDVg20YNsetYBfhQnJsW8naHseneoFoKO13cXkVj/h+HiISbzGHW1oqtMuuoB/nSxJYwHeGAwAAAAASUVORK5CYII="
                                width="13px" height="13px" style={{float: "left"}}/><img
                                src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEISURBVChTdZChSwRREMa/2VvBaDRcEU80GK4IFxXOy0aLsNe8pkHkgsly8YJRWMRqs8nB/QMWwWCxGYxGQXY/v7l97LLs3Q8eM/N9M+/xBsuYpTh9SXERyhpRiHXMrk1nnmI9KCWNAd1+otA1YPMPOC/UCukV80e0s8yelXa9JvAdt3hwdIYvrx2bPditnEOZ+5reCHoNeT/yPszwGoF8k9Bb1ewEr5fl/Iz6CZ4IjgprNTl5ORhiuvj0IMF9Dl4tnCXowhtv9rzckhHvIW0gr/x0OUBDJ6RNzHZDVg20YNsetYBfhQnJsW8naHseneoFoKO13cXkVj/h+HiISbzGHW1oqtMuuoB/nSxJYwHeGAwAAAAASUVORK5CYII="
                                width="13px" height="13px" style={{float: "left"}}/><img
                                src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEISURBVChTdZChSwRREMa/2VvBaDRcEU80GK4IFxXOy0aLsNe8pkHkgsly8YJRWMRqs8nB/QMWwWCxGYxGQXY/v7l97LLs3Q8eM/N9M+/xBsuYpTh9SXERyhpRiHXMrk1nnmI9KCWNAd1+otA1YPMPOC/UCukV80e0s8yelXa9JvAdt3hwdIYvrx2bPditnEOZ+5reCHoNeT/yPszwGoF8k9Bb1ewEr5fl/Iz6CZ4IjgprNTl5ORhiuvj0IMF9Dl4tnCXowhtv9rzckhHvIW0gr/x0OUBDJ6RNzHZDVg20YNsetYBfhQnJsW8naHseneoFoKO13cXkVj/h+HiISbzGHW1oqtMuuoB/nSxJYwHeGAwAAAAASUVORK5CYII="
                                width="13px" height="13px" style={{float: "left"}}/><img
                                src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEISURBVChTdZChSwRREMa/2VvBaDRcEU80GK4IFxXOy0aLsNe8pkHkgsly8YJRWMRqs8nB/QMWwWCxGYxGQXY/v7l97LLs3Q8eM/N9M+/xBsuYpTh9SXERyhpRiHXMrk1nnmI9KCWNAd1+otA1YPMPOC/UCukV80e0s8yelXa9JvAdt3hwdIYvrx2bPditnEOZ+5reCHoNeT/yPszwGoF8k9Bb1ewEr5fl/Iz6CZ4IjgprNTl5ORhiuvj0IMF9Dl4tnCXowhtv9rzckhHvIW0gr/x0OUBDJ6RNzHZDVg20YNsetYBfhQnJsW8naHseneoFoKO13cXkVj/h+HiISbzGHW1oqtMuuoB/nSxJYwHeGAwAAAAASUVORK5CYII="
                                width="13px" height="13px" style={{float: "left"}}/><img
                                src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEISURBVChTdZChSwRREMa/2VvBaDRcEU80GK4IFxXOy0aLsNe8pkHkgsly8YJRWMRqs8nB/QMWwWCxGYxGQXY/v7l97LLs3Q8eM/N9M+/xBsuYpTh9SXERyhpRiHXMrk1nnmI9KCWNAd1+otA1YPMPOC/UCukV80e0s8yelXa9JvAdt3hwdIYvrx2bPditnEOZ+5reCHoNeT/yPszwGoF8k9Bb1ewEr5fl/Iz6CZ4IjgprNTl5ORhiuvj0IMF9Dl4tnCXowhtv9rzckhHvIW0gr/x0OUBDJ6RNzHZDVg20YNsetYBfhQnJsW8naHseneoFoKO13cXkVj/h+HiISbzGHW1oqtMuuoB/nSxJYwHeGAwAAAAASUVORK5CYII="
                                width="13px" height="13px" style={{float: "left"}}/></div>
                        </div></div>
                    <div style={{clear: "both"}}></div>
                    <div style={{padding: "5px 6px 5px 12px", marginTop: "15px", background: "rgb(99, 99, 99)"}} >
                        <img
                            src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAUCAYAAABWMrcvAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGpSURBVDhPhVI9TwJBEN07ILE4En+AjQmJFBQSOGil8H+QWFrYWGppYdBogZ1Gi+ukJTYmkNic5IhntLDgB1BQkAAJxQK+mRuPO794Ccy8mXk7cztrqAhc191IpVIHi8ViGzSDX88wDB/8plgsfnAREIo8z6sieYGidQlFMZ3P58eTyeSyUqlokyIkgLn9Q0BYM02zZlnWERGDRkokEm8RgUbHO9hXxLbgV2GtIKX0bDazjW63W0Pi8CsIf9e27bZw1el0chA9RQ5tmCjKCVHUISoglEqld5jzgHFNjr4pG1DGs9gYUOiKq9AxS6JBQDn560VERqOaAY3nC6fkXqvVWhMaAvF9ccn3Tfw1hXPrdDr9gBXwyLikDPx7uDvECdhXk5eLxAsMvYJV6I9Go01eLka84tBqXONFTFk0Ho8dmD75/2CKxfLhLCL1qm7IO+VymQ9mESGZTNaRGAr9Do23dyr+UpTP54e4vbrQGBB3CoVCT+hSRJCZdcCW0FrHRo+JZOZGwEK0EffEZ8REBHQLZydgmSfihvghwqk+vuEMLo3p4JU/ciKEUp83MbWCrDkhzwAAAABJRU5ErkJggg=="/><span
                        style={{fontSize: "12px", marginLeft: "5px"}}>深圳市</span><a
                        href="tencent://message/?uin=3252844622&amp;amp;Site=联系代理&amp;amp;Menu=yes"
                        style={{float: "right", marginTop: "-1px", display: "inline-block", padding: "3px 4px", color: "rgb(255, 255, 255)", background: "rgb(70, 130, 180)", fontSize: "14px", width: "70px", textAlign: "center"}}><img
                        src="data:image/png;base64,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"
                        style={{width: "16px", height: "16px"}}/>&nbsp;QQ&nbsp;
                    </a>
                    </div>
                    <img src="https://www.hellobts.com/static/image/dz-weixin.jpg"
                         style={{width: "100%", height: "100%", display: "none"}}/>
                </div>
            </div>
        );
    }
};
AccountDepositWithdraw = BindToChainState(AccountDepositWithdraw);

class DepositStoreWrapper extends React.Component {

    componentWillMount() {
        if (Apis.instance().chain_id.substr(0, 8) === "4018d784") { // Only fetch this when on BTS main net
            GatewayActions.fetchCoins.defer(); // Openledger
            GatewayActions.fetchCoinsSimple.defer({backer: "RUDEX", url:rudexAPIs.BASE+rudexAPIs.COINS_LIST}); // RuDEX
            GatewayActions.fetchCoins.defer({backer: "TRADE"}); // Blocktrades
        }
    }

    render() {
        return <AccountDepositWithdraw {...this.props}/>;
    }
}

export default connect(DepositStoreWrapper, {
    listenTo() {
        return [AccountStore, SettingsStore, GatewayStore];
    },
    getProps() {
        return {
            account: AccountStore.getState().currentAccount,
            viewSettings: SettingsStore.getState().viewSettings,
            openLedgerBackedCoins: GatewayStore.getState().backedCoins.get("OPEN", []),
            rudexBackedCoins: GatewayStore.getState().backedCoins.get("RUDEX", []),
            blockTradesBackedCoins: GatewayStore.getState().backedCoins.get("TRADE", []),
            servicesDown: GatewayStore.getState().down || {}
        };
    }
});
