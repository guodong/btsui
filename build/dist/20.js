webpackJsonp([20],{1244:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(20),i=n.n(o),c=n(1253),l=n.n(c),s=n(76),u=function(e){var t=e.className,n=void 0===t?"button":t,a=e.text,o=void 0===a?"":a,c=e.tip,u=void 0===c?"tooltip.copy_tip":c,f=e.dataPlace,p=void 0===f?"right":f;return r.a.createElement(l.a,{"data-clipboard-text":o,className:n,"data-place":p,"data-tip":i.a.translate(u)},r.a.createElement(s.a,{name:"clippy"}))};t.a=u},1253:function(e,t,n){!function(t,a){e.exports=a(n(1),n(21),n(1254))}(0,function(e,t,n){return function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={exports:{},id:a,loaded:!1};return e[a].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var a=n(1).default,r=n(17).default,o=n(26).default,i=n(29).default,c=n(30).default,l=n(36).default,s=n(39).default;Object.defineProperty(t,"__esModule",{value:!0});var u=n(40),f=s(u),p=n(41),d=s(p),h=function(e){function t(){i(this,t),a(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return r(t,e),o(t,[{key:"propsWith",value:function(e){var t=!(arguments.length<=1||void 0===arguments[1])&&arguments[1],n={};return l(this.props).forEach(function(a){if(-1!==a.search(e)){var r=t?a.replace(e,""):a;n[r]=this.props[a]}},this),n}},{key:"componentWillUnmount",value:function(){this.clipboard&&this.clipboard.destroy()}},{key:"componentDidMount",value:function(){var e=this.props.options||this.propsWith(/^option-/,!0),t=f.default.version.match(/0\.13(.*)/)?this.refs.element.getDOMNode():this.refs.element,a=n(42);this.clipboard=new a(t,e);var r=this.propsWith(/^on/,!0);l(r).forEach(function(e){this.clipboard.on(e.toLowerCase(),this.props["on"+e])},this)}},{key:"render",value:function(){var e=c({type:this.getType(),className:this.props.className||"",style:this.props.style||{},ref:"element",onClick:this.props.onClick},this.propsWith(/^data-/),this.propsWith(/^button-/,!0));return f.default.createElement(this.getComponent(),e,this.props.children)}},{key:"getType",value:function(){return"button"===this.getComponent()||"input"===this.getComponent()?this.props.type||"button":void 0}},{key:"getComponent",value:function(){return this.props.component||"button"}}],[{key:"propTypes",value:{options:d.default.object,type:d.default.string,className:d.default.string,style:d.default.object,component:d.default.string,children:d.default.oneOfType([d.default.element,d.default.string,d.default.number,d.default.object])},enumerable:!0},{key:"defaultProps",value:{onClick:function(){}},enumerable:!0}]),t}(f.default.Component);t.default=h,e.exports=t.default},function(e,t,n){"use strict";var a=n(2).default;t.default=function(e,t,n){for(var r=!0;r;){var o=e,i=t,c=n;r=!1,null===o&&(o=Function.prototype);var l=a(o,i);if(void 0!==l){if("value"in l)return l.value;var s=l.get;if(void 0===s)return;return s.call(c)}var u=Object.getPrototypeOf(o);if(null===u)return;e=u,t=i,n=c,r=!0,l=u=void 0}},t.__esModule=!0},function(e,t,n){e.exports={default:n(3),__esModule:!0}},function(e,t,n){var a=n(4);n(5),e.exports=function(e,t){return a.getDesc(e,t)}},function(e,t){var n=Object;e.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},function(e,t,n){var a=n(6);n(10)("getOwnPropertyDescriptor",function(e){return function(t,n){return e(a(t),n)}})},function(e,t,n){var a=n(7),r=n(9);e.exports=function(e){return a(r(e))}},function(e,t,n){var a=n(8);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==a(e)?e.split(""):Object(e)}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,n){var a=n(11),r=n(13),o=n(16);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],i={};i[e]=t(n),a(a.S+a.F*o(function(){n(1)}),"Object",i)}},function(e,t,n){var a=n(12),r=n(13),o=n(14),i=function(e,t,n){var c,l,s,u=e&i.F,f=e&i.G,p=e&i.S,d=e&i.P,h=e&i.B,m=e&i.W,y=f?r:r[t]||(r[t]={}),v=f?a:p?a[t]:(a[t]||{}).prototype;f&&(n=t);for(c in n)(l=!u&&v&&c in v)&&c in y||(s=l?v[c]:n[c],y[c]=f&&"function"!=typeof v[c]?n[c]:h&&l?o(s,a):m&&v[c]==s?function(e){var t=function(t){return this instanceof e?new e(t):e(t)};return t.prototype=e.prototype,t}(s):d&&"function"==typeof s?o(Function.call,s):s,d&&((y.prototype||(y.prototype={}))[c]=s))};i.F=1,i.G=2,i.S=4,i.P=8,i.B=16,i.W=32,e.exports=i},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){var n=e.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},function(e,t,n){var a=n(15);e.exports=function(e,t,n){if(a(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,a){return e.call(t,n,a)};case 3:return function(n,a,r){return e.call(t,n,a,r)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){"use strict";var a=n(18).default,r=n(20).default;t.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=a(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(r?r(e,t):e.__proto__=t)},t.__esModule=!0},function(e,t,n){e.exports={default:n(19),__esModule:!0}},function(e,t,n){var a=n(4);e.exports=function(e,t){return a.create(e,t)}},function(e,t,n){e.exports={default:n(21),__esModule:!0}},function(e,t,n){n(22),e.exports=n(13).Object.setPrototypeOf},function(e,t,n){var a=n(11);a(a.S,"Object",{setPrototypeOf:n(23).set})},function(e,t,n){var a=n(4).getDesc,r=n(24),o=n(25),i=function(e,t){if(o(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{r=n(14)(Function.call,a(Object.prototype,"__proto__").set,2),r(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:r(e,n),e}}({},!1):void 0),check:i}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){var a=n(24);e.exports=function(e){if(!a(e))throw TypeError(e+" is not an object!");return e}},function(e,t,n){"use strict";var a=n(27).default;t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),a(e,r.key,r)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),t.__esModule=!0},function(e,t,n){e.exports={default:n(28),__esModule:!0}},function(e,t,n){var a=n(4);e.exports=function(e,t,n){return a.setDesc(e,t,n)}},function(e,t){"use strict";t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},t.__esModule=!0},function(e,t,n){"use strict";var a=n(31).default;t.default=a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},t.__esModule=!0},function(e,t,n){e.exports={default:n(32),__esModule:!0}},function(e,t,n){n(33),e.exports=n(13).Object.assign},function(e,t,n){var a=n(11);a(a.S+a.F,"Object",{assign:n(34)})},function(e,t,n){var a=n(4),r=n(35),o=n(7);e.exports=n(16)(function(){var e=Object.assign,t={},n={},a=Symbol(),r="abcdefghijklmnopqrst";return t[a]=7,r.split("").forEach(function(e){n[e]=e}),7!=e({},t)[a]||Object.keys(e({},n)).join("")!=r})?function(e,t){for(var n=r(e),i=arguments,c=i.length,l=1,s=a.getKeys,u=a.getSymbols,f=a.isEnum;c>l;)for(var p,d=o(i[l++]),h=u?s(d).concat(u(d)):s(d),m=h.length,y=0;m>y;)f.call(d,p=h[y++])&&(n[p]=d[p]);return n}:Object.assign},function(e,t,n){var a=n(9);e.exports=function(e){return Object(a(e))}},function(e,t,n){e.exports={default:n(37),__esModule:!0}},function(e,t,n){n(38),e.exports=n(13).Object.keys},function(e,t,n){var a=n(35);n(10)("keys",function(e){return function(t){return e(a(t))}})},function(e,t){"use strict";t.default=function(e){return e&&e.__esModule?e:{default:e}},t.__esModule=!0},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n}])})},1254:function(e,t,n){var a,r,o;!function(i,c){r=[e,n(1255),n(1257),n(1258)],a=c,void 0!==(o="function"==typeof a?a.apply(t,r):a)&&(e.exports=o)}(0,function(e,t,n,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}var s=r(t),u=r(n),f=r(a),p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=function(e){function t(e,n){o(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.resolveOptions(n),a.listenClick(e),a}return c(t,e),d(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===p(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=(0,f.default)(e,"click",function(e){return t.onClick(e)})}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s.default({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return l("action",e)}},{key:"defaultTarget",value:function(e){var t=l("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return l("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach(function(e){n=n&&!!document.queryCommandSupported(e)}),n}}]),t}(u.default);e.exports=h})},1255:function(e,t,n){var a,r,o;!function(i,c){r=[e,n(1256)],a=c,void 0!==(o="function"==typeof a?a.apply(t,r):a)&&(e.exports=o)}(0,function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(e){return e&&e.__esModule?e:{default:e}}(t),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=function(){function e(t){n(this,e),this.resolveOptions(t),this.initSelection()}return o(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,a.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,a.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":r(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}();e.exports=i})},1256:function(e,t){function n(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var a=window.getSelection(),r=document.createRange();r.selectNodeContents(e),a.removeAllRanges(),a.addRange(r),t=a.toString()}return t}e.exports=n},1257:function(e,t){function n(){}n.prototype={on:function(e,t,n){var a=this.e||(this.e={});return(a[e]||(a[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){function a(){r.off(e,a),t.apply(n,arguments)}var r=this;return a._=t,this.on(e,a,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),a=0,r=n.length;for(a;a<r;a++)n[a].fn.apply(n[a].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),a=n[e],r=[];if(a&&t)for(var o=0,i=a.length;o<i;o++)a[o].fn!==t&&a[o].fn._!==t&&r.push(a[o]);return r.length?n[e]=r:delete n[e],this}},e.exports=n},1258:function(e,t,n){function a(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!c.string(t))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(e))return r(e,t,n);if(c.nodeList(e))return o(e,t,n);if(c.string(e))return i(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function r(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function o(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}function i(e,t,n){return l(document.body,e,t,n)}var c=n(1259),l=n(1260);e.exports=a},1259:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},1260:function(e,t,n){function a(e,t,n,a,o){var i=r.apply(this,arguments);return e.addEventListener(n,i,o),{destroy:function(){e.removeEventListener(n,i,o)}}}function r(e,t,n,a){return function(n){n.delegateTarget=o(n.target,t),n.delegateTarget&&a.call(e,n)}}var o=n(1261);e.exports=a},1261:function(e,t){function n(e,t){for(;e&&e.nodeType!==a;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}var a=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}e.exports=n},1276:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(1),c=n.n(i),l=n(50),s=n.n(l),u=n(128),f=n(77),p=n(6),d=n(25),h=(n.n(d),n(20)),m=n.n(h),y=n(132),v=n.n(y),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},b=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),_=function(e){function t(){a(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={value:null,error:null,existing_account:!1},e.handleChange=e.handleChange.bind(e),e.onKeyDown=e.onKeyDown.bind(e),e}return o(t,e),b(t,[{key:"shouldComponentUpdate",value:function(e,t){return t.value!==this.state.value||t.error!==this.state.error||t.account_name!==this.state.account_name||t.existing_account!==this.state.existing_account||e.searchAccounts!==this.props.searchAccounts}},{key:"componentDidUpdate",value:function(){this.props.onChange&&this.props.onChange({valid:!this.getError()})}},{key:"getValue",value:function(){return this.state.value}},{key:"setValue",value:function(e){this.setState({value:e})}},{key:"clear",value:function(){this.setState({account_name:null,error:null,warning:null})}},{key:"focus",value:function(){this.refs.input.focus()}},{key:"valid",value:function(){return!this.getError()}},{key:"getError",value:function(){var e=this;if(null===this.state.value)return null;var t=null;if(this.state.error)t=this.state.error;else if(this.props.accountShouldExist||this.props.accountShouldNotExist){var n=this.props.searchAccounts.find(function(t){return t===e.state.value});this.props.accountShouldNotExist&&n&&(t=m.a.translate("account.name_input.name_is_taken")),this.props.accountShouldExist&&!n&&(t=m.a.translate("account.name_input.not_found"))}return t}},{key:"validateAccountName",value:function(e){this.state.error=""===e?"Please enter valid account name":p.d.is_account_name_error(e),this.state.warning=null,this.props.cheapNameOnly?this.state.error||p.d.is_cheap_name(e)||(this.state.error=m.a.translate("account.name_input.premium_name_faucet")):this.state.error||p.d.is_cheap_name(e)||(this.state.warning=m.a.translate("account.name_input.premium_name_warning")),this.setState({value:e,error:this.state.error,warning:this.state.warning}),this.props.onChange&&this.props.onChange({value:e,valid:!this.getError()}),(this.props.accountShouldExist||this.props.accountShouldNotExist)&&u.a.accountSearch(e)}},{key:"handleChange",value:function(e){e.preventDefault(),e.stopPropagation();var t=e.target.value.toLowerCase();t=t.match(/[a-z0-9\.-]+/),t=t?t[0]:null,this.setState({account_name:t}),this.validateAccountName(t)}},{key:"onKeyDown",value:function(e){this.props.onEnter&&13===event.keyCode&&this.props.onEnter(e)}},{key:"render",value:function(){var e=this.getError()||"",t=s()("form-group","account-name",{"has-error":!1}),n=this.state.warning;return c.a.createElement("div",{className:t},c.a.createElement("section",null,c.a.createElement("label",{className:"left-label"},this.props.placeholder),c.a.createElement("input",{name:"username",id:"username",type:"text",ref:"input",autoComplete:"off",placeholder:null,onChange:this.handleChange,onKeyDown:this.onKeyDown,value:this.state.account_name||this.props.initial_value})),c.a.createElement("div",{style:{textAlign:"left"},className:"facolor-error"},e),c.a.createElement("div",{style:{textAlign:"left"},className:"facolor-warning"},e?null:n))}}]),t}(c.a.Component);_.propTypes={id:i.PropTypes.string,placeholder:i.PropTypes.string,initial_value:i.PropTypes.string,onChange:i.PropTypes.func,onEnter:i.PropTypes.func,accountShouldExist:i.PropTypes.bool,accountShouldNotExist:i.PropTypes.bool,cheapNameOnly:i.PropTypes.bool,noLabel:i.PropTypes.bool},_.defaultProps={noLabel:!1};var E=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),b(t,[{key:"render",value:function(){return c.a.createElement(v.a,{stores:[f.a],inject:{searchAccounts:function(){return f.a.getState().searchAccounts}}},c.a.createElement(_,g({ref:"nameInput"},this.props)))}}]),t}(c.a.Component);t.a=E},1315:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(1),l=n.n(c),s=n(59),u=(n.n(s),n(50)),f=n.n(u),p=n(128),d=n(77),h=n(1276),m=n(36),y=n(108),v=n(37),g=n(390),b=n(393),_=n(171),E=n(25),w=n.n(E),k=n(20),x=n.n(k),S=n(6),O=n(131),C=n.n(O),P=n(15),A=n(51),T=n(70),j=n(76),N=n(1244),M=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),F=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={validAccountName:!1,accountName:"",validPassword:!1,registrar_account:null,loading:!1,hide_refcode:!0,show_identicon:!1,step:1,showPass:!1,generatedPassword:("P"+S.n.get_random_key().toWif()).substr(0,45),confirm_password:"",understand_1:!1,understand_2:!1,understand_3:!1},e.onFinishConfirm=e.onFinishConfirm.bind(e),e.accountNameInput=null,e}return i(t,e),M(t,[{key:"componentWillMount",value:function(){A.a.changeSetting({setting:"passwordLogin",value:!0})}},{key:"componentDidMount",value:function(){C.a.rebuild()}},{key:"shouldComponentUpdate",value:function(e,t){return!P.a.are_equal_shallow(t,this.state)}},{key:"isValid",value:function(){var e=0===d.a.getMyAccounts().length,t=this.state.validAccountName;return m.a.getWallet()||(t=t&&this.state.validPassword),e||(t=t&&this.state.registrar_account),t&&this.state.understand_1&&this.state.understand_2}},{key:"onAccountNameChange",value:function(e){var t={};void 0!==e.valid&&(t.validAccountName=e.valid),void 0!==e.value&&(t.accountName=e.value),this.state.show_identicon||(t.show_identicon=!0),this.setState(t)}},{key:"onFinishConfirm",value:function(e){var t=this;e.included&&e.broadcasted_transaction&&(b.a.unlisten(this.onFinishConfirm),b.a.reset(),Object(S.f)("getAccount",this.state.accountName).then(function(){console.log("onFinishConfirm"),t.props.router.push("/wallet/backup/create?newAccount=true")}))}},{key:"_unlockAccount",value:function(e,t){m.a.validatePassword(t,!0,e),T.a.checkLock.defer()}},{key:"createAccount",value:function(e,t){var n=this,a=this.refs.refcode?this.refs.refcode.value():null,r=d.a.getState().referralAccount;this.setState({loading:!0}),p.a.createAccountWithPassword(e,t,this.state.registrar_account,r||this.state.registrar_account,0,a).then(function(){p.a.setPasswordAccount(e),n.state.registrar_account?(Object(S.f)("getAccount",e).then(function(){n.setState({step:2,loading:!1}),n._unlockAccount(e,t)}),b.a.listen(n.onFinishConfirm)):(Object(S.f)("getAccount",e).then(function(){n.setState({step:2})}),n._unlockAccount(e,t))}).catch(function(t){console.log("ERROR AccountActions.createAccount",t);var a=t.base&&t.base.length&&t.base.length>0?t.base[0]:"unknown error";t.remote_ip&&(a=t.remote_ip[0]),y.a.addNotification({message:"Failed to create account: "+e+" - "+a,level:"error",autoDismiss:10}),n.setState({loading:!1})})}},{key:"onSubmit",value:function(e){if(e.preventDefault(),this.isValid()){var t=this.accountNameInput.getValue(),n=this.state.generatedPassword;this.createAccount(t,n)}}},{key:"onRegistrarAccountChange",value:function(e){this.setState({registrar_account:e})}},{key:"_onInput",value:function(e,t){var n;this.setState((n={},a(n,e,"confirm_password"===e?t.target.value:!this.state[e]),a(n,"validPassword","confirm_password"===e?t.target.value===this.state.generatedPassword:this.state.validPassword),n))}},{key:"_renderAccountCreateForm",value:function(){var e=this,t=this.state.registrar_account,n=d.a.getMyAccounts(),a=0===n.length,r=this.isValid(),o=!1,i=t?S.b.getAccount(t):null;i&&i.get("lifetime_referrer")==i.get("id")&&(o=!0);var c=f()("submit-button button no-margin",{disabled:!r||t&&!o});return l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("form",{style:{maxWidth:"60rem"},onSubmit:this.onSubmit.bind(this),noValidate:!0},l.a.createElement(h.a,{ref:function(t){t&&(e.accountNameInput=t.refs.nameInput)},cheapNameOnly:!!a,onChange:this.onAccountNameChange.bind(this),accountShouldNotExist:!0,placeholder:x.a.translate("wallet.account_public"),noLabel:!0}),l.a.createElement("section",null,l.a.createElement("label",{className:"left-label"},l.a.createElement(w.a,{content:"wallet.generated"}),"  ",l.a.createElement("span",{className:"tooltip","data-html":!0,"data-tip":"密码是由你的浏览器在你当前的计算机上生成的，除了你以外，没有任何人能知道这个密码，请务必要复制下面的密码，然后拷贝到一个或几个安全的地方保存"},l.a.createElement(j.a,{name:"question-circle"}))),l.a.createElement("div",{style:{paddingBottom:"0.5rem"}},l.a.createElement("span",{className:"inline-label"},l.a.createElement("input",{style:{maxWidth:"calc(30rem - 48px)",fontSize:"80%"},disabled:!0,value:this.state.generatedPassword,type:"text"}),l.a.createElement(N.a,{text:this.state.generatedPassword,tip:"tooltip.copy_password",dataPlace:"top"})))),l.a.createElement("section",null,l.a.createElement("label",{className:"left-label"},l.a.createElement(w.a,{content:"wallet.confirm_password"})),l.a.createElement("input",{type:"password",name:"password",id:"password",value:this.state.confirm_password,onChange:this._onInput.bind(this,"confirm_password")}),this.state.confirm_password&&this.state.confirm_password!==this.state.generatedPassword?l.a.createElement("div",{className:"has-error"},l.a.createElement(w.a,{content:"wallet.confirm_error"})):null),l.a.createElement("br",null),l.a.createElement("div",{className:"confirm-checks",onClick:this._onInput.bind(this,"understand_3")},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",onChange:function(){},checked:this.state.understand_3}),l.a.createElement(w.a,{content:"wallet.understand_3"}))),l.a.createElement("br",null),l.a.createElement("div",{className:"confirm-checks",onClick:this._onInput.bind(this,"understand_1")},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",onChange:function(){},checked:this.state.understand_1}),l.a.createElement(w.a,{content:"wallet.understand_1"}))),l.a.createElement("br",null),l.a.createElement("div",{className:"confirm-checks",style:{paddingBottom:"1.5rem"},onClick:this._onInput.bind(this,"understand_2")},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",onChange:function(){},checked:this.state.understand_2}),l.a.createElement(w.a,{content:"wallet.understand_2"}))),a?null:l.a.createElement("div",{className:"full-width-content form-group no-overflow",style:{paddingTop:30}},l.a.createElement("label",null,l.a.createElement(w.a,{content:"account.pay_from"})),l.a.createElement(g.a,{account_names:n,onChange:this.onRegistrarAccountChange.bind(this)}),t&&!o?l.a.createElement("div",{style:{textAlign:"left"},className:"facolor-error"},l.a.createElement(w.a,{content:"wallet.must_be_ltm"})):null),this.state.loading?l.a.createElement(_.a,{type:"three-bounce"}):l.a.createElement("button",{style:{width:"100%"},className:c},l.a.createElement(w.a,{content:"account.create_account"}))))}},{key:"_renderAccountCreateText",value:function(){var e=d.a.getMyAccounts(),t=0===e.length;return l.a.createElement("div",null,l.a.createElement("h4",{style:{fontWeight:"bold",paddingBottom:15}},l.a.createElement(w.a,{content:"wallet.wallet_password"})),l.a.createElement(w.a,{style:{textAlign:"left"},unsafe:!0,component:"p",content:"wallet.create_account_password_text"}),l.a.createElement(w.a,{style:{textAlign:"left"},component:"p",content:"wallet.create_account_text"}),t?null:l.a.createElement(w.a,{style:{textAlign:"left"},component:"p",content:"wallet.not_first_account"}))}},{key:"_renderBackup",value:function(){var e=this;return l.a.createElement("div",{className:"backup-submit"},l.a.createElement("p",null,l.a.createElement(w.a,{unsafe:!0,content:"wallet.password_crucial"})),l.a.createElement("div",null,this.state.showPass?l.a.createElement("div",null,l.a.createElement("h5",null,l.a.createElement(w.a,{content:"settings.password"}),":"),l.a.createElement("div",{style:{fontWeight:"bold",wordWrap:"break-word"},className:"no-overflow"},this.state.generatedPassword)):l.a.createElement("div",{onClick:function(){e.setState({showPass:!0})},className:"button"},l.a.createElement(w.a,{content:"wallet.password_show"}))),l.a.createElement("div",{className:"divider"}),l.a.createElement("p",{className:"txtlabel warning"},l.a.createElement(w.a,{unsafe:!0,content:"wallet.password_lose_warning"})),l.a.createElement("div",{style:{width:"100%"},onClick:function(){e.context.router.push("/dashboard")},className:"button"},l.a.createElement(w.a,{content:"wallet.ok_done"})))}},{key:"_renderGetStarted",value:function(){return l.a.createElement("div",null,l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(w.a,{content:"wallet.tips_dashboard"}),":"),l.a.createElement("td",null,l.a.createElement(v.b,{to:"/dashboard"},l.a.createElement(w.a,{content:"header.dashboard"})))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(w.a,{content:"wallet.tips_account"}),":"),l.a.createElement("td",null,l.a.createElement(v.b,{to:"/account/"+this.state.accountName+"/overview"},l.a.createElement(w.a,{content:"wallet.link_account"})))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(w.a,{content:"wallet.tips_deposit"}),":"),l.a.createElement("td",null,l.a.createElement(v.b,{to:"/deposit-withdraw"},l.a.createElement(w.a,{content:"wallet.link_deposit"})))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(w.a,{content:"wallet.tips_transfer"}),":"),l.a.createElement("td",null,l.a.createElement(v.b,{to:"/transfer"},l.a.createElement(w.a,{content:"wallet.link_transfer"})))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(w.a,{content:"wallet.tips_settings"}),":"),l.a.createElement("td",null,l.a.createElement(v.b,{to:"/settings"},l.a.createElement(w.a,{content:"header.settings"})))))))}},{key:"_renderGetStartedText",value:function(){return l.a.createElement("div",null,l.a.createElement("p",{style:{fontWeight:"bold"}},l.a.createElement(w.a,{content:"wallet.congrat"})),l.a.createElement("p",null,l.a.createElement(w.a,{content:"wallet.tips_explore_pass"})),l.a.createElement("p",null,l.a.createElement(w.a,{content:"wallet.tips_header"})),l.a.createElement("p",{className:"txtlabel warning"},l.a.createElement(w.a,{content:"wallet.tips_login"})))}},{key:"render",value:function(){var e=this.state.step;return l.a.createElement("div",{className:"sub-content"},l.a.createElement("div",{className:"grid-block wrap vertical"},2===e?l.a.createElement("p",{style:{fontWeight:"bold"}},l.a.createElement(w.a,{content:"wallet.step_"+e})):null,3===e?this._renderGetStartedText():null,1===e?l.a.createElement("div",null,this._renderAccountCreateForm()):2===e?this._renderBackup():this._renderGetStarted()))}}]),t}(l.a.Component);F.contextTypes={router:l.a.PropTypes.object.isRequired},t.default=Object(s.connect)(F,{listenTo:function(){return[d.a]},getProps:function(){return{}}})}});
//# sourceMappingURL=20.js.map