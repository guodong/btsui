webpackJsonp([28],{1283:function(e,t,a){var n=a(1284);"string"==typeof n&&(n=[[e.i,n,""]]);a(1181)(n,{});n.locals&&(e.exports=n.locals)},1284:function(e,t,a){t=e.exports=a(1180)(),t.push([e.i,".active-witness>td{background-color:rgba(80,210,194,.4);transition:background-color .6s ease}.clickable{cursor:pointer;user-select:none}.view-switcher{padding-top:1rem;text-align:right}",""])},1310:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),i=a.n(l),c=a(26),o=a.n(c),u=a(259),m=a(34),p=a(35),d=a(6),b=a(108),g=a(25),h=a.n(g),f=a(395),E=a(59),_=(a.n(E),a(51)),v=a(38),w=a(50),k=a.n(w),y=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();a(1283);var O=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),y(t,[{key:"_onCardClick",value:function(e){e.preventDefault(),this.context.router.push("/account/"+this.props.witness.get("name"))}},{key:"render",value:function(){var e=d.b.getWitnessById(this.props.witness.get("id"));if(!e)return null;var t=e.get("total_votes"),a=e.get("last_aslot"),n={};n=this.props.most_recent-a>100?{borderLeft:"1px solid #FCAB53"}:{borderLeft:"1px solid #50D2C2"};var r=new Date(Date.now()-(this.props.most_recent-a)*d.b.getObject("2.0.0").getIn(["parameters","block_interval"])*1e3);return i.a.createElement("div",{className:"grid-content account-card",onClick:this._onCardClick.bind(this)},i.a.createElement("div",{className:"card",style:n},i.a.createElement("h4",{className:"text-center"},"#",this.props.rank,": ",this.props.witness.get("name")),i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"text-center"},i.a.createElement(u.a,{account:this.props.witness.get("name"),size:{height:64,width:64}})),i.a.createElement("br",null),i.a.createElement("table",{className:"table key-value-table"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"Votes"),i.a.createElement("td",null,i.a.createElement(b.a,{amount:t,asset:"1.3.0",decimalOffset:5}))),i.a.createElement("tr",null,i.a.createElement("td",null,"Last Block"),i.a.createElement("td",null,i.a.createElement(f.a,{time:new Date(r)}))),i.a.createElement("tr",null,i.a.createElement("td",null,"Missed"),i.a.createElement("td",null,e.get("total_missed"))))))))}}]),t}(i.a.Component);O.propTypes={witness:m.a.ChainAccount.isRequired},O.contextTypes={router:i.a.PropTypes.object.isRequired},O=Object(p.a)(O,{keep_updating:!0});var j=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),y(t,[{key:"_onRowClick",value:function(e){e.preventDefault(),this.context.router.push("/account/"+this.props.witness.get("name"))}},{key:"render",value:function(){var e=this.props,t=e.witness,a=e.isCurrent,n=e.rank,r=d.b.getWitnessById(this.props.witness.get("id"));if(!r)return null;var s=(r.get("total_votes"),r.get("last_aslot")),l={};l=this.props.most_recent-s>100?{borderLeft:"1px solid #FCAB53"}:{borderLeft:"1px solid #50D2C2"};var c=new Date(Date.now()-(this.props.most_recent-s)*d.b.getObject("2.0.0").getIn(["parameters","block_interval"])*1e3),o=a?"active-witness":"",u=r.get("total_missed"),m=k()("txtlabel",{success:u<=500},{info:u>500&&u<=1250},{warning:u>1250&&u<=2e3},{error:u>=200});return i.a.createElement("tr",{className:o,onClick:this._onRowClick.bind(this)},i.a.createElement("td",null,n),i.a.createElement("td",{style:l},t.get("name")),i.a.createElement("td",null,i.a.createElement(f.a,{time:new Date(c)})),i.a.createElement("td",null,r.get("last_confirmed_block_num")),i.a.createElement("td",{className:m},u),i.a.createElement("td",null,i.a.createElement(b.a,{amount:r.get("total_votes"),asset:"1.3.0",decimalOffset:5})))}}]),t}(i.a.Component);j.propTypes={witness:m.a.ChainAccount.isRequired},j.contextTypes={router:i.a.PropTypes.object.isRequired},j=Object(p.a)(j,{keep_updating:!0});var C=function(e){function t(){n(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={sortBy:"rank",inverseSort:!0},e}return s(t,e),y(t,[{key:"_setSort",value:function(e){this.setState({sortBy:e,inverseSort:e===this.state.sortBy?!this.state.inverseSort:this.state.inverseSort})}},{key:"render",value:function(){var e=this,t=this.props,a=t.witnesses,n=t.current,r=t.cardView,s=t.witnessList,l=this.state,c=l.sortBy,o=l.inverseSort,u=0,m={};a.filter(function(e){return!!e&&-1!==s.indexOf(e.get("id"))}).sort(function(e,t){if(e&&t)return parseInt(t.get("total_votes"),10)-parseInt(e.get("total_votes"),10)}).forEach(function(e,t){if(e){var a=e.get("last_aslot");u<a&&(u=a),m[e.get("id")]=t+1}});var p=null;return a.length>0&&a[1]&&(p=a.filter(function(t){if(!t)return!1;var a=d.b.getObject(t.get("witness_account"));if(!a)return!1;var n=a.get("name");return!!n&&-1!==n.indexOf(e.props.filter)}).sort(function(e,t){var a=d.b.getObject(e.get("witness_account")),n=d.b.getObject(t.get("witness_account"));if(!a||!n)return 0;switch(c){case"name":return a.get("name")>n.get("name")?o?1:-1:a.get("name")<n.get("name")?o?-1:1:0;case"rank":return o?m[e.get("id")]-m[t.get("id")]:m[t.get("id")]-m[e.get("id")];default:return o?parseInt(e.get(c),10)-parseInt(t.get(c),10):parseInt(t.get(c),10)-parseInt(e.get(c),10)}}).map(function(t){return r?i.a.createElement(O,{key:t.get("id"),rank:m[t.get("id")],witness:t.get("witness_account"),most_recent:e.props.current_aslot}):i.a.createElement(j,{key:t.get("id"),rank:m[t.get("id")],isCurrent:n===t.get("id"),witness:t.get("witness_account"),most_recent:e.props.current_aslot})})),r?i.a.createElement("div",{className:"grid-block small-up-1 medium-up-2 large-up-3"},p):i.a.createElement("table",{className:"table table-hover"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"rank")},i.a.createElement(h.a,{content:"explorer.witnesses.rank"})),i.a.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"name")},i.a.createElement(h.a,{content:"account.votes.name"})),i.a.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"last_aslot")},i.a.createElement(h.a,{content:"explorer.blocks.last_block"})),i.a.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"last_confirmed_block_num")},i.a.createElement(h.a,{content:"explorer.witnesses.last_confirmed"})),i.a.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"total_missed")},i.a.createElement(h.a,{content:"explorer.witnesses.missed"})),i.a.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"total_votes")},i.a.createElement(h.a,{content:"account.votes.votes"})))),i.a.createElement("tbody",null,p))}}]),t}(i.a.Component);C.propTypes={witnesses:m.a.ChainObjectsList.isRequired},C=Object(p.a)(C,{keep_updating:!0,show_loader:!0});var x=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={filterWitness:e.filterWitness||"",cardView:e.cardView},a}return s(t,e),y(t,[{key:"_onFilter",value:function(e){e.preventDefault(),this.setState({filterWitness:e.target.value.toLowerCase()}),_.a.changeViewSetting({filterWitness:e.target.value.toLowerCase()})}},{key:"_toggleView",value:function(){_.a.changeViewSetting({cardView:!this.state.cardView}),this.setState({cardView:!this.state.cardView})}},{key:"render",value:function(){var e=this.props,t=e.dynGlobalObject,a=e.globalObject;t=t.toJS(),a=a.toJS();var n=d.b.getObject(t.current_witness),r=null;return n&&(r=d.b.getObject(n.get("witness_account"))),i.a.createElement("div",{className:"grid-block"},i.a.createElement("div",{className:"grid-block page-layout"},i.a.createElement("div",{className:"grid-block vertical small-5 medium-3"},i.a.createElement("div",{className:"grid-content"},i.a.createElement("br",null),i.a.createElement("table",{className:"table key-value-table"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(h.a,{content:"explorer.witnesses.current"})),i.a.createElement("td",null,r?r.get("name"):null)),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(h.a,{content:"explorer.blocks.active_witnesses"})),i.a.createElement("td",null,Object.keys(a.active_witnesses).length)),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(h.a,{content:"explorer.witnesses.participation"})),i.a.createElement("td",null,t.participation,"%")),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(h.a,{content:"explorer.witnesses.pay"})),i.a.createElement("td",null,i.a.createElement(b.a,{amount:a.parameters.witness_pay_per_block,asset:"1.3.0"}))),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(h.a,{content:"explorer.witnesses.budget"})),i.a.createElement("td",null," ",i.a.createElement(b.a,{amount:t.witness_budget,asset:"1.3.0"}))),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(h.a,{content:"explorer.witnesses.next_vote"})),i.a.createElement("td",null," ",i.a.createElement(f.a,{time:new Date(t.next_maintenance_time)}))),i.a.createElement("tr",null,i.a.createElement("td",null," ",i.a.createElement(h.a,{component:"h4",content:"markets.filter"})," "),i.a.createElement("td",null," ",i.a.createElement("input",{type:"text",value:this.state.filterWitness,onChange:this._onFilter.bind(this)})," ")))),i.a.createElement("div",{className:"view-switcher"},i.a.createElement("span",{className:"button outline",onClick:this._toggleView.bind(this)},this.state.cardView?i.a.createElement(h.a,{content:"explorer.witnesses.table"}):i.a.createElement(h.a,{content:"explorer.witnesses.card"}))))),i.a.createElement("div",{className:"grid-block"},i.a.createElement("div",{className:"grid-content "},i.a.createElement(C,{current_aslot:t.current_aslot,current:n?n.get("id"):null,witnesses:o.a.List(a.active_witnesses),witnessList:a.active_witnesses,filter:this.state.filterWitness,cardView:this.state.cardView})))))}}]),t}(i.a.Component);x.propTypes={globalObject:m.a.ChainObject.isRequired,dynGlobalObject:m.a.ChainObject.isRequired},x.defaultProps={globalObject:"2.0.0",dynGlobalObject:"2.1.0"},x=Object(p.a)(x,{keep_updating:!0});var N=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),y(t,[{key:"render",value:function(){return i.a.createElement(x,this.props)}}]),t}(i.a.Component);N=Object(E.connect)(N,{listenTo:function(){return[v.a]},getProps:function(){return{cardView:v.a.getState().viewSettings.get("cardView"),filterWitness:v.a.getState().viewSettings.get("filterWitness")}}}),t.default=N}});
//# sourceMappingURL=28.js.map