!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ReactCookieLaw=t():e.ReactCookieLaw=t()}(global,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){"use strict";e.exports=n(4)},function(e,t,n){e.exports=n(5)()},function(e,t,n){"use strict";
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.parse=function(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var n={},r=t||{},c=e.split(i),s=r.decode||o,l=0;l<c.length;l++){var u=c[l],f=u.indexOf("=");if(!(f<0)){var p=u.substr(0,f).trim(),y=u.substr(++f,u.length).trim();'"'==y[0]&&(y=y.slice(1,-1)),null==n[p]&&(n[p]=a(y,s))}}return n},t.serialize=function(e,t,n){var o=n||{},i=o.encode||r;if("function"!=typeof i)throw new TypeError("option encode is invalid");if(!c.test(e))throw new TypeError("argument name is invalid");var a=i(t);if(a&&!c.test(a))throw new TypeError("argument val is invalid");var s=e+"="+a;if(null!=o.maxAge){var l=o.maxAge-0;if(isNaN(l))throw new Error("maxAge should be a Number");s+="; Max-Age="+Math.floor(l)}if(o.domain){if(!c.test(o.domain))throw new TypeError("option domain is invalid");s+="; Domain="+o.domain}if(o.path){if(!c.test(o.path))throw new TypeError("option path is invalid");s+="; Path="+o.path}if(o.expires){if("function"!=typeof o.expires.toUTCString)throw new TypeError("option expires is invalid");s+="; Expires="+o.expires.toUTCString()}o.httpOnly&&(s+="; HttpOnly");o.secure&&(s+="; Secure");if(o.sameSite){switch("string"==typeof o.sameSite?o.sameSite.toLowerCase():o.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;default:throw new TypeError("option sameSite is invalid")}}return s};var o=decodeURIComponent,r=encodeURIComponent,i=/; */,c=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function a(e,t){try{return t(e)}catch(t){return e}}},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,s=c(e),l=1;l<arguments.length;l++){for(var u in n=Object(arguments[l]))r.call(n,u)&&(s[u]=n[u]);if(o){a=o(n);for(var f=0;f<a.length;f++)i.call(n,a[f])&&(s[a[f]]=n[a[f]])}}return s}},function(e,t,n){"use strict";
/** @license React v16.6.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=n(3),r="function"==typeof Symbol&&Symbol.for,i=r?Symbol.for("react.element"):60103,c=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,l=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.concurrent_mode"):60111,y=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,v="function"==typeof Symbol&&Symbol.iterator;function g(e,t,n,o,r,i,c,a){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,o,r,i,c,a],l=0;(e=Error(t.replace(/%s/g,(function(){return s[l++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}function b(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=0;o<t;o++)n+="&args[]="+encodeURIComponent(arguments[o+1]);g(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w={};function O(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||k}function S(){}function x(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||k}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&b("85"),this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=O.prototype;var _=x.prototype=new S;_.constructor=x,o(_,O.prototype),_.isPureReactComponent=!0;var C={current:null,currentDispatcher:null},P=Object.prototype.hasOwnProperty,T={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var o=void 0,r={},c=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(c=""+t.key),t)P.call(t,o)&&!T.hasOwnProperty(o)&&(r[o]=t[o]);var s=arguments.length-2;if(1===s)r.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===r[o]&&(r[o]=s[o]);return{$$typeof:i,type:e,key:c,ref:a,props:r,_owner:C.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var $=/\/+/g,D=[];function L(e,t,n,o){if(D.length){var r=D.pop();return r.result=e,r.keyPrefix=t,r.func=n,r.context=o,r.count=0,r}return{result:e,keyPrefix:t,func:n,context:o,count:0}}function M(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>D.length&&D.push(e)}function N(e,t,n){return null==e?0:function e(t,n,o,r){var a=typeof t;"undefined"!==a&&"boolean"!==a||(t=null);var s=!1;if(null===t)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case i:case c:s=!0}}if(s)return o(r,t,""===n?"."+A(t,0):n),1;if(s=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var u=n+A(a=t[l],l);s+=e(a,u,o,r)}else if(null===t||"object"!=typeof t?u=null:u="function"==typeof(u=v&&t[v]||t["@@iterator"])?u:null,"function"==typeof u)for(t=u.call(t),l=0;!(a=t.next()).done;)s+=e(a=a.value,u=n+A(a,l++),o,r);else"object"===a&&b("31","[object Object]"===(o=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":o,"");return s}(e,"",t,n)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function R(e,t){e.func.call(e.context,t,e.count++)}function F(e,t,n){var o=e.result,r=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,o,n,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,r+(!e.key||t&&t.key===e.key?"":(""+e.key).replace($,"$&/")+"/")+n)),o.push(e))}function U(e,t,n,o,r){var i="";null!=n&&(i=(""+n).replace($,"$&/")+"/"),N(e,F,t=L(t,i,o,r)),M(t)}var B={Children:{map:function(e,t,n){if(null==e)return e;var o=[];return U(e,o,null,t,n),o},forEach:function(e,t,n){if(null==e)return e;N(e,R,t=L(null,null,t,n)),M(t)},count:function(e){return N(e,(function(){return null}),null)},toArray:function(e){var t=[];return U(e,t,null,(function(e){return e})),t},only:function(e){return E(e)||b("143"),e}},createRef:function(){return{current:null}},Component:O,PureComponent:x,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:y,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},Fragment:a,StrictMode:s,unstable_ConcurrentMode:p,Suspense:d,unstable_Profiler:l,createElement:j,cloneElement:function(e,t,n){null==e&&b("267",e);var r=void 0,c=o({},e.props),a=e.key,s=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(s=t.ref,l=C.current),void 0!==t.key&&(a=""+t.key);var u=void 0;for(r in e.type&&e.type.defaultProps&&(u=e.type.defaultProps),t)P.call(t,r)&&!T.hasOwnProperty(r)&&(c[r]=void 0===t[r]&&void 0!==u?u[r]:t[r])}if(1===(r=arguments.length-2))c.children=n;else if(1<r){u=Array(r);for(var f=0;f<r;f++)u[f]=arguments[f+2];c.children=u}return{$$typeof:i,type:e.type,key:a,ref:s,props:c,_owner:l}},createFactory:function(e){var t=j.bind(null,e);return t.type=e,t},isValidElement:E,version:"16.6.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:C,assign:o}},I={default:B},W=I&&B||I;e.exports=W.default||W},function(e,t,n){"use strict";var o=n(6);function r(){}e.exports=function(){function e(e,t,n,r,i,c){if(c!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var o=n(8),r=(n(0),{childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0}),i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={};c[o.ForwardRef]={$$typeof:!0,render:!0};var a=Object.defineProperty,s=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,n,o){if("string"!=typeof n){if(p){var y=f(n);y&&y!==p&&e(t,y,o)}var d=s(n);l&&(d=d.concat(l(n)));for(var h=c[t.$$typeof]||r,m=c[n.$$typeof]||r,v=0;v<d.length;++v){var g=d[v];if(!(i[g]||o&&o[g]||m&&m[g]||h&&h[g])){var b=u(n,g);try{a(t,g,b)}catch(e){}}}return t}return t}},function(e,t,n){"use strict";e.exports=n(9)},function(e,t,n){"use strict";
/** @license React v16.5.0
 * react-is.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&Symbol.for,r=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,u=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.async_mode"):60111,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.placeholder"):60113;function d(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case f:case c:case s:case a:return e;default:switch(e=e&&e.$$typeof){case u:case p:case l:return e;default:return t}}case i:return t}}}t.typeOf=d,t.AsyncMode=f,t.ContextConsumer=u,t.ContextProvider=l,t.Element=r,t.ForwardRef=p,t.Fragment=c,t.Profiler=s,t.Portal=i,t.StrictMode=a,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===f||e===s||e===a||e===y||"object"==typeof e&&null!==e&&("function"==typeof e.then||e.$$typeof===l||e.$$typeof===u||e.$$typeof===p)},t.isAsyncMode=function(e){return d(e)===f},t.isContextConsumer=function(e){return d(e)===u},t.isContextProvider=function(e){return d(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return d(e)===p},t.isFragment=function(e){return d(e)===c},t.isProfiler=function(e){return d(e)===s},t.isPortal=function(e){return d(e)===i},t.isStrictMode=function(e){return d(e)===a}},function(e,t,n){"use strict";n.r(t),n.d(t,"CookieBanner",(function(){return B}));var o=n(0),r=n.n(o),i=n(1),c=n.n(i),a=n(2);function s(e,t){if(void 0===t&&(t={}),function(e,t){return void 0===t&&(t=!e||"{"!==e[0]&&"["!==e[0]&&'"'!==e[0]),!t}(e,t.doNotParse))try{return JSON.parse(e)}catch(e){}return e}var l,u,f=n(3),p=function(){function e(e){this.changeListeners=[],this.cookies=function(e){return"string"==typeof e?a.parse(e):"object"==typeof e&&null!==e?e:{}}(e),this.HAS_DOCUMENT_COOKIE="object"==typeof document&&"string"==typeof document.cookie}return e.prototype._updateBrowserValues=function(){this.HAS_DOCUMENT_COOKIE&&(this.cookies=a.parse(document.cookie))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t){return void 0===t&&(t={}),this._updateBrowserValues(),s(this.cookies[e],t)},e.prototype.getAll=function(e){void 0===e&&(e={}),this._updateBrowserValues();var t={};for(var n in this.cookies)t[n]=s(this.cookies[n],e);return t},e.prototype.set=function(e,t,n){var o;"object"==typeof t&&(t=JSON.stringify(t)),this.cookies=f({},this.cookies,((o={})[e]=t,o)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=a.serialize(e,t,n)),this._emitChange({name:e,value:t,options:n})},e.prototype.remove=function(e,t){var n=t=f({},t,{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=f({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=a.serialize(e,"",n)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}(),y=p,d=(l=o.createContext(new p)).Provider,h=(l.Consumer,u=function(e,t){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}u(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});(function(e){function t(t){var n=e.call(this,t)||this;return t.cookies?n.cookies=t.cookies:n.cookies=new p,n}h(t,e),t.prototype.render=function(){return o.createElement(d,{value:this.cookies},this.props.children)}})(o.Component),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)}}(),n(7);var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:365,n=e?new Date(e):new Date;return n.setTime(n.getTime()+24*t*60*60*1e3),n},v=function(){return"undefined"==typeof navigator};function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var w=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];b(this,e),this.cookies=new y,this.whole_domain=t}var t,n,o;return t=e,(n=[{key:"get",value:function(e){return this.cookies.get(e)}},{key:"set",value:function(e,t){var n=this.whole_domain?{path:"/"}:{};this.cookies.set(e,!0,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){g(e,t,n[t])}))}return e}({expires:t||m()},{optionPath:n}))}},{key:"remove",value:function(e){return this.cookies.remove(e)}}])&&k(t.prototype,n),o&&k(t,o),e}();function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function x(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var T=function(e){function t(e){var n,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,n=!(r=_(t).call(this,e))||"object"!==O(r)&&"function"!=typeof r?P(o):r;var i=e.checked,c=void 0!==i&&i;return n.state={checked:c},n.handleOnChange=n.handleOnChange.bind(P(P(n))),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,e),n=t,(o=[{key:"handleOnChange",value:function(){var e=this.props.onChange,t=void 0===e?Function:e,n=!this.state.checked;this.setState({checked:n}),t(n)}},{key:"render",value:function(){var e=this.props,t=e.id,n=void 0===t?"":t,o=e.text,i=void 0===o?"":o,c=e.styles,a=void 0===c?{}:c,s=e.disabled,l=void 0!==s&&s,u=l?{disabled:l}:{},f=this.state.checked,p=a.optionWrapperStyle,y=a.optionLabelStyle,d=a.checkboxStyle;return r.a.createElement("div",{className:"react-cookie-law-option-wrapper",style:p},r.a.createElement("input",S({type:"checkbox",id:n,className:"react-cookie-law-option-checkbox",style:d,checked:f,onChange:this.handleOnChange},u)),r.a.createElement("label",{htmlFor:n,style:y},i))}}])&&x(n.prototype,o),i&&x(n,i),t}(r.a.Component),j={dialog:{position:"fixed",top:"0",left:"0",right:"0",zIndex:"100000",backgroundColor:"#f8f7f7",padding:"10px"},container:{maxWidth:"960px",marginLeft:"auto",marginRight:"auto",overflow:"hidden"},message:{minHeight:"32px",fontSize:"10pt",fontWeight:"400",lineHeight:"130%",padding:"10px 0",color:"#000000"},policy:{fontSize:"10pt",marginLeft:"10px",color:"#000000",textDecoration:"underline"},selectPane:{display:"table-cell",padding:"3px 0px 10px 0px"},optionWrapper:{display:"inline-block",position:"relative",marginRight:"7px",marginLeft:"7px",float:"left"},optionLabel:{height:"auto",width:"auto",minHeight:"14px",fontSize:"12pt",color:"#c6c6c6",display:"inline-block",padding:"1px 0 0 20px",position:"relative",top:"0",left:"0",zIndex:"1",cursor:"default",verticalAlign:"top"},checkbox:{position:"absolute",top:"4px",left:"0",width:"14px",height:"14px",zIndex:"2",cursor:"pointer"},buttonWrapper:{float:"right"},button:{display:"inline-block",backgroundColor:"#000000",padding:"3px",minWidth:"80px",color:"#ffffff",textDecoration:"none",fontSize:"10pt",fontWeight:"400",marginRight:"5px",marginLeft:"5px",textAlign:"center",whiteSpace:"nowrap",cursor:"pointer"}};function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){$(e,t,n[t])}))}return e}function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?{}:t,o=e.className,i=void 0===o?"":o,c=e.message,a=void 0===c?"No text":c,s=e.policyLink,l=void 0===s?"/#":s,u=e.privacyPolicyLinkText,f=void 0===u?"Privacy Policy":u,p=e.necessaryOptionText,y=void 0===p?"Necessary":p,d=e.preferencesOptionText,h=void 0===d?"Preferences":d,m=e.statisticsOptionText,v=void 0===m?"Statistics":m,g=e.marketingOptionText,b=void 0===g?"Marketing":g,k=e.showDeclineButton,w=void 0!==k&&k,O=e.acceptButtonText,S=void 0===O?"Accept":O,x=e.declineButtonText,_=void 0===x?"Decline":x,C=e.showPreferencesOption,P=void 0===C||C,$=e.showStatisticsOption,D=void 0===$||$,L=e.showMarketingOption,M=void 0===L||L,N=e.onTogglePreferencesCookies,A=void 0===N?Function:N,R=e.onToggleStatisticsCookies,F=void 0===R?Function:R,U=e.onToggleMarketingCookies,B=void 0===U?Function:U,I=e.onDecline,W=void 0===I?Function:I,z=e.onConfirm,q=void 0===z?Function:z,H=E({},j,n),V=H.dialog,K=H.container,J=H.message,Y=H.policy,G=H.selectPane,Q=H.optionWrapper,X=H.optionLabel,Z=H.checkbox,ee=H.buttonWrapper,te=H.button,ne={optionWrapperStyle:Q,optionLabelStyle:X,checkboxStyle:Z};return r.a.createElement("div",{className:"react-cookie-law-dialog ".concat(i),style:V},r.a.createElement("div",{className:"react-cookie-law-container",style:K},r.a.createElement("div",{className:"react-cookie-law-msg",style:J},a),r.a.createElement("div",{className:"react-cookie-law-msg",style:J},a),r.a.createElement("div",{className:"react-cookie-law-select-pane",style:G},r.a.createElement(T,{id:"check-required-cookies",text:y,styles:ne,disabled:!0,checked:!0}),P&&r.a.createElement(T,{id:"check-preferences-cookies",text:h,styles:ne,onChange:A}),D&&r.a.createElement(T,{id:"check-statistics-cookies",text:v,styles:ne,onChange:F}),M&&r.a.createElement(T,{id:"check-marketing-cookies",text:b,styles:ne,onChange:B})),r.a.createElement("a",{href:l,className:"react-cookie-law-policy",style:Y},f),r.a.createElement("div",{className:"react-cookie-law-button-wrapper",style:ee},w&&r.a.createElement("button",{type:"button",className:"react-cookie-law-decline-btn",style:te,onClick:function(){return W()}},r.a.createElement("span",null,_)),r.a.createElement("button",{type:"button",className:"react-cookie-law-accept-btn",style:te,onClick:function(){return q()}},r.a.createElement("span",null,S)))))};function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var F=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=N(t).call(this,e))||"object"!==L(r)&&"function"!=typeof r?R(o):r).state={preferencesCookies:!1,statisticsCookies:!1,marketingCookies:!1},n.onScroll=n.onScroll.bind(R(R(n))),n.onTogglePreferencesCookies=n.onTogglePreferencesCookies.bind(R(R(n))),n.onToggleStatisticsCookies=n.onToggleStatisticsCookies.bind(R(R(n))),n.onToggleMarketingCookies=n.onToggleMarketingCookies.bind(R(R(n))),n.confirm=n.confirm.bind(R(R(n))),n.decline=n.decline.bind(R(R(n))),n.consetsCallback=n.consetsCallback.bind(R(R(n))),n.cookies=new w(n.props.wholeDomain),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){var e=this.props.dismissOnScroll;v()||!0!==e||(window.addEventListener?window.addEventListener("scroll",this.onScroll):window.attachEvent&&window.attachEvent("onscroll",this.onScroll))}},{key:"componentWillUnmount",value:function(){v()||(window.removeEventListener?window.removeEventListener("scroll",this.onScroll):window.detachEvent&&window.detachEvent("onscroll",this.onScroll))}},{key:"onScroll",value:function(){this.confirm()}},{key:"onTogglePreferencesCookies",value:function(){var e=this.state.preferencesCookies;this.setState({preferencesCookies:!e})}},{key:"onToggleStatisticsCookies",value:function(){var e=this.state.statisticsCookies;this.setState({statisticsCookies:!e})}},{key:"onToggleMarketingCookies",value:function(){var e=this.state.marketingCookies;this.setState({marketingCookies:!e})}},{key:"confirm",value:function(){var e=this.state,t=e.preferencesCookies,n=e.statisticsCookies,o=e.marketingCookies;this.cookies.set("rcl_consent_given"),t?this.cookies.set("rcl_preferences_consent"):this.cookies.remove("rcl_preferences_consent"),n?this.cookies.set("rcl_statistics_consent"):this.cookies.remove("rcl_statistics_consent"),o?this.cookies.set("rcl_marketing_consent"):this.cookies.remove("rcl_marketing_consent"),this.forceUpdate()}},{key:"decline",value:function(){var e=this.props,t=e.onDeclinePreferences,n=void 0===t?Function:t,o=e.onDeclineStatistics,r=void 0===o?Function:o,i=e.onDeclineMarketing,c=void 0===i?Function:i;this.cookies.set("rcl_consent_given"),this.cookies.remove("rcl_preferences_consent"),this.cookies.remove("rcl_statistics_consent"),this.cookies.remove("rcl_marketing_consent"),n(),r(),c(),this.forceUpdate()}},{key:"consetsCallback",value:function(){var e=this.props,t=e.onAccept,n=void 0===t?Function:t,o=e.onAcceptPreferences,r=void 0===o?Function:o,i=e.onAcceptStatistics,c=void 0===i?Function:i,a=e.onAcceptMarketing,s=void 0===a?Function:a,l=e.onDeclinePreferences,u=void 0===l?Function:l,f=e.onDeclineStatistics,p=void 0===f?Function:f,y=e.onDeclineMarketing,d=void 0===y?Function:y,h=this.cookies.get("rcl_preferences_consent"),m=this.cookies.get("rcl_statistics_consent"),v=this.cookies.get("rcl_marketing_consent");n(),h?r():u(),m?c():p(),v?s():d()}},{key:"render",value:function(){var e=this.props,t=e.styles,n=e.className,o=e.message,i=e.policyLink,c=e.privacyPolicyLinkText,a=e.necessaryOptionText,s=e.preferencesOptionText,l=e.statisticsOptionText,u=e.marketingOptionText,f=e.showDeclineButton,p=e.acceptButtonText,y=e.declineButtonText,d=e.showPreferencesOption,h=e.showStatisticsOption,m=e.showMarketingOption;if(this.cookies.get("rcl_consent_given"))return this.consetsCallback(),null;var v={styles:t,className:n,message:o,policyLink:i,privacyPolicyLinkText:c,necessaryOptionText:a,preferencesOptionText:s,statisticsOptionText:l,marketingOptionText:u,showDeclineButton:f,acceptButtonText:p,declineButtonText:y,showPreferencesOption:d,showStatisticsOption:h,showMarketingOption:m,onTogglePreferencesCookies:this.onTogglePreferencesCookies,onToggleStatisticsCookies:this.onToggleStatisticsCookies,onToggleMarketingCookies:this.onToggleMarketingCookies,onDecline:this.decline,onConfirm:this.confirm};return r.a.createElement(D,v)}}])&&M(n.prototype,o),i&&M(n,i),t}(r.a.Component);F.protoTypes={className:c.a.string,styles:c.a.object,message:c.a.string.isRequired,wholeDomain:c.a.bool,policyLink:c.a.string,privacyPolicyLinkText:c.a.string,necessaryOptionText:c.a.string,preferencesOptionText:c.a.string,statisticsOptionText:c.a.string,marketingOptionText:c.a.string,acceptButtonText:c.a.string,declineButtonText:c.a.string,showDeclineButton:c.a.bool,dismissOnScroll:c.a.bool,showPreferencesOption:c.a.bool,showStatisticsOption:c.a.bool,showMarketingOption:c.a.bool,onAccept:c.a.func,onAcceptPreferences:c.a.func,onAcceptStatistics:c.a.func,onAcceptMarketing:c.a.func,onDeclinePreferences:c.a.func,onDeclineStatistics:c.a.func,onDeclineMarketing:c.a.func};var U=F,B=function(e){return v()?null:r.a.createElement(U,e)}}])}));