(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function o(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function l(u){if(u.ep)return;u.ep=!0;const f=o(u);fetch(u.href,f)}})();function v1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ac={exports:{}},wr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function y1(){if(mp)return wr;mp=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(l,u,f){var d=null;if(f!==void 0&&(d=""+f),u.key!==void 0&&(d=""+u.key),"key"in u){f={};for(var p in u)p!=="key"&&(f[p]=u[p])}else f=u;return u=f.ref,{$$typeof:n,type:l,key:d,ref:u!==void 0?u:null,props:f}}return wr.Fragment=i,wr.jsx=o,wr.jsxs=o,wr}var pp;function b1(){return pp||(pp=1,ac.exports=y1()),ac.exports}var Lt=b1(),ic={exports:{}},lt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp;function x1(){if(gp)return lt;gp=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.iterator;function x(O){return O===null||typeof O!="object"?null:(O=b&&O[b]||O["@@iterator"],typeof O=="function"?O:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,E={};function C(O,H,it){this.props=O,this.context=H,this.refs=E,this.updater=it||A}C.prototype.isReactComponent={},C.prototype.setState=function(O,H){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,H,"setState")},C.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function R(){}R.prototype=C.prototype;function B(O,H,it){this.props=O,this.context=H,this.refs=E,this.updater=it||A}var V=B.prototype=new R;V.constructor=B,T(V,C.prototype),V.isPureReactComponent=!0;var G=Array.isArray,q={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function ot(O,H,it,et,X,ht){return it=ht.ref,{$$typeof:n,type:O,key:H,ref:it!==void 0?it:null,props:ht}}function K(O,H){return ot(O.type,H,void 0,void 0,void 0,O.props)}function j(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function tt(O){var H={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(it){return H[it]})}var kt=/\/+/g;function Ee(O,H){return typeof O=="object"&&O!==null&&O.key!=null?tt(""+O.key):H.toString(36)}function Oe(){}function De(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(Oe,Oe):(O.status="pending",O.then(function(H){O.status==="pending"&&(O.status="fulfilled",O.value=H)},function(H){O.status==="pending"&&(O.status="rejected",O.reason=H)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function le(O,H,it,et,X){var ht=typeof O;(ht==="undefined"||ht==="boolean")&&(O=null);var st=!1;if(O===null)st=!0;else switch(ht){case"bigint":case"string":case"number":st=!0;break;case"object":switch(O.$$typeof){case n:case i:st=!0;break;case v:return st=O._init,le(st(O._payload),H,it,et,X)}}if(st)return X=X(O),st=et===""?"."+Ee(O,0):et,G(X)?(it="",st!=null&&(it=st.replace(kt,"$&/")+"/"),le(X,H,it,"",function(Ht){return Ht})):X!=null&&(j(X)&&(X=K(X,it+(X.key==null||O&&O.key===X.key?"":(""+X.key).replace(kt,"$&/")+"/")+st)),H.push(X)),1;st=0;var se=et===""?".":et+":";if(G(O))for(var yt=0;yt<O.length;yt++)et=O[yt],ht=se+Ee(et,yt),st+=le(et,H,it,ht,X);else if(yt=x(O),typeof yt=="function")for(O=yt.call(O),yt=0;!(et=O.next()).done;)et=et.value,ht=se+Ee(et,yt++),st+=le(et,H,it,ht,X);else if(ht==="object"){if(typeof O.then=="function")return le(De(O),H,it,et,X);throw H=String(O),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return st}function Y(O,H,it){if(O==null)return O;var et=[],X=0;return le(O,et,"","",function(ht){return H.call(it,ht,X++)}),et}function F(O){if(O._status===-1){var H=O._result;H=H(),H.then(function(it){(O._status===0||O._status===-1)&&(O._status=1,O._result=it)},function(it){(O._status===0||O._status===-1)&&(O._status=2,O._result=it)}),O._status===-1&&(O._status=0,O._result=H)}if(O._status===1)return O._result.default;throw O._result}var J=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function vt(){}return lt.Children={map:Y,forEach:function(O,H,it){Y(O,function(){H.apply(this,arguments)},it)},count:function(O){var H=0;return Y(O,function(){H++}),H},toArray:function(O){return Y(O,function(H){return H})||[]},only:function(O){if(!j(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},lt.Component=C,lt.Fragment=o,lt.Profiler=u,lt.PureComponent=B,lt.StrictMode=l,lt.Suspense=h,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,lt.act=function(){throw Error("act(...) is not supported in production builds of React.")},lt.cache=function(O){return function(){return O.apply(null,arguments)}},lt.cloneElement=function(O,H,it){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var et=T({},O.props),X=O.key,ht=void 0;if(H!=null)for(st in H.ref!==void 0&&(ht=void 0),H.key!==void 0&&(X=""+H.key),H)!W.call(H,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&H.ref===void 0||(et[st]=H[st]);var st=arguments.length-2;if(st===1)et.children=it;else if(1<st){for(var se=Array(st),yt=0;yt<st;yt++)se[yt]=arguments[yt+2];et.children=se}return ot(O.type,X,void 0,void 0,ht,et)},lt.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:f,_context:O},O},lt.createElement=function(O,H,it){var et,X={},ht=null;if(H!=null)for(et in H.key!==void 0&&(ht=""+H.key),H)W.call(H,et)&&et!=="key"&&et!=="__self"&&et!=="__source"&&(X[et]=H[et]);var st=arguments.length-2;if(st===1)X.children=it;else if(1<st){for(var se=Array(st),yt=0;yt<st;yt++)se[yt]=arguments[yt+2];X.children=se}if(O&&O.defaultProps)for(et in st=O.defaultProps,st)X[et]===void 0&&(X[et]=st[et]);return ot(O,ht,void 0,void 0,null,X)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(O){return{$$typeof:p,render:O}},lt.isValidElement=j,lt.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:F}},lt.memo=function(O,H){return{$$typeof:m,type:O,compare:H===void 0?null:H}},lt.startTransition=function(O){var H=q.T,it={};q.T=it;try{var et=O(),X=q.S;X!==null&&X(it,et),typeof et=="object"&&et!==null&&typeof et.then=="function"&&et.then(vt,J)}catch(ht){J(ht)}finally{q.T=H}},lt.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},lt.use=function(O){return q.H.use(O)},lt.useActionState=function(O,H,it){return q.H.useActionState(O,H,it)},lt.useCallback=function(O,H){return q.H.useCallback(O,H)},lt.useContext=function(O){return q.H.useContext(O)},lt.useDebugValue=function(){},lt.useDeferredValue=function(O,H){return q.H.useDeferredValue(O,H)},lt.useEffect=function(O,H){return q.H.useEffect(O,H)},lt.useId=function(){return q.H.useId()},lt.useImperativeHandle=function(O,H,it){return q.H.useImperativeHandle(O,H,it)},lt.useInsertionEffect=function(O,H){return q.H.useInsertionEffect(O,H)},lt.useLayoutEffect=function(O,H){return q.H.useLayoutEffect(O,H)},lt.useMemo=function(O,H){return q.H.useMemo(O,H)},lt.useOptimistic=function(O,H){return q.H.useOptimistic(O,H)},lt.useReducer=function(O,H,it){return q.H.useReducer(O,H,it)},lt.useRef=function(O){return q.H.useRef(O)},lt.useState=function(O){return q.H.useState(O)},lt.useSyncExternalStore=function(O,H,it){return q.H.useSyncExternalStore(O,H,it)},lt.useTransition=function(){return q.H.useTransition()},lt.version="19.0.0",lt}var vp;function Kc(){return vp||(vp=1,ic.exports=x1()),ic.exports}var _=Kc();const bt=v1(_);var rc={exports:{}},Cr={},oc={exports:{}},lc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function S1(){return yp||(yp=1,function(n){function i(Y,F){var J=Y.length;Y.push(F);t:for(;0<J;){var vt=J-1>>>1,O=Y[vt];if(0<u(O,F))Y[vt]=F,Y[J]=O,J=vt;else break t}}function o(Y){return Y.length===0?null:Y[0]}function l(Y){if(Y.length===0)return null;var F=Y[0],J=Y.pop();if(J!==F){Y[0]=J;t:for(var vt=0,O=Y.length,H=O>>>1;vt<H;){var it=2*(vt+1)-1,et=Y[it],X=it+1,ht=Y[X];if(0>u(et,J))X<O&&0>u(ht,et)?(Y[vt]=ht,Y[X]=J,vt=X):(Y[vt]=et,Y[it]=J,vt=it);else if(X<O&&0>u(ht,J))Y[vt]=ht,Y[X]=J,vt=X;else break t}}return F}function u(Y,F){var J=Y.sortIndex-F.sortIndex;return J!==0?J:Y.id-F.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var d=Date,p=d.now();n.unstable_now=function(){return d.now()-p}}var h=[],m=[],v=1,b=null,x=3,A=!1,T=!1,E=!1,C=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function V(Y){for(var F=o(m);F!==null;){if(F.callback===null)l(m);else if(F.startTime<=Y)l(m),F.sortIndex=F.expirationTime,i(h,F);else break;F=o(m)}}function G(Y){if(E=!1,V(Y),!T)if(o(h)!==null)T=!0,De();else{var F=o(m);F!==null&&le(G,F.startTime-Y)}}var q=!1,W=-1,ot=5,K=-1;function j(){return!(n.unstable_now()-K<ot)}function tt(){if(q){var Y=n.unstable_now();K=Y;var F=!0;try{t:{T=!1,E&&(E=!1,R(W),W=-1),A=!0;var J=x;try{e:{for(V(Y),b=o(h);b!==null&&!(b.expirationTime>Y&&j());){var vt=b.callback;if(typeof vt=="function"){b.callback=null,x=b.priorityLevel;var O=vt(b.expirationTime<=Y);if(Y=n.unstable_now(),typeof O=="function"){b.callback=O,V(Y),F=!0;break e}b===o(h)&&l(h),V(Y)}else l(h);b=o(h)}if(b!==null)F=!0;else{var H=o(m);H!==null&&le(G,H.startTime-Y),F=!1}}break t}finally{b=null,x=J,A=!1}F=void 0}}finally{F?kt():q=!1}}}var kt;if(typeof B=="function")kt=function(){B(tt)};else if(typeof MessageChannel<"u"){var Ee=new MessageChannel,Oe=Ee.port2;Ee.port1.onmessage=tt,kt=function(){Oe.postMessage(null)}}else kt=function(){C(tt,0)};function De(){q||(q=!0,kt())}function le(Y,F){W=C(function(){Y(n.unstable_now())},F)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Y){Y.callback=null},n.unstable_continueExecution=function(){T||A||(T=!0,De())},n.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ot=0<Y?Math.floor(1e3/Y):5},n.unstable_getCurrentPriorityLevel=function(){return x},n.unstable_getFirstCallbackNode=function(){return o(h)},n.unstable_next=function(Y){switch(x){case 1:case 2:case 3:var F=3;break;default:F=x}var J=x;x=F;try{return Y()}finally{x=J}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(Y,F){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var J=x;x=Y;try{return F()}finally{x=J}},n.unstable_scheduleCallback=function(Y,F,J){var vt=n.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?vt+J:vt):J=vt,Y){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=J+O,Y={id:v++,callback:F,priorityLevel:Y,startTime:J,expirationTime:O,sortIndex:-1},J>vt?(Y.sortIndex=J,i(m,Y),o(h)===null&&Y===o(m)&&(E?(R(W),W=-1):E=!0,le(G,J-vt))):(Y.sortIndex=O,i(h,Y),T||A||(T=!0,De())),Y},n.unstable_shouldYield=j,n.unstable_wrapCallback=function(Y){var F=x;return function(){var J=x;x=F;try{return Y.apply(this,arguments)}finally{x=J}}}}(lc)),lc}var bp;function T1(){return bp||(bp=1,oc.exports=S1()),oc.exports}var sc={exports:{}},ie={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function A1(){if(xp)return ie;xp=1;var n=Kc();function i(h){var m="https://react.dev/errors/"+h;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+h+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var l={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},u=Symbol.for("react.portal");function f(h,m,v){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:b==null?null:""+b,children:h,containerInfo:m,implementation:v}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(h,m){if(h==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,ie.createPortal=function(h,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(i(299));return f(h,m,null,v)},ie.flushSync=function(h){var m=d.T,v=l.p;try{if(d.T=null,l.p=2,h)return h()}finally{d.T=m,l.p=v,l.d.f()}},ie.preconnect=function(h,m){typeof h=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,l.d.C(h,m))},ie.prefetchDNS=function(h){typeof h=="string"&&l.d.D(h)},ie.preinit=function(h,m){if(typeof h=="string"&&m&&typeof m.as=="string"){var v=m.as,b=p(v,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,A=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?l.d.S(h,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:b,integrity:x,fetchPriority:A}):v==="script"&&l.d.X(h,{crossOrigin:b,integrity:x,fetchPriority:A,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ie.preinitModule=function(h,m){if(typeof h=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=p(m.as,m.crossOrigin);l.d.M(h,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&l.d.M(h)},ie.preload=function(h,m){if(typeof h=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,b=p(v,m.crossOrigin);l.d.L(h,v,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ie.preloadModule=function(h,m){if(typeof h=="string")if(m){var v=p(m.as,m.crossOrigin);l.d.m(h,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else l.d.m(h)},ie.requestFormReset=function(h){l.d.r(h)},ie.unstable_batchedUpdates=function(h,m){return h(m)},ie.useFormState=function(h,m,v){return d.H.useFormState(h,m,v)},ie.useFormStatus=function(){return d.H.useHostTransitionStatus()},ie.version="19.0.0",ie}var Sp;function E1(){if(Sp)return sc.exports;Sp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),sc.exports=A1(),sc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp;function O1(){if(Tp)return Cr;Tp=1;var n=T1(),i=Kc(),o=E1();function l(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var f=Symbol.for("react.element"),d=Symbol.for("react.transitional.element"),p=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),A=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),C=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),V=Symbol.for("react.offscreen"),G=Symbol.for("react.memo_cache_sentinel"),q=Symbol.iterator;function W(t){return t===null||typeof t!="object"?null:(t=q&&t[q]||t["@@iterator"],typeof t=="function"?t:null)}var ot=Symbol.for("react.client.reference");function K(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ot?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case h:return"Fragment";case p:return"Portal";case v:return"Profiler";case m:return"StrictMode";case E:return"Suspense";case C:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case A:return(t.displayName||"Context")+".Provider";case x:return(t._context.displayName||"Context")+".Consumer";case T:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case R:return e=t.displayName||null,e!==null?e:K(t.type)||"Memo";case B:e=t._payload,t=t._init;try{return K(t(e))}catch{}}return null}var j=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt=Object.assign,kt,Ee;function Oe(t){if(kt===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);kt=e&&e[1]||"",Ee=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+kt+t+Ee}var De=!1;function le(t,e){if(!t||De)return"";De=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var P=function(){throw Error()};if(Object.defineProperty(P.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(P,[])}catch(U){var k=U}Reflect.construct(t,[],P)}else{try{P.call()}catch(U){k=U}t.call(P.prototype)}}else{try{throw Error()}catch(U){k=U}(P=t())&&typeof P.catch=="function"&&P.catch(function(){})}}catch(U){if(U&&k&&typeof U.stack=="string")return[U.stack,k.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),g=c[0],y=c[1];if(g&&y){var S=g.split(`
`),M=y.split(`
`);for(s=r=0;r<S.length&&!S[r].includes("DetermineComponentFrameRoot");)r++;for(;s<M.length&&!M[s].includes("DetermineComponentFrameRoot");)s++;if(r===S.length||s===M.length)for(r=S.length-1,s=M.length-1;1<=r&&0<=s&&S[r]!==M[s];)s--;for(;1<=r&&0<=s;r--,s--)if(S[r]!==M[s]){if(r!==1||s!==1)do if(r--,s--,0>s||S[r]!==M[s]){var N=`
`+S[r].replace(" at new "," at ");return t.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",t.displayName)),N}while(1<=r&&0<=s);break}}}finally{De=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Oe(a):""}function Y(t){switch(t.tag){case 26:case 27:case 5:return Oe(t.type);case 16:return Oe("Lazy");case 13:return Oe("Suspense");case 19:return Oe("SuspenseList");case 0:case 15:return t=le(t.type,!1),t;case 11:return t=le(t.type.render,!1),t;case 1:return t=le(t.type,!0),t;default:return""}}function F(t){try{var e="";do e+=Y(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function J(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function vt(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function O(t){if(J(t)!==t)throw Error(l(188))}function H(t){var e=t.alternate;if(!e){if(e=J(t),e===null)throw Error(l(188));return e!==t?null:t}for(var a=t,r=e;;){var s=a.return;if(s===null)break;var c=s.alternate;if(c===null){if(r=s.return,r!==null){a=r;continue}break}if(s.child===c.child){for(c=s.child;c;){if(c===a)return O(s),t;if(c===r)return O(s),e;c=c.sibling}throw Error(l(188))}if(a.return!==r.return)a=s,r=c;else{for(var g=!1,y=s.child;y;){if(y===a){g=!0,a=s,r=c;break}if(y===r){g=!0,r=s,a=c;break}y=y.sibling}if(!g){for(y=c.child;y;){if(y===a){g=!0,a=c,r=s;break}if(y===r){g=!0,r=c,a=s;break}y=y.sibling}if(!g)throw Error(l(189))}}if(a.alternate!==r)throw Error(l(190))}if(a.tag!==3)throw Error(l(188));return a.stateNode.current===a?t:e}function it(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=it(t),e!==null)return e;t=t.sibling}return null}var et=Array.isArray,X=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ht={pending:!1,data:null,method:null,action:null},st=[],se=-1;function yt(t){return{current:t}}function Ht(t){0>se||(t.current=st[se],st[se]=null,se--)}function Mt(t,e){se++,st[se]=t.current,t.current=e}var Qe=yt(null),_i=yt(null),Cn=yt(null),ao=yt(null);function io(t,e){switch(Mt(Cn,e),Mt(_i,t),Mt(Qe,null),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)&&(e=e.namespaceURI)?Ym(e):0;break;default:if(t=t===8?e.parentNode:e,e=t.tagName,t=t.namespaceURI)t=Ym(t),e=Xm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ht(Qe),Mt(Qe,e)}function Va(){Ht(Qe),Ht(_i),Ht(Cn)}function Ql(t){t.memoizedState!==null&&Mt(ao,t);var e=Qe.current,a=Xm(e,t.type);e!==a&&(Mt(_i,t),Mt(Qe,a))}function ro(t){_i.current===t&&(Ht(Qe),Ht(_i)),ao.current===t&&(Ht(ao),Er._currentValue=ht)}var Fl=Object.prototype.hasOwnProperty,Jl=n.unstable_scheduleCallback,$l=n.unstable_cancelCallback,Fv=n.unstable_shouldYield,Jv=n.unstable_requestPaint,Fe=n.unstable_now,$v=n.unstable_getCurrentPriorityLevel,_f=n.unstable_ImmediatePriority,kf=n.unstable_UserBlockingPriority,oo=n.unstable_NormalPriority,Wv=n.unstable_LowPriority,Vf=n.unstable_IdlePriority,Iv=n.log,ty=n.unstable_setDisableYieldValue,ki=null,pe=null;function ey(t){if(pe&&typeof pe.onCommitFiberRoot=="function")try{pe.onCommitFiberRoot(ki,t,void 0,(t.current.flags&128)===128)}catch{}}function zn(t){if(typeof Iv=="function"&&ty(t),pe&&typeof pe.setStrictMode=="function")try{pe.setStrictMode(ki,t)}catch{}}var ge=Math.clz32?Math.clz32:iy,ny=Math.log,ay=Math.LN2;function iy(t){return t>>>=0,t===0?32:31-(ny(t)/ay|0)|0}var lo=128,so=4194304;function ra(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function uo(t,e){var a=t.pendingLanes;if(a===0)return 0;var r=0,s=t.suspendedLanes,c=t.pingedLanes,g=t.warmLanes;t=t.finishedLanes!==0;var y=a&134217727;return y!==0?(a=y&~s,a!==0?r=ra(a):(c&=y,c!==0?r=ra(c):t||(g=y&~g,g!==0&&(r=ra(g))))):(y=a&~s,y!==0?r=ra(y):c!==0?r=ra(c):t||(g=a&~g,g!==0&&(r=ra(g)))),r===0?0:e!==0&&e!==r&&(e&s)===0&&(s=r&-r,g=e&-e,s>=g||s===32&&(g&4194176)!==0)?e:r}function Vi(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function ry(t,e){switch(t){case 1:case 2:case 4:case 8:return e+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uf(){var t=lo;return lo<<=1,(lo&4194176)===0&&(lo=128),t}function Nf(){var t=so;return so<<=1,(so&62914560)===0&&(so=4194304),t}function Wl(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Ui(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function oy(t,e,a,r,s,c){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var y=t.entanglements,S=t.expirationTimes,M=t.hiddenUpdates;for(a=g&~a;0<a;){var N=31-ge(a),P=1<<N;y[N]=0,S[N]=-1;var k=M[N];if(k!==null)for(M[N]=null,N=0;N<k.length;N++){var U=k[N];U!==null&&(U.lane&=-536870913)}a&=~P}r!==0&&Bf(t,r,0),c!==0&&s===0&&t.tag!==0&&(t.suspendedLanes|=c&~(g&~e))}function Bf(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-ge(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|a&4194218}function Lf(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var r=31-ge(a),s=1<<r;s&e|t[r]&e&&(t[r]|=e),a&=~s}}function qf(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Pf(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:sp(t.type))}function ly(t,e){var a=X.p;try{return X.p=t,e()}finally{X.p=a}}var _n=Math.random().toString(36).slice(2),ne="__reactFiber$"+_n,de="__reactProps$"+_n,Ua="__reactContainer$"+_n,Il="__reactEvents$"+_n,sy="__reactListeners$"+_n,uy="__reactHandles$"+_n,Hf="__reactResources$"+_n,Ni="__reactMarker$"+_n;function ts(t){delete t[ne],delete t[de],delete t[Il],delete t[sy],delete t[uy]}function oa(t){var e=t[ne];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Ua]||a[ne]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Km(t);t!==null;){if(a=t[ne])return a;t=Km(t)}return e}t=a,a=t.parentNode}return null}function Na(t){if(t=t[ne]||t[Ua]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Bi(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(l(33))}function Ba(t){var e=t[Hf];return e||(e=t[Hf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Qt(t){t[Ni]=!0}var jf=new Set,Yf={};function la(t,e){La(t,e),La(t+"Capture",e)}function La(t,e){for(Yf[t]=e,t=0;t<e.length;t++)jf.add(e[t])}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xf={},Gf={};function fy(t){return Fl.call(Gf,t)?!0:Fl.call(Xf,t)?!1:cy.test(t)?Gf[t]=!0:(Xf[t]=!0,!1)}function co(t,e,a){if(fy(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function fo(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function ln(t,e,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+r)}}function Me(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dy(t){var e=Zf(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var s=a.get,c=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(g){r=""+g,c.call(this,g)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(g){r=""+g},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ho(t){t._valueTracker||(t._valueTracker=dy(t))}function Kf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),r="";return t&&(r=Zf(t)?t.checked?"true":"false":t.value),t=r,t!==a?(e.setValue(t),!0):!1}function mo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var hy=/[\n"\\]/g;function Re(t){return t.replace(hy,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function es(t,e,a,r,s,c,g,y){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),e!=null?g==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Me(e)):t.value!==""+Me(e)&&(t.value=""+Me(e)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),e!=null?ns(t,g,Me(e)):a!=null?ns(t,g,Me(a)):r!=null&&t.removeAttribute("value"),s==null&&c!=null&&(t.defaultChecked=!!c),s!=null&&(t.checked=s&&typeof s!="function"&&typeof s!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.name=""+Me(y):t.removeAttribute("name")}function Qf(t,e,a,r,s,c,g,y){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),e!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||e!=null))return;a=a!=null?""+Me(a):"",e=e!=null?""+Me(e):a,y||e===t.value||(t.value=e),t.defaultValue=e}r=r??s,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=y?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g)}function ns(t,e,a){e==="number"&&mo(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function qa(t,e,a,r){if(t=t.options,e){e={};for(var s=0;s<a.length;s++)e["$"+a[s]]=!0;for(a=0;a<t.length;a++)s=e.hasOwnProperty("$"+t[a].value),t[a].selected!==s&&(t[a].selected=s),s&&r&&(t[a].defaultSelected=!0)}else{for(a=""+Me(a),e=null,s=0;s<t.length;s++){if(t[s].value===a){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Ff(t,e,a){if(e!=null&&(e=""+Me(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Me(a):""}function Jf(t,e,a,r){if(e==null){if(r!=null){if(a!=null)throw Error(l(92));if(et(r)){if(1<r.length)throw Error(l(93));r=r[0]}a=r}a==null&&(a=""),e=a}a=Me(e),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r)}function Pa(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var my=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $f(t,e,a){var r=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,a):typeof a!="number"||a===0||my.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function Wf(t,e,a){if(e!=null&&typeof e!="object")throw Error(l(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var s in e)r=e[s],e.hasOwnProperty(s)&&a[s]!==r&&$f(t,s,r)}else for(var c in e)e.hasOwnProperty(c)&&$f(t,c,e[c])}function as(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var py=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function po(t){return gy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var is=null;function rs(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ha=null,ja=null;function If(t){var e=Na(t);if(e&&(t=e.stateNode)){var a=t[de]||null;t:switch(t=e.stateNode,e.type){case"input":if(es(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Re(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var r=a[e];if(r!==t&&r.form===t.form){var s=r[de]||null;if(!s)throw Error(l(90));es(r,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(e=0;e<a.length;e++)r=a[e],r.form===t.form&&Kf(r)}break t;case"textarea":Ff(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&qa(t,!!a.multiple,e,!1)}}}var os=!1;function td(t,e,a){if(os)return t(e,a);os=!0;try{var r=t(e);return r}finally{if(os=!1,(Ha!==null||ja!==null)&&(Wo(),Ha&&(e=Ha,t=ja,ja=Ha=null,If(e),t)))for(e=0;e<t.length;e++)If(t[e])}}function Li(t,e){var a=t.stateNode;if(a===null)return null;var r=a[de]||null;if(r===null)return null;a=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(l(231,e,typeof a));return a}var ls=!1;if(on)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){ls=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{ls=!1}var kn=null,ss=null,go=null;function ed(){if(go)return go;var t,e=ss,a=e.length,r,s="value"in kn?kn.value:kn.textContent,c=s.length;for(t=0;t<a&&e[t]===s[t];t++);var g=a-t;for(r=1;r<=g&&e[a-r]===s[c-r];r++);return go=s.slice(t,1<r?1-r:void 0)}function vo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function yo(){return!0}function nd(){return!1}function he(t){function e(a,r,s,c,g){this._reactName=a,this._targetInst=s,this.type=r,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var y in t)t.hasOwnProperty(y)&&(a=t[y],this[y]=a?a(c):c[y]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?yo:nd,this.isPropagationStopped=nd,this}return tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=yo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=yo)},persist:function(){},isPersistent:yo}),e}var sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bo=he(sa),Pi=tt({},sa,{view:0,detail:0}),vy=he(Pi),us,cs,Hi,xo=tt({},Pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ds,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hi&&(Hi&&t.type==="mousemove"?(us=t.screenX-Hi.screenX,cs=t.screenY-Hi.screenY):cs=us=0,Hi=t),us)},movementY:function(t){return"movementY"in t?t.movementY:cs}}),ad=he(xo),yy=tt({},xo,{dataTransfer:0}),by=he(yy),xy=tt({},Pi,{relatedTarget:0}),fs=he(xy),Sy=tt({},sa,{animationName:0,elapsedTime:0,pseudoElement:0}),Ty=he(Sy),Ay=tt({},sa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ey=he(Ay),Oy=tt({},sa,{data:0}),id=he(Oy),Dy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},My={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ry={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ry[t])?!!e[t]:!1}function ds(){return wy}var Cy=tt({},Pi,{key:function(t){if(t.key){var e=Dy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?My[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ds,charCode:function(t){return t.type==="keypress"?vo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zy=he(Cy),_y=tt({},xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rd=he(_y),ky=tt({},Pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ds}),Vy=he(ky),Uy=tt({},sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ny=he(Uy),By=tt({},xo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ly=he(By),qy=tt({},sa,{newState:0,oldState:0}),Py=he(qy),Hy=[9,13,27,32],hs=on&&"CompositionEvent"in window,ji=null;on&&"documentMode"in document&&(ji=document.documentMode);var jy=on&&"TextEvent"in window&&!ji,od=on&&(!hs||ji&&8<ji&&11>=ji),ld=" ",sd=!1;function ud(t,e){switch(t){case"keyup":return Hy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ya=!1;function Yy(t,e){switch(t){case"compositionend":return cd(e);case"keypress":return e.which!==32?null:(sd=!0,ld);case"textInput":return t=e.data,t===ld&&sd?null:t;default:return null}}function Xy(t,e){if(Ya)return t==="compositionend"||!hs&&ud(t,e)?(t=ed(),go=ss=kn=null,Ya=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return od&&e.locale!=="ko"?null:e.data;default:return null}}var Gy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Gy[t.type]:e==="textarea"}function dd(t,e,a,r){Ha?ja?ja.push(r):ja=[r]:Ha=r,e=al(e,"onChange"),0<e.length&&(a=new bo("onChange","change",null,a,r),t.push({event:a,listeners:e}))}var Yi=null,Xi=null;function Zy(t){Lm(t,0)}function So(t){var e=Bi(t);if(Kf(e))return t}function hd(t,e){if(t==="change")return e}var md=!1;if(on){var ms;if(on){var ps="oninput"in document;if(!ps){var pd=document.createElement("div");pd.setAttribute("oninput","return;"),ps=typeof pd.oninput=="function"}ms=ps}else ms=!1;md=ms&&(!document.documentMode||9<document.documentMode)}function gd(){Yi&&(Yi.detachEvent("onpropertychange",vd),Xi=Yi=null)}function vd(t){if(t.propertyName==="value"&&So(Xi)){var e=[];dd(e,Xi,t,rs(t)),td(Zy,e)}}function Ky(t,e,a){t==="focusin"?(gd(),Yi=e,Xi=a,Yi.attachEvent("onpropertychange",vd)):t==="focusout"&&gd()}function Qy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return So(Xi)}function Fy(t,e){if(t==="click")return So(e)}function Jy(t,e){if(t==="input"||t==="change")return So(e)}function $y(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ve=typeof Object.is=="function"?Object.is:$y;function Gi(t,e){if(ve(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),r=Object.keys(e);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var s=a[r];if(!Fl.call(e,s)||!ve(t[s],e[s]))return!1}return!0}function yd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bd(t,e){var a=yd(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=e&&r>=e)return{node:a,offset:e-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=yd(a)}}function xd(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xd(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Sd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=mo(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=mo(t.document)}return e}function gs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Wy(t,e){var a=Sd(e);e=t.focusedElem;var r=t.selectionRange;if(a!==e&&e&&e.ownerDocument&&xd(e.ownerDocument.documentElement,e)){if(r!==null&&gs(e)){if(t=r.start,a=r.end,a===void 0&&(a=t),"selectionStart"in e)e.selectionStart=t,e.selectionEnd=Math.min(a,e.value.length);else if(a=(t=e.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var s=e.textContent.length,c=Math.min(r.start,s);r=r.end===void 0?c:Math.min(r.end,s),!a.extend&&c>r&&(s=r,r=c,c=s),s=bd(e,c);var g=bd(e,r);s&&g&&(a.rangeCount!==1||a.anchorNode!==s.node||a.anchorOffset!==s.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),a.removeAllRanges(),c>r?(a.addRange(t),a.extend(g.node,g.offset)):(t.setEnd(g.node,g.offset),a.addRange(t)))}}for(t=[],a=e;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<t.length;e++)a=t[e],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var Iy=on&&"documentMode"in document&&11>=document.documentMode,Xa=null,vs=null,Zi=null,ys=!1;function Td(t,e,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ys||Xa==null||Xa!==mo(r)||(r=Xa,"selectionStart"in r&&gs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zi&&Gi(Zi,r)||(Zi=r,r=al(vs,"onSelect"),0<r.length&&(e=new bo("onSelect","select",null,e,a),t.push({event:e,listeners:r}),e.target=Xa)))}function ua(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Ga={animationend:ua("Animation","AnimationEnd"),animationiteration:ua("Animation","AnimationIteration"),animationstart:ua("Animation","AnimationStart"),transitionrun:ua("Transition","TransitionRun"),transitionstart:ua("Transition","TransitionStart"),transitioncancel:ua("Transition","TransitionCancel"),transitionend:ua("Transition","TransitionEnd")},bs={},Ad={};on&&(Ad=document.createElement("div").style,"AnimationEvent"in window||(delete Ga.animationend.animation,delete Ga.animationiteration.animation,delete Ga.animationstart.animation),"TransitionEvent"in window||delete Ga.transitionend.transition);function ca(t){if(bs[t])return bs[t];if(!Ga[t])return t;var e=Ga[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Ad)return bs[t]=e[a];return t}var Ed=ca("animationend"),Od=ca("animationiteration"),Dd=ca("animationstart"),tb=ca("transitionrun"),eb=ca("transitionstart"),nb=ca("transitioncancel"),Md=ca("transitionend"),Rd=new Map,wd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function He(t,e){Rd.set(t,e),la(e,[t])}var we=[],Za=0,xs=0;function To(){for(var t=Za,e=xs=Za=0;e<t;){var a=we[e];we[e++]=null;var r=we[e];we[e++]=null;var s=we[e];we[e++]=null;var c=we[e];if(we[e++]=null,r!==null&&s!==null){var g=r.pending;g===null?s.next=s:(s.next=g.next,g.next=s),r.pending=s}c!==0&&Cd(a,s,c)}}function Ao(t,e,a,r){we[Za++]=t,we[Za++]=e,we[Za++]=a,we[Za++]=r,xs|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Ss(t,e,a,r){return Ao(t,e,a,r),Eo(t)}function Vn(t,e){return Ao(t,null,null,e),Eo(t)}function Cd(t,e,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var s=!1,c=t.return;c!==null;)c.childLanes|=a,r=c.alternate,r!==null&&(r.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(s=!0)),t=c,c=c.return;s&&e!==null&&t.tag===3&&(c=t.stateNode,s=31-ge(a),c=c.hiddenUpdates,t=c[s],t===null?c[s]=[e]:t.push(e),e.lane=a|536870912)}function Eo(t){if(50<vr)throw vr=0,Mu=null,Error(l(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ka={},zd=new WeakMap;function Ce(t,e){if(typeof t=="object"&&t!==null){var a=zd.get(t);return a!==void 0?a:(e={value:t,source:e,stack:F(e)},zd.set(t,e),e)}return{value:t,source:e,stack:F(e)}}var Qa=[],Fa=0,Oo=null,Do=0,ze=[],_e=0,fa=null,sn=1,un="";function da(t,e){Qa[Fa++]=Do,Qa[Fa++]=Oo,Oo=t,Do=e}function _d(t,e,a){ze[_e++]=sn,ze[_e++]=un,ze[_e++]=fa,fa=t;var r=sn;t=un;var s=32-ge(r)-1;r&=~(1<<s),a+=1;var c=32-ge(e)+s;if(30<c){var g=s-s%5;c=(r&(1<<g)-1).toString(32),r>>=g,s-=g,sn=1<<32-ge(e)+s|a<<s|r,un=c+t}else sn=1<<c|a<<s|r,un=t}function Ts(t){t.return!==null&&(da(t,1),_d(t,1,0))}function As(t){for(;t===Oo;)Oo=Qa[--Fa],Qa[Fa]=null,Do=Qa[--Fa],Qa[Fa]=null;for(;t===fa;)fa=ze[--_e],ze[_e]=null,un=ze[--_e],ze[_e]=null,sn=ze[--_e],ze[_e]=null}var ue=null,Wt=null,pt=!1,je=null,Je=!1,Es=Error(l(519));function ha(t){var e=Error(l(418,""));throw Fi(Ce(e,t)),Es}function kd(t){var e=t.stateNode,a=t.type,r=t.memoizedProps;switch(e[ne]=t,e[de]=r,a){case"dialog":dt("cancel",e),dt("close",e);break;case"iframe":case"object":case"embed":dt("load",e);break;case"video":case"audio":for(a=0;a<br.length;a++)dt(br[a],e);break;case"source":dt("error",e);break;case"img":case"image":case"link":dt("error",e),dt("load",e);break;case"details":dt("toggle",e);break;case"input":dt("invalid",e),Qf(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),ho(e);break;case"select":dt("invalid",e);break;case"textarea":dt("invalid",e),Jf(e,r.value,r.defaultValue,r.children),ho(e)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||r.suppressHydrationWarning===!0||jm(e.textContent,a)?(r.popover!=null&&(dt("beforetoggle",e),dt("toggle",e)),r.onScroll!=null&&dt("scroll",e),r.onScrollEnd!=null&&dt("scrollend",e),r.onClick!=null&&(e.onclick=il),e=!0):e=!1,e||ha(t)}function Vd(t){for(ue=t.return;ue;)switch(ue.tag){case 3:case 27:Je=!0;return;case 5:case 13:Je=!1;return;default:ue=ue.return}}function Ki(t){if(t!==ue)return!1;if(!pt)return Vd(t),pt=!0,!1;var e=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Xu(t.type,t.memoizedProps)),a=!a),a&&(e=!0),e&&Wt&&ha(t),Vd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(l(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){Wt=Xe(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}Wt=null}}else Wt=ue?Xe(t.stateNode.nextSibling):null;return!0}function Qi(){Wt=ue=null,pt=!1}function Fi(t){je===null?je=[t]:je.push(t)}var Ji=Error(l(460)),Ud=Error(l(474)),Os={then:function(){}};function Nd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Mo(){}function Bd(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Mo,Mo),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===Ji?Error(l(483)):t;default:if(typeof e.status=="string")e.then(Mo,Mo);else{if(t=Et,t!==null&&100<t.shellSuspendCounter)throw Error(l(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var s=e;s.status="fulfilled",s.value=r}},function(r){if(e.status==="pending"){var s=e;s.status="rejected",s.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===Ji?Error(l(483)):t}throw $i=e,Ji}}var $i=null;function Ld(){if($i===null)throw Error(l(459));var t=$i;return $i=null,t}var Ja=null,Wi=0;function Ro(t){var e=Wi;return Wi+=1,Ja===null&&(Ja=[]),Bd(Ja,t,e)}function Ii(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function wo(t,e){throw e.$$typeof===f?Error(l(525)):(t=Object.prototype.toString.call(e),Error(l(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function qd(t){var e=t._init;return e(t._payload)}function Pd(t){function e(w,D){if(t){var z=w.deletions;z===null?(w.deletions=[D],w.flags|=16):z.push(D)}}function a(w,D){if(!t)return null;for(;D!==null;)e(w,D),D=D.sibling;return null}function r(w){for(var D=new Map;w!==null;)w.key!==null?D.set(w.key,w):D.set(w.index,w),w=w.sibling;return D}function s(w,D){return w=Zn(w,D),w.index=0,w.sibling=null,w}function c(w,D,z){return w.index=z,t?(z=w.alternate,z!==null?(z=z.index,z<D?(w.flags|=33554434,D):z):(w.flags|=33554434,D)):(w.flags|=1048576,D)}function g(w){return t&&w.alternate===null&&(w.flags|=33554434),w}function y(w,D,z,L){return D===null||D.tag!==6?(D=bu(z,w.mode,L),D.return=w,D):(D=s(D,z),D.return=w,D)}function S(w,D,z,L){var Z=z.type;return Z===h?N(w,D,z.props.children,L,z.key):D!==null&&(D.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===B&&qd(Z)===D.type)?(D=s(D,z.props),Ii(D,z),D.return=w,D):(D=Ko(z.type,z.key,z.props,null,w.mode,L),Ii(D,z),D.return=w,D)}function M(w,D,z,L){return D===null||D.tag!==4||D.stateNode.containerInfo!==z.containerInfo||D.stateNode.implementation!==z.implementation?(D=xu(z,w.mode,L),D.return=w,D):(D=s(D,z.children||[]),D.return=w,D)}function N(w,D,z,L,Z){return D===null||D.tag!==7?(D=Aa(z,w.mode,L,Z),D.return=w,D):(D=s(D,z),D.return=w,D)}function P(w,D,z){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=bu(""+D,w.mode,z),D.return=w,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case d:return z=Ko(D.type,D.key,D.props,null,w.mode,z),Ii(z,D),z.return=w,z;case p:return D=xu(D,w.mode,z),D.return=w,D;case B:var L=D._init;return D=L(D._payload),P(w,D,z)}if(et(D)||W(D))return D=Aa(D,w.mode,z,null),D.return=w,D;if(typeof D.then=="function")return P(w,Ro(D),z);if(D.$$typeof===A)return P(w,Xo(w,D),z);wo(w,D)}return null}function k(w,D,z,L){var Z=D!==null?D.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return Z!==null?null:y(w,D,""+z,L);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case d:return z.key===Z?S(w,D,z,L):null;case p:return z.key===Z?M(w,D,z,L):null;case B:return Z=z._init,z=Z(z._payload),k(w,D,z,L)}if(et(z)||W(z))return Z!==null?null:N(w,D,z,L,null);if(typeof z.then=="function")return k(w,D,Ro(z),L);if(z.$$typeof===A)return k(w,D,Xo(w,z),L);wo(w,z)}return null}function U(w,D,z,L,Z){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return w=w.get(z)||null,y(D,w,""+L,Z);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case d:return w=w.get(L.key===null?z:L.key)||null,S(D,w,L,Z);case p:return w=w.get(L.key===null?z:L.key)||null,M(D,w,L,Z);case B:var ct=L._init;return L=ct(L._payload),U(w,D,z,L,Z)}if(et(L)||W(L))return w=w.get(z)||null,N(D,w,L,Z,null);if(typeof L.then=="function")return U(w,D,z,Ro(L),Z);if(L.$$typeof===A)return U(w,D,z,Xo(D,L),Z);wo(D,L)}return null}function Q(w,D,z,L){for(var Z=null,ct=null,I=D,nt=D=0,$t=null;I!==null&&nt<z.length;nt++){I.index>nt?($t=I,I=null):$t=I.sibling;var gt=k(w,I,z[nt],L);if(gt===null){I===null&&(I=$t);break}t&&I&&gt.alternate===null&&e(w,I),D=c(gt,D,nt),ct===null?Z=gt:ct.sibling=gt,ct=gt,I=$t}if(nt===z.length)return a(w,I),pt&&da(w,nt),Z;if(I===null){for(;nt<z.length;nt++)I=P(w,z[nt],L),I!==null&&(D=c(I,D,nt),ct===null?Z=I:ct.sibling=I,ct=I);return pt&&da(w,nt),Z}for(I=r(I);nt<z.length;nt++)$t=U(I,w,nt,z[nt],L),$t!==null&&(t&&$t.alternate!==null&&I.delete($t.key===null?nt:$t.key),D=c($t,D,nt),ct===null?Z=$t:ct.sibling=$t,ct=$t);return t&&I.forEach(function(In){return e(w,In)}),pt&&da(w,nt),Z}function rt(w,D,z,L){if(z==null)throw Error(l(151));for(var Z=null,ct=null,I=D,nt=D=0,$t=null,gt=z.next();I!==null&&!gt.done;nt++,gt=z.next()){I.index>nt?($t=I,I=null):$t=I.sibling;var In=k(w,I,gt.value,L);if(In===null){I===null&&(I=$t);break}t&&I&&In.alternate===null&&e(w,I),D=c(In,D,nt),ct===null?Z=In:ct.sibling=In,ct=In,I=$t}if(gt.done)return a(w,I),pt&&da(w,nt),Z;if(I===null){for(;!gt.done;nt++,gt=z.next())gt=P(w,gt.value,L),gt!==null&&(D=c(gt,D,nt),ct===null?Z=gt:ct.sibling=gt,ct=gt);return pt&&da(w,nt),Z}for(I=r(I);!gt.done;nt++,gt=z.next())gt=U(I,w,nt,gt.value,L),gt!==null&&(t&&gt.alternate!==null&&I.delete(gt.key===null?nt:gt.key),D=c(gt,D,nt),ct===null?Z=gt:ct.sibling=gt,ct=gt);return t&&I.forEach(function(g1){return e(w,g1)}),pt&&da(w,nt),Z}function Nt(w,D,z,L){if(typeof z=="object"&&z!==null&&z.type===h&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case d:t:{for(var Z=z.key;D!==null;){if(D.key===Z){if(Z=z.type,Z===h){if(D.tag===7){a(w,D.sibling),L=s(D,z.props.children),L.return=w,w=L;break t}}else if(D.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===B&&qd(Z)===D.type){a(w,D.sibling),L=s(D,z.props),Ii(L,z),L.return=w,w=L;break t}a(w,D);break}else e(w,D);D=D.sibling}z.type===h?(L=Aa(z.props.children,w.mode,L,z.key),L.return=w,w=L):(L=Ko(z.type,z.key,z.props,null,w.mode,L),Ii(L,z),L.return=w,w=L)}return g(w);case p:t:{for(Z=z.key;D!==null;){if(D.key===Z)if(D.tag===4&&D.stateNode.containerInfo===z.containerInfo&&D.stateNode.implementation===z.implementation){a(w,D.sibling),L=s(D,z.children||[]),L.return=w,w=L;break t}else{a(w,D);break}else e(w,D);D=D.sibling}L=xu(z,w.mode,L),L.return=w,w=L}return g(w);case B:return Z=z._init,z=Z(z._payload),Nt(w,D,z,L)}if(et(z))return Q(w,D,z,L);if(W(z)){if(Z=W(z),typeof Z!="function")throw Error(l(150));return z=Z.call(z),rt(w,D,z,L)}if(typeof z.then=="function")return Nt(w,D,Ro(z),L);if(z.$$typeof===A)return Nt(w,D,Xo(w,z),L);wo(w,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,D!==null&&D.tag===6?(a(w,D.sibling),L=s(D,z),L.return=w,w=L):(a(w,D),L=bu(z,w.mode,L),L.return=w,w=L),g(w)):a(w,D)}return function(w,D,z,L){try{Wi=0;var Z=Nt(w,D,z,L);return Ja=null,Z}catch(I){if(I===Ji)throw I;var ct=Ne(29,I,null,w.mode);return ct.lanes=L,ct.return=w,ct}finally{}}}var ma=Pd(!0),Hd=Pd(!1),$a=yt(null),Co=yt(0);function jd(t,e){t=xn,Mt(Co,t),Mt($a,e),xn=t|e.baseLanes}function Ds(){Mt(Co,xn),Mt($a,$a.current)}function Ms(){xn=Co.current,Ht($a),Ht(Co)}var ke=yt(null),$e=null;function Un(t){var e=t.alternate;Mt(Gt,Gt.current&1),Mt(ke,t),$e===null&&(e===null||$a.current!==null||e.memoizedState!==null)&&($e=t)}function Yd(t){if(t.tag===22){if(Mt(Gt,Gt.current),Mt(ke,t),$e===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&($e=t)}}else Nn()}function Nn(){Mt(Gt,Gt.current),Mt(ke,ke.current)}function cn(t){Ht(ke),$e===t&&($e=null),Ht(Gt)}var Gt=yt(0);function zo(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ab=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},ib=n.unstable_scheduleCallback,rb=n.unstable_NormalPriority,Zt={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Rs(){return{controller:new ab,data:new Map,refCount:0}}function tr(t){t.refCount--,t.refCount===0&&ib(rb,function(){t.controller.abort()})}var er=null,ws=0,Wa=0,Ia=null;function ob(t,e){if(er===null){var a=er=[];ws=0,Wa=Uu(),Ia={status:"pending",value:void 0,then:function(r){a.push(r)}}}return ws++,e.then(Xd,Xd),e}function Xd(){if(--ws===0&&er!==null){Ia!==null&&(Ia.status="fulfilled");var t=er;er=null,Wa=0,Ia=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function lb(t,e){var a=[],r={status:"pending",value:null,reason:null,then:function(s){a.push(s)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var s=0;s<a.length;s++)(0,a[s])(e)},function(s){for(r.status="rejected",r.reason=s,s=0;s<a.length;s++)(0,a[s])(void 0)}),r}var Gd=j.S;j.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&ob(t,e),Gd!==null&&Gd(t,e)};var pa=yt(null);function Cs(){var t=pa.current;return t!==null?t:Et.pooledCache}function _o(t,e){e===null?Mt(pa,pa.current):Mt(pa,e.pool)}function Zd(){var t=Cs();return t===null?null:{parent:Zt._currentValue,pool:t}}var Bn=0,ut=null,St=null,jt=null,ko=!1,ti=!1,ga=!1,Vo=0,nr=0,ei=null,sb=0;function qt(){throw Error(l(321))}function zs(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!ve(t[a],e[a]))return!1;return!0}function _s(t,e,a,r,s,c){return Bn=c,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,j.H=t===null||t.memoizedState===null?va:Ln,ga=!1,c=a(r,s),ga=!1,ti&&(c=Qd(e,a,r,s)),Kd(t),c}function Kd(t){j.H=We;var e=St!==null&&St.next!==null;if(Bn=0,jt=St=ut=null,ko=!1,nr=0,ei=null,e)throw Error(l(300));t===null||Ft||(t=t.dependencies,t!==null&&Yo(t)&&(Ft=!0))}function Qd(t,e,a,r){ut=t;var s=0;do{if(ti&&(ei=null),nr=0,ti=!1,25<=s)throw Error(l(301));if(s+=1,jt=St=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}j.H=ya,c=e(a,r)}while(ti);return c}function ub(){var t=j.H,e=t.useState()[0];return e=typeof e.then=="function"?ar(e):e,t=t.useState()[0],(St!==null?St.memoizedState:null)!==t&&(ut.flags|=1024),e}function ks(){var t=Vo!==0;return Vo=0,t}function Vs(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function Us(t){if(ko){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ko=!1}Bn=0,jt=St=ut=null,ti=!1,nr=Vo=0,ei=null}function me(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?ut.memoizedState=jt=t:jt=jt.next=t,jt}function Yt(){if(St===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=jt===null?ut.memoizedState:jt.next;if(e!==null)jt=e,St=t;else{if(t===null)throw ut.alternate===null?Error(l(467)):Error(l(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},jt===null?ut.memoizedState=jt=t:jt=jt.next=t}return jt}var Uo;Uo=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function ar(t){var e=nr;return nr+=1,ei===null&&(ei=[]),t=Bd(ei,t,e),e=ut,(jt===null?e.memoizedState:jt.next)===null&&(e=e.alternate,j.H=e===null||e.memoizedState===null?va:Ln),t}function No(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ar(t);if(t.$$typeof===A)return ae(t)}throw Error(l(438,String(t)))}function Ns(t){var e=null,a=ut.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var r=ut.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(s){return s.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=Uo(),ut.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),r=0;r<t;r++)a[r]=G;return e.index++,a}function fn(t,e){return typeof e=="function"?e(t):e}function Bo(t){var e=Yt();return Bs(e,St,t)}function Bs(t,e,a){var r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=a;var s=t.baseQueue,c=r.pending;if(c!==null){if(s!==null){var g=s.next;s.next=c.next,c.next=g}e.baseQueue=s=c,r.pending=null}if(c=t.baseState,s===null)t.memoizedState=c;else{e=s.next;var y=g=null,S=null,M=e,N=!1;do{var P=M.lane&-536870913;if(P!==M.lane?(mt&P)===P:(Bn&P)===P){var k=M.revertLane;if(k===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),P===Wa&&(N=!0);else if((Bn&k)===k){M=M.next,k===Wa&&(N=!0);continue}else P={lane:0,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},S===null?(y=S=P,g=c):S=S.next=P,ut.lanes|=k,Kn|=k;P=M.action,ga&&a(c,P),c=M.hasEagerState?M.eagerState:a(c,P)}else k={lane:P,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},S===null?(y=S=k,g=c):S=S.next=k,ut.lanes|=P,Kn|=P;M=M.next}while(M!==null&&M!==e);if(S===null?g=c:S.next=y,!ve(c,t.memoizedState)&&(Ft=!0,N&&(a=Ia,a!==null)))throw a;t.memoizedState=c,t.baseState=g,t.baseQueue=S,r.lastRenderedState=c}return s===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Ls(t){var e=Yt(),a=e.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=t;var r=a.dispatch,s=a.pending,c=e.memoizedState;if(s!==null){a.pending=null;var g=s=s.next;do c=t(c,g.action),g=g.next;while(g!==s);ve(c,e.memoizedState)||(Ft=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),a.lastRenderedState=c}return[c,r]}function Fd(t,e,a){var r=ut,s=Yt(),c=pt;if(c){if(a===void 0)throw Error(l(407));a=a()}else a=e();var g=!ve((St||s).memoizedState,a);if(g&&(s.memoizedState=a,Ft=!0),s=s.queue,Hs(Wd.bind(null,r,s,t),[t]),s.getSnapshot!==e||g||jt!==null&&jt.memoizedState.tag&1){if(r.flags|=2048,ni(9,$d.bind(null,r,s,a,e),{destroy:void 0},null),Et===null)throw Error(l(349));c||(Bn&60)!==0||Jd(r,e,a)}return a}function Jd(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=ut.updateQueue,e===null?(e=Uo(),ut.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function $d(t,e,a,r){e.value=a,e.getSnapshot=r,Id(e)&&th(t)}function Wd(t,e,a){return a(function(){Id(e)&&th(t)})}function Id(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!ve(t,a)}catch{return!0}}function th(t){var e=Vn(t,2);e!==null&&ce(e,t,2)}function qs(t){var e=me();if(typeof t=="function"){var a=t;if(t=a(),ga){zn(!0);try{a()}finally{zn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fn,lastRenderedState:t},e}function eh(t,e,a,r){return t.baseState=a,Bs(t,St,typeof r=="function"?r:fn)}function cb(t,e,a,r,s){if(Po(t))throw Error(l(485));if(t=e.action,t!==null){var c={payload:s,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};j.T!==null?a(!0):c.isTransition=!1,r(c),a=e.pending,a===null?(c.next=e.pending=c,nh(e,c)):(c.next=a.next,e.pending=a.next=c)}}function nh(t,e){var a=e.action,r=e.payload,s=t.state;if(e.isTransition){var c=j.T,g={};j.T=g;try{var y=a(s,r),S=j.S;S!==null&&S(g,y),ah(t,e,y)}catch(M){Ps(t,e,M)}finally{j.T=c}}else try{c=a(s,r),ah(t,e,c)}catch(M){Ps(t,e,M)}}function ah(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){ih(t,e,r)},function(r){return Ps(t,e,r)}):ih(t,e,a)}function ih(t,e,a){e.status="fulfilled",e.value=a,rh(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,nh(t,a)))}function Ps(t,e,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=a,rh(e),e=e.next;while(e!==r)}t.action=null}function rh(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function oh(t,e){return e}function lh(t,e){if(pt){var a=Et.formState;if(a!==null){t:{var r=ut;if(pt){if(Wt){e:{for(var s=Wt,c=Je;s.nodeType!==8;){if(!c){s=null;break e}if(s=Xe(s.nextSibling),s===null){s=null;break e}}c=s.data,s=c==="F!"||c==="F"?s:null}if(s){Wt=Xe(s.nextSibling),r=s.data==="F!";break t}}ha(r)}r=!1}r&&(e=a[0])}}return a=me(),a.memoizedState=a.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oh,lastRenderedState:e},a.queue=r,a=Oh.bind(null,ut,r),r.dispatch=a,r=qs(!1),c=Zs.bind(null,ut,!1,r.queue),r=me(),s={state:e,dispatch:null,action:t,pending:null},r.queue=s,a=cb.bind(null,ut,s,c,a),s.dispatch=a,r.memoizedState=t,[e,a,!1]}function sh(t){var e=Yt();return uh(e,St,t)}function uh(t,e,a){e=Bs(t,e,oh)[0],t=Bo(fn)[0],e=typeof e=="object"&&e!==null&&typeof e.then=="function"?ar(e):e;var r=Yt(),s=r.queue,c=s.dispatch;return a!==r.memoizedState&&(ut.flags|=2048,ni(9,fb.bind(null,s,a),{destroy:void 0},null)),[e,c,t]}function fb(t,e){t.action=e}function ch(t){var e=Yt(),a=St;if(a!==null)return uh(e,a,t);Yt(),e=e.memoizedState,a=Yt();var r=a.queue.dispatch;return a.memoizedState=t,[e,r,!1]}function ni(t,e,a,r){return t={tag:t,create:e,inst:a,deps:r,next:null},e=ut.updateQueue,e===null&&(e=Uo(),ut.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,e.lastEffect=t),t}function fh(){return Yt().memoizedState}function Lo(t,e,a,r){var s=me();ut.flags|=t,s.memoizedState=ni(1|e,a,{destroy:void 0},r===void 0?null:r)}function qo(t,e,a,r){var s=Yt();r=r===void 0?null:r;var c=s.memoizedState.inst;St!==null&&r!==null&&zs(r,St.memoizedState.deps)?s.memoizedState=ni(e,a,c,r):(ut.flags|=t,s.memoizedState=ni(1|e,a,c,r))}function dh(t,e){Lo(8390656,8,t,e)}function Hs(t,e){qo(2048,8,t,e)}function hh(t,e){return qo(4,2,t,e)}function mh(t,e){return qo(4,4,t,e)}function ph(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gh(t,e,a){a=a!=null?a.concat([t]):null,qo(4,4,ph.bind(null,e,t),a)}function js(){}function vh(t,e){var a=Yt();e=e===void 0?null:e;var r=a.memoizedState;return e!==null&&zs(e,r[1])?r[0]:(a.memoizedState=[t,e],t)}function yh(t,e){var a=Yt();e=e===void 0?null:e;var r=a.memoizedState;if(e!==null&&zs(e,r[1]))return r[0];if(r=t(),ga){zn(!0);try{t()}finally{zn(!1)}}return a.memoizedState=[r,e],r}function Ys(t,e,a){return a===void 0||(Bn&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=xm(),ut.lanes|=t,Kn|=t,a)}function bh(t,e,a,r){return ve(a,e)?a:$a.current!==null?(t=Ys(t,a,r),ve(t,e)||(Ft=!0),t):(Bn&42)===0?(Ft=!0,t.memoizedState=a):(t=xm(),ut.lanes|=t,Kn|=t,e)}function xh(t,e,a,r,s){var c=X.p;X.p=c!==0&&8>c?c:8;var g=j.T,y={};j.T=y,Zs(t,!1,e,a);try{var S=s(),M=j.S;if(M!==null&&M(y,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var N=lb(S,r);ir(t,e,N,Se(t))}else ir(t,e,r,Se(t))}catch(P){ir(t,e,{then:function(){},status:"rejected",reason:P},Se())}finally{X.p=c,j.T=g}}function db(){}function Xs(t,e,a,r){if(t.tag!==5)throw Error(l(476));var s=Sh(t).queue;xh(t,s,e,ht,a===null?db:function(){return Th(t),a(r)})}function Sh(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:ht,baseState:ht,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fn,lastRenderedState:ht},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fn,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Th(t){var e=Sh(t).next.queue;ir(t,e,{},Se())}function Gs(){return ae(Er)}function Ah(){return Yt().memoizedState}function Eh(){return Yt().memoizedState}function hb(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Se();t=Hn(a);var r=jn(e,t,a);r!==null&&(ce(r,e,a),lr(r,e,a)),e={cache:Rs()},t.payload=e;return}e=e.return}}function mb(t,e,a){var r=Se();a={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Po(t)?Dh(e,a):(a=Ss(t,e,a,r),a!==null&&(ce(a,t,r),Mh(a,e,r)))}function Oh(t,e,a){var r=Se();ir(t,e,a,r)}function ir(t,e,a,r){var s={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Po(t))Dh(e,s);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var g=e.lastRenderedState,y=c(g,a);if(s.hasEagerState=!0,s.eagerState=y,ve(y,g))return Ao(t,e,s,0),Et===null&&To(),!1}catch{}finally{}if(a=Ss(t,e,s,r),a!==null)return ce(a,t,r),Mh(a,e,r),!0}return!1}function Zs(t,e,a,r){if(r={lane:2,revertLane:Uu(),action:r,hasEagerState:!1,eagerState:null,next:null},Po(t)){if(e)throw Error(l(479))}else e=Ss(t,a,r,2),e!==null&&ce(e,t,2)}function Po(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function Dh(t,e){ti=ko=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Mh(t,e,a){if((a&4194176)!==0){var r=e.lanes;r&=t.pendingLanes,a|=r,e.lanes=a,Lf(t,a)}}var We={readContext:ae,use:No,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useLayoutEffect:qt,useInsertionEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useSyncExternalStore:qt,useId:qt};We.useCacheRefresh=qt,We.useMemoCache=qt,We.useHostTransitionStatus=qt,We.useFormState=qt,We.useActionState=qt,We.useOptimistic=qt;var va={readContext:ae,use:No,useCallback:function(t,e){return me().memoizedState=[t,e===void 0?null:e],t},useContext:ae,useEffect:dh,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Lo(4194308,4,ph.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Lo(4194308,4,t,e)},useInsertionEffect:function(t,e){Lo(4,2,t,e)},useMemo:function(t,e){var a=me();e=e===void 0?null:e;var r=t();if(ga){zn(!0);try{t()}finally{zn(!1)}}return a.memoizedState=[r,e],r},useReducer:function(t,e,a){var r=me();if(a!==void 0){var s=a(e);if(ga){zn(!0);try{a(e)}finally{zn(!1)}}}else s=e;return r.memoizedState=r.baseState=s,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:s},r.queue=t,t=t.dispatch=mb.bind(null,ut,t),[r.memoizedState,t]},useRef:function(t){var e=me();return t={current:t},e.memoizedState=t},useState:function(t){t=qs(t);var e=t.queue,a=Oh.bind(null,ut,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:js,useDeferredValue:function(t,e){var a=me();return Ys(a,t,e)},useTransition:function(){var t=qs(!1);return t=xh.bind(null,ut,t.queue,!0,!1),me().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var r=ut,s=me();if(pt){if(a===void 0)throw Error(l(407));a=a()}else{if(a=e(),Et===null)throw Error(l(349));(mt&60)!==0||Jd(r,e,a)}s.memoizedState=a;var c={value:a,getSnapshot:e};return s.queue=c,dh(Wd.bind(null,r,c,t),[t]),r.flags|=2048,ni(9,$d.bind(null,r,c,a,e),{destroy:void 0},null),a},useId:function(){var t=me(),e=Et.identifierPrefix;if(pt){var a=un,r=sn;a=(r&~(1<<32-ge(r)-1)).toString(32)+a,e=":"+e+"R"+a,a=Vo++,0<a&&(e+="H"+a.toString(32)),e+=":"}else a=sb++,e=":"+e+"r"+a.toString(32)+":";return t.memoizedState=e},useCacheRefresh:function(){return me().memoizedState=hb.bind(null,ut)}};va.useMemoCache=Ns,va.useHostTransitionStatus=Gs,va.useFormState=lh,va.useActionState=lh,va.useOptimistic=function(t){var e=me();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Zs.bind(null,ut,!0,a),a.dispatch=e,[t,e]};var Ln={readContext:ae,use:No,useCallback:vh,useContext:ae,useEffect:Hs,useImperativeHandle:gh,useInsertionEffect:hh,useLayoutEffect:mh,useMemo:yh,useReducer:Bo,useRef:fh,useState:function(){return Bo(fn)},useDebugValue:js,useDeferredValue:function(t,e){var a=Yt();return bh(a,St.memoizedState,t,e)},useTransition:function(){var t=Bo(fn)[0],e=Yt().memoizedState;return[typeof t=="boolean"?t:ar(t),e]},useSyncExternalStore:Fd,useId:Ah};Ln.useCacheRefresh=Eh,Ln.useMemoCache=Ns,Ln.useHostTransitionStatus=Gs,Ln.useFormState=sh,Ln.useActionState=sh,Ln.useOptimistic=function(t,e){var a=Yt();return eh(a,St,t,e)};var ya={readContext:ae,use:No,useCallback:vh,useContext:ae,useEffect:Hs,useImperativeHandle:gh,useInsertionEffect:hh,useLayoutEffect:mh,useMemo:yh,useReducer:Ls,useRef:fh,useState:function(){return Ls(fn)},useDebugValue:js,useDeferredValue:function(t,e){var a=Yt();return St===null?Ys(a,t,e):bh(a,St.memoizedState,t,e)},useTransition:function(){var t=Ls(fn)[0],e=Yt().memoizedState;return[typeof t=="boolean"?t:ar(t),e]},useSyncExternalStore:Fd,useId:Ah};ya.useCacheRefresh=Eh,ya.useMemoCache=Ns,ya.useHostTransitionStatus=Gs,ya.useFormState=ch,ya.useActionState=ch,ya.useOptimistic=function(t,e){var a=Yt();return St!==null?eh(a,St,t,e):(a.baseState=t,[t,a.queue.dispatch])};function Ks(t,e,a,r){e=t.memoizedState,a=a(r,e),a=a==null?e:tt({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Qs={isMounted:function(t){return(t=t._reactInternals)?J(t)===t:!1},enqueueSetState:function(t,e,a){t=t._reactInternals;var r=Se(),s=Hn(r);s.payload=e,a!=null&&(s.callback=a),e=jn(t,s,r),e!==null&&(ce(e,t,r),lr(e,t,r))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var r=Se(),s=Hn(r);s.tag=1,s.payload=e,a!=null&&(s.callback=a),e=jn(t,s,r),e!==null&&(ce(e,t,r),lr(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Se(),r=Hn(a);r.tag=2,e!=null&&(r.callback=e),e=jn(t,r,a),e!==null&&(ce(e,t,a),lr(e,t,a))}};function Rh(t,e,a,r,s,c,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,g):e.prototype&&e.prototype.isPureReactComponent?!Gi(a,r)||!Gi(s,c):!0}function wh(t,e,a,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,r),e.state!==t&&Qs.enqueueReplaceState(e,e.state,null)}function ba(t,e){var a=e;if("ref"in e){a={};for(var r in e)r!=="ref"&&(a[r]=e[r])}if(t=t.defaultProps){a===e&&(a=tt({},a));for(var s in t)a[s]===void 0&&(a[s]=t[s])}return a}var Ho=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Ch(t){Ho(t)}function zh(t){console.error(t)}function _h(t){Ho(t)}function jo(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function kh(t,e,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Fs(t,e,a){return a=Hn(a),a.tag=3,a.payload={element:null},a.callback=function(){jo(t,e)},a}function Vh(t){return t=Hn(t),t.tag=3,t}function Uh(t,e,a,r){var s=a.type.getDerivedStateFromError;if(typeof s=="function"){var c=r.value;t.payload=function(){return s(c)},t.callback=function(){kh(e,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){kh(e,a,r),typeof s!="function"&&(Qn===null?Qn=new Set([this]):Qn.add(this));var y=r.stack;this.componentDidCatch(r.value,{componentStack:y!==null?y:""})})}function pb(t,e,a,r,s){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=a.alternate,e!==null&&or(e,a,s,!0),a=ke.current,a!==null){switch(a.tag){case 13:return $e===null?Cu():a.alternate===null&&Ut===0&&(Ut=3),a.flags&=-257,a.flags|=65536,a.lanes=s,r===Os?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([r]):e.add(r),_u(t,r,s)),!1;case 22:return a.flags|=65536,r===Os?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([r]):a.add(r)),_u(t,r,s)),!1}throw Error(l(435,a.tag))}return _u(t,r,s),Cu(),!1}if(pt)return e=ke.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=s,r!==Es&&(t=Error(l(422),{cause:r}),Fi(Ce(t,a)))):(r!==Es&&(e=Error(l(423),{cause:r}),Fi(Ce(e,a))),t=t.current.alternate,t.flags|=65536,s&=-s,t.lanes|=s,r=Ce(r,a),s=Fs(t.stateNode,r,s),cu(t,s),Ut!==4&&(Ut=2)),!1;var c=Error(l(520),{cause:r});if(c=Ce(c,a),pr===null?pr=[c]:pr.push(c),Ut!==4&&(Ut=2),e===null)return!0;r=Ce(r,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=s&-s,a.lanes|=t,t=Fs(a.stateNode,r,t),cu(a,t),!1;case 1:if(e=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Qn===null||!Qn.has(c))))return a.flags|=65536,s&=-s,a.lanes|=s,s=Vh(s),Uh(s,t,a,r),cu(a,s),!1}a=a.return}while(a!==null);return!1}var Nh=Error(l(461)),Ft=!1;function It(t,e,a,r){e.child=t===null?Hd(e,null,a,r):ma(e,t.child,a,r)}function Bh(t,e,a,r,s){a=a.render;var c=e.ref;if("ref"in r){var g={};for(var y in r)y!=="ref"&&(g[y]=r[y])}else g=r;return Sa(e),r=_s(t,e,a,g,c,s),y=ks(),t!==null&&!Ft?(Vs(t,e,s),dn(t,e,s)):(pt&&y&&Ts(e),e.flags|=1,It(t,e,r,s),e.child)}function Lh(t,e,a,r,s){if(t===null){var c=a.type;return typeof c=="function"&&!yu(c)&&c.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=c,qh(t,e,c,r,s)):(t=Ko(a.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(c=t.child,!iu(t,s)){var g=c.memoizedProps;if(a=a.compare,a=a!==null?a:Gi,a(g,r)&&t.ref===e.ref)return dn(t,e,s)}return e.flags|=1,t=Zn(c,r),t.ref=e.ref,t.return=e,e.child=t}function qh(t,e,a,r,s){if(t!==null){var c=t.memoizedProps;if(Gi(c,r)&&t.ref===e.ref)if(Ft=!1,e.pendingProps=r=c,iu(t,s))(t.flags&131072)!==0&&(Ft=!0);else return e.lanes=t.lanes,dn(t,e,s)}return Js(t,e,a,r,s)}function Ph(t,e,a){var r=e.pendingProps,s=r.children,c=(e.stateNode._pendingVisibility&2)!==0,g=t!==null?t.memoizedState:null;if(rr(t,e),r.mode==="hidden"||c){if((e.flags&128)!==0){if(r=g!==null?g.baseLanes|a:a,t!==null){for(s=e.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;e.childLanes=c&~r}else e.childLanes=0,e.child=null;return Hh(t,e,r,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&_o(e,g!==null?g.cachePool:null),g!==null?jd(e,g):Ds(),Yd(e);else return e.lanes=e.childLanes=536870912,Hh(t,e,g!==null?g.baseLanes|a:a,a)}else g!==null?(_o(e,g.cachePool),jd(e,g),Nn(),e.memoizedState=null):(t!==null&&_o(e,null),Ds(),Nn());return It(t,e,s,a),e.child}function Hh(t,e,a,r){var s=Cs();return s=s===null?null:{parent:Zt._currentValue,pool:s},e.memoizedState={baseLanes:a,cachePool:s},t!==null&&_o(e,null),Ds(),Yd(e),t!==null&&or(t,e,r,!0),null}function rr(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(l(284));(t===null||t.ref!==a)&&(e.flags|=2097664)}}function Js(t,e,a,r,s){return Sa(e),a=_s(t,e,a,r,void 0,s),r=ks(),t!==null&&!Ft?(Vs(t,e,s),dn(t,e,s)):(pt&&r&&Ts(e),e.flags|=1,It(t,e,a,s),e.child)}function jh(t,e,a,r,s,c){return Sa(e),e.updateQueue=null,a=Qd(e,r,a,s),Kd(t),r=ks(),t!==null&&!Ft?(Vs(t,e,c),dn(t,e,c)):(pt&&r&&Ts(e),e.flags|=1,It(t,e,a,c),e.child)}function Yh(t,e,a,r,s){if(Sa(e),e.stateNode===null){var c=Ka,g=a.contextType;typeof g=="object"&&g!==null&&(c=ae(g)),c=new a(r,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Qs,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=r,c.state=e.memoizedState,c.refs={},su(e),g=a.contextType,c.context=typeof g=="object"&&g!==null?ae(g):Ka,c.state=e.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Ks(e,a,g,r),c.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&Qs.enqueueReplaceState(c,c.state,null),ur(e,r,c,s),sr(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){c=e.stateNode;var y=e.memoizedProps,S=ba(a,y);c.props=S;var M=c.context,N=a.contextType;g=Ka,typeof N=="object"&&N!==null&&(g=ae(N));var P=a.getDerivedStateFromProps;N=typeof P=="function"||typeof c.getSnapshotBeforeUpdate=="function",y=e.pendingProps!==y,N||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(y||M!==g)&&wh(e,c,r,g),Pn=!1;var k=e.memoizedState;c.state=k,ur(e,r,c,s),sr(),M=e.memoizedState,y||k!==M||Pn?(typeof P=="function"&&(Ks(e,a,P,r),M=e.memoizedState),(S=Pn||Rh(e,a,S,r,k,M,g))?(N||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=M),c.props=r,c.state=M,c.context=g,r=S):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{c=e.stateNode,uu(t,e),g=e.memoizedProps,N=ba(a,g),c.props=N,P=e.pendingProps,k=c.context,M=a.contextType,S=Ka,typeof M=="object"&&M!==null&&(S=ae(M)),y=a.getDerivedStateFromProps,(M=typeof y=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==P||k!==S)&&wh(e,c,r,S),Pn=!1,k=e.memoizedState,c.state=k,ur(e,r,c,s),sr();var U=e.memoizedState;g!==P||k!==U||Pn||t!==null&&t.dependencies!==null&&Yo(t.dependencies)?(typeof y=="function"&&(Ks(e,a,y,r),U=e.memoizedState),(N=Pn||Rh(e,a,N,r,k,U,S)||t!==null&&t.dependencies!==null&&Yo(t.dependencies))?(M||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,U,S),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,U,S)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&k===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&k===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=U),c.props=r,c.state=U,c.context=S,r=N):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&k===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&k===t.memoizedState||(e.flags|=1024),r=!1)}return c=r,rr(t,e),r=(e.flags&128)!==0,c||r?(c=e.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,t!==null&&r?(e.child=ma(e,t.child,null,s),e.child=ma(e,null,a,s)):It(t,e,a,s),e.memoizedState=c.state,t=e.child):t=dn(t,e,s),t}function Xh(t,e,a,r){return Qi(),e.flags|=256,It(t,e,a,r),e.child}var $s={dehydrated:null,treeContext:null,retryLane:0};function Ws(t){return{baseLanes:t,cachePool:Zd()}}function Is(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Be),t}function Gh(t,e,a){var r=e.pendingProps,s=!1,c=(e.flags&128)!==0,g;if((g=c)||(g=t!==null&&t.memoizedState===null?!1:(Gt.current&2)!==0),g&&(s=!0,e.flags&=-129),g=(e.flags&32)!==0,e.flags&=-33,t===null){if(pt){if(s?Un(e):Nn(),pt){var y=Wt,S;if(S=y){t:{for(S=y,y=Je;S.nodeType!==8;){if(!y){y=null;break t}if(S=Xe(S.nextSibling),S===null){y=null;break t}}y=S}y!==null?(e.memoizedState={dehydrated:y,treeContext:fa!==null?{id:sn,overflow:un}:null,retryLane:536870912},S=Ne(18,null,null,0),S.stateNode=y,S.return=e,e.child=S,ue=e,Wt=null,S=!0):S=!1}S||ha(e)}if(y=e.memoizedState,y!==null&&(y=y.dehydrated,y!==null))return y.data==="$!"?e.lanes=16:e.lanes=536870912,null;cn(e)}return y=r.children,r=r.fallback,s?(Nn(),s=e.mode,y=eu({mode:"hidden",children:y},s),r=Aa(r,s,a,null),y.return=e,r.return=e,y.sibling=r,e.child=y,s=e.child,s.memoizedState=Ws(a),s.childLanes=Is(t,g,a),e.memoizedState=$s,r):(Un(e),tu(e,y))}if(S=t.memoizedState,S!==null&&(y=S.dehydrated,y!==null)){if(c)e.flags&256?(Un(e),e.flags&=-257,e=nu(t,e,a)):e.memoizedState!==null?(Nn(),e.child=t.child,e.flags|=128,e=null):(Nn(),s=r.fallback,y=e.mode,r=eu({mode:"visible",children:r.children},y),s=Aa(s,y,a,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,ma(e,t.child,null,a),r=e.child,r.memoizedState=Ws(a),r.childLanes=Is(t,g,a),e.memoizedState=$s,e=s);else if(Un(e),y.data==="$!"){if(g=y.nextSibling&&y.nextSibling.dataset,g)var M=g.dgst;g=M,r=Error(l(419)),r.stack="",r.digest=g,Fi({value:r,source:null,stack:null}),e=nu(t,e,a)}else if(Ft||or(t,e,a,!1),g=(a&t.childLanes)!==0,Ft||g){if(g=Et,g!==null){if(r=a&-a,(r&42)!==0)r=1;else switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=64;break;case 268435456:r=134217728;break;default:r=0}if(r=(r&(g.suspendedLanes|a))!==0?0:r,r!==0&&r!==S.retryLane)throw S.retryLane=r,Vn(t,r),ce(g,t,r),Nh}y.data==="$?"||Cu(),e=nu(t,e,a)}else y.data==="$?"?(e.flags|=128,e.child=t.child,e=Cb.bind(null,t),y._reactRetry=e,e=null):(t=S.treeContext,Wt=Xe(y.nextSibling),ue=e,pt=!0,je=null,Je=!1,t!==null&&(ze[_e++]=sn,ze[_e++]=un,ze[_e++]=fa,sn=t.id,un=t.overflow,fa=e),e=tu(e,r.children),e.flags|=4096);return e}return s?(Nn(),s=r.fallback,y=e.mode,S=t.child,M=S.sibling,r=Zn(S,{mode:"hidden",children:r.children}),r.subtreeFlags=S.subtreeFlags&31457280,M!==null?s=Zn(M,s):(s=Aa(s,y,a,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,y=t.child.memoizedState,y===null?y=Ws(a):(S=y.cachePool,S!==null?(M=Zt._currentValue,S=S.parent!==M?{parent:M,pool:M}:S):S=Zd(),y={baseLanes:y.baseLanes|a,cachePool:S}),s.memoizedState=y,s.childLanes=Is(t,g,a),e.memoizedState=$s,r):(Un(e),a=t.child,t=a.sibling,a=Zn(a,{mode:"visible",children:r.children}),a.return=e,a.sibling=null,t!==null&&(g=e.deletions,g===null?(e.deletions=[t],e.flags|=16):g.push(t)),e.child=a,e.memoizedState=null,a)}function tu(t,e){return e=eu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function eu(t,e){return vm(t,e,0,null)}function nu(t,e,a){return ma(e,t.child,null,a),t=tu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Zh(t,e,a){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ou(t.return,e,a)}function au(t,e,a,r,s){var c=t.memoizedState;c===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:s}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=r,c.tail=a,c.tailMode=s)}function Kh(t,e,a){var r=e.pendingProps,s=r.revealOrder,c=r.tail;if(It(t,e,r.children,a),r=Gt.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zh(t,a,e);else if(t.tag===19)Zh(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}switch(Mt(Gt,r),s){case"forwards":for(a=e.child,s=null;a!==null;)t=a.alternate,t!==null&&zo(t)===null&&(s=a),a=a.sibling;a=s,a===null?(s=e.child,e.child=null):(s=a.sibling,a.sibling=null),au(e,!1,s,a,c);break;case"backwards":for(a=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&zo(t)===null){e.child=s;break}t=s.sibling,s.sibling=a,a=s,s=t}au(e,!0,a,null,c);break;case"together":au(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function dn(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Kn|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(or(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(l(153));if(e.child!==null){for(t=e.child,a=Zn(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Zn(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function iu(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Yo(t)))}function gb(t,e,a){switch(e.tag){case 3:io(e,e.stateNode.containerInfo),qn(e,Zt,t.memoizedState.cache),Qi();break;case 27:case 5:Ql(e);break;case 4:io(e,e.stateNode.containerInfo);break;case 10:qn(e,e.type,e.memoizedProps.value);break;case 13:var r=e.memoizedState;if(r!==null)return r.dehydrated!==null?(Un(e),e.flags|=128,null):(a&e.child.childLanes)!==0?Gh(t,e,a):(Un(e),t=dn(t,e,a),t!==null?t.sibling:null);Un(e);break;case 19:var s=(t.flags&128)!==0;if(r=(a&e.childLanes)!==0,r||(or(t,e,a,!1),r=(a&e.childLanes)!==0),s){if(r)return Kh(t,e,a);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Mt(Gt,Gt.current),r)break;return null;case 22:case 23:return e.lanes=0,Ph(t,e,a);case 24:qn(e,Zt,t.memoizedState.cache)}return dn(t,e,a)}function Qh(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Ft=!0;else{if(!iu(t,a)&&(e.flags&128)===0)return Ft=!1,gb(t,e,a);Ft=(t.flags&131072)!==0}else Ft=!1,pt&&(e.flags&1048576)!==0&&_d(e,Do,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var r=e.elementType,s=r._init;if(r=s(r._payload),e.type=r,typeof r=="function")yu(r)?(t=ba(r,t),e.tag=1,e=Yh(null,e,r,t,a)):(e.tag=0,e=Js(null,e,r,t,a));else{if(r!=null){if(s=r.$$typeof,s===T){e.tag=11,e=Bh(null,e,r,t,a);break t}else if(s===R){e.tag=14,e=Lh(null,e,r,t,a);break t}}throw e=K(r)||r,Error(l(306,e,""))}}return e;case 0:return Js(t,e,e.type,e.pendingProps,a);case 1:return r=e.type,s=ba(r,e.pendingProps),Yh(t,e,r,s,a);case 3:t:{if(io(e,e.stateNode.containerInfo),t===null)throw Error(l(387));var c=e.pendingProps;s=e.memoizedState,r=s.element,uu(t,e),ur(e,c,null,a);var g=e.memoizedState;if(c=g.cache,qn(e,Zt,c),c!==s.cache&&lu(e,[Zt],a,!0),sr(),c=g.element,s.isDehydrated)if(s={element:c,isDehydrated:!1,cache:g.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=Xh(t,e,c,a);break t}else if(c!==r){r=Ce(Error(l(424)),e),Fi(r),e=Xh(t,e,c,a);break t}else for(Wt=Xe(e.stateNode.containerInfo.firstChild),ue=e,pt=!0,je=null,Je=!0,a=Hd(e,null,c,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Qi(),c===r){e=dn(t,e,a);break t}It(t,e,c,a)}e=e.child}return e;case 26:return rr(t,e),t===null?(a=$m(e.type,null,e.pendingProps,null))?e.memoizedState=a:pt||(a=e.type,t=e.pendingProps,r=rl(Cn.current).createElement(a),r[ne]=e,r[de]=t,te(r,a,t),Qt(r),e.stateNode=r):e.memoizedState=$m(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Ql(e),t===null&&pt&&(r=e.stateNode=Qm(e.type,e.pendingProps,Cn.current),ue=e,Je=!0,Wt=Xe(r.firstChild)),r=e.pendingProps.children,t!==null||pt?It(t,e,r,a):e.child=ma(e,null,r,a),rr(t,e),e.child;case 5:return t===null&&pt&&((s=r=Wt)&&(r=Zb(r,e.type,e.pendingProps,Je),r!==null?(e.stateNode=r,ue=e,Wt=Xe(r.firstChild),Je=!1,s=!0):s=!1),s||ha(e)),Ql(e),s=e.type,c=e.pendingProps,g=t!==null?t.memoizedProps:null,r=c.children,Xu(s,c)?r=null:g!==null&&Xu(s,g)&&(e.flags|=32),e.memoizedState!==null&&(s=_s(t,e,ub,null,null,a),Er._currentValue=s),rr(t,e),It(t,e,r,a),e.child;case 6:return t===null&&pt&&((t=a=Wt)&&(a=Kb(a,e.pendingProps,Je),a!==null?(e.stateNode=a,ue=e,Wt=null,t=!0):t=!1),t||ha(e)),null;case 13:return Gh(t,e,a);case 4:return io(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ma(e,null,r,a):It(t,e,r,a),e.child;case 11:return Bh(t,e,e.type,e.pendingProps,a);case 7:return It(t,e,e.pendingProps,a),e.child;case 8:return It(t,e,e.pendingProps.children,a),e.child;case 12:return It(t,e,e.pendingProps.children,a),e.child;case 10:return r=e.pendingProps,qn(e,e.type,r.value),It(t,e,r.children,a),e.child;case 9:return s=e.type._context,r=e.pendingProps.children,Sa(e),s=ae(s),r=r(s),e.flags|=1,It(t,e,r,a),e.child;case 14:return Lh(t,e,e.type,e.pendingProps,a);case 15:return qh(t,e,e.type,e.pendingProps,a);case 19:return Kh(t,e,a);case 22:return Ph(t,e,a);case 24:return Sa(e),r=ae(Zt),t===null?(s=Cs(),s===null&&(s=Et,c=Rs(),s.pooledCache=c,c.refCount++,c!==null&&(s.pooledCacheLanes|=a),s=c),e.memoizedState={parent:r,cache:s},su(e),qn(e,Zt,s)):((t.lanes&a)!==0&&(uu(t,e),ur(e,null,null,a),sr()),s=t.memoizedState,c=e.memoizedState,s.parent!==r?(s={parent:r,cache:r},e.memoizedState=s,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=s),qn(e,Zt,r)):(r=c.cache,qn(e,Zt,r),r!==s.cache&&lu(e,[Zt],a,!0))),It(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(l(156,e.tag))}var ru=yt(null),xa=null,hn=null;function qn(t,e,a){Mt(ru,e._currentValue),e._currentValue=a}function mn(t){t._currentValue=ru.current,Ht(ru)}function ou(t,e,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===a)break;t=t.return}}function lu(t,e,a,r){var s=t.child;for(s!==null&&(s.return=t);s!==null;){var c=s.dependencies;if(c!==null){var g=s.child;c=c.firstContext;t:for(;c!==null;){var y=c;c=s;for(var S=0;S<e.length;S++)if(y.context===e[S]){c.lanes|=a,y=c.alternate,y!==null&&(y.lanes|=a),ou(c.return,a,t),r||(g=null);break t}c=y.next}}else if(s.tag===18){if(g=s.return,g===null)throw Error(l(341));g.lanes|=a,c=g.alternate,c!==null&&(c.lanes|=a),ou(g,a,t),g=null}else g=s.child;if(g!==null)g.return=s;else for(g=s;g!==null;){if(g===t){g=null;break}if(s=g.sibling,s!==null){s.return=g.return,g=s;break}g=g.return}s=g}}function or(t,e,a,r){t=null;for(var s=e,c=!1;s!==null;){if(!c){if((s.flags&524288)!==0)c=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var g=s.alternate;if(g===null)throw Error(l(387));if(g=g.memoizedProps,g!==null){var y=s.type;ve(s.pendingProps.value,g.value)||(t!==null?t.push(y):t=[y])}}else if(s===ao.current){if(g=s.alternate,g===null)throw Error(l(387));g.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(t!==null?t.push(Er):t=[Er])}s=s.return}t!==null&&lu(e,t,a,r),e.flags|=262144}function Yo(t){for(t=t.firstContext;t!==null;){if(!ve(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Sa(t){xa=t,hn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ae(t){return Fh(xa,t)}function Xo(t,e){return xa===null&&Sa(t),Fh(t,e)}function Fh(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},hn===null){if(t===null)throw Error(l(308));hn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else hn=hn.next=e;return a}var Pn=!1;function su(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Hn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function jn(t,e,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ct&2)!==0){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,e=Eo(t),Cd(t,null,a),e}return Ao(t,r,e,a),Eo(t)}function lr(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194176)!==0)){var r=e.lanes;r&=t.pendingLanes,a|=r,e.lanes=a,Lf(t,a)}}function cu(t,e){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var s=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?s=c=g:c=c.next=g,a=a.next}while(a!==null);c===null?s=c=e:c=c.next=e}else s=c=e;a={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var fu=!1;function sr(){if(fu){var t=Ia;if(t!==null)throw t}}function ur(t,e,a,r){fu=!1;var s=t.updateQueue;Pn=!1;var c=s.firstBaseUpdate,g=s.lastBaseUpdate,y=s.shared.pending;if(y!==null){s.shared.pending=null;var S=y,M=S.next;S.next=null,g===null?c=M:g.next=M,g=S;var N=t.alternate;N!==null&&(N=N.updateQueue,y=N.lastBaseUpdate,y!==g&&(y===null?N.firstBaseUpdate=M:y.next=M,N.lastBaseUpdate=S))}if(c!==null){var P=s.baseState;g=0,N=M=S=null,y=c;do{var k=y.lane&-536870913,U=k!==y.lane;if(U?(mt&k)===k:(r&k)===k){k!==0&&k===Wa&&(fu=!0),N!==null&&(N=N.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});t:{var Q=t,rt=y;k=e;var Nt=a;switch(rt.tag){case 1:if(Q=rt.payload,typeof Q=="function"){P=Q.call(Nt,P,k);break t}P=Q;break t;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=rt.payload,k=typeof Q=="function"?Q.call(Nt,P,k):Q,k==null)break t;P=tt({},P,k);break t;case 2:Pn=!0}}k=y.callback,k!==null&&(t.flags|=64,U&&(t.flags|=8192),U=s.callbacks,U===null?s.callbacks=[k]:U.push(k))}else U={lane:k,tag:y.tag,payload:y.payload,callback:y.callback,next:null},N===null?(M=N=U,S=P):N=N.next=U,g|=k;if(y=y.next,y===null){if(y=s.shared.pending,y===null)break;U=y,y=U.next,U.next=null,s.lastBaseUpdate=U,s.shared.pending=null}}while(!0);N===null&&(S=P),s.baseState=S,s.firstBaseUpdate=M,s.lastBaseUpdate=N,c===null&&(s.shared.lanes=0),Kn|=g,t.lanes=g,t.memoizedState=P}}function Jh(t,e){if(typeof t!="function")throw Error(l(191,t));t.call(e)}function $h(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Jh(a[t],e)}function cr(t,e){try{var a=e.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var s=r.next;a=s;do{if((a.tag&t)===t){r=void 0;var c=a.create,g=a.inst;r=c(),g.destroy=r}a=a.next}while(a!==s)}}catch(y){At(e,e.return,y)}}function Yn(t,e,a){try{var r=e.updateQueue,s=r!==null?r.lastEffect:null;if(s!==null){var c=s.next;r=c;do{if((r.tag&t)===t){var g=r.inst,y=g.destroy;if(y!==void 0){g.destroy=void 0,s=e;var S=a;try{y()}catch(M){At(s,S,M)}}}r=r.next}while(r!==c)}}catch(M){At(e,e.return,M)}}function Wh(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{$h(e,a)}catch(r){At(t,t.return,r)}}}function Ih(t,e,a){a.props=ba(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){At(t,e,r)}}function Ta(t,e){try{var a=t.ref;if(a!==null){var r=t.stateNode;switch(t.tag){case 26:case 27:case 5:var s=r;break;default:s=r}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){At(t,e,c)}}function ye(t,e){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(s){At(t,e,s)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(s){At(t,e,s)}else a.current=null}function tm(t){var e=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(s){At(t,t.return,s)}}function em(t,e,a){try{var r=t.stateNode;Hb(r,t.type,a,e),r[de]=e}catch(s){At(t,t.return,s)}}function nm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function du(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||nm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hu(t,e,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?a.nodeType===8?a.parentNode.insertBefore(t,e):a.insertBefore(t,e):(a.nodeType===8?(e=a.parentNode,e.insertBefore(t,a)):(e=a,e.appendChild(t)),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=il));else if(r!==4&&r!==27&&(t=t.child,t!==null))for(hu(t,e,a),t=t.sibling;t!==null;)hu(t,e,a),t=t.sibling}function Go(t,e,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(r!==4&&r!==27&&(t=t.child,t!==null))for(Go(t,e,a),t=t.sibling;t!==null;)Go(t,e,a),t=t.sibling}var pn=!1,Vt=!1,mu=!1,am=typeof WeakSet=="function"?WeakSet:Set,Jt=null,im=!1;function vb(t,e){if(t=t.containerInfo,ju=fl,t=Sd(t),gs(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var s=r.anchorOffset,c=r.focusNode;r=r.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break t}var g=0,y=-1,S=-1,M=0,N=0,P=t,k=null;e:for(;;){for(var U;P!==a||s!==0&&P.nodeType!==3||(y=g+s),P!==c||r!==0&&P.nodeType!==3||(S=g+r),P.nodeType===3&&(g+=P.nodeValue.length),(U=P.firstChild)!==null;)k=P,P=U;for(;;){if(P===t)break e;if(k===a&&++M===s&&(y=g),k===c&&++N===r&&(S=g),(U=P.nextSibling)!==null)break;P=k,k=P.parentNode}P=U}a=y===-1||S===-1?null:{start:y,end:S}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yu={focusedElem:t,selectionRange:a},fl=!1,Jt=e;Jt!==null;)if(e=Jt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Jt=t;else for(;Jt!==null;){switch(e=Jt,c=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&c!==null){t=void 0,a=e,s=c.memoizedProps,c=c.memoizedState,r=a.stateNode;try{var Q=ba(a.type,s,a.elementType===a.type);t=r.getSnapshotBeforeUpdate(Q,c),r.__reactInternalSnapshotBeforeUpdate=t}catch(rt){At(a,a.return,rt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Ku(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ku(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(l(163))}if(t=e.sibling,t!==null){t.return=e.return,Jt=t;break}Jt=e.return}return Q=im,im=!1,Q}function rm(t,e,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:vn(t,a),r&4&&cr(5,a);break;case 1:if(vn(t,a),r&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(y){At(a,a.return,y)}else{var s=ba(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(s,e,t.__reactInternalSnapshotBeforeUpdate)}catch(y){At(a,a.return,y)}}r&64&&Wh(a),r&512&&Ta(a,a.return);break;case 3:if(vn(t,a),r&64&&(r=a.updateQueue,r!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{$h(r,t)}catch(y){At(a,a.return,y)}}break;case 26:vn(t,a),r&512&&Ta(a,a.return);break;case 27:case 5:vn(t,a),e===null&&r&4&&tm(a),r&512&&Ta(a,a.return);break;case 12:vn(t,a);break;case 13:vn(t,a),r&4&&sm(t,a);break;case 22:if(s=a.memoizedState!==null||pn,!s){e=e!==null&&e.memoizedState!==null||Vt;var c=pn,g=Vt;pn=s,(Vt=e)&&!g?Xn(t,a,(a.subtreeFlags&8772)!==0):vn(t,a),pn=c,Vt=g}r&512&&(a.memoizedProps.mode==="manual"?Ta(a,a.return):ye(a,a.return));break;default:vn(t,a)}}function om(t){var e=t.alternate;e!==null&&(t.alternate=null,om(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&ts(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Xt=null,be=!1;function gn(t,e,a){for(a=a.child;a!==null;)lm(t,e,a),a=a.sibling}function lm(t,e,a){if(pe&&typeof pe.onCommitFiberUnmount=="function")try{pe.onCommitFiberUnmount(ki,a)}catch{}switch(a.tag){case 26:Vt||ye(a,e),gn(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Vt||ye(a,e);var r=Xt,s=be;for(Xt=a.stateNode,gn(t,e,a),a=a.stateNode,e=a.attributes;e.length;)a.removeAttributeNode(e[0]);ts(a),Xt=r,be=s;break;case 5:Vt||ye(a,e);case 6:s=Xt;var c=be;if(Xt=null,gn(t,e,a),Xt=s,be=c,Xt!==null)if(be)try{t=Xt,r=a.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)}catch(g){At(a,e,g)}else try{Xt.removeChild(a.stateNode)}catch(g){At(a,e,g)}break;case 18:Xt!==null&&(be?(e=Xt,a=a.stateNode,e.nodeType===8?Zu(e.parentNode,a):e.nodeType===1&&Zu(e,a),Rr(e)):Zu(Xt,a.stateNode));break;case 4:r=Xt,s=be,Xt=a.stateNode.containerInfo,be=!0,gn(t,e,a),Xt=r,be=s;break;case 0:case 11:case 14:case 15:Vt||Yn(2,a,e),Vt||Yn(4,a,e),gn(t,e,a);break;case 1:Vt||(ye(a,e),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Ih(a,e,r)),gn(t,e,a);break;case 21:gn(t,e,a);break;case 22:Vt||ye(a,e),Vt=(r=Vt)||a.memoizedState!==null,gn(t,e,a),Vt=r;break;default:gn(t,e,a)}}function sm(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Rr(t)}catch(a){At(e,e.return,a)}}function yb(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new am),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new am),e;default:throw Error(l(435,t.tag))}}function pu(t,e){var a=yb(t);e.forEach(function(r){var s=zb.bind(null,t,r);a.has(r)||(a.add(r),r.then(s,s))})}function Ve(t,e){var a=e.deletions;if(a!==null)for(var r=0;r<a.length;r++){var s=a[r],c=t,g=e,y=g;t:for(;y!==null;){switch(y.tag){case 27:case 5:Xt=y.stateNode,be=!1;break t;case 3:Xt=y.stateNode.containerInfo,be=!0;break t;case 4:Xt=y.stateNode.containerInfo,be=!0;break t}y=y.return}if(Xt===null)throw Error(l(160));lm(c,g,s),Xt=null,be=!1,c=s.alternate,c!==null&&(c.return=null),s.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)um(e,t),e=e.sibling}var Ye=null;function um(t,e){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ve(e,t),Ue(t),r&4&&(Yn(3,t,t.return),cr(3,t),Yn(5,t,t.return));break;case 1:Ve(e,t),Ue(t),r&512&&(Vt||a===null||ye(a,a.return)),r&64&&pn&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var s=Ye;if(Ve(e,t),Ue(t),r&512&&(Vt||a===null||ye(a,a.return)),r&4){var c=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,s=s.ownerDocument||s;e:switch(r){case"title":c=s.getElementsByTagName("title")[0],(!c||c[Ni]||c[ne]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=s.createElement(r),s.head.insertBefore(c,s.querySelector("head > title"))),te(c,r,a),c[ne]=t,Qt(c),r=c;break t;case"link":var g=tp("link","href",s).get(r+(a.href||""));if(g){for(var y=0;y<g.length;y++)if(c=g[y],c.getAttribute("href")===(a.href==null?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(y,1);break e}}c=s.createElement(r),te(c,r,a),s.head.appendChild(c);break;case"meta":if(g=tp("meta","content",s).get(r+(a.content||""))){for(y=0;y<g.length;y++)if(c=g[y],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(y,1);break e}}c=s.createElement(r),te(c,r,a),s.head.appendChild(c);break;default:throw Error(l(468,r))}c[ne]=t,Qt(c),r=c}t.stateNode=r}else ep(s,t.type,t.stateNode);else t.stateNode=Im(s,r,t.memoizedProps);else c!==r?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,r===null?ep(s,t.type,t.stateNode):Im(s,r,t.memoizedProps)):r===null&&t.stateNode!==null&&em(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(r&4&&t.alternate===null){s=t.stateNode,c=t.memoizedProps;try{for(var S=s.firstChild;S;){var M=S.nextSibling,N=S.nodeName;S[Ni]||N==="HEAD"||N==="BODY"||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&S.rel.toLowerCase()==="stylesheet"||s.removeChild(S),S=M}for(var P=t.type,k=s.attributes;k.length;)s.removeAttributeNode(k[0]);te(s,P,c),s[ne]=t,s[de]=c}catch(Q){At(t,t.return,Q)}}case 5:if(Ve(e,t),Ue(t),r&512&&(Vt||a===null||ye(a,a.return)),t.flags&32){s=t.stateNode;try{Pa(s,"")}catch(Q){At(t,t.return,Q)}}r&4&&t.stateNode!=null&&(s=t.memoizedProps,em(t,s,a!==null?a.memoizedProps:s)),r&1024&&(mu=!0);break;case 6:if(Ve(e,t),Ue(t),r&4){if(t.stateNode===null)throw Error(l(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Q){At(t,t.return,Q)}}break;case 3:if(sl=null,s=Ye,Ye=ol(e.containerInfo),Ve(e,t),Ye=s,Ue(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Rr(e.containerInfo)}catch(Q){At(t,t.return,Q)}mu&&(mu=!1,cm(t));break;case 4:r=Ye,Ye=ol(t.stateNode.containerInfo),Ve(e,t),Ue(t),Ye=r;break;case 12:Ve(e,t),Ue(t);break;case 13:Ve(e,t),Ue(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Eu=Fe()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,pu(t,r)));break;case 22:if(r&512&&(Vt||a===null||ye(a,a.return)),S=t.memoizedState!==null,M=a!==null&&a.memoizedState!==null,N=pn,P=Vt,pn=N||S,Vt=P||M,Ve(e,t),Vt=P,pn=N,Ue(t),e=t.stateNode,e._current=t,e._visibility&=-3,e._visibility|=e._pendingVisibility&2,r&8192&&(e._visibility=S?e._visibility&-2:e._visibility|1,S&&(e=pn||Vt,a===null||M||e||ai(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(a=null,e=t;;){if(e.tag===5||e.tag===26||e.tag===27){if(a===null){M=a=e;try{if(s=M.stateNode,S)c=s.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{g=M.stateNode,y=M.memoizedProps.style;var U=y!=null&&y.hasOwnProperty("display")?y.display:null;g.style.display=U==null||typeof U=="boolean"?"":(""+U).trim()}}catch(Q){At(M,M.return,Q)}}}else if(e.tag===6){if(a===null){M=e;try{M.stateNode.nodeValue=S?"":M.memoizedProps}catch(Q){At(M,M.return,Q)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,pu(t,a))));break;case 19:Ve(e,t),Ue(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,pu(t,r)));break;case 21:break;default:Ve(e,t),Ue(t)}}function Ue(t){var e=t.flags;if(e&2){try{if(t.tag!==27){t:{for(var a=t.return;a!==null;){if(nm(a)){var r=a;break t}a=a.return}throw Error(l(160))}switch(r.tag){case 27:var s=r.stateNode,c=du(t);Go(t,c,s);break;case 5:var g=r.stateNode;r.flags&32&&(Pa(g,""),r.flags&=-33);var y=du(t);Go(t,y,g);break;case 3:case 4:var S=r.stateNode.containerInfo,M=du(t);hu(t,M,S);break;default:throw Error(l(161))}}}catch(N){At(t,t.return,N)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;cm(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function vn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)rm(t,e.alternate,e),e=e.sibling}function ai(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Yn(4,e,e.return),ai(e);break;case 1:ye(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Ih(e,e.return,a),ai(e);break;case 26:case 27:case 5:ye(e,e.return),ai(e);break;case 22:ye(e,e.return),e.memoizedState===null&&ai(e);break;default:ai(e)}t=t.sibling}}function Xn(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var r=e.alternate,s=t,c=e,g=c.flags;switch(c.tag){case 0:case 11:case 15:Xn(s,c,a),cr(4,c);break;case 1:if(Xn(s,c,a),r=c,s=r.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(M){At(r,r.return,M)}if(r=c,s=r.updateQueue,s!==null){var y=r.stateNode;try{var S=s.shared.hiddenCallbacks;if(S!==null)for(s.shared.hiddenCallbacks=null,s=0;s<S.length;s++)Jh(S[s],y)}catch(M){At(r,r.return,M)}}a&&g&64&&Wh(c),Ta(c,c.return);break;case 26:case 27:case 5:Xn(s,c,a),a&&r===null&&g&4&&tm(c),Ta(c,c.return);break;case 12:Xn(s,c,a);break;case 13:Xn(s,c,a),a&&g&4&&sm(s,c);break;case 22:c.memoizedState===null&&Xn(s,c,a),Ta(c,c.return);break;default:Xn(s,c,a)}e=e.sibling}}function gu(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&tr(a))}function vu(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&tr(t))}function Gn(t,e,a,r){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)fm(t,e,a,r),e=e.sibling}function fm(t,e,a,r){var s=e.flags;switch(e.tag){case 0:case 11:case 15:Gn(t,e,a,r),s&2048&&cr(9,e);break;case 3:Gn(t,e,a,r),s&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&tr(t)));break;case 12:if(s&2048){Gn(t,e,a,r),t=e.stateNode;try{var c=e.memoizedProps,g=c.id,y=c.onPostCommit;typeof y=="function"&&y(g,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(S){At(e,e.return,S)}}else Gn(t,e,a,r);break;case 23:break;case 22:c=e.stateNode,e.memoizedState!==null?c._visibility&4?Gn(t,e,a,r):fr(t,e):c._visibility&4?Gn(t,e,a,r):(c._visibility|=4,ii(t,e,a,r,(e.subtreeFlags&10256)!==0)),s&2048&&gu(e.alternate,e);break;case 24:Gn(t,e,a,r),s&2048&&vu(e.alternate,e);break;default:Gn(t,e,a,r)}}function ii(t,e,a,r,s){for(s=s&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var c=t,g=e,y=a,S=r,M=g.flags;switch(g.tag){case 0:case 11:case 15:ii(c,g,y,S,s),cr(8,g);break;case 23:break;case 22:var N=g.stateNode;g.memoizedState!==null?N._visibility&4?ii(c,g,y,S,s):fr(c,g):(N._visibility|=4,ii(c,g,y,S,s)),s&&M&2048&&gu(g.alternate,g);break;case 24:ii(c,g,y,S,s),s&&M&2048&&vu(g.alternate,g);break;default:ii(c,g,y,S,s)}e=e.sibling}}function fr(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,r=e,s=r.flags;switch(r.tag){case 22:fr(a,r),s&2048&&gu(r.alternate,r);break;case 24:fr(a,r),s&2048&&vu(r.alternate,r);break;default:fr(a,r)}e=e.sibling}}var dr=8192;function ri(t){if(t.subtreeFlags&dr)for(t=t.child;t!==null;)dm(t),t=t.sibling}function dm(t){switch(t.tag){case 26:ri(t),t.flags&dr&&t.memoizedState!==null&&o1(Ye,t.memoizedState,t.memoizedProps);break;case 5:ri(t);break;case 3:case 4:var e=Ye;Ye=ol(t.stateNode.containerInfo),ri(t),Ye=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=dr,dr=16777216,ri(t),dr=e):ri(t));break;default:ri(t)}}function hm(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function hr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var r=e[a];Jt=r,pm(r,t)}hm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)mm(t),t=t.sibling}function mm(t){switch(t.tag){case 0:case 11:case 15:hr(t),t.flags&2048&&Yn(9,t,t.return);break;case 3:hr(t);break;case 12:hr(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&4&&(t.return===null||t.return.tag!==13)?(e._visibility&=-5,Zo(t)):hr(t);break;default:hr(t)}}function Zo(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var r=e[a];Jt=r,pm(r,t)}hm(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Yn(8,e,e.return),Zo(e);break;case 22:a=e.stateNode,a._visibility&4&&(a._visibility&=-5,Zo(e));break;default:Zo(e)}t=t.sibling}}function pm(t,e){for(;Jt!==null;){var a=Jt;switch(a.tag){case 0:case 11:case 15:Yn(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:tr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Jt=r;else t:for(a=t;Jt!==null;){r=Jt;var s=r.sibling,c=r.return;if(om(r),r===a){Jt=null;break t}if(s!==null){s.return=c,Jt=s;break t}Jt=c}}}function bb(t,e,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(t,e,a,r){return new bb(t,e,a,r)}function yu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zn(t,e){var a=t.alternate;return a===null?(a=Ne(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function gm(t,e){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ko(t,e,a,r,s,c){var g=0;if(r=t,typeof t=="function")yu(t)&&(g=1);else if(typeof t=="string")g=i1(t,a,Qe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case h:return Aa(a.children,s,c,e);case m:g=8,s|=24;break;case v:return t=Ne(12,a,e,s|2),t.elementType=v,t.lanes=c,t;case E:return t=Ne(13,a,e,s),t.elementType=E,t.lanes=c,t;case C:return t=Ne(19,a,e,s),t.elementType=C,t.lanes=c,t;case V:return vm(a,s,c,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case b:case A:g=10;break t;case x:g=9;break t;case T:g=11;break t;case R:g=14;break t;case B:g=16,r=null;break t}g=29,a=Error(l(130,t===null?"null":typeof t,"")),r=null}return e=Ne(g,a,e,s),e.elementType=t,e.type=r,e.lanes=c,e}function Aa(t,e,a,r){return t=Ne(7,t,r,e),t.lanes=a,t}function vm(t,e,a,r){t=Ne(22,t,r,e),t.elementType=V,t.lanes=a;var s={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var c=s._current;if(c===null)throw Error(l(456));if((s._pendingVisibility&2)===0){var g=Vn(c,2);g!==null&&(s._pendingVisibility|=2,ce(g,c,2))}},attach:function(){var c=s._current;if(c===null)throw Error(l(456));if((s._pendingVisibility&2)!==0){var g=Vn(c,2);g!==null&&(s._pendingVisibility&=-3,ce(g,c,2))}}};return t.stateNode=s,t}function bu(t,e,a){return t=Ne(6,t,null,e),t.lanes=a,t}function xu(t,e,a){return e=Ne(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yn(t){t.flags|=4}function ym(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!np(e)){if(e=ke.current,e!==null&&((mt&4194176)===mt?$e!==null:(mt&62914560)!==mt&&(mt&536870912)===0||e!==$e))throw $i=Os,Ud;t.flags|=8192}}function Qo(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Nf():536870912,t.lanes|=e,li|=e)}function mr(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(e)for(var s=t.child;s!==null;)a|=s.lanes|s.childLanes,r|=s.subtreeFlags&31457280,r|=s.flags&31457280,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)a|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=a,e}function xb(t,e,a){var r=e.pendingProps;switch(As(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(e),null;case 1:return wt(e),null;case 3:return a=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),mn(Zt),Va(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ki(e)?yn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,je!==null&&(Ru(je),je=null))),wt(e),null;case 26:return a=e.memoizedState,t===null?(yn(e),a!==null?(wt(e),ym(e,a)):(wt(e),e.flags&=-16777217)):a?a!==t.memoizedState?(yn(e),wt(e),ym(e,a)):(wt(e),e.flags&=-16777217):(t.memoizedProps!==r&&yn(e),wt(e),e.flags&=-16777217),null;case 27:ro(e),a=Cn.current;var s=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==r&&yn(e);else{if(!r){if(e.stateNode===null)throw Error(l(166));return wt(e),null}t=Qe.current,Ki(e)?kd(e):(t=Qm(s,r,a),e.stateNode=t,yn(e))}return wt(e),null;case 5:if(ro(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&yn(e);else{if(!r){if(e.stateNode===null)throw Error(l(166));return wt(e),null}if(t=Qe.current,Ki(e))kd(e);else{switch(s=rl(Cn.current),t){case 1:t=s.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=s.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof r.is=="string"?s.createElement("select",{is:r.is}):s.createElement("select"),r.multiple?t.multiple=!0:r.size&&(t.size=r.size);break;default:t=typeof r.is=="string"?s.createElement(a,{is:r.is}):s.createElement(a)}}t[ne]=e,t[de]=r;t:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break t;for(;s.sibling===null;){if(s.return===null||s.return===e)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=t;t:switch(te(t,a,r),a){case"button":case"input":case"select":case"textarea":t=!!r.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&yn(e)}}return wt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&yn(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(l(166));if(t=Cn.current,Ki(e)){if(t=e.stateNode,a=e.memoizedProps,r=null,s=ue,s!==null)switch(s.tag){case 27:case 5:r=s.memoizedProps}t[ne]=e,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||jm(t.nodeValue,a)),t||ha(e)}else t=rl(t).createTextNode(r),t[ne]=e,e.stateNode=t}return wt(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(s=Ki(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(l(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(l(317));s[ne]=e}else Qi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;wt(e),s=!1}else je!==null&&(Ru(je),je=null),s=!0;if(!s)return e.flags&256?(cn(e),e):(cn(e),null)}if(cn(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=r!==null,t=t!==null&&t.memoizedState!==null,a){r=e.child,s=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(s=r.alternate.memoizedState.cachePool.pool);var c=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==s&&(r.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),Qo(e,e.updateQueue),wt(e),null;case 4:return Va(),t===null&&qu(e.stateNode.containerInfo),wt(e),null;case 10:return mn(e.type),wt(e),null;case 19:if(Ht(Gt),s=e.memoizedState,s===null)return wt(e),null;if(r=(e.flags&128)!==0,c=s.rendering,c===null)if(r)mr(s,!1);else{if(Ut!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(c=zo(t),c!==null){for(e.flags|=128,mr(s,!1),t=c.updateQueue,e.updateQueue=t,Qo(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)gm(a,t),a=a.sibling;return Mt(Gt,Gt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Fe()>Fo&&(e.flags|=128,r=!0,mr(s,!1),e.lanes=4194304)}else{if(!r)if(t=zo(c),t!==null){if(e.flags|=128,r=!0,t=t.updateQueue,e.updateQueue=t,Qo(e,t),mr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!c.alternate&&!pt)return wt(e),null}else 2*Fe()-s.renderingStartTime>Fo&&a!==536870912&&(e.flags|=128,r=!0,mr(s,!1),e.lanes=4194304);s.isBackwards?(c.sibling=e.child,e.child=c):(t=s.last,t!==null?t.sibling=c:e.child=c,s.last=c)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Fe(),e.sibling=null,t=Gt.current,Mt(Gt,r?t&1|2:t&1),e):(wt(e),null);case 22:case 23:return cn(e),Ms(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(a&536870912)!==0&&(e.flags&128)===0&&(wt(e),e.subtreeFlags&6&&(e.flags|=8192)):wt(e),a=e.updateQueue,a!==null&&Qo(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==a&&(e.flags|=2048),t!==null&&Ht(pa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),mn(Zt),wt(e),null;case 25:return null}throw Error(l(156,e.tag))}function Sb(t,e){switch(As(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return mn(Zt),Va(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ro(e),null;case 13:if(cn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(l(340));Qi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ht(Gt),null;case 4:return Va(),null;case 10:return mn(e.type),null;case 22:case 23:return cn(e),Ms(),t!==null&&Ht(pa),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return mn(Zt),null;case 25:return null;default:return null}}function bm(t,e){switch(As(e),e.tag){case 3:mn(Zt),Va();break;case 26:case 27:case 5:ro(e);break;case 4:Va();break;case 13:cn(e);break;case 19:Ht(Gt);break;case 10:mn(e.type);break;case 22:case 23:cn(e),Ms(),t!==null&&Ht(pa);break;case 24:mn(Zt)}}var Tb={getCacheForType:function(t){var e=ae(Zt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},Ab=typeof WeakMap=="function"?WeakMap:Map,Ct=0,Et=null,ft=null,mt=0,Ot=0,xe=null,bn=!1,oi=!1,Su=!1,xn=0,Ut=0,Kn=0,Ea=0,Tu=0,Be=0,li=0,pr=null,Ie=null,Au=!1,Eu=0,Fo=1/0,Jo=null,Qn=null,$o=!1,Oa=null,gr=0,Ou=0,Du=null,vr=0,Mu=null;function Se(){if((Ct&2)!==0&&mt!==0)return mt&-mt;if(j.T!==null){var t=Wa;return t!==0?t:Uu()}return Pf()}function xm(){Be===0&&(Be=(mt&536870912)===0||pt?Uf():536870912);var t=ke.current;return t!==null&&(t.flags|=32),Be}function ce(t,e,a){(t===Et&&Ot===2||t.cancelPendingCommit!==null)&&(si(t,0),Sn(t,mt,Be,!1)),Ui(t,a),((Ct&2)===0||t!==Et)&&(t===Et&&((Ct&2)===0&&(Ea|=a),Ut===4&&Sn(t,mt,Be,!1)),tn(t))}function Sm(t,e,a){if((Ct&6)!==0)throw Error(l(327));var r=!a&&(e&60)===0&&(e&t.expiredLanes)===0||Vi(t,e),s=r?Db(t,e):zu(t,e,!0),c=r;do{if(s===0){oi&&!r&&Sn(t,e,0,!1);break}else if(s===6)Sn(t,e,0,!bn);else{if(a=t.current.alternate,c&&!Eb(a)){s=zu(t,e,!1),c=!1;continue}if(s===2){if(c=e,t.errorRecoveryDisabledLanes&c)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){e=g;t:{var y=t;s=pr;var S=y.current.memoizedState.isDehydrated;if(S&&(si(y,g).flags|=256),g=zu(y,g,!1),g!==2){if(Su&&!S){y.errorRecoveryDisabledLanes|=c,Ea|=c,s=4;break t}c=Ie,Ie=s,c!==null&&Ru(c)}s=g}if(c=!1,s!==2)continue}}if(s===1){si(t,0),Sn(t,e,0,!0);break}t:{switch(r=t,s){case 0:case 1:throw Error(l(345));case 4:if((e&4194176)===e){Sn(r,e,Be,!bn);break t}break;case 2:Ie=null;break;case 3:case 5:break;default:throw Error(l(329))}if(r.finishedWork=a,r.finishedLanes=e,(e&62914560)===e&&(c=Eu+300-Fe(),10<c)){if(Sn(r,e,Be,!bn),uo(r,0)!==0)break t;r.timeoutHandle=Gm(Tm.bind(null,r,a,Ie,Jo,Au,e,Be,Ea,li,bn,2,-0,0),c);break t}Tm(r,a,Ie,Jo,Au,e,Be,Ea,li,bn,0,-0,0)}}break}while(!0);tn(t)}function Ru(t){Ie===null?Ie=t:Ie.push.apply(Ie,t)}function Tm(t,e,a,r,s,c,g,y,S,M,N,P,k){var U=e.subtreeFlags;if((U&8192||(U&16785408)===16785408)&&(Ar={stylesheets:null,count:0,unsuspend:r1},dm(e),e=l1(),e!==null)){t.cancelPendingCommit=e(wm.bind(null,t,a,r,s,g,y,S,1,P,k)),Sn(t,c,g,!M);return}wm(t,a,r,s,g,y,S,N,P,k)}function Eb(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var s=a[r],c=s.getSnapshot;s=s.value;try{if(!ve(c(),s))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sn(t,e,a,r){e&=~Tu,e&=~Ea,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var s=e;0<s;){var c=31-ge(s),g=1<<c;r[c]=-1,s&=~g}a!==0&&Bf(t,a,e)}function Wo(){return(Ct&6)===0?(yr(0),!1):!0}function wu(){if(ft!==null){if(Ot===0)var t=ft.return;else t=ft,hn=xa=null,Us(t),Ja=null,Wi=0,t=ft;for(;t!==null;)bm(t.alternate,t),t=t.return;ft=null}}function si(t,e){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Yb(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),wu(),Et=t,ft=a=Zn(t.current,null),mt=e,Ot=0,xe=null,bn=!1,oi=Vi(t,e),Su=!1,li=Be=Tu=Ea=Kn=Ut=0,Ie=pr=null,Au=!1,(e&8)!==0&&(e|=e&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=e;0<r;){var s=31-ge(r),c=1<<s;e|=t[s],r&=~c}return xn=e,To(),a}function Am(t,e){ut=null,j.H=We,e===Ji?(e=Ld(),Ot=3):e===Ud?(e=Ld(),Ot=4):Ot=e===Nh?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,xe=e,ft===null&&(Ut=1,jo(t,Ce(e,t.current)))}function Em(){var t=j.H;return j.H=We,t===null?We:t}function Om(){var t=j.A;return j.A=Tb,t}function Cu(){Ut=4,bn||(mt&4194176)!==mt&&ke.current!==null||(oi=!0),(Kn&134217727)===0&&(Ea&134217727)===0||Et===null||Sn(Et,mt,Be,!1)}function zu(t,e,a){var r=Ct;Ct|=2;var s=Em(),c=Om();(Et!==t||mt!==e)&&(Jo=null,si(t,e)),e=!1;var g=Ut;t:do try{if(Ot!==0&&ft!==null){var y=ft,S=xe;switch(Ot){case 8:wu(),g=6;break t;case 3:case 2:case 6:ke.current===null&&(e=!0);var M=Ot;if(Ot=0,xe=null,ui(t,y,S,M),a&&oi){g=0;break t}break;default:M=Ot,Ot=0,xe=null,ui(t,y,S,M)}}Ob(),g=Ut;break}catch(N){Am(t,N)}while(!0);return e&&t.shellSuspendCounter++,hn=xa=null,Ct=r,j.H=s,j.A=c,ft===null&&(Et=null,mt=0,To()),g}function Ob(){for(;ft!==null;)Dm(ft)}function Db(t,e){var a=Ct;Ct|=2;var r=Em(),s=Om();Et!==t||mt!==e?(Jo=null,Fo=Fe()+500,si(t,e)):oi=Vi(t,e);t:do try{if(Ot!==0&&ft!==null){e=ft;var c=xe;e:switch(Ot){case 1:Ot=0,xe=null,ui(t,e,c,1);break;case 2:if(Nd(c)){Ot=0,xe=null,Mm(e);break}e=function(){Ot===2&&Et===t&&(Ot=7),tn(t)},c.then(e,e);break t;case 3:Ot=7;break t;case 4:Ot=5;break t;case 7:Nd(c)?(Ot=0,xe=null,Mm(e)):(Ot=0,xe=null,ui(t,e,c,7));break;case 5:var g=null;switch(ft.tag){case 26:g=ft.memoizedState;case 5:case 27:var y=ft;if(!g||np(g)){Ot=0,xe=null;var S=y.sibling;if(S!==null)ft=S;else{var M=y.return;M!==null?(ft=M,Io(M)):ft=null}break e}}Ot=0,xe=null,ui(t,e,c,5);break;case 6:Ot=0,xe=null,ui(t,e,c,6);break;case 8:wu(),Ut=6;break t;default:throw Error(l(462))}}Mb();break}catch(N){Am(t,N)}while(!0);return hn=xa=null,j.H=r,j.A=s,Ct=a,ft!==null?0:(Et=null,mt=0,To(),Ut)}function Mb(){for(;ft!==null&&!Fv();)Dm(ft)}function Dm(t){var e=Qh(t.alternate,t,xn);t.memoizedProps=t.pendingProps,e===null?Io(t):ft=e}function Mm(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=jh(a,e,e.pendingProps,e.type,void 0,mt);break;case 11:e=jh(a,e,e.pendingProps,e.type.render,e.ref,mt);break;case 5:Us(e);default:bm(a,e),e=ft=gm(e,xn),e=Qh(a,e,xn)}t.memoizedProps=t.pendingProps,e===null?Io(t):ft=e}function ui(t,e,a,r){hn=xa=null,Us(e),Ja=null,Wi=0;var s=e.return;try{if(pb(t,s,e,a,mt)){Ut=1,jo(t,Ce(a,t.current)),ft=null;return}}catch(c){if(s!==null)throw ft=s,c;Ut=1,jo(t,Ce(a,t.current)),ft=null;return}e.flags&32768?(pt||r===1?t=!0:oi||(mt&536870912)!==0?t=!1:(bn=t=!0,(r===2||r===3||r===6)&&(r=ke.current,r!==null&&r.tag===13&&(r.flags|=16384))),Rm(e,t)):Io(e)}function Io(t){var e=t;do{if((e.flags&32768)!==0){Rm(e,bn);return}t=e.return;var a=xb(e.alternate,e,xn);if(a!==null){ft=a;return}if(e=e.sibling,e!==null){ft=e;return}ft=e=t}while(e!==null);Ut===0&&(Ut=5)}function Rm(t,e){do{var a=Sb(t.alternate,t);if(a!==null){a.flags&=32767,ft=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){ft=t;return}ft=t=a}while(t!==null);Ut=6,ft=null}function wm(t,e,a,r,s,c,g,y,S,M){var N=j.T,P=X.p;try{X.p=2,j.T=null,Rb(t,e,a,r,P,s,c,g,y,S,M)}finally{j.T=N,X.p=P}}function Rb(t,e,a,r,s,c,g,y){do ci();while(Oa!==null);if((Ct&6)!==0)throw Error(l(327));var S=t.finishedWork;if(r=t.finishedLanes,S===null)return null;if(t.finishedWork=null,t.finishedLanes=0,S===t.current)throw Error(l(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var M=S.lanes|S.childLanes;if(M|=xs,oy(t,r,M,c,g,y),t===Et&&(ft=Et=null,mt=0),(S.subtreeFlags&10256)===0&&(S.flags&10256)===0||$o||($o=!0,Ou=M,Du=a,_b(oo,function(){return ci(),null})),a=(S.flags&15990)!==0,(S.subtreeFlags&15990)!==0||a?(a=j.T,j.T=null,c=X.p,X.p=2,g=Ct,Ct|=4,vb(t,S),um(S,t),Wy(Yu,t.containerInfo),fl=!!ju,Yu=ju=null,t.current=S,rm(t,S.alternate,S),Jv(),Ct=g,X.p=c,j.T=a):t.current=S,$o?($o=!1,Oa=t,gr=r):Cm(t,M),M=t.pendingLanes,M===0&&(Qn=null),ey(S.stateNode),tn(t),e!==null)for(s=t.onRecoverableError,S=0;S<e.length;S++)M=e[S],s(M.value,{componentStack:M.stack});return(gr&3)!==0&&ci(),M=t.pendingLanes,(r&4194218)!==0&&(M&42)!==0?t===Mu?vr++:(vr=0,Mu=t):vr=0,yr(0),null}function Cm(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,tr(e)))}function ci(){if(Oa!==null){var t=Oa,e=Ou;Ou=0;var a=qf(gr),r=j.T,s=X.p;try{if(X.p=32>a?32:a,j.T=null,Oa===null)var c=!1;else{a=Du,Du=null;var g=Oa,y=gr;if(Oa=null,gr=0,(Ct&6)!==0)throw Error(l(331));var S=Ct;if(Ct|=4,mm(g.current),fm(g,g.current,y,a),Ct=S,yr(0,!1),pe&&typeof pe.onPostCommitFiberRoot=="function")try{pe.onPostCommitFiberRoot(ki,g)}catch{}c=!0}return c}finally{X.p=s,j.T=r,Cm(t,e)}}return!1}function zm(t,e,a){e=Ce(a,e),e=Fs(t.stateNode,e,2),t=jn(t,e,2),t!==null&&(Ui(t,2),tn(t))}function At(t,e,a){if(t.tag===3)zm(t,t,a);else for(;e!==null;){if(e.tag===3){zm(e,t,a);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qn===null||!Qn.has(r))){t=Ce(a,t),a=Vh(2),r=jn(e,a,2),r!==null&&(Uh(a,r,e,t),Ui(r,2),tn(r));break}}e=e.return}}function _u(t,e,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Ab;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(a)||(Su=!0,s.add(a),t=wb.bind(null,t,e,a),e.then(t,t))}function wb(t,e,a){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Et===t&&(mt&a)===a&&(Ut===4||Ut===3&&(mt&62914560)===mt&&300>Fe()-Eu?(Ct&2)===0&&si(t,0):Tu|=a,li===mt&&(li=0)),tn(t)}function _m(t,e){e===0&&(e=Nf()),t=Vn(t,e),t!==null&&(Ui(t,e),tn(t))}function Cb(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),_m(t,a)}function zb(t,e){var a=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(a=s.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(l(314))}r!==null&&r.delete(e),_m(t,a)}function _b(t,e){return Jl(t,e)}var tl=null,fi=null,ku=!1,el=!1,Vu=!1,Da=0;function tn(t){t!==fi&&t.next===null&&(fi===null?tl=fi=t:fi=fi.next=t),el=!0,ku||(ku=!0,Vb(kb))}function yr(t,e){if(!Vu&&el){Vu=!0;do for(var a=!1,r=tl;r!==null;){if(t!==0){var s=r.pendingLanes;if(s===0)var c=0;else{var g=r.suspendedLanes,y=r.pingedLanes;c=(1<<31-ge(42|t)+1)-1,c&=s&~(g&~y),c=c&201326677?c&201326677|1:c?c|2:0}c!==0&&(a=!0,Um(r,c))}else c=mt,c=uo(r,r===Et?c:0),(c&3)===0||Vi(r,c)||(a=!0,Um(r,c));r=r.next}while(a);Vu=!1}}function kb(){el=ku=!1;var t=0;Da!==0&&(jb()&&(t=Da),Da=0);for(var e=Fe(),a=null,r=tl;r!==null;){var s=r.next,c=km(r,e);c===0?(r.next=null,a===null?tl=s:a.next=s,s===null&&(fi=a)):(a=r,(t!==0||(c&3)!==0)&&(el=!0)),r=s}yr(t)}function km(t,e){for(var a=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var g=31-ge(c),y=1<<g,S=s[g];S===-1?((y&a)===0||(y&r)!==0)&&(s[g]=ry(y,e)):S<=e&&(t.expiredLanes|=y),c&=~y}if(e=Et,a=mt,a=uo(t,t===e?a:0),r=t.callbackNode,a===0||t===e&&Ot===2||t.cancelPendingCommit!==null)return r!==null&&r!==null&&$l(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Vi(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(r!==null&&$l(r),qf(a)){case 2:case 8:a=kf;break;case 32:a=oo;break;case 268435456:a=Vf;break;default:a=oo}return r=Vm.bind(null,t),a=Jl(a,r),t.callbackPriority=e,t.callbackNode=a,e}return r!==null&&r!==null&&$l(r),t.callbackPriority=2,t.callbackNode=null,2}function Vm(t,e){var a=t.callbackNode;if(ci()&&t.callbackNode!==a)return null;var r=mt;return r=uo(t,t===Et?r:0),r===0?null:(Sm(t,r,e),km(t,Fe()),t.callbackNode!=null&&t.callbackNode===a?Vm.bind(null,t):null)}function Um(t,e){if(ci())return null;Sm(t,e,!0)}function Vb(t){Xb(function(){(Ct&6)!==0?Jl(_f,t):t()})}function Uu(){return Da===0&&(Da=Uf()),Da}function Nm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:po(""+t)}function Bm(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function Ub(t,e,a,r,s){if(e==="submit"&&a&&a.stateNode===s){var c=Nm((s[de]||null).action),g=r.submitter;g&&(e=(e=g[de]||null)?Nm(e.formAction):g.getAttribute("formAction"),e!==null&&(c=e,g=null));var y=new bo("action","action",null,r,s);t.push({event:y,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Da!==0){var S=g?Bm(s,g):new FormData(s);Xs(a,{pending:!0,data:S,method:s.method,action:c},null,S)}}else typeof c=="function"&&(y.preventDefault(),S=g?Bm(s,g):new FormData(s),Xs(a,{pending:!0,data:S,method:s.method,action:c},c,S))},currentTarget:s}]})}}for(var Nu=0;Nu<wd.length;Nu++){var Bu=wd[Nu],Nb=Bu.toLowerCase(),Bb=Bu[0].toUpperCase()+Bu.slice(1);He(Nb,"on"+Bb)}He(Ed,"onAnimationEnd"),He(Od,"onAnimationIteration"),He(Dd,"onAnimationStart"),He("dblclick","onDoubleClick"),He("focusin","onFocus"),He("focusout","onBlur"),He(tb,"onTransitionRun"),He(eb,"onTransitionStart"),He(nb,"onTransitionCancel"),He(Md,"onTransitionEnd"),La("onMouseEnter",["mouseout","mouseover"]),La("onMouseLeave",["mouseout","mouseover"]),La("onPointerEnter",["pointerout","pointerover"]),La("onPointerLeave",["pointerout","pointerover"]),la("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),la("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),la("onBeforeInput",["compositionend","keypress","textInput","paste"]),la("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),la("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),la("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(br));function Lm(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],s=r.event;r=r.listeners;t:{var c=void 0;if(e)for(var g=r.length-1;0<=g;g--){var y=r[g],S=y.instance,M=y.currentTarget;if(y=y.listener,S!==c&&s.isPropagationStopped())break t;c=y,s.currentTarget=M;try{c(s)}catch(N){Ho(N)}s.currentTarget=null,c=S}else for(g=0;g<r.length;g++){if(y=r[g],S=y.instance,M=y.currentTarget,y=y.listener,S!==c&&s.isPropagationStopped())break t;c=y,s.currentTarget=M;try{c(s)}catch(N){Ho(N)}s.currentTarget=null,c=S}}}}function dt(t,e){var a=e[Il];a===void 0&&(a=e[Il]=new Set);var r=t+"__bubble";a.has(r)||(qm(e,t,2,!1),a.add(r))}function Lu(t,e,a){var r=0;e&&(r|=4),qm(a,t,r,e)}var nl="_reactListening"+Math.random().toString(36).slice(2);function qu(t){if(!t[nl]){t[nl]=!0,jf.forEach(function(a){a!=="selectionchange"&&(Lb.has(a)||Lu(a,!1,t),Lu(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[nl]||(e[nl]=!0,Lu("selectionchange",!1,e))}}function qm(t,e,a,r){switch(sp(e)){case 2:var s=c1;break;case 8:s=f1;break;default:s=Wu}a=s.bind(null,e,a,t),s=void 0,!ls||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,a,{capture:!0,passive:s}):t.addEventListener(e,a,!0):s!==void 0?t.addEventListener(e,a,{passive:s}):t.addEventListener(e,a,!1)}function Pu(t,e,a,r,s){var c=r;if((e&1)===0&&(e&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var y=r.stateNode.containerInfo;if(y===s||y.nodeType===8&&y.parentNode===s)break;if(g===4)for(g=r.return;g!==null;){var S=g.tag;if((S===3||S===4)&&(S=g.stateNode.containerInfo,S===s||S.nodeType===8&&S.parentNode===s))return;g=g.return}for(;y!==null;){if(g=oa(y),g===null)return;if(S=g.tag,S===5||S===6||S===26||S===27){r=c=g;continue t}y=y.parentNode}}r=r.return}td(function(){var M=c,N=rs(a),P=[];t:{var k=Rd.get(t);if(k!==void 0){var U=bo,Q=t;switch(t){case"keypress":if(vo(a)===0)break t;case"keydown":case"keyup":U=zy;break;case"focusin":Q="focus",U=fs;break;case"focusout":Q="blur",U=fs;break;case"beforeblur":case"afterblur":U=fs;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=by;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=Vy;break;case Ed:case Od:case Dd:U=Ty;break;case Md:U=Ny;break;case"scroll":case"scrollend":U=vy;break;case"wheel":U=Ly;break;case"copy":case"cut":case"paste":U=Ey;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=rd;break;case"toggle":case"beforetoggle":U=Py}var rt=(e&4)!==0,Nt=!rt&&(t==="scroll"||t==="scrollend"),w=rt?k!==null?k+"Capture":null:k;rt=[];for(var D=M,z;D!==null;){var L=D;if(z=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||z===null||w===null||(L=Li(D,w),L!=null&&rt.push(xr(D,L,z))),Nt)break;D=D.return}0<rt.length&&(k=new U(k,Q,null,a,N),P.push({event:k,listeners:rt}))}}if((e&7)===0){t:{if(k=t==="mouseover"||t==="pointerover",U=t==="mouseout"||t==="pointerout",k&&a!==is&&(Q=a.relatedTarget||a.fromElement)&&(oa(Q)||Q[Ua]))break t;if((U||k)&&(k=N.window===N?N:(k=N.ownerDocument)?k.defaultView||k.parentWindow:window,U?(Q=a.relatedTarget||a.toElement,U=M,Q=Q?oa(Q):null,Q!==null&&(Nt=J(Q),rt=Q.tag,Q!==Nt||rt!==5&&rt!==27&&rt!==6)&&(Q=null)):(U=null,Q=M),U!==Q)){if(rt=ad,L="onMouseLeave",w="onMouseEnter",D="mouse",(t==="pointerout"||t==="pointerover")&&(rt=rd,L="onPointerLeave",w="onPointerEnter",D="pointer"),Nt=U==null?k:Bi(U),z=Q==null?k:Bi(Q),k=new rt(L,D+"leave",U,a,N),k.target=Nt,k.relatedTarget=z,L=null,oa(N)===M&&(rt=new rt(w,D+"enter",Q,a,N),rt.target=z,rt.relatedTarget=Nt,L=rt),Nt=L,U&&Q)e:{for(rt=U,w=Q,D=0,z=rt;z;z=di(z))D++;for(z=0,L=w;L;L=di(L))z++;for(;0<D-z;)rt=di(rt),D--;for(;0<z-D;)w=di(w),z--;for(;D--;){if(rt===w||w!==null&&rt===w.alternate)break e;rt=di(rt),w=di(w)}rt=null}else rt=null;U!==null&&Pm(P,k,U,rt,!1),Q!==null&&Nt!==null&&Pm(P,Nt,Q,rt,!0)}}t:{if(k=M?Bi(M):window,U=k.nodeName&&k.nodeName.toLowerCase(),U==="select"||U==="input"&&k.type==="file")var Z=hd;else if(fd(k))if(md)Z=Jy;else{Z=Qy;var ct=Ky}else U=k.nodeName,!U||U.toLowerCase()!=="input"||k.type!=="checkbox"&&k.type!=="radio"?M&&as(M.elementType)&&(Z=hd):Z=Fy;if(Z&&(Z=Z(t,M))){dd(P,Z,a,N);break t}ct&&ct(t,k,M),t==="focusout"&&M&&k.type==="number"&&M.memoizedProps.value!=null&&ns(k,"number",k.value)}switch(ct=M?Bi(M):window,t){case"focusin":(fd(ct)||ct.contentEditable==="true")&&(Xa=ct,vs=M,Zi=null);break;case"focusout":Zi=vs=Xa=null;break;case"mousedown":ys=!0;break;case"contextmenu":case"mouseup":case"dragend":ys=!1,Td(P,a,N);break;case"selectionchange":if(Iy)break;case"keydown":case"keyup":Td(P,a,N)}var I;if(hs)t:{switch(t){case"compositionstart":var nt="onCompositionStart";break t;case"compositionend":nt="onCompositionEnd";break t;case"compositionupdate":nt="onCompositionUpdate";break t}nt=void 0}else Ya?ud(t,a)&&(nt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(nt="onCompositionStart");nt&&(od&&a.locale!=="ko"&&(Ya||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&Ya&&(I=ed()):(kn=N,ss="value"in kn?kn.value:kn.textContent,Ya=!0)),ct=al(M,nt),0<ct.length&&(nt=new id(nt,t,null,a,N),P.push({event:nt,listeners:ct}),I?nt.data=I:(I=cd(a),I!==null&&(nt.data=I)))),(I=jy?Yy(t,a):Xy(t,a))&&(nt=al(M,"onBeforeInput"),0<nt.length&&(ct=new id("onBeforeInput","beforeinput",null,a,N),P.push({event:ct,listeners:nt}),ct.data=I)),Ub(P,t,M,a,N)}Lm(P,e)})}function xr(t,e,a){return{instance:t,listener:e,currentTarget:a}}function al(t,e){for(var a=e+"Capture",r=[];t!==null;){var s=t,c=s.stateNode;s=s.tag,s!==5&&s!==26&&s!==27||c===null||(s=Li(t,a),s!=null&&r.unshift(xr(t,s,c)),s=Li(t,e),s!=null&&r.push(xr(t,s,c))),t=t.return}return r}function di(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Pm(t,e,a,r,s){for(var c=e._reactName,g=[];a!==null&&a!==r;){var y=a,S=y.alternate,M=y.stateNode;if(y=y.tag,S!==null&&S===r)break;y!==5&&y!==26&&y!==27||M===null||(S=M,s?(M=Li(a,c),M!=null&&g.unshift(xr(a,M,S))):s||(M=Li(a,c),M!=null&&g.push(xr(a,M,S)))),a=a.return}g.length!==0&&t.push({event:e,listeners:g})}var qb=/\r\n?/g,Pb=/\u0000|\uFFFD/g;function Hm(t){return(typeof t=="string"?t:""+t).replace(qb,`
`).replace(Pb,"")}function jm(t,e){return e=Hm(e),Hm(t)===e}function il(){}function Tt(t,e,a,r,s,c){switch(a){case"children":typeof r=="string"?e==="body"||e==="textarea"&&r===""||Pa(t,r):(typeof r=="number"||typeof r=="bigint")&&e!=="body"&&Pa(t,""+r);break;case"className":fo(t,"class",r);break;case"tabIndex":fo(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":fo(t,a,r);break;case"style":Wf(t,r,c);break;case"data":if(e!=="object"){fo(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=po(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(e!=="input"&&Tt(t,e,"name",s.name,s,null),Tt(t,e,"formEncType",s.formEncType,s,null),Tt(t,e,"formMethod",s.formMethod,s,null),Tt(t,e,"formTarget",s.formTarget,s,null)):(Tt(t,e,"encType",s.encType,s,null),Tt(t,e,"method",s.method,s,null),Tt(t,e,"target",s.target,s,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=po(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=il);break;case"onScroll":r!=null&&dt("scroll",t);break;case"onScrollEnd":r!=null&&dt("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(a=r.__html,a!=null){if(s.children!=null)throw Error(l(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=po(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":dt("beforetoggle",t),dt("toggle",t),co(t,"popover",r);break;case"xlinkActuate":ln(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ln(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ln(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ln(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ln(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ln(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ln(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ln(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ln(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":co(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=py.get(a)||a,co(t,a,r))}}function Hu(t,e,a,r,s,c){switch(a){case"style":Wf(t,r,c);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(a=r.__html,a!=null){if(s.children!=null)throw Error(l(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Pa(t,r):(typeof r=="number"||typeof r=="bigint")&&Pa(t,""+r);break;case"onScroll":r!=null&&dt("scroll",t);break;case"onScrollEnd":r!=null&&dt("scrollend",t);break;case"onClick":r!=null&&(t.onclick=il);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Yf.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(s=a.endsWith("Capture"),e=a.slice(2,s?a.length-7:void 0),c=t[de]||null,c=c!=null?c[a]:null,typeof c=="function"&&t.removeEventListener(e,c,s),typeof r=="function")){typeof c!="function"&&c!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,r,s);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):co(t,a,r)}}}function te(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":dt("error",t),dt("load",t);var r=!1,s=!1,c;for(c in a)if(a.hasOwnProperty(c)){var g=a[c];if(g!=null)switch(c){case"src":r=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,e));default:Tt(t,e,c,g,a,null)}}s&&Tt(t,e,"srcSet",a.srcSet,a,null),r&&Tt(t,e,"src",a.src,a,null);return;case"input":dt("invalid",t);var y=c=g=s=null,S=null,M=null;for(r in a)if(a.hasOwnProperty(r)){var N=a[r];if(N!=null)switch(r){case"name":s=N;break;case"type":g=N;break;case"checked":S=N;break;case"defaultChecked":M=N;break;case"value":c=N;break;case"defaultValue":y=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(l(137,e));break;default:Tt(t,e,r,N,a,null)}}Qf(t,c,y,S,M,g,s,!1),ho(t);return;case"select":dt("invalid",t),r=g=c=null;for(s in a)if(a.hasOwnProperty(s)&&(y=a[s],y!=null))switch(s){case"value":c=y;break;case"defaultValue":g=y;break;case"multiple":r=y;default:Tt(t,e,s,y,a,null)}e=c,a=g,t.multiple=!!r,e!=null?qa(t,!!r,e,!1):a!=null&&qa(t,!!r,a,!0);return;case"textarea":dt("invalid",t),c=s=r=null;for(g in a)if(a.hasOwnProperty(g)&&(y=a[g],y!=null))switch(g){case"value":r=y;break;case"defaultValue":s=y;break;case"children":c=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(l(91));break;default:Tt(t,e,g,y,a,null)}Jf(t,r,s,c),ho(t);return;case"option":for(S in a)if(a.hasOwnProperty(S)&&(r=a[S],r!=null))switch(S){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Tt(t,e,S,r,a,null)}return;case"dialog":dt("cancel",t),dt("close",t);break;case"iframe":case"object":dt("load",t);break;case"video":case"audio":for(r=0;r<br.length;r++)dt(br[r],t);break;case"image":dt("error",t),dt("load",t);break;case"details":dt("toggle",t);break;case"embed":case"source":case"link":dt("error",t),dt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in a)if(a.hasOwnProperty(M)&&(r=a[M],r!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,e));default:Tt(t,e,M,r,a,null)}return;default:if(as(e)){for(N in a)a.hasOwnProperty(N)&&(r=a[N],r!==void 0&&Hu(t,e,N,r,a,void 0));return}}for(y in a)a.hasOwnProperty(y)&&(r=a[y],r!=null&&Tt(t,e,y,r,a,null))}function Hb(t,e,a,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,c=null,g=null,y=null,S=null,M=null,N=null;for(U in a){var P=a[U];if(a.hasOwnProperty(U)&&P!=null)switch(U){case"checked":break;case"value":break;case"defaultValue":S=P;default:r.hasOwnProperty(U)||Tt(t,e,U,null,r,P)}}for(var k in r){var U=r[k];if(P=a[k],r.hasOwnProperty(k)&&(U!=null||P!=null))switch(k){case"type":c=U;break;case"name":s=U;break;case"checked":M=U;break;case"defaultChecked":N=U;break;case"value":g=U;break;case"defaultValue":y=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(l(137,e));break;default:U!==P&&Tt(t,e,k,U,r,P)}}es(t,g,y,S,M,N,c,s);return;case"select":U=g=y=k=null;for(c in a)if(S=a[c],a.hasOwnProperty(c)&&S!=null)switch(c){case"value":break;case"multiple":U=S;default:r.hasOwnProperty(c)||Tt(t,e,c,null,r,S)}for(s in r)if(c=r[s],S=a[s],r.hasOwnProperty(s)&&(c!=null||S!=null))switch(s){case"value":k=c;break;case"defaultValue":y=c;break;case"multiple":g=c;default:c!==S&&Tt(t,e,s,c,r,S)}e=y,a=g,r=U,k!=null?qa(t,!!a,k,!1):!!r!=!!a&&(e!=null?qa(t,!!a,e,!0):qa(t,!!a,a?[]:"",!1));return;case"textarea":U=k=null;for(y in a)if(s=a[y],a.hasOwnProperty(y)&&s!=null&&!r.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Tt(t,e,y,null,r,s)}for(g in r)if(s=r[g],c=a[g],r.hasOwnProperty(g)&&(s!=null||c!=null))switch(g){case"value":k=s;break;case"defaultValue":U=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(l(91));break;default:s!==c&&Tt(t,e,g,s,r,c)}Ff(t,k,U);return;case"option":for(var Q in a)if(k=a[Q],a.hasOwnProperty(Q)&&k!=null&&!r.hasOwnProperty(Q))switch(Q){case"selected":t.selected=!1;break;default:Tt(t,e,Q,null,r,k)}for(S in r)if(k=r[S],U=a[S],r.hasOwnProperty(S)&&k!==U&&(k!=null||U!=null))switch(S){case"selected":t.selected=k&&typeof k!="function"&&typeof k!="symbol";break;default:Tt(t,e,S,k,r,U)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var rt in a)k=a[rt],a.hasOwnProperty(rt)&&k!=null&&!r.hasOwnProperty(rt)&&Tt(t,e,rt,null,r,k);for(M in r)if(k=r[M],U=a[M],r.hasOwnProperty(M)&&k!==U&&(k!=null||U!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(l(137,e));break;default:Tt(t,e,M,k,r,U)}return;default:if(as(e)){for(var Nt in a)k=a[Nt],a.hasOwnProperty(Nt)&&k!==void 0&&!r.hasOwnProperty(Nt)&&Hu(t,e,Nt,void 0,r,k);for(N in r)k=r[N],U=a[N],!r.hasOwnProperty(N)||k===U||k===void 0&&U===void 0||Hu(t,e,N,k,r,U);return}}for(var w in a)k=a[w],a.hasOwnProperty(w)&&k!=null&&!r.hasOwnProperty(w)&&Tt(t,e,w,null,r,k);for(P in r)k=r[P],U=a[P],!r.hasOwnProperty(P)||k===U||k==null&&U==null||Tt(t,e,P,k,r,U)}var ju=null,Yu=null;function rl(t){return t.nodeType===9?t:t.ownerDocument}function Ym(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xm(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Xu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gu=null;function jb(){var t=window.event;return t&&t.type==="popstate"?t===Gu?!1:(Gu=t,!0):(Gu=null,!1)}var Gm=typeof setTimeout=="function"?setTimeout:void 0,Yb=typeof clearTimeout=="function"?clearTimeout:void 0,Zm=typeof Promise=="function"?Promise:void 0,Xb=typeof queueMicrotask=="function"?queueMicrotask:typeof Zm<"u"?function(t){return Zm.resolve(null).then(t).catch(Gb)}:Gm;function Gb(t){setTimeout(function(){throw t})}function Zu(t,e){var a=e,r=0;do{var s=a.nextSibling;if(t.removeChild(a),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(r===0){t.removeChild(s),Rr(e);return}r--}else a!=="$"&&a!=="$?"&&a!=="$!"||r++;a=s}while(a);Rr(e)}function Ku(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ku(a),ts(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Zb(t,e,a,r){for(;t.nodeType===1;){var s=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ni])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==s.rel||t.getAttribute("href")!==(s.href==null?null:s.href)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||t.getAttribute("title")!==(s.title==null?null:s.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(s.src==null?null:s.src)||t.getAttribute("type")!==(s.type==null?null:s.type)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var c=s.name==null?null:""+s.name;if(s.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Xe(t.nextSibling),t===null)break}return null}function Kb(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Xe(t.nextSibling),t===null))return null;return t}function Xe(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}function Km(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function Qm(t,e,a){switch(e=rl(a),t){case"html":if(t=e.documentElement,!t)throw Error(l(452));return t;case"head":if(t=e.head,!t)throw Error(l(453));return t;case"body":if(t=e.body,!t)throw Error(l(454));return t;default:throw Error(l(451))}}var Le=new Map,Fm=new Set;function ol(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var Tn=X.d;X.d={f:Qb,r:Fb,D:Jb,C:$b,L:Wb,m:Ib,X:e1,S:t1,M:n1};function Qb(){var t=Tn.f(),e=Wo();return t||e}function Fb(t){var e=Na(t);e!==null&&e.tag===5&&e.type==="form"?Th(e):Tn.r(t)}var hi=typeof document>"u"?null:document;function Jm(t,e,a){var r=hi;if(r&&typeof e=="string"&&e){var s=Re(e);s='link[rel="'+t+'"][href="'+s+'"]',typeof a=="string"&&(s+='[crossorigin="'+a+'"]'),Fm.has(s)||(Fm.add(s),t={rel:t,crossOrigin:a,href:e},r.querySelector(s)===null&&(e=r.createElement("link"),te(e,"link",t),Qt(e),r.head.appendChild(e)))}}function Jb(t){Tn.D(t),Jm("dns-prefetch",t,null)}function $b(t,e){Tn.C(t,e),Jm("preconnect",t,e)}function Wb(t,e,a){Tn.L(t,e,a);var r=hi;if(r&&t&&e){var s='link[rel="preload"][as="'+Re(e)+'"]';e==="image"&&a&&a.imageSrcSet?(s+='[imagesrcset="'+Re(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(s+='[imagesizes="'+Re(a.imageSizes)+'"]')):s+='[href="'+Re(t)+'"]';var c=s;switch(e){case"style":c=mi(t);break;case"script":c=pi(t)}Le.has(c)||(t=tt({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Le.set(c,t),r.querySelector(s)!==null||e==="style"&&r.querySelector(Sr(c))||e==="script"&&r.querySelector(Tr(c))||(e=r.createElement("link"),te(e,"link",t),Qt(e),r.head.appendChild(e)))}}function Ib(t,e){Tn.m(t,e);var a=hi;if(a&&t){var r=e&&typeof e.as=="string"?e.as:"script",s='link[rel="modulepreload"][as="'+Re(r)+'"][href="'+Re(t)+'"]',c=s;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=pi(t)}if(!Le.has(c)&&(t=tt({rel:"modulepreload",href:t},e),Le.set(c,t),a.querySelector(s)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Tr(c)))return}r=a.createElement("link"),te(r,"link",t),Qt(r),a.head.appendChild(r)}}}function t1(t,e,a){Tn.S(t,e,a);var r=hi;if(r&&t){var s=Ba(r).hoistableStyles,c=mi(t);e=e||"default";var g=s.get(c);if(!g){var y={loading:0,preload:null};if(g=r.querySelector(Sr(c)))y.loading=5;else{t=tt({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Le.get(c))&&Qu(t,a);var S=g=r.createElement("link");Qt(S),te(S,"link",t),S._p=new Promise(function(M,N){S.onload=M,S.onerror=N}),S.addEventListener("load",function(){y.loading|=1}),S.addEventListener("error",function(){y.loading|=2}),y.loading|=4,ll(g,e,r)}g={type:"stylesheet",instance:g,count:1,state:y},s.set(c,g)}}}function e1(t,e){Tn.X(t,e);var a=hi;if(a&&t){var r=Ba(a).hoistableScripts,s=pi(t),c=r.get(s);c||(c=a.querySelector(Tr(s)),c||(t=tt({src:t,async:!0},e),(e=Le.get(s))&&Fu(t,e),c=a.createElement("script"),Qt(c),te(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(s,c))}}function n1(t,e){Tn.M(t,e);var a=hi;if(a&&t){var r=Ba(a).hoistableScripts,s=pi(t),c=r.get(s);c||(c=a.querySelector(Tr(s)),c||(t=tt({src:t,async:!0,type:"module"},e),(e=Le.get(s))&&Fu(t,e),c=a.createElement("script"),Qt(c),te(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(s,c))}}function $m(t,e,a,r){var s=(s=Cn.current)?ol(s):null;if(!s)throw Error(l(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=mi(a.href),a=Ba(s).hoistableStyles,r=a.get(e),r||(r={type:"style",instance:null,count:0,state:null},a.set(e,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=mi(a.href);var c=Ba(s).hoistableStyles,g=c.get(t);if(g||(s=s.ownerDocument||s,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,g),(c=s.querySelector(Sr(t)))&&!c._p&&(g.instance=c,g.state.loading=5),Le.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Le.set(t,a),c||a1(s,t,a,g.state))),e&&r===null)throw Error(l(528,""));return g}if(e&&r!==null)throw Error(l(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=pi(a),a=Ba(s).hoistableScripts,r=a.get(e),r||(r={type:"script",instance:null,count:0,state:null},a.set(e,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,t))}}function mi(t){return'href="'+Re(t)+'"'}function Sr(t){return'link[rel="stylesheet"]['+t+"]"}function Wm(t){return tt({},t,{"data-precedence":t.precedence,precedence:null})}function a1(t,e,a,r){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?r.loading=1:(e=t.createElement("link"),r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2}),te(e,"link",a),Qt(e),t.head.appendChild(e))}function pi(t){return'[src="'+Re(t)+'"]'}function Tr(t){return"script[async]"+t}function Im(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+Re(a.href)+'"]');if(r)return e.instance=r,Qt(r),r;var s=tt({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Qt(r),te(r,"style",s),ll(r,a.precedence,t),e.instance=r;case"stylesheet":s=mi(a.href);var c=t.querySelector(Sr(s));if(c)return e.state.loading|=4,e.instance=c,Qt(c),c;r=Wm(a),(s=Le.get(s))&&Qu(r,s),c=(t.ownerDocument||t).createElement("link"),Qt(c);var g=c;return g._p=new Promise(function(y,S){g.onload=y,g.onerror=S}),te(c,"link",r),e.state.loading|=4,ll(c,a.precedence,t),e.instance=c;case"script":return c=pi(a.src),(s=t.querySelector(Tr(c)))?(e.instance=s,Qt(s),s):(r=a,(s=Le.get(c))&&(r=tt({},a),Fu(r,s)),t=t.ownerDocument||t,s=t.createElement("script"),Qt(s),te(s,"link",r),t.head.appendChild(s),e.instance=s);case"void":return null;default:throw Error(l(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,ll(r,a.precedence,t));return e.instance}function ll(t,e,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=r.length?r[r.length-1]:null,c=s,g=0;g<r.length;g++){var y=r[g];if(y.dataset.precedence===e)c=y;else if(c!==s)break}c?c.parentNode.insertBefore(t,c.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Qu(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Fu(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var sl=null;function tp(t,e,a){if(sl===null){var r=new Map,s=sl=new Map;s.set(a,r)}else s=sl,r=s.get(a),r||(r=new Map,s.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),s=0;s<a.length;s++){var c=a[s];if(!(c[Ni]||c[ne]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(e)||"";g=t+g;var y=r.get(g);y?y.push(c):r.set(g,[c])}}return r}function ep(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function i1(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function np(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ar=null;function r1(){}function o1(t,e,a){if(Ar===null)throw Error(l(475));var r=Ar;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var s=mi(a.href),c=t.querySelector(Sr(s));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(r.count++,r=ul.bind(r),t.then(r,r)),e.state.loading|=4,e.instance=c,Qt(c);return}c=t.ownerDocument||t,a=Wm(a),(s=Le.get(s))&&Qu(a,s),c=c.createElement("link"),Qt(c);var g=c;g._p=new Promise(function(y,S){g.onload=y,g.onerror=S}),te(c,"link",a),e.instance=c}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(r.count++,e=ul.bind(r),t.addEventListener("load",e),t.addEventListener("error",e))}}function l1(){if(Ar===null)throw Error(l(475));var t=Ar;return t.stylesheets&&t.count===0&&Ju(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&Ju(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function ul(){if(this.count--,this.count===0){if(this.stylesheets)Ju(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var cl=null;function Ju(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,cl=new Map,e.forEach(s1,t),cl=null,ul.call(t))}function s1(t,e){if(!(e.state.loading&4)){var a=cl.get(t);if(a)var r=a.get(null);else{a=new Map,cl.set(t,a);for(var s=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<s.length;c++){var g=s[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}s=e.instance,g=s.getAttribute("data-precedence"),c=a.get(g)||r,c===r&&a.set(null,s),a.set(g,s),this.count++,r=ul.bind(this),s.addEventListener("load",r),s.addEventListener("error",r),c?c.parentNode.insertBefore(s,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(s,t.firstChild)),e.state.loading|=4}}var Er={$$typeof:A,Provider:null,Consumer:null,_currentValue:ht,_currentValue2:ht,_threadCount:0};function u1(t,e,a,r,s,c,g,y){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.hiddenUpdates=Wl(null),this.identifierPrefix=r,this.onUncaughtError=s,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function ap(t,e,a,r,s,c,g,y,S,M,N,P){return t=new u1(t,e,a,g,y,S,M,P),e=1,c===!0&&(e|=24),c=Ne(3,null,null,e),t.current=c,c.stateNode=t,e=Rs(),e.refCount++,t.pooledCache=e,e.refCount++,c.memoizedState={element:r,isDehydrated:a,cache:e},su(c),t}function ip(t){return t?(t=Ka,t):Ka}function rp(t,e,a,r,s,c){s=ip(s),r.context===null?r.context=s:r.pendingContext=s,r=Hn(e),r.payload={element:a},c=c===void 0?null:c,c!==null&&(r.callback=c),a=jn(t,r,e),a!==null&&(ce(a,t,e),lr(a,t,e))}function op(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function $u(t,e){op(t,e),(t=t.alternate)&&op(t,e)}function lp(t){if(t.tag===13){var e=Vn(t,67108864);e!==null&&ce(e,t,67108864),$u(t,67108864)}}var fl=!0;function c1(t,e,a,r){var s=j.T;j.T=null;var c=X.p;try{X.p=2,Wu(t,e,a,r)}finally{X.p=c,j.T=s}}function f1(t,e,a,r){var s=j.T;j.T=null;var c=X.p;try{X.p=8,Wu(t,e,a,r)}finally{X.p=c,j.T=s}}function Wu(t,e,a,r){if(fl){var s=Iu(r);if(s===null)Pu(t,e,r,dl,a),up(t,r);else if(h1(s,t,e,a,r))r.stopPropagation();else if(up(t,r),e&4&&-1<d1.indexOf(t)){for(;s!==null;){var c=Na(s);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=ra(c.pendingLanes);if(g!==0){var y=c;for(y.pendingLanes|=2,y.entangledLanes|=2;g;){var S=1<<31-ge(g);y.entanglements[1]|=S,g&=~S}tn(c),(Ct&6)===0&&(Fo=Fe()+500,yr(0))}}break;case 13:y=Vn(c,2),y!==null&&ce(y,c,2),Wo(),$u(c,2)}if(c=Iu(r),c===null&&Pu(t,e,r,dl,a),c===s)break;s=c}s!==null&&r.stopPropagation()}else Pu(t,e,r,null,a)}}function Iu(t){return t=rs(t),tc(t)}var dl=null;function tc(t){if(dl=null,t=oa(t),t!==null){var e=J(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=vt(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return dl=t,null}function sp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($v()){case _f:return 2;case kf:return 8;case oo:case Wv:return 32;case Vf:return 268435456;default:return 32}default:return 32}}var ec=!1,Fn=null,Jn=null,$n=null,Or=new Map,Dr=new Map,Wn=[],d1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function up(t,e){switch(t){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":Or.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dr.delete(e.pointerId)}}function Mr(t,e,a,r,s,c){return t===null||t.nativeEvent!==c?(t={blockedOn:e,domEventName:a,eventSystemFlags:r,nativeEvent:c,targetContainers:[s]},e!==null&&(e=Na(e),e!==null&&lp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function h1(t,e,a,r,s){switch(e){case"focusin":return Fn=Mr(Fn,t,e,a,r,s),!0;case"dragenter":return Jn=Mr(Jn,t,e,a,r,s),!0;case"mouseover":return $n=Mr($n,t,e,a,r,s),!0;case"pointerover":var c=s.pointerId;return Or.set(c,Mr(Or.get(c)||null,t,e,a,r,s)),!0;case"gotpointercapture":return c=s.pointerId,Dr.set(c,Mr(Dr.get(c)||null,t,e,a,r,s)),!0}return!1}function cp(t){var e=oa(t.target);if(e!==null){var a=J(e);if(a!==null){if(e=a.tag,e===13){if(e=vt(a),e!==null){t.blockedOn=e,ly(t.priority,function(){if(a.tag===13){var r=Se(),s=Vn(a,r);s!==null&&ce(s,a,r),$u(a,r)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Iu(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);is=r,a.target.dispatchEvent(r),is=null}else return e=Na(a),e!==null&&lp(e),t.blockedOn=a,!1;e.shift()}return!0}function fp(t,e,a){hl(t)&&a.delete(e)}function m1(){ec=!1,Fn!==null&&hl(Fn)&&(Fn=null),Jn!==null&&hl(Jn)&&(Jn=null),$n!==null&&hl($n)&&($n=null),Or.forEach(fp),Dr.forEach(fp)}function ml(t,e){t.blockedOn===e&&(t.blockedOn=null,ec||(ec=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,m1)))}var pl=null;function dp(t){pl!==t&&(pl=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){pl===t&&(pl=null);for(var e=0;e<t.length;e+=3){var a=t[e],r=t[e+1],s=t[e+2];if(typeof r!="function"){if(tc(r||a)===null)continue;break}var c=Na(a);c!==null&&(t.splice(e,3),e-=3,Xs(c,{pending:!0,data:s,method:a.method,action:r},r,s))}}))}function Rr(t){function e(S){return ml(S,t)}Fn!==null&&ml(Fn,t),Jn!==null&&ml(Jn,t),$n!==null&&ml($n,t),Or.forEach(e),Dr.forEach(e);for(var a=0;a<Wn.length;a++){var r=Wn[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Wn.length&&(a=Wn[0],a.blockedOn===null);)cp(a),a.blockedOn===null&&Wn.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var s=a[r],c=a[r+1],g=s[de]||null;if(typeof c=="function")g||dp(a);else if(g){var y=null;if(c&&c.hasAttribute("formAction")){if(s=c,g=c[de]||null)y=g.formAction;else if(tc(s)!==null)continue}else y=g.action;typeof y=="function"?a[r+1]=y:(a.splice(r,3),r-=3),dp(a)}}}function nc(t){this._internalRoot=t}gl.prototype.render=nc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(l(409));var a=e.current,r=Se();rp(a,r,t,e,null,null)},gl.prototype.unmount=nc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;t.tag===0&&ci(),rp(t.current,2,null,t,null,null),Wo(),e[Ua]=null}};function gl(t){this._internalRoot=t}gl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Pf();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Wn.length&&e!==0&&e<Wn[a].priority;a++);Wn.splice(a,0,t),a===0&&cp(t)}};var hp=i.version;if(hp!=="19.0.0")throw Error(l(527,hp,"19.0.0"));X.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(l(188)):(t=Object.keys(t).join(","),Error(l(268,t)));return t=H(e),t=t!==null?it(t):null,t=t===null?null:t.stateNode,t};var p1={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:j,findFiberByHostInstance:oa,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{ki=vl.inject(p1),pe=vl}catch{}}return Cr.createRoot=function(t,e){if(!u(t))throw Error(l(299));var a=!1,r="",s=Ch,c=zh,g=_h,y=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(s=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(g=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(y=e.unstable_transitionCallbacks)),e=ap(t,1,!1,null,null,a,r,s,c,g,y,null),t[Ua]=e.current,qu(t.nodeType===8?t.parentNode:t),new nc(e)},Cr.hydrateRoot=function(t,e,a){if(!u(t))throw Error(l(299));var r=!1,s="",c=Ch,g=zh,y=_h,S=null,M=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(y=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(S=a.unstable_transitionCallbacks),a.formState!==void 0&&(M=a.formState)),e=ap(t,1,!0,e,a??null,r,s,c,g,y,S,M),e.context=ip(null),a=e.current,r=Se(),s=Hn(r),s.callback=null,jn(a,s,r),e.current.lanes=r,Ui(e,r),tn(e),t[Ua]=e.current,qu(t),new gl(e)},Cr.version="19.0.0",Cr}var Ap;function D1(){if(Ap)return rc.exports;Ap=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),rc.exports=O1(),rc.exports}var M1=D1(),zr={},Ep;function R1(){if(Ep)return zr;Ep=1,Object.defineProperty(zr,"__esModule",{value:!0}),zr.parse=d,zr.serialize=m;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,i=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,l=/^[\u0020-\u003A\u003D-\u007E]*$/,u=Object.prototype.toString,f=(()=>{const x=function(){};return x.prototype=Object.create(null),x})();function d(x,A){const T=new f,E=x.length;if(E<2)return T;const C=(A==null?void 0:A.decode)||v;let R=0;do{const B=x.indexOf("=",R);if(B===-1)break;const V=x.indexOf(";",R),G=V===-1?E:V;if(B>G){R=x.lastIndexOf(";",B-1)+1;continue}const q=p(x,R,B),W=h(x,B,q),ot=x.slice(q,W);if(T[ot]===void 0){let K=p(x,B+1,G),j=h(x,G,K);const tt=C(x.slice(K,j));T[ot]=tt}R=G+1}while(R<E);return T}function p(x,A,T){do{const E=x.charCodeAt(A);if(E!==32&&E!==9)return A}while(++A<T);return T}function h(x,A,T){for(;A>T;){const E=x.charCodeAt(--A);if(E!==32&&E!==9)return A+1}return T}function m(x,A,T){const E=(T==null?void 0:T.encode)||encodeURIComponent;if(!n.test(x))throw new TypeError(`argument name is invalid: ${x}`);const C=E(A);if(!i.test(C))throw new TypeError(`argument val is invalid: ${A}`);let R=x+"="+C;if(!T)return R;if(T.maxAge!==void 0){if(!Number.isInteger(T.maxAge))throw new TypeError(`option maxAge is invalid: ${T.maxAge}`);R+="; Max-Age="+T.maxAge}if(T.domain){if(!o.test(T.domain))throw new TypeError(`option domain is invalid: ${T.domain}`);R+="; Domain="+T.domain}if(T.path){if(!l.test(T.path))throw new TypeError(`option path is invalid: ${T.path}`);R+="; Path="+T.path}if(T.expires){if(!b(T.expires)||!Number.isFinite(T.expires.valueOf()))throw new TypeError(`option expires is invalid: ${T.expires}`);R+="; Expires="+T.expires.toUTCString()}if(T.httpOnly&&(R+="; HttpOnly"),T.secure&&(R+="; Secure"),T.partitioned&&(R+="; Partitioned"),T.priority)switch(typeof T.priority=="string"?T.priority.toLowerCase():void 0){case"low":R+="; Priority=Low";break;case"medium":R+="; Priority=Medium";break;case"high":R+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${T.priority}`)}if(T.sameSite)switch(typeof T.sameSite=="string"?T.sameSite.toLowerCase():T.sameSite){case!0:case"strict":R+="; SameSite=Strict";break;case"lax":R+="; SameSite=Lax";break;case"none":R+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${T.sameSite}`)}return R}function v(x){if(x.indexOf("%")===-1)return x;try{return decodeURIComponent(x)}catch{return x}}function b(x){return u.call(x)==="[object Date]"}return zr}R1();/**
 * react-router v7.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Op="popstate";function w1(n={}){function i(l,u){let{pathname:f,search:d,hash:p}=l.location;return Ec("",{pathname:f,search:d,hash:p},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function o(l,u){return typeof u=="string"?u:Hr(u)}return z1(i,o,null,n)}function _t(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function an(n,i){if(!n){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function C1(){return Math.random().toString(36).substring(2,10)}function Dp(n,i){return{usr:n.state,key:n.key,idx:i}}function Ec(n,i,o=null,l){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof i=="string"?Ri(i):i,state:o,key:i&&i.key||l||C1()}}function Hr({pathname:n="/",search:i="",hash:o=""}){return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function Ri(n){let i={};if(n){let o=n.indexOf("#");o>=0&&(i.hash=n.substring(o),n=n.substring(0,o));let l=n.indexOf("?");l>=0&&(i.search=n.substring(l),n=n.substring(0,l)),n&&(i.pathname=n)}return i}function z1(n,i,o,l={}){let{window:u=document.defaultView,v5Compat:f=!1}=l,d=u.history,p="POP",h=null,m=v();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function v(){return(d.state||{idx:null}).idx}function b(){p="POP";let C=v(),R=C==null?null:C-m;m=C,h&&h({action:p,location:E.location,delta:R})}function x(C,R){p="PUSH";let B=Ec(E.location,C,R);m=v()+1;let V=Dp(B,m),G=E.createHref(B);try{d.pushState(V,"",G)}catch(q){if(q instanceof DOMException&&q.name==="DataCloneError")throw q;u.location.assign(G)}f&&h&&h({action:p,location:E.location,delta:1})}function A(C,R){p="REPLACE";let B=Ec(E.location,C,R);m=v();let V=Dp(B,m),G=E.createHref(B);d.replaceState(V,"",G),f&&h&&h({action:p,location:E.location,delta:0})}function T(C){let R=u.location.origin!=="null"?u.location.origin:u.location.href,B=typeof C=="string"?C:Hr(C);return B=B.replace(/ $/,"%20"),_t(R,`No window.location.(origin|href) available to create URL for href: ${B}`),new URL(B,R)}let E={get action(){return p},get location(){return n(u,d)},listen(C){if(h)throw new Error("A history only accepts one active listener");return u.addEventListener(Op,b),h=C,()=>{u.removeEventListener(Op,b),h=null}},createHref(C){return i(u,C)},createURL:T,encodeLocation(C){let R=T(C);return{pathname:R.pathname,search:R.search,hash:R.hash}},push:x,replace:A,go(C){return d.go(C)}};return E}function tg(n,i,o="/"){return _1(n,i,o,!1)}function _1(n,i,o,l){let u=typeof i=="string"?Ri(i):i,f=Mn(u.pathname||"/",o);if(f==null)return null;let d=eg(n);k1(d);let p=null;for(let h=0;p==null&&h<d.length;++h){let m=X1(f);p=j1(d[h],m,l)}return p}function eg(n,i=[],o=[],l=""){let u=(f,d,p)=>{let h={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};h.relativePath.startsWith("/")&&(_t(h.relativePath.startsWith(l),`Absolute route path "${h.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(l.length));let m=En([l,h.relativePath]),v=o.concat(h);f.children&&f.children.length>0&&(_t(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),eg(f.children,i,v,m)),!(f.path==null&&!f.index)&&i.push({path:m,score:P1(m,f.index),routesMeta:v})};return n.forEach((f,d)=>{var p;if(f.path===""||!((p=f.path)!=null&&p.includes("?")))u(f,d);else for(let h of ng(f.path))u(f,d,h)}),i}function ng(n){let i=n.split("/");if(i.length===0)return[];let[o,...l]=i,u=o.endsWith("?"),f=o.replace(/\?$/,"");if(l.length===0)return u?[f,""]:[f];let d=ng(l.join("/")),p=[];return p.push(...d.map(h=>h===""?f:[f,h].join("/"))),u&&p.push(...d),p.map(h=>n.startsWith("/")&&h===""?"/":h)}function k1(n){n.sort((i,o)=>i.score!==o.score?o.score-i.score:H1(i.routesMeta.map(l=>l.childrenIndex),o.routesMeta.map(l=>l.childrenIndex)))}var V1=/^:[\w-]+$/,U1=3,N1=2,B1=1,L1=10,q1=-2,Mp=n=>n==="*";function P1(n,i){let o=n.split("/"),l=o.length;return o.some(Mp)&&(l+=q1),i&&(l+=N1),o.filter(u=>!Mp(u)).reduce((u,f)=>u+(V1.test(f)?U1:f===""?B1:L1),l)}function H1(n,i){return n.length===i.length&&n.slice(0,-1).every((l,u)=>l===i[u])?n[n.length-1]-i[i.length-1]:0}function j1(n,i,o=!1){let{routesMeta:l}=n,u={},f="/",d=[];for(let p=0;p<l.length;++p){let h=l[p],m=p===l.length-1,v=f==="/"?i:i.slice(f.length)||"/",b=wl({path:h.relativePath,caseSensitive:h.caseSensitive,end:m},v),x=h.route;if(!b&&m&&o&&!l[l.length-1].route.index&&(b=wl({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},v)),!b)return null;Object.assign(u,b.params),d.push({params:u,pathname:En([f,b.pathname]),pathnameBase:Q1(En([f,b.pathnameBase])),route:x}),b.pathnameBase!=="/"&&(f=En([f,b.pathnameBase]))}return d}function wl(n,i){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[o,l]=Y1(n.path,n.caseSensitive,n.end),u=i.match(o);if(!u)return null;let f=u[0],d=f.replace(/(.)\/+$/,"$1"),p=u.slice(1);return{params:l.reduce((m,{paramName:v,isOptional:b},x)=>{if(v==="*"){let T=p[x]||"";d=f.slice(0,f.length-T.length).replace(/(.)\/+$/,"$1")}const A=p[x];return b&&!A?m[v]=void 0:m[v]=(A||"").replace(/%2F/g,"/"),m},{}),pathname:f,pathnameBase:d,pattern:n}}function Y1(n,i=!1,o=!0){an(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let l=[],u="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,h)=>(l.push({paramName:p,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(l.push({paramName:"*"}),u+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?u+="\\/*$":n!==""&&n!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,i?void 0:"i"),l]}function X1(n){try{return n.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return an(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),n}}function Mn(n,i){if(i==="/")return n;if(!n.toLowerCase().startsWith(i.toLowerCase()))return null;let o=i.endsWith("/")?i.length-1:i.length,l=n.charAt(o);return l&&l!=="/"?null:n.slice(o)||"/"}function G1(n,i="/"){let{pathname:o,search:l="",hash:u=""}=typeof n=="string"?Ri(n):n;return{pathname:o?o.startsWith("/")?o:Z1(o,i):i,search:F1(l),hash:J1(u)}}function Z1(n,i){let o=i.replace(/\/+$/,"").split("/");return n.split("/").forEach(u=>{u===".."?o.length>1&&o.pop():u!=="."&&o.push(u)}),o.length>1?o.join("/"):"/"}function uc(n,i,o,l){return`Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function K1(n){return n.filter((i,o)=>o===0||i.route.path&&i.route.path.length>0)}function ag(n){let i=K1(n);return i.map((o,l)=>l===i.length-1?o.pathname:o.pathnameBase)}function ig(n,i,o,l=!1){let u;typeof n=="string"?u=Ri(n):(u={...n},_t(!u.pathname||!u.pathname.includes("?"),uc("?","pathname","search",u)),_t(!u.pathname||!u.pathname.includes("#"),uc("#","pathname","hash",u)),_t(!u.search||!u.search.includes("#"),uc("#","search","hash",u)));let f=n===""||u.pathname==="",d=f?"/":u.pathname,p;if(d==null)p=o;else{let b=i.length-1;if(!l&&d.startsWith("..")){let x=d.split("/");for(;x[0]==="..";)x.shift(),b-=1;u.pathname=x.join("/")}p=b>=0?i[b]:"/"}let h=G1(u,p),m=d&&d!=="/"&&d.endsWith("/"),v=(f||d===".")&&o.endsWith("/");return!h.pathname.endsWith("/")&&(m||v)&&(h.pathname+="/"),h}var En=n=>n.join("/").replace(/\/\/+/g,"/"),Q1=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),F1=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,J1=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function $1(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var rg=["POST","PUT","PATCH","DELETE"];new Set(rg);var W1=["GET",...rg];new Set(W1);var wi=_.createContext(null);wi.displayName="DataRouter";var Bl=_.createContext(null);Bl.displayName="DataRouterState";var og=_.createContext({isTransitioning:!1});og.displayName="ViewTransition";var I1=_.createContext(new Map);I1.displayName="Fetchers";var tx=_.createContext(null);tx.displayName="Await";var rn=_.createContext(null);rn.displayName="Navigation";var Fr=_.createContext(null);Fr.displayName="Location";var wn=_.createContext({outlet:null,matches:[],isDataRoute:!1});wn.displayName="Route";var Qc=_.createContext(null);Qc.displayName="RouteError";function ex(n,{relative:i}={}){_t(Jr(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:l}=_.useContext(rn),{hash:u,pathname:f,search:d}=$r(n,{relative:i}),p=f;return o!=="/"&&(p=f==="/"?o:En([o,f])),l.createHref({pathname:p,search:d,hash:u})}function Jr(){return _.useContext(Fr)!=null}function _a(){return _t(Jr(),"useLocation() may be used only in the context of a <Router> component."),_.useContext(Fr).location}var lg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function sg(n){_.useContext(rn).static||_.useLayoutEffect(n)}function nx(){let{isDataRoute:n}=_.useContext(wn);return n?px():ax()}function ax(){_t(Jr(),"useNavigate() may be used only in the context of a <Router> component.");let n=_.useContext(wi),{basename:i,navigator:o}=_.useContext(rn),{matches:l}=_.useContext(wn),{pathname:u}=_a(),f=JSON.stringify(ag(l)),d=_.useRef(!1);return sg(()=>{d.current=!0}),_.useCallback((h,m={})=>{if(an(d.current,lg),!d.current)return;if(typeof h=="number"){o.go(h);return}let v=ig(h,JSON.parse(f),u,m.relative==="path");n==null&&i!=="/"&&(v.pathname=v.pathname==="/"?i:En([i,v.pathname])),(m.replace?o.replace:o.push)(v,m.state,m)},[i,o,f,u,n])}_.createContext(null);function $r(n,{relative:i}={}){let{matches:o}=_.useContext(wn),{pathname:l}=_a(),u=JSON.stringify(ag(o));return _.useMemo(()=>ig(n,JSON.parse(u),l,i==="path"),[n,u,l,i])}function ix(n,i){return ug(n,i)}function ug(n,i,o,l){var B;_t(Jr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u,static:f}=_.useContext(rn),{matches:d}=_.useContext(wn),p=d[d.length-1],h=p?p.params:{},m=p?p.pathname:"/",v=p?p.pathnameBase:"/",b=p&&p.route;{let V=b&&b.path||"";cg(m,!b||V.endsWith("*")||V.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V==="/"?"*":`${V}/*`}">.`)}let x=_a(),A;if(i){let V=typeof i=="string"?Ri(i):i;_t(v==="/"||((B=V.pathname)==null?void 0:B.startsWith(v)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${V.pathname}" was given in the \`location\` prop.`),A=V}else A=x;let T=A.pathname||"/",E=T;if(v!=="/"){let V=v.replace(/^\//,"").split("/");E="/"+T.replace(/^\//,"").split("/").slice(V.length).join("/")}let C=!f&&o&&o.matches&&o.matches.length>0?o.matches:tg(n,{pathname:E});an(b||C!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),an(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=ux(C&&C.map(V=>Object.assign({},V,{params:Object.assign({},h,V.params),pathname:En([v,u.encodeLocation?u.encodeLocation(V.pathname).pathname:V.pathname]),pathnameBase:V.pathnameBase==="/"?v:En([v,u.encodeLocation?u.encodeLocation(V.pathnameBase).pathname:V.pathnameBase])})),d,o,l);return i&&R?_.createElement(Fr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},R):R}function rx(){let n=mx(),i=$1(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),o=n instanceof Error?n.stack:null,l="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:l},f={padding:"2px 4px",backgroundColor:l},d=null;return console.error("Error handled by React Router default ErrorBoundary:",n),d=_.createElement(_.Fragment,null,_.createElement("p",null,"💿 Hey developer 👋"),_.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",_.createElement("code",{style:f},"ErrorBoundary")," or"," ",_.createElement("code",{style:f},"errorElement")," prop on your route.")),_.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},i),o?_.createElement("pre",{style:u},o):null,d)}var ox=_.createElement(rx,null),lx=class extends _.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){console.error("React Router caught the following error during render",n,i)}render(){return this.state.error!==void 0?_.createElement(wn.Provider,{value:this.props.routeContext},_.createElement(Qc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function sx({routeContext:n,match:i,children:o}){let l=_.useContext(wi);return l&&l.static&&l.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=i.route.id),_.createElement(wn.Provider,{value:n},o)}function ux(n,i=[],o=null,l=null){if(n==null){if(!o)return null;if(o.errors)n=o.matches;else if(i.length===0&&!o.initialized&&o.matches.length>0)n=o.matches;else return null}let u=n,f=o==null?void 0:o.errors;if(f!=null){let h=u.findIndex(m=>m.route.id&&(f==null?void 0:f[m.route.id])!==void 0);_t(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,h+1))}let d=!1,p=-1;if(o)for(let h=0;h<u.length;h++){let m=u[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(p=h),m.route.id){let{loaderData:v,errors:b}=o,x=m.route.loader&&!v.hasOwnProperty(m.route.id)&&(!b||b[m.route.id]===void 0);if(m.route.lazy||x){d=!0,p>=0?u=u.slice(0,p+1):u=[u[0]];break}}}return u.reduceRight((h,m,v)=>{let b,x=!1,A=null,T=null;o&&(b=f&&m.route.id?f[m.route.id]:void 0,A=m.route.errorElement||ox,d&&(p<0&&v===0?(cg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,T=null):p===v&&(x=!0,T=m.route.hydrateFallbackElement||null)));let E=i.concat(u.slice(0,v+1)),C=()=>{let R;return b?R=A:x?R=T:m.route.Component?R=_.createElement(m.route.Component,null):m.route.element?R=m.route.element:R=h,_.createElement(sx,{match:m,routeContext:{outlet:h,matches:E,isDataRoute:o!=null},children:R})};return o&&(m.route.ErrorBoundary||m.route.errorElement||v===0)?_.createElement(lx,{location:o.location,revalidation:o.revalidation,component:A,error:b,children:C(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):C()},null)}function Fc(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function cx(n){let i=_.useContext(wi);return _t(i,Fc(n)),i}function fx(n){let i=_.useContext(Bl);return _t(i,Fc(n)),i}function dx(n){let i=_.useContext(wn);return _t(i,Fc(n)),i}function Jc(n){let i=dx(n),o=i.matches[i.matches.length-1];return _t(o.route.id,`${n} can only be used on routes that contain a unique "id"`),o.route.id}function hx(){return Jc("useRouteId")}function mx(){var l;let n=_.useContext(Qc),i=fx("useRouteError"),o=Jc("useRouteError");return n!==void 0?n:(l=i.errors)==null?void 0:l[o]}function px(){let{router:n}=cx("useNavigate"),i=Jc("useNavigate"),o=_.useRef(!1);return sg(()=>{o.current=!0}),_.useCallback(async(u,f={})=>{an(o.current,lg),o.current&&(typeof u=="number"?n.navigate(u):await n.navigate(u,{fromRouteId:i,...f}))},[n,i])}var Rp={};function cg(n,i,o){!i&&!Rp[n]&&(Rp[n]=!0,an(!1,o))}_.memo(gx);function gx({routes:n,future:i,state:o}){return ug(n,void 0,o,i)}function Oc(n){_t(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function vx({basename:n="/",children:i=null,location:o,navigationType:l="POP",navigator:u,static:f=!1}){_t(!Jr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),p=_.useMemo(()=>({basename:d,navigator:u,static:f,future:{}}),[d,u,f]);typeof o=="string"&&(o=Ri(o));let{pathname:h="/",search:m="",hash:v="",state:b=null,key:x="default"}=o,A=_.useMemo(()=>{let T=Mn(h,d);return T==null?null:{location:{pathname:T,search:m,hash:v,state:b,key:x},navigationType:l}},[d,h,m,v,b,x,l]);return an(A!=null,`<Router basename="${d}"> is not able to match the URL "${h}${m}${v}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:_.createElement(rn.Provider,{value:p},_.createElement(Fr.Provider,{children:i,value:A}))}function yx({children:n,location:i}){return ix(Dc(n),i)}function Dc(n,i=[]){let o=[];return _.Children.forEach(n,(l,u)=>{if(!_.isValidElement(l))return;let f=[...i,u];if(l.type===_.Fragment){o.push.apply(o,Dc(l.props.children,f));return}_t(l.type===Oc,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),_t(!l.props.index||!l.props.children,"An index route cannot have child routes.");let d={id:l.props.id||f.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(d.children=Dc(l.props.children,f)),o.push(d)}),o}var El="get",Ol="application/x-www-form-urlencoded";function Ll(n){return n!=null&&typeof n.tagName=="string"}function bx(n){return Ll(n)&&n.tagName.toLowerCase()==="button"}function xx(n){return Ll(n)&&n.tagName.toLowerCase()==="form"}function Sx(n){return Ll(n)&&n.tagName.toLowerCase()==="input"}function Tx(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Ax(n,i){return n.button===0&&(!i||i==="_self")&&!Tx(n)}var yl=null;function Ex(){if(yl===null)try{new FormData(document.createElement("form"),0),yl=!1}catch{yl=!0}return yl}var Ox=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function cc(n){return n!=null&&!Ox.has(n)?(an(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ol}"`),null):n}function Dx(n,i){let o,l,u,f,d;if(xx(n)){let p=n.getAttribute("action");l=p?Mn(p,i):null,o=n.getAttribute("method")||El,u=cc(n.getAttribute("enctype"))||Ol,f=new FormData(n)}else if(bx(n)||Sx(n)&&(n.type==="submit"||n.type==="image")){let p=n.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=n.getAttribute("formaction")||p.getAttribute("action");if(l=h?Mn(h,i):null,o=n.getAttribute("formmethod")||p.getAttribute("method")||El,u=cc(n.getAttribute("formenctype"))||cc(p.getAttribute("enctype"))||Ol,f=new FormData(p,n),!Ex()){let{name:m,type:v,value:b}=n;if(v==="image"){let x=m?`${m}.`:"";f.append(`${x}x`,"0"),f.append(`${x}y`,"0")}else m&&f.append(m,b)}}else{if(Ll(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=El,l=null,u=Ol,d=n}return f&&u==="text/plain"&&(d=f,f=void 0),{action:l,method:o.toLowerCase(),encType:u,formData:f,body:d}}function $c(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}async function Mx(n,i){if(n.id in i)return i[n.id];try{let o=await import(n.module);return i[n.id]=o,o}catch(o){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Rx(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function wx(n,i,o){let l=await Promise.all(n.map(async u=>{let f=i.routes[u.route.id];if(f){let d=await Mx(f,o);return d.links?d.links():[]}return[]}));return kx(l.flat(1).filter(Rx).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function wp(n,i,o,l,u,f){let d=(h,m)=>o[m]?h.route.id!==o[m].route.id:!0,p=(h,m)=>{var v;return o[m].pathname!==h.pathname||((v=o[m].route.path)==null?void 0:v.endsWith("*"))&&o[m].params["*"]!==h.params["*"]};return f==="assets"?i.filter((h,m)=>d(h,m)||p(h,m)):f==="data"?i.filter((h,m)=>{var b;let v=l.routes[h.route.id];if(!v||!v.hasLoader)return!1;if(d(h,m)||p(h,m))return!0;if(h.route.shouldRevalidate){let x=h.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:((b=o[0])==null?void 0:b.params)||{},nextUrl:new URL(n,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function Cx(n,i,{includeHydrateFallback:o}={}){return zx(n.map(l=>{let u=i.routes[l.route.id];if(!u)return[];let f=[u.module];return u.clientActionModule&&(f=f.concat(u.clientActionModule)),u.clientLoaderModule&&(f=f.concat(u.clientLoaderModule)),o&&u.hydrateFallbackModule&&(f=f.concat(u.hydrateFallbackModule)),u.imports&&(f=f.concat(u.imports)),f}).flat(1))}function zx(n){return[...new Set(n)]}function _x(n){let i={},o=Object.keys(n).sort();for(let l of o)i[l]=n[l];return i}function kx(n,i){let o=new Set;return new Set(i),n.reduce((l,u)=>{let f=JSON.stringify(_x(u));return o.has(f)||(o.add(f),l.push({key:f,link:u})),l},[])}function Vx(n,i){let o=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return o.pathname==="/"?o.pathname="_root.data":i&&Mn(o.pathname,i)==="/"?o.pathname=`${i.replace(/\/$/,"")}/_root.data`:o.pathname=`${o.pathname.replace(/\/$/,"")}.data`,o}function fg(){let n=_.useContext(wi);return $c(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function Ux(){let n=_.useContext(Bl);return $c(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Wc=_.createContext(void 0);Wc.displayName="FrameworkContext";function dg(){let n=_.useContext(Wc);return $c(n,"You must render this element inside a <HydratedRouter> element"),n}function Nx(n,i){let o=_.useContext(Wc),[l,u]=_.useState(!1),[f,d]=_.useState(!1),{onFocus:p,onBlur:h,onMouseEnter:m,onMouseLeave:v,onTouchStart:b}=i,x=_.useRef(null);_.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let E=R=>{R.forEach(B=>{d(B.isIntersecting)})},C=new IntersectionObserver(E,{threshold:.5});return x.current&&C.observe(x.current),()=>{C.disconnect()}}},[n]),_.useEffect(()=>{if(l){let E=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(E)}}},[l]);let A=()=>{u(!0)},T=()=>{u(!1),d(!1)};return o?n!=="intent"?[f,x,{}]:[f,x,{onFocus:_r(p,A),onBlur:_r(h,T),onMouseEnter:_r(m,A),onMouseLeave:_r(v,T),onTouchStart:_r(b,A)}]:[!1,x,{}]}function _r(n,i){return o=>{n&&n(o),o.defaultPrevented||i(o)}}function Bx({page:n,...i}){let{router:o}=fg(),l=_.useMemo(()=>tg(o.routes,n,o.basename),[o.routes,n,o.basename]);return l?_.createElement(qx,{page:n,matches:l,...i}):null}function Lx(n){let{manifest:i,routeModules:o}=dg(),[l,u]=_.useState([]);return _.useEffect(()=>{let f=!1;return wx(n,i,o).then(d=>{f||u(d)}),()=>{f=!0}},[n,i,o]),l}function qx({page:n,matches:i,...o}){let l=_a(),{manifest:u,routeModules:f}=dg(),{basename:d}=fg(),{loaderData:p,matches:h}=Ux(),m=_.useMemo(()=>wp(n,i,h,u,l,"data"),[n,i,h,u,l]),v=_.useMemo(()=>wp(n,i,h,u,l,"assets"),[n,i,h,u,l]),b=_.useMemo(()=>{if(n===l.pathname+l.search+l.hash)return[];let T=new Set,E=!1;if(i.forEach(R=>{var V;let B=u.routes[R.route.id];!B||!B.hasLoader||(!m.some(G=>G.route.id===R.route.id)&&R.route.id in p&&((V=f[R.route.id])!=null&&V.shouldRevalidate)||B.hasClientLoader?E=!0:T.add(R.route.id))}),T.size===0)return[];let C=Vx(n,d);return E&&T.size>0&&C.searchParams.set("_routes",i.filter(R=>T.has(R.route.id)).map(R=>R.route.id).join(",")),[C.pathname+C.search]},[d,p,l,u,m,i,n,f]),x=_.useMemo(()=>Cx(v,u),[v,u]),A=Lx(v);return _.createElement(_.Fragment,null,b.map(T=>_.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...o})),x.map(T=>_.createElement("link",{key:T,rel:"modulepreload",href:T,...o})),A.map(({key:T,link:E})=>_.createElement("link",{key:T,...E})))}function Px(...n){return i=>{n.forEach(o=>{typeof o=="function"?o(i):o!=null&&(o.current=i)})}}var hg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{hg&&(window.__reactRouterVersion="7.3.0")}catch{}function Hx({basename:n,children:i,window:o}){let l=_.useRef();l.current==null&&(l.current=w1({window:o,v5Compat:!0}));let u=l.current,[f,d]=_.useState({action:u.action,location:u.location}),p=_.useCallback(h=>{_.startTransition(()=>d(h))},[d]);return _.useLayoutEffect(()=>u.listen(p),[u,p]),_.createElement(vx,{basename:n,children:i,location:f.location,navigationType:f.action,navigator:u})}var mg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pg=_.forwardRef(function({onClick:i,discover:o="render",prefetch:l="none",relative:u,reloadDocument:f,replace:d,state:p,target:h,to:m,preventScrollReset:v,viewTransition:b,...x},A){let{basename:T}=_.useContext(rn),E=typeof m=="string"&&mg.test(m),C,R=!1;if(typeof m=="string"&&E&&(C=m,hg))try{let j=new URL(window.location.href),tt=m.startsWith("//")?new URL(j.protocol+m):new URL(m),kt=Mn(tt.pathname,T);tt.origin===j.origin&&kt!=null?m=kt+tt.search+tt.hash:R=!0}catch{an(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let B=ex(m,{relative:u}),[V,G,q]=Nx(l,x),W=Gx(m,{replace:d,state:p,target:h,preventScrollReset:v,relative:u,viewTransition:b});function ot(j){i&&i(j),j.defaultPrevented||W(j)}let K=_.createElement("a",{...x,...q,href:C||B,onClick:R||f?i:ot,ref:Px(A,G),target:h,"data-discover":!E&&o==="render"?"true":void 0});return V&&!E?_.createElement(_.Fragment,null,K,_.createElement(Bx,{page:B})):K});pg.displayName="Link";var jx=_.forwardRef(function({"aria-current":i="page",caseSensitive:o=!1,className:l="",end:u=!1,style:f,to:d,viewTransition:p,children:h,...m},v){let b=$r(d,{relative:m.relative}),x=_a(),A=_.useContext(Bl),{navigator:T,basename:E}=_.useContext(rn),C=A!=null&&Jx(b)&&p===!0,R=T.encodeLocation?T.encodeLocation(b).pathname:b.pathname,B=x.pathname,V=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;o||(B=B.toLowerCase(),V=V?V.toLowerCase():null,R=R.toLowerCase()),V&&E&&(V=Mn(V,E)||V);const G=R!=="/"&&R.endsWith("/")?R.length-1:R.length;let q=B===R||!u&&B.startsWith(R)&&B.charAt(G)==="/",W=V!=null&&(V===R||!u&&V.startsWith(R)&&V.charAt(R.length)==="/"),ot={isActive:q,isPending:W,isTransitioning:C},K=q?i:void 0,j;typeof l=="function"?j=l(ot):j=[l,q?"active":null,W?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let tt=typeof f=="function"?f(ot):f;return _.createElement(pg,{...m,"aria-current":K,className:j,ref:v,style:tt,to:d,viewTransition:p},typeof h=="function"?h(ot):h)});jx.displayName="NavLink";var Yx=_.forwardRef(({discover:n="render",fetcherKey:i,navigate:o,reloadDocument:l,replace:u,state:f,method:d=El,action:p,onSubmit:h,relative:m,preventScrollReset:v,viewTransition:b,...x},A)=>{let T=Qx(),E=Fx(p,{relative:m}),C=d.toLowerCase()==="get"?"get":"post",R=typeof p=="string"&&mg.test(p),B=V=>{if(h&&h(V),V.defaultPrevented)return;V.preventDefault();let G=V.nativeEvent.submitter,q=(G==null?void 0:G.getAttribute("formmethod"))||d;T(G||V.currentTarget,{fetcherKey:i,method:q,navigate:o,replace:u,state:f,relative:m,preventScrollReset:v,viewTransition:b})};return _.createElement("form",{ref:A,method:C,action:E,onSubmit:l?h:B,...x,"data-discover":!R&&n==="render"?"true":void 0})});Yx.displayName="Form";function Xx(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gg(n){let i=_.useContext(wi);return _t(i,Xx(n)),i}function Gx(n,{target:i,replace:o,state:l,preventScrollReset:u,relative:f,viewTransition:d}={}){let p=nx(),h=_a(),m=$r(n,{relative:f});return _.useCallback(v=>{if(Ax(v,i)){v.preventDefault();let b=o!==void 0?o:Hr(h)===Hr(m);p(n,{replace:b,state:l,preventScrollReset:u,relative:f,viewTransition:d})}},[h,p,m,o,l,i,n,u,f,d])}var Zx=0,Kx=()=>`__${String(++Zx)}__`;function Qx(){let{router:n}=gg("useSubmit"),{basename:i}=_.useContext(rn),o=hx();return _.useCallback(async(l,u={})=>{let{action:f,method:d,encType:p,formData:h,body:m}=Dx(l,i);if(u.navigate===!1){let v=u.fetcherKey||Kx();await n.fetch(v,o,u.action||f,{preventScrollReset:u.preventScrollReset,formData:h,body:m,formMethod:u.method||d,formEncType:u.encType||p,flushSync:u.flushSync})}else await n.navigate(u.action||f,{preventScrollReset:u.preventScrollReset,formData:h,body:m,formMethod:u.method||d,formEncType:u.encType||p,replace:u.replace,state:u.state,fromRouteId:o,flushSync:u.flushSync,viewTransition:u.viewTransition})},[n,i,o])}function Fx(n,{relative:i}={}){let{basename:o}=_.useContext(rn),l=_.useContext(wn);_t(l,"useFormAction must be used inside a RouteContext");let[u]=l.matches.slice(-1),f={...$r(n||".",{relative:i})},d=_a();if(n==null){f.search=d.search;let p=new URLSearchParams(f.search),h=p.getAll("index");if(h.some(v=>v==="")){p.delete("index"),h.filter(b=>b).forEach(b=>p.append("index",b));let v=p.toString();f.search=v?`?${v}`:""}}return(!n||n===".")&&u.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(f.pathname=f.pathname==="/"?o:En([o,f.pathname])),Hr(f)}function Jx(n,i={}){let o=_.useContext(og);_t(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=gg("useViewTransitionState"),u=$r(n,{relative:i.relative});if(!o.isTransitioning)return!1;let f=Mn(o.currentLocation.pathname,l)||o.currentLocation.pathname,d=Mn(o.nextLocation.pathname,l)||o.nextLocation.pathname;return wl(u.pathname,d)!=null||wl(u.pathname,f)!=null}new TextEncoder;const vg=_.createContext({});function $x(n){const i=_.useRef(null);return i.current===null&&(i.current=n()),i.current}const Ic=typeof window<"u",Wx=Ic?_.useLayoutEffect:_.useEffect,tf=_.createContext(null),yg=_.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function Ix(n=!0){const i=_.useContext(tf);if(i===null)return[!0,null];const{isPresent:o,onExitComplete:l,register:u}=i,f=_.useId();_.useEffect(()=>{if(n)return u(f)},[n]);const d=_.useCallback(()=>n&&l&&l(f),[f,l,n]);return!o&&l?[!1,d]:[!0]}function ef(n,i){n.indexOf(i)===-1&&n.push(i)}function nf(n,i){const o=n.indexOf(i);o>-1&&n.splice(o,1)}const Ae=n=>n;let bg=Ae;const t5={useManualTiming:!1};function af(n){let i;return()=>(i===void 0&&(i=n()),i)}const Oi=(n,i,o)=>{const l=i-n;return l===0?1:(o-n)/l};class rf{constructor(){this.subscriptions=[]}add(i){return ef(this.subscriptions,i),()=>nf(this.subscriptions,i)}notify(i,o,l){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](i,o,l);else for(let f=0;f<u;f++){const d=this.subscriptions[f];d&&d(i,o,l)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const On=n=>n*1e3,Dn=n=>n/1e3;function xg(n,i){return i?n*(1e3/i):0}const e5=af(()=>window.ScrollTimeline!==void 0);class n5{constructor(i){this.stop=()=>this.runAll("stop"),this.animations=i.filter(Boolean)}get finished(){return Promise.all(this.animations.map(i=>"finished"in i?i.finished:i))}getAll(i){return this.animations[0][i]}setAll(i,o){for(let l=0;l<this.animations.length;l++)this.animations[l][i]=o}attachTimeline(i,o){const l=this.animations.map(u=>{if(e5()&&u.attachTimeline)return u.attachTimeline(i);if(typeof o=="function")return o(u)});return()=>{l.forEach((u,f)=>{u&&u(),this.animations[f].stop()})}}get time(){return this.getAll("time")}set time(i){this.setAll("time",i)}get speed(){return this.getAll("speed")}set speed(i){this.setAll("speed",i)}get startTime(){return this.getAll("startTime")}get duration(){let i=0;for(let o=0;o<this.animations.length;o++)i=Math.max(i,this.animations[o].duration);return i}runAll(i){this.animations.forEach(o=>o[i]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class a5 extends n5{then(i,o){return Promise.all(this.animations).then(i).catch(o)}}function of(n,i){return n?n[i]||n.default||n:void 0}const Mc=2e4;function Sg(n){let i=0;const o=50;let l=n.next(i);for(;!l.done&&i<Mc;)i+=o,l=n.next(i);return i>=Mc?1/0:i}function lf(n){return typeof n=="function"}function Cp(n,i){n.timeline=i,n.onfinish=null}const sf=n=>Array.isArray(n)&&typeof n[0]=="number",i5={linearEasing:void 0};function r5(n,i){const o=af(n);return()=>{var l;return(l=i5[i])!==null&&l!==void 0?l:o()}}const Cl=r5(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Tg=(n,i,o=10)=>{let l="";const u=Math.max(Math.round(i/o),2);for(let f=0;f<u;f++)l+=n(Oi(0,u-1,f))+", ";return`linear(${l.substring(0,l.length-2)})`};function Ag(n){return!!(typeof n=="function"&&Cl()||!n||typeof n=="string"&&(n in Rc||Cl())||sf(n)||Array.isArray(n)&&n.every(Ag))}const Vr=([n,i,o,l])=>`cubic-bezier(${n}, ${i}, ${o}, ${l})`,Rc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Vr([0,.65,.55,1]),circOut:Vr([.55,0,1,.45]),backIn:Vr([.31,.01,.66,-.59]),backOut:Vr([.33,1.53,.69,.99])};function Eg(n,i){if(n)return typeof n=="function"&&Cl()?Tg(n,i):sf(n)?Vr(n):Array.isArray(n)?n.map(o=>Eg(o,i)||Rc.easeOut):Rc[n]}const bl=["read","resolveKeyframes","update","preRender","render","postRender"],zp={value:null};function o5(n,i){let o=new Set,l=new Set,u=!1,f=!1;const d=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1},h=0;function m(b){d.has(b)&&(v.schedule(b),n()),h++,b(p)}const v={schedule:(b,x=!1,A=!1)=>{const E=A&&u?o:l;return x&&d.add(b),E.has(b)||E.add(b),b},cancel:b=>{l.delete(b),d.delete(b)},process:b=>{if(p=b,u){f=!0;return}u=!0,[o,l]=[l,o],o.forEach(m),i&&zp.value&&zp.value.frameloop[i].push(h),h=0,o.clear(),u=!1,f&&(f=!1,v.process(b))}};return v}const l5=40;function Og(n,i){let o=!1,l=!0;const u={delta:0,timestamp:0,isProcessing:!1},f=()=>o=!0,d=bl.reduce((R,B)=>(R[B]=o5(f,i?B:void 0),R),{}),{read:p,resolveKeyframes:h,update:m,preRender:v,render:b,postRender:x}=d,A=()=>{const R=performance.now();o=!1,u.delta=l?1e3/60:Math.max(Math.min(R-u.timestamp,l5),1),u.timestamp=R,u.isProcessing=!0,p.process(u),h.process(u),m.process(u),v.process(u),b.process(u),x.process(u),u.isProcessing=!1,o&&i&&(l=!1,n(A))},T=()=>{o=!0,l=!0,u.isProcessing||n(A)};return{schedule:bl.reduce((R,B)=>{const V=d[B];return R[B]=(G,q=!1,W=!1)=>(o||T(),V.schedule(G,q,W)),R},{}),cancel:R=>{for(let B=0;B<bl.length;B++)d[bl[B]].cancel(R)},state:u,steps:d}}const{schedule:Dt,cancel:na,state:ee,steps:fc}=Og(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ae,!0),{schedule:uf}=Og(queueMicrotask,!1);let Dl;function s5(){Dl=void 0}const en={now:()=>(Dl===void 0&&en.set(ee.isProcessing||t5.useManualTiming?ee.timestamp:performance.now()),Dl),set:n=>{Dl=n,queueMicrotask(s5)}},Ze={x:!1,y:!1};function Dg(){return Ze.x||Ze.y}function u5(n){return n==="x"||n==="y"?Ze[n]?null:(Ze[n]=!0,()=>{Ze[n]=!1}):Ze.x||Ze.y?null:(Ze.x=Ze.y=!0,()=>{Ze.x=Ze.y=!1})}function c5(n,i,o){var l;if(n instanceof EventTarget)return[n];if(typeof n=="string"){let u=document;const f=(l=void 0)!==null&&l!==void 0?l:u.querySelectorAll(n);return f?Array.from(f):[]}return Array.from(n)}function Mg(n,i){const o=c5(n),l=new AbortController,u={passive:!0,...i,signal:l.signal};return[o,u,()=>l.abort()]}function _p(n){return!(n.pointerType==="touch"||Dg())}function f5(n,i,o={}){const[l,u,f]=Mg(n,o),d=p=>{if(!_p(p))return;const{target:h}=p,m=i(h,p);if(typeof m!="function"||!h)return;const v=b=>{_p(b)&&(m(b),h.removeEventListener("pointerleave",v))};h.addEventListener("pointerleave",v,u)};return l.forEach(p=>{p.addEventListener("pointerenter",d,u)}),f}function kp(n,i){const o=`${i}PointerCapture`;if(n.target instanceof Element&&o in n.target&&n.pointerId!==void 0)try{n.target[o](n.pointerId)}catch{}}const Rg=(n,i)=>i?n===i?!0:Rg(n,i.parentElement):!1,cf=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,d5=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function h5(n){return d5.has(n.tagName)||n.tabIndex!==-1}const Ur=new WeakSet;function Vp(n){return i=>{i.key==="Enter"&&n(i)}}function dc(n,i){n.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const m5=(n,i)=>{const o=n.currentTarget;if(!o)return;const l=Vp(()=>{if(Ur.has(o))return;dc(o,"down");const u=Vp(()=>{dc(o,"up")}),f=()=>dc(o,"cancel");o.addEventListener("keyup",u,i),o.addEventListener("blur",f,i)});o.addEventListener("keydown",l,i),o.addEventListener("blur",()=>o.removeEventListener("keydown",l),i)};function Up(n){return cf(n)&&!Dg()}function p5(n,i,o={}){const[l,u,f]=Mg(n,o),d=p=>{const h=p.currentTarget;if(!h||!Up(p)||Ur.has(h))return;Ur.add(h),kp(p,"set");const m=i(h,p),v=(A,T)=>{h.removeEventListener("pointerup",b),h.removeEventListener("pointercancel",x),kp(A,"release"),!(!Up(A)||!Ur.has(h))&&(Ur.delete(h),typeof m=="function"&&m(A,{success:T}))},b=A=>{(A.isTrusted?g5(A,h instanceof Element?h.getBoundingClientRect():{left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}):!1)?v(A,!1):v(A,!(h instanceof Element)||Rg(h,A.target))},x=A=>{v(A,!1)};h.addEventListener("pointerup",b,u),h.addEventListener("pointercancel",x,u),h.addEventListener("lostpointercapture",x,u)};return l.forEach(p=>{p=o.useGlobalTarget?window:p;let h=!1;p instanceof HTMLElement&&(h=!0,!h5(p)&&p.getAttribute("tabindex")===null&&(p.tabIndex=0)),p.addEventListener("pointerdown",d,u),h&&p.addEventListener("focus",m=>m5(m,u),u)}),f}function g5(n,i){return n.clientX<i.left||n.clientX>i.right||n.clientY<i.top||n.clientY>i.bottom}const Np=30,v5=n=>!isNaN(parseFloat(n));class y5{constructor(i,o={}){this.version="12.5.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(l,u=!0)=>{const f=en.now();this.updatedAt!==f&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(l),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),u&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(i),this.owner=o.owner}setCurrent(i){this.current=i,this.updatedAt=en.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=v5(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,o){this.events[i]||(this.events[i]=new rf);const l=this.events[i].add(o);return i==="change"?()=>{l(),Dt.read(()=>{this.events.change.getSize()||this.stop()})}:l}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,o){this.passiveEffect=i,this.stopPassiveEffect=o}set(i,o=!0){!o||!this.passiveEffect?this.updateAndNotify(i,o):this.passiveEffect(i,this.updateAndNotify)}setWithVelocity(i,o,l){this.set(o),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-l}jump(i,o=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=en.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>Np)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,Np);return xg(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(i){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=i(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function jr(n,i){return new y5(n,i)}const wg=_.createContext({strict:!1}),Bp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Di={};for(const n in Bp)Di[n]={isEnabled:i=>Bp[n].some(o=>!!i[o])};function b5(n){for(const i in n)Di[i]={...Di[i],...n[i]}}const x5=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function zl(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||x5.has(n)}let Cg=n=>!zl(n);function S5(n){n&&(Cg=i=>i.startsWith("on")?!zl(i):n(i))}try{S5(require("@emotion/is-prop-valid").default)}catch{}function T5(n,i,o){const l={};for(const u in n)u==="values"&&typeof n.values=="object"||(Cg(u)||o===!0&&zl(u)||!i&&!zl(u)||n.draggable&&u.startsWith("onDrag"))&&(l[u]=n[u]);return l}function A5(n){if(typeof Proxy>"u")return n;const i=new Map,o=(...l)=>n(...l);return new Proxy(o,{get:(l,u)=>u==="create"?n:(i.has(u)||i.set(u,n(u)),i.get(u))})}const ql=_.createContext({});function Pl(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Yr(n){return typeof n=="string"||Array.isArray(n)}const ff=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],df=["initial",...ff];function Hl(n){return Pl(n.animate)||df.some(i=>Yr(n[i]))}function zg(n){return!!(Hl(n)||n.variants)}function E5(n,i){if(Hl(n)){const{initial:o,animate:l}=n;return{initial:o===!1||Yr(o)?o:void 0,animate:Yr(l)?l:void 0}}return n.inherit!==!1?i:{}}function O5(n){const{initial:i,animate:o}=E5(n,_.useContext(ql));return _.useMemo(()=>({initial:i,animate:o}),[Lp(i),Lp(o)])}function Lp(n){return Array.isArray(n)?n.join(" "):n}const D5=Symbol.for("motionComponentSymbol");function xi(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function M5(n,i,o){return _.useCallback(l=>{l&&n.onMount&&n.onMount(l),i&&(l?i.mount(l):i.unmount()),o&&(typeof o=="function"?o(l):xi(o)&&(o.current=l))},[i])}const hf=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),R5="framerAppearId",_g="data-"+hf(R5),kg=_.createContext({});function w5(n,i,o,l,u){var f,d;const{visualElement:p}=_.useContext(ql),h=_.useContext(wg),m=_.useContext(tf),v=_.useContext(yg).reducedMotion,b=_.useRef(null);l=l||h.renderer,!b.current&&l&&(b.current=l(n,{visualState:i,parent:p,props:o,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:v}));const x=b.current,A=_.useContext(kg);x&&!x.projection&&u&&(x.type==="html"||x.type==="svg")&&C5(b.current,o,u,A);const T=_.useRef(!1);_.useInsertionEffect(()=>{x&&T.current&&x.update(o,m)});const E=o[_g],C=_.useRef(!!E&&!(!((f=window.MotionHandoffIsComplete)===null||f===void 0)&&f.call(window,E))&&((d=window.MotionHasOptimisedAnimation)===null||d===void 0?void 0:d.call(window,E)));return Wx(()=>{x&&(T.current=!0,window.MotionIsMounted=!0,x.updateFeatures(),uf.render(x.render),C.current&&x.animationState&&x.animationState.animateChanges())}),_.useEffect(()=>{x&&(!C.current&&x.animationState&&x.animationState.animateChanges(),C.current&&(queueMicrotask(()=>{var R;(R=window.MotionHandoffMarkAsComplete)===null||R===void 0||R.call(window,E)}),C.current=!1))}),x}function C5(n,i,o,l){const{layoutId:u,layout:f,drag:d,dragConstraints:p,layoutScroll:h,layoutRoot:m}=i;n.projection=new o(n.latestValues,i["data-framer-portal-id"]?void 0:Vg(n.parent)),n.projection.setOptions({layoutId:u,layout:f,alwaysMeasureLayout:!!d||p&&xi(p),visualElement:n,animationType:typeof f=="string"?f:"both",initialPromotionConfig:l,layoutScroll:h,layoutRoot:m})}function Vg(n){if(n)return n.options.allowProjection!==!1?n.projection:Vg(n.parent)}function z5({preloadedFeatures:n,createVisualElement:i,useRender:o,useVisualState:l,Component:u}){var f,d;n&&b5(n);function p(m,v){let b;const x={..._.useContext(yg),...m,layoutId:_5(m)},{isStatic:A}=x,T=O5(m),E=l(m,A);if(!A&&Ic){k5();const C=V5(x);b=C.MeasureLayout,T.visualElement=w5(u,E,x,i,C.ProjectionNode)}return Lt.jsxs(ql.Provider,{value:T,children:[b&&T.visualElement?Lt.jsx(b,{visualElement:T.visualElement,...x}):null,o(u,m,M5(E,T.visualElement,v),E,A,T.visualElement)]})}p.displayName=`motion.${typeof u=="string"?u:`create(${(d=(f=u.displayName)!==null&&f!==void 0?f:u.name)!==null&&d!==void 0?d:""})`}`;const h=_.forwardRef(p);return h[D5]=u,h}function _5({layoutId:n}){const i=_.useContext(vg).id;return i&&n!==void 0?i+"-"+n:n}function k5(n,i){_.useContext(wg).strict}function V5(n){const{drag:i,layout:o}=Di;if(!i&&!o)return{};const l={...i,...o};return{MeasureLayout:i!=null&&i.isEnabled(n)||o!=null&&o.isEnabled(n)?l.MeasureLayout:void 0,ProjectionNode:l.ProjectionNode}}const Ug=n=>i=>typeof i=="string"&&i.startsWith(n),mf=Ug("--"),U5=Ug("var(--"),pf=n=>U5(n)?N5.test(n.split("/*")[0].trim()):!1,N5=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Xr={};function B5(n){for(const i in n)Xr[i]=n[i],mf(i)&&(Xr[i].isCSSVariable=!0)}const Ci=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ka=new Set(Ci);function Ng(n,{layout:i,layoutId:o}){return ka.has(n)||n.startsWith("origin")||(i||o!==void 0)&&(!!Xr[n]||n==="opacity")}const oe=n=>!!(n&&n.getVelocity),Bg=(n,i)=>i&&typeof n=="number"?i.transform(n):n,Rn=(n,i,o)=>o>i?i:o<n?n:o,zi={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Gr={...zi,transform:n=>Rn(0,1,n)},xl={...zi,default:1},Wr=n=>({test:i=>typeof i=="string"&&i.endsWith(n)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${n}`}),ea=Wr("deg"),nn=Wr("%"),at=Wr("px"),L5=Wr("vh"),q5=Wr("vw"),qp={...nn,parse:n=>nn.parse(n)/100,transform:n=>nn.transform(n*100)},P5={borderWidth:at,borderTopWidth:at,borderRightWidth:at,borderBottomWidth:at,borderLeftWidth:at,borderRadius:at,radius:at,borderTopLeftRadius:at,borderTopRightRadius:at,borderBottomRightRadius:at,borderBottomLeftRadius:at,width:at,maxWidth:at,height:at,maxHeight:at,top:at,right:at,bottom:at,left:at,padding:at,paddingTop:at,paddingRight:at,paddingBottom:at,paddingLeft:at,margin:at,marginTop:at,marginRight:at,marginBottom:at,marginLeft:at,backgroundPositionX:at,backgroundPositionY:at},H5={rotate:ea,rotateX:ea,rotateY:ea,rotateZ:ea,scale:xl,scaleX:xl,scaleY:xl,scaleZ:xl,skew:ea,skewX:ea,skewY:ea,distance:at,translateX:at,translateY:at,translateZ:at,x:at,y:at,z:at,perspective:at,transformPerspective:at,opacity:Gr,originX:qp,originY:qp,originZ:at},Pp={...zi,transform:Math.round},gf={...P5,...H5,zIndex:Pp,size:at,fillOpacity:Gr,strokeOpacity:Gr,numOctaves:Pp},j5={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Y5=Ci.length;function X5(n,i,o){let l="",u=!0;for(let f=0;f<Y5;f++){const d=Ci[f],p=n[d];if(p===void 0)continue;let h=!0;if(typeof p=="number"?h=p===(d.startsWith("scale")?1:0):h=parseFloat(p)===0,!h||o){const m=Bg(p,gf[d]);if(!h){u=!1;const v=j5[d]||d;l+=`${v}(${m}) `}o&&(i[d]=m)}}return l=l.trim(),o?l=o(i,u?"":l):u&&(l="none"),l}function vf(n,i,o){const{style:l,vars:u,transformOrigin:f}=n;let d=!1,p=!1;for(const h in i){const m=i[h];if(ka.has(h)){d=!0;continue}else if(mf(h)){u[h]=m;continue}else{const v=Bg(m,gf[h]);h.startsWith("origin")?(p=!0,f[h]=v):l[h]=v}}if(i.transform||(d||o?l.transform=X5(i,n.transform,o):l.transform&&(l.transform="none")),p){const{originX:h="50%",originY:m="50%",originZ:v=0}=f;l.transformOrigin=`${h} ${m} ${v}`}}const yf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Lg(n,i,o){for(const l in i)!oe(i[l])&&!Ng(l,o)&&(n[l]=i[l])}function G5({transformTemplate:n},i){return _.useMemo(()=>{const o=yf();return vf(o,i,n),Object.assign({},o.vars,o.style)},[i])}function Z5(n,i){const o=n.style||{},l={};return Lg(l,o,n),Object.assign(l,G5(n,i)),l}function K5(n,i){const o={},l=Z5(n,i);return n.drag&&n.dragListener!==!1&&(o.draggable=!1,l.userSelect=l.WebkitUserSelect=l.WebkitTouchCallout="none",l.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(o.tabIndex=0),o.style=l,o}const Q5=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function bf(n){return typeof n!="string"||n.includes("-")?!1:!!(Q5.indexOf(n)>-1||/[A-Z]/u.test(n))}const F5={offset:"stroke-dashoffset",array:"stroke-dasharray"},J5={offset:"strokeDashoffset",array:"strokeDasharray"};function $5(n,i,o=1,l=0,u=!0){n.pathLength=1;const f=u?F5:J5;n[f.offset]=at.transform(-l);const d=at.transform(i),p=at.transform(o);n[f.array]=`${d} ${p}`}function Hp(n,i,o){return typeof n=="string"?n:at.transform(i+o*n)}function W5(n,i,o){const l=Hp(i,n.x,n.width),u=Hp(o,n.y,n.height);return`${l} ${u}`}function xf(n,{attrX:i,attrY:o,attrScale:l,originX:u,originY:f,pathLength:d,pathSpacing:p=1,pathOffset:h=0,...m},v,b){if(vf(n,m,b),v){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:x,style:A,dimensions:T}=n;x.transform&&(T&&(A.transform=x.transform),delete x.transform),T&&(u!==void 0||f!==void 0||A.transform)&&(A.transformOrigin=W5(T,u!==void 0?u:.5,f!==void 0?f:.5)),i!==void 0&&(x.x=i),o!==void 0&&(x.y=o),l!==void 0&&(x.scale=l),d!==void 0&&$5(x,d,p,h,!1)}const qg=()=>({...yf(),attrs:{}}),Sf=n=>typeof n=="string"&&n.toLowerCase()==="svg";function I5(n,i,o,l){const u=_.useMemo(()=>{const f=qg();return xf(f,i,Sf(l),n.transformTemplate),{...f.attrs,style:{...f.style}}},[i]);if(n.style){const f={};Lg(f,n.style,n),u.style={...f,...u.style}}return u}function tS(n=!1){return(o,l,u,{latestValues:f},d)=>{const h=(bf(o)?I5:K5)(l,f,d,o),m=T5(l,typeof o=="string",n),v=o!==_.Fragment?{...m,...h,ref:u}:{},{children:b}=l,x=_.useMemo(()=>oe(b)?b.get():b,[b]);return _.createElement(o,{...v,children:x})}}function jp(n){const i=[{},{}];return n==null||n.values.forEach((o,l)=>{i[0][l]=o.get(),i[1][l]=o.getVelocity()}),i}function Tf(n,i,o,l){if(typeof i=="function"){const[u,f]=jp(l);i=i(o!==void 0?o:n.custom,u,f)}if(typeof i=="string"&&(i=n.variants&&n.variants[i]),typeof i=="function"){const[u,f]=jp(l);i=i(o!==void 0?o:n.custom,u,f)}return i}const wc=n=>Array.isArray(n),eS=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),nS=n=>wc(n)?n[n.length-1]||0:n;function Ml(n){const i=oe(n)?n.get():n;return eS(i)?i.toValue():i}function aS({scrapeMotionValuesFromProps:n,createRenderState:i,onUpdate:o},l,u,f){const d={latestValues:iS(l,u,f,n),renderState:i()};return o&&(d.onMount=p=>o({props:l,current:p,...d}),d.onUpdate=p=>o(p)),d}const Pg=n=>(i,o)=>{const l=_.useContext(ql),u=_.useContext(tf),f=()=>aS(n,i,l,u);return o?f():$x(f)};function iS(n,i,o,l){const u={},f=l(n,{});for(const x in f)u[x]=Ml(f[x]);let{initial:d,animate:p}=n;const h=Hl(n),m=zg(n);i&&m&&!h&&n.inherit!==!1&&(d===void 0&&(d=i.initial),p===void 0&&(p=i.animate));let v=o?o.initial===!1:!1;v=v||d===!1;const b=v?p:d;if(b&&typeof b!="boolean"&&!Pl(b)){const x=Array.isArray(b)?b:[b];for(let A=0;A<x.length;A++){const T=Tf(n,x[A]);if(T){const{transitionEnd:E,transition:C,...R}=T;for(const B in R){let V=R[B];if(Array.isArray(V)){const G=v?V.length-1:0;V=V[G]}V!==null&&(u[B]=V)}for(const B in E)u[B]=E[B]}}}return u}function Af(n,i,o){var l;const{style:u}=n,f={};for(const d in u)(oe(u[d])||i.style&&oe(i.style[d])||Ng(d,n)||((l=o==null?void 0:o.getValue(d))===null||l===void 0?void 0:l.liveStyle)!==void 0)&&(f[d]=u[d]);return f}const rS={useVisualState:Pg({scrapeMotionValuesFromProps:Af,createRenderState:yf})};function Hg(n,i){try{i.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{i.dimensions={x:0,y:0,width:0,height:0}}}function jg(n,{style:i,vars:o},l,u){Object.assign(n.style,i,u&&u.getProjectionStyles(l));for(const f in o)n.style.setProperty(f,o[f])}const Yg=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Xg(n,i,o,l){jg(n,i,void 0,l);for(const u in i.attrs)n.setAttribute(Yg.has(u)?u:hf(u),i.attrs[u])}function Gg(n,i,o){const l=Af(n,i,o);for(const u in n)if(oe(n[u])||oe(i[u])){const f=Ci.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u;l[f]=n[u]}return l}const Yp=["x","y","width","height","cx","cy","r"],oS={useVisualState:Pg({scrapeMotionValuesFromProps:Gg,createRenderState:qg,onUpdate:({props:n,prevProps:i,current:o,renderState:l,latestValues:u})=>{if(!o)return;let f=!!n.drag;if(!f){for(const p in u)if(ka.has(p)){f=!0;break}}if(!f)return;let d=!i;if(i)for(let p=0;p<Yp.length;p++){const h=Yp[p];n[h]!==i[h]&&(d=!0)}d&&Dt.read(()=>{Hg(o,l),Dt.render(()=>{xf(l,u,Sf(o.tagName),n.transformTemplate),Xg(o,l)})})}})};function lS(n,i){return function(l,{forwardMotionProps:u}={forwardMotionProps:!1}){const d={...bf(l)?oS:rS,preloadedFeatures:n,useRender:tS(u),createVisualElement:i,Component:l};return z5(d)}}function Zr(n,i,o){const l=n.getProps();return Tf(l,i,o!==void 0?o:l.custom,n)}const Zg=new Set(["width","height","top","left","right","bottom",...Ci]);function sS(n,i,o){n.hasValue(i)?n.getValue(i).set(o):n.addValue(i,jr(o))}function uS(n,i){const o=Zr(n,i);let{transitionEnd:l={},transition:u={},...f}=o||{};f={...f,...l};for(const d in f){const p=nS(f[d]);sS(n,d,p)}}function cS(n){return!!(oe(n)&&n.add)}function Cc(n,i){const o=n.getValue("willChange");if(cS(o))return o.add(i)}function Kg(n){return n.props[_g]}const Qg=(n,i,o)=>(((1-3*o+3*i)*n+(3*o-6*i))*n+3*i)*n,fS=1e-7,dS=12;function hS(n,i,o,l,u){let f,d,p=0;do d=i+(o-i)/2,f=Qg(d,l,u)-n,f>0?o=d:i=d;while(Math.abs(f)>fS&&++p<dS);return d}function Ir(n,i,o,l){if(n===i&&o===l)return Ae;const u=f=>hS(f,0,1,n,o);return f=>f===0||f===1?f:Qg(u(f),i,l)}const Fg=n=>i=>i<=.5?n(2*i)/2:(2-n(2*(1-i)))/2,Jg=n=>i=>1-n(1-i),$g=Ir(.33,1.53,.69,.99),Ef=Jg($g),Wg=Fg(Ef),Ig=n=>(n*=2)<1?.5*Ef(n):.5*(2-Math.pow(2,-10*(n-1))),Of=n=>1-Math.sin(Math.acos(n)),tv=Jg(Of),ev=Fg(Of),nv=n=>/^0[^.\s]+$/u.test(n);function mS(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||nv(n):!0}const Br=n=>Math.round(n*1e5)/1e5,Df=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function pS(n){return n==null}const gS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Mf=(n,i)=>o=>!!(typeof o=="string"&&gS.test(o)&&o.startsWith(n)||i&&!pS(o)&&Object.prototype.hasOwnProperty.call(o,i)),av=(n,i,o)=>l=>{if(typeof l!="string")return l;const[u,f,d,p]=l.match(Df);return{[n]:parseFloat(u),[i]:parseFloat(f),[o]:parseFloat(d),alpha:p!==void 0?parseFloat(p):1}},vS=n=>Rn(0,255,n),hc={...zi,transform:n=>Math.round(vS(n))},wa={test:Mf("rgb","red"),parse:av("red","green","blue"),transform:({red:n,green:i,blue:o,alpha:l=1})=>"rgba("+hc.transform(n)+", "+hc.transform(i)+", "+hc.transform(o)+", "+Br(Gr.transform(l))+")"};function yS(n){let i="",o="",l="",u="";return n.length>5?(i=n.substring(1,3),o=n.substring(3,5),l=n.substring(5,7),u=n.substring(7,9)):(i=n.substring(1,2),o=n.substring(2,3),l=n.substring(3,4),u=n.substring(4,5),i+=i,o+=o,l+=l,u+=u),{red:parseInt(i,16),green:parseInt(o,16),blue:parseInt(l,16),alpha:u?parseInt(u,16)/255:1}}const zc={test:Mf("#"),parse:yS,transform:wa.transform},Si={test:Mf("hsl","hue"),parse:av("hue","saturation","lightness"),transform:({hue:n,saturation:i,lightness:o,alpha:l=1})=>"hsla("+Math.round(n)+", "+nn.transform(Br(i))+", "+nn.transform(Br(o))+", "+Br(Gr.transform(l))+")"},re={test:n=>wa.test(n)||zc.test(n)||Si.test(n),parse:n=>wa.test(n)?wa.parse(n):Si.test(n)?Si.parse(n):zc.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?wa.transform(n):Si.transform(n)},bS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function xS(n){var i,o;return isNaN(n)&&typeof n=="string"&&(((i=n.match(Df))===null||i===void 0?void 0:i.length)||0)+(((o=n.match(bS))===null||o===void 0?void 0:o.length)||0)>0}const iv="number",rv="color",SS="var",TS="var(",Xp="${}",AS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Kr(n){const i=n.toString(),o=[],l={color:[],number:[],var:[]},u=[];let f=0;const p=i.replace(AS,h=>(re.test(h)?(l.color.push(f),u.push(rv),o.push(re.parse(h))):h.startsWith(TS)?(l.var.push(f),u.push(SS),o.push(h)):(l.number.push(f),u.push(iv),o.push(parseFloat(h))),++f,Xp)).split(Xp);return{values:o,split:p,indexes:l,types:u}}function ov(n){return Kr(n).values}function lv(n){const{split:i,types:o}=Kr(n),l=i.length;return u=>{let f="";for(let d=0;d<l;d++)if(f+=i[d],u[d]!==void 0){const p=o[d];p===iv?f+=Br(u[d]):p===rv?f+=re.transform(u[d]):f+=u[d]}return f}}const ES=n=>typeof n=="number"?0:n;function OS(n){const i=ov(n);return lv(n)(i.map(ES))}const aa={test:xS,parse:ov,createTransformer:lv,getAnimatableNone:OS},DS=new Set(["brightness","contrast","saturate","opacity"]);function MS(n){const[i,o]=n.slice(0,-1).split("(");if(i==="drop-shadow")return n;const[l]=o.match(Df)||[];if(!l)return n;const u=o.replace(l,"");let f=DS.has(i)?1:0;return l!==o&&(f*=100),i+"("+f+u+")"}const RS=/\b([a-z-]*)\(.*?\)/gu,_c={...aa,getAnimatableNone:n=>{const i=n.match(RS);return i?i.map(MS).join(" "):n}},wS={...gf,color:re,backgroundColor:re,outlineColor:re,fill:re,stroke:re,borderColor:re,borderTopColor:re,borderRightColor:re,borderBottomColor:re,borderLeftColor:re,filter:_c,WebkitFilter:_c},sv=n=>wS[n];function uv(n,i){let o=sv(n);return o!==_c&&(o=aa),o.getAnimatableNone?o.getAnimatableNone(i):void 0}const CS=new Set(["auto","none","0"]);function zS(n,i,o){let l=0,u;for(;l<n.length&&!u;){const f=n[l];typeof f=="string"&&!CS.has(f)&&Kr(f).values.length&&(u=n[l]),l++}if(u&&o)for(const f of i)n[f]=uv(o,u)}const Ca=n=>n*180/Math.PI,kc=n=>{const i=Ca(Math.atan2(n[1],n[0]));return Vc(i)},_S={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:kc,rotateZ:kc,skewX:n=>Ca(Math.atan(n[1])),skewY:n=>Ca(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Vc=n=>(n=n%360,n<0&&(n+=360),n),Gp=kc,Zp=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),Kp=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),kS={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Zp,scaleY:Kp,scale:n=>(Zp(n)+Kp(n))/2,rotateX:n=>Vc(Ca(Math.atan2(n[6],n[5]))),rotateY:n=>Vc(Ca(Math.atan2(-n[2],n[0]))),rotateZ:Gp,rotate:Gp,skewX:n=>Ca(Math.atan(n[4])),skewY:n=>Ca(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Qp(n){return n.includes("scale")?1:0}function Uc(n,i){if(!n||n==="none")return Qp(i);const o=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let l,u;if(o)l=kS,u=o;else{const p=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);l=_S,u=p}if(!u)return Qp(i);const f=l[i],d=u[1].split(",").map(US);return typeof f=="function"?f(d):d[f]}const VS=(n,i)=>{const{transform:o="none"}=getComputedStyle(n);return Uc(o,i)};function US(n){return parseFloat(n.trim())}const Fp=n=>n===zi||n===at,NS=new Set(["x","y","z"]),BS=Ci.filter(n=>!NS.has(n));function LS(n){const i=[];return BS.forEach(o=>{const l=n.getValue(o);l!==void 0&&(i.push([o,l.get()]),l.set(o.startsWith("scale")?1:0))}),i}const Mi={width:({x:n},{paddingLeft:i="0",paddingRight:o="0"})=>n.max-n.min-parseFloat(i)-parseFloat(o),height:({y:n},{paddingTop:i="0",paddingBottom:o="0"})=>n.max-n.min-parseFloat(i)-parseFloat(o),top:(n,{top:i})=>parseFloat(i),left:(n,{left:i})=>parseFloat(i),bottom:({y:n},{top:i})=>parseFloat(i)+(n.max-n.min),right:({x:n},{left:i})=>parseFloat(i)+(n.max-n.min),x:(n,{transform:i})=>Uc(i,"x"),y:(n,{transform:i})=>Uc(i,"y")};Mi.translateX=Mi.x;Mi.translateY=Mi.y;const za=new Set;let Nc=!1,Bc=!1;function cv(){if(Bc){const n=Array.from(za).filter(l=>l.needsMeasurement),i=new Set(n.map(l=>l.element)),o=new Map;i.forEach(l=>{const u=LS(l);u.length&&(o.set(l,u),l.render())}),n.forEach(l=>l.measureInitialState()),i.forEach(l=>{l.render();const u=o.get(l);u&&u.forEach(([f,d])=>{var p;(p=l.getValue(f))===null||p===void 0||p.set(d)})}),n.forEach(l=>l.measureEndState()),n.forEach(l=>{l.suspendedScrollY!==void 0&&window.scrollTo(0,l.suspendedScrollY)})}Bc=!1,Nc=!1,za.forEach(n=>n.complete()),za.clear()}function fv(){za.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Bc=!0)})}function qS(){fv(),cv()}class Rf{constructor(i,o,l,u,f,d=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...i],this.onComplete=o,this.name=l,this.motionValue=u,this.element=f,this.isAsync=d}scheduleResolve(){this.isScheduled=!0,this.isAsync?(za.add(this),Nc||(Nc=!0,Dt.read(fv),Dt.resolveKeyframes(cv))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:o,element:l,motionValue:u}=this;for(let f=0;f<i.length;f++)if(i[f]===null)if(f===0){const d=u==null?void 0:u.get(),p=i[i.length-1];if(d!==void 0)i[0]=d;else if(l&&o){const h=l.readValue(o,p);h!=null&&(i[0]=h)}i[0]===void 0&&(i[0]=p),u&&d===void 0&&u.set(i[0])}else i[f]=i[f-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),za.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,za.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const dv=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),PS=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function HS(n){const i=PS.exec(n);if(!i)return[,];const[,o,l,u]=i;return[`--${o??l}`,u]}function hv(n,i,o=1){const[l,u]=HS(n);if(!l)return;const f=window.getComputedStyle(i).getPropertyValue(l);if(f){const d=f.trim();return dv(d)?parseFloat(d):d}return pf(u)?hv(u,i,o+1):u}const mv=n=>i=>i.test(n),jS={test:n=>n==="auto",parse:n=>n},pv=[zi,at,nn,ea,q5,L5,jS],Jp=n=>pv.find(mv(n));class gv extends Rf{constructor(i,o,l,u,f){super(i,o,l,u,f,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:o,name:l}=this;if(!o||!o.current)return;super.readKeyframes();for(let h=0;h<i.length;h++){let m=i[h];if(typeof m=="string"&&(m=m.trim(),pf(m))){const v=hv(m,o.current);v!==void 0&&(i[h]=v),h===i.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!Zg.has(l)||i.length!==2)return;const[u,f]=i,d=Jp(u),p=Jp(f);if(d!==p)if(Fp(d)&&Fp(p))for(let h=0;h<i.length;h++){const m=i[h];typeof m=="string"&&(i[h]=parseFloat(m))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:o}=this,l=[];for(let u=0;u<i.length;u++)mS(i[u])&&l.push(u);l.length&&zS(i,l,o)}measureInitialState(){const{element:i,unresolvedKeyframes:o,name:l}=this;if(!i||!i.current)return;l==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Mi[l](i.measureViewportBox(),window.getComputedStyle(i.current)),o[0]=this.measuredOrigin;const u=o[o.length-1];u!==void 0&&i.getValue(l,u).jump(u,!1)}measureEndState(){var i;const{element:o,name:l,unresolvedKeyframes:u}=this;if(!o||!o.current)return;const f=o.getValue(l);f&&f.jump(this.measuredOrigin,!1);const d=u.length-1,p=u[d];u[d]=Mi[l](o.measureViewportBox(),window.getComputedStyle(o.current)),p!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=p),!((i=this.removedTransforms)===null||i===void 0)&&i.length&&this.removedTransforms.forEach(([h,m])=>{o.getValue(h).set(m)}),this.resolveNoneKeyframes()}}const $p=(n,i)=>i==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(aa.test(n)||n==="0")&&!n.startsWith("url("));function YS(n){const i=n[0];if(n.length===1)return!0;for(let o=0;o<n.length;o++)if(n[o]!==i)return!0}function XS(n,i,o,l){const u=n[0];if(u===null)return!1;if(i==="display"||i==="visibility")return!0;const f=n[n.length-1],d=$p(u,i),p=$p(f,i);return!d||!p?!1:YS(n)||(o==="spring"||lf(o))&&l}const GS=n=>n!==null;function jl(n,{repeat:i,repeatType:o="loop"},l){const u=n.filter(GS),f=i&&o!=="loop"&&i%2===1?0:u.length-1;return!f||l===void 0?u[f]:l}const ZS=40;class vv{constructor({autoplay:i=!0,delay:o=0,type:l="keyframes",repeat:u=0,repeatDelay:f=0,repeatType:d="loop",...p}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=en.now(),this.options={autoplay:i,delay:o,type:l,repeat:u,repeatDelay:f,repeatType:d,...p},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>ZS?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&qS(),this._resolved}onKeyframesResolved(i,o){this.resolvedAt=en.now(),this.hasAttemptedResolve=!0;const{name:l,type:u,velocity:f,delay:d,onComplete:p,onUpdate:h,isGenerator:m}=this.options;if(!m&&!XS(i,l,u,f))if(d)this.options.duration=0;else{h&&h(jl(i,this.options,o)),p&&p(),this.resolveFinishedPromise();return}const v=this.initPlayback(i,o);v!==!1&&(this._resolved={keyframes:i,finalKeyframe:o,...v},this.onPostResolved())}onPostResolved(){}then(i,o){return this.currentFinishedPromise.then(i,o)}flatten(){this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear")}updateFinishedPromise(){this.currentFinishedPromise=new Promise(i=>{this.resolveFinishedPromise=i})}}const zt=(n,i,o)=>n+(i-n)*o;function mc(n,i,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?n+(i-n)*6*o:o<1/2?i:o<2/3?n+(i-n)*(2/3-o)*6:n}function KS({hue:n,saturation:i,lightness:o,alpha:l}){n/=360,i/=100,o/=100;let u=0,f=0,d=0;if(!i)u=f=d=o;else{const p=o<.5?o*(1+i):o+i-o*i,h=2*o-p;u=mc(h,p,n+1/3),f=mc(h,p,n),d=mc(h,p,n-1/3)}return{red:Math.round(u*255),green:Math.round(f*255),blue:Math.round(d*255),alpha:l}}function _l(n,i){return o=>o>0?i:n}const pc=(n,i,o)=>{const l=n*n,u=o*(i*i-l)+l;return u<0?0:Math.sqrt(u)},QS=[zc,wa,Si],FS=n=>QS.find(i=>i.test(n));function Wp(n){const i=FS(n);if(!i)return!1;let o=i.parse(n);return i===Si&&(o=KS(o)),o}const Ip=(n,i)=>{const o=Wp(n),l=Wp(i);if(!o||!l)return _l(n,i);const u={...o};return f=>(u.red=pc(o.red,l.red,f),u.green=pc(o.green,l.green,f),u.blue=pc(o.blue,l.blue,f),u.alpha=zt(o.alpha,l.alpha,f),wa.transform(u))},JS=(n,i)=>o=>i(n(o)),to=(...n)=>n.reduce(JS),Lc=new Set(["none","hidden"]);function $S(n,i){return Lc.has(n)?o=>o<=0?n:i:o=>o>=1?i:n}function WS(n,i){return o=>zt(n,i,o)}function wf(n){return typeof n=="number"?WS:typeof n=="string"?pf(n)?_l:re.test(n)?Ip:e2:Array.isArray(n)?yv:typeof n=="object"?re.test(n)?Ip:IS:_l}function yv(n,i){const o=[...n],l=o.length,u=n.map((f,d)=>wf(f)(f,i[d]));return f=>{for(let d=0;d<l;d++)o[d]=u[d](f);return o}}function IS(n,i){const o={...n,...i},l={};for(const u in o)n[u]!==void 0&&i[u]!==void 0&&(l[u]=wf(n[u])(n[u],i[u]));return u=>{for(const f in l)o[f]=l[f](u);return o}}function t2(n,i){var o;const l=[],u={color:0,var:0,number:0};for(let f=0;f<i.values.length;f++){const d=i.types[f],p=n.indexes[d][u[d]],h=(o=n.values[p])!==null&&o!==void 0?o:0;l[f]=h,u[d]++}return l}const e2=(n,i)=>{const o=aa.createTransformer(i),l=Kr(n),u=Kr(i);return l.indexes.var.length===u.indexes.var.length&&l.indexes.color.length===u.indexes.color.length&&l.indexes.number.length>=u.indexes.number.length?Lc.has(n)&&!u.values.length||Lc.has(i)&&!l.values.length?$S(n,i):to(yv(t2(l,u),u.values),o):_l(n,i)};function bv(n,i,o){return typeof n=="number"&&typeof i=="number"&&typeof o=="number"?zt(n,i,o):wf(n)(n,i)}const n2=5;function xv(n,i,o){const l=Math.max(i-n2,0);return xg(o-n(l),i-l)}const Bt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},t0=.001;function a2({duration:n=Bt.duration,bounce:i=Bt.bounce,velocity:o=Bt.velocity,mass:l=Bt.mass}){let u,f,d=1-i;d=Rn(Bt.minDamping,Bt.maxDamping,d),n=Rn(Bt.minDuration,Bt.maxDuration,Dn(n)),d<1?(u=m=>{const v=m*d,b=v*n,x=v-o,A=qc(m,d),T=Math.exp(-b);return t0-x/A*T},f=m=>{const b=m*d*n,x=b*o+o,A=Math.pow(d,2)*Math.pow(m,2)*n,T=Math.exp(-b),E=qc(Math.pow(m,2),d);return(-u(m)+t0>0?-1:1)*((x-A)*T)/E}):(u=m=>{const v=Math.exp(-m*n),b=(m-o)*n+1;return-.001+v*b},f=m=>{const v=Math.exp(-m*n),b=(o-m)*(n*n);return v*b});const p=5/n,h=r2(u,f,p);if(n=On(n),isNaN(h))return{stiffness:Bt.stiffness,damping:Bt.damping,duration:n};{const m=Math.pow(h,2)*l;return{stiffness:m,damping:d*2*Math.sqrt(l*m),duration:n}}}const i2=12;function r2(n,i,o){let l=o;for(let u=1;u<i2;u++)l=l-n(l)/i(l);return l}function qc(n,i){return n*Math.sqrt(1-i*i)}const o2=["duration","bounce"],l2=["stiffness","damping","mass"];function e0(n,i){return i.some(o=>n[o]!==void 0)}function s2(n){let i={velocity:Bt.velocity,stiffness:Bt.stiffness,damping:Bt.damping,mass:Bt.mass,isResolvedFromDuration:!1,...n};if(!e0(n,l2)&&e0(n,o2))if(n.visualDuration){const o=n.visualDuration,l=2*Math.PI/(o*1.2),u=l*l,f=2*Rn(.05,1,1-(n.bounce||0))*Math.sqrt(u);i={...i,mass:Bt.mass,stiffness:u,damping:f}}else{const o=a2(n);i={...i,...o,mass:Bt.mass},i.isResolvedFromDuration=!0}return i}function Sv(n=Bt.visualDuration,i=Bt.bounce){const o=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:i}:n;let{restSpeed:l,restDelta:u}=o;const f=o.keyframes[0],d=o.keyframes[o.keyframes.length-1],p={done:!1,value:f},{stiffness:h,damping:m,mass:v,duration:b,velocity:x,isResolvedFromDuration:A}=s2({...o,velocity:-Dn(o.velocity||0)}),T=x||0,E=m/(2*Math.sqrt(h*v)),C=d-f,R=Dn(Math.sqrt(h/v)),B=Math.abs(C)<5;l||(l=B?Bt.restSpeed.granular:Bt.restSpeed.default),u||(u=B?Bt.restDelta.granular:Bt.restDelta.default);let V;if(E<1){const q=qc(R,E);V=W=>{const ot=Math.exp(-E*R*W);return d-ot*((T+E*R*C)/q*Math.sin(q*W)+C*Math.cos(q*W))}}else if(E===1)V=q=>d-Math.exp(-R*q)*(C+(T+R*C)*q);else{const q=R*Math.sqrt(E*E-1);V=W=>{const ot=Math.exp(-E*R*W),K=Math.min(q*W,300);return d-ot*((T+E*R*C)*Math.sinh(K)+q*C*Math.cosh(K))/q}}const G={calculatedDuration:A&&b||null,next:q=>{const W=V(q);if(A)p.done=q>=b;else{let ot=0;E<1&&(ot=q===0?On(T):xv(V,q,W));const K=Math.abs(ot)<=l,j=Math.abs(d-W)<=u;p.done=K&&j}return p.value=p.done?d:W,p},toString:()=>{const q=Math.min(Sg(G),Mc),W=Tg(ot=>G.next(q*ot).value,q,30);return q+"ms "+W}};return G}function n0({keyframes:n,velocity:i=0,power:o=.8,timeConstant:l=325,bounceDamping:u=10,bounceStiffness:f=500,modifyTarget:d,min:p,max:h,restDelta:m=.5,restSpeed:v}){const b=n[0],x={done:!1,value:b},A=K=>p!==void 0&&K<p||h!==void 0&&K>h,T=K=>p===void 0?h:h===void 0||Math.abs(p-K)<Math.abs(h-K)?p:h;let E=o*i;const C=b+E,R=d===void 0?C:d(C);R!==C&&(E=R-b);const B=K=>-E*Math.exp(-K/l),V=K=>R+B(K),G=K=>{const j=B(K),tt=V(K);x.done=Math.abs(j)<=m,x.value=x.done?R:tt};let q,W;const ot=K=>{A(x.value)&&(q=K,W=Sv({keyframes:[x.value,T(x.value)],velocity:xv(V,K,x.value),damping:u,stiffness:f,restDelta:m,restSpeed:v}))};return ot(0),{calculatedDuration:null,next:K=>{let j=!1;return!W&&q===void 0&&(j=!0,G(K),ot(K)),q!==void 0&&K>=q?W.next(K-q):(!j&&G(K),x)}}}const u2=Ir(.42,0,1,1),c2=Ir(0,0,.58,1),Tv=Ir(.42,0,.58,1),f2=n=>Array.isArray(n)&&typeof n[0]!="number",d2={linear:Ae,easeIn:u2,easeInOut:Tv,easeOut:c2,circIn:Of,circInOut:ev,circOut:tv,backIn:Ef,backInOut:Wg,backOut:$g,anticipate:Ig},a0=n=>{if(sf(n)){bg(n.length===4);const[i,o,l,u]=n;return Ir(i,o,l,u)}else if(typeof n=="string")return d2[n];return n};function h2(n,i,o){const l=[],u=o||bv,f=n.length-1;for(let d=0;d<f;d++){let p=u(n[d],n[d+1]);if(i){const h=Array.isArray(i)?i[d]||Ae:i;p=to(h,p)}l.push(p)}return l}function m2(n,i,{clamp:o=!0,ease:l,mixer:u}={}){const f=n.length;if(bg(f===i.length),f===1)return()=>i[0];if(f===2&&i[0]===i[1])return()=>i[1];const d=n[0]===n[1];n[0]>n[f-1]&&(n=[...n].reverse(),i=[...i].reverse());const p=h2(i,l,u),h=p.length,m=v=>{if(d&&v<n[0])return i[0];let b=0;if(h>1)for(;b<n.length-2&&!(v<n[b+1]);b++);const x=Oi(n[b],n[b+1],v);return p[b](x)};return o?v=>m(Rn(n[0],n[f-1],v)):m}function p2(n,i){const o=n[n.length-1];for(let l=1;l<=i;l++){const u=Oi(0,i,l);n.push(zt(o,1,u))}}function g2(n){const i=[0];return p2(i,n.length-1),i}function v2(n,i){return n.map(o=>o*i)}function y2(n,i){return n.map(()=>i||Tv).splice(0,n.length-1)}function kl({duration:n=300,keyframes:i,times:o,ease:l="easeInOut"}){const u=f2(l)?l.map(a0):a0(l),f={done:!1,value:i[0]},d=v2(o&&o.length===i.length?o:g2(i),n),p=m2(d,i,{ease:Array.isArray(u)?u:y2(i,u)});return{calculatedDuration:n,next:h=>(f.value=p(h),f.done=h>=n,f)}}const b2=n=>{const i=({timestamp:o})=>n(o);return{start:()=>Dt.update(i,!0),stop:()=>na(i),now:()=>ee.isProcessing?ee.timestamp:en.now()}},x2={decay:n0,inertia:n0,tween:kl,keyframes:kl,spring:Sv},S2=n=>n/100;class Cf extends vv{constructor(i){super(i),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:h}=this.options;h&&h()};const{name:o,motionValue:l,element:u,keyframes:f}=this.options,d=(u==null?void 0:u.KeyframeResolver)||Rf,p=(h,m)=>this.onKeyframesResolved(h,m);this.resolver=new d(f,p,o,l,u),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(i){const{type:o="keyframes",repeat:l=0,repeatDelay:u=0,repeatType:f,velocity:d=0}=this.options,p=lf(o)?o:x2[o]||kl;let h,m;p!==kl&&typeof i[0]!="number"&&(h=to(S2,bv(i[0],i[1])),i=[0,100]);const v=p({...this.options,keyframes:i});f==="mirror"&&(m=p({...this.options,keyframes:[...i].reverse(),velocity:-d})),v.calculatedDuration===null&&(v.calculatedDuration=Sg(v));const{calculatedDuration:b}=v,x=b+u,A=x*(l+1)-u;return{generator:v,mirroredGenerator:m,mapPercentToKeyframes:h,calculatedDuration:b,resolvedDuration:x,totalDuration:A}}onPostResolved(){const{autoplay:i=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!i?this.pause():this.state=this.pendingPlayState}tick(i,o=!1){const{resolved:l}=this;if(!l){const{keyframes:K}=this.options;return{done:!0,value:K[K.length-1]}}const{finalKeyframe:u,generator:f,mirroredGenerator:d,mapPercentToKeyframes:p,keyframes:h,calculatedDuration:m,totalDuration:v,resolvedDuration:b}=l;if(this.startTime===null)return f.next(0);const{delay:x,repeat:A,repeatType:T,repeatDelay:E,onUpdate:C}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-v/this.speed,this.startTime)),o?this.currentTime=i:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(i-this.startTime)*this.speed;const R=this.currentTime-x*(this.speed>=0?1:-1),B=this.speed>=0?R<0:R>v;this.currentTime=Math.max(R,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=v);let V=this.currentTime,G=f;if(A){const K=Math.min(this.currentTime,v)/b;let j=Math.floor(K),tt=K%1;!tt&&K>=1&&(tt=1),tt===1&&j--,j=Math.min(j,A+1),!!(j%2)&&(T==="reverse"?(tt=1-tt,E&&(tt-=E/b)):T==="mirror"&&(G=d)),V=Rn(0,1,tt)*b}const q=B?{done:!1,value:h[0]}:G.next(V);p&&(q.value=p(q.value));let{done:W}=q;!B&&m!==null&&(W=this.speed>=0?this.currentTime>=v:this.currentTime<=0);const ot=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&W);return ot&&u!==void 0&&(q.value=jl(h,this.options,u)),C&&C(q.value),ot&&this.finish(),q}get duration(){const{resolved:i}=this;return i?Dn(i.calculatedDuration):0}get time(){return Dn(this.currentTime)}set time(i){i=On(i),this.currentTime=i,this.holdTime!==null||this.speed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.speed)}get speed(){return this.playbackSpeed}set speed(i){const o=this.playbackSpeed!==i;this.playbackSpeed=i,o&&(this.time=Dn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:i=b2,onPlay:o,startTime:l}=this.options;this.driver||(this.driver=i(f=>this.tick(f))),o&&o();const u=this.driver.now();this.holdTime!==null?this.startTime=u-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=u):this.startTime=l??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var i;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(i=this.currentTime)!==null&&i!==void 0?i:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:i}=this.options;i&&i()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}}const T2=new Set(["opacity","clipPath","filter","transform"]);function A2(n,i,o,{delay:l=0,duration:u=300,repeat:f=0,repeatType:d="loop",ease:p="easeInOut",times:h}={}){const m={[i]:o};h&&(m.offset=h);const v=Eg(p,u);return Array.isArray(v)&&(m.easing=v),n.animate(m,{delay:l,duration:u,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:f+1,direction:d==="reverse"?"alternate":"normal"})}const E2=af(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Vl=10,O2=2e4;function D2(n){return lf(n.type)||n.type==="spring"||!Ag(n.ease)}function M2(n,i){const o=new Cf({...i,keyframes:n,repeat:0,delay:0,isGenerator:!0});let l={done:!1,value:n[0]};const u=[];let f=0;for(;!l.done&&f<O2;)l=o.sample(f),u.push(l.value),f+=Vl;return{times:void 0,keyframes:u,duration:f-Vl,ease:"linear"}}const Av={anticipate:Ig,backInOut:Wg,circInOut:ev};function R2(n){return n in Av}class i0 extends vv{constructor(i){super(i);const{name:o,motionValue:l,element:u,keyframes:f}=this.options;this.resolver=new gv(f,(d,p)=>this.onKeyframesResolved(d,p),o,l,u),this.resolver.scheduleResolve()}initPlayback(i,o){let{duration:l=300,times:u,ease:f,type:d,motionValue:p,name:h,startTime:m}=this.options;if(!p.owner||!p.owner.current)return!1;if(typeof f=="string"&&Cl()&&R2(f)&&(f=Av[f]),D2(this.options)){const{onComplete:b,onUpdate:x,motionValue:A,element:T,...E}=this.options,C=M2(i,E);i=C.keyframes,i.length===1&&(i[1]=i[0]),l=C.duration,u=C.times,f=C.ease,d="keyframes"}const v=A2(p.owner.current,h,i,{...this.options,duration:l,times:u,ease:f});return v.startTime=m??this.calcStartTime(),this.pendingTimeline?(Cp(v,this.pendingTimeline),this.pendingTimeline=void 0):v.onfinish=()=>{const{onComplete:b}=this.options;p.set(jl(i,this.options,o)),b&&b(),this.cancel(),this.resolveFinishedPromise()},{animation:v,duration:l,times:u,type:d,ease:f,keyframes:i}}get duration(){const{resolved:i}=this;if(!i)return 0;const{duration:o}=i;return Dn(o)}get time(){const{resolved:i}=this;if(!i)return 0;const{animation:o}=i;return Dn(o.currentTime||0)}set time(i){const{resolved:o}=this;if(!o)return;const{animation:l}=o;l.currentTime=On(i)}get speed(){const{resolved:i}=this;if(!i)return 1;const{animation:o}=i;return o.playbackRate}set speed(i){const{resolved:o}=this;if(!o)return;const{animation:l}=o;l.playbackRate=i}get state(){const{resolved:i}=this;if(!i)return"idle";const{animation:o}=i;return o.playState}get startTime(){const{resolved:i}=this;if(!i)return null;const{animation:o}=i;return o.startTime}attachTimeline(i){if(!this._resolved)this.pendingTimeline=i;else{const{resolved:o}=this;if(!o)return Ae;const{animation:l}=o;Cp(l,i)}return Ae}play(){if(this.isStopped)return;const{resolved:i}=this;if(!i)return;const{animation:o}=i;o.playState==="finished"&&this.updateFinishedPromise(),o.play()}pause(){const{resolved:i}=this;if(!i)return;const{animation:o}=i;o.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:i}=this;if(!i)return;const{animation:o,keyframes:l,duration:u,type:f,ease:d,times:p}=i;if(o.playState==="idle"||o.playState==="finished")return;if(this.time){const{motionValue:m,onUpdate:v,onComplete:b,element:x,...A}=this.options,T=new Cf({...A,keyframes:l,duration:u,type:f,ease:d,times:p,isGenerator:!0}),E=On(this.time);m.setWithVelocity(T.sample(E-Vl).value,T.sample(E).value,Vl)}const{onStop:h}=this.options;h&&h(),this.cancel()}complete(){const{resolved:i}=this;i&&i.animation.finish()}cancel(){const{resolved:i}=this;i&&i.animation.cancel()}static supports(i){const{motionValue:o,name:l,repeatDelay:u,repeatType:f,damping:d,type:p}=i;if(!o||!o.owner||!(o.owner.current instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:m}=o.owner.getProps();return E2()&&l&&T2.has(l)&&!h&&!m&&!u&&f!=="mirror"&&d!==0&&p!=="inertia"}}const w2={type:"spring",stiffness:500,damping:25,restSpeed:10},C2=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),z2={type:"keyframes",duration:.8},_2={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},k2=(n,{keyframes:i})=>i.length>2?z2:ka.has(n)?n.startsWith("scale")?C2(i[1]):w2:_2;function V2({when:n,delay:i,delayChildren:o,staggerChildren:l,staggerDirection:u,repeat:f,repeatType:d,repeatDelay:p,from:h,elapsed:m,...v}){return!!Object.keys(v).length}const zf=(n,i,o,l={},u,f)=>d=>{const p=of(l,n)||{},h=p.delay||l.delay||0;let{elapsed:m=0}=l;m=m-On(h);let v={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:i.getVelocity(),...p,delay:-m,onUpdate:x=>{i.set(x),p.onUpdate&&p.onUpdate(x)},onComplete:()=>{d(),p.onComplete&&p.onComplete()},name:n,motionValue:i,element:f?void 0:u};V2(p)||(v={...v,...k2(n,v)}),v.duration&&(v.duration=On(v.duration)),v.repeatDelay&&(v.repeatDelay=On(v.repeatDelay)),v.from!==void 0&&(v.keyframes[0]=v.from);let b=!1;if((v.type===!1||v.duration===0&&!v.repeatDelay)&&(v.duration=0,v.delay===0&&(b=!0)),v.allowFlatten=!p.type&&!p.ease,b&&!f&&i.get()!==void 0){const x=jl(v.keyframes,p);if(x!==void 0)return Dt.update(()=>{v.onUpdate(x),v.onComplete()}),new a5([])}return!f&&i0.supports(v)?new i0(v):new Cf(v)};function U2({protectedKeys:n,needsAnimating:i},o){const l=n.hasOwnProperty(o)&&i[o]!==!0;return i[o]=!1,l}function Ev(n,i,{delay:o=0,transitionOverride:l,type:u}={}){var f;let{transition:d=n.getDefaultTransition(),transitionEnd:p,...h}=i;l&&(d=l);const m=[],v=u&&n.animationState&&n.animationState.getState()[u];for(const b in h){const x=n.getValue(b,(f=n.latestValues[b])!==null&&f!==void 0?f:null),A=h[b];if(A===void 0||v&&U2(v,b))continue;const T={delay:o,...of(d||{},b)};let E=!1;if(window.MotionHandoffAnimation){const R=Kg(n);if(R){const B=window.MotionHandoffAnimation(R,b,Dt);B!==null&&(T.startTime=B,E=!0)}}Cc(n,b),x.start(zf(b,x,A,n.shouldReduceMotion&&Zg.has(b)?{type:!1}:T,n,E));const C=x.animation;C&&m.push(C)}return p&&Promise.all(m).then(()=>{Dt.update(()=>{p&&uS(n,p)})}),m}function Pc(n,i,o={}){var l;const u=Zr(n,i,o.type==="exit"?(l=n.presenceContext)===null||l===void 0?void 0:l.custom:void 0);let{transition:f=n.getDefaultTransition()||{}}=u||{};o.transitionOverride&&(f=o.transitionOverride);const d=u?()=>Promise.all(Ev(n,u,o)):()=>Promise.resolve(),p=n.variantChildren&&n.variantChildren.size?(m=0)=>{const{delayChildren:v=0,staggerChildren:b,staggerDirection:x}=f;return N2(n,i,v+m,b,x,o)}:()=>Promise.resolve(),{when:h}=f;if(h){const[m,v]=h==="beforeChildren"?[d,p]:[p,d];return m().then(()=>v())}else return Promise.all([d(),p(o.delay)])}function N2(n,i,o=0,l=0,u=1,f){const d=[],p=(n.variantChildren.size-1)*l,h=u===1?(m=0)=>m*l:(m=0)=>p-m*l;return Array.from(n.variantChildren).sort(B2).forEach((m,v)=>{m.notify("AnimationStart",i),d.push(Pc(m,i,{...f,delay:o+h(v)}).then(()=>m.notify("AnimationComplete",i)))}),Promise.all(d)}function B2(n,i){return n.sortNodePosition(i)}function L2(n,i,o={}){n.notify("AnimationStart",i);let l;if(Array.isArray(i)){const u=i.map(f=>Pc(n,f,o));l=Promise.all(u)}else if(typeof i=="string")l=Pc(n,i,o);else{const u=typeof i=="function"?Zr(n,i,o.custom):i;l=Promise.all(Ev(n,u,o))}return l.then(()=>{n.notify("AnimationComplete",i)})}function Ov(n,i){if(!Array.isArray(i))return!1;const o=i.length;if(o!==n.length)return!1;for(let l=0;l<o;l++)if(i[l]!==n[l])return!1;return!0}const q2=df.length;function Dv(n){if(!n)return;if(!n.isControllingVariants){const o=n.parent?Dv(n.parent)||{}:{};return n.props.initial!==void 0&&(o.initial=n.props.initial),o}const i={};for(let o=0;o<q2;o++){const l=df[o],u=n.props[l];(Yr(u)||u===!1)&&(i[l]=u)}return i}const P2=[...ff].reverse(),H2=ff.length;function j2(n){return i=>Promise.all(i.map(({animation:o,options:l})=>L2(n,o,l)))}function Y2(n){let i=j2(n),o=r0(),l=!0;const u=h=>(m,v)=>{var b;const x=Zr(n,v,h==="exit"?(b=n.presenceContext)===null||b===void 0?void 0:b.custom:void 0);if(x){const{transition:A,transitionEnd:T,...E}=x;m={...m,...E,...T}}return m};function f(h){i=h(n)}function d(h){const{props:m}=n,v=Dv(n.parent)||{},b=[],x=new Set;let A={},T=1/0;for(let C=0;C<H2;C++){const R=P2[C],B=o[R],V=m[R]!==void 0?m[R]:v[R],G=Yr(V),q=R===h?B.isActive:null;q===!1&&(T=C);let W=V===v[R]&&V!==m[R]&&G;if(W&&l&&n.manuallyAnimateOnMount&&(W=!1),B.protectedKeys={...A},!B.isActive&&q===null||!V&&!B.prevProp||Pl(V)||typeof V=="boolean")continue;const ot=X2(B.prevProp,V);let K=ot||R===h&&B.isActive&&!W&&G||C>T&&G,j=!1;const tt=Array.isArray(V)?V:[V];let kt=tt.reduce(u(R),{});q===!1&&(kt={});const{prevResolvedValues:Ee={}}=B,Oe={...Ee,...kt},De=F=>{K=!0,x.has(F)&&(j=!0,x.delete(F)),B.needsAnimating[F]=!0;const J=n.getValue(F);J&&(J.liveStyle=!1)};for(const F in Oe){const J=kt[F],vt=Ee[F];if(A.hasOwnProperty(F))continue;let O=!1;wc(J)&&wc(vt)?O=!Ov(J,vt):O=J!==vt,O?J!=null?De(F):x.add(F):J!==void 0&&x.has(F)?De(F):B.protectedKeys[F]=!0}B.prevProp=V,B.prevResolvedValues=kt,B.isActive&&(A={...A,...kt}),l&&n.blockInitialAnimation&&(K=!1),K&&(!(W&&ot)||j)&&b.push(...tt.map(F=>({animation:F,options:{type:R}})))}if(x.size){const C={};if(typeof m.initial!="boolean"){const R=Zr(n,Array.isArray(m.initial)?m.initial[0]:m.initial);R&&R.transition&&(C.transition=R.transition)}x.forEach(R=>{const B=n.getBaseTarget(R),V=n.getValue(R);V&&(V.liveStyle=!0),C[R]=B??null}),b.push({animation:C})}let E=!!b.length;return l&&(m.initial===!1||m.initial===m.animate)&&!n.manuallyAnimateOnMount&&(E=!1),l=!1,E?i(b):Promise.resolve()}function p(h,m){var v;if(o[h].isActive===m)return Promise.resolve();(v=n.variantChildren)===null||v===void 0||v.forEach(x=>{var A;return(A=x.animationState)===null||A===void 0?void 0:A.setActive(h,m)}),o[h].isActive=m;const b=d(h);for(const x in o)o[x].protectedKeys={};return b}return{animateChanges:d,setActive:p,setAnimateFunction:f,getState:()=>o,reset:()=>{o=r0(),l=!0}}}function X2(n,i){return typeof i=="string"?i!==n:Array.isArray(i)?!Ov(i,n):!1}function Ma(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function r0(){return{animate:Ma(!0),whileInView:Ma(),whileHover:Ma(),whileTap:Ma(),whileDrag:Ma(),whileFocus:Ma(),exit:Ma()}}class ia{constructor(i){this.isMounted=!1,this.node=i}update(){}}class G2 extends ia{constructor(i){super(i),i.animationState||(i.animationState=Y2(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();Pl(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:o}=this.node.prevProps||{};i!==o&&this.updateAnimationControlsSubscription()}unmount(){var i;this.node.animationState.reset(),(i=this.unmountControls)===null||i===void 0||i.call(this)}}let Z2=0;class K2 extends ia{constructor(){super(...arguments),this.id=Z2++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:o}=this.node.presenceContext,{isPresent:l}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===l)return;const u=this.node.animationState.setActive("exit",!i);o&&!i&&u.then(()=>{o(this.id)})}mount(){const{register:i,onExitComplete:o}=this.node.presenceContext||{};o&&o(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const Q2={animation:{Feature:G2},exit:{Feature:K2}};function Qr(n,i,o,l={passive:!0}){return n.addEventListener(i,o,l),()=>n.removeEventListener(i,o)}function eo(n){return{point:{x:n.pageX,y:n.pageY}}}const F2=n=>i=>cf(i)&&n(i,eo(i));function Lr(n,i,o,l){return Qr(n,i,F2(o),l)}function Mv({top:n,left:i,right:o,bottom:l}){return{x:{min:i,max:o},y:{min:n,max:l}}}function J2({x:n,y:i}){return{top:i.min,right:n.max,bottom:i.max,left:n.min}}function $2(n,i){if(!i)return n;const o=i({x:n.left,y:n.top}),l=i({x:n.right,y:n.bottom});return{top:o.y,left:o.x,bottom:l.y,right:l.x}}const Rv=1e-4,W2=1-Rv,I2=1+Rv,wv=.01,tT=0-wv,eT=0+wv;function fe(n){return n.max-n.min}function nT(n,i,o){return Math.abs(n-i)<=o}function o0(n,i,o,l=.5){n.origin=l,n.originPoint=zt(i.min,i.max,n.origin),n.scale=fe(o)/fe(i),n.translate=zt(o.min,o.max,n.origin)-n.originPoint,(n.scale>=W2&&n.scale<=I2||isNaN(n.scale))&&(n.scale=1),(n.translate>=tT&&n.translate<=eT||isNaN(n.translate))&&(n.translate=0)}function qr(n,i,o,l){o0(n.x,i.x,o.x,l?l.originX:void 0),o0(n.y,i.y,o.y,l?l.originY:void 0)}function l0(n,i,o){n.min=o.min+i.min,n.max=n.min+fe(i)}function aT(n,i,o){l0(n.x,i.x,o.x),l0(n.y,i.y,o.y)}function s0(n,i,o){n.min=i.min-o.min,n.max=n.min+fe(i)}function Pr(n,i,o){s0(n.x,i.x,o.x),s0(n.y,i.y,o.y)}const u0=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ti=()=>({x:u0(),y:u0()}),c0=()=>({min:0,max:0}),Pt=()=>({x:c0(),y:c0()});function Pe(n){return[n("x"),n("y")]}function gc(n){return n===void 0||n===1}function Hc({scale:n,scaleX:i,scaleY:o}){return!gc(n)||!gc(i)||!gc(o)}function Ra(n){return Hc(n)||Cv(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Cv(n){return f0(n.x)||f0(n.y)}function f0(n){return n&&n!=="0%"}function Ul(n,i,o){const l=n-o,u=i*l;return o+u}function d0(n,i,o,l,u){return u!==void 0&&(n=Ul(n,u,l)),Ul(n,o,l)+i}function jc(n,i=0,o=1,l,u){n.min=d0(n.min,i,o,l,u),n.max=d0(n.max,i,o,l,u)}function zv(n,{x:i,y:o}){jc(n.x,i.translate,i.scale,i.originPoint),jc(n.y,o.translate,o.scale,o.originPoint)}const h0=.999999999999,m0=1.0000000000001;function iT(n,i,o,l=!1){const u=o.length;if(!u)return;i.x=i.y=1;let f,d;for(let p=0;p<u;p++){f=o[p],d=f.projectionDelta;const{visualElement:h}=f.options;h&&h.props.style&&h.props.style.display==="contents"||(l&&f.options.layoutScroll&&f.scroll&&f!==f.root&&Ei(n,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),d&&(i.x*=d.x.scale,i.y*=d.y.scale,zv(n,d)),l&&Ra(f.latestValues)&&Ei(n,f.latestValues))}i.x<m0&&i.x>h0&&(i.x=1),i.y<m0&&i.y>h0&&(i.y=1)}function Ai(n,i){n.min=n.min+i,n.max=n.max+i}function p0(n,i,o,l,u=.5){const f=zt(n.min,n.max,u);jc(n,i,o,f,l)}function Ei(n,i){p0(n.x,i.x,i.scaleX,i.scale,i.originX),p0(n.y,i.y,i.scaleY,i.scale,i.originY)}function _v(n,i){return Mv($2(n.getBoundingClientRect(),i))}function rT(n,i,o){const l=_v(n,o),{scroll:u}=i;return u&&(Ai(l.x,u.offset.x),Ai(l.y,u.offset.y)),l}const kv=({current:n})=>n?n.ownerDocument.defaultView:null,g0=(n,i)=>Math.abs(n-i);function oT(n,i){const o=g0(n.x,i.x),l=g0(n.y,i.y);return Math.sqrt(o**2+l**2)}class Vv{constructor(i,o,{transformPagePoint:l,contextWindow:u,dragSnapToOrigin:f=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=yc(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,A=oT(b.offset,{x:0,y:0})>=3;if(!x&&!A)return;const{point:T}=b,{timestamp:E}=ee;this.history.push({...T,timestamp:E});const{onStart:C,onMove:R}=this.handlers;x||(C&&C(this.lastMoveEvent,b),this.startEvent=this.lastMoveEvent),R&&R(this.lastMoveEvent,b)},this.handlePointerMove=(b,x)=>{this.lastMoveEvent=b,this.lastMoveEventInfo=vc(x,this.transformPagePoint),Dt.update(this.updatePoint,!0)},this.handlePointerUp=(b,x)=>{this.end();const{onEnd:A,onSessionEnd:T,resumeAnimation:E}=this.handlers;if(this.dragSnapToOrigin&&E&&E(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const C=yc(b.type==="pointercancel"?this.lastMoveEventInfo:vc(x,this.transformPagePoint),this.history);this.startEvent&&A&&A(b,C),T&&T(b,C)},!cf(i))return;this.dragSnapToOrigin=f,this.handlers=o,this.transformPagePoint=l,this.contextWindow=u||window;const d=eo(i),p=vc(d,this.transformPagePoint),{point:h}=p,{timestamp:m}=ee;this.history=[{...h,timestamp:m}];const{onSessionStart:v}=o;v&&v(i,yc(p,this.history)),this.removeListeners=to(Lr(this.contextWindow,"pointermove",this.handlePointerMove),Lr(this.contextWindow,"pointerup",this.handlePointerUp),Lr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),na(this.updatePoint)}}function vc(n,i){return i?{point:i(n.point)}:n}function v0(n,i){return{x:n.x-i.x,y:n.y-i.y}}function yc({point:n},i){return{point:n,delta:v0(n,Uv(i)),offset:v0(n,lT(i)),velocity:sT(i,.1)}}function lT(n){return n[0]}function Uv(n){return n[n.length-1]}function sT(n,i){if(n.length<2)return{x:0,y:0};let o=n.length-1,l=null;const u=Uv(n);for(;o>=0&&(l=n[o],!(u.timestamp-l.timestamp>On(i)));)o--;if(!l)return{x:0,y:0};const f=Dn(u.timestamp-l.timestamp);if(f===0)return{x:0,y:0};const d={x:(u.x-l.x)/f,y:(u.y-l.y)/f};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function uT(n,{min:i,max:o},l){return i!==void 0&&n<i?n=l?zt(i,n,l.min):Math.max(n,i):o!==void 0&&n>o&&(n=l?zt(o,n,l.max):Math.min(n,o)),n}function y0(n,i,o){return{min:i!==void 0?n.min+i:void 0,max:o!==void 0?n.max+o-(n.max-n.min):void 0}}function cT(n,{top:i,left:o,bottom:l,right:u}){return{x:y0(n.x,o,u),y:y0(n.y,i,l)}}function b0(n,i){let o=i.min-n.min,l=i.max-n.max;return i.max-i.min<n.max-n.min&&([o,l]=[l,o]),{min:o,max:l}}function fT(n,i){return{x:b0(n.x,i.x),y:b0(n.y,i.y)}}function dT(n,i){let o=.5;const l=fe(n),u=fe(i);return u>l?o=Oi(i.min,i.max-l,n.min):l>u&&(o=Oi(n.min,n.max-u,i.min)),Rn(0,1,o)}function hT(n,i){const o={};return i.min!==void 0&&(o.min=i.min-n.min),i.max!==void 0&&(o.max=i.max-n.min),o}const Yc=.35;function mT(n=Yc){return n===!1?n=0:n===!0&&(n=Yc),{x:x0(n,"left","right"),y:x0(n,"top","bottom")}}function x0(n,i,o){return{min:S0(n,i),max:S0(n,o)}}function S0(n,i){return typeof n=="number"?n:n[i]||0}const pT=new WeakMap;class gT{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Pt(),this.visualElement=i}start(i,{snapToCursor:o=!1}={}){const{presenceContext:l}=this.visualElement;if(l&&l.isPresent===!1)return;const u=v=>{const{dragSnapToOrigin:b}=this.getProps();b?this.pauseAnimation():this.stopAnimation(),o&&this.snapToCursor(eo(v).point)},f=(v,b)=>{const{drag:x,dragPropagation:A,onDragStart:T}=this.getProps();if(x&&!A&&(this.openDragLock&&this.openDragLock(),this.openDragLock=u5(x),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Pe(C=>{let R=this.getAxisMotionValue(C).get()||0;if(nn.test(R)){const{projection:B}=this.visualElement;if(B&&B.layout){const V=B.layout.layoutBox[C];V&&(R=fe(V)*(parseFloat(R)/100))}}this.originPoint[C]=R}),T&&Dt.postRender(()=>T(v,b)),Cc(this.visualElement,"transform");const{animationState:E}=this.visualElement;E&&E.setActive("whileDrag",!0)},d=(v,b)=>{const{dragPropagation:x,dragDirectionLock:A,onDirectionLock:T,onDrag:E}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:C}=b;if(A&&this.currentDirection===null){this.currentDirection=vT(C),this.currentDirection!==null&&T&&T(this.currentDirection);return}this.updateAxis("x",b.point,C),this.updateAxis("y",b.point,C),this.visualElement.render(),E&&E(v,b)},p=(v,b)=>this.stop(v,b),h=()=>Pe(v=>{var b;return this.getAnimationState(v)==="paused"&&((b=this.getAxisMotionValue(v).animation)===null||b===void 0?void 0:b.play())}),{dragSnapToOrigin:m}=this.getProps();this.panSession=new Vv(i,{onSessionStart:u,onStart:f,onMove:d,onSessionEnd:p,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,contextWindow:kv(this.visualElement)})}stop(i,o){const l=this.isDragging;if(this.cancel(),!l)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:f}=this.getProps();f&&Dt.postRender(()=>f(i,o))}cancel(){this.isDragging=!1;const{projection:i,animationState:o}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:l}=this.getProps();!l&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}updateAxis(i,o,l){const{drag:u}=this.getProps();if(!l||!Sl(i,u,this.currentDirection))return;const f=this.getAxisMotionValue(i);let d=this.originPoint[i]+l[i];this.constraints&&this.constraints[i]&&(d=uT(d,this.constraints[i],this.elastic[i])),f.set(d)}resolveConstraints(){var i;const{dragConstraints:o,dragElastic:l}=this.getProps(),u=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(i=this.visualElement.projection)===null||i===void 0?void 0:i.layout,f=this.constraints;o&&xi(o)?this.constraints||(this.constraints=this.resolveRefConstraints()):o&&u?this.constraints=cT(u.layoutBox,o):this.constraints=!1,this.elastic=mT(l),f!==this.constraints&&u&&this.constraints&&!this.hasMutatedConstraints&&Pe(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=hT(u.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:o}=this.getProps();if(!i||!xi(i))return!1;const l=i.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;const f=rT(l,u.root,this.visualElement.getTransformPagePoint());let d=fT(u.layout.layoutBox,f);if(o){const p=o(J2(d));this.hasMutatedConstraints=!!p,p&&(d=Mv(p))}return d}startAnimation(i){const{drag:o,dragMomentum:l,dragElastic:u,dragTransition:f,dragSnapToOrigin:d,onDragTransitionEnd:p}=this.getProps(),h=this.constraints||{},m=Pe(v=>{if(!Sl(v,o,this.currentDirection))return;let b=h&&h[v]||{};d&&(b={min:0,max:0});const x=u?200:1e6,A=u?40:1e7,T={type:"inertia",velocity:l?i[v]:0,bounceStiffness:x,bounceDamping:A,timeConstant:750,restDelta:1,restSpeed:10,...f,...b};return this.startAxisValueAnimation(v,T)});return Promise.all(m).then(p)}startAxisValueAnimation(i,o){const l=this.getAxisMotionValue(i);return Cc(this.visualElement,i),l.start(zf(i,l,0,o,this.visualElement,!1))}stopAnimation(){Pe(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){Pe(i=>{var o;return(o=this.getAxisMotionValue(i).animation)===null||o===void 0?void 0:o.pause()})}getAnimationState(i){var o;return(o=this.getAxisMotionValue(i).animation)===null||o===void 0?void 0:o.state}getAxisMotionValue(i){const o=`_drag${i.toUpperCase()}`,l=this.visualElement.getProps(),u=l[o];return u||this.visualElement.getValue(i,(l.initial?l.initial[i]:void 0)||0)}snapToCursor(i){Pe(o=>{const{drag:l}=this.getProps();if(!Sl(o,l,this.currentDirection))return;const{projection:u}=this.visualElement,f=this.getAxisMotionValue(o);if(u&&u.layout){const{min:d,max:p}=u.layout.layoutBox[o];f.set(i[o]-zt(d,p,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:o}=this.getProps(),{projection:l}=this.visualElement;if(!xi(o)||!l||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};Pe(d=>{const p=this.getAxisMotionValue(d);if(p&&this.constraints!==!1){const h=p.get();u[d]=dT({min:h,max:h},this.constraints[d])}});const{transformTemplate:f}=this.visualElement.getProps();this.visualElement.current.style.transform=f?f({},""):"none",l.root&&l.root.updateScroll(),l.updateLayout(),this.resolveConstraints(),Pe(d=>{if(!Sl(d,i,null))return;const p=this.getAxisMotionValue(d),{min:h,max:m}=this.constraints[d];p.set(zt(h,m,u[d]))})}addListeners(){if(!this.visualElement.current)return;pT.set(this.visualElement,this);const i=this.visualElement.current,o=Lr(i,"pointerdown",h=>{const{drag:m,dragListener:v=!0}=this.getProps();m&&v&&this.start(h)}),l=()=>{const{dragConstraints:h}=this.getProps();xi(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:u}=this.visualElement,f=u.addEventListener("measure",l);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),Dt.read(l);const d=Qr(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",({delta:h,hasLayoutChanged:m})=>{this.isDragging&&m&&(Pe(v=>{const b=this.getAxisMotionValue(v);b&&(this.originPoint[v]+=h[v].translate,b.set(b.get()+h[v].translate))}),this.visualElement.render())});return()=>{d(),o(),f(),p&&p()}}getProps(){const i=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:l=!1,dragPropagation:u=!1,dragConstraints:f=!1,dragElastic:d=Yc,dragMomentum:p=!0}=i;return{...i,drag:o,dragDirectionLock:l,dragPropagation:u,dragConstraints:f,dragElastic:d,dragMomentum:p}}}function Sl(n,i,o){return(i===!0||i===n)&&(o===null||o===n)}function vT(n,i=10){let o=null;return Math.abs(n.y)>i?o="y":Math.abs(n.x)>i&&(o="x"),o}class yT extends ia{constructor(i){super(i),this.removeGroupControls=Ae,this.removeListeners=Ae,this.controls=new gT(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ae}unmount(){this.removeGroupControls(),this.removeListeners()}}const T0=n=>(i,o)=>{n&&Dt.postRender(()=>n(i,o))};class bT extends ia{constructor(){super(...arguments),this.removePointerDownListener=Ae}onPointerDown(i){this.session=new Vv(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:kv(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:o,onPan:l,onPanEnd:u}=this.node.getProps();return{onSessionStart:T0(i),onStart:T0(o),onMove:l,onEnd:(f,d)=>{delete this.session,u&&Dt.postRender(()=>u(f,d))}}}mount(){this.removePointerDownListener=Lr(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Rl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function A0(n,i){return i.max===i.min?0:n/(i.max-i.min)*100}const kr={correct:(n,i)=>{if(!i.target)return n;if(typeof n=="string")if(at.test(n))n=parseFloat(n);else return n;const o=A0(n,i.target.x),l=A0(n,i.target.y);return`${o}% ${l}%`}},xT={correct:(n,{treeScale:i,projectionDelta:o})=>{const l=n,u=aa.parse(n);if(u.length>5)return l;const f=aa.createTransformer(n),d=typeof u[0]!="number"?1:0,p=o.x.scale*i.x,h=o.y.scale*i.y;u[0+d]/=p,u[1+d]/=h;const m=zt(p,h,.5);return typeof u[2+d]=="number"&&(u[2+d]/=m),typeof u[3+d]=="number"&&(u[3+d]/=m),f(u)}};class ST extends _.Component{componentDidMount(){const{visualElement:i,layoutGroup:o,switchLayoutGroup:l,layoutId:u}=this.props,{projection:f}=i;B5(TT),f&&(o.group&&o.group.add(f),l&&l.register&&u&&l.register(f),f.root.didUpdate(),f.addEventListener("animationComplete",()=>{this.safeToRemove()}),f.setOptions({...f.options,onExitComplete:()=>this.safeToRemove()})),Rl.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:o,visualElement:l,drag:u,isPresent:f}=this.props,d=l.projection;return d&&(d.isPresent=f,u||i.layoutDependency!==o||o===void 0||i.isPresent!==f?d.willUpdate():this.safeToRemove(),i.isPresent!==f&&(f?d.promote():d.relegate()||Dt.postRender(()=>{const p=d.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),uf.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:o,switchLayoutGroup:l}=this.props,{projection:u}=i;u&&(u.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(u),l&&l.deregister&&l.deregister(u))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function Nv(n){const[i,o]=Ix(),l=_.useContext(vg);return Lt.jsx(ST,{...n,layoutGroup:l,switchLayoutGroup:_.useContext(kg),isPresent:i,safeToRemove:o})}const TT={borderRadius:{...kr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:kr,borderTopRightRadius:kr,borderBottomLeftRadius:kr,borderBottomRightRadius:kr,boxShadow:xT};function AT(n,i,o){const l=oe(n)?n:jr(n);return l.start(zf("",l,i,o)),l.animation}function ET(n){return n instanceof SVGElement&&n.tagName!=="svg"}const OT=(n,i)=>n.depth-i.depth;class DT{constructor(){this.children=[],this.isDirty=!1}add(i){ef(this.children,i),this.isDirty=!0}remove(i){nf(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(OT),this.isDirty=!1,this.children.forEach(i)}}function MT(n,i){const o=en.now(),l=({timestamp:u})=>{const f=u-o;f>=i&&(na(l),n(f-i))};return Dt.read(l,!0),()=>na(l)}const Bv=["TopLeft","TopRight","BottomLeft","BottomRight"],RT=Bv.length,E0=n=>typeof n=="string"?parseFloat(n):n,O0=n=>typeof n=="number"||at.test(n);function wT(n,i,o,l,u,f){u?(n.opacity=zt(0,o.opacity!==void 0?o.opacity:1,CT(l)),n.opacityExit=zt(i.opacity!==void 0?i.opacity:1,0,zT(l))):f&&(n.opacity=zt(i.opacity!==void 0?i.opacity:1,o.opacity!==void 0?o.opacity:1,l));for(let d=0;d<RT;d++){const p=`border${Bv[d]}Radius`;let h=D0(i,p),m=D0(o,p);if(h===void 0&&m===void 0)continue;h||(h=0),m||(m=0),h===0||m===0||O0(h)===O0(m)?(n[p]=Math.max(zt(E0(h),E0(m),l),0),(nn.test(m)||nn.test(h))&&(n[p]+="%")):n[p]=m}(i.rotate||o.rotate)&&(n.rotate=zt(i.rotate||0,o.rotate||0,l))}function D0(n,i){return n[i]!==void 0?n[i]:n.borderRadius}const CT=Lv(0,.5,tv),zT=Lv(.5,.95,Ae);function Lv(n,i,o){return l=>l<n?0:l>i?1:o(Oi(n,i,l))}function M0(n,i){n.min=i.min,n.max=i.max}function qe(n,i){M0(n.x,i.x),M0(n.y,i.y)}function R0(n,i){n.translate=i.translate,n.scale=i.scale,n.originPoint=i.originPoint,n.origin=i.origin}function w0(n,i,o,l,u){return n-=i,n=Ul(n,1/o,l),u!==void 0&&(n=Ul(n,1/u,l)),n}function _T(n,i=0,o=1,l=.5,u,f=n,d=n){if(nn.test(i)&&(i=parseFloat(i),i=zt(d.min,d.max,i/100)-d.min),typeof i!="number")return;let p=zt(f.min,f.max,l);n===f&&(p-=i),n.min=w0(n.min,i,o,p,u),n.max=w0(n.max,i,o,p,u)}function C0(n,i,[o,l,u],f,d){_T(n,i[o],i[l],i[u],i.scale,f,d)}const kT=["x","scaleX","originX"],VT=["y","scaleY","originY"];function z0(n,i,o,l){C0(n.x,i,kT,o?o.x:void 0,l?l.x:void 0),C0(n.y,i,VT,o?o.y:void 0,l?l.y:void 0)}function _0(n){return n.translate===0&&n.scale===1}function qv(n){return _0(n.x)&&_0(n.y)}function k0(n,i){return n.min===i.min&&n.max===i.max}function UT(n,i){return k0(n.x,i.x)&&k0(n.y,i.y)}function V0(n,i){return Math.round(n.min)===Math.round(i.min)&&Math.round(n.max)===Math.round(i.max)}function Pv(n,i){return V0(n.x,i.x)&&V0(n.y,i.y)}function U0(n){return fe(n.x)/fe(n.y)}function N0(n,i){return n.translate===i.translate&&n.scale===i.scale&&n.originPoint===i.originPoint}class NT{constructor(){this.members=[]}add(i){ef(this.members,i),i.scheduleRender()}remove(i){if(nf(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(i){const o=this.members.findIndex(u=>i===u);if(o===0)return!1;let l;for(let u=o;u>=0;u--){const f=this.members[u];if(f.isPresent!==!1){l=f;break}}return l?(this.promote(l),!0):!1}promote(i,o){const l=this.lead;if(i!==l&&(this.prevLead=l,this.lead=i,i.show(),l)){l.instance&&l.scheduleRender(),i.scheduleRender(),i.resumeFrom=l,o&&(i.resumeFrom.preserveOpacity=!0),l.snapshot&&(i.snapshot=l.snapshot,i.snapshot.latestValues=l.animationValues||l.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:u}=i.options;u===!1&&l.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:o,resumingFrom:l}=i;o.onExitComplete&&o.onExitComplete(),l&&l.options.onExitComplete&&l.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function BT(n,i,o){let l="";const u=n.x.translate/i.x,f=n.y.translate/i.y,d=(o==null?void 0:o.z)||0;if((u||f||d)&&(l=`translate3d(${u}px, ${f}px, ${d}px) `),(i.x!==1||i.y!==1)&&(l+=`scale(${1/i.x}, ${1/i.y}) `),o){const{transformPerspective:m,rotate:v,rotateX:b,rotateY:x,skewX:A,skewY:T}=o;m&&(l=`perspective(${m}px) ${l}`),v&&(l+=`rotate(${v}deg) `),b&&(l+=`rotateX(${b}deg) `),x&&(l+=`rotateY(${x}deg) `),A&&(l+=`skewX(${A}deg) `),T&&(l+=`skewY(${T}deg) `)}const p=n.x.scale*i.x,h=n.y.scale*i.y;return(p!==1||h!==1)&&(l+=`scale(${p}, ${h})`),l||"none"}const bc=["","X","Y","Z"],LT={visibility:"hidden"},B0=1e3;let qT=0;function xc(n,i,o,l){const{latestValues:u}=i;u[n]&&(o[n]=u[n],i.setStaticValue(n,0),l&&(l[n]=0))}function Hv(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:i}=n.options;if(!i)return;const o=Kg(i);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:u,layoutId:f}=n.options;window.MotionCancelOptimisedAnimation(o,"transform",Dt,!(u||f))}const{parent:l}=n;l&&!l.hasCheckedOptimisedAppear&&Hv(l)}function jv({attachResizeListener:n,defaultParent:i,measureScroll:o,checkIsScrollRoot:l,resetTransform:u}){return class{constructor(d={},p=i==null?void 0:i()){this.id=qT++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(jT),this.nodes.forEach(KT),this.nodes.forEach(QT),this.nodes.forEach(YT)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new DT)}addEventListener(d,p){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new rf),this.eventHandlers.get(d).add(p)}notifyListeners(d,...p){const h=this.eventHandlers.get(d);h&&h.notify(...p)}hasListeners(d){return this.eventHandlers.has(d)}mount(d,p=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=ET(d),this.instance=d;const{layoutId:h,layout:m,visualElement:v}=this.options;if(v&&!v.current&&v.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),p&&(m||h)&&(this.isLayoutDirty=!0),n){let b;const x=()=>this.root.updateBlockedByResize=!1;n(d,()=>{this.root.updateBlockedByResize=!0,b&&b(),b=MT(x,250),Rl.hasAnimatedSinceResize&&(Rl.hasAnimatedSinceResize=!1,this.nodes.forEach(q0))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&v&&(h||m)&&this.addEventListener("didUpdate",({delta:b,hasLayoutChanged:x,hasRelativeLayoutChanged:A,layout:T})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||v.getDefaultTransition()||IT,{onLayoutAnimationStart:C,onLayoutAnimationComplete:R}=v.getProps(),B=!this.targetLayout||!Pv(this.targetLayout,T),V=!x&&A;if(this.options.layoutRoot||this.resumeFrom||V||x&&(B||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(b,V);const G={...of(E,"layout"),onPlay:C,onComplete:R};(v.shouldReduceMotion||this.options.layoutRoot)&&(G.delay=0,G.type=!1),this.startAnimation(G)}else x||q0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=T})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,na(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(FT),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Hv(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let v=0;v<this.path.length;v++){const b=this.path[v];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:p,layout:h}=this.options;if(p===void 0&&!h)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(L0);return}this.isUpdating||this.nodes.forEach(GT),this.isUpdating=!1,this.nodes.forEach(ZT),this.nodes.forEach(PT),this.nodes.forEach(HT),this.clearAllSnapshots();const p=en.now();ee.delta=Rn(0,1e3/60,p-ee.timestamp),ee.timestamp=p,ee.isProcessing=!0,fc.update.process(ee),fc.preRender.process(ee),fc.render.process(ee),ee.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,uf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(XT),this.sharedNodes.forEach(JT)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Dt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Dt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!fe(this.snapshot.measuredBox.x)&&!fe(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Pt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(p=!1),p){const h=l(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:h,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!u)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!qv(this.projectionDelta),h=this.getTransformTemplate(),m=h?h(this.latestValues,""):void 0,v=m!==this.prevTransformTemplateValue;d&&(p||Ra(this.latestValues)||v)&&(u(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const p=this.measurePageBox();let h=this.removeElementScroll(p);return d&&(h=this.removeTransform(h)),tA(h),{animationId:this.root.animationId,measuredBox:p,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var d;const{visualElement:p}=this.options;if(!p)return Pt();const h=p.measureViewportBox();if(!(((d=this.scroll)===null||d===void 0?void 0:d.wasRoot)||this.path.some(eA))){const{scroll:v}=this.root;v&&(Ai(h.x,v.offset.x),Ai(h.y,v.offset.y))}return h}removeElementScroll(d){var p;const h=Pt();if(qe(h,d),!((p=this.scroll)===null||p===void 0)&&p.wasRoot)return h;for(let m=0;m<this.path.length;m++){const v=this.path[m],{scroll:b,options:x}=v;v!==this.root&&b&&x.layoutScroll&&(b.wasRoot&&qe(h,d),Ai(h.x,b.offset.x),Ai(h.y,b.offset.y))}return h}applyTransform(d,p=!1){const h=Pt();qe(h,d);for(let m=0;m<this.path.length;m++){const v=this.path[m];!p&&v.options.layoutScroll&&v.scroll&&v!==v.root&&Ei(h,{x:-v.scroll.offset.x,y:-v.scroll.offset.y}),Ra(v.latestValues)&&Ei(h,v.latestValues)}return Ra(this.latestValues)&&Ei(h,this.latestValues),h}removeTransform(d){const p=Pt();qe(p,d);for(let h=0;h<this.path.length;h++){const m=this.path[h];if(!m.instance||!Ra(m.latestValues))continue;Hc(m.latestValues)&&m.updateSnapshot();const v=Pt(),b=m.measurePageBox();qe(v,b),z0(p,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,v)}return Ra(this.latestValues)&&z0(p,this.latestValues),p}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ee.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var p;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==h;if(!(d||m&&this.isSharedProjectionDirty||this.isProjectionDirty||!((p=this.parent)===null||p===void 0)&&p.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:b,layoutId:x}=this.options;if(!(!this.layout||!(b||x))){if(this.resolvedRelativeTargetAt=ee.timestamp,!this.targetDelta&&!this.relativeTarget){const A=this.getClosestProjectingParent();A&&A.layout&&this.animationProgress!==1?(this.relativeParent=A,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Pt(),this.relativeTargetOrigin=Pt(),Pr(this.relativeTargetOrigin,this.layout.layoutBox,A.layout.layoutBox),qe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Pt(),this.targetWithTransforms=Pt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),aT(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):qe(this.target,this.layout.layoutBox),zv(this.target,this.targetDelta)):qe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const A=this.getClosestProjectingParent();A&&!!A.resumingFrom==!!this.resumingFrom&&!A.options.layoutScroll&&A.target&&this.animationProgress!==1?(this.relativeParent=A,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Pt(),this.relativeTargetOrigin=Pt(),Pr(this.relativeTargetOrigin,this.target,A.target),qe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Hc(this.parent.latestValues)||Cv(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var d;const p=this.getLead(),h=!!this.resumingFrom||this!==p;let m=!0;if((this.isProjectionDirty||!((d=this.parent)===null||d===void 0)&&d.isProjectionDirty)&&(m=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===ee.timestamp&&(m=!1),m)return;const{layout:v,layoutId:b}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(v||b))return;qe(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,A=this.treeScale.y;iT(this.layoutCorrected,this.treeScale,this.path,h),p.layout&&!p.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(p.target=p.layout.layoutBox,p.targetWithTransforms=Pt());const{target:T}=p;if(!T){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(R0(this.prevProjectionDelta.x,this.projectionDelta.x),R0(this.prevProjectionDelta.y,this.projectionDelta.y)),qr(this.projectionDelta,this.layoutCorrected,T,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==A||!N0(this.projectionDelta.x,this.prevProjectionDelta.x)||!N0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",T))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var p;if((p=this.options.visualElement)===null||p===void 0||p.scheduleRender(),d){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ti(),this.projectionDelta=Ti(),this.projectionDeltaWithTransform=Ti()}setAnimationOrigin(d,p=!1){const h=this.snapshot,m=h?h.latestValues:{},v={...this.latestValues},b=Ti();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const x=Pt(),A=h?h.source:void 0,T=this.layout?this.layout.source:void 0,E=A!==T,C=this.getStack(),R=!C||C.members.length<=1,B=!!(E&&!R&&this.options.crossfade===!0&&!this.path.some(WT));this.animationProgress=0;let V;this.mixTargetDelta=G=>{const q=G/1e3;P0(b.x,d.x,q),P0(b.y,d.y,q),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Pr(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),$T(this.relativeTarget,this.relativeTargetOrigin,x,q),V&&UT(this.relativeTarget,V)&&(this.isProjectionDirty=!1),V||(V=Pt()),qe(V,this.relativeTarget)),E&&(this.animationValues=v,wT(v,m,this.latestValues,q,B,R)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=q},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(na(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Dt.update(()=>{Rl.hasAnimatedSinceResize=!0,this.currentAnimation=AT(0,B0,{...d,onUpdate:p=>{this.mixTargetDelta(p),d.onUpdate&&d.onUpdate(p)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(B0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:p,target:h,layout:m,latestValues:v}=d;if(!(!p||!h||!m)){if(this!==d&&this.layout&&m&&Yv(this.options.animationType,this.layout.layoutBox,m.layoutBox)){h=this.target||Pt();const b=fe(this.layout.layoutBox.x);h.x.min=d.target.x.min,h.x.max=h.x.min+b;const x=fe(this.layout.layoutBox.y);h.y.min=d.target.y.min,h.y.max=h.y.min+x}qe(p,h),Ei(p,v),qr(this.projectionDeltaWithTransform,this.layoutCorrected,p,v)}}registerSharedNode(d,p){this.sharedNodes.has(d)||this.sharedNodes.set(d,new NT),this.sharedNodes.get(d).add(p);const m=p.options.initialPromotionConfig;p.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(p):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var d;const{layoutId:p}=this.options;return p?((d=this.getStack())===null||d===void 0?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:p}=this.options;return p?(d=this.getStack())===null||d===void 0?void 0:d.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:p,preserveFollowOpacity:h}={}){const m=this.getStack();m&&m.promote(this,h),d&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let p=!1;const{latestValues:h}=d;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(p=!0),!p)return;const m={};h.z&&xc("z",d,m,this.animationValues);for(let v=0;v<bc.length;v++)xc(`rotate${bc[v]}`,d,m,this.animationValues),xc(`skew${bc[v]}`,d,m,this.animationValues);d.render();for(const v in m)d.setStaticValue(v,m[v]),this.animationValues&&(this.animationValues[v]=m[v]);d.scheduleRender()}getProjectionStyles(d){var p,h;if(!this.instance||this.isSVG)return;if(!this.isVisible)return LT;const m={visibility:""},v=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,m.opacity="",m.pointerEvents=Ml(d==null?void 0:d.pointerEvents)||"",m.transform=v?v(this.latestValues,""):"none",m;const b=this.getLead();if(!this.projectionDelta||!this.layout||!b.target){const E={};return this.options.layoutId&&(E.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,E.pointerEvents=Ml(d==null?void 0:d.pointerEvents)||""),this.hasProjected&&!Ra(this.latestValues)&&(E.transform=v?v({},""):"none",this.hasProjected=!1),E}const x=b.animationValues||b.latestValues;this.applyTransformsToTarget(),m.transform=BT(this.projectionDeltaWithTransform,this.treeScale,x),v&&(m.transform=v(x,m.transform));const{x:A,y:T}=this.projectionDelta;m.transformOrigin=`${A.origin*100}% ${T.origin*100}% 0`,b.animationValues?m.opacity=b===this?(h=(p=x.opacity)!==null&&p!==void 0?p:this.latestValues.opacity)!==null&&h!==void 0?h:1:this.preserveOpacity?this.latestValues.opacity:x.opacityExit:m.opacity=b===this?x.opacity!==void 0?x.opacity:"":x.opacityExit!==void 0?x.opacityExit:0;for(const E in Xr){if(x[E]===void 0)continue;const{correct:C,applyTo:R,isCSSVariable:B}=Xr[E],V=m.transform==="none"?x[E]:C(x[E],b);if(R){const G=R.length;for(let q=0;q<G;q++)m[R[q]]=V}else B?this.options.visualElement.renderState.vars[E]=V:m[E]=V}return this.options.layoutId&&(m.pointerEvents=b===this?Ml(d==null?void 0:d.pointerEvents)||"":"none"),m}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var p;return(p=d.currentAnimation)===null||p===void 0?void 0:p.stop()}),this.root.nodes.forEach(L0),this.root.sharedNodes.clear()}}}function PT(n){n.updateLayout()}function HT(n){var i;const o=((i=n.resumeFrom)===null||i===void 0?void 0:i.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&o&&n.hasListeners("didUpdate")){const{layoutBox:l,measuredBox:u}=n.layout,{animationType:f}=n.options,d=o.source!==n.layout.source;f==="size"?Pe(b=>{const x=d?o.measuredBox[b]:o.layoutBox[b],A=fe(x);x.min=l[b].min,x.max=x.min+A}):Yv(f,o.layoutBox,l)&&Pe(b=>{const x=d?o.measuredBox[b]:o.layoutBox[b],A=fe(l[b]);x.max=x.min+A,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[b].max=n.relativeTarget[b].min+A)});const p=Ti();qr(p,l,o.layoutBox);const h=Ti();d?qr(h,n.applyTransform(u,!0),o.measuredBox):qr(h,l,o.layoutBox);const m=!qv(p);let v=!1;if(!n.resumeFrom){const b=n.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:x,layout:A}=b;if(x&&A){const T=Pt();Pr(T,o.layoutBox,x.layoutBox);const E=Pt();Pr(E,l,A.layoutBox),Pv(T,E)||(v=!0),b.options.layoutRoot&&(n.relativeTarget=E,n.relativeTargetOrigin=T,n.relativeParent=b)}}}n.notifyListeners("didUpdate",{layout:l,snapshot:o,delta:h,layoutDelta:p,hasLayoutChanged:m,hasRelativeLayoutChanged:v})}else if(n.isLead()){const{onExitComplete:l}=n.options;l&&l()}n.options.transition=void 0}function jT(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function YT(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function XT(n){n.clearSnapshot()}function L0(n){n.clearMeasurements()}function GT(n){n.isLayoutDirty=!1}function ZT(n){const{visualElement:i}=n.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),n.resetTransform()}function q0(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function KT(n){n.resolveTargetDelta()}function QT(n){n.calcProjection()}function FT(n){n.resetSkewAndRotation()}function JT(n){n.removeLeadSnapshot()}function P0(n,i,o){n.translate=zt(i.translate,0,o),n.scale=zt(i.scale,1,o),n.origin=i.origin,n.originPoint=i.originPoint}function H0(n,i,o,l){n.min=zt(i.min,o.min,l),n.max=zt(i.max,o.max,l)}function $T(n,i,o,l){H0(n.x,i.x,o.x,l),H0(n.y,i.y,o.y,l)}function WT(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const IT={duration:.45,ease:[.4,0,.1,1]},j0=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Y0=j0("applewebkit/")&&!j0("chrome/")?Math.round:Ae;function X0(n){n.min=Y0(n.min),n.max=Y0(n.max)}function tA(n){X0(n.x),X0(n.y)}function Yv(n,i,o){return n==="position"||n==="preserve-aspect"&&!nT(U0(i),U0(o),.2)}function eA(n){var i;return n!==n.root&&((i=n.scroll)===null||i===void 0?void 0:i.wasRoot)}const nA=jv({attachResizeListener:(n,i)=>Qr(n,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Sc={current:void 0},Xv=jv({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Sc.current){const n=new nA({});n.mount(window),n.setOptions({layoutScroll:!0}),Sc.current=n}return Sc.current},resetTransform:(n,i)=>{n.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),aA={pan:{Feature:bT},drag:{Feature:yT,ProjectionNode:Xv,MeasureLayout:Nv}};function G0(n,i,o){const{props:l}=n;n.animationState&&l.whileHover&&n.animationState.setActive("whileHover",o==="Start");const u="onHover"+o,f=l[u];f&&Dt.postRender(()=>f(i,eo(i)))}class iA extends ia{mount(){const{current:i}=this.node;i&&(this.unmount=f5(i,(o,l)=>(G0(this.node,l,"Start"),u=>G0(this.node,u,"End"))))}unmount(){}}class rA extends ia{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=to(Qr(this.node.current,"focus",()=>this.onFocus()),Qr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Z0(n,i,o){const{props:l}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&l.whileTap&&n.animationState.setActive("whileTap",o==="Start");const u="onTap"+(o==="End"?"":o),f=l[u];f&&Dt.postRender(()=>f(i,eo(i)))}class oA extends ia{mount(){const{current:i}=this.node;i&&(this.unmount=p5(i,(o,l)=>(Z0(this.node,l,"Start"),(u,{success:f})=>Z0(this.node,u,f?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Xc=new WeakMap,Tc=new WeakMap,lA=n=>{const i=Xc.get(n.target);i&&i(n)},sA=n=>{n.forEach(lA)};function uA({root:n,...i}){const o=n||document;Tc.has(o)||Tc.set(o,{});const l=Tc.get(o),u=JSON.stringify(i);return l[u]||(l[u]=new IntersectionObserver(sA,{root:n,...i})),l[u]}function cA(n,i,o){const l=uA(i);return Xc.set(n,o),l.observe(n),()=>{Xc.delete(n),l.unobserve(n)}}const fA={some:0,all:1};class dA extends ia{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:o,margin:l,amount:u="some",once:f}=i,d={root:o?o.current:void 0,rootMargin:l,threshold:typeof u=="number"?u:fA[u]},p=h=>{const{isIntersecting:m}=h;if(this.isInView===m||(this.isInView=m,f&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:v,onViewportLeave:b}=this.node.getProps(),x=m?v:b;x&&x(h)};return cA(this.node.current,d,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:o}=this.node;["amount","margin","root"].some(hA(i,o))&&this.startObserver()}unmount(){}}function hA({viewport:n={}},{viewport:i={}}={}){return o=>n[o]!==i[o]}const mA={inView:{Feature:dA},tap:{Feature:oA},focus:{Feature:rA},hover:{Feature:iA}},pA={layout:{ProjectionNode:Xv,MeasureLayout:Nv}},Gc={current:null},Gv={current:!1};function gA(){if(Gv.current=!0,!!Ic)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),i=()=>Gc.current=n.matches;n.addListener(i),i()}else Gc.current=!1}const vA=[...pv,re,aa],yA=n=>vA.find(mv(n)),bA=new WeakMap;function xA(n,i,o){for(const l in i){const u=i[l],f=o[l];if(oe(u))n.addValue(l,u);else if(oe(f))n.addValue(l,jr(u,{owner:n}));else if(f!==u)if(n.hasValue(l)){const d=n.getValue(l);d.liveStyle===!0?d.jump(u):d.hasAnimated||d.set(u)}else{const d=n.getStaticValue(l);n.addValue(l,jr(d!==void 0?d:u,{owner:n}))}}for(const l in o)i[l]===void 0&&n.removeValue(l);return i}const K0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class SA{scrapeMotionValuesFromProps(i,o,l){return{}}constructor({parent:i,props:o,presenceContext:l,reducedMotionConfig:u,blockInitialAnimation:f,visualState:d},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Rf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const A=en.now();this.renderScheduledAt<A&&(this.renderScheduledAt=A,Dt.render(this.render,!1,!0))};const{latestValues:h,renderState:m,onUpdate:v}=d;this.onUpdate=v,this.latestValues=h,this.baseTarget={...h},this.initialValues=o.initial?{...h}:{},this.renderState=m,this.parent=i,this.props=o,this.presenceContext=l,this.depth=i?i.depth+1:0,this.reducedMotionConfig=u,this.options=p,this.blockInitialAnimation=!!f,this.isControllingVariants=Hl(o),this.isVariantNode=zg(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:b,...x}=this.scrapeMotionValuesFromProps(o,{},this);for(const A in x){const T=x[A];h[A]!==void 0&&oe(T)&&T.set(h[A],!1)}}mount(i){this.current=i,bA.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,l)=>this.bindToMotionValue(l,o)),Gv.current||gA(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Gc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),na(this.notifyUpdate),na(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const o=this.features[i];o&&(o.unmount(),o.isMounted=!1)}this.current=null}bindToMotionValue(i,o){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const l=ka.has(i);l&&this.onBindTransform&&this.onBindTransform();const u=o.on("change",p=>{this.latestValues[i]=p,this.props.onUpdate&&Dt.preRender(this.notifyUpdate),l&&this.projection&&(this.projection.isTransformDirty=!0)}),f=o.on("renderRequest",this.scheduleRender);let d;window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,i,o)),this.valueSubscriptions.set(i,()=>{u(),f(),d&&d(),o.owner&&o.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in Di){const o=Di[i];if(!o)continue;const{isEnabled:l,Feature:u}=o;if(!this.features[i]&&u&&l(this.props)&&(this.features[i]=new u(this)),this.features[i]){const f=this.features[i];f.isMounted?f.update():(f.mount(),f.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Pt()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,o){this.latestValues[i]=o}update(i,o){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let l=0;l<K0.length;l++){const u=K0[l];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const f="on"+u,d=i[f];d&&(this.propEventSubscriptions[u]=this.on(u,d))}this.prevMotionValues=xA(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(i),()=>o.variantChildren.delete(i)}addValue(i,o){const l=this.values.get(i);o!==l&&(l&&this.removeValue(i),this.bindToMotionValue(i,o),this.values.set(i,o),this.latestValues[i]=o.get())}removeValue(i){this.values.delete(i);const o=this.valueSubscriptions.get(i);o&&(o(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,o){if(this.props.values&&this.props.values[i])return this.props.values[i];let l=this.values.get(i);return l===void 0&&o!==void 0&&(l=jr(o===null?void 0:o,{owner:this}),this.addValue(i,l)),l}readValue(i,o){var l;let u=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:(l=this.getBaseTargetFromProps(this.props,i))!==null&&l!==void 0?l:this.readValueFromInstance(this.current,i,this.options);return u!=null&&(typeof u=="string"&&(dv(u)||nv(u))?u=parseFloat(u):!yA(u)&&aa.test(o)&&(u=uv(i,o)),this.setBaseTarget(i,oe(u)?u.get():u)),oe(u)?u.get():u}setBaseTarget(i,o){this.baseTarget[i]=o}getBaseTarget(i){var o;const{initial:l}=this.props;let u;if(typeof l=="string"||typeof l=="object"){const d=Tf(this.props,l,(o=this.presenceContext)===null||o===void 0?void 0:o.custom);d&&(u=d[i])}if(l&&u!==void 0)return u;const f=this.getBaseTargetFromProps(this.props,i);return f!==void 0&&!oe(f)?f:this.initialValues[i]!==void 0&&u===void 0?void 0:this.baseTarget[i]}on(i,o){return this.events[i]||(this.events[i]=new rf),this.events[i].add(o)}notify(i,...o){this.events[i]&&this.events[i].notify(...o)}}class Zv extends SA{constructor(){super(...arguments),this.KeyframeResolver=gv}sortInstanceNodePosition(i,o){return i.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(i,o){return i.style?i.style[o]:void 0}removeValueFromRenderState(i,{vars:o,style:l}){delete o[i],delete l[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;oe(i)&&(this.childSubscription=i.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}function TA(n){return window.getComputedStyle(n)}class AA extends Zv{constructor(){super(...arguments),this.type="html",this.renderInstance=jg}readValueFromInstance(i,o){if(ka.has(o))return VS(i,o);{const l=TA(i),u=(mf(o)?l.getPropertyValue(o):l[o])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(i,{transformPagePoint:o}){return _v(i,o)}build(i,o,l){vf(i,o,l.transformTemplate)}scrapeMotionValuesFromProps(i,o,l){return Af(i,o,l)}}class EA extends Zv{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Pt,this.updateDimensions=()=>{this.current&&!this.renderState.dimensions&&Hg(this.current,this.renderState)}}getBaseTargetFromProps(i,o){return i[o]}readValueFromInstance(i,o){if(ka.has(o)){const l=sv(o);return l&&l.default||0}return o=Yg.has(o)?o:hf(o),i.getAttribute(o)}scrapeMotionValuesFromProps(i,o,l){return Gg(i,o,l)}onBindTransform(){this.current&&!this.renderState.dimensions&&Dt.postRender(this.updateDimensions)}build(i,o,l){xf(i,o,this.isSVGTag,l.transformTemplate)}renderInstance(i,o,l,u){Xg(i,o,l,u)}mount(i){this.isSVGTag=Sf(i.tagName),super.mount(i)}}const OA=(n,i)=>bf(n)?new EA(i):new AA(i,{allowProjection:n!==_.Fragment}),DA=lS({...Q2,...mA,...aA,...pA},OA),MA=A5(DA);function RA(){const[n,i]=_.useState(["0","0","0"]),[o,l]=_.useState(!1),[u,f]=_.useState([]),d=async()=>{try{const v=await fetch("http://localhost:5000/unused");if(!v.ok)throw new Error("Response error");const x=(await v.json()).map(([A])=>String(A).padStart(3,"0"));f(x)}catch(v){console.error("Error fetching data:",v)}};_.useEffect(()=>{d()},[]);const p=()=>u[Math.floor(Math.random()*u.length)],h=()=>String(Math.floor(Math.random()*10)),m=()=>{l(!0),i(["0","0","0"]);let v=p();[v[0],v[1],v[2]].forEach((x,A)=>{setTimeout(()=>{let T=0;const E=setInterval(()=>{i(C=>{const R=[...C];return R[A]=h(),R}),T++,T>=20-A*5&&(clearInterval(E),i(C=>{const R=[...C];return R[A]=x,R}),A===2&&setTimeout(()=>l(!1),500))},100)},A*1e3)})};return Lt.jsxs("div",{className:"flex flex-col items-center justify-items-center p-10 h-full",children:[Lt.jsx("div",{className:"flex flex-row space-x-4 p-4 bg-gray-800 rounded-lg",children:n.map((v,b)=>Lt.jsx(MA.div,{className:"text-6xl font-bold text-white w-16 text-center",transition:{duration:.5},children:v},b))}),Lt.jsx("button",{onClick:m,disabled:o,className:"mt-4 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 text-white",children:"Start Rolling"})]})}function Kt(n,i){i===void 0&&(i={});var o=i.insertAt;if(n&&typeof document<"u"){var l=document.head||document.getElementsByTagName("head")[0],u=document.createElement("style");u.type="text/css",o==="top"&&l.firstChild?l.insertBefore(u,l.firstChild):l.appendChild(u),u.styleSheet?u.styleSheet.cssText=n:u.appendChild(document.createTextNode(n))}}Kt(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var xt=function(){return xt=Object.assign||function(n){for(var i,o=1,l=arguments.length;o<l;o++)for(var u in i=arguments[o])Object.prototype.hasOwnProperty.call(i,u)&&(n[u]=i[u]);return n},xt.apply(this,arguments)};function Nl(n){return Nl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Nl(n)}var wA=/^\s+/,CA=/\s+$/;function $(n,i){if(i=i||{},(n=n||"")instanceof $)return n;if(!(this instanceof $))return new $(n,i);var o=function(l){var u={r:0,g:0,b:0},f=1,d=null,p=null,h=null,m=!1,v=!1;typeof l=="string"&&(l=function(T){T=T.replace(wA,"").replace(CA,"").toLowerCase();var E,C=!1;if(Zc[T])T=Zc[T],C=!0;else if(T=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(E=Ge.rgb.exec(T))?{r:E[1],g:E[2],b:E[3]}:(E=Ge.rgba.exec(T))?{r:E[1],g:E[2],b:E[3],a:E[4]}:(E=Ge.hsl.exec(T))?{h:E[1],s:E[2],l:E[3]}:(E=Ge.hsla.exec(T))?{h:E[1],s:E[2],l:E[3],a:E[4]}:(E=Ge.hsv.exec(T))?{h:E[1],s:E[2],v:E[3]}:(E=Ge.hsva.exec(T))?{h:E[1],s:E[2],v:E[3],a:E[4]}:(E=Ge.hex8.exec(T))?{r:Te(E[1]),g:Te(E[2]),b:Te(E[3]),a:I0(E[4]),format:C?"name":"hex8"}:(E=Ge.hex6.exec(T))?{r:Te(E[1]),g:Te(E[2]),b:Te(E[3]),format:C?"name":"hex"}:(E=Ge.hex4.exec(T))?{r:Te(E[1]+""+E[1]),g:Te(E[2]+""+E[2]),b:Te(E[3]+""+E[3]),a:I0(E[4]+""+E[4]),format:C?"name":"hex8"}:(E=Ge.hex3.exec(T))?{r:Te(E[1]+""+E[1]),g:Te(E[2]+""+E[2]),b:Te(E[3]+""+E[3]),format:C?"name":"hex"}:!1}(l)),Nl(l)=="object"&&(An(l.r)&&An(l.g)&&An(l.b)?(b=l.r,x=l.g,A=l.b,u={r:255*Rt(b,255),g:255*Rt(x,255),b:255*Rt(A,255)},m=!0,v=String(l.r).substr(-1)==="%"?"prgb":"rgb"):An(l.h)&&An(l.s)&&An(l.v)?(d=Nr(l.s),p=Nr(l.v),u=function(T,E,C){T=6*Rt(T,360),E=Rt(E,100),C=Rt(C,100);var R=Math.floor(T),B=T-R,V=C*(1-E),G=C*(1-B*E),q=C*(1-(1-B)*E),W=R%6,ot=[C,G,V,V,q,C][W],K=[q,C,C,G,V,V][W],j=[V,V,q,C,C,G][W];return{r:255*ot,g:255*K,b:255*j}}(l.h,d,p),m=!0,v="hsv"):An(l.h)&&An(l.s)&&An(l.l)&&(d=Nr(l.s),h=Nr(l.l),u=function(T,E,C){var R,B,V;function G(ot,K,j){return j<0&&(j+=1),j>1&&(j-=1),j<1/6?ot+6*(K-ot)*j:j<.5?K:j<2/3?ot+(K-ot)*(2/3-j)*6:ot}if(T=Rt(T,360),E=Rt(E,100),C=Rt(C,100),E===0)R=B=V=C;else{var q=C<.5?C*(1+E):C+E-C*E,W=2*C-q;R=G(W,q,T+1/3),B=G(W,q,T),V=G(W,q,T-1/3)}return{r:255*R,g:255*B,b:255*V}}(l.h,d,h),m=!0,v="hsl"),l.hasOwnProperty("a")&&(f=l.a));var b,x,A;return f=Kv(f),{ok:m,format:l.format||v,r:Math.min(255,Math.max(u.r,0)),g:Math.min(255,Math.max(u.g,0)),b:Math.min(255,Math.max(u.b,0)),a:f}}(n);this._originalInput=n,this._r=o.r,this._g=o.g,this._b=o.b,this._a=o.a,this._roundA=Math.round(100*this._a)/100,this._format=i.format||o.format,this._gradientType=i.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=o.ok}function Q0(n,i,o){n=Rt(n,255),i=Rt(i,255),o=Rt(o,255);var l,u,f=Math.max(n,i,o),d=Math.min(n,i,o),p=(f+d)/2;if(f==d)l=u=0;else{var h=f-d;switch(u=p>.5?h/(2-f-d):h/(f+d),f){case n:l=(i-o)/h+(i<o?6:0);break;case i:l=(o-n)/h+2;break;case o:l=(n-i)/h+4}l/=6}return{h:l,s:u,l:p}}function F0(n,i,o){n=Rt(n,255),i=Rt(i,255),o=Rt(o,255);var l,u,f=Math.max(n,i,o),d=Math.min(n,i,o),p=f,h=f-d;if(u=f===0?0:h/f,f==d)l=0;else{switch(f){case n:l=(i-o)/h+(i<o?6:0);break;case i:l=(o-n)/h+2;break;case o:l=(n-i)/h+4}l/=6}return{h:l,s:u,v:p}}function J0(n,i,o,l){var u=[Ke(Math.round(n).toString(16)),Ke(Math.round(i).toString(16)),Ke(Math.round(o).toString(16))];return l&&u[0].charAt(0)==u[0].charAt(1)&&u[1].charAt(0)==u[1].charAt(1)&&u[2].charAt(0)==u[2].charAt(1)?u[0].charAt(0)+u[1].charAt(0)+u[2].charAt(0):u.join("")}function $0(n,i,o,l){return[Ke(Qv(l)),Ke(Math.round(n).toString(16)),Ke(Math.round(i).toString(16)),Ke(Math.round(o).toString(16))].join("")}function zA(n,i){i=i===0?0:i||10;var o=$(n).toHsl();return o.s-=i/100,o.s=Yl(o.s),$(o)}function _A(n,i){i=i===0?0:i||10;var o=$(n).toHsl();return o.s+=i/100,o.s=Yl(o.s),$(o)}function kA(n){return $(n).desaturate(100)}function VA(n,i){i=i===0?0:i||10;var o=$(n).toHsl();return o.l+=i/100,o.l=Yl(o.l),$(o)}function UA(n,i){i=i===0?0:i||10;var o=$(n).toRgb();return o.r=Math.max(0,Math.min(255,o.r-Math.round(-i/100*255))),o.g=Math.max(0,Math.min(255,o.g-Math.round(-i/100*255))),o.b=Math.max(0,Math.min(255,o.b-Math.round(-i/100*255))),$(o)}function NA(n,i){i=i===0?0:i||10;var o=$(n).toHsl();return o.l-=i/100,o.l=Yl(o.l),$(o)}function BA(n,i){var o=$(n).toHsl(),l=(o.h+i)%360;return o.h=l<0?360+l:l,$(o)}function LA(n){var i=$(n).toHsl();return i.h=(i.h+180)%360,$(i)}function W0(n,i){if(isNaN(i)||i<=0)throw new Error("Argument to polyad must be a positive number");for(var o=$(n).toHsl(),l=[$(n)],u=360/i,f=1;f<i;f++)l.push($({h:(o.h+f*u)%360,s:o.s,l:o.l}));return l}function qA(n){var i=$(n).toHsl(),o=i.h;return[$(n),$({h:(o+72)%360,s:i.s,l:i.l}),$({h:(o+216)%360,s:i.s,l:i.l})]}function PA(n,i,o){i=i||6,o=o||30;var l=$(n).toHsl(),u=360/o,f=[$(n)];for(l.h=(l.h-(u*i>>1)+720)%360;--i;)l.h=(l.h+u)%360,f.push($(l));return f}function HA(n,i){i=i||6;for(var o=$(n).toHsv(),l=o.h,u=o.s,f=o.v,d=[],p=1/i;i--;)d.push($({h:l,s:u,v:f})),f=(f+p)%1;return d}$.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var n=this.toRgb();return(299*n.r+587*n.g+114*n.b)/1e3},getLuminance:function(){var n,i,o,l=this.toRgb();return n=l.r/255,i=l.g/255,o=l.b/255,.2126*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.7152*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.0722*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))},setAlpha:function(n){return this._a=Kv(n),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var n=F0(this._r,this._g,this._b);return{h:360*n.h,s:n.s,v:n.v,a:this._a}},toHsvString:function(){var n=F0(this._r,this._g,this._b),i=Math.round(360*n.h),o=Math.round(100*n.s),l=Math.round(100*n.v);return this._a==1?"hsv("+i+", "+o+"%, "+l+"%)":"hsva("+i+", "+o+"%, "+l+"%, "+this._roundA+")"},toHsl:function(){var n=Q0(this._r,this._g,this._b);return{h:360*n.h,s:n.s,l:n.l,a:this._a}},toHslString:function(){var n=Q0(this._r,this._g,this._b),i=Math.round(360*n.h),o=Math.round(100*n.s),l=Math.round(100*n.l);return this._a==1?"hsl("+i+", "+o+"%, "+l+"%)":"hsla("+i+", "+o+"%, "+l+"%, "+this._roundA+")"},toHex:function(n){return J0(this._r,this._g,this._b,n)},toHexString:function(n){return"#"+this.toHex(n)},toHex8:function(n){return function(i,o,l,u,f){var d=[Ke(Math.round(i).toString(16)),Ke(Math.round(o).toString(16)),Ke(Math.round(l).toString(16)),Ke(Qv(u))];return f&&d[0].charAt(0)==d[0].charAt(1)&&d[1].charAt(0)==d[1].charAt(1)&&d[2].charAt(0)==d[2].charAt(1)&&d[3].charAt(0)==d[3].charAt(1)?d[0].charAt(0)+d[1].charAt(0)+d[2].charAt(0)+d[3].charAt(0):d.join("")}(this._r,this._g,this._b,this._a,n)},toHex8String:function(n){return"#"+this.toHex8(n)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Rt(this._r,255))+"%",g:Math.round(100*Rt(this._g,255))+"%",b:Math.round(100*Rt(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Rt(this._r,255))+"%, "+Math.round(100*Rt(this._g,255))+"%, "+Math.round(100*Rt(this._b,255))+"%)":"rgba("+Math.round(100*Rt(this._r,255))+"%, "+Math.round(100*Rt(this._g,255))+"%, "+Math.round(100*Rt(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(jA[J0(this._r,this._g,this._b,!0)]||!1)},toFilter:function(n){var i="#"+$0(this._r,this._g,this._b,this._a),o=i,l=this._gradientType?"GradientType = 1, ":"";if(n){var u=$(n);o="#"+$0(u._r,u._g,u._b,u._a)}return"progid:DXImageTransform.Microsoft.gradient("+l+"startColorstr="+i+",endColorstr="+o+")"},toString:function(n){var i=!!n;n=n||this._format;var o=!1,l=this._a<1&&this._a>=0;return i||!l||n!=="hex"&&n!=="hex6"&&n!=="hex3"&&n!=="hex4"&&n!=="hex8"&&n!=="name"?(n==="rgb"&&(o=this.toRgbString()),n==="prgb"&&(o=this.toPercentageRgbString()),n!=="hex"&&n!=="hex6"||(o=this.toHexString()),n==="hex3"&&(o=this.toHexString(!0)),n==="hex4"&&(o=this.toHex8String(!0)),n==="hex8"&&(o=this.toHex8String()),n==="name"&&(o=this.toName()),n==="hsl"&&(o=this.toHslString()),n==="hsv"&&(o=this.toHsvString()),o||this.toHexString()):n==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return $(this.toString())},_applyModification:function(n,i){var o=n.apply(null,[this].concat([].slice.call(i)));return this._r=o._r,this._g=o._g,this._b=o._b,this.setAlpha(o._a),this},lighten:function(){return this._applyModification(VA,arguments)},brighten:function(){return this._applyModification(UA,arguments)},darken:function(){return this._applyModification(NA,arguments)},desaturate:function(){return this._applyModification(zA,arguments)},saturate:function(){return this._applyModification(_A,arguments)},greyscale:function(){return this._applyModification(kA,arguments)},spin:function(){return this._applyModification(BA,arguments)},_applyCombination:function(n,i){return n.apply(null,[this].concat([].slice.call(i)))},analogous:function(){return this._applyCombination(PA,arguments)},complement:function(){return this._applyCombination(LA,arguments)},monochromatic:function(){return this._applyCombination(HA,arguments)},splitcomplement:function(){return this._applyCombination(qA,arguments)},triad:function(){return this._applyCombination(W0,[3])},tetrad:function(){return this._applyCombination(W0,[4])}},$.fromRatio=function(n,i){if(Nl(n)=="object"){var o={};for(var l in n)n.hasOwnProperty(l)&&(o[l]=l==="a"?n[l]:Nr(n[l]));n=o}return $(n,i)},$.equals=function(n,i){return!(!n||!i)&&$(n).toRgbString()==$(i).toRgbString()},$.random=function(){return $.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},$.mix=function(n,i,o){o=o===0?0:o||50;var l=$(n).toRgb(),u=$(i).toRgb(),f=o/100;return $({r:(u.r-l.r)*f+l.r,g:(u.g-l.g)*f+l.g,b:(u.b-l.b)*f+l.b,a:(u.a-l.a)*f+l.a})},$.readability=function(n,i){var o=$(n),l=$(i);return(Math.max(o.getLuminance(),l.getLuminance())+.05)/(Math.min(o.getLuminance(),l.getLuminance())+.05)},$.isReadable=function(n,i,o){var l,u,f=$.readability(n,i);switch(u=!1,(l=function(d){var p,h;return p=((d=d||{level:"AA",size:"small"}).level||"AA").toUpperCase(),h=(d.size||"small").toLowerCase(),p!=="AA"&&p!=="AAA"&&(p="AA"),h!=="small"&&h!=="large"&&(h="small"),{level:p,size:h}}(o)).level+l.size){case"AAsmall":case"AAAlarge":u=f>=4.5;break;case"AAlarge":u=f>=3;break;case"AAAsmall":u=f>=7}return u},$.mostReadable=function(n,i,o){var l,u,f,d,p=null,h=0;u=(o=o||{}).includeFallbackColors,f=o.level,d=o.size;for(var m=0;m<i.length;m++)(l=$.readability(n,i[m]))>h&&(h=l,p=$(i[m]));return $.isReadable(n,p,{level:f,size:d})||!u?p:(o.includeFallbackColors=!1,$.mostReadable(n,["#fff","#000"],o))};var Zc=$.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},jA=$.hexNames=function(n){var i={};for(var o in n)n.hasOwnProperty(o)&&(i[n[o]]=o);return i}(Zc);function Kv(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function Rt(n,i){(function(l){return typeof l=="string"&&l.indexOf(".")!=-1&&parseFloat(l)===1})(n)&&(n="100%");var o=function(l){return typeof l=="string"&&l.indexOf("%")!=-1}(n);return n=Math.min(i,Math.max(0,parseFloat(n))),o&&(n=parseInt(n*i,10)/100),Math.abs(n-i)<1e-6?1:n%i/parseFloat(i)}function Yl(n){return Math.min(1,Math.max(0,n))}function Te(n){return parseInt(n,16)}function Ke(n){return n.length==1?"0"+n:""+n}function Nr(n){return n<=1&&(n=100*n+"%"),n}function Qv(n){return Math.round(255*parseFloat(n)).toString(16)}function I0(n){return Te(n)/255}var ta,Tl,Al,Ge=(Tl="[\\s|\\(]+("+(ta="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+ta+")[,|\\s]+("+ta+")\\s*\\)?",Al="[\\s|\\(]+("+ta+")[,|\\s]+("+ta+")[,|\\s]+("+ta+")[,|\\s]+("+ta+")\\s*\\)?",{CSS_UNIT:new RegExp(ta),rgb:new RegExp("rgb"+Tl),rgba:new RegExp("rgba"+Al),hsl:new RegExp("hsl"+Tl),hsla:new RegExp("hsla"+Al),hsv:new RegExp("hsv"+Tl),hsva:new RegExp("hsva"+Al),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function An(n){return!!Ge.CSS_UNIT.exec(n)}var Xl=function(n,i){var o=(typeof n=="string"?parseInt(n):n)||0;if(o>=-5&&o<=5){var l=o,u=parseFloat(i),f=u+l*(u/5)*-1;return(f==0||f<=Number.EPSILON)&&(f=.1),{animationPeriod:f+"s"}}return{animationPeriod:i}},Gl=function(n,i){var o=n||{},l="";switch(i){case"small":l="12px";break;case"medium":l="16px";break;case"large":l="20px";break;default:l=void 0}var u={};if(o.fontSize){var f=o.fontSize;u=function(d,p){var h={};for(var m in d)Object.prototype.hasOwnProperty.call(d,m)&&p.indexOf(m)<0&&(h[m]=d[m]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function"){var v=0;for(m=Object.getOwnPropertySymbols(d);v<m.length;v++)p.indexOf(m[v])<0&&Object.prototype.propertyIsEnumerable.call(d,m[v])&&(h[m[v]]=d[m[v]])}return h}(o,["fontSize"]),l=f}return{fontSize:l,styles:u}},YA={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Zl=function(n){var i=n.className,o=n.text,l=n.textColor,u=n.staticText,f=n.style;return o?bt.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(i||"").trim(),style:xt(xt(xt({},u&&YA),l&&{color:l,mixBlendMode:"unset"}),f&&f)},typeof o=="string"&&o.length?o:"loading"):null},no="rgb(50, 205, 50)";function Kl(n,i){i===void 0&&(i=0);var o=[];return function l(u,f){return f===void 0&&(f=0),o.push.apply(o,u),o.length<f&&l(o,f),o.slice(0,f)}(n,i)}Kt(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6de;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6ex, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6g6;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6h4;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6e7, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6ex {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes u1qz6e7 {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes u1qz6de {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes u1qz6fj {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes u1qz6g6 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes u1qz6h4 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);$(no).toRgb();Array.from({length:4},function(n,i){return"--atom-phase".concat(i+1,"-rgb")});Kt(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite u1qz6k3;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: u1qz6j2 var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6j2 {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6k3 {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--commet-phase".concat(i+1,"-color")});Kt(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: u1qz6pz calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite u1qz6r6, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6sy;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6pz {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6r6 {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes u1qz6sy {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--OP-annulus-phase".concat(i+1,"-color")});function Ac(n){return n&&n.Math===Math&&n}Kt(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite u1qz6qy, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6s0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6qy {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes u1qz6s0 {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);Ac(typeof window=="object"&&window)||Ac(typeof self=="object"&&self)||Ac(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(n,i){return"--OP-dotted-phase".concat(i+1,"-color")});Kt(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite u1qz6sz, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6t3;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6sz {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes u1qz6t3 {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--OP-spokes-phase".concat(i+1,"-color")});Kt(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite u1qz6t5, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite u1qz6uw;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6t5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6uw {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(n,i){return"--OP-annulus-dual-sectors-phase".concat(i+1,"-color")});Kt(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6tq, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6v8;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6tq {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6v8 {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return["--OP-annulus-track-phase".concat(i+1,"-color"),"--OP-annulus-sector-phase".concat(i+1,"-color")]});Kt(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6cv, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6e3;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: u1qz6cr var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6cv {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes u1qz6cr {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes u1qz6e3 {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--four-square-phase".concat(i+1,"-color")});Kt(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: u1qz6bl, u1qz6c9;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6bl {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes u1qz6c9 {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--mosaic-phase".concat(i+1,"-color")});Kt(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6mm, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6og;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6mm {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes u1qz6og {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--riple-phase".concat(i+1,"-color")});Kt(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6uj, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6vi;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6uj {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes u1qz6vi {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);var gi=Array.from({length:4},function(n,i){return"--TD-pulsate-phase".concat(i+1,"-color")}),XA=function(n){var i,o=Gl(n==null?void 0:n.style,n==null?void 0:n.size),l=o.styles,u=o.fontSize,f=n==null?void 0:n.easing,d=Xl(n==null?void 0:n.speedPlus,"1.2s").animationPeriod,p=function(h){var m={};if(h instanceof Array){for(var v=Kl(h,gi.length),b=0;b<v.length&&!(b>=4);b++)m[gi[b]]=v[b];return m}try{if(typeof h!="string")throw new Error("Color String expected");for(var x=0;x<gi.length;x++)m[gi[x]]=h}catch(A){for(A instanceof Error?console.warn("[".concat(A.message,']: Received "').concat(typeof h,'" instead with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <ThreeDot variant="pulsate" /> indicator cannot be processed. Using default instead!')),x=0;x<gi.length;x++)m[gi[x]]=no}return m}((i=n==null?void 0:n.color)!==null&&i!==void 0?i:"");return bt.createElement("span",{className:"rli-d-i-b pulsate-rli-bounding-box",style:xt(xt(xt(xt(xt({},u&&{fontSize:u}),d&&{"--rli-animation-duration":d}),f&&{"--rli-animation-function":f}),p),l),role:"status","aria-live":"polite","aria-label":"Loading"},bt.createElement("span",{className:"rli-d-i-b pulsate-indicator"},bt.createElement("span",{className:"rli-d-i-b pulsate-dot"}),bt.createElement("span",{className:"rli-d-i-b pulsate-dot"}),bt.createElement("span",{className:"rli-d-i-b pulsate-dot"})),bt.createElement(Zl,{staticText:!0,text:n==null?void 0:n.text,textColor:n==null?void 0:n.textColor}))};Kt(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite u1qz6w1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite u1qz6x5;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6w1 {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes u1qz6x5 {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);var vi=Array.from({length:4},function(n,i){return"--TD-brick-stack-phase".concat(i+1,"-color")}),GA=function(n){var i,o=Gl(n==null?void 0:n.style,n==null?void 0:n.size),l=o.styles,u=o.fontSize,f=n==null?void 0:n.easing,d=Xl(n==null?void 0:n.speedPlus,"1s").animationPeriod,p=function(h){var m={};if(h instanceof Array){for(var v=Kl(h,vi.length),b=0;b<v.length&&!(b>=4);b++)m[vi[b]]=v[b];return m}try{if(typeof h!="string")throw new Error("Color String expected");for(var x=0;x<vi.length;x++)m[vi[x]]=h}catch(A){for(A instanceof Error?console.warn("[".concat(A.message,']: Received "').concat(typeof h,'" instead with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <ThreeDot variant="brick-stack" /> indicator cannot be processed. Using default instead!')),x=0;x<vi.length;x++)m[vi[x]]=no}return m}((i=n==null?void 0:n.color)!==null&&i!==void 0?i:"");return bt.createElement("span",{className:"rli-d-i-b brick-stack-rli-bounding-box",style:xt(xt(xt(xt(xt({},u&&{fontSize:u}),d&&{"--rli-animation-duration":d}),f&&{"--rli-animation-function":f}),p),l),role:"status","aria-live":"polite","aria-label":"Loading"},bt.createElement("span",{className:"rli-d-i-b brick-stack-indicator"},bt.createElement("span",{className:"rli-d-i-b brick-stack"})),bt.createElement(Zl,{staticText:!0,text:n==null?void 0:n.text,textColor:n==null?void 0:n.textColor}))};Kt(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite u1qz6wd, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite u1qz6xx;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6wd {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes u1qz6xx {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);var yi=Array.from({length:4},function(n,i){return"--TD-bob-phase".concat(i+1,"-color")}),ZA=function(n){var i,o=Gl(n==null?void 0:n.style,n==null?void 0:n.size),l=o.styles,u=o.fontSize,f=n==null?void 0:n.easing,d=Xl(n==null?void 0:n.speedPlus,"1.2s").animationPeriod,p=function(h){var m={};if(h instanceof Array){for(var v=Kl(h,yi.length),b=0;b<v.length&&!(b>=4);b++)m[yi[b]]=v[b];return m}try{if(typeof h!="string")throw new Error("Color String expected");for(var x=0;x<yi.length;x++)m[yi[x]]=h}catch(A){for(A instanceof Error?console.warn("[".concat(A.message,']: Received "').concat(typeof h,'" instead with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <ThreeDot variant="bob" /> indicator cannot be processed. Using default instead!')),x=0;x<yi.length;x++)m[yi[x]]=no}return m}((i=n==null?void 0:n.color)!==null&&i!==void 0?i:"");return bt.createElement("span",{className:"rli-d-i-b bob-rli-bounding-box",style:xt(xt(xt(xt(xt({},u&&{fontSize:u}),d&&{"--rli-animation-duration":d}),f&&{"--rli-animation-function":f}),p),l),role:"status","aria-live":"polite","aria-label":"Loading"},bt.createElement("span",{className:"bob-indicator"},bt.createElement("span",{className:"bobbing"})),bt.createElement(Zl,{staticText:!0,text:n==null?void 0:n.text,textColor:n==null?void 0:n.textColor}))};Kt(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6yl, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite u1qz6zs;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6z4;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes u1qz6yl {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes u1qz6z4 {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes u1qz6zs {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);var bi=Array.from({length:4},function(n,i){return"--TD-bounce-phase".concat(i+1,"-color")}),KA=function(n){var i,o=Gl(n==null?void 0:n.style,n==null?void 0:n.size),l=o.styles,u=o.fontSize,f=n==null?void 0:n.easing,d=Xl(n==null?void 0:n.speedPlus,"0.5s").animationPeriod,p=function(h){var m={};if(h instanceof Array){for(var v=Kl(h,bi.length),b=0;b<v.length&&!(b>=4);b++)m[bi[b]]=v[b];return m}try{if(typeof h!="string")throw new Error("Color String expected");for(var x=0;x<bi.length;x++)m[bi[x]]=h}catch{for(x=0;x<bi.length;x++)m[bi[x]]=no}return m}((i=n==null?void 0:n.color)!==null&&i!==void 0?i:"");return bt.createElement("span",{className:"rli-d-i-b bounce-rli-bounding-box",style:xt(xt(xt(xt(xt({},u&&{fontSize:u}),d&&{"--rli-animation-duration":d}),f&&{"--rli-animation-function":f}),p),l)},bt.createElement("span",{className:"wrapper"},bt.createElement("span",{className:"group"},bt.createElement("span",{className:"rli-d-i-b dot"}),bt.createElement("span",{className:"rli-d-i-b dot"}),bt.createElement("span",{className:"rli-d-i-b dot"})),bt.createElement("span",{className:"group"},bt.createElement("span",{className:"rli-d-i-b shadow"}),bt.createElement("span",{className:"rli-d-i-b shadow"}),bt.createElement("span",{className:"rli-d-i-b shadow"}))),bt.createElement(Zl,{staticText:!0,text:n==null?void 0:n.text,textColor:n==null?void 0:n.textColor,style:{marginTop:"2px"}}))},QA=function(n){var i=Object(n).variant,o=i===void 0?"pulsate":i;return o==="pulsate"?bt.createElement(XA,xt({},n)):o==="brick-stack"?bt.createElement(GA,xt({},n)):o==="bob"?bt.createElement(ZA,xt({},n)):o==="bounce"?bt.createElement(KA,xt({},n)):null};Kt(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: u1qz6i2, u1qz6js;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6i2 {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes u1qz6js {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--shape-phase".concat(i+1,"-color")});Kt(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: u1qz6nk var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, u1qz6op calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, u1qz6pg calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes u1qz6nk {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes u1qz6op {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes u1qz6pg {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--trophySpin-phase".concat(i+1,"-color")});Kt(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite u1qz6km, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite u1qz6lk;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes u1qz6km {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes u1qz6lk {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--slab-phase".concat(i+1,"-color")});Kt(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite u1qz6lr, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite u1qz6m8;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes u1qz6lr {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes u1qz6m8 {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--life-line-phase".concat(i+1,"-color")});const FA=()=>{const[n,i]=_.useState(0),[o,l]=_.useState(!1),u=async()=>{l(!0);try{const p=await fetch("http://localhost:5000/last-row");if(!p.ok)throw new Error("Response error");const h=await p.json();i(h[0])}catch(p){console.error("Error fetching data:",p)}l(!1)};_.useEffect(()=>{u()},[]);const f=async()=>{try{l(!0);const p=await fetch("http://localhost:5000/increase",{method:"POST",headers:{"Content-Type":"application/json"}}),h=await p.json();if(!p.ok)throw new Error(h.error||"Something went wrong");i(Number(n)+1),l(!1)}catch(p){console.error(p)}},d=async()=>{try{l(!0);const p=await fetch("http://localhost:5000/decrease",{method:"POST",headers:{"Content-Type":"application/json"}}),h=await p.json();if(!p.ok)throw new Error(h.error||"Something went wrong");i(Number(n)+1),l(!1)}catch(p){console.error(p)}};return Lt.jsxs("div",{className:"flex flex-col items-center justify-items-center p-10 h-full",children:[o&&Lt.jsx(QA,{variant:"bounce",color:"#31b7cc",size:"medium",text:"Sabar Ya",textColor:""}),!o&&Lt.jsxs("div",{children:[Lt.jsx("button",{onClick:f,className:"my-4 bg-sky-500 px-4 py-2 rounded-lg hover:bg-sky-600 text-white w-full",children:"+"}),Lt.jsx("div",{className:"flex flex-row space-x-4 p-4 bg-gray-800 rounded-lg w-fit",children:Lt.jsx("div",{className:"text-6xl font-bold text-white w-fit text-center",children:String(n).padStart(3,"0")})}),Lt.jsx("button",{onClick:d,disabled:n<=0,className:"my-4 bg-red-400 px-4 py-2 rounded-lg hover:bg-red-500 text-white w-full",children:"-"})]})]})},JA=()=>Lt.jsx(Hx,{basename:"/Doorprize-Randomizer/",children:Lt.jsxs(yx,{children:[Lt.jsx(Oc,{path:"/",element:Lt.jsx(RA,{})}),Lt.jsx(Oc,{path:"/manage",element:Lt.jsx(FA,{})})]})});M1.createRoot(document.getElementById("root")).render(Lt.jsx(_.StrictMode,{children:Lt.jsx(JA,{})}));
