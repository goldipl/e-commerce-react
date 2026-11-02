function mg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function gg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xp={exports:{}},mo={},yp={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ii=Symbol.for("react.element"),vg=Symbol.for("react.portal"),xg=Symbol.for("react.fragment"),yg=Symbol.for("react.strict_mode"),wg=Symbol.for("react.profiler"),kg=Symbol.for("react.provider"),Sg=Symbol.for("react.context"),jg=Symbol.for("react.forward_ref"),zg=Symbol.for("react.suspense"),bg=Symbol.for("react.memo"),Cg=Symbol.for("react.lazy"),hu=Symbol.iterator;function Eg(e){return e===null||typeof e!="object"?null:(e=hu&&e[hu]||e["@@iterator"],typeof e=="function"?e:null)}var wp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kp=Object.assign,Sp={};function yr(e,t,n){this.props=e,this.context=t,this.refs=Sp,this.updater=n||wp}yr.prototype.isReactComponent={};yr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function jp(){}jp.prototype=yr.prototype;function tc(e,t,n){this.props=e,this.context=t,this.refs=Sp,this.updater=n||wp}var nc=tc.prototype=new jp;nc.constructor=tc;kp(nc,yr.prototype);nc.isPureReactComponent=!0;var mu=Array.isArray,zp=Object.prototype.hasOwnProperty,rc={current:null},bp={key:!0,ref:!0,__self:!0,__source:!0};function Cp(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)zp.call(t,r)&&!bp.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),d=0;d<l;d++)a[d]=arguments[d+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ii,type:e,key:s,ref:o,props:i,_owner:rc.current}}function Pg(e,t){return{$$typeof:Ii,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ic(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ii}function Tg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var gu=/\/+/g;function Xo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Tg(""+e.key):t.toString(36)}function fs(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ii:case vg:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Xo(o,0):r,mu(i)?(n="",e!=null&&(n=e.replace(gu,"$&/")+"/"),fs(i,t,n,"",function(d){return d})):i!=null&&(ic(i)&&(i=Pg(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(gu,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",mu(e))for(var l=0;l<e.length;l++){s=e[l];var a=r+Xo(s,l);o+=fs(s,t,n,a,i)}else if(a=Eg(e),typeof a=="function")for(e=a.call(e),l=0;!(s=e.next()).done;)s=s.value,a=r+Xo(s,l++),o+=fs(s,t,n,a,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Vi(e,t,n){if(e==null)return e;var r=[],i=0;return fs(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Lg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Oe={current:null},hs={transition:null},Ig={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:hs,ReactCurrentOwner:rc};Y.Children={map:Vi,forEach:function(e,t,n){Vi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vi(e,function(){t++}),t},toArray:function(e){return Vi(e,function(t){return t})||[]},only:function(e){if(!ic(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=yr;Y.Fragment=xg;Y.Profiler=wg;Y.PureComponent=tc;Y.StrictMode=yg;Y.Suspense=zg;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ig;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=kp({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=rc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)zp.call(t,a)&&!bp.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var d=0;d<a;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Ii,type:e.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(e){return e={$$typeof:Sg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:kg,_context:e},e.Consumer=e};Y.createElement=Cp;Y.createFactory=function(e){var t=Cp.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:jg,render:e}};Y.isValidElement=ic;Y.lazy=function(e){return{$$typeof:Cg,_payload:{_status:-1,_result:e},_init:Lg}};Y.memo=function(e,t){return{$$typeof:bg,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=hs.transition;hs.transition={};try{e()}finally{hs.transition=t}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(e,t){return Oe.current.useCallback(e,t)};Y.useContext=function(e){return Oe.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return Oe.current.useDeferredValue(e)};Y.useEffect=function(e,t){return Oe.current.useEffect(e,t)};Y.useId=function(){return Oe.current.useId()};Y.useImperativeHandle=function(e,t,n){return Oe.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return Oe.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return Oe.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return Oe.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return Oe.current.useReducer(e,t,n)};Y.useRef=function(e){return Oe.current.useRef(e)};Y.useState=function(e){return Oe.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return Oe.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return Oe.current.useTransition()};Y.version="18.2.0";yp.exports=Y;var E=yp.exports;const K=gg(E),Mg=mg({__proto__:null,default:K},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng=E,Og=Symbol.for("react.element"),$g=Symbol.for("react.fragment"),_g=Object.prototype.hasOwnProperty,Ag=Ng.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rg={key:!0,ref:!0,__self:!0,__source:!0};function Ep(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)_g.call(t,r)&&!Rg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Og,type:e,key:s,ref:o,props:i,_owner:Ag.current}}mo.Fragment=$g;mo.jsx=Ep;mo.jsxs=Ep;xp.exports=mo;var c=xp.exports,Fa={},Pp={exports:{}},Ye={},Tp={exports:{}},Lp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,$){var _=C.length;C.push($);e:for(;0<_;){var H=_-1>>>1,V=C[H];if(0<i(V,$))C[H]=$,C[_]=V,_=H;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var $=C[0],_=C.pop();if(_!==$){C[0]=_;e:for(var H=0,V=C.length,se=V>>>1;H<se;){var ae=2*(H+1)-1,ee=C[ae],Le=ae+1,Qe=C[Le];if(0>i(ee,_))Le<V&&0>i(Qe,ee)?(C[H]=Qe,C[Le]=_,H=Le):(C[H]=ee,C[ae]=_,H=ae);else if(Le<V&&0>i(Qe,_))C[H]=Qe,C[Le]=_,H=Le;else break e}}return $}function i(C,$){var _=C.sortIndex-$.sortIndex;return _!==0?_:C.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var a=[],d=[],f=1,h=null,g=3,x=!1,v=!1,y=!1,j=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(C){for(var $=n(d);$!==null;){if($.callback===null)r(d);else if($.startTime<=C)r(d),$.sortIndex=$.expirationTime,t(a,$);else break;$=n(d)}}function w(C){if(y=!1,m(C),!v)if(n(a)!==null)v=!0,U(z);else{var $=n(d);$!==null&&O(w,$.startTime-C)}}function z(C,$){v=!1,y&&(y=!1,u(k),k=-1),x=!0;var _=g;try{for(m($),h=n(a);h!==null&&(!(h.expirationTime>$)||C&&!N());){var H=h.callback;if(typeof H=="function"){h.callback=null,g=h.priorityLevel;var V=H(h.expirationTime<=$);$=e.unstable_now(),typeof V=="function"?h.callback=V:h===n(a)&&r(a),m($)}else r(a);h=n(a)}if(h!==null)var se=!0;else{var ae=n(d);ae!==null&&O(w,ae.startTime-$),se=!1}return se}finally{h=null,g=_,x=!1}}var b=!1,I=null,k=-1,L=5,S=-1;function N(){return!(e.unstable_now()-S<L)}function M(){if(I!==null){var C=e.unstable_now();S=C;var $=!0;try{$=I(!0,C)}finally{$?T():(b=!1,I=null)}}else b=!1}var T;if(typeof p=="function")T=function(){p(M)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,B=R.port2;R.port1.onmessage=M,T=function(){B.postMessage(null)}}else T=function(){j(M,0)};function U(C){I=C,b||(b=!0,T())}function O(C,$){k=j(function(){C(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,U(z))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(C){switch(g){case 1:case 2:case 3:var $=3;break;default:$=g}var _=g;g=$;try{return C()}finally{g=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,$){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var _=g;g=C;try{return $()}finally{g=_}},e.unstable_scheduleCallback=function(C,$,_){var H=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?H+_:H):_=H,C){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=_+V,C={id:f++,callback:$,priorityLevel:C,startTime:_,expirationTime:V,sortIndex:-1},_>H?(C.sortIndex=_,t(d,C),n(a)===null&&C===n(d)&&(y?(u(k),k=-1):y=!0,O(w,_-H))):(C.sortIndex=V,t(a,C),v||x||(v=!0,U(z))),C},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(C){var $=g;return function(){var _=g;g=$;try{return C.apply(this,arguments)}finally{g=_}}}})(Lp);Tp.exports=Lp;var Dg=Tp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip=E,We=Dg;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mp=new Set,ii={};function An(e,t){lr(e,t),lr(e+"Capture",t)}function lr(e,t){for(ii[e]=t,e=0;e<t.length;e++)Mp.add(t[e])}var Mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Va=Object.prototype.hasOwnProperty,Bg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vu={},xu={};function Fg(e){return Va.call(xu,e)?!0:Va.call(vu,e)?!1:Bg.test(e)?xu[e]=!0:(vu[e]=!0,!1)}function Vg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hg(e,t,n,r){if(t===null||typeof t>"u"||Vg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){be[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];be[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){be[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){be[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){be[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){be[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){be[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){be[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){be[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var sc=/[\-:]([a-z])/g;function oc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(sc,oc);be[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(sc,oc);be[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(sc,oc);be[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){be[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});be.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){be[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function ac(e,t,n,r){var i=be.hasOwnProperty(t)?be[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Hg(t,n,i,r)&&(n=null),r||i===null?Fg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Rt=Ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hi=Symbol.for("react.element"),Vn=Symbol.for("react.portal"),Hn=Symbol.for("react.fragment"),lc=Symbol.for("react.strict_mode"),Ha=Symbol.for("react.profiler"),Np=Symbol.for("react.provider"),Op=Symbol.for("react.context"),cc=Symbol.for("react.forward_ref"),Ga=Symbol.for("react.suspense"),Ua=Symbol.for("react.suspense_list"),uc=Symbol.for("react.memo"),Ut=Symbol.for("react.lazy"),$p=Symbol.for("react.offscreen"),yu=Symbol.iterator;function Pr(e){return e===null||typeof e!="object"?null:(e=yu&&e[yu]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,Qo;function Rr(e){if(Qo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qo=t&&t[1]||""}return`
`+Qo+e}var Jo=!1;function Zo(e,t){if(!e||Jo)return"";Jo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=l);break}}}finally{Jo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Rr(e):""}function Gg(e){switch(e.tag){case 5:return Rr(e.type);case 16:return Rr("Lazy");case 13:return Rr("Suspense");case 19:return Rr("SuspenseList");case 0:case 2:case 15:return e=Zo(e.type,!1),e;case 11:return e=Zo(e.type.render,!1),e;case 1:return e=Zo(e.type,!0),e;default:return""}}function Wa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hn:return"Fragment";case Vn:return"Portal";case Ha:return"Profiler";case lc:return"StrictMode";case Ga:return"Suspense";case Ua:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Op:return(e.displayName||"Context")+".Consumer";case Np:return(e._context.displayName||"Context")+".Provider";case cc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case uc:return t=e.displayName||null,t!==null?t:Wa(e.type)||"Memo";case Ut:t=e._payload,e=e._init;try{return Wa(e(t))}catch{}}return null}function Ug(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wa(t);case 8:return t===lc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _p(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wg(e){var t=_p(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gi(e){e._valueTracker||(e._valueTracker=Wg(e))}function Ap(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_p(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ns(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ya(e,t){var n=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function wu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Rp(e,t){t=t.checked,t!=null&&ac(e,"checked",t,!1)}function Ka(e,t){Rp(e,t);var n=dn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Xa(e,t.type,dn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ku(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Xa(e,t,n){(t!=="number"||Ns(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dr=Array.isArray;function er(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Su(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(Dr(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dn(n)}}function Dp(e,t){var n=dn(t.value),r=dn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ju(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ja(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ui,Fp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ui=Ui||document.createElement("div"),Ui.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ui.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function si(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yg=["Webkit","ms","Moz","O"];Object.keys(Wr).forEach(function(e){Yg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wr[t]=Wr[e]})});function Vp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Wr.hasOwnProperty(e)&&Wr[e]?(""+t).trim():t+"px"}function Hp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Vp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Kg=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Za(e,t){if(t){if(Kg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function qa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var el=null;function dc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tl=null,tr=null,nr=null;function zu(e){if(e=Oi(e)){if(typeof tl!="function")throw Error(A(280));var t=e.stateNode;t&&(t=wo(t),tl(e.stateNode,e.type,t))}}function Gp(e){tr?nr?nr.push(e):nr=[e]:tr=e}function Up(){if(tr){var e=tr,t=nr;if(nr=tr=null,zu(e),t)for(e=0;e<t.length;e++)zu(t[e])}}function Wp(e,t){return e(t)}function Yp(){}var qo=!1;function Kp(e,t,n){if(qo)return e(t,n);qo=!0;try{return Wp(e,t,n)}finally{qo=!1,(tr!==null||nr!==null)&&(Yp(),Up())}}function oi(e,t){var n=e.stateNode;if(n===null)return null;var r=wo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var nl=!1;if(Mt)try{var Tr={};Object.defineProperty(Tr,"passive",{get:function(){nl=!0}}),window.addEventListener("test",Tr,Tr),window.removeEventListener("test",Tr,Tr)}catch{nl=!1}function Xg(e,t,n,r,i,s,o,l,a){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(f){this.onError(f)}}var Yr=!1,Os=null,$s=!1,rl=null,Qg={onError:function(e){Yr=!0,Os=e}};function Jg(e,t,n,r,i,s,o,l,a){Yr=!1,Os=null,Xg.apply(Qg,arguments)}function Zg(e,t,n,r,i,s,o,l,a){if(Jg.apply(this,arguments),Yr){if(Yr){var d=Os;Yr=!1,Os=null}else throw Error(A(198));$s||($s=!0,rl=d)}}function Rn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Xp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bu(e){if(Rn(e)!==e)throw Error(A(188))}function qg(e){var t=e.alternate;if(!t){if(t=Rn(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return bu(i),e;if(s===r)return bu(i),t;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function Qp(e){return e=qg(e),e!==null?Jp(e):null}function Jp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Jp(e);if(t!==null)return t;e=e.sibling}return null}var Zp=We.unstable_scheduleCallback,Cu=We.unstable_cancelCallback,e0=We.unstable_shouldYield,t0=We.unstable_requestPaint,fe=We.unstable_now,n0=We.unstable_getCurrentPriorityLevel,pc=We.unstable_ImmediatePriority,qp=We.unstable_UserBlockingPriority,_s=We.unstable_NormalPriority,r0=We.unstable_LowPriority,ef=We.unstable_IdlePriority,go=null,St=null;function i0(e){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(go,e,void 0,(e.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:a0,s0=Math.log,o0=Math.LN2;function a0(e){return e>>>=0,e===0?32:31-(s0(e)/o0|0)|0}var Wi=64,Yi=4194304;function Br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function As(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Br(l):(s&=o,s!==0&&(r=Br(s)))}else o=n&~i,o!==0?r=Br(o):s!==0&&(r=Br(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ut(t),i=1<<n,r|=e[n],t&=~i;return r}function l0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function c0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-ut(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=l0(l,t)):a<=t&&(e.expiredLanes|=l),s&=~l}}function il(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function tf(){var e=Wi;return Wi<<=1,!(Wi&4194240)&&(Wi=64),e}function ea(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Mi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ut(t),e[t]=n}function u0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ut(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function fc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ut(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Z=0;function nf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var rf,hc,sf,of,af,sl=!1,Ki=[],tn=null,nn=null,rn=null,ai=new Map,li=new Map,Yt=[],d0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eu(e,t){switch(e){case"focusin":case"focusout":tn=null;break;case"dragenter":case"dragleave":nn=null;break;case"mouseover":case"mouseout":rn=null;break;case"pointerover":case"pointerout":ai.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":li.delete(t.pointerId)}}function Lr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Oi(t),t!==null&&hc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function p0(e,t,n,r,i){switch(t){case"focusin":return tn=Lr(tn,e,t,n,r,i),!0;case"dragenter":return nn=Lr(nn,e,t,n,r,i),!0;case"mouseover":return rn=Lr(rn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return ai.set(s,Lr(ai.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,li.set(s,Lr(li.get(s)||null,e,t,n,r,i)),!0}return!1}function lf(e){var t=yn(e.target);if(t!==null){var n=Rn(t);if(n!==null){if(t=n.tag,t===13){if(t=Xp(n),t!==null){e.blockedOn=t,af(e.priority,function(){sf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ms(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ol(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);el=r,n.target.dispatchEvent(r),el=null}else return t=Oi(n),t!==null&&hc(t),e.blockedOn=n,!1;t.shift()}return!0}function Pu(e,t,n){ms(e)&&n.delete(t)}function f0(){sl=!1,tn!==null&&ms(tn)&&(tn=null),nn!==null&&ms(nn)&&(nn=null),rn!==null&&ms(rn)&&(rn=null),ai.forEach(Pu),li.forEach(Pu)}function Ir(e,t){e.blockedOn===t&&(e.blockedOn=null,sl||(sl=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,f0)))}function ci(e){function t(i){return Ir(i,e)}if(0<Ki.length){Ir(Ki[0],e);for(var n=1;n<Ki.length;n++){var r=Ki[n];r.blockedOn===e&&(r.blockedOn=null)}}for(tn!==null&&Ir(tn,e),nn!==null&&Ir(nn,e),rn!==null&&Ir(rn,e),ai.forEach(t),li.forEach(t),n=0;n<Yt.length;n++)r=Yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yt.length&&(n=Yt[0],n.blockedOn===null);)lf(n),n.blockedOn===null&&Yt.shift()}var rr=Rt.ReactCurrentBatchConfig,Rs=!0;function h0(e,t,n,r){var i=Z,s=rr.transition;rr.transition=null;try{Z=1,mc(e,t,n,r)}finally{Z=i,rr.transition=s}}function m0(e,t,n,r){var i=Z,s=rr.transition;rr.transition=null;try{Z=4,mc(e,t,n,r)}finally{Z=i,rr.transition=s}}function mc(e,t,n,r){if(Rs){var i=ol(e,t,n,r);if(i===null)ua(e,t,r,Ds,n),Eu(e,r);else if(p0(i,e,t,n,r))r.stopPropagation();else if(Eu(e,r),t&4&&-1<d0.indexOf(e)){for(;i!==null;){var s=Oi(i);if(s!==null&&rf(s),s=ol(e,t,n,r),s===null&&ua(e,t,r,Ds,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ua(e,t,r,null,n)}}var Ds=null;function ol(e,t,n,r){if(Ds=null,e=dc(r),e=yn(e),e!==null)if(t=Rn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Xp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ds=e,null}function cf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(n0()){case pc:return 1;case qp:return 4;case _s:case r0:return 16;case ef:return 536870912;default:return 16}default:return 16}}var Qt=null,gc=null,gs=null;function uf(){if(gs)return gs;var e,t=gc,n=t.length,r,i="value"in Qt?Qt.value:Qt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return gs=i.slice(e,1<r?1-r:void 0)}function vs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xi(){return!0}function Tu(){return!1}function Ke(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xi:Tu,this.isPropagationStopped=Tu,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xi)},persist:function(){},isPersistent:Xi}),t}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vc=Ke(wr),Ni=de({},wr,{view:0,detail:0}),g0=Ke(Ni),ta,na,Mr,vo=de({},Ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mr&&(Mr&&e.type==="mousemove"?(ta=e.screenX-Mr.screenX,na=e.screenY-Mr.screenY):na=ta=0,Mr=e),ta)},movementY:function(e){return"movementY"in e?e.movementY:na}}),Lu=Ke(vo),v0=de({},vo,{dataTransfer:0}),x0=Ke(v0),y0=de({},Ni,{relatedTarget:0}),ra=Ke(y0),w0=de({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),k0=Ke(w0),S0=de({},wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),j0=Ke(S0),z0=de({},wr,{data:0}),Iu=Ke(z0),b0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},E0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=E0[e])?!!t[e]:!1}function xc(){return P0}var T0=de({},Ni,{key:function(e){if(e.key){var t=b0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?C0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xc,charCode:function(e){return e.type==="keypress"?vs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),L0=Ke(T0),I0=de({},vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mu=Ke(I0),M0=de({},Ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xc}),N0=Ke(M0),O0=de({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),$0=Ke(O0),_0=de({},vo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),A0=Ke(_0),R0=[9,13,27,32],yc=Mt&&"CompositionEvent"in window,Kr=null;Mt&&"documentMode"in document&&(Kr=document.documentMode);var D0=Mt&&"TextEvent"in window&&!Kr,df=Mt&&(!yc||Kr&&8<Kr&&11>=Kr),Nu=" ",Ou=!1;function pf(e,t){switch(e){case"keyup":return R0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ff(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gn=!1;function B0(e,t){switch(e){case"compositionend":return ff(t);case"keypress":return t.which!==32?null:(Ou=!0,Nu);case"textInput":return e=t.data,e===Nu&&Ou?null:e;default:return null}}function F0(e,t){if(Gn)return e==="compositionend"||!yc&&pf(e,t)?(e=uf(),gs=gc=Qt=null,Gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return df&&t.locale!=="ko"?null:t.data;default:return null}}var V0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!V0[e.type]:t==="textarea"}function hf(e,t,n,r){Gp(r),t=Bs(t,"onChange"),0<t.length&&(n=new vc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xr=null,ui=null;function H0(e){bf(e,0)}function xo(e){var t=Yn(e);if(Ap(t))return e}function G0(e,t){if(e==="change")return t}var mf=!1;if(Mt){var ia;if(Mt){var sa="oninput"in document;if(!sa){var _u=document.createElement("div");_u.setAttribute("oninput","return;"),sa=typeof _u.oninput=="function"}ia=sa}else ia=!1;mf=ia&&(!document.documentMode||9<document.documentMode)}function Au(){Xr&&(Xr.detachEvent("onpropertychange",gf),ui=Xr=null)}function gf(e){if(e.propertyName==="value"&&xo(ui)){var t=[];hf(t,ui,e,dc(e)),Kp(H0,t)}}function U0(e,t,n){e==="focusin"?(Au(),Xr=t,ui=n,Xr.attachEvent("onpropertychange",gf)):e==="focusout"&&Au()}function W0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xo(ui)}function Y0(e,t){if(e==="click")return xo(t)}function K0(e,t){if(e==="input"||e==="change")return xo(t)}function X0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:X0;function di(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Va.call(t,i)||!ht(e[i],t[i]))return!1}return!0}function Ru(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Du(e,t){var n=Ru(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ru(n)}}function vf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xf(){for(var e=window,t=Ns();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ns(e.document)}return t}function wc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Q0(e){var t=xf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vf(n.ownerDocument.documentElement,n)){if(r!==null&&wc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Du(n,s);var o=Du(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var J0=Mt&&"documentMode"in document&&11>=document.documentMode,Un=null,al=null,Qr=null,ll=!1;function Bu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ll||Un==null||Un!==Ns(r)||(r=Un,"selectionStart"in r&&wc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qr&&di(Qr,r)||(Qr=r,r=Bs(al,"onSelect"),0<r.length&&(t=new vc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Un)))}function Qi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wn={animationend:Qi("Animation","AnimationEnd"),animationiteration:Qi("Animation","AnimationIteration"),animationstart:Qi("Animation","AnimationStart"),transitionend:Qi("Transition","TransitionEnd")},oa={},yf={};Mt&&(yf=document.createElement("div").style,"AnimationEvent"in window||(delete Wn.animationend.animation,delete Wn.animationiteration.animation,delete Wn.animationstart.animation),"TransitionEvent"in window||delete Wn.transitionend.transition);function yo(e){if(oa[e])return oa[e];if(!Wn[e])return e;var t=Wn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in yf)return oa[e]=t[n];return e}var wf=yo("animationend"),kf=yo("animationiteration"),Sf=yo("animationstart"),jf=yo("transitionend"),zf=new Map,Fu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fn(e,t){zf.set(e,t),An(t,[e])}for(var aa=0;aa<Fu.length;aa++){var la=Fu[aa],Z0=la.toLowerCase(),q0=la[0].toUpperCase()+la.slice(1);fn(Z0,"on"+q0)}fn(wf,"onAnimationEnd");fn(kf,"onAnimationIteration");fn(Sf,"onAnimationStart");fn("dblclick","onDoubleClick");fn("focusin","onFocus");fn("focusout","onBlur");fn(jf,"onTransitionEnd");lr("onMouseEnter",["mouseout","mouseover"]);lr("onMouseLeave",["mouseout","mouseover"]);lr("onPointerEnter",["pointerout","pointerover"]);lr("onPointerLeave",["pointerout","pointerover"]);An("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));An("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));An("onBeforeInput",["compositionend","keypress","textInput","paste"]);An("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));An("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));An("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ev=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));function Vu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Zg(r,t,void 0,e),e.currentTarget=null}function bf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,d=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Vu(i,l,d),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,d=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Vu(i,l,d),s=a}}}if($s)throw e=rl,$s=!1,rl=null,e}function te(e,t){var n=t[fl];n===void 0&&(n=t[fl]=new Set);var r=e+"__bubble";n.has(r)||(Cf(t,e,2,!1),n.add(r))}function ca(e,t,n){var r=0;t&&(r|=4),Cf(n,e,r,t)}var Ji="_reactListening"+Math.random().toString(36).slice(2);function pi(e){if(!e[Ji]){e[Ji]=!0,Mp.forEach(function(n){n!=="selectionchange"&&(ev.has(n)||ca(n,!1,e),ca(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ji]||(t[Ji]=!0,ca("selectionchange",!1,t))}}function Cf(e,t,n,r){switch(cf(t)){case 1:var i=h0;break;case 4:i=m0;break;default:i=mc}n=i.bind(null,t,n,e),i=void 0,!nl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ua(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=yn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Kp(function(){var d=s,f=dc(n),h=[];e:{var g=zf.get(e);if(g!==void 0){var x=vc,v=e;switch(e){case"keypress":if(vs(n)===0)break e;case"keydown":case"keyup":x=L0;break;case"focusin":v="focus",x=ra;break;case"focusout":v="blur",x=ra;break;case"beforeblur":case"afterblur":x=ra;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Lu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=x0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=N0;break;case wf:case kf:case Sf:x=k0;break;case jf:x=$0;break;case"scroll":x=g0;break;case"wheel":x=A0;break;case"copy":case"cut":case"paste":x=j0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Mu}var y=(t&4)!==0,j=!y&&e==="scroll",u=y?g!==null?g+"Capture":null:g;y=[];for(var p=d,m;p!==null;){m=p;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,u!==null&&(w=oi(p,u),w!=null&&y.push(fi(p,w,m)))),j)break;p=p.return}0<y.length&&(g=new x(g,v,null,n,f),h.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==el&&(v=n.relatedTarget||n.fromElement)&&(yn(v)||v[Nt]))break e;if((x||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,x?(v=n.relatedTarget||n.toElement,x=d,v=v?yn(v):null,v!==null&&(j=Rn(v),v!==j||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=d),x!==v)){if(y=Lu,w="onMouseLeave",u="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=Mu,w="onPointerLeave",u="onPointerEnter",p="pointer"),j=x==null?g:Yn(x),m=v==null?g:Yn(v),g=new y(w,p+"leave",x,n,f),g.target=j,g.relatedTarget=m,w=null,yn(f)===d&&(y=new y(u,p+"enter",v,n,f),y.target=m,y.relatedTarget=j,w=y),j=w,x&&v)t:{for(y=x,u=v,p=0,m=y;m;m=Bn(m))p++;for(m=0,w=u;w;w=Bn(w))m++;for(;0<p-m;)y=Bn(y),p--;for(;0<m-p;)u=Bn(u),m--;for(;p--;){if(y===u||u!==null&&y===u.alternate)break t;y=Bn(y),u=Bn(u)}y=null}else y=null;x!==null&&Hu(h,g,x,y,!1),v!==null&&j!==null&&Hu(h,j,v,y,!0)}}e:{if(g=d?Yn(d):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var z=G0;else if($u(g))if(mf)z=K0;else{z=W0;var b=U0}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(z=Y0);if(z&&(z=z(e,d))){hf(h,z,n,f);break e}b&&b(e,g,d),e==="focusout"&&(b=g._wrapperState)&&b.controlled&&g.type==="number"&&Xa(g,"number",g.value)}switch(b=d?Yn(d):window,e){case"focusin":($u(b)||b.contentEditable==="true")&&(Un=b,al=d,Qr=null);break;case"focusout":Qr=al=Un=null;break;case"mousedown":ll=!0;break;case"contextmenu":case"mouseup":case"dragend":ll=!1,Bu(h,n,f);break;case"selectionchange":if(J0)break;case"keydown":case"keyup":Bu(h,n,f)}var I;if(yc)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Gn?pf(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(df&&n.locale!=="ko"&&(Gn||k!=="onCompositionStart"?k==="onCompositionEnd"&&Gn&&(I=uf()):(Qt=f,gc="value"in Qt?Qt.value:Qt.textContent,Gn=!0)),b=Bs(d,k),0<b.length&&(k=new Iu(k,e,null,n,f),h.push({event:k,listeners:b}),I?k.data=I:(I=ff(n),I!==null&&(k.data=I)))),(I=D0?B0(e,n):F0(e,n))&&(d=Bs(d,"onBeforeInput"),0<d.length&&(f=new Iu("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:d}),f.data=I))}bf(h,t)})}function fi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Bs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=oi(e,n),s!=null&&r.unshift(fi(e,s,i)),s=oi(e,t),s!=null&&r.push(fi(e,s,i))),e=e.return}return r}function Bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hu(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,d=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&d!==null&&(l=d,i?(a=oi(n,s),a!=null&&o.unshift(fi(n,a,l))):i||(a=oi(n,s),a!=null&&o.push(fi(n,a,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var tv=/\r\n?/g,nv=/\u0000|\uFFFD/g;function Gu(e){return(typeof e=="string"?e:""+e).replace(tv,`
`).replace(nv,"")}function Zi(e,t,n){if(t=Gu(t),Gu(e)!==t&&n)throw Error(A(425))}function Fs(){}var cl=null,ul=null;function dl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pl=typeof setTimeout=="function"?setTimeout:void 0,rv=typeof clearTimeout=="function"?clearTimeout:void 0,Uu=typeof Promise=="function"?Promise:void 0,iv=typeof queueMicrotask=="function"?queueMicrotask:typeof Uu<"u"?function(e){return Uu.resolve(null).then(e).catch(sv)}:pl;function sv(e){setTimeout(function(){throw e})}function da(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ci(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ci(t)}function sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var kr=Math.random().toString(36).slice(2),yt="__reactFiber$"+kr,hi="__reactProps$"+kr,Nt="__reactContainer$"+kr,fl="__reactEvents$"+kr,ov="__reactListeners$"+kr,av="__reactHandles$"+kr;function yn(e){var t=e[yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Nt]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wu(e);e!==null;){if(n=e[yt])return n;e=Wu(e)}return t}e=n,n=e.parentNode}return null}function Oi(e){return e=e[yt]||e[Nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function wo(e){return e[hi]||null}var hl=[],Kn=-1;function hn(e){return{current:e}}function re(e){0>Kn||(e.current=hl[Kn],hl[Kn]=null,Kn--)}function q(e,t){Kn++,hl[Kn]=e.current,e.current=t}var pn={},Te=hn(pn),De=hn(!1),Pn=pn;function cr(e,t){var n=e.type.contextTypes;if(!n)return pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Be(e){return e=e.childContextTypes,e!=null}function Vs(){re(De),re(Te)}function Yu(e,t,n){if(Te.current!==pn)throw Error(A(168));q(Te,t),q(De,n)}function Ef(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(A(108,Ug(e)||"Unknown",i));return de({},n,r)}function Hs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pn,Pn=Te.current,q(Te,e),q(De,De.current),!0}function Ku(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=Ef(e,t,Pn),r.__reactInternalMemoizedMergedChildContext=e,re(De),re(Te),q(Te,e)):re(De),q(De,n)}var Pt=null,ko=!1,pa=!1;function Pf(e){Pt===null?Pt=[e]:Pt.push(e)}function lv(e){ko=!0,Pf(e)}function mn(){if(!pa&&Pt!==null){pa=!0;var e=0,t=Z;try{var n=Pt;for(Z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pt=null,ko=!1}catch(i){throw Pt!==null&&(Pt=Pt.slice(e+1)),Zp(pc,mn),i}finally{Z=t,pa=!1}}return null}var Xn=[],Qn=0,Gs=null,Us=0,Je=[],Ze=0,Tn=null,Tt=1,Lt="";function gn(e,t){Xn[Qn++]=Us,Xn[Qn++]=Gs,Gs=e,Us=t}function Tf(e,t,n){Je[Ze++]=Tt,Je[Ze++]=Lt,Je[Ze++]=Tn,Tn=e;var r=Tt;e=Lt;var i=32-ut(r)-1;r&=~(1<<i),n+=1;var s=32-ut(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tt=1<<32-ut(t)+i|n<<i|r,Lt=s+e}else Tt=1<<s|n<<i|r,Lt=e}function kc(e){e.return!==null&&(gn(e,1),Tf(e,1,0))}function Sc(e){for(;e===Gs;)Gs=Xn[--Qn],Xn[Qn]=null,Us=Xn[--Qn],Xn[Qn]=null;for(;e===Tn;)Tn=Je[--Ze],Je[Ze]=null,Lt=Je[--Ze],Je[Ze]=null,Tt=Je[--Ze],Je[Ze]=null}var Ue=null,Ge=null,oe=!1,ct=null;function Lf(e,t){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ue=e,Ge=sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ue=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tn!==null?{id:Tt,overflow:Lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ue=e,Ge=null,!0):!1;default:return!1}}function ml(e){return(e.mode&1)!==0&&(e.flags&128)===0}function gl(e){if(oe){var t=Ge;if(t){var n=t;if(!Xu(e,t)){if(ml(e))throw Error(A(418));t=sn(n.nextSibling);var r=Ue;t&&Xu(e,t)?Lf(r,n):(e.flags=e.flags&-4097|2,oe=!1,Ue=e)}}else{if(ml(e))throw Error(A(418));e.flags=e.flags&-4097|2,oe=!1,Ue=e}}}function Qu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ue=e}function qi(e){if(e!==Ue)return!1;if(!oe)return Qu(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!dl(e.type,e.memoizedProps)),t&&(t=Ge)){if(ml(e))throw If(),Error(A(418));for(;t;)Lf(e,t),t=sn(t.nextSibling)}if(Qu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ge=sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=Ue?sn(e.stateNode.nextSibling):null;return!0}function If(){for(var e=Ge;e;)e=sn(e.nextSibling)}function ur(){Ge=Ue=null,oe=!1}function jc(e){ct===null?ct=[e]:ct.push(e)}var cv=Rt.ReactCurrentBatchConfig;function ot(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ws=hn(null),Ys=null,Jn=null,zc=null;function bc(){zc=Jn=Ys=null}function Cc(e){var t=Ws.current;re(Ws),e._currentValue=t}function vl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ir(e,t){Ys=e,zc=Jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Re=!0),e.firstContext=null)}function tt(e){var t=e._currentValue;if(zc!==e)if(e={context:e,memoizedValue:t,next:null},Jn===null){if(Ys===null)throw Error(A(308));Jn=e,Ys.dependencies={lanes:0,firstContext:e}}else Jn=Jn.next=e;return t}var wn=null;function Ec(e){wn===null?wn=[e]:wn.push(e)}function Mf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ec(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ot(e,r)}function Ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wt=!1;function Pc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function It(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function on(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ot(e,n)}return i=r.interleaved,i===null?(t.next=t,Ec(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ot(e,n)}function xs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fc(e,n)}}function Ju(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ks(e,t,n,r){var i=e.updateQueue;Wt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,d=a.next;a.next=null,o===null?s=d:o.next=d,o=a;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=a))}if(s!==null){var h=i.baseState;o=0,f=d=a=null,l=s;do{var g=l.lane,x=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,y=l;switch(g=t,x=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){h=v.call(x,h,g);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,g=typeof v=="function"?v.call(x,h,g):v,g==null)break e;h=de({},h,g);break e;case 2:Wt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else x={eventTime:x,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=x,a=h):f=f.next=x,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(a=h),i.baseState=a,i.firstBaseUpdate=d,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);In|=o,e.lanes=o,e.memoizedState=h}}function Zu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var Of=new Ip.Component().refs;function xl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:de({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var So={isMounted:function(e){return(e=e._reactInternals)?Rn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=ln(e),s=It(r,i);s.payload=t,n!=null&&(s.callback=n),t=on(e,s,i),t!==null&&(dt(t,e,i,r),xs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=ln(e),s=It(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=on(e,s,i),t!==null&&(dt(t,e,i,r),xs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=ln(e),i=It(n,r);i.tag=2,t!=null&&(i.callback=t),t=on(e,i,r),t!==null&&(dt(t,e,r,n),xs(t,e,r))}};function qu(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!di(n,r)||!di(i,s):!0}function $f(e,t,n){var r=!1,i=pn,s=t.contextType;return typeof s=="object"&&s!==null?s=tt(s):(i=Be(t)?Pn:Te.current,r=t.contextTypes,s=(r=r!=null)?cr(e,i):pn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=So,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function ed(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&So.enqueueReplaceState(t,t.state,null)}function yl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Of,Pc(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=tt(s):(s=Be(t)?Pn:Te.current,i.context=cr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(xl(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&So.enqueueReplaceState(i,i.state,null),Ks(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;l===Of&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function es(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function td(e){var t=e._init;return t(e._payload)}function _f(e){function t(u,p){if(e){var m=u.deletions;m===null?(u.deletions=[p],u.flags|=16):m.push(p)}}function n(u,p){if(!e)return null;for(;p!==null;)t(u,p),p=p.sibling;return null}function r(u,p){for(u=new Map;p!==null;)p.key!==null?u.set(p.key,p):u.set(p.index,p),p=p.sibling;return u}function i(u,p){return u=cn(u,p),u.index=0,u.sibling=null,u}function s(u,p,m){return u.index=m,e?(m=u.alternate,m!==null?(m=m.index,m<p?(u.flags|=2,p):m):(u.flags|=2,p)):(u.flags|=1048576,p)}function o(u){return e&&u.alternate===null&&(u.flags|=2),u}function l(u,p,m,w){return p===null||p.tag!==6?(p=ya(m,u.mode,w),p.return=u,p):(p=i(p,m),p.return=u,p)}function a(u,p,m,w){var z=m.type;return z===Hn?f(u,p,m.props.children,w,m.key):p!==null&&(p.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ut&&td(z)===p.type)?(w=i(p,m.props),w.ref=Nr(u,p,m),w.return=u,w):(w=zs(m.type,m.key,m.props,null,u.mode,w),w.ref=Nr(u,p,m),w.return=u,w)}function d(u,p,m,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=wa(m,u.mode,w),p.return=u,p):(p=i(p,m.children||[]),p.return=u,p)}function f(u,p,m,w,z){return p===null||p.tag!==7?(p=bn(m,u.mode,w,z),p.return=u,p):(p=i(p,m),p.return=u,p)}function h(u,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ya(""+p,u.mode,m),p.return=u,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Hi:return m=zs(p.type,p.key,p.props,null,u.mode,m),m.ref=Nr(u,null,p),m.return=u,m;case Vn:return p=wa(p,u.mode,m),p.return=u,p;case Ut:var w=p._init;return h(u,w(p._payload),m)}if(Dr(p)||Pr(p))return p=bn(p,u.mode,m,null),p.return=u,p;es(u,p)}return null}function g(u,p,m,w){var z=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return z!==null?null:l(u,p,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Hi:return m.key===z?a(u,p,m,w):null;case Vn:return m.key===z?d(u,p,m,w):null;case Ut:return z=m._init,g(u,p,z(m._payload),w)}if(Dr(m)||Pr(m))return z!==null?null:f(u,p,m,w,null);es(u,m)}return null}function x(u,p,m,w,z){if(typeof w=="string"&&w!==""||typeof w=="number")return u=u.get(m)||null,l(p,u,""+w,z);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Hi:return u=u.get(w.key===null?m:w.key)||null,a(p,u,w,z);case Vn:return u=u.get(w.key===null?m:w.key)||null,d(p,u,w,z);case Ut:var b=w._init;return x(u,p,m,b(w._payload),z)}if(Dr(w)||Pr(w))return u=u.get(m)||null,f(p,u,w,z,null);es(p,w)}return null}function v(u,p,m,w){for(var z=null,b=null,I=p,k=p=0,L=null;I!==null&&k<m.length;k++){I.index>k?(L=I,I=null):L=I.sibling;var S=g(u,I,m[k],w);if(S===null){I===null&&(I=L);break}e&&I&&S.alternate===null&&t(u,I),p=s(S,p,k),b===null?z=S:b.sibling=S,b=S,I=L}if(k===m.length)return n(u,I),oe&&gn(u,k),z;if(I===null){for(;k<m.length;k++)I=h(u,m[k],w),I!==null&&(p=s(I,p,k),b===null?z=I:b.sibling=I,b=I);return oe&&gn(u,k),z}for(I=r(u,I);k<m.length;k++)L=x(I,u,k,m[k],w),L!==null&&(e&&L.alternate!==null&&I.delete(L.key===null?k:L.key),p=s(L,p,k),b===null?z=L:b.sibling=L,b=L);return e&&I.forEach(function(N){return t(u,N)}),oe&&gn(u,k),z}function y(u,p,m,w){var z=Pr(m);if(typeof z!="function")throw Error(A(150));if(m=z.call(m),m==null)throw Error(A(151));for(var b=z=null,I=p,k=p=0,L=null,S=m.next();I!==null&&!S.done;k++,S=m.next()){I.index>k?(L=I,I=null):L=I.sibling;var N=g(u,I,S.value,w);if(N===null){I===null&&(I=L);break}e&&I&&N.alternate===null&&t(u,I),p=s(N,p,k),b===null?z=N:b.sibling=N,b=N,I=L}if(S.done)return n(u,I),oe&&gn(u,k),z;if(I===null){for(;!S.done;k++,S=m.next())S=h(u,S.value,w),S!==null&&(p=s(S,p,k),b===null?z=S:b.sibling=S,b=S);return oe&&gn(u,k),z}for(I=r(u,I);!S.done;k++,S=m.next())S=x(I,u,k,S.value,w),S!==null&&(e&&S.alternate!==null&&I.delete(S.key===null?k:S.key),p=s(S,p,k),b===null?z=S:b.sibling=S,b=S);return e&&I.forEach(function(M){return t(u,M)}),oe&&gn(u,k),z}function j(u,p,m,w){if(typeof m=="object"&&m!==null&&m.type===Hn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Hi:e:{for(var z=m.key,b=p;b!==null;){if(b.key===z){if(z=m.type,z===Hn){if(b.tag===7){n(u,b.sibling),p=i(b,m.props.children),p.return=u,u=p;break e}}else if(b.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ut&&td(z)===b.type){n(u,b.sibling),p=i(b,m.props),p.ref=Nr(u,b,m),p.return=u,u=p;break e}n(u,b);break}else t(u,b);b=b.sibling}m.type===Hn?(p=bn(m.props.children,u.mode,w,m.key),p.return=u,u=p):(w=zs(m.type,m.key,m.props,null,u.mode,w),w.ref=Nr(u,p,m),w.return=u,u=w)}return o(u);case Vn:e:{for(b=m.key;p!==null;){if(p.key===b)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(u,p.sibling),p=i(p,m.children||[]),p.return=u,u=p;break e}else{n(u,p);break}else t(u,p);p=p.sibling}p=wa(m,u.mode,w),p.return=u,u=p}return o(u);case Ut:return b=m._init,j(u,p,b(m._payload),w)}if(Dr(m))return v(u,p,m,w);if(Pr(m))return y(u,p,m,w);es(u,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(u,p.sibling),p=i(p,m),p.return=u,u=p):(n(u,p),p=ya(m,u.mode,w),p.return=u,u=p),o(u)):n(u,p)}return j}var dr=_f(!0),Af=_f(!1),$i={},jt=hn($i),mi=hn($i),gi=hn($i);function kn(e){if(e===$i)throw Error(A(174));return e}function Tc(e,t){switch(q(gi,t),q(mi,e),q(jt,$i),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ja(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ja(t,e)}re(jt),q(jt,t)}function pr(){re(jt),re(mi),re(gi)}function Rf(e){kn(gi.current);var t=kn(jt.current),n=Ja(t,e.type);t!==n&&(q(mi,e),q(jt,n))}function Lc(e){mi.current===e&&(re(jt),re(mi))}var le=hn(0);function Xs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fa=[];function Ic(){for(var e=0;e<fa.length;e++)fa[e]._workInProgressVersionPrimary=null;fa.length=0}var ys=Rt.ReactCurrentDispatcher,ha=Rt.ReactCurrentBatchConfig,Ln=0,ce=null,ve=null,we=null,Qs=!1,Jr=!1,vi=0,uv=0;function Ce(){throw Error(A(321))}function Mc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function Nc(e,t,n,r,i,s){if(Ln=s,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ys.current=e===null||e.memoizedState===null?hv:mv,e=n(r,i),Jr){s=0;do{if(Jr=!1,vi=0,25<=s)throw Error(A(301));s+=1,we=ve=null,t.updateQueue=null,ys.current=gv,e=n(r,i)}while(Jr)}if(ys.current=Js,t=ve!==null&&ve.next!==null,Ln=0,we=ve=ce=null,Qs=!1,t)throw Error(A(300));return e}function Oc(){var e=vi!==0;return vi=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?ce.memoizedState=we=e:we=we.next=e,we}function nt(){if(ve===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=we===null?ce.memoizedState:we.next;if(t!==null)we=t,ve=e;else{if(e===null)throw Error(A(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},we===null?ce.memoizedState=we=e:we=we.next=e}return we}function xi(e,t){return typeof t=="function"?t(e):t}function ma(e){var t=nt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,d=s;do{var f=d.lane;if((Ln&f)===f)a!==null&&(a=a.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};a===null?(l=a=h,o=r):a=a.next=h,ce.lanes|=f,In|=f}d=d.next}while(d!==null&&d!==s);a===null?o=r:a.next=l,ht(r,t.memoizedState)||(Re=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,ce.lanes|=s,In|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ga(e){var t=nt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);ht(s,t.memoizedState)||(Re=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Df(){}function Bf(e,t){var n=ce,r=nt(),i=t(),s=!ht(r.memoizedState,i);if(s&&(r.memoizedState=i,Re=!0),r=r.queue,$c(Hf.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,yi(9,Vf.bind(null,n,r,i,t),void 0,null),Se===null)throw Error(A(349));Ln&30||Ff(n,t,i)}return i}function Ff(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vf(e,t,n,r){t.value=n,t.getSnapshot=r,Gf(t)&&Uf(e)}function Hf(e,t,n){return n(function(){Gf(t)&&Uf(e)})}function Gf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function Uf(e){var t=Ot(e,1);t!==null&&dt(t,e,1,-1)}function nd(e){var t=xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:e},t.queue=e,e=e.dispatch=fv.bind(null,ce,e),[t.memoizedState,e]}function yi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wf(){return nt().memoizedState}function ws(e,t,n,r){var i=xt();ce.flags|=e,i.memoizedState=yi(1|t,n,void 0,r===void 0?null:r)}function jo(e,t,n,r){var i=nt();r=r===void 0?null:r;var s=void 0;if(ve!==null){var o=ve.memoizedState;if(s=o.destroy,r!==null&&Mc(r,o.deps)){i.memoizedState=yi(t,n,s,r);return}}ce.flags|=e,i.memoizedState=yi(1|t,n,s,r)}function rd(e,t){return ws(8390656,8,e,t)}function $c(e,t){return jo(2048,8,e,t)}function Yf(e,t){return jo(4,2,e,t)}function Kf(e,t){return jo(4,4,e,t)}function Xf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qf(e,t,n){return n=n!=null?n.concat([e]):null,jo(4,4,Xf.bind(null,t,e),n)}function _c(){}function Jf(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zf(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qf(e,t,n){return Ln&21?(ht(n,t)||(n=tf(),ce.lanes|=n,In|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n)}function dv(e,t){var n=Z;Z=n!==0&&4>n?n:4,e(!0);var r=ha.transition;ha.transition={};try{e(!1),t()}finally{Z=n,ha.transition=r}}function eh(){return nt().memoizedState}function pv(e,t,n){var r=ln(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},th(e))nh(t,n);else if(n=Mf(e,t,n,r),n!==null){var i=Ne();dt(n,e,r,i),rh(n,t,r)}}function fv(e,t,n){var r=ln(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(th(e))nh(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ht(l,o)){var a=t.interleaved;a===null?(i.next=i,Ec(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Mf(e,t,i,r),n!==null&&(i=Ne(),dt(n,e,r,i),rh(n,t,r))}}function th(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function nh(e,t){Jr=Qs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function rh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fc(e,n)}}var Js={readContext:tt,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},hv={readContext:tt,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:rd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ws(4194308,4,Xf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ws(4194308,4,e,t)},useInsertionEffect:function(e,t){return ws(4,2,e,t)},useMemo:function(e,t){var n=xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=pv.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:nd,useDebugValue:_c,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=nd(!1),t=e[0];return e=dv.bind(null,e[1]),xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ce,i=xt();if(oe){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),Se===null)throw Error(A(349));Ln&30||Ff(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,rd(Hf.bind(null,r,s,e),[e]),r.flags|=2048,yi(9,Vf.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=xt(),t=Se.identifierPrefix;if(oe){var n=Lt,r=Tt;n=(r&~(1<<32-ut(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=vi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=uv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},mv={readContext:tt,useCallback:Jf,useContext:tt,useEffect:$c,useImperativeHandle:Qf,useInsertionEffect:Yf,useLayoutEffect:Kf,useMemo:Zf,useReducer:ma,useRef:Wf,useState:function(){return ma(xi)},useDebugValue:_c,useDeferredValue:function(e){var t=nt();return qf(t,ve.memoizedState,e)},useTransition:function(){var e=ma(xi)[0],t=nt().memoizedState;return[e,t]},useMutableSource:Df,useSyncExternalStore:Bf,useId:eh,unstable_isNewReconciler:!1},gv={readContext:tt,useCallback:Jf,useContext:tt,useEffect:$c,useImperativeHandle:Qf,useInsertionEffect:Yf,useLayoutEffect:Kf,useMemo:Zf,useReducer:ga,useRef:Wf,useState:function(){return ga(xi)},useDebugValue:_c,useDeferredValue:function(e){var t=nt();return ve===null?t.memoizedState=e:qf(t,ve.memoizedState,e)},useTransition:function(){var e=ga(xi)[0],t=nt().memoizedState;return[e,t]},useMutableSource:Df,useSyncExternalStore:Bf,useId:eh,unstable_isNewReconciler:!1};function fr(e,t){try{var n="",r=t;do n+=Gg(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function va(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function wl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var vv=typeof WeakMap=="function"?WeakMap:Map;function ih(e,t,n){n=It(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qs||(qs=!0,Ll=r),wl(e,t)},n}function sh(e,t,n){n=It(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){wl(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wl(e,t),typeof r!="function"&&(an===null?an=new Set([this]):an.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function id(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new vv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Iv.bind(null,e,t,n),t.then(e,e))}function sd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function od(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=It(-1,1),t.tag=2,on(n,t,1))),n.lanes|=1),e)}var xv=Rt.ReactCurrentOwner,Re=!1;function Me(e,t,n,r){t.child=e===null?Af(t,null,n,r):dr(t,e.child,n,r)}function ad(e,t,n,r,i){n=n.render;var s=t.ref;return ir(t,i),r=Nc(e,t,n,r,s,i),n=Oc(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,$t(e,t,i)):(oe&&n&&kc(t),t.flags|=1,Me(e,t,r,i),t.child)}function ld(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Gc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,oh(e,t,s,r,i)):(e=zs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:di,n(o,r)&&e.ref===t.ref)return $t(e,t,i)}return t.flags|=1,e=cn(s,r),e.ref=t.ref,e.return=t,t.child=e}function oh(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(di(s,r)&&e.ref===t.ref)if(Re=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Re=!0);else return t.lanes=e.lanes,$t(e,t,i)}return kl(e,t,n,r,i)}function ah(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(qn,Ve),Ve|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(qn,Ve),Ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,q(qn,Ve),Ve|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,q(qn,Ve),Ve|=r;return Me(e,t,i,n),t.child}function lh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function kl(e,t,n,r,i){var s=Be(n)?Pn:Te.current;return s=cr(t,s),ir(t,i),n=Nc(e,t,n,r,s,i),r=Oc(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,$t(e,t,i)):(oe&&r&&kc(t),t.flags|=1,Me(e,t,n,i),t.child)}function cd(e,t,n,r,i){if(Be(n)){var s=!0;Hs(t)}else s=!1;if(ir(t,i),t.stateNode===null)ks(e,t),$f(t,n,r),yl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var a=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=tt(d):(d=Be(n)?Pn:Te.current,d=cr(t,d));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==d)&&ed(t,o,r,d),Wt=!1;var g=t.memoizedState;o.state=g,Ks(t,r,o,i),a=t.memoizedState,l!==r||g!==a||De.current||Wt?(typeof f=="function"&&(xl(t,n,f,r),a=t.memoizedState),(l=Wt||qu(t,n,l,r,g,a,d))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Nf(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:ot(t.type,l),o.props=d,h=t.pendingProps,g=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=tt(a):(a=Be(n)?Pn:Te.current,a=cr(t,a));var x=n.getDerivedStateFromProps;(f=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==h||g!==a)&&ed(t,o,r,a),Wt=!1,g=t.memoizedState,o.state=g,Ks(t,r,o,i);var v=t.memoizedState;l!==h||g!==v||De.current||Wt?(typeof x=="function"&&(xl(t,n,x,r),v=t.memoizedState),(d=Wt||qu(t,n,d,r,g,v,a)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=a,r=d):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Sl(e,t,n,r,s,i)}function Sl(e,t,n,r,i,s){lh(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Ku(t,n,!1),$t(e,t,s);r=t.stateNode,xv.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=dr(t,e.child,null,s),t.child=dr(t,null,l,s)):Me(e,t,l,s),t.memoizedState=r.state,i&&Ku(t,n,!0),t.child}function ch(e){var t=e.stateNode;t.pendingContext?Yu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Yu(e,t.context,!1),Tc(e,t.containerInfo)}function ud(e,t,n,r,i){return ur(),jc(i),t.flags|=256,Me(e,t,n,r),t.child}var jl={dehydrated:null,treeContext:null,retryLane:0};function zl(e){return{baseLanes:e,cachePool:null,transitions:null}}function uh(e,t,n){var r=t.pendingProps,i=le.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),q(le,i&1),e===null)return gl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Co(o,r,0,null),e=bn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=zl(n),t.memoizedState=jl,e):Ac(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return yv(e,t,o,r,l,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=cn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=cn(l,s):(s=bn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?zl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=jl,r}return s=e.child,e=s.sibling,r=cn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ac(e,t){return t=Co({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ts(e,t,n,r){return r!==null&&jc(r),dr(t,e.child,null,n),e=Ac(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yv(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=va(Error(A(422))),ts(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Co({mode:"visible",children:r.children},i,0,null),s=bn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&dr(t,e.child,null,o),t.child.memoizedState=zl(o),t.memoizedState=jl,s);if(!(t.mode&1))return ts(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(A(419)),r=va(s,r,void 0),ts(e,t,o,r)}if(l=(o&e.childLanes)!==0,Re||l){if(r=Se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ot(e,i),dt(r,e,i,-1))}return Hc(),r=va(Error(A(421))),ts(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Mv.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ge=sn(i.nextSibling),Ue=t,oe=!0,ct=null,e!==null&&(Je[Ze++]=Tt,Je[Ze++]=Lt,Je[Ze++]=Tn,Tt=e.id,Lt=e.overflow,Tn=t),t=Ac(t,r.children),t.flags|=4096,t)}function dd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),vl(e.return,t,n)}function xa(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function dh(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Me(e,t,r.children,n),r=le.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dd(e,n,t);else if(e.tag===19)dd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(le,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Xs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),xa(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Xs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}xa(t,!0,n,null,s);break;case"together":xa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ks(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wv(e,t,n){switch(t.tag){case 3:ch(t),ur();break;case 5:Rf(t);break;case 1:Be(t.type)&&Hs(t);break;case 4:Tc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;q(Ws,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(le,le.current&1),t.flags|=128,null):n&t.child.childLanes?uh(e,t,n):(q(le,le.current&1),e=$t(e,t,n),e!==null?e.sibling:null);q(le,le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return dh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(le,le.current),r)break;return null;case 22:case 23:return t.lanes=0,ah(e,t,n)}return $t(e,t,n)}var ph,bl,fh,hh;ph=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bl=function(){};fh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,kn(jt.current);var s=null;switch(n){case"input":i=Ya(e,i),r=Ya(e,r),s=[];break;case"select":i=de({},i,{value:void 0}),r=de({},r,{value:void 0}),s=[];break;case"textarea":i=Qa(e,i),r=Qa(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Fs)}Za(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(ii.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var a=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&a!==l&&(a!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(d,n)),n=a;else d==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(d,a)):d==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(d,""+a):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(ii.hasOwnProperty(d)?(a!=null&&d==="onScroll"&&te("scroll",e),s||l===a||(s=[])):(s=s||[]).push(d,a))}n&&(s=s||[]).push("style",n);var d=s;(t.updateQueue=d)&&(t.flags|=4)}};hh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Or(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function kv(e,t,n){var r=t.pendingProps;switch(Sc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Be(t.type)&&Vs(),Ee(t),null;case 3:return r=t.stateNode,pr(),re(De),re(Te),Ic(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(qi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ct!==null&&(Nl(ct),ct=null))),bl(e,t),Ee(t),null;case 5:Lc(t);var i=kn(gi.current);if(n=t.type,e!==null&&t.stateNode!=null)fh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return Ee(t),null}if(e=kn(jt.current),qi(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[yt]=t,r[hi]=s,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<Fr.length;i++)te(Fr[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":wu(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":Su(r,s),te("invalid",r)}Za(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Zi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Zi(r.textContent,l,e),i=["children",""+l]):ii.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&te("scroll",r)}switch(n){case"input":Gi(r),ku(r,s,!0);break;case"textarea":Gi(r),ju(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Fs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[yt]=t,e[hi]=r,ph(e,t,!1,!1),t.stateNode=e;e:{switch(o=qa(n,r),n){case"dialog":te("cancel",e),te("close",e),i=r;break;case"iframe":case"object":case"embed":te("load",e),i=r;break;case"video":case"audio":for(i=0;i<Fr.length;i++)te(Fr[i],e);i=r;break;case"source":te("error",e),i=r;break;case"img":case"image":case"link":te("error",e),te("load",e),i=r;break;case"details":te("toggle",e),i=r;break;case"input":wu(e,r),i=Ya(e,r),te("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=de({},r,{value:void 0}),te("invalid",e);break;case"textarea":Su(e,r),i=Qa(e,r),te("invalid",e);break;default:i=r}Za(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Hp(e,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Fp(e,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&si(e,a):typeof a=="number"&&si(e,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ii.hasOwnProperty(s)?a!=null&&s==="onScroll"&&te("scroll",e):a!=null&&ac(e,s,a,o))}switch(n){case"input":Gi(e),ku(e,r,!1);break;case"textarea":Gi(e),ju(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?er(e,!!r.multiple,s,!1):r.defaultValue!=null&&er(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Fs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)hh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=kn(gi.current),kn(jt.current),qi(t)){if(r=t.stateNode,n=t.memoizedProps,r[yt]=t,(s=r.nodeValue!==n)&&(e=Ue,e!==null))switch(e.tag){case 3:Zi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zi(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yt]=t,t.stateNode=r}return Ee(t),null;case 13:if(re(le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Ge!==null&&t.mode&1&&!(t.flags&128))If(),ur(),t.flags|=98560,s=!1;else if(s=qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(A(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[yt]=t}else ur(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ee(t),s=!1}else ct!==null&&(Nl(ct),ct=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||le.current&1?ye===0&&(ye=3):Hc())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return pr(),bl(e,t),e===null&&pi(t.stateNode.containerInfo),Ee(t),null;case 10:return Cc(t.type._context),Ee(t),null;case 17:return Be(t.type)&&Vs(),Ee(t),null;case 19:if(re(le),s=t.memoizedState,s===null)return Ee(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Or(s,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Xs(e),o!==null){for(t.flags|=128,Or(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(le,le.current&1|2),t.child}e=e.sibling}s.tail!==null&&fe()>hr&&(t.flags|=128,r=!0,Or(s,!1),t.lanes=4194304)}else{if(!r)if(e=Xs(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Or(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!oe)return Ee(t),null}else 2*fe()-s.renderingStartTime>hr&&n!==1073741824&&(t.flags|=128,r=!0,Or(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=fe(),t.sibling=null,n=le.current,q(le,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return Vc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ve&1073741824&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function Sv(e,t){switch(Sc(t),t.tag){case 1:return Be(t.type)&&Vs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pr(),re(De),re(Te),Ic(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Lc(t),null;case 13:if(re(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));ur()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(le),null;case 4:return pr(),null;case 10:return Cc(t.type._context),null;case 22:case 23:return Vc(),null;case 24:return null;default:return null}}var ns=!1,Pe=!1,jv=typeof WeakSet=="function"?WeakSet:Set,D=null;function Zn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){pe(e,t,r)}else n.current=null}function Cl(e,t,n){try{n()}catch(r){pe(e,t,r)}}var pd=!1;function zv(e,t){if(cl=Rs,e=xf(),wc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,d=0,f=0,h=e,g=null;t:for(;;){for(var x;h!==n||i!==0&&h.nodeType!==3||(l=o+i),h!==s||r!==0&&h.nodeType!==3||(a=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(x=h.firstChild)!==null;)g=h,h=x;for(;;){if(h===e)break t;if(g===n&&++d===i&&(l=o),g===s&&++f===r&&(a=o),(x=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=x}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ul={focusedElem:e,selectionRange:n},Rs=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,j=v.memoizedState,u=t.stateNode,p=u.getSnapshotBeforeUpdate(t.elementType===t.type?y:ot(t.type,y),j);u.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(w){pe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return v=pd,pd=!1,v}function Zr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Cl(t,n,s)}i=i.next}while(i!==r)}}function zo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function El(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function mh(e){var t=e.alternate;t!==null&&(e.alternate=null,mh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yt],delete t[hi],delete t[fl],delete t[ov],delete t[av])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gh(e){return e.tag===5||e.tag===3||e.tag===4}function fd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fs));else if(r!==4&&(e=e.child,e!==null))for(Pl(e,t,n),e=e.sibling;e!==null;)Pl(e,t,n),e=e.sibling}function Tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Tl(e,t,n),e=e.sibling;e!==null;)Tl(e,t,n),e=e.sibling}var je=null,at=!1;function Ht(e,t,n){for(n=n.child;n!==null;)vh(e,t,n),n=n.sibling}function vh(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(go,n)}catch{}switch(n.tag){case 5:Pe||Zn(n,t);case 6:var r=je,i=at;je=null,Ht(e,t,n),je=r,at=i,je!==null&&(at?(e=je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(at?(e=je,n=n.stateNode,e.nodeType===8?da(e.parentNode,n):e.nodeType===1&&da(e,n),ci(e)):da(je,n.stateNode));break;case 4:r=je,i=at,je=n.stateNode.containerInfo,at=!0,Ht(e,t,n),je=r,at=i;break;case 0:case 11:case 14:case 15:if(!Pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Cl(n,t,o),i=i.next}while(i!==r)}Ht(e,t,n);break;case 1:if(!Pe&&(Zn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){pe(n,t,l)}Ht(e,t,n);break;case 21:Ht(e,t,n);break;case 22:n.mode&1?(Pe=(r=Pe)||n.memoizedState!==null,Ht(e,t,n),Pe=r):Ht(e,t,n);break;default:Ht(e,t,n)}}function hd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new jv),t.forEach(function(r){var i=Nv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function st(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:je=l.stateNode,at=!1;break e;case 3:je=l.stateNode.containerInfo,at=!0;break e;case 4:je=l.stateNode.containerInfo,at=!0;break e}l=l.return}if(je===null)throw Error(A(160));vh(s,o,i),je=null,at=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(d){pe(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xh(t,e),t=t.sibling}function xh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(st(t,e),gt(e),r&4){try{Zr(3,e,e.return),zo(3,e)}catch(y){pe(e,e.return,y)}try{Zr(5,e,e.return)}catch(y){pe(e,e.return,y)}}break;case 1:st(t,e),gt(e),r&512&&n!==null&&Zn(n,n.return);break;case 5:if(st(t,e),gt(e),r&512&&n!==null&&Zn(n,n.return),e.flags&32){var i=e.stateNode;try{si(i,"")}catch(y){pe(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Rp(i,s),qa(l,o);var d=qa(l,s);for(o=0;o<a.length;o+=2){var f=a[o],h=a[o+1];f==="style"?Hp(i,h):f==="dangerouslySetInnerHTML"?Fp(i,h):f==="children"?si(i,h):ac(i,f,h,d)}switch(l){case"input":Ka(i,s);break;case"textarea":Dp(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?er(i,!!s.multiple,x,!1):g!==!!s.multiple&&(s.defaultValue!=null?er(i,!!s.multiple,s.defaultValue,!0):er(i,!!s.multiple,s.multiple?[]:"",!1))}i[hi]=s}catch(y){pe(e,e.return,y)}}break;case 6:if(st(t,e),gt(e),r&4){if(e.stateNode===null)throw Error(A(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(y){pe(e,e.return,y)}}break;case 3:if(st(t,e),gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ci(t.containerInfo)}catch(y){pe(e,e.return,y)}break;case 4:st(t,e),gt(e);break;case 13:st(t,e),gt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Bc=fe())),r&4&&hd(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Pe=(d=Pe)||f,st(t,e),Pe=d):st(t,e),gt(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!f&&e.mode&1)for(D=e,f=e.child;f!==null;){for(h=D=f;D!==null;){switch(g=D,x=g.child,g.tag){case 0:case 11:case 14:case 15:Zr(4,g,g.return);break;case 1:Zn(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){pe(r,n,y)}}break;case 5:Zn(g,g.return);break;case 22:if(g.memoizedState!==null){gd(h);continue}}x!==null?(x.return=g,D=x):gd(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{i=h.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=h.stateNode,a=h.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Vp("display",o))}catch(y){pe(e,e.return,y)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(y){pe(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:st(t,e),gt(e),r&4&&hd(e);break;case 21:break;default:st(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gh(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(si(i,""),r.flags&=-33);var s=fd(e);Tl(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=fd(e);Pl(e,l,o);break;default:throw Error(A(161))}}catch(a){pe(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bv(e,t,n){D=e,yh(e)}function yh(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ns;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Pe;l=ns;var d=Pe;if(ns=o,(Pe=a)&&!d)for(D=i;D!==null;)o=D,a=o.child,o.tag===22&&o.memoizedState!==null?vd(i):a!==null?(a.return=o,D=a):vd(i);for(;s!==null;)D=s,yh(s),s=s.sibling;D=i,ns=l,Pe=d}md(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,D=s):md(e)}}function md(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pe||zo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ot(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Zu(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zu(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&ci(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Pe||t.flags&512&&El(t)}catch(g){pe(t,t.return,g)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function gd(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function vd(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zo(4,t)}catch(a){pe(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){pe(t,i,a)}}var s=t.return;try{El(t)}catch(a){pe(t,s,a)}break;case 5:var o=t.return;try{El(t)}catch(a){pe(t,o,a)}}}catch(a){pe(t,t.return,a)}if(t===e){D=null;break}var l=t.sibling;if(l!==null){l.return=t.return,D=l;break}D=t.return}}var Cv=Math.ceil,Zs=Rt.ReactCurrentDispatcher,Rc=Rt.ReactCurrentOwner,et=Rt.ReactCurrentBatchConfig,X=0,Se=null,me=null,ze=0,Ve=0,qn=hn(0),ye=0,wi=null,In=0,bo=0,Dc=0,qr=null,_e=null,Bc=0,hr=1/0,Ct=null,qs=!1,Ll=null,an=null,rs=!1,Jt=null,eo=0,ei=0,Il=null,Ss=-1,js=0;function Ne(){return X&6?fe():Ss!==-1?Ss:Ss=fe()}function ln(e){return e.mode&1?X&2&&ze!==0?ze&-ze:cv.transition!==null?(js===0&&(js=tf()),js):(e=Z,e!==0||(e=window.event,e=e===void 0?16:cf(e.type)),e):1}function dt(e,t,n,r){if(50<ei)throw ei=0,Il=null,Error(A(185));Mi(e,n,r),(!(X&2)||e!==Se)&&(e===Se&&(!(X&2)&&(bo|=n),ye===4&&Kt(e,ze)),Fe(e,r),n===1&&X===0&&!(t.mode&1)&&(hr=fe()+500,ko&&mn()))}function Fe(e,t){var n=e.callbackNode;c0(e,t);var r=As(e,e===Se?ze:0);if(r===0)n!==null&&Cu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Cu(n),t===1)e.tag===0?lv(xd.bind(null,e)):Pf(xd.bind(null,e)),iv(function(){!(X&6)&&mn()}),n=null;else{switch(nf(r)){case 1:n=pc;break;case 4:n=qp;break;case 16:n=_s;break;case 536870912:n=ef;break;default:n=_s}n=Eh(n,wh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wh(e,t){if(Ss=-1,js=0,X&6)throw Error(A(327));var n=e.callbackNode;if(sr()&&e.callbackNode!==n)return null;var r=As(e,e===Se?ze:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=to(e,r);else{t=r;var i=X;X|=2;var s=Sh();(Se!==e||ze!==t)&&(Ct=null,hr=fe()+500,zn(e,t));do try{Tv();break}catch(l){kh(e,l)}while(!0);bc(),Zs.current=s,X=i,me!==null?t=0:(Se=null,ze=0,t=ye)}if(t!==0){if(t===2&&(i=il(e),i!==0&&(r=i,t=Ml(e,i))),t===1)throw n=wi,zn(e,0),Kt(e,r),Fe(e,fe()),n;if(t===6)Kt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ev(i)&&(t=to(e,r),t===2&&(s=il(e),s!==0&&(r=s,t=Ml(e,s))),t===1))throw n=wi,zn(e,0),Kt(e,r),Fe(e,fe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:vn(e,_e,Ct);break;case 3:if(Kt(e,r),(r&130023424)===r&&(t=Bc+500-fe(),10<t)){if(As(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=pl(vn.bind(null,e,_e,Ct),t);break}vn(e,_e,Ct);break;case 4:if(Kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-ut(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cv(r/1960))-r,10<r){e.timeoutHandle=pl(vn.bind(null,e,_e,Ct),r);break}vn(e,_e,Ct);break;case 5:vn(e,_e,Ct);break;default:throw Error(A(329))}}}return Fe(e,fe()),e.callbackNode===n?wh.bind(null,e):null}function Ml(e,t){var n=qr;return e.current.memoizedState.isDehydrated&&(zn(e,t).flags|=256),e=to(e,t),e!==2&&(t=_e,_e=n,t!==null&&Nl(t)),e}function Nl(e){_e===null?_e=e:_e.push.apply(_e,e)}function Ev(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ht(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Kt(e,t){for(t&=~Dc,t&=~bo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ut(t),r=1<<n;e[n]=-1,t&=~r}}function xd(e){if(X&6)throw Error(A(327));sr();var t=As(e,0);if(!(t&1))return Fe(e,fe()),null;var n=to(e,t);if(e.tag!==0&&n===2){var r=il(e);r!==0&&(t=r,n=Ml(e,r))}if(n===1)throw n=wi,zn(e,0),Kt(e,t),Fe(e,fe()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vn(e,_e,Ct),Fe(e,fe()),null}function Fc(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(hr=fe()+500,ko&&mn())}}function Mn(e){Jt!==null&&Jt.tag===0&&!(X&6)&&sr();var t=X;X|=1;var n=et.transition,r=Z;try{if(et.transition=null,Z=1,e)return e()}finally{Z=r,et.transition=n,X=t,!(X&6)&&mn()}}function Vc(){Ve=qn.current,re(qn)}function zn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,rv(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(Sc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vs();break;case 3:pr(),re(De),re(Te),Ic();break;case 5:Lc(r);break;case 4:pr();break;case 13:re(le);break;case 19:re(le);break;case 10:Cc(r.type._context);break;case 22:case 23:Vc()}n=n.return}if(Se=e,me=e=cn(e.current,null),ze=Ve=t,ye=0,wi=null,Dc=bo=In=0,_e=qr=null,wn!==null){for(t=0;t<wn.length;t++)if(n=wn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}wn=null}return e}function kh(e,t){do{var n=me;try{if(bc(),ys.current=Js,Qs){for(var r=ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Qs=!1}if(Ln=0,we=ve=ce=null,Jr=!1,vi=0,Rc.current=null,n===null||n.return===null){ye=1,wi=t,me=null;break}e:{var s=e,o=n.return,l=n,a=t;if(t=ze,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var d=a,f=l,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var x=sd(o);if(x!==null){x.flags&=-257,od(x,o,l,s,t),x.mode&1&&id(s,d,t),t=x,a=d;var v=t.updateQueue;if(v===null){var y=new Set;y.add(a),t.updateQueue=y}else v.add(a);break e}else{if(!(t&1)){id(s,d,t),Hc();break e}a=Error(A(426))}}else if(oe&&l.mode&1){var j=sd(o);if(j!==null){!(j.flags&65536)&&(j.flags|=256),od(j,o,l,s,t),jc(fr(a,l));break e}}s=a=fr(a,l),ye!==4&&(ye=2),qr===null?qr=[s]:qr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var u=ih(s,a,t);Ju(s,u);break e;case 1:l=a;var p=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(an===null||!an.has(m)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=sh(s,l,t);Ju(s,w);break e}}s=s.return}while(s!==null)}zh(n)}catch(z){t=z,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function Sh(){var e=Zs.current;return Zs.current=Js,e===null?Js:e}function Hc(){(ye===0||ye===3||ye===2)&&(ye=4),Se===null||!(In&268435455)&&!(bo&268435455)||Kt(Se,ze)}function to(e,t){var n=X;X|=2;var r=Sh();(Se!==e||ze!==t)&&(Ct=null,zn(e,t));do try{Pv();break}catch(i){kh(e,i)}while(!0);if(bc(),X=n,Zs.current=r,me!==null)throw Error(A(261));return Se=null,ze=0,ye}function Pv(){for(;me!==null;)jh(me)}function Tv(){for(;me!==null&&!e0();)jh(me)}function jh(e){var t=Ch(e.alternate,e,Ve);e.memoizedProps=e.pendingProps,t===null?zh(e):me=t,Rc.current=null}function zh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Sv(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,me=null;return}}else if(n=kv(n,t,Ve),n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ye===0&&(ye=5)}function vn(e,t,n){var r=Z,i=et.transition;try{et.transition=null,Z=1,Lv(e,t,n,r)}finally{et.transition=i,Z=r}return null}function Lv(e,t,n,r){do sr();while(Jt!==null);if(X&6)throw Error(A(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(u0(e,s),e===Se&&(me=Se=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||rs||(rs=!0,Eh(_s,function(){return sr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=et.transition,et.transition=null;var o=Z;Z=1;var l=X;X|=4,Rc.current=null,zv(e,n),xh(n,e),Q0(ul),Rs=!!cl,ul=cl=null,e.current=n,bv(n),t0(),X=l,Z=o,et.transition=s}else e.current=n;if(rs&&(rs=!1,Jt=e,eo=i),s=e.pendingLanes,s===0&&(an=null),i0(n.stateNode),Fe(e,fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qs)throw qs=!1,e=Ll,Ll=null,e;return eo&1&&e.tag!==0&&sr(),s=e.pendingLanes,s&1?e===Il?ei++:(ei=0,Il=e):ei=0,mn(),null}function sr(){if(Jt!==null){var e=nf(eo),t=et.transition,n=Z;try{if(et.transition=null,Z=16>e?16:e,Jt===null)var r=!1;else{if(e=Jt,Jt=null,eo=0,X&6)throw Error(A(331));var i=X;for(X|=4,D=e.current;D!==null;){var s=D,o=s.child;if(D.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var d=l[a];for(D=d;D!==null;){var f=D;switch(f.tag){case 0:case 11:case 15:Zr(8,f,s)}var h=f.child;if(h!==null)h.return=f,D=h;else for(;D!==null;){f=D;var g=f.sibling,x=f.return;if(mh(f),f===d){D=null;break}if(g!==null){g.return=x,D=g;break}D=x}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var j=y.sibling;y.sibling=null,y=j}while(y!==null)}}D=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Zr(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,D=u;break e}D=s.return}}var p=e.current;for(D=p;D!==null;){o=D;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,D=m;else e:for(o=p;D!==null;){if(l=D,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:zo(9,l)}}catch(z){pe(l,l.return,z)}if(l===o){D=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,D=w;break e}D=l.return}}if(X=i,mn(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(go,e)}catch{}r=!0}return r}finally{Z=n,et.transition=t}}return!1}function yd(e,t,n){t=fr(n,t),t=ih(e,t,1),e=on(e,t,1),t=Ne(),e!==null&&(Mi(e,1,t),Fe(e,t))}function pe(e,t,n){if(e.tag===3)yd(e,e,n);else for(;t!==null;){if(t.tag===3){yd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(an===null||!an.has(r))){e=fr(n,e),e=sh(t,e,1),t=on(t,e,1),e=Ne(),t!==null&&(Mi(t,1,e),Fe(t,e));break}}t=t.return}}function Iv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,Se===e&&(ze&n)===n&&(ye===4||ye===3&&(ze&130023424)===ze&&500>fe()-Bc?zn(e,0):Dc|=n),Fe(e,t)}function bh(e,t){t===0&&(e.mode&1?(t=Yi,Yi<<=1,!(Yi&130023424)&&(Yi=4194304)):t=1);var n=Ne();e=Ot(e,t),e!==null&&(Mi(e,t,n),Fe(e,n))}function Mv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bh(e,n)}function Nv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),bh(e,n)}var Ch;Ch=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)Re=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Re=!1,wv(e,t,n);Re=!!(e.flags&131072)}else Re=!1,oe&&t.flags&1048576&&Tf(t,Us,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ks(e,t),e=t.pendingProps;var i=cr(t,Te.current);ir(t,n),i=Nc(null,t,r,e,i,n);var s=Oc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Be(r)?(s=!0,Hs(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Pc(t),i.updater=So,t.stateNode=i,i._reactInternals=t,yl(t,r,e,n),t=Sl(null,t,r,!0,s,n)):(t.tag=0,oe&&s&&kc(t),Me(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ks(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=$v(r),e=ot(r,e),i){case 0:t=kl(null,t,r,e,n);break e;case 1:t=cd(null,t,r,e,n);break e;case 11:t=ad(null,t,r,e,n);break e;case 14:t=ld(null,t,r,ot(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),kl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),cd(e,t,r,i,n);case 3:e:{if(ch(t),e===null)throw Error(A(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Nf(e,t),Ks(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=fr(Error(A(423)),t),t=ud(e,t,r,n,i);break e}else if(r!==i){i=fr(Error(A(424)),t),t=ud(e,t,r,n,i);break e}else for(Ge=sn(t.stateNode.containerInfo.firstChild),Ue=t,oe=!0,ct=null,n=Af(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ur(),r===i){t=$t(e,t,n);break e}Me(e,t,r,n)}t=t.child}return t;case 5:return Rf(t),e===null&&gl(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,dl(r,i)?o=null:s!==null&&dl(r,s)&&(t.flags|=32),lh(e,t),Me(e,t,o,n),t.child;case 6:return e===null&&gl(t),null;case 13:return uh(e,t,n);case 4:return Tc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=dr(t,null,r,n):Me(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),ad(e,t,r,i,n);case 7:return Me(e,t,t.pendingProps,n),t.child;case 8:return Me(e,t,t.pendingProps.children,n),t.child;case 12:return Me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,q(Ws,r._currentValue),r._currentValue=o,s!==null)if(ht(s.value,o)){if(s.children===i.children&&!De.current){t=$t(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=It(-1,n&-n),a.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?a.next=a:(a.next=f.next,f.next=a),d.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),vl(s.return,n,t),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),vl(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Me(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ir(t,n),i=tt(i),r=r(i),t.flags|=1,Me(e,t,r,n),t.child;case 14:return r=t.type,i=ot(r,t.pendingProps),i=ot(r.type,i),ld(e,t,r,i,n);case 15:return oh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),ks(e,t),t.tag=1,Be(r)?(e=!0,Hs(t)):e=!1,ir(t,n),$f(t,r,i),yl(t,r,i,n),Sl(null,t,r,!0,e,n);case 19:return dh(e,t,n);case 22:return ah(e,t,n)}throw Error(A(156,t.tag))};function Eh(e,t){return Zp(e,t)}function Ov(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,r){return new Ov(e,t,n,r)}function Gc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $v(e){if(typeof e=="function")return Gc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===cc)return 11;if(e===uc)return 14}return 2}function cn(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zs(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Gc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Hn:return bn(n.children,i,s,t);case lc:o=8,i|=8;break;case Ha:return e=qe(12,n,t,i|2),e.elementType=Ha,e.lanes=s,e;case Ga:return e=qe(13,n,t,i),e.elementType=Ga,e.lanes=s,e;case Ua:return e=qe(19,n,t,i),e.elementType=Ua,e.lanes=s,e;case $p:return Co(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Np:o=10;break e;case Op:o=9;break e;case cc:o=11;break e;case uc:o=14;break e;case Ut:o=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=qe(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function bn(e,t,n,r){return e=qe(7,e,r,t),e.lanes=n,e}function Co(e,t,n,r){return e=qe(22,e,r,t),e.elementType=$p,e.lanes=n,e.stateNode={isHidden:!1},e}function ya(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function wa(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _v(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ea(0),this.expirationTimes=ea(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ea(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Uc(e,t,n,r,i,s,o,l,a){return e=new _v(e,t,n,l,a),t===1?(t=1,s===!0&&(t|=8)):t=0,s=qe(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pc(s),e}function Av(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ph(e){if(!e)return pn;e=e._reactInternals;e:{if(Rn(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(Be(n))return Ef(e,n,t)}return t}function Th(e,t,n,r,i,s,o,l,a){return e=Uc(n,r,!0,e,i,s,o,l,a),e.context=Ph(null),n=e.current,r=Ne(),i=ln(n),s=It(r,i),s.callback=t??null,on(n,s,i),e.current.lanes=i,Mi(e,i,r),Fe(e,r),e}function Eo(e,t,n,r){var i=t.current,s=Ne(),o=ln(i);return n=Ph(n),t.context===null?t.context=n:t.pendingContext=n,t=It(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=on(i,t,o),e!==null&&(dt(e,i,o,s),xs(e,i,o)),o}function no(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Wc(e,t){wd(e,t),(e=e.alternate)&&wd(e,t)}function Rv(){return null}var Lh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yc(e){this._internalRoot=e}Po.prototype.render=Yc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));Eo(e,t,null,null)};Po.prototype.unmount=Yc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mn(function(){Eo(null,e,null,null)}),t[Nt]=null}};function Po(e){this._internalRoot=e}Po.prototype.unstable_scheduleHydration=function(e){if(e){var t=of();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yt.length&&t!==0&&t<Yt[n].priority;n++);Yt.splice(n,0,e),n===0&&lf(e)}};function Kc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function To(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function kd(){}function Dv(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=no(o);s.call(d)}}var o=Th(t,r,e,0,null,!1,!1,"",kd);return e._reactRootContainer=o,e[Nt]=o.current,pi(e.nodeType===8?e.parentNode:e),Mn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=no(a);l.call(d)}}var a=Uc(e,0,!1,null,null,!1,!1,"",kd);return e._reactRootContainer=a,e[Nt]=a.current,pi(e.nodeType===8?e.parentNode:e),Mn(function(){Eo(t,a,n,r)}),a}function Lo(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=no(o);l.call(a)}}Eo(t,o,e,i)}else o=Dv(n,t,e,i,r);return no(o)}rf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Br(t.pendingLanes);n!==0&&(fc(t,n|1),Fe(t,fe()),!(X&6)&&(hr=fe()+500,mn()))}break;case 13:Mn(function(){var r=Ot(e,1);if(r!==null){var i=Ne();dt(r,e,1,i)}}),Wc(e,1)}};hc=function(e){if(e.tag===13){var t=Ot(e,134217728);if(t!==null){var n=Ne();dt(t,e,134217728,n)}Wc(e,134217728)}};sf=function(e){if(e.tag===13){var t=ln(e),n=Ot(e,t);if(n!==null){var r=Ne();dt(n,e,t,r)}Wc(e,t)}};of=function(){return Z};af=function(e,t){var n=Z;try{return Z=e,t()}finally{Z=n}};tl=function(e,t,n){switch(t){case"input":if(Ka(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wo(r);if(!i)throw Error(A(90));Ap(r),Ka(r,i)}}}break;case"textarea":Dp(e,n);break;case"select":t=n.value,t!=null&&er(e,!!n.multiple,t,!1)}};Wp=Fc;Yp=Mn;var Bv={usingClientEntryPoint:!1,Events:[Oi,Yn,wo,Gp,Up,Fc]},$r={findFiberByHostInstance:yn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Fv={bundleType:$r.bundleType,version:$r.version,rendererPackageName:$r.rendererPackageName,rendererConfig:$r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qp(e),e===null?null:e.stateNode},findFiberByHostInstance:$r.findFiberByHostInstance||Rv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var is=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!is.isDisabled&&is.supportsFiber)try{go=is.inject(Fv),St=is}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bv;Ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kc(t))throw Error(A(200));return Av(e,t,null,n)};Ye.createRoot=function(e,t){if(!Kc(e))throw Error(A(299));var n=!1,r="",i=Lh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Uc(e,1,!1,null,null,n,!1,r,i),e[Nt]=t.current,pi(e.nodeType===8?e.parentNode:e),new Yc(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=Qp(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return Mn(e)};Ye.hydrate=function(e,t,n){if(!To(t))throw Error(A(200));return Lo(null,e,t,!0,n)};Ye.hydrateRoot=function(e,t,n){if(!Kc(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Lh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Th(t,null,e,1,n??null,i,!1,s,o),e[Nt]=t.current,pi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Po(t)};Ye.render=function(e,t,n){if(!To(t))throw Error(A(200));return Lo(null,e,t,!1,n)};Ye.unmountComponentAtNode=function(e){if(!To(e))throw Error(A(40));return e._reactRootContainer?(Mn(function(){Lo(null,null,e,!1,function(){e._reactRootContainer=null,e[Nt]=null})}),!0):!1};Ye.unstable_batchedUpdates=Fc;Ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!To(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return Lo(e,t,n,!1,r)};Ye.version="18.2.0-next-9e3b772b8-20220608";function Ih(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ih)}catch(e){console.error(e)}}Ih(),Pp.exports=Ye;var Vv=Pp.exports,Sd=Vv;Fa.createRoot=Sd.createRoot,Fa.hydrateRoot=Sd.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ki(){return ki=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ki.apply(null,arguments)}var Zt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Zt||(Zt={}));const jd="popstate";function Hv(e){e===void 0&&(e={});function t(i,s){let{pathname:o="/",search:l="",hash:a=""}=Dn(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Ol("",{pathname:o,search:l,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let a=i.location.href,d=a.indexOf("#");l=d===-1?a:a.slice(0,d)}return l+"#"+(typeof s=="string"?s:ro(s))}function r(i,s){Io(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return Uv(t,n,r,e)}function ue(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Io(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Gv(){return Math.random().toString(36).substr(2,8)}function zd(e,t){return{usr:e.state,key:e.key,idx:t}}function Ol(e,t,n,r){return n===void 0&&(n=null),ki({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Dn(t):t,{state:n,key:t&&t.key||r||Gv()})}function ro(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Dn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Uv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Zt.Pop,a=null,d=f();d==null&&(d=0,o.replaceState(ki({},o.state,{idx:d}),""));function f(){return(o.state||{idx:null}).idx}function h(){l=Zt.Pop;let j=f(),u=j==null?null:j-d;d=j,a&&a({action:l,location:y.location,delta:u})}function g(j,u){l=Zt.Push;let p=Ol(y.location,j,u);n&&n(p,j),d=f()+1;let m=zd(p,d),w=y.createHref(p);try{o.pushState(m,"",w)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;i.location.assign(w)}s&&a&&a({action:l,location:y.location,delta:1})}function x(j,u){l=Zt.Replace;let p=Ol(y.location,j,u);n&&n(p,j),d=f();let m=zd(p,d),w=y.createHref(p);o.replaceState(m,"",w),s&&a&&a({action:l,location:y.location,delta:0})}function v(j){let u=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof j=="string"?j:ro(j);return p=p.replace(/ $/,"%20"),ue(u,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,u)}let y={get action(){return l},get location(){return e(i,o)},listen(j){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(jd,h),a=j,()=>{i.removeEventListener(jd,h),a=null}},createHref(j){return t(i,j)},createURL:v,encodeLocation(j){let u=v(j);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:g,replace:x,go(j){return o.go(j)}};return y}var bd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(bd||(bd={}));function Wv(e,t,n){return n===void 0&&(n="/"),Yv(e,t,n)}function Yv(e,t,n,r){let i=typeof t=="string"?Dn(t):t,s=mr(i.pathname||"/",n);if(s==null)return null;let o=Mh(e);Kv(o);let l=null,a=s1(s);for(let d=0;l==null&&d<o.length;++d)l=r1(o[d],a);return l}function Mh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(ue(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let d=un([r,a.relativePath]),f=n.concat(a);s.children&&s.children.length>0&&(ue(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Mh(s.children,t,f,d)),!(s.path==null&&!s.index)&&t.push({path:d,score:t1(d,s.index),routesMeta:f})};return e.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of Nh(s.path))i(s,o,a)}),t}function Nh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Nh(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>e.startsWith("/")&&a===""?"/":a)}function Kv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:n1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Xv=/^:[\w-]+$/,Qv=3,Jv=2,Zv=1,qv=10,e1=-2,Cd=e=>e==="*";function t1(e,t){let n=e.split("/"),r=n.length;return n.some(Cd)&&(r+=e1),t&&(r+=Jv),n.filter(i=>!Cd(i)).reduce((i,s)=>i+(Xv.test(s)?Qv:s===""?Zv:qv),r)}function n1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function r1(e,t,n){let{routesMeta:r}=e,i={},s="/",o=[];for(let l=0;l<r.length;++l){let a=r[l],d=l===r.length-1,f=s==="/"?t:t.slice(s.length)||"/",h=$l({path:a.relativePath,caseSensitive:a.caseSensitive,end:d},f),g=a.route;if(!h)return null;Object.assign(i,h.params),o.push({params:i,pathname:un([s,h.pathname]),pathnameBase:u1(un([s,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(s=un([s,h.pathnameBase]))}return o}function $l(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=i1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((d,f,h)=>{let{paramName:g,isOptional:x}=f;if(g==="*"){let y=l[h]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const v=l[h];return x&&!v?d[g]=void 0:d[g]=(v||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:o,pattern:e}}function i1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Io(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function s1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Io(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function mr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const o1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,a1=e=>o1.test(e);function l1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Dn(e):e,s;if(n)if(a1(n))s=n;else{if(n.includes("//")){let o=n;n=Oh(n),Io(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Ed(n.substring(1),"/"):s=Ed(n,t)}else s=t;return{pathname:s,search:d1(r),hash:p1(i)}}function Ed(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ka(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function c1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Xc(e,t){let n=c1(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Qc(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Dn(e):(i=ki({},e),ue(!i.pathname||!i.pathname.includes("?"),ka("?","pathname","search",i)),ue(!i.pathname||!i.pathname.includes("#"),ka("#","pathname","hash",i)),ue(!i.search||!i.search.includes("#"),ka("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let h=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),h-=1;i.pathname=g.join("/")}l=h>=0?t[h]:"/"}let a=l1(i,l),d=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(d||f)&&(a.pathname+="/"),a}const Oh=e=>e.replace(/\/\/+/g,"/"),un=e=>Oh(e.join("/")),u1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),d1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,p1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function f1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const $h=["post","put","patch","delete"];new Set($h);const h1=["get",...$h];new Set(h1);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Si(){return Si=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Si.apply(null,arguments)}const Mo=E.createContext(null),_h=E.createContext(null),Dt=E.createContext(null),No=E.createContext(null),Bt=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Ah=E.createContext(null);function m1(e,t){let{relative:n}=t===void 0?{}:t;Sr()||ue(!1);let{basename:r,navigator:i}=E.useContext(Dt),{hash:s,pathname:o,search:l}=Oo(e,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:un([r,o])),i.createHref({pathname:a,search:l,hash:s})}function Sr(){return E.useContext(No)!=null}function Ft(){return Sr()||ue(!1),E.useContext(No).location}function Rh(e){E.useContext(Dt).static||E.useLayoutEffect(e)}function jr(){let{isDataRoute:e}=E.useContext(Bt);return e?P1():g1()}function g1(){Sr()||ue(!1);let e=E.useContext(Mo),{basename:t,future:n,navigator:r}=E.useContext(Dt),{matches:i}=E.useContext(Bt),{pathname:s}=Ft(),o=JSON.stringify(Xc(i,n.v7_relativeSplatPath)),l=E.useRef(!1);return Rh(()=>{l.current=!0}),E.useCallback(function(d,f){if(f===void 0&&(f={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let h=Qc(d,JSON.parse(o),s,f.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:un([t,h.pathname])),(f.replace?r.replace:r.push)(h,f.state,f)},[t,r,o,s,e])}function Jc(){let{matches:e}=E.useContext(Bt),t=e[e.length-1];return t?t.params:{}}function Oo(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=E.useContext(Dt),{matches:i}=E.useContext(Bt),{pathname:s}=Ft(),o=JSON.stringify(Xc(i,r.v7_relativeSplatPath));return E.useMemo(()=>Qc(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function v1(e,t){return x1(e,t)}function x1(e,t,n,r){Sr()||ue(!1);let{navigator:i}=E.useContext(Dt),{matches:s}=E.useContext(Bt),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let d=Ft(),f;if(t){var h;let j=typeof t=="string"?Dn(t):t;a==="/"||(h=j.pathname)!=null&&h.startsWith(a)||ue(!1),f=j}else f=d;let g=f.pathname||"/",x=g;if(a!=="/"){let j=a.replace(/^\//,"").split("/");x="/"+g.replace(/^\//,"").split("/").slice(j.length).join("/")}let v=Wv(e,{pathname:x}),y=j1(v&&v.map(j=>Object.assign({},j,{params:Object.assign({},l,j.params),pathname:un([a,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?a:un([a,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),s,n,r);return t&&y?E.createElement(No.Provider,{value:{location:Si({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Zt.Pop}},y):y}function y1(){let e=E1(),t=f1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:i},n):null,null)}const w1=E.createElement(y1,null);class k1 extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(Bt.Provider,{value:this.props.routeContext},E.createElement(Ah.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function S1(e){let{routeContext:t,match:n,children:r}=e,i=E.useContext(Mo);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Bt.Provider,{value:t},r)}function j1(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);f>=0||ue(!1),o=o.slice(0,Math.min(o.length,f+1))}let a=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let h=o[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=f),h.route.id){let{loaderData:g,errors:x}=n,v=h.route.loader&&g[h.route.id]===void 0&&(!x||x[h.route.id]===void 0);if(h.route.lazy||v){a=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((f,h,g)=>{let x,v=!1,y=null,j=null;n&&(x=l&&h.route.id?l[h.route.id]:void 0,y=h.route.errorElement||w1,a&&(d<0&&g===0?(T1("route-fallback"),v=!0,j=null):d===g&&(v=!0,j=h.route.hydrateFallbackElement||null)));let u=t.concat(o.slice(0,g+1)),p=()=>{let m;return x?m=y:v?m=j:h.route.Component?m=E.createElement(h.route.Component,null):h.route.element?m=h.route.element:m=f,E.createElement(S1,{match:h,routeContext:{outlet:f,matches:u,isDataRoute:n!=null},children:m})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?E.createElement(k1,{location:n.location,revalidation:n.revalidation,component:y,error:x,children:p(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):p()},null)}var Dh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Dh||{}),Bh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Bh||{});function z1(e){let t=E.useContext(Mo);return t||ue(!1),t}function b1(e){let t=E.useContext(_h);return t||ue(!1),t}function C1(e){let t=E.useContext(Bt);return t||ue(!1),t}function Fh(e){let t=C1(),n=t.matches[t.matches.length-1];return n.route.id||ue(!1),n.route.id}function E1(){var e;let t=E.useContext(Ah),n=b1(),r=Fh();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function P1(){let{router:e}=z1(Dh.UseNavigateStable),t=Fh(Bh.UseNavigateStable),n=E.useRef(!1);return Rh(()=>{n.current=!0}),E.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Si({fromRouteId:t},s)))},[e,t])}const Pd={};function T1(e,t,n){Pd[e]||(Pd[e]=!0)}function L1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Zc(e){let{to:t,replace:n,state:r,relative:i}=e;Sr()||ue(!1);let{future:s,static:o}=E.useContext(Dt),{matches:l}=E.useContext(Bt),{pathname:a}=Ft(),d=jr(),f=Qc(t,Xc(l,s.v7_relativeSplatPath),a,i==="path"),h=JSON.stringify(f);return E.useEffect(()=>d(JSON.parse(h),{replace:n,state:r,relative:i}),[d,h,i,n,r]),null}function Ie(e){ue(!1)}function I1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Zt.Pop,navigator:s,static:o=!1,future:l}=e;Sr()&&ue(!1);let a=t.replace(/^\/*/,"/"),d=E.useMemo(()=>({basename:a,navigator:s,static:o,future:Si({v7_relativeSplatPath:!1},l)}),[a,l,s,o]);typeof r=="string"&&(r=Dn(r));let{pathname:f="/",search:h="",hash:g="",state:x=null,key:v="default"}=r,y=E.useMemo(()=>{let j=mr(f,a);return j==null?null:{location:{pathname:j,search:h,hash:g,state:x,key:v},navigationType:i}},[a,f,h,g,x,v,i]);return y==null?null:E.createElement(Dt.Provider,{value:d},E.createElement(No.Provider,{children:n,value:y}))}function M1(e){let{children:t,location:n}=e;return v1(_l(t),n)}new Promise(()=>{});function _l(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,i)=>{if(!E.isValidElement(r))return;let s=[...t,i];if(r.type===E.Fragment){n.push.apply(n,_l(r.props.children,s));return}r.type!==Ie&&ue(!1),!r.props.index||!r.props.children||ue(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=_l(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function io(){return io=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},io.apply(null,arguments)}function Vh(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function N1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function O1(e,t){return e.button===0&&(!t||t==="_self")&&!N1(e)}function Al(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function $1(e,t){let n=Al(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(s=>{n.append(i,s)})}),n}const _1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],A1=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],R1="6";try{window.__reactRouterVersion=R1}catch{}const D1=E.createContext({isTransitioning:!1}),B1="startTransition",Td=Mg[B1];function F1(e){let{basename:t,children:n,future:r,window:i}=e,s=E.useRef();s.current==null&&(s.current=Hv({window:i,v5Compat:!0}));let o=s.current,[l,a]=E.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},f=E.useCallback(h=>{d&&Td?Td(()=>a(h)):a(h)},[a,d]);return E.useLayoutEffect(()=>o.listen(f),[o,f]),E.useEffect(()=>L1(r),[r]),E.createElement(I1,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const V1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",H1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ie=E.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:d,preventScrollReset:f,viewTransition:h}=t,g=Vh(t,_1),{basename:x}=E.useContext(Dt),v,y=!1;if(typeof d=="string"&&H1.test(d)&&(v=d,V1))try{let m=new URL(window.location.href),w=d.startsWith("//")?new URL(m.protocol+d):new URL(d),z=mr(w.pathname,x);w.origin===m.origin&&z!=null?d=z+w.search+w.hash:y=!0}catch{}let j=m1(d,{relative:i}),u=U1(d,{replace:o,state:l,target:a,preventScrollReset:f,relative:i,viewTransition:h});function p(m){r&&r(m),m.defaultPrevented||u(m)}return E.createElement("a",io({},g,{href:v||j,onClick:y||s?r:p,ref:n,target:a}))}),Hh=E.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:a,viewTransition:d,children:f}=t,h=Vh(t,A1),g=Oo(a,{relative:h.relative}),x=Ft(),v=E.useContext(_h),{navigator:y,basename:j}=E.useContext(Dt),u=v!=null&&W1(g)&&d===!0,p=y.encodeLocation?y.encodeLocation(g).pathname:g.pathname,m=x.pathname,w=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(m=m.toLowerCase(),w=w?w.toLowerCase():null,p=p.toLowerCase()),w&&j&&(w=mr(w,j)||w);const z=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let b=m===p||!o&&m.startsWith(p)&&m.charAt(z)==="/",I=w!=null&&(w===p||!o&&w.startsWith(p)&&w.charAt(p.length)==="/"),k={isActive:b,isPending:I,isTransitioning:u},L=b?r:void 0,S;typeof s=="function"?S=s(k):S=[s,b?"active":null,I?"pending":null,u?"transitioning":null].filter(Boolean).join(" ");let N=typeof l=="function"?l(k):l;return E.createElement(ie,io({},h,{"aria-current":L,className:S,ref:n,style:N,to:a,viewTransition:d}),typeof f=="function"?f(k):f)});var Rl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Rl||(Rl={}));var Ld;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ld||(Ld={}));function G1(e){let t=E.useContext(Mo);return t||ue(!1),t}function U1(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=t===void 0?{}:t,a=jr(),d=Ft(),f=Oo(e,{relative:o});return E.useCallback(h=>{if(O1(h,n)){h.preventDefault();let g=r!==void 0?r:ro(d)===ro(f);a(e,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[d,a,f,r,i,n,e,s,o,l])}function Gh(e){let t=E.useRef(Al(e)),n=E.useRef(!1),r=Ft(),i=E.useMemo(()=>$1(r.search,n.current?null:t.current),[r.search]),s=jr(),o=E.useCallback((l,a)=>{const d=Al(typeof l=="function"?l(i):l);n.current=!0,s("?"+d,a)},[s,i]);return[i,o]}function W1(e,t){t===void 0&&(t={});let n=E.useContext(D1);n==null&&ue(!1);let{basename:r}=G1(Rl.useViewTransitionState),i=Oo(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=mr(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=mr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return $l(i.pathname,o)!=null||$l(i.pathname,s)!=null}var Uh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Id=K.createContext&&K.createContext(Uh),Y1=["attr","size","title"];function K1(e,t){if(e==null)return{};var n,r,i=X1(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function X1(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function so(){return so=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},so.apply(null,arguments)}function Md(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function oo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Md(Object(n),!0).forEach(function(r){Q1(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Md(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Q1(e,t,n){return(t=J1(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J1(e){var t=Z1(e,"string");return typeof t=="symbol"?t:t+""}function Z1(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Wh(e){return e&&e.map((t,n)=>K.createElement(t.tag,oo({key:n},t.attr),Wh(t.child)))}function ge(e){return t=>K.createElement(q1,so({attr:oo({},e.attr)},t),Wh(e.child))}function q1(e){var t=n=>{var r=e.attr,i=e.size,s=e.title,o=K1(e,Y1),l=i||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),K.createElement("svg",so({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:a,style:oo(oo({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&K.createElement("title",null,s),e.children)};return Id!==void 0?K.createElement(Id.Consumer,null,n=>t(n)):t(Uh)}function Yh(e){return ge({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"},child:[]}]})(e)}function ex(e){return ge({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M464 720a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"},child:[]}]})(e)}function Kh(e){return ge({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.4 124C290.5 124.3 112 303 112 523.9c0 128 60.2 242 153.8 315.2l-37.5 48c-4.1 5.3-.3 13 6.3 12.9l167-.8c5.2 0 9-4.9 7.7-9.9L369.8 727a8 8 0 0 0-14.1-3L315 776.1c-10.2-8-20-16.7-29.3-26a318.64 318.64 0 0 1-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 0 1-68.6 101.7c-7.5 7.5-15.3 14.5-23.4 21.2a7.93 7.93 0 0 0-1.2 11.1l39.4 50.5c2.8 3.5 7.9 4.1 11.4 1.3C854.5 760.8 912 649.1 912 523.9c0-221.1-179.4-400.2-400.6-399.9z"},child:[]}]})(e)}function tx(e){return ge({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z"},child:[]}]})(e)}function $o(e){return ge({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"},child:[]}]})(e)}function Xh(e){return ge({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"},child:[]}]})(e)}function Qh(e){return ge({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64L128 192v384c0 212.1 171.9 384 384 384s384-171.9 384-384V192L512 64zm312 512c0 172.3-139.7 312-312 312S200 748.3 200 576V246l312-110 312 110v330z"},child:[]},{tag:"path",attr:{d:"M378.4 475.1a35.91 35.91 0 0 0-50.9 0 35.91 35.91 0 0 0 0 50.9l129.4 129.4 2.1 2.1a33.98 33.98 0 0 0 48.1 0L730.6 434a33.98 33.98 0 0 0 0-48.1l-2.8-2.8a33.98 33.98 0 0 0-48.1 0L483 579.7 378.4 475.1z"},child:[]}]})(e)}function Jh(e){return ge({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"},child:[]},{tag:"path",attr:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0 1 30.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"},child:[]}]})(e)}function nx(e){return ge({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z"},child:[]},{tag:"path",attr:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8Z"},child:[]}]})(e)}function rx(e){return ge({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"},child:[]}]})(e)}function ix(e){return ge({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z"},child:[]}]})(e)}function Zh(e){return ge({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"},child:[]},{tag:"path",attr:{d:"M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"},child:[]}]})(e)}function _o(e){return ge({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"},child:[]}]})(e)}function sx(e){return ge({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z"},child:[]}]})(e)}function ox(e){return ge({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm198.4-588.1a32 32 0 0 0-24.5.5L414.9 415 296.4 686c-3.6 8.2-3.6 17.5 0 25.7 3.4 7.8 9.7 13.9 17.7 17 3.8 1.5 7.7 2.2 11.7 2.2 4.4 0 8.7-.9 12.8-2.7l271-118.6 118.5-271a32.06 32.06 0 0 0-17.7-42.7zM576.8 534.4l26.2 26.2-42.4 42.4-26.2-26.2L380 644.4 447.5 490 422 464.4l42.4-42.4 25.5 25.5L644.4 380l-67.6 154.4zM464.4 422L422 464.4l25.5 25.6 86.9 86.8 26.2 26.2 42.4-42.4-26.2-26.2-86.8-86.9z"},child:[]}]})(e)}function ji(e){return ge({attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"},child:[]}]})(e)}function qh(e){return ge({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"},child:[]},{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"},child:[]}]})(e)}function em(e){return ge({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M380 704h264c4.4 0 8-3.6 8-8v-84c0-4.4-3.6-8-8-8h-40c-4.4 0-8 3.6-8 8v36H428v-36c0-4.4-3.6-8-8-8h-40c-4.4 0-8 3.6-8 8v84c0 4.4 3.6 8 8 8zm340-123a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm239-167.6L935.3 372a8 8 0 0 0-10.9-2.9l-50.7 29.6-78.3-216.2a63.9 63.9 0 0 0-60.9-44.4H301.2c-34.7 0-65.5 22.4-76.2 55.5l-74.6 205.2-50.8-29.6a8 8 0 0 0-10.9 2.9L65 413.4c-2.2 3.8-.9 8.6 2.9 10.8l60.4 35.2-14.5 40c-1.2 3.2-1.8 6.6-1.8 10v348.2c0 15.7 11.8 28.4 26.3 28.4h67.6c12.3 0 23-9.3 25.6-22.3l7.7-37.7h545.6l7.7 37.7c2.7 13 13.3 22.3 25.6 22.3h67.6c14.5 0 26.3-12.7 26.3-28.4V509.4c0-3.4-.6-6.8-1.8-10l-14.5-40 60.3-35.2a8 8 0 0 0 3-10.8zM840 517v237H184V517l15.6-43h624.8l15.6 43zM292.7 218.1l.5-1.3.4-1.3c1.1-3.3 4.1-5.5 7.6-5.5h427.6l75.4 208H220l72.7-199.9zM224 581a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"},child:[]}]})(e)}function Ao(e){return ge({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"},child:[]}]})(e)}var ne="-ms-",ti="-moz-",J="-webkit-",tm="comm",Ro="rule",qc="decl",ax="@import",lx="@namespace",nm="@keyframes",cx="@layer",rm=Math.abs,eu=String.fromCharCode,Dl=Object.assign;function ux(e,t){return xe(e,0)^45?(((t<<2^xe(e,0))<<2^xe(e,1))<<2^xe(e,2))<<2^xe(e,3):0}function im(e){return e.trim()}function Et(e,t){return(e=t.exec(e))?e[0]:e}function G(e,t,n){return e.replace(t,n)}function bs(e,t,n){return e.indexOf(t,n)}function xe(e,t){return e.charCodeAt(t)|0}function Nn(e,t,n){return e.slice(t,n)}function lt(e){return e.length}function sm(e){return e.length}function Vr(e,t){return t.push(e),e}function dx(e,t){return e.map(t).join("")}function Nd(e,t){return e.filter(function(n){return!Et(n,t)})}var Do=1,gr=1,om=0,rt=0,he=0,zr="";function Bo(e,t,n,r,i,s,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Do,column:gr,length:o,return:"",siblings:l}}function Gt(e,t){return Dl(Bo("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Fn(e){for(;e.root;)e=Gt(e.root,{children:[e]});Vr(e,e.siblings)}function px(){return he}function fx(){return he=rt>0?xe(zr,--rt):0,gr--,he===10&&(gr=1,Do--),he}function pt(){return he=rt<om?xe(zr,rt++):0,gr++,he===10&&(gr=1,Do++),he}function qt(){return xe(zr,rt)}function Cs(){return rt}function Fo(e,t){return Nn(zr,e,t)}function zi(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function hx(e){return Do=gr=1,om=lt(zr=e),rt=0,[]}function mx(e){return zr="",e}function Sa(e){return im(Fo(rt-1,Bl(e===91?e+2:e===40?e+1:e)))}function gx(e){for(;(he=qt())&&he<33;)pt();return zi(e)>2||zi(he)>3?"":" "}function vx(e,t){for(;--t&&pt()&&!(he<48||he>102||he>57&&he<65||he>70&&he<97););return Fo(e,Cs()+(t<6&&qt()==32&&pt()==32))}function Bl(e){for(;pt();)switch(he){case e:return rt;case 34:case 39:e!==34&&e!==39&&Bl(he);break;case 40:e===41&&Bl(e);break;case 92:pt();break}return rt}function xx(e,t){for(;pt()&&e+he!==57;)if(e+he===84&&qt()===47)break;return"/*"+Fo(t,rt-1)+"*"+eu(e===47?e:pt())}function yx(e){for(;!zi(qt());)pt();return Fo(e,rt)}function wx(e){return mx(Es("",null,null,null,[""],e=hx(e),0,[0],e))}function Es(e,t,n,r,i,s,o,l,a){for(var d=0,f=0,h=o,g=0,x=0,v=0,y=1,j=1,u=1,p=0,m="",w=i,z=s,b=r,I=m;j;)switch(v=p,p=pt()){case 40:if(v!=108&&xe(I,h-1)==58){bs(I+=G(Sa(p),"&","&\f"),"&\f",rm(d?l[d-1]:0))!=-1&&(u=-1);break}case 34:case 39:case 91:I+=Sa(p);break;case 9:case 10:case 13:case 32:I+=gx(v);break;case 92:I+=vx(Cs()-1,7);continue;case 47:switch(qt()){case 42:case 47:Vr(kx(xx(pt(),Cs()),t,n,a),a),(zi(v||1)==5||zi(qt()||1)==5)&&lt(I)&&Nn(I,-1,void 0)!==" "&&(I+=" ");break;default:I+="/"}break;case 123*y:l[d++]=lt(I)*u;case 125*y:case 59:case 0:switch(p){case 0:case 125:j=0;case 59+f:u==-1&&(I=G(I,/\f/g,"")),x>0&&(lt(I)-h||y===0&&v===47)&&Vr(x>32?$d(I+";",r,n,h-1,a):$d(G(I," ","")+";",r,n,h-2,a),a);break;case 59:I+=";";default:if(Vr(b=Od(I,t,n,d,f,i,l,m,w=[],z=[],h,s),s),p===123)if(f===0)Es(I,t,b,b,w,s,h,l,z);else{switch(g){case 99:if(xe(I,3)===110)break;case 108:if(xe(I,2)===97)break;default:f=0;case 100:case 109:case 115:}f?Es(e,b,b,r&&Vr(Od(e,b,b,0,0,i,l,m,i,w=[],h,z),z),i,z,h,l,r?w:z):Es(I,b,b,b,[""],z,0,l,z)}}d=f=x=0,y=u=1,m=I="",h=o;break;case 58:h=1+lt(I),x=v;default:if(y<1){if(p==123)--y;else if(p==125&&y++==0&&fx()==125)continue}switch(I+=eu(p),p*y){case 38:u=f>0?1:(I+="\f",-1);break;case 44:l[d++]=(lt(I)-1)*u,u=1;break;case 64:qt()===45&&(I+=Sa(pt())),g=qt(),f=h=lt(m=I+=yx(Cs())),p++;break;case 45:v===45&&lt(I)==2&&(y=0)}}return s}function Od(e,t,n,r,i,s,o,l,a,d,f,h){for(var g=i-1,x=i===0?s:[""],v=sm(x),y=0,j=0,u=0;y<r;++y)for(var p=0,m=Nn(e,g+1,g=rm(j=o[y])),w=e;p<v;++p)(w=im(j>0?x[p]+" "+m:G(m,/&\f/g,x[p])))&&(a[u++]=w);return Bo(e,t,n,i===0?Ro:l,a,d,f,h)}function kx(e,t,n,r){return Bo(e,t,n,tm,eu(px()),Nn(e,2,-2),0,r)}function $d(e,t,n,r,i){return Bo(e,t,n,qc,Nn(e,0,r),Nn(e,r+1,-1),r,i)}function am(e,t,n){switch(ux(e,t)){case 5103:return J+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return J+e+e;case 4855:return J+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return ti+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return J+e+ti+e+ne+e+e;case 5936:switch(xe(e,t+11)){case 114:return J+e+ne+G(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return J+e+ne+G(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return J+e+ne+G(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return J+e+ne+e+e;case 6165:return J+e+ne+"flex-"+e+e;case 5187:return J+e+G(e,/(\w+).+(:[^]+)/,J+"box-$1$2"+ne+"flex-$1$2")+e;case 5443:return J+e+ne+"flex-item-"+G(e,/flex-|-self/g,"")+(Et(e,/flex-|baseline/)?"":ne+"grid-row-"+G(e,/flex-|-self/g,""))+e;case 4675:return J+e+ne+"flex-line-pack"+G(e,/align-content|flex-|-self/g,"")+e;case 5548:return J+e+ne+G(e,"shrink","negative")+e;case 5292:return J+e+ne+G(e,"basis","preferred-size")+e;case 6060:return J+"box-"+G(e,"-grow","")+J+e+ne+G(e,"grow","positive")+e;case 4554:return J+G(e,/([^-])(transform)/g,"$1"+J+"$2")+e;case 6187:return G(G(G(e,/(zoom-|grab)/,J+"$1"),/(image-set)/,J+"$1"),e,"")+e;case 5495:case 3959:return G(e,/(image-set\([^]*)/,J+"$1$`$1");case 4968:return G(G(e,/(.+:)(flex-)?(.*)/,J+"box-pack:$3"+ne+"flex-pack:$3"),/space-between/,"justify")+J+e+e;case 4200:if(!Et(e,/flex-|baseline/))return ne+"grid-column-align"+Nn(e,t)+e;break;case 2592:case 3360:return ne+G(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Et(r.props,/grid-\w+-end/)})?~bs(e+(n=n[t].value),"span",0)?e:ne+G(e,"-start","")+e+ne+"grid-row-span:"+(~bs(n,"span",0)?Et(n,/\d+/):+Et(n,/\d+/)-+Et(e,/\d+/))+";":ne+G(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Et(r.props,/grid-\w+-start/)})?e:ne+G(G(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return G(e,/(.+)-inline(.+)/,J+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(lt(e)-1-t>6)switch(xe(e,t+1)){case 109:if(xe(e,t+4)!==45)break;case 102:return G(e,/(.+:)(.+)-([^]+)/,"$1"+J+"$2-$3$1"+ti+(xe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~bs(e,"stretch",0)?am(G(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return G(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,l,a,d){return ne+i+":"+s+d+(o?ne+i+"-span:"+(l?a:+a-+s)+d:"")+e});case 4949:if(xe(e,t+6)===121)return G(e,":",":"+J)+e;break;case 6444:switch(xe(e,xe(e,14)===45?18:11)){case 120:return G(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+J+(xe(e,14)===45?"inline-":"")+"box$3$1"+J+"$2$3$1"+ne+"$2box$3")+e;case 100:return G(e,":",":"+ne)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return G(e,"scroll-","scroll-snap-")+e}return e}function ao(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Sx(e,t,n,r){switch(e.type){case cx:if(e.children.length)break;case ax:case lx:case qc:return e.return=e.return||e.value;case tm:return"";case nm:return e.return=e.value+"{"+ao(e.children,r)+"}";case Ro:if(!lt(e.value=e.props.join(",")))return""}return lt(n=ao(e.children,r))?e.return=e.value+"{"+n+"}":""}function jx(e){var t=sm(e);return function(n,r,i,s){for(var o="",l=0;l<t;l++)o+=e[l](n,r,i,s)||"";return o}}function zx(e){return function(t){t.root||(t=t.return)&&e(t)}}function bx(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case qc:e.return=am(e.value,e.length,n);return;case nm:return ao([Gt(e,{value:G(e.value,"@","@"+J)})],r);case Ro:if(e.length)return dx(n=e.props,function(i){switch(Et(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Fn(Gt(e,{props:[G(i,/:(read-\w+)/,":"+ti+"$1")]})),Fn(Gt(e,{props:[i]})),Dl(e,{props:Nd(n,r)});break;case"::placeholder":Fn(Gt(e,{props:[G(i,/:(plac\w+)/,":"+J+"input-$1")]})),Fn(Gt(e,{props:[G(i,/:(plac\w+)/,":"+ti+"$1")]})),Fn(Gt(e,{props:[G(i,/:(plac\w+)/,ne+"input-$1")]})),Fn(Gt(e,{props:[i]})),Dl(e,{props:Nd(n,r)});break}return""})}}var or={},ja,za;const vr=typeof process<"u"&&or!==void 0&&(or.REACT_APP_SC_ATTR||or.SC_ATTR)||"data-styled",lm="active",cm="data-styled-version",Vo="6.4.4",tu=`/*!sc*/
`,ni=typeof window<"u"&&typeof document<"u";function _d(e){if(typeof process<"u"&&or!==void 0){const t=or[e];if(t!==void 0&&t!=="")return t!=="false"}}const Cx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(za=(ja=_d("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&ja!==void 0?ja:_d("SC_DISABLE_SPEEDY"))!==null&&za!==void 0?za:typeof process<"u"&&or!==void 0&&!1),um="sc-keyframes-";function _i(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let Ps=new Map,lo=new Map,Ts=1;const Hr=e=>{if(Ps.has(e))return Ps.get(e);for(;lo.has(Ts);)Ts++;const t=Ts++;return Ps.set(e,t),lo.set(t,e),t},Ex=e=>lo.get(e),Px=(e,t)=>{Ts=t+1,Ps.set(e,t),lo.set(t,e)},nu=Object.freeze([]),xr=Object.freeze({});function Tx(e,t,n=xr){return e.theme!==n.theme&&e.theme||t||n.theme}const Lx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ix=/(^-|-$)/g;function dm(e){return e.replace(Lx,"-").replace(Ix,"")}const Mx=/(a)(d)/gi,Ad=e=>String.fromCharCode(e+(e>25?39:97));function ru(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ad(t%52)+n;return(Ad(t%52)+n).replace(Mx,"$1-$2")}const Fl=5381,Cn=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},pm=e=>Cn(Fl,e);function fm(e){return ru(pm(e)>>>0)}function Nx(e){return e.displayName||e.name||"Component"}function Vl(e){return typeof e=="string"&&!0}function Ox(e){return Vl(e)?`styled.${e}`:`Styled(${Nx(e)})`}const hm=Symbol.for("react.memo"),$x=Symbol.for("react.forward_ref"),_x={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Ax={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},mm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Rx={[$x]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[hm]:mm};function Rd(e){return("type"in(t=e)&&t.type.$$typeof)===hm?mm:"$$typeof"in e?Rx[e.$$typeof]:_x;var t}const Dx=Object.defineProperty,Bx=Object.getOwnPropertyNames,Fx=Object.getOwnPropertySymbols,Vx=Object.getOwnPropertyDescriptor,Hx=Object.getPrototypeOf,Gx=Object.prototype;function gm(e,t,n){if(typeof t!="string"){const r=Hx(t);r&&r!==Gx&&gm(e,r,n);const i=Bx(t).concat(Fx(t)),s=Rd(e),o=Rd(t);for(let l=0;l<i.length;++l){const a=i[l];if(!(a in Ax||n&&n[a]||o&&a in o||s&&a in s)){const d=Vx(t,a);try{Dx(e,a,d)}catch{}}}}return e}function Ho(e){return typeof e=="function"}const Ux=Symbol.for("react.forward_ref");function vm(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===Ux&&"styledComponentId"in e}function Gr(e,t){return e&&t?e+" "+t:e||t||""}function Hl(e,t){return e.join("")}function bi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Gl(e,t,n=!1){if(!n&&!bi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=Gl(e[r],t[r]);else if(bi(t))for(const r in t)e[r]=Gl(e[r],t[r]);return e}function iu(e,t){Object.defineProperty(e,"toString",{value:t})}const Wx=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const i=this.groupSizes,s=i.length;let o=s;for(;e>=o;)if(o<<=1,o<0)throw _i(16,`${e}`);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(let l=s;l<o;l++)this.groupSizes[l]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,s=t.length;i<s;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let i=n;i<r;i++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let s=r;s<i;s++)t+=this.tag.getRule(s)+tu;return t}},Yx=`style[${vr}][${cm}="${Vo}"]`,Kx=new RegExp(`^${vr}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Dd=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,Ul=e=>{if(!e)return document;if(Dd(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(Dd(t))return t}return document},Xx=(e,t,n)=>{const r=n.split(",");let i;for(let s=0,o=r.length;s<o;s++)(i=r[s])&&e.registerName(t,i)},Qx=(e,t)=>{var n;const r=((n=t.textContent)!==null&&n!==void 0?n:"").split(tu),i=[];for(let s=0,o=r.length;s<o;s++){const l=r[s].trim();if(!l)continue;const a=l.match(Kx);if(a){const d=0|parseInt(a[1],10),f=a[2];d!==0&&(Px(f,d),Xx(e,f,a[3]),e.getTag().insertRules(d,i)),i.length=0}else i.push(l)}},ba=e=>{const t=Ul(e.options.target).querySelectorAll(Yx);for(let n=0,r=t.length;n<r;n++){const i=t[n];i&&i.getAttribute(vr)!==lm&&(Qx(e,i),i.parentNode&&i.parentNode.removeChild(i))}};let _r=!1;function Jx(){if(_r!==!1)return _r;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return _r=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return _r=t.getAttribute("content")||void 0}return _r=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const xm=(e,t)=>{const n=document.head,r=e||n,i=document.createElement("style"),s=(a=>{const d=Array.from(a.querySelectorAll(`style[${vr}]`));return d[d.length-1]})(r),o=s!==void 0?s.nextSibling:null;i.setAttribute(vr,lm),i.setAttribute(cm,Vo);const l=t||Jx();return l&&i.setAttribute("nonce",l),r.insertBefore(i,o),i},Zx=class{constructor(e,t){this.element=xm(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(n=>{var r;if(n.sheet)return n.sheet;const i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let s=0,o=i.length;s<o;s++){const l=i[s];if(l.ownerNode===n)return l}throw _i(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},qx=class{constructor(e,t){this.element=xm(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let Bd=ni;const ey={isServer:!ni,useCSSOMInjection:!Cx};class Go{static registerId(t){return Hr(t)}constructor(t=xr,n={},r){this.options=Object.assign(Object.assign({},ey),t),this.gs=n,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ni&&Bd&&(Bd=!1,ba(this)),iu(this,()=>(i=>{const s=i.getTag(),{length:o}=s;let l="";for(let a=0;a<o;a++){const d=Ex(a);if(d===void 0)continue;const f=i.names.get(d);if(f===void 0||!f.size)continue;const h=s.getGroup(a);if(h.length===0)continue;const g=vr+".g"+a+'[id="'+d+'"]';let x="";for(const v of f)v.length>0&&(x+=v+",");l+=h+g+'{content:"'+x+'"}'+tu}return l})(this))}rehydrate(){!this.server&&ni&&ba(this)}reconstructWithOptions(t,n=!0){const r=new Go(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&ni&&t.target!==this.options.target&&Ul(this.options.target)!==Ul(t.target)&&ba(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:n,target:r,nonce:i})=>n?new Zx(r,i):new qx(r,i))(this.options),new Wx(t)));var t}hasNameForId(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i}registerName(t,n){Hr(t),t.startsWith(um)&&this.keyframeIds.add(t);const r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))}insertRules(t,n,r){this.registerName(t,n),this.getTag().insertRules(Hr(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(Hr(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const ym=new WeakSet,ty={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ny(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in ty||e.startsWith("--")?String(t).trim():t+"px"}const xn=47;function Fd(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const wm=Symbol.for("sc-keyframes");function ry(e){return typeof e=="object"&&e!==null&&wm in e}function km(e){return Ho(e)&&!(e.prototype&&e.prototype.isReactComponent)}const Sm=e=>e==null||e===!1||e==="",iy=Symbol.for("react.client.reference");function Vd(e){return e.$$typeof===iy}function jm(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!Sm(r)&&(Array.isArray(r)&&ym.has(r)||Ho(r)?t.push(Fd(n)+":",r,";"):bi(r)?(t.push(n+" {"),jm(r,t),t.push("}")):t.push(Fd(n)+": "+ny(n,r)+";"))}}function En(e,t,n,r,i=[]){if(Sm(e))return i;const s=typeof e;if(s==="string")return i.push(e),i;if(s==="function"){if(Vd(e))return i;if(km(e)&&t){const o=e(t);return En(o,t,n,r,i)}return i.push(e),i}if(Array.isArray(e)){for(let o=0;o<e.length;o++)En(e[o],t,n,r,i);return i}return vm(e)?(i.push(`.${e.styledComponentId}`),i):ry(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):Vd(e)?i:bi(e)?e.toString!==Object.prototype.toString?(i.push(e.toString()),i):(jm(e,i),i):(i.push(e.toString()),i)}const sy=pm(Vo);class oy{constructor(t,n,r){this.rules=t,this.componentId=n,this.baseHash=Cn(sy,n),this.baseStyle=r,Go.registerId(n)}generateAndInjectStyles(t,n,r){let i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";{let s="";for(let o=0;o<this.rules.length;o++){const l=this.rules[o];if(typeof l=="string")s+=l;else if(l)if(km(l)){const a=l(t);typeof a=="string"?s+=a:a!=null&&a!==!1&&(s+=Hl(En(a,t,n,r)))}else s+=Hl(En(l,t,n,r))}if(s){this.dynamicNameCache||(this.dynamicNameCache=new Map);const o=r.hash?r.hash+s:s;let l=this.dynamicNameCache.get(o);if(!l){if(l=ru(Cn(Cn(this.baseHash,r.hash),s)>>>0),this.dynamicNameCache.size>=200){const a=this.dynamicNameCache.keys().next().value;a!==void 0&&this.dynamicNameCache.delete(a)}this.dynamicNameCache.set(o,l)}if(!n.hasNameForId(this.componentId,l)){const a=r(s,"."+l,void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=Gr(i,l)}}return i}}const ay=/&/g;function zm(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function Ca(e){const t=e.length;let n="",r=0,i=0,s=0,o=!1,l=!1;for(let a=0;a<t;a++){const d=e.charCodeAt(a);if(s!==0||o||d!==xn||e.charCodeAt(a+1)!==42)if(o)d===42&&e.charCodeAt(a+1)===xn&&(o=!1,a++);else if(d!==34&&d!==39||zm(e,a)){if(s===0)if(d===123)i++;else if(d===125){if(i--,i<0){l=!0;let f=a+1;for(;f<t;){const h=e.charCodeAt(f);if(h===59||h===10)break;f++}f<t&&e.charCodeAt(f)===59&&f++,i=0,a=f-1,r=f;continue}i===0&&(n+=e.substring(r,a+1),r=a+1)}else d===59&&i===0&&(n+=e.substring(r,a+1),r=a+1)}else s===0?s=d:s===d&&(s=0);else o=!0,a++}return l||i!==0||s!==0?(r<t&&i===0&&s===0&&(n+=e.substring(r)),n):e}function bm(e,t){const n=t+" ",r=","+n;for(let i=0;i<e.length;i++){const s=e[i];if(s.type==="rule"){s.value=(n+s.value).replaceAll(",",r);const o=s.props,l=[];for(let a=0;a<o.length;a++)l[a]=n+o[a];s.props=l}Array.isArray(s.children)&&s.type!=="@keyframes"&&bm(s.children,t)}return e}function ly({options:e=xr,plugins:t=nu}=xr){let n,r,i;const s=(g,x,v)=>v.startsWith(r)&&v.endsWith(r)&&v.replaceAll(r,"").length>0?`.${n}`:g,o=t.slice();o.push(g=>{g.type===Ro&&g.value.includes("&")&&(i||(i=new RegExp(`\\${r}\\b`,"g")),g.props[0]=g.props[0].replace(ay,r).replace(i,s))}),e.prefix&&o.push(bx),o.push(Sx);let l=[];const a=jx(o.concat(zx(g=>l.push(g)))),d=(g,x="",v="",y="&")=>{n=y,r=x,i=void 0;const j=function(p){const m=p.indexOf("//")!==-1,w=p.indexOf("}")!==-1;if(!m&&!w)return p;if(!m)return Ca(p);const z=p.length;let b="",I=0,k=0,L=0,S=0,N=0,M=!1;for(;k<z;){const T=p.charCodeAt(k);if(T!==34&&T!==39||zm(p,k))if(L===0)if(T===xn&&k+1<z&&p.charCodeAt(k+1)===42){for(k+=2;k+1<z&&(p.charCodeAt(k)!==42||p.charCodeAt(k+1)!==xn);)k++;k+=2}else if(T!==40)if(T!==41)if(S>0)k++;else if(T===42&&k+1<z&&p.charCodeAt(k+1)===xn)b+=p.substring(I,k),k+=2,I=k,M=!0;else if(T===xn&&k+1<z&&p.charCodeAt(k+1)===xn){for(b+=p.substring(I,k);k<z&&p.charCodeAt(k)!==10;)k++;I=k,M=!0}else T===123?N++:T===125&&N--,k++;else S>0&&S--,k++;else S++,k++;else k++;else L===0?L=T:L===T&&(L=0),k++}return M?(I<z&&(b+=p.substring(I)),N===0?b:Ca(b)):N===0?p:Ca(p)}(g);let u=wx(v||x?v+" "+x+" { "+j+" }":j);return e.namespace&&(u=bm(u,e.namespace)),l=[],ao(u,a),l},f=e;let h=Fl;for(let g=0;g<t.length;g++)t[g].name||_i(15),h=Cn(h,t[g].name);return f!=null&&f.namespace&&(h=Cn(h,f.namespace)),f!=null&&f.prefix&&(h=Cn(h,"p")),d.hash=h!==Fl?h.toString():"",d}const cy=new Go,Wl=ly(),Cm=K.createContext({shouldForwardProp:void 0,styleSheet:cy,stylis:Wl,stylisPlugins:void 0});Cm.Consumer;function uy(){return K.useContext(Cm)}const Em=K.createContext(void 0);Em.Consumer;const Hd=Object.prototype.hasOwnProperty,Ea={};function dy(e,t){const n=typeof e!="string"?"sc":dm(e);Ea[n]=(Ea[n]||0)+1;const r=n+"-"+fm(Vo+n+Ea[n]);return t?t+"-"+r:r}function py(e,t,n){const r=vm(e),i=e,s=!Vl(e),{attrs:o=nu,componentId:l=dy(t.displayName,t.parentComponentId),displayName:a=Ox(e)}=t,d=t.displayName&&t.componentId?dm(t.displayName)+"-"+t.componentId:t.componentId||l,f=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o;let{shouldForwardProp:h}=t;if(r&&i.shouldForwardProp){const y=i.shouldForwardProp;if(t.shouldForwardProp){const j=t.shouldForwardProp;h=(u,p)=>y(u,p)&&j(u,p)}else h=y}const g=new oy(n,d,r?i.componentStyle:void 0);function x(y,j){return function(u,p,m){const{attrs:w,componentStyle:z,defaultProps:b,foldedComponentIds:I,styledComponentId:k,target:L}=u,S=K.useContext(Em),N=uy(),M=u.shouldForwardProp||N.shouldForwardProp,T=Tx(p,S,b)||xr;let R,B;{const $=K.useRef(null),_=$.current;if(_!==null&&_[1]===T&&_[2]===N.styleSheet&&_[3]===N.stylis&&_[7]===z&&function(H,V,se){const ae=H,ee=V;let Le=0;for(const Qe in ee)if(Hd.call(ee,Qe)&&(Le++,ae[Qe]!==ee[Qe]))return!1;return Le===se}(_[0],p,_[4]))R=_[5],B=_[6];else{R=function(V,se,ae){const ee=Object.assign(Object.assign({},se),{className:void 0,theme:ae}),Le=V.length>1;for(let Qe=0;Qe<V.length;Qe++){const Ko=V[Qe],Fi=Ho(Ko)?Ko(Le?Object.assign({},ee):ee):Ko;for(const Vt in Fi)Vt==="className"?ee.className=Gr(ee.className,Fi[Vt]):Vt==="style"?ee.style=Object.assign(Object.assign({},ee.style),Fi[Vt]):Vt in se&&se[Vt]===void 0||(ee[Vt]=Fi[Vt])}return"className"in se&&typeof se.className=="string"&&(ee.className=Gr(ee.className,se.className)),ee}(w,p,T),B=function(V,se,ae,ee){return V.generateAndInjectStyles(se,ae,ee)}(z,R,N.styleSheet,N.stylis);let H=0;for(const V in p)Hd.call(p,V)&&H++;$.current=[p,T,N.styleSheet,N.stylis,H,R,B,z]}}const U=R.as||L,O=function($,_,H,V){const se={};for(const ae in $)$[ae]===void 0||ae[0]==="$"||ae==="as"||ae==="theme"&&$.theme===H||(ae==="forwardedAs"?se.as=$.forwardedAs:V&&!V(ae,_)||(se[ae]=$[ae]));return se}(R,U,T,M);let C=Gr(I,k);return B&&(C+=" "+B),R.className&&(C+=" "+R.className),O[Vl(U)&&U.includes("-")?"class":"className"]=C,m&&(O.ref=m),E.createElement(U,O)}(v,y,j)}x.displayName=a;let v=K.forwardRef(x);return v.attrs=f,v.componentStyle=g,v.displayName=a,v.shouldForwardProp=h,v.foldedComponentIds=r?Gr(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=d,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get(){return this._foldedDefaultProps},set(y){this._foldedDefaultProps=r?function(j,...u){for(const p of u)Gl(j,p,!0);return j}({},i.defaultProps,y):y}}),iu(v,()=>`.${v.styledComponentId}`),s&&gm(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}var fy=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Gd(e,t){const n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}const Ud=e=>(ym.add(e),e);function ke(e,...t){if(Ho(e)||bi(e))return Ud(En(Gd(nu,[e,...t])));const n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?En(n):Ud(En(Gd(n,t)))}function Yl(e,t,n=xr){if(!t)throw _i(1,t);const r=(i,...s)=>e(t,n,ke(i,...s));return r.attrs=i=>Yl(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)})),r.withConfig=i=>Yl(e,t,Object.assign(Object.assign({},n),i)),r}const Pm=e=>Yl(py,e),P=Pm;fy.forEach(e=>{P[e]=Pm(e)});var Tm;class hy{constructor(t,n){this[Tm]=!0,this.inject=(r,i=Wl)=>{const s=this.getName(i);if(!r.hasNameForId(this.id,s)){const o=i(this.rules,s,"@keyframes");r.insertRules(this.id,s,o)}},this.name=t,this.id=um+t,this.rules=n,Hr(this.id),iu(this,()=>{throw _i(12,String(this.name))})}getName(t=Wl){return t.hash?this.name+ru(+t.hash>>>0):this.name}}function my(e,...t){const n=Hl(ke(e,...t)),r=fm(n);return new hy(r,n)}Tm=wm;const gy=P.header`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background: rgba(247, 246, 242, 0.88);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);

  /* On phones the full header would take too much of the screen, so it scrolls away */
  @media (max-width: 800px) {
    position: relative;
  }
`,vy=P.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 7px 16px;
  background: var(--ink);
  color: #f7f6f2;
  font-size: 12.5px;

  strong {
    color: var(--lime);
    letter-spacing: 0.03em;
  }

  @media (max-width: 800px) {
    span:not(:nth-child(2)) {
      display: none;
    }
  }
`,xy=P.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: min(var(--container), calc(100% - 32px));
  height: 72px;
  margin: 0 auto;

  @media (max-width: 800px) {
    height: auto;
    flex-wrap: wrap;
    padding: 10px 0;
    gap: 10px;
  }
`,yy=P.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  svg {
    transition: transform 0.25s ease;
  }

  a:hover svg {
    transform: rotate(-6deg) scale(1.05);
  }
`,wy=P(ie)`
  display: flex;
  text-decoration: none;
`,ky=P.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
`,Wd=P(ie)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 44px;
  min-width: 44px;
  padding: ${({$wide:e})=>e?"0 14px 0 12px":"0"};
  border-radius: 999px;
  color: var(--ink);
  text-decoration: none;
  transition: background 0.2s ease;

  svg {
    font-size: 21px;
  }

  &:hover {
    background: var(--surface);
  }

  @media (max-width: 600px) {
    padding: 0;
  }
`,Sy=P.span`
  font-size: 14px;
  font-weight: 600;

  @media (max-width: 600px) {
    display: none;
  }
`,Yd=P.span`
  position: absolute;
  top: 2px;
  left: 26px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  height: 20px;
  padding: 0 5px;
  font-size: 11px;
  font-weight: 700;
  color: var(--ink);
  background: var(--lime);
  border-radius: 999px;
  border: 2px solid var(--bg);
  line-height: 1;

  &:empty {
    display: none;
  }

  @media (max-width: 600px) {
    left: auto;
    right: -2px;
  }
`,jy="/e-commerce-react/assets/Book_01-reBYIFfB.jpg",zy="/e-commerce-react/assets/Book_02-CdEkewzp.jpg",by="/e-commerce-react/assets/Book_03-LqQ9P4bp.jpg",Cy="/e-commerce-react/assets/Book_04-DoM0JkG2.jpg",Ey="/e-commerce-react/assets/Book_05-BgLCVD8H.jpg",Py="/e-commerce-react/assets/Book_06-CpPq5D3P.jpg",Ty="/e-commerce-react/assets/Book_07-Ch7eqdkV.jpg",Ly="/e-commerce-react/assets/Book_08-DtK3yiqP.jpg",Iy="/e-commerce-react/assets/Book_09-XklW5VPF.jpg",My="/e-commerce-react/assets/Book_10-W8WyZHiD.jpg",Ny="/e-commerce-react/assets/Book_11-DDRAKo8g.jpg",Oy="/e-commerce-react/assets/Book_12-B8GxQLeF.jpg",Lm=[{id:101,category:"books",itemName:"JavaScript od podstaw",price:45,itemImage:jy,topic:"JavaScript",stock:24,addedAt:"2024-02-10",isBestseller:!0,description:"Przystępne wprowadzenie do JavaScriptu dla osób, które dopiero zaczynają przygodę z programowaniem. Zmienne, funkcje, obiekty, praca z DOM i obsługa zdarzeń — krok po kroku, na praktycznych przykładach."},{id:102,category:"books",itemName:"JavaScript. Przewodnik",author:"David Flanagan",price:40,oldPrice:49,itemImage:zy,topic:"JavaScript",stock:15,addedAt:"2024-01-18",isBestseller:!0,description:"Klasyczne, wyczerpujące kompendium wiedzy o języku JavaScript. Omawia składnię, typy, obiekty, klasy, moduły, programowanie asynchroniczne oraz API dostępne w przeglądarce i w Node.js."},{id:103,category:"books",itemName:"JavaScript. Zaawansowane zagadnienia",price:40,itemImage:by,topic:"JavaScript",stock:9,addedAt:"2023-11-05",description:"Dla programistów, którzy znają podstawy i chcą lepiej zrozumieć, jak działa JavaScript pod maską: domknięcia, prototypy, kontekst `this`, pętla zdarzeń i wzorce projektowe."},{id:104,category:"books",itemName:"Zrozumieć JavaScript. Wydanie III",price:155,itemImage:Cy,topic:"JavaScript",stock:4,addedAt:"2024-03-02",isNew:!0,description:"Obszerne opracowanie mechanizmów języka JavaScript — od typów i koercji, przez zakresy i domknięcia, po asynchroniczność. Książka dla tych, którzy chcą wiedzieć nie tylko jak, ale też dlaczego."},{id:105,category:"books",itemName:"JS, jakiego jeszcze nie znasz",author:"Kyle Simpson",price:54.99,itemImage:Ey,topic:"JavaScript",stock:18,addedAt:"2023-09-14",isBestseller:!0,description:"Seria, która pomogła tysiącom programistów naprawdę zrozumieć JavaScript. Autor rozkłada na czynniki pierwsze zakresy, domknięcia, obiekty i typy, rozwiewając popularne mity o języku."},{id:106,category:"books",itemName:"Java. Zadania z programowania",price:48.99,itemImage:Py,topic:"Java",stock:11,addedAt:"2023-06-21",description:"Zbiór zadań z rozwiązaniami, który pozwala utrwalić podstawy Javy w praktyce: od instrukcji sterujących i tablic, przez klasy i obiekty, po kolekcje i obsługę wyjątków."},{id:107,category:"books",itemName:"Java. Efektywne programowanie",author:"Joshua Bloch",price:99.99,itemImage:Ty,topic:"Java",stock:7,addedAt:"2023-10-03",isBestseller:!0,description:"Zbiór sprawdzonych zasad pisania czytelnego, wydajnego i bezpiecznego kodu w Javie. Każda rada jest krótka, konkretna i poparta przykładami — pozycja obowiązkowa dla każdego programisty Javy."},{id:108,category:"books",itemName:"Java w 24 godziny",author:"Rogers Cadenhead",price:49.5,oldPrice:59.9,itemImage:Ly,topic:"Java",stock:20,addedAt:"2023-04-12",description:"Kurs podzielony na 24 jednogodzinne lekcje. Pozwala w krótkim czasie poznać składnię Javy, programowanie obiektowe i najważniejsze elementy biblioteki standardowej."},{id:109,category:"books",itemName:"Java. Techniki zaawansowane. Wydanie XI",author:"Cay S. Horstmann",price:89.5,itemImage:Iy,topic:"Java",stock:3,addedAt:"2024-02-27",isNew:!0,description:"Drugi tom klasycznego podręcznika Javy, poświęcony zaawansowanym zagadnieniom: strumieniom, wejściu-wyjściu, XML, sieciom, bazom danych, bezpieczeństwu i internacjonalizacji."},{id:110,category:"books",itemName:"Język C++. Szkoła programowania. Wydanie VI",author:"Stephen Prata",price:59.99,oldPrice:79,itemImage:My,topic:"C++",stock:13,addedAt:"2023-08-08",isBestseller:!0,description:"Kompletny podręcznik języka C++, który prowadzi od podstaw do programowania obiektowego, szablonów, obsługi wyjątków i biblioteki STL. Liczne ćwiczenia pomagają utrwalić materiał."},{id:111,category:"books",itemName:"Python od podstaw",price:74.99,itemImage:Ny,topic:"Python",stock:16,addedAt:"2024-03-10",isNew:!0,description:"Praktyczne wprowadzenie do Pythona: typy danych, funkcje, moduły, praca z plikami i podstawy programowania obiektowego. Dobry wybór na pierwszy język programowania."},{id:112,category:"books",itemName:"Python. Kurs dla nauczycieli i studentów",price:38.99,itemImage:Oy,topic:"Python",stock:8,addedAt:"2023-05-19",description:"Podręcznik przygotowany z myślą o zajęciach dydaktycznych. Uczy programowania w Pythonie na przykładach z matematyki, nauk ścisłych i inżynierii."}],$y="/e-commerce-react/assets/ps5_game_01-BLOSjWue.jpg",_y="/e-commerce-react/assets/ps5_game_02-DlNRvoOV.jpg",Ay="/e-commerce-react/assets/ps5_game_03-GWljyDHk.jpg",Ry="/e-commerce-react/assets/ps5_game_04-erG7eMH-.jpg",Dy="/e-commerce-react/assets/ps5_game_05-5I-ycRDt.jpg",By="/e-commerce-react/assets/ps5_game_06-D30L9Khw.jpg",Fy="/e-commerce-react/assets/ps5_game_07-Dy1KXkXC.jpg",Vy="/e-commerce-react/assets/ps5_game_08-DeXir-mp.jpg",Im=[{id:201,category:"games",itemName:"Horizon Forbidden West",price:145,oldPrice:179,itemImage:$y,platform:"PS5",genre:"RPG",pegi:16,developer:"Guerrilla Games",releaseYear:2022,stock:14,addedAt:"2024-01-08",isBestseller:!0,description:"Aloy wyrusza na Zakazany Zachód — niebezpieczną krainę pełną potężnych maszyn i nowych plemion. Otwarty świat, widowiskowe walki i eksploracja lądu, nieba i podwodnych głębin."},{id:202,category:"games",itemName:"Stellar Blade",price:140,itemImage:_y,platform:"PS5",genre:"Akcja",pegi:18,developer:"Shift Up",releaseYear:2024,stock:9,addedAt:"2024-04-26",isNew:!0,description:"Dynamiczna gra akcji, w której jako Eve walczysz o odzyskanie Ziemi z rąk tajemniczych istot Naytiba. Precyzyjny system walki, efektowne kombinacje i postapokaliptyczny świat."},{id:203,category:"games",itemName:"Rise of the Ronin",price:140,itemImage:Ay,platform:"PS5",genre:"RPG",pegi:18,developer:"Team Ninja",releaseYear:2024,stock:6,addedAt:"2024-03-22",isNew:!0,description:"Japonia u schyłku okresu Edo. Jako bezpański wojownik decydujesz, po której stronie konfliktu stanąć. Otwarty świat, wymagające pojedynki i decyzje wpływające na losy kraju."},{id:204,category:"games",itemName:"Marvel's Spider-Man 2",price:155,itemImage:Ry,platform:"PS5",genre:"Przygodowa",pegi:16,developer:"Insomniac Games",releaseYear:2023,stock:21,addedAt:"2023-10-20",isBestseller:!0,description:"Peter Parker i Miles Morales łączą siły w Nowym Jorku pełnym nowych zagrożeń, w tym Venoma. Przełączaj się między bohaterami i szybuj nad miastem dzięki nowym pajęczym skrzydłom."},{id:205,category:"games",itemName:"Demon's Souls",price:154.99,itemImage:Dy,platform:"PS5",genre:"RPG",pegi:18,developer:"Bluepoint Games",releaseYear:2020,stock:5,addedAt:"2023-02-14",description:"Odświeżona od podstaw wersja kultowego RPG akcji. Mroczne królestwo Boletarii, bezlitośni przeciwnicy i walka, w której każdy błąd ma znaczenie."},{id:206,category:"games",itemName:"Destruction AllStars",price:148.99,oldPrice:169,itemImage:By,platform:"PS5",genre:"Zręcznościowa",pegi:12,developer:"Lucid Games",releaseYear:2021,stock:0,addedAt:"2023-01-30",description:"Widowiskowe starcia samochodowe na arenie. Taranuj rywali, przeskakuj między pojazdami i korzystaj z unikalnych zdolności bohaterów w meczach dla wielu graczy."},{id:207,category:"games",itemName:"Ghost of Tsushima",price:199.99,itemImage:Fy,platform:"PS5",genre:"Przygodowa",pegi:18,developer:"Sucker Punch Productions",releaseYear:2021,stock:12,addedAt:"2023-07-11",isBestseller:!0,description:"Rok 1274, mongolska inwazja na wyspę Cuszima. Jako samuraj Jin Sakai musisz porzucić tradycję, by ocalić swój dom. Zachwycający otwarty świat i pełne napięcia pojedynki na miecze."},{id:208,category:"games",itemName:"Uncharted: Kolekcja Dziedzictwo Złodziei",price:149.5,itemImage:Vy,platform:"PS5",genre:"Przygodowa",pegi:16,developer:"Naughty Dog",releaseYear:2022,stock:17,addedAt:"2023-03-03",description:"Dwie przygody w jednym wydaniu: Uncharted 4: Kres złodzieja oraz Uncharted: Zaginione dziedzictwo, odświeżone z myślą o PS5. Poszukiwanie skarbów, wspinaczka i filmowa akcja."}],Hy="data:image/jpeg;base64,UklGRg4NAABXRUJQVlA4IAINAAAwhQCdASrgAeABPjEYikQiIZGQSIxgMAMEtLd+Bpx9aAyxZLgQRcUga/R0lLPQkY+z7y9LPtvnV8ryxe80xrZZy4Eem8L4H1LwpbwpbwpbwpbwpbwpbwpboY2Hd/LYodGDrl2WGnfFGcKlbD0eX3W9f+81kz6veVLpRqXZ9XjFeFLeFLTSK//y7NVsiDj37COqFmeWCWqvQV9Hij7rLlJnL1Jnx2TaUk14FY4NmXi+3gRy0YJq3svbxivCXF99vg//9B/J/oz+RmfdrIbsZGHi2o5UdtRCBzSaiTgJ3kqqIEzwnl5nQPOslLaAV7YcA8gSBAVKAbplL2Xt4xUSrYcrKOsUeZqMnCshAzHDHgJTsWyAcagzsS7LUGvA0+i3jFd/ltJvv7YUVonYAd9TXNOkvy3NSbbbKTAoqNHYS26hrxiui75e+qr4qlgpy609OdXJHUpLeFKJNiOmPNZwNni6iM2WT6VDhDn1JAJs+3Mr8djHlXasNi+nOzKUlTFImJILkRVw4QHM+PL6YP2sjI8f0rHY2/KoUXmenpeNd4jzfvAs253WXjABtU8EXSCqw+ZviCiv6jmcbwTsvFVPGYJnsorC0SPPOkpj0O5diKXgNZ1l3GqW4Dthzx12GUYOwnEBc6ODN3obRoaOgXE78bgn65+Fsm7GGRCUBLUoqSPn3236JrFeZD6EhLrIgKRmcpWBLLMEuUca2klYd69UbbZE5K5MbdvmfccdJNiUojPSZZrryDyB0lPfxSj5cvRTpw85TDh+PBrpvJSIYFWktTxfwXNB9GZzJOZ42nrFXfzIPL+3asedg2+SF/0yAaXaAkUdl5n2zSOUTJOyGiocPqauxNyKfmB1lvBpU6aIJWgJ3/+3Fw1uZ9uZ8ueHItgyPBcLvZmRWdzfL7ud3F5n25n25bia7Nkg3RV556nxfqwtyABOM+3M+3M+2gdyFqj5FUzrTfjWn01fZhsf2LzPtzPrrLMVvDvC8Yqwzg+HYMVYe8ZJ3S8Yrwpbv/u1pBZq0YcPD96V1k8yJz6DecuLzPtzLMi9JP4/QKU7YjIqzWHGihOXF5n25JQRWWV+NusbeG151mTZ/u01eshOXF5n25leOIIy4UY40RzngN5Boay1T0ovsvM+3M+3Jis5VuWsJRCZnVDlpEzGXmfbmfbmer2tWSAmK8KWsVU9NCdmfbmfbmfXptAmj61EbBjHEMJpnLcXmfbmfbkkzIEIrSaFemuxcI7YL0I3Ttn8aKE5cXmfbkpy1ZshaXyc+NzPV+7E9OaoFaCe1z/4RivClvClpC8YMsAswEBjggjxZMD0XsvRECRH//uS4Ut4Ut4UtI1lHI+4nbC7F0nIAZx65nALXrvRgJpoUuobjynDJdMRneBUoSJWJJnSCaMM8dDN8McUgKuXF5n25n26S5bsXmfbmfbmVAAA/v3gQAADXzVFPnK9gKA6HY9GbY/1r21mg/93idDD1sq4ht3jXyQPxAeSftI4qxh1rFY4Dhw4ZwyVOMlKvtwAXUB4LyjC9rSDdsAHV+DCGNG5Z5ZQ9gJSTtl55qwz9RuTpDINWoSIIGYGlRKGpN7NqfgD4E1BNtGCsqc5bDX/zVlj29DuuH2GTREGEWhcKOfs9RMjBlonaQNBwXmkZNSoGRbcc4EyfDGekGbwgfJbcT3BqD8aOsF2hPaNTd2LvDDLr8tP1mQD/H7WB0mbsSZrjSMJD0rQRUNBPMoFIpnMFPlMHdC4pCT/lfL5MFMjrcW/toJqPWumq8Tkrnz+fs6qo9ASBsxJAgB1RXmvv3/wicd5Pa/8wcd+Yos6v1JsassN+bFnPwnrXf35QaSzZyafM/jTsFd/RimYKuzwaIm+K7s3NwDp3Hj8nbhW+9Ld0ik3kPk8ha5w7ryi/ndxzp/7JcA7Xfx/y8PM4Y4y1YTTAIxQ9dUmd/0ueVdI4w4y/EEoCKW15fcoGJZWwplno0dIPL2hdFhAOduUGEh6wGBt91rtV7jld5jQBPzo+DY+k36Izy6af49lIZJwG4jnbHL7oqYGsyzirIzum2PJiTnCX4ukKPU5YQQPCFEZiYSjaNxQmhp1iSxkSxCfz1k/yl7n1Beycttso1YL+DB1hEhGR+4lCOBTbT9hJvVKzubfOFjrFpPE73hdL4i1qVhO7vSyG5i9Cn4HBRZ0tMch4RpqLtVbzrVrobr4GJJUpVzrRVXuSVunMX7sS7+oTeEYQgEFd7VwBXFs5QNauBbHydmoPonbW3h8QMUP329DaaiJ5KxI/lbOTbAPgIKA91T+VSTmvzZvP1wpeUC9JbpPQC/BE0FQrRT0MslRXF265f8yQLJMkUbn9YzYvSaeCuo0vrEXQ0HslBwvsFofTpHqwk/3p5CYyv5j5a95GsrT5WLqlFj5j8Oa5qw5MxUtgpnFpK4dfQWddpA066TlTrVoZH/weeFUFA+FD5LoOb52oO80bON5mourapcBw448qt+qrnbl++XboGDXVcT5UTpW5JSHuAdvdM6ONYUYAPXOP6hv0fnG1CRXbKqQTrw6yBzM/PijMxVilJJTRmhs+MqPxPMOmpYAo2rQffn/x1vfM03yA2jSeX9RjlD0B49kq8Rkt6Cu6oG2tnAKLanEYi1uskqSxVSHw55vo1266FUFaQ/IInlAu8++pojAhtr39jgxlvL7PLblGHDHBtzIucxPMIjKYWD5m/6TyiYINTQsRUs0H1Fo1vR68LvRQ4U1Ga+UvTtZ65nPxScEAFCOPcg+u0mN9YBuE6wDR/+Xr8TJe7ZIuMX01RaDQsRKOcVY08LXxp6S4jfuiZ2ImeXP1EEtIr+P7oAYRa8smGunIGVGor1eT2drEmOo5mJvpZVCjtGyY0YeRFdew/l+yZTsXk8pzBXHvfZWDJBXNYnFjJI0VxGaS0S3IFaujnYQcGjuDeQ2CV5j2sAx4c3iGGcfHSsv9z77FF+XNaPtkEtQb7Io2aUDplQ0oGP1S2YStPihnrFvJ0kGOSijmTyiAEurmB1aGZBy+HOO5D7u7Zq8u6gmbTK+kzG59jGUCRUldHfRQRzLkgw23LoA9RsvvZBWNiuYV+/MXr2JHsNBv94IXcZHEHsy3Hdtc7VpeIfRgdkfD0AdQNzXGss0+KDYrYwJiGyrEB0mHkHV81maq76rEvojEZXfXnQuJsrdezX0WTMnUfIKamXUG+1kQGyU2S3NUgRTj7o4AHqDBfqGMOZ5ZO1eqPMEJ6ac0nIqg1MYLHJoy6uMdJuGgEnSsZPLwbk/JOmMtUFO/aQwDQcn3zP8V+qHI0mT6sVoSNREOs8TuQkVSCEN4yW7TQ7kEAFg3hEpZLyckQXUoNTN75QYa2w5rTqeURrlWOfZrrVfwwiMeqkXpix4qMyIX6hHIKS1AYULUj+RCJUlUKBXDoJdr+zsuqt4TyuSRMLxZeuN7xZgLzWAvBJXAICRqb4xC5EdPU4k/moIizqL5SI11MqTwoJXgv5MdEE3frZ9DJXAVrjTxtY/2OIuRk1cMiPLPEDQujwMoEcUoorR0TVYhXYYfphtesM0rFRQh2nSOBjb/QUvB259vtRHC+SC385Cq3YSYFxC99181TuqakkPTRq84ILX7kYpS2b68QJTVlgCKxIQmlg8xe47N36uhPYgsAlZw1V2vwT1OoLncrulSM7nG9JGQAL6LSYogh6EbpoLzP25K0y+ZUF4OShdJKrkiv2pAAAXFH8cBCeXQuR0DAP3wAOJNRga+bL3lQWEnUq5VCI5rNoJ1VR9Z2cixy7z3oV1fA7QyQEmJ8A2y/TTL42aISUAnCUWBz+npFaesr0L6uTD87A0UZzfogwBwJUZiniQcjzCSe9o/a+UEEnUwwlt3B17lACG5IXGHkxWEp03hBU9TZyuPAk2TNQR9TnmK3PUXft9gRiUMdXJvuKq58gpRHdWgfvj+VJ0KlvG0a60Hwuaqa3F4NcwHdsKES3+xnQ5Bj4vrJhACiZW62s8uq+qdPyL5uVW9nBlgY+tKGTCuD3EY+3fE9f9RNc/8MbEiO20D30Wg5C+2wRPwdLpdLAtwKRAM2kE+klpvgaHnaLCfx5geRbM2gWK/z0iPIfgAoVnq9wNpfXZkztdhIabMDrfaybOgPpmYmNRjzc0X75iIHtmrQWYcRqUM7qNNgIPMXWzbdm9sznddnu0VQ638ggdGQsmX3Qx9UEjifqv+eY5b8V7ahgf/+bFxbDSnGyHRjh5PDpygsN5Ay6MC+jK9eg4zv5+86n+nRlQbjXENSs6KhR8U89b0fWzlU9ptRbfs6qdH4DoUU5gM4Rez9Im++B0VyTXzFdbOYTqaAydllZXeSzkyyYPBAAgebQ6qn582NggYC6SNpx4a1f0jGsO//2r913lxxTlz/boTnYx3svb6L3n3vfHXfuWNEDu77N1X/xN11aAgikjlEQ+FHh0mlghj8kw+kAAAAAAAAA=",Gy="/e-commerce-react/assets/tshirt02-Xirf-CyS.jpg",Uy="/e-commerce-react/assets/tshirt03-BGxHFbjd.jpg",Wy="/e-commerce-react/assets/tshirt04-CjnuGGVf.jpg",Yy="/e-commerce-react/assets/tshirt05-BQezvVfK.jpg",Ky="/e-commerce-react/assets/tshirt06-3ff8sC1s.jpg",Xy="/e-commerce-react/assets/tshirt07-C45IyZwS.jpg",Qy="/e-commerce-react/assets/tshirt08-DjcLPvXT.jpg",Jy="/e-commerce-react/assets/tshirt09-BUbroyMR.jpg",Zy="/e-commerce-react/assets/tshirt10-DsjyQLYV.jpg",su=["S","M","L","XL","XXL"],qy=[{size:"S",width:48,length:70},{size:"M",width:51,length:72},{size:"L",width:55,length:74},{size:"XL",width:58,length:76},{size:"XXL",width:61,length:78}],ew="Klasyczny t-shirt o prostym kroju z okrągłym dekoltem. Miękka, przewiewna bawełna sprawdzi się na co dzień, na trening i jako baza pod nadruk. Wzmocnione szwy na ramionach zapewniają trwałość po wielu praniach.",vt=({id:e,colorName:t,hex:n,sizes:r=su,...i})=>({id:e,category:"tshirts",itemName:`T-shirt Classic — ${t.toLowerCase()}`,color:{name:t,hex:n},sizes:r,material:"100% bawełna",description:ew,...i}),ou=[vt({id:301,colorName:"Biały",hex:"#ffffff",price:15,itemImage:Hy,stock:60,addedAt:"2023-03-01",isBestseller:!0}),vt({id:302,colorName:"Czerwony",hex:"#e3262f",price:10,oldPrice:14.99,itemImage:Gy,stock:34,addedAt:"2023-03-01"}),vt({id:303,colorName:"Szary melanż",hex:"#c9cbcc",price:10,itemImage:Uy,stock:41,addedAt:"2023-03-01",isBestseller:!0}),vt({id:304,colorName:"Niebieski",hex:"#1e63c6",price:15,itemImage:Wy,stock:22,addedAt:"2023-05-15",sizes:["S","M","L","XL"]}),vt({id:305,colorName:"Granatowy",hex:"#16245a",price:14.99,itemImage:Yy,stock:38,addedAt:"2023-05-15",isBestseller:!0}),vt({id:306,colorName:"Bordowy",hex:"#6e1f33",price:18.99,itemImage:Ky,stock:12,addedAt:"2024-02-20",isNew:!0,sizes:["M","L","XL","XXL"]}),vt({id:307,colorName:"Żółty",hex:"#f5c518",price:9.99,oldPrice:12.99,itemImage:Xy,stock:16,addedAt:"2023-06-01",sizes:["S","M","L"]}),vt({id:308,colorName:"Butelkowa zieleń",hex:"#1f4a33",price:9.5,itemImage:Qy,stock:19,addedAt:"2024-03-05",isNew:!0}),vt({id:309,colorName:"Fuksja",hex:"#e8338a",price:9.5,itemImage:Jy,stock:4,addedAt:"2023-06-01",sizes:["S","M"]}),vt({id:310,colorName:"Pomarańczowy",hex:"#f47b20",price:9.99,itemImage:Zy,stock:27,addedAt:"2023-06-01",sizes:["M","L","XL"]})],F="/e-commerce-react",Ai=[...Lm,...Im,...ou],tw=new Map(Ai.map(e=>[e.id,e])),Sn=e=>tw.get(Number(e))||null,On=e=>`${F}/product/${e}`,nw=5,Ae={books:{key:"books",label:"Książki",singular:"Książka",path:`${F}/books`,items:Lm,intro:"Książki o programowaniu — od pierwszych kroków w JavaScripcie i Pythonie po zaawansowaną Javę i C++.",facets:[{key:"topic",label:"Tematyka",getValues:e=>[e.topic]}],meta:e=>e.author||`Książka · ${e.topic}`,specs:e=>[["Autor",e.author],["Tematyka",e.topic],["Format","Książka drukowana"],["Język","polski"]]},games:{key:"games",label:"Gry",singular:"Gra",path:`${F}/games`,items:Im,intro:"Najgłośniejsze tytuły na PlayStation 5 w wersji pudełkowej — przygoda, akcja, RPG i rozgrywka wieloosobowa.",facets:[{key:"genre",label:"Gatunek",getValues:e=>[e.genre]},{key:"pegi",label:"PEGI",getValues:e=>[`PEGI ${e.pegi}`]}],meta:e=>`${e.platform} · PEGI ${e.pegi}`,specs:e=>[["Platforma","PlayStation 5"],["Gatunek",e.genre],["Producent",e.developer],["Rok wydania",e.releaseYear],["Klasyfikacja wiekowa",`PEGI ${e.pegi}`],["Wersja","Pudełkowa"]]},tshirts:{key:"tshirts",label:"T-shirty",singular:"T-shirt",path:`${F}/t-shirts`,items:ou,intro:"Bawełniane t-shirty Classic w dziesięciu kolorach i rozmiarach od S do XXL. Wygodna baza na każdy dzień.",facets:[{key:"color",label:"Kolor",type:"color",getValues:e=>[e.color.name]},{key:"size",label:"Rozmiar",order:su,getValues:e=>e.sizes}],meta:e=>`Rozmiary: ${e.sizes.join(", ")}`,specs:e=>[["Kolor",e.color.name],["Dostępne rozmiary",e.sizes.join(", ")],["Materiał",e.material],["Krój","Klasyczny, okrągły dekolt"],["Pielęgnacja","Pranie w 40°C"]]}},au=Object.values(Ae),Uo=e=>Ae[e.category],Mm={key:"category",label:"Kategoria",getValues:e=>[Ae[e.category].label]},rw=e=>Uo(e).specs(e).filter(([,t])=>t!=null&&t!==""),Wo=e=>Uo(e).meta(e),$n=e=>!!(e.oldPrice&&e.oldPrice>e.price),Nm=e=>Array.isArray(e.sizes)&&e.sizes.length>0,Yo=Ai.filter($n),Kd=e=>(e.stock>0?100:0)+(e.isBestseller?10:0)+(e.isNew?5:0)+($n(e)?3:0),co=[{value:"featured",label:"Polecane",compare:(e,t)=>Kd(t)-Kd(e)},{value:"price-asc",label:"Cena: od najniższej",compare:(e,t)=>e.price-t.price},{value:"price-desc",label:"Cena: od najwyższej",compare:(e,t)=>t.price-e.price},{value:"newest",label:"Najnowsze",compare:(e,t)=>t.addedAt.localeCompare(e.addedAt)},{value:"name",label:"Nazwa: A–Z",compare:(e,t)=>e.itemName.localeCompare(t.itemName,"pl")}],br=(e,t)=>{const n=co.find(r=>r.value===t)||co[0];return[...e].sort(n.compare)},Om=e=>br(Ai.filter(t=>t.isBestseller&&t.stock>0),"featured").slice(0,e),iw=(e,t=5)=>br(Uo(e).items.filter(n=>n.id!==e.id),"featured").slice(0,t),$m=e=>String(e).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ł/g,"l"),sw=new Map(Ai.map(e=>{var t;return[e.id,$m([e.itemName,e.author,e.topic,e.genre,e.developer,(t=e.color)==null?void 0:t.name,Ae[e.category].label,Ae[e.category].singular].filter(Boolean).join(" "))]})),_m=(e,t)=>{const n=$m(e).split(/\s+/).filter(Boolean);if(n.length===0)return[];const r=br(Ai.filter(i=>n.every(s=>sw.get(i.id).includes(s))),"featured");return t?r.slice(0,t):r},_t=200,Ci=[{id:"parcel-locker",label:"Paczkomat InPost",description:"Odbiór w wybranym paczkomacie, zwykle następnego dnia roboczego",price:12.99,freeAboveThreshold:!0},{id:"courier",label:"Kurier DPD",description:"Dostawa pod wskazany adres w 1–2 dni robocze",price:16.99,freeAboveThreshold:!0},{id:"pickup",label:"Odbiór osobisty",description:"Salon BuyIt — gotowe do odbioru tego samego dnia",price:0,freeAboveThreshold:!1}],jn=[{id:"blik",label:"BLIK",description:"Kod z aplikacji bankowej",fee:0},{id:"transfer",label:"Szybki przelew online",description:"Wszystkie popularne banki",fee:0},{id:"card",label:"Karta płatnicza",description:"Visa, Mastercard — na stronie operatora",fee:0},{id:"cod",label:"Płatność przy odbiorze",description:"Gotówką lub kartą u kuriera",fee:5,onlyFor:["courier"]}],uo={BUYIT10:{type:"percent",value:10,label:"−10% na całe zamówienie"},DOSTAWA0:{type:"shipping",label:"Darmowa dostawa"}},Am=e=>Ci.find(t=>t.id===e),Rm=e=>jn.find(t=>t.id===e),Dm=(e,t,n)=>!e||(n==null?void 0:n.type)==="shipping"||e.freeAboveThreshold&&t>=_t?0:e.price,ss=e=>Math.round(e*100)/100,lu=({subtotal:e,promoCode:t,deliveryId:n,paymentId:r})=>{var h;const i=t?uo[t]:null,s=(i==null?void 0:i.type)==="percent"?ss(e*i.value/100):0,o=n?Dm(Am(n),e,i):null,l=r&&((h=Rm(r))==null?void 0:h.fee)||0,a=ss(e-s+(o||0)+l),d=Math.max(0,ss(_t-e)),f=(i==null?void 0:i.type)==="shipping"||d===0;return{subtotal:ss(e),discount:s,delivery:o,paymentFee:l,total:a,missingForFreeShipping:d,freeShipping:f}},mt=E.createContext(null),Xd="buyit_cart_v2",Qd="buyit_wishlist_v1",Jd="buyit_promo_v1",Zd="buyit_orders_v1",os=(e,t)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.warn(`Could not read "${e}" from localStorage:`,n),t}},as=(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch(n){console.warn(`Could not write "${e}" to localStorage:`,n)}},ow=(e,t)=>t?`${e}|${t}`:String(e),Kl=e=>{const[t,n]=String(e).split("|");return{id:Number(t),size:n||null}},Pa=(e,t)=>Object.entries(e).reduce((n,[r,i])=>Kl(r).id===Number(t)?n+i:n,0),aw=()=>{const e=new Date;return`BI-${`${e.getFullYear()}${String(e.getMonth()+1).padStart(2,"0")}${String(e.getDate()).padStart(2,"0")}`}-${Math.floor(1e3+Math.random()*9e3)}`},lw=e=>{const[t,n]=E.useState(()=>os(Xd,{})),[r,i]=E.useState(()=>os(Qd,[])),[s,o]=E.useState(()=>os(Jd,null)),[l,a]=E.useState(()=>os(Zd,[])),[d,f]=E.useState(null),h=E.useCallback((M,T="success")=>{f({message:M,type:T,id:Date.now()})},[]),g=(M,{size:T=null,quantity:R=1}={})=>{const B=Sn(M);if(!B)return;const U=B.stock-Pa(t,B.id),O=Math.min(R,U);if(O<=0){h(B.stock===0?"Ten produkt jest obecnie niedostępny":`Masz już w koszyku całą dostępną ilość (${B.stock} szt.)`,"error");return}const C=ow(B.id,T);n($=>({...$,[C]:($[C]||0)+O})),h(O<R?`Dodano ${O} szt. — to cała dostępna ilość`:`Dodano do koszyka: ${B.itemName}${T?` (${T})`:""}`)},x=M=>{n(T=>{const R={...T};return R[M]>1?R[M]-=1:delete R[M],R})},v=M=>{n(T=>{const R={...T};return delete R[M],R})},y=(M,T)=>{const{id:R}=Kl(T),B=Sn(R);if(!B)return;const U=Pa(t,R)-(t[T]||0),O=Math.max(0,B.stock-U),C=Number.isFinite(M)?Math.min(Math.max(0,Math.floor(M)),O):0;n($=>{const _={...$};return C===0?delete _[T]:_[T]=C,_})},j=()=>n({}),u=M=>Pa(t,M),p=M=>{const T=Sn(M);if(!T)return;const R=r.includes(T.id);i(B=>R?B.filter(U=>U!==T.id):[...B,T.id]),h(R?"Usunięto z ulubionych":`Dodano do ulubionych: ${T.itemName}`,"info")},m=M=>r.includes(Number(M)),w=M=>{const T=M.trim().toUpperCase();return uo[T]?(o(T),{ok:!0,message:`Zastosowano kod ${T}: ${uo[T].label}`}):{ok:!1,message:"Ten kod rabatowy jest nieprawidłowy lub wygasł"}},z=()=>o(null);E.useEffect(()=>as(Xd,t),[t]),E.useEffect(()=>as(Qd,r),[r]),E.useEffect(()=>as(Jd,s),[s]),E.useEffect(()=>as(Zd,l),[l]),E.useEffect(()=>{if(!d)return;const M=setTimeout(()=>f(null),3e3);return()=>clearTimeout(M)},[d]);const b=E.useMemo(()=>Object.entries(t).filter(([,M])=>M>0).map(([M,T])=>{const{id:R,size:B}=Kl(M),U=Sn(R);return U?{...U,lineKey:M,size:B,quantity:T,summaryPrice:U.price*T}:null}).filter(Boolean),[t]),I=E.useMemo(()=>b.reduce((M,T)=>M+T.quantity,0),[b]),k=E.useMemo(()=>b.reduce((M,T)=>M+T.summaryPrice,0),[b]),N={cartItems:t,cartItemsDetailed:b,addItemToCart:g,removeItemFromCart:x,updateCartItemCount:y,removeAllItemsFromCart:v,clearCart:j,getQuantityInCart:u,totalQuantity:I,cartTotalPrice:k,wishlist:r,toggleWishlist:p,isInWishlist:m,promoCode:s,applyPromoCode:w,removePromoCode:z,placeOrder:({customer:M,deliveryId:T,paymentId:R,notes:B})=>{const U={number:aw(),createdAt:new Date().toISOString(),items:b.map(({id:O,itemName:C,itemImage:$,price:_,size:H,quantity:V})=>({id:O,itemName:C,itemImage:$,price:_,size:H,quantity:V})),totals:lu({subtotal:k,promoCode:s,deliveryId:T,paymentId:R}),promoCode:s,customer:M,deliveryId:T,paymentId:R,notes:B};return a(O=>[U,...O].slice(0,20)),n({}),o(null),U},getOrder:M=>l.find(T=>T.number===M)||null,toast:d,setToast:f,showToast:h};return c.jsx(mt.Provider,{value:N,children:e.children})},cw=new Intl.NumberFormat("pl-PL",{style:"currency",currency:"PLN"}),Q=e=>cw.format(e),cu=({price:e,oldPrice:t})=>t&&t>e?Math.round((1-e/t)*100):0,Ei=(e,t,n,r)=>{if(e===1)return t;const i=e%10,s=e%100;return i>=2&&i<=4&&(s<12||s>14)?n:r},uw=e=>new Date(e).toLocaleString("pl-PL",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}),dw=P.div`
  position: relative;
  flex: 1;
  max-width: 520px;
  min-width: 140px;

  form {
    width: 100%;
  }

  @media (max-width: 800px) {
    order: 3;
    flex-basis: 100%;
    max-width: none;
  }
`,pw=P.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  > svg {
    position: absolute;
    left: 14px;
    font-size: 17px;
    color: var(--muted);
    pointer-events: none;
  }
`,fw=P.input`
  width: 100%;
  height: 44px;
  padding: 0 40px 0 40px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  font-size: 14px;
  color: var(--ink);
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: var(--muted);
  }

  &::-webkit-search-cancel-button {
    display: none;
  }

  &:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(91, 76, 255, 0.12);
  }
`,hw=P.button`
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 50%;
  background: var(--surface-2);
  color: var(--text);
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background: var(--border);
  }
`,mw=P.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: 0 16px 40px rgba(15, 15, 26, 0.14);
  overflow: hidden;
  z-index: 60;
  max-height: 480px;
  overflow-y: auto;
`,gw=P(ie)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 14px;
  text-decoration: none;
  border-bottom: 1px solid var(--surface-2);
  background: ${({$active:e})=>e?"var(--bg)":"transparent"};

  &:hover {
    background: var(--bg);
  }

  img {
    width: 36px;
    height: 48px;
    object-fit: contain;
    border-radius: 4px;
    flex-shrink: 0;
    background: var(--surface-2);
  }

  > strong {
    margin-left: auto;
    font-size: 13px;
    color: var(--ink);
    white-space: nowrap;
  }
`,vw=P.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;

  span {
    font-size: 13.5px;
    font-weight: 600;
    color: var(--ink);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  small {
    font-size: 12px;
    color: var(--muted);
  }
`,xw=P.div`
  padding: 18px 14px;
  text-align: center;
  font-size: 13px;
  color: var(--muted);
`,yw=P.button`
  display: block;
  width: 100%;
  padding: 12px;
  border: none;
  background: var(--surface);
  color: var(--accent);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: var(--accent-soft);
  }
`,ww=6,kw=()=>{const[e,t]=E.useState(""),[n,r]=E.useState(!1),[i,s]=E.useState(-1),o=E.useRef(null),l=jr(),{pathname:a}=Ft(),d=E.useMemo(()=>_m(e),[e]),f=d.slice(0,ww);E.useEffect(()=>{const u=p=>{o.current&&!o.current.contains(p.target)&&r(!1)};return document.addEventListener("mousedown",u),()=>document.removeEventListener("mousedown",u)},[]),E.useEffect(()=>{r(!1)},[a]);const h=u=>{t(u.target.value),s(-1),r(!0)},g=()=>{t(""),r(!1)},x=()=>{const u=e.trim();u&&(l(`${F}/search?q=${encodeURIComponent(u)}`),r(!1))},v=u=>{if(u.preventDefault(),i>=0&&f[i]){l(On(f[i].id)),t(""),r(!1);return}x()},y=u=>{u.key==="ArrowDown"&&(u.preventDefault(),r(!0),s(p=>Math.min(p+1,f.length-1))),u.key==="ArrowUp"&&(u.preventDefault(),s(p=>Math.max(p-1,-1))),u.key==="Escape"&&r(!1)},j=n&&e.trim().length>0;return c.jsxs(dw,{ref:o,role:"search",children:[c.jsx("form",{onSubmit:v,children:c.jsxs(pw,{children:[c.jsx(Xh,{"aria-hidden":"true"}),c.jsx(fw,{type:"search",placeholder:"Szukaj gier, książek, t-shirtów...",value:e,onChange:h,onFocus:()=>r(!0),onKeyDown:y,"aria-label":"Szukaj produktów","aria-expanded":j,"aria-controls":"search-suggestions","aria-autocomplete":"list",role:"combobox"}),e&&c.jsx(hw,{type:"button",onClick:g,"aria-label":"Wyczyść wyszukiwanie",children:c.jsx(ji,{})})]})}),j&&c.jsx(mw,{id:"search-suggestions",role:"listbox",children:f.length===0?c.jsxs(xw,{children:["Brak wyników dla „",e.trim(),"”"]}):c.jsxs(c.Fragment,{children:[f.map((u,p)=>c.jsxs(gw,{to:On(u.id),onClick:()=>t(""),role:"option","aria-selected":p===i,$active:p===i,children:[c.jsx("img",{src:u.itemImage,alt:""}),c.jsxs(vw,{children:[c.jsx("span",{children:u.itemName}),c.jsx("small",{children:Wo(u)})]}),c.jsx("strong",{children:Q(u.price)})]},u.id)),c.jsxs(yw,{type:"button",onClick:x,children:["Pokaż wszystkie wyniki (",d.length,")"]})]})})]})},Sw=P.nav`
  width: 100%;
  border-top: 1px solid var(--border);
`,jw=P.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  width: min(var(--container), calc(100% - 32px));
  height: 46px;
  margin: 0 auto;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`,ls=P(Hh)`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 12px;
  font-size: 14px;
  font-weight: ${({$muted:e})=>e?500:600};
  color: ${({$highlight:e,$muted:t})=>e?"var(--danger)":t?"var(--text)":"var(--ink)"};
  text-decoration: none;
  white-space: nowrap;

  &:first-child {
    padding-left: 0;
  }

  &:hover {
    color: var(--accent);
  }

  &.active::after {
    content: "";
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 0;
    height: 2px;
    border-radius: 2px;
    background: var(--accent);
  }

  &.active:first-child::after {
    left: 0;
  }

  @media (max-width: 800px) {
    font-size: 13px;
    padding: 0 10px;
  }
`,zw=P.div`
  flex: 1;
  min-width: 16px;
`,bw=()=>c.jsx(Sw,{"aria-label":"Kategorie",children:c.jsxs(jw,{children:[au.map(e=>c.jsx(ls,{to:e.path,children:e.label},e.key)),c.jsx(ls,{to:`${F}/sale`,$highlight:!0,children:"Promocje"}),c.jsx(zw,{}),c.jsx(ls,{to:`${F}/help/delivery`,$muted:!0,children:"Dostawa i płatności"}),c.jsx(ls,{to:`${F}/help/contact`,$muted:!0,children:"Kontakt"})]})}),Cw=({size:e=40})=>{const t=`buyit-mark-${E.useId().replace(/:/g,"")}`;return c.jsxs("svg",{width:e,height:e,viewBox:"0 0 64 64","aria-hidden":"true",focusable:"false",children:[c.jsx("defs",{children:c.jsxs("linearGradient",{id:t,x1:"0",y1:"0",x2:"1",y2:"1",children:[c.jsx("stop",{offset:"0",stopColor:"#7263ff"}),c.jsx("stop",{offset:"1",stopColor:"#4232e0"})]})}),c.jsx("rect",{width:"64",height:"64",rx:"16",fill:`url(#${t})`}),c.jsx("path",{d:"M24 27v-5.5a8 8 0 0 1 16 0V27",fill:"none",stroke:"#c6ff3d",strokeWidth:"4.5",strokeLinecap:"round"}),c.jsx("path",{d:"M17.6 25h28.8a3 3 0 0 1 3 2.8l1.4 20.4a4.5 4.5 0 0 1-4.5 4.8H17.7a4.5 4.5 0 0 1-4.5-4.8l1.4-20.4a3 3 0 0 1 3-2.8z",fill:"#fff"}),c.jsx("path",{d:"M25 38.5l5 5 9.5-9.5",fill:"none",stroke:"#5b4cff",strokeWidth:"4.5",strokeLinecap:"round",strokeLinejoin:"round"})]})},Bm=({inverted:e=!1,showTagline:t=!0,size:n=40})=>c.jsxs(Ew,{$inverted:e,children:[c.jsx(Cw,{size:n}),c.jsxs(Pw,{children:[c.jsxs("strong",{children:["Buy",c.jsx("span",{children:"It"})]}),t&&c.jsx("small",{children:"gry · książki · t-shirty"})]})]}),Ew=P.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: ${({$inverted:e})=>e?"#ffffff":"var(--ink)"};

  svg {
    flex-shrink: 0;
    filter: drop-shadow(0 4px 10px rgba(91, 76, 255, 0.28));
  }

  strong span {
    color: ${({$inverted:e})=>e?"var(--lime)":"var(--accent)"};
  }

  small {
    color: ${({$inverted:e})=>e?"#8a8a94":"var(--muted)"};
  }
`,Pw=P.span`
  display: flex;
  flex-direction: column;
  line-height: 1;

  strong {
    font-family: var(--font-body);
    font-size: 25px;
    font-weight: 700;
    letter-spacing: -0.045em;
  }

  small {
    margin-top: 4px;
    font-family: var(--font-body);
    font-size: 9.5px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  @media (max-width: 800px) {
    strong {
      font-size: 22px;
    }

    small {
      display: none;
    }
  }
`,Tw=()=>{const{totalQuantity:e,cartTotalPrice:t,wishlist:n}=E.useContext(mt);return c.jsxs(gy,{children:[c.jsxs(vy,{children:[c.jsxs("span",{children:["Darmowa dostawa od ",Q(_t)]}),c.jsxs("span",{children:["Kod ",c.jsx("strong",{children:"BUYIT10"})," = −10% na zamówienie"]}),c.jsx("span",{children:"30 dni na zwrot"})]}),c.jsxs(xy,{children:[c.jsx(yy,{children:c.jsx(wy,{to:`${F}/`,"aria-label":"BuyIt — strona główna",children:c.jsx(Bm,{})})}),c.jsx(kw,{}),c.jsxs(ky,{children:[c.jsxs(Wd,{to:`${F}/wishlist`,"aria-label":`Ulubione (${n.length})`,title:"Ulubione",children:[c.jsx(_o,{}),c.jsx(Yd,{children:n.length>0?n.length:""})]}),c.jsxs(Wd,{to:`${F}/cart`,"aria-label":`Koszyk (${e})`,title:"Koszyk",$wide:!0,children:[c.jsx($o,{}),c.jsx(Yd,{children:e>0?e:""}),c.jsx(Sy,{children:e>0?Q(t):"Koszyk"})]})]})]}),c.jsx(bw,{})]})},Lw=P.footer`
  margin-top: 64px;
  background: var(--ink);
  color: #c9c8d3;
  font-size: 14px;
`,Iw=P.div`
  display: grid;
  grid-template-columns: 1.6fr repeat(3, 1fr);
  gap: 32px;
  width: min(var(--container), calc(100% - 32px));
  margin: 0 auto;
  padding: 48px 0 32px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,cs=P.div`
  h2 {
    margin: 0 0 16px;
    font-size: 24px;
    color: #ffffff;
  }

  h3 {
    margin: 0 0 14px;
    font-size: 15px;
    color: #ffffff;
  }

  p {
    margin: 0;
    max-width: 320px;
    line-height: 1.6;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: #c9c8d3;
    text-decoration: none;

    &:hover {
      color: var(--lime);
    }
  }
`,Mw=P.ul`
  && {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 6px;
  }

  li {
    padding: 4px 10px;
    border: 1px solid #34344a;
    border-radius: 6px;
    font-size: 12px;
  }
`,Nw=P.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
  width: min(var(--container), calc(100% - 32px));
  margin: 0 auto;
  padding: 20px 0 28px;
  border-top: 1px solid #26263a;
  font-size: 13px;
  color: #8a8a94;
`,Ow=()=>c.jsx($w,{children:new Date().getFullYear()}),$w=P.span`
  color: #c6ff3d;
  font-weight: 600;
`,Ls=[{slug:"delivery",title:"Dostawa i płatności",content:c.jsxs(c.Fragment,{children:[c.jsxs("p",{children:["Zamówienia złożone w dni robocze do godziny 14:00 wysyłamy tego samego dnia. Przy zamówieniach od ",Q(_t)," dostawa paczkomatem lub kurierem jest darmowa."]}),c.jsx("h2",{children:"Sposoby dostawy"}),c.jsx("table",{children:c.jsx("tbody",{children:Ci.map(e=>c.jsxs("tr",{children:[c.jsx("th",{scope:"row",children:e.label}),c.jsx("td",{children:e.description}),c.jsx("td",{children:e.price===0?"Bezpłatnie":Q(e.price)})]},e.id))})}),c.jsx("h2",{children:"Metody płatności"}),c.jsx("table",{children:c.jsx("tbody",{children:jn.map(e=>c.jsxs("tr",{children:[c.jsx("th",{scope:"row",children:e.label}),c.jsx("td",{children:e.description}),c.jsx("td",{children:e.fee>0?`+${Q(e.fee)}`:"Bez opłat"})]},e.id))})})]})},{slug:"returns",title:"Zwroty i reklamacje",content:c.jsxs(c.Fragment,{children:[c.jsx("p",{children:"Masz 30 dni od otrzymania przesyłki na zwrot produktu bez podawania przyczyny. Zwracany towar powinien być nieużywany, a gry i książki — w oryginalnym, nienaruszonym opakowaniu foliowym."}),c.jsx("h2",{children:"Jak zwrócić produkt?"}),c.jsxs("ol",{children:[c.jsx("li",{children:"Napisz do nas, podając numer zamówienia i produkty, które chcesz zwrócić."}),c.jsx("li",{children:"Otrzymasz bezpłatną etykietę zwrotną do paczkomatu."}),c.jsx("li",{children:"Pieniądze zwrócimy w ciągu 14 dni od otrzymania przesyłki, tą samą metodą płatności."})]}),c.jsx("h2",{children:"Wymiana rozmiaru"}),c.jsx("p",{children:"Jeśli t-shirt nie pasuje, wymienimy go na inny rozmiar bez dodatkowych kosztów — wystarczy zaznaczyć to w zgłoszeniu zwrotu."}),c.jsx("h2",{children:"Reklamacje"}),c.jsx("p",{children:"Na wszystkie produkty obowiązuje rękojmia. Reklamację rozpatrujemy w ciągu 14 dni od jej otrzymania."})]})},{slug:"contact",title:"Kontakt",content:c.jsxs(c.Fragment,{children:[c.jsx("p",{children:"Chętnie pomożemy w wyborze produktu i odpowiemy na pytania o zamówienie."}),c.jsx("table",{children:c.jsxs("tbody",{children:[c.jsxs("tr",{children:[c.jsx("th",{scope:"row",children:"E-mail"}),c.jsx("td",{children:"kontakt@buyit.example"})]}),c.jsxs("tr",{children:[c.jsx("th",{scope:"row",children:"Godziny pracy"}),c.jsx("td",{children:"Poniedziałek–piątek, 9:00–17:00"})]}),c.jsxs("tr",{children:[c.jsx("th",{scope:"row",children:"Czas odpowiedzi"}),c.jsx("td",{children:"Do 24 godzin w dni robocze"})]})]})}),c.jsx("p",{children:"BuyIt to sklep demonstracyjny — powyższe dane kontaktowe są przykładowe."})]})},{slug:"terms",title:"Regulamin",content:c.jsxs(c.Fragment,{children:[c.jsx("p",{children:"BuyIt jest projektem demonstracyjnym. Zamówienia składane w sklepie nie są realizowane, płatności nie są pobierane, a dane z formularza zamówienia są zapisywane wyłącznie w pamięci Twojej przeglądarki (localStorage) i nigdzie nie są wysyłane."}),c.jsx("h2",{children:"Ceny"}),c.jsx("p",{children:"Ceny podane są w złotych polskich i zawierają podatek VAT. Przy produktach w promocji podajemy najniższą cenę z 30 dni przed obniżką."}),c.jsx("h2",{children:"Kody rabatowe"}),c.jsx("p",{children:"Kod BUYIT10 obniża wartość produktów o 10%, a kod DOSTAWA0 daje darmową dostawę. W jednym zamówieniu można użyć jednego kodu."})]})}],_w=()=>c.jsxs(Lw,{children:[c.jsxs(Iw,{children:[c.jsxs(cs,{children:[c.jsx("h2",{children:c.jsx(Bm,{inverted:!0,showTagline:!1,size:36})}),c.jsx("p",{children:"Gry na PS5, książki o programowaniu i bawełniane t-shirty. Wysyłka w 24 h, darmowa dostawa od 200 zł i 30 dni na zwrot."})]}),c.jsxs(cs,{children:[c.jsx("h3",{children:"Sklep"}),c.jsxs("ul",{children:[au.map(e=>c.jsx("li",{children:c.jsx(ie,{to:e.path,children:e.label})},e.key)),c.jsx("li",{children:c.jsx(ie,{to:`${F}/sale`,children:"Promocje"})}),c.jsx("li",{children:c.jsx(ie,{to:`${F}/wishlist`,children:"Ulubione"})})]})]}),c.jsxs(cs,{children:[c.jsx("h3",{children:"Pomoc"}),c.jsx("ul",{children:Ls.map(e=>c.jsx("li",{children:c.jsx(ie,{to:`${F}/help/${e.slug}`,children:e.title})},e.slug))})]}),c.jsxs(cs,{children:[c.jsx("h3",{children:"Płatności"}),c.jsx(Mw,{children:jn.map(e=>c.jsx("li",{children:e.label},e.id))})]})]}),c.jsxs(Nw,{children:[c.jsxs("span",{children:["BuyIt © ",c.jsx(Ow,{})," — made for people who like nice things."]}),c.jsx("span",{children:"Sklep demonstracyjny — zamówienia nie są realizowane."})]})]}),qd={success:qh,info:Zh,error:ex},Aw=()=>{const{toast:e,setToast:t}=E.useContext(mt),n=e?qd[e.type]||qd.info:null;return c.jsx(Dw,{role:"status","aria-live":"polite",children:e&&c.jsxs(Bw,{$type:e.type,children:[c.jsx(n,{"aria-hidden":"true"}),c.jsx("span",{children:e.message}),e.type==="success"&&c.jsx(ie,{to:`${F}/cart`,onClick:()=>t(null),children:"Koszyk"}),c.jsx("button",{type:"button",onClick:()=>t(null),"aria-label":"Zamknij powiadomienie",children:c.jsx(ji,{})})]},e.id)})},Rw=my`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`,Dw=P.div`
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  z-index: 100;
  width: min(440px, calc(100% - 32px));
`,Bw=P.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 12px 12px 16px;
  border-radius: var(--radius);
  background: var(--ink);
  color: #ffffff;
  font-size: 14px;
  box-shadow: var(--shadow);
  animation: ${Rw} 0.25s ease-out;

  > svg {
    flex-shrink: 0;
    font-size: 20px;
    color: ${({$type:e})=>e==="error"?"#ff8a8d":e==="success"?"var(--lime)":"#b7b0ff"};
  }

  span {
    flex: 1;
    line-height: 1.4;
  }

  a {
    color: var(--lime);
    font-weight: 600;
    text-decoration: none;
    white-space: nowrap;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    display: flex;
    padding: 4px;
    border: none;
    border-radius: 6px;
    background: transparent;
    color: #ffffff;
    opacity: 0.7;
    cursor: pointer;

    &:hover {
      opacity: 1;
      background: rgba(255, 255, 255, 0.1);
    }
  }
`,Fw=()=>{const{pathname:e}=Ft();return E.useEffect(()=>{window.scrollTo(0,0)},[e]),null};function ep(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function uu(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:ep(t[n])&&ep(e[n])&&Object.keys(t[n]).length>0&&uu(e[n],t[n])})}const Fm={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function ft(){const e=typeof document<"u"?document:{};return uu(e,Fm),e}const Vw={document:Fm,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Xe(){const e=typeof window<"u"?window:{};return uu(e,Vw),e}function Hw(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function Gw(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function Xl(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function po(){return Date.now()}function Uw(e){const t=Xe();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function Ww(e,t){t===void 0&&(t="x");const n=Xe();let r,i,s;const o=Uw(e);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),s=new n.WebKitCSSMatrix(i==="none"?"":i)):(s=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=s.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=s.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=s.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function us(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function Yw(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function He(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!Yw(r)){const i=Object.keys(Object(r)).filter(s=>t.indexOf(s)<0);for(let s=0,o=i.length;s<o;s+=1){const l=i[s],a=Object.getOwnPropertyDescriptor(r,l);a!==void 0&&a.enumerable&&(us(e[l])&&us(r[l])?r[l].__swiper__?e[l]=r[l]:He(e[l],r[l]):!us(e[l])&&us(r[l])?(e[l]={},r[l].__swiper__?e[l]=r[l]:He(e[l],r[l])):e[l]=r[l])}}}return e}function ds(e,t,n){e.style.setProperty(t,n)}function Vm(e){let{swiper:t,targetPosition:n,side:r}=e;const i=Xe(),s=-t.translate;let o=null,l;const a=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const d=n>s?"next":"prev",f=(g,x)=>d==="next"&&g>=x||d==="prev"&&g<=x,h=()=>{l=new Date().getTime(),o===null&&(o=l);const g=Math.max(Math.min((l-o)/a,1),0),x=.5-Math.cos(g*Math.PI)/2;let v=s+x*(n-s);if(f(v,n)&&(v=n),t.wrapperEl.scrollTo({[r]:v}),f(v,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:v})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(h)};h()}function wt(e,t){return t===void 0&&(t=""),[...e.children].filter(n=>n.matches(t))}function fo(e){try{console.warn(e);return}catch{}}function Pi(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:Hw(t)),n}function Kw(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Xw(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function en(e,t){return Xe().getComputedStyle(e,null).getPropertyValue(t)}function Ti(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Hm(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function Ql(e,t,n){const r=Xe();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function W(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Gm(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let s=wt(e.el,`.${r[i]}`)[0];s||(s=Pi("div",r[i]),s.className=r[i],e.el.append(s)),n[i]=s,t[i]=s}}),n}function Qw(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};function s(v){let y;return v&&typeof v=="string"&&t.isElement&&(y=t.el.querySelector(v),y)?y:(v&&(typeof v=="string"&&(y=[...document.querySelectorAll(v)]),t.params.uniqueNavElements&&typeof v=="string"&&y&&y.length>1&&t.el.querySelectorAll(v).length===1?y=t.el.querySelector(v):y&&y.length===1&&(y=y[0])),v&&!y?v:y)}function o(v,y){const j=t.params.navigation;v=W(v),v.forEach(u=>{u&&(u.classList[y?"add":"remove"](...j.disabledClass.split(" ")),u.tagName==="BUTTON"&&(u.disabled=y),t.params.watchOverflow&&t.enabled&&u.classList[t.isLocked?"add":"remove"](j.lockClass))})}function l(){const{nextEl:v,prevEl:y}=t.navigation;if(t.params.loop){o(y,!1),o(v,!1);return}o(y,t.isBeginning&&!t.params.rewind),o(v,t.isEnd&&!t.params.rewind)}function a(v){v.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function d(v){v.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function f(){const v=t.params.navigation;if(t.params.navigation=Gm(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(v.nextEl||v.prevEl))return;let y=s(v.nextEl),j=s(v.prevEl);Object.assign(t.navigation,{nextEl:y,prevEl:j}),y=W(y),j=W(j);const u=(p,m)=>{p&&p.addEventListener("click",m==="next"?d:a),!t.enabled&&p&&p.classList.add(...v.lockClass.split(" "))};y.forEach(p=>u(p,"next")),j.forEach(p=>u(p,"prev"))}function h(){let{nextEl:v,prevEl:y}=t.navigation;v=W(v),y=W(y);const j=(u,p)=>{u.removeEventListener("click",p==="next"?d:a),u.classList.remove(...t.params.navigation.disabledClass.split(" "))};v.forEach(u=>j(u,"next")),y.forEach(u=>j(u,"prev"))}r("init",()=>{t.params.navigation.enabled===!1?x():(f(),l())}),r("toEdge fromEdge lock unlock",()=>{l()}),r("destroy",()=>{h()}),r("enable disable",()=>{let{nextEl:v,prevEl:y}=t.navigation;if(v=W(v),y=W(y),t.enabled){l();return}[...v,...y].filter(j=>!!j).forEach(j=>j.classList.add(t.params.navigation.lockClass))}),r("click",(v,y)=>{let{nextEl:j,prevEl:u}=t.navigation;j=W(j),u=W(u);const p=y.target;if(t.params.navigation.hideOnClick&&!u.includes(p)&&!j.includes(p)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===p||t.pagination.el.contains(p)))return;let m;j.length?m=j[0].classList.contains(t.params.navigation.hiddenClass):u.length&&(m=u[0].classList.contains(t.params.navigation.hiddenClass)),i(m===!0?"navigationShow":"navigationHide"),[...j,...u].filter(w=>!!w).forEach(w=>w.classList.toggle(t.params.navigation.hiddenClass))}});const g=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),f(),l()},x=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),h()};Object.assign(t.navigation,{enable:g,disable:x,update:l,init:f,destroy:h})}function Xt(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Jw(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const s="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:u=>u,formatFractionTotal:u=>u,bulletClass:`${s}-bullet`,bulletActiveClass:`${s}-bullet-active`,modifierClass:`${s}-`,currentClass:`${s}-current`,totalClass:`${s}-total`,hiddenClass:`${s}-hidden`,progressbarFillClass:`${s}-progressbar-fill`,progressbarOppositeClass:`${s}-progressbar-opposite`,clickableClass:`${s}-clickable`,lockClass:`${s}-lock`,horizontalClass:`${s}-horizontal`,verticalClass:`${s}-vertical`,paginationDisabledClass:`${s}-disabled`}}),t.pagination={el:null,bullets:[]};let o,l=0;function a(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function d(u,p){const{bulletActiveClass:m}=t.params.pagination;u&&(u=u[`${p==="prev"?"previous":"next"}ElementSibling`],u&&(u.classList.add(`${m}-${p}`),u=u[`${p==="prev"?"previous":"next"}ElementSibling`],u&&u.classList.add(`${m}-${p}-${p}`)))}function f(u){const p=u.target.closest(Xt(t.params.pagination.bulletClass));if(!p)return;u.preventDefault();const m=Ti(p)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===m)return;t.slideToLoop(m)}else t.slideTo(m)}function h(){const u=t.rtl,p=t.params.pagination;if(a())return;let m=t.pagination.el;m=W(m);let w,z;const b=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,I=t.params.loop?Math.ceil(b/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(z=t.previousRealIndex||0,w=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(w=t.snapIndex,z=t.previousSnapIndex):(z=t.previousIndex||0,w=t.activeIndex||0),p.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const k=t.pagination.bullets;let L,S,N;if(p.dynamicBullets&&(o=Ql(k[0],t.isHorizontal()?"width":"height"),m.forEach(M=>{M.style[t.isHorizontal()?"width":"height"]=`${o*(p.dynamicMainBullets+4)}px`}),p.dynamicMainBullets>1&&z!==void 0&&(l+=w-(z||0),l>p.dynamicMainBullets-1?l=p.dynamicMainBullets-1:l<0&&(l=0)),L=Math.max(w-l,0),S=L+(Math.min(k.length,p.dynamicMainBullets)-1),N=(S+L)/2),k.forEach(M=>{const T=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(R=>`${p.bulletActiveClass}${R}`)].map(R=>typeof R=="string"&&R.includes(" ")?R.split(" "):R).flat();M.classList.remove(...T)}),m.length>1)k.forEach(M=>{const T=Ti(M);T===w?M.classList.add(...p.bulletActiveClass.split(" ")):t.isElement&&M.setAttribute("part","bullet"),p.dynamicBullets&&(T>=L&&T<=S&&M.classList.add(...`${p.bulletActiveClass}-main`.split(" ")),T===L&&d(M,"prev"),T===S&&d(M,"next"))});else{const M=k[w];if(M&&M.classList.add(...p.bulletActiveClass.split(" ")),t.isElement&&k.forEach((T,R)=>{T.setAttribute("part",R===w?"bullet-active":"bullet")}),p.dynamicBullets){const T=k[L],R=k[S];for(let B=L;B<=S;B+=1)k[B]&&k[B].classList.add(...`${p.bulletActiveClass}-main`.split(" "));d(T,"prev"),d(R,"next")}}if(p.dynamicBullets){const M=Math.min(k.length,p.dynamicMainBullets+4),T=(o*M-o)/2-N*o,R=u?"right":"left";k.forEach(B=>{B.style[t.isHorizontal()?R:"top"]=`${T}px`})}}m.forEach((k,L)=>{if(p.type==="fraction"&&(k.querySelectorAll(Xt(p.currentClass)).forEach(S=>{S.textContent=p.formatFractionCurrent(w+1)}),k.querySelectorAll(Xt(p.totalClass)).forEach(S=>{S.textContent=p.formatFractionTotal(I)})),p.type==="progressbar"){let S;p.progressbarOpposite?S=t.isHorizontal()?"vertical":"horizontal":S=t.isHorizontal()?"horizontal":"vertical";const N=(w+1)/I;let M=1,T=1;S==="horizontal"?M=N:T=N,k.querySelectorAll(Xt(p.progressbarFillClass)).forEach(R=>{R.style.transform=`translate3d(0,0,0) scaleX(${M}) scaleY(${T})`,R.style.transitionDuration=`${t.params.speed}ms`})}p.type==="custom"&&p.renderCustom?(k.innerHTML=p.renderCustom(t,w+1,I),L===0&&i("paginationRender",k)):(L===0&&i("paginationRender",k),i("paginationUpdate",k)),t.params.watchOverflow&&t.enabled&&k.classList[t.isLocked?"add":"remove"](p.lockClass)})}function g(){const u=t.params.pagination;if(a())return;const p=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let m=t.pagination.el;m=W(m);let w="";if(u.type==="bullets"){let z=t.params.loop?Math.ceil(p/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&z>p&&(z=p);for(let b=0;b<z;b+=1)u.renderBullet?w+=u.renderBullet.call(t,b,u.bulletClass):w+=`<${u.bulletElement} ${t.isElement?'part="bullet"':""} class="${u.bulletClass}"></${u.bulletElement}>`}u.type==="fraction"&&(u.renderFraction?w=u.renderFraction.call(t,u.currentClass,u.totalClass):w=`<span class="${u.currentClass}"></span> / <span class="${u.totalClass}"></span>`),u.type==="progressbar"&&(u.renderProgressbar?w=u.renderProgressbar.call(t,u.progressbarFillClass):w=`<span class="${u.progressbarFillClass}"></span>`),t.pagination.bullets=[],m.forEach(z=>{u.type!=="custom"&&(z.innerHTML=w||""),u.type==="bullets"&&t.pagination.bullets.push(...z.querySelectorAll(Xt(u.bulletClass)))}),u.type!=="custom"&&i("paginationRender",m[0])}function x(){t.params.pagination=Gm(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const u=t.params.pagination;if(!u.el)return;let p;typeof u.el=="string"&&t.isElement&&(p=t.el.querySelector(u.el)),!p&&typeof u.el=="string"&&(p=[...document.querySelectorAll(u.el)]),p||(p=u.el),!(!p||p.length===0)&&(t.params.uniqueNavElements&&typeof u.el=="string"&&Array.isArray(p)&&p.length>1&&(p=[...t.el.querySelectorAll(u.el)],p.length>1&&(p=p.filter(m=>Hm(m,".swiper")[0]===t.el)[0])),Array.isArray(p)&&p.length===1&&(p=p[0]),Object.assign(t.pagination,{el:p}),p=W(p),p.forEach(m=>{u.type==="bullets"&&u.clickable&&m.classList.add(...(u.clickableClass||"").split(" ")),m.classList.add(u.modifierClass+u.type),m.classList.add(t.isHorizontal()?u.horizontalClass:u.verticalClass),u.type==="bullets"&&u.dynamicBullets&&(m.classList.add(`${u.modifierClass}${u.type}-dynamic`),l=0,u.dynamicMainBullets<1&&(u.dynamicMainBullets=1)),u.type==="progressbar"&&u.progressbarOpposite&&m.classList.add(u.progressbarOppositeClass),u.clickable&&m.addEventListener("click",f),t.enabled||m.classList.add(u.lockClass)}))}function v(){const u=t.params.pagination;if(a())return;let p=t.pagination.el;p&&(p=W(p),p.forEach(m=>{m.classList.remove(u.hiddenClass),m.classList.remove(u.modifierClass+u.type),m.classList.remove(t.isHorizontal()?u.horizontalClass:u.verticalClass),u.clickable&&(m.classList.remove(...(u.clickableClass||"").split(" ")),m.removeEventListener("click",f))})),t.pagination.bullets&&t.pagination.bullets.forEach(m=>m.classList.remove(...u.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const u=t.params.pagination;let{el:p}=t.pagination;p=W(p),p.forEach(m=>{m.classList.remove(u.horizontalClass,u.verticalClass),m.classList.add(t.isHorizontal()?u.horizontalClass:u.verticalClass)})}),r("init",()=>{t.params.pagination.enabled===!1?j():(x(),g(),h())}),r("activeIndexChange",()=>{typeof t.snapIndex>"u"&&h()}),r("snapIndexChange",()=>{h()}),r("snapGridLengthChange",()=>{g(),h()}),r("destroy",()=>{v()}),r("enable disable",()=>{let{el:u}=t.pagination;u&&(u=W(u),u.forEach(p=>p.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),r("lock unlock",()=>{h()}),r("click",(u,p)=>{const m=p.target,w=W(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&w&&w.length>0&&!m.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&m===t.navigation.nextEl||t.navigation.prevEl&&m===t.navigation.prevEl))return;const z=w[0].classList.contains(t.params.pagination.hiddenClass);i(z===!0?"paginationShow":"paginationHide"),w.forEach(b=>b.classList.toggle(t.params.pagination.hiddenClass))}});const y=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:u}=t.pagination;u&&(u=W(u),u.forEach(p=>p.classList.remove(t.params.pagination.paginationDisabledClass))),x(),g(),h()},j=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:u}=t.pagination;u&&(u=W(u),u.forEach(p=>p.classList.add(t.params.pagination.paginationDisabledClass))),v()};Object.assign(t.pagination,{enable:y,disable:j,render:g,update:h,init:x,destroy:v})}function Zw(e){let{swiper:t,extendParams:n,on:r}=e;n({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),t.a11y={clicked:!1};let i=null,s,o,l=new Date().getTime();function a(O){const C=i;C.length!==0&&(C.innerHTML="",C.innerHTML=O)}function d(O){const C=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(O).replace(/x/g,C)}function f(O){O=W(O),O.forEach(C=>{C.setAttribute("tabIndex","0")})}function h(O){O=W(O),O.forEach(C=>{C.setAttribute("tabIndex","-1")})}function g(O,C){O=W(O),O.forEach($=>{$.setAttribute("role",C)})}function x(O,C){O=W(O),O.forEach($=>{$.setAttribute("aria-roledescription",C)})}function v(O,C){O=W(O),O.forEach($=>{$.setAttribute("aria-controls",C)})}function y(O,C){O=W(O),O.forEach($=>{$.setAttribute("aria-label",C)})}function j(O,C){O=W(O),O.forEach($=>{$.setAttribute("id",C)})}function u(O,C){O=W(O),O.forEach($=>{$.setAttribute("aria-live",C)})}function p(O){O=W(O),O.forEach(C=>{C.setAttribute("aria-disabled",!0)})}function m(O){O=W(O),O.forEach(C=>{C.setAttribute("aria-disabled",!1)})}function w(O){if(O.keyCode!==13&&O.keyCode!==32)return;const C=t.params.a11y,$=O.target;if(!(t.pagination&&t.pagination.el&&($===t.pagination.el||t.pagination.el.contains(O.target))&&!O.target.matches(Xt(t.params.pagination.bulletClass)))){if(t.navigation&&t.navigation.prevEl&&t.navigation.nextEl){const _=W(t.navigation.prevEl);W(t.navigation.nextEl).includes($)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?a(C.lastSlideMessage):a(C.nextSlideMessage)),_.includes($)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?a(C.firstSlideMessage):a(C.prevSlideMessage))}t.pagination&&$.matches(Xt(t.params.pagination.bulletClass))&&$.click()}}function z(){if(t.params.loop||t.params.rewind||!t.navigation)return;const{nextEl:O,prevEl:C}=t.navigation;C&&(t.isBeginning?(p(C),h(C)):(m(C),f(C))),O&&(t.isEnd?(p(O),h(O)):(m(O),f(O)))}function b(){return t.pagination&&t.pagination.bullets&&t.pagination.bullets.length}function I(){return b()&&t.params.pagination.clickable}function k(){const O=t.params.a11y;b()&&t.pagination.bullets.forEach(C=>{t.params.pagination.clickable&&(f(C),t.params.pagination.renderBullet||(g(C,"button"),y(C,O.paginationBulletMessage.replace(/\{\{index\}\}/,Ti(C)+1)))),C.matches(Xt(t.params.pagination.bulletActiveClass))?C.setAttribute("aria-current","true"):C.removeAttribute("aria-current")})}const L=(O,C,$)=>{f(O),O.tagName!=="BUTTON"&&(g(O,"button"),O.addEventListener("keydown",w)),y(O,$),v(O,C)},S=O=>{o&&o!==O.target&&!o.contains(O.target)&&(s=!0),t.a11y.clicked=!0},N=()=>{s=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{t.destroyed||(t.a11y.clicked=!1)})})},M=O=>{l=new Date().getTime()},T=O=>{if(t.a11y.clicked||new Date().getTime()-l<100)return;const C=O.target.closest(`.${t.params.slideClass}, swiper-slide`);if(!C||!t.slides.includes(C))return;o=C;const $=t.slides.indexOf(C)===t.activeIndex,_=t.params.watchSlidesProgress&&t.visibleSlides&&t.visibleSlides.includes(C);$||_||O.sourceCapabilities&&O.sourceCapabilities.firesTouchEvents||(t.isHorizontal()?t.el.scrollLeft=0:t.el.scrollTop=0,requestAnimationFrame(()=>{s||(t.slideTo(t.slides.indexOf(C),0),s=!1)}))},R=()=>{const O=t.params.a11y;O.itemRoleDescriptionMessage&&x(t.slides,O.itemRoleDescriptionMessage),O.slideRole&&g(t.slides,O.slideRole);const C=t.slides.length;O.slideLabelMessage&&t.slides.forEach(($,_)=>{const H=t.params.loop?parseInt($.getAttribute("data-swiper-slide-index"),10):_,V=O.slideLabelMessage.replace(/\{\{index\}\}/,H+1).replace(/\{\{slidesLength\}\}/,C);y($,V)})},B=()=>{const O=t.params.a11y;t.el.append(i);const C=t.el;O.containerRoleDescriptionMessage&&x(C,O.containerRoleDescriptionMessage),O.containerMessage&&y(C,O.containerMessage);const $=t.wrapperEl,_=O.id||$.getAttribute("id")||`swiper-wrapper-${d(16)}`,H=t.params.autoplay&&t.params.autoplay.enabled?"off":"polite";j($,_),u($,H),R();let{nextEl:V,prevEl:se}=t.navigation?t.navigation:{};V=W(V),se=W(se),V&&V.forEach(ee=>L(ee,_,O.nextSlideMessage)),se&&se.forEach(ee=>L(ee,_,O.prevSlideMessage)),I()&&W(t.pagination.el).forEach(Le=>{Le.addEventListener("keydown",w)}),ft().addEventListener("visibilitychange",M),t.el.addEventListener("focus",T,!0),t.el.addEventListener("focus",T,!0),t.el.addEventListener("pointerdown",S,!0),t.el.addEventListener("pointerup",N,!0)};function U(){i&&i.remove();let{nextEl:O,prevEl:C}=t.navigation?t.navigation:{};O=W(O),C=W(C),O&&O.forEach(_=>_.removeEventListener("keydown",w)),C&&C.forEach(_=>_.removeEventListener("keydown",w)),I()&&W(t.pagination.el).forEach(H=>{H.removeEventListener("keydown",w)}),ft().removeEventListener("visibilitychange",M),t.el.removeEventListener("focus",T,!0),t.el.removeEventListener("pointerdown",S,!0),t.el.removeEventListener("pointerup",N,!0)}r("beforeInit",()=>{i=Pi("span",t.params.a11y.notificationClass),i.setAttribute("aria-live","assertive"),i.setAttribute("aria-atomic","true")}),r("afterInit",()=>{t.params.a11y.enabled&&B()}),r("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{t.params.a11y.enabled&&R()}),r("fromEdge toEdge afterInit lock unlock",()=>{t.params.a11y.enabled&&z()}),r("paginationUpdate",()=>{t.params.a11y.enabled&&k()}),r("destroy",()=>{t.params.a11y.enabled&&U()})}function qw(e){let{swiper:t,extendParams:n,on:r,emit:i,params:s}=e;t.autoplay={running:!1,paused:!1,timeLeft:0},n({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,l,a=s&&s.autoplay?s.autoplay.delay:3e3,d=s&&s.autoplay?s.autoplay.delay:3e3,f,h=new Date().getTime(),g,x,v,y,j,u,p;function m(C){!t||t.destroyed||!t.wrapperEl||C.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",m),!p&&S())}const w=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?g=!0:g&&(d=f,g=!1);const C=t.autoplay.paused?f:h+d-new Date().getTime();t.autoplay.timeLeft=C,i("autoplayTimeLeft",C,C/a),l=requestAnimationFrame(()=>{w()})},z=()=>{let C;return t.virtual&&t.params.virtual.enabled?C=t.slides.filter(_=>_.classList.contains("swiper-slide-active"))[0]:C=t.slides[t.activeIndex],C?parseInt(C.getAttribute("data-swiper-autoplay"),10):void 0},b=C=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(l),w();let $=typeof C>"u"?t.params.autoplay.delay:C;a=t.params.autoplay.delay,d=t.params.autoplay.delay;const _=z();!Number.isNaN(_)&&_>0&&typeof C>"u"&&($=_,a=_,d=_),f=$;const H=t.params.speed,V=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(H,!0,!0),i("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,H,!0,!0),i("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(H,!0,!0),i("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,H,!0,!0),i("autoplay")),t.params.cssMode&&(h=new Date().getTime(),requestAnimationFrame(()=>{b()})))};return $>0?(clearTimeout(o),o=setTimeout(()=>{V()},$)):requestAnimationFrame(()=>{V()}),$},I=()=>{h=new Date().getTime(),t.autoplay.running=!0,b(),i("autoplayStart")},k=()=>{t.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(l),i("autoplayStop")},L=(C,$)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(o),C||(u=!0);const _=()=>{i("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",m):S()};if(t.autoplay.paused=!0,$){j&&(f=t.params.autoplay.delay),j=!1,_();return}f=(f||t.params.autoplay.delay)-(new Date().getTime()-h),!(t.isEnd&&f<0&&!t.params.loop)&&(f<0&&(f=0),_())},S=()=>{t.isEnd&&f<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(h=new Date().getTime(),u?(u=!1,b(f)):b(),t.autoplay.paused=!1,i("autoplayResume"))},N=()=>{if(t.destroyed||!t.autoplay.running)return;const C=ft();C.visibilityState==="hidden"&&(u=!0,L(!0)),C.visibilityState==="visible"&&S()},M=C=>{C.pointerType==="mouse"&&(u=!0,p=!0,!(t.animating||t.autoplay.paused)&&L(!0))},T=C=>{C.pointerType==="mouse"&&(p=!1,t.autoplay.paused&&S())},R=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",M),t.el.addEventListener("pointerleave",T))},B=()=>{t.el.removeEventListener("pointerenter",M),t.el.removeEventListener("pointerleave",T)},U=()=>{ft().addEventListener("visibilitychange",N)},O=()=>{ft().removeEventListener("visibilitychange",N)};r("init",()=>{t.params.autoplay.enabled&&(R(),U(),I())}),r("destroy",()=>{B(),O(),t.autoplay.running&&k()}),r("_freeModeStaticRelease",()=>{(v||u)&&S()}),r("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?k():L(!0,!0)}),r("beforeTransitionStart",(C,$,_)=>{t.destroyed||!t.autoplay.running||(_||!t.params.autoplay.disableOnInteraction?L(!0,!0):k())}),r("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){k();return}x=!0,v=!1,u=!1,y=setTimeout(()=>{u=!0,v=!0,L(!0)},200)}}),r("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!x)){if(clearTimeout(y),clearTimeout(o),t.params.autoplay.disableOnInteraction){v=!1,x=!1;return}v&&t.params.cssMode&&S(),v=!1,x=!1}}),r("slideChange",()=>{t.destroyed||!t.autoplay.running||(j=!0)}),Object.assign(t.autoplay,{start:I,stop:k,pause:L,resume:S})}let Ta;function e2(){const e=Xe(),t=ft();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Um(){return Ta||(Ta=e2()),Ta}let La;function t2(e){let{userAgent:t}=e===void 0?{}:e;const n=Um(),r=Xe(),i=r.navigator.platform,s=t||r.navigator.userAgent,o={ios:!1,android:!1},l=r.screen.width,a=r.screen.height,d=s.match(/(Android);?[\s\/]+([\d.]+)?/);let f=s.match(/(iPad).*OS\s([\d_]+)/);const h=s.match(/(iPod)(.*OS\s([\d_]+))?/),g=!f&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),x=i==="Win32";let v=i==="MacIntel";const y=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!f&&v&&n.touch&&y.indexOf(`${l}x${a}`)>=0&&(f=s.match(/(Version)\/([\d.]+)/),f||(f=[0,1,"13_0_0"]),v=!1),d&&!x&&(o.os="android",o.android=!0),(f||g||h)&&(o.os="ios",o.ios=!0),o}function Wm(e){return e===void 0&&(e={}),La||(La=t2(e)),La}let Ia;function n2(){const e=Xe(),t=Wm();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[a,d]=l.split("Version/")[1].split(" ")[0].split(".").map(f=>Number(f));n=a<16||a===16&&d<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),s=r(),o=s||i&&t.ios;return{isSafari:n||s,needPerspectiveFix:n,need3dFix:o,isWebView:i}}function r2(){return Ia||(Ia=n2()),Ia}function i2(e){let{swiper:t,on:n,emit:r}=e;const i=Xe();let s=null,o=null;const l=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},a=()=>{!t||t.destroyed||!t.initialized||(s=new ResizeObserver(h=>{o=i.requestAnimationFrame(()=>{const{width:g,height:x}=t;let v=g,y=x;h.forEach(j=>{let{contentBoxSize:u,contentRect:p,target:m}=j;m&&m!==t.el||(v=p?p.width:(u[0]||u).inlineSize,y=p?p.height:(u[0]||u).blockSize)}),(v!==g||y!==x)&&l()})}),s.observe(t.el))},d=()=>{o&&i.cancelAnimationFrame(o),s&&s.unobserve&&t.el&&(s.unobserve(t.el),s=null)},f=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){a();return}i.addEventListener("resize",l),i.addEventListener("orientationchange",f)}),n("destroy",()=>{d(),i.removeEventListener("resize",l),i.removeEventListener("orientationchange",f)})}function s2(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const s=[],o=Xe(),l=function(f,h){h===void 0&&(h={});const g=o.MutationObserver||o.WebkitMutationObserver,x=new g(v=>{if(t.__preventObserver__)return;if(v.length===1){i("observerUpdate",v[0]);return}const y=function(){i("observerUpdate",v[0])};o.requestAnimationFrame?o.requestAnimationFrame(y):o.setTimeout(y,0)});x.observe(f,{attributes:typeof h.attributes>"u"?!0:h.attributes,childList:typeof h.childList>"u"?!0:h.childList,characterData:typeof h.characterData>"u"?!0:h.characterData}),s.push(x)},a=()=>{if(t.params.observer){if(t.params.observeParents){const f=Hm(t.hostEl);for(let h=0;h<f.length;h+=1)l(f[h])}l(t.hostEl,{childList:t.params.observeSlideChildren}),l(t.wrapperEl,{attributes:!1})}},d=()=>{s.forEach(f=>{f.disconnect()}),s.splice(0,s.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",a),r("destroy",d)}var o2={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(s=>{r.eventsListeners[s]||(r.eventsListeners[s]=[]),r.eventsListeners[s][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,o=new Array(s),l=0;l<s;l++)o[l]=arguments[l];t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,s)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(s,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return typeof s[0]=="string"||Array.isArray(s[0])?(t=s[0],n=s.slice(1,s.length),r=e):(t=s[0].events,n=s[0].data,r=s[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(a=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(d=>{d.apply(r,[a,...n])}),e.eventsListeners&&e.eventsListeners[a]&&e.eventsListeners[a].forEach(d=>{d.apply(r,n)})}),e}};function a2(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(en(r,"padding-left")||0,10)-parseInt(en(r,"padding-right")||0,10),n=n-parseInt(en(r,"padding-top")||0,10)-parseInt(en(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function l2(){const e=this;function t(S,N){return parseFloat(S.getPropertyValue(e.getDirectionLabel(N))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,size:s,rtlTranslate:o,wrongRTL:l}=e,a=e.virtual&&n.virtual.enabled,d=a?e.virtual.slides.length:e.slides.length,f=wt(i,`.${e.params.slideClass}, swiper-slide`),h=a?e.virtual.slides.length:f.length;let g=[];const x=[],v=[];let y=n.slidesOffsetBefore;typeof y=="function"&&(y=n.slidesOffsetBefore.call(e));let j=n.slidesOffsetAfter;typeof j=="function"&&(j=n.slidesOffsetAfter.call(e));const u=e.snapGrid.length,p=e.slidesGrid.length;let m=n.spaceBetween,w=-y,z=0,b=0;if(typeof s>"u")return;typeof m=="string"&&m.indexOf("%")>=0?m=parseFloat(m.replace("%",""))/100*s:typeof m=="string"&&(m=parseFloat(m)),e.virtualSize=-m,f.forEach(S=>{o?S.style.marginLeft="":S.style.marginRight="",S.style.marginBottom="",S.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(ds(r,"--swiper-centered-offset-before",""),ds(r,"--swiper-centered-offset-after",""));const I=n.grid&&n.grid.rows>1&&e.grid;I?e.grid.initSlides(f):e.grid&&e.grid.unsetSlides();let k;const L=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(S=>typeof n.breakpoints[S].slidesPerView<"u").length>0;for(let S=0;S<h;S+=1){k=0;let N;if(f[S]&&(N=f[S]),I&&e.grid.updateSlide(S,N,f),!(f[S]&&en(N,"display")==="none")){if(n.slidesPerView==="auto"){L&&(f[S].style[e.getDirectionLabel("width")]="");const M=getComputedStyle(N),T=N.style.transform,R=N.style.webkitTransform;if(T&&(N.style.transform="none"),R&&(N.style.webkitTransform="none"),n.roundLengths)k=e.isHorizontal()?Ql(N,"width"):Ql(N,"height");else{const B=t(M,"width"),U=t(M,"padding-left"),O=t(M,"padding-right"),C=t(M,"margin-left"),$=t(M,"margin-right"),_=M.getPropertyValue("box-sizing");if(_&&_==="border-box")k=B+C+$;else{const{clientWidth:H,offsetWidth:V}=N;k=B+U+O+C+$+(V-H)}}T&&(N.style.transform=T),R&&(N.style.webkitTransform=R),n.roundLengths&&(k=Math.floor(k))}else k=(s-(n.slidesPerView-1)*m)/n.slidesPerView,n.roundLengths&&(k=Math.floor(k)),f[S]&&(f[S].style[e.getDirectionLabel("width")]=`${k}px`);f[S]&&(f[S].swiperSlideSize=k),v.push(k),n.centeredSlides?(w=w+k/2+z/2+m,z===0&&S!==0&&(w=w-s/2-m),S===0&&(w=w-s/2-m),Math.abs(w)<1/1e3&&(w=0),n.roundLengths&&(w=Math.floor(w)),b%n.slidesPerGroup===0&&g.push(w),x.push(w)):(n.roundLengths&&(w=Math.floor(w)),(b-Math.min(e.params.slidesPerGroupSkip,b))%e.params.slidesPerGroup===0&&g.push(w),x.push(w),w=w+k+m),e.virtualSize+=k+m,z=k,b+=1}}if(e.virtualSize=Math.max(e.virtualSize,s)+j,o&&l&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+m}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+m}px`),I&&e.grid.updateWrapperSize(k,g),!n.centeredSlides){const S=[];for(let N=0;N<g.length;N+=1){let M=g[N];n.roundLengths&&(M=Math.floor(M)),g[N]<=e.virtualSize-s&&S.push(M)}g=S,Math.floor(e.virtualSize-s)-Math.floor(g[g.length-1])>1&&g.push(e.virtualSize-s)}if(a&&n.loop){const S=v[0]+m;if(n.slidesPerGroup>1){const N=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),M=S*n.slidesPerGroup;for(let T=0;T<N;T+=1)g.push(g[g.length-1]+M)}for(let N=0;N<e.virtual.slidesBefore+e.virtual.slidesAfter;N+=1)n.slidesPerGroup===1&&g.push(g[g.length-1]+S),x.push(x[x.length-1]+S),e.virtualSize+=S}if(g.length===0&&(g=[0]),m!==0){const S=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");f.filter((N,M)=>!n.cssMode||n.loop?!0:M!==f.length-1).forEach(N=>{N.style[S]=`${m}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let S=0;v.forEach(M=>{S+=M+(m||0)}),S-=m;const N=S-s;g=g.map(M=>M<=0?-y:M>N?N+j:M)}if(n.centerInsufficientSlides){let S=0;if(v.forEach(N=>{S+=N+(m||0)}),S-=m,S<s){const N=(s-S)/2;g.forEach((M,T)=>{g[T]=M-N}),x.forEach((M,T)=>{x[T]=M+N})}}if(Object.assign(e,{slides:f,snapGrid:g,slidesGrid:x,slidesSizesGrid:v}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){ds(r,"--swiper-centered-offset-before",`${-g[0]}px`),ds(r,"--swiper-centered-offset-after",`${e.size/2-v[v.length-1]/2}px`);const S=-e.snapGrid[0],N=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(M=>M+S),e.slidesGrid=e.slidesGrid.map(M=>M+N)}if(h!==d&&e.emit("slidesLengthChange"),g.length!==u&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),x.length!==p&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!a&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const S=`${n.containerModifierClass}backface-hidden`,N=e.el.classList.contains(S);h<=n.maxBackfaceHiddenSlides?N||e.el.classList.add(S):N&&e.el.classList.remove(S)}}function c2(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,s;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(s=0;s<Math.ceil(t.params.slidesPerView);s+=1){const l=t.activeIndex+s;if(l>t.slides.length&&!r)break;n.push(o(l))}else n.push(o(t.activeIndex));for(s=0;s<n.length;s+=1)if(typeof n[s]<"u"){const l=n[s].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function u2(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}function d2(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:s}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;i&&(o=e),r.forEach(a=>{a.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass)}),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let a=0;a<r.length;a+=1){const d=r[a];let f=d.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(f-=r[0].swiperSlideOffset);const h=(o+(n.centeredSlides?t.minTranslate():0)-f)/(d.swiperSlideSize+l),g=(o-s[0]+(n.centeredSlides?t.minTranslate():0)-f)/(d.swiperSlideSize+l),x=-(o-f),v=x+t.slidesSizesGrid[a],y=x>=0&&x<=t.size-t.slidesSizesGrid[a];(x>=0&&x<t.size-1||v>1&&v<=t.size||x<=0&&v>=t.size)&&(t.visibleSlides.push(d),t.visibleSlidesIndexes.push(a),r[a].classList.add(n.slideVisibleClass)),y&&r[a].classList.add(n.slideFullyVisibleClass),d.progress=i?-h:h,d.originalProgress=i?-g:g}}function p2(e){const t=this;if(typeof e>"u"){const f=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*f||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:s,isEnd:o,progressLoop:l}=t;const a=s,d=o;if(r===0)i=0,s=!0,o=!0;else{i=(e-t.minTranslate())/r;const f=Math.abs(e-t.minTranslate())<1,h=Math.abs(e-t.maxTranslate())<1;s=f||i<=0,o=h||i>=1,f&&(i=0),h&&(i=1)}if(n.loop){const f=t.getSlideIndexByData(0),h=t.getSlideIndexByData(t.slides.length-1),g=t.slidesGrid[f],x=t.slidesGrid[h],v=t.slidesGrid[t.slidesGrid.length-1],y=Math.abs(e);y>=g?l=(y-g)/v:l=(y+v-x)/v,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:s,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),s&&!a&&t.emit("reachBeginning toEdge"),o&&!d&&t.emit("reachEnd toEdge"),(a&&!s||d&&!o)&&t.emit("fromEdge"),t.emit("progress",i)}const Ma=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function f2(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,s=e.virtual&&n.virtual.enabled,o=e.grid&&n.grid&&n.grid.rows>1,l=h=>wt(r,`.${n.slideClass}${h}, swiper-slide${h}`)[0];let a,d,f;if(s)if(n.loop){let h=i-e.virtual.slidesBefore;h<0&&(h=e.virtual.slides.length+h),h>=e.virtual.slides.length&&(h-=e.virtual.slides.length),a=l(`[data-swiper-slide-index="${h}"]`)}else a=l(`[data-swiper-slide-index="${i}"]`);else o?(a=t.filter(h=>h.column===i)[0],f=t.filter(h=>h.column===i+1)[0],d=t.filter(h=>h.column===i-1)[0]):a=t[i];a&&(o||(f=Xw(a,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!f&&(f=t[0]),d=Kw(a,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d===0&&(d=t[t.length-1]))),t.forEach(h=>{Ma(h,h===a,n.slideActiveClass),Ma(h,h===f,n.slideNextClass),Ma(h,h===d,n.slidePrevClass)}),e.emitSlidesClasses()}const Is=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},Na=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Jl=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const o=i,l=[o-t];l.push(...Array.from({length:t}).map((a,d)=>o+r+d)),e.slides.forEach((a,d)=>{l.includes(a.column)&&Na(e,d)});return}const s=i+r-1;if(e.params.rewind||e.params.loop)for(let o=i-t;o<=s+t;o+=1){const l=(o%n+n)%n;(l<i||l>s)&&Na(e,l)}else for(let o=Math.max(i-t,0);o<=Math.min(s+t,n-1);o+=1)o!==i&&(o>s||o<i)&&Na(e,o)};function h2(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let s=0;s<t.length;s+=1)typeof t[s+1]<"u"?r>=t[s]&&r<t[s+1]-(t[s+1]-t[s])/2?i=s:r>=t[s]&&r<t[s+1]&&(i=s+1):r>=t[s]&&(i=s);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function m2(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:s,realIndex:o,snapIndex:l}=t;let a=e,d;const f=x=>{let v=x-t.virtual.slidesBefore;return v<0&&(v=t.virtual.slides.length+v),v>=t.virtual.slides.length&&(v-=t.virtual.slides.length),v};if(typeof a>"u"&&(a=h2(t)),r.indexOf(n)>=0)d=r.indexOf(n);else{const x=Math.min(i.slidesPerGroupSkip,a);d=x+Math.floor((a-x)/i.slidesPerGroup)}if(d>=r.length&&(d=r.length-1),a===s&&!t.params.loop){d!==l&&(t.snapIndex=d,t.emit("snapIndexChange"));return}if(a===s&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=f(a);return}const h=t.grid&&i.grid&&i.grid.rows>1;let g;if(t.virtual&&i.virtual.enabled&&i.loop)g=f(a);else if(h){const x=t.slides.filter(y=>y.column===a)[0];let v=parseInt(x.getAttribute("data-swiper-slide-index"),10);Number.isNaN(v)&&(v=Math.max(t.slides.indexOf(x),0)),g=Math.floor(v/i.grid.rows)}else if(t.slides[a]){const x=t.slides[a].getAttribute("data-swiper-slide-index");x?g=parseInt(x,10):g=a}else g=a;Object.assign(t,{previousSnapIndex:l,snapIndex:d,previousRealIndex:o,realIndex:g,previousIndex:s,activeIndex:a}),t.initialized&&Jl(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(o!==g&&t.emit("realIndexChange"),t.emit("slideChange"))}function g2(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let s=!1,o;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){s=!0,o=l;break}}if(i&&s)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=o;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var v2={updateSize:a2,updateSlides:l2,updateAutoHeight:c2,updateSlidesOffset:u2,updateSlidesProgress:d2,updateProgress:p2,updateSlidesClasses:f2,updateActiveIndex:m2,updateClickedSlide:g2};function x2(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:s}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let o=Ww(s,e);return o+=t.cssOverflowAdjustment(),r&&(o=-o),o||0}function y2(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:s,progress:o}=n;let l=0,a=0;const d=0;n.isHorizontal()?l=r?-e:e:a=e,i.roundLengths&&(l=Math.floor(l),a=Math.floor(a)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:a,i.cssMode?s[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-a:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():a-=n.cssOverflowAdjustment(),s.style.transform=`translate3d(${l}px, ${a}px, ${d}px)`);let f;const h=n.maxTranslate()-n.minTranslate();h===0?f=0:f=(e-n.minTranslate())/h,f!==o&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function w2(){return-this.snapGrid[0]}function k2(){return-this.snapGrid[this.snapGrid.length-1]}function S2(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const s=this,{params:o,wrapperEl:l}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;const a=s.minTranslate(),d=s.maxTranslate();let f;if(r&&e>a?f=a:r&&e<d?f=d:f=e,s.updateProgress(f),o.cssMode){const h=s.isHorizontal();if(t===0)l[h?"scrollLeft":"scrollTop"]=-f;else{if(!s.support.smoothScroll)return Vm({swiper:s,targetPosition:-f,side:h?"left":"top"}),!0;l.scrollTo({[h?"left":"top"]:-f,behavior:"smooth"})}return!0}return t===0?(s.setTransition(0),s.setTranslate(f),n&&(s.emit("beforeTransitionStart",t,i),s.emit("transitionEnd"))):(s.setTransition(t),s.setTranslate(f),n&&(s.emit("beforeTransitionStart",t,i),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(g){!s||s.destroyed||g.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,s.animating=!1,n&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var j2={getTranslate:x2,setTranslate:y2,minTranslate:w2,maxTranslate:k2,translateTo:S2};function z2(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function Ym(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:s,previousIndex:o}=t;let l=r;if(l||(s>o?l="next":s<o?l="prev":l="reset"),t.emit(`transition${i}`),n&&s!==o){if(l==="reset"){t.emit(`slideResetTransition${i}`);return}t.emit(`slideChangeTransition${i}`),l==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function b2(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Ym({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function C2(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Ym({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var E2={setTransition:z2,transitionStart:b2,transitionEnd:C2};function P2(e,t,n,r,i){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const s=this;let o=e;o<0&&(o=0);const{params:l,snapGrid:a,slidesGrid:d,previousIndex:f,activeIndex:h,rtlTranslate:g,wrapperEl:x,enabled:v}=s;if(!v&&!r&&!i||s.destroyed||s.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=s.params.speed);const y=Math.min(s.params.slidesPerGroupSkip,o);let j=y+Math.floor((o-y)/s.params.slidesPerGroup);j>=a.length&&(j=a.length-1);const u=-a[j];if(l.normalizeSlideIndex)for(let m=0;m<d.length;m+=1){const w=-Math.floor(u*100),z=Math.floor(d[m]*100),b=Math.floor(d[m+1]*100);typeof d[m+1]<"u"?w>=z&&w<b-(b-z)/2?o=m:w>=z&&w<b&&(o=m+1):w>=z&&(o=m)}if(s.initialized&&o!==h&&(!s.allowSlideNext&&(g?u>s.translate&&u>s.minTranslate():u<s.translate&&u<s.minTranslate())||!s.allowSlidePrev&&u>s.translate&&u>s.maxTranslate()&&(h||0)!==o))return!1;o!==(f||0)&&n&&s.emit("beforeSlideChangeStart"),s.updateProgress(u);let p;if(o>h?p="next":o<h?p="prev":p="reset",g&&-u===s.translate||!g&&u===s.translate)return s.updateActiveIndex(o),l.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),l.effect!=="slide"&&s.setTranslate(u),p!=="reset"&&(s.transitionStart(n,p),s.transitionEnd(n,p)),!1;if(l.cssMode){const m=s.isHorizontal(),w=g?u:-u;if(t===0){const z=s.virtual&&s.params.virtual.enabled;z&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),z&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{x[m?"scrollLeft":"scrollTop"]=w})):x[m?"scrollLeft":"scrollTop"]=w,z&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1})}else{if(!s.support.smoothScroll)return Vm({swiper:s,targetPosition:w,side:m?"left":"top"}),!0;x.scrollTo({[m?"left":"top"]:w,behavior:"smooth"})}return!0}return s.setTransition(t),s.setTranslate(u),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,r),s.transitionStart(n,p),t===0?s.transitionEnd(n,p):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(w){!s||s.destroyed||w.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(n,p))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function T2(e,t,n,r){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const s=i.grid&&i.params.grid&&i.params.grid.rows>1;let o=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)o=o+i.virtual.slidesBefore;else{let l;if(s){const g=o*i.params.grid.rows;l=i.slides.filter(x=>x.getAttribute("data-swiper-slide-index")*1===g)[0].column}else l=i.getSlideIndexByData(o);const a=s?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:d}=i.params;let f=i.params.slidesPerView;f==="auto"?f=i.slidesPerViewDynamic():(f=Math.ceil(parseFloat(i.params.slidesPerView,10)),d&&f%2===0&&(f=f+1));let h=a-l<f;if(d&&(h=h||l<Math.ceil(f/2)),r&&d&&i.params.slidesPerView!=="auto"&&!s&&(h=!1),h){const g=d?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:g,slideTo:!0,activeSlideIndex:g==="next"?l+1:l-a+1,slideRealIndex:g==="next"?i.realIndex:void 0})}if(s){const g=o*i.params.grid.rows;o=i.slides.filter(x=>x.getAttribute("data-swiper-slide-index")*1===g)[0].column}else o=i.getSlideIndexByData(o)}return requestAnimationFrame(()=>{i.slideTo(o,t,n,r)}),i}function L2(e,t,n){t===void 0&&(t=!0);const r=this,{enabled:i,params:s,animating:o}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const a=r.activeIndex<s.slidesPerGroupSkip?1:l,d=r.virtual&&s.virtual.enabled;if(s.loop){if(o&&!d&&s.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+a,e,t,n)}),!0}return s.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+a,e,t,n)}function I2(e,t,n){t===void 0&&(t=!0);const r=this,{params:i,snapGrid:s,slidesGrid:o,rtlTranslate:l,enabled:a,animating:d}=r;if(!a||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const f=r.virtual&&i.virtual.enabled;if(i.loop){if(d&&!f&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const h=l?r.translate:-r.translate;function g(u){return u<0?-Math.floor(Math.abs(u)):Math.floor(u)}const x=g(h),v=s.map(u=>g(u));let y=s[v.indexOf(x)-1];if(typeof y>"u"&&i.cssMode){let u;s.forEach((p,m)=>{x>=p&&(u=m)}),typeof u<"u"&&(y=s[u>0?u-1:u])}let j=0;if(typeof y<"u"&&(j=o.indexOf(y),j<0&&(j=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(j=j-r.slidesPerViewDynamic("previous",!0)+1,j=Math.max(j,0))),i.rewind&&r.isBeginning){const u=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(u,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(j,e,t,n)}),!0;return r.slideTo(j,e,t,n)}function M2(e,t,n){t===void 0&&(t=!0);const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function N2(e,t,n,r){t===void 0&&(t=!0),r===void 0&&(r=.5);const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let s=i.activeIndex;const o=Math.min(i.params.slidesPerGroupSkip,s),l=o+Math.floor((s-o)/i.params.slidesPerGroup),a=i.rtlTranslate?i.translate:-i.translate;if(a>=i.snapGrid[l]){const d=i.snapGrid[l],f=i.snapGrid[l+1];a-d>(f-d)*r&&(s+=i.params.slidesPerGroup)}else{const d=i.snapGrid[l-1],f=i.snapGrid[l];a-d<=(f-d)*r&&(s-=i.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,i.slidesGrid.length-1),i.slideTo(s,e,t,n)}function O2(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,s;const o=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;s=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=e.getSlideIndex(wt(n,`${o}[data-swiper-slide-index="${s}"]`)[0]),Xl(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=e.getSlideIndex(wt(n,`${o}[data-swiper-slide-index="${s}"]`)[0]),Xl(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var $2={slideTo:P2,slideToLoop:T2,slideNext:L2,slidePrev:I2,slideReset:M2,slideToClosest:N2,slideToClickedSlide:O2};function _2(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{wt(r,`.${n.slideClass}, swiper-slide`).forEach((h,g)=>{h.setAttribute("data-swiper-slide-index",g)})},s=t.grid&&n.grid&&n.grid.rows>1,o=n.slidesPerGroup*(s?n.grid.rows:1),l=t.slides.length%o!==0,a=s&&t.slides.length%n.grid.rows!==0,d=f=>{for(let h=0;h<f;h+=1){const g=t.isElement?Pi("swiper-slide",[n.slideBlankClass]):Pi("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(g)}};if(l){if(n.loopAddBlankSlides){const f=o-t.slides.length%o;d(f),t.recalcSlides(),t.updateSlides()}else fo("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(a){if(n.loopAddBlankSlides){const f=n.grid.rows-t.slides.length%n.grid.rows;d(f),t.recalcSlides(),t.updateSlides()}else fo("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function A2(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:s,byController:o,byMousewheel:l}=e===void 0?{}:e;const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:d,allowSlidePrev:f,allowSlideNext:h,slidesEl:g,params:x}=a,{centeredSlides:v}=x;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&x.virtual.enabled){n&&(!x.centeredSlides&&a.snapIndex===0?a.slideTo(a.virtual.slides.length,0,!1,!0):x.centeredSlides&&a.snapIndex<x.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0)),a.allowSlidePrev=f,a.allowSlideNext=h,a.emit("loopFix");return}let y=x.slidesPerView;y==="auto"?y=a.slidesPerViewDynamic():(y=Math.ceil(parseFloat(x.slidesPerView,10)),v&&y%2===0&&(y=y+1));const j=x.slidesPerGroupAuto?y:x.slidesPerGroup;let u=j;u%j!==0&&(u+=j-u%j),u+=x.loopAdditionalSlides,a.loopedSlides=u;const p=a.grid&&x.grid&&x.grid.rows>1;d.length<y+u?fo("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):p&&x.grid.fill==="row"&&fo("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const m=[],w=[];let z=a.activeIndex;typeof s>"u"?s=a.getSlideIndex(d.filter(T=>T.classList.contains(x.slideActiveClass))[0]):z=s;const b=r==="next"||!r,I=r==="prev"||!r;let k=0,L=0;const S=p?Math.ceil(d.length/x.grid.rows):d.length,M=(p?d[s].column:s)+(v&&typeof i>"u"?-y/2+.5:0);if(M<u){k=Math.max(u-M,j);for(let T=0;T<u-M;T+=1){const R=T-Math.floor(T/S)*S;if(p){const B=S-R-1;for(let U=d.length-1;U>=0;U-=1)d[U].column===B&&m.push(U)}else m.push(S-R-1)}}else if(M+y>S-u){L=Math.max(M-(S-u*2),j);for(let T=0;T<L;T+=1){const R=T-Math.floor(T/S)*S;p?d.forEach((B,U)=>{B.column===R&&w.push(U)}):w.push(R)}}if(a.__preventObserver__=!0,requestAnimationFrame(()=>{a.__preventObserver__=!1}),I&&m.forEach(T=>{d[T].swiperLoopMoveDOM=!0,g.prepend(d[T]),d[T].swiperLoopMoveDOM=!1}),b&&w.forEach(T=>{d[T].swiperLoopMoveDOM=!0,g.append(d[T]),d[T].swiperLoopMoveDOM=!1}),a.recalcSlides(),x.slidesPerView==="auto"?a.updateSlides():p&&(m.length>0&&I||w.length>0&&b)&&a.slides.forEach((T,R)=>{a.grid.updateSlide(R,T,a.slides)}),x.watchSlidesProgress&&a.updateSlidesOffset(),n){if(m.length>0&&I){if(typeof t>"u"){const T=a.slidesGrid[z],B=a.slidesGrid[z+k]-T;l?a.setTranslate(a.translate-B):(a.slideTo(z+Math.ceil(k),0,!1,!0),i&&(a.touchEventsData.startTranslate=a.touchEventsData.startTranslate-B,a.touchEventsData.currentTranslate=a.touchEventsData.currentTranslate-B))}else if(i){const T=p?m.length/x.grid.rows:m.length;a.slideTo(a.activeIndex+T,0,!1,!0),a.touchEventsData.currentTranslate=a.translate}}else if(w.length>0&&b)if(typeof t>"u"){const T=a.slidesGrid[z],B=a.slidesGrid[z-L]-T;l?a.setTranslate(a.translate-B):(a.slideTo(z-L,0,!1,!0),i&&(a.touchEventsData.startTranslate=a.touchEventsData.startTranslate-B,a.touchEventsData.currentTranslate=a.touchEventsData.currentTranslate-B))}else{const T=p?w.length/x.grid.rows:w.length;a.slideTo(a.activeIndex-T,0,!1,!0)}}if(a.allowSlidePrev=f,a.allowSlideNext=h,a.controller&&a.controller.control&&!o){const T={slideRealIndex:t,direction:r,setTranslate:i,activeSlideIndex:s,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach(R=>{!R.destroyed&&R.params.loop&&R.loopFix({...T,slideTo:R.params.slidesPerView===x.slidesPerView?n:!1})}):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix({...T,slideTo:a.controller.control.params.slidesPerView===x.slidesPerView?n:!1})}a.emit("loopFix")}function R2(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const s=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[s]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var D2={loopCreate:_2,loopFix:A2,loopDestroy:R2};function B2(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function F2(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var V2={setGrabCursor:B2,unsetGrabCursor:F2};function H2(e,t){t===void 0&&(t=this);function n(r){if(!r||r===ft()||r===Xe())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function tp(e,t,n){const r=Xe(),{params:i}=e,s=i.edgeSwipeDetection,o=i.edgeSwipeThreshold;return s&&(n<=o||n>=r.innerWidth-o)?s==="prevent"?(t.preventDefault(),!0):!1:!0}function G2(e){const t=this,n=ft();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){tp(t,r,r.targetTouches[0].pageX);return}const{params:s,touches:o,enabled:l}=t;if(!l||!s.simulateTouch&&r.pointerType==="mouse"||t.animating&&s.preventInteractionOnTransition)return;!t.animating&&s.cssMode&&s.loop&&t.loopFix();let a=r.target;if(s.touchEventsTarget==="wrapper"&&!t.wrapperEl.contains(a)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const d=!!s.noSwipingClass&&s.noSwipingClass!=="",f=r.composedPath?r.composedPath():r.path;d&&r.target&&r.target.shadowRoot&&f&&(a=f[0]);const h=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,g=!!(r.target&&r.target.shadowRoot);if(s.noSwiping&&(g?H2(h,a):a.closest(h))){t.allowClick=!0;return}if(s.swipeHandler&&!a.closest(s.swipeHandler))return;o.currentX=r.pageX,o.currentY=r.pageY;const x=o.currentX,v=o.currentY;if(!tp(t,r,x))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=x,o.startY=v,i.touchStartTime=po(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,s.threshold>0&&(i.allowThresholdMove=!1);let y=!0;a.matches(i.focusableElements)&&(y=!1,a.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==a&&n.activeElement.blur();const j=y&&t.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||j)&&!a.isContentEditable&&r.preventDefault(),s.freeMode&&s.freeMode.enabled&&t.freeMode&&t.animating&&!s.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function U2(e){const t=ft(),n=this,r=n.touchEventsData,{params:i,touches:s,rtlTranslate:o,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let a=e;if(a.originalEvent&&(a=a.originalEvent),a.type==="pointermove"&&(r.touchId!==null||a.pointerId!==r.pointerId))return;let d;if(a.type==="touchmove"){if(d=[...a.changedTouches].filter(z=>z.identifier===r.touchId)[0],!d||d.identifier!==r.touchId)return}else d=a;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",a);return}const f=d.pageX,h=d.pageY;if(a.preventedByNestedSwiper){s.startX=f,s.startY=h;return}if(!n.allowTouchMove){a.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(s,{startX:f,startY:h,currentX:f,currentY:h}),r.touchStartTime=po());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(h<s.startY&&n.translate<=n.maxTranslate()||h>s.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(f<s.startX&&n.translate<=n.maxTranslate()||f>s.startX&&n.translate>=n.minTranslate())return}if(t.activeElement&&a.target===t.activeElement&&a.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",a),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=f,s.currentY=h;const g=s.currentX-s.startX,x=s.currentY-s.startY;if(n.params.threshold&&Math.sqrt(g**2+x**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let z;n.isHorizontal()&&s.currentY===s.startY||n.isVertical()&&s.currentX===s.startX?r.isScrolling=!1:g*g+x*x>=25&&(z=Math.atan2(Math.abs(x),Math.abs(g))*180/Math.PI,r.isScrolling=n.isHorizontal()?z>i.touchAngle:90-z>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",a),typeof r.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(r.startMoving=!0),r.isScrolling||a.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&a.cancelable&&a.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&a.stopPropagation();let v=n.isHorizontal()?g:x,y=n.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;i.oneWayMovement&&(v=Math.abs(v)*(o?1:-1),y=Math.abs(y)*(o?1:-1)),s.diff=v,v*=i.touchRatio,o&&(v=-v,y=-y);const j=n.touchesDirection;n.swipeDirection=v>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const u=n.params.loop&&!i.cssMode,p=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(u&&p&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const z=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(z)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",a)}if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&j!==n.touchesDirection&&u&&p&&Math.abs(v)>=1){Object.assign(s,{startX:f,startY:h,currentX:f,currentY:h,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",a),r.isMoved=!0,r.currentTranslate=v+r.startTranslate;let m=!0,w=i.resistanceRatio;if(i.touchReleaseOnEdges&&(w=0),v>0?(u&&p&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(m=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+v)**w))):v<0&&(u&&p&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(m=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-v)**w))),m&&(a.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(v)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,r.currentTranslate=r.startTranslate,s.diff=n.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function W2(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(z=>z.identifier===n.touchId)[0],!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:o,touches:l,rtlTranslate:a,slidesGrid:d,enabled:f}=t;if(!f||!o.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&o.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}o.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const h=po(),g=h-n.touchStartTime;if(t.allowClick){const z=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(z&&z[0]||r.target,z),t.emit("tap click",r),g<300&&h-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=po(),Xl(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let x;if(o.followFinger?x=a?t.translate:-t.translate:x=-n.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:x});return}const v=x>=-t.maxTranslate()&&!t.params.loop;let y=0,j=t.slidesSizesGrid[0];for(let z=0;z<d.length;z+=z<o.slidesPerGroupSkip?1:o.slidesPerGroup){const b=z<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof d[z+b]<"u"?(v||x>=d[z]&&x<d[z+b])&&(y=z,j=d[z+b]-d[z]):(v||x>=d[z])&&(y=z,j=d[d.length-1]-d[d.length-2])}let u=null,p=null;o.rewind&&(t.isBeginning?p=o.virtual&&o.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(u=0));const m=(x-d[y])/j,w=y<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(g>o.longSwipesMs){if(!o.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(m>=o.longSwipesRatio?t.slideTo(o.rewind&&t.isEnd?u:y+w):t.slideTo(y)),t.swipeDirection==="prev"&&(m>1-o.longSwipesRatio?t.slideTo(y+w):p!==null&&m<0&&Math.abs(m)>o.longSwipesRatio?t.slideTo(p):t.slideTo(y))}else{if(!o.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(y+w):t.slideTo(y):(t.swipeDirection==="next"&&t.slideTo(u!==null?u:y+w),t.swipeDirection==="prev"&&t.slideTo(p!==null?p:y))}}function np(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:s}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=o&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&s!==e.snapGrid&&e.checkOverflow()}function Y2(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function K2(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const s=e.maxTranslate()-e.minTranslate();s===0?i=0:i=(e.translate-e.minTranslate())/s,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function X2(e){const t=this;Is(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function Q2(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Km=(e,t)=>{const n=ft(),{params:r,el:i,wrapperEl:s,device:o}=e,l=!!r.nested,a=t==="on"?"addEventListener":"removeEventListener",d=t;n[a]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[a]("touchstart",e.onTouchStart,{passive:!1}),i[a]("pointerdown",e.onTouchStart,{passive:!1}),n[a]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[a]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[a]("touchend",e.onTouchEnd,{passive:!0}),n[a]("pointerup",e.onTouchEnd,{passive:!0}),n[a]("pointercancel",e.onTouchEnd,{passive:!0}),n[a]("touchcancel",e.onTouchEnd,{passive:!0}),n[a]("pointerout",e.onTouchEnd,{passive:!0}),n[a]("pointerleave",e.onTouchEnd,{passive:!0}),n[a]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[a]("click",e.onClick,!0),r.cssMode&&s[a]("scroll",e.onScroll),r.updateOnWindowResize?e[d](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",np,!0):e[d]("observerUpdate",np,!0),i[a]("load",e.onLoad,{capture:!0})};function J2(){const e=this,{params:t}=e;e.onTouchStart=G2.bind(e),e.onTouchMove=U2.bind(e),e.onTouchEnd=W2.bind(e),e.onDocumentTouchStart=Q2.bind(e),t.cssMode&&(e.onScroll=K2.bind(e)),e.onClick=Y2.bind(e),e.onLoad=X2.bind(e),Km(e,"on")}function Z2(){Km(this,"off")}var q2={attachEvents:J2,detachEvents:Z2};const rp=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function ek(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,s=r.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const o=e.getBreakpoint(s,e.params.breakpointsBase,e.el);if(!o||e.currentBreakpoint===o)return;const a=(o in s?s[o]:void 0)||e.originalParams,d=rp(e,r),f=rp(e,a),h=e.params.grabCursor,g=a.grabCursor,x=r.enabled;d&&!f?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&f&&(i.classList.add(`${r.containerModifierClass}grid`),(a.grid.fill&&a.grid.fill==="column"||!a.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),h&&!g?e.unsetGrabCursor():!h&&g&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(m=>{if(typeof a[m]>"u")return;const w=r[m]&&r[m].enabled,z=a[m]&&a[m].enabled;w&&!z&&e[m].disable(),!w&&z&&e[m].enable()});const v=a.direction&&a.direction!==r.direction,y=r.loop&&(a.slidesPerView!==r.slidesPerView||v),j=r.loop;v&&n&&e.changeDirection(),He(e.params,a);const u=e.params.enabled,p=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),x&&!u?e.disable():!x&&u&&e.enable(),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",a),n&&(y?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!j&&p?(e.loopCreate(t),e.updateSlides()):j&&!p&&e.loopDestroy()),e.emit("breakpoint",a)}function tk(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const i=Xe(),s=t==="window"?i.innerHeight:n.clientHeight,o=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const a=parseFloat(l.substr(1));return{value:s*a,point:l}}return{value:l,point:l}});o.sort((l,a)=>parseInt(l.value,10)-parseInt(a.value,10));for(let l=0;l<o.length;l+=1){const{point:a,value:d}=o[l];t==="window"?i.matchMedia(`(min-width: ${d}px)`).matches&&(r=a):d<=n.clientWidth&&(r=a)}return r||"max"}var nk={setBreakpoint:ek,getBreakpoint:tk};function rk(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function ik(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:s}=e,o=rk(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),i.classList.add(...t),e.emitContainerClasses()}function sk(){const e=this,{el:t,classNames:n}=e;t.classList.remove(...n),e.emitContainerClasses()}var ok={addClasses:ik,removeClasses:sk};function ak(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,s=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>s}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var lk={checkOverflow:ak},Zl={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function ck(e,t){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],s=r[i];if(typeof s!="object"||s===null){He(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in s)){He(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),He(t,r)}}const Oa={eventsEmitter:o2,update:v2,translate:j2,transition:E2,slide:$2,loop:D2,grabCursor:V2,events:q2,breakpoints:nk,checkOverflow:lk,classes:ok},$a={};let du=class bt{constructor(){let t,n;for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=He({},n),t&&!n.el&&(n.el=t);const o=ft();if(n.el&&typeof n.el=="string"&&o.querySelectorAll(n.el).length>1){const f=[];return o.querySelectorAll(n.el).forEach(h=>{const g=He({},n,{el:h});f.push(new bt(g))}),f}const l=this;l.__swiper__=!0,l.support=Um(),l.device=Wm({userAgent:n.userAgent}),l.browser=r2(),l.eventsListeners={},l.eventsAnyListeners=[],l.modules=[...l.__modules__],n.modules&&Array.isArray(n.modules)&&l.modules.push(...n.modules);const a={};l.modules.forEach(f=>{f({params:n,swiper:l,extendParams:ck(n,a),on:l.on.bind(l),once:l.once.bind(l),off:l.off.bind(l),emit:l.emit.bind(l)})});const d=He({},Zl,a);return l.params=He({},d,$a,n),l.originalParams=He({},l.params),l.passedParams=He({},n),l.params&&l.params.on&&Object.keys(l.params.on).forEach(f=>{l.on(f,l.params.on[f])}),l.params&&l.params.onAny&&l.onAny(l.params.onAny),Object.assign(l,{enabled:l.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return l.params.direction==="horizontal"},isVertical(){return l.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:l.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.emit("_swiper"),l.params.init&&l.init(),l}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=wt(n,`.${r.slideClass}, swiper-slide`),s=Ti(i[0]);return Ti(t)-s}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=wt(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),o=(r.maxTranslate()-i)*t+i;r.translateTo(o,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:s,slidesGrid:o,slidesSizesGrid:l,size:a,activeIndex:d}=r;let f=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let h=s[d]?Math.ceil(s[d].swiperSlideSize):0,g;for(let x=d+1;x<s.length;x+=1)s[x]&&!g&&(h+=Math.ceil(s[x].swiperSlideSize),f+=1,h>a&&(g=!0));for(let x=d-1;x>=0;x-=1)s[x]&&!g&&(h+=s[x].swiperSlideSize,f+=1,h>a&&(g=!0))}else if(t==="current")for(let h=d+1;h<s.length;h+=1)(n?o[h]+l[h]-o[d]<a:o[h]-o[d]<a)&&(f+=1);else for(let h=d-1;h>=0;h-=1)o[d]-o[h]<a&&(f+=1);return f}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&Is(t,o)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const o=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let s;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const o=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;s=t.slideTo(o.length-1,0,!1,!0)}else s=t.slideTo(t.activeIndex,0,!1,!0);s||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(s=>{t==="vertical"?s.style.width="":s.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):wt(r,i())[0];return!o&&n.params.createElements&&(o=Pi("div",n.params.wrapperClass),r.append(o),wt(r,`.${n.params.slideClass}`).forEach(l=>{o.append(l)})),Object.assign(n,{el:r,wrapperEl:o,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:o,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||en(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||en(r,"direction")==="rtl"),wrongRTL:en(o,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(s=>{s.complete?Is(n,s):s.addEventListener("load",o=>{Is(n,o.target)})}),Jl(n),n.initialized=!0,Jl(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:i,el:s,wrapperEl:o,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),s.removeAttribute("style"),o.removeAttribute("style"),l&&l.length&&l.forEach(a=>{a.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),a.removeAttribute("style"),a.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(a=>{r.off(a)}),t!==!1&&(r.el.swiper=null,Gw(r)),r.destroyed=!0),null}static extendDefaults(t){He($a,t)}static get extendedDefaults(){return $a}static get defaults(){return Zl}static installModule(t){bt.prototype.__modules__||(bt.prototype.__modules__=[]);const n=bt.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>bt.installModule(n)),bt):(bt.installModule(t),bt)}};Object.keys(Oa).forEach(e=>{Object.keys(Oa[e]).forEach(t=>{du.prototype[t]=Oa[e][t]})});du.use([i2,s2]);const Xm=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function _n(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function ar(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:_n(t[r])&&_n(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:ar(e[r],t[r]):e[r]=t[r]})}function Qm(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Jm(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function Zm(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function qm(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function uk(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function dk(e){let{swiper:t,slides:n,passedParams:r,changedParams:i,nextEl:s,prevEl:o,scrollbarEl:l,paginationEl:a}=e;const d=i.filter(L=>L!=="children"&&L!=="direction"&&L!=="wrapperClass"),{params:f,pagination:h,navigation:g,scrollbar:x,virtual:v,thumbs:y}=t;let j,u,p,m,w,z,b,I;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&f.thumbs&&!f.thumbs.swiper&&(j=!0),i.includes("controller")&&r.controller&&r.controller.control&&f.controller&&!f.controller.control&&(u=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||a)&&(f.pagination||f.pagination===!1)&&h&&!h.el&&(p=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||l)&&(f.scrollbar||f.scrollbar===!1)&&x&&!x.el&&(m=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||o)&&(r.navigation.nextEl||s)&&(f.navigation||f.navigation===!1)&&g&&!g.prevEl&&!g.nextEl&&(w=!0);const k=L=>{t[L]&&(t[L].destroy(),L==="navigation"?(t.isElement&&(t[L].prevEl.remove(),t[L].nextEl.remove()),f[L].prevEl=void 0,f[L].nextEl=void 0,t[L].prevEl=void 0,t[L].nextEl=void 0):(t.isElement&&t[L].el.remove(),f[L].el=void 0,t[L].el=void 0))};i.includes("loop")&&t.isElement&&(f.loop&&!r.loop?z=!0:!f.loop&&r.loop?b=!0:I=!0),d.forEach(L=>{if(_n(f[L])&&_n(r[L]))Object.assign(f[L],r[L]),(L==="navigation"||L==="pagination"||L==="scrollbar")&&"enabled"in r[L]&&!r[L].enabled&&k(L);else{const S=r[L];(S===!0||S===!1)&&(L==="navigation"||L==="pagination"||L==="scrollbar")?S===!1&&k(L):f[L]=r[L]}}),d.includes("controller")&&!u&&t.controller&&t.controller.control&&f.controller&&f.controller.control&&(t.controller.control=f.controller.control),i.includes("children")&&n&&v&&f.virtual.enabled?(v.slides=n,v.update(!0)):i.includes("virtual")&&v&&f.virtual.enabled&&(n&&(v.slides=n),v.update(!0)),i.includes("children")&&n&&f.loop&&(I=!0),j&&y.init()&&y.update(!0),u&&(t.controller.control=f.controller.control),p&&(t.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-pagination"),a.part.add("pagination"),t.el.appendChild(a)),a&&(f.pagination.el=a),h.init(),h.render(),h.update()),m&&(t.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-scrollbar"),l.part.add("scrollbar"),t.el.appendChild(l)),l&&(f.scrollbar.el=l),x.init(),x.updateSize(),x.setTranslate()),w&&(t.isElement&&((!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-next"),s.innerHTML=t.hostEl.constructor.nextButtonSvg,s.part.add("button-next"),t.el.appendChild(s)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),o.innerHTML=t.hostEl.constructor.prevButtonSvg,o.part.add("button-prev"),t.el.appendChild(o))),s&&(f.navigation.nextEl=s),o&&(f.navigation.prevEl=o),g.init(),g.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&t.changeDirection(r.direction,!1),(z||I)&&t.loopDestroy(),(b||I)&&t.loopCreate(),t.update()}function pk(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},r={},i={};ar(n,Zl),n._emitClasses=!0,n.init=!1;const s={},o=Xm.map(a=>a.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(a=>{typeof e[a]>"u"||(o.indexOf(a)>=0?_n(e[a])?(n[a]={},i[a]={},ar(n[a],e[a]),ar(i[a],e[a])):(n[a]=e[a],i[a]=e[a]):a.search(/on[A-Z]/)===0&&typeof e[a]=="function"?t?r[`${a[2].toLowerCase()}${a.substr(3)}`]=e[a]:n.on[`${a[2].toLowerCase()}${a.substr(3)}`]=e[a]:s[a]=e[a])}),["navigation","pagination","scrollbar"].forEach(a=>{n[a]===!0&&(n[a]={}),n[a]===!1&&delete n[a]}),{params:n,passedParams:i,rest:s,events:r}}function fk(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:s,scrollbarEl:o,swiper:l}=e;Qm(t)&&r&&i&&(l.params.navigation.nextEl=r,l.originalParams.navigation.nextEl=r,l.params.navigation.prevEl=i,l.originalParams.navigation.prevEl=i),Jm(t)&&s&&(l.params.pagination.el=s,l.originalParams.pagination.el=s),Zm(t)&&o&&(l.params.scrollbar.el=o,l.originalParams.scrollbar.el=o),l.init(n)}function hk(e,t,n,r,i){const s=[];if(!t)return s;const o=a=>{s.indexOf(a)<0&&s.push(a)};if(n&&r){const a=r.map(i),d=n.map(i);a.join("")!==d.join("")&&o("children"),r.length!==n.length&&o("children")}return Xm.filter(a=>a[0]==="_").map(a=>a.replace(/_/,"")).forEach(a=>{if(a in e&&a in t)if(_n(e[a])&&_n(t[a])){const d=Object.keys(e[a]),f=Object.keys(t[a]);d.length!==f.length?o(a):(d.forEach(h=>{e[a][h]!==t[a][h]&&o(a)}),f.forEach(h=>{e[a][h]!==t[a][h]&&o(a)}))}else e[a]!==t[a]&&o(a)}),s}const mk=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function ho(){return ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ho.apply(this,arguments)}function eg(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function tg(e){const t=[];return K.Children.toArray(e).forEach(n=>{eg(n)?t.push(n):n.props&&n.props.children&&tg(n.props.children).forEach(r=>t.push(r))}),t}function gk(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return K.Children.toArray(e).forEach(r=>{if(eg(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=tg(r.props.children);i.length>0?i.forEach(s=>t.push(s)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function vk(e,t,n){if(!n)return null;const r=f=>{let h=f;return f<0?h=t.length+f:h>=t.length&&(h=h-t.length),h},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:s,to:o}=n,l=e.params.loop?-t.length:0,a=e.params.loop?t.length*2:t.length,d=[];for(let f=l;f<a;f+=1)f>=s&&f<=o&&d.push(t[r(f)]);return d.map((f,h)=>K.cloneElement(f,{swiper:e,style:i,key:f.props.virtualIndex||f.key||`slide-${h}`}))}function ri(e,t){return typeof window>"u"?E.useEffect(e,t):E.useLayoutEffect(e,t)}const ip=E.createContext(null),xk=E.createContext(null),ng=E.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:s,onSwiper:o,...l}=e===void 0?{}:e,a=!1;const[d,f]=E.useState("swiper"),[h,g]=E.useState(null),[x,v]=E.useState(!1),y=E.useRef(!1),j=E.useRef(null),u=E.useRef(null),p=E.useRef(null),m=E.useRef(null),w=E.useRef(null),z=E.useRef(null),b=E.useRef(null),I=E.useRef(null),{params:k,passedParams:L,rest:S,events:N}=pk(l),{slides:M,slots:T}=gk(s),R=()=>{v(!x)};Object.assign(k.on,{_containerClasses($,_){f(_)}});const B=()=>{Object.assign(k.on,N),a=!0;const $={...k};if(delete $.wrapperClass,u.current=new du($),u.current.virtual&&u.current.params.virtual.enabled){u.current.virtual.slides=M;const _={cache:!1,slides:M,renderExternal:g,renderExternalUpdate:!1};ar(u.current.params.virtual,_),ar(u.current.originalParams.virtual,_)}};j.current||B(),u.current&&u.current.on("_beforeBreakpoint",R);const U=()=>{a||!N||!u.current||Object.keys(N).forEach($=>{u.current.on($,N[$])})},O=()=>{!N||!u.current||Object.keys(N).forEach($=>{u.current.off($,N[$])})};E.useEffect(()=>()=>{u.current&&u.current.off("_beforeBreakpoint",R)}),E.useEffect(()=>{!y.current&&u.current&&(u.current.emitSlidesClasses(),y.current=!0)}),ri(()=>{if(t&&(t.current=j.current),!!j.current)return u.current.destroyed&&B(),fk({el:j.current,nextEl:w.current,prevEl:z.current,paginationEl:b.current,scrollbarEl:I.current,swiper:u.current},k),o&&!u.current.destroyed&&o(u.current),()=>{u.current&&!u.current.destroyed&&u.current.destroy(!0,!1)}},[]),ri(()=>{U();const $=hk(L,p.current,M,m.current,_=>_.key);return p.current=L,m.current=M,$.length&&u.current&&!u.current.destroyed&&dk({swiper:u.current,slides:M,passedParams:L,changedParams:$,nextEl:w.current,prevEl:z.current,scrollbarEl:I.current,paginationEl:b.current}),()=>{O()}}),ri(()=>{mk(u.current)},[h]);function C(){return k.virtual?vk(u.current,M,h):M.map(($,_)=>K.cloneElement($,{swiper:u.current,swiperSlideIndex:_}))}return K.createElement(r,ho({ref:j,className:qm(`${d}${n?` ${n}`:""}`)},S),K.createElement(xk.Provider,{value:u.current},T["container-start"],K.createElement(i,{className:uk(k.wrapperClass)},T["wrapper-start"],C(),T["wrapper-end"]),Qm(k)&&K.createElement(K.Fragment,null,K.createElement("div",{ref:z,className:"swiper-button-prev"}),K.createElement("div",{ref:w,className:"swiper-button-next"})),Zm(k)&&K.createElement("div",{ref:I,className:"swiper-scrollbar"}),Jm(k)&&K.createElement("div",{ref:b,className:"swiper-pagination"}),T["container-end"]))});ng.displayName="Swiper";const rg=E.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:s,zoom:o,lazy:l,virtualIndex:a,swiperSlideIndex:d,...f}=e===void 0?{}:e;const h=E.useRef(null),[g,x]=E.useState("swiper-slide"),[v,y]=E.useState(!1);function j(w,z,b){z===h.current&&x(b)}ri(()=>{if(typeof d<"u"&&(h.current.swiperSlideIndex=d),t&&(t.current=h.current),!(!h.current||!s)){if(s.destroyed){g!=="swiper-slide"&&x("swiper-slide");return}return s.on("_slideClass",j),()=>{s&&s.off("_slideClass",j)}}}),ri(()=>{s&&h.current&&!s.destroyed&&x(s.getSlideClasses(h.current))},[s]);const u={isActive:g.indexOf("swiper-slide-active")>=0,isVisible:g.indexOf("swiper-slide-visible")>=0,isPrev:g.indexOf("swiper-slide-prev")>=0,isNext:g.indexOf("swiper-slide-next")>=0},p=()=>typeof r=="function"?r(u):r,m=()=>{y(!0)};return K.createElement(n,ho({ref:h,className:qm(`${g}${i?` ${i}`:""}`),"data-swiper-slide-index":a,onLoad:m},f),o&&K.createElement(ip.Provider,{value:u},K.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0},p(),l&&!v&&K.createElement("div",{className:"swiper-lazy-preloader"}))),!o&&K.createElement(ip.Provider,{value:u},p(),l&&!v&&K.createElement("div",{className:"swiper-lazy-preloader"})))});rg.displayName="SwiperSlide";const yk=P.div`
  .swiper {
    border-radius: var(--radius-lg);
    overflow: hidden;
  }

  /* Stretch every slide to the tallest one, so slides with less text
     (e.g. no price) still fill the whole carousel with their background */
  .swiper-slide {
    display: flex;
    height: auto;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 44px;
    height: 44px;
    border-radius: 999px;
    background-color: rgba(255, 255, 255, 0.92);
    color: var(--ink);
    box-shadow: 0 4px 16px rgba(15, 15, 26, 0.18);
    transition:
      background-color 0.2s ease,
      color 0.2s ease;

    &::after {
      font-size: 15px;
      font-weight: 700;
    }

    &:hover {
      background-color: var(--accent);
      color: #ffffff;
    }
  }

  .swiper-pagination-bullet {
    width: 7px;
    height: 7px;
    background: #ffffff;
    opacity: 0.5;
    transition:
      opacity 0.2s ease,
      width 0.2s ease;
  }

  .swiper-pagination-bullet-active {
    width: 22px;
    border-radius: 4px;
    background: var(--lime);
    opacity: 1;
  }

  @media (max-width: 700px) {
    .swiper {
      border-radius: var(--radius);
    }

    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
  }
`,wk=P.div`
  flex: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
  align-items: center;
  gap: 32px;
  min-height: 400px;
  padding: 48px 88px;
  color: #ffffff;

  @media (max-width: 900px) {
    padding: 40px 72px;
  }

  @media (max-width: 700px) {
    grid-template-columns: minmax(0, 1fr) 120px;
    gap: 16px;
    min-height: 300px;
    padding: 28px 22px 44px;
  }
`,kk=P.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;

  span {
    padding: 5px 12px;
    border-radius: 999px;
    background: var(--lime);
    color: var(--ink);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  h2 {
    margin: 0;
    font-size: clamp(26px, 4vw, 46px);
    line-height: 1.1;
  }

  p {
    margin: 0;
    max-width: 440px;
    font-size: 16px;
    line-height: 1.55;
    color: rgba(255, 255, 255, 0.8);
  }

  strong {
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 26px;

    s {
      font-size: 16px;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.6);
    }
  }

  a {
    display: inline-flex;
    align-items: center;
    height: 48px;
    padding: 0 26px;
    border-radius: 12px;
    background: #ffffff;
    color: var(--ink);
    font-weight: 600;
    text-decoration: none;
    transition: transform 0.15s ease;

    &:hover {
      transform: translateY(-2px);
    }
  }

  @media (max-width: 700px) {
    gap: 10px;

    p {
      font-size: 13px;
    }

    strong {
      font-size: 20px;
    }

    a {
      height: 40px;
      padding: 0 18px;
      font-size: 14px;
    }
  }
`,Sk=P.div`
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 260px;
    height: auto;
    aspect-ratio: ${({$card:e})=>e?"1 / 1":"3 / 4"};
    object-fit: contain;
    border-radius: ${({$card:e})=>e?"var(--radius-lg)":"0"};
    filter: drop-shadow(0 24px 40px rgba(0, 0, 0, 0.45));
    transform: rotate(-3deg);
  }
`,jk=[{productId:204,eyebrow:"Hit na PS5",title:"Marvel's Spider-Man 2",text:"Peter Parker i Miles Morales w największej przygodzie w Nowym Jorku.",cta:"Kup teraz",background:"linear-gradient(120deg, #2a0a12 0%, #8f1525 100%)"},{productId:201,eyebrow:"Promocja",title:"Horizon Forbidden West",text:"Wyrusz z Aloy na Zakazany Zachód — teraz w niższej cenie.",cta:"Sprawdź ofertę",background:"linear-gradient(120deg, #06303a 0%, #0f7c8a 100%)"},{productId:102,eyebrow:"Książki",title:"Naucz się programować",text:"JavaScript, Java, Python i C++ — sprawdzone podręczniki dla początkujących i zaawansowanych.",cta:"Zobacz książki",to:Ae.books.path,background:"linear-gradient(120deg, #1b1846 0%, #5b4cff 100%)"},{productId:305,eyebrow:"T-shirty Classic",title:"10 kolorów, rozmiary S–XXL",text:"Miękka, przewiewna bawełna na co dzień. Znajdź swój kolor.",cta:"Wybierz kolor",to:Ae.tshirts.path,background:"linear-gradient(120deg, #0f0f1a 0%, #2c3a12 100%)",imageCard:!0}],zk=()=>c.jsx(yk,{children:c.jsx(ng,{modules:[Qw,Jw,Zw,qw],slidesPerView:1,loop:!0,navigation:!0,pagination:{clickable:!0},autoplay:{delay:5500,disableOnInteraction:!1,pauseOnMouseEnter:!0},a11y:{enabled:!0,prevSlideMessage:"Poprzedni slajd",nextSlideMessage:"Następny slajd"},children:jk.map(e=>{const t=Sn(e.productId),n=cu(t);return c.jsx(rg,{children:c.jsxs(wk,{style:{background:e.background},children:[c.jsxs(kk,{children:[c.jsx("span",{children:n>0?`${e.eyebrow} −${n}%`:e.eyebrow}),c.jsx("h2",{children:e.title}),c.jsx("p",{children:e.text}),!e.to&&c.jsxs("strong",{children:[Q(t.price),$n(t)&&c.jsx("s",{children:Q(t.oldPrice)})]}),c.jsx(ie,{to:e.to||On(t.id),children:e.cta})]}),c.jsx(Sk,{$card:e.imageCard,children:c.jsx("img",{src:t.itemImage,alt:t.itemName,width:"300",height:"400"})})]})},e.productId)})})}),ig=P.article`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition:
    box-shadow 0.25s ease,
    transform 0.25s ease;

  &:hover {
    box-shadow: var(--shadow);
    transform: translateY(-3px);
  }

  img {
    opacity: ${({$unavailable:e})=>e?.55:1};
  }
`,bk=P(ie)`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 3 / 4;
  padding: 16px;
  background: var(--surface-2);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.35s ease;
  }

  ${ig}:hover & img {
    transform: scale(1.04);
  }
`,Ck=P.div`
  position: absolute;
  top: 10px;
  left: 10px;
  right: 52px;
  pointer-events: none;
`,Ek=P.button`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.92);
  color: ${({$active:e})=>e?"var(--danger)":"var(--ink)"};
  font-size: 18px;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: transform 0.15s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 3px solid rgba(91, 76, 255, 0.35);
  }
`,Pk=P.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  padding: 14px 14px 0;
`,Tk=P.span`
  font-size: 12px;
  color: var(--muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Lk=P.h3`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.6em;
  margin: 0;
  font-family: var(--font-heading);
  font-size: 15px;
  line-height: 1.3;
  color: var(--ink);
  text-decoration: none;

  &:hover {
    color: var(--accent);
  }
`,Ik=P.div`
  margin-top: auto;
  padding-top: 4px;
`,Mk=P.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 14px 14px;
`,Nk=P.span`
  font-size: 12px;
  font-weight: 600;
  color: var(--accent);
  text-align: center;
`,Ri=P.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }
`,sg=ke`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: ${({$size:e})=>e==="sm"?"38px":"48px"};
  padding: 0 ${({$size:e})=>e==="sm"?"16px":"24px"};
  border-radius: 12px;
  font-family: var(--font-body);
  font-size: ${({$size:e})=>e==="sm"?"13px":"15px"};
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.1s ease;
  width: ${({$block:e})=>e?"100%":"auto"};

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 3px solid rgba(91, 76, 255, 0.35);
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }

  svg {
    font-size: 1.15em;
    flex-shrink: 0;
  }

  ${({$variant:e})=>{switch(e){case"secondary":return ke`
          border: 1px solid var(--border);
          background: var(--surface);
          color: var(--ink);
          &:hover:not(:disabled) {
            border-color: var(--ink);
          }
        `;case"ghost":return ke`
          border: 1px solid transparent;
          background: transparent;
          color: var(--accent);
          &:hover:not(:disabled) {
            background: var(--accent-soft);
          }
        `;case"dark":return ke`
          border: 1px solid var(--ink);
          background: var(--ink);
          color: #ffffff;
          &:hover:not(:disabled) {
            background: #24243a;
          }
        `;default:return ke`
          border: 1px solid var(--accent);
          background: var(--accent);
          color: #ffffff;
          &:hover:not(:disabled) {
            background: var(--accent-hover);
            border-color: var(--accent-hover);
          }
        `}}}
`,zt=P.button`
  ${sg}
`,At=P(ie)`
  ${sg}
`,Ok=P.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: ${({$size:e})=>e||"40px"};
  height: ${({$size:e})=>e||"40px"};
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: ${({$active:e})=>e?"var(--danger)":"var(--ink)"};
  font-size: 18px;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.15s ease;

  &:hover {
    border-color: var(--ink);
  }

  &:active {
    transform: scale(0.92);
  }

  &:focus-visible {
    outline: 3px solid rgba(91, 76, 255, 0.35);
    outline-offset: 2px;
  }
`,$k=P.div`
  display: inline-flex;
  align-items: center;
  height: ${({$size:e})=>e==="sm"?"36px":"48px"};
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface);
  overflow: hidden;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({$size:e})=>e==="sm"?"32px":"42px"};
    height: 100%;
    border: none;
    background: transparent;
    color: var(--ink);
    font-size: 14px;
    cursor: pointer;

    &:hover:not(:disabled) {
      background: var(--surface-2);
    }

    &:disabled {
      color: var(--border);
      cursor: not-allowed;
    }
  }

  input {
    width: ${({$size:e})=>e==="sm"?"34px":"44px"};
    height: 100%;
    border: none;
    text-align: center;
    font-size: 15px;
    font-weight: 600;
    color: var(--ink);
    background: transparent;
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:focus {
      outline: none;
      background: var(--accent-soft);
    }
  }
`,_k=P.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 4px 8px;

  strong {
    font-size: ${({$size:e})=>e==="lg"?"32px":"18px"};
    font-weight: 700;
    color: ${({$sale:e})=>e?"var(--danger)":"var(--ink)"};
    letter-spacing: -0.01em;
  }

  s {
    font-size: ${({$size:e})=>e==="lg"?"17px":"13px"};
    color: var(--muted);
  }
`,Ak=P.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,sp={sale:ke`
    background: var(--danger);
    color: #ffffff;
  `,new:ke`
    background: var(--lime);
    color: var(--ink);
  `,bestseller:ke`
    background: var(--ink);
    color: #ffffff;
  `,muted:ke`
    background: var(--surface-2);
    color: var(--text);
  `},_a=P.span`
  display: inline-flex;
  align-items: center;
  height: 22px;
  padding: 0 8px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  ${({$variant:e})=>sp[e]||sp.muted}
`,Rk=P.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 500;
  color: ${({$status:e})=>e==="out"?"var(--danger)":e==="low"?"var(--warning)":"var(--success)"};

  &::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: currentColor;
  }
`,Dk=P.nav`
  margin-bottom: 20px;
  font-size: 13px;
  color: var(--muted);

  ol {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
  }

  li + li::before {
    content: "/";
    color: var(--border);
  }

  a {
    color: var(--muted);
    text-decoration: none;

    &:hover {
      color: var(--accent);
    }
  }

  [aria-current="page"] {
    color: var(--ink);
    font-weight: 600;
    max-width: 260px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,Bk=P.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 64px 24px;
  text-align: center;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);

  > svg {
    font-size: 44px;
    color: var(--accent);
    margin-bottom: 4px;
  }

  h2 {
    margin: 0;
    font-size: 22px;
  }

  p {
    margin: 0 0 8px;
    max-width: 420px;
    color: var(--text);
    line-height: 1.6;
  }
`,kt=P.section`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 24px;

  @media (max-width: 600px) {
    padding: 18px;
    border-radius: var(--radius);
  }
`,Li=P.h1`
  margin: 0 0 24px;
  font-size: 32px;
  color: var(--ink);

  small {
    margin-left: 8px;
    font-family: var(--font-body);
    font-size: 16px;
    font-weight: 500;
    color: var(--muted);
  }

  @media (max-width: 600px) {
    font-size: 26px;
  }
`,og=({value:e,onChange:t,min:n=1,max:r=99,size:i,label:s="Ilość"})=>c.jsxs($k,{$size:i,children:[c.jsx("button",{type:"button",onClick:()=>t(e-1),disabled:e<=n,"aria-label":"Zmniejsz ilość",children:c.jsx(rx,{})}),c.jsx("input",{type:"number",inputMode:"numeric",value:e,min:n,max:r,"aria-label":s,onChange:o=>{const l=parseInt(o.target.value,10);Number.isFinite(l)&&t(Math.min(Math.max(l,n),r))}}),c.jsx("button",{type:"button",onClick:()=>t(e+1),disabled:e>=r,"aria-label":"Zwiększ ilość",children:c.jsx(nx,{})})]}),ag=({product:e,size:t})=>{const n=$n(e);return c.jsxs(_k,{$sale:n,$size:t,children:[c.jsx("strong",{children:Q(e.price)}),n&&c.jsxs("s",{children:[c.jsx("span",{className:"visually-hidden",children:"Cena przed obniżką: "}),Q(e.oldPrice)]})]})},lg=({product:e})=>{const t=cu(e);return!t&&!e.isNew&&!e.isBestseller?null:c.jsxs(Ak,{children:[t>0&&c.jsxs(_a,{$variant:"sale",children:["−",t,"%"]}),e.isNew&&c.jsx(_a,{$variant:"new",children:"Nowość"}),e.isBestseller&&c.jsx(_a,{$variant:"bestseller",children:"Bestseller"})]})},Fk=e=>e<=0?"out":e<=nw?"low":"in",cg=({stock:e,detailed:t=!1})=>{const n=Fk(e),r={out:"Chwilowo niedostępny",low:t?`Ostatnie sztuki — zostało ${e}`:"Ostatnie sztuki",in:t?"Dostępny — wysyłka w 24 h":"Dostępny"}[n];return c.jsx(Rk,{$status:n,children:r})},Cr=({items:e})=>c.jsx(Dk,{"aria-label":"Ścieżka nawigacji",children:c.jsx("ol",{children:e.map(([t,n])=>c.jsx("li",{children:n?c.jsx(ie,{to:n,children:t}):c.jsx("span",{"aria-current":"page",children:t})},t))})}),Er=({icon:e,title:t,children:n,action:r})=>c.jsxs(Bk,{children:[e&&c.jsx(e,{"aria-hidden":"true"}),c.jsx("h2",{children:t}),n&&c.jsx("p",{children:n}),r]}),Di=e=>{const{id:t,itemName:n,itemImage:r,stock:i}=e,{addItemToCart:s,getQuantityInCart:o,toggleWishlist:l,isInWishlist:a}=E.useContext(mt),d=o(t),f=a(t),h=On(t);return c.jsxs(ig,{$unavailable:i<=0,children:[c.jsx(bk,{to:h,tabIndex:-1,"aria-hidden":"true",children:c.jsx("img",{src:r,alt:"",loading:"lazy",width:"300",height:"400"})}),c.jsx(Ck,{children:c.jsx(lg,{product:e})}),c.jsx(Ek,{type:"button",onClick:()=>l(t),$active:f,"aria-pressed":f,"aria-label":f?`Usuń ${n} z ulubionych`:`Dodaj ${n} do ulubionych`,children:f?c.jsx(Yh,{}):c.jsx(_o,{})}),c.jsxs(Pk,{children:[c.jsx(Tk,{children:Wo(e)}),c.jsx(Lk,{as:ie,to:h,children:n}),c.jsx(Ik,{children:c.jsx(ag,{product:e})}),c.jsx(cg,{stock:i})]}),c.jsxs(Mk,{children:[i<=0?c.jsx(zt,{$variant:"secondary",$size:"sm",$block:!0,disabled:!0,children:"Niedostępny"}):Nm(e)?c.jsx(At,{to:h,$variant:"secondary",$size:"sm",$block:!0,children:"Wybierz rozmiar"}):c.jsxs(zt,{type:"button",$size:"sm",$block:!0,onClick:()=>s(t),children:[c.jsx($o,{}),"Do koszyka"]}),d>0&&c.jsxs(Nk,{children:["W koszyku: ",d," szt."]})]})]})},Vk=P.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin: 24px 0 0;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 18px;
    border: 1px solid rgba(228, 226, 220, 0.8);
    border-radius: var(--radius);
    background: rgba(255, 255, 255, 0.72);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  svg {
    flex-shrink: 0;
    font-size: 26px;
    color: var(--accent);
  }

  span {
    display: flex;
    flex-direction: column;
    gap: 2px;
    font-size: 13px;
    color: var(--muted);
  }

  strong {
    font-size: 14px;
    color: var(--ink);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    li {
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
      padding: 14px;
    }
  }
`,Hk={books:ke`
    background: var(--accent-soft);
  `,games:ke`
    background: #1b1b2b;
    color: #ffffff;

    p {
      color: rgba(255, 255, 255, 0.7);
    }
  `,tshirts:ke`
    background: #eaffc0;
  `},Gk=P.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 32px;

  @media (max-width: 800px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,ql=P(ie)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 12px;
  min-height: 190px;
  padding: 24px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  color: var(--ink);
  text-decoration: none;
  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-3px);
  }

  > div:first-child {
    position: relative;
    z-index: 1;
    align-self: stretch;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0 0 4px;
    font-size: 26px;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: var(--text);
  }

  span {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: auto;
    font-size: 14px;
    font-weight: 600;
  }

  /* Theme goes last so its colors override the base text colors above */
  ${({$variant:e})=>Hk[e]}
`,Uk=P.div`
  display: flex;
  align-items: flex-end;

  img {
    width: 72px;
    height: 96px;
    object-fit: cover;
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 0 8px 20px rgba(15, 15, 26, 0.2);
    transition: transform 0.3s ease;
  }

  img + img {
    margin-left: -28px;
  }

  img:nth-child(1) {
    transform: rotate(-6deg);
  }

  img:nth-child(3) {
    transform: rotate(6deg);
  }

  ${ql}:hover & img:nth-child(1) {
    transform: rotate(-10deg) translateX(-6px);
  }

  ${ql}:hover & img:nth-child(3) {
    transform: rotate(10deg) translateX(6px);
  }
`,op={hero:ke`
    padding: 24px 0 8px;
    background:
      radial-gradient(50% 65% at 8% 0%, rgba(91, 76, 255, 0.2), transparent 70%),
      radial-gradient(40% 55% at 82% 8%, rgba(198, 255, 61, 0.38), transparent 70%),
      linear-gradient(180deg, #ffffff 0%, var(--bg) 100%);

    /* Dot grid that fades out towards the bottom of the hero */
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background-image: radial-gradient(rgba(15, 15, 26, 0.09) 1px, transparent 1px);
      background-size: 22px 22px;
      -webkit-mask-image: linear-gradient(180deg, #000 0%, transparent 75%);
      mask-image: linear-gradient(180deg, #000 0%, transparent 75%);
      pointer-events: none;
    }
  `,plain:ke`
    padding: 56px 0 0;
  `,sale:ke`
    margin-top: 56px;
    padding: 48px 0 52px;
    background:
      repeating-linear-gradient(135deg, rgba(229, 72, 77, 0.035) 0 14px, transparent 14px 28px),
      linear-gradient(180deg, #fff3f1 0%, #fde7e5 100%);
    border-top: 1px solid #f8d4d1;
    border-bottom: 1px solid #f8d4d1;
  `,dark:ke`
    margin-top: 56px;
    padding: 52px 0 56px;
    background:
      radial-gradient(60% 120% at 100% 0%, rgba(91, 76, 255, 0.45), transparent 60%),
      radial-gradient(40% 90% at 0% 100%, rgba(198, 255, 61, 0.12), transparent 60%),
      var(--ink);
  `},ug=P.section`
  position: relative;
  ${({$tone:e})=>op[e]||op.plain}

  @media (max-width: 600px) {
    padding-top: ${({$tone:e})=>e==="hero"?"12px":"40px"};
  }
`,ec=P.div`
  position: relative;
  width: min(var(--container), calc(100% - 32px));
  margin: 0 auto;
`,Wk=P.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;

  h2 {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin: 0;
    font-size: 28px;
    color: ${({$inverted:e})=>e?"#ffffff":"var(--ink)"};
  }

  p {
    margin: 6px 0 0;
    font-size: 14px;
    color: ${({$inverted:e})=>e?"rgba(255, 255, 255, 0.65)":"var(--text)"};
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    font-weight: 600;
    color: ${({$inverted:e})=>e?"var(--lime)":"var(--accent)"};
    text-decoration: none;
    white-space: nowrap;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 22px;
    }
  }
`,Yk=P(ie)`
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  min-height: 280px;
  padding: 28px;
  border-radius: var(--radius);
  overflow: hidden;
  position: relative;
  background:
    radial-gradient(80% 90% at 100% 100%, rgba(255, 196, 120, 0.45), transparent 60%),
    linear-gradient(135deg, #ff5a5f 0%, #d62f3c 100%);
  color: #ffffff;
  text-decoration: none;
  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-3px);
  }

  /* Oversized percent sign as a background accent */
  &::after {
    content: "%";
    position: absolute;
    right: -10px;
    bottom: -70px;
    font-family: var(--font-heading);
    font-size: 260px;
    line-height: 1;
    color: rgba(255, 255, 255, 0.14);
    pointer-events: none;
  }

  strong {
    display: block;
    font-family: var(--font-heading);
    font-size: clamp(34px, 4vw, 52px);
    line-height: 1;
    letter-spacing: -0.02em;
  }

  p {
    margin: 10px 0 0;
    max-width: 280px;
    font-size: 14px;
    line-height: 1.55;
    color: rgba(255, 255, 255, 0.88);
  }

  span {
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    align-self: flex-start;
    gap: 6px;
    height: 42px;
    padding: 0 18px;
    border-radius: 12px;
    background: #ffffff;
    color: var(--danger);
    font-size: 14px;
    font-weight: 600;
  }

  @media (max-width: 600px) {
    min-height: 200px;
    padding: 22px;
  }
`,Kk=P.span`
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--danger);
  color: #ffffff;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.02em;
`,Xk=P.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  margin-top: 64px;
  padding: 36px 40px;
  border-radius: var(--radius-lg);
  background: var(--lime);

  h2 {
    margin: 0 0 6px;
    font-size: 28px;
  }

  p {
    margin: 0;
    color: #2b3a07;
  }

  form {
    position: relative;
    display: flex;
    gap: 10px;
    flex: 0 1 460px;
  }

  input {
    flex: 1;
    min-width: 0;
    height: 48px;
    padding: 0 16px;
    border: 1px solid transparent;
    border-radius: 12px;
    font-size: 15px;

    &:focus {
      outline: none;
      border-color: var(--ink);
    }
  }

  form > span {
    position: absolute;
    top: calc(100% + 6px);
    left: 4px;
    font-size: 13px;
    font-weight: 600;
    color: #9b1c1f;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: stretch;
    padding: 28px 22px 36px;

    h2 {
      font-size: 23px;
    }

    form {
      flex-basis: auto;
    }
  }

  @media (max-width: 420px) {
    form {
      flex-direction: column;
    }
  }
`,Qk=P.section`
  margin-top: 48px;
  padding: 32px;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface);

  h2 {
    margin: 0 0 12px;
    font-size: 22px;
  }

  p,
  li {
    font-size: 15px;
    line-height: 1.65;
    color: var(--text);
  }

  p {
    margin: 0 0 16px;
  }

  ol {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 0;
    padding-left: 20px;
  }

  strong {
    color: var(--ink);
  }

  @media (max-width: 600px) {
    padding: 22px 20px;

    p,
    li {
      font-size: 14px;
    }
  }
`,Jk=()=>c.jsxs(Vk,{children:[c.jsxs("li",{children:[c.jsx(em,{"aria-hidden":"true"}),c.jsxs("span",{children:[c.jsx("strong",{children:"Darmowa dostawa"}),"od ",Q(_t)]})]}),c.jsxs("li",{children:[c.jsx(tx,{"aria-hidden":"true"}),c.jsxs("span",{children:[c.jsx("strong",{children:"Wysyłka w 24 h"}),"zamówienia do 14:00"]})]}),c.jsxs("li",{children:[c.jsx(Kh,{"aria-hidden":"true"}),c.jsxs("span",{children:[c.jsx("strong",{children:"30 dni na zwrot"}),"bez podawania przyczyny"]})]}),c.jsxs("li",{children:[c.jsx(Qh,{"aria-hidden":"true"}),c.jsxs("span",{children:[c.jsx("strong",{children:"Bezpieczne płatności"}),"BLIK, przelew, karta"]})]})]}),Zk=()=>c.jsx(Gk,{children:au.map(e=>{const t=br(e.items,"featured").slice(0,3);return c.jsxs(ql,{to:e.path,$variant:e.key,children:[c.jsxs("div",{children:[c.jsx("h3",{children:e.label}),c.jsxs("p",{children:[e.items.length," ",Ei(e.items.length,"produkt","produkty","produktów")]}),c.jsxs("span",{children:["Przeglądaj ",c.jsx(Ao,{"aria-hidden":"true"})]})]}),c.jsx(Uk,{"aria-hidden":"true",children:t.map(n=>c.jsx("img",{src:n.itemImage,alt:"",loading:"lazy"},n.id))})]},e.key)})}),qk=({to:e,maxDiscount:t})=>c.jsxs(Yk,{to:e,children:[c.jsxs("div",{children:[c.jsxs("strong",{children:["do −",t,"%"]}),c.jsx("p",{children:"Przy każdej obniżce pokazujemy najniższą cenę z 30 dni przed promocją."})]}),c.jsxs("span",{children:["Wszystkie promocje ",c.jsx(Ao,{"aria-hidden":"true"})]})]}),Ar=({title:e,subtitle:t,badge:n,linkTo:r,linkLabel:i="Zobacz wszystkie",items:s,tone:o="plain",lead:l})=>c.jsx(ug,{$tone:o,children:c.jsxs(ec,{children:[c.jsxs(Wk,{$inverted:o==="dark",children:[c.jsxs("div",{children:[c.jsxs("h2",{children:[e,n&&c.jsx(Kk,{children:n})]}),t&&c.jsx("p",{children:t})]}),r&&c.jsxs(ie,{to:r,children:[i," ",c.jsx(Ao,{"aria-hidden":"true"})]})]}),c.jsxs(Ri,{children:[l,s.map(a=>c.jsx(Di,{...a},a.id))]})]})}),eS=()=>{const{showToast:e}=E.useContext(mt),[t,n]=E.useState(""),[r,i]=E.useState(""),s=o=>{if(o.preventDefault(),!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(t.trim())){i("Podaj poprawny adres e-mail");return}i(""),n(""),e("Dziękujemy! Będziemy informować o nowościach (wersja demo).","info")};return c.jsxs(Xk,{children:[c.jsxs("div",{children:[c.jsx("h2",{children:"Bądź na bieżąco"}),c.jsx("p",{children:"Nowe premiery gier, książki i promocje — raz w tygodniu, bez spamu."})]}),c.jsxs("form",{onSubmit:s,noValidate:!0,children:[c.jsx("label",{htmlFor:"newsletter-email",className:"visually-hidden",children:"Adres e-mail"}),c.jsx("input",{id:"newsletter-email",type:"email",placeholder:"Twój adres e-mail",value:t,onChange:o=>n(o.target.value),"aria-invalid":!!r,"aria-describedby":r?"newsletter-error":void 0}),c.jsx(zt,{type:"submit",$variant:"dark",children:"Zapisz się"}),r&&c.jsx("span",{id:"newsletter-error",children:r})]})]})},tS=()=>c.jsxs(Qk,{children:[c.jsx("h2",{children:"BuyIt — gry, książki i t-shirty w jednym miejscu"}),c.jsx("p",{children:"W BuyIt znajdziesz najgłośniejsze gry na PlayStation 5, sprawdzone książki o programowaniu i wygodne bawełniane t-shirty. Starannie dobieramy asortyment, żeby każdy zakup cieszył na długo."}),c.jsxs("ol",{children:[c.jsxs("li",{children:[c.jsx("strong",{children:"Gry na PS5."})," Przygoda, akcja i RPG w wersjach pudełkowych — od Ghost of Tsushima po Marvel's Spider-Man 2."]}),c.jsxs("li",{children:[c.jsx("strong",{children:"Książki o programowaniu."})," JavaScript, Java, Python i C++ dla początkujących i zaawansowanych."]}),c.jsxs("li",{children:[c.jsx("strong",{children:"T-shirty Classic."})," Dziesięć kolorów, rozmiary od S do XXL i miękka bawełna, która nie traci formy po praniu."]}),c.jsxs("li",{children:[c.jsx("strong",{children:"Wygodne zakupy."})," Wysyłka w 24 h, darmowa dostawa od"," ",Q(_t)," i 30 dni na zwrot."]})]})]}),ap="BuyIt",it=e=>{E.useEffect(()=>{document.title=e?`${e} | ${ap}`:`${ap} — gry, książki i t-shirty`},[e])},dg=5,Ms=(e,t="featured")=>br(e,t).slice(0,dg),pg=Om(dg),nS=new Set(pg.map(e=>e.id)),lp=Yo.filter(e=>!nS.has(e.id)&&e.stock>0),rS=Ms(lp.length>=3?lp:Yo),iS=Math.max(...Yo.map(cu)),sS=()=>(it(null),c.jsxs(c.Fragment,{children:[c.jsx(ug,{$tone:"hero",children:c.jsxs(ec,{children:[c.jsx(zk,{}),c.jsx(Jk,{}),c.jsx(Zk,{})]})}),c.jsx(Ar,{title:"Bestsellery",subtitle:"Najczęściej wybierane w tym tygodniu",items:pg}),c.jsx(Ar,{tone:"sale",title:"Promocje",subtitle:"Obniżki na gry, książki i t-shirty",linkTo:`${F}/sale`,linkLabel:"Wszystkie promocje",items:rS.slice(0,3),lead:c.jsx(qk,{to:`${F}/sale`,maxDiscount:iS})}),c.jsx(Ar,{tone:"dark",title:"Nowości w grach",subtitle:"Najnowsze premiery na PlayStation 5",linkTo:Ae.games.path,items:Ms(Ae.games.items,"newest")}),c.jsx(Ar,{title:"Polecane książki",linkTo:Ae.books.path,items:Ms(Ae.books.items)}),c.jsx(Ar,{title:"T-shirty Classic",linkTo:Ae.tshirts.path,items:Ms(Ae.tshirts.items)}),c.jsxs(ec,{children:[c.jsx(eS,{}),c.jsx(tS,{})]})]})),Bi="900px",oS=P.div`
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  gap: 32px;
  align-items: start;

  .mobile-only {
    display: none;
  }

  @media (max-width: ${Bi}) {
    grid-template-columns: minmax(0, 1fr);

    .mobile-only {
      display: inline-flex;
      margin-top: 8px;
    }
  }
`,aS=P.aside`
  position: sticky;
  top: 176px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${Bi}) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 90;
    width: min(340px, 88vw);
    padding: 20px;
    overflow-y: auto;
    background: var(--bg);
    box-shadow: var(--shadow);
    transform: translateX(${({$open:e})=>e?"0":"-105%"});
    transition: transform 0.25s ease;
  }
`,lS=P.div`
  display: none;

  h2 {
    margin: 0;
    font-size: 20px;
  }

  button {
    display: flex;
    padding: 6px;
    border: none;
    background: transparent;
    font-size: 20px;
    cursor: pointer;
  }

  @media (max-width: ${Bi}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`,cS=P.div`
  display: none;

  @media (max-width: ${Bi}) {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 80;
    background: rgba(15, 15, 26, 0.4);
  }
`,Aa=P.fieldset`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0;
  padding: 0 0 20px;
  border: none;
  border-bottom: 1px solid var(--border);

  legend {
    padding: 0;
    margin-bottom: 10px;
    font-family: var(--font-heading);
    font-size: 15px;
    font-weight: 600;
    color: var(--ink);
  }
`,Ra=P.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 0;
  font-size: 14px;
  color: ${({$disabled:e})=>e?"var(--muted)":"var(--ink)"};
  cursor: ${({$disabled:e})=>e?"default":"pointer"};

  input {
    width: 17px;
    height: 17px;
    margin: 0;
    accent-color: var(--accent);
    cursor: inherit;
  }

  span {
    flex: 1;
  }

  small {
    font-size: 12px;
    color: var(--muted);
  }
`,uS=P.span`
  && {
    flex: 0 0 auto;
  }
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid rgba(15, 15, 26, 0.18);
`,dS=P.form`
  display: flex;
  align-items: center;
  gap: 8px;

  input {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 1px solid var(--border);
    border-radius: 10px;
    background: var(--surface);
    font-size: 14px;

    &:focus {
      outline: none;
      border-color: var(--accent);
    }
  }

  span {
    color: var(--muted);
  }
`,pS=P.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,fS=P.span`
  font-size: 14px;
  color: var(--text);
`,hS=P.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  font-size: 14px;
  color: var(--text);

  select {
    height: 40px;
    padding: 0 12px;
    border: 1px solid var(--border);
    border-radius: 10px;
    background: var(--surface);
    font-size: 14px;
    color: var(--ink);
    cursor: pointer;
  }

  @media (max-width: 600px) {
    span {
      display: none;
    }

    select {
      max-width: 170px;
    }
  }
`,mS=P.button`
  display: none;

  @media (max-width: ${Bi}) {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: 40px;
    padding: 0 14px;
    border: 1px solid var(--border);
    border-radius: 10px;
    background: var(--surface);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
  }
`,gS=P.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`,cp=P.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 12px;
  border: 1px solid ${({$plain:e})=>e?"transparent":"var(--border)"};
  border-radius: 999px;
  background: ${({$plain:e})=>e?"transparent":"var(--surface)"};
  color: ${({$plain:e})=>e?"var(--accent)":"var(--ink)"};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    border-color: ${({$plain:e})=>e?"transparent":"var(--ink)"};
    text-decoration: ${({$plain:e})=>e?"underline":"none"};
  }

  svg {
    font-size: 12px;
  }
`,fg=",",vS=(e,t)=>e.get(t)?e.get(t).split(fg).filter(Boolean):[],up=(e,t)=>{const n=parseFloat(e.get(t));return Number.isFinite(n)?n:null},pu=({items:e,facets:t=[],emptyAction:n})=>{const[r,i]=Gh(),[s,o]=E.useState(!1),l=r.get("sort")||co[0].value,a=up(r,"min"),d=up(r,"max"),f=r.get("sale")==="1",h=r.get("available")==="1",g=E.useMemo(()=>Object.fromEntries(t.map(k=>[k.key,vS(r,k.key)])),[t,r]),[x,v]=E.useState({min:a??"",max:d??""});E.useEffect(()=>{v({min:a??"",max:d??""})},[a,d]),E.useEffect(()=>(document.body.style.overflow=s?"hidden":"",()=>{document.body.style.overflow=""}),[s]);const y=k=>{const L=new URLSearchParams(r);Object.entries(k).forEach(([S,N])=>{N===null||N===""||Array.isArray(N)&&N.length===0?L.delete(S):L.set(S,Array.isArray(N)?N.join(fg):String(N))}),i(L,{replace:!0})},j=(k,L)=>{const S=g[k];y({[k]:S.includes(L)?S.filter(N=>N!==L):[...S,L]})},u=()=>{const k=parseFloat(x.min),L=parseFloat(x.max);y({min:Number.isFinite(k)&&k>0?k:null,max:Number.isFinite(L)&&L>0?L:null})},p=()=>{const k=new URLSearchParams;r.get("q")&&k.set("q",r.get("q")),r.get("sort")&&k.set("sort",r.get("sort")),i(k,{replace:!0})},m=k=>e.filter(L=>a!==null&&L.price<a||d!==null&&L.price>d||f&&!$n(L)||h&&L.stock<=0?!1:t.every(S=>S.key===k||g[S.key].length===0?!0:S.getValues(L).some(N=>g[S.key].includes(String(N))))),w=br(m(null),l),z=t.map(k=>{const L=m(k.key),S=[...new Set(e.flatMap(N=>k.getValues(N).map(String)))];return k.order?S.sort((N,M)=>k.order.indexOf(N)-k.order.indexOf(M)):S.sort((N,M)=>N.localeCompare(M,"pl",{numeric:!0})),{facet:k,options:S.map(N=>{var M;return{value:N,count:L.filter(T=>k.getValues(T).map(String).includes(N)).length,hex:k.type==="color"?(M=e.find(T=>{var R;return((R=T.color)==null?void 0:R.name)===N}))==null?void 0:M.color.hex:null}})}}),b=[...t.flatMap(k=>g[k.key].map(L=>({label:L,onRemove:()=>j(k.key,L)}))),a!==null&&{label:`od ${Q(a)}`,onRemove:()=>y({min:null})},d!==null&&{label:`do ${Q(d)}`,onRemove:()=>y({max:null})},f&&{label:"Promocje",onRemove:()=>y({sale:null})},h&&{label:"Dostępne",onRemove:()=>y({available:null})}].filter(Boolean),I=e.some($n);return c.jsxs(oS,{children:[s&&c.jsx(cS,{onClick:()=>o(!1)}),c.jsxs(aS,{$open:s,"aria-label":"Filtry",children:[c.jsxs(lS,{children:[c.jsx("h2",{children:"Filtry"}),c.jsx("button",{type:"button",onClick:()=>o(!1),"aria-label":"Zamknij filtry",children:c.jsx(ji,{})})]}),z.map(({facet:k,options:L})=>c.jsxs(Aa,{children:[c.jsx("legend",{children:k.label}),L.map(({value:S,count:N,hex:M})=>{const T=g[k.key].includes(S);return c.jsxs(Ra,{$disabled:N===0&&!T,children:[c.jsx("input",{type:"checkbox",checked:T,disabled:N===0&&!T,onChange:()=>j(k.key,S)}),M&&c.jsx(uS,{style:{background:M},"aria-hidden":"true"}),c.jsx("span",{children:S}),c.jsx("small",{children:N})]},S)})]},k.key)),c.jsxs(Aa,{children:[c.jsx("legend",{children:"Cena (zł)"}),c.jsxs(dS,{onSubmit:k=>{k.preventDefault(),u()},children:[c.jsx("input",{type:"number",min:"0",inputMode:"decimal",placeholder:"od","aria-label":"Cena minimalna",value:x.min,onChange:k=>v(L=>({...L,min:k.target.value})),onBlur:u}),c.jsx("span",{children:"–"}),c.jsx("input",{type:"number",min:"0",inputMode:"decimal",placeholder:"do","aria-label":"Cena maksymalna",value:x.max,onChange:k=>v(L=>({...L,max:k.target.value})),onBlur:u}),c.jsx("button",{type:"submit",className:"visually-hidden",children:"Zastosuj"})]})]}),c.jsxs(Aa,{children:[c.jsx("legend",{children:"Dostępność"}),I&&c.jsxs(Ra,{children:[c.jsx("input",{type:"checkbox",checked:f,onChange:()=>y({sale:f?null:1})}),c.jsx("span",{children:"Tylko promocje"})]}),c.jsxs(Ra,{children:[c.jsx("input",{type:"checkbox",checked:h,onChange:()=>y({available:h?null:1})}),c.jsx("span",{children:"Tylko dostępne"})]})]}),c.jsxs(zt,{type:"button",$block:!0,className:"mobile-only",onClick:()=>o(!1),children:["Pokaż ",w.length," ",Ei(w.length,"produkt","produkty","produktów")]})]}),c.jsxs("div",{children:[c.jsxs(pS,{children:[c.jsxs(mS,{type:"button",onClick:()=>o(!0),children:[c.jsx(sx,{}),"Filtry",b.length>0&&` (${b.length})`]}),c.jsxs(fS,{children:[w.length," ",Ei(w.length,"produkt","produkty","produktów")]}),c.jsxs(hS,{children:[c.jsx("span",{children:"Sortuj:"}),c.jsx("select",{value:l,onChange:k=>y({sort:k.target.value}),children:co.map(k=>c.jsx("option",{value:k.value,children:k.label},k.value))})]})]}),b.length>0&&c.jsxs(gS,{children:[b.map(k=>c.jsxs(cp,{type:"button",onClick:k.onRemove,"aria-label":`Usuń filtr ${k.label}`,children:[k.label,c.jsx(ji,{})]},k.label)),c.jsx(cp,{type:"button",$plain:!0,onClick:p,children:"Wyczyść wszystko"})]}),w.length>0?c.jsx(Ri,{children:w.map(k=>c.jsx(Di,{...k},k.id))}):c.jsx(Er,{icon:Xh,title:"Brak produktów",action:b.length>0?c.jsx(zt,{type:"button",$variant:"secondary",onClick:p,children:"Wyczyść filtry"}):n,children:b.length>0?"Żaden produkt nie spełnia wybranych kryteriów. Spróbuj poluzować filtry.":"Nie znaleźliśmy pasujących produktów."})]})]})},hg=P.div`
  margin-bottom: 28px;
  padding: 28px 32px;
  border-radius: var(--radius-lg);
  background: ${({$accent:e})=>e?"var(--danger)":"var(--ink)"};
  color: #ffffff;

  h1 {
    margin: 0 0 8px;
    font-size: 34px;
  }

  p {
    margin: 0;
    max-width: 640px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.82);
  }

  @media (max-width: 600px) {
    padding: 20px;
    border-radius: var(--radius);

    h1 {
      font-size: 26px;
    }

    p {
      font-size: 14px;
    }
  }
`,xS=[Mm],Da=({categoryKey:e})=>{const t=Ae[e];return it(t.label),c.jsxs("div",{className:"wrapper",children:[c.jsx(Cr,{items:[["Strona główna",`${F}/`],[t.label]]}),c.jsxs(hg,{children:[c.jsx("h1",{children:t.label}),c.jsx("p",{children:t.intro})]}),c.jsx(pu,{items:t.items,facets:t.facets},t.key)]})},yS=()=>(it("Promocje"),c.jsxs("div",{className:"wrapper",children:[c.jsx(Cr,{items:[["Strona główna",`${F}/`],["Promocje"]]}),c.jsxs(hg,{$accent:!0,children:[c.jsx("h1",{children:"Promocje"}),c.jsx("p",{children:"Obniżki na gry, książki i t-shirty. Przy każdym produkcie podajemy najniższą cenę z 30 dni przed obniżką."})]}),c.jsx(pu,{items:Yo,facets:xS})]})),wS=[Mm],kS=()=>{const[e]=Gh(),t=(e.get("q")||"").trim(),n=E.useMemo(()=>_m(t),[t]);return it(t?`Wyniki dla „${t}”`:"Wyszukiwanie"),c.jsxs("div",{className:"wrapper",children:[c.jsx(Cr,{items:[["Strona główna",`${F}/`],["Wyszukiwanie"]]}),c.jsx(Li,{children:t?c.jsxs(c.Fragment,{children:["Wyniki dla „",t,"”"]}):"Wyszukiwanie"}),c.jsx(pu,{items:n,facets:wS,emptyAction:c.jsx(At,{to:`${F}/`,$variant:"secondary",children:"Wróć do strony głównej"})},t)]})},SS=P.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 48px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;
  }
`,jS=P.div`
  position: sticky;
  top: 176px;
  display: flex;
  justify-content: center;
  padding: 40px;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface);

  > div {
    position: absolute;
    top: 16px;
    left: 16px;
  }

  img {
    width: 100%;
    max-width: 420px;
    height: auto;
    aspect-ratio: 3 / 4;
    object-fit: contain;
    display: block;
  }

  @media (max-width: 900px) {
    position: relative;
    top: 0;
    padding: 24px;

    img {
      max-width: 280px;
    }
  }
`,zS=P.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 0;
`,bS=P.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--text);

  a {
    padding: 4px 10px;
    border-radius: 999px;
    background: var(--accent-soft);
    color: var(--accent);
    font-size: 12px;
    font-weight: 600;
    text-decoration: none;
  }
`,CS=P.h1`
  margin: -8px 0 0;
  font-size: 34px;
  line-height: 1.2;
  color: var(--ink);

  @media (max-width: 600px) {
    font-size: 26px;
  }
`,ES=P.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);

  p {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    color: var(--danger);
  }
`,PS=P.span`
  font-size: 12px;
  color: var(--muted);
`,dp=P.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
  color: var(--text);

  strong {
    color: var(--ink);
  }
`,TS=P.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,LS=P(ie)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({$hex:e})=>e};
  border: 1px solid rgba(15, 15, 26, 0.2);
  box-shadow: ${({$active:e})=>e?"0 0 0 2px var(--bg), 0 0 0 4px var(--ink)":"none"};
  transition: transform 0.15s ease;

  &:hover {
    transform: scale(1.1);
  }
`,IS=P.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,MS=P.button`
  min-width: 52px;
  height: 44px;
  padding: 0 12px;
  border: 1px solid ${({$active:e})=>e?"var(--ink)":"var(--border)"};
  border-radius: 10px;
  background: ${({$active:e})=>e?"var(--ink)":"var(--surface)"};
  color: ${({$active:e})=>e?"#ffffff":"var(--ink)"};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover:not(:disabled) {
    border-color: var(--ink);
  }

  &:disabled {
    color: var(--muted);
    background: var(--surface-2);
    text-decoration: line-through;
    cursor: not-allowed;
  }
`,NS=P.details`
  font-size: 13px;

  summary {
    width: max-content;
    color: var(--accent);
    font-weight: 600;
    cursor: pointer;
  }

  table {
    width: 100%;
    max-width: 380px;
    margin-top: 12px;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 8px 10px;
    border-bottom: 1px solid var(--border);
    text-align: left;
  }

  th {
    color: var(--muted);
    font-weight: 500;
  }

  p {
    margin: 8px 0 0;
    color: var(--muted);
  }
`,OS=P.span`
  font-size: 13px;
  font-weight: 500;
  color: var(--danger);
`,$S=P.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 480px) {
    flex-wrap: wrap;

    > button:nth-child(2) {
      order: 3;
      flex-basis: 100%;
    }
  }
`,_S=P.p`
  margin: -8px 0 0;
  font-size: 13px;
  color: var(--text);

  a {
    color: var(--accent);
    font-weight: 600;
  }
`,AS=P.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0;
  padding: 18px 20px;
  list-style: none;
  border-radius: var(--radius);
  background: var(--surface);
  border: 1px solid var(--border);

  li {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    color: var(--text);
  }

  svg {
    flex-shrink: 0;
    font-size: 20px;
    color: var(--accent);
  }

  strong {
    color: var(--ink);
  }
`,RS=P.div`
  display: flex;
  gap: 4px;
  margin-top: 56px;
  border-bottom: 1px solid var(--border);
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  button {
    position: relative;
    padding: 14px 16px;
    border: none;
    background: transparent;
    font-family: var(--font-heading);
    font-size: 16px;
    font-weight: 600;
    color: var(--muted);
    white-space: nowrap;
    cursor: pointer;

    &:hover {
      color: var(--ink);
    }

    &[aria-selected="true"] {
      color: var(--ink);
    }

    &[aria-selected="true"]::after {
      content: "";
      position: absolute;
      left: 16px;
      right: 16px;
      bottom: 0;
      height: 2px;
      background: var(--accent);
    }
  }
`,DS=P.div`
  padding: 24px 0;
  max-width: 760px;

  p {
    margin: 0 0 16px;
    font-size: 15px;
    line-height: 1.7;
    color: var(--text);
  }

  a {
    color: var(--accent);
    font-weight: 600;
  }
`,pp=P.table`
  width: 100%;
  margin-bottom: 16px;
  border-collapse: collapse;
  font-size: 14px;

  th,
  td {
    padding: 12px 0;
    border-bottom: 1px solid var(--border);
    text-align: left;
    vertical-align: top;
  }

  th {
    width: 40%;
    color: var(--muted);
    font-weight: 500;
  }

  td {
    color: var(--ink);
    font-weight: 500;
  }
`,BS=P.section`
  margin-top: 40px;
`,FS=P.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 20px;

  h2 {
    margin: 0;
    font-size: 26px;
    color: var(--ink);
  }

  a {
    font-size: 14px;
    font-weight: 600;
    color: var(--accent);
    text-decoration: none;
    white-space: nowrap;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 22px;
    }
  }
`,fp=[{id:"description",label:"Opis"},{id:"specs",label:"Specyfikacja"},{id:"delivery",label:"Dostawa i zwroty"}],VS=()=>{const{id:e}=Jc(),t=Sn(e);return t?c.jsx(GS,{product:t},t.id):c.jsx(HS,{id:e})},HS=({id:e})=>(it("Nie znaleziono produktu"),c.jsx("div",{className:"wrapper",children:c.jsxs(Er,{icon:Jh,title:"Nie znaleziono produktu",action:c.jsx(At,{to:`${F}/`,children:"Wróć do strony głównej"}),children:["Produkt o ID ",e," nie istnieje w naszym katalogu lub został wycofany ze sprzedaży."]})})),GS=({product:e})=>{const{addItemToCart:t,getQuantityInCart:n,toggleWishlist:r,isInWishlist:i}=E.useContext(mt),[s,o]=E.useState(null),[l,a]=E.useState(!1),[d,f]=E.useState(1),[h,g]=E.useState(fp[0].id);it(e.itemName);const x=Uo(e),v=Nm(e),y=n(e.id),j=Math.max(1,e.stock-y),u=e.stock<=0,p=!u&&e.stock-y>0,m=i(e.id),w=iw(e),z=()=>{if(v&&!s){a(!0);return}t(e.id,{size:s,quantity:d}),f(1)};return c.jsxs("div",{className:"wrapper",children:[c.jsx(Cr,{items:[["Strona główna",`${F}/`],[x.label,x.path],[e.itemName]]}),c.jsxs(SS,{children:[c.jsxs(jS,{children:[c.jsx(lg,{product:e}),c.jsx("img",{src:e.itemImage,alt:e.itemName,width:"420",height:"560"})]}),c.jsxs(zS,{children:[c.jsxs(bS,{children:[c.jsx(ie,{to:x.path,children:x.singular}),c.jsx("span",{children:Wo(e)})]}),c.jsx(CS,{children:e.itemName}),c.jsxs(ES,{children:[c.jsx(ag,{product:e,size:"lg"}),$n(e)&&c.jsxs(c.Fragment,{children:[c.jsxs("p",{children:["Oszczędzasz ",Q(e.oldPrice-e.price)]}),c.jsxs(PS,{children:["Najniższa cena z 30 dni przed obniżką: ",Q(e.oldPrice)]})]}),c.jsx(cg,{stock:e.stock,detailed:!0})]}),e.color&&c.jsxs(dp,{children:[c.jsxs("span",{children:["Kolor: ",c.jsx("strong",{children:e.color.name})]}),c.jsx(TS,{children:ou.map(b=>c.jsx(LS,{to:On(b.id),$hex:b.color.hex,$active:b.id===e.id,"aria-label":b.color.name,"aria-current":b.id===e.id?"true":void 0,title:b.color.name},b.id))})]}),v&&c.jsxs(dp,{children:[c.jsxs("span",{id:"size-label",children:["Rozmiar: ",c.jsx("strong",{children:s||"wybierz"})]}),c.jsx(IS,{role:"radiogroup","aria-labelledby":"size-label",children:su.map(b=>{const I=e.sizes.includes(b);return c.jsx(MS,{type:"button",role:"radio","aria-checked":s===b,$active:s===b,disabled:!I||u,title:I?void 0:"Rozmiar niedostępny",onClick:()=>{o(b),a(!1)},children:b},b)})}),l&&c.jsx(OS,{role:"alert",children:"Wybierz rozmiar, aby dodać produkt do koszyka."}),c.jsxs(NS,{children:[c.jsx("summary",{children:"Tabela rozmiarów"}),c.jsxs("table",{children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Rozmiar"}),c.jsx("th",{children:"Szerokość (cm)"}),c.jsx("th",{children:"Długość (cm)"})]})}),c.jsx("tbody",{children:qy.map(b=>c.jsxs("tr",{children:[c.jsx("td",{children:b.size}),c.jsx("td",{children:b.width}),c.jsx("td",{children:b.length})]},b.size))})]}),c.jsx("p",{children:"Wymiary orientacyjne, mierzone na płasko. Tolerancja ±2 cm."})]})]}),c.jsxs($S,{children:[p&&c.jsx(og,{value:Math.min(d,j),onChange:f,max:j}),c.jsxs(zt,{type:"button",onClick:z,disabled:!p,style:{flex:1},children:[c.jsx($o,{}),u?"Produkt niedostępny":p?"Dodaj do koszyka":"Maksymalna ilość w koszyku"]}),c.jsx(Ok,{type:"button",$size:"48px",$active:m,onClick:()=>r(e.id),"aria-pressed":m,"aria-label":m?"Usuń z ulubionych":"Dodaj do ulubionych",children:m?c.jsx(Yh,{}):c.jsx(_o,{})})]}),y>0&&c.jsxs(_S,{children:["Masz już ten produkt w koszyku (",y," szt.). ",c.jsx(ie,{to:`${F}/cart`,children:"Przejdź do koszyka"})]}),c.jsxs(AS,{children:[c.jsxs("li",{children:[c.jsx(em,{"aria-hidden":"true"}),c.jsxs("span",{children:[c.jsx("strong",{children:"Darmowa dostawa"})," od ",Q(_t),", wysyłka w 24 h"]})]}),c.jsxs("li",{children:[c.jsx(Kh,{"aria-hidden":"true"}),c.jsxs("span",{children:[c.jsx("strong",{children:"30 dni"})," na bezpłatny zwrot"]})]}),c.jsxs("li",{children:[c.jsx(Qh,{"aria-hidden":"true"}),c.jsxs("span",{children:[c.jsx("strong",{children:"Bezpieczne płatności"})," — BLIK, przelew, karta"]})]})]})]})]}),c.jsxs("section",{children:[c.jsx(RS,{role:"tablist","aria-label":"Informacje o produkcie",children:fp.map(b=>c.jsx("button",{type:"button",role:"tab",id:`tab-${b.id}`,"aria-selected":h===b.id,"aria-controls":`panel-${b.id}`,onClick:()=>g(b.id),children:b.label},b.id))}),c.jsxs(DS,{role:"tabpanel",id:`panel-${h}`,"aria-labelledby":`tab-${h}`,children:[h==="description"&&c.jsx("p",{children:e.description}),h==="specs"&&c.jsx(pp,{children:c.jsxs("tbody",{children:[rw(e).map(([b,I])=>c.jsxs("tr",{children:[c.jsx("th",{scope:"row",children:b}),c.jsx("td",{children:I})]},b)),c.jsxs("tr",{children:[c.jsx("th",{scope:"row",children:"Kod produktu"}),c.jsxs("td",{children:["BI-",e.id]})]})]})}),h==="delivery"&&c.jsxs(c.Fragment,{children:[c.jsx(pp,{children:c.jsx("tbody",{children:Ci.map(b=>c.jsxs("tr",{children:[c.jsx("th",{scope:"row",children:b.label}),c.jsxs("td",{children:[b.price===0?"Bezpłatnie":Q(b.price),b.freeAboveThreshold&&` · gratis od ${Q(_t)}`]})]},b.id))})}),c.jsxs("p",{children:["Produkt możesz zwrócić w ciągu 30 dni od otrzymania przesyłki, bez podawania przyczyny."," ",c.jsx(ie,{to:`${F}/help/returns`,children:"Zobacz zasady zwrotów"})]})]})]})]}),w.length>0&&c.jsxs(BS,{children:[c.jsxs(FS,{children:[c.jsx("h2",{children:"Podobne produkty"}),c.jsx(ie,{to:x.path,children:"Zobacz wszystkie"})]}),c.jsx(Ri,{children:w.map(b=>c.jsx(Di,{...b},b.id))})]})]})};function US(e){return ge({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"},child:[]}]})(e)}const WS=P.li`
  display: grid;
  grid-template-columns: 90px minmax(0, 1fr) auto;
  align-items: center;
  gap: 20px;
  padding: 18px 0;
  border-bottom: 1px solid var(--border);

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  @media (max-width: 640px) {
    grid-template-columns: 72px minmax(0, 1fr);
    gap: 12px 14px;
  }
`,YS=P(ie)`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 3 / 4;
  padding: 6px;
  border-radius: 10px;
  background: var(--surface-2);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 640px) {
    grid-row: span 2;
    align-self: start;
  }
`,KS=P.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,XS=P.h3`
  margin: 0;
  font-family: var(--font-heading);
  font-size: 16px;
  line-height: 1.3;
  color: var(--ink);
  text-decoration: none;

  &:hover {
    color: var(--accent);
  }
`,QS=P.span`
  font-size: 13px;
  color: var(--muted);

  strong {
    color: var(--ink);
  }
`,JS=P.span`
  font-size: 13px;
  color: var(--text);
`,ZS=P.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 640px) {
    gap: 10px;
  }
`,qS=P.strong`
  min-width: 90px;
  text-align: right;
  font-size: 16px;
  color: var(--ink);

  @media (max-width: 640px) {
    min-width: 0;
    margin-left: auto;
  }
`,e4=P.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: var(--muted);
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background: var(--danger-soft);
    color: var(--danger);
  }
`,t4=e=>{var v;const{lineKey:t,id:n,itemName:r,itemImage:i,price:s,size:o,quantity:l,summaryPrice:a,stock:d}=e,{updateCartItemCount:f,removeAllItemsFromCart:h,getQuantityInCart:g}=E.useContext(mt),x=d-(g(n)-l);return c.jsxs(WS,{children:[c.jsx(YS,{to:On(n),tabIndex:-1,"aria-hidden":"true",children:c.jsx("img",{src:i,alt:"",width:"90",height:"120"})}),c.jsxs(KS,{children:[c.jsx(XS,{as:ie,to:On(n),children:r}),c.jsx(QS,{children:o?c.jsxs(c.Fragment,{children:["Kolor: ",c.jsx("strong",{children:(v=e.color)==null?void 0:v.name})," · Rozmiar: ",c.jsx("strong",{children:o})]}):Wo(e)}),c.jsxs(JS,{children:[Q(s)," / szt."]})]}),c.jsxs(ZS,{children:[c.jsx(og,{size:"sm",value:l,min:1,max:x,onChange:y=>f(y,t),label:`Ilość: ${r}`}),c.jsx(qS,{children:Q(a)}),c.jsx(e4,{type:"button",onClick:()=>h(t),"aria-label":`Usuń ${r} z koszyka`,title:"Usuń z koszyka",children:c.jsx(US,{})})]})]})},n4=P.dl`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
`,Ur=P.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-size: 14px;
  color: ${({$highlight:e})=>e?"var(--success)":"var(--text)"};

  dt,
  dd {
    margin: 0;
  }

  dd {
    font-weight: 600;
    color: ${({$highlight:e})=>e?"var(--success)":"var(--ink)"};
    white-space: nowrap;
  }
`,r4=P.p`
  margin: 8px 0 0;
  font-size: 12px;
  color: var(--muted);
  text-align: right;
`,i4=P(Ur)`
  margin-top: 6px;
  padding-top: 14px;
  border-top: 1px solid var(--border);
  font-size: 16px;
  font-weight: 600;
  color: var(--ink);

  dd {
    font-size: 22px;
    font-weight: 700;
  }
`,s4=e=>e.delivery===null?e.freeShipping?"Gratis":"Wybierzesz w kasie":e.delivery===0?"Gratis":Q(e.delivery),fu=({totals:e,promoCode:t})=>c.jsxs(c.Fragment,{children:[c.jsxs(n4,{children:[c.jsxs(Ur,{children:[c.jsx("dt",{children:"Wartość produktów"}),c.jsx("dd",{children:Q(e.subtotal)})]}),e.discount>0&&c.jsxs(Ur,{$highlight:!0,children:[c.jsxs("dt",{children:["Rabat (",t,")"]}),c.jsxs("dd",{children:["−",Q(e.discount)]})]}),c.jsxs(Ur,{children:[c.jsx("dt",{children:"Dostawa"}),c.jsx("dd",{children:s4(e)})]}),e.paymentFee>0&&c.jsxs(Ur,{children:[c.jsx("dt",{children:"Opłata za pobranie"}),c.jsx("dd",{children:Q(e.paymentFee)})]}),c.jsxs(i4,{children:[c.jsx("dt",{children:"Do zapłaty"}),c.jsx("dd",{children:Q(e.total)})]})]}),c.jsx(r4,{children:"Ceny zawierają podatek VAT"})]}),o4=P.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 24px;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,a4=P.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h2 {
    margin: 0;
    font-size: 18px;
  }
`,l4=P.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`,c4=P(kt)`
  position: sticky;
  top: 176px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    margin: 0;
    font-size: 18px;
  }

  @media (max-width: 960px) {
    position: static;
  }
`,u4=P.div`
  padding: 14px;
  border-radius: var(--radius);
  background: ${({$done:e})=>e?"var(--success-soft)":"var(--surface-2)"};

  p {
    margin: 0 0 10px;
    font-size: 13px;
    color: var(--text);
  }

  strong {
    color: ${({$done:e})=>e?"var(--success)":"var(--ink)"};
  }

  div {
    height: 6px;
    border-radius: 999px;
    background: rgba(15, 15, 26, 0.08);
    overflow: hidden;
  }

  span {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: ${({$done:e})=>e?"var(--success)":"var(--accent)"};
    transition: width 0.4s ease;
  }
`,d4=P.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 16px;
  border-top: 1px solid var(--border);

  label {
    font-size: 13px;
    font-weight: 600;
    color: var(--ink);
  }

  div {
    display: flex;
    gap: 8px;
  }

  input {
    flex: 1;
    min-width: 0;
    height: 38px;
    padding: 0 12px;
    border: 1px solid var(--border);
    border-radius: 10px;
    font-size: 14px;
    text-transform: uppercase;

    &::placeholder {
      text-transform: none;
    }

    &:focus {
      outline: none;
      border-color: var(--accent);
    }
  }
`,p4=P.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  border-radius: 10px;
  background: var(--success-soft);
  color: var(--success);
  font-size: 14px;

  button {
    display: flex;
    padding: 4px;
    border: none;
    border-radius: 6px;
    background: transparent;
    color: inherit;
    cursor: pointer;

    &:hover {
      background: rgba(31, 157, 85, 0.12);
    }
  }
`,f4=P.p`
  margin: -8px 0 0;
  font-size: 13px;
  color: ${({$ok:e})=>e?"var(--success)":"var(--danger)"};
`,h4=P.section`
  margin-top: 48px;

  h2 {
    margin: 0 0 20px;
    font-size: 24px;
  }
`,m4=()=>{const{cartItemsDetailed:e,totalQuantity:t,cartTotalPrice:n,clearCart:r,promoCode:i,applyPromoCode:s,removePromoCode:o}=E.useContext(mt),[l,a]=E.useState(""),[d,f]=E.useState(null),h=jr();if(it("Koszyk"),e.length===0)return c.jsxs("div",{className:"wrapper",children:[c.jsx(Li,{children:"Koszyk"}),c.jsx(Er,{icon:$o,title:"Twój koszyk jest pusty",action:c.jsx(At,{to:`${F}/`,children:"Zacznij zakupy"}),children:"Dodaj produkty, które Ci się spodobały — zapamiętamy je, nawet jeśli zamkniesz przeglądarkę."}),c.jsxs(h4,{children:[c.jsx("h2",{children:"Bestsellery"}),c.jsx(Ri,{children:Om(5).map(y=>c.jsx(Di,{...y},y.id))})]})]});const g=lu({subtotal:n,promoCode:i}),x=Math.min(100,n/_t*100),v=y=>{if(y.preventDefault(),!l.trim())return;const j=s(l);f(j),j.ok&&a("")};return c.jsxs("div",{className:"wrapper",children:[c.jsxs(Li,{children:["Koszyk",c.jsxs("small",{children:[t," ",Ei(t,"produkt","produkty","produktów")]})]}),c.jsxs(o4,{children:[c.jsxs(kt,{children:[c.jsxs(a4,{children:[c.jsx("h2",{children:"Produkty"}),c.jsx(zt,{type:"button",$variant:"ghost",$size:"sm",onClick:r,children:"Wyczyść koszyk"})]}),c.jsx(l4,{children:e.map(y=>c.jsx(t4,{...y},y.lineKey))})]}),c.jsxs(c4,{as:"aside","aria-label":"Podsumowanie koszyka",children:[c.jsx("h2",{children:"Podsumowanie"}),c.jsxs(u4,{$done:g.freeShipping,children:[c.jsx("p",{children:g.freeShipping?c.jsx("strong",{children:"Masz darmową dostawę!"}):c.jsxs(c.Fragment,{children:["Brakuje ",c.jsx("strong",{children:Q(g.missingForFreeShipping)})," do darmowej dostawy"]})}),c.jsx("div",{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(x),children:c.jsx("span",{style:{width:`${g.freeShipping?100:x}%`}})})]}),c.jsx(fu,{totals:g,promoCode:i}),i?c.jsxs(p4,{children:[c.jsxs("span",{children:["Kod ",c.jsx("strong",{children:i})," aktywny"]}),c.jsx("button",{type:"button",onClick:()=>{o(),f(null)},"aria-label":"Usuń kod rabatowy",children:c.jsx(ji,{})})]}):c.jsxs(d4,{onSubmit:v,children:[c.jsx("label",{htmlFor:"promo-code",children:"Kod rabatowy"}),c.jsxs("div",{children:[c.jsx("input",{id:"promo-code",type:"text",value:l,onChange:y=>a(y.target.value),placeholder:"np. BUYIT10",autoComplete:"off"}),c.jsx(zt,{type:"submit",$variant:"secondary",$size:"sm",children:"Zastosuj"})]})]}),d&&c.jsx(f4,{$ok:d.ok,role:"status",children:d.message}),c.jsxs(zt,{type:"button",$block:!0,onClick:()=>h(`${F}/checkout`),children:["Przejdź do kasy",c.jsx(Ao,{})]}),c.jsx(At,{to:`${F}/`,$variant:"secondary",$block:!0,children:"Kontynuuj zakupy"})]})]})]})},g4=P.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 380px;
  gap: 24px;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,v4=P.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2 {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 20px;
    font-size: 19px;
  }
`,ps=P.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--ink);
  color: #ffffff;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 700;
`,Ba=P.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 4px;

  & + & {
    margin-top: 16px;
  }

  div + & {
    margin-top: 20px;
  }

  @media (max-width: 560px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,hp=P.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  grid-column: ${({$wide:e})=>e?"1 / -1":"auto"};

  label {
    font-size: 13px;
    font-weight: 600;
    color: var(--ink);
  }

  input,
  textarea {
    width: 100%;
    padding: 0 14px;
    border: 1px solid ${({$invalid:e})=>e?"var(--danger)":"var(--border)"};
    border-radius: 10px;
    background: var(--surface);
    font-size: 15px;
    color: var(--ink);
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease;

    &:focus {
      outline: none;
      border-color: ${({$invalid:e})=>e?"var(--danger)":"var(--accent)"};
      box-shadow: 0 0 0 3px
        ${({$invalid:e})=>e?"rgba(229, 72, 77, 0.15)":"rgba(91, 76, 255, 0.12)"};
    }
  }

  input {
    height: 46px;
  }

  textarea {
    padding: 12px 14px;
    resize: vertical;
  }

  > span {
    font-size: 12.5px;
    color: var(--danger);
  }
`,mp=P.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,gp=P.label`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  border: 1px solid ${({$active:e})=>e?"var(--accent)":"var(--border)"};
  border-radius: var(--radius);
  background: ${({$active:e})=>e?"var(--accent-soft)":"var(--surface)"};
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background 0.2s ease;

  &:hover {
    border-color: var(--accent);
  }

  input {
    width: 18px;
    height: 18px;
    margin: 0;
    accent-color: var(--accent);
  }

  span {
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: 1;
  }

  strong {
    font-size: 15px;
    color: var(--ink);
  }

  small {
    font-size: 13px;
    color: var(--muted);
  }

  em {
    font-style: normal;
    font-size: 14px;
    font-weight: 600;
    color: var(--ink);
    white-space: nowrap;
  }
`,vp=P.label`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 16px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--text);
  cursor: pointer;

  input {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    margin: 2px 0 0;
    accent-color: var(--accent);
    outline: ${({$invalid:e})=>e?"2px solid var(--danger)":"none"};
    outline-offset: 2px;
  }

  a {
    color: var(--accent);
    font-weight: 600;
  }

  em {
    display: block;
    font-style: normal;
    font-size: 12.5px;
    color: var(--danger);
  }
`,x4=P(kt)`
  position: sticky;
  top: 176px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    margin: 0;
    font-size: 18px;
  }

  @media (max-width: 960px) {
    position: static;
  }
`,y4=P.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 300px;
  margin: 0;
  padding: 0 0 16px;
  overflow-y: auto;
  list-style: none;
  border-bottom: 1px solid var(--border);

  li {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 13px;
  }

  img {
    flex-shrink: 0;
    width: 44px;
    height: 58px;
    padding: 3px;
    border-radius: 6px;
    background: var(--surface-2);
    object-fit: contain;
  }

  span {
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: 1;
    min-width: 0;
    color: var(--ink);
    font-weight: 500;
  }

  small {
    color: var(--muted);
    font-weight: 400;
  }

  strong {
    white-space: nowrap;
  }
`,w4=P.p`
  display: flex;
  gap: 8px;
  margin: 0;
  padding: 12px;
  border-radius: 10px;
  background: var(--surface-2);
  font-size: 12.5px;
  line-height: 1.5;
  color: var(--text);

  svg {
    flex-shrink: 0;
    margin-top: 2px;
    font-size: 15px;
    color: var(--accent);
  }
`,k4={email:"",phone:"",firstName:"",lastName:"",street:"",postalCode:"",city:"",lockerCode:"",notes:"",acceptTerms:!1,newsletter:!1},S4=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,j4=/^(\+48)?\s?\d{3}[\s-]?\d{3}[\s-]?\d{3}$/,z4=/^\d{2}-\d{3}$/,b4=/^[A-Z]{3}\d{2,3}[A-Z]{0,2}$/i,C4=(e,t)=>{const n={};return S4.test(e.email.trim())||(n.email="Podaj poprawny adres e-mail"),j4.test(e.phone.trim())||(n.phone="Podaj 9-cyfrowy numer telefonu"),e.firstName.trim()||(n.firstName="Podaj imię"),e.lastName.trim()||(n.lastName="Podaj nazwisko"),t==="courier"&&(e.street.trim()||(n.street="Podaj ulicę i numer"),z4.test(e.postalCode.trim())||(n.postalCode="Format: 00-000"),e.city.trim()||(n.city="Podaj miejscowość")),t==="parcel-locker"&&!b4.test(e.lockerCode.trim())&&(n.lockerCode="Podaj kod paczkomatu, np. WAW01A"),e.acceptTerms||(n.acceptTerms="Zaakceptuj regulamin, aby złożyć zamówienie"),n},E4=()=>{const{cartItemsDetailed:e,cartTotalPrice:t,promoCode:n,placeOrder:r}=E.useContext(mt),i=jr(),s=E.useRef(null),o=E.useRef(!1),[l,a]=E.useState(k4),[d,f]=E.useState(Ci[0].id),[h,g]=E.useState(jn[0].id),[x,v]=E.useState({}),[y,j]=E.useState(!1);if(it("Kasa"),e.length===0&&!o.current)return c.jsx(Zc,{to:`${F}/cart`,replace:!0});const u=C4(l,d),p=S=>(y||x[S])&&u[S],m=lu({subtotal:t,promoCode:n,deliveryId:d,paymentId:h}),w=jn.filter(S=>!S.onlyFor||S.onlyFor.includes(d)),z=S=>{const{name:N,value:M,type:T,checked:R}=S.target;a(B=>({...B,[N]:T==="checkbox"?R:M}))},b=S=>v(N=>({...N,[S.target.name]:!0})),I=S=>{f(S);const N=jn.find(M=>M.id===h);N.onlyFor&&!N.onlyFor.includes(S)&&g(jn[0].id)},k=S=>{var U,O;S.preventDefault(),j(!0);const N=Object.keys(u)[0];if(N){(O=(U=s.current)==null?void 0:U.querySelector(`[name="${N}"]`))==null||O.focus();return}o.current=!0;const{acceptTerms:M,notes:T,...R}=l,B=r({customer:R,deliveryId:d,paymentId:h,notes:T.trim()});i(`${F}/order/${B.number}`,{replace:!0})},L=(S,N,M={})=>c.jsxs(hp,{$invalid:!!p(S),$wide:M.wide,children:[c.jsx("label",{htmlFor:`checkout-${S}`,children:N}),c.jsx("input",{id:`checkout-${S}`,name:S,value:l[S],onChange:z,onBlur:b,"aria-invalid":!!p(S),"aria-describedby":p(S)?`checkout-${S}-error`:void 0,type:M.type||"text",autoComplete:M.autoComplete,inputMode:M.inputMode,placeholder:M.placeholder}),p(S)&&c.jsx("span",{id:`checkout-${S}-error`,children:u[S]})]});return c.jsxs("div",{className:"wrapper",children:[c.jsx(Cr,{items:[["Koszyk",`${F}/cart`],["Dostawa i płatność"]]}),c.jsx(Li,{children:"Dostawa i płatność"}),c.jsxs(g4,{as:"form",ref:s,onSubmit:k,noValidate:!0,children:[c.jsxs(v4,{children:[c.jsxs(kt,{children:[c.jsxs("h2",{children:[c.jsx(ps,{children:"1"}),"Dane kontaktowe"]}),c.jsxs(Ba,{children:[L("email","E-mail",{type:"email",autoComplete:"email",wide:!0}),L("firstName","Imię",{autoComplete:"given-name"}),L("lastName","Nazwisko",{autoComplete:"family-name"}),L("phone","Telefon",{type:"tel",autoComplete:"tel",inputMode:"tel",placeholder:"500 600 700"})]})]}),c.jsxs(kt,{children:[c.jsxs("h2",{children:[c.jsx(ps,{children:"2"}),"Sposób dostawy"]}),c.jsx(mp,{role:"radiogroup","aria-label":"Sposób dostawy",children:Ci.map(S=>{const N=Dm(S,t,uo[n]);return c.jsxs(gp,{$active:d===S.id,children:[c.jsx("input",{type:"radio",name:"delivery",value:S.id,checked:d===S.id,onChange:()=>I(S.id)}),c.jsxs("span",{children:[c.jsx("strong",{children:S.label}),c.jsx("small",{children:S.description})]}),c.jsx("em",{children:N===0?"Gratis":Q(N)})]},S.id)})}),d==="courier"&&c.jsxs(Ba,{children:[L("street","Ulica i numer",{autoComplete:"street-address",wide:!0}),L("postalCode","Kod pocztowy",{autoComplete:"postal-code",inputMode:"numeric",placeholder:"00-000"}),L("city","Miejscowość",{autoComplete:"address-level2"})]}),d==="parcel-locker"&&c.jsx(Ba,{children:L("lockerCode","Kod paczkomatu",{placeholder:"np. WAW01A",wide:!0})})]}),c.jsxs(kt,{children:[c.jsxs("h2",{children:[c.jsx(ps,{children:"3"}),"Płatność"]}),c.jsx(mp,{role:"radiogroup","aria-label":"Metoda płatności",children:w.map(S=>c.jsxs(gp,{$active:h===S.id,children:[c.jsx("input",{type:"radio",name:"payment",value:S.id,checked:h===S.id,onChange:()=>g(S.id)}),c.jsxs("span",{children:[c.jsx("strong",{children:S.label}),c.jsx("small",{children:S.description})]}),c.jsx("em",{children:S.fee>0?`+${Q(S.fee)}`:""})]},S.id))})]}),c.jsxs(kt,{children:[c.jsxs("h2",{children:[c.jsx(ps,{children:"4"}),"Uwagi i zgody"]}),c.jsxs(hp,{$wide:!0,children:[c.jsx("label",{htmlFor:"checkout-notes",children:"Uwagi do zamówienia (opcjonalnie)"}),c.jsx("textarea",{id:"checkout-notes",name:"notes",rows:3,value:l.notes,onChange:z})]}),c.jsxs(vp,{$invalid:!!p("acceptTerms"),children:[c.jsx("input",{type:"checkbox",name:"acceptTerms",checked:l.acceptTerms,onChange:z,onBlur:b,"aria-invalid":!!p("acceptTerms")}),c.jsxs("span",{children:["Akceptuję ",c.jsx(ie,{to:`${F}/help/terms`,children:"regulamin sklepu"})," i zasady zwrotów. *",p("acceptTerms")&&c.jsx("em",{children:u.acceptTerms})]})]}),c.jsxs(vp,{children:[c.jsx("input",{type:"checkbox",name:"newsletter",checked:l.newsletter,onChange:z}),c.jsx("span",{children:"Chcę otrzymywać informacje o nowościach i promocjach."})]})]})]}),c.jsxs(x4,{as:"aside","aria-label":"Podsumowanie zamówienia",children:[c.jsx("h2",{children:"Twoje zamówienie"}),c.jsx(y4,{children:e.map(S=>c.jsxs("li",{children:[c.jsx("img",{src:S.itemImage,alt:"",width:"44",height:"58"}),c.jsxs("span",{children:[S.itemName,c.jsxs("small",{children:[S.quantity," × ",Q(S.price),S.size&&` · ${S.size}`]})]}),c.jsx("strong",{children:Q(S.summaryPrice)})]},S.lineKey))}),c.jsx(fu,{totals:m,promoCode:n}),c.jsxs(zt,{type:"submit",$block:!0,children:[c.jsx(ix,{}),"Zamawiam i płacę ",Q(m.total)]}),c.jsxs(w4,{children:[c.jsx(Zh,{"aria-hidden":"true"}),"To sklep demonstracyjny — zamówienie zostanie zapisane tylko w Twojej przeglądarce, żadna płatność nie zostanie pobrana."]})]})]})]})},P4=P.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;
  padding: 40px 24px;
  border-radius: var(--radius-lg);
  background: var(--success-soft);
  text-align: center;

  > svg {
    font-size: 56px;
    color: var(--success);
  }

  h1 {
    margin: 4px 0;
    font-size: 30px;
  }

  p {
    margin: 0;
    max-width: 520px;
    line-height: 1.6;
    color: var(--text);
  }

  strong {
    color: var(--ink);
  }
`,T4=P.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 340px;
  gap: 24px;
  align-items: start;

  h2 {
    margin: 0 0 16px;
    font-size: 18px;
  }

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,L4=P.table`
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;
  font-size: 14px;

  td {
    padding: 10px 8px;
    border-bottom: 1px solid var(--border);
    vertical-align: middle;
  }

  td:first-child {
    width: 52px;
    padding-left: 0;
  }

  td:last-child {
    padding-right: 0;
    text-align: right;
    font-weight: 600;
    white-space: nowrap;
  }

  td:nth-child(3) {
    color: var(--muted);
    white-space: nowrap;
  }

  img {
    display: block;
    width: 44px;
    height: 58px;
    padding: 3px;
    border-radius: 6px;
    background: var(--surface-2);
    object-fit: contain;
  }

  small {
    display: block;
    color: var(--muted);
  }
`,I4=P.dl`
  margin: 0 0 20px;
  font-size: 14px;

  dt {
    margin-top: 14px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--muted);
  }

  dt:first-child {
    margin-top: 0;
  }

  dd {
    margin: 4px 0 0;
    line-height: 1.5;
    color: var(--ink);
  }
`,M4=()=>{const{number:e}=Jc(),{getOrder:t}=E.useContext(mt),n=t(e);if(it(n?`Zamówienie ${n.number}`:"Nie znaleziono zamówienia"),!n)return c.jsx("div",{className:"wrapper",children:c.jsxs(Er,{icon:Jh,title:"Nie znaleziono zamówienia",action:c.jsx(At,{to:`${F}/`,children:"Wróć do sklepu"}),children:["Zamówienie ",e," nie istnieje albo zostało złożone w innej przeglądarce."]})});const{customer:r}=n,i=Am(n.deliveryId),s=Rm(n.paymentId);return c.jsxs("div",{className:"wrapper",children:[c.jsxs(P4,{children:[c.jsx(qh,{"aria-hidden":"true"}),c.jsx("h1",{children:"Dziękujemy za zamówienie!"}),c.jsxs("p",{children:["Numer zamówienia: ",c.jsx("strong",{children:n.number})]}),c.jsxs("p",{children:["Potwierdzenie wysłalibyśmy na adres ",c.jsx("strong",{children:r.email})," — w wersji demonstracyjnej zamówienie jest zapisane tylko w Twojej przeglądarce."]})]}),c.jsxs(T4,{children:[c.jsxs(kt,{children:[c.jsx("h2",{children:"Zamówione produkty"}),c.jsx(L4,{children:c.jsx("tbody",{children:n.items.map(o=>c.jsxs("tr",{children:[c.jsx("td",{children:c.jsx("img",{src:o.itemImage,alt:"",width:"44",height:"58"})}),c.jsxs("td",{children:[o.itemName,o.size&&c.jsxs("small",{children:["Rozmiar: ",o.size]})]}),c.jsxs("td",{children:[o.quantity," szt."]}),c.jsx("td",{children:Q(o.price*o.quantity)})]},`${o.id}-${o.size||""}`))})}),c.jsx(fu,{totals:n.totals,promoCode:n.promoCode})]}),c.jsxs(kt,{as:"aside",children:[c.jsx("h2",{children:"Szczegóły"}),c.jsxs(I4,{children:[c.jsx("dt",{children:"Data złożenia"}),c.jsx("dd",{children:uw(n.createdAt)}),c.jsx("dt",{children:"Zamawiający"}),c.jsxs("dd",{children:[r.firstName," ",r.lastName,c.jsx("br",{}),r.phone]}),c.jsx("dt",{children:"Dostawa"}),c.jsxs("dd",{children:[i==null?void 0:i.label,n.deliveryId==="courier"&&c.jsxs(c.Fragment,{children:[c.jsx("br",{}),r.street,", ",r.postalCode," ",r.city]}),n.deliveryId==="parcel-locker"&&c.jsxs(c.Fragment,{children:[c.jsx("br",{}),"Paczkomat ",r.lockerCode.toUpperCase()]})]}),c.jsx("dt",{children:"Płatność"}),c.jsx("dd",{children:s==null?void 0:s.label}),n.notes&&c.jsxs(c.Fragment,{children:[c.jsx("dt",{children:"Uwagi"}),c.jsx("dd",{children:n.notes})]})]}),c.jsx(At,{to:`${F}/`,$block:!0,children:"Kontynuuj zakupy"})]})]})]})},N4=()=>{const{wishlist:e}=E.useContext(mt),t=e.map(Sn).filter(Boolean);return it("Ulubione"),c.jsxs("div",{className:"wrapper",children:[c.jsxs(Li,{children:["Ulubione",t.length>0&&c.jsxs("small",{children:[t.length," ",Ei(t.length,"produkt","produkty","produktów")]})]}),t.length===0?c.jsx(Er,{icon:_o,title:"Nie masz jeszcze ulubionych produktów",action:c.jsx(At,{to:`${F}/`,children:"Przeglądaj produkty"}),children:"Kliknij serduszko przy produkcie, aby zapisać go na później."}):c.jsx(Ri,{children:t.map(n=>c.jsx(Di,{...n},n.id))})]})},O4=P.div`
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  gap: 24px;
  align-items: start;

  @media (max-width: 800px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,$4=P.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h2 {
    margin: 0 0 8px;
    font-size: 20px;
  }

  a {
    padding: 10px 14px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 500;
    color: var(--text);
    text-decoration: none;

    &:hover {
      background: var(--surface);
      color: var(--ink);
    }

    &.active {
      background: var(--ink);
      color: #ffffff;
    }
  }

  @media (max-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;

    h2 {
      display: none;
    }
  }
`,_4=P.article`
  max-width: 720px;
  font-size: 15px;
  line-height: 1.7;
  color: var(--text);

  h1 {
    margin: 0 0 16px;
    font-size: 28px;
    color: var(--ink);
  }

  h2 {
    margin: 28px 0 10px;
    font-size: 19px;
    color: var(--ink);
  }

  p {
    margin: 0 0 14px;
  }

  ol {
    margin: 0 0 14px;
    padding-left: 20px;
  }

  table {
    width: 100%;
    margin-bottom: 16px;
    border-collapse: collapse;
    font-size: 14px;
  }

  th,
  td {
    padding: 10px 8px 10px 0;
    border-bottom: 1px solid var(--border);
    text-align: left;
    vertical-align: top;
  }

  th {
    color: var(--ink);
    font-weight: 600;
  }

  td:nth-child(3) {
    text-align: right;
    white-space: nowrap;
  }
`,A4=()=>{const{topic:e}=Jc(),t=Ls.find(n=>n.slug===e);return it(t==null?void 0:t.title),t?c.jsxs("div",{className:"wrapper",children:[c.jsx(Cr,{items:[["Strona główna",`${F}/`],[t.title]]}),c.jsxs(O4,{children:[c.jsxs($4,{"aria-label":"Tematy pomocy",children:[c.jsx("h2",{children:"Pomoc"}),Ls.map(n=>c.jsx(Hh,{to:`${F}/help/${n.slug}`,children:n.title},n.slug))]}),c.jsx(kt,{children:c.jsxs(_4,{children:[c.jsx("h1",{children:t.title}),t.content]})})]})]}):c.jsx(Zc,{to:`${F}/help/${Ls[0].slug}`,replace:!0})},R4=()=>(it("Nie znaleziono strony"),c.jsx("div",{className:"wrapper",children:c.jsx(Er,{icon:ox,title:"Nie znaleziono strony",action:c.jsx(At,{to:`${F}/`,children:"Wróć do strony głównej"}),children:"Strona, której szukasz, nie istnieje lub została przeniesiona."})}));function D4(){return c.jsx("div",{className:"app-container",children:c.jsx(lw,{children:c.jsxs(F1,{children:[c.jsx(Fw,{}),c.jsx(Tw,{}),c.jsx("main",{children:c.jsxs(M1,{children:[c.jsx(Ie,{path:"/",element:c.jsx(Zc,{to:`${F}/`,replace:!0})}),c.jsx(Ie,{path:`${F}/`,element:c.jsx(sS,{})}),c.jsx(Ie,{path:`${F}/books`,element:c.jsx(Da,{categoryKey:"books"})}),c.jsx(Ie,{path:`${F}/games`,element:c.jsx(Da,{categoryKey:"games"})}),c.jsx(Ie,{path:`${F}/t-shirts`,element:c.jsx(Da,{categoryKey:"tshirts"})}),c.jsx(Ie,{path:`${F}/sale`,element:c.jsx(yS,{})}),c.jsx(Ie,{path:`${F}/search`,element:c.jsx(kS,{})}),c.jsx(Ie,{path:`${F}/product/:id`,element:c.jsx(VS,{})}),c.jsx(Ie,{path:`${F}/cart`,element:c.jsx(m4,{})}),c.jsx(Ie,{path:`${F}/checkout`,element:c.jsx(E4,{})}),c.jsx(Ie,{path:`${F}/order/:number`,element:c.jsx(M4,{})}),c.jsx(Ie,{path:`${F}/wishlist`,element:c.jsx(N4,{})}),c.jsx(Ie,{path:`${F}/help/:topic`,element:c.jsx(A4,{})}),c.jsx(Ie,{path:"*",element:c.jsx(R4,{})})]})}),c.jsx(_w,{}),c.jsx(Aw,{})]})})})}Fa.createRoot(document.getElementById("root")).render(c.jsx(K.StrictMode,{children:c.jsx(D4,{})}));
