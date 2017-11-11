webpackJsonp([19],{1225:function(t,e,n){"use strict";function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b.a.BASE_OL+b.a.COINS_LIST;return fetch(t).then(function(t){return t.json().then(function(t){return t})}).catch(function(e){console.log("error fetching blocktrades list of coins",e,t)})}function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b.a.BASE_OL+b.a.COINS_LIST;return fetch(t).then(function(t){return t.json().then(function(t){return t})}).catch(function(e){console.log("error fetching simple list of coins",e,t)})}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b.a.BASE,e=t+b.a.TRADING_PAIRS;return fetch(e,{method:"get",headers:new Headers({Accept:"application/json"})}).then(function(t){return t.json().then(function(t){return t})}).catch(function(t){console.log("error fetching blocktrades list of coins",t,e)})}function a(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:b.a.BASE+b.a.DEPOSIT_LIMIT;return fetch(n+"?inputCoinType="+encodeURIComponent(t)+"&outputCoinType="+encodeURIComponent(e),{method:"get",headers:new Headers({Accept:"application/json"})}).then(function(t){return t.json().then(function(t){return t})}).catch(function(n){console.log("error fetching deposit limit of",t,e,n)})}function s(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:b.a.BASE+b.a.ESTIMATE_OUTPUT;return fetch(o+"?inputAmount="+encodeURIComponent(t)+"&inputCoinType="+encodeURIComponent(e)+"&outputCoinType="+encodeURIComponent(n),{method:"get",headers:new Headers({Accept:"application/json"})}).then(function(t){return t.json().then(function(t){return t})}).catch(function(t){console.log("error fetching deposit limit of",e,n,t)})}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b.a.BASE_OL+b.a.ACTIVE_WALLETS;return fetch(t).then(function(t){return t.json().then(function(t){return t})}).catch(function(e){console.log("error fetching blocktrades active wallets",e,t)})}function u(t){var e=t.inputCoinType,n=t.outputCoinType,o=t.outputAddress,r=t.url,i=void 0===r?b.a.BASE_OL:r,a=t.stateCallback,s={inputCoinType:e,outputCoinType:n,outputAddress:o},c=JSON.stringify(s);C[c]||(C[c]=!0,fetch(i+"/simple-api/initiate-trade",{method:"post",headers:new Headers({Accept:"application/json","Content-Type":"application/json"}),body:c}).then(function(t){t.json().then(function(t){delete C[c];var e={address:t.inputAddress||"unknown",memo:t.inputMemo,error:t.error||null};a&&a(e)},function(t){delete C[c],a&&a({address:"unknown",memo:null})})},function(t){delete C[c],a&&a({address:"unknown",memo:null})}).catch(function(t){console.log("fetch error:",t),delete C[c]}))}function l(t){var e=t.allCoins,n=t.tradingPairs,o=t.backer,r={};e.forEach(function(t){return r[t.coinType]=t});var i={};n.forEach(function(t){i[t.inputCoinType]||(i[t.inputCoinType]={}),i[t.inputCoinType][t.outputCoinType]=!0});var a=[];return e.forEach(function(t){if(t.walletSymbol.startsWith(o+".")&&t.backingCoinType&&r[t.backingCoinType]){var e=i[t.backingCoinType]&&i[t.backingCoinType][t.coinType],n=i[t.coinType]&&i[t.coinType][t.backingCoinType];a.push({name:r[t.backingCoinType].name,intermediateAccount:r[t.backingCoinType].intermediateAccount,gateFee:r[t.backingCoinType].gateFee,walletType:r[t.backingCoinType].walletType,backingCoinType:r[t.backingCoinType].walletSymbol,symbol:t.walletSymbol,supportsMemos:r[t.backingCoinType].supportsOutputMemos,depositAllowed:e,withdrawalAllowed:n})}}),a}function h(t){var e=t.url,n=void 0===e?b.a.BASE:e,o=t.walletType,r=t.newAddress;return r?fetch(n+"/wallets/"+o+"/address-validator?address="+encodeURIComponent(r),{method:"get",headers:new Headers({Accept:"application/json"})}).then(function(t){return t.json().then(function(t){return t.isValid})}).catch(function(t){console.log("validate error:",t)}):new Promise(function(t){return t()})}function f(t){var e=t.input_coin_type,n=t.output_coin_type,o=t.url,r=t.account_name;if(!e||!n)return Promise.reject();var i=JSON.stringify({inputCoinType:e,outputCoinType:n,outputAddress:r,inputMemo:"blocktrades conversion: "+e+"to"+n}),a=o+e+n+r;return new Promise(function(t,e){if(E[a])return t(E[a]);fetch(o+"/simple-api/initiate-trade",{method:"post",headers:new Headers({Accept:"application/json","Content-Type":"application/json"}),body:i}).then(function(n){n.json().then(function(e){E[a]=e,t(e)},e).catch(e)}).catch(e)})}function p(t){return w.has("history_address_"+t)}function d(t){var e=t.wallet,n=t.addresses;w.set("history_address_"+e,n)}function g(t){return w.get("history_address_"+t,[])}function m(t){var e=t.wallet,n=t.address;w.set("history_address_last_"+e,n)}function v(t){return w.get("history_address_last_"+t,"")}e.d=o,e.e=r,e.c=i,e.i=a,e.b=s,e.f=c,e.j=u,e.g=l,e.k=h,e.h=f,n.d(e,"a",function(){return T});var y=n(93),b=n(254),w=new y.a(""),C={},E={},T={has:p,set:d,get:g,setLast:m,getLast:v}},1234:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=n(10),i=n(1225),a=n(254),s=function(){function t(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),u={},l=function(t,e){t({down:e})},h=function(){function t(){o(this,t)}return c(t,[{key:"fetchCoins",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.backer,n=void 0===e?"OPEN":e,o=t.url,r=void 0===o?void 0:o;return u["fetchCoins_"+n]?{}:(u["fetchCoins_"+n]=!0,function(t){var e=setTimeout(l.bind(null,t,n),1e4);Promise.all([Object(i.d)(r),Object(i.c)(a.a.BASE_OL),Object(i.f)(r)]).then(function(o){clearTimeout(e),delete u["fetchCoins_"+n];var r=s(o,3),a=r[0],c=r[1],l=r[2],h=Object(i.g)({allCoins:a,tradingPairs:c,backer:n}).filter(function(t){return!!t.walletType});h.forEach(function(t){t.isAvailable=-1!==l.indexOf(t.walletType)}),t({coins:a,backedCoins:h,backer:n})})})}},{key:"fetchCoinsSimple",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.backer,n=void 0===e?"RUDEX":e,o=t.url,r=void 0===o?void 0:o;return u["fetchCoinsSimple_"+n]?{}:(u["fetchCoinsSimple_"+n]=!0,function(t){var e=setTimeout(l.bind(null,t,n),1e4);Object(i.e)(r).then(function(o){clearTimeout(e),delete u["fetchCoinsSimple_"+n],t({coins:o,backer:n})})})}},{key:"fetchBridgeCoins",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return u.fetchBridgeCoins?{}:(u.fetchBridgeCoins=!0,function(e){var n=setTimeout(l.bind(null,e,"TRADE"),1e4);Promise.all([Object(i.d)(t),Object(i.c)(a.a.BASE),Object(i.f)(t)]).then(function(t){clearTimeout(n),delete u.fetchBridgeCoins;var o=s(t,3),r=o[0],i=o[1],a=o[2];e({coins:r,bridgeCoins:i,wallets:a})})})}}]),t}();e.a=r.a.createActions(h)},1237:function(t,e){t.exports={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8}},1238:function(t,e){t.exports={L:1,M:0,Q:3,H:2}},1239:function(t,e,n){function o(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);for(var n=0;n<t.length&&0==t[n];)n++;this.num=new Array(t.length-n+e);for(var o=0;o<t.length-n;o++)this.num[o]=t[o+n]}var r=n(1240);o.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),n=0;n<this.getLength();n++)for(var i=0;i<t.getLength();i++)e[n+i]^=r.gexp(r.glog(this.get(n))+r.glog(t.get(i)));return new o(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=r.glog(this.get(0))-r.glog(t.get(0)),n=new Array(this.getLength()),i=0;i<this.getLength();i++)n[i]=this.get(i);for(var i=0;i<t.getLength();i++)n[i]^=r.gexp(r.glog(t.get(i))+e);return new o(n,0).mod(t)}},t.exports=o},1240:function(t,e){for(var n={glog:function(t){if(t<1)throw new Error("glog("+t+")");return n.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return n.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},o=0;o<8;o++)n.EXP_TABLE[o]=1<<o;for(var o=8;o<256;o++)n.EXP_TABLE[o]=n.EXP_TABLE[o-4]^n.EXP_TABLE[o-5]^n.EXP_TABLE[o-6]^n.EXP_TABLE[o-8];for(var o=0;o<255;o++)n.LOG_TABLE[n.EXP_TABLE[o]]=o;t.exports=n},1245:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){return t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1}var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=n(1),u=n(21),l=n(1246),h=n(1238),f=function(t){function e(){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),s(e,[{key:"shouldComponentUpdate",value:function(t){var n=this;return Object.keys(e.propTypes).some(function(e){return n.props[e]!==t[e]})}},{key:"componentDidMount",value:function(){this.update()}},{key:"componentDidUpdate",value:function(){this.update()}},{key:"update",value:function(){var t=this.props,e=t.value,n=t.size,o=t.level,r=t.bgColor,i=t.fgColor,s=new l(-1,h[o]);if(s.addData(e),s.make(),null!=this._canvas){var c=this._canvas,u=c.getContext("2d");if(!u)return;var f=s.modules;if(null===f)return;var p=n/f.length,d=n/f.length,g=(window.devicePixelRatio||1)/a(u);c.height=c.width=n*g,u.scale(g,g),f.forEach(function(t,e){t.forEach(function(t,n){u&&(u.fillStyle=t?i:r);var o=Math.ceil((n+1)*p)-Math.floor(n*p),a=Math.ceil((e+1)*d)-Math.floor(e*d);u&&u.fillRect(Math.round(n*p),Math.round(e*d),o,a)})})}}},{key:"render",value:function(){var t=this;return c.createElement("canvas",{style:{height:this.props.size,width:this.props.size},height:this.props.size,width:this.props.size,ref:function(e){return t._canvas=e}})}}]),e}(c.Component);Object.defineProperty(f,"defaultProps",{enumerable:!0,writable:!0,value:{size:128,level:"L",bgColor:"#FFFFFF",fgColor:"#000000"}}),Object.defineProperty(f,"propTypes",{enumerable:!0,writable:!0,value:{value:u.string.isRequired,size:u.number,level:u.oneOf(["L","M","Q","H"]),bgColor:u.string,fgColor:u.string}}),t.exports=f},1246:function(t,e,n){function o(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var r=n(1247),i=n(1248),a=n(1249),s=n(1250),c=n(1239),u=o.prototype;u.addData=function(t){var e=new r(t);this.dataList.push(e),this.dataCache=null},u.isDark=function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},u.getModuleCount=function(){return this.moduleCount},u.make=function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=i.getRSBlocks(t,this.errorCorrectLevel),n=new a,o=0,r=0;r<e.length;r++)o+=e[r].dataCount;for(var r=0;r<this.dataList.length;r++){var c=this.dataList[r];n.put(c.mode,4),n.put(c.getLength(),s.getLengthInBits(c.mode,t)),c.write(n)}if(n.getLengthInBits()<=8*o)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},u.makeImpl=function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++)this.modules[n][r]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=o.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},u.setupPositionProbePattern=function(t,e){for(var n=-1;n<=7;n++)if(!(t+n<=-1||this.moduleCount<=t+n))for(var o=-1;o<=7;o++)e+o<=-1||this.moduleCount<=e+o||(this.modules[t+n][e+o]=0<=n&&n<=6&&(0==o||6==o)||0<=o&&o<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=o&&o<=4)},u.getBestMaskPattern=function(){for(var t=0,e=0,n=0;n<8;n++){this.makeImpl(!0,n);var o=s.getLostPoint(this);(0==n||t>o)&&(t=o,e=n)}return e},u.createMovieClip=function(t,e,n){var o=t.createEmptyMovieClip(e,n);this.make();for(var r=0;r<this.modules.length;r++)for(var i=1*r,a=0;a<this.modules[r].length;a++){var s=1*a,c=this.modules[r][a];c&&(o.beginFill(0,100),o.moveTo(s,i),o.lineTo(s+1,i),o.lineTo(s+1,i+1),o.lineTo(s,i+1),o.endFill())}return o},u.setupTimingPattern=function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},u.setupPositionAdjustPattern=function(){for(var t=s.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var n=0;n<t.length;n++){var o=t[e],r=t[n];if(null==this.modules[o][r])for(var i=-2;i<=2;i++)for(var a=-2;a<=2;a++)this.modules[o+i][r+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a}},u.setupTypeNumber=function(t){for(var e=s.getBCHTypeNumber(this.typeNumber),n=0;n<18;n++){var o=!t&&1==(e>>n&1);this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=o}for(var n=0;n<18;n++){var o=!t&&1==(e>>n&1);this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=o}},u.setupTypeInfo=function(t,e){for(var n=this.errorCorrectLevel<<3|e,o=s.getBCHTypeInfo(n),r=0;r<15;r++){var i=!t&&1==(o>>r&1);r<6?this.modules[r][8]=i:r<8?this.modules[r+1][8]=i:this.modules[this.moduleCount-15+r][8]=i}for(var r=0;r<15;r++){var i=!t&&1==(o>>r&1);r<8?this.modules[8][this.moduleCount-r-1]=i:r<9?this.modules[8][15-r-1+1]=i:this.modules[8][15-r-1]=i}this.modules[this.moduleCount-8][8]=!t},u.mapData=function(t,e){for(var n=-1,o=this.moduleCount-1,r=7,i=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var c=0;c<2;c++)if(null==this.modules[o][a-c]){var u=!1;i<t.length&&(u=1==(t[i]>>>r&1));var l=s.getMask(e,o,a-c);l&&(u=!u),this.modules[o][a-c]=u,r--,-1==r&&(i++,r=7)}if((o+=n)<0||this.moduleCount<=o){o-=n,n=-n;break}}},o.PAD0=236,o.PAD1=17,o.createData=function(t,e,n){for(var r=i.getRSBlocks(t,e),c=new a,u=0;u<n.length;u++){var l=n[u];c.put(l.mode,4),c.put(l.getLength(),s.getLengthInBits(l.mode,t)),l.write(c)}for(var h=0,u=0;u<r.length;u++)h+=r[u].dataCount;if(c.getLengthInBits()>8*h)throw new Error("code length overflow. ("+c.getLengthInBits()+">"+8*h+")");for(c.getLengthInBits()+4<=8*h&&c.put(0,4);c.getLengthInBits()%8!=0;)c.putBit(!1);for(;;){if(c.getLengthInBits()>=8*h)break;if(c.put(o.PAD0,8),c.getLengthInBits()>=8*h)break;c.put(o.PAD1,8)}return o.createBytes(c,r)},o.createBytes=function(t,e){for(var n=0,o=0,r=0,i=new Array(e.length),a=new Array(e.length),u=0;u<e.length;u++){var l=e[u].dataCount,h=e[u].totalCount-l;o=Math.max(o,l),r=Math.max(r,h),i[u]=new Array(l);for(var f=0;f<i[u].length;f++)i[u][f]=255&t.buffer[f+n];n+=l;var p=s.getErrorCorrectPolynomial(h),d=new c(i[u],p.getLength()-1),g=d.mod(p);a[u]=new Array(p.getLength()-1);for(var f=0;f<a[u].length;f++){var m=f+g.getLength()-a[u].length;a[u][f]=m>=0?g.get(m):0}}for(var v=0,f=0;f<e.length;f++)v+=e[f].totalCount;for(var y=new Array(v),b=0,f=0;f<o;f++)for(var u=0;u<e.length;u++)f<i[u].length&&(y[b++]=i[u][f]);for(var f=0;f<r;f++)for(var u=0;u<e.length;u++)f<a[u].length&&(y[b++]=a[u][f]);return y},t.exports=o},1247:function(t,e,n){function o(t){this.mode=r.MODE_8BIT_BYTE,this.data=t}var r=n(1237);o.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}},t.exports=o},1248:function(t,e,n){function o(t,e){this.totalCount=t,this.dataCount=e}var r=n(1238);o.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],o.getRSBlocks=function(t,e){var n=o.getRsBlockTable(t,e);if(void 0==n)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var r=n.length/3,i=new Array,a=0;a<r;a++)for(var s=n[3*a+0],c=n[3*a+1],u=n[3*a+2],l=0;l<s;l++)i.push(new o(c,u));return i},o.getRsBlockTable=function(t,e){switch(e){case r.L:return o.RS_BLOCK_TABLE[4*(t-1)+0];case r.M:return o.RS_BLOCK_TABLE[4*(t-1)+1];case r.Q:return o.RS_BLOCK_TABLE[4*(t-1)+2];case r.H:return o.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},t.exports=o},1249:function(t,e){function n(){this.buffer=new Array,this.length=0}n.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var n=0;n<e;n++)this.putBit(1==(t>>>e-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=n},1250:function(t,e,n){var o=n(1237),r=n(1239),i=n(1240),a={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},s={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;s.getBCHDigit(e)-s.getBCHDigit(s.G15)>=0;)e^=s.G15<<s.getBCHDigit(e)-s.getBCHDigit(s.G15);return(t<<10|e)^s.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;s.getBCHDigit(e)-s.getBCHDigit(s.G18)>=0;)e^=s.G18<<s.getBCHDigit(e)-s.getBCHDigit(s.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return s.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,n){switch(t){case a.PATTERN000:return(e+n)%2==0;case a.PATTERN001:return e%2==0;case a.PATTERN010:return n%3==0;case a.PATTERN011:return(e+n)%3==0;case a.PATTERN100:return(Math.floor(e/2)+Math.floor(n/3))%2==0;case a.PATTERN101:return e*n%2+e*n%3==0;case a.PATTERN110:return(e*n%2+e*n%3)%2==0;case a.PATTERN111:return(e*n%3+(e+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new r([1],0),n=0;n<t;n++)e=e.multiply(new r([1,i.gexp(n)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case o.MODE_NUMBER:return 10;case o.MODE_ALPHA_NUM:return 9;case o.MODE_8BIT_BYTE:case o.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case o.MODE_NUMBER:return 12;case o.MODE_ALPHA_NUM:return 11;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case o.MODE_NUMBER:return 14;case o.MODE_ALPHA_NUM:return 13;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),n=0,o=0;o<e;o++)for(var r=0;r<e;r++){for(var i=0,a=t.isDark(o,r),s=-1;s<=1;s++)if(!(o+s<0||e<=o+s))for(var c=-1;c<=1;c++)r+c<0||e<=r+c||0==s&&0==c||a==t.isDark(o+s,r+c)&&i++;i>5&&(n+=3+i-5)}for(var o=0;o<e-1;o++)for(var r=0;r<e-1;r++){var u=0;t.isDark(o,r)&&u++,t.isDark(o+1,r)&&u++,t.isDark(o,r+1)&&u++,t.isDark(o+1,r+1)&&u++,0!=u&&4!=u||(n+=3)}for(var o=0;o<e;o++)for(var r=0;r<e-6;r++)t.isDark(o,r)&&!t.isDark(o,r+1)&&t.isDark(o,r+2)&&t.isDark(o,r+3)&&t.isDark(o,r+4)&&!t.isDark(o,r+5)&&t.isDark(o,r+6)&&(n+=40);for(var r=0;r<e;r++)for(var o=0;o<e-6;o++)t.isDark(o,r)&&!t.isDark(o+1,r)&&t.isDark(o+2,r)&&t.isDark(o+3,r)&&t.isDark(o+4,r)&&!t.isDark(o+5,r)&&t.isDark(o+6,r)&&(n+=40);for(var l=0,r=0;r<e;r++)for(var o=0;o<e;o++)t.isDark(o,r)&&l++;return n+=Math.abs(100*l/e/e-50)/5*10}};t.exports=s},1251:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=n(26),i=n.n(r),a=n(10),s=n(1234),c=n(93),u=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),l=new c.a("__graphene__"),h=function(){function t(){o(this,t),this.backedCoins=i.a.Map(l.get("backedCoins",{})),this.bridgeCoins=i.a.Map(i.a.fromJS(l.get("bridgeCoins",{}))),this.bridgeInputs=["btc","dash","eth","steem"],this.down=i.a.Map({}),this.bindListeners({onFetchCoins:s.a.fetchCoins,onFetchCoinsSimple:s.a.fetchCoinsSimple,onFetchBridgeCoins:s.a.fetchBridgeCoins})}return u(t,[{key:"onFetchCoins",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.backer,n=t.coins,o=t.backedCoins,r=t.down;e&&n&&(this.backedCoins=this.backedCoins.set(e,o),l.set("backedCoins",this.backedCoins.toJS()),this.down=this.down.set(e,!1)),r&&(this.down=this.down.set(r,!0))}},{key:"onFetchCoinsSimple",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.backer,n=t.coins,o=t.down;e&&n&&(this.backedCoins=this.backedCoins.set(e,n),l.set("backedCoins",this.backedCoins.toJS()),this.down=this.down.set(e,!1)),o&&(this.down=this.down.set(o,!0))}},{key:"onFetchBridgeCoins",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.coins,o=e.bridgeCoins,r=e.wallets,a=e.down;if(n&&o){var s={};n.forEach(function(t){return s[t.coinType]=t}),o=o.filter(function(e){return e&&s[e.outputCoinType]&&"bitshares2"===s[e.outputCoinType].walletType&&-1!==t.bridgeInputs.indexOf(e.inputCoinType)}).forEach(function(e){e.isAvailable=-1!==r.indexOf(s[e.outputCoinType].walletType),t.bridgeCoins=t.bridgeCoins.setIn([s[e.outputCoinType].walletSymbol,e.inputCoinType],i.a.fromJS(e))}),l.set("bridgeCoins",this.bridgeCoins.toJS())}a&&(this.down=this.down.set(a,!0))}}]),t}();e.a=a.a.createStore(h,"GatewayStore")},1272:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=n(1),s=n.n(a),c=n(259),u=n(34),l=n(35),h=n(25),f=n.n(h),p=n(1245),d=n.n(p),g=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),m=function(t){function e(){o(this,e);var t=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.state={hover:!1},t}return i(e,t),g(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.account,o=e.image_size,r=n.get("lifetime_referrer_name")===n.get("name"),i=s.a.createElement("div",{className:"account-image"},s.a.createElement(d.a,{size:o.width,value:n.get("name")})),a=this.state.hover?!this.props.showQR:this.props.showQR,u=n.get("id").substring(4);return s.a.createElement("div",{style:{maxWidth:o.width},className:"account-info"+(this.props.my_account?" my-account":"")},this.props.title?s.a.createElement("h4",null,this.props.title):null,s.a.createElement("div",{onMouseEnter:function(){t.setState({hover:!0})},onMouseLeave:function(){t.setState({hover:!1})},className:"clickable",onClick:function(){t.setState({hover:!1}),t.props.toggleQR(!t.props.showQR)}},a?i:s.a.createElement(c.a,{size:o,account:n.get("name"),custom_image:null})),s.a.createElement("p",null,s.a.createElement(f.a,{content:"account.deposit_address"}),"!"),s.a.createElement("p",{className:this.props.titleClass},s.a.createElement("span",{className:r?"lifetime":""},n.get("name"))),s.a.createElement("p",null,"#",u))}}]),e}(s.a.Component);m.propTypes={account:u.a.ChainAccount.isRequired,title:s.a.PropTypes.string,image_size:s.a.PropTypes.object.isRequired,my_account:s.a.PropTypes.bool},m.defaultProps={title:null,image_size:{height:120,width:120},showQR:!1,titleClass:"account-title"},e.a=Object(l.a)(m)},1322:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=n(1),l=n.n(u),h=n(128),f=n(77),p=n(38),d=n(135),g=n(1251),m=n(37),v=n(131),y=n.n(v),b=n(1272),w=n(25),C=n.n(w),E=n(51),T=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),_=function(t){function e(t){o(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.last_path=null,n.state={showAdvanced:t.viewSettings.get("showAdvanced",!1),showQR:t.viewSettings.get("showDepositQR",!1)},n}return i(e,t),T(e,[{key:"shouldComponentUpdate",value:function(t,e){var n=this.last_path!==window.location.hash;return this.last_path=window.location.hash,n||this.props.account!==t.account||this.props.linkedAccounts!==t.linkedAccounts||e.showAdvanced!==this.state.showAdvanced||e.showQR!==this.state.showQR||e.titleClass!==this.state.titleClass}},{key:"componentWillUnmount",value:function(){y.a.hide()}},{key:"onLinkAccount",value:function(t){t.preventDefault(),h.a.linkAccount(this.props.account.get("name"))}},{key:"onUnlinkAccount",value:function(t){t.preventDefault(),h.a.unlinkAccount(this.props.account.get("name"))}},{key:"_toggleAdvanced",value:function(t){t.preventDefault();var e=!this.state.showAdvanced;this.setState({showAdvanced:e}),E.a.changeViewSetting({showAdvanced:e})}},{key:"_toggleQR",value:function(t){this.setState({showQR:t}),E.a.changeViewSetting({showDepositQR:t})}},{key:"_depositClick",value:function(){var t=this;this._toggleQR(!0),this.setState({titleClass:"account-title flash"}),setTimeout(function(){t.setState({titleClass:void 0})},250)}},{key:"render",value:function(){var t=this.props,e=t.account,n=t.linkedAccounts,o=t.isMyAccount,r=e.get("name");o||(n.has(r)?l.a.createElement("span",{className:"button block-button",onClick:this.onUnlinkAccount.bind(this)},l.a.createElement(C.a,{content:"account.unfollow"})):l.a.createElement("span",{className:"button block-button",onClick:this.onLinkAccount.bind(this)},l.a.createElement(C.a,{content:"account.follow"})));var i=(this.state.showAdvanced?l.a.createElement("span",null,"▼"):l.a.createElement("span",null,"▲"),{height:150,width:150});return l.a.createElement("div",{className:"grid-block vertical account-left-panel no-padding no-overflow"},l.a.createElement("div",{className:"grid-block"},l.a.createElement("div",{className:"grid-content no-padding",style:{overflowX:"hidden"}},l.a.createElement("div",{className:"regular-padding"},l.a.createElement(b.a,{account:e.get("id"),image_size:i,my_account:o,showQR:this.state.showQR,toggleQR:this._toggleQR.bind(this),titleClass:this.state.titleClass}),l.a.createElement("div",{className:"grid-container no-margin",style:{paddingTop:20,maxWidth:i.width}})),l.a.createElement("section",{className:"block-list"},l.a.createElement("ul",{className:"account-left-menu",style:{marginBottom:0}},l.a.createElement("li",null,l.a.createElement(m.b,{to:"/account/"+r+"/dashboard/",activeClassName:"active"},l.a.createElement(C.a,{content:"header.dashboard"}))),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/account/"+r+"/deposit-withdraw/",activeClassName:"active"},l.a.createElement(C.a,{content:"account.deposit_withdraw"}))),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/transfer/?to="+r,activeClassName:"active"},l.a.createElement(C.a,{content:"account.pay"}))),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/account/"+r+"/orders/",activeClassName:"active"},l.a.createElement(C.a,{content:"account.open_orders"}))))))))}}]),e}(l.a.Component);_.propTypes={account:l.a.PropTypes.object.isRequired,linkedAccounts:u.PropTypes.object};var k=_,A=n(34),P=n(35),O=n(59),B=n(175),L=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},S=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),R=function(t){function e(){return a(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return c(e,t),S(e,[{key:"componentDidMount",value:function(){this.props.account&&f.a.isMyAccount(this.props.account)&&h.a.setCurrentAccount.defer(this.props.account.get("name")),B.a.getPossibleFees(this.props.account,"transfer")}},{key:"render",value:function(){var t=this.props,e=t.myAccounts,n=t.linkedAccounts,o=t.account_name,r=t.searchAccounts,i=t.settings,a=t.wallet_locked,s=t.account,c=t.hiddenAssets,u=f.a.isMyAccount(s);return l.a.createElement("div",{className:"grid-block page-layout"},l.a.createElement("div",{className:"show-for-medium grid-block shrink left-column no-padding",style:{minWidth:200}},l.a.createElement(k,{account:s,isMyAccount:u,linkedAccounts:n,myAccounts:e,viewSettings:this.props.viewSettings,passwordLogin:i.get("passwordLogin")})),l.a.createElement("div",{className:"grid-block main-content"},l.a.createElement("div",{className:"grid-container"},l.a.cloneElement(l.a.Children.only(this.props.children),{account_name:o,linkedAccounts:n,searchAccounts:r,settings:i,wallet_locked:a,account:s,isMyAccount:u,hiddenAssets:c,contained:!0,balances:s.get("balances",null),orders:s.get("orders",null),backedCoins:this.props.backedCoins,bridgeCoins:this.props.bridgeCoins,gatewayDown:this.props.gatewayDown,viewSettings:this.props.viewSettings,proxy:s.getIn(["options","voting_account"])}))))}}]),e}(l.a.Component);R.propTypes={account:A.a.ChainAccount.isRequired},R.defaultProps={account:"props.params.account_name"},R=Object(P.a)(R,{keep_updating:!0,show_loader:!0});var D=function(t){function e(){return a(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return c(e,t),S(e,[{key:"render",value:function(){var t=this.props.routeParams.account_name;return l.a.createElement(R,L({},this.props,{account_name:t}))}}]),e}(l.a.Component);e.default=Object(O.connect)(D,{listenTo:function(){return[f.a,p.a,d.a,g.a]},getProps:function(){return{linkedAccounts:f.a.getState().linkedAccounts,searchAccounts:f.a.getState().searchAccounts,settings:p.a.getState().settings,hiddenAssets:p.a.getState().hiddenAssets,wallet_locked:d.a.getState().locked,myAccounts:f.a.getState().myAccounts,viewSettings:p.a.getState().viewSettings,backedCoins:g.a.getState().backedCoins,bridgeCoins:g.a.getState().bridgeCoins,gatewayDown:g.a.getState().down}}})}});
//# sourceMappingURL=19.js.map