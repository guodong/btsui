webpackJsonp([39],{1311:function(e,t,a){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=a(1),c=a.n(o),s=a(26),m=a.n(s),l=a(259),u=a(34),p=a(35),b=a(6),h=a(108),d=a(25),f=a.n(d),g=a(59),_=(a.n(g),a(51)),v=a(38),k=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),y=function(e){function t(){return r(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),k(t,[{key:"_onCardClick",value:function(e){e.preventDefault(),this.context.router.push("/account/"+this.props.committee_member.get("name"))}},{key:"render",value:function(){var e=b.b.getCommitteeMemberById(this.props.committee_member.get("id"));return e?c.a.createElement("div",{className:"grid-content account-card",onClick:this._onCardClick.bind(this)},c.a.createElement("div",{className:"card"},c.a.createElement("h4",{className:"text-center"},this.props.committee_member.get("name")),c.a.createElement("div",{className:"card-content clearfix"},c.a.createElement("div",{className:"float-left"},c.a.createElement(l.a,{account:this.props.committee_member.get("name"),size:{height:64,width:64}})),c.a.createElement("ul",{className:"balances"},c.a.createElement("li",null,c.a.createElement(f.a,{content:"account.votes.votes"}),": ",c.a.createElement(h.a,{decimalOffset:5,amount:e.get("total_votes"),asset:"1.3.0"})))))):null}}]),t}(c.a.Component);y.propTypes={committee_member:u.a.ChainAccount.isRequired},y.contextTypes={router:c.a.PropTypes.object.isRequired},y=Object(p.a)(y,{keep_updating:!0});var E=function(e){function t(){return r(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),k(t,[{key:"_onRowClick",value:function(e){e.preventDefault(),this.context.router.push("/account/"+this.props.committee_member.get("name"))}},{key:"render",value:function(){var e=this.props,t=e.committee_member,a=e.rank,r=b.b.getCommitteeMemberById(t.get("id"));if(!r)return null;var n=(r.get("total_votes"),r.get("url"));return n=n&&n.length>0&&-1===n.indexOf("http")?"http://"+n:n,c.a.createElement("tr",null,c.a.createElement("td",{onClick:this._onRowClick.bind(this)},a),c.a.createElement("td",{onClick:this._onRowClick.bind(this)},t.get("name")),c.a.createElement("td",{onClick:this._onRowClick.bind(this)},c.a.createElement(h.a,{amount:r.get("total_votes"),asset:"1.3.0"})),c.a.createElement("td",null,c.a.createElement("a",{href:n,rel:"noopener noreferrer",target:"_blank"},r.get("url"))))}}]),t}(c.a.Component);E.propTypes={committee_member:u.a.ChainAccount.isRequired},E.contextTypes={router:c.a.PropTypes.object.isRequired},E=Object(p.a)(E,{keep_updating:!0});var w=function(e){function t(){r(this,t);var e=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={sortBy:"rank",inverseSort:!0},e}return i(t,e),k(t,[{key:"_setSort",value:function(e){this.setState({sortBy:e,inverseSort:e===this.state.sortBy?!this.state.inverseSort:this.state.inverseSort})}},{key:"render",value:function(){var e=this,t=this.props,a=t.committee_members,r=t.cardView,n=t.membersList,i=this.state,o=i.sortBy,s=i.inverseSort,m=null,l={};return a.filter(function(e){return!!e&&-1!==n.indexOf(e.get("id"))}).sort(function(e,t){if(e&&t)return parseInt(t.get("total_votes"),10)-parseInt(e.get("total_votes"),10)}).forEach(function(e,t){e&&(l[e.get("id")]=t+1)}),a.length>0&&a[1]&&(m=a.filter(function(t){if(!t)return!1;var a=b.b.getObject(t.get("committee_member_account"));return!!a&&-1!==a.get("name").indexOf(e.props.filter)}).sort(function(e,t){var a=b.b.getObject(e.get("committee_member_account")),r=b.b.getObject(t.get("committee_member_account"));if(!a||!r)return 0;switch(o){case"name":return a.get("name")>r.get("name")?s?1:-1:a.get("name")<r.get("name")?s?-1:1:0;case"rank":return s?l[e.get("id")]-l[t.get("id")]:l[t.get("id")]-l[e.get("id")];default:return s?parseInt(e.get(o),10)-parseInt(t.get(o),10):parseInt(t.get(o),10)-parseInt(e.get(o),10)}}).map(function(e){return r?c.a.createElement(y,{key:e.get("id"),rank:l[e.get("id")],committee_member:e.get("committee_member_account")}):c.a.createElement(E,{key:e.get("id"),rank:l[e.get("id")],committee_member:e.get("committee_member_account")})})),r?c.a.createElement("div",{className:"grid-block no-margin small-up-1 medium-up-2 large-up-3"},m):c.a.createElement("table",{className:"table table-hover"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"rank")},c.a.createElement(f.a,{content:"explorer.witnesses.rank"})),c.a.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"name")},c.a.createElement(f.a,{content:"account.votes.name"})),c.a.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"total_votes")},c.a.createElement(f.a,{content:"account.votes.votes"})),c.a.createElement("th",null,c.a.createElement(f.a,{content:"account.votes.url"})))),c.a.createElement("tbody",null,m))}}]),t}(c.a.Component);w.propTypes={committee_members:u.a.ChainObjectsList.isRequired},w=Object(p.a)(w,{keep_updating:!0,show_loader:!0});var C=function(e){function t(e){r(this,t);var a=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={filterCommitteeMember:e.filterCommitteeMember||"",cardView:e.cardView},a}return i(t,e),k(t,[{key:"shouldComponentUpdate",value:function(e,t){return!m.a.is(e.globalObject,this.props.globalObject)||t.filterCommitteeMember!==this.state.filterCommitteeMember||t.cardView!==this.state.cardView}},{key:"_onFilter",value:function(e){e.preventDefault(),this.setState({filterCommitteeMember:e.target.value.toLowerCase()}),_.a.changeViewSetting({filterCommitteeMember:e.target.value.toLowerCase()})}},{key:"_toggleView",value:function(){_.a.changeViewSetting({cardViewCommittee:!this.state.cardView}),this.setState({cardView:!this.state.cardView})}},{key:"render",value:function(){var e=this.props.globalObject;e=e.toJS();var t=[];for(var a in e.active_committee_members)e.active_committee_members.hasOwnProperty(a)&&t.push(e.active_committee_members[a]);return c.a.createElement("div",{className:"grid-block"},c.a.createElement("div",{className:"grid-block page-layout vertical medium-horizontal"},c.a.createElement("div",{className:"grid-block shrink"},c.a.createElement("div",{className:"grid-content"},c.a.createElement("h5",null,c.a.createElement(f.a,{content:"explorer.committee_members.active"}),": ",Object.keys(e.active_committee_members).length),c.a.createElement("br",null),c.a.createElement("div",{className:"view-switcher"},c.a.createElement("span",{className:"button outline",onClick:this._toggleView.bind(this)},this.state.cardView?c.a.createElement(f.a,{content:"explorer.witnesses.table"}):c.a.createElement(f.a,{content:"explorer.witnesses.card"}))))),c.a.createElement("div",{className:"grid-block vertical"},c.a.createElement("div",{className:"grid-block vertical shrink"},c.a.createElement(f.a,{component:"h3",content:"markets.filter"}),c.a.createElement("input",{type:"text",value:this.state.filterCommitteeMember,onChange:this._onFilter.bind(this)})),c.a.createElement("div",{className:"grid-content"},c.a.createElement(w,{committee_members:m.a.List(e.active_committee_members),membersList:e.active_committee_members,filter:this.state.filterCommitteeMember,cardView:this.state.cardView})))))}}]),t}(c.a.Component);C.propTypes={globalObject:u.a.ChainObject.isRequired},C.defaultProps={globalObject:"2.0.0"},C=Object(p.a)(C,{keep_updating:!0});var O=function(e){function t(){return r(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),k(t,[{key:"render",value:function(){return c.a.createElement(C,this.props)}}]),t}(c.a.Component);O=Object(g.connect)(O,{listenTo:function(){return[v.a]},getProps:function(){return{cardView:v.a.getState().viewSettings.get("cardViewCommittee"),filterCommitteeMember:v.a.getState().viewSettings.get("filterCommitteeMember")}}}),t.default=O}});
//# sourceMappingURL=39.js.map