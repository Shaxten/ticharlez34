(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Ed(n,e){const t=Object.create(null),r=n.split(",");for(let i=0;i<r.length;i++)t[r[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}const Oe={},rs=[],dn=()=>{},eE=()=>!1,tE=/^on[^a-z]/,Au=n=>tE.test(n),bd=n=>n.startsWith("onUpdate:"),lt=Object.assign,Td=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},nE=Object.prototype.hasOwnProperty,Ae=(n,e)=>nE.call(n,e),ue=Array.isArray,is=n=>Iu(n)==="[object Map]",qy=n=>Iu(n)==="[object Set]",me=n=>typeof n=="function",nt=n=>typeof n=="string",Sd=n=>typeof n=="symbol",je=n=>n!==null&&typeof n=="object",$y=n=>je(n)&&me(n.then)&&me(n.catch),Qy=Object.prototype.toString,Iu=n=>Qy.call(n),rE=n=>Iu(n).slice(8,-1),Hy=n=>Iu(n)==="[object Object]",Cd=n=>nt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,gc=Ed(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Eu=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},iE=/-(\w)/g,Mn=Eu(n=>n.replace(iE,(e,t)=>t?t.toUpperCase():"")),sE=/\B([A-Z])/g,Ms=Eu(n=>n.replace(sE,"-$1").toLowerCase()),bu=Eu(n=>n.charAt(0).toUpperCase()+n.slice(1)),xl=Eu(n=>n?`on${bu(n)}`:""),Ko=(n,e)=>!Object.is(n,e),yc=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Uc=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},hh=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Wp;const dh=()=>Wp||(Wp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rd(n){if(ue(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],i=nt(r)?uE(r):Rd(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(nt(n))return n;if(je(n))return n}}const oE=/;(?![^(]*\))/g,aE=/:([^]+)/,cE=new RegExp("\\/\\*.*?\\*\\/","gs");function uE(n){const e={};return n.replace(cE,"").split(oE).forEach(t=>{if(t){const r=t.split(aE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function kd(n){let e="";if(nt(n))e=n;else if(ue(n))for(let t=0;t<n.length;t++){const r=kd(n[t]);r&&(e+=r+" ")}else if(je(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const lE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hE=Ed(lE);function zy(n){return!!n||n===""}const Gy=n=>nt(n)?n:n==null?"":ue(n)||je(n)&&(n.toString===Qy||!me(n.toString))?JSON.stringify(n,Wy,2):String(n),Wy=(n,e)=>e&&e.__v_isRef?Wy(n,e.value):is(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,i])=>(t[`${r} =>`]=i,t),{})}:qy(e)?{[`Set(${e.size})`]:[...e.values()]}:je(e)&&!ue(e)&&!Hy(e)?String(e):e;let cn;class dE{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=cn,!e&&cn&&(this.index=(cn.scopes||(cn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=cn;try{return cn=this,e()}finally{cn=t}}}on(){cn=this}off(){cn=this.parent}stop(e){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function fE(n,e=cn){e&&e.active&&e.effects.push(n)}function pE(){return cn}const xd=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Jy=n=>(n.w&Sr)>0,Yy=n=>(n.n&Sr)>0,mE=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Sr},gE=n=>{const{deps:e}=n;if(e.length){let t=0;for(let r=0;r<e.length;r++){const i=e[r];Jy(i)&&!Yy(i)?i.delete(n):e[t++]=i,i.w&=~Sr,i.n&=~Sr}e.length=t}},fh=new WeakMap;let wo=0,Sr=1;const ph=30;let un;const gi=Symbol(""),mh=Symbol("");class Pd{constructor(e,t=null,r){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,fE(this,r)}run(){if(!this.active)return this.fn();let e=un,t=Ir;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=un,un=this,Ir=!0,Sr=1<<++wo,wo<=ph?mE(this):Jp(this),this.fn()}finally{wo<=ph&&gE(this),Sr=1<<--wo,un=this.parent,Ir=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){un===this?this.deferStop=!0:this.active&&(Jp(this),this.onStop&&this.onStop(),this.active=!1)}}function Jp(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Ir=!0;const Xy=[];function Ls(){Xy.push(Ir),Ir=!1}function Bs(){const n=Xy.pop();Ir=n===void 0?!0:n}function zt(n,e,t){if(Ir&&un){let r=fh.get(n);r||fh.set(n,r=new Map);let i=r.get(t);i||r.set(t,i=xd()),Zy(i)}}function Zy(n,e){let t=!1;wo<=ph?Yy(n)||(n.n|=Sr,t=!Jy(n)):t=!n.has(un),t&&(n.add(un),un.deps.push(n))}function er(n,e,t,r,i,s){const o=fh.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&ue(n)){const c=Number(r);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":ue(n)?Cd(t)&&a.push(o.get("length")):(a.push(o.get(gi)),is(n)&&a.push(o.get(mh)));break;case"delete":ue(n)||(a.push(o.get(gi)),is(n)&&a.push(o.get(mh)));break;case"set":is(n)&&a.push(o.get(gi));break}if(a.length===1)a[0]&&gh(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);gh(xd(c))}}function gh(n,e){const t=ue(n)?n:[...n];for(const r of t)r.computed&&Yp(r);for(const r of t)r.computed||Yp(r)}function Yp(n,e){(n!==un||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const yE=Ed("__proto__,__v_isRef,__isVue"),ev=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Sd)),vE=Dd(),wE=Dd(!1,!0),_E=Dd(!0),Xp=AE();function AE(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const r=be(this);for(let s=0,o=this.length;s<o;s++)zt(r,"get",s+"");const i=r[e](...t);return i===-1||i===!1?r[e](...t.map(be)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Ls();const r=be(this)[e].apply(this,t);return Bs(),r}}),n}function IE(n){const e=be(this);return zt(e,"has",n),e.hasOwnProperty(n)}function Dd(n=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!n;if(i==="__v_isReadonly")return n;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(n?e?LE:sv:e?iv:rv).get(r))return r;const o=ue(r);if(!n){if(o&&Ae(Xp,i))return Reflect.get(Xp,i,s);if(i==="hasOwnProperty")return IE}const a=Reflect.get(r,i,s);return(Sd(i)?ev.has(i):yE(i))||(n||zt(r,"get",i),e)?a:kt(a)?o&&Cd(i)?a:a.value:je(a)?n?ov(a):_a(a):a}}const EE=tv(),bE=tv(!0);function tv(n=!1){return function(t,r,i,s){let o=t[r];if(gs(o)&&kt(o)&&!kt(i))return!1;if(!n&&(!Mc(i)&&!gs(i)&&(o=be(o),i=be(i)),!ue(t)&&kt(o)&&!kt(i)))return o.value=i,!0;const a=ue(t)&&Cd(r)?Number(r)<t.length:Ae(t,r),c=Reflect.set(t,r,i,s);return t===be(s)&&(a?Ko(i,o)&&er(t,"set",r,i):er(t,"add",r,i)),c}}function TE(n,e){const t=Ae(n,e);n[e];const r=Reflect.deleteProperty(n,e);return r&&t&&er(n,"delete",e,void 0),r}function SE(n,e){const t=Reflect.has(n,e);return(!Sd(e)||!ev.has(e))&&zt(n,"has",e),t}function CE(n){return zt(n,"iterate",ue(n)?"length":gi),Reflect.ownKeys(n)}const nv={get:vE,set:EE,deleteProperty:TE,has:SE,ownKeys:CE},RE={get:_E,set(n,e){return!0},deleteProperty(n,e){return!0}},kE=lt({},nv,{get:wE,set:bE}),Nd=n=>n,Tu=n=>Reflect.getPrototypeOf(n);function Ya(n,e,t=!1,r=!1){n=n.__v_raw;const i=be(n),s=be(e);t||(e!==s&&zt(i,"get",e),zt(i,"get",s));const{has:o}=Tu(i),a=r?Nd:t?Ud:qo;if(o.call(i,e))return a(n.get(e));if(o.call(i,s))return a(n.get(s));n!==i&&n.get(e)}function Xa(n,e=!1){const t=this.__v_raw,r=be(t),i=be(n);return e||(n!==i&&zt(r,"has",n),zt(r,"has",i)),n===i?t.has(n):t.has(n)||t.has(i)}function Za(n,e=!1){return n=n.__v_raw,!e&&zt(be(n),"iterate",gi),Reflect.get(n,"size",n)}function Zp(n){n=be(n);const e=be(this);return Tu(e).has.call(e,n)||(e.add(n),er(e,"add",n,n)),this}function em(n,e){e=be(e);const t=be(this),{has:r,get:i}=Tu(t);let s=r.call(t,n);s||(n=be(n),s=r.call(t,n));const o=i.call(t,n);return t.set(n,e),s?Ko(e,o)&&er(t,"set",n,e):er(t,"add",n,e),this}function tm(n){const e=be(this),{has:t,get:r}=Tu(e);let i=t.call(e,n);i||(n=be(n),i=t.call(e,n)),r&&r.call(e,n);const s=e.delete(n);return i&&er(e,"delete",n,void 0),s}function nm(){const n=be(this),e=n.size!==0,t=n.clear();return e&&er(n,"clear",void 0,void 0),t}function ec(n,e){return function(r,i){const s=this,o=s.__v_raw,a=be(o),c=e?Nd:n?Ud:qo;return!n&&zt(a,"iterate",gi),o.forEach((u,l)=>r.call(i,c(u),c(l),s))}}function tc(n,e,t){return function(...r){const i=this.__v_raw,s=be(i),o=is(s),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,u=i[n](...r),l=t?Nd:e?Ud:qo;return!e&&zt(s,"iterate",c?mh:gi),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function lr(n){return function(...e){return n==="delete"?!1:this}}function xE(){const n={get(s){return Ya(this,s)},get size(){return Za(this)},has:Xa,add:Zp,set:em,delete:tm,clear:nm,forEach:ec(!1,!1)},e={get(s){return Ya(this,s,!1,!0)},get size(){return Za(this)},has:Xa,add:Zp,set:em,delete:tm,clear:nm,forEach:ec(!1,!0)},t={get(s){return Ya(this,s,!0)},get size(){return Za(this,!0)},has(s){return Xa.call(this,s,!0)},add:lr("add"),set:lr("set"),delete:lr("delete"),clear:lr("clear"),forEach:ec(!0,!1)},r={get(s){return Ya(this,s,!0,!0)},get size(){return Za(this,!0)},has(s){return Xa.call(this,s,!0)},add:lr("add"),set:lr("set"),delete:lr("delete"),clear:lr("clear"),forEach:ec(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=tc(s,!1,!1),t[s]=tc(s,!0,!1),e[s]=tc(s,!1,!0),r[s]=tc(s,!0,!0)}),[n,t,e,r]}const[PE,DE,NE,OE]=xE();function Od(n,e){const t=e?n?OE:NE:n?DE:PE;return(r,i,s)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?r:Reflect.get(Ae(t,i)&&i in r?t:r,i,s)}const FE={get:Od(!1,!1)},UE={get:Od(!1,!0)},ME={get:Od(!0,!1)},rv=new WeakMap,iv=new WeakMap,sv=new WeakMap,LE=new WeakMap;function BE(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function VE(n){return n.__v_skip||!Object.isExtensible(n)?0:BE(rE(n))}function _a(n){return gs(n)?n:Fd(n,!1,nv,FE,rv)}function jE(n){return Fd(n,!1,kE,UE,iv)}function ov(n){return Fd(n,!0,RE,ME,sv)}function Fd(n,e,t,r,i){if(!je(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=i.get(n);if(s)return s;const o=VE(n);if(o===0)return n;const a=new Proxy(n,o===2?r:t);return i.set(n,a),a}function ss(n){return gs(n)?ss(n.__v_raw):!!(n&&n.__v_isReactive)}function gs(n){return!!(n&&n.__v_isReadonly)}function Mc(n){return!!(n&&n.__v_isShallow)}function av(n){return ss(n)||gs(n)}function be(n){const e=n&&n.__v_raw;return e?be(e):n}function cv(n){return Uc(n,"__v_skip",!0),n}const qo=n=>je(n)?_a(n):n,Ud=n=>je(n)?ov(n):n;function uv(n){Ir&&un&&(n=be(n),Zy(n.dep||(n.dep=xd())))}function lv(n,e){n=be(n);const t=n.dep;t&&gh(t)}function kt(n){return!!(n&&n.__v_isRef===!0)}function Er(n){return hv(n,!1)}function KE(n){return hv(n,!0)}function hv(n,e){return kt(n)?n:new qE(n,e)}class qE{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:be(e),this._value=t?e:qo(e)}get value(){return uv(this),this._value}set value(e){const t=this.__v_isShallow||Mc(e)||gs(e);e=t?e:be(e),Ko(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:qo(e),lv(this))}}function os(n){return kt(n)?n.value:n}const $E={get:(n,e,t)=>os(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const i=n[e];return kt(i)&&!kt(t)?(i.value=t,!0):Reflect.set(n,e,t,r)}};function dv(n){return ss(n)?n:new Proxy(n,$E)}class QE{constructor(e,t,r,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Pd(e,()=>{this._dirty||(this._dirty=!0,lv(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=be(this);return uv(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function HE(n,e,t=!1){let r,i;const s=me(n);return s?(r=n,i=dn):(r=n.get,i=n.set),new QE(r,i,s||!i,t)}function br(n,e,t,r){let i;try{i=r?n(...r):n()}catch(s){Su(s,e,t)}return i}function fn(n,e,t,r){if(me(n)){const s=br(n,e,t,r);return s&&$y(s)&&s.catch(o=>{Su(o,e,t)}),s}const i=[];for(let s=0;s<n.length;s++)i.push(fn(n[s],e,t,r));return i}function Su(n,e,t,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const u=s.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](n,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){br(c,null,10,[n,o,a]);return}}zE(n,t,i,r)}function zE(n,e,t,r=!0){console.error(n)}let $o=!1,yh=!1;const Rt=[];let En=0;const as=[];let Qn=null,ri=0;const fv=Promise.resolve();let Md=null;function pv(n){const e=Md||fv;return n?e.then(this?n.bind(this):n):e}function GE(n){let e=En+1,t=Rt.length;for(;e<t;){const r=e+t>>>1;Qo(Rt[r])<n?e=r+1:t=r}return e}function Ld(n){(!Rt.length||!Rt.includes(n,$o&&n.allowRecurse?En+1:En))&&(n.id==null?Rt.push(n):Rt.splice(GE(n.id),0,n),mv())}function mv(){!$o&&!yh&&(yh=!0,Md=fv.then(yv))}function WE(n){const e=Rt.indexOf(n);e>En&&Rt.splice(e,1)}function JE(n){ue(n)?as.push(...n):(!Qn||!Qn.includes(n,n.allowRecurse?ri+1:ri))&&as.push(n),mv()}function rm(n,e=$o?En+1:0){for(;e<Rt.length;e++){const t=Rt[e];t&&t.pre&&(Rt.splice(e,1),e--,t())}}function gv(n){if(as.length){const e=[...new Set(as)];if(as.length=0,Qn){Qn.push(...e);return}for(Qn=e,Qn.sort((t,r)=>Qo(t)-Qo(r)),ri=0;ri<Qn.length;ri++)Qn[ri]();Qn=null,ri=0}}const Qo=n=>n.id==null?1/0:n.id,YE=(n,e)=>{const t=Qo(n)-Qo(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function yv(n){yh=!1,$o=!0,Rt.sort(YE);const e=dn;try{for(En=0;En<Rt.length;En++){const t=Rt[En];t&&t.active!==!1&&br(t,null,14)}}finally{En=0,Rt.length=0,gv(),$o=!1,Md=null,(Rt.length||as.length)&&yv()}}function XE(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Oe;let i=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[l]||Oe;d&&(i=t.map(f=>nt(f)?f.trim():f)),h&&(i=t.map(hh))}let a,c=r[a=xl(e)]||r[a=xl(Mn(e))];!c&&s&&(c=r[a=xl(Ms(e))]),c&&fn(c,n,6,i);const u=r[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,fn(u,n,6,i)}}function vv(n,e,t=!1){const r=e.emitsCache,i=r.get(n);if(i!==void 0)return i;const s=n.emits;let o={},a=!1;if(!me(n)){const c=u=>{const l=vv(u,e,!0);l&&(a=!0,lt(o,l))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!s&&!a?(je(n)&&r.set(n,null),null):(ue(s)?s.forEach(c=>o[c]=null):lt(o,s),je(n)&&r.set(n,o),o)}function Cu(n,e){return!n||!Au(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ae(n,e[0].toLowerCase()+e.slice(1))||Ae(n,Ms(e))||Ae(n,e))}let sn=null,wv=null;function Lc(n){const e=sn;return sn=n,wv=n&&n.type.__scopeId||null,e}function vc(n,e=sn,t){if(!e||n._n)return n;const r=(...i)=>{r._d&&pm(-1);const s=Lc(e);let o;try{o=n(...i)}finally{Lc(s),r._d&&pm(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Pl(n){const{type:e,vnode:t,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:f,ctx:m,inheritAttrs:p}=n;let y,_;const T=Lc(n);try{if(t.shapeFlag&4){const P=i||r;y=An(l.call(P,P,h,s,f,d,m)),_=c}else{const P=e;y=An(P.length>1?P(s,{attrs:c,slots:a,emit:u}):P(s,null)),_=e.props?c:ZE(c)}}catch(P){ko.length=0,Su(P,n,1),y=tt(Ei)}let U=y;if(_&&p!==!1){const P=Object.keys(_),{shapeFlag:he}=U;P.length&&he&7&&(o&&P.some(bd)&&(_=eb(_,o)),U=ys(U,_))}return t.dirs&&(U=ys(U),U.dirs=U.dirs?U.dirs.concat(t.dirs):t.dirs),t.transition&&(U.transition=t.transition),y=U,Lc(T),y}const ZE=n=>{let e;for(const t in n)(t==="class"||t==="style"||Au(t))&&((e||(e={}))[t]=n[t]);return e},eb=(n,e)=>{const t={};for(const r in n)(!bd(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function tb(n,e,t){const{props:r,children:i,component:s}=n,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?im(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==r[d]&&!Cu(u,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?im(r,o,u):!0:!!o;return!1}function im(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==n[s]&&!Cu(t,s))return!0}return!1}function nb({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const rb=n=>n.__isSuspense;function ib(n,e){e&&e.pendingBranch?ue(n)?e.effects.push(...n):e.effects.push(n):JE(n)}const nc={};function wc(n,e,t){return _v(n,e,t)}function _v(n,e,{immediate:t,deep:r,flush:i,onTrack:s,onTrigger:o}=Oe){var a;const c=pE()===((a=vt)==null?void 0:a.scope)?vt:null;let u,l=!1,h=!1;if(kt(n)?(u=()=>n.value,l=Mc(n)):ss(n)?(u=()=>n,r=!0):ue(n)?(h=!0,l=n.some(P=>ss(P)||Mc(P)),u=()=>n.map(P=>{if(kt(P))return P.value;if(ss(P))return li(P);if(me(P))return br(P,c,2)})):me(n)?e?u=()=>br(n,c,2):u=()=>{if(!(c&&c.isUnmounted))return d&&d(),fn(n,c,3,[f])}:u=dn,e&&r){const P=u;u=()=>li(P())}let d,f=P=>{d=T.onStop=()=>{br(P,c,4)}},m;if(zo)if(f=dn,e?t&&fn(e,c,3,[u(),h?[]:void 0,f]):u(),i==="sync"){const P=Yb();m=P.__watcherHandles||(P.__watcherHandles=[])}else return dn;let p=h?new Array(n.length).fill(nc):nc;const y=()=>{if(T.active)if(e){const P=T.run();(r||l||(h?P.some((he,x)=>Ko(he,p[x])):Ko(P,p)))&&(d&&d(),fn(e,c,3,[P,p===nc?void 0:h&&p[0]===nc?[]:p,f]),p=P)}else T.run()};y.allowRecurse=!!e;let _;i==="sync"?_=y:i==="post"?_=()=>jt(y,c&&c.suspense):(y.pre=!0,c&&(y.id=c.uid),_=()=>Ld(y));const T=new Pd(u,_);e?t?y():p=T.run():i==="post"?jt(T.run.bind(T),c&&c.suspense):T.run();const U=()=>{T.stop(),c&&c.scope&&Td(c.scope.effects,T)};return m&&m.push(U),U}function sb(n,e,t){const r=this.proxy,i=nt(n)?n.includes(".")?Av(r,n):()=>r[n]:n.bind(r,r);let s;me(e)?s=e:(s=e.handler,t=e);const o=vt;vs(this);const a=_v(i,s.bind(r),t);return o?vs(o):yi(),a}function Av(n,e){const t=e.split(".");return()=>{let r=n;for(let i=0;i<t.length&&r;i++)r=r[t[i]];return r}}function li(n,e){if(!je(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),kt(n))li(n.value,e);else if(ue(n))for(let t=0;t<n.length;t++)li(n[t],e);else if(qy(n)||is(n))n.forEach(t=>{li(t,e)});else if(Hy(n))for(const t in n)li(n[t],e);return n}function Bc(n,e){const t=sn;if(t===null)return n;const r=Pu(t)||t.proxy,i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,u=Oe]=e[s];o&&(me(o)&&(o={mounted:o,updated:o}),o.deep&&li(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u}))}return n}function Jr(n,e,t,r){const i=n.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(Ls(),fn(c,t,8,[n.el,a,n,e]),Bs())}}function Iv(n,e){return me(n)?(()=>lt({name:n.name},e,{setup:n}))():n}const _c=n=>!!n.type.__asyncLoader,Ev=n=>n.type.__isKeepAlive;function ob(n,e){bv(n,"a",e)}function ab(n,e){bv(n,"da",e)}function bv(n,e,t=vt){const r=n.__wdc||(n.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(Ru(e,r,t),t){let i=t.parent;for(;i&&i.parent;)Ev(i.parent.vnode)&&cb(r,e,t,i),i=i.parent}}function cb(n,e,t,r){const i=Ru(e,n,r,!0);Sv(()=>{Td(r[e],i)},t)}function Ru(n,e,t=vt,r=!1){if(t){const i=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Ls(),vs(t);const a=fn(e,t,n,o);return yi(),Bs(),a});return r?i.unshift(s):i.push(s),s}}const ir=n=>(e,t=vt)=>(!zo||n==="sp")&&Ru(n,(...r)=>e(...r),t),ub=ir("bm"),Tv=ir("m"),lb=ir("bu"),hb=ir("u"),db=ir("bum"),Sv=ir("um"),fb=ir("sp"),pb=ir("rtg"),mb=ir("rtc");function gb(n,e=vt){Ru("ec",n,e)}const Cv="components";function Rv(n,e){return vb(Cv,n,!0,e)||n}const yb=Symbol.for("v-ndc");function vb(n,e,t=!0,r=!1){const i=sn||vt;if(i){const s=i.type;if(n===Cv){const a=Gb(s,!1);if(a&&(a===e||a===Mn(e)||a===bu(Mn(e))))return s}const o=sm(i[n]||s[n],e)||sm(i.appContext[n],e);return!o&&r?s:o}}function sm(n,e){return n&&(n[e]||n[Mn(e)]||n[bu(Mn(e))])}function Yr(n,e,t,r){let i;const s=t&&t[r];if(ue(n)||nt(n)){i=new Array(n.length);for(let o=0,a=n.length;o<a;o++)i[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){i=new Array(n);for(let o=0;o<n;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(je(n))if(n[Symbol.iterator])i=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];i[a]=e(n[u],u,a,s&&s[a])}}else i=[];return t&&(t[r]=i),i}const vh=n=>n?Bv(n)?Pu(n)||n.proxy:vh(n.parent):null,Ro=lt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>vh(n.parent),$root:n=>vh(n.root),$emit:n=>n.emit,$options:n=>Bd(n),$forceUpdate:n=>n.f||(n.f=()=>Ld(n.update)),$nextTick:n=>n.n||(n.n=pv.bind(n.proxy)),$watch:n=>sb.bind(n)}),Dl=(n,e)=>n!==Oe&&!n.__isScriptSetup&&Ae(n,e),wb={get({_:n},e){const{ctx:t,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=n;let u;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(Dl(r,e))return o[e]=1,r[e];if(i!==Oe&&Ae(i,e))return o[e]=2,i[e];if((u=n.propsOptions[0])&&Ae(u,e))return o[e]=3,s[e];if(t!==Oe&&Ae(t,e))return o[e]=4,t[e];wh&&(o[e]=0)}}const l=Ro[e];let h,d;if(l)return e==="$attrs"&&zt(n,"get",e),l(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==Oe&&Ae(t,e))return o[e]=4,t[e];if(d=c.config.globalProperties,Ae(d,e))return d[e]},set({_:n},e,t){const{data:r,setupState:i,ctx:s}=n;return Dl(i,e)?(i[e]=t,!0):r!==Oe&&Ae(r,e)?(r[e]=t,!0):Ae(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!t[o]||n!==Oe&&Ae(n,o)||Dl(e,o)||(a=s[0])&&Ae(a,o)||Ae(r,o)||Ae(Ro,o)||Ae(i.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ae(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function om(n){return ue(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let wh=!0;function _b(n){const e=Bd(n),t=n.proxy,r=n.ctx;wh=!1,e.beforeCreate&&am(e.beforeCreate,n,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:f,updated:m,activated:p,deactivated:y,beforeDestroy:_,beforeUnmount:T,destroyed:U,unmounted:P,render:he,renderTracked:x,renderTriggered:Ee,errorCaptured:oe,serverPrefetch:Et,expose:Q,inheritAttrs:w,components:D,directives:I,filters:V}=e;if(u&&Ab(u,r,null),o)for(const de in o){const ie=o[de];me(ie)&&(r[de]=ie.bind(t))}if(i){const de=i.call(t,t);je(de)&&(n.data=_a(de))}if(wh=!0,s)for(const de in s){const ie=s[de],Vt=me(ie)?ie.bind(t,t):me(ie.get)?ie.get.bind(t,t):dn,Dt=!me(ie)&&me(ie.set)?ie.set.bind(t):dn,st=nn({get:Vt,set:Dt});Object.defineProperty(r,de,{enumerable:!0,configurable:!0,get:()=>st.value,set:Ye=>st.value=Ye})}if(a)for(const de in a)kv(a[de],r,t,de);if(c){const de=me(c)?c.call(t):c;Reflect.ownKeys(de).forEach(ie=>{Ac(ie,de[ie])})}l&&am(l,n,"c");function J(de,ie){ue(ie)?ie.forEach(Vt=>de(Vt.bind(t))):ie&&de(ie.bind(t))}if(J(ub,h),J(Tv,d),J(lb,f),J(hb,m),J(ob,p),J(ab,y),J(gb,oe),J(mb,x),J(pb,Ee),J(db,T),J(Sv,P),J(fb,Et),ue(Q))if(Q.length){const de=n.exposed||(n.exposed={});Q.forEach(ie=>{Object.defineProperty(de,ie,{get:()=>t[ie],set:Vt=>t[ie]=Vt})})}else n.exposed||(n.exposed={});he&&n.render===dn&&(n.render=he),w!=null&&(n.inheritAttrs=w),D&&(n.components=D),I&&(n.directives=I)}function Ab(n,e,t=dn){ue(n)&&(n=_h(n));for(const r in n){const i=n[r];let s;je(i)?"default"in i?s=Nn(i.from||r,i.default,!0):s=Nn(i.from||r):s=Nn(i),kt(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function am(n,e,t){fn(ue(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function kv(n,e,t,r){const i=r.includes(".")?Av(t,r):()=>t[r];if(nt(n)){const s=e[n];me(s)&&wc(i,s)}else if(me(n))wc(i,n.bind(t));else if(je(n))if(ue(n))n.forEach(s=>kv(s,e,t,r));else{const s=me(n.handler)?n.handler.bind(t):e[n.handler];me(s)&&wc(i,s,n)}}function Bd(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!t&&!r?c=e:(c={},i.length&&i.forEach(u=>Vc(c,u,o,!0)),Vc(c,e,o)),je(e)&&s.set(e,c),c}function Vc(n,e,t,r=!1){const{mixins:i,extends:s}=e;s&&Vc(n,s,t,!0),i&&i.forEach(o=>Vc(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const a=Ib[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Ib={data:cm,props:um,emits:um,methods:_o,computed:_o,beforeCreate:Nt,created:Nt,beforeMount:Nt,mounted:Nt,beforeUpdate:Nt,updated:Nt,beforeDestroy:Nt,beforeUnmount:Nt,destroyed:Nt,unmounted:Nt,activated:Nt,deactivated:Nt,errorCaptured:Nt,serverPrefetch:Nt,components:_o,directives:_o,watch:bb,provide:cm,inject:Eb};function cm(n,e){return e?n?function(){return lt(me(n)?n.call(this,this):n,me(e)?e.call(this,this):e)}:e:n}function Eb(n,e){return _o(_h(n),_h(e))}function _h(n){if(ue(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Nt(n,e){return n?[...new Set([].concat(n,e))]:e}function _o(n,e){return n?lt(Object.create(null),n,e):e}function um(n,e){return n?ue(n)&&ue(e)?[...new Set([...n,...e])]:lt(Object.create(null),om(n),om(e??{})):e}function bb(n,e){if(!n)return e;if(!e)return n;const t=lt(Object.create(null),n);for(const r in e)t[r]=Nt(n[r],e[r]);return t}function xv(){return{app:null,config:{isNativeTag:eE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tb=0;function Sb(n,e){return function(r,i=null){me(r)||(r=lt({},r)),i!=null&&!je(i)&&(i=null);const s=xv(),o=new Set;let a=!1;const c=s.app={_uid:Tb++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Xb,get config(){return s.config},set config(u){},use(u,...l){return o.has(u)||(u&&me(u.install)?(o.add(u),u.install(c,...l)):me(u)&&(o.add(u),u(c,...l))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,l){return l?(s.components[u]=l,c):s.components[u]},directive(u,l){return l?(s.directives[u]=l,c):s.directives[u]},mount(u,l,h){if(!a){const d=tt(r,i);return d.appContext=s,l&&e?e(d,u):n(d,u,h),a=!0,c._container=u,u.__vue_app__=c,Pu(d.component)||d.component.proxy}},unmount(){a&&(n(null,c._container),delete c._container.__vue_app__)},provide(u,l){return s.provides[u]=l,c},runWithContext(u){jc=c;try{return u()}finally{jc=null}}};return c}}let jc=null;function Ac(n,e){if(vt){let t=vt.provides;const r=vt.parent&&vt.parent.provides;r===t&&(t=vt.provides=Object.create(r)),t[n]=e}}function Nn(n,e,t=!1){const r=vt||sn;if(r||jc){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:jc._context.provides;if(i&&n in i)return i[n];if(arguments.length>1)return t&&me(e)?e.call(r&&r.proxy):e}}function Cb(n,e,t,r=!1){const i={},s={};Uc(s,xu,1),n.propsDefaults=Object.create(null),Pv(n,e,i,s);for(const o in n.propsOptions[0])o in i||(i[o]=void 0);t?n.props=r?i:jE(i):n.type.props?n.props=i:n.props=s,n.attrs=s}function Rb(n,e,t,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=n,a=be(i),[c]=n.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=n.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(Cu(n.emitsOptions,d))continue;const f=e[d];if(c)if(Ae(s,d))f!==s[d]&&(s[d]=f,u=!0);else{const m=Mn(d);i[m]=Ah(c,a,m,f,n,!1)}else f!==s[d]&&(s[d]=f,u=!0)}}}else{Pv(n,e,i,s)&&(u=!0);let l;for(const h in a)(!e||!Ae(e,h)&&((l=Ms(h))===h||!Ae(e,l)))&&(c?t&&(t[h]!==void 0||t[l]!==void 0)&&(i[h]=Ah(c,a,h,void 0,n,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!Ae(e,h))&&(delete s[h],u=!0)}u&&er(n,"set","$attrs")}function Pv(n,e,t,r){const[i,s]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(gc(c))continue;const u=e[c];let l;i&&Ae(i,l=Mn(c))?!s||!s.includes(l)?t[l]=u:(a||(a={}))[l]=u:Cu(n.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(s){const c=be(t),u=a||Oe;for(let l=0;l<s.length;l++){const h=s[l];t[h]=Ah(i,c,h,u[h],n,!Ae(u,h))}}return o}function Ah(n,e,t,r,i,s){const o=n[t];if(o!=null){const a=Ae(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&me(c)){const{propsDefaults:u}=i;t in u?r=u[t]:(vs(i),r=u[t]=c.call(null,e),yi())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Ms(t))&&(r=!0))}return r}function Dv(n,e,t=!1){const r=e.propsCache,i=r.get(n);if(i)return i;const s=n.props,o={},a=[];let c=!1;if(!me(n)){const l=h=>{c=!0;const[d,f]=Dv(h,e,!0);lt(o,d),f&&a.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}if(!s&&!c)return je(n)&&r.set(n,rs),rs;if(ue(s))for(let l=0;l<s.length;l++){const h=Mn(s[l]);lm(h)&&(o[h]=Oe)}else if(s)for(const l in s){const h=Mn(l);if(lm(h)){const d=s[l],f=o[h]=ue(d)||me(d)?{type:d}:lt({},d);if(f){const m=fm(Boolean,f.type),p=fm(String,f.type);f[0]=m>-1,f[1]=p<0||m<p,(m>-1||Ae(f,"default"))&&a.push(h)}}}const u=[o,a];return je(n)&&r.set(n,u),u}function lm(n){return n[0]!=="$"}function hm(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function dm(n,e){return hm(n)===hm(e)}function fm(n,e){return ue(e)?e.findIndex(t=>dm(t,n)):me(e)&&dm(e,n)?0:-1}const Nv=n=>n[0]==="_"||n==="$stable",Vd=n=>ue(n)?n.map(An):[An(n)],kb=(n,e,t)=>{if(e._n)return e;const r=vc((...i)=>Vd(e(...i)),t);return r._c=!1,r},Ov=(n,e,t)=>{const r=n._ctx;for(const i in n){if(Nv(i))continue;const s=n[i];if(me(s))e[i]=kb(i,s,r);else if(s!=null){const o=Vd(s);e[i]=()=>o}}},Fv=(n,e)=>{const t=Vd(e);n.slots.default=()=>t},xb=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=be(e),Uc(e,"_",t)):Ov(e,n.slots={})}else n.slots={},e&&Fv(n,e);Uc(n.slots,xu,1)},Pb=(n,e,t)=>{const{vnode:r,slots:i}=n;let s=!0,o=Oe;if(r.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(lt(i,e),!t&&a===1&&delete i._):(s=!e.$stable,Ov(e,i)),o=e}else e&&(Fv(n,e),o={default:1});if(s)for(const a in i)!Nv(a)&&!(a in o)&&delete i[a]};function Ih(n,e,t,r,i=!1){if(ue(n)){n.forEach((d,f)=>Ih(d,e&&(ue(e)?e[f]:e),t,r,i));return}if(_c(r)&&!i)return;const s=r.shapeFlag&4?Pu(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=n,u=e&&e.r,l=a.refs===Oe?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(nt(u)?(l[u]=null,Ae(h,u)&&(h[u]=null)):kt(u)&&(u.value=null)),me(c))br(c,a,12,[o,l]);else{const d=nt(c),f=kt(c);if(d||f){const m=()=>{if(n.f){const p=d?Ae(h,c)?h[c]:l[c]:c.value;i?ue(p)&&Td(p,s):ue(p)?p.includes(s)||p.push(s):d?(l[c]=[s],Ae(h,c)&&(h[c]=l[c])):(c.value=[s],n.k&&(l[n.k]=c.value))}else d?(l[c]=o,Ae(h,c)&&(h[c]=o)):f&&(c.value=o,n.k&&(l[n.k]=o))};o?(m.id=-1,jt(m,t)):m()}}}const jt=ib;function Db(n){return Nb(n)}function Nb(n,e){const t=dh();t.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:f=dn,insertStaticContent:m}=n,p=(g,v,A,S=null,R=null,O=null,j=!1,L=null,K=!!v.dynamicChildren)=>{if(g===v)return;g&&!so(g,v)&&(S=C(g),Ye(g,R,O,!0),g=null),v.patchFlag===-2&&(K=!1,v.dynamicChildren=null);const{type:F,ref:X,shapeFlag:Y}=v;switch(F){case ku:y(g,v,A,S);break;case Ei:_(g,v,A,S);break;case Ic:g==null&&T(v,A,S,j);break;case ct:D(g,v,A,S,R,O,j,L,K);break;default:Y&1?he(g,v,A,S,R,O,j,L,K):Y&6?I(g,v,A,S,R,O,j,L,K):(Y&64||Y&128)&&F.process(g,v,A,S,R,O,j,L,K,B)}X!=null&&R&&Ih(X,g&&g.ref,O,v||g,!v)},y=(g,v,A,S)=>{if(g==null)r(v.el=a(v.children),A,S);else{const R=v.el=g.el;v.children!==g.children&&u(R,v.children)}},_=(g,v,A,S)=>{g==null?r(v.el=c(v.children||""),A,S):v.el=g.el},T=(g,v,A,S)=>{[g.el,g.anchor]=m(g.children,v,A,S,g.el,g.anchor)},U=({el:g,anchor:v},A,S)=>{let R;for(;g&&g!==v;)R=d(g),r(g,A,S),g=R;r(v,A,S)},P=({el:g,anchor:v})=>{let A;for(;g&&g!==v;)A=d(g),i(g),g=A;i(v)},he=(g,v,A,S,R,O,j,L,K)=>{j=j||v.type==="svg",g==null?x(v,A,S,R,O,j,L,K):Et(g,v,R,O,j,L,K)},x=(g,v,A,S,R,O,j,L)=>{let K,F;const{type:X,props:Y,shapeFlag:ne,transition:ae,dirs:ge}=g;if(K=g.el=o(g.type,O,Y&&Y.is,Y),ne&8?l(K,g.children):ne&16&&oe(g.children,K,null,S,R,O&&X!=="foreignObject",j,L),ge&&Jr(g,null,S,"created"),Ee(K,g,g.scopeId,j,S),Y){for(const Te in Y)Te!=="value"&&!gc(Te)&&s(K,Te,null,Y[Te],O,g.children,S,R,De);"value"in Y&&s(K,"value",null,Y.value),(F=Y.onVnodeBeforeMount)&&_n(F,S,g)}ge&&Jr(g,null,S,"beforeMount");const Pe=(!R||R&&!R.pendingBranch)&&ae&&!ae.persisted;Pe&&ae.beforeEnter(K),r(K,v,A),((F=Y&&Y.onVnodeMounted)||Pe||ge)&&jt(()=>{F&&_n(F,S,g),Pe&&ae.enter(K),ge&&Jr(g,null,S,"mounted")},R)},Ee=(g,v,A,S,R)=>{if(A&&f(g,A),S)for(let O=0;O<S.length;O++)f(g,S[O]);if(R){let O=R.subTree;if(v===O){const j=R.vnode;Ee(g,j,j.scopeId,j.slotScopeIds,R.parent)}}},oe=(g,v,A,S,R,O,j,L,K=0)=>{for(let F=K;F<g.length;F++){const X=g[F]=L?gr(g[F]):An(g[F]);p(null,X,v,A,S,R,O,j,L)}},Et=(g,v,A,S,R,O,j)=>{const L=v.el=g.el;let{patchFlag:K,dynamicChildren:F,dirs:X}=v;K|=g.patchFlag&16;const Y=g.props||Oe,ne=v.props||Oe;let ae;A&&Xr(A,!1),(ae=ne.onVnodeBeforeUpdate)&&_n(ae,A,v,g),X&&Jr(v,g,A,"beforeUpdate"),A&&Xr(A,!0);const ge=R&&v.type!=="foreignObject";if(F?Q(g.dynamicChildren,F,L,A,S,ge,O):j||ie(g,v,L,null,A,S,ge,O,!1),K>0){if(K&16)w(L,v,Y,ne,A,S,R);else if(K&2&&Y.class!==ne.class&&s(L,"class",null,ne.class,R),K&4&&s(L,"style",Y.style,ne.style,R),K&8){const Pe=v.dynamicProps;for(let Te=0;Te<Pe.length;Te++){const Ke=Pe[Te],Tt=Y[Ke],vn=ne[Ke];(vn!==Tt||Ke==="value")&&s(L,Ke,Tt,vn,R,g.children,A,S,De)}}K&1&&g.children!==v.children&&l(L,v.children)}else!j&&F==null&&w(L,v,Y,ne,A,S,R);((ae=ne.onVnodeUpdated)||X)&&jt(()=>{ae&&_n(ae,A,v,g),X&&Jr(v,g,A,"updated")},S)},Q=(g,v,A,S,R,O,j)=>{for(let L=0;L<v.length;L++){const K=g[L],F=v[L],X=K.el&&(K.type===ct||!so(K,F)||K.shapeFlag&70)?h(K.el):A;p(K,F,X,null,S,R,O,j,!0)}},w=(g,v,A,S,R,O,j)=>{if(A!==S){if(A!==Oe)for(const L in A)!gc(L)&&!(L in S)&&s(g,L,A[L],null,j,v.children,R,O,De);for(const L in S){if(gc(L))continue;const K=S[L],F=A[L];K!==F&&L!=="value"&&s(g,L,F,K,j,v.children,R,O,De)}"value"in S&&s(g,"value",A.value,S.value)}},D=(g,v,A,S,R,O,j,L,K)=>{const F=v.el=g?g.el:a(""),X=v.anchor=g?g.anchor:a("");let{patchFlag:Y,dynamicChildren:ne,slotScopeIds:ae}=v;ae&&(L=L?L.concat(ae):ae),g==null?(r(F,A,S),r(X,A,S),oe(v.children,A,X,R,O,j,L,K)):Y>0&&Y&64&&ne&&g.dynamicChildren?(Q(g.dynamicChildren,ne,A,R,O,j,L),(v.key!=null||R&&v===R.subTree)&&Uv(g,v,!0)):ie(g,v,A,X,R,O,j,L,K)},I=(g,v,A,S,R,O,j,L,K)=>{v.slotScopeIds=L,g==null?v.shapeFlag&512?R.ctx.activate(v,A,S,j,K):V(v,A,S,R,O,j,K):Z(g,v,K)},V=(g,v,A,S,R,O,j)=>{const L=g.component=qb(g,S,R);if(Ev(g)&&(L.ctx.renderer=B),$b(L),L.asyncDep){if(R&&R.registerDep(L,J),!g.el){const K=L.subTree=tt(Ei);_(null,K,v,A)}return}J(L,g,v,A,R,O,j)},Z=(g,v,A)=>{const S=v.component=g.component;if(tb(g,v,A))if(S.asyncDep&&!S.asyncResolved){de(S,v,A);return}else S.next=v,WE(S.update),S.update();else v.el=g.el,S.vnode=v},J=(g,v,A,S,R,O,j)=>{const L=()=>{if(g.isMounted){let{next:X,bu:Y,u:ne,parent:ae,vnode:ge}=g,Pe=X,Te;Xr(g,!1),X?(X.el=ge.el,de(g,X,j)):X=ge,Y&&yc(Y),(Te=X.props&&X.props.onVnodeBeforeUpdate)&&_n(Te,ae,X,ge),Xr(g,!0);const Ke=Pl(g),Tt=g.subTree;g.subTree=Ke,p(Tt,Ke,h(Tt.el),C(Tt),g,R,O),X.el=Ke.el,Pe===null&&nb(g,Ke.el),ne&&jt(ne,R),(Te=X.props&&X.props.onVnodeUpdated)&&jt(()=>_n(Te,ae,X,ge),R)}else{let X;const{el:Y,props:ne}=v,{bm:ae,m:ge,parent:Pe}=g,Te=_c(v);if(Xr(g,!1),ae&&yc(ae),!Te&&(X=ne&&ne.onVnodeBeforeMount)&&_n(X,Pe,v),Xr(g,!0),Y&&se){const Ke=()=>{g.subTree=Pl(g),se(Y,g.subTree,g,R,null)};Te?v.type.__asyncLoader().then(()=>!g.isUnmounted&&Ke()):Ke()}else{const Ke=g.subTree=Pl(g);p(null,Ke,A,S,g,R,O),v.el=Ke.el}if(ge&&jt(ge,R),!Te&&(X=ne&&ne.onVnodeMounted)){const Ke=v;jt(()=>_n(X,Pe,Ke),R)}(v.shapeFlag&256||Pe&&_c(Pe.vnode)&&Pe.vnode.shapeFlag&256)&&g.a&&jt(g.a,R),g.isMounted=!0,v=A=S=null}},K=g.effect=new Pd(L,()=>Ld(F),g.scope),F=g.update=()=>K.run();F.id=g.uid,Xr(g,!0),F()},de=(g,v,A)=>{v.component=g;const S=g.vnode.props;g.vnode=v,g.next=null,Rb(g,v.props,S,A),Pb(g,v.children,A),Ls(),rm(),Bs()},ie=(g,v,A,S,R,O,j,L,K=!1)=>{const F=g&&g.children,X=g?g.shapeFlag:0,Y=v.children,{patchFlag:ne,shapeFlag:ae}=v;if(ne>0){if(ne&128){Dt(F,Y,A,S,R,O,j,L,K);return}else if(ne&256){Vt(F,Y,A,S,R,O,j,L,K);return}}ae&8?(X&16&&De(F,R,O),Y!==F&&l(A,Y)):X&16?ae&16?Dt(F,Y,A,S,R,O,j,L,K):De(F,R,O,!0):(X&8&&l(A,""),ae&16&&oe(Y,A,S,R,O,j,L,K))},Vt=(g,v,A,S,R,O,j,L,K)=>{g=g||rs,v=v||rs;const F=g.length,X=v.length,Y=Math.min(F,X);let ne;for(ne=0;ne<Y;ne++){const ae=v[ne]=K?gr(v[ne]):An(v[ne]);p(g[ne],ae,A,null,R,O,j,L,K)}F>X?De(g,R,O,!0,!1,Y):oe(v,A,S,R,O,j,L,K,Y)},Dt=(g,v,A,S,R,O,j,L,K)=>{let F=0;const X=v.length;let Y=g.length-1,ne=X-1;for(;F<=Y&&F<=ne;){const ae=g[F],ge=v[F]=K?gr(v[F]):An(v[F]);if(so(ae,ge))p(ae,ge,A,null,R,O,j,L,K);else break;F++}for(;F<=Y&&F<=ne;){const ae=g[Y],ge=v[ne]=K?gr(v[ne]):An(v[ne]);if(so(ae,ge))p(ae,ge,A,null,R,O,j,L,K);else break;Y--,ne--}if(F>Y){if(F<=ne){const ae=ne+1,ge=ae<X?v[ae].el:S;for(;F<=ne;)p(null,v[F]=K?gr(v[F]):An(v[F]),A,ge,R,O,j,L,K),F++}}else if(F>ne)for(;F<=Y;)Ye(g[F],R,O,!0),F++;else{const ae=F,ge=F,Pe=new Map;for(F=ge;F<=ne;F++){const St=v[F]=K?gr(v[F]):An(v[F]);St.key!=null&&Pe.set(St.key,F)}let Te,Ke=0;const Tt=ne-ge+1;let vn=!1,$i=0;const Wr=new Array(Tt);for(F=0;F<Tt;F++)Wr[F]=0;for(F=ae;F<=Y;F++){const St=g[F];if(Ke>=Tt){Ye(St,R,O,!0);continue}let tn;if(St.key!=null)tn=Pe.get(St.key);else for(Te=ge;Te<=ne;Te++)if(Wr[Te-ge]===0&&so(St,v[Te])){tn=Te;break}tn===void 0?Ye(St,R,O,!0):(Wr[tn-ge]=F+1,tn>=$i?$i=tn:vn=!0,p(St,v[tn],A,null,R,O,j,L,K),Ke++)}const no=vn?Ob(Wr):rs;for(Te=no.length-1,F=Tt-1;F>=0;F--){const St=ge+F,tn=v[St],ro=St+1<X?v[St+1].el:S;Wr[F]===0?p(null,tn,A,ro,R,O,j,L,K):vn&&(Te<0||F!==no[Te]?st(tn,A,ro,2):Te--)}}},st=(g,v,A,S,R=null)=>{const{el:O,type:j,transition:L,children:K,shapeFlag:F}=g;if(F&6){st(g.component.subTree,v,A,S);return}if(F&128){g.suspense.move(v,A,S);return}if(F&64){j.move(g,v,A,B);return}if(j===ct){r(O,v,A);for(let Y=0;Y<K.length;Y++)st(K[Y],v,A,S);r(g.anchor,v,A);return}if(j===Ic){U(g,v,A);return}if(S!==2&&F&1&&L)if(S===0)L.beforeEnter(O),r(O,v,A),jt(()=>L.enter(O),R);else{const{leave:Y,delayLeave:ne,afterLeave:ae}=L,ge=()=>r(O,v,A),Pe=()=>{Y(O,()=>{ge(),ae&&ae()})};ne?ne(O,ge,Pe):Pe()}else r(O,v,A)},Ye=(g,v,A,S=!1,R=!1)=>{const{type:O,props:j,ref:L,children:K,dynamicChildren:F,shapeFlag:X,patchFlag:Y,dirs:ne}=g;if(L!=null&&Ih(L,null,A,g,!0),X&256){v.ctx.deactivate(g);return}const ae=X&1&&ne,ge=!_c(g);let Pe;if(ge&&(Pe=j&&j.onVnodeBeforeUnmount)&&_n(Pe,v,g),X&6)bt(g.component,A,S);else{if(X&128){g.suspense.unmount(A,S);return}ae&&Jr(g,null,v,"beforeUnmount"),X&64?g.type.remove(g,v,A,R,B,S):F&&(O!==ct||Y>0&&Y&64)?De(F,v,A,!1,!0):(O===ct&&Y&384||!R&&X&16)&&De(K,v,A),S&&Zt(g)}(ge&&(Pe=j&&j.onVnodeUnmounted)||ae)&&jt(()=>{Pe&&_n(Pe,v,g),ae&&Jr(g,null,v,"unmounted")},A)},Zt=g=>{const{type:v,el:A,anchor:S,transition:R}=g;if(v===ct){en(A,S);return}if(v===Ic){P(g);return}const O=()=>{i(A),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(g.shapeFlag&1&&R&&!R.persisted){const{leave:j,delayLeave:L}=R,K=()=>j(A,O);L?L(g.el,O,K):K()}else O()},en=(g,v)=>{let A;for(;g!==v;)A=d(g),i(g),g=A;i(v)},bt=(g,v,A)=>{const{bum:S,scope:R,update:O,subTree:j,um:L}=g;S&&yc(S),R.stop(),O&&(O.active=!1,Ye(j,g,v,A)),L&&jt(L,v),jt(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},De=(g,v,A,S=!1,R=!1,O=0)=>{for(let j=O;j<g.length;j++)Ye(g[j],v,A,S,R)},C=g=>g.shapeFlag&6?C(g.component.subTree):g.shapeFlag&128?g.suspense.next():d(g.anchor||g.el),H=(g,v,A)=>{g==null?v._vnode&&Ye(v._vnode,null,null,!0):p(v._vnode||null,g,v,null,null,null,A),rm(),gv(),v._vnode=g},B={p,um:Ye,m:st,r:Zt,mt:V,mc:oe,pc:ie,pbc:Q,n:C,o:n};let W,se;return e&&([W,se]=e(B)),{render:H,hydrate:W,createApp:Sb(H,W)}}function Xr({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Uv(n,e,t=!1){const r=n.children,i=e.children;if(ue(r)&&ue(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=gr(i[s]),a.el=o.el),t||Uv(o,a)),a.type===ku&&(a.el=o.el)}}function Ob(n){const e=n.slice(),t=[0];let r,i,s,o,a;const c=n.length;for(r=0;r<c;r++){const u=n[r];if(u!==0){if(i=t[t.length-1],n[i]<u){e[r]=i,t.push(r);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<u?s=a+1:o=a;u<n[t[s]]&&(s>0&&(e[r]=t[s-1]),t[s]=r)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const Fb=n=>n.__isTeleport,ct=Symbol.for("v-fgt"),ku=Symbol.for("v-txt"),Ei=Symbol.for("v-cmt"),Ic=Symbol.for("v-stc"),ko=[];let ln=null;function Se(n=!1){ko.push(ln=n?null:[])}function Ub(){ko.pop(),ln=ko[ko.length-1]||null}let Ho=1;function pm(n){Ho+=n}function Mv(n){return n.dynamicChildren=Ho>0?ln||rs:null,Ub(),Ho>0&&ln&&ln.push(n),n}function Ce(n,e,t,r,i,s){return Mv(ce(n,e,t,r,i,s,!0))}function Mb(n,e,t,r,i){return Mv(tt(n,e,t,r,i,!0))}function Eh(n){return n?n.__v_isVNode===!0:!1}function so(n,e){return n.type===e.type&&n.key===e.key}const xu="__vInternal",Lv=({key:n})=>n??null,Ec=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?nt(n)||kt(n)||me(n)?{i:sn,r:n,k:e,f:!!t}:n:null);function ce(n,e=null,t=null,r=0,i=null,s=n===ct?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Lv(e),ref:e&&Ec(e),scopeId:wv,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:sn};return a?(Kd(c,t),s&128&&n.normalize(c)):t&&(c.shapeFlag|=nt(t)?8:16),Ho>0&&!o&&ln&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&ln.push(c),c}const tt=Lb;function Lb(n,e=null,t=null,r=0,i=null,s=!1){if((!n||n===yb)&&(n=Ei),Eh(n)){const a=ys(n,e,!0);return t&&Kd(a,t),Ho>0&&!s&&ln&&(a.shapeFlag&6?ln[ln.indexOf(n)]=a:ln.push(a)),a.patchFlag|=-2,a}if(Wb(n)&&(n=n.__vccOpts),e){e=Bb(e);let{class:a,style:c}=e;a&&!nt(a)&&(e.class=kd(a)),je(c)&&(av(c)&&!ue(c)&&(c=lt({},c)),e.style=Rd(c))}const o=nt(n)?1:rb(n)?128:Fb(n)?64:je(n)?4:me(n)?2:0;return ce(n,e,t,r,i,o,s,!0)}function Bb(n){return n?av(n)||xu in n?lt({},n):n:null}function ys(n,e,t=!1){const{props:r,ref:i,patchFlag:s,children:o}=n,a=e?Vb(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&Lv(a),ref:e&&e.ref?t&&i?ue(i)?i.concat(Ec(e)):[i,Ec(e)]:Ec(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ct?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ys(n.ssContent),ssFallback:n.ssFallback&&ys(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function bh(n=" ",e=0){return tt(ku,null,n,e)}function jd(n,e){const t=tt(Ic,null,n);return t.staticCount=e,t}function Hn(n="",e=!1){return e?(Se(),Mb(Ei,null,n)):tt(Ei,null,n)}function An(n){return n==null||typeof n=="boolean"?tt(Ei):ue(n)?tt(ct,null,n.slice()):typeof n=="object"?gr(n):tt(ku,null,String(n))}function gr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ys(n)}function Kd(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(ue(e))t=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Kd(n,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(xu in e)?e._ctx=sn:i===3&&sn&&(sn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else me(e)?(e={default:e,_ctx:sn},t=32):(e=String(e),r&64?(t=16,e=[bh(e)]):t=8);n.children=e,n.shapeFlag|=t}function Vb(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=kd([e.class,r.class]));else if(i==="style")e.style=Rd([e.style,r.style]);else if(Au(i)){const s=e[i],o=r[i];o&&s!==o&&!(ue(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function _n(n,e,t,r=null){fn(n,e,7,[t,r])}const jb=xv();let Kb=0;function qb(n,e,t){const r=n.type,i=(e?e.appContext:n.appContext)||jb,s={uid:Kb++,vnode:n,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new dE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dv(r,i),emitsOptions:vv(r,i),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:r.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=XE.bind(null,s),n.ce&&n.ce(s),s}let vt=null,qd,Qi,mm="__VUE_INSTANCE_SETTERS__";(Qi=dh()[mm])||(Qi=dh()[mm]=[]),Qi.push(n=>vt=n),qd=n=>{Qi.length>1?Qi.forEach(e=>e(n)):Qi[0](n)};const vs=n=>{qd(n),n.scope.on()},yi=()=>{vt&&vt.scope.off(),qd(null)};function Bv(n){return n.vnode.shapeFlag&4}let zo=!1;function $b(n,e=!1){zo=e;const{props:t,children:r}=n.vnode,i=Bv(n);Cb(n,t,i,e),xb(n,r);const s=i?Qb(n,e):void 0;return zo=!1,s}function Qb(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=cv(new Proxy(n.ctx,wb));const{setup:r}=t;if(r){const i=n.setupContext=r.length>1?zb(n):null;vs(n),Ls();const s=br(r,n,0,[n.props,i]);if(Bs(),yi(),$y(s)){if(s.then(yi,yi),e)return s.then(o=>{gm(n,o,e)}).catch(o=>{Su(o,n,0)});n.asyncDep=s}else gm(n,s,e)}else Vv(n,e)}function gm(n,e,t){me(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:je(e)&&(n.setupState=dv(e)),Vv(n,t)}let ym;function Vv(n,e,t){const r=n.type;if(!n.render){if(!e&&ym&&!r.render){const i=r.template||Bd(n).template;if(i){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:c}=r,u=lt(lt({isCustomElement:s,delimiters:a},o),c);r.render=ym(i,u)}}n.render=r.render||dn}vs(n),Ls(),_b(n),Bs(),yi()}function Hb(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return zt(n,"get","$attrs"),e[t]}}))}function zb(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return Hb(n)},slots:n.slots,emit:n.emit,expose:e}}function Pu(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(dv(cv(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ro)return Ro[t](n)},has(e,t){return t in e||t in Ro}}))}function Gb(n,e=!0){return me(n)?n.displayName||n.name:n.name||e&&n.__name}function Wb(n){return me(n)&&"__vccOpts"in n}const nn=(n,e)=>HE(n,e,zo);function jv(n,e,t){const r=arguments.length;return r===2?je(e)&&!ue(e)?Eh(e)?tt(n,null,[e]):tt(n,e):tt(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Eh(t)&&(t=[t]),tt(n,e,t))}const Jb=Symbol.for("v-scx"),Yb=()=>Nn(Jb),Xb="3.3.2",Zb="http://www.w3.org/2000/svg",ii=typeof document<"u"?document:null,vm=ii&&ii.createElement("template"),eT={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const i=e?ii.createElementNS(Zb,n):ii.createElement(n,t?{is:t}:void 0);return n==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:n=>ii.createTextNode(n),createComment:n=>ii.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ii.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,i,s){const o=t?t.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{vm.innerHTML=r?`<svg>${n}</svg>`:n;const a=vm.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function tT(n,e,t){const r=n._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function nT(n,e,t){const r=n.style,i=nt(t);if(t&&!i){if(e&&!nt(e))for(const s in e)t[s]==null&&Th(r,s,"");for(const s in t)Th(r,s,t[s])}else{const s=r.display;i?e!==t&&(r.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(r.display=s)}}const wm=/\s*!important$/;function Th(n,e,t){if(ue(t))t.forEach(r=>Th(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=rT(n,e);wm.test(t)?n.setProperty(Ms(r),t.replace(wm,""),"important"):n[r]=t}}const _m=["Webkit","Moz","ms"],Nl={};function rT(n,e){const t=Nl[e];if(t)return t;let r=Mn(e);if(r!=="filter"&&r in n)return Nl[e]=r;r=bu(r);for(let i=0;i<_m.length;i++){const s=_m[i]+r;if(s in n)return Nl[e]=s}return e}const Am="http://www.w3.org/1999/xlink";function iT(n,e,t,r,i){if(r&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Am,e.slice(6,e.length)):n.setAttributeNS(Am,e,t);else{const s=hE(e);t==null||s&&!zy(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function sT(n,e,t,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const u=a==="OPTION"?n.getAttribute("value"):n.value,l=t??"";u!==l&&(n.value=l),t==null&&n.removeAttribute(e);return}let c=!1;if(t===""||t==null){const u=typeof n[e];u==="boolean"?t=zy(t):t==null&&u==="string"?(t="",c=!0):u==="number"&&(t=0,c=!0)}try{n[e]=t}catch{}c&&n.removeAttribute(e)}function Ji(n,e,t,r){n.addEventListener(e,t,r)}function oT(n,e,t,r){n.removeEventListener(e,t,r)}function aT(n,e,t,r,i=null){const s=n._vei||(n._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=cT(e);if(r){const u=s[e]=hT(r,i);Ji(n,a,u,c)}else o&&(oT(n,a,o,c),s[e]=void 0)}}const Im=/(?:Once|Passive|Capture)$/;function cT(n){let e;if(Im.test(n)){e={};let r;for(;r=n.match(Im);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ms(n.slice(2)),e]}let Ol=0;const uT=Promise.resolve(),lT=()=>Ol||(uT.then(()=>Ol=0),Ol=Date.now());function hT(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;fn(dT(r,t.value),e,5,[r])};return t.value=n,t.attached=lT(),t}function dT(n,e){if(ue(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Em=/^on[a-z]/,fT=(n,e,t,r,i=!1,s,o,a,c)=>{e==="class"?tT(n,r,i):e==="style"?nT(n,t,r):Au(e)?bd(e)||aT(n,e,t,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):pT(n,e,r,i))?sT(n,e,r,s,o,a,c):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),iT(n,e,r,i))};function pT(n,e,t,r){return r?!!(e==="innerHTML"||e==="textContent"||e in n&&Em.test(e)&&me(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Em.test(e)&&nt(t)?!1:e in n}const bm=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ue(e)?t=>yc(e,t):e};function mT(n){n.target.composing=!0}function Tm(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Kc={created(n,{modifiers:{lazy:e,trim:t,number:r}},i){n._assign=bm(i);const s=r||i.props&&i.props.type==="number";Ji(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),s&&(a=hh(a)),n._assign(a)}),t&&Ji(n,"change",()=>{n.value=n.value.trim()}),e||(Ji(n,"compositionstart",mT),Ji(n,"compositionend",Tm),Ji(n,"change",Tm))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:r,number:i}},s){if(n._assign=bm(s),n.composing||document.activeElement===n&&n.type!=="range"&&(t||r&&n.value.trim()===e||(i||n.type==="number")&&hh(n.value)===e))return;const o=e??"";n.value!==o&&(n.value=o)}},gT=["ctrl","shift","alt","meta"],yT={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>gT.some(t=>n[`${t}Key`]&&!e.includes(t))},vT=(n,e)=>(t,...r)=>{for(let i=0;i<e.length;i++){const s=yT[e[i]];if(s&&s(t,e))return}return n(t,...r)},wT=lt({patchProp:fT},eT);let Sm;function _T(){return Sm||(Sm=Db(wT))}const AT=(...n)=>{const e=_T().createApp(...n),{mount:t}=e;return e.mount=r=>{const i=IT(r);if(!i)return;const s=e._component;!me(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function IT(n){return nt(n)?document.querySelector(n):n}const ET="/ticharlez34/assets/logo-826f37f1.png";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},bT=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},qv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(t[l],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Kv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):bT(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new TT;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const m=u<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class TT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ST=function(n){const e=Kv(n);return qv.encodeByteArray(e,!0)},qc=function(n){return ST(n).replace(/\./g,"")},$v=function(n){try{return qv.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function $c(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!CT(t)||(n[t]=$c(n[t],e[t]));return n}function CT(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=()=>RT().__FIREBASE_DEFAULTS__,xT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},PT=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&$v(n[1]);return e&&JSON.parse(e)},Du=()=>{try{return kT()||xT()||PT()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},DT=n=>{var e,t;return(t=(e=Du())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Qv=()=>{var n;return(n=Du())===null||n===void 0?void 0:n.config},Hv=n=>{var e;return(e=Du())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OT(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[qc(JSON.stringify(t)),qc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function FT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function $d(){var n;const e=(n=Du())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function UT(){return typeof self=="object"&&self.self===self}function zv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Qd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gv(){const n=qe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function MT(){return!$d()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Go(){try{return typeof indexedDB=="object"}catch{return!1}}function LT(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT="FirebaseError";class Lt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=BT,Object.setPrototypeOf(this,Lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ui.prototype.create)}}class Ui{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?VT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Lt(i,a,r)}}function VT(n,e){return n.replace(jT,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const jT=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function KT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Qc(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Rm(s)&&Rm(o)){if(!Qc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Rm(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ts(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ao(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Wv(n,e){const t=new qT(n,e);return t.subscribe.bind(t)}class qT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");$T(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Fl),i.error===void 0&&(i.error=Fl),i.complete===void 0&&(i.complete=Fl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $T(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Fl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(n){return n&&n._delegate?n._delegate:n}class Ln{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new NT;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zT(e))try{this.getOrInitializeService({instanceIdentifier:ei})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ei){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ei){return this.instances.has(e)}getOptions(e=ei){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:HT(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ei){return this.component?this.component.multipleInstances?e:ei:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function HT(n){return n===ei?void 0:n}function zT(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new QT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd=[];var we;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(we||(we={}));const Jv={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},WT=we.INFO,JT={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},YT=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=JT[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nu{constructor(e){this.name=e,this._logLevel=WT,this._logHandler=YT,this._userLogHandler=null,Hd.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}function XT(n){Hd.forEach(e=>{e.setLogLevel(n)})}function ZT(n,e){for(const t of Hd){let r=null;e&&e.level&&(r=Jv[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r??i.logLevel)&&n({level:we[s].toLowerCase(),message:a,args:o,type:i.name})}}}const eS=(n,e)=>e.some(t=>n instanceof t);let km,xm;function tS(){return km||(km=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nS(){return xm||(xm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yv=new WeakMap,Sh=new WeakMap,Xv=new WeakMap,Ul=new WeakMap,zd=new WeakMap;function rS(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Tr(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Yv.set(t,n)}).catch(()=>{}),zd.set(e,n),e}function iS(n){if(Sh.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Sh.set(n,e)}let Ch={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Sh.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Xv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Tr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function sS(n){Ch=n(Ch)}function oS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ml(this),e,...t);return Xv.set(r,e.sort?e.sort():[e]),Tr(r)}:nS().includes(n)?function(...e){return n.apply(Ml(this),e),Tr(Yv.get(this))}:function(...e){return Tr(n.apply(Ml(this),e))}}function aS(n){return typeof n=="function"?oS(n):(n instanceof IDBTransaction&&iS(n),eS(n,tS())?new Proxy(n,Ch):n)}function Tr(n){if(n instanceof IDBRequest)return rS(n);if(Ul.has(n))return Ul.get(n);const e=aS(n);return e!==n&&(Ul.set(n,e),zd.set(e,n)),e}const Ml=n=>zd.get(n);function cS(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Tr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Tr(o.result),c.oldVersion,c.newVersion,Tr(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const uS=["get","getKey","getAll","getAllKeys","count"],lS=["put","add","delete","clear"],Ll=new Map;function Pm(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ll.get(e))return Ll.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=lS.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uS.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&c.done]))[0]};return Ll.set(e,s),s}sS(n=>({...n,get:(e,t,r)=>Pm(e,t)||n.get(e,t,r),has:(e,t)=>!!Pm(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(dS(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function dS(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rh="@firebase/app",Dm="0.9.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=new Nu("@firebase/app"),fS="@firebase/app-compat",pS="@firebase/analytics-compat",mS="@firebase/analytics",gS="@firebase/app-check-compat",yS="@firebase/app-check",vS="@firebase/auth",wS="@firebase/auth-compat",_S="@firebase/database",AS="@firebase/database-compat",IS="@firebase/functions",ES="@firebase/functions-compat",bS="@firebase/installations",TS="@firebase/installations-compat",SS="@firebase/messaging",CS="@firebase/messaging-compat",RS="@firebase/performance",kS="@firebase/performance-compat",xS="@firebase/remote-config",PS="@firebase/remote-config-compat",DS="@firebase/storage",NS="@firebase/storage-compat",OS="@firebase/firestore",FS="@firebase/firestore-compat",US="firebase",MS="9.22.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="[DEFAULT]",LS={[Rh]:"fire-core",[fS]:"fire-core-compat",[mS]:"fire-analytics",[pS]:"fire-analytics-compat",[yS]:"fire-app-check",[gS]:"fire-app-check-compat",[vS]:"fire-auth",[wS]:"fire-auth-compat",[_S]:"fire-rtdb",[AS]:"fire-rtdb-compat",[IS]:"fire-fn",[ES]:"fire-fn-compat",[bS]:"fire-iid",[TS]:"fire-iid-compat",[SS]:"fire-fcm",[CS]:"fire-fcm-compat",[RS]:"fire-perf",[kS]:"fire-perf-compat",[xS]:"fire-rc",[PS]:"fire-rc-compat",[DS]:"fire-gcs",[NS]:"fire-gcs-compat",[OS]:"fire-fst",[FS]:"fire-fst-compat","fire-js":"fire-js",[US]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new Map,Wo=new Map;function Hc(n,e){try{n.container.addComponent(e)}catch(t){bi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Zv(n,e){n.container.addOrOverwriteComponent(e)}function kr(n){const e=n.name;if(Wo.has(e))return bi.debug(`There were multiple attempts to register component ${e}.`),!1;Wo.set(e,n);for(const t of Rr.values())Hc(t,n);return!0}function Ou(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function BS(n,e,t=Cr){Ou(n,e).clearInstance(t)}function VS(){Wo.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Xn=new Ui("app","Firebase",jS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let KS=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=MS;function Gd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Cr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Xn.create("bad-app-name",{appName:String(i)});if(t||(t=Qv()),!t)throw Xn.create("no-options");const s=Rr.get(i);if(s){if(Qc(t,s.options)&&Qc(r,s.config))return s;throw Xn.create("duplicate-app",{appName:i})}const o=new GT(i);for(const c of Wo.values())o.addComponent(c);const a=new KS(t,r,o);return Rr.set(i,a),a}function ew(n=Cr){const e=Rr.get(n);if(!e&&n===Cr&&Qv())return Gd();if(!e)throw Xn.create("no-app",{appName:n});return e}function qS(){return Array.from(Rr.values())}async function tw(n){const e=n.name;Rr.has(e)&&(Rr.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function On(n,e,t){var r;let i=(r=LS[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bi.warn(a.join(" "));return}kr(new Ln(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function nw(n,e){if(n!==null&&typeof n!="function")throw Xn.create("invalid-log-argument");ZT(n,e)}function rw(n){XT(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S="firebase-heartbeat-database",QS=1,Jo="firebase-heartbeat-store";let Bl=null;function iw(){return Bl||(Bl=cS($S,QS,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Jo)}}}).catch(n=>{throw Xn.create("idb-open",{originalErrorMessage:n.message})})),Bl}async function HS(n){try{return await(await iw()).transaction(Jo).objectStore(Jo).get(sw(n))}catch(e){if(e instanceof Lt)bi.warn(e.message);else{const t=Xn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bi.warn(t.message)}}}async function Nm(n,e){try{const r=(await iw()).transaction(Jo,"readwrite");await r.objectStore(Jo).put(e,sw(n)),await r.done}catch(t){if(t instanceof Lt)bi.warn(t.message);else{const r=Xn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});bi.warn(r.message)}}}function sw(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=1024,GS=30*24*60*60*1e3;class WS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new YS(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Om();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=GS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Om(),{heartbeatsToSend:t,unsentEntries:r}=JS(this._heartbeatsCache.heartbeats),i=qc(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Om(){return new Date().toISOString().substring(0,10)}function JS(n,e=zS){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Fm(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Fm(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class YS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Go()?LT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await HS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fm(n){return qc(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(n){kr(new Ln("platform-logger",e=>new hS(e),"PRIVATE")),kr(new Ln("heartbeat",e=>new WS(e),"PRIVATE")),On(Rh,Dm,n),On(Rh,Dm,"esm2017"),On("fire-js","")}XS("");const ZS=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Lt,SDK_VERSION:jr,_DEFAULT_ENTRY_NAME:Cr,_addComponent:Hc,_addOrOverwriteComponent:Zv,_apps:Rr,_clearComponents:VS,_components:Wo,_getProvider:Ou,_registerComponent:kr,_removeServiceInstance:BS,deleteApp:tw,getApp:ew,getApps:qS,initializeApp:Gd,onLog:nw,registerVersion:On,setLogLevel:rw},Symbol.toStringTag,{value:"Module"}));function Wd(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const oo={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Hi={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function ow(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tC=eC,nC=ow,aw=new Ui("auth","Firebase",ow());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=new Nu("@firebase/auth");function rC(n,...e){zc.logLevel<=we.WARN&&zc.warn(`Auth (${jr}): ${n}`,...e)}function bc(n,...e){zc.logLevel<=we.ERROR&&zc.error(`Auth (${jr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(n,...e){throw Jd(n,...e)}function _t(n,...e){return Jd(n,...e)}function cw(n,e,t){const r=Object.assign(Object.assign({},nC()),{[e]:t});return new Ui("auth","Firebase",r).create(e,{appName:n.name})}function js(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ht(n,"argument-error"),cw(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Jd(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return aw.create(n,...e)}function M(n,e,...t){if(!n)throw Jd(e,...t)}function kn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw bc(e),new Error(e)}function pn(n,e){n||kn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Yd(){return Um()==="http:"||Um()==="https:"}function Um(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Yd()||zv()||"connection"in navigator)?navigator.onLine:!0}function sC(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,t){this.shortDelay=e,this.longDelay=t,pn(t>e,"Short delay should be less than long delay!"),this.isMobile=FT()||Qd()}get(){return iC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(n,e){pn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=new Aa(3e4,6e4);function et(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function it(n,e,t,r,i={}){return lw(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Vs(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),uw.fetch()(hw(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function lw(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},oC),e);try{const i=new cC(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Io(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Io(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Io(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Io(n,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw cw(n,l,u);ht(n,l)}}catch(i){if(i instanceof Lt)throw i;ht(n,"network-request-failed",{message:String(i)})}}async function sr(n,e,t,r,i={}){const s=await it(n,e,t,r,i);return"mfaPendingCredential"in s&&ht(n,"multi-factor-auth-required",{_serverResponse:s}),s}function hw(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Xd(n.config,i):`${n.config.apiScheme}://${i}`}class cC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(_t(this.auth,"network-request-failed")),aC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Io(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=_t(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uC(n,e){return it(n,"POST","/v1/accounts:delete",e)}async function lC(n,e){return it(n,"POST","/v1/accounts:update",e)}async function hC(n,e){return it(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dC(n,e=!1){const t=re(n),r=await t.getIdToken(e),i=Fu(r);M(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:xo(Vl(i.auth_time)),issuedAtTime:xo(Vl(i.iat)),expirationTime:xo(Vl(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Vl(n){return Number(n)*1e3}function Fu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return bc("JWT malformed, contained fewer than 3 sections"),null;try{const i=$v(t);return i?JSON.parse(i):(bc("Failed to decode base64 JWT payload"),null)}catch(i){return bc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function fC(n){const e=Fu(n);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Lt&&pC(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function pC({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=xo(this.lastLoginAt),this.creationTime=xo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(n){var e;const t=n.auth,r=await n.getIdToken(),i=await tr(n,hC(t,{idToken:r}));M(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?vC(s.providerUserInfo):[],a=yC(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new dw(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function gC(n){const e=re(n);await Xo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yC(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function vC(n){return n.map(e=>{var{providerId:t}=e,r=Wd(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wC(n,e){const t=await lw(n,{},async()=>{const r=Vs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=hw(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",uw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await wC(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Zo;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zo,this.toJSON())}_performRefresh(){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(n,e){M(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class vi{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Wd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new dw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await tr(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return dC(this,e)}reload(){return gC(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new vi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Xo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await tr(this,uC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,u,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,p=(a=t.tenantId)!==null&&a!==void 0?a:void 0,y=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,_=(u=t.createdAt)!==null&&u!==void 0?u:void 0,T=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:U,emailVerified:P,isAnonymous:he,providerData:x,stsTokenManager:Ee}=t;M(U&&Ee,e,"internal-error");const oe=Zo.fromJSON(this.name,Ee);M(typeof U=="string",e,"internal-error"),hr(h,e.name),hr(d,e.name),M(typeof P=="boolean",e,"internal-error"),M(typeof he=="boolean",e,"internal-error"),hr(f,e.name),hr(m,e.name),hr(p,e.name),hr(y,e.name),hr(_,e.name),hr(T,e.name);const Et=new vi({uid:U,auth:e,email:d,emailVerified:P,displayName:h,isAnonymous:he,photoURL:m,phoneNumber:f,tenantId:p,stsTokenManager:oe,createdAt:_,lastLoginAt:T});return x&&Array.isArray(x)&&(Et.providerData=x.map(Q=>Object.assign({},Q))),y&&(Et._redirectEventId=y),Et}static async _fromIdTokenResponse(e,t,r=!1){const i=new Zo;i.updateFromServerResponse(t);const s=new vi({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Xo(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm=new Map;function Jt(n){pn(n instanceof Function,"Expected a class definition");let e=Mm.get(n);return e?(pn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Mm.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fw.type="NONE";const ws=fw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(n,e,t){return`firebase:${n}:${e}:${t}`}class cs{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=wi(this.userKey,i.apiKey,s),this.fullPersistenceKey=wi("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new cs(Jt(ws),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Jt(ws);const o=wi(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=vi._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new cs(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new cs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yw(e))return"Blackberry";if(vw(e))return"Webos";if(Zd(e))return"Safari";if((e.includes("chrome/")||mw(e))&&!e.includes("edge/"))return"Chrome";if(Ia(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function pw(n=qe()){return/firefox\//i.test(n)}function Zd(n=qe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mw(n=qe()){return/crios\//i.test(n)}function gw(n=qe()){return/iemobile/i.test(n)}function Ia(n=qe()){return/android/i.test(n)}function yw(n=qe()){return/blackberry/i.test(n)}function vw(n=qe()){return/webos/i.test(n)}function Ks(n=qe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function _C(n=qe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function AC(n=qe()){var e;return Ks(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function IC(){return Gv()&&document.documentMode===10}function ww(n=qe()){return Ks(n)||Ia(n)||vw(n)||yw(n)||/windows phone/i.test(n)||gw(n)}function EC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(n,e=[]){let t;switch(n){case"Browser":t=Lm(qe());break;case"Worker":t=`${Lm(qe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${jr}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bC(n){return(await it(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Aw(n,e){return it(n,"GET","/v2/recaptchaConfig",et(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(n){return n!==void 0&&n.getResponse!==void 0}function Vm(n){return n!==void 0&&n.enterprise!==void 0}class Iw{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function ef(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=_t("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",TC().appendChild(r)})}function Ew(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const SC="https://www.google.com/recaptcha/enterprise.js?render=",CC="recaptcha-enterprise",RC="NO_RECAPTCHA";class bw{constructor(e){this.type=CC,this.auth=Je(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Aw(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Iw(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Vm(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(RC)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&Vm(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ef(SC+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function xr(n,e,t,r=!1){const i=new bw(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jm(this),this.idTokenSubscription=new jm(this),this.beforeStateQueue=new kC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=aw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Jt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await cs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Xo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?re(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Jt(e))})}async initializeRecaptchaConfig(){const e=await Aw(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Iw(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new bw(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ui("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Jt(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=await cs.create(this,[Jt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return M(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_w(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&rC(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Je(n){return re(n)}class jm{constructor(e){this.auth=e,this.observer=null,this.addObserver=Wv(t=>this.observer=t)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PC(n,e){const t=Ou(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Qc(s,e??{}))return i;ht(i,"already-initialized")}return t.initialize({options:e})}function DC(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Jt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Tw(n,e,t){const r=Je(n);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=Sw(e),{host:o,port:a}=NC(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||OC()}function Sw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function NC(n){const e=Sw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Km(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Km(o)}}}function Km(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function OC(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return kn("not implemented")}_getIdTokenResponse(e){return kn("not implemented")}_linkToIdToken(e,t){return kn("not implemented")}_getReauthenticationResolver(e){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cw(n,e){return it(n,"POST","/v1/accounts:resetPassword",et(n,e))}async function Rw(n,e){return it(n,"POST","/v1/accounts:update",e)}async function FC(n,e){return it(n,"POST","/v1/accounts:update",et(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jl(n,e){return sr(n,"POST","/v1/accounts:signInWithPassword",et(n,e))}async function Uu(n,e){return it(n,"POST","/v1/accounts:sendOobCode",et(n,e))}async function UC(n,e){return Uu(n,e)}async function Kl(n,e){return Uu(n,e)}async function ql(n,e){return Uu(n,e)}async function MC(n,e){return Uu(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LC(n,e){return sr(n,"POST","/v1/accounts:signInWithEmailLink",et(n,e))}async function BC(n,e){return sr(n,"POST","/v1/accounts:signInWithEmailLink",et(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends qs{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ea(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ea(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const i=await xr(e,r,"signInWithPassword");return jl(e,i)}else return jl(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await xr(e,r,"signInWithPassword");return jl(e,s)}else return Promise.reject(i)});case"emailLink":return LC(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Rw(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return BC(e,{idToken:t,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zn(n,e){return sr(n,"POST","/v1/accounts:signInWithIdp",et(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC="http://localhost";class Bn extends qs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Bn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ht("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Wd(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Bn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Zn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Zn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Zn(e,t)}buildRequest(){const e={requestUri:VC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Vs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jC(n,e){return it(n,"POST","/v1/accounts:sendVerificationCode",et(n,e))}async function KC(n,e){return sr(n,"POST","/v1/accounts:signInWithPhoneNumber",et(n,e))}async function qC(n,e){const t=await sr(n,"POST","/v1/accounts:signInWithPhoneNumber",et(n,e));if(t.temporaryProof)throw Io(n,"account-exists-with-different-credential",t);return t}const $C={USER_NOT_FOUND:"user-not-found"};async function QC(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return sr(n,"POST","/v1/accounts:signInWithPhoneNumber",et(n,t),$C)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends qs{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new _i({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new _i({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return KC(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return qC(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return QC(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new _i({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zC(n){const e=ts(Ao(n)).link,t=e?ts(Ao(e)).deep_link_id:null,r=ts(Ao(n)).deep_link_id;return(r?ts(Ao(r)).link:null)||r||t||e||n}class Mu{constructor(e){var t,r,i,s,o,a;const c=ts(Ao(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=HC((i=c.mode)!==null&&i!==void 0?i:null);M(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=zC(e);try{return new Mu(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.providerId=Kr.PROVIDER_ID}static credential(e,t){return ea._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Mu.parseLink(t);return M(r,"argument-error"),ea._fromEmailAndCode(e,r.code,r.tenantId)}}Kr.PROVIDER_ID="password";Kr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Kr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s extends or{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class us extends $s{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return M("providerId"in t&&"signInMethod"in t,"argument-error"),Bn._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return M(e.idToken||e.accessToken,"argument-error"),Bn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return us.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return us.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new us(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends $s{constructor(){super("facebook.com")}static credential(e){return Bn._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";bn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends $s{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Bn._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Tn.credential(t,r)}catch{return null}}}Tn.GOOGLE_SIGN_IN_METHOD="google.com";Tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends $s{constructor(){super("github.com")}static credential(e){return Bn._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch{return null}}}Sn.GITHUB_SIGN_IN_METHOD="github.com";Sn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC="http://localhost";class _s extends qs{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Zn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Zn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Zn(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new _s(r,s)}static _create(e,t){return new _s(e,t)}buildRequest(){return{requestUri:GC,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC="saml.";class Gc extends or{constructor(e){M(e.startsWith(WC),"argument-error"),super(e)}static credentialFromResult(e){return Gc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Gc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=_s.fromJSON(e);return M(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return _s._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends $s{constructor(){super("twitter.com")}static credential(e,t){return Bn._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Cn.credential(t,r)}catch{return null}}}Cn.TWITTER_SIGN_IN_METHOD="twitter.com";Cn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tc(n,e){return sr(n,"POST","/v1/accounts:signUp",et(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await vi._fromIdTokenResponse(e,r,i),o=qm(r);return new an({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=qm(r);return new an({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function qm(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JC(n){var e;const t=Je(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new an({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await Tc(t,{returnSecureToken:!0}),i=await an._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc extends Lt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Wc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Wc(e,t,r,i)}}function kw(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Wc._fromErrorAndOperation(n,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xw(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YC(n,e){const t=re(n);await Lu(!0,t,e);const{providerUserInfo:r}=await lC(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=xw(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function tf(n,e,t=!1){const r=await tr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return an._forOperation(n,"link",r)}async function Lu(n,e,t){await Xo(e);const r=xw(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";M(r.has(t)===n,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pw(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await tr(n,kw(r,i,e,n),t);M(s.idToken,r,"internal-error");const o=Fu(s.idToken);M(o,r,"internal-error");const{sub:a}=o;return M(n.uid===a,r,"user-mismatch"),an._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ht(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dw(n,e,t=!1){const r="signIn",i=await kw(n,r,e),s=await an._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Bu(n,e){return Dw(Je(n),e)}async function Nw(n,e){const t=re(n);return await Lu(!1,t,e.providerId),tf(t,e)}async function Ow(n,e){return Pw(re(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XC(n,e){return sr(n,"POST","/v1/accounts:signInWithCustomToken",et(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZC(n,e){const t=Je(n),r=await XC(t,{token:e,returnSecureToken:!0}),i=await an._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?nf._fromServerResponse(e,t):"totpInfo"in t?rf._fromServerResponse(e,t):ht(e,"internal-error")}}class nf extends Ea{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new nf(t)}}class rf extends Ea{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new rf(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(n,e,t){var r;M(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),M(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(M(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(M(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eR(n,e,t){var r;const i=Je(n),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await xr(i,s,"getOobCode",!0);t&&ls(i,o,t),await Kl(i,o)}else t&&ls(i,s,t),await Kl(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await xr(i,s,"getOobCode",!0);t&&ls(i,a,t),await Kl(i,a)}else return Promise.reject(o)})}async function tR(n,e,t){await Cw(re(n),{oobCode:e,newPassword:t})}async function nR(n,e){await FC(re(n),{oobCode:e})}async function Fw(n,e){const t=re(n),r=await Cw(t,{oobCode:e}),i=r.requestType;switch(M(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":M(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":M(r.mfaInfo,t,"internal-error");default:M(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=Ea._fromServerResponse(Je(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function rR(n,e){const{data:t}=await Fw(re(n),e);return t.email}async function Uw(n,e,t){var r;const i=Je(n),s={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await xr(i,s,"signUpPassword");o=Tc(i,u)}else o=Tc(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const l=await xr(i,s,"signUpPassword");return Tc(i,l)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),c=await an._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function Mw(n,e,t){return Bu(re(n),Kr.credential(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iR(n,e,t){var r;const i=Je(n),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,c){M(c.handleCodeInApp,i,"argument-error"),c&&ls(i,a,c)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await xr(i,s,"getOobCode",!0);o(a,t),await ql(i,a)}else o(s,t),await ql(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const c=await xr(i,s,"getOobCode",!0);o(c,t),await ql(i,c)}else return Promise.reject(a)})}function sR(n,e){const t=Mu.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function oR(n,e,t){const r=re(n),i=Kr.credentialWithLink(e,t||Yo());return M(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Bu(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aR(n,e){return it(n,"POST","/v1/accounts:createAuthUri",et(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cR(n,e){const t=Yd()?Yo():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await aR(re(n),r);return i||[]}async function uR(n,e){const t=re(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&ls(t.auth,i,e);const{email:s}=await UC(t.auth,i);s!==n.email&&await n.reload()}async function lR(n,e,t){const r=re(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&ls(r.auth,s,t);const{email:o}=await MC(r.auth,s);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hR(n,e){return it(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dR(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=re(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await tr(r,hR(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function fR(n,e){return Lw(re(n),e,null)}function pR(n,e){return Lw(re(n),null,e)}async function Lw(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await tr(n,Rw(r,s));await n._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mR(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=Fu(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new hs(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new gR(s,i);case"github.com":return new yR(s,i);case"google.com":return new vR(s,i);case"twitter.com":return new wR(s,i,n.screenName||null);case"custom":case"anonymous":return new hs(s,null);default:return new hs(s,r,i)}}class hs{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class Bw extends hs{constructor(e,t,r,i){super(e,t,r),this.username=i}}class gR extends hs{constructor(e,t){super(e,"facebook.com",t)}}class yR extends Bw{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class vR extends hs{constructor(e,t){super(e,"google.com",t)}}class wR extends Bw{constructor(e,t,r){super(e,"twitter.com",t,r)}}function _R(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:mR(t)}function AR(n,e,t,r){return re(n).onIdTokenChanged(e,t,r)}function IR(n,e,t){return re(n).beforeAuthStateChanged(e,t)}function Vw(n,e,t,r){return re(n).onAuthStateChanged(e,t,r)}function ER(n){return re(n).signOut()}class hi{constructor(e,t,r){this.type=e,this.credential=t,this.auth=r}static _fromIdtoken(e,t){return new hi("enroll",e,t)}static _fromMfaPendingCredential(e){return new hi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return hi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return hi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=Je(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Ea._fromServerResponse(r,a));M(i.mfaPendingCredential,r,"internal-error");const o=hi._fromMfaPendingCredential(i.mfaPendingCredential);return new sf(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const l=await an._fromIdTokenResponse(r,t.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return M(t.user,r,"internal-error"),an._forOperation(t.user,t.operationType,u);default:ht(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function bR(n,e){var t;const r=re(n),i=e;return M(e.customData.operationType,r,"argument-error"),M((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),sf._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TR(n,e){return it(n,"POST","/v2/accounts/mfaEnrollment:start",et(n,e))}function SR(n,e){return it(n,"POST","/v2/accounts/mfaEnrollment:finalize",et(n,e))}function CR(n,e){return it(n,"POST","/v2/accounts/mfaEnrollment:withdraw",et(n,e))}class of{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>Ea._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new of(e)}async getSession(){return hi._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const r=e,i=await this.getSession(),s=await tr(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await tr(this.user,CR(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const $l=new WeakMap;function RR(n){const e=re(n);return $l.has(e)||$l.set(e,of._fromUser(e)),$l.get(e)}const Jc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Jc,"1"),this.storage.removeItem(Jc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(){const n=qe();return Zd(n)||Ks(n)}const xR=1e3,PR=10;class Kw extends jw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=kR()&&EC(),this.fallbackToPolling=ww(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);IC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,PR):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},xR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Kw.type="LOCAL";const Vu=Kw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw extends jw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}qw.type="SESSION";const Pr=qw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ju(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,s)),c=await DR(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ju.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=ba("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return window}function OR(n){Ze().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(){return typeof Ze().WorkerGlobalScope<"u"&&typeof Ze().importScripts=="function"}async function FR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UR(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function MR(){return af()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w="firebaseLocalStorageDb",LR=1,Yc="firebaseLocalStorage",Qw="fbase_key";class Ta{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ku(n,e){return n.transaction([Yc],e?"readwrite":"readonly").objectStore(Yc)}function BR(){const n=indexedDB.deleteDatabase($w);return new Ta(n).toPromise()}function kh(){const n=indexedDB.open($w,LR);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Yc,{keyPath:Qw})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Yc)?e(r):(r.close(),await BR(),e(await kh()))})})}async function $m(n,e,t){const r=Ku(n,!0).put({[Qw]:e,value:t});return new Ta(r).toPromise()}async function VR(n,e){const t=Ku(n,!1).get(e),r=await new Ta(t).toPromise();return r===void 0?null:r.value}function Qm(n,e){const t=Ku(n,!0).delete(e);return new Ta(t).toPromise()}const jR=800,KR=3;class Hw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kh(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>KR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return af()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ju._getInstance(MR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await FR(),!this.activeServiceWorker)return;this.sender=new NR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||UR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kh();return await $m(e,Jc,"1"),await Qm(e,Jc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>$m(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>VR(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Qm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ku(i,!1).getAll();return new Ta(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hw.type="LOCAL";const As=Hw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(n,e){return it(n,"POST","/v2/accounts/mfaSignIn:start",et(n,e))}function $R(n,e){return it(n,"POST","/v2/accounts/mfaSignIn:finalize",et(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR=500,HR=6e4,rc=1e12;class zR{constructor(e){this.auth=e,this.counter=rc,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new GR(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||rc;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||rc;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||rc;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class GR{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;M(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=WR(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},HR)},QR))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function WR(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql=Ew("rcb"),JR=new Aa(3e4,6e4),YR="https://www.google.com/recaptcha/api.js?";class XR{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ze().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return M(ZR(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Bm(Ze().grecaptcha)?Promise.resolve(Ze().grecaptcha):new Promise((r,i)=>{const s=Ze().setTimeout(()=>{i(_t(e,"network-request-failed"))},JR.get());Ze()[Ql]=()=>{Ze().clearTimeout(s),delete Ze()[Ql];const a=Ze().grecaptcha;if(!a||!Bm(a)){i(_t(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=t,r(a)};const o=`${YR}?${Vs({onload:Ql,render:"explicit",hl:t})}`;ef(o).catch(()=>{clearTimeout(s),i(_t(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Ze().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function ZR(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class ek{async load(e){return new zR(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="recaptcha",tk={theme:"light",type:"image"};let nk=class{constructor(e,t=Object.assign({},tk),r){this.parameters=t,this.type=zw,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Je(r),this.isInvisible=this.parameters.size==="invisible",M(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;M(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new ek:new XR,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){M(!this.parameters.sitekey,this.auth,"argument-error"),M(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),M(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=Ze()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){M(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){M(Yd()&&!af(),this.auth,"internal-error"),await rk(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await bC(this.auth);M(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return M(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function rk(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=_i._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function ik(n,e,t){const r=Je(n),i=await qu(r,e,re(t));return new cf(i,s=>Bu(r,s))}async function sk(n,e,t){const r=re(n);await Lu(!1,r,"phone");const i=await qu(r.auth,e,re(t));return new cf(i,s=>Nw(r,s))}async function ok(n,e,t){const r=re(n),i=await qu(r.auth,e,re(t));return new cf(i,s=>Ow(r,s))}async function qu(n,e,t){var r;const i=await t.verify();try{M(typeof i=="string",n,"argument-error"),M(t.type===zw,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return M(o.type==="enroll",n,"internal-error"),(await TR(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{M(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return M(a,n,"missing-multi-factor-info"),(await qR(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await jC(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function ak(n,e){await tf(re(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ti=class Sc{constructor(e){this.providerId=Sc.PROVIDER_ID,this.auth=Je(e)}verifyPhoneNumber(e,t){return qu(this.auth,e,re(t))}static credential(e,t){return _i._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Sc.credentialFromTaggedObject(t)}static credentialFromError(e){return Sc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?_i._fromTokenResponse(t,r):null}};Ti.PROVIDER_ID="phone";Ti.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(n,e){return e?Jt(e):(M(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf extends qs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Zn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Zn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ck(n){return Dw(n.auth,new uf(n),n.bypassAuthState)}function uk(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),Pw(t,new uf(n),n.bypassAuthState)}async function lk(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),tf(t,new uf(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ck;case"linkViaPopup":case"linkViaRedirect":return lk;case"reauthViaPopup":case"reauthViaRedirect":return uk;default:ht(this.auth,"internal-error")}}resolve(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk=new Aa(2e3,1e4);async function dk(n,e,t){const r=Je(n);js(n,e,or);const i=Mi(r,t);return new zn(r,"signInViaPopup",e,i).executeNotNull()}async function fk(n,e,t){const r=re(n);js(r.auth,e,or);const i=Mi(r.auth,t);return new zn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function pk(n,e,t){const r=re(n);js(r.auth,e,or);const i=Mi(r.auth,t);return new zn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class zn extends Gw{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,zn.currentPopupAction&&zn.currentPopupAction.cancel(),zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){pn(this.filter.length===1,"Popup operations only handle one event");const e=ba();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(_t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hk.get())};e()}}zn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk="pendingRedirect",Po=new Map;class gk extends Gw{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Po.get(this.auth._key());if(!e){try{const r=await yk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Po.set(this.auth._key(),e)}return this.bypassAuthState||Po.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yk(n,e){const t=Jw(e),r=Ww(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function lf(n,e){return Ww(n)._set(Jw(e),"true")}function vk(){Po.clear()}function hf(n,e){Po.set(n._key(),e)}function Ww(n){return Jt(n._redirectPersistence)}function Jw(n){return wi(mk,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wk(n,e,t){return _k(n,e,t)}async function _k(n,e,t){const r=Je(n);js(n,e,or),await r._initializationPromise;const i=Mi(r,t);return await lf(i,r),i._openRedirect(r,e,"signInViaRedirect")}function Ak(n,e,t){return Ik(n,e,t)}async function Ik(n,e,t){const r=re(n);js(r.auth,e,or),await r.auth._initializationPromise;const i=Mi(r.auth,t);await lf(i,r.auth);const s=await Yw(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function Ek(n,e,t){return bk(n,e,t)}async function bk(n,e,t){const r=re(n);js(r.auth,e,or),await r.auth._initializationPromise;const i=Mi(r.auth,t);await Lu(!1,r,e.providerId),await lf(i,r.auth);const s=await Yw(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function Tk(n,e){return await Je(n)._initializationPromise,$u(n,e,!1)}async function $u(n,e,t=!1){const r=Je(n),i=Mi(r,e),o=await new gk(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Yw(n){const e=ba(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk=10*60*1e3;class Xw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ck(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Zw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(_t(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Sk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hm(e))}saveEventToCache(e){this.cachedEventUids.add(Hm(e)),this.lastProcessedEventTime=Date.now()}}function Hm(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Zw({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ck(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zw(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e_(n,e={}){return it(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kk=/^https?/;async function xk(n){if(n.config.emulator)return;const{authorizedDomains:e}=await e_(n);for(const t of e)try{if(Pk(t))return}catch{}ht(n,"unauthorized-domain")}function Pk(n){const e=Yo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!kk.test(t))return!1;if(Rk.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk=new Aa(3e4,6e4);function zm(){const n=Ze().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Nk(n){return new Promise((e,t)=>{var r,i,s;function o(){zm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zm(),t(_t(n,"network-request-failed"))},timeout:Dk.get()})}if(!((i=(r=Ze().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ze().gapi)===null||s===void 0)&&s.load)o();else{const a=Ew("iframefcb");return Ze()[a]=()=>{gapi.load?o():t(_t(n,"network-request-failed"))},ef(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Cc=null,e})}let Cc=null;function Ok(n){return Cc=Cc||Nk(n),Cc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk=new Aa(5e3,15e3),Uk="__/auth/iframe",Mk="emulator/auth/iframe",Lk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vk(n){const e=n.config;M(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Xd(e,Mk):`https://${n.config.authDomain}/${Uk}`,r={apiKey:e.apiKey,appName:n.name,v:jr},i=Bk.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Vs(r).slice(1)}`}async function jk(n){const e=await Ok(n),t=Ze().gapi;return M(t,n,"internal-error"),e.open({where:document.body,url:Vk(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Lk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=_t(n,"network-request-failed"),a=Ze().setTimeout(()=>{s(o)},Fk.get());function c(){Ze().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qk=500,$k=600,Qk="_blank",Hk="http://localhost";class Gm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zk(n,e,t,r=qk,i=$k){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Kk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=qe().toLowerCase();t&&(a=mw(u)?Qk:t),pw(u)&&(e=e||Hk,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(AC(u)&&a!=="_self")return Gk(e||"",a),new Gm(null);const h=window.open(e||"",a,l);M(h,n,"popup-blocked");try{h.focus()}catch{}return new Gm(h)}function Gk(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk="__/auth/handler",Jk="emulator/auth/handler",Yk=encodeURIComponent("fac");async function xh(n,e,t,r,i,s){M(n.config.authDomain,n,"auth-domain-config-required"),M(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:jr,eventId:i};if(e instanceof or){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",KT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(s||{}))o[l]=h}if(e instanceof $s){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await n._getAppCheckToken(),u=c?`#${Yk}=${encodeURIComponent(c)}`:"";return`${Xk(n)}?${Vs(a).slice(1)}${u}`}function Xk({config:n}){return n.emulator?Xd(n,Jk):`https://${n.authDomain}/${Wk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl="webStorageSupport";class Zk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pr,this._completeRedirectFn=$u,this._overrideRedirectResult=hf}async _openPopup(e,t,r,i){var s;pn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await xh(e,t,r,Yo(),i);return zk(e,o,ba())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await xh(e,t,r,Yo(),i);return OR(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(pn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await jk(e),r=new Xw(e);return t.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Hl,{type:Hl},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Hl];o!==void 0&&t(!!o),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xk(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ww()||Zd()||Ks()}}const t_=Zk;class e1{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return kn("unexpected MultiFactorSessionType")}}}class df extends e1{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new df(e)}_finalizeEnroll(e,t,r){return SR(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return $R(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class n_{constructor(){}static assertion(e){return df._fromCredential(e)}}n_.FACTOR_ID="phone";var Wm="@firebase/auth",Jm="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function r1(n){kr(new Ln("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_w(n)},u=new xC(r,i,s,c);return DC(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),kr(new Ln("auth-internal",e=>{const t=Je(e.getProvider("auth").getImmediate());return(r=>new t1(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),On(Wm,Jm,n1(n)),On(Wm,Jm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1=5*60,s1=Hv("authIdTokenMaxAge")||i1;let Ym=null;const o1=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>s1)return;const i=t==null?void 0:t.token;Ym!==i&&(Ym=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Sa(n=ew()){const e=Ou(n,"auth");if(e.isInitialized())return e.getImmediate();const t=PC(n,{popupRedirectResolver:t_,persistence:[As,Vu,Pr]}),r=Hv("authTokenSyncURL");if(r){const s=o1(r);IR(t,s,()=>s(t.currentUser)),AR(t,o=>s(o))}const i=DT("auth");return i&&Tw(t,`http://${i}`),t}r1("Browser");/*!
  * vue-router v4.2.0
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Yi=typeof window<"u";function a1(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Re=Object.assign;function zl(n,e){const t={};for(const r in e){const i=e[r];t[r]=mn(i)?i.map(n):n(i)}return t}const Do=()=>{},mn=Array.isArray,c1=/\/$/,u1=n=>n.replace(c1,"");function Gl(n,e,t="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=n(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=f1(r??e,t),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function l1(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Xm(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function h1(n,e,t){const r=e.matched.length-1,i=t.matched.length-1;return r>-1&&r===i&&Is(e.matched[r],t.matched[i])&&r_(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Is(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function r_(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!d1(n[t],e[t]))return!1;return!0}function d1(n,e){return mn(n)?Zm(n,e):mn(e)?Zm(e,n):n===e}function Zm(n,e){return mn(e)?n.length===e.length&&n.every((t,r)=>t===e[r]):n.length===1&&n[0]===e}function f1(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),r=n.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=t.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var ta;(function(n){n.pop="pop",n.push="push"})(ta||(ta={}));var No;(function(n){n.back="back",n.forward="forward",n.unknown=""})(No||(No={}));function p1(n){if(!n)if(Yi){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),u1(n)}const m1=/^[^#]+#/;function g1(n,e){return n.replace(m1,"#")+e}function y1(n,e){const t=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:e.behavior,left:r.left-t.left-(e.left||0),top:r.top-t.top-(e.top||0)}}const Qu=()=>({left:window.pageXOffset,top:window.pageYOffset});function v1(n){let e;if("el"in n){const t=n.el,r=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;e=y1(i,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function eg(n,e){return(history.state?history.state.position-e:-1)+n}const Ph=new Map;function w1(n,e){Ph.set(n,e)}function _1(n){const e=Ph.get(n);return Ph.delete(n),e}let A1=()=>location.protocol+"//"+location.host;function i_(n,e){const{pathname:t,search:r,hash:i}=e,s=n.indexOf("#");if(s>-1){let a=i.includes(n.slice(s))?n.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),Xm(c,"")}return Xm(t,n)+r+i}function I1(n,e,t,r){let i=[],s=[],o=null;const a=({state:d})=>{const f=i_(n,location),m=t.value,p=e.value;let y=0;if(d){if(t.value=f,e.value=d,o&&o===m){o=null;return}y=p?d.position-p.position:0}else r(f);i.forEach(_=>{_(t.value,m,{delta:y,type:ta.pop,direction:y?y>0?No.forward:No.back:No.unknown})})};function c(){o=t.value}function u(d){i.push(d);const f=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return s.push(f),f}function l(){const{history:d}=window;d.state&&d.replaceState(Re({},d.state,{scroll:Qu()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:c,listen:u,destroy:h}}function tg(n,e,t,r=!1,i=!1){return{back:n,current:e,forward:t,replaced:r,position:window.history.length,scroll:i?Qu():null}}function E1(n){const{history:e,location:t}=window,r={value:i_(n,t)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,u,l){const h=n.indexOf("#"),d=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+c:A1()+n+c;try{e[l?"replaceState":"pushState"](u,"",d),i.value=u}catch(f){console.error(f),t[l?"replace":"assign"](d)}}function o(c,u){const l=Re({},e.state,tg(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});s(c,l,!0),r.value=c}function a(c,u){const l=Re({},i.value,e.state,{forward:c,scroll:Qu()});s(l.current,l,!0);const h=Re({},tg(r.value,c,null),{position:l.position+1},u);s(c,h,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function b1(n){n=p1(n);const e=E1(n),t=I1(n,e.state,e.location,e.replace);function r(s,o=!0){o||t.pauseListeners(),history.go(s)}const i=Re({location:"",base:n,go:r,createHref:g1.bind(null,n)},e,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function T1(n){return typeof n=="string"||n&&typeof n=="object"}function s_(n){return typeof n=="string"||typeof n=="symbol"}const dr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},o_=Symbol("");var ng;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(ng||(ng={}));function Es(n,e){return Re(new Error,{type:n,[o_]:!0},e)}function Kn(n,e){return n instanceof Error&&o_ in n&&(e==null||!!(n.type&e))}const rg="[^/]+?",S1={sensitive:!1,strict:!1,start:!0,end:!0},C1=/[.+*?^${}()[\]/\\]/g;function R1(n,e){const t=Re({},S1,e),r=[];let i=t.start?"^":"";const s=[];for(const u of n){const l=u.length?[]:[90];t.strict&&!u.length&&(i+="/");for(let h=0;h<u.length;h++){const d=u[h];let f=40+(t.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(C1,"\\$&"),f+=40;else if(d.type===1){const{value:m,repeatable:p,optional:y,regexp:_}=d;s.push({name:m,repeatable:p,optional:y});const T=_||rg;if(T!==rg){f+=10;try{new RegExp(`(${T})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${m}" (${T}): `+P.message)}}let U=p?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;h||(U=y&&u.length<2?`(?:/${U})`:"/"+U),y&&(U+="?"),i+=U,f+=20,y&&(f+=-8),p&&(f+=-20),T===".*"&&(f+=-50)}l.push(f)}r.push(l)}if(t.strict&&t.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}t.strict||(i+="/?"),t.end?i+="$":t.strict&&(i+="(?:/|$)");const o=new RegExp(i,t.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const f=l[d]||"",m=s[d-1];h[m.name]=f&&m.repeatable?f.split("/"):f}return h}function c(u){let l="",h=!1;for(const d of n){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const f of d)if(f.type===0)l+=f.value;else if(f.type===1){const{value:m,repeatable:p,optional:y}=f,_=m in u?u[m]:"";if(mn(_)&&!p)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const T=mn(_)?_.join("/"):_;if(!T)if(y)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);l+=T}}return l||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function k1(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=e[t]-n[t];if(r)return r;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function x1(n,e){let t=0;const r=n.score,i=e.score;for(;t<r.length&&t<i.length;){const s=k1(r[t],i[t]);if(s)return s;t++}if(Math.abs(i.length-r.length)===1){if(ig(r))return 1;if(ig(i))return-1}return i.length-r.length}function ig(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const P1={type:0,value:""},D1=/[a-zA-Z0-9_]/;function N1(n){if(!n)return[[]];if(n==="/")return[[P1]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(f){throw new Error(`ERR (${t})/"${u}": ${f}`)}let t=0,r=t;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,u="",l="";function h(){u&&(t===0?s.push({type:0,value:u}):t===1||t===2||t===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),t=1):d();break;case 4:d(),t=r;break;case 1:c==="("?t=2:D1.test(c)?d():(h(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:t=3:l+=c;break;case 3:h(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function O1(n,e,t){const r=R1(N1(n.path),t),i=Re(r,{record:n,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function F1(n,e){const t=[],r=new Map;e=ag({strict:!1,end:!0,sensitive:!1},e);function i(l){return r.get(l)}function s(l,h,d){const f=!d,m=U1(l);m.aliasOf=d&&d.record;const p=ag(e,l),y=[m];if("alias"in l){const U=typeof l.alias=="string"?[l.alias]:l.alias;for(const P of U)y.push(Re({},m,{components:d?d.record.components:m.components,path:P,aliasOf:d?d.record:m}))}let _,T;for(const U of y){const{path:P}=U;if(h&&P[0]!=="/"){const he=h.record.path,x=he[he.length-1]==="/"?"":"/";U.path=h.record.path+(P&&x+P)}if(_=O1(U,h,p),d?d.alias.push(_):(T=T||_,T!==_&&T.alias.push(_),f&&l.name&&!og(_)&&o(l.name)),m.children){const he=m.children;for(let x=0;x<he.length;x++)s(he[x],_,d&&d.children[x])}d=d||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&c(_)}return T?()=>{o(T)}:Do}function o(l){if(s_(l)){const h=r.get(l);h&&(r.delete(l),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(l);h>-1&&(t.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return t}function c(l){let h=0;for(;h<t.length&&x1(l,t[h])>=0&&(l.record.path!==t[h].record.path||!a_(l,t[h]));)h++;t.splice(h,0,l),l.record.name&&!og(l)&&r.set(l.record.name,l)}function u(l,h){let d,f={},m,p;if("name"in l&&l.name){if(d=r.get(l.name),!d)throw Es(1,{location:l});p=d.record.name,f=Re(sg(h.params,d.keys.filter(T=>!T.optional).map(T=>T.name)),l.params&&sg(l.params,d.keys.map(T=>T.name))),m=d.stringify(f)}else if("path"in l)m=l.path,d=t.find(T=>T.re.test(m)),d&&(f=d.parse(m),p=d.record.name);else{if(d=h.name?r.get(h.name):t.find(T=>T.re.test(h.path)),!d)throw Es(1,{location:l,currentLocation:h});p=d.record.name,f=Re({},h.params,l.params),m=d.stringify(f)}const y=[];let _=d;for(;_;)y.unshift(_.record),_=_.parent;return{name:p,path:m,params:f,matched:y,meta:L1(y)}}return n.forEach(l=>s(l)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function sg(n,e){const t={};for(const r of e)r in n&&(t[r]=n[r]);return t}function U1(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:M1(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function M1(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const r in n.components)e[r]=typeof t=="boolean"?t:t[r];return e}function og(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function L1(n){return n.reduce((e,t)=>Re(e,t.meta),{})}function ag(n,e){const t={};for(const r in n)t[r]=r in e?e[r]:n[r];return t}function a_(n,e){return e.children.some(t=>t===n||a_(n,t))}const c_=/#/g,B1=/&/g,V1=/\//g,j1=/=/g,K1=/\?/g,u_=/\+/g,q1=/%5B/g,$1=/%5D/g,l_=/%5E/g,Q1=/%60/g,h_=/%7B/g,H1=/%7C/g,d_=/%7D/g,z1=/%20/g;function ff(n){return encodeURI(""+n).replace(H1,"|").replace(q1,"[").replace($1,"]")}function G1(n){return ff(n).replace(h_,"{").replace(d_,"}").replace(l_,"^")}function Dh(n){return ff(n).replace(u_,"%2B").replace(z1,"+").replace(c_,"%23").replace(B1,"%26").replace(Q1,"`").replace(h_,"{").replace(d_,"}").replace(l_,"^")}function W1(n){return Dh(n).replace(j1,"%3D")}function J1(n){return ff(n).replace(c_,"%23").replace(K1,"%3F")}function Y1(n){return n==null?"":J1(n).replace(V1,"%2F")}function Xc(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function X1(n){const e={};if(n===""||n==="?")return e;const r=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(u_," "),o=s.indexOf("="),a=Xc(o<0?s:s.slice(0,o)),c=o<0?null:Xc(s.slice(o+1));if(a in e){let u=e[a];mn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function cg(n){let e="";for(let t in n){const r=n[t];if(t=W1(t),r==null){r!==void 0&&(e+=(e.length?"&":"")+t);continue}(mn(r)?r.map(s=>s&&Dh(s)):[r&&Dh(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function Z1(n){const e={};for(const t in n){const r=n[t];r!==void 0&&(e[t]=mn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const ex=Symbol(""),ug=Symbol(""),Hu=Symbol(""),f_=Symbol(""),Nh=Symbol("");function ao(){let n=[];function e(r){return n.push(r),()=>{const i=n.indexOf(r);i>-1&&n.splice(i,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function yr(n,e,t,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Es(4,{from:t,to:e})):h instanceof Error?a(h):T1(h)?a(Es(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},u=n.call(r&&r.instances[i],e,t,c);let l=Promise.resolve(u);n.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Wl(n,e,t,r){const i=[];for(const s of n)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(tx(a)){const u=(a.__vccOpts||a)[e];u&&i.push(yr(u,t,r,s,o))}else{let c=a();i.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const l=a1(u)?u.default:u;s.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&yr(d,t,r,s,o)()}))}}return i}function tx(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function lg(n){const e=Nn(Hu),t=Nn(f_),r=nn(()=>e.resolve(os(n.to))),i=nn(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],h=t.matched;if(!l||!h.length)return-1;const d=h.findIndex(Is.bind(null,l));if(d>-1)return d;const f=hg(c[u-2]);return u>1&&hg(l)===f&&h[h.length-1].path!==f?h.findIndex(Is.bind(null,c[u-2])):d}),s=nn(()=>i.value>-1&&sx(t.params,r.value.params)),o=nn(()=>i.value>-1&&i.value===t.matched.length-1&&r_(t.params,r.value.params));function a(c={}){return ix(c)?e[os(n.replace)?"replace":"push"](os(n.to)).catch(Do):Promise.resolve()}return{route:r,href:nn(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const nx=Iv({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:lg,setup(n,{slots:e}){const t=_a(lg(n)),{options:r}=Nn(Hu),i=nn(()=>({[dg(n.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[dg(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:jv("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},s)}}}),rx=nx;function ix(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function sx(n,e){for(const t in e){const r=e[t],i=n[t];if(typeof r=="string"){if(r!==i)return!1}else if(!mn(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function hg(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const dg=(n,e,t)=>n??e??t,ox=Iv({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const r=Nn(Nh),i=nn(()=>n.route||r.value),s=Nn(ug,0),o=nn(()=>{let u=os(s);const{matched:l}=i.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=nn(()=>i.value.matched[o.value]);Ac(ug,nn(()=>o.value+1)),Ac(ex,a),Ac(Nh,i);const c=Er();return wc(()=>[c.value,a.value,n.name],([u,l,h],[d,f,m])=>{l&&(l.instances[h]=u,f&&f!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),u&&l&&(!f||!Is(l,f)||!d)&&(l.enterCallbacks[h]||[]).forEach(p=>p(u))},{flush:"post"}),()=>{const u=i.value,l=n.name,h=a.value,d=h&&h.components[l];if(!d)return fg(t.default,{Component:d,route:u});const f=h.props[l],m=f?f===!0?u.params:typeof f=="function"?f(u):f:null,y=jv(d,Re({},m,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return fg(t.default,{Component:y,route:u})||y}}});function fg(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const ax=ox;function cx(n){const e=F1(n.routes,n),t=n.parseQuery||X1,r=n.stringifyQuery||cg,i=n.history,s=ao(),o=ao(),a=ao(),c=KE(dr);let u=dr;Yi&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=zl.bind(null,C=>""+C),h=zl.bind(null,Y1),d=zl.bind(null,Xc);function f(C,H){let B,W;return s_(C)?(B=e.getRecordMatcher(C),W=H):W=C,e.addRoute(W,B)}function m(C){const H=e.getRecordMatcher(C);H&&e.removeRoute(H)}function p(){return e.getRoutes().map(C=>C.record)}function y(C){return!!e.getRecordMatcher(C)}function _(C,H){if(H=Re({},H||c.value),typeof C=="string"){const A=Gl(t,C,H.path),S=e.resolve({path:A.path},H),R=i.createHref(A.fullPath);return Re(A,S,{params:d(S.params),hash:Xc(A.hash),redirectedFrom:void 0,href:R})}let B;if("path"in C)B=Re({},C,{path:Gl(t,C.path,H.path).path});else{const A=Re({},C.params);for(const S in A)A[S]==null&&delete A[S];B=Re({},C,{params:h(A)}),H.params=h(H.params)}const W=e.resolve(B,H),se=C.hash||"";W.params=l(d(W.params));const g=l1(r,Re({},C,{hash:G1(se),path:W.path})),v=i.createHref(g);return Re({fullPath:g,hash:se,query:r===cg?Z1(C.query):C.query||{}},W,{redirectedFrom:void 0,href:v})}function T(C){return typeof C=="string"?Gl(t,C,c.value.path):Re({},C)}function U(C,H){if(u!==C)return Es(8,{from:H,to:C})}function P(C){return Ee(C)}function he(C){return P(Re(T(C),{replace:!0}))}function x(C){const H=C.matched[C.matched.length-1];if(H&&H.redirect){const{redirect:B}=H;let W=typeof B=="function"?B(C):B;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=T(W):{path:W},W.params={}),Re({query:C.query,hash:C.hash,params:"path"in W?{}:C.params},W)}}function Ee(C,H){const B=u=_(C),W=c.value,se=C.state,g=C.force,v=C.replace===!0,A=x(B);if(A)return Ee(Re(T(A),{state:typeof A=="object"?Re({},se,A.state):se,force:g,replace:v}),H||B);const S=B;S.redirectedFrom=H;let R;return!g&&h1(r,W,B)&&(R=Es(16,{to:S,from:W}),st(W,W,!0,!1)),(R?Promise.resolve(R):Q(S,W)).catch(O=>Kn(O)?Kn(O,2)?O:Dt(O):ie(O,S,W)).then(O=>{if(O){if(Kn(O,2))return Ee(Re({replace:v},T(O.to),{state:typeof O.to=="object"?Re({},se,O.to.state):se,force:g}),H||S)}else O=D(S,W,!0,v,se);return w(S,W,O),O})}function oe(C,H){const B=U(C,H);return B?Promise.reject(B):Promise.resolve()}function Et(C){const H=en.values().next().value;return H&&typeof H.runWithContext=="function"?H.runWithContext(C):C()}function Q(C,H){let B;const[W,se,g]=ux(C,H);B=Wl(W.reverse(),"beforeRouteLeave",C,H);for(const A of W)A.leaveGuards.forEach(S=>{B.push(yr(S,C,H))});const v=oe.bind(null,C,H);return B.push(v),De(B).then(()=>{B=[];for(const A of s.list())B.push(yr(A,C,H));return B.push(v),De(B)}).then(()=>{B=Wl(se,"beforeRouteUpdate",C,H);for(const A of se)A.updateGuards.forEach(S=>{B.push(yr(S,C,H))});return B.push(v),De(B)}).then(()=>{B=[];for(const A of C.matched)if(A.beforeEnter&&!H.matched.includes(A))if(mn(A.beforeEnter))for(const S of A.beforeEnter)B.push(yr(S,C,H));else B.push(yr(A.beforeEnter,C,H));return B.push(v),De(B)}).then(()=>(C.matched.forEach(A=>A.enterCallbacks={}),B=Wl(g,"beforeRouteEnter",C,H),B.push(v),De(B))).then(()=>{B=[];for(const A of o.list())B.push(yr(A,C,H));return B.push(v),De(B)}).catch(A=>Kn(A,8)?A:Promise.reject(A))}function w(C,H,B){for(const W of a.list())Et(()=>W(C,H,B))}function D(C,H,B,W,se){const g=U(C,H);if(g)return g;const v=H===dr,A=Yi?history.state:{};B&&(W||v?i.replace(C.fullPath,Re({scroll:v&&A&&A.scroll},se)):i.push(C.fullPath,se)),c.value=C,st(C,H,B,v),Dt()}let I;function V(){I||(I=i.listen((C,H,B)=>{if(!bt.listening)return;const W=_(C),se=x(W);if(se){Ee(Re(se,{replace:!0}),W).catch(Do);return}u=W;const g=c.value;Yi&&w1(eg(g.fullPath,B.delta),Qu()),Q(W,g).catch(v=>Kn(v,12)?v:Kn(v,2)?(Ee(v.to,W).then(A=>{Kn(A,20)&&!B.delta&&B.type===ta.pop&&i.go(-1,!1)}).catch(Do),Promise.reject()):(B.delta&&i.go(-B.delta,!1),ie(v,W,g))).then(v=>{v=v||D(W,g,!1),v&&(B.delta&&!Kn(v,8)?i.go(-B.delta,!1):B.type===ta.pop&&Kn(v,20)&&i.go(-1,!1)),w(W,g,v)}).catch(Do)}))}let Z=ao(),J=ao(),de;function ie(C,H,B){Dt(C);const W=J.list();return W.length?W.forEach(se=>se(C,H,B)):console.error(C),Promise.reject(C)}function Vt(){return de&&c.value!==dr?Promise.resolve():new Promise((C,H)=>{Z.add([C,H])})}function Dt(C){return de||(de=!C,V(),Z.list().forEach(([H,B])=>C?B(C):H()),Z.reset()),C}function st(C,H,B,W){const{scrollBehavior:se}=n;if(!Yi||!se)return Promise.resolve();const g=!B&&_1(eg(C.fullPath,0))||(W||!B)&&history.state&&history.state.scroll||null;return pv().then(()=>se(C,H,g)).then(v=>v&&v1(v)).catch(v=>ie(v,C,H))}const Ye=C=>i.go(C);let Zt;const en=new Set,bt={currentRoute:c,listening:!0,addRoute:f,removeRoute:m,hasRoute:y,getRoutes:p,resolve:_,options:n,push:P,replace:he,go:Ye,back:()=>Ye(-1),forward:()=>Ye(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:J.add,isReady:Vt,install(C){const H=this;C.component("RouterLink",rx),C.component("RouterView",ax),C.config.globalProperties.$router=H,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>os(c)}),Yi&&!Zt&&c.value===dr&&(Zt=!0,P(i.location).catch(se=>{}));const B={};for(const se in dr)B[se]=nn(()=>c.value[se]);C.provide(Hu,H),C.provide(f_,_a(B)),C.provide(Nh,c);const W=C.unmount;en.add(C),C.unmount=function(){en.delete(C),en.size<1&&(u=dr,I&&I(),I=null,c.value=dr,Zt=!1,de=!1),W()}}};function De(C){return C.reduce((H,B)=>H.then(()=>Et(B)),Promise.resolve())}return bt}function ux(n,e){const t=[],r=[],i=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(u=>Is(u,a))?r.push(a):t.push(a));const c=n.matched[o];c&&(e.matched.find(u=>Is(u,c))||i.push(c))}return[t,r,i]}function pf(){return Nn(Hu)}const lx={class:"navbar"},hx={class:"navImg"},dx=ce("img",{src:ET},null,-1),fx={class:"navItem"},px=ce("a",{href:"/ticharlez34/#stream"},"Stream",-1),mx=ce("p",{hidden:"",id:"character2"},null,-1),gx={__name:"NavBar",setup(n){const e=pf(),t=Er(!1);let r;Tv(()=>{r=Sa(),Vw(r,s=>{s?(t.value=!0,document.getElementById("login").style.display="none",document.getElementById("character2").innerHTML=s.email):(t.value=!1,document.getElementById("login").style.display="initial")})});const i=()=>{ER(r).then(()=>{e.push("/ticharlez34/")})};return(s,o)=>{const a=Rv("router-link");return Se(),Ce("nav",lx,[ce("div",hx,[tt(a,{to:"/ticharlez34/"},{default:vc(()=>[dx]),_:1})]),ce("div",fx,[px,tt(a,{id:"twitch",to:"/ticharlez34/twitch"},{default:vc(()=>[bh("Personnage")]),_:1}),tt(a,{id:"login",to:"/ticharlez34/login"},{default:vc(()=>[bh("LogIn")]),_:1}),t.value?(Se(),Ce("a",{key:0,href:"#",onClick:i},"Sign out")):Hn("",!0),mx])])}}},yx={class:"wrapper"},vx={__name:"App",setup(n){return(e,t)=>{const r=Rv("router-view");return Se(),Ce(ct,null,[ce("header",null,[ce("div",yx,[tt(gx)])]),tt(r)],64)}}},wx="/ticharlez34/assets/profil-8d564394.png",_x="/ticharlez34/assets/csgologo-e581f2e9.png",Ax="/ticharlez34/assets/rotmg_logo-cb73e52c.png",Ix="/ticharlez34/assets/LoL-20730d7e.png",p_=(n,e)=>{const t=n.__vccOpts||n;for(const[r,i]of e)t[r]=i;return t},Ex={},bx=jd('<div class="container profilContainer"><div class="profilText"><h2>1,2,3 moi c&#39;est Charles. <br> Venez me voir streamer sur Twitch avec ce lien! <br> <a target="_blank" href="https://www.twitch.tv/ticharlez34">https://www.twitch.tv/ticharlez34</a></h2></div><div class="profil"><img src="'+wx+'"></div></div>',1),Tx=ce("div",{class:"iframe mt-8"},[ce("h2",{class:"center"},"Stream"),ce("div",{id:"stream",class:"center"},[ce("iframe",{class:"set",src:"https://player.twitch.tv/?channel=ticharlez34&parent=shaxten.github.io",frameborder:"0",allowfullscreen:"",height:"478",width:"820"},`
            `)])],-1),Sx=jd('<div class="container mt-8 mb-8"><div><h2 class="center">Here some main games I play</h2></div><div id="games" class="games"><div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="'+_x+'" alt="Avatar"></div><div class="flip-card-back color1"><h3>CS GO</h3><p>Most stream game for now. I do mostly short matches. <br>My rank is between gold nova 4 and mg2.</p></div></div></div><div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="'+Ax+'" alt="Avatar"></div><div class="flip-card-back color1"><h3>ROTMG</h3><p>Chill games when i want to take a break from FPS. Been playing for 2 months</p></div></div></div><div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="'+Ix+'" alt="Avatar"></div><div class="flip-card-back color1"><h3>League of Legend</h3><p>When I need to lost all my mental sanity this is the perfect games for that.<br> My current rank is Gold</p></div></div></div></div></div><div style="background-color:#af5191;color:white;font-weight:500;padding:0.5rem;"><p class="center">Tous les droits réservé à Shaxto the potato 2023</p></div>',2);function Cx(n,e){return Se(),Ce(ct,null,[bx,Tx,Sx],64)}const Rx=p_(Ex,[["render",Cx]]),kx={id:"form"},xx={__name:"aboutLayout",setup(n){const e=pf(),t=Er(""),r=Er(""),i=()=>{Uw(Sa(),t.value,r.value).then(s=>{console.log("Successfully registered!"),e.push("/ticharlez34/")}).catch(s=>{console.log(s.code),alert(s.message)})};return(s,o)=>(Se(),Ce("form",{onSubmit:o[2]||(o[2]=vT((...a)=>s.onSubmit&&s.onSubmit(...a),["prevent"]))},[ce("div",kx,[ce("p",null,[Bc(ce("input",{type:"email",placeholder:"email","onUpdate:modelValue":o[0]||(o[0]=a=>t.value=a)},null,512),[[Kc,t.value]])]),ce("p",null,[Bc(ce("input",{type:"password",placeholder:"Password","onUpdate:modelValue":o[1]||(o[1]=a=>r.value=a)},null,512),[[Kc,r.value]])]),ce("button",{type:"submit",onClick:i},"Create account")])],32))}},Px={id:"form"},Dx={key:0},Nx=ce("h3",null,[ce("a",{href:"/ticharlez34/createAccount/"},"Create account")],-1),Ox={__name:"login",setup(n){const e=pf(),t=Er(""),r=Er(""),i=Er(),s=()=>{Mw(Sa(),t.value,r.value).then(o=>{console.log("Successfully sign in!"),e.push("/ticharlez34/")}).catch(o=>{switch(console.log(o.code),o.code){case"auth/invalid-email":i.value="Invalid email";break;case"auth/user-not-found":i.value="No account whit that email was found";break;case"auth/wrong-password":i.value="Incorrect password";break;default:i.value="Email or password was incorrect";break}})};return(o,a)=>(Se(),Ce("div",Px,[ce("p",null,[Bc(ce("input",{type:"email",placeholder:"email","onUpdate:modelValue":a[0]||(a[0]=c=>t.value=c)},null,512),[[Kc,t.value]])]),ce("p",null,[Bc(ce("input",{type:"password",placeholder:"Password","onUpdate:modelValue":a[1]||(a[1]=c=>r.value=c)},null,512),[[Kc,r.value]])]),i.value?(Se(),Ce("p",Dx,Gy(i.value),1)):Hn("",!0),ce("button",{onClick:s},"Submit"),Nx]))}};var Fx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},z,mf=mf||{},le=Fx||self;function Zc(){}function zu(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Ca(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function Ux(n){return Object.prototype.hasOwnProperty.call(n,Jl)&&n[Jl]||(n[Jl]=++Mx)}var Jl="closure_uid_"+(1e9*Math.random()>>>0),Mx=0;function Lx(n,e,t){return n.call.apply(n.bind,arguments)}function Bx(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function xt(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?xt=Lx:xt=Bx,xt.apply(null,arguments)}function ic(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function ft(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function qr(){this.s=this.s,this.o=this.o}var Vx=0;qr.prototype.s=!1;qr.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),Vx!=0)&&Ux(this)};qr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const m_=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function gf(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function pg(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(zu(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function Pt(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Pt.prototype.h=function(){this.defaultPrevented=!0};var jx=function(){if(!le.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{le.addEventListener("test",Zc,e),le.removeEventListener("test",Zc,e)}catch{}return n}();function eu(n){return/^[\s\xa0]*$/.test(n)}var mg=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function Yl(n,e){return n<e?-1:n>e?1:0}function Gu(){var n=le.navigator;return n&&(n=n.userAgent)?n:""}function Rn(n){return Gu().indexOf(n)!=-1}function yf(n){return yf[" "](n),n}yf[" "]=Zc;function g_(n,e,t){return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Kx=Rn("Opera"),bs=Rn("Trident")||Rn("MSIE"),y_=Rn("Edge"),Oh=y_||bs,v_=Rn("Gecko")&&!(Gu().toLowerCase().indexOf("webkit")!=-1&&!Rn("Edge"))&&!(Rn("Trident")||Rn("MSIE"))&&!Rn("Edge"),qx=Gu().toLowerCase().indexOf("webkit")!=-1&&!Rn("Edge");function w_(){var n=le.document;return n?n.documentMode:void 0}var tu;e:{var Xl="",Zl=function(){var n=Gu();if(v_)return/rv:([^\);]+)(\)|;)/.exec(n);if(y_)return/Edge\/([\d\.]+)/.exec(n);if(bs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(qx)return/WebKit\/(\S+)/.exec(n);if(Kx)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Zl&&(Xl=Zl?Zl[1]:""),bs){var eh=w_();if(eh!=null&&eh>parseFloat(Xl)){tu=String(eh);break e}}tu=Xl}var $x={};function Qx(){return g_($x,9,function(){let n=0;const e=mg(String(tu)).split("."),t=mg("9").split("."),r=Math.max(e.length,t.length);for(let o=0;n==0&&o<r;o++){var i=e[o]||"",s=t[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;n=Yl(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Yl(i[2].length==0,s[2].length==0)||Yl(i[2],s[2]),i=i[3],s=s[3]}while(n==0)}return 0<=n})}var Fh;if(le.document&&bs){var gg=w_();Fh=gg||parseInt(tu,10)||void 0}else Fh=void 0;var Hx=Fh;function na(n,e){if(Pt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(v_){e:{try{yf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:zx[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&na.$.h.call(this)}}ft(na,Pt);var zx={2:"touch",3:"pen",4:"mouse"};na.prototype.h=function(){na.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Ra="closure_listenable_"+(1e6*Math.random()|0),Gx=0;function Wx(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=i,this.key=++Gx,this.fa=this.ia=!1}function Wu(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function vf(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function __(n){const e={};for(const t in n)e[t]=n[t];return e}const yg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A_(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<yg.length;s++)t=yg[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function Ju(n){this.src=n,this.g={},this.h=0}Ju.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=Mh(n,e,r,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new Wx(e,this.src,s,!!r,i),e.ia=t,n.push(e)),e};function Uh(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=m_(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Wu(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Mh(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==r)return i}return-1}var wf="closure_lm_"+(1e6*Math.random()|0),th={};function I_(n,e,t,r,i){if(r&&r.once)return b_(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)I_(n,e[s],t,r,i);return null}return t=If(t),n&&n[Ra]?n.O(e,t,Ca(r)?!!r.capture:!!r,i):E_(n,e,t,!1,r,i)}function E_(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=Ca(i)?!!i.capture:!!i,a=Af(n);if(a||(n[wf]=a=new Ju(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=Jx(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)jx||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(S_(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function Jx(){function n(t){return e.call(n.src,n.listener,t)}const e=Yx;return n}function b_(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)b_(n,e[s],t,r,i);return null}return t=If(t),n&&n[Ra]?n.P(e,t,Ca(r)?!!r.capture:!!r,i):E_(n,e,t,!0,r,i)}function T_(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)T_(n,e[s],t,r,i);else r=Ca(r)?!!r.capture:!!r,t=If(t),n&&n[Ra]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=Mh(s,t,r,i),-1<t&&(Wu(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=Af(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Mh(e,t,r,i)),(t=-1<n?e[n]:null)&&_f(t))}function _f(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[Ra])Uh(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(S_(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=Af(e))?(Uh(t,n),t.h==0&&(t.src=null,e[wf]=null)):Wu(n)}}}function S_(n){return n in th?th[n]:th[n]="on"+n}function Yx(n,e){if(n.fa)n=!0;else{e=new na(e,this);var t=n.listener,r=n.la||n.src;n.ia&&_f(n),n=t.call(r,e)}return n}function Af(n){return n=n[wf],n instanceof Ju?n:null}var nh="__closure_events_fn_"+(1e9*Math.random()>>>0);function If(n){return typeof n=="function"?n:(n[nh]||(n[nh]=function(e){return n.handleEvent(e)}),n[nh])}function dt(){qr.call(this),this.i=new Ju(this),this.S=this,this.J=null}ft(dt,qr);dt.prototype[Ra]=!0;dt.prototype.removeEventListener=function(n,e,t,r){T_(this,n,e,t,r)};function At(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new Pt(e,n);else if(e instanceof Pt)e.target=e.target||n;else{var i=e;e=new Pt(r,n),A_(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=sc(o,r,!0,e)&&i}if(o=e.g=n,i=sc(o,r,!0,e)&&i,i=sc(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=sc(o,r,!1,e)&&i}dt.prototype.N=function(){if(dt.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)Wu(t[r]);delete n.g[e],n.h--}}this.J=null};dt.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};dt.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function sc(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&Uh(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ef=le.JSON.stringify;function Xx(){var n=k_;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class Zx{constructor(){this.h=this.g=null}add(e,t){const r=C_.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var C_=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new eP,n=>n.reset());class eP{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function tP(n){le.setTimeout(()=>{throw n},0)}function R_(n,e){Lh||nP(),Bh||(Lh(),Bh=!0),k_.add(n,e)}var Lh;function nP(){var n=le.Promise.resolve(void 0);Lh=function(){n.then(rP)}}var Bh=!1,k_=new Zx;function rP(){for(var n;n=Xx();){try{n.h.call(n.g)}catch(t){tP(t)}var e=C_;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Bh=!1}function Yu(n,e){dt.call(this),this.h=n||1,this.g=e||le,this.j=xt(this.qb,this),this.l=Date.now()}ft(Yu,dt);z=Yu.prototype;z.ga=!1;z.T=null;z.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),At(this,"tick"),this.ga&&(bf(this),this.start()))}};z.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function bf(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}z.N=function(){Yu.$.N.call(this),bf(this),delete this.g};function Tf(n,e,t){if(typeof n=="function")t&&(n=xt(n,t));else if(n&&typeof n.handleEvent=="function")n=xt(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:le.setTimeout(n,e||0)}function x_(n){n.g=Tf(()=>{n.g=null,n.i&&(n.i=!1,x_(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class iP extends qr{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:x_(this)}N(){super.N(),this.g&&(le.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ra(n){qr.call(this),this.h=n,this.g={}}ft(ra,qr);var vg=[];function P_(n,e,t,r){Array.isArray(t)||(t&&(vg[0]=t.toString()),t=vg);for(var i=0;i<t.length;i++){var s=I_(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function D_(n){vf(n.g,function(e,t){this.g.hasOwnProperty(t)&&_f(e)},n),n.g={}}ra.prototype.N=function(){ra.$.N.call(this),D_(this)};ra.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Xu(){this.g=!0}Xu.prototype.Ea=function(){this.g=!1};function sP(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function oP(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function ns(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+cP(n,t)+(r?" "+r:"")})}function aP(n,e){n.info(function(){return"TIMEOUT: "+e})}Xu.prototype.info=function(){};function cP(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ef(t)}catch{return e}}var Li={},wg=null;function Zu(){return wg=wg||new dt}Li.Ta="serverreachability";function N_(n){Pt.call(this,Li.Ta,n)}ft(N_,Pt);function ia(n){const e=Zu();At(e,new N_(e))}Li.STAT_EVENT="statevent";function O_(n,e){Pt.call(this,Li.STAT_EVENT,n),this.stat=e}ft(O_,Pt);function Mt(n){const e=Zu();At(e,new O_(e,n))}Li.Ua="timingevent";function F_(n,e){Pt.call(this,Li.Ua,n),this.size=e}ft(F_,Pt);function ka(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return le.setTimeout(function(){n()},e)}var el={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},U_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Sf(){}Sf.prototype.h=null;function _g(n){return n.h||(n.h=n.i())}function M_(){}var xa={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Cf(){Pt.call(this,"d")}ft(Cf,Pt);function Rf(){Pt.call(this,"c")}ft(Rf,Pt);var Vh;function tl(){}ft(tl,Sf);tl.prototype.g=function(){return new XMLHttpRequest};tl.prototype.i=function(){return{}};Vh=new tl;function Pa(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new ra(this),this.P=uP,n=Oh?125:void 0,this.V=new Yu(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new L_}function L_(){this.i=null,this.g="",this.h=!1}var uP=45e3,jh={},nu={};z=Pa.prototype;z.setTimeout=function(n){this.P=n};function Kh(n,e,t){n.L=1,n.v=rl(nr(e)),n.s=t,n.S=!0,B_(n,null)}function B_(n,e){n.G=Date.now(),Da(n),n.A=nr(n.v);var t=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),z_(t.i,"t",r),n.C=0,t=n.l.I,n.h=new L_,n.g=pA(n.l,t?e:null,!n.s),0<n.O&&(n.M=new iP(xt(n.Pa,n,n.g),n.O)),P_(n.U,n.g,"readystatechange",n.nb),e=n.I?__(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),ia(),sP(n.j,n.u,n.A,n.m,n.W,n.s)}z.nb=function(n){n=n.target;const e=this.M;e&&Gn(n)==3?e.l():this.Pa(n)};z.Pa=function(n){try{if(n==this.g)e:{const l=Gn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||Oh||this.g&&(this.h.h||this.g.ja()||bg(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?ia(3):ia(2)),nl(this);var t=this.g.da();this.aa=t;t:if(V_(this)){var r=bg(this.g);n="";var i=r.length,s=Gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){di(this),Oo(this);var o="";break t}this.h.i=new le.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,oP(this.j,this.u,this.A,this.m,this.W,l,t),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!eu(a)){var u=a;break t}}u=null}if(t=u)ns(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qh(this,t);else{this.i=!1,this.o=3,Mt(12),di(this),Oo(this);break e}}this.S?(j_(this,l,o),Oh&&this.i&&l==3&&(P_(this.U,this.V,"tick",this.mb),this.V.start())):(ns(this.j,this.m,o,null),qh(this,o)),l==4&&di(this),this.i&&!this.J&&(l==4?lA(this.l,this):(this.i=!1,Da(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Mt(12)):(this.o=0,Mt(13)),di(this),Oo(this)}}}catch{}finally{}};function V_(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function j_(n,e,t){let r=!0,i;for(;!n.J&&n.C<t.length;)if(i=lP(n,t),i==nu){e==4&&(n.o=4,Mt(14),r=!1),ns(n.j,n.m,null,"[Incomplete Response]");break}else if(i==jh){n.o=4,Mt(15),ns(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else ns(n.j,n.m,i,null),qh(n,i);V_(n)&&i!=nu&&i!=jh&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Mt(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ca&&(n.ca=!0,e=n.l,e.g==n&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),Ff(e),e.L=!0,Mt(11))):(ns(n.j,n.m,t,"[Invalid Chunked Response]"),di(n),Oo(n))}z.mb=function(){if(this.g){var n=Gn(this.g),e=this.g.ja();this.C<e.length&&(nl(this),j_(this,n,e),this.i&&n!=4&&Da(this))}};function lP(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?nu:(t=Number(e.substring(t,r)),isNaN(t)?jh:(r+=1,r+t>e.length?nu:(e=e.substr(r,t),n.C=r+t,e)))}z.cancel=function(){this.J=!0,di(this)};function Da(n){n.Y=Date.now()+n.P,K_(n,n.P)}function K_(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=ka(xt(n.lb,n),e)}function nl(n){n.B&&(le.clearTimeout(n.B),n.B=null)}z.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(aP(this.j,this.A),this.L!=2&&(ia(),Mt(17)),di(this),this.o=2,Oo(this)):K_(this,this.Y-n)};function Oo(n){n.l.H==0||n.J||lA(n.l,n)}function di(n){nl(n);var e=n.M;e&&typeof e.ra=="function"&&e.ra(),n.M=null,bf(n.V),D_(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.ra())}function qh(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||$h(t.h,n))){if(!n.K&&$h(t.h,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)su(t),ol(t);else break e;Of(t),Mt(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.M&&t.A==0&&!t.v&&(t.v=ka(xt(t.ib,t),6e3));if(1>=J_(t.h)&&t.na){try{t.na()}catch{}t.na=void 0}}else fi(t,11)}else if((n.K||t.g==n)&&su(t),!eu(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(t.V=u[0],u=u[1],t.H==2)if(u[0]=="c"){t.J=u[1],t.oa=u[2];const l=u[3];l!=null&&(t.qa=l,t.j.info("VER="+t.qa));const h=u[4];h!=null&&(t.Ga=h,t.j.info("SVER="+t.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.K=r,t.j.info("backChannelRequestTimeoutMs_="+r)),r=t;const f=n.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.h;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(kf(s,s.h),s.h=null))}if(r.F){const p=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;p&&(r.Da=p,Le(r.G,r.F,p))}}t.H=3,t.l&&t.l.Ba(),t.ca&&(t.S=Date.now()-n.G,t.j.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=fA(r,r.I?r.oa:null,r.Y),o.K){Y_(r.h,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(nl(a),Da(a)),r.g=o}else cA(r);0<t.i.length&&al(t)}else u[0]!="stop"&&u[0]!="close"||fi(t,7);else t.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?fi(t,7):Nf(t):u[0]!="noop"&&t.l&&t.l.Aa(u),t.A=0)}}ia(4)}catch{}}function hP(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(zu(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function dP(n){if(n.sa&&typeof n.sa=="function")return n.sa();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(zu(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function q_(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(zu(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=dP(n),r=hP(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var $_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fP(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ai(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Ai){this.h=e!==void 0?e:n.h,ru(this,n.j),this.s=n.s,this.g=n.g,iu(this,n.m),this.l=n.l,e=n.i;var t=new sa;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Ag(this,t),this.o=n.o}else n&&(t=String(n).match($_))?(this.h=!!e,ru(this,t[1]||"",!0),this.s=Eo(t[2]||""),this.g=Eo(t[3]||"",!0),iu(this,t[4]),this.l=Eo(t[5]||"",!0),Ag(this,t[6]||"",!0),this.o=Eo(t[7]||"")):(this.h=!!e,this.i=new sa(null,this.h))}Ai.prototype.toString=function(){var n=[],e=this.j;e&&n.push(bo(e,Ig,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(bo(e,Ig,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(bo(t,t.charAt(0)=="/"?gP:mP,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",bo(t,vP)),n.join("")};function nr(n){return new Ai(n)}function ru(n,e,t){n.j=t?Eo(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function iu(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Ag(n,e,t){e instanceof sa?(n.i=e,wP(n.i,n.h)):(t||(e=bo(e,yP)),n.i=new sa(e,n.h))}function Le(n,e,t){n.i.set(e,t)}function rl(n){return Le(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Eo(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function bo(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,pP),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function pP(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Ig=/[#\/\?@]/g,mP=/[#\?:]/g,gP=/[#\?]/g,yP=/[#\?@]/g,vP=/#/g;function sa(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function $r(n){n.g||(n.g=new Map,n.h=0,n.i&&fP(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}z=sa.prototype;z.add=function(n,e){$r(this),this.i=null,n=Qs(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Q_(n,e){$r(n),e=Qs(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function H_(n,e){return $r(n),e=Qs(n,e),n.g.has(e)}z.forEach=function(n,e){$r(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};z.sa=function(){$r(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};z.Z=function(n){$r(this);let e=[];if(typeof n=="string")H_(this,n)&&(e=e.concat(this.g.get(Qs(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};z.set=function(n,e){return $r(this),this.i=null,n=Qs(this,n),H_(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};z.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function z_(n,e,t){Q_(n,e),0<t.length&&(n.i=null,n.g.set(Qs(n,e),gf(t)),n.h+=t.length)}z.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Qs(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function wP(n,e){e&&!n.j&&($r(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(Q_(this,r),z_(this,i,t))},n)),n.j=e}var _P=class{constructor(n,e){this.h=n,this.g=e}};function G_(n){this.l=n||AP,le.PerformanceNavigationTiming?(n=le.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(le.g&&le.g.Ka&&le.g.Ka()&&le.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var AP=10;function W_(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function J_(n){return n.h?1:n.g?n.g.size:0}function $h(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function kf(n,e){n.g?n.g.add(e):n.h=e}function Y_(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}G_.prototype.cancel=function(){if(this.i=X_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function X_(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return gf(n.i)}function xf(){}xf.prototype.stringify=function(n){return le.JSON.stringify(n,void 0)};xf.prototype.parse=function(n){return le.JSON.parse(n,void 0)};function IP(){this.g=new xf}function EP(n,e,t){const r=t||"";try{q_(n,function(i,s){let o=i;Ca(i)&&(o=Ef(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function bP(n,e){const t=new Xu;if(le.Image){const r=new Image;r.onload=ic(oc,t,r,"TestLoadImage: loaded",!0,e),r.onerror=ic(oc,t,r,"TestLoadImage: error",!1,e),r.onabort=ic(oc,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=ic(oc,t,r,"TestLoadImage: timeout",!1,e),le.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function oc(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Na(n){this.l=n.fc||null,this.j=n.ob||!1}ft(Na,Sf);Na.prototype.g=function(){return new il(this.l,this.j)};Na.prototype.i=function(n){return function(){return n}}({});function il(n,e){dt.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=Pf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ft(il,dt);var Pf=0;z=il.prototype;z.open=function(n,e){if(this.readyState!=Pf)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,oa(this)};z.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||le).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};z.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Oa(this)),this.readyState=Pf};z.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,oa(this)),this.g&&(this.readyState=3,oa(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof le.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Z_(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Z_(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}z.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Oa(this):oa(this),this.readyState==3&&Z_(this)}};z.Za=function(n){this.g&&(this.response=this.responseText=n,Oa(this))};z.Ya=function(n){this.g&&(this.response=n,Oa(this))};z.ka=function(){this.g&&Oa(this)};function Oa(n){n.readyState=4,n.l=null,n.j=null,n.A=null,oa(n)}z.setRequestHeader=function(n,e){this.v.append(n,e)};z.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};z.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function oa(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(il.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var TP=le.JSON.parse;function Qe(n){dt.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=eA,this.L=this.M=!1}ft(Qe,dt);var eA="",SP=/^https?$/i,CP=["POST","PUT"];z=Qe.prototype;z.Oa=function(n){this.M=n};z.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Vh.g(),this.C=this.u?_g(this.u):_g(Vh),this.g.onreadystatechange=xt(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){Eg(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=le.FormData&&n instanceof le.FormData,!(0<=m_(CP,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{rA(this),0<this.B&&((this.L=RP(this.g))?(this.g.timeout=this.B,this.g.ontimeout=xt(this.ua,this)):this.A=Tf(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Eg(this,s)}};function RP(n){return bs&&Qx()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}z.ua=function(){typeof mf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,At(this,"timeout"),this.abort(8))};function Eg(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,tA(n),sl(n)}function tA(n){n.F||(n.F=!0,At(n,"complete"),At(n,"error"))}z.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,At(this,"complete"),At(this,"abort"),sl(this))};z.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),sl(this,!0)),Qe.$.N.call(this)};z.La=function(){this.s||(this.G||this.v||this.l?nA(this):this.kb())};z.kb=function(){nA(this)};function nA(n){if(n.h&&typeof mf<"u"&&(!n.C[1]||Gn(n)!=4||n.da()!=2)){if(n.v&&Gn(n)==4)Tf(n.La,0,n);else if(At(n,"readystatechange"),Gn(n)==4){n.h=!1;try{const a=n.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=a===0){var i=String(n.I).match($_)[1]||null;if(!i&&le.self&&le.self.location){var s=le.self.location.protocol;i=s.substr(0,s.length-1)}r=!SP.test(i?i.toLowerCase():"")}t=r}if(t)At(n,"complete"),At(n,"success");else{n.m=6;try{var o=2<Gn(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.da()+"]",tA(n)}}finally{sl(n)}}}}function sl(n,e){if(n.g){rA(n);const t=n.g,r=n.C[0]?Zc:null;n.g=null,n.C=null,e||At(n,"ready");try{t.onreadystatechange=r}catch{}}}function rA(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(le.clearTimeout(n.A),n.A=null)}function Gn(n){return n.g?n.g.readyState:0}z.da=function(){try{return 2<Gn(this)?this.g.status:-1}catch{return-1}};z.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};z.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),TP(e)}};function bg(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case eA:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}z.Ia=function(){return this.m};z.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function iA(n){let e="";return vf(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function Df(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=iA(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):Le(n,e,t))}function co(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function sA(n){this.Ga=0,this.i=[],this.j=new Xu,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=co("failFast",!1,n),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=co("baseRetryDelayMs",5e3,n),this.hb=co("retryDelaySeedMs",1e4,n),this.eb=co("forwardChannelMaxRetries",2,n),this.xa=co("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.K=void 0,this.I=n&&n.supportsCrossDomainXhr||!1,this.J="",this.h=new G_(n&&n.concurrentRequestLimit),this.Ja=new IP,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.j.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}z=sA.prototype;z.qa=8;z.H=1;function Nf(n){if(oA(n),n.H==3){var e=n.W++,t=nr(n.G);Le(t,"SID",n.J),Le(t,"RID",e),Le(t,"TYPE","terminate"),Fa(n,t),e=new Pa(n,n.j,e,void 0),e.L=2,e.v=rl(nr(t)),t=!1,le.navigator&&le.navigator.sendBeacon&&(t=le.navigator.sendBeacon(e.v.toString(),"")),!t&&le.Image&&(new Image().src=e.v,t=!0),t||(e.g=pA(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Da(e)}dA(n)}function ol(n){n.g&&(Ff(n),n.g.cancel(),n.g=null)}function oA(n){ol(n),n.u&&(le.clearTimeout(n.u),n.u=null),su(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&le.clearTimeout(n.m),n.m=null)}function al(n){W_(n.h)||n.m||(n.m=!0,R_(n.Na,n),n.C=0)}function kP(n,e){return J_(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.F.concat(n.i),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=ka(xt(n.Na,n,e),hA(n,n.C)),n.C++,!0)}z.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Pa(this,this.j,n,void 0);let s=this.s;if(this.U&&(s?(s=__(s),A_(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var r=this.i[t];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=aA(this,i,e),t=nr(this.G),Le(t,"RID",n),Le(t,"CVER",22),this.F&&Le(t,"X-HTTP-Session-Id",this.F),Fa(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(iA(s)))+"&"+e:this.o&&Df(t,this.o,s)),kf(this.h,i),this.bb&&Le(t,"TYPE","init"),this.P?(Le(t,"$req",e),Le(t,"SID","null"),i.ba=!0,Kh(i,t,null)):Kh(i,t,e),this.H=2}}else this.H==3&&(n?Tg(this,n):this.i.length==0||W_(this.h)||Tg(this))};function Tg(n,e){var t;e?t=e.m:t=n.W++;const r=nr(n.G);Le(r,"SID",n.J),Le(r,"RID",t),Le(r,"AID",n.V),Fa(n,r),n.o&&n.s&&Df(r,n.o,n.s),t=new Pa(n,n.j,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.i=e.F.concat(n.i)),e=aA(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),kf(n.h,t),Kh(t,r,e)}function Fa(n,e){n.ma&&vf(n.ma,function(t,r){Le(e,r,t)}),n.l&&q_({},function(t,r){Le(e,r,t)})}function aA(n,e,t){t=Math.min(n.i.length,t);var r=n.l?xt(n.l.Va,n.l,n):null;e:{var i=n.i;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let u=i[c].h;const l=i[c].g;if(u-=s,0>u)s=Math.max(0,i[c].h-100),a=!1;else try{EP(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.i.splice(0,t),e.F=n,r}function cA(n){n.g||n.u||(n.ba=1,R_(n.Ma,n),n.A=0)}function Of(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=ka(xt(n.Ma,n),hA(n,n.A)),n.A++,!0)}z.Ma=function(){if(this.u=null,uA(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var n=2*this.S;this.j.info("BP detection timer enabled: "+n),this.B=ka(xt(this.jb,this),n)}};z.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Mt(10),ol(this),uA(this))};function Ff(n){n.B!=null&&(le.clearTimeout(n.B),n.B=null)}function uA(n){n.g=new Pa(n,n.j,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=nr(n.wa);Le(e,"RID","rpc"),Le(e,"SID",n.J),Le(e,"CI",n.M?"0":"1"),Le(e,"AID",n.V),Le(e,"TYPE","xmlhttp"),Fa(n,e),n.o&&n.s&&Df(e,n.o,n.s),n.K&&n.g.setTimeout(n.K);var t=n.g;n=n.oa,t.L=1,t.v=rl(nr(e)),t.s=null,t.S=!0,B_(t,n)}z.ib=function(){this.v!=null&&(this.v=null,ol(this),Of(this),Mt(19))};function su(n){n.v!=null&&(le.clearTimeout(n.v),n.v=null)}function lA(n,e){var t=null;if(n.g==e){su(n),Ff(n),n.g=null;var r=2}else if($h(n.h,e))t=e.F,Y_(n.h,e),r=1;else return;if(n.H!=0){if(n.ta=e.aa,e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var i=n.C;r=Zu(),At(r,new F_(r,t)),al(n)}else cA(n);else if(i=e.o,i==3||i==0&&0<n.ta||!(r==1&&kP(n,e)||r==2&&Of(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),i){case 1:fi(n,5);break;case 4:fi(n,10);break;case 3:fi(n,6);break;default:fi(n,2)}}}function hA(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.l||(t*=2),t*e}function fi(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var r=xt(n.pb,n);t||(t=new Ai("//www.google.com/images/cleardot.gif"),le.location&&le.location.protocol=="http"||ru(t,"https"),rl(t)),bP(t.toString(),r)}else Mt(2);n.H=0,n.l&&n.l.za(e),dA(n),oA(n)}z.pb=function(n){n?(this.j.info("Successfully pinged google.com"),Mt(2)):(this.j.info("Failed to ping google.com"),Mt(1))};function dA(n){if(n.H=0,n.pa=[],n.l){const e=X_(n.h);(e.length!=0||n.i.length!=0)&&(pg(n.pa,e),pg(n.pa,n.i),n.h.i.length=0,gf(n.i),n.i.length=0),n.l.ya()}}function fA(n,e,t){var r=t instanceof Ai?nr(t):new Ai(t,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),iu(r,r.m);else{var i=le.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ai(null,void 0);r&&ru(s,r),e&&(s.g=e),i&&iu(s,i),t&&(s.l=t),r=s}return t=n.F,e=n.Da,t&&e&&Le(r,t,e),Le(r,"VER",n.qa),Fa(n,r),r}function pA(n,e,t){if(e&&!n.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new Qe(new Na({ob:!0})):new Qe(n.va),e.Oa(n.I),e}function mA(){}z=mA.prototype;z.Ba=function(){};z.Aa=function(){};z.za=function(){};z.ya=function(){};z.Va=function(){};function ou(){if(bs&&!(10<=Number(Hx)))throw Error("Environmental error: no available transport.")}ou.prototype.g=function(n,e){return new Yt(n,e)};function Yt(n,e){dt.call(this),this.g=new sA(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!eu(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!eu(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Hs(this)}ft(Yt,dt);Yt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var n=this.g,e=this.l,t=this.h||void 0;Mt(0),n.Y=e,n.ma=t||{},n.M=n.aa,n.G=fA(n,null,n.Y),al(n)};Yt.prototype.close=function(){Nf(this.g)};Yt.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Ef(n),n=t);e.i.push(new _P(e.fb++,n)),e.H==3&&al(e)};Yt.prototype.N=function(){this.g.l=null,delete this.j,Nf(this.g),delete this.g,Yt.$.N.call(this)};function gA(n){Cf.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}ft(gA,Cf);function yA(){Rf.call(this),this.status=1}ft(yA,Rf);function Hs(n){this.g=n}ft(Hs,mA);Hs.prototype.Ba=function(){At(this.g,"a")};Hs.prototype.Aa=function(n){At(this.g,new gA(n))};Hs.prototype.za=function(n){At(this.g,new yA)};Hs.prototype.ya=function(){At(this.g,"b")};function xP(){this.blockSize=-1}function gn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ft(gn,xP);gn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function rh(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)r[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var s=n.g[3],o=e+(s^t&(i^s))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(t^i))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^s)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~s))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}gn.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=t;)rh(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){rh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=n[s++],i==this.blockSize){rh(this,r),i=0;break}}this.h=i,this.i+=e};gn.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function xe(n,e){this.h=e;for(var t=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==e||(t[i]=s,r=!1)}this.g=t}var PP={};function Uf(n){return-128<=n&&128>n?g_(PP,n,function(e){return new xe([e|0],0>e?-1:0)}):new xe([n|0],0>n?-1:0)}function xn(n){if(isNaN(n)||!isFinite(n))return ds;if(0>n)return yt(xn(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=Qh;return new xe(e,0)}function vA(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return yt(vA(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=xn(Math.pow(e,8)),r=ds,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),e);8>s?(s=xn(Math.pow(e,s)),r=r.R(s).add(xn(o))):(r=r.R(t),r=r.add(xn(o)))}return r}var Qh=4294967296,ds=Uf(0),Hh=Uf(1),Sg=Uf(16777216);z=xe.prototype;z.ea=function(){if(rn(this))return-yt(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:Qh+r)*e,e*=Qh}return n};z.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Wn(this))return"0";if(rn(this))return"-"+yt(this).toString(n);for(var e=xn(Math.pow(n,6)),t=this,r="";;){var i=cu(t,e).g;t=au(t,i.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,Wn(t))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};z.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Wn(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function rn(n){return n.h==-1}z.X=function(n){return n=au(this,n),rn(n)?-1:Wn(n)?0:1};function yt(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new xe(t,~n.h).add(Hh)}z.abs=function(){return rn(this)?yt(this):this};z.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,t[i]=o<<16|s}return new xe(t,t[t.length-1]&-2147483648?-1:0)};function au(n,e){return n.add(yt(e))}z.R=function(n){if(Wn(this)||Wn(n))return ds;if(rn(this))return rn(n)?yt(this).R(yt(n)):yt(yt(this).R(n));if(rn(n))return yt(this.R(yt(n)));if(0>this.X(Sg)&&0>n.X(Sg))return xn(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;t[2*r+2*i]+=o*c,ac(t,2*r+2*i),t[2*r+2*i+1]+=s*c,ac(t,2*r+2*i+1),t[2*r+2*i+1]+=o*a,ac(t,2*r+2*i+1),t[2*r+2*i+2]+=s*a,ac(t,2*r+2*i+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new xe(t,0)};function ac(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function uo(n,e){this.g=n,this.h=e}function cu(n,e){if(Wn(e))throw Error("division by zero");if(Wn(n))return new uo(ds,ds);if(rn(n))return e=cu(yt(n),e),new uo(yt(e.g),yt(e.h));if(rn(e))return e=cu(n,yt(e)),new uo(yt(e.g),e.h);if(30<n.g.length){if(rn(n)||rn(e))throw Error("slowDivide_ only works with positive integers.");for(var t=Hh,r=e;0>=r.X(n);)t=Cg(t),r=Cg(r);var i=zi(t,1),s=zi(r,1);for(r=zi(r,2),t=zi(t,2);!Wn(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(t),s=o),r=zi(r,1),t=zi(t,1)}return e=au(n,i.R(e)),new uo(i,e)}for(i=ds;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=xn(t),o=s.R(e);rn(o)||0<o.X(n);)t-=r,s=xn(t),o=s.R(e);Wn(s)&&(s=Hh),i=i.add(s),n=au(n,o)}return new uo(i,n)}z.gb=function(n){return cu(this,n).h};z.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new xe(t,this.h&n.h)};z.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new xe(t,this.h|n.h)};z.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new xe(t,this.h^n.h)};function Cg(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new xe(t,n.h)}function zi(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,i=[],s=0;s<r;s++)i[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new xe(i,n.h)}ou.prototype.createWebChannel=ou.prototype.g;Yt.prototype.send=Yt.prototype.u;Yt.prototype.open=Yt.prototype.m;Yt.prototype.close=Yt.prototype.close;el.NO_ERROR=0;el.TIMEOUT=8;el.HTTP_ERROR=6;U_.COMPLETE="complete";M_.EventType=xa;xa.OPEN="a";xa.CLOSE="b";xa.ERROR="c";xa.MESSAGE="d";dt.prototype.listen=dt.prototype.O;Qe.prototype.listenOnce=Qe.prototype.P;Qe.prototype.getLastError=Qe.prototype.Sa;Qe.prototype.getLastErrorCode=Qe.prototype.Ia;Qe.prototype.getStatus=Qe.prototype.da;Qe.prototype.getResponseJson=Qe.prototype.Wa;Qe.prototype.getResponseText=Qe.prototype.ja;Qe.prototype.send=Qe.prototype.ha;Qe.prototype.setWithCredentials=Qe.prototype.Oa;gn.prototype.digest=gn.prototype.l;gn.prototype.reset=gn.prototype.reset;gn.prototype.update=gn.prototype.j;xe.prototype.add=xe.prototype.add;xe.prototype.multiply=xe.prototype.R;xe.prototype.modulo=xe.prototype.gb;xe.prototype.compare=xe.prototype.X;xe.prototype.toNumber=xe.prototype.ea;xe.prototype.toString=xe.prototype.toString;xe.prototype.getBits=xe.prototype.D;xe.fromNumber=xn;xe.fromString=vA;var DP=function(){return new ou},NP=function(){return Zu()},ih=el,OP=U_,FP=Li,Rg={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},UP=Na,cc=M_,MP=Qe,LP=gn,fs=xe;const kg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zs="9.22.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new Nu("@firebase/firestore");function zh(){return Dr.logLevel}function BP(n){Dr.setLogLevel(n)}function N(n,...e){if(Dr.logLevel<=we.DEBUG){const t=e.map(Mf);Dr.debug(`Firestore (${zs}): ${n}`,...t)}}function ze(n,...e){if(Dr.logLevel<=we.ERROR){const t=e.map(Mf);Dr.error(`Firestore (${zs}): ${n}`,...t)}}function yn(n,...e){if(Dr.logLevel<=we.WARN){const t=e.map(Mf);Dr.warn(`Firestore (${zs}): ${n}`,...t)}}function Mf(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(n="Unexpected state"){const e=`FIRESTORE (${zs}) INTERNAL ASSERTION FAILED: `+n;throw ze(e),new Error(e)}function te(n,e){n||G()}function VP(n,e){n||G()}function $(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends Lt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(at.UNAUTHENTICATED))}shutdown(){}}class KP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class qP{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new ut;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ut,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ut)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(te(typeof r.accessToken=="string"),new wA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string"),new at(e)}}class $P{constructor(e,t,r){this.h=e,this.l=t,this.m=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class QP{constructor(e,t,r){this.h=e,this.l=t,this.m=r}getToken(){return Promise.resolve(new $P(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class HP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zP{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const r=s=>{s.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(te(typeof t.token=="string"),this.T=t.token,new HP(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GP(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=GP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function fe(n,e){return n<e?-1:n>e?1:0}function Ts(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function AA(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new k(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new k(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new k(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new k(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ve(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Ve(0,0))}static max(){return new ee(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,t,r){t===void 0?t=0:t>e.length&&G(),r===void 0?r=e.length-t:r>e.length-t&&G(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return aa.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof aa?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class _e extends aa{construct(e,t,r){return new _e(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new k(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new _e(t)}static emptyPath(){return new _e([])}}const WP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends aa{construct(e,t,r){return new Ge(e,t,r)}static isValidIdentifier(e){return WP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new k(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new k(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new k(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new k(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(t)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(_e.fromString(e))}static fromName(e){return new q(_e.fromString(e).popFirst(5))}static empty(){return new q(_e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return _e.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new _e(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function Gh(n){return n.fields.find(e=>e.kind===2)}function ti(n){return n.fields.filter(e=>e.kind!==2)}IA.UNKNOWN_ID=-1;class JP{constructor(e,t){this.fieldPath=e,this.kind=t}}class uu{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new uu(0,Xt.min())}}function EA(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new Ve(t+1,0):new Ve(t,r));return new Xt(i,q.empty(),e)}function bA(n){return new Xt(n.readTime,n.key,-1)}class Xt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Xt(ee.min(),q.empty(),-1)}static max(){return new Xt(ee.max(),q.empty(),-1)}}function Lf(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=q.comparator(n.documentKey,e.documentKey),t!==0?t:fe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qr(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==TA)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new E((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof E?t:E.resolve(t)}catch(t){return E.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):E.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):E.reject(t)}static resolve(e){return new E((t,r)=>{t(e)})}static reject(e){return new E((t,r)=>{r(e)})}static waitFor(e){return new E((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=E.resolve(!1);for(const r of e)t=t.next(i=>i?E.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new E((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,t){return new E((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.v=new ut,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{t.error?this.v.reject(new Fo(e,t.error)):this.v.resolve()},this.transaction.onerror=r=>{const i=Bf(r.target.error);this.v.reject(new Fo(e,i))}}static open(e,t,r,i){try{return new cl(t,e.transaction(i,r))}catch(s){throw new Fo(t,s)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(N("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new XP(t)}}class hn{constructor(e,t,r){this.name=e,this.version=t,this.V=r,hn.S(qe())===12.2&&ze("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return N("SimpleDb","Removing database:",e),si(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Go())return!1;if(hn.C())return!0;const e=qe(),t=hn.S(e),r=0<t&&t<10,i=hn.N(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async $(e){return this.db||(N("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new Fo(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new k(b.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new k(b.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Fo(e,o))},i.onupgradeneeded=s=>{N("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.V.O(o,i.transaction,s.oldVersion,this.version).next(()=>{N("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=t=>this.F(t)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=cl.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.P(),u)).catch(u=>(a.abort(u),E.reject(u))).toPromise();return c.catch(()=>{}),await a.R,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(N("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class YP{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return si(this.L.delete())}}class Fo extends k{constructor(e,t){super(b.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Hr(n){return n.name==="IndexedDbTransactionError"}class XP{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(N("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(N("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),si(r)}add(e){return N("SimpleDb","ADD",this.store.name,e,e),si(this.store.add(e))}get(e){return si(this.store.get(e)).next(t=>(t===void 0&&(t=null),N("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return N("SimpleDb","DELETE",this.store.name,e),si(this.store.delete(e))}count(){return N("SimpleDb","COUNT",this.store.name),si(this.store.count())}j(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.W(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new E((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new E((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,t){N("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}X(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.W(i,t)}Z(e){const t=this.cursor({});return new E((r,i)=>{t.onerror=s=>{const o=Bf(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new E((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new YP(a),u=t(a.primaryKey,a.value,c);if(u instanceof E){const l=u.catch(h=>(c.done(),E.reject(h)));r.push(l)}c.isDone?i():c.K===null?a.continue():a.continue(c.K)}}).next(()=>E.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function si(n){return new E((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=Bf(r.target.error);t(i)}})}let xg=!1;function Bf(n){const e=hn.S(qe());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new k("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return xg||(xg=!0,setTimeout(()=>{throw r},0)),r}}return n}class ZP{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){N("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{N("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(t){Hr(t)?N("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await Qr(t)}await this.et(6e4)})}}class eD{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.st(t,e))}st(e,t){const r=new Set;let i=t,s=!0;return E.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return N("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}it(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(i,s)).next(a=>(N("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}rt(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=bA(s);Lf(o,r)>0&&(r=o)}),new Xt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>t.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}$t.ct=-1;function Ua(n){return n==null}function ca(n){return n===0&&1/n==-1/0}function CA(n){return typeof n=="number"&&Number.isInteger(n)&&!ca(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Pg(e)),e=tD(n.get(t),e);return Pg(e)}function tD(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function Pg(n){return n+""}function Pn(n){const e=n.length;if(te(e>=2),e===2)return te(n.charAt(0)===""&&n.charAt(1)===""),_e.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&G(),n.charAt(o+1)){case"":const a=n.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:G()}s=o+2}return new _e(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(n,e){return[n,Bt(e)]}function RA(n,e,t){return[n,Bt(e),t]}const nD={},rD=["prefixPath","collectionGroup","readTime","documentId"],iD=["prefixPath","collectionGroup","documentId"],sD=["collectionGroup","readTime","prefixPath","documentId"],oD=["canonicalId","targetId"],aD=["targetId","path"],cD=["path","targetId"],uD=["collectionId","parent"],lD=["indexId","uid"],hD=["uid","sequenceNumber"],dD=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],fD=["indexId","uid","orderedDocumentKey"],pD=["userId","collectionPath","documentId"],mD=["userId","collectionPath","largestBatchId"],gD=["userId","collectionGroup","largestBatchId"],kA=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],yD=[...kA,"documentOverlays"],xA=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],PA=xA,vD=[...PA,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh extends SA{constructor(e,t){super(),this.ht=e,this.currentSequenceNumber=t}}function pt(n,e){const t=$(n);return hn.M(t.ht,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Bi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function DA(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t){this.comparator=e,this.root=t||gt.EMPTY}insert(e,t){return new Ne(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new uc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new uc(this.root,e,this.comparator,!1)}getReverseIterator(){return new uc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new uc(this.root,e,this.comparator,!0)}}class uc{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gt{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??gt.RED,this.left=i??gt.EMPTY,this.right=s??gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new gt(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return gt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(n,e,t,r,i){return this}insert(n,e,t){return new gt(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Og(this.data.getIterator())}getIteratorFrom(e){return new Og(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ue)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ue(this.comparator);return t.data=e,t}}class Og{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Gi(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new Qt([])}unionWith(e){let t=new Ue(Ge.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Qt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ts(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wD(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new NA("Invalid base64 string: "+i):i}}(e);return new rt(t)}static fromUint8Array(e){const t=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new rt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const _D=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nr(n){if(te(!!n),typeof n=="string"){let e=0;const t=_D.exec(n);if(te(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:$e(n.seconds),nanos:$e(n.nanos)}}function $e(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Or(n){return typeof n=="string"?rt.fromBase64String(n):rt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Vf(n){const e=n.mapValue.fields.__previous_value__;return ul(e)?Vf(e):e}function ua(n){const e=Nr(n.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(e,t,r,i,s,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Fr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Fr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Fr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},kc={nullValue:"NULL_VALUE"};function Si(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ul(n)?4:OA(n)?9007199254740991:10:G()}function Vn(n,e){if(n===e)return!0;const t=Si(n);if(t!==Si(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ua(n).isEqual(ua(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Nr(r.timestampValue),o=Nr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return Or(r.bytesValue).isEqual(Or(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return $e(r.geoPointValue.latitude)===$e(i.geoPointValue.latitude)&&$e(r.geoPointValue.longitude)===$e(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return $e(r.integerValue)===$e(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=$e(r.doubleValue),o=$e(i.doubleValue);return s===o?ca(s)===ca(o):isNaN(s)&&isNaN(o)}return!1}(n,e);case 9:return Ts(n.arrayValue.values||[],e.arrayValue.values||[],Vn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Ng(s)!==Ng(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Vn(s[a],o[a])))return!1;return!0}(n,e);default:return G()}}function la(n,e){return(n.values||[]).find(t=>Vn(t,e))!==void 0}function Ur(n,e){if(n===e)return 0;const t=Si(n),r=Si(e);if(t!==r)return fe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return fe(n.booleanValue,e.booleanValue);case 2:return function(i,s){const o=$e(i.integerValue||i.doubleValue),a=$e(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Fg(n.timestampValue,e.timestampValue);case 4:return Fg(ua(n),ua(e));case 5:return fe(n.stringValue,e.stringValue);case 6:return function(i,s){const o=Or(i),a=Or(s);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=fe(o[c],a[c]);if(u!==0)return u}return fe(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,s){const o=fe($e(i.latitude),$e(s.latitude));return o!==0?o:fe($e(i.longitude),$e(s.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Ur(o[c],a[c]);if(u)return u}return fe(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===_r.mapValue&&s===_r.mapValue)return 0;if(i===_r.mapValue)return 1;if(s===_r.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=s.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=fe(a[l],u[l]);if(h!==0)return h;const d=Ur(o[a[l]],c[u[l]]);if(d!==0)return d}return fe(a.length,u.length)}(n.mapValue,e.mapValue);default:throw G()}}function Fg(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return fe(n,e);const t=Nr(n),r=Nr(e),i=fe(t.seconds,r.seconds);return i!==0?i:fe(t.nanos,r.nanos)}function Ss(n){return Jh(n)}function Jh(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(r){const i=Nr(r);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?Or(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,q.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Jh(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Jh(r.fields[a])}`;return s+"}"}(n.mapValue):G();var e,t}function Ci(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Yh(n){return!!n&&"integerValue"in n}function ha(n){return!!n&&"arrayValue"in n}function Ug(n){return!!n&&"nullValue"in n}function Mg(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function xc(n){return!!n&&"mapValue"in n}function Uo(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Bi(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Uo(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Uo(n.arrayValue.values[t]);return e}return Object.assign({},n)}function OA(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function ID(n){return"nullValue"in n?kc:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Ci(Fr.empty(),q.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:G()}function ED(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Ci(Fr.empty(),q.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?_r:G()}function Lg(n,e){const t=Ur(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Bg(n,e){const t=Ur(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!xc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Uo(t)}setAll(e){let t=Ge.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=Uo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());xc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Vn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];xc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Bi(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new wt(Uo(this.value))}}function FA(n){const e=[];return Bi(n.fields,(t,r)=>{const i=new Ge([t]);if(xc(r)){const s=FA(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Fe(e,0,ee.min(),ee.min(),ee.min(),wt.empty(),0)}static newFoundDocument(e,t,r,i){return new Fe(e,1,t,ee.min(),r,i,0)}static newNoDocument(e,t){return new Fe(e,2,t,ee.min(),ee.min(),wt.empty(),0)}static newUnknownDocument(e,t){return new Fe(e,3,t,ee.min(),ee.min(),wt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Fe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,t){this.position=e,this.inclusive=t}}function Vg(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),t.key):r=Ur(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function jg(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Vn(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,t="asc"){this.field=e,this.dir=t}}function bD(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{}class ye extends UA{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new TD(e,t,r):t==="array-contains"?new RD(e,r):t==="in"?new KA(e,r):t==="not-in"?new kD(e,r):t==="array-contains-any"?new xD(e,r):new ye(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new SD(e,r):new CD(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ur(t,this.value)):t!==null&&Si(this.value)===Si(t)&&this.matchesComparison(Ur(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ke extends UA{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new ke(e,t)}matches(e){return Cs(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(t=>t.isInequality());return e!==null?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Cs(n){return n.op==="and"}function Xh(n){return n.op==="or"}function jf(n){return MA(n)&&Cs(n)}function MA(n){for(const e of n.filters)if(e instanceof ke)return!1;return!0}function Zh(n){if(n instanceof ye)return n.field.canonicalString()+n.op.toString()+Ss(n.value);if(jf(n))return n.filters.map(e=>Zh(e)).join(",");{const e=n.filters.map(t=>Zh(t)).join(",");return`${n.op}(${e})`}}function LA(n,e){return n instanceof ye?function(t,r){return r instanceof ye&&t.op===r.op&&t.field.isEqual(r.field)&&Vn(t.value,r.value)}(n,e):n instanceof ke?function(t,r){return r instanceof ke&&t.op===r.op&&t.filters.length===r.filters.length?t.filters.reduce((i,s,o)=>i&&LA(s,r.filters[o]),!0):!1}(n,e):void G()}function BA(n,e){const t=n.filters.concat(e);return ke.create(t,n.op)}function VA(n){return n instanceof ye?function(e){return`${e.field.canonicalString()} ${e.op} ${Ss(e.value)}`}(n):n instanceof ke?function(e){return e.op.toString()+" {"+e.getFilters().map(VA).join(" ,")+"}"}(n):"Filter"}class TD extends ye{constructor(e,t,r){super(e,t,r),this.key=q.fromName(r.referenceValue)}matches(e){const t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class SD extends ye{constructor(e,t){super(e,"in",t),this.keys=jA("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class CD extends ye{constructor(e,t){super(e,"not-in",t),this.keys=jA("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function jA(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>q.fromName(r.referenceValue))}class RD extends ye{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ha(t)&&la(t.arrayValue,this.value)}}class KA extends ye{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&la(this.value.arrayValue,t)}}class kD extends ye{constructor(e,t){super(e,"not-in",t)}matches(e){if(la(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!la(this.value.arrayValue,t)}}class xD extends ye{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ha(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>la(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function ed(n,e=null,t=[],r=[],i=null,s=null,o=null){return new PD(n,e,t,r,i,s,o)}function Ri(n){const e=$(n);if(e.dt===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Zh(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ua(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ss(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ss(r)).join(",")),e.dt=t}return e.dt}function Ma(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!bD(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!LA(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!jg(n.startAt,e.startAt)&&jg(n.endAt,e.endAt)}function lu(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function hu(n,e){return n.filters.filter(t=>t instanceof ye&&t.field.isEqual(e))}function Kg(n,e,t){let r=kc,i=!0;for(const s of hu(n,e)){let o=kc,a=!0;switch(s.op){case"<":case"<=":o=ID(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=kc}Lg({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Lg({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function qg(n,e,t){let r=_r,i=!0;for(const s of hu(n,e)){let o=_r,a=!0;switch(s.op){case">=":case">":o=ED(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=_r}Bg({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Bg({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function qA(n,e,t,r,i,s,o,a){return new ar(n,e,t,r,i,s,o,a)}function Gs(n){return new ar(n)}function $g(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Kf(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function ll(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function qf(n){return n.collectionGroup!==null}function Ii(n){const e=$(n);if(e.wt===null){e.wt=[];const t=ll(e),r=Kf(e);if(t!==null&&r===null)t.isKeyField()||e.wt.push(new ps(t)),e.wt.push(new ps(Ge.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new ps(Ge.keyField(),s))}}}return e.wt}function Gt(n){const e=$(n);if(!e._t)if(e.limitType==="F")e._t=ed(e.path,e.collectionGroup,Ii(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of Ii(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new ps(s.field,o))}const r=e.endAt?new Mr(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Mr(e.startAt.position,e.startAt.inclusive):null;e._t=ed(e.path,e.collectionGroup,t,e.filters,e.limit,r,i)}return e._t}function td(n,e){e.getFirstInequalityField(),ll(n);const t=n.filters.concat([e]);return new ar(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function du(n,e,t){return new ar(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function La(n,e){return Ma(Gt(n),Gt(e))&&n.limitType===e.limitType}function $A(n){return`${Ri(Gt(n))}|lt:${n.limitType}`}function nd(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(r=>VA(r)).join(", ")}]`),Ua(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ss(r)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ss(r)).join(",")),`Target(${t})`}(Gt(n))}; limitType=${n.limitType})`}function Ba(n,e){return e.isFoundDocument()&&function(t,r){const i=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):q.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,r){for(const i of Ii(t))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,r){for(const i of t.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(t,r){return!(t.startAt&&!function(i,s,o){const a=Vg(i,s,o);return i.inclusive?a<=0:a<0}(t.startAt,Ii(t),r)||t.endAt&&!function(i,s,o){const a=Vg(i,s,o);return i.inclusive?a>=0:a>0}(t.endAt,Ii(t),r))}(n,e)}function QA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function HA(n){return(e,t)=>{let r=!1;for(const i of Ii(n)){const s=DD(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function DD(n,e,t){const r=n.field.isKeyField()?q.comparator(e.key,t.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Ur(a,c):G()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Bi(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return DA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ND=new Ne(q.comparator);function Ht(){return ND}const zA=new Ne(q.comparator);function To(...n){let e=zA;for(const t of n)e=e.insert(t.key,t);return e}function GA(n){let e=zA;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Dn(){return Mo()}function WA(){return Mo()}function Mo(){return new zr(n=>n.toString(),(n,e)=>n.isEqual(e))}const OD=new Ne(q.comparator),FD=new Ue(q.comparator);function pe(...n){let e=FD;for(const t of n)e=e.add(t);return e}const UD=new Ue(fe);function $f(){return UD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ca(e)?"-0":e}}function YA(n){return{integerValue:""+n}}function XA(n,e){return CA(e)?YA(e):JA(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(){this._=void 0}}function MD(n,e,t){return n instanceof Rs?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&ul(i)&&(i=Vf(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(t,e):n instanceof ki?eI(n,e):n instanceof xi?tI(n,e):function(r,i){const s=ZA(r,i),o=Qg(s)+Qg(r.gt);return Yh(s)&&Yh(r.gt)?YA(o):JA(r.serializer,o)}(n,e)}function LD(n,e,t){return n instanceof ki?eI(n,e):n instanceof xi?tI(n,e):t}function ZA(n,e){return n instanceof ks?Yh(t=e)||function(r){return!!r&&"doubleValue"in r}(t)?e:{integerValue:0}:null;var t}class Rs extends hl{}class ki extends hl{constructor(e){super(),this.elements=e}}function eI(n,e){const t=nI(e);for(const r of n.elements)t.some(i=>Vn(i,r))||t.push(r);return{arrayValue:{values:t}}}class xi extends hl{constructor(e){super(),this.elements=e}}function tI(n,e){let t=nI(e);for(const r of n.elements)t=t.filter(i=>!Vn(i,r));return{arrayValue:{values:t}}}class ks extends hl{constructor(e,t){super(),this.serializer=e,this.gt=t}}function Qg(n){return $e(n.integerValue||n.doubleValue)}function nI(n){return ha(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,t){this.field=e,this.transform=t}}function BD(n,e){return n.field.isEqual(e.field)&&function(t,r){return t instanceof ki&&r instanceof ki||t instanceof xi&&r instanceof xi?Ts(t.elements,r.elements,Vn):t instanceof ks&&r instanceof ks?Vn(t.gt,r.gt):t instanceof Rs&&r instanceof Rs}(n.transform,e.transform)}class VD{constructor(e,t){this.version=e,this.transformResults=t}}class Be{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Be}static exists(e){return new Be(void 0,e)}static updateTime(e){return new Be(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class dl{}function rI(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Js(n.key,Be.none()):new Ws(n.key,n.data,Be.none());{const t=n.data,r=wt.empty();let i=new Ue(Ge.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new cr(n.key,r,new Qt(i.toArray()),Be.none())}}function jD(n,e,t){n instanceof Ws?function(r,i,s){const o=r.value.clone(),a=zg(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(n,e,t):n instanceof cr?function(r,i,s){if(!Pc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=zg(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(iI(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(n,e,t):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,t)}function Lo(n,e,t,r){return n instanceof Ws?function(i,s,o,a){if(!Pc(i.precondition,s))return o;const c=i.value.clone(),u=Gg(i.fieldTransforms,a,s);return c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof cr?function(i,s,o,a){if(!Pc(i.precondition,s))return o;const c=Gg(i.fieldTransforms,a,s),u=s.data;return u.setAll(iI(i)),u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(n,e,t,r):function(i,s,o){return Pc(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(n,e,t)}function KD(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=ZA(r.transform,i||null);s!=null&&(t===null&&(t=wt.empty()),t.set(r.field,s))}return t||null}function Hg(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&Ts(t,r,(i,s)=>BD(i,s))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ws extends dl{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class cr extends dl{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function iI(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function zg(n,e,t){const r=new Map;te(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,LD(o,a,t[i]))}return r}function Gg(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,MD(s,o,e))}return r}class Js extends dl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Qf extends dl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&jD(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Lo(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Lo(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=WA();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=rI(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),pe())}isEqual(e){return this.batchId===e.batchId&&Ts(this.mutations,e.mutations,(t,r)=>Hg(t,r))&&Ts(this.baseMutations,e.baseMutations,(t,r)=>Hg(t,r))}}class zf{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){te(e.mutations.length===r.length);let i=OD;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new zf(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe,ve;function sI(n){switch(n){default:return G();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function oI(n){if(n===void 0)return ze("GRPC error has no .code"),b.UNKNOWN;switch(n){case Xe.OK:return b.OK;case Xe.CANCELLED:return b.CANCELLED;case Xe.UNKNOWN:return b.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return b.INTERNAL;case Xe.UNAVAILABLE:return b.UNAVAILABLE;case Xe.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Xe.NOT_FOUND:return b.NOT_FOUND;case Xe.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Xe.ABORTED:return b.ABORTED;case Xe.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Xe.DATA_LOSS:return b.DATA_LOSS;default:return G()}}(ve=Xe||(Xe={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return lc}static getOrCreateInstance(){return lc===null&&(lc=new Wf),lc}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let lc=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $D=new fs([4294967295,4294967295],0);function Wg(n){const e=aI().encode(n),t=new LP;return t.update(e),new Uint8Array(t.digest())}function Jg(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new fs([t,r],0),new fs([i,s],0)]}class Jf{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new So(`Invalid padding: ${t}`);if(r<0)throw new So(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new So(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new So(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=fs.fromNumber(this.It)}Et(e,t,r){let i=e.add(t.multiply(fs.fromNumber(r)));return i.compare($D)===1&&(i=new fs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const t=Wg(e),[r,i]=Jg(t);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Jf(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const t=Wg(e),[r,i]=Jg(t);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class So extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Ka.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ja(ee.min(),i,new Ne(fe),Ht(),pe())}}class Ka{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ka(r,t,pe(),pe(),pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,t,r,i){this.Pt=e,this.removedTargetIds=t,this.key=r,this.bt=i}}class cI{constructor(e,t){this.targetId=e,this.Vt=t}}class uI{constructor(e,t,r=rt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Yg{constructor(){this.St=0,this.Dt=Zg(),this.Ct=rt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=pe(),t=pe(),r=pe();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:G()}}),new Ka(this.Ct,this.xt,e,t,r)}Ft(){this.Nt=!1,this.Dt=Zg()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class QD{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Ht(),this.zt=Xg(),this.Wt=new Ne(fe)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,t=>{const r=this.Zt(t);switch(e.state){case 0:this.te(t)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(t);break;case 3:this.te(t)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),r.$t(e.resumeToken));break;default:G()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach((r,i)=>{this.te(i)&&t(i)})}ne(e){var t;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(lu(o))if(i===0){const a=new q(o.path);this.Yt(r,a,Fe.newNoDocument(a,ee.min()))}else te(i===1);else{const a=this.ie(r);if(a!==i){const c=this.re(e,a);if(c!==0){this.ee(r);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(t=Wf.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(u,l,h){var d,f,m,p,y,_;const T={localCacheCount:l,existenceFilterCount:h.count},U=h.unchangedNames;return U&&(T.bloomFilter={applied:u===0,hashCount:(d=U==null?void 0:U.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(p=(m=(f=U==null?void 0:U.bits)===null||f===void 0?void 0:f.bitmap)===null||m===void 0?void 0:m.length)!==null&&p!==void 0?p:0,padding:(_=(y=U==null?void 0:U.bits)===null||y===void 0?void 0:y.padding)!==null&&_!==void 0?_:0}),T}(c,a,e.Vt))}}}}re(e,t){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let c,u;try{c=Or(s).toUint8Array()}catch(l){if(l instanceof NA)return yn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw l}try{u=new Jf(c,o,a)}catch(l){return yn(l instanceof So?"BloomFilter error: ":"Applying bloom filter failed: ",l),1}return u.It===0?1:i!==t-this.oe(e.targetId,u)?2:0}oe(e,t){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const t=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&lu(a.target)){const c=new q(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,Fe.newNoDocument(c,e))}s.Mt&&(t.set(o,s.Ot()),s.Ft())}});let r=pe();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.se(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new ja(e,t,this.Wt,this.jt,r);return this.jt=Ht(),this.zt=Xg(),this.Wt=new Ne(fe),i}Jt(e,t){if(!this.te(e))return;const r=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,r),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,t)?i.Bt(t,1):i.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),r&&(this.jt=this.jt.insert(t,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new Yg,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new Ue(fe),this.zt=this.zt.insert(e,t)),t}te(e){const t=this.se(e)!==null;return t||N("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Yg),this.Gt.getRemoteKeysForTarget(e).forEach(t=>{this.Yt(e,t,null)})}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function Xg(){return new Ne(q.comparator)}function Zg(){return new Ne(q.comparator)}const HD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),zD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),GD=(()=>({and:"AND",or:"OR"}))();class WD{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function rd(n,e){return n.useProto3Json||Ua(e)?e:{value:e}}function xs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lI(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function JD(n,e){return xs(n,e.toTimestamp())}function We(n){return te(!!n),ee.fromTimestamp(function(e){const t=Nr(e);return new Ve(t.seconds,t.nanos)}(n))}function Yf(n,e){return function(t){return new _e(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function hI(n){const e=_e.fromString(n);return te(_I(e)),e}function da(n,e){return Yf(n.databaseId,e.path)}function Fn(n,e){const t=hI(e);if(t.get(1)!==n.databaseId.projectId)throw new k(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new k(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new q(fI(t))}function id(n,e){return Yf(n.databaseId,e)}function dI(n){const e=hI(n);return e.length===4?_e.emptyPath():fI(e)}function fa(n){return new _e(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function fI(n){return te(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ey(n,e,t){return{name:da(n,e),fields:t.value.mapValue.fields}}function pI(n,e,t){const r=Fn(n,e.name),i=We(e.updateTime),s=e.createTime?We(e.createTime):ee.min(),o=new wt({mapValue:{fields:e.fields}}),a=Fe.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function YD(n,e){return"found"in e?function(t,r){te(!!r.found),r.found.name,r.found.updateTime;const i=Fn(t,r.found.name),s=We(r.found.updateTime),o=r.found.createTime?We(r.found.createTime):ee.min(),a=new wt({mapValue:{fields:r.found.fields}});return Fe.newFoundDocument(i,s,o,a)}(n,e):"missing"in e?function(t,r){te(!!r.missing),te(!!r.readTime);const i=Fn(t,r.missing),s=We(r.readTime);return Fe.newNoDocument(i,s)}(n,e):G()}function XD(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.useProto3Json?(te(u===void 0||typeof u=="string"),rt.fromBase64String(u||"")):(te(u===void 0||u instanceof Uint8Array),rt.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?b.UNKNOWN:oI(c.code);return new k(u,c.message||"")}(o);t=new uI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Fn(n,r.document.name),s=We(r.document.updateTime),o=r.document.createTime?We(r.document.createTime):ee.min(),a=new wt({mapValue:{fields:r.document.fields}}),c=Fe.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new Dc(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Fn(n,r.document),s=r.readTime?We(r.readTime):ee.min(),o=Fe.newNoDocument(i,s),a=r.removedTargetIds||[];t=new Dc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Fn(n,r.document),s=r.removedTargetIds||[];t=new Dc([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new qD(i,s),a=r.targetId;t=new cI(a,o)}}return t}function pa(n,e){let t;if(e instanceof Ws)t={update:ey(n,e.key,e.value)};else if(e instanceof Js)t={delete:da(n,e.key)};else if(e instanceof cr)t={update:ey(n,e.key,e.data),updateMask:iN(e.fieldMask)};else{if(!(e instanceof Qf))return G();t={verify:da(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Rs)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ki)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof xi)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ks)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw G()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:JD(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G()}(n,e.precondition)),t}function sd(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?Be.updateTime(We(i.updateTime)):i.exists!==void 0?Be.exists(i.exists):Be.none()}(e.currentDocument):Be.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)te(o.setToServerValue==="REQUEST_TIME"),a=new Rs;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new ki(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new xi(u)}else"increment"in o?a=new ks(s,o.increment):G();const c=Ge.fromServerFormat(o.fieldPath);return new Va(c,a)}(n,i)):[];if(e.update){e.update.name;const i=Fn(n,e.update.name),s=new wt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Qt(c.map(u=>Ge.fromServerFormat(u)))}(e.updateMask);return new cr(i,s,o,t,r)}return new Ws(i,s,t,r)}if(e.delete){const i=Fn(n,e.delete);return new Js(i,t)}if(e.verify){const i=Fn(n,e.verify);return new Qf(i,t)}return G()}function ZD(n,e){return n&&n.length>0?(te(e!==void 0),n.map(t=>function(r,i){let s=r.updateTime?We(r.updateTime):We(i);return s.isEqual(ee.min())&&(s=We(i)),new VD(s,r.transformResults||[])}(t,e))):[]}function mI(n,e){return{documents:[id(n,e.path)]}}function gI(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=id(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=id(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return wI(ke.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Xi(l.field),direction:tN(l.dir)}}(u))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=rd(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function yI(n){let e=dI(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){te(r===1);const l=t.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];t.where&&(s=function(l){const h=vI(l);return h instanceof ke&&jf(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new ps(Zi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Ua(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Mr(d,h)}(t.startAt));let u=null;return t.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Mr(d,h)}(t.endAt)),qA(e,i,o,s,a,"F",c,u)}function eN(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function vI(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Zi(e.unaryFilter.field);return ye.create(t,"==",{doubleValue:NaN});case"IS_NULL":const r=Zi(e.unaryFilter.field);return ye.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Zi(e.unaryFilter.field);return ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Zi(e.unaryFilter.field);return ye.create(s,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(n):n.fieldFilter!==void 0?function(e){return ye.create(Zi(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return ke.create(e.compositeFilter.filters.map(t=>vI(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(n):G()}function tN(n){return HD[n]}function nN(n){return zD[n]}function rN(n){return GD[n]}function Xi(n){return{fieldPath:n.canonicalString()}}function Zi(n){return Ge.fromServerFormat(n.fieldPath)}function wI(n){return n instanceof ye?function(e){if(e.op==="=="){if(Mg(e.value))return{unaryFilter:{field:Xi(e.field),op:"IS_NAN"}};if(Ug(e.value))return{unaryFilter:{field:Xi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Mg(e.value))return{unaryFilter:{field:Xi(e.field),op:"IS_NOT_NAN"}};if(Ug(e.value))return{unaryFilter:{field:Xi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xi(e.field),op:nN(e.op),value:e.value}}}(n):n instanceof ke?function(e){const t=e.getFilters().map(r=>wI(r));return t.length===1?t[0]:{compositeFilter:{op:rN(e.op),filters:t}}}(n):G()}function iN(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function _I(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,t,r,i,s=ee.min(),o=ee.min(),a=rt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e){this.fe=e}}function sN(n,e){let t;if(e.document)t=pI(n.fe,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=q.fromSegments(e.noDocument.path),i=Di(e.noDocument.readTime);t=Fe.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return G();{const r=q.fromSegments(e.unknownDocument.path),i=Di(e.unknownDocument.version);t=Fe.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(r){const i=new Ve(r[0],r[1]);return ee.fromTimestamp(i)}(e.readTime)),t}function ty(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:fu(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:da(i,s.key),fields:s.data.value.mapValue.fields,updateTime:xs(i,s.version.toTimestamp()),createTime:xs(i,s.createTime.toTimestamp())}}(n.fe,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Pi(e.version)};else{if(!e.isUnknownDocument())return G();r.unknownDocument={path:t.path.toArray(),version:Pi(e.version)}}return r}function fu(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Pi(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Di(n){const e=new Ve(n.seconds,n.nanoseconds);return ee.fromTimestamp(e)}function oi(n,e){const t=(e.baseMutations||[]).map(s=>sd(n.fe,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>sd(n.fe,s)),i=Ve.fromMillis(e.localWriteTimeMs);return new Hf(e.batchId,i,t,r)}function Co(n){const e=Di(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Di(n.lastLimboFreeSnapshotVersion):ee.min();let r;var i;return n.query.documents!==void 0?(te((i=n.query).documents.length===1),r=Gt(Gs(dI(i.documents[0])))):r=function(s){return Gt(yI(s))}(n.query),new Jn(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,rt.fromBase64String(n.resumeToken))}function II(n,e){const t=Pi(e.snapshotVersion),r=Pi(e.lastLimboFreeSnapshotVersion);let i;i=lu(e.target)?mI(n.fe,e.target):gI(n.fe,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ri(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Xf(n){const e=yI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?du(e,e.limit,"L"):e}function sh(n,e){return new Gf(e.largestBatchId,sd(n.fe,e.overlayMutation))}function ny(n,e){const t=e.path.lastSegment();return[n,Bt(e.path.popLast()),t]}function ry(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:Pi(r.readTime),documentKey:Bt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{getBundleMetadata(e,t){return iy(e).get(t).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Di(i.createTime),version:i.version};var i})}saveBundleMetadata(e,t){return iy(e).put({bundleId:(r=t).id,createTime:Pi(We(r.createTime)),version:r.version});var r}getNamedQuery(e,t){return sy(e).get(t).next(r=>{if(r)return{name:(i=r).name,query:Xf(i.bundledQuery),readTime:Di(i.readTime)};var i})}saveNamedQuery(e,t){return sy(e).put(function(r){return{name:r.name,readTime:Pi(We(r.readTime)),bundledQuery:r.bundledQuery}}(t))}}function iy(n){return pt(n,"bundles")}function sy(n){return pt(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,t){this.serializer=e,this.userId=t}static de(e,t){const r=t.uid||"";return new fl(e,r)}getOverlay(e,t){return lo(e).get(ny(this.userId,t)).next(r=>r?sh(this.serializer,r):null)}getOverlays(e,t){const r=Dn();return E.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new Gf(t,o);i.push(this.we(e,a))}),E.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Bt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(lo(e).J("collectionPathOverlayIndex",a))}),E.waitFor(s)}getOverlaysForCollection(e,t,r){const i=Dn(),s=Bt(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return lo(e).j("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=sh(this.serializer,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=Dn();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return lo(e).X({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=sh(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}we(e,t){return lo(e).put(function(r,i,s){const[o,a,c]=ny(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:c,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:pa(r.fe,s.mutation)}}(this.serializer,this.userId,t))}}function lo(n){return pt(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe($e(e.integerValue));else if("doubleValue"in e){const r=$e(e.doubleValue);isNaN(r)?this.ye(t,13):(this.ye(t,15),ca(r)?t.pe(0):t.pe(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ye(t,20),typeof r=="string"?t.Ie(r):(t.Ie(`${r.seconds||""}`),t.pe(r.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(Or(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ye(t,45),t.pe(r.latitude||0),t.pe(r.longitude||0)}else"mapValue"in e?OA(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):G()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const r=e.fields||{};this.ye(t,55);for(const i of Object.keys(r))this.Te(i,t),this.me(r[i],t)}Pe(e,t){const r=e.values||[];this.ye(t,50);for(const i of r)this.me(i,t)}ve(e,t){this.ye(t,37),q.fromName(e).path.forEach(r=>{this.ye(t,60),this.be(r,t)})}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}ai.Ve=new ai;function aN(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function oy(n){const e=64-function(t){let r=0;for(let i=0;i<8;++i){const s=aN(255&t[i]);if(r+=s,s!==8)break}return r}(n);return Math.ceil(e/8)}class cN{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.De(r.value),r=t.next();this.Ce()}xe(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ne(r.value),r=t.next();this.ke()}Me(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.De(r);else if(r<2048)this.De(960|r>>>6),this.De(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.De(480|r>>>12),this.De(128|63&r>>>6),this.De(128|63&r);else{const i=t.codePointAt(0);this.De(240|i>>>18),this.De(128|63&i>>>12),this.De(128|63&i>>>6),this.De(128|63&i)}}this.Ce()}$e(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ne(r);else if(r<2048)this.Ne(960|r>>>6),this.Ne(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ne(480|r>>>12),this.Ne(128|63&r>>>6),this.Ne(128|63&r);else{const i=t.codePointAt(0);this.Ne(240|i>>>18),this.Ne(128|63&i>>>12),this.Ne(128|63&i>>>6),this.Ne(128|63&i)}}this.ke()}Oe(e){const t=this.Fe(e),r=oy(t);this.Be(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Le(e){const t=this.Fe(e),r=oy(t);this.Be(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const t=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}De(e){const t=255&e;t===0?(this.Ue(0),this.Ue(255)):t===255?(this.Ue(255),this.Ue(0)):this.Ue(t)}Ne(e){const t=255&e;t===0?(this.Ge(0),this.Ge(255)):t===255?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class uN{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class lN{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class ho{constructor(){this.je=new cN,this.ze=new uN(this.je),this.We=new lN(this.je)}seed(e){this.je.seed(e)}He(e){return e===0?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Je(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new ci(this.indexId,this.documentKey,this.arrayValue,r)}}function fr(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=ay(n.arrayValue,e.arrayValue),t!==0?t:(t=ay(n.directionalValue,e.directionalValue),t!==0?t:q.comparator(n.documentKey,e.documentKey)))}function ay(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const t of e.filters){const r=t;r.isInequality()?this.Ze=r:this.Xe.push(r)}}tn(e){te(e.collectionGroup===this.collectionId);const t=Gh(e);if(t!==void 0&&!this.en(t))return!1;const r=ti(e);let i=0,s=0;for(;i<r.length&&this.en(r[i]);++i);if(i===r.length)return!0;if(this.Ze!==void 0){const o=r[i];if(!this.nn(this.Ze,o)||!this.sn(this.Ye[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Ye.length||!this.sn(this.Ye[s++],o))return!1}return!0}en(e){for(const t of this.Xe)if(this.nn(t,e))return!0;return!1}nn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(n){var e,t;if(te(n instanceof ye||n instanceof ke),n instanceof ye){if(n instanceof KA){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>ye.create(n.field,"==",s)))||[];return ke.create(i,"or")}return n}const r=n.filters.map(i=>EI(i));return ke.create(r,n.op)}function dN(n){if(n.getFilters().length===0)return[];const e=cd(EI(n));return te(bI(e)),od(e)||ad(e)?[e]:e.getFilters()}function od(n){return n instanceof ye}function ad(n){return n instanceof ke&&jf(n)}function bI(n){return od(n)||ad(n)||function(e){if(e instanceof ke&&Xh(e)){for(const t of e.getFilters())if(!od(t)&&!ad(t))return!1;return!0}return!1}(n)}function cd(n){if(te(n instanceof ye||n instanceof ke),n instanceof ye)return n;if(n.filters.length===1)return cd(n.filters[0]);const e=n.filters.map(r=>cd(r));let t=ke.create(e,n.op);return t=pu(t),bI(t)?t:(te(t instanceof ke),te(Cs(t)),te(t.filters.length>1),t.filters.reduce((r,i)=>Zf(r,i)))}function Zf(n,e){let t;return te(n instanceof ye||n instanceof ke),te(e instanceof ye||e instanceof ke),t=n instanceof ye?e instanceof ye?function(r,i){return ke.create([r,i],"and")}(n,e):cy(n,e):e instanceof ye?cy(e,n):function(r,i){if(te(r.filters.length>0&&i.filters.length>0),Cs(r)&&Cs(i))return BA(r,i.getFilters());const s=Xh(r)?r:i,o=Xh(r)?i:r,a=s.filters.map(c=>Zf(c,o));return ke.create(a,"or")}(n,e),pu(t)}function cy(n,e){if(Cs(e))return BA(e,n.getFilters());{const t=e.filters.map(r=>Zf(n,r));return ke.create(t,"or")}}function pu(n){if(te(n instanceof ye||n instanceof ke),n instanceof ye)return n;const e=n.getFilters();if(e.length===1)return pu(e[0]);if(MA(n))return n;const t=e.map(i=>pu(i)),r=[];return t.forEach(i=>{i instanceof ye?r.push(i):i instanceof ke&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ke.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(){this.rn=new ep}addToCollectionParentIndex(e,t){return this.rn.add(t),E.resolve()}getCollectionParents(e,t){return E.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return E.resolve()}deleteFieldIndex(e,t){return E.resolve()}getDocumentsMatchingTarget(e,t){return E.resolve(null)}getIndexType(e,t){return E.resolve(0)}getFieldIndexes(e,t){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,t){return E.resolve(Xt.min())}getMinOffsetFromCollectionGroup(e,t){return E.resolve(Xt.min())}updateCollectionGroup(e,t,r){return E.resolve()}updateIndexEntries(e,t){return E.resolve()}}class ep{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ue(_e.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ue(_e.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=new Uint8Array(0);class pN{constructor(e,t){this.user=e,this.databaseId=t,this.on=new ep,this.un=new zr(r=>Ri(r),(r,i)=>Ma(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.on.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.on.add(t)});const s={collectionId:r,parent:Bt(i)};return uy(e).put(s)}return E.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[AA(t),""],!1,!0);return uy(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(Pn(o.parent))}return r})}addFieldIndex(e,t){const r=dc(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=po(e);return s.next(a=>{o.put(ry(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=dc(e),i=po(e),s=fo(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const r=fo(e);let i=!0;const s=new Map;return E.forEach(this.cn(t),o=>this.an(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=pe();const a=[];return E.forEach(s,(c,u)=>{var l;N("IndexedDbIndexManager",`Using index ${l=c,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(U=>`${U.fieldPath}:${U.kind}`).join(",")}`} to execute ${Ri(t)}`);const h=function(U,P){const he=Gh(P);if(he===void 0)return null;for(const x of hu(U,he.fieldPath))switch(x.op){case"array-contains-any":return x.value.arrayValue.values||[];case"array-contains":return[x.value]}return null}(u,c),d=function(U,P){const he=new Map;for(const x of ti(P))for(const Ee of hu(U,x.fieldPath))switch(Ee.op){case"==":case"in":he.set(x.fieldPath.canonicalString(),Ee.value);break;case"not-in":case"!=":return he.set(x.fieldPath.canonicalString(),Ee.value),Array.from(he.values())}return null}(u,c),f=function(U,P){const he=[];let x=!0;for(const Ee of ti(P)){const oe=Ee.kind===0?Kg(U,Ee.fieldPath,U.startAt):qg(U,Ee.fieldPath,U.startAt);he.push(oe.value),x&&(x=oe.inclusive)}return new Mr(he,x)}(u,c),m=function(U,P){const he=[];let x=!0;for(const Ee of ti(P)){const oe=Ee.kind===0?qg(U,Ee.fieldPath,U.endAt):Kg(U,Ee.fieldPath,U.endAt);he.push(oe.value),x&&(x=oe.inclusive)}return new Mr(he,x)}(u,c),p=this.hn(c,u,f),y=this.hn(c,u,m),_=this.ln(c,u,d),T=this.fn(c.indexId,h,p,f.inclusive,y,m.inclusive,_);return E.forEach(T,U=>r.H(U,t.limit).next(P=>{P.forEach(he=>{const x=q.fromSegments(he.documentKey);o.has(x)||(o=o.add(x),a.push(x))})}))}).next(()=>a)}return E.resolve(null)})}cn(e){let t=this.un.get(e);return t||(e.filters.length===0?t=[e]:t=dN(ke.create(e.filters,"and")).map(r=>ed(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,t),t)}fn(e,t,r,i,s,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,s.length),u=c/(t!=null?t.length:1),l=[];for(let h=0;h<c;++h){const d=t?this.dn(t[h/u]):hc,f=this.wn(e,d,r[h%u],i),m=this._n(e,d,s[h%u],o),p=a.map(y=>this.wn(e,d,y,!0));l.push(...this.createRange(f,m,p))}return l}wn(e,t,r,i){const s=new ci(e,q.empty(),t,r);return i?s:s.Je()}_n(e,t,r,i){const s=new ci(e,q.empty(),t,r);return i?s.Je():s}an(e,t){const r=new hN(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.cn(t);return E.forEach(i,s=>this.an(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let c=new Ue(Ge.comparator),u=!1;for(const l of a.filters)for(const h of l.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?u=!0:c=c.add(h.field));for(const l of a.orderBy)l.field.isKeyField()||(c=c.add(l.field));return c.size+(u?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(t)&&i.length>1&&r===2?1:r)}mn(e,t){const r=new ho;for(const i of ti(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.He(i.kind);ai.Ve._e(s,o)}return r.Qe()}dn(e){const t=new ho;return ai.Ve._e(e,t.He(0)),t.Qe()}gn(e,t){const r=new ho;return ai.Ve._e(Ci(this.databaseId,t),r.He(function(i){const s=ti(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Qe()}ln(e,t,r){if(r===null)return[];let i=[];i.push(new ho);let s=0;for(const o of ti(e)){const a=r[s++];for(const c of i)if(this.yn(t,o.fieldPath)&&ha(a))i=this.pn(i,o,a);else{const u=c.He(o.kind);ai.Ve._e(a,u)}}return this.In(i)}hn(e,t,r){return this.ln(e,t,r.position)}In(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Qe();return t}pn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new ho;c.seed(a.Qe()),ai.Ve._e(o,c.He(t.kind)),s.push(c)}return s}yn(e,t){return!!e.filters.find(r=>r instanceof ye&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=dc(e),i=po(e);return(t?r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.j()).next(s=>{const o=[];return E.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new uu(l.sequenceNumber,new Xt(Di(l.readTime),new q(Pn(l.documentKey)),l.largestBatchId)):uu.empty(),d=u.fields.map(([f,m])=>new JP(Ge.fromServerFormat(f),m));return new IA(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:fe(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=dc(e),s=po(e);return this.Tn(e).next(o=>i.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>E.forEach(a,c=>s.put(ry(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return E.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?E.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),E.forEach(a,c=>this.En(e,i,c).next(u=>{const l=this.An(s,c);return u.isEqual(l)?E.resolve():this.vn(e,s,c,u,l)}))))})}Rn(e,t,r,i){return fo(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.gn(r,t.key),documentKey:t.key.path.toArray()})}Pn(e,t,r,i){return fo(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.gn(r,t.key),t.key.path.toArray()])}En(e,t,r){const i=fo(e);let s=new Ue(fr);return i.X({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.gn(r,t)])},(o,a)=>{s=s.add(new ci(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}An(e,t){let r=new Ue(fr);const i=this.mn(t,e);if(i==null)return r;const s=Gh(t);if(s!=null){const o=e.data.field(s.fieldPath);if(ha(o))for(const a of o.arrayValue.values||[])r=r.add(new ci(t.indexId,e.key,this.dn(a),i))}else r=r.add(new ci(t.indexId,e.key,hc,i));return r}vn(e,t,r,i,s){N("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,c,u,l,h){const d=a.getIterator(),f=c.getIterator();let m=Gi(d),p=Gi(f);for(;m||p;){let y=!1,_=!1;if(m&&p){const T=u(m,p);T<0?_=!0:T>0&&(y=!0)}else m!=null?_=!0:y=!0;y?(l(p),p=Gi(f)):_?(h(m),m=Gi(d)):(m=Gi(d),p=Gi(f))}}(i,s,fr,a=>{o.push(this.Rn(e,t,r,a))},a=>{o.push(this.Pn(e,t,r,a))}),E.waitFor(o)}Tn(e){let t=1;return po(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>fr(o,a)).filter((o,a,c)=>!a||fr(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=fr(o,e),c=fr(o,t);if(a===0)i[0]=e.Je();else if(a>0&&c<0)i.push(o),i.push(o.Je());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,hc,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,hc,[]];s.push(IDBKeyRange.bound(a,c))}return s}bn(e,t){return fr(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(ly)}getMinOffset(e,t){return E.mapArray(this.cn(t),r=>this.an(e,r).next(i=>i||G())).next(ly)}}function uy(n){return pt(n,"collectionParents")}function fo(n){return pt(n,"indexEntries")}function dc(n){return pt(n,"indexConfiguration")}function po(n){return pt(n,"indexState")}function ly(n){te(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Lf(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Xt(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Kt{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Kt(e,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.X({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{te(a===1)}));const u=[];for(const l of t.mutations){const h=RA(e,l.key.path,t.batchId);s.push(i.delete(h)),u.push(l.key)}return E.waitFor(s).next(()=>u)}function mu(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw G();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kt.DEFAULT_COLLECTION_PERCENTILE=10,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Kt.DEFAULT=new Kt(41943040,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Kt.DISABLED=new Kt(-1,0,0);class pl{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Vn={}}static de(e,t,r,i){te(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new pl(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return pr(e).X({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=es(e),o=pr(e);return o.add({}).next(a=>{te(typeof a=="number");const c=new Hf(a,t,r,i),u=function(d,f,m){const p=m.baseMutations.map(_=>pa(d.fe,_)),y=m.mutations.map(_=>pa(d.fe,_));return{userId:f,batchId:m.batchId,localWriteTimeMs:m.localWriteTime.toMillis(),baseMutations:p,mutations:y}}(this.serializer,this.userId,c),l=[];let h=new Ue((d,f)=>fe(d.canonicalString(),f.canonicalString()));for(const d of i){const f=RA(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(f,nD))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Vn[a]=c.keys()}),E.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return pr(e).get(t).next(r=>r?(te(r.userId===this.userId),oi(this.serializer,r)):null)}Sn(e,t){return this.Vn[t]?E.resolve(this.Vn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Vn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return pr(e).X({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(te(a.batchId>=r),s=oi(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return pr(e).X({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return pr(e).j("userMutationsIndex",t).next(r=>r.map(i=>oi(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Rc(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return es(e).X({range:i},(o,a,c)=>{const[u,l,h]=o,d=Pn(l);if(u===this.userId&&t.path.isEqual(d))return pr(e).get(h).next(f=>{if(!f)throw G();te(f.userId===this.userId),s.push(oi(this.serializer,f))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ue(fe);const i=[];return t.forEach(s=>{const o=Rc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=es(e).X({range:a},(u,l,h)=>{const[d,f,m]=u,p=Pn(f);d===this.userId&&s.path.isEqual(p)?r=r.add(m):h.done()});i.push(c)}),E.waitFor(i).next(()=>this.Dn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=Rc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Ue(fe);return es(e).X({range:o},(c,u,l)=>{const[h,d,f]=c,m=Pn(d);h===this.userId&&r.isPrefixOf(m)?m.length===i&&(a=a.add(f)):l.done()}).next(()=>this.Dn(e,a))}Dn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(pr(e).get(s).next(o=>{if(o===null)throw G();te(o.userId===this.userId),r.push(oi(this.serializer,o))}))}),E.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return TI(e.ht,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Cn(t.batchId)}),E.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return E.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return es(e).X({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=Pn(s[1]);i.push(c)}else a.done()}).next(()=>{te(i.length===0)})})}containsKey(e,t){return SI(e,this.userId,t)}xn(e){return CI(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function SI(n,e,t){const r=Rc(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return es(n).X({range:s,Y:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function pr(n){return pt(n,"mutations")}function es(n){return pt(n,"documentMutations")}function CI(n){return pt(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Ni(0)}static Mn(){return new Ni(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.$n(e).next(t=>{const r=new Ni(t.highestTargetId);return t.highestTargetId=r.next(),this.On(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.$n(e).next(t=>ee.fromTimestamp(new Ve(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.$n(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.$n(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.On(e,i)))}addTargetData(e,t){return this.Fn(e,t).next(()=>this.$n(e).next(r=>(r.targetCount+=1,this.Bn(t,r),this.On(e,r))))}updateTargetData(e,t){return this.Fn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Wi(e).delete(t.targetId)).next(()=>this.$n(e)).next(r=>(te(r.targetCount>0),r.targetCount-=1,this.On(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return Wi(e).X((o,a)=>{const c=Co(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>E.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Wi(e).X((r,i)=>{const s=Co(i);t(s)})}$n(e){return dy(e).get("targetGlobalKey").next(t=>(te(t!==null),t))}On(e,t){return dy(e).put("targetGlobalKey",t)}Fn(e,t){return Wi(e).put(II(this.serializer,t))}Bn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.$n(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Ri(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Wi(e).X({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=Co(a);Ma(t,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=vr(e);return t.forEach(o=>{const a=Bt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),E.waitFor(i)}removeMatchingKeys(e,t,r){const i=vr(e);return E.forEach(t,s=>{const o=Bt(s.path);return E.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=vr(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=vr(e);let s=pe();return i.X({range:r,Y:!0},(o,a,c)=>{const u=Pn(o[1]),l=new q(u);s=s.add(l)}).next(()=>s)}containsKey(e,t){const r=Bt(t.path),i=IDBKeyRange.bound([r],[AA(r)],!1,!0);let s=0;return vr(e).X({index:"documentTargetsIndex",Y:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}le(e,t){return Wi(e).get(t).next(r=>r?Co(r):null)}}function Wi(n){return pt(n,"targets")}function dy(n){return pt(n,"targetGlobal")}function vr(n){return pt(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy([n,e],[t,r]){const i=fe(n,t);return i===0?fe(e,r):i}class gN{constructor(e){this.Ln=e,this.buffer=new Ue(fy),this.qn=0}Un(){return++this.qn}Kn(e){const t=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();fy(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class yN{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}Qn(e){N("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Hr(t)?N("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Qr(t)}await this.Qn(3e5)})}}class vN{constructor(e,t){this.jn=e,this.params=t}calculateTargetCount(e,t){return this.jn.zn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return E.resolve($t.ct);const r=new gN(t);return this.jn.forEachTarget(e,i=>r.Kn(i.sequenceNumber)).next(()=>this.jn.Wn(e,i=>r.Kn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),E.resolve(hy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),hy):this.Hn(e,t))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,t){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),zh()<=we.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),E.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function wN(n,e){return new vN(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,t){this.db=e,this.garbageCollector=wN(this,t)}zn(e){const t=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Jn(e){let t=0;return this.Wn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Wn(e,t){return this.Yn(e,(r,i)=>t(i))}addReference(e,t,r){return fc(e,r)}removeReference(e,t,r){return fc(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return fc(e,t)}Xn(e,t){return function(r,i){let s=!1;return CI(r).Z(o=>SI(r,o,i).next(a=>(a&&(s=!0),E.resolve(!a)))).next(()=>s)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Yn(e,(o,a)=>{if(a<=t){const c=this.Xn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,ee.min()),vr(e).delete([0,Bt(o.path)])))});i.push(c)}}).next(()=>E.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return fc(e,t)}Yn(e,t){const r=vr(e);let i,s=$t.ct;return r.X({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==$t.ct&&t(new q(Pn(i)),s),s=u,i=c):s=$t.ct}).next(()=>{s!==$t.ct&&t(new q(Pn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function fc(n,e){return vr(n).put(function(t,r){return{targetId:0,path:Bt(t.path),sequenceNumber:r}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(){this.changes=new zr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Fe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?E.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Zr(e).put(r)}removeEntry(e,t,r){return Zr(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],fu(s),o[o.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Zn(e,r)))}getEntry(e,t){let r=Fe.newInvalidDocument(t);return Zr(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(mo(t))},(i,s)=>{r=this.ts(t,s)}).next(()=>r)}es(e,t){let r={size:0,document:Fe.newInvalidDocument(t)};return Zr(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(mo(t))},(i,s)=>{r={document:this.ts(t,s),size:mu(s)}}).next(()=>r)}getEntries(e,t){let r=Ht();return this.ns(e,t,(i,s)=>{const o=this.ts(i,s);r=r.insert(i,o)}).next(()=>r)}ss(e,t){let r=Ht(),i=new Ne(q.comparator);return this.ns(e,t,(s,o)=>{const a=this.ts(s,o);r=r.insert(s,a),i=i.insert(s,mu(o))}).next(()=>({documents:r,rs:i}))}ns(e,t,r){if(t.isEmpty())return E.resolve();let i=new Ue(gy);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(mo(i.first()),mo(i.last())),o=i.getIterator();let a=o.getNext();return Zr(e).X({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=q.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&gy(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.G(mo(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i){const s=t.path,o=[s.popLast().toArray(),s.lastSegment(),fu(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Zr(e).j(IDBKeyRange.bound(o,a,!0)).next(c=>{let u=Ht();for(const l of c){const h=this.ts(q.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);h.isFoundDocument()&&(Ba(t,h)||i.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,t,r,i){let s=Ht();const o=my(t,r),a=my(t,Xt.max());return Zr(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.ts(q.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new IN(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return py(e).get("remoteDocumentGlobalKey").next(t=>(te(!!t),t))}Zn(e,t){return py(e).put("remoteDocumentGlobalKey",t)}ts(e,t){if(t){const r=sN(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(ee.min())))return r}return Fe.newInvalidDocument(e)}}function kI(n){return new AN(n)}class IN extends RI{constructor(e,t){super(),this.os=e,this.trackRemovals=t,this.us=new zr(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new Ue((s,o)=>fe(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.us.get(s);if(t.push(this.os.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=ty(this.os.serializer,o);i=i.add(s.path.popLast());const u=mu(c);r+=u-a.size,t.push(this.os.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=ty(this.os.serializer,o.convertToNoDocument(ee.min()));t.push(this.os.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.os.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.os.updateMetadata(e,r)),E.waitFor(t)}getFromCache(e,t){return this.os.es(e,t).next(r=>(this.us.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.os.ss(e,t).next(({documents:r,rs:i})=>(i.forEach((s,o)=>{this.us.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function py(n){return pt(n,"remoteDocumentGlobal")}function Zr(n){return pt(n,"remoteDocumentsV14")}function mo(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function my(n,e){const t=e.documentKey.path.toArray();return[n,fu(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function gy(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=fe(t[s],r[s]),i)return i;return i=fe(t.length,r.length),i||(i=fe(t[t.length-2],r[r.length-2]),i||fe(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Lo(r.mutation,i,Qt.empty(),Ve.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,pe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=pe()){const i=Dn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=To();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Dn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,pe()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=Ht();const o=Mo(),a=Mo();return t.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof cr)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Lo(l.mutation,u,l.mutation.getFieldMask(),Ve.now())):o.set(u.key,Qt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new EN(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=Mo();let i=new Ne((o,a)=>o-a),s=pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||Qt.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||pe()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=WA();l.forEach(d=>{if(!s.has(d)){const f=rI(t.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return E.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(i){return q.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):qf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):E.resolve(Dn());let a=-1,c=s;return o.next(u=>E.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?E.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,pe())).next(l=>({batchId:a,changes:GA(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next(r=>{let i=To();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const i=t.collectionGroup;let s=To();return this.indexManager.getCollectionParents(e,i).next(o=>E.forEach(o,a=>{const c=function(u,l){return new ar(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i))).next(s=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,Fe.newInvalidDocument(u)))});let o=To();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Lo(u.mutation,c,Qt.empty(),Ve.now()),Ba(t,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return E.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var r;return this.cs.set(t.id,{id:(r=t).id,version:r.version,createTime:We(r.createTime)}),E.resolve()}getNamedQuery(e,t){return E.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(r){return{name:r.name,query:Xf(r.bundledQuery),readTime:We(r.readTime)}}(t)),E.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(){this.overlays=new Ne(q.comparator),this.ls=new Map}getOverlay(e,t){return E.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Dn();return E.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.we(e,t,s)}),E.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),E.resolve()}getOverlaysForCollection(e,t,r){const i=Dn(),s=t.length+1,o=new q(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return E.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Ne((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=Dn(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Dn(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return E.resolve(a)}we(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Gf(t,r));let s=this.ls.get(t);s===void 0&&(s=pe(),this.ls.set(t,s)),this.ls.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(){this.fs=new Ue(ot.ds),this.ws=new Ue(ot._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const r=new ot(e,t);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.ys(new ot(e,t))}ps(e,t){e.forEach(r=>this.removeReference(r,t))}Is(e){const t=new q(new _e([])),r=new ot(t,e),i=new ot(t,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new q(new _e([])),r=new ot(t,e),i=new ot(t,e+1);let s=pe();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new ot(e,0),r=this.fs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ot{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return q.comparator(e.key,t.key)||fe(e.As,t.As)}static _s(e,t){return fe(e.As,t.As)||q.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new Ue(ot.ds)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Hf(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new ot(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,t){return E.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.bs(r),s=i<0?0:i;return E.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ot(t,0),i=new ot(t,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),E.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ue(fe);return t.forEach(i=>{const s=new ot(i,0),o=new ot(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),E.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new ot(new q(s),0);let a=new Ue(fe);return this.Rs.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.As)),!0)},o),E.resolve(this.Vs(a))}Vs(e){const t=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){te(this.Ss(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return E.forEach(t.mutations,i=>{const s=new ot(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,t){const r=new ot(t,0),i=this.Rs.firstAfterOrEqual(r);return E.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}Ss(e,t){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e){this.Ds=e,this.docs=new Ne(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return E.resolve(r?r.document.mutableCopy():Fe.newInvalidDocument(t))}getEntries(e,t){let r=Ht();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Fe.newInvalidDocument(i))}),E.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Ht();const o=t.path,a=new q(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Lf(bA(l),r)<=0||(i.has(l.key)||Ba(t,l))&&(s=s.insert(l.key,l.mutableCopy()))}return E.resolve(s)}getAllFromCollectionGroup(e,t,r,i){G()}Cs(e,t){return E.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new RN(this)}getSize(e){return E.resolve(this.size)}}class RN extends RI{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),E.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e){this.persistence=e,this.xs=new zr(t=>Ri(t),Ma),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Ns=0,this.ks=new tp,this.targetCount=0,this.Ms=Ni.kn()}forEachTarget(e,t){return this.xs.forEach((r,i)=>t(i)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Ns&&(this.Ns=t),E.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new Ni(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,E.resolve()}updateTargetData(e,t){return this.Fn(t),E.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),E.waitFor(s).next(()=>i)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,t){const r=this.xs.get(t)||null;return E.resolve(r)}addMatchingKeys(e,t,r){return this.ks.gs(t,r),E.resolve()}removeMatchingKeys(e,t,r){this.ks.ps(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),E.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),E.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ks.Es(t);return E.resolve(r)}containsKey(e,t){return E.resolve(this.ks.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e,t){this.$s={},this.overlays={},this.Os=new $t(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new kN(this),this.indexManager=new fN,this.remoteDocumentCache=function(r){return new CN(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new AI(t),this.qs=new bN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new TN,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.$s[e.toKey()];return r||(r=new SN(t,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,r){N("MemoryPersistence","Starting transaction:",e);const i=new xN(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,t){return E.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,t)))}}class xN extends SA{constructor(e){super(),this.currentSequenceNumber=e}}class ml{constructor(e){this.persistence=e,this.Qs=new tp,this.js=null}static zs(e){return new ml(e)}get Ws(){if(this.js)return this.js;throw G()}addReference(e,t,r){return this.Qs.addReference(r,t),this.Ws.delete(r.toString()),E.resolve()}removeReference(e,t,r){return this.Qs.removeReference(r,t),this.Ws.add(r.toString()),E.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),E.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Ws,r=>{const i=q.fromPath(r);return this.Hs(e,i).next(s=>{s||t.removeEntry(i,ee.min())})}).next(()=>(this.js=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hs(e,t).next(r=>{r?this.Ws.delete(t.toString()):this.Ws.add(t.toString())})}Ls(e){return 0}Hs(e,t){return E.or([()=>E.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e){this.serializer=e}O(e,t,r,i){const s=new cl("createOrUpgrade",t);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Dg,{unique:!0}),a.createObjectStore("documentMutations")}(e),yy(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=E.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),yy(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ee.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").j().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Dg,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return E.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Ys(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(s)))),r<7&&i>=7&&(o=o.next(()=>this.Zs(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ei(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:pD});c.createIndex("collectionPathOverlayIndex",mD,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",gD,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:rD});c.createIndex("documentKeyIndex",iD),c.createIndex("collectionGroupIndex",sD)}(e)).next(()=>this.ni(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:lD}).createIndex("sequenceNumberIndex",hD,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:dD}).createIndex("documentKeyIndex",fD,{unique:!1})}(e))),o}Xs(e){let t=0;return e.store("remoteDocuments").X((r,i)=>{t+=mu(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Ys(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.j().next(i=>E.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>E.forEach(a,c=>{te(c.userId===s.userId);const u=oi(this.serializer,c);return TI(e,s.userId,u).next(()=>{})}))}))}Zs(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.X((o,a)=>{const c=new _e(o),u=function(l){return[0,Bt(l)]}(c);s.push(t.get(u).next(l=>l?E.resolve():(h=>t.put({targetId:0,path:Bt(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>E.waitFor(s))})}ti(e,t){e.createObjectStore("collectionParents",{keyPath:uD});const r=t.store("collectionParents"),i=new ep,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Bt(c)})}};return t.store("remoteDocuments").X({Y:!0},(o,a)=>{const c=new _e(o);return s(c.popLast())}).next(()=>t.store("documentMutations").X({Y:!0},([o,a,c],u)=>{const l=Pn(a);return s(l.popLast())}))}ei(e){const t=e.store("targets");return t.X((r,i)=>{const s=Co(i),o=II(this.serializer,s);return t.put(o)})}ni(e,t){const r=t.store("remoteDocuments"),i=[];return r.X((s,o)=>{const a=t.store("remoteDocumentsV14"),c=(u=o,u.document?new q(_e.fromString(u.document.name).popFirst(5)):u.noDocument?q.fromSegments(u.noDocument.path):u.unknownDocument?q.fromSegments(u.unknownDocument.path):G()).path.toArray();var u;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(l))}).next(()=>E.waitFor(i))}si(e,t){const r=t.store("mutations"),i=kI(this.serializer),s=new PI(ml.zs,this.serializer.fe);return r.j().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:pe();oi(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),E.forEach(a,(c,u)=>{const l=new at(u),h=fl.de(this.serializer,l),d=s.getIndexManager(l),f=pl.de(l,this.serializer,d,s.referenceDelegate);return new xI(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Wh(t,$t.ct),c).next()})})}}function yy(n){n.createObjectStore("targetDocuments",{keyPath:aD}).createIndex("documentTargetsIndex",cD,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",oD,{unique:!0}),n.createObjectStore("targetGlobal")}const oh="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class np{constructor(e,t,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ii=s,this.window=o,this.document=a,this.ri=u,this.oi=l,this.ui=h,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=d=>Promise.resolve(),!np.D())throw new k(b.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new _N(this,i),this.di=t+"main",this.serializer=new AI(c),this.wi=new hn(this.di,this.ui,new PN(this.serializer)),this.Bs=new mN(this.referenceDelegate,this.serializer),this.remoteDocumentCache=kI(this.serializer),this.qs=new oN,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,l===!1&&ze("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new k(b.FAILED_PRECONDITION,oh);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Bs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new $t(e,this.ri)}).then(()=>{this.Fs=!0}).catch(e=>(this.wi&&this.wi.close(),Promise.reject(e)))}Ii(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>pc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(e).next(t=>{t||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(e)).next(t=>this.isPrimary&&!t?this.Ai(e).next(()=>!1):!!t&&this.vi(e).next(()=>!0))).catch(e=>{if(Hr(e))return N("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return N("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Ti(e){return go(e).get("owner").next(t=>E.resolve(this.Ri(t)))}Pi(e){return pc(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=pt(t,"clientMetadata");return r.j().next(i=>{const s=this.Si(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return E.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._i)for(const t of e)this._i.removeItem(this.Di(t.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?E.resolve(!0):go(e).get("owner").next(t=>{if(t!==null&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)){if(this.Ri(t)&&this.networkEnabled)return!0;if(!this.Ri(t)){if(!t.allowTabSynchronization)throw new k(b.FAILED_PRECONDITION,oh);return!1}}return!(!this.networkEnabled||!this.inForeground)||pc(e).j().next(r=>this.Si(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&N("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Wh(e,$t.ct);return this.Ai(t).next(()=>this.Pi(t))}),this.wi.close(),this.Mi()}Si(e,t){return e.filter(r=>this.Vi(r.updateTimeMs,t)&&!this.Ci(r.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>pc(e).j().next(t=>this.Si(t,18e5).map(r=>r.clientId)))}get started(){return this.Fs}getMutationQueue(e,t){return pl.de(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new pN(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return fl.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,t,r){N("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=(o=this.ui)===15?vD:o===14?PA:o===13?xA:o===12?yD:o===11?kA:void G();var o;let a;return this.wi.runTransaction(e,i,s,c=>(a=new Wh(c,this.Os?this.Os.next():$t.ct),t==="readwrite-primary"?this.Ti(a).next(u=>!!u||this.Ei(a)).next(u=>{if(!u)throw ze(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new k(b.FAILED_PRECONDITION,TA);return r(a)}).next(u=>this.vi(a).next(()=>u)):this.Oi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Oi(e){return go(e).get("owner").next(t=>{if(t!==null&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)&&!this.Ri(t)&&!(this.oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new k(b.FAILED_PRECONDITION,oh)})}vi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return go(e).put("owner",t)}static D(){return hn.D()}Ai(e){const t=go(e);return t.get("owner").next(r=>this.Ri(r)?(N("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):E.resolve())}Vi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(ze(`Detected an update time that is in the future: ${e} > ${r}`),!1))}gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground=this.document.visibilityState==="visible")}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const t=/(?:Version|Mobile)\/1[456]/;MT()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var t;try{const r=((t=this._i)===null||t===void 0?void 0:t.getItem(this.Di(e)))!==null;return N("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return ze("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){ze("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch{}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function go(n){return pt(n,"owner")}function pc(n){return pt(n,"clientMetadata")}function rp(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Fi=r,this.Bi=i}static Li(e,t){let r=pe(),i=pe();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ip(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,r,i){return this.Ki(e,t).next(s=>s||this.Gi(e,t,i,r)).next(s=>s||this.Qi(e,t))}Ki(e,t){if($g(t))return E.resolve(null);let r=Gt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=du(t,null,"F"),r=Gt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=pe(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.ji(t,a);return this.zi(t,u,o,c.readTime)?this.Ki(e,du(t,null,"F")):this.Wi(e,u,t,c)}))})))}Gi(e,t,r,i){return $g(t)||i.isEqual(ee.min())?this.Qi(e,t):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(t,s);return this.zi(t,o,r,i)?this.Qi(e,t):(zh()<=we.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),nd(t)),this.Wi(e,o,t,EA(i,-1)))})}ji(e,t){let r=new Ue(HA(e));return t.forEach((i,s)=>{Ba(e,s)&&(r=r.add(s))}),r}zi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,t){return zh()<=we.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",nd(t)),this.Ui.getDocumentsMatchingQuery(e,t,Xt.min())}Wi(e,t,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e,t,r,i){this.persistence=e,this.Hi=t,this.serializer=i,this.Ji=new Ne(fe),this.Yi=new zr(s=>Ri(s),Ma),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xI(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function NI(n,e,t,r){return new DN(n,e,t,r)}async function OI(n,e){const t=$(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.tr(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=pe();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function NN(n,e){const t=$(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=E.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(m=>{const p=c.docVersions.get(f);te(p!==null),m.version.compareTo(p)<0&&(l.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),u.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=pe();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function FI(n){const e=$(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Bs.getLastRemoteSnapshotVersion(t))}function ON(n,e){const t=$(n),r=e.snapshotVersion;let i=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Zi.newChangeBuffer({trackRemovals:!0});i=t.Ji;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(t.Bs.removeMatchingKeys(s,l.removedDocuments,h).next(()=>t.Bs.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(rt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(m,p,y){return m.resumeToken.approximateByteSize()===0||p.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(d,f,l)&&a.push(t.Bs.updateTargetData(s,f))});let c=Ht(),u=pe();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(UI(s,o,e.documentUpdates).next(l=>{c=l.nr,u=l.sr})),!r.isEqual(ee.min())){const l=t.Bs.getLastRemoteSnapshotVersion(s).next(h=>t.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return E.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(t.Ji=i,s))}function UI(n,e,t){let r=pe(),i=pe();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Ht();return t.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(ee.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):N("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{nr:o,sr:i}})}function FN(n,e){const t=$(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ps(n,e){const t=$(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Bs.getTargetData(r,e).next(s=>s?(i=s,E.resolve(i)):t.Bs.allocateTargetId(r).next(o=>(i=new Jn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(r.targetId,r),t.Yi.set(e,r.targetId)),r})}async function Ds(n,e,t){const r=$(n),i=r.Ji.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Hr(o))throw o;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function gu(n,e,t){const r=$(n);let i=ee.min(),s=pe();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=$(a),h=l.Yi.get(u);return h!==void 0?E.resolve(l.Ji.get(h)):l.Bs.getTargetData(c,u)}(r,o,Gt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,t?i:ee.min(),t?s:pe())).next(a=>(BI(r,QA(e),a),{documents:a,ir:s})))}function MI(n,e){const t=$(n),r=$(t.Bs),i=t.Ji.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.le(s,e).next(o=>o?o.target:null))}function LI(n,e){const t=$(n),r=t.Xi.get(e)||ee.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Zi.getAllFromCollectionGroup(i,e,EA(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(BI(t,e,i),i))}function BI(n,e,t){let r=n.Xi.get(e)||ee.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Xi.set(e,r)}async function UN(n,e,t,r){const i=$(n);let s=pe(),o=Ht();for(const u of t){const l=e.rr(u.metadata.name);u.document&&(s=s.add(l));const h=e.ur(u);h.setReadTime(e.cr(u.metadata.readTime)),o=o.insert(l,h)}const a=i.Zi.newChangeBuffer({trackRemovals:!0}),c=await Ps(i,function(u){return Gt(Gs(_e.fromString(`__bundle__/docs/${u}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>UI(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.Bs.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.Bs.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.nr,l.sr)).next(()=>l.nr)))}async function MN(n,e,t=pe()){const r=await Ps(n,Gt(Xf(e.bundledQuery))),i=$(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=We(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.qs.saveNamedQuery(s,e);const a=r.withResumeToken(rt.EMPTY_BYTE_STRING,o);return i.Ji=i.Ji.insert(a.targetId,a),i.Bs.updateTargetData(s,a).next(()=>i.Bs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Bs.addMatchingKeys(s,t,r.targetId)).next(()=>i.qs.saveNamedQuery(s,e))})}function vy(n,e){return`firestore_clients_${n}_${e}`}function wy(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function ah(n,e){return`firestore_targets_${n}_${e}`}class yu{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static ar(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new k(i.error.code,i.error.message))),o?new yu(e,t,i.state,s):(ze("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Bo{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static ar(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new k(r.error.code,r.error.message))),s?new Bo(e,r.state,i):(ze("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class vu{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static ar(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=$f();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=CA(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new vu(e,s):(ze("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class sp{constructor(e,t){this.clientId=e,this.onlineState=t}static ar(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new sp(t.clientId,t.onlineState):(ze("SharedClientState",`Failed to parse online state: ${e}`),null)}}class ud{constructor(){this.activeTargetIds=$f()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ch{constructor(e,t,r,i,s){this.window=e,this.ii=t,this.persistenceKey=r,this.wr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new Ne(fe),this.started=!1,this.yr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.pr=vy(this.persistenceKey,this.wr),this.Ir=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.gr=this.gr.insert(this.wr,new ud),this.Tr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Er=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ar=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Rr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const r of e){if(r===this.wr)continue;const i=this.getItem(vy(this.persistenceKey,r));if(i){const s=vu.ar(r,i);s&&(this.gr=this.gr.insert(s.clientId,s))}}this.Pr();const t=this.storage.getItem(this.vr);if(t){const r=this.br(t);r&&this.Vr(r)}for(const r of this.yr)this.mr(r);this.yr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let t=!1;return this.gr.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,t,r){this.Dr(e,t,r),this.Cr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(ah(this.persistenceKey,e));if(r){const i=Bo.ar(e,r);i&&(t=i.state)}}return this.Nr.lr(e),this.Pr(),t}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ah(this.persistenceKey,e))}updateQueryState(e,t,r){this.kr(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Cr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return N("SharedClientState","READ",e,t),t}setItem(e,t){N("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){N("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){const t=e;if(t.storageArea===this.storage){if(N("SharedClientState","EVENT",t.key,t.newValue),t.key===this.pr)return void ze("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Tr.test(t.key)){if(t.newValue==null){const r=this.Or(t.key);return this.Fr(r,null)}{const r=this.Br(t.key,t.newValue);if(r)return this.Fr(r.clientId,r)}}else if(this.Er.test(t.key)){if(t.newValue!==null){const r=this.Lr(t.key,t.newValue);if(r)return this.qr(r)}}else if(this.Ar.test(t.key)){if(t.newValue!==null){const r=this.Ur(t.key,t.newValue);if(r)return this.Kr(r)}}else if(t.key===this.vr){if(t.newValue!==null){const r=this.br(t.newValue);if(r)return this.Vr(r)}}else if(t.key===this.Ir){const r=function(i){let s=$t.ct;if(i!=null)try{const o=JSON.parse(i);te(typeof o=="number"),s=o}catch(o){ze("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(t.newValue);r!==$t.ct&&this.sequenceNumberHandler(r)}else if(t.key===this.Rr){const r=this.Gr(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Qr(i)))}}}else this.yr.push(t)})}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,t,r){const i=new yu(this.currentUser,e,t,r),s=wy(this.persistenceKey,this.currentUser,e);this.setItem(s,i.hr())}Cr(e){const t=wy(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Mr(e){const t={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(t))}kr(e,t,r){const i=ah(this.persistenceKey,e),s=new Bo(e,t,r);this.setItem(i,s.hr())}$r(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Rr,t)}Or(e){const t=this.Tr.exec(e);return t?t[1]:null}Br(e,t){const r=this.Or(e);return vu.ar(r,t)}Lr(e,t){const r=this.Er.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return yu.ar(new at(s),i,t)}Ur(e,t){const r=this.Ar.exec(e),i=Number(r[1]);return Bo.ar(i,t)}br(e){return sp.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);N("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,t){const r=t?this.gr.insert(e,t):this.gr.remove(e),i=this.Sr(this.gr),s=this.Sr(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.Wr(o,a).then(()=>{this.gr=r})}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let t=$f();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class VI{constructor(){this.Hr=new ud,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,r){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new ud,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mc=null;function uh(){return mc===null?mc=268435456+Math.round(2147483648*Math.random()):mc++,"0x"+mc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="WebChannelConnection";class jN extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,r,i,s){const o=uh(),a=this.To(e,t);N("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.Eo(c,i,s),this.Ao(e,a,c,r).then(u=>(N("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw yn("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,t,r,i,s,o){return this.Io(e,t,r,i,s)}Eo(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+zs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,t){const r=BN[e];return`${this.mo}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,r,i){const s=uh();return new Promise((o,a)=>{const c=new MP;c.setWithCredentials(!0),c.listenOnce(OP.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ih.NO_ERROR:const l=c.getResponseJson();N(Ct,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case ih.TIMEOUT:N(Ct,`RPC '${e}' ${s} timed out`),a(new k(b.DEADLINE_EXCEEDED,"Request time out"));break;case ih.HTTP_ERROR:const h=c.getStatus();if(N(Ct,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(p){const y=p.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(y)>=0?y:b.UNKNOWN}(f.status);a(new k(m,f.message))}else a(new k(b.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new k(b.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{N(Ct,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);N(Ct,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",u,r,15)})}Ro(e,t,r){const i=uh(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=DP(),a=NP(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new UP({})),this.Eo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const l=s.join("");N(Ct,`Creating RPC '${e}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const m=new VN({ro:y=>{f?N(Ct,`Not sending because RPC '${e}' stream ${i} is closed:`,y):(d||(N(Ct,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),N(Ct,`RPC '${e}' stream ${i} sending:`,y),h.send(y))},oo:()=>h.close()}),p=(y,_,T)=>{y.listen(_,U=>{try{T(U)}catch(P){setTimeout(()=>{throw P},0)}})};return p(h,cc.EventType.OPEN,()=>{f||N(Ct,`RPC '${e}' stream ${i} transport opened.`)}),p(h,cc.EventType.CLOSE,()=>{f||(f=!0,N(Ct,`RPC '${e}' stream ${i} transport closed`),m.wo())}),p(h,cc.EventType.ERROR,y=>{f||(f=!0,yn(Ct,`RPC '${e}' stream ${i} transport errored:`,y),m.wo(new k(b.UNAVAILABLE,"The operation could not be completed")))}),p(h,cc.EventType.MESSAGE,y=>{var _;if(!f){const T=y.data[0];te(!!T);const U=T,P=U.error||((_=U[0])===null||_===void 0?void 0:_.error);if(P){N(Ct,`RPC '${e}' stream ${i} received error:`,P);const he=P.status;let x=function(oe){const Et=Xe[oe];if(Et!==void 0)return oI(Et)}(he),Ee=P.message;x===void 0&&(x=b.INTERNAL,Ee="Unknown error status: "+he+" with message "+P.message),f=!0,m.wo(new k(x,Ee)),h.close()}else N(Ct,`RPC '${e}' stream ${i} received:`,T),m._o(T)}}),p(a,FP.STAT_EVENT,y=>{y.stat===Rg.PROXY?N(Ct,`RPC '${e}' stream ${i} detected buffering proxy`):y.stat===Rg.NOPROXY&&N(Ct,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.fo()},0),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(){return typeof window<"u"?window:null}function Nc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(n){return new WD(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=t,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,t-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,t,r,i,s,o,a,c){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new op(e,t)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():t&&t.code===b.RESOURCE_EXHAUSTED?(ze(t.toString()),ze("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===t&&this.Zo(r,i)},r=>{e(()=>{const i=new k(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,t){const r=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.Fo===e?t():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class KN extends KI{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=XD(this.serializer,e),r=function(i){if(!("targetChange"in i))return ee.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?ee.min():s.readTime?We(s.readTime):ee.min()}(e);return this.listener.nu(t,r)}su(e){const t={};t.database=fa(this.serializer),t.addTarget=function(i,s){let o;const a=s.target;if(o=lu(a)?{documents:mI(i,a)}:{query:gI(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=lI(i,s.resumeToken);const c=rd(i,s.expectedCount);c!==null&&(o.expectedCount=c)}else if(s.snapshotVersion.compareTo(ee.min())>0){o.readTime=xs(i,s.snapshotVersion.toTimestamp());const c=rd(i,s.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const r=eN(this.serializer,e);r&&(t.labels=r),this.Wo(t)}iu(e){const t={};t.database=fa(this.serializer),t.removeTarget=e,this.Wo(t)}}class qN extends KI{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=ZD(e.writeResults,e.commitTime),r=We(e.commitTime);return this.listener.cu(r,t)}return te(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=fa(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>pa(this.serializer,r))};this.Wo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new k(b.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new k(b.UNKNOWN,i.toString())})}vo(e,t,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new k(b.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class QN{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(ze(t),this.mu=!1):N("OnlineStateTracker",t)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{Gr(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=$(a);c.vu.add(4),await Ys(c),c.bu.set("Unknown"),c.vu.delete(4),await $a(c)}(this))})}),this.bu=new QN(r,i)}}async function $a(n){if(Gr(n))for(const e of n.Ru)await e(!0)}async function Ys(n){for(const e of n.Ru)await e(!1)}function gl(n,e){const t=$(n);t.Au.has(e.targetId)||(t.Au.set(e.targetId,e),up(t)?cp(t):Zs(t).Ko()&&ap(t,e))}function ma(n,e){const t=$(n),r=Zs(t);t.Au.delete(e),r.Ko()&&qI(t,e),t.Au.size===0&&(r.Ko()?r.jo():Gr(t)&&t.bu.set("Unknown"))}function ap(n,e){if(n.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Zs(n).su(e)}function qI(n,e){n.Vu.qt(e),Zs(n).iu(e)}function cp(n){n.Vu=new QD({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),le:e=>n.Au.get(e)||null,ue:()=>n.datastore.serializer.databaseId}),Zs(n).start(),n.bu.gu()}function up(n){return Gr(n)&&!Zs(n).Uo()&&n.Au.size>0}function Gr(n){return $(n).vu.size===0}function $I(n){n.Vu=void 0}async function zN(n){n.Au.forEach((e,t)=>{ap(n,e)})}async function GN(n,e){$I(n),up(n)?(n.bu.Iu(e),cp(n)):n.bu.set("Unknown")}async function WN(n,e,t){if(n.bu.set("Online"),e instanceof uI&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(n,e)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await wu(n,r)}else if(e instanceof Dc?n.Vu.Ht(e):e instanceof cI?n.Vu.ne(e):n.Vu.Xt(e),!t.isEqual(ee.min()))try{const r=await FI(n.localStore);t.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(c);u&&i.Au.set(c,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,c)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(rt.EMPTY_BYTE_STRING,u.snapshotVersion)),qI(i,a);const l=new Jn(u.target,a,c,u.sequenceNumber);ap(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await wu(n,r)}}async function wu(n,e,t){if(!Hr(e))throw e;n.vu.add(1),await Ys(n),n.bu.set("Offline"),t||(t=()=>FI(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await t(),n.vu.delete(1),await $a(n)})}function QI(n,e){return e().catch(t=>wu(n,t,e))}async function Xs(n){const e=$(n),t=Lr(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;JN(e);)try{const i=await FN(e.localStore,r);if(i===null){e.Eu.length===0&&t.jo();break}r=i.batchId,YN(e,i)}catch(i){await wu(e,i)}HI(e)&&zI(e)}function JN(n){return Gr(n)&&n.Eu.length<10}function YN(n,e){n.Eu.push(e);const t=Lr(n);t.Ko()&&t.ou&&t.uu(e.mutations)}function HI(n){return Gr(n)&&!Lr(n).Uo()&&n.Eu.length>0}function zI(n){Lr(n).start()}async function XN(n){Lr(n).hu()}async function ZN(n){const e=Lr(n);for(const t of n.Eu)e.uu(t.mutations)}async function eO(n,e,t){const r=n.Eu.shift(),i=zf.from(r,e,t);await QI(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Xs(n)}async function tO(n,e){e&&Lr(n).ou&&await async function(t,r){if(i=r.code,sI(i)&&i!==b.ABORTED){const s=t.Eu.shift();Lr(t).Qo(),await QI(t,()=>t.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Xs(t)}var i}(n,e),HI(n)&&zI(n)}async function Ay(n,e){const t=$(n);t.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const r=Gr(t);t.vu.add(3),await Ys(t),r&&t.bu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.vu.delete(3),await $a(t)}async function ld(n,e){const t=$(n);e?(t.vu.delete(2),await $a(t)):e||(t.vu.add(2),await Ys(t),t.bu.set("Unknown"))}function Zs(n){return n.Su||(n.Su=function(e,t,r){const i=$(e);return i.fu(),new KN(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{uo:zN.bind(null,n),ao:GN.bind(null,n),nu:WN.bind(null,n)}),n.Ru.push(async e=>{e?(n.Su.Qo(),up(n)?cp(n):n.bu.set("Unknown")):(await n.Su.stop(),$I(n))})),n.Su}function Lr(n){return n.Du||(n.Du=function(e,t,r){const i=$(e);return i.fu(),new qN(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{uo:XN.bind(null,n),ao:tO.bind(null,n),au:ZN.bind(null,n),cu:eO.bind(null,n)}),n.Ru.push(async e=>{e?(n.Du.Qo(),await Xs(n)):(await n.Du.stop(),n.Eu.length>0&&(N("RemoteStore",`Stopping write stream with ${n.Eu.length} pending writes`),n.Eu=[]))})),n.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new lp(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function eo(n,e){if(ze("AsyncQueue",`${e}: ${n}`),Hr(n))return new k(b.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.comparator=e?(t,r)=>e(t,r)||q.comparator(t.key,r.key):(t,r)=>q.comparator(t.key,r.key),this.keyedMap=To(),this.sortedSet=new Ne(this.comparator)}static emptySet(e){return new ms(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ms)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new ms;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(){this.Cu=new Ne(q.comparator)}track(e){const t=e.doc.key,r=this.Cu.get(t);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(t,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(t):e.type===1&&r.type===2?this.Cu=this.Cu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):G():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal((t,r)=>{e.push(r)}),e}}class Ns{constructor(e,t,r,i,s,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Ns(e,t,ms.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&La(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(){this.Nu=void 0,this.listeners=[]}}class rO{constructor(){this.queries=new zr(e=>$A(e),La),this.onlineState="Unknown",this.ku=new Set}}async function hp(n,e){const t=$(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new nO),i)try{s.Nu=await t.onListen(r)}catch(o){const a=eo(o,`Initialization of query '${nd(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.Mu(t.onlineState),s.Nu&&e.$u(s.Nu)&&fp(t)}async function dp(n,e){const t=$(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function iO(n,e){const t=$(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&fp(t)}function sO(n,e,t){const r=$(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function fp(n){n.ku.forEach(e=>{e.next()})}class pp{constructor(e,t,r){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ns(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Uu(e){e=Ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e,t){this.Gu=e,this.byteLength=t}Qu(){return"metadata"in this.Gu}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e){this.serializer=e}rr(e){return Fn(this.serializer,e)}ur(e){return e.metadata.exists?pI(this.serializer,e.document,!1):Fe.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return We(e)}}class aO{constructor(e,t,r){this.ju=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=GI(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++t;const r=_e.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Wu(e){const t=new Map,r=new Ey(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.rr(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||pe()).add(s);t.set(o,a)}}return t}async complete(){const e=await UN(this.localStore,new Ey(this.serializer),this.documents,this.ju.id),t=this.Wu(this.documents);for(const r of this.queries)await MN(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function GI(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e){this.key=e}}class JI{constructor(e){this.key=e}}class YI{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=pe(),this.mutatedKeys=pe(),this.tc=HA(e),this.ec=new ms(this.tc)}get nc(){return this.Yu}sc(e,t){const r=t?t.ic:new Iy,i=t?t.ec:this.ec;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),f=Ba(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),p=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?m!==p&&(r.track({type:3,doc:f}),y=!0):this.rc(d,f)||(r.track({type:2,doc:f}),y=!0,(c&&this.tc(f,c)>0||u&&this.tc(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),y=!0):d&&!f&&(r.track({type:1,doc:d}),y=!0,(c||u)&&(a=!0)),y&&(f?(o=o.add(f),s=p?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,l)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return f(h)-f(d)}(u.type,l.type)||this.tc(u.doc,l.doc)),this.oc(r);const o=t?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,s.length!==0||c?{snapshot:new Ns(this.query,e.ec,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Iy,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(t=>this.Yu=this.Yu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Yu=this.Yu.delete(t)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=pe(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const t=[];return e.forEach(r=>{this.Zu.has(r)||t.push(new JI(r))}),this.Zu.forEach(r=>{e.has(r)||t.push(new WI(r))}),t}hc(e){this.Yu=e.ir,this.Zu=pe();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return Ns.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class cO{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class uO{constructor(e){this.key=e,this.fc=!1}}class lO{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new zr(a=>$A(a),La),this._c=new Map,this.mc=new Set,this.gc=new Ne(q.comparator),this.yc=new Map,this.Ic=new tp,this.Tc={},this.Ec=new Map,this.Ac=Ni.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function hO(n,e){const t=wp(n);let r,i;const s=t.wc.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await Ps(t.localStore,Gt(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await mp(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&gl(t.remoteStore,o)}return i}async function mp(n,e,t,r,i){n.Rc=(h,d,f)=>async function(m,p,y,_){let T=p.view.sc(y);T.zi&&(T=await gu(m.localStore,p.query,!1).then(({documents:he})=>p.view.sc(he,T)));const U=_&&_.targetChanges.get(p.targetId),P=p.view.applyChanges(T,m.isPrimaryClient,U);return hd(m,p.targetId,P.cc),P.snapshot}(n,h,d,f);const s=await gu(n.localStore,e,!0),o=new YI(e,s.ir),a=o.sc(s.documents),c=Ka.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);hd(n,t,u.cc);const l=new cO(e,t,o);return n.wc.set(e,l),n._c.has(t)?n._c.get(t).push(e):n._c.set(t,[e]),u.snapshot}async function dO(n,e){const t=$(n),r=t.wc.get(e),i=t._c.get(r.targetId);if(i.length>1)return t._c.set(r.targetId,i.filter(s=>!La(s,e))),void t.wc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await Ds(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),ma(t.remoteStore,r.targetId),Os(t,r.targetId)}).catch(Qr)):(Os(t,r.targetId),await Ds(t.localStore,r.targetId,!0))}async function fO(n,e,t){const r=_p(n);try{const i=await function(s,o){const a=$(s),c=Ve.now(),u=o.reduce((d,f)=>d.add(f.key),pe());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Ht(),m=pe();return a.Zi.getEntries(d,u).next(p=>{f=p,f.forEach((y,_)=>{_.isValidDocument()||(m=m.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(p=>{l=p;const y=[];for(const _ of o){const T=KD(_,l.get(_.key).overlayedDocument);T!=null&&y.push(new cr(_.key,T,FA(T.value.mapValue),Be.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,y,o)}).next(p=>{h=p;const y=p.applyToLocalDocumentSet(l,m);return a.documentOverlayCache.saveOverlays(d,p.batchId,y)})}).then(()=>({batchId:h.batchId,changes:GA(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.Tc[s.currentUser.toKey()];c||(c=new Ne(fe)),c=c.insert(o,a),s.Tc[s.currentUser.toKey()]=c}(r,i.batchId,t),await ur(r,i.changes),await Xs(r.remoteStore)}catch(i){const s=eo(i,"Failed to persist write");t.reject(s)}}async function XI(n,e){const t=$(n);try{const r=await ON(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.yc.get(s);o&&(te(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?te(o.fc):i.removedDocuments.size>0&&(te(o.fc),o.fc=!1))}),await ur(t,r,e)}catch(r){await Qr(r)}}function by(n,e,t){const r=$(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=$(s);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Mu(o)&&(c=!0)}),c&&fp(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function pO(n,e,t){const r=$(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new Ne(q.comparator);o=o.insert(s,Fe.newNoDocument(s,ee.min()));const a=pe().add(s),c=new ja(ee.min(),new Map,new Ne(fe),o,a);await XI(r,c),r.gc=r.gc.remove(s),r.yc.delete(e),vp(r)}else await Ds(r.localStore,e,!1).then(()=>Os(r,e,t)).catch(Qr)}async function mO(n,e){const t=$(n),r=e.batch.batchId;try{const i=await NN(t.localStore,e);yp(t,r,null),gp(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ur(t,i)}catch(i){await Qr(i)}}async function gO(n,e,t){const r=$(n);try{const i=await function(s,o){const a=$(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(te(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);yp(r,e,t),gp(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ur(r,i)}catch(i){await Qr(i)}}async function yO(n,e){const t=$(n);Gr(t.remoteStore)||N("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=$(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(r===-1)return void e.resolve();const i=t.Ec.get(r)||[];i.push(e),t.Ec.set(r,i)}catch(r){const i=eo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function gp(n,e){(n.Ec.get(e)||[]).forEach(t=>{t.resolve()}),n.Ec.delete(e)}function yp(n,e,t){const r=$(n);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function Os(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n._c.get(e))n.wc.delete(r),t&&n.dc.Pc(r,t);n._c.delete(e),n.isPrimaryClient&&n.Ic.Is(e).forEach(r=>{n.Ic.containsKey(r)||ZI(n,r)})}function ZI(n,e){n.mc.delete(e.path.canonicalString());const t=n.gc.get(e);t!==null&&(ma(n.remoteStore,t),n.gc=n.gc.remove(e),n.yc.delete(t),vp(n))}function hd(n,e,t){for(const r of t)r instanceof WI?(n.Ic.addReference(r.key,e),vO(n,r)):r instanceof JI?(N("SyncEngine","Document no longer in limbo: "+r.key),n.Ic.removeReference(r.key,e),n.Ic.containsKey(r.key)||ZI(n,r.key)):G()}function vO(n,e){const t=e.key,r=t.path.canonicalString();n.gc.get(t)||n.mc.has(r)||(N("SyncEngine","New document in limbo: "+t),n.mc.add(r),vp(n))}function vp(n){for(;n.mc.size>0&&n.gc.size<n.maxConcurrentLimboResolutions;){const e=n.mc.values().next().value;n.mc.delete(e);const t=new q(_e.fromString(e)),r=n.Ac.next();n.yc.set(r,new uO(t)),n.gc=n.gc.insert(t,r),gl(n.remoteStore,new Jn(Gt(Gs(t.path)),r,"TargetPurposeLimboResolution",$t.ct))}}async function ur(n,e,t){const r=$(n),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,c)=>{o.push(r.Rc(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=ip.Li(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,c){const u=$(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>E.forEach(c,h=>E.forEach(h.Fi,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>E.forEach(h.Bi,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Hr(l))throw l;N("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Ji.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);u.Ji=u.Ji.insert(h,m)}}}(r.localStore,s))}async function wO(n,e){const t=$(n);if(!t.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const r=await OI(t.localStore,e);t.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new k(b.CANCELLED,s))})}),i.Ec.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ur(t,r.er)}}function _O(n,e){const t=$(n),r=t.yc.get(e);if(r&&r.fc)return pe().add(r.key);{let i=pe();const s=t._c.get(e);if(!s)return i;for(const o of s){const a=t.wc.get(o);i=i.unionWith(a.view.nc)}return i}}async function AO(n,e){const t=$(n),r=await gu(t.localStore,e.query,!0),i=e.view.hc(r);return t.isPrimaryClient&&hd(t,e.targetId,i.cc),i}async function IO(n,e){const t=$(n);return LI(t.localStore,e).then(r=>ur(t,r))}async function EO(n,e,t,r){const i=$(n),s=await function(o,a){const c=$(o),u=$(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.Sn(l,a).next(h=>h?c.localDocuments.getDocuments(l,h):E.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await Xs(i.remoteStore):t==="acknowledged"||t==="rejected"?(yp(i,e,r||null),gp(i,e),function(o,a){$($(o).mutationQueue).Cn(a)}(i.localStore,e)):G(),await ur(i,s)):N("SyncEngine","Cannot apply mutation batch with id: "+e)}async function bO(n,e){const t=$(n);if(wp(t),_p(t),e===!0&&t.vc!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await Ty(t,r.toArray());t.vc=!0,await ld(t.remoteStore,!0);for(const s of i)gl(t.remoteStore,s)}else if(e===!1&&t.vc!==!1){const r=[];let i=Promise.resolve();t._c.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Os(t,o),Ds(t.localStore,o,!0))),ma(t.remoteStore,o)}),await i,await Ty(t,r),function(s){const o=$(s);o.yc.forEach((a,c)=>{ma(o.remoteStore,c)}),o.Ic.Ts(),o.yc=new Map,o.gc=new Ne(q.comparator)}(t),t.vc=!1,await ld(t.remoteStore,!1)}}async function Ty(n,e,t){const r=$(n),i=[],s=[];for(const o of e){let a;const c=r._c.get(o);if(c&&c.length!==0){a=await Ps(r.localStore,Gt(c[0]));for(const u of c){const l=r.wc.get(u),h=await AO(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await MI(r.localStore,o);a=await Ps(r.localStore,u),await mp(r,e0(u),o,!1,a.resumeToken)}i.push(a)}return r.dc.nu(s),i}function e0(n){return qA(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function TO(n){const e=$(n);return $($(e.localStore).persistence).$i()}async function SO(n,e,t,r){const i=$(n);if(i.vc)return void N("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await LI(i.localStore,QA(s[0])),a=ja.createSynthesizedRemoteEventForCurrentChange(e,t==="current",rt.EMPTY_BYTE_STRING);await ur(i,o,a);break}case"rejected":await Ds(i.localStore,e,!0),Os(i,e,r);break;default:G()}}async function CO(n,e,t){const r=wp(n);if(r.vc){for(const i of e){if(r._c.has(i)){N("SyncEngine","Adding an already active target "+i);continue}const s=await MI(r.localStore,i),o=await Ps(r.localStore,s);await mp(r,e0(s),o.targetId,!1,o.resumeToken),gl(r.remoteStore,o)}for(const i of t)r._c.has(i)&&await Ds(r.localStore,i,!1).then(()=>{ma(r.remoteStore,i),Os(r,i)}).catch(Qr)}}function wp(n){const e=$(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=XI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_O.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pO.bind(null,e),e.dc.nu=iO.bind(null,e.eventManager),e.dc.Pc=sO.bind(null,e.eventManager),e}function _p(n){const e=$(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gO.bind(null,e),e}function RO(n,e,t){const r=$(n);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const f=$(h),m=We(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",p=>f.qs.getBundleMetadata(p,d.id)).then(p=>!!p&&p.createTime.compareTo(m)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(GI(a));const c=new aO(a,i.localStore,s.serializer);let u=await s.bc();for(;u;){const h=await c.zu(u);h&&o._updateProgress(h),u=await s.bc()}const l=await c.complete();return await ur(i,l.Ju,void 0),await function(h,d){const f=$(h);return f.persistence.runTransaction("Save bundle","readwrite",m=>f.qs.saveBundleMetadata(m,d))}(i.localStore,a),o._completeWith(l.progress),Promise.resolve(l.Hu)}catch(a){return yn("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class dd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=qa(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return NI(this.persistence,new DI,e.initialUser,this.serializer)}createPersistence(e){return new PI(ml.zs,this.serializer)}createSharedClientState(e){return new VI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class t0 extends dd{constructor(e,t,r){super(),this.Vc=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await _p(this.Vc.syncEngine),await Xs(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return NI(this.persistence,new DI,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new yN(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new eD(t,this.persistence);return new ZP(e.asyncQueue,r)}createPersistence(e){const t=rp(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Kt.withCacheSize(this.cacheSizeBytes):Kt.DEFAULT;return new np(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,jI(),Nc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new VI}}class kO extends t0{constructor(e,t){super(e,t,!1),this.Vc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Vc.syncEngine;this.sharedClientState instanceof ch&&(this.sharedClientState.syncEngine={jr:EO.bind(null,t),zr:SO.bind(null,t),Wr:CO.bind(null,t),$i:TO.bind(null,t),Qr:IO.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ii(async r=>{await bO(this.Vc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=jI();if(!ch.D(t))throw new k(b.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=rp(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ch(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Ap{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>by(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=wO.bind(null,this.syncEngine),await ld(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new rO}createDatastore(e){const t=qa(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new jN(i));var i;return function(s,o,a,c){return new $N(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return t=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>by(this.syncEngine,a,0),o=_y.D()?new _y:new LN,new HN(t,r,i,s,o);var t,r,i,s,o}createSyncEngine(e,t){return function(r,i,s,o,a,c,u){const l=new lO(r,i,s,o,a,c);return u&&(l.vc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=$(e);N("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await Ys(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):ze("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e,t){this.Cc=e,this.serializer=t,this.metadata=new ut,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then(r=>{r&&r.Qu()?this.metadata.resolve(r.Gu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Gu)}`))},r=>this.metadata.reject(r))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){const e=await this.kc();if(e===null)return null;const t=this.xc.decode(e),r=Number(t);isNaN(r)&&this.Mc(`length string (${t}) is not valid number`);const i=await this.$c(r);return new oO(JSON.parse(i),e.length+r)}Oc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async kc(){for(;this.Oc()<0&&!await this.Fc(););if(this.buffer.length===0)return null;const e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");const t=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Mc(e){throw this.Cc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Fc(){const e=await this.Cc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new k(b.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(r,i){const s=$(r),o=fa(s.serializer)+"/documents",a={documents:i.map(h=>da(s.serializer,h))},c=await s.vo("BatchGetDocuments",o,a,i.length),u=new Map;c.forEach(h=>{const d=YD(s.serializer,h);u.set(d.key.toString(),d)});const l=[];return i.forEach(h=>{const d=u.get(h.toString());te(!!d),l.push(d)}),l}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Js(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=q.fromPath(r);this.mutations.push(new Qf(i,this.precondition(i)))}),await async function(t,r){const i=$(t),s=fa(i.serializer)+"/documents",o={writes:r.map(a=>pa(i.serializer,a))};await i.Io("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw G();t=ee.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new k(b.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(ee.min())?Be.exists(!1):Be.updateTime(t):Be.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ee.min()))throw new k(b.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Be.updateTime(t)}return Be.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.Bc=r.maxAttempts,this.qo=new op(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No(async()=>{const e=new PO(this.datastore),t=this.qc(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Uc(i)}))}).catch(r=>{this.Uc(r)})})}qc(e){try{const t=this.updateFunction(e);return!Ua(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(e)}Kc(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!sI(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=_A.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{N("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(N("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new k(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=eo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Oc(n,e){n.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await OI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function fd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Ip(n);N("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>Ay(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Ay(e.remoteStore,s)),n._onlineComponents=e}function n0(n){return n.name==="FirebaseError"?n.code===b.FAILED_PRECONDITION||n.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Ip(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await Oc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!n0(t))throw t;yn("Error using user provided cache. Falling back to memory cache: "+t),await Oc(n,new dd)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await Oc(n,new dd);return n._offlineComponents}async function vl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await fd(n,n._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await fd(n,new Ap))),n._onlineComponents}function r0(n){return Ip(n).then(e=>e.persistence)}function Ep(n){return Ip(n).then(e=>e.localStore)}function i0(n){return vl(n).then(e=>e.remoteStore)}function bp(n){return vl(n).then(e=>e.syncEngine)}function OO(n){return vl(n).then(e=>e.datastore)}async function Fs(n){const e=await vl(n),t=e.eventManager;return t.onListen=hO.bind(null,e.syncEngine),t.onUnlisten=dO.bind(null,e.syncEngine),t}function FO(n){return n.asyncQueue.enqueue(async()=>{const e=await r0(n),t=await i0(n);return e.setNetworkEnabled(!0),function(r){const i=$(r);return i.vu.delete(0),$a(i)}(t)})}function UO(n){return n.asyncQueue.enqueue(async()=>{const e=await r0(n),t=await i0(n);return e.setNetworkEnabled(!1),async function(r){const i=$(r);i.vu.add(0),await Ys(i),i.bu.set("Offline")}(t)})}function MO(n,e){const t=new ut;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,c){const u=$(a);return u.persistence.runTransaction("read document","readonly",l=>u.localDocuments.getDocument(l,c))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new k(b.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=eo(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await Ep(n),e,t)),t.promise}function s0(n,e,t={}){const r=new ut;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new yl({next:h=>{s.enqueueAndForget(()=>dp(i,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new k(b.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new k(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new pp(Gs(o.path),u,{includeMetadataChanges:!0,Ku:!0});return hp(i,l)}(await Fs(n),n.asyncQueue,e,t,r)),r.promise}function LO(n,e){const t=new ut;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await gu(r,i,!0),a=new YI(i,o.ir),c=a.sc(o.documents),u=a.applyChanges(c,!1);s.resolve(u.snapshot)}catch(o){const a=eo(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await Ep(n),e,t)),t.promise}function o0(n,e,t={}){const r=new ut;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new yl({next:h=>{s.enqueueAndForget(()=>dp(i,l)),h.fromCache&&a.source==="server"?c.reject(new k(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new pp(o,u,{includeMetadataChanges:!0,Ku:!0});return hp(i,l)}(await Fs(n),n.asyncQueue,e,t,r)),r.promise}function BO(n,e){const t=new yl(e);return n.asyncQueue.enqueueAndForget(async()=>function(r,i){$(r).ku.add(i),i.next()}(await Fs(n),t)),()=>{t.Dc(),n.asyncQueue.enqueueAndForget(async()=>function(r,i){$(r).ku.delete(i)}(await Fs(n),t))}}function VO(n,e,t,r){const i=function(s,o){let a;return a=typeof s=="string"?aI().encode(s):s,function(c,u){return new xO(c,u)}(function(c,u){if(c instanceof Uint8Array)return Sy(c,u);if(c instanceof ArrayBuffer)return Sy(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,qa(e));n.asyncQueue.enqueueAndForget(async()=>{RO(await bp(n),i,r)})}function jO(n,e){return n.asyncQueue.enqueue(async()=>function(t,r){const i=$(t);return i.persistence.runTransaction("Get named query","readonly",s=>i.qs.getNamedQuery(s,r))}(await Ep(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(n,e,t){if(!t)throw new k(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function c0(n,e,t,r){if(e===!0&&r===!0)throw new k(b.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ry(n){if(!q.isDocumentKey(n))throw new k(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ky(n){if(q.isDocumentKey(n))throw new k(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function wl(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":G()}function Ie(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new k(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=wl(n);throw new k(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function u0(n,e){if(e<=0)throw new k(b.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new k(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new k(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}c0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=a0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new k(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new k(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new k(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,r}}class Qa{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new k(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new k(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xy(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new jP;switch(t.type){case"firstParty":return new QP(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new k(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Cy.get(e);t&&(N("ComponentProvider","Removing Datastore"),Cy.delete(e),t.terminate())}(this),Promise.resolve()}}function KO(n,e,t,r={}){var i;const s=(n=Ie(n,Qa))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&yn("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${t}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=at.MOCK_USER;else{o=OT(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new k(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new at(c)}n._authCredentials=new KP(new wA(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Un(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Me(this.firestore,e,this._key)}}class It{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new It(this.firestore,e,this._query)}}class Un extends It{constructor(e,t,r){super(e,t,Gs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new q(e))}withConverter(e){return new Un(this.firestore,e,this._path)}}function Sp(n,e,...t){if(n=re(n),Tp("collection","path",e),n instanceof Qa){const r=_e.fromString(e,...t);return ky(r),new Un(n,null,r)}{if(!(n instanceof Me||n instanceof Un))throw new k(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(_e.fromString(e,...t));return ky(r),new Un(n.firestore,null,r)}}function qO(n,e){if(n=Ie(n,Qa),Tp("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new k(b.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new It(n,null,function(t){return new ar(_e.emptyPath(),t)}(e))}function In(n,e,...t){if(n=re(n),arguments.length===1&&(e=_A.A()),Tp("doc","path",e),n instanceof Qa){const r=_e.fromString(e,...t);return Ry(r),new Me(n,null,new q(r))}{if(!(n instanceof Me||n instanceof Un))throw new k(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(_e.fromString(e,...t));return Ry(r),new Me(n.firestore,n instanceof Un?n.converter:null,new q(r))}}function l0(n,e){return n=re(n),e=re(e),(n instanceof Me||n instanceof Un)&&(e instanceof Me||e instanceof Un)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function h0(n,e){return n=re(n),e=re(e),n instanceof It&&e instanceof It&&n.firestore===e.firestore&&La(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new op(this,"async_queue_retry"),this.Xc=()=>{const t=Nc();t&&N("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const e=Nc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=Nc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const t=new ut;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Hr(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const t=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw ze("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=t,t}enqueueAfterDelay(e,t,r){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const i=lp.createAndSchedule(this,e,t,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&G()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.zc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}function pd(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of t)if(i in r&&typeof r[i]=="function")return!0;return!1}(n,["next","error","complete"])}class QO{constructor(){this._progressObserver={},this._taskCompletionResolver=new ut,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO=-1;class He extends Qa{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new $O,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||d0(this),this._firestoreClient.terminate()}}function mt(n){return n._firestoreClient||d0(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function d0(n){var e,t,r;const i=n._freezeSettings(),s=function(o,a,c,u){return new AD(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,a0(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new NO(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.cache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function zO(n,e){p0(n=Ie(n,He));const t=mt(n);if(t._uninitializedComponentsProvider)throw new k(b.FAILED_PRECONDITION,"SDK cache is already specified.");yn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),i=new Ap;return f0(t,i,new t0(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function GO(n){p0(n=Ie(n,He));const e=mt(n);if(e._uninitializedComponentsProvider)throw new k(b.FAILED_PRECONDITION,"SDK cache is already specified.");yn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new Ap;return f0(e,r,new kO(r,t.cacheSizeBytes))}function f0(n,e,t){const r=new ut;return n.asyncQueue.enqueue(async()=>{try{await Oc(n,t),await fd(n,e),r.resolve()}catch(i){const s=i;if(!n0(s))throw s;yn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function WO(n){if(n._initialized&&!n._terminated)throw new k(b.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ut;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!hn.D())return Promise.resolve();const r=t+"main";await hn.delete(r)}(rp(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function JO(n){return function(e){const t=new ut;return e.asyncQueue.enqueueAndForget(async()=>yO(await bp(e),t)),t.promise}(mt(n=Ie(n,He)))}function YO(n){return FO(mt(n=Ie(n,He)))}function XO(n){return UO(mt(n=Ie(n,He)))}function ZO(n,e){const t=mt(n=Ie(n,He)),r=new QO;return VO(t,n._databaseId,e,r),r}function eF(n,e){return jO(mt(n=Ie(n,He)),e).then(t=>t?new It(n,null,t.query):null)}function p0(n){if(n._initialized||n._terminated)throw new k(b.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jn(rt.fromBase64String(e))}catch(t){throw new k(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new jn(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new k(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new k(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new k(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tF=/^__.*__$/;class nF{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new cr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ws(e,this.data,t,this.fieldTransforms)}}class m0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new cr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function g0(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Al{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Al(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return _u(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(g0(this.ca)&&tF.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class rF{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||qa(e)}ya(e,t,r,i=!1){return new Al({ca:e,methodName:t,ga:r,path:Ge.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ji(n){const e=n._freezeSettings(),t=qa(n._databaseId);return new rF(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Il(n,e,t,r,i,s={}){const o=n.ya(s.merge||s.mergeFields?2:0,e,t,i);xp("Data must be an object, but it was:",o,r);const a=w0(r,o);let c,u;if(s.merge)c=new Qt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=md(e,h,t);if(!o.contains(d))throw new k(b.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);A0(l,d)||l.push(d)}c=new Qt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new nF(new wt(a),c,u)}class Ha extends Vi{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ha}}function y0(n,e,t){return new Al({ca:3,ga:e.settings.ga,methodName:n._methodName,la:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Cp extends Vi{_toFieldTransform(e){return new Va(e.path,new Rs)}isEqual(e){return e instanceof Cp}}class iF extends Vi{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=y0(this,e,!0),r=this.pa.map(s=>Ki(s,t)),i=new ki(r);return new Va(e.path,i)}isEqual(e){return this===e}}class sF extends Vi{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=y0(this,e,!0),r=this.pa.map(s=>Ki(s,t)),i=new xi(r);return new Va(e.path,i)}isEqual(e){return this===e}}class oF extends Vi{constructor(e,t){super(e),this.Ia=t}_toFieldTransform(e){const t=new ks(e.serializer,XA(e.serializer,this.Ia));return new Va(e.path,t)}isEqual(e){return this===e}}function Rp(n,e,t,r){const i=n.ya(1,e,t);xp("Data must be an object, but it was:",i,r);const s=[],o=wt.empty();Bi(r,(c,u)=>{const l=Pp(e,c,t);u=re(u);const h=i.da(l);if(u instanceof Ha)s.push(l);else{const d=Ki(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new Qt(s);return new m0(o,a,i.fieldTransforms)}function kp(n,e,t,r,i,s){const o=n.ya(1,e,t),a=[md(e,r,t)],c=[i];if(s.length%2!=0)throw new k(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(md(e,s[d])),c.push(s[d+1]);const u=[],l=wt.empty();for(let d=a.length-1;d>=0;--d)if(!A0(u,a[d])){const f=a[d];let m=c[d];m=re(m);const p=o.da(f);if(m instanceof Ha)u.push(f);else{const y=Ki(m,p);y!=null&&(u.push(f),l.set(f,y))}}const h=new Qt(u);return new m0(l,h,o.fieldTransforms)}function v0(n,e,t,r=!1){return Ki(t,n.ya(r?4:3,e))}function Ki(n,e){if(_0(n=re(n)))return xp("Unsupported field value:",e,n),w0(n,e);if(n instanceof Vi)return function(t,r){if(!g0(r.ca))throw r._a(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(t,r){const i=[];let s=0;for(const o of t){let a=Ki(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(n,e)}return function(t,r){if((t=re(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return XA(r.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=Ve.fromDate(t);return{timestampValue:xs(r.serializer,i)}}if(t instanceof Ve){const i=new Ve(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:xs(r.serializer,i)}}if(t instanceof _l)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof jn)return{bytesValue:lI(r.serializer,t._byteString)};if(t instanceof Me){const i=r.databaseId,s=t.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Yf(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r._a(`Unsupported field value: ${wl(t)}`)}(n,e)}function w0(n,e){const t={};return DA(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bi(n,(r,i)=>{const s=Ki(i,e.ha(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function _0(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ve||n instanceof _l||n instanceof jn||n instanceof Me||n instanceof Vi)}function xp(n,e,t){if(!_0(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=wl(t);throw r==="an object"?e._a(n+" a custom object"):e._a(n+" "+r)}}function md(n,e,t){if((e=re(e))instanceof Br)return e._internalPath;if(typeof e=="string")return Pp(n,e);throw _u("Field path arguments must be of type string or ",n,!1,void 0,t)}const aF=new RegExp("[~\\*/\\[\\]]");function Pp(n,e,t){if(e.search(aF)>=0)throw _u(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Br(...e.split("."))._internalPath}catch{throw _u(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function _u(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new k(b.INVALID_ARGUMENT,a+n+c)}function A0(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(El("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class cF extends ga{data(){return super.data()}}function El(n,e){return typeof e=="string"?Pp(n,e):e instanceof Br?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new k(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Dp{}class za extends Dp{}function $n(n,e,...t){let r=[];e instanceof Dp&&r.push(e),r=r.concat(t),function(i){const s=i.filter(a=>a instanceof Np).length,o=i.filter(a=>a instanceof bl).length;if(s>1||s>0&&o>0)throw new k(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class bl extends za{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new bl(e,t,r)}_apply(e){const t=this._parse(e);return T0(e._query,t),new It(e.firestore,e.converter,td(e._query,t))}_parse(e){const t=ji(e.firestore);return function(i,s,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new k(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Dy(l,u);const d=[];for(const f of l)d.push(Py(a,i,f));h={arrayValue:{values:d}}}else h=Py(a,i,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Dy(l,u),h=v0(o,s,l,u==="in"||u==="not-in");return ye.create(c,u,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function E0(n,e,t){const r=e,i=El("where",n);return bl._create(i,r,t)}class Np extends Dp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Np(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ke.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)T0(s,a),s=td(s,a)}(e._query,t),new It(e.firestore,e.converter,td(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Op extends za{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Op(e,t)}_apply(e){const t=function(r,i,s){if(r.startAt!==null)throw new k(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new k(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ps(i,s);return function(a,c){if(Kf(a)===null){const u=ll(a);u!==null&&S0(a,u,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new It(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new ar(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function uF(n,e="asc"){const t=e,r=El("orderBy",n);return Op._create(r,t)}class Tl extends za{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Tl(e,t,r)}_apply(e){return new It(e.firestore,e.converter,du(e._query,this._limit,this._limitType))}}function lF(n){return u0("limit",n),Tl._create("limit",n,"F")}function hF(n){return u0("limitToLast",n),Tl._create("limitToLast",n,"L")}class Sl extends za{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Sl(e,t,r)}_apply(e){const t=b0(e,this.type,this._docOrFields,this._inclusive);return new It(e.firestore,e.converter,function(r,i){return new ar(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,t))}}function dF(...n){return Sl._create("startAt",n,!0)}function fF(...n){return Sl._create("startAfter",n,!1)}class Cl extends za{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Cl(e,t,r)}_apply(e){const t=b0(e,this.type,this._docOrFields,this._inclusive);return new It(e.firestore,e.converter,function(r,i){return new ar(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,t))}}function pF(...n){return Cl._create("endBefore",n,!1)}function mF(...n){return Cl._create("endAt",n,!0)}function b0(n,e,t,r){if(t[0]=re(t[0]),t[0]instanceof ga)return function(i,s,o,a,c){if(!a)throw new k(b.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of Ii(i))if(l.field.isKeyField())u.push(Ci(s,a.key));else{const h=a.data.field(l.field);if(ul(h))throw new k(b.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new k(b.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new Mr(u,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=ji(n.firestore);return function(s,o,a,c,u,l){const h=s.explicitOrderBy;if(u.length>h.length)throw new k(b.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<u.length;f++){const m=u[f];if(h[f].field.isKeyField()){if(typeof m!="string")throw new k(b.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof m}`);if(!qf(s)&&m.indexOf("/")!==-1)throw new k(b.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${m}' contains a slash.`);const p=s.path.child(_e.fromString(m));if(!q.isDocumentKey(p))throw new k(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${p}' is not because it contains an odd number of segments.`);const y=new q(p);d.push(Ci(o,y))}else{const p=v0(a,c,m);d.push(p)}}return new Mr(d,l)}(n._query,n.firestore._databaseId,i,e,t,r)}}function Py(n,e,t){if(typeof(t=re(t))=="string"){if(t==="")throw new k(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!qf(e)&&t.indexOf("/")!==-1)throw new k(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(_e.fromString(t));if(!q.isDocumentKey(r))throw new k(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ci(n,new q(r))}if(t instanceof Me)return Ci(n,t._key);throw new k(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wl(t)}.`)}function Dy(n,e){if(!Array.isArray(n)||n.length===0)throw new k(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function T0(n,e){if(e.isInequality()){const r=ll(n),i=e.field;if(r!==null&&!r.isEqual(i))throw new k(b.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Kf(n);s!==null&&S0(n,i,s)}const t=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new k(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new k(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function S0(n,e,t){if(!t.isEqual(e))throw new k(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class Fp{convertValue(e,t="none"){switch(Si(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Or(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw G()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Bi(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new _l($e(e.latitude),$e(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Vf(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ua(e));default:return null}}convertTimestamp(e){const t=Nr(e);return new Ve(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=_e.fromString(e);te(_I(r));const i=new Fr(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(t)||ze(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class gF extends Fp{constructor(e){super(),this.firestore=e}convertBytes(e){return new jn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rr extends ga{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Vo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(El("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Vo extends rr{data(e={}){return super.data(e)}}class Vr{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new pi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Vo(this._firestore,this._userDataWriter,r.key,r,new pi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new k(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Vo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new pi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Vo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new pi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:yF(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function yF(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}function C0(n,e){return n instanceof rr&&e instanceof rr?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Vr&&e instanceof Vr&&n._firestore===e._firestore&&h0(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vF(n){n=Ie(n,Me);const e=Ie(n.firestore,He);return s0(mt(e),n._key).then(t=>Up(e,n,t))}class qi extends Fp{constructor(e){super(),this.firestore=e}convertBytes(e){return new jn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,t)}}function wF(n){n=Ie(n,Me);const e=Ie(n.firestore,He),t=mt(e),r=new qi(e);return MO(t,n._key).then(i=>new rr(e,r,n._key,i,new pi(i!==null&&i.hasLocalMutations,!0),n.converter))}function _F(n){n=Ie(n,Me);const e=Ie(n.firestore,He);return s0(mt(e),n._key,{source:"server"}).then(t=>Up(e,n,t))}function R0(n){n=Ie(n,It);const e=Ie(n.firestore,He),t=mt(e),r=new qi(e);return I0(n._query),o0(t,n._query).then(i=>new Vr(e,r,n,i))}function AF(n){n=Ie(n,It);const e=Ie(n.firestore,He),t=mt(e),r=new qi(e);return LO(t,n._query).then(i=>new Vr(e,r,n,i))}function IF(n){n=Ie(n,It);const e=Ie(n.firestore,He),t=mt(e),r=new qi(e);return o0(t,n._query,{source:"server"}).then(i=>new Vr(e,r,n,i))}function Ny(n,e,t){n=Ie(n,Me);const r=Ie(n.firestore,He),i=Rl(n.converter,e,t);return Ga(r,[Il(ji(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Be.none())])}function Oy(n,e,t,...r){n=Ie(n,Me);const i=Ie(n.firestore,He),s=ji(i);let o;return o=typeof(e=re(e))=="string"||e instanceof Br?kp(s,"updateDoc",n._key,e,t,r):Rp(s,"updateDoc",n._key,e),Ga(i,[o.toMutation(n._key,Be.exists(!0))])}function EF(n){return Ga(Ie(n.firestore,He),[new Js(n._key,Be.none())])}function bF(n,e){const t=Ie(n.firestore,He),r=In(n),i=Rl(n.converter,e);return Ga(t,[Il(ji(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Be.exists(!1))]).then(()=>r)}function k0(n,...e){var t,r,i;n=re(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||pd(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(pd(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(n instanceof Me)u=Ie(n.firestore,He),l=Gs(n._key.path),c={next:h=>{e[o]&&e[o](Up(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=Ie(n,It);u=Ie(h.firestore,He),l=h._query;const d=new qi(u);c={next:f=>{e[o]&&e[o](new Vr(u,d,h,f))},error:e[o+1],complete:e[o+2]},I0(n._query)}return function(h,d,f,m){const p=new yl(m),y=new pp(d,p,f);return h.asyncQueue.enqueueAndForget(async()=>hp(await Fs(h),y)),()=>{p.Dc(),h.asyncQueue.enqueueAndForget(async()=>dp(await Fs(h),y))}}(mt(u),l,a,c)}function TF(n,e){return BO(mt(n=Ie(n,He)),pd(e)?e:{next:e})}function Ga(n,e){return function(t,r){const i=new ut;return t.asyncQueue.enqueueAndForget(async()=>fO(await bp(t),r,i)),i.promise}(mt(n),e)}function Up(n,e,t){const r=t.docs.get(e._key),i=new qi(n);return new rr(n,i,e._key,r,new pi(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SF={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CF{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ji(e)}set(e,t,r){this._verifyNotCommitted();const i=wr(e,this._firestore),s=Rl(i.converter,t,r),o=Il(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Be.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=wr(e,this._firestore);let o;return o=typeof(t=re(t))=="string"||t instanceof Br?kp(this._dataReader,"WriteBatch.update",s._key,t,r,i):Rp(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Be.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=wr(e,this._firestore);return this._mutations=this._mutations.concat(new Js(t._key,Be.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new k(b.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function wr(n,e){if((n=re(n)).firestore!==e)throw new k(b.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RF extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=ji(e)}get(e){const t=wr(e,this._firestore),r=new gF(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return G();const s=i[0];if(s.isFoundDocument())return new ga(this._firestore,r,s.key,s,t.converter);if(s.isNoDocument())return new ga(this._firestore,r,t._key,null,t.converter);throw G()})}set(e,t,r){const i=wr(e,this._firestore),s=Rl(i.converter,t,r),o=Il(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,t,r,...i){const s=wr(e,this._firestore);let o;return o=typeof(t=re(t))=="string"||t instanceof Br?kp(this._dataReader,"Transaction.update",s._key,t,r,i):Rp(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=wr(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=wr(e,this._firestore),r=new qi(this._firestore);return super.get(e).then(i=>new rr(this._firestore,r,t._key,i._document,new pi(!1,!1),t.converter))}}function ni(n,e,t){n=Ie(n,He);const r=Object.assign(Object.assign({},SF),t);return function(i){if(i.maxAttempts<1)throw new k(b.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new ut;return i.asyncQueue.enqueueAndForget(async()=>{const c=await OO(i);new DO(i.asyncQueue,c,o,s,a).run()}),a.promise}(mt(n),i=>e(new RF(n,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kF(){return new Ha("deleteField")}function xF(){return new Cp("serverTimestamp")}function PF(...n){return new iF("arrayUnion",n)}function DF(...n){return new sF("arrayRemove",n)}function NF(n){return new oF("increment",n)}(function(n,e=!0){(function(t){zs=t})(jr),kr(new Ln("firestore",(t,{instanceIdentifier:r,options:i})=>{const s=t.getProvider("app").getImmediate(),o=new He(new qP(t.getProvider("auth-internal")),new zP(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new k(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fr(a.options.projectId,c)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),On(kg,"3.12.0",n),On(kg,"3.12.0","esm2017")})();const OF="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCACXAJcDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9UaKPwo/CgAoo/Cj8KACij8KPwoAKKPwo/CgAoo/Cj8DQAfhRR+FH4UAFFHPoaPwoAXiko/Cj8KAD8KXik/A0c+hoAKKPwooAX8qPypPxoyaAF4o/Kk/GjNAC/lR+VJz60ZoAX8qOKTJo/GgBfyo/KkzS0AJxS/lSfjRk0AL+VH5UnNH40AL+VHFFJ+NAC/lR+VH50tACflRSZNFABRS/56Uf56UAJRS/56Uf56UAJRS/56UUAJRS/wCelH+elACUlO/z0o/z0oASil/z0ooAbRTqP89KAEpKd/npR/npQA2lpaKAG0U7/PSigBPfNH40Uf56UAHbrRmij/PSgAzR260f56UUAH40D60f56UUAGaP8aP89KP89KADt1ozRRQAv40nbrRR/npQAuaT8aP89KKADtS5pKKAD8aKP89KKAFo/Cko4oAX86KQ0UALR+dJRQAtH50nFHFAC0UlH+NAC0fhSUUAL+FFJxRxQAtFJ+VHFAC/hR+FJRuoAWik4ooAPxox70v5UfhQAn40v40flR+FACfjR+NL+VBxQAfjSfjS/hR+VAB+NJj3pfyo/CgBPxo/Gl/Kj8KAE/GjHvS/hR+VAB+NJj3pfwo/KgBPxo/Gl/Cj8KAD8aKPyooAbTs+1JxRxQAfhS0nFHFAB+FH4UcUcUALn2pPwo4o4oAPwpc+1JxRxQAc+lLn2pOKOKAFz7Un4UcUcUALn2ptLxRxQAvbpRn2pOKOKADmijiigBc0fjSf560uaAD8aPxpP89aXNABR2pP89aP89aAF/Gk/GlzRmgBaT8aT/PWjP8AnNAC5o/Gk/z1pc0AH40ZpM/5zR/nrQAv40ZpP89aP89aAF/Gj8aT/PWlzQAZoozRQAn4UfhS+lFACfhR+FH50tACfhR+FLRQAn4UfhS0n50AH4UfhS0UAJ+FH4UtFACcelH4UtFACcelH4UtFACfhRx6UtFACcelFLRQAn5UflRRQAflR+VFFABSUUUAL+VH5UUUAH5UflRRQAflR+VFFAB+VH5UUUAH5UflRRQAflR+VFFAB+VFFFAH/9k=",FF="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCACXAJcDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9UaKPwo/CgAoo/Cj8KACij8KPwoAKKPwo/CgAoo/Cj8DQAfhRR+FH4UAFFHPoaPwoAXiko/Cj8KAD8KXik/A0c+hoAKKPwooAX8qPypPxoyaAF4o/Kk/GjNAC/lR+VJz60ZoAX8qOKTJo/GgBfyo/KkzS0AJxS/lSfjRk0AL+VH5UnNH40AL+VHFFJ+NAC/lR+VH50tACflRSZNFABRS/56Uf56UAJRS/56Uf56UAJRS/56UUAJRS/wCelH+elACUlO/z0o/z0oASil/z0ooAbRTqP89KAEpKd/npR/npQA2lpaKAG0U7/PSigBPfNH40Uf56UAHbrRmij/PSgAzR260f56UUAH40D60f56UUAGaP8aP89KP89KADt1ozRRQAv40nbrRR/npQAuaT8aP89KKADtS5pKKAD8aKP89KKAFo/Cko4oAX86KQ0UALR+dJRQAtH50nFHFAC0UlH+NAC0fhSUUAL+FFJxRxQAtFJ+VHFAC/hR+FJRuoAWik4ooAPxox70v5UfhQAn40v40flR+FACfjR+NL+VBxQAfjSfjS/hR+VAB+NJj3pfyo/CgBPxo/Gl/Kj8KAE/GjHvS/hR+VAB+NJj3pfwo/KgBPxo/Gl/Cj8KAD8aKPyooAbTs+1JxRxQAfhS0nFHFAB+FH4UcUcUALn2pPwo4o4oAPwpc+1JxRxQAc+lLn2pOKOKAFz7Un4UcUcUALn2ptLxRxQAvbpRn2pOKOKADmijiigBc0fjSf560uaAD8aPxpP89aXNABR2pP89aP89aAF/Gk/GlzRmgBaT8aT/PWjP8AnNAC5o/Gk/z1pc0AH40ZpM/5zR/nrQAv40ZpP89aP89aAF/Gj8aT/PWlzQAZoozRQAn4UfhS+lFACfhR+FH50tACfhR+FLRQAn4UfhS0n50AH4UfhS0UAJ+FH4UtFACcelH4UtFACcelH4UtFACfhRx6UtFACcelFLRQAn5UflRRQAflR+VFFABSUUUAL+VH5UUUAH5UflRRQAflR+VFFAB+VH5UUUAH5UflRRQAflR+VFFAB+VFFFAH/9k=",UF="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCACXAJcDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9UaKPwo/CgAoo/Cj8KACij8KPwoAKKPwo/CgAoo/Cj8DQAfhRR+FH4UAFFHPoaPwoAXiko/Cj8KAD8KXik/A0c+hoAKKPwooAX8qPypPxoyaAF4o/Kk/GjNAC/lR+VJz60ZoAX8qOKTJo/GgBfyo/KkzS0AJxS/lSfjRk0AL+VH5UnNH40AL+VHFFJ+NAC/lR+VH50tACflRSZNFABRS/56Uf56UAJRS/56Uf56UAJRS/56UUAJRS/wCelH+elACUlO/z0o/z0oASil/z0ooAbRTqP89KAEpKd/npR/npQA2lpaKAG0U7/PSigBPfNH40Uf56UAHbrRmij/PSgAzR260f56UUAH40D60f56UUAGaP8aP89KP89KADt1ozRRQAv40nbrRR/npQAuaT8aP89KKADtS5pKKAD8aKP89KKAFo/Cko4oAX86KQ0UALR+dJRQAtH50nFHFAC0UlH+NAC0fhSUUAL+FFJxRxQAtFJ+VHFAC/hR+FJRuoAWik4ooAPxox70v5UfhQAn40v40flR+FACfjR+NL+VBxQAfjSfjS/hR+VAB+NJj3pfyo/CgBPxo/Gl/Kj8KAE/GjHvS/hR+VAB+NJj3pfwo/KgBPxo/Gl/Cj8KAD8aKPyooAbTs+1JxRxQAfhS0nFHFAB+FH4UcUcUALn2pPwo4o4oAPwpc+1JxRxQAc+lLn2pOKOKAFz7Un4UcUcUALn2ptLxRxQAvbpRn2pOKOKADmijiigBc0fjSf560uaAD8aPxpP89aXNABR2pP89aP89aAF/Gk/GlzRmgBaT8aT/PWjP8AnNAC5o/Gk/z1pc0AH40ZpM/5zR/nrQAv40ZpP89aP89aAF/Gj8aT/PWlzQAZoozRQAn4UfhS+lFACfhR+FH50tACfhR+FLRQAn4UfhS0n50AH4UfhS0UAJ+FH4UtFACcelH4UtFACcelH4UtFACfhRx6UtFACcelFLRQAn5UflRRQAflR+VFFABSUUUAL+VH5UUUAH5UflRRQAflR+VFFAB+VH5UUUAH5UflRRQAflR+VFFAB+VFFFAH/9k=",MF="/ticharlez34/assets/boi-39130d01.jpg",LF="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCACXAJcDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9UaKPwo/CgAoo/Cj8KACij8KPwoAKKPwo/CgAoo/Cj8DQAfhRR+FH4UAFFHPoaPwoAXiko/Cj8KAD8KXik/A0c+hoAKKPwooAX8qPypPxoyaAF4o/Kk/GjNAC/lR+VJz60ZoAX8qOKTJo/GgBfyo/KkzS0AJxS/lSfjRk0AL+VH5UnNH40AL+VHFFJ+NAC/lR+VH50tACflRSZNFABRS/56Uf56UAJRS/56Uf56UAJRS/56UUAJRS/wCelH+elACUlO/z0o/z0oASil/z0ooAbRTqP89KAEpKd/npR/npQA2lpaKAG0U7/PSigBPfNH40Uf56UAHbrRmij/PSgAzR260f56UUAH40D60f56UUAGaP8aP89KP89KADt1ozRRQAv40nbrRR/npQAuaT8aP89KKADtS5pKKAD8aKP89KKAFo/Cko4oAX86KQ0UALR+dJRQAtH50nFHFAC0UlH+NAC0fhSUUAL+FFJxRxQAtFJ+VHFAC/hR+FJRuoAWik4ooAPxox70v5UfhQAn40v40flR+FACfjR+NL+VBxQAfjSfjS/hR+VAB+NJj3pfyo/CgBPxo/Gl/Kj8KAE/GjHvS/hR+VAB+NJj3pfwo/KgBPxo/Gl/Cj8KAD8aKPyooAbTs+1JxRxQAfhS0nFHFAB+FH4UcUcUALn2pPwo4o4oAPwpc+1JxRxQAc+lLn2pOKOKAFz7Un4UcUcUALn2ptLxRxQAvbpRn2pOKOKADmijiigBc0fjSf560uaAD8aPxpP89aXNABR2pP89aP89aAF/Gk/GlzRmgBaT8aT/PWjP8AnNAC5o/Gk/z1pc0AH40ZpM/5zR/nrQAv40ZpP89aP89aAF/Gj8aT/PWlzQAZoozRQAn4UfhS+lFACfhR+FH50tACfhR+FLRQAn4UfhS0n50AH4UfhS0UAJ+FH4UtFACcelH4UtFACcelH4UtFACfhRx6UtFACcelFLRQAn5UflRRQAflR+VFFABSUUUAL+VH5UUUAH5UflRRQAflR+VFFAB+VH5UUUAH5UflRRQAflR+VFFAB+VFFFAH/9k=",BF="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCACXAJcDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9UaKPwo/CgAoo/Cj8KACij8KPwoAKKPwo/CgAoo/Cj8DQAfhRR+FH4UAFFHPoaPwoAXiko/Cj8KAD8KXik/A0c+hoAKKPwooAX8qPypPxoyaAF4o/Kk/GjNAC/lR+VJz60ZoAX8qOKTJo/GgBfyo/KkzS0AJxS/lSfjRk0AL+VH5UnNH40AL+VHFFJ+NAC/lR+VH50tACflRSZNFABRS/56Uf56UAJRS/56Uf56UAJRS/56UUAJRS/wCelH+elACUlO/z0o/z0oASil/z0ooAbRTqP89KAEpKd/npR/npQA2lpaKAG0U7/PSigBPfNH40Uf56UAHbrRmij/PSgAzR260f56UUAH40D60f56UUAGaP8aP89KP89KADt1ozRRQAv40nbrRR/npQAuaT8aP89KKADtS5pKKAD8aKP89KKAFo/Cko4oAX86KQ0UALR+dJRQAtH50nFHFAC0UlH+NAC0fhSUUAL+FFJxRxQAtFJ+VHFAC/hR+FJRuoAWik4ooAPxox70v5UfhQAn40v40flR+FACfjR+NL+VBxQAfjSfjS/hR+VAB+NJj3pfyo/CgBPxo/Gl/Kj8KAE/GjHvS/hR+VAB+NJj3pfwo/KgBPxo/Gl/Cj8KAD8aKPyooAbTs+1JxRxQAfhS0nFHFAB+FH4UcUcUALn2pPwo4o4oAPwpc+1JxRxQAc+lLn2pOKOKAFz7Un4UcUcUALn2ptLxRxQAvbpRn2pOKOKADmijiigBc0fjSf560uaAD8aPxpP89aXNABR2pP89aP89aAF/Gk/GlzRmgBaT8aT/PWjP8AnNAC5o/Gk/z1pc0AH40ZpM/5zR/nrQAv40ZpP89aP89aAF/Gj8aT/PWlzQAZoozRQAn4UfhS+lFACfhR+FH50tACfhR+FLRQAn4UfhS0n50AH4UfhS0UAJ+FH4UtFACcelH4UtFACcelH4UtFACfhRx6UtFACcelFLRQAn5UflRRQAflR+VFFABSUUUAL+VH5UUUAH5UflRRQAflR+VFFAB+VH5UUUAH5UflRRQAflR+VFFAB+VFFFAH/9k=",VF="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCACXAJcDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9UaKPwo/CgAoo/Cj8KACij8KPwoAKKPwo/CgAoo/Cj8DQAfhRR+FH4UAFFHPoaPwoAXiko/Cj8KAD8KXik/A0c+hoAKKPwooAX8qPypPxoyaAF4o/Kk/GjNAC/lR+VJz60ZoAX8qOKTJo/GgBfyo/KkzS0AJxS/lSfjRk0AL+VH5UnNH40AL+VHFFJ+NAC/lR+VH50tACflRSZNFABRS/56Uf56UAJRS/56Uf56UAJRS/56UUAJRS/wCelH+elACUlO/z0o/z0oASil/z0ooAbRTqP89KAEpKd/npR/npQA2lpaKAG0U7/PSigBPfNH40Uf56UAHbrRmij/PSgAzR260f56UUAH40D60f56UUAGaP8aP89KP89KADt1ozRRQAv40nbrRR/npQAuaT8aP89KKADtS5pKKAD8aKP89KKAFo/Cko4oAX86KQ0UALR+dJRQAtH50nFHFAC0UlH+NAC0fhSUUAL+FFJxRxQAtFJ+VHFAC/hR+FJRuoAWik4ooAPxox70v5UfhQAn40v40flR+FACfjR+NL+VBxQAfjSfjS/hR+VAB+NJj3pfyo/CgBPxo/Gl/Kj8KAE/GjHvS/hR+VAB+NJj3pfwo/KgBPxo/Gl/Cj8KAD8aKPyooAbTs+1JxRxQAfhS0nFHFAB+FH4UcUcUALn2pPwo4o4oAPwpc+1JxRxQAc+lLn2pOKOKAFz7Un4UcUcUALn2ptLxRxQAvbpRn2pOKOKADmijiigBc0fjSf560uaAD8aPxpP89aXNABR2pP89aP89aAF/Gk/GlzRmgBaT8aT/PWjP8AnNAC5o/Gk/z1pc0AH40ZpM/5zR/nrQAv40ZpP89aP89aAF/Gj8aT/PWlzQAZoozRQAn4UfhS+lFACfhR+FH50tACfhR+FLRQAn4UfhS0n50AH4UfhS0UAJ+FH4UtFACcelH4UtFACcelH4UtFACfhRx6UtFACcelFLRQAn5UflRRQAflR+VFFABSUUUAL+VH5UUUAH5UflRRQAflR+VFFAB+VH5UUUAH5UflRRQAflR+VFFAB+VFFFAH/9k=";let Fy;const qn=Er("test"),jF={data(){return{users:[],bosses:[]}},methods:{async getUsers(){var e=qn.value.replace("@hotmail.com","");const t=$n(Sp(Ot,"warriors"),E0("name","==",e));(await R0(t)).forEach(i=>{this.users.push(i.data())})},check(){var e=qn.value.replace("@hotmail.com","");document.getElementById("check").innerHTML=e},change(n,e,t,r,i,s){document.getElementById("sword").src="/src/assets/img/sword/sword"+n+".jpg",document.getElementById("glove").src="/src/assets/img/glove/glove"+e+".jpg",document.getElementById("helmet").src="/src/assets/img/helmet/helmet"+t+".jpg",document.getElementById("necklace").src="/src/assets/img/necklace/necklace"+r+".jpg",document.getElementById("armour").src="/src/assets/img/armour/armour"+i+".jpg",document.getElementById("shoes").src="/src/assets/img/shoes/shoes"+s+".jpg",document.getElementById("loading").style.display="none"},equipSword(n){var t=qn.value.replace("@hotmail.com","");const r=In(Ot,"warriors",t);ni(Ot,async i=>{i.update(r,{equipSword:n}),document.getElementById("sword").src="/src/assets/img/sword/sword"+n+".jpg"})},equipHelmet(n){var t=qn.value.replace("@hotmail.com","");const r=In(Ot,"warriors",t);ni(Ot,async i=>{i.update(r,{equipHelmet:n}),document.getElementById("helmet").src="/src/assets/img/helmet/helmet"+n+".jpg"})},equipGlove(n){var t=qn.value.replace("@hotmail.com","");const r=In(Ot,"warriors",t);ni(Ot,async i=>{i.update(r,{equipGlove:n}),document.getElementById("glove").src="/src/assets/img/glove/glove"+n+".jpg"})},equipArmour(n){var t=qn.value.replace("@hotmail.com","");const r=In(Ot,"warriors",t);ni(Ot,async i=>{i.update(r,{equipArmour:n}),document.getElementById("armour").src="/src/assets/img/armour/armour"+n+".jpg"})},equipNecklace(n){var t=qn.value.replace("@hotmail.com","");const r=In(Ot,"warriors",t);ni(Ot,async i=>{i.update(r,{equipNecklace:n}),document.getElementById("necklace").src="/src/assets/img/necklace/necklace"+n+".jpg"})},equipShoes(n){var t=qn.value.replace("@hotmail.com","");const r=In(Ot,"warriors",t);ni(Ot,async i=>{i.update(r,{equipShoes:n}),document.getElementById("shoes").src="/src/assets/img/shoes/shoes"+n+".jpg"})}},setup(){},mounted(){Fy=Sa(),Vw(Fy,n=>{n&&(qn.value=n.email)})}},KF={class:"center mt-8"},qF={key:0},$F={class:"left"},QF={class:"name"},HF={class:"containerEquip"},zF=jd('<div class="equipLeft"><div><img id="helmet" class="imgEquip" src="'+OF+'"></div><div><img id="glove" class="imgEquip" src="'+FF+'"></div><div><img id="sword" class="imgEquip" src="'+UF+'"></div></div><div class="equipMid"><div><img class="imgPlayer" src="'+MF+'"></div></div><div class="equipRight"><div><img id="necklace" class="imgEquip" src="'+LF+'"></div><div><img id="armour" class="imgEquip" src="'+BF+'"></div><div><img id="shoes" class="imgEquip" src="'+VF+'"></div></div>',3),GF=["onClick"],WF={class:"right"},JF=ce("h1",{class:"invtitle"},"Inventaire",-1),YF={class:"mt-3"},XF={key:0,class:"itemTitle"},ZF={class:"inventory"},eU=["id"],tU=["onClick","src"],nU={key:1,class:"itemTitle"},rU={class:"inventory"},iU=["id"],sU=["onClick","src"],oU={key:2,class:"itemTitle"},aU={class:"inventory"},cU=["id"],uU=["onClick","src"],lU={key:3,class:"itemTitle"},hU={class:"inventory"},dU=["id"],fU=["onClick","src"],pU={key:4,class:"itemTitle"},mU={class:"inventory"},gU=["id"],yU=["onClick","src"],vU={key:5,class:"itemTitle"},wU={class:"inventory"},_U=["id"],AU=["onClick","src"];function IU(n,e,t,r,i,s){return Se(),Ce("div",KF,[i.users<=0?(Se(),Ce("div",qF,[ce("button",{class:"boutonC",onClick:e[0]||(e[0]=(...o)=>s.getUsers&&s.getUsers(...o))},"Voir votre personnage")])):Hn("",!0),(Se(!0),Ce(ct,null,Yr(i.users,o=>(Se(),Ce("div",{class:"characterSlot",key:o.name},[ce("div",$F,[ce("h1",QF,Gy(o.name),1),ce("div",HF,[zF,ce("a",{id:"loading",class:"load",onClick:a=>s.change(o.equipSword,o.equipGlove,o.equipHelmet,o.equipNecklace,o.equipArmour,o.equipShoes)},"Charger l'équipement",8,GF)])]),ce("div",WF,[JF,ce("div",YF,[o.helmets>=1?(Se(),Ce("h1",XF,"Casques")):Hn("",!0),ce("div",ZF,[(Se(!0),Ce(ct,null,Yr(o.helmets,a=>(Se(),Ce("div",{id:"helmet"+a,key:a},[ce("img",{onClick:c=>s.equipHelmet(a),class:"invItem",src:"/src/assets/img/helmet/helmet"+a+".jpg"},null,8,tU)],8,eU))),128))]),o.necklaces>=1?(Se(),Ce("h1",nU,"Colliers")):Hn("",!0),ce("div",rU,[(Se(!0),Ce(ct,null,Yr(o.necklaces,a=>(Se(),Ce("div",{id:"necklace"+a,key:a},[ce("img",{onClick:c=>s.equipNecklace(a),class:"invItem",src:"/src/assets/img/necklace/necklace"+a+".jpg"},null,8,sU)],8,iU))),128))]),o.armours>=1?(Se(),Ce("h1",oU,"Plastron")):Hn("",!0),ce("div",aU,[(Se(!0),Ce(ct,null,Yr(o.armours,a=>(Se(),Ce("div",{id:"armour"+a,key:a},[ce("img",{onClick:c=>s.equipArmour(a),class:"invItem",src:"/src/assets/img/armour/armour"+a+".jpg"},null,8,uU)],8,cU))),128))]),o.gloves>=1?(Se(),Ce("h1",lU,"Gants")):Hn("",!0),ce("div",hU,[(Se(!0),Ce(ct,null,Yr(o.gloves,a=>(Se(),Ce("div",{id:"glove"+a,key:a},[ce("img",{onClick:c=>s.equipGlove(a),class:"invItem",src:"/src/assets/img/glove/glove"+a+".jpg"},null,8,fU)],8,dU))),128))]),o.shoes>=1?(Se(),Ce("h1",pU,"Bottes")):Hn("",!0),ce("div",mU,[(Se(!0),Ce(ct,null,Yr(o.shoes,a=>(Se(),Ce("div",{id:"shoes"+a,key:a},[ce("img",{onClick:c=>s.equipShoes(a),class:"invItem",src:"/src/assets/img/shoes/shoes"+a+".jpg"},null,8,yU)],8,gU))),128))]),o.swords>=1?(Se(),Ce("h1",vU,"Armes")):Hn("",!0),ce("div",wU,[(Se(!0),Ce(ct,null,Yr(o.swords,a=>(Se(),Ce("div",{id:"sword"+a,key:a},[ce("img",{onClick:c=>s.equipSword(a),class:"invItem",src:"/src/assets/img/sword/sword"+a+".jpg"},null,8,AU)],8,_U))),128))])])])]))),128))])}const EU=p_(jF,[["render",IU]]),bU=[{path:"/ticharlez34/",name:"home",component:Rx},{path:"/ticharlez34/createAccount/",name:"createAccount",component:xx},{path:"/ticharlez34/login/",name:"login",component:Ox},{path:"/ticharlez34/twitch/",name:"twitch",component:EU}],TU=cx({history:b1(),routes:bU});/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SU{constructor(e,t){this._delegate=e,this.firebase=t,Hc(e,new Ln("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),tw(this._delegate)))}_getService(e,t=Cr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Cr){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Hc(this._delegate,e)}_addOrOverwriteComponent(e){Zv(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CU={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Uy=new Ui("app-compat","Firebase",CU);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RU(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:On,setLogLevel:rw,onLog:nw,apps:null,SDK_VERSION:jr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:ZS}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Cr,!Cm(e,u))throw Uy.create("no-app",{appName:u});return e[u]}i.App=n;function s(u,l={}){const h=Gd(u,l);if(Cm(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(kr(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw Uy.create("invalid-app-argument",{appName:l});return f[h]()};u.serviceProps!==void 0&&$c(d,u.serviceProps),t[h]=d,n.prototype[h]=function(...f){return this._getService.bind(this,l).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?t[h]:null}function c(u,l){return l==="serverAuth"?null:l}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(){const n=RU(SU);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:x0,extendNamespace:e,createSubscribe:Wv,ErrorFactory:Ui,deepExtend:$c});function e(t){$c(n,t)}return n}const kU=x0();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My=new Nu("@firebase/app-compat"),xU="@firebase/app-compat",PU="0.2.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DU(n){On(xU,PU,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(UT()&&self.firebase!==void 0){My.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&My.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const to=kU;DU();var NU="firebase",OU="9.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */to.registerVersion(NU,OU,"app-compat");const FU="@firebase/firestore-compat",UU="0.3.9";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new k("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(){if(typeof Uint8Array>"u")throw new k("unimplemented","Uint8Arrays are not available in this environment.")}function By(){if(!wD())throw new k("unimplemented","Blobs are unavailable in Firestore in this environment.")}class ya{constructor(e){this._delegate=e}static fromBase64String(e){return By(),new ya(jn.fromBase64String(e))}static fromUint8Array(e){return Ly(),new ya(jn.fromUint8Array(e))}toBase64(){return By(),this._delegate.toBase64()}toUint8Array(){return Ly(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(n){return MU(n,["next","error","complete"])}function MU(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LU{enableIndexedDbPersistence(e,t){return zO(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return GO(e._delegate)}clearIndexedDbPersistence(e){return WO(e._delegate)}}class P0{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Fr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&yn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){KO(this._delegate,e,t,r)}enableNetwork(){return YO(this._delegate)}disableNetwork(){return XO(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,c0("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return JO(this._delegate)}onSnapshotsInSync(e){return TF(this._delegate,e)}get app(){if(!this._appCompat)throw new k("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Us(this,Sp(this._delegate,e))}catch(t){throw Ut(t,"collection()","Firestore.collection()")}}doc(e){try{return new on(this,In(this._delegate,e))}catch(t){throw Ut(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Ft(this,qO(this._delegate,e))}catch(t){throw Ut(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return ni(this._delegate,t=>e(new D0(this,t)))}batch(){return mt(this._delegate),new N0(new CF(this._delegate,e=>Ga(this._delegate,e)))}loadBundle(e){return ZO(this._delegate,e)}namedQuery(e){return eF(this._delegate,e).then(t=>t?new Ft(this,t):null)}}class kl extends Fp{constructor(e){super(),this.firestore=e}convertBytes(e){return new ya(new jn(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return on.forKey(t,this.firestore,null)}}function BU(n){BP(n)}class D0{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new kl(e)}get(e){const t=mi(e);return this._delegate.get(t).then(r=>new va(this._firestore,new rr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=mi(e);return r?(Mp("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=mi(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=mi(e);return this._delegate.delete(t),this}}class N0{constructor(e){this._delegate=e}set(e,t,r){const i=mi(e);return r?(Mp("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=mi(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=mi(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Oi{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Vo(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new wa(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Oi.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new Oi(e,new kl(e),t),i.set(t,s)),s}}Oi.INSTANCES=new WeakMap;class on{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new kl(e)}static forPath(e,t,r){if(e.length%2!==0)throw new k("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new on(t,new Me(t._delegate,r,new q(e)))}static forKey(e,t,r){return new on(t,new Me(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Us(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Us(this.firestore,Sp(this._delegate,e))}catch(t){throw Ut(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=re(e),e instanceof Me?l0(this._delegate,e):!1}set(e,t){t=Mp("DocumentReference.set",t);try{return t?Ny(this._delegate,e,t):Ny(this._delegate,e)}catch(r){throw Ut(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?Oy(this._delegate,e):Oy(this._delegate,e,t,...r)}catch(i){throw Ut(i,"updateDoc()","DocumentReference.update()")}}delete(){return EF(this._delegate)}onSnapshot(...e){const t=O0(e),r=F0(e,i=>new va(this.firestore,new rr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return k0(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=wF(this._delegate):(e==null?void 0:e.source)==="server"?t=_F(this._delegate):t=vF(this._delegate),t.then(r=>new va(this.firestore,new rr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new on(this.firestore,e?this._delegate.withConverter(Oi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ut(n,e,t){return n.message=n.message.replace(e,t),n}function O0(n){for(const e of n)if(typeof e=="object"&&!gd(e))return e;return{}}function F0(n,e){var t,r;let i;return gd(n[0])?i=n[0]:gd(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class va{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new on(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return C0(this._delegate,e._delegate)}}class wa extends va{data(e){const t=this._delegate.data(e);return VP(t!==void 0),t}}class Ft{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new kl(e)}where(e,t,r){try{return new Ft(this.firestore,$n(this._delegate,E0(e,t,r)))}catch(i){throw Ut(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Ft(this.firestore,$n(this._delegate,uF(e,t)))}catch(r){throw Ut(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Ft(this.firestore,$n(this._delegate,lF(e)))}catch(t){throw Ut(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Ft(this.firestore,$n(this._delegate,hF(e)))}catch(t){throw Ut(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Ft(this.firestore,$n(this._delegate,dF(...e)))}catch(t){throw Ut(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Ft(this.firestore,$n(this._delegate,fF(...e)))}catch(t){throw Ut(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Ft(this.firestore,$n(this._delegate,pF(...e)))}catch(t){throw Ut(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Ft(this.firestore,$n(this._delegate,mF(...e)))}catch(t){throw Ut(t,"endAt()","Query.endAt()")}}isEqual(e){return h0(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=AF(this._delegate):(e==null?void 0:e.source)==="server"?t=IF(this._delegate):t=R0(this._delegate),t.then(r=>new yd(this.firestore,new Vr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=O0(e),r=F0(e,i=>new yd(this.firestore,new Vr(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return k0(this._delegate,t,r)}withConverter(e){return new Ft(this.firestore,e?this._delegate.withConverter(Oi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class VU{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new wa(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class yd{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Ft(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new wa(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new VU(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new wa(this._firestore,r))})}isEqual(e){return C0(this._delegate,e._delegate)}}class Us extends Ft{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new on(this.firestore,e):null}doc(e){try{return e===void 0?new on(this.firestore,In(this._delegate)):new on(this.firestore,In(this._delegate,e))}catch(t){throw Ut(t,"doc()","CollectionReference.doc()")}}add(e){return bF(this._delegate,e).then(t=>new on(this.firestore,t))}isEqual(e){return l0(this._delegate,e._delegate)}withConverter(e){return new Us(this.firestore,e?this._delegate.withConverter(Oi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function mi(n){return Ie(n,Me)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(...e){this._delegate=new Br(...e)}static documentId(){return new Lp(Ge.keyField().canonicalString())}isEqual(e){return e=re(e),e instanceof Br?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this._delegate=e}static serverTimestamp(){const e=xF();return e._methodName="FieldValue.serverTimestamp",new ui(e)}static delete(){const e=kF();return e._methodName="FieldValue.delete",new ui(e)}static arrayUnion(...e){const t=PF(...e);return t._methodName="FieldValue.arrayUnion",new ui(t)}static arrayRemove(...e){const t=DF(...e);return t._methodName="FieldValue.arrayRemove",new ui(t)}static increment(e){const t=NF(e);return t._methodName="FieldValue.increment",new ui(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jU={Firestore:P0,GeoPoint:_l,Timestamp:Ve,Blob:ya,Transaction:D0,WriteBatch:N0,DocumentReference:on,DocumentSnapshot:va,Query:Ft,QueryDocumentSnapshot:wa,QuerySnapshot:yd,CollectionReference:Us,FieldPath:Lp,FieldValue:ui,setLogLevel:BU,CACHE_SIZE_UNLIMITED:HO};function KU(n,e){n.INTERNAL.registerComponent(new Ln("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},jU)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qU(n){KU(n,(e,t)=>new P0(e,t,new LU)),n.registerVersion(FU,UU)}qU(to);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $U=2e3;async function QU(n,e,t){var r;const{BuildInfo:i}=Fi();pn(e.sessionId,"AuthEvent did not contain a session ID");const s=await JU(e.sessionId),o={};return Ks()?o.ibi=i.packageName:Ia()?o.apn=i.packageName:ht(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,xh(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function HU(n){const{BuildInfo:e}=Fi(),t={};Ks()?t.iosBundleId=e.packageName:Ia()?t.androidPackageName=e.packageName:ht(n,"operation-not-supported-in-this-environment"),await e_(n,t)}function zU(n){const{cordova:e}=Fi();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,_C()?"_blank":"_system","location=yes"),t(i)})})}async function GU(n,e,t){const{cordova:r}=Fi();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function u(){a||(a=window.setTimeout(()=>{o(_t(n,"redirect-cancelled-by-user"))},$U))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),Ia()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function WU(n){var e,t,r,i,s,o,a,c,u,l;const h=Fi();M(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),M(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),M(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),M(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),M(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function JU(n){const e=YU(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function YU(n){if(pn(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XU=20;class ZU extends Xw{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function eM(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:rM(),postBody:null,tenantId:n.tenantId,error:_t(n,"no-auth-event")}}function tM(n,e){return vd()._set(wd(n),e)}async function Vy(n){const e=await vd()._get(wd(n));return e&&await vd()._remove(wd(n)),e}function nM(n,e){var t,r;const i=sM(e);if(i.includes("/__/auth/callback")){const s=Fc(i),o=s.firebaseError?iM(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],c=a?_t(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function rM(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<XU;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function vd(){return Jt(Vu)}function wd(n){return wi("authEvent",n.config.apiKey,n.name)}function iM(n){try{return JSON.parse(n)}catch{return null}}function sM(n){const e=Fc(n),t=e.link?decodeURIComponent(e.link):void 0,r=Fc(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Fc(i).link||i||r||t||n}function Fc(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return ts(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oM=500;class aM{constructor(){this._redirectPersistence=Pr,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=$u,this._overrideRedirectResult=hf}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new ZU(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){ht(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){WU(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),vk(),await this._originValidation(e);const o=eM(e,r,i);await tM(e,o);const a=await QU(e,o,t),c=await zU(a);return GU(e,s,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=HU(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Fi(),o=setTimeout(async()=>{await Vy(e),t.onEvent(jy())},oM),a=async l=>{clearTimeout(o);const h=await Vy(e);let d=null;h&&(l!=null&&l.url)&&(d=nM(h,l.url)),t.onEvent(d||jy())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,u=`${s.packageName.toLowerCase()}://`;Fi().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const cM=aM;function jy(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:_t("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uM(n,e){Je(n)._logFramework(e)}var lM="@firebase/auth-compat",hM="0.4.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dM=1e3;function jo(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function fM(){return jo()==="http:"||jo()==="https:"}function U0(n=qe()){return!!((jo()==="file:"||jo()==="ionic:"||jo()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function pM(){return Qd()||$d()}function mM(){return Gv()&&(document==null?void 0:document.documentMode)===11}function gM(n=qe()){return/Edge\/\d+/.test(n)}function yM(n=qe()){return mM()||gM(n)}function M0(){try{const n=self.localStorage,e=ba();if(n)return n.setItem(e,"1"),n.removeItem(e),yM()?Go():!0}catch{return Bp()&&Go()}return!1}function Bp(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function lh(){return(fM()||zv()||U0())&&!pM()&&M0()&&!Bp()}function L0(){return U0()&&typeof document<"u"}async function vM(){return L0()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},dM);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function wM(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt={LOCAL:"local",NONE:"none",SESSION:"session"},yo=M,B0="persistence";function _M(n,e){if(yo(Object.values(Wt).includes(e),n,"invalid-persistence-type"),Qd()){yo(e!==Wt.SESSION,n,"unsupported-persistence-type");return}if($d()){yo(e===Wt.NONE,n,"unsupported-persistence-type");return}if(Bp()){yo(e===Wt.NONE||e===Wt.LOCAL&&Go(),n,"unsupported-persistence-type");return}yo(e===Wt.NONE||M0(),n,"unsupported-persistence-type")}async function _d(n){await n._initializationPromise;const e=V0(),t=wi(B0,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function AM(n,e){const t=V0();if(!t)return[];const r=wi(B0,n,e);switch(t.getItem(r)){case Wt.NONE:return[ws];case Wt.LOCAL:return[As,Pr];case Wt.SESSION:return[Pr];default:return[]}}function V0(){var n;try{return((n=wM())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IM=M;class Ar{constructor(){this.browserResolver=Jt(t_),this.cordovaResolver=Jt(cM),this.underlyingResolver=null,this._redirectPersistence=Pr,this._completeRedirectFn=$u,this._overrideRedirectResult=hf}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return L0()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return IM(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await vM();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(n){return n.unwrap()}function EM(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bM(n){return K0(n)}function TM(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new SM(n,bR(n,e))}else if(r){const i=K0(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function K0(n){const{_tokenResponse:e}=n instanceof Lt?n.customData:n;if(!e)return null;if(!(n instanceof Lt)&&"temporaryProof"in e&&"phoneNumber"in e)return Ti.credentialFromResult(n);const t=e.providerId;if(!t||t===oo.PASSWORD)return null;let r;switch(t){case oo.GOOGLE:r=Tn;break;case oo.FACEBOOK:r=bn;break;case oo.GITHUB:r=Sn;break;case oo.TWITTER:r=Cn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?_s._create(t,a):Bn._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new us(t).credential({idToken:i,accessToken:s,rawNonce:c})}return n instanceof Lt?r.credentialFromError(n):r.credentialFromResult(n)}function qt(n,e){return e.catch(t=>{throw t instanceof Lt&&TM(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:bM(t),additionalUserInfo:_R(t),user:Yn.getOrCreate(i)}})}async function Ad(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>qt(n,t.confirm(r))}}class SM{constructor(e,t){this.resolver=t,this.auth=EM(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return qt(j0(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this._delegate=e,this.multiFactor=RR(e)}static getOrCreate(e){return Yn.USER_MAP.has(e)||Yn.USER_MAP.set(e,new Yn(e)),Yn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return qt(this.auth,Nw(this._delegate,e))}async linkWithPhoneNumber(e,t){return Ad(this.auth,sk(this._delegate,e,t))}async linkWithPopup(e){return qt(this.auth,pk(this._delegate,e,Ar))}async linkWithRedirect(e){return await _d(Je(this.auth)),Ek(this._delegate,e,Ar)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return qt(this.auth,Ow(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Ad(this.auth,ok(this._delegate,e,t))}reauthenticateWithPopup(e){return qt(this.auth,fk(this._delegate,e,Ar))}async reauthenticateWithRedirect(e){return await _d(Je(this.auth)),Ak(this._delegate,e,Ar)}sendEmailVerification(e){return uR(this._delegate,e)}async unlink(e){return await YC(this._delegate,e),this}updateEmail(e){return fR(this._delegate,e)}updatePassword(e){return pR(this._delegate,e)}updatePhoneNumber(e){return ak(this._delegate,e)}updateProfile(e){return dR(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return lR(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Yn.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=M;class Id{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;vo(r,"invalid-api-key",{appName:e.name}),vo(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Ar:void 0;this._delegate=t.initialize({options:{persistence:CM(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(tC),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Yn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Tw(this._delegate,e,t)}applyActionCode(e){return nR(this._delegate,e)}checkActionCode(e){return Fw(this._delegate,e)}confirmPasswordReset(e,t){return tR(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return qt(this._delegate,Uw(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return cR(this._delegate,e)}isSignInWithEmailLink(e){return sR(this._delegate,e)}async getRedirectResult(){vo(lh(),this._delegate,"operation-not-supported-in-this-environment");const e=await Tk(this._delegate,Ar);return e?qt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){uM(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=Ky(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=Ky(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return iR(this._delegate,e,t)}sendPasswordResetEmail(e,t){return eR(this._delegate,e,t||void 0)}async setPersistence(e){_M(this._delegate,e);let t;switch(e){case Wt.SESSION:t=Pr;break;case Wt.LOCAL:t=await Jt(As)._isAvailable()?As:Vu;break;case Wt.NONE:t=ws;break;default:return ht("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return qt(this._delegate,JC(this._delegate))}signInWithCredential(e){return qt(this._delegate,Bu(this._delegate,e))}signInWithCustomToken(e){return qt(this._delegate,ZC(this._delegate,e))}signInWithEmailAndPassword(e,t){return qt(this._delegate,Mw(this._delegate,e,t))}signInWithEmailLink(e,t){return qt(this._delegate,oR(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Ad(this._delegate,ik(this._delegate,e,t))}async signInWithPopup(e){return vo(lh(),this._delegate,"operation-not-supported-in-this-environment"),qt(this._delegate,dk(this._delegate,e,Ar))}async signInWithRedirect(e){return vo(lh(),this._delegate,"operation-not-supported-in-this-environment"),await _d(this._delegate),wk(this._delegate,e,Ar)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return rR(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Id.Persistence=Wt;function Ky(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&Yn.getOrCreate(o)),error:e,complete:t}}function CM(n,e){const t=AM(n,e);if(typeof self<"u"&&!t.includes(As)&&t.push(As),typeof window<"u")for(const r of[Vu,Pr])t.includes(r)||t.push(r);return t.includes(ws)||t.push(ws),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(){this.providerId="phone",this._delegate=new Ti(j0(to.auth()))}static credential(e,t){return Ti.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Vp.PHONE_SIGN_IN_METHOD=Ti.PHONE_SIGN_IN_METHOD;Vp.PROVIDER_ID=Ti.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RM=M;class kM{constructor(e,t,r=to.app()){var i;RM((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new nk(e,t,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xM="auth-compat";function PM(n){n.INTERNAL.registerComponent(new Ln(xM,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Id(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Hi.EMAIL_SIGNIN,PASSWORD_RESET:Hi.PASSWORD_RESET,RECOVER_EMAIL:Hi.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Hi.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Hi.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Hi.VERIFY_EMAIL}},EmailAuthProvider:Kr,FacebookAuthProvider:bn,GithubAuthProvider:Sn,GoogleAuthProvider:Tn,OAuthProvider:us,SAMLAuthProvider:Gc,PhoneAuthProvider:Vp,PhoneMultiFactorGenerator:n_,RecaptchaVerifier:kM,TwitterAuthProvider:Cn,Auth:Id,AuthCredential:qs,Error:Lt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(lM,hM)}PM(to);const mr={apiKey:"AIzaSyCFoWXWUQrM2LSbBQ8l0YLwMXob3BfCEQU",authDomain:"character-eebeb.firebaseapp.com",databaseURL:"https://character-eebeb-default-rtdb.firebaseio.com",projectId:"character-eebeb",storageBucket:"character-eebeb.appspot.com",messagingSenderId:"970965837555",appId:"1:970965837555:web:daaf738b4f273f549e3986"},q0=to.initializeApp(mr),Ot=q0.firestore(mr.apiKey,mr.authDomain,mr.databaseURL,mr.projectId,mr.storageBucket,mr.messagingSenderId,mr.appId);Ot.collection("users");Ot.collection("bosses");Sa(q0);const $0=AT(vx);$0.use(TU);$0.mount("#app");(function(){function n(e,t,r){function i(a,c){if(!t[a]){if(!e[a]){var u=typeof require=="function"&&require;if(!c&&u)return u(a,!0);if(s)return s(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var h=t[a]={exports:{}};e[a][0].call(h.exports,function(d){var f=e[a][1][d];return i(f||d)},h,h.exports,n,e,t,r)}return t[a].exports}for(var s=typeof require=="function"&&require,o=0;o<r.length;o++)i(r[o]);return i}return n})()({1:[function(n,e,t){var r=n("./lib/client");e.exports={client:r,Client:r}},{"./lib/client":3}],2:[function(n,e,t){function r(c,u){var l=Object.keys(c);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(c);u&&(h=h.filter(function(d){return Object.getOwnPropertyDescriptor(c,d).enumerable})),l.push.apply(l,h)}return l}function i(c){for(var u=1;u<arguments.length;u++){var l=arguments[u]!=null?arguments[u]:{};u%2?r(Object(l),!0).forEach(function(h){s(c,h,l[h])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach(function(h){Object.defineProperty(c,h,Object.getOwnPropertyDescriptor(l,h))})}return c}function s(c,u,l){return u in c?Object.defineProperty(c,u,{value:l,enumerable:!0,configurable:!0,writable:!0}):c[u]=l,c}var o=n("node-fetch"),a=n("./utils");e.exports=function(u,l){var h=u.url!==void 0?u.url:u.uri;if(a.isURL(h)||(h="https://api.twitch.tv/kraken".concat(h[0]==="/"?h:"/".concat(h))),a.isNode()){var d=Object.assign({method:"GET",json:!0},u);if(d.qs){var f=new URLSearchParams(d.qs);h+="?".concat(f)}var m={};"fetchAgent"in this.opts.connection&&(m.agent=this.opts.connection.fetchAgent);var p=o(h,i(i({},m),{},{method:d.method,headers:d.headers,body:d.body})),y={};p.then(function(P){return y={statusCode:P.status,headers:P.headers},d.json?P.json():P.text()}).then(function(P){return l(null,y,P)},function(P){return l(P,y,null)})}else{var _=Object.assign({method:"GET",headers:{}},u,{url:h}),T=new XMLHttpRequest;T.open(_.method,_.url,!0);for(var U in _.headers)T.setRequestHeader(U,_.headers[U]);T.responseType="json",T.addEventListener("load",function(P){T.readyState===4&&(T.status!==200?l(T.status,null,null):l(null,null,T.response))}),T.send()}}},{"./utils":9,"node-fetch":10}],3:[function(n,e,t){(function(r){(function(){function i(Q,w){var D=Object.keys(Q);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(Q);w&&(I=I.filter(function(V){return Object.getOwnPropertyDescriptor(Q,V).enumerable})),D.push.apply(D,I)}return D}function s(Q){for(var w=1;w<arguments.length;w++){var D=arguments[w]!=null?arguments[w]:{};w%2?i(Object(D),!0).forEach(function(I){o(Q,I,D[I])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Q,Object.getOwnPropertyDescriptors(D)):i(Object(D)).forEach(function(I){Object.defineProperty(Q,I,Object.getOwnPropertyDescriptor(D,I))})}return Q}function o(Q,w,D){return w in Q?Object.defineProperty(Q,w,{value:D,enumerable:!0,configurable:!0,writable:!0}):Q[w]=D,Q}function a(Q){return h(Q)||l(Q)||u(Q)||c()}function c(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u(Q,w){if(Q){if(typeof Q=="string")return d(Q,w);var D=Object.prototype.toString.call(Q).slice(8,-1);if(D==="Object"&&Q.constructor&&(D=Q.constructor.name),D==="Map"||D==="Set")return Array.from(Q);if(D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))return d(Q,w)}}function l(Q){if(typeof Symbol<"u"&&Q[Symbol.iterator]!=null||Q["@@iterator"]!=null)return Array.from(Q)}function h(Q){if(Array.isArray(Q))return d(Q)}function d(Q,w){(w==null||w>Q.length)&&(w=Q.length);for(var D=0,I=new Array(w);D<w;D++)I[D]=Q[D];return I}var f=typeof r<"u"?r:typeof window<"u"?window:{},m=f.WebSocket||n("ws"),p=f.fetch||n("node-fetch"),y=n("./api"),_=n("./commands"),T=n("./events").EventEmitter,U=n("./logger"),P=n("./parser"),he=n("./timer"),x=n("./utils"),Ee=!1,oe=function Q(w){if(!(this instanceof Q))return new Q(w);this.opts=x.get(w,{}),this.opts.channels=this.opts.channels||[],this.opts.connection=this.opts.connection||{},this.opts.identity=this.opts.identity||{},this.opts.options=this.opts.options||{},this.clientId=x.get(this.opts.options.clientId,null),this._globalDefaultChannel=x.channel(x.get(this.opts.options.globalDefaultChannel,"#tmijs")),this._skipMembership=x.get(this.opts.options.skipMembership,!1),this._skipUpdatingEmotesets=x.get(this.opts.options.skipUpdatingEmotesets,!1),this._updateEmotesetsTimer=null,this._updateEmotesetsTimerDelay=x.get(this.opts.options.updateEmotesetsTimer,6e4),this.maxReconnectAttempts=x.get(this.opts.connection.maxReconnectAttempts,1/0),this.maxReconnectInterval=x.get(this.opts.connection.maxReconnectInterval,3e4),this.reconnect=x.get(this.opts.connection.reconnect,!0),this.reconnectDecay=x.get(this.opts.connection.reconnectDecay,1.5),this.reconnectInterval=x.get(this.opts.connection.reconnectInterval,1e3),this.reconnecting=!1,this.reconnections=0,this.reconnectTimer=this.reconnectInterval,this.secure=x.get(this.opts.connection.secure,!this.opts.connection.server&&!this.opts.connection.port),this.emotes="",this.emotesets={},this.channels=[],this.currentLatency=0,this.globaluserstate={},this.lastJoined="",this.latency=new Date,this.moderators={},this.pingLoop=null,this.pingTimeout=null,this.reason="",this.username="",this.userstate={},this.wasCloseCalled=!1,this.ws=null;var D="error";this.opts.options.debug&&(D="info"),this.log=this.opts.logger||U;try{U.setLevel(D)}catch{}this.opts.channels.forEach(function(I,V,Z){return Z[V]=x.channel(I)}),T.call(this),this.setMaxListeners(0)};x.inherits(oe,T);for(var Et in _)oe.prototype[Et]=_[Et];oe.prototype.emits=function(w,D){for(var I=0;I<w.length;I++){var V=I<D.length?D[I]:D[D.length-1];this.emit.apply(this,[w[I]].concat(V))}},oe.prototype.api=function(){Ee||(this.log.warn("Client.prototype.api is deprecated and will be removed for version 2.0.0"),Ee=!0),y.apply(void 0,arguments)},oe.prototype.handleMessage=function(w){var D=this;if(w){this.listenerCount("raw_message")&&this.emit("raw_message",JSON.parse(JSON.stringify(w)),w);var I=x.channel(x.get(w.params[0],null)),V=x.get(w.params[1],null),Z=x.get(w.tags["msg-id"],null),J=w.tags=P.badges(P.badgeInfo(P.emotes(w.tags)));for(var de in J)if(!(de==="emote-sets"||de==="ban-duration"||de==="bits")){var ie=J[de];typeof ie=="boolean"?ie=null:ie==="1"?ie=!0:ie==="0"?ie=!1:typeof ie=="string"&&(ie=x.unescapeIRC(ie)),J[de]=ie}if(w.prefix===null)switch(w.command){case"PING":this.emit("ping"),this._isConnected()&&this.ws.send("PONG");break;case"PONG":{var Vt=new Date;this.currentLatency=(Vt.getTime()-this.latency.getTime())/1e3,this.emits(["pong","_promisePing"],[[this.currentLatency]]),clearTimeout(this.pingTimeout);break}default:this.log.warn(`Could not parse message with no prefix:
`.concat(JSON.stringify(w,null,4)));break}else if(w.prefix==="tmi.twitch.tv")switch(w.command){case"002":case"003":case"004":case"372":case"375":case"CAP":break;case"001":this.username=w.params[0];break;case"376":{this.log.info("Connected to server."),this.userstate[this._globalDefaultChannel]={},this.emits(["connected","_promiseConnect"],[[this.server,this.port],[null]]),this.reconnections=0,this.reconnectTimer=this.reconnectInterval,this.pingLoop=setInterval(function(){D._isConnected()&&D.ws.send("PING"),D.latency=new Date,D.pingTimeout=setTimeout(function(){D.ws!==null&&(D.wasCloseCalled=!1,D.log.error("Ping timeout."),D.ws.close(),clearInterval(D.pingLoop),clearTimeout(D.pingTimeout),clearTimeout(D._updateEmotesetsTimer))},x.get(D.opts.connection.timeout,9999))},6e4);var Dt=x.get(this.opts.options.joinInterval,2e3);Dt<300&&(Dt=300);var st=new he(Dt),Ye=a(new Set([].concat(a(this.opts.channels),a(this.channels))));this.channels=[];for(var Zt=function(Y0){var X0=Ye[Y0];st.add(function(){D._isConnected()&&D.join(X0).catch(function(Z0){return D.log.error(Z0)})})},en=0;en<Ye.length;en++)Zt(en);st.next();break}case"NOTICE":{var bt=[null],De=[I,Z,V],C=[Z],H=[I,!0],B=[I,!1],W=[De,bt],se=[De,C],g="[".concat(I,"] ").concat(V);switch(Z){case"subs_on":this.log.info("[".concat(I,"] This room is now in subscribers-only mode.")),this.emits(["subscriber","subscribers","_promiseSubscribers"],[H,H,bt]);break;case"subs_off":this.log.info("[".concat(I,"] This room is no longer in subscribers-only mode.")),this.emits(["subscriber","subscribers","_promiseSubscribersoff"],[B,B,bt]);break;case"emote_only_on":this.log.info("[".concat(I,"] This room is now in emote-only mode.")),this.emits(["emoteonly","_promiseEmoteonly"],[H,bt]);break;case"emote_only_off":this.log.info("[".concat(I,"] This room is no longer in emote-only mode.")),this.emits(["emoteonly","_promiseEmoteonlyoff"],[B,bt]);break;case"slow_on":case"slow_off":break;case"followers_on_zero":case"followers_on":case"followers_off":break;case"r9k_on":this.log.info("[".concat(I,"] This room is now in r9k mode.")),this.emits(["r9kmode","r9kbeta","_promiseR9kbeta"],[H,H,bt]);break;case"r9k_off":this.log.info("[".concat(I,"] This room is no longer in r9k mode.")),this.emits(["r9kmode","r9kbeta","_promiseR9kbetaoff"],[B,B,bt]);break;case"room_mods":{var v=V.split(": "),A=(v.length>1?v[1]:"").toLowerCase().split(", ").filter(function(wn){return wn});this.emits(["_promiseMods","mods"],[[null,A],[I,A]]);break}case"no_mods":this.emits(["_promiseMods","mods"],[[null,[]],[I,[]]]);break;case"vips_success":{V.endsWith(".")&&(V=V.slice(0,-1));var S=V.split(": "),R=(S.length>1?S[1]:"").toLowerCase().split(", ").filter(function(wn){return wn});this.emits(["_promiseVips","vips"],[[null,R],[I,R]]);break}case"no_vips":this.emits(["_promiseVips","vips"],[[null,[]],[I,[]]]);break;case"already_banned":case"bad_ban_admin":case"bad_ban_anon":case"bad_ban_broadcaster":case"bad_ban_global_mod":case"bad_ban_mod":case"bad_ban_self":case"bad_ban_staff":case"usage_ban":this.log.info(g),this.emits(["notice","_promiseBan"],se);break;case"ban_success":this.log.info(g),this.emits(["notice","_promiseBan"],W);break;case"usage_clear":this.log.info(g),this.emits(["notice","_promiseClear"],se);break;case"usage_mods":this.log.info(g),this.emits(["notice","_promiseMods"],[De,[Z,[]]]);break;case"mod_success":this.log.info(g),this.emits(["notice","_promiseMod"],W);break;case"usage_vips":this.log.info(g),this.emits(["notice","_promiseVips"],[De,[Z,[]]]);break;case"usage_vip":case"bad_vip_grantee_banned":case"bad_vip_grantee_already_vip":case"bad_vip_max_vips_reached":case"bad_vip_achievement_incomplete":this.log.info(g),this.emits(["notice","_promiseVip"],[De,[Z,[]]]);break;case"vip_success":this.log.info(g),this.emits(["notice","_promiseVip"],W);break;case"usage_mod":case"bad_mod_banned":case"bad_mod_mod":this.log.info(g),this.emits(["notice","_promiseMod"],se);break;case"unmod_success":this.log.info(g),this.emits(["notice","_promiseUnmod"],W);break;case"unvip_success":this.log.info(g),this.emits(["notice","_promiseUnvip"],W);break;case"usage_unmod":case"bad_unmod_mod":this.log.info(g),this.emits(["notice","_promiseUnmod"],se);break;case"usage_unvip":case"bad_unvip_grantee_not_vip":this.log.info(g),this.emits(["notice","_promiseUnvip"],se);break;case"color_changed":this.log.info(g),this.emits(["notice","_promiseColor"],W);break;case"usage_color":case"turbo_only_color":this.log.info(g),this.emits(["notice","_promiseColor"],se);break;case"commercial_success":this.log.info(g),this.emits(["notice","_promiseCommercial"],W);break;case"usage_commercial":case"bad_commercial_error":this.log.info(g),this.emits(["notice","_promiseCommercial"],se);break;case"hosts_remaining":{this.log.info(g);var O=isNaN(V[0])?0:parseInt(V[0]);this.emits(["notice","_promiseHost"],[De,[null,~~O]]);break}case"bad_host_hosting":case"bad_host_rate_exceeded":case"bad_host_error":case"usage_host":this.log.info(g),this.emits(["notice","_promiseHost"],[De,[Z,null]]);break;case"already_r9k_on":case"usage_r9k_on":this.log.info(g),this.emits(["notice","_promiseR9kbeta"],se);break;case"already_r9k_off":case"usage_r9k_off":this.log.info(g),this.emits(["notice","_promiseR9kbetaoff"],se);break;case"timeout_success":this.log.info(g),this.emits(["notice","_promiseTimeout"],W);break;case"delete_message_success":this.log.info("[".concat(I," ").concat(V,"]")),this.emits(["notice","_promiseDeletemessage"],W);break;case"already_subs_off":case"usage_subs_off":this.log.info(g),this.emits(["notice","_promiseSubscribersoff"],se);break;case"already_subs_on":case"usage_subs_on":this.log.info(g),this.emits(["notice","_promiseSubscribers"],se);break;case"already_emote_only_off":case"usage_emote_only_off":this.log.info(g),this.emits(["notice","_promiseEmoteonlyoff"],se);break;case"already_emote_only_on":case"usage_emote_only_on":this.log.info(g),this.emits(["notice","_promiseEmoteonly"],se);break;case"usage_slow_on":this.log.info(g),this.emits(["notice","_promiseSlow"],se);break;case"usage_slow_off":this.log.info(g),this.emits(["notice","_promiseSlowoff"],se);break;case"usage_timeout":case"bad_timeout_admin":case"bad_timeout_anon":case"bad_timeout_broadcaster":case"bad_timeout_duration":case"bad_timeout_global_mod":case"bad_timeout_mod":case"bad_timeout_self":case"bad_timeout_staff":this.log.info(g),this.emits(["notice","_promiseTimeout"],se);break;case"untimeout_success":case"unban_success":this.log.info(g),this.emits(["notice","_promiseUnban"],W);break;case"usage_unban":case"bad_unban_no_ban":this.log.info(g),this.emits(["notice","_promiseUnban"],se);break;case"usage_delete":case"bad_delete_message_error":case"bad_delete_message_broadcaster":case"bad_delete_message_mod":this.log.info(g),this.emits(["notice","_promiseDeletemessage"],se);break;case"usage_unhost":case"not_hosting":this.log.info(g),this.emits(["notice","_promiseUnhost"],se);break;case"whisper_invalid_login":case"whisper_invalid_self":case"whisper_limit_per_min":case"whisper_limit_per_sec":case"whisper_restricted":case"whisper_restricted_recipient":this.log.info(g),this.emits(["notice","_promiseWhisper"],se);break;case"no_permission":case"msg_banned":case"msg_room_not_found":case"msg_channel_suspended":case"tos_ban":case"invalid_user":this.log.info(g),this.emits(["notice","_promiseBan","_promiseClear","_promiseUnban","_promiseTimeout","_promiseDeletemessage","_promiseMods","_promiseMod","_promiseUnmod","_promiseVips","_promiseVip","_promiseUnvip","_promiseCommercial","_promiseHost","_promiseUnhost","_promiseJoin","_promisePart","_promiseR9kbeta","_promiseR9kbetaoff","_promiseSlow","_promiseSlowoff","_promiseFollowers","_promiseFollowersoff","_promiseSubscribers","_promiseSubscribersoff","_promiseEmoteonly","_promiseEmoteonlyoff","_promiseWhisper"],[De,[Z,I]]);break;case"msg_rejected":case"msg_rejected_mandatory":this.log.info(g),this.emit("automod",I,Z,V);break;case"unrecognized_cmd":this.log.info(g),this.emit("notice",I,Z,V);break;case"cmds_available":case"host_target_went_offline":case"msg_censored_broadcaster":case"msg_duplicate":case"msg_emoteonly":case"msg_verified_email":case"msg_ratelimit":case"msg_subsonly":case"msg_timedout":case"msg_bad_characters":case"msg_channel_blocked":case"msg_facebook":case"msg_followersonly":case"msg_followersonly_followed":case"msg_followersonly_zero":case"msg_slowmode":case"msg_suspended":case"no_help":case"usage_disconnect":case"usage_help":case"usage_me":case"unavailable_command":this.log.info(g),this.emit("notice",I,Z,V);break;case"host_on":case"host_off":break;default:V.includes("Login unsuccessful")||V.includes("Login authentication failed")?(this.wasCloseCalled=!1,this.reconnect=!1,this.reason=V,this.log.error(this.reason),this.ws.close()):V.includes("Error logging in")||V.includes("Improperly formatted auth")?(this.wasCloseCalled=!1,this.reconnect=!1,this.reason=V,this.log.error(this.reason),this.ws.close()):V.includes("Invalid NICK")?(this.wasCloseCalled=!1,this.reconnect=!1,this.reason="Invalid NICK.",this.log.error(this.reason),this.ws.close()):(this.log.warn(`Could not parse NOTICE from tmi.twitch.tv:
`.concat(JSON.stringify(w,null,4))),this.emit("notice",I,Z,V));break}break}case"USERNOTICE":{var j=J["display-name"]||J.login,L=J["msg-param-sub-plan"]||"",K=x.unescapeIRC(x.get(J["msg-param-sub-plan-name"],""))||null,F=L.includes("Prime"),X={prime:F,plan:L,planName:K},Y=~~(J["msg-param-streak-months"]||0),ne=J["msg-param-recipient-display-name"]||J["msg-param-recipient-user-name"],ae=~~J["msg-param-mass-gift-count"];switch(J["message-type"]=Z,Z){case"resub":this.emits(["resub","subanniversary"],[[I,j,Y,V,J,X]]);break;case"sub":this.emits(["subscription","sub"],[[I,j,X,V,J]]);break;case"subgift":this.emit("subgift",I,j,Y,ne,X,J);break;case"anonsubgift":this.emit("anonsubgift",I,Y,ne,X,J);break;case"submysterygift":this.emit("submysterygift",I,j,ae,X,J);break;case"anonsubmysterygift":this.emit("anonsubmysterygift",I,ae,X,J);break;case"primepaidupgrade":this.emit("primepaidupgrade",I,j,X,J);break;case"giftpaidupgrade":{var ge=J["msg-param-sender-name"]||J["msg-param-sender-login"];this.emit("giftpaidupgrade",I,j,ge,J);break}case"anongiftpaidupgrade":this.emit("anongiftpaidupgrade",I,j,J);break;case"raid":{var Pe=J["msg-param-displayName"]||J["msg-param-login"],Te=+J["msg-param-viewerCount"];this.emit("raided",I,Pe,Te,J);break}case"ritual":{var Ke=J["msg-param-ritual-name"];switch(Ke){case"new_chatter":this.emit("newchatter",I,j,J,V);break;default:this.emit("ritual",Ke,I,j,J,V);break}break}default:this.emit("usernotice",Z,I,J,V);break}break}case"HOSTTARGET":{var Tt=V.split(" "),vn=~~Tt[1]||0;Tt[0]==="-"?(this.log.info("[".concat(I,"] Exited host mode.")),this.emits(["unhost","_promiseUnhost"],[[I,vn],[null]])):(this.log.info("[".concat(I,"] Now hosting ").concat(Tt[0]," for ").concat(vn," viewer(s).")),this.emit("hosting",I,Tt[0],vn));break}case"CLEARCHAT":if(w.params.length>1){var $i=x.get(w.tags["ban-duration"],null);$i===null?(this.log.info("[".concat(I,"] ").concat(V," has been banned.")),this.emit("ban",I,V,null,w.tags)):(this.log.info("[".concat(I,"] ").concat(V," has been timed out for ").concat($i," seconds.")),this.emit("timeout",I,V,null,~~$i,w.tags))}else this.log.info("[".concat(I,"] Chat was cleared by a moderator.")),this.emits(["clearchat","_promiseClear"],[[I],[null]]);break;case"CLEARMSG":if(w.params.length>1){var Wr=V,no=J.login;J["message-type"]="messagedeleted",this.log.info("[".concat(I,"] ").concat(no,"'s message has been deleted.")),this.emit("messagedeleted",I,no,Wr,J)}break;case"RECONNECT":this.log.info("Received RECONNECT request from Twitch.."),this.log.info("Disconnecting and reconnecting in ".concat(Math.round(this.reconnectTimer/1e3)," seconds..")),this.disconnect().catch(function(wn){return D.log.error(wn)}),setTimeout(function(){return D.connect().catch(function(wn){return D.log.error(wn)})},this.reconnectTimer);break;case"USERSTATE":w.tags.username=this.username,w.tags["user-type"]==="mod"&&(this.moderators[I]||(this.moderators[I]=[]),this.moderators[I].includes(this.username)||this.moderators[I].push(this.username)),!x.isJustinfan(this.getUsername())&&!this.userstate[I]&&(this.userstate[I]=J,this.lastJoined=I,this.channels.push(I),this.log.info("Joined ".concat(I)),this.emit("join",I,x.username(this.getUsername()),!0)),w.tags["emote-sets"]!==this.emotes&&this._updateEmoteset(w.tags["emote-sets"]),this.userstate[I]=J;break;case"GLOBALUSERSTATE":this.globaluserstate=J,this.emit("globaluserstate",J),typeof w.tags["emote-sets"]<"u"&&this._updateEmoteset(w.tags["emote-sets"]);break;case"ROOMSTATE":if(x.channel(this.lastJoined)===I&&this.emit("_promiseJoin",null,I),w.tags.channel=I,this.emit("roomstate",I,w.tags),!x.hasOwn(w.tags,"subs-only")){if(x.hasOwn(w.tags,"slow"))if(typeof w.tags.slow=="boolean"&&!w.tags.slow){var St=[I,!1,0];this.log.info("[".concat(I,"] This room is no longer in slow mode.")),this.emits(["slow","slowmode","_promiseSlowoff"],[St,St,[null]])}else{var tn=~~w.tags.slow,ro=[I,!0,tn];this.log.info("[".concat(I,"] This room is now in slow mode.")),this.emits(["slow","slowmode","_promiseSlow"],[ro,ro,[null]])}if(x.hasOwn(w.tags,"followers-only"))if(w.tags["followers-only"]==="-1"){var jp=[I,!1,0];this.log.info("[".concat(I,"] This room is no longer in followers-only mode.")),this.emits(["followersonly","followersmode","_promiseFollowersoff"],[jp,jp,[null]])}else{var Q0=~~w.tags["followers-only"],Kp=[I,!0,Q0];this.log.info("[".concat(I,"] This room is now in follower-only mode.")),this.emits(["followersonly","followersmode","_promiseFollowers"],[Kp,Kp,[null]])}}break;case"SERVERCHANGE":break;default:this.log.warn(`Could not parse message from tmi.twitch.tv:
`.concat(JSON.stringify(w,null,4)));break}else if(w.prefix==="jtv")switch(w.command){case"MODE":V==="+o"?(this.moderators[I]||(this.moderators[I]=[]),this.moderators[I].includes(w.params[2])||this.moderators[I].push(w.params[2]),this.emit("mod",I,w.params[2])):V==="-o"&&(this.moderators[I]||(this.moderators[I]=[]),this.moderators[I].filter(function(wn){return wn!==w.params[2]}),this.emit("unmod",I,w.params[2]));break;default:this.log.warn(`Could not parse message from jtv:
`.concat(JSON.stringify(w,null,4)));break}else switch(w.command){case"353":this.emit("names",w.params[2],w.params[3].split(" "));break;case"366":break;case"JOIN":{var Wa=w.prefix.split("!")[0];x.isJustinfan(this.getUsername())&&this.username===Wa&&(this.lastJoined=I,this.channels.push(I),this.log.info("Joined ".concat(I)),this.emit("join",I,Wa,!0)),this.username!==Wa&&this.emit("join",I,Wa,!1);break}case"PART":{var qp=!1,$p=w.prefix.split("!")[0];if(this.username===$p){qp=!0,this.userstate[I]&&delete this.userstate[I];var io=this.channels.indexOf(I);io!==-1&&this.channels.splice(io,1),io=this.opts.channels.indexOf(I),io!==-1&&this.opts.channels.splice(io,1),this.log.info("Left ".concat(I)),this.emit("_promisePart",null)}this.emit("part",I,$p,qp);break}case"WHISPER":{var Qp=w.prefix.split("!")[0];this.log.info("[WHISPER] <".concat(Qp,">: ").concat(V)),x.hasOwn(w.tags,"username")||(w.tags.username=Qp),w.tags["message-type"]="whisper";var H0=x.channel(w.tags.username);this.emits(["whisper","message"],[[H0,w.tags,V,!1]]);break}case"PRIVMSG":if(w.tags.username=w.prefix.split("!")[0],w.tags.username==="jtv"){var Hp=x.username(V.split(" ")[0]),zp=V.includes("auto");if(V.includes("hosting you for")){var z0=x.extractNumber(V);this.emit("hosted",I,Hp,z0,zp)}else V.includes("hosting you")&&this.emit("hosted",I,Hp,0,zp)}else{var Gp=x.get(this.opts.options.messagesLogLevel,"info"),Ja=x.actionMessage(V);if(w.tags["message-type"]=Ja?"action":"chat",V=Ja?Ja[1]:V,x.hasOwn(w.tags,"bits"))this.emit("cheer",I,w.tags,V);else{if(x.hasOwn(w.tags,"msg-id")){if(w.tags["msg-id"]==="highlighted-message"){var G0=w.tags["msg-id"];this.emit("redeem",I,w.tags.username,G0,w.tags,V)}else if(w.tags["msg-id"]==="skip-subs-mode-message"){var W0=w.tags["msg-id"];this.emit("redeem",I,w.tags.username,W0,w.tags,V)}}else if(x.hasOwn(w.tags,"custom-reward-id")){var J0=w.tags["custom-reward-id"];this.emit("redeem",I,w.tags.username,J0,w.tags,V)}Ja?(this.log[Gp]("[".concat(I,"] *<").concat(w.tags.username,">: ").concat(V)),this.emits(["action","message"],[[I,w.tags,V,!1]])):(this.log[Gp]("[".concat(I,"] <").concat(w.tags.username,">: ").concat(V)),this.emits(["chat","message"],[[I,w.tags,V,!1]]))}}break;default:this.log.warn(`Could not parse message:
`.concat(JSON.stringify(w,null,4)));break}}},oe.prototype.connect=function(){var w=this;return new Promise(function(D,I){w.server=x.get(w.opts.connection.server,"irc-ws.chat.twitch.tv"),w.port=x.get(w.opts.connection.port,80),w.secure&&(w.port=443),w.port===443&&(w.secure=!0),w.reconnectTimer=w.reconnectTimer*w.reconnectDecay,w.reconnectTimer>=w.maxReconnectInterval&&(w.reconnectTimer=w.maxReconnectInterval),w._openConnection(),w.once("_promiseConnect",function(V){V?I(V):D([w.server,~~w.port])})})},oe.prototype._openConnection=function(){var w="".concat(this.secure?"wss":"ws","://").concat(this.server,":").concat(this.port,"/"),D={};"agent"in this.opts.connection&&(D.agent=this.opts.connection.agent),this.ws=new m(w,"irc",D),this.ws.onmessage=this._onMessage.bind(this),this.ws.onerror=this._onError.bind(this),this.ws.onclose=this._onClose.bind(this),this.ws.onopen=this._onOpen.bind(this)},oe.prototype._onOpen=function(){var w=this;this._isConnected()&&(this.log.info("Connecting to ".concat(this.server," on port ").concat(this.port,"..")),this.emit("connecting",this.server,~~this.port),this.username=x.get(this.opts.identity.username,x.justinfan()),this._getToken().then(function(D){var I=x.password(D);w.log.info("Sending authentication to server.."),w.emit("logon");var V="twitch.tv/tags twitch.tv/commands";w._skipMembership||(V+=" twitch.tv/membership"),w.ws.send("CAP REQ :"+V),I?w.ws.send("PASS ".concat(I)):x.isJustinfan(w.username)&&w.ws.send("PASS SCHMOOPIIE"),w.ws.send("NICK ".concat(w.username))}).catch(function(D){w.emits(["_promiseConnect","disconnected"],[[D],["Could not get a token."]])}))},oe.prototype._getToken=function(){var w=this.opts.identity.password,D;return typeof w=="function"?(D=w(),D instanceof Promise?D:Promise.resolve(D)):Promise.resolve(w)},oe.prototype._onMessage=function(w){var D=this,I=w.data.trim().split(`\r
`);I.forEach(function(V){var Z=P.msg(V);Z&&D.handleMessage(Z)})},oe.prototype._onError=function(){var w=this;this.moderators={},this.userstate={},this.globaluserstate={},clearInterval(this.pingLoop),clearTimeout(this.pingTimeout),clearTimeout(this._updateEmotesetsTimer),this.reason=this.ws===null?"Connection closed.":"Unable to connect.",this.emits(["_promiseConnect","disconnected"],[[this.reason]]),this.reconnect&&this.reconnections===this.maxReconnectAttempts&&(this.emit("maxreconnect"),this.log.error("Maximum reconnection attempts reached.")),this.reconnect&&!this.reconnecting&&this.reconnections<=this.maxReconnectAttempts-1&&(this.reconnecting=!0,this.reconnections=this.reconnections+1,this.log.error("Reconnecting in ".concat(Math.round(this.reconnectTimer/1e3)," seconds..")),this.emit("reconnect"),setTimeout(function(){w.reconnecting=!1,w.connect().catch(function(D){return w.log.error(D)})},this.reconnectTimer)),this.ws=null},oe.prototype._onClose=function(){var w=this;this.moderators={},this.userstate={},this.globaluserstate={},clearInterval(this.pingLoop),clearTimeout(this.pingTimeout),clearTimeout(this._updateEmotesetsTimer),this.wasCloseCalled?(this.wasCloseCalled=!1,this.reason="Connection closed.",this.log.info(this.reason),this.emits(["_promiseConnect","_promiseDisconnect","disconnected"],[[this.reason],[null],[this.reason]])):(this.emits(["_promiseConnect","disconnected"],[[this.reason]]),this.reconnect&&this.reconnections===this.maxReconnectAttempts&&(this.emit("maxreconnect"),this.log.error("Maximum reconnection attempts reached.")),this.reconnect&&!this.reconnecting&&this.reconnections<=this.maxReconnectAttempts-1&&(this.reconnecting=!0,this.reconnections=this.reconnections+1,this.log.error("Could not connect to server. Reconnecting in ".concat(Math.round(this.reconnectTimer/1e3)," seconds..")),this.emit("reconnect"),setTimeout(function(){w.reconnecting=!1,w.connect().catch(function(D){return w.log.error(D)})},this.reconnectTimer))),this.ws=null},oe.prototype._getPromiseDelay=function(){return this.currentLatency<=600?600:this.currentLatency+100},oe.prototype._sendCommand=function(w,D,I,V){var Z=this;return new Promise(function(J,de){if(Z._isConnected())(w===null||typeof w=="number")&&(w===null&&(w=Z._getPromiseDelay()),x.promiseDelay(w).then(function(){return de("No response from Twitch.")}));else return de("Not connected to server.");if(D!==null){var ie=x.channel(D);Z.log.info("[".concat(ie,"] Executing command: ").concat(I)),Z.ws.send("PRIVMSG ".concat(ie," :").concat(I))}else Z.log.info("Executing command: ".concat(I)),Z.ws.send(I);typeof V=="function"?V(J,de):J()})},oe.prototype._sendMessage=function(w,D,I,V){var Z=this;return new Promise(function(J,de){if(Z._isConnected()){if(x.isJustinfan(Z.getUsername()))return de("Cannot send anonymous messages.")}else return de("Not connected to server.");var ie=x.channel(D);if(Z.userstate[ie]||(Z.userstate[ie]={}),I.length>=500){var Vt=x.splitLine(I,500);I=Vt[0],setTimeout(function(){Z._sendMessage(w,D,Vt[1],function(){})},350)}Z.ws.send("PRIVMSG ".concat(ie," :").concat(I));var Dt={};Object.keys(Z.emotesets).forEach(function(en){return Z.emotesets[en].forEach(function(bt){var De=x.isRegex(bt.code)?P.emoteRegex:P.emoteString;return De(I,bt.code,bt.id,Dt)})});var st=Object.assign(Z.userstate[ie],P.emotes({emotes:P.transformEmotes(Dt)||null})),Ye=x.get(Z.opts.options.messagesLogLevel,"info"),Zt=x.actionMessage(I);Zt?(st["message-type"]="action",Z.log[Ye]("[".concat(ie,"] *<").concat(Z.getUsername(),">: ").concat(Zt[1])),Z.emits(["action","message"],[[ie,st,Zt[1],!0]])):(st["message-type"]="chat",Z.log[Ye]("[".concat(ie,"] <").concat(Z.getUsername(),">: ").concat(I)),Z.emits(["chat","message"],[[ie,st,I,!0]])),typeof V=="function"?V(J,de):J()})},oe.prototype._updateEmoteset=function(w){var D=this,I=w!==void 0;if(I&&(w===this.emotes?I=!1:this.emotes=w),this._skipUpdatingEmotesets){I&&this.emit("emotesets",w,{});return}var V=function(){D._updateEmotesetsTimerDelay>0&&(clearTimeout(D._updateEmotesetsTimer),D._updateEmotesetsTimer=setTimeout(function(){return D._updateEmoteset(w)},D._updateEmotesetsTimerDelay))};this._getToken().then(function(Z){var J="https://api.twitch.tv/kraken/chat/emoticon_images?emotesets=".concat(w),de={};return"fetchAgent"in D.opts.connection&&(de.agent=D.opts.connection.fetchAgent),p(J,s(s({},de),{},{headers:{Accept:"application/vnd.twitchtv.v5+json",Authorization:"OAuth ".concat(x.token(Z)),"Client-ID":D.clientId}}))}).then(function(Z){return Z.json()}).then(function(Z){D.emotesets=Z.emoticon_sets||{},D.emit("emotesets",w,D.emotesets),V()}).catch(function(){return V()})},oe.prototype.getUsername=function(){return this.username},oe.prototype.getOptions=function(){return this.opts},oe.prototype.getChannels=function(){return this.channels},oe.prototype.isMod=function(w,D){var I=x.channel(w);return this.moderators[I]||(this.moderators[I]=[]),this.moderators[I].includes(x.username(D))},oe.prototype.readyState=function(){return this.ws===null?"CLOSED":["CONNECTING","OPEN","CLOSING","CLOSED"][this.ws.readyState]},oe.prototype._isConnected=function(){return this.ws!==null&&this.ws.readyState===1},oe.prototype.disconnect=function(){var w=this;return new Promise(function(D,I){w.ws!==null&&w.ws.readyState!==3?(w.wasCloseCalled=!0,w.log.info("Disconnecting from server.."),w.ws.close(),w.once("_promiseDisconnect",function(){return D([w.server,~~w.port])})):(w.log.error("Cannot disconnect from server. Socket is not opened or connection is already closing."),I("Cannot disconnect from server. Socket is not opened or connection is already closing."))})},oe.prototype.off=oe.prototype.removeListener,typeof e<"u"&&e.exports&&(e.exports=oe),typeof window<"u"&&(window.tmi={client:oe,Client:oe})}).call(this)}).call(this,typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{})},{"./api":2,"./commands":4,"./events":5,"./logger":6,"./parser":7,"./timer":8,"./utils":9,"node-fetch":10,ws:10}],4:[function(n,e,t){var r=n("./utils");function i(h,d){var f=this;return h=r.channel(h),d=r.get(d,30),this._sendCommand(null,h,"/followers ".concat(d),function(m,p){f.once("_promiseFollowers",function(y){y?p(y):m([h,~~d])})})}function s(h){var d=this;return h=r.channel(h),this._sendCommand(null,h,"/followersoff",function(f,m){d.once("_promiseFollowersoff",function(p){p?m(p):f([h])})})}function o(h){var d=this;return h=r.channel(h),this._sendCommand(null,null,"PART ".concat(h),function(f,m){d.once("_promisePart",function(p){p?m(p):f([h])})})}function a(h){var d=this;return h=r.channel(h),this._sendCommand(null,h,"/r9kbeta",function(f,m){d.once("_promiseR9kbeta",function(p){p?m(p):f([h])})})}function c(h){var d=this;return h=r.channel(h),this._sendCommand(null,h,"/r9kbetaoff",function(f,m){d.once("_promiseR9kbetaoff",function(p){p?m(p):f([h])})})}function u(h,d){var f=this;return h=r.channel(h),d=r.get(d,300),this._sendCommand(null,h,"/slow ".concat(d),function(m,p){f.once("_promiseSlow",function(y){y?p(y):m([h,~~d])})})}function l(h){var d=this;return h=r.channel(h),this._sendCommand(null,h,"/slowoff",function(f,m){d.once("_promiseSlowoff",function(p){p?m(p):f([h])})})}e.exports={action:function(d,f){return d=r.channel(d),f="ACTION ".concat(f,""),this._sendMessage(this._getPromiseDelay(),d,f,function(m,p){m([d,f])})},ban:function(d,f,m){var p=this;return d=r.channel(d),f=r.username(f),m=r.get(m,""),this._sendCommand(null,d,"/ban ".concat(f," ").concat(m),function(y,_){p.once("_promiseBan",function(T){T?_(T):y([d,f,m])})})},clear:function(d){var f=this;return d=r.channel(d),this._sendCommand(null,d,"/clear",function(m,p){f.once("_promiseClear",function(y){y?p(y):m([d])})})},color:function(d,f){var m=this;return f=r.get(f,d),this._sendCommand(null,"#tmijs","/color ".concat(f),function(p,y){m.once("_promiseColor",function(_){_?y(_):p([f])})})},commercial:function(d,f){var m=this;return d=r.channel(d),f=r.get(f,30),this._sendCommand(null,d,"/commercial ".concat(f),function(p,y){m.once("_promiseCommercial",function(_){_?y(_):p([d,~~f])})})},deletemessage:function(d,f){var m=this;return d=r.channel(d),this._sendCommand(null,d,"/delete ".concat(f),function(p,y){m.once("_promiseDeletemessage",function(_){_?y(_):p([d])})})},emoteonly:function(d){var f=this;return d=r.channel(d),this._sendCommand(null,d,"/emoteonly",function(m,p){f.once("_promiseEmoteonly",function(y){y?p(y):m([d])})})},emoteonlyoff:function(d){var f=this;return d=r.channel(d),this._sendCommand(null,d,"/emoteonlyoff",function(m,p){f.once("_promiseEmoteonlyoff",function(y){y?p(y):m([d])})})},followersonly:i,followersmode:i,followersonlyoff:s,followersmodeoff:s,host:function(d,f){var m=this;return d=r.channel(d),f=r.username(f),this._sendCommand(2e3,d,"/host ".concat(f),function(p,y){m.once("_promiseHost",function(_,T){_?y(_):p([d,f,~~T])})})},join:function(d){var f=this;return d=r.channel(d),this._sendCommand(void 0,null,"JOIN ".concat(d),function(m,p){var y="_promiseJoin",_=!1,T=function P(he,x){d===r.channel(x)&&(f.removeListener(y,P),_=!0,he?p(he):m([d]))};f.on(y,T);var U=f._getPromiseDelay();r.promiseDelay(U).then(function(){_||f.emit(y,"No response from Twitch.",d)})})},mod:function(d,f){var m=this;return d=r.channel(d),f=r.username(f),this._sendCommand(null,d,"/mod ".concat(f),function(p,y){m.once("_promiseMod",function(_){_?y(_):p([d,f])})})},mods:function(d){var f=this;return d=r.channel(d),this._sendCommand(null,d,"/mods",function(m,p){f.once("_promiseMods",function(y,_){y?p(y):(_.forEach(function(T){f.moderators[d]||(f.moderators[d]=[]),f.moderators[d].includes(T)||f.moderators[d].push(T)}),m(_))})})},part:o,leave:o,ping:function(){var d=this;return this._sendCommand(null,null,"PING",function(f,m){d.latency=new Date,d.pingTimeout=setTimeout(function(){d.ws!==null&&(d.wasCloseCalled=!1,d.log.error("Ping timeout."),d.ws.close(),clearInterval(d.pingLoop),clearTimeout(d.pingTimeout))},r.get(d.opts.connection.timeout,9999)),d.once("_promisePing",function(p){return f([parseFloat(p)])})})},r9kbeta:a,r9kmode:a,r9kbetaoff:c,r9kmodeoff:c,raw:function(d){return this._sendCommand(null,null,d,function(f,m){f([d])})},say:function(d,f){return d=r.channel(d),f.startsWith(".")&&!f.startsWith("..")||f.startsWith("/")||f.startsWith("\\")?f.substr(1,3)==="me "?this.action(d,f.substr(4)):this._sendCommand(null,d,f,function(m,p){m([d,f])}):this._sendMessage(this._getPromiseDelay(),d,f,function(m,p){m([d,f])})},slow:u,slowmode:u,slowoff:l,slowmodeoff:l,subscribers:function(d){var f=this;return d=r.channel(d),this._sendCommand(null,d,"/subscribers",function(m,p){f.once("_promiseSubscribers",function(y){y?p(y):m([d])})})},subscribersoff:function(d){var f=this;return d=r.channel(d),this._sendCommand(null,d,"/subscribersoff",function(m,p){f.once("_promiseSubscribersoff",function(y){y?p(y):m([d])})})},timeout:function(d,f,m,p){var y=this;return d=r.channel(d),f=r.username(f),m!==null&&!r.isInteger(m)&&(p=m,m=300),m=r.get(m,300),p=r.get(p,""),this._sendCommand(null,d,"/timeout ".concat(f," ").concat(m," ").concat(p),function(_,T){y.once("_promiseTimeout",function(U){U?T(U):_([d,f,~~m,p])})})},unban:function(d,f){var m=this;return d=r.channel(d),f=r.username(f),this._sendCommand(null,d,"/unban ".concat(f),function(p,y){m.once("_promiseUnban",function(_){_?y(_):p([d,f])})})},unhost:function(d){var f=this;return d=r.channel(d),this._sendCommand(2e3,d,"/unhost",function(m,p){f.once("_promiseUnhost",function(y){y?p(y):m([d])})})},unmod:function(d,f){var m=this;return d=r.channel(d),f=r.username(f),this._sendCommand(null,d,"/unmod ".concat(f),function(p,y){m.once("_promiseUnmod",function(_){_?y(_):p([d,f])})})},unvip:function(d,f){var m=this;return d=r.channel(d),f=r.username(f),this._sendCommand(null,d,"/unvip ".concat(f),function(p,y){m.once("_promiseUnvip",function(_){_?y(_):p([d,f])})})},vip:function(d,f){var m=this;return d=r.channel(d),f=r.username(f),this._sendCommand(null,d,"/vip ".concat(f),function(p,y){m.once("_promiseVip",function(_){_?y(_):p([d,f])})})},vips:function(d){var f=this;return d=r.channel(d),this._sendCommand(null,d,"/vips",function(m,p){f.once("_promiseVips",function(y,_){y?p(y):m(_)})})},whisper:function(d,f){var m=this;return d=r.username(d),d===this.getUsername()?Promise.reject("Cannot send a whisper to the same account."):this._sendCommand(null,"#tmijs","/w ".concat(d," ").concat(f),function(p,y){m.once("_promiseWhisper",function(_){_&&y(_)})}).catch(function(p){if(p&&typeof p=="string"&&p.indexOf("No response from Twitch.")!==0)throw p;var y=r.channel(d),_=Object.assign({"message-type":"whisper","message-id":null,"thread-id":null,username:m.getUsername()},m.globaluserstate);return m.emits(["whisper","message"],[[y,_,f,!0],[y,_,f,!0]]),[d,f]})}}},{"./utils":9}],5:[function(n,e,t){function r(u){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?r=function(h){return typeof h}:r=function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},r(u)}function i(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}e.exports=i,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._maxListeners=void 0,i.defaultMaxListeners=10,i.prototype.setMaxListeners=function(u){if(!o(u)||u<0||isNaN(u))throw TypeError("n must be a positive number");return this._maxListeners=u,this},i.prototype.emit=function(u){var l,h,d,f,m,p;if(this._events||(this._events={}),u==="error"&&(!this._events.error||a(this._events.error)&&!this._events.error.length))throw l=arguments[1],l instanceof Error?l:TypeError('Uncaught, unspecified "error" event.');if(h=this._events[u],c(h))return!1;if(s(h))switch(arguments.length){case 1:h.call(this);break;case 2:h.call(this,arguments[1]);break;case 3:h.call(this,arguments[1],arguments[2]);break;default:f=Array.prototype.slice.call(arguments,1),h.apply(this,f)}else if(a(h))for(f=Array.prototype.slice.call(arguments,1),p=h.slice(),d=p.length,m=0;m<d;m++)p[m].apply(this,f);return!0},i.prototype.addListener=function(u,l){var h;if(!s(l))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",u,s(l.listener)?l.listener:l),this._events[u]?a(this._events[u])?this._events[u].push(l):this._events[u]=[this._events[u],l]:this._events[u]=l,a(this._events[u])&&!this._events[u].warned&&(c(this._maxListeners)?h=i.defaultMaxListeners:h=this._maxListeners,h&&h>0&&this._events[u].length>h&&(this._events[u].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[u].length),typeof console.trace=="function"&&console.trace())),this},i.prototype.on=i.prototype.addListener,i.prototype.once=function(u,l){if(!s(l))throw TypeError("listener must be a function");var h=!1;if(this._events.hasOwnProperty(u)&&u.charAt(0)==="_"){var d=1,f=u;for(var m in this._events)this._events.hasOwnProperty(m)&&m.startsWith(f)&&d++;u=u+d}function p(){u.charAt(0)==="_"&&!isNaN(u.substr(u.length-1))&&(u=u.substring(0,u.length-1)),this.removeListener(u,p),h||(h=!0,l.apply(this,arguments))}return p.listener=l,this.on(u,p),this},i.prototype.removeListener=function(u,l){var h,d,f,m;if(!s(l))throw TypeError("listener must be a function");if(!this._events||!this._events[u])return this;if(h=this._events[u],f=h.length,d=-1,h===l||s(h.listener)&&h.listener===l){if(delete this._events[u],this._events.hasOwnProperty(u+"2")&&u.charAt(0)==="_"){var p=u;for(var y in this._events)this._events.hasOwnProperty(y)&&y.startsWith(p)&&(isNaN(parseInt(y.substr(y.length-1)))||(this._events[u+parseInt(y.substr(y.length-1)-1)]=this._events[y],delete this._events[y]));this._events[u]=this._events[u+"1"],delete this._events[u+"1"]}this._events.removeListener&&this.emit("removeListener",u,l)}else if(a(h)){for(m=f;m-- >0;)if(h[m]===l||h[m].listener&&h[m].listener===l){d=m;break}if(d<0)return this;h.length===1?(h.length=0,delete this._events[u]):h.splice(d,1),this._events.removeListener&&this.emit("removeListener",u,l)}return this},i.prototype.removeAllListeners=function(u){var l,h;if(!this._events)return this;if(!this._events.removeListener)return arguments.length===0?this._events={}:this._events[u]&&delete this._events[u],this;if(arguments.length===0){for(l in this._events)l!=="removeListener"&&this.removeAllListeners(l);return this.removeAllListeners("removeListener"),this._events={},this}if(h=this._events[u],s(h))this.removeListener(u,h);else if(h)for(;h.length;)this.removeListener(u,h[h.length-1]);return delete this._events[u],this},i.prototype.listeners=function(u){var l;return!this._events||!this._events[u]?l=[]:s(this._events[u])?l=[this._events[u]]:l=this._events[u].slice(),l},i.prototype.listenerCount=function(u){if(this._events){var l=this._events[u];if(s(l))return 1;if(l)return l.length}return 0},i.listenerCount=function(u,l){return u.listenerCount(l)};function s(u){return typeof u=="function"}function o(u){return typeof u=="number"}function a(u){return r(u)==="object"&&u!==null}function c(u){return u===void 0}},{}],6:[function(n,e,t){var r=n("./utils"),i="info",s={trace:0,debug:1,info:2,warn:3,error:4,fatal:5};function o(a){return function(c){s[a]>=s[i]&&console.log("[".concat(r.formatDate(new Date),"] ").concat(a,": ").concat(c))}}e.exports={setLevel:function(c){i=c},trace:o("trace"),debug:o("debug"),info:o("info"),warn:o("warn"),error:o("error"),fatal:o("fatal")}},{"./utils":9}],7:[function(n,e,t){var r=n("./utils"),i=/\S+/g;function s(o,a){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:",",u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"/",l=arguments.length>4?arguments[4]:void 0,h=o[a];if(h===void 0)return o;var d=typeof h=="string";if(o[a+"-raw"]=d?h:null,h===!0)return o[a]=null,o;if(o[a]={},d)for(var f=h.split(c),m=0;m<f.length;m++){var p=f[m].split(u),y=p[1];l!==void 0&&y&&(y=y.split(l)),o[a][p[0]]=y||null}return o}e.exports={badges:function(a){return s(a,"badges")},badgeInfo:function(a){return s(a,"badge-info")},emotes:function(a){return s(a,"emotes","/",":",",")},emoteRegex:function(a,c,u,l){i.lastIndex=0;for(var h=new RegExp("(\\b|^|\\s)"+r.unescapeHtml(c)+"(\\b|$|\\s)"),d;(d=i.exec(a))!==null;)h.test(d[0])&&(l[u]=l[u]||[],l[u].push([d.index,i.lastIndex-1]))},emoteString:function(a,c,u,l){i.lastIndex=0;for(var h;(h=i.exec(a))!==null;)h[0]===r.unescapeHtml(c)&&(l[u]=l[u]||[],l[u].push([h.index,i.lastIndex-1]))},transformEmotes:function(a){var c="";return Object.keys(a).forEach(function(u){c="".concat(c+u,":"),a[u].forEach(function(l){return c="".concat(c+l.join("-"),",")}),c="".concat(c.slice(0,-1),"/")}),c.slice(0,-1)},formTags:function(a){var c=[];for(var u in a){var l=r.escapeIRC(a[u]);c.push("".concat(u,"=").concat(l))}return"@".concat(c.join(";"))},msg:function(a){var c={raw:a,tags:{},prefix:null,command:null,params:[]},u=0,l=0;if(a.charCodeAt(0)===64){if(l=a.indexOf(" "),l===-1)return null;for(var h=a.slice(1,l).split(";"),d=0;d<h.length;d++){var f=h[d],m=f.split("=");c.tags[m[0]]=f.substring(f.indexOf("=")+1)||!0}u=l+1}for(;a.charCodeAt(u)===32;)u++;if(a.charCodeAt(u)===58){if(l=a.indexOf(" ",u),l===-1)return null;for(c.prefix=a.slice(u+1,l),u=l+1;a.charCodeAt(u)===32;)u++}if(l=a.indexOf(" ",u),l===-1)return a.length>u?(c.command=a.slice(u),c):null;for(c.command=a.slice(u,l),u=l+1;a.charCodeAt(u)===32;)u++;for(;u<a.length;){if(l=a.indexOf(" ",u),a.charCodeAt(u)===58){c.params.push(a.slice(u+1));break}if(l!==-1){for(c.params.push(a.slice(u,l)),u=l+1;a.charCodeAt(u)===32;)u++;continue}if(l===-1){c.params.push(a.slice(u));break}}return c}}},{"./utils":9}],8:[function(n,e,t){function r(a,c){if(!(a instanceof c))throw new TypeError("Cannot call a class as a function")}function i(a,c){for(var u=0;u<c.length;u++){var l=c[u];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(a,l.key,l)}}function s(a,c,u){return c&&i(a.prototype,c),u&&i(a,u),a}var o=function(){function a(c){r(this,a),this.queue=[],this.index=0,this.defaultDelay=c===void 0?3e3:c}return s(a,[{key:"add",value:function(u,l){this.queue.push({fn:u,delay:l})}},{key:"next",value:function(){var u=this,l=this.index++,h=this.queue[l];if(h){var d=this.queue[this.index];if(h.fn(),d){var f=d.delay===void 0?this.defaultDelay:d.delay;setTimeout(function(){return u.next()},f)}}}}]),a}();e.exports=o},{}],9:[function(n,e,t){(function(r){(function(){function i(m){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?i=function(y){return typeof y}:i=function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},i(m)}var s=/^\u0001ACTION ([^\u0001]+)\u0001$/,o=/^(justinfan)(\d+$)/,a=/\\([sn:r\\])/g,c=/([ \n;\r\\])/g,u={s:" ",n:"",":":";",r:""},l={" ":"s","\n":"n",";":":","\r":"r"},h=new RegExp("^(?:(?:https?|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))\\.?)(?::\\d{2,5})?(?:[/?#]\\S*)?$","i"),d=/[|\\^$*+?:#]/,f=e.exports={get:function(p,y){return typeof p>"u"?y:p},hasOwn:function(p,y){return{}.hasOwnProperty.call(p,y)},promiseDelay:function(p){return new Promise(function(y){return setTimeout(y,p)})},isFinite:function(m){function p(y){return m.apply(this,arguments)}return p.toString=function(){return m.toString()},p}(function(m){return isFinite(m)&&!isNaN(parseFloat(m))}),toNumber:function(p,y){if(p===null)return 0;var _=Math.pow(10,f.isFinite(y)?y:0);return Math.round(p*_)/_},isInteger:function(p){return!isNaN(f.toNumber(p,0))},isRegex:function(p){return d.test(p)},isURL:function(p){return h.test(p)},justinfan:function(){return"justinfan".concat(Math.floor(Math.random()*8e4+1e3))},isJustinfan:function(p){return o.test(p)},channel:function(p){var y=(p||"").toLowerCase();return y[0]==="#"?y:"#"+y},username:function(p){var y=(p||"").toLowerCase();return y[0]==="#"?y.slice(1):y},token:function(p){return p?p.toLowerCase().replace("oauth:",""):""},password:function(p){var y=f.token(p);return y?"oauth:".concat(y):""},actionMessage:function(p){return p.match(s)},replaceAll:function(p,y){if(p===null||typeof p>"u")return null;for(var _ in y)p=p.replace(new RegExp(_,"g"),y[_]);return p},unescapeHtml:function(p){return p.replace(/\\&amp\\;/g,"&").replace(/\\&lt\\;/g,"<").replace(/\\&gt\\;/g,">").replace(/\\&quot\\;/g,'"').replace(/\\&#039\\;/g,"'")},unescapeIRC:function(p){return!p||typeof p!="string"||!p.includes("\\")?p:p.replace(a,function(y,_){return _ in u?u[_]:_})},escapeIRC:function(p){return!p||typeof p!="string"?p:p.replace(c,function(y,_){return _ in l?"\\".concat(l[_]):_})},addWord:function(p,y){return p.length?p+" "+y:p+y},splitLine:function(p,y){var _=p.substring(0,y).lastIndexOf(" ");return _===-1&&(_=y-1),[p.substring(0,_),p.substring(_+1)]},extractNumber:function(p){for(var y=p.split(" "),_=0;_<y.length;_++)if(f.isInteger(y[_]))return~~y[_];return 0},formatDate:function(p){var y=p.getHours(),_=p.getMinutes();return y=(y<10?"0":"")+y,_=(_<10?"0":"")+_,"".concat(y,":").concat(_)},inherits:function(p,y){p.super_=y;var _=function(){};_.prototype=y.prototype,p.prototype=new _,p.prototype.constructor=p},isNode:function(){try{return(typeof r>"u"?"undefined":i(r))==="object"&&Object.prototype.toString.call(r)==="[object process]"}catch{}return!1}}}).call(this)}).call(this,n("_process"))},{_process:11}],10:[function(n,e,t){},{}],11:[function(n,e,t){var r=e.exports={},i,s;function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?i=setTimeout:i=o}catch{i=o}try{typeof clearTimeout=="function"?s=clearTimeout:s=a}catch{s=a}})();function c(T){if(i===setTimeout)return setTimeout(T,0);if((i===o||!i)&&setTimeout)return i=setTimeout,setTimeout(T,0);try{return i(T,0)}catch{try{return i.call(null,T,0)}catch{return i.call(this,T,0)}}}function u(T){if(s===clearTimeout)return clearTimeout(T);if((s===a||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(T);try{return s(T)}catch{try{return s.call(null,T)}catch{return s.call(this,T)}}}var l=[],h=!1,d,f=-1;function m(){!h||!d||(h=!1,d.length?l=d.concat(l):f=-1,l.length&&p())}function p(){if(!h){var T=c(m);h=!0;for(var U=l.length;U;){for(d=l,l=[];++f<U;)d&&d[f].run();f=-1,U=l.length}d=null,h=!1,u(T)}}r.nextTick=function(T){var U=new Array(arguments.length-1);if(arguments.length>1)for(var P=1;P<arguments.length;P++)U[P-1]=arguments[P];l.push(new y(T,U)),l.length===1&&!h&&c(p)};function y(T,U){this.fun=T,this.array=U}y.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={};function _(){}r.on=_,r.addListener=_,r.once=_,r.off=_,r.removeListener=_,r.removeAllListeners=_,r.emit=_,r.prependListener=_,r.prependOnceListener=_,r.listeners=function(T){return[]},r.binding=function(T){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(T){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},{}]},{},[1]);
