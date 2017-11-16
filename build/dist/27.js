webpackJsonp([27],{1211:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"b",function(){return g}),n.d(t,"a",function(){return b});var i=n(1),c=n.n(i),l=n(25),u=n.n(l),p=n(50),m=n.n(p),d=n(59),h=(n.n(d),n(51)),f=n(38),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),b=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),v(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.index,a=e.changeTab,o=e.title,r=e.className,s=e.disabled,i=m()({"is-active":t},r);return this.props.collapsed?c.a.createElement("option",{value:n},"string"==typeof o&&o.indexOf(".")>0?c.a.createElement(u.a,{className:"tab-title",content:o}):c.a.createElement("span",{className:"tab-title"},o)):c.a.createElement("li",{className:i,onClick:s?null:a.bind(this,n)},c.a.createElement("a",null,"string"==typeof o&&o.indexOf(".")>0?c.a.createElement(u.a,{className:"tab-title",content:o}):c.a.createElement("span",{className:"tab-title"},o),this.props.subText?c.a.createElement("div",{className:"tab-subtext"},this.props.subText):null))}}]),t}(c.a.Component);b.propTypes={changeTab:i.PropTypes.func,isActive:i.PropTypes.bool.isRequired,index:i.PropTypes.number.isRequired,className:i.PropTypes.string},b.defaultProps={isActive:!1,index:0,className:""};var g=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={activeTab:e.setting?e.viewSettings.get(e.setting,e.defaultActiveTab):e.defaultActiveTab,width:window.innerWidth},n._setDimensions=n._setDimensions.bind(n),n}return s(t,e),v(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"componentWillReceiveProps",value:function(e){var t=e.viewSettings.get(e.setting);t!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_changeTab",value:function(e){e!==this.state.activeTab&&(this.props.setting&&h.a.changeViewSetting(a({},this.props.setting,e)),this.setState({activeTab:e}),this.props.onChangeTab&&this.props.onChangeTab(e))}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.contentClass,o=t.tabsClass,r=t.style,s=t.segmented,i=this.state.width<900,l=null,u=[],p=c.a.Children.map(n,function(t,n){if(!t)return null;if(i&&t.props.disabled)return null;var a=n===e.state.activeTab;return a&&(l=t.props.children),c.a.cloneElement(t,{collapsed:i,isActive:a,changeTab:e._changeTab.bind(e),index:n})}).filter(function(e){return e&&u.push(e.props.index),null!==e});return l||(l=p[0].props.children),c.a.createElement("div",{className:m()(this.props.actionButtons?"with-buttons":"",this.props.className)},c.a.createElement("div",{className:"service-selector",style:{display:"none"}},c.a.createElement("ul",{style:r,className:m()("button-group no-margin",o,{segmented:s})},i?c.a.createElement("li",{style:{paddingLeft:10,paddingRight:10,minWidth:"15rem"}},c.a.createElement("select",{value:this.state.activeTab,style:{marginTop:10,marginBottom:10},className:"bts-select",onChange:function(t){e._changeTab(parseInt(t.target.value,10))}},p)):p,this.props.actionButtons?c.a.createElement("li",{className:"tabs-action-buttons"},this.props.actionButtons):null)),c.a.createElement("div",{className:a+" tab-content"},l))}}]),t}(c.a.Component);g.propTypes={setting:i.PropTypes.string,defaultActiveTab:i.PropTypes.number,segmented:i.PropTypes.bool},g.defaultProps={active:0,defaultActiveTab:0,segmented:!0,contentClass:"",style:{}},g=Object(d.connect)(g,{listenTo:function(){return[f.a]},getProps:function(){return{viewSettings:f.a.getState().viewSettings}}})},1229:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"b",function(){return A}),n.d(t,"a",function(){return j});var i=n(1),c=n.n(i),l=n(108),u=n(34),p=n(35),m=n(15),d=n(59),h=(n.n(d),n(256)),f=n(25),v=n.n(f),b=n(20),g=n.n(b),y=n(131),_=n.n(y),w=n(391),E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},k=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),x=function e(t,n,a){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,a)}if("value"in o)return o.value;var s=o.get;if(void 0!==s)return s.call(a)},O=function(e){function t(e){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return s(t,e),k(t,[{key:"componentDidMount",value:function(){_.a.rebuild()}},{key:"shouldComponentUpdate",value:function(e){return x(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"shouldComponentUpdate",this).call(this,e)||e.toAsset!==this.props.toAsset||e.fromAsset!==this.props.fromAsset||e.amount!==this.props.amount}},{key:"getValue",value:function(){var e=this.props,t=e.amount,n=e.toAsset,a=e.fromAsset,o=e.fullPrecision,r=e.marketStats,s=e.coreAsset,i=void 0,c=void 0,l=n.get("id"),u=n.get("symbol"),p=a.get("id"),d=a.get("symbol");if(o||(t=m.a.get_asset_amount(t,a)),s&&r){var h=s.get("symbol");i=r.get(u+"_"+h),c=r.get(d+"_"+h)}var f=m.a.convertPrice(c&&c.close?c.close:"1.3.0"===p||a.has("bitasset")?a:null,i&&i.close?i.close:"1.3.0"===l||n.has("bitasset")?n:null,p,l);return f?m.a.convertValue(f,t,a,n):null}},{key:"render",value:function(){var e=this.props,t=e.amount,n=e.toAsset,a=e.fromAsset,o=e.fullPrecision,r=n.get("id"),s=n.get("symbol");o||(t=m.a.get_asset_amount(t,a));var i=this.getValue();return i||0===i?c.a.createElement(l.a,{hide_asset:this.props.hide_asset,noPrefix:!0,amount:i,asset:r,decimalOffset:-1!==s.indexOf("BTC")?4:this.props.noDecimals?n.get("precision"):n.get("precision")-2}):c.a.createElement("div",{className:"tooltip inline-block","data-place":"bottom","data-tip":g.a.translate("tooltip.no_price"),style:{fontSize:"0.9rem"}},c.a.createElement(v.a,{content:"account.no_price"}))}}]),t}(w.a);O.propTypes={toAsset:u.a.ChainAsset.isRequired,fromAsset:u.a.ChainAsset.isRequired,coreAsset:u.a.ChainAsset.isRequired},O.defaultProps={toAsset:"1.3.0",fullPrecision:!0,noDecimals:!1,hide_asset:!1,coreAsset:"1.3.0"},O=Object(p.a)(O,{keep_updating:!0});var A=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),k(t,[{key:"render",value:function(){var e=this.props,t=e.refCallback,n=a(e,["refCallback"]);return c.a.createElement(O,E({},n,{ref:t}))}}]),t}(c.a.Component);A=Object(d.connect)(A,{listenTo:function(){return[h.a]},getProps:function(){return{marketStats:h.a.getState().allMarketStats}}});var j=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),k(t,[{key:"render",value:function(){var e=this.props.balance,t=!!e.getIn(["balance","amount"]),n=Number(t?e.getIn(["balance","amount"]):e.get("balance")),a=t?e.getIn(["balance","asset_id"]):e.get("asset_type");return isNaN(n)?c.a.createElement("span",null,"--"):c.a.createElement(A,{refCallback:this.props.refCallback,hide_asset:this.props.hide_asset,amount:n,fromAsset:a,noDecimals:!0,toAsset:this.props.toAsset})}}]),t}(c.a.Component);j.propTypes={balance:u.a.ChainObject.isRequired},j=Object(p.a)(j,{keep_updating:!0})},1278:function(e,t,n){"use strict";t.a={tableHeightMountInterval:function(){return setInterval(function(){var e=this.refs.appTables;e&&parseInt(e.style.height)!==e.clientHeight&&(e.style.height=e.clientHeight+"px")}.bind(this),10)},adjustHeightOnChangeTab:function(){this.refs.appTables&&(this.refs.appTables.style.height="auto")}}},1330:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n="",a=0,o=void 0;return"witness"===e?o=_.b.getWitnessById(t.get("id")):"committee"===e&&(o=_.b.getCommitteeMemberById(t.get("id"))),n=o?o.get("url"):n,a=o?o.get("total_votes"):a,{url:n,votes:a,id:o.get("id")}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var d=n(1),h=n.n(d),f=n(26),v=n.n(f),b=n(25),g=n.n(b),y=n(175),_=n(6),w=n(20),E=n.n(w),k=n(15),x=n(34),O=n(108),A=n(133),j=n(35),T=n(1229),C=n(76),P=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),I=function(e){function t(e){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),P(t,[{key:"onApprove",value:function(){var e=[],t=[];this.props.vote_ids.has(this.props.worker.get("vote_against"))&&t.push(this.props.worker.get("vote_against")),this.props.vote_ids.has(this.props.worker.get("vote_for"))||e.push(this.props.worker.get("vote_for")),this.props.onChangeVotes(e,t)}},{key:"onReject",value:function(){var e=[],t=[];this.props.vote_ids.has(this.props.worker.get("vote_against"))&&t.push(this.props.worker.get("vote_against")),this.props.vote_ids.has(this.props.worker.get("vote_for"))&&t.push(this.props.worker.get("vote_for")),this.props.onChangeVotes(e,t)}},{key:"render",value:function(){var e=this.props.rank,t=this.props.worker.toJS(),n=t.total_votes_for-t.total_votes_against,a=!!this.props.vote_ids.has(t.vote_for)||!this.props.vote_ids.has(t.vote_against)&&null,o=t.url?t.url.replace(/http:\/\/|https:\/\//,""):"";o.length>25&&(o=o.substr(0,25)+"...");var r=0;t.daily_pay<this.props.rest?r=100:this.props.rest>0&&(r=this.props.rest/t.daily_pay*100);var s=E.a.localize(new Date(t.work_begin_date),{type:"date",format:"short_custom"}),i=E.a.localize(new Date(t.work_end_date),{type:"date",format:"short_custom"}),c=new Date,l=new Date(t.work_end_date)<=c;return h.a.createElement("tr",{className:a?"":"unsupported"},l?null:h.a.createElement("td",{style:{textAlign:"right",paddingRight:10,paddingLeft:0}},e),h.a.createElement("td",{style:{textAlign:"left"},colSpan:l?"2":"1"},h.a.createElement("div",{className:"inline-block",style:{paddingRight:5,position:"relative",top:2}},h.a.createElement("a",{style:{visibility:t.url&&-1!==t.url.indexOf(".")?"visible":"hidden"},href:t.url,target:"_blank",rel:"noopener noreferrer"},h.a.createElement(C.a,{name:"share"}))),t.name.substr(0,30),t.name.length>30?"...":""),h.a.createElement("td",{style:{textAlign:"left"},className:"hide-column-small"},h.a.createElement(A.a,{account:t.worker_account})),h.a.createElement("td",{style:{textAlign:"right"},className:"hide-column-small"},h.a.createElement(O.a,{amount:n,asset:"1.3.0",decimalOffset:5,hide_asset:!0})),h.a.createElement("td",{style:{textAlign:"right"},className:"hide-column-small"},k.a.format_number(r,2),"%"),h.a.createElement("td",null,s," - ",i),h.a.createElement("td",{style:{textAlign:"right"},className:"hide-column-small"},h.a.createElement(T.b,{hide_asset:!0,fromAsset:"1.3.0",toAsset:this.props.preferredUnit,amount:t.daily_pay})),h.a.createElement("td",{className:"clickable",onClick:this.props.proxy?function(){}:this[a?"onReject":"onApprove"].bind(this)},this.props.proxy?h.a.createElement(C.a,{name:"locked"}):h.a.createElement(C.a,{name:a?"checkmark-circle":"minus-circle"})))}}]),t}(h.a.Component);I.propTypes={worker:x.a.ChainObject.isRequired,onAddVote:h.a.PropTypes.func,onRemoveVote:h.a.PropTypes.func,vote_ids:h.a.PropTypes.object},I.defaultProps={tempComponent:"tr"};var S=Object(j.a)(I),N=n(389),R=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),D=function(e){function t(){return s(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),R(t,[{key:"shouldComponentUpdate",value:function(e){return e.account!==this.props.account||e.action!==this.props.action||e.isActive!==this.props.isActive||e.idx!==this.props.idx||e.proxy!==this.props.proxy}},{key:"onAction",value:function(e){this.props.onAction(e)}},{key:"render",value:function(){var e=this.props,t=e.account,n=e.type,a=e.action,o=e.isActive,r=t.get("id"),s=l(n,t),i=s.url,c=s.votes,u=i&&i.length>0&&-1===i.indexOf("http")?"http://"+i:i,p="remove"===a;return h.a.createElement("tr",{className:p?"":"unsupported"},h.a.createElement("td",{style:{textAlign:"right"}},this.props.idx+1),h.a.createElement("td",{style:{textAlign:"left"}},h.a.createElement(A.a,{account:t.get("id")})),h.a.createElement("td",null,u&&-1!==u.indexOf(".")?h.a.createElement("a",{href:u,target:"_blank",rel:"noopener noreferrer"},h.a.createElement(C.a,{name:"share"})):null),h.a.createElement("td",null,h.a.createElement(O.a,{amount:c,asset:"1.3.0",decimalOffset:5,hide_asset:!0})),h.a.createElement("td",null,h.a.createElement(g.a,{content:"account.votes."+(o?"active_short":"inactive")})),h.a.createElement("td",{style:{textAlign:"center"}},h.a.createElement(g.a,{content:"settings."+(p?"yes":"no")})),h.a.createElement("td",{className:this.props.proxy?"":"clickable",onClick:this.props.proxy?function(){}:this.onAction.bind(this,r)},this.props.proxy?h.a.createElement(C.a,{name:"locked"}):h.a.createElement(C.a,{name:p?"checkmark-circle":"minus-circle"})))}}]),t}(h.a.Component);D.propTypes={account:h.a.PropTypes.object.isRequired,onAction:h.a.PropTypes.func.isRequired};var V=function(e){function t(e){s(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={selected_item:null,item_name_input:"",error:null},n.onItemChange=n.onItemChange.bind(n),n.onItemAccountChange=n.onItemAccountChange.bind(n),n.onAddItem=n.onAddItem.bind(n),n}return c(t,e),R(t,[{key:"onItemChange",value:function(e){this.setState({item_name_input:e})}},{key:"onItemAccountChange",value:function(e){var t=this;if(this.setState({selected_item:e,error:null}),e&&this.props.validateAccount){var n=this.props.validateAccount(e);if(null===n)return;"string"==typeof n?this.setState({error:n}):n.then(function(e){return t.setState({error:e})})}}},{key:"onAddItem",value:function(e){if(e){var t={selected_item:null,item_name_input:"",error:null};this.setState(t),this.props.onAddItem(e.get("id"))}}},{key:"render",value:function(){var e=this;if(!this.props.items)return null;var t=this.props.items.filter(function(e){return!!e}).sort(function(t,n){var a=l(e.props.type,t),o=a.votes,r=l(e.props.type,n),s=r.votes;return o!==s?s-o:t.get("name")>n.get("name")?1:t.get("name")<n.get("name")?-1:0}).map(function(t,n){var a=e.props.supported&&e.props.supported.includes(t.get("id"))?"remove":"add",o=e.props.active.includes(l(e.props.type,t).id);return h.a.createElement(D,{idx:n,key:t.get("name"),account:t,type:e.props.type,onAction:"add"===a?e.props.onAddItem:e.props.onRemoveItem,isSelected:-1!==e.props.items.indexOf(t),action:a,isActive:o,proxy:e.props.proxy})}),n=this.state.error;!n&&this.state.selected_item&&-1!==this.props.items.indexOf(this.state.selected_item)&&(n=E.a.translate("account.votes.already"));var a=["10%","20%","40%","20%","10%"];return h.a.createElement("div",null,this.props.withSelector?h.a.createElement(N.a,{style:{maxWidth:"600px"},label:this.props.label,error:n,placeholder:this.props.placeholder,account:this.state.item_name_input,accountName:this.state.item_name_input,onChange:this.onItemChange,onAccountChanged:this.onItemAccountChange,onAction:this.onAddItem,action_label:"account.votes.add_witness",tabIndex:this.props.tabIndex}):null,this.props.title&&t.length?h.a.createElement("h4",null,this.props.title):null,t.length?h.a.createElement("table",{className:"table dashboard-table"},h.a.createElement("thead",null,h.a.createElement("tr",null,h.a.createElement("th",{style:{textAlign:"right"}},"#"),h.a.createElement("th",{style:{textAlign:"left",maxWidth:a[1]}},h.a.createElement(g.a,{content:"account.votes.name"})),h.a.createElement("th",{style:{maxWidth:a[2]}},h.a.createElement(g.a,{content:"account.votes.about"})),h.a.createElement("th",{style:{maxWidth:a[3]}},h.a.createElement(g.a,{content:"account.votes.votes"})),h.a.createElement("th",{style:{maxWidth:a[4]}},h.a.createElement(g.a,{content:"account.votes.status.title"})),h.a.createElement("th",{style:{maxWidth:a[0]}},h.a.createElement(g.a,{content:"account.votes.supported"})),h.a.createElement("th",{style:{maxWidth:a[5]}},h.a.createElement(g.a,{content:"account.votes.toggle"})))),h.a.createElement("tbody",null,t)):null)}}]),t}(h.a.Component);V.propTypes={items:x.a.ChainObjectsList,onAddItem:h.a.PropTypes.func.isRequired,onRemoveItem:h.a.PropTypes.func.isRequired,validateAccount:h.a.PropTypes.func,label:h.a.PropTypes.string.isRequired,placeholder:h.a.PropTypes.string,tabIndex:h.a.PropTypes.number,action:h.a.PropTypes.string,withSelector:h.a.PropTypes.bool},V.defaultProps={action:"remove",withSelector:!0,autosubscribe:!1};var B=Object(j.a)(V,{keep_updating:!0}),W=n(50),q=n.n(W),M=n(1211),L=n(37),z=n(173),H=n(1278),F=n(127),U=function(){function e(e,t){var n=[],a=!0,o=!1,r=void 0;try{for(var s,i=e[Symbol.iterator]();!(a=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(e){o=!0,r=e}finally{try{!a&&i.return&&i.return()}finally{if(o)throw r}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),J=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),G=function(e){function t(e){u(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),a=e.proxy.get("id"),o=e.proxy.get("name");return n.state={proxy_account_id:"1.2.5"===a?"":a,prev_proxy_account_id:"1.2.5"===a?"":a,current_proxy_input:"1.2.5"===a?"":o,witnesses:null,committee:null,vote_ids:v.a.Set(),proxy_vote_ids:v.a.Set(),lastBudgetObject:null,workerTableIndex:e.viewSettings.get("workerTableIndex",1),all_witnesses:v.a.List(),all_committee:v.a.List()},n.onProxyAccountFound=n.onProxyAccountFound.bind(n),n.onPublish=n.onPublish.bind(n),n.onReset=n.onReset.bind(n),n._getVoteObjects=n._getVoteObjects.bind(n),n.tableHeightMountInterval=H.a.tableHeightMountInterval.bind(n),n.adjustHeightOnChangeTab=H.a.adjustHeightOnChangeTab.bind(n),n}return m(t,e),J(t,[{key:"componentWillMount",value:function(){y.a.getFinalFeeAsset(this.props.account,"account_update"),this.getBudgetObject()}},{key:"componentDidMount",value:function(){this.updateAccountData(this.props),this.getBudgetObject(),this._getVoteObjects(),this._getVoteObjects("committee"),this.tableHeightMountIntervalInstance=this.tableHeightMountInterval()}},{key:"componentWillReceiveProps",value:function(e){if(e.account!==this.props.account){var t=e.proxy.get("id"),n={proxy_account_id:"1.2.5"===t?"":t};this.setState({prev_proxy_account_id:n.proxy_account_id}),this.updateAccountData(e,n)}this.getBudgetObject()}},{key:"updateAccountData",value:function(e){var t=this,n=e.account,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state,o=a.proxy_account_id,r=_.b.getAccount(o),s=n.get("options"),i=r?r.get("options"):null,c=r?r.get("name"):"";"1.2.5"===o&&(o="",c="");var l=s.get("votes"),u=l.toArray(),p=v.a.Set(u),m=null,d=v.a.Set([]);if("1.2.5"!==o&&i){var h=i.get("votes"),f=h.toArray();d=v.a.Set(f),m=Object(_.g)(_.b.getObjectByVoteID,f,5e3)}Promise.all([Object(_.g)(_.b.getObjectByVoteID,u,5e3),m]).then(function(e){function n(e){var t=new v.a.List,n=new v.a.List,a=new v.a.Set;return e.forEach(function(e){var a=e.get("committee_member_account");a?n=n.push(a):(a=e.get("worker_account"))||(a=e.get("witness_account"))&&(t=t.push(a))}),{witnesses:t,committee:n,workers:a}}var a=U(e,2),r=a[0],s=a[1],i=n(r),l=i.witnesses,u=i.committee,m=i.workers,h=n(s||[]),f=h.witnesses,b=h.committee,g=h.workers,y={proxy_account_id:o,current_proxy_input:c,witnesses:l,committee:u,workers:m,proxy_witnesses:f,proxy_committee:b,proxy_workers:g,vote_ids:p,proxy_vote_ids:d,prev_witnesses:l,prev_committee:u,prev_workers:m,prev_vote_ids:p};t.setState(y)})}},{key:"isChanged",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state;return e.proxy_account_id!==e.prev_proxy_account_id||e.witnesses!==e.prev_witnesses||e.committee!==e.prev_committee||!v.a.is(e.vote_ids,e.prev_vote_ids)}},{key:"_getVoteObjects",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"witnesses",n=arguments[1],a=this.state["all_"+t],o="witnesses"===t,r=void 0;if(n)r=parseInt(n[n.length-1].split(".")[2],10);else{n=[];var s=this.props.globalObject.get(o?"active_witnesses":"active_committee_members"),i=s.last()||"1."+(o?"6":"5")+".1";r=parseInt(i.split(".")[2],10);for(var c=1;c<=r+10;c++)n.push("1."+(o?"6":"5")+"."+c)}Object(_.g)(_.b.getObject,n,5e3,{}).then(function(s){if(e.state["all_"+t]=a.concat(v.a.List(s.filter(function(e){return!!e}).map(function(e){return e.get(o?"witness_account":"committee_member_account")}))),s[s.length-1]){n=[];for(var i=r+11;i<=r+20;i++)n.push("1."+(o?"6":"5")+"."+i);return e._getVoteObjects(t,n)}e.forceUpdate()})}},{key:"onPublish",value:function(){function e(e,t){return e.includes(t)&&(e=e.delete(t)),e}var t=this,n=this.props.account.toJS(),a={account:n.id},o={memo_key:n.options.memo_key},r=this.state.proxy_account_id;o.voting_account=r||"1.2.5",o.num_witness=this.state.witnesses.size,o.num_committee=this.state.committee.size,a.new_options=o,a.fee={amount:0,asset_id:y.a.getFinalFeeAsset(n.id,"account_update")};var s=this.state.vote_ids,i=this._getWorkerArray(),c=new Date;i.forEach(function(t){t&&(new Date(t.get("work_end_date"))<=c&&(s=e(s,t.get("vote_for"))),s=e(s,t.get("vote_against")))}),Object(_.g)(_.b.getWitnessById,this.state.witnesses.toArray(),4e3).then(function(e){var n=e.map(function(e){return e.get("vote_id")});return Promise.all([Promise.resolve(n),Object(_.g)(_.b.getCommitteeMemberById,t.state.committee.toArray(),4e3)])}).then(function(e){a.new_options.votes=e[0].concat(e[1].map(function(e){return e.get("vote_id")})).concat(s.filter(function(e){return"2"===e.split(":")[0]}).toArray()).sort(function(e,t){var n=e.split(":"),a=t.split(":");return parseInt(n[1],10)-parseInt(a[1],10)}),z.a.updateAccount(a)})}},{key:"onReset",value:function(){var e=this,t=this.state;this.refs.voting_proxy&&this.refs.voting_proxy.refs.bound_component&&this.refs.voting_proxy.refs.bound_component.onResetProxy(),this.setState({proxy_account_id:t.prev_proxy_account_id,current_proxy_input:t.prev_proxy_input,witnesses:t.prev_witnesses,committee:t.prev_committee,workers:t.prev_workers,vote_ids:t.prev_vote_ids},function(){e.updateAccountData(e.props)})}},{key:"onAddItem",value:function(e,t){var n={};n[e]=this.state[e].push(t),this.setState(n)}},{key:"onRemoveItem",value:function(e,t){var n={};n[e]=this.state[e].filter(function(e){return e!==t}),this.setState(n)}},{key:"onChangeVotes",value:function(e,t){var n={};n.vote_ids=this.state.vote_ids,e.length&&e.forEach(function(e){n.vote_ids=n.vote_ids.add(e)}),t&&t.forEach(function(e){n.vote_ids=n.vote_ids.delete(e)}),this.setState(n)}},{key:"validateAccount",value:function(e,t){return t?"witnesses"===e?Object(_.g)(_.b.getWitnessById,[t.get("id")],3e3).then(function(e){return e[0]?null:"Not a witness"}):"committee"===e?Object(_.g)(_.b.getCommitteeMemberById,[t.get("id")],3e3).then(function(e){return e[0]?null:"Not a committee member"}):null:null}},{key:"onProxyChange",value:function(e){var t=_.b.getAccount(e);(!t||t&&t.get("id")!==this.state.proxy_account_id)&&this.setState({proxy_account_id:"",proxy_witnesses:v.a.Set(),proxy_committee:v.a.Set(),proxy_workers:v.a.Set()}),this.setState({current_proxy_input:e})}},{key:"onProxyAccountFound",value:function(e){var t=this;this.setState({proxy_account_id:e?e.get("id"):""},function(){t.updateAccountData(t.props)})}},{key:"onClearProxy",value:function(){this.setState({proxy_account_id:""})}},{key:"_getTotalVotes",value:function(e){return parseInt(e.get("total_votes_for"),10)-parseInt(e.get("total_votes_against"),10)}},{key:"getBudgetObject",value:function(){var e=this.state.lastBudgetObject,t=void 0;if(t=_.b.getObject(e||"2.13.1")){var n=t.get("time"),a=new Date,o=parseInt(t.get("id").split(".")[2],10),r=o+Math.floor((a-new Date(n+"+00:00").getTime())/1e3/60/60)-1,s="2.13."+Math.max(o,r);_.b.getObject(s),this.setState({lastBudgetObject:s})}else if("2.13.1"!==e){var i=parseInt(e.split(".")[2],10)-1;this.setState({lastBudgetObject:"2.13."+(i-1)})}}},{key:"_getWorkerArray",value:function(){for(var e=[],t=0;t<100;t++){var n="1.14."+t,a=_.b.getObject(n,!1,!1);if(null===a)break;e.push(a)}return e}},{key:"_setWorkerTableIndex",value:function(e){this.setState({workerTableIndex:e})}},{key:"render",value:function(){var e=this,t=this.state.workerTableIndex,n=this.props.settings.get("unit")||"1.3.0",a=!!this.state.proxy_account_id,o=q()("button",{disabled:!this.isChanged()}),r=this.props.globalObject,s=void 0;this.state.lastBudgetObject&&(s=_.b.getObject(this.state.lastBudgetObject));var i=r?parseInt(r.getIn(["parameters","worker_budget_per_day"]),10):0;s&&(i=Math.min(24*s.getIn(["record","worker_budget"]),i));var c=new Date,l=this._getWorkerArray(),u=l.filter(function(e){return!!e&&(new Date(e.get("work_end_date"))>c&&new Date(e.get("work_begin_date"))<=c)}).sort(function(t,n){return e._getTotalVotes(n)-e._getTotalVotes(t)}).map(function(t,o){var r=parseInt(t.get("daily_pay"),10);return i-=r,h.a.createElement(S,{preferredUnit:n,rest:i+r,rank:o+1,key:t.get("id"),worker:t.get("id"),vote_ids:e.state[a?"proxy_vote_ids":"vote_ids"],onChangeVotes:e.onChangeVotes.bind(e),proxy:a})}),p=l.filter(function(e){return!!e&&new Date(e.get("work_begin_date"))>=c}).sort(function(t,n){return e._getTotalVotes(n)-e._getTotalVotes(t)}).map(function(t,o){var r=parseInt(t.get("daily_pay"),10);return i-=r,h.a.createElement(S,{preferredUnit:n,rest:i+r,rank:o+1,key:t.get("id"),worker:t.get("id"),vote_ids:e.state[a?"proxy_vote_ids":"vote_ids"],onChangeVotes:e.onChangeVotes.bind(e),proxy:a})}),m=l.filter(function(e){return!!e&&new Date(e.get("work_end_date"))<=c}).sort(function(t,n){return e._getTotalVotes(n)-e._getTotalVotes(t)}).map(function(t,o){var r=parseInt(t.get("daily_pay"),10);return i-=r,h.a.createElement(S,{preferredUnit:n,rest:i+r,rank:o+1,key:t.get("id"),worker:t.get("id"),vote_ids:e.state[a?"proxy_vote_ids":"vote_ids"],onChangeVotes:e.onChangeVotes.bind(e),proxy:a})}),d=h.a.createElement("div",null,h.a.createElement("button",{className:q()(o,{success:this.isChanged()}),onClick:this.onPublish,tabIndex:4},h.a.createElement(g.a,{content:"account.votes.publish"})),h.a.createElement("button",{className:"button "+o,onClick:this.onReset,tabIndex:8},h.a.createElement(g.a,{content:"account.perm.reset"}))),f=h.a.createElement(N.a,{hideImage:!0,account:this.state.current_proxy_input,accountName:this.state.current_proxy_input,onChange:this.onProxyChange.bind(this),onAccountChanged:this.onProxyAccountFound,tabIndex:1,placeholder:"Proxy not set"},h.a.createElement("span",{style:{paddingLeft:5,position:"relative",top:-1,display:a?"":"none"}},h.a.createElement(C.a,{name:"locked",size:"2x"})),h.a.createElement("span",{style:{paddingLeft:5,position:"relative",top:-1,display:a?"none":""}},h.a.createElement(L.b,{to:"/help/voting/proxy"},h.a.createElement(C.a,{name:"question-circle",size:"2x"})))),v=2===t,b=h.a.createElement("div",{className:"inline-block",style:{visibility:this.isChanged()?"visible":"hidden",color:"red",padding:"0.85rem",fontSize:"0.9rem"}},h.a.createElement(g.a,{content:"account.votes.save_finish"}));return h.a.createElement("div",{className:"grid-content app-tables",ref:"appTables"},h.a.createElement("div",{className:"content-block small-12"},h.a.createElement("div",{className:"generic-bordered-box"},h.a.createElement(M.b,{setting:"votingTab",className:"overview-tabs",defaultActiveTab:1,segmented:!1,tabsClass:"account-overview no-padding bordered-header content-block",onChangeTab:this.adjustHeightOnChangeTab.bind(this),actionButtons:d},h.a.createElement(M.a,{disabled:!0,title:f,className:"total-value"}),h.a.createElement(M.a,{title:"explorer.witnesses.title"},h.a.createElement("div",{className:q()("content-block")},h.a.createElement("div",{className:"hide-selector"},h.a.createElement(L.b,{to:"/help/voting/witness"},h.a.createElement(C.a,{name:"question-circle"})),h.a.createElement("div",{className:"new-worker-button"},b)),h.a.createElement(B,{type:"witness",label:"account.votes.add_witness_label",items:this.state.all_witnesses,validateAccount:this.validateAccount.bind(this,"witnesses"),onAddItem:this.onAddItem.bind(this,"witnesses"),onRemoveItem:this.onRemoveItem.bind(this,"witnesses"),tabIndex:a?-1:2,supported:this.state[a?"proxy_witnesses":"witnesses"],withSelector:!1,active:r.get("active_witnesses"),proxy:this.state.proxy_account_id}))),h.a.createElement(M.a,{title:"explorer.committee_members.title"},h.a.createElement("div",{className:q()("content-block")},h.a.createElement("div",{className:"hide-selector"},h.a.createElement(L.b,{to:"/help/voting/committee"},h.a.createElement(C.a,{name:"question-circle"})),h.a.createElement("div",{className:"new-worker-button"},b)),h.a.createElement(B,{type:"committee",label:"account.votes.add_committee_label",items:this.state.all_committee,validateAccount:this.validateAccount.bind(this,"committee"),onAddItem:this.onAddItem.bind(this,"committee"),onRemoveItem:this.onRemoveItem.bind(this,"committee"),tabIndex:a?-1:3,supported:this.state[a?"proxy_committee":"committee"],withSelector:!1,active:r.get("active_committee_members"),proxy:this.state.proxy_account_id}))),h.a.createElement(M.a,{title:"account.votes.workers_short"},h.a.createElement("div",{className:"hide-selector"},h.a.createElement(L.b,{to:"/help/voting/worker"},h.a.createElement(C.a,{name:"question-circle"})),h.a.createElement("div",{style:{paddingLeft:10},className:q()("inline-block",{inactive:0!==t}),onClick:this._setWorkerTableIndex.bind(this,0)},E.a.translate("account.votes.new",{count:p.length})),h.a.createElement("div",{className:q()("inline-block",{inactive:1!==t}),onClick:this._setWorkerTableIndex.bind(this,1)},h.a.createElement(g.a,{content:"account.votes.active"})),m.length?h.a.createElement("div",{className:q()("inline-block",{inactive:!v}),onClick:v?function(){}:this._setWorkerTableIndex.bind(this,2)},h.a.createElement(g.a,{content:"account.votes.expired"})):null,h.a.createElement("div",{className:"new-worker-button"},b,h.a.createElement(L.b,{to:"/create-worker"},h.a.createElement("div",{className:"button no-margin"},h.a.createElement(g.a,{content:"account.votes.create_worker"}))))),h.a.createElement("table",{className:"table dashboard-table"},h.a.createElement("thead",null,h.a.createElement("tr",null,h.a.createElement("th",{style:{textAlign:"right"}},h.a.createElement(g.a,{content:"account.votes.line"})),h.a.createElement("th",{style:{textAlign:"left"}},h.a.createElement(g.a,{content:"account.user_issued_assets.description"})),h.a.createElement("th",{style:{textAlign:"left"},className:"hide-column-small"},h.a.createElement(g.a,{content:"account.votes.creator"})),h.a.createElement("th",{style:{textAlign:"right"},className:"hide-column-small"},h.a.createElement(g.a,{content:"account.votes.total_votes"})),h.a.createElement("th",{style:{textAlign:"right"},className:"hide-column-small"},h.a.createElement(g.a,{content:"account.votes.funding"})),h.a.createElement("th",null,h.a.createElement(g.a,{content:"explorer.workers.period"})),h.a.createElement("th",{style:{textAlign:"right"},className:"hide-column-small"},h.a.createElement(g.a,{content:"account.votes.daily_pay"}),h.a.createElement("div",{style:{paddingTop:5,fontSize:"0.8rem"}},"(",h.a.createElement(F.a,{name:n}),")")),h.a.createElement("th",null,h.a.createElement(g.a,{content:"account.votes.toggle"})))),h.a.createElement("tbody",null,0===t?p:1===t?u:m)))))))}}]),t}(h.a.Component);G.propTypes={initialBudget:x.a.ChainObject.isRequired,globalObject:x.a.ChainObject.isRequired,dynamicGlobal:x.a.ChainObject.isRequired,proxy:x.a.ChainAccount.isRequired},G.defaultProps={initialBudget:"2.13.1",globalObject:"2.0.0",dynamicGlobal:"2.1.0"};t.default=Object(j.a)(G)}});
//# sourceMappingURL=27.js.map