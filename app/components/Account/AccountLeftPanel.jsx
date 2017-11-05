import React from "react";
import {PropTypes} from "react";
import {Link} from "react-router/es";
import ReactTooltip from "react-tooltip";
import AccountInfo from "./AccountInfo";
import Translate from "react-translate-component";
import AccountActions from "actions/AccountActions";
import SettingsActions from "actions/SettingsActions";

class AccountLeftPanel extends React.Component {

    static propTypes = {
        account: React.PropTypes.object.isRequired,
        linkedAccounts: PropTypes.object,
    };

    constructor(props) {
        super(props);
        this.last_path = null;

        this.state = {
            showAdvanced: props.viewSettings.get("showAdvanced", false),
            showQR: props.viewSettings.get("showDepositQR", false)
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        const changed = this.last_path !== window.location.hash;
        this.last_path = window.location.hash;
        return (
            changed ||
            this.props.account !== nextProps.account ||
            this.props.linkedAccounts !== nextProps.linkedAccounts ||
            nextState.showAdvanced !== this.state.showAdvanced ||
            nextState.showQR !== this.state.showQR ||
            nextState.titleClass !== this.state.titleClass
        );
    }

    componentWillUnmount() {
        ReactTooltip.hide();
    }

    onLinkAccount(e) {
        e.preventDefault();
        AccountActions.linkAccount(this.props.account.get("name"));
    }

    onUnlinkAccount(e) {
        e.preventDefault();
        AccountActions.unlinkAccount(this.props.account.get("name"));
    }

    _toggleAdvanced(e) {
        e.preventDefault();
        let newState = !this.state.showAdvanced;
        this.setState({
            showAdvanced: newState
        });

        SettingsActions.changeViewSetting({showAdvanced: newState});
    }

    _toggleQR(value) {
        this.setState({
            showQR: value
        });
        SettingsActions.changeViewSetting({showDepositQR: value});
    }

    _depositClick() {
        this._toggleQR(true);
        this.setState({titleClass: "account-title flash"});
        setTimeout(() => {
            this.setState({titleClass: undefined});
        }, 250);
    }

    render() {
        let {account, linkedAccounts, isMyAccount} = this.props;
        let account_name = account.get("name");
        let linkBtn = null;

        linkBtn = isMyAccount ? null : linkedAccounts.has(account_name) ?
        <span className="button block-button" onClick={this.onUnlinkAccount.bind(this)}><Translate
            content="account.unfollow"/>
        </span> :
        <span className="button block-button" onClick={this.onLinkAccount.bind(this)}>
            <Translate content="account.follow"/>
        </span>;

        let caret = this.state.showAdvanced ? <span>&#9660;</span> : <span>&#9650;</span>;

        const imageSize = {height: 150, width: 150};
        return (
            <div className="grid-block vertical account-left-panel no-padding no-overflow">
                <div className="grid-block">
                    <div className="grid-content no-padding" style={{overflowX: "hidden"}}>

                        <div className="regular-padding">
                            <AccountInfo
                                account={account.get("id")}
                                image_size={imageSize}
                                my_account={isMyAccount}
                                showQR={this.state.showQR}
                                toggleQR={this._toggleQR.bind(this)}
                                titleClass={this.state.titleClass}
                            />
                            <div className="grid-container no-margin" style={{paddingTop: 20, maxWidth: imageSize.width}}>
                                {/*<div onClick={this._depositClick.bind(this)} style={{paddingBottom: 15}}><Translate className="button block-button no-margin" content="account.deposit"/></div>*/}
                                {/*<div style={{paddingBottom: 15}}><Link to={`/transfer/?to=${account_name}`}><Translate className="button block-button no-margin" content="account.pay"/></Link></div>*/}
                                {/*{ linkBtn }*/}
                            </div>
                        </div>
                        <section className="block-list">
                            <ul className="account-left-menu" style={{marginBottom: 0}}>
                                <li><Link to={`/account/${account_name}/dashboard/`} activeClassName="active"><Translate content="header.dashboard"/></Link></li>
                                {/*<li><Link to={`/account/${account_name}/member-stats/`} activeClassName="active"><Translate content="account.member.stats"/></Link></li>*/}
                                <li><Link to={`/account/${account_name}/deposit-withdraw/`} activeClassName="active"><Translate content="account.deposit_withdraw"/></Link></li>
                                <li><Link to={`/transfer/?to=${account_name}`} activeClassName="active"><Translate content="account.pay"/></Link></li>
                                <li><Link to={`/account/${account_name}/orders/`} activeClassName="active"><Translate content="account.open_orders"/></Link></li>
                                {/*<li><Link to={`/account/${account_name}/voting/`} activeClassName="active"><Translate content="account.voting"/></Link></li>*/}

                                {/* <li className="menu-subheader" >
                                <span className="button outline small">
                                <Translate content="account.user_issued_assets.advanced" />

                            </span>
                        </li> */}
                            </ul>
                        </section>

                    </div>
                </div>
            </div>
        );
    }
}

export default AccountLeftPanel;
