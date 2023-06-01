(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function gd(n,e){const t=Object.create(null),r=n.split(",");for(let i=0;i<r.length;i++)t[r[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}const xe={},Wi=[],an=()=>{},$E=()=>!1,qE=/^on[^a-z]/,fu=n=>qE.test(n),yd=n=>n.startsWith("onUpdate:"),ot=Object.assign,vd=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},jE=Object.prototype.hasOwnProperty,_e=(n,e)=>jE.call(n,e),ce=Array.isArray,Qi=n=>pu(n)==="[object Map]",Py=n=>pu(n)==="[object Set]",pe=n=>typeof n=="function",Ze=n=>typeof n=="string",wd=n=>typeof n=="symbol",Ue=n=>n!==null&&typeof n=="object",Oy=n=>Ue(n)&&pe(n.then)&&pe(n.catch),My=Object.prototype.toString,pu=n=>My.call(n),zE=n=>pu(n).slice(8,-1),Ly=n=>pu(n)==="[object Object]",_d=n=>Ze(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,cc=gd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),mu=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},KE=/-(\w)/g,Dn=mu(n=>n.replace(KE,(e,t)=>t?t.toUpperCase():"")),GE=/\B([A-Z])/g,ks=mu(n=>n.replace(GE,"-$1").toLowerCase()),gu=mu(n=>n.charAt(0).toUpperCase()+n.slice(1)),bl=mu(n=>n?`on${gu(n)}`:""),Mo=(n,e)=>!Object.is(n,e),uc=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},kc=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},rh=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Vp;const ih=()=>Vp||(Vp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Id(n){if(ce(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],i=Ze(r)?YE(r):Id(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Ze(n))return n;if(Ue(n))return n}}const HE=/;(?![^(]*\))/g,WE=/:([^]+)/,QE=new RegExp("\\/\\*.*?\\*\\/","gs");function YE(n){const e={};return n.replace(QE,"").split(HE).forEach(t=>{if(t){const r=t.split(WE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function bd(n){let e="";if(Ze(n))e=n;else if(ce(n))for(let t=0;t<n.length;t++){const r=bd(n[t]);r&&(e+=r+" ")}else if(Ue(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const JE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",XE=gd(JE);function Fy(n){return!!n||n===""}const bL=n=>Ze(n)?n:n==null?"":ce(n)||Ue(n)&&(n.toString===My||!pe(n.toString))?JSON.stringify(n,Uy,2):String(n),Uy=(n,e)=>e&&e.__v_isRef?Uy(n,e.value):Qi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,i])=>(t[`${r} =>`]=i,t),{})}:Py(e)?{[`Set(${e.size})`]:[...e.values()]}:Ue(e)&&!ce(e)&&!Ly(e)?String(e):e;let nn;class ZE{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=nn,!e&&nn&&(this.index=(nn.scopes||(nn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=nn;try{return nn=this,e()}finally{nn=t}}}on(){nn=this}off(){nn=this.parent}stop(e){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function e0(n,e=nn){e&&e.active&&e.effects.push(n)}function t0(){return nn}const Ed=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Vy=n=>(n.w&wr)>0,By=n=>(n.n&wr)>0,n0=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=wr},r0=n=>{const{deps:e}=n;if(e.length){let t=0;for(let r=0;r<e.length;r++){const i=e[r];Vy(i)&&!By(i)?i.delete(n):e[t++]=i,i.w&=~wr,i.n&=~wr}e.length=t}},sh=new WeakMap;let ho=0,wr=1;const oh=30;let rn;const ai=Symbol(""),ah=Symbol("");class Td{constructor(e,t=null,r){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,e0(this,r)}run(){if(!this.active)return this.fn();let e=rn,t=gr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=rn,rn=this,gr=!0,wr=1<<++ho,ho<=oh?n0(this):Bp(this),this.fn()}finally{ho<=oh&&r0(this),wr=1<<--ho,rn=this.parent,gr=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){rn===this?this.deferStop=!0:this.active&&(Bp(this),this.onStop&&this.onStop(),this.active=!1)}}function Bp(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let gr=!0;const $y=[];function Rs(){$y.push(gr),gr=!1}function Ns(){const n=$y.pop();gr=n===void 0?!0:n}function qt(n,e,t){if(gr&&rn){let r=sh.get(n);r||sh.set(n,r=new Map);let i=r.get(t);i||r.set(t,i=Ed()),qy(i)}}function qy(n,e){let t=!1;ho<=oh?By(n)||(n.n|=wr,t=!Vy(n)):t=!n.has(rn),t&&(n.add(rn),rn.deps.push(n))}function Gn(n,e,t,r,i,s){const o=sh.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&ce(n)){const c=Number(r);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":ce(n)?_d(t)&&a.push(o.get("length")):(a.push(o.get(ai)),Qi(n)&&a.push(o.get(ah)));break;case"delete":ce(n)||(a.push(o.get(ai)),Qi(n)&&a.push(o.get(ah)));break;case"set":Qi(n)&&a.push(o.get(ai));break}if(a.length===1)a[0]&&ch(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);ch(Ed(c))}}function ch(n,e){const t=ce(n)?n:[...n];for(const r of t)r.computed&&$p(r);for(const r of t)r.computed||$p(r)}function $p(n,e){(n!==rn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const i0=gd("__proto__,__v_isRef,__isVue"),jy=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(wd)),s0=Sd(),o0=Sd(!1,!0),a0=Sd(!0),qp=c0();function c0(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const r=Ee(this);for(let s=0,o=this.length;s<o;s++)qt(r,"get",s+"");const i=r[e](...t);return i===-1||i===!1?r[e](...t.map(Ee)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Rs();const r=Ee(this)[e].apply(this,t);return Ns(),r}}),n}function u0(n){const e=Ee(this);return qt(e,"has",n),e.hasOwnProperty(n)}function Sd(n=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!n;if(i==="__v_isReadonly")return n;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(n?e?S0:Wy:e?Hy:Gy).get(r))return r;const o=ce(r);if(!n){if(o&&_e(qp,i))return Reflect.get(qp,i,s);if(i==="hasOwnProperty")return u0}const a=Reflect.get(r,i,s);return(wd(i)?jy.has(i):i0(i))||(n||qt(r,"get",i),e)?a:St(a)?o&&_d(i)?a:a.value:Ue(a)?n?Qy(a):fa(a):a}}const l0=zy(),h0=zy(!0);function zy(n=!1){return function(t,r,i,s){let o=t[r];if(as(o)&&St(o)&&!St(i))return!1;if(!n&&(!Rc(i)&&!as(i)&&(o=Ee(o),i=Ee(i)),!ce(t)&&St(o)&&!St(i)))return o.value=i,!0;const a=ce(t)&&_d(r)?Number(r)<t.length:_e(t,r),c=Reflect.set(t,r,i,s);return t===Ee(s)&&(a?Mo(i,o)&&Gn(t,"set",r,i):Gn(t,"add",r,i)),c}}function d0(n,e){const t=_e(n,e);n[e];const r=Reflect.deleteProperty(n,e);return r&&t&&Gn(n,"delete",e,void 0),r}function f0(n,e){const t=Reflect.has(n,e);return(!wd(e)||!jy.has(e))&&qt(n,"has",e),t}function p0(n){return qt(n,"iterate",ce(n)?"length":ai),Reflect.ownKeys(n)}const Ky={get:s0,set:l0,deleteProperty:d0,has:f0,ownKeys:p0},m0={get:a0,set(n,e){return!0},deleteProperty(n,e){return!0}},g0=ot({},Ky,{get:o0,set:h0}),Cd=n=>n,yu=n=>Reflect.getPrototypeOf(n);function ja(n,e,t=!1,r=!1){n=n.__v_raw;const i=Ee(n),s=Ee(e);t||(e!==s&&qt(i,"get",e),qt(i,"get",s));const{has:o}=yu(i),a=r?Cd:t?Rd:Lo;if(o.call(i,e))return a(n.get(e));if(o.call(i,s))return a(n.get(s));n!==i&&n.get(e)}function za(n,e=!1){const t=this.__v_raw,r=Ee(t),i=Ee(n);return e||(n!==i&&qt(r,"has",n),qt(r,"has",i)),n===i?t.has(n):t.has(n)||t.has(i)}function Ka(n,e=!1){return n=n.__v_raw,!e&&qt(Ee(n),"iterate",ai),Reflect.get(n,"size",n)}function jp(n){n=Ee(n);const e=Ee(this);return yu(e).has.call(e,n)||(e.add(n),Gn(e,"add",n,n)),this}function zp(n,e){e=Ee(e);const t=Ee(this),{has:r,get:i}=yu(t);let s=r.call(t,n);s||(n=Ee(n),s=r.call(t,n));const o=i.call(t,n);return t.set(n,e),s?Mo(e,o)&&Gn(t,"set",n,e):Gn(t,"add",n,e),this}function Kp(n){const e=Ee(this),{has:t,get:r}=yu(e);let i=t.call(e,n);i||(n=Ee(n),i=t.call(e,n)),r&&r.call(e,n);const s=e.delete(n);return i&&Gn(e,"delete",n,void 0),s}function Gp(){const n=Ee(this),e=n.size!==0,t=n.clear();return e&&Gn(n,"clear",void 0,void 0),t}function Ga(n,e){return function(r,i){const s=this,o=s.__v_raw,a=Ee(o),c=e?Cd:n?Rd:Lo;return!n&&qt(a,"iterate",ai),o.forEach((u,l)=>r.call(i,c(u),c(l),s))}}function Ha(n,e,t){return function(...r){const i=this.__v_raw,s=Ee(i),o=Qi(s),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,u=i[n](...r),l=t?Cd:e?Rd:Lo;return!e&&qt(s,"iterate",c?ah:ai),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function rr(n){return function(...e){return n==="delete"?!1:this}}function y0(){const n={get(s){return ja(this,s)},get size(){return Ka(this)},has:za,add:jp,set:zp,delete:Kp,clear:Gp,forEach:Ga(!1,!1)},e={get(s){return ja(this,s,!1,!0)},get size(){return Ka(this)},has:za,add:jp,set:zp,delete:Kp,clear:Gp,forEach:Ga(!1,!0)},t={get(s){return ja(this,s,!0)},get size(){return Ka(this,!0)},has(s){return za.call(this,s,!0)},add:rr("add"),set:rr("set"),delete:rr("delete"),clear:rr("clear"),forEach:Ga(!0,!1)},r={get(s){return ja(this,s,!0,!0)},get size(){return Ka(this,!0)},has(s){return za.call(this,s,!0)},add:rr("add"),set:rr("set"),delete:rr("delete"),clear:rr("clear"),forEach:Ga(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Ha(s,!1,!1),t[s]=Ha(s,!0,!1),e[s]=Ha(s,!1,!0),r[s]=Ha(s,!0,!0)}),[n,t,e,r]}const[v0,w0,_0,I0]=y0();function Ad(n,e){const t=e?n?I0:_0:n?w0:v0;return(r,i,s)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?r:Reflect.get(_e(t,i)&&i in r?t:r,i,s)}const b0={get:Ad(!1,!1)},E0={get:Ad(!1,!0)},T0={get:Ad(!0,!1)},Gy=new WeakMap,Hy=new WeakMap,Wy=new WeakMap,S0=new WeakMap;function C0(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function A0(n){return n.__v_skip||!Object.isExtensible(n)?0:C0(zE(n))}function fa(n){return as(n)?n:kd(n,!1,Ky,b0,Gy)}function k0(n){return kd(n,!1,g0,E0,Hy)}function Qy(n){return kd(n,!0,m0,T0,Wy)}function kd(n,e,t,r,i){if(!Ue(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=i.get(n);if(s)return s;const o=A0(n);if(o===0)return n;const a=new Proxy(n,o===2?r:t);return i.set(n,a),a}function Yi(n){return as(n)?Yi(n.__v_raw):!!(n&&n.__v_isReactive)}function as(n){return!!(n&&n.__v_isReadonly)}function Rc(n){return!!(n&&n.__v_isShallow)}function Yy(n){return Yi(n)||as(n)}function Ee(n){const e=n&&n.__v_raw;return e?Ee(e):n}function Jy(n){return kc(n,"__v_skip",!0),n}const Lo=n=>Ue(n)?fa(n):n,Rd=n=>Ue(n)?Qy(n):n;function Xy(n){gr&&rn&&(n=Ee(n),qy(n.dep||(n.dep=Ed())))}function Zy(n,e){n=Ee(n);const t=n.dep;t&&ch(t)}function St(n){return!!(n&&n.__v_isRef===!0)}function ev(n){return tv(n,!1)}function R0(n){return tv(n,!0)}function tv(n,e){return St(n)?n:new N0(n,e)}class N0{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ee(e),this._value=t?e:Lo(e)}get value(){return Xy(this),this._value}set value(e){const t=this.__v_isShallow||Rc(e)||as(e);e=t?e:Ee(e),Mo(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Lo(e),Zy(this))}}function Ji(n){return St(n)?n.value:n}const x0={get:(n,e,t)=>Ji(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const i=n[e];return St(i)&&!St(t)?(i.value=t,!0):Reflect.set(n,e,t,r)}};function nv(n){return Yi(n)?n:new Proxy(n,x0)}class D0{constructor(e,t,r,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Td(e,()=>{this._dirty||(this._dirty=!0,Zy(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=Ee(this);return Xy(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function P0(n,e,t=!1){let r,i;const s=pe(n);return s?(r=n,i=an):(r=n.get,i=n.set),new D0(r,i,s||!i,t)}function yr(n,e,t,r){let i;try{i=r?n(...r):n()}catch(s){vu(s,e,t)}return i}function cn(n,e,t,r){if(pe(n)){const s=yr(n,e,t,r);return s&&Oy(s)&&s.catch(o=>{vu(o,e,t)}),s}const i=[];for(let s=0;s<n.length;s++)i.push(cn(n[s],e,t,r));return i}function vu(n,e,t,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const u=s.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](n,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){yr(c,null,10,[n,o,a]);return}}O0(n,t,i,r)}function O0(n,e,t,r=!0){console.error(n)}let Fo=!1,uh=!1;const Tt=[];let vn=0;const Xi=[];let Un=null,Wr=0;const rv=Promise.resolve();let Nd=null;function iv(n){const e=Nd||rv;return n?e.then(this?n.bind(this):n):e}function M0(n){let e=vn+1,t=Tt.length;for(;e<t;){const r=e+t>>>1;Uo(Tt[r])<n?e=r+1:t=r}return e}function xd(n){(!Tt.length||!Tt.includes(n,Fo&&n.allowRecurse?vn+1:vn))&&(n.id==null?Tt.push(n):Tt.splice(M0(n.id),0,n),sv())}function sv(){!Fo&&!uh&&(uh=!0,Nd=rv.then(av))}function L0(n){const e=Tt.indexOf(n);e>vn&&Tt.splice(e,1)}function F0(n){ce(n)?Xi.push(...n):(!Un||!Un.includes(n,n.allowRecurse?Wr+1:Wr))&&Xi.push(n),sv()}function Hp(n,e=Fo?vn+1:0){for(;e<Tt.length;e++){const t=Tt[e];t&&t.pre&&(Tt.splice(e,1),e--,t())}}function ov(n){if(Xi.length){const e=[...new Set(Xi)];if(Xi.length=0,Un){Un.push(...e);return}for(Un=e,Un.sort((t,r)=>Uo(t)-Uo(r)),Wr=0;Wr<Un.length;Wr++)Un[Wr]();Un=null,Wr=0}}const Uo=n=>n.id==null?1/0:n.id,U0=(n,e)=>{const t=Uo(n)-Uo(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function av(n){uh=!1,Fo=!0,Tt.sort(U0);const e=an;try{for(vn=0;vn<Tt.length;vn++){const t=Tt[vn];t&&t.active!==!1&&yr(t,null,14)}}finally{vn=0,Tt.length=0,ov(),Fo=!1,Nd=null,(Tt.length||Xi.length)&&av()}}function V0(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||xe;let i=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[l]||xe;d&&(i=t.map(f=>Ze(f)?f.trim():f)),h&&(i=t.map(rh))}let a,c=r[a=bl(e)]||r[a=bl(Dn(e))];!c&&s&&(c=r[a=bl(ks(e))]),c&&cn(c,n,6,i);const u=r[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,cn(u,n,6,i)}}function cv(n,e,t=!1){const r=e.emitsCache,i=r.get(n);if(i!==void 0)return i;const s=n.emits;let o={},a=!1;if(!pe(n)){const c=u=>{const l=cv(u,e,!0);l&&(a=!0,ot(o,l))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!s&&!a?(Ue(n)&&r.set(n,null),null):(ce(s)?s.forEach(c=>o[c]=null):ot(o,s),Ue(n)&&r.set(n,o),o)}function wu(n,e){return!n||!fu(e)?!1:(e=e.slice(2).replace(/Once$/,""),_e(n,e[0].toLowerCase()+e.slice(1))||_e(n,ks(e))||_e(n,e))}let Zt=null,uv=null;function Nc(n){const e=Zt;return Zt=n,uv=n&&n.type.__scopeId||null,e}function lc(n,e=Zt,t){if(!e||n._n)return n;const r=(...i)=>{r._d&&im(-1);const s=Nc(e);let o;try{o=n(...i)}finally{Nc(s),r._d&&im(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function El(n){const{type:e,vnode:t,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:f,ctx:m,inheritAttrs:p}=n;let y,_;const S=Nc(n);try{if(t.shapeFlag&4){const x=i||r;y=yn(l.call(x,x,h,s,f,d,m)),_=c}else{const x=e;y=yn(x.length>1?x(s,{attrs:c,slots:a,emit:u}):x(s,null)),_=e.props?c:B0(c)}}catch(x){bo.length=0,vu(x,n,1),y=Xe(pi)}let L=y;if(_&&p!==!1){const x=Object.keys(_),{shapeFlag:le}=L;x.length&&le&7&&(o&&x.some(yd)&&(_=$0(_,o)),L=cs(L,_))}return t.dirs&&(L=cs(L),L.dirs=L.dirs?L.dirs.concat(t.dirs):t.dirs),t.transition&&(L.transition=t.transition),y=L,Nc(S),y}const B0=n=>{let e;for(const t in n)(t==="class"||t==="style"||fu(t))&&((e||(e={}))[t]=n[t]);return e},$0=(n,e)=>{const t={};for(const r in n)(!yd(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function q0(n,e,t){const{props:r,children:i,component:s}=n,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?Wp(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==r[d]&&!wu(u,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Wp(r,o,u):!0:!!o;return!1}function Wp(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==n[s]&&!wu(t,s))return!0}return!1}function j0({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const z0=n=>n.__isSuspense;function K0(n,e){e&&e.pendingBranch?ce(n)?e.effects.push(...n):e.effects.push(n):F0(n)}const Wa={};function hc(n,e,t){return lv(n,e,t)}function lv(n,e,{immediate:t,deep:r,flush:i,onTrack:s,onTrigger:o}=xe){var a;const c=t0()===((a=pt)==null?void 0:a.scope)?pt:null;let u,l=!1,h=!1;if(St(n)?(u=()=>n.value,l=Rc(n)):Yi(n)?(u=()=>n,r=!0):ce(n)?(h=!0,l=n.some(x=>Yi(x)||Rc(x)),u=()=>n.map(x=>{if(St(x))return x.value;if(Yi(x))return ti(x);if(pe(x))return yr(x,c,2)})):pe(n)?e?u=()=>yr(n,c,2):u=()=>{if(!(c&&c.isUnmounted))return d&&d(),cn(n,c,3,[f])}:u=an,e&&r){const x=u;u=()=>ti(x())}let d,f=x=>{d=S.onStop=()=>{yr(x,c,4)}},m;if(Bo)if(f=an,e?t&&cn(e,c,3,[u(),h?[]:void 0,f]):u(),i==="sync"){const x=VT();m=x.__watcherHandles||(x.__watcherHandles=[])}else return an;let p=h?new Array(n.length).fill(Wa):Wa;const y=()=>{if(S.active)if(e){const x=S.run();(r||l||(h?x.some((le,N)=>Mo(le,p[N])):Mo(x,p)))&&(d&&d(),cn(e,c,3,[x,p===Wa?void 0:h&&p[0]===Wa?[]:p,f]),p=x)}else S.run()};y.allowRecurse=!!e;let _;i==="sync"?_=y:i==="post"?_=()=>Lt(y,c&&c.suspense):(y.pre=!0,c&&(y.id=c.uid),_=()=>xd(y));const S=new Td(u,_);e?t?y():p=S.run():i==="post"?Lt(S.run.bind(S),c&&c.suspense):S.run();const L=()=>{S.stop(),c&&c.scope&&vd(c.scope.effects,S)};return m&&m.push(L),L}function G0(n,e,t){const r=this.proxy,i=Ze(n)?n.includes(".")?hv(r,n):()=>r[n]:n.bind(r,r);let s;pe(e)?s=e:(s=e.handler,t=e);const o=pt;us(this);const a=lv(i,s.bind(r),t);return o?us(o):ci(),a}function hv(n,e){const t=e.split(".");return()=>{let r=n;for(let i=0;i<t.length&&r;i++)r=r[t[i]];return r}}function ti(n,e){if(!Ue(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),St(n))ti(n.value,e);else if(ce(n))for(let t=0;t<n.length;t++)ti(n[t],e);else if(Py(n)||Qi(n))n.forEach(t=>{ti(t,e)});else if(Ly(n))for(const t in n)ti(n[t],e);return n}function EL(n,e){const t=Zt;if(t===null)return n;const r=Eu(t)||t.proxy,i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,u=xe]=e[s];o&&(pe(o)&&(o={mounted:o,updated:o}),o.deep&&ti(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u}))}return n}function jr(n,e,t,r){const i=n.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(Rs(),cn(c,t,8,[n.el,a,n,e]),Ns())}}function dv(n,e){return pe(n)?(()=>ot({name:n.name},e,{setup:n}))():n}const dc=n=>!!n.type.__asyncLoader,fv=n=>n.type.__isKeepAlive;function H0(n,e){pv(n,"a",e)}function W0(n,e){pv(n,"da",e)}function pv(n,e,t=pt){const r=n.__wdc||(n.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(_u(e,r,t),t){let i=t.parent;for(;i&&i.parent;)fv(i.parent.vnode)&&Q0(r,e,t,i),i=i.parent}}function Q0(n,e,t,r){const i=_u(e,n,r,!0);gv(()=>{vd(r[e],i)},t)}function _u(n,e,t=pt,r=!1){if(t){const i=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Rs(),us(t);const a=cn(e,t,n,o);return ci(),Ns(),a});return r?i.unshift(s):i.push(s),s}}const Jn=n=>(e,t=pt)=>(!Bo||n==="sp")&&_u(n,(...r)=>e(...r),t),Y0=Jn("bm"),mv=Jn("m"),J0=Jn("bu"),X0=Jn("u"),Z0=Jn("bum"),gv=Jn("um"),eT=Jn("sp"),tT=Jn("rtg"),nT=Jn("rtc");function rT(n,e=pt){_u("ec",n,e)}const yv="components";function vv(n,e){return sT(yv,n,!0,e)||n}const iT=Symbol.for("v-ndc");function sT(n,e,t=!0,r=!1){const i=Zt||pt;if(i){const s=i.type;if(n===yv){const a=LT(s,!1);if(a&&(a===e||a===Dn(e)||a===gu(Dn(e))))return s}const o=Qp(i[n]||s[n],e)||Qp(i.appContext[n],e);return!o&&r?s:o}}function Qp(n,e){return n&&(n[e]||n[Dn(e)]||n[gu(Dn(e))])}function TL(n,e,t,r){let i;const s=t&&t[r];if(ce(n)||Ze(n)){i=new Array(n.length);for(let o=0,a=n.length;o<a;o++)i[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){i=new Array(n);for(let o=0;o<n;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Ue(n))if(n[Symbol.iterator])i=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];i[a]=e(n[u],u,a,s&&s[a])}}else i=[];return t&&(t[r]=i),i}const lh=n=>n?Rv(n)?Eu(n)||n.proxy:lh(n.parent):null,Io=ot(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>lh(n.parent),$root:n=>lh(n.root),$emit:n=>n.emit,$options:n=>Dd(n),$forceUpdate:n=>n.f||(n.f=()=>xd(n.update)),$nextTick:n=>n.n||(n.n=iv.bind(n.proxy)),$watch:n=>G0.bind(n)}),Tl=(n,e)=>n!==xe&&!n.__isScriptSetup&&_e(n,e),oT={get({_:n},e){const{ctx:t,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=n;let u;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(Tl(r,e))return o[e]=1,r[e];if(i!==xe&&_e(i,e))return o[e]=2,i[e];if((u=n.propsOptions[0])&&_e(u,e))return o[e]=3,s[e];if(t!==xe&&_e(t,e))return o[e]=4,t[e];hh&&(o[e]=0)}}const l=Io[e];let h,d;if(l)return e==="$attrs"&&qt(n,"get",e),l(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==xe&&_e(t,e))return o[e]=4,t[e];if(d=c.config.globalProperties,_e(d,e))return d[e]},set({_:n},e,t){const{data:r,setupState:i,ctx:s}=n;return Tl(i,e)?(i[e]=t,!0):r!==xe&&_e(r,e)?(r[e]=t,!0):_e(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!t[o]||n!==xe&&_e(n,o)||Tl(e,o)||(a=s[0])&&_e(a,o)||_e(r,o)||_e(Io,o)||_e(i.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:_e(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Yp(n){return ce(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let hh=!0;function aT(n){const e=Dd(n),t=n.proxy,r=n.ctx;hh=!1,e.beforeCreate&&Jp(e.beforeCreate,n,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:f,updated:m,activated:p,deactivated:y,beforeDestroy:_,beforeUnmount:S,destroyed:L,unmounted:x,render:le,renderTracked:N,renderTriggered:be,errorCaptured:oe,serverPrefetch:wt,expose:K,inheritAttrs:w,components:D,directives:b,filters:B}=e;if(u&&cT(u,r,null),o)for(const he in o){const ie=o[he];pe(ie)&&(r[he]=ie.bind(t))}if(i){const he=i.call(t,t);Ue(he)&&(n.data=fa(he))}if(hh=!0,s)for(const he in s){const ie=s[he],Mt=pe(ie)?ie.bind(t,t):pe(ie.get)?ie.get.bind(t,t):an,kt=!pe(ie)&&pe(ie.set)?ie.set.bind(t):an,nt=Jt({get:Mt,set:kt});Object.defineProperty(r,he,{enumerable:!0,configurable:!0,get:()=>nt.value,set:We=>nt.value=We})}if(a)for(const he in a)wv(a[he],r,t,he);if(c){const he=pe(c)?c.call(t):c;Reflect.ownKeys(he).forEach(ie=>{fc(ie,he[ie])})}l&&Jp(l,n,"c");function Y(he,ie){ce(ie)?ie.forEach(Mt=>he(Mt.bind(t))):ie&&he(ie.bind(t))}if(Y(Y0,h),Y(mv,d),Y(J0,f),Y(X0,m),Y(H0,p),Y(W0,y),Y(rT,oe),Y(nT,N),Y(tT,be),Y(Z0,S),Y(gv,x),Y(eT,wt),ce(K))if(K.length){const he=n.exposed||(n.exposed={});K.forEach(ie=>{Object.defineProperty(he,ie,{get:()=>t[ie],set:Mt=>t[ie]=Mt})})}else n.exposed||(n.exposed={});le&&n.render===an&&(n.render=le),w!=null&&(n.inheritAttrs=w),D&&(n.components=D),b&&(n.directives=b)}function cT(n,e,t=an){ce(n)&&(n=dh(n));for(const r in n){const i=n[r];let s;Ue(i)?"default"in i?s=kn(i.from||r,i.default,!0):s=kn(i.from||r):s=kn(i),St(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function Jp(n,e,t){cn(ce(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function wv(n,e,t,r){const i=r.includes(".")?hv(t,r):()=>t[r];if(Ze(n)){const s=e[n];pe(s)&&hc(i,s)}else if(pe(n))hc(i,n.bind(t));else if(Ue(n))if(ce(n))n.forEach(s=>wv(s,e,t,r));else{const s=pe(n.handler)?n.handler.bind(t):e[n.handler];pe(s)&&hc(i,s,n)}}function Dd(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!t&&!r?c=e:(c={},i.length&&i.forEach(u=>xc(c,u,o,!0)),xc(c,e,o)),Ue(e)&&s.set(e,c),c}function xc(n,e,t,r=!1){const{mixins:i,extends:s}=e;s&&xc(n,s,t,!0),i&&i.forEach(o=>xc(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const a=uT[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const uT={data:Xp,props:Zp,emits:Zp,methods:fo,computed:fo,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:fo,directives:fo,watch:hT,provide:Xp,inject:lT};function Xp(n,e){return e?n?function(){return ot(pe(n)?n.call(this,this):n,pe(e)?e.call(this,this):e)}:e:n}function lT(n,e){return fo(dh(n),dh(e))}function dh(n){if(ce(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Rt(n,e){return n?[...new Set([].concat(n,e))]:e}function fo(n,e){return n?ot(Object.create(null),n,e):e}function Zp(n,e){return n?ce(n)&&ce(e)?[...new Set([...n,...e])]:ot(Object.create(null),Yp(n),Yp(e??{})):e}function hT(n,e){if(!n)return e;if(!e)return n;const t=ot(Object.create(null),n);for(const r in e)t[r]=Rt(n[r],e[r]);return t}function _v(){return{app:null,config:{isNativeTag:$E,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dT=0;function fT(n,e){return function(r,i=null){pe(r)||(r=ot({},r)),i!=null&&!Ue(i)&&(i=null);const s=_v(),o=new Set;let a=!1;const c=s.app={_uid:dT++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:BT,get config(){return s.config},set config(u){},use(u,...l){return o.has(u)||(u&&pe(u.install)?(o.add(u),u.install(c,...l)):pe(u)&&(o.add(u),u(c,...l))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,l){return l?(s.components[u]=l,c):s.components[u]},directive(u,l){return l?(s.directives[u]=l,c):s.directives[u]},mount(u,l,h){if(!a){const d=Xe(r,i);return d.appContext=s,l&&e?e(d,u):n(d,u,h),a=!0,c._container=u,u.__vue_app__=c,Eu(d.component)||d.component.proxy}},unmount(){a&&(n(null,c._container),delete c._container.__vue_app__)},provide(u,l){return s.provides[u]=l,c},runWithContext(u){Dc=c;try{return u()}finally{Dc=null}}};return c}}let Dc=null;function fc(n,e){if(pt){let t=pt.provides;const r=pt.parent&&pt.parent.provides;r===t&&(t=pt.provides=Object.create(r)),t[n]=e}}function kn(n,e,t=!1){const r=pt||Zt;if(r||Dc){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Dc._context.provides;if(i&&n in i)return i[n];if(arguments.length>1)return t&&pe(e)?e.call(r&&r.proxy):e}}function pT(n,e,t,r=!1){const i={},s={};kc(s,bu,1),n.propsDefaults=Object.create(null),Iv(n,e,i,s);for(const o in n.propsOptions[0])o in i||(i[o]=void 0);t?n.props=r?i:k0(i):n.type.props?n.props=i:n.props=s,n.attrs=s}function mT(n,e,t,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=n,a=Ee(i),[c]=n.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=n.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(wu(n.emitsOptions,d))continue;const f=e[d];if(c)if(_e(s,d))f!==s[d]&&(s[d]=f,u=!0);else{const m=Dn(d);i[m]=fh(c,a,m,f,n,!1)}else f!==s[d]&&(s[d]=f,u=!0)}}}else{Iv(n,e,i,s)&&(u=!0);let l;for(const h in a)(!e||!_e(e,h)&&((l=ks(h))===h||!_e(e,l)))&&(c?t&&(t[h]!==void 0||t[l]!==void 0)&&(i[h]=fh(c,a,h,void 0,n,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!_e(e,h))&&(delete s[h],u=!0)}u&&Gn(n,"set","$attrs")}function Iv(n,e,t,r){const[i,s]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(cc(c))continue;const u=e[c];let l;i&&_e(i,l=Dn(c))?!s||!s.includes(l)?t[l]=u:(a||(a={}))[l]=u:wu(n.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(s){const c=Ee(t),u=a||xe;for(let l=0;l<s.length;l++){const h=s[l];t[h]=fh(i,c,h,u[h],n,!_e(u,h))}}return o}function fh(n,e,t,r,i,s){const o=n[t];if(o!=null){const a=_e(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pe(c)){const{propsDefaults:u}=i;t in u?r=u[t]:(us(i),r=u[t]=c.call(null,e),ci())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===ks(t))&&(r=!0))}return r}function bv(n,e,t=!1){const r=e.propsCache,i=r.get(n);if(i)return i;const s=n.props,o={},a=[];let c=!1;if(!pe(n)){const l=h=>{c=!0;const[d,f]=bv(h,e,!0);ot(o,d),f&&a.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}if(!s&&!c)return Ue(n)&&r.set(n,Wi),Wi;if(ce(s))for(let l=0;l<s.length;l++){const h=Dn(s[l]);em(h)&&(o[h]=xe)}else if(s)for(const l in s){const h=Dn(l);if(em(h)){const d=s[l],f=o[h]=ce(d)||pe(d)?{type:d}:ot({},d);if(f){const m=rm(Boolean,f.type),p=rm(String,f.type);f[0]=m>-1,f[1]=p<0||m<p,(m>-1||_e(f,"default"))&&a.push(h)}}}const u=[o,a];return Ue(n)&&r.set(n,u),u}function em(n){return n[0]!=="$"}function tm(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function nm(n,e){return tm(n)===tm(e)}function rm(n,e){return ce(e)?e.findIndex(t=>nm(t,n)):pe(e)&&nm(e,n)?0:-1}const Ev=n=>n[0]==="_"||n==="$stable",Pd=n=>ce(n)?n.map(yn):[yn(n)],gT=(n,e,t)=>{if(e._n)return e;const r=lc((...i)=>Pd(e(...i)),t);return r._c=!1,r},Tv=(n,e,t)=>{const r=n._ctx;for(const i in n){if(Ev(i))continue;const s=n[i];if(pe(s))e[i]=gT(i,s,r);else if(s!=null){const o=Pd(s);e[i]=()=>o}}},Sv=(n,e)=>{const t=Pd(e);n.slots.default=()=>t},yT=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Ee(e),kc(e,"_",t)):Tv(e,n.slots={})}else n.slots={},e&&Sv(n,e);kc(n.slots,bu,1)},vT=(n,e,t)=>{const{vnode:r,slots:i}=n;let s=!0,o=xe;if(r.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(ot(i,e),!t&&a===1&&delete i._):(s=!e.$stable,Tv(e,i)),o=e}else e&&(Sv(n,e),o={default:1});if(s)for(const a in i)!Ev(a)&&!(a in o)&&delete i[a]};function ph(n,e,t,r,i=!1){if(ce(n)){n.forEach((d,f)=>ph(d,e&&(ce(e)?e[f]:e),t,r,i));return}if(dc(r)&&!i)return;const s=r.shapeFlag&4?Eu(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=n,u=e&&e.r,l=a.refs===xe?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Ze(u)?(l[u]=null,_e(h,u)&&(h[u]=null)):St(u)&&(u.value=null)),pe(c))yr(c,a,12,[o,l]);else{const d=Ze(c),f=St(c);if(d||f){const m=()=>{if(n.f){const p=d?_e(h,c)?h[c]:l[c]:c.value;i?ce(p)&&vd(p,s):ce(p)?p.includes(s)||p.push(s):d?(l[c]=[s],_e(h,c)&&(h[c]=l[c])):(c.value=[s],n.k&&(l[n.k]=c.value))}else d?(l[c]=o,_e(h,c)&&(h[c]=o)):f&&(c.value=o,n.k&&(l[n.k]=o))};o?(m.id=-1,Lt(m,t)):m()}}}const Lt=K0;function wT(n){return _T(n)}function _T(n,e){const t=ih();t.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:f=an,insertStaticContent:m}=n,p=(g,v,I,C=null,k=null,O=null,$=!1,U=null,q=!!v.dynamicChildren)=>{if(g===v)return;g&&!Ys(g,v)&&(C=A(g),We(g,k,O,!0),g=null),v.patchFlag===-2&&(q=!1,v.dynamicChildren=null);const{type:M,ref:X,shapeFlag:J}=v;switch(M){case Iu:y(g,v,I,C);break;case pi:_(g,v,I,C);break;case pc:g==null&&S(v,I,C,$);break;case gn:D(g,v,I,C,k,O,$,U,q);break;default:J&1?le(g,v,I,C,k,O,$,U,q):J&6?b(g,v,I,C,k,O,$,U,q):(J&64||J&128)&&M.process(g,v,I,C,k,O,$,U,q,V)}X!=null&&k&&ph(X,g&&g.ref,O,v||g,!v)},y=(g,v,I,C)=>{if(g==null)r(v.el=a(v.children),I,C);else{const k=v.el=g.el;v.children!==g.children&&u(k,v.children)}},_=(g,v,I,C)=>{g==null?r(v.el=c(v.children||""),I,C):v.el=g.el},S=(g,v,I,C)=>{[g.el,g.anchor]=m(g.children,v,I,C,g.el,g.anchor)},L=({el:g,anchor:v},I,C)=>{let k;for(;g&&g!==v;)k=d(g),r(g,I,C),g=k;r(v,I,C)},x=({el:g,anchor:v})=>{let I;for(;g&&g!==v;)I=d(g),i(g),g=I;i(v)},le=(g,v,I,C,k,O,$,U,q)=>{$=$||v.type==="svg",g==null?N(v,I,C,k,O,$,U,q):wt(g,v,k,O,$,U,q)},N=(g,v,I,C,k,O,$,U)=>{let q,M;const{type:X,props:J,shapeFlag:ne,transition:ae,dirs:me}=g;if(q=g.el=o(g.type,O,J&&J.is,J),ne&8?l(q,g.children):ne&16&&oe(g.children,q,null,C,k,O&&X!=="foreignObject",$,U),me&&jr(g,null,C,"created"),be(q,g,g.scopeId,$,C),J){for(const Te in J)Te!=="value"&&!cc(Te)&&s(q,Te,null,J[Te],O,g.children,C,k,Re);"value"in J&&s(q,"value",null,J.value),(M=J.onVnodeBeforeMount)&&mn(M,C,g)}me&&jr(g,null,C,"beforeMount");const ke=(!k||k&&!k.pendingBranch)&&ae&&!ae.persisted;ke&&ae.beforeEnter(q),r(q,v,I),((M=J&&J.onVnodeMounted)||ke||me)&&Lt(()=>{M&&mn(M,C,g),ke&&ae.enter(q),me&&jr(g,null,C,"mounted")},k)},be=(g,v,I,C,k)=>{if(I&&f(g,I),C)for(let O=0;O<C.length;O++)f(g,C[O]);if(k){let O=k.subTree;if(v===O){const $=k.vnode;be(g,$,$.scopeId,$.slotScopeIds,k.parent)}}},oe=(g,v,I,C,k,O,$,U,q=0)=>{for(let M=q;M<g.length;M++){const X=g[M]=U?lr(g[M]):yn(g[M]);p(null,X,v,I,C,k,O,$,U)}},wt=(g,v,I,C,k,O,$)=>{const U=v.el=g.el;let{patchFlag:q,dynamicChildren:M,dirs:X}=v;q|=g.patchFlag&16;const J=g.props||xe,ne=v.props||xe;let ae;I&&zr(I,!1),(ae=ne.onVnodeBeforeUpdate)&&mn(ae,I,v,g),X&&jr(v,g,I,"beforeUpdate"),I&&zr(I,!0);const me=k&&v.type!=="foreignObject";if(M?K(g.dynamicChildren,M,U,I,C,me,O):$||ie(g,v,U,null,I,C,me,O,!1),q>0){if(q&16)w(U,v,J,ne,I,C,k);else if(q&2&&J.class!==ne.class&&s(U,"class",null,ne.class,k),q&4&&s(U,"style",J.style,ne.style,k),q&8){const ke=v.dynamicProps;for(let Te=0;Te<ke.length;Te++){const Ve=ke[Te],It=J[Ve],fn=ne[Ve];(fn!==It||Ve==="value")&&s(U,Ve,It,fn,k,g.children,I,C,Re)}}q&1&&g.children!==v.children&&l(U,v.children)}else!$&&M==null&&w(U,v,J,ne,I,C,k);((ae=ne.onVnodeUpdated)||X)&&Lt(()=>{ae&&mn(ae,I,v,g),X&&jr(v,g,I,"updated")},C)},K=(g,v,I,C,k,O,$)=>{for(let U=0;U<v.length;U++){const q=g[U],M=v[U],X=q.el&&(q.type===gn||!Ys(q,M)||q.shapeFlag&70)?h(q.el):I;p(q,M,X,null,C,k,O,$,!0)}},w=(g,v,I,C,k,O,$)=>{if(I!==C){if(I!==xe)for(const U in I)!cc(U)&&!(U in C)&&s(g,U,I[U],null,$,v.children,k,O,Re);for(const U in C){if(cc(U))continue;const q=C[U],M=I[U];q!==M&&U!=="value"&&s(g,U,M,q,$,v.children,k,O,Re)}"value"in C&&s(g,"value",I.value,C.value)}},D=(g,v,I,C,k,O,$,U,q)=>{const M=v.el=g?g.el:a(""),X=v.anchor=g?g.anchor:a("");let{patchFlag:J,dynamicChildren:ne,slotScopeIds:ae}=v;ae&&(U=U?U.concat(ae):ae),g==null?(r(M,I,C),r(X,I,C),oe(v.children,I,X,k,O,$,U,q)):J>0&&J&64&&ne&&g.dynamicChildren?(K(g.dynamicChildren,ne,I,k,O,$,U),(v.key!=null||k&&v===k.subTree)&&Cv(g,v,!0)):ie(g,v,I,X,k,O,$,U,q)},b=(g,v,I,C,k,O,$,U,q)=>{v.slotScopeIds=U,g==null?v.shapeFlag&512?k.ctx.activate(v,I,C,$,q):B(v,I,C,k,O,$,q):Z(g,v,q)},B=(g,v,I,C,k,O,$)=>{const U=g.component=xT(g,C,k);if(fv(g)&&(U.ctx.renderer=V),DT(U),U.asyncDep){if(k&&k.registerDep(U,Y),!g.el){const q=U.subTree=Xe(pi);_(null,q,v,I)}return}Y(U,g,v,I,k,O,$)},Z=(g,v,I)=>{const C=v.component=g.component;if(q0(g,v,I))if(C.asyncDep&&!C.asyncResolved){he(C,v,I);return}else C.next=v,L0(C.update),C.update();else v.el=g.el,C.vnode=v},Y=(g,v,I,C,k,O,$)=>{const U=()=>{if(g.isMounted){let{next:X,bu:J,u:ne,parent:ae,vnode:me}=g,ke=X,Te;zr(g,!1),X?(X.el=me.el,he(g,X,$)):X=me,J&&uc(J),(Te=X.props&&X.props.onVnodeBeforeUpdate)&&mn(Te,ae,X,me),zr(g,!0);const Ve=El(g),It=g.subTree;g.subTree=Ve,p(It,Ve,h(It.el),A(It),g,k,O),X.el=Ve.el,ke===null&&j0(g,Ve.el),ne&&Lt(ne,k),(Te=X.props&&X.props.onVnodeUpdated)&&Lt(()=>mn(Te,ae,X,me),k)}else{let X;const{el:J,props:ne}=v,{bm:ae,m:me,parent:ke}=g,Te=dc(v);if(zr(g,!1),ae&&uc(ae),!Te&&(X=ne&&ne.onVnodeBeforeMount)&&mn(X,ke,v),zr(g,!0),J&&se){const Ve=()=>{g.subTree=El(g),se(J,g.subTree,g,k,null)};Te?v.type.__asyncLoader().then(()=>!g.isUnmounted&&Ve()):Ve()}else{const Ve=g.subTree=El(g);p(null,Ve,I,C,g,k,O),v.el=Ve.el}if(me&&Lt(me,k),!Te&&(X=ne&&ne.onVnodeMounted)){const Ve=v;Lt(()=>mn(X,ke,Ve),k)}(v.shapeFlag&256||ke&&dc(ke.vnode)&&ke.vnode.shapeFlag&256)&&g.a&&Lt(g.a,k),g.isMounted=!0,v=I=C=null}},q=g.effect=new Td(U,()=>xd(M),g.scope),M=g.update=()=>q.run();M.id=g.uid,zr(g,!0),M()},he=(g,v,I)=>{v.component=g;const C=g.vnode.props;g.vnode=v,g.next=null,mT(g,v.props,C,I),vT(g,v.children,I),Rs(),Hp(),Ns()},ie=(g,v,I,C,k,O,$,U,q=!1)=>{const M=g&&g.children,X=g?g.shapeFlag:0,J=v.children,{patchFlag:ne,shapeFlag:ae}=v;if(ne>0){if(ne&128){kt(M,J,I,C,k,O,$,U,q);return}else if(ne&256){Mt(M,J,I,C,k,O,$,U,q);return}}ae&8?(X&16&&Re(M,k,O),J!==M&&l(I,J)):X&16?ae&16?kt(M,J,I,C,k,O,$,U,q):Re(M,k,O,!0):(X&8&&l(I,""),ae&16&&oe(J,I,C,k,O,$,U,q))},Mt=(g,v,I,C,k,O,$,U,q)=>{g=g||Wi,v=v||Wi;const M=g.length,X=v.length,J=Math.min(M,X);let ne;for(ne=0;ne<J;ne++){const ae=v[ne]=q?lr(v[ne]):yn(v[ne]);p(g[ne],ae,I,null,k,O,$,U,q)}M>X?Re(g,k,O,!0,!1,J):oe(v,I,C,k,O,$,U,q,J)},kt=(g,v,I,C,k,O,$,U,q)=>{let M=0;const X=v.length;let J=g.length-1,ne=X-1;for(;M<=J&&M<=ne;){const ae=g[M],me=v[M]=q?lr(v[M]):yn(v[M]);if(Ys(ae,me))p(ae,me,I,null,k,O,$,U,q);else break;M++}for(;M<=J&&M<=ne;){const ae=g[J],me=v[ne]=q?lr(v[ne]):yn(v[ne]);if(Ys(ae,me))p(ae,me,I,null,k,O,$,U,q);else break;J--,ne--}if(M>J){if(M<=ne){const ae=ne+1,me=ae<X?v[ae].el:C;for(;M<=ne;)p(null,v[M]=q?lr(v[M]):yn(v[M]),I,me,k,O,$,U,q),M++}}else if(M>ne)for(;M<=J;)We(g[M],k,O,!0),M++;else{const ae=M,me=M,ke=new Map;for(M=me;M<=ne;M++){const bt=v[M]=q?lr(v[M]):yn(v[M]);bt.key!=null&&ke.set(bt.key,M)}let Te,Ve=0;const It=ne-me+1;let fn=!1,Mi=0;const qr=new Array(It);for(M=0;M<It;M++)qr[M]=0;for(M=ae;M<=J;M++){const bt=g[M];if(Ve>=It){We(bt,k,O,!0);continue}let Yt;if(bt.key!=null)Yt=ke.get(bt.key);else for(Te=me;Te<=ne;Te++)if(qr[Te-me]===0&&Ys(bt,v[Te])){Yt=Te;break}Yt===void 0?We(bt,k,O,!0):(qr[Yt-me]=M+1,Yt>=Mi?Mi=Yt:fn=!0,p(bt,v[Yt],I,null,k,O,$,U,q),Ve++)}const Hs=fn?IT(qr):Wi;for(Te=Hs.length-1,M=It-1;M>=0;M--){const bt=me+M,Yt=v[bt],Ws=bt+1<X?v[bt+1].el:C;qr[M]===0?p(null,Yt,I,Ws,k,O,$,U,q):fn&&(Te<0||M!==Hs[Te]?nt(Yt,I,Ws,2):Te--)}}},nt=(g,v,I,C,k=null)=>{const{el:O,type:$,transition:U,children:q,shapeFlag:M}=g;if(M&6){nt(g.component.subTree,v,I,C);return}if(M&128){g.suspense.move(v,I,C);return}if(M&64){$.move(g,v,I,V);return}if($===gn){r(O,v,I);for(let J=0;J<q.length;J++)nt(q[J],v,I,C);r(g.anchor,v,I);return}if($===pc){L(g,v,I);return}if(C!==2&&M&1&&U)if(C===0)U.beforeEnter(O),r(O,v,I),Lt(()=>U.enter(O),k);else{const{leave:J,delayLeave:ne,afterLeave:ae}=U,me=()=>r(O,v,I),ke=()=>{J(O,()=>{me(),ae&&ae()})};ne?ne(O,me,ke):ke()}else r(O,v,I)},We=(g,v,I,C=!1,k=!1)=>{const{type:O,props:$,ref:U,children:q,dynamicChildren:M,shapeFlag:X,patchFlag:J,dirs:ne}=g;if(U!=null&&ph(U,null,I,g,!0),X&256){v.ctx.deactivate(g);return}const ae=X&1&&ne,me=!dc(g);let ke;if(me&&(ke=$&&$.onVnodeBeforeUnmount)&&mn(ke,v,g),X&6)_t(g.component,I,C);else{if(X&128){g.suspense.unmount(I,C);return}ae&&jr(g,null,v,"beforeUnmount"),X&64?g.type.remove(g,v,I,k,V,C):M&&(O!==gn||J>0&&J&64)?Re(M,v,I,!1,!0):(O===gn&&J&384||!k&&X&16)&&Re(q,v,I),C&&Wt(g)}(me&&(ke=$&&$.onVnodeUnmounted)||ae)&&Lt(()=>{ke&&mn(ke,v,g),ae&&jr(g,null,v,"unmounted")},I)},Wt=g=>{const{type:v,el:I,anchor:C,transition:k}=g;if(v===gn){Qt(I,C);return}if(v===pc){x(g);return}const O=()=>{i(I),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(g.shapeFlag&1&&k&&!k.persisted){const{leave:$,delayLeave:U}=k,q=()=>$(I,O);U?U(g.el,O,q):q()}else O()},Qt=(g,v)=>{let I;for(;g!==v;)I=d(g),i(g),g=I;i(v)},_t=(g,v,I)=>{const{bum:C,scope:k,update:O,subTree:$,um:U}=g;C&&uc(C),k.stop(),O&&(O.active=!1,We($,g,v,I)),U&&Lt(U,v),Lt(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},Re=(g,v,I,C=!1,k=!1,O=0)=>{for(let $=O;$<g.length;$++)We(g[$],v,I,C,k)},A=g=>g.shapeFlag&6?A(g.component.subTree):g.shapeFlag&128?g.suspense.next():d(g.anchor||g.el),G=(g,v,I)=>{g==null?v._vnode&&We(v._vnode,null,null,!0):p(v._vnode||null,g,v,null,null,null,I),Hp(),ov(),v._vnode=g},V={p,um:We,m:nt,r:Wt,mt:B,mc:oe,pc:ie,pbc:K,n:A,o:n};let Q,se;return e&&([Q,se]=e(V)),{render:G,hydrate:Q,createApp:fT(G,Q)}}function zr({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Cv(n,e,t=!1){const r=n.children,i=e.children;if(ce(r)&&ce(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=lr(i[s]),a.el=o.el),t||Cv(o,a)),a.type===Iu&&(a.el=o.el)}}function IT(n){const e=n.slice(),t=[0];let r,i,s,o,a;const c=n.length;for(r=0;r<c;r++){const u=n[r];if(u!==0){if(i=t[t.length-1],n[i]<u){e[r]=i,t.push(r);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<u?s=a+1:o=a;u<n[t[s]]&&(s>0&&(e[r]=t[s-1]),t[s]=r)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const bT=n=>n.__isTeleport,gn=Symbol.for("v-fgt"),Iu=Symbol.for("v-txt"),pi=Symbol.for("v-cmt"),pc=Symbol.for("v-stc"),bo=[];let sn=null;function Pc(n=!1){bo.push(sn=n?null:[])}function ET(){bo.pop(),sn=bo[bo.length-1]||null}let Vo=1;function im(n){Vo+=n}function Av(n){return n.dynamicChildren=Vo>0?sn||Wi:null,ET(),Vo>0&&sn&&sn.push(n),n}function mh(n,e,t,r,i,s){return Av(Hn(n,e,t,r,i,s,!0))}function TT(n,e,t,r,i){return Av(Xe(n,e,t,r,i,!0))}function gh(n){return n?n.__v_isVNode===!0:!1}function Ys(n,e){return n.type===e.type&&n.key===e.key}const bu="__vInternal",kv=({key:n})=>n??null,mc=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ze(n)||St(n)||pe(n)?{i:Zt,r:n,k:e,f:!!t}:n:null);function Hn(n,e=null,t=null,r=0,i=null,s=n===gn?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&kv(e),ref:e&&mc(e),scopeId:uv,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Zt};return a?(Od(c,t),s&128&&n.normalize(c)):t&&(c.shapeFlag|=Ze(t)?8:16),Vo>0&&!o&&sn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&sn.push(c),c}const Xe=ST;function ST(n,e=null,t=null,r=0,i=null,s=!1){if((!n||n===iT)&&(n=pi),gh(n)){const a=cs(n,e,!0);return t&&Od(a,t),Vo>0&&!s&&sn&&(a.shapeFlag&6?sn[sn.indexOf(n)]=a:sn.push(a)),a.patchFlag|=-2,a}if(FT(n)&&(n=n.__vccOpts),e){e=CT(e);let{class:a,style:c}=e;a&&!Ze(a)&&(e.class=bd(a)),Ue(c)&&(Yy(c)&&!ce(c)&&(c=ot({},c)),e.style=Id(c))}const o=Ze(n)?1:z0(n)?128:bT(n)?64:Ue(n)?4:pe(n)?2:0;return Hn(n,e,t,r,i,o,s,!0)}function CT(n){return n?Yy(n)||bu in n?ot({},n):n:null}function cs(n,e,t=!1){const{props:r,ref:i,patchFlag:s,children:o}=n,a=e?kT(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&kv(a),ref:e&&e.ref?t&&i?ce(i)?i.concat(mc(e)):[i,mc(e)]:mc(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==gn?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&cs(n.ssContent),ssFallback:n.ssFallback&&cs(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function yh(n=" ",e=0){return Xe(Iu,null,n,e)}function SL(n,e){const t=Xe(pc,null,n);return t.staticCount=e,t}function AT(n="",e=!1){return e?(Pc(),TT(pi,null,n)):Xe(pi,null,n)}function yn(n){return n==null||typeof n=="boolean"?Xe(pi):ce(n)?Xe(gn,null,n.slice()):typeof n=="object"?lr(n):Xe(Iu,null,String(n))}function lr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:cs(n)}function Od(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(ce(e))t=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Od(n,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(bu in e)?e._ctx=Zt:i===3&&Zt&&(Zt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:Zt},t=32):(e=String(e),r&64?(t=16,e=[yh(e)]):t=8);n.children=e,n.shapeFlag|=t}function kT(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=bd([e.class,r.class]));else if(i==="style")e.style=Id([e.style,r.style]);else if(fu(i)){const s=e[i],o=r[i];o&&s!==o&&!(ce(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function mn(n,e,t,r=null){cn(n,e,7,[t,r])}const RT=_v();let NT=0;function xT(n,e,t){const r=n.type,i=(e?e.appContext:n.appContext)||RT,s={uid:NT++,vnode:n,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new ZE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bv(r,i),emitsOptions:cv(r,i),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=V0.bind(null,s),n.ce&&n.ce(s),s}let pt=null,Md,Li,sm="__VUE_INSTANCE_SETTERS__";(Li=ih()[sm])||(Li=ih()[sm]=[]),Li.push(n=>pt=n),Md=n=>{Li.length>1?Li.forEach(e=>e(n)):Li[0](n)};const us=n=>{Md(n),n.scope.on()},ci=()=>{pt&&pt.scope.off(),Md(null)};function Rv(n){return n.vnode.shapeFlag&4}let Bo=!1;function DT(n,e=!1){Bo=e;const{props:t,children:r}=n.vnode,i=Rv(n);pT(n,t,i,e),yT(n,r);const s=i?PT(n,e):void 0;return Bo=!1,s}function PT(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Jy(new Proxy(n.ctx,oT));const{setup:r}=t;if(r){const i=n.setupContext=r.length>1?MT(n):null;us(n),Rs();const s=yr(r,n,0,[n.props,i]);if(Ns(),ci(),Oy(s)){if(s.then(ci,ci),e)return s.then(o=>{om(n,o,e)}).catch(o=>{vu(o,n,0)});n.asyncDep=s}else om(n,s,e)}else Nv(n,e)}function om(n,e,t){pe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ue(e)&&(n.setupState=nv(e)),Nv(n,t)}let am;function Nv(n,e,t){const r=n.type;if(!n.render){if(!e&&am&&!r.render){const i=r.template||Dd(n).template;if(i){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:c}=r,u=ot(ot({isCustomElement:s,delimiters:a},o),c);r.render=am(i,u)}}n.render=r.render||an}us(n),Rs(),aT(n),Ns(),ci()}function OT(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return qt(n,"get","$attrs"),e[t]}}))}function MT(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return OT(n)},slots:n.slots,emit:n.emit,expose:e}}function Eu(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(nv(Jy(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Io)return Io[t](n)},has(e,t){return t in e||t in Io}}))}function LT(n,e=!0){return pe(n)?n.displayName||n.name:n.name||e&&n.__name}function FT(n){return pe(n)&&"__vccOpts"in n}const Jt=(n,e)=>P0(n,e,Bo);function xv(n,e,t){const r=arguments.length;return r===2?Ue(e)&&!ce(e)?gh(e)?Xe(n,null,[e]):Xe(n,e):Xe(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&gh(t)&&(t=[t]),Xe(n,e,t))}const UT=Symbol.for("v-scx"),VT=()=>kn(UT),BT="3.3.2",$T="http://www.w3.org/2000/svg",Qr=typeof document<"u"?document:null,cm=Qr&&Qr.createElement("template"),qT={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const i=e?Qr.createElementNS($T,n):Qr.createElement(n,t?{is:t}:void 0);return n==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:n=>Qr.createTextNode(n),createComment:n=>Qr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Qr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,i,s){const o=t?t.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{cm.innerHTML=r?`<svg>${n}</svg>`:n;const a=cm.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function jT(n,e,t){const r=n._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function zT(n,e,t){const r=n.style,i=Ze(t);if(t&&!i){if(e&&!Ze(e))for(const s in e)t[s]==null&&vh(r,s,"");for(const s in t)vh(r,s,t[s])}else{const s=r.display;i?e!==t&&(r.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(r.display=s)}}const um=/\s*!important$/;function vh(n,e,t){if(ce(t))t.forEach(r=>vh(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=KT(n,e);um.test(t)?n.setProperty(ks(r),t.replace(um,""),"important"):n[r]=t}}const lm=["Webkit","Moz","ms"],Sl={};function KT(n,e){const t=Sl[e];if(t)return t;let r=Dn(e);if(r!=="filter"&&r in n)return Sl[e]=r;r=gu(r);for(let i=0;i<lm.length;i++){const s=lm[i]+r;if(s in n)return Sl[e]=s}return e}const hm="http://www.w3.org/1999/xlink";function GT(n,e,t,r,i){if(r&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(hm,e.slice(6,e.length)):n.setAttributeNS(hm,e,t);else{const s=XE(e);t==null||s&&!Fy(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function HT(n,e,t,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const u=a==="OPTION"?n.getAttribute("value"):n.value,l=t??"";u!==l&&(n.value=l),t==null&&n.removeAttribute(e);return}let c=!1;if(t===""||t==null){const u=typeof n[e];u==="boolean"?t=Fy(t):t==null&&u==="string"?(t="",c=!0):u==="number"&&(t=0,c=!0)}try{n[e]=t}catch{}c&&n.removeAttribute(e)}function $i(n,e,t,r){n.addEventListener(e,t,r)}function WT(n,e,t,r){n.removeEventListener(e,t,r)}function QT(n,e,t,r,i=null){const s=n._vei||(n._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=YT(e);if(r){const u=s[e]=ZT(r,i);$i(n,a,u,c)}else o&&(WT(n,a,o,c),s[e]=void 0)}}const dm=/(?:Once|Passive|Capture)$/;function YT(n){let e;if(dm.test(n)){e={};let r;for(;r=n.match(dm);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ks(n.slice(2)),e]}let Cl=0;const JT=Promise.resolve(),XT=()=>Cl||(JT.then(()=>Cl=0),Cl=Date.now());function ZT(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;cn(eS(r,t.value),e,5,[r])};return t.value=n,t.attached=XT(),t}function eS(n,e){if(ce(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const fm=/^on[a-z]/,tS=(n,e,t,r,i=!1,s,o,a,c)=>{e==="class"?jT(n,r,i):e==="style"?zT(n,t,r):fu(e)?yd(e)||QT(n,e,t,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):nS(n,e,r,i))?HT(n,e,r,s,o,a,c):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),GT(n,e,r,i))};function nS(n,e,t,r){return r?!!(e==="innerHTML"||e==="textContent"||e in n&&fm.test(e)&&pe(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||fm.test(e)&&Ze(t)?!1:e in n}const pm=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ce(e)?t=>uc(e,t):e};function rS(n){n.target.composing=!0}function mm(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const CL={created(n,{modifiers:{lazy:e,trim:t,number:r}},i){n._assign=pm(i);const s=r||i.props&&i.props.type==="number";$i(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),s&&(a=rh(a)),n._assign(a)}),t&&$i(n,"change",()=>{n.value=n.value.trim()}),e||($i(n,"compositionstart",rS),$i(n,"compositionend",mm),$i(n,"change",mm))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:r,number:i}},s){if(n._assign=pm(s),n.composing||document.activeElement===n&&n.type!=="range"&&(t||r&&n.value.trim()===e||(i||n.type==="number")&&rh(n.value)===e))return;const o=e??"";n.value!==o&&(n.value=o)}},iS=["ctrl","shift","alt","meta"],sS={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>iS.some(t=>n[`${t}Key`]&&!e.includes(t))},AL=(n,e)=>(t,...r)=>{for(let i=0;i<e.length;i++){const s=sS[e[i]];if(s&&s(t,e))return}return n(t,...r)},kL={beforeMount(n,{value:e},{transition:t}){n._vod=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Js(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:r}){!e!=!t&&(r?e?(r.beforeEnter(n),Js(n,!0),r.enter(n)):r.leave(n,()=>{Js(n,!1)}):Js(n,e))},beforeUnmount(n,{value:e}){Js(n,e)}};function Js(n,e){n.style.display=e?n._vod:"none"}const oS=ot({patchProp:tS},qT);let gm;function aS(){return gm||(gm=wT(oS))}const cS=(...n)=>{const e=aS().createApp(...n),{mount:t}=e;return e.mount=r=>{const i=uS(r);if(!i)return;const s=e._component;!pe(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function uS(n){return Ze(n)?document.querySelector(n):n}const lS="/ticharlez34/assets/logo-826f37f1.png";/**
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
 */const Dv=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},hS=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Pv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(t[l],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Dv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):hS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new dS;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const m=u<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class dS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fS=function(n){const e=Dv(n);return Pv.encodeByteArray(e,!0)},Oc=function(n){return fS(n).replace(/\./g,"")},Ov=function(n){try{return Pv.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Mc(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!pS(t)||(n[t]=Mc(n[t],e[t]));return n}function pS(n){return n!=="__proto__"}/**
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
 */function mS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gS=()=>mS().__FIREBASE_DEFAULTS__,yS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},vS=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ov(n[1]);return e&&JSON.parse(e)},Tu=()=>{try{return gS()||yS()||vS()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},wS=n=>{var e,t;return(t=(e=Tu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Mv=()=>{var n;return(n=Tu())===null||n===void 0?void 0:n.config},Lv=n=>{var e;return(e=Tu())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class _S{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function IS(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Oc(JSON.stringify(t)),Oc(JSON.stringify(o)),a].join(".")}/**
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
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function Ld(){var n;const e=(n=Tu())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ES(){return typeof self=="object"&&self.self===self}function Fv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Fd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Uv(){const n=Be();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function TS(){return!Ld()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $o(){try{return typeof indexedDB=="object"}catch{return!1}}function SS(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const CS="FirebaseError";class Pt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=CS,Object.setPrototypeOf(this,Pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ai.prototype.create)}}class Ai{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?AS(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Pt(i,a,r)}}function AS(n,e){return n.replace(kS,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const kS=/\{\$([^}]+)}/g;/**
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
 */function ym(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function RS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Lc(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(vm(s)&&vm(o)){if(!Lc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function vm(n){return n!==null&&typeof n=="object"}/**
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
 */function xs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Gi(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function po(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Vv(n,e){const t=new NS(n,e);return t.subscribe.bind(t)}class NS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");xS(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Al),i.error===void 0&&(i.error=Al),i.complete===void 0&&(i.complete=Al);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Al(){}/**
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
 */function re(n){return n&&n._delegate?n._delegate:n}class Pn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Gr="[DEFAULT]";/**
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
 */class DS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new _S;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(OS(e))try{this.getOrInitializeService({instanceIdentifier:Gr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Gr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gr){return this.instances.has(e)}getOptions(e=Gr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:PS(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gr){return this.component?this.component.multipleInstances?e:Gr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PS(n){return n===Gr?void 0:n}function OS(n){return n.instantiationMode==="EAGER"}/**
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
 */class MS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new DS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Ud=[];var ve;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ve||(ve={}));const Bv={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},LS=ve.INFO,FS={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},US=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=FS[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Su{constructor(e){this.name=e,this._logLevel=LS,this._logHandler=US,this._userLogHandler=null,Ud.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}function VS(n){Ud.forEach(e=>{e.setLogLevel(n)})}function BS(n,e){for(const t of Ud){let r=null;e&&e.level&&(r=Bv[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r??i.logLevel)&&n({level:ve[s].toLowerCase(),message:a,args:o,type:i.name})}}}const $S=(n,e)=>e.some(t=>n instanceof t);let wm,_m;function qS(){return wm||(wm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jS(){return _m||(_m=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $v=new WeakMap,wh=new WeakMap,qv=new WeakMap,kl=new WeakMap,Vd=new WeakMap;function zS(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(vr(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&$v.set(t,n)}).catch(()=>{}),Vd.set(e,n),e}function KS(n){if(wh.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});wh.set(n,e)}let _h={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return wh.get(n);if(e==="objectStoreNames")return n.objectStoreNames||qv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return vr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function GS(n){_h=n(_h)}function HS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Rl(this),e,...t);return qv.set(r,e.sort?e.sort():[e]),vr(r)}:jS().includes(n)?function(...e){return n.apply(Rl(this),e),vr($v.get(this))}:function(...e){return vr(n.apply(Rl(this),e))}}function WS(n){return typeof n=="function"?HS(n):(n instanceof IDBTransaction&&KS(n),$S(n,qS())?new Proxy(n,_h):n)}function vr(n){if(n instanceof IDBRequest)return zS(n);if(kl.has(n))return kl.get(n);const e=WS(n);return e!==n&&(kl.set(n,e),Vd.set(e,n)),e}const Rl=n=>Vd.get(n);function QS(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=vr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(vr(o.result),c.oldVersion,c.newVersion,vr(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const YS=["get","getKey","getAll","getAllKeys","count"],JS=["put","add","delete","clear"],Nl=new Map;function Im(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Nl.get(e))return Nl.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=JS.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||YS.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&c.done]))[0]};return Nl.set(e,s),s}GS(n=>({...n,get:(e,t,r)=>Im(e,t)||n.get(e,t,r),has:(e,t)=>!!Im(e,t)||n.has(e,t)}));/**
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
 */class XS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ZS(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function ZS(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ih="@firebase/app",bm="0.9.10";/**
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
 */const mi=new Su("@firebase/app"),eC="@firebase/app-compat",tC="@firebase/analytics-compat",nC="@firebase/analytics",rC="@firebase/app-check-compat",iC="@firebase/app-check",sC="@firebase/auth",oC="@firebase/auth-compat",aC="@firebase/database",cC="@firebase/database-compat",uC="@firebase/functions",lC="@firebase/functions-compat",hC="@firebase/installations",dC="@firebase/installations-compat",fC="@firebase/messaging",pC="@firebase/messaging-compat",mC="@firebase/performance",gC="@firebase/performance-compat",yC="@firebase/remote-config",vC="@firebase/remote-config-compat",wC="@firebase/storage",_C="@firebase/storage-compat",IC="@firebase/firestore",bC="@firebase/firestore-compat",EC="firebase",TC="9.22.0";/**
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
 */const _r="[DEFAULT]",SC={[Ih]:"fire-core",[eC]:"fire-core-compat",[nC]:"fire-analytics",[tC]:"fire-analytics-compat",[iC]:"fire-app-check",[rC]:"fire-app-check-compat",[sC]:"fire-auth",[oC]:"fire-auth-compat",[aC]:"fire-rtdb",[cC]:"fire-rtdb-compat",[uC]:"fire-fn",[lC]:"fire-fn-compat",[hC]:"fire-iid",[dC]:"fire-iid-compat",[fC]:"fire-fcm",[pC]:"fire-fcm-compat",[mC]:"fire-perf",[gC]:"fire-perf-compat",[yC]:"fire-rc",[vC]:"fire-rc-compat",[wC]:"fire-gcs",[_C]:"fire-gcs-compat",[IC]:"fire-fst",[bC]:"fire-fst-compat","fire-js":"fire-js",[EC]:"fire-js-all"};/**
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
 */const Ir=new Map,qo=new Map;function Fc(n,e){try{n.container.addComponent(e)}catch(t){mi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function jv(n,e){n.container.addOrOverwriteComponent(e)}function br(n){const e=n.name;if(qo.has(e))return mi.debug(`There were multiple attempts to register component ${e}.`),!1;qo.set(e,n);for(const t of Ir.values())Fc(t,n);return!0}function Cu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function CC(n,e,t=_r){Cu(n,e).clearInstance(t)}function AC(){qo.clear()}/**
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
 */const kC={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},zn=new Ai("app","Firebase",kC);/**
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
 */let RC=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zn.create("app-deleted",{appName:this._name})}};/**
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
 */const Or=TC;function Bd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:_r,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw zn.create("bad-app-name",{appName:String(i)});if(t||(t=Mv()),!t)throw zn.create("no-options");const s=Ir.get(i);if(s){if(Lc(t,s.options)&&Lc(r,s.config))return s;throw zn.create("duplicate-app",{appName:i})}const o=new MS(i);for(const c of qo.values())o.addComponent(c);const a=new RC(t,r,o);return Ir.set(i,a),a}function zv(n=_r){const e=Ir.get(n);if(!e&&n===_r&&Mv())return Bd();if(!e)throw zn.create("no-app",{appName:n});return e}function NC(){return Array.from(Ir.values())}async function Kv(n){const e=n.name;Ir.has(e)&&(Ir.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function Rn(n,e,t){var r;let i=(r=SC[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mi.warn(a.join(" "));return}br(new Pn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Gv(n,e){if(n!==null&&typeof n!="function")throw zn.create("invalid-log-argument");BS(n,e)}function Hv(n){VS(n)}/**
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
 */const xC="firebase-heartbeat-database",DC=1,jo="firebase-heartbeat-store";let xl=null;function Wv(){return xl||(xl=QS(xC,DC,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(jo)}}}).catch(n=>{throw zn.create("idb-open",{originalErrorMessage:n.message})})),xl}async function PC(n){try{return await(await Wv()).transaction(jo).objectStore(jo).get(Qv(n))}catch(e){if(e instanceof Pt)mi.warn(e.message);else{const t=zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mi.warn(t.message)}}}async function Em(n,e){try{const r=(await Wv()).transaction(jo,"readwrite");await r.objectStore(jo).put(e,Qv(n)),await r.done}catch(t){if(t instanceof Pt)mi.warn(t.message);else{const r=zn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});mi.warn(r.message)}}}function Qv(n){return`${n.name}!${n.options.appId}`}/**
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
 */const OC=1024,MC=30*24*60*60*1e3;class LC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new UC(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Tm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=MC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Tm(),{heartbeatsToSend:t,unsentEntries:r}=FC(this._heartbeatsCache.heartbeats),i=Oc(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Tm(){return new Date().toISOString().substring(0,10)}function FC(n,e=OC){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Sm(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Sm(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class UC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $o()?SS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await PC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Em(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Em(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Sm(n){return Oc(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function VC(n){br(new Pn("platform-logger",e=>new XS(e),"PRIVATE")),br(new Pn("heartbeat",e=>new LC(e),"PRIVATE")),Rn(Ih,bm,n),Rn(Ih,bm,"esm2017"),Rn("fire-js","")}VC("");const BC=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Pt,SDK_VERSION:Or,_DEFAULT_ENTRY_NAME:_r,_addComponent:Fc,_addOrOverwriteComponent:jv,_apps:Ir,_clearComponents:AC,_components:qo,_getProvider:Cu,_registerComponent:br,_removeServiceInstance:CC,deleteApp:Kv,getApp:zv,getApps:NC,initializeApp:Bd,onLog:Gv,registerVersion:Rn,setLogLevel:Hv},Symbol.toStringTag,{value:"Module"}));function $d(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const Xs={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Fi={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function Yv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qC=$C,jC=Yv,Jv=new Ai("auth","Firebase",Yv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc=new Su("@firebase/auth");function zC(n,...e){Uc.logLevel<=ve.WARN&&Uc.warn(`Auth (${Or}): ${n}`,...e)}function gc(n,...e){Uc.logLevel<=ve.ERROR&&Uc.error(`Auth (${Or}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(n,...e){throw qd(n,...e)}function gt(n,...e){return qd(n,...e)}function Xv(n,e,t){const r=Object.assign(Object.assign({},jC()),{[e]:t});return new Ai("auth","Firebase",r).create(e,{appName:n.name})}function Ds(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&at(n,"argument-error"),Xv(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function qd(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Jv.create(n,...e)}function F(n,e,...t){if(!n)throw qd(e,...t)}function Tn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw gc(e),new Error(e)}function un(n,e){n||Tn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function jd(){return Cm()==="http:"||Cm()==="https:"}function Cm(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jd()||Fv()||"connection"in navigator)?navigator.onLine:!0}function GC(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,t){this.shortDelay=e,this.longDelay=t,un(t>e,"Short delay should be less than long delay!"),this.isMobile=bS()||Fd()}get(){return KC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(n,e){un(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=new pa(3e4,6e4);function Je(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function tt(n,e,t,r,i={}){return ew(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=xs(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Zv.fetch()(tw(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function ew(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},HC),e);try{const i=new QC(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw mo(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw mo(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw mo(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw mo(n,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Xv(n,l,u);at(n,l)}}catch(i){if(i instanceof Pt)throw i;at(n,"network-request-failed",{message:String(i)})}}async function Xn(n,e,t,r,i={}){const s=await tt(n,e,t,r,i);return"mfaPendingCredential"in s&&at(n,"multi-factor-auth-required",{_serverResponse:s}),s}function tw(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?zd(n.config,i):`${n.config.apiScheme}://${i}`}class QC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(gt(this.auth,"network-request-failed")),WC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mo(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=gt(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YC(n,e){return tt(n,"POST","/v1/accounts:delete",e)}async function JC(n,e){return tt(n,"POST","/v1/accounts:update",e)}async function XC(n,e){return tt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ZC(n,e=!1){const t=re(n),r=await t.getIdToken(e),i=Au(r);F(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Eo(Dl(i.auth_time)),issuedAtTime:Eo(Dl(i.iat)),expirationTime:Eo(Dl(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Dl(n){return Number(n)*1e3}function Au(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return gc("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ov(t);return i?JSON.parse(i):(gc("Failed to decode base64 JWT payload"),null)}catch(i){return gc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function eA(n){const e=Au(n);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Pt&&tA(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function tA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Eo(this.lastLoginAt),this.creationTime=Eo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ko(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Wn(n,XC(t,{idToken:r}));F(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?sA(s.providerUserInfo):[],a=iA(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new nw(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function rA(n){const e=re(n);await Ko(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iA(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function sA(n){return n.map(e=>{var{providerId:t}=e,r=$d(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oA(n,e){const t=await ew(n,{},async()=>{const r=xs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=tw(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Zv.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):eA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await oA(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Go;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Go,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(n,e){F(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ui{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=$d(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new nw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Wn(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ZC(this,e)}reload(){return rA(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ui(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ko(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Wn(this,YC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,u,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,p=(a=t.tenantId)!==null&&a!==void 0?a:void 0,y=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,_=(u=t.createdAt)!==null&&u!==void 0?u:void 0,S=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:L,emailVerified:x,isAnonymous:le,providerData:N,stsTokenManager:be}=t;F(L&&be,e,"internal-error");const oe=Go.fromJSON(this.name,be);F(typeof L=="string",e,"internal-error"),ir(h,e.name),ir(d,e.name),F(typeof x=="boolean",e,"internal-error"),F(typeof le=="boolean",e,"internal-error"),ir(f,e.name),ir(m,e.name),ir(p,e.name),ir(y,e.name),ir(_,e.name),ir(S,e.name);const wt=new ui({uid:L,auth:e,email:d,emailVerified:x,displayName:h,isAnonymous:le,photoURL:m,phoneNumber:f,tenantId:p,stsTokenManager:oe,createdAt:_,lastLoginAt:S});return N&&Array.isArray(N)&&(wt.providerData=N.map(K=>Object.assign({},K))),y&&(wt._redirectEventId=y),wt}static async _fromIdTokenResponse(e,t,r=!1){const i=new Go;i.updateFromServerResponse(t);const s=new ui({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ko(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am=new Map;function Kt(n){un(n instanceof Function,"Expected a class definition");let e=Am.get(n);return e?(un(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Am.set(n,e),e)}/**
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
 */class rw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rw.type="NONE";const ls=rw;/**
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
 */function li(n,e,t){return`firebase:${n}:${e}:${t}`}class Zi{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=li(this.userKey,i.apiKey,s),this.fullPersistenceKey=li("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ui._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Zi(Kt(ls),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Kt(ls);const o=li(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=ui._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Zi(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Zi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ow(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(iw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(aw(e))return"Blackberry";if(cw(e))return"Webos";if(Kd(e))return"Safari";if((e.includes("chrome/")||sw(e))&&!e.includes("edge/"))return"Chrome";if(ma(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function iw(n=Be()){return/firefox\//i.test(n)}function Kd(n=Be()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sw(n=Be()){return/crios\//i.test(n)}function ow(n=Be()){return/iemobile/i.test(n)}function ma(n=Be()){return/android/i.test(n)}function aw(n=Be()){return/blackberry/i.test(n)}function cw(n=Be()){return/webos/i.test(n)}function Ps(n=Be()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function aA(n=Be()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function cA(n=Be()){var e;return Ps(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function uA(){return Uv()&&document.documentMode===10}function uw(n=Be()){return Ps(n)||ma(n)||cw(n)||aw(n)||/windows phone/i.test(n)||ow(n)}function lA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(n,e=[]){let t;switch(n){case"Browser":t=km(Be());break;case"Worker":t=`${km(Be())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Or}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hA(n){return(await tt(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function hw(n,e){return tt(n,"GET","/v2/recaptchaConfig",Je(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(n){return n!==void 0&&n.getResponse!==void 0}function Nm(n){return n!==void 0&&n.enterprise!==void 0}class dw{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Gd(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=gt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",dA().appendChild(r)})}function fw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const fA="https://www.google.com/recaptcha/enterprise.js?render=",pA="recaptcha-enterprise",mA="NO_RECAPTCHA";class pw{constructor(e){this.type=pA,this.auth=He(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{hw(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new dw(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Nm(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(mA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&Nm(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Gd(fA+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Er(n,e,t,r=!1){const i=new pw(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class gA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xm(this),this.idTokenSubscription=new xm(this),this.beforeStateQueue=new gA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Kt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Zi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ko(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?re(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Kt(e))})}async initializeRecaptchaConfig(){const e=await hw(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new dw(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new pw(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ai("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Kt(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await Zi.create(this,[Kt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&zC(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function He(n){return re(n)}class xm{constructor(e){this.auth=e,this.observer=null,this.addObserver=Vv(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(n,e){const t=Cu(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Lc(s,e??{}))return i;at(i,"already-initialized")}return t.initialize({options:e})}function wA(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Kt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function mw(n,e,t){const r=He(n);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=gw(e),{host:o,port:a}=_A(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||IA()}function gw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function _A(n){const e=gw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Dm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Dm(o)}}}function Dm(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function IA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,t){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yw(n,e){return tt(n,"POST","/v1/accounts:resetPassword",Je(n,e))}async function vw(n,e){return tt(n,"POST","/v1/accounts:update",e)}async function bA(n,e){return tt(n,"POST","/v1/accounts:update",Je(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pl(n,e){return Xn(n,"POST","/v1/accounts:signInWithPassword",Je(n,e))}async function ku(n,e){return tt(n,"POST","/v1/accounts:sendOobCode",Je(n,e))}async function EA(n,e){return ku(n,e)}async function Ol(n,e){return ku(n,e)}async function Ml(n,e){return ku(n,e)}async function TA(n,e){return ku(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SA(n,e){return Xn(n,"POST","/v1/accounts:signInWithEmailLink",Je(n,e))}async function CA(n,e){return Xn(n,"POST","/v1/accounts:signInWithEmailLink",Je(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho extends Os{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ho(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ho(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const i=await Er(e,r,"signInWithPassword");return Pl(e,i)}else return Pl(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Er(e,r,"signInWithPassword");return Pl(e,s)}else return Promise.reject(i)});case"emailLink":return SA(e,{email:this._email,oobCode:this._password});default:at(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return vw(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return CA(e,{idToken:t,email:this._email,oobCode:this._password});default:at(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kn(n,e){return Xn(n,"POST","/v1/accounts:signInWithIdp",Je(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA="http://localhost";class On extends Os{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new On(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):at("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=$d(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new On(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Kn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Kn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Kn(e,t)}buildRequest(){const e={requestUri:AA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=xs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kA(n,e){return tt(n,"POST","/v1/accounts:sendVerificationCode",Je(n,e))}async function RA(n,e){return Xn(n,"POST","/v1/accounts:signInWithPhoneNumber",Je(n,e))}async function NA(n,e){const t=await Xn(n,"POST","/v1/accounts:signInWithPhoneNumber",Je(n,e));if(t.temporaryProof)throw mo(n,"account-exists-with-different-credential",t);return t}const xA={USER_NOT_FOUND:"user-not-found"};async function DA(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Xn(n,"POST","/v1/accounts:signInWithPhoneNumber",Je(n,t),xA)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends Os{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new hi({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new hi({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return RA(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return NA(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return DA(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new hi({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OA(n){const e=Gi(po(n)).link,t=e?Gi(po(e)).deep_link_id:null,r=Gi(po(n)).deep_link_id;return(r?Gi(po(r)).link:null)||r||t||e||n}class Ru{constructor(e){var t,r,i,s,o,a;const c=Gi(po(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=PA((i=c.mode)!==null&&i!==void 0?i:null);F(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=OA(e);try{return new Ru(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.providerId=Mr.PROVIDER_ID}static credential(e,t){return Ho._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ru.parseLink(t);return F(r,"argument-error"),Ho._fromEmailAndCode(e,r.code,r.tenantId)}}Mr.PROVIDER_ID="password";Mr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ms extends Zn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class es extends Ms{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return F("providerId"in t&&"signInMethod"in t,"argument-error"),On._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return F(e.idToken||e.accessToken,"argument-error"),On._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return es.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return es.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new es(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Ms{constructor(){super("facebook.com")}static credential(e){return On._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends Ms{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return On._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return _n.credential(t,r)}catch{return null}}}_n.GOOGLE_SIGN_IN_METHOD="google.com";_n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Ms{constructor(){super("github.com")}static credential(e){return On._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.GITHUB_SIGN_IN_METHOD="github.com";In.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA="http://localhost";class hs extends Os{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Kn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Kn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Kn(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new hs(r,s)}static _create(e,t){return new hs(e,t)}buildRequest(){return{requestUri:MA,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA="saml.";class Vc extends Zn{constructor(e){F(e.startsWith(LA),"argument-error"),super(e)}static credentialFromResult(e){return Vc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Vc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=hs.fromJSON(e);return F(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return hs._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Ms{constructor(){super("twitter.com")}static credential(e,t){return On._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return bn.credential(t,r)}catch{return null}}}bn.TWITTER_SIGN_IN_METHOD="twitter.com";bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yc(n,e){return Xn(n,"POST","/v1/accounts:signUp",Je(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await ui._fromIdTokenResponse(e,r,i),o=Pm(r);return new tn({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Pm(r);return new tn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Pm(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FA(n){var e;const t=He(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new tn({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await yc(t,{returnSecureToken:!0}),i=await tn._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc extends Pt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Bc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Bc(e,t,r,i)}}function ww(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Bc._fromErrorAndOperation(n,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function UA(n,e){const t=re(n);await Nu(!0,t,e);const{providerUserInfo:r}=await JC(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=_w(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Hd(n,e,t=!1){const r=await Wn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return tn._forOperation(n,"link",r)}async function Nu(n,e,t){await Ko(e);const r=_w(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";F(r.has(t)===n,e.auth,i)}/**
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
 */async function Iw(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await Wn(n,ww(r,i,e,n),t);F(s.idToken,r,"internal-error");const o=Au(s.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(n.uid===a,r,"user-mismatch"),tn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&at(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bw(n,e,t=!1){const r="signIn",i=await ww(n,r,e),s=await tn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function xu(n,e){return bw(He(n),e)}async function Ew(n,e){const t=re(n);return await Nu(!1,t,e.providerId),Hd(t,e)}async function Tw(n,e){return Iw(re(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VA(n,e){return Xn(n,"POST","/v1/accounts:signInWithCustomToken",Je(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BA(n,e){const t=He(n),r=await VA(t,{token:e,returnSecureToken:!0}),i=await tn._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Wd._fromServerResponse(e,t):"totpInfo"in t?Qd._fromServerResponse(e,t):at(e,"internal-error")}}class Wd extends ga{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Wd(t)}}class Qd extends ga{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Qd(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(n,e,t){var r;F(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),F(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(F(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(F(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $A(n,e,t){var r;const i=He(n),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await Er(i,s,"getOobCode",!0);t&&ts(i,o,t),await Ol(i,o)}else t&&ts(i,s,t),await Ol(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await Er(i,s,"getOobCode",!0);t&&ts(i,a,t),await Ol(i,a)}else return Promise.reject(o)})}async function qA(n,e,t){await yw(re(n),{oobCode:e,newPassword:t})}async function jA(n,e){await bA(re(n),{oobCode:e})}async function Sw(n,e){const t=re(n),r=await yw(t,{oobCode:e}),i=r.requestType;switch(F(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":F(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":F(r.mfaInfo,t,"internal-error");default:F(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=ga._fromServerResponse(He(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function zA(n,e){const{data:t}=await Sw(re(n),e);return t.email}async function KA(n,e,t){var r;const i=He(n),s={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Er(i,s,"signUpPassword");o=yc(i,u)}else o=yc(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const l=await Er(i,s,"signUpPassword");return yc(i,l)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),c=await tn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function GA(n,e,t){return xu(re(n),Mr.credential(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HA(n,e,t){var r;const i=He(n),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,c){F(c.handleCodeInApp,i,"argument-error"),c&&ts(i,a,c)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await Er(i,s,"getOobCode",!0);o(a,t),await Ml(i,a)}else o(s,t),await Ml(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const c=await Er(i,s,"getOobCode",!0);o(c,t),await Ml(i,c)}else return Promise.reject(a)})}function WA(n,e){const t=Ru.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function QA(n,e,t){const r=re(n),i=Mr.credentialWithLink(e,t||zo());return F(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),xu(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YA(n,e){return tt(n,"POST","/v1/accounts:createAuthUri",Je(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JA(n,e){const t=jd()?zo():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await YA(re(n),r);return i||[]}async function XA(n,e){const t=re(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&ts(t.auth,i,e);const{email:s}=await EA(t.auth,i);s!==n.email&&await n.reload()}async function ZA(n,e,t){const r=re(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&ts(r.auth,s,t);const{email:o}=await TA(r.auth,s);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ek(n,e){return tt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tk(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=re(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Wn(r,ek(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function nk(n,e){return Cw(re(n),e,null)}function rk(n,e){return Cw(re(n),null,e)}async function Cw(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await Wn(n,vw(r,s));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function ik(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=Au(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new ns(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new sk(s,i);case"github.com":return new ok(s,i);case"google.com":return new ak(s,i);case"twitter.com":return new ck(s,i,n.screenName||null);case"custom":case"anonymous":return new ns(s,null);default:return new ns(s,r,i)}}class ns{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class Aw extends ns{constructor(e,t,r,i){super(e,t,r),this.username=i}}class sk extends ns{constructor(e,t){super(e,"facebook.com",t)}}class ok extends Aw{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class ak extends ns{constructor(e,t){super(e,"google.com",t)}}class ck extends Aw{constructor(e,t,r){super(e,"twitter.com",t,r)}}function uk(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:ik(t)}function lk(n,e,t,r){return re(n).onIdTokenChanged(e,t,r)}function hk(n,e,t){return re(n).beforeAuthStateChanged(e,t)}function dk(n,e,t,r){return re(n).onAuthStateChanged(e,t,r)}function fk(n){return re(n).signOut()}class ni{constructor(e,t,r){this.type=e,this.credential=t,this.auth=r}static _fromIdtoken(e,t){return new ni("enroll",e,t)}static _fromMfaPendingCredential(e){return new ni("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return ni._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return ni._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=He(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>ga._fromServerResponse(r,a));F(i.mfaPendingCredential,r,"internal-error");const o=ni._fromMfaPendingCredential(i.mfaPendingCredential);return new Yd(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const l=await tn._fromIdTokenResponse(r,t.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return F(t.user,r,"internal-error"),tn._forOperation(t.user,t.operationType,u);default:at(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function pk(n,e){var t;const r=re(n),i=e;return F(e.customData.operationType,r,"argument-error"),F((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),Yd._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(n,e){return tt(n,"POST","/v2/accounts/mfaEnrollment:start",Je(n,e))}function gk(n,e){return tt(n,"POST","/v2/accounts/mfaEnrollment:finalize",Je(n,e))}function yk(n,e){return tt(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Je(n,e))}class Jd{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>ga._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Jd(e)}async getSession(){return ni._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const r=e,i=await this.getSession(),s=await Wn(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Wn(this.user,yk(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Ll=new WeakMap;function vk(n){const e=re(n);return Ll.has(e)||Ll.set(e,Jd._fromUser(e)),Ll.get(e)}const $c="__sak";/**
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
 */class kw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem($c,"1"),this.storage.removeItem($c),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wk(){const n=Be();return Kd(n)||Ps(n)}const _k=1e3,Ik=10;class Rw extends kw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wk()&&lA(),this.fallbackToPolling=uw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);uA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ik):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},_k)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rw.type="LOCAL";const Du=Rw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw extends kw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Nw.type="SESSION";const Tr=Nw;/**
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
 */function bk(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Pu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Pu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,s)),c=await bk(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Ek{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=ya("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return window}function Tk(n){Ye().location.href=n}/**
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
 */function Xd(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function Sk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ck(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ak(){return Xd()?self:null}/**
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
 */const xw="firebaseLocalStorageDb",kk=1,qc="firebaseLocalStorage",Dw="fbase_key";class va{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ou(n,e){return n.transaction([qc],e?"readwrite":"readonly").objectStore(qc)}function Rk(){const n=indexedDB.deleteDatabase(xw);return new va(n).toPromise()}function bh(){const n=indexedDB.open(xw,kk);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(qc,{keyPath:Dw})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(qc)?e(r):(r.close(),await Rk(),e(await bh()))})})}async function Om(n,e,t){const r=Ou(n,!0).put({[Dw]:e,value:t});return new va(r).toPromise()}async function Nk(n,e){const t=Ou(n,!1).get(e),r=await new va(t).toPromise();return r===void 0?null:r.value}function Mm(n,e){const t=Ou(n,!0).delete(e);return new va(t).toPromise()}const xk=800,Dk=3;class Pw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bh(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Dk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pu._getInstance(Ak()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Sk(),!this.activeServiceWorker)return;this.sender=new Ek(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ck()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bh();return await Om(e,$c,"1"),await Mm(e,$c),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Om(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Nk(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Mm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ou(i,!1).getAll();return new va(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pw.type="LOCAL";const ds=Pw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(n,e){return tt(n,"POST","/v2/accounts/mfaSignIn:start",Je(n,e))}function Ok(n,e){return tt(n,"POST","/v2/accounts/mfaSignIn:finalize",Je(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=500,Lk=6e4,Qa=1e12;class Fk{constructor(e){this.auth=e,this.counter=Qa,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new Uk(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||Qa;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||Qa;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||Qa;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class Uk{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;F(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Vk(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},Lk)},Mk))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Vk(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=fw("rcb"),Bk=new pa(3e4,6e4),$k="https://www.google.com/recaptcha/api.js?";class qk{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ye().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return F(jk(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Rm(Ye().grecaptcha)?Promise.resolve(Ye().grecaptcha):new Promise((r,i)=>{const s=Ye().setTimeout(()=>{i(gt(e,"network-request-failed"))},Bk.get());Ye()[Fl]=()=>{Ye().clearTimeout(s),delete Ye()[Fl];const a=Ye().grecaptcha;if(!a||!Rm(a)){i(gt(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=t,r(a)};const o=`${$k}?${xs({onload:Fl,render:"explicit",hl:t})}`;Gd(o).catch(()=>{clearTimeout(s),i(gt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Ye().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function jk(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class zk{async load(e){return new Fk(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow="recaptcha",Kk={theme:"light",type:"image"};let Gk=class{constructor(e,t=Object.assign({},Kk),r){this.parameters=t,this.type=Ow,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=He(r),this.isInvisible=this.parameters.size==="invisible",F(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;F(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new zk:new qk,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){F(!this.parameters.sitekey,this.auth,"argument-error"),F(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),F(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=Ye()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){F(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){F(jd()&&!Xd(),this.auth,"internal-error"),await Hk(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await hA(this.auth);F(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return F(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function Hk(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=hi._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Wk(n,e,t){const r=He(n),i=await Mu(r,e,re(t));return new Zd(i,s=>xu(r,s))}async function Qk(n,e,t){const r=re(n);await Nu(!1,r,"phone");const i=await Mu(r.auth,e,re(t));return new Zd(i,s=>Ew(r,s))}async function Yk(n,e,t){const r=re(n),i=await Mu(r.auth,e,re(t));return new Zd(i,s=>Tw(r,s))}async function Mu(n,e,t){var r;const i=await t.verify();try{F(typeof i=="string",n,"argument-error"),F(t.type===Ow,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return F(o.type==="enroll",n,"internal-error"),(await mk(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{F(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return F(a,n,"missing-multi-factor-info"),(await Pk(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await kA(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function Jk(n,e){await Hd(re(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gi=class vc{constructor(e){this.providerId=vc.PROVIDER_ID,this.auth=He(e)}verifyPhoneNumber(e,t){return Mu(this.auth,e,re(t))}static credential(e,t){return hi._fromVerification(e,t)}static credentialFromResult(e){const t=e;return vc.credentialFromTaggedObject(t)}static credentialFromError(e){return vc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?hi._fromTokenResponse(t,r):null}};gi.PROVIDER_ID="phone";gi.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function ki(n,e){return e?Kt(e):(F(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ef extends Os{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Kn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Kn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Xk(n){return bw(n.auth,new ef(n),n.bypassAuthState)}function Zk(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),Iw(t,new ef(n),n.bypassAuthState)}async function eR(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),Hd(t,new ef(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xk;case"linkViaPopup":case"linkViaRedirect":return eR;case"reauthViaPopup":case"reauthViaRedirect":return Zk;default:at(this.auth,"internal-error")}}resolve(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=new pa(2e3,1e4);async function nR(n,e,t){const r=He(n);Ds(n,e,Zn);const i=ki(r,t);return new Vn(r,"signInViaPopup",e,i).executeNotNull()}async function rR(n,e,t){const r=re(n);Ds(r.auth,e,Zn);const i=ki(r.auth,t);return new Vn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function iR(n,e,t){const r=re(n);Ds(r.auth,e,Zn);const i=ki(r.auth,t);return new Vn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Vn extends Mw{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Vn.currentPopupAction&&Vn.currentPopupAction.cancel(),Vn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){un(this.filter.length===1,"Popup operations only handle one event");const e=ya();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tR.get())};e()}}Vn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR="pendingRedirect",To=new Map;class oR extends Mw{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=To.get(this.auth._key());if(!e){try{const r=await aR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}To.set(this.auth._key(),e)}return this.bypassAuthState||To.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aR(n,e){const t=Fw(e),r=Lw(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function tf(n,e){return Lw(n)._set(Fw(e),"true")}function cR(){To.clear()}function nf(n,e){To.set(n._key(),e)}function Lw(n){return Kt(n._redirectPersistence)}function Fw(n){return li(sR,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(n,e,t){return lR(n,e,t)}async function lR(n,e,t){const r=He(n);Ds(n,e,Zn),await r._initializationPromise;const i=ki(r,t);return await tf(i,r),i._openRedirect(r,e,"signInViaRedirect")}function hR(n,e,t){return dR(n,e,t)}async function dR(n,e,t){const r=re(n);Ds(r.auth,e,Zn),await r.auth._initializationPromise;const i=ki(r.auth,t);await tf(i,r.auth);const s=await Uw(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function fR(n,e,t){return pR(n,e,t)}async function pR(n,e,t){const r=re(n);Ds(r.auth,e,Zn),await r.auth._initializationPromise;const i=ki(r.auth,t);await Nu(!1,r,e.providerId),await tf(i,r.auth);const s=await Uw(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function mR(n,e){return await He(n)._initializationPromise,Lu(n,e,!1)}async function Lu(n,e,t=!1){const r=He(n),i=ki(r,e),o=await new oR(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Uw(n){const e=ya(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=10*60*1e3;class Vw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Bw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(gt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lm(e))}saveEventToCache(e){this.cachedEventUids.add(Lm(e)),this.lastProcessedEventTime=Date.now()}}function Lm(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Bw({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yR(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bw(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $w(n,e={}){return tt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wR=/^https?/;async function _R(n){if(n.config.emulator)return;const{authorizedDomains:e}=await $w(n);for(const t of e)try{if(IR(t))return}catch{}at(n,"unauthorized-domain")}function IR(n){const e=zo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!wR.test(t))return!1;if(vR.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const bR=new pa(3e4,6e4);function Fm(){const n=Ye().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ER(n){return new Promise((e,t)=>{var r,i,s;function o(){Fm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fm(),t(gt(n,"network-request-failed"))},timeout:bR.get()})}if(!((i=(r=Ye().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ye().gapi)===null||s===void 0)&&s.load)o();else{const a=fw("iframefcb");return Ye()[a]=()=>{gapi.load?o():t(gt(n,"network-request-failed"))},Gd(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw wc=null,e})}let wc=null;function TR(n){return wc=wc||ER(n),wc}/**
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
 */const SR=new pa(5e3,15e3),CR="__/auth/iframe",AR="emulator/auth/iframe",kR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NR(n){const e=n.config;F(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?zd(e,AR):`https://${n.config.authDomain}/${CR}`,r={apiKey:e.apiKey,appName:n.name,v:Or},i=RR.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${xs(r).slice(1)}`}async function xR(n){const e=await TR(n),t=Ye().gapi;return F(t,n,"internal-error"),e.open({where:document.body,url:NR(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=gt(n,"network-request-failed"),a=Ye().setTimeout(()=>{s(o)},SR.get());function c(){Ye().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const DR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PR=500,OR=600,MR="_blank",LR="http://localhost";class Um{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FR(n,e,t,r=PR,i=OR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},DR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Be().toLowerCase();t&&(a=sw(u)?MR:t),iw(u)&&(e=e||LR,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(cA(u)&&a!=="_self")return UR(e||"",a),new Um(null);const h=window.open(e||"",a,l);F(h,n,"popup-blocked");try{h.focus()}catch{}return new Um(h)}function UR(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const VR="__/auth/handler",BR="emulator/auth/handler",$R=encodeURIComponent("fac");async function Eh(n,e,t,r,i,s){F(n.config.authDomain,n,"auth-domain-config-required"),F(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Or,eventId:i};if(e instanceof Zn){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",RS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(s||{}))o[l]=h}if(e instanceof Ms){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await n._getAppCheckToken(),u=c?`#${$R}=${encodeURIComponent(c)}`:"";return`${qR(n)}?${xs(a).slice(1)}${u}`}function qR({config:n}){return n.emulator?zd(n,BR):`https://${n.authDomain}/${VR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul="webStorageSupport";class jR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tr,this._completeRedirectFn=Lu,this._overrideRedirectResult=nf}async _openPopup(e,t,r,i){var s;un((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Eh(e,t,r,zo(),i);return FR(e,o,ya())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Eh(e,t,r,zo(),i);return Tk(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(un(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await xR(e),r=new Vw(e);return t.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ul,{type:Ul},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ul];o!==void 0&&t(!!o),at(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=_R(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return uw()||Kd()||Ps()}}const qw=jR;class zR{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Tn("unexpected MultiFactorSessionType")}}}class rf extends zR{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new rf(e)}_finalizeEnroll(e,t,r){return gk(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Ok(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class jw{constructor(){}static assertion(e){return rf._fromCredential(e)}}jw.FACTOR_ID="phone";var Vm="@firebase/auth",Bm="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function HR(n){br(new Pn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lw(n)},u=new yA(r,i,s,c);return wA(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),br(new Pn("auth-internal",e=>{const t=He(e.getProvider("auth").getImmediate());return(r=>new KR(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(Vm,Bm,GR(n)),Rn(Vm,Bm,"esm2017")}/**
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
 */const WR=5*60,QR=Lv("authIdTokenMaxAge")||WR;let $m=null;const YR=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>QR)return;const i=t==null?void 0:t.token;$m!==i&&($m=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function zw(n=zv()){const e=Cu(n,"auth");if(e.isInitialized())return e.getImmediate();const t=vA(n,{popupRedirectResolver:qw,persistence:[ds,Du,Tr]}),r=Lv("authTokenSyncURL");if(r){const s=YR(r);hk(t,s,()=>s(t.currentUser)),lk(t,o=>s(o))}const i=wS("auth");return i&&mw(t,`http://${i}`),t}HR("Browser");/*!
  * vue-router v4.2.0
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const qi=typeof window<"u";function JR(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Se=Object.assign;function Vl(n,e){const t={};for(const r in e){const i=e[r];t[r]=ln(i)?i.map(n):n(i)}return t}const So=()=>{},ln=Array.isArray,XR=/\/$/,ZR=n=>n.replace(XR,"");function Bl(n,e,t="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=n(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=r1(r??e,t),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function e1(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function qm(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function t1(n,e,t){const r=e.matched.length-1,i=t.matched.length-1;return r>-1&&r===i&&fs(e.matched[r],t.matched[i])&&Kw(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function fs(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Kw(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!n1(n[t],e[t]))return!1;return!0}function n1(n,e){return ln(n)?jm(n,e):ln(e)?jm(e,n):n===e}function jm(n,e){return ln(e)?n.length===e.length&&n.every((t,r)=>t===e[r]):n.length===1&&n[0]===e}function r1(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),r=n.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=t.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Wo;(function(n){n.pop="pop",n.push="push"})(Wo||(Wo={}));var Co;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Co||(Co={}));function i1(n){if(!n)if(qi){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),ZR(n)}const s1=/^[^#]+#/;function o1(n,e){return n.replace(s1,"#")+e}function a1(n,e){const t=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:e.behavior,left:r.left-t.left-(e.left||0),top:r.top-t.top-(e.top||0)}}const Fu=()=>({left:window.pageXOffset,top:window.pageYOffset});function c1(n){let e;if("el"in n){const t=n.el,r=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;e=a1(i,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function zm(n,e){return(history.state?history.state.position-e:-1)+n}const Th=new Map;function u1(n,e){Th.set(n,e)}function l1(n){const e=Th.get(n);return Th.delete(n),e}let h1=()=>location.protocol+"//"+location.host;function Gw(n,e){const{pathname:t,search:r,hash:i}=e,s=n.indexOf("#");if(s>-1){let a=i.includes(n.slice(s))?n.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),qm(c,"")}return qm(t,n)+r+i}function d1(n,e,t,r){let i=[],s=[],o=null;const a=({state:d})=>{const f=Gw(n,location),m=t.value,p=e.value;let y=0;if(d){if(t.value=f,e.value=d,o&&o===m){o=null;return}y=p?d.position-p.position:0}else r(f);i.forEach(_=>{_(t.value,m,{delta:y,type:Wo.pop,direction:y?y>0?Co.forward:Co.back:Co.unknown})})};function c(){o=t.value}function u(d){i.push(d);const f=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return s.push(f),f}function l(){const{history:d}=window;d.state&&d.replaceState(Se({},d.state,{scroll:Fu()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:c,listen:u,destroy:h}}function Km(n,e,t,r=!1,i=!1){return{back:n,current:e,forward:t,replaced:r,position:window.history.length,scroll:i?Fu():null}}function f1(n){const{history:e,location:t}=window,r={value:Gw(n,t)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,u,l){const h=n.indexOf("#"),d=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+c:h1()+n+c;try{e[l?"replaceState":"pushState"](u,"",d),i.value=u}catch(f){console.error(f),t[l?"replace":"assign"](d)}}function o(c,u){const l=Se({},e.state,Km(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});s(c,l,!0),r.value=c}function a(c,u){const l=Se({},i.value,e.state,{forward:c,scroll:Fu()});s(l.current,l,!0);const h=Se({},Km(r.value,c,null),{position:l.position+1},u);s(c,h,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function p1(n){n=i1(n);const e=f1(n),t=d1(n,e.state,e.location,e.replace);function r(s,o=!0){o||t.pauseListeners(),history.go(s)}const i=Se({location:"",base:n,go:r,createHref:o1.bind(null,n)},e,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function m1(n){return typeof n=="string"||n&&typeof n=="object"}function Hw(n){return typeof n=="string"||typeof n=="symbol"}const sr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ww=Symbol("");var Gm;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Gm||(Gm={}));function ps(n,e){return Se(new Error,{type:n,[Ww]:!0},e)}function Fn(n,e){return n instanceof Error&&Ww in n&&(e==null||!!(n.type&e))}const Hm="[^/]+?",g1={sensitive:!1,strict:!1,start:!0,end:!0},y1=/[.+*?^${}()[\]/\\]/g;function v1(n,e){const t=Se({},g1,e),r=[];let i=t.start?"^":"";const s=[];for(const u of n){const l=u.length?[]:[90];t.strict&&!u.length&&(i+="/");for(let h=0;h<u.length;h++){const d=u[h];let f=40+(t.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(y1,"\\$&"),f+=40;else if(d.type===1){const{value:m,repeatable:p,optional:y,regexp:_}=d;s.push({name:m,repeatable:p,optional:y});const S=_||Hm;if(S!==Hm){f+=10;try{new RegExp(`(${S})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${m}" (${S}): `+x.message)}}let L=p?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;h||(L=y&&u.length<2?`(?:/${L})`:"/"+L),y&&(L+="?"),i+=L,f+=20,y&&(f+=-8),p&&(f+=-20),S===".*"&&(f+=-50)}l.push(f)}r.push(l)}if(t.strict&&t.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}t.strict||(i+="/?"),t.end?i+="$":t.strict&&(i+="(?:/|$)");const o=new RegExp(i,t.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const f=l[d]||"",m=s[d-1];h[m.name]=f&&m.repeatable?f.split("/"):f}return h}function c(u){let l="",h=!1;for(const d of n){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const f of d)if(f.type===0)l+=f.value;else if(f.type===1){const{value:m,repeatable:p,optional:y}=f,_=m in u?u[m]:"";if(ln(_)&&!p)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const S=ln(_)?_.join("/"):_;if(!S)if(y)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);l+=S}}return l||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function w1(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=e[t]-n[t];if(r)return r;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function _1(n,e){let t=0;const r=n.score,i=e.score;for(;t<r.length&&t<i.length;){const s=w1(r[t],i[t]);if(s)return s;t++}if(Math.abs(i.length-r.length)===1){if(Wm(r))return 1;if(Wm(i))return-1}return i.length-r.length}function Wm(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const I1={type:0,value:""},b1=/[a-zA-Z0-9_]/;function E1(n){if(!n)return[[]];if(n==="/")return[[I1]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(f){throw new Error(`ERR (${t})/"${u}": ${f}`)}let t=0,r=t;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,u="",l="";function h(){u&&(t===0?s.push({type:0,value:u}):t===1||t===2||t===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),t=1):d();break;case 4:d(),t=r;break;case 1:c==="("?t=2:b1.test(c)?d():(h(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:t=3:l+=c;break;case 3:h(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function T1(n,e,t){const r=v1(E1(n.path),t),i=Se(r,{record:n,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function S1(n,e){const t=[],r=new Map;e=Jm({strict:!1,end:!0,sensitive:!1},e);function i(l){return r.get(l)}function s(l,h,d){const f=!d,m=C1(l);m.aliasOf=d&&d.record;const p=Jm(e,l),y=[m];if("alias"in l){const L=typeof l.alias=="string"?[l.alias]:l.alias;for(const x of L)y.push(Se({},m,{components:d?d.record.components:m.components,path:x,aliasOf:d?d.record:m}))}let _,S;for(const L of y){const{path:x}=L;if(h&&x[0]!=="/"){const le=h.record.path,N=le[le.length-1]==="/"?"":"/";L.path=h.record.path+(x&&N+x)}if(_=T1(L,h,p),d?d.alias.push(_):(S=S||_,S!==_&&S.alias.push(_),f&&l.name&&!Ym(_)&&o(l.name)),m.children){const le=m.children;for(let N=0;N<le.length;N++)s(le[N],_,d&&d.children[N])}d=d||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&c(_)}return S?()=>{o(S)}:So}function o(l){if(Hw(l)){const h=r.get(l);h&&(r.delete(l),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(l);h>-1&&(t.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return t}function c(l){let h=0;for(;h<t.length&&_1(l,t[h])>=0&&(l.record.path!==t[h].record.path||!Qw(l,t[h]));)h++;t.splice(h,0,l),l.record.name&&!Ym(l)&&r.set(l.record.name,l)}function u(l,h){let d,f={},m,p;if("name"in l&&l.name){if(d=r.get(l.name),!d)throw ps(1,{location:l});p=d.record.name,f=Se(Qm(h.params,d.keys.filter(S=>!S.optional).map(S=>S.name)),l.params&&Qm(l.params,d.keys.map(S=>S.name))),m=d.stringify(f)}else if("path"in l)m=l.path,d=t.find(S=>S.re.test(m)),d&&(f=d.parse(m),p=d.record.name);else{if(d=h.name?r.get(h.name):t.find(S=>S.re.test(h.path)),!d)throw ps(1,{location:l,currentLocation:h});p=d.record.name,f=Se({},h.params,l.params),m=d.stringify(f)}const y=[];let _=d;for(;_;)y.unshift(_.record),_=_.parent;return{name:p,path:m,params:f,matched:y,meta:k1(y)}}return n.forEach(l=>s(l)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Qm(n,e){const t={};for(const r of e)r in n&&(t[r]=n[r]);return t}function C1(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:A1(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function A1(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const r in n.components)e[r]=typeof t=="boolean"?t:t[r];return e}function Ym(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function k1(n){return n.reduce((e,t)=>Se(e,t.meta),{})}function Jm(n,e){const t={};for(const r in n)t[r]=r in e?e[r]:n[r];return t}function Qw(n,e){return e.children.some(t=>t===n||Qw(n,t))}const Yw=/#/g,R1=/&/g,N1=/\//g,x1=/=/g,D1=/\?/g,Jw=/\+/g,P1=/%5B/g,O1=/%5D/g,Xw=/%5E/g,M1=/%60/g,Zw=/%7B/g,L1=/%7C/g,e_=/%7D/g,F1=/%20/g;function sf(n){return encodeURI(""+n).replace(L1,"|").replace(P1,"[").replace(O1,"]")}function U1(n){return sf(n).replace(Zw,"{").replace(e_,"}").replace(Xw,"^")}function Sh(n){return sf(n).replace(Jw,"%2B").replace(F1,"+").replace(Yw,"%23").replace(R1,"%26").replace(M1,"`").replace(Zw,"{").replace(e_,"}").replace(Xw,"^")}function V1(n){return Sh(n).replace(x1,"%3D")}function B1(n){return sf(n).replace(Yw,"%23").replace(D1,"%3F")}function $1(n){return n==null?"":B1(n).replace(N1,"%2F")}function jc(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function q1(n){const e={};if(n===""||n==="?")return e;const r=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Jw," "),o=s.indexOf("="),a=jc(o<0?s:s.slice(0,o)),c=o<0?null:jc(s.slice(o+1));if(a in e){let u=e[a];ln(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Xm(n){let e="";for(let t in n){const r=n[t];if(t=V1(t),r==null){r!==void 0&&(e+=(e.length?"&":"")+t);continue}(ln(r)?r.map(s=>s&&Sh(s)):[r&&Sh(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function j1(n){const e={};for(const t in n){const r=n[t];r!==void 0&&(e[t]=ln(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const z1=Symbol(""),Zm=Symbol(""),Uu=Symbol(""),t_=Symbol(""),Ch=Symbol("");function Zs(){let n=[];function e(r){return n.push(r),()=>{const i=n.indexOf(r);i>-1&&n.splice(i,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function hr(n,e,t,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ps(4,{from:t,to:e})):h instanceof Error?a(h):m1(h)?a(ps(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},u=n.call(r&&r.instances[i],e,t,c);let l=Promise.resolve(u);n.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function $l(n,e,t,r){const i=[];for(const s of n)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(K1(a)){const u=(a.__vccOpts||a)[e];u&&i.push(hr(u,t,r,s,o))}else{let c=a();i.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const l=JR(u)?u.default:u;s.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&hr(d,t,r,s,o)()}))}}return i}function K1(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function eg(n){const e=kn(Uu),t=kn(t_),r=Jt(()=>e.resolve(Ji(n.to))),i=Jt(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],h=t.matched;if(!l||!h.length)return-1;const d=h.findIndex(fs.bind(null,l));if(d>-1)return d;const f=tg(c[u-2]);return u>1&&tg(l)===f&&h[h.length-1].path!==f?h.findIndex(fs.bind(null,c[u-2])):d}),s=Jt(()=>i.value>-1&&Q1(t.params,r.value.params)),o=Jt(()=>i.value>-1&&i.value===t.matched.length-1&&Kw(t.params,r.value.params));function a(c={}){return W1(c)?e[Ji(n.replace)?"replace":"push"](Ji(n.to)).catch(So):Promise.resolve()}return{route:r,href:Jt(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const G1=dv({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:eg,setup(n,{slots:e}){const t=fa(eg(n)),{options:r}=kn(Uu),i=Jt(()=>({[ng(n.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[ng(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:xv("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},s)}}}),H1=G1;function W1(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Q1(n,e){for(const t in e){const r=e[t],i=n[t];if(typeof r=="string"){if(r!==i)return!1}else if(!ln(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function tg(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const ng=(n,e,t)=>n??e??t,Y1=dv({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const r=kn(Ch),i=Jt(()=>n.route||r.value),s=kn(Zm,0),o=Jt(()=>{let u=Ji(s);const{matched:l}=i.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=Jt(()=>i.value.matched[o.value]);fc(Zm,Jt(()=>o.value+1)),fc(z1,a),fc(Ch,i);const c=ev();return hc(()=>[c.value,a.value,n.name],([u,l,h],[d,f,m])=>{l&&(l.instances[h]=u,f&&f!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),u&&l&&(!f||!fs(l,f)||!d)&&(l.enterCallbacks[h]||[]).forEach(p=>p(u))},{flush:"post"}),()=>{const u=i.value,l=n.name,h=a.value,d=h&&h.components[l];if(!d)return rg(t.default,{Component:d,route:u});const f=h.props[l],m=f?f===!0?u.params:typeof f=="function"?f(u):f:null,y=xv(d,Se({},m,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return rg(t.default,{Component:y,route:u})||y}}});function rg(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const J1=Y1;function X1(n){const e=S1(n.routes,n),t=n.parseQuery||q1,r=n.stringifyQuery||Xm,i=n.history,s=Zs(),o=Zs(),a=Zs(),c=R0(sr);let u=sr;qi&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Vl.bind(null,A=>""+A),h=Vl.bind(null,$1),d=Vl.bind(null,jc);function f(A,G){let V,Q;return Hw(A)?(V=e.getRecordMatcher(A),Q=G):Q=A,e.addRoute(Q,V)}function m(A){const G=e.getRecordMatcher(A);G&&e.removeRoute(G)}function p(){return e.getRoutes().map(A=>A.record)}function y(A){return!!e.getRecordMatcher(A)}function _(A,G){if(G=Se({},G||c.value),typeof A=="string"){const I=Bl(t,A,G.path),C=e.resolve({path:I.path},G),k=i.createHref(I.fullPath);return Se(I,C,{params:d(C.params),hash:jc(I.hash),redirectedFrom:void 0,href:k})}let V;if("path"in A)V=Se({},A,{path:Bl(t,A.path,G.path).path});else{const I=Se({},A.params);for(const C in I)I[C]==null&&delete I[C];V=Se({},A,{params:h(I)}),G.params=h(G.params)}const Q=e.resolve(V,G),se=A.hash||"";Q.params=l(d(Q.params));const g=e1(r,Se({},A,{hash:U1(se),path:Q.path})),v=i.createHref(g);return Se({fullPath:g,hash:se,query:r===Xm?j1(A.query):A.query||{}},Q,{redirectedFrom:void 0,href:v})}function S(A){return typeof A=="string"?Bl(t,A,c.value.path):Se({},A)}function L(A,G){if(u!==A)return ps(8,{from:G,to:A})}function x(A){return be(A)}function le(A){return x(Se(S(A),{replace:!0}))}function N(A){const G=A.matched[A.matched.length-1];if(G&&G.redirect){const{redirect:V}=G;let Q=typeof V=="function"?V(A):V;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=S(Q):{path:Q},Q.params={}),Se({query:A.query,hash:A.hash,params:"path"in Q?{}:A.params},Q)}}function be(A,G){const V=u=_(A),Q=c.value,se=A.state,g=A.force,v=A.replace===!0,I=N(V);if(I)return be(Se(S(I),{state:typeof I=="object"?Se({},se,I.state):se,force:g,replace:v}),G||V);const C=V;C.redirectedFrom=G;let k;return!g&&t1(r,Q,V)&&(k=ps(16,{to:C,from:Q}),nt(Q,Q,!0,!1)),(k?Promise.resolve(k):K(C,Q)).catch(O=>Fn(O)?Fn(O,2)?O:kt(O):ie(O,C,Q)).then(O=>{if(O){if(Fn(O,2))return be(Se({replace:v},S(O.to),{state:typeof O.to=="object"?Se({},se,O.to.state):se,force:g}),G||C)}else O=D(C,Q,!0,v,se);return w(C,Q,O),O})}function oe(A,G){const V=L(A,G);return V?Promise.reject(V):Promise.resolve()}function wt(A){const G=Qt.values().next().value;return G&&typeof G.runWithContext=="function"?G.runWithContext(A):A()}function K(A,G){let V;const[Q,se,g]=Z1(A,G);V=$l(Q.reverse(),"beforeRouteLeave",A,G);for(const I of Q)I.leaveGuards.forEach(C=>{V.push(hr(C,A,G))});const v=oe.bind(null,A,G);return V.push(v),Re(V).then(()=>{V=[];for(const I of s.list())V.push(hr(I,A,G));return V.push(v),Re(V)}).then(()=>{V=$l(se,"beforeRouteUpdate",A,G);for(const I of se)I.updateGuards.forEach(C=>{V.push(hr(C,A,G))});return V.push(v),Re(V)}).then(()=>{V=[];for(const I of A.matched)if(I.beforeEnter&&!G.matched.includes(I))if(ln(I.beforeEnter))for(const C of I.beforeEnter)V.push(hr(C,A,G));else V.push(hr(I.beforeEnter,A,G));return V.push(v),Re(V)}).then(()=>(A.matched.forEach(I=>I.enterCallbacks={}),V=$l(g,"beforeRouteEnter",A,G),V.push(v),Re(V))).then(()=>{V=[];for(const I of o.list())V.push(hr(I,A,G));return V.push(v),Re(V)}).catch(I=>Fn(I,8)?I:Promise.reject(I))}function w(A,G,V){for(const Q of a.list())wt(()=>Q(A,G,V))}function D(A,G,V,Q,se){const g=L(A,G);if(g)return g;const v=G===sr,I=qi?history.state:{};V&&(Q||v?i.replace(A.fullPath,Se({scroll:v&&I&&I.scroll},se)):i.push(A.fullPath,se)),c.value=A,nt(A,G,V,v),kt()}let b;function B(){b||(b=i.listen((A,G,V)=>{if(!_t.listening)return;const Q=_(A),se=N(Q);if(se){be(Se(se,{replace:!0}),Q).catch(So);return}u=Q;const g=c.value;qi&&u1(zm(g.fullPath,V.delta),Fu()),K(Q,g).catch(v=>Fn(v,12)?v:Fn(v,2)?(be(v.to,Q).then(I=>{Fn(I,20)&&!V.delta&&V.type===Wo.pop&&i.go(-1,!1)}).catch(So),Promise.reject()):(V.delta&&i.go(-V.delta,!1),ie(v,Q,g))).then(v=>{v=v||D(Q,g,!1),v&&(V.delta&&!Fn(v,8)?i.go(-V.delta,!1):V.type===Wo.pop&&Fn(v,20)&&i.go(-1,!1)),w(Q,g,v)}).catch(So)}))}let Z=Zs(),Y=Zs(),he;function ie(A,G,V){kt(A);const Q=Y.list();return Q.length?Q.forEach(se=>se(A,G,V)):console.error(A),Promise.reject(A)}function Mt(){return he&&c.value!==sr?Promise.resolve():new Promise((A,G)=>{Z.add([A,G])})}function kt(A){return he||(he=!A,B(),Z.list().forEach(([G,V])=>A?V(A):G()),Z.reset()),A}function nt(A,G,V,Q){const{scrollBehavior:se}=n;if(!qi||!se)return Promise.resolve();const g=!V&&l1(zm(A.fullPath,0))||(Q||!V)&&history.state&&history.state.scroll||null;return iv().then(()=>se(A,G,g)).then(v=>v&&c1(v)).catch(v=>ie(v,A,G))}const We=A=>i.go(A);let Wt;const Qt=new Set,_t={currentRoute:c,listening:!0,addRoute:f,removeRoute:m,hasRoute:y,getRoutes:p,resolve:_,options:n,push:x,replace:le,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Y.add,isReady:Mt,install(A){const G=this;A.component("RouterLink",H1),A.component("RouterView",J1),A.config.globalProperties.$router=G,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>Ji(c)}),qi&&!Wt&&c.value===sr&&(Wt=!0,x(i.location).catch(se=>{}));const V={};for(const se in sr)V[se]=Jt(()=>c.value[se]);A.provide(Uu,G),A.provide(t_,fa(V)),A.provide(Ch,c);const Q=A.unmount;Qt.add(A),A.unmount=function(){Qt.delete(A),Qt.size<1&&(u=sr,b&&b(),b=null,c.value=sr,Wt=!1,he=!1),Q()}}};function Re(A){return A.reduce((G,V)=>G.then(()=>wt(V)),Promise.resolve())}return _t}function Z1(n,e){const t=[],r=[],i=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(u=>fs(u,a))?r.push(a):t.push(a));const c=n.matched[o];c&&(e.matched.find(u=>fs(u,c))||i.push(c))}return[t,r,i]}function eN(){return kn(Uu)}const tN={class:"navbar"},nN={class:"navImg"},rN=Hn("img",{src:lS},null,-1),iN={class:"navItem"},sN=Hn("a",{href:"/ticharlez34/#stream"},"Stream",-1),oN=Hn("p",{hidden:"",id:"character2"},null,-1),aN={__name:"NavBar",setup(n){const e=eN(),t=ev(!1);let r;mv(()=>{r=zw(),dk(r,s=>{s?(t.value=!0,document.getElementById("login").style.display="none",document.getElementById("character2").innerHTML=s.email):(t.value=!1,document.getElementById("login").style.display="initial")})});const i=()=>{fk(r).then(()=>{e.push("/ticharlez34/")})};return(s,o)=>{const a=vv("router-link");return Pc(),mh("nav",tN,[Hn("div",nN,[Xe(a,{to:"/ticharlez34/"},{default:lc(()=>[rN]),_:1})]),Hn("div",iN,[sN,Xe(a,{to:"/ticharlez34/twitch"},{default:lc(()=>[yh("Personnage")]),_:1}),Xe(a,{id:"login",to:"/ticharlez34/login"},{default:lc(()=>[yh("LogIn")]),_:1}),t.value?(Pc(),mh("a",{key:0,href:"#",onClick:i},"Sign out")):AT("",!0),oN])])}}},cN={class:"wrapper"},uN={__name:"App",setup(n){return(e,t)=>{const r=vv("router-view");return Pc(),mh(gn,null,[Hn("header",null,[Hn("div",cN,[Xe(aN)])]),Xe(r)],64)}}},lN="modulepreload",hN=function(n){return"/ticharlez34/"+n},ig={},eo=function(e,t,r){if(!t||t.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=hN(s),s in ig)return;ig[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let l=i.length-1;l>=0;l--){const h=i[l];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":lN,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((l,h)=>{u.addEventListener("load",l),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},dN=[{path:"/ticharlez34/",name:"home",component:()=>eo(()=>import("./home-57ec9153.js"),["assets/home-57ec9153.js","assets/_plugin-vue_export-helper-c27b6911.js"])},{path:"/ticharlez34/player",name:"player",component:()=>eo(()=>import("./player-586c040e.js"),["assets/player-586c040e.js","assets/_plugin-vue_export-helper-c27b6911.js"])},{path:"/ticharlez34/createAccount/",name:"createAccount",component:()=>eo(()=>import("./aboutLayout-1eab15ba.js"),[])},{path:"/ticharlez34/login/",name:"login",component:()=>eo(()=>import("./login-9d93d896.js"),[])},{path:"/ticharlez34/twitch/",name:"twitch",component:()=>eo(()=>import("./twitch-1f28f1e1.js"),["assets/twitch-1f28f1e1.js","assets/_plugin-vue_export-helper-c27b6911.js"])}],fN=X1({history:p1(),routes:dN});/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e,t){this._delegate=e,this.firebase=t,Fc(e,new Pn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Kv(this._delegate)))}_getService(e,t=_r){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=_r){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Fc(this._delegate,e)}_addOrOverwriteComponent(e){jv(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const mN={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},sg=new Ai("app-compat","Firebase",mN);/**
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
 */function gN(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:Rn,setLogLevel:Hv,onLog:Gv,apps:null,SDK_VERSION:Or,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:BC}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||_r,!ym(e,u))throw sg.create("no-app",{appName:u});return e[u]}i.App=n;function s(u,l={}){const h=Bd(u,l);if(ym(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(br(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw sg.create("invalid-app-argument",{appName:l});return f[h]()};u.serviceProps!==void 0&&Mc(d,u.serviceProps),t[h]=d,n.prototype[h]=function(...f){return this._getService.bind(this,l).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?t[h]:null}function c(u,l){return l==="serverAuth"?null:l}return t}/**
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
 */function n_(){const n=gN(pN);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:n_,extendNamespace:e,createSubscribe:Vv,ErrorFactory:Ai,deepExtend:Mc});function e(t){Mc(n,t)}return n}const yN=n_();/**
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
 */const og=new Su("@firebase/app-compat"),vN="@firebase/app-compat",wN="0.2.10";/**
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
 */function _N(n){Rn(vN,wN,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(ES()&&self.firebase!==void 0){og.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&og.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Ls=yN;_N();var IN="firebase",bN="9.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ls.registerVersion(IN,bN,"app-compat");var EN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},H,of=of||{},ue=EN||self;function zc(){}function Vu(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function wa(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function TN(n){return Object.prototype.hasOwnProperty.call(n,ql)&&n[ql]||(n[ql]=++SN)}var ql="closure_uid_"+(1e9*Math.random()>>>0),SN=0;function CN(n,e,t){return n.call.apply(n.bind,arguments)}function AN(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function Ct(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ct=CN:Ct=AN,Ct.apply(null,arguments)}function Ya(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function ut(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Lr(){this.s=this.s,this.o=this.o}var kN=0;Lr.prototype.s=!1;Lr.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),kN!=0)&&TN(this)};Lr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const r_=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function af(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function ag(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(Vu(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function At(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}At.prototype.h=function(){this.defaultPrevented=!0};var RN=function(){if(!ue.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{ue.addEventListener("test",zc,e),ue.removeEventListener("test",zc,e)}catch{}return n}();function Kc(n){return/^[\s\xa0]*$/.test(n)}var cg=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function jl(n,e){return n<e?-1:n>e?1:0}function Bu(){var n=ue.navigator;return n&&(n=n.userAgent)?n:""}function En(n){return Bu().indexOf(n)!=-1}function cf(n){return cf[" "](n),n}cf[" "]=zc;function i_(n,e,t){return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var NN=En("Opera"),ms=En("Trident")||En("MSIE"),s_=En("Edge"),Ah=s_||ms,o_=En("Gecko")&&!(Bu().toLowerCase().indexOf("webkit")!=-1&&!En("Edge"))&&!(En("Trident")||En("MSIE"))&&!En("Edge"),xN=Bu().toLowerCase().indexOf("webkit")!=-1&&!En("Edge");function a_(){var n=ue.document;return n?n.documentMode:void 0}var Gc;e:{var zl="",Kl=function(){var n=Bu();if(o_)return/rv:([^\);]+)(\)|;)/.exec(n);if(s_)return/Edge\/([\d\.]+)/.exec(n);if(ms)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(xN)return/WebKit\/(\S+)/.exec(n);if(NN)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Kl&&(zl=Kl?Kl[1]:""),ms){var Gl=a_();if(Gl!=null&&Gl>parseFloat(zl)){Gc=String(Gl);break e}}Gc=zl}var DN={};function PN(){return i_(DN,9,function(){let n=0;const e=cg(String(Gc)).split("."),t=cg("9").split("."),r=Math.max(e.length,t.length);for(let o=0;n==0&&o<r;o++){var i=e[o]||"",s=t[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;n=jl(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||jl(i[2].length==0,s[2].length==0)||jl(i[2],s[2]),i=i[3],s=s[3]}while(n==0)}return 0<=n})}var kh;if(ue.document&&ms){var ug=a_();kh=ug||parseInt(Gc,10)||void 0}else kh=void 0;var ON=kh;function Qo(n,e){if(At.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(o_){e:{try{cf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:MN[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Qo.$.h.call(this)}}ut(Qo,At);var MN={2:"touch",3:"pen",4:"mouse"};Qo.prototype.h=function(){Qo.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var _a="closure_listenable_"+(1e6*Math.random()|0),LN=0;function FN(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=i,this.key=++LN,this.fa=this.ia=!1}function $u(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function uf(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function c_(n){const e={};for(const t in n)e[t]=n[t];return e}const lg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function u_(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<lg.length;s++)t=lg[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function qu(n){this.src=n,this.g={},this.h=0}qu.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=Nh(n,e,r,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new FN(e,this.src,s,!!r,i),e.ia=t,n.push(e)),e};function Rh(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=r_(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&($u(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Nh(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==r)return i}return-1}var lf="closure_lm_"+(1e6*Math.random()|0),Hl={};function l_(n,e,t,r,i){if(r&&r.once)return d_(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)l_(n,e[s],t,r,i);return null}return t=ff(t),n&&n[_a]?n.O(e,t,wa(r)?!!r.capture:!!r,i):h_(n,e,t,!1,r,i)}function h_(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=wa(i)?!!i.capture:!!i,a=df(n);if(a||(n[lf]=a=new qu(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=UN(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)RN||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(p_(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function UN(){function n(t){return e.call(n.src,n.listener,t)}const e=VN;return n}function d_(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)d_(n,e[s],t,r,i);return null}return t=ff(t),n&&n[_a]?n.P(e,t,wa(r)?!!r.capture:!!r,i):h_(n,e,t,!0,r,i)}function f_(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)f_(n,e[s],t,r,i);else r=wa(r)?!!r.capture:!!r,t=ff(t),n&&n[_a]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=Nh(s,t,r,i),-1<t&&($u(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=df(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Nh(e,t,r,i)),(t=-1<n?e[n]:null)&&hf(t))}function hf(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[_a])Rh(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(p_(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=df(e))?(Rh(t,n),t.h==0&&(t.src=null,e[lf]=null)):$u(n)}}}function p_(n){return n in Hl?Hl[n]:Hl[n]="on"+n}function VN(n,e){if(n.fa)n=!0;else{e=new Qo(e,this);var t=n.listener,r=n.la||n.src;n.ia&&hf(n),n=t.call(r,e)}return n}function df(n){return n=n[lf],n instanceof qu?n:null}var Wl="__closure_events_fn_"+(1e9*Math.random()>>>0);function ff(n){return typeof n=="function"?n:(n[Wl]||(n[Wl]=function(e){return n.handleEvent(e)}),n[Wl])}function ct(){Lr.call(this),this.i=new qu(this),this.S=this,this.J=null}ut(ct,Lr);ct.prototype[_a]=!0;ct.prototype.removeEventListener=function(n,e,t,r){f_(this,n,e,t,r)};function yt(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new At(e,n);else if(e instanceof At)e.target=e.target||n;else{var i=e;e=new At(r,n),u_(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=Ja(o,r,!0,e)&&i}if(o=e.g=n,i=Ja(o,r,!0,e)&&i,i=Ja(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=Ja(o,r,!1,e)&&i}ct.prototype.N=function(){if(ct.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)$u(t[r]);delete n.g[e],n.h--}}this.J=null};ct.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};ct.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function Ja(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&Rh(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var pf=ue.JSON.stringify;function BN(){var n=y_;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class $N{constructor(){this.h=this.g=null}add(e,t){const r=m_.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var m_=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new qN,n=>n.reset());class qN{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function jN(n){ue.setTimeout(()=>{throw n},0)}function g_(n,e){xh||zN(),Dh||(xh(),Dh=!0),y_.add(n,e)}var xh;function zN(){var n=ue.Promise.resolve(void 0);xh=function(){n.then(KN)}}var Dh=!1,y_=new $N;function KN(){for(var n;n=BN();){try{n.h.call(n.g)}catch(t){jN(t)}var e=m_;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Dh=!1}function ju(n,e){ct.call(this),this.h=n||1,this.g=e||ue,this.j=Ct(this.qb,this),this.l=Date.now()}ut(ju,ct);H=ju.prototype;H.ga=!1;H.T=null;H.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),yt(this,"tick"),this.ga&&(mf(this),this.start()))}};H.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function mf(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}H.N=function(){ju.$.N.call(this),mf(this),delete this.g};function gf(n,e,t){if(typeof n=="function")t&&(n=Ct(n,t));else if(n&&typeof n.handleEvent=="function")n=Ct(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ue.setTimeout(n,e||0)}function v_(n){n.g=gf(()=>{n.g=null,n.i&&(n.i=!1,v_(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class GN extends Lr{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:v_(this)}N(){super.N(),this.g&&(ue.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yo(n){Lr.call(this),this.h=n,this.g={}}ut(Yo,Lr);var hg=[];function w_(n,e,t,r){Array.isArray(t)||(t&&(hg[0]=t.toString()),t=hg);for(var i=0;i<t.length;i++){var s=l_(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function __(n){uf(n.g,function(e,t){this.g.hasOwnProperty(t)&&hf(e)},n),n.g={}}Yo.prototype.N=function(){Yo.$.N.call(this),__(this)};Yo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function zu(){this.g=!0}zu.prototype.Ea=function(){this.g=!1};function HN(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function WN(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function Hi(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+YN(n,t)+(r?" "+r:"")})}function QN(n,e){n.info(function(){return"TIMEOUT: "+e})}zu.prototype.info=function(){};function YN(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return pf(t)}catch{return e}}var Ri={},dg=null;function Ku(){return dg=dg||new ct}Ri.Ta="serverreachability";function I_(n){At.call(this,Ri.Ta,n)}ut(I_,At);function Jo(n){const e=Ku();yt(e,new I_(e))}Ri.STAT_EVENT="statevent";function b_(n,e){At.call(this,Ri.STAT_EVENT,n),this.stat=e}ut(b_,At);function Dt(n){const e=Ku();yt(e,new b_(e,n))}Ri.Ua="timingevent";function E_(n,e){At.call(this,Ri.Ua,n),this.size=e}ut(E_,At);function Ia(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return ue.setTimeout(function(){n()},e)}var Gu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},T_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function yf(){}yf.prototype.h=null;function fg(n){return n.h||(n.h=n.i())}function S_(){}var ba={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function vf(){At.call(this,"d")}ut(vf,At);function wf(){At.call(this,"c")}ut(wf,At);var Ph;function Hu(){}ut(Hu,yf);Hu.prototype.g=function(){return new XMLHttpRequest};Hu.prototype.i=function(){return{}};Ph=new Hu;function Ea(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new Yo(this),this.P=JN,n=Ah?125:void 0,this.V=new ju(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new C_}function C_(){this.i=null,this.g="",this.h=!1}var JN=45e3,Oh={},Hc={};H=Ea.prototype;H.setTimeout=function(n){this.P=n};function Mh(n,e,t){n.L=1,n.v=Qu(Qn(e)),n.s=t,n.S=!0,A_(n,null)}function A_(n,e){n.G=Date.now(),Ta(n),n.A=Qn(n.v);var t=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),M_(t.i,"t",r),n.C=0,t=n.l.I,n.h=new C_,n.g=nI(n.l,t?e:null,!n.s),0<n.O&&(n.M=new GN(Ct(n.Pa,n,n.g),n.O)),w_(n.U,n.g,"readystatechange",n.nb),e=n.I?c_(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),Jo(),HN(n.j,n.u,n.A,n.m,n.W,n.s)}H.nb=function(n){n=n.target;const e=this.M;e&&Bn(n)==3?e.l():this.Pa(n)};H.Pa=function(n){try{if(n==this.g)e:{const l=Bn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||Ah||this.g&&(this.h.h||this.g.ja()||yg(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?Jo(3):Jo(2)),Wu(this);var t=this.g.da();this.aa=t;t:if(k_(this)){var r=yg(this.g);n="";var i=r.length,s=Bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ri(this),Ao(this);var o="";break t}this.h.i=new ue.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,WN(this.j,this.u,this.A,this.m,this.W,l,t),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Kc(a)){var u=a;break t}}u=null}if(t=u)Hi(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Lh(this,t);else{this.i=!1,this.o=3,Dt(12),ri(this),Ao(this);break e}}this.S?(R_(this,l,o),Ah&&this.i&&l==3&&(w_(this.U,this.V,"tick",this.mb),this.V.start())):(Hi(this.j,this.m,o,null),Lh(this,o)),l==4&&ri(this),this.i&&!this.J&&(l==4?X_(this.l,this):(this.i=!1,Ta(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Dt(12)):(this.o=0,Dt(13)),ri(this),Ao(this)}}}catch{}finally{}};function k_(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function R_(n,e,t){let r=!0,i;for(;!n.J&&n.C<t.length;)if(i=XN(n,t),i==Hc){e==4&&(n.o=4,Dt(14),r=!1),Hi(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Oh){n.o=4,Dt(15),Hi(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else Hi(n.j,n.m,i,null),Lh(n,i);k_(n)&&i!=Hc&&i!=Oh&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Dt(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ca&&(n.ca=!0,e=n.l,e.g==n&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),Cf(e),e.L=!0,Dt(11))):(Hi(n.j,n.m,t,"[Invalid Chunked Response]"),ri(n),Ao(n))}H.mb=function(){if(this.g){var n=Bn(this.g),e=this.g.ja();this.C<e.length&&(Wu(this),R_(this,n,e),this.i&&n!=4&&Ta(this))}};function XN(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?Hc:(t=Number(e.substring(t,r)),isNaN(t)?Oh:(r+=1,r+t>e.length?Hc:(e=e.substr(r,t),n.C=r+t,e)))}H.cancel=function(){this.J=!0,ri(this)};function Ta(n){n.Y=Date.now()+n.P,N_(n,n.P)}function N_(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Ia(Ct(n.lb,n),e)}function Wu(n){n.B&&(ue.clearTimeout(n.B),n.B=null)}H.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(QN(this.j,this.A),this.L!=2&&(Jo(),Dt(17)),ri(this),this.o=2,Ao(this)):N_(this,this.Y-n)};function Ao(n){n.l.H==0||n.J||X_(n.l,n)}function ri(n){Wu(n);var e=n.M;e&&typeof e.ra=="function"&&e.ra(),n.M=null,mf(n.V),__(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.ra())}function Lh(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||Fh(t.h,n))){if(!n.K&&Fh(t.h,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)Yc(t),Xu(t);else break e;Sf(t),Dt(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.M&&t.A==0&&!t.v&&(t.v=Ia(Ct(t.ib,t),6e3));if(1>=U_(t.h)&&t.na){try{t.na()}catch{}t.na=void 0}}else ii(t,11)}else if((n.K||t.g==n)&&Yc(t),!Kc(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(t.V=u[0],u=u[1],t.H==2)if(u[0]=="c"){t.J=u[1],t.oa=u[2];const l=u[3];l!=null&&(t.qa=l,t.j.info("VER="+t.qa));const h=u[4];h!=null&&(t.Ga=h,t.j.info("SVER="+t.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.K=r,t.j.info("backChannelRequestTimeoutMs_="+r)),r=t;const f=n.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.h;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(_f(s,s.h),s.h=null))}if(r.F){const p=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;p&&(r.Da=p,Me(r.G,r.F,p))}}t.H=3,t.l&&t.l.Ba(),t.ca&&(t.S=Date.now()-n.G,t.j.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=tI(r,r.I?r.oa:null,r.Y),o.K){V_(r.h,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Wu(a),Ta(a)),r.g=o}else Y_(r);0<t.i.length&&Zu(t)}else u[0]!="stop"&&u[0]!="close"||ii(t,7);else t.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ii(t,7):Tf(t):u[0]!="noop"&&t.l&&t.l.Aa(u),t.A=0)}}Jo(4)}catch{}}function ZN(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Vu(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function ex(n){if(n.sa&&typeof n.sa=="function")return n.sa();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Vu(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function x_(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Vu(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=ex(n),r=ZN(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var D_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tx(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function di(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof di){this.h=e!==void 0?e:n.h,Wc(this,n.j),this.s=n.s,this.g=n.g,Qc(this,n.m),this.l=n.l,e=n.i;var t=new Xo;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),pg(this,t),this.o=n.o}else n&&(t=String(n).match(D_))?(this.h=!!e,Wc(this,t[1]||"",!0),this.s=go(t[2]||""),this.g=go(t[3]||"",!0),Qc(this,t[4]),this.l=go(t[5]||"",!0),pg(this,t[6]||"",!0),this.o=go(t[7]||"")):(this.h=!!e,this.i=new Xo(null,this.h))}di.prototype.toString=function(){var n=[],e=this.j;e&&n.push(yo(e,mg,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(yo(e,mg,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(yo(t,t.charAt(0)=="/"?ix:rx,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",yo(t,ox)),n.join("")};function Qn(n){return new di(n)}function Wc(n,e,t){n.j=t?go(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Qc(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function pg(n,e,t){e instanceof Xo?(n.i=e,ax(n.i,n.h)):(t||(e=yo(e,sx)),n.i=new Xo(e,n.h))}function Me(n,e,t){n.i.set(e,t)}function Qu(n){return Me(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function go(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function yo(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,nx),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function nx(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var mg=/[#\/\?@]/g,rx=/[#\?:]/g,ix=/[#\?]/g,sx=/[#\?@]/g,ox=/#/g;function Xo(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Fr(n){n.g||(n.g=new Map,n.h=0,n.i&&tx(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}H=Xo.prototype;H.add=function(n,e){Fr(this),this.i=null,n=Fs(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function P_(n,e){Fr(n),e=Fs(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function O_(n,e){return Fr(n),e=Fs(n,e),n.g.has(e)}H.forEach=function(n,e){Fr(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};H.sa=function(){Fr(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};H.Z=function(n){Fr(this);let e=[];if(typeof n=="string")O_(this,n)&&(e=e.concat(this.g.get(Fs(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};H.set=function(n,e){return Fr(this),this.i=null,n=Fs(this,n),O_(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};H.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function M_(n,e,t){P_(n,e),0<t.length&&(n.i=null,n.g.set(Fs(n,e),af(t)),n.h+=t.length)}H.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Fs(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function ax(n,e){e&&!n.j&&(Fr(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(P_(this,r),M_(this,i,t))},n)),n.j=e}var cx=class{constructor(n,e){this.h=n,this.g=e}};function L_(n){this.l=n||ux,ue.PerformanceNavigationTiming?(n=ue.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(ue.g&&ue.g.Ka&&ue.g.Ka()&&ue.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ux=10;function F_(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function U_(n){return n.h?1:n.g?n.g.size:0}function Fh(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function _f(n,e){n.g?n.g.add(e):n.h=e}function V_(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}L_.prototype.cancel=function(){if(this.i=B_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function B_(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return af(n.i)}function If(){}If.prototype.stringify=function(n){return ue.JSON.stringify(n,void 0)};If.prototype.parse=function(n){return ue.JSON.parse(n,void 0)};function lx(){this.g=new If}function hx(n,e,t){const r=t||"";try{x_(n,function(i,s){let o=i;wa(i)&&(o=pf(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function dx(n,e){const t=new zu;if(ue.Image){const r=new Image;r.onload=Ya(Xa,t,r,"TestLoadImage: loaded",!0,e),r.onerror=Ya(Xa,t,r,"TestLoadImage: error",!1,e),r.onabort=Ya(Xa,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ya(Xa,t,r,"TestLoadImage: timeout",!1,e),ue.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function Xa(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Sa(n){this.l=n.fc||null,this.j=n.ob||!1}ut(Sa,yf);Sa.prototype.g=function(){return new Yu(this.l,this.j)};Sa.prototype.i=function(n){return function(){return n}}({});function Yu(n,e){ct.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=bf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ut(Yu,ct);var bf=0;H=Yu.prototype;H.open=function(n,e){if(this.readyState!=bf)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Zo(this)};H.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||ue).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};H.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ca(this)),this.readyState=bf};H.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Zo(this)),this.g&&(this.readyState=3,Zo(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ue.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;$_(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function $_(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}H.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Ca(this):Zo(this),this.readyState==3&&$_(this)}};H.Za=function(n){this.g&&(this.response=this.responseText=n,Ca(this))};H.Ya=function(n){this.g&&(this.response=n,Ca(this))};H.ka=function(){this.g&&Ca(this)};function Ca(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Zo(n)}H.setRequestHeader=function(n,e){this.v.append(n,e)};H.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};H.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Zo(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Yu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var fx=ue.JSON.parse;function qe(n){ct.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=q_,this.L=this.M=!1}ut(qe,ct);var q_="",px=/^https?$/i,mx=["POST","PUT"];H=qe.prototype;H.Oa=function(n){this.M=n};H.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ph.g(),this.C=this.u?fg(this.u):fg(Ph),this.g.onreadystatechange=Ct(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){gg(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=ue.FormData&&n instanceof ue.FormData,!(0<=r_(mx,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{K_(this),0<this.B&&((this.L=gx(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ct(this.ua,this)):this.A=gf(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){gg(this,s)}};function gx(n){return ms&&PN()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}H.ua=function(){typeof of<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,yt(this,"timeout"),this.abort(8))};function gg(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,j_(n),Ju(n)}function j_(n){n.F||(n.F=!0,yt(n,"complete"),yt(n,"error"))}H.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,yt(this,"complete"),yt(this,"abort"),Ju(this))};H.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ju(this,!0)),qe.$.N.call(this)};H.La=function(){this.s||(this.G||this.v||this.l?z_(this):this.kb())};H.kb=function(){z_(this)};function z_(n){if(n.h&&typeof of<"u"&&(!n.C[1]||Bn(n)!=4||n.da()!=2)){if(n.v&&Bn(n)==4)gf(n.La,0,n);else if(yt(n,"readystatechange"),Bn(n)==4){n.h=!1;try{const a=n.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=a===0){var i=String(n.I).match(D_)[1]||null;if(!i&&ue.self&&ue.self.location){var s=ue.self.location.protocol;i=s.substr(0,s.length-1)}r=!px.test(i?i.toLowerCase():"")}t=r}if(t)yt(n,"complete"),yt(n,"success");else{n.m=6;try{var o=2<Bn(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.da()+"]",j_(n)}}finally{Ju(n)}}}}function Ju(n,e){if(n.g){K_(n);const t=n.g,r=n.C[0]?zc:null;n.g=null,n.C=null,e||yt(n,"ready");try{t.onreadystatechange=r}catch{}}}function K_(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(ue.clearTimeout(n.A),n.A=null)}function Bn(n){return n.g?n.g.readyState:0}H.da=function(){try{return 2<Bn(this)?this.g.status:-1}catch{return-1}};H.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};H.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),fx(e)}};function yg(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case q_:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}H.Ia=function(){return this.m};H.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function G_(n){let e="";return uf(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function Ef(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=G_(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):Me(n,e,t))}function to(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function H_(n){this.Ga=0,this.i=[],this.j=new zu,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=to("failFast",!1,n),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=to("baseRetryDelayMs",5e3,n),this.hb=to("retryDelaySeedMs",1e4,n),this.eb=to("forwardChannelMaxRetries",2,n),this.xa=to("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.K=void 0,this.I=n&&n.supportsCrossDomainXhr||!1,this.J="",this.h=new L_(n&&n.concurrentRequestLimit),this.Ja=new lx,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.j.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}H=H_.prototype;H.qa=8;H.H=1;function Tf(n){if(W_(n),n.H==3){var e=n.W++,t=Qn(n.G);Me(t,"SID",n.J),Me(t,"RID",e),Me(t,"TYPE","terminate"),Aa(n,t),e=new Ea(n,n.j,e,void 0),e.L=2,e.v=Qu(Qn(t)),t=!1,ue.navigator&&ue.navigator.sendBeacon&&(t=ue.navigator.sendBeacon(e.v.toString(),"")),!t&&ue.Image&&(new Image().src=e.v,t=!0),t||(e.g=nI(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ta(e)}eI(n)}function Xu(n){n.g&&(Cf(n),n.g.cancel(),n.g=null)}function W_(n){Xu(n),n.u&&(ue.clearTimeout(n.u),n.u=null),Yc(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&ue.clearTimeout(n.m),n.m=null)}function Zu(n){F_(n.h)||n.m||(n.m=!0,g_(n.Na,n),n.C=0)}function yx(n,e){return U_(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.F.concat(n.i),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Ia(Ct(n.Na,n,e),Z_(n,n.C)),n.C++,!0)}H.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Ea(this,this.j,n,void 0);let s=this.s;if(this.U&&(s?(s=c_(s),u_(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var r=this.i[t];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Q_(this,i,e),t=Qn(this.G),Me(t,"RID",n),Me(t,"CVER",22),this.F&&Me(t,"X-HTTP-Session-Id",this.F),Aa(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(G_(s)))+"&"+e:this.o&&Ef(t,this.o,s)),_f(this.h,i),this.bb&&Me(t,"TYPE","init"),this.P?(Me(t,"$req",e),Me(t,"SID","null"),i.ba=!0,Mh(i,t,null)):Mh(i,t,e),this.H=2}}else this.H==3&&(n?vg(this,n):this.i.length==0||F_(this.h)||vg(this))};function vg(n,e){var t;e?t=e.m:t=n.W++;const r=Qn(n.G);Me(r,"SID",n.J),Me(r,"RID",t),Me(r,"AID",n.V),Aa(n,r),n.o&&n.s&&Ef(r,n.o,n.s),t=new Ea(n,n.j,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.i=e.F.concat(n.i)),e=Q_(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),_f(n.h,t),Mh(t,r,e)}function Aa(n,e){n.ma&&uf(n.ma,function(t,r){Me(e,r,t)}),n.l&&x_({},function(t,r){Me(e,r,t)})}function Q_(n,e,t){t=Math.min(n.i.length,t);var r=n.l?Ct(n.l.Va,n.l,n):null;e:{var i=n.i;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let u=i[c].h;const l=i[c].g;if(u-=s,0>u)s=Math.max(0,i[c].h-100),a=!1;else try{hx(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.i.splice(0,t),e.F=n,r}function Y_(n){n.g||n.u||(n.ba=1,g_(n.Ma,n),n.A=0)}function Sf(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Ia(Ct(n.Ma,n),Z_(n,n.A)),n.A++,!0)}H.Ma=function(){if(this.u=null,J_(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var n=2*this.S;this.j.info("BP detection timer enabled: "+n),this.B=Ia(Ct(this.jb,this),n)}};H.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Dt(10),Xu(this),J_(this))};function Cf(n){n.B!=null&&(ue.clearTimeout(n.B),n.B=null)}function J_(n){n.g=new Ea(n,n.j,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=Qn(n.wa);Me(e,"RID","rpc"),Me(e,"SID",n.J),Me(e,"CI",n.M?"0":"1"),Me(e,"AID",n.V),Me(e,"TYPE","xmlhttp"),Aa(n,e),n.o&&n.s&&Ef(e,n.o,n.s),n.K&&n.g.setTimeout(n.K);var t=n.g;n=n.oa,t.L=1,t.v=Qu(Qn(e)),t.s=null,t.S=!0,A_(t,n)}H.ib=function(){this.v!=null&&(this.v=null,Xu(this),Sf(this),Dt(19))};function Yc(n){n.v!=null&&(ue.clearTimeout(n.v),n.v=null)}function X_(n,e){var t=null;if(n.g==e){Yc(n),Cf(n),n.g=null;var r=2}else if(Fh(n.h,e))t=e.F,V_(n.h,e),r=1;else return;if(n.H!=0){if(n.ta=e.aa,e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var i=n.C;r=Ku(),yt(r,new E_(r,t)),Zu(n)}else Y_(n);else if(i=e.o,i==3||i==0&&0<n.ta||!(r==1&&yx(n,e)||r==2&&Sf(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),i){case 1:ii(n,5);break;case 4:ii(n,10);break;case 3:ii(n,6);break;default:ii(n,2)}}}function Z_(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.l||(t*=2),t*e}function ii(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var r=Ct(n.pb,n);t||(t=new di("//www.google.com/images/cleardot.gif"),ue.location&&ue.location.protocol=="http"||Wc(t,"https"),Qu(t)),dx(t.toString(),r)}else Dt(2);n.H=0,n.l&&n.l.za(e),eI(n),W_(n)}H.pb=function(n){n?(this.j.info("Successfully pinged google.com"),Dt(2)):(this.j.info("Failed to ping google.com"),Dt(1))};function eI(n){if(n.H=0,n.pa=[],n.l){const e=B_(n.h);(e.length!=0||n.i.length!=0)&&(ag(n.pa,e),ag(n.pa,n.i),n.h.i.length=0,af(n.i),n.i.length=0),n.l.ya()}}function tI(n,e,t){var r=t instanceof di?Qn(t):new di(t,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Qc(r,r.m);else{var i=ue.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new di(null,void 0);r&&Wc(s,r),e&&(s.g=e),i&&Qc(s,i),t&&(s.l=t),r=s}return t=n.F,e=n.Da,t&&e&&Me(r,t,e),Me(r,"VER",n.qa),Aa(n,r),r}function nI(n,e,t){if(e&&!n.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new qe(new Sa({ob:!0})):new qe(n.va),e.Oa(n.I),e}function rI(){}H=rI.prototype;H.Ba=function(){};H.Aa=function(){};H.za=function(){};H.ya=function(){};H.Va=function(){};function Jc(){if(ms&&!(10<=Number(ON)))throw Error("Environmental error: no available transport.")}Jc.prototype.g=function(n,e){return new Gt(n,e)};function Gt(n,e){ct.call(this),this.g=new H_(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!Kc(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Kc(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Us(this)}ut(Gt,ct);Gt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var n=this.g,e=this.l,t=this.h||void 0;Dt(0),n.Y=e,n.ma=t||{},n.M=n.aa,n.G=tI(n,null,n.Y),Zu(n)};Gt.prototype.close=function(){Tf(this.g)};Gt.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=pf(n),n=t);e.i.push(new cx(e.fb++,n)),e.H==3&&Zu(e)};Gt.prototype.N=function(){this.g.l=null,delete this.j,Tf(this.g),delete this.g,Gt.$.N.call(this)};function iI(n){vf.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}ut(iI,vf);function sI(){wf.call(this),this.status=1}ut(sI,wf);function Us(n){this.g=n}ut(Us,rI);Us.prototype.Ba=function(){yt(this.g,"a")};Us.prototype.Aa=function(n){yt(this.g,new iI(n))};Us.prototype.za=function(n){yt(this.g,new sI)};Us.prototype.ya=function(){yt(this.g,"b")};function vx(){this.blockSize=-1}function hn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ut(hn,vx);hn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ql(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)r[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var s=n.g[3],o=e+(s^t&(i^s))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(t^i))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^s)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~s))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}hn.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=t;)Ql(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){Ql(this,r),i=0;break}}else for(;s<e;)if(r[i++]=n[s++],i==this.blockSize){Ql(this,r),i=0;break}}this.h=i,this.i+=e};hn.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function Ae(n,e){this.h=e;for(var t=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==e||(t[i]=s,r=!1)}this.g=t}var wx={};function Af(n){return-128<=n&&128>n?i_(wx,n,function(e){return new Ae([e|0],0>e?-1:0)}):new Ae([n|0],0>n?-1:0)}function Sn(n){if(isNaN(n)||!isFinite(n))return rs;if(0>n)return ft(Sn(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=Uh;return new Ae(e,0)}function oI(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return ft(oI(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Sn(Math.pow(e,8)),r=rs,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),e);8>s?(s=Sn(Math.pow(e,s)),r=r.R(s).add(Sn(o))):(r=r.R(t),r=r.add(Sn(o)))}return r}var Uh=4294967296,rs=Af(0),Vh=Af(1),wg=Af(16777216);H=Ae.prototype;H.ea=function(){if(Xt(this))return-ft(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:Uh+r)*e,e*=Uh}return n};H.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if($n(this))return"0";if(Xt(this))return"-"+ft(this).toString(n);for(var e=Sn(Math.pow(n,6)),t=this,r="";;){var i=Zc(t,e).g;t=Xc(t,i.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,$n(t))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};H.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function $n(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function Xt(n){return n.h==-1}H.X=function(n){return n=Xc(this,n),Xt(n)?-1:$n(n)?0:1};function ft(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new Ae(t,~n.h).add(Vh)}H.abs=function(){return Xt(this)?ft(this):this};H.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,t[i]=o<<16|s}return new Ae(t,t[t.length-1]&-2147483648?-1:0)};function Xc(n,e){return n.add(ft(e))}H.R=function(n){if($n(this)||$n(n))return rs;if(Xt(this))return Xt(n)?ft(this).R(ft(n)):ft(ft(this).R(n));if(Xt(n))return ft(this.R(ft(n)));if(0>this.X(wg)&&0>n.X(wg))return Sn(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;t[2*r+2*i]+=o*c,Za(t,2*r+2*i),t[2*r+2*i+1]+=s*c,Za(t,2*r+2*i+1),t[2*r+2*i+1]+=o*a,Za(t,2*r+2*i+1),t[2*r+2*i+2]+=s*a,Za(t,2*r+2*i+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new Ae(t,0)};function Za(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function no(n,e){this.g=n,this.h=e}function Zc(n,e){if($n(e))throw Error("division by zero");if($n(n))return new no(rs,rs);if(Xt(n))return e=Zc(ft(n),e),new no(ft(e.g),ft(e.h));if(Xt(e))return e=Zc(n,ft(e)),new no(ft(e.g),e.h);if(30<n.g.length){if(Xt(n)||Xt(e))throw Error("slowDivide_ only works with positive integers.");for(var t=Vh,r=e;0>=r.X(n);)t=_g(t),r=_g(r);var i=Ui(t,1),s=Ui(r,1);for(r=Ui(r,2),t=Ui(t,2);!$n(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(t),s=o),r=Ui(r,1),t=Ui(t,1)}return e=Xc(n,i.R(e)),new no(i,e)}for(i=rs;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Sn(t),o=s.R(e);Xt(o)||0<o.X(n);)t-=r,s=Sn(t),o=s.R(e);$n(s)&&(s=Vh),i=i.add(s),n=Xc(n,o)}return new no(i,n)}H.gb=function(n){return Zc(this,n).h};H.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new Ae(t,this.h&n.h)};H.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new Ae(t,this.h|n.h)};H.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new Ae(t,this.h^n.h)};function _g(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new Ae(t,n.h)}function Ui(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,i=[],s=0;s<r;s++)i[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new Ae(i,n.h)}Jc.prototype.createWebChannel=Jc.prototype.g;Gt.prototype.send=Gt.prototype.u;Gt.prototype.open=Gt.prototype.m;Gt.prototype.close=Gt.prototype.close;Gu.NO_ERROR=0;Gu.TIMEOUT=8;Gu.HTTP_ERROR=6;T_.COMPLETE="complete";S_.EventType=ba;ba.OPEN="a";ba.CLOSE="b";ba.ERROR="c";ba.MESSAGE="d";ct.prototype.listen=ct.prototype.O;qe.prototype.listenOnce=qe.prototype.P;qe.prototype.getLastError=qe.prototype.Sa;qe.prototype.getLastErrorCode=qe.prototype.Ia;qe.prototype.getStatus=qe.prototype.da;qe.prototype.getResponseJson=qe.prototype.Wa;qe.prototype.getResponseText=qe.prototype.ja;qe.prototype.send=qe.prototype.ha;qe.prototype.setWithCredentials=qe.prototype.Oa;hn.prototype.digest=hn.prototype.l;hn.prototype.reset=hn.prototype.reset;hn.prototype.update=hn.prototype.j;Ae.prototype.add=Ae.prototype.add;Ae.prototype.multiply=Ae.prototype.R;Ae.prototype.modulo=Ae.prototype.gb;Ae.prototype.compare=Ae.prototype.X;Ae.prototype.toNumber=Ae.prototype.ea;Ae.prototype.toString=Ae.prototype.toString;Ae.prototype.getBits=Ae.prototype.D;Ae.fromNumber=Sn;Ae.fromString=oI;var _x=function(){return new Jc},Ix=function(){return Ku()},Yl=Gu,bx=T_,Ex=Ri,Ig={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Tx=Sa,ec=S_,Sx=qe,Cx=hn,is=Ae;const bg="@firebase/firestore";/**
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
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
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
 */let Vs="9.22.0";/**
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
 */const Sr=new Su("@firebase/firestore");function Bh(){return Sr.logLevel}function Ax(n){Sr.setLogLevel(n)}function P(n,...e){if(Sr.logLevel<=ve.DEBUG){const t=e.map(kf);Sr.debug(`Firestore (${Vs}): ${n}`,...t)}}function ze(n,...e){if(Sr.logLevel<=ve.ERROR){const t=e.map(kf);Sr.error(`Firestore (${Vs}): ${n}`,...t)}}function dn(n,...e){if(Sr.logLevel<=ve.WARN){const t=e.map(kf);Sr.warn(`Firestore (${Vs}): ${n}`,...t)}}function kf(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function W(n="Unexpected state"){const e=`FIRESTORE (${Vs}) INTERNAL ASSERTION FAILED: `+n;throw ze(e),new Error(e)}function te(n,e){n||W()}function kx(n,e){n||W()}function z(n,e){return n}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class R extends Pt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class st{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class aI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Rx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(it.UNAUTHENTICATED))}shutdown(){}}class Nx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class xx{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new st;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new st,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new st)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(te(typeof r.accessToken=="string"),new aI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string"),new it(e)}}class Dx{constructor(e,t,r){this.h=e,this.l=t,this.m=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Px{constructor(e,t,r){this.h=e,this.l=t,this.m=r}getToken(){return Promise.resolve(new Dx(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ox{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Mx{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const r=s=>{s.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(te(typeof t.token=="string"),this.T=t.token,new Ox(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lx(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class cI{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Lx(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function de(n,e){return n<e?-1:n>e?1:0}function gs(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function uI(n){return n+"\0"}/**
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
 */class Fe{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new R(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new R(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new R(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new R(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Fe(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Fe(0,0))}static max(){return new ee(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ea{constructor(e,t,r){t===void 0?t=0:t>e.length&&W(),r===void 0?r=e.length-t:r>e.length-t&&W(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ea.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ea?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class we extends ea{construct(e,t,r){return new we(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new R(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new we(t)}static emptyPath(){return new we([])}}const Fx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends ea{construct(e,t,r){return new Ke(e,t,r)}static isValidIdentifier(e){return Fx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ke(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new R(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new R(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new R(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new R(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(t)}static emptyPath(){return new Ke([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(we.fromString(e))}static fromName(e){return new j(we.fromString(e).popFirst(5))}static empty(){return new j(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return we.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new we(e.slice()))}}/**
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
 */class lI{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function $h(n){return n.fields.find(e=>e.kind===2)}function Hr(n){return n.fields.filter(e=>e.kind!==2)}lI.UNKNOWN_ID=-1;class Ux{constructor(e,t){this.fieldPath=e,this.kind=t}}class eu{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new eu(0,Ht.min())}}function hI(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new Fe(t+1,0):new Fe(t,r));return new Ht(i,j.empty(),e)}function dI(n){return new Ht(n.readTime,n.key,-1)}class Ht{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ht(ee.min(),j.empty(),-1)}static max(){return new Ht(ee.max(),j.empty(),-1)}}function Rf(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=j.comparator(n.documentKey,e.documentKey),t!==0?t:de(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ur(n){if(n.code!==T.FAILED_PRECONDITION||n.message!==fI)throw n;P("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class el{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.v=new st,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{t.error?this.v.reject(new ko(e,t.error)):this.v.resolve()},this.transaction.onerror=r=>{const i=Nf(r.target.error);this.v.reject(new ko(e,i))}}static open(e,t,r,i){try{return new el(t,e.transaction(i,r))}catch(s){throw new ko(t,s)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(P("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Bx(t)}}class on{constructor(e,t,r){this.name=e,this.version=t,this.V=r,on.S(Be())===12.2&&ze("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return P("SimpleDb","Removing database:",e),Yr(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!$o())return!1;if(on.C())return!0;const e=Be(),t=on.S(e),r=0<t&&t<10,i=on.N(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async $(e){return this.db||(P("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new ko(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new R(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new R(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ko(e,o))},i.onupgradeneeded=s=>{P("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.V.O(o,i.transaction,s.oldVersion,this.version).next(()=>{P("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=t=>this.F(t)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=el.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.P(),u)).catch(u=>(a.abort(u),E.reject(u))).toPromise();return c.catch(()=>{}),await a.R,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(P("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Vx{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return Yr(this.L.delete())}}class ko extends R{constructor(e,t){super(T.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Vr(n){return n.name==="IndexedDbTransactionError"}class Bx{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(P("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(P("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Yr(r)}add(e){return P("SimpleDb","ADD",this.store.name,e,e),Yr(this.store.add(e))}get(e){return Yr(this.store.get(e)).next(t=>(t===void 0&&(t=null),P("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return P("SimpleDb","DELETE",this.store.name,e),Yr(this.store.delete(e))}count(){return P("SimpleDb","COUNT",this.store.name),Yr(this.store.count())}j(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.W(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new E((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new E((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,t){P("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}X(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.W(i,t)}Z(e){const t=this.cursor({});return new E((r,i)=>{t.onerror=s=>{const o=Nf(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new E((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new Vx(a),u=t(a.primaryKey,a.value,c);if(u instanceof E){const l=u.catch(h=>(c.done(),E.reject(h)));r.push(l)}c.isDone?i():c.K===null?a.continue():a.continue(c.K)}}).next(()=>E.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Yr(n){return new E((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=Nf(r.target.error);t(i)}})}let Eg=!1;function Nf(n){const e=on.S(Be());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new R("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Eg||(Eg=!0,setTimeout(()=>{throw r},0)),r}}return n}class $x{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){P("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{P("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(t){Vr(t)?P("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await Ur(t)}await this.et(6e4)})}}class qx{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.st(t,e))}st(e,t){const r=new Set;let i=t,s=!0;return E.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return P("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}it(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(i,s)).next(a=>(P("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}rt(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=dI(s);Rf(o,r)>0&&(r=o)}),new Ht(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Vt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>t.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Vt.ct=-1;function ka(n){return n==null}function ta(n){return n===0&&1/n==-1/0}function mI(n){return typeof n=="number"&&Number.isInteger(n)&&!ta(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ot(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Tg(e)),e=jx(n.get(t),e);return Tg(e)}function jx(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function Tg(n){return n+""}function Cn(n){const e=n.length;if(te(e>=2),e===2)return te(n.charAt(0)===""&&n.charAt(1)===""),we.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&W(),n.charAt(o+1)){case"":const a=n.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:W()}s=o+2}return new we(r)}/**
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
 */const Sg=["userId","batchId"];/**
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
 */function _c(n,e){return[n,Ot(e)]}function gI(n,e,t){return[n,Ot(e),t]}const zx={},Kx=["prefixPath","collectionGroup","readTime","documentId"],Gx=["prefixPath","collectionGroup","documentId"],Hx=["collectionGroup","readTime","prefixPath","documentId"],Wx=["canonicalId","targetId"],Qx=["targetId","path"],Yx=["path","targetId"],Jx=["collectionId","parent"],Xx=["indexId","uid"],Zx=["uid","sequenceNumber"],eD=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],tD=["indexId","uid","orderedDocumentKey"],nD=["userId","collectionPath","documentId"],rD=["userId","collectionPath","largestBatchId"],iD=["userId","collectionGroup","largestBatchId"],yI=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],sD=[...yI,"documentOverlays"],vI=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],wI=vI,oD=[...wI,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh extends pI{constructor(e,t){super(),this.ht=e,this.currentSequenceNumber=t}}function lt(n,e){const t=z(n);return on.M(t.ht,e)}/**
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
 */function Cg(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ni(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function _I(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Ne{constructor(e,t){this.comparator=e,this.root=t||dt.EMPTY}insert(e,t){return new Ne(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tc(this.root,e,this.comparator,!1)}getReverseIterator(){return new tc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tc(this.root,e,this.comparator,!0)}}class tc{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??dt.RED,this.left=i??dt.EMPTY,this.right=s??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new dt(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return dt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(n,e,t,r,i){return this}insert(n,e,t){return new dt(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Pe{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ag(this.data.getIterator())}getIteratorFrom(e){return new Ag(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Pe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Pe(this.comparator);return t.data=e,t}}class Ag{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Vi(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new Bt([])}unionWith(e){let t=new Pe(Ke.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Bt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return gs(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class II extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aD(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new II("Invalid base64 string: "+i):i}}(e);return new et(t)}static fromUint8Array(e){const t=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new et(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const cD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cr(n){if(te(!!n),typeof n=="string"){let e=0;const t=cD.exec(n);if(te(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:$e(n.seconds),nanos:$e(n.nanos)}}function $e(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ar(n){return typeof n=="string"?et.fromBase64String(n):et.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function xf(n){const e=n.mapValue.fields.__previous_value__;return tl(e)?xf(e):e}function na(n){const e=Cr(n.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
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
 */class uD{constructor(e,t,r,i,s,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class kr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new kr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof kr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ic={nullValue:"NULL_VALUE"};function yi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?tl(n)?4:bI(n)?9007199254740991:10:W()}function Mn(n,e){if(n===e)return!0;const t=yi(n);if(t!==yi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return na(n).isEqual(na(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Cr(r.timestampValue),o=Cr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return Ar(r.bytesValue).isEqual(Ar(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return $e(r.geoPointValue.latitude)===$e(i.geoPointValue.latitude)&&$e(r.geoPointValue.longitude)===$e(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return $e(r.integerValue)===$e(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=$e(r.doubleValue),o=$e(i.doubleValue);return s===o?ta(s)===ta(o):isNaN(s)&&isNaN(o)}return!1}(n,e);case 9:return gs(n.arrayValue.values||[],e.arrayValue.values||[],Mn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Cg(s)!==Cg(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Mn(s[a],o[a])))return!1;return!0}(n,e);default:return W()}}function ra(n,e){return(n.values||[]).find(t=>Mn(t,e))!==void 0}function Rr(n,e){if(n===e)return 0;const t=yi(n),r=yi(e);if(t!==r)return de(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return de(n.booleanValue,e.booleanValue);case 2:return function(i,s){const o=$e(i.integerValue||i.doubleValue),a=$e(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return kg(n.timestampValue,e.timestampValue);case 4:return kg(na(n),na(e));case 5:return de(n.stringValue,e.stringValue);case 6:return function(i,s){const o=Ar(i),a=Ar(s);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=de(o[c],a[c]);if(u!==0)return u}return de(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,s){const o=de($e(i.latitude),$e(s.latitude));return o!==0?o:de($e(i.longitude),$e(s.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Rr(o[c],a[c]);if(u)return u}return de(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===pr.mapValue&&s===pr.mapValue)return 0;if(i===pr.mapValue)return 1;if(s===pr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=s.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=de(a[l],u[l]);if(h!==0)return h;const d=Rr(o[a[l]],c[u[l]]);if(d!==0)return d}return de(a.length,u.length)}(n.mapValue,e.mapValue);default:throw W()}}function kg(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return de(n,e);const t=Cr(n),r=Cr(e),i=de(t.seconds,r.seconds);return i!==0?i:de(t.nanos,r.nanos)}function ys(n){return jh(n)}function jh(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(r){const i=Cr(r);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?Ar(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,j.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=jh(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${jh(r.fields[a])}`;return s+"}"}(n.mapValue):W();var e,t}function vi(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function zh(n){return!!n&&"integerValue"in n}function ia(n){return!!n&&"arrayValue"in n}function Rg(n){return!!n&&"nullValue"in n}function Ng(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function bc(n){return!!n&&"mapValue"in n}function Ro(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ni(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ro(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ro(n.arrayValue.values[t]);return e}return Object.assign({},n)}function bI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function lD(n){return"nullValue"in n?Ic:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?vi(kr.empty(),j.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:W()}function hD(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?vi(kr.empty(),j.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?pr:W()}function xg(n,e){const t=Rr(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Dg(n,e){const t=Rr(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!bc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ro(t)}setAll(e){let t=Ke.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=Ro(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());bc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Mn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];bc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Ni(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new mt(Ro(this.value))}}function EI(n){const e=[];return Ni(n.fields,(t,r)=>{const i=new Ke([t]);if(bc(r)){const s=EI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Bt(e)}/**
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
 */class De{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new De(e,0,ee.min(),ee.min(),ee.min(),mt.empty(),0)}static newFoundDocument(e,t,r,i){return new De(e,1,t,ee.min(),r,i,0)}static newNoDocument(e,t){return new De(e,2,t,ee.min(),ee.min(),mt.empty(),0)}static newUnknownDocument(e,t){return new De(e,3,t,ee.min(),ee.min(),mt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof De&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new De(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Nr{constructor(e,t){this.position=e,this.inclusive=t}}function Pg(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),t.key):r=Rr(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Og(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Mn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ss{constructor(e,t="asc"){this.field=e,this.dir=t}}function dD(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class TI{}class ge extends TI{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new fD(e,t,r):t==="array-contains"?new gD(e,r):t==="in"?new NI(e,r):t==="not-in"?new yD(e,r):t==="array-contains-any"?new vD(e,r):new ge(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new pD(e,r):new mD(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Rr(t,this.value)):t!==null&&yi(this.value)===yi(t)&&this.matchesComparison(Rr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ce extends TI{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new Ce(e,t)}matches(e){return vs(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(t=>t.isInequality());return e!==null?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function vs(n){return n.op==="and"}function Kh(n){return n.op==="or"}function Df(n){return SI(n)&&vs(n)}function SI(n){for(const e of n.filters)if(e instanceof Ce)return!1;return!0}function Gh(n){if(n instanceof ge)return n.field.canonicalString()+n.op.toString()+ys(n.value);if(Df(n))return n.filters.map(e=>Gh(e)).join(",");{const e=n.filters.map(t=>Gh(t)).join(",");return`${n.op}(${e})`}}function CI(n,e){return n instanceof ge?function(t,r){return r instanceof ge&&t.op===r.op&&t.field.isEqual(r.field)&&Mn(t.value,r.value)}(n,e):n instanceof Ce?function(t,r){return r instanceof Ce&&t.op===r.op&&t.filters.length===r.filters.length?t.filters.reduce((i,s,o)=>i&&CI(s,r.filters[o]),!0):!1}(n,e):void W()}function AI(n,e){const t=n.filters.concat(e);return Ce.create(t,n.op)}function kI(n){return n instanceof ge?function(e){return`${e.field.canonicalString()} ${e.op} ${ys(e.value)}`}(n):n instanceof Ce?function(e){return e.op.toString()+" {"+e.getFilters().map(kI).join(" ,")+"}"}(n):"Filter"}class fD extends ge{constructor(e,t,r){super(e,t,r),this.key=j.fromName(r.referenceValue)}matches(e){const t=j.comparator(e.key,this.key);return this.matchesComparison(t)}}class pD extends ge{constructor(e,t){super(e,"in",t),this.keys=RI("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class mD extends ge{constructor(e,t){super(e,"not-in",t),this.keys=RI("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function RI(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>j.fromName(r.referenceValue))}class gD extends ge{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ia(t)&&ra(t.arrayValue,this.value)}}class NI extends ge{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ra(this.value.arrayValue,t)}}class yD extends ge{constructor(e,t){super(e,"not-in",t)}matches(e){if(ra(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ra(this.value.arrayValue,t)}}class vD extends ge{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ia(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ra(this.value.arrayValue,r))}}/**
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
 */class wD{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function Hh(n,e=null,t=[],r=[],i=null,s=null,o=null){return new wD(n,e,t,r,i,s,o)}function wi(n){const e=z(n);if(e.dt===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Gh(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ka(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ys(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ys(r)).join(",")),e.dt=t}return e.dt}function Ra(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!dD(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!CI(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Og(n.startAt,e.startAt)&&Og(n.endAt,e.endAt)}function tu(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function nu(n,e){return n.filters.filter(t=>t instanceof ge&&t.field.isEqual(e))}function Mg(n,e,t){let r=Ic,i=!0;for(const s of nu(n,e)){let o=Ic,a=!0;switch(s.op){case"<":case"<=":o=lD(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Ic}xg({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];xg({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function Lg(n,e,t){let r=pr,i=!0;for(const s of nu(n,e)){let o=pr,a=!0;switch(s.op){case">=":case">":o=hD(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=pr}Dg({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Dg({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class er{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function xI(n,e,t,r,i,s,o,a){return new er(n,e,t,r,i,s,o,a)}function Bs(n){return new er(n)}function Fg(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Pf(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function nl(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Of(n){return n.collectionGroup!==null}function fi(n){const e=z(n);if(e.wt===null){e.wt=[];const t=nl(e),r=Pf(e);if(t!==null&&r===null)t.isKeyField()||e.wt.push(new ss(t)),e.wt.push(new ss(Ke.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new ss(Ke.keyField(),s))}}}return e.wt}function jt(n){const e=z(n);if(!e._t)if(e.limitType==="F")e._t=Hh(e.path,e.collectionGroup,fi(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of fi(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new ss(s.field,o))}const r=e.endAt?new Nr(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Nr(e.startAt.position,e.startAt.inclusive):null;e._t=Hh(e.path,e.collectionGroup,t,e.filters,e.limit,r,i)}return e._t}function Wh(n,e){e.getFirstInequalityField(),nl(n);const t=n.filters.concat([e]);return new er(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ru(n,e,t){return new er(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Na(n,e){return Ra(jt(n),jt(e))&&n.limitType===e.limitType}function DI(n){return`${wi(jt(n))}|lt:${n.limitType}`}function Qh(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(r=>kI(r)).join(", ")}]`),ka(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ys(r)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ys(r)).join(",")),`Target(${t})`}(jt(n))}; limitType=${n.limitType})`}function xa(n,e){return e.isFoundDocument()&&function(t,r){const i=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):j.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,r){for(const i of fi(t))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,r){for(const i of t.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(t,r){return!(t.startAt&&!function(i,s,o){const a=Pg(i,s,o);return i.inclusive?a<=0:a<0}(t.startAt,fi(t),r)||t.endAt&&!function(i,s,o){const a=Pg(i,s,o);return i.inclusive?a>=0:a>0}(t.endAt,fi(t),r))}(n,e)}function PI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function OI(n){return(e,t)=>{let r=!1;for(const i of fi(n)){const s=_D(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function _D(n,e,t){const r=n.field.isKeyField()?j.comparator(e.key,t.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Rr(a,c):W()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return W()}}/**
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
 */class Br{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ni(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return _I(this.inner)}size(){return this.innerSize}}/**
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
 */const ID=new Ne(j.comparator);function $t(){return ID}const MI=new Ne(j.comparator);function vo(...n){let e=MI;for(const t of n)e=e.insert(t.key,t);return e}function LI(n){let e=MI;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function An(){return No()}function FI(){return No()}function No(){return new Br(n=>n.toString(),(n,e)=>n.isEqual(e))}const bD=new Ne(j.comparator),ED=new Pe(j.comparator);function fe(...n){let e=ED;for(const t of n)e=e.add(t);return e}const TD=new Pe(de);function Mf(){return TD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ta(e)?"-0":e}}function VI(n){return{integerValue:""+n}}function BI(n,e){return mI(e)?VI(e):UI(n,e)}/**
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
 */class rl{constructor(){this._=void 0}}function SD(n,e,t){return n instanceof ws?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&tl(i)&&(i=xf(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(t,e):n instanceof _i?qI(n,e):n instanceof Ii?jI(n,e):function(r,i){const s=$I(r,i),o=Ug(s)+Ug(r.gt);return zh(s)&&zh(r.gt)?VI(o):UI(r.serializer,o)}(n,e)}function CD(n,e,t){return n instanceof _i?qI(n,e):n instanceof Ii?jI(n,e):t}function $I(n,e){return n instanceof _s?zh(t=e)||function(r){return!!r&&"doubleValue"in r}(t)?e:{integerValue:0}:null;var t}class ws extends rl{}class _i extends rl{constructor(e){super(),this.elements=e}}function qI(n,e){const t=zI(e);for(const r of n.elements)t.some(i=>Mn(i,r))||t.push(r);return{arrayValue:{values:t}}}class Ii extends rl{constructor(e){super(),this.elements=e}}function jI(n,e){let t=zI(e);for(const r of n.elements)t=t.filter(i=>!Mn(i,r));return{arrayValue:{values:t}}}class _s extends rl{constructor(e,t){super(),this.serializer=e,this.gt=t}}function Ug(n){return $e(n.integerValue||n.doubleValue)}function zI(n){return ia(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Da{constructor(e,t){this.field=e,this.transform=t}}function AD(n,e){return n.field.isEqual(e.field)&&function(t,r){return t instanceof _i&&r instanceof _i||t instanceof Ii&&r instanceof Ii?gs(t.elements,r.elements,Mn):t instanceof _s&&r instanceof _s?Mn(t.gt,r.gt):t instanceof ws&&r instanceof ws}(n.transform,e.transform)}class kD{constructor(e,t){this.version=e,this.transformResults=t}}class Le{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Le}static exists(e){return new Le(void 0,e)}static updateTime(e){return new Le(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ec(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class il{}function KI(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new qs(n.key,Le.none()):new $s(n.key,n.data,Le.none());{const t=n.data,r=mt.empty();let i=new Pe(Ke.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new tr(n.key,r,new Bt(i.toArray()),Le.none())}}function RD(n,e,t){n instanceof $s?function(r,i,s){const o=r.value.clone(),a=Bg(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(n,e,t):n instanceof tr?function(r,i,s){if(!Ec(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Bg(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(GI(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(n,e,t):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,t)}function xo(n,e,t,r){return n instanceof $s?function(i,s,o,a){if(!Ec(i.precondition,s))return o;const c=i.value.clone(),u=$g(i.fieldTransforms,a,s);return c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof tr?function(i,s,o,a){if(!Ec(i.precondition,s))return o;const c=$g(i.fieldTransforms,a,s),u=s.data;return u.setAll(GI(i)),u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(n,e,t,r):function(i,s,o){return Ec(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(n,e,t)}function ND(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=$I(r.transform,i||null);s!=null&&(t===null&&(t=mt.empty()),t.set(r.field,s))}return t||null}function Vg(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&gs(t,r,(i,s)=>AD(i,s))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class $s extends il{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class tr extends il{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function GI(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Bg(n,e,t){const r=new Map;te(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,CD(o,a,t[i]))}return r}function $g(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,SD(s,o,e))}return r}class qs extends il{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Lf extends il{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ff{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&RD(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=xo(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=xo(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=FI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=KI(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),fe())}isEqual(e){return this.batchId===e.batchId&&gs(this.mutations,e.mutations,(t,r)=>Vg(t,r))&&gs(this.baseMutations,e.baseMutations,(t,r)=>Vg(t,r))}}class Uf{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){te(e.mutations.length===r.length);let i=bD;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Uf(e,t,r,i)}}/**
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
 */class Vf{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class xD{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Qe,ye;function HI(n){switch(n){default:return W();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function WI(n){if(n===void 0)return ze("GRPC error has no .code"),T.UNKNOWN;switch(n){case Qe.OK:return T.OK;case Qe.CANCELLED:return T.CANCELLED;case Qe.UNKNOWN:return T.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return T.INTERNAL;case Qe.UNAVAILABLE:return T.UNAVAILABLE;case Qe.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Qe.NOT_FOUND:return T.NOT_FOUND;case Qe.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Qe.ABORTED:return T.ABORTED;case Qe.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Qe.DATA_LOSS:return T.DATA_LOSS;default:return W()}}(ye=Qe||(Qe={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Bf{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return nc}static getOrCreateInstance(){return nc===null&&(nc=new Bf),nc}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let nc=null;/**
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
 */function QI(){return new TextEncoder}/**
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
 */const DD=new is([4294967295,4294967295],0);function qg(n){const e=QI().encode(n),t=new Cx;return t.update(e),new Uint8Array(t.digest())}function jg(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new is([t,r],0),new is([i,s],0)]}class $f{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new wo(`Invalid padding: ${t}`);if(r<0)throw new wo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new wo(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new wo(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=is.fromNumber(this.It)}Et(e,t,r){let i=e.add(t.multiply(is.fromNumber(r)));return i.compare(DD)===1&&(i=new is([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const t=qg(e),[r,i]=jg(t);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new $f(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const t=qg(e),[r,i]=jg(t);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class wo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Pa{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Oa.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Pa(ee.min(),i,new Ne(de),$t(),fe())}}class Oa{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Oa(r,t,fe(),fe(),fe())}}/**
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
 */class Tc{constructor(e,t,r,i){this.Pt=e,this.removedTargetIds=t,this.key=r,this.bt=i}}class YI{constructor(e,t){this.targetId=e,this.Vt=t}}class JI{constructor(e,t,r=et.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class zg{constructor(){this.St=0,this.Dt=Gg(),this.Ct=et.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=fe(),t=fe(),r=fe();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:W()}}),new Oa(this.Ct,this.xt,e,t,r)}Ft(){this.Nt=!1,this.Dt=Gg()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class PD{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=$t(),this.zt=Kg(),this.Wt=new Ne(de)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,t=>{const r=this.Zt(t);switch(e.state){case 0:this.te(t)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(t);break;case 3:this.te(t)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),r.$t(e.resumeToken));break;default:W()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach((r,i)=>{this.te(i)&&t(i)})}ne(e){var t;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(tu(o))if(i===0){const a=new j(o.path);this.Yt(r,a,De.newNoDocument(a,ee.min()))}else te(i===1);else{const a=this.ie(r);if(a!==i){const c=this.re(e,a);if(c!==0){this.ee(r);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(t=Bf.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(u,l,h){var d,f,m,p,y,_;const S={localCacheCount:l,existenceFilterCount:h.count},L=h.unchangedNames;return L&&(S.bloomFilter={applied:u===0,hashCount:(d=L==null?void 0:L.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(p=(m=(f=L==null?void 0:L.bits)===null||f===void 0?void 0:f.bitmap)===null||m===void 0?void 0:m.length)!==null&&p!==void 0?p:0,padding:(_=(y=L==null?void 0:L.bits)===null||y===void 0?void 0:y.padding)!==null&&_!==void 0?_:0}),S}(c,a,e.Vt))}}}}re(e,t){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let c,u;try{c=Ar(s).toUint8Array()}catch(l){if(l instanceof II)return dn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw l}try{u=new $f(c,o,a)}catch(l){return dn(l instanceof wo?"BloomFilter error: ":"Applying bloom filter failed: ",l),1}return u.It===0?1:i!==t-this.oe(e.targetId,u)?2:0}oe(e,t){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const t=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&tu(a.target)){const c=new j(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,De.newNoDocument(c,e))}s.Mt&&(t.set(o,s.Ot()),s.Ft())}});let r=fe();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.se(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new Pa(e,t,this.Wt,this.jt,r);return this.jt=$t(),this.zt=Kg(),this.Wt=new Ne(de),i}Jt(e,t){if(!this.te(e))return;const r=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,r),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,t)?i.Bt(t,1):i.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),r&&(this.jt=this.jt.insert(t,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new zg,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new Pe(de),this.zt=this.zt.insert(e,t)),t}te(e){const t=this.se(e)!==null;return t||P("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new zg),this.Gt.getRemoteKeysForTarget(e).forEach(t=>{this.Yt(e,t,null)})}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function Kg(){return new Ne(j.comparator)}function Gg(){return new Ne(j.comparator)}const OD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),MD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),LD=(()=>({and:"AND",or:"OR"}))();class FD{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Yh(n,e){return n.useProto3Json||ka(e)?e:{value:e}}function Is(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function XI(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function UD(n,e){return Is(n,e.toTimestamp())}function Ge(n){return te(!!n),ee.fromTimestamp(function(e){const t=Cr(e);return new Fe(t.seconds,t.nanos)}(n))}function qf(n,e){return function(t){return new we(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function ZI(n){const e=we.fromString(n);return te(cb(e)),e}function sa(n,e){return qf(n.databaseId,e.path)}function Nn(n,e){const t=ZI(e);if(t.get(1)!==n.databaseId.projectId)throw new R(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new R(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new j(tb(t))}function Jh(n,e){return qf(n.databaseId,e)}function eb(n){const e=ZI(n);return e.length===4?we.emptyPath():tb(e)}function oa(n){return new we(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function tb(n){return te(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Hg(n,e,t){return{name:sa(n,e),fields:t.value.mapValue.fields}}function nb(n,e,t){const r=Nn(n,e.name),i=Ge(e.updateTime),s=e.createTime?Ge(e.createTime):ee.min(),o=new mt({mapValue:{fields:e.fields}}),a=De.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function VD(n,e){return"found"in e?function(t,r){te(!!r.found),r.found.name,r.found.updateTime;const i=Nn(t,r.found.name),s=Ge(r.found.updateTime),o=r.found.createTime?Ge(r.found.createTime):ee.min(),a=new mt({mapValue:{fields:r.found.fields}});return De.newFoundDocument(i,s,o,a)}(n,e):"missing"in e?function(t,r){te(!!r.missing),te(!!r.readTime);const i=Nn(t,r.missing),s=Ge(r.readTime);return De.newNoDocument(i,s)}(n,e):W()}function BD(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.useProto3Json?(te(u===void 0||typeof u=="string"),et.fromBase64String(u||"")):(te(u===void 0||u instanceof Uint8Array),et.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?T.UNKNOWN:WI(c.code);return new R(u,c.message||"")}(o);t=new JI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Nn(n,r.document.name),s=Ge(r.document.updateTime),o=r.document.createTime?Ge(r.document.createTime):ee.min(),a=new mt({mapValue:{fields:r.document.fields}}),c=De.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new Tc(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Nn(n,r.document),s=r.readTime?Ge(r.readTime):ee.min(),o=De.newNoDocument(i,s),a=r.removedTargetIds||[];t=new Tc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Nn(n,r.document),s=r.removedTargetIds||[];t=new Tc([],s,i,null)}else{if(!("filter"in e))return W();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new xD(i,s),a=r.targetId;t=new YI(a,o)}}return t}function aa(n,e){let t;if(e instanceof $s)t={update:Hg(n,e.key,e.value)};else if(e instanceof qs)t={delete:sa(n,e.key)};else if(e instanceof tr)t={update:Hg(n,e.key,e.data),updateMask:GD(e.fieldMask)};else{if(!(e instanceof Lf))return W();t={verify:sa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ws)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof _i)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ii)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof _s)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw W()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:UD(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:W()}(n,e.precondition)),t}function Xh(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?Le.updateTime(Ge(i.updateTime)):i.exists!==void 0?Le.exists(i.exists):Le.none()}(e.currentDocument):Le.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)te(o.setToServerValue==="REQUEST_TIME"),a=new ws;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new _i(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new Ii(u)}else"increment"in o?a=new _s(s,o.increment):W();const c=Ke.fromServerFormat(o.fieldPath);return new Da(c,a)}(n,i)):[];if(e.update){e.update.name;const i=Nn(n,e.update.name),s=new mt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Bt(c.map(u=>Ke.fromServerFormat(u)))}(e.updateMask);return new tr(i,s,o,t,r)}return new $s(i,s,t,r)}if(e.delete){const i=Nn(n,e.delete);return new qs(i,t)}if(e.verify){const i=Nn(n,e.verify);return new Lf(i,t)}return W()}function $D(n,e){return n&&n.length>0?(te(e!==void 0),n.map(t=>function(r,i){let s=r.updateTime?Ge(r.updateTime):Ge(i);return s.isEqual(ee.min())&&(s=Ge(i)),new kD(s,r.transformResults||[])}(t,e))):[]}function rb(n,e){return{documents:[Jh(n,e.path)]}}function ib(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=Jh(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Jh(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return ab(Ce.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:ji(l.field),direction:jD(l.dir)}}(u))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=Yh(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function sb(n){let e=eb(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){te(r===1);const l=t.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];t.where&&(s=function(l){const h=ob(l);return h instanceof Ce&&Df(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new ss(zi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,ka(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Nr(d,h)}(t.startAt));let u=null;return t.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Nr(d,h)}(t.endAt)),xI(e,i,o,s,a,"F",c,u)}function qD(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ob(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=zi(e.unaryFilter.field);return ge.create(t,"==",{doubleValue:NaN});case"IS_NULL":const r=zi(e.unaryFilter.field);return ge.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=zi(e.unaryFilter.field);return ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=zi(e.unaryFilter.field);return ge.create(s,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(n):n.fieldFilter!==void 0?function(e){return ge.create(zi(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ce.create(e.compositeFilter.filters.map(t=>ob(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return W()}}(e.compositeFilter.op))}(n):W()}function jD(n){return OD[n]}function zD(n){return MD[n]}function KD(n){return LD[n]}function ji(n){return{fieldPath:n.canonicalString()}}function zi(n){return Ke.fromServerFormat(n.fieldPath)}function ab(n){return n instanceof ge?function(e){if(e.op==="=="){if(Ng(e.value))return{unaryFilter:{field:ji(e.field),op:"IS_NAN"}};if(Rg(e.value))return{unaryFilter:{field:ji(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ng(e.value))return{unaryFilter:{field:ji(e.field),op:"IS_NOT_NAN"}};if(Rg(e.value))return{unaryFilter:{field:ji(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ji(e.field),op:zD(e.op),value:e.value}}}(n):n instanceof Ce?function(e){const t=e.getFilters().map(r=>ab(r));return t.length===1?t[0]:{compositeFilter:{op:KD(e.op),filters:t}}}(n):W()}function GD(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function cb(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class qn{constructor(e,t,r,i,s=ee.min(),o=ee.min(),a=et.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class ub{constructor(e){this.fe=e}}function HD(n,e){let t;if(e.document)t=nb(n.fe,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=j.fromSegments(e.noDocument.path),i=Ei(e.noDocument.readTime);t=De.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return W();{const r=j.fromSegments(e.unknownDocument.path),i=Ei(e.unknownDocument.version);t=De.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(r){const i=new Fe(r[0],r[1]);return ee.fromTimestamp(i)}(e.readTime)),t}function Wg(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:iu(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:sa(i,s.key),fields:s.data.value.mapValue.fields,updateTime:Is(i,s.version.toTimestamp()),createTime:Is(i,s.createTime.toTimestamp())}}(n.fe,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:bi(e.version)};else{if(!e.isUnknownDocument())return W();r.unknownDocument={path:t.path.toArray(),version:bi(e.version)}}return r}function iu(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function bi(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ei(n){const e=new Fe(n.seconds,n.nanoseconds);return ee.fromTimestamp(e)}function Jr(n,e){const t=(e.baseMutations||[]).map(s=>Xh(n.fe,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Xh(n.fe,s)),i=Fe.fromMillis(e.localWriteTimeMs);return new Ff(e.batchId,i,t,r)}function _o(n){const e=Ei(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Ei(n.lastLimboFreeSnapshotVersion):ee.min();let r;var i;return n.query.documents!==void 0?(te((i=n.query).documents.length===1),r=jt(Bs(eb(i.documents[0])))):r=function(s){return jt(sb(s))}(n.query),new qn(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,et.fromBase64String(n.resumeToken))}function lb(n,e){const t=bi(e.snapshotVersion),r=bi(e.lastLimboFreeSnapshotVersion);let i;i=tu(e.target)?rb(n.fe,e.target):ib(n.fe,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:wi(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function jf(n){const e=sb({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ru(e,e.limit,"L"):e}function Jl(n,e){return new Vf(e.largestBatchId,Xh(n.fe,e.overlayMutation))}function Qg(n,e){const t=e.path.lastSegment();return[n,Ot(e.path.popLast()),t]}function Yg(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:bi(r.readTime),documentKey:Ot(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{getBundleMetadata(e,t){return Jg(e).get(t).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Ei(i.createTime),version:i.version};var i})}saveBundleMetadata(e,t){return Jg(e).put({bundleId:(r=t).id,createTime:bi(Ge(r.createTime)),version:r.version});var r}getNamedQuery(e,t){return Xg(e).get(t).next(r=>{if(r)return{name:(i=r).name,query:jf(i.bundledQuery),readTime:Ei(i.readTime)};var i})}saveNamedQuery(e,t){return Xg(e).put(function(r){return{name:r.name,readTime:bi(Ge(r.readTime)),bundledQuery:r.bundledQuery}}(t))}}function Jg(n){return lt(n,"bundles")}function Xg(n){return lt(n,"namedQueries")}/**
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
 */class sl{constructor(e,t){this.serializer=e,this.userId=t}static de(e,t){const r=t.uid||"";return new sl(e,r)}getOverlay(e,t){return ro(e).get(Qg(this.userId,t)).next(r=>r?Jl(this.serializer,r):null)}getOverlays(e,t){const r=An();return E.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new Vf(t,o);i.push(this.we(e,a))}),E.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Ot(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(ro(e).J("collectionPathOverlayIndex",a))}),E.waitFor(s)}getOverlaysForCollection(e,t,r){const i=An(),s=Ot(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ro(e).j("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=Jl(this.serializer,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=An();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ro(e).X({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=Jl(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}we(e,t){return ro(e).put(function(r,i,s){const[o,a,c]=Qg(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:c,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:aa(r.fe,s.mutation)}}(this.serializer,this.userId,t))}}function ro(n){return lt(n,"documentOverlays")}/**
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
 */class Xr{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe($e(e.integerValue));else if("doubleValue"in e){const r=$e(e.doubleValue);isNaN(r)?this.ye(t,13):(this.ye(t,15),ta(r)?t.pe(0):t.pe(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ye(t,20),typeof r=="string"?t.Ie(r):(t.Ie(`${r.seconds||""}`),t.pe(r.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(Ar(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ye(t,45),t.pe(r.latitude||0),t.pe(r.longitude||0)}else"mapValue"in e?bI(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):W()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const r=e.fields||{};this.ye(t,55);for(const i of Object.keys(r))this.Te(i,t),this.me(r[i],t)}Pe(e,t){const r=e.values||[];this.ye(t,50);for(const i of r)this.me(i,t)}ve(e,t){this.ye(t,37),j.fromName(e).path.forEach(r=>{this.ye(t,60),this.be(r,t)})}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}Xr.Ve=new Xr;function QD(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Zg(n){const e=64-function(t){let r=0;for(let i=0;i<8;++i){const s=QD(255&t[i]);if(r+=s,s!==8)break}return r}(n);return Math.ceil(e/8)}class YD{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.De(r.value),r=t.next();this.Ce()}xe(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ne(r.value),r=t.next();this.ke()}Me(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.De(r);else if(r<2048)this.De(960|r>>>6),this.De(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.De(480|r>>>12),this.De(128|63&r>>>6),this.De(128|63&r);else{const i=t.codePointAt(0);this.De(240|i>>>18),this.De(128|63&i>>>12),this.De(128|63&i>>>6),this.De(128|63&i)}}this.Ce()}$e(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ne(r);else if(r<2048)this.Ne(960|r>>>6),this.Ne(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ne(480|r>>>12),this.Ne(128|63&r>>>6),this.Ne(128|63&r);else{const i=t.codePointAt(0);this.Ne(240|i>>>18),this.Ne(128|63&i>>>12),this.Ne(128|63&i>>>6),this.Ne(128|63&i)}}this.ke()}Oe(e){const t=this.Fe(e),r=Zg(t);this.Be(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Le(e){const t=this.Fe(e),r=Zg(t);this.Be(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const t=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}De(e){const t=255&e;t===0?(this.Ue(0),this.Ue(255)):t===255?(this.Ue(255),this.Ue(0)):this.Ue(t)}Ne(e){const t=255&e;t===0?(this.Ge(0),this.Ge(255)):t===255?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class JD{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class XD{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class io{constructor(){this.je=new YD,this.ze=new JD(this.je),this.We=new XD(this.je)}seed(e){this.je.seed(e)}He(e){return e===0?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}/**
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
 */class Zr{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Je(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Zr(this.indexId,this.documentKey,this.arrayValue,r)}}function or(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=ey(n.arrayValue,e.arrayValue),t!==0?t:(t=ey(n.directionalValue,e.directionalValue),t!==0?t:j.comparator(n.documentKey,e.documentKey)))}function ey(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class ZD{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const t of e.filters){const r=t;r.isInequality()?this.Ze=r:this.Xe.push(r)}}tn(e){te(e.collectionGroup===this.collectionId);const t=$h(e);if(t!==void 0&&!this.en(t))return!1;const r=Hr(e);let i=0,s=0;for(;i<r.length&&this.en(r[i]);++i);if(i===r.length)return!0;if(this.Ze!==void 0){const o=r[i];if(!this.nn(this.Ze,o)||!this.sn(this.Ye[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Ye.length||!this.sn(this.Ye[s++],o))return!1}return!0}en(e){for(const t of this.Xe)if(this.nn(t,e))return!0;return!1}nn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function hb(n){var e,t;if(te(n instanceof ge||n instanceof Ce),n instanceof ge){if(n instanceof NI){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>ge.create(n.field,"==",s)))||[];return Ce.create(i,"or")}return n}const r=n.filters.map(i=>hb(i));return Ce.create(r,n.op)}function eP(n){if(n.getFilters().length===0)return[];const e=td(hb(n));return te(db(e)),Zh(e)||ed(e)?[e]:e.getFilters()}function Zh(n){return n instanceof ge}function ed(n){return n instanceof Ce&&Df(n)}function db(n){return Zh(n)||ed(n)||function(e){if(e instanceof Ce&&Kh(e)){for(const t of e.getFilters())if(!Zh(t)&&!ed(t))return!1;return!0}return!1}(n)}function td(n){if(te(n instanceof ge||n instanceof Ce),n instanceof ge)return n;if(n.filters.length===1)return td(n.filters[0]);const e=n.filters.map(r=>td(r));let t=Ce.create(e,n.op);return t=su(t),db(t)?t:(te(t instanceof Ce),te(vs(t)),te(t.filters.length>1),t.filters.reduce((r,i)=>zf(r,i)))}function zf(n,e){let t;return te(n instanceof ge||n instanceof Ce),te(e instanceof ge||e instanceof Ce),t=n instanceof ge?e instanceof ge?function(r,i){return Ce.create([r,i],"and")}(n,e):ty(n,e):e instanceof ge?ty(e,n):function(r,i){if(te(r.filters.length>0&&i.filters.length>0),vs(r)&&vs(i))return AI(r,i.getFilters());const s=Kh(r)?r:i,o=Kh(r)?i:r,a=s.filters.map(c=>zf(c,o));return Ce.create(a,"or")}(n,e),su(t)}function ty(n,e){if(vs(e))return AI(e,n.getFilters());{const t=e.filters.map(r=>zf(n,r));return Ce.create(t,"or")}}function su(n){if(te(n instanceof ge||n instanceof Ce),n instanceof ge)return n;const e=n.getFilters();if(e.length===1)return su(e[0]);if(SI(n))return n;const t=e.map(i=>su(i)),r=[];return t.forEach(i=>{i instanceof ge?r.push(i):i instanceof Ce&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:Ce.create(r,n.op)}/**
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
 */class tP{constructor(){this.rn=new Kf}addToCollectionParentIndex(e,t){return this.rn.add(t),E.resolve()}getCollectionParents(e,t){return E.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return E.resolve()}deleteFieldIndex(e,t){return E.resolve()}getDocumentsMatchingTarget(e,t){return E.resolve(null)}getIndexType(e,t){return E.resolve(0)}getFieldIndexes(e,t){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,t){return E.resolve(Ht.min())}getMinOffsetFromCollectionGroup(e,t){return E.resolve(Ht.min())}updateCollectionGroup(e,t,r){return E.resolve()}updateIndexEntries(e,t){return E.resolve()}}class Kf{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Pe(we.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Pe(we.comparator)).toArray()}}/**
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
 */const rc=new Uint8Array(0);class nP{constructor(e,t){this.user=e,this.databaseId=t,this.on=new Kf,this.un=new Br(r=>wi(r),(r,i)=>Ra(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.on.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.on.add(t)});const s={collectionId:r,parent:Ot(i)};return ny(e).put(s)}return E.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[uI(t),""],!1,!0);return ny(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(Cn(o.parent))}return r})}addFieldIndex(e,t){const r=ic(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=oo(e);return s.next(a=>{o.put(Yg(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=ic(e),i=oo(e),s=so(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const r=so(e);let i=!0;const s=new Map;return E.forEach(this.cn(t),o=>this.an(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=fe();const a=[];return E.forEach(s,(c,u)=>{var l;P("IndexedDbIndexManager",`Using index ${l=c,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(L=>`${L.fieldPath}:${L.kind}`).join(",")}`} to execute ${wi(t)}`);const h=function(L,x){const le=$h(x);if(le===void 0)return null;for(const N of nu(L,le.fieldPath))switch(N.op){case"array-contains-any":return N.value.arrayValue.values||[];case"array-contains":return[N.value]}return null}(u,c),d=function(L,x){const le=new Map;for(const N of Hr(x))for(const be of nu(L,N.fieldPath))switch(be.op){case"==":case"in":le.set(N.fieldPath.canonicalString(),be.value);break;case"not-in":case"!=":return le.set(N.fieldPath.canonicalString(),be.value),Array.from(le.values())}return null}(u,c),f=function(L,x){const le=[];let N=!0;for(const be of Hr(x)){const oe=be.kind===0?Mg(L,be.fieldPath,L.startAt):Lg(L,be.fieldPath,L.startAt);le.push(oe.value),N&&(N=oe.inclusive)}return new Nr(le,N)}(u,c),m=function(L,x){const le=[];let N=!0;for(const be of Hr(x)){const oe=be.kind===0?Lg(L,be.fieldPath,L.endAt):Mg(L,be.fieldPath,L.endAt);le.push(oe.value),N&&(N=oe.inclusive)}return new Nr(le,N)}(u,c),p=this.hn(c,u,f),y=this.hn(c,u,m),_=this.ln(c,u,d),S=this.fn(c.indexId,h,p,f.inclusive,y,m.inclusive,_);return E.forEach(S,L=>r.H(L,t.limit).next(x=>{x.forEach(le=>{const N=j.fromSegments(le.documentKey);o.has(N)||(o=o.add(N),a.push(N))})}))}).next(()=>a)}return E.resolve(null)})}cn(e){let t=this.un.get(e);return t||(e.filters.length===0?t=[e]:t=eP(Ce.create(e.filters,"and")).map(r=>Hh(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,t),t)}fn(e,t,r,i,s,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,s.length),u=c/(t!=null?t.length:1),l=[];for(let h=0;h<c;++h){const d=t?this.dn(t[h/u]):rc,f=this.wn(e,d,r[h%u],i),m=this._n(e,d,s[h%u],o),p=a.map(y=>this.wn(e,d,y,!0));l.push(...this.createRange(f,m,p))}return l}wn(e,t,r,i){const s=new Zr(e,j.empty(),t,r);return i?s:s.Je()}_n(e,t,r,i){const s=new Zr(e,j.empty(),t,r);return i?s.Je():s}an(e,t){const r=new ZD(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.cn(t);return E.forEach(i,s=>this.an(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let c=new Pe(Ke.comparator),u=!1;for(const l of a.filters)for(const h of l.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?u=!0:c=c.add(h.field));for(const l of a.orderBy)l.field.isKeyField()||(c=c.add(l.field));return c.size+(u?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(t)&&i.length>1&&r===2?1:r)}mn(e,t){const r=new io;for(const i of Hr(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.He(i.kind);Xr.Ve._e(s,o)}return r.Qe()}dn(e){const t=new io;return Xr.Ve._e(e,t.He(0)),t.Qe()}gn(e,t){const r=new io;return Xr.Ve._e(vi(this.databaseId,t),r.He(function(i){const s=Hr(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Qe()}ln(e,t,r){if(r===null)return[];let i=[];i.push(new io);let s=0;for(const o of Hr(e)){const a=r[s++];for(const c of i)if(this.yn(t,o.fieldPath)&&ia(a))i=this.pn(i,o,a);else{const u=c.He(o.kind);Xr.Ve._e(a,u)}}return this.In(i)}hn(e,t,r){return this.ln(e,t,r.position)}In(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Qe();return t}pn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new io;c.seed(a.Qe()),Xr.Ve._e(o,c.He(t.kind)),s.push(c)}return s}yn(e,t){return!!e.filters.find(r=>r instanceof ge&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=ic(e),i=oo(e);return(t?r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.j()).next(s=>{const o=[];return E.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new eu(l.sequenceNumber,new Ht(Ei(l.readTime),new j(Cn(l.documentKey)),l.largestBatchId)):eu.empty(),d=u.fields.map(([f,m])=>new Ux(Ke.fromServerFormat(f),m));return new lI(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:de(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=ic(e),s=oo(e);return this.Tn(e).next(o=>i.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>E.forEach(a,c=>s.put(Yg(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return E.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?E.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),E.forEach(a,c=>this.En(e,i,c).next(u=>{const l=this.An(s,c);return u.isEqual(l)?E.resolve():this.vn(e,s,c,u,l)}))))})}Rn(e,t,r,i){return so(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.gn(r,t.key),documentKey:t.key.path.toArray()})}Pn(e,t,r,i){return so(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.gn(r,t.key),t.key.path.toArray()])}En(e,t,r){const i=so(e);let s=new Pe(or);return i.X({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.gn(r,t)])},(o,a)=>{s=s.add(new Zr(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}An(e,t){let r=new Pe(or);const i=this.mn(t,e);if(i==null)return r;const s=$h(t);if(s!=null){const o=e.data.field(s.fieldPath);if(ia(o))for(const a of o.arrayValue.values||[])r=r.add(new Zr(t.indexId,e.key,this.dn(a),i))}else r=r.add(new Zr(t.indexId,e.key,rc,i));return r}vn(e,t,r,i,s){P("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,c,u,l,h){const d=a.getIterator(),f=c.getIterator();let m=Vi(d),p=Vi(f);for(;m||p;){let y=!1,_=!1;if(m&&p){const S=u(m,p);S<0?_=!0:S>0&&(y=!0)}else m!=null?_=!0:y=!0;y?(l(p),p=Vi(f)):_?(h(m),m=Vi(d)):(m=Vi(d),p=Vi(f))}}(i,s,or,a=>{o.push(this.Rn(e,t,r,a))},a=>{o.push(this.Pn(e,t,r,a))}),E.waitFor(o)}Tn(e){let t=1;return oo(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>or(o,a)).filter((o,a,c)=>!a||or(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=or(o,e),c=or(o,t);if(a===0)i[0]=e.Je();else if(a>0&&c<0)i.push(o),i.push(o.Je());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,rc,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,rc,[]];s.push(IDBKeyRange.bound(a,c))}return s}bn(e,t){return or(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(ry)}getMinOffset(e,t){return E.mapArray(this.cn(t),r=>this.an(e,r).next(i=>i||W())).next(ry)}}function ny(n){return lt(n,"collectionParents")}function so(n){return lt(n,"indexEntries")}function ic(n){return lt(n,"indexConfiguration")}function oo(n){return lt(n,"indexState")}function ry(n){te(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Rf(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Ht(e.readTime,e.documentKey,t)}/**
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
 */const iy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ft{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Ft(e,Ft.DEFAULT_COLLECTION_PERCENTILE,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.X({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{te(a===1)}));const u=[];for(const l of t.mutations){const h=gI(e,l.key.path,t.batchId);s.push(i.delete(h)),u.push(l.key)}return E.waitFor(s).next(()=>u)}function ou(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw W();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */Ft.DEFAULT_COLLECTION_PERCENTILE=10,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ft.DEFAULT=new Ft(41943040,Ft.DEFAULT_COLLECTION_PERCENTILE,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ft.DISABLED=new Ft(-1,0,0);class ol{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Vn={}}static de(e,t,r,i){te(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new ol(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ar(e).X({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=Ki(e),o=ar(e);return o.add({}).next(a=>{te(typeof a=="number");const c=new Ff(a,t,r,i),u=function(d,f,m){const p=m.baseMutations.map(_=>aa(d.fe,_)),y=m.mutations.map(_=>aa(d.fe,_));return{userId:f,batchId:m.batchId,localWriteTimeMs:m.localWriteTime.toMillis(),baseMutations:p,mutations:y}}(this.serializer,this.userId,c),l=[];let h=new Pe((d,f)=>de(d.canonicalString(),f.canonicalString()));for(const d of i){const f=gI(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(f,zx))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Vn[a]=c.keys()}),E.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return ar(e).get(t).next(r=>r?(te(r.userId===this.userId),Jr(this.serializer,r)):null)}Sn(e,t){return this.Vn[t]?E.resolve(this.Vn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Vn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return ar(e).X({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(te(a.batchId>=r),s=Jr(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return ar(e).X({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ar(e).j("userMutationsIndex",t).next(r=>r.map(i=>Jr(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=_c(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return Ki(e).X({range:i},(o,a,c)=>{const[u,l,h]=o,d=Cn(l);if(u===this.userId&&t.path.isEqual(d))return ar(e).get(h).next(f=>{if(!f)throw W();te(f.userId===this.userId),s.push(Jr(this.serializer,f))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Pe(de);const i=[];return t.forEach(s=>{const o=_c(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=Ki(e).X({range:a},(u,l,h)=>{const[d,f,m]=u,p=Cn(f);d===this.userId&&s.path.isEqual(p)?r=r.add(m):h.done()});i.push(c)}),E.waitFor(i).next(()=>this.Dn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=_c(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Pe(de);return Ki(e).X({range:o},(c,u,l)=>{const[h,d,f]=c,m=Cn(d);h===this.userId&&r.isPrefixOf(m)?m.length===i&&(a=a.add(f)):l.done()}).next(()=>this.Dn(e,a))}Dn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(ar(e).get(s).next(o=>{if(o===null)throw W();te(o.userId===this.userId),r.push(Jr(this.serializer,o))}))}),E.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return fb(e.ht,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Cn(t.batchId)}),E.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return E.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return Ki(e).X({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=Cn(s[1]);i.push(c)}else a.done()}).next(()=>{te(i.length===0)})})}containsKey(e,t){return pb(e,this.userId,t)}xn(e){return mb(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function pb(n,e,t){const r=_c(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Ki(n).X({range:s,Y:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function ar(n){return lt(n,"mutations")}function Ki(n){return lt(n,"documentMutations")}function mb(n){return lt(n,"mutationQueues")}/**
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
 */class Ti{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Ti(0)}static Mn(){return new Ti(-1)}}/**
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
 */class rP{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.$n(e).next(t=>{const r=new Ti(t.highestTargetId);return t.highestTargetId=r.next(),this.On(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.$n(e).next(t=>ee.fromTimestamp(new Fe(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.$n(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.$n(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.On(e,i)))}addTargetData(e,t){return this.Fn(e,t).next(()=>this.$n(e).next(r=>(r.targetCount+=1,this.Bn(t,r),this.On(e,r))))}updateTargetData(e,t){return this.Fn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Bi(e).delete(t.targetId)).next(()=>this.$n(e)).next(r=>(te(r.targetCount>0),r.targetCount-=1,this.On(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return Bi(e).X((o,a)=>{const c=_o(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>E.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Bi(e).X((r,i)=>{const s=_o(i);t(s)})}$n(e){return sy(e).get("targetGlobalKey").next(t=>(te(t!==null),t))}On(e,t){return sy(e).put("targetGlobalKey",t)}Fn(e,t){return Bi(e).put(lb(this.serializer,t))}Bn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.$n(e).next(t=>t.targetCount)}getTargetData(e,t){const r=wi(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Bi(e).X({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=_o(a);Ra(t,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=dr(e);return t.forEach(o=>{const a=Ot(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),E.waitFor(i)}removeMatchingKeys(e,t,r){const i=dr(e);return E.forEach(t,s=>{const o=Ot(s.path);return E.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=dr(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=dr(e);let s=fe();return i.X({range:r,Y:!0},(o,a,c)=>{const u=Cn(o[1]),l=new j(u);s=s.add(l)}).next(()=>s)}containsKey(e,t){const r=Ot(t.path),i=IDBKeyRange.bound([r],[uI(r)],!1,!0);let s=0;return dr(e).X({index:"documentTargetsIndex",Y:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}le(e,t){return Bi(e).get(t).next(r=>r?_o(r):null)}}function Bi(n){return lt(n,"targets")}function sy(n){return lt(n,"targetGlobal")}function dr(n){return lt(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy([n,e],[t,r]){const i=de(n,t);return i===0?de(e,r):i}class iP{constructor(e){this.Ln=e,this.buffer=new Pe(oy),this.qn=0}Un(){return++this.qn}Kn(e){const t=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();oy(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class sP{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}Qn(e){P("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Vr(t)?P("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Ur(t)}await this.Qn(3e5)})}}class oP{constructor(e,t){this.jn=e,this.params=t}calculateTargetCount(e,t){return this.jn.zn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return E.resolve(Vt.ct);const r=new iP(t);return this.jn.forEachTarget(e,i=>r.Kn(i.sequenceNumber)).next(()=>this.jn.Wn(e,i=>r.Kn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(P("LruGarbageCollector","Garbage collection skipped; disabled"),E.resolve(iy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(P("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),iy):this.Hn(e,t))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,t){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(P("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),Bh()<=ve.DEBUG&&P("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),E.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function aP(n,e){return new oP(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e,t){this.db=e,this.garbageCollector=aP(this,t)}zn(e){const t=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Jn(e){let t=0;return this.Wn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Wn(e,t){return this.Yn(e,(r,i)=>t(i))}addReference(e,t,r){return sc(e,r)}removeReference(e,t,r){return sc(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return sc(e,t)}Xn(e,t){return function(r,i){let s=!1;return mb(r).Z(o=>pb(r,o,i).next(a=>(a&&(s=!0),E.resolve(!a)))).next(()=>s)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Yn(e,(o,a)=>{if(a<=t){const c=this.Xn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,ee.min()),dr(e).delete([0,Ot(o.path)])))});i.push(c)}}).next(()=>E.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return sc(e,t)}Yn(e,t){const r=dr(e);let i,s=Vt.ct;return r.X({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==Vt.ct&&t(new j(Cn(i)),s),s=u,i=c):s=Vt.ct}).next(()=>{s!==Vt.ct&&t(new j(Cn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function sc(n,e){return dr(n).put(function(t,r){return{targetId:0,path:Ot(t.path),sequenceNumber:r}}(e,n.currentSequenceNumber))}/**
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
 */class gb{constructor(){this.changes=new Br(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,De.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?E.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class uP{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Kr(e).put(r)}removeEntry(e,t,r){return Kr(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],iu(s),o[o.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Zn(e,r)))}getEntry(e,t){let r=De.newInvalidDocument(t);return Kr(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(ao(t))},(i,s)=>{r=this.ts(t,s)}).next(()=>r)}es(e,t){let r={size:0,document:De.newInvalidDocument(t)};return Kr(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(ao(t))},(i,s)=>{r={document:this.ts(t,s),size:ou(s)}}).next(()=>r)}getEntries(e,t){let r=$t();return this.ns(e,t,(i,s)=>{const o=this.ts(i,s);r=r.insert(i,o)}).next(()=>r)}ss(e,t){let r=$t(),i=new Ne(j.comparator);return this.ns(e,t,(s,o)=>{const a=this.ts(s,o);r=r.insert(s,a),i=i.insert(s,ou(o))}).next(()=>({documents:r,rs:i}))}ns(e,t,r){if(t.isEmpty())return E.resolve();let i=new Pe(uy);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(ao(i.first()),ao(i.last())),o=i.getIterator();let a=o.getNext();return Kr(e).X({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=j.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&uy(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.G(ao(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i){const s=t.path,o=[s.popLast().toArray(),s.lastSegment(),iu(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Kr(e).j(IDBKeyRange.bound(o,a,!0)).next(c=>{let u=$t();for(const l of c){const h=this.ts(j.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);h.isFoundDocument()&&(xa(t,h)||i.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,t,r,i){let s=$t();const o=cy(t,r),a=cy(t,Ht.max());return Kr(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.ts(j.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new lP(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return ay(e).get("remoteDocumentGlobalKey").next(t=>(te(!!t),t))}Zn(e,t){return ay(e).put("remoteDocumentGlobalKey",t)}ts(e,t){if(t){const r=HD(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(ee.min())))return r}return De.newInvalidDocument(e)}}function yb(n){return new uP(n)}class lP extends gb{constructor(e,t){super(),this.os=e,this.trackRemovals=t,this.us=new Br(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new Pe((s,o)=>de(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.us.get(s);if(t.push(this.os.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=Wg(this.os.serializer,o);i=i.add(s.path.popLast());const u=ou(c);r+=u-a.size,t.push(this.os.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=Wg(this.os.serializer,o.convertToNoDocument(ee.min()));t.push(this.os.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.os.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.os.updateMetadata(e,r)),E.waitFor(t)}getFromCache(e,t){return this.os.es(e,t).next(r=>(this.us.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.os.ss(e,t).next(({documents:r,rs:i})=>(i.forEach((s,o)=>{this.us.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function ay(n){return lt(n,"remoteDocumentGlobal")}function Kr(n){return lt(n,"remoteDocumentsV14")}function ao(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function cy(n,e){const t=e.documentKey.path.toArray();return[n,iu(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function uy(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=de(t[s],r[s]),i)return i;return i=de(t.length,r.length),i||(i=de(t[t.length-2],r[r.length-2]),i||de(t[t.length-1],r[r.length-1]))}/**
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
 */class hP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class vb{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&xo(r.mutation,i,Bt.empty(),Fe.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=fe()){const i=An();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=vo();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=An();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,fe()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=$t();const o=No(),a=No();return t.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof tr)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),xo(l.mutation,u,l.mutation.getFieldMask(),Fe.now())):o.set(u.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new hP(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=No();let i=new Ne((o,a)=>o-a),s=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||Bt.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||fe()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=FI();l.forEach(d=>{if(!s.has(d)){const f=KI(t.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return E.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(i){return j.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Of(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):E.resolve(An());let a=-1,c=s;return o.next(u=>E.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?E.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,fe())).next(l=>({batchId:a,changes:LI(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new j(t)).next(r=>{let i=vo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const i=t.collectionGroup;let s=vo();return this.indexManager.getCollectionParents(e,i).next(o=>E.forEach(o,a=>{const c=function(u,l){return new er(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i))).next(s=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,De.newInvalidDocument(u)))});let o=vo();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&xo(u.mutation,c,Bt.empty(),Fe.now()),xa(t,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return E.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var r;return this.cs.set(t.id,{id:(r=t).id,version:r.version,createTime:Ge(r.createTime)}),E.resolve()}getNamedQuery(e,t){return E.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(r){return{name:r.name,query:jf(r.bundledQuery),readTime:Ge(r.readTime)}}(t)),E.resolve()}}/**
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
 */class fP{constructor(){this.overlays=new Ne(j.comparator),this.ls=new Map}getOverlay(e,t){return E.resolve(this.overlays.get(t))}getOverlays(e,t){const r=An();return E.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.we(e,t,s)}),E.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),E.resolve()}getOverlaysForCollection(e,t,r){const i=An(),s=t.length+1,o=new j(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return E.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Ne((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=An(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=An(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return E.resolve(a)}we(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Vf(t,r));let s=this.ls.get(t);s===void 0&&(s=fe(),this.ls.set(t,s)),this.ls.set(t,s.add(r.key))}}/**
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
 */class Gf{constructor(){this.fs=new Pe(rt.ds),this.ws=new Pe(rt._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const r=new rt(e,t);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.ys(new rt(e,t))}ps(e,t){e.forEach(r=>this.removeReference(r,t))}Is(e){const t=new j(new we([])),r=new rt(t,e),i=new rt(t,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new j(new we([])),r=new rt(t,e),i=new rt(t,e+1);let s=fe();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new rt(e,0),r=this.fs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return j.comparator(e.key,t.key)||de(e.As,t.As)}static _s(e,t){return de(e.As,t.As)||j.comparator(e.key,t.key)}}/**
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
 */class pP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new Pe(rt.ds)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ff(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new rt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,t){return E.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.bs(r),s=i<0?0:i;return E.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new rt(t,0),i=new rt(t,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),E.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Pe(de);return t.forEach(i=>{const s=new rt(i,0),o=new rt(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),E.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;j.isDocumentKey(s)||(s=s.child(""));const o=new rt(new j(s),0);let a=new Pe(de);return this.Rs.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.As)),!0)},o),E.resolve(this.Vs(a))}Vs(e){const t=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){te(this.Ss(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return E.forEach(t.mutations,i=>{const s=new rt(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,t){const r=new rt(t,0),i=this.Rs.firstAfterOrEqual(r);return E.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}Ss(e,t){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class mP{constructor(e){this.Ds=e,this.docs=new Ne(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return E.resolve(r?r.document.mutableCopy():De.newInvalidDocument(t))}getEntries(e,t){let r=$t();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():De.newInvalidDocument(i))}),E.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=$t();const o=t.path,a=new j(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Rf(dI(l),r)<=0||(i.has(l.key)||xa(t,l))&&(s=s.insert(l.key,l.mutableCopy()))}return E.resolve(s)}getAllFromCollectionGroup(e,t,r,i){W()}Cs(e,t){return E.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new gP(this)}getSize(e){return E.resolve(this.size)}}class gP extends gb{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),E.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}/**
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
 */class yP{constructor(e){this.persistence=e,this.xs=new Br(t=>wi(t),Ra),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Gf,this.targetCount=0,this.Ms=Ti.kn()}forEachTarget(e,t){return this.xs.forEach((r,i)=>t(i)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Ns&&(this.Ns=t),E.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new Ti(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,E.resolve()}updateTargetData(e,t){return this.Fn(t),E.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),E.waitFor(s).next(()=>i)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,t){const r=this.xs.get(t)||null;return E.resolve(r)}addMatchingKeys(e,t,r){return this.ks.gs(t,r),E.resolve()}removeMatchingKeys(e,t,r){this.ks.ps(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),E.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),E.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ks.Es(t);return E.resolve(r)}containsKey(e,t){return E.resolve(this.ks.containsKey(t))}}/**
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
 */class wb{constructor(e,t){this.$s={},this.overlays={},this.Os=new Vt(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new yP(this),this.indexManager=new tP,this.remoteDocumentCache=function(r){return new mP(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new ub(t),this.qs=new dP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new fP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.$s[e.toKey()];return r||(r=new pP(t,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,r){P("MemoryPersistence","Starting transaction:",e);const i=new vP(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,t){return E.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,t)))}}class vP extends pI{constructor(e){super(),this.currentSequenceNumber=e}}class al{constructor(e){this.persistence=e,this.Qs=new Gf,this.js=null}static zs(e){return new al(e)}get Ws(){if(this.js)return this.js;throw W()}addReference(e,t,r){return this.Qs.addReference(r,t),this.Ws.delete(r.toString()),E.resolve()}removeReference(e,t,r){return this.Qs.removeReference(r,t),this.Ws.add(r.toString()),E.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),E.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Ws,r=>{const i=j.fromPath(r);return this.Hs(e,i).next(s=>{s||t.removeEntry(i,ee.min())})}).next(()=>(this.js=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hs(e,t).next(r=>{r?this.Ws.delete(t.toString()):this.Ws.add(t.toString())})}Ls(e){return 0}Hs(e,t){return E.or([()=>E.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e){this.serializer=e}O(e,t,r,i){const s=new el("createOrUpgrade",t);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Sg,{unique:!0}),a.createObjectStore("documentMutations")}(e),ly(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=E.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),ly(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ee.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").j().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Sg,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return E.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Ys(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(s)))),r<7&&i>=7&&(o=o.next(()=>this.Zs(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ei(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:nD});c.createIndex("collectionPathOverlayIndex",rD,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",iD,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:Kx});c.createIndex("documentKeyIndex",Gx),c.createIndex("collectionGroupIndex",Hx)}(e)).next(()=>this.ni(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:Xx}).createIndex("sequenceNumberIndex",Zx,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:eD}).createIndex("documentKeyIndex",tD,{unique:!1})}(e))),o}Xs(e){let t=0;return e.store("remoteDocuments").X((r,i)=>{t+=ou(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Ys(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.j().next(i=>E.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>E.forEach(a,c=>{te(c.userId===s.userId);const u=Jr(this.serializer,c);return fb(e,s.userId,u).next(()=>{})}))}))}Zs(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.X((o,a)=>{const c=new we(o),u=function(l){return[0,Ot(l)]}(c);s.push(t.get(u).next(l=>l?E.resolve():(h=>t.put({targetId:0,path:Ot(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>E.waitFor(s))})}ti(e,t){e.createObjectStore("collectionParents",{keyPath:Jx});const r=t.store("collectionParents"),i=new Kf,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Ot(c)})}};return t.store("remoteDocuments").X({Y:!0},(o,a)=>{const c=new we(o);return s(c.popLast())}).next(()=>t.store("documentMutations").X({Y:!0},([o,a,c],u)=>{const l=Cn(a);return s(l.popLast())}))}ei(e){const t=e.store("targets");return t.X((r,i)=>{const s=_o(i),o=lb(this.serializer,s);return t.put(o)})}ni(e,t){const r=t.store("remoteDocuments"),i=[];return r.X((s,o)=>{const a=t.store("remoteDocumentsV14"),c=(u=o,u.document?new j(we.fromString(u.document.name).popFirst(5)):u.noDocument?j.fromSegments(u.noDocument.path):u.unknownDocument?j.fromSegments(u.unknownDocument.path):W()).path.toArray();var u;/**
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
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(l))}).next(()=>E.waitFor(i))}si(e,t){const r=t.store("mutations"),i=yb(this.serializer),s=new wb(al.zs,this.serializer.fe);return r.j().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:fe();Jr(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),E.forEach(a,(c,u)=>{const l=new it(u),h=sl.de(this.serializer,l),d=s.getIndexManager(l),f=ol.de(l,this.serializer,d,s.referenceDelegate);return new vb(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new qh(t,Vt.ct),c).next()})})}}function ly(n){n.createObjectStore("targetDocuments",{keyPath:Qx}).createIndex("documentTargetsIndex",Yx,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Wx,{unique:!0}),n.createObjectStore("targetGlobal")}const Xl="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Hf{constructor(e,t,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ii=s,this.window=o,this.document=a,this.ri=u,this.oi=l,this.ui=h,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=d=>Promise.resolve(),!Hf.D())throw new R(T.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new cP(this,i),this.di=t+"main",this.serializer=new ub(c),this.wi=new on(this.di,this.ui,new wP(this.serializer)),this.Bs=new rP(this.referenceDelegate,this.serializer),this.remoteDocumentCache=yb(this.serializer),this.qs=new WD,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,l===!1&&ze("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new R(T.FAILED_PRECONDITION,Xl);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Bs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new Vt(e,this.ri)}).then(()=>{this.Fs=!0}).catch(e=>(this.wi&&this.wi.close(),Promise.reject(e)))}Ii(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>oc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(e).next(t=>{t||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(e)).next(t=>this.isPrimary&&!t?this.Ai(e).next(()=>!1):!!t&&this.vi(e).next(()=>!0))).catch(e=>{if(Vr(e))return P("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return P("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Ti(e){return co(e).get("owner").next(t=>E.resolve(this.Ri(t)))}Pi(e){return oc(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=lt(t,"clientMetadata");return r.j().next(i=>{const s=this.Si(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return E.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._i)for(const t of e)this._i.removeItem(this.Di(t.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?E.resolve(!0):co(e).get("owner").next(t=>{if(t!==null&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)){if(this.Ri(t)&&this.networkEnabled)return!0;if(!this.Ri(t)){if(!t.allowTabSynchronization)throw new R(T.FAILED_PRECONDITION,Xl);return!1}}return!(!this.networkEnabled||!this.inForeground)||oc(e).j().next(r=>this.Si(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&P("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new qh(e,Vt.ct);return this.Ai(t).next(()=>this.Pi(t))}),this.wi.close(),this.Mi()}Si(e,t){return e.filter(r=>this.Vi(r.updateTimeMs,t)&&!this.Ci(r.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>oc(e).j().next(t=>this.Si(t,18e5).map(r=>r.clientId)))}get started(){return this.Fs}getMutationQueue(e,t){return ol.de(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new nP(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return sl.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,t,r){P("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=(o=this.ui)===15?oD:o===14?wI:o===13?vI:o===12?sD:o===11?yI:void W();var o;let a;return this.wi.runTransaction(e,i,s,c=>(a=new qh(c,this.Os?this.Os.next():Vt.ct),t==="readwrite-primary"?this.Ti(a).next(u=>!!u||this.Ei(a)).next(u=>{if(!u)throw ze(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new R(T.FAILED_PRECONDITION,fI);return r(a)}).next(u=>this.vi(a).next(()=>u)):this.Oi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Oi(e){return co(e).get("owner").next(t=>{if(t!==null&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)&&!this.Ri(t)&&!(this.oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new R(T.FAILED_PRECONDITION,Xl)})}vi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return co(e).put("owner",t)}static D(){return on.D()}Ai(e){const t=co(e);return t.get("owner").next(r=>this.Ri(r)?(P("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):E.resolve())}Vi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(ze(`Detected an update time that is in the future: ${e} > ${r}`),!1))}gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground=this.document.visibilityState==="visible")}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const t=/(?:Version|Mobile)\/1[456]/;TS()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var t;try{const r=((t=this._i)===null||t===void 0?void 0:t.getItem(this.Di(e)))!==null;return P("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return ze("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){ze("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch{}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function co(n){return lt(n,"owner")}function oc(n){return lt(n,"clientMetadata")}function Wf(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Qf{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Fi=r,this.Bi=i}static Li(e,t){let r=fe(),i=fe();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Qf(e,t.fromCache,r,i)}}/**
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
 */class _b{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,r,i){return this.Ki(e,t).next(s=>s||this.Gi(e,t,i,r)).next(s=>s||this.Qi(e,t))}Ki(e,t){if(Fg(t))return E.resolve(null);let r=jt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=ru(t,null,"F"),r=jt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=fe(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.ji(t,a);return this.zi(t,u,o,c.readTime)?this.Ki(e,ru(t,null,"F")):this.Wi(e,u,t,c)}))})))}Gi(e,t,r,i){return Fg(t)||i.isEqual(ee.min())?this.Qi(e,t):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(t,s);return this.zi(t,o,r,i)?this.Qi(e,t):(Bh()<=ve.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Qh(t)),this.Wi(e,o,t,hI(i,-1)))})}ji(e,t){let r=new Pe(OI(e));return t.forEach((i,s)=>{xa(e,s)&&(r=r.add(s))}),r}zi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,t){return Bh()<=ve.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",Qh(t)),this.Ui.getDocumentsMatchingQuery(e,t,Ht.min())}Wi(e,t,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e,t,r,i){this.persistence=e,this.Hi=t,this.serializer=i,this.Ji=new Ne(de),this.Yi=new Br(s=>wi(s),Ra),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vb(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function Ib(n,e,t,r){return new _P(n,e,t,r)}async function bb(n,e){const t=z(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.tr(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=fe();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function IP(n,e){const t=z(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=E.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(m=>{const p=c.docVersions.get(f);te(p!==null),m.version.compareTo(p)<0&&(l.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),u.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=fe();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Eb(n){const e=z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Bs.getLastRemoteSnapshotVersion(t))}function bP(n,e){const t=z(n),r=e.snapshotVersion;let i=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Zi.newChangeBuffer({trackRemovals:!0});i=t.Ji;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(t.Bs.removeMatchingKeys(s,l.removedDocuments,h).next(()=>t.Bs.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(et.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(m,p,y){return m.resumeToken.approximateByteSize()===0||p.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(d,f,l)&&a.push(t.Bs.updateTargetData(s,f))});let c=$t(),u=fe();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(Tb(s,o,e.documentUpdates).next(l=>{c=l.nr,u=l.sr})),!r.isEqual(ee.min())){const l=t.Bs.getLastRemoteSnapshotVersion(s).next(h=>t.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return E.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(t.Ji=i,s))}function Tb(n,e,t){let r=fe(),i=fe();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=$t();return t.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(ee.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{nr:o,sr:i}})}function EP(n,e){const t=z(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function bs(n,e){const t=z(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Bs.getTargetData(r,e).next(s=>s?(i=s,E.resolve(i)):t.Bs.allocateTargetId(r).next(o=>(i=new qn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(r.targetId,r),t.Yi.set(e,r.targetId)),r})}async function Es(n,e,t){const r=z(n),i=r.Ji.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Vr(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function au(n,e,t){const r=z(n);let i=ee.min(),s=fe();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=z(a),h=l.Yi.get(u);return h!==void 0?E.resolve(l.Ji.get(h)):l.Bs.getTargetData(c,u)}(r,o,jt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,t?i:ee.min(),t?s:fe())).next(a=>(Ab(r,PI(e),a),{documents:a,ir:s})))}function Sb(n,e){const t=z(n),r=z(t.Bs),i=t.Ji.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.le(s,e).next(o=>o?o.target:null))}function Cb(n,e){const t=z(n),r=t.Xi.get(e)||ee.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Zi.getAllFromCollectionGroup(i,e,hI(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(Ab(t,e,i),i))}function Ab(n,e,t){let r=n.Xi.get(e)||ee.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Xi.set(e,r)}async function TP(n,e,t,r){const i=z(n);let s=fe(),o=$t();for(const u of t){const l=e.rr(u.metadata.name);u.document&&(s=s.add(l));const h=e.ur(u);h.setReadTime(e.cr(u.metadata.readTime)),o=o.insert(l,h)}const a=i.Zi.newChangeBuffer({trackRemovals:!0}),c=await bs(i,function(u){return jt(Bs(we.fromString(`__bundle__/docs/${u}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>Tb(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.Bs.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.Bs.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.nr,l.sr)).next(()=>l.nr)))}async function SP(n,e,t=fe()){const r=await bs(n,jt(jf(e.bundledQuery))),i=z(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Ge(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.qs.saveNamedQuery(s,e);const a=r.withResumeToken(et.EMPTY_BYTE_STRING,o);return i.Ji=i.Ji.insert(a.targetId,a),i.Bs.updateTargetData(s,a).next(()=>i.Bs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Bs.addMatchingKeys(s,t,r.targetId)).next(()=>i.qs.saveNamedQuery(s,e))})}function hy(n,e){return`firestore_clients_${n}_${e}`}function dy(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Zl(n,e){return`firestore_targets_${n}_${e}`}class cu{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static ar(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new R(i.error.code,i.error.message))),o?new cu(e,t,i.state,s):(ze("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Do{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static ar(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new R(r.error.code,r.error.message))),s?new Do(e,r.state,i):(ze("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class uu{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static ar(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Mf();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=mI(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new uu(e,s):(ze("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Yf{constructor(e,t){this.clientId=e,this.onlineState=t}static ar(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Yf(t.clientId,t.onlineState):(ze("SharedClientState",`Failed to parse online state: ${e}`),null)}}class nd{constructor(){this.activeTargetIds=Mf()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eh{constructor(e,t,r,i,s){this.window=e,this.ii=t,this.persistenceKey=r,this.wr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new Ne(de),this.started=!1,this.yr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.pr=hy(this.persistenceKey,this.wr),this.Ir=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.gr=this.gr.insert(this.wr,new nd),this.Tr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Er=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ar=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Rr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const r of e){if(r===this.wr)continue;const i=this.getItem(hy(this.persistenceKey,r));if(i){const s=uu.ar(r,i);s&&(this.gr=this.gr.insert(s.clientId,s))}}this.Pr();const t=this.storage.getItem(this.vr);if(t){const r=this.br(t);r&&this.Vr(r)}for(const r of this.yr)this.mr(r);this.yr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let t=!1;return this.gr.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,t,r){this.Dr(e,t,r),this.Cr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Zl(this.persistenceKey,e));if(r){const i=Do.ar(e,r);i&&(t=i.state)}}return this.Nr.lr(e),this.Pr(),t}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Zl(this.persistenceKey,e))}updateQueryState(e,t,r){this.kr(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Cr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return P("SharedClientState","READ",e,t),t}setItem(e,t){P("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){P("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){const t=e;if(t.storageArea===this.storage){if(P("SharedClientState","EVENT",t.key,t.newValue),t.key===this.pr)return void ze("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Tr.test(t.key)){if(t.newValue==null){const r=this.Or(t.key);return this.Fr(r,null)}{const r=this.Br(t.key,t.newValue);if(r)return this.Fr(r.clientId,r)}}else if(this.Er.test(t.key)){if(t.newValue!==null){const r=this.Lr(t.key,t.newValue);if(r)return this.qr(r)}}else if(this.Ar.test(t.key)){if(t.newValue!==null){const r=this.Ur(t.key,t.newValue);if(r)return this.Kr(r)}}else if(t.key===this.vr){if(t.newValue!==null){const r=this.br(t.newValue);if(r)return this.Vr(r)}}else if(t.key===this.Ir){const r=function(i){let s=Vt.ct;if(i!=null)try{const o=JSON.parse(i);te(typeof o=="number"),s=o}catch(o){ze("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(t.newValue);r!==Vt.ct&&this.sequenceNumberHandler(r)}else if(t.key===this.Rr){const r=this.Gr(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Qr(i)))}}}else this.yr.push(t)})}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,t,r){const i=new cu(this.currentUser,e,t,r),s=dy(this.persistenceKey,this.currentUser,e);this.setItem(s,i.hr())}Cr(e){const t=dy(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Mr(e){const t={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(t))}kr(e,t,r){const i=Zl(this.persistenceKey,e),s=new Do(e,t,r);this.setItem(i,s.hr())}$r(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Rr,t)}Or(e){const t=this.Tr.exec(e);return t?t[1]:null}Br(e,t){const r=this.Or(e);return uu.ar(r,t)}Lr(e,t){const r=this.Er.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return cu.ar(new it(s),i,t)}Ur(e,t){const r=this.Ar.exec(e),i=Number(r[1]);return Do.ar(i,t)}br(e){return Yf.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);P("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,t){const r=t?this.gr.insert(e,t):this.gr.remove(e),i=this.Sr(this.gr),s=this.Sr(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.Wr(o,a).then(()=>{this.gr=r})}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let t=Mf();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class kb{constructor(){this.Hr=new nd,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,r){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new nd,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class CP{Yr(e){}shutdown(){}}/**
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
 */class fy{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ac=null;function th(){return ac===null?ac=268435456+Math.round(2147483648*Math.random()):ac++,"0x"+ac.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class kP{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const Et="WebChannelConnection";class RP extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,r,i,s){const o=th(),a=this.To(e,t);P("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.Eo(c,i,s),this.Ao(e,a,c,r).then(u=>(P("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw dn("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,t,r,i,s,o){return this.Io(e,t,r,i,s)}Eo(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Vs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,t){const r=AP[e];return`${this.mo}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,r,i){const s=th();return new Promise((o,a)=>{const c=new Sx;c.setWithCredentials(!0),c.listenOnce(bx.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Yl.NO_ERROR:const l=c.getResponseJson();P(Et,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case Yl.TIMEOUT:P(Et,`RPC '${e}' ${s} timed out`),a(new R(T.DEADLINE_EXCEEDED,"Request time out"));break;case Yl.HTTP_ERROR:const h=c.getStatus();if(P(Et,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(p){const y=p.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(y)>=0?y:T.UNKNOWN}(f.status);a(new R(m,f.message))}else a(new R(T.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new R(T.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{P(Et,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);P(Et,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",u,r,15)})}Ro(e,t,r){const i=th(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=_x(),a=Ix(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new Tx({})),this.Eo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const l=s.join("");P(Et,`Creating RPC '${e}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const m=new kP({ro:y=>{f?P(Et,`Not sending because RPC '${e}' stream ${i} is closed:`,y):(d||(P(Et,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),P(Et,`RPC '${e}' stream ${i} sending:`,y),h.send(y))},oo:()=>h.close()}),p=(y,_,S)=>{y.listen(_,L=>{try{S(L)}catch(x){setTimeout(()=>{throw x},0)}})};return p(h,ec.EventType.OPEN,()=>{f||P(Et,`RPC '${e}' stream ${i} transport opened.`)}),p(h,ec.EventType.CLOSE,()=>{f||(f=!0,P(Et,`RPC '${e}' stream ${i} transport closed`),m.wo())}),p(h,ec.EventType.ERROR,y=>{f||(f=!0,dn(Et,`RPC '${e}' stream ${i} transport errored:`,y),m.wo(new R(T.UNAVAILABLE,"The operation could not be completed")))}),p(h,ec.EventType.MESSAGE,y=>{var _;if(!f){const S=y.data[0];te(!!S);const L=S,x=L.error||((_=L[0])===null||_===void 0?void 0:_.error);if(x){P(Et,`RPC '${e}' stream ${i} received error:`,x);const le=x.status;let N=function(oe){const wt=Qe[oe];if(wt!==void 0)return WI(wt)}(le),be=x.message;N===void 0&&(N=T.INTERNAL,be="Unknown error status: "+le+" with message "+x.message),f=!0,m.wo(new R(N,be)),h.close()}else P(Et,`RPC '${e}' stream ${i} received:`,S),m._o(S)}}),p(a,Ex.STAT_EVENT,y=>{y.stat===Ig.PROXY?P(Et,`RPC '${e}' stream ${i} detected buffering proxy`):y.stat===Ig.NOPROXY&&P(Et,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.fo()},0),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Rb(){return typeof window<"u"?window:null}function Sc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(n){return new FD(n,!0)}/**
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
 */class Jf{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=t,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,t-r);i>0&&P("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class Nb{constructor(e,t,r,i,s,o,a,c){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Jf(e,t)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():t&&t.code===T.RESOURCE_EXHAUSTED?(ze(t.toString()),ze("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===t&&this.Zo(r,i)},r=>{e(()=>{const i=new R(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,t){const r=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.Fo===e?t():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class NP extends Nb{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=BD(this.serializer,e),r=function(i){if(!("targetChange"in i))return ee.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?ee.min():s.readTime?Ge(s.readTime):ee.min()}(e);return this.listener.nu(t,r)}su(e){const t={};t.database=oa(this.serializer),t.addTarget=function(i,s){let o;const a=s.target;if(o=tu(a)?{documents:rb(i,a)}:{query:ib(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=XI(i,s.resumeToken);const c=Yh(i,s.expectedCount);c!==null&&(o.expectedCount=c)}else if(s.snapshotVersion.compareTo(ee.min())>0){o.readTime=Is(i,s.snapshotVersion.toTimestamp());const c=Yh(i,s.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const r=qD(this.serializer,e);r&&(t.labels=r),this.Wo(t)}iu(e){const t={};t.database=oa(this.serializer),t.removeTarget=e,this.Wo(t)}}class xP extends Nb{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=$D(e.writeResults,e.commitTime),r=Ge(e.commitTime);return this.listener.cu(r,t)}return te(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=oa(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>aa(this.serializer,r))};this.Wo(t)}}/**
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
 */class DP extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new R(T.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new R(T.UNKNOWN,i.toString())})}vo(e,t,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new R(T.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class PP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(ze(t),this.mu=!1):P("OnlineStateTracker",t)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class OP{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{$r(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=z(a);c.vu.add(4),await js(c),c.bu.set("Unknown"),c.vu.delete(4),await La(c)}(this))})}),this.bu=new PP(r,i)}}async function La(n){if($r(n))for(const e of n.Ru)await e(!0)}async function js(n){for(const e of n.Ru)await e(!1)}function cl(n,e){const t=z(n);t.Au.has(e.targetId)||(t.Au.set(e.targetId,e),ep(t)?Zf(t):Ks(t).Ko()&&Xf(t,e))}function ca(n,e){const t=z(n),r=Ks(t);t.Au.delete(e),r.Ko()&&xb(t,e),t.Au.size===0&&(r.Ko()?r.jo():$r(t)&&t.bu.set("Unknown"))}function Xf(n,e){if(n.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ks(n).su(e)}function xb(n,e){n.Vu.qt(e),Ks(n).iu(e)}function Zf(n){n.Vu=new PD({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),le:e=>n.Au.get(e)||null,ue:()=>n.datastore.serializer.databaseId}),Ks(n).start(),n.bu.gu()}function ep(n){return $r(n)&&!Ks(n).Uo()&&n.Au.size>0}function $r(n){return z(n).vu.size===0}function Db(n){n.Vu=void 0}async function MP(n){n.Au.forEach((e,t)=>{Xf(n,e)})}async function LP(n,e){Db(n),ep(n)?(n.bu.Iu(e),Zf(n)):n.bu.set("Unknown")}async function FP(n,e,t){if(n.bu.set("Online"),e instanceof JI&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(n,e)}catch(r){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await lu(n,r)}else if(e instanceof Tc?n.Vu.Ht(e):e instanceof YI?n.Vu.ne(e):n.Vu.Xt(e),!t.isEqual(ee.min()))try{const r=await Eb(n.localStore);t.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(c);u&&i.Au.set(c,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,c)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(et.EMPTY_BYTE_STRING,u.snapshotVersion)),xb(i,a);const l=new qn(u.target,a,c,u.sequenceNumber);Xf(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(r){P("RemoteStore","Failed to raise snapshot:",r),await lu(n,r)}}async function lu(n,e,t){if(!Vr(e))throw e;n.vu.add(1),await js(n),n.bu.set("Offline"),t||(t=()=>Eb(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await t(),n.vu.delete(1),await La(n)})}function Pb(n,e){return e().catch(t=>lu(n,t,e))}async function zs(n){const e=z(n),t=xr(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;UP(e);)try{const i=await EP(e.localStore,r);if(i===null){e.Eu.length===0&&t.jo();break}r=i.batchId,VP(e,i)}catch(i){await lu(e,i)}Ob(e)&&Mb(e)}function UP(n){return $r(n)&&n.Eu.length<10}function VP(n,e){n.Eu.push(e);const t=xr(n);t.Ko()&&t.ou&&t.uu(e.mutations)}function Ob(n){return $r(n)&&!xr(n).Uo()&&n.Eu.length>0}function Mb(n){xr(n).start()}async function BP(n){xr(n).hu()}async function $P(n){const e=xr(n);for(const t of n.Eu)e.uu(t.mutations)}async function qP(n,e,t){const r=n.Eu.shift(),i=Uf.from(r,e,t);await Pb(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await zs(n)}async function jP(n,e){e&&xr(n).ou&&await async function(t,r){if(i=r.code,HI(i)&&i!==T.ABORTED){const s=t.Eu.shift();xr(t).Qo(),await Pb(t,()=>t.remoteSyncer.rejectFailedWrite(s.batchId,r)),await zs(t)}var i}(n,e),Ob(n)&&Mb(n)}async function py(n,e){const t=z(n);t.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const r=$r(t);t.vu.add(3),await js(t),r&&t.bu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.vu.delete(3),await La(t)}async function rd(n,e){const t=z(n);e?(t.vu.delete(2),await La(t)):e||(t.vu.add(2),await js(t),t.bu.set("Unknown"))}function Ks(n){return n.Su||(n.Su=function(e,t,r){const i=z(e);return i.fu(),new NP(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{uo:MP.bind(null,n),ao:LP.bind(null,n),nu:FP.bind(null,n)}),n.Ru.push(async e=>{e?(n.Su.Qo(),ep(n)?Zf(n):n.bu.set("Unknown")):(await n.Su.stop(),Db(n))})),n.Su}function xr(n){return n.Du||(n.Du=function(e,t,r){const i=z(e);return i.fu(),new xP(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{uo:BP.bind(null,n),ao:jP.bind(null,n),au:$P.bind(null,n),cu:qP.bind(null,n)}),n.Ru.push(async e=>{e?(n.Du.Qo(),await zs(n)):(await n.Du.stop(),n.Eu.length>0&&(P("RemoteStore",`Stopping write stream with ${n.Eu.length} pending writes`),n.Eu=[]))})),n.Du}/**
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
 */class tp{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new st,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new tp(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gs(n,e){if(ze("AsyncQueue",`${e}: ${n}`),Vr(n))return new R(T.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class os{constructor(e){this.comparator=e?(t,r)=>e(t,r)||j.comparator(t.key,r.key):(t,r)=>j.comparator(t.key,r.key),this.keyedMap=vo(),this.sortedSet=new Ne(this.comparator)}static emptySet(e){return new os(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof os)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new os;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class my{constructor(){this.Cu=new Ne(j.comparator)}track(e){const t=e.doc.key,r=this.Cu.get(t);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(t,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(t):e.type===1&&r.type===2?this.Cu=this.Cu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):W():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal((t,r)=>{e.push(r)}),e}}class Ts{constructor(e,t,r,i,s,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Ts(e,t,os.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Na(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class zP{constructor(){this.Nu=void 0,this.listeners=[]}}class KP{constructor(){this.queries=new Br(e=>DI(e),Na),this.onlineState="Unknown",this.ku=new Set}}async function np(n,e){const t=z(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new zP),i)try{s.Nu=await t.onListen(r)}catch(o){const a=Gs(o,`Initialization of query '${Qh(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.Mu(t.onlineState),s.Nu&&e.$u(s.Nu)&&ip(t)}async function rp(n,e){const t=z(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function GP(n,e){const t=z(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&ip(t)}function HP(n,e,t){const r=z(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function ip(n){n.ku.forEach(e=>{e.next()})}class sp{constructor(e,t,r){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ts(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Uu(e){e=Ts.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e,t){this.Gu=e,this.byteLength=t}Qu(){return"metadata"in this.Gu}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e){this.serializer=e}rr(e){return Nn(this.serializer,e)}ur(e){return e.metadata.exists?nb(this.serializer,e.document,!1):De.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return Ge(e)}}class QP{constructor(e,t,r){this.ju=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Lb(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++t;const r=we.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Wu(e){const t=new Map,r=new gy(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.rr(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||fe()).add(s);t.set(o,a)}}return t}async complete(){const e=await TP(this.localStore,new gy(this.serializer),this.documents,this.ju.id),t=this.Wu(this.documents);for(const r of this.queries)await SP(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function Lb(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class Fb{constructor(e){this.key=e}}class Ub{constructor(e){this.key=e}}class Vb{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=fe(),this.mutatedKeys=fe(),this.tc=OI(e),this.ec=new os(this.tc)}get nc(){return this.Yu}sc(e,t){const r=t?t.ic:new my,i=t?t.ec:this.ec;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),f=xa(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),p=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?m!==p&&(r.track({type:3,doc:f}),y=!0):this.rc(d,f)||(r.track({type:2,doc:f}),y=!0,(c&&this.tc(f,c)>0||u&&this.tc(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),y=!0):d&&!f&&(r.track({type:1,doc:d}),y=!0,(c||u)&&(a=!0)),y&&(f?(o=o.add(f),s=p?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,l)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return f(h)-f(d)}(u.type,l.type)||this.tc(u.doc,l.doc)),this.oc(r);const o=t?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,s.length!==0||c?{snapshot:new Ts(this.query,e.ec,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new my,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(t=>this.Yu=this.Yu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Yu=this.Yu.delete(t)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=fe(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const t=[];return e.forEach(r=>{this.Zu.has(r)||t.push(new Ub(r))}),this.Zu.forEach(r=>{e.has(r)||t.push(new Fb(r))}),t}hc(e){this.Yu=e.ir,this.Zu=fe();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return Ts.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class YP{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class JP{constructor(e){this.key=e,this.fc=!1}}class XP{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Br(a=>DI(a),Na),this._c=new Map,this.mc=new Set,this.gc=new Ne(j.comparator),this.yc=new Map,this.Ic=new Gf,this.Tc={},this.Ec=new Map,this.Ac=Ti.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function ZP(n,e){const t=lp(n);let r,i;const s=t.wc.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await bs(t.localStore,jt(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await op(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&cl(t.remoteStore,o)}return i}async function op(n,e,t,r,i){n.Rc=(h,d,f)=>async function(m,p,y,_){let S=p.view.sc(y);S.zi&&(S=await au(m.localStore,p.query,!1).then(({documents:le})=>p.view.sc(le,S)));const L=_&&_.targetChanges.get(p.targetId),x=p.view.applyChanges(S,m.isPrimaryClient,L);return id(m,p.targetId,x.cc),x.snapshot}(n,h,d,f);const s=await au(n.localStore,e,!0),o=new Vb(e,s.ir),a=o.sc(s.documents),c=Oa.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);id(n,t,u.cc);const l=new YP(e,t,o);return n.wc.set(e,l),n._c.has(t)?n._c.get(t).push(e):n._c.set(t,[e]),u.snapshot}async function eO(n,e){const t=z(n),r=t.wc.get(e),i=t._c.get(r.targetId);if(i.length>1)return t._c.set(r.targetId,i.filter(s=>!Na(s,e))),void t.wc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await Es(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),ca(t.remoteStore,r.targetId),Ss(t,r.targetId)}).catch(Ur)):(Ss(t,r.targetId),await Es(t.localStore,r.targetId,!0))}async function tO(n,e,t){const r=hp(n);try{const i=await function(s,o){const a=z(s),c=Fe.now(),u=o.reduce((d,f)=>d.add(f.key),fe());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=$t(),m=fe();return a.Zi.getEntries(d,u).next(p=>{f=p,f.forEach((y,_)=>{_.isValidDocument()||(m=m.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(p=>{l=p;const y=[];for(const _ of o){const S=ND(_,l.get(_.key).overlayedDocument);S!=null&&y.push(new tr(_.key,S,EI(S.value.mapValue),Le.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,y,o)}).next(p=>{h=p;const y=p.applyToLocalDocumentSet(l,m);return a.documentOverlayCache.saveOverlays(d,p.batchId,y)})}).then(()=>({batchId:h.batchId,changes:LI(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.Tc[s.currentUser.toKey()];c||(c=new Ne(de)),c=c.insert(o,a),s.Tc[s.currentUser.toKey()]=c}(r,i.batchId,t),await nr(r,i.changes),await zs(r.remoteStore)}catch(i){const s=Gs(i,"Failed to persist write");t.reject(s)}}async function Bb(n,e){const t=z(n);try{const r=await bP(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.yc.get(s);o&&(te(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?te(o.fc):i.removedDocuments.size>0&&(te(o.fc),o.fc=!1))}),await nr(t,r,e)}catch(r){await Ur(r)}}function yy(n,e,t){const r=z(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=z(s);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Mu(o)&&(c=!0)}),c&&ip(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function nO(n,e,t){const r=z(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new Ne(j.comparator);o=o.insert(s,De.newNoDocument(s,ee.min()));const a=fe().add(s),c=new Pa(ee.min(),new Map,new Ne(de),o,a);await Bb(r,c),r.gc=r.gc.remove(s),r.yc.delete(e),up(r)}else await Es(r.localStore,e,!1).then(()=>Ss(r,e,t)).catch(Ur)}async function rO(n,e){const t=z(n),r=e.batch.batchId;try{const i=await IP(t.localStore,e);cp(t,r,null),ap(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await nr(t,i)}catch(i){await Ur(i)}}async function iO(n,e,t){const r=z(n);try{const i=await function(s,o){const a=z(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(te(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);cp(r,e,t),ap(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await nr(r,i)}catch(i){await Ur(i)}}async function sO(n,e){const t=z(n);$r(t.remoteStore)||P("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=z(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(r===-1)return void e.resolve();const i=t.Ec.get(r)||[];i.push(e),t.Ec.set(r,i)}catch(r){const i=Gs(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function ap(n,e){(n.Ec.get(e)||[]).forEach(t=>{t.resolve()}),n.Ec.delete(e)}function cp(n,e,t){const r=z(n);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function Ss(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n._c.get(e))n.wc.delete(r),t&&n.dc.Pc(r,t);n._c.delete(e),n.isPrimaryClient&&n.Ic.Is(e).forEach(r=>{n.Ic.containsKey(r)||$b(n,r)})}function $b(n,e){n.mc.delete(e.path.canonicalString());const t=n.gc.get(e);t!==null&&(ca(n.remoteStore,t),n.gc=n.gc.remove(e),n.yc.delete(t),up(n))}function id(n,e,t){for(const r of t)r instanceof Fb?(n.Ic.addReference(r.key,e),oO(n,r)):r instanceof Ub?(P("SyncEngine","Document no longer in limbo: "+r.key),n.Ic.removeReference(r.key,e),n.Ic.containsKey(r.key)||$b(n,r.key)):W()}function oO(n,e){const t=e.key,r=t.path.canonicalString();n.gc.get(t)||n.mc.has(r)||(P("SyncEngine","New document in limbo: "+t),n.mc.add(r),up(n))}function up(n){for(;n.mc.size>0&&n.gc.size<n.maxConcurrentLimboResolutions;){const e=n.mc.values().next().value;n.mc.delete(e);const t=new j(we.fromString(e)),r=n.Ac.next();n.yc.set(r,new JP(t)),n.gc=n.gc.insert(t,r),cl(n.remoteStore,new qn(jt(Bs(t.path)),r,"TargetPurposeLimboResolution",Vt.ct))}}async function nr(n,e,t){const r=z(n),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,c)=>{o.push(r.Rc(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=Qf.Li(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,c){const u=z(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>E.forEach(c,h=>E.forEach(h.Fi,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>E.forEach(h.Bi,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Vr(l))throw l;P("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Ji.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);u.Ji=u.Ji.insert(h,m)}}}(r.localStore,s))}async function aO(n,e){const t=z(n);if(!t.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const r=await bb(t.localStore,e);t.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new R(T.CANCELLED,s))})}),i.Ec.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await nr(t,r.er)}}function cO(n,e){const t=z(n),r=t.yc.get(e);if(r&&r.fc)return fe().add(r.key);{let i=fe();const s=t._c.get(e);if(!s)return i;for(const o of s){const a=t.wc.get(o);i=i.unionWith(a.view.nc)}return i}}async function uO(n,e){const t=z(n),r=await au(t.localStore,e.query,!0),i=e.view.hc(r);return t.isPrimaryClient&&id(t,e.targetId,i.cc),i}async function lO(n,e){const t=z(n);return Cb(t.localStore,e).then(r=>nr(t,r))}async function hO(n,e,t,r){const i=z(n),s=await function(o,a){const c=z(o),u=z(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.Sn(l,a).next(h=>h?c.localDocuments.getDocuments(l,h):E.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await zs(i.remoteStore):t==="acknowledged"||t==="rejected"?(cp(i,e,r||null),ap(i,e),function(o,a){z(z(o).mutationQueue).Cn(a)}(i.localStore,e)):W(),await nr(i,s)):P("SyncEngine","Cannot apply mutation batch with id: "+e)}async function dO(n,e){const t=z(n);if(lp(t),hp(t),e===!0&&t.vc!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await vy(t,r.toArray());t.vc=!0,await rd(t.remoteStore,!0);for(const s of i)cl(t.remoteStore,s)}else if(e===!1&&t.vc!==!1){const r=[];let i=Promise.resolve();t._c.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Ss(t,o),Es(t.localStore,o,!0))),ca(t.remoteStore,o)}),await i,await vy(t,r),function(s){const o=z(s);o.yc.forEach((a,c)=>{ca(o.remoteStore,c)}),o.Ic.Ts(),o.yc=new Map,o.gc=new Ne(j.comparator)}(t),t.vc=!1,await rd(t.remoteStore,!1)}}async function vy(n,e,t){const r=z(n),i=[],s=[];for(const o of e){let a;const c=r._c.get(o);if(c&&c.length!==0){a=await bs(r.localStore,jt(c[0]));for(const u of c){const l=r.wc.get(u),h=await uO(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await Sb(r.localStore,o);a=await bs(r.localStore,u),await op(r,qb(u),o,!1,a.resumeToken)}i.push(a)}return r.dc.nu(s),i}function qb(n){return xI(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function fO(n){const e=z(n);return z(z(e.localStore).persistence).$i()}async function pO(n,e,t,r){const i=z(n);if(i.vc)return void P("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await Cb(i.localStore,PI(s[0])),a=Pa.createSynthesizedRemoteEventForCurrentChange(e,t==="current",et.EMPTY_BYTE_STRING);await nr(i,o,a);break}case"rejected":await Es(i.localStore,e,!0),Ss(i,e,r);break;default:W()}}async function mO(n,e,t){const r=lp(n);if(r.vc){for(const i of e){if(r._c.has(i)){P("SyncEngine","Adding an already active target "+i);continue}const s=await Sb(r.localStore,i),o=await bs(r.localStore,s);await op(r,qb(s),o.targetId,!1,o.resumeToken),cl(r.remoteStore,o)}for(const i of t)r._c.has(i)&&await Es(r.localStore,i,!1).then(()=>{ca(r.remoteStore,i),Ss(r,i)}).catch(Ur)}}function lp(n){const e=z(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Bb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nO.bind(null,e),e.dc.nu=GP.bind(null,e.eventManager),e.dc.Pc=HP.bind(null,e.eventManager),e}function hp(n){const e=z(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iO.bind(null,e),e}function gO(n,e,t){const r=z(n);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const f=z(h),m=Ge(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",p=>f.qs.getBundleMetadata(p,d.id)).then(p=>!!p&&p.createTime.compareTo(m)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(Lb(a));const c=new QP(a,i.localStore,s.serializer);let u=await s.bc();for(;u;){const h=await c.zu(u);h&&o._updateProgress(h),u=await s.bc()}const l=await c.complete();return await nr(i,l.Ju,void 0),await function(h,d){const f=z(h);return f.persistence.runTransaction("Save bundle","readwrite",m=>f.qs.saveBundleMetadata(m,d))}(i.localStore,a),o._completeWith(l.progress),Promise.resolve(l.Hu)}catch(a){return dn("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class sd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ma(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Ib(this.persistence,new _b,e.initialUser,this.serializer)}createPersistence(e){return new wb(al.zs,this.serializer)}createSharedClientState(e){return new kb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class jb extends sd{constructor(e,t,r){super(),this.Vc=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await hp(this.Vc.syncEngine),await zs(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return Ib(this.persistence,new _b,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new sP(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new qx(t,this.persistence);return new $x(e.asyncQueue,r)}createPersistence(e){const t=Wf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Ft.withCacheSize(this.cacheSizeBytes):Ft.DEFAULT;return new Hf(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Rb(),Sc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new kb}}class yO extends jb{constructor(e,t){super(e,t,!1),this.Vc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Vc.syncEngine;this.sharedClientState instanceof eh&&(this.sharedClientState.syncEngine={jr:hO.bind(null,t),zr:pO.bind(null,t),Wr:mO.bind(null,t),$i:fO.bind(null,t),Qr:lO.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ii(async r=>{await dO(this.Vc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=Rb();if(!eh.D(t))throw new R(T.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Wf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new eh(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class dp{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=aO.bind(null,this.syncEngine),await rd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new KP}createDatastore(e){const t=Ma(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new RP(i));var i;return function(s,o,a,c){return new DP(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return t=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>yy(this.syncEngine,a,0),o=fy.D()?new fy:new CP,new OP(t,r,i,s,o);var t,r,i,s,o}createSyncEngine(e,t){return function(r,i,s,o,a,c,u){const l=new XP(r,i,s,o,a,c);return u&&(l.vc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=z(e);P("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await js(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ul{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):ze("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e,t){this.Cc=e,this.serializer=t,this.metadata=new st,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then(r=>{r&&r.Qu()?this.metadata.resolve(r.Gu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Gu)}`))},r=>this.metadata.reject(r))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){const e=await this.kc();if(e===null)return null;const t=this.xc.decode(e),r=Number(t);isNaN(r)&&this.Mc(`length string (${t}) is not valid number`);const i=await this.$c(r);return new WP(JSON.parse(i),e.length+r)}Oc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async kc(){for(;this.Oc()<0&&!await this.Fc(););if(this.buffer.length===0)return null;const e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");const t=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Mc(e){throw this.Cc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Fc(){const e=await this.Cc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class wO{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new R(T.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(r,i){const s=z(r),o=oa(s.serializer)+"/documents",a={documents:i.map(h=>sa(s.serializer,h))},c=await s.vo("BatchGetDocuments",o,a,i.length),u=new Map;c.forEach(h=>{const d=VD(s.serializer,h);u.set(d.key.toString(),d)});const l=[];return i.forEach(h=>{const d=u.get(h.toString());te(!!d),l.push(d)}),l}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new qs(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=j.fromPath(r);this.mutations.push(new Lf(i,this.precondition(i)))}),await async function(t,r){const i=z(t),s=oa(i.serializer)+"/documents",o={writes:r.map(a=>aa(i.serializer,a))};await i.Io("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw W();t=ee.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new R(T.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(ee.min())?Le.exists(!1):Le.updateTime(t):Le.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ee.min()))throw new R(T.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Le.updateTime(t)}return Le.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class _O{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.Bc=r.maxAttempts,this.qo=new Jf(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No(async()=>{const e=new wO(this.datastore),t=this.qc(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Uc(i)}))}).catch(r=>{this.Uc(r)})})}qc(e){try{const t=this.updateFunction(e);return!ka(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(e)}Kc(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!HI(t)}return!1}}/**
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
 */class IO{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=it.UNAUTHENTICATED,this.clientId=cI.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{P("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(P("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new R(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new st;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Gs(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Cc(n,e){n.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await bb(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function od(n,e){n.asyncQueue.verifyOperationInProgress();const t=await fp(n);P("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>py(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>py(e.remoteStore,s)),n._onlineComponents=e}function zb(n){return n.name==="FirebaseError"?n.code===T.FAILED_PRECONDITION||n.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function fp(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){P("FirestoreClient","Using user provided OfflineComponentProvider");try{await Cc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!zb(t))throw t;dn("Error using user provided cache. Falling back to memory cache: "+t),await Cc(n,new sd)}}else P("FirestoreClient","Using default OfflineComponentProvider"),await Cc(n,new sd);return n._offlineComponents}async function ll(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(P("FirestoreClient","Using user provided OnlineComponentProvider"),await od(n,n._uninitializedComponentsProvider._online)):(P("FirestoreClient","Using default OnlineComponentProvider"),await od(n,new dp))),n._onlineComponents}function Kb(n){return fp(n).then(e=>e.persistence)}function pp(n){return fp(n).then(e=>e.localStore)}function Gb(n){return ll(n).then(e=>e.remoteStore)}function mp(n){return ll(n).then(e=>e.syncEngine)}function bO(n){return ll(n).then(e=>e.datastore)}async function Cs(n){const e=await ll(n),t=e.eventManager;return t.onListen=ZP.bind(null,e.syncEngine),t.onUnlisten=eO.bind(null,e.syncEngine),t}function EO(n){return n.asyncQueue.enqueue(async()=>{const e=await Kb(n),t=await Gb(n);return e.setNetworkEnabled(!0),function(r){const i=z(r);return i.vu.delete(0),La(i)}(t)})}function TO(n){return n.asyncQueue.enqueue(async()=>{const e=await Kb(n),t=await Gb(n);return e.setNetworkEnabled(!1),async function(r){const i=z(r);i.vu.add(0),await js(i),i.bu.set("Offline")}(t)})}function SO(n,e){const t=new st;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,c){const u=z(a);return u.persistence.runTransaction("read document","readonly",l=>u.localDocuments.getDocument(l,c))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new R(T.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Gs(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await pp(n),e,t)),t.promise}function Hb(n,e,t={}){const r=new st;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new ul({next:h=>{s.enqueueAndForget(()=>rp(i,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new R(T.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new R(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new sp(Bs(o.path),u,{includeMetadataChanges:!0,Ku:!0});return np(i,l)}(await Cs(n),n.asyncQueue,e,t,r)),r.promise}function CO(n,e){const t=new st;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await au(r,i,!0),a=new Vb(i,o.ir),c=a.sc(o.documents),u=a.applyChanges(c,!1);s.resolve(u.snapshot)}catch(o){const a=Gs(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await pp(n),e,t)),t.promise}function Wb(n,e,t={}){const r=new st;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new ul({next:h=>{s.enqueueAndForget(()=>rp(i,l)),h.fromCache&&a.source==="server"?c.reject(new R(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new sp(o,u,{includeMetadataChanges:!0,Ku:!0});return np(i,l)}(await Cs(n),n.asyncQueue,e,t,r)),r.promise}function AO(n,e){const t=new ul(e);return n.asyncQueue.enqueueAndForget(async()=>function(r,i){z(r).ku.add(i),i.next()}(await Cs(n),t)),()=>{t.Dc(),n.asyncQueue.enqueueAndForget(async()=>function(r,i){z(r).ku.delete(i)}(await Cs(n),t))}}function kO(n,e,t,r){const i=function(s,o){let a;return a=typeof s=="string"?QI().encode(s):s,function(c,u){return new vO(c,u)}(function(c,u){if(c instanceof Uint8Array)return wy(c,u);if(c instanceof ArrayBuffer)return wy(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,Ma(e));n.asyncQueue.enqueueAndForget(async()=>{gO(await mp(n),i,r)})}function RO(n,e){return n.asyncQueue.enqueue(async()=>function(t,r){const i=z(t);return i.persistence.runTransaction("Get named query","readonly",s=>i.qs.getNamedQuery(s,r))}(await pp(n),e))}/**
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
 */function Qb(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y=new Map;/**
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
 */function gp(n,e,t){if(!t)throw new R(T.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Yb(n,e,t,r){if(e===!0&&r===!0)throw new R(T.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Iy(n){if(!j.isDocumentKey(n))throw new R(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function by(n){if(j.isDocumentKey(n))throw new R(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function hl(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":W()}function Ie(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new R(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=hl(n);throw new R(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Jb(n,e){if(e<=0)throw new R(T.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new R(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new R(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Yb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Qb((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new R(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new R(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new R(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,r}}class Fa{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ey({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new R(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new R(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ey(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new Rx;switch(t.type){case"firstParty":return new Px(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new R(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=_y.get(e);t&&(P("ComponentProvider","Removing Datastore"),_y.delete(e),t.terminate())}(this),Promise.resolve()}}function NO(n,e,t,r={}){var i;const s=(n=Ie(n,Fa))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&dn("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${t}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=it.MOCK_USER;else{o=IS(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new R(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new it(c)}n._authCredentials=new Nx(new aI(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Oe(this.firestore,e,this._key)}}class vt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new vt(this.firestore,e,this._query)}}class xn extends vt{constructor(e,t,r){super(e,t,Bs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Oe(this.firestore,null,new j(e))}withConverter(e){return new xn(this.firestore,e,this._path)}}function Xb(n,e,...t){if(n=re(n),gp("collection","path",e),n instanceof Fa){const r=we.fromString(e,...t);return by(r),new xn(n,null,r)}{if(!(n instanceof Oe||n instanceof xn))throw new R(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(we.fromString(e,...t));return by(r),new xn(n.firestore,null,r)}}function xO(n,e){if(n=Ie(n,Fa),gp("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new R(T.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new vt(n,null,function(t){return new er(we.emptyPath(),t)}(e))}function hu(n,e,...t){if(n=re(n),arguments.length===1&&(e=cI.A()),gp("doc","path",e),n instanceof Fa){const r=we.fromString(e,...t);return Iy(r),new Oe(n,null,new j(r))}{if(!(n instanceof Oe||n instanceof xn))throw new R(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(we.fromString(e,...t));return Iy(r),new Oe(n.firestore,n instanceof xn?n.converter:null,new j(r))}}function Zb(n,e){return n=re(n),e=re(e),(n instanceof Oe||n instanceof xn)&&(e instanceof Oe||e instanceof xn)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function eE(n,e){return n=re(n),e=re(e),n instanceof vt&&e instanceof vt&&n.firestore===e.firestore&&Na(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Jf(this,"async_queue_retry"),this.Xc=()=>{const t=Sc();t&&P("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const e=Sc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=Sc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const t=new st;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Vr(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const t=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw ze("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=t,t}enqueueAfterDelay(e,t,r){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const i=tp.createAndSchedule(this,e,t,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&W()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.zc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}function ad(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of t)if(i in r&&typeof r[i]=="function")return!0;return!1}(n,["next","error","complete"])}class PO{constructor(){this._progressObserver={},this._taskCompletionResolver=new st,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO=-1;class je extends Fa{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new DO,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||tE(this),this._firestoreClient.terminate()}}function ht(n){return n._firestoreClient||tE(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function tE(n){var e,t,r;const i=n._freezeSettings(),s=function(o,a,c,u){return new uD(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Qb(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new IO(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.cache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function MO(n,e){rE(n=Ie(n,je));const t=ht(n);if(t._uninitializedComponentsProvider)throw new R(T.FAILED_PRECONDITION,"SDK cache is already specified.");dn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),i=new dp;return nE(t,i,new jb(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function LO(n){rE(n=Ie(n,je));const e=ht(n);if(e._uninitializedComponentsProvider)throw new R(T.FAILED_PRECONDITION,"SDK cache is already specified.");dn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new dp;return nE(e,r,new yO(r,t.cacheSizeBytes))}function nE(n,e,t){const r=new st;return n.asyncQueue.enqueue(async()=>{try{await Cc(n,t),await od(n,e),r.resolve()}catch(i){const s=i;if(!zb(s))throw s;dn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function FO(n){if(n._initialized&&!n._terminated)throw new R(T.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new st;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!on.D())return Promise.resolve();const r=t+"main";await on.delete(r)}(Wf(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function UO(n){return function(e){const t=new st;return e.asyncQueue.enqueueAndForget(async()=>sO(await mp(e),t)),t.promise}(ht(n=Ie(n,je)))}function VO(n){return EO(ht(n=Ie(n,je)))}function BO(n){return TO(ht(n=Ie(n,je)))}function $O(n,e){const t=ht(n=Ie(n,je)),r=new PO;return kO(t,n._databaseId,e,r),r}function qO(n,e){return RO(ht(n=Ie(n,je)),e).then(t=>t?new vt(n,null,t.query):null)}function rE(n){if(n._initialized||n._terminated)throw new R(T.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ln(et.fromBase64String(e))}catch(t){throw new R(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ln(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new R(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e){this._methodName=e}}/**
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
 */class dl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new R(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new R(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
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
 */const jO=/^__.*__$/;class zO{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new tr(e,this.data,this.fieldMask,t,this.fieldTransforms):new $s(e,this.data,t,this.fieldTransforms)}}class iE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new tr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function sE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class fl{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new fl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return du(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(sE(this.ca)&&jO.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class KO{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ma(e)}ya(e,t,r,i=!1){return new fl({ca:e,methodName:t,ga:r,path:Ke.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Di(n){const e=n._freezeSettings(),t=Ma(n._databaseId);return new KO(n._databaseId,!!e.ignoreUndefinedProperties,t)}function pl(n,e,t,r,i,s={}){const o=n.ya(s.merge||s.mergeFields?2:0,e,t,i);_p("Data must be an object, but it was:",o,r);const a=cE(r,o);let c,u;if(s.merge)c=new Bt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=cd(e,h,t);if(!o.contains(d))throw new R(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);lE(l,d)||l.push(d)}c=new Bt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new zO(new mt(a),c,u)}class Ua extends xi{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ua}}function oE(n,e,t){return new fl({ca:3,ga:e.settings.ga,methodName:n._methodName,la:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class yp extends xi{_toFieldTransform(e){return new Da(e.path,new ws)}isEqual(e){return e instanceof yp}}class GO extends xi{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=oE(this,e,!0),r=this.pa.map(s=>Pi(s,t)),i=new _i(r);return new Da(e.path,i)}isEqual(e){return this===e}}class HO extends xi{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=oE(this,e,!0),r=this.pa.map(s=>Pi(s,t)),i=new Ii(r);return new Da(e.path,i)}isEqual(e){return this===e}}class WO extends xi{constructor(e,t){super(e),this.Ia=t}_toFieldTransform(e){const t=new _s(e.serializer,BI(e.serializer,this.Ia));return new Da(e.path,t)}isEqual(e){return this===e}}function vp(n,e,t,r){const i=n.ya(1,e,t);_p("Data must be an object, but it was:",i,r);const s=[],o=mt.empty();Ni(r,(c,u)=>{const l=Ip(e,c,t);u=re(u);const h=i.da(l);if(u instanceof Ua)s.push(l);else{const d=Pi(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new Bt(s);return new iE(o,a,i.fieldTransforms)}function wp(n,e,t,r,i,s){const o=n.ya(1,e,t),a=[cd(e,r,t)],c=[i];if(s.length%2!=0)throw new R(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(cd(e,s[d])),c.push(s[d+1]);const u=[],l=mt.empty();for(let d=a.length-1;d>=0;--d)if(!lE(u,a[d])){const f=a[d];let m=c[d];m=re(m);const p=o.da(f);if(m instanceof Ua)u.push(f);else{const y=Pi(m,p);y!=null&&(u.push(f),l.set(f,y))}}const h=new Bt(u);return new iE(l,h,o.fieldTransforms)}function aE(n,e,t,r=!1){return Pi(t,n.ya(r?4:3,e))}function Pi(n,e){if(uE(n=re(n)))return _p("Unsupported field value:",e,n),cE(n,e);if(n instanceof xi)return function(t,r){if(!sE(r.ca))throw r._a(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(t,r){const i=[];let s=0;for(const o of t){let a=Pi(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(n,e)}return function(t,r){if((t=re(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return BI(r.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=Fe.fromDate(t);return{timestampValue:Is(r.serializer,i)}}if(t instanceof Fe){const i=new Fe(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Is(r.serializer,i)}}if(t instanceof dl)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Ln)return{bytesValue:XI(r.serializer,t._byteString)};if(t instanceof Oe){const i=r.databaseId,s=t.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:qf(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r._a(`Unsupported field value: ${hl(t)}`)}(n,e)}function cE(n,e){const t={};return _I(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ni(n,(r,i)=>{const s=Pi(i,e.ha(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function uE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Fe||n instanceof dl||n instanceof Ln||n instanceof Oe||n instanceof xi)}function _p(n,e,t){if(!uE(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=hl(t);throw r==="an object"?e._a(n+" a custom object"):e._a(n+" "+r)}}function cd(n,e,t){if((e=re(e))instanceof Dr)return e._internalPath;if(typeof e=="string")return Ip(n,e);throw du("Field path arguments must be of type string or ",n,!1,void 0,t)}const QO=new RegExp("[~\\*/\\[\\]]");function Ip(n,e,t){if(e.search(QO)>=0)throw du(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Dr(...e.split("."))._internalPath}catch{throw du(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function du(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new R(T.INVALID_ARGUMENT,a+n+c)}function lE(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Oe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new YO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ml("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class YO extends ua{data(){return super.data()}}function ml(n,e){return typeof e=="string"?Ip(n,e):e instanceof Dr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new R(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bp{}class Va extends bp{}function cr(n,e,...t){let r=[];e instanceof bp&&r.push(e),r=r.concat(t),function(i){const s=i.filter(a=>a instanceof Ep).length,o=i.filter(a=>a instanceof gl).length;if(s>1||s>0&&o>0)throw new R(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class gl extends Va{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new gl(e,t,r)}_apply(e){const t=this._parse(e);return fE(e._query,t),new vt(e.firestore,e.converter,Wh(e._query,t))}_parse(e){const t=Di(e.firestore);return function(i,s,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new R(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Sy(l,u);const d=[];for(const f of l)d.push(Ty(a,i,f));h={arrayValue:{values:d}}}else h=Ty(a,i,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Sy(l,u),h=aE(o,s,l,u==="in"||u==="not-in");return ge.create(c,u,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function JO(n,e,t){const r=e,i=ml("where",n);return gl._create(i,r,t)}class Ep extends bp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ep(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ce.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)fE(s,a),s=Wh(s,a)}(e._query,t),new vt(e.firestore,e.converter,Wh(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Tp extends Va{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Tp(e,t)}_apply(e){const t=function(r,i,s){if(r.startAt!==null)throw new R(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new R(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ss(i,s);return function(a,c){if(Pf(a)===null){const u=nl(a);u!==null&&pE(a,u,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new vt(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new er(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function XO(n,e="asc"){const t=e,r=ml("orderBy",n);return Tp._create(r,t)}class yl extends Va{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new yl(e,t,r)}_apply(e){return new vt(e.firestore,e.converter,ru(e._query,this._limit,this._limitType))}}function ZO(n){return Jb("limit",n),yl._create("limit",n,"F")}function eM(n){return Jb("limitToLast",n),yl._create("limitToLast",n,"L")}class vl extends Va{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new vl(e,t,r)}_apply(e){const t=dE(e,this.type,this._docOrFields,this._inclusive);return new vt(e.firestore,e.converter,function(r,i){return new er(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,t))}}function tM(...n){return vl._create("startAt",n,!0)}function nM(...n){return vl._create("startAfter",n,!1)}class wl extends Va{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new wl(e,t,r)}_apply(e){const t=dE(e,this.type,this._docOrFields,this._inclusive);return new vt(e.firestore,e.converter,function(r,i){return new er(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,t))}}function rM(...n){return wl._create("endBefore",n,!1)}function iM(...n){return wl._create("endAt",n,!0)}function dE(n,e,t,r){if(t[0]=re(t[0]),t[0]instanceof ua)return function(i,s,o,a,c){if(!a)throw new R(T.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of fi(i))if(l.field.isKeyField())u.push(vi(s,a.key));else{const h=a.data.field(l.field);if(tl(h))throw new R(T.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new R(T.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new Nr(u,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=Di(n.firestore);return function(s,o,a,c,u,l){const h=s.explicitOrderBy;if(u.length>h.length)throw new R(T.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<u.length;f++){const m=u[f];if(h[f].field.isKeyField()){if(typeof m!="string")throw new R(T.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof m}`);if(!Of(s)&&m.indexOf("/")!==-1)throw new R(T.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${m}' contains a slash.`);const p=s.path.child(we.fromString(m));if(!j.isDocumentKey(p))throw new R(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${p}' is not because it contains an odd number of segments.`);const y=new j(p);d.push(vi(o,y))}else{const p=aE(a,c,m);d.push(p)}}return new Nr(d,l)}(n._query,n.firestore._databaseId,i,e,t,r)}}function Ty(n,e,t){if(typeof(t=re(t))=="string"){if(t==="")throw new R(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Of(e)&&t.indexOf("/")!==-1)throw new R(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(we.fromString(t));if(!j.isDocumentKey(r))throw new R(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return vi(n,new j(r))}if(t instanceof Oe)return vi(n,t._key);throw new R(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${hl(t)}.`)}function Sy(n,e){if(!Array.isArray(n)||n.length===0)throw new R(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function fE(n,e){if(e.isInequality()){const r=nl(n),i=e.field;if(r!==null&&!r.isEqual(i))throw new R(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Pf(n);s!==null&&pE(n,i,s)}const t=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new R(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new R(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function pE(n,e,t){if(!t.isEqual(e))throw new R(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class Sp{convertValue(e,t="none"){switch(yi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ar(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw W()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ni(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new dl($e(e.latitude),$e(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=xf(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(na(e));default:return null}}convertTimestamp(e){const t=Cr(e);return new Fe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=we.fromString(e);te(cb(r));const i=new kr(r.get(1),r.get(3)),s=new j(r.popFirst(5));return i.isEqual(t)||ze(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class sM extends Sp{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ln(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Oe(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Yn extends ua{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Po(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ml("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Po extends Yn{data(e={}){return super.data(e)}}class Pr{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new si(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Po(this._firestore,this._userDataWriter,r.key,r,new si(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new R(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Po(r._firestore,r._userDataWriter,o.doc.key,o.doc,new si(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Po(r._firestore,r._userDataWriter,o.doc.key,o.doc,new si(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:oM(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function oM(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}function mE(n,e){return n instanceof Yn&&e instanceof Yn?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Pr&&e instanceof Pr&&n._firestore===e._firestore&&eE(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aM(n){n=Ie(n,Oe);const e=Ie(n.firestore,je);return Hb(ht(e),n._key).then(t=>Cp(e,n,t))}class Oi extends Sp{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ln(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Oe(this.firestore,null,t)}}function cM(n){n=Ie(n,Oe);const e=Ie(n.firestore,je),t=ht(e),r=new Oi(e);return SO(t,n._key).then(i=>new Yn(e,r,n._key,i,new si(i!==null&&i.hasLocalMutations,!0),n.converter))}function uM(n){n=Ie(n,Oe);const e=Ie(n.firestore,je);return Hb(ht(e),n._key,{source:"server"}).then(t=>Cp(e,n,t))}function lM(n){n=Ie(n,vt);const e=Ie(n.firestore,je),t=ht(e),r=new Oi(e);return hE(n._query),Wb(t,n._query).then(i=>new Pr(e,r,n,i))}function hM(n){n=Ie(n,vt);const e=Ie(n.firestore,je),t=ht(e),r=new Oi(e);return CO(t,n._query).then(i=>new Pr(e,r,n,i))}function dM(n){n=Ie(n,vt);const e=Ie(n.firestore,je),t=ht(e),r=new Oi(e);return Wb(t,n._query,{source:"server"}).then(i=>new Pr(e,r,n,i))}function Cy(n,e,t){n=Ie(n,Oe);const r=Ie(n.firestore,je),i=_l(n.converter,e,t);return Ba(r,[pl(Di(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Le.none())])}function Ay(n,e,t,...r){n=Ie(n,Oe);const i=Ie(n.firestore,je),s=Di(i);let o;return o=typeof(e=re(e))=="string"||e instanceof Dr?wp(s,"updateDoc",n._key,e,t,r):vp(s,"updateDoc",n._key,e),Ba(i,[o.toMutation(n._key,Le.exists(!0))])}function fM(n){return Ba(Ie(n.firestore,je),[new qs(n._key,Le.none())])}function pM(n,e){const t=Ie(n.firestore,je),r=hu(n),i=_l(n.converter,e);return Ba(t,[pl(Di(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Le.exists(!1))]).then(()=>r)}function gE(n,...e){var t,r,i;n=re(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ad(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(ad(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(n instanceof Oe)u=Ie(n.firestore,je),l=Bs(n._key.path),c={next:h=>{e[o]&&e[o](Cp(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=Ie(n,vt);u=Ie(h.firestore,je),l=h._query;const d=new Oi(u);c={next:f=>{e[o]&&e[o](new Pr(u,d,h,f))},error:e[o+1],complete:e[o+2]},hE(n._query)}return function(h,d,f,m){const p=new ul(m),y=new sp(d,p,f);return h.asyncQueue.enqueueAndForget(async()=>np(await Cs(h),y)),()=>{p.Dc(),h.asyncQueue.enqueueAndForget(async()=>rp(await Cs(h),y))}}(ht(u),l,a,c)}function mM(n,e){return AO(ht(n=Ie(n,je)),ad(e)?e:{next:e})}function Ba(n,e){return function(t,r){const i=new st;return t.asyncQueue.enqueueAndForget(async()=>tO(await mp(t),r,i)),i.promise}(ht(n),e)}function Cp(n,e,t){const r=t.docs.get(e._key),i=new Oi(n);return new Yn(n,i,e._key,r,new si(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const gM={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yM{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Di(e)}set(e,t,r){this._verifyNotCommitted();const i=fr(e,this._firestore),s=_l(i.converter,t,r),o=pl(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Le.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=fr(e,this._firestore);let o;return o=typeof(t=re(t))=="string"||t instanceof Dr?wp(this._dataReader,"WriteBatch.update",s._key,t,r,i):vp(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Le.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=fr(e,this._firestore);return this._mutations=this._mutations.concat(new qs(t._key,Le.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new R(T.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function fr(n,e){if((n=re(n)).firestore!==e)throw new R(T.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class vM extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Di(e)}get(e){const t=fr(e,this._firestore),r=new sM(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return W();const s=i[0];if(s.isFoundDocument())return new ua(this._firestore,r,s.key,s,t.converter);if(s.isNoDocument())return new ua(this._firestore,r,t._key,null,t.converter);throw W()})}set(e,t,r){const i=fr(e,this._firestore),s=_l(i.converter,t,r),o=pl(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,t,r,...i){const s=fr(e,this._firestore);let o;return o=typeof(t=re(t))=="string"||t instanceof Dr?wp(this._dataReader,"Transaction.update",s._key,t,r,i):vp(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=fr(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=fr(e,this._firestore),r=new Oi(this._firestore);return super.get(e).then(i=>new Yn(this._firestore,r,t._key,i._document,new si(!1,!1),t.converter))}}function wM(n,e,t){n=Ie(n,je);const r=Object.assign(Object.assign({},gM),t);return function(i){if(i.maxAttempts<1)throw new R(T.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new st;return i.asyncQueue.enqueueAndForget(async()=>{const c=await bO(i);new _O(i.asyncQueue,c,o,s,a).run()}),a.promise}(ht(n),i=>e(new vM(n,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _M(){return new Ua("deleteField")}function IM(){return new yp("serverTimestamp")}function bM(...n){return new GO("arrayUnion",n)}function EM(...n){return new HO("arrayRemove",n)}function TM(n){return new WO("increment",n)}(function(n,e=!0){(function(t){Vs=t})(Or),br(new Pn("firestore",(t,{instanceIdentifier:r,options:i})=>{const s=t.getProvider("app").getImmediate(),o=new je(new xx(t.getProvider("auth-internal")),new Mx(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new R(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new kr(a.options.projectId,c)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Rn(bg,"3.12.0",n),Rn(bg,"3.12.0","esm2017")})();const SM="@firebase/firestore-compat",CM="0.3.9";/**
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
 */function Ap(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new R("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function ky(){if(typeof Uint8Array>"u")throw new R("unimplemented","Uint8Arrays are not available in this environment.")}function Ry(){if(!aD())throw new R("unimplemented","Blobs are unavailable in Firestore in this environment.")}class la{constructor(e){this._delegate=e}static fromBase64String(e){return Ry(),new la(Ln.fromBase64String(e))}static fromUint8Array(e){return ky(),new la(Ln.fromUint8Array(e))}toBase64(){return Ry(),this._delegate.toBase64()}toUint8Array(){return ky(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function ud(n){return AM(n,["next","error","complete"])}function AM(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
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
 */class kM{enableIndexedDbPersistence(e,t){return MO(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return LO(e._delegate)}clearIndexedDbPersistence(e){return FO(e._delegate)}}class yE{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof kr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&dn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){NO(this._delegate,e,t,r)}enableNetwork(){return VO(this._delegate)}disableNetwork(){return BO(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,Yb("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return UO(this._delegate)}onSnapshotsInSync(e){return mM(this._delegate,e)}get app(){if(!this._appCompat)throw new R("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new As(this,Xb(this._delegate,e))}catch(t){throw xt(t,"collection()","Firestore.collection()")}}doc(e){try{return new en(this,hu(this._delegate,e))}catch(t){throw xt(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Nt(this,xO(this._delegate,e))}catch(t){throw xt(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return wM(this._delegate,t=>e(new vE(this,t)))}batch(){return ht(this._delegate),new wE(new yM(this._delegate,e=>Ba(this._delegate,e)))}loadBundle(e){return $O(this._delegate,e)}namedQuery(e){return qO(this._delegate,e).then(t=>t?new Nt(this,t):null)}}class Il extends Sp{constructor(e){super(),this.firestore=e}convertBytes(e){return new la(new Ln(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return en.forKey(t,this.firestore,null)}}function RM(n){Ax(n)}class vE{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Il(e)}get(e){const t=oi(e);return this._delegate.get(t).then(r=>new ha(this._firestore,new Yn(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=oi(e);return r?(Ap("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=oi(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=oi(e);return this._delegate.delete(t),this}}class wE{constructor(e){this._delegate=e}set(e,t,r){const i=oi(e);return r?(Ap("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=oi(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=oi(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Si{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Po(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new da(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Si.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new Si(e,new Il(e),t),i.set(t,s)),s}}Si.INSTANCES=new WeakMap;class en{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Il(e)}static forPath(e,t,r){if(e.length%2!==0)throw new R("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new en(t,new Oe(t._delegate,r,new j(e)))}static forKey(e,t,r){return new en(t,new Oe(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new As(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new As(this.firestore,Xb(this._delegate,e))}catch(t){throw xt(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=re(e),e instanceof Oe?Zb(this._delegate,e):!1}set(e,t){t=Ap("DocumentReference.set",t);try{return t?Cy(this._delegate,e,t):Cy(this._delegate,e)}catch(r){throw xt(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?Ay(this._delegate,e):Ay(this._delegate,e,t,...r)}catch(i){throw xt(i,"updateDoc()","DocumentReference.update()")}}delete(){return fM(this._delegate)}onSnapshot(...e){const t=_E(e),r=IE(e,i=>new ha(this.firestore,new Yn(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return gE(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=cM(this._delegate):(e==null?void 0:e.source)==="server"?t=uM(this._delegate):t=aM(this._delegate),t.then(r=>new ha(this.firestore,new Yn(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new en(this.firestore,e?this._delegate.withConverter(Si.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function xt(n,e,t){return n.message=n.message.replace(e,t),n}function _E(n){for(const e of n)if(typeof e=="object"&&!ud(e))return e;return{}}function IE(n,e){var t,r;let i;return ud(n[0])?i=n[0]:ud(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class ha{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new en(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return mE(this._delegate,e._delegate)}}class da extends ha{data(e){const t=this._delegate.data(e);return kx(t!==void 0),t}}class Nt{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Il(e)}where(e,t,r){try{return new Nt(this.firestore,cr(this._delegate,JO(e,t,r)))}catch(i){throw xt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Nt(this.firestore,cr(this._delegate,XO(e,t)))}catch(r){throw xt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Nt(this.firestore,cr(this._delegate,ZO(e)))}catch(t){throw xt(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Nt(this.firestore,cr(this._delegate,eM(e)))}catch(t){throw xt(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Nt(this.firestore,cr(this._delegate,tM(...e)))}catch(t){throw xt(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Nt(this.firestore,cr(this._delegate,nM(...e)))}catch(t){throw xt(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Nt(this.firestore,cr(this._delegate,rM(...e)))}catch(t){throw xt(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Nt(this.firestore,cr(this._delegate,iM(...e)))}catch(t){throw xt(t,"endAt()","Query.endAt()")}}isEqual(e){return eE(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=hM(this._delegate):(e==null?void 0:e.source)==="server"?t=dM(this._delegate):t=lM(this._delegate),t.then(r=>new ld(this.firestore,new Pr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=_E(e),r=IE(e,i=>new ld(this.firestore,new Pr(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return gE(this._delegate,t,r)}withConverter(e){return new Nt(this.firestore,e?this._delegate.withConverter(Si.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class NM{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new da(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class ld{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Nt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new da(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new NM(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new da(this._firestore,r))})}isEqual(e){return mE(this._delegate,e._delegate)}}class As extends Nt{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new en(this.firestore,e):null}doc(e){try{return e===void 0?new en(this.firestore,hu(this._delegate)):new en(this.firestore,hu(this._delegate,e))}catch(t){throw xt(t,"doc()","CollectionReference.doc()")}}add(e){return pM(this._delegate,e).then(t=>new en(this.firestore,t))}isEqual(e){return Zb(this._delegate,e._delegate)}withConverter(e){return new As(this.firestore,e?this._delegate.withConverter(Si.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function oi(n){return Ie(n,Oe)}/**
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
 */class kp{constructor(...e){this._delegate=new Dr(...e)}static documentId(){return new kp(Ke.keyField().canonicalString())}isEqual(e){return e=re(e),e instanceof Dr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class ei{constructor(e){this._delegate=e}static serverTimestamp(){const e=IM();return e._methodName="FieldValue.serverTimestamp",new ei(e)}static delete(){const e=_M();return e._methodName="FieldValue.delete",new ei(e)}static arrayUnion(...e){const t=bM(...e);return t._methodName="FieldValue.arrayUnion",new ei(t)}static arrayRemove(...e){const t=EM(...e);return t._methodName="FieldValue.arrayRemove",new ei(t)}static increment(e){const t=TM(e);return t._methodName="FieldValue.increment",new ei(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const xM={Firestore:yE,GeoPoint:dl,Timestamp:Fe,Blob:la,Transaction:vE,WriteBatch:wE,DocumentReference:en,DocumentSnapshot:ha,Query:Nt,QueryDocumentSnapshot:da,QuerySnapshot:ld,CollectionReference:As,FieldPath:kp,FieldValue:ei,setLogLevel:RM,CACHE_SIZE_UNLIMITED:OO};function DM(n,e){n.INTERNAL.registerComponent(new Pn("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},xM)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PM(n){DM(n,(e,t)=>new yE(e,t,new kM)),n.registerVersion(SM,CM)}PM(Ls);/**
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
 */function Ci(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OM=2e3;async function MM(n,e,t){var r;const{BuildInfo:i}=Ci();un(e.sessionId,"AuthEvent did not contain a session ID");const s=await BM(e.sessionId),o={};return Ps()?o.ibi=i.packageName:ma()?o.apn=i.packageName:at(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Eh(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function LM(n){const{BuildInfo:e}=Ci(),t={};Ps()?t.iosBundleId=e.packageName:ma()?t.androidPackageName=e.packageName:at(n,"operation-not-supported-in-this-environment"),await $w(n,t)}function FM(n){const{cordova:e}=Ci();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,aA()?"_blank":"_system","location=yes"),t(i)})})}async function UM(n,e,t){const{cordova:r}=Ci();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function u(){a||(a=window.setTimeout(()=>{o(gt(n,"redirect-cancelled-by-user"))},OM))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),ma()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function VM(n){var e,t,r,i,s,o,a,c,u,l;const h=Ci();F(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),F(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),F(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),F(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),F(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function BM(n){const e=$M(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function $M(n){if(un(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qM=20;class jM extends Vw{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function zM(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:HM(),postBody:null,tenantId:n.tenantId,error:gt(n,"no-auth-event")}}function KM(n,e){return hd()._set(dd(n),e)}async function Ny(n){const e=await hd()._get(dd(n));return e&&await hd()._remove(dd(n)),e}function GM(n,e){var t,r;const i=QM(e);if(i.includes("/__/auth/callback")){const s=Ac(i),o=s.firebaseError?WM(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],c=a?gt(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function HM(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<qM;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function hd(){return Kt(Du)}function dd(n){return li("authEvent",n.config.apiKey,n.name)}function WM(n){try{return JSON.parse(n)}catch{return null}}function QM(n){const e=Ac(n),t=e.link?decodeURIComponent(e.link):void 0,r=Ac(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Ac(i).link||i||r||t||n}function Ac(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return Gi(t.join("?"))}/**
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
 */const YM=500;class JM{constructor(){this._redirectPersistence=Tr,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Lu,this._overrideRedirectResult=nf}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new jM(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){at(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){VM(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),cR(),await this._originValidation(e);const o=zM(e,r,i);await KM(e,o);const a=await MM(e,o,t),c=await FM(a);return UM(e,s,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=LM(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Ci(),o=setTimeout(async()=>{await Ny(e),t.onEvent(xy())},YM),a=async l=>{clearTimeout(o);const h=await Ny(e);let d=null;h&&(l!=null&&l.url)&&(d=GM(h,l.url)),t.onEvent(d||xy())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,u=`${s.packageName.toLowerCase()}://`;Ci().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const XM=JM;function xy(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:gt("no-auth-event")}}/**
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
 */function ZM(n,e){He(n)._logFramework(e)}var eL="@firebase/auth-compat",tL="0.4.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nL=1e3;function Oo(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function rL(){return Oo()==="http:"||Oo()==="https:"}function bE(n=Be()){return!!((Oo()==="file:"||Oo()==="ionic:"||Oo()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function iL(){return Fd()||Ld()}function sL(){return Uv()&&(document==null?void 0:document.documentMode)===11}function oL(n=Be()){return/Edge\/\d+/.test(n)}function aL(n=Be()){return sL()||oL(n)}function EE(){try{const n=self.localStorage,e=ya();if(n)return n.setItem(e,"1"),n.removeItem(e),aL()?$o():!0}catch{return Rp()&&$o()}return!1}function Rp(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function nh(){return(rL()||Fv()||bE())&&!iL()&&EE()&&!Rp()}function TE(){return bE()&&typeof document<"u"}async function cL(){return TE()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},nL);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function uL(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt={LOCAL:"local",NONE:"none",SESSION:"session"},uo=F,SE="persistence";function lL(n,e){if(uo(Object.values(zt).includes(e),n,"invalid-persistence-type"),Fd()){uo(e!==zt.SESSION,n,"unsupported-persistence-type");return}if(Ld()){uo(e===zt.NONE,n,"unsupported-persistence-type");return}if(Rp()){uo(e===zt.NONE||e===zt.LOCAL&&$o(),n,"unsupported-persistence-type");return}uo(e===zt.NONE||EE(),n,"unsupported-persistence-type")}async function fd(n){await n._initializationPromise;const e=CE(),t=li(SE,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function hL(n,e){const t=CE();if(!t)return[];const r=li(SE,n,e);switch(t.getItem(r)){case zt.NONE:return[ls];case zt.LOCAL:return[ds,Tr];case zt.SESSION:return[Tr];default:return[]}}function CE(){var n;try{return((n=uL())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dL=F;class mr{constructor(){this.browserResolver=Kt(qw),this.cordovaResolver=Kt(XM),this.underlyingResolver=null,this._redirectPersistence=Tr,this._completeRedirectFn=Lu,this._overrideRedirectResult=nf}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return TE()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return dL(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await cL();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(n){return n.unwrap()}function fL(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pL(n){return kE(n)}function mL(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new gL(n,pk(n,e))}else if(r){const i=kE(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function kE(n){const{_tokenResponse:e}=n instanceof Pt?n.customData:n;if(!e)return null;if(!(n instanceof Pt)&&"temporaryProof"in e&&"phoneNumber"in e)return gi.credentialFromResult(n);const t=e.providerId;if(!t||t===Xs.PASSWORD)return null;let r;switch(t){case Xs.GOOGLE:r=_n;break;case Xs.FACEBOOK:r=wn;break;case Xs.GITHUB:r=In;break;case Xs.TWITTER:r=bn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?hs._create(t,a):On._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new es(t).credential({idToken:i,accessToken:s,rawNonce:c})}return n instanceof Pt?r.credentialFromError(n):r.credentialFromResult(n)}function Ut(n,e){return e.catch(t=>{throw t instanceof Pt&&mL(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:pL(t),additionalUserInfo:uk(t),user:jn.getOrCreate(i)}})}async function pd(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>Ut(n,t.confirm(r))}}class gL{constructor(e,t){this.resolver=t,this.auth=fL(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ut(AE(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this._delegate=e,this.multiFactor=vk(e)}static getOrCreate(e){return jn.USER_MAP.has(e)||jn.USER_MAP.set(e,new jn(e)),jn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ut(this.auth,Ew(this._delegate,e))}async linkWithPhoneNumber(e,t){return pd(this.auth,Qk(this._delegate,e,t))}async linkWithPopup(e){return Ut(this.auth,iR(this._delegate,e,mr))}async linkWithRedirect(e){return await fd(He(this.auth)),fR(this._delegate,e,mr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ut(this.auth,Tw(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return pd(this.auth,Yk(this._delegate,e,t))}reauthenticateWithPopup(e){return Ut(this.auth,rR(this._delegate,e,mr))}async reauthenticateWithRedirect(e){return await fd(He(this.auth)),hR(this._delegate,e,mr)}sendEmailVerification(e){return XA(this._delegate,e)}async unlink(e){return await UA(this._delegate,e),this}updateEmail(e){return nk(this._delegate,e)}updatePassword(e){return rk(this._delegate,e)}updatePhoneNumber(e){return Jk(this._delegate,e)}updateProfile(e){return tk(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return ZA(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}jn.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=F;class md{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;lo(r,"invalid-api-key",{appName:e.name}),lo(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?mr:void 0;this._delegate=t.initialize({options:{persistence:yL(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(qC),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?jn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){mw(this._delegate,e,t)}applyActionCode(e){return jA(this._delegate,e)}checkActionCode(e){return Sw(this._delegate,e)}confirmPasswordReset(e,t){return qA(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Ut(this._delegate,KA(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return JA(this._delegate,e)}isSignInWithEmailLink(e){return WA(this._delegate,e)}async getRedirectResult(){lo(nh(),this._delegate,"operation-not-supported-in-this-environment");const e=await mR(this._delegate,mr);return e?Ut(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){ZM(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=Dy(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=Dy(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return HA(this._delegate,e,t)}sendPasswordResetEmail(e,t){return $A(this._delegate,e,t||void 0)}async setPersistence(e){lL(this._delegate,e);let t;switch(e){case zt.SESSION:t=Tr;break;case zt.LOCAL:t=await Kt(ds)._isAvailable()?ds:Du;break;case zt.NONE:t=ls;break;default:return at("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ut(this._delegate,FA(this._delegate))}signInWithCredential(e){return Ut(this._delegate,xu(this._delegate,e))}signInWithCustomToken(e){return Ut(this._delegate,BA(this._delegate,e))}signInWithEmailAndPassword(e,t){return Ut(this._delegate,GA(this._delegate,e,t))}signInWithEmailLink(e,t){return Ut(this._delegate,QA(this._delegate,e,t))}signInWithPhoneNumber(e,t){return pd(this._delegate,Wk(this._delegate,e,t))}async signInWithPopup(e){return lo(nh(),this._delegate,"operation-not-supported-in-this-environment"),Ut(this._delegate,nR(this._delegate,e,mr))}async signInWithRedirect(e){return lo(nh(),this._delegate,"operation-not-supported-in-this-environment"),await fd(this._delegate),uR(this._delegate,e,mr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return zA(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}md.Persistence=zt;function Dy(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&jn.getOrCreate(o)),error:e,complete:t}}function yL(n,e){const t=hL(n,e);if(typeof self<"u"&&!t.includes(ds)&&t.push(ds),typeof window<"u")for(const r of[Du,Tr])t.includes(r)||t.push(r);return t.includes(ls)||t.push(ls),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(){this.providerId="phone",this._delegate=new gi(AE(Ls.auth()))}static credential(e,t){return gi.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Np.PHONE_SIGN_IN_METHOD=gi.PHONE_SIGN_IN_METHOD;Np.PROVIDER_ID=gi.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vL=F;class wL{constructor(e,t,r=Ls.app()){var i;vL((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new Gk(e,t,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _L="auth-compat";function IL(n){n.INTERNAL.registerComponent(new Pn(_L,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new md(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Fi.EMAIL_SIGNIN,PASSWORD_RESET:Fi.PASSWORD_RESET,RECOVER_EMAIL:Fi.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Fi.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Fi.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Fi.VERIFY_EMAIL}},EmailAuthProvider:Mr,FacebookAuthProvider:wn,GithubAuthProvider:In,GoogleAuthProvider:_n,OAuthProvider:es,SAMLAuthProvider:Vc,PhoneAuthProvider:Np,PhoneMultiFactorGenerator:jw,RecaptchaVerifier:wL,TwitterAuthProvider:bn,Auth:md,AuthCredential:Os,Error:Pt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(eL,tL)}IL(Ls);const ur={apiKey:"AIzaSyCFoWXWUQrM2LSbBQ8l0YLwMXob3BfCEQU",authDomain:"character-eebeb.firebaseapp.com",databaseURL:"https://character-eebeb-default-rtdb.firebaseio.com",projectId:"character-eebeb",storageBucket:"character-eebeb.appspot.com",messagingSenderId:"970965837555",appId:"1:970965837555:web:daaf738b4f273f549e3986"},RE=Ls.initializeApp(ur),NE=RE.firestore(ur.apiKey,ur.authDomain,ur.databaseURL,ur.projectId,ur.storageBucket,ur.messagingSenderId,ur.appId);NE.collection("users");NE.collection("bosses");zw(RE);const xE=cS(uN);xE.use(fN);xE.mount("#app");(function(){function n(e,t,r){function i(a,c){if(!t[a]){if(!e[a]){var u=typeof require=="function"&&require;if(!c&&u)return u(a,!0);if(s)return s(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var h=t[a]={exports:{}};e[a][0].call(h.exports,function(d){var f=e[a][1][d];return i(f||d)},h,h.exports,n,e,t,r)}return t[a].exports}for(var s=typeof require=="function"&&require,o=0;o<r.length;o++)i(r[o]);return i}return n})()({1:[function(n,e,t){var r=n("./lib/client");e.exports={client:r,Client:r}},{"./lib/client":3}],2:[function(n,e,t){function r(c,u){var l=Object.keys(c);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(c);u&&(h=h.filter(function(d){return Object.getOwnPropertyDescriptor(c,d).enumerable})),l.push.apply(l,h)}return l}function i(c){for(var u=1;u<arguments.length;u++){var l=arguments[u]!=null?arguments[u]:{};u%2?r(Object(l),!0).forEach(function(h){s(c,h,l[h])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach(function(h){Object.defineProperty(c,h,Object.getOwnPropertyDescriptor(l,h))})}return c}function s(c,u,l){return u in c?Object.defineProperty(c,u,{value:l,enumerable:!0,configurable:!0,writable:!0}):c[u]=l,c}var o=n("node-fetch"),a=n("./utils");e.exports=function(u,l){var h=u.url!==void 0?u.url:u.uri;if(a.isURL(h)||(h="https://api.twitch.tv/kraken".concat(h[0]==="/"?h:"/".concat(h))),a.isNode()){var d=Object.assign({method:"GET",json:!0},u);if(d.qs){var f=new URLSearchParams(d.qs);h+="?".concat(f)}var m={};"fetchAgent"in this.opts.connection&&(m.agent=this.opts.connection.fetchAgent);var p=o(h,i(i({},m),{},{method:d.method,headers:d.headers,body:d.body})),y={};p.then(function(x){return y={statusCode:x.status,headers:x.headers},d.json?x.json():x.text()}).then(function(x){return l(null,y,x)},function(x){return l(x,y,null)})}else{var _=Object.assign({method:"GET",headers:{}},u,{url:h}),S=new XMLHttpRequest;S.open(_.method,_.url,!0);for(var L in _.headers)S.setRequestHeader(L,_.headers[L]);S.responseType="json",S.addEventListener("load",function(x){S.readyState===4&&(S.status!==200?l(S.status,null,null):l(null,null,S.response))}),S.send()}}},{"./utils":9,"node-fetch":10}],3:[function(n,e,t){(function(r){(function(){function i(K,w){var D=Object.keys(K);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(K);w&&(b=b.filter(function(B){return Object.getOwnPropertyDescriptor(K,B).enumerable})),D.push.apply(D,b)}return D}function s(K){for(var w=1;w<arguments.length;w++){var D=arguments[w]!=null?arguments[w]:{};w%2?i(Object(D),!0).forEach(function(b){o(K,b,D[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(K,Object.getOwnPropertyDescriptors(D)):i(Object(D)).forEach(function(b){Object.defineProperty(K,b,Object.getOwnPropertyDescriptor(D,b))})}return K}function o(K,w,D){return w in K?Object.defineProperty(K,w,{value:D,enumerable:!0,configurable:!0,writable:!0}):K[w]=D,K}function a(K){return h(K)||l(K)||u(K)||c()}function c(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u(K,w){if(K){if(typeof K=="string")return d(K,w);var D=Object.prototype.toString.call(K).slice(8,-1);if(D==="Object"&&K.constructor&&(D=K.constructor.name),D==="Map"||D==="Set")return Array.from(K);if(D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))return d(K,w)}}function l(K){if(typeof Symbol<"u"&&K[Symbol.iterator]!=null||K["@@iterator"]!=null)return Array.from(K)}function h(K){if(Array.isArray(K))return d(K)}function d(K,w){(w==null||w>K.length)&&(w=K.length);for(var D=0,b=new Array(w);D<w;D++)b[D]=K[D];return b}var f=typeof r<"u"?r:typeof window<"u"?window:{},m=f.WebSocket||n("ws"),p=f.fetch||n("node-fetch"),y=n("./api"),_=n("./commands"),S=n("./events").EventEmitter,L=n("./logger"),x=n("./parser"),le=n("./timer"),N=n("./utils"),be=!1,oe=function K(w){if(!(this instanceof K))return new K(w);this.opts=N.get(w,{}),this.opts.channels=this.opts.channels||[],this.opts.connection=this.opts.connection||{},this.opts.identity=this.opts.identity||{},this.opts.options=this.opts.options||{},this.clientId=N.get(this.opts.options.clientId,null),this._globalDefaultChannel=N.channel(N.get(this.opts.options.globalDefaultChannel,"#tmijs")),this._skipMembership=N.get(this.opts.options.skipMembership,!1),this._skipUpdatingEmotesets=N.get(this.opts.options.skipUpdatingEmotesets,!1),this._updateEmotesetsTimer=null,this._updateEmotesetsTimerDelay=N.get(this.opts.options.updateEmotesetsTimer,6e4),this.maxReconnectAttempts=N.get(this.opts.connection.maxReconnectAttempts,1/0),this.maxReconnectInterval=N.get(this.opts.connection.maxReconnectInterval,3e4),this.reconnect=N.get(this.opts.connection.reconnect,!0),this.reconnectDecay=N.get(this.opts.connection.reconnectDecay,1.5),this.reconnectInterval=N.get(this.opts.connection.reconnectInterval,1e3),this.reconnecting=!1,this.reconnections=0,this.reconnectTimer=this.reconnectInterval,this.secure=N.get(this.opts.connection.secure,!this.opts.connection.server&&!this.opts.connection.port),this.emotes="",this.emotesets={},this.channels=[],this.currentLatency=0,this.globaluserstate={},this.lastJoined="",this.latency=new Date,this.moderators={},this.pingLoop=null,this.pingTimeout=null,this.reason="",this.username="",this.userstate={},this.wasCloseCalled=!1,this.ws=null;var D="error";this.opts.options.debug&&(D="info"),this.log=this.opts.logger||L;try{L.setLevel(D)}catch{}this.opts.channels.forEach(function(b,B,Z){return Z[B]=N.channel(b)}),S.call(this),this.setMaxListeners(0)};N.inherits(oe,S);for(var wt in _)oe.prototype[wt]=_[wt];oe.prototype.emits=function(w,D){for(var b=0;b<w.length;b++){var B=b<D.length?D[b]:D[D.length-1];this.emit.apply(this,[w[b]].concat(B))}},oe.prototype.api=function(){be||(this.log.warn("Client.prototype.api is deprecated and will be removed for version 2.0.0"),be=!0),y.apply(void 0,arguments)},oe.prototype.handleMessage=function(w){var D=this;if(w){this.listenerCount("raw_message")&&this.emit("raw_message",JSON.parse(JSON.stringify(w)),w);var b=N.channel(N.get(w.params[0],null)),B=N.get(w.params[1],null),Z=N.get(w.tags["msg-id"],null),Y=w.tags=x.badges(x.badgeInfo(x.emotes(w.tags)));for(var he in Y)if(!(he==="emote-sets"||he==="ban-duration"||he==="bits")){var ie=Y[he];typeof ie=="boolean"?ie=null:ie==="1"?ie=!0:ie==="0"?ie=!1:typeof ie=="string"&&(ie=N.unescapeIRC(ie)),Y[he]=ie}if(w.prefix===null)switch(w.command){case"PING":this.emit("ping"),this._isConnected()&&this.ws.send("PONG");break;case"PONG":{var Mt=new Date;this.currentLatency=(Mt.getTime()-this.latency.getTime())/1e3,this.emits(["pong","_promisePing"],[[this.currentLatency]]),clearTimeout(this.pingTimeout);break}default:this.log.warn(`Could not parse message with no prefix:
`.concat(JSON.stringify(w,null,4)));break}else if(w.prefix==="tmi.twitch.tv")switch(w.command){case"002":case"003":case"004":case"372":case"375":case"CAP":break;case"001":this.username=w.params[0];break;case"376":{this.log.info("Connected to server."),this.userstate[this._globalDefaultChannel]={},this.emits(["connected","_promiseConnect"],[[this.server,this.port],[null]]),this.reconnections=0,this.reconnectTimer=this.reconnectInterval,this.pingLoop=setInterval(function(){D._isConnected()&&D.ws.send("PING"),D.latency=new Date,D.pingTimeout=setTimeout(function(){D.ws!==null&&(D.wasCloseCalled=!1,D.log.error("Ping timeout."),D.ws.close(),clearInterval(D.pingLoop),clearTimeout(D.pingTimeout),clearTimeout(D._updateEmotesetsTimer))},N.get(D.opts.connection.timeout,9999))},6e4);var kt=N.get(this.opts.options.joinInterval,2e3);kt<300&&(kt=300);var nt=new le(kt),We=a(new Set([].concat(a(this.opts.channels),a(this.channels))));this.channels=[];for(var Wt=function(UE){var VE=We[UE];nt.add(function(){D._isConnected()&&D.join(VE).catch(function(BE){return D.log.error(BE)})})},Qt=0;Qt<We.length;Qt++)Wt(Qt);nt.next();break}case"NOTICE":{var _t=[null],Re=[b,Z,B],A=[Z],G=[b,!0],V=[b,!1],Q=[Re,_t],se=[Re,A],g="[".concat(b,"] ").concat(B);switch(Z){case"subs_on":this.log.info("[".concat(b,"] This room is now in subscribers-only mode.")),this.emits(["subscriber","subscribers","_promiseSubscribers"],[G,G,_t]);break;case"subs_off":this.log.info("[".concat(b,"] This room is no longer in subscribers-only mode.")),this.emits(["subscriber","subscribers","_promiseSubscribersoff"],[V,V,_t]);break;case"emote_only_on":this.log.info("[".concat(b,"] This room is now in emote-only mode.")),this.emits(["emoteonly","_promiseEmoteonly"],[G,_t]);break;case"emote_only_off":this.log.info("[".concat(b,"] This room is no longer in emote-only mode.")),this.emits(["emoteonly","_promiseEmoteonlyoff"],[V,_t]);break;case"slow_on":case"slow_off":break;case"followers_on_zero":case"followers_on":case"followers_off":break;case"r9k_on":this.log.info("[".concat(b,"] This room is now in r9k mode.")),this.emits(["r9kmode","r9kbeta","_promiseR9kbeta"],[G,G,_t]);break;case"r9k_off":this.log.info("[".concat(b,"] This room is no longer in r9k mode.")),this.emits(["r9kmode","r9kbeta","_promiseR9kbetaoff"],[V,V,_t]);break;case"room_mods":{var v=B.split(": "),I=(v.length>1?v[1]:"").toLowerCase().split(", ").filter(function(pn){return pn});this.emits(["_promiseMods","mods"],[[null,I],[b,I]]);break}case"no_mods":this.emits(["_promiseMods","mods"],[[null,[]],[b,[]]]);break;case"vips_success":{B.endsWith(".")&&(B=B.slice(0,-1));var C=B.split(": "),k=(C.length>1?C[1]:"").toLowerCase().split(", ").filter(function(pn){return pn});this.emits(["_promiseVips","vips"],[[null,k],[b,k]]);break}case"no_vips":this.emits(["_promiseVips","vips"],[[null,[]],[b,[]]]);break;case"already_banned":case"bad_ban_admin":case"bad_ban_anon":case"bad_ban_broadcaster":case"bad_ban_global_mod":case"bad_ban_mod":case"bad_ban_self":case"bad_ban_staff":case"usage_ban":this.log.info(g),this.emits(["notice","_promiseBan"],se);break;case"ban_success":this.log.info(g),this.emits(["notice","_promiseBan"],Q);break;case"usage_clear":this.log.info(g),this.emits(["notice","_promiseClear"],se);break;case"usage_mods":this.log.info(g),this.emits(["notice","_promiseMods"],[Re,[Z,[]]]);break;case"mod_success":this.log.info(g),this.emits(["notice","_promiseMod"],Q);break;case"usage_vips":this.log.info(g),this.emits(["notice","_promiseVips"],[Re,[Z,[]]]);break;case"usage_vip":case"bad_vip_grantee_banned":case"bad_vip_grantee_already_vip":case"bad_vip_max_vips_reached":case"bad_vip_achievement_incomplete":this.log.info(g),this.emits(["notice","_promiseVip"],[Re,[Z,[]]]);break;case"vip_success":this.log.info(g),this.emits(["notice","_promiseVip"],Q);break;case"usage_mod":case"bad_mod_banned":case"bad_mod_mod":this.log.info(g),this.emits(["notice","_promiseMod"],se);break;case"unmod_success":this.log.info(g),this.emits(["notice","_promiseUnmod"],Q);break;case"unvip_success":this.log.info(g),this.emits(["notice","_promiseUnvip"],Q);break;case"usage_unmod":case"bad_unmod_mod":this.log.info(g),this.emits(["notice","_promiseUnmod"],se);break;case"usage_unvip":case"bad_unvip_grantee_not_vip":this.log.info(g),this.emits(["notice","_promiseUnvip"],se);break;case"color_changed":this.log.info(g),this.emits(["notice","_promiseColor"],Q);break;case"usage_color":case"turbo_only_color":this.log.info(g),this.emits(["notice","_promiseColor"],se);break;case"commercial_success":this.log.info(g),this.emits(["notice","_promiseCommercial"],Q);break;case"usage_commercial":case"bad_commercial_error":this.log.info(g),this.emits(["notice","_promiseCommercial"],se);break;case"hosts_remaining":{this.log.info(g);var O=isNaN(B[0])?0:parseInt(B[0]);this.emits(["notice","_promiseHost"],[Re,[null,~~O]]);break}case"bad_host_hosting":case"bad_host_rate_exceeded":case"bad_host_error":case"usage_host":this.log.info(g),this.emits(["notice","_promiseHost"],[Re,[Z,null]]);break;case"already_r9k_on":case"usage_r9k_on":this.log.info(g),this.emits(["notice","_promiseR9kbeta"],se);break;case"already_r9k_off":case"usage_r9k_off":this.log.info(g),this.emits(["notice","_promiseR9kbetaoff"],se);break;case"timeout_success":this.log.info(g),this.emits(["notice","_promiseTimeout"],Q);break;case"delete_message_success":this.log.info("[".concat(b," ").concat(B,"]")),this.emits(["notice","_promiseDeletemessage"],Q);break;case"already_subs_off":case"usage_subs_off":this.log.info(g),this.emits(["notice","_promiseSubscribersoff"],se);break;case"already_subs_on":case"usage_subs_on":this.log.info(g),this.emits(["notice","_promiseSubscribers"],se);break;case"already_emote_only_off":case"usage_emote_only_off":this.log.info(g),this.emits(["notice","_promiseEmoteonlyoff"],se);break;case"already_emote_only_on":case"usage_emote_only_on":this.log.info(g),this.emits(["notice","_promiseEmoteonly"],se);break;case"usage_slow_on":this.log.info(g),this.emits(["notice","_promiseSlow"],se);break;case"usage_slow_off":this.log.info(g),this.emits(["notice","_promiseSlowoff"],se);break;case"usage_timeout":case"bad_timeout_admin":case"bad_timeout_anon":case"bad_timeout_broadcaster":case"bad_timeout_duration":case"bad_timeout_global_mod":case"bad_timeout_mod":case"bad_timeout_self":case"bad_timeout_staff":this.log.info(g),this.emits(["notice","_promiseTimeout"],se);break;case"untimeout_success":case"unban_success":this.log.info(g),this.emits(["notice","_promiseUnban"],Q);break;case"usage_unban":case"bad_unban_no_ban":this.log.info(g),this.emits(["notice","_promiseUnban"],se);break;case"usage_delete":case"bad_delete_message_error":case"bad_delete_message_broadcaster":case"bad_delete_message_mod":this.log.info(g),this.emits(["notice","_promiseDeletemessage"],se);break;case"usage_unhost":case"not_hosting":this.log.info(g),this.emits(["notice","_promiseUnhost"],se);break;case"whisper_invalid_login":case"whisper_invalid_self":case"whisper_limit_per_min":case"whisper_limit_per_sec":case"whisper_restricted":case"whisper_restricted_recipient":this.log.info(g),this.emits(["notice","_promiseWhisper"],se);break;case"no_permission":case"msg_banned":case"msg_room_not_found":case"msg_channel_suspended":case"tos_ban":case"invalid_user":this.log.info(g),this.emits(["notice","_promiseBan","_promiseClear","_promiseUnban","_promiseTimeout","_promiseDeletemessage","_promiseMods","_promiseMod","_promiseUnmod","_promiseVips","_promiseVip","_promiseUnvip","_promiseCommercial","_promiseHost","_promiseUnhost","_promiseJoin","_promisePart","_promiseR9kbeta","_promiseR9kbetaoff","_promiseSlow","_promiseSlowoff","_promiseFollowers","_promiseFollowersoff","_promiseSubscribers","_promiseSubscribersoff","_promiseEmoteonly","_promiseEmoteonlyoff","_promiseWhisper"],[Re,[Z,b]]);break;case"msg_rejected":case"msg_rejected_mandatory":this.log.info(g),this.emit("automod",b,Z,B);break;case"unrecognized_cmd":this.log.info(g),this.emit("notice",b,Z,B);break;case"cmds_available":case"host_target_went_offline":case"msg_censored_broadcaster":case"msg_duplicate":case"msg_emoteonly":case"msg_verified_email":case"msg_ratelimit":case"msg_subsonly":case"msg_timedout":case"msg_bad_characters":case"msg_channel_blocked":case"msg_facebook":case"msg_followersonly":case"msg_followersonly_followed":case"msg_followersonly_zero":case"msg_slowmode":case"msg_suspended":case"no_help":case"usage_disconnect":case"usage_help":case"usage_me":case"unavailable_command":this.log.info(g),this.emit("notice",b,Z,B);break;case"host_on":case"host_off":break;default:B.includes("Login unsuccessful")||B.includes("Login authentication failed")?(this.wasCloseCalled=!1,this.reconnect=!1,this.reason=B,this.log.error(this.reason),this.ws.close()):B.includes("Error logging in")||B.includes("Improperly formatted auth")?(this.wasCloseCalled=!1,this.reconnect=!1,this.reason=B,this.log.error(this.reason),this.ws.close()):B.includes("Invalid NICK")?(this.wasCloseCalled=!1,this.reconnect=!1,this.reason="Invalid NICK.",this.log.error(this.reason),this.ws.close()):(this.log.warn(`Could not parse NOTICE from tmi.twitch.tv:
`.concat(JSON.stringify(w,null,4))),this.emit("notice",b,Z,B));break}break}case"USERNOTICE":{var $=Y["display-name"]||Y.login,U=Y["msg-param-sub-plan"]||"",q=N.unescapeIRC(N.get(Y["msg-param-sub-plan-name"],""))||null,M=U.includes("Prime"),X={prime:M,plan:U,planName:q},J=~~(Y["msg-param-streak-months"]||0),ne=Y["msg-param-recipient-display-name"]||Y["msg-param-recipient-user-name"],ae=~~Y["msg-param-mass-gift-count"];switch(Y["message-type"]=Z,Z){case"resub":this.emits(["resub","subanniversary"],[[b,$,J,B,Y,X]]);break;case"sub":this.emits(["subscription","sub"],[[b,$,X,B,Y]]);break;case"subgift":this.emit("subgift",b,$,J,ne,X,Y);break;case"anonsubgift":this.emit("anonsubgift",b,J,ne,X,Y);break;case"submysterygift":this.emit("submysterygift",b,$,ae,X,Y);break;case"anonsubmysterygift":this.emit("anonsubmysterygift",b,ae,X,Y);break;case"primepaidupgrade":this.emit("primepaidupgrade",b,$,X,Y);break;case"giftpaidupgrade":{var me=Y["msg-param-sender-name"]||Y["msg-param-sender-login"];this.emit("giftpaidupgrade",b,$,me,Y);break}case"anongiftpaidupgrade":this.emit("anongiftpaidupgrade",b,$,Y);break;case"raid":{var ke=Y["msg-param-displayName"]||Y["msg-param-login"],Te=+Y["msg-param-viewerCount"];this.emit("raided",b,ke,Te,Y);break}case"ritual":{var Ve=Y["msg-param-ritual-name"];switch(Ve){case"new_chatter":this.emit("newchatter",b,$,Y,B);break;default:this.emit("ritual",Ve,b,$,Y,B);break}break}default:this.emit("usernotice",Z,b,Y,B);break}break}case"HOSTTARGET":{var It=B.split(" "),fn=~~It[1]||0;It[0]==="-"?(this.log.info("[".concat(b,"] Exited host mode.")),this.emits(["unhost","_promiseUnhost"],[[b,fn],[null]])):(this.log.info("[".concat(b,"] Now hosting ").concat(It[0]," for ").concat(fn," viewer(s).")),this.emit("hosting",b,It[0],fn));break}case"CLEARCHAT":if(w.params.length>1){var Mi=N.get(w.tags["ban-duration"],null);Mi===null?(this.log.info("[".concat(b,"] ").concat(B," has been banned.")),this.emit("ban",b,B,null,w.tags)):(this.log.info("[".concat(b,"] ").concat(B," has been timed out for ").concat(Mi," seconds.")),this.emit("timeout",b,B,null,~~Mi,w.tags))}else this.log.info("[".concat(b,"] Chat was cleared by a moderator.")),this.emits(["clearchat","_promiseClear"],[[b],[null]]);break;case"CLEARMSG":if(w.params.length>1){var qr=B,Hs=Y.login;Y["message-type"]="messagedeleted",this.log.info("[".concat(b,"] ").concat(Hs,"'s message has been deleted.")),this.emit("messagedeleted",b,Hs,qr,Y)}break;case"RECONNECT":this.log.info("Received RECONNECT request from Twitch.."),this.log.info("Disconnecting and reconnecting in ".concat(Math.round(this.reconnectTimer/1e3)," seconds..")),this.disconnect().catch(function(pn){return D.log.error(pn)}),setTimeout(function(){return D.connect().catch(function(pn){return D.log.error(pn)})},this.reconnectTimer);break;case"USERSTATE":w.tags.username=this.username,w.tags["user-type"]==="mod"&&(this.moderators[b]||(this.moderators[b]=[]),this.moderators[b].includes(this.username)||this.moderators[b].push(this.username)),!N.isJustinfan(this.getUsername())&&!this.userstate[b]&&(this.userstate[b]=Y,this.lastJoined=b,this.channels.push(b),this.log.info("Joined ".concat(b)),this.emit("join",b,N.username(this.getUsername()),!0)),w.tags["emote-sets"]!==this.emotes&&this._updateEmoteset(w.tags["emote-sets"]),this.userstate[b]=Y;break;case"GLOBALUSERSTATE":this.globaluserstate=Y,this.emit("globaluserstate",Y),typeof w.tags["emote-sets"]<"u"&&this._updateEmoteset(w.tags["emote-sets"]);break;case"ROOMSTATE":if(N.channel(this.lastJoined)===b&&this.emit("_promiseJoin",null,b),w.tags.channel=b,this.emit("roomstate",b,w.tags),!N.hasOwn(w.tags,"subs-only")){if(N.hasOwn(w.tags,"slow"))if(typeof w.tags.slow=="boolean"&&!w.tags.slow){var bt=[b,!1,0];this.log.info("[".concat(b,"] This room is no longer in slow mode.")),this.emits(["slow","slowmode","_promiseSlowoff"],[bt,bt,[null]])}else{var Yt=~~w.tags.slow,Ws=[b,!0,Yt];this.log.info("[".concat(b,"] This room is now in slow mode.")),this.emits(["slow","slowmode","_promiseSlow"],[Ws,Ws,[null]])}if(N.hasOwn(w.tags,"followers-only"))if(w.tags["followers-only"]==="-1"){var xp=[b,!1,0];this.log.info("[".concat(b,"] This room is no longer in followers-only mode.")),this.emits(["followersonly","followersmode","_promiseFollowersoff"],[xp,xp,[null]])}else{var DE=~~w.tags["followers-only"],Dp=[b,!0,DE];this.log.info("[".concat(b,"] This room is now in follower-only mode.")),this.emits(["followersonly","followersmode","_promiseFollowers"],[Dp,Dp,[null]])}}break;case"SERVERCHANGE":break;default:this.log.warn(`Could not parse message from tmi.twitch.tv:
`.concat(JSON.stringify(w,null,4)));break}else if(w.prefix==="jtv")switch(w.command){case"MODE":B==="+o"?(this.moderators[b]||(this.moderators[b]=[]),this.moderators[b].includes(w.params[2])||this.moderators[b].push(w.params[2]),this.emit("mod",b,w.params[2])):B==="-o"&&(this.moderators[b]||(this.moderators[b]=[]),this.moderators[b].filter(function(pn){return pn!==w.params[2]}),this.emit("unmod",b,w.params[2]));break;default:this.log.warn(`Could not parse message from jtv:
`.concat(JSON.stringify(w,null,4)));break}else switch(w.command){case"353":this.emit("names",w.params[2],w.params[3].split(" "));break;case"366":break;case"JOIN":{var $a=w.prefix.split("!")[0];N.isJustinfan(this.getUsername())&&this.username===$a&&(this.lastJoined=b,this.channels.push(b),this.log.info("Joined ".concat(b)),this.emit("join",b,$a,!0)),this.username!==$a&&this.emit("join",b,$a,!1);break}case"PART":{var Pp=!1,Op=w.prefix.split("!")[0];if(this.username===Op){Pp=!0,this.userstate[b]&&delete this.userstate[b];var Qs=this.channels.indexOf(b);Qs!==-1&&this.channels.splice(Qs,1),Qs=this.opts.channels.indexOf(b),Qs!==-1&&this.opts.channels.splice(Qs,1),this.log.info("Left ".concat(b)),this.emit("_promisePart",null)}this.emit("part",b,Op,Pp);break}case"WHISPER":{var Mp=w.prefix.split("!")[0];this.log.info("[WHISPER] <".concat(Mp,">: ").concat(B)),N.hasOwn(w.tags,"username")||(w.tags.username=Mp),w.tags["message-type"]="whisper";var PE=N.channel(w.tags.username);this.emits(["whisper","message"],[[PE,w.tags,B,!1]]);break}case"PRIVMSG":if(w.tags.username=w.prefix.split("!")[0],w.tags.username==="jtv"){var Lp=N.username(B.split(" ")[0]),Fp=B.includes("auto");if(B.includes("hosting you for")){var OE=N.extractNumber(B);this.emit("hosted",b,Lp,OE,Fp)}else B.includes("hosting you")&&this.emit("hosted",b,Lp,0,Fp)}else{var Up=N.get(this.opts.options.messagesLogLevel,"info"),qa=N.actionMessage(B);if(w.tags["message-type"]=qa?"action":"chat",B=qa?qa[1]:B,N.hasOwn(w.tags,"bits"))this.emit("cheer",b,w.tags,B);else{if(N.hasOwn(w.tags,"msg-id")){if(w.tags["msg-id"]==="highlighted-message"){var ME=w.tags["msg-id"];this.emit("redeem",b,w.tags.username,ME,w.tags,B)}else if(w.tags["msg-id"]==="skip-subs-mode-message"){var LE=w.tags["msg-id"];this.emit("redeem",b,w.tags.username,LE,w.tags,B)}}else if(N.hasOwn(w.tags,"custom-reward-id")){var FE=w.tags["custom-reward-id"];this.emit("redeem",b,w.tags.username,FE,w.tags,B)}qa?(this.log[Up]("[".concat(b,"] *<").concat(w.tags.username,">: ").concat(B)),this.emits(["action","message"],[[b,w.tags,B,!1]])):(this.log[Up]("[".concat(b,"] <").concat(w.tags.username,">: ").concat(B)),this.emits(["chat","message"],[[b,w.tags,B,!1]]))}}break;default:this.log.warn(`Could not parse message:
`.concat(JSON.stringify(w,null,4)));break}}},oe.prototype.connect=function(){var w=this;return new Promise(function(D,b){w.server=N.get(w.opts.connection.server,"irc-ws.chat.twitch.tv"),w.port=N.get(w.opts.connection.port,80),w.secure&&(w.port=443),w.port===443&&(w.secure=!0),w.reconnectTimer=w.reconnectTimer*w.reconnectDecay,w.reconnectTimer>=w.maxReconnectInterval&&(w.reconnectTimer=w.maxReconnectInterval),w._openConnection(),w.once("_promiseConnect",function(B){B?b(B):D([w.server,~~w.port])})})},oe.prototype._openConnection=function(){var w="".concat(this.secure?"wss":"ws","://").concat(this.server,":").concat(this.port,"/"),D={};"agent"in this.opts.connection&&(D.agent=this.opts.connection.agent),this.ws=new m(w,"irc",D),this.ws.onmessage=this._onMessage.bind(this),this.ws.onerror=this._onError.bind(this),this.ws.onclose=this._onClose.bind(this),this.ws.onopen=this._onOpen.bind(this)},oe.prototype._onOpen=function(){var w=this;this._isConnected()&&(this.log.info("Connecting to ".concat(this.server," on port ").concat(this.port,"..")),this.emit("connecting",this.server,~~this.port),this.username=N.get(this.opts.identity.username,N.justinfan()),this._getToken().then(function(D){var b=N.password(D);w.log.info("Sending authentication to server.."),w.emit("logon");var B="twitch.tv/tags twitch.tv/commands";w._skipMembership||(B+=" twitch.tv/membership"),w.ws.send("CAP REQ :"+B),b?w.ws.send("PASS ".concat(b)):N.isJustinfan(w.username)&&w.ws.send("PASS SCHMOOPIIE"),w.ws.send("NICK ".concat(w.username))}).catch(function(D){w.emits(["_promiseConnect","disconnected"],[[D],["Could not get a token."]])}))},oe.prototype._getToken=function(){var w=this.opts.identity.password,D;return typeof w=="function"?(D=w(),D instanceof Promise?D:Promise.resolve(D)):Promise.resolve(w)},oe.prototype._onMessage=function(w){var D=this,b=w.data.trim().split(`\r
`);b.forEach(function(B){var Z=x.msg(B);Z&&D.handleMessage(Z)})},oe.prototype._onError=function(){var w=this;this.moderators={},this.userstate={},this.globaluserstate={},clearInterval(this.pingLoop),clearTimeout(this.pingTimeout),clearTimeout(this._updateEmotesetsTimer),this.reason=this.ws===null?"Connection closed.":"Unable to connect.",this.emits(["_promiseConnect","disconnected"],[[this.reason]]),this.reconnect&&this.reconnections===this.maxReconnectAttempts&&(this.emit("maxreconnect"),this.log.error("Maximum reconnection attempts reached.")),this.reconnect&&!this.reconnecting&&this.reconnections<=this.maxReconnectAttempts-1&&(this.reconnecting=!0,this.reconnections=this.reconnections+1,this.log.error("Reconnecting in ".concat(Math.round(this.reconnectTimer/1e3)," seconds..")),this.emit("reconnect"),setTimeout(function(){w.reconnecting=!1,w.connect().catch(function(D){return w.log.error(D)})},this.reconnectTimer)),this.ws=null},oe.prototype._onClose=function(){var w=this;this.moderators={},this.userstate={},this.globaluserstate={},clearInterval(this.pingLoop),clearTimeout(this.pingTimeout),clearTimeout(this._updateEmotesetsTimer),this.wasCloseCalled?(this.wasCloseCalled=!1,this.reason="Connection closed.",this.log.info(this.reason),this.emits(["_promiseConnect","_promiseDisconnect","disconnected"],[[this.reason],[null],[this.reason]])):(this.emits(["_promiseConnect","disconnected"],[[this.reason]]),this.reconnect&&this.reconnections===this.maxReconnectAttempts&&(this.emit("maxreconnect"),this.log.error("Maximum reconnection attempts reached.")),this.reconnect&&!this.reconnecting&&this.reconnections<=this.maxReconnectAttempts-1&&(this.reconnecting=!0,this.reconnections=this.reconnections+1,this.log.error("Could not connect to server. Reconnecting in ".concat(Math.round(this.reconnectTimer/1e3)," seconds..")),this.emit("reconnect"),setTimeout(function(){w.reconnecting=!1,w.connect().catch(function(D){return w.log.error(D)})},this.reconnectTimer))),this.ws=null},oe.prototype._getPromiseDelay=function(){return this.currentLatency<=600?600:this.currentLatency+100},oe.prototype._sendCommand=function(w,D,b,B){var Z=this;return new Promise(function(Y,he){if(Z._isConnected())(w===null||typeof w=="number")&&(w===null&&(w=Z._getPromiseDelay()),N.promiseDelay(w).then(function(){return he("No response from Twitch.")}));else return he("Not connected to server.");if(D!==null){var ie=N.channel(D);Z.log.info("[".concat(ie,"] Executing command: ").concat(b)),Z.ws.send("PRIVMSG ".concat(ie," :").concat(b))}else Z.log.info("Executing command: ".concat(b)),Z.ws.send(b);typeof B=="function"?B(Y,he):Y()})},oe.prototype._sendMessage=function(w,D,b,B){var Z=this;return new Promise(function(Y,he){if(Z._isConnected()){if(N.isJustinfan(Z.getUsername()))return he("Cannot send anonymous messages.")}else return he("Not connected to server.");var ie=N.channel(D);if(Z.userstate[ie]||(Z.userstate[ie]={}),b.length>=500){var Mt=N.splitLine(b,500);b=Mt[0],setTimeout(function(){Z._sendMessage(w,D,Mt[1],function(){})},350)}Z.ws.send("PRIVMSG ".concat(ie," :").concat(b));var kt={};Object.keys(Z.emotesets).forEach(function(Qt){return Z.emotesets[Qt].forEach(function(_t){var Re=N.isRegex(_t.code)?x.emoteRegex:x.emoteString;return Re(b,_t.code,_t.id,kt)})});var nt=Object.assign(Z.userstate[ie],x.emotes({emotes:x.transformEmotes(kt)||null})),We=N.get(Z.opts.options.messagesLogLevel,"info"),Wt=N.actionMessage(b);Wt?(nt["message-type"]="action",Z.log[We]("[".concat(ie,"] *<").concat(Z.getUsername(),">: ").concat(Wt[1])),Z.emits(["action","message"],[[ie,nt,Wt[1],!0]])):(nt["message-type"]="chat",Z.log[We]("[".concat(ie,"] <").concat(Z.getUsername(),">: ").concat(b)),Z.emits(["chat","message"],[[ie,nt,b,!0]])),typeof B=="function"?B(Y,he):Y()})},oe.prototype._updateEmoteset=function(w){var D=this,b=w!==void 0;if(b&&(w===this.emotes?b=!1:this.emotes=w),this._skipUpdatingEmotesets){b&&this.emit("emotesets",w,{});return}var B=function(){D._updateEmotesetsTimerDelay>0&&(clearTimeout(D._updateEmotesetsTimer),D._updateEmotesetsTimer=setTimeout(function(){return D._updateEmoteset(w)},D._updateEmotesetsTimerDelay))};this._getToken().then(function(Z){var Y="https://api.twitch.tv/kraken/chat/emoticon_images?emotesets=".concat(w),he={};return"fetchAgent"in D.opts.connection&&(he.agent=D.opts.connection.fetchAgent),p(Y,s(s({},he),{},{headers:{Accept:"application/vnd.twitchtv.v5+json",Authorization:"OAuth ".concat(N.token(Z)),"Client-ID":D.clientId}}))}).then(function(Z){return Z.json()}).then(function(Z){D.emotesets=Z.emoticon_sets||{},D.emit("emotesets",w,D.emotesets),B()}).catch(function(){return B()})},oe.prototype.getUsername=function(){return this.username},oe.prototype.getOptions=function(){return this.opts},oe.prototype.getChannels=function(){return this.channels},oe.prototype.isMod=function(w,D){var b=N.channel(w);return this.moderators[b]||(this.moderators[b]=[]),this.moderators[b].includes(N.username(D))},oe.prototype.readyState=function(){return this.ws===null?"CLOSED":["CONNECTING","OPEN","CLOSING","CLOSED"][this.ws.readyState]},oe.prototype._isConnected=function(){return this.ws!==null&&this.ws.readyState===1},oe.prototype.disconnect=function(){var w=this;return new Promise(function(D,b){w.ws!==null&&w.ws.readyState!==3?(w.wasCloseCalled=!0,w.log.info("Disconnecting from server.."),w.ws.close(),w.once("_promiseDisconnect",function(){return D([w.server,~~w.port])})):(w.log.error("Cannot disconnect from server. Socket is not opened or connection is already closing."),b("Cannot disconnect from server. Socket is not opened or connection is already closing."))})},oe.prototype.off=oe.prototype.removeListener,typeof e<"u"&&e.exports&&(e.exports=oe),typeof window<"u"&&(window.tmi={client:oe,Client:oe})}).call(this)}).call(this,typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{})},{"./api":2,"./commands":4,"./events":5,"./logger":6,"./parser":7,"./timer":8,"./utils":9,"node-fetch":10,ws:10}],4:[function(n,e,t){var r=n("./utils");function i(h,d){var f=this;return h=r.channel(h),d=r.get(d,30),this._sendCommand(null,h,"/followers ".concat(d),function(m,p){f.once("_promiseFollowers",function(y){y?p(y):m([h,~~d])})})}function s(h){var d=this;return h=r.channel(h),this._sendCommand(null,h,"/followersoff",function(f,m){d.once("_promiseFollowersoff",function(p){p?m(p):f([h])})})}function o(h){var d=this;return h=r.channel(h),this._sendCommand(null,null,"PART ".concat(h),function(f,m){d.once("_promisePart",function(p){p?m(p):f([h])})})}function a(h){var d=this;return h=r.channel(h),this._sendCommand(null,h,"/r9kbeta",function(f,m){d.once("_promiseR9kbeta",function(p){p?m(p):f([h])})})}function c(h){var d=this;return h=r.channel(h),this._sendCommand(null,h,"/r9kbetaoff",function(f,m){d.once("_promiseR9kbetaoff",function(p){p?m(p):f([h])})})}function u(h,d){var f=this;return h=r.channel(h),d=r.get(d,300),this._sendCommand(null,h,"/slow ".concat(d),function(m,p){f.once("_promiseSlow",function(y){y?p(y):m([h,~~d])})})}function l(h){var d=this;return h=r.channel(h),this._sendCommand(null,h,"/slowoff",function(f,m){d.once("_promiseSlowoff",function(p){p?m(p):f([h])})})}e.exports={action:function(d,f){return d=r.channel(d),f="ACTION ".concat(f,""),this._sendMessage(this._getPromiseDelay(),d,f,function(m,p){m([d,f])})},ban:function(d,f,m){var p=this;return d=r.channel(d),f=r.username(f),m=r.get(m,""),this._sendCommand(null,d,"/ban ".concat(f," ").concat(m),function(y,_){p.once("_promiseBan",function(S){S?_(S):y([d,f,m])})})},clear:function(d){var f=this;return d=r.channel(d),this._sendCommand(null,d,"/clear",function(m,p){f.once("_promiseClear",function(y){y?p(y):m([d])})})},color:function(d,f){var m=this;return f=r.get(f,d),this._sendCommand(null,"#tmijs","/color ".concat(f),function(p,y){m.once("_promiseColor",function(_){_?y(_):p([f])})})},commercial:function(d,f){var m=this;return d=r.channel(d),f=r.get(f,30),this._sendCommand(null,d,"/commercial ".concat(f),function(p,y){m.once("_promiseCommercial",function(_){_?y(_):p([d,~~f])})})},deletemessage:function(d,f){var m=this;return d=r.channel(d),this._sendCommand(null,d,"/delete ".concat(f),function(p,y){m.once("_promiseDeletemessage",function(_){_?y(_):p([d])})})},emoteonly:function(d){var f=this;return d=r.channel(d),this._sendCommand(null,d,"/emoteonly",function(m,p){f.once("_promiseEmoteonly",function(y){y?p(y):m([d])})})},emoteonlyoff:function(d){var f=this;return d=r.channel(d),this._sendCommand(null,d,"/emoteonlyoff",function(m,p){f.once("_promiseEmoteonlyoff",function(y){y?p(y):m([d])})})},followersonly:i,followersmode:i,followersonlyoff:s,followersmodeoff:s,host:function(d,f){var m=this;return d=r.channel(d),f=r.username(f),this._sendCommand(2e3,d,"/host ".concat(f),function(p,y){m.once("_promiseHost",function(_,S){_?y(_):p([d,f,~~S])})})},join:function(d){var f=this;return d=r.channel(d),this._sendCommand(void 0,null,"JOIN ".concat(d),function(m,p){var y="_promiseJoin",_=!1,S=function x(le,N){d===r.channel(N)&&(f.removeListener(y,x),_=!0,le?p(le):m([d]))};f.on(y,S);var L=f._getPromiseDelay();r.promiseDelay(L).then(function(){_||f.emit(y,"No response from Twitch.",d)})})},mod:function(d,f){var m=this;return d=r.channel(d),f=r.username(f),this._sendCommand(null,d,"/mod ".concat(f),function(p,y){m.once("_promiseMod",function(_){_?y(_):p([d,f])})})},mods:function(d){var f=this;return d=r.channel(d),this._sendCommand(null,d,"/mods",function(m,p){f.once("_promiseMods",function(y,_){y?p(y):(_.forEach(function(S){f.moderators[d]||(f.moderators[d]=[]),f.moderators[d].includes(S)||f.moderators[d].push(S)}),m(_))})})},part:o,leave:o,ping:function(){var d=this;return this._sendCommand(null,null,"PING",function(f,m){d.latency=new Date,d.pingTimeout=setTimeout(function(){d.ws!==null&&(d.wasCloseCalled=!1,d.log.error("Ping timeout."),d.ws.close(),clearInterval(d.pingLoop),clearTimeout(d.pingTimeout))},r.get(d.opts.connection.timeout,9999)),d.once("_promisePing",function(p){return f([parseFloat(p)])})})},r9kbeta:a,r9kmode:a,r9kbetaoff:c,r9kmodeoff:c,raw:function(d){return this._sendCommand(null,null,d,function(f,m){f([d])})},say:function(d,f){return d=r.channel(d),f.startsWith(".")&&!f.startsWith("..")||f.startsWith("/")||f.startsWith("\\")?f.substr(1,3)==="me "?this.action(d,f.substr(4)):this._sendCommand(null,d,f,function(m,p){m([d,f])}):this._sendMessage(this._getPromiseDelay(),d,f,function(m,p){m([d,f])})},slow:u,slowmode:u,slowoff:l,slowmodeoff:l,subscribers:function(d){var f=this;return d=r.channel(d),this._sendCommand(null,d,"/subscribers",function(m,p){f.once("_promiseSubscribers",function(y){y?p(y):m([d])})})},subscribersoff:function(d){var f=this;return d=r.channel(d),this._sendCommand(null,d,"/subscribersoff",function(m,p){f.once("_promiseSubscribersoff",function(y){y?p(y):m([d])})})},timeout:function(d,f,m,p){var y=this;return d=r.channel(d),f=r.username(f),m!==null&&!r.isInteger(m)&&(p=m,m=300),m=r.get(m,300),p=r.get(p,""),this._sendCommand(null,d,"/timeout ".concat(f," ").concat(m," ").concat(p),function(_,S){y.once("_promiseTimeout",function(L){L?S(L):_([d,f,~~m,p])})})},unban:function(d,f){var m=this;return d=r.channel(d),f=r.username(f),this._sendCommand(null,d,"/unban ".concat(f),function(p,y){m.once("_promiseUnban",function(_){_?y(_):p([d,f])})})},unhost:function(d){var f=this;return d=r.channel(d),this._sendCommand(2e3,d,"/unhost",function(m,p){f.once("_promiseUnhost",function(y){y?p(y):m([d])})})},unmod:function(d,f){var m=this;return d=r.channel(d),f=r.username(f),this._sendCommand(null,d,"/unmod ".concat(f),function(p,y){m.once("_promiseUnmod",function(_){_?y(_):p([d,f])})})},unvip:function(d,f){var m=this;return d=r.channel(d),f=r.username(f),this._sendCommand(null,d,"/unvip ".concat(f),function(p,y){m.once("_promiseUnvip",function(_){_?y(_):p([d,f])})})},vip:function(d,f){var m=this;return d=r.channel(d),f=r.username(f),this._sendCommand(null,d,"/vip ".concat(f),function(p,y){m.once("_promiseVip",function(_){_?y(_):p([d,f])})})},vips:function(d){var f=this;return d=r.channel(d),this._sendCommand(null,d,"/vips",function(m,p){f.once("_promiseVips",function(y,_){y?p(y):m(_)})})},whisper:function(d,f){var m=this;return d=r.username(d),d===this.getUsername()?Promise.reject("Cannot send a whisper to the same account."):this._sendCommand(null,"#tmijs","/w ".concat(d," ").concat(f),function(p,y){m.once("_promiseWhisper",function(_){_&&y(_)})}).catch(function(p){if(p&&typeof p=="string"&&p.indexOf("No response from Twitch.")!==0)throw p;var y=r.channel(d),_=Object.assign({"message-type":"whisper","message-id":null,"thread-id":null,username:m.getUsername()},m.globaluserstate);return m.emits(["whisper","message"],[[y,_,f,!0],[y,_,f,!0]]),[d,f]})}}},{"./utils":9}],5:[function(n,e,t){function r(u){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?r=function(h){return typeof h}:r=function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},r(u)}function i(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}e.exports=i,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._maxListeners=void 0,i.defaultMaxListeners=10,i.prototype.setMaxListeners=function(u){if(!o(u)||u<0||isNaN(u))throw TypeError("n must be a positive number");return this._maxListeners=u,this},i.prototype.emit=function(u){var l,h,d,f,m,p;if(this._events||(this._events={}),u==="error"&&(!this._events.error||a(this._events.error)&&!this._events.error.length))throw l=arguments[1],l instanceof Error?l:TypeError('Uncaught, unspecified "error" event.');if(h=this._events[u],c(h))return!1;if(s(h))switch(arguments.length){case 1:h.call(this);break;case 2:h.call(this,arguments[1]);break;case 3:h.call(this,arguments[1],arguments[2]);break;default:f=Array.prototype.slice.call(arguments,1),h.apply(this,f)}else if(a(h))for(f=Array.prototype.slice.call(arguments,1),p=h.slice(),d=p.length,m=0;m<d;m++)p[m].apply(this,f);return!0},i.prototype.addListener=function(u,l){var h;if(!s(l))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",u,s(l.listener)?l.listener:l),this._events[u]?a(this._events[u])?this._events[u].push(l):this._events[u]=[this._events[u],l]:this._events[u]=l,a(this._events[u])&&!this._events[u].warned&&(c(this._maxListeners)?h=i.defaultMaxListeners:h=this._maxListeners,h&&h>0&&this._events[u].length>h&&(this._events[u].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[u].length),typeof console.trace=="function"&&console.trace())),this},i.prototype.on=i.prototype.addListener,i.prototype.once=function(u,l){if(!s(l))throw TypeError("listener must be a function");var h=!1;if(this._events.hasOwnProperty(u)&&u.charAt(0)==="_"){var d=1,f=u;for(var m in this._events)this._events.hasOwnProperty(m)&&m.startsWith(f)&&d++;u=u+d}function p(){u.charAt(0)==="_"&&!isNaN(u.substr(u.length-1))&&(u=u.substring(0,u.length-1)),this.removeListener(u,p),h||(h=!0,l.apply(this,arguments))}return p.listener=l,this.on(u,p),this},i.prototype.removeListener=function(u,l){var h,d,f,m;if(!s(l))throw TypeError("listener must be a function");if(!this._events||!this._events[u])return this;if(h=this._events[u],f=h.length,d=-1,h===l||s(h.listener)&&h.listener===l){if(delete this._events[u],this._events.hasOwnProperty(u+"2")&&u.charAt(0)==="_"){var p=u;for(var y in this._events)this._events.hasOwnProperty(y)&&y.startsWith(p)&&(isNaN(parseInt(y.substr(y.length-1)))||(this._events[u+parseInt(y.substr(y.length-1)-1)]=this._events[y],delete this._events[y]));this._events[u]=this._events[u+"1"],delete this._events[u+"1"]}this._events.removeListener&&this.emit("removeListener",u,l)}else if(a(h)){for(m=f;m-- >0;)if(h[m]===l||h[m].listener&&h[m].listener===l){d=m;break}if(d<0)return this;h.length===1?(h.length=0,delete this._events[u]):h.splice(d,1),this._events.removeListener&&this.emit("removeListener",u,l)}return this},i.prototype.removeAllListeners=function(u){var l,h;if(!this._events)return this;if(!this._events.removeListener)return arguments.length===0?this._events={}:this._events[u]&&delete this._events[u],this;if(arguments.length===0){for(l in this._events)l!=="removeListener"&&this.removeAllListeners(l);return this.removeAllListeners("removeListener"),this._events={},this}if(h=this._events[u],s(h))this.removeListener(u,h);else if(h)for(;h.length;)this.removeListener(u,h[h.length-1]);return delete this._events[u],this},i.prototype.listeners=function(u){var l;return!this._events||!this._events[u]?l=[]:s(this._events[u])?l=[this._events[u]]:l=this._events[u].slice(),l},i.prototype.listenerCount=function(u){if(this._events){var l=this._events[u];if(s(l))return 1;if(l)return l.length}return 0},i.listenerCount=function(u,l){return u.listenerCount(l)};function s(u){return typeof u=="function"}function o(u){return typeof u=="number"}function a(u){return r(u)==="object"&&u!==null}function c(u){return u===void 0}},{}],6:[function(n,e,t){var r=n("./utils"),i="info",s={trace:0,debug:1,info:2,warn:3,error:4,fatal:5};function o(a){return function(c){s[a]>=s[i]&&console.log("[".concat(r.formatDate(new Date),"] ").concat(a,": ").concat(c))}}e.exports={setLevel:function(c){i=c},trace:o("trace"),debug:o("debug"),info:o("info"),warn:o("warn"),error:o("error"),fatal:o("fatal")}},{"./utils":9}],7:[function(n,e,t){var r=n("./utils"),i=/\S+/g;function s(o,a){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:",",u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"/",l=arguments.length>4?arguments[4]:void 0,h=o[a];if(h===void 0)return o;var d=typeof h=="string";if(o[a+"-raw"]=d?h:null,h===!0)return o[a]=null,o;if(o[a]={},d)for(var f=h.split(c),m=0;m<f.length;m++){var p=f[m].split(u),y=p[1];l!==void 0&&y&&(y=y.split(l)),o[a][p[0]]=y||null}return o}e.exports={badges:function(a){return s(a,"badges")},badgeInfo:function(a){return s(a,"badge-info")},emotes:function(a){return s(a,"emotes","/",":",",")},emoteRegex:function(a,c,u,l){i.lastIndex=0;for(var h=new RegExp("(\\b|^|\\s)"+r.unescapeHtml(c)+"(\\b|$|\\s)"),d;(d=i.exec(a))!==null;)h.test(d[0])&&(l[u]=l[u]||[],l[u].push([d.index,i.lastIndex-1]))},emoteString:function(a,c,u,l){i.lastIndex=0;for(var h;(h=i.exec(a))!==null;)h[0]===r.unescapeHtml(c)&&(l[u]=l[u]||[],l[u].push([h.index,i.lastIndex-1]))},transformEmotes:function(a){var c="";return Object.keys(a).forEach(function(u){c="".concat(c+u,":"),a[u].forEach(function(l){return c="".concat(c+l.join("-"),",")}),c="".concat(c.slice(0,-1),"/")}),c.slice(0,-1)},formTags:function(a){var c=[];for(var u in a){var l=r.escapeIRC(a[u]);c.push("".concat(u,"=").concat(l))}return"@".concat(c.join(";"))},msg:function(a){var c={raw:a,tags:{},prefix:null,command:null,params:[]},u=0,l=0;if(a.charCodeAt(0)===64){if(l=a.indexOf(" "),l===-1)return null;for(var h=a.slice(1,l).split(";"),d=0;d<h.length;d++){var f=h[d],m=f.split("=");c.tags[m[0]]=f.substring(f.indexOf("=")+1)||!0}u=l+1}for(;a.charCodeAt(u)===32;)u++;if(a.charCodeAt(u)===58){if(l=a.indexOf(" ",u),l===-1)return null;for(c.prefix=a.slice(u+1,l),u=l+1;a.charCodeAt(u)===32;)u++}if(l=a.indexOf(" ",u),l===-1)return a.length>u?(c.command=a.slice(u),c):null;for(c.command=a.slice(u,l),u=l+1;a.charCodeAt(u)===32;)u++;for(;u<a.length;){if(l=a.indexOf(" ",u),a.charCodeAt(u)===58){c.params.push(a.slice(u+1));break}if(l!==-1){for(c.params.push(a.slice(u,l)),u=l+1;a.charCodeAt(u)===32;)u++;continue}if(l===-1){c.params.push(a.slice(u));break}}return c}}},{"./utils":9}],8:[function(n,e,t){function r(a,c){if(!(a instanceof c))throw new TypeError("Cannot call a class as a function")}function i(a,c){for(var u=0;u<c.length;u++){var l=c[u];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(a,l.key,l)}}function s(a,c,u){return c&&i(a.prototype,c),u&&i(a,u),a}var o=function(){function a(c){r(this,a),this.queue=[],this.index=0,this.defaultDelay=c===void 0?3e3:c}return s(a,[{key:"add",value:function(u,l){this.queue.push({fn:u,delay:l})}},{key:"next",value:function(){var u=this,l=this.index++,h=this.queue[l];if(h){var d=this.queue[this.index];if(h.fn(),d){var f=d.delay===void 0?this.defaultDelay:d.delay;setTimeout(function(){return u.next()},f)}}}}]),a}();e.exports=o},{}],9:[function(n,e,t){(function(r){(function(){function i(m){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?i=function(y){return typeof y}:i=function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},i(m)}var s=/^\u0001ACTION ([^\u0001]+)\u0001$/,o=/^(justinfan)(\d+$)/,a=/\\([sn:r\\])/g,c=/([ \n;\r\\])/g,u={s:" ",n:"",":":";",r:""},l={" ":"s","\n":"n",";":":","\r":"r"},h=new RegExp("^(?:(?:https?|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))\\.?)(?::\\d{2,5})?(?:[/?#]\\S*)?$","i"),d=/[|\\^$*+?:#]/,f=e.exports={get:function(p,y){return typeof p>"u"?y:p},hasOwn:function(p,y){return{}.hasOwnProperty.call(p,y)},promiseDelay:function(p){return new Promise(function(y){return setTimeout(y,p)})},isFinite:function(m){function p(y){return m.apply(this,arguments)}return p.toString=function(){return m.toString()},p}(function(m){return isFinite(m)&&!isNaN(parseFloat(m))}),toNumber:function(p,y){if(p===null)return 0;var _=Math.pow(10,f.isFinite(y)?y:0);return Math.round(p*_)/_},isInteger:function(p){return!isNaN(f.toNumber(p,0))},isRegex:function(p){return d.test(p)},isURL:function(p){return h.test(p)},justinfan:function(){return"justinfan".concat(Math.floor(Math.random()*8e4+1e3))},isJustinfan:function(p){return o.test(p)},channel:function(p){var y=(p||"").toLowerCase();return y[0]==="#"?y:"#"+y},username:function(p){var y=(p||"").toLowerCase();return y[0]==="#"?y.slice(1):y},token:function(p){return p?p.toLowerCase().replace("oauth:",""):""},password:function(p){var y=f.token(p);return y?"oauth:".concat(y):""},actionMessage:function(p){return p.match(s)},replaceAll:function(p,y){if(p===null||typeof p>"u")return null;for(var _ in y)p=p.replace(new RegExp(_,"g"),y[_]);return p},unescapeHtml:function(p){return p.replace(/\\&amp\\;/g,"&").replace(/\\&lt\\;/g,"<").replace(/\\&gt\\;/g,">").replace(/\\&quot\\;/g,'"').replace(/\\&#039\\;/g,"'")},unescapeIRC:function(p){return!p||typeof p!="string"||!p.includes("\\")?p:p.replace(a,function(y,_){return _ in u?u[_]:_})},escapeIRC:function(p){return!p||typeof p!="string"?p:p.replace(c,function(y,_){return _ in l?"\\".concat(l[_]):_})},addWord:function(p,y){return p.length?p+" "+y:p+y},splitLine:function(p,y){var _=p.substring(0,y).lastIndexOf(" ");return _===-1&&(_=y-1),[p.substring(0,_),p.substring(_+1)]},extractNumber:function(p){for(var y=p.split(" "),_=0;_<y.length;_++)if(f.isInteger(y[_]))return~~y[_];return 0},formatDate:function(p){var y=p.getHours(),_=p.getMinutes();return y=(y<10?"0":"")+y,_=(_<10?"0":"")+_,"".concat(y,":").concat(_)},inherits:function(p,y){p.super_=y;var _=function(){};_.prototype=y.prototype,p.prototype=new _,p.prototype.constructor=p},isNode:function(){try{return(typeof r>"u"?"undefined":i(r))==="object"&&Object.prototype.toString.call(r)==="[object process]"}catch{}return!1}}}).call(this)}).call(this,n("_process"))},{_process:11}],10:[function(n,e,t){},{}],11:[function(n,e,t){var r=e.exports={},i,s;function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?i=setTimeout:i=o}catch{i=o}try{typeof clearTimeout=="function"?s=clearTimeout:s=a}catch{s=a}})();function c(S){if(i===setTimeout)return setTimeout(S,0);if((i===o||!i)&&setTimeout)return i=setTimeout,setTimeout(S,0);try{return i(S,0)}catch{try{return i.call(null,S,0)}catch{return i.call(this,S,0)}}}function u(S){if(s===clearTimeout)return clearTimeout(S);if((s===a||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(S);try{return s(S)}catch{try{return s.call(null,S)}catch{return s.call(this,S)}}}var l=[],h=!1,d,f=-1;function m(){!h||!d||(h=!1,d.length?l=d.concat(l):f=-1,l.length&&p())}function p(){if(!h){var S=c(m);h=!0;for(var L=l.length;L;){for(d=l,l=[];++f<L;)d&&d[f].run();f=-1,L=l.length}d=null,h=!1,u(S)}}r.nextTick=function(S){var L=new Array(arguments.length-1);if(arguments.length>1)for(var x=1;x<arguments.length;x++)L[x-1]=arguments[x];l.push(new y(S,L)),l.length===1&&!h&&c(p)};function y(S,L){this.fun=S,this.array=L}y.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={};function _(){}r.on=_,r.addListener=_,r.once=_,r.off=_,r.removeListener=_,r.removeAllListeners=_,r.emit=_,r.prependListener=_,r.prependOnceListener=_,r.listeners=function(S){return[]},r.binding=function(S){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(S){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},{}]},{},[1]);export{gn as F,gE as I,bM as Q,cr as R,wM as U,Xb as _,SL as a,Hn as b,mh as c,JO as d,NE as e,zw as f,hu as g,dk as h,AT as i,CL as j,TL as k,yh as l,Cy as m,AL as n,Pc as o,KA as p,lM as q,ev as r,GA as s,bL as t,eN as u,kL as v,EL as w};
