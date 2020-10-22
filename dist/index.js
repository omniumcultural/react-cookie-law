!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ReactCookieLaw=t():e.ReactCookieLaw=t()}(global,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){"use strict";e.exports=n(4)},function(e,t,n){e.exports=n(5)()},function(e,t,n){"use strict";
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.parse=function(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var n={},r=t||{},c=e.split(i),a=r.decode||o,l=0;l<c.length;l++){var u=c[l],f=u.indexOf("=");if(!(f<0)){var p=u.substr(0,f).trim(),y=u.substr(++f,u.length).trim();'"'==y[0]&&(y=y.slice(1,-1)),null==n[p]&&(n[p]=s(y,a))}}return n},t.serialize=function(e,t,n){var o=n||{},i=o.encode||r;if("function"!=typeof i)throw new TypeError("option encode is invalid");if(!c.test(e))throw new TypeError("argument name is invalid");var s=i(t);if(s&&!c.test(s))throw new TypeError("argument val is invalid");var a=e+"="+s;if(null!=o.maxAge){var l=o.maxAge-0;if(isNaN(l))throw new Error("maxAge should be a Number");a+="; Max-Age="+Math.floor(l)}if(o.domain){if(!c.test(o.domain))throw new TypeError("option domain is invalid");a+="; Domain="+o.domain}if(o.path){if(!c.test(o.path))throw new TypeError("option path is invalid");a+="; Path="+o.path}if(o.expires){if("function"!=typeof o.expires.toUTCString)throw new TypeError("option expires is invalid");a+="; Expires="+o.expires.toUTCString()}o.httpOnly&&(a+="; HttpOnly");o.secure&&(a+="; Secure");if(o.sameSite){switch("string"==typeof o.sameSite?o.sameSite.toLowerCase():o.sameSite){case!0:a+="; SameSite=Strict";break;case"lax":a+="; SameSite=Lax";break;case"strict":a+="; SameSite=Strict";break;default:throw new TypeError("option sameSite is invalid")}}return a};var o=decodeURIComponent,r=encodeURIComponent,i=/; */,c=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function s(e,t){try{return t(e)}catch(t){return e}}},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,s,a=c(e),l=1;l<arguments.length;l++){for(var u in n=Object(arguments[l]))r.call(n,u)&&(a[u]=n[u]);if(o){s=o(n);for(var f=0;f<s.length;f++)i.call(n,s[f])&&(a[s[f]]=n[s[f]])}}return a}},function(e,t,n){"use strict";
/** @license React v16.6.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=n(3),r="function"==typeof Symbol&&Symbol.for,i=r?Symbol.for("react.element"):60103,c=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,l=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.concurrent_mode"):60111,y=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function g(e,t,n,o,r,i,c,s){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var a=[n,o,r,i,c,s],l=0;(e=Error(t.replace(/%s/g,(function(){return a[l++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}function b(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=0;o<t;o++)n+="&args[]="+encodeURIComponent(arguments[o+1]);g(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w={};function O(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||k}function _(){}function S(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||k}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&b("85"),this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=O.prototype;var x=S.prototype=new _;x.constructor=S,o(x,O.prototype),x.isPureReactComponent=!0;var P={current:null,currentDispatcher:null},C=Object.prototype.hasOwnProperty,T={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var o=void 0,r={},c=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(c=""+t.key),t)C.call(t,o)&&!T.hasOwnProperty(o)&&(r[o]=t[o]);var a=arguments.length-2;if(1===a)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===r[o]&&(r[o]=a[o]);return{$$typeof:i,type:e,key:c,ref:s,props:r,_owner:P.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var D=/\/+/g,L=[];function M(e,t,n,o){if(L.length){var r=L.pop();return r.result=e,r.keyPrefix=t,r.func=n,r.context=o,r.count=0,r}return{result:e,keyPrefix:t,func:n,context:o,count:0}}function N(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>L.length&&L.push(e)}function A(e,t,n){return null==e?0:function e(t,n,o,r){var s=typeof t;"undefined"!==s&&"boolean"!==s||(t=null);var a=!1;if(null===t)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case i:case c:a=!0}}if(a)return o(r,t,""===n?"."+$(t,0):n),1;if(a=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var u=n+$(s=t[l],l);a+=e(s,u,o,r)}else if(null===t||"object"!=typeof t?u=null:u="function"==typeof(u=m&&t[m]||t["@@iterator"])?u:null,"function"==typeof u)for(t=u.call(t),l=0;!(s=t.next()).done;)a+=e(s=s.value,u=n+$(s,l++),o,r);else"object"===s&&b("31","[object Object]"===(o=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":o,"");return a}(e,"",t,n)}function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function F(e,t){e.func.call(e.context,t,e.count++)}function R(e,t,n){var o=e.result,r=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?B(e,o,n,(function(e){return e})):null!=e&&(j(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,r+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(D,"$&/")+"/")+n)),o.push(e))}function B(e,t,n,o,r){var i="";null!=n&&(i=(""+n).replace(D,"$&/")+"/"),A(e,R,t=M(t,i,o,r)),N(t)}var U={Children:{map:function(e,t,n){if(null==e)return e;var o=[];return B(e,o,null,t,n),o},forEach:function(e,t,n){if(null==e)return e;A(e,F,t=M(null,null,t,n)),N(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return B(e,t,null,(function(e){return e})),t},only:function(e){return j(e)||b("143"),e}},createRef:function(){return{current:null}},Component:O,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:y,render:e}},lazy:function(e){return{$$typeof:v,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},Fragment:s,StrictMode:a,unstable_ConcurrentMode:p,Suspense:d,unstable_Profiler:l,createElement:E,cloneElement:function(e,t,n){null==e&&b("267",e);var r=void 0,c=o({},e.props),s=e.key,a=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(a=t.ref,l=P.current),void 0!==t.key&&(s=""+t.key);var u=void 0;for(r in e.type&&e.type.defaultProps&&(u=e.type.defaultProps),t)C.call(t,r)&&!T.hasOwnProperty(r)&&(c[r]=void 0===t[r]&&void 0!==u?u[r]:t[r])}if(1===(r=arguments.length-2))c.children=n;else if(1<r){u=Array(r);for(var f=0;f<r;f++)u[f]=arguments[f+2];c.children=u}return{$$typeof:i,type:e.type,key:s,ref:a,props:c,_owner:l}},createFactory:function(e){var t=E.bind(null,e);return t.type=e,t},isValidElement:j,version:"16.6.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:P,assign:o}},I={default:U},W=I&&U||I;e.exports=W.default||W},function(e,t,n){"use strict";var o=n(6);function r(){}e.exports=function(){function e(e,t,n,r,i,c){if(c!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var o=n(8),r=(n(0),{childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0}),i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={};c[o.ForwardRef]={$$typeof:!0,render:!0};var s=Object.defineProperty,a=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,n,o){if("string"!=typeof n){if(p){var y=f(n);y&&y!==p&&e(t,y,o)}var d=a(n);l&&(d=d.concat(l(n)));for(var h=c[t.$$typeof]||r,v=c[n.$$typeof]||r,m=0;m<d.length;++m){var g=d[m];if(!(i[g]||o&&o[g]||v&&v[g]||h&&h[g])){var b=u(n,g);try{s(t,g,b)}catch(e){}}}return t}return t}},function(e,t,n){"use strict";e.exports=n(9)},function(e,t,n){"use strict";
/** @license React v16.5.0
 * react-is.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&Symbol.for,r=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,s=o?Symbol.for("react.strict_mode"):60108,a=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,u=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.async_mode"):60111,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.placeholder"):60113;function d(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case f:case c:case a:case s:return e;default:switch(e=e&&e.$$typeof){case u:case p:case l:return e;default:return t}}case i:return t}}}t.typeOf=d,t.AsyncMode=f,t.ContextConsumer=u,t.ContextProvider=l,t.Element=r,t.ForwardRef=p,t.Fragment=c,t.Profiler=a,t.Portal=i,t.StrictMode=s,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===f||e===a||e===s||e===y||"object"==typeof e&&null!==e&&("function"==typeof e.then||e.$$typeof===l||e.$$typeof===u||e.$$typeof===p)},t.isAsyncMode=function(e){return d(e)===f},t.isContextConsumer=function(e){return d(e)===u},t.isContextProvider=function(e){return d(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return d(e)===p},t.isFragment=function(e){return d(e)===c},t.isProfiler=function(e){return d(e)===a},t.isPortal=function(e){return d(e)===i},t.isStrictMode=function(e){return d(e)===s}},function(e,t,n){"use strict";n.r(t),n.d(t,"CookieBanner",(function(){return G})),n.d(t,"CookiePanel",(function(){return Q}));var o=n(0),r=n.n(o),i=n(1),c=n.n(i),s=n(2);function a(e,t){if(void 0===t&&(t={}),function(e,t){return void 0===t&&(t=!e||"{"!==e[0]&&"["!==e[0]&&'"'!==e[0]),!t}(e,t.doNotParse))try{return JSON.parse(e)}catch(e){}return e}var l,u,f=n(3),p=function(){function e(e){this.changeListeners=[],this.cookies=function(e){return"string"==typeof e?s.parse(e):"object"==typeof e&&null!==e?e:{}}(e),this.HAS_DOCUMENT_COOKIE="object"==typeof document&&"string"==typeof document.cookie}return e.prototype._updateBrowserValues=function(){this.HAS_DOCUMENT_COOKIE&&(this.cookies=s.parse(document.cookie))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t){return void 0===t&&(t={}),this._updateBrowserValues(),a(this.cookies[e],t)},e.prototype.getAll=function(e){void 0===e&&(e={}),this._updateBrowserValues();var t={};for(var n in this.cookies)t[n]=a(this.cookies[n],e);return t},e.prototype.set=function(e,t,n){var o;"object"==typeof t&&(t=JSON.stringify(t)),this.cookies=f({},this.cookies,((o={})[e]=t,o)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=s.serialize(e,t,n)),this._emitChange({name:e,value:t,options:n})},e.prototype.remove=function(e,t){var n=t=f({},t,{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=f({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=s.serialize(e,"",n)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}(),y=p,d=(l=o.createContext(new p)).Provider,h=(l.Consumer,u=function(e,t){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}u(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});(function(e){function t(t){var n=e.call(this,t)||this;return t.cookies?n.cookies=t.cookies:n.cookies=new p,n}h(t,e),t.prototype.render=function(){return o.createElement(d,{value:this.cookies},this.props.children)}})(o.Component),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)}}(),n(7);var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:365,n=e?new Date(e):new Date;return n.setTime(n.getTime()+24*t*60*60*1e3),n},m=function(){return"undefined"==typeof navigator};function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var w=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];b(this,e),this.cookies=new y,this.whole_domain=t}var t,n,o;return t=e,(n=[{key:"get",value:function(e){return this.cookies.get(e)}},{key:"set",value:function(e,t){var n=this.whole_domain?{path:"/"}:{};this.cookies.set(e,!0,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){g(e,t,n[t])}))}return e}({expires:t||v()},{optionPath:n}))}},{key:"remove",value:function(e){return this.cookies.remove(e)}}])&&k(t.prototype,n),o&&k(t,o),e}();function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function S(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var T=function(e){function t(e){var n,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,n=!(r=x(t).call(this,e))||"object"!==O(r)&&"function"!=typeof r?C(o):r;var i=e.checked,c=void 0!==i&&i;return n.state={checked:c},n.handleOnChange=n.handleOnChange.bind(C(C(n))),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,e),n=t,(o=[{key:"handleOnChange",value:function(){var e=this.props.onChange,t=void 0===e?Function:e,n=!this.state.checked;this.setState({checked:n}),t(n)}},{key:"render",value:function(){var e=this.props,t=e.id,n=void 0===t?"":t,o=e.text,i=void 0===o?"":o,c=e.styles,s=void 0===c?{}:c,a=e.disabled,l=void 0!==a&&a,u=l?{disabled:l}:{},f=this.state.checked,p=s.optionWrapperStyle,y=s.optionLabelStyle,d=s.checkboxStyle;return r.a.createElement("div",{className:"react-cookie-law-option-wrapper",style:p},r.a.createElement("input",_({type:"checkbox",id:n,className:"react-cookie-law-option-checkbox",style:d,checked:f,onChange:this.handleOnChange},u)),r.a.createElement("label",{htmlFor:n,style:y},i))}}])&&S(n.prototype,o),i&&S(n,i),t}(r.a.Component),E={dialog:{position:"fixed",top:"0",left:"0",right:"0",zIndex:"100000",backgroundColor:"#f8f7f7",padding:"10px"},container:{maxWidth:"960px",marginLeft:"auto",marginRight:"auto",overflow:"hidden"},message:{minHeight:"32px",fontSize:"10pt",fontWeight:"400",lineHeight:"130%",padding:"10px 0",color:"#000000"},policy:{fontSize:"10pt",marginLeft:"10px",color:"#000000",textDecoration:"underline"},selectPane:{display:"table-cell",padding:"3px 0px 10px 0px"},optionWrapper:{display:"inline-block",position:"relative",marginRight:"7px",marginLeft:"7px",float:"left"},optionLabel:{height:"auto",width:"auto",minHeight:"14px",fontSize:"12pt",color:"#c6c6c6",display:"inline-block",padding:"1px 0 0 20px",position:"relative",top:"0",left:"0",zIndex:"1",cursor:"default",verticalAlign:"top"},checkbox:{position:"absolute",top:"4px",left:"0",width:"14px",height:"14px",zIndex:"2",cursor:"pointer"},buttonWrapper:{float:"right"},button:{display:"inline-block",backgroundColor:"#000000",padding:"3px",minWidth:"80px",color:"#ffffff",textDecoration:"none",fontSize:"10pt",fontWeight:"400",marginRight:"5px",marginLeft:"5px",textAlign:"center",whiteSpace:"nowrap",cursor:"pointer"}};function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){D(e,t,n[t])}))}return e}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?{}:t,o=e.className,i=void 0===o?"":o,c=e.message,s=void 0===c?"No text":c,a=e.policyLink,l=void 0===a?"/#":a,u=e.privacyPolicyLinkText,f=void 0===u?"Privacy Policy":u,p=e.necessaryOptionText,y=void 0===p?"Necessary":p,d=e.preferencesOptionText,h=void 0===d?"Preferences":d,v=e.statisticsOptionText,m=void 0===v?"Statistics":v,g=e.marketingOptionText,b=void 0===g?"Marketing":g,k=e.showDeclineButton,w=void 0!==k&&k,O=e.acceptButtonText,_=void 0===O?"Accept":O,S=e.declineButtonText,x=void 0===S?"Decline":S,P=e.showPreferencesOption,C=void 0===P||P,D=e.showStatisticsOption,L=void 0===D||D,M=e.showMarketingOption,N=void 0===M||M,A=e.onTogglePreferencesCookies,$=void 0===A?Function:A,F=e.onToggleStatisticsCookies,R=void 0===F?Function:F,B=e.onToggleMarketingCookies,U=void 0===B?Function:B,I=e.onDecline,W=void 0===I?Function:I,z=e.onConfirm,q=void 0===z?Function:z,H=j({},E,n),V=H.dialog,K=H.container,J=H.message,Y=H.policy,G=H.selectPane,Q=H.optionWrapper,X=H.optionLabel,Z=H.checkbox,ee=H.buttonWrapper,te=H.button,ne={optionWrapperStyle:Q,optionLabelStyle:X,checkboxStyle:Z};return r.a.createElement("div",{className:"react-cookie-law-dialog ".concat(i),style:V},r.a.createElement("div",{className:"react-cookie-law-container",style:K},r.a.createElement("div",{className:"react-cookie-law-msg",style:J},s),r.a.createElement("div",{className:"react-cookie-law-select-pane",style:G},r.a.createElement(T,{id:"check-required-cookies",text:y,styles:ne,disabled:!0,checked:!0}),C&&r.a.createElement(T,{id:"check-preferences-cookies",text:h,styles:ne,onChange:$}),L&&r.a.createElement(T,{id:"check-statistics-cookies",text:m,styles:ne,onChange:R}),N&&r.a.createElement(T,{id:"check-marketing-cookies",text:b,styles:ne,onChange:U})),r.a.createElement("a",{href:l,className:"react-cookie-law-policy",style:Y},f),r.a.createElement("div",{className:"react-cookie-law-button-wrapper",style:ee},w&&r.a.createElement("button",{type:"button",className:"react-cookie-law-decline-btn",style:te,onClick:function(){return W()}},r.a.createElement("span",null,x)),r.a.createElement("button",{type:"button",className:"react-cookie-law-accept-btn",style:te,onClick:function(){return q()}},r.a.createElement("span",null,_)))))};function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var R=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=A(t).call(this,e))||"object"!==M(r)&&"function"!=typeof r?F(o):r).state={preferencesCookies:!1,statisticsCookies:!1,marketingCookies:!1},n.onScroll=n.onScroll.bind(F(F(n))),n.onTogglePreferencesCookies=n.onTogglePreferencesCookies.bind(F(F(n))),n.onToggleStatisticsCookies=n.onToggleStatisticsCookies.bind(F(F(n))),n.onToggleMarketingCookies=n.onToggleMarketingCookies.bind(F(F(n))),n.confirm=n.confirm.bind(F(F(n))),n.decline=n.decline.bind(F(F(n))),n.consetsCallback=n.consetsCallback.bind(F(F(n))),n.cookies=new w(n.props.wholeDomain),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){var e=this.props.dismissOnScroll;m()||!0!==e||(window.addEventListener?window.addEventListener("scroll",this.onScroll):window.attachEvent&&window.attachEvent("onscroll",this.onScroll))}},{key:"componentWillUnmount",value:function(){m()||(window.removeEventListener?window.removeEventListener("scroll",this.onScroll):window.detachEvent&&window.detachEvent("onscroll",this.onScroll))}},{key:"onScroll",value:function(){this.confirm()}},{key:"onTogglePreferencesCookies",value:function(){var e=this.state.preferencesCookies;this.setState({preferencesCookies:!e})}},{key:"onToggleStatisticsCookies",value:function(){var e=this.state.statisticsCookies;this.setState({statisticsCookies:!e})}},{key:"onToggleMarketingCookies",value:function(){var e=this.state.marketingCookies;this.setState({marketingCookies:!e})}},{key:"confirm",value:function(){var e=this.state,t=e.preferencesCookies,n=e.statisticsCookies,o=e.marketingCookies;this.cookies.set("rcl_consent_given"),t?this.cookies.set("rcl_preferences_consent"):this.cookies.remove("rcl_preferences_consent"),n?this.cookies.set("rcl_statistics_consent"):this.cookies.remove("rcl_statistics_consent"),o?this.cookies.set("rcl_marketing_consent"):this.cookies.remove("rcl_marketing_consent"),this.forceUpdate()}},{key:"decline",value:function(){var e=this.props,t=e.onDeclinePreferences,n=void 0===t?Function:t,o=e.onDeclineStatistics,r=void 0===o?Function:o,i=e.onDeclineMarketing,c=void 0===i?Function:i;this.cookies.set("rcl_consent_given"),this.cookies.remove("rcl_preferences_consent"),this.cookies.remove("rcl_statistics_consent"),this.cookies.remove("rcl_marketing_consent"),n(),r(),c(),this.forceUpdate()}},{key:"consetsCallback",value:function(){var e=this.props,t=e.onAccept,n=void 0===t?Function:t,o=e.onAcceptPreferences,r=void 0===o?Function:o,i=e.onAcceptStatistics,c=void 0===i?Function:i,s=e.onAcceptMarketing,a=void 0===s?Function:s,l=e.onDeclinePreferences,u=void 0===l?Function:l,f=e.onDeclineStatistics,p=void 0===f?Function:f,y=e.onDeclineMarketing,d=void 0===y?Function:y,h=this.cookies.get("rcl_preferences_consent"),v=this.cookies.get("rcl_statistics_consent"),m=this.cookies.get("rcl_marketing_consent");n(),h?r():u(),v?c():p(),m?a():d()}},{key:"render",value:function(){var e=this.props,t=e.styles,n=e.className,o=e.message,i=e.policyLink,c=e.privacyPolicyLinkText,s=e.necessaryOptionText,a=e.preferencesOptionText,l=e.statisticsOptionText,u=e.marketingOptionText,f=e.showDeclineButton,p=e.acceptButtonText,y=e.declineButtonText,d=e.showPreferencesOption,h=e.showStatisticsOption,v=e.showMarketingOption;if(this.cookies.get("rcl_consent_given"))return this.consetsCallback(),null;var m={styles:t,className:n,message:o,policyLink:i,privacyPolicyLinkText:c,necessaryOptionText:s,preferencesOptionText:a,statisticsOptionText:l,marketingOptionText:u,showDeclineButton:f,acceptButtonText:p,declineButtonText:y,showPreferencesOption:d,showStatisticsOption:h,showMarketingOption:v,onTogglePreferencesCookies:this.onTogglePreferencesCookies,onToggleStatisticsCookies:this.onToggleStatisticsCookies,onToggleMarketingCookies:this.onToggleMarketingCookies,onDecline:this.decline,onConfirm:this.confirm};return r.a.createElement(L,m)}}])&&N(n.prototype,o),i&&N(n,i),t}(r.a.Component);R.protoTypes={className:c.a.string,styles:c.a.object,message:c.a.string.isRequired,wholeDomain:c.a.bool,policyLink:c.a.string,privacyPolicyLinkText:c.a.string,necessaryOptionText:c.a.string,preferencesOptionText:c.a.string,statisticsOptionText:c.a.string,marketingOptionText:c.a.string,acceptButtonText:c.a.string,declineButtonText:c.a.string,showDeclineButton:c.a.bool,dismissOnScroll:c.a.bool,showPreferencesOption:c.a.bool,showStatisticsOption:c.a.bool,showMarketingOption:c.a.bool,onAccept:c.a.func,onAcceptPreferences:c.a.func,onAcceptStatistics:c.a.func,onAcceptMarketing:c.a.func,onDeclinePreferences:c.a.func,onDeclineStatistics:c.a.func,onDeclineMarketing:c.a.func};var B=R;function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){I(e,t,n[t])}))}return e}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?{}:t,o=e.className,i=void 0===o?"":o,c=e.message,s=void 0===c?"No text":c,a=e.policyLink,l=void 0===a?"/#":a,u=e.privacyPolicyLinkText,f=void 0===u?"Privacy Policy":u,p=e.showPreferButton,y=void 0===p||p,d=e.acceptButtonText,h=void 0===d?"Accept":d,v=e.PreferButtonText,m=void 0===v?"Preferències":v,g=e.onConfirm,b=void 0===g?Function:g,k=e.onPrefer,w=void 0===k?Function:k,O=U({},E,n),_=O.dialog,S=O.container,x=O.message,P=O.policy,C=O.buttonWrapper,T=O.button;return r.a.createElement("div",{className:"react-cookie-law-dialog ".concat(i),style:_},r.a.createElement("div",{className:"react-cookie-law-container",style:S},r.a.createElement("div",{className:"react-cookie-law-msg",style:x},s),r.a.createElement("a",{href:l,className:"react-cookie-law-policy",style:P},f),r.a.createElement("div",{className:"react-cookie-law-button-wrapper",style:C},y&&r.a.createElement("button",{type:"button",className:"react-cookie-law-decline-btn",style:T,onClick:function(){return w()}},r.a.createElement("span",null,m)),r.a.createElement("button",{type:"button",className:"react-cookie-law-accept-btn",style:T,onClick:function(){return b()}},r.a.createElement("span",null,h)))))};function z(e){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function K(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var J=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=H(t).call(this,e))||"object"!==z(r)&&"function"!=typeof r?K(o):r).state={preferencesCookies:!1,statisticsCookies:!1,marketingCookies:!1},n.onScroll=n.onScroll.bind(K(K(n))),n.confirm=n.confirm.bind(K(K(n))),n.decline=n.decline.bind(K(K(n))),n.onPrefer=n.onPrefer.bind(K(K(n))),n.consetsCallback=n.consetsCallback.bind(K(K(n))),n.cookies=new w(n.props.wholeDomain),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){var e=this.props.dismissOnScroll;m()||!0!==e||(window.addEventListener?window.addEventListener("scroll",this.onScroll):window.attachEvent&&window.attachEvent("onscroll",this.onScroll))}},{key:"componentWillUnmount",value:function(){m()||(window.removeEventListener?window.removeEventListener("scroll",this.onScroll):window.detachEvent&&window.detachEvent("onscroll",this.onScroll))}},{key:"onScroll",value:function(){this.confirm()}},{key:"onTogglePreferencesCookies",value:function(){var e=this.state.preferencesCookies;this.setState({preferencesCookies:!e})}},{key:"onToggleStatisticsCookies",value:function(){var e=this.state.statisticsCookies;this.setState({statisticsCookies:!e})}},{key:"onToggleMarketingCookies",value:function(){var e=this.state.marketingCookies;this.setState({marketingCookies:!e})}},{key:"confirm",value:function(){var e=this.state,t=e.preferencesCookies,n=e.statisticsCookies,o=e.marketingCookies;this.cookies.set("rcl_consent_given"),t?this.cookies.set("rcl_preferences_consent"):this.cookies.remove("rcl_preferences_consent"),n?this.cookies.set("rcl_statistics_consent"):this.cookies.remove("rcl_statistics_consent"),o?this.cookies.set("rcl_marketing_consent"):this.cookies.remove("rcl_marketing_consent"),this.forceUpdate()}},{key:"decline",value:function(){var e=this.props,t=e.onDeclinePreferences,n=void 0===t?Function:t,o=e.onDeclineStatistics,r=void 0===o?Function:o,i=e.onDeclineMarketing,c=void 0===i?Function:i;this.cookies.set("rcl_consent_given"),this.cookies.remove("rcl_preferences_consent"),this.cookies.remove("rcl_statistics_consent"),this.cookies.remove("rcl_marketing_consent"),n(),r(),c(),this.forceUpdate()}},{key:"onPrefer",value:function(){this.forceUpdate()}},{key:"consetsCallback",value:function(){var e=this.props,t=e.onAccept,n=void 0===t?Function:t,o=e.onAcceptPreferences,r=void 0===o?Function:o,i=e.onAcceptStatistics,c=void 0===i?Function:i,s=e.onAcceptMarketing,a=void 0===s?Function:s,l=e.onDeclinePreferences,u=void 0===l?Function:l,f=e.onDeclineStatistics,p=void 0===f?Function:f,y=e.onDeclineMarketing,d=void 0===y?Function:y,h=this.cookies.get("rcl_preferences_consent"),v=this.cookies.get("rcl_statistics_consent"),m=this.cookies.get("rcl_marketing_consent");n(),h?r():u(),v?c():p(),m?a():d()}},{key:"render",value:function(){var e=this.props,t=e.styles,n=e.className,o=e.message,i=e.policyLink,c=e.privacyPolicyLinkText,s=e.necessaryOptionText,a=e.preferencesOptionText,l=e.statisticsOptionText,u=e.marketingOptionText,f=e.showPreferButton,p=e.acceptButtonText,y=e.PreferButtonText,d=e.showPreferencesOption,h=e.showStatisticsOption,v=e.showMarketingOption;if(this.cookies.get("rcl_consent_given"))return this.consetsCallback(),null;var m={styles:t,className:n,message:o,policyLink:i,privacyPolicyLinkText:c,necessaryOptionText:s,preferencesOptionText:a,statisticsOptionText:l,marketingOptionText:u,showPreferButton:f,acceptButtonText:p,PreferButtonText:y,showPreferencesOption:d,showStatisticsOption:h,showMarketingOption:v,onTogglePreferencesCookies:this.onTogglePreferencesCookies,onToggleStatisticsCookies:this.onToggleStatisticsCookies,onToggleMarketingCookies:this.onToggleMarketingCookies,onDecline:this.decline,onConfirm:this.confirm,onPrefer:this.onPrefer};return r.a.createElement(W,m)}}])&&q(n.prototype,o),i&&q(n,i),t}(r.a.Component);J.protoTypes={className:c.a.string,styles:c.a.object,message:c.a.string.isRequired,wholeDomain:c.a.bool,policyLink:c.a.string,privacyPolicyLinkText:c.a.string,necessaryOptionText:c.a.string,preferencesOptionText:c.a.string,statisticsOptionText:c.a.string,marketingOptionText:c.a.string,acceptButtonText:c.a.string,PreferButtonText:c.a.string,showPreferButton:c.a.bool,dismissOnScroll:c.a.bool,showPreferencesOption:c.a.bool,showStatisticsOption:c.a.bool,showMarketingOption:c.a.bool,onAccept:c.a.func,onAcceptPreferences:c.a.func,onAcceptStatistics:c.a.func,onAcceptMarketing:c.a.func,onDeclinePreferences:c.a.func,onDeclineStatistics:c.a.func,onDeclineMarketing:c.a.func};var Y=J,G=function(e){return m()?null:r.a.createElement(B,e)},Q=function(e){return m()?null:r.a.createElement(Y,e)}}])}));