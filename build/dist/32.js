webpackJsonp([32],{1266:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(1),l=n.n(i),c=n(34),s=n(35),u=n(133),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),p(t,[{key:"render",value:function(){var e=this.props.witness.get("witness_account");return l.a.createElement(u.a,{account:e})}}]),t}(l.a.Component);f.propTypes={witness:c.a.ChainObject.isRequired},f=Object(s.a)(f),t.a=f},1312:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),u=n.n(s),p=n(260),f=n(132),h=n.n(f),b=n(94),m=n(26),y=n.n(m),k=n(399),v=n(404),d=n(25),g=n.n(d),_=n(34),w=n(35),E=n(1266),O=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),j=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),O(t,[{key:"shouldComponentUpdate",value:function(e){return e.block.id!==this.props.block.id}},{key:"render",value:function(){var e=this.props.block,t=null;return t=[],e.transactions.length>0&&(t=[],e.transactions.forEach(function(e,n){t.push(u.a.createElement(v.a,{key:n,trx:e,index:n}))})),u.a.createElement("div",null,t)}}]),t}(u.a.Component),P=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={showInput:!1},n}return a(t,e),O(t,[{key:"componentDidMount",value:function(){this._getBlock(this.props.height)}},{key:"componentWillReceiveProps",value:function(e){e.height!==this.props.height&&this._getBlock(e.height)}},{key:"shouldComponentUpdate",value:function(e,t){return!y.a.is(e.blocks,this.props.blocks)||e.height!==this.props.height||e.dynGlobalObject!==this.props.dynGlobalObject||t.showInput!==this.state.showInput}},{key:"_getBlock",value:function(e){e&&(e=parseInt(e,10),this.props.blocks.get(e)||k.a.getBlock(e))}},{key:"_nextBlock",value:function(){var e=this.props.params.height,t=Math.min(this.props.dynGlobalObject.get("head_block_number"),parseInt(e,10)+1);this.props.router.push("/block/"+t)}},{key:"_previousBlock",value:function(){var e=this.props.params.height,t=Math.max(1,parseInt(e,10)-1);this.props.router.push("/block/"+t)}},{key:"toggleInput",value:function(e){e.preventDefault(),this.setState({showInput:!0})}},{key:"_onKeyDown",value:function(e){e&&13===e.keyCode&&(this.props.router.push("/block/"+e.target.value),this.setState({showInput:!1}))}},{key:"_onSubmit",value:function(){var e=this.refs.blockInput.value;e&&this._onKeyDown({keyCode:13,target:{value:e}})}},{key:"render",value:function(){var e=this.state.showInput,t=this.props.blocks,n=parseInt(this.props.height,10),o=t.get(n),r=e?u.a.createElement("span",{className:"inline-label"},u.a.createElement("input",{ref:"blockInput",type:"number",onKeyDown:this._onKeyDown.bind(this)}),u.a.createElement("button",{onClick:this._onSubmit.bind(this),className:"button"},u.a.createElement(g.a,{content:"explorer.block.go_to"}))):u.a.createElement("span",null,u.a.createElement(g.a,{style:{textTransform:"uppercase"},component:"span",content:"explorer.block.title"}),u.a.createElement("a",{onClick:this.toggleInput.bind(this)}," #",n));return u.a.createElement("div",{className:"grid-block page-layout"},u.a.createElement("div",{className:"grid-block main-content"},u.a.createElement("div",{className:"grid-content"},u.a.createElement("div",{className:"grid-content no-overflow medium-offset-2 medium-8 large-offset-3 large-6 small-12"},u.a.createElement("h4",{className:"text-center"},r),u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement(g.a,{component:"span",content:"explorer.block.date"}),":  ",o?u.a.createElement(b.a,{value:o.timestamp,format:"full"}):null),u.a.createElement("li",null,u.a.createElement(g.a,{component:"span",content:"explorer.block.witness"}),":  ",o?u.a.createElement(E.a,{witness:o.witness}):null),u.a.createElement("li",null,u.a.createElement(g.a,{component:"span",content:"explorer.block.previous"}),": ",o?o.previous:null),u.a.createElement("li",null,u.a.createElement(g.a,{component:"span",content:"explorer.block.transactions"}),": ",o?o.transactions.length:null)),u.a.createElement("div",{className:"clearfix",style:{marginBottom:"1rem"}},u.a.createElement("div",{className:"button float-left outline",onClick:this._previousBlock.bind(this)},"←"),u.a.createElement("div",{className:"button float-right outline",onClick:this._nextBlock.bind(this)},"→")),o?u.a.createElement(j,{block:o}):null))))}}]),t}(u.a.Component);P.propTypes={dynGlobalObject:_.a.ChainObject.isRequired,blocks:s.PropTypes.object.isRequired,height:s.PropTypes.number.isRequired},P.defaultProps={dynGlobalObject:"2.1.0",blocks:{},height:1};var x=Object(w.a)(P,{keep_updating:!0}),C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},I=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),T=function(e){function t(){return i(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),I(t,[{key:"render",value:function(){var e=parseInt(this.props.params.height,10);return u.a.createElement(h.a,{stores:[p.a],inject:{blocks:function(){return p.a.getState().blocks}}},u.a.createElement(x,C({},this.props,{height:e})))}}]),t}(u.a.Component);t.default=T}});
//# sourceMappingURL=32.js.map