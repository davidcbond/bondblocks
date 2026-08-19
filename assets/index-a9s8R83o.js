(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const be=16,Dn=4,Un=15,Ws=64,no=12,Kd=5,ov=48,ja=-28,sv=9,av=5,lv=9,cv=2.5,Ei=1.75,As=.3,cS=Ei*.9,uS=Ei*.7,uv=5,zc=.002,fS=.18,fv=6,dS=1.5,hS=!1,pS=.1,mS=ov*be*1.2,gS=3,zh=75,_S=18,um=.0035,gi=8,dv=3,vS=3,xS=10,fm=3.2,xl=3,yS=-6,dm=.85,SS=1.6,rt=0,Za=1,Eu=2,Oe=3,Rs=4,vt=5,rn=6,yi=7,Ja=8,bu=9,xe=10,Be=11,xt=12,wu=13,io=14,ao=15,Tu=16,Au=17,Ru=18,Cu=19,Pu=20,Iu=21,Lu=22,Du=23,Uu=24,Nu=25,Fu=26,Qa=27,Ou=28,Bu=29,ku=30,zu=31,Hu=32,go=["Air","Grass","Dirt","Stone","Sand","Wood","Leaves","Water","Snow","Gravel","Iron","Titanium","Crystal","Regolith","Alien Rock","Starmetal","Crystal Soil","Crystal Spire","Ash","Obsidian","Ember Thorn","Magma","Permafrost","Frostspire","Cryofluid","Fungal Soil","Fungal Stalk","Fungal Cap","Acid","Voidstone","Emberite","Frostium","Sporestone"],Kt={[Za]:{top:5549363,side:8016947,bottom:7031340},[Eu]:{top:8016947,side:7425327,bottom:7425327},[Oe]:{top:10197915,side:9408399,bottom:9408399},[Rs]:{top:15259276,side:14469500,bottom:14469500},[vt]:{top:12751162,side:6243360,bottom:12751162},[rn]:{top:3115556,side:2783776,bottom:2783776},[yi]:{top:2185679,side:1854648,bottom:1854648},[Ja]:{top:16054015,side:14936053,bottom:14936053},[bu]:{top:7305088,side:6712694,bottom:6712694},[xe]:{top:14247978,side:12737571,bottom:12737571},[Be]:{top:10907616,side:9395396,bottom:9395396},[xt]:{top:4184565,side:3391706,bottom:3391706},[wu]:{top:10129310,side:9076622,bottom:8221568},[io]:{top:6050920,side:5590624,bottom:5590624},[ao]:{top:15911244,side:14264622,bottom:14264622},[Tu]:{top:9072598,side:8019904,bottom:6967466},[Au]:{top:8382719,side:6279408,bottom:5224664},[Bu]:{top:4863392,side:3811456,bottom:2956902},[Ru]:{top:3815997,side:3355446,bottom:2894895},[Cu]:{top:2763312,side:2302760,bottom:1842208},[Pu]:{top:9054994,side:7217680,bottom:5905421},[Iu]:{top:16734751,side:15222799,bottom:13187592},[ku]:{top:16747039,side:14709775,bottom:12608264},[Lu]:{top:13625845,side:12179688,bottom:11061466},[Du]:{top:11066864,side:9423070,bottom:8041676},[Uu]:{top:8378866,side:6275292,bottom:4892868},[zu]:{top:12644607,side:10542320,bottom:8964320},[Nu]:{top:4861788,side:4073296,bottom:3415876},[Fu]:{top:7031434,side:5913976,bottom:4862566},[Qa]:{top:10354554,side:8382556,bottom:7065672},[Ou]:{top:9109294,side:7331864,bottom:5816332},[Hu]:{top:13172554,side:11460656,bottom:9748512}};function Gn(t){return t===yi||t===Iu||t===Uu||t===Ou}function Fa(t){return Gn(t)||t===rn||t===Qa}const Cs={[yi]:932454,[Ou]:2055188,[Iu]:6035720,[Uu]:1194570},tn="earth",gr="wood",xa="leaves",$n="stone",fn="mineral",jd={[Za]:tn,[Eu]:tn,[Rs]:tn,[Ja]:tn,[bu]:tn,[vt]:gr,[rn]:xa,[Oe]:$n,[xe]:fn,[Be]:fn,[xt]:fn,[wu]:tn,[io]:$n,[ao]:fn,[Tu]:tn,[Au]:$n,[Ru]:tn,[Cu]:$n,[Pu]:gr,[Lu]:tn,[Du]:gr,[Nu]:tn,[Fu]:gr,[Qa]:xa,[Bu]:fn,[ku]:fn,[zu]:fn,[Hu]:fn},MS=3,ES={[Za]:1.8,[Eu]:1.8,[Rs]:1.6,[Ja]:1.2,[bu]:2,[vt]:2.2,[rn]:.4,[Oe]:6,[xe]:10,[Be]:18,[xt]:30,[wu]:1.6,[io]:6.5,[ao]:22,[Tu]:1.7,[Au]:7,[Ru]:1.8,[Cu]:7.5,[Pu]:2.2,[Lu]:1.9,[Du]:2.2,[Nu]:1.7,[Fu]:2.2,[Qa]:.4,[Bu]:24,[ku]:16,[zu]:16,[Hu]:14},hv="blocksWorldSeed",pv=42;let _r="",Oa=pv;const Hh=[];function Gh(){return Oa}function Ps(){return _r}function bS(t){Hh.push(t)}function mv(t){const e=String(t??"").trim();if(e==="")return pv;if(/^-?\d+$/.test(e))return Number(e)>>>0;let n=2166136261;for(let i=0;i<e.length;i++)n^=e.charCodeAt(i),n=Math.imul(n,16777619);return n>>>0}function Vh(t){_r=String(t??""),Oa=mv(_r);try{localStorage.setItem(hv,_r)}catch{}for(const e of Hh)e(Oa,_r)}function gv(){return Math.floor(Math.random()*4294967295).toString(36)}function wS(){let t=null;try{t=localStorage.getItem(hv)}catch{}_r=t??"",Oa=mv(_r);for(const e of Hh)e(Oa,_r)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wh="165",TS=0,hm=1,AS=2,Xh=1,RS=2,Li=3,Ki=0,pn=1,yn=2,Tr=0,hs=1,Zd=2,pm=3,mm=4,CS=5,eo=100,PS=101,IS=102,LS=103,DS=104,US=200,NS=201,FS=202,OS=203,Jd=204,Qd=205,BS=206,kS=207,zS=208,HS=209,GS=210,VS=211,WS=212,XS=213,YS=214,qS=0,$S=1,KS=2,Hc=3,jS=4,ZS=5,JS=6,QS=7,Yh=0,eM=1,tM=2,Ar=0,nM=1,iM=2,rM=3,oM=4,sM=5,aM=6,lM=7,_v=300,Is=301,Ls=302,eh=303,th=304,Gu=306,nh=1e3,Vi=1001,ih=1002,Bn=1003,cM=1004,yl=1005,Sn=1006,Df=1007,Wi=1008,Ir=1009,uM=1010,fM=1011,Gc=1012,vv=1013,Ds=1014,vr=1015,Vu=1016,xv=1017,yv=1018,Us=1020,dM=35902,hM=1021,pM=1022,pi=1023,mM=1024,gM=1025,ps=1026,Ns=1027,_M=1028,Sv=1029,vM=1030,Mv=1031,Ev=1033,Uf=33776,Nf=33777,Ff=33778,Of=33779,gm=35840,_m=35841,vm=35842,xm=35843,ym=36196,Sm=37492,Mm=37496,Em=37808,bm=37809,wm=37810,Tm=37811,Am=37812,Rm=37813,Cm=37814,Pm=37815,Im=37816,Lm=37817,Dm=37818,Um=37819,Nm=37820,Fm=37821,Bf=36492,Om=36494,Bm=36495,xM=36283,km=36284,zm=36285,Hm=36286,yM=3200,SM=3201,bv=0,MM=1,dr="",Kn="srgb",Nr="srgb-linear",qh="display-p3",Wu="display-p3-linear",Vc="linear",mt="srgb",Wc="rec709",Xc="p3",To=7680,Gm=519,EM=512,bM=513,wM=514,wv=515,TM=516,AM=517,RM=518,CM=519,rh=35044,Vm="300 es",Xi=2e3,Yc=2001;class Xs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wm=1234567;const ya=Math.PI/180,Ba=180/Math.PI;function qi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function on(t,e,n){return Math.max(e,Math.min(n,t))}function $h(t,e){return(t%e+e)%e}function PM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function IM(t,e,n){return t!==e?(n-t)/(e-t):0}function Sa(t,e,n){return(1-n)*t+n*e}function LM(t,e,n,i){return Sa(t,e,1-Math.exp(-n*i))}function DM(t,e=1){return e-Math.abs($h(t,e*2)-e)}function UM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function NM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function FM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function OM(t,e){return t+Math.random()*(e-t)}function BM(t){return t*(.5-Math.random())}function kM(t){t!==void 0&&(Wm=t);let e=Wm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zM(t){return t*ya}function HM(t){return t*Ba}function GM(t){return(t&t-1)===0&&t!==0}function VM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function WM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function XM(t,e,n,i,r){const o=Math.cos,s=Math.sin,a=o(n/2),l=s(n/2),c=o((e+i)/2),u=s((e+i)/2),f=o((e-i)/2),d=s((e-i)/2),p=o((i-e)/2),g=s((i-e)/2);switch(r){case"XYX":t.set(a*u,l*f,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Qn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function st(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const $i={DEG2RAD:ya,RAD2DEG:Ba,generateUUID:qi,clamp:on,euclideanModulo:$h,mapLinear:PM,inverseLerp:IM,lerp:Sa,damp:LM,pingpong:DM,smoothstep:UM,smootherstep:NM,randInt:FM,randFloat:OM,randFloatSpread:BM,seededRandom:kM,degToRad:zM,radToDeg:HM,isPowerOfTwo:GM,ceilPowerOfTwo:VM,floorPowerOfTwo:WM,setQuaternionFromProperEuler:XM,normalize:st,denormalize:Qn};class Pe{constructor(e=0,n=0){Pe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,n,i,r,o,s,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c)}set(e,n,i,r,o,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=o,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],_=r[0],m=r[3],h=r[6],x=r[1],v=r[4],S=r[7],C=r[2],E=r[5],R=r[8];return o[0]=s*_+a*x+l*C,o[3]=s*m+a*v+l*E,o[6]=s*h+a*S+l*R,o[1]=c*_+u*x+f*C,o[4]=c*m+u*v+f*E,o[7]=c*h+u*S+f*R,o[2]=d*_+p*x+g*C,o[5]=d*m+p*v+g*E,o[8]=d*h+p*S+g*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*s*u-n*a*c-i*o*u+i*a*l+r*o*c-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*s-a*c,d=a*l-u*o,p=c*o-s*l,g=n*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*s)*_,e[3]=d*_,e[4]=(u*n-r*l)*_,e[5]=(r*o-a*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(s*n-i*o)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(kf.makeScale(e,n)),this}rotate(e){return this.premultiply(kf.makeRotation(-e)),this}translate(e,n){return this.premultiply(kf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kf=new He;function Tv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function qc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function YM(){const t=qc("canvas");return t.style.display="block",t}const Xm={};function Kh(t){t in Xm||(Xm[t]=!0,console.warn(t))}function qM(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}const Ym=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qm=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Sl={[Nr]:{transfer:Vc,primaries:Wc,toReference:t=>t,fromReference:t=>t},[Kn]:{transfer:mt,primaries:Wc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Wu]:{transfer:Vc,primaries:Xc,toReference:t=>t.applyMatrix3(qm),fromReference:t=>t.applyMatrix3(Ym)},[qh]:{transfer:mt,primaries:Xc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(qm),fromReference:t=>t.applyMatrix3(Ym).convertLinearToSRGB()}},$M=new Set([Nr,Wu]),at={enabled:!0,_workingColorSpace:Nr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!$M.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Sl[e].toReference,r=Sl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Sl[t].primaries},getTransfer:function(t){return t===dr?Vc:Sl[t].transfer}};function ms(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function zf(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ao;class KM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ao===void 0&&(Ao=qc("canvas")),Ao.width=e.width,Ao.height=e.height;const i=Ao.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ao}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=qc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=ms(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ms(n[i]/255)*255):n[i]=ms(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jM=0;class Av{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=qi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Hf(r[s].image)):o.push(Hf(r[s]))}else o=Hf(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Hf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?KM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ZM=0;class ln extends Xs{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=Vi,r=Vi,o=Sn,s=Wi,a=pi,l=Ir,c=ln.DEFAULT_ANISOTROPY,u=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=qi(),this.name="",this.source=new Av(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_v)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nh:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nh:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=_v;ln.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,n=0,i=0,r=1){Gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(p+1)/2,C=(h+1)/2,E=(u+d)/4,R=(f+_)/4,L=(g+m)/4;return v>S&&v>C?v<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(v),r=E/i,o=R/i):S>C?S<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(S),i=E/r,o=L/r):C<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(C),i=R/o,r=L/o),this.set(i,r,o,n),this}let x=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-_)/x,this.z=(d-u)/x,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JM extends Xs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Gt(0,0,e,n),this.scissorTest=!1,this.viewport=new Gt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Av(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _o extends JM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Rv extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class QM extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ht{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=o[s+0],p=o[s+1],g=o[s+2],_=o[s+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(f!==_||l!==d||c!==p||u!==g){let m=1-a;const h=l*d+c*p+u*g+f*_,x=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const C=Math.sqrt(v),E=Math.atan2(C,h*x);m=Math.sin(m*E)/C,a=Math.sin(a*E)/C}const S=a*x;if(l=l*m+d*S,c=c*m+p*S,u=u*m+g*S,f=f*m+_*S,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=o[s],d=o[s+1],p=o[s+2],g=o[s+3];return e[n]=a*g+u*f+l*p-c*d,e[n+1]=l*g+u*d+c*f-a*p,e[n+2]=c*g+u*p+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(o/2),d=l(i/2),p=l(r/2),g=l(o/2);switch(s){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(o-c)*p,this._z=(s-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(o-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(s-r)/p,this._x=(o+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-i*c,this._z=o*u+s*c+i*l-r*a,this._w=s*u-i*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=s*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=o*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,n=0,i=0){A.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($m.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($m.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*i),u=2*(a*n-o*r),f=2*(o*i-s*n);return this.x=n+l*c+s*f-a*u,this.y=i+l*u+a*c-o*f,this.z=r+l*f+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gf.copy(this).projectOnVector(e),this.sub(Gf)}reflect(e){return this.sub(Gf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gf=new A,$m=new ht;class el{constructor(e=new A(1/0,1/0,1/0),n=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Xn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Xn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Xn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Xn):Xn.fromBufferAttribute(o,s),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ml.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ml.copy(i.boundingBox)),Ml.applyMatrix4(e.matrixWorld),this.union(Ml)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),El.subVectors(this.max,Js),Ro.subVectors(e.a,Js),Co.subVectors(e.b,Js),Po.subVectors(e.c,Js),er.subVectors(Co,Ro),tr.subVectors(Po,Co),Hr.subVectors(Ro,Po);let n=[0,-er.z,er.y,0,-tr.z,tr.y,0,-Hr.z,Hr.y,er.z,0,-er.x,tr.z,0,-tr.x,Hr.z,0,-Hr.x,-er.y,er.x,0,-tr.y,tr.x,0,-Hr.y,Hr.x,0];return!Vf(n,Ro,Co,Po,El)||(n=[1,0,0,0,1,0,0,0,1],!Vf(n,Ro,Co,Po,El))?!1:(bl.crossVectors(er,tr),n=[bl.x,bl.y,bl.z],Vf(n,Ro,Co,Po,El))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wi=[new A,new A,new A,new A,new A,new A,new A,new A],Xn=new A,Ml=new el,Ro=new A,Co=new A,Po=new A,er=new A,tr=new A,Hr=new A,Js=new A,El=new A,bl=new A,Gr=new A;function Vf(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){Gr.fromArray(t,o);const a=r.x*Math.abs(Gr.x)+r.y*Math.abs(Gr.y)+r.z*Math.abs(Gr.z),l=e.dot(Gr),c=n.dot(Gr),u=i.dot(Gr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const e1=new el,Qs=new A,Wf=new A;class tl{constructor(e=new A,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):e1.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);const n=Qs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Qs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(Wf)),this.expandByPoint(Qs.copy(e.center).sub(Wf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ti=new A,Xf=new A,wl=new A,nr=new A,Yf=new A,Tl=new A,qf=new A;class jh{constructor(e=new A,n=new A(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,n),Ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Xf.copy(e).add(n).multiplyScalar(.5),wl.copy(n).sub(e).normalize(),nr.copy(this.origin).sub(Xf);const o=e.distanceTo(n)*.5,s=-this.direction.dot(wl),a=nr.dot(this.direction),l=-nr.dot(wl),c=nr.lengthSq(),u=Math.abs(1-s*s);let f,d,p,g;if(u>0)if(f=s*l-a,d=s*a-l,g=o*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,p=f*(f+s*d+2*a)+d*(s*f+d+2*l)+c}else d=o,f=Math.max(0,-(s*d+a)),p=-f*f+d*(d+2*l)+c;else d=-o,f=Math.max(0,-(s*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-s*o+a)),d=f>0?-o:Math.min(Math.max(-o,-l),o),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-o,-l),o),p=d*(d+2*l)+c):(f=Math.max(0,-(s*o+a)),d=f>0?o:Math.min(Math.max(-o,-l),o),p=-f*f+d*(d+2*l)+c);else d=s>0?-o:o,f=Math.max(0,-(s*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Xf).addScaledVector(wl,d),p}intersectSphere(e,n){Ti.subVectors(e.center,this.origin);const i=Ti.dot(this.direction),r=Ti.dot(Ti)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(o=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(o=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,n,i,r,o){Yf.subVectors(n,e),Tl.subVectors(i,e),qf.crossVectors(Yf,Tl);let s=this.direction.dot(qf),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;nr.subVectors(this.origin,e);const l=a*this.direction.dot(Tl.crossVectors(nr,Tl));if(l<0)return null;const c=a*this.direction.dot(Yf.cross(nr));if(c<0||l+c>s)return null;const u=-a*nr.dot(qf);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,n,i,r,o,s,a,l,c,u,f,d,p,g,_,m){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c,u,f,d,p,g,_,m)}set(e,n,i,r,o,s,a,l,c,u,f,d,p,g,_,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=o,h[5]=s,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Io.setFromMatrixColumn(e,0).length(),o=1/Io.setFromMatrixColumn(e,1).length(),s=1/Io.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const d=s*u,p=s*f,g=a*u,_=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=d-_*c,n[9]=-a*l,n[2]=_-d*c,n[6]=g+p*c,n[10]=s*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,g=c*u,_=c*f;n[0]=d+_*a,n[4]=g*a-p,n[8]=s*c,n[1]=s*f,n[5]=s*u,n[9]=-a,n[2]=p*a-g,n[6]=_+d*a,n[10]=s*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,g=c*u,_=c*f;n[0]=d-_*a,n[4]=-s*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=s*u,n[9]=_-d*a,n[2]=-s*c,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const d=s*u,p=s*f,g=a*u,_=a*f;n[0]=l*u,n[4]=g*c-p,n[8]=d*c+_,n[1]=l*f,n[5]=_*c+d,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const d=s*l,p=s*c,g=a*l,_=a*c;n[0]=l*u,n[4]=_-d*f,n[8]=g*f+p,n[1]=f,n[5]=s*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+g,n[10]=d-_*f}else if(e.order==="XZY"){const d=s*l,p=s*c,g=a*l,_=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+_,n[5]=s*u,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*u,n[10]=_*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t1,e,n1)}lookAt(e,n,i){const r=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),ir.crossVectors(i,gn),ir.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),ir.crossVectors(i,gn)),ir.normalize(),Al.crossVectors(gn,ir),r[0]=ir.x,r[4]=Al.x,r[8]=gn.x,r[1]=ir.y,r[5]=Al.y,r[9]=gn.y,r[2]=ir.z,r[6]=Al.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],h=i[14],x=i[3],v=i[7],S=i[11],C=i[15],E=r[0],R=r[4],L=r[8],w=r[12],y=r[1],I=r[5],F=r[9],k=r[13],G=r[2],W=r[6],V=r[10],$=r[14],X=r[3],te=r[7],he=r[11],ge=r[15];return o[0]=s*E+a*y+l*G+c*X,o[4]=s*R+a*I+l*W+c*te,o[8]=s*L+a*F+l*V+c*he,o[12]=s*w+a*k+l*$+c*ge,o[1]=u*E+f*y+d*G+p*X,o[5]=u*R+f*I+d*W+p*te,o[9]=u*L+f*F+d*V+p*he,o[13]=u*w+f*k+d*$+p*ge,o[2]=g*E+_*y+m*G+h*X,o[6]=g*R+_*I+m*W+h*te,o[10]=g*L+_*F+m*V+h*he,o[14]=g*w+_*k+m*$+h*ge,o[3]=x*E+v*y+S*G+C*X,o[7]=x*R+v*I+S*W+C*te,o[11]=x*L+v*F+S*V+C*he,o[15]=x*w+v*k+S*$+C*ge,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+o*l*f-r*c*f-o*a*d+i*c*d+r*a*p-i*l*p)+_*(+n*l*p-n*c*d+o*s*d-r*s*p+r*c*u-o*l*u)+m*(+n*c*f-n*a*p-o*s*f+i*s*p+o*a*u-i*c*u)+h*(-r*a*u-n*l*f+n*a*d+r*s*f-i*s*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],x=f*m*c-_*d*c+_*l*p-a*m*p-f*l*h+a*d*h,v=g*d*c-u*m*c-g*l*p+s*m*p+u*l*h-s*d*h,S=u*_*c-g*f*c+g*a*p-s*_*p-u*a*h+s*f*h,C=g*f*l-u*_*l-g*a*d+s*_*d+u*a*m-s*f*m,E=n*x+i*v+r*S+o*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=x*R,e[1]=(_*d*o-f*m*o-_*r*p+i*m*p+f*r*h-i*d*h)*R,e[2]=(a*m*o-_*l*o+_*r*c-i*m*c-a*r*h+i*l*h)*R,e[3]=(f*l*o-a*d*o-f*r*c+i*d*c+a*r*p-i*l*p)*R,e[4]=v*R,e[5]=(u*m*o-g*d*o+g*r*p-n*m*p-u*r*h+n*d*h)*R,e[6]=(g*l*o-s*m*o-g*r*c+n*m*c+s*r*h-n*l*h)*R,e[7]=(s*d*o-u*l*o+u*r*c-n*d*c-s*r*p+n*l*p)*R,e[8]=S*R,e[9]=(g*f*o-u*_*o-g*i*p+n*_*p+u*i*h-n*f*h)*R,e[10]=(s*_*o-g*a*o+g*i*c-n*_*c-s*i*h+n*a*h)*R,e[11]=(u*a*o-s*f*o-u*i*c+n*f*c+s*i*p-n*a*p)*R,e[12]=C*R,e[13]=(u*_*r-g*f*r+g*i*d-n*_*d-u*i*m+n*f*m)*R,e[14]=(g*a*r-s*_*r-g*i*l+n*_*l+s*i*m-n*a*m)*R,e[15]=(s*f*r-u*a*r+u*i*l-n*f*l-s*i*d+n*a*d)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,c=o+o,u=s+s,f=a+a,d=o*c,p=o*u,g=o*f,_=s*u,m=s*f,h=a*f,x=l*c,v=l*u,S=l*f,C=i.x,E=i.y,R=i.z;return r[0]=(1-(_+h))*C,r[1]=(p+S)*C,r[2]=(g-v)*C,r[3]=0,r[4]=(p-S)*E,r[5]=(1-(d+h))*E,r[6]=(m+x)*E,r[7]=0,r[8]=(g+v)*R,r[9]=(m-x)*R,r[10]=(1-(d+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=Io.set(r[0],r[1],r[2]).length();const s=Io.set(r[4],r[5],r[6]).length(),a=Io.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Yn.copy(this);const c=1/o,u=1/s,f=1/a;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=f,Yn.elements[9]*=f,Yn.elements[10]*=f,n.setFromRotationMatrix(Yn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=Xi){const l=this.elements,c=2*o/(n-e),u=2*o/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,g;if(a===Xi)p=-(s+o)/(s-o),g=-2*s*o/(s-o);else if(a===Yc)p=-s/(s-o),g=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=Xi){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(s-o),d=(n+e)*c,p=(i+r)*u;let g,_;if(a===Xi)g=(s+o)*f,_=-2*f;else if(a===Yc)g=o*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Io=new A,Yn=new Mt,t1=new A(0,0,0),n1=new A(1,1,1),ir=new A,Al=new A,gn=new A,Km=new Mt,jm=new ht;class Tn{constructor(e=0,n=0,i=0,r=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(on(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-on(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(on(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-on(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Km.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Km,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return jm.setFromEuler(this),this.setFromQuaternion(jm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class Cv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let i1=0;const Zm=new A,Lo=new ht,Ai=new Mt,Rl=new A,ea=new A,r1=new A,o1=new ht,Jm=new A(1,0,0),Qm=new A(0,1,0),e0=new A(0,0,1),t0={type:"added"},s1={type:"removed"},Do={type:"childadded",child:null},$f={type:"childremoved",child:null};class Dt extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new A,n=new Tn,i=new ht,r=new A(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new He}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Lo.setFromAxisAngle(e,n),this.quaternion.multiply(Lo),this}rotateOnWorldAxis(e,n){return Lo.setFromAxisAngle(e,n),this.quaternion.premultiply(Lo),this}rotateX(e){return this.rotateOnAxis(Jm,e)}rotateY(e){return this.rotateOnAxis(Qm,e)}rotateZ(e){return this.rotateOnAxis(e0,e)}translateOnAxis(e,n){return Zm.copy(e).applyQuaternion(this.quaternion),this.position.add(Zm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Jm,e)}translateY(e){return this.translateOnAxis(Qm,e)}translateZ(e){return this.translateOnAxis(e0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Rl.copy(e):Rl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(ea,Rl,this.up):Ai.lookAt(Rl,ea,this.up),this.quaternion.setFromRotationMatrix(Ai),r&&(Ai.extractRotation(r.matrixWorld),Lo.setFromRotationMatrix(Ai),this.quaternion.premultiply(Lo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(t0),Do.child=e,this.dispatchEvent(Do),Do.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(s1),$f.child=e,this.dispatchEvent($f),$f.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(t0),Do.child=e,this.dispatchEvent(Do),Do.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,e,r1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,o1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),f=s(e.shapes),d=s(e.skeletons),p=s(e.animations),g=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new A(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new A,Ri=new A,Kf=new A,Ci=new A,Uo=new A,No=new A,n0=new A,jf=new A,Zf=new A,Jf=new A;class ei{constructor(e=new A,n=new A,i=new A){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),qn.subVectors(e,n),r.cross(qn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){qn.subVectors(r,n),Ri.subVectors(i,n),Kf.subVectors(e,n);const s=qn.dot(qn),a=qn.dot(Ri),l=qn.dot(Kf),c=Ri.dot(Ri),u=Ri.dot(Kf),f=s*c-a*a;if(f===0)return o.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,g=(s*u-a*l)*d;return o.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ci.x),l.addScaledVector(s,Ci.y),l.addScaledVector(a,Ci.z),l)}static isFrontFacing(e,n,i,r){return qn.subVectors(i,n),Ri.subVectors(e,n),qn.cross(Ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),qn.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ei.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return ei.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;Uo.subVectors(r,i),No.subVectors(o,i),jf.subVectors(e,i);const l=Uo.dot(jf),c=No.dot(jf);if(l<=0&&c<=0)return n.copy(i);Zf.subVectors(e,r);const u=Uo.dot(Zf),f=No.dot(Zf);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),n.copy(i).addScaledVector(Uo,s);Jf.subVectors(e,o);const p=Uo.dot(Jf),g=No.dot(Jf);if(g>=0&&p<=g)return n.copy(o);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(No,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return n0.subVectors(o,r),a=(f-u)/(f-u+(p-g)),n.copy(r).addScaledVector(n0,a);const h=1/(m+_+d);return s=_*h,a=d*h,n.copy(i).addScaledVector(Uo,s).addScaledVector(No,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},Cl={h:0,s:0,l:0};function Qf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Me{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=at.workingColorSpace){return this.r=e,this.g=n,this.b=i,at.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=at.workingColorSpace){if(e=$h(e,1),n=on(n,0,1),i=on(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Qf(s,o,e+1/3),this.g=Qf(s,o,e),this.b=Qf(s,o,e-1/3)}return at.toWorkingColorSpace(this,r),this}setStyle(e,n=Kn){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kn){const i=Pv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}copyLinearToSRGB(e){return this.r=zf(e.r),this.g=zf(e.g),this.b=zf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return at.fromWorkingColorSpace(qt.copy(this),e),Math.round(on(qt.r*255,0,255))*65536+Math.round(on(qt.g*255,0,255))*256+Math.round(on(qt.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=at.workingColorSpace){at.fromWorkingColorSpace(qt.copy(this),n);const i=qt.r,r=qt.g,o=qt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const f=s-a;switch(c=u<=.5?f/(s+a):f/(2-s-a),s){case i:l=(r-o)/f+(r<o?6:0);break;case r:l=(o-i)/f+2;break;case o:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=at.workingColorSpace){return at.fromWorkingColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Kn){at.fromWorkingColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,r=qt.b;return e!==Kn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+n,rr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(rr),e.getHSL(Cl);const i=Sa(rr.h,Cl.h,n),r=Sa(rr.s,Cl.s,n),o=Sa(rr.l,Cl.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Me;Me.NAMES=Pv;let a1=0;class Fr extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a1++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=hs,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jd,this.blendDst=Qd,this.blendEquation=eo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Hc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=To,this.stencilZFail=To,this.stencilZPass=To,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jd&&(i.blendSrc=this.blendSrc),this.blendDst!==Qd&&(i.blendDst=this.blendDst),this.blendEquation!==eo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Hc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==To&&(i.stencilFail=this.stencilFail),this.stencilZFail!==To&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==To&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vn extends Fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new A,Pl=new Pe;class nt{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=rh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Kh("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Pl.fromBufferAttribute(this,n),Pl.applyMatrix3(e),this.setXY(n,Pl.x,Pl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=st(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Qn(n,this.array)),n}setX(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Qn(n,this.array)),n}setY(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Qn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Qn(n,this.array)),n}setW(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array),o=st(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rh&&(e.usage=this.usage),e}}class Iv extends nt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Lv extends nt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ct extends nt{constructor(e,n,i){super(new Float32Array(e),n,i)}}let l1=0;const Rn=new Mt,ed=new Dt,Fo=new A,_n=new el,ta=new el,zt=new A;class Et extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l1++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tv(e)?Lv:Iv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new He().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,n,i){return Rn.makeTranslation(e,n,i),this.applyMatrix4(Rn),this}scale(e,n,i){return Rn.makeScale(e,n,i),this.applyMatrix4(Rn),this}lookAt(e){return ed.lookAt(e),ed.updateMatrix(),this.applyMatrix4(ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fo).negate(),this.translate(Fo.x,Fo.y,Fo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Ct(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new el);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];_n.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];ta.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(_n.min,ta.min),_n.expandByPoint(zt),zt.addVectors(_n.max,ta.max),_n.expandByPoint(zt)):(_n.expandByPoint(ta.min),_n.expandByPoint(ta.max))}_n.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)zt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(zt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)zt.fromBufferAttribute(a,c),l&&(Fo.fromBufferAttribute(e,c),zt.add(Fo)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nt(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new A,l[L]=new A;const c=new A,u=new A,f=new A,d=new Pe,p=new Pe,g=new Pe,_=new A,m=new A;function h(L,w,y){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,y),d.fromBufferAttribute(o,L),p.fromBufferAttribute(o,w),g.fromBufferAttribute(o,y),u.sub(c),f.sub(c),p.sub(d),g.sub(d);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(I),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),a[L].add(_),a[w].add(_),a[y].add(_),l[L].add(m),l[w].add(m),l[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let L=0,w=x.length;L<w;++L){const y=x[L],I=y.start,F=y.count;for(let k=I,G=I+F;k<G;k+=3)h(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const v=new A,S=new A,C=new A,E=new A;function R(L){C.fromBufferAttribute(r,L),E.copy(C);const w=a[L];v.copy(w),v.sub(C.multiplyScalar(C.dot(w))).normalize(),S.crossVectors(E,w);const I=S.dot(l[L])<0?-1:1;s.setXYZW(L,v.x,v.y,v.z,I)}for(let L=0,w=x.length;L<w;++L){const y=x[L],I=y.start,F=y.count;for(let k=I,G=I+F;k<G;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new A,o=new A,s=new A,a=new A,l=new A,c=new A,u=new A,f=new A;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,_),s.fromBufferAttribute(n,m),u.subVectors(s,o),f.subVectors(r,o),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),o.fromBufferAttribute(n,d+1),s.fromBufferAttribute(n,d+2),u.subVectors(s,o),f.subVectors(r,o),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)zt.fromBufferAttribute(e,n),zt.normalize(),e.setXYZ(n,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new nt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Et,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const o=e.morphAttributes;for(const c in o){const u=[],f=o[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const i0=new Mt,Vr=new jh,Il=new tl,r0=new A,Oo=new A,Bo=new A,ko=new A,td=new A,Ll=new A,Dl=new Pe,Ul=new Pe,Nl=new Pe,o0=new A,s0=new A,a0=new A,Fl=new A,Ol=new A;class lt extends Dt{constructor(e=new Et,n=new Vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Ll.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],f=o[l];u!==0&&(td.fromBufferAttribute(f,e),s?Ll.addScaledVector(td,u):Ll.addScaledVector(td.sub(n),u))}n.add(Ll)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Il.copy(i.boundingSphere),Il.applyMatrix4(o),Vr.copy(e.ray).recast(e.near),!(Il.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(Il,r0)===null||Vr.origin.distanceToSquared(r0)>(e.far-e.near)**2))&&(i0.copy(o).invert(),Vr.copy(e.ray).applyMatrix4(i0),!(i.boundingBox!==null&&Vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Vr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,f=o.attributes.normal,d=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=s[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,C=v;S<C;S+=3){const E=a.getX(S),R=a.getX(S+1),L=a.getX(S+2);r=Bl(this,h,e,i,c,u,f,E,R,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const x=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);r=Bl(this,s,e,i,c,u,f,x,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=s[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,C=v;S<C;S+=3){const E=S,R=S+1,L=S+2;r=Bl(this,h,e,i,c,u,f,E,R,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const x=m,v=m+1,S=m+2;r=Bl(this,s,e,i,c,u,f,x,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function c1(t,e,n,i,r,o,s,a){let l;if(e.side===pn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===Ki,a),l===null)return null;Ol.copy(a),Ol.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ol);return c<n.near||c>n.far?null:{distance:c,point:Ol.clone(),object:t}}function Bl(t,e,n,i,r,o,s,a,l,c){t.getVertexPosition(a,Oo),t.getVertexPosition(l,Bo),t.getVertexPosition(c,ko);const u=c1(t,e,n,i,Oo,Bo,ko,Fl);if(u){r&&(Dl.fromBufferAttribute(r,a),Ul.fromBufferAttribute(r,l),Nl.fromBufferAttribute(r,c),u.uv=ei.getInterpolation(Fl,Oo,Bo,ko,Dl,Ul,Nl,new Pe)),o&&(Dl.fromBufferAttribute(o,a),Ul.fromBufferAttribute(o,l),Nl.fromBufferAttribute(o,c),u.uv1=ei.getInterpolation(Fl,Oo,Bo,ko,Dl,Ul,Nl,new Pe)),s&&(o0.fromBufferAttribute(s,a),s0.fromBufferAttribute(s,l),a0.fromBufferAttribute(s,c),u.normal=ei.getInterpolation(Fl,Oo,Bo,ko,o0,s0,a0,new A),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new A,materialIndex:0};ei.getNormal(Oo,Bo,ko,f.normal),u.face=f}return u}class Zt extends Et{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,s,o,0),g("z","y","x",1,-1,i,n,-e,s,o,1),g("x","z","y",1,1,e,i,n,r,s,2),g("x","z","y",1,-1,e,i,-n,r,s,3),g("x","y","z",1,-1,e,n,i,r,o,4),g("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(f,2));function g(_,m,h,x,v,S,C,E,R,L,w){const y=S/R,I=C/L,F=S/2,k=C/2,G=E/2,W=R+1,V=L+1;let $=0,X=0;const te=new A;for(let he=0;he<V;he++){const ge=he*I-k;for(let Xe=0;Xe<W;Xe++){const Ze=Xe*y-F;te[_]=Ze*x,te[m]=ge*v,te[h]=G,c.push(te.x,te.y,te.z),te[_]=0,te[m]=0,te[h]=E>0?1:-1,u.push(te.x,te.y,te.z),f.push(Xe/R),f.push(1-he/L),$+=1}}for(let he=0;he<L;he++)for(let ge=0;ge<R;ge++){const Xe=d+ge+W*he,Ze=d+ge+W*(he+1),Y=d+(ge+1)+W*(he+1),Q=d+(ge+1)+W*he;l.push(Xe,Ze,Q),l.push(Ze,Y,Q),X+=6}a.addGroup(p,X,w),p+=X,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function en(t){const e={};for(let n=0;n<t.length;n++){const i=Fs(t[n]);for(const r in i)e[r]=i[r]}return e}function u1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Dv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const f1={clone:Fs,merge:en};var d1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Fr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d1,this.fragmentShader=h1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=u1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Uv extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Xi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const or=new A,l0=new Pe,c0=new Pe;class xn extends Uv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ba*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ba*2*Math.atan(Math.tan(ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,n){return this.getViewBounds(e,l0,c0),n.subVectors(c0,l0)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ya*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const zo=-90,Ho=1;class p1 extends Dt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xn(zo,Ho,e,n);r.layers=this.layers,this.add(r);const o=new xn(zo,Ho,e,n);o.layers=this.layers,this.add(o);const s=new xn(zo,Ho,e,n);s.layers=this.layers,this.add(s);const a=new xn(zo,Ho,e,n);a.layers=this.layers,this.add(a);const l=new xn(zo,Ho,e,n);l.layers=this.layers,this.add(l);const c=new xn(zo,Ho,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const c of n)this.remove(c);if(e===Xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Nv extends ln{constructor(e,n,i,r,o,s,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Is,super(e,n,i,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class m1 extends _o{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Nv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Sn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Zt(5,5,5),o=new ji({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Tr});o.uniforms.tEquirect.value=n;const s=new lt(r,o),a=n.minFilter;return n.minFilter===Wi&&(n.minFilter=Sn),new p1(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const nd=new A,g1=new A,_1=new He;class jr{constructor(e=new A(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=nd.subVectors(i,n).cross(g1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(nd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||_1.getNormalMatrix(e),r=this.coplanarPoint(nd).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new tl,kl=new A;class Zh{constructor(e=new jr,n=new jr,i=new jr,r=new jr,o=new jr,s=new jr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Xi){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],g=r[9],_=r[10],m=r[11],h=r[12],x=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-o,d-c,m-p,S-h).normalize(),i[1].setComponents(l+o,d+c,m+p,S+h).normalize(),i[2].setComponents(l+s,d+u,m+g,S+x).normalize(),i[3].setComponents(l-s,d-u,m-g,S-x).normalize(),i[4].setComponents(l-a,d-f,m-_,S-v).normalize(),n===Xi)i[5].setComponents(l+a,d+f,m+_,S+v).normalize();else if(n===Yc)i[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){return Wr.center.set(0,0,0),Wr.radius=.7071067811865476,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(kl.x=r.normal.x>0?e.max.x:e.min.x,kl.y=r.normal.y>0?e.max.y:e.min.y,kl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(kl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fv(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function v1(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,d=l.updateRanges;if(t.bindBuffer(c,a),f.count===-1&&d.length===0&&t.bufferSubData(c,0,u),d.length!==0){for(let p=0,g=d.length;p<g;p++){const _=d[p];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}class nl extends Et{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,p=[],g=[],_=[],m=[];for(let h=0;h<u;h++){const x=h*d-s;for(let v=0;v<c;v++){const S=v*f-o;g.push(S,-x,0),_.push(0,0,1),m.push(v/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<a;x++){const v=x+c*h,S=x+c*(h+1),C=x+1+c*(h+1),E=x+1+c*h;p.push(v,S,E),p.push(S,C,E)}this.setIndex(p),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.width,e.height,e.widthSegments,e.heightSegments)}}var x1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,S1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,M1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,T1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A1=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,R1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,C1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,I1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,L1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,D1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,U1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,N1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,k1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,z1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,H1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,G1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,V1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,W1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,X1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K1="gl_FragColor = linearToOutputTexel( gl_FragColor );",j1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Z1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,J1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Q1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,aE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_E=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ME=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,RE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,NE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,OE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,BE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,GE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$E=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ib=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ob=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ab=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ub=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,db=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_b=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Tb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ab=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ib=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Db=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ub=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ob=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$b=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:x1,alphahash_pars_fragment:y1,alphamap_fragment:S1,alphamap_pars_fragment:M1,alphatest_fragment:E1,alphatest_pars_fragment:b1,aomap_fragment:w1,aomap_pars_fragment:T1,batching_pars_vertex:A1,batching_vertex:R1,begin_vertex:C1,beginnormal_vertex:P1,bsdfs:I1,iridescence_fragment:L1,bumpmap_pars_fragment:D1,clipping_planes_fragment:U1,clipping_planes_pars_fragment:N1,clipping_planes_pars_vertex:F1,clipping_planes_vertex:O1,color_fragment:B1,color_pars_fragment:k1,color_pars_vertex:z1,color_vertex:H1,common:G1,cube_uv_reflection_fragment:V1,defaultnormal_vertex:W1,displacementmap_pars_vertex:X1,displacementmap_vertex:Y1,emissivemap_fragment:q1,emissivemap_pars_fragment:$1,colorspace_fragment:K1,colorspace_pars_fragment:j1,envmap_fragment:Z1,envmap_common_pars_fragment:J1,envmap_pars_fragment:Q1,envmap_pars_vertex:eE,envmap_physical_pars_fragment:fE,envmap_vertex:tE,fog_vertex:nE,fog_pars_vertex:iE,fog_fragment:rE,fog_pars_fragment:oE,gradientmap_pars_fragment:sE,lightmap_pars_fragment:aE,lights_lambert_fragment:lE,lights_lambert_pars_fragment:cE,lights_pars_begin:uE,lights_toon_fragment:dE,lights_toon_pars_fragment:hE,lights_phong_fragment:pE,lights_phong_pars_fragment:mE,lights_physical_fragment:gE,lights_physical_pars_fragment:_E,lights_fragment_begin:vE,lights_fragment_maps:xE,lights_fragment_end:yE,logdepthbuf_fragment:SE,logdepthbuf_pars_fragment:ME,logdepthbuf_pars_vertex:EE,logdepthbuf_vertex:bE,map_fragment:wE,map_pars_fragment:TE,map_particle_fragment:AE,map_particle_pars_fragment:RE,metalnessmap_fragment:CE,metalnessmap_pars_fragment:PE,morphinstance_vertex:IE,morphcolor_vertex:LE,morphnormal_vertex:DE,morphtarget_pars_vertex:UE,morphtarget_vertex:NE,normal_fragment_begin:FE,normal_fragment_maps:OE,normal_pars_fragment:BE,normal_pars_vertex:kE,normal_vertex:zE,normalmap_pars_fragment:HE,clearcoat_normal_fragment_begin:GE,clearcoat_normal_fragment_maps:VE,clearcoat_pars_fragment:WE,iridescence_pars_fragment:XE,opaque_fragment:YE,packing:qE,premultiplied_alpha_fragment:$E,project_vertex:KE,dithering_fragment:jE,dithering_pars_fragment:ZE,roughnessmap_fragment:JE,roughnessmap_pars_fragment:QE,shadowmap_pars_fragment:eb,shadowmap_pars_vertex:tb,shadowmap_vertex:nb,shadowmask_pars_fragment:ib,skinbase_vertex:rb,skinning_pars_vertex:ob,skinning_vertex:sb,skinnormal_vertex:ab,specularmap_fragment:lb,specularmap_pars_fragment:cb,tonemapping_fragment:ub,tonemapping_pars_fragment:fb,transmission_fragment:db,transmission_pars_fragment:hb,uv_pars_fragment:pb,uv_pars_vertex:mb,uv_vertex:gb,worldpos_vertex:_b,background_vert:vb,background_frag:xb,backgroundCube_vert:yb,backgroundCube_frag:Sb,cube_vert:Mb,cube_frag:Eb,depth_vert:bb,depth_frag:wb,distanceRGBA_vert:Tb,distanceRGBA_frag:Ab,equirect_vert:Rb,equirect_frag:Cb,linedashed_vert:Pb,linedashed_frag:Ib,meshbasic_vert:Lb,meshbasic_frag:Db,meshlambert_vert:Ub,meshlambert_frag:Nb,meshmatcap_vert:Fb,meshmatcap_frag:Ob,meshnormal_vert:Bb,meshnormal_frag:kb,meshphong_vert:zb,meshphong_frag:Hb,meshphysical_vert:Gb,meshphysical_frag:Vb,meshtoon_vert:Wb,meshtoon_frag:Xb,points_vert:Yb,points_frag:qb,shadow_vert:$b,shadow_frag:Kb,sprite_vert:jb,sprite_frag:Zb},se={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},ui={basic:{uniforms:en([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:en([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Me(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:en([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:en([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:en([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Me(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:en([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:en([se.points,se.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:en([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:en([se.common,se.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:en([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:en([se.sprite,se.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:en([se.common,se.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:en([se.lights,se.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ui.physical={uniforms:en([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const zl={r:0,b:0,g:0},Xr=new Tn,Jb=new Mt;function Qb(t,e,n,i,r,o,s){const a=new Me(0);let l=o===!0?0:1,c,u,f=null,d=0,p=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?n:e).get(v)),v}function _(x){let v=!1;const S=g(x);S===null?h(a,l):S&&S.isColor&&(h(S,1),v=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===Gu)?(u===void 0&&(u=new lt(new Zt(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:Fs(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Xr.copy(v.backgroundRotation),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Jb.makeRotationFromEuler(Xr)),u.material.toneMapped=at.getTransfer(S.colorSpace)!==mt,(f!==S||d!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,p=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new lt(new nl(2,2),new ji({name:"BackgroundMaterial",uniforms:Fs(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=at.getTransfer(S.colorSpace)!==mt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,p=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function h(x,v){x.getRGB(zl,Dv(t)),i.buffers.color.setClear(zl.r,zl.g,zl.b,v,s)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,h(a,l)},render:_,addToRenderList:m}}function ew(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let o=r,s=!1;function a(y,I,F,k,G){let W=!1;const V=f(k,F,I);o!==V&&(o=V,c(o.object)),W=p(y,k,F,G),W&&g(y,k,F,G),G!==null&&e.update(G,t.ELEMENT_ARRAY_BUFFER),(W||s)&&(s=!1,S(y,I,F,k),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function f(y,I,F){const k=F.wireframe===!0;let G=i[y.id];G===void 0&&(G={},i[y.id]=G);let W=G[I.id];W===void 0&&(W={},G[I.id]=W);let V=W[k];return V===void 0&&(V=d(l()),W[k]=V),V}function d(y){const I=[],F=[],k=[];for(let G=0;G<n;G++)I[G]=0,F[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:k,object:y,attributes:{},index:null}}function p(y,I,F,k){const G=o.attributes,W=I.attributes;let V=0;const $=F.getAttributes();for(const X in $)if($[X].location>=0){const he=G[X];let ge=W[X];if(ge===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),he===void 0||he.attribute!==ge||ge&&he.data!==ge.data)return!0;V++}return o.attributesNum!==V||o.index!==k}function g(y,I,F,k){const G={},W=I.attributes;let V=0;const $=F.getAttributes();for(const X in $)if($[X].location>=0){let he=W[X];he===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(he=y.instanceColor));const ge={};ge.attribute=he,he&&he.data&&(ge.data=he.data),G[X]=ge,V++}o.attributes=G,o.attributesNum=V,o.index=k}function _(){const y=o.newAttributes;for(let I=0,F=y.length;I<F;I++)y[I]=0}function m(y){h(y,0)}function h(y,I){const F=o.newAttributes,k=o.enabledAttributes,G=o.attributeDivisors;F[y]=1,k[y]===0&&(t.enableVertexAttribArray(y),k[y]=1),G[y]!==I&&(t.vertexAttribDivisor(y,I),G[y]=I)}function x(){const y=o.newAttributes,I=o.enabledAttributes;for(let F=0,k=I.length;F<k;F++)I[F]!==y[F]&&(t.disableVertexAttribArray(F),I[F]=0)}function v(y,I,F,k,G,W,V){V===!0?t.vertexAttribIPointer(y,I,F,G,W):t.vertexAttribPointer(y,I,F,k,G,W)}function S(y,I,F,k){_();const G=k.attributes,W=F.getAttributes(),V=I.defaultAttributeValues;for(const $ in W){const X=W[$];if(X.location>=0){let te=G[$];if(te===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(te=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(te=y.instanceColor)),te!==void 0){const he=te.normalized,ge=te.itemSize,Xe=e.get(te);if(Xe===void 0)continue;const Ze=Xe.buffer,Y=Xe.type,Q=Xe.bytesPerElement,pe=Y===t.INT||Y===t.UNSIGNED_INT||te.gpuType===vv;if(te.isInterleavedBufferAttribute){const re=te.data,ke=re.stride,Fe=te.offset;if(re.isInstancedInterleavedBuffer){for(let Ke=0;Ke<X.locationSize;Ke++)h(X.location+Ke,re.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ke=0;Ke<X.locationSize;Ke++)m(X.location+Ke);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let Ke=0;Ke<X.locationSize;Ke++)v(X.location+Ke,ge/X.locationSize,Y,he,ke*Q,(Fe+ge/X.locationSize*Ke)*Q,pe)}else{if(te.isInstancedBufferAttribute){for(let re=0;re<X.locationSize;re++)h(X.location+re,te.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let re=0;re<X.locationSize;re++)m(X.location+re);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let re=0;re<X.locationSize;re++)v(X.location+re,ge/X.locationSize,Y,he,ge*Q,ge/X.locationSize*re*Q,pe)}}else if(V!==void 0){const he=V[$];if(he!==void 0)switch(he.length){case 2:t.vertexAttrib2fv(X.location,he);break;case 3:t.vertexAttrib3fv(X.location,he);break;case 4:t.vertexAttrib4fv(X.location,he);break;default:t.vertexAttrib1fv(X.location,he)}}}}x()}function C(){L();for(const y in i){const I=i[y];for(const F in I){const k=I[F];for(const G in k)u(k[G].object),delete k[G];delete I[F]}delete i[y]}}function E(y){if(i[y.id]===void 0)return;const I=i[y.id];for(const F in I){const k=I[F];for(const G in k)u(k[G].object),delete k[G];delete I[F]}delete i[y.id]}function R(y){for(const I in i){const F=i[I];if(F[y.id]===void 0)continue;const k=F[y.id];for(const G in k)u(k[G].object),delete k[G];delete F[y.id]}}function L(){w(),s=!0,o!==r&&(o=r,c(o.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function tw(t,e,n){let i;function r(c){i=c}function o(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function s(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f;p++)this.render(c[p],u[p]);else{d.multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];n.update(p,i,1)}}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)s(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];for(let _=0;_<d.length;_++)n.update(g,i,d[_])}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function nw(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(E){return!(E!==pi&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const R=E===Vu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Ir&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==vr&&!R)}function l(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),h=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:h,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:S,maxSamples:C}}function iw(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new jr,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||g===null||g.length===0||o&&!m)o?u(null):c();else{const x=o?0:i,v=x*4;let S=h.clippingState||null;l.value=S,S=u(g,d,v,p);for(let C=0;C!==v;++C)S[C]=n[C];h.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const h=p+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,S=p;v!==_;++v,S+=4)s.copy(f[v]).applyMatrix4(x,a),s.normal.toArray(m,S),m[S+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function rw(t){let e=new WeakMap;function n(s,a){return a===eh?s.mapping=Is:a===th&&(s.mapping=Ls),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===eh||a===th)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new m1(l.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Ov extends Uv{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ns=4,u0=[.125,.215,.35,.446,.526,.582],to=20,id=new Ov,f0=new Me;let rd=null,od=0,sd=0,ad=!1;const Zr=(1+Math.sqrt(5))/2,Go=1/Zr,d0=[new A(-Zr,Go,0),new A(Zr,Go,0),new A(-Go,0,Zr),new A(Go,0,Zr),new A(0,Zr,-Go),new A(0,Zr,Go),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class h0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){rd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=g0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rd,od,sd),this._renderer.xr.enabled=ad,e.scissorTest=!1,Hl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Is||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Vu,format:pi,colorSpace:Nr,depthBuffer:!1},r=p0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=p0(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ow(o)),this._blurMaterial=sw(o,e,n)}return r}_compileMaterial(e){const n=new lt(this._lodPlanes[0],e);this._renderer.compile(n,id)}_sceneToCubeUV(e,n,i,r){const a=new xn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(f0),u.toneMapping=Ar,u.autoClear=!1;const p=new Vn({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new lt(new Zt,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(f0),_=!0);for(let h=0;h<6;h++){const x=h%3;x===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):x===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const v=this._cubeSize;Hl(r,x*v,h>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Is||e.mapping===Ls;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=g0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=m0());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new lt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Hl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,id)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=d0[(r-o-1)%d0.length];this._blur(e,o-1,o,s,a)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new lt(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*to-1),_=o/g,m=isFinite(o)?1+Math.floor(u*_):to;m>to&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${to}`);const h=[];let x=0;for(let R=0;R<to;++R){const L=R/_,w=Math.exp(-L*L/2);h.push(w),R===0?x+=w:R<m&&(x+=2*w)}for(let R=0;R<h.length;R++)h[R]=h[R]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const S=this._sizeLods[r],C=3*S*(r>v-ns?r-v+ns:0),E=4*(this._cubeSize-S);Hl(n,C,E,3*S,2*S),l.setRenderTarget(n),l.render(f,id)}}function ow(t){const e=[],n=[],i=[];let r=t;const o=t-ns+1+u0.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-ns?l=u0[s-t+ns-1]:s===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,h=1,x=new Float32Array(_*g*p),v=new Float32Array(m*g*p),S=new Float32Array(h*g*p);for(let E=0;E<p;E++){const R=E%3*2/3-1,L=E>2?0:-1,w=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];x.set(w,_*g*E),v.set(d,m*g*E);const y=[E,E,E,E,E,E];S.set(y,h*g*E)}const C=new Et;C.setAttribute("position",new nt(x,_)),C.setAttribute("uv",new nt(v,m)),C.setAttribute("faceIndex",new nt(S,h)),e.push(C),r>ns&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function p0(t,e,n){const i=new _o(t,e,n);return i.texture.mapping=Gu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function sw(t,e,n){const i=new Float32Array(to),r=new A(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:to,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function m0(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function g0(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function Jh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function aw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===eh||l===th,u=l===Is||l===Ls;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new h0(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new h0(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",o),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function lw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Kh("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function cw(t,e,n,i){const r={},o=new WeakMap;function s(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,h=_.length;m<h;m++)e.remove(_[m])}d.removeEventListener("dispose",s),delete r[d.id];const p=o.get(d);p&&(e.remove(p),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,h=_.length;m<h;m++)e.update(_[m],t.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let v=0,S=x.length;v<S;v+=3){const C=x[v+0],E=x[v+1],R=x[v+2];d.push(C,E,E,R,R,C)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const C=v+0,E=v+1,R=v+2;d.push(C,E,E,R,R,C)}}else return;const m=new(Tv(d)?Lv:Iv)(d,1);m.version=_;const h=o.get(f);h&&e.remove(h),o.set(f,m)}function u(f){const d=o.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function uw(t,e,n){let i;function r(d){i=d}let o,s;function a(d){o=d.type,s=d.bytesPerElement}function l(d,p){t.drawElements(i,p,o,d*s),n.update(p,i,1)}function c(d,p,g){g!==0&&(t.drawElementsInstanced(i,p,o,d*s,g),n.update(p,i,g))}function u(d,p,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(d[m]/s,p[m]);else{_.multiDrawElementsWEBGL(i,p,0,o,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];n.update(m,i,1)}}function f(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/s,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,o,d,0,_,0,g);let h=0;for(let x=0;x<g;x++)h+=p[x];for(let x=0;x<_.length;x++)n.update(h,i,_[x])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function fw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function dw(t,e,n){const i=new WeakMap,r=new Gt;function o(s,a,l){const c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let y=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let C=a.attributes.position.count*S,E=1;C>e.maxTextureSize&&(E=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*E*4*f),L=new Rv(R,C,E,f);L.type=vr,L.needsUpdate=!0;const w=S*4;for(let I=0;I<f;I++){const F=h[I],k=x[I],G=v[I],W=C*E*4*I;for(let V=0;V<F.count;V++){const $=V*w;g===!0&&(r.fromBufferAttribute(F,V),R[W+$+0]=r.x,R[W+$+1]=r.y,R[W+$+2]=r.z,R[W+$+3]=0),_===!0&&(r.fromBufferAttribute(k,V),R[W+$+4]=r.x,R[W+$+5]=r.y,R[W+$+6]=r.z,R[W+$+7]=0),m===!0&&(r.fromBufferAttribute(G,V),R[W+$+8]=r.x,R[W+$+9]=r.y,R[W+$+10]=r.z,R[W+$+11]=G.itemSize===4?r.w:1)}}d={count:f,texture:L,size:new Pe(C,E)},i.set(a,d),a.addEventListener("dispose",y)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:o}}function hw(t,e,n,i){let r=new WeakMap;function o(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:s}}class Bv extends ln{constructor(e,n,i,r,o,s,a,l,c,u=ps){if(u!==ps&&u!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ps&&(i=Ds),i===void 0&&u===Ns&&(i=Us),super(null,r,o,s,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Bn,this.minFilter=l!==void 0?l:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const kv=new ln,zv=new Bv(1,1);zv.compareFunction=wv;const Hv=new Rv,Gv=new QM,Vv=new Nv,_0=[],v0=[],x0=new Float32Array(16),y0=new Float32Array(9),S0=new Float32Array(4);function Ys(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=_0[r];if(o===void 0&&(o=new Float32Array(r),_0[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Xu(t,e){let n=v0[e];n===void 0&&(n=new Int32Array(e),v0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function pw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function _w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function vw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;S0.set(i),t.uniformMatrix2fv(this.addr,!1,S0),Ot(n,i)}}function xw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;y0.set(i),t.uniformMatrix3fv(this.addr,!1,y0),Ot(n,i)}}function yw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;x0.set(i),t.uniformMatrix4fv(this.addr,!1,x0),Ot(n,i)}}function Sw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function Ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function ww(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function Aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function Rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function Cw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const o=this.type===t.SAMPLER_2D_SHADOW?zv:kv;n.setTexture2D(e||o,r)}function Pw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Gv,r)}function Iw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Vv,r)}function Lw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Hv,r)}function Dw(t){switch(t){case 5126:return pw;case 35664:return mw;case 35665:return gw;case 35666:return _w;case 35674:return vw;case 35675:return xw;case 35676:return yw;case 5124:case 35670:return Sw;case 35667:case 35671:return Mw;case 35668:case 35672:return Ew;case 35669:case 35673:return bw;case 5125:return ww;case 36294:return Tw;case 36295:return Aw;case 36296:return Rw;case 35678:case 36198:case 36298:case 36306:case 35682:return Cw;case 35679:case 36299:case 36307:return Pw;case 35680:case 36300:case 36308:case 36293:return Iw;case 36289:case 36303:case 36311:case 36292:return Lw}}function Uw(t,e){t.uniform1fv(this.addr,e)}function Nw(t,e){const n=Ys(e,this.size,2);t.uniform2fv(this.addr,n)}function Fw(t,e){const n=Ys(e,this.size,3);t.uniform3fv(this.addr,n)}function Ow(t,e){const n=Ys(e,this.size,4);t.uniform4fv(this.addr,n)}function Bw(t,e){const n=Ys(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function kw(t,e){const n=Ys(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function zw(t,e){const n=Ys(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Hw(t,e){t.uniform1iv(this.addr,e)}function Gw(t,e){t.uniform2iv(this.addr,e)}function Vw(t,e){t.uniform3iv(this.addr,e)}function Ww(t,e){t.uniform4iv(this.addr,e)}function Xw(t,e){t.uniform1uiv(this.addr,e)}function Yw(t,e){t.uniform2uiv(this.addr,e)}function qw(t,e){t.uniform3uiv(this.addr,e)}function $w(t,e){t.uniform4uiv(this.addr,e)}function Kw(t,e,n){const i=this.cache,r=e.length,o=Xu(n,r);Ft(i,o)||(t.uniform1iv(this.addr,o),Ot(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||kv,o[s])}function jw(t,e,n){const i=this.cache,r=e.length,o=Xu(n,r);Ft(i,o)||(t.uniform1iv(this.addr,o),Ot(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||Gv,o[s])}function Zw(t,e,n){const i=this.cache,r=e.length,o=Xu(n,r);Ft(i,o)||(t.uniform1iv(this.addr,o),Ot(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||Vv,o[s])}function Jw(t,e,n){const i=this.cache,r=e.length,o=Xu(n,r);Ft(i,o)||(t.uniform1iv(this.addr,o),Ot(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||Hv,o[s])}function Qw(t){switch(t){case 5126:return Uw;case 35664:return Nw;case 35665:return Fw;case 35666:return Ow;case 35674:return Bw;case 35675:return kw;case 35676:return zw;case 5124:case 35670:return Hw;case 35667:case 35671:return Gw;case 35668:case 35672:return Vw;case 35669:case 35673:return Ww;case 5125:return Xw;case 36294:return Yw;case 36295:return qw;case 36296:return $w;case 35678:case 36198:case 36298:case 36306:case 35682:return Kw;case 35679:case 36299:case 36307:return jw;case 35680:case 36300:case 36308:case 36293:return Zw;case 36289:case 36303:case 36311:case 36292:return Jw}}class eT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Dw(n.type)}}class tT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Qw(n.type)}}class nT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const ld=/(\w+)(\])?(\[|\.)?/g;function M0(t,e){t.seq.push(e),t.map[e.id]=e}function iT(t,e,n){const i=t.name,r=i.length;for(ld.lastIndex=0;;){const o=ld.exec(i),s=ld.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){M0(n,c===void 0?new eT(a,t,e):new tT(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new nT(a),M0(n,f)),n=f}}}class Tc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);iT(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function E0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const rT=37297;let oT=0;function sT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function aT(t){const e=at.getPrimaries(at.workingColorSpace),n=at.getPrimaries(t);let i;switch(e===n?i="":e===Xc&&n===Wc?i="LinearDisplayP3ToLinearSRGB":e===Wc&&n===Xc&&(i="LinearSRGBToLinearDisplayP3"),t){case Nr:case Wu:return[i,"LinearTransferOETF"];case Kn:case qh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function b0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+sT(t.getShaderSource(e),s)}else return r}function lT(t,e){const n=aT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function cT(t,e){let n;switch(e){case nM:n="Linear";break;case iM:n="Reinhard";break;case rM:n="OptimizedCineon";break;case oM:n="ACESFilmic";break;case aM:n="AgX";break;case lM:n="Neutral";break;case sM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function uT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function fT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function dT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function ha(t){return t!==""}function w0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function T0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hT=/^[ \t]*#include +<([\w\d./]+)>/gm;function oh(t){return t.replace(hT,mT)}const pT=new Map;function mT(t,e){let n=ze[e];if(n===void 0){const i=pT.get(e);if(i!==void 0)n=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return oh(n)}const gT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function A0(t){return t.replace(gT,_T)}function _T(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function R0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Xh?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===RS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function xT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Is:case Ls:e="ENVMAP_TYPE_CUBE";break;case Gu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ls:e="ENVMAP_MODE_REFRACTION";break}return e}function ST(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Yh:e="ENVMAP_BLENDING_MULTIPLY";break;case eM:e="ENVMAP_BLENDING_MIX";break;case tM:e="ENVMAP_BLENDING_ADD";break}return e}function MT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ET(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=vT(n),c=xT(n),u=yT(n),f=ST(n),d=MT(n),p=uT(n),g=fT(o),_=r.createProgram();let m,h,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ha).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ha).join(`
`),h.length>0&&(h+=`
`)):(m=[R0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),h=[R0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ar?"#define TONE_MAPPING":"",n.toneMapping!==Ar?ze.tonemapping_pars_fragment:"",n.toneMapping!==Ar?cT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,lT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ha).join(`
`)),s=oh(s),s=w0(s,n),s=T0(s,n),a=oh(a),a=w0(a,n),a=T0(a,n),s=A0(s),a=A0(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Vm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Vm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=x+m+s,S=x+h+a,C=E0(r,r.VERTEX_SHADER,v),E=E0(r,r.FRAGMENT_SHADER,S);r.attachShader(_,C),r.attachShader(_,E),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(I){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(_).trim(),k=r.getShaderInfoLog(C).trim(),G=r.getShaderInfoLog(E).trim();let W=!0,V=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,C,E);else{const $=b0(r,C,"vertex"),X=b0(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+$+`
`+X)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(k===""||G==="")&&(V=!1);V&&(I.diagnostics={runnable:W,programLog:F,vertexShader:{log:k,prefix:m},fragmentShader:{log:G,prefix:h}})}r.deleteShader(C),r.deleteShader(E),L=new Tc(r,_),w=dT(r,_)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,rT)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=oT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=E,this}let bT=0;class wT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new TT(e),n.set(e,i)),i}}class TT{constructor(e){this.id=bT++,this.code=e,this.usedTimes=0}}function AT(t,e,n,i,r,o,s){const a=new Cv,l=new wT,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,y,I,F,k){const G=F.fog,W=k.geometry,V=w.isMeshStandardMaterial?F.environment:null,$=(w.isMeshStandardMaterial?n:e).get(w.envMap||V),X=$&&$.mapping===Gu?$.image.height:null,te=g[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const he=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ge=he!==void 0?he.length:0;let Xe=0;W.morphAttributes.position!==void 0&&(Xe=1),W.morphAttributes.normal!==void 0&&(Xe=2),W.morphAttributes.color!==void 0&&(Xe=3);let Ze,Y,Q,pe;if(te){const ut=ui[te];Ze=ut.vertexShader,Y=ut.fragmentShader}else Ze=w.vertexShader,Y=w.fragmentShader,l.update(w),Q=l.getVertexShaderID(w),pe=l.getFragmentShaderID(w);const re=t.getRenderTarget(),ke=k.isInstancedMesh===!0,Fe=k.isBatchedMesh===!0,Ke=!!w.map,U=!!w.matcap,Te=!!$,Re=!!w.aoMap,ct=!!w.lightMap,ye=!!w.bumpMap,Ye=!!w.normalMap,Ne=!!w.displacementMap,Le=!!w.emissiveMap,pt=!!w.metalnessMap,P=!!w.roughnessMap,M=w.anisotropy>0,H=w.clearcoat>0,j=w.dispersion>0,Z=w.iridescence>0,J=w.sheen>0,we=w.transmission>0,ae=M&&!!w.anisotropyMap,le=H&&!!w.clearcoatMap,Ge=H&&!!w.clearcoatNormalMap,ee=H&&!!w.clearcoatRoughnessMap,ve=Z&&!!w.iridescenceMap,$e=Z&&!!w.iridescenceThicknessMap,De=J&&!!w.sheenColorMap,ce=J&&!!w.sheenRoughnessMap,Ve=!!w.specularMap,je=!!w.specularColorMap,At=!!w.specularIntensityMap,D=we&&!!w.transmissionMap,fe=we&&!!w.thicknessMap,q=!!w.gradientMap,K=!!w.alphaMap,ie=w.alphaTest>0,Ue=!!w.alphaHash,Qe=!!w.extensions;let Rt=Ar;w.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Rt=t.toneMapping);const Bt={shaderID:te,shaderType:w.type,shaderName:w.name,vertexShader:Ze,fragmentShader:Y,defines:w.defines,customVertexShaderID:Q,customFragmentShaderID:pe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Fe,batchingColor:Fe&&k._colorsTexture!==null,instancing:ke,instancingColor:ke&&k.instanceColor!==null,instancingMorph:ke&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Nr,alphaToCoverage:!!w.alphaToCoverage,map:Ke,matcap:U,envMap:Te,envMapMode:Te&&$.mapping,envMapCubeUVHeight:X,aoMap:Re,lightMap:ct,bumpMap:ye,normalMap:Ye,displacementMap:d&&Ne,emissiveMap:Le,normalMapObjectSpace:Ye&&w.normalMapType===MM,normalMapTangentSpace:Ye&&w.normalMapType===bv,metalnessMap:pt,roughnessMap:P,anisotropy:M,anisotropyMap:ae,clearcoat:H,clearcoatMap:le,clearcoatNormalMap:Ge,clearcoatRoughnessMap:ee,dispersion:j,iridescence:Z,iridescenceMap:ve,iridescenceThicknessMap:$e,sheen:J,sheenColorMap:De,sheenRoughnessMap:ce,specularMap:Ve,specularColorMap:je,specularIntensityMap:At,transmission:we,transmissionMap:D,thicknessMap:fe,gradientMap:q,opaque:w.transparent===!1&&w.blending===hs&&w.alphaToCoverage===!1,alphaMap:K,alphaTest:ie,alphaHash:Ue,combine:w.combine,mapUv:Ke&&_(w.map.channel),aoMapUv:Re&&_(w.aoMap.channel),lightMapUv:ct&&_(w.lightMap.channel),bumpMapUv:ye&&_(w.bumpMap.channel),normalMapUv:Ye&&_(w.normalMap.channel),displacementMapUv:Ne&&_(w.displacementMap.channel),emissiveMapUv:Le&&_(w.emissiveMap.channel),metalnessMapUv:pt&&_(w.metalnessMap.channel),roughnessMapUv:P&&_(w.roughnessMap.channel),anisotropyMapUv:ae&&_(w.anisotropyMap.channel),clearcoatMapUv:le&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:De&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:ce&&_(w.sheenRoughnessMap.channel),specularMapUv:Ve&&_(w.specularMap.channel),specularColorMapUv:je&&_(w.specularColorMap.channel),specularIntensityMapUv:At&&_(w.specularIntensityMap.channel),transmissionMapUv:D&&_(w.transmissionMap.channel),thicknessMapUv:fe&&_(w.thicknessMap.channel),alphaMapUv:K&&_(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ye||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!W.attributes.uv&&(Ke||K),fog:!!G,useFog:w.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:k.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Xe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:Rt,decodeVideoTexture:Ke&&w.map.isVideoTexture===!0&&at.getTransfer(w.map.colorSpace)===mt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===yn,flipSided:w.side===pn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Qe&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Qe&&w.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Bt.vertexUv1s=c.has(1),Bt.vertexUv2s=c.has(2),Bt.vertexUv3s=c.has(3),c.clear(),Bt}function h(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)y.push(I),y.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(x(y,w),v(y,w),y.push(t.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function x(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function v(w,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),w.push(a.mask)}function S(w){const y=g[w.type];let I;if(y){const F=ui[y];I=f1.clone(F.uniforms)}else I=w.uniforms;return I}function C(w,y){let I;for(let F=0,k=u.length;F<k;F++){const G=u[F];if(G.cacheKey===y){I=G,++I.usedTimes;break}}return I===void 0&&(I=new ET(t,y,w,o),u.push(I)),I}function E(w){if(--w.usedTimes===0){const y=u.indexOf(w);u[y]=u[u.length-1],u.pop(),w.destroy()}}function R(w){l.remove(w)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:C,releaseProgram:E,releaseShaderCache:R,programs:u,dispose:L}}function RT(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function CT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function C0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function P0(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(f,d,p,g,_,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=_,h.group=m),e++,h}function a(f,d,p,g,_,m){const h=s(f,d,p,g,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,g,_,m){const h=s(f,d,p,g,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||CT),i.length>1&&i.sort(d||C0),r.length>1&&r.sort(d||C0)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:u,sort:c}}function PT(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new P0,t.set(i,[s])):r>=o.length?(s=new P0,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function IT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new A,color:new Me};break;case"SpotLight":n={position:new A,direction:new A,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new A,color:new Me,distance:0,decay:0};break;case"HemisphereLight":n={direction:new A,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":n={color:new Me,position:new A,halfWidth:new A,halfHeight:new A};break}return t[e.id]=n,n}}}function LT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let DT=0;function UT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function NT(t){const e=new IT,n=LT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new A);const r=new A,o=new Mt,s=new Mt;function a(c){let u=0,f=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,x=0,v=0,S=0,C=0,E=0,R=0;c.sort(UT);for(let w=0,y=c.length;w<y;w++){const I=c[w],F=I.color,k=I.intensity,G=I.distance,W=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=F.r*k,f+=F.g*k,d+=F.b*k;else if(I.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(I.sh.coefficients[V],k);R++}else if(I.isDirectionalLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const $=I.shadow,X=n.get(I);X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=I.shadow.matrix,x++}i.directional[p]=V,p++}else if(I.isSpotLight){const V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(F).multiplyScalar(k),V.distance=G,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,i.spot[_]=V;const $=I.shadow;if(I.map&&(i.spotLightMap[C]=I.map,C++,$.updateMatrices(I),I.castShadow&&E++),i.spotLightMatrix[_]=$.matrix,I.castShadow){const X=n.get(I);X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=W,S++}_++}else if(I.isRectAreaLight){const V=e.get(I);V.color.copy(F).multiplyScalar(k),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=V,m++}else if(I.isPointLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const $=I.shadow,X=n.get(I);X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,X.shadowCameraNear=$.camera.near,X.shadowCameraFar=$.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=I.shadow.matrix,v++}i.point[g]=V,g++}else if(I.isHemisphereLight){const V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(k),V.groundColor.copy(I.groundColor).multiplyScalar(k),i.hemi[h]=V,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==h||L.numDirectionalShadows!==x||L.numPointShadows!==v||L.numSpotShadows!==S||L.numSpotMaps!==C||L.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+C-E,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=R,L.directionalLength=p,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=h,L.numDirectionalShadows=x,L.numPointShadows=v,L.numSpotShadows=S,L.numSpotMaps=C,L.numLightProbes=R,i.version=DT++)}function l(c,u){let f=0,d=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let h=0,x=c.length;h<x;h++){const v=c[h];if(v.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(v.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),s.identity(),o.copy(v.matrixWorld),o.premultiply(m),s.extractRotation(o),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),g++}else if(v.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function I0(t){const e=new NT(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function o(u){n.push(u)}function s(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function FT(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new I0(t),e.set(r,[a])):o>=s.length?(a=new I0(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class OT extends Fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BT extends Fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function HT(t,e,n){let i=new Zh;const r=new Pe,o=new Pe,s=new Gt,a=new OT({depthPacking:SM}),l=new BT,c={},u=n.maxTextureSize,f={[Ki]:pn,[pn]:Ki,[yn]:yn},d=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:kT,fragmentShader:zT}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Et;g.setAttribute("position",new nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new lt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xh;let h=this.type;this.render=function(E,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const w=t.getRenderTarget(),y=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Tr),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=h!==Li&&this.type===Li,G=h===Li&&this.type!==Li;for(let W=0,V=E.length;W<V;W++){const $=E[W],X=$.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const te=X.getFrameExtents();if(r.multiply(te),o.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/te.x),r.x=o.x*te.x,X.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/te.y),r.y=o.y*te.y,X.mapSize.y=o.y)),X.map===null||k===!0||G===!0){const ge=this.type!==Li?{minFilter:Bn,magFilter:Bn}:{};X.map!==null&&X.map.dispose(),X.map=new _o(r.x,r.y,ge),X.map.texture.name=$.name+".shadowMap",X.camera.updateProjectionMatrix()}t.setRenderTarget(X.map),t.clear();const he=X.getViewportCount();for(let ge=0;ge<he;ge++){const Xe=X.getViewport(ge);s.set(o.x*Xe.x,o.y*Xe.y,o.x*Xe.z,o.y*Xe.w),F.viewport(s),X.updateMatrices($,ge),i=X.getFrustum(),S(R,L,X.camera,$,this.type)}X.isPointLightShadow!==!0&&this.type===Li&&x(X,L),X.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(w,y,I)};function x(E,R){const L=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new _o(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(R,null,L,d,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(R,null,L,p,_,null)}function v(E,R,L,w){let y=null;const I=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)y=I;else if(y=L.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const F=y.uuid,k=R.uuid;let G=c[F];G===void 0&&(G={},c[F]=G);let W=G[k];W===void 0&&(W=y.clone(),G[k]=W,R.addEventListener("dispose",C)),y=W}if(y.visible=R.visible,y.wireframe=R.wireframe,w===Li?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:f[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=t.properties.get(y);F.light=L}return y}function S(E,R,L,w,y){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===Li)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const k=e.update(E),G=E.material;if(Array.isArray(G)){const W=k.groups;for(let V=0,$=W.length;V<$;V++){const X=W[V],te=G[X.materialIndex];if(te&&te.visible){const he=v(E,te,w,y);E.onBeforeShadow(t,E,R,L,k,he,X),t.renderBufferDirect(L,null,k,he,E,X),E.onAfterShadow(t,E,R,L,k,he,X)}}}else if(G.visible){const W=v(E,G,w,y);E.onBeforeShadow(t,E,R,L,k,W,null),t.renderBufferDirect(L,null,k,W,E,null),E.onAfterShadow(t,E,R,L,k,W,null)}}const F=E.children;for(let k=0,G=F.length;k<G;k++)S(F[k],R,L,w,y)}function C(E){E.target.removeEventListener("dispose",C);for(const L in c){const w=c[L],y=E.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}function GT(t){function e(){let D=!1;const fe=new Gt;let q=null;const K=new Gt(0,0,0,0);return{setMask:function(ie){q!==ie&&!D&&(t.colorMask(ie,ie,ie,ie),q=ie)},setLocked:function(ie){D=ie},setClear:function(ie,Ue,Qe,Rt,Bt){Bt===!0&&(ie*=Rt,Ue*=Rt,Qe*=Rt),fe.set(ie,Ue,Qe,Rt),K.equals(fe)===!1&&(t.clearColor(ie,Ue,Qe,Rt),K.copy(fe))},reset:function(){D=!1,q=null,K.set(-1,0,0,0)}}}function n(){let D=!1,fe=null,q=null,K=null;return{setTest:function(ie){ie?pe(t.DEPTH_TEST):re(t.DEPTH_TEST)},setMask:function(ie){fe!==ie&&!D&&(t.depthMask(ie),fe=ie)},setFunc:function(ie){if(q!==ie){switch(ie){case qS:t.depthFunc(t.NEVER);break;case $S:t.depthFunc(t.ALWAYS);break;case KS:t.depthFunc(t.LESS);break;case Hc:t.depthFunc(t.LEQUAL);break;case jS:t.depthFunc(t.EQUAL);break;case ZS:t.depthFunc(t.GEQUAL);break;case JS:t.depthFunc(t.GREATER);break;case QS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}q=ie}},setLocked:function(ie){D=ie},setClear:function(ie){K!==ie&&(t.clearDepth(ie),K=ie)},reset:function(){D=!1,fe=null,q=null,K=null}}}function i(){let D=!1,fe=null,q=null,K=null,ie=null,Ue=null,Qe=null,Rt=null,Bt=null;return{setTest:function(ut){D||(ut?pe(t.STENCIL_TEST):re(t.STENCIL_TEST))},setMask:function(ut){fe!==ut&&!D&&(t.stencilMask(ut),fe=ut)},setFunc:function(ut,si,ai){(q!==ut||K!==si||ie!==ai)&&(t.stencilFunc(ut,si,ai),q=ut,K=si,ie=ai)},setOp:function(ut,si,ai){(Ue!==ut||Qe!==si||Rt!==ai)&&(t.stencilOp(ut,si,ai),Ue=ut,Qe=si,Rt=ai)},setLocked:function(ut){D=ut},setClear:function(ut){Bt!==ut&&(t.clearStencil(ut),Bt=ut)},reset:function(){D=!1,fe=null,q=null,K=null,ie=null,Ue=null,Qe=null,Rt=null,Bt=null}}}const r=new e,o=new n,s=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],p=null,g=!1,_=null,m=null,h=null,x=null,v=null,S=null,C=null,E=new Me(0,0,0),R=0,L=!1,w=null,y=null,I=null,F=null,k=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,V=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec($)[1]),W=V>=1):$.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),W=V>=2);let X=null,te={};const he=t.getParameter(t.SCISSOR_BOX),ge=t.getParameter(t.VIEWPORT),Xe=new Gt().fromArray(he),Ze=new Gt().fromArray(ge);function Y(D,fe,q,K){const ie=new Uint8Array(4),Ue=t.createTexture();t.bindTexture(D,Ue),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Qe=0;Qe<q;Qe++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,K,0,t.RGBA,t.UNSIGNED_BYTE,ie):t.texImage2D(fe+Qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ie);return Ue}const Q={};Q[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),Q[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Q[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),pe(t.DEPTH_TEST),o.setFunc(Hc),ye(!1),Ye(hm),pe(t.CULL_FACE),Re(Tr);function pe(D){c[D]!==!0&&(t.enable(D),c[D]=!0)}function re(D){c[D]!==!1&&(t.disable(D),c[D]=!1)}function ke(D,fe){return u[D]!==fe?(t.bindFramebuffer(D,fe),u[D]=fe,D===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=fe),D===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Fe(D,fe){let q=d,K=!1;if(D){q=f.get(fe),q===void 0&&(q=[],f.set(fe,q));const ie=D.textures;if(q.length!==ie.length||q[0]!==t.COLOR_ATTACHMENT0){for(let Ue=0,Qe=ie.length;Ue<Qe;Ue++)q[Ue]=t.COLOR_ATTACHMENT0+Ue;q.length=ie.length,K=!0}}else q[0]!==t.BACK&&(q[0]=t.BACK,K=!0);K&&t.drawBuffers(q)}function Ke(D){return p!==D?(t.useProgram(D),p=D,!0):!1}const U={[eo]:t.FUNC_ADD,[PS]:t.FUNC_SUBTRACT,[IS]:t.FUNC_REVERSE_SUBTRACT};U[LS]=t.MIN,U[DS]=t.MAX;const Te={[US]:t.ZERO,[NS]:t.ONE,[FS]:t.SRC_COLOR,[Jd]:t.SRC_ALPHA,[GS]:t.SRC_ALPHA_SATURATE,[zS]:t.DST_COLOR,[BS]:t.DST_ALPHA,[OS]:t.ONE_MINUS_SRC_COLOR,[Qd]:t.ONE_MINUS_SRC_ALPHA,[HS]:t.ONE_MINUS_DST_COLOR,[kS]:t.ONE_MINUS_DST_ALPHA,[VS]:t.CONSTANT_COLOR,[WS]:t.ONE_MINUS_CONSTANT_COLOR,[XS]:t.CONSTANT_ALPHA,[YS]:t.ONE_MINUS_CONSTANT_ALPHA};function Re(D,fe,q,K,ie,Ue,Qe,Rt,Bt,ut){if(D===Tr){g===!0&&(re(t.BLEND),g=!1);return}if(g===!1&&(pe(t.BLEND),g=!0),D!==CS){if(D!==_||ut!==L){if((m!==eo||v!==eo)&&(t.blendEquation(t.FUNC_ADD),m=eo,v=eo),ut)switch(D){case hs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Zd:t.blendFunc(t.ONE,t.ONE);break;case pm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case mm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case hs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Zd:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case pm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case mm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}h=null,x=null,S=null,C=null,E.set(0,0,0),R=0,_=D,L=ut}return}ie=ie||fe,Ue=Ue||q,Qe=Qe||K,(fe!==m||ie!==v)&&(t.blendEquationSeparate(U[fe],U[ie]),m=fe,v=ie),(q!==h||K!==x||Ue!==S||Qe!==C)&&(t.blendFuncSeparate(Te[q],Te[K],Te[Ue],Te[Qe]),h=q,x=K,S=Ue,C=Qe),(Rt.equals(E)===!1||Bt!==R)&&(t.blendColor(Rt.r,Rt.g,Rt.b,Bt),E.copy(Rt),R=Bt),_=D,L=!1}function ct(D,fe){D.side===yn?re(t.CULL_FACE):pe(t.CULL_FACE);let q=D.side===pn;fe&&(q=!q),ye(q),D.blending===hs&&D.transparent===!1?Re(Tr):Re(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const K=D.stencilWrite;s.setTest(K),K&&(s.setMask(D.stencilWriteMask),s.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),s.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Le(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):re(t.SAMPLE_ALPHA_TO_COVERAGE)}function ye(D){w!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),w=D)}function Ye(D){D!==TS?(pe(t.CULL_FACE),D!==y&&(D===hm?t.cullFace(t.BACK):D===AS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):re(t.CULL_FACE),y=D}function Ne(D){D!==I&&(W&&t.lineWidth(D),I=D)}function Le(D,fe,q){D?(pe(t.POLYGON_OFFSET_FILL),(F!==fe||k!==q)&&(t.polygonOffset(fe,q),F=fe,k=q)):re(t.POLYGON_OFFSET_FILL)}function pt(D){D?pe(t.SCISSOR_TEST):re(t.SCISSOR_TEST)}function P(D){D===void 0&&(D=t.TEXTURE0+G-1),X!==D&&(t.activeTexture(D),X=D)}function M(D,fe,q){q===void 0&&(X===null?q=t.TEXTURE0+G-1:q=X);let K=te[q];K===void 0&&(K={type:void 0,texture:void 0},te[q]=K),(K.type!==D||K.texture!==fe)&&(X!==q&&(t.activeTexture(q),X=q),t.bindTexture(D,fe||Q[D]),K.type=D,K.texture=fe)}function H(){const D=te[X];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $e(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(D){Xe.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Xe.copy(D))}function ce(D){Ze.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Ze.copy(D))}function Ve(D,fe){let q=l.get(fe);q===void 0&&(q=new WeakMap,l.set(fe,q));let K=q.get(D);K===void 0&&(K=t.getUniformBlockIndex(fe,D.name),q.set(D,K))}function je(D,fe){const K=l.get(fe).get(D);a.get(fe)!==K&&(t.uniformBlockBinding(fe,K,D.__bindingPointIndex),a.set(fe,K))}function At(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},X=null,te={},u={},f=new WeakMap,d=[],p=null,g=!1,_=null,m=null,h=null,x=null,v=null,S=null,C=null,E=new Me(0,0,0),R=0,L=!1,w=null,y=null,I=null,F=null,k=null,Xe.set(0,0,t.canvas.width,t.canvas.height),Ze.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:pe,disable:re,bindFramebuffer:ke,drawBuffers:Fe,useProgram:Ke,setBlending:Re,setMaterial:ct,setFlipSided:ye,setCullFace:Ye,setLineWidth:Ne,setPolygonOffset:Le,setScissorTest:pt,activeTexture:P,bindTexture:M,unbindTexture:H,compressedTexImage2D:j,compressedTexImage3D:Z,texImage2D:ve,texImage3D:$e,updateUBOMapping:Ve,uniformBlockBinding:je,texStorage2D:Ge,texStorage3D:ee,texSubImage2D:J,texSubImage3D:we,compressedTexSubImage2D:ae,compressedTexSubImage3D:le,scissor:De,viewport:ce,reset:At}}function VT(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pe,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,M){return p?new OffscreenCanvas(P,M):qc("canvas")}function _(P,M,H){let j=1;const Z=pt(P);if((Z.width>H||Z.height>H)&&(j=H/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const J=Math.floor(j*Z.width),we=Math.floor(j*Z.height);f===void 0&&(f=g(J,we));const ae=M?g(J,we):f;return ae.width=J,ae.height=we,ae.getContext("2d").drawImage(P,0,0,J,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+J+"x"+we+")."),ae}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==Bn&&P.minFilter!==Sn}function h(P){t.generateMipmap(P)}function x(P,M,H,j,Z=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=M;if(M===t.RED&&(H===t.FLOAT&&(J=t.R32F),H===t.HALF_FLOAT&&(J=t.R16F),H===t.UNSIGNED_BYTE&&(J=t.R8)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(J=t.R8UI),H===t.UNSIGNED_SHORT&&(J=t.R16UI),H===t.UNSIGNED_INT&&(J=t.R32UI),H===t.BYTE&&(J=t.R8I),H===t.SHORT&&(J=t.R16I),H===t.INT&&(J=t.R32I)),M===t.RG&&(H===t.FLOAT&&(J=t.RG32F),H===t.HALF_FLOAT&&(J=t.RG16F),H===t.UNSIGNED_BYTE&&(J=t.RG8)),M===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(J=t.RG8UI),H===t.UNSIGNED_SHORT&&(J=t.RG16UI),H===t.UNSIGNED_INT&&(J=t.RG32UI),H===t.BYTE&&(J=t.RG8I),H===t.SHORT&&(J=t.RG16I),H===t.INT&&(J=t.RG32I)),M===t.RGB&&H===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),M===t.RGBA){const we=Z?Vc:at.getTransfer(j);H===t.FLOAT&&(J=t.RGBA32F),H===t.HALF_FLOAT&&(J=t.RGBA16F),H===t.UNSIGNED_BYTE&&(J=we===mt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(P,M){let H;return P?M===null||M===Ds||M===Us?H=t.DEPTH24_STENCIL8:M===vr?H=t.DEPTH32F_STENCIL8:M===Gc&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ds||M===Us?H=t.DEPTH_COMPONENT24:M===vr?H=t.DEPTH_COMPONENT32F:M===Gc&&(H=t.DEPTH_COMPONENT16),H}function S(P,M){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Bn&&P.minFilter!==Sn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function C(P){const M=P.target;M.removeEventListener("dispose",C),R(M),M.isVideoTexture&&u.delete(M)}function E(P){const M=P.target;M.removeEventListener("dispose",E),w(M)}function R(P){const M=i.get(P);if(M.__webglInit===void 0)return;const H=P.source,j=d.get(H);if(j){const Z=j[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&L(P),Object.keys(j).length===0&&d.delete(H)}i.remove(P)}function L(P){const M=i.get(P);t.deleteTexture(M.__webglTexture);const H=P.source,j=d.get(H);delete j[M.__cacheKey],s.memory.textures--}function w(P){const M=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let Z=0;Z<M.__webglFramebuffer[j].length;Z++)t.deleteFramebuffer(M.__webglFramebuffer[j][Z]);else t.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)t.deleteFramebuffer(M.__webglFramebuffer[j]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=P.textures;for(let j=0,Z=H.length;j<Z;j++){const J=i.get(H[j]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),s.memory.textures--),i.remove(H[j])}i.remove(P)}let y=0;function I(){y=0}function F(){const P=y;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),y+=1,P}function k(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function G(P,M){const H=i.get(P);if(P.isVideoTexture&&Ne(P),P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){const j=P.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ze(H,P,M);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function W(P,M){const H=i.get(P);if(P.version>0&&H.__version!==P.version){Ze(H,P,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function V(P,M){const H=i.get(P);if(P.version>0&&H.__version!==P.version){Ze(H,P,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function $(P,M){const H=i.get(P);if(P.version>0&&H.__version!==P.version){Y(H,P,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const X={[nh]:t.REPEAT,[Vi]:t.CLAMP_TO_EDGE,[ih]:t.MIRRORED_REPEAT},te={[Bn]:t.NEAREST,[cM]:t.NEAREST_MIPMAP_NEAREST,[yl]:t.NEAREST_MIPMAP_LINEAR,[Sn]:t.LINEAR,[Df]:t.LINEAR_MIPMAP_NEAREST,[Wi]:t.LINEAR_MIPMAP_LINEAR},he={[EM]:t.NEVER,[CM]:t.ALWAYS,[bM]:t.LESS,[wv]:t.LEQUAL,[wM]:t.EQUAL,[RM]:t.GEQUAL,[TM]:t.GREATER,[AM]:t.NOTEQUAL};function ge(P,M){if(M.type===vr&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Sn||M.magFilter===Df||M.magFilter===yl||M.magFilter===Wi||M.minFilter===Sn||M.minFilter===Df||M.minFilter===yl||M.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,X[M.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,X[M.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,X[M.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,te[M.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,te[M.minFilter]),M.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,he[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Bn||M.minFilter!==yl&&M.minFilter!==Wi||M.type===vr&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Xe(P,M){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",C));const j=M.source;let Z=d.get(j);Z===void 0&&(Z={},d.set(j,Z));const J=k(M);if(J!==P.__cacheKey){Z[J]===void 0&&(Z[J]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,H=!0),Z[J].usedTimes++;const we=Z[P.__cacheKey];we!==void 0&&(Z[P.__cacheKey].usedTimes--,we.usedTimes===0&&L(M)),P.__cacheKey=J,P.__webglTexture=Z[J].texture}return H}function Ze(P,M,H){let j=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=t.TEXTURE_3D);const Z=Xe(P,M),J=M.source;n.bindTexture(j,P.__webglTexture,t.TEXTURE0+H);const we=i.get(J);if(J.version!==we.__version||Z===!0){n.activeTexture(t.TEXTURE0+H);const ae=at.getPrimaries(at.workingColorSpace),le=M.colorSpace===dr?null:at.getPrimaries(M.colorSpace),Ge=M.colorSpace===dr||ae===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let ee=_(M.image,!1,r.maxTextureSize);ee=Le(M,ee);const ve=o.convert(M.format,M.colorSpace),$e=o.convert(M.type);let De=x(M.internalFormat,ve,$e,M.colorSpace,M.isVideoTexture);ge(j,M);let ce;const Ve=M.mipmaps,je=M.isVideoTexture!==!0,At=we.__version===void 0||Z===!0,D=J.dataReady,fe=S(M,ee);if(M.isDepthTexture)De=v(M.format===Ns,M.type),At&&(je?n.texStorage2D(t.TEXTURE_2D,1,De,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,De,ee.width,ee.height,0,ve,$e,null));else if(M.isDataTexture)if(Ve.length>0){je&&At&&n.texStorage2D(t.TEXTURE_2D,fe,De,Ve[0].width,Ve[0].height);for(let q=0,K=Ve.length;q<K;q++)ce=Ve[q],je?D&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,ce.width,ce.height,ve,$e,ce.data):n.texImage2D(t.TEXTURE_2D,q,De,ce.width,ce.height,0,ve,$e,ce.data);M.generateMipmaps=!1}else je?(At&&n.texStorage2D(t.TEXTURE_2D,fe,De,ee.width,ee.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ee.width,ee.height,ve,$e,ee.data)):n.texImage2D(t.TEXTURE_2D,0,De,ee.width,ee.height,0,ve,$e,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){je&&At&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,De,Ve[0].width,Ve[0].height,ee.depth);for(let q=0,K=Ve.length;q<K;q++)if(ce=Ve[q],M.format!==pi)if(ve!==null)if(je){if(D)if(M.layerUpdates.size>0){for(const ie of M.layerUpdates){const Ue=ce.width*ce.height;n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,ie,ce.width,ce.height,1,ve,ce.data.slice(Ue*ie,Ue*(ie+1)),0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,ce.width,ce.height,ee.depth,ve,ce.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,q,De,ce.width,ce.height,ee.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,ce.width,ce.height,ee.depth,ve,$e,ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,q,De,ce.width,ce.height,ee.depth,0,ve,$e,ce.data)}else{je&&At&&n.texStorage2D(t.TEXTURE_2D,fe,De,Ve[0].width,Ve[0].height);for(let q=0,K=Ve.length;q<K;q++)ce=Ve[q],M.format!==pi?ve!==null?je?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,q,0,0,ce.width,ce.height,ve,ce.data):n.compressedTexImage2D(t.TEXTURE_2D,q,De,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?D&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,ce.width,ce.height,ve,$e,ce.data):n.texImage2D(t.TEXTURE_2D,q,De,ce.width,ce.height,0,ve,$e,ce.data)}else if(M.isDataArrayTexture)if(je){if(At&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,De,ee.width,ee.height,ee.depth),D)if(M.layerUpdates.size>0){let q;switch($e){case t.UNSIGNED_BYTE:switch(ve){case t.ALPHA:q=1;break;case t.LUMINANCE:q=1;break;case t.LUMINANCE_ALPHA:q=2;break;case t.RGB:q=3;break;case t.RGBA:q=4;break;default:throw new Error(`Unknown texel size for format ${ve}.`)}break;case t.UNSIGNED_SHORT_4_4_4_4:case t.UNSIGNED_SHORT_5_5_5_1:case t.UNSIGNED_SHORT_5_6_5:q=1;break;default:throw new Error(`Unknown texel size for type ${$e}.`)}const K=ee.width*ee.height*q;for(const ie of M.layerUpdates)n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ie,ee.width,ee.height,1,ve,$e,ee.data.slice(K*ie,K*(ie+1)));M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ve,$e,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,ee.width,ee.height,ee.depth,0,ve,$e,ee.data);else if(M.isData3DTexture)je?(At&&n.texStorage3D(t.TEXTURE_3D,fe,De,ee.width,ee.height,ee.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ve,$e,ee.data)):n.texImage3D(t.TEXTURE_3D,0,De,ee.width,ee.height,ee.depth,0,ve,$e,ee.data);else if(M.isFramebufferTexture){if(At)if(je)n.texStorage2D(t.TEXTURE_2D,fe,De,ee.width,ee.height);else{let q=ee.width,K=ee.height;for(let ie=0;ie<fe;ie++)n.texImage2D(t.TEXTURE_2D,ie,De,q,K,0,ve,$e,null),q>>=1,K>>=1}}else if(Ve.length>0){if(je&&At){const q=pt(Ve[0]);n.texStorage2D(t.TEXTURE_2D,fe,De,q.width,q.height)}for(let q=0,K=Ve.length;q<K;q++)ce=Ve[q],je?D&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,ve,$e,ce):n.texImage2D(t.TEXTURE_2D,q,De,ve,$e,ce);M.generateMipmaps=!1}else if(je){if(At){const q=pt(ee);n.texStorage2D(t.TEXTURE_2D,fe,De,q.width,q.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,$e,ee)}else n.texImage2D(t.TEXTURE_2D,0,De,ve,$e,ee);m(M)&&h(j),we.__version=J.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Y(P,M,H){if(M.image.length!==6)return;const j=Xe(P,M),Z=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+H);const J=i.get(Z);if(Z.version!==J.__version||j===!0){n.activeTexture(t.TEXTURE0+H);const we=at.getPrimaries(at.workingColorSpace),ae=M.colorSpace===dr?null:at.getPrimaries(M.colorSpace),le=M.colorSpace===dr||we===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const Ge=M.isCompressedTexture||M.image[0].isCompressedTexture,ee=M.image[0]&&M.image[0].isDataTexture,ve=[];for(let K=0;K<6;K++)!Ge&&!ee?ve[K]=_(M.image[K],!0,r.maxCubemapSize):ve[K]=ee?M.image[K].image:M.image[K],ve[K]=Le(M,ve[K]);const $e=ve[0],De=o.convert(M.format,M.colorSpace),ce=o.convert(M.type),Ve=x(M.internalFormat,De,ce,M.colorSpace),je=M.isVideoTexture!==!0,At=J.__version===void 0||j===!0,D=Z.dataReady;let fe=S(M,$e);ge(t.TEXTURE_CUBE_MAP,M);let q;if(Ge){je&&At&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Ve,$e.width,$e.height);for(let K=0;K<6;K++){q=ve[K].mipmaps;for(let ie=0;ie<q.length;ie++){const Ue=q[ie];M.format!==pi?De!==null?je?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,0,0,Ue.width,Ue.height,De,Ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,Ve,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,0,0,Ue.width,Ue.height,De,ce,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,Ve,Ue.width,Ue.height,0,De,ce,Ue.data)}}}else{if(q=M.mipmaps,je&&At){q.length>0&&fe++;const K=pt(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Ve,K.width,K.height)}for(let K=0;K<6;K++)if(ee){je?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ve[K].width,ve[K].height,De,ce,ve[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ve,ve[K].width,ve[K].height,0,De,ce,ve[K].data);for(let ie=0;ie<q.length;ie++){const Qe=q[ie].image[K].image;je?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,0,0,Qe.width,Qe.height,De,ce,Qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,Ve,Qe.width,Qe.height,0,De,ce,Qe.data)}}else{je?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,De,ce,ve[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ve,De,ce,ve[K]);for(let ie=0;ie<q.length;ie++){const Ue=q[ie];je?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,0,0,De,ce,Ue.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,Ve,De,ce,Ue.image[K])}}}m(M)&&h(t.TEXTURE_CUBE_MAP),J.__version=Z.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Q(P,M,H,j,Z,J){const we=o.convert(H.format,H.colorSpace),ae=o.convert(H.type),le=x(H.internalFormat,we,ae,H.colorSpace);if(!i.get(M).__hasExternalTextures){const ee=Math.max(1,M.width>>J),ve=Math.max(1,M.height>>J);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,J,le,ee,ve,M.depth,0,we,ae,null):n.texImage2D(Z,J,le,ee,ve,0,we,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Ye(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,Z,i.get(H).__webglTexture,0,ye(M)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,Z,i.get(H).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function pe(P,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,P),M.depthBuffer){const j=M.depthTexture,Z=j&&j.isDepthTexture?j.type:null,J=v(M.stencilBuffer,Z),we=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=ye(M);Ye(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,J,M.width,M.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,J,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,J,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,we,t.RENDERBUFFER,P)}else{const j=M.textures;for(let Z=0;Z<j.length;Z++){const J=j[Z],we=o.convert(J.format,J.colorSpace),ae=o.convert(J.type),le=x(J.internalFormat,we,ae,J.colorSpace),Ge=ye(M);H&&Ye(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge,le,M.width,M.height):Ye(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ge,le,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,le,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function re(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);const j=i.get(M.depthTexture).__webglTexture,Z=ye(M);if(M.depthTexture.format===ps)Ye(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0);else if(M.depthTexture.format===Ns)Ye(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function ke(P){const M=i.get(P),H=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");re(M.__webglFramebuffer,P)}else if(H){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]=t.createRenderbuffer(),pe(M.__webglDepthbuffer[j],P,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),pe(M.__webglDepthbuffer,P,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(P,M,H){const j=i.get(P);M!==void 0&&Q(j.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&ke(P)}function Ke(P){const M=P.texture,H=i.get(P),j=i.get(M);P.addEventListener("dispose",E);const Z=P.textures,J=P.isWebGLCubeRenderTarget===!0,we=Z.length>1;if(we||(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=M.version,s.memory.textures++),J){H.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[ae]=[];for(let le=0;le<M.mipmaps.length;le++)H.__webglFramebuffer[ae][le]=t.createFramebuffer()}else H.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let ae=0;ae<M.mipmaps.length;ae++)H.__webglFramebuffer[ae]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(we)for(let ae=0,le=Z.length;ae<le;ae++){const Ge=i.get(Z[ae]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=t.createTexture(),s.memory.textures++)}if(P.samples>0&&Ye(P)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ae=0;ae<Z.length;ae++){const le=Z[ae];H.__webglColorRenderbuffer[ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[ae]);const Ge=o.convert(le.format,le.colorSpace),ee=o.convert(le.type),ve=x(le.internalFormat,Ge,ee,le.colorSpace,P.isXRRenderTarget===!0),$e=ye(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,$e,ve,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,H.__webglColorRenderbuffer[ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),pe(H.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),ge(t.TEXTURE_CUBE_MAP,M);for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0)for(let le=0;le<M.mipmaps.length;le++)Q(H.__webglFramebuffer[ae][le],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,le);else Q(H.__webglFramebuffer[ae],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(M)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let ae=0,le=Z.length;ae<le;ae++){const Ge=Z[ae],ee=i.get(Ge);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture),ge(t.TEXTURE_2D,Ge),Q(H.__webglFramebuffer,P,Ge,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,0),m(Ge)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ae=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,j.__webglTexture),ge(ae,M),M.mipmaps&&M.mipmaps.length>0)for(let le=0;le<M.mipmaps.length;le++)Q(H.__webglFramebuffer[le],P,M,t.COLOR_ATTACHMENT0,ae,le);else Q(H.__webglFramebuffer,P,M,t.COLOR_ATTACHMENT0,ae,0);m(M)&&h(ae),n.unbindTexture()}P.depthBuffer&&ke(P)}function U(P){const M=P.textures;for(let H=0,j=M.length;H<j;H++){const Z=M[H];if(m(Z)){const J=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,we=i.get(Z).__webglTexture;n.bindTexture(J,we),h(J),n.unbindTexture()}}}const Te=[],Re=[];function ct(P){if(P.samples>0){if(Ye(P)===!1){const M=P.textures,H=P.width,j=P.height;let Z=t.COLOR_BUFFER_BIT;const J=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(P),ae=M.length>1;if(ae)for(let le=0;le<M.length;le++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let le=0;le<M.length;le++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),ae){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[le]);const Ge=i.get(M[le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ge,0)}t.blitFramebuffer(0,0,H,j,0,0,H,j,Z,t.NEAREST),l===!0&&(Te.length=0,Re.length=0,Te.push(t.COLOR_ATTACHMENT0+le),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Te.push(J),Re.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Re)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Te))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let le=0;le<M.length;le++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,we.__webglColorRenderbuffer[le]);const Ge=i.get(M[le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,Ge,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const M=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function ye(P){return Math.min(r.maxSamples,P.samples)}function Ye(P){const M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ne(P){const M=s.render.frame;u.get(P)!==M&&(u.set(P,M),P.update())}function Le(P,M){const H=P.colorSpace,j=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==Nr&&H!==dr&&(at.getTransfer(H)===mt?(j!==pi||Z!==Ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function pt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=I,this.setTexture2D=G,this.setTexture2DArray=W,this.setTexture3D=V,this.setTextureCube=$,this.rebindTextures=Fe,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Ye}function WT(t,e){function n(i,r=dr){let o;const s=at.getTransfer(r);if(i===Ir)return t.UNSIGNED_BYTE;if(i===xv)return t.UNSIGNED_SHORT_4_4_4_4;if(i===yv)return t.UNSIGNED_SHORT_5_5_5_1;if(i===dM)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===uM)return t.BYTE;if(i===fM)return t.SHORT;if(i===Gc)return t.UNSIGNED_SHORT;if(i===vv)return t.INT;if(i===Ds)return t.UNSIGNED_INT;if(i===vr)return t.FLOAT;if(i===Vu)return t.HALF_FLOAT;if(i===hM)return t.ALPHA;if(i===pM)return t.RGB;if(i===pi)return t.RGBA;if(i===mM)return t.LUMINANCE;if(i===gM)return t.LUMINANCE_ALPHA;if(i===ps)return t.DEPTH_COMPONENT;if(i===Ns)return t.DEPTH_STENCIL;if(i===_M)return t.RED;if(i===Sv)return t.RED_INTEGER;if(i===vM)return t.RG;if(i===Mv)return t.RG_INTEGER;if(i===Ev)return t.RGBA_INTEGER;if(i===Uf||i===Nf||i===Ff||i===Of)if(s===mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Uf)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Nf)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ff)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Of)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Uf)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Nf)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ff)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Of)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gm||i===_m||i===vm||i===xm)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===gm)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_m)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vm)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xm)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ym||i===Sm||i===Mm)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===ym||i===Sm)return s===mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Mm)return s===mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Em||i===bm||i===wm||i===Tm||i===Am||i===Rm||i===Cm||i===Pm||i===Im||i===Lm||i===Dm||i===Um||i===Nm||i===Fm)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Em)return s===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bm)return s===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wm)return s===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Tm)return s===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Am)return s===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rm)return s===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cm)return s===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pm)return s===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Im)return s===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lm)return s===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dm)return s===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Um)return s===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nm)return s===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fm)return s===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bf||i===Om||i===Bm)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Bf)return s===mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Om)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bm)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xM||i===km||i===zm||i===Hm)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Bf)return o.COMPRESSED_RED_RGTC1_EXT;if(i===km)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zm)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hm)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Us?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class XT extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class jt extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YT={type:"move"};class cd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(YT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new jt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const qT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$T=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class KT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new ln,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ji({vertexShader:qT,fragmentShader:$T,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new lt(new nl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class jT extends Xs{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const _=new KT,m=n.getContextAttributes();let h=null,x=null;const v=[],S=[],C=new Pe;let E=null;const R=new xn;R.layers.enable(1),R.viewport=new Gt;const L=new xn;L.layers.enable(2),L.viewport=new Gt;const w=[R,L],y=new XT;y.layers.enable(1),y.layers.enable(2);let I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=v[Y];return Q===void 0&&(Q=new cd,v[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=v[Y];return Q===void 0&&(Q=new cd,v[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=v[Y];return Q===void 0&&(Q=new cd,v[Y]=Q),Q.getHandSpace()};function k(Y){const Q=S.indexOf(Y.inputSource);if(Q===-1)return;const pe=v[Q];pe!==void 0&&(pe.update(Y.inputSource,Y.frame,c||s),pe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",W);for(let Y=0;Y<v.length;Y++){const Q=S[Y];Q!==null&&(S[Y]=null,v[Y].disconnect(Q))}I=null,F=null,_.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,x=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",G),r.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new _o(p.framebufferWidth,p.framebufferHeight,{format:pi,type:Ir,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,pe=null,re=null;m.depth&&(re=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=m.stencil?Ns:ps,pe=m.stencil?Us:Ds);const ke={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:o};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(ke),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new _o(d.textureWidth,d.textureHeight,{format:pi,type:Ir,depthTexture:new Bv(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function W(Y){for(let Q=0;Q<Y.removed.length;Q++){const pe=Y.removed[Q],re=S.indexOf(pe);re>=0&&(S[re]=null,v[re].disconnect(pe))}for(let Q=0;Q<Y.added.length;Q++){const pe=Y.added[Q];let re=S.indexOf(pe);if(re===-1){for(let Fe=0;Fe<v.length;Fe++)if(Fe>=S.length){S.push(pe),re=Fe;break}else if(S[Fe]===null){S[Fe]=pe,re=Fe;break}if(re===-1)break}const ke=v[re];ke&&ke.connect(pe)}}const V=new A,$=new A;function X(Y,Q,pe){V.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(pe.matrixWorld);const re=V.distanceTo($),ke=Q.projectionMatrix.elements,Fe=pe.projectionMatrix.elements,Ke=ke[14]/(ke[10]-1),U=ke[14]/(ke[10]+1),Te=(ke[9]+1)/ke[5],Re=(ke[9]-1)/ke[5],ct=(ke[8]-1)/ke[0],ye=(Fe[8]+1)/Fe[0],Ye=Ke*ct,Ne=Ke*ye,Le=re/(-ct+ye),pt=Le*-ct;Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(pt),Y.translateZ(Le),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const P=Ke+Le,M=U+Le,H=Ye-pt,j=Ne+(re-pt),Z=Te*U/M*P,J=Re*U/M*P;Y.projectionMatrix.makePerspective(H,j,Z,J,P,M),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function te(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;_.texture!==null&&(Y.near=_.depthNear,Y.far=_.depthFar),y.near=L.near=R.near=Y.near,y.far=L.far=R.far=Y.far,(I!==y.near||F!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),I=y.near,F=y.far,R.near=I,R.far=F,L.near=I,L.far=F,R.updateProjectionMatrix(),L.updateProjectionMatrix(),Y.updateProjectionMatrix());const Q=Y.parent,pe=y.cameras;te(y,Q);for(let re=0;re<pe.length;re++)te(pe[re],Q);pe.length===2?X(y,R,L):y.projectionMatrix.copy(R.projectionMatrix),he(Y,y,Q)};function he(Y,Q,pe){pe===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(pe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ba*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ge=null;function Xe(Y,Q){if(u=Q.getViewerPose(c||s),g=Q,u!==null){const pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let re=!1;pe.length!==y.cameras.length&&(y.cameras.length=0,re=!0);for(let Fe=0;Fe<pe.length;Fe++){const Ke=pe[Fe];let U=null;if(p!==null)U=p.getViewport(Ke);else{const Re=f.getViewSubImage(d,Ke);U=Re.viewport,Fe===0&&(e.setRenderTargetTextures(x,Re.colorTexture,d.ignoreDepthValues?void 0:Re.depthStencilTexture),e.setRenderTarget(x))}let Te=w[Fe];Te===void 0&&(Te=new xn,Te.layers.enable(Fe),Te.viewport=new Gt,w[Fe]=Te),Te.matrix.fromArray(Ke.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Ke.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(U.x,U.y,U.width,U.height),Fe===0&&(y.matrix.copy(Te.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),re===!0&&y.cameras.push(Te)}const ke=r.enabledFeatures;if(ke&&ke.includes("depth-sensing")){const Fe=f.getDepthInformation(pe[0]);Fe&&Fe.isValid&&Fe.texture&&_.init(e,Fe,r.renderState)}}for(let pe=0;pe<v.length;pe++){const re=S[pe],ke=v[pe];re!==null&&ke!==void 0&&ke.update(re,Q,c||s)}ge&&ge(Y,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Ze=new Fv;Ze.setAnimationLoop(Xe),this.setAnimationLoop=function(Y){ge=Y},this.dispose=function(){}}}const Yr=new Tn,ZT=new Mt;function JT(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Dv(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,x,v,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?o(m,h):h.isMeshToonMaterial?(o(m,h),f(m,h)):h.isMeshPhongMaterial?(o(m,h),u(m,h)):h.isMeshStandardMaterial?(o(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(o(m,h),g(m,h)):h.isMeshDepthMaterial?o(m,h):h.isMeshDistanceMaterial?(o(m,h),_(m,h)):h.isMeshNormalMaterial?o(m,h):h.isLineBasicMaterial?(s(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,x,v):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function o(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===pn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===pn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const x=e.get(h),v=x.envMap,S=x.envMapRotation;v&&(m.envMap.value=v,Yr.copy(S),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),m.envMapRotation.value.setFromMatrix4(ZT.makeRotationFromEuler(Yr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function s(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,x,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*x,m.scale.value=v*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,x){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===pn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const x=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function QT(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const S=v.program;i.uniformBlockBinding(x,S)}function c(x,v){let S=r[x.id];S===void 0&&(g(x),S=u(x),r[x.id]=S,x.addEventListener("dispose",m));const C=v.program;i.updateUBOMapping(x,C);const E=e.render.frame;o[x.id]!==E&&(d(x),o[x.id]=E)}function u(x){const v=f();x.__bindingPointIndex=v;const S=t.createBuffer(),C=x.__size,E=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function f(){for(let x=0;x<a;x++)if(s.indexOf(x)===-1)return s.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=r[x.id],S=x.uniforms,C=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let E=0,R=S.length;E<R;E++){const L=Array.isArray(S[E])?S[E]:[S[E]];for(let w=0,y=L.length;w<y;w++){const I=L[w];if(p(I,E,w,C)===!0){const F=I.__offset,k=Array.isArray(I.value)?I.value:[I.value];let G=0;for(let W=0;W<k.length;W++){const V=k[W],$=_(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,F+G,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,G),G+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,v,S,C){const E=x.value,R=v+"_"+S;if(C[R]===void 0)return typeof E=="number"||typeof E=="boolean"?C[R]=E:C[R]=E.clone(),!0;{const L=C[R];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return C[R]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function g(x){const v=x.uniforms;let S=0;const C=16;for(let R=0,L=v.length;R<L;R++){const w=Array.isArray(v[R])?v[R]:[v[R]];for(let y=0,I=w.length;y<I;y++){const F=w[y],k=Array.isArray(F.value)?F.value:[F.value];for(let G=0,W=k.length;G<W;G++){const V=k[G],$=_(V),X=S%C;X!==0&&C-X<$.boundary&&(S+=C-X),F.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=$.storage}}}const E=S%C;return E>0&&(S+=C-E),x.__size=S,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const S=s.indexOf(v.__bindingPointIndex);s.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete o[v.id]}function h(){for(const x in r)t.deleteBuffer(r[x]);s=[],r={},o={}}return{bind:l,update:c,dispose:h}}class eA{constructor(e={}){const{canvas:n=YM(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=s;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const h=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=Ar,this.toneMappingExposure=1;const v=this;let S=!1,C=0,E=0,R=null,L=-1,w=null;const y=new Gt,I=new Gt;let F=null;const k=new Me(0);let G=0,W=n.width,V=n.height,$=1,X=null,te=null;const he=new Gt(0,0,W,V),ge=new Gt(0,0,W,V);let Xe=!1;const Ze=new Zh;let Y=!1,Q=!1;const pe=new Mt,re=new A,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function Ke(){return R===null?$:1}let U=i;function Te(b,N){return n.getContext(b,N)}try{const b={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Wh}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",q,!1),n.addEventListener("webglcontextcreationerror",K,!1),U===null){const N="webgl2";if(U=Te(N,b),U===null)throw Te(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Re,ct,ye,Ye,Ne,Le,pt,P,M,H,j,Z,J,we,ae,le,Ge,ee,ve,$e,De,ce,Ve,je;function At(){Re=new lw(U),Re.init(),ce=new WT(U,Re),ct=new nw(U,Re,e,ce),ye=new GT(U),Ye=new fw(U),Ne=new RT,Le=new VT(U,Re,ye,Ne,ct,ce,Ye),pt=new rw(v),P=new aw(v),M=new v1(U),Ve=new ew(U,M),H=new cw(U,M,Ye,Ve),j=new hw(U,H,M,Ye),ve=new dw(U,ct,Le),le=new iw(Ne),Z=new AT(v,pt,P,Re,ct,Ve,le),J=new JT(v,Ne),we=new PT,ae=new FT(Re),ee=new Qb(v,pt,P,ye,j,d,l),Ge=new HT(v,j,ct),je=new QT(U,Ye,ct,ye),$e=new tw(U,Re,Ye),De=new uw(U,Re,Ye),Ye.programs=Z.programs,v.capabilities=ct,v.extensions=Re,v.properties=Ne,v.renderLists=we,v.shadowMap=Ge,v.state=ye,v.info=Ye}At();const D=new jT(v,U);this.xr=D,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=Re.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Re.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(b){b!==void 0&&($=b,this.setSize(W,V,!1))},this.getSize=function(b){return b.set(W,V)},this.setSize=function(b,N,B=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=b,V=N,n.width=Math.floor(b*$),n.height=Math.floor(N*$),B===!0&&(n.style.width=b+"px",n.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(W*$,V*$).floor()},this.setDrawingBufferSize=function(b,N,B){W=b,V=N,$=B,n.width=Math.floor(b*B),n.height=Math.floor(N*B),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(y)},this.getViewport=function(b){return b.copy(he)},this.setViewport=function(b,N,B,z){b.isVector4?he.set(b.x,b.y,b.z,b.w):he.set(b,N,B,z),ye.viewport(y.copy(he).multiplyScalar($).round())},this.getScissor=function(b){return b.copy(ge)},this.setScissor=function(b,N,B,z){b.isVector4?ge.set(b.x,b.y,b.z,b.w):ge.set(b,N,B,z),ye.scissor(I.copy(ge).multiplyScalar($).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(b){ye.setScissorTest(Xe=b)},this.setOpaqueSort=function(b){X=b},this.setTransparentSort=function(b){te=b},this.getClearColor=function(b){return b.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(b=!0,N=!0,B=!0){let z=0;if(b){let O=!1;if(R!==null){const ne=R.texture.format;O=ne===Ev||ne===Mv||ne===Sv}if(O){const ne=R.texture.type,de=ne===Ir||ne===Ds||ne===Gc||ne===Us||ne===xv||ne===yv,me=ee.getClearColor(),_e=ee.getClearAlpha(),Ce=me.r,Ie=me.g,Ae=me.b;de?(p[0]=Ce,p[1]=Ie,p[2]=Ae,p[3]=_e,U.clearBufferuiv(U.COLOR,0,p)):(g[0]=Ce,g[1]=Ie,g[2]=Ae,g[3]=_e,U.clearBufferiv(U.COLOR,0,g))}else z|=U.COLOR_BUFFER_BIT}N&&(z|=U.DEPTH_BUFFER_BIT),B&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",q,!1),n.removeEventListener("webglcontextcreationerror",K,!1),we.dispose(),ae.dispose(),Ne.dispose(),pt.dispose(),P.dispose(),j.dispose(),Ve.dispose(),je.dispose(),Z.dispose(),D.dispose(),D.removeEventListener("sessionstart",si),D.removeEventListener("sessionend",ai),kr.stop()};function fe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=Ye.autoReset,N=Ge.enabled,B=Ge.autoUpdate,z=Ge.needsUpdate,O=Ge.type;At(),Ye.autoReset=b,Ge.enabled=N,Ge.autoUpdate=B,Ge.needsUpdate=z,Ge.type=O}function K(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ie(b){const N=b.target;N.removeEventListener("dispose",ie),Ue(N)}function Ue(b){Qe(b),Ne.remove(b)}function Qe(b){const N=Ne.get(b).programs;N!==void 0&&(N.forEach(function(B){Z.releaseProgram(B)}),b.isShaderMaterial&&Z.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,B,z,O,ne){N===null&&(N=ke);const de=O.isMesh&&O.matrixWorld.determinant()<0,me=oS(b,N,B,z,O);ye.setMaterial(z,de);let _e=B.index,Ce=1;if(z.wireframe===!0){if(_e=H.getWireframeAttribute(B),_e===void 0)return;Ce=2}const Ie=B.drawRange,Ae=B.attributes.position;let tt=Ie.start*Ce,bt=(Ie.start+Ie.count)*Ce;ne!==null&&(tt=Math.max(tt,ne.start*Ce),bt=Math.min(bt,(ne.start+ne.count)*Ce)),_e!==null?(tt=Math.max(tt,0),bt=Math.min(bt,_e.count)):Ae!=null&&(tt=Math.max(tt,0),bt=Math.min(bt,Ae.count));const wt=bt-tt;if(wt<0||wt===1/0)return;Ve.setup(O,z,me,B,_e);let mn,ot=$e;if(_e!==null&&(mn=M.get(_e),ot=De,ot.setIndex(mn)),O.isMesh)z.wireframe===!0?(ye.setLineWidth(z.wireframeLinewidth*Ke()),ot.setMode(U.LINES)):ot.setMode(U.TRIANGLES);else if(O.isLine){let Se=z.linewidth;Se===void 0&&(Se=1),ye.setLineWidth(Se*Ke()),O.isLineSegments?ot.setMode(U.LINES):O.isLineLoop?ot.setMode(U.LINE_LOOP):ot.setMode(U.LINE_STRIP)}else O.isPoints?ot.setMode(U.POINTS):O.isSprite&&ot.setMode(U.TRIANGLES);if(O.isBatchedMesh)O._multiDrawInstances!==null?ot.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances):ot.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)ot.renderInstances(tt,wt,O.count);else if(B.isInstancedBufferGeometry){const Se=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Jt=Math.min(B.instanceCount,Se);ot.renderInstances(tt,wt,Jt)}else ot.render(tt,wt)};function Rt(b,N,B){b.transparent===!0&&b.side===yn&&b.forceSinglePass===!1?(b.side=pn,b.needsUpdate=!0,_l(b,N,B),b.side=Ki,b.needsUpdate=!0,_l(b,N,B),b.side=yn):_l(b,N,B)}this.compile=function(b,N,B=null){B===null&&(B=b),m=ae.get(B),m.init(N),x.push(m),B.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),b!==B&&b.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const z=new Set;return b.traverse(function(O){const ne=O.material;if(ne)if(Array.isArray(ne))for(let de=0;de<ne.length;de++){const me=ne[de];Rt(me,B,O),z.add(me)}else Rt(ne,B,O),z.add(ne)}),x.pop(),m=null,z},this.compileAsync=function(b,N,B=null){const z=this.compile(b,N,B);return new Promise(O=>{function ne(){if(z.forEach(function(de){Ne.get(de).currentProgram.isReady()&&z.delete(de)}),z.size===0){O(b);return}setTimeout(ne,10)}Re.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Bt=null;function ut(b){Bt&&Bt(b)}function si(){kr.stop()}function ai(){kr.start()}const kr=new Fv;kr.setAnimationLoop(ut),typeof self<"u"&&kr.setContext(self),this.setAnimationLoop=function(b){Bt=b,D.setAnimationLoop(b),b===null?kr.stop():kr.start()},D.addEventListener("sessionstart",si),D.addEventListener("sessionend",ai),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(N),N=D.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,N,R),m=ae.get(b,x.length),m.init(N),x.push(m),pe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ze.setFromProjectionMatrix(pe),Q=this.localClippingEnabled,Y=le.init(this.clippingPlanes,Q),_=we.get(b,h.length),_.init(),h.push(_),D.enabled===!0&&D.isPresenting===!0){const ne=v.xr.getDepthSensingMesh();ne!==null&&Cf(ne,N,-1/0,v.sortObjects)}Cf(b,N,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(X,te),Fe=D.enabled===!1||D.isPresenting===!1||D.hasDepthSensing()===!1,Fe&&ee.addToRenderList(_,b),this.info.render.frame++,Y===!0&&le.beginShadows();const B=m.state.shadowsArray;Ge.render(B,b,N),Y===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=_.opaque,O=_.transmissive;if(m.setupLights(),N.isArrayCamera){const ne=N.cameras;if(O.length>0)for(let de=0,me=ne.length;de<me;de++){const _e=ne[de];om(z,O,b,_e)}Fe&&ee.render(b);for(let de=0,me=ne.length;de<me;de++){const _e=ne[de];rm(_,b,_e,_e.viewport)}}else O.length>0&&om(z,O,b,N),Fe&&ee.render(b),rm(_,b,N);R!==null&&(Le.updateMultisampleRenderTarget(R),Le.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(v,b,N),Ve.resetDefaultState(),L=-1,w=null,x.pop(),x.length>0?(m=x[x.length-1],Y===!0&&le.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function Cf(b,N,B,z){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ze.intersectsSprite(b)){z&&re.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pe);const de=j.update(b),me=b.material;me.visible&&_.push(b,de,me,B,re.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ze.intersectsObject(b))){const de=j.update(b),me=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),re.copy(b.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),re.copy(de.boundingSphere.center)),re.applyMatrix4(b.matrixWorld).applyMatrix4(pe)),Array.isArray(me)){const _e=de.groups;for(let Ce=0,Ie=_e.length;Ce<Ie;Ce++){const Ae=_e[Ce],tt=me[Ae.materialIndex];tt&&tt.visible&&_.push(b,de,tt,B,re.z,Ae)}}else me.visible&&_.push(b,de,me,B,re.z,null)}}const ne=b.children;for(let de=0,me=ne.length;de<me;de++)Cf(ne[de],N,B,z)}function rm(b,N,B,z){const O=b.opaque,ne=b.transmissive,de=b.transparent;m.setupLightsView(B),Y===!0&&le.setGlobalState(v.clippingPlanes,B),z&&ye.viewport(y.copy(z)),O.length>0&&gl(O,N,B),ne.length>0&&gl(ne,N,B),de.length>0&&gl(de,N,B),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function om(b,N,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[z.id]===void 0&&(m.state.transmissionRenderTarget[z.id]=new _o(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float")?Vu:Ir,minFilter:Wi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const ne=m.state.transmissionRenderTarget[z.id],de=z.viewport||y;ne.setSize(de.z,de.w);const me=v.getRenderTarget();v.setRenderTarget(ne),v.getClearColor(k),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),Fe?ee.render(B):v.clear();const _e=v.toneMapping;v.toneMapping=Ar;const Ce=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),m.setupLightsView(z),Y===!0&&le.setGlobalState(v.clippingPlanes,z),gl(b,B,z),Le.updateMultisampleRenderTarget(ne),Le.updateRenderTargetMipmap(ne),Re.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Ae=0,tt=N.length;Ae<tt;Ae++){const bt=N[Ae],wt=bt.object,mn=bt.geometry,ot=bt.material,Se=bt.group;if(ot.side===yn&&wt.layers.test(z.layers)){const Jt=ot.side;ot.side=pn,ot.needsUpdate=!0,sm(wt,B,z,mn,ot,Se),ot.side=Jt,ot.needsUpdate=!0,Ie=!0}}Ie===!0&&(Le.updateMultisampleRenderTarget(ne),Le.updateRenderTargetMipmap(ne))}v.setRenderTarget(me),v.setClearColor(k,G),Ce!==void 0&&(z.viewport=Ce),v.toneMapping=_e}function gl(b,N,B){const z=N.isScene===!0?N.overrideMaterial:null;for(let O=0,ne=b.length;O<ne;O++){const de=b[O],me=de.object,_e=de.geometry,Ce=z===null?de.material:z,Ie=de.group;me.layers.test(B.layers)&&sm(me,N,B,_e,Ce,Ie)}}function sm(b,N,B,z,O,ne){b.onBeforeRender(v,N,B,z,O,ne),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(v,N,B,z,b,ne),O.transparent===!0&&O.side===yn&&O.forceSinglePass===!1?(O.side=pn,O.needsUpdate=!0,v.renderBufferDirect(B,N,z,O,b,ne),O.side=Ki,O.needsUpdate=!0,v.renderBufferDirect(B,N,z,O,b,ne),O.side=yn):v.renderBufferDirect(B,N,z,O,b,ne),b.onAfterRender(v,N,B,z,O,ne)}function _l(b,N,B){N.isScene!==!0&&(N=ke);const z=Ne.get(b),O=m.state.lights,ne=m.state.shadowsArray,de=O.state.version,me=Z.getParameters(b,O.state,ne,N,B),_e=Z.getProgramCacheKey(me);let Ce=z.programs;z.environment=b.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(b.isMeshStandardMaterial?P:pt).get(b.envMap||z.environment),z.envMapRotation=z.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Ce===void 0&&(b.addEventListener("dispose",ie),Ce=new Map,z.programs=Ce);let Ie=Ce.get(_e);if(Ie!==void 0){if(z.currentProgram===Ie&&z.lightsStateVersion===de)return lm(b,me),Ie}else me.uniforms=Z.getUniforms(b),b.onBuild(B,me,v),b.onBeforeCompile(me,v),Ie=Z.acquireProgram(me,_e),Ce.set(_e,Ie),z.uniforms=me.uniforms;const Ae=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ae.clippingPlanes=le.uniform),lm(b,me),z.needsLights=aS(b),z.lightsStateVersion=de,z.needsLights&&(Ae.ambientLightColor.value=O.state.ambient,Ae.lightProbe.value=O.state.probe,Ae.directionalLights.value=O.state.directional,Ae.directionalLightShadows.value=O.state.directionalShadow,Ae.spotLights.value=O.state.spot,Ae.spotLightShadows.value=O.state.spotShadow,Ae.rectAreaLights.value=O.state.rectArea,Ae.ltc_1.value=O.state.rectAreaLTC1,Ae.ltc_2.value=O.state.rectAreaLTC2,Ae.pointLights.value=O.state.point,Ae.pointLightShadows.value=O.state.pointShadow,Ae.hemisphereLights.value=O.state.hemi,Ae.directionalShadowMap.value=O.state.directionalShadowMap,Ae.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ae.spotShadowMap.value=O.state.spotShadowMap,Ae.spotLightMatrix.value=O.state.spotLightMatrix,Ae.spotLightMap.value=O.state.spotLightMap,Ae.pointShadowMap.value=O.state.pointShadowMap,Ae.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=Ie,z.uniformsList=null,Ie}function am(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=Tc.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function lm(b,N){const B=Ne.get(b);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function oS(b,N,B,z,O){N.isScene!==!0&&(N=ke),Le.resetTextureUnits();const ne=N.fog,de=z.isMeshStandardMaterial?N.environment:null,me=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Nr,_e=(z.isMeshStandardMaterial?P:pt).get(z.envMap||de),Ce=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ie=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ae=!!B.morphAttributes.position,tt=!!B.morphAttributes.normal,bt=!!B.morphAttributes.color;let wt=Ar;z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(wt=v.toneMapping);const mn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ot=mn!==void 0?mn.length:0,Se=Ne.get(z),Jt=m.state.lights;if(Y===!0&&(Q===!0||b!==w)){const An=b===w&&z.id===L;le.setState(z,b,An)}let ft=!1;z.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Jt.state.version||Se.outputColorSpace!==me||O.isBatchedMesh&&Se.batching===!1||!O.isBatchedMesh&&Se.batching===!0||O.isBatchedMesh&&Se.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Se.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Se.instancing===!1||!O.isInstancedMesh&&Se.instancing===!0||O.isSkinnedMesh&&Se.skinning===!1||!O.isSkinnedMesh&&Se.skinning===!0||O.isInstancedMesh&&Se.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Se.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Se.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Se.instancingMorph===!1&&O.morphTexture!==null||Se.envMap!==_e||z.fog===!0&&Se.fog!==ne||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==le.numPlanes||Se.numIntersection!==le.numIntersection)||Se.vertexAlphas!==Ce||Se.vertexTangents!==Ie||Se.morphTargets!==Ae||Se.morphNormals!==tt||Se.morphColors!==bt||Se.toneMapping!==wt||Se.morphTargetsCount!==ot)&&(ft=!0):(ft=!0,Se.__version=z.version);let bi=Se.currentProgram;ft===!0&&(bi=_l(z,N,O));let vl=!1,zr=!1,Pf=!1;const kt=bi.getUniforms(),Qi=Se.uniforms;if(ye.useProgram(bi.program)&&(vl=!0,zr=!0,Pf=!0),z.id!==L&&(L=z.id,zr=!0),vl||w!==b){kt.setValue(U,"projectionMatrix",b.projectionMatrix),kt.setValue(U,"viewMatrix",b.matrixWorldInverse);const An=kt.map.cameraPosition;An!==void 0&&An.setValue(U,re.setFromMatrixPosition(b.matrixWorld)),ct.logarithmicDepthBuffer&&kt.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&kt.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),w!==b&&(w=b,zr=!0,Pf=!0)}if(O.isSkinnedMesh){kt.setOptional(U,O,"bindMatrix"),kt.setOptional(U,O,"bindMatrixInverse");const An=O.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),kt.setValue(U,"boneTexture",An.boneTexture,Le))}O.isBatchedMesh&&(kt.setOptional(U,O,"batchingTexture"),kt.setValue(U,"batchingTexture",O._matricesTexture,Le),kt.setOptional(U,O,"batchingColorTexture"),O._colorsTexture!==null&&kt.setValue(U,"batchingColorTexture",O._colorsTexture,Le));const If=B.morphAttributes;if((If.position!==void 0||If.normal!==void 0||If.color!==void 0)&&ve.update(O,B,bi),(zr||Se.receiveShadow!==O.receiveShadow)&&(Se.receiveShadow=O.receiveShadow,kt.setValue(U,"receiveShadow",O.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Qi.envMap.value=_e,Qi.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&N.environment!==null&&(Qi.envMapIntensity.value=N.environmentIntensity),zr&&(kt.setValue(U,"toneMappingExposure",v.toneMappingExposure),Se.needsLights&&sS(Qi,Pf),ne&&z.fog===!0&&J.refreshFogUniforms(Qi,ne),J.refreshMaterialUniforms(Qi,z,$,V,m.state.transmissionRenderTarget[b.id]),Tc.upload(U,am(Se),Qi,Le)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Tc.upload(U,am(Se),Qi,Le),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&kt.setValue(U,"center",O.center),kt.setValue(U,"modelViewMatrix",O.modelViewMatrix),kt.setValue(U,"normalMatrix",O.normalMatrix),kt.setValue(U,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const An=z.uniformsGroups;for(let Lf=0,lS=An.length;Lf<lS;Lf++){const cm=An[Lf];je.update(cm,bi),je.bind(cm,bi)}}return bi}function sS(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function aS(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,N,B){Ne.get(b.texture).__webglTexture=N,Ne.get(b.depthTexture).__webglTexture=B;const z=Ne.get(b);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){const B=Ne.get(b);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,B=0){R=b,C=N,E=B;let z=!0,O=null,ne=!1,de=!1;if(b){const _e=Ne.get(b);_e.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(U.FRAMEBUFFER,null),z=!1):_e.__webglFramebuffer===void 0?Le.setupRenderTarget(b):_e.__hasExternalTextures&&Le.rebindTextures(b,Ne.get(b.texture).__webglTexture,Ne.get(b.depthTexture).__webglTexture);const Ce=b.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(de=!0);const Ie=Ne.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ie[N])?O=Ie[N][B]:O=Ie[N],ne=!0):b.samples>0&&Le.useMultisampledRTT(b)===!1?O=Ne.get(b).__webglMultisampledFramebuffer:Array.isArray(Ie)?O=Ie[B]:O=Ie,y.copy(b.viewport),I.copy(b.scissor),F=b.scissorTest}else y.copy(he).multiplyScalar($).floor(),I.copy(ge).multiplyScalar($).floor(),F=Xe;if(ye.bindFramebuffer(U.FRAMEBUFFER,O)&&z&&ye.drawBuffers(b,O),ye.viewport(y),ye.scissor(I),ye.setScissorTest(F),ne){const _e=Ne.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,_e.__webglTexture,B)}else if(de){const _e=Ne.get(b.texture),Ce=N||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,_e.__webglTexture,B||0,Ce)}L=-1},this.readRenderTargetPixels=function(b,N,B,z,O,ne,de){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Ne.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me){ye.bindFramebuffer(U.FRAMEBUFFER,me);try{const _e=b.texture,Ce=_e.format,Ie=_e.type;if(!ct.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-z&&B>=0&&B<=b.height-O&&U.readPixels(N,B,z,O,ce.convert(Ce),ce.convert(Ie),ne)}finally{const _e=R!==null?Ne.get(R).__webglFramebuffer:null;ye.bindFramebuffer(U.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(b,N,B,z,O,ne,de){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Ne.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me){ye.bindFramebuffer(U.FRAMEBUFFER,me);try{const _e=b.texture,Ce=_e.format,Ie=_e.type;if(!ct.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-z&&B>=0&&B<=b.height-O){const Ae=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ae),U.bufferData(U.PIXEL_PACK_BUFFER,ne.byteLength,U.STREAM_READ),U.readPixels(N,B,z,O,ce.convert(Ce),ce.convert(Ie),0),U.flush();const tt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);await qM(U,tt,4);try{U.bindBuffer(U.PIXEL_PACK_BUFFER,Ae),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ne)}finally{U.deleteBuffer(Ae),U.deleteSync(tt)}return ne}}finally{const _e=R!==null?Ne.get(R).__webglFramebuffer:null;ye.bindFramebuffer(U.FRAMEBUFFER,_e)}}},this.copyFramebufferToTexture=function(b,N=null,B=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);const z=Math.pow(2,-B),O=Math.floor(b.image.width*z),ne=Math.floor(b.image.height*z),de=N!==null?N.x:0,me=N!==null?N.y:0;Le.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,B,0,0,de,me,O,ne),ye.unbindTexture()},this.copyTextureToTexture=function(b,N,B=null,z=null,O=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,b=arguments[1],N=arguments[2],O=arguments[3]||0,B=null);let ne,de,me,_e,Ce,Ie;B!==null?(ne=B.max.x-B.min.x,de=B.max.y-B.min.y,me=B.min.x,_e=B.min.y):(ne=b.image.width,de=b.image.height,me=0,_e=0),z!==null?(Ce=z.x,Ie=z.y):(Ce=0,Ie=0);const Ae=ce.convert(N.format),tt=ce.convert(N.type);Le.setTexture2D(N,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);const bt=U.getParameter(U.UNPACK_ROW_LENGTH),wt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),mn=U.getParameter(U.UNPACK_SKIP_PIXELS),ot=U.getParameter(U.UNPACK_SKIP_ROWS),Se=U.getParameter(U.UNPACK_SKIP_IMAGES),Jt=b.isCompressedTexture?b.mipmaps[O]:b.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Jt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Jt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,me),U.pixelStorei(U.UNPACK_SKIP_ROWS,_e),b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,O,Ce,Ie,ne,de,Ae,tt,Jt.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,O,Ce,Ie,Jt.width,Jt.height,Ae,Jt.data):U.texSubImage2D(U.TEXTURE_2D,O,Ce,Ie,Ae,tt,Jt),U.pixelStorei(U.UNPACK_ROW_LENGTH,bt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,wt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,mn),U.pixelStorei(U.UNPACK_SKIP_ROWS,ot),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Se),O===0&&N.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(b,N,B=null,z=null,O=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,b=arguments[2],N=arguments[3],O=arguments[4]||0);let ne,de,me,_e,Ce,Ie,Ae,tt,bt;const wt=b.isCompressedTexture?b.mipmaps[O]:b.image;B!==null?(ne=B.max.x-B.min.x,de=B.max.y-B.min.y,me=B.max.z-B.min.z,_e=B.min.x,Ce=B.min.y,Ie=B.min.z):(ne=wt.width,de=wt.height,me=wt.depth,_e=0,Ce=0,Ie=0),z!==null?(Ae=z.x,tt=z.y,bt=z.z):(Ae=0,tt=0,bt=0);const mn=ce.convert(N.format),ot=ce.convert(N.type);let Se;if(N.isData3DTexture)Le.setTexture3D(N,0),Se=U.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)Le.setTexture2DArray(N,0),Se=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);const Jt=U.getParameter(U.UNPACK_ROW_LENGTH),ft=U.getParameter(U.UNPACK_IMAGE_HEIGHT),bi=U.getParameter(U.UNPACK_SKIP_PIXELS),vl=U.getParameter(U.UNPACK_SKIP_ROWS),zr=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,wt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,wt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,_e),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ce),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ie),b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Se,O,Ae,tt,bt,ne,de,me,mn,ot,wt.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(Se,O,Ae,tt,bt,ne,de,me,mn,wt.data):U.texSubImage3D(Se,O,Ae,tt,bt,ne,de,me,mn,ot,wt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Jt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ft),U.pixelStorei(U.UNPACK_SKIP_PIXELS,bi),U.pixelStorei(U.UNPACK_SKIP_ROWS,vl),U.pixelStorei(U.UNPACK_SKIP_IMAGES,zr),O===0&&N.generateMipmaps&&U.generateMipmap(Se),ye.unbindTexture()},this.initRenderTarget=function(b){Ne.get(b).__webglFramebuffer===void 0&&Le.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Le.setTextureCube(b,0):b.isData3DTexture?Le.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Le.setTexture2DArray(b,0):Le.setTexture2D(b,0),ye.unbindTexture()},this.resetState=function(){C=0,E=0,R=null,ye.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===qh?"display-p3":"srgb",n.unpackColorSpace=at.workingColorSpace===Wu?"display-p3":"srgb"}}class Qh{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Me(e),this.near=n,this.far=i}clone(){return new Qh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Wv extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class tA{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=rh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=qi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Kh("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qt=new A;class $c{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix4(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyNormalMatrix(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.transformDirection(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=st(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Qn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Qn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Qn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Qn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array),o=st(o,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)n.push(this.data.array[r+o])}return new nt(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $c(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)n.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Yu extends Fr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Vo;const na=new A,Wo=new A,Xo=new A,Yo=new Pe,ia=new Pe,Xv=new Mt,Gl=new A,ra=new A,Vl=new A,L0=new Pe,ud=new Pe,D0=new Pe;class sh extends Dt{constructor(e=new Yu){if(super(),this.isSprite=!0,this.type="Sprite",Vo===void 0){Vo=new Et;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new tA(n,5);Vo.setIndex([0,1,2,0,2,3]),Vo.setAttribute("position",new $c(i,3,0,!1)),Vo.setAttribute("uv",new $c(i,2,3,!1))}this.geometry=Vo,this.material=e,this.center=new Pe(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wo.setFromMatrixScale(this.matrixWorld),Xv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wo.multiplyScalar(-Xo.z);const i=this.material.rotation;let r,o;i!==0&&(o=Math.cos(i),r=Math.sin(i));const s=this.center;Wl(Gl.set(-.5,-.5,0),Xo,s,Wo,r,o),Wl(ra.set(.5,-.5,0),Xo,s,Wo,r,o),Wl(Vl.set(.5,.5,0),Xo,s,Wo,r,o),L0.set(0,0),ud.set(1,0),D0.set(1,1);let a=e.ray.intersectTriangle(Gl,ra,Vl,!1,na);if(a===null&&(Wl(ra.set(-.5,.5,0),Xo,s,Wo,r,o),ud.set(0,1),a=e.ray.intersectTriangle(Gl,Vl,ra,!1,na),a===null))return;const l=e.ray.origin.distanceTo(na);l<e.near||l>e.far||n.push({distance:l,point:na.clone(),uv:ei.getInterpolation(na,Gl,ra,Vl,L0,ud,D0,new Pe),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Wl(t,e,n,i,r,o){Yo.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(ia.x=o*Yo.x-r*Yo.y,ia.y=r*Yo.x+o*Yo.y):ia.copy(Yo),t.copy(e),t.x+=ia.x,t.y+=ia.y,t.applyMatrix4(Xv)}class ep extends Fr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Kc=new A,jc=new A,U0=new Mt,oa=new jh,Xl=new tl,fd=new A,N0=new A;class Yv extends Dt{constructor(e=new Et,n=new ep){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,o=n.count;r<o;r++)Kc.fromBufferAttribute(n,r-1),jc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Kc.distanceTo(jc);e.setAttribute("lineDistance",new Ct(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xl.copy(i.boundingSphere),Xl.applyMatrix4(r),Xl.radius+=o,e.ray.intersectsSphere(Xl)===!1)return;U0.copy(r).invert(),oa.copy(e.ray).applyMatrix4(U0);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,s.start),g=Math.min(u.count,s.start+s.count);for(let _=p,m=g-1;_<m;_+=c){const h=u.getX(_),x=u.getX(_+1),v=Yl(this,e,oa,l,h,x);v&&n.push(v)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),h=Yl(this,e,oa,l,_,m);h&&n.push(h)}}else{const p=Math.max(0,s.start),g=Math.min(d.count,s.start+s.count);for(let _=p,m=g-1;_<m;_+=c){const h=Yl(this,e,oa,l,_,_+1);h&&n.push(h)}if(this.isLineLoop){const _=Yl(this,e,oa,l,g-1,p);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Yl(t,e,n,i,r,o){const s=t.geometry.attributes.position;if(Kc.fromBufferAttribute(s,r),jc.fromBufferAttribute(s,o),n.distanceSqToSegment(Kc,jc,fd,N0)>i)return;fd.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(fd);if(!(l<e.near||l>e.far))return{distance:l,point:N0.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const F0=new A,O0=new A;class nA extends Yv{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,o=n.count;r<o;r+=2)F0.fromBufferAttribute(n,r),O0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+F0.distanceTo(O0);e.setAttribute("lineDistance",new Ct(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tp extends Fr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const B0=new Mt,ah=new jh,ql=new tl,$l=new A;class qv extends Dt{constructor(e=new Et,n=new tp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ql.copy(i.boundingSphere),ql.applyMatrix4(r),ql.radius+=o,e.ray.intersectsSphere(ql)===!1)return;B0.copy(r).invert(),ah.copy(e.ray).applyMatrix4(B0);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);$l.fromBufferAttribute(f,m),k0($l,m,l,r,e,n,this)}}else{const d=Math.max(0,s.start),p=Math.min(f.count,s.start+s.count);for(let g=d,_=p;g<_;g++)$l.fromBufferAttribute(f,g),k0($l,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function k0(t,e,n,i,r,o,s){const a=ah.distanceSqToPoint(t);if(a<n){const l=new A;ah.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:s})}}class qu extends ln{constructor(e,n,i,r,o,s,a,l,c){super(e,n,i,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $u extends Et{constructor(e=1,n=1,i=1,r=32,o=1,s=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),o=Math.floor(o);const u=[],f=[],d=[],p=[];let g=0;const _=[],m=i/2;let h=0;x(),s===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Ct(f,3)),this.setAttribute("normal",new Ct(d,3)),this.setAttribute("uv",new Ct(p,2));function x(){const S=new A,C=new A;let E=0;const R=(n-e)/i;for(let L=0;L<=o;L++){const w=[],y=L/o,I=y*(n-e)+e;for(let F=0;F<=r;F++){const k=F/r,G=k*l+a,W=Math.sin(G),V=Math.cos(G);C.x=I*W,C.y=-y*i+m,C.z=I*V,f.push(C.x,C.y,C.z),S.set(W,R,V).normalize(),d.push(S.x,S.y,S.z),p.push(k,1-y),w.push(g++)}_.push(w)}for(let L=0;L<r;L++)for(let w=0;w<o;w++){const y=_[w][L],I=_[w+1][L],F=_[w+1][L+1],k=_[w][L+1];u.push(y,I,k),u.push(I,F,k),E+=6}c.addGroup(h,E,0),h+=E}function v(S){const C=g,E=new Pe,R=new A;let L=0;const w=S===!0?e:n,y=S===!0?1:-1;for(let F=1;F<=r;F++)f.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),g++;const I=g;for(let F=0;F<=r;F++){const G=F/r*l+a,W=Math.cos(G),V=Math.sin(G);R.x=w*V,R.y=m*y,R.z=w*W,f.push(R.x,R.y,R.z),d.push(0,y,0),E.x=W*.5+.5,E.y=V*.5*y+.5,p.push(E.x,E.y),g++}for(let F=0;F<r;F++){const k=C+F,G=I+F;S===!0?u.push(G,G+1,k):u.push(G+1,G,k),L+=3}c.addGroup(h,L,S===!0?1:2),h+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $u(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class np extends $u{constructor(e=1,n=1,i=32,r=1,o=!1,s=0,a=Math.PI*2){super(0,e,n,i,r,o,s,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:s,thetaLength:a}}static fromJSON(e){return new np(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ku extends Et{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const o=[],s=[];a(r),c(i),u(),this.setAttribute("position",new Ct(o,3)),this.setAttribute("normal",new Ct(o.slice(),3)),this.setAttribute("uv",new Ct(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new A,S=new A,C=new A;for(let E=0;E<n.length;E+=3)p(n[E+0],v),p(n[E+1],S),p(n[E+2],C),l(v,S,C,x)}function l(x,v,S,C){const E=C+1,R=[];for(let L=0;L<=E;L++){R[L]=[];const w=x.clone().lerp(S,L/E),y=v.clone().lerp(S,L/E),I=E-L;for(let F=0;F<=I;F++)F===0&&L===E?R[L][F]=w:R[L][F]=w.clone().lerp(y,F/I)}for(let L=0;L<E;L++)for(let w=0;w<2*(E-L)-1;w++){const y=Math.floor(w/2);w%2===0?(d(R[L][y+1]),d(R[L+1][y]),d(R[L][y])):(d(R[L][y+1]),d(R[L+1][y+1]),d(R[L+1][y]))}}function c(x){const v=new A;for(let S=0;S<o.length;S+=3)v.x=o[S+0],v.y=o[S+1],v.z=o[S+2],v.normalize().multiplyScalar(x),o[S+0]=v.x,o[S+1]=v.y,o[S+2]=v.z}function u(){const x=new A;for(let v=0;v<o.length;v+=3){x.x=o[v+0],x.y=o[v+1],x.z=o[v+2];const S=m(x)/2/Math.PI+.5,C=h(x)/Math.PI+.5;s.push(S,1-C)}g(),f()}function f(){for(let x=0;x<s.length;x+=6){const v=s[x+0],S=s[x+2],C=s[x+4],E=Math.max(v,S,C),R=Math.min(v,S,C);E>.9&&R<.1&&(v<.2&&(s[x+0]+=1),S<.2&&(s[x+2]+=1),C<.2&&(s[x+4]+=1))}}function d(x){o.push(x.x,x.y,x.z)}function p(x,v){const S=x*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function g(){const x=new A,v=new A,S=new A,C=new A,E=new Pe,R=new Pe,L=new Pe;for(let w=0,y=0;w<o.length;w+=9,y+=6){x.set(o[w+0],o[w+1],o[w+2]),v.set(o[w+3],o[w+4],o[w+5]),S.set(o[w+6],o[w+7],o[w+8]),E.set(s[y+0],s[y+1]),R.set(s[y+2],s[y+3]),L.set(s[y+4],s[y+5]),C.copy(x).add(v).add(S).divideScalar(3);const I=m(C);_(E,y+0,x,I),_(R,y+2,v,I),_(L,y+4,S,I)}}function _(x,v,S,C){C<0&&x.x===1&&(s[v]=x.x-1),S.x===0&&S.z===0&&(s[v]=C/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function h(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ku(e.vertices,e.indices,e.radius,e.details)}}class Zc extends Ku{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,s,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Zc(e.radius,e.detail)}}class ka extends Ku{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new ka(e.radius,e.detail)}}class ju extends Et{constructor(e=.5,n=1,i=32,r=1,o=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:o,thetaLength:s},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let f=e;const d=(n-e)/r,p=new A,g=new Pe;for(let _=0;_<=r;_++){for(let m=0;m<=i;m++){const h=o+m/i*s;p.x=f*Math.cos(h),p.y=f*Math.sin(h),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/n+1)/2,g.y=(p.y/n+1)/2,u.push(g.x,g.y)}f+=d}for(let _=0;_<r;_++){const m=_*(i+1);for(let h=0;h<i;h++){const x=h+m,v=x,S=x+i+1,C=x+i+2,E=x+1;a.push(v,S,E),a.push(S,C,E)}}this.setIndex(a),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(c,3)),this.setAttribute("uv",new Ct(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ju(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Lr extends Et{constructor(e=1,n=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+a,Math.PI);let c=0;const u=[],f=new A,d=new A,p=[],g=[],_=[],m=[];for(let h=0;h<=i;h++){const x=[],v=h/i;let S=0;h===0&&s===0?S=.5/n:h===i&&l===Math.PI&&(S=-.5/n);for(let C=0;C<=n;C++){const E=C/n;f.x=-e*Math.cos(r+E*o)*Math.sin(s+v*a),f.y=e*Math.cos(s+v*a),f.z=e*Math.sin(r+E*o)*Math.sin(s+v*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),m.push(E+S,1-v),x.push(c++)}u.push(x)}for(let h=0;h<i;h++)for(let x=0;x<n;x++){const v=u[h][x+1],S=u[h][x],C=u[h+1][x],E=u[h+1][x+1];(h!==0||s>0)&&p.push(v,S,E),(h!==i-1||l<Math.PI)&&p.push(S,C,E)}this.setIndex(p),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Si extends Fr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bv,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ip extends Dt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class iA extends ip{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const dd=new Mt,z0=new A,H0=new A;class rA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zh,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;z0.setFromMatrixPosition(e.matrixWorld),n.position.copy(z0),H0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(H0),n.updateMatrixWorld(),dd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(dd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class oA extends rA{constructor(){super(new Ov(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rp extends ip{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new oA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class $v extends ip{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wh);const oe=new Wv;oe.fog=new Qh(8900331,Kd*be*.6,Kd*be*1.1);const qe=new xn(zh,16/9,pS,mS),lh=new $v(16777215,.6);oe.add(lh);const is=new lt(new Zt(1.002,1.002,1.002),new Vn({color:0,wireframe:!0,transparent:!0,opacity:.5}));is.visible=!1;oe.add(is);const Zu=new lt(new Zt(1.01,1.01,1.01),new Vn({color:0,transparent:!0,opacity:0,depthWrite:!1}));Zu.visible=!1;oe.add(Zu);const rs=new nA(new Et,new ep({color:0,transparent:!0,opacity:.5}));rs.visible=!1;oe.add(rs);const Oi=new lt(new Et,new Vn({color:16777215,transparent:!0,opacity:0,depthWrite:!1,side:yn,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));Oi.visible=!1;oe.add(Oi);let gt=null;function sA(t){gt&&(gt.setPixelRatio(Math.min(window.devicePixelRatio,t)),gt.setSize(window.innerWidth,window.innerHeight))}function aA(t){qe.far=t,qe.updateProjectionMatrix()}function lA(t){return gt=new eA({canvas:t,antialias:hS,powerPreference:"high-performance",stencil:!1,depth:!0}),gt.setPixelRatio(Math.min(window.devicePixelRatio,dS)),gt.setClearColor(8900331),G0(),window.addEventListener("resize",G0),gt}function G0(){qe.aspect=window.innerWidth/window.innerHeight,qe.updateProjectionMatrix(),gt.setSize(window.innerWidth,window.innerHeight)}function cA(){gt.render(oe,qe)}const Kv="blocksGraphics",il="potato",rl="nextlevel",Ju={[il]:{label:"Potato",blurb:"Flat colours, no lighting. Fastest.",maxPixelRatio:1.5,textured:!1,lit:!1,shadows:!1,ambientOcclusion:!1,shadedWater:!1},[rl]:{label:"Next Level",blurb:"Textures, sunlight, shadows, ambient occlusion, shaded water.",maxPixelRatio:1.5,textured:!0,lit:!0,shadows:!0,ambientOcclusion:!0,shadedWater:!0}};let _i=il;const op=[];function jv(){return _i}function uA(){return Ju[_i]}function Zv(){return _i===rl}function V0(){return _i===rl}function Jv(t){op.push(t)}function W0(t){if(!(!Ju[t]||t===_i)){_i=t;try{localStorage.setItem(Kv,t)}catch{}for(const e of op)e(_i)}}function fA(){let t=null;try{t=localStorage.getItem(Kv)}catch{}_i=Ju[t]?t:il;for(const n of op)n(_i);return _i}const Jc=Kd,Qv="blocksRenderDistance";let gs=Jc;const sp=[];function Mo(){return gs}function X0(t){sp.push(t)}function ex(t){return Math.max(Jc,Math.min(ov,Math.round(Number(t)||Jc)))}function Y0(t){const e=ex(t);if(e!==gs){gs=e;try{localStorage.setItem(Qv,String(e))}catch{}for(const n of sp)n(gs)}}function dA(){let t=null;try{t=localStorage.getItem(Qv)}catch{}gs=t!==null?ex(t):Jc;for(const e of sp)e(gs)}const tx="blocksDayLength",hA=1,pA=60,ap=10;let _s=ap;const lp=[];function cp(){return _s}function mA(t){lp.push(t)}function nx(t){return Math.max(hA,Math.min(pA,Math.round(Number(t)||ap)))}function q0(t){const e=nx(t);if(e!==_s){_s=e;try{localStorage.setItem(tx,String(e))}catch{}for(const n of lp)n(_s)}}function gA(){let t=null;try{t=localStorage.getItem(tx)}catch{}_s=t!==null?nx(t):ap;for(const e of lp)e(_s)}const Qu=44,$0=1024,Ac=90,Nt=new rp(16773840,2.2);Nt.castShadow=!0;Nt.shadow.mapSize.set($0,$0);Nt.shadow.camera.left=-Qu;Nt.shadow.camera.right=Qu;Nt.shadow.camera.top=Qu;Nt.shadow.camera.bottom=-Qu;Nt.shadow.camera.near=1;Nt.shadow.camera.far=Ac*2.2;Nt.shadow.bias=-.0012;Nt.shadow.normalBias=.06;const ch=new iA(12114175,6968640,.55);let uh=!1;function _A(t){t!==uh&&(uh=t,t?(oe.add(Nt),oe.add(Nt.target),oe.add(ch)):(oe.remove(Nt),oe.remove(Nt.target),oe.remove(ch)),gt&&(gt.shadowMap.enabled=t,gt.shadowMap.type=Xh,gt.shadowMap.needsUpdate=!0))}function vA(t,e,n,i){if(!uh)return;Nt.target.position.set(t.x,t.y,t.z),Nt.target.updateMatrixWorld(),Nt.position.set(t.x+e.x*Ac,t.y+e.y*Ac,t.z+e.z*Ac),Nt.color.copy(n),Nt.intensity=i;const r=.12,o=.25;ch.intensity=r+Math.max(0,e.y)*o}let za=null;function xA(t){za=t}function hr(){return za!==null&&document.pointerLockElement===za}function ef(){if(!za)return;const t=za.requestPointerLock();t&&typeof t.catch=="function"&&t.catch(()=>{})}const un={pistol:{label:"Pistol",id:100,rarity:"Common",worldSpawn:!0,kind:"hitscan",auto:!1,pellets:1,damage:18,fireRate:3,range:45,spread:.01,ammo:24,color:10133670},shotgun:{label:"Shotgun",id:101,rarity:"Uncommon",mobDrop:!0,kind:"hitscan",auto:!1,pellets:8,damage:9,fireRate:1.1,range:16,spread:.14,ammo:16,color:7031339},chaingun:{label:"Chaingun",id:102,rarity:"Rare",mobDrop:!0,kind:"hitscan",auto:!0,pellets:1,damage:7,fireRate:12,range:50,spread:.05,ammo:150,color:13395456},sniper:{label:"Sniper Rifle",id:105,rarity:"Rare",mobDrop:!0,kind:"hitscan",auto:!1,pellets:1,damage:40,fireRate:.8,range:140,spread:.0015,ammo:5,color:3621167,scoped:!0},rocket:{label:"Rocket Launcher",id:103,rarity:"Very Rare",mobDrop:!0,kind:"projectile",auto:!1,damage:0,fireRate:.9,range:90,ammo:6,speed:26,blastRadius:6,blastDamage:65,craterRadius:3.5,color:3815994},nuke:{label:"Nuclear Bomb",id:104,rarity:"Ultra Rare",mobDrop:!0,kind:"projectile",auto:!1,damage:0,fireRate:.15,range:120,ammo:1,speed:18,blastRadius:28,blastDamage:500,craterRadius:15,color:10145074,glow:!0}};function yA(t){return t.kind==="projectile"?t.blastDamage*(1+t.blastRadius/6):t.damage*(t.pellets||1)*Math.max(1,t.fireRate/3)}function K0(t){return 100/yA(t)}const SA={head:3,torso:1,arm:.5,leg:.5};function MA(t,e){return Math.round(t*(SA[e]??1))}Object.keys(un).filter(t=>un[t].worldSpawn);const EA=Object.keys(un).filter(t=>un[t].mobDrop);function bA(t){const e=t.reduce((i,r)=>i+K0(un[r]),0);let n=Math.random()*e;for(const i of t)if(n-=K0(un[i]),n<=0)return i;return t[t.length-1]}function wA(){return bA(EA)}const ri={hangglider:{id:200,label:"Hangglider",blurb:"No engine. Launch from high ground and ride the glide down.",color:14205050,mode:"fly",category:"Flying Vehicles",thrust:0,maxSpeed:16,lift:.88,sink:3.4,pitchRate:1.5,rollRate:2.2,yawRate:.8,stallSpeed:5,drag:.22,grip:2.4,chase:5.5},jetpack:{id:201,label:"Jetpack",blurb:"Hovers and climbs. Slow, but it goes straight up.",color:12154671,mode:"fly",category:"Flying Vehicles",thrust:30,maxSpeed:22,lift:.35,sink:5.5,pitchRate:1.8,rollRate:2.4,yawRate:1.8,stallSpeed:0,drag:.9,grip:.3,chase:5,hover:!0},plane:{id:202,label:"Small Plane",blurb:"Proper wings. Needs speed to stay up, rewards it with range.",color:13095644,mode:"fly",category:"Flying Vehicles",thrust:34,maxSpeed:46,lift:1,sink:4.2,pitchRate:1.5,rollRate:3,yawRate:1,stallSpeed:12,drag:.3,grip:2.8,chase:10},jetfighter:{id:203,label:"Jet Fighter",blurb:"Frighteningly quick and rolls like a barrel. Bring runway.",color:8358809,mode:"fly",category:"Flying Vehicles",thrust:78,maxSpeed:95,lift:1.05,sink:5,pitchRate:1.9,rollRate:4.2,yawRate:1.1,stallSpeed:20,drag:.24,grip:3.4,chase:14},rocket:{id:220,label:"Cheap Rocket",blurb:"Fly it up, off the ground and out past the sky — no wings, no wait. Basic, but it flies.",color:14342872,mode:"rocket",category:"Space",thrust:40,maxSpeed:60,lift:.9,sink:4,pitchRate:1.6,rollRate:2.4,yawRate:1.2,stallSpeed:0,drag:.12,grip:1,chase:9},starcruiser:{id:221,label:"Star Cruiser",blurb:"Faster and tougher than the Cheap Rocket, with a hyperspeed drive that locks onto a body and flies you there.",color:9418982,mode:"rocket",category:"Space",thrust:70,maxSpeed:130,lift:.9,sink:4,pitchRate:1.8,rollRate:2.8,yawRate:1.4,stallSpeed:0,drag:.1,grip:1.1,chase:12,hyperspeed:!0,hyperspeedSpeed:900,hyperspeedTurnRate:2.5,approachDistance:300},dinghy:{id:210,label:"Inflatable Dinghy",blurb:"A paddle and a prayer. Better than swimming, barely.",color:14080732,mode:"boat",category:"Boats",thrust:5,maxSpeed:7,turnRate:1.8,chase:4},speedboat:{id:211,label:"Speedboat",blurb:"An outboard motor turns a hull into something worth racing.",color:15133163,mode:"boat",category:"Boats",thrust:16,maxSpeed:22,turnRate:2.2,chase:6},yacht:{id:212,label:"Yacht",blurb:"A cabin, a deck, and enough hull that the wake barely rocks you.",color:15921902,mode:"boat",category:"Boats",thrust:20,maxSpeed:30,turnRate:1.3,chase:9.5},superyacht:{id:213,label:"Super Yacht",blurb:"Decks stacked on decks. The fastest thing on the water.",color:16447208,mode:"boat",category:"Boats",thrust:26,maxSpeed:40,turnRate:.9,chase:14}},tf={hangglider:[rn,rn,rn,rn,vt,rn,null,vt,null],jetpack:[xe,null,xe,xe,xe,xe,xe,Oe,xe],plane:[null,xe,null,xe,Be,xe,Be,xe,Be],jetfighter:[null,xt,null,Be,xt,Be,Be,xt,Be],rocket:[null,xt,null,xt,Be,xt,xt,Be,xt],starcruiser:[ao,xt,ao,xt,ao,xt,Be,xt,Be],dinghy:[null,vt,null,rn,rn,rn,null,vt,null],speedboat:[null,xe,null,xe,vt,xe,xe,xe,xe],yacht:[Be,null,Be,Be,Be,Be,xe,xe,xe],superyacht:[xt,Be,xt,Be,xt,Be,Be,Be,Be]};function ix(t){return{id:ri[t].id,kind:"vehicle",vehicleKey:t,count:1}}const Hn={spade:{id:300,label:"Spade",blurb:"Digs earth quickly. Everything else, slowly.",tier:"hand",color:9278619,category:"Hand Tools",categories:[tn],speedMul:6,radius:0,meleeDamage:8},axe:{id:301,label:"Axe",blurb:"Fells wood quickly. A decent weapon too.",tier:"hand",color:10133670,category:"Hand Tools",categories:[gr],speedMul:6,radius:0,meleeDamage:12},hammer:{id:302,label:"Hammer",blurb:"Breaks stone quickly.",tier:"hand",color:7239036,category:"Hand Tools",categories:[$n],speedMul:5,radius:0,meleeDamage:14},pickaxe:{id:303,label:"Pickaxe",blurb:"The only hand tool that can touch minerals at any speed.",tier:"hand",color:8028037,category:"Hand Tools",categories:[fn,$n],speedMul:4,radius:0,meleeDamage:10},electricSpade:{id:310,label:"Electric Spade",blurb:"A battery pack and a motor turn digging into button-holding.",tier:"machine",color:14725692,category:"Digging Machinery",categories:[tn],speedMul:12,radius:0,meleeDamage:12},miniDigger:{id:311,label:"Mini Digger",blurb:"A one-person digger. Clears a bite of earth at a time.",tier:"machine",color:15902491,category:"Digging Machinery",categories:[tn],speedMul:20,radius:1,meleeDamage:24},excavator:{id:312,label:"Excavator",blurb:"Full-size earthmoving. The bucket eats whole banks of soil.",tier:"machine",color:16756992,category:"Digging Machinery",categories:[tn],speedMul:35,radius:2,meleeDamage:40},earthMover:{id:313,label:"Earth Mover",blurb:"The biggest thing that digs. Terrain rearranges around it.",tier:"machine",color:13400576,category:"Digging Machinery",categories:[tn],speedMul:60,radius:3,meleeDamage:60},chainsaw:{id:320,label:"Chainsaw",blurb:"Handheld, loud, and much faster through a trunk than an axe.",tier:"machine",color:14046239,category:"Forestry Machinery",categories:[gr,xa],speedMul:10,radius:0,meleeDamage:22},fellingMachine:{id:321,label:"Tree Feller",blurb:"A small tracked machine built to take a tree apart fast.",tier:"machine",color:13056543,category:"Forestry Machinery",categories:[gr,xa],speedMul:18,radius:1,meleeDamage:34},fellingHarvester:{id:322,label:"Forest Harvester",blurb:"Clears whole stands of trees, canopy and all, at once.",tier:"machine",color:10496532,category:"Forestry Machinery",categories:[gr,xa],speedMul:30,radius:2,meleeDamage:50},handDrill:{id:330,label:"Hand Drill",blurb:"A powered drill bit. Slow going, but faster than a hammer.",tier:"machine",color:5925754,category:"Drilling Machinery",categories:[$n,fn],speedMul:8,radius:0,meleeDamage:12},pneumaticDrill:{id:331,label:"Pneumatic Drill",blurb:"Compressed air behind the bit. Real quarry work.",tier:"machine",color:4150630,category:"Drilling Machinery",categories:[$n,fn],speedMul:14,radius:0,meleeDamage:20},rockDigger:{id:332,label:"Rock-Breaker Digger",blurb:"A mini digger with a rock-breaker attachment on the arm.",tier:"machine",color:3099486,category:"Drilling Machinery",categories:[$n,fn],speedMul:22,radius:1,meleeDamage:36},rockExcavator:{id:333,label:"Rock-Breaker Excavator",blurb:"Full-size excavator, same attachment, much bigger bite.",tier:"machine",color:2112074,category:"Drilling Machinery",categories:[$n,fn],speedMul:35,radius:2,meleeDamage:54},rockDestroyer:{id:334,label:"Rock Destroyer",blurb:"The end of the line. A mineral seam does not survive this.",tier:"machine",color:1189430,category:"Drilling Machinery",categories:[$n,fn],speedMul:55,radius:3,meleeDamage:80}},nf={spade:[null,Oe,null,null,Oe,null,null,vt,null],axe:[Oe,Oe,null,Oe,vt,null,null,vt,null],hammer:[Oe,Oe,null,Oe,Oe,null,null,vt,null],pickaxe:[Oe,Oe,Oe,null,vt,null,null,vt,null],electricSpade:[null,xe,null,null,xe,null,null,Oe,null],miniDigger:[xe,xe,xe,null,Oe,null,null,Oe,null],excavator:[xe,Be,xe,xe,Oe,xe,null,Oe,null],earthMover:[Be,xe,Be,xe,Oe,xe,Be,Oe,Be],chainsaw:[xe,xe,null,vt,xe,null,null,vt,null],fellingMachine:[xe,xe,xe,vt,xe,vt,null,vt,null],fellingHarvester:[Be,xe,Be,vt,xe,vt,vt,Oe,vt],handDrill:[null,xe,null,xe,Oe,xe,null,Oe,null],pneumaticDrill:[xe,Oe,xe,xe,Oe,xe,null,Oe,null],rockDigger:[xe,xe,xe,Oe,Be,Oe,null,Oe,null],rockExcavator:[Be,xe,Be,Oe,Be,Oe,Be,Oe,Be],rockDestroyer:[xt,Be,xt,Be,xt,Be,xt,Oe,xt]};function rx(t){return{id:Hn[t].id,kind:"tool",toolKey:t,count:1}}const Qc=64,j0=new Map,ox=t=>"#"+t.toString(16).padStart(6,"0");function hn(t,e){const n=Math.max(0,Math.min(255,(t>>16&255)+e)),i=Math.max(0,Math.min(255,(t>>8&255)+e)),r=Math.max(0,Math.min(255,(t&255)+e));return`rgb(${n},${i},${r})`}function TA(){const t=document.createElement("canvas");t.width=t.height=Qc;const e=t.getContext("2d");return e.lineJoin="round",e.lineCap="round",{canvas:t,ctx:e}}function it(t,e,n){t.beginPath(),t.moveTo(e[0][0],e[0][1]);for(let i=1;i<e.length;i++)t.lineTo(e[i][0],e[i][1]);t.closePath(),t.fillStyle=n,t.fill()}function AA(t,e){const n=Kt[e]||Kt[3],i=Qc/2,r=8,o=15,s=22,a=20;it(t,[[i,r],[i+s,r+o],[i,r+o*2],[i-s,r+o]],ox(n.top)),it(t,[[i-s,r+o],[i,r+o*2],[i,r+o*2+a],[i-s,r+o+a]],hn(n.side,-18)),it(t,[[i+s,r+o],[i,r+o*2],[i,r+o*2+a],[i+s,r+o+a]],hn(n.side,-46))}function RA(t){t.fillStyle="#8d949b",t.fillRect(14,22,34,9),t.fillStyle="#6e757c",t.fillRect(42,25,10,4),it(t,[[18,31],[30,31],[26,48],[16,48]],"#4a4f55"),t.strokeStyle="#3a3f45",t.lineWidth=2.5,t.beginPath(),t.arc(33,34,6,.1*Math.PI,1*Math.PI),t.stroke()}function CA(t){t.save(),t.translate(32,32),t.rotate(-.22),t.fillStyle="#5b6066",t.fillRect(-6,-7,34,5),t.fillRect(-6,-1,34,5),t.fillStyle="#8a5a2b",t.fillRect(-26,-6,21,11),t.fillStyle="#6b4420",t.fillRect(2,5,13,6),t.restore()}function PA(t){t.fillStyle="#3f4348",t.fillRect(8,24,22,16),t.fillStyle="#cc6600";for(const e of[23,29,35])t.fillRect(30,e,24,5);t.fillStyle="#2a2d31",t.fillRect(52,22,5,20),t.fillRect(12,40,8,12)}function IA(t){t.save(),t.translate(32,32),t.rotate(-.18),t.fillStyle="#43484d",t.fillRect(-24,-8,46,15),t.fillStyle="#2c3034",t.fillRect(-27,-10,6,19),t.fillStyle="#b5352c",it(t,[[22,-8],[32,-1],[22,7]],"#b5352c"),t.fillStyle="#33373b",t.fillRect(-8,7,9,10),t.restore()}function LA(t){const e=t.createRadialGradient(32,30,2,32,30,26);e.addColorStop(0,"rgba(180,255,80,.85)"),e.addColorStop(1,"rgba(180,255,80,0)"),t.fillStyle=e,t.fillRect(0,0,Qc,Qc),t.fillStyle="#9acd32",t.beginPath(),t.ellipse(32,30,11,15,0,0,Math.PI*2),t.fill(),t.fillStyle="#7fae22",it(t,[[24,40],[40,40],[36,52],[28,52]],"#7fae22"),t.fillStyle="#e9ffbe",t.beginPath(),t.ellipse(28,25,3.5,5,-.3,0,Math.PI*2),t.fill()}function DA(t){it(t,[[32,14],[58,34],[32,30],[6,34]],"#e4cf8c"),it(t,[[32,30],[42,40],[32,38],[22,40]],"#cbb26a"),t.strokeStyle="#6b5330",t.lineWidth=2,t.beginPath(),t.moveTo(32,30),t.lineTo(32,50),t.stroke(),t.beginPath(),t.moveTo(22,50),t.lineTo(42,50),t.stroke()}function UA(t){t.fillStyle="#7a4a1c",t.fillRect(24,16,16,26),t.fillStyle="#b9772f",t.fillRect(13,14,10,30),t.fillRect(41,14,10,30),t.fillStyle="#4a4f55",t.fillRect(14,44,8,6),t.fillRect(42,44,8,6),it(t,[[15,50],[21,50],[18,60]],"#ff9a3c"),it(t,[[43,50],[49,50],[46,60]],"#ff9a3c")}function NA(t){t.fillStyle="#c7d2dc",it(t,[[32,8],[37,22],[37,46],[27,46],[27,22]],"#c7d2dc"),t.fillStyle="#a9b6c4",t.fillRect(4,26,56,7),t.fillRect(18,46,28,5),t.fillStyle="#2f3b47",t.fillRect(28,16,8,8),t.fillStyle="#8b6a3a",t.fillRect(29,4,6,4)}function FA(t){t.fillStyle="#7f8b99",it(t,[[32,3],[38,24],[38,48],[26,48],[26,24]],"#7f8b99"),t.fillStyle="#6b7684",it(t,[[26,30],[4,50],[26,46]],"#6b7684"),it(t,[[38,30],[60,50],[38,46]],"#6b7684"),t.fillStyle="#24303c",t.fillRect(29,13,6,9),t.fillStyle="#ff8a3a",t.fillRect(27,48,4,7),t.fillRect(33,48,4,7)}function rf(t,e,n,{cabin:i=0,mast:r=!1}={}){t.save(),t.translate(32,38),t.scale(n,n),it(t,[[-24,6],[-14,-8],[16,-8],[24,6],[14,14],[-14,14]],e),it(t,[[-24,6],[24,6],[14,14],[-14,14]],hn(e,-35)),i>0&&(t.fillStyle="#e9ece6",t.fillRect(-11,-8-i,22,i)),r&&(t.strokeStyle="#8d949b",t.lineWidth=2,t.beginPath(),t.moveTo(4,-8-i),t.lineTo(4,-8-i-14),t.stroke()),t.restore()}function OA(t){rf(t,"#d6dadc",.6),t.strokeStyle="#6b5330",t.lineWidth=3,t.beginPath(),t.moveTo(40,24),t.lineTo(54,44),t.stroke()}function BA(t){rf(t,"#e6e9eb",.85),t.fillStyle="#2f3b47",t.fillRect(24,20,4,12)}function kA(t){rf(t,"#f2f2ee",1,{cabin:12,mast:!0})}function zA(t){rf(t,"#faf6e8",1.15,{cabin:20,mast:!0})}function HA(t){t.fillStyle="#dadad8",t.fillRect(26,20,12,30),t.fillStyle="#b5352c",it(t,[[26,20],[32,6],[38,20]],"#b5352c"),t.fillStyle="#8f9497",it(t,[[26,40],[18,56],[26,50]],"#8f9497"),it(t,[[38,40],[46,56],[38,50]],"#8f9497"),t.fillStyle="#2f3b47",t.fillRect(28,25,8,8),it(t,[[27,50],[37,50],[32,62]],"#ff9a3c")}function GA(t){t.fillStyle="#9aa6b0",t.fillRect(22,16,20,34),t.fillStyle="#c9d3db",it(t,[[22,16],[32,4],[42,16]],"#c9d3db"),t.fillStyle="#5ec8ff",t.fillRect(20,27,24,5),t.fillStyle="#2f3b47",t.fillRect(27,19,10,7),t.fillStyle="#7f8b99",t.fillRect(14,38,8,16),t.fillRect(42,38,8,16),it(t,[[13,54],[23,54],[18,62]],"#ff9a3c"),it(t,[[41,54],[51,54],[46,62]],"#ff9a3c")}const VA={hangglider:DA,jetpack:UA,plane:NA,jetfighter:FA,dinghy:OA,speedboat:BA,yacht:kA,superyacht:zA,rocket:HA,starcruiser:GA};function sx(t){t.fillStyle="#7a4a1c",t.fillRect(29,8,6,30),t.fillStyle="#3a3f45",t.fillRect(24,34,16,6),t.fillStyle="#aeb4ba",it(t,[[20,40],[44,40],[40,58],[24,58]],"#aeb4ba"),t.fillStyle="#8d949b",it(t,[[24,58],[40,58],[32,62]],"#8d949b")}function WA(t){t.fillStyle="#6b4420",t.fillRect(29,10,6,44),t.fillStyle="#9aa0a6",it(t,[[32,10],[54,18],[50,32],[32,26]],"#9aa0a6"),t.fillStyle="#7a7f85",it(t,[[50,32],[54,18],[58,22],[55,34]],"#7a7f85")}function XA(t){t.fillStyle="#6e4a28",t.fillRect(29,22,6,34),t.fillStyle="#6e757c",t.fillRect(16,10,32,16),t.fillStyle="#565c62",t.fillRect(16,10,32,5)}function YA(t){t.fillStyle="#6e4a28",t.fillRect(29,16,6,40),t.fillStyle="#7a7f85",it(t,[[32,20],[10,14],[16,8],[32,14]],"#7a7f85"),it(t,[[32,20],[54,14],[48,8],[32,14]],"#7a7f85")}function qA(t){sx(t),t.fillStyle="#e0b23c",t.fillRect(23,10,18,12),t.strokeStyle="#8a6a1c",t.lineWidth=2,t.beginPath(),t.moveTo(32,22),t.lineTo(32,34),t.stroke()}function $A(t){t.fillStyle="#d6541f",t.fillRect(12,30,22,18),t.fillStyle="#3a3f45",t.fillRect(30,34,28,6),t.fillStyle="#8d949b";for(let e=32;e<56;e+=5)t.fillRect(e,33,2,8);t.fillStyle="#a83c14",t.fillRect(16,20,8,12)}function KA(t){t.fillStyle="#5a6b7a",t.fillRect(14,26,26,16),t.fillStyle="#3f4a55",t.fillRect(40,30,18,8),t.fillStyle="#8d949b",t.fillRect(56,31,6,6),t.fillStyle="#3a3f45",t.fillRect(18,40,8,16)}function jA(t){t.fillStyle="#3f5566",t.fillRect(20,12,14,32),t.fillStyle="#2f4250",t.fillRect(16,10,22,8),t.fillStyle="#8d949b",t.fillRect(24,44,6,16)}function hd(t,e,n){const i=n;t.save(),t.translate(32,40),t.scale(i,i),t.fillStyle="#3a3f45",t.fillRect(-20,6,40,10),t.fillStyle=hn(e,-10),t.fillRect(-14,-8,28,16),t.fillStyle=e,t.fillRect(-14,-8,28,6),t.strokeStyle=hn(e,-30),t.lineWidth=5,t.beginPath(),t.moveTo(4,-6),t.lineTo(20,-22),t.lineTo(28,-12),t.stroke(),t.fillStyle=hn(e,-20),it(t,[[26,-14],[34,-8],[28,-2],[22,-8]],hn(e,-20)),t.restore()}function Z0(t,e,n){const i=n;t.save(),t.translate(32,40),t.scale(i,i),t.fillStyle="#3a3f45",t.fillRect(-20,6,40,10),t.fillStyle=hn(e,-10),t.fillRect(-14,-8,28,16),t.fillStyle=e,t.fillRect(-14,-8,28,6),t.strokeStyle=hn(e,-30),t.lineWidth=5,t.beginPath(),t.moveTo(4,-6),t.lineTo(22,-20),t.stroke(),t.fillStyle=hn(e,-20),t.beginPath(),t.arc(24,-20,8,0,Math.PI*2),t.fill(),t.strokeStyle="#1c1f22",t.lineWidth=1.5;for(let r=0;r<6;r++){const o=r/6*Math.PI*2;t.beginPath(),t.moveTo(24,-20),t.lineTo(24+Math.cos(o)*8,-20+Math.sin(o)*8),t.stroke()}t.restore()}function pd(t,e,n){const i=n;t.save(),t.translate(32,40),t.scale(i,i),t.fillStyle="#3a3f45",t.fillRect(-20,6,40,10),t.fillStyle=hn(e,-10),t.fillRect(-14,-8,28,16),t.fillStyle=e,t.fillRect(-14,-8,28,6),t.strokeStyle=hn(e,-30),t.lineWidth=5,t.beginPath(),t.moveTo(4,-6),t.lineTo(20,-22),t.lineTo(30,-14),t.stroke(),t.strokeStyle=hn(e,-20),t.lineWidth=4,t.beginPath(),t.moveTo(30,-14),t.lineTo(40,-6),t.stroke(),t.fillStyle=hn(e,-20);for(let r=0;r<3;r++)t.fillRect(30+r*3.5,-15+r*3,3,3);t.restore()}const ZA={spade:sx,axe:WA,hammer:XA,pickaxe:YA,electricSpade:qA,miniDigger:(t,e)=>hd(t,e,.7),excavator:(t,e)=>hd(t,e,.95),earthMover:(t,e)=>hd(t,e,1.2),chainsaw:$A,fellingMachine:(t,e)=>Z0(t,e,.8),fellingHarvester:(t,e)=>Z0(t,e,1.1),handDrill:KA,pneumaticDrill:jA,rockDigger:(t,e)=>pd(t,e,.8),rockExcavator:(t,e)=>pd(t,e,1),rockDestroyer:(t,e)=>pd(t,e,1.25)};function JA(t){t.save(),t.translate(32,32),t.rotate(-.12),t.fillStyle="#37412f",t.fillRect(-28,-3,50,6),t.fillStyle="#2a3122",t.fillRect(18,-7,15,14),t.fillStyle="#14170f",t.fillRect(-11,-17,22,6),t.beginPath(),t.arc(-11,-14,4,0,Math.PI*2),t.fillStyle="#4a6fa5",t.fill(),t.fillStyle="#22271a",t.fillRect(6,2,8,13),t.restore()}const QA={pistol:RA,shotgun:CA,chaingun:PA,rocket:IA,nuke:LA,sniper:JA};function ol(t){if(!t)return null;const e=t.kind==="weapon"?"w:"+t.weaponKey:t.kind==="vehicle"?"v:"+t.vehicleKey:t.kind==="tool"?"t:"+t.toolKey:"b:"+t.id,n=j0.get(e);if(n)return n;const{canvas:i,ctx:r}=TA();if(t.kind==="weapon"){const s=QA[t.weaponKey];if(!s)return null;s(r)}else if(t.kind==="vehicle"){const s=VA[t.vehicleKey];if(!s)return null;s(r)}else if(t.kind==="tool"){const s=ZA[t.toolKey];if(!s)return null;s(r,ox(Hn[t.toolKey].color))}else{if(!go[t.id])return null;AA(r,t.id)}const o=i.toDataURL();return j0.set(e,o),o}function e2(){const t=document.getElementById("hotbar");if(t){t.innerHTML="";for(let e=0;e<gi;e++){const n=document.createElement("div");n.className="slot"+(e===0?" active":""),n.dataset.slot=String(e),n.innerHTML='<div class="block-icon" id="icon-'+e+'"></div><span class="slot-num">'+(e+1)+'</span><span class="item-count" id="count-'+e+'"></span>',t.appendChild(n)}}}function t2(t){const e=document.querySelector(".slot.active");e&&e.classList.remove("active");const n=document.querySelector('.slot[data-slot="'+t+'"]');n&&n.classList.add("active")}function ax(t){for(let e=0;e<gi;e++){const n=document.getElementById("icon-"+e),i=document.getElementById("count-"+e),r=t[e];if(n)if(r){const o=ol(r);n.style.backgroundImage=o?`url(${o})`:"none";const s=r.kind==="weapon"&&un[r.weaponKey].glow;n.style.filter=s?"drop-shadow(0 0 5px rgba(180,255,80,.9))":"none",n.style.opacity="1",i&&(i.textContent=r.kind==="weapon"||r.count>1?String(r.count):"")}else n.style.backgroundImage="none",n.style.filter="none",n.style.opacity="0.25",i&&(i.textContent="")}}function lx(t){const e=Math.max(0,Math.min(1,t)),n=e*120,i=.42+Math.abs(e-.5)*.12;return i2(n/360,.78,i)}function up(t){const{r:e,g:n,b:i}=lx(t);return`rgb(${e},${n},${i})`}function n2(t){const{r:e,g:n,b:i}=lx(t);return e<<16|n<<8|i}function i2(t,e,n){const i=(1-Math.abs(2*n-1))*e,r=i*(1-Math.abs(t*6%2-1)),o=n-i/2;let s=0,a=0,l=0;const c=Math.floor(t*6)%6;return c===0?(s=i,a=r):c===1?(s=r,a=i):c===2?(a=i,l=r):c===3?(a=r,l=i):c===4?(s=r,l=i):(s=i,l=r),{r:Math.round((s+o)*255),g:Math.round((a+o)*255),b:Math.round((l+o)*255)}}let J0=null;function r2(t){return{r:t>>16&255,g:t>>8&255,b:t&255}}function Q0({r:t,g:e,b:n},i){return`rgba(${t},${e},${n},${i})`}function o2({r:t,g:e,b:n},i){return{r:Math.min(255,t+i),g:Math.min(255,e+i),b:Math.min(255,n+i)}}function Zi(t,e){const n=e>0?t/e:0,i=document.getElementById("hp-bar-fill");i&&(i.style.width=n*100+"%",i.style.background=up(n));const r=document.getElementById("hp-text");r&&(r.textContent=t+" / "+e)}function cx(t,e,n){const i=document.getElementById("score-value");i&&(i.textContent=t.toLocaleString());const r=document.getElementById("score-best");r&&(r.textContent=e>0?"best "+e.toLocaleString():"");const o=document.getElementById("threat-fill");o&&(o.style.width=(n*100).toFixed(0)+"%",o.style.background=up(1-n));const s=document.getElementById("threat-label");s&&(s.textContent="Threat "+Math.round(n*100)+"%")}function s2(t){const e=document.getElementById("hp-bar");e&&(e.style.display=t?"":"none")}function We(t){const e=document.getElementById("block-label");e&&(e.textContent=t,e.classList.add("show"),clearTimeout(J0),J0=setTimeout(()=>e.classList.remove("show"),1500))}function ux(t){const e=document.getElementById("mining-progress");if(e){if(t===null){e.classList.remove("show");return}e.classList.add("show"),e.style.setProperty("--mining-pct",String(Math.max(0,Math.min(1,t))*100))}}function a2(t){const e=document.getElementById("damage-flash");e&&(e.style.opacity=String(t))}function l2(t,e=null){const n=document.getElementById("underwater-overlay");if(n&&(n.classList.toggle("visible",t),t)){const i=r2(Cs[e]??Cs[yi]);n.style.setProperty("--underwater-inner",Q0(o2(i,55),.28)),n.style.setProperty("--underwater-outer",Q0(i,.55))}}function fx(t){const e=document.getElementById("scope-overlay");e&&e.classList.toggle("hidden",!t);const n=document.getElementById("crosshair");n&&(n.style.display=t?"none":"")}function c2(){const t=document.getElementById("damage-flash");t&&(t.style.transition="none",t.style.background="#fff",t.style.opacity="0.8",requestAnimationFrame(()=>{t.style.transition="opacity 0.6s",t.style.opacity="0",setTimeout(()=>{t.style.background="#c00",t.style.transition=""},650)}))}function sl(){const t=n=>{const i=document.getElementById(n);return!!i&&!i.classList.contains("hidden")},e=t("loading-screen")||t("title-screen")||t("overlay");document.body.classList.toggle("menu-open",e)}function u2(){const t=document.getElementById("debug");t&&(t.style.display=t.style.display==="none"?"":"none")}function f2(){const t=document.getElementById("debug");return!!t&&t.style.display!=="none"}function d2(t){const e=document.getElementById("debug");e&&(e.textContent=t)}const h2=gi*dv,vo=gi+h2,Tt=Array(vo).fill(null),p2=Tt;let Ha=0;const dx=[];function eg(t){dx.push(t)}function Dr(){ax(Tt);for(const t of dx)t()}function of(){return Ha}function Wn(){return Tt[Ha]}function fh(t){Ha=t,t2(t);const e=Tt[t];e&&We(hx(e))}function hx(t){return t?t.kind==="weapon"?un[t.weaponKey].label+" ("+t.count+")":t.kind==="vehicle"?ri[t.vehicleKey].label:go[t.id]+(t.count>1?" x"+t.count:""):""}function px(t,e){return!t||!e||t.kind!==e.kind?!1:t.kind==="weapon"?t.weaponKey===e.weaponKey:t.kind==="vehicle"?!1:t.id===e.id}function al(t,e=1){for(let n=0;n<vo;n++){const i=Tt[n];if(i&&i.kind==="block"&&i.id===t)return i.count+=e,Dr(),!0}for(let n=0;n<vo;n++)if(!Tt[n])return Tt[n]={id:t,kind:"block",count:e},Dr(),!0;return!1}function qs(t){for(let e=0;e<vo;e++)if(!Tt[e])return Tt[e]=t,Dr(),!0;return!1}function mx(t){const e=un[t];for(let n=0;n<vo;n++){const i=Tt[n];if(i&&i.kind==="weapon"&&i.weaponKey===t){i.count+=e.ammo,Dr(),We("+"+e.ammo+" "+e.label+" ammo");return}}qs({id:e.id,kind:"weapon",weaponKey:t,count:e.ammo})?We("Picked up "+e.label+"!"):We("Inventory full!")}function gx(){const t=Tt[Ha];t&&(t.count--,t.count<=0&&(Tt[Ha]=null),Dr())}function _x(){for(let t=0;t<vo;t++)Tt[t]=null;Dr()}function eu(t){let e=0;for(const n of Tt)n&&n.kind==="block"&&n.id===t&&(e+=n.count);return e}function m2(t,e){if(eu(t)<e)return!1;let n=e;for(let i=0;i<vo&&n>0;i++){const r=Tt[i];if(!r||r.kind!=="block"||r.id!==t)continue;const o=Math.min(n,r.count);r.count-=o,n-=o,r.count<=0&&(Tt[i]=null)}return Dr(),!0}function $s(){Dr()}const T={pos:new A(8,Ws,8),vel:new A,yaw:0,pitch:0,onGround:!1,crouching:!1,flying:!1,lastJump:0,hp:100,maxHp:100,damageFlash:0,invincible:0,dead:!1,fallStartY:null,lastAttacker:null,lastDamageSource:null,piloting:!1,swimming:!1,underwater:!1,underwaterLiquid:null,spaceAlignQuat:new ht},ti=3,xo=ti*ti,Wt=Array(xo).fill(null);function g2(t){return t&&t.kind==="block"?t.id:null}function tg(t){let e=ti,n=-1,i=ti,r=-1;for(let o=0;o<ti;o++)for(let s=0;s<ti;s++)t[o*ti+s]!=null&&(o<e&&(e=o),o>n&&(n=o),s<i&&(i=s),s>r&&(r=s));return n===-1?null:{minR:e,maxR:n,minC:i,maxC:r,rows:n-e+1,cols:r-i+1}}function ng(t,e){const n=tg(t),i=tg(e);if(!n||!i||n.rows!==i.rows||n.cols!==i.cols)return!1;for(let r=0;r<n.rows;r++)for(let o=0;o<n.cols;o++){const s=t[(n.minR+r)*ti+(n.minC+o)],a=e[(i.minR+r)*ti+(i.minC+o)];if((s??null)!==(a??null))return!1}return!0}function vx(t=Wt){const e=t.map(g2);for(const[n,i]of Object.entries(tf))if(ng(e,i))return{kind:"vehicle",vehicleKey:n};for(const[n,i]of Object.entries(nf))if(ng(e,i))return{kind:"tool",toolKey:n};return null}function _2(t=Wt){const e=vx(t);if(!e)return null;for(let n=0;n<xo;n++){const i=t[n];i&&(i.count--,i.count<=0&&(t[n]=null))}return e.kind==="vehicle"?ix(e.vehicleKey):rx(e.toolKey)}function v2(t){const e=new Map;for(const n of t)n!=null&&e.set(n,(e.get(n)||0)+1);return e}function dh(t,e){for(const[n,i]of v2(t))if(e(n)<i)return!1;return!0}function fp(){for(let t=0;t<xo;t++)Wt[t]=null}let Mn=null,lo=!1,nn=null,Qo=null,co=0,uo=0,Ga=!1,Nn=null,Va=!1,xr=null;function sf(){return lo}function x2(t){if(Mn=t,!document.getElementById("inventory-screen"))return;md("inv-backpack",gi*dv,"slots",gi),md("inv-hotbar",gi,"slots",0),md("craft-grid",xo,"craft",0),I2();const n=document.getElementById("inv-close");n&&n.addEventListener("click",()=>Mn.onClose()),document.addEventListener("pointermove",S2),document.addEventListener("pointerup",M2);const i=document.getElementById("craft-take");i&&i.addEventListener("click",()=>Mn.onTakeResult())}function md(t,e,n,i){const r=document.getElementById(t);if(r){r.innerHTML="";for(let o=0;o<e;o++){const s=document.createElement("div");s.className="inv-slot",s.dataset.zone=n,s.dataset.index=String(i+o),s.innerHTML='<div class="inv-icon"></div><span class="inv-count"></span>',s.addEventListener("pointerdown",a=>y2(a,n,i+o)),r.appendChild(s)}}}function y2(t,e,n){if(lo){if(t.preventDefault(),co=t.clientX,uo=t.clientY,t.shiftKey&&e==="craft"&&!Mn.getHeld()){Mn.shiftReturn(n);return}Ga=!0,Nn={zone:e,index:n},xr=new Set,Va=!1,Mn.getHeld()||(Mn.pick(e,n),Va=!0)}}function xx(t,e){nn&&(nn.style.left=t+"px",nn.style.top=e+"px")}function yx(t,e){const n=document.elementFromPoint(t,e),i=n&&n.closest?n.closest(".inv-slot"):null;return i?{zone:i.dataset.zone,index:Number(i.dataset.index)}:null}function S2(t){if(!lo||(co=t.clientX,uo=t.clientY,xx(co,uo),!Ga))return;const e=yx(co,uo);!Mn.getHeld()||!e||e.zone!=="craft"||e.zone===Nn.zone&&e.index===Nn.index||(Nn.zone==="craft"&&!xr.has(Nn.index)&&(xr.add(Nn.index),Mn.dragFillCraftCell(Nn.index)),!xr.has(e.index)&&(xr.add(e.index),Mn.dragFillCraftCell(e.index)))}function M2(t){if(!lo||!Ga)return;Ga=!1,co=t.clientX,uo=t.clientY;const e=Mn.getHeld(),n=yx(co,uo),i=n&&Nn&&n.zone===Nn.zone&&n.index===Nn.index;e&&(!Va||!i)&&n&&!(n.zone==="craft"&&xr.has(n.index))&&Mn.place(n.zone,n.index),Nn=null,xr=null,Va=!1}function E2(t){if(!t){nn&&(nn.remove(),nn=null,Qo=null);return}nn||(nn=document.createElement("div"),nn.className="inv-ghost",Qo=document.createElement("span"),Qo.className="inv-ghost-count",nn.appendChild(Qo),document.body.appendChild(nn),xx(co,uo));const e=ol(t);nn.style.backgroundImage=e?`url(${e})`:"none",Qo.textContent=t.count>1?String(t.count):""}function b2(t,e){const n=t.querySelector(".inv-icon"),i=t.querySelector(".inv-count"),r=e?ol(e):null;n.style.backgroundImage=r?`url(${r})`:"none",i.textContent=e&&e.count>1?String(e.count):"",t.title=e?w2(e):""}function w2(t){return t.kind==="vehicle"?ri[t.vehicleKey].label:t.kind==="tool"?Hn[t.toolKey].label:t.kind==="weapon"?t.weaponKey:go[t.id]}function T2(t){return t?t.kind==="vehicle"?{kind:"vehicle",vehicleKey:t.vehicleKey}:{kind:"tool",toolKey:t.toolKey}:null}function A2(t){return t?t.kind==="vehicle"?ri[t.vehicleKey].label:Hn[t.toolKey].label:"Nothing yet"}function R2({slots:t,craft:e,result:n,selected:i,held:r,craftable:o}){E2(r);for(const c of document.querySelectorAll(".inv-slot")){const u=c.dataset.zone,f=Number(c.dataset.index);b2(c,u==="craft"?e[f]:t[f]),c.classList.toggle("selected",u==="slots"&&f===i)}const s=document.getElementById("craft-result");if(s){const c=ol(T2(n));s.style.backgroundImage=c?`url(${c})`:"none",s.classList.toggle("has-result",!!n)}const a=document.getElementById("craft-result-label");a&&(a.textContent=A2(n));const l=document.getElementById("craft-take");l&&(l.disabled=!n),o&&L2(o)}const hh="All";function C2(t,e,n,i,r){const o=document.createElement("div");o.className="recipe-card",o.dataset.pool=e,o.dataset.key=n,o.dataset.category=i.category||"",o.title="Craft it once you have every ingredient";const s=document.createElement("div");s.className="recipe-title",s.textContent=i.label,o.appendChild(s);const a=document.createElement("div");a.className="recipe-body";const l=document.createElement("div");l.className="recipe-grid";for(let u=0;u<ti*ti;u++){const f=document.createElement("div");f.className="recipe-cell";const d=r[u];if(d!=null){const p=ol({kind:"block",id:d});p&&(f.style.backgroundImage=`url(${p})`),f.title=go[d]}else f.classList.add("empty");l.appendChild(f)}a.appendChild(l);const c=document.createElement("div");c.className="recipe-notes",c.textContent=i.blurb,a.appendChild(c),o.appendChild(a),o.addEventListener("click",()=>{o.classList.contains("craftable")&&Mn.onCraftFromRecipe(e,n)}),t.appendChild(o)}function P2(){const t=[];for(const[e,n]of Object.entries(tf))t.push({pool:"vehicle",key:e,def:ri[e],recipe:n});for(const[e,n]of Object.entries(nf))t.push({pool:"tool",key:e,def:Hn[e],recipe:n});return t}function ig(t,e){for(const n of t.querySelectorAll(".recipe-filter-btn"))n.classList.toggle("active",n.dataset.filter===e);for(const n of t.querySelectorAll(".recipe-category, .recipe-card"))n.classList.toggle("filtered-out",e!==hh&&n.dataset.category!==e)}function I2(){const t=document.getElementById("recipe-book");if(!t)return;t.innerHTML="";const e=P2(),n=[...new Set(e.map(r=>r.def.category||"Other"))],i=document.createElement("div");i.id="recipe-filter";for(const r of[hh,...n]){const o=document.createElement("button");o.type="button",o.className="recipe-filter-btn",o.textContent=r,o.dataset.filter=r,o.addEventListener("click",()=>ig(t,r)),i.appendChild(o)}t.appendChild(i);for(const r of n){const o=document.createElement("div");o.className="recipe-category",o.textContent=r,o.dataset.category=r,t.appendChild(o);for(const s of e.filter(a=>(a.def.category||"Other")===r))C2(t,s.pool,s.key,s.def,s.recipe)}ig(t,hh)}function L2(t){const e=document.getElementById("recipe-book");if(e)for(const n of e.querySelectorAll(".recipe-card")){const i=t.has(n.dataset.pool+":"+n.dataset.key);n.classList.toggle("craftable",i)}}function D2(t){lo=t;const e=document.getElementById("inventory-screen");e&&e.classList.toggle("hidden",!lo),lo||(Ga=!1,Nn=null,xr=null,Va=!1,nn&&(nn.remove(),nn=null,Qo=null))}let Sx=!1;function af(t){Sx=t,dp()}function dp(){const t=document.getElementById("overlay");t&&t.classList.toggle("hidden",!Sx||hr()||sf()),sl()}function Mx(t){const e=document.getElementById("loading-screen");e&&e.classList.remove("hidden"),ph(0);const n=document.getElementById("loading-status");n&&(n.textContent=t||"Loading terrain…"),sl()}function rg(){const t=document.getElementById("loading-screen");t&&t.classList.add("hidden"),sl()}function ph(t){const e=document.getElementById("loading-bar-fill");e&&(e.style.width=`${Math.round(Math.max(0,Math.min(1,t))*100)}%`)}function U2({onSelectMode:t,onRespawn:e,onSelectGraphics:n,onDifficulty:i,onToggleSpawnEscalation:r,onRenderDistance:o,onDayLength:s,onWorldSeedApply:a,onSaveGame:l,onQuitToTitle:c,onToggleDevConsole:u}){const f=document.getElementById("overlay");f&&(f.addEventListener("click",()=>ef()),document.addEventListener("pointerlockchange",dp));const d=document.getElementById("settings-section");d&&d.addEventListener("click",F=>F.stopPropagation());const p=document.getElementById("mode-survival"),g=document.getElementById("mode-creative");p&&p.addEventListener("click",()=>t("survival")),g&&g.addEventListener("click",()=>t("creative"));const _=document.getElementById("gfx-potato"),m=document.getElementById("gfx-nextlevel");_&&_.addEventListener("click",()=>n(il)),m&&m.addEventListener("click",()=>n(rl)),Jv(og),og(jv());const h=document.getElementById("difficulty-slider");h&&(h.addEventListener("input",()=>i(Number(h.value))),h.addEventListener("click",F=>F.stopPropagation()));const x=document.getElementById("spawn-escalation");x&&x.addEventListener("click",()=>r());const v=document.getElementById("dev-console-toggle");v&&v.addEventListener("click",()=>u());const S=document.getElementById("render-distance-slider");S&&(S.addEventListener("input",()=>o(Number(S.value))),S.addEventListener("click",F=>F.stopPropagation()));const C=document.getElementById("day-length-slider");C&&(C.addEventListener("input",()=>s(Number(C.value))),C.addEventListener("click",F=>F.stopPropagation()));const E=document.getElementById("world-seed-input"),R=document.getElementById("world-seed-random"),L=document.getElementById("world-seed-apply");E&&(E.addEventListener("click",F=>F.stopPropagation()),E.addEventListener("keydown",F=>{F.key==="Enter"&&a(E.value)})),R&&R.addEventListener("click",()=>{E&&(E.value=gv())}),L&&L.addEventListener("click",()=>a(E?E.value:""));const w=document.getElementById("respawn-btn");w&&w.addEventListener("click",()=>e());const y=document.getElementById("save-game-btn");y&&y.addEventListener("click",F=>{F.stopPropagation(),l()});const I=document.getElementById("quit-to-title-btn");I&&I.addEventListener("click",F=>{F.stopPropagation(),c()})}function N2({slider:t,escalatingSpawns:e,pointsPerKill:n,killsToPeak:i}){const r=document.getElementById("difficulty-slider");r&&Number(r.value)!==t&&(r.value=String(t));const o=document.getElementById("difficulty-value");o&&(o.textContent=String(t));const s=document.getElementById("difficulty-desc");s&&(s.textContent=`Score climbs ${n}x faster and the game turns hostile in about ${i} kills. Higher means you take more damage and deal less, sooner.`);const a=document.getElementById("spawn-escalation");a&&(a.textContent="Escalating spawns: "+(e?"On":"Off"),a.classList.toggle("active",e));const l=document.getElementById("spawn-desc");l&&(l.textContent=e?"More mobs, spawning faster and closer, as your score climbs.":"Mob spawning stays at its opening rate no matter how high you score.")}function F2({enabled:t,local:e,overridden:n}){const i=document.getElementById("dev-console-toggle");i&&(i.textContent="Dev console: "+(t?"Enabled":"Disabled"),i.classList.toggle("active",t));const r=document.getElementById("dev-console-desc");r&&(r.textContent=n?`Enforced ${t?"enabled":"disabled"} by the host while connected — your own preference (${e?"enabled":"disabled"}) applies again once you disconnect.`:t?"The ` key opens it, in solo play and while hosting or joining multiplayer alike. Whoever joins a room first sets this for everyone connected.":"Nobody — including you — can open it right now. Disabling it before hosting or joining multiplayer is what keeps connected players honest.")}function O2({dist:t,blocks:e}){const n=document.getElementById("render-distance-slider");n&&Number(n.value)!==t&&(n.value=String(t));const i=document.getElementById("render-distance-value");i&&(i.textContent=String(t));const r=document.getElementById("render-distance-desc");r&&(r.textContent=`${e} blocks out. Higher looks better from further away but costs FPS — push it as far as your machine is happy with (F3 shows your frame rate).`)}function B2({minutes:t}){const e=document.getElementById("day-length-slider");e&&Number(e.value)!==t&&(e.value=String(t));const n=document.getElementById("day-length-value");n&&(n.textContent=String(t));const i=document.getElementById("day-length-desc");i&&(i.textContent=`Day lasts ${t} minute${t===1?"":"s"}, then night lasts the same. Mobs only spawn after dark.`)}function k2({seed:t,input:e}){const n=document.getElementById("world-seed-input");n&&n.value!==e&&document.activeElement!==n&&(n.value=e);const i=document.getElementById("world-seed-desc");i&&(i.textContent=e?`Seed "${e}" (${t}). Click "Generate New World" after typing a new one — it rebuilds the world from scratch, so anything on the ground stays behind.`:"The default world — leave this blank to always get the one the game ships with. Playing with friends? Everyone needs to type the exact same seed.")}function og(t){const e=document.getElementById("gfx-potato"),n=document.getElementById("gfx-nextlevel");e&&e.classList.toggle("active",t===il),n&&n.classList.toggle("active",t===rl);const i=document.getElementById("gfx-desc");i&&(i.textContent=Ju[t].blurb)}function z2(t){const e=document.getElementById("mode-survival"),n=document.getElementById("mode-creative");e&&e.classList.toggle("active",t==="survival"),n&&n.classList.toggle("active",t==="creative");const i=document.getElementById("mode-desc");i&&(i.textContent=t==="creative"?"Fly freely, no damage, no health bar.":"No flying. Take damage from enemies and falls.")}function H2(t){const e=document.getElementById("death-screen");e&&e.classList.remove("hidden");const n=document.getElementById("death-cause");n&&t&&(n.textContent=t)}function G2(){const t=document.getElementById("death-screen");t&&t.classList.add("hidden")}const Ex="blocksGameMode";let os="survival";function hp(){return os}function lf(){return os==="creative"}function tu(t){if(!(t!=="survival"&&t!=="creative")){os=t;try{localStorage.setItem(Ex,t)}catch{}os==="survival"&&(T.flying=!1),T.fallStartY=null,z2(os),s2(os!=="creative"),Zi(T.hp,T.maxHp)}}function V2(){let t=null;try{t=localStorage.getItem(Ex)}catch{}tu(t==="creative"?"creative":"survival")}let Je={},Os=!1;const W2=64,fi=[];let ci=-1;function ii(t){return document.getElementById(t)}function jn(t,e="info"){const n=ii("dev-console-log");if(!n)return;const i=document.createElement("div");for(i.className="dcl-line dcl-"+e,i.textContent=t,n.appendChild(i);n.children.length>200;)n.removeChild(n.firstChild);n.scrollTop=n.scrollHeight}let ss="",yr=[],Ma=0;function es(t){const e=t.trimStart();if(ss="",yr=[],Ma=0,!e){Rc();return}const n=e.split(/\s+/),i=n[0];if(n.length===1&&!e.endsWith(" ")){ss=i,yr=Object.keys(Je).filter(s=>s.toLowerCase().startsWith(i.toLowerCase())).sort(),Rc();return}const r=Je[i],o=n.slice(1);r&&r.completions&&o.length<=1&&(ss=o[0]||"",yr=(r.completions(o)||[]).filter(a=>a.toLowerCase().startsWith(ss.toLowerCase())).sort()),Rc()}function Rc(){const t=ii("dev-console-input"),e=ii("dev-console-ghost");if(!t||!e)return;const n=yr[Ma],i=n?n.slice(ss.length):"";e.textContent="";const r=document.createElement("span");r.style.visibility="hidden",r.textContent=t.value,e.appendChild(r),e.appendChild(document.createTextNode(i))}function mh(){return Os}function X2(){if(Os)return;Os=!0;const t=ii("dev-console");t&&t.classList.remove("hidden");const e=ii("dev-console-input");e&&(e.value="",e.focus()),es("")}function Ea(){if(!Os)return;Os=!1;const t=ii("dev-console");t&&t.classList.add("hidden");const e=ii("dev-console-input");e&&e.blur()}function Y2(){Os?Ea():X2()}function q2(t){const e=t.trim();if(!e)return;fi[fi.length-1]!==e&&(fi.push(e),fi.length>W2&&fi.shift()),ci=-1,jn("> "+e,"input");const n=e.split(/\s+/),i=n[0],r=n.slice(1),o=Je[i];if(!o){jn(`Unknown command: "${i}". Type /help for a list.`,"error");return}try{const s=o.run(r);s&&jn(s,"ok")}catch(s){jn("Error: "+s.message,"error")}}function $2({giveItem:t,givableItemNames:e,spawnMobs:n,mobTypeNames:i,player:r,setDayTime:o,setDayLengthMinutes:s,getDayLengthMinutes:a,setRenderDistance:l,getRenderDistance:c,setSlider:u,getSlider:f,setGraphics:d,getGraphics:p,setGameMode:g,hurtPlayer:_,killPlayer:m,refreshHpBar:h}){Je["/give"]={usage:"/give <item> [count]",desc:"Add an item to your inventory. No item lists everything givable.",completions:()=>e,run(C){if(!C[0])return jn("Give any of:","info"),jn("  "+[...e].sort().join(", "),"info"),null;const E=C[0].toLowerCase(),R=Math.max(1,Math.min(9999,parseInt(C[1])||1));return t(E,R)}},Je["/tp"]={usage:"/tp <x> <y> <z>",desc:"Teleport to world coordinates.",run(C){const[E,R,L]=C.map(Number);if([E,R,L].some(w=>!Number.isFinite(w)))throw new Error("Usage: "+Je["/tp"].usage);return r.pos.set(E,R,L),r.vel.set(0,0,0),r.fallStartY=null,`Teleported to ${E.toFixed(1)} ${R.toFixed(1)} ${L.toFixed(1)}`}},Je["/pos"]={usage:"/pos",desc:"Print your current coordinates.",run(){const{x:C,y:E,z:R}=r.pos;return`Position: ${C.toFixed(2)} ${E.toFixed(2)} ${R.toFixed(2)}`}},Je["/time"]={usage:"/time <0–1 | dawn | day | dusk | night>",desc:"Set the time of day (0=midnight, 0.25=dawn, 0.5=noon, 0.75=dusk).",completions:()=>["dawn","day","dusk","night"],run(C){const E={dawn:.25,day:.5,dusk:.75,night:0};if(!C[0])throw new Error("Usage: "+Je["/time"].usage);const R=C[0].toLowerCase(),L=R in E?E[R]:parseFloat(R);if(!Number.isFinite(L)||L<0||L>1)throw new Error("Time must be 0–1 or a preset name");return o(L),`Time set to ${L.toFixed(3)} (${R})`}},Je["/daylength"]={usage:"/daylength <minutes>",desc:"Set the day/night cycle length in minutes (1–60).",run(C){const E=parseInt(C[0]);if(!Number.isFinite(E))throw new Error("Usage: "+Je["/daylength"].usage);return s(E),`Day length set to ${a()} min`}},Je["/renderdist"]={usage:"/renderdist <chunks>",desc:"Set render distance in chunks.",run(C){const E=parseInt(C[0]);if(!Number.isFinite(E))throw new Error("Usage: "+Je["/renderdist"].usage);return l(E),`Render distance set to ${c()} chunks`}},Je["/difficulty"]={usage:"/difficulty <1–100>",desc:"Set the difficulty slider (1–100).",run(C){const E=parseInt(C[0]);if(!Number.isFinite(E))throw new Error("Usage: "+Je["/difficulty"].usage);return u(E),`Difficulty set to ${f()}`}},Je["/graphics"]={usage:"/graphics <potato | nextlevel>",desc:"Switch graphics preset.",completions:()=>["potato","nextlevel"],run(C){const E=(C[0]||"").toLowerCase();if(!["potato","nextlevel"].includes(E))throw new Error("Usage: "+Je["/graphics"].usage);return d(E),`Graphics set to ${p()}`}},Je["/mode"]={usage:"/mode <survival | creative>",desc:"Switch game mode.",completions:()=>["survival","creative"],run(C){const E=(C[0]||"").toLowerCase();if(!["survival","creative"].includes(E))throw new Error("Usage: "+Je["/mode"].usage);return g(E),`Game mode set to ${E}`}},Je["/spawn"]={usage:`/spawn <${i.join(" | ")}> [count]`,desc:"Spawn mobs near your position.",completions:()=>i,run(C){const E=(C[0]||"").toLowerCase();if(!i.includes(E))throw new Error("Usage: "+Je["/spawn"].usage);const R=Math.max(1,Math.min(50,parseInt(C[1])||1));return n(E,R)}},Je["/hp"]={usage:"/hp <value>",desc:"Set your HP directly.",run(C){const E=parseInt(C[0]);if(!Number.isFinite(E)||E<0)throw new Error("Usage: "+Je["/hp"].usage);return r.hp=Math.min(r.maxHp,E),h(),`HP set to ${r.hp}`}},Je["/heal"]={usage:"/heal",desc:"Restore HP to maximum.",run(){return r.hp=r.maxHp,h(),`Healed to ${r.hp}`}},Je["/damage"]={usage:"/damage <amount>",desc:"Deal damage to yourself, scaled by difficulty like any other hit.",run(C){const E=parseInt(C[0]);if(!Number.isFinite(E)||E<=0)throw new Error("Usage: "+Je["/damage"].usage);return _(E,{kind:"console"}),`Dealt ${E} damage`}},Je["/kill"]={usage:"/kill",desc:"Instantly kill yourself.",run(){return m(),"Ouch."}},Je["/clear"]={usage:"/clear",desc:"Clear the console output.",run(){const C=ii("dev-console-log");return C&&(C.innerHTML=""),null}},Je["/help"]={usage:"/help [command]",desc:"List all commands, or show details for one.",completions:()=>Object.keys(Je).map(C=>C.slice(1)),run(C){if(C[0]){const E=C[0].startsWith("/")?C[0]:"/"+C[0],R=Je[E];if(!R)throw new Error(`No command "${E}"`);return jn(R.usage,"ok"),jn("  "+R.desc,"info"),null}jn("─── Dev Console Commands ───","info");for(const[E,R]of Object.entries(Je))jn(`  ${E.padEnd(16)} ${R.desc}`,"info");return null}};const x=ii("dev-console-input"),v=ii("dev-console-form");v&&v.addEventListener("submit",C=>{C.preventDefault();const E=x?x.value:"";q2(E),x&&(x.value=""),es("")}),x&&(x.addEventListener("input",()=>es(x.value)),x.addEventListener("keydown",C=>{if(C.stopPropagation(),C.key==="`"){C.preventDefault(),Ea();return}if(C.key==="Escape"){C.preventDefault(),Ea();return}if(C.key==="Tab"||C.key==="ArrowRight"&&x.selectionStart===x.value.length){C.preventDefault();const E=yr[Ma];E&&(x.value+=E.slice(ss.length),es(x.value));return}if((C.key==="ArrowUp"||C.key==="ArrowDown")&&yr.length>1){C.preventDefault();const E=C.key==="ArrowUp"?-1:1;Ma=(Ma+E+yr.length)%yr.length,Rc();return}if(C.key==="ArrowUp"){if(C.preventDefault(),fi.length===0)return;ci=ci<0?fi.length-1:Math.max(0,ci-1),x.value=fi[ci],es(x.value),requestAnimationFrame(()=>{x.selectionStart=x.selectionEnd=x.value.length});return}if(C.key==="ArrowDown"){if(C.preventDefault(),ci<0)return;ci++,ci>=fi.length?(ci=-1,x.value=""):x.value=fi[ci],es(x.value);return}}),x.addEventListener("keyup",C=>C.stopPropagation(),!0));const S=ii("dev-console-close");S&&S.addEventListener("click",Ea),jn("Dev console ready. Type /help for commands.","info")}const bx="blocksDevConsoleEnabled";let Wa=!0,Bs=null;const wx=[];function K2(t){wx.push(t)}function cf(){for(const t of wx)t(pp())}function pp(){return Bs!==null?Bs:Wa}function j2(){return Bs!==null}function mp(){return Wa}function Z2(t){const e=!!t;if(e!==Wa){Wa=e;try{localStorage.setItem(bx,JSON.stringify(e))}catch{}cf()}}function J2(){let t=null;try{t=JSON.parse(localStorage.getItem(bx))}catch{}typeof t=="boolean"&&(Wa=t),cf()}function Q2(t){Bs=!!t,cf()}function eR(){Bs!==null&&(Bs=null,cf())}const dt={},Jn={leftHeld:!1,rightHeld:!1};let gh=!1;function tR(t){gh=t,gh&&rR()}let _h=0,vh=0;function gp(){const t={dx:_h,dy:vh};return _h=0,vh=0,t}function uf(){return!!(dt.ShiftLeft||dt.ShiftRight)}function nu(){return!!(dt.ControlLeft||dt.ControlRight)}const nR=300;function iR({onLeftClick:t,onRightClick:e,onToggleInventory:n,onToggleVehicle:i,onToggleHyperspeed:r}){document.addEventListener("keydown",o=>{if(o.key==="`"){if(o.preventDefault(),!mh()&&!pp()){We("Dev console is disabled");return}Y2();return}if(!mh()){if(gh||(dt[o.code]=!0),o.ctrlKey&&hr()&&o.preventDefault(),o.code.startsWith("Digit")){const s=parseInt(o.code.replace("Digit",""))-1;s>=0&&s<gi&&fh(s)}if(o.code==="Space"){const s=performance.now();s-T.lastJump<nR&&hp()==="creative"&&(T.flying=!T.flying,T.vel.set(0,0,0),T.fallStartY=null),T.lastJump=s}o.code==="F3"&&u2(),o.code==="KeyE"&&!o.repeat&&n(),o.code==="KeyF"&&!o.repeat&&i(),o.code==="KeyH"&&!o.repeat&&r(),o.code==="Escape"&&!o.repeat&&sf()&&n()}}),document.addEventListener("keyup",o=>{dt[o.code]=!1}),document.addEventListener("mousemove",o=>{hr()&&(_h+=o.movementX,vh+=o.movementY)}),document.addEventListener("wheel",o=>{if(!hr())return;const s=o.deltaY>0?1:-1;fh((of()+s+gi)%gi)},{passive:!0}),document.addEventListener("mousedown",o=>{hr()&&(o.button===0&&(Jn.leftHeld=!0,t()),o.button===2&&(Jn.rightHeld=!0,e()))}),document.addEventListener("mouseup",o=>{o.button===0&&(Jn.leftHeld=!1),o.button===2&&(Jn.rightHeld=!1)}),document.addEventListener("contextmenu",o=>o.preventDefault()),document.addEventListener("pointerlockchange",()=>{hr()||(Jn.leftHeld=!1,Jn.rightHeld=!1)})}function rR(){for(const t of Object.keys(dt))dt[t]=!1}function gd(t,e){return t+","+e}function oR({chunkHeight:t=Ws}={}){const e=new Map,n=(m,h,x)=>m+be*(h+t*x);let i=2147483647,r=2147483647,o;function s(){i=2147483647,r=2147483647,o=void 0}function a(m,h){return m===i&&h===r||(o=e.get(gd(m,h)),i=m,r=h),o}function l(m,h,x){e.set(gd(m,h),x),s()}function c(m){e.delete(m),s()}function u(){e.clear(),s()}function f(m,h){return e.has(gd(m,h))}function d(m,h,x){if(h<0)return Oe;if(h>=t)return rt;const v=a(m>>Dn,x>>Dn);return v===void 0?Oe:v[(m&Un)+be*(h+t*(x&Un))]}function p(m,h,x,v){if(h<0||h>=t)return null;const S=m>>Dn,C=x>>Dn,E=a(S,C);if(E===void 0)return null;const R=m&Un,L=x&Un;return E[n(R,h,L)]=v,{cx:S,cz:C,lx:R,lz:L}}function g(m,h,x){const v=d(Math.floor(m),Math.floor(h),Math.floor(x));return v!==rt&&!Gn(v)&&v!==rn}function _(m,h){const x=a(Math.floor(m)>>Dn,Math.floor(h)>>Dn);if(x===void 0)return t-1;const v=Math.floor(m)&Un,S=Math.floor(h)&Un,C=v+be*t*S;for(let E=t-1;E>0;E--)if(x[C+be*E]!==rt)return E;return 0}return{chunkHeight:t,chunks:e,getChunk:a,setChunk:l,deleteChunk:c,clearChunks:u,hasChunk:f,getBlock:d,writeBlockRaw:p,isSolid:g,surfaceAt:_,blockIndex:n}}function ll(t){const e=new Uint8Array(512),n=new Uint8Array(256);for(let c=0;c<256;c++)n[c]=c;let i=t>>>0;for(let c=255;c>0;c--){i=i*1664525+1013904223>>>0;const u=i%(c+1);[n[c],n[u]]=[n[u],n[c]]}for(let c=0;c<512;c++)e[c]=n[c&255];function r(c){return c*c*c*(c*(c*6-15)+10)}function o(c,u,f){return c+f*(u-c)}function s(c,u,f){const d=c&3,p=d<2?u:f,g=d<2?f:u;return(d&1?-p:p)+(d&2?-g:g)}function a(c,u){const f=Math.floor(c)&255,d=Math.floor(u)&255;c-=Math.floor(c),u-=Math.floor(u);const p=r(c),g=r(u),_=e[f]+d,m=e[f+1]+d;return o(o(s(e[_],c,u),s(e[m],c-1,u),p),o(s(e[_+1],c,u-1),s(e[m+1],c-1,u-1),p),g)}function l(c,u,f,d,p){let g=0,_=1,m=1,h=0;for(let x=0;x<f;x++)g+=a(c*m,u*m)*_,h+=_,_*=d,m*=p;return g/h}return{noise2:a,octave:l}}function an(...t){let e=2166136261;for(const n of t)e^=n|0,e=Math.imul(e,16777619);return e^=e>>>16,(e>>>0)/4294967295}function Tx(t,e,n,i){let r=t*1619+e*31337+n*6271+i*1013>>>0;return r^=r>>>16,r=Math.imul(r,73244475)>>>0,r^=r>>>16,(r&255)/255}const iu={px:{normal:new A(1,0,0),uAxis:new A(0,1,0),vAxis:new A(0,0,1)},nx:{normal:new A(-1,0,0),uAxis:new A(0,1,0),vAxis:new A(0,0,-1)},py:{normal:new A(0,1,0),uAxis:new A(0,0,1),vAxis:new A(1,0,0)},ny:{normal:new A(0,-1,0),uAxis:new A(0,0,1),vAxis:new A(-1,0,0)},pz:{normal:new A(0,0,1),uAxis:new A(1,0,0),vAxis:new A(0,1,0)},nz:{normal:new A(0,0,-1),uAxis:new A(-1,0,0),vAxis:new A(0,1,0)}},Rr=Object.keys(iu);function _p(t){const e=iu[t];if(!e)throw new Error(`unknown cube face id: ${t}`);return e}const ba=new A,qo=new A,_d=new A,sa=new A;function In(t,e,n,i,r,o,s){const{normal:a,uAxis:l,vAxis:c}=_p(t);return ba.copy(a).multiplyScalar(r).addScaledVector(l,e).addScaledVector(c,n),s.copy(ba).normalize().multiplyScalar(i).add(o)}function cl(t,e,n){qo.copy(t).sub(e);const i=qo.length();if(i<1e-8)return{faceId:Rr[0],u:0,v:0,radius:0};qo.multiplyScalar(1/i);let r=Rr[0],o=-1/0;for(const d of Rr){const p=qo.dot(iu[d].normal);p>o&&(o=p,r=d)}const{normal:s,uAxis:a,vAxis:l}=iu[r],c=n/qo.dot(s);ba.copy(qo).multiplyScalar(c);const u=ba.dot(a),f=ba.dot(l);return{faceId:r,u,v:f,radius:i}}function sR(t,e,n,i){sa.copy(t).sub(e);const r=sa.length();if(r<1e-8)return{u:0,v:0,radius:0};sa.multiplyScalar(1/r);const{normal:o,uAxis:s,vAxis:a}=_p(i),l=sa.dot(o);if(l<=1e-6)return null;const c=n/l;_d.copy(sa).multiplyScalar(c);const u=_d.dot(s),f=_d.dot(a);return{u,v:f,radius:r}}function sg(t,e,n){const i=Math.max(0,Math.min(1,(n-t)/(e-t)));return i*i*(3-2*i)}function aR(t,e,n,i,r,o,s,a,l){const c=s.noise2(a*.3+300,l*.3+300);if(c<=.6)return;const u=2+Math.floor((c-.6)*7.5);for(let f=1;f<=Math.min(u,4);f++){const d=o+f;if(d>=n.chunkHeight)break;t[e.blockIndex(i,d,r)]=Au}}function lR(t,e,n,i,r,o,s,a,l){const c=s.noise2(a*.32+400,l*.32+400);if(c<=.62)return;const u=c>.8?2:1;for(let f=1;f<=u;f++){const d=o+f;if(d>=n.chunkHeight)break;t[e.blockIndex(i,d,r)]=Pu}}function cR(t,e,n,i,r,o,s,a,l){const c=s.noise2(a*.28+500,l*.28+500);if(c<=.58)return;const u=1+Math.floor((c-.58)*7);for(let f=1;f<=Math.min(u,3);f++){const d=o+f;if(d>=n.chunkHeight)break;t[e.blockIndex(i,d,r)]=Du}}function uR(t,e,n,i,r,o,s,a,l){if(s.noise2(a*.3+600,l*.3+600)<=.6)return;const u=2;for(let d=1;d<=u;d++){const p=o+d;if(p>=n.chunkHeight)break;t[e.blockIndex(i,p,r)]=Fu}const f=o+u+1;if(!(f>=n.chunkHeight))for(let d=-1;d<=1;d++)for(let p=-1;p<=1;p++){const g=i+d,_=r+p;if(g<0||g>=be||_<0||_>=be)continue;const m=e.blockIndex(g,f,_);t[m]===rt&&(t[m]=Qa)}}const vd=[{name:"Barrens",surface:wu,rock:io,deepOre:null,liquid:null,flora:null},{name:"Crystal Fields",surface:Tu,rock:io,deepOre:Bu,liquid:null,flora:aR},{name:"Ashen Wastes",surface:Ru,rock:Cu,deepOre:ku,liquid:Iu,flora:lR},{name:"Frozen Wastes",surface:Lu,rock:io,deepOre:zu,liquid:Uu,flora:cR},{name:"Toxic Mire",surface:Nu,rock:io,deepOre:Hu,liquid:Ou,flora:uR}];function vp(t){if(t._theme)return t._theme;const e=Math.min(vd.length-1,Math.floor(an(t.seed,0,60)*vd.length));return t._theme=vd[e],t._theme}const ag=.08,lg=.85,fR=2.5,cg=.03,ug=.5,dR=2.2;function hR(t){if(t._craters)return t._craters;const e=t.halfExtent*.6,n={};for(let i=0;i<Rr.length;i++){const r=Rr[i],o=[];for(let s=0;s<t.craterCount;s++){const a=(an(t.seed,i,s,1)*2-1)*e,l=(an(t.seed,i,s,2)*2-1)*e,c=4+an(t.seed,i,s,3)*5,u=t.amplitude*(.5+an(t.seed,i,s,4)*.5);o.push({u:a,v:l,r:c,depth:u})}n[r]=o}return t._craters=n,n}function pR(t,e,n,i,r){const o=n.octave(i*.045,r*.045,4,.5,2);let s=t.radius+o*t.amplitude;for(const u of hR(t)[e]){const f=i-u.u,d=r-u.v,p=Math.hypot(f,d);if(p<u.r){const g=1-p/u.r;s-=u.depth*g*g}}const a=n.octave(i*ag+9e3,r*ag+9e3,2,.5,2),l=1-Math.abs(a);l>lg&&(s-=sg(lg,1,l)*t.amplitude*fR);const c=n.octave(i*cg+13e3,r*cg+13e3,3,.5,2);return c>ug&&(s-=sg(ug,1,c)*t.amplitude*dR),s}const mR=.25,gR=.42;function _R(t,e,n,i,r,o){const s=i/o;return s<mR&&e.noise2(n*.5+i*.7,r*.5-i*.5)>.78?ao:t.deepOre!==null&&s<gR&&e.noise2(n*.34-i*.6,r*.34+i*.4)>.7?t.deepOre:t.rock}const vR=3;function xR({center:t,radius:e,amplitude:n=6,chunkSpan:i=vR,chunkHeight:r=Ws,seed:o=1,craterCount:s=2,coreRadius:a}){const l=i*be/2;a===void 0&&(a=e-Math.floor(r/2));const c={};for(const u of Rr)c[u]=oR({chunkHeight:r});return{center:t.clone(),radius:e,amplitude:n,coreRadius:a,halfExtent:l,chunkSpan:i,chunkHeight:r,seed:o,craterCount:s,faces:c,_noise:null,_oreNoise:null,_craters:null,_theme:null,generateChunk:Ax}}function yR(t){return t._noise||(t._noise=ll(t.seed>>>0)),t._noise}function SR(t){return t._oreNoise||(t._oreNoise=ll((t.seed^24301)>>>0)),t._oreNoise}function Ax(t,e,n,i){const r=t.faces[e],o=yR(t),s=SR(t),a=vp(t),l=new Uint8Array(be*t.chunkHeight*be),c=n*be-t.halfExtent,u=i*be-t.halfExtent,f=Math.round(t.radius-t.coreRadius);for(let d=0;d<be;d++)for(let p=0;p<be;p++){const g=c+d,_=u+p,m=pR(t,e,o,g,_),h=Math.round(m-t.coreRadius),x=Math.min(t.chunkHeight-1,Math.max(h,f));for(let v=0;v<=x;v++){let S=rt;v<h-4?S=_R(a,s,g,v,_,t.chunkHeight):v<h?S=a.rock:v===h?S=a.surface:a.liquid!==null&&v<=f&&v>h&&(S=a.liquid),l[r.blockIndex(d,v,p)]=S}a.flora&&h>f&&a.flora(l,r,t,d,p,h,o,g,_)}r.setChunk(n,i,l)}const fg=.0015,dg=.0022,hg=.006,pg=.0032,mg=12,gg=26,MR=42,ER=34,bR=-.35,_g=.965,wR=34,vg=.55,TR=20;function Kl(t,e,n){const i=Math.max(0,Math.min(1,(n-t)/(e-t)));return i*i*(3-2*i)}function xg(t){return 1-Math.abs(t)}const $o=192,AR=.35,Rx=26,RR=24,yg=7,CR=12;function PR(t,e){let n=t*374761393+e*668265263>>>0;return n=(n^n>>>13)>>>0,n=Math.imul(n,1274126177)>>>0,(n^n>>>16)>>>0}function IR(t,e){const n=Math.floor(t/$o),i=Math.floor(e/$o);let r=null;for(let o=-1;o<=1;o++)for(let s=-1;s<=1;s++){const a=n+o,l=i+s,c=PR(a,l);if(c%1e3/1e3>=AR)continue;const u=(c>>>8&255)/255,f=(c>>>16&255)/255,d=a*$o+$o*(.3+u*.4),p=l*$o+$o*(.3+f*.4),g=Math.hypot(t-d,e-p);g<=Rx&&(!r||g<r.dist)&&(r={dist:g})}return r}function LR(t,e,n,{seaLevel:i=no,ceiling:r=Ws-4}={}){const o=t.octave(e*.008,n*.008,6,.5,2),s=t.octave(e*fg+4e3,n*fg+4e3,3,.5,2),a=t.octave(e*dg+8e3,n*dg+8e3,3,.5,2),l=Kl(-.45,-.05,s),c=Kl(.05,.4,s),u=mg+(gg-mg)*l+(MR-gg)*c,f=o*(1-c)+xg(o)*c;let d=i+f*u,p=a<bR&&c<.5;p&&(d=d*.15+(i+o*6)*.85);const g=t.octave(e*hg+12e3,n*hg+12e3,2,.5,2),_=xg(g);_>_g&&l>.3&&(d-=Kl(_g,1,_)*wR);const m=t.octave(e*pg+16e3,n*pg+16e3,3,.5,2);m>vg&&c<.3&&(d-=Kl(vg,1,m)*TR);let h=!1;const x=IR(e,n);if(x){const E=Math.max(0,1-x.dist/Rx);d+=E*E*RR,x.dist<yg&&(d-=(1-x.dist/yg)*CR),h=E>.15,h&&(p=!1)}const v=Math.max(1,Math.min(r,Math.round(d))),S=p||v<=i+1,C=!p&&!h&&v>=i+ER;return{surfaceY:v,isSandy:S,isSnowy:C,isDesert:p,isVolcanic:h,isMountainous:c>.5}}const DR=[{id:xt,maxY:10,threshold:.72,scale:.42},{id:Be,maxY:18,threshold:.62,scale:.34},{id:xe,maxY:30,threshold:.5,scale:.28}];function UR(t,e,n,i){for(const r of DR){if(n>r.maxY)continue;if(t.noise2(e*r.scale+n*.7,i*r.scale-n*.5)>r.threshold)return r.id}return Oe}function NR(t){return t._noise||(t._noise=ll(t.seed>>>0)),t._noise}function FR(t){return t._oreNoise||(t._oreNoise=ll((t.seed^24301)>>>0)),t._oreNoise}function OR(t,e,n,i){const r=t.faces[e],o=NR(t),s=FR(t),a=new Uint8Array(be*t.chunkHeight*be),l=n*be-t.halfExtent,c=i*be-t.halfExtent,u=t.chunkHeight-4;for(let f=0;f<be;f++)for(let d=0;d<be;d++){const p=l+f,g=c+d,{surfaceY:_,isSandy:m,isSnowy:h,isVolcanic:x}=LR(o,p,g,{seaLevel:no,ceiling:u}),v=Math.min(t.chunkHeight-1,Math.max(_,no));for(let S=0;S<=v;S++){let C=rt;S===0?C=Oe:S<_-4?C=UR(s,p,S,g):S<_?C=x?Oe:m?Rs:Eu:S===_?C=x?bu:m?Rs:h?Ja:Za:S<=no&&S>_&&(C=yi),a[r.blockIndex(f,S,d)]=C}if(!m&&!h&&!x&&_>no+1&&o.noise2(p*.3+100,g*.3+100)>.55){const C=_+1;for(let E=0;E<4;E++)C+E<t.chunkHeight&&(a[r.blockIndex(f,C+E,d)]=vt);for(let E=-2;E<=2;E++)for(let R=-2;R<=2;R++)for(let L=3;L<=5;L++){if(Math.abs(E)===2&&Math.abs(R)===2)continue;const w=C+L,y=f+E,I=d+R;w<t.chunkHeight&&y>=0&&y<be&&I>=0&&I<be&&a[r.blockIndex(y,w,I)]===rt&&(a[r.blockIndex(y,w,I)]=rn)}}}r.setChunk(n,i,a)}const Cc=3e3,BR=Cc,kR=Ws,zR=-ja,Sg=500,HR=100,GR=100,VR=8,WR=6,XR=20,YR=13,qR=.15,Cx=.6;function $R(t){return Math.max(6,t*.045)}function KR(t){return t*Cx}const Mg=new Me;function Eg(t,e){const n=an(t,e,20),i=.15+an(t,e,21)*.25,r=.45+an(t,e,22)*.25;return Mg.setHSL(n,i,r),Mg.getHex()}function jR(t,e){const n=an(t,e,10)*Math.PI*2,i=an(t,e,11)*2-1,r=Math.sqrt(Math.max(0,1-i*i));return new A(Math.cos(n)*r,Math.sin(n)*r,i)}function ZR(t,e,n){const i=e===0,r=(t^(e+1)*2654435769)>>>0;if(i)return{id:"home",center:new A(0,0,0),radius:Cc,coreRadius:Cc-no,amplitude:1,chunkSpan:Math.max(1,Math.round(BR*2/be)),chunkHeight:kR,seed:r,gravity:zR,gravityRange:Sg,color:Eg(t,e)};const o=n*(.15+an(t,e,1)*.85),s=jR(t,e).multiplyScalar(Cc+Sg*2+n*(1+e*1)*(.85+an(t,e,12)*.3)),a=XR+Math.floor(an(t,e,5)*YR),l=Math.max(1,Math.round(a*qR)),c=o*Cx,u=Math.max(1,Math.round(c*2/be));return{id:"body"+e,center:s,radius:o,amplitude:l,chunkSpan:u,chunkHeight:a,seed:r,gravity:$R(o),gravityRange:KR(o),color:Eg(t,e)}}function JR(t){const e=t>>>0,n=HR+an(e,0,1)*GR,i=VR+Math.floor(an(e,0,2)*WR),r=[];for(let o=0;o<i;o++)r.push(ZR(e,o,n));return r}const yo=new Map;let Ks=!1;function Px(t,e,n,i){return t+"|"+e+"|"+n+"|"+i}function ff(t,e,n,i,r,o){const s=n>>Dn,a=r>>Dn,l=Px(t,e,s,a);let c=yo.get(l);c||(c=[],yo.set(l,c));const u=c.findIndex(f=>f[0]===n&&f[1]===i&&f[2]===r);u>=0?c[u][3]=o:c.push([n,i,r,o]),Ks=!0}function QR(t,e,n,i){return yo.get(Px(t,e,n,i))}function eC(){return[...yo.entries()]}function tC(t){if(yo.clear(),t)for(const[e,n]of t)yo.set(e,n);Ks=!1}function Ix(){yo.clear(),Ks=!1}function nC(){return Ks}function iC(){Ks=!0}function rC(){Ks=!1}let xp=[];function oC(t){xp=t}function sC(){xp=[]}const Pi={dir:new A(0,-1,0),g:0};function Vt(t){for(const e of xp)if(t.distanceTo(e.center)<=e.radius+e.gravityRange)return Pi.dir.copy(e.center).sub(t),Pi.dir.lengthSq()<1e-8?Pi.dir.set(0,-1,0):Pi.dir.normalize(),Pi.g=e.gravity,Pi;return Pi.dir.set(0,-1,0),Pi.g=0,Pi}const ks=4,St=128,Pc=ks*St,Ee={grassTop:0,grassSide:1,dirt:2,stone:3,sand:4,woodTop:5,woodSide:6,leaves:7,water:8,snowTop:9,snowSide:10,gravel:11,iron:12,titanium:13,crystal:14},ru={1:[Ee.grassTop,Ee.grassSide,Ee.dirt],2:[Ee.dirt,Ee.dirt,Ee.dirt],3:[Ee.stone,Ee.stone,Ee.stone],4:[Ee.sand,Ee.sand,Ee.sand],5:[Ee.woodTop,Ee.woodSide,Ee.woodTop],6:[Ee.leaves,Ee.leaves,Ee.leaves],7:[Ee.water,Ee.water,Ee.water],8:[Ee.snowTop,Ee.snowSide,Ee.dirt],9:[Ee.gravel,Ee.gravel,Ee.gravel],10:[Ee.iron,Ee.iron,Ee.iron],11:[Ee.titanium,Ee.titanium,Ee.titanium],12:[Ee.crystal,Ee.crystal,Ee.crystal]};function Eo(t){let e=t>>>0||1;return()=>(e^=e<<13,e>>>=0,e^=e>>17,e^=e<<5,e>>>=0,e/4294967296)}function Mi(t,e){const n=Math.max(0,Math.min(255,(t>>16&255)+e)),i=Math.max(0,Math.min(255,(t>>8&255)+e)),r=Math.max(0,Math.min(255,(t&255)+e));return`rgb(${n|0},${i|0},${r|0})`}function Fn(t,e,n,i,r,o,s){const a=Eo(i^e*31+n*17);t.fillStyle=Mi(i,0),t.fillRect(e,n,St,St);const l=Math.floor(St*St*o);for(let c=0;c<l;c++){const u=e+a()*St,f=n+a()*St,d=1+a()*s;t.fillStyle=Mi(i,(a()-.5)*2*r),t.fillRect(u,f,d,d)}}function aC(t,e,n){Fn(t,e,n,5020212,42,.5,3);const i=Eo(37205);for(let r=0;r<260;r++){const o=e+i()*St,s=n+i()*St,a=2+i()*5;t.fillStyle=Mi(5020212,i()<.5?34:-30),t.fillRect(o,s,1,a)}}function lC(t,e,n){Fn(t,e,n,8017205,30,.45,3);const i=Eo(20787),r=St*.28;for(let o=0;o<St;o++){const s=r*(.55+i()*.75);t.fillStyle=Mi(5020212,(i()-.5)*50),t.fillRect(e+o,n,1,s)}}function bg(t,e,n,i){Fn(t,e,n,7295783,20,.35,2);const r=Eo(i?1911:1912);if(i){const o=e+St/2,s=n+St/2;for(let a=St/2;a>2;a-=4+r()*4)t.strokeStyle=Mi(7295783,(r()-.5)*46),t.lineWidth=1+r()*2,t.beginPath(),t.arc(o,s,a,0,Math.PI*2),t.stroke()}else for(let o=0;o<70;o++){const s=e+r()*St;t.fillStyle=Mi(5981216,(r()-.5)*54),t.fillRect(s,n,1+r()*2,St)}}function cC(t,e,n){Fn(t,e,n,3111460,40,.6,4);const i=Eo(7855);for(let r=0;r<90;r++)t.fillStyle=Mi(1323791,0),t.fillRect(e+i()*St,n+i()*St,2+i()*4,2+i()*4)}function uC(t,e,n){Fn(t,e,n,2778052,16,.3,5)}function fC(t,e,n){Fn(t,e,n,9408387,30,.3,2);const i=Eo(39630);for(let r=0;r<90;r++){const o=e+i()*St,s=n+i()*St,a=2+i()*5;t.fillStyle=Mi(9408387,(i()-.5)*60),t.beginPath(),t.arc(o,s,a,0,Math.PI*2),t.fill()}}function xd(t,e,n,i,r,o){Fn(t,e,n,9079434,26,.5,3);const s=Eo(i);for(let a=0;a<r;a++){const l=e+8+s()*(St-20),c=n+8+s()*(St-20),u=4+s()*7;t.fillStyle=Mi(i,(s()-.5)*40),t.beginPath(),t.arc(l,c,u,0,Math.PI*2),t.fill(),o&&(t.fillStyle=Mi(i,90),t.fillRect(l-u*.3,c-u*.3,u*.5,u*.5))}}const dC={[Ee.grassTop]:aC,[Ee.grassSide]:lC,[Ee.dirt]:(t,e,n)=>Fn(t,e,n,8017205,34,.5,3),[Ee.stone]:(t,e,n)=>Fn(t,e,n,9079434,30,.55,3),[Ee.sand]:(t,e,n)=>Fn(t,e,n,14207370,22,.6,2),[Ee.woodTop]:(t,e,n)=>bg(t,e,n,!0),[Ee.woodSide]:(t,e,n)=>bg(t,e,n,!1),[Ee.leaves]:cC,[Ee.water]:uC,[Ee.snowTop]:(t,e,n)=>Fn(t,e,n,15528184,12,.5,3),[Ee.snowSide]:(t,e,n)=>Fn(t,e,n,14541806,16,.45,3),[Ee.gravel]:fC,[Ee.iron]:(t,e,n)=>xd(t,e,n,11565650,7,!1),[Ee.titanium]:(t,e,n)=>xd(t,e,n,13028566,5,!0),[Ee.crystal]:(t,e,n)=>xd(t,e,n,6547160,4,!0)};let Cn=null;function Lx(){if(Cn)return Cn;const t=document.createElement("canvas");t.width=t.height=Pc;const e=t.getContext("2d");e.imageSmoothingEnabled=!1,e.fillStyle="#000",e.fillRect(0,0,Pc,Pc);for(const n of Object.values(Ee)){const i=n%ks*St,r=Math.floor(n/ks)*St;dC[n](e,i,r)}return Cn=new qu(t),Cn.wrapS=Cn.wrapT=Vi,Cn.magFilter=Sn,Cn.minFilter=Wi,Cn.generateMipmaps=!0,Cn.anisotropy=4,Cn.colorSpace=Kn,Cn.needsUpdate=!0,Cn}const jl=1.5/Pc,Zl=1/ks;function Dx(t){const e=t%ks,n=Math.floor(t/ks);return{u0:e*Zl+jl,v0:1-(n+1)*Zl+jl,u1:(e+1)*Zl-jl,v1:1-n*Zl-jl}}let Jl=null;function hC(){return Jl||(Jl=new Si({map:Lx(),vertexColors:!0,side:Ki}),Jl)}const pC=`
varying vec3 vWorldPos;
varying vec3 vNormal;
void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPos = worldPos.xyz;
  vNormal = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`,mC=`
uniform float uTime;
uniform vec3  uSunDir;
uniform vec3  uSunColor;
uniform vec3  uSkyColor;
uniform vec3  uShallow;
uniform vec3  uDeep;
uniform vec3  uFogColor;
uniform float uFogNear;
uniform float uFogFar;

varying vec3 vWorldPos;
varying vec3 vNormal;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

void main() {
  vec2 p = vWorldPos.xz;
  float w1 = noise(p * 0.55 + vec2(uTime * 0.28, uTime * 0.16));
  float w2 = noise(p * 1.20 - vec2(uTime * 0.19, uTime * 0.33));
  float wave = (w1 + w2) * 0.5;

  float e = 0.35;
  float dx = noise((p + vec2(e, 0.0)) * 0.55 + vec2(uTime * 0.28, uTime * 0.16)) - w1;
  float dz = noise((p + vec2(0.0, e)) * 0.55 + vec2(uTime * 0.28, uTime * 0.16)) - w1;
  vec3 normal = normalize(vNormal + vec3(-dx, 0.0, -dz) * 3.2);

  vec3 viewDir = normalize(cameraPosition - vWorldPos);
  float facing = max(dot(normal, viewDir), 0.0);
  float fresnel = pow(1.0 - facing, 3.0);

  vec3 body = mix(uDeep, uShallow, wave * 0.65 + 0.2);
  vec3 color = mix(body, uSkyColor, clamp(fresnel * 0.9, 0.0, 0.85));

  vec3 halfway = normalize(uSunDir + viewDir);
  float spec = pow(max(dot(normal, halfway), 0.0), 90.0);
  color += uSunColor * spec * 1.6;

  float diffuse = clamp(dot(normal, uSunDir) * 0.5 + 0.6, 0.0, 1.2);
  color *= diffuse;

  float depth = length(cameraPosition - vWorldPos);
  float fogAmount = smoothstep(uFogNear, uFogFar, depth);
  color = mix(color, uFogColor, fogAmount);

  gl_FragColor = vec4(color, mix(0.86, 0.97, fresnel));
}
`,xh=new Map;function gC(t){let e=xh.get(t);if(e)return e;const n=(Kt[t]||Kt[yi]).top,i=Cs[t]??Cs[yi];return e=new ji({vertexShader:pC,fragmentShader:mC,transparent:!0,side:yn,uniforms:{uTime:{value:0},uSunDir:{value:new A(.4,.9,.2).normalize()},uSunColor:{value:new Me(16773840)},uSkyColor:{value:new Me(8000532)},uShallow:{value:new Me(n)},uDeep:{value:new Me(i)},uFogColor:{value:new Me(8000532)},uFogNear:{value:40},uFogFar:{value:100}}}),xh.set(t,e),e}function _C(t,{sunDir:e,sunColor:n,skyColor:i,fogColor:r,fogNear:o,fogFar:s}={}){for(const a of xh.values()){const l=a.uniforms;l.uTime.value+=t,e&&l.uSunDir.value.copy(e),n&&l.uSunColor.value.copy(n),i&&l.uSkyColor.value.copy(i),l.uFogColor.value.copy(r||i),o!==void 0&&(l.uFogNear.value=o),s!==void 0&&(l.uFogFar.value=s)}}const sn=[{dir:[0,1,0],verts:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]],type:0,dim:1},{dir:[0,-1,0],verts:[[0,0,1],[0,0,0],[1,0,0],[1,0,1]],type:2,dim:.55},{dir:[0,0,1],verts:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],type:1,dim:.8},{dir:[0,0,-1],verts:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],type:1,dim:.8},{dir:[1,0,0],verts:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],type:1,dim:.7},{dir:[-1,0,0],verts:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],type:1,dim:.7}],vC=[[[0,0],[0,1],[1,1],[1,0]],[[0,1],[0,0],[1,0],[1,1]],[[0,0],[1,0],[1,1],[0,1]],[[0,0],[1,0],[1,1],[0,1]],[[0,0],[1,0],[1,1],[0,1]],[[0,0],[1,0],[1,1],[0,1]]],fo=new Int8Array(sn.length*3),ho=new Uint8Array(sn.length*12),Ux=new Float32Array(sn.length),as=new Uint8Array(sn.length);for(let t=0;t<sn.length;t++){fo.set(sn[t].dir,t*3);for(let e=0;e<4;e++)ho.set(sn[t].verts[e],t*12+e*3);Ux[t]=sn[t].dim,as[t]=sn[t].type}const Ic=new Int8Array(sn.length*4*3),Lc=new Int8Array(sn.length*4*3),Dc=new Int8Array(sn.length*4*3);for(let t=0;t<sn.length;t++){const e=sn[t].dir,n=e[0]!==0?0:e[1]!==0?1:2,i=[0,1,2].filter(r=>r!==n);for(let r=0;r<4;r++){const o=sn[t].verts[r],s=e.slice(),a=e.slice(),l=e.slice(),c=o[i[0]]*2-1,u=o[i[1]]*2-1;s[i[0]]+=c,a[i[1]]+=u,l[i[0]]+=c,l[i[1]]+=u;const f=(t*4+r)*3;Ic.set(s,f),Lc.set(a,f),Dc.set(l,f)}}const xC=[.42,.63,.82,1],Nx=40,vs=new Float32Array(Nx*9);for(const t of Object.keys(Kt)){const e=Number(t),n=Kt[e],i=[n.top,n.side,n.bottom];for(let r=0;r<3;r++){const o=i[r];vs[e*9+r*3]=(o>>16&255)/255,vs[e*9+r*3+1]=(o>>8&255)/255,vs[e*9+r*3+2]=(o&255)/255}}const Fx=14,yC=ru[3],SC=.12,oi=be*Ws*be*3,Ql=new Float32Array(oi*12),ec=new Uint8Array(oi*12),sr=new Uint32Array(oi*6),Ln=new A,tc=new Float32Array(oi*12),nc=new Float32Array(oi*12),yd=new Float32Array(oi*8),ic=new Uint8Array(oi*12),ar=new Uint32Array(oi*6),rc=new Float32Array(oi*12),oc=new Float32Array(oi*12),lr=new Uint32Array(oi*6),sc=new A;function Sd(t){return t!==rt&&!Fa(t)}function Ox(t,e,n,i,r){const o=t.getChunk(e,n);return o===void 0?null:{chunk:o,nuNeg:t.getChunk(e-1,n),nuPos:t.getChunk(e+1,n),nvNeg:t.getChunk(e,n-1),nvPos:t.getChunk(e,n+1)}}function Bx(t,e,n,i,r,o,s){return(a,l,c)=>{if(l<0)return Fx;if(l>=e)return rt;let u=n;return a<0?(u=i,a=Un):a>=be?(u=r,a=0):c<0?(u=o,c=Un):c>=be&&(u=s,c=0),u===void 0?rt:u[t.blockIndex(a,l,c)]}}function MC(t,e,n,i){const r=t.faces[e],o=Ox(r,n,i,t.chunkHeight);if(!o)return null;const{chunk:s,nuNeg:a,nuPos:l,nvNeg:c,nvPos:u}=o,f=t.chunkHeight,d=Bx(r,f,s,a,l,c,u),p=n*be-t.halfExtent,g=i*be-t.halfExtent;let _=0,m=0,h=0;for(let v=0;v<be;v++)for(let S=0;S<be;S++){const C=S+be*f*v;for(let E=0;E<f;E++){const R=s[C+be*E];if(R===rt)continue;const L=Fa(R),w=(R<Nx?R:Fx)*9;for(let y=0;y<6;y++){const I=y*3,F=d(S+fo[I],E+fo[I+1],v+fo[I+2]);if(F!==rt){const te=Fa(F);if(!L&&!te||L&&F===R||L&&!te)continue}const k=Ux[y]+(Tx(p+S,E,g+v,y)-.5)*SC,G=w+as[y]*3;let W=vs[G]*k*255,V=vs[G+1]*k*255,$=vs[G+2]*k*255;W=W<0?0:W>255?255:W,V=V<0?0:V>255?255:V,$=$<0?0:$>255?255:$;const X=y*12;for(let te=0;te<4;te++){const he=X+te*3,ge=p+S+ho[he],Xe=t.coreRadius+E+ho[he+1],Ze=g+v+ho[he+2];In(e,ge,Ze,Xe,t.halfExtent,t.center,Ln),Ql[m]=Ln.x,Ql[m+1]=Ln.y,Ql[m+2]=Ln.z,ec[m]=W,ec[m+1]=V,ec[m+2]=$,m+=3}sr[h]=_,sr[h+1]=_+2,sr[h+2]=_+1,sr[h+3]=_,sr[h+4]=_+3,sr[h+5]=_+2,h+=6,_+=4}}}if(_===0)return null;const x=new Et;return x.setAttribute("position",new nt(Ql.slice(0,m),3)),x.setAttribute("color",new nt(ec.slice(0,m),3,!0)),x.setIndex(new nt(_>65535?sr.slice(0,h):new Uint16Array(sr.subarray(0,h)),1)),new lt(x,EC())}let Md=null;function EC(){return Md||(Md=new Vn({vertexColors:!0})),Md}function bC(t,e,n,i){const r=t.faces[e],o=Ox(r,n,i,t.chunkHeight);if(!o)return null;const{chunk:s,nuNeg:a,nuPos:l,nvNeg:c,nvPos:u}=o,f=t.chunkHeight,d=Bx(r,f,s,a,l,c,u),p=n*be-t.halfExtent,g=i*be-t.halfExtent,{uAxis:_,vAxis:m}=_p(e),h=[null,null,null,null,null,null];h[2]=m,h[3]={x:-m.x,y:-m.y,z:-m.z},h[4]=_,h[5]={x:-_.x,y:-_.y,z:-_.z};let x=0,v=0,S=0,C=0,E=0,R=0,L=0,w=null;for(let I=0;I<be;I++)for(let F=0;F<be;F++){const k=F+be*f*I;for(let G=0;G<f;G++){const W=s[k+be*G];if(W===rt)continue;const V=Fa(W),$=Gn(W);$&&w===null&&(w=W);const X=ru[W]||yC;for(let te=0;te<6;te++){const he=te*3,ge=F+fo[he],Xe=G+fo[he+1],Ze=I+fo[he+2],Y=d(ge,Xe,Ze);if(Y!==rt){const Te=Fa(Y);if(!V&&!Te||V&&Y===W||V&&!Te)continue}const Q=[0,0,0,0];for(let Te=0;Te<4;Te++){const Re=(te*4+Te)*3,ct=Sd(d(F+Ic[Re],G+Ic[Re+1],I+Ic[Re+2])),ye=Sd(d(F+Lc[Re],G+Lc[Re+1],I+Lc[Re+2]));let Ye;if(ct&&ye)Ye=3;else{const Ne=Sd(d(F+Dc[Re],G+Dc[Re+1],I+Dc[Re+2]));Ye=(ct?1:0)+(ye?1:0)+(Ne?1:0)}Q[Te]=xC[3-Ye]}const pe=Tx(p+F,G,g+I,te),re=$?null:Dx(X[as[te]]),ke=vC[te],Fe=pe*4|0,Ke=as[te]!==1,U=te*12;for(let Te=0;Te<4;Te++){const Re=U+Te*3,ct=p+F+ho[Re],ye=t.coreRadius+G+ho[Re+1],Ye=g+I+ho[Re+2];In(e,ct,Ye,ye,t.halfExtent,t.center,Ln);let Ne,Le,pt;if(as[te]===1){const P=h[te];Ne=P.x,Le=P.y,pt=P.z}else{sc.copy(Ln).sub(t.center).normalize();const P=as[te]===0?1:-1;Ne=sc.x*P,Le=sc.y*P,pt=sc.z*P}if($)rc[R]=Ln.x,rc[R+1]=Ln.y,rc[R+2]=Ln.z,oc[R]=Ne,oc[R+1]=Le,oc[R+2]=pt,R+=3;else{tc[v]=Ln.x,tc[v+1]=Ln.y,tc[v+2]=Ln.z,nc[v]=Ne,nc[v+1]=Le,nc[v+2]=pt;const P=Q[Te]*255;ic[v]=P,ic[v+1]=P,ic[v+2]=P,v+=3;const M=Ke?(Te+Fe)%4:Fe&1?[1,0,3,2][Te]:Te,H=ke[M][0],j=ke[M][1];yd[C]=re.u0+H*(re.u1-re.u0),yd[C+1]=re.v0+j*(re.v1-re.v0),C+=2}}$?(lr[L]=E,lr[L+1]=E+2,lr[L+2]=E+1,lr[L+3]=E,lr[L+4]=E+3,lr[L+5]=E+2,L+=6,E+=4):(ar[S]=x,ar[S+1]=x+2,ar[S+2]=x+1,ar[S+3]=x,ar[S+4]=x+3,ar[S+5]=x+2,S+=6,x+=4)}}}if(x===0&&E===0)return null;const y=new jt;if(x>0){const I=new Et;I.setAttribute("position",new nt(tc.slice(0,v),3)),I.setAttribute("normal",new nt(nc.slice(0,v),3)),I.setAttribute("uv",new nt(yd.slice(0,C),2)),I.setAttribute("color",new nt(ic.slice(0,v),3,!0)),I.setIndex(new nt(x>65535?ar.slice(0,S):new Uint16Array(ar.subarray(0,S)),1));const F=new lt(I,hC());F.castShadow=!0,F.receiveShadow=!0,y.add(F)}if(E>0){const I=new Et;I.setAttribute("position",new nt(rc.slice(0,R),3)),I.setAttribute("normal",new nt(oc.slice(0,R),3)),I.setIndex(new nt(E>65535?lr.slice(0,L):new Uint16Array(lr.subarray(0,L)),1));const F=new lt(I,gC(w??yi));F.renderOrder=1,y.add(F)}return y}function wC(t,e,n,i){return Zv()?bC(t,e,n,i):MC(t,e,n,i)}const vi=new Map;function kx(t,e,n,i){return t.id+","+e+","+n+","+i}function yp(t){if(oe.remove(t),t.isGroup)for(const e of t.children)e.geometry.dispose();else t.geometry.dispose()}function Hi(t,e,n,i){const r=kx(t,e,n,i),o=vi.get(r);o&&(yp(o),vi.delete(r));const s=wC(t,e,n,i);s&&(oe.add(s),vi.set(r,s))}function TC(t,e,n,i){return vi.has(kx(t,e,n,i))}let wa=[];function AC(t){const e=new Map(t.map(n=>[n.id,n]));wa=[...vi.keys()].filter(n=>e.has(n.split(",")[0]))}function RC(){return wa.length}function CC(t,e){if(wa.length===0)return;const n=new Map(t.map(r=>[r.id,r])),i=performance.now()+e;for(;wa.length>0;){const r=wa.pop(),[o,s,a,l]=r.split(","),c=n.get(o);if(c&&Hi(c,s,Number(a),Number(l)),performance.now()>=i)return}}function wg(t){const e=t.id+",";for(const[n,i]of[...vi])n.startsWith(e)&&(yp(i),vi.delete(n));for(const n of Rr)t.faces[n].clearChunks()}function PC(){for(const t of vi.values())yp(t);vi.clear()}function IC(){return vi.size}function zx(){return Cr.length+Pr.length}function LC(){return(Mo()+2)*be}function DC(t,e){const n=LC();let i=null,r=1/0;for(const o of t){const s=Math.abs(e.distanceTo(o.center)-o.radius);s<r&&s<=n&&(r=s,i=o)}return i}function ls(t,e){return Math.max(0,Math.min(t.chunkSpan-1,e))}function Sp(t,e,n){return{cx:ls(t,Math.floor((e+t.halfExtent)/be)),cv:ls(t,Math.floor((n+t.halfExtent)/be))}}function UC(t,e){const n=be,i=t.halfExtent+n,r=[];for(const o of Rr){const s=sR(e,t.center,t.halfExtent,o);s&&(Math.abs(s.u)>i||Math.abs(s.v)>i||r.push({faceId:o,u:s.u,v:s.v}))}return r}let ur=null,yh=null,Sh=null,Mh=null,Cr=[],Pr=[];function NC(t,e){Cr.length=0,Pr.length=0;const n=Mo(),i=n+1;for(const{faceId:r,u:o,v:s}of UC(t,e)){const{cx:a,cv:l}=Sp(t,o,s),c=t.faces[r];for(let u=-i;u<=i;u++)for(let f=-i;f<=i;f++){const d=a+u,p=l+f;if(d<0||d>=t.chunkSpan||p<0||p>=t.chunkSpan)continue;const g=u*u+f*f;c.hasChunk(d,p)||Cr.push({planet:t,faceId:r,cx:d,cv:p,dist:g}),Math.abs(u)<=n&&Math.abs(f)<=n&&!TC(t,r,d,p)&&Pr.push({planet:t,faceId:r,cx:d,cv:p,dist:g})}}Cr.sort((r,o)=>o.dist-r.dist),Pr.sort((r,o)=>o.dist-r.dist)}function FC(t){if(Cr.length===0&&Pr.length===0)return;const e=performance.now()+t;for(;Cr.length>0;){const{planet:n,faceId:i,cx:r,cv:o}=Cr.pop();if(n.faces[i].hasChunk(r,o)||n.generateChunk(n,i,r,o),performance.now()>=e)return}for(;Pr.length>0;){const{planet:n,faceId:i,cx:r,cv:o}=Pr.pop(),s=n.faces[i];if(s.hasChunk(r,o)||n.generateChunk(n,i,r,o),r>0&&!s.hasChunk(r-1,o)&&n.generateChunk(n,i,r-1,o),r<n.chunkSpan-1&&!s.hasChunk(r+1,o)&&n.generateChunk(n,i,r+1,o),o>0&&!s.hasChunk(r,o-1)&&n.generateChunk(n,i,r,o-1),o<n.chunkSpan-1&&!s.hasChunk(r,o+1)&&n.generateChunk(n,i,r,o+1),Hi(n,i,r,o),performance.now()>=e)return}}function bo(){ur=null,yh=null,Sh=null,Mh=null,Cr.length=0,Pr.length=0}function Tg(t,e,n){const i=DC(t,e);if(!i){if(ur!==null){const a=t.find(l=>l.id===ur);a&&wg(a)}bo();return}if(i.id!==ur&&ur!==null){const a=t.find(l=>l.id===ur);a&&a!==i&&wg(a)}const r=cl(e,i.center,i.halfExtent),{cx:o,cv:s}=Sp(i,r.u,r.v);(i.id!==ur||r.faceId!==yh||o!==Sh||s!==Mh)&&(ur=i.id,yh=r.faceId,Sh=o,Mh=s,NC(i,e)),FC(n)}function OC(t,e,n,i,r){const o=t.faces[e];for(let s=-r-1;s<=r+1;s++)for(let a=-r-1;a<=r+1;a++){const l=ls(t,n+s),c=ls(t,i+a);o.hasChunk(l,c)||t.generateChunk(t,e,l,c)}for(let s=-r;s<=r;s++)for(let a=-r;a<=r;a++){const l=ls(t,n+s),c=ls(t,i+a);Hi(t,e,l,c)}}function Hx(t,e,n,i,r){const{cx:o,cv:s}=Sp(t,n,i);OC(t,e,o,s,r)}let Sr=[];const Ag=new A;function Mp(){return Sr}function Ta(){return Mp()}function Ep(){return Sr=JR(Gh()).map(e=>{const n=xR({center:e.center,radius:e.radius,amplitude:e.amplitude,chunkSpan:e.chunkSpan,chunkHeight:e.chunkHeight,seed:e.seed,coreRadius:e.coreRadius});n.id=e.id,n.color=e.color,n.gravity=e.gravity,n.gravityRange=e.gravityRange;const i=e.id==="home"?OR:Ax;return n.generateChunk=(r,o,s,a)=>{i(r,o,s,a);const l=QR(r.id,o,s,a);if(!l)return;const c=r.faces[o];for(const[u,f,d,p]of l)c.writeBlockRaw(u,f,d,p)},n}),Hx(Sr[0],"py",0,0,1),bo(),oC(Sr.map(e=>({center:e.center,radius:e.radius,gravityRange:e.gravityRange,gravity:e.gravity}))),Sr[0]}function bp(){PC(),bo(),Sr=[],sC()}function BC(){return Sr[0]||null}function wp(){return Sr.map(t=>({id:t.id,center:t.center,radius:t.radius,color:t.color}))}function kC(t){if(t==="home")return"Home";const e=/^body(\d+)$/.exec(t);return e?`Body ${parseInt(e[1],10)+1}`:t}const zC=64;function HC(t,e,n,i){const r=t.faces[e],o=Math.floor((n+t.halfExtent)/be),s=Math.floor((i+t.halfExtent)/be);r.hasChunk(o,s)||t.generateChunk(t,e,o,s)}function GC(t,e,n,i){for(const[r,o]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]]){const s=n+r,a=i+o;HC(t,e,s,a);const l=t.faces[e],c=Math.floor(s+t.halfExtent),u=Math.floor(a+t.halfExtent);let f=!0;for(let d=t.chunkHeight-1;d>=0;d--){const p=l.getBlock(c,d,u);if(p!==rt){f=!Gn(p);break}}if(!f)return!1}return!0}function VC(t){if(t===0)return[[0,0]];const e=[];for(let n=-t;n<=t;n++)e.push([n,-t],[n,t]);for(let n=-t+1;n<=t-1;n++)e.push([-t,n],[t,n]);return e}function Gx(t,e,n,i){for(let r=0;r<=zC;r++)for(const[o,s]of VC(r)){const a=n+o,l=i+s;if(GC(t,e,a,l))return{u:a,v:l}}return{u:n,v:i}}function WC(t){const e=BC(),{u:n,v:i}=Gx(e,"py",0,0);return Tp(e,"py",n,i,t)}function XC(t,e,n,i){const r=t.faces[e],o=Math.floor(n+t.halfExtent),s=Math.floor(i+t.halfExtent);for(let a=t.chunkHeight-1;a>=0;a--)if(r.getBlock(o,a,s)!==rt)return a;return 0}function Tp(t,e,n,i,r){const o=XC(t,e,n,i),s=t.coreRadius+o+1;return In(e,n,i,s,t.halfExtent,t.center,r)}function df(t){let e=null,n=1/0;for(const i of Mp()){const r=Math.abs(t.distanceTo(i.center)-i.radius);r<n&&(n=r,e=i)}return e}function YC(t,e){const n=df(t);if(!n)return null;const{faceId:i,u:r,v:o}=cl(t,n.center,n.halfExtent);return Tp(n,i,r,o,e)}new A;function Ap(t,e){const n=df(t);if(!n)return null;const{faceId:i,u:r,v:o}=cl(t,n.center,n.halfExtent),{u:s,v:a}=Gx(n,i,Math.round(r),Math.round(o));return Tp(n,i,s,a,e)}function wo(t,e,n){Ag.set(t,e,n);let i=null,r=1/0;for(const o of Mp()){const{faceId:s,u:a,v:l,radius:c}=cl(Ag,o.center,o.halfExtent),u=Math.floor(c-o.coreRadius);if(!(u<-8||u>=o.chunkHeight+8)&&c<r){r=c;const f=o.faces[s],d=Math.floor(a+o.halfExtent),p=Math.floor(l+o.halfExtent);i={planet:o,store:f,faceId:s,au:d,ri:u,av:p}}}return i}function qC(t,e,n){const i=wo(t+.5,e+.5,n+.5);return i?i.store.getBlock(i.au,i.ri,i.av):rt}function Vx(t,e,n){return wo(t,e,n)}function $C(t){return t?t.store.getBlock(t.au,t.ri,t.av):rt}const Rg=new A;function KC(t){const{planet:e,faceId:n,au:i,ri:r,av:o}=t,s=i-e.halfExtent+.5,a=o-e.halfExtent+.5;return In(n,s,a,e.coreRadius+r+.5,e.halfExtent,e.center,Rg),Rg}function jC(t,e){if(!Rp(t,e))return!1;if(ff(t.planet.id,t.faceId,t.au,t.ri,t.av,e),Ya){const n=KC(t);Ya(n.x,n.y,n.z,e)}return!0}const ZC=4;function JC(t){return!!t&&t.ri<ZC}const QC=Array.from({length:8},()=>new A);function Wx(t,e=QC){const{planet:n,faceId:i,au:r,ri:o,av:s}=t,a=r-n.halfExtent,l=a+1,c=s-n.halfExtent,u=c+1,f=n.coreRadius+o,d=f+1,{center:p,halfExtent:g}=n;return In(i,a,c,f,g,p,e[0]),In(i,l,c,f,g,p,e[1]),In(i,a,u,f,g,p,e[2]),In(i,l,u,f,g,p,e[3]),In(i,a,c,d,g,p,e[4]),In(i,l,c,d,g,p,e[5]),In(i,a,u,d,g,p,e[6]),In(i,l,u,d,g,p,e[7]),e}function Xa(t,e,n){const i=wo(t,e,n);if(!i)return!1;const r=i.store.getBlock(i.au,i.ri,i.av);return r!==rt&&!Gn(r)&&r!==rn}function e3(t,e,n){const i=wo(t,e,n);return i?i.store.hasChunk(i.au>>Dn,i.av>>Dn):!0}let Ya=null;function t3(t){Ya=t}function Rp(t,e){if(!t)return!1;const{planet:n,faceId:i,store:r}=t,o=r.writeBlockRaw(t.au,t.ri,t.av,e);if(!o)return!1;const{cx:s,cz:a,lx:l,lz:c}=o,u=n.chunkSpan;return Hi(n,i,s,a),l===0&&s>0&&Hi(n,i,s-1,a),l===Un&&s<u-1&&Hi(n,i,s+1,a),c===0&&a>0&&Hi(n,i,s,a-1),c===Un&&a<u-1&&Hi(n,i,s,a+1),!0}function n3(t,e,n,i){const r=wo(t+.5,e+.5,n+.5);return Rp(r,i)?(ff(r.planet.id,r.faceId,r.au,r.ri,r.av,i),Ya&&Ya(t,e,n,i),!0):!1}function i3(t,e,n,i){const r=wo(t+.5,e+.5,n+.5);Rp(r,i)&&ff(r.planet.id,r.faceId,r.au,r.ri,r.av,i)}function Xx(t,e){const n=Math.floor(t.x-e),i=Math.ceil(t.x+e),r=Math.floor(t.y-e),o=Math.ceil(t.y+e),s=Math.floor(t.z-e),a=Math.ceil(t.z+e),l=e*e,c=new Map,u=(f,d,p,g)=>{p<0||p>=f.chunkSpan||g<0||g>=f.chunkSpan||c.set(f.id+"|"+d+"|"+p+"|"+g,{planet:f,faceId:d,cx:p,cv:g})};for(let f=n;f<=i;f++)for(let d=r;d<=o;d++)for(let p=s;p<=a;p++){const g=f+.5-t.x,_=d+.5-t.y,m=p+.5-t.z;if(g*g+_*_+m*m>l)continue;const h=wo(f+.5,d+.5,p+.5);if(!h)continue;const x=h.store.writeBlockRaw(h.au,h.ri,h.av,rt);if(!x)continue;const{planet:v,faceId:S}=h;ff(v.id,S,h.au,h.ri,h.av,rt),u(v,S,x.cx,x.cz),x.lx===0&&u(v,S,x.cx-1,x.cz),x.lx===Un&&u(v,S,x.cx+1,x.cz),x.lz===0&&u(v,S,x.cx,x.cz-1),x.lz===Un&&u(v,S,x.cx,x.cz+1)}for(const{planet:f,faceId:d,cx:p,cv:g}of c.values())Hi(f,d,p,g)}function hf(t,e=!1){const n=t[0].index!==null,i=new Set(Object.keys(t[0].attributes)),r=new Set(Object.keys(t[0].morphAttributes)),o={},s={},a=t[0].morphTargetsRelative,l=new Et;let c=0;for(let u=0;u<t.length;++u){const f=t[u];let d=0;if(n!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;s[p]===void 0&&(s[p]=[]),s[p].push(f.morphAttributes[p])}if(e){let p;if(n)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(n){let u=0;const f=[];for(let d=0;d<t.length;++d){const p=t[d].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+u);u+=t[d].attributes.position.count}l.setIndex(f)}for(const u in o){const f=Cg(o[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(const u in s){const f=s[u][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<f;++d){const p=[];for(let _=0;_<s[u].length;++_)p.push(s[u][_][d]);const g=Cg(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Cg(t){let e,n,i,r=-1,o=0;for(let c=0;c<t.length;++c){const u=t[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=u.itemSize),n!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=u.count*n}const s=new e(o),a=new nt(s,n,i);let l=0;for(let c=0;c<t.length;++c){const u=t[c];if(u.isInterleavedBufferAttribute){const f=l/n;for(let d=0,p=u.count;d<p;d++)for(let g=0;g<n;g++){const _=u.getComponent(d,g);a.setComponent(d+f,g,_)}}else s.set(u.array,l);l+=u.count*n}return r!==void 0&&(a.gpuType=r),a}const Cp={ghoul:{label:"Ghoul",hp:30,speed:3.8,height:1,radius:.28,jumpForce:8.5,attackRange:8,minChaseRange:1.6,meleeRange:1.8,meleeDmg:12,meleeCooldown:3.5,meleeStyle:"lunge",throwRange:7,throwDmg:8,throwCooldown:4,throwSpeed:14,projectile:"boneShard",scoreValue:20,heartsDropped:2,weaponDropChance:.16,deathStyle:"launch",colors:{skin:9349226,shirt:2763302,shorts:3815988,boots:1118481,hair:1710618,glasses:16720418}},wretch:{label:"Wretch",hp:60,speed:2.5,height:1.9,radius:.4,jumpForce:8,attackRange:12,minChaseRange:2.2,meleeRange:2.4,meleeDmg:25,meleeCooldown:5,meleeStyle:"slam",throwRange:10,throwDmg:10,throwCooldown:3.5,throwSpeed:10,projectile:"rockChunk",scoreValue:50,heartsDropped:4,weaponDropChance:.32,deathStyle:"faceplant",colors:{skin:7035466,shirt:3811866,shorts:2760726,boots:1709072,hair:2761760,glasses:657930}},husk:{label:"Husk",hp:40,speed:3,height:1,radius:.3,jumpForce:8.2,attackRange:9,minChaseRange:1.8,meleeRange:2,meleeDmg:14,meleeCooldown:3.8,meleeStyle:"swipe",throwRange:8,throwDmg:7,throwCooldown:3.6,throwSpeed:12,projectile:"dustRock",scoreValue:28,heartsDropped:2,weaponDropChance:.18,deathStyle:"collapse",colors:{skin:13218954,shirt:9073488,shorts:8020546,boots:5917234,hair:10126688,glasses:1707786}},shardStalker:{label:"Shard Stalker",hp:45,speed:3.2,height:1.15,radius:.3,jumpForce:8.6,attackRange:10,minChaseRange:2,meleeRange:2,meleeDmg:16,meleeCooldown:3.6,meleeStyle:"lunge",throwRange:9,throwDmg:9,throwCooldown:3.4,throwSpeed:15,projectile:"crystalShard",scoreValue:34,heartsDropped:3,weaponDropChance:.22,deathStyle:"shatter",colors:{skin:3813230,shirt:2366546,shorts:1840704,boots:1183280,hair:5918638,glasses:6743807}},cinderfiend:{label:"Cinderfiend",hp:55,speed:2.8,height:1.3,radius:.35,jumpForce:7.9,attackRange:11,minChaseRange:2.2,meleeRange:2.2,meleeDmg:20,meleeCooldown:4.2,meleeStyle:"slam",throwRange:10,throwDmg:11,throwCooldown:3.2,throwSpeed:13,projectile:"ember",scoreValue:40,heartsDropped:3,weaponDropChance:.26,deathStyle:"incinerate",colors:{skin:1840148,shirt:1314575,shorts:1051660,boots:657416,hair:1708048,glasses:16742938}},frostbiter:{label:"Frostbiter",hp:42,speed:3.6,height:1.05,radius:.3,jumpForce:8.8,attackRange:9,minChaseRange:1.7,meleeRange:1.9,meleeDmg:15,meleeCooldown:3.3,meleeStyle:"swipe",throwRange:8,throwDmg:8,throwCooldown:3.5,throwSpeed:16,projectile:"iceShard",scoreValue:30,heartsDropped:2,weaponDropChance:.2,deathStyle:"freeze",colors:{skin:11463413,shirt:8374748,shorts:7321804,boots:4886435,hair:15793151,glasses:10352639}},bloatspore:{label:"Bloatspore",hp:50,speed:2.3,height:1.2,radius:.38,jumpForce:7.6,attackRange:10,minChaseRange:2.4,meleeRange:2.1,meleeDmg:18,meleeCooldown:4.5,meleeStyle:"lunge",throwRange:9,throwDmg:10,throwCooldown:3.8,throwSpeed:11,projectile:"sporePod",scoreValue:36,heartsDropped:3,weaponDropChance:.24,deathStyle:"dissolve",colors:{skin:8034890,shirt:5913194,shorts:4860506,boots:2759216,hair:9088586,glasses:14280778}}},pf=new Si({vertexColors:!0}),r3=new Si({vertexColors:!0,emissive:16729156,emissiveIntensity:.8}),Yx=[[.6,.7,.3,0,.9+.35,0,"shirt"],[.6,.45,.3,0,.9-.225+.05,0,"shorts"],[.5,.5,.5,0,.9+.7+.25,0,"skin"],[.5,.12,.5,0,.9+.7+.56,0,"hair"],[.18,.08,.06,-.13,.9+.7+.28,.28,"glasses"],[.18,.08,.06,.13,.9+.7+.28,.28,"glasses"],[.08,.04,.06,0,.9+.7+.28,.28,"glasses"],[.2,.6,.2,-.4,.9+.3,0,"shirt"],[.2,.6,.2,.4,.9+.3,0,"shirt"],[.25,.6,.25,-.18,.3,0,"shorts"],[.25,.6,.25,.18,.3,0,"shorts"],[.27,.18,.32,-.18,.09,.03,"boots"],[.27,.18,.32,.18,.09,.03,"boots"]],o3={ghoul:[[.11,.24,.11,-.4,.78,.06,"boots"],[.11,.24,.11,.4,.78,.06,"boots"],[.5,.55,.06,0,1.3,-.2,"shirt"]],wretch:[[.32,.22,.34,-.42,1.55,0,"shirt"],[.32,.22,.34,.42,1.55,0,"shirt"],[.06,.16,.06,-.1,1.62,.3,"boots",null,"cone"],[.06,.16,.06,.1,1.62,.3,"boots",null,"cone"]],husk:[[.08,.5,.06,-.3,.55,.16,"shirt"],[.08,.46,.06,.32,.5,-.12,"shirt"],[.52,.14,.52,0,2.02,0,"hair"]],shardStalker:[[.09,.42,.09,-.4,1.7,-.05,"glasses",[0,0,.55],"octahedron"],[.09,.42,.09,.4,1.7,-.05,"glasses",[0,0,-.55],"octahedron"],[.11,.5,.11,0,2.28,0,"glasses",[.35,0,0],"octahedron"]],cinderfiend:[[.07,.22,.07,-.14,2.18,.05,"glasses",[.4,0,.15],"cone"],[.07,.22,.07,.14,2.18,.05,"glasses",[.4,0,-.15],"cone"],[.5,.5,.05,0,1.25,.18,"glasses"],[.1,.55,.1,-.4,1.2,.14,"glasses"]],frostbiter:[[.08,.35,.08,-.15,1.7,-.24,"hair",[-.3,0,.2],"octahedron"],[.08,.35,.08,.15,1.7,-.24,"hair",[-.3,0,-.2],"octahedron"],[.06,.2,.06,0,1.55,.28,"hair",[.5,0,0],"cone"]],bloatspore:[[.72,.56,.5,0,1.25,0,"shirt",null,"sphere"],[.64,.16,.64,0,2.16,0,"shirt"],[.15,.22,.13,-.28,1.1,-.24,"glasses",null,"sphere"],[.15,.22,.13,.28,1.1,-.24,"glasses",null,"sphere"]]},Pg=new Map;function s3(t,e,n,i){let r;switch(t){case"cone":r=new np(Math.max(e,i)*.5,n,6);break;case"octahedron":r=new ka(Math.max(e,n,i)*.5);break;case"sphere":r=new Lr(Math.max(e,n,i)*.5,8,6);break;default:r=new Zt(e,n,i);break}return r.index?r.toNonIndexed():r}function a3(t,e,n,i,r,o){o&&(o[0]&&t.rotateX(o[0]),o[1]&&t.rotateY(o[1]),o[2]&&t.rotateZ(o[2])),t.translate(e,n,i);const s=new Me(r),a=t.getAttribute("position").count,l=new Float32Array(a*3);for(let c=0;c<a;c++)l[c*3]=s.r,l[c*3+1]=s.g,l[c*3+2]=s.b;return t.setAttribute("color",new nt(l,3)),t}function qx(t,e,n){const i=t.map(([o,s,a,l,c,u,f,d,p])=>a3(s3(p,o*n,s*n,a*n),l*n,c*n,u*n,e[f],d)),r=hf(i,!1);for(const o of i)o.dispose();return r}const l3=2.22,c3=1.9;function u3(t,e=1){return qx(Yx,t,e)}function f3(t,e){const n=e.height/c3,i=o3[t]||[];return qx([...Yx,...i],e.colors,n)}function d3(t,e){let n=Pg.get(t);n||(n=f3(t,e),Pg.set(t,n));const i=new lt(n,pf);return i.castShadow=!0,i.receiveShadow=!0,i}const Ig={boneShard:{geo:()=>new Zt(.09,.4,.09),color:15260864},rockChunk:{geo:()=>new Zc(.22),color:7035466},dustRock:{geo:()=>new Zc(.17),color:13218954},crystalShard:{geo:()=>new ka(.19),color:9427199,emissive:1727098},ember:{geo:()=>new Lr(.15,8,6),color:16742938,emissive:11154176},iceShard:{geo:()=>new ka(.18),color:14219007,emissive:2779770},sporePod:{geo:()=>new Lr(.17,8,6),color:14280778,emissive:4872720}},Lg=new Map;function h3(t){let e=Lg.get(t);if(!e){const n=Ig[t]||Ig.rockChunk,i=n.geo(),r=new Si(n.emissive?{color:n.color,emissive:n.emissive,emissiveIntensity:.9}:{color:n.color});e={geo:i,mat:r},Lg.set(t,e)}return e}function p3(t){const{geo:e,mat:n}=h3(t);return new lt(e,n)}const $x="blocksProfile",ro={shirt:[{name:"Crimson",hex:12597547},{name:"Ocean",hex:2060210},{name:"Forest",hex:3050286},{name:"Violet",hex:8207541},{name:"Sunflower",hex:14723355},{name:"Slate",hex:4212815}],shorts:[{name:"Denim",hex:2902652},{name:"Khaki",hex:11905144},{name:"Charcoal",hex:2829099},{name:"Rust",hex:10242590},{name:"White",hex:15790320},{name:"Emerald",hex:2062933}],skin:[{name:"Porcelain",hex:16176573},{name:"Sand",hex:15251852},{name:"Honey",hex:13208922},{name:"Umber",hex:9263669},{name:"Cocoa",hex:6043426},{name:"Ebony",hex:3875863}],hair:[{name:"Black",hex:1447446},{name:"Brown",hex:4859904},{name:"Blonde",hex:14201946},{name:"Ginger",hex:11882522},{name:"Silver",hex:13158600},{name:"Bubblegum",hex:15033256}]},Kx=Object.keys(ro),jx={name:"",shirt:0,shorts:0,skin:0,hair:1};let Yi={...jx};function Dg(){return Yi}function Pp(t){const e={...jx,...t||{}};for(const n of Kx){const i=Number(e[n]);e[n]=Number.isInteger(i)&&i>=0&&i<ro[n].length?i:0}return e.name=String(e.name||"").slice(0,20),e}function m3(t){Yi=Pp(t);try{localStorage.setItem($x,JSON.stringify(Yi))}catch{}return Yi}function g3(){let t=null;try{t=JSON.parse(localStorage.getItem($x))}catch{}return Yi=Pp(t),Yi.name||(Yi.name="Player "+Math.floor(100+Math.random()*900)),Yi}function Ug(t=Yi){return{shirt:t.shirt,shorts:t.shorts,skin:t.skin,hair:t.hair}}function _3(t){const e=Pp(t);return{shirt:ro.shirt[e.shirt].hex,shorts:ro.shorts[e.shorts].hex,skin:ro.skin[e.skin].hex,hair:ro.hair[e.hair].hex,boots:2763306,glasses:2236962}}const v3=Ei/l3,Ng=Ei+.45,pa=256,Zx=72,cn=new Map;function Ip(t){const n=t.tagCanvas.getContext("2d");if(n.clearRect(0,0,pa,Zx),n.font="bold 34px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.lineWidth=7,n.strokeStyle="rgba(0,0,0,0.85)",n.strokeText(t.name,pa/2,26),n.fillStyle="#ffffff",n.fillText(t.name,pa/2,26),t.damaged){const i=Math.max(0,Math.min(1,t.hp/100)),r=170,o=12,s=(pa-r)/2,a=50;n.fillStyle="rgba(0,0,0,0.7)",n.fillRect(s-2,a-2,r+4,o+4),n.fillStyle="#3a3a3a",n.fillRect(s,a,r,o),n.fillStyle=up(i),n.fillRect(s,a,r*i,o)}t.tagTexture.needsUpdate=!0,t.tagHpDrawn=t.hp}function Jx(t){t.mesh&&(oe.remove(t.mesh),t.mesh.geometry.dispose());const e=u3(_3(t.appearance),v3),n=new lt(e,pf);n.castShadow=!0,n.receiveShadow=!0,n.position.copy(t.pos),oe.add(n),t.mesh=n}function Fg({id:t,name:e,appearance:n}){if(cn.has(t))return Qx({id:t,name:e,appearance:n}),cn.get(t);const i=document.createElement("canvas");i.width=pa,i.height=Zx;const r=new qu(i),o=new sh(new Yu({map:r,transparent:!0,depthTest:!0}));o.scale.set(1.9,.54,1),oe.add(o);const s={id:t,name:e||"Player "+t,appearance:n||{},pos:new A(0,-1e3,0),target:new A(0,-1e3,0),yaw:0,targetYaw:0,hp:100,damaged:!1,crouching:!1,dead:!1,mesh:null,sprite:o,tagCanvas:i,tagTexture:r,tagHpDrawn:100,seen:!1};return cn.set(t,s),Jx(s),Ip(s),s}function Qx({id:t,name:e,appearance:n}){const i=cn.get(t);if(!i)return;let r=!1;n&&JSON.stringify(n)!==JSON.stringify(i.appearance)&&(i.appearance=n,r=!0),e&&e!==i.name&&(i.name=e,Ip(i)),r&&Jx(i)}function ey(t){const e=cn.get(t);e&&(e.mesh&&(oe.remove(e.mesh),e.mesh.geometry.dispose()),oe.remove(e.sprite),e.sprite.material.map.dispose(),e.sprite.material.dispose(),cn.delete(t))}function Eh(){for(const t of[...cn.keys()])ey(t)}function x3(t,e){for(const[n,i]of Object.entries(t)){const r=Number(n);if(r===e)continue;const o=cn.get(r);!o||!i||!i.pos||(o.target.set(i.pos[0],i.pos[1],i.pos[2]),o.targetYaw=i.yaw||0,o.crouching=!!i.crouching,o.dead=!!i.dead,typeof i.hp=="number"&&((i.hp<o.hp||i.hp<100)&&(o.damaged=!0),o.hp=i.hp),o.seen||(o.seen=!0,o.pos.copy(o.target),o.yaw=o.targetYaw))}}function y3(t,e,n){let i=(e-t)%(Math.PI*2);return i>Math.PI&&(i-=Math.PI*2),i<-Math.PI&&(i+=Math.PI*2),t+i*n}function S3(t){const e=1-Math.exp(-14*t);for(const n of cn.values()){n.pos.lerp(n.target,e),n.yaw=y3(n.yaw,n.targetYaw,e);const i=n.seen&&!n.dead;n.mesh&&(n.mesh.visible=i,n.mesh.position.copy(n.pos),n.mesh.rotation.y=n.yaw+Math.PI,n.mesh.scale.y=n.crouching?.75:1),n.sprite.visible=i,n.sprite.position.set(n.pos.x,n.pos.y+(n.crouching?Ng-.35:Ng),n.pos.z),n.damaged&&Math.abs(n.hp-n.tagHpDrawn)>2&&Ip(n)}}function ty(){const t=[];for(const e of cn.values())!e.seen||e.dead||t.push({id:e.id,pos:e.pos,height:Ei,radius:As+.1});return t}function M3(t,e){const n=[];for(const i of cn.values()){if(!i.seen||i.dead)continue;const r=i.pos.x-t.x,o=i.pos.z-t.z,s=Math.hypot(r,i.pos.y-t.y,o),a=Math.atan2(-r,-o);let l=(e-a)*180/Math.PI;l=(l%360+360)%360,n.push({id:i.id,name:i.name,angle:l,distance:s})}return n}const E3="blocksSaves",b3=1,ou="slots";let ac=null;function w3(){return ac||(ac=new Promise((t,e)=>{if(typeof indexedDB>"u"){e(new Error("IndexedDB is not available in this browser/context"));return}const n=indexedDB.open(E3,b3);n.onupgradeneeded=()=>{const i=n.result;i.objectStoreNames.contains(ou)||i.createObjectStore(ou,{keyPath:"id"})},n.onsuccess=()=>t(n.result),n.onerror=()=>e(n.error)}),ac)}function mf(t){return new Promise((e,n)=>{t.onsuccess=()=>e(t.result),t.onerror=()=>n(t.error)})}async function gf(t){return(await w3()).transaction(ou,t).objectStore(ou)}async function ny(){return mf((await gf("readonly")).getAll())}let Ed=null;async function T3(){return Ed===null&&(Ed=(await ny()).reduce((e,n)=>Math.max(e,n.id),0)),++Ed}async function Lp(){return(await ny()).map(({id:e,name:n,savedAt:i,seedInput:r})=>({id:e,name:n,savedAt:i,seedInput:r})).sort((e,n)=>n.savedAt-e.savedAt)}function A3(){const t=[...cn.values()].map(e=>({name:e.name,appearance:e.appearance,pos:{x:e.pos.x,y:e.pos.y,z:e.pos.z},yaw:e.yaw,hp:e.hp}));return{version:1,seedInput:Ps(),edits:eC(),player:{pos:{x:T.pos.x,y:T.pos.y,z:T.pos.z},yaw:T.yaw,pitch:T.pitch,hp:T.hp,maxHp:T.maxHp,flying:T.flying,spaceAlignQuat:{x:T.spaceAlignQuat.x,y:T.spaceAlignQuat.y,z:T.spaceAlignQuat.z,w:T.spaceAlignQuat.w}},inventory:{slots:Tt.map(e=>e?{...e}:null),selectedSlot:of()},gameMode:hp(),multiplayerPlayers:t.length?t:void 0}}async function R3(t,{overwriteId:e}={}){const n=A3(),i=Date.now(),r=e??await T3(),o={id:r,name:t||"Save "+r,savedAt:i,seedInput:n.seedInput,data:n},s=await gf("readwrite");return await mf(s.put(o)),rC(),r}async function C3(t){const e=await gf("readonly"),n=await mf(e.get(t));return n?n.data:null}async function P3(t){const e=await gf("readwrite");await mf(e.delete(t))}const aa=512,lc=256;function pr(t){return[t>>16&255,t>>8&255,t&255]}function su(t,e,n){return[t[0]+(e[0]-t[0])*n,t[1]+(e[1]-t[1])*n,t[2]+(e[2]-t[2])*n]}function au(t,e,n){const i=Math.max(0,Math.min(1,(n-t)/(e-t)));return i*i*(3-2*i)}function lu(t,e,n,i,r,o,s){const a=t.octave(e*r+s,n*r+s,o,.5,2),l=t.octave(n*r+s,i*r+s,o,.5,2),c=t.octave(i*r+s,e*r+s,o,.5,2);return(a+l+c)/3}const Og=16,I3=25;function iy(t,e,n,i,r){const s=e.noise2((n+i*.5)*Og+500,(r+i*.5)*Og+500)*I3;return[Math.max(0,Math.min(255,t[0]+s)),Math.max(0,Math.min(255,t[1]+s)),Math.max(0,Math.min(255,t[2]+s))]}const L3=0,bd=.15;function D3(t,e,n,i){const r=lu(t,e,n,i,1.4,4,100),o=lu(t,e,n,i,2.2,3,900),s=pr(Kt[yi].top),a=pr(Kt[Rs].top),l=pr(Kt[Za].top),c=pr(Kt[Oe].top),u=pr(Kt[Ja].top);let f;return r<L3?f=s:r<bd?f=su(a,l,au(-.2,.3,o)):f=su(c,u,au(bd,bd+.25,r)),iy(f,t,e,n,i)}const wd=.16,Td=.15;function U3(t,e,n,i,r){const o=pr(Kt[e.surface].top),s=pr(Kt[e.rock].top),a=lu(t,n,i,r,1.6,4,300);let l=a>wd?su(o,s,au(wd,wd+.15,a)):o;if(e.liquid!==null){const c=lu(t,n,i,r,2.4,3,1500);if(c>Td){const u=pr(Kt[e.liquid].top);l=su(l,u,au(Td,Td+.14,c))}}return iy(l,t,n,i,r)}function N3(t,e){const n=ll(t.seed>>>0),i=e?null:vp(t),r=document.createElement("canvas");r.width=aa,r.height=lc;const o=r.getContext("2d"),s=o.createImageData(aa,lc);for(let l=0;l<lc;l++){const c=(l/(lc-1)-.5)*Math.PI,u=Math.cos(c),f=Math.sin(c);for(let d=0;d<aa;d++){const p=d/aa*Math.PI*2,g=u*Math.cos(p),_=f,m=u*Math.sin(p),[h,x,v]=e?D3(n,g,_,m):U3(n,i,g,_,m),S=(l*aa+d)*4;s.data[S]=h,s.data[S+1]=x,s.data[S+2]=v,s.data[S+3]=255}}o.putImageData(s,0,0);const a=new qu(r);return a.generateMipmaps=!0,a.minFilter=Wi,a.magFilter=Sn,a.needsUpdate=!0,a}const F3=24,O3=16,B3=140,k3=6;function z3(t,e){return e?B3:t.amplitude*k3}const H3=400;function G3(){return Mo()*be*H3}let xs=null,cu=[];const V3=50;function W3(t,e){const n=e.distanceTo(t.center),i=t.hideMargin??V3;return n>t.radius+i&&n<G3()}function X3(t){oe.remove(t),t.geometry.dispose(),t.material.map?.dispose(),t.material.dispose()}function Dp(){_f(),xs=new jt,oe.add(xs);for(const t of Ta()){const e=t.id==="home",n=new Lr(t.radius,F3,O3),i=N3(t,e),r=new Vn({map:i,fog:!1}),o=new lt(n,r);o.position.copy(t.center),o.matrixAutoUpdate=!1,o.updateMatrix(),xs.add(o);const s=z3(t,e);cu.push({body:{center:t.center,radius:t.radius,hideMargin:s},mesh:o})}}function _f(){for(const{mesh:t}of cu)X3(t);cu=[],xs&&(oe.remove(xs),xs=null)}function Y3(t){for(const{body:e,mesh:n}of cu)n.visible=W3(e,t)}const Bg=2e3,q3=35e4;let di=null;function $3(t){const e=Math.random()*2-1,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e*e);return t.set(Math.cos(n)*i,Math.sin(n)*i,e),t}function K3(){j3();const t=new Float32Array(Bg*3),e=new A;for(let r=0;r<Bg;r++)$3(e).multiplyScalar(q3),t[r*3]=e.x,t[r*3+1]=e.y,t[r*3+2]=e.z;const n=new Et;n.setAttribute("position",new nt(t,3));const i=new tp({color:16777215,size:1.5,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.9});di=new qv(n,i),di.frustumCulled=!1,oe.add(di)}function j3(){di&&(di.geometry.dispose(),di.material.dispose(),oe.remove(di),di=null)}function Z3(t){di&&di.position.copy(t)}const J3=8080,Ut={JOIN:"join",STATE:"state",HIT:"hit",BLOCK:"block",CRATER:"crater",DIED:"died",PROFILE:"profile",RESTORE_PLAYER:"restore_player",WELCOME:"welcome",PLAYER_JOINED:"player_joined",PLAYER_LEFT:"player_left",PLAYER_PROFILE:"player_profile",SNAPSHOT:"snapshot",HIT_YOU:"hit_you",PLAYER_DIED:"player_died",RESTORE_STATE:"restore_state"},Q3=20,eP=1e3/Q3;function tP(t,e){return JSON.stringify({t,d:e})}function nP(t){try{const e=JSON.parse(t);return!e||typeof e.t!="string"?null:{type:e.t,data:e.d??{}}}catch{return null}}let dn=null,Aa=null,qa="offline";const ry=new Map,oy=[];function iP(){const t=typeof location<"u"&&location.hostname||"localhost",e=typeof window<"u"?window.__BONDBLOCKS_PORT__:void 0,n=Number.isInteger(e)?e:J3;return`ws://${t}:${n}`}function kg(){return Aa}function Up(){return qa==="online"}function rP(t){oy.push(t)}function Di(t,e=""){qa=t;for(const n of oy)n(t,e)}function li(t,e){ry.set(t,e)}function Or(t,e){return!dn||dn.readyState!==WebSocket.OPEN?!1:(dn.send(tP(t,e)),!0)}function oP(t,e){Fp(),Di("connecting");try{dn=new WebSocket(t)}catch(i){Di("error",String(i&&i.message||i));return}const n=dn;dn.addEventListener("open",()=>{if(dn!==n){console.warn("[net] ignoring a stale socket that opened late");try{n.close()}catch{}return}console.log("[net] socket open, sending join");try{const i=e();if(!Or(Ut.JOIN,i)){Di("error","socket opened but the join could not be sent");return}console.log("[net] join sent as",i&&i.name)}catch(i){console.error("[net] building the join message failed",i),Di("error","could not build your profile: "+(i&&i.message||i));try{n.close()}catch{}}}),dn.addEventListener("message",i=>{const r=nP(i.data);if(!r)return;r.type===Ut.WELCOME&&(Aa=r.data.id,Di("online"),console.log("[net] joined as player",Aa));const o=ry.get(r.type);o&&o(r.data)}),dn.addEventListener("close",i=>{console.log("[net] socket closed",i&&i.code,i&&i.reason),qa==="connecting"?Di("error",`server closed the connection (code ${i&&i.code})`):qa!=="error"&&Di("offline"),Aa=null,dn=null}),dn.addEventListener("error",()=>{console.error("[net] socket error"),Di("error","could not reach the server")})}function sP(t){Or(Ut.STATE,t)}function Np(t,e){Or(Ut.HIT,{target:t,damage:e})}function aP(t,e,n,i){Or(Ut.BLOCK,{x:t,y:e,z:n,id:i})}function lP(t,e,n,i){Or(Ut.CRATER,{x:t,y:e,z:n,radius:i})}function cP(t=null){Or(Ut.DIED,{by:t})}function uP(t,e){Or(Ut.PROFILE,{name:t,appearance:e})}function fP(t,e,n,i){Or(Ut.RESTORE_PLAYER,{target:t,pos:e,yaw:n,hp:i})}function Fp(){if(dn){const t=dn;dn=null;try{t.close()}catch{}}Aa=null,qa!=="offline"&&Di("offline")}const sy="blocksDifficulty",dP=1500,hP=2.6,pP=.35,mP=22,gP=.6,_P=8,vP=10,bh=1,Op=100;let ys=0,$a=0,zs=50,Hs=!0;const ay=[];function xP(t){ay.push(t)}function ul(){for(const t of ay)t()}function ly(){return zs}function cy(){return Hs}function zg(t){const e=Math.max(bh,Math.min(Op,Math.round(Number(t)||bh)));e!==zs&&(zs=e,Bp(),ul())}function yP(t){const e=!!t;e!==Hs&&(Hs=e,Bp(),ul())}function Bp(){try{localStorage.setItem(sy,JSON.stringify({slider:zs,escalatingSpawns:Hs,best:$a}))}catch{}}function SP(){let t=null;try{t=JSON.parse(localStorage.getItem(sy))}catch{}t&&(Number.isFinite(t.slider)&&(zs=Math.max(bh,Math.min(Op,Math.round(t.slider)))),typeof t.escalatingSpawns=="boolean"&&(Hs=t.escalatingSpawns),Number.isFinite(t.best)&&($a=t.best)),ul()}function uy(){return ys}function fy(){return $a}function dy(){return zs/Op}function wh(){return .5+dy()*2.5}function hy(){return dP/(.6+dy()*1.4)}function py(t){if(t<=0)return 0;const e=Math.round(t*wh());return ys+=e,ys>$a&&($a=ys,Bp()),ul(),e}function my(){ys=0,ul()}function fl(){return Math.min(1,ys/hy())}function MP(t){return Math.max(1,Math.round(t*(1+fl()*(hP-1))))}function vf(t){return Math.max(1,Math.round(t*(1-fl()*(1-pP))))}function EP({maxMobs:t,interval:e,minDist:n,maxDist:i}){const r=Hs?fl():0;return{maxMobs:Math.round(t+r*mP),interval:e*(1-r*gP),minDist:Math.max(6,n-r*_P),maxDist:Math.max(12,i-r*vP)}}const bP=["Died from fall damage.","Gravity won that one.","Took the fast way down.","Forgot to pack a parachute."],wP=["Died in a fiery crash.","That landing did not go well.","Should have throttled down sooner.","Walked away from many landings. Not that one."],TP=["Blew yourself up.","Stood too close to your own explosion.",'Learned the hard way what "blast radius" means.'],AP=["Taken out by","Wiped out by","Completely dismantled by","Flattened by","Sent flying by","Put down by"],RP=["Taken out by","Wiped out by","Completely dismantled by","Destroyed by","Humiliated by","Put down by"],Hg=["You died."],CP=["Died by dev console.","Smitten by the /kill command.","Chose the console over living."];function cr(t){return t[Math.floor(Math.random()*t.length)]}function PP(t){return(/^[aeiou]/i.test(t)?"an ":"a ")+t}function IP(t){if(!t)return cr(Hg);switch(t.kind){case"fall":return cr(bP);case"crash":return cr(wP);case"explosion":return cr(TP);case"console":return cr(CP);case"mob":{const e=Cp[t.mobType]?.label||"something";return`${cr(AP)} ${PP(e)}.`}case"player":{const e=t.name||"another player";return`${cr(RP)} ${e}.`}default:return cr(Hg)}}const gy=.35,LP=.6;function xi(t,e=null){lf()||T.invincible>0||T.dead||(e&&(T.lastDamageSource=e,e.kind==="player"&&e.id!=null&&(T.lastAttacker=e.id)),T.hp=Math.max(0,T.hp-MP(t)),T.damageFlash=gy,T.invincible=LP,Zi(T.hp,T.maxHp),T.hp<=0&&_y())}function DP(t){T.hp=Math.min(T.maxHp,T.hp+t),Zi(T.hp,T.maxHp)}function _y(){T.dead=!0,document.exitPointerLock(),H2(IP(T.lastDamageSource)),cP(T.lastAttacker),T.lastAttacker=null,T.lastDamageSource=null}function UP(){T.damageFlash=Math.max(0,T.damageFlash-.016),T.invincible=Math.max(0,T.invincible-.016),a2(T.damageFlash>0?T.damageFlash/gy*.5:0)}const uu=[[-1,-1],[1,-1],[-1,1],[1,1]];let Th=!1;function vy(t,e,n,i,r){const o=e-.1;for(let s=0;s<4;s++)if(r(t+uu[s][0]*i,o,n+uu[s][1]*i))return!0;return!1}function Ad(t,e,n,i,r,o,s,a,l){const c=t[n]+e[n]*i,u=n==="x"?c:t.x,f=n==="y"?c:t.y,d=n==="z"?c:t.z,p=n==="y",g=e.y<0,_=p?1:3;for(let m=0;m<4;m++){const h=uu[m][0]*r,x=uu[m][1]*r;for(let v=0;v<_;v++){const S=p?g?0:o:v===0?0:v===1?o*.5:o;let C=u+(n==="x"?0:h);const E=f+S;let R=d+(n==="z"?0:x);if(n==="x"&&(C+=e.x>0?r:-r),n==="z"&&(R+=e.z>0?r:-r),l(C,E,R)){e[n]=0,p&&g&&(Th=!0);return}}}if(s&&!p){for(let m=a;m>=1;m--){const h=t[n]+(c-t[n])*(m/a),x=n==="x"?h:t.x,v=n==="z"?h:t.z;if(vy(x,t.y,v,r,l)){t[n]=h;return}}e[n]=0;return}t[n]=c}function NP(t,e,n,i,r,o,s,a){return Th=!1,Ad(t,e,"x",n,i,r,o,s,a),Ad(t,e,"z",n,i,r,o,s,a),Ad(t,e,"y",n,i,r,!1,s,a),Th}const ni=new A,Gi=new A,mr=new A,xy=new A(0,1,0),Gg=new A(0,0,-1),la=new A,ca=new A,fr=new A;function yy(t){ni.copy(t);const e=Math.abs(ni.dot(Gg))>.9?xy:Gg;Gi.crossVectors(e,ni).normalize(),mr.crossVectors(ni,Gi).normalize()}function kp(t,e,n,i,r,o,s,a,l){fr.copy(a).negate(),yy(fr),la.set(t.dot(Gi),t.dot(ni),t.dot(mr)),ca.set(e.dot(Gi),e.dot(ni),e.dot(mr));const u=NP(la,ca,n,i,r,o,s,(f,d,p)=>(fr.copy(Gi).multiplyScalar(f).addScaledVector(ni,d).addScaledVector(mr,p),l(fr.x,fr.y,fr.z)));return t.set(0,0,0).addScaledVector(Gi,la.x).addScaledVector(ni,la.y).addScaledVector(mr,la.z),e.set(0,0,0).addScaledVector(Gi,ca.x).addScaledVector(ni,ca.y).addScaledVector(mr,ca.z),u}const cc=new A;function FP(t,e,n,i){fr.copy(n).negate(),yy(fr);const r=t.dot(Gi),o=t.dot(ni),s=t.dot(mr);return vy(r,o,s,e,(l,c,u)=>(cc.copy(Gi).multiplyScalar(l).addScaledVector(ni,c).addScaledVector(mr,u),i(cc.x,cc.y,cc.z)))}const Vg=new A;function js(t,e){return Vg.copy(t).negate(),e.setFromUnitVectors(xy,Vg)}const Rd=new A,Cd=new A,Wg=new ht,OP=.7;function dl(t,e){return Cd.copy(e).negate(),Rd.set(0,1,0).applyQuaternion(t),Rd.dot(Cd)<OP?js(e,t):(Wg.setFromUnitVectors(Rd,Cd),t.premultiply(Wg).normalize())}function Ji(t,e,n){return qC(t,e,n)}function Gs(t,e,n){return Xa(t,e,n)}function BP(t,e,n){return e3(t,e,n)}function kP(t,e,n,i){n3(t,e,n,i)}const Xg=new Map,zP=new Vn({vertexColors:!0}),HP=[.72,.72,1,.55,.86,.86];function ue(t,e,n,i,r,o,s){const a=new Zt(t,e,n);a.translate(i,r,o);const l=new Me(s),c=a.getAttribute("position").count,u=new Float32Array(c*3);for(let f=0;f<c;f++){const d=HP[Math.floor(f/4)]??1;u[f*3]=l.r*d,u[f*3+1]=l.g*d,u[f*3+2]=l.b*d}return a.setAttribute("color",new nt(u,3)),a}const Yg={hangglider:()=>[ue(5.2,.1,1.5,0,.35,0,14995340),ue(3,.1,1.9,0,.3,-.9,14205050),ue(.14,.14,3.2,0,.3,-.2,7033648),ue(1.5,.12,.12,0,-.35,.1,7033648),ue(.1,.7,.1,-.7,0,.1,7033648),ue(.1,.7,.1,.7,0,.1,7033648)],jetpack:()=>[ue(.9,1.1,.5,0,0,.15,8014364),ue(.35,1.3,.35,-.6,-.1,.15,12154671),ue(.35,1.3,.35,.6,-.1,.15,12154671),ue(.28,.3,.28,-.6,-.85,.15,4869973),ue(.28,.3,.28,.6,-.85,.15,4869973),ue(.5,.35,.5,0,.55,.1,9146777)],plane:()=>[ue(.8,.7,4.2,0,0,0,13095644),ue(6.4,.16,1.2,0,.25,-.1,11122372),ue(2.4,.14,.7,0,.15,1.7,11122372),ue(.14,1,.8,0,.6,1.8,11122372),ue(.5,.45,.5,0,.35,-1.5,3095367),ue(1.1,1.1,.25,0,0,-2.2,9136698),ue(.25,.25,.5,0,0,-2.1,4869973)],rocket:()=>[ue(.9,.9,3.4,0,0,0,14342872),ue(.6,.6,.9,0,0,-2,12729134),ue(1,.1,.9,-.55,-.15,1.4,9146258),ue(1,.1,.9,.55,-.15,1.4,9146258),ue(.1,1,.9,0,-.15,1.4,9146258),ue(.1,1,.9,0,.55,1.4,9146258),ue(.7,.7,.4,0,0,1.7,3093048)],starcruiser:()=>[ue(1.3,1.1,5,0,0,0,10135216),ue(.8,.8,1.2,0,0,-3,13226971),ue(1.5,.16,.9,0,.15,-.6,6211839),ue(.16,1.3,.9,-.75,0,-.6,6211839),ue(.16,1.3,.9,.75,0,-.6,6211839),ue(.6,.5,.7,0,.55,-1.7,3095367),ue(.7,.7,2.2,-1.1,-.15,1.2,8358809),ue(.7,.7,2.2,1.1,-.15,1.2,8358809),ue(1.1,.1,1,0,-.2,2.2,7042692),ue(.55,.55,.4,-1.1,-.15,2.35,3093048),ue(.55,.55,.4,1.1,-.15,2.35,3093048)],dinghy:()=>[ue(1.6,.35,3,0,-.05,0,14080732),ue(1.3,.2,2.6,0,.16,0,12830922),ue(1,.18,.9,0,.1,-.4,11449527),ue(.1,.55,.1,.9,.15,.9,7033648),ue(.45,.06,.2,.9,-.05,1.35,7033648)],speedboat:()=>[ue(1.5,.5,4.6,0,0,0,15133163),ue(1.3,.16,4,0,.28,0,16054007),ue(1.1,.5,.1,0,.55,-.6,3095367),ue(.9,.35,.6,0,.45,-1.4,9147290),ue(.35,.3,.5,0,-.1,2.3,4869973)],yacht:()=>[ue(2,.6,7,0,0,0,15921902),ue(1.8,.16,6.4,0,.35,0,16777215),ue(1.4,1,2.2,0,1,-.8,15263452),ue(1.1,.6,.1,0,1.05,-2,3095367),ue(.08,1.6,.08,0,1.7,1.8,9278619),ue(.7,.06,.06,.35,2.3,1.8,14211288)],superyacht:()=>[ue(2.6,.7,10,0,0,0,16447208),ue(2.3,.18,9.2,0,.42,0,16777215),ue(1.9,1.1,4.2,0,1.15,-1.2,15789536),ue(1.5,1,2.6,0,2.1,-1.6,15262932),ue(1.4,.5,.1,0,1.3,-3.2,2371644),ue(1.1,.45,.1,0,2.15,-2.8,2371644),ue(.1,2.2,.1,0,2.9,3.2,9278619),ue(.9,.06,.06,.45,4.4,3.2,14070332)],jetfighter:()=>[ue(.9,.8,6,0,0,0,8358809),ue(1.6,.5,1.4,0,-.1,-3.4,7042692),ue(5.6,.18,2.2,0,0,.4,7042692),ue(2.6,.16,1,0,0,2.4,7042692),ue(.16,1.1,1,-.7,.65,2.4,5990004),ue(.16,1.1,1,.7,.65,2.4,5990004),ue(.55,.5,.9,0,.42,-1.6,2371644),ue(.45,.45,.5,-.4,-.05,3.1,16747066),ue(.45,.45,.5,.4,-.05,3.1,16747066)]};function zp(t){let e=Xg.get(t);if(!e){const i=(Yg[t]||Yg.hangglider)();e=hf(i,!1);for(const r of i)r.dispose();Xg.set(t,e)}const n=new lt(e,zP);return n.castShadow=!0,n}const GP=.0022,VP=.0018,qg=.9,WP=2.4,XP=18;let En=null;const hi=new ht,It=new A;let Bi=0;const Ko=new A,cs=new A,YP=new A,$g=new ht,Kg=new A,jg=new A,Zg=new A,uc=new A,fu=new ht,Jg=new ht,fc=new A;function Hp(){return En!==null}function qP(){return En}function $P(){return Bi}function KP(){return It.length()}function jP(){const t=Wn();if(!t||t.kind!=="vehicle")return We("Hold a vehicle to board it"),!1;const e=ri[t.vehicleKey];if(!e)return!1;if(e.mode==="boat")return We(e.label+" needs water, not sky"),!1;const n=zp(t.vehicleKey);oe.add(n),En={key:t.vehicleKey,def:e,mesh:n};const i=Vt(T.pos);return js(i.dir,fu),hi.copy(fu).multiply(new ht().setFromEuler(new Tn(0,T.yaw,0,"YXZ"))),It.set(0,0,-1).applyQuaternion(hi).multiplyScalar(e.thrust>0?4:11),Bi=e.thrust>0?.5:0,cs.copy(i.dir).negate(),T.pos.addScaledVector(cs,1.2),T.piloting=!0,We(e.label+" — W/S throttle, A/D rudder, mouse to fly, F to land"),!0}function Ah(t=""){En&&(oe.remove(En.mesh),En=null,T.piloting=!1,T.vel.set(0,0,0),t&&We(t))}function Pd(t,e){e&&(Kg.copy(t).applyQuaternion(hi).normalize(),$g.setFromAxisAngle(Kg,e),hi.premultiply($g),hi.normalize())}const ZP=new A(1,0,0),JP=new A(0,1,0),QP=new A(0,0,1);function eI(t){if(!En)return;const e=En.def,{dx:n,dy:i}=gp(),r=It.length(),o=e.stallSpeed>0?Math.max(.25,Math.min(1,r/e.stallSpeed)):1;Pd(QP,-n*GP*e.rollRate*o),Pd(ZP,-i*VP*e.pitchRate*o);let s=0;dt.KeyA&&(s+=1),dt.KeyD&&(s-=1),Pd(JP,s*e.yawRate*t*o),e.thrust>0&&(dt.KeyW&&(Bi=Math.min(1,Bi+qg*t)),dt.KeyS&&(Bi=Math.max(0,Bi-qg*t))),Ko.set(0,0,-1).applyQuaternion(hi),cs.set(0,1,0).applyQuaternion(hi),YP.set(1,0,0).applyQuaternion(hi),e.thrust>0&&(It.addScaledVector(Ko,e.thrust*Bi*t),e.hover&&It.addScaledVector(cs,e.thrust*Bi*1.5*t));const a=Vt(T.pos);uc.copy(a.dir),It.addScaledVector(uc,a.g*t);const l=It.length();if(l>.01){const _=1-Math.exp(-e.grip*t);Zg.copy(Ko).multiplyScalar(l),It.lerp(Zg,_)}const c=Math.max(0,It.dot(Ko)),u=Math.min(1,c/Math.max(1,e.maxSpeed*.55));It.addScaledVector(cs,a.g*e.lift*u*t),c<e.stallSpeed&&It.addScaledVector(uc,e.sink*t*.5),It.multiplyScalar(Math.max(0,1-e.drag*t)),It.length()>e.maxSpeed&&It.setLength(e.maxSpeed);const f=T.pos.x+It.x*t,d=T.pos.y+It.y*t,p=T.pos.z+It.z*t;if(BP(f,d,p)&&Gs(f,d,p)){const _=It.length();_>XP?(xi(Math.round(_*1.6),{kind:"crash"}),Ah("You crashed!")):Ah("Landed");return}T.pos.set(f,d,p),T.vel.copy(It),En.mesh.position.copy(T.pos),En.mesh.quaternion.copy(hi),jg.copy(T.pos).addScaledVector(Ko,-(e.chase||7)).addScaledVector(cs,WP),qe.position.copy(jg),qe.quaternion.copy(hi),js(uc,fu),Jg.copy(fu).invert(),fc.copy(Ko).applyQuaternion(Jg),T.yaw=Math.atan2(-fc.x,-fc.z),T.pitch=Math.asin($i.clamp(fc.y,-1,1))}function Gp(){En&&(oe.remove(En.mesh),En=null),T.piloting=!1,It.set(0,0,0),Bi=0}const Qg=1.1,tI=1.5,nI=3,iI=.07,rI=1.7;let bn=null;const ma=new ht,du=new ht;let Ra=0,vn=0,ki=0,e_=0;const dc=new A,Ca=new A(0,1,0),t_=new A,Id=new A,Mr=new A,Ld=new A,Sy=new A(0,1,0),oI=new A(1,0,0),sI=.14,aI=new ht().setFromAxisAngle(oI,sI),n_=new ht;function Vp(){return bn!==null}function lI(){return bn}function cI(){return ki}function uI(){return Math.abs(vn)}function My(t){let e=null,n=1/0;for(const i of wp()){const r=Math.abs(t.distanceTo(i.center)-i.radius);r<n&&(n=r,e=i)}return e}function Wp(t,e,n){return e?(n.copy(t).sub(e.center).normalize().multiplyScalar(e.radius).add(e.center),n):(n.set(t.x,no,t.z),n)}function Ey(t,e){return Wp(t,e,Mr),Gn(Ji(Math.floor(Mr.x),Math.floor(Mr.y),Math.floor(Mr.z)))}function fI(){const t=Wn();if(!t||t.kind!=="vehicle")return We("Hold a vehicle to board it"),!1;const e=ri[t.vehicleKey];if(!e||e.mode!=="boat")return e&&We(e.label+" needs sky, not water"),!1;const n=My(T.pos);if(!Ey(T.pos,n))return We("Needs open water to launch"),!1;const i=zp(t.vehicleKey);oe.add(i),bn={key:t.vehicleKey,def:e,mesh:i},Ra=T.yaw;const r=Vt(T.pos);return dl(T.spaceAlignQuat,r.dir),du.setFromAxisAngle(Sy,Ra),ma.copy(T.spaceAlignQuat).multiply(du),vn=0,ki=0,Wp(T.pos,n,Mr),Ca.copy(r.dir).negate(),T.pos.copy(Mr).addScaledVector(Ca,1),T.piloting=!0,We(e.label+" — W/S throttle, A/D steer, F to disembark"),!0}function dI(t=""){bn&&(oe.remove(bn.mesh),bn=null,T.piloting=!1,T.vel.set(0,0,0),t&&We(t))}function hI(t){if(!bn)return;const e=bn.def,n=Vt(T.pos);Id.copy(n.dir),dl(T.spaceAlignQuat,Id);let i=0;dt.KeyA&&(i+=1),dt.KeyD&&(i-=1);const r=Math.min(1,.25+Math.abs(vn)/Math.max(1,e.maxSpeed));Ra+=i*e.turnRate*t*r,du.setFromAxisAngle(Sy,Ra),ma.copy(T.spaceAlignQuat).multiply(du),dt.KeyW?ki=Math.min(1,ki+Qg*t):dt.KeyS?ki=Math.max(-.5,ki-Qg*t):ki*=Math.max(0,1-tI*t);const o=ki*e.maxSpeed;vn<o?vn=Math.min(o,vn+e.thrust*t):vn=Math.max(o,vn-e.thrust*t),dc.set(0,0,-1).applyQuaternion(ma),Ld.copy(T.pos).addScaledVector(dc,vn*t);const s=My(T.pos);Ey(Ld,s)?T.pos.copy(Ld):vn=0,e_+=t*rI*(.6+Math.abs(vn)/Math.max(1,e.maxSpeed)*.5),Ca.copy(Id).negate(),Wp(T.pos,s,Mr),T.pos.copy(Mr).addScaledVector(Ca,1+Math.sin(e_)*iI),T.vel.copy(dc).multiplyScalar(vn),bn.mesh.position.copy(T.pos),bn.mesh.quaternion.copy(ma),t_.copy(T.pos).addScaledVector(dc,-(e.chase||6)).addScaledVector(Ca,nI),qe.position.copy(t_),n_.copy(ma).multiply(aI),qe.quaternion.copy(n_),T.yaw=Ra,T.pitch=0}function Xp(){bn&&(oe.remove(bn.mesh),bn=null),T.piloting=!1,vn=0,ki=0}const pI=.0022,mI=.0018,i_=.9,gI=18,r_=$i.degToRad(150),o_=$i.degToRad(80),_I=8,vI=6,xI=2;let Ht=null;const Zn=new ht,_t=new A;let zi=0,Ni=0,Fi=0,On=!1,wn=null;const qr=new A,oo=new A,yI=new A,s_=new ht,a_=new A,l_=new A,c_=new A,us=new A,u_=new ht,f_=new ht,d_=new Tn(0,0,0,"YXZ"),h_=new ht,hc=new A,SI=new A(0,0,-1),p_=new A,m_=new ht,g_=new A,__=new A,pc=new A;function Yp(){return Ht!==null}function MI(){return Ht}function EI(){return zi}function bI(){return _t.length()}function wI(){return On}function TI(){return wn?wn.label:null}function by(){return wn?Math.max(0,T.pos.distanceTo(wn.center)-wn.radius):0}function AI(t){for(const e of wp())if(t.distanceTo(e.center)<e.radius+_I)return!0;return!1}function RI(){qe.getWorldDirection(__),g_.copy(qe.position);let t=null,e=1/0;for(const n of wp()){pc.copy(g_).sub(n.center);const i=pc.dot(__),r=pc.dot(pc)-n.radius*n.radius,o=i*i-r;if(o<0)continue;const s=-i-Math.sqrt(o);s>0&&s<e&&(e=s,t=n)}return t?{id:t.id,label:kC(t.id),center:t.center.clone(),radius:t.radius}:null}function CI(){if(!Ht)return;if(!Ht.def.hyperspeed){We(Ht.def.label+" has no hyperspeed drive");return}if(On){We("Hyperspeed disengaged"),On=!1,wn=null,_t.length()>Ht.def.maxSpeed&&_t.setLength(Ht.def.maxSpeed);return}const t=RI();if(!t){We("No target locked — point at a planet or moon first");return}wn=t,On=!0,We("Hyperspeed engaged — locked on "+t.label)}function PI(){const t=Wn();if(!t||t.kind!=="vehicle")return We("Hold a vehicle to board it"),!1;const e=ri[t.vehicleKey];if(!e||e.mode!=="rocket")return!1;const n=zp(t.vehicleKey);oe.add(n),Ht={key:t.vehicleKey,def:e,mesh:n},On=!1,wn=null;const i=Vt(T.pos);us.copy(i.dir),oo.copy(us).negate(),Zn.setFromUnitVectors(new A(0,0,-1),oo),_t.copy(oo).multiplyScalar(vI),zi=.5,Ni=0,Fi=0,T.pos.addScaledVector(oo,1.2),T.piloting=!0;const r=e.hyperspeed?", H to lock on and engage hyperspeed":"";return We(e.label+" — W/S throttle, A/D rudder, mouse to fly, hold RMB to look around, F to land"+r),!0}function Rh(t=""){Ht&&(oe.remove(Ht.mesh),Ht=null,T.piloting=!1,T.vel.set(0,0,0),On=!1,wn=null,t&&We(t))}function Dd(t,e){e&&(a_.copy(t).applyQuaternion(Zn).normalize(),s_.setFromAxisAngle(a_,e),Zn.premultiply(s_),Zn.normalize())}const II=new A(1,0,0),LI=new A(0,1,0),DI=new A(0,0,1);function UI(t){if(!Ht)return;const e=Ht.def,{dx:n,dy:i}=gp(),r=_t.length(),o=e.stallSpeed>0?Math.max(.25,Math.min(1,r/e.stallSpeed)):1;if(Jn.rightHeld)Ni=$i.clamp(Ni-n*zc,-r_,r_),Fi=$i.clamp(Fi-i*zc,-o_,o_);else{if(Ni||Fi){const u=Math.exp(-6*t);Ni*=u,Fi*=u,Math.abs(Ni)<.001&&(Ni=0),Math.abs(Fi)<.001&&(Fi=0)}if(!On){Dd(DI,-n*pI*e.rollRate*o),Dd(II,-i*mI*e.pitchRate*o);let u=0;dt.KeyA&&(u+=1),dt.KeyD&&(u-=1),Dd(LI,u*e.yawRate*t*o)}}On||(dt.KeyW&&(zi=Math.min(1,zi+i_*t)),dt.KeyS&&(zi=Math.max(0,zi-i_*t)));const s=Vt(T.pos);if(us.copy(s.dir),On){p_.copy(wn.center).sub(T.pos).normalize(),m_.setFromUnitVectors(SI,p_);const u=1-Math.exp(-(e.hyperspeedTurnRate||xI)*t);Zn.slerp(m_,u),Zn.normalize()}if(qr.set(0,0,-1).applyQuaternion(Zn),oo.set(0,1,0).applyQuaternion(Zn),yI.set(1,0,0).applyQuaternion(Zn),On)_t.copy(qr).multiplyScalar(e.hyperspeedSpeed),zi=1,by()<=e.approachDistance&&(We("Approaching "+wn.label+" — hyperspeed disengaged"),On=!1,wn=null,_t.length()>e.maxSpeed&&_t.setLength(e.maxSpeed));else{if(_t.addScaledVector(qr,e.thrust*zi*t),_t.addScaledVector(us,s.g*t),AI(T.pos)){const f=_t.length();if(f>.01){const g=1-Math.exp(-e.grip*t);c_.copy(qr).multiplyScalar(f),_t.lerp(c_,g)}const d=Math.max(0,_t.dot(qr)),p=Math.min(1,d/Math.max(1,e.maxSpeed*.55));_t.addScaledVector(oo,s.g*e.lift*p*t),d<e.stallSpeed&&_t.addScaledVector(us,e.sink*t*.5)}_t.multiplyScalar(Math.max(0,1-e.drag*t)),_t.length()>e.maxSpeed&&_t.setLength(e.maxSpeed)}const a=T.pos.x+_t.x*t,l=T.pos.y+_t.y*t,c=T.pos.z+_t.z*t;if(Xa(a,l,c)){const u=_t.length();u>gI?(xi(Math.round(u*1.6),{kind:"crash"}),Rh("You crashed!")):Rh("Landed");return}T.pos.set(a,l,c),T.vel.copy(_t),Ht.mesh.position.copy(T.pos),Ht.mesh.quaternion.copy(Zn),l_.copy(T.pos).addScaledVector(qr,-(e.chase||7)).addScaledVector(oo,2.4),qe.position.copy(l_),d_.set(Fi,Ni,0),f_.setFromEuler(d_),qe.quaternion.copy(Zn).multiply(f_),js(us,u_),h_.copy(u_).invert(),hc.copy(qr).applyQuaternion(h_),T.yaw=Math.atan2(-hc.x,-hc.z),T.pitch=Math.asin($i.clamp(hc.y,-1,1))}function qp(){Ht&&(oe.remove(Ht.mesh),Ht=null),T.piloting=!1,_t.set(0,0,0),zi=0,Ni=0,Fi=0,On=!1,wn=null}function NI({onNewGame:t,onLoadGameRequest:e}){const n=document.getElementById("new-game-btn");n&&n.addEventListener("click",t);const i=document.getElementById("load-game-btn");i&&i.addEventListener("click",e)}function wy(){const t=document.getElementById("title-screen");t&&t.classList.remove("hidden"),sl()}function Ty(){const t=document.getElementById("title-screen");t&&t.classList.add("hidden"),sl()}let Pa="load",jo={};function FI({onLoad:t,onOverwrite:e,onSaveNew:n,onDelete:i,onBack:r}){jo={onLoad:t,onOverwrite:e,onSaveNew:n,onDelete:i,onBack:r};const o=document.getElementById("slot-picker-back-btn");o&&o.addEventListener("click",()=>{Uc(),jo.onBack()});const s=document.getElementById("slot-save-new-btn"),a=document.getElementById("slot-name-input");s&&s.addEventListener("click",()=>{const c=a&&a.value.trim()||"";jo.onSaveNew(c)});const l=document.getElementById("slot-list");l&&l.addEventListener("click",c=>{const u=c.target.closest("button[data-action]");if(!u)return;const f=Number(u.dataset.id);u.dataset.action==="primary"?Pa==="save"?jo.onOverwrite(f):jo.onLoad(f):u.dataset.action==="delete"&&jo.onDelete(f)})}function OI(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function BI(t){const e=document.getElementById("slot-list"),n=document.getElementById("slot-list-empty");if(!e)return;n&&n.classList.toggle("hidden",t.length>0);const i=Pa==="save"?"Overwrite":"Load";e.innerHTML=t.map(r=>`<li><span class="slot-name">${OI(r.name)}</span><span class="slot-meta">${new Date(r.savedAt).toLocaleString()}</span><button type="button" data-action="primary" data-id="${r.id}">${i}</button><button type="button" data-action="delete" data-id="${r.id}">Delete</button></li>`).join("")}function $p(t,e){Pa=t;const n=document.getElementById("slot-picker");n&&n.classList.remove("hidden");const i=document.getElementById("slot-picker-title");i&&(i.textContent=Pa==="save"?"Save Game":"Load Game");const r=document.getElementById("slot-picker-save-row");r&&r.classList.toggle("hidden",Pa!=="save");const o=document.getElementById("slot-name-input");o&&(o.value=""),BI(e)}function Uc(){const t=document.getElementById("slot-picker");t&&t.classList.add("hidden")}let Ch=[];function kI(){const t=document.getElementById("confirm-buttons");t&&t.addEventListener("click",e=>{const n=e.target.closest("button[data-index]");if(!n)return;const i=Ch[Number(n.dataset.index)];GI(),i&&i.onClick&&i.onClick()})}function zI(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function HI({title:t,message:e,buttons:n}){Ch=n||[];const i=document.getElementById("confirm-dialog");i&&i.classList.remove("hidden");const r=document.getElementById("confirm-title");r&&(r.textContent=t);const o=document.getElementById("confirm-message");o&&(o.textContent=e);const s=document.getElementById("confirm-buttons");s&&(s.innerHTML=Ch.map((a,l)=>`<button type="button" data-index="${l}" class="${a.primary?"confirm-primary":""}">${zI(a.label)}</button>`).join(""))}function GI(){const t=document.getElementById("confirm-dialog");t&&t.classList.add("hidden")}function Ph(t,e,n){return{cell:Vx(t,e,n)}}function Ay(t,e){return!t||!e?!1:!t.cell||!e.cell?t.cell===e.cell:t.cell.planet===e.cell.planet&&t.cell.faceId===e.cell.faceId&&t.cell.au===e.cell.au&&t.cell.ri===e.cell.ri&&t.cell.av===e.cell.av}function hl(t){return $C(t.cell)}function Kp(t,e){return jC(t.cell,e)}function Ry(t){return JC(t.cell)}function Cy(t,e){return t.cell?Wx(t.cell,e):null}const VI=Array.from({length:8},()=>new A),mc=new A,ua=new A,Ud=new A;function Py(t,e,n=As*3){if(!t.cell)return;const i=Wx(t.cell,VI);mc.set(0,0,0);for(const s of i)mc.add(s);mc.multiplyScalar(1/8);const r=t.cell.planet.center,o=e.distanceTo(r);ua.copy(mc).sub(e),Ud.copy(Vt(e).dir).negate(),ua.addScaledVector(Ud,-ua.dot(Ud)),!(ua.length()>n)&&e.add(ua).sub(r).setLength(o).add(r)}function WI(){return cp()*2*60}const Nd=new Me(8000532),gc=new Me(3147784),v_=new Me(197386),XI=new Me(16773840),YI=new Me(16756848);function qI(){return Mo()*be*.6}function $I(){return Mo()*be*1.1}const x_=new Me,KI=2,jI=26;let Ia=.25,Iy=0;const Fd=new A,Od=new Me,$r=new Me;function ZI(){return Ia}function JI(t){Ia=Math.max(0,Math.min(1,t))}function QI(){return Iy<=0}function eL(t,e,n=null){Ia=(Ia+t/WI())%1;const i=Ia;i<.2?$r.copy(v_).lerp(gc,i/.2):i<.3?$r.copy(gc).lerp(Nd,(i-.2)/.1):i<.7?$r.copy(Nd):i<.8?$r.copy(Nd).lerp(gc,(i-.7)/.1):$r.copy(gc).lerp(v_,(i-.8)/.2);const r=n!==null;let o=$r;r&&(x_.setHex(Cs[n]??Cs[yi]),o=x_),gt&&gt.setClearColor(o),oe.fog.color.copy(o),oe.fog.near=r?KI:qI(),oe.fog.far=r?jI:$I();const s=(i-.25)*Math.PI*2,a=Math.sin(s);Iy=a;const l=Math.max(0,a);if(Fd.set(Math.cos(s)*.6,Math.max(.05,a),.35).normalize(),V0()?lh.intensity=.1+l*.12:lh.intensity=.35+l*.65,V0()){const c=1-Math.min(1,Math.max(0,a)*2.2);Od.copy(XI).lerp(YI,c),vA(e,Fd,Od,.3+l*2.6),_C(t,{sunDir:Fd,sunColor:Od,skyColor:$r,fogColor:oe.fog.color,fogNear:oe.fog.near,fogFar:oe.fog.far})}}const tL=.8,nL=5,Er=[];function iL(t){const e=t.typeDef,n=p3(e.projectile),i=t.pos.clone();i.y+=e.height*.8,n.position.copy(i),oe.add(n);const r=T.pos.clone();r.y+=Ei*.5;const o=r.clone().sub(i).normalize();Er.push({mesh:n,pos:i.clone(),vel:o.multiplyScalar(e.throwSpeed??10),dmg:e.throwDmg,mobType:t.type,life:nL})}function rL(t){for(let e=Er.length-1;e>=0;e--){const n=Er[e];if(n.life-=t,n.pos.addScaledVector(n.vel,t),n.mesh.position.copy(n.pos),n.mesh.rotation.y+=t*5,n.pos.distanceTo(T.pos)<tL){xi(n.dmg,{kind:"mob",mobType:n.mobType}),oe.remove(n.mesh),Er.splice(e,1);continue}(Gs(n.pos.x,n.pos.y,n.pos.z)||n.life<=0)&&(oe.remove(n.mesh),Er.splice(e,1))}}function xf(){for(const t of Er)oe.remove(t.mesh);Er.length=0}const So=[],Vs=[],oL=12;function Xt(t,{color:e=16777215,count:n=24,speed:i=6,upBias:r=3,size:o=.14,life:s=.8,gravityScale:a=1,spin:l=0}={}){So.length>=oL&&jp(0);const c=new Float32Array(n*3),u=new Float32Array(n*3);for(let g=0;g<n;g++){c[g*3]=t.x,c[g*3+1]=t.y,c[g*3+2]=t.z;const _=Math.random()*Math.PI*2,m=Math.acos(2*Math.random()-1),h=i*(.4+Math.random()*.6);u[g*3]=Math.sin(m)*Math.cos(_)*h,u[g*3+1]=Math.cos(m)*h+r,u[g*3+2]=Math.sin(m)*Math.sin(_)*h}const f=new Et;f.setAttribute("position",new nt(c,3));const d=new tp({color:e,size:o,transparent:!0,opacity:1,depthWrite:!1}),p=new qv(f,d);p.frustumCulled=!1,oe.add(p),So.push({points:p,velocities:u,count:n,life:s,maxLife:s,gravityScale:a,spin:l})}function Ly(t,{color:e=16777215,maxRadius:n=4,life:i=.5}={}){const r=new ju(.35,.5,24),o=new Vn({color:e,transparent:!0,opacity:.9,side:yn,depthWrite:!1}),s=new lt(r,o);s.rotation.x=-Math.PI/2,s.position.set(t.x,t.y+.06,t.z),oe.add(s),Vs.push({ring:s,life:i,maxLife:i,maxRadius:n})}function jp(t){const e=So[t];oe.remove(e.points),e.points.geometry.dispose(),e.points.material.dispose(),So.splice(t,1)}function Dy(t){const e=Vs[t];oe.remove(e.ring),e.ring.geometry.dispose(),e.ring.material.dispose(),Vs.splice(t,1)}function sL(t){for(let e=So.length-1;e>=0;e--){const n=So[e];if(n.life-=t,n.life<=0){jp(e);continue}const i=n.points.geometry.getAttribute("position"),r=i.array;for(let s=0;s<n.count;s++){const a=s*3;n.velocities[a+1]+=ja*n.gravityScale*t,r[a]+=n.velocities[a]*t,r[a+1]+=n.velocities[a+1]*t,r[a+2]+=n.velocities[a+2]*t}i.needsUpdate=!0,n.spin&&(n.points.rotation.y+=n.spin*t);const o=n.life/n.maxLife;n.points.material.opacity=o,n.points.material.size=Math.max(.02,n.points.material.size*(.995+o*.004))}for(let e=Vs.length-1;e>=0;e--){const n=Vs[e];if(n.life-=t,n.life<=0){Dy(e);continue}const i=1-n.life/n.maxLife;n.ring.scale.setScalar(.4+i*n.maxRadius),n.ring.material.opacity=.9*(1-i)}}function yf(){for(let t=So.length-1;t>=0;t--)jp(t);for(let t=Vs.length-1;t>=0;t--)Dy(t)}const Uy=1.05,aL=1.35,_c=.5,lL=.9,cL=.7,uL=.85,fL=.85,dL=.8,hL={launch:Uy,faceplant:aL,collapse:lL,shatter:cL,incinerate:uL,freeze:fL,dissolve:dL},vc=new A;function pL(t){return vc.set(t.pos.x-T.pos.x,0,t.pos.z-T.pos.z),vc.lengthSq()<1e-4&&vc.set(1,0,0),vc.normalize()}function mL(t){t.dying=!0,t.deathT=0,t.impacted=!1;const e=t.typeDef.deathStyle;t.deathDuration=hL[e]??Uy;const n=t.typeDef.colors,i=t.pos.clone();if(i.y+=t.typeDef.height*.5,e==="launch"){const r=pL(t);t.deathVel=new A(r.x*7,13,r.z*7),t.deathSpin=16+Math.random()*8,t.impacted=!0,Xt(i,{color:n.shirt,count:26,speed:7,upBias:4,size:.16,life:.9}),Xt(i,{color:2236996,count:14,speed:5,upBias:3,size:.12,life:1})}else e==="faceplant"&&(t.deathVel=new A(0,0,0),t.deathSpin=0,Xt(i,{color:n.shirt,count:12,speed:2.5,upBias:1.5,size:.12,life:.6}))}function gL(t,e){t.deathT+=e;const n=t.deathT,i=t.mesh;switch(t.typeDef.deathStyle){case"launch":y_(t,e,n,i);break;case"faceplant":_L(t,e,n,i);break;case"collapse":vL(t,n,i);break;case"shatter":xL(t,n,i);break;case"incinerate":yL(t,n,i);break;case"freeze":SL(t,n,i);break;case"dissolve":ML(t,n,i);break;default:y_(t,e,n,i);break}return n>=t.deathDuration}function y_(t,e,n,i){const r=n/t.deathDuration;t.deathVel.y+=ja*.55*e,t.pos.addScaledVector(t.deathVel,e),i.position.copy(t.pos),i.rotation.z+=t.deathSpin*e,i.rotation.y+=t.deathSpin*.6*e;const o=1+Math.sin(n*26)*.18*(1-r),s=r<.66?1:1-(r-.66)/.34;if(i.scale.setScalar(Math.max(.001,o*s)),!t.popped&&r>=.66){t.popped=!0;const a=t.typeDef.colors;Xt(t.pos,{color:a.shorts,count:30,speed:8,upBias:2,size:.13,life:.7}),Xt(t.pos,{color:a.shirt,count:20,speed:6,upBias:2,size:.11,life:.7})}}function _L(t,e,n,i){if(i.position.copy(t.pos),n<_c){const l=n/_c,c=l*l;i.rotation.x=-c*(Math.PI/2),i.rotation.z=Math.sin(n*18)*.08*(1-l),i.scale.set(1,1,1);return}if(!t.impacted){t.impacted=!0;const l=t.typeDef.colors;Ly(t.pos,{color:14272931,maxRadius:5,life:.55}),Xt(t.pos,{color:14272931,count:34,speed:7,upBias:1.5,size:.15,life:.8,gravityScale:.7}),Xt(t.pos,{color:l.shirt,count:16,speed:4,upBias:3,size:.13,life:.7})}const r=(n-_c)/(t.deathDuration-_c);i.rotation.x=-Math.PI/2;const o=Math.max(.001,1-r),s=1+r*.7,a=r<.55?1:1-(r-.55)/.45;i.scale.set(s*a,o*a,s*a)}function vL(t,e,n){const i=e/t.deathDuration;if(n.position.copy(t.pos),n.position.y-=i*t.typeDef.height*.55,!t.impacted&&i>=.3){t.impacted=!0;const o=t.typeDef.colors,s=t.pos.clone();s.y+=t.typeDef.height*.4,Xt(s,{color:o.skin,count:24,speed:3,upBias:1,size:.13,life:.7,gravityScale:.6}),Xt(s,{color:o.shirt,count:12,speed:2,upBias:.5,size:.11,life:.6,gravityScale:.6})}const r=Math.max(.001,1-i*.9);n.scale.set(1+i*.12,r,1+i*.12)}function xL(t,e,n){n.position.copy(t.pos);const i=e/t.deathDuration;if(i<.4){n.rotation.z=Math.sin(e*40)*.05,n.scale.setScalar(1);return}if(!t.impacted){t.impacted=!0;const o=t.typeDef.colors,s=t.pos.clone();s.y+=t.typeDef.height*.5,Xt(s,{color:o.glasses,count:28,speed:9,upBias:3,size:.12,life:.6}),Xt(s,{color:o.skin,count:16,speed:6,upBias:2,size:.1,life:.55})}const r=(i-.4)/.6;n.scale.setScalar(Math.max(.001,1-r))}function yL(t,e,n){n.position.copy(t.pos);const i=e/t.deathDuration;if(n.rotation.z=Math.sin(e*22)*.15*(1-i),!t.impacted&&i>=.15){t.impacted=!0;const r=t.pos.clone();r.y+=t.typeDef.height*.5,Xt(r,{color:16742938,count:30,speed:5,upBias:4,size:.15,life:.9,gravityScale:.3}),Xt(r,{color:2763306,count:14,speed:3,upBias:5,size:.14,life:1,gravityScale:.15})}n.scale.setScalar(Math.max(.001,1-i))}function SL(t,e,n){n.position.copy(t.pos);const i=e/t.deathDuration;if(i<.35){n.rotation.x=0,n.scale.setScalar(1+i*.08);return}if(!t.impacted){t.impacted=!0;const o=t.typeDef.colors,s=t.pos.clone();s.y+=t.typeDef.height*.5,Xt(s,{color:14677503,count:22,speed:4,upBias:.5,size:.11,life:.6,gravityScale:1.1}),Xt(s,{color:o.skin,count:14,speed:3,upBias:0,size:.1,life:.55,gravityScale:1.2})}const r=(i-.35)/.65;n.rotation.x=r*(Math.PI/2)*.6,n.scale.setScalar(Math.max(.001,1.08*(1-r)))}function ML(t,e,n){n.position.copy(t.pos);const i=e/t.deathDuration;if(i<.3){const o=1+Math.sin(i/.3*Math.PI)*.25;n.scale.set(o,1,o);return}if(!t.impacted){t.impacted=!0;const o=t.typeDef.colors;Xt(t.pos,{color:o.skin,count:26,speed:5,upBias:1.5,size:.14,life:.7,gravityScale:.8}),Ly(t.pos,{color:o.shirt,maxRadius:3,life:.4})}const r=(i-.3)/.7;n.scale.set(1+r*.4,Math.max(.001,1-r),1+r*.4)}const EL=8,bL=1.3,wL=45,TL=60,AL=.4,mi=[],Bd=[".XX.XX.","XXXXXXX","XXXXXXX",".XXXXX.","..XXX..","...X..."],fa=.075;let xc=null;const RL=new Si({color:16724821,emissive:5574937,emissiveIntensity:.6});function CL(){if(xc)return xc;const t=[],e=Bd.length,n=Bd[0].length;for(let i=0;i<e;i++)for(let r=0;r<n;r++){if(Bd[i][r]!=="X")continue;const o=new Zt(fa,fa,fa*.6);o.translate((r-(n-1)/2)*fa,((e-1)/2-i)*fa,0),t.push(o)}xc=hf(t,!1);for(const i of t)i.dispose();return xc}function PL(t,e=3.5){if(mi.length>=TL){const o=mi.shift();oe.remove(o.mesh)}const n=new lt(CL(),RL);n.position.copy(t),oe.add(n);const i=Math.random()*Math.PI*2,r=e*(.4+Math.random()*.8);mi.push({mesh:n,pos:t.clone(),vel:new A(Math.cos(i)*r,4+Math.random()*2.5,Math.sin(i)*r),life:wL,age:0,resting:!1,spin:Math.random()*Math.PI*2})}function IL(t){for(let e=mi.length-1;e>=0;e--){const n=mi[e];if(n.life-=t,n.age+=t,!n.resting){const r=Vt(n.pos);n.vel.addScaledVector(r.dir,r.g*t),n.pos.addScaledVector(n.vel,t),Gs(n.pos.x+r.dir.x*.15,n.pos.y+r.dir.y*.15,n.pos.z+r.dir.z*.15)?(n.vel.set(0,0,0),n.resting=!0):Gs(n.pos.x,n.pos.y,n.pos.z)&&n.vel.set(0,0,0)}if(n.spin+=t*2.2,n.mesh.rotation.y=n.spin,n.mesh.position.set(n.pos.x,n.pos.y+Math.sin(n.age*3)*.08,n.pos.z),n.age>AL&&!T.dead&&T.hp<T.maxHp&&n.pos.distanceTo(T.pos)<bL){DP(EL),oe.remove(n.mesh),mi.splice(e,1);continue}n.life<=0&&(oe.remove(n.mesh),mi.splice(e,1))}}function Sf(){for(const t of mi)oe.remove(t.mesh);mi.length=0}const LL=1.4,po=[],S_=new Map;function DL(t){let e=S_.get(t);if(e)return e;const n=un[t],i=[new Zt(.5,.22,.16),new Zt(.35,.09,.09).translate(.32,.02,0),new Zt(.1,.22,.14).translate(-.14,-.18,0)],r=hf(i,!1);for(const s of i)s.dispose();const o=new Si({color:n.color,emissive:n.glow?n.color:0,emissiveIntensity:n.glow?.9:0});return e={geometry:r,material:o},S_.set(t,e),e}function UL(t){const{geometry:e,material:n}=DL(t);return new lt(e,n)}function NL(t,e){const n=UL(t),i=e.clone();n.position.copy(i),oe.add(n),po.push({weaponKey:t,mesh:n,pos:i,spin:Math.random()*Math.PI*2})}function Mf(){for(const t of po)oe.remove(t.mesh);po.length=0}function FL(t){for(let e=po.length-1;e>=0;e--){const n=po[e];n.spin+=t*1.6,n.mesh.rotation.y=n.spin,n.mesh.position.y=n.pos.y+Math.sin(performance.now()*.002+e)*.12,!T.dead&&n.pos.distanceTo(T.pos)<LL&&(mx(n.weaponKey),oe.remove(n.mesh),po.splice(e,1))}}const hu=.9,M_=.12,OL=.34,BL=new Yu({color:1119002,depthTest:!0});function kL(t){if(t.healthBar)return t.healthBar;const e=new sh(BL);e.scale.set(hu,M_,1);const n=new Yu({color:5033818,depthTest:!0}),i=new sh(n);return i.center.set(0,.5),i.scale.set(hu*.94,M_*.66,1),oe.add(e),oe.add(i),t.healthBar={backing:e,fill:i,fillMaterial:n},t.healthBar}function zL(t,e){const n=t.healthBar;if(!n)return;const i=Math.max(0,Math.min(1,t.hp/t.maxHp)),r=t.pos.y+e+OL;n.backing.position.set(t.pos.x,r,t.pos.z),n.fill.position.set(t.pos.x-hu*.47,r,t.pos.z),n.fill.scale.x=Math.max(1e-4,hu*.94*i),n.fillMaterial.color.setHex(n2(i))}function pu(t){const e=t.healthBar;e&&(oe.remove(e.backing),oe.remove(e.fill),e.fillMaterial.dispose(),t.healthBar=null)}const kn=[],HL=20,GL=8,VL=20,WL=35,XL=.6,YL={Barrens:"husk","Crystal Fields":"shardStalker","Ashen Wastes":"cinderfiend","Frozen Wastes":"frostbiter","Toxic Mire":"bloatspore"},qL=-ja,$L={lunge:.45,slam:.6,swipe:.22},KL=.12,jL=.35,ZL=.35;let kd=5;const mu=new ht,gu=new A,_u=new A,La=new A,E_=new A,b_=new A;function JL(t){const e=df(t);if(!e||e.id==="home")return Math.random()<XL?"ghoul":"wretch";const n=vp(e);return YL[n.name]||"husk"}function Ny(t,e){eD(t,e)}function QL(t,e,n,i){const r=Math.random()*Math.PI*2,o=n+Math.random()*(i-n),s=Vt(e);js(s.dir,mu),gu.set(Math.cos(r)*o,0,Math.sin(r)*o).applyQuaternion(mu),_u.copy(e).add(gu),Ap(_u,La)&&Ny(t,La)}function eD(t,e){const n=Cp[t],i=d3(t,n);i.position.copy(e),oe.add(i),kn.push({type:t,typeDef:n,mesh:i,pos:e.clone(),vel:new A,hp:n.hp,maxHp:n.hp,onGround:!1,jumpCooldown:0,wanderTimer:Math.random()*3,wanderDir:new Pe(Math.random()-.5,Math.random()-.5).normalize(),meleeCooldown:0,throwCooldown:Math.random()*2,flashTimer:0,damaged:!1,healthBar:null,state:"wander",meleeTimer:0,meleeHit:!1,dying:!1,dead:!1})}function Ih(t,e,n){const i=Vt(e),r=t.dot(i.dir);t.addScaledVector(i.dir,-n-r)}function Zp(t,e){if(t.dead||t.dying)return;t.hp-=vf(e),t.damaged=!0,kL(t),t.mesh.material=r3,t.flashTimer=KL;const n=t.pos.x-T.pos.x,i=t.pos.z-T.pos.z,r=Math.sqrt(n*n+i*i)||1;t.vel.x+=n/r*4,t.vel.z+=i/r*4,t.hp<=0&&tD(t)}function tD(t){if(t.dying||t.dead)return;t.mesh.material=pf,pu(t),py(t.typeDef.scoreValue),mL(t);const e=t.pos.clone();e.y+=t.typeDef.height*.6;for(let n=0;n<t.typeDef.heartsDropped;n++)PL(e)}function nD(t){if(Math.random()>=t.typeDef.weaponDropChance)return;const e=Ap(t.pos,b_)?b_.clone():t.pos.clone();NL(wA(),e)}function Ef(){for(const t of kn)pu(t),oe.remove(t.mesh);kn.length=0}function yc(t,e,n,i){const r=t.typeDef,o=Vt(t.pos);t.vel.addScaledVector(o.dir,o.g*i);const s=t.vel.dot(o.dir);t.vel.set(e,0,n).addScaledVector(o.dir,s);const a=t.pos.x,l=t.pos.y,c=t.pos.z;t.onGround=kp(t.pos,t.vel,i,r.radius,r.height,!1,1,o.dir,Xa),t.jumpCooldown=Math.max(0,t.jumpCooldown-i);const u=(e*i)**2+(n*i)**2,f=(t.pos.x-a)**2+(t.pos.y-l)**2+(t.pos.z-c)**2;if(t.onGround&&t.jumpCooldown===0&&u>1e-6&&f<u*jL){const p=o.g>0?r.jumpForce*Math.sqrt(o.g/qL):r.jumpForce;Ih(t.vel,t.pos,p),t.jumpCooldown=ZL,t.onGround=!1}Vt(t.pos).g===0&&YC(t.pos,E_)&&(t.pos.copy(E_),t.vel.set(0,0,0),t.onGround=!0)}function iD(t){const e=T.pos;for(let n=kn.length-1;n>=0;n--){const i=kn[n];if(i.dying){gL(i,t)&&(nD(i),pu(i),oe.remove(i.mesh),kn.splice(n,1));continue}if(i.dead){pu(i),oe.remove(i.mesh),kn.splice(n,1);continue}if(T.dead)continue;const r=i.typeDef,o=i.pos.distanceTo(e),s=e.x-i.pos.x,a=e.z-i.pos.z;if(i.mesh.rotation.set(0,Math.atan2(s,a),0),i.meleeCooldown=Math.max(0,i.meleeCooldown-t),i.throwCooldown=Math.max(0,i.throwCooldown-t),i.wanderTimer=Math.max(0,i.wanderTimer-t),i.flashTimer>0&&(i.flashTimer-=t,i.flashTimer<=0&&(i.mesh.material=pf)),i.state==="melee"){i.meleeTimer-=t;const d=r.meleeStyle;if(d==="lunge"){if(yc(i,i.lungeX,i.lungeZ,t),i.mesh.rotation.z=-Math.PI/3,!i.meleeHit&&i.pos.distanceTo(e)<r.meleeRange){i.meleeHit=!0,xi(r.meleeDmg,{kind:"mob",mobType:i.type});const p=e.x-i.pos.x,g=e.z-i.pos.z,_=Math.sqrt(p*p+g*g)||1;T.vel.x+=p/_*8,T.vel.z+=g/_*8,Ih(T.vel,T.pos,6)}}else d==="slam"?(yc(i,0,0,t),i.mesh.rotation.z=Math.sin(i.meleeTimer*10)*.4,i.meleeTimer<=0&&!i.meleeHit&&i.pos.distanceTo(e)<r.meleeRange+.5&&(i.meleeHit=!0,xi(r.meleeDmg,{kind:"mob",mobType:i.type}),Ih(T.vel,T.pos,-12))):(yc(i,0,0,t),i.mesh.rotation.x=Math.max(0,i.meleeTimer)*-3);i.meleeTimer<=0&&(i.state="chase",i.mesh.rotation.set(0,i.mesh.rotation.y,0),i.meleeCooldown=r.meleeCooldown),i.mesh.position.copy(i.pos);continue}if(o<r.attackRange?i.state="chase":i.state==="chase"&&o>r.attackRange*1.5&&(i.state="wander"),o<r.throwRange&&o>r.meleeRange&&i.throwCooldown<=0&&(iL(i),i.throwCooldown=r.throwCooldown),o<r.meleeRange&&i.meleeCooldown<=0){if(i.state="melee",i.meleeTimer=$L[r.meleeStyle]??.3,i.meleeHit=!1,r.meleeStyle==="lunge"){const d=Math.sqrt(s*s+a*a)||1;i.lungeX=s/d*10,i.lungeZ=a/d*10}else r.meleeStyle==="swipe"&&(i.meleeHit=!0,xi(r.meleeDmg,{kind:"mob",mobType:i.type}));continue}let l=0,c=0;if(i.state==="chase"){const d=Math.sqrt(s*s+a*a)||1;o>r.minChaseRange?(l=s/d*r.speed,c=a/d*r.speed):(l=-(s/d)*r.speed*.5,c=-(a/d)*r.speed*.5)}else i.wanderTimer<=0&&(i.wanderDir.set(Math.random()-.5,Math.random()-.5).normalize(),i.wanderTimer=2+Math.random()*3),l=i.wanderDir.x*r.speed*.4,c=i.wanderDir.y*r.speed*.4;yc(i,l,c,t);const u=i.state==="chase"?8:3,f=i.onGround?Math.sin(performance.now()*.001*u+n)*.06:0;i.mesh.position.set(i.pos.x,i.pos.y+f,i.pos.z),i.healthBar&&zL(i,r.height)}}function rD(t){if(T.dead||lf()||!QI())return;const e=EP({maxMobs:HL,interval:GL,minDist:VL,maxDist:WL});if(kd-=t,kd>0||kn.length>=e.maxMobs)return;kd=e.interval;const n=Math.random()*Math.PI*2,i=e.minDist+Math.random()*(e.maxDist-e.minDist),r=Vt(T.pos);js(r.dir,mu),gu.set(Math.cos(n)*i,0,Math.sin(n)*i).applyQuaternion(mu),_u.copy(T.pos).add(gu),Ap(_u,La)&&Ny(JL(La),La)}const Lh=180,oD=.25,sD=1e3;let w_=!0;const Fy=new Array(Lh).fill(0);let zd=0,fs=0,Hd=0,Nc=0,Oy=0;function aD(t){const e=t*1e3;if(w_){w_=!1;return}if(!(e>sD)&&(Fy[zd]=e,zd=(zd+1)%Lh,fs<Lh&&fs++,Hd+=t,Hd>=oD)){const n=By();Nc=n.avgFps,Oy=n.avgMs,Hd=0,lD()}}function By(){if(fs===0)return{avgFps:0,avgMs:0,lowFps:0,worstMs:0};const t=Fy.slice(0,fs);let e=0;for(const l of t)e+=l;const n=e/fs,i=[...t].sort((l,c)=>l-c),r=Math.max(1,Math.round(fs*.01));let o=0;for(let l=i.length-r;l<i.length;l++)o+=i[l];const s=o/r,a=i[i.length-1];return{avgMs:n,avgFps:n>0?1e3/n:0,lowFps:s>0?1e3/s:0,worstMs:a}}function lD(){const t=document.getElementById("fps");t&&(t.textContent=Math.round(Nc)+" FPS  "+Oy.toFixed(1)+" ms",t.style.color=Nc>=50?"#7fdc7f":Nc>=30?"#e8c46a":"#e87a7a")}function cD(){if(!f2())return;const t=Vx(T.pos.x,T.pos.y,T.pos.z),e=t?t.faceId+" "+(t.au>>Dn)+","+(t.av>>Dn):"vacuum",n=T.pos.clone().addScaledVector(Vt(T.pos).dir,.1),i=hl(Ph(n.x,n.y,n.z)),r=By();d2("FPS: "+r.avgFps.toFixed(0)+" avg  "+r.lowFps.toFixed(0)+` 1% low
Frame: `+r.avgMs.toFixed(1)+" ms  worst "+r.worstMs.toFixed(1)+` ms
XYZ: `+T.pos.x.toFixed(1)+" / "+T.pos.y.toFixed(1)+" / "+T.pos.z.toFixed(1)+`
Face/tile: `+e+`
On ground: `+T.onGround+"  Flying: "+T.flying+`
Crouching: `+T.crouching+"  Sprinting: "+(uf()&&!T.crouching)+`
Swimming: `+T.swimming+"  Underwater: "+T.underwater+`
Block below: `+go[i]+`
Day: `+(ZI()*24).toFixed(1)+"h  Chunks: "+IC()+" (+"+zx()+` queued)
Draws: `+(gt?gt.info.render.calls:0)+"  Tris: "+(gt?(gt.info.render.triangles/1e3).toFixed(0)+"k":"0")+`
Mobs: `+kn.length+"  Projectiles: "+Er.length+"  HP: "+T.hp+`
Mode: `+hp()+"  Held: "+hx(Wn())+`
Guns on ground: `+po.length+"  Hearts: "+mi.length+`
Seed: `+Gh()+(Ps()?' ("'+Ps()+'")':" (default)"))}const uD=.8,T_=-ja,Zo=new A,Jp=new A(0,1,0),A_=new ht,$t=new A,R_=new ht,Gd=new A,Sc=new A,Ii=new A,C_=new ht,Vd=new A,zn=new A,fD=new A(0,1,0),P_=new A(0,0,-1),Dh=new A,ky=new A;function Qp(){return Zo.set(0,0,0),dt.KeyW&&(Zo.z-=1),dt.KeyS&&(Zo.z+=1),dt.KeyA&&(Zo.x-=1),dt.KeyD&&(Zo.x+=1),Zo}function dD(t){return A_.setFromAxisAngle(Jp,T.yaw),t.applyQuaternion(A_)}function hD(t){const e=Vt(t);return zn.copy(t).addScaledVector(e.dir,-Ei*.5),Gn(Ji(Math.floor(zn.x),Math.floor(zn.y),Math.floor(zn.z)))}function pD(t){const e=Math.abs(t.dot(P_))>.9?fD:P_;Dh.crossVectors(e,t).normalize(),ky.crossVectors(t,Dh).normalize()}function mD(t,e){pD(e);for(const n of[Dh,ky])for(const i of[1,-1])for(const r of[0,1]){zn.copy(t).addScaledVector(n,i).addScaledVector(e,r);for(const o of[-.06,.06]){const s=Math.floor(zn.y+o),a=Ji(Math.floor(zn.x),s,Math.floor(zn.z));if(!Gn(a)&&a!==rt)return!0}}return!1}function gD(t){T.crouching=!1;const e=Vt(T.pos);Sc.copy(e.dir),Ii.copy(Sc).negate(),dl(T.spaceAlignQuat,Sc);const n=uf()?fm*1.25:fm,i=Qp(),r=T.vel.dot(Ii);i.lengthSq()>0?(i.normalize().multiplyScalar(n),C_.setFromAxisAngle(Jp,T.yaw),i.applyQuaternion(C_).applyQuaternion(T.spaceAlignQuat),T.vel.copy(i).addScaledVector(Ii,r)):(Vd.copy(T.vel).addScaledVector(Ii,-r),Vd.multiplyScalar(dm),T.vel.copy(Vd).addScaledVector(Ii,r)),zn.copy(T.pos).addScaledVector(Ii,1.01);const s=!Gn(Ji(Math.floor(zn.x),Math.floor(zn.y),Math.floor(zn.z)))&&mD(T.pos,Ii);let a;dt.Space?a=s?sv*SS:xl:nu()?a=-xl:a=$i.clamp((r+yS*t)*dm,-xl,xl),T.vel.addScaledVector(Ii,a-T.vel.dot(Ii)),T.onGround=kp(T.pos,T.vel,t,As,Ei,!1,fv,Sc,Gs),T.fallStartY=T.pos.y}function _D(t){const e=nu()?cv:uf()?lv*1.5:av*1.5,n=Qp();dt.Space&&(n.y+=1),nu()&&(n.y-=1),n.normalize().multiplyScalar(e*2),dD(n),T.pos.addScaledVector(n,t)}function vD(t,e){const n=Vt(T.pos);$t.copy(n.dir),T.vel.addScaledVector($t,n.g*t),T.crouching=nu();const i=T.crouching?cv:uf()?lv:av,r=Qp(),o=T.vel.dot($t);if(r.lengthSq()>0?(r.normalize().multiplyScalar(i),R_.setFromAxisAngle(Jp,T.yaw),dl(T.spaceAlignQuat,$t),r.applyQuaternion(R_).applyQuaternion(T.spaceAlignQuat),T.vel.copy(r).addScaledVector($t,o)):(Gd.copy(T.vel).addScaledVector($t,-o),Gd.multiplyScalar(uD),T.vel.copy(Gd).addScaledVector($t,o)),dt.Space&&T.onGround){const l=T.vel.dot($t);T.vel.addScaledVector($t,-sv-l),T.onGround=!1}const s=T.vel.dot($t);s>40&&T.vel.addScaledVector($t,40-s),(e||T.fallStartY===null)&&(T.fallStartY=-T.pos.dot($t));const a=T.crouching&&e&&FP(T.pos,As,$t,Xa);if(T.onGround=kp(T.pos,T.vel,t,As,Ei,a,fv,$t,Xa),!e&&T.onGround){const c=(T.fallStartY- -T.pos.dot($t))*n.g,u=vS*T_;if(c>u){const f=(c-u)/T_*xS;xi(Math.round(f),{kind:"fall"})}T.fallStartY=-T.pos.dot($t)}}function xD(t){if(T.dead)return;const e=T.onGround;if(T.flying){T.swimming=!1,_D(t);return}if(T.swimming=hD(T.pos),T.swimming){gD(t);return}vD(t,e)}const zy=[[0,1],[1,3],[3,2],[2,0],[4,5],[5,7],[7,6],[6,4],[0,4],[1,5],[3,7],[2,6]],bf=[[0,1,3],[0,3,2],[4,5,7],[4,7,6],[0,1,5],[0,5,4],[2,3,7],[2,7,6],[0,2,6],[0,6,4],[1,3,7],[1,7,5]],Kr=new Float32Array(zy.length*2*3),Mc=new Float32Array(bf.length*3*3),I_=[0,0,1,0,1,1,0,0,1,1,0,1],Hy=new Float32Array(bf.length*3*2);for(let t=0;t<bf.length/2;t++)Hy.set(I_,t*I_.length);function Gy(t,e){const n=t.getAttribute("position");!n||n.array.length!==e.length?t.setAttribute("position",new nt(e.slice(),3)):(n.array.set(e),n.needsUpdate=!0),t.computeBoundingSphere()}function yD(t,e){let n=0;for(const[i,r]of zy)Kr[n++]=e[i].x,Kr[n++]=e[i].y,Kr[n++]=e[i].z,Kr[n++]=e[r].x,Kr[n++]=e[r].y,Kr[n++]=e[r].z;Gy(t,Kr)}function SD(t,e){let n=0;for(const[i,r,o]of bf)for(const s of[i,r,o])Mc[n++]=e[s].x,Mc[n++]=e[s].y,Mc[n++]=e[s].z;Gy(t,Mc),t.getAttribute("uv")||t.setAttribute("uv",new nt(Hy.slice(),2))}function Vy(){return Array.from({length:8},()=>new A)}const MD=14;let so=!1;function ED(){return so}function bD(){if(!so)return{yaw:0,pitch:0};const t=performance.now()*.001;return{yaw:(Math.sin(t*1.3)+Math.sin(t*2.7)*.5)*um,pitch:(Math.sin(t*1.7)+Math.sin(t*3.1)*.5)*um}}function wD(t){const e=Wn(),n=e&&e.kind==="weapon"?un[e.weaponKey]:null,i=!T.dead&&!!(n&&n.scoped)&&Jn.rightHeld;i!==so&&(so=i,fx(so));const r=so?_S:zh;if(qe.fov!==r){const o=qe.fov+(r-qe.fov)*Math.min(1,MD*t);qe.fov=Math.abs(o-r)<.01?r:o,qe.updateProjectionMatrix()}}function em(){so=!1,qe.fov=zh,qe.updateProjectionMatrix(),fx(!1)}const TD=.05,AD=.1,Wy=.4,RD=.82,CD=.35,PD=.55;function L_(t,e,n,i,r,o){const s=(t.y-n)/o;if(s>=RD)return"head";if(s<CD)return"leg";const a=t.x-e,l=t.z-i;return Math.sqrt(a*a+l*l)>=r*PD?"arm":"torso"}const ID=new A,Pn={hit:!1,bx:0,by:0,bz:0,prevX:0,prevY:0,prevZ:0,target:null,prevTarget:null};function wf(){const t=qe.getWorldDirection(ID),e=qe.position;let n=Math.floor(e.x),i=Math.floor(e.y),r=Math.floor(e.z),o=Ph(e.x,e.y,e.z);for(let s=0;s<uv;s+=TD){const a=e.x+t.x*s,l=e.y+t.y*s,c=e.z+t.z*s,u=Ph(a,l,c);if(Ay(u,o))continue;const f=hl(u);if(f!==rt&&!Gn(f))return Pn.hit=!0,Pn.bx=Math.floor(a),Pn.by=Math.floor(l),Pn.bz=Math.floor(c),Pn.prevX=n,Pn.prevY=i,Pn.prevZ=r,Pn.target=u,Pn.prevTarget=o,Pn;n=Math.floor(a),i=Math.floor(l),r=Math.floor(c),o=u}return Pn.hit=!1,Pn}function Xy(t,e,n,i,r,o,s,a){const l=1/e.x,c=1/e.y,u=1/e.z,f=(n-o-t.x)*l,d=(n+o-t.x)*l,p=(i-t.y)*c,g=(i+s-t.y)*c,_=(r-o-t.z)*u,m=(r+o-t.z)*u,h=Math.max(Math.min(f,d),Math.min(p,g),Math.min(_,m)),x=Math.min(Math.max(f,d),Math.max(p,g),Math.max(_,m));return x<0||h>x||h>a?-1:Math.max(0,h)}function Yy(t,e){const n=qe.position;let i=null,r=1/0;for(const o of kn){if(o.dead||o.dying)continue;const s=Xy(n,t,o.pos.x,o.pos.y,o.pos.z,Wy,o.typeDef.height,e);s>=0&&s<r&&(r=s,i=o)}return{mob:i,dist:r}}function qy(t,e){const n=qe.position;let i=null,r=1/0,o=null;for(const s of ty()){const a=Xy(n,t,s.pos.x,s.pos.y,s.pos.z,s.radius,s.height,e);a>=0&&a<r&&(r=a,i=s.id,o=s)}return{playerId:i,dist:r,target:o}}const LD=new A;function DD(t=uv){const e=qe.getWorldDirection(LD),{mob:n,dist:i}=Yy(e,t),{playerId:r,dist:o}=qy(e,t);return{mob:n,mobDist:i,playerId:r,playerDist:o}}function UD(t,e){const n=qe.position;let i=e,r=null;for(let u=0;u<e;u+=AD){const f=Math.floor(n.x+t.x*u),d=Math.floor(n.y+t.y*u),p=Math.floor(n.z+t.z*u),g=Ji(f,d,p);if(g!==rt&&!Gn(g)){i=u,r=n.clone().addScaledVector(t,u);break}}const{mob:o,dist:s}=Yy(t,i),{playerId:a,dist:l,target:c}=qy(t,i);if(a!==null&&l<=s&&l<=i){const u=n.clone().addScaledVector(t,l),f=L_(u,c.pos.x,c.pos.y,c.pos.z,c.radius,c.height);return{mob:null,playerId:a,dist:l,hitPoint:u,zone:f}}if(o){const u=n.clone().addScaledVector(t,s),f=L_(u,o.pos.x,o.pos.y,o.pos.z,Wy,o.typeDef.height);return{mob:o,playerId:null,dist:s,hitPoint:u,zone:f}}return{mob:null,playerId:null,dist:i,hitPoint:r,zone:null}}const D_=Math.PI/2-.01,U_=new A,N_=new ht;function ND(){if(T.dead)return;const{dx:t,dy:e}=gp();T.yaw-=t*zc,T.pitch-=e*zc,T.pitch=Math.max(-D_,Math.min(D_,T.pitch));const n=bD();N_.setFromEuler(new Tn(T.pitch+n.pitch,T.yaw+n.yaw,0,"YXZ"));const i=Vt(T.pos);U_.copy(i.dir).negate(),dl(T.spaceAlignQuat,i.dir),qe.position.copy(T.pos).addScaledVector(U_,T.crouching?uS:cS),qe.quaternion.copy(T.spaceAlignQuat).multiply(N_);const r=Ji(Math.floor(qe.position.x),Math.floor(qe.position.y),Math.floor(qe.position.z));T.underwaterLiquid=Gn(r)?r:null,T.underwater=T.underwaterLiquid!==null,l2(T.underwater,T.underwaterLiquid)}const FD=Vy();function OD(){const t=wf();if(!t.hit){is.visible=!1,rs.visible=!1;return}const e=Cy(t.target,FD);e?(is.visible=!1,yD(rs.geometry,e),rs.visible=!0):(rs.visible=!1,is.position.set(t.bx+.5,t.by+.5,t.bz+.5),is.visible=!0)}const Ur=new Wv,ga=new xn(50,16/9,.01,20);ga.position.set(0,0,0);const $y=new rp(16777215,3.2);$y.position.set(-.6,.8,1);Ur.add($y);const Ky=new rp(14477567,1.2);Ky.position.set(.9,.2,.4);Ur.add(Ky);Ur.add(new $v(16777215,2));const F_=new Map;function BD(t,e={}){const n=t+":"+JSON.stringify(e);let i=F_.get(n);return i||(i=new Si({color:t,...e}),F_.set(n,i)),i}function et(t,e,n,i,r,o,s,a){const l=new lt(new Zt(t,e,n),BD(s,a));return l.position.set(i,r,o),l}function jy(){const t=new jt,e=et(.075,.17,.09,0,-.1,.05,3817285);e.rotation.x=-.28,t.add(e),t.add(et(.07,.075,.3,0,0,-.06,6054763));const n=et(.075,.07,.26,0,.055,-.08,9278619);return t.add(n),t.add(et(.03,.03,.06,0,.02,-.23,2895667)),{group:t,parts:{slide:n},muzzle:new A(0,.03,-.26)}}function kD(){const t=new jt;t.add(et(.055,.055,.5,-.035,.03,-.16,5988454)),t.add(et(.055,.055,.5,.035,.03,-.16,5988454)),t.add(et(.1,.12,.22,0,-.02,.13,9067051));const e=et(.13,.09,.13,0,-.04,-.14,7029792);return t.add(e),t.add(et(.05,.13,.07,0,-.1,.06,7029792)),{group:t,parts:{pump:e},muzzle:new A(0,.03,-.42)}}function zD(){const t=new jt;t.add(et(.17,.17,.26,0,0,.06,4145992));const e=new jt;for(let n=0;n<6;n++){const i=n/6*Math.PI*2;e.add(et(.035,.035,.36,Math.cos(i)*.055,Math.sin(i)*.055,-.18,13395456))}return t.add(e),t.add(et(.055,.14,.08,0,-.15,.1,2764081)),{group:t,parts:{barrels:e},muzzle:new A(0,0,-.38)}}function HD(){const t=new jt;t.add(et(.14,.14,.56,0,.02,-.1,6976123)),t.add(et(.16,.16,.05,0,.02,.19,4672852));const e=et(.1,.1,.14,0,.02,-.42,12862778);return t.add(e),t.add(et(.05,.13,.08,0,-.1,.02,5264989)),t.add(et(.04,.06,.16,.09,.1,.02,4672852)),{group:t,parts:{warhead:e},muzzle:new A(0,.02,-.5)}}function GD(){const t=new jt;t.add(et(.05,.05,.62,0,0,-.14,3621167)),t.add(et(.07,.1,.22,0,-.03,.16,2765090)),t.add(et(.045,.11,.1,0,-.11,-.02,2238234));const e=et(.03,.03,.09,.045,.035,.05,9278619);return t.add(e),t.add(et(.05,.05,.18,0,.075,-.12,1316623)),t.add(et(.06,.02,.02,0,.1,-.2,921610)),t.add(et(.05,.13,.07,0,-.16,.1,2765090)),{group:t,parts:{bolt:e},muzzle:new A(0,0,-.46)}}function VD(){const t=new jt;t.add(et(.17,.17,.44,0,0,.02,7174741)),t.add(et(.19,.19,.05,0,0,.23,5068608));const e=et(.14,.14,.24,0,0,-.32,10145074,{emissive:7117858,emissiveIntensity:.9});return t.add(e),t.add(et(.05,.14,.08,0,-.13,.06,4607800)),{group:t,parts:{warhead:e},muzzle:new A(0,0,-.45)}}const WD={pistol:jy,shotgun:kD,chaingun:zD,rocket:HD,nuke:VD,sniper:GD},O_={pistol:{pos:[.24,-.22,-.78],rot:[.02,.1,0],duration:.2},shotgun:{pos:[.23,-.24,-.82],rot:[.02,.08,0],duration:.55},chaingun:{pos:[.31,-.27,-1.14],rot:[0,.06,0],duration:.1},rocket:{pos:[.29,-.24,-1.08],rot:[.03,.09,0],duration:.65},nuke:{pos:[.3,-.25,-1.12],rot:[.02,.08,0],duration:.95},sniper:{pos:[.28,-.23,-1.05],rot:[.01,.07,0],duration:.85}},Zy={pos:[.3,-.28,-.92],rot:[.35,-.55,.15],duration:.28},Wd=.19,XD={pos:[.27,-.26,-.85],rot:[.1,-.35,.05],duration:.3},YD={pos:[.33,-.31,-1.1],rot:[.08,-.3,.05],duration:.4};function qD(t){const e=Hn[t.toolKey],n=e.tier==="machine"?1.6:1,i=new jt;return i.add(et(.055*n,.055*n,.32*n,0,0,-.02,6046502)),i.add(et(.16*n,.15*n,.18*n,0,.03,-.26*n,e.color)),i.add(et(.06*n,.17*n,.09*n,0,-.12*n,.06,3817285)),{group:i,parts:{},muzzle:null}}const B_=[1,1,0,2,1,1];function $D(t){const e=new Zt(Wd,Wd,Wd),n=Kt[t]||Kt[3],i=[n.top,n.side,n.bottom],r=e.getAttribute("position").count,o=new Float32Array(r*3),s=new Me;for(let c=0;c<6;c++){s.setHex(i[B_[c]]);for(let u=0;u<4;u++){const f=(c*4+u)*3;o[f]=s.r,o[f+1]=s.g,o[f+2]=s.b}}e.setAttribute("color",new nt(o,3));let a;if(Zv()&&ru[t]){const c=e.getAttribute("uv");for(let u=0;u<6;u++){const f=Dx(ru[t][B_[u]]);for(let d=0;d<4;d++){const p=u*4+d;c.setXY(p,f.u0+c.getX(p)*(f.u1-f.u0),f.v0+c.getY(p)*(f.v1-f.v0))}}c.needsUpdate=!0,a=new Si({map:Lx(),vertexColors:!1})}else a=new Si({vertexColors:!0});const l=new jt;return l.add(new lt(e,a)),{group:l,parts:{},muzzle:null}}const Jy=new Vn({color:16769162,transparent:!0,opacity:0,depthWrite:!1,blending:Zd}),Da=new lt(new nl(.22,.22),Jy);Da.visible=!1;Ur.add(Da);let _a=0,mo=null,Lt=null,Ui=Zy,ds=-1,br=-1,Ec=0,k_=0,Fc=0,Xd=0,Yd=0,z_=0,H_=0;const vu=new Map;function KD(t){return t?t.kind==="weapon"?"w:"+t.weaponKey:t.kind==="tool"?"t:"+t.toolKey:"b:"+t.id:null}function jD(t){const e=KD(t);if(e===mo||(mo=e,Lt&&Ur.remove(Lt.group),Lt=null,!e))return;let n=vu.get(e);n||(n=t.kind==="weapon"?(WD[t.weaponKey]||jy)():t.kind==="tool"?qD(t):$D(t.id),vu.set(e,n)),Lt=n,Ui=t.kind==="weapon"?O_[t.weaponKey]||O_.pistol:t.kind==="tool"?Hn[t.toolKey].tier==="machine"?YD:XD:Zy,Ur.add(Lt.group),ds=-1,br=-1}function ZD(){Lt&&Ur.remove(Lt.group);for(const t of vu.values())t.group.traverse(e=>{e.geometry&&e.geometry.dispose()});vu.clear(),Lt=null,mo=null}function JD(){ds=0,_a=.05,mo==="w:chaingun"&&(Fc=26)}function Ua(){(br<0||br>.1)&&(br=0)}function Jo(t){return t<.28?t/.28:1-(t-.28)/.72}const QD={pistol(t,e,n){const i=Jo(e);n.position.z+=i*.1,n.rotation.x-=i*.3,t.slide&&(t.slide.position.z=-.08+i*.075)},shotgun(t,e,n){const i=Jo(Math.min(1,e/.55));if(n.position.z+=i*.2,n.position.y+=i*.03,n.rotation.x-=i*.38,t.pump){const r=Math.max(0,(e-.45)/.55);t.pump.position.z=-.14+Math.sin(r*Math.PI)*.16}},chaingun(t,e,n){const i=Jo(e);n.position.z+=i*.035,n.rotation.x-=i*.05,n.position.x+=Math.sin(e*90)*.006},rocket(t,e,n){const i=Jo(e);n.position.z+=i*.26,n.rotation.x-=i*.42,n.rotation.z+=i*.1,t.warhead&&(t.warhead.visible=e>.75)},sniper(t,e,n){const i=Jo(Math.min(1,e/.3));if(n.position.z+=i*.28,n.rotation.x-=i*.5,t.bolt){const r=Math.max(0,(e-.3)/.7);t.bolt.position.z=.05-Math.sin(r*Math.PI)*.1}},nuke(t,e,n){const i=Jo(e);n.position.z+=i*.34,n.position.y-=i*.05,n.rotation.x-=i*.5,n.rotation.z+=Math.sin(e*14)*.06*(1-e),t.warhead&&(t.warhead.visible=e>.8)}};function eU(t){jD(T.dead?null:Wn());const e=T.yaw-z_,n=T.pitch-H_;z_=T.yaw,H_=T.pitch;const i=1-Math.exp(-9*t);if(Xd+=($i.clamp(e*.9,-.09,.09)-Xd)*i,Yd+=($i.clamp(-n*.6,-.07,.07)-Yd)*i,_a>0&&(_a-=t,Jy.opacity=Math.max(0,_a/.05)*.9,Da.visible=_a>0),!Lt)return;Lt.group.visible=!ED();const r=Lt.group,o=Math.hypot(T.vel.x,T.vel.z),s=T.onGround?1:0;Ec+=t*(4+o*1.1);const a=Math.min(1,o/6)*s;if(r.position.set(Ui.pos[0]+Xd,Ui.pos[1]+Yd,Ui.pos[2]),r.rotation.set(Ui.rot[0],Ui.rot[1],Ui.rot[2]),r.position.x+=Math.cos(Ec)*.012*a,r.position.y+=Math.abs(Math.sin(Ec))*.014*a,r.rotation.z+=Math.cos(Ec)*.03*a,br>=0){br+=t;const l=br/Ui.duration;if(l>=1)br=-1;else{const c=Math.sin(l*Math.PI);r.position.z+=c*.13,r.position.y-=c*.09,r.rotation.x-=c*.75}}if(ds>=0){ds+=t;const l=ds/Ui.duration;if(l>=1){ds=-1;for(const c of Object.values(Lt.parts))c&&c.visible===!1&&(c.visible=!0)}else{const c=mo&&mo.startsWith("w:")?mo.slice(2):null,u=QD[c];u&&u(Lt.parts,l,r)}}Lt.parts.barrels&&(Fc=Math.max(0,Fc-t*14),k_+=Fc*t,Lt.parts.barrels.rotation.z=k_),Da.visible&&Lt.muzzle&&Da.position.set(r.position.x+Lt.muzzle.x,r.position.y+Lt.muzzle.y,r.position.z+Lt.muzzle.z)}function tU(){if(!gt||!Lt)return;const t=gt.getSize(new Pe),e=t.x/Math.max(1,t.y);ga.aspect!==e&&(ga.aspect=e,ga.updateProjectionMatrix()),gt.autoClear=!1,gt.clearDepth(),gt.render(Ur,ga),gt.autoClear=!0}const G_=.07,V_=.45,W_=.4,Ss=[],Ms=[],Es=[],bs=[];function nU(t,e,n,i){const r=t.clone().addScaledVector(e,n),o=new Et().setFromPoints([t,r]),s=new ep({color:i||16777113,transparent:!0,opacity:.9}),a=new Yv(o,s);oe.add(a),Ss.push({line:a,life:G_,maxLife:G_})}function iU(t){for(let e=Ss.length-1;e>=0;e--){const n=Ss[e];if(n.life-=t,n.life<=0){oe.remove(n.line),n.line.geometry.dispose(),Ss.splice(e,1);continue}n.line.material.opacity=n.life/n.maxLife*.9}}const X_=[16769126,16777215,16726843];function rU(t){const e=new jt;e.position.copy(t);for(let n=0;n<X_.length;n++){const i=new ju(.07+n*.05,.1+n*.05,20),r=new Vn({color:X_[n],transparent:!0,opacity:.95,side:yn,depthWrite:!1,depthTest:!1});e.add(new lt(i,r))}oe.add(e),bs.push({group:e,life:W_,maxLife:W_}),Xt(t,{color:16769126,count:10,speed:2.6,upBias:2,size:.09,life:.45,gravityScale:.5})}function oU(t){for(let e=bs.length-1;e>=0;e--){const n=bs[e];if(n.life-=t,n.life<=0){oe.remove(n.group);for(const r of n.group.children)r.geometry.dispose(),r.material.dispose();bs.splice(e,1);continue}const i=1-n.life/n.maxLife;n.group.quaternion.copy(qe.quaternion),n.group.scale.setScalar(1+i*4.5);for(const r of n.group.children)r.material.opacity=.95*(1-i)}}function sU(t){const e=t.glow,n=e?new Lr(.35,10,8):new $u(.09,.09,.55,8),i=new Si({color:t.color,emissive:e?13434726:5579264,emissiveIntensity:e?.9:.4});return new lt(n,i)}function aU(t,e,n){const i=sU(t);i.position.copy(e),i.quaternion.setFromUnitVectors(new A(0,1,0),n),oe.add(i),Ms.push({wd:t,mesh:i,pos:e.clone(),vel:n.clone().multiplyScalar(t.speed),life:t.range/t.speed})}function lU(t){for(let e=Ms.length-1;e>=0;e--){const n=Ms[e];n.life-=t,n.pos.addScaledVector(n.vel,t),n.mesh.position.copy(n.pos);let i=n.life<=0||Gs(n.pos.x,n.pos.y,n.pos.z);if(!i){for(const r of kn)if(!r.dead&&n.pos.distanceTo(r.pos)<1){i=!0;break}}i&&(cU(n.pos.clone(),n.wd),oe.remove(n.mesh),Ms.splice(e,1))}}function cU(t,e){for(const i of kn){if(i.dead)continue;const r=i.pos.distanceTo(t);r<e.blastRadius&&Zp(i,Math.round(e.blastDamage*(1-r/e.blastRadius)))}const n=T.pos.distanceTo(t);n<e.blastRadius&&xi(Math.round(e.blastDamage*(1-n/e.blastRadius)),{kind:"explosion"});for(const i of ty()){const r=i.pos.distanceTo(t);r<e.blastRadius&&Np(i.id,vf(Math.round(e.blastDamage*(1-r/e.blastRadius))))}lP(t.x,t.y,t.z,e.craterRadius),Xx(t,e.craterRadius),uU(t,e)}function uU(t,e){const n=e.glow?16772744:16746564,i=new lt(new Lr(1,14,10),new Vn({color:n,transparent:!0,opacity:.85}));i.position.copy(t),i.scale.setScalar(.3),oe.add(i),Es.push({mesh:i,life:V_,maxLife:V_,maxScale:e.blastRadius*1.1}),e.glow&&c2()}function fU(t){for(let e=Es.length-1;e>=0;e--){const n=Es[e];if(n.life-=t,n.life<=0){oe.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),Es.splice(e,1);continue}const i=1-n.life/n.maxLife;n.mesh.scale.setScalar(.3+i*n.maxScale),n.mesh.material.opacity=.85*(1-i)}}function Tf(){for(const t of Ss)oe.remove(t.line),t.line.geometry.dispose();Ss.length=0;for(const t of Ms)oe.remove(t.mesh);Ms.length=0;for(const t of Es)oe.remove(t.mesh),t.mesh.geometry.dispose();Es.length=0;for(const t of bs){oe.remove(t.group);for(const e of t.group.children)e.geometry.dispose(),e.material.dispose()}bs.length=0}let Na=0;function dU(t){const e=new A;qe.getWorldDirection(e);const n=qe.position.clone();for(let i=0;i<t.pellets;i++){const r=e.clone();t.spread>0&&(r.x+=(Math.random()-.5)*t.spread,r.y+=(Math.random()-.5)*t.spread,r.z+=(Math.random()-.5)*t.spread,r.normalize());const o=UD(r,t.range),s=MA(t.damage,o.zone);o.mob?Zp(o.mob,s):o.playerId!==null&&Np(o.playerId,vf(s)),o.zone==="head"&&(o.mob||o.playerId!==null)&&rU(o.hitPoint),nU(n,r,o.dist,t.color)}}function hU(t){const e=new A;qe.getWorldDirection(e);const n=qe.position.clone().addScaledVector(e,.7);aU(t,n,e)}function Qy(){const t=Wn();if(!t||t.kind!=="weapon"||Na>0)return;const e=un[t.weaponKey];Na=1/e.fireRate,gx(),JD(),e.kind==="hitscan"?dU(e):hU(e)}function pU(t){if(Na=Math.max(0,Na-t),!Jn.leftHeld||T.dead)return;const e=Wn();!e||e.kind!=="weapon"||un[e.weaponKey].auto&&Na<=0&&Qy()}const mU=10;function Y_(t){return t&&t.kind==="tool"?Hn[t.toolKey].meleeDamage:mU}function gU(){const t=wf();if(!t.hit)return;if(Ry(t.target)){We("Solid bedrock — can't dig any deeper.");return}const e=hl(t.target);Kp(t.target,rt),e!==rt&&al(e),Py(t.target,T.pos)}function _U(){if(T.dead)return;const t=Wn();if(t&&t.kind==="weapon"){Qy();return}const{mob:e,mobDist:n,playerId:i,playerDist:r}=DD();if(i!==null&&(!e||r<=n)){Ua(),Np(i,vf(Y_(t)));return}if(e){Ua(),Zp(e,Y_(t));return}lf()&&(Ua(),gU())}function vU(t,e,n){const i=As,r=T.pos;return t<r.x+i&&t+1>r.x-i&&e<r.y+Ei&&e+1>r.y&&n<r.z+i&&n+1>r.z-i}let xu=0;function eS(){if(T.dead||xu>0)return;const t=Wn();if(!t||t.kind==="weapon")return;const e=wf();e.hit&&(vU(e.prevX,e.prevY,e.prevZ)||(Kp(e.prevTarget,t.id),xu=fS,Ua(),gx()))}function xU(t){xu=Math.max(0,xu-t),Jn.rightHeld&&eS()}const ws=64,Ts=8,q_=3,tS=48;function yU(t){let e=t>>>0;return()=>(e^=e<<13,e>>>=0,e^=e>>17,e^=e<<5,e>>>=0,e/4294967296)}function SU(t,e,n,i,r){t.beginPath(),t.fillStyle=`rgba(12,9,7,${r*.5})`,t.arc(e,n,i,0,Math.PI*2),t.fill(),t.beginPath(),t.fillStyle=`rgba(8,6,5,${r})`,t.arc(e,n,i*.48,0,Math.PI*2),t.fill()}let da=null;function MU(){if(da)return da;const t=yU(805569);da=[];for(let e=0;e<tS;e++)da.push({x:ws*(.12+t()*.76),y:ws*(.12+t()*.76),radius:ws*(.02+t()*.05),alpha:.55+t()*.4});return da}function EU(t,e){t.clearRect(0,0,ws,ws);const n=(e+1)/Ts,i=Math.round(q_+(tS-q_)*Math.pow(n,1.4)),r=MU();for(let o=0;o<i;o++){const s=r[o];SU(t,s.x,s.y,s.radius,s.alpha)}}let bc=null;function bU(t){if(!bc){bc=[];for(let e=0;e<Ts;e++){const n=document.createElement("canvas");n.width=n.height=ws;const i=n.getContext("2d");EU(i,e);const r=new qu(n);r.wrapS=r.wrapT=Vi,r.needsUpdate=!0,bc.push(r)}}return bc[Math.max(0,Math.min(Ts-1,t))]}const wU=.95,$_=.35,TU=Vy();let Jr=null,Uh=-1,va=0,Nh=!1;function ts(){Jr=null,Uh=-1,va=0,Nh=!1,Zu.visible=!1,Oi.visible=!1,ux(null)}function AU(t,e){if(!t||t.kind!=="tool")return 1;const n=Hn[t.toolKey];return n.categories.includes(e)?n.speedMul:1}function RU(t,e,n){const i=Ji(t,e,n);i!==rt&&(kP(t,e,n,rt),al(i))}function CU(t,e,n,i){if(!i||i.kind!=="tool")return;const r=Hn[i.toolKey];if(r.radius<=0)return;const o=jd[Ji(t,e,n)];if(r.categories.includes(o))for(let s=-r.radius;s<=r.radius;s++)for(let a=-r.radius;a<=r.radius;a++)for(let l=-r.radius;l<=r.radius;l++){if(s===0&&a===0&&l===0)continue;const c=t+s,u=e+a,f=n+l;jd[Ji(c,u,f)]===o&&RU(c,u,f)}}function PU(t){const e=hl(t);e!==rt&&(Kp(t,rt),al(e),Py(t,T.pos))}function K_(t,e,n,i,r){CU(e,n,i,t),PU(r),ts()}function IU(t){if(T.dead){ts();return}const e=Wn();if(e&&e.kind==="weapon"){ts();return}if(!Jn.leftHeld){ts();return}const n=wf();if(!n.hit){ts();return}if(Ry(n.target)){Nh||We("Solid bedrock — can't dig any deeper."),ts(),Nh=!0;return}const i=of();if((!Ay(n.target,Jr)||i!==Uh)&&(Jr=n.target,Uh=i,va=0),lf()){K_(e,n.bx,n.by,n.bz,Jr);return}const r=hl(Jr),o=jd[r],a=(ES[r]??MS)/AU(e,o);va+=t/a,Ua();const l=Math.min(1,va),c=Math.min(Ts-1,Math.floor(l*Ts)),u=l*Ts-c,f=($_+u*(1-$_))*wU;ux(l),Oi.material.map||(Oi.material.needsUpdate=!0),Oi.material.map=bU(c);const d=Cy(Jr,TU);Zu.visible=!1,d&&(SD(Oi.geometry,d),Oi.visible=!0,Oi.material.opacity=f),va>=1&&K_(e,n.bx,n.by,n.bz,Jr)}function LU(){return!hr()&&!Up()}const DU={shirt:"Shirt",shorts:"Trousers",skin:"Skin",hair:"Hair"};let Fh=null;function UU({profile:t,defaultUrl:e,onProfileChange:n,onConnect:i,onDisconnect:r}){Fh=n;const o=document.getElementById("mp-name");if(o){o.value=t.name,o.addEventListener("input",()=>{Fh({name:o.value.slice(0,20)})});for(const c of["keydown","keyup","keypress"])o.addEventListener(c,u=>u.stopPropagation())}const s=document.getElementById("mp-url");if(s){s.value=e;for(const c of["keydown","keyup","keypress"])s.addEventListener(c,u=>u.stopPropagation())}NU(t);const a=document.getElementById("mp-connect");a&&a.addEventListener("click",()=>{const c=s&&s.value.trim()||e;i(c)});const l=document.getElementById("mp-disconnect");l&&l.addEventListener("click",()=>r())}function NU(t){const e=document.getElementById("mp-appearance");if(e){e.innerHTML="";for(const n of Kx){const i=document.createElement("div");i.className="swatch-row";const r=document.createElement("span");r.className="swatch-label",r.textContent=DU[n]||n,i.appendChild(r),ro[n].forEach((o,s)=>{const a=document.createElement("button");a.type="button",a.className="swatch"+(t[n]===s?" active":""),a.dataset.part=n,a.dataset.index=String(s),a.title=o.name,a.style.background="#"+o.hex.toString(16).padStart(6,"0"),a.addEventListener("click",()=>{for(const l of i.querySelectorAll(".swatch"))l.classList.remove("active");a.classList.add("active"),Fh({[n]:s})}),i.appendChild(a)}),e.appendChild(i)}}}function j_(t,e=""){const n=document.getElementById("mp-status");if(n){const o={offline:"Not connected",connecting:"Connecting…",online:"Connected",error:"Connection failed"+(e?" — "+e:"")}[t]||t;n.textContent=o,n.dataset.state=t}const i=document.getElementById("mp-connect"),r=document.getElementById("mp-disconnect");i&&(i.disabled=t==="online"||t==="connecting"),r&&(r.disabled=t==="offline"||t==="error")}function FU(t){const e=document.getElementById("mp-players");if(e){if(t.length===0){e.textContent="No one else here yet.";return}e.textContent="In game: "+t.map(n=>n.name).join(", ")}}const Z_=120,OU=30,J_=6,BU=100,kU=.28,Q_=.95,wc=new Map;function zU(t){const e=Math.min(1,Math.max(0,(t-J_)/(BU-J_)));return Q_-e*(Q_-kU)}function HU(t,e=OU){if(t.length<2)return t.map(f=>({...f}));const n=t.map(f=>({...f})).sort((f,d)=>f.angle-d.angle),i=n.length;let r=0,o=-1;for(let f=0;f<i;f++){let d=n[(f+1)%i].angle-n[f].angle;f===i-1&&(d+=360),d>o&&(o=d,r=(f+1)%i)}const s=[...n.slice(r),...n.slice(0,r)],a=s[0].angle,l=s.map(f=>({...f,angle:f.angle<a?f.angle+360:f.angle})),c=l.reduce((f,d)=>f+d.angle,0)/i;for(let f=1;f<i;f++)l[f].angle-l[f-1].angle<e&&(l[f].angle=l[f-1].angle+e);const u=c-l.reduce((f,d)=>f+d.angle,0)/i;for(const f of l)f.angle=((f.angle+u)%360+360)%360;return l}function GU(){const t=document.createElement("div");t.className="radar-item";const e=document.createElement("div");e.className="radar-arrow",e.textContent="▲";const n=document.createElement("div");return n.className="radar-name",t.appendChild(e),t.appendChild(n),{el:t,arrow:e,label:n}}function VU(t){const e=document.getElementById("player-radar");if(!e)return;const n=HU(t),i=new Set;for(const r of n){i.add(r.id);let o=wc.get(r.id);o||(o=GU(),wc.set(r.id,o),e.appendChild(o.el));const s=r.angle*Math.PI/180,a=Z_*Math.sin(s),l=-Z_*Math.cos(s);o.el.style.transform=`translate(-50%, -50%) translate(${a.toFixed(1)}px, ${l.toFixed(1)}px)`,o.el.style.opacity=String(zU(r.distance)),o.arrow.style.transform=`rotate(${r.angle.toFixed(1)}deg)`,o.label.textContent=r.name}for(const[r,o]of wc)i.has(r)||(o.el.remove(),wc.delete(r))}const WU=120,XU=.05,ev=16,YU=4e5;function tm(){WC(T.pos),T.vel.set(0,0,0),T.fallStartY=null}let Oc=!1,Bc=null,yu=!1;function nm(){Oc=!1,Bc=null,Mx()}let Oh=!1,kc=null;function Af(){k2({seed:Gh(),input:Ps()})}function nS(t){Vh(t),Ix(),Ef(),xf(),Mf(),Sf(),yf(),Tf(),bp(),_f(),Ep(),Dp(),tm(),bo(),nm(),Af()}function qU(){G2(),T.dead=!1,T.hp=T.maxHp,T.damageFlash=0,T.invincible=1,Ef(),xf(),Tf(),Sf(),yf(),Mf(),Gp(),Xp(),qp(),em(),fp(),_x(),my(),T.lastAttacker=null,T.lastDamageSource=null,Zi(T.hp,T.maxHp),tm(),ef()}let Ka=!1,pl=null,ml=null,im="load",wr=[];function $U(){pl=null,ml=null,Su=new Map,Vh(gv()),Ef(),xf(),Mf(),Sf(),yf(),Tf(),Gp(),Xp(),qp(),em(),fp(),_x(),my(),T.dead=!1,T.hp=T.maxHp,T.lastAttacker=null,T.lastDamageSource=null,bp(),_f(),Ep(),Dp(),tm(),bo(),yu=!0,nm(),Af(),Zi(T.hp,T.maxHp),Ka=!0,af(!0),Ty(),Ix()}async function KU(t,e,n){pl=e,ml=n??null,Su=new Map((t.multiplayerPlayers||[]).map(r=>[r.name,r])),Vh(t.seedInput),Ef(),xf(),Mf(),Sf(),yf(),Tf(),Gp(),Xp(),qp(),em(),fp(),bp(),_f(),Ep(),Dp(),tu(t.gameMode);for(let r=0;r<Tt.length;r++)Tt[r]=t.inventory.slots[r]??null;fh(t.inventory.selectedSlot??0),$s(),T.pos.set(t.player.pos.x,t.player.pos.y,t.player.pos.z),T.vel.set(0,0,0),T.yaw=t.player.yaw,T.pitch=t.player.pitch,T.hp=t.player.hp,T.maxHp=t.player.maxHp,T.flying=t.player.flying,T.spaceAlignQuat.set(t.player.spaceAlignQuat.x,t.player.spaceAlignQuat.y,t.player.spaceAlignQuat.z,t.player.spaceAlignQuat.w),T.dead=!1,T.fallStartY=null,T.lastAttacker=null,T.lastDamageSource=null;const i=df(T.pos);if(i){const{faceId:r,u:o,v:s}=cl(T.pos,i.center,i.halfExtent);Hx(i,r,o,s,2)}bo(),yu=!0,nm(),Af(),Zi(T.hp,T.maxHp),Ka=!0,af(!0),Ty(),tC(t.edits)}async function Bh(t,e){const n=await R3(t,e!=null?{overwriteId:e}:void 0);return pl=n,ml=t||null,n}function jU(){return Bh(ml,pl)}async function ZU(){im="load";try{wr=await Lp()}catch{We("Could not read saved games");return}$p("load",wr)}async function JU(){im="save";try{wr=await Lp()}catch{We("Could not read saved games");return}$p("save",wr)}function qd(){Ka=!1,pl=null,ml=null,af(!1),wy()}function QU(){if(Up()&&(Fp(),Eh(),Qr()),!nC()){qd();return}HI({title:"Unsaved changes",message:"You haven't saved recently. Quit anyway?",buttons:[{label:"Save & Quit",primary:!0,onClick:()=>{jU().then(()=>{We("Game saved"),qd()}).catch(()=>We("Could not save — quit cancelled"))}},{label:"Quit Without Saving",onClick:qd},{label:"Cancel",onClick:()=>{}}]})}let Su=new Map;function Qr(){FU([...cn.values()].map(t=>({name:t.name})))}function tv(t){const e=Su.get(t.name);e&&(Su.delete(t.name),fP(t.id,[e.pos.x,e.pos.y,e.pos.z],e.yaw,e.hp))}function eN(){const t=g3();UU({profile:t,defaultUrl:iP(),onProfileChange:e=>{const n=m3({...Dg(),...e});uP(n.name,Ug(n))},onConnect:e=>oP(e,()=>({name:Dg().name,appearance:Ug(),seedInput:Ps(),devConsoleEnabled:mp()})),onDisconnect:()=>{Fp(),Eh(),Qr()}}),rP((e,n)=>{j_(e,n),e!=="online"&&(Eh(),Qr(),eR())}),j_("offline"),li(Ut.WELCOME,e=>{for(const n of e.players)Fg(n),tv(n);Qr(),typeof e.seedInput=="string"&&e.seedInput!==Ps()&&(nS(e.seedInput),We("Joined — world reseeded to match the host")),typeof e.devConsoleEnabled=="boolean"&&Q2(e.devConsoleEnabled)}),li(Ut.PLAYER_JOINED,e=>{Fg(e),Qr(),tv(e)}),li(Ut.PLAYER_LEFT,e=>{ey(e.id),Qr()}),li(Ut.PLAYER_PROFILE,e=>{Qx(e),Qr()}),li(Ut.SNAPSHOT,e=>x3(e.players,kg())),li(Ut.HIT_YOU,e=>xi(e.damage,{kind:"player",id:e.from,name:cn.get(e.from)?.name})),li(Ut.BLOCK,e=>i3(e.x,e.y,e.z,e.id)),li(Ut.CRATER,e=>Xx({x:e.x,y:e.y,z:e.z},e.radius)),li(Ut.PLAYER_DIED,e=>{const n=cn.get(e.id);n&&(n.dead=!0),e.by!=null&&e.by===kg()&&py(WU)}),li(Ut.RESTORE_STATE,e=>{T.pos.set(e.pos[0],e.pos[1],e.pos[2]),T.vel.set(0,0,0),T.yaw=e.yaw,T.hp=e.hp,T.fallStartY=null,Zi(T.hp,T.maxHp),We("Your saved position was restored")}),t3((e,n,i,r)=>aP(e,n,i,r))}let $d=0;function tN(t){Up()&&($d+=t*1e3,!($d<eP)&&($d=0,sP({pos:[+T.pos.x.toFixed(2),+T.pos.y.toFixed(2),+T.pos.z.toFixed(2)],yaw:+T.yaw.toFixed(3),pitch:+T.pitch.toFixed(3),crouching:T.crouching,hp:T.hp,dead:T.dead})))}function nN(){const t=Math.round(20*wh());N2({slider:ly(),escalatingSpawns:cy(),pointsPerKill:wh().toFixed(1),killsToPeak:Math.max(1,Math.round(hy()/t))}),cx(uy(),fy(),fl())}function iN(){const t=Mo();O2({dist:t,blocks:t*be})}function rN(){B2({minutes:cp()})}function oN(){F2({enabled:pp(),local:mp(),overridden:j2()})}let yt=null;function sN(){return yt}function nv(){const t=!sf();if(D2(t),tR(t),t)hr()&&document.exitPointerLock(),Br();else{for(let e=0;e<xo;e++)Wt[e]&&(qs(Wt[e]),Wt[e]=null);yt&&(Mu(yt),yt=null),ef()}dp()}function aN(){const t=new Set;for(const[e,n]of Object.entries(tf))dh(n,eu)&&t.add("vehicle:"+e);for(const[e,n]of Object.entries(nf))dh(n,eu)&&t.add("tool:"+e);return t}function Br(){sf()&&R2({slots:Tt,craft:Wt,result:vx(),selected:of(),held:yt,craftable:aN()})}function iS(t,e){return t==="craft"?Wt[e]:Tt[e]}function kh(t,e,n){t==="craft"?Wt[e]=n:Tt[e]=n}function Mu(t){t&&(t.kind==="block"?al(t.id,t.count):qs(t))}function lN(t,e){if(yt)return;const n=iS(t,e);n&&(yt=n,kh(t,e,null),$s(),Br())}function cN(t,e){if(!yt)return;const n=iS(t,e);n?px(n,yt)?(n.count+=yt.count,yt=null):(kh(t,e,yt),yt=n):(kh(t,e,yt),yt=null),$s(),Br()}function uN(t){const e=Wt[t];e&&(Mu(e),Wt[t]=null,$s(),Br())}function fN(t){if(!yt)return;const e=Wt[t];e&&!px(e,yt)||(e?e.count++:Wt[t]={...yt,count:1},yt.count--,yt.count<=0&&(yt=null),$s(),Br())}function dN(){const t=_2();if(t){if(!qs(t)){We("No room for that");return}Br()}}function hN(t,e){const n=t==="vehicle"?tf[e]:nf[e];if(!n||!dh(n,eu)){We("Missing materials");return}for(let i=0;i<xo;i++)Wt[i]&&(Mu(Wt[i]),Wt[i]=null);yt&&(Mu(yt),yt=null);for(let i=0;i<xo;i++){const r=n[i];r!=null&&(m2(r,1),Wt[i]={id:r,kind:"block",count:1})}$s(),Br()}function pN(){const t=document.getElementById("flight-hud");if(!t)return;const e=Hp(),n=Vp(),i=Yp();t.classList.toggle("hidden",!e&&!n&&!i),e?(document.getElementById("flight-name").textContent=qP().def.label,document.getElementById("flight-speed").textContent=KP().toFixed(0),document.getElementById("throttle-fill").style.width=($P()*100).toFixed(0)+"%"):n?(document.getElementById("flight-name").textContent=lI().def.label,document.getElementById("flight-speed").textContent=uI().toFixed(0),document.getElementById("throttle-fill").style.width=(cI()*100).toFixed(0)+"%"):i&&(document.getElementById("flight-name").textContent=MI().def.label,document.getElementById("flight-speed").textContent=bI().toFixed(0),document.getElementById("throttle-fill").style.width=(EI()*100).toFixed(0)+"%");const r=document.getElementById("hyperspeed-status");if(r){const o=i&&wI();r.classList.toggle("hidden",!o),o&&(r.textContent=`HYPERSPEED — ${TI()} (${by().toFixed(0)}m)`)}}function mN(){if(Hp()){Ah("Landed");return}if(Vp()){dI("Docked");return}if(Yp()){Rh("Landed");return}const t=Wn(),e=t&&t.kind==="vehicle"?ri[t.vehicleKey]:null;e&&e.mode==="boat"?fI():e&&e.mode==="rocket"?PI():jP()}function iv(){const t=uA();sA(t.maxPixelRatio),_A(t.lit)}function Rf(t){return t.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")}const Zs=new Map;for(let t=1;t<go.length;t++){const e=go[t];Zs.set(Rf(e),n=>(al(t,n),`Gave ${n}x ${e}`))}for(const t of Object.keys(un)){const e=un[t].label;Zs.set(Rf(e),()=>(mx(t),`Gave ${e}`))}for(const t of Object.keys(ri)){const e=ri[t].label;Zs.set(Rf(e),n=>{let i=0;for(let r=0;r<n;r++)qs(ix(t))&&i++;return i?`Gave ${i}x ${e}`:"Inventory full!"})}for(const t of Object.keys(Hn)){const e=Hn[t].label;Zs.set(Rf(e),n=>{let i=0;for(let r=0;r<n;r++)qs(rx(t))&&i++;return i?`Gave ${i}x ${e}`:"Inventory full!"})}const gN=[...Zs.keys()];function _N(t,e){const n=Zs.get(t.toLowerCase());if(!n)throw new Error(`Unknown item "${t}"`);return n(Math.max(1,Math.min(9999,e)))}const vN=6,xN=10,yN=Object.keys(Cp);function SN(t,e){for(let n=0;n<e;n++)QL(t,T.pos,vN,xN);return`Spawned ${e}x ${t}`}function MN(){T.lastDamageSource={kind:"console"},_y()}function EN(){const t=document.getElementById("game-canvas");lA(t),xA(t),e2(),ax(p2),U2({onSelectMode:tu,onRespawn:qU,onSelectGraphics:W0,onDifficulty:zg,onToggleSpawnEscalation:()=>yP(!cy()),onRenderDistance:Y0,onDayLength:q0,onWorldSeedApply:nS,onSaveGame:JU,onQuitToTitle:QU,onToggleDevConsole:()=>Z2(!mp())}),NI({onNewGame:$U,onLoadGameRequest:ZU}),kI(),FI({onLoad:async e=>{let n;try{n=await C3(e)}catch{We("Could not read that save");return}if(!n){We("Save not found");return}const i=wr.find(r=>r.id===e);Uc(),await KU(n,e,i?i.name:null)},onOverwrite:async e=>{const n=wr.find(i=>i.id===e);try{await Bh(n?n.name:null,e)}catch{We("Could not save");return}Uc(),We("Game saved")},onSaveNew:async e=>{try{await Bh(e||null,null)}catch{We("Could not save");return}Uc(),We("Game saved")},onDelete:async e=>{try{await P3(e),wr=await Lp()}catch{We("Could not delete that save");return}$p(im,wr)},onBack:()=>{}}),V2(),bS(Af),wS(),xP(nN),SP(),X0(iN),dA(),mA(rN),gA(),K2(e=>{oN(),!e&&mh()&&Ea()}),J2(),iR({onLeftClick:_U,onRightClick:eS,onToggleInventory:nv,onToggleVehicle:mN,onToggleHyperspeed:CI}),x2({getHeld:sN,pick:lN,place:cN,dragFillCraftCell:fN,shiftReturn:uN,onClose:nv,onTakeResult:dN,onCraftFromRecipe:hN}),eg(Br),fA(),iv(),K3(),aA(YU),Zi(T.hp,T.maxHp),eN(),$2({giveItem:_N,givableItemNames:gN,spawnMobs:SN,mobTypeNames:yN,player:T,setDayTime:JI,setDayLengthMinutes:q0,getDayLengthMinutes:cp,setRenderDistance:Y0,getRenderDistance:Mo,setSlider:zg,getSlider:ly,setGraphics:W0,getGraphics:jv,setGameMode:tu,hurtPlayer:xi,killPlayer:MN,refreshHpBar:()=>Zi(T.hp,T.maxHp)}),Jv(()=>{iv(),ZD(),Mx("Applying graphics…"),AC(Ta()),Oh=!0,kc=null}),X0(()=>{bo()}),eg(()=>iC()),af(!1),wy(),requestAnimationFrame(rS)}let rv=performance.now();function rS(t){requestAnimationFrame(rS);const e=(t-rv)/1e3,n=Math.min(e,XU);if(rv=t,aD(e),Ka){if(Oc)if(Oh){CC(Ta(),ev);const r=RC();kc===null&&(kc=Math.max(r,1)),r===0?(Oh=!1,rg()):ph(1-r/kc)}else Tg(Ta(),T.pos,gS);else{Tg(Ta(),T.pos,ev);const r=zx();Bc===null&&(Bc=Math.max(r,1)),r===0?(Oc=!0,rg(),yu&&(yu=!1,ef())):ph(1-r/Bc)}Y3(T.pos),Z3(qe.position)}const i=LU();wD(n),i||(Hp()?eI(n):Vp()?hI(n):Yp()?UI(n):(xD(n),ND()),pN(),UP(),OD(),IU(n),eL(n,T.pos,T.underwaterLiquid),rL(n),iD(n),rD(n),FL(n),IL(n),sL(n)),S3(n),VU(M3(T.pos,T.yaw)),tN(n),i||(pU(n),xU(n),lU(n),iU(n),fU(n),oU(n)),eU(n),cx(uy(),fy(),fl()),cD(),Ka&&Oc&&(cA(),tU())}EN();
//# sourceMappingURL=index-a9s8R83o.js.map
