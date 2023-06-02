(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Ed(n,e){const t=Object.create(null),r=n.split(",");for(let i=0;i<r.length;i++)t[r[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}const Oe={},as=[],fn=()=>{},tE=()=>!1,nE=/^on[^a-z]/,bu=n=>nE.test(n),Td=n=>n.startsWith("onUpdate:"),lt=Object.assign,Sd=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},rE=Object.prototype.hasOwnProperty,Ie=(n,e)=>rE.call(n,e),ue=Array.isArray,cs=n=>Eu(n)==="[object Map]",Gy=n=>Eu(n)==="[object Set]",me=n=>typeof n=="function",rt=n=>typeof n=="string",Cd=n=>typeof n=="symbol",$e=n=>n!==null&&typeof n=="object",Hy=n=>$e(n)&&me(n.then)&&me(n.catch),Wy=Object.prototype.toString,Eu=n=>Wy.call(n),iE=n=>Eu(n).slice(8,-1),Qy=n=>Eu(n)==="[object Object]",kd=n=>rt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,wc=Ed(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Tu=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},sE=/-(\w)/g,Vn=Tu(n=>n.replace(sE,(e,t)=>t?t.toUpperCase():"")),oE=/\B([A-Z])/g,$s=Tu(n=>n.replace(oE,"-$1").toLowerCase()),Su=Tu(n=>n.charAt(0).toUpperCase()+n.slice(1)),Nl=Tu(n=>n?`on${Su(n)}`:""),Go=(n,e)=>!Object.is(n,e),_c=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Vc=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},dh=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Xp;const fh=()=>Xp||(Xp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ad(n){if(ue(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],i=rt(r)?lE(r):Ad(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(rt(n))return n;if($e(n))return n}}const aE=/;(?![^(]*\))/g,cE=/:([^]+)/,uE=new RegExp("\\/\\*.*?\\*\\/","gs");function lE(n){const e={};return n.replace(uE,"").split(aE).forEach(t=>{if(t){const r=t.split(cE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Rd(n){let e="";if(rt(n))e=n;else if(ue(n))for(let t=0;t<n.length;t++){const r=Rd(n[t]);r&&(e+=r+" ")}else if($e(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const hE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",dE=Ed(hE);function Yy(n){return!!n||n===""}const xd=n=>rt(n)?n:n==null?"":ue(n)||$e(n)&&(n.toString===Wy||!me(n.toString))?JSON.stringify(n,Jy,2):String(n),Jy=(n,e)=>e&&e.__v_isRef?Jy(n,e.value):cs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,i])=>(t[`${r} =>`]=i,t),{})}:Gy(e)?{[`Set(${e.size})`]:[...e.values()]}:$e(e)&&!ue(e)&&!Qy(e)?String(e):e;let cn;class fE{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=cn,!e&&cn&&(this.index=(cn.scopes||(cn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=cn;try{return cn=this,e()}finally{cn=t}}}on(){cn=this}off(){cn=this.parent}stop(e){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function pE(n,e=cn){e&&e.active&&e.effects.push(n)}function mE(){return cn}const Nd=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Xy=n=>(n.w&Ar)>0,Zy=n=>(n.n&Ar)>0,gE=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Ar},yE=n=>{const{deps:e}=n;if(e.length){let t=0;for(let r=0;r<e.length;r++){const i=e[r];Xy(i)&&!Zy(i)?i.delete(n):e[t++]=i,i.w&=~Ar,i.n&=~Ar}e.length=t}},ph=new WeakMap;let Eo=0,Ar=1;const mh=30;let un;const vi=Symbol(""),gh=Symbol("");class Dd{constructor(e,t=null,r){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,pE(this,r)}run(){if(!this.active)return this.fn();let e=un,t=Sr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=un,un=this,Sr=!0,Ar=1<<++Eo,Eo<=mh?gE(this):Zp(this),this.fn()}finally{Eo<=mh&&yE(this),Ar=1<<--Eo,un=this.parent,Sr=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){un===this?this.deferStop=!0:this.active&&(Zp(this),this.onStop&&this.onStop(),this.active=!1)}}function Zp(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Sr=!0;const ev=[];function qs(){ev.push(Sr),Sr=!1}function js(){const n=ev.pop();Sr=n===void 0?!0:n}function Ht(n,e,t){if(Sr&&un){let r=ph.get(n);r||ph.set(n,r=new Map);let i=r.get(t);i||r.set(t,i=Nd()),tv(i)}}function tv(n,e){let t=!1;Eo<=mh?Zy(n)||(n.n|=Ar,t=!Xy(n)):t=!n.has(un),t&&(n.add(un),un.deps.push(n))}function tr(n,e,t,r,i,s){const o=ph.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&ue(n)){const c=Number(r);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":ue(n)?kd(t)&&a.push(o.get("length")):(a.push(o.get(vi)),cs(n)&&a.push(o.get(gh)));break;case"delete":ue(n)||(a.push(o.get(vi)),cs(n)&&a.push(o.get(gh)));break;case"set":cs(n)&&a.push(o.get(vi));break}if(a.length===1)a[0]&&yh(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);yh(Nd(c))}}function yh(n,e){const t=ue(n)?n:[...n];for(const r of t)r.computed&&em(r);for(const r of t)r.computed||em(r)}function em(n,e){(n!==un||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const vE=Ed("__proto__,__v_isRef,__isVue"),nv=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Cd)),wE=Pd(),_E=Pd(!1,!0),IE=Pd(!0),tm=bE();function bE(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const r=Se(this);for(let s=0,o=this.length;s<o;s++)Ht(r,"get",s+"");const i=r[e](...t);return i===-1||i===!1?r[e](...t.map(Se)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){qs();const r=Se(this)[e].apply(this,t);return js(),r}}),n}function EE(n){const e=Se(this);return Ht(e,"has",n),e.hasOwnProperty(n)}function Pd(n=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!n;if(i==="__v_isReadonly")return n;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(n?e?VE:av:e?ov:sv).get(r))return r;const o=ue(r);if(!n){if(o&&Ie(tm,i))return Reflect.get(tm,i,s);if(i==="hasOwnProperty")return EE}const a=Reflect.get(r,i,s);return(Cd(i)?nv.has(i):vE(i))||(n||Ht(r,"get",i),e)?a:Rt(a)?o&&kd(i)?a:a.value:$e(a)?n?cv(a):Ta(a):a}}const TE=rv(),SE=rv(!0);function rv(n=!1){return function(t,r,i,s){let o=t[r];if(_s(o)&&Rt(o)&&!Rt(i))return!1;if(!n&&(!Bc(i)&&!_s(i)&&(o=Se(o),i=Se(i)),!ue(t)&&Rt(o)&&!Rt(i)))return o.value=i,!0;const a=ue(t)&&kd(r)?Number(r)<t.length:Ie(t,r),c=Reflect.set(t,r,i,s);return t===Se(s)&&(a?Go(i,o)&&tr(t,"set",r,i):tr(t,"add",r,i)),c}}function CE(n,e){const t=Ie(n,e);n[e];const r=Reflect.deleteProperty(n,e);return r&&t&&tr(n,"delete",e,void 0),r}function kE(n,e){const t=Reflect.has(n,e);return(!Cd(e)||!nv.has(e))&&Ht(n,"has",e),t}function AE(n){return Ht(n,"iterate",ue(n)?"length":vi),Reflect.ownKeys(n)}const iv={get:wE,set:TE,deleteProperty:CE,has:kE,ownKeys:AE},RE={get:IE,set(n,e){return!0},deleteProperty(n,e){return!0}},xE=lt({},iv,{get:_E,set:SE}),Od=n=>n,Cu=n=>Reflect.getPrototypeOf(n);function ec(n,e,t=!1,r=!1){n=n.__v_raw;const i=Se(n),s=Se(e);t||(e!==s&&Ht(i,"get",e),Ht(i,"get",s));const{has:o}=Cu(i),a=r?Od:t?Fd:Ho;if(o.call(i,e))return a(n.get(e));if(o.call(i,s))return a(n.get(s));n!==i&&n.get(e)}function tc(n,e=!1){const t=this.__v_raw,r=Se(t),i=Se(n);return e||(n!==i&&Ht(r,"has",n),Ht(r,"has",i)),n===i?t.has(n):t.has(n)||t.has(i)}function nc(n,e=!1){return n=n.__v_raw,!e&&Ht(Se(n),"iterate",vi),Reflect.get(n,"size",n)}function nm(n){n=Se(n);const e=Se(this);return Cu(e).has.call(e,n)||(e.add(n),tr(e,"add",n,n)),this}function rm(n,e){e=Se(e);const t=Se(this),{has:r,get:i}=Cu(t);let s=r.call(t,n);s||(n=Se(n),s=r.call(t,n));const o=i.call(t,n);return t.set(n,e),s?Go(e,o)&&tr(t,"set",n,e):tr(t,"add",n,e),this}function im(n){const e=Se(this),{has:t,get:r}=Cu(e);let i=t.call(e,n);i||(n=Se(n),i=t.call(e,n)),r&&r.call(e,n);const s=e.delete(n);return i&&tr(e,"delete",n,void 0),s}function sm(){const n=Se(this),e=n.size!==0,t=n.clear();return e&&tr(n,"clear",void 0,void 0),t}function rc(n,e){return function(r,i){const s=this,o=s.__v_raw,a=Se(o),c=e?Od:n?Fd:Ho;return!n&&Ht(a,"iterate",vi),o.forEach((u,l)=>r.call(i,c(u),c(l),s))}}function ic(n,e,t){return function(...r){const i=this.__v_raw,s=Se(i),o=cs(s),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,u=i[n](...r),l=t?Od:e?Fd:Ho;return!e&&Ht(s,"iterate",c?gh:vi),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function hr(n){return function(...e){return n==="delete"?!1:this}}function NE(){const n={get(s){return ec(this,s)},get size(){return nc(this)},has:tc,add:nm,set:rm,delete:im,clear:sm,forEach:rc(!1,!1)},e={get(s){return ec(this,s,!1,!0)},get size(){return nc(this)},has:tc,add:nm,set:rm,delete:im,clear:sm,forEach:rc(!1,!0)},t={get(s){return ec(this,s,!0)},get size(){return nc(this,!0)},has(s){return tc.call(this,s,!0)},add:hr("add"),set:hr("set"),delete:hr("delete"),clear:hr("clear"),forEach:rc(!0,!1)},r={get(s){return ec(this,s,!0,!0)},get size(){return nc(this,!0)},has(s){return tc.call(this,s,!0)},add:hr("add"),set:hr("set"),delete:hr("delete"),clear:hr("clear"),forEach:rc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ic(s,!1,!1),t[s]=ic(s,!0,!1),e[s]=ic(s,!1,!0),r[s]=ic(s,!0,!0)}),[n,t,e,r]}const[DE,PE,OE,ME]=NE();function Md(n,e){const t=e?n?ME:OE:n?PE:DE;return(r,i,s)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?r:Reflect.get(Ie(t,i)&&i in r?t:r,i,s)}const LE={get:Md(!1,!1)},FE={get:Md(!1,!0)},UE={get:Md(!0,!1)},sv=new WeakMap,ov=new WeakMap,av=new WeakMap,VE=new WeakMap;function BE(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $E(n){return n.__v_skip||!Object.isExtensible(n)?0:BE(iE(n))}function Ta(n){return _s(n)?n:Ld(n,!1,iv,LE,sv)}function qE(n){return Ld(n,!1,xE,FE,ov)}function cv(n){return Ld(n,!0,RE,UE,av)}function Ld(n,e,t,r,i){if(!$e(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=i.get(n);if(s)return s;const o=$E(n);if(o===0)return n;const a=new Proxy(n,o===2?r:t);return i.set(n,a),a}function us(n){return _s(n)?us(n.__v_raw):!!(n&&n.__v_isReactive)}function _s(n){return!!(n&&n.__v_isReadonly)}function Bc(n){return!!(n&&n.__v_isShallow)}function uv(n){return us(n)||_s(n)}function Se(n){const e=n&&n.__v_raw;return e?Se(e):n}function lv(n){return Vc(n,"__v_skip",!0),n}const Ho=n=>$e(n)?Ta(n):n,Fd=n=>$e(n)?cv(n):n;function hv(n){Sr&&un&&(n=Se(n),tv(n.dep||(n.dep=Nd())))}function dv(n,e){n=Se(n);const t=n.dep;t&&yh(t)}function Rt(n){return!!(n&&n.__v_isRef===!0)}function ln(n){return fv(n,!1)}function jE(n){return fv(n,!0)}function fv(n,e){return Rt(n)?n:new zE(n,e)}class zE{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Se(e),this._value=t?e:Ho(e)}get value(){return hv(this),this._value}set value(e){const t=this.__v_isShallow||Bc(e)||_s(e);e=t?e:Se(e),Go(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ho(e),dv(this))}}function ls(n){return Rt(n)?n.value:n}const KE={get:(n,e,t)=>ls(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const i=n[e];return Rt(i)&&!Rt(t)?(i.value=t,!0):Reflect.set(n,e,t,r)}};function pv(n){return us(n)?n:new Proxy(n,KE)}class GE{constructor(e,t,r,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Dd(e,()=>{this._dirty||(this._dirty=!0,dv(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=Se(this);return hv(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function HE(n,e,t=!1){let r,i;const s=me(n);return s?(r=n,i=fn):(r=n.get,i=n.set),new GE(r,i,s||!i,t)}function Cr(n,e,t,r){let i;try{i=r?n(...r):n()}catch(s){ku(s,e,t)}return i}function pn(n,e,t,r){if(me(n)){const s=Cr(n,e,t,r);return s&&Hy(s)&&s.catch(o=>{ku(o,e,t)}),s}const i=[];for(let s=0;s<n.length;s++)i.push(pn(n[s],e,t,r));return i}function ku(n,e,t,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const u=s.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](n,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){Cr(c,null,10,[n,o,a]);return}}WE(n,t,i,r)}function WE(n,e,t,r=!0){console.error(n)}let Wo=!1,vh=!1;const At=[];let Sn=0;const hs=[];let Hn=null,si=0;const mv=Promise.resolve();let Ud=null;function gv(n){const e=Ud||mv;return n?e.then(this?n.bind(this):n):e}function QE(n){let e=Sn+1,t=At.length;for(;e<t;){const r=e+t>>>1;Qo(At[r])<n?e=r+1:t=r}return e}function Vd(n){(!At.length||!At.includes(n,Wo&&n.allowRecurse?Sn+1:Sn))&&(n.id==null?At.push(n):At.splice(QE(n.id),0,n),yv())}function yv(){!Wo&&!vh&&(vh=!0,Ud=mv.then(wv))}function YE(n){const e=At.indexOf(n);e>Sn&&At.splice(e,1)}function JE(n){ue(n)?hs.push(...n):(!Hn||!Hn.includes(n,n.allowRecurse?si+1:si))&&hs.push(n),yv()}function om(n,e=Wo?Sn+1:0){for(;e<At.length;e++){const t=At[e];t&&t.pre&&(At.splice(e,1),e--,t())}}function vv(n){if(hs.length){const e=[...new Set(hs)];if(hs.length=0,Hn){Hn.push(...e);return}for(Hn=e,Hn.sort((t,r)=>Qo(t)-Qo(r)),si=0;si<Hn.length;si++)Hn[si]();Hn=null,si=0}}const Qo=n=>n.id==null?1/0:n.id,XE=(n,e)=>{const t=Qo(n)-Qo(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function wv(n){vh=!1,Wo=!0,At.sort(XE);const e=fn;try{for(Sn=0;Sn<At.length;Sn++){const t=At[Sn];t&&t.active!==!1&&Cr(t,null,14)}}finally{Sn=0,At.length=0,vv(),Wo=!1,Ud=null,(At.length||hs.length)&&wv()}}function ZE(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Oe;let i=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[l]||Oe;d&&(i=t.map(f=>rt(f)?f.trim():f)),h&&(i=t.map(dh))}let a,c=r[a=Nl(e)]||r[a=Nl(Vn(e))];!c&&s&&(c=r[a=Nl($s(e))]),c&&pn(c,n,6,i);const u=r[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,pn(u,n,6,i)}}function _v(n,e,t=!1){const r=e.emitsCache,i=r.get(n);if(i!==void 0)return i;const s=n.emits;let o={},a=!1;if(!me(n)){const c=u=>{const l=_v(u,e,!0);l&&(a=!0,lt(o,l))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!s&&!a?($e(n)&&r.set(n,null),null):(ue(s)?s.forEach(c=>o[c]=null):lt(o,s),$e(n)&&r.set(n,o),o)}function Au(n,e){return!n||!bu(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ie(n,e[0].toLowerCase()+e.slice(1))||Ie(n,$s(e))||Ie(n,e))}let sn=null,Iv=null;function $c(n){const e=sn;return sn=n,Iv=n&&n.type.__scopeId||null,e}function Ic(n,e=sn,t){if(!e||n._n)return n;const r=(...i)=>{r._d&&ym(-1);const s=$c(e);let o;try{o=n(...i)}finally{$c(s),r._d&&ym(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Dl(n){const{type:e,vnode:t,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:f,ctx:m,inheritAttrs:p}=n;let y,_;const S=$c(n);try{if(t.shapeFlag&4){const N=i||r;y=En(l.call(N,N,h,s,f,d,m)),_=c}else{const N=e;y=En(N.length>1?N(s,{attrs:c,slots:a,emit:u}):N(s,null)),_=e.props?c:eT(c)}}catch(N){Po.length=0,ku(N,n,1),y=nt(Si)}let L=y;if(_&&p!==!1){const N=Object.keys(_),{shapeFlag:he}=L;N.length&&he&7&&(o&&N.some(Td)&&(_=tT(_,o)),L=Is(L,_))}return t.dirs&&(L=Is(L),L.dirs=L.dirs?L.dirs.concat(t.dirs):t.dirs),t.transition&&(L.transition=t.transition),y=L,$c(S),y}const eT=n=>{let e;for(const t in n)(t==="class"||t==="style"||bu(t))&&((e||(e={}))[t]=n[t]);return e},tT=(n,e)=>{const t={};for(const r in n)(!Td(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function nT(n,e,t){const{props:r,children:i,component:s}=n,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?am(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==r[d]&&!Au(u,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?am(r,o,u):!0:!!o;return!1}function am(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==n[s]&&!Au(t,s))return!0}return!1}function rT({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const iT=n=>n.__isSuspense;function sT(n,e){e&&e.pendingBranch?ue(n)?e.effects.push(...n):e.effects.push(n):JE(n)}const sc={};function bc(n,e,t){return bv(n,e,t)}function bv(n,e,{immediate:t,deep:r,flush:i,onTrack:s,onTrigger:o}=Oe){var a;const c=mE()===((a=vt)==null?void 0:a.scope)?vt:null;let u,l=!1,h=!1;if(Rt(n)?(u=()=>n.value,l=Bc(n)):us(n)?(u=()=>n,r=!0):ue(n)?(h=!0,l=n.some(N=>us(N)||Bc(N)),u=()=>n.map(N=>{if(Rt(N))return N.value;if(us(N))return di(N);if(me(N))return Cr(N,c,2)})):me(n)?e?u=()=>Cr(n,c,2):u=()=>{if(!(c&&c.isUnmounted))return d&&d(),pn(n,c,3,[f])}:u=fn,e&&r){const N=u;u=()=>di(N())}let d,f=N=>{d=S.onStop=()=>{Cr(N,c,4)}},m;if(Jo)if(f=fn,e?t&&pn(e,c,3,[u(),h?[]:void 0,f]):u(),i==="sync"){const N=XT();m=N.__watcherHandles||(N.__watcherHandles=[])}else return fn;let p=h?new Array(n.length).fill(sc):sc;const y=()=>{if(S.active)if(e){const N=S.run();(r||l||(h?N.some((he,x)=>Go(he,p[x])):Go(N,p)))&&(d&&d(),pn(e,c,3,[N,p===sc?void 0:h&&p[0]===sc?[]:p,f]),p=N)}else S.run()};y.allowRecurse=!!e;let _;i==="sync"?_=y:i==="post"?_=()=>$t(y,c&&c.suspense):(y.pre=!0,c&&(y.id=c.uid),_=()=>Vd(y));const S=new Dd(u,_);e?t?y():p=S.run():i==="post"?$t(S.run.bind(S),c&&c.suspense):S.run();const L=()=>{S.stop(),c&&c.scope&&Sd(c.scope.effects,S)};return m&&m.push(L),L}function oT(n,e,t){const r=this.proxy,i=rt(n)?n.includes(".")?Ev(r,n):()=>r[n]:n.bind(r,r);let s;me(e)?s=e:(s=e.handler,t=e);const o=vt;bs(this);const a=bv(i,s.bind(r),t);return o?bs(o):wi(),a}function Ev(n,e){const t=e.split(".");return()=>{let r=n;for(let i=0;i<t.length&&r;i++)r=r[t[i]];return r}}function di(n,e){if(!$e(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Rt(n))di(n.value,e);else if(ue(n))for(let t=0;t<n.length;t++)di(n[t],e);else if(Gy(n)||cs(n))n.forEach(t=>{di(t,e)});else if(Qy(n))for(const t in n)di(n[t],e);return n}function Ir(n,e){const t=sn;if(t===null)return n;const r=Du(t)||t.proxy,i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,u=Oe]=e[s];o&&(me(o)&&(o={mounted:o,updated:o}),o.deep&&di(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u}))}return n}function Xr(n,e,t,r){const i=n.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(qs(),pn(c,t,8,[n.el,a,n,e]),js())}}function Tv(n,e){return me(n)?(()=>lt({name:n.name},e,{setup:n}))():n}const Ec=n=>!!n.type.__asyncLoader,Sv=n=>n.type.__isKeepAlive;function aT(n,e){Cv(n,"a",e)}function cT(n,e){Cv(n,"da",e)}function Cv(n,e,t=vt){const r=n.__wdc||(n.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(Ru(e,r,t),t){let i=t.parent;for(;i&&i.parent;)Sv(i.parent.vnode)&&uT(r,e,t,i),i=i.parent}}function uT(n,e,t,r){const i=Ru(e,n,r,!0);Av(()=>{Sd(r[e],i)},t)}function Ru(n,e,t=vt,r=!1){if(t){const i=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;qs(),bs(t);const a=pn(e,t,n,o);return wi(),js(),a});return r?i.unshift(s):i.push(s),s}}const sr=n=>(e,t=vt)=>(!Jo||n==="sp")&&Ru(n,(...r)=>e(...r),t),lT=sr("bm"),kv=sr("m"),hT=sr("bu"),dT=sr("u"),fT=sr("bum"),Av=sr("um"),pT=sr("sp"),mT=sr("rtg"),gT=sr("rtc");function yT(n,e=vt){Ru("ec",n,e)}const Rv="components";function xv(n,e){return wT(Rv,n,!0,e)||n}const vT=Symbol.for("v-ndc");function wT(n,e,t=!0,r=!1){const i=sn||vt;if(i){const s=i.type;if(n===Rv){const a=QT(s,!1);if(a&&(a===e||a===Vn(e)||a===Su(Vn(e))))return s}const o=cm(i[n]||s[n],e)||cm(i.appContext[n],e);return!o&&r?s:o}}function cm(n,e){return n&&(n[e]||n[Vn(e)]||n[Su(Vn(e))])}function Zr(n,e,t,r){let i;const s=t&&t[r];if(ue(n)||rt(n)){i=new Array(n.length);for(let o=0,a=n.length;o<a;o++)i[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){i=new Array(n);for(let o=0;o<n;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if($e(n))if(n[Symbol.iterator])i=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];i[a]=e(n[u],u,a,s&&s[a])}}else i=[];return t&&(t[r]=i),i}const wh=n=>n?$v(n)?Du(n)||n.proxy:wh(n.parent):null,Do=lt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>wh(n.parent),$root:n=>wh(n.root),$emit:n=>n.emit,$options:n=>Bd(n),$forceUpdate:n=>n.f||(n.f=()=>Vd(n.update)),$nextTick:n=>n.n||(n.n=gv.bind(n.proxy)),$watch:n=>oT.bind(n)}),Pl=(n,e)=>n!==Oe&&!n.__isScriptSetup&&Ie(n,e),_T={get({_:n},e){const{ctx:t,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=n;let u;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(Pl(r,e))return o[e]=1,r[e];if(i!==Oe&&Ie(i,e))return o[e]=2,i[e];if((u=n.propsOptions[0])&&Ie(u,e))return o[e]=3,s[e];if(t!==Oe&&Ie(t,e))return o[e]=4,t[e];_h&&(o[e]=0)}}const l=Do[e];let h,d;if(l)return e==="$attrs"&&Ht(n,"get",e),l(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==Oe&&Ie(t,e))return o[e]=4,t[e];if(d=c.config.globalProperties,Ie(d,e))return d[e]},set({_:n},e,t){const{data:r,setupState:i,ctx:s}=n;return Pl(i,e)?(i[e]=t,!0):r!==Oe&&Ie(r,e)?(r[e]=t,!0):Ie(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!t[o]||n!==Oe&&Ie(n,o)||Pl(e,o)||(a=s[0])&&Ie(a,o)||Ie(r,o)||Ie(Do,o)||Ie(i.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ie(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function um(n){return ue(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let _h=!0;function IT(n){const e=Bd(n),t=n.proxy,r=n.ctx;_h=!1,e.beforeCreate&&lm(e.beforeCreate,n,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:f,updated:m,activated:p,deactivated:y,beforeDestroy:_,beforeUnmount:S,destroyed:L,unmounted:N,render:he,renderTracked:x,renderTriggered:Ee,errorCaptured:ae,serverPrefetch:Et,expose:K,inheritAttrs:w,components:D,directives:b,filters:B}=e;if(u&&bT(u,r,null),o)for(const de in o){const se=o[de];me(se)&&(r[de]=se.bind(t))}if(i){const de=i.call(t,t);$e(de)&&(n.data=Ta(de))}if(_h=!0,s)for(const de in s){const se=s[de],Bt=me(se)?se.bind(t,t):me(se.get)?se.get.bind(t,t):fn,Dt=!me(se)&&me(se.set)?se.set.bind(t):fn,ot=nn({get:Bt,set:Dt});Object.defineProperty(r,de,{enumerable:!0,configurable:!0,get:()=>ot.value,set:Je=>ot.value=Je})}if(a)for(const de in a)Nv(a[de],r,t,de);if(c){const de=me(c)?c.call(t):c;Reflect.ownKeys(de).forEach(se=>{Tc(se,de[se])})}l&&lm(l,n,"c");function Y(de,se){ue(se)?se.forEach(Bt=>de(Bt.bind(t))):se&&de(se.bind(t))}if(Y(lT,h),Y(kv,d),Y(hT,f),Y(dT,m),Y(aT,p),Y(cT,y),Y(yT,ae),Y(gT,x),Y(mT,Ee),Y(fT,S),Y(Av,N),Y(pT,Et),ue(K))if(K.length){const de=n.exposed||(n.exposed={});K.forEach(se=>{Object.defineProperty(de,se,{get:()=>t[se],set:Bt=>t[se]=Bt})})}else n.exposed||(n.exposed={});he&&n.render===fn&&(n.render=he),w!=null&&(n.inheritAttrs=w),D&&(n.components=D),b&&(n.directives=b)}function bT(n,e,t=fn){ue(n)&&(n=Ih(n));for(const r in n){const i=n[r];let s;$e(i)?"default"in i?s=Mn(i.from||r,i.default,!0):s=Mn(i.from||r):s=Mn(i),Rt(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function lm(n,e,t){pn(ue(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Nv(n,e,t,r){const i=r.includes(".")?Ev(t,r):()=>t[r];if(rt(n)){const s=e[n];me(s)&&bc(i,s)}else if(me(n))bc(i,n.bind(t));else if($e(n))if(ue(n))n.forEach(s=>Nv(s,e,t,r));else{const s=me(n.handler)?n.handler.bind(t):e[n.handler];me(s)&&bc(i,s,n)}}function Bd(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!t&&!r?c=e:(c={},i.length&&i.forEach(u=>qc(c,u,o,!0)),qc(c,e,o)),$e(e)&&s.set(e,c),c}function qc(n,e,t,r=!1){const{mixins:i,extends:s}=e;s&&qc(n,s,t,!0),i&&i.forEach(o=>qc(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const a=ET[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const ET={data:hm,props:dm,emits:dm,methods:To,computed:To,beforeCreate:Pt,created:Pt,beforeMount:Pt,mounted:Pt,beforeUpdate:Pt,updated:Pt,beforeDestroy:Pt,beforeUnmount:Pt,destroyed:Pt,unmounted:Pt,activated:Pt,deactivated:Pt,errorCaptured:Pt,serverPrefetch:Pt,components:To,directives:To,watch:ST,provide:hm,inject:TT};function hm(n,e){return e?n?function(){return lt(me(n)?n.call(this,this):n,me(e)?e.call(this,this):e)}:e:n}function TT(n,e){return To(Ih(n),Ih(e))}function Ih(n){if(ue(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Pt(n,e){return n?[...new Set([].concat(n,e))]:e}function To(n,e){return n?lt(Object.create(null),n,e):e}function dm(n,e){return n?ue(n)&&ue(e)?[...new Set([...n,...e])]:lt(Object.create(null),um(n),um(e??{})):e}function ST(n,e){if(!n)return e;if(!e)return n;const t=lt(Object.create(null),n);for(const r in e)t[r]=Pt(n[r],e[r]);return t}function Dv(){return{app:null,config:{isNativeTag:tE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let CT=0;function kT(n,e){return function(r,i=null){me(r)||(r=lt({},r)),i!=null&&!$e(i)&&(i=null);const s=Dv(),o=new Set;let a=!1;const c=s.app={_uid:CT++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:ZT,get config(){return s.config},set config(u){},use(u,...l){return o.has(u)||(u&&me(u.install)?(o.add(u),u.install(c,...l)):me(u)&&(o.add(u),u(c,...l))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,l){return l?(s.components[u]=l,c):s.components[u]},directive(u,l){return l?(s.directives[u]=l,c):s.directives[u]},mount(u,l,h){if(!a){const d=nt(r,i);return d.appContext=s,l&&e?e(d,u):n(d,u,h),a=!0,c._container=u,u.__vue_app__=c,Du(d.component)||d.component.proxy}},unmount(){a&&(n(null,c._container),delete c._container.__vue_app__)},provide(u,l){return s.provides[u]=l,c},runWithContext(u){jc=c;try{return u()}finally{jc=null}}};return c}}let jc=null;function Tc(n,e){if(vt){let t=vt.provides;const r=vt.parent&&vt.parent.provides;r===t&&(t=vt.provides=Object.create(r)),t[n]=e}}function Mn(n,e,t=!1){const r=vt||sn;if(r||jc){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:jc._context.provides;if(i&&n in i)return i[n];if(arguments.length>1)return t&&me(e)?e.call(r&&r.proxy):e}}function AT(n,e,t,r=!1){const i={},s={};Vc(s,Nu,1),n.propsDefaults=Object.create(null),Pv(n,e,i,s);for(const o in n.propsOptions[0])o in i||(i[o]=void 0);t?n.props=r?i:qE(i):n.type.props?n.props=i:n.props=s,n.attrs=s}function RT(n,e,t,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=n,a=Se(i),[c]=n.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=n.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(Au(n.emitsOptions,d))continue;const f=e[d];if(c)if(Ie(s,d))f!==s[d]&&(s[d]=f,u=!0);else{const m=Vn(d);i[m]=bh(c,a,m,f,n,!1)}else f!==s[d]&&(s[d]=f,u=!0)}}}else{Pv(n,e,i,s)&&(u=!0);let l;for(const h in a)(!e||!Ie(e,h)&&((l=$s(h))===h||!Ie(e,l)))&&(c?t&&(t[h]!==void 0||t[l]!==void 0)&&(i[h]=bh(c,a,h,void 0,n,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!Ie(e,h))&&(delete s[h],u=!0)}u&&tr(n,"set","$attrs")}function Pv(n,e,t,r){const[i,s]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(wc(c))continue;const u=e[c];let l;i&&Ie(i,l=Vn(c))?!s||!s.includes(l)?t[l]=u:(a||(a={}))[l]=u:Au(n.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(s){const c=Se(t),u=a||Oe;for(let l=0;l<s.length;l++){const h=s[l];t[h]=bh(i,c,h,u[h],n,!Ie(u,h))}}return o}function bh(n,e,t,r,i,s){const o=n[t];if(o!=null){const a=Ie(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&me(c)){const{propsDefaults:u}=i;t in u?r=u[t]:(bs(i),r=u[t]=c.call(null,e),wi())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===$s(t))&&(r=!0))}return r}function Ov(n,e,t=!1){const r=e.propsCache,i=r.get(n);if(i)return i;const s=n.props,o={},a=[];let c=!1;if(!me(n)){const l=h=>{c=!0;const[d,f]=Ov(h,e,!0);lt(o,d),f&&a.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}if(!s&&!c)return $e(n)&&r.set(n,as),as;if(ue(s))for(let l=0;l<s.length;l++){const h=Vn(s[l]);fm(h)&&(o[h]=Oe)}else if(s)for(const l in s){const h=Vn(l);if(fm(h)){const d=s[l],f=o[h]=ue(d)||me(d)?{type:d}:lt({},d);if(f){const m=gm(Boolean,f.type),p=gm(String,f.type);f[0]=m>-1,f[1]=p<0||m<p,(m>-1||Ie(f,"default"))&&a.push(h)}}}const u=[o,a];return $e(n)&&r.set(n,u),u}function fm(n){return n[0]!=="$"}function pm(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function mm(n,e){return pm(n)===pm(e)}function gm(n,e){return ue(e)?e.findIndex(t=>mm(t,n)):me(e)&&mm(e,n)?0:-1}const Mv=n=>n[0]==="_"||n==="$stable",$d=n=>ue(n)?n.map(En):[En(n)],xT=(n,e,t)=>{if(e._n)return e;const r=Ic((...i)=>$d(e(...i)),t);return r._c=!1,r},Lv=(n,e,t)=>{const r=n._ctx;for(const i in n){if(Mv(i))continue;const s=n[i];if(me(s))e[i]=xT(i,s,r);else if(s!=null){const o=$d(s);e[i]=()=>o}}},Fv=(n,e)=>{const t=$d(e);n.slots.default=()=>t},NT=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Se(e),Vc(e,"_",t)):Lv(e,n.slots={})}else n.slots={},e&&Fv(n,e);Vc(n.slots,Nu,1)},DT=(n,e,t)=>{const{vnode:r,slots:i}=n;let s=!0,o=Oe;if(r.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(lt(i,e),!t&&a===1&&delete i._):(s=!e.$stable,Lv(e,i)),o=e}else e&&(Fv(n,e),o={default:1});if(s)for(const a in i)!Mv(a)&&!(a in o)&&delete i[a]};function Eh(n,e,t,r,i=!1){if(ue(n)){n.forEach((d,f)=>Eh(d,e&&(ue(e)?e[f]:e),t,r,i));return}if(Ec(r)&&!i)return;const s=r.shapeFlag&4?Du(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=n,u=e&&e.r,l=a.refs===Oe?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(rt(u)?(l[u]=null,Ie(h,u)&&(h[u]=null)):Rt(u)&&(u.value=null)),me(c))Cr(c,a,12,[o,l]);else{const d=rt(c),f=Rt(c);if(d||f){const m=()=>{if(n.f){const p=d?Ie(h,c)?h[c]:l[c]:c.value;i?ue(p)&&Sd(p,s):ue(p)?p.includes(s)||p.push(s):d?(l[c]=[s],Ie(h,c)&&(h[c]=l[c])):(c.value=[s],n.k&&(l[n.k]=c.value))}else d?(l[c]=o,Ie(h,c)&&(h[c]=o)):f&&(c.value=o,n.k&&(l[n.k]=o))};o?(m.id=-1,$t(m,t)):m()}}}const $t=sT;function PT(n){return OT(n)}function OT(n,e){const t=fh();t.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:f=fn,insertStaticContent:m}=n,p=(g,v,I,C=null,A=null,O=null,$=!1,U=null,q=!!v.dynamicChildren)=>{if(g===v)return;g&&!uo(g,v)&&(C=k(g),Je(g,A,O,!0),g=null),v.patchFlag===-2&&(q=!1,v.dynamicChildren=null);const{type:M,ref:Z,shapeFlag:J}=v;switch(M){case xu:y(g,v,I,C);break;case Si:_(g,v,I,C);break;case Sc:g==null&&S(v,I,C,$);break;case et:D(g,v,I,C,A,O,$,U,q);break;default:J&1?he(g,v,I,C,A,O,$,U,q):J&6?b(g,v,I,C,A,O,$,U,q):(J&64||J&128)&&M.process(g,v,I,C,A,O,$,U,q,V)}Z!=null&&A&&Eh(Z,g&&g.ref,O,v||g,!v)},y=(g,v,I,C)=>{if(g==null)r(v.el=a(v.children),I,C);else{const A=v.el=g.el;v.children!==g.children&&u(A,v.children)}},_=(g,v,I,C)=>{g==null?r(v.el=c(v.children||""),I,C):v.el=g.el},S=(g,v,I,C)=>{[g.el,g.anchor]=m(g.children,v,I,C,g.el,g.anchor)},L=({el:g,anchor:v},I,C)=>{let A;for(;g&&g!==v;)A=d(g),r(g,I,C),g=A;r(v,I,C)},N=({el:g,anchor:v})=>{let I;for(;g&&g!==v;)I=d(g),i(g),g=I;i(v)},he=(g,v,I,C,A,O,$,U,q)=>{$=$||v.type==="svg",g==null?x(v,I,C,A,O,$,U,q):Et(g,v,A,O,$,U,q)},x=(g,v,I,C,A,O,$,U)=>{let q,M;const{type:Z,props:J,shapeFlag:re,transition:ce,dirs:ge}=g;if(q=g.el=o(g.type,O,J&&J.is,J),re&8?l(q,g.children):re&16&&ae(g.children,q,null,C,A,O&&Z!=="foreignObject",$,U),ge&&Xr(g,null,C,"created"),Ee(q,g,g.scopeId,$,C),J){for(const Ce in J)Ce!=="value"&&!wc(Ce)&&s(q,Ce,null,J[Ce],O,g.children,C,A,De);"value"in J&&s(q,"value",null,J.value),(M=J.onVnodeBeforeMount)&&In(M,C,g)}ge&&Xr(g,null,C,"beforeMount");const Ne=(!A||A&&!A.pendingBranch)&&ce&&!ce.persisted;Ne&&ce.beforeEnter(q),r(q,v,I),((M=J&&J.onVnodeMounted)||Ne||ge)&&$t(()=>{M&&In(M,C,g),Ne&&ce.enter(q),ge&&Xr(g,null,C,"mounted")},A)},Ee=(g,v,I,C,A)=>{if(I&&f(g,I),C)for(let O=0;O<C.length;O++)f(g,C[O]);if(A){let O=A.subTree;if(v===O){const $=A.vnode;Ee(g,$,$.scopeId,$.slotScopeIds,A.parent)}}},ae=(g,v,I,C,A,O,$,U,q=0)=>{for(let M=q;M<g.length;M++){const Z=g[M]=U?yr(g[M]):En(g[M]);p(null,Z,v,I,C,A,O,$,U)}},Et=(g,v,I,C,A,O,$)=>{const U=v.el=g.el;let{patchFlag:q,dynamicChildren:M,dirs:Z}=v;q|=g.patchFlag&16;const J=g.props||Oe,re=v.props||Oe;let ce;I&&ei(I,!1),(ce=re.onVnodeBeforeUpdate)&&In(ce,I,v,g),Z&&Xr(v,g,I,"beforeUpdate"),I&&ei(I,!0);const ge=A&&v.type!=="foreignObject";if(M?K(g.dynamicChildren,M,U,I,C,ge,O):$||se(g,v,U,null,I,C,ge,O,!1),q>0){if(q&16)w(U,v,J,re,I,C,A);else if(q&2&&J.class!==re.class&&s(U,"class",null,re.class,A),q&4&&s(U,"style",J.style,re.style,A),q&8){const Ne=v.dynamicProps;for(let Ce=0;Ce<Ne.length;Ce++){const qe=Ne[Ce],St=J[qe],wn=re[qe];(wn!==St||qe==="value")&&s(U,qe,St,wn,A,g.children,I,C,De)}}q&1&&g.children!==v.children&&l(U,v.children)}else!$&&M==null&&w(U,v,J,re,I,C,A);((ce=re.onVnodeUpdated)||Z)&&$t(()=>{ce&&In(ce,I,v,g),Z&&Xr(v,g,I,"updated")},C)},K=(g,v,I,C,A,O,$)=>{for(let U=0;U<v.length;U++){const q=g[U],M=v[U],Z=q.el&&(q.type===et||!uo(q,M)||q.shapeFlag&70)?h(q.el):I;p(q,M,Z,null,C,A,O,$,!0)}},w=(g,v,I,C,A,O,$)=>{if(I!==C){if(I!==Oe)for(const U in I)!wc(U)&&!(U in C)&&s(g,U,I[U],null,$,v.children,A,O,De);for(const U in C){if(wc(U))continue;const q=C[U],M=I[U];q!==M&&U!=="value"&&s(g,U,M,q,$,v.children,A,O,De)}"value"in C&&s(g,"value",I.value,C.value)}},D=(g,v,I,C,A,O,$,U,q)=>{const M=v.el=g?g.el:a(""),Z=v.anchor=g?g.anchor:a("");let{patchFlag:J,dynamicChildren:re,slotScopeIds:ce}=v;ce&&(U=U?U.concat(ce):ce),g==null?(r(M,I,C),r(Z,I,C),ae(v.children,I,Z,A,O,$,U,q)):J>0&&J&64&&re&&g.dynamicChildren?(K(g.dynamicChildren,re,I,A,O,$,U),(v.key!=null||A&&v===A.subTree)&&Uv(g,v,!0)):se(g,v,I,Z,A,O,$,U,q)},b=(g,v,I,C,A,O,$,U,q)=>{v.slotScopeIds=U,g==null?v.shapeFlag&512?A.ctx.activate(v,I,C,$,q):B(v,I,C,A,O,$,q):ee(g,v,q)},B=(g,v,I,C,A,O,$)=>{const U=g.component=zT(g,C,A);if(Sv(g)&&(U.ctx.renderer=V),KT(U),U.asyncDep){if(A&&A.registerDep(U,Y),!g.el){const q=U.subTree=nt(Si);_(null,q,v,I)}return}Y(U,g,v,I,A,O,$)},ee=(g,v,I)=>{const C=v.component=g.component;if(nT(g,v,I))if(C.asyncDep&&!C.asyncResolved){de(C,v,I);return}else C.next=v,YE(C.update),C.update();else v.el=g.el,C.vnode=v},Y=(g,v,I,C,A,O,$)=>{const U=()=>{if(g.isMounted){let{next:Z,bu:J,u:re,parent:ce,vnode:ge}=g,Ne=Z,Ce;ei(g,!1),Z?(Z.el=ge.el,de(g,Z,$)):Z=ge,J&&_c(J),(Ce=Z.props&&Z.props.onVnodeBeforeUpdate)&&In(Ce,ce,Z,ge),ei(g,!0);const qe=Dl(g),St=g.subTree;g.subTree=qe,p(St,qe,h(St.el),k(St),g,A,O),Z.el=qe.el,Ne===null&&rT(g,qe.el),re&&$t(re,A),(Ce=Z.props&&Z.props.onVnodeUpdated)&&$t(()=>In(Ce,ce,Z,ge),A)}else{let Z;const{el:J,props:re}=v,{bm:ce,m:ge,parent:Ne}=g,Ce=Ec(v);if(ei(g,!1),ce&&_c(ce),!Ce&&(Z=re&&re.onVnodeBeforeMount)&&In(Z,Ne,v),ei(g,!0),J&&oe){const qe=()=>{g.subTree=Dl(g),oe(J,g.subTree,g,A,null)};Ce?v.type.__asyncLoader().then(()=>!g.isUnmounted&&qe()):qe()}else{const qe=g.subTree=Dl(g);p(null,qe,I,C,g,A,O),v.el=qe.el}if(ge&&$t(ge,A),!Ce&&(Z=re&&re.onVnodeMounted)){const qe=v;$t(()=>In(Z,Ne,qe),A)}(v.shapeFlag&256||Ne&&Ec(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&g.a&&$t(g.a,A),g.isMounted=!0,v=I=C=null}},q=g.effect=new Dd(U,()=>Vd(M),g.scope),M=g.update=()=>q.run();M.id=g.uid,ei(g,!0),M()},de=(g,v,I)=>{v.component=g;const C=g.vnode.props;g.vnode=v,g.next=null,RT(g,v.props,C,I),DT(g,v.children,I),qs(),om(),js()},se=(g,v,I,C,A,O,$,U,q=!1)=>{const M=g&&g.children,Z=g?g.shapeFlag:0,J=v.children,{patchFlag:re,shapeFlag:ce}=v;if(re>0){if(re&128){Dt(M,J,I,C,A,O,$,U,q);return}else if(re&256){Bt(M,J,I,C,A,O,$,U,q);return}}ce&8?(Z&16&&De(M,A,O),J!==M&&l(I,J)):Z&16?ce&16?Dt(M,J,I,C,A,O,$,U,q):De(M,A,O,!0):(Z&8&&l(I,""),ce&16&&ae(J,I,C,A,O,$,U,q))},Bt=(g,v,I,C,A,O,$,U,q)=>{g=g||as,v=v||as;const M=g.length,Z=v.length,J=Math.min(M,Z);let re;for(re=0;re<J;re++){const ce=v[re]=q?yr(v[re]):En(v[re]);p(g[re],ce,I,null,A,O,$,U,q)}M>Z?De(g,A,O,!0,!1,J):ae(v,I,C,A,O,$,U,q,J)},Dt=(g,v,I,C,A,O,$,U,q)=>{let M=0;const Z=v.length;let J=g.length-1,re=Z-1;for(;M<=J&&M<=re;){const ce=g[M],ge=v[M]=q?yr(v[M]):En(v[M]);if(uo(ce,ge))p(ce,ge,I,null,A,O,$,U,q);else break;M++}for(;M<=J&&M<=re;){const ce=g[J],ge=v[re]=q?yr(v[re]):En(v[re]);if(uo(ce,ge))p(ce,ge,I,null,A,O,$,U,q);else break;J--,re--}if(M>J){if(M<=re){const ce=re+1,ge=ce<Z?v[ce].el:C;for(;M<=re;)p(null,v[M]=q?yr(v[M]):En(v[M]),I,ge,A,O,$,U,q),M++}}else if(M>re)for(;M<=J;)Je(g[M],A,O,!0),M++;else{const ce=M,ge=M,Ne=new Map;for(M=ge;M<=re;M++){const Ct=v[M]=q?yr(v[M]):En(v[M]);Ct.key!=null&&Ne.set(Ct.key,M)}let Ce,qe=0;const St=re-ge+1;let wn=!1,Wi=0;const Jr=new Array(St);for(M=0;M<St;M++)Jr[M]=0;for(M=ce;M<=J;M++){const Ct=g[M];if(qe>=St){Je(Ct,A,O,!0);continue}let tn;if(Ct.key!=null)tn=Ne.get(Ct.key);else for(Ce=ge;Ce<=re;Ce++)if(Jr[Ce-ge]===0&&uo(Ct,v[Ce])){tn=Ce;break}tn===void 0?Je(Ct,A,O,!0):(Jr[tn-ge]=M+1,tn>=Wi?Wi=tn:wn=!0,p(Ct,v[tn],I,null,A,O,$,U,q),qe++)}const oo=wn?MT(Jr):as;for(Ce=oo.length-1,M=St-1;M>=0;M--){const Ct=ge+M,tn=v[Ct],ao=Ct+1<Z?v[Ct+1].el:C;Jr[M]===0?p(null,tn,I,ao,A,O,$,U,q):wn&&(Ce<0||M!==oo[Ce]?ot(tn,I,ao,2):Ce--)}}},ot=(g,v,I,C,A=null)=>{const{el:O,type:$,transition:U,children:q,shapeFlag:M}=g;if(M&6){ot(g.component.subTree,v,I,C);return}if(M&128){g.suspense.move(v,I,C);return}if(M&64){$.move(g,v,I,V);return}if($===et){r(O,v,I);for(let J=0;J<q.length;J++)ot(q[J],v,I,C);r(g.anchor,v,I);return}if($===Sc){L(g,v,I);return}if(C!==2&&M&1&&U)if(C===0)U.beforeEnter(O),r(O,v,I),$t(()=>U.enter(O),A);else{const{leave:J,delayLeave:re,afterLeave:ce}=U,ge=()=>r(O,v,I),Ne=()=>{J(O,()=>{ge(),ce&&ce()})};re?re(O,ge,Ne):Ne()}else r(O,v,I)},Je=(g,v,I,C=!1,A=!1)=>{const{type:O,props:$,ref:U,children:q,dynamicChildren:M,shapeFlag:Z,patchFlag:J,dirs:re}=g;if(U!=null&&Eh(U,null,I,g,!0),Z&256){v.ctx.deactivate(g);return}const ce=Z&1&&re,ge=!Ec(g);let Ne;if(ge&&(Ne=$&&$.onVnodeBeforeUnmount)&&In(Ne,v,g),Z&6)Tt(g.component,I,C);else{if(Z&128){g.suspense.unmount(I,C);return}ce&&Xr(g,null,v,"beforeUnmount"),Z&64?g.type.remove(g,v,I,A,V,C):M&&(O!==et||J>0&&J&64)?De(M,v,I,!1,!0):(O===et&&J&384||!A&&Z&16)&&De(q,v,I),C&&Zt(g)}(ge&&(Ne=$&&$.onVnodeUnmounted)||ce)&&$t(()=>{Ne&&In(Ne,v,g),ce&&Xr(g,null,v,"unmounted")},I)},Zt=g=>{const{type:v,el:I,anchor:C,transition:A}=g;if(v===et){en(I,C);return}if(v===Sc){N(g);return}const O=()=>{i(I),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(g.shapeFlag&1&&A&&!A.persisted){const{leave:$,delayLeave:U}=A,q=()=>$(I,O);U?U(g.el,O,q):q()}else O()},en=(g,v)=>{let I;for(;g!==v;)I=d(g),i(g),g=I;i(v)},Tt=(g,v,I)=>{const{bum:C,scope:A,update:O,subTree:$,um:U}=g;C&&_c(C),A.stop(),O&&(O.active=!1,Je($,g,v,I)),U&&$t(U,v),$t(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},De=(g,v,I,C=!1,A=!1,O=0)=>{for(let $=O;$<g.length;$++)Je(g[$],v,I,C,A)},k=g=>g.shapeFlag&6?k(g.component.subTree):g.shapeFlag&128?g.suspense.next():d(g.anchor||g.el),G=(g,v,I)=>{g==null?v._vnode&&Je(v._vnode,null,null,!0):p(v._vnode||null,g,v,null,null,null,I),om(),vv(),v._vnode=g},V={p,um:Je,m:ot,r:Zt,mt:B,mc:ae,pc:se,pbc:K,n:k,o:n};let Q,oe;return e&&([Q,oe]=e(V)),{render:G,hydrate:Q,createApp:kT(G,Q)}}function ei({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Uv(n,e,t=!1){const r=n.children,i=e.children;if(ue(r)&&ue(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=yr(i[s]),a.el=o.el),t||Uv(o,a)),a.type===xu&&(a.el=o.el)}}function MT(n){const e=n.slice(),t=[0];let r,i,s,o,a;const c=n.length;for(r=0;r<c;r++){const u=n[r];if(u!==0){if(i=t[t.length-1],n[i]<u){e[r]=i,t.push(r);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<u?s=a+1:o=a;u<n[t[s]]&&(s>0&&(e[r]=t[s-1]),t[s]=r)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const LT=n=>n.__isTeleport,et=Symbol.for("v-fgt"),xu=Symbol.for("v-txt"),Si=Symbol.for("v-cmt"),Sc=Symbol.for("v-stc"),Po=[];let hn=null;function Te(n=!1){Po.push(hn=n?null:[])}function FT(){Po.pop(),hn=Po[Po.length-1]||null}let Yo=1;function ym(n){Yo+=n}function Vv(n){return n.dynamicChildren=Yo>0?hn||as:null,FT(),Yo>0&&hn&&hn.push(n),n}function ke(n,e,t,r,i,s){return Vv(X(n,e,t,r,i,s,!0))}function UT(n,e,t,r,i){return Vv(nt(n,e,t,r,i,!0))}function Th(n){return n?n.__v_isVNode===!0:!1}function uo(n,e){return n.type===e.type&&n.key===e.key}const Nu="__vInternal",Bv=({key:n})=>n??null,Cc=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?rt(n)||Rt(n)||me(n)?{i:sn,r:n,k:e,f:!!t}:n:null);function X(n,e=null,t=null,r=0,i=null,s=n===et?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Bv(e),ref:e&&Cc(e),scopeId:Iv,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:sn};return a?(jd(c,t),s&128&&n.normalize(c)):t&&(c.shapeFlag|=rt(t)?8:16),Yo>0&&!o&&hn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&hn.push(c),c}const nt=VT;function VT(n,e=null,t=null,r=0,i=null,s=!1){if((!n||n===vT)&&(n=Si),Th(n)){const a=Is(n,e,!0);return t&&jd(a,t),Yo>0&&!s&&hn&&(a.shapeFlag&6?hn[hn.indexOf(n)]=a:hn.push(a)),a.patchFlag|=-2,a}if(YT(n)&&(n=n.__vccOpts),e){e=BT(e);let{class:a,style:c}=e;a&&!rt(a)&&(e.class=Rd(a)),$e(c)&&(uv(c)&&!ue(c)&&(c=lt({},c)),e.style=Ad(c))}const o=rt(n)?1:iT(n)?128:LT(n)?64:$e(n)?4:me(n)?2:0;return X(n,e,t,r,i,o,s,!0)}function BT(n){return n?uv(n)||Nu in n?lt({},n):n:null}function Is(n,e,t=!1){const{props:r,ref:i,patchFlag:s,children:o}=n,a=e?$T(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&Bv(a),ref:e&&e.ref?t&&i?ue(i)?i.concat(Cc(e)):[i,Cc(e)]:Cc(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==et?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Is(n.ssContent),ssFallback:n.ssFallback&&Is(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Ci(n=" ",e=0){return nt(xu,null,n,e)}function qd(n,e){const t=nt(Sc,null,n);return t.staticCount=e,t}function bn(n="",e=!1){return e?(Te(),UT(Si,null,n)):nt(Si,null,n)}function En(n){return n==null||typeof n=="boolean"?nt(Si):ue(n)?nt(et,null,n.slice()):typeof n=="object"?yr(n):nt(xu,null,String(n))}function yr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Is(n)}function jd(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(ue(e))t=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),jd(n,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(Nu in e)?e._ctx=sn:i===3&&sn&&(sn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else me(e)?(e={default:e,_ctx:sn},t=32):(e=String(e),r&64?(t=16,e=[Ci(e)]):t=8);n.children=e,n.shapeFlag|=t}function $T(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Rd([e.class,r.class]));else if(i==="style")e.style=Ad([e.style,r.style]);else if(bu(i)){const s=e[i],o=r[i];o&&s!==o&&!(ue(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function In(n,e,t,r=null){pn(n,e,7,[t,r])}const qT=Dv();let jT=0;function zT(n,e,t){const r=n.type,i=(e?e.appContext:n.appContext)||qT,s={uid:jT++,vnode:n,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new fE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ov(r,i),emitsOptions:_v(r,i),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:r.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=ZE.bind(null,s),n.ce&&n.ce(s),s}let vt=null,zd,Qi,vm="__VUE_INSTANCE_SETTERS__";(Qi=fh()[vm])||(Qi=fh()[vm]=[]),Qi.push(n=>vt=n),zd=n=>{Qi.length>1?Qi.forEach(e=>e(n)):Qi[0](n)};const bs=n=>{zd(n),n.scope.on()},wi=()=>{vt&&vt.scope.off(),zd(null)};function $v(n){return n.vnode.shapeFlag&4}let Jo=!1;function KT(n,e=!1){Jo=e;const{props:t,children:r}=n.vnode,i=$v(n);AT(n,t,i,e),NT(n,r);const s=i?GT(n,e):void 0;return Jo=!1,s}function GT(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=lv(new Proxy(n.ctx,_T));const{setup:r}=t;if(r){const i=n.setupContext=r.length>1?WT(n):null;bs(n),qs();const s=Cr(r,n,0,[n.props,i]);if(js(),wi(),Hy(s)){if(s.then(wi,wi),e)return s.then(o=>{wm(n,o,e)}).catch(o=>{ku(o,n,0)});n.asyncDep=s}else wm(n,s,e)}else qv(n,e)}function wm(n,e,t){me(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:$e(e)&&(n.setupState=pv(e)),qv(n,t)}let _m;function qv(n,e,t){const r=n.type;if(!n.render){if(!e&&_m&&!r.render){const i=r.template||Bd(n).template;if(i){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:c}=r,u=lt(lt({isCustomElement:s,delimiters:a},o),c);r.render=_m(i,u)}}n.render=r.render||fn}bs(n),qs(),IT(n),js(),wi()}function HT(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Ht(n,"get","$attrs"),e[t]}}))}function WT(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return HT(n)},slots:n.slots,emit:n.emit,expose:e}}function Du(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(pv(lv(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Do)return Do[t](n)},has(e,t){return t in e||t in Do}}))}function QT(n,e=!0){return me(n)?n.displayName||n.name:n.name||e&&n.__name}function YT(n){return me(n)&&"__vccOpts"in n}const nn=(n,e)=>HE(n,e,Jo);function jv(n,e,t){const r=arguments.length;return r===2?$e(e)&&!ue(e)?Th(e)?nt(n,null,[e]):nt(n,e):nt(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Th(t)&&(t=[t]),nt(n,e,t))}const JT=Symbol.for("v-scx"),XT=()=>Mn(JT),ZT="3.3.2",eS="http://www.w3.org/2000/svg",oi=typeof document<"u"?document:null,Im=oi&&oi.createElement("template"),tS={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const i=e?oi.createElementNS(eS,n):oi.createElement(n,t?{is:t}:void 0);return n==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:n=>oi.createTextNode(n),createComment:n=>oi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>oi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,i,s){const o=t?t.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{Im.innerHTML=r?`<svg>${n}</svg>`:n;const a=Im.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function nS(n,e,t){const r=n._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function rS(n,e,t){const r=n.style,i=rt(t);if(t&&!i){if(e&&!rt(e))for(const s in e)t[s]==null&&Sh(r,s,"");for(const s in t)Sh(r,s,t[s])}else{const s=r.display;i?e!==t&&(r.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(r.display=s)}}const bm=/\s*!important$/;function Sh(n,e,t){if(ue(t))t.forEach(r=>Sh(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=iS(n,e);bm.test(t)?n.setProperty($s(r),t.replace(bm,""),"important"):n[r]=t}}const Em=["Webkit","Moz","ms"],Ol={};function iS(n,e){const t=Ol[e];if(t)return t;let r=Vn(e);if(r!=="filter"&&r in n)return Ol[e]=r;r=Su(r);for(let i=0;i<Em.length;i++){const s=Em[i]+r;if(s in n)return Ol[e]=s}return e}const Tm="http://www.w3.org/1999/xlink";function sS(n,e,t,r,i){if(r&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Tm,e.slice(6,e.length)):n.setAttributeNS(Tm,e,t);else{const s=dE(e);t==null||s&&!Yy(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function oS(n,e,t,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const u=a==="OPTION"?n.getAttribute("value"):n.value,l=t??"";u!==l&&(n.value=l),t==null&&n.removeAttribute(e);return}let c=!1;if(t===""||t==null){const u=typeof n[e];u==="boolean"?t=Yy(t):t==null&&u==="string"?(t="",c=!0):u==="number"&&(t=0,c=!0)}try{n[e]=t}catch{}c&&n.removeAttribute(e)}function es(n,e,t,r){n.addEventListener(e,t,r)}function aS(n,e,t,r){n.removeEventListener(e,t,r)}function cS(n,e,t,r,i=null){const s=n._vei||(n._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=uS(e);if(r){const u=s[e]=dS(r,i);es(n,a,u,c)}else o&&(aS(n,a,o,c),s[e]=void 0)}}const Sm=/(?:Once|Passive|Capture)$/;function uS(n){let e;if(Sm.test(n)){e={};let r;for(;r=n.match(Sm);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):$s(n.slice(2)),e]}let Ml=0;const lS=Promise.resolve(),hS=()=>Ml||(lS.then(()=>Ml=0),Ml=Date.now());function dS(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;pn(fS(r,t.value),e,5,[r])};return t.value=n,t.attached=hS(),t}function fS(n,e){if(ue(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Cm=/^on[a-z]/,pS=(n,e,t,r,i=!1,s,o,a,c)=>{e==="class"?nS(n,r,i):e==="style"?rS(n,t,r):bu(e)?Td(e)||cS(n,e,t,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):mS(n,e,r,i))?oS(n,e,r,s,o,a,c):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),sS(n,e,r,i))};function mS(n,e,t,r){return r?!!(e==="innerHTML"||e==="textContent"||e in n&&Cm.test(e)&&me(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Cm.test(e)&&rt(t)?!1:e in n}const km=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ue(e)?t=>_c(e,t):e};function gS(n){n.target.composing=!0}function Am(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const br={created(n,{modifiers:{lazy:e,trim:t,number:r}},i){n._assign=km(i);const s=r||i.props&&i.props.type==="number";es(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),s&&(a=dh(a)),n._assign(a)}),t&&es(n,"change",()=>{n.value=n.value.trim()}),e||(es(n,"compositionstart",gS),es(n,"compositionend",Am),es(n,"change",Am))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:r,number:i}},s){if(n._assign=km(s),n.composing||document.activeElement===n&&n.type!=="range"&&(t||r&&n.value.trim()===e||(i||n.type==="number")&&dh(n.value)===e))return;const o=e??"";n.value!==o&&(n.value=o)}},yS=["ctrl","shift","alt","meta"],vS={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>yS.some(t=>n[`${t}Key`]&&!e.includes(t))},zv=(n,e)=>(t,...r)=>{for(let i=0;i<e.length;i++){const s=vS[e[i]];if(s&&s(t,e))return}return n(t,...r)},wS=lt({patchProp:pS},tS);let Rm;function _S(){return Rm||(Rm=PT(wS))}const IS=(...n)=>{const e=_S().createApp(...n),{mount:t}=e;return e.mount=r=>{const i=bS(r);if(!i)return;const s=e._component;!me(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function bS(n){return rt(n)?document.querySelector(n):n}const ES="/ticharlez34/assets/logo-826f37f1.png";/**
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
 */const Kv=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},TS=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Gv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(t[l],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Kv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):TS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new SS;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const m=u<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class SS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const CS=function(n){const e=Kv(n);return Gv.encodeByteArray(e,!0)},zc=function(n){return CS(n).replace(/\./g,"")},Hv=function(n){try{return Gv.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Kc(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!kS(t)||(n[t]=Kc(n[t],e[t]));return n}function kS(n){return n!=="__proto__"}/**
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
 */function AS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const RS=()=>AS().__FIREBASE_DEFAULTS__,xS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},NS=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Hv(n[1]);return e&&JSON.parse(e)},Pu=()=>{try{return RS()||xS()||NS()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},DS=n=>{var e,t;return(t=(e=Pu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Wv=()=>{var n;return(n=Pu())===null||n===void 0?void 0:n.config},Qv=n=>{var e;return(e=Pu())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class PS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function OS(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[zc(JSON.stringify(t)),zc(JSON.stringify(o)),a].join(".")}/**
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
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function MS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function Kd(){var n;const e=(n=Pu())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function LS(){return typeof self=="object"&&self.self===self}function Yv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Gd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jv(){const n=je();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function FS(){return!Kd()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Xo(){try{return typeof indexedDB=="object"}catch{return!1}}function US(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const VS="FirebaseError";class Ut extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=VS,Object.setPrototypeOf(this,Ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bi.prototype.create)}}class Bi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?BS(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ut(i,a,r)}}function BS(n,e){return n.replace($S,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const $S=/\{\$([^}]+)}/g;/**
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
 */function xm(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function qS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Gc(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Nm(s)&&Nm(o)){if(!Gc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Nm(n){return n!==null&&typeof n=="object"}/**
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
 */function zs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ss(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function So(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Xv(n,e){const t=new jS(n,e);return t.subscribe.bind(t)}class jS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");zS(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ll),i.error===void 0&&(i.error=Ll),i.complete===void 0&&(i.complete=Ll);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ll(){}/**
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
 */function ie(n){return n&&n._delegate?n._delegate:n}class Bn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ni="[DEFAULT]";/**
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
 */class KS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new PS;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HS(e))try{this.getOrInitializeService({instanceIdentifier:ni})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ni){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ni){return this.instances.has(e)}getOptions(e=ni){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:GS(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ni){return this.component?this.component.multipleInstances?e:ni:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GS(n){return n===ni?void 0:n}function HS(n){return n.instantiationMode==="EAGER"}/**
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
 */class WS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new KS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Hd=[];var we;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(we||(we={}));const Zv={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},QS=we.INFO,YS={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},JS=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=YS[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ou{constructor(e){this.name=e,this._logLevel=QS,this._logHandler=JS,this._userLogHandler=null,Hd.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}function XS(n){Hd.forEach(e=>{e.setLogLevel(n)})}function ZS(n,e){for(const t of Hd){let r=null;e&&e.level&&(r=Zv[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r??i.logLevel)&&n({level:we[s].toLowerCase(),message:a,args:o,type:i.name})}}}const eC=(n,e)=>e.some(t=>n instanceof t);let Dm,Pm;function tC(){return Dm||(Dm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nC(){return Pm||(Pm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ew=new WeakMap,Ch=new WeakMap,tw=new WeakMap,Fl=new WeakMap,Wd=new WeakMap;function rC(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(kr(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ew.set(t,n)}).catch(()=>{}),Wd.set(e,n),e}function iC(n){if(Ch.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Ch.set(n,e)}let kh={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ch.get(n);if(e==="objectStoreNames")return n.objectStoreNames||tw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return kr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function sC(n){kh=n(kh)}function oC(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ul(this),e,...t);return tw.set(r,e.sort?e.sort():[e]),kr(r)}:nC().includes(n)?function(...e){return n.apply(Ul(this),e),kr(ew.get(this))}:function(...e){return kr(n.apply(Ul(this),e))}}function aC(n){return typeof n=="function"?oC(n):(n instanceof IDBTransaction&&iC(n),eC(n,tC())?new Proxy(n,kh):n)}function kr(n){if(n instanceof IDBRequest)return rC(n);if(Fl.has(n))return Fl.get(n);const e=aC(n);return e!==n&&(Fl.set(n,e),Wd.set(e,n)),e}const Ul=n=>Wd.get(n);function cC(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=kr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(kr(o.result),c.oldVersion,c.newVersion,kr(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const uC=["get","getKey","getAll","getAllKeys","count"],lC=["put","add","delete","clear"],Vl=new Map;function Om(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Vl.get(e))return Vl.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=lC.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uC.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&c.done]))[0]};return Vl.set(e,s),s}sC(n=>({...n,get:(e,t,r)=>Om(e,t)||n.get(e,t,r),has:(e,t)=>!!Om(e,t)||n.has(e,t)}));/**
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
 */class hC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(dC(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function dC(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ah="@firebase/app",Mm="0.9.10";/**
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
 */const ki=new Ou("@firebase/app"),fC="@firebase/app-compat",pC="@firebase/analytics-compat",mC="@firebase/analytics",gC="@firebase/app-check-compat",yC="@firebase/app-check",vC="@firebase/auth",wC="@firebase/auth-compat",_C="@firebase/database",IC="@firebase/database-compat",bC="@firebase/functions",EC="@firebase/functions-compat",TC="@firebase/installations",SC="@firebase/installations-compat",CC="@firebase/messaging",kC="@firebase/messaging-compat",AC="@firebase/performance",RC="@firebase/performance-compat",xC="@firebase/remote-config",NC="@firebase/remote-config-compat",DC="@firebase/storage",PC="@firebase/storage-compat",OC="@firebase/firestore",MC="@firebase/firestore-compat",LC="firebase",FC="9.22.0";/**
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
 */const Rr="[DEFAULT]",UC={[Ah]:"fire-core",[fC]:"fire-core-compat",[mC]:"fire-analytics",[pC]:"fire-analytics-compat",[yC]:"fire-app-check",[gC]:"fire-app-check-compat",[vC]:"fire-auth",[wC]:"fire-auth-compat",[_C]:"fire-rtdb",[IC]:"fire-rtdb-compat",[bC]:"fire-fn",[EC]:"fire-fn-compat",[TC]:"fire-iid",[SC]:"fire-iid-compat",[CC]:"fire-fcm",[kC]:"fire-fcm-compat",[AC]:"fire-perf",[RC]:"fire-perf-compat",[xC]:"fire-rc",[NC]:"fire-rc-compat",[DC]:"fire-gcs",[PC]:"fire-gcs-compat",[OC]:"fire-fst",[MC]:"fire-fst-compat","fire-js":"fire-js",[LC]:"fire-js-all"};/**
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
 */const xr=new Map,Zo=new Map;function Hc(n,e){try{n.container.addComponent(e)}catch(t){ki.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function nw(n,e){n.container.addOrOverwriteComponent(e)}function Nr(n){const e=n.name;if(Zo.has(e))return ki.debug(`There were multiple attempts to register component ${e}.`),!1;Zo.set(e,n);for(const t of xr.values())Hc(t,n);return!0}function Mu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function VC(n,e,t=Rr){Mu(n,e).clearInstance(t)}function BC(){Zo.clear()}/**
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
 */const $C={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Zn=new Bi("app","Firebase",$C);/**
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
 */let qC=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}};/**
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
 */const jr=FC;function Qd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Rr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Zn.create("bad-app-name",{appName:String(i)});if(t||(t=Wv()),!t)throw Zn.create("no-options");const s=xr.get(i);if(s){if(Gc(t,s.options)&&Gc(r,s.config))return s;throw Zn.create("duplicate-app",{appName:i})}const o=new WS(i);for(const c of Zo.values())o.addComponent(c);const a=new qC(t,r,o);return xr.set(i,a),a}function rw(n=Rr){const e=xr.get(n);if(!e&&n===Rr&&Wv())return Qd();if(!e)throw Zn.create("no-app",{appName:n});return e}function jC(){return Array.from(xr.values())}async function iw(n){const e=n.name;xr.has(e)&&(xr.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function Ln(n,e,t){var r;let i=(r=UC[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ki.warn(a.join(" "));return}Nr(new Bn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function sw(n,e){if(n!==null&&typeof n!="function")throw Zn.create("invalid-log-argument");ZS(n,e)}function ow(n){XS(n)}/**
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
 */const zC="firebase-heartbeat-database",KC=1,ea="firebase-heartbeat-store";let Bl=null;function aw(){return Bl||(Bl=cC(zC,KC,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ea)}}}).catch(n=>{throw Zn.create("idb-open",{originalErrorMessage:n.message})})),Bl}async function GC(n){try{return await(await aw()).transaction(ea).objectStore(ea).get(cw(n))}catch(e){if(e instanceof Ut)ki.warn(e.message);else{const t=Zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ki.warn(t.message)}}}async function Lm(n,e){try{const r=(await aw()).transaction(ea,"readwrite");await r.objectStore(ea).put(e,cw(n)),await r.done}catch(t){if(t instanceof Ut)ki.warn(t.message);else{const r=Zn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ki.warn(r.message)}}}function cw(n){return`${n.name}!${n.options.appId}`}/**
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
 */const HC=1024,WC=30*24*60*60*1e3;class QC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new JC(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Fm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=WC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Fm(),{heartbeatsToSend:t,unsentEntries:r}=YC(this._heartbeatsCache.heartbeats),i=zc(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Fm(){return new Date().toISOString().substring(0,10)}function YC(n,e=HC){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Um(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Um(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class JC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xo()?US().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await GC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Um(n){return zc(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function XC(n){Nr(new Bn("platform-logger",e=>new hC(e),"PRIVATE")),Nr(new Bn("heartbeat",e=>new QC(e),"PRIVATE")),Ln(Ah,Mm,n),Ln(Ah,Mm,"esm2017"),Ln("fire-js","")}XC("");const ZC=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Ut,SDK_VERSION:jr,_DEFAULT_ENTRY_NAME:Rr,_addComponent:Hc,_addOrOverwriteComponent:nw,_apps:xr,_clearComponents:BC,_components:Zo,_getProvider:Mu,_registerComponent:Nr,_removeServiceInstance:VC,deleteApp:iw,getApp:rw,getApps:jC,initializeApp:Qd,onLog:sw,registerVersion:Ln,setLogLevel:ow},Symbol.toStringTag,{value:"Module"}));function Yd(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const lo={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Yi={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function ek(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function uw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tk=ek,nk=uw,lw=new Bi("auth","Firebase",uw());/**
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
 */const Wc=new Ou("@firebase/auth");function rk(n,...e){Wc.logLevel<=we.WARN&&Wc.warn(`Auth (${jr}): ${n}`,...e)}function kc(n,...e){Wc.logLevel<=we.ERROR&&Wc.error(`Auth (${jr}): ${n}`,...e)}/**
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
 */function ht(n,...e){throw Jd(n,...e)}function _t(n,...e){return Jd(n,...e)}function hw(n,e,t){const r=Object.assign(Object.assign({},nk()),{[e]:t});return new Bi("auth","Firebase",r).create(e,{appName:n.name})}function Ks(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ht(n,"argument-error"),hw(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Jd(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return lw.create(n,...e)}function F(n,e,...t){if(!n)throw Jd(e,...t)}function Nn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw kc(e),new Error(e)}function mn(n,e){n||Nn(e)}/**
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
 */function ta(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Xd(){return Vm()==="http:"||Vm()==="https:"}function Vm(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function ik(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xd()||Yv()||"connection"in navigator)?navigator.onLine:!0}function sk(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Sa{constructor(e,t){this.shortDelay=e,this.longDelay=t,mn(t>e,"Short delay should be less than long delay!"),this.isMobile=MS()||Gd()}get(){return ik()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zd(n,e){mn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class dw{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ok={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ak=new Sa(3e4,6e4);function tt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function st(n,e,t,r,i={}){return fw(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=zs(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),dw.fetch()(pw(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function fw(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},ok),e);try{const i=new ck(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Co(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Co(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Co(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Co(n,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw hw(n,l,u);ht(n,l)}}catch(i){if(i instanceof Ut)throw i;ht(n,"network-request-failed",{message:String(i)})}}async function or(n,e,t,r,i={}){const s=await st(n,e,t,r,i);return"mfaPendingCredential"in s&&ht(n,"multi-factor-auth-required",{_serverResponse:s}),s}function pw(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Zd(n.config,i):`${n.config.apiScheme}://${i}`}class ck{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(_t(this.auth,"network-request-failed")),ak.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Co(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=_t(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function uk(n,e){return st(n,"POST","/v1/accounts:delete",e)}async function lk(n,e){return st(n,"POST","/v1/accounts:update",e)}async function hk(n,e){return st(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Oo(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dk(n,e=!1){const t=ie(n),r=await t.getIdToken(e),i=Lu(r);F(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Oo($l(i.auth_time)),issuedAtTime:Oo($l(i.iat)),expirationTime:Oo($l(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function $l(n){return Number(n)*1e3}function Lu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return kc("JWT malformed, contained fewer than 3 sections"),null;try{const i=Hv(t);return i?JSON.parse(i):(kc("Failed to decode base64 JWT payload"),null)}catch(i){return kc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function fk(n){const e=Lu(n);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function nr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ut&&pk(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function pk({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class mk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class mw{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oo(this.lastLoginAt),this.creationTime=Oo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function na(n){var e;const t=n.auth,r=await n.getIdToken(),i=await nr(n,hk(t,{idToken:r}));F(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?vk(s.providerUserInfo):[],a=yk(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new mw(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function gk(n){const e=ie(n);await na(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yk(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function vk(n){return n.map(e=>{var{providerId:t}=e,r=Yd(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function wk(n,e){const t=await fw(n,{},async()=>{const r=zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=pw(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",dw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class ra{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await wk(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new ra;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ra,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
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
 */function dr(n,e){F(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class _i{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Yd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new mw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await nr(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return dk(this,e)}reload(){return gk(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new _i(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await na(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await nr(this,uk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,u,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,p=(a=t.tenantId)!==null&&a!==void 0?a:void 0,y=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,_=(u=t.createdAt)!==null&&u!==void 0?u:void 0,S=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:L,emailVerified:N,isAnonymous:he,providerData:x,stsTokenManager:Ee}=t;F(L&&Ee,e,"internal-error");const ae=ra.fromJSON(this.name,Ee);F(typeof L=="string",e,"internal-error"),dr(h,e.name),dr(d,e.name),F(typeof N=="boolean",e,"internal-error"),F(typeof he=="boolean",e,"internal-error"),dr(f,e.name),dr(m,e.name),dr(p,e.name),dr(y,e.name),dr(_,e.name),dr(S,e.name);const Et=new _i({uid:L,auth:e,email:d,emailVerified:N,displayName:h,isAnonymous:he,photoURL:m,phoneNumber:f,tenantId:p,stsTokenManager:ae,createdAt:_,lastLoginAt:S});return x&&Array.isArray(x)&&(Et.providerData=x.map(K=>Object.assign({},K))),y&&(Et._redirectEventId=y),Et}static async _fromIdTokenResponse(e,t,r=!1){const i=new ra;i.updateFromServerResponse(t);const s=new _i({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await na(s),s}}/**
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
 */const Bm=new Map;function Yt(n){mn(n instanceof Function,"Expected a class definition");let e=Bm.get(n);return e?(mn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Bm.set(n,e),e)}/**
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
 */class gw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}gw.type="NONE";const Es=gw;/**
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
 */function Ii(n,e,t){return`firebase:${n}:${e}:${t}`}class ds{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ii(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ii("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_i._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ds(Yt(Es),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Yt(Es);const o=Ii(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=_i._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new ds(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ds(s,e,r))}}/**
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
 */function $m(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ww(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_w(e))return"Blackberry";if(Iw(e))return"Webos";if(ef(e))return"Safari";if((e.includes("chrome/")||vw(e))&&!e.includes("edge/"))return"Chrome";if(Ca(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yw(n=je()){return/firefox\//i.test(n)}function ef(n=je()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vw(n=je()){return/crios\//i.test(n)}function ww(n=je()){return/iemobile/i.test(n)}function Ca(n=je()){return/android/i.test(n)}function _w(n=je()){return/blackberry/i.test(n)}function Iw(n=je()){return/webos/i.test(n)}function Gs(n=je()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function _k(n=je()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function Ik(n=je()){var e;return Gs(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bk(){return Jv()&&document.documentMode===10}function bw(n=je()){return Gs(n)||Ca(n)||Iw(n)||_w(n)||/windows phone/i.test(n)||ww(n)}function Ek(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ew(n,e=[]){let t;switch(n){case"Browser":t=$m(je());break;case"Worker":t=`${$m(je())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${jr}/${r}`}/**
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
 */async function Tk(n){return(await st(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Tw(n,e){return st(n,"GET","/v2/recaptchaConfig",tt(n,e))}/**
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
 */function qm(n){return n!==void 0&&n.getResponse!==void 0}function jm(n){return n!==void 0&&n.enterprise!==void 0}class Sw{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
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
 */function Sk(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function tf(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=_t("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Sk().appendChild(r)})}function Cw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Ck="https://www.google.com/recaptcha/enterprise.js?render=",kk="recaptcha-enterprise",Ak="NO_RECAPTCHA";class kw{constructor(e){this.type=kk,this.auth=Ye(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Tw(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Sw(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;jm(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(Ak)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&jm(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}tf(Ck+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Dr(n,e,t,r=!1){const i=new kw(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class Rk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class xk{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zm(this),this.idTokenSubscription=new zm(this),this.beforeStateQueue=new Rk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Yt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ds.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await na(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ie(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(e))})}async initializeRecaptchaConfig(){const e=await Tw(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Sw(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new kw(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Yt(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await ds.create(this,[Yt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ew(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&rk(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ye(n){return ie(n)}class zm{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xv(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Nk(n,e){const t=Mu(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Gc(s,e??{}))return i;ht(i,"already-initialized")}return t.initialize({options:e})}function Dk(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Yt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Aw(n,e,t){const r=Ye(n);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=Rw(e),{host:o,port:a}=Pk(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ok()}function Rw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Pk(n){const e=Rw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Km(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Km(o)}}}function Km(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ok(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Hs{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,t){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}/**
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
 */async function xw(n,e){return st(n,"POST","/v1/accounts:resetPassword",tt(n,e))}async function Nw(n,e){return st(n,"POST","/v1/accounts:update",e)}async function Mk(n,e){return st(n,"POST","/v1/accounts:update",tt(n,e))}/**
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
 */async function ql(n,e){return or(n,"POST","/v1/accounts:signInWithPassword",tt(n,e))}async function Fu(n,e){return st(n,"POST","/v1/accounts:sendOobCode",tt(n,e))}async function Lk(n,e){return Fu(n,e)}async function jl(n,e){return Fu(n,e)}async function zl(n,e){return Fu(n,e)}async function Fk(n,e){return Fu(n,e)}/**
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
 */async function Uk(n,e){return or(n,"POST","/v1/accounts:signInWithEmailLink",tt(n,e))}async function Vk(n,e){return or(n,"POST","/v1/accounts:signInWithEmailLink",tt(n,e))}/**
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
 */class ia extends Hs{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ia(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ia(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const i=await Dr(e,r,"signInWithPassword");return ql(e,i)}else return ql(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Dr(e,r,"signInWithPassword");return ql(e,s)}else return Promise.reject(i)});case"emailLink":return Uk(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Nw(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Vk(e,{idToken:t,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function er(n,e){return or(n,"POST","/v1/accounts:signInWithIdp",tt(n,e))}/**
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
 */const Bk="http://localhost";class $n extends Hs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ht("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Yd(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new $n(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return er(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,er(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,er(e,t)}buildRequest(){const e={requestUri:Bk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=zs(t)}return e}}/**
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
 */async function $k(n,e){return st(n,"POST","/v1/accounts:sendVerificationCode",tt(n,e))}async function qk(n,e){return or(n,"POST","/v1/accounts:signInWithPhoneNumber",tt(n,e))}async function jk(n,e){const t=await or(n,"POST","/v1/accounts:signInWithPhoneNumber",tt(n,e));if(t.temporaryProof)throw Co(n,"account-exists-with-different-credential",t);return t}const zk={USER_NOT_FOUND:"user-not-found"};async function Kk(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return or(n,"POST","/v1/accounts:signInWithPhoneNumber",tt(n,t),zk)}/**
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
 */class bi extends Hs{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new bi({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new bi({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return qk(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return jk(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Kk(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new bi({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function Gk(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Hk(n){const e=ss(So(n)).link,t=e?ss(So(e)).deep_link_id:null,r=ss(So(n)).deep_link_id;return(r?ss(So(r)).link:null)||r||t||e||n}class Uu{constructor(e){var t,r,i,s,o,a;const c=ss(So(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Gk((i=c.mode)!==null&&i!==void 0?i:null);F(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Hk(e);try{return new Uu(t)}catch{return null}}}/**
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
 */class zr{constructor(){this.providerId=zr.PROVIDER_ID}static credential(e,t){return ia._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Uu.parseLink(t);return F(r,"argument-error"),ia._fromEmailAndCode(e,r.code,r.tenantId)}}zr.PROVIDER_ID="password";zr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ar{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ws extends ar{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class fs extends Ws{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return F("providerId"in t&&"signInMethod"in t,"argument-error"),$n._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return F(e.idToken||e.accessToken,"argument-error"),$n._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return fs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return fs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new fs(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class Cn extends Ws{constructor(){super("facebook.com")}static credential(e){return $n._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
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
 */class kn extends Ws{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $n._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return kn.credential(t,r)}catch{return null}}}kn.GOOGLE_SIGN_IN_METHOD="google.com";kn.PROVIDER_ID="google.com";/**
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
 */class An extends Ws{constructor(){super("github.com")}static credential(e){return $n._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.GITHUB_SIGN_IN_METHOD="github.com";An.PROVIDER_ID="github.com";/**
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
 */const Wk="http://localhost";class Ts extends Hs{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return er(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,er(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,er(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new Ts(r,s)}static _create(e,t){return new Ts(e,t)}buildRequest(){return{requestUri:Wk,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const Qk="saml.";class Qc extends ar{constructor(e){F(e.startsWith(Qk),"argument-error"),super(e)}static credentialFromResult(e){return Qc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Qc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Ts.fromJSON(e);return F(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return Ts._create(r,t)}catch{return null}}}/**
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
 */class Rn extends Ws{constructor(){super("twitter.com")}static credential(e,t){return $n._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Rn.credential(t,r)}catch{return null}}}Rn.TWITTER_SIGN_IN_METHOD="twitter.com";Rn.PROVIDER_ID="twitter.com";/**
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
 */async function Ac(n,e){return or(n,"POST","/v1/accounts:signUp",tt(n,e))}/**
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
 */class an{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await _i._fromIdTokenResponse(e,r,i),o=Gm(r);return new an({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Gm(r);return new an({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Gm(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function Yk(n){var e;const t=Ye(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new an({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await Ac(t,{returnSecureToken:!0}),i=await an._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
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
 */class Yc extends Ut{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Yc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Yc(e,t,r,i)}}function Dw(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Yc._fromErrorAndOperation(n,s,e,r):s})}/**
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
 */function Pw(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function Jk(n,e){const t=ie(n);await Vu(!0,t,e);const{providerUserInfo:r}=await lk(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=Pw(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function nf(n,e,t=!1){const r=await nr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return an._forOperation(n,"link",r)}async function Vu(n,e,t){await na(e);const r=Pw(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";F(r.has(t)===n,e.auth,i)}/**
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
 */async function Ow(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await nr(n,Dw(r,i,e,n),t);F(s.idToken,r,"internal-error");const o=Lu(s.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(n.uid===a,r,"user-mismatch"),an._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ht(r,"user-mismatch"),s}}/**
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
 */async function Mw(n,e,t=!1){const r="signIn",i=await Dw(n,r,e),s=await an._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Bu(n,e){return Mw(Ye(n),e)}async function Lw(n,e){const t=ie(n);return await Vu(!1,t,e.providerId),nf(t,e)}async function Fw(n,e){return Ow(ie(n),e)}/**
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
 */async function Xk(n,e){return or(n,"POST","/v1/accounts:signInWithCustomToken",tt(n,e))}/**
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
 */async function Zk(n,e){const t=Ye(n),r=await Xk(t,{token:e,returnSecureToken:!0}),i=await an._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
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
 */class ka{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?rf._fromServerResponse(e,t):"totpInfo"in t?sf._fromServerResponse(e,t):ht(e,"internal-error")}}class rf extends ka{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new rf(t)}}class sf extends ka{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new sf(t)}}/**
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
 */function ps(n,e,t){var r;F(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),F(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(F(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(F(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function eA(n,e,t){var r;const i=Ye(n),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await Dr(i,s,"getOobCode",!0);t&&ps(i,o,t),await jl(i,o)}else t&&ps(i,s,t),await jl(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await Dr(i,s,"getOobCode",!0);t&&ps(i,a,t),await jl(i,a)}else return Promise.reject(o)})}async function tA(n,e,t){await xw(ie(n),{oobCode:e,newPassword:t})}async function nA(n,e){await Mk(ie(n),{oobCode:e})}async function Uw(n,e){const t=ie(n),r=await xw(t,{oobCode:e}),i=r.requestType;switch(F(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":F(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":F(r.mfaInfo,t,"internal-error");default:F(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=ka._fromServerResponse(Ye(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function rA(n,e){const{data:t}=await Uw(ie(n),e);return t.email}async function of(n,e,t){var r;const i=Ye(n),s={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Dr(i,s,"signUpPassword");o=Ac(i,u)}else o=Ac(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const l=await Dr(i,s,"signUpPassword");return Ac(i,l)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),c=await an._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function af(n,e,t){return Bu(ie(n),zr.credential(e,t))}/**
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
 */async function iA(n,e,t){var r;const i=Ye(n),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,c){F(c.handleCodeInApp,i,"argument-error"),c&&ps(i,a,c)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await Dr(i,s,"getOobCode",!0);o(a,t),await zl(i,a)}else o(s,t),await zl(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const c=await Dr(i,s,"getOobCode",!0);o(c,t),await zl(i,c)}else return Promise.reject(a)})}function sA(n,e){const t=Uu.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function oA(n,e,t){const r=ie(n),i=zr.credentialWithLink(e,t||ta());return F(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Bu(r,i)}/**
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
 */async function aA(n,e){return st(n,"POST","/v1/accounts:createAuthUri",tt(n,e))}/**
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
 */async function cA(n,e){const t=Xd()?ta():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await aA(ie(n),r);return i||[]}async function uA(n,e){const t=ie(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&ps(t.auth,i,e);const{email:s}=await Lk(t.auth,i);s!==n.email&&await n.reload()}async function lA(n,e,t){const r=ie(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&ps(r.auth,s,t);const{email:o}=await Fk(r.auth,s);o!==n.email&&await n.reload()}/**
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
 */async function hA(n,e){return st(n,"POST","/v1/accounts:update",e)}/**
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
 */async function dA(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=ie(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await nr(r,hA(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function fA(n,e){return Vw(ie(n),e,null)}function pA(n,e){return Vw(ie(n),null,e)}async function Vw(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await nr(n,Nw(r,s));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function mA(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=Lu(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new ms(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new gA(s,i);case"github.com":return new yA(s,i);case"google.com":return new vA(s,i);case"twitter.com":return new wA(s,i,n.screenName||null);case"custom":case"anonymous":return new ms(s,null);default:return new ms(s,r,i)}}class ms{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class Bw extends ms{constructor(e,t,r,i){super(e,t,r),this.username=i}}class gA extends ms{constructor(e,t){super(e,"facebook.com",t)}}class yA extends Bw{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class vA extends ms{constructor(e,t){super(e,"google.com",t)}}class wA extends Bw{constructor(e,t,r){super(e,"twitter.com",t,r)}}function _A(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:mA(t)}function IA(n,e,t,r){return ie(n).onIdTokenChanged(e,t,r)}function bA(n,e,t){return ie(n).beforeAuthStateChanged(e,t)}function $w(n,e,t,r){return ie(n).onAuthStateChanged(e,t,r)}function EA(n){return ie(n).signOut()}class fi{constructor(e,t,r){this.type=e,this.credential=t,this.auth=r}static _fromIdtoken(e,t){return new fi("enroll",e,t)}static _fromMfaPendingCredential(e){return new fi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return fi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return fi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class cf{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=Ye(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>ka._fromServerResponse(r,a));F(i.mfaPendingCredential,r,"internal-error");const o=fi._fromMfaPendingCredential(i.mfaPendingCredential);return new cf(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const l=await an._fromIdTokenResponse(r,t.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return F(t.user,r,"internal-error"),an._forOperation(t.user,t.operationType,u);default:ht(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function TA(n,e){var t;const r=ie(n),i=e;return F(e.customData.operationType,r,"argument-error"),F((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),cf._fromError(r,i)}/**
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
 */function SA(n,e){return st(n,"POST","/v2/accounts/mfaEnrollment:start",tt(n,e))}function CA(n,e){return st(n,"POST","/v2/accounts/mfaEnrollment:finalize",tt(n,e))}function kA(n,e){return st(n,"POST","/v2/accounts/mfaEnrollment:withdraw",tt(n,e))}class uf{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>ka._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new uf(e)}async getSession(){return fi._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const r=e,i=await this.getSession(),s=await nr(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await nr(this.user,kA(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Kl=new WeakMap;function AA(n){const e=ie(n);return Kl.has(e)||Kl.set(e,uf._fromUser(e)),Kl.get(e)}const Jc="__sak";/**
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
 */class qw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Jc,"1"),this.storage.removeItem(Jc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function RA(){const n=je();return ef(n)||Gs(n)}const xA=1e3,NA=10;class jw extends qw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=RA()&&Ek(),this.fallbackToPolling=bw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);bk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,NA):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},xA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}jw.type="LOCAL";const $u=jw;/**
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
 */class zw extends qw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}zw.type="SESSION";const Pr=zw;/**
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
 */function DA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class qu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new qu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,s)),c=await DA(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qu.receivers=[];/**
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
 */function Aa(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class PA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=Aa("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ze(){return window}function OA(n){Ze().location.href=n}/**
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
 */function lf(){return typeof Ze().WorkerGlobalScope<"u"&&typeof Ze().importScripts=="function"}async function MA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function FA(){return lf()?self:null}/**
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
 */const Kw="firebaseLocalStorageDb",UA=1,Xc="firebaseLocalStorage",Gw="fbase_key";class Ra{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ju(n,e){return n.transaction([Xc],e?"readwrite":"readonly").objectStore(Xc)}function VA(){const n=indexedDB.deleteDatabase(Kw);return new Ra(n).toPromise()}function Rh(){const n=indexedDB.open(Kw,UA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Xc,{keyPath:Gw})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Xc)?e(r):(r.close(),await VA(),e(await Rh()))})})}async function Hm(n,e,t){const r=ju(n,!0).put({[Gw]:e,value:t});return new Ra(r).toPromise()}async function BA(n,e){const t=ju(n,!1).get(e),r=await new Ra(t).toPromise();return r===void 0?null:r.value}function Wm(n,e){const t=ju(n,!0).delete(e);return new Ra(t).toPromise()}const $A=800,qA=3;class Hw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rh(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>qA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qu._getInstance(FA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await MA(),!this.activeServiceWorker)return;this.sender=new PA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rh();return await Hm(e,Jc,"1"),await Wm(e,Jc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hm(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>BA(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Wm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ju(i,!1).getAll();return new Ra(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$A)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hw.type="LOCAL";const Ss=Hw;/**
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
 */function jA(n,e){return st(n,"POST","/v2/accounts/mfaSignIn:start",tt(n,e))}function zA(n,e){return st(n,"POST","/v2/accounts/mfaSignIn:finalize",tt(n,e))}/**
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
 */const KA=500,GA=6e4,oc=1e12;class HA{constructor(e){this.auth=e,this.counter=oc,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new WA(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||oc;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||oc;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||oc;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class WA{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;F(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=QA(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},GA)},KA))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function QA(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const Gl=Cw("rcb"),YA=new Sa(3e4,6e4),JA="https://www.google.com/recaptcha/api.js?";class XA{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ze().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return F(ZA(t),e,"argument-error"),this.shouldResolveImmediately(t)&&qm(Ze().grecaptcha)?Promise.resolve(Ze().grecaptcha):new Promise((r,i)=>{const s=Ze().setTimeout(()=>{i(_t(e,"network-request-failed"))},YA.get());Ze()[Gl]=()=>{Ze().clearTimeout(s),delete Ze()[Gl];const a=Ze().grecaptcha;if(!a||!qm(a)){i(_t(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=t,r(a)};const o=`${JA}?${zs({onload:Gl,render:"explicit",hl:t})}`;tf(o).catch(()=>{clearTimeout(s),i(_t(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Ze().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function ZA(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class e1{async load(e){return new HA(e)}clearedOneInstance(){}}/**
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
 */const Ww="recaptcha",t1={theme:"light",type:"image"};let n1=class{constructor(e,t=Object.assign({},t1),r){this.parameters=t,this.type=Ww,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ye(r),this.isInvisible=this.parameters.size==="invisible",F(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;F(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new e1:new XA,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){F(!this.parameters.sitekey,this.auth,"argument-error"),F(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),F(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=Ze()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){F(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){F(Xd()&&!lf(),this.auth,"internal-error"),await r1(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Tk(this.auth);F(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return F(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function r1(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class hf{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=bi._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function i1(n,e,t){const r=Ye(n),i=await zu(r,e,ie(t));return new hf(i,s=>Bu(r,s))}async function s1(n,e,t){const r=ie(n);await Vu(!1,r,"phone");const i=await zu(r.auth,e,ie(t));return new hf(i,s=>Lw(r,s))}async function o1(n,e,t){const r=ie(n),i=await zu(r.auth,e,ie(t));return new hf(i,s=>Fw(r,s))}async function zu(n,e,t){var r;const i=await t.verify();try{F(typeof i=="string",n,"argument-error"),F(t.type===Ww,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return F(o.type==="enroll",n,"internal-error"),(await SA(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{F(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return F(a,n,"missing-multi-factor-info"),(await jA(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await $k(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function a1(n,e){await nf(ie(n),e)}/**
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
 */let Ai=class Rc{constructor(e){this.providerId=Rc.PROVIDER_ID,this.auth=Ye(e)}verifyPhoneNumber(e,t){return zu(this.auth,e,ie(t))}static credential(e,t){return bi._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Rc.credentialFromTaggedObject(t)}static credentialFromError(e){return Rc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?bi._fromTokenResponse(t,r):null}};Ai.PROVIDER_ID="phone";Ai.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function $i(n,e){return e?Yt(e):(F(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class df extends Hs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return er(e,this._buildIdpRequest())}_linkToIdToken(e,t){return er(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return er(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function c1(n){return Mw(n.auth,new df(n),n.bypassAuthState)}function u1(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),Ow(t,new df(n),n.bypassAuthState)}async function l1(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),nf(t,new df(n),n.bypassAuthState)}/**
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
 */class Qw{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return c1;case"linkViaPopup":case"linkViaRedirect":return l1;case"reauthViaPopup":case"reauthViaRedirect":return u1;default:ht(this.auth,"internal-error")}}resolve(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const h1=new Sa(2e3,1e4);async function d1(n,e,t){const r=Ye(n);Ks(n,e,ar);const i=$i(r,t);return new Wn(r,"signInViaPopup",e,i).executeNotNull()}async function f1(n,e,t){const r=ie(n);Ks(r.auth,e,ar);const i=$i(r.auth,t);return new Wn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function p1(n,e,t){const r=ie(n);Ks(r.auth,e,ar);const i=$i(r.auth,t);return new Wn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Wn extends Qw{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Wn.currentPopupAction&&Wn.currentPopupAction.cancel(),Wn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){mn(this.filter.length===1,"Popup operations only handle one event");const e=Aa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(_t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,h1.get())};e()}}Wn.currentPopupAction=null;/**
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
 */const m1="pendingRedirect",Mo=new Map;class g1 extends Qw{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Mo.get(this.auth._key());if(!e){try{const r=await y1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Mo.set(this.auth._key(),e)}return this.bypassAuthState||Mo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function y1(n,e){const t=Jw(e),r=Yw(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function ff(n,e){return Yw(n)._set(Jw(e),"true")}function v1(){Mo.clear()}function pf(n,e){Mo.set(n._key(),e)}function Yw(n){return Yt(n._redirectPersistence)}function Jw(n){return Ii(m1,n.config.apiKey,n.name)}/**
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
 */function w1(n,e,t){return _1(n,e,t)}async function _1(n,e,t){const r=Ye(n);Ks(n,e,ar),await r._initializationPromise;const i=$i(r,t);return await ff(i,r),i._openRedirect(r,e,"signInViaRedirect")}function I1(n,e,t){return b1(n,e,t)}async function b1(n,e,t){const r=ie(n);Ks(r.auth,e,ar),await r.auth._initializationPromise;const i=$i(r.auth,t);await ff(i,r.auth);const s=await Xw(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function E1(n,e,t){return T1(n,e,t)}async function T1(n,e,t){const r=ie(n);Ks(r.auth,e,ar),await r.auth._initializationPromise;const i=$i(r.auth,t);await Vu(!1,r,e.providerId),await ff(i,r.auth);const s=await Xw(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function S1(n,e){return await Ye(n)._initializationPromise,Ku(n,e,!1)}async function Ku(n,e,t=!1){const r=Ye(n),i=$i(r,e),o=await new g1(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Xw(n){const e=Aa(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
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
 */const C1=10*60*1e3;class Zw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!k1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!e_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(_t(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=C1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qm(e))}saveEventToCache(e){this.cachedEventUids.add(Qm(e)),this.lastProcessedEventTime=Date.now()}}function Qm(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function e_({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function k1(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return e_(n);default:return!1}}/**
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
 */async function t_(n,e={}){return st(n,"GET","/v1/projects",e)}/**
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
 */const A1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,R1=/^https?/;async function x1(n){if(n.config.emulator)return;const{authorizedDomains:e}=await t_(n);for(const t of e)try{if(N1(t))return}catch{}ht(n,"unauthorized-domain")}function N1(n){const e=ta(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!R1.test(t))return!1;if(A1.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const D1=new Sa(3e4,6e4);function Ym(){const n=Ze().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function P1(n){return new Promise((e,t)=>{var r,i,s;function o(){Ym(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ym(),t(_t(n,"network-request-failed"))},timeout:D1.get()})}if(!((i=(r=Ze().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ze().gapi)===null||s===void 0)&&s.load)o();else{const a=Cw("iframefcb");return Ze()[a]=()=>{gapi.load?o():t(_t(n,"network-request-failed"))},tf(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw xc=null,e})}let xc=null;function O1(n){return xc=xc||P1(n),xc}/**
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
 */const M1=new Sa(5e3,15e3),L1="__/auth/iframe",F1="emulator/auth/iframe",U1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},V1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function B1(n){const e=n.config;F(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Zd(e,F1):`https://${n.config.authDomain}/${L1}`,r={apiKey:e.apiKey,appName:n.name,v:jr},i=V1.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${zs(r).slice(1)}`}async function $1(n){const e=await O1(n),t=Ze().gapi;return F(t,n,"internal-error"),e.open({where:document.body,url:B1(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:U1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=_t(n,"network-request-failed"),a=Ze().setTimeout(()=>{s(o)},M1.get());function c(){Ze().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const q1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},j1=500,z1=600,K1="_blank",G1="http://localhost";class Jm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function H1(n,e,t,r=j1,i=z1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},q1),{width:r.toString(),height:i.toString(),top:s,left:o}),u=je().toLowerCase();t&&(a=vw(u)?K1:t),yw(u)&&(e=e||G1,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(Ik(u)&&a!=="_self")return W1(e||"",a),new Jm(null);const h=window.open(e||"",a,l);F(h,n,"popup-blocked");try{h.focus()}catch{}return new Jm(h)}function W1(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Q1="__/auth/handler",Y1="emulator/auth/handler",J1=encodeURIComponent("fac");async function xh(n,e,t,r,i,s){F(n.config.authDomain,n,"auth-domain-config-required"),F(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:jr,eventId:i};if(e instanceof ar){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",qS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(s||{}))o[l]=h}if(e instanceof Ws){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await n._getAppCheckToken(),u=c?`#${J1}=${encodeURIComponent(c)}`:"";return`${X1(n)}?${zs(a).slice(1)}${u}`}function X1({config:n}){return n.emulator?Zd(n,Y1):`https://${n.authDomain}/${Q1}`}/**
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
 */const Hl="webStorageSupport";class Z1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pr,this._completeRedirectFn=Ku,this._overrideRedirectResult=pf}async _openPopup(e,t,r,i){var s;mn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await xh(e,t,r,ta(),i);return H1(e,o,Aa())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await xh(e,t,r,ta(),i);return OA(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(mn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await $1(e),r=new Zw(e);return t.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Hl,{type:Hl},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Hl];o!==void 0&&t(!!o),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=x1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return bw()||ef()||Gs()}}const n_=Z1;class eR{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Nn("unexpected MultiFactorSessionType")}}}class mf extends eR{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new mf(e)}_finalizeEnroll(e,t,r){return CA(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return zA(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class r_{constructor(){}static assertion(e){return mf._fromCredential(e)}}r_.FACTOR_ID="phone";var Xm="@firebase/auth",Zm="0.23.2";/**
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
 */class tR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function nR(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function rR(n){Nr(new Bn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ew(n)},u=new xk(r,i,s,c);return Dk(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Nr(new Bn("auth-internal",e=>{const t=Ye(e.getProvider("auth").getImmediate());return(r=>new tR(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ln(Xm,Zm,nR(n)),Ln(Xm,Zm,"esm2017")}/**
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
 */const iR=5*60,sR=Qv("authIdTokenMaxAge")||iR;let eg=null;const oR=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>sR)return;const i=t==null?void 0:t.token;eg!==i&&(eg=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ri(n=rw()){const e=Mu(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Nk(n,{popupRedirectResolver:n_,persistence:[Ss,$u,Pr]}),r=Qv("authTokenSyncURL");if(r){const s=oR(r);bA(t,s,()=>s(t.currentUser)),IA(t,o=>s(o))}const i=DS("auth");return i&&Aw(t,`http://${i}`),t}rR("Browser");/*!
  * vue-router v4.2.0
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ts=typeof window<"u";function aR(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Ae=Object.assign;function Wl(n,e){const t={};for(const r in e){const i=e[r];t[r]=gn(i)?i.map(n):n(i)}return t}const Lo=()=>{},gn=Array.isArray,cR=/\/$/,uR=n=>n.replace(cR,"");function Ql(n,e,t="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=n(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=fR(r??e,t),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function lR(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function tg(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function hR(n,e,t){const r=e.matched.length-1,i=t.matched.length-1;return r>-1&&r===i&&Cs(e.matched[r],t.matched[i])&&i_(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Cs(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function i_(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!dR(n[t],e[t]))return!1;return!0}function dR(n,e){return gn(n)?ng(n,e):gn(e)?ng(e,n):n===e}function ng(n,e){return gn(e)?n.length===e.length&&n.every((t,r)=>t===e[r]):n.length===1&&n[0]===e}function fR(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),r=n.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=t.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var sa;(function(n){n.pop="pop",n.push="push"})(sa||(sa={}));var Fo;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Fo||(Fo={}));function pR(n){if(!n)if(ts){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),uR(n)}const mR=/^[^#]+#/;function gR(n,e){return n.replace(mR,"#")+e}function yR(n,e){const t=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:e.behavior,left:r.left-t.left-(e.left||0),top:r.top-t.top-(e.top||0)}}const Gu=()=>({left:window.pageXOffset,top:window.pageYOffset});function vR(n){let e;if("el"in n){const t=n.el,r=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;e=yR(i,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function rg(n,e){return(history.state?history.state.position-e:-1)+n}const Nh=new Map;function wR(n,e){Nh.set(n,e)}function _R(n){const e=Nh.get(n);return Nh.delete(n),e}let IR=()=>location.protocol+"//"+location.host;function s_(n,e){const{pathname:t,search:r,hash:i}=e,s=n.indexOf("#");if(s>-1){let a=i.includes(n.slice(s))?n.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),tg(c,"")}return tg(t,n)+r+i}function bR(n,e,t,r){let i=[],s=[],o=null;const a=({state:d})=>{const f=s_(n,location),m=t.value,p=e.value;let y=0;if(d){if(t.value=f,e.value=d,o&&o===m){o=null;return}y=p?d.position-p.position:0}else r(f);i.forEach(_=>{_(t.value,m,{delta:y,type:sa.pop,direction:y?y>0?Fo.forward:Fo.back:Fo.unknown})})};function c(){o=t.value}function u(d){i.push(d);const f=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return s.push(f),f}function l(){const{history:d}=window;d.state&&d.replaceState(Ae({},d.state,{scroll:Gu()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:c,listen:u,destroy:h}}function ig(n,e,t,r=!1,i=!1){return{back:n,current:e,forward:t,replaced:r,position:window.history.length,scroll:i?Gu():null}}function ER(n){const{history:e,location:t}=window,r={value:s_(n,t)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,u,l){const h=n.indexOf("#"),d=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+c:IR()+n+c;try{e[l?"replaceState":"pushState"](u,"",d),i.value=u}catch(f){console.error(f),t[l?"replace":"assign"](d)}}function o(c,u){const l=Ae({},e.state,ig(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});s(c,l,!0),r.value=c}function a(c,u){const l=Ae({},i.value,e.state,{forward:c,scroll:Gu()});s(l.current,l,!0);const h=Ae({},ig(r.value,c,null),{position:l.position+1},u);s(c,h,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function TR(n){n=pR(n);const e=ER(n),t=bR(n,e.state,e.location,e.replace);function r(s,o=!0){o||t.pauseListeners(),history.go(s)}const i=Ae({location:"",base:n,go:r,createHref:gR.bind(null,n)},e,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function SR(n){return typeof n=="string"||n&&typeof n=="object"}function o_(n){return typeof n=="string"||typeof n=="symbol"}const fr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},a_=Symbol("");var sg;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(sg||(sg={}));function ks(n,e){return Ae(new Error,{type:n,[a_]:!0},e)}function zn(n,e){return n instanceof Error&&a_ in n&&(e==null||!!(n.type&e))}const og="[^/]+?",CR={sensitive:!1,strict:!1,start:!0,end:!0},kR=/[.+*?^${}()[\]/\\]/g;function AR(n,e){const t=Ae({},CR,e),r=[];let i=t.start?"^":"";const s=[];for(const u of n){const l=u.length?[]:[90];t.strict&&!u.length&&(i+="/");for(let h=0;h<u.length;h++){const d=u[h];let f=40+(t.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(kR,"\\$&"),f+=40;else if(d.type===1){const{value:m,repeatable:p,optional:y,regexp:_}=d;s.push({name:m,repeatable:p,optional:y});const S=_||og;if(S!==og){f+=10;try{new RegExp(`(${S})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${m}" (${S}): `+N.message)}}let L=p?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;h||(L=y&&u.length<2?`(?:/${L})`:"/"+L),y&&(L+="?"),i+=L,f+=20,y&&(f+=-8),p&&(f+=-20),S===".*"&&(f+=-50)}l.push(f)}r.push(l)}if(t.strict&&t.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}t.strict||(i+="/?"),t.end?i+="$":t.strict&&(i+="(?:/|$)");const o=new RegExp(i,t.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const f=l[d]||"",m=s[d-1];h[m.name]=f&&m.repeatable?f.split("/"):f}return h}function c(u){let l="",h=!1;for(const d of n){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const f of d)if(f.type===0)l+=f.value;else if(f.type===1){const{value:m,repeatable:p,optional:y}=f,_=m in u?u[m]:"";if(gn(_)&&!p)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const S=gn(_)?_.join("/"):_;if(!S)if(y)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);l+=S}}return l||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function RR(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=e[t]-n[t];if(r)return r;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function xR(n,e){let t=0;const r=n.score,i=e.score;for(;t<r.length&&t<i.length;){const s=RR(r[t],i[t]);if(s)return s;t++}if(Math.abs(i.length-r.length)===1){if(ag(r))return 1;if(ag(i))return-1}return i.length-r.length}function ag(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const NR={type:0,value:""},DR=/[a-zA-Z0-9_]/;function PR(n){if(!n)return[[]];if(n==="/")return[[NR]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(f){throw new Error(`ERR (${t})/"${u}": ${f}`)}let t=0,r=t;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,u="",l="";function h(){u&&(t===0?s.push({type:0,value:u}):t===1||t===2||t===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),t=1):d();break;case 4:d(),t=r;break;case 1:c==="("?t=2:DR.test(c)?d():(h(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:t=3:l+=c;break;case 3:h(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function OR(n,e,t){const r=AR(PR(n.path),t),i=Ae(r,{record:n,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function MR(n,e){const t=[],r=new Map;e=lg({strict:!1,end:!0,sensitive:!1},e);function i(l){return r.get(l)}function s(l,h,d){const f=!d,m=LR(l);m.aliasOf=d&&d.record;const p=lg(e,l),y=[m];if("alias"in l){const L=typeof l.alias=="string"?[l.alias]:l.alias;for(const N of L)y.push(Ae({},m,{components:d?d.record.components:m.components,path:N,aliasOf:d?d.record:m}))}let _,S;for(const L of y){const{path:N}=L;if(h&&N[0]!=="/"){const he=h.record.path,x=he[he.length-1]==="/"?"":"/";L.path=h.record.path+(N&&x+N)}if(_=OR(L,h,p),d?d.alias.push(_):(S=S||_,S!==_&&S.alias.push(_),f&&l.name&&!ug(_)&&o(l.name)),m.children){const he=m.children;for(let x=0;x<he.length;x++)s(he[x],_,d&&d.children[x])}d=d||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&c(_)}return S?()=>{o(S)}:Lo}function o(l){if(o_(l)){const h=r.get(l);h&&(r.delete(l),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(l);h>-1&&(t.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return t}function c(l){let h=0;for(;h<t.length&&xR(l,t[h])>=0&&(l.record.path!==t[h].record.path||!c_(l,t[h]));)h++;t.splice(h,0,l),l.record.name&&!ug(l)&&r.set(l.record.name,l)}function u(l,h){let d,f={},m,p;if("name"in l&&l.name){if(d=r.get(l.name),!d)throw ks(1,{location:l});p=d.record.name,f=Ae(cg(h.params,d.keys.filter(S=>!S.optional).map(S=>S.name)),l.params&&cg(l.params,d.keys.map(S=>S.name))),m=d.stringify(f)}else if("path"in l)m=l.path,d=t.find(S=>S.re.test(m)),d&&(f=d.parse(m),p=d.record.name);else{if(d=h.name?r.get(h.name):t.find(S=>S.re.test(h.path)),!d)throw ks(1,{location:l,currentLocation:h});p=d.record.name,f=Ae({},h.params,l.params),m=d.stringify(f)}const y=[];let _=d;for(;_;)y.unshift(_.record),_=_.parent;return{name:p,path:m,params:f,matched:y,meta:UR(y)}}return n.forEach(l=>s(l)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function cg(n,e){const t={};for(const r of e)r in n&&(t[r]=n[r]);return t}function LR(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:FR(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function FR(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const r in n.components)e[r]=typeof t=="boolean"?t:t[r];return e}function ug(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function UR(n){return n.reduce((e,t)=>Ae(e,t.meta),{})}function lg(n,e){const t={};for(const r in n)t[r]=r in e?e[r]:n[r];return t}function c_(n,e){return e.children.some(t=>t===n||c_(n,t))}const u_=/#/g,VR=/&/g,BR=/\//g,$R=/=/g,qR=/\?/g,l_=/\+/g,jR=/%5B/g,zR=/%5D/g,h_=/%5E/g,KR=/%60/g,d_=/%7B/g,GR=/%7C/g,f_=/%7D/g,HR=/%20/g;function gf(n){return encodeURI(""+n).replace(GR,"|").replace(jR,"[").replace(zR,"]")}function WR(n){return gf(n).replace(d_,"{").replace(f_,"}").replace(h_,"^")}function Dh(n){return gf(n).replace(l_,"%2B").replace(HR,"+").replace(u_,"%23").replace(VR,"%26").replace(KR,"`").replace(d_,"{").replace(f_,"}").replace(h_,"^")}function QR(n){return Dh(n).replace($R,"%3D")}function YR(n){return gf(n).replace(u_,"%23").replace(qR,"%3F")}function JR(n){return n==null?"":YR(n).replace(BR,"%2F")}function Zc(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function XR(n){const e={};if(n===""||n==="?")return e;const r=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(l_," "),o=s.indexOf("="),a=Zc(o<0?s:s.slice(0,o)),c=o<0?null:Zc(s.slice(o+1));if(a in e){let u=e[a];gn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function hg(n){let e="";for(let t in n){const r=n[t];if(t=QR(t),r==null){r!==void 0&&(e+=(e.length?"&":"")+t);continue}(gn(r)?r.map(s=>s&&Dh(s)):[r&&Dh(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function ZR(n){const e={};for(const t in n){const r=n[t];r!==void 0&&(e[t]=gn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const ex=Symbol(""),dg=Symbol(""),Hu=Symbol(""),p_=Symbol(""),Ph=Symbol("");function ho(){let n=[];function e(r){return n.push(r),()=>{const i=n.indexOf(r);i>-1&&n.splice(i,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function vr(n,e,t,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ks(4,{from:t,to:e})):h instanceof Error?a(h):SR(h)?a(ks(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},u=n.call(r&&r.instances[i],e,t,c);let l=Promise.resolve(u);n.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Yl(n,e,t,r){const i=[];for(const s of n)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(tx(a)){const u=(a.__vccOpts||a)[e];u&&i.push(vr(u,t,r,s,o))}else{let c=a();i.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const l=aR(u)?u.default:u;s.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&vr(d,t,r,s,o)()}))}}return i}function tx(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function fg(n){const e=Mn(Hu),t=Mn(p_),r=nn(()=>e.resolve(ls(n.to))),i=nn(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],h=t.matched;if(!l||!h.length)return-1;const d=h.findIndex(Cs.bind(null,l));if(d>-1)return d;const f=pg(c[u-2]);return u>1&&pg(l)===f&&h[h.length-1].path!==f?h.findIndex(Cs.bind(null,c[u-2])):d}),s=nn(()=>i.value>-1&&sx(t.params,r.value.params)),o=nn(()=>i.value>-1&&i.value===t.matched.length-1&&i_(t.params,r.value.params));function a(c={}){return ix(c)?e[ls(n.replace)?"replace":"push"](ls(n.to)).catch(Lo):Promise.resolve()}return{route:r,href:nn(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const nx=Tv({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:fg,setup(n,{slots:e}){const t=Ta(fg(n)),{options:r}=Mn(Hu),i=nn(()=>({[mg(n.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[mg(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:jv("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},s)}}}),rx=nx;function ix(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function sx(n,e){for(const t in e){const r=e[t],i=n[t];if(typeof r=="string"){if(r!==i)return!1}else if(!gn(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function pg(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const mg=(n,e,t)=>n??e??t,ox=Tv({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const r=Mn(Ph),i=nn(()=>n.route||r.value),s=Mn(dg,0),o=nn(()=>{let u=ls(s);const{matched:l}=i.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=nn(()=>i.value.matched[o.value]);Tc(dg,nn(()=>o.value+1)),Tc(ex,a),Tc(Ph,i);const c=ln();return bc(()=>[c.value,a.value,n.name],([u,l,h],[d,f,m])=>{l&&(l.instances[h]=u,f&&f!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),u&&l&&(!f||!Cs(l,f)||!d)&&(l.enterCallbacks[h]||[]).forEach(p=>p(u))},{flush:"post"}),()=>{const u=i.value,l=n.name,h=a.value,d=h&&h.components[l];if(!d)return gg(t.default,{Component:d,route:u});const f=h.props[l],m=f?f===!0?u.params:typeof f=="function"?f(u):f:null,y=jv(d,Ae({},m,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return gg(t.default,{Component:y,route:u})||y}}});function gg(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const ax=ox;function cx(n){const e=MR(n.routes,n),t=n.parseQuery||XR,r=n.stringifyQuery||hg,i=n.history,s=ho(),o=ho(),a=ho(),c=jE(fr);let u=fr;ts&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Wl.bind(null,k=>""+k),h=Wl.bind(null,JR),d=Wl.bind(null,Zc);function f(k,G){let V,Q;return o_(k)?(V=e.getRecordMatcher(k),Q=G):Q=k,e.addRoute(Q,V)}function m(k){const G=e.getRecordMatcher(k);G&&e.removeRoute(G)}function p(){return e.getRoutes().map(k=>k.record)}function y(k){return!!e.getRecordMatcher(k)}function _(k,G){if(G=Ae({},G||c.value),typeof k=="string"){const I=Ql(t,k,G.path),C=e.resolve({path:I.path},G),A=i.createHref(I.fullPath);return Ae(I,C,{params:d(C.params),hash:Zc(I.hash),redirectedFrom:void 0,href:A})}let V;if("path"in k)V=Ae({},k,{path:Ql(t,k.path,G.path).path});else{const I=Ae({},k.params);for(const C in I)I[C]==null&&delete I[C];V=Ae({},k,{params:h(I)}),G.params=h(G.params)}const Q=e.resolve(V,G),oe=k.hash||"";Q.params=l(d(Q.params));const g=lR(r,Ae({},k,{hash:WR(oe),path:Q.path})),v=i.createHref(g);return Ae({fullPath:g,hash:oe,query:r===hg?ZR(k.query):k.query||{}},Q,{redirectedFrom:void 0,href:v})}function S(k){return typeof k=="string"?Ql(t,k,c.value.path):Ae({},k)}function L(k,G){if(u!==k)return ks(8,{from:G,to:k})}function N(k){return Ee(k)}function he(k){return N(Ae(S(k),{replace:!0}))}function x(k){const G=k.matched[k.matched.length-1];if(G&&G.redirect){const{redirect:V}=G;let Q=typeof V=="function"?V(k):V;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=S(Q):{path:Q},Q.params={}),Ae({query:k.query,hash:k.hash,params:"path"in Q?{}:k.params},Q)}}function Ee(k,G){const V=u=_(k),Q=c.value,oe=k.state,g=k.force,v=k.replace===!0,I=x(V);if(I)return Ee(Ae(S(I),{state:typeof I=="object"?Ae({},oe,I.state):oe,force:g,replace:v}),G||V);const C=V;C.redirectedFrom=G;let A;return!g&&hR(r,Q,V)&&(A=ks(16,{to:C,from:Q}),ot(Q,Q,!0,!1)),(A?Promise.resolve(A):K(C,Q)).catch(O=>zn(O)?zn(O,2)?O:Dt(O):se(O,C,Q)).then(O=>{if(O){if(zn(O,2))return Ee(Ae({replace:v},S(O.to),{state:typeof O.to=="object"?Ae({},oe,O.to.state):oe,force:g}),G||C)}else O=D(C,Q,!0,v,oe);return w(C,Q,O),O})}function ae(k,G){const V=L(k,G);return V?Promise.reject(V):Promise.resolve()}function Et(k){const G=en.values().next().value;return G&&typeof G.runWithContext=="function"?G.runWithContext(k):k()}function K(k,G){let V;const[Q,oe,g]=ux(k,G);V=Yl(Q.reverse(),"beforeRouteLeave",k,G);for(const I of Q)I.leaveGuards.forEach(C=>{V.push(vr(C,k,G))});const v=ae.bind(null,k,G);return V.push(v),De(V).then(()=>{V=[];for(const I of s.list())V.push(vr(I,k,G));return V.push(v),De(V)}).then(()=>{V=Yl(oe,"beforeRouteUpdate",k,G);for(const I of oe)I.updateGuards.forEach(C=>{V.push(vr(C,k,G))});return V.push(v),De(V)}).then(()=>{V=[];for(const I of k.matched)if(I.beforeEnter&&!G.matched.includes(I))if(gn(I.beforeEnter))for(const C of I.beforeEnter)V.push(vr(C,k,G));else V.push(vr(I.beforeEnter,k,G));return V.push(v),De(V)}).then(()=>(k.matched.forEach(I=>I.enterCallbacks={}),V=Yl(g,"beforeRouteEnter",k,G),V.push(v),De(V))).then(()=>{V=[];for(const I of o.list())V.push(vr(I,k,G));return V.push(v),De(V)}).catch(I=>zn(I,8)?I:Promise.reject(I))}function w(k,G,V){for(const Q of a.list())Et(()=>Q(k,G,V))}function D(k,G,V,Q,oe){const g=L(k,G);if(g)return g;const v=G===fr,I=ts?history.state:{};V&&(Q||v?i.replace(k.fullPath,Ae({scroll:v&&I&&I.scroll},oe)):i.push(k.fullPath,oe)),c.value=k,ot(k,G,V,v),Dt()}let b;function B(){b||(b=i.listen((k,G,V)=>{if(!Tt.listening)return;const Q=_(k),oe=x(Q);if(oe){Ee(Ae(oe,{replace:!0}),Q).catch(Lo);return}u=Q;const g=c.value;ts&&wR(rg(g.fullPath,V.delta),Gu()),K(Q,g).catch(v=>zn(v,12)?v:zn(v,2)?(Ee(v.to,Q).then(I=>{zn(I,20)&&!V.delta&&V.type===sa.pop&&i.go(-1,!1)}).catch(Lo),Promise.reject()):(V.delta&&i.go(-V.delta,!1),se(v,Q,g))).then(v=>{v=v||D(Q,g,!1),v&&(V.delta&&!zn(v,8)?i.go(-V.delta,!1):V.type===sa.pop&&zn(v,20)&&i.go(-1,!1)),w(Q,g,v)}).catch(Lo)}))}let ee=ho(),Y=ho(),de;function se(k,G,V){Dt(k);const Q=Y.list();return Q.length?Q.forEach(oe=>oe(k,G,V)):console.error(k),Promise.reject(k)}function Bt(){return de&&c.value!==fr?Promise.resolve():new Promise((k,G)=>{ee.add([k,G])})}function Dt(k){return de||(de=!k,B(),ee.list().forEach(([G,V])=>k?V(k):G()),ee.reset()),k}function ot(k,G,V,Q){const{scrollBehavior:oe}=n;if(!ts||!oe)return Promise.resolve();const g=!V&&_R(rg(k.fullPath,0))||(Q||!V)&&history.state&&history.state.scroll||null;return gv().then(()=>oe(k,G,g)).then(v=>v&&vR(v)).catch(v=>se(v,k,G))}const Je=k=>i.go(k);let Zt;const en=new Set,Tt={currentRoute:c,listening:!0,addRoute:f,removeRoute:m,hasRoute:y,getRoutes:p,resolve:_,options:n,push:N,replace:he,go:Je,back:()=>Je(-1),forward:()=>Je(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Y.add,isReady:Bt,install(k){const G=this;k.component("RouterLink",rx),k.component("RouterView",ax),k.config.globalProperties.$router=G,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>ls(c)}),ts&&!Zt&&c.value===fr&&(Zt=!0,N(i.location).catch(oe=>{}));const V={};for(const oe in fr)V[oe]=nn(()=>c.value[oe]);k.provide(Hu,G),k.provide(p_,Ta(V)),k.provide(Ph,c);const Q=k.unmount;en.add(k),k.unmount=function(){en.delete(k),en.size<1&&(u=fr,b&&b(),b=null,c.value=fr,Zt=!1,de=!1),Q()}}};function De(k){return k.reduce((G,V)=>G.then(()=>Et(V)),Promise.resolve())}return Tt}function ux(n,e){const t=[],r=[],i=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(u=>Cs(u,a))?r.push(a):t.push(a));const c=n.matched[o];c&&(e.matched.find(u=>Cs(u,c))||i.push(c))}return[t,r,i]}function yf(){return Mn(Hu)}const lx={class:"navbar"},hx={class:"navImg"},dx=X("img",{src:ES},null,-1),fx={class:"navItem"},px=X("a",{href:"/ticharlez34/#stream"},"Stream",-1),mx=X("p",{hidden:"",id:"character2"},null,-1),gx={__name:"NavBar",setup(n){const e=yf(),t=ln(!1);let r;kv(()=>{r=Ri(),$w(r,s=>{s?(t.value=!0,document.getElementById("login").style.display="none",document.getElementById("character2").innerHTML=s.email):(t.value=!1,document.getElementById("login").style.display="initial")})});const i=()=>{EA(r).then(()=>{e.push("/ticharlez34/")})};return(s,o)=>{const a=xv("router-link");return Te(),ke("nav",lx,[X("div",hx,[nt(a,{to:"/ticharlez34/"},{default:Ic(()=>[dx]),_:1})]),X("div",fx,[px,nt(a,{id:"twitch",to:"/ticharlez34/twitch"},{default:Ic(()=>[Ci("Personnage")]),_:1}),nt(a,{id:"login",to:"/ticharlez34/login"},{default:Ic(()=>[Ci("LogIn")]),_:1}),t.value?(Te(),ke("a",{key:0,href:"#",onClick:i},"Sign out")):bn("",!0),mx])])}}},yx={class:"wrapper"},vx={__name:"App",setup(n){return(e,t)=>{const r=xv("router-view");return Te(),ke(et,null,[X("header",null,[X("div",yx,[nt(gx)])]),nt(r)],64)}}},wx="/ticharlez34/assets/profil-8d564394.png",_x="/ticharlez34/assets/csgologo-e581f2e9.png",Ix="/ticharlez34/assets/rotmg_logo-cb73e52c.png",bx="/ticharlez34/assets/LoL-20730d7e.png",m_=(n,e)=>{const t=n.__vccOpts||n;for(const[r,i]of e)t[r]=i;return t},Ex={},Tx=qd('<div class="container profilContainer"><div class="profilText"><h2>1,2,3 moi c&#39;est Charles. <br> Venez me voir streamer sur Twitch avec ce lien! <br> <a target="_blank" href="https://www.twitch.tv/ticharlez34">https://www.twitch.tv/ticharlez34</a></h2></div><div class="profil"><img src="'+wx+'"></div></div>',1),Sx=X("div",{class:"iframe mt-8"},[X("h2",{class:"center"},"Stream"),X("div",{id:"stream",class:"center"},[X("iframe",{class:"set",src:"https://player.twitch.tv/?channel=ticharlez34&parent=shaxten.github.io",frameborder:"0",allowfullscreen:"",height:"478",width:"820"},`
            `)])],-1),Cx=qd('<div class="container mt-8 mb-8"><div><h2 class="center">Here some main games I play</h2></div><div id="games" class="games"><div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="'+_x+'" alt="Avatar"></div><div class="flip-card-back color1"><h3>CS GO</h3><p>Most stream game for now. I do mostly short matches. <br>My rank is between gold nova 4 and mg2.</p></div></div></div><div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="'+Ix+'" alt="Avatar"></div><div class="flip-card-back color1"><h3>ROTMG</h3><p>Chill games when i want to take a break from FPS. Been playing for 2 months</p></div></div></div><div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="'+bx+'" alt="Avatar"></div><div class="flip-card-back color1"><h3>League of Legend</h3><p>When I need to lost all my mental sanity this is the perfect games for that.<br> My current rank is Gold</p></div></div></div></div></div><div style="background-color:#af5191;color:white;font-weight:500;padding:0.5rem;"><p class="center">Tous les droits réservé à Shaxto the potato 2023</p></div>',2);function kx(n,e){return Te(),ke(et,null,[Tx,Sx,Cx],64)}const Ax=m_(Ex,[["render",kx]]),Rx={id:"form"},xx={key:0},Nx={id:"form"},Dx=X("h2",{style:{"margin-bottom":"2rem"}},[Ci("Pour le email veuillez utiliser votre nom de twitch suivi de @hotmail.com "),X("br"),Ci(" sinon vous ne verez pas votre personnage!")],-1),Px={__name:"aboutLayout",setup(n){const e=yf(),t=ln(""),r=ln(""),i=ln(),s=()=>{af(Ri(),t.value,r.value).then(a=>{console.log("Successfully sign in!"),e.push("/ticharlez34/")}).catch(a=>{switch(console.log(a.code),a.code){case"auth/invalid-email":i.value="Invalid email";break;case"auth/user-not-found":i.value="No account whit that email was found";break;case"auth/wrong-password":i.value="Incorrect password";break;default:i.value="Email or password was incorrect";break}})},o=()=>{of(Ri(),t.value,r.value).then(a=>{console.log("Successfully registered!"),e.push("/ticharlez34/")}).catch(a=>{console.log(a.code),alert(a.message)})};return(a,c)=>(Te(),ke(et,null,[X("div",Rx,[X("p",null,[Ir(X("input",{type:"email",placeholder:"email","onUpdate:modelValue":c[0]||(c[0]=u=>t.value=u)},null,512),[[br,t.value]])]),X("p",null,[Ir(X("input",{type:"password",placeholder:"Password","onUpdate:modelValue":c[1]||(c[1]=u=>r.value=u)},null,512),[[br,r.value]])]),i.value?(Te(),ke("p",xx,xd(i.value),1)):bn("",!0),X("button",{onClick:s},"Sign in")]),X("form",{onSubmit:c[4]||(c[4]=zv((...u)=>a.onSubmit&&a.onSubmit(...u),["prevent"]))},[X("div",Nx,[Dx,X("p",null,[Ir(X("input",{type:"email",placeholder:"email","onUpdate:modelValue":c[2]||(c[2]=u=>t.value=u)},null,512),[[br,t.value]])]),X("p",null,[Ir(X("input",{type:"password",placeholder:"Password","onUpdate:modelValue":c[3]||(c[3]=u=>r.value=u)},null,512),[[br,r.value]])]),X("button",{type:"submit",onClick:o},"Create account")])],32)],64))}},Ox={id:"form"},Mx=X("h2",{style:{"margin-bottom":"2rem"}},"Connectez-vous",-1),Lx={key:0},Fx={id:"form"},Ux=X("h2",{style:{"margin-bottom":"2rem"}},[Ci("Pour le email veuillez utiliser votre nom de twitch suivi de @hotmail.com "),X("br"),Ci(" sinon vous ne verez pas votre personnage!")],-1),Vx={__name:"login",setup(n){const e=yf(),t=ln(""),r=ln(""),i=ln(""),s=ln(""),o=ln(),a=()=>{af(Ri(),t.value,r.value).then(u=>{console.log("Successfully sign in!"),e.push("/ticharlez34/")}).catch(u=>{switch(console.log(u.code),u.code){case"auth/invalid-email":o.value="Invalid email";break;case"auth/user-not-found":o.value="No account whit that email was found";break;case"auth/wrong-password":o.value="Incorrect password";break;default:o.value="Email or password was incorrect";break}})},c=()=>{of(Ri(),i.value,s.value).then(u=>{console.log("Successfully registered!"),e.push("/ticharlez34/")}).catch(u=>{console.log(u.code),alert(u.message)})};return(u,l)=>(Te(),ke(et,null,[X("div",Ox,[Mx,X("p",null,[Ir(X("input",{type:"email",placeholder:"email","onUpdate:modelValue":l[0]||(l[0]=h=>t.value=h)},null,512),[[br,t.value]])]),X("p",null,[Ir(X("input",{type:"password",placeholder:"Password","onUpdate:modelValue":l[1]||(l[1]=h=>r.value=h)},null,512),[[br,r.value]])]),o.value?(Te(),ke("p",Lx,xd(o.value),1)):bn("",!0),X("button",{onClick:a},"Sign in")]),X("form",{onSubmit:l[4]||(l[4]=zv((...h)=>u.onSubmit&&u.onSubmit(...h),["prevent"]))},[X("div",Fx,[Ux,X("p",null,[Ir(X("input",{type:"email",placeholder:"email","onUpdate:modelValue":l[2]||(l[2]=h=>i.value=h)},null,512),[[br,i.value]])]),X("p",null,[Ir(X("input",{type:"password",placeholder:"Password","onUpdate:modelValue":l[3]||(l[3]=h=>s.value=h)},null,512),[[br,s.value]])]),X("button",{type:"submit",onClick:c},"Create account")])],32)],64))}};var Bx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},H,vf=vf||{},le=Bx||self;function eu(){}function Wu(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function xa(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function $x(n){return Object.prototype.hasOwnProperty.call(n,Jl)&&n[Jl]||(n[Jl]=++qx)}var Jl="closure_uid_"+(1e9*Math.random()>>>0),qx=0;function jx(n,e,t){return n.call.apply(n.bind,arguments)}function zx(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function xt(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?xt=jx:xt=zx,xt.apply(null,arguments)}function ac(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function ft(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Kr(){this.s=this.s,this.o=this.o}var Kx=0;Kr.prototype.s=!1;Kr.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),Kx!=0)&&$x(this)};Kr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const g_=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function wf(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function yg(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(Wu(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function Nt(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Nt.prototype.h=function(){this.defaultPrevented=!0};var Gx=function(){if(!le.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{le.addEventListener("test",eu,e),le.removeEventListener("test",eu,e)}catch{}return n}();function tu(n){return/^[\s\xa0]*$/.test(n)}var vg=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function Xl(n,e){return n<e?-1:n>e?1:0}function Qu(){var n=le.navigator;return n&&(n=n.userAgent)?n:""}function xn(n){return Qu().indexOf(n)!=-1}function _f(n){return _f[" "](n),n}_f[" "]=eu;function y_(n,e,t){return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Hx=xn("Opera"),As=xn("Trident")||xn("MSIE"),v_=xn("Edge"),Oh=v_||As,w_=xn("Gecko")&&!(Qu().toLowerCase().indexOf("webkit")!=-1&&!xn("Edge"))&&!(xn("Trident")||xn("MSIE"))&&!xn("Edge"),Wx=Qu().toLowerCase().indexOf("webkit")!=-1&&!xn("Edge");function __(){var n=le.document;return n?n.documentMode:void 0}var nu;e:{var Zl="",eh=function(){var n=Qu();if(w_)return/rv:([^\);]+)(\)|;)/.exec(n);if(v_)return/Edge\/([\d\.]+)/.exec(n);if(As)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Wx)return/WebKit\/(\S+)/.exec(n);if(Hx)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(eh&&(Zl=eh?eh[1]:""),As){var th=__();if(th!=null&&th>parseFloat(Zl)){nu=String(th);break e}}nu=Zl}var Qx={};function Yx(){return y_(Qx,9,function(){let n=0;const e=vg(String(nu)).split("."),t=vg("9").split("."),r=Math.max(e.length,t.length);for(let o=0;n==0&&o<r;o++){var i=e[o]||"",s=t[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;n=Xl(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Xl(i[2].length==0,s[2].length==0)||Xl(i[2],s[2]),i=i[3],s=s[3]}while(n==0)}return 0<=n})}var Mh;if(le.document&&As){var wg=__();Mh=wg||parseInt(nu,10)||void 0}else Mh=void 0;var Jx=Mh;function oa(n,e){if(Nt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(w_){e:{try{_f(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Xx[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&oa.$.h.call(this)}}ft(oa,Nt);var Xx={2:"touch",3:"pen",4:"mouse"};oa.prototype.h=function(){oa.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Na="closure_listenable_"+(1e6*Math.random()|0),Zx=0;function eN(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=i,this.key=++Zx,this.fa=this.ia=!1}function Yu(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function If(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function I_(n){const e={};for(const t in n)e[t]=n[t];return e}const _g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b_(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<_g.length;s++)t=_g[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function Ju(n){this.src=n,this.g={},this.h=0}Ju.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=Fh(n,e,r,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new eN(e,this.src,s,!!r,i),e.ia=t,n.push(e)),e};function Lh(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=g_(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Yu(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Fh(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==r)return i}return-1}var bf="closure_lm_"+(1e6*Math.random()|0),nh={};function E_(n,e,t,r,i){if(r&&r.once)return S_(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)E_(n,e[s],t,r,i);return null}return t=Sf(t),n&&n[Na]?n.O(e,t,xa(r)?!!r.capture:!!r,i):T_(n,e,t,!1,r,i)}function T_(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=xa(i)?!!i.capture:!!i,a=Tf(n);if(a||(n[bf]=a=new Ju(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=tN(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)Gx||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(k_(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function tN(){function n(t){return e.call(n.src,n.listener,t)}const e=nN;return n}function S_(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)S_(n,e[s],t,r,i);return null}return t=Sf(t),n&&n[Na]?n.P(e,t,xa(r)?!!r.capture:!!r,i):T_(n,e,t,!0,r,i)}function C_(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)C_(n,e[s],t,r,i);else r=xa(r)?!!r.capture:!!r,t=Sf(t),n&&n[Na]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=Fh(s,t,r,i),-1<t&&(Yu(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=Tf(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Fh(e,t,r,i)),(t=-1<n?e[n]:null)&&Ef(t))}function Ef(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[Na])Lh(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(k_(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=Tf(e))?(Lh(t,n),t.h==0&&(t.src=null,e[bf]=null)):Yu(n)}}}function k_(n){return n in nh?nh[n]:nh[n]="on"+n}function nN(n,e){if(n.fa)n=!0;else{e=new oa(e,this);var t=n.listener,r=n.la||n.src;n.ia&&Ef(n),n=t.call(r,e)}return n}function Tf(n){return n=n[bf],n instanceof Ju?n:null}var rh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sf(n){return typeof n=="function"?n:(n[rh]||(n[rh]=function(e){return n.handleEvent(e)}),n[rh])}function dt(){Kr.call(this),this.i=new Ju(this),this.S=this,this.J=null}ft(dt,Kr);dt.prototype[Na]=!0;dt.prototype.removeEventListener=function(n,e,t,r){C_(this,n,e,t,r)};function It(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new Nt(e,n);else if(e instanceof Nt)e.target=e.target||n;else{var i=e;e=new Nt(r,n),b_(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=cc(o,r,!0,e)&&i}if(o=e.g=n,i=cc(o,r,!0,e)&&i,i=cc(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=cc(o,r,!1,e)&&i}dt.prototype.N=function(){if(dt.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)Yu(t[r]);delete n.g[e],n.h--}}this.J=null};dt.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};dt.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function cc(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&Lh(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Cf=le.JSON.stringify;function rN(){var n=x_;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class iN{constructor(){this.h=this.g=null}add(e,t){const r=A_.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var A_=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new sN,n=>n.reset());class sN{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function oN(n){le.setTimeout(()=>{throw n},0)}function R_(n,e){Uh||aN(),Vh||(Uh(),Vh=!0),x_.add(n,e)}var Uh;function aN(){var n=le.Promise.resolve(void 0);Uh=function(){n.then(cN)}}var Vh=!1,x_=new iN;function cN(){for(var n;n=rN();){try{n.h.call(n.g)}catch(t){oN(t)}var e=A_;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Vh=!1}function Xu(n,e){dt.call(this),this.h=n||1,this.g=e||le,this.j=xt(this.qb,this),this.l=Date.now()}ft(Xu,dt);H=Xu.prototype;H.ga=!1;H.T=null;H.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),It(this,"tick"),this.ga&&(kf(this),this.start()))}};H.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function kf(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}H.N=function(){Xu.$.N.call(this),kf(this),delete this.g};function Af(n,e,t){if(typeof n=="function")t&&(n=xt(n,t));else if(n&&typeof n.handleEvent=="function")n=xt(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:le.setTimeout(n,e||0)}function N_(n){n.g=Af(()=>{n.g=null,n.i&&(n.i=!1,N_(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class uN extends Kr{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:N_(this)}N(){super.N(),this.g&&(le.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function aa(n){Kr.call(this),this.h=n,this.g={}}ft(aa,Kr);var Ig=[];function D_(n,e,t,r){Array.isArray(t)||(t&&(Ig[0]=t.toString()),t=Ig);for(var i=0;i<t.length;i++){var s=E_(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function P_(n){If(n.g,function(e,t){this.g.hasOwnProperty(t)&&Ef(e)},n),n.g={}}aa.prototype.N=function(){aa.$.N.call(this),P_(this)};aa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Zu(){this.g=!0}Zu.prototype.Ea=function(){this.g=!1};function lN(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function hN(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function os(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+fN(n,t)+(r?" "+r:"")})}function dN(n,e){n.info(function(){return"TIMEOUT: "+e})}Zu.prototype.info=function(){};function fN(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Cf(t)}catch{return e}}var qi={},bg=null;function el(){return bg=bg||new dt}qi.Ta="serverreachability";function O_(n){Nt.call(this,qi.Ta,n)}ft(O_,Nt);function ca(n){const e=el();It(e,new O_(e))}qi.STAT_EVENT="statevent";function M_(n,e){Nt.call(this,qi.STAT_EVENT,n),this.stat=e}ft(M_,Nt);function Ft(n){const e=el();It(e,new M_(e,n))}qi.Ua="timingevent";function L_(n,e){Nt.call(this,qi.Ua,n),this.size=e}ft(L_,Nt);function Da(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return le.setTimeout(function(){n()},e)}var tl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},F_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Rf(){}Rf.prototype.h=null;function Eg(n){return n.h||(n.h=n.i())}function U_(){}var Pa={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function xf(){Nt.call(this,"d")}ft(xf,Nt);function Nf(){Nt.call(this,"c")}ft(Nf,Nt);var Bh;function nl(){}ft(nl,Rf);nl.prototype.g=function(){return new XMLHttpRequest};nl.prototype.i=function(){return{}};Bh=new nl;function Oa(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new aa(this),this.P=pN,n=Oh?125:void 0,this.V=new Xu(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new V_}function V_(){this.i=null,this.g="",this.h=!1}var pN=45e3,$h={},ru={};H=Oa.prototype;H.setTimeout=function(n){this.P=n};function qh(n,e,t){n.L=1,n.v=il(rr(e)),n.s=t,n.S=!0,B_(n,null)}function B_(n,e){n.G=Date.now(),Ma(n),n.A=rr(n.v);var t=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),W_(t.i,"t",r),n.C=0,t=n.l.I,n.h=new V_,n.g=mI(n.l,t?e:null,!n.s),0<n.O&&(n.M=new uN(xt(n.Pa,n,n.g),n.O)),D_(n.U,n.g,"readystatechange",n.nb),e=n.I?I_(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),ca(),lN(n.j,n.u,n.A,n.m,n.W,n.s)}H.nb=function(n){n=n.target;const e=this.M;e&&Qn(n)==3?e.l():this.Pa(n)};H.Pa=function(n){try{if(n==this.g)e:{const l=Qn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||Oh||this.g&&(this.h.h||this.g.ja()||kg(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?ca(3):ca(2)),rl(this);var t=this.g.da();this.aa=t;t:if($_(this)){var r=kg(this.g);n="";var i=r.length,s=Qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pi(this),Uo(this);var o="";break t}this.h.i=new le.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,hN(this.j,this.u,this.A,this.m,this.W,l,t),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!tu(a)){var u=a;break t}}u=null}if(t=u)os(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jh(this,t);else{this.i=!1,this.o=3,Ft(12),pi(this),Uo(this);break e}}this.S?(q_(this,l,o),Oh&&this.i&&l==3&&(D_(this.U,this.V,"tick",this.mb),this.V.start())):(os(this.j,this.m,o,null),jh(this,o)),l==4&&pi(this),this.i&&!this.J&&(l==4?hI(this.l,this):(this.i=!1,Ma(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ft(12)):(this.o=0,Ft(13)),pi(this),Uo(this)}}}catch{}finally{}};function $_(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function q_(n,e,t){let r=!0,i;for(;!n.J&&n.C<t.length;)if(i=mN(n,t),i==ru){e==4&&(n.o=4,Ft(14),r=!1),os(n.j,n.m,null,"[Incomplete Response]");break}else if(i==$h){n.o=4,Ft(15),os(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else os(n.j,n.m,i,null),jh(n,i);$_(n)&&i!=ru&&i!=$h&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Ft(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ca&&(n.ca=!0,e=n.l,e.g==n&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),Uf(e),e.L=!0,Ft(11))):(os(n.j,n.m,t,"[Invalid Chunked Response]"),pi(n),Uo(n))}H.mb=function(){if(this.g){var n=Qn(this.g),e=this.g.ja();this.C<e.length&&(rl(this),q_(this,n,e),this.i&&n!=4&&Ma(this))}};function mN(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?ru:(t=Number(e.substring(t,r)),isNaN(t)?$h:(r+=1,r+t>e.length?ru:(e=e.substr(r,t),n.C=r+t,e)))}H.cancel=function(){this.J=!0,pi(this)};function Ma(n){n.Y=Date.now()+n.P,j_(n,n.P)}function j_(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Da(xt(n.lb,n),e)}function rl(n){n.B&&(le.clearTimeout(n.B),n.B=null)}H.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(dN(this.j,this.A),this.L!=2&&(ca(),Ft(17)),pi(this),this.o=2,Uo(this)):j_(this,this.Y-n)};function Uo(n){n.l.H==0||n.J||hI(n.l,n)}function pi(n){rl(n);var e=n.M;e&&typeof e.ra=="function"&&e.ra(),n.M=null,kf(n.V),P_(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.ra())}function jh(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||zh(t.h,n))){if(!n.K&&zh(t.h,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)ou(t),al(t);else break e;Ff(t),Ft(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.M&&t.A==0&&!t.v&&(t.v=Da(xt(t.ib,t),6e3));if(1>=J_(t.h)&&t.na){try{t.na()}catch{}t.na=void 0}}else mi(t,11)}else if((n.K||t.g==n)&&ou(t),!tu(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(t.V=u[0],u=u[1],t.H==2)if(u[0]=="c"){t.J=u[1],t.oa=u[2];const l=u[3];l!=null&&(t.qa=l,t.j.info("VER="+t.qa));const h=u[4];h!=null&&(t.Ga=h,t.j.info("SVER="+t.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.K=r,t.j.info("backChannelRequestTimeoutMs_="+r)),r=t;const f=n.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.h;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Df(s,s.h),s.h=null))}if(r.F){const p=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;p&&(r.Da=p,Ue(r.G,r.F,p))}}t.H=3,t.l&&t.l.Ba(),t.ca&&(t.S=Date.now()-n.G,t.j.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=pI(r,r.I?r.oa:null,r.Y),o.K){X_(r.h,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(rl(a),Ma(a)),r.g=o}else uI(r);0<t.i.length&&cl(t)}else u[0]!="stop"&&u[0]!="close"||mi(t,7);else t.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?mi(t,7):Lf(t):u[0]!="noop"&&t.l&&t.l.Aa(u),t.A=0)}}ca(4)}catch{}}function gN(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Wu(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function yN(n){if(n.sa&&typeof n.sa=="function")return n.sa();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Wu(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function z_(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Wu(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=yN(n),r=gN(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var K_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vN(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ei(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Ei){this.h=e!==void 0?e:n.h,iu(this,n.j),this.s=n.s,this.g=n.g,su(this,n.m),this.l=n.l,e=n.i;var t=new ua;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Tg(this,t),this.o=n.o}else n&&(t=String(n).match(K_))?(this.h=!!e,iu(this,t[1]||"",!0),this.s=ko(t[2]||""),this.g=ko(t[3]||"",!0),su(this,t[4]),this.l=ko(t[5]||"",!0),Tg(this,t[6]||"",!0),this.o=ko(t[7]||"")):(this.h=!!e,this.i=new ua(null,this.h))}Ei.prototype.toString=function(){var n=[],e=this.j;e&&n.push(Ao(e,Sg,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(Ao(e,Sg,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(Ao(t,t.charAt(0)=="/"?IN:_N,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",Ao(t,EN)),n.join("")};function rr(n){return new Ei(n)}function iu(n,e,t){n.j=t?ko(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function su(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Tg(n,e,t){e instanceof ua?(n.i=e,TN(n.i,n.h)):(t||(e=Ao(e,bN)),n.i=new ua(e,n.h))}function Ue(n,e,t){n.i.set(e,t)}function il(n){return Ue(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function ko(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Ao(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,wN),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function wN(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Sg=/[#\/\?@]/g,_N=/[#\?:]/g,IN=/[#\?]/g,bN=/[#\?@]/g,EN=/#/g;function ua(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Gr(n){n.g||(n.g=new Map,n.h=0,n.i&&vN(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}H=ua.prototype;H.add=function(n,e){Gr(this),this.i=null,n=Qs(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function G_(n,e){Gr(n),e=Qs(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function H_(n,e){return Gr(n),e=Qs(n,e),n.g.has(e)}H.forEach=function(n,e){Gr(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};H.sa=function(){Gr(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};H.Z=function(n){Gr(this);let e=[];if(typeof n=="string")H_(this,n)&&(e=e.concat(this.g.get(Qs(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};H.set=function(n,e){return Gr(this),this.i=null,n=Qs(this,n),H_(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};H.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function W_(n,e,t){G_(n,e),0<t.length&&(n.i=null,n.g.set(Qs(n,e),wf(t)),n.h+=t.length)}H.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Qs(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function TN(n,e){e&&!n.j&&(Gr(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(G_(this,r),W_(this,i,t))},n)),n.j=e}var SN=class{constructor(n,e){this.h=n,this.g=e}};function Q_(n){this.l=n||CN,le.PerformanceNavigationTiming?(n=le.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(le.g&&le.g.Ka&&le.g.Ka()&&le.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var CN=10;function Y_(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function J_(n){return n.h?1:n.g?n.g.size:0}function zh(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Df(n,e){n.g?n.g.add(e):n.h=e}function X_(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Q_.prototype.cancel=function(){if(this.i=Z_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Z_(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return wf(n.i)}function Pf(){}Pf.prototype.stringify=function(n){return le.JSON.stringify(n,void 0)};Pf.prototype.parse=function(n){return le.JSON.parse(n,void 0)};function kN(){this.g=new Pf}function AN(n,e,t){const r=t||"";try{z_(n,function(i,s){let o=i;xa(i)&&(o=Cf(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function RN(n,e){const t=new Zu;if(le.Image){const r=new Image;r.onload=ac(uc,t,r,"TestLoadImage: loaded",!0,e),r.onerror=ac(uc,t,r,"TestLoadImage: error",!1,e),r.onabort=ac(uc,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=ac(uc,t,r,"TestLoadImage: timeout",!1,e),le.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function uc(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function La(n){this.l=n.fc||null,this.j=n.ob||!1}ft(La,Rf);La.prototype.g=function(){return new sl(this.l,this.j)};La.prototype.i=function(n){return function(){return n}}({});function sl(n,e){dt.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=Of,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ft(sl,dt);var Of=0;H=sl.prototype;H.open=function(n,e){if(this.readyState!=Of)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,la(this)};H.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||le).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};H.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fa(this)),this.readyState=Of};H.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,la(this)),this.g&&(this.readyState=3,la(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof le.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;eI(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function eI(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}H.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Fa(this):la(this),this.readyState==3&&eI(this)}};H.Za=function(n){this.g&&(this.response=this.responseText=n,Fa(this))};H.Ya=function(n){this.g&&(this.response=n,Fa(this))};H.ka=function(){this.g&&Fa(this)};function Fa(n){n.readyState=4,n.l=null,n.j=null,n.A=null,la(n)}H.setRequestHeader=function(n,e){this.v.append(n,e)};H.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};H.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function la(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(sl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var xN=le.JSON.parse;function Ke(n){dt.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=tI,this.L=this.M=!1}ft(Ke,dt);var tI="",NN=/^https?$/i,DN=["POST","PUT"];H=Ke.prototype;H.Oa=function(n){this.M=n};H.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Bh.g(),this.C=this.u?Eg(this.u):Eg(Bh),this.g.onreadystatechange=xt(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){Cg(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=le.FormData&&n instanceof le.FormData,!(0<=g_(DN,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{iI(this),0<this.B&&((this.L=PN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=xt(this.ua,this)):this.A=Af(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Cg(this,s)}};function PN(n){return As&&Yx()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}H.ua=function(){typeof vf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,It(this,"timeout"),this.abort(8))};function Cg(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,nI(n),ol(n)}function nI(n){n.F||(n.F=!0,It(n,"complete"),It(n,"error"))}H.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,It(this,"complete"),It(this,"abort"),ol(this))};H.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ol(this,!0)),Ke.$.N.call(this)};H.La=function(){this.s||(this.G||this.v||this.l?rI(this):this.kb())};H.kb=function(){rI(this)};function rI(n){if(n.h&&typeof vf<"u"&&(!n.C[1]||Qn(n)!=4||n.da()!=2)){if(n.v&&Qn(n)==4)Af(n.La,0,n);else if(It(n,"readystatechange"),Qn(n)==4){n.h=!1;try{const a=n.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=a===0){var i=String(n.I).match(K_)[1]||null;if(!i&&le.self&&le.self.location){var s=le.self.location.protocol;i=s.substr(0,s.length-1)}r=!NN.test(i?i.toLowerCase():"")}t=r}if(t)It(n,"complete"),It(n,"success");else{n.m=6;try{var o=2<Qn(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.da()+"]",nI(n)}}finally{ol(n)}}}}function ol(n,e){if(n.g){iI(n);const t=n.g,r=n.C[0]?eu:null;n.g=null,n.C=null,e||It(n,"ready");try{t.onreadystatechange=r}catch{}}}function iI(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(le.clearTimeout(n.A),n.A=null)}function Qn(n){return n.g?n.g.readyState:0}H.da=function(){try{return 2<Qn(this)?this.g.status:-1}catch{return-1}};H.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};H.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),xN(e)}};function kg(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case tI:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}H.Ia=function(){return this.m};H.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function sI(n){let e="";return If(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function Mf(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=sI(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):Ue(n,e,t))}function fo(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function oI(n){this.Ga=0,this.i=[],this.j=new Zu,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=fo("failFast",!1,n),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=fo("baseRetryDelayMs",5e3,n),this.hb=fo("retryDelaySeedMs",1e4,n),this.eb=fo("forwardChannelMaxRetries",2,n),this.xa=fo("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.K=void 0,this.I=n&&n.supportsCrossDomainXhr||!1,this.J="",this.h=new Q_(n&&n.concurrentRequestLimit),this.Ja=new kN,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.j.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}H=oI.prototype;H.qa=8;H.H=1;function Lf(n){if(aI(n),n.H==3){var e=n.W++,t=rr(n.G);Ue(t,"SID",n.J),Ue(t,"RID",e),Ue(t,"TYPE","terminate"),Ua(n,t),e=new Oa(n,n.j,e,void 0),e.L=2,e.v=il(rr(t)),t=!1,le.navigator&&le.navigator.sendBeacon&&(t=le.navigator.sendBeacon(e.v.toString(),"")),!t&&le.Image&&(new Image().src=e.v,t=!0),t||(e.g=mI(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ma(e)}fI(n)}function al(n){n.g&&(Uf(n),n.g.cancel(),n.g=null)}function aI(n){al(n),n.u&&(le.clearTimeout(n.u),n.u=null),ou(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&le.clearTimeout(n.m),n.m=null)}function cl(n){Y_(n.h)||n.m||(n.m=!0,R_(n.Na,n),n.C=0)}function ON(n,e){return J_(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.F.concat(n.i),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Da(xt(n.Na,n,e),dI(n,n.C)),n.C++,!0)}H.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Oa(this,this.j,n,void 0);let s=this.s;if(this.U&&(s?(s=I_(s),b_(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var r=this.i[t];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=cI(this,i,e),t=rr(this.G),Ue(t,"RID",n),Ue(t,"CVER",22),this.F&&Ue(t,"X-HTTP-Session-Id",this.F),Ua(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(sI(s)))+"&"+e:this.o&&Mf(t,this.o,s)),Df(this.h,i),this.bb&&Ue(t,"TYPE","init"),this.P?(Ue(t,"$req",e),Ue(t,"SID","null"),i.ba=!0,qh(i,t,null)):qh(i,t,e),this.H=2}}else this.H==3&&(n?Ag(this,n):this.i.length==0||Y_(this.h)||Ag(this))};function Ag(n,e){var t;e?t=e.m:t=n.W++;const r=rr(n.G);Ue(r,"SID",n.J),Ue(r,"RID",t),Ue(r,"AID",n.V),Ua(n,r),n.o&&n.s&&Mf(r,n.o,n.s),t=new Oa(n,n.j,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.i=e.F.concat(n.i)),e=cI(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Df(n.h,t),qh(t,r,e)}function Ua(n,e){n.ma&&If(n.ma,function(t,r){Ue(e,r,t)}),n.l&&z_({},function(t,r){Ue(e,r,t)})}function cI(n,e,t){t=Math.min(n.i.length,t);var r=n.l?xt(n.l.Va,n.l,n):null;e:{var i=n.i;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let u=i[c].h;const l=i[c].g;if(u-=s,0>u)s=Math.max(0,i[c].h-100),a=!1;else try{AN(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.i.splice(0,t),e.F=n,r}function uI(n){n.g||n.u||(n.ba=1,R_(n.Ma,n),n.A=0)}function Ff(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Da(xt(n.Ma,n),dI(n,n.A)),n.A++,!0)}H.Ma=function(){if(this.u=null,lI(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var n=2*this.S;this.j.info("BP detection timer enabled: "+n),this.B=Da(xt(this.jb,this),n)}};H.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Ft(10),al(this),lI(this))};function Uf(n){n.B!=null&&(le.clearTimeout(n.B),n.B=null)}function lI(n){n.g=new Oa(n,n.j,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=rr(n.wa);Ue(e,"RID","rpc"),Ue(e,"SID",n.J),Ue(e,"CI",n.M?"0":"1"),Ue(e,"AID",n.V),Ue(e,"TYPE","xmlhttp"),Ua(n,e),n.o&&n.s&&Mf(e,n.o,n.s),n.K&&n.g.setTimeout(n.K);var t=n.g;n=n.oa,t.L=1,t.v=il(rr(e)),t.s=null,t.S=!0,B_(t,n)}H.ib=function(){this.v!=null&&(this.v=null,al(this),Ff(this),Ft(19))};function ou(n){n.v!=null&&(le.clearTimeout(n.v),n.v=null)}function hI(n,e){var t=null;if(n.g==e){ou(n),Uf(n),n.g=null;var r=2}else if(zh(n.h,e))t=e.F,X_(n.h,e),r=1;else return;if(n.H!=0){if(n.ta=e.aa,e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var i=n.C;r=el(),It(r,new L_(r,t)),cl(n)}else uI(n);else if(i=e.o,i==3||i==0&&0<n.ta||!(r==1&&ON(n,e)||r==2&&Ff(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),i){case 1:mi(n,5);break;case 4:mi(n,10);break;case 3:mi(n,6);break;default:mi(n,2)}}}function dI(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.l||(t*=2),t*e}function mi(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var r=xt(n.pb,n);t||(t=new Ei("//www.google.com/images/cleardot.gif"),le.location&&le.location.protocol=="http"||iu(t,"https"),il(t)),RN(t.toString(),r)}else Ft(2);n.H=0,n.l&&n.l.za(e),fI(n),aI(n)}H.pb=function(n){n?(this.j.info("Successfully pinged google.com"),Ft(2)):(this.j.info("Failed to ping google.com"),Ft(1))};function fI(n){if(n.H=0,n.pa=[],n.l){const e=Z_(n.h);(e.length!=0||n.i.length!=0)&&(yg(n.pa,e),yg(n.pa,n.i),n.h.i.length=0,wf(n.i),n.i.length=0),n.l.ya()}}function pI(n,e,t){var r=t instanceof Ei?rr(t):new Ei(t,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),su(r,r.m);else{var i=le.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ei(null,void 0);r&&iu(s,r),e&&(s.g=e),i&&su(s,i),t&&(s.l=t),r=s}return t=n.F,e=n.Da,t&&e&&Ue(r,t,e),Ue(r,"VER",n.qa),Ua(n,r),r}function mI(n,e,t){if(e&&!n.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new Ke(new La({ob:!0})):new Ke(n.va),e.Oa(n.I),e}function gI(){}H=gI.prototype;H.Ba=function(){};H.Aa=function(){};H.za=function(){};H.ya=function(){};H.Va=function(){};function au(){if(As&&!(10<=Number(Jx)))throw Error("Environmental error: no available transport.")}au.prototype.g=function(n,e){return new Jt(n,e)};function Jt(n,e){dt.call(this),this.g=new oI(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!tu(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!tu(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Ys(this)}ft(Jt,dt);Jt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var n=this.g,e=this.l,t=this.h||void 0;Ft(0),n.Y=e,n.ma=t||{},n.M=n.aa,n.G=pI(n,null,n.Y),cl(n)};Jt.prototype.close=function(){Lf(this.g)};Jt.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Cf(n),n=t);e.i.push(new SN(e.fb++,n)),e.H==3&&cl(e)};Jt.prototype.N=function(){this.g.l=null,delete this.j,Lf(this.g),delete this.g,Jt.$.N.call(this)};function yI(n){xf.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}ft(yI,xf);function vI(){Nf.call(this),this.status=1}ft(vI,Nf);function Ys(n){this.g=n}ft(Ys,gI);Ys.prototype.Ba=function(){It(this.g,"a")};Ys.prototype.Aa=function(n){It(this.g,new yI(n))};Ys.prototype.za=function(n){It(this.g,new vI)};Ys.prototype.ya=function(){It(this.g,"b")};function MN(){this.blockSize=-1}function yn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ft(yn,MN);yn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ih(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)r[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var s=n.g[3],o=e+(s^t&(i^s))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(t^i))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^s)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~s))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}yn.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=t;)ih(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){ih(this,r),i=0;break}}else for(;s<e;)if(r[i++]=n[s++],i==this.blockSize){ih(this,r),i=0;break}}this.h=i,this.i+=e};yn.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function xe(n,e){this.h=e;for(var t=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==e||(t[i]=s,r=!1)}this.g=t}var LN={};function Vf(n){return-128<=n&&128>n?y_(LN,n,function(e){return new xe([e|0],0>e?-1:0)}):new xe([n|0],0>n?-1:0)}function Dn(n){if(isNaN(n)||!isFinite(n))return gs;if(0>n)return yt(Dn(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=Kh;return new xe(e,0)}function wI(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return yt(wI(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Dn(Math.pow(e,8)),r=gs,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),e);8>s?(s=Dn(Math.pow(e,s)),r=r.R(s).add(Dn(o))):(r=r.R(t),r=r.add(Dn(o)))}return r}var Kh=4294967296,gs=Vf(0),Gh=Vf(1),Rg=Vf(16777216);H=xe.prototype;H.ea=function(){if(rn(this))return-yt(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:Kh+r)*e,e*=Kh}return n};H.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Yn(this))return"0";if(rn(this))return"-"+yt(this).toString(n);for(var e=Dn(Math.pow(n,6)),t=this,r="";;){var i=uu(t,e).g;t=cu(t,i.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,Yn(t))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};H.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Yn(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function rn(n){return n.h==-1}H.X=function(n){return n=cu(this,n),rn(n)?-1:Yn(n)?0:1};function yt(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new xe(t,~n.h).add(Gh)}H.abs=function(){return rn(this)?yt(this):this};H.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,t[i]=o<<16|s}return new xe(t,t[t.length-1]&-2147483648?-1:0)};function cu(n,e){return n.add(yt(e))}H.R=function(n){if(Yn(this)||Yn(n))return gs;if(rn(this))return rn(n)?yt(this).R(yt(n)):yt(yt(this).R(n));if(rn(n))return yt(this.R(yt(n)));if(0>this.X(Rg)&&0>n.X(Rg))return Dn(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;t[2*r+2*i]+=o*c,lc(t,2*r+2*i),t[2*r+2*i+1]+=s*c,lc(t,2*r+2*i+1),t[2*r+2*i+1]+=o*a,lc(t,2*r+2*i+1),t[2*r+2*i+2]+=s*a,lc(t,2*r+2*i+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new xe(t,0)};function lc(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function po(n,e){this.g=n,this.h=e}function uu(n,e){if(Yn(e))throw Error("division by zero");if(Yn(n))return new po(gs,gs);if(rn(n))return e=uu(yt(n),e),new po(yt(e.g),yt(e.h));if(rn(e))return e=uu(n,yt(e)),new po(yt(e.g),e.h);if(30<n.g.length){if(rn(n)||rn(e))throw Error("slowDivide_ only works with positive integers.");for(var t=Gh,r=e;0>=r.X(n);)t=xg(t),r=xg(r);var i=Ji(t,1),s=Ji(r,1);for(r=Ji(r,2),t=Ji(t,2);!Yn(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(t),s=o),r=Ji(r,1),t=Ji(t,1)}return e=cu(n,i.R(e)),new po(i,e)}for(i=gs;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Dn(t),o=s.R(e);rn(o)||0<o.X(n);)t-=r,s=Dn(t),o=s.R(e);Yn(s)&&(s=Gh),i=i.add(s),n=cu(n,o)}return new po(i,n)}H.gb=function(n){return uu(this,n).h};H.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new xe(t,this.h&n.h)};H.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new xe(t,this.h|n.h)};H.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new xe(t,this.h^n.h)};function xg(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new xe(t,n.h)}function Ji(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,i=[],s=0;s<r;s++)i[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new xe(i,n.h)}au.prototype.createWebChannel=au.prototype.g;Jt.prototype.send=Jt.prototype.u;Jt.prototype.open=Jt.prototype.m;Jt.prototype.close=Jt.prototype.close;tl.NO_ERROR=0;tl.TIMEOUT=8;tl.HTTP_ERROR=6;F_.COMPLETE="complete";U_.EventType=Pa;Pa.OPEN="a";Pa.CLOSE="b";Pa.ERROR="c";Pa.MESSAGE="d";dt.prototype.listen=dt.prototype.O;Ke.prototype.listenOnce=Ke.prototype.P;Ke.prototype.getLastError=Ke.prototype.Sa;Ke.prototype.getLastErrorCode=Ke.prototype.Ia;Ke.prototype.getStatus=Ke.prototype.da;Ke.prototype.getResponseJson=Ke.prototype.Wa;Ke.prototype.getResponseText=Ke.prototype.ja;Ke.prototype.send=Ke.prototype.ha;Ke.prototype.setWithCredentials=Ke.prototype.Oa;yn.prototype.digest=yn.prototype.l;yn.prototype.reset=yn.prototype.reset;yn.prototype.update=yn.prototype.j;xe.prototype.add=xe.prototype.add;xe.prototype.multiply=xe.prototype.R;xe.prototype.modulo=xe.prototype.gb;xe.prototype.compare=xe.prototype.X;xe.prototype.toNumber=xe.prototype.ea;xe.prototype.toString=xe.prototype.toString;xe.prototype.getBits=xe.prototype.D;xe.fromNumber=Dn;xe.fromString=wI;var FN=function(){return new au},UN=function(){return el()},sh=tl,VN=F_,BN=qi,Ng={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},$N=La,hc=U_,qN=Ke,jN=yn,ys=xe;const Dg="@firebase/firestore";/**
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
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
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
 */let Js="9.22.0";/**
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
 */const Or=new Ou("@firebase/firestore");function Hh(){return Or.logLevel}function zN(n){Or.setLogLevel(n)}function P(n,...e){if(Or.logLevel<=we.DEBUG){const t=e.map(Bf);Or.debug(`Firestore (${Js}): ${n}`,...t)}}function He(n,...e){if(Or.logLevel<=we.ERROR){const t=e.map(Bf);Or.error(`Firestore (${Js}): ${n}`,...t)}}function vn(n,...e){if(Or.logLevel<=we.WARN){const t=e.map(Bf);Or.warn(`Firestore (${Js}): ${n}`,...t)}}function Bf(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
 */function W(n="Unexpected state"){const e=`FIRESTORE (${Js}) INTERNAL ASSERTION FAILED: `+n;throw He(e),new Error(e)}function ne(n,e){n||W()}function KN(n,e){n||W()}function z(n,e){return n}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class R extends Ut{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class _I{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class GN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ct.UNAUTHENTICATED))}shutdown(){}}class HN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class WN{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new ut;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ut,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ut)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ne(typeof r.accessToken=="string"),new _I(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ne(e===null||typeof e=="string"),new ct(e)}}class QN{constructor(e,t,r){this.h=e,this.l=t,this.m=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class YN{constructor(e,t,r){this.h=e,this.l=t,this.m=r}getToken(){return Promise.resolve(new QN(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class JN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XN{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const r=s=>{s.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ne(typeof t.token=="string"),this.T=t.token,new JN(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function ZN(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class II{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=ZN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function fe(n,e){return n<e?-1:n>e?1:0}function Rs(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function bI(n){return n+"\0"}/**
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
 */class Be{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new R(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new R(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new R(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new R(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Be(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Be(0,0))}static max(){return new te(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ha{constructor(e,t,r){t===void 0?t=0:t>e.length&&W(),r===void 0?r=e.length-t:r>e.length-t&&W(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ha.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ha?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class _e extends ha{construct(e,t,r){return new _e(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new R(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new _e(t)}static emptyPath(){return new _e([])}}const eD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends ha{construct(e,t,r){return new We(e,t,r)}static isValidIdentifier(e){return eD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new We(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new R(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new R(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new R(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new R(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(t)}static emptyPath(){return new We([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(_e.fromString(e))}static fromName(e){return new j(_e.fromString(e).popFirst(5))}static empty(){return new j(_e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return _e.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new _e(e.slice()))}}/**
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
 */class EI{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function Wh(n){return n.fields.find(e=>e.kind===2)}function ri(n){return n.fields.filter(e=>e.kind!==2)}EI.UNKNOWN_ID=-1;class tD{constructor(e,t){this.fieldPath=e,this.kind=t}}class lu{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new lu(0,Xt.min())}}function TI(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new Be(t+1,0):new Be(t,r));return new Xt(i,j.empty(),e)}function SI(n){return new Xt(n.readTime,n.key,-1)}class Xt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Xt(te.min(),j.empty(),-1)}static max(){return new Xt(te.max(),j.empty(),-1)}}function $f(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=j.comparator(n.documentKey,e.documentKey),t!==0?t:fe(n.largestBatchId,e.largestBatchId))}/**
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
 */const CI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Hr(n){if(n.code!==T.FAILED_PRECONDITION||n.message!==CI)throw n;P("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new E((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof E?t:E.resolve(t)}catch(t){return E.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):E.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):E.reject(t)}static resolve(e){return new E((t,r)=>{t(e)})}static reject(e){return new E((t,r)=>{r(e)})}static waitFor(e){return new E((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=E.resolve(!1);for(const r of e)t=t.next(i=>i?E.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new E((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,t){return new E((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
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
 */class ul{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.v=new ut,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{t.error?this.v.reject(new Vo(e,t.error)):this.v.resolve()},this.transaction.onerror=r=>{const i=qf(r.target.error);this.v.reject(new Vo(e,i))}}static open(e,t,r,i){try{return new ul(t,e.transaction(i,r))}catch(s){throw new Vo(t,s)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(P("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new rD(t)}}class dn{constructor(e,t,r){this.name=e,this.version=t,this.V=r,dn.S(je())===12.2&&He("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return P("SimpleDb","Removing database:",e),ai(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Xo())return!1;if(dn.C())return!0;const e=je(),t=dn.S(e),r=0<t&&t<10,i=dn.N(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async $(e){return this.db||(P("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new Vo(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new R(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new R(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Vo(e,o))},i.onupgradeneeded=s=>{P("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.V.O(o,i.transaction,s.oldVersion,this.version).next(()=>{P("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=t=>this.F(t)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=ul.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.P(),u)).catch(u=>(a.abort(u),E.reject(u))).toPromise();return c.catch(()=>{}),await a.R,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(P("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class nD{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return ai(this.L.delete())}}class Vo extends R{constructor(e,t){super(T.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Wr(n){return n.name==="IndexedDbTransactionError"}class rD{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(P("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(P("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ai(r)}add(e){return P("SimpleDb","ADD",this.store.name,e,e),ai(this.store.add(e))}get(e){return ai(this.store.get(e)).next(t=>(t===void 0&&(t=null),P("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return P("SimpleDb","DELETE",this.store.name,e),ai(this.store.delete(e))}count(){return P("SimpleDb","COUNT",this.store.name),ai(this.store.count())}j(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.W(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new E((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new E((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,t){P("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}X(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.W(i,t)}Z(e){const t=this.cursor({});return new E((r,i)=>{t.onerror=s=>{const o=qf(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new E((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new nD(a),u=t(a.primaryKey,a.value,c);if(u instanceof E){const l=u.catch(h=>(c.done(),E.reject(h)));r.push(l)}c.isDone?i():c.K===null?a.continue():a.continue(c.K)}}).next(()=>E.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function ai(n){return new E((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=qf(r.target.error);t(i)}})}let Pg=!1;function qf(n){const e=dn.S(je());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new R("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Pg||(Pg=!0,setTimeout(()=>{throw r},0)),r}}return n}class iD{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){P("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{P("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(t){Wr(t)?P("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await Hr(t)}await this.et(6e4)})}}class sD{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.st(t,e))}st(e,t){const r=new Set;let i=t,s=!0;return E.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return P("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}it(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(i,s)).next(a=>(P("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}rt(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=SI(s);$f(o,r)>0&&(r=o)}),new Xt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class zt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>t.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}zt.ct=-1;function Va(n){return n==null}function da(n){return n===0&&1/n==-1/0}function AI(n){return typeof n=="number"&&Number.isInteger(n)&&!da(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Vt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Og(e)),e=oD(n.get(t),e);return Og(e)}function oD(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function Og(n){return n+""}function Pn(n){const e=n.length;if(ne(e>=2),e===2)return ne(n.charAt(0)===""&&n.charAt(1)===""),_e.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&W(),n.charAt(o+1)){case"":const a=n.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:W()}s=o+2}return new _e(r)}/**
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
 */const Mg=["userId","batchId"];/**
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
 */function Nc(n,e){return[n,Vt(e)]}function RI(n,e,t){return[n,Vt(e),t]}const aD={},cD=["prefixPath","collectionGroup","readTime","documentId"],uD=["prefixPath","collectionGroup","documentId"],lD=["collectionGroup","readTime","prefixPath","documentId"],hD=["canonicalId","targetId"],dD=["targetId","path"],fD=["path","targetId"],pD=["collectionId","parent"],mD=["indexId","uid"],gD=["uid","sequenceNumber"],yD=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],vD=["indexId","uid","orderedDocumentKey"],wD=["userId","collectionPath","documentId"],_D=["userId","collectionPath","largestBatchId"],ID=["userId","collectionGroup","largestBatchId"],xI=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],bD=[...xI,"documentOverlays"],NI=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],DI=NI,ED=[...DI,"indexConfiguration","indexState","indexEntries"];/**
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
 */class Qh extends kI{constructor(e,t){super(),this.ht=e,this.currentSequenceNumber=t}}function pt(n,e){const t=z(n);return dn.M(t.ht,e)}/**
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
 */function Lg(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ji(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function PI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Pe{constructor(e,t){this.comparator=e,this.root=t||gt.EMPTY}insert(e,t){return new Pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new dc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new dc(this.root,e,this.comparator,!1)}getReverseIterator(){return new dc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new dc(this.root,e,this.comparator,!0)}}class dc{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gt{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??gt.RED,this.left=i??gt.EMPTY,this.right=s??gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new gt(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return gt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(n,e,t,r,i){return this}insert(n,e,t){return new gt(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Le{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Fg(this.data.getIterator())}getIteratorFrom(e){return new Fg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Le(this.comparator);return t.data=e,t}}class Fg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Xi(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class Kt{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new Kt([])}unionWith(e){let t=new Le(We.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Kt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Rs(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class OI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function TD(){return typeof atob<"u"}/**
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
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new OI("Invalid base64 string: "+i):i}}(e);return new it(t)}static fromUint8Array(e){const t=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new it(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const SD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mr(n){if(ne(!!n),typeof n=="string"){let e=0;const t=SD.exec(n);if(ne(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(n.seconds),nanos:ze(n.nanos)}}function ze(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Lr(n){return typeof n=="string"?it.fromBase64String(n):it.fromUint8Array(n)}/**
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
 */function ll(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function jf(n){const e=n.mapValue.fields.__previous_value__;return ll(e)?jf(e):e}function fa(n){const e=Mr(n.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
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
 */class CD{constructor(e,t,r,i,s,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Fr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Fr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Fr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Er={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Dc={nullValue:"NULL_VALUE"};function xi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ll(n)?4:MI(n)?9007199254740991:10:W()}function qn(n,e){if(n===e)return!0;const t=xi(n);if(t!==xi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return fa(n).isEqual(fa(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Mr(r.timestampValue),o=Mr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return Lr(r.bytesValue).isEqual(Lr(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return ze(r.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(r.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ze(r.integerValue)===ze(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ze(r.doubleValue),o=ze(i.doubleValue);return s===o?da(s)===da(o):isNaN(s)&&isNaN(o)}return!1}(n,e);case 9:return Rs(n.arrayValue.values||[],e.arrayValue.values||[],qn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Lg(s)!==Lg(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!qn(s[a],o[a])))return!1;return!0}(n,e);default:return W()}}function pa(n,e){return(n.values||[]).find(t=>qn(t,e))!==void 0}function Ur(n,e){if(n===e)return 0;const t=xi(n),r=xi(e);if(t!==r)return fe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return fe(n.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ze(i.integerValue||i.doubleValue),a=ze(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Ug(n.timestampValue,e.timestampValue);case 4:return Ug(fa(n),fa(e));case 5:return fe(n.stringValue,e.stringValue);case 6:return function(i,s){const o=Lr(i),a=Lr(s);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=fe(o[c],a[c]);if(u!==0)return u}return fe(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,s){const o=fe(ze(i.latitude),ze(s.latitude));return o!==0?o:fe(ze(i.longitude),ze(s.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Ur(o[c],a[c]);if(u)return u}return fe(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Er.mapValue&&s===Er.mapValue)return 0;if(i===Er.mapValue)return 1;if(s===Er.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=s.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=fe(a[l],u[l]);if(h!==0)return h;const d=Ur(o[a[l]],c[u[l]]);if(d!==0)return d}return fe(a.length,u.length)}(n.mapValue,e.mapValue);default:throw W()}}function Ug(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return fe(n,e);const t=Mr(n),r=Mr(e),i=fe(t.seconds,r.seconds);return i!==0?i:fe(t.nanos,r.nanos)}function xs(n){return Yh(n)}function Yh(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(r){const i=Mr(r);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?Lr(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,j.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Yh(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Yh(r.fields[a])}`;return s+"}"}(n.mapValue):W();var e,t}function Ni(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Jh(n){return!!n&&"integerValue"in n}function ma(n){return!!n&&"arrayValue"in n}function Vg(n){return!!n&&"nullValue"in n}function Bg(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Pc(n){return!!n&&"mapValue"in n}function Bo(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ji(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Bo(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Bo(n.arrayValue.values[t]);return e}return Object.assign({},n)}function MI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function kD(n){return"nullValue"in n?Dc:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Ni(Fr.empty(),j.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:W()}function AD(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Ni(Fr.empty(),j.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?Er:W()}function $g(n,e){const t=Ur(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function qg(n,e){const t=Ur(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Pc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bo(t)}setAll(e){let t=We.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=Bo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Pc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return qn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Pc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){ji(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new wt(Bo(this.value))}}function LI(n){const e=[];return ji(n.fields,(t,r)=>{const i=new We([t]);if(Pc(r)){const s=LI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Kt(e)}/**
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
 */class Me{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Me(e,0,te.min(),te.min(),te.min(),wt.empty(),0)}static newFoundDocument(e,t,r,i){return new Me(e,1,t,te.min(),r,i,0)}static newNoDocument(e,t){return new Me(e,2,t,te.min(),te.min(),wt.empty(),0)}static newUnknownDocument(e,t){return new Me(e,3,t,te.min(),te.min(),wt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Vr{constructor(e,t){this.position=e,this.inclusive=t}}function jg(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),t.key):r=Ur(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function zg(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!qn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class vs{constructor(e,t="asc"){this.field=e,this.dir=t}}function RD(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class FI{}class ye extends FI{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new xD(e,t,r):t==="array-contains"?new PD(e,r):t==="in"?new jI(e,r):t==="not-in"?new OD(e,r):t==="array-contains-any"?new MD(e,r):new ye(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new ND(e,r):new DD(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ur(t,this.value)):t!==null&&xi(this.value)===xi(t)&&this.matchesComparison(Ur(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Re extends FI{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new Re(e,t)}matches(e){return Ns(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(t=>t.isInequality());return e!==null?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Ns(n){return n.op==="and"}function Xh(n){return n.op==="or"}function zf(n){return UI(n)&&Ns(n)}function UI(n){for(const e of n.filters)if(e instanceof Re)return!1;return!0}function Zh(n){if(n instanceof ye)return n.field.canonicalString()+n.op.toString()+xs(n.value);if(zf(n))return n.filters.map(e=>Zh(e)).join(",");{const e=n.filters.map(t=>Zh(t)).join(",");return`${n.op}(${e})`}}function VI(n,e){return n instanceof ye?function(t,r){return r instanceof ye&&t.op===r.op&&t.field.isEqual(r.field)&&qn(t.value,r.value)}(n,e):n instanceof Re?function(t,r){return r instanceof Re&&t.op===r.op&&t.filters.length===r.filters.length?t.filters.reduce((i,s,o)=>i&&VI(s,r.filters[o]),!0):!1}(n,e):void W()}function BI(n,e){const t=n.filters.concat(e);return Re.create(t,n.op)}function $I(n){return n instanceof ye?function(e){return`${e.field.canonicalString()} ${e.op} ${xs(e.value)}`}(n):n instanceof Re?function(e){return e.op.toString()+" {"+e.getFilters().map($I).join(" ,")+"}"}(n):"Filter"}class xD extends ye{constructor(e,t,r){super(e,t,r),this.key=j.fromName(r.referenceValue)}matches(e){const t=j.comparator(e.key,this.key);return this.matchesComparison(t)}}class ND extends ye{constructor(e,t){super(e,"in",t),this.keys=qI("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class DD extends ye{constructor(e,t){super(e,"not-in",t),this.keys=qI("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function qI(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>j.fromName(r.referenceValue))}class PD extends ye{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ma(t)&&pa(t.arrayValue,this.value)}}class jI extends ye{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&pa(this.value.arrayValue,t)}}class OD extends ye{constructor(e,t){super(e,"not-in",t)}matches(e){if(pa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!pa(this.value.arrayValue,t)}}class MD extends ye{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ma(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>pa(this.value.arrayValue,r))}}/**
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
 */class LD{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function ed(n,e=null,t=[],r=[],i=null,s=null,o=null){return new LD(n,e,t,r,i,s,o)}function Di(n){const e=z(n);if(e.dt===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Zh(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Va(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>xs(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>xs(r)).join(",")),e.dt=t}return e.dt}function Ba(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!RD(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!VI(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!zg(n.startAt,e.startAt)&&zg(n.endAt,e.endAt)}function hu(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function du(n,e){return n.filters.filter(t=>t instanceof ye&&t.field.isEqual(e))}function Kg(n,e,t){let r=Dc,i=!0;for(const s of du(n,e)){let o=Dc,a=!0;switch(s.op){case"<":case"<=":o=kD(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Dc}$g({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];$g({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function Gg(n,e,t){let r=Er,i=!0;for(const s of du(n,e)){let o=Er,a=!0;switch(s.op){case">=":case">":o=AD(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Er}qg({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];qg({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class cr{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function zI(n,e,t,r,i,s,o,a){return new cr(n,e,t,r,i,s,o,a)}function Xs(n){return new cr(n)}function Hg(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Kf(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function hl(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Gf(n){return n.collectionGroup!==null}function Ti(n){const e=z(n);if(e.wt===null){e.wt=[];const t=hl(e),r=Kf(e);if(t!==null&&r===null)t.isKeyField()||e.wt.push(new vs(t)),e.wt.push(new vs(We.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new vs(We.keyField(),s))}}}return e.wt}function Wt(n){const e=z(n);if(!e._t)if(e.limitType==="F")e._t=ed(e.path,e.collectionGroup,Ti(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of Ti(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new vs(s.field,o))}const r=e.endAt?new Vr(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Vr(e.startAt.position,e.startAt.inclusive):null;e._t=ed(e.path,e.collectionGroup,t,e.filters,e.limit,r,i)}return e._t}function td(n,e){e.getFirstInequalityField(),hl(n);const t=n.filters.concat([e]);return new cr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function fu(n,e,t){return new cr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function $a(n,e){return Ba(Wt(n),Wt(e))&&n.limitType===e.limitType}function KI(n){return`${Di(Wt(n))}|lt:${n.limitType}`}function nd(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(r=>$I(r)).join(", ")}]`),Va(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>xs(r)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>xs(r)).join(",")),`Target(${t})`}(Wt(n))}; limitType=${n.limitType})`}function qa(n,e){return e.isFoundDocument()&&function(t,r){const i=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):j.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,r){for(const i of Ti(t))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,r){for(const i of t.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(t,r){return!(t.startAt&&!function(i,s,o){const a=jg(i,s,o);return i.inclusive?a<=0:a<0}(t.startAt,Ti(t),r)||t.endAt&&!function(i,s,o){const a=jg(i,s,o);return i.inclusive?a>=0:a>0}(t.endAt,Ti(t),r))}(n,e)}function GI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function HI(n){return(e,t)=>{let r=!1;for(const i of Ti(n)){const s=FD(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function FD(n,e,t){const r=n.field.isKeyField()?j.comparator(e.key,t.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Ur(a,c):W()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return W()}}/**
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
 */class Qr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ji(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return PI(this.inner)}size(){return this.innerSize}}/**
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
 */const UD=new Pe(j.comparator);function Gt(){return UD}const WI=new Pe(j.comparator);function Ro(...n){let e=WI;for(const t of n)e=e.insert(t.key,t);return e}function QI(n){let e=WI;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function On(){return $o()}function YI(){return $o()}function $o(){return new Qr(n=>n.toString(),(n,e)=>n.isEqual(e))}const VD=new Pe(j.comparator),BD=new Le(j.comparator);function pe(...n){let e=BD;for(const t of n)e=e.add(t);return e}const $D=new Le(fe);function Hf(){return $D}/**
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
 */function JI(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:da(e)?"-0":e}}function XI(n){return{integerValue:""+n}}function ZI(n,e){return AI(e)?XI(e):JI(n,e)}/**
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
 */class dl{constructor(){this._=void 0}}function qD(n,e,t){return n instanceof Ds?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&ll(i)&&(i=jf(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(t,e):n instanceof Pi?tb(n,e):n instanceof Oi?nb(n,e):function(r,i){const s=eb(r,i),o=Wg(s)+Wg(r.gt);return Jh(s)&&Jh(r.gt)?XI(o):JI(r.serializer,o)}(n,e)}function jD(n,e,t){return n instanceof Pi?tb(n,e):n instanceof Oi?nb(n,e):t}function eb(n,e){return n instanceof Ps?Jh(t=e)||function(r){return!!r&&"doubleValue"in r}(t)?e:{integerValue:0}:null;var t}class Ds extends dl{}class Pi extends dl{constructor(e){super(),this.elements=e}}function tb(n,e){const t=rb(e);for(const r of n.elements)t.some(i=>qn(i,r))||t.push(r);return{arrayValue:{values:t}}}class Oi extends dl{constructor(e){super(),this.elements=e}}function nb(n,e){let t=rb(e);for(const r of n.elements)t=t.filter(i=>!qn(i,r));return{arrayValue:{values:t}}}class Ps extends dl{constructor(e,t){super(),this.serializer=e,this.gt=t}}function Wg(n){return ze(n.integerValue||n.doubleValue)}function rb(n){return ma(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class ja{constructor(e,t){this.field=e,this.transform=t}}function zD(n,e){return n.field.isEqual(e.field)&&function(t,r){return t instanceof Pi&&r instanceof Pi||t instanceof Oi&&r instanceof Oi?Rs(t.elements,r.elements,qn):t instanceof Ps&&r instanceof Ps?qn(t.gt,r.gt):t instanceof Ds&&r instanceof Ds}(n.transform,e.transform)}class KD{constructor(e,t){this.version=e,this.transformResults=t}}class Ve{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ve}static exists(e){return new Ve(void 0,e)}static updateTime(e){return new Ve(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Oc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class fl{}function ib(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new eo(n.key,Ve.none()):new Zs(n.key,n.data,Ve.none());{const t=n.data,r=wt.empty();let i=new Le(We.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ur(n.key,r,new Kt(i.toArray()),Ve.none())}}function GD(n,e,t){n instanceof Zs?function(r,i,s){const o=r.value.clone(),a=Yg(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(n,e,t):n instanceof ur?function(r,i,s){if(!Oc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Yg(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(sb(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(n,e,t):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,t)}function qo(n,e,t,r){return n instanceof Zs?function(i,s,o,a){if(!Oc(i.precondition,s))return o;const c=i.value.clone(),u=Jg(i.fieldTransforms,a,s);return c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof ur?function(i,s,o,a){if(!Oc(i.precondition,s))return o;const c=Jg(i.fieldTransforms,a,s),u=s.data;return u.setAll(sb(i)),u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(n,e,t,r):function(i,s,o){return Oc(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(n,e,t)}function HD(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=eb(r.transform,i||null);s!=null&&(t===null&&(t=wt.empty()),t.set(r.field,s))}return t||null}function Qg(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&Rs(t,r,(i,s)=>zD(i,s))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Zs extends fl{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ur extends fl{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function sb(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Yg(n,e,t){const r=new Map;ne(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,jD(o,a,t[i]))}return r}function Jg(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,qD(s,o,e))}return r}class eo extends fl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wf extends fl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Qf{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&GD(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=qo(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=qo(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=YI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=ib(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),pe())}isEqual(e){return this.batchId===e.batchId&&Rs(this.mutations,e.mutations,(t,r)=>Qg(t,r))&&Rs(this.baseMutations,e.baseMutations,(t,r)=>Qg(t,r))}}class Yf{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ne(e.mutations.length===r.length);let i=VD;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Yf(e,t,r,i)}}/**
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
 */class Jf{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class WD{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Xe,ve;function ob(n){switch(n){default:return W();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function ab(n){if(n===void 0)return He("GRPC error has no .code"),T.UNKNOWN;switch(n){case Xe.OK:return T.OK;case Xe.CANCELLED:return T.CANCELLED;case Xe.UNKNOWN:return T.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return T.INTERNAL;case Xe.UNAVAILABLE:return T.UNAVAILABLE;case Xe.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Xe.NOT_FOUND:return T.NOT_FOUND;case Xe.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Xe.ABORTED:return T.ABORTED;case Xe.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Xe.DATA_LOSS:return T.DATA_LOSS;default:return W()}}(ve=Xe||(Xe={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Xf{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return fc}static getOrCreateInstance(){return fc===null&&(fc=new Xf),fc}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let fc=null;/**
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
 */function cb(){return new TextEncoder}/**
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
 */const QD=new ys([4294967295,4294967295],0);function Xg(n){const e=cb().encode(n),t=new jN;return t.update(e),new Uint8Array(t.digest())}function Zg(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ys([t,r],0),new ys([i,s],0)]}class Zf{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new xo(`Invalid padding: ${t}`);if(r<0)throw new xo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new xo(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new xo(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=ys.fromNumber(this.It)}Et(e,t,r){let i=e.add(t.multiply(ys.fromNumber(r)));return i.compare(QD)===1&&(i=new ys([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const t=Xg(e),[r,i]=Zg(t);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Zf(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const t=Xg(e),[r,i]=Zg(t);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class xo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class za{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Ka.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new za(te.min(),i,new Pe(fe),Gt(),pe())}}class Ka{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ka(r,t,pe(),pe(),pe())}}/**
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
 */class Mc{constructor(e,t,r,i){this.Pt=e,this.removedTargetIds=t,this.key=r,this.bt=i}}class ub{constructor(e,t){this.targetId=e,this.Vt=t}}class lb{constructor(e,t,r=it.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class ey{constructor(){this.St=0,this.Dt=ny(),this.Ct=it.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=pe(),t=pe(),r=pe();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:W()}}),new Ka(this.Ct,this.xt,e,t,r)}Ft(){this.Nt=!1,this.Dt=ny()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class YD{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Gt(),this.zt=ty(),this.Wt=new Pe(fe)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,t=>{const r=this.Zt(t);switch(e.state){case 0:this.te(t)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(t);break;case 3:this.te(t)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),r.$t(e.resumeToken));break;default:W()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach((r,i)=>{this.te(i)&&t(i)})}ne(e){var t;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(hu(o))if(i===0){const a=new j(o.path);this.Yt(r,a,Me.newNoDocument(a,te.min()))}else ne(i===1);else{const a=this.ie(r);if(a!==i){const c=this.re(e,a);if(c!==0){this.ee(r);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(t=Xf.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(u,l,h){var d,f,m,p,y,_;const S={localCacheCount:l,existenceFilterCount:h.count},L=h.unchangedNames;return L&&(S.bloomFilter={applied:u===0,hashCount:(d=L==null?void 0:L.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(p=(m=(f=L==null?void 0:L.bits)===null||f===void 0?void 0:f.bitmap)===null||m===void 0?void 0:m.length)!==null&&p!==void 0?p:0,padding:(_=(y=L==null?void 0:L.bits)===null||y===void 0?void 0:y.padding)!==null&&_!==void 0?_:0}),S}(c,a,e.Vt))}}}}re(e,t){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let c,u;try{c=Lr(s).toUint8Array()}catch(l){if(l instanceof OI)return vn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw l}try{u=new Zf(c,o,a)}catch(l){return vn(l instanceof xo?"BloomFilter error: ":"Applying bloom filter failed: ",l),1}return u.It===0?1:i!==t-this.oe(e.targetId,u)?2:0}oe(e,t){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const t=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&hu(a.target)){const c=new j(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,Me.newNoDocument(c,e))}s.Mt&&(t.set(o,s.Ot()),s.Ft())}});let r=pe();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.se(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new za(e,t,this.Wt,this.jt,r);return this.jt=Gt(),this.zt=ty(),this.Wt=new Pe(fe),i}Jt(e,t){if(!this.te(e))return;const r=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,r),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,t)?i.Bt(t,1):i.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),r&&(this.jt=this.jt.insert(t,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new ey,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new Le(fe),this.zt=this.zt.insert(e,t)),t}te(e){const t=this.se(e)!==null;return t||P("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new ey),this.Gt.getRemoteKeysForTarget(e).forEach(t=>{this.Yt(e,t,null)})}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function ty(){return new Pe(j.comparator)}function ny(){return new Pe(j.comparator)}const JD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),XD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ZD=(()=>({and:"AND",or:"OR"}))();class eP{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function rd(n,e){return n.useProto3Json||Va(e)?e:{value:e}}function Os(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hb(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function tP(n,e){return Os(n,e.toTimestamp())}function Qe(n){return ne(!!n),te.fromTimestamp(function(e){const t=Mr(e);return new Be(t.seconds,t.nanos)}(n))}function ep(n,e){return function(t){return new _e(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function db(n){const e=_e.fromString(n);return ne(Ib(e)),e}function ga(n,e){return ep(n.databaseId,e.path)}function Fn(n,e){const t=db(e);if(t.get(1)!==n.databaseId.projectId)throw new R(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new R(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new j(pb(t))}function id(n,e){return ep(n.databaseId,e)}function fb(n){const e=db(n);return e.length===4?_e.emptyPath():pb(e)}function ya(n){return new _e(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function pb(n){return ne(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ry(n,e,t){return{name:ga(n,e),fields:t.value.mapValue.fields}}function mb(n,e,t){const r=Fn(n,e.name),i=Qe(e.updateTime),s=e.createTime?Qe(e.createTime):te.min(),o=new wt({mapValue:{fields:e.fields}}),a=Me.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function nP(n,e){return"found"in e?function(t,r){ne(!!r.found),r.found.name,r.found.updateTime;const i=Fn(t,r.found.name),s=Qe(r.found.updateTime),o=r.found.createTime?Qe(r.found.createTime):te.min(),a=new wt({mapValue:{fields:r.found.fields}});return Me.newFoundDocument(i,s,o,a)}(n,e):"missing"in e?function(t,r){ne(!!r.missing),ne(!!r.readTime);const i=Fn(t,r.missing),s=Qe(r.readTime);return Me.newNoDocument(i,s)}(n,e):W()}function rP(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.useProto3Json?(ne(u===void 0||typeof u=="string"),it.fromBase64String(u||"")):(ne(u===void 0||u instanceof Uint8Array),it.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?T.UNKNOWN:ab(c.code);return new R(u,c.message||"")}(o);t=new lb(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Fn(n,r.document.name),s=Qe(r.document.updateTime),o=r.document.createTime?Qe(r.document.createTime):te.min(),a=new wt({mapValue:{fields:r.document.fields}}),c=Me.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new Mc(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Fn(n,r.document),s=r.readTime?Qe(r.readTime):te.min(),o=Me.newNoDocument(i,s),a=r.removedTargetIds||[];t=new Mc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Fn(n,r.document),s=r.removedTargetIds||[];t=new Mc([],s,i,null)}else{if(!("filter"in e))return W();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new WD(i,s),a=r.targetId;t=new ub(a,o)}}return t}function va(n,e){let t;if(e instanceof Zs)t={update:ry(n,e.key,e.value)};else if(e instanceof eo)t={delete:ga(n,e.key)};else if(e instanceof ur)t={update:ry(n,e.key,e.data),updateMask:uP(e.fieldMask)};else{if(!(e instanceof Wf))return W();t={verify:ga(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Ds)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Pi)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Oi)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ps)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw W()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:tP(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:W()}(n,e.precondition)),t}function sd(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?Ve.updateTime(Qe(i.updateTime)):i.exists!==void 0?Ve.exists(i.exists):Ve.none()}(e.currentDocument):Ve.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)ne(o.setToServerValue==="REQUEST_TIME"),a=new Ds;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new Pi(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new Oi(u)}else"increment"in o?a=new Ps(s,o.increment):W();const c=We.fromServerFormat(o.fieldPath);return new ja(c,a)}(n,i)):[];if(e.update){e.update.name;const i=Fn(n,e.update.name),s=new wt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Kt(c.map(u=>We.fromServerFormat(u)))}(e.updateMask);return new ur(i,s,o,t,r)}return new Zs(i,s,t,r)}if(e.delete){const i=Fn(n,e.delete);return new eo(i,t)}if(e.verify){const i=Fn(n,e.verify);return new Wf(i,t)}return W()}function iP(n,e){return n&&n.length>0?(ne(e!==void 0),n.map(t=>function(r,i){let s=r.updateTime?Qe(r.updateTime):Qe(i);return s.isEqual(te.min())&&(s=Qe(i)),new KD(s,r.transformResults||[])}(t,e))):[]}function gb(n,e){return{documents:[id(n,e.path)]}}function yb(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=id(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=id(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return _b(Re.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:ns(l.field),direction:oP(l.dir)}}(u))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=rd(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function vb(n){let e=fb(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ne(r===1);const l=t.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];t.where&&(s=function(l){const h=wb(l);return h instanceof Re&&zf(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new vs(rs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Va(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Vr(d,h)}(t.startAt));let u=null;return t.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Vr(d,h)}(t.endAt)),zI(e,i,o,s,a,"F",c,u)}function sP(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function wb(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=rs(e.unaryFilter.field);return ye.create(t,"==",{doubleValue:NaN});case"IS_NULL":const r=rs(e.unaryFilter.field);return ye.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=rs(e.unaryFilter.field);return ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=rs(e.unaryFilter.field);return ye.create(s,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(n):n.fieldFilter!==void 0?function(e){return ye.create(rs(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Re.create(e.compositeFilter.filters.map(t=>wb(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return W()}}(e.compositeFilter.op))}(n):W()}function oP(n){return JD[n]}function aP(n){return XD[n]}function cP(n){return ZD[n]}function ns(n){return{fieldPath:n.canonicalString()}}function rs(n){return We.fromServerFormat(n.fieldPath)}function _b(n){return n instanceof ye?function(e){if(e.op==="=="){if(Bg(e.value))return{unaryFilter:{field:ns(e.field),op:"IS_NAN"}};if(Vg(e.value))return{unaryFilter:{field:ns(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Bg(e.value))return{unaryFilter:{field:ns(e.field),op:"IS_NOT_NAN"}};if(Vg(e.value))return{unaryFilter:{field:ns(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ns(e.field),op:aP(e.op),value:e.value}}}(n):n instanceof Re?function(e){const t=e.getFilters().map(r=>_b(r));return t.length===1?t[0]:{compositeFilter:{op:cP(e.op),filters:t}}}(n):W()}function uP(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ib(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Jn{constructor(e,t,r,i,s=te.min(),o=te.min(),a=it.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class bb{constructor(e){this.fe=e}}function lP(n,e){let t;if(e.document)t=mb(n.fe,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=j.fromSegments(e.noDocument.path),i=Li(e.noDocument.readTime);t=Me.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return W();{const r=j.fromSegments(e.unknownDocument.path),i=Li(e.unknownDocument.version);t=Me.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(r){const i=new Be(r[0],r[1]);return te.fromTimestamp(i)}(e.readTime)),t}function iy(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:pu(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:ga(i,s.key),fields:s.data.value.mapValue.fields,updateTime:Os(i,s.version.toTimestamp()),createTime:Os(i,s.createTime.toTimestamp())}}(n.fe,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Mi(e.version)};else{if(!e.isUnknownDocument())return W();r.unknownDocument={path:t.path.toArray(),version:Mi(e.version)}}return r}function pu(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Mi(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Li(n){const e=new Be(n.seconds,n.nanoseconds);return te.fromTimestamp(e)}function ci(n,e){const t=(e.baseMutations||[]).map(s=>sd(n.fe,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>sd(n.fe,s)),i=Be.fromMillis(e.localWriteTimeMs);return new Qf(e.batchId,i,t,r)}function No(n){const e=Li(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Li(n.lastLimboFreeSnapshotVersion):te.min();let r;var i;return n.query.documents!==void 0?(ne((i=n.query).documents.length===1),r=Wt(Xs(fb(i.documents[0])))):r=function(s){return Wt(vb(s))}(n.query),new Jn(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,it.fromBase64String(n.resumeToken))}function Eb(n,e){const t=Mi(e.snapshotVersion),r=Mi(e.lastLimboFreeSnapshotVersion);let i;i=hu(e.target)?gb(n.fe,e.target):yb(n.fe,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Di(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function tp(n){const e=vb({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?fu(e,e.limit,"L"):e}function oh(n,e){return new Jf(e.largestBatchId,sd(n.fe,e.overlayMutation))}function sy(n,e){const t=e.path.lastSegment();return[n,Vt(e.path.popLast()),t]}function oy(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:Mi(r.readTime),documentKey:Vt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class hP{getBundleMetadata(e,t){return ay(e).get(t).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Li(i.createTime),version:i.version};var i})}saveBundleMetadata(e,t){return ay(e).put({bundleId:(r=t).id,createTime:Mi(Qe(r.createTime)),version:r.version});var r}getNamedQuery(e,t){return cy(e).get(t).next(r=>{if(r)return{name:(i=r).name,query:tp(i.bundledQuery),readTime:Li(i.readTime)};var i})}saveNamedQuery(e,t){return cy(e).put(function(r){return{name:r.name,readTime:Mi(Qe(r.readTime)),bundledQuery:r.bundledQuery}}(t))}}function ay(n){return pt(n,"bundles")}function cy(n){return pt(n,"namedQueries")}/**
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
 */class pl{constructor(e,t){this.serializer=e,this.userId=t}static de(e,t){const r=t.uid||"";return new pl(e,r)}getOverlay(e,t){return mo(e).get(sy(this.userId,t)).next(r=>r?oh(this.serializer,r):null)}getOverlays(e,t){const r=On();return E.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new Jf(t,o);i.push(this.we(e,a))}),E.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Vt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(mo(e).J("collectionPathOverlayIndex",a))}),E.waitFor(s)}getOverlaysForCollection(e,t,r){const i=On(),s=Vt(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return mo(e).j("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=oh(this.serializer,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=On();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return mo(e).X({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=oh(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}we(e,t){return mo(e).put(function(r,i,s){const[o,a,c]=sy(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:c,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:va(r.fe,s.mutation)}}(this.serializer,this.userId,t))}}function mo(n){return pt(n,"documentOverlays")}/**
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
 */class ui{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(ze(e.integerValue));else if("doubleValue"in e){const r=ze(e.doubleValue);isNaN(r)?this.ye(t,13):(this.ye(t,15),da(r)?t.pe(0):t.pe(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ye(t,20),typeof r=="string"?t.Ie(r):(t.Ie(`${r.seconds||""}`),t.pe(r.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(Lr(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ye(t,45),t.pe(r.latitude||0),t.pe(r.longitude||0)}else"mapValue"in e?MI(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):W()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const r=e.fields||{};this.ye(t,55);for(const i of Object.keys(r))this.Te(i,t),this.me(r[i],t)}Pe(e,t){const r=e.values||[];this.ye(t,50);for(const i of r)this.me(i,t)}ve(e,t){this.ye(t,37),j.fromName(e).path.forEach(r=>{this.ye(t,60),this.be(r,t)})}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}ui.Ve=new ui;function dP(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function uy(n){const e=64-function(t){let r=0;for(let i=0;i<8;++i){const s=dP(255&t[i]);if(r+=s,s!==8)break}return r}(n);return Math.ceil(e/8)}class fP{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.De(r.value),r=t.next();this.Ce()}xe(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ne(r.value),r=t.next();this.ke()}Me(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.De(r);else if(r<2048)this.De(960|r>>>6),this.De(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.De(480|r>>>12),this.De(128|63&r>>>6),this.De(128|63&r);else{const i=t.codePointAt(0);this.De(240|i>>>18),this.De(128|63&i>>>12),this.De(128|63&i>>>6),this.De(128|63&i)}}this.Ce()}$e(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ne(r);else if(r<2048)this.Ne(960|r>>>6),this.Ne(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ne(480|r>>>12),this.Ne(128|63&r>>>6),this.Ne(128|63&r);else{const i=t.codePointAt(0);this.Ne(240|i>>>18),this.Ne(128|63&i>>>12),this.Ne(128|63&i>>>6),this.Ne(128|63&i)}}this.ke()}Oe(e){const t=this.Fe(e),r=uy(t);this.Be(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Le(e){const t=this.Fe(e),r=uy(t);this.Be(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const t=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}De(e){const t=255&e;t===0?(this.Ue(0),this.Ue(255)):t===255?(this.Ue(255),this.Ue(0)):this.Ue(t)}Ne(e){const t=255&e;t===0?(this.Ge(0),this.Ge(255)):t===255?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class pP{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class mP{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class go{constructor(){this.je=new fP,this.ze=new pP(this.je),this.We=new mP(this.je)}seed(e){this.je.seed(e)}He(e){return e===0?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}/**
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
 */class li{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Je(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new li(this.indexId,this.documentKey,this.arrayValue,r)}}function pr(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=ly(n.arrayValue,e.arrayValue),t!==0?t:(t=ly(n.directionalValue,e.directionalValue),t!==0?t:j.comparator(n.documentKey,e.documentKey)))}function ly(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class gP{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const t of e.filters){const r=t;r.isInequality()?this.Ze=r:this.Xe.push(r)}}tn(e){ne(e.collectionGroup===this.collectionId);const t=Wh(e);if(t!==void 0&&!this.en(t))return!1;const r=ri(e);let i=0,s=0;for(;i<r.length&&this.en(r[i]);++i);if(i===r.length)return!0;if(this.Ze!==void 0){const o=r[i];if(!this.nn(this.Ze,o)||!this.sn(this.Ye[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Ye.length||!this.sn(this.Ye[s++],o))return!1}return!0}en(e){for(const t of this.Xe)if(this.nn(t,e))return!0;return!1}nn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Tb(n){var e,t;if(ne(n instanceof ye||n instanceof Re),n instanceof ye){if(n instanceof jI){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>ye.create(n.field,"==",s)))||[];return Re.create(i,"or")}return n}const r=n.filters.map(i=>Tb(i));return Re.create(r,n.op)}function yP(n){if(n.getFilters().length===0)return[];const e=cd(Tb(n));return ne(Sb(e)),od(e)||ad(e)?[e]:e.getFilters()}function od(n){return n instanceof ye}function ad(n){return n instanceof Re&&zf(n)}function Sb(n){return od(n)||ad(n)||function(e){if(e instanceof Re&&Xh(e)){for(const t of e.getFilters())if(!od(t)&&!ad(t))return!1;return!0}return!1}(n)}function cd(n){if(ne(n instanceof ye||n instanceof Re),n instanceof ye)return n;if(n.filters.length===1)return cd(n.filters[0]);const e=n.filters.map(r=>cd(r));let t=Re.create(e,n.op);return t=mu(t),Sb(t)?t:(ne(t instanceof Re),ne(Ns(t)),ne(t.filters.length>1),t.filters.reduce((r,i)=>np(r,i)))}function np(n,e){let t;return ne(n instanceof ye||n instanceof Re),ne(e instanceof ye||e instanceof Re),t=n instanceof ye?e instanceof ye?function(r,i){return Re.create([r,i],"and")}(n,e):hy(n,e):e instanceof ye?hy(e,n):function(r,i){if(ne(r.filters.length>0&&i.filters.length>0),Ns(r)&&Ns(i))return BI(r,i.getFilters());const s=Xh(r)?r:i,o=Xh(r)?i:r,a=s.filters.map(c=>np(c,o));return Re.create(a,"or")}(n,e),mu(t)}function hy(n,e){if(Ns(e))return BI(e,n.getFilters());{const t=e.filters.map(r=>np(n,r));return Re.create(t,"or")}}function mu(n){if(ne(n instanceof ye||n instanceof Re),n instanceof ye)return n;const e=n.getFilters();if(e.length===1)return mu(e[0]);if(UI(n))return n;const t=e.map(i=>mu(i)),r=[];return t.forEach(i=>{i instanceof ye?r.push(i):i instanceof Re&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:Re.create(r,n.op)}/**
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
 */class vP{constructor(){this.rn=new rp}addToCollectionParentIndex(e,t){return this.rn.add(t),E.resolve()}getCollectionParents(e,t){return E.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return E.resolve()}deleteFieldIndex(e,t){return E.resolve()}getDocumentsMatchingTarget(e,t){return E.resolve(null)}getIndexType(e,t){return E.resolve(0)}getFieldIndexes(e,t){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,t){return E.resolve(Xt.min())}getMinOffsetFromCollectionGroup(e,t){return E.resolve(Xt.min())}updateCollectionGroup(e,t,r){return E.resolve()}updateIndexEntries(e,t){return E.resolve()}}class rp{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Le(_e.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Le(_e.comparator)).toArray()}}/**
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
 */const pc=new Uint8Array(0);class wP{constructor(e,t){this.user=e,this.databaseId=t,this.on=new rp,this.un=new Qr(r=>Di(r),(r,i)=>Ba(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.on.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.on.add(t)});const s={collectionId:r,parent:Vt(i)};return dy(e).put(s)}return E.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[bI(t),""],!1,!0);return dy(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(Pn(o.parent))}return r})}addFieldIndex(e,t){const r=mc(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=vo(e);return s.next(a=>{o.put(oy(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=mc(e),i=vo(e),s=yo(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const r=yo(e);let i=!0;const s=new Map;return E.forEach(this.cn(t),o=>this.an(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=pe();const a=[];return E.forEach(s,(c,u)=>{var l;P("IndexedDbIndexManager",`Using index ${l=c,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(L=>`${L.fieldPath}:${L.kind}`).join(",")}`} to execute ${Di(t)}`);const h=function(L,N){const he=Wh(N);if(he===void 0)return null;for(const x of du(L,he.fieldPath))switch(x.op){case"array-contains-any":return x.value.arrayValue.values||[];case"array-contains":return[x.value]}return null}(u,c),d=function(L,N){const he=new Map;for(const x of ri(N))for(const Ee of du(L,x.fieldPath))switch(Ee.op){case"==":case"in":he.set(x.fieldPath.canonicalString(),Ee.value);break;case"not-in":case"!=":return he.set(x.fieldPath.canonicalString(),Ee.value),Array.from(he.values())}return null}(u,c),f=function(L,N){const he=[];let x=!0;for(const Ee of ri(N)){const ae=Ee.kind===0?Kg(L,Ee.fieldPath,L.startAt):Gg(L,Ee.fieldPath,L.startAt);he.push(ae.value),x&&(x=ae.inclusive)}return new Vr(he,x)}(u,c),m=function(L,N){const he=[];let x=!0;for(const Ee of ri(N)){const ae=Ee.kind===0?Gg(L,Ee.fieldPath,L.endAt):Kg(L,Ee.fieldPath,L.endAt);he.push(ae.value),x&&(x=ae.inclusive)}return new Vr(he,x)}(u,c),p=this.hn(c,u,f),y=this.hn(c,u,m),_=this.ln(c,u,d),S=this.fn(c.indexId,h,p,f.inclusive,y,m.inclusive,_);return E.forEach(S,L=>r.H(L,t.limit).next(N=>{N.forEach(he=>{const x=j.fromSegments(he.documentKey);o.has(x)||(o=o.add(x),a.push(x))})}))}).next(()=>a)}return E.resolve(null)})}cn(e){let t=this.un.get(e);return t||(e.filters.length===0?t=[e]:t=yP(Re.create(e.filters,"and")).map(r=>ed(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,t),t)}fn(e,t,r,i,s,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,s.length),u=c/(t!=null?t.length:1),l=[];for(let h=0;h<c;++h){const d=t?this.dn(t[h/u]):pc,f=this.wn(e,d,r[h%u],i),m=this._n(e,d,s[h%u],o),p=a.map(y=>this.wn(e,d,y,!0));l.push(...this.createRange(f,m,p))}return l}wn(e,t,r,i){const s=new li(e,j.empty(),t,r);return i?s:s.Je()}_n(e,t,r,i){const s=new li(e,j.empty(),t,r);return i?s.Je():s}an(e,t){const r=new gP(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.cn(t);return E.forEach(i,s=>this.an(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let c=new Le(We.comparator),u=!1;for(const l of a.filters)for(const h of l.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?u=!0:c=c.add(h.field));for(const l of a.orderBy)l.field.isKeyField()||(c=c.add(l.field));return c.size+(u?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(t)&&i.length>1&&r===2?1:r)}mn(e,t){const r=new go;for(const i of ri(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.He(i.kind);ui.Ve._e(s,o)}return r.Qe()}dn(e){const t=new go;return ui.Ve._e(e,t.He(0)),t.Qe()}gn(e,t){const r=new go;return ui.Ve._e(Ni(this.databaseId,t),r.He(function(i){const s=ri(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Qe()}ln(e,t,r){if(r===null)return[];let i=[];i.push(new go);let s=0;for(const o of ri(e)){const a=r[s++];for(const c of i)if(this.yn(t,o.fieldPath)&&ma(a))i=this.pn(i,o,a);else{const u=c.He(o.kind);ui.Ve._e(a,u)}}return this.In(i)}hn(e,t,r){return this.ln(e,t,r.position)}In(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Qe();return t}pn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new go;c.seed(a.Qe()),ui.Ve._e(o,c.He(t.kind)),s.push(c)}return s}yn(e,t){return!!e.filters.find(r=>r instanceof ye&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=mc(e),i=vo(e);return(t?r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.j()).next(s=>{const o=[];return E.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new lu(l.sequenceNumber,new Xt(Li(l.readTime),new j(Pn(l.documentKey)),l.largestBatchId)):lu.empty(),d=u.fields.map(([f,m])=>new tD(We.fromServerFormat(f),m));return new EI(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:fe(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=mc(e),s=vo(e);return this.Tn(e).next(o=>i.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>E.forEach(a,c=>s.put(oy(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return E.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?E.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),E.forEach(a,c=>this.En(e,i,c).next(u=>{const l=this.An(s,c);return u.isEqual(l)?E.resolve():this.vn(e,s,c,u,l)}))))})}Rn(e,t,r,i){return yo(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.gn(r,t.key),documentKey:t.key.path.toArray()})}Pn(e,t,r,i){return yo(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.gn(r,t.key),t.key.path.toArray()])}En(e,t,r){const i=yo(e);let s=new Le(pr);return i.X({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.gn(r,t)])},(o,a)=>{s=s.add(new li(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}An(e,t){let r=new Le(pr);const i=this.mn(t,e);if(i==null)return r;const s=Wh(t);if(s!=null){const o=e.data.field(s.fieldPath);if(ma(o))for(const a of o.arrayValue.values||[])r=r.add(new li(t.indexId,e.key,this.dn(a),i))}else r=r.add(new li(t.indexId,e.key,pc,i));return r}vn(e,t,r,i,s){P("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,c,u,l,h){const d=a.getIterator(),f=c.getIterator();let m=Xi(d),p=Xi(f);for(;m||p;){let y=!1,_=!1;if(m&&p){const S=u(m,p);S<0?_=!0:S>0&&(y=!0)}else m!=null?_=!0:y=!0;y?(l(p),p=Xi(f)):_?(h(m),m=Xi(d)):(m=Xi(d),p=Xi(f))}}(i,s,pr,a=>{o.push(this.Rn(e,t,r,a))},a=>{o.push(this.Pn(e,t,r,a))}),E.waitFor(o)}Tn(e){let t=1;return vo(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>pr(o,a)).filter((o,a,c)=>!a||pr(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=pr(o,e),c=pr(o,t);if(a===0)i[0]=e.Je();else if(a>0&&c<0)i.push(o),i.push(o.Je());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,pc,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,pc,[]];s.push(IDBKeyRange.bound(a,c))}return s}bn(e,t){return pr(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(fy)}getMinOffset(e,t){return E.mapArray(this.cn(t),r=>this.an(e,r).next(i=>i||W())).next(fy)}}function dy(n){return pt(n,"collectionParents")}function yo(n){return pt(n,"indexEntries")}function mc(n){return pt(n,"indexConfiguration")}function vo(n){return pt(n,"indexState")}function fy(n){ne(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;$f(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Xt(e.readTime,e.documentKey,t)}/**
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
 */const py={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class qt{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new qt(e,qt.DEFAULT_COLLECTION_PERCENTILE,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function Cb(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.X({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{ne(a===1)}));const u=[];for(const l of t.mutations){const h=RI(e,l.key.path,t.batchId);s.push(i.delete(h)),u.push(l.key)}return E.waitFor(s).next(()=>u)}function gu(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw W();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */qt.DEFAULT_COLLECTION_PERCENTILE=10,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qt.DEFAULT=new qt(41943040,qt.DEFAULT_COLLECTION_PERCENTILE,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qt.DISABLED=new qt(-1,0,0);class ml{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Vn={}}static de(e,t,r,i){ne(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new ml(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return mr(e).X({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=is(e),o=mr(e);return o.add({}).next(a=>{ne(typeof a=="number");const c=new Qf(a,t,r,i),u=function(d,f,m){const p=m.baseMutations.map(_=>va(d.fe,_)),y=m.mutations.map(_=>va(d.fe,_));return{userId:f,batchId:m.batchId,localWriteTimeMs:m.localWriteTime.toMillis(),baseMutations:p,mutations:y}}(this.serializer,this.userId,c),l=[];let h=new Le((d,f)=>fe(d.canonicalString(),f.canonicalString()));for(const d of i){const f=RI(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(f,aD))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Vn[a]=c.keys()}),E.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return mr(e).get(t).next(r=>r?(ne(r.userId===this.userId),ci(this.serializer,r)):null)}Sn(e,t){return this.Vn[t]?E.resolve(this.Vn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Vn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return mr(e).X({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(ne(a.batchId>=r),s=ci(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return mr(e).X({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return mr(e).j("userMutationsIndex",t).next(r=>r.map(i=>ci(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Nc(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return is(e).X({range:i},(o,a,c)=>{const[u,l,h]=o,d=Pn(l);if(u===this.userId&&t.path.isEqual(d))return mr(e).get(h).next(f=>{if(!f)throw W();ne(f.userId===this.userId),s.push(ci(this.serializer,f))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Le(fe);const i=[];return t.forEach(s=>{const o=Nc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=is(e).X({range:a},(u,l,h)=>{const[d,f,m]=u,p=Pn(f);d===this.userId&&s.path.isEqual(p)?r=r.add(m):h.done()});i.push(c)}),E.waitFor(i).next(()=>this.Dn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=Nc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Le(fe);return is(e).X({range:o},(c,u,l)=>{const[h,d,f]=c,m=Pn(d);h===this.userId&&r.isPrefixOf(m)?m.length===i&&(a=a.add(f)):l.done()}).next(()=>this.Dn(e,a))}Dn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(mr(e).get(s).next(o=>{if(o===null)throw W();ne(o.userId===this.userId),r.push(ci(this.serializer,o))}))}),E.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return Cb(e.ht,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Cn(t.batchId)}),E.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return E.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return is(e).X({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=Pn(s[1]);i.push(c)}else a.done()}).next(()=>{ne(i.length===0)})})}containsKey(e,t){return kb(e,this.userId,t)}xn(e){return Ab(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function kb(n,e,t){const r=Nc(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return is(n).X({range:s,Y:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function mr(n){return pt(n,"mutations")}function is(n){return pt(n,"documentMutations")}function Ab(n){return pt(n,"mutationQueues")}/**
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
 */class Fi{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Fi(0)}static Mn(){return new Fi(-1)}}/**
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
 */class _P{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.$n(e).next(t=>{const r=new Fi(t.highestTargetId);return t.highestTargetId=r.next(),this.On(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.$n(e).next(t=>te.fromTimestamp(new Be(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.$n(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.$n(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.On(e,i)))}addTargetData(e,t){return this.Fn(e,t).next(()=>this.$n(e).next(r=>(r.targetCount+=1,this.Bn(t,r),this.On(e,r))))}updateTargetData(e,t){return this.Fn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Zi(e).delete(t.targetId)).next(()=>this.$n(e)).next(r=>(ne(r.targetCount>0),r.targetCount-=1,this.On(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return Zi(e).X((o,a)=>{const c=No(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>E.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Zi(e).X((r,i)=>{const s=No(i);t(s)})}$n(e){return my(e).get("targetGlobalKey").next(t=>(ne(t!==null),t))}On(e,t){return my(e).put("targetGlobalKey",t)}Fn(e,t){return Zi(e).put(Eb(this.serializer,t))}Bn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.$n(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Di(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Zi(e).X({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=No(a);Ba(t,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=wr(e);return t.forEach(o=>{const a=Vt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),E.waitFor(i)}removeMatchingKeys(e,t,r){const i=wr(e);return E.forEach(t,s=>{const o=Vt(s.path);return E.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=wr(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=wr(e);let s=pe();return i.X({range:r,Y:!0},(o,a,c)=>{const u=Pn(o[1]),l=new j(u);s=s.add(l)}).next(()=>s)}containsKey(e,t){const r=Vt(t.path),i=IDBKeyRange.bound([r],[bI(r)],!1,!0);let s=0;return wr(e).X({index:"documentTargetsIndex",Y:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}le(e,t){return Zi(e).get(t).next(r=>r?No(r):null)}}function Zi(n){return pt(n,"targets")}function my(n){return pt(n,"targetGlobal")}function wr(n){return pt(n,"targetDocuments")}/**
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
 */function gy([n,e],[t,r]){const i=fe(n,t);return i===0?fe(e,r):i}class IP{constructor(e){this.Ln=e,this.buffer=new Le(gy),this.qn=0}Un(){return++this.qn}Kn(e){const t=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();gy(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class bP{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}Qn(e){P("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Wr(t)?P("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Hr(t)}await this.Qn(3e5)})}}class EP{constructor(e,t){this.jn=e,this.params=t}calculateTargetCount(e,t){return this.jn.zn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return E.resolve(zt.ct);const r=new IP(t);return this.jn.forEachTarget(e,i=>r.Kn(i.sequenceNumber)).next(()=>this.jn.Wn(e,i=>r.Kn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(P("LruGarbageCollector","Garbage collection skipped; disabled"),E.resolve(py)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(P("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),py):this.Hn(e,t))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,t){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(P("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),Hh()<=we.DEBUG&&P("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),E.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function TP(n,e){return new EP(n,e)}/**
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
 */class SP{constructor(e,t){this.db=e,this.garbageCollector=TP(this,t)}zn(e){const t=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Jn(e){let t=0;return this.Wn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Wn(e,t){return this.Yn(e,(r,i)=>t(i))}addReference(e,t,r){return gc(e,r)}removeReference(e,t,r){return gc(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return gc(e,t)}Xn(e,t){return function(r,i){let s=!1;return Ab(r).Z(o=>kb(r,o,i).next(a=>(a&&(s=!0),E.resolve(!a)))).next(()=>s)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Yn(e,(o,a)=>{if(a<=t){const c=this.Xn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,te.min()),wr(e).delete([0,Vt(o.path)])))});i.push(c)}}).next(()=>E.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return gc(e,t)}Yn(e,t){const r=wr(e);let i,s=zt.ct;return r.X({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==zt.ct&&t(new j(Pn(i)),s),s=u,i=c):s=zt.ct}).next(()=>{s!==zt.ct&&t(new j(Pn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function gc(n,e){return wr(n).put(function(t,r){return{targetId:0,path:Vt(t.path),sequenceNumber:r}}(e,n.currentSequenceNumber))}/**
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
 */class Rb{constructor(){this.changes=new Qr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Me.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?E.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class CP{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return ti(e).put(r)}removeEntry(e,t,r){return ti(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],pu(s),o[o.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Zn(e,r)))}getEntry(e,t){let r=Me.newInvalidDocument(t);return ti(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(wo(t))},(i,s)=>{r=this.ts(t,s)}).next(()=>r)}es(e,t){let r={size:0,document:Me.newInvalidDocument(t)};return ti(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(wo(t))},(i,s)=>{r={document:this.ts(t,s),size:gu(s)}}).next(()=>r)}getEntries(e,t){let r=Gt();return this.ns(e,t,(i,s)=>{const o=this.ts(i,s);r=r.insert(i,o)}).next(()=>r)}ss(e,t){let r=Gt(),i=new Pe(j.comparator);return this.ns(e,t,(s,o)=>{const a=this.ts(s,o);r=r.insert(s,a),i=i.insert(s,gu(o))}).next(()=>({documents:r,rs:i}))}ns(e,t,r){if(t.isEmpty())return E.resolve();let i=new Le(wy);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(wo(i.first()),wo(i.last())),o=i.getIterator();let a=o.getNext();return ti(e).X({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=j.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&wy(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.G(wo(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i){const s=t.path,o=[s.popLast().toArray(),s.lastSegment(),pu(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ti(e).j(IDBKeyRange.bound(o,a,!0)).next(c=>{let u=Gt();for(const l of c){const h=this.ts(j.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);h.isFoundDocument()&&(qa(t,h)||i.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,t,r,i){let s=Gt();const o=vy(t,r),a=vy(t,Xt.max());return ti(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.ts(j.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new kP(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return yy(e).get("remoteDocumentGlobalKey").next(t=>(ne(!!t),t))}Zn(e,t){return yy(e).put("remoteDocumentGlobalKey",t)}ts(e,t){if(t){const r=lP(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(te.min())))return r}return Me.newInvalidDocument(e)}}function xb(n){return new CP(n)}class kP extends Rb{constructor(e,t){super(),this.os=e,this.trackRemovals=t,this.us=new Qr(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new Le((s,o)=>fe(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.us.get(s);if(t.push(this.os.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=iy(this.os.serializer,o);i=i.add(s.path.popLast());const u=gu(c);r+=u-a.size,t.push(this.os.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=iy(this.os.serializer,o.convertToNoDocument(te.min()));t.push(this.os.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.os.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.os.updateMetadata(e,r)),E.waitFor(t)}getFromCache(e,t){return this.os.es(e,t).next(r=>(this.us.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.os.ss(e,t).next(({documents:r,rs:i})=>(i.forEach((s,o)=>{this.us.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function yy(n){return pt(n,"remoteDocumentGlobal")}function ti(n){return pt(n,"remoteDocumentsV14")}function wo(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function vy(n,e){const t=e.documentKey.path.toArray();return[n,pu(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function wy(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=fe(t[s],r[s]),i)return i;return i=fe(t.length,r.length),i||(i=fe(t[t.length-2],r[r.length-2]),i||fe(t[t.length-1],r[r.length-1]))}/**
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
 */class AP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Nb{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&qo(r.mutation,i,Kt.empty(),Be.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,pe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=pe()){const i=On();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=Ro();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=On();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,pe()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=Gt();const o=$o(),a=$o();return t.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof ur)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),qo(l.mutation,u,l.mutation.getFieldMask(),Be.now())):o.set(u.key,Kt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new AP(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=$o();let i=new Pe((o,a)=>o-a),s=pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||Kt.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||pe()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=YI();l.forEach(d=>{if(!s.has(d)){const f=ib(t.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return E.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(i){return j.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Gf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):E.resolve(On());let a=-1,c=s;return o.next(u=>E.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?E.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,pe())).next(l=>({batchId:a,changes:QI(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new j(t)).next(r=>{let i=Ro();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const i=t.collectionGroup;let s=Ro();return this.indexManager.getCollectionParents(e,i).next(o=>E.forEach(o,a=>{const c=function(u,l){return new cr(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i))).next(s=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,Me.newInvalidDocument(u)))});let o=Ro();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&qo(u.mutation,c,Kt.empty(),Be.now()),qa(t,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class RP{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return E.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var r;return this.cs.set(t.id,{id:(r=t).id,version:r.version,createTime:Qe(r.createTime)}),E.resolve()}getNamedQuery(e,t){return E.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(r){return{name:r.name,query:tp(r.bundledQuery),readTime:Qe(r.readTime)}}(t)),E.resolve()}}/**
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
 */class xP{constructor(){this.overlays=new Pe(j.comparator),this.ls=new Map}getOverlay(e,t){return E.resolve(this.overlays.get(t))}getOverlays(e,t){const r=On();return E.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.we(e,t,s)}),E.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),E.resolve()}getOverlaysForCollection(e,t,r){const i=On(),s=t.length+1,o=new j(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return E.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Pe((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=On(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=On(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return E.resolve(a)}we(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Jf(t,r));let s=this.ls.get(t);s===void 0&&(s=pe(),this.ls.set(t,s)),this.ls.set(t,s.add(r.key))}}/**
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
 */class ip{constructor(){this.fs=new Le(at.ds),this.ws=new Le(at._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const r=new at(e,t);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.ys(new at(e,t))}ps(e,t){e.forEach(r=>this.removeReference(r,t))}Is(e){const t=new j(new _e([])),r=new at(t,e),i=new at(t,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new j(new _e([])),r=new at(t,e),i=new at(t,e+1);let s=pe();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new at(e,0),r=this.fs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class at{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return j.comparator(e.key,t.key)||fe(e.As,t.As)}static _s(e,t){return fe(e.As,t.As)||j.comparator(e.key,t.key)}}/**
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
 */class NP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new Le(at.ds)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Qf(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new at(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,t){return E.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.bs(r),s=i<0?0:i;return E.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new at(t,0),i=new at(t,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),E.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Le(fe);return t.forEach(i=>{const s=new at(i,0),o=new at(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),E.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;j.isDocumentKey(s)||(s=s.child(""));const o=new at(new j(s),0);let a=new Le(fe);return this.Rs.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.As)),!0)},o),E.resolve(this.Vs(a))}Vs(e){const t=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ne(this.Ss(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return E.forEach(t.mutations,i=>{const s=new at(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,t){const r=new at(t,0),i=this.Rs.firstAfterOrEqual(r);return E.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}Ss(e,t){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class DP{constructor(e){this.Ds=e,this.docs=new Pe(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return E.resolve(r?r.document.mutableCopy():Me.newInvalidDocument(t))}getEntries(e,t){let r=Gt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Me.newInvalidDocument(i))}),E.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Gt();const o=t.path,a=new j(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||$f(SI(l),r)<=0||(i.has(l.key)||qa(t,l))&&(s=s.insert(l.key,l.mutableCopy()))}return E.resolve(s)}getAllFromCollectionGroup(e,t,r,i){W()}Cs(e,t){return E.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new PP(this)}getSize(e){return E.resolve(this.size)}}class PP extends Rb{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),E.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}/**
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
 */class OP{constructor(e){this.persistence=e,this.xs=new Qr(t=>Di(t),Ba),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Ns=0,this.ks=new ip,this.targetCount=0,this.Ms=Fi.kn()}forEachTarget(e,t){return this.xs.forEach((r,i)=>t(i)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Ns&&(this.Ns=t),E.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new Fi(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,E.resolve()}updateTargetData(e,t){return this.Fn(t),E.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),E.waitFor(s).next(()=>i)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,t){const r=this.xs.get(t)||null;return E.resolve(r)}addMatchingKeys(e,t,r){return this.ks.gs(t,r),E.resolve()}removeMatchingKeys(e,t,r){this.ks.ps(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),E.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),E.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ks.Es(t);return E.resolve(r)}containsKey(e,t){return E.resolve(this.ks.containsKey(t))}}/**
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
 */class Db{constructor(e,t){this.$s={},this.overlays={},this.Os=new zt(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new OP(this),this.indexManager=new vP,this.remoteDocumentCache=function(r){return new DP(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new bb(t),this.qs=new RP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new xP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.$s[e.toKey()];return r||(r=new NP(t,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,r){P("MemoryPersistence","Starting transaction:",e);const i=new MP(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,t){return E.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,t)))}}class MP extends kI{constructor(e){super(),this.currentSequenceNumber=e}}class gl{constructor(e){this.persistence=e,this.Qs=new ip,this.js=null}static zs(e){return new gl(e)}get Ws(){if(this.js)return this.js;throw W()}addReference(e,t,r){return this.Qs.addReference(r,t),this.Ws.delete(r.toString()),E.resolve()}removeReference(e,t,r){return this.Qs.removeReference(r,t),this.Ws.add(r.toString()),E.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),E.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Ws,r=>{const i=j.fromPath(r);return this.Hs(e,i).next(s=>{s||t.removeEntry(i,te.min())})}).next(()=>(this.js=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hs(e,t).next(r=>{r?this.Ws.delete(t.toString()):this.Ws.add(t.toString())})}Ls(e){return 0}Hs(e,t){return E.or([()=>E.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}/**
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
 */class LP{constructor(e){this.serializer=e}O(e,t,r,i){const s=new ul("createOrUpgrade",t);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Mg,{unique:!0}),a.createObjectStore("documentMutations")}(e),_y(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=E.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),_y(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:te.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").j().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Mg,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return E.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Ys(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(s)))),r<7&&i>=7&&(o=o.next(()=>this.Zs(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ei(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:wD});c.createIndex("collectionPathOverlayIndex",_D,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",ID,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:cD});c.createIndex("documentKeyIndex",uD),c.createIndex("collectionGroupIndex",lD)}(e)).next(()=>this.ni(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:mD}).createIndex("sequenceNumberIndex",gD,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:yD}).createIndex("documentKeyIndex",vD,{unique:!1})}(e))),o}Xs(e){let t=0;return e.store("remoteDocuments").X((r,i)=>{t+=gu(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Ys(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.j().next(i=>E.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>E.forEach(a,c=>{ne(c.userId===s.userId);const u=ci(this.serializer,c);return Cb(e,s.userId,u).next(()=>{})}))}))}Zs(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.X((o,a)=>{const c=new _e(o),u=function(l){return[0,Vt(l)]}(c);s.push(t.get(u).next(l=>l?E.resolve():(h=>t.put({targetId:0,path:Vt(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>E.waitFor(s))})}ti(e,t){e.createObjectStore("collectionParents",{keyPath:pD});const r=t.store("collectionParents"),i=new rp,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Vt(c)})}};return t.store("remoteDocuments").X({Y:!0},(o,a)=>{const c=new _e(o);return s(c.popLast())}).next(()=>t.store("documentMutations").X({Y:!0},([o,a,c],u)=>{const l=Pn(a);return s(l.popLast())}))}ei(e){const t=e.store("targets");return t.X((r,i)=>{const s=No(i),o=Eb(this.serializer,s);return t.put(o)})}ni(e,t){const r=t.store("remoteDocuments"),i=[];return r.X((s,o)=>{const a=t.store("remoteDocumentsV14"),c=(u=o,u.document?new j(_e.fromString(u.document.name).popFirst(5)):u.noDocument?j.fromSegments(u.noDocument.path):u.unknownDocument?j.fromSegments(u.unknownDocument.path):W()).path.toArray();var u;/**
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
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(l))}).next(()=>E.waitFor(i))}si(e,t){const r=t.store("mutations"),i=xb(this.serializer),s=new Db(gl.zs,this.serializer.fe);return r.j().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:pe();ci(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),E.forEach(a,(c,u)=>{const l=new ct(u),h=pl.de(this.serializer,l),d=s.getIndexManager(l),f=ml.de(l,this.serializer,d,s.referenceDelegate);return new Nb(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Qh(t,zt.ct),c).next()})})}}function _y(n){n.createObjectStore("targetDocuments",{keyPath:dD}).createIndex("documentTargetsIndex",fD,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",hD,{unique:!0}),n.createObjectStore("targetGlobal")}const ah="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class sp{constructor(e,t,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ii=s,this.window=o,this.document=a,this.ri=u,this.oi=l,this.ui=h,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=d=>Promise.resolve(),!sp.D())throw new R(T.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new SP(this,i),this.di=t+"main",this.serializer=new bb(c),this.wi=new dn(this.di,this.ui,new LP(this.serializer)),this.Bs=new _P(this.referenceDelegate,this.serializer),this.remoteDocumentCache=xb(this.serializer),this.qs=new hP,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,l===!1&&He("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new R(T.FAILED_PRECONDITION,ah);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Bs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new zt(e,this.ri)}).then(()=>{this.Fs=!0}).catch(e=>(this.wi&&this.wi.close(),Promise.reject(e)))}Ii(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>yc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(e).next(t=>{t||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(e)).next(t=>this.isPrimary&&!t?this.Ai(e).next(()=>!1):!!t&&this.vi(e).next(()=>!0))).catch(e=>{if(Wr(e))return P("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return P("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Ti(e){return _o(e).get("owner").next(t=>E.resolve(this.Ri(t)))}Pi(e){return yc(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=pt(t,"clientMetadata");return r.j().next(i=>{const s=this.Si(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return E.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._i)for(const t of e)this._i.removeItem(this.Di(t.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?E.resolve(!0):_o(e).get("owner").next(t=>{if(t!==null&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)){if(this.Ri(t)&&this.networkEnabled)return!0;if(!this.Ri(t)){if(!t.allowTabSynchronization)throw new R(T.FAILED_PRECONDITION,ah);return!1}}return!(!this.networkEnabled||!this.inForeground)||yc(e).j().next(r=>this.Si(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&P("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Qh(e,zt.ct);return this.Ai(t).next(()=>this.Pi(t))}),this.wi.close(),this.Mi()}Si(e,t){return e.filter(r=>this.Vi(r.updateTimeMs,t)&&!this.Ci(r.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>yc(e).j().next(t=>this.Si(t,18e5).map(r=>r.clientId)))}get started(){return this.Fs}getMutationQueue(e,t){return ml.de(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new wP(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return pl.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,t,r){P("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=(o=this.ui)===15?ED:o===14?DI:o===13?NI:o===12?bD:o===11?xI:void W();var o;let a;return this.wi.runTransaction(e,i,s,c=>(a=new Qh(c,this.Os?this.Os.next():zt.ct),t==="readwrite-primary"?this.Ti(a).next(u=>!!u||this.Ei(a)).next(u=>{if(!u)throw He(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new R(T.FAILED_PRECONDITION,CI);return r(a)}).next(u=>this.vi(a).next(()=>u)):this.Oi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Oi(e){return _o(e).get("owner").next(t=>{if(t!==null&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)&&!this.Ri(t)&&!(this.oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new R(T.FAILED_PRECONDITION,ah)})}vi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return _o(e).put("owner",t)}static D(){return dn.D()}Ai(e){const t=_o(e);return t.get("owner").next(r=>this.Ri(r)?(P("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):E.resolve())}Vi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(He(`Detected an update time that is in the future: ${e} > ${r}`),!1))}gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground=this.document.visibilityState==="visible")}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const t=/(?:Version|Mobile)\/1[456]/;FS()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var t;try{const r=((t=this._i)===null||t===void 0?void 0:t.getItem(this.Di(e)))!==null;return P("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return He("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){He("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch{}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function _o(n){return pt(n,"owner")}function yc(n){return pt(n,"clientMetadata")}function op(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class ap{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Fi=r,this.Bi=i}static Li(e,t){let r=pe(),i=pe();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ap(e,t.fromCache,r,i)}}/**
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
 */class Pb{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,r,i){return this.Ki(e,t).next(s=>s||this.Gi(e,t,i,r)).next(s=>s||this.Qi(e,t))}Ki(e,t){if(Hg(t))return E.resolve(null);let r=Wt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=fu(t,null,"F"),r=Wt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=pe(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.ji(t,a);return this.zi(t,u,o,c.readTime)?this.Ki(e,fu(t,null,"F")):this.Wi(e,u,t,c)}))})))}Gi(e,t,r,i){return Hg(t)||i.isEqual(te.min())?this.Qi(e,t):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(t,s);return this.zi(t,o,r,i)?this.Qi(e,t):(Hh()<=we.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),nd(t)),this.Wi(e,o,t,TI(i,-1)))})}ji(e,t){let r=new Le(HI(e));return t.forEach((i,s)=>{qa(e,s)&&(r=r.add(s))}),r}zi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,t){return Hh()<=we.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",nd(t)),this.Ui.getDocumentsMatchingQuery(e,t,Xt.min())}Wi(e,t,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class FP{constructor(e,t,r,i){this.persistence=e,this.Hi=t,this.serializer=i,this.Ji=new Pe(fe),this.Yi=new Qr(s=>Di(s),Ba),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Nb(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function Ob(n,e,t,r){return new FP(n,e,t,r)}async function Mb(n,e){const t=z(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.tr(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=pe();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function UP(n,e){const t=z(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=E.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(m=>{const p=c.docVersions.get(f);ne(p!==null),m.version.compareTo(p)<0&&(l.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),u.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=pe();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Lb(n){const e=z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Bs.getLastRemoteSnapshotVersion(t))}function VP(n,e){const t=z(n),r=e.snapshotVersion;let i=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Zi.newChangeBuffer({trackRemovals:!0});i=t.Ji;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(t.Bs.removeMatchingKeys(s,l.removedDocuments,h).next(()=>t.Bs.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(it.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(m,p,y){return m.resumeToken.approximateByteSize()===0||p.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(d,f,l)&&a.push(t.Bs.updateTargetData(s,f))});let c=Gt(),u=pe();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(Fb(s,o,e.documentUpdates).next(l=>{c=l.nr,u=l.sr})),!r.isEqual(te.min())){const l=t.Bs.getLastRemoteSnapshotVersion(s).next(h=>t.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return E.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(t.Ji=i,s))}function Fb(n,e,t){let r=pe(),i=pe();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Gt();return t.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(te.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{nr:o,sr:i}})}function BP(n,e){const t=z(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ms(n,e){const t=z(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Bs.getTargetData(r,e).next(s=>s?(i=s,E.resolve(i)):t.Bs.allocateTargetId(r).next(o=>(i=new Jn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(r.targetId,r),t.Yi.set(e,r.targetId)),r})}async function Ls(n,e,t){const r=z(n),i=r.Ji.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Wr(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function yu(n,e,t){const r=z(n);let i=te.min(),s=pe();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=z(a),h=l.Yi.get(u);return h!==void 0?E.resolve(l.Ji.get(h)):l.Bs.getTargetData(c,u)}(r,o,Wt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,t?i:te.min(),t?s:pe())).next(a=>(Bb(r,GI(e),a),{documents:a,ir:s})))}function Ub(n,e){const t=z(n),r=z(t.Bs),i=t.Ji.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.le(s,e).next(o=>o?o.target:null))}function Vb(n,e){const t=z(n),r=t.Xi.get(e)||te.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Zi.getAllFromCollectionGroup(i,e,TI(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(Bb(t,e,i),i))}function Bb(n,e,t){let r=n.Xi.get(e)||te.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Xi.set(e,r)}async function $P(n,e,t,r){const i=z(n);let s=pe(),o=Gt();for(const u of t){const l=e.rr(u.metadata.name);u.document&&(s=s.add(l));const h=e.ur(u);h.setReadTime(e.cr(u.metadata.readTime)),o=o.insert(l,h)}const a=i.Zi.newChangeBuffer({trackRemovals:!0}),c=await Ms(i,function(u){return Wt(Xs(_e.fromString(`__bundle__/docs/${u}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>Fb(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.Bs.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.Bs.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.nr,l.sr)).next(()=>l.nr)))}async function qP(n,e,t=pe()){const r=await Ms(n,Wt(tp(e.bundledQuery))),i=z(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Qe(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.qs.saveNamedQuery(s,e);const a=r.withResumeToken(it.EMPTY_BYTE_STRING,o);return i.Ji=i.Ji.insert(a.targetId,a),i.Bs.updateTargetData(s,a).next(()=>i.Bs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Bs.addMatchingKeys(s,t,r.targetId)).next(()=>i.qs.saveNamedQuery(s,e))})}function Iy(n,e){return`firestore_clients_${n}_${e}`}function by(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function ch(n,e){return`firestore_targets_${n}_${e}`}class vu{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static ar(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new R(i.error.code,i.error.message))),o?new vu(e,t,i.state,s):(He("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class jo{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static ar(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new R(r.error.code,r.error.message))),s?new jo(e,r.state,i):(He("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class wu{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static ar(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Hf();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=AI(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new wu(e,s):(He("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class cp{constructor(e,t){this.clientId=e,this.onlineState=t}static ar(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new cp(t.clientId,t.onlineState):(He("SharedClientState",`Failed to parse online state: ${e}`),null)}}class ud{constructor(){this.activeTargetIds=Hf()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uh{constructor(e,t,r,i,s){this.window=e,this.ii=t,this.persistenceKey=r,this.wr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new Pe(fe),this.started=!1,this.yr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.pr=Iy(this.persistenceKey,this.wr),this.Ir=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.gr=this.gr.insert(this.wr,new ud),this.Tr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Er=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ar=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Rr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const r of e){if(r===this.wr)continue;const i=this.getItem(Iy(this.persistenceKey,r));if(i){const s=wu.ar(r,i);s&&(this.gr=this.gr.insert(s.clientId,s))}}this.Pr();const t=this.storage.getItem(this.vr);if(t){const r=this.br(t);r&&this.Vr(r)}for(const r of this.yr)this.mr(r);this.yr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let t=!1;return this.gr.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,t,r){this.Dr(e,t,r),this.Cr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(ch(this.persistenceKey,e));if(r){const i=jo.ar(e,r);i&&(t=i.state)}}return this.Nr.lr(e),this.Pr(),t}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ch(this.persistenceKey,e))}updateQueryState(e,t,r){this.kr(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Cr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return P("SharedClientState","READ",e,t),t}setItem(e,t){P("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){P("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){const t=e;if(t.storageArea===this.storage){if(P("SharedClientState","EVENT",t.key,t.newValue),t.key===this.pr)return void He("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Tr.test(t.key)){if(t.newValue==null){const r=this.Or(t.key);return this.Fr(r,null)}{const r=this.Br(t.key,t.newValue);if(r)return this.Fr(r.clientId,r)}}else if(this.Er.test(t.key)){if(t.newValue!==null){const r=this.Lr(t.key,t.newValue);if(r)return this.qr(r)}}else if(this.Ar.test(t.key)){if(t.newValue!==null){const r=this.Ur(t.key,t.newValue);if(r)return this.Kr(r)}}else if(t.key===this.vr){if(t.newValue!==null){const r=this.br(t.newValue);if(r)return this.Vr(r)}}else if(t.key===this.Ir){const r=function(i){let s=zt.ct;if(i!=null)try{const o=JSON.parse(i);ne(typeof o=="number"),s=o}catch(o){He("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(t.newValue);r!==zt.ct&&this.sequenceNumberHandler(r)}else if(t.key===this.Rr){const r=this.Gr(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Qr(i)))}}}else this.yr.push(t)})}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,t,r){const i=new vu(this.currentUser,e,t,r),s=by(this.persistenceKey,this.currentUser,e);this.setItem(s,i.hr())}Cr(e){const t=by(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Mr(e){const t={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(t))}kr(e,t,r){const i=ch(this.persistenceKey,e),s=new jo(e,t,r);this.setItem(i,s.hr())}$r(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Rr,t)}Or(e){const t=this.Tr.exec(e);return t?t[1]:null}Br(e,t){const r=this.Or(e);return wu.ar(r,t)}Lr(e,t){const r=this.Er.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return vu.ar(new ct(s),i,t)}Ur(e,t){const r=this.Ar.exec(e),i=Number(r[1]);return jo.ar(i,t)}br(e){return cp.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);P("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,t){const r=t?this.gr.insert(e,t):this.gr.remove(e),i=this.Sr(this.gr),s=this.Sr(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.Wr(o,a).then(()=>{this.gr=r})}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let t=Hf();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class $b{constructor(){this.Hr=new ud,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,r){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new ud,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class jP{Yr(e){}shutdown(){}}/**
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
 */class Ey{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let vc=null;function lh(){return vc===null?vc=268435456+Math.round(2147483648*Math.random()):vc++,"0x"+vc.toString(16)}/**
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
 */const zP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class KP{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const kt="WebChannelConnection";class GP extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,r,i,s){const o=lh(),a=this.To(e,t);P("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.Eo(c,i,s),this.Ao(e,a,c,r).then(u=>(P("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw vn("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,t,r,i,s,o){return this.Io(e,t,r,i,s)}Eo(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Js,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,t){const r=zP[e];return`${this.mo}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,r,i){const s=lh();return new Promise((o,a)=>{const c=new qN;c.setWithCredentials(!0),c.listenOnce(VN.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case sh.NO_ERROR:const l=c.getResponseJson();P(kt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case sh.TIMEOUT:P(kt,`RPC '${e}' ${s} timed out`),a(new R(T.DEADLINE_EXCEEDED,"Request time out"));break;case sh.HTTP_ERROR:const h=c.getStatus();if(P(kt,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(p){const y=p.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(y)>=0?y:T.UNKNOWN}(f.status);a(new R(m,f.message))}else a(new R(T.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new R(T.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{P(kt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);P(kt,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",u,r,15)})}Ro(e,t,r){const i=lh(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=FN(),a=UN(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new $N({})),this.Eo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const l=s.join("");P(kt,`Creating RPC '${e}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const m=new KP({ro:y=>{f?P(kt,`Not sending because RPC '${e}' stream ${i} is closed:`,y):(d||(P(kt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),P(kt,`RPC '${e}' stream ${i} sending:`,y),h.send(y))},oo:()=>h.close()}),p=(y,_,S)=>{y.listen(_,L=>{try{S(L)}catch(N){setTimeout(()=>{throw N},0)}})};return p(h,hc.EventType.OPEN,()=>{f||P(kt,`RPC '${e}' stream ${i} transport opened.`)}),p(h,hc.EventType.CLOSE,()=>{f||(f=!0,P(kt,`RPC '${e}' stream ${i} transport closed`),m.wo())}),p(h,hc.EventType.ERROR,y=>{f||(f=!0,vn(kt,`RPC '${e}' stream ${i} transport errored:`,y),m.wo(new R(T.UNAVAILABLE,"The operation could not be completed")))}),p(h,hc.EventType.MESSAGE,y=>{var _;if(!f){const S=y.data[0];ne(!!S);const L=S,N=L.error||((_=L[0])===null||_===void 0?void 0:_.error);if(N){P(kt,`RPC '${e}' stream ${i} received error:`,N);const he=N.status;let x=function(ae){const Et=Xe[ae];if(Et!==void 0)return ab(Et)}(he),Ee=N.message;x===void 0&&(x=T.INTERNAL,Ee="Unknown error status: "+he+" with message "+N.message),f=!0,m.wo(new R(x,Ee)),h.close()}else P(kt,`RPC '${e}' stream ${i} received:`,S),m._o(S)}}),p(a,BN.STAT_EVENT,y=>{y.stat===Ng.PROXY?P(kt,`RPC '${e}' stream ${i} detected buffering proxy`):y.stat===Ng.NOPROXY&&P(kt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.fo()},0),m}}/**
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
 */function qb(){return typeof window<"u"?window:null}function Lc(){return typeof document<"u"?document:null}/**
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
 */function Ga(n){return new eP(n,!0)}/**
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
 */class up{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=t,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,t-r);i>0&&P("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class jb{constructor(e,t,r,i,s,o,a,c){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new up(e,t)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():t&&t.code===T.RESOURCE_EXHAUSTED?(He(t.toString()),He("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===t&&this.Zo(r,i)},r=>{e(()=>{const i=new R(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,t){const r=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.Fo===e?t():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class HP extends jb{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=rP(this.serializer,e),r=function(i){if(!("targetChange"in i))return te.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?te.min():s.readTime?Qe(s.readTime):te.min()}(e);return this.listener.nu(t,r)}su(e){const t={};t.database=ya(this.serializer),t.addTarget=function(i,s){let o;const a=s.target;if(o=hu(a)?{documents:gb(i,a)}:{query:yb(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=hb(i,s.resumeToken);const c=rd(i,s.expectedCount);c!==null&&(o.expectedCount=c)}else if(s.snapshotVersion.compareTo(te.min())>0){o.readTime=Os(i,s.snapshotVersion.toTimestamp());const c=rd(i,s.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const r=sP(this.serializer,e);r&&(t.labels=r),this.Wo(t)}iu(e){const t={};t.database=ya(this.serializer),t.removeTarget=e,this.Wo(t)}}class WP extends jb{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=iP(e.writeResults,e.commitTime),r=Qe(e.commitTime);return this.listener.cu(r,t)}return ne(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=ya(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>va(this.serializer,r))};this.Wo(t)}}/**
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
 */class QP extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new R(T.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new R(T.UNKNOWN,i.toString())})}vo(e,t,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new R(T.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class YP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(He(t),this.mu=!1):P("OnlineStateTracker",t)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class JP{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{Yr(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=z(a);c.vu.add(4),await to(c),c.bu.set("Unknown"),c.vu.delete(4),await Ha(c)}(this))})}),this.bu=new YP(r,i)}}async function Ha(n){if(Yr(n))for(const e of n.Ru)await e(!0)}async function to(n){for(const e of n.Ru)await e(!1)}function yl(n,e){const t=z(n);t.Au.has(e.targetId)||(t.Au.set(e.targetId,e),dp(t)?hp(t):ro(t).Ko()&&lp(t,e))}function wa(n,e){const t=z(n),r=ro(t);t.Au.delete(e),r.Ko()&&zb(t,e),t.Au.size===0&&(r.Ko()?r.jo():Yr(t)&&t.bu.set("Unknown"))}function lp(n,e){if(n.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ro(n).su(e)}function zb(n,e){n.Vu.qt(e),ro(n).iu(e)}function hp(n){n.Vu=new YD({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),le:e=>n.Au.get(e)||null,ue:()=>n.datastore.serializer.databaseId}),ro(n).start(),n.bu.gu()}function dp(n){return Yr(n)&&!ro(n).Uo()&&n.Au.size>0}function Yr(n){return z(n).vu.size===0}function Kb(n){n.Vu=void 0}async function XP(n){n.Au.forEach((e,t)=>{lp(n,e)})}async function ZP(n,e){Kb(n),dp(n)?(n.bu.Iu(e),hp(n)):n.bu.set("Unknown")}async function eO(n,e,t){if(n.bu.set("Online"),e instanceof lb&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(n,e)}catch(r){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _u(n,r)}else if(e instanceof Mc?n.Vu.Ht(e):e instanceof ub?n.Vu.ne(e):n.Vu.Xt(e),!t.isEqual(te.min()))try{const r=await Lb(n.localStore);t.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(c);u&&i.Au.set(c,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,c)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(it.EMPTY_BYTE_STRING,u.snapshotVersion)),zb(i,a);const l=new Jn(u.target,a,c,u.sequenceNumber);lp(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(r){P("RemoteStore","Failed to raise snapshot:",r),await _u(n,r)}}async function _u(n,e,t){if(!Wr(e))throw e;n.vu.add(1),await to(n),n.bu.set("Offline"),t||(t=()=>Lb(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await t(),n.vu.delete(1),await Ha(n)})}function Gb(n,e){return e().catch(t=>_u(n,t,e))}async function no(n){const e=z(n),t=Br(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;tO(e);)try{const i=await BP(e.localStore,r);if(i===null){e.Eu.length===0&&t.jo();break}r=i.batchId,nO(e,i)}catch(i){await _u(e,i)}Hb(e)&&Wb(e)}function tO(n){return Yr(n)&&n.Eu.length<10}function nO(n,e){n.Eu.push(e);const t=Br(n);t.Ko()&&t.ou&&t.uu(e.mutations)}function Hb(n){return Yr(n)&&!Br(n).Uo()&&n.Eu.length>0}function Wb(n){Br(n).start()}async function rO(n){Br(n).hu()}async function iO(n){const e=Br(n);for(const t of n.Eu)e.uu(t.mutations)}async function sO(n,e,t){const r=n.Eu.shift(),i=Yf.from(r,e,t);await Gb(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await no(n)}async function oO(n,e){e&&Br(n).ou&&await async function(t,r){if(i=r.code,ob(i)&&i!==T.ABORTED){const s=t.Eu.shift();Br(t).Qo(),await Gb(t,()=>t.remoteSyncer.rejectFailedWrite(s.batchId,r)),await no(t)}var i}(n,e),Hb(n)&&Wb(n)}async function Ty(n,e){const t=z(n);t.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const r=Yr(t);t.vu.add(3),await to(t),r&&t.bu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.vu.delete(3),await Ha(t)}async function ld(n,e){const t=z(n);e?(t.vu.delete(2),await Ha(t)):e||(t.vu.add(2),await to(t),t.bu.set("Unknown"))}function ro(n){return n.Su||(n.Su=function(e,t,r){const i=z(e);return i.fu(),new HP(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{uo:XP.bind(null,n),ao:ZP.bind(null,n),nu:eO.bind(null,n)}),n.Ru.push(async e=>{e?(n.Su.Qo(),dp(n)?hp(n):n.bu.set("Unknown")):(await n.Su.stop(),Kb(n))})),n.Su}function Br(n){return n.Du||(n.Du=function(e,t,r){const i=z(e);return i.fu(),new WP(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{uo:rO.bind(null,n),ao:oO.bind(null,n),au:iO.bind(null,n),cu:sO.bind(null,n)}),n.Ru.push(async e=>{e?(n.Du.Qo(),await no(n)):(await n.Du.stop(),n.Eu.length>0&&(P("RemoteStore",`Stopping write stream with ${n.Eu.length} pending writes`),n.Eu=[]))})),n.Du}/**
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
 */class fp{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new fp(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function io(n,e){if(He("AsyncQueue",`${e}: ${n}`),Wr(n))return new R(T.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class ws{constructor(e){this.comparator=e?(t,r)=>e(t,r)||j.comparator(t.key,r.key):(t,r)=>j.comparator(t.key,r.key),this.keyedMap=Ro(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new ws(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ws)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new ws;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Sy{constructor(){this.Cu=new Pe(j.comparator)}track(e){const t=e.doc.key,r=this.Cu.get(t);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(t,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(t):e.type===1&&r.type===2?this.Cu=this.Cu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):W():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal((t,r)=>{e.push(r)}),e}}class Fs{constructor(e,t,r,i,s,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Fs(e,t,ws.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$a(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class aO{constructor(){this.Nu=void 0,this.listeners=[]}}class cO{constructor(){this.queries=new Qr(e=>KI(e),$a),this.onlineState="Unknown",this.ku=new Set}}async function pp(n,e){const t=z(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new aO),i)try{s.Nu=await t.onListen(r)}catch(o){const a=io(o,`Initialization of query '${nd(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.Mu(t.onlineState),s.Nu&&e.$u(s.Nu)&&gp(t)}async function mp(n,e){const t=z(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function uO(n,e){const t=z(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&gp(t)}function lO(n,e,t){const r=z(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function gp(n){n.ku.forEach(e=>{e.next()})}class yp{constructor(e,t,r){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Fs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Uu(e){e=Fs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class hO{constructor(e,t){this.Gu=e,this.byteLength=t}Qu(){return"metadata"in this.Gu}}/**
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
 */class Cy{constructor(e){this.serializer=e}rr(e){return Fn(this.serializer,e)}ur(e){return e.metadata.exists?mb(this.serializer,e.document,!1):Me.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return Qe(e)}}class dO{constructor(e,t,r){this.ju=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Qb(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++t;const r=_e.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Wu(e){const t=new Map,r=new Cy(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.rr(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||pe()).add(s);t.set(o,a)}}return t}async complete(){const e=await $P(this.localStore,new Cy(this.serializer),this.documents,this.ju.id),t=this.Wu(this.documents);for(const r of this.queries)await qP(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function Qb(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class Yb{constructor(e){this.key=e}}class Jb{constructor(e){this.key=e}}class Xb{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=pe(),this.mutatedKeys=pe(),this.tc=HI(e),this.ec=new ws(this.tc)}get nc(){return this.Yu}sc(e,t){const r=t?t.ic:new Sy,i=t?t.ec:this.ec;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),f=qa(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),p=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?m!==p&&(r.track({type:3,doc:f}),y=!0):this.rc(d,f)||(r.track({type:2,doc:f}),y=!0,(c&&this.tc(f,c)>0||u&&this.tc(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),y=!0):d&&!f&&(r.track({type:1,doc:d}),y=!0,(c||u)&&(a=!0)),y&&(f?(o=o.add(f),s=p?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,l)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return f(h)-f(d)}(u.type,l.type)||this.tc(u.doc,l.doc)),this.oc(r);const o=t?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,s.length!==0||c?{snapshot:new Fs(this.query,e.ec,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Sy,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(t=>this.Yu=this.Yu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Yu=this.Yu.delete(t)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=pe(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const t=[];return e.forEach(r=>{this.Zu.has(r)||t.push(new Jb(r))}),this.Zu.forEach(r=>{e.has(r)||t.push(new Yb(r))}),t}hc(e){this.Yu=e.ir,this.Zu=pe();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return Fs.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class fO{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class pO{constructor(e){this.key=e,this.fc=!1}}class mO{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Qr(a=>KI(a),$a),this._c=new Map,this.mc=new Set,this.gc=new Pe(j.comparator),this.yc=new Map,this.Ic=new ip,this.Tc={},this.Ec=new Map,this.Ac=Fi.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function gO(n,e){const t=bp(n);let r,i;const s=t.wc.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await Ms(t.localStore,Wt(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await vp(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&yl(t.remoteStore,o)}return i}async function vp(n,e,t,r,i){n.Rc=(h,d,f)=>async function(m,p,y,_){let S=p.view.sc(y);S.zi&&(S=await yu(m.localStore,p.query,!1).then(({documents:he})=>p.view.sc(he,S)));const L=_&&_.targetChanges.get(p.targetId),N=p.view.applyChanges(S,m.isPrimaryClient,L);return hd(m,p.targetId,N.cc),N.snapshot}(n,h,d,f);const s=await yu(n.localStore,e,!0),o=new Xb(e,s.ir),a=o.sc(s.documents),c=Ka.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);hd(n,t,u.cc);const l=new fO(e,t,o);return n.wc.set(e,l),n._c.has(t)?n._c.get(t).push(e):n._c.set(t,[e]),u.snapshot}async function yO(n,e){const t=z(n),r=t.wc.get(e),i=t._c.get(r.targetId);if(i.length>1)return t._c.set(r.targetId,i.filter(s=>!$a(s,e))),void t.wc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await Ls(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),wa(t.remoteStore,r.targetId),Us(t,r.targetId)}).catch(Hr)):(Us(t,r.targetId),await Ls(t.localStore,r.targetId,!0))}async function vO(n,e,t){const r=Ep(n);try{const i=await function(s,o){const a=z(s),c=Be.now(),u=o.reduce((d,f)=>d.add(f.key),pe());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Gt(),m=pe();return a.Zi.getEntries(d,u).next(p=>{f=p,f.forEach((y,_)=>{_.isValidDocument()||(m=m.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(p=>{l=p;const y=[];for(const _ of o){const S=HD(_,l.get(_.key).overlayedDocument);S!=null&&y.push(new ur(_.key,S,LI(S.value.mapValue),Ve.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,y,o)}).next(p=>{h=p;const y=p.applyToLocalDocumentSet(l,m);return a.documentOverlayCache.saveOverlays(d,p.batchId,y)})}).then(()=>({batchId:h.batchId,changes:QI(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.Tc[s.currentUser.toKey()];c||(c=new Pe(fe)),c=c.insert(o,a),s.Tc[s.currentUser.toKey()]=c}(r,i.batchId,t),await lr(r,i.changes),await no(r.remoteStore)}catch(i){const s=io(i,"Failed to persist write");t.reject(s)}}async function Zb(n,e){const t=z(n);try{const r=await VP(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.yc.get(s);o&&(ne(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?ne(o.fc):i.removedDocuments.size>0&&(ne(o.fc),o.fc=!1))}),await lr(t,r,e)}catch(r){await Hr(r)}}function ky(n,e,t){const r=z(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=z(s);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Mu(o)&&(c=!0)}),c&&gp(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wO(n,e,t){const r=z(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new Pe(j.comparator);o=o.insert(s,Me.newNoDocument(s,te.min()));const a=pe().add(s),c=new za(te.min(),new Map,new Pe(fe),o,a);await Zb(r,c),r.gc=r.gc.remove(s),r.yc.delete(e),Ip(r)}else await Ls(r.localStore,e,!1).then(()=>Us(r,e,t)).catch(Hr)}async function _O(n,e){const t=z(n),r=e.batch.batchId;try{const i=await UP(t.localStore,e);_p(t,r,null),wp(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await lr(t,i)}catch(i){await Hr(i)}}async function IO(n,e,t){const r=z(n);try{const i=await function(s,o){const a=z(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(ne(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);_p(r,e,t),wp(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await lr(r,i)}catch(i){await Hr(i)}}async function bO(n,e){const t=z(n);Yr(t.remoteStore)||P("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=z(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(r===-1)return void e.resolve();const i=t.Ec.get(r)||[];i.push(e),t.Ec.set(r,i)}catch(r){const i=io(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function wp(n,e){(n.Ec.get(e)||[]).forEach(t=>{t.resolve()}),n.Ec.delete(e)}function _p(n,e,t){const r=z(n);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function Us(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n._c.get(e))n.wc.delete(r),t&&n.dc.Pc(r,t);n._c.delete(e),n.isPrimaryClient&&n.Ic.Is(e).forEach(r=>{n.Ic.containsKey(r)||e0(n,r)})}function e0(n,e){n.mc.delete(e.path.canonicalString());const t=n.gc.get(e);t!==null&&(wa(n.remoteStore,t),n.gc=n.gc.remove(e),n.yc.delete(t),Ip(n))}function hd(n,e,t){for(const r of t)r instanceof Yb?(n.Ic.addReference(r.key,e),EO(n,r)):r instanceof Jb?(P("SyncEngine","Document no longer in limbo: "+r.key),n.Ic.removeReference(r.key,e),n.Ic.containsKey(r.key)||e0(n,r.key)):W()}function EO(n,e){const t=e.key,r=t.path.canonicalString();n.gc.get(t)||n.mc.has(r)||(P("SyncEngine","New document in limbo: "+t),n.mc.add(r),Ip(n))}function Ip(n){for(;n.mc.size>0&&n.gc.size<n.maxConcurrentLimboResolutions;){const e=n.mc.values().next().value;n.mc.delete(e);const t=new j(_e.fromString(e)),r=n.Ac.next();n.yc.set(r,new pO(t)),n.gc=n.gc.insert(t,r),yl(n.remoteStore,new Jn(Wt(Xs(t.path)),r,"TargetPurposeLimboResolution",zt.ct))}}async function lr(n,e,t){const r=z(n),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,c)=>{o.push(r.Rc(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=ap.Li(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,c){const u=z(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>E.forEach(c,h=>E.forEach(h.Fi,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>E.forEach(h.Bi,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Wr(l))throw l;P("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Ji.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);u.Ji=u.Ji.insert(h,m)}}}(r.localStore,s))}async function TO(n,e){const t=z(n);if(!t.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const r=await Mb(t.localStore,e);t.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new R(T.CANCELLED,s))})}),i.Ec.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await lr(t,r.er)}}function SO(n,e){const t=z(n),r=t.yc.get(e);if(r&&r.fc)return pe().add(r.key);{let i=pe();const s=t._c.get(e);if(!s)return i;for(const o of s){const a=t.wc.get(o);i=i.unionWith(a.view.nc)}return i}}async function CO(n,e){const t=z(n),r=await yu(t.localStore,e.query,!0),i=e.view.hc(r);return t.isPrimaryClient&&hd(t,e.targetId,i.cc),i}async function kO(n,e){const t=z(n);return Vb(t.localStore,e).then(r=>lr(t,r))}async function AO(n,e,t,r){const i=z(n),s=await function(o,a){const c=z(o),u=z(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.Sn(l,a).next(h=>h?c.localDocuments.getDocuments(l,h):E.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await no(i.remoteStore):t==="acknowledged"||t==="rejected"?(_p(i,e,r||null),wp(i,e),function(o,a){z(z(o).mutationQueue).Cn(a)}(i.localStore,e)):W(),await lr(i,s)):P("SyncEngine","Cannot apply mutation batch with id: "+e)}async function RO(n,e){const t=z(n);if(bp(t),Ep(t),e===!0&&t.vc!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await Ay(t,r.toArray());t.vc=!0,await ld(t.remoteStore,!0);for(const s of i)yl(t.remoteStore,s)}else if(e===!1&&t.vc!==!1){const r=[];let i=Promise.resolve();t._c.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Us(t,o),Ls(t.localStore,o,!0))),wa(t.remoteStore,o)}),await i,await Ay(t,r),function(s){const o=z(s);o.yc.forEach((a,c)=>{wa(o.remoteStore,c)}),o.Ic.Ts(),o.yc=new Map,o.gc=new Pe(j.comparator)}(t),t.vc=!1,await ld(t.remoteStore,!1)}}async function Ay(n,e,t){const r=z(n),i=[],s=[];for(const o of e){let a;const c=r._c.get(o);if(c&&c.length!==0){a=await Ms(r.localStore,Wt(c[0]));for(const u of c){const l=r.wc.get(u),h=await CO(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await Ub(r.localStore,o);a=await Ms(r.localStore,u),await vp(r,t0(u),o,!1,a.resumeToken)}i.push(a)}return r.dc.nu(s),i}function t0(n){return zI(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function xO(n){const e=z(n);return z(z(e.localStore).persistence).$i()}async function NO(n,e,t,r){const i=z(n);if(i.vc)return void P("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await Vb(i.localStore,GI(s[0])),a=za.createSynthesizedRemoteEventForCurrentChange(e,t==="current",it.EMPTY_BYTE_STRING);await lr(i,o,a);break}case"rejected":await Ls(i.localStore,e,!0),Us(i,e,r);break;default:W()}}async function DO(n,e,t){const r=bp(n);if(r.vc){for(const i of e){if(r._c.has(i)){P("SyncEngine","Adding an already active target "+i);continue}const s=await Ub(r.localStore,i),o=await Ms(r.localStore,s);await vp(r,t0(s),o.targetId,!1,o.resumeToken),yl(r.remoteStore,o)}for(const i of t)r._c.has(i)&&await Ls(r.localStore,i,!1).then(()=>{wa(r.remoteStore,i),Us(r,i)}).catch(Hr)}}function bp(n){const e=z(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Zb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wO.bind(null,e),e.dc.nu=uO.bind(null,e.eventManager),e.dc.Pc=lO.bind(null,e.eventManager),e}function Ep(n){const e=z(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_O.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=IO.bind(null,e),e}function PO(n,e,t){const r=z(n);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const f=z(h),m=Qe(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",p=>f.qs.getBundleMetadata(p,d.id)).then(p=>!!p&&p.createTime.compareTo(m)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(Qb(a));const c=new dO(a,i.localStore,s.serializer);let u=await s.bc();for(;u;){const h=await c.zu(u);h&&o._updateProgress(h),u=await s.bc()}const l=await c.complete();return await lr(i,l.Ju,void 0),await function(h,d){const f=z(h);return f.persistence.runTransaction("Save bundle","readwrite",m=>f.qs.saveBundleMetadata(m,d))}(i.localStore,a),o._completeWith(l.progress),Promise.resolve(l.Hu)}catch(a){return vn("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class dd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ga(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Ob(this.persistence,new Pb,e.initialUser,this.serializer)}createPersistence(e){return new Db(gl.zs,this.serializer)}createSharedClientState(e){return new $b}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class n0 extends dd{constructor(e,t,r){super(),this.Vc=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await Ep(this.Vc.syncEngine),await no(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return Ob(this.persistence,new Pb,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new bP(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new sD(t,this.persistence);return new iD(e.asyncQueue,r)}createPersistence(e){const t=op(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?qt.withCacheSize(this.cacheSizeBytes):qt.DEFAULT;return new sp(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,qb(),Lc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new $b}}class OO extends n0{constructor(e,t){super(e,t,!1),this.Vc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Vc.syncEngine;this.sharedClientState instanceof uh&&(this.sharedClientState.syncEngine={jr:AO.bind(null,t),zr:NO.bind(null,t),Wr:DO.bind(null,t),$i:xO.bind(null,t),Qr:kO.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ii(async r=>{await RO(this.Vc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=qb();if(!uh.D(t))throw new R(T.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=op(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new uh(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Tp{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ky(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=TO.bind(null,this.syncEngine),await ld(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new cO}createDatastore(e){const t=Ga(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new GP(i));var i;return function(s,o,a,c){return new QP(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return t=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>ky(this.syncEngine,a,0),o=Ey.D()?new Ey:new jP,new JP(t,r,i,s,o);var t,r,i,s,o}createSyncEngine(e,t){return function(r,i,s,o,a,c,u){const l=new mO(r,i,s,o,a,c);return u&&(l.vc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=z(e);P("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await to(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */function Ry(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class vl{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):He("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class MO{constructor(e,t){this.Cc=e,this.serializer=t,this.metadata=new ut,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then(r=>{r&&r.Qu()?this.metadata.resolve(r.Gu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Gu)}`))},r=>this.metadata.reject(r))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){const e=await this.kc();if(e===null)return null;const t=this.xc.decode(e),r=Number(t);isNaN(r)&&this.Mc(`length string (${t}) is not valid number`);const i=await this.$c(r);return new hO(JSON.parse(i),e.length+r)}Oc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async kc(){for(;this.Oc()<0&&!await this.Fc(););if(this.buffer.length===0)return null;const e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");const t=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Mc(e){throw this.Cc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Fc(){const e=await this.Cc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class LO{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new R(T.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(r,i){const s=z(r),o=ya(s.serializer)+"/documents",a={documents:i.map(h=>ga(s.serializer,h))},c=await s.vo("BatchGetDocuments",o,a,i.length),u=new Map;c.forEach(h=>{const d=nP(s.serializer,h);u.set(d.key.toString(),d)});const l=[];return i.forEach(h=>{const d=u.get(h.toString());ne(!!d),l.push(d)}),l}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new eo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=j.fromPath(r);this.mutations.push(new Wf(i,this.precondition(i)))}),await async function(t,r){const i=z(t),s=ya(i.serializer)+"/documents",o={writes:r.map(a=>va(i.serializer,a))};await i.Io("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw W();t=te.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new R(T.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(te.min())?Ve.exists(!1):Ve.updateTime(t):Ve.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(te.min()))throw new R(T.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ve.updateTime(t)}return Ve.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class FO{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.Bc=r.maxAttempts,this.qo=new up(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No(async()=>{const e=new LO(this.datastore),t=this.qc(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Uc(i)}))}).catch(r=>{this.Uc(r)})})}qc(e){try{const t=this.updateFunction(e);return!Va(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(e)}Kc(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!ob(t)}return!1}}/**
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
 */class UO{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=ct.UNAUTHENTICATED,this.clientId=II.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{P("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(P("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new R(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=io(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Fc(n,e){n.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Mb(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function fd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Sp(n);P("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>Ty(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Ty(e.remoteStore,s)),n._onlineComponents=e}function r0(n){return n.name==="FirebaseError"?n.code===T.FAILED_PRECONDITION||n.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Sp(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){P("FirestoreClient","Using user provided OfflineComponentProvider");try{await Fc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!r0(t))throw t;vn("Error using user provided cache. Falling back to memory cache: "+t),await Fc(n,new dd)}}else P("FirestoreClient","Using default OfflineComponentProvider"),await Fc(n,new dd);return n._offlineComponents}async function wl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(P("FirestoreClient","Using user provided OnlineComponentProvider"),await fd(n,n._uninitializedComponentsProvider._online)):(P("FirestoreClient","Using default OnlineComponentProvider"),await fd(n,new Tp))),n._onlineComponents}function i0(n){return Sp(n).then(e=>e.persistence)}function Cp(n){return Sp(n).then(e=>e.localStore)}function s0(n){return wl(n).then(e=>e.remoteStore)}function kp(n){return wl(n).then(e=>e.syncEngine)}function VO(n){return wl(n).then(e=>e.datastore)}async function Vs(n){const e=await wl(n),t=e.eventManager;return t.onListen=gO.bind(null,e.syncEngine),t.onUnlisten=yO.bind(null,e.syncEngine),t}function BO(n){return n.asyncQueue.enqueue(async()=>{const e=await i0(n),t=await s0(n);return e.setNetworkEnabled(!0),function(r){const i=z(r);return i.vu.delete(0),Ha(i)}(t)})}function $O(n){return n.asyncQueue.enqueue(async()=>{const e=await i0(n),t=await s0(n);return e.setNetworkEnabled(!1),async function(r){const i=z(r);i.vu.add(0),await to(i),i.bu.set("Offline")}(t)})}function qO(n,e){const t=new ut;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,c){const u=z(a);return u.persistence.runTransaction("read document","readonly",l=>u.localDocuments.getDocument(l,c))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new R(T.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=io(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await Cp(n),e,t)),t.promise}function o0(n,e,t={}){const r=new ut;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new vl({next:h=>{s.enqueueAndForget(()=>mp(i,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new R(T.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new R(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new yp(Xs(o.path),u,{includeMetadataChanges:!0,Ku:!0});return pp(i,l)}(await Vs(n),n.asyncQueue,e,t,r)),r.promise}function jO(n,e){const t=new ut;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await yu(r,i,!0),a=new Xb(i,o.ir),c=a.sc(o.documents),u=a.applyChanges(c,!1);s.resolve(u.snapshot)}catch(o){const a=io(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await Cp(n),e,t)),t.promise}function a0(n,e,t={}){const r=new ut;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new vl({next:h=>{s.enqueueAndForget(()=>mp(i,l)),h.fromCache&&a.source==="server"?c.reject(new R(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new yp(o,u,{includeMetadataChanges:!0,Ku:!0});return pp(i,l)}(await Vs(n),n.asyncQueue,e,t,r)),r.promise}function zO(n,e){const t=new vl(e);return n.asyncQueue.enqueueAndForget(async()=>function(r,i){z(r).ku.add(i),i.next()}(await Vs(n),t)),()=>{t.Dc(),n.asyncQueue.enqueueAndForget(async()=>function(r,i){z(r).ku.delete(i)}(await Vs(n),t))}}function KO(n,e,t,r){const i=function(s,o){let a;return a=typeof s=="string"?cb().encode(s):s,function(c,u){return new MO(c,u)}(function(c,u){if(c instanceof Uint8Array)return Ry(c,u);if(c instanceof ArrayBuffer)return Ry(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,Ga(e));n.asyncQueue.enqueueAndForget(async()=>{PO(await kp(n),i,r)})}function GO(n,e){return n.asyncQueue.enqueue(async()=>function(t,r){const i=z(t);return i.persistence.runTransaction("Get named query","readonly",s=>i.qs.getNamedQuery(s,r))}(await Cp(n),e))}/**
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
 */function c0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const xy=new Map;/**
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
 */function Ap(n,e,t){if(!t)throw new R(T.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function u0(n,e,t,r){if(e===!0&&r===!0)throw new R(T.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ny(n){if(!j.isDocumentKey(n))throw new R(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Dy(n){if(j.isDocumentKey(n))throw new R(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function _l(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":W()}function be(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new R(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=_l(n);throw new R(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function l0(n,e){if(e<=0)throw new R(T.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Py{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new R(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new R(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}u0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=c0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new R(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new R(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new R(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,r}}class Wa{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Py({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new R(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new R(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Py(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new GN;switch(t.type){case"firstParty":return new YN(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new R(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=xy.get(e);t&&(P("ComponentProvider","Removing Datastore"),xy.delete(e),t.terminate())}(this),Promise.resolve()}}function HO(n,e,t,r={}){var i;const s=(n=be(n,Wa))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&vn("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${t}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=ct.MOCK_USER;else{o=OS(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new R(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ct(c)}n._authCredentials=new HN(new _I(o,a))}}/**
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
 */class Fe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Un(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fe(this.firestore,e,this._key)}}class bt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new bt(this.firestore,e,this._query)}}class Un extends bt{constructor(e,t,r){super(e,t,Xs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fe(this.firestore,null,new j(e))}withConverter(e){return new Un(this.firestore,e,this._path)}}function Rp(n,e,...t){if(n=ie(n),Ap("collection","path",e),n instanceof Wa){const r=_e.fromString(e,...t);return Dy(r),new Un(n,null,r)}{if(!(n instanceof Fe||n instanceof Un))throw new R(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(_e.fromString(e,...t));return Dy(r),new Un(n.firestore,null,r)}}function WO(n,e){if(n=be(n,Wa),Ap("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new R(T.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new bt(n,null,function(t){return new cr(_e.emptyPath(),t)}(e))}function Tn(n,e,...t){if(n=ie(n),arguments.length===1&&(e=II.A()),Ap("doc","path",e),n instanceof Wa){const r=_e.fromString(e,...t);return Ny(r),new Fe(n,null,new j(r))}{if(!(n instanceof Fe||n instanceof Un))throw new R(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(_e.fromString(e,...t));return Ny(r),new Fe(n.firestore,n instanceof Un?n.converter:null,new j(r))}}function h0(n,e){return n=ie(n),e=ie(e),(n instanceof Fe||n instanceof Un)&&(e instanceof Fe||e instanceof Un)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function d0(n,e){return n=ie(n),e=ie(e),n instanceof bt&&e instanceof bt&&n.firestore===e.firestore&&$a(n._query,e._query)&&n.converter===e.converter}/**
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
 */class QO{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new up(this,"async_queue_retry"),this.Xc=()=>{const t=Lc();t&&P("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const e=Lc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=Lc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const t=new ut;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Wr(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const t=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw He("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=t,t}enqueueAfterDelay(e,t,r){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const i=fp.createAndSchedule(this,e,t,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&W()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.zc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}function pd(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of t)if(i in r&&typeof r[i]=="function")return!0;return!1}(n,["next","error","complete"])}class YO{constructor(){this._progressObserver={},this._taskCompletionResolver=new ut,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const JO=-1;class Ge extends Wa{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new QO,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||f0(this),this._firestoreClient.terminate()}}function mt(n){return n._firestoreClient||f0(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function f0(n){var e,t,r;const i=n._freezeSettings(),s=function(o,a,c,u){return new CD(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,c0(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new UO(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.cache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function XO(n,e){m0(n=be(n,Ge));const t=mt(n);if(t._uninitializedComponentsProvider)throw new R(T.FAILED_PRECONDITION,"SDK cache is already specified.");vn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),i=new Tp;return p0(t,i,new n0(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function ZO(n){m0(n=be(n,Ge));const e=mt(n);if(e._uninitializedComponentsProvider)throw new R(T.FAILED_PRECONDITION,"SDK cache is already specified.");vn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new Tp;return p0(e,r,new OO(r,t.cacheSizeBytes))}function p0(n,e,t){const r=new ut;return n.asyncQueue.enqueue(async()=>{try{await Fc(n,t),await fd(n,e),r.resolve()}catch(i){const s=i;if(!r0(s))throw s;vn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function eM(n){if(n._initialized&&!n._terminated)throw new R(T.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ut;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!dn.D())return Promise.resolve();const r=t+"main";await dn.delete(r)}(op(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function tM(n){return function(e){const t=new ut;return e.asyncQueue.enqueueAndForget(async()=>bO(await kp(e),t)),t.promise}(mt(n=be(n,Ge)))}function nM(n){return BO(mt(n=be(n,Ge)))}function rM(n){return $O(mt(n=be(n,Ge)))}function iM(n,e){const t=mt(n=be(n,Ge)),r=new YO;return KO(t,n._databaseId,e,r),r}function sM(n,e){return GO(mt(n=be(n,Ge)),e).then(t=>t?new bt(n,null,t.query):null)}function m0(n){if(n._initialized||n._terminated)throw new R(T.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class jn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jn(it.fromBase64String(e))}catch(t){throw new R(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new jn(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class $r{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new R(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class zi{constructor(e){this._methodName=e}}/**
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
 */class Il{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new R(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new R(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}/**
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
 */const oM=/^__.*__$/;class aM{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ur(e,this.data,this.fieldMask,t,this.fieldTransforms):new Zs(e,this.data,t,this.fieldTransforms)}}class g0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new ur(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function y0(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class bl{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new bl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Iu(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(y0(this.ca)&&oM.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class cM{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ga(e)}ya(e,t,r,i=!1){return new bl({ca:e,methodName:t,ga:r,path:We.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ki(n){const e=n._freezeSettings(),t=Ga(n._databaseId);return new cM(n._databaseId,!!e.ignoreUndefinedProperties,t)}function El(n,e,t,r,i,s={}){const o=n.ya(s.merge||s.mergeFields?2:0,e,t,i);Pp("Data must be an object, but it was:",o,r);const a=_0(r,o);let c,u;if(s.merge)c=new Kt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=md(e,h,t);if(!o.contains(d))throw new R(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);b0(l,d)||l.push(d)}c=new Kt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new aM(new wt(a),c,u)}class Qa extends zi{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qa}}function v0(n,e,t){return new bl({ca:3,ga:e.settings.ga,methodName:n._methodName,la:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class xp extends zi{_toFieldTransform(e){return new ja(e.path,new Ds)}isEqual(e){return e instanceof xp}}class uM extends zi{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=v0(this,e,!0),r=this.pa.map(s=>Gi(s,t)),i=new Pi(r);return new ja(e.path,i)}isEqual(e){return this===e}}class lM extends zi{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=v0(this,e,!0),r=this.pa.map(s=>Gi(s,t)),i=new Oi(r);return new ja(e.path,i)}isEqual(e){return this===e}}class hM extends zi{constructor(e,t){super(e),this.Ia=t}_toFieldTransform(e){const t=new Ps(e.serializer,ZI(e.serializer,this.Ia));return new ja(e.path,t)}isEqual(e){return this===e}}function Np(n,e,t,r){const i=n.ya(1,e,t);Pp("Data must be an object, but it was:",i,r);const s=[],o=wt.empty();ji(r,(c,u)=>{const l=Op(e,c,t);u=ie(u);const h=i.da(l);if(u instanceof Qa)s.push(l);else{const d=Gi(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new Kt(s);return new g0(o,a,i.fieldTransforms)}function Dp(n,e,t,r,i,s){const o=n.ya(1,e,t),a=[md(e,r,t)],c=[i];if(s.length%2!=0)throw new R(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(md(e,s[d])),c.push(s[d+1]);const u=[],l=wt.empty();for(let d=a.length-1;d>=0;--d)if(!b0(u,a[d])){const f=a[d];let m=c[d];m=ie(m);const p=o.da(f);if(m instanceof Qa)u.push(f);else{const y=Gi(m,p);y!=null&&(u.push(f),l.set(f,y))}}const h=new Kt(u);return new g0(l,h,o.fieldTransforms)}function w0(n,e,t,r=!1){return Gi(t,n.ya(r?4:3,e))}function Gi(n,e){if(I0(n=ie(n)))return Pp("Unsupported field value:",e,n),_0(n,e);if(n instanceof zi)return function(t,r){if(!y0(r.ca))throw r._a(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(t,r){const i=[];let s=0;for(const o of t){let a=Gi(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(n,e)}return function(t,r){if((t=ie(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return ZI(r.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=Be.fromDate(t);return{timestampValue:Os(r.serializer,i)}}if(t instanceof Be){const i=new Be(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Os(r.serializer,i)}}if(t instanceof Il)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof jn)return{bytesValue:hb(r.serializer,t._byteString)};if(t instanceof Fe){const i=r.databaseId,s=t.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ep(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r._a(`Unsupported field value: ${_l(t)}`)}(n,e)}function _0(n,e){const t={};return PI(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ji(n,(r,i)=>{const s=Gi(i,e.ha(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function I0(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Be||n instanceof Il||n instanceof jn||n instanceof Fe||n instanceof zi)}function Pp(n,e,t){if(!I0(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=_l(t);throw r==="an object"?e._a(n+" a custom object"):e._a(n+" "+r)}}function md(n,e,t){if((e=ie(e))instanceof $r)return e._internalPath;if(typeof e=="string")return Op(n,e);throw Iu("Field path arguments must be of type string or ",n,!1,void 0,t)}const dM=new RegExp("[~\\*/\\[\\]]");function Op(n,e,t){if(e.search(dM)>=0)throw Iu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new $r(...e.split("."))._internalPath}catch{throw Iu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Iu(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new R(T.INVALID_ARGUMENT,a+n+c)}function b0(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class _a{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Tl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class fM extends _a{data(){return super.data()}}function Tl(n,e){return typeof e=="string"?Op(n,e):e instanceof $r?e._internalPath:e._delegate._internalPath}/**
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
 */function E0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new R(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mp{}class Ya extends Mp{}function Gn(n,e,...t){let r=[];e instanceof Mp&&r.push(e),r=r.concat(t),function(i){const s=i.filter(a=>a instanceof Lp).length,o=i.filter(a=>a instanceof Sl).length;if(s>1||s>0&&o>0)throw new R(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Sl extends Ya{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Sl(e,t,r)}_apply(e){const t=this._parse(e);return C0(e._query,t),new bt(e.firestore,e.converter,td(e._query,t))}_parse(e){const t=Ki(e.firestore);return function(i,s,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new R(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){My(l,u);const d=[];for(const f of l)d.push(Oy(a,i,f));h={arrayValue:{values:d}}}else h=Oy(a,i,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||My(l,u),h=w0(o,s,l,u==="in"||u==="not-in");return ye.create(c,u,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function T0(n,e,t){const r=e,i=Tl("where",n);return Sl._create(i,r,t)}class Lp extends Mp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Lp(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Re.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)C0(s,a),s=td(s,a)}(e._query,t),new bt(e.firestore,e.converter,td(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Fp extends Ya{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Fp(e,t)}_apply(e){const t=function(r,i,s){if(r.startAt!==null)throw new R(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new R(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new vs(i,s);return function(a,c){if(Kf(a)===null){const u=hl(a);u!==null&&k0(a,u,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new bt(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new cr(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function pM(n,e="asc"){const t=e,r=Tl("orderBy",n);return Fp._create(r,t)}class Cl extends Ya{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Cl(e,t,r)}_apply(e){return new bt(e.firestore,e.converter,fu(e._query,this._limit,this._limitType))}}function mM(n){return l0("limit",n),Cl._create("limit",n,"F")}function gM(n){return l0("limitToLast",n),Cl._create("limitToLast",n,"L")}class kl extends Ya{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new kl(e,t,r)}_apply(e){const t=S0(e,this.type,this._docOrFields,this._inclusive);return new bt(e.firestore,e.converter,function(r,i){return new cr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,t))}}function yM(...n){return kl._create("startAt",n,!0)}function vM(...n){return kl._create("startAfter",n,!1)}class Al extends Ya{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Al(e,t,r)}_apply(e){const t=S0(e,this.type,this._docOrFields,this._inclusive);return new bt(e.firestore,e.converter,function(r,i){return new cr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,t))}}function wM(...n){return Al._create("endBefore",n,!1)}function _M(...n){return Al._create("endAt",n,!0)}function S0(n,e,t,r){if(t[0]=ie(t[0]),t[0]instanceof _a)return function(i,s,o,a,c){if(!a)throw new R(T.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of Ti(i))if(l.field.isKeyField())u.push(Ni(s,a.key));else{const h=a.data.field(l.field);if(ll(h))throw new R(T.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new R(T.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new Vr(u,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=Ki(n.firestore);return function(s,o,a,c,u,l){const h=s.explicitOrderBy;if(u.length>h.length)throw new R(T.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<u.length;f++){const m=u[f];if(h[f].field.isKeyField()){if(typeof m!="string")throw new R(T.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof m}`);if(!Gf(s)&&m.indexOf("/")!==-1)throw new R(T.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${m}' contains a slash.`);const p=s.path.child(_e.fromString(m));if(!j.isDocumentKey(p))throw new R(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${p}' is not because it contains an odd number of segments.`);const y=new j(p);d.push(Ni(o,y))}else{const p=w0(a,c,m);d.push(p)}}return new Vr(d,l)}(n._query,n.firestore._databaseId,i,e,t,r)}}function Oy(n,e,t){if(typeof(t=ie(t))=="string"){if(t==="")throw new R(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gf(e)&&t.indexOf("/")!==-1)throw new R(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(_e.fromString(t));if(!j.isDocumentKey(r))throw new R(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ni(n,new j(r))}if(t instanceof Fe)return Ni(n,t._key);throw new R(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_l(t)}.`)}function My(n,e){if(!Array.isArray(n)||n.length===0)throw new R(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function C0(n,e){if(e.isInequality()){const r=hl(n),i=e.field;if(r!==null&&!r.isEqual(i))throw new R(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Kf(n);s!==null&&k0(n,i,s)}const t=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new R(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new R(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function k0(n,e,t){if(!t.isEqual(e))throw new R(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class Up{convertValue(e,t="none"){switch(xi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw W()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ji(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Il(ze(e.latitude),ze(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=jf(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(fa(e));default:return null}}convertTimestamp(e){const t=Mr(e);return new Be(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=_e.fromString(e);ne(Ib(r));const i=new Fr(r.get(1),r.get(3)),s=new j(r.popFirst(5));return i.isEqual(t)||He(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function Rl(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class IM extends Up{constructor(e){super(),this.firestore=e}convertBytes(e){return new jn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Fe(this.firestore,null,t)}}/**
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
 */class gi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ir extends _a{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new zo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Tl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class zo extends ir{data(e={}){return super.data(e)}}class qr{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new gi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new zo(this._firestore,this._userDataWriter,r.key,r,new gi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new R(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new zo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new gi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new zo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new gi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:bM(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function bM(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}function A0(n,e){return n instanceof ir&&e instanceof ir?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof qr&&e instanceof qr&&n._firestore===e._firestore&&d0(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */function EM(n){n=be(n,Fe);const e=be(n.firestore,Ge);return o0(mt(e),n._key).then(t=>Vp(e,n,t))}class Hi extends Up{constructor(e){super(),this.firestore=e}convertBytes(e){return new jn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Fe(this.firestore,null,t)}}function TM(n){n=be(n,Fe);const e=be(n.firestore,Ge),t=mt(e),r=new Hi(e);return qO(t,n._key).then(i=>new ir(e,r,n._key,i,new gi(i!==null&&i.hasLocalMutations,!0),n.converter))}function SM(n){n=be(n,Fe);const e=be(n.firestore,Ge);return o0(mt(e),n._key,{source:"server"}).then(t=>Vp(e,n,t))}function R0(n){n=be(n,bt);const e=be(n.firestore,Ge),t=mt(e),r=new Hi(e);return E0(n._query),a0(t,n._query).then(i=>new qr(e,r,n,i))}function CM(n){n=be(n,bt);const e=be(n.firestore,Ge),t=mt(e),r=new Hi(e);return jO(t,n._query).then(i=>new qr(e,r,n,i))}function kM(n){n=be(n,bt);const e=be(n.firestore,Ge),t=mt(e),r=new Hi(e);return a0(t,n._query,{source:"server"}).then(i=>new qr(e,r,n,i))}function Ly(n,e,t){n=be(n,Fe);const r=be(n.firestore,Ge),i=Rl(n.converter,e,t);return Ja(r,[El(Ki(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Ve.none())])}function Fy(n,e,t,...r){n=be(n,Fe);const i=be(n.firestore,Ge),s=Ki(i);let o;return o=typeof(e=ie(e))=="string"||e instanceof $r?Dp(s,"updateDoc",n._key,e,t,r):Np(s,"updateDoc",n._key,e),Ja(i,[o.toMutation(n._key,Ve.exists(!0))])}function AM(n){return Ja(be(n.firestore,Ge),[new eo(n._key,Ve.none())])}function RM(n,e){const t=be(n.firestore,Ge),r=Tn(n),i=Rl(n.converter,e);return Ja(t,[El(Ki(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Ve.exists(!1))]).then(()=>r)}function x0(n,...e){var t,r,i;n=ie(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||pd(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(pd(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(n instanceof Fe)u=be(n.firestore,Ge),l=Xs(n._key.path),c={next:h=>{e[o]&&e[o](Vp(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=be(n,bt);u=be(h.firestore,Ge),l=h._query;const d=new Hi(u);c={next:f=>{e[o]&&e[o](new qr(u,d,h,f))},error:e[o+1],complete:e[o+2]},E0(n._query)}return function(h,d,f,m){const p=new vl(m),y=new yp(d,p,f);return h.asyncQueue.enqueueAndForget(async()=>pp(await Vs(h),y)),()=>{p.Dc(),h.asyncQueue.enqueueAndForget(async()=>mp(await Vs(h),y))}}(mt(u),l,a,c)}function xM(n,e){return zO(mt(n=be(n,Ge)),pd(e)?e:{next:e})}function Ja(n,e){return function(t,r){const i=new ut;return t.asyncQueue.enqueueAndForget(async()=>vO(await kp(t),r,i)),i.promise}(mt(n),e)}function Vp(n,e,t){const r=t.docs.get(e._key),i=new Hi(n);return new ir(n,i,e._key,r,new gi(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const NM={maxAttempts:5};/**
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
 */class DM{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Ki(e)}set(e,t,r){this._verifyNotCommitted();const i=_r(e,this._firestore),s=Rl(i.converter,t,r),o=El(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ve.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=_r(e,this._firestore);let o;return o=typeof(t=ie(t))=="string"||t instanceof $r?Dp(this._dataReader,"WriteBatch.update",s._key,t,r,i):Np(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Ve.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=_r(e,this._firestore);return this._mutations=this._mutations.concat(new eo(t._key,Ve.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new R(T.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function _r(n,e){if((n=ie(n)).firestore!==e)throw new R(T.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class PM extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Ki(e)}get(e){const t=_r(e,this._firestore),r=new IM(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return W();const s=i[0];if(s.isFoundDocument())return new _a(this._firestore,r,s.key,s,t.converter);if(s.isNoDocument())return new _a(this._firestore,r,t._key,null,t.converter);throw W()})}set(e,t,r){const i=_r(e,this._firestore),s=Rl(i.converter,t,r),o=El(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,t,r,...i){const s=_r(e,this._firestore);let o;return o=typeof(t=ie(t))=="string"||t instanceof $r?Dp(this._dataReader,"Transaction.update",s._key,t,r,i):Np(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=_r(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=_r(e,this._firestore),r=new Hi(this._firestore);return super.get(e).then(i=>new ir(this._firestore,r,t._key,i._document,new gi(!1,!1),t.converter))}}function ii(n,e,t){n=be(n,Ge);const r=Object.assign(Object.assign({},NM),t);return function(i){if(i.maxAttempts<1)throw new R(T.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new ut;return i.asyncQueue.enqueueAndForget(async()=>{const c=await VO(i);new FO(i.asyncQueue,c,o,s,a).run()}),a.promise}(mt(n),i=>e(new PM(n,i)),r)}/**
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
 */function OM(){return new Qa("deleteField")}function MM(){return new xp("serverTimestamp")}function LM(...n){return new uM("arrayUnion",n)}function FM(...n){return new lM("arrayRemove",n)}function UM(n){return new hM("increment",n)}(function(n,e=!0){(function(t){Js=t})(jr),Nr(new Bn("firestore",(t,{instanceIdentifier:r,options:i})=>{const s=t.getProvider("app").getImmediate(),o=new Ge(new WN(t.getProvider("auth-internal")),new XN(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new R(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fr(a.options.projectId,c)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ln(Dg,"3.12.0",n),Ln(Dg,"3.12.0","esm2017")})();const VM="/ticharlez34/assets/boi-39130d01.jpg";let Uy;const Kn=ln("test"),BM={data(){return{users:[],bosses:[]}},methods:{async getUsers(){var e=Kn.value.replace("@hotmail.com","");const t=Gn(Rp(Ot,"warriors"),T0("name","==",e));(await R0(t)).forEach(i=>{this.users.push(i.data())})},check(){var e=Kn.value.replace("@hotmail.com","");document.getElementById("check").innerHTML=e},change(n,e,t,r,i,s){document.getElementById("sword").src="https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/sword/sword"+n+".jpg",document.getElementById("glove").src="https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/glove/glove"+e+".jpg",document.getElementById("helmet").src="https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/helmet/helmet"+t+".jpg",document.getElementById("necklace").src="https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/necklace/necklace"+r+".jpg",document.getElementById("armour").src="https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/armour/armour"+i+".jpg",document.getElementById("shoes").src="https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/shoes/shoes"+s+".jpg",document.getElementById("loading").style.display="none"},equipSword(n){var t=Kn.value.replace("@hotmail.com","");const r=Tn(Ot,"warriors",t);ii(Ot,async i=>{i.update(r,{equipSword:n}),document.getElementById("sword").src="https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/sword/sword"+n+".jpg"})},equipHelmet(n){var t=Kn.value.replace("@hotmail.com","");const r=Tn(Ot,"warriors",t);ii(Ot,async i=>{i.update(r,{equipHelmet:n}),document.getElementById("helmet").src="https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/helmet/helmet"+n+".jpg"})},equipGlove(n){var t=Kn.value.replace("@hotmail.com","");const r=Tn(Ot,"warriors",t);ii(Ot,async i=>{i.update(r,{equipGlove:n}),document.getElementById("glove").src="https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/glove/glove"+n+".jpg"})},equipArmour(n){var t=Kn.value.replace("@hotmail.com","");const r=Tn(Ot,"warriors",t);ii(Ot,async i=>{i.update(r,{equipArmour:n}),document.getElementById("armour").src="https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/armour/armour"+n+".jpg"})},equipNecklace(n){var t=Kn.value.replace("@hotmail.com","");const r=Tn(Ot,"warriors",t);ii(Ot,async i=>{i.update(r,{equipNecklace:n}),document.getElementById("necklace").src="https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/necklace/necklace"+n+".jpg"})},equipShoes(n){var t=Kn.value.replace("@hotmail.com","");const r=Tn(Ot,"warriors",t);ii(Ot,async i=>{i.update(r,{equipShoes:n}),document.getElementById("shoes").src="https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/shoes/shoes"+n+".jpg"})}},setup(){},mounted(){Uy=Ri(),$w(Uy,n=>{n&&(Kn.value=n.email)})}},$M={class:"center mt-8"},qM={key:0},jM={class:"left"},zM={class:"name"},KM={class:"containerEquip"},GM=qd('<div class="equipLeft"><div><img id="helmet" class="imgEquip" src="https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/armour/armour0.jpg"></div><div><img id="glove" class="imgEquip" src="https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/glove/glove0.jpg"></div><div><img id="sword" class="imgEquip" src="https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/sword/sword0.jpg"></div></div><div class="equipMid"><div><img class="imgPlayer" src="'+VM+'"></div></div><div class="equipRight"><div><img id="necklace" class="imgEquip" src="https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/sword/sword0.jpg"></div><div><img id="armour" class="imgEquip" src="https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/sword/sword0.jpg"></div><div><img id="shoes" class="imgEquip" src="https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/sword/sword0.jpg"></div></div>',3),HM=["onClick"],WM={class:"right"},QM=X("h1",{class:"invtitle"},"Inventaire",-1),YM={class:"mt-3"},JM={key:0,class:"itemTitle"},XM={class:"inventory"},ZM=["id"],eL=["onClick","src"],tL={key:1,class:"itemTitle"},nL={class:"inventory"},rL=["id"],iL=["onClick","src"],sL={key:2,class:"itemTitle"},oL={class:"inventory"},aL=["id"],cL=["onClick","src"],uL={key:3,class:"itemTitle"},lL={class:"inventory"},hL=["id"],dL=["onClick","src"],fL={key:4,class:"itemTitle"},pL={class:"inventory"},mL=["id"],gL=["onClick","src"],yL={key:5,class:"itemTitle"},vL={class:"inventory"},wL=["id"],_L=["onClick","src"];function IL(n,e,t,r,i,s){return Te(),ke("div",$M,[i.users<=0?(Te(),ke("div",qM,[X("button",{class:"boutonC",onClick:e[0]||(e[0]=(...o)=>s.getUsers&&s.getUsers(...o))},"Voir votre personnage")])):bn("",!0),(Te(!0),ke(et,null,Zr(i.users,o=>(Te(),ke("div",{class:"characterSlot",key:o.name},[X("div",jM,[X("h1",zM,xd(o.name),1),X("div",KM,[GM,X("a",{id:"loading",class:"load",onClick:a=>s.change(o.equipSword,o.equipGlove,o.equipHelmet,o.equipNecklace,o.equipArmour,o.equipShoes)},"Charger l'équipement",8,HM)])]),X("div",WM,[QM,X("div",YM,[o.helmets>=1?(Te(),ke("h1",JM,"Casques")):bn("",!0),X("div",XM,[(Te(!0),ke(et,null,Zr(o.helmets,a=>(Te(),ke("div",{id:"helmet"+a,key:a},[X("img",{onClick:c=>s.equipHelmet(a),class:"invItem",src:"https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/helmet/helmet"+a+".jpg"},null,8,eL)],8,ZM))),128))]),o.necklaces>=1?(Te(),ke("h1",tL,"Colliers")):bn("",!0),X("div",nL,[(Te(!0),ke(et,null,Zr(o.necklaces,a=>(Te(),ke("div",{id:"necklace"+a,key:a},[X("img",{onClick:c=>s.equipNecklace(a),class:"invItem",src:"https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/necklace/necklace"+a+".jpg"},null,8,iL)],8,rL))),128))]),o.armours>=1?(Te(),ke("h1",sL,"Plastron")):bn("",!0),X("div",oL,[(Te(!0),ke(et,null,Zr(o.armours,a=>(Te(),ke("div",{id:"armour"+a,key:a},[X("img",{onClick:c=>s.equipArmour(a),class:"invItem",src:"https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/armour/armour"+a+".jpg"},null,8,cL)],8,aL))),128))]),o.gloves>=1?(Te(),ke("h1",uL,"Gants")):bn("",!0),X("div",lL,[(Te(!0),ke(et,null,Zr(o.gloves,a=>(Te(),ke("div",{id:"glove"+a,key:a},[X("img",{onClick:c=>s.equipGlove(a),class:"invItem",src:"https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/glove/glove"+a+".jpg"},null,8,dL)],8,hL))),128))]),o.shoes>=1?(Te(),ke("h1",fL,"Bottes")):bn("",!0),X("div",pL,[(Te(!0),ke(et,null,Zr(o.shoes,a=>(Te(),ke("div",{id:"shoes"+a,key:a},[X("img",{onClick:c=>s.equipShoes(a),class:"invItem",src:"https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/shoes/shoes"+a+".jpg"},null,8,gL)],8,mL))),128))]),o.swords>=1?(Te(),ke("h1",yL,"Armes")):bn("",!0),X("div",vL,[(Te(!0),ke(et,null,Zr(o.swords,a=>(Te(),ke("div",{id:"sword"+a,key:a},[X("img",{onClick:c=>s.equipSword(a),class:"invItem",src:"https://raw.githubusercontent.com/Shaxten/ticharlez34/main/src/assets/img/sword/sword"+a+".jpg"},null,8,_L)],8,wL))),128))])])])]))),128))])}const bL=m_(BM,[["render",IL]]),EL=[{path:"/ticharlez34/",name:"home",component:Ax},{path:"/ticharlez34/createAccount/",name:"createAccount",component:Px},{path:"/ticharlez34/login/",name:"login",component:Vx},{path:"/ticharlez34/twitch/",name:"twitch",component:bL}],TL=cx({history:TR(),routes:EL});/**
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
 */class SL{constructor(e,t){this._delegate=e,this.firebase=t,Hc(e,new Bn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),iw(this._delegate)))}_getService(e,t=Rr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Rr){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Hc(this._delegate,e)}_addOrOverwriteComponent(e){nw(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const CL={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Vy=new Bi("app-compat","Firebase",CL);/**
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
 */function kL(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:Ln,setLogLevel:ow,onLog:sw,apps:null,SDK_VERSION:jr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:ZC}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Rr,!xm(e,u))throw Vy.create("no-app",{appName:u});return e[u]}i.App=n;function s(u,l={}){const h=Qd(u,l);if(xm(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(Nr(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw Vy.create("invalid-app-argument",{appName:l});return f[h]()};u.serviceProps!==void 0&&Kc(d,u.serviceProps),t[h]=d,n.prototype[h]=function(...f){return this._getService.bind(this,l).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?t[h]:null}function c(u,l){return l==="serverAuth"?null:l}return t}/**
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
 */function N0(){const n=kL(SL);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:N0,extendNamespace:e,createSubscribe:Xv,ErrorFactory:Bi,deepExtend:Kc});function e(t){Kc(n,t)}return n}const AL=N0();/**
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
 */const By=new Ou("@firebase/app-compat"),RL="@firebase/app-compat",xL="0.2.10";/**
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
 */function NL(n){Ln(RL,xL,n)}/**
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
 */if(LS()&&self.firebase!==void 0){By.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&By.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const so=AL;NL();var DL="firebase",PL="9.22.0";/**
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
 */so.registerVersion(DL,PL,"app-compat");const OL="@firebase/firestore-compat",ML="0.3.9";/**
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
 */function Bp(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new R("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function $y(){if(typeof Uint8Array>"u")throw new R("unimplemented","Uint8Arrays are not available in this environment.")}function qy(){if(!TD())throw new R("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Ia{constructor(e){this._delegate=e}static fromBase64String(e){return qy(),new Ia(jn.fromBase64String(e))}static fromUint8Array(e){return $y(),new Ia(jn.fromUint8Array(e))}toBase64(){return qy(),this._delegate.toBase64()}toUint8Array(){return $y(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function gd(n){return LL(n,["next","error","complete"])}function LL(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
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
 */class FL{enableIndexedDbPersistence(e,t){return XO(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return ZO(e._delegate)}clearIndexedDbPersistence(e){return eM(e._delegate)}}class D0{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Fr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&vn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){HO(this._delegate,e,t,r)}enableNetwork(){return nM(this._delegate)}disableNetwork(){return rM(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,u0("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return tM(this._delegate)}onSnapshotsInSync(e){return xM(this._delegate,e)}get app(){if(!this._appCompat)throw new R("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Bs(this,Rp(this._delegate,e))}catch(t){throw Lt(t,"collection()","Firestore.collection()")}}doc(e){try{return new on(this,Tn(this._delegate,e))}catch(t){throw Lt(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Mt(this,WO(this._delegate,e))}catch(t){throw Lt(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return ii(this._delegate,t=>e(new P0(this,t)))}batch(){return mt(this._delegate),new O0(new DM(this._delegate,e=>Ja(this._delegate,e)))}loadBundle(e){return iM(this._delegate,e)}namedQuery(e){return sM(this._delegate,e).then(t=>t?new Mt(this,t):null)}}class xl extends Up{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ia(new jn(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return on.forKey(t,this.firestore,null)}}function UL(n){zN(n)}class P0{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new xl(e)}get(e){const t=yi(e);return this._delegate.get(t).then(r=>new ba(this._firestore,new ir(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=yi(e);return r?(Bp("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=yi(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=yi(e);return this._delegate.delete(t),this}}class O0{constructor(e){this._delegate=e}set(e,t,r){const i=yi(e);return r?(Bp("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=yi(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=yi(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Ui{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new zo(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Ea(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Ui.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new Ui(e,new xl(e),t),i.set(t,s)),s}}Ui.INSTANCES=new WeakMap;class on{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new xl(e)}static forPath(e,t,r){if(e.length%2!==0)throw new R("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new on(t,new Fe(t._delegate,r,new j(e)))}static forKey(e,t,r){return new on(t,new Fe(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Bs(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Bs(this.firestore,Rp(this._delegate,e))}catch(t){throw Lt(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=ie(e),e instanceof Fe?h0(this._delegate,e):!1}set(e,t){t=Bp("DocumentReference.set",t);try{return t?Ly(this._delegate,e,t):Ly(this._delegate,e)}catch(r){throw Lt(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?Fy(this._delegate,e):Fy(this._delegate,e,t,...r)}catch(i){throw Lt(i,"updateDoc()","DocumentReference.update()")}}delete(){return AM(this._delegate)}onSnapshot(...e){const t=M0(e),r=L0(e,i=>new ba(this.firestore,new ir(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return x0(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=TM(this._delegate):(e==null?void 0:e.source)==="server"?t=SM(this._delegate):t=EM(this._delegate),t.then(r=>new ba(this.firestore,new ir(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new on(this.firestore,e?this._delegate.withConverter(Ui.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Lt(n,e,t){return n.message=n.message.replace(e,t),n}function M0(n){for(const e of n)if(typeof e=="object"&&!gd(e))return e;return{}}function L0(n,e){var t,r;let i;return gd(n[0])?i=n[0]:gd(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class ba{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new on(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return A0(this._delegate,e._delegate)}}class Ea extends ba{data(e){const t=this._delegate.data(e);return KN(t!==void 0),t}}class Mt{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new xl(e)}where(e,t,r){try{return new Mt(this.firestore,Gn(this._delegate,T0(e,t,r)))}catch(i){throw Lt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Mt(this.firestore,Gn(this._delegate,pM(e,t)))}catch(r){throw Lt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Mt(this.firestore,Gn(this._delegate,mM(e)))}catch(t){throw Lt(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Mt(this.firestore,Gn(this._delegate,gM(e)))}catch(t){throw Lt(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Mt(this.firestore,Gn(this._delegate,yM(...e)))}catch(t){throw Lt(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Mt(this.firestore,Gn(this._delegate,vM(...e)))}catch(t){throw Lt(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Mt(this.firestore,Gn(this._delegate,wM(...e)))}catch(t){throw Lt(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Mt(this.firestore,Gn(this._delegate,_M(...e)))}catch(t){throw Lt(t,"endAt()","Query.endAt()")}}isEqual(e){return d0(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=CM(this._delegate):(e==null?void 0:e.source)==="server"?t=kM(this._delegate):t=R0(this._delegate),t.then(r=>new yd(this.firestore,new qr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=M0(e),r=L0(e,i=>new yd(this.firestore,new qr(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return x0(this._delegate,t,r)}withConverter(e){return new Mt(this.firestore,e?this._delegate.withConverter(Ui.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class VL{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Ea(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class yd{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Mt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Ea(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new VL(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new Ea(this._firestore,r))})}isEqual(e){return A0(this._delegate,e._delegate)}}class Bs extends Mt{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new on(this.firestore,e):null}doc(e){try{return e===void 0?new on(this.firestore,Tn(this._delegate)):new on(this.firestore,Tn(this._delegate,e))}catch(t){throw Lt(t,"doc()","CollectionReference.doc()")}}add(e){return RM(this._delegate,e).then(t=>new on(this.firestore,t))}isEqual(e){return h0(this._delegate,e._delegate)}withConverter(e){return new Bs(this.firestore,e?this._delegate.withConverter(Ui.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function yi(n){return be(n,Fe)}/**
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
 */class $p{constructor(...e){this._delegate=new $r(...e)}static documentId(){return new $p(We.keyField().canonicalString())}isEqual(e){return e=ie(e),e instanceof $r?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class hi{constructor(e){this._delegate=e}static serverTimestamp(){const e=MM();return e._methodName="FieldValue.serverTimestamp",new hi(e)}static delete(){const e=OM();return e._methodName="FieldValue.delete",new hi(e)}static arrayUnion(...e){const t=LM(...e);return t._methodName="FieldValue.arrayUnion",new hi(t)}static arrayRemove(...e){const t=FM(...e);return t._methodName="FieldValue.arrayRemove",new hi(t)}static increment(e){const t=UM(e);return t._methodName="FieldValue.increment",new hi(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const BL={Firestore:D0,GeoPoint:Il,Timestamp:Be,Blob:Ia,Transaction:P0,WriteBatch:O0,DocumentReference:on,DocumentSnapshot:ba,Query:Mt,QueryDocumentSnapshot:Ea,QuerySnapshot:yd,CollectionReference:Bs,FieldPath:$p,FieldValue:hi,setLogLevel:UL,CACHE_SIZE_UNLIMITED:JO};function $L(n,e){n.INTERNAL.registerComponent(new Bn("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},BL)))}/**
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
 */function qL(n){$L(n,(e,t)=>new D0(e,t,new FL)),n.registerVersion(OL,ML)}qL(so);/**
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
 */function Vi(){return window}/**
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
 */const jL=2e3;async function zL(n,e,t){var r;const{BuildInfo:i}=Vi();mn(e.sessionId,"AuthEvent did not contain a session ID");const s=await QL(e.sessionId),o={};return Gs()?o.ibi=i.packageName:Ca()?o.apn=i.packageName:ht(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,xh(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function KL(n){const{BuildInfo:e}=Vi(),t={};Gs()?t.iosBundleId=e.packageName:Ca()?t.androidPackageName=e.packageName:ht(n,"operation-not-supported-in-this-environment"),await t_(n,t)}function GL(n){const{cordova:e}=Vi();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,_k()?"_blank":"_system","location=yes"),t(i)})})}async function HL(n,e,t){const{cordova:r}=Vi();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function u(){a||(a=window.setTimeout(()=>{o(_t(n,"redirect-cancelled-by-user"))},jL))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),Ca()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function WL(n){var e,t,r,i,s,o,a,c,u,l;const h=Vi();F(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),F(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),F(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),F(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),F(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function QL(n){const e=YL(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function YL(n){if(mn(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
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
 */const JL=20;class XL extends Zw{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function ZL(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:nF(),postBody:null,tenantId:n.tenantId,error:_t(n,"no-auth-event")}}function eF(n,e){return vd()._set(wd(n),e)}async function jy(n){const e=await vd()._get(wd(n));return e&&await vd()._remove(wd(n)),e}function tF(n,e){var t,r;const i=iF(e);if(i.includes("/__/auth/callback")){const s=Uc(i),o=s.firebaseError?rF(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],c=a?_t(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function nF(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<JL;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function vd(){return Yt($u)}function wd(n){return Ii("authEvent",n.config.apiKey,n.name)}function rF(n){try{return JSON.parse(n)}catch{return null}}function iF(n){const e=Uc(n),t=e.link?decodeURIComponent(e.link):void 0,r=Uc(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Uc(i).link||i||r||t||n}function Uc(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return ss(t.join("?"))}/**
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
 */const sF=500;class oF{constructor(){this._redirectPersistence=Pr,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Ku,this._overrideRedirectResult=pf}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new XL(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){ht(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){WL(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),v1(),await this._originValidation(e);const o=ZL(e,r,i);await eF(e,o);const a=await zL(e,o,t),c=await GL(a);return HL(e,s,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=KL(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Vi(),o=setTimeout(async()=>{await jy(e),t.onEvent(zy())},sF),a=async l=>{clearTimeout(o);const h=await jy(e);let d=null;h&&(l!=null&&l.url)&&(d=tF(h,l.url)),t.onEvent(d||zy())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,u=`${s.packageName.toLowerCase()}://`;Vi().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const aF=oF;function zy(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:_t("no-auth-event")}}/**
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
 */function cF(n,e){Ye(n)._logFramework(e)}var uF="@firebase/auth-compat",lF="0.4.2";/**
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
 */const hF=1e3;function Ko(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function dF(){return Ko()==="http:"||Ko()==="https:"}function F0(n=je()){return!!((Ko()==="file:"||Ko()==="ionic:"||Ko()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function fF(){return Gd()||Kd()}function pF(){return Jv()&&(document==null?void 0:document.documentMode)===11}function mF(n=je()){return/Edge\/\d+/.test(n)}function gF(n=je()){return pF()||mF(n)}function U0(){try{const n=self.localStorage,e=Aa();if(n)return n.setItem(e,"1"),n.removeItem(e),gF()?Xo():!0}catch{return qp()&&Xo()}return!1}function qp(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function hh(){return(dF()||Yv()||F0())&&!fF()&&U0()&&!qp()}function V0(){return F0()&&typeof document<"u"}async function yF(){return V0()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},hF);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function vF(){return typeof window<"u"?window:null}/**
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
 */const Qt={LOCAL:"local",NONE:"none",SESSION:"session"},Io=F,B0="persistence";function wF(n,e){if(Io(Object.values(Qt).includes(e),n,"invalid-persistence-type"),Gd()){Io(e!==Qt.SESSION,n,"unsupported-persistence-type");return}if(Kd()){Io(e===Qt.NONE,n,"unsupported-persistence-type");return}if(qp()){Io(e===Qt.NONE||e===Qt.LOCAL&&Xo(),n,"unsupported-persistence-type");return}Io(e===Qt.NONE||U0(),n,"unsupported-persistence-type")}async function _d(n){await n._initializationPromise;const e=$0(),t=Ii(B0,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function _F(n,e){const t=$0();if(!t)return[];const r=Ii(B0,n,e);switch(t.getItem(r)){case Qt.NONE:return[Es];case Qt.LOCAL:return[Ss,Pr];case Qt.SESSION:return[Pr];default:return[]}}function $0(){var n;try{return((n=vF())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
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
 */const IF=F;class Tr{constructor(){this.browserResolver=Yt(n_),this.cordovaResolver=Yt(aF),this.underlyingResolver=null,this._redirectPersistence=Pr,this._completeRedirectFn=Ku,this._overrideRedirectResult=pf}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return V0()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return IF(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await yF();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function q0(n){return n.unwrap()}function bF(n){return n.wrapped()}/**
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
 */function EF(n){return j0(n)}function TF(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new SF(n,TA(n,e))}else if(r){const i=j0(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function j0(n){const{_tokenResponse:e}=n instanceof Ut?n.customData:n;if(!e)return null;if(!(n instanceof Ut)&&"temporaryProof"in e&&"phoneNumber"in e)return Ai.credentialFromResult(n);const t=e.providerId;if(!t||t===lo.PASSWORD)return null;let r;switch(t){case lo.GOOGLE:r=kn;break;case lo.FACEBOOK:r=Cn;break;case lo.GITHUB:r=An;break;case lo.TWITTER:r=Rn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?Ts._create(t,a):$n._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new fs(t).credential({idToken:i,accessToken:s,rawNonce:c})}return n instanceof Ut?r.credentialFromError(n):r.credentialFromResult(n)}function jt(n,e){return e.catch(t=>{throw t instanceof Ut&&TF(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:EF(t),additionalUserInfo:_A(t),user:Xn.getOrCreate(i)}})}async function Id(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>jt(n,t.confirm(r))}}class SF{constructor(e,t){this.resolver=t,this.auth=bF(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return jt(q0(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Xn{constructor(e){this._delegate=e,this.multiFactor=AA(e)}static getOrCreate(e){return Xn.USER_MAP.has(e)||Xn.USER_MAP.set(e,new Xn(e)),Xn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return jt(this.auth,Lw(this._delegate,e))}async linkWithPhoneNumber(e,t){return Id(this.auth,s1(this._delegate,e,t))}async linkWithPopup(e){return jt(this.auth,p1(this._delegate,e,Tr))}async linkWithRedirect(e){return await _d(Ye(this.auth)),E1(this._delegate,e,Tr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return jt(this.auth,Fw(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Id(this.auth,o1(this._delegate,e,t))}reauthenticateWithPopup(e){return jt(this.auth,f1(this._delegate,e,Tr))}async reauthenticateWithRedirect(e){return await _d(Ye(this.auth)),I1(this._delegate,e,Tr)}sendEmailVerification(e){return uA(this._delegate,e)}async unlink(e){return await Jk(this._delegate,e),this}updateEmail(e){return fA(this._delegate,e)}updatePassword(e){return pA(this._delegate,e)}updatePhoneNumber(e){return a1(this._delegate,e)}updateProfile(e){return dA(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return lA(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Xn.USER_MAP=new WeakMap;/**
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
 */const bo=F;class bd{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;bo(r,"invalid-api-key",{appName:e.name}),bo(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Tr:void 0;this._delegate=t.initialize({options:{persistence:CF(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(tk),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Xn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Aw(this._delegate,e,t)}applyActionCode(e){return nA(this._delegate,e)}checkActionCode(e){return Uw(this._delegate,e)}confirmPasswordReset(e,t){return tA(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return jt(this._delegate,of(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return cA(this._delegate,e)}isSignInWithEmailLink(e){return sA(this._delegate,e)}async getRedirectResult(){bo(hh(),this._delegate,"operation-not-supported-in-this-environment");const e=await S1(this._delegate,Tr);return e?jt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){cF(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=Ky(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=Ky(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return iA(this._delegate,e,t)}sendPasswordResetEmail(e,t){return eA(this._delegate,e,t||void 0)}async setPersistence(e){wF(this._delegate,e);let t;switch(e){case Qt.SESSION:t=Pr;break;case Qt.LOCAL:t=await Yt(Ss)._isAvailable()?Ss:$u;break;case Qt.NONE:t=Es;break;default:return ht("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return jt(this._delegate,Yk(this._delegate))}signInWithCredential(e){return jt(this._delegate,Bu(this._delegate,e))}signInWithCustomToken(e){return jt(this._delegate,Zk(this._delegate,e))}signInWithEmailAndPassword(e,t){return jt(this._delegate,af(this._delegate,e,t))}signInWithEmailLink(e,t){return jt(this._delegate,oA(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Id(this._delegate,i1(this._delegate,e,t))}async signInWithPopup(e){return bo(hh(),this._delegate,"operation-not-supported-in-this-environment"),jt(this._delegate,d1(this._delegate,e,Tr))}async signInWithRedirect(e){return bo(hh(),this._delegate,"operation-not-supported-in-this-environment"),await _d(this._delegate),w1(this._delegate,e,Tr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return rA(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}bd.Persistence=Qt;function Ky(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&Xn.getOrCreate(o)),error:e,complete:t}}function CF(n,e){const t=_F(n,e);if(typeof self<"u"&&!t.includes(Ss)&&t.push(Ss),typeof window<"u")for(const r of[$u,Pr])t.includes(r)||t.push(r);return t.includes(Es)||t.push(Es),t}/**
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
 */class jp{constructor(){this.providerId="phone",this._delegate=new Ai(q0(so.auth()))}static credential(e,t){return Ai.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}jp.PHONE_SIGN_IN_METHOD=Ai.PHONE_SIGN_IN_METHOD;jp.PROVIDER_ID=Ai.PROVIDER_ID;/**
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
 */const kF=F;class AF{constructor(e,t,r=so.app()){var i;kF((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new n1(e,t,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const RF="auth-compat";function xF(n){n.INTERNAL.registerComponent(new Bn(RF,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new bd(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Yi.EMAIL_SIGNIN,PASSWORD_RESET:Yi.PASSWORD_RESET,RECOVER_EMAIL:Yi.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Yi.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Yi.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Yi.VERIFY_EMAIL}},EmailAuthProvider:zr,FacebookAuthProvider:Cn,GithubAuthProvider:An,GoogleAuthProvider:kn,OAuthProvider:fs,SAMLAuthProvider:Qc,PhoneAuthProvider:jp,PhoneMultiFactorGenerator:r_,RecaptchaVerifier:AF,TwitterAuthProvider:Rn,Auth:bd,AuthCredential:Hs,Error:Ut}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(uF,lF)}xF(so);const gr={apiKey:"AIzaSyCFoWXWUQrM2LSbBQ8l0YLwMXob3BfCEQU",authDomain:"character-eebeb.firebaseapp.com",databaseURL:"https://character-eebeb-default-rtdb.firebaseio.com",projectId:"character-eebeb",storageBucket:"character-eebeb.appspot.com",messagingSenderId:"970965837555",appId:"1:970965837555:web:daaf738b4f273f549e3986"},z0=so.initializeApp(gr),Ot=z0.firestore(gr.apiKey,gr.authDomain,gr.databaseURL,gr.projectId,gr.storageBucket,gr.messagingSenderId,gr.appId);Ot.collection("users");Ot.collection("bosses");Ri(z0);const K0=IS(vx);K0.use(TL);K0.mount("#app");(function(){function n(e,t,r){function i(a,c){if(!t[a]){if(!e[a]){var u=typeof require=="function"&&require;if(!c&&u)return u(a,!0);if(s)return s(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var h=t[a]={exports:{}};e[a][0].call(h.exports,function(d){var f=e[a][1][d];return i(f||d)},h,h.exports,n,e,t,r)}return t[a].exports}for(var s=typeof require=="function"&&require,o=0;o<r.length;o++)i(r[o]);return i}return n})()({1:[function(n,e,t){var r=n("./lib/client");e.exports={client:r,Client:r}},{"./lib/client":3}],2:[function(n,e,t){function r(c,u){var l=Object.keys(c);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(c);u&&(h=h.filter(function(d){return Object.getOwnPropertyDescriptor(c,d).enumerable})),l.push.apply(l,h)}return l}function i(c){for(var u=1;u<arguments.length;u++){var l=arguments[u]!=null?arguments[u]:{};u%2?r(Object(l),!0).forEach(function(h){s(c,h,l[h])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach(function(h){Object.defineProperty(c,h,Object.getOwnPropertyDescriptor(l,h))})}return c}function s(c,u,l){return u in c?Object.defineProperty(c,u,{value:l,enumerable:!0,configurable:!0,writable:!0}):c[u]=l,c}var o=n("node-fetch"),a=n("./utils");e.exports=function(u,l){var h=u.url!==void 0?u.url:u.uri;if(a.isURL(h)||(h="https://api.twitch.tv/kraken".concat(h[0]==="/"?h:"/".concat(h))),a.isNode()){var d=Object.assign({method:"GET",json:!0},u);if(d.qs){var f=new URLSearchParams(d.qs);h+="?".concat(f)}var m={};"fetchAgent"in this.opts.connection&&(m.agent=this.opts.connection.fetchAgent);var p=o(h,i(i({},m),{},{method:d.method,headers:d.headers,body:d.body})),y={};p.then(function(N){return y={statusCode:N.status,headers:N.headers},d.json?N.json():N.text()}).then(function(N){return l(null,y,N)},function(N){return l(N,y,null)})}else{var _=Object.assign({method:"GET",headers:{}},u,{url:h}),S=new XMLHttpRequest;S.open(_.method,_.url,!0);for(var L in _.headers)S.setRequestHeader(L,_.headers[L]);S.responseType="json",S.addEventListener("load",function(N){S.readyState===4&&(S.status!==200?l(S.status,null,null):l(null,null,S.response))}),S.send()}}},{"./utils":9,"node-fetch":10}],3:[function(n,e,t){(function(r){(function(){function i(K,w){var D=Object.keys(K);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(K);w&&(b=b.filter(function(B){return Object.getOwnPropertyDescriptor(K,B).enumerable})),D.push.apply(D,b)}return D}function s(K){for(var w=1;w<arguments.length;w++){var D=arguments[w]!=null?arguments[w]:{};w%2?i(Object(D),!0).forEach(function(b){o(K,b,D[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(K,Object.getOwnPropertyDescriptors(D)):i(Object(D)).forEach(function(b){Object.defineProperty(K,b,Object.getOwnPropertyDescriptor(D,b))})}return K}function o(K,w,D){return w in K?Object.defineProperty(K,w,{value:D,enumerable:!0,configurable:!0,writable:!0}):K[w]=D,K}function a(K){return h(K)||l(K)||u(K)||c()}function c(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u(K,w){if(K){if(typeof K=="string")return d(K,w);var D=Object.prototype.toString.call(K).slice(8,-1);if(D==="Object"&&K.constructor&&(D=K.constructor.name),D==="Map"||D==="Set")return Array.from(K);if(D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))return d(K,w)}}function l(K){if(typeof Symbol<"u"&&K[Symbol.iterator]!=null||K["@@iterator"]!=null)return Array.from(K)}function h(K){if(Array.isArray(K))return d(K)}function d(K,w){(w==null||w>K.length)&&(w=K.length);for(var D=0,b=new Array(w);D<w;D++)b[D]=K[D];return b}var f=typeof r<"u"?r:typeof window<"u"?window:{},m=f.WebSocket||n("ws"),p=f.fetch||n("node-fetch"),y=n("./api"),_=n("./commands"),S=n("./events").EventEmitter,L=n("./logger"),N=n("./parser"),he=n("./timer"),x=n("./utils"),Ee=!1,ae=function K(w){if(!(this instanceof K))return new K(w);this.opts=x.get(w,{}),this.opts.channels=this.opts.channels||[],this.opts.connection=this.opts.connection||{},this.opts.identity=this.opts.identity||{},this.opts.options=this.opts.options||{},this.clientId=x.get(this.opts.options.clientId,null),this._globalDefaultChannel=x.channel(x.get(this.opts.options.globalDefaultChannel,"#tmijs")),this._skipMembership=x.get(this.opts.options.skipMembership,!1),this._skipUpdatingEmotesets=x.get(this.opts.options.skipUpdatingEmotesets,!1),this._updateEmotesetsTimer=null,this._updateEmotesetsTimerDelay=x.get(this.opts.options.updateEmotesetsTimer,6e4),this.maxReconnectAttempts=x.get(this.opts.connection.maxReconnectAttempts,1/0),this.maxReconnectInterval=x.get(this.opts.connection.maxReconnectInterval,3e4),this.reconnect=x.get(this.opts.connection.reconnect,!0),this.reconnectDecay=x.get(this.opts.connection.reconnectDecay,1.5),this.reconnectInterval=x.get(this.opts.connection.reconnectInterval,1e3),this.reconnecting=!1,this.reconnections=0,this.reconnectTimer=this.reconnectInterval,this.secure=x.get(this.opts.connection.secure,!this.opts.connection.server&&!this.opts.connection.port),this.emotes="",this.emotesets={},this.channels=[],this.currentLatency=0,this.globaluserstate={},this.lastJoined="",this.latency=new Date,this.moderators={},this.pingLoop=null,this.pingTimeout=null,this.reason="",this.username="",this.userstate={},this.wasCloseCalled=!1,this.ws=null;var D="error";this.opts.options.debug&&(D="info"),this.log=this.opts.logger||L;try{L.setLevel(D)}catch{}this.opts.channels.forEach(function(b,B,ee){return ee[B]=x.channel(b)}),S.call(this),this.setMaxListeners(0)};x.inherits(ae,S);for(var Et in _)ae.prototype[Et]=_[Et];ae.prototype.emits=function(w,D){for(var b=0;b<w.length;b++){var B=b<D.length?D[b]:D[D.length-1];this.emit.apply(this,[w[b]].concat(B))}},ae.prototype.api=function(){Ee||(this.log.warn("Client.prototype.api is deprecated and will be removed for version 2.0.0"),Ee=!0),y.apply(void 0,arguments)},ae.prototype.handleMessage=function(w){var D=this;if(w){this.listenerCount("raw_message")&&this.emit("raw_message",JSON.parse(JSON.stringify(w)),w);var b=x.channel(x.get(w.params[0],null)),B=x.get(w.params[1],null),ee=x.get(w.tags["msg-id"],null),Y=w.tags=N.badges(N.badgeInfo(N.emotes(w.tags)));for(var de in Y)if(!(de==="emote-sets"||de==="ban-duration"||de==="bits")){var se=Y[de];typeof se=="boolean"?se=null:se==="1"?se=!0:se==="0"?se=!1:typeof se=="string"&&(se=x.unescapeIRC(se)),Y[de]=se}if(w.prefix===null)switch(w.command){case"PING":this.emit("ping"),this._isConnected()&&this.ws.send("PONG");break;case"PONG":{var Bt=new Date;this.currentLatency=(Bt.getTime()-this.latency.getTime())/1e3,this.emits(["pong","_promisePing"],[[this.currentLatency]]),clearTimeout(this.pingTimeout);break}default:this.log.warn(`Could not parse message with no prefix:
`.concat(JSON.stringify(w,null,4)));break}else if(w.prefix==="tmi.twitch.tv")switch(w.command){case"002":case"003":case"004":case"372":case"375":case"CAP":break;case"001":this.username=w.params[0];break;case"376":{this.log.info("Connected to server."),this.userstate[this._globalDefaultChannel]={},this.emits(["connected","_promiseConnect"],[[this.server,this.port],[null]]),this.reconnections=0,this.reconnectTimer=this.reconnectInterval,this.pingLoop=setInterval(function(){D._isConnected()&&D.ws.send("PING"),D.latency=new Date,D.pingTimeout=setTimeout(function(){D.ws!==null&&(D.wasCloseCalled=!1,D.log.error("Ping timeout."),D.ws.close(),clearInterval(D.pingLoop),clearTimeout(D.pingTimeout),clearTimeout(D._updateEmotesetsTimer))},x.get(D.opts.connection.timeout,9999))},6e4);var Dt=x.get(this.opts.options.joinInterval,2e3);Dt<300&&(Dt=300);var ot=new he(Dt),Je=a(new Set([].concat(a(this.opts.channels),a(this.channels))));this.channels=[];for(var Zt=function(X0){var Z0=Je[X0];ot.add(function(){D._isConnected()&&D.join(Z0).catch(function(eE){return D.log.error(eE)})})},en=0;en<Je.length;en++)Zt(en);ot.next();break}case"NOTICE":{var Tt=[null],De=[b,ee,B],k=[ee],G=[b,!0],V=[b,!1],Q=[De,Tt],oe=[De,k],g="[".concat(b,"] ").concat(B);switch(ee){case"subs_on":this.log.info("[".concat(b,"] This room is now in subscribers-only mode.")),this.emits(["subscriber","subscribers","_promiseSubscribers"],[G,G,Tt]);break;case"subs_off":this.log.info("[".concat(b,"] This room is no longer in subscribers-only mode.")),this.emits(["subscriber","subscribers","_promiseSubscribersoff"],[V,V,Tt]);break;case"emote_only_on":this.log.info("[".concat(b,"] This room is now in emote-only mode.")),this.emits(["emoteonly","_promiseEmoteonly"],[G,Tt]);break;case"emote_only_off":this.log.info("[".concat(b,"] This room is no longer in emote-only mode.")),this.emits(["emoteonly","_promiseEmoteonlyoff"],[V,Tt]);break;case"slow_on":case"slow_off":break;case"followers_on_zero":case"followers_on":case"followers_off":break;case"r9k_on":this.log.info("[".concat(b,"] This room is now in r9k mode.")),this.emits(["r9kmode","r9kbeta","_promiseR9kbeta"],[G,G,Tt]);break;case"r9k_off":this.log.info("[".concat(b,"] This room is no longer in r9k mode.")),this.emits(["r9kmode","r9kbeta","_promiseR9kbetaoff"],[V,V,Tt]);break;case"room_mods":{var v=B.split(": "),I=(v.length>1?v[1]:"").toLowerCase().split(", ").filter(function(_n){return _n});this.emits(["_promiseMods","mods"],[[null,I],[b,I]]);break}case"no_mods":this.emits(["_promiseMods","mods"],[[null,[]],[b,[]]]);break;case"vips_success":{B.endsWith(".")&&(B=B.slice(0,-1));var C=B.split(": "),A=(C.length>1?C[1]:"").toLowerCase().split(", ").filter(function(_n){return _n});this.emits(["_promiseVips","vips"],[[null,A],[b,A]]);break}case"no_vips":this.emits(["_promiseVips","vips"],[[null,[]],[b,[]]]);break;case"already_banned":case"bad_ban_admin":case"bad_ban_anon":case"bad_ban_broadcaster":case"bad_ban_global_mod":case"bad_ban_mod":case"bad_ban_self":case"bad_ban_staff":case"usage_ban":this.log.info(g),this.emits(["notice","_promiseBan"],oe);break;case"ban_success":this.log.info(g),this.emits(["notice","_promiseBan"],Q);break;case"usage_clear":this.log.info(g),this.emits(["notice","_promiseClear"],oe);break;case"usage_mods":this.log.info(g),this.emits(["notice","_promiseMods"],[De,[ee,[]]]);break;case"mod_success":this.log.info(g),this.emits(["notice","_promiseMod"],Q);break;case"usage_vips":this.log.info(g),this.emits(["notice","_promiseVips"],[De,[ee,[]]]);break;case"usage_vip":case"bad_vip_grantee_banned":case"bad_vip_grantee_already_vip":case"bad_vip_max_vips_reached":case"bad_vip_achievement_incomplete":this.log.info(g),this.emits(["notice","_promiseVip"],[De,[ee,[]]]);break;case"vip_success":this.log.info(g),this.emits(["notice","_promiseVip"],Q);break;case"usage_mod":case"bad_mod_banned":case"bad_mod_mod":this.log.info(g),this.emits(["notice","_promiseMod"],oe);break;case"unmod_success":this.log.info(g),this.emits(["notice","_promiseUnmod"],Q);break;case"unvip_success":this.log.info(g),this.emits(["notice","_promiseUnvip"],Q);break;case"usage_unmod":case"bad_unmod_mod":this.log.info(g),this.emits(["notice","_promiseUnmod"],oe);break;case"usage_unvip":case"bad_unvip_grantee_not_vip":this.log.info(g),this.emits(["notice","_promiseUnvip"],oe);break;case"color_changed":this.log.info(g),this.emits(["notice","_promiseColor"],Q);break;case"usage_color":case"turbo_only_color":this.log.info(g),this.emits(["notice","_promiseColor"],oe);break;case"commercial_success":this.log.info(g),this.emits(["notice","_promiseCommercial"],Q);break;case"usage_commercial":case"bad_commercial_error":this.log.info(g),this.emits(["notice","_promiseCommercial"],oe);break;case"hosts_remaining":{this.log.info(g);var O=isNaN(B[0])?0:parseInt(B[0]);this.emits(["notice","_promiseHost"],[De,[null,~~O]]);break}case"bad_host_hosting":case"bad_host_rate_exceeded":case"bad_host_error":case"usage_host":this.log.info(g),this.emits(["notice","_promiseHost"],[De,[ee,null]]);break;case"already_r9k_on":case"usage_r9k_on":this.log.info(g),this.emits(["notice","_promiseR9kbeta"],oe);break;case"already_r9k_off":case"usage_r9k_off":this.log.info(g),this.emits(["notice","_promiseR9kbetaoff"],oe);break;case"timeout_success":this.log.info(g),this.emits(["notice","_promiseTimeout"],Q);break;case"delete_message_success":this.log.info("[".concat(b," ").concat(B,"]")),this.emits(["notice","_promiseDeletemessage"],Q);break;case"already_subs_off":case"usage_subs_off":this.log.info(g),this.emits(["notice","_promiseSubscribersoff"],oe);break;case"already_subs_on":case"usage_subs_on":this.log.info(g),this.emits(["notice","_promiseSubscribers"],oe);break;case"already_emote_only_off":case"usage_emote_only_off":this.log.info(g),this.emits(["notice","_promiseEmoteonlyoff"],oe);break;case"already_emote_only_on":case"usage_emote_only_on":this.log.info(g),this.emits(["notice","_promiseEmoteonly"],oe);break;case"usage_slow_on":this.log.info(g),this.emits(["notice","_promiseSlow"],oe);break;case"usage_slow_off":this.log.info(g),this.emits(["notice","_promiseSlowoff"],oe);break;case"usage_timeout":case"bad_timeout_admin":case"bad_timeout_anon":case"bad_timeout_broadcaster":case"bad_timeout_duration":case"bad_timeout_global_mod":case"bad_timeout_mod":case"bad_timeout_self":case"bad_timeout_staff":this.log.info(g),this.emits(["notice","_promiseTimeout"],oe);break;case"untimeout_success":case"unban_success":this.log.info(g),this.emits(["notice","_promiseUnban"],Q);break;case"usage_unban":case"bad_unban_no_ban":this.log.info(g),this.emits(["notice","_promiseUnban"],oe);break;case"usage_delete":case"bad_delete_message_error":case"bad_delete_message_broadcaster":case"bad_delete_message_mod":this.log.info(g),this.emits(["notice","_promiseDeletemessage"],oe);break;case"usage_unhost":case"not_hosting":this.log.info(g),this.emits(["notice","_promiseUnhost"],oe);break;case"whisper_invalid_login":case"whisper_invalid_self":case"whisper_limit_per_min":case"whisper_limit_per_sec":case"whisper_restricted":case"whisper_restricted_recipient":this.log.info(g),this.emits(["notice","_promiseWhisper"],oe);break;case"no_permission":case"msg_banned":case"msg_room_not_found":case"msg_channel_suspended":case"tos_ban":case"invalid_user":this.log.info(g),this.emits(["notice","_promiseBan","_promiseClear","_promiseUnban","_promiseTimeout","_promiseDeletemessage","_promiseMods","_promiseMod","_promiseUnmod","_promiseVips","_promiseVip","_promiseUnvip","_promiseCommercial","_promiseHost","_promiseUnhost","_promiseJoin","_promisePart","_promiseR9kbeta","_promiseR9kbetaoff","_promiseSlow","_promiseSlowoff","_promiseFollowers","_promiseFollowersoff","_promiseSubscribers","_promiseSubscribersoff","_promiseEmoteonly","_promiseEmoteonlyoff","_promiseWhisper"],[De,[ee,b]]);break;case"msg_rejected":case"msg_rejected_mandatory":this.log.info(g),this.emit("automod",b,ee,B);break;case"unrecognized_cmd":this.log.info(g),this.emit("notice",b,ee,B);break;case"cmds_available":case"host_target_went_offline":case"msg_censored_broadcaster":case"msg_duplicate":case"msg_emoteonly":case"msg_verified_email":case"msg_ratelimit":case"msg_subsonly":case"msg_timedout":case"msg_bad_characters":case"msg_channel_blocked":case"msg_facebook":case"msg_followersonly":case"msg_followersonly_followed":case"msg_followersonly_zero":case"msg_slowmode":case"msg_suspended":case"no_help":case"usage_disconnect":case"usage_help":case"usage_me":case"unavailable_command":this.log.info(g),this.emit("notice",b,ee,B);break;case"host_on":case"host_off":break;default:B.includes("Login unsuccessful")||B.includes("Login authentication failed")?(this.wasCloseCalled=!1,this.reconnect=!1,this.reason=B,this.log.error(this.reason),this.ws.close()):B.includes("Error logging in")||B.includes("Improperly formatted auth")?(this.wasCloseCalled=!1,this.reconnect=!1,this.reason=B,this.log.error(this.reason),this.ws.close()):B.includes("Invalid NICK")?(this.wasCloseCalled=!1,this.reconnect=!1,this.reason="Invalid NICK.",this.log.error(this.reason),this.ws.close()):(this.log.warn(`Could not parse NOTICE from tmi.twitch.tv:
`.concat(JSON.stringify(w,null,4))),this.emit("notice",b,ee,B));break}break}case"USERNOTICE":{var $=Y["display-name"]||Y.login,U=Y["msg-param-sub-plan"]||"",q=x.unescapeIRC(x.get(Y["msg-param-sub-plan-name"],""))||null,M=U.includes("Prime"),Z={prime:M,plan:U,planName:q},J=~~(Y["msg-param-streak-months"]||0),re=Y["msg-param-recipient-display-name"]||Y["msg-param-recipient-user-name"],ce=~~Y["msg-param-mass-gift-count"];switch(Y["message-type"]=ee,ee){case"resub":this.emits(["resub","subanniversary"],[[b,$,J,B,Y,Z]]);break;case"sub":this.emits(["subscription","sub"],[[b,$,Z,B,Y]]);break;case"subgift":this.emit("subgift",b,$,J,re,Z,Y);break;case"anonsubgift":this.emit("anonsubgift",b,J,re,Z,Y);break;case"submysterygift":this.emit("submysterygift",b,$,ce,Z,Y);break;case"anonsubmysterygift":this.emit("anonsubmysterygift",b,ce,Z,Y);break;case"primepaidupgrade":this.emit("primepaidupgrade",b,$,Z,Y);break;case"giftpaidupgrade":{var ge=Y["msg-param-sender-name"]||Y["msg-param-sender-login"];this.emit("giftpaidupgrade",b,$,ge,Y);break}case"anongiftpaidupgrade":this.emit("anongiftpaidupgrade",b,$,Y);break;case"raid":{var Ne=Y["msg-param-displayName"]||Y["msg-param-login"],Ce=+Y["msg-param-viewerCount"];this.emit("raided",b,Ne,Ce,Y);break}case"ritual":{var qe=Y["msg-param-ritual-name"];switch(qe){case"new_chatter":this.emit("newchatter",b,$,Y,B);break;default:this.emit("ritual",qe,b,$,Y,B);break}break}default:this.emit("usernotice",ee,b,Y,B);break}break}case"HOSTTARGET":{var St=B.split(" "),wn=~~St[1]||0;St[0]==="-"?(this.log.info("[".concat(b,"] Exited host mode.")),this.emits(["unhost","_promiseUnhost"],[[b,wn],[null]])):(this.log.info("[".concat(b,"] Now hosting ").concat(St[0]," for ").concat(wn," viewer(s).")),this.emit("hosting",b,St[0],wn));break}case"CLEARCHAT":if(w.params.length>1){var Wi=x.get(w.tags["ban-duration"],null);Wi===null?(this.log.info("[".concat(b,"] ").concat(B," has been banned.")),this.emit("ban",b,B,null,w.tags)):(this.log.info("[".concat(b,"] ").concat(B," has been timed out for ").concat(Wi," seconds.")),this.emit("timeout",b,B,null,~~Wi,w.tags))}else this.log.info("[".concat(b,"] Chat was cleared by a moderator.")),this.emits(["clearchat","_promiseClear"],[[b],[null]]);break;case"CLEARMSG":if(w.params.length>1){var Jr=B,oo=Y.login;Y["message-type"]="messagedeleted",this.log.info("[".concat(b,"] ").concat(oo,"'s message has been deleted.")),this.emit("messagedeleted",b,oo,Jr,Y)}break;case"RECONNECT":this.log.info("Received RECONNECT request from Twitch.."),this.log.info("Disconnecting and reconnecting in ".concat(Math.round(this.reconnectTimer/1e3)," seconds..")),this.disconnect().catch(function(_n){return D.log.error(_n)}),setTimeout(function(){return D.connect().catch(function(_n){return D.log.error(_n)})},this.reconnectTimer);break;case"USERSTATE":w.tags.username=this.username,w.tags["user-type"]==="mod"&&(this.moderators[b]||(this.moderators[b]=[]),this.moderators[b].includes(this.username)||this.moderators[b].push(this.username)),!x.isJustinfan(this.getUsername())&&!this.userstate[b]&&(this.userstate[b]=Y,this.lastJoined=b,this.channels.push(b),this.log.info("Joined ".concat(b)),this.emit("join",b,x.username(this.getUsername()),!0)),w.tags["emote-sets"]!==this.emotes&&this._updateEmoteset(w.tags["emote-sets"]),this.userstate[b]=Y;break;case"GLOBALUSERSTATE":this.globaluserstate=Y,this.emit("globaluserstate",Y),typeof w.tags["emote-sets"]<"u"&&this._updateEmoteset(w.tags["emote-sets"]);break;case"ROOMSTATE":if(x.channel(this.lastJoined)===b&&this.emit("_promiseJoin",null,b),w.tags.channel=b,this.emit("roomstate",b,w.tags),!x.hasOwn(w.tags,"subs-only")){if(x.hasOwn(w.tags,"slow"))if(typeof w.tags.slow=="boolean"&&!w.tags.slow){var Ct=[b,!1,0];this.log.info("[".concat(b,"] This room is no longer in slow mode.")),this.emits(["slow","slowmode","_promiseSlowoff"],[Ct,Ct,[null]])}else{var tn=~~w.tags.slow,ao=[b,!0,tn];this.log.info("[".concat(b,"] This room is now in slow mode.")),this.emits(["slow","slowmode","_promiseSlow"],[ao,ao,[null]])}if(x.hasOwn(w.tags,"followers-only"))if(w.tags["followers-only"]==="-1"){var zp=[b,!1,0];this.log.info("[".concat(b,"] This room is no longer in followers-only mode.")),this.emits(["followersonly","followersmode","_promiseFollowersoff"],[zp,zp,[null]])}else{var G0=~~w.tags["followers-only"],Kp=[b,!0,G0];this.log.info("[".concat(b,"] This room is now in follower-only mode.")),this.emits(["followersonly","followersmode","_promiseFollowers"],[Kp,Kp,[null]])}}break;case"SERVERCHANGE":break;default:this.log.warn(`Could not parse message from tmi.twitch.tv:
`.concat(JSON.stringify(w,null,4)));break}else if(w.prefix==="jtv")switch(w.command){case"MODE":B==="+o"?(this.moderators[b]||(this.moderators[b]=[]),this.moderators[b].includes(w.params[2])||this.moderators[b].push(w.params[2]),this.emit("mod",b,w.params[2])):B==="-o"&&(this.moderators[b]||(this.moderators[b]=[]),this.moderators[b].filter(function(_n){return _n!==w.params[2]}),this.emit("unmod",b,w.params[2]));break;default:this.log.warn(`Could not parse message from jtv:
`.concat(JSON.stringify(w,null,4)));break}else switch(w.command){case"353":this.emit("names",w.params[2],w.params[3].split(" "));break;case"366":break;case"JOIN":{var Xa=w.prefix.split("!")[0];x.isJustinfan(this.getUsername())&&this.username===Xa&&(this.lastJoined=b,this.channels.push(b),this.log.info("Joined ".concat(b)),this.emit("join",b,Xa,!0)),this.username!==Xa&&this.emit("join",b,Xa,!1);break}case"PART":{var Gp=!1,Hp=w.prefix.split("!")[0];if(this.username===Hp){Gp=!0,this.userstate[b]&&delete this.userstate[b];var co=this.channels.indexOf(b);co!==-1&&this.channels.splice(co,1),co=this.opts.channels.indexOf(b),co!==-1&&this.opts.channels.splice(co,1),this.log.info("Left ".concat(b)),this.emit("_promisePart",null)}this.emit("part",b,Hp,Gp);break}case"WHISPER":{var Wp=w.prefix.split("!")[0];this.log.info("[WHISPER] <".concat(Wp,">: ").concat(B)),x.hasOwn(w.tags,"username")||(w.tags.username=Wp),w.tags["message-type"]="whisper";var H0=x.channel(w.tags.username);this.emits(["whisper","message"],[[H0,w.tags,B,!1]]);break}case"PRIVMSG":if(w.tags.username=w.prefix.split("!")[0],w.tags.username==="jtv"){var Qp=x.username(B.split(" ")[0]),Yp=B.includes("auto");if(B.includes("hosting you for")){var W0=x.extractNumber(B);this.emit("hosted",b,Qp,W0,Yp)}else B.includes("hosting you")&&this.emit("hosted",b,Qp,0,Yp)}else{var Jp=x.get(this.opts.options.messagesLogLevel,"info"),Za=x.actionMessage(B);if(w.tags["message-type"]=Za?"action":"chat",B=Za?Za[1]:B,x.hasOwn(w.tags,"bits"))this.emit("cheer",b,w.tags,B);else{if(x.hasOwn(w.tags,"msg-id")){if(w.tags["msg-id"]==="highlighted-message"){var Q0=w.tags["msg-id"];this.emit("redeem",b,w.tags.username,Q0,w.tags,B)}else if(w.tags["msg-id"]==="skip-subs-mode-message"){var Y0=w.tags["msg-id"];this.emit("redeem",b,w.tags.username,Y0,w.tags,B)}}else if(x.hasOwn(w.tags,"custom-reward-id")){var J0=w.tags["custom-reward-id"];this.emit("redeem",b,w.tags.username,J0,w.tags,B)}Za?(this.log[Jp]("[".concat(b,"] *<").concat(w.tags.username,">: ").concat(B)),this.emits(["action","message"],[[b,w.tags,B,!1]])):(this.log[Jp]("[".concat(b,"] <").concat(w.tags.username,">: ").concat(B)),this.emits(["chat","message"],[[b,w.tags,B,!1]]))}}break;default:this.log.warn(`Could not parse message:
`.concat(JSON.stringify(w,null,4)));break}}},ae.prototype.connect=function(){var w=this;return new Promise(function(D,b){w.server=x.get(w.opts.connection.server,"irc-ws.chat.twitch.tv"),w.port=x.get(w.opts.connection.port,80),w.secure&&(w.port=443),w.port===443&&(w.secure=!0),w.reconnectTimer=w.reconnectTimer*w.reconnectDecay,w.reconnectTimer>=w.maxReconnectInterval&&(w.reconnectTimer=w.maxReconnectInterval),w._openConnection(),w.once("_promiseConnect",function(B){B?b(B):D([w.server,~~w.port])})})},ae.prototype._openConnection=function(){var w="".concat(this.secure?"wss":"ws","://").concat(this.server,":").concat(this.port,"/"),D={};"agent"in this.opts.connection&&(D.agent=this.opts.connection.agent),this.ws=new m(w,"irc",D),this.ws.onmessage=this._onMessage.bind(this),this.ws.onerror=this._onError.bind(this),this.ws.onclose=this._onClose.bind(this),this.ws.onopen=this._onOpen.bind(this)},ae.prototype._onOpen=function(){var w=this;this._isConnected()&&(this.log.info("Connecting to ".concat(this.server," on port ").concat(this.port,"..")),this.emit("connecting",this.server,~~this.port),this.username=x.get(this.opts.identity.username,x.justinfan()),this._getToken().then(function(D){var b=x.password(D);w.log.info("Sending authentication to server.."),w.emit("logon");var B="twitch.tv/tags twitch.tv/commands";w._skipMembership||(B+=" twitch.tv/membership"),w.ws.send("CAP REQ :"+B),b?w.ws.send("PASS ".concat(b)):x.isJustinfan(w.username)&&w.ws.send("PASS SCHMOOPIIE"),w.ws.send("NICK ".concat(w.username))}).catch(function(D){w.emits(["_promiseConnect","disconnected"],[[D],["Could not get a token."]])}))},ae.prototype._getToken=function(){var w=this.opts.identity.password,D;return typeof w=="function"?(D=w(),D instanceof Promise?D:Promise.resolve(D)):Promise.resolve(w)},ae.prototype._onMessage=function(w){var D=this,b=w.data.trim().split(`\r
`);b.forEach(function(B){var ee=N.msg(B);ee&&D.handleMessage(ee)})},ae.prototype._onError=function(){var w=this;this.moderators={},this.userstate={},this.globaluserstate={},clearInterval(this.pingLoop),clearTimeout(this.pingTimeout),clearTimeout(this._updateEmotesetsTimer),this.reason=this.ws===null?"Connection closed.":"Unable to connect.",this.emits(["_promiseConnect","disconnected"],[[this.reason]]),this.reconnect&&this.reconnections===this.maxReconnectAttempts&&(this.emit("maxreconnect"),this.log.error("Maximum reconnection attempts reached.")),this.reconnect&&!this.reconnecting&&this.reconnections<=this.maxReconnectAttempts-1&&(this.reconnecting=!0,this.reconnections=this.reconnections+1,this.log.error("Reconnecting in ".concat(Math.round(this.reconnectTimer/1e3)," seconds..")),this.emit("reconnect"),setTimeout(function(){w.reconnecting=!1,w.connect().catch(function(D){return w.log.error(D)})},this.reconnectTimer)),this.ws=null},ae.prototype._onClose=function(){var w=this;this.moderators={},this.userstate={},this.globaluserstate={},clearInterval(this.pingLoop),clearTimeout(this.pingTimeout),clearTimeout(this._updateEmotesetsTimer),this.wasCloseCalled?(this.wasCloseCalled=!1,this.reason="Connection closed.",this.log.info(this.reason),this.emits(["_promiseConnect","_promiseDisconnect","disconnected"],[[this.reason],[null],[this.reason]])):(this.emits(["_promiseConnect","disconnected"],[[this.reason]]),this.reconnect&&this.reconnections===this.maxReconnectAttempts&&(this.emit("maxreconnect"),this.log.error("Maximum reconnection attempts reached.")),this.reconnect&&!this.reconnecting&&this.reconnections<=this.maxReconnectAttempts-1&&(this.reconnecting=!0,this.reconnections=this.reconnections+1,this.log.error("Could not connect to server. Reconnecting in ".concat(Math.round(this.reconnectTimer/1e3)," seconds..")),this.emit("reconnect"),setTimeout(function(){w.reconnecting=!1,w.connect().catch(function(D){return w.log.error(D)})},this.reconnectTimer))),this.ws=null},ae.prototype._getPromiseDelay=function(){return this.currentLatency<=600?600:this.currentLatency+100},ae.prototype._sendCommand=function(w,D,b,B){var ee=this;return new Promise(function(Y,de){if(ee._isConnected())(w===null||typeof w=="number")&&(w===null&&(w=ee._getPromiseDelay()),x.promiseDelay(w).then(function(){return de("No response from Twitch.")}));else return de("Not connected to server.");if(D!==null){var se=x.channel(D);ee.log.info("[".concat(se,"] Executing command: ").concat(b)),ee.ws.send("PRIVMSG ".concat(se," :").concat(b))}else ee.log.info("Executing command: ".concat(b)),ee.ws.send(b);typeof B=="function"?B(Y,de):Y()})},ae.prototype._sendMessage=function(w,D,b,B){var ee=this;return new Promise(function(Y,de){if(ee._isConnected()){if(x.isJustinfan(ee.getUsername()))return de("Cannot send anonymous messages.")}else return de("Not connected to server.");var se=x.channel(D);if(ee.userstate[se]||(ee.userstate[se]={}),b.length>=500){var Bt=x.splitLine(b,500);b=Bt[0],setTimeout(function(){ee._sendMessage(w,D,Bt[1],function(){})},350)}ee.ws.send("PRIVMSG ".concat(se," :").concat(b));var Dt={};Object.keys(ee.emotesets).forEach(function(en){return ee.emotesets[en].forEach(function(Tt){var De=x.isRegex(Tt.code)?N.emoteRegex:N.emoteString;return De(b,Tt.code,Tt.id,Dt)})});var ot=Object.assign(ee.userstate[se],N.emotes({emotes:N.transformEmotes(Dt)||null})),Je=x.get(ee.opts.options.messagesLogLevel,"info"),Zt=x.actionMessage(b);Zt?(ot["message-type"]="action",ee.log[Je]("[".concat(se,"] *<").concat(ee.getUsername(),">: ").concat(Zt[1])),ee.emits(["action","message"],[[se,ot,Zt[1],!0]])):(ot["message-type"]="chat",ee.log[Je]("[".concat(se,"] <").concat(ee.getUsername(),">: ").concat(b)),ee.emits(["chat","message"],[[se,ot,b,!0]])),typeof B=="function"?B(Y,de):Y()})},ae.prototype._updateEmoteset=function(w){var D=this,b=w!==void 0;if(b&&(w===this.emotes?b=!1:this.emotes=w),this._skipUpdatingEmotesets){b&&this.emit("emotesets",w,{});return}var B=function(){D._updateEmotesetsTimerDelay>0&&(clearTimeout(D._updateEmotesetsTimer),D._updateEmotesetsTimer=setTimeout(function(){return D._updateEmoteset(w)},D._updateEmotesetsTimerDelay))};this._getToken().then(function(ee){var Y="https://api.twitch.tv/kraken/chat/emoticon_images?emotesets=".concat(w),de={};return"fetchAgent"in D.opts.connection&&(de.agent=D.opts.connection.fetchAgent),p(Y,s(s({},de),{},{headers:{Accept:"application/vnd.twitchtv.v5+json",Authorization:"OAuth ".concat(x.token(ee)),"Client-ID":D.clientId}}))}).then(function(ee){return ee.json()}).then(function(ee){D.emotesets=ee.emoticon_sets||{},D.emit("emotesets",w,D.emotesets),B()}).catch(function(){return B()})},ae.prototype.getUsername=function(){return this.username},ae.prototype.getOptions=function(){return this.opts},ae.prototype.getChannels=function(){return this.channels},ae.prototype.isMod=function(w,D){var b=x.channel(w);return this.moderators[b]||(this.moderators[b]=[]),this.moderators[b].includes(x.username(D))},ae.prototype.readyState=function(){return this.ws===null?"CLOSED":["CONNECTING","OPEN","CLOSING","CLOSED"][this.ws.readyState]},ae.prototype._isConnected=function(){return this.ws!==null&&this.ws.readyState===1},ae.prototype.disconnect=function(){var w=this;return new Promise(function(D,b){w.ws!==null&&w.ws.readyState!==3?(w.wasCloseCalled=!0,w.log.info("Disconnecting from server.."),w.ws.close(),w.once("_promiseDisconnect",function(){return D([w.server,~~w.port])})):(w.log.error("Cannot disconnect from server. Socket is not opened or connection is already closing."),b("Cannot disconnect from server. Socket is not opened or connection is already closing."))})},ae.prototype.off=ae.prototype.removeListener,typeof e<"u"&&e.exports&&(e.exports=ae),typeof window<"u"&&(window.tmi={client:ae,Client:ae})}).call(this)}).call(this,typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{})},{"./api":2,"./commands":4,"./events":5,"./logger":6,"./parser":7,"./timer":8,"./utils":9,"node-fetch":10,ws:10}],4:[function(n,e,t){var r=n("./utils");function i(h,d){var f=this;return h=r.channel(h),d=r.get(d,30),this._sendCommand(null,h,"/followers ".concat(d),function(m,p){f.once("_promiseFollowers",function(y){y?p(y):m([h,~~d])})})}function s(h){var d=this;return h=r.channel(h),this._sendCommand(null,h,"/followersoff",function(f,m){d.once("_promiseFollowersoff",function(p){p?m(p):f([h])})})}function o(h){var d=this;return h=r.channel(h),this._sendCommand(null,null,"PART ".concat(h),function(f,m){d.once("_promisePart",function(p){p?m(p):f([h])})})}function a(h){var d=this;return h=r.channel(h),this._sendCommand(null,h,"/r9kbeta",function(f,m){d.once("_promiseR9kbeta",function(p){p?m(p):f([h])})})}function c(h){var d=this;return h=r.channel(h),this._sendCommand(null,h,"/r9kbetaoff",function(f,m){d.once("_promiseR9kbetaoff",function(p){p?m(p):f([h])})})}function u(h,d){var f=this;return h=r.channel(h),d=r.get(d,300),this._sendCommand(null,h,"/slow ".concat(d),function(m,p){f.once("_promiseSlow",function(y){y?p(y):m([h,~~d])})})}function l(h){var d=this;return h=r.channel(h),this._sendCommand(null,h,"/slowoff",function(f,m){d.once("_promiseSlowoff",function(p){p?m(p):f([h])})})}e.exports={action:function(d,f){return d=r.channel(d),f="ACTION ".concat(f,""),this._sendMessage(this._getPromiseDelay(),d,f,function(m,p){m([d,f])})},ban:function(d,f,m){var p=this;return d=r.channel(d),f=r.username(f),m=r.get(m,""),this._sendCommand(null,d,"/ban ".concat(f," ").concat(m),function(y,_){p.once("_promiseBan",function(S){S?_(S):y([d,f,m])})})},clear:function(d){var f=this;return d=r.channel(d),this._sendCommand(null,d,"/clear",function(m,p){f.once("_promiseClear",function(y){y?p(y):m([d])})})},color:function(d,f){var m=this;return f=r.get(f,d),this._sendCommand(null,"#tmijs","/color ".concat(f),function(p,y){m.once("_promiseColor",function(_){_?y(_):p([f])})})},commercial:function(d,f){var m=this;return d=r.channel(d),f=r.get(f,30),this._sendCommand(null,d,"/commercial ".concat(f),function(p,y){m.once("_promiseCommercial",function(_){_?y(_):p([d,~~f])})})},deletemessage:function(d,f){var m=this;return d=r.channel(d),this._sendCommand(null,d,"/delete ".concat(f),function(p,y){m.once("_promiseDeletemessage",function(_){_?y(_):p([d])})})},emoteonly:function(d){var f=this;return d=r.channel(d),this._sendCommand(null,d,"/emoteonly",function(m,p){f.once("_promiseEmoteonly",function(y){y?p(y):m([d])})})},emoteonlyoff:function(d){var f=this;return d=r.channel(d),this._sendCommand(null,d,"/emoteonlyoff",function(m,p){f.once("_promiseEmoteonlyoff",function(y){y?p(y):m([d])})})},followersonly:i,followersmode:i,followersonlyoff:s,followersmodeoff:s,host:function(d,f){var m=this;return d=r.channel(d),f=r.username(f),this._sendCommand(2e3,d,"/host ".concat(f),function(p,y){m.once("_promiseHost",function(_,S){_?y(_):p([d,f,~~S])})})},join:function(d){var f=this;return d=r.channel(d),this._sendCommand(void 0,null,"JOIN ".concat(d),function(m,p){var y="_promiseJoin",_=!1,S=function N(he,x){d===r.channel(x)&&(f.removeListener(y,N),_=!0,he?p(he):m([d]))};f.on(y,S);var L=f._getPromiseDelay();r.promiseDelay(L).then(function(){_||f.emit(y,"No response from Twitch.",d)})})},mod:function(d,f){var m=this;return d=r.channel(d),f=r.username(f),this._sendCommand(null,d,"/mod ".concat(f),function(p,y){m.once("_promiseMod",function(_){_?y(_):p([d,f])})})},mods:function(d){var f=this;return d=r.channel(d),this._sendCommand(null,d,"/mods",function(m,p){f.once("_promiseMods",function(y,_){y?p(y):(_.forEach(function(S){f.moderators[d]||(f.moderators[d]=[]),f.moderators[d].includes(S)||f.moderators[d].push(S)}),m(_))})})},part:o,leave:o,ping:function(){var d=this;return this._sendCommand(null,null,"PING",function(f,m){d.latency=new Date,d.pingTimeout=setTimeout(function(){d.ws!==null&&(d.wasCloseCalled=!1,d.log.error("Ping timeout."),d.ws.close(),clearInterval(d.pingLoop),clearTimeout(d.pingTimeout))},r.get(d.opts.connection.timeout,9999)),d.once("_promisePing",function(p){return f([parseFloat(p)])})})},r9kbeta:a,r9kmode:a,r9kbetaoff:c,r9kmodeoff:c,raw:function(d){return this._sendCommand(null,null,d,function(f,m){f([d])})},say:function(d,f){return d=r.channel(d),f.startsWith(".")&&!f.startsWith("..")||f.startsWith("/")||f.startsWith("\\")?f.substr(1,3)==="me "?this.action(d,f.substr(4)):this._sendCommand(null,d,f,function(m,p){m([d,f])}):this._sendMessage(this._getPromiseDelay(),d,f,function(m,p){m([d,f])})},slow:u,slowmode:u,slowoff:l,slowmodeoff:l,subscribers:function(d){var f=this;return d=r.channel(d),this._sendCommand(null,d,"/subscribers",function(m,p){f.once("_promiseSubscribers",function(y){y?p(y):m([d])})})},subscribersoff:function(d){var f=this;return d=r.channel(d),this._sendCommand(null,d,"/subscribersoff",function(m,p){f.once("_promiseSubscribersoff",function(y){y?p(y):m([d])})})},timeout:function(d,f,m,p){var y=this;return d=r.channel(d),f=r.username(f),m!==null&&!r.isInteger(m)&&(p=m,m=300),m=r.get(m,300),p=r.get(p,""),this._sendCommand(null,d,"/timeout ".concat(f," ").concat(m," ").concat(p),function(_,S){y.once("_promiseTimeout",function(L){L?S(L):_([d,f,~~m,p])})})},unban:function(d,f){var m=this;return d=r.channel(d),f=r.username(f),this._sendCommand(null,d,"/unban ".concat(f),function(p,y){m.once("_promiseUnban",function(_){_?y(_):p([d,f])})})},unhost:function(d){var f=this;return d=r.channel(d),this._sendCommand(2e3,d,"/unhost",function(m,p){f.once("_promiseUnhost",function(y){y?p(y):m([d])})})},unmod:function(d,f){var m=this;return d=r.channel(d),f=r.username(f),this._sendCommand(null,d,"/unmod ".concat(f),function(p,y){m.once("_promiseUnmod",function(_){_?y(_):p([d,f])})})},unvip:function(d,f){var m=this;return d=r.channel(d),f=r.username(f),this._sendCommand(null,d,"/unvip ".concat(f),function(p,y){m.once("_promiseUnvip",function(_){_?y(_):p([d,f])})})},vip:function(d,f){var m=this;return d=r.channel(d),f=r.username(f),this._sendCommand(null,d,"/vip ".concat(f),function(p,y){m.once("_promiseVip",function(_){_?y(_):p([d,f])})})},vips:function(d){var f=this;return d=r.channel(d),this._sendCommand(null,d,"/vips",function(m,p){f.once("_promiseVips",function(y,_){y?p(y):m(_)})})},whisper:function(d,f){var m=this;return d=r.username(d),d===this.getUsername()?Promise.reject("Cannot send a whisper to the same account."):this._sendCommand(null,"#tmijs","/w ".concat(d," ").concat(f),function(p,y){m.once("_promiseWhisper",function(_){_&&y(_)})}).catch(function(p){if(p&&typeof p=="string"&&p.indexOf("No response from Twitch.")!==0)throw p;var y=r.channel(d),_=Object.assign({"message-type":"whisper","message-id":null,"thread-id":null,username:m.getUsername()},m.globaluserstate);return m.emits(["whisper","message"],[[y,_,f,!0],[y,_,f,!0]]),[d,f]})}}},{"./utils":9}],5:[function(n,e,t){function r(u){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?r=function(h){return typeof h}:r=function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},r(u)}function i(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}e.exports=i,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._maxListeners=void 0,i.defaultMaxListeners=10,i.prototype.setMaxListeners=function(u){if(!o(u)||u<0||isNaN(u))throw TypeError("n must be a positive number");return this._maxListeners=u,this},i.prototype.emit=function(u){var l,h,d,f,m,p;if(this._events||(this._events={}),u==="error"&&(!this._events.error||a(this._events.error)&&!this._events.error.length))throw l=arguments[1],l instanceof Error?l:TypeError('Uncaught, unspecified "error" event.');if(h=this._events[u],c(h))return!1;if(s(h))switch(arguments.length){case 1:h.call(this);break;case 2:h.call(this,arguments[1]);break;case 3:h.call(this,arguments[1],arguments[2]);break;default:f=Array.prototype.slice.call(arguments,1),h.apply(this,f)}else if(a(h))for(f=Array.prototype.slice.call(arguments,1),p=h.slice(),d=p.length,m=0;m<d;m++)p[m].apply(this,f);return!0},i.prototype.addListener=function(u,l){var h;if(!s(l))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",u,s(l.listener)?l.listener:l),this._events[u]?a(this._events[u])?this._events[u].push(l):this._events[u]=[this._events[u],l]:this._events[u]=l,a(this._events[u])&&!this._events[u].warned&&(c(this._maxListeners)?h=i.defaultMaxListeners:h=this._maxListeners,h&&h>0&&this._events[u].length>h&&(this._events[u].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[u].length),typeof console.trace=="function"&&console.trace())),this},i.prototype.on=i.prototype.addListener,i.prototype.once=function(u,l){if(!s(l))throw TypeError("listener must be a function");var h=!1;if(this._events.hasOwnProperty(u)&&u.charAt(0)==="_"){var d=1,f=u;for(var m in this._events)this._events.hasOwnProperty(m)&&m.startsWith(f)&&d++;u=u+d}function p(){u.charAt(0)==="_"&&!isNaN(u.substr(u.length-1))&&(u=u.substring(0,u.length-1)),this.removeListener(u,p),h||(h=!0,l.apply(this,arguments))}return p.listener=l,this.on(u,p),this},i.prototype.removeListener=function(u,l){var h,d,f,m;if(!s(l))throw TypeError("listener must be a function");if(!this._events||!this._events[u])return this;if(h=this._events[u],f=h.length,d=-1,h===l||s(h.listener)&&h.listener===l){if(delete this._events[u],this._events.hasOwnProperty(u+"2")&&u.charAt(0)==="_"){var p=u;for(var y in this._events)this._events.hasOwnProperty(y)&&y.startsWith(p)&&(isNaN(parseInt(y.substr(y.length-1)))||(this._events[u+parseInt(y.substr(y.length-1)-1)]=this._events[y],delete this._events[y]));this._events[u]=this._events[u+"1"],delete this._events[u+"1"]}this._events.removeListener&&this.emit("removeListener",u,l)}else if(a(h)){for(m=f;m-- >0;)if(h[m]===l||h[m].listener&&h[m].listener===l){d=m;break}if(d<0)return this;h.length===1?(h.length=0,delete this._events[u]):h.splice(d,1),this._events.removeListener&&this.emit("removeListener",u,l)}return this},i.prototype.removeAllListeners=function(u){var l,h;if(!this._events)return this;if(!this._events.removeListener)return arguments.length===0?this._events={}:this._events[u]&&delete this._events[u],this;if(arguments.length===0){for(l in this._events)l!=="removeListener"&&this.removeAllListeners(l);return this.removeAllListeners("removeListener"),this._events={},this}if(h=this._events[u],s(h))this.removeListener(u,h);else if(h)for(;h.length;)this.removeListener(u,h[h.length-1]);return delete this._events[u],this},i.prototype.listeners=function(u){var l;return!this._events||!this._events[u]?l=[]:s(this._events[u])?l=[this._events[u]]:l=this._events[u].slice(),l},i.prototype.listenerCount=function(u){if(this._events){var l=this._events[u];if(s(l))return 1;if(l)return l.length}return 0},i.listenerCount=function(u,l){return u.listenerCount(l)};function s(u){return typeof u=="function"}function o(u){return typeof u=="number"}function a(u){return r(u)==="object"&&u!==null}function c(u){return u===void 0}},{}],6:[function(n,e,t){var r=n("./utils"),i="info",s={trace:0,debug:1,info:2,warn:3,error:4,fatal:5};function o(a){return function(c){s[a]>=s[i]&&console.log("[".concat(r.formatDate(new Date),"] ").concat(a,": ").concat(c))}}e.exports={setLevel:function(c){i=c},trace:o("trace"),debug:o("debug"),info:o("info"),warn:o("warn"),error:o("error"),fatal:o("fatal")}},{"./utils":9}],7:[function(n,e,t){var r=n("./utils"),i=/\S+/g;function s(o,a){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:",",u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"/",l=arguments.length>4?arguments[4]:void 0,h=o[a];if(h===void 0)return o;var d=typeof h=="string";if(o[a+"-raw"]=d?h:null,h===!0)return o[a]=null,o;if(o[a]={},d)for(var f=h.split(c),m=0;m<f.length;m++){var p=f[m].split(u),y=p[1];l!==void 0&&y&&(y=y.split(l)),o[a][p[0]]=y||null}return o}e.exports={badges:function(a){return s(a,"badges")},badgeInfo:function(a){return s(a,"badge-info")},emotes:function(a){return s(a,"emotes","/",":",",")},emoteRegex:function(a,c,u,l){i.lastIndex=0;for(var h=new RegExp("(\\b|^|\\s)"+r.unescapeHtml(c)+"(\\b|$|\\s)"),d;(d=i.exec(a))!==null;)h.test(d[0])&&(l[u]=l[u]||[],l[u].push([d.index,i.lastIndex-1]))},emoteString:function(a,c,u,l){i.lastIndex=0;for(var h;(h=i.exec(a))!==null;)h[0]===r.unescapeHtml(c)&&(l[u]=l[u]||[],l[u].push([h.index,i.lastIndex-1]))},transformEmotes:function(a){var c="";return Object.keys(a).forEach(function(u){c="".concat(c+u,":"),a[u].forEach(function(l){return c="".concat(c+l.join("-"),",")}),c="".concat(c.slice(0,-1),"/")}),c.slice(0,-1)},formTags:function(a){var c=[];for(var u in a){var l=r.escapeIRC(a[u]);c.push("".concat(u,"=").concat(l))}return"@".concat(c.join(";"))},msg:function(a){var c={raw:a,tags:{},prefix:null,command:null,params:[]},u=0,l=0;if(a.charCodeAt(0)===64){if(l=a.indexOf(" "),l===-1)return null;for(var h=a.slice(1,l).split(";"),d=0;d<h.length;d++){var f=h[d],m=f.split("=");c.tags[m[0]]=f.substring(f.indexOf("=")+1)||!0}u=l+1}for(;a.charCodeAt(u)===32;)u++;if(a.charCodeAt(u)===58){if(l=a.indexOf(" ",u),l===-1)return null;for(c.prefix=a.slice(u+1,l),u=l+1;a.charCodeAt(u)===32;)u++}if(l=a.indexOf(" ",u),l===-1)return a.length>u?(c.command=a.slice(u),c):null;for(c.command=a.slice(u,l),u=l+1;a.charCodeAt(u)===32;)u++;for(;u<a.length;){if(l=a.indexOf(" ",u),a.charCodeAt(u)===58){c.params.push(a.slice(u+1));break}if(l!==-1){for(c.params.push(a.slice(u,l)),u=l+1;a.charCodeAt(u)===32;)u++;continue}if(l===-1){c.params.push(a.slice(u));break}}return c}}},{"./utils":9}],8:[function(n,e,t){function r(a,c){if(!(a instanceof c))throw new TypeError("Cannot call a class as a function")}function i(a,c){for(var u=0;u<c.length;u++){var l=c[u];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(a,l.key,l)}}function s(a,c,u){return c&&i(a.prototype,c),u&&i(a,u),a}var o=function(){function a(c){r(this,a),this.queue=[],this.index=0,this.defaultDelay=c===void 0?3e3:c}return s(a,[{key:"add",value:function(u,l){this.queue.push({fn:u,delay:l})}},{key:"next",value:function(){var u=this,l=this.index++,h=this.queue[l];if(h){var d=this.queue[this.index];if(h.fn(),d){var f=d.delay===void 0?this.defaultDelay:d.delay;setTimeout(function(){return u.next()},f)}}}}]),a}();e.exports=o},{}],9:[function(n,e,t){(function(r){(function(){function i(m){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?i=function(y){return typeof y}:i=function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},i(m)}var s=/^\u0001ACTION ([^\u0001]+)\u0001$/,o=/^(justinfan)(\d+$)/,a=/\\([sn:r\\])/g,c=/([ \n;\r\\])/g,u={s:" ",n:"",":":";",r:""},l={" ":"s","\n":"n",";":":","\r":"r"},h=new RegExp("^(?:(?:https?|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))\\.?)(?::\\d{2,5})?(?:[/?#]\\S*)?$","i"),d=/[|\\^$*+?:#]/,f=e.exports={get:function(p,y){return typeof p>"u"?y:p},hasOwn:function(p,y){return{}.hasOwnProperty.call(p,y)},promiseDelay:function(p){return new Promise(function(y){return setTimeout(y,p)})},isFinite:function(m){function p(y){return m.apply(this,arguments)}return p.toString=function(){return m.toString()},p}(function(m){return isFinite(m)&&!isNaN(parseFloat(m))}),toNumber:function(p,y){if(p===null)return 0;var _=Math.pow(10,f.isFinite(y)?y:0);return Math.round(p*_)/_},isInteger:function(p){return!isNaN(f.toNumber(p,0))},isRegex:function(p){return d.test(p)},isURL:function(p){return h.test(p)},justinfan:function(){return"justinfan".concat(Math.floor(Math.random()*8e4+1e3))},isJustinfan:function(p){return o.test(p)},channel:function(p){var y=(p||"").toLowerCase();return y[0]==="#"?y:"#"+y},username:function(p){var y=(p||"").toLowerCase();return y[0]==="#"?y.slice(1):y},token:function(p){return p?p.toLowerCase().replace("oauth:",""):""},password:function(p){var y=f.token(p);return y?"oauth:".concat(y):""},actionMessage:function(p){return p.match(s)},replaceAll:function(p,y){if(p===null||typeof p>"u")return null;for(var _ in y)p=p.replace(new RegExp(_,"g"),y[_]);return p},unescapeHtml:function(p){return p.replace(/\\&amp\\;/g,"&").replace(/\\&lt\\;/g,"<").replace(/\\&gt\\;/g,">").replace(/\\&quot\\;/g,'"').replace(/\\&#039\\;/g,"'")},unescapeIRC:function(p){return!p||typeof p!="string"||!p.includes("\\")?p:p.replace(a,function(y,_){return _ in u?u[_]:_})},escapeIRC:function(p){return!p||typeof p!="string"?p:p.replace(c,function(y,_){return _ in l?"\\".concat(l[_]):_})},addWord:function(p,y){return p.length?p+" "+y:p+y},splitLine:function(p,y){var _=p.substring(0,y).lastIndexOf(" ");return _===-1&&(_=y-1),[p.substring(0,_),p.substring(_+1)]},extractNumber:function(p){for(var y=p.split(" "),_=0;_<y.length;_++)if(f.isInteger(y[_]))return~~y[_];return 0},formatDate:function(p){var y=p.getHours(),_=p.getMinutes();return y=(y<10?"0":"")+y,_=(_<10?"0":"")+_,"".concat(y,":").concat(_)},inherits:function(p,y){p.super_=y;var _=function(){};_.prototype=y.prototype,p.prototype=new _,p.prototype.constructor=p},isNode:function(){try{return(typeof r>"u"?"undefined":i(r))==="object"&&Object.prototype.toString.call(r)==="[object process]"}catch{}return!1}}}).call(this)}).call(this,n("_process"))},{_process:11}],10:[function(n,e,t){},{}],11:[function(n,e,t){var r=e.exports={},i,s;function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?i=setTimeout:i=o}catch{i=o}try{typeof clearTimeout=="function"?s=clearTimeout:s=a}catch{s=a}})();function c(S){if(i===setTimeout)return setTimeout(S,0);if((i===o||!i)&&setTimeout)return i=setTimeout,setTimeout(S,0);try{return i(S,0)}catch{try{return i.call(null,S,0)}catch{return i.call(this,S,0)}}}function u(S){if(s===clearTimeout)return clearTimeout(S);if((s===a||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(S);try{return s(S)}catch{try{return s.call(null,S)}catch{return s.call(this,S)}}}var l=[],h=!1,d,f=-1;function m(){!h||!d||(h=!1,d.length?l=d.concat(l):f=-1,l.length&&p())}function p(){if(!h){var S=c(m);h=!0;for(var L=l.length;L;){for(d=l,l=[];++f<L;)d&&d[f].run();f=-1,L=l.length}d=null,h=!1,u(S)}}r.nextTick=function(S){var L=new Array(arguments.length-1);if(arguments.length>1)for(var N=1;N<arguments.length;N++)L[N-1]=arguments[N];l.push(new y(S,L)),l.length===1&&!h&&c(p)};function y(S,L){this.fun=S,this.array=L}y.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={};function _(){}r.on=_,r.addListener=_,r.once=_,r.off=_,r.removeListener=_,r.removeAllListeners=_,r.emit=_,r.prependListener=_,r.prependOnceListener=_,r.listeners=function(S){return[]},r.binding=function(S){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(S){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},{}]},{},[1]);
