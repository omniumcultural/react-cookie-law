!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ReactCookieLaw=t():e.ReactCookieLaw=t()}(global,(function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=10)}([function(e,t,o){"use strict";e.exports=o(4)},function(e,t,o){e.exports=o(5)()},function(e,t,o){"use strict";
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.parse=function(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var o={},r=t||{},c=e.split(i),a=r.decode||n,l=0;l<c.length;l++){var u=c[l],f=u.indexOf("=");if(!(f<0)){var p=u.substr(0,f).trim(),y=u.substr(++f,u.length).trim();'"'==y[0]&&(y=y.slice(1,-1)),null==o[p]&&(o[p]=s(y,a))}}return o},t.serialize=function(e,t,o){var n=o||{},i=n.encode||r;if("function"!=typeof i)throw new TypeError("option encode is invalid");if(!c.test(e))throw new TypeError("argument name is invalid");var s=i(t);if(s&&!c.test(s))throw new TypeError("argument val is invalid");var a=e+"="+s;if(null!=n.maxAge){var l=n.maxAge-0;if(isNaN(l))throw new Error("maxAge should be a Number");a+="; Max-Age="+Math.floor(l)}if(n.domain){if(!c.test(n.domain))throw new TypeError("option domain is invalid");a+="; Domain="+n.domain}if(n.path){if(!c.test(n.path))throw new TypeError("option path is invalid");a+="; Path="+n.path}if(n.expires){if("function"!=typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");a+="; Expires="+n.expires.toUTCString()}n.httpOnly&&(a+="; HttpOnly");n.secure&&(a+="; Secure");if(n.sameSite){switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:a+="; SameSite=Strict";break;case"lax":a+="; SameSite=Lax";break;case"strict":a+="; SameSite=Strict";break;default:throw new TypeError("option sameSite is invalid")}}return a};var n=decodeURIComponent,r=encodeURIComponent,i=/; */,c=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function s(e,t){try{return t(e)}catch(t){return e}}},function(e,t,o){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},o=0;o<10;o++)t["_"+String.fromCharCode(o)]=o;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var o,s,a=c(e),l=1;l<arguments.length;l++){for(var u in o=Object(arguments[l]))r.call(o,u)&&(a[u]=o[u]);if(n){s=n(o);for(var f=0;f<s.length;f++)i.call(o,s[f])&&(a[s[f]]=o[s[f]])}}return a}},function(e,t,o){"use strict";
/** @license React v16.6.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=o(3),r="function"==typeof Symbol&&Symbol.for,i=r?Symbol.for("react.element"):60103,c=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,l=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.concurrent_mode"):60111,y=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function v(e,t,o,n,r,i,c,s){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var a=[o,n,r,i,c,s],l=0;(e=Error(t.replace(/%s/g,(function(){return a[l++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}function k(e){for(var t=arguments.length-1,o="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)o+="&args[]="+encodeURIComponent(arguments[n+1]);v(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",o)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w={};function O(e,t,o){this.props=e,this.context=t,this.refs=w,this.updater=o||b}function S(){}function x(e,t,o){this.props=e,this.context=t,this.refs=w,this.updater=o||b}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&k("85"),this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=O.prototype;var _=x.prototype=new S;_.constructor=x,n(_,O.prototype),_.isPureReactComponent=!0;var C={current:null,currentDispatcher:null},P=Object.prototype.hasOwnProperty,T={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,o){var n=void 0,r={},c=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(c=""+t.key),t)P.call(t,n)&&!T.hasOwnProperty(n)&&(r[n]=t[n]);var a=arguments.length-2;if(1===a)r.children=o;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===r[n]&&(r[n]=a[n]);return{$$typeof:i,type:e,key:c,ref:s,props:r,_owner:C.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var M=/\/+/g,D=[];function L(e,t,o,n){if(D.length){var r=D.pop();return r.result=e,r.keyPrefix=t,r.func=o,r.context=n,r.count=0,r}return{result:e,keyPrefix:t,func:o,context:n,count:0}}function N(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>D.length&&D.push(e)}function A(e,t,o){return null==e?0:function e(t,o,n,r){var s=typeof t;"undefined"!==s&&"boolean"!==s||(t=null);var a=!1;if(null===t)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case i:case c:a=!0}}if(a)return n(r,t,""===o?"."+$(t,0):o),1;if(a=0,o=""===o?".":o+":",Array.isArray(t))for(var l=0;l<t.length;l++){var u=o+$(s=t[l],l);a+=e(s,u,n,r)}else if(null===t||"object"!=typeof t?u=null:u="function"==typeof(u=m&&t[m]||t["@@iterator"])?u:null,"function"==typeof u)for(t=u.call(t),l=0;!(s=t.next()).done;)a+=e(s=s.value,u=o+$(s,l++),n,r);else"object"===s&&k("31","[object Object]"===(n=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return a}(e,"",t,o)}function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function F(e,t){e.func.call(e.context,t,e.count++)}function R(e,t,o){var n=e.result,r=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?B(e,n,o,(function(e){return e})):null!=e&&(j(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,r+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(M,"$&/")+"/")+o)),n.push(e))}function B(e,t,o,n,r){var i="";null!=o&&(i=(""+o).replace(M,"$&/")+"/"),A(e,R,t=L(t,i,n,r)),N(t)}var U={Children:{map:function(e,t,o){if(null==e)return e;var n=[];return B(e,n,null,t,o),n},forEach:function(e,t,o){if(null==e)return e;A(e,F,t=L(null,null,t,o)),N(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return B(e,t,null,(function(e){return e})),t},only:function(e){return j(e)||k("143"),e}},createRef:function(){return{current:null}},Component:O,PureComponent:x,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:y,render:e}},lazy:function(e){return{$$typeof:g,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},Fragment:s,StrictMode:a,unstable_ConcurrentMode:p,Suspense:d,unstable_Profiler:l,createElement:E,cloneElement:function(e,t,o){null==e&&k("267",e);var r=void 0,c=n({},e.props),s=e.key,a=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(a=t.ref,l=C.current),void 0!==t.key&&(s=""+t.key);var u=void 0;for(r in e.type&&e.type.defaultProps&&(u=e.type.defaultProps),t)P.call(t,r)&&!T.hasOwnProperty(r)&&(c[r]=void 0===t[r]&&void 0!==u?u[r]:t[r])}if(1===(r=arguments.length-2))c.children=o;else if(1<r){u=Array(r);for(var f=0;f<r;f++)u[f]=arguments[f+2];c.children=u}return{$$typeof:i,type:e.type,key:s,ref:a,props:c,_owner:l}},createFactory:function(e){var t=E.bind(null,e);return t.type=e,t},isValidElement:j,version:"16.6.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:C,assign:n}},I={default:U},W=I&&U||I;e.exports=W.default||W},function(e,t,o){"use strict";var n=o(6);function r(){}e.exports=function(){function e(e,t,o,r,i,c){if(c!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return o.checkPropTypes=r,o.PropTypes=o,o}},function(e,t,o){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,o){"use strict";var n=o(8),r=(o(0),{childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0}),i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={};c[n.ForwardRef]={$$typeof:!0,render:!0};var s=Object.defineProperty,a=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,o,n){if("string"!=typeof o){if(p){var y=f(o);y&&y!==p&&e(t,y,n)}var d=a(o);l&&(d=d.concat(l(o)));for(var h=c[t.$$typeof]||r,g=c[o.$$typeof]||r,m=0;m<d.length;++m){var v=d[m];if(!(i[v]||n&&n[v]||g&&g[v]||h&&h[v])){var k=u(o,v);try{s(t,v,k)}catch(e){}}}return t}return t}},function(e,t,o){"use strict";e.exports=o(9)},function(e,t,o){"use strict";
/** @license React v16.5.0
 * react-is.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,c=n?Symbol.for("react.fragment"):60107,s=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.placeholder"):60113;function d(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case f:case c:case a:case s:return e;default:switch(e=e&&e.$$typeof){case u:case p:case l:return e;default:return t}}case i:return t}}}t.typeOf=d,t.AsyncMode=f,t.ContextConsumer=u,t.ContextProvider=l,t.Element=r,t.ForwardRef=p,t.Fragment=c,t.Profiler=a,t.Portal=i,t.StrictMode=s,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===f||e===a||e===s||e===y||"object"==typeof e&&null!==e&&("function"==typeof e.then||e.$$typeof===l||e.$$typeof===u||e.$$typeof===p)},t.isAsyncMode=function(e){return d(e)===f},t.isContextConsumer=function(e){return d(e)===u},t.isContextProvider=function(e){return d(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return d(e)===p},t.isFragment=function(e){return d(e)===c},t.isProfiler=function(e){return d(e)===a},t.isPortal=function(e){return d(e)===i},t.isStrictMode=function(e){return d(e)===s}},function(e,t,o){"use strict";o.r(t),o.d(t,"CookieBanner",(function(){return G})),o.d(t,"CookiePanel",(function(){return Q}));var n=o(0),r=o.n(n),i=o(1),c=o.n(i),s=o(2);function a(e,t){if(void 0===t&&(t={}),function(e,t){return void 0===t&&(t=!e||"{"!==e[0]&&"["!==e[0]&&'"'!==e[0]),!t}(e,t.doNotParse))try{return JSON.parse(e)}catch(e){}return e}var l,u,f=o(3),p=function(){function e(e){this.changeListeners=[],this.cookies=function(e){return"string"==typeof e?s.parse(e):"object"==typeof e&&null!==e?e:{}}(e),this.HAS_DOCUMENT_COOKIE="object"==typeof document&&"string"==typeof document.cookie}return e.prototype._updateBrowserValues=function(){this.HAS_DOCUMENT_COOKIE&&(this.cookies=s.parse(document.cookie))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t){return void 0===t&&(t={}),this._updateBrowserValues(),a(this.cookies[e],t)},e.prototype.getAll=function(e){void 0===e&&(e={}),this._updateBrowserValues();var t={};for(var o in this.cookies)t[o]=a(this.cookies[o],e);return t},e.prototype.set=function(e,t,o){var n;"object"==typeof t&&(t=JSON.stringify(t)),this.cookies=f({},this.cookies,((n={})[e]=t,n)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=s.serialize(e,t,o)),this._emitChange({name:e,value:t,options:o})},e.prototype.remove=function(e,t){var o=t=f({},t,{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=f({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=s.serialize(e,"",o)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}(),y=p,d=(l=n.createContext(new p)).Provider,h=(l.Consumer,u=function(e,t){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}u(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)});(function(e){function t(t){var o=e.call(this,t)||this;return t.cookies?o.cookies=t.cookies:o.cookies=new p,o}h(t,e),t.prototype.render=function(){return n.createElement(d,{value:this.cookies},this.props.children)}})(n.Component),function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)}}(),o(7);var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:365,o=e?new Date(e):new Date;return o.setTime(o.getTime()+24*t*60*60*1e3),o},m=function(){return"undefined"==typeof navigator};function v(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var w=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];k(this,e),this.cookies=new y,this.whole_domain=t}var t,o,n;return t=e,(o=[{key:"get",value:function(e){return this.cookies.get(e)}},{key:"set",value:function(e,t){var o=this.whole_domain?{path:"/"}:{};this.cookies.set(e,!0,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),n.forEach((function(t){v(e,t,o[t])}))}return e}({expires:t||g()},{optionPath:o}))}},{key:"remove",value:function(e){return this.cookies.remove(e)}}])&&b(t.prototype,o),n&&b(t,n),e}();function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function x(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var T=function(e){function t(e){var o,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=!(r=_(t).call(this,e))||"object"!==O(r)&&"function"!=typeof r?P(n):r;var i=e.checked,c=void 0!==i&&i;return o.state={checked:c},o.handleOnChange=o.handleOnChange.bind(P(P(o))),o}var o,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,e),o=t,(n=[{key:"handleOnChange",value:function(){var e=this.props.onChange,t=void 0===e?Function:e,o=!this.state.checked;this.setState({checked:o}),t(o)}},{key:"render",value:function(){var e=this.props,t=e.id,o=void 0===t?"":t,n=e.text,i=void 0===n?"":n,c=e.styles,s=void 0===c?{}:c,a=e.disabled,l=void 0!==a&&a,u=l?{disabled:l}:{},f=this.state.checked,p=s.optionWrapperStyle,y=s.optionLabelStyle,d=s.checkboxStyle;return r.a.createElement("div",{className:"react-cookie-law-option-wrapper",style:p},r.a.createElement("input",S({type:"checkbox",id:o,className:"react-cookie-law-option-checkbox",style:d,checked:f,onChange:this.handleOnChange},u)),r.a.createElement("label",{htmlFor:o,style:y},i))}}])&&x(o.prototype,n),i&&x(o,i),t}(r.a.Component),E={dialog:{position:"fixed",top:"0",left:"0",right:"0",zIndex:"100000",backgroundColor:"#f8f7f7",padding:"10px"},container:{maxWidth:"960px",marginLeft:"auto",marginRight:"auto",overflow:"hidden"},message:{minHeight:"32px",fontSize:"10pt",fontWeight:"400",lineHeight:"130%",padding:"10px 0",color:"#000000"},policy:{fontSize:"10pt",marginLeft:"10px",color:"#000000",textDecoration:"underline"},selectPane:{display:"table-cell",padding:"3px 0px 10px 0px"},optionWrapper:{display:"inline-block",position:"relative",marginRight:"7px",marginLeft:"7px",float:"left"},optionLabel:{height:"auto",width:"auto",minHeight:"14px",fontSize:"12pt",color:"#c6c6c6",display:"inline-block",padding:"1px 0 0 20px",position:"relative",top:"0",left:"0",zIndex:"1",cursor:"default",verticalAlign:"top"},checkbox:{position:"absolute",top:"4px",left:"0",width:"14px",height:"14px",zIndex:"2",cursor:"pointer"},buttonWrapper:{float:"right"},button:{display:"inline-block",backgroundColor:"#000000",padding:"3px",minWidth:"80px",color:"#ffffff",textDecoration:"none",fontSize:"10pt",fontWeight:"400",marginRight:"5px",marginLeft:"5px",textAlign:"center",whiteSpace:"nowrap",cursor:"pointer"}};function j(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),n.forEach((function(t){M(e,t,o[t])}))}return e}function M(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,o=void 0===t?{}:t,n=e.className,i=void 0===n?"":n,c=e.message,s=void 0===c?"No text":c,a=e.policyLink,l=void 0===a?"/#":a,u=e.privacyPolicyLinkText,f=void 0===u?"Privacy Policy":u,p=e.necessaryOptionText,y=void 0===p?"Necessary":p,d=e.preferencesOptionText,h=void 0===d?"Preferences":d,g=e.statisticsOptionText,m=void 0===g?"Statistics":g,v=e.marketingOptionText,k=void 0===v?"Marketing":v,b=e.showDeclineButton,w=void 0!==b&&b,O=e.acceptButtonText,S=void 0===O?"Accept":O,x=e.declineButtonText,_=void 0===x?"Decline":x,C=e.showPreferencesOption,P=void 0===C||C,M=e.showStatisticsOption,D=void 0===M||M,L=e.showMarketingOption,N=void 0===L||L,A=e.onTogglePreferencesCookies,$=void 0===A?Function:A,F=e.onToggleStatisticsCookies,R=void 0===F?Function:F,B=e.onToggleMarketingCookies,U=void 0===B?Function:B,I=e.onDecline,W=void 0===I?Function:I,z=e.onConfirm,q=void 0===z?Function:z,H=j({},E,o),V=H.dialog,K=H.container,J=H.message,Y=H.policy,G=H.selectPane,Q=H.optionWrapper,X=H.optionLabel,Z=H.checkbox,ee=H.buttonWrapper,te=H.button,oe={optionWrapperStyle:Q,optionLabelStyle:X,checkboxStyle:Z};return r.a.createElement("div",{className:"react-cookie-law-dialog ".concat(i),style:V},r.a.createElement("div",{className:"react-cookie-law-container",style:K},r.a.createElement("div",{className:"react-cookie-law-msg",style:J},s),r.a.createElement("div",{className:"react-cookie-law-select-pane",style:G},r.a.createElement(T,{id:"check-required-cookies",text:y,styles:oe,disabled:!0,checked:!0}),P&&r.a.createElement(T,{id:"check-preferences-cookies",text:h,styles:oe,onChange:$}),D&&r.a.createElement(T,{id:"check-statistics-cookies",text:m,styles:oe,onChange:R}),N&&r.a.createElement(T,{id:"check-marketing-cookies",text:k,styles:oe,onChange:U})),r.a.createElement("a",{href:l,className:"react-cookie-law-policy",style:Y},f),r.a.createElement("div",{className:"react-cookie-law-button-wrapper",style:ee},w&&r.a.createElement("button",{type:"button",className:"react-cookie-law-decline-btn",style:te,onClick:function(){return W()}},r.a.createElement("span",null,_)),r.a.createElement("button",{type:"button",className:"react-cookie-law-accept-btn",style:te,onClick:function(){return q()}},r.a.createElement("span",null,S)))))};function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var R=function(e){function t(e){var o,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(o=!(r=A(t).call(this,e))||"object"!==L(r)&&"function"!=typeof r?F(n):r).state={preferencesCookies:!1,statisticsCookies:!1,marketingCookies:!1},o.onScroll=o.onScroll.bind(F(F(o))),o.onTogglePreferencesCookies=o.onTogglePreferencesCookies.bind(F(F(o))),o.onToggleStatisticsCookies=o.onToggleStatisticsCookies.bind(F(F(o))),o.onToggleMarketingCookies=o.onToggleMarketingCookies.bind(F(F(o))),o.confirm=o.confirm.bind(F(F(o))),o.decline=o.decline.bind(F(F(o))),o.consetsCallback=o.consetsCallback.bind(F(F(o))),o.cookies=new w(o.props.wholeDomain),o}var o,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(t,e),o=t,(n=[{key:"componentDidMount",value:function(){var e=this.props.dismissOnScroll;m()||!0!==e||(window.addEventListener?window.addEventListener("scroll",this.onScroll):window.attachEvent&&window.attachEvent("onscroll",this.onScroll))}},{key:"componentWillUnmount",value:function(){m()||(window.removeEventListener?window.removeEventListener("scroll",this.onScroll):window.detachEvent&&window.detachEvent("onscroll",this.onScroll))}},{key:"onScroll",value:function(){this.confirm()}},{key:"onTogglePreferencesCookies",value:function(){var e=this.state.preferencesCookies;this.setState({preferencesCookies:!e})}},{key:"onToggleStatisticsCookies",value:function(){var e=this.state.statisticsCookies;this.setState({statisticsCookies:!e})}},{key:"onToggleMarketingCookies",value:function(){var e=this.state.marketingCookies;this.setState({marketingCookies:!e})}},{key:"confirm",value:function(){var e=this.state,t=e.preferencesCookies,o=e.statisticsCookies,n=e.marketingCookies;this.cookies.set("rcl_consent_given"),t?this.cookies.set("rcl_preferences_consent"):this.cookies.remove("rcl_preferences_consent"),o?this.cookies.set("rcl_statistics_consent"):this.cookies.remove("rcl_statistics_consent"),n?this.cookies.set("rcl_marketing_consent"):this.cookies.remove("rcl_marketing_consent"),this.forceUpdate()}},{key:"decline",value:function(){var e=this.props,t=e.onDeclinePreferences,o=void 0===t?Function:t,n=e.onDeclineStatistics,r=void 0===n?Function:n,i=e.onDeclineMarketing,c=void 0===i?Function:i;this.cookies.set("rcl_consent_given"),this.cookies.remove("rcl_preferences_consent"),this.cookies.remove("rcl_statistics_consent"),this.cookies.remove("rcl_marketing_consent"),o(),r(),c(),this.forceUpdate()}},{key:"consetsCallback",value:function(){var e=this.props,t=e.onAccept,o=void 0===t?Function:t,n=e.onAcceptPreferences,r=void 0===n?Function:n,i=e.onAcceptStatistics,c=void 0===i?Function:i,s=e.onAcceptMarketing,a=void 0===s?Function:s,l=e.onDeclinePreferences,u=void 0===l?Function:l,f=e.onDeclineStatistics,p=void 0===f?Function:f,y=e.onDeclineMarketing,d=void 0===y?Function:y,h=this.cookies.get("rcl_preferences_consent"),g=this.cookies.get("rcl_statistics_consent"),m=this.cookies.get("rcl_marketing_consent");o(),h?r():u(),g?c():p(),m?a():d()}},{key:"render",value:function(){var e=this.props,t=e.styles,o=e.className,n=e.message,i=e.policyLink,c=e.privacyPolicyLinkText,s=e.necessaryOptionText,a=e.preferencesOptionText,l=e.statisticsOptionText,u=e.marketingOptionText,f=e.showDeclineButton,p=e.acceptButtonText,y=e.declineButtonText,d=e.showPreferencesOption,h=e.showStatisticsOption,g=e.showMarketingOption;if(this.cookies.get("rcl_consent_given"))return this.consetsCallback(),null;var m={styles:t,className:o,message:n,policyLink:i,privacyPolicyLinkText:c,necessaryOptionText:s,preferencesOptionText:a,statisticsOptionText:l,marketingOptionText:u,showDeclineButton:f,acceptButtonText:p,declineButtonText:y,showPreferencesOption:d,showStatisticsOption:h,showMarketingOption:g,onTogglePreferencesCookies:this.onTogglePreferencesCookies,onToggleStatisticsCookies:this.onToggleStatisticsCookies,onToggleMarketingCookies:this.onToggleMarketingCookies,onDecline:this.decline,onConfirm:this.confirm};return r.a.createElement(D,m)}}])&&N(o.prototype,n),i&&N(o,i),t}(r.a.Component);R.protoTypes={className:c.a.string,styles:c.a.object,message:c.a.string.isRequired,wholeDomain:c.a.bool,policyLink:c.a.string,privacyPolicyLinkText:c.a.string,necessaryOptionText:c.a.string,preferencesOptionText:c.a.string,statisticsOptionText:c.a.string,marketingOptionText:c.a.string,acceptButtonText:c.a.string,declineButtonText:c.a.string,showDeclineButton:c.a.bool,dismissOnScroll:c.a.bool,showPreferencesOption:c.a.bool,showStatisticsOption:c.a.bool,showMarketingOption:c.a.bool,onAccept:c.a.func,onAcceptPreferences:c.a.func,onAcceptStatistics:c.a.func,onAcceptMarketing:c.a.func,onDeclinePreferences:c.a.func,onDeclineStatistics:c.a.func,onDeclineMarketing:c.a.func};var B=R;function U(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),n.forEach((function(t){I(e,t,o[t])}))}return e}function I(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,o=void 0===t?{}:t,n=e.className,i=void 0===n?"":n,c=e.message,s=void 0===c?"No text":c,a=e.policyLink,l=void 0===a?"/#":a,u=e.privacyPolicyLinkText,f=void 0===u?"Privacy Policy":u,p=(e.necessaryOptionText,e.preferencesOptionText,e.statisticsOptionText,e.marketingOptionText,e.showPreferButton),y=void 0===p||p,d=e.acceptButtonText,h=void 0===d?"Accept":d,g=e.PreferButtonText,m=void 0===g?"Preferències":g,v=(e.showPreferencesOption,e.showStatisticsOption,e.showMarketingOption,e.onTogglePreferencesCookies,e.onToggleStatisticsCookies,e.onToggleMarketingCookies,e.onDecline,e.onConfirm),k=void 0===v?Function:v,b=U({},E,o),w=b.dialog,O=b.container,S=b.message,x=b.policy,_=(b.selectPane,b.optionWrapper,b.optionLabel,b.checkbox,b.buttonWrapper),C=b.button;return r.a.createElement("div",{className:"react-cookie-law-dialog ".concat(i),style:w},r.a.createElement("div",{className:"react-cookie-law-container",style:O},r.a.createElement("div",{className:"react-cookie-law-msg",style:S},s),r.a.createElement("a",{href:l,className:"react-cookie-law-policy",style:x},f),r.a.createElement("div",{className:"react-cookie-law-button-wrapper",style:_},y&&r.a.createElement("button",{type:"button",className:"react-cookie-law-decline-btn",style:C,onClick:function(){return onPrefer()}},r.a.createElement("span",null,m)),r.a.createElement("button",{type:"button",className:"react-cookie-law-accept-btn",style:C,onClick:function(){return k()}},r.a.createElement("span",null,h)))))};function z(e){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function K(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var J=function(e){function t(e){var o,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(o=!(r=H(t).call(this,e))||"object"!==z(r)&&"function"!=typeof r?K(n):r).state={preferencesCookies:!1,statisticsCookies:!1,marketingCookies:!1},o.onScroll=o.onScroll.bind(K(K(o))),o.onTogglePreferencesCookies=o.onTogglePreferencesCookies.bind(K(K(o))),o.onToggleStatisticsCookies=o.onToggleStatisticsCookies.bind(K(K(o))),o.onToggleMarketingCookies=o.onToggleMarketingCookies.bind(K(K(o))),o.confirm=o.confirm.bind(K(K(o))),o.decline=o.decline.bind(K(K(o))),o.consetsCallback=o.consetsCallback.bind(K(K(o))),o.cookies=new w(o.props.wholeDomain),o}var o,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(t,e),o=t,(n=[{key:"componentDidMount",value:function(){var e=this.props.dismissOnScroll;m()||!0!==e||(window.addEventListener?window.addEventListener("scroll",this.onScroll):window.attachEvent&&window.attachEvent("onscroll",this.onScroll))}},{key:"componentWillUnmount",value:function(){m()||(window.removeEventListener?window.removeEventListener("scroll",this.onScroll):window.detachEvent&&window.detachEvent("onscroll",this.onScroll))}},{key:"onScroll",value:function(){this.confirm()}},{key:"onTogglePreferencesCookies",value:function(){var e=this.state.preferencesCookies;this.setState({preferencesCookies:!e})}},{key:"onToggleStatisticsCookies",value:function(){var e=this.state.statisticsCookies;this.setState({statisticsCookies:!e})}},{key:"onToggleMarketingCookies",value:function(){var e=this.state.marketingCookies;this.setState({marketingCookies:!e})}},{key:"confirm",value:function(){var e=this.state,t=e.preferencesCookies,o=e.statisticsCookies,n=e.marketingCookies;this.cookies.set("rcl_consent_given"),t?this.cookies.set("rcl_preferences_consent"):this.cookies.remove("rcl_preferences_consent"),o?this.cookies.set("rcl_statistics_consent"):this.cookies.remove("rcl_statistics_consent"),n?this.cookies.set("rcl_marketing_consent"):this.cookies.remove("rcl_marketing_consent"),this.forceUpdate()}},{key:"onPrefer",value:function(){console.log("Activem el segon panel")}},{key:"consetsCallback",value:function(){var e=this.props,t=e.onAccept,o=void 0===t?Function:t,n=e.onAcceptPreferences,r=void 0===n?Function:n,i=e.onAcceptStatistics,c=void 0===i?Function:i,s=e.onAcceptMarketing,a=void 0===s?Function:s,l=e.onDeclinePreferences,u=void 0===l?Function:l,f=e.onDeclineStatistics,p=void 0===f?Function:f,y=e.onDeclineMarketing,d=void 0===y?Function:y,h=this.cookies.get("rcl_preferences_consent"),g=this.cookies.get("rcl_statistics_consent"),m=this.cookies.get("rcl_marketing_consent");o(),h?r():u(),g?c():p(),m?a():d()}},{key:"render",value:function(){var e=this.props,t=e.styles,o=e.className,n=e.message,i=e.policyLink,c=e.privacyPolicyLinkText,s=e.necessaryOptionText,a=e.preferencesOptionText,l=e.statisticsOptionText,u=e.marketingOptionText,f=e.showPreferButton,p=e.acceptButtonText,y=e.PreferButtonText,d=e.showPreferencesOption,h=e.showStatisticsOption,g=e.showMarketingOption;if(this.cookies.get("rcl_consent_given"))return this.consetsCallback(),null;var m={styles:t,className:o,message:n,policyLink:i,privacyPolicyLinkText:c,necessaryOptionText:s,preferencesOptionText:a,statisticsOptionText:l,marketingOptionText:u,showPreferButton:f,acceptButtonText:p,PreferButtonText:y,showPreferencesOption:d,showStatisticsOption:h,showMarketingOption:g,onTogglePreferencesCookies:this.onTogglePreferencesCookies,onToggleStatisticsCookies:this.onToggleStatisticsCookies,onToggleMarketingCookies:this.onToggleMarketingCookies,onDecline:this.decline,onConfirm:this.confirm};return r.a.createElement(W,m)}}])&&q(o.prototype,n),i&&q(o,i),t}(r.a.Component);J.protoTypes={className:c.a.string,styles:c.a.object,message:c.a.string.isRequired,wholeDomain:c.a.bool,policyLink:c.a.string,privacyPolicyLinkText:c.a.string,necessaryOptionText:c.a.string,preferencesOptionText:c.a.string,statisticsOptionText:c.a.string,marketingOptionText:c.a.string,acceptButtonText:c.a.string,PreferButtonText:c.a.string,showPreferButton:c.a.bool,dismissOnScroll:c.a.bool,showPreferencesOption:c.a.bool,showStatisticsOption:c.a.bool,showMarketingOption:c.a.bool,onAccept:c.a.func,onAcceptPreferences:c.a.func,onAcceptStatistics:c.a.func,onAcceptMarketing:c.a.func,onDeclinePreferences:c.a.func,onDeclineStatistics:c.a.func,onDeclineMarketing:c.a.func};var Y=J,G=function(e){return m()?null:r.a.createElement(B,e)},Q=function(e){return m()?null:r.a.createElement(Y,e)}}])}));