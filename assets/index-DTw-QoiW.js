(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function Zn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Qh(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var on={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ir={duration:.5,overwrite:!1,delay:0},el,Fe,ie,vn=1e8,te=1/vn,Lo=Math.PI*2,Gf=Lo/4,kf=0,qh=Math.sqrt,Vf=Math.cos,Hf=Math.sin,we=function(t){return typeof t=="string"},he=function(t){return typeof t=="function"},Jn=function(t){return typeof t=="number"},nl=function(t){return typeof t>"u"},On=function(t){return typeof t=="object"},Ze=function(t){return t!==!1},il=function(){return typeof window<"u"},bs=function(t){return he(t)||we(t)},Jh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Be=Array.isArray,Do=/(?:-?\.?\d|\.)+/gi,jh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Mr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Na=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Kh=/[+-]=-?[.\d]+/,$h=/[^,'"\[\]\s]+/gi,Wf=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ae,Rn,Io,rl,ln={},ca={},tu,eu=function(t){return(ca=Vi(t,ln))&&Ke},sl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},fs=function(t,e){return!e&&console.warn(t)},nu=function(t,e){return t&&(ln[t]=e)&&ca&&(ca[t]=e)||ln},ds=function(){return 0},Yf={suppressEvents:!0,isStart:!0,kill:!1},ra={suppressEvents:!0,kill:!1},Xf={suppressEvents:!0},al={},fi=[],Uo={},iu,nn={},Oa={},Dl=30,sa=[],ol="",ll=function(t){var e=t[0],n,i;if(On(e)||he(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=sa.length;i--&&!sa[i].targetTest(e););n=sa[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new wu(t[i],n)))||t.splice(i,1);return t},Oi=function(t){return t._gsap||ll(An(t))[0]._gsap},ru=function(t,e,n){return(n=t[e])&&he(n)?t[e]():nl(n)&&t.getAttribute&&t.getAttribute(e)||n},Qe=function(t,e){return(t=t.split(",")).forEach(e)||t},de=function(t){return Math.round(t*1e5)/1e5||0},Te=function(t){return Math.round(t*1e7)/1e7||0},Tr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Zf=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ha=function(){var t=fi.length,e=fi.slice(0),n,i;for(Uo={},fi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},su=function(t,e,n,i){fi.length&&!Fe&&ha(),t.render(e,n,i||Fe&&e<0&&(t._initted||t._startAt)),fi.length&&!Fe&&ha()},au=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match($h).length<2?e:we(t)?t.trim():t},ou=function(t){return t},Mn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Qf=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Vi=function(t,e){for(var n in e)t[n]=e[n];return t},Il=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=On(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},ua=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},rs=function(t){var e=t.parent||ae,n=t.keyframes?Qf(Be(t.keyframes)):Mn;if(Ze(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},qf=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},lu=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Sa=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},_i=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Fi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Jf=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},No=function(t,e,n,i){return t._startAt&&(Fe?t._startAt.revert(ra):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},jf=function r(t){return!t||t._ts&&r(t.parent)},Ul=function(t){return t._repeat?Ur(t._tTime,t=t.duration()+t._rDelay)*t:0},Ur=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},fa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ea=function(t){return t._end=Te(t._start+(t._tDur/Math.abs(t._ts||t._rts||te)||0))},Ta=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Te(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ea(t),n._dirty||Fi(n,t)),t},cu=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=fa(t.rawTime(),e),(!e._dur||Ss(0,e.totalDuration(),n)-e._tTime>te)&&e.render(n,!0)),Fi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-te}},Pn=function(t,e,n,i){return e.parent&&_i(e),e._start=Te((Jn(n)?n:n||t!==ae?dn(t,n,e):t._time)+e._delay),e._end=Te(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),lu(t,e,"_first","_last",t._sort?"_start":0),Oo(e)||(t._recent=e),i||cu(t,e),t._ts<0&&Ta(t,t._tTime),t},hu=function(t,e){return(ln.ScrollTrigger||sl("scrollTrigger",e))&&ln.ScrollTrigger.create(e,t)},uu=function(t,e,n,i,s){if(hl(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Fe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&iu!==rn.frame)return fi.push(t),t._lazy=[s,i],1},Kf=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Oo=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},$f=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&Kf(t)&&!(!t._initted&&Oo(t))||(t._ts<0||t._dp._ts<0)&&!Oo(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=Ss(0,t._tDur,e),h=Ur(l,o),t._yoyo&&h&1&&(a=1-a),h!==Ur(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Fe||i||t._zTime===te||!e&&t._zTime){if(!t._initted&&uu(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?te:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&No(t,e,n,!0),t._onUpdate&&!n&&an(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&an(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&_i(t,1),!n&&!Fe&&(an(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},td=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Nr=function(t,e,n,i){var s=t._repeat,a=Te(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Te(a*(s+1)+t._rDelay*s):a,o>0&&!i&&Ta(t,t._tTime=t._tDur*o),t.parent&&Ea(t),n||Fi(t.parent,t),t},Nl=function(t){return t instanceof We?Fi(t):Nr(t,t._dur)},ed={_start:0,endTime:ds,totalDuration:ds},dn=function r(t,e,n){var i=t.labels,s=t._recent||ed,a=t.duration()>=vn?s.endTime(!1):t._dur,o,l,c;return we(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Be(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},ss=function(t,e,n){var i=Jn(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ze(l.vars.inherit)&&l.parent;a.immediateRender=Ze(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new ge(e[0],a,e[s+1])},Mi=function(t,e){return t||t===0?e(t):e},Ss=function(t,e,n){return n<t?t:n>e?e:n},Ne=function(t,e){return!we(t)||!(e=Wf.exec(t))?"":e[1]},nd=function(t,e,n){return Mi(n,function(i){return Ss(t,e,i)})},Fo=[].slice,fu=function(t,e){return t&&On(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&On(t[0]))&&!t.nodeType&&t!==Rn},id=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return we(i)&&!e||fu(i,1)?(s=n).push.apply(s,An(i)):n.push(i)})||n},An=function(t,e,n){return ie&&!e&&ie.selector?ie.selector(t):we(t)&&!n&&(Io||!Or())?Fo.call((e||rl).querySelectorAll(t),0):Be(t)?id(t,n):fu(t)?Fo.call(t,0):t?[t]:[]},Bo=function(t){return t=An(t)[0]||fs("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return An(e,n.querySelectorAll?n:n===t?fs("Invalid scope")||rl.createElement("div"):t)}},du=function(t){return t.sort(function(){return .5-Math.random()})},pu=function(t){if(he(t))return t;var e=On(t)?t:{each:t},n=Bi(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,u=i;return we(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(f,p,_){var g=(_||e).length,d=a[g],m,M,v,E,T,S,x,I,L;if(!d){if(L=e.grid==="auto"?0:(e.grid||[1,vn])[1],!L){for(x=-vn;x<(x=_[L++].getBoundingClientRect().left)&&L<g;);L<g&&L--}for(d=a[g]=[],m=l?Math.min(L,g)*h-.5:i%L,M=L===vn?0:l?g*u/L-.5:i/L|0,x=0,I=vn,S=0;S<g;S++)v=S%L-m,E=M-(S/L|0),d[S]=T=c?Math.abs(c==="y"?E:v):qh(v*v+E*E),T>x&&(x=T),T<I&&(I=T);i==="random"&&du(d),d.max=x-I,d.min=I,d.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(L>g?g-1:c?c==="y"?g/L:L:Math.max(L,g/L))||0)*(i==="edges"?-1:1),d.b=g<0?s-g:s,d.u=Ne(e.amount||e.each)||0,n=n&&g<0?Eu(n):n}return g=(d[f]-d.min)/d.max||0,Te(d.b+(n?n(g):g)*d.v)+d.u}},zo=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Te(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Jn(n)?0:Ne(n))}},mu=function(t,e){var n=Be(t),i,s;return!n&&On(t)&&(i=n=t.radius||vn,t.values?(t=An(t.values),(s=!Jn(t[0]))&&(i*=i)):t=zo(t.increment)),Mi(e,n?he(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=vn,h=0,u=t.length,f,p;u--;)s?(f=t[u].x-o,p=t[u].y-l,f=f*f+p*p):f=Math.abs(t[u]-o),f<c&&(c=f,h=u);return h=!i||c<=i?t[h]:a,s||h===a||Jn(a)?h:h+Ne(a)}:zo(t))},gu=function(t,e,n,i){return Mi(Be(t)?!e:n===!0?!!(n=0):!i,function(){return Be(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},rd=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},sd=function(t,e){return function(n){return t(parseFloat(n))+(e||Ne(n))}},ad=function(t,e,n){return vu(t,e,0,1,n)},_u=function(t,e,n){return Mi(n,function(i){return t[~~e(i)]})},od=function r(t,e,n){var i=e-t;return Be(t)?_u(t,r(0,t.length),e):Mi(n,function(s){return(i+(s-t)%i)%i+t})},ld=function r(t,e,n){var i=e-t,s=i*2;return Be(t)?_u(t,r(0,t.length-1),e):Mi(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},ps=function(t){for(var e=0,n="",i,s,a,o;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),o=t.charAt(i+7)==="[",s=t.substr(i+7,a-i-7).match(o?$h:Do),n+=t.substr(e,i-e)+gu(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},vu=function(t,e,n,i,s){var a=e-t,o=i-n;return Mi(s,function(l){return n+((l-t)/a*o||0)})},cd=function r(t,e,n,i){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var a=we(t),o={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Be(t)&&!Be(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(_){_*=u;var g=Math.min(f,~~_);return h[g](_-g)},n=e}else i||(t=Vi(Be(t)?[]:{},t));if(!h){for(l in e)cl.call(o,t,l,"get",e[l]);s=function(_){return dl(_,o)||(a?t.p:t)}}}return Mi(n,s)},Ol=function(t,e,n){var i=t.labels,s=vn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},an=function(t,e,n){var i=t.vars,s=i[e],a=ie,o=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&fi.length&&ha(),o&&(ie=o),h=l?s.apply(c,l):s.call(c),ie=a,h},ns=function(t){return _i(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Fe),t.progress()<1&&an(t,"onInterrupt"),t},xr,Au=[],Mu=function(t){if(t)if(t=!t.name&&t.default||t,il()||t.headless){var e=t.name,n=he(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ds,render:dl,add:cl,kill:Td,modifier:Ed,rawVars:0},a={targetTest:0,get:0,getSetter:fl,aliases:{},register:0};if(Or(),t!==i){if(nn[e])return;Mn(i,Mn(ua(t,s),a)),Vi(i.prototype,Vi(s,ua(t,a))),nn[i.prop=e]=i,t.targetTest&&(sa.push(i),al[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}nu(e,i),t.register&&t.register(Ke,i,qe)}else Au.push(t)},$t=255,is={aqua:[0,$t,$t],lime:[0,$t,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,$t],navy:[0,0,128],white:[$t,$t,$t],olive:[128,128,0],yellow:[$t,$t,0],orange:[$t,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[$t,0,0],pink:[$t,192,203],cyan:[0,$t,$t],transparent:[$t,$t,$t,0]},Fa=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*$t+.5|0},xu=function(t,e,n){var i=t?Jn(t)?[t>>16,t>>8&$t,t&$t]:0:is.black,s,a,o,l,c,h,u,f,p,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),is[t])i=is[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&$t,i&$t,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&$t,t&$t]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Do),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=Fa(l+1/3,s,a),i[1]=Fa(l,s,a),i[2]=Fa(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(jh),n&&i.length<4&&(i[3]=1),i}else i=t.match(Do)||is.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/$t,a=i[1]/$t,o=i[2]/$t,u=Math.max(s,a,o),f=Math.min(s,a,o),h=(u+f)/2,u===f?l=c=0:(p=u-f,c=h>.5?p/(2-u-f):p/(u+f),l=u===s?(a-o)/p+(a<o?6:0):u===a?(o-s)/p+2:(s-a)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},yu=function(t){var e=[],n=[],i=-1;return t.split(di).forEach(function(s){var a=s.match(Mr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Fl=function(t,e,n){var i="",s=(t+i).match(di),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return t;if(s=s.map(function(f){return(f=xu(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=yu(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(di,"1").split(Mr),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(di),u=c.length-1;o<u;o++)i+=c[o]+s[o];return i+c[u]},di=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in is)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),hd=/hsl[a]?\(/,Su=function(t){var e=t.join(" "),n;if(di.lastIndex=0,di.test(e))return n=hd.test(e),t[1]=Fl(t[1],n),t[0]=Fl(t[0],n,yu(t[1])),!0},ms,rn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,u,f,p,_=function g(d){var m=r()-i,M=d===!0,v,E,T,S;if((m>t||m<0)&&(n+=m-e),i+=m,T=i-n,v=T-a,(v>0||M)&&(S=++u.frame,f=T-u.time*1e3,u.time=T=T/1e3,a+=v+(v>=s?4:s-v),E=1),M||(l=c(g)),E)for(p=0;p<o.length;p++)o[p](T,f,S,d)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(d){return f/(1e3/(d||60))},wake:function(){tu&&(!Io&&il()&&(Rn=Io=window,rl=Rn.document||{},ln.gsap=Ke,(Rn.gsapVersions||(Rn.gsapVersions=[])).push(Ke.version),eu(ca||Rn.GreenSockGlobals||!Rn.gsap&&Rn||{}),Au.forEach(Mu)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(d){return setTimeout(d,a-u.time*1e3+1|0)},ms=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ms=0,c=ds},lagSmoothing:function(d,m){t=d||1/0,e=Math.min(m||33,t)},fps:function(d){s=1e3/(d||240),a=u.time*1e3+s},add:function(d,m,M){var v=m?function(E,T,S,x){d(E,T,S,x),u.remove(v)}:d;return u.remove(d),o[M?"unshift":"push"](v),Or(),v},remove:function(d,m){~(m=o.indexOf(d))&&o.splice(m,1)&&p>=m&&p--},_listeners:o},u}(),Or=function(){return!ms&&rn.wake()},Xt={},ud=/^[\d.\-M][\d.\-,\s]/,fd=/["']/g,dd=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(fd,"").trim():+c,i=l.substr(o+1).trim();return e},pd=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},md=function(t){var e=(t+"").split("("),n=Xt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[dd(e[1])]:pd(t).split(",").map(au)):Xt._CE&&ud.test(t)?Xt._CE("",t):n},Eu=function(t){return function(e){return 1-t(1-e)}},Tu=function r(t,e){for(var n=t._first,i;n;)n instanceof We?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Bi=function(t,e){return t&&(he(t)?t:Xt[t]||md(t))||e},Yi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Qe(t,function(o){Xt[o]=ln[o]=s,Xt[a=o.toLowerCase()]=n;for(var l in s)Xt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Xt[o+"."+l]=s[l]}),s},bu=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ba=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Lo*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Hf((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:bu(o);return s=Lo/s,l.config=function(c,h){return r(t,c,h)},l},za=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:bu(n);return i.config=function(s){return r(t,s)},i};Qe("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Yi(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Xt.Linear.easeNone=Xt.none=Xt.Linear.easeIn;Yi("Elastic",Ba("in"),Ba("out"),Ba());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Yi("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Yi("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Yi("Circ",function(r){return-(qh(1-r*r)-1)});Yi("Sine",function(r){return r===1?1:-Vf(r*Gf)+1});Yi("Back",za("in"),za("out"),za());Xt.SteppedEase=Xt.steps=ln.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-te;return function(o){return((i*Ss(0,a,o)|0)+s)*n}}};Ir.ease=Xt["quad.out"];Qe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return ol+=r+","+r+"Params,"});var wu=function(t,e){this.id=kf++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:ru,this.set=e?e.getSetter:fl},gs=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Nr(this,+e.duration,1,1),this.data=e.data,ie&&(this._ctx=ie,ie.data.push(this)),ms||rn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Nr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Or(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ta(this,n),!s._dp||s.parent||cu(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Pn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===te||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),su(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ul(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ul(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ur(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-te?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?fa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-te?0:this._rts,this.totalTime(Ss(-Math.abs(this._delay),this._tDur,s),i!==!1),Ea(this),Jf(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Or(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==te&&(this._tTime-=te)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Pn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Ze(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?fa(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Xf);var i=Fe;return Fe=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Fe=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Nl(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Nl(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(dn(this,n),Ze(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ze(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-te:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-te,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-te)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(s){var a=he(n)?n:ou,o=function(){var c=i.then;i.then=null,he(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){ns(this)},r}();Mn(gs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-te,_prom:0,_ps:!1,_rts:1});var We=function(r){Qh(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ze(n.sortChildren),ae&&Pn(n.parent||ae,Zn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&hu(Zn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return ss(0,arguments,this),this},e.from=function(i,s,a){return ss(1,arguments,this),this},e.fromTo=function(i,s,a,o){return ss(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,rs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ge(i,s,dn(this,a),1),this},e.call=function(i,s,a){return Pn(this,ge.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new ge(i,a,dn(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,rs(a).immediateRender=Ze(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},e.staggerFromTo=function(i,s,a,o,l,c,h,u){return o.startAt=a,rs(o).immediateRender=Ze(o.immediateRender),this.staggerTo(i,s,o,l,c,h,u)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Te(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,p,_,g,d,m,M,v,E,T,S,x;if(this!==ae&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),f=h,E=this._start,v=this._ts,m=!v,u&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(S=this._yoyo,d=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(d*100+i,s,a);if(f=Te(h%d),h===l?(g=this._repeat,f=c):(g=~~(h/d),g&&g===h/d&&(f=c,g--),f>c&&(f=c)),T=Ur(this._tTime,d),!o&&this._tTime&&T!==g&&this._tTime-T*d-this._dur<=0&&(T=g),S&&g&1&&(f=c-f,x=1),g!==T&&!this._lock){var I=S&&T&1,L=I===(S&&g&1);if(g<T&&(I=!I),o=I?0:h%c?c:h,this._lock=1,this.render(o||(x?0:Te(g*d)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&an(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,L&&(this._lock=2,o=I?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Tu(this,x)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=td(this,Te(o),Te(f)),M&&(h-=f-(f=M._start))),this._tTime=h,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!s&&!g&&(an(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(p=this._first;p;){if(_=p._next,(p._act||f>=p._start)&&p._ts&&M!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,a),f!==this._time||!this._ts&&!m){M=0,_&&(h+=this._zTime=-te);break}}p=_}else{p=this._last;for(var A=i<0?i:f;p;){if(_=p._prev,(p._act||A<=p._end)&&p._ts&&M!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(A-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(A-p._start)*p._ts,s,a||Fe&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!m){M=0,_&&(h+=this._zTime=A?-te:te);break}}p=_}}if(M&&!s&&(this.pause(),M.render(f>=o?0:-te)._zTime=f>=o?1:-1,this._ts))return this._start=E,Ea(this),this.render(i,s,a);this._onUpdate&&!s&&an(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(E===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&_i(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(an(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(Jn(s)||(s=dn(this,s,i)),!(i instanceof gs)){if(Be(i))return i.forEach(function(o){return a.add(o,s)}),this;if(we(i))return this.addLabel(i,s);if(he(i))i=ge.delayedCall(0,i);else return this}return this!==i?Pn(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-vn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof ge?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return we(i)?this.removeLabel(i):he(i)?this.killTweensOf(i):(Sa(this,i),i===this._recent&&(this._recent=this._last),Fi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Te(rn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=dn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=ge.delayedCall(0,s||ds,a);return o.data="isPause",this._hasPause=1,Pn(this,o,dn(this,i))},e.removePause=function(i){var s=this._first;for(i=dn(this,i);s;)s._start===i&&s.data==="isPause"&&_i(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)oi!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=An(i),l=this._first,c=Jn(s),h;l;)l instanceof ge?Zf(l._targets,o)&&(c?(!oi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=dn(a,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,p,_=ge.to(a,Mn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||te,onStart:function(){if(a.pause(),!p){var d=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==d&&Nr(_,d,0,1).render(_._time,!0,!0),p=1}h&&h.apply(_,u||[])}},s));return f?_.render(0):_},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,Mn({startAt:{time:dn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Ol(this,dn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Ol(this,dn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+te)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Fi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Fi(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=vn,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Pn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Nr(a,a===ae&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(ae._ts&&(su(ae,fa(i,ae)),iu=rn.frame),rn.frame>=Dl){Dl+=on.autoSleep||120;var s=ae._first;if((!s||!s._ts)&&on.autoSleep&&rn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||rn.sleep()}}},t}(gs);Mn(We.prototype,{_lock:0,_hasPause:0,_forcing:0});var gd=function(t,e,n,i,s,a,o){var l=new qe(this._pt,t,e,0,1,Iu,null,s),c=0,h=0,u,f,p,_,g,d,m,M;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=ps(i)),a&&(M=[n,i],a(M,t,e),n=M[0],i=M[1]),f=n.match(Na)||[];u=Na.exec(i);)_=u[0],g=i.substring(c,u.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==f[h++]&&(d=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:d,c:_.charAt(1)==="="?Tr(d,_)-d:parseFloat(_)-d,m:p&&p<4?Math.round:0},c=Na.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Kh.test(i)||m)&&(l.e=0),this._pt=l,l},cl=function(t,e,n,i,s,a,o,l,c,h){he(i)&&(i=i(s||0,t,a));var u=t[e],f=n!=="get"?n:he(u)?c?t[e.indexOf("set")||!he(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,p=he(u)?c?xd:Lu:ul,_;if(we(i)&&(~i.indexOf("random(")&&(i=ps(i)),i.charAt(1)==="="&&(_=Tr(f,i)+(Ne(f)||0),(_||_===0)&&(i=_))),!h||f!==i||Go)return!isNaN(f*i)&&i!==""?(_=new qe(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?Sd:Du,0,p),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!u&&!(e in t)&&sl(e,i),gd.call(this,t,e,f,i,p,l||on.stringFilter,c))},_d=function(t,e,n,i,s){if(he(t)&&(t=as(t,s,e,n,i)),!On(t)||t.style&&t.nodeType||Be(t)||Jh(t))return we(t)?as(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=as(t[o],s,e,n,i);return a},Ru=function(t,e,n,i,s,a){var o,l,c,h;if(nn[t]&&(o=new nn[t]).init(s,o.rawVars?e[t]:_d(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new qe(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==xr))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},oi,Go,hl=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,p=i.autoRevert,_=t._dur,g=t._startAt,d=t._targets,m=t.parent,M=m&&m.data==="nested"?m.vars.targets:d,v=t._overwrite==="auto"&&!el,E=t.timeline,T,S,x,I,L,A,w,V,Q,U,B,F,X;if(E&&(!f||!s)&&(s="none"),t._ease=Bi(s,Ir.ease),t._yEase=u?Eu(Bi(u===!0?s:u,Ir.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!E&&!!i.runBackwards,!E||f&&!i.stagger){if(V=d[0]?Oi(d[0]).harness:0,F=V&&i[V.prop],T=ua(i,al),g&&(g._zTime<0&&g.progress(1),e<0&&h&&o&&!p?g.render(-1,!0):g.revert(h&&_?ra:Yf),g._lazy=0),a){if(_i(t._startAt=ge.set(d,Mn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Ze(l),startAt:null,delay:0,onUpdate:c&&function(){return an(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Fe||!o&&!p)&&t._startAt.revert(ra),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(o=!1),x=Mn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Ze(l),immediateRender:o,stagger:0,parent:m},T),F&&(x[V.prop]=F),_i(t._startAt=ge.set(d,x)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Fe?t._startAt.revert(ra):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,te,te);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Ze(l)||l&&!_,S=0;S<d.length;S++){if(L=d[S],w=L._gsap||ll(d)[S]._gsap,t._ptLookup[S]=U={},Uo[w.id]&&fi.length&&ha(),B=M===d?S:M.indexOf(L),V&&(Q=new V).init(L,F||T,t,B,M)!==!1&&(t._pt=I=new qe(t._pt,L,Q.name,0,1,Q.render,Q,0,Q.priority),Q._props.forEach(function(Y){U[Y]=I}),Q.priority&&(A=1)),!V||F)for(x in T)nn[x]&&(Q=Ru(x,T,t,B,L,M))?Q.priority&&(A=1):U[x]=I=cl.call(t,L,x,"get",T[x],B,M,0,i.stringFilter);t._op&&t._op[S]&&t.kill(L,t._op[S]),v&&t._pt&&(oi=t,ae.killTweensOf(L,U,t.globalTime(e)),X=!t.parent,oi=0),t._pt&&l&&(Uo[w.id]=1)}A&&Uu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!X,f&&e<=0&&E.render(vn,!0,!0)},vd=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,p;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,p=t._targets.length;p--;){if(h=f[p][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Go=1,t.vars[e]="+=0",hl(t,o),Go=0,l?fs(e+" not eligible for reset"):1;c.push(h)}for(p=c.length;p--;)u=c[p],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=de(n)+Ne(u.e)),u.b&&(u.b=h.s+Ne(u.b))},Ad=function(t,e){var n=t[0]?Oi(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=Vi({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Md=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(Be(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},as=function(t,e,n,i,s){return he(t)?t.call(e,n,i,s):we(t)&&~t.indexOf("random(")?ps(t):t},Cu=ol+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Pu={};Qe(Cu+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Pu[r]=1});var ge=function(r){Qh(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:rs(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,d=l.scrollTrigger,m=l.yoyoEase,M=i.parent||ae,v=(Be(n)||Jh(n)?Jn(n[0]):"length"in i)?[n]:An(n),E,T,S,x,I,L,A,w;if(o._targets=v.length?ll(v):fs("GSAP target "+n+" not found. https://gsap.com",!on.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,_||f||bs(c)||bs(h)){if(i=o.vars,E=o.timeline=new We({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:v}),E.kill(),E.parent=E._dp=Zn(o),E._start=0,f||bs(c)||bs(h)){if(x=v.length,A=f&&pu(f),On(f))for(I in f)~Cu.indexOf(I)&&(w||(w={}),w[I]=f[I]);for(T=0;T<x;T++)S=ua(i,Pu),S.stagger=0,m&&(S.yoyoEase=m),w&&Vi(S,w),L=v[T],S.duration=+as(c,Zn(o),T,L,v),S.delay=(+as(h,Zn(o),T,L,v)||0)-o._delay,!f&&x===1&&S.delay&&(o._delay=h=S.delay,o._start+=h,S.delay=0),E.to(L,S,A?A(T,L,v):0),E._ease=Xt.none;E.duration()?c=h=0:o.timeline=0}else if(_){rs(Mn(E.vars.defaults,{ease:"none"})),E._ease=Bi(_.ease||i.ease||"none");var V=0,Q,U,B;if(Be(_))_.forEach(function(F){return E.to(v,F,">")}),E.duration();else{S={};for(I in _)I==="ease"||I==="easeEach"||Md(I,_[I],S,_.easeEach);for(I in S)for(Q=S[I].sort(function(F,X){return F.t-X.t}),V=0,T=0;T<Q.length;T++)U=Q[T],B={ease:U.e,duration:(U.t-(T?Q[T-1].t:0))/100*c},B[I]=U.v,E.to(v,B,V),V+=B.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||o.duration(c=E.duration())}else o.timeline=0;return p===!0&&!el&&(oi=Zn(o),ae.killTweensOf(v),oi=0),Pn(M,Zn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!_&&o._start===Te(M._time)&&Ze(u)&&jf(Zn(o))&&M.data!=="nested")&&(o._tTime=-te,o.render(Math.max(0,-h)||0)),d&&hu(Zn(o),d),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-te&&!h?l:i<te?0:i,f,p,_,g,d,m,M,v,E;if(!c)$f(this,i,s,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=u,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,a);if(f=Te(u%g),u===l?(_=this._repeat,f=c):(_=~~(u/g),_&&_===Te(u/g)&&(f=c,_--),f>c&&(f=c)),m=this._yoyo&&_&1,m&&(E=this._yEase,f=c-f),d=Ur(this._tTime,g),f===o&&!a&&this._initted&&_===d)return this._tTime=u,this;_!==d&&(v&&this._yEase&&Tu(v,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==g&&this._initted&&(this._lock=a=1,this.render(Te(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(uu(this,h?i:f,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==d))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(E||this._ease)(f/c),this._from&&(this.ratio=M=1-M),f&&!o&&!s&&!_&&(an(this,"onStart"),this._tTime!==u))return this;for(p=this._pt;p;)p.r(M,p.d),p=p._next;v&&v.render(i<0?i:v._dur*v._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&No(this,i,s,a),an(this,"onUpdate")),this._repeat&&_!==d&&this.vars.onRepeat&&!s&&this.parent&&an(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&No(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&_i(this,1),!s&&!(h&&!o)&&(u||o||m)&&(an(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){ms||rn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||hl(this,c),h=this._ease(c/this._dur),vd(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(Ta(this,0),this.parent||lu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ns(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,oi&&oi.vars.overwrite!==!0)._first||ns(this),this.parent&&a!==this.timeline.totalDuration()&&Nr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?An(i):o,c=this._ptLookup,h=this._pt,u,f,p,_,g,d,m;if((!s||s==="all")&&qf(o,l))return s==="all"&&(this._pt=0),ns(this);for(u=this._op=this._op||[],s!=="all"&&(we(s)&&(g={},Qe(s,function(M){return g[M]=1}),s=g),s=Ad(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],s==="all"?(u[m]=s,_=f,p={}):(p=u[m]=u[m]||{},_=s);for(g in _)d=f&&f[g],d&&((!("kill"in d.d)||d.d.kill(g)===!0)&&Sa(this,d,"_pt"),delete f[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&h&&ns(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return ss(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return ss(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return ae.killTweensOf(i,s,a)},t}(gs);Mn(ge.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Qe("staggerTo,staggerFrom,staggerFromTo",function(r){ge[r]=function(){var t=new We,e=Fo.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var ul=function(t,e,n){return t[e]=n},Lu=function(t,e,n){return t[e](n)},xd=function(t,e,n,i){return t[e](i.fp,n)},yd=function(t,e,n){return t.setAttribute(e,n)},fl=function(t,e){return he(t[e])?Lu:nl(t[e])&&t.setAttribute?yd:ul},Du=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Sd=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Iu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},dl=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Ed=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},Td=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Sa(this,e,"_pt"):e.dep||(n=1),e=i;return!n},bd=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Uu=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},qe=function(){function r(e,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Du,this.d=l||this,this.set=c||ul,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=bd,this.m=n,this.mt=s,this.tween=i},r}();Qe(ol+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return al[r]=1});ln.TweenMax=ln.TweenLite=ge;ln.TimelineLite=ln.TimelineMax=We;ae=new We({sortChildren:!1,defaults:Ir,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});on.stringFilter=Su;var zi=[],aa={},wd=[],Bl=0,Rd=0,Ga=function(t){return(aa[t]||wd).map(function(e){return e()})},ko=function(){var t=Date.now(),e=[];t-Bl>2&&(Ga("matchMediaInit"),zi.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Rn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Ga("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Bl=t,Ga("matchMedia"))},Nu=function(){function r(e,n){this.selector=n&&Bo(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Rd++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){he(n)&&(s=i,i=n,n=he);var a=this,o=function(){var c=ie,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=Bo(s)),ie=a,u=i.apply(a,arguments),he(u)&&a._r.push(u),ie=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===he?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=ie;ie=null,n(this),ie=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ge&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof We?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ge)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=zi.length;a--;)zi[a].id===this.id&&zi.splice(a,1)},t.revert=function(n){this.kill(n||{})},r}(),Cd=function(){function r(e){this.contexts=[],this.scope=e,ie&&ie.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){On(n)||(n={matches:n});var a=new Nu(0,s||this.scope),o=a.conditions={},l,c,h;ie&&!a.selector&&(a.selector=ie.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Rn.matchMedia(n[c]),l&&(zi.indexOf(a)<0&&zi.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(ko):l.addEventListener("change",ko)));return h&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),da={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Mu(i)})},timeline:function(t){return new We(t)},getTweensOf:function(t,e){return ae.getTweensOf(t,e)},getProperty:function(t,e,n,i){we(t)&&(t=An(t)[0]);var s=Oi(t||{}).get,a=n?ou:au;return n==="native"&&(n=""),t&&(e?a((nn[e]&&nn[e].get||s)(t,e,n,i)):function(o,l,c){return a((nn[o]&&nn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=An(t),t.length>1){var i=t.map(function(h){return Ke.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var a=nn[e],o=Oi(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;xr._pt=0,u.init(t,n?h+n:h,xr,0,[t]),u.render(1,u),xr._pt&&dl(1,xr)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=Ke.to(t,Vi((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return ae.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Bi(t.ease,Ir.ease)),Il(Ir,t||{})},config:function(t){return Il(on,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!nn[o]&&!ln[o]&&fs(e+" effect requires "+o+" plugin.")}),Oa[e]=function(o,l,c){return n(An(o),Mn(l||{},s),c)},a&&(We.prototype[e]=function(o,l,c){return this.add(Oa[e](o,On(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Xt[t]=Bi(e)},parseEase:function(t,e){return arguments.length?Bi(t,e):Xt},getById:function(t){return ae.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new We(t),i,s;for(n.smoothChildTiming=Ze(t.smoothChildTiming),ae.remove(n),n._dp=0,n._time=n._tTime=ae._time,i=ae._first;i;)s=i._next,(e||!(!i._dur&&i instanceof ge&&i.vars.onComplete===i._targets[0]))&&Pn(n,i,i._start-i._delay),i=s;return Pn(ae,n,0),n},context:function(t,e){return t?new Nu(t,e):ie},matchMedia:function(t){return new Cd(t)},matchMediaRefresh:function(){return zi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||ko()},addEventListener:function(t,e){var n=aa[t]||(aa[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=aa[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:od,wrapYoyo:ld,distribute:pu,random:gu,snap:mu,normalize:ad,getUnit:Ne,clamp:nd,splitColor:xu,toArray:An,selector:Bo,mapRange:vu,pipe:rd,unitize:sd,interpolate:cd,shuffle:du},install:eu,effects:Oa,ticker:rn,updateRoot:We.updateRoot,plugins:nn,globalTimeline:ae,core:{PropTween:qe,globals:nu,Tween:ge,Timeline:We,Animation:gs,getCache:Oi,_removeLinkedListItem:Sa,reverting:function(){return Fe},context:function(t){return t&&ie&&(ie.data.push(t),t._ctx=ie),ie},suppressOverwrites:function(t){return el=t}}};Qe("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return da[r]=ge[r]});rn.add(We.updateRoot);xr=da.to({},{duration:0});var Pd=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Ld=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Pd(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},ka=function(t,e){return{name:t,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(we(s)&&(l={},Qe(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Ld(o,s)}}}},Ke=da.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Fe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ka("roundProps",zo),ka("modifiers"),ka("snap",mu))||da;ge.version=We.version=Ke.version="3.12.5";tu=1;il()&&Or();Xt.Power0;Xt.Power1;Xt.Power2;Xt.Power3;Xt.Power4;Xt.Linear;Xt.Quad;Xt.Cubic;Xt.Quart;Xt.Quint;Xt.Strong;Xt.Elastic;Xt.Back;Xt.SteppedEase;Xt.Bounce;Xt.Sine;Xt.Expo;Xt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var zl,li,br,pl,Ui,Gl,ml,Dd=function(){return typeof window<"u"},jn={},Ci=180/Math.PI,wr=Math.PI/180,Ki=Math.atan2,kl=1e8,gl=/([A-Z])/g,Id=/(left|right|width|margin|padding|x)/i,Ud=/[\s,\(]\S/,Un={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Vo=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Nd=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Od=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Fd=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Ou=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Fu=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Bd=function(t,e,n){return t.style[e]=n},zd=function(t,e,n){return t.style.setProperty(e,n)},Gd=function(t,e,n){return t._gsap[e]=n},kd=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Vd=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Hd=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},oe="transform",Je=oe+"Origin",Wd=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in jn&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Un[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Qn(i,o)}):this.tfm[t]=a.x?a[t]:Qn(i,t),t===Je&&(this.tfm.zOrigin=a.zOrigin);else return Un.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(oe)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Je,e,"")),t=oe}(s||e)&&this.props.push(t,e,s[t])},Bu=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Yd=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(gl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=ml(),(!s||!s.isStart)&&!n[oe]&&(Bu(n),i.zOrigin&&n[Je]&&(n[Je]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},zu=function(t,e){var n={target:t,props:[],revert:Yd,save:Wd};return t._gsap||Ke.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},Gu,Ho=function(t,e){var n=li.createElementNS?li.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):li.createElement(t);return n&&n.style?n:li.createElement(t)},Nn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(gl,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Fr(e)||e,1)||""},Vl="O,Moz,ms,Ms,Webkit".split(","),Fr=function(t,e,n){var i=e||Ui,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Vl[a]+t in s););return a<0?null:(a===3?"ms":a>=0?Vl[a]:"")+t},Wo=function(){Dd()&&window.document&&(zl=window,li=zl.document,br=li.documentElement,Ui=Ho("div")||{style:{}},Ho("div"),oe=Fr(oe),Je=oe+"Origin",Ui.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Gu=!!Fr("perspective"),ml=Ke.core.reverting,pl=1)},Va=function r(t){var e=Ho("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(br.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),br.removeChild(e),this.style.cssText=s,a},Hl=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},ku=function(t){var e;try{e=t.getBBox()}catch{e=Va.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Va||(e=Va.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Hl(t,["x","cx","x1"])||0,y:+Hl(t,["y","cy","y1"])||0,width:0,height:0}:e},Vu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&ku(t))},Hi=function(t,e){if(e){var n=t.style,i;e in jn&&e!==Je&&(e=oe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(gl,"-$1").toLowerCase())):n.removeAttribute(e)}},ci=function(t,e,n,i,s,a){var o=new qe(t._pt,e,n,0,1,a?Fu:Ou);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Wl={deg:1,rad:1,turn:1},Xd={grid:1,flex:1},vi=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ui.style,l=Id.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",p=i==="%",_,g,d,m;if(i===a||!s||Wl[i]||Wl[a])return s;if(a!=="px"&&!f&&(s=r(t,e,n,"px")),m=t.getCTM&&Vu(t),(p||a==="%")&&(jn[e]||~e.indexOf("adius")))return _=m?t.getBBox()[l?"width":"height"]:t[h],de(p?s/_*u:s/100*_);if(o[l?"width":"height"]=u+(f?a:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===li||!g.appendChild)&&(g=li.body),d=g._gsap,d&&p&&d.width&&l&&d.time===rn.time&&!d.uncache)return de(s/d.width*u);if(p&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=u+i,_=t[h],M?t.style[e]=M:Hi(t,e)}else(p||a==="%")&&!Xd[Nn(g,"display")]&&(o.position=Nn(t,"position")),g===t&&(o.position="static"),g.appendChild(Ui),_=Ui[h],g.removeChild(Ui),o.position="absolute";return l&&p&&(d=Oi(g),d.time=rn.time,d.width=g[h]),de(f?_*s/u:_&&s?u/_*s:0)},Qn=function(t,e,n,i){var s;return pl||Wo(),e in Un&&e!=="transform"&&(e=Un[e],~e.indexOf(",")&&(e=e.split(",")[0])),jn[e]&&e!=="transform"?(s=vs(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:ma(Nn(t,Je))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=pa[e]&&pa[e](t,e,n)||Nn(t,e)||ru(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?vi(t,e,s,n)+n:s},Zd=function(t,e,n,i){if(!n||n==="none"){var s=Fr(e,t,1),a=s&&Nn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=Nn(t,"borderTopColor"))}var o=new qe(this._pt,t.style,e,0,1,Iu),l=0,c=0,h,u,f,p,_,g,d,m,M,v,E,T;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(g=t.style[e],t.style[e]=i,i=Nn(t,e)||i,g?t.style[e]=g:Hi(t,e)),h=[n,i],Su(h),n=h[0],i=h[1],f=n.match(Mr)||[],T=i.match(Mr)||[],T.length){for(;u=Mr.exec(i);)d=u[0],M=i.substring(l,u.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),d!==(g=f[c++]||"")&&(p=parseFloat(g)||0,E=g.substr((p+"").length),d.charAt(1)==="="&&(d=Tr(p,d)+E),m=parseFloat(d),v=d.substr((m+"").length),l=Mr.lastIndex-v.length,v||(v=v||on.units[e]||E,l===i.length&&(i+=v,o.e+=v)),E!==v&&(p=vi(t,e,g,v)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:p,c:m-p,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?Fu:Ou;return Kh.test(i)&&(o.e=0),this._pt=o,o},Yl={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Qd=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Yl[n]||n,e[1]=Yl[i]||i,e.join(" ")},qd=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],jn[o]&&(l=1,o=o==="transformOrigin"?Je:oe),Hi(n,o);l&&(Hi(n,oe),a&&(a.svg&&n.removeAttribute("transform"),vs(n,1),a.uncache=1,Bu(i)))}},pa={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new qe(t._pt,e,n,0,0,qd);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},_s=[1,0,0,1,0,0],Hu={},Wu=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Xl=function(t){var e=Nn(t,oe);return Wu(e)?_s:e.substr(7).match(jh).map(de)},_l=function(t,e){var n=t._gsap||Oi(t),i=t.style,s=Xl(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?_s:s):(s===_s&&!t.offsetParent&&t!==br&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,o=t.nextElementSibling,br.appendChild(t)),s=Xl(t),l?i.display=l:Hi(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):br.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Yo=function(t,e,n,i,s,a){var o=t._gsap,l=s||_l(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,p=l[0],_=l[1],g=l[2],d=l[3],m=l[4],M=l[5],v=e.split(" "),E=parseFloat(v[0])||0,T=parseFloat(v[1])||0,S,x,I,L;n?l!==_s&&(x=p*d-_*g)&&(I=E*(d/x)+T*(-g/x)+(g*M-d*m)/x,L=E*(-_/x)+T*(p/x)-(p*M-_*m)/x,E=I,T=L):(S=ku(t),E=S.x+(~v[0].indexOf("%")?E/100*S.width:E),T=S.y+(~(v[1]||v[0]).indexOf("%")?T/100*S.height:T)),i||i!==!1&&o.smooth?(m=E-c,M=T-h,o.xOffset=u+(m*p+M*g)-m,o.yOffset=f+(m*_+M*d)-M):o.xOffset=o.yOffset=0,o.xOrigin=E,o.yOrigin=T,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Je]="0px 0px",a&&(ci(a,o,"xOrigin",c,E),ci(a,o,"yOrigin",h,T),ci(a,o,"xOffset",u,o.xOffset),ci(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",E+" "+T)},vs=function(t,e){var n=t._gsap||new wu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Nn(t,Je)||"0",h,u,f,p,_,g,d,m,M,v,E,T,S,x,I,L,A,w,V,Q,U,B,F,X,Y,Z,j,K,ot,vt,G,J;return h=u=f=g=d=m=M=v=E=0,p=_=1,n.svg=!!(t.getCTM&&Vu(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[oe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[oe]!=="none"?l[oe]:"")),i.scale=i.rotate=i.translate="none"),x=_l(t,n.svg),n.svg&&(n.uncache?(Y=t.getBBox(),c=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),Yo(t,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,x)),T=n.xOrigin||0,S=n.yOrigin||0,x!==_s&&(w=x[0],V=x[1],Q=x[2],U=x[3],h=B=x[4],u=F=x[5],x.length===6?(p=Math.sqrt(w*w+V*V),_=Math.sqrt(U*U+Q*Q),g=w||V?Ki(V,w)*Ci:0,M=Q||U?Ki(Q,U)*Ci+g:0,M&&(_*=Math.abs(Math.cos(M*wr))),n.svg&&(h-=T-(T*w+S*Q),u-=S-(T*V+S*U))):(J=x[6],vt=x[7],j=x[8],K=x[9],ot=x[10],G=x[11],h=x[12],u=x[13],f=x[14],I=Ki(J,ot),d=I*Ci,I&&(L=Math.cos(-I),A=Math.sin(-I),X=B*L+j*A,Y=F*L+K*A,Z=J*L+ot*A,j=B*-A+j*L,K=F*-A+K*L,ot=J*-A+ot*L,G=vt*-A+G*L,B=X,F=Y,J=Z),I=Ki(-Q,ot),m=I*Ci,I&&(L=Math.cos(-I),A=Math.sin(-I),X=w*L-j*A,Y=V*L-K*A,Z=Q*L-ot*A,G=U*A+G*L,w=X,V=Y,Q=Z),I=Ki(V,w),g=I*Ci,I&&(L=Math.cos(I),A=Math.sin(I),X=w*L+V*A,Y=B*L+F*A,V=V*L-w*A,F=F*L-B*A,w=X,B=Y),d&&Math.abs(d)+Math.abs(g)>359.9&&(d=g=0,m=180-m),p=de(Math.sqrt(w*w+V*V+Q*Q)),_=de(Math.sqrt(F*F+J*J)),I=Ki(B,F),M=Math.abs(I)>2e-4?I*Ci:0,E=G?1/(G<0?-G:G):0),n.svg&&(X=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Wu(Nn(t,oe)),X&&t.setAttribute("transform",X))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(p*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=de(p),n.scaleY=de(_),n.rotation=de(g)+o,n.rotationX=de(d)+o,n.rotationY=de(m)+o,n.skewX=M+o,n.skewY=v+o,n.transformPerspective=E+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Je]=ma(c)),n.xOffset=n.yOffset=0,n.force3D=on.force3D,n.renderTransform=n.svg?jd:Gu?Yu:Jd,n.uncache=0,n},ma=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ha=function(t,e,n){var i=Ne(e);return de(parseFloat(e)+parseFloat(vi(t,"x",n+"px",i)))+i},Jd=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Yu(t,e)},Si="0deg",Xr="0px",Ei=") ",Yu=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,p=n.skewY,_=n.scaleX,g=n.scaleY,d=n.transformPerspective,m=n.force3D,M=n.target,v=n.zOrigin,E="",T=m==="auto"&&t&&t!==1||m===!0;if(v&&(u!==Si||h!==Si)){var S=parseFloat(h)*wr,x=Math.sin(S),I=Math.cos(S),L;S=parseFloat(u)*wr,L=Math.cos(S),a=Ha(M,a,x*L*-v),o=Ha(M,o,-Math.sin(S)*-v),l=Ha(M,l,I*L*-v+v)}d!==Xr&&(E+="perspective("+d+Ei),(i||s)&&(E+="translate("+i+"%, "+s+"%) "),(T||a!==Xr||o!==Xr||l!==Xr)&&(E+=l!==Xr||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ei),c!==Si&&(E+="rotate("+c+Ei),h!==Si&&(E+="rotateY("+h+Ei),u!==Si&&(E+="rotateX("+u+Ei),(f!==Si||p!==Si)&&(E+="skew("+f+", "+p+Ei),(_!==1||g!==1)&&(E+="scale("+_+", "+g+Ei),M.style[oe]=E||"translate(0, 0)"},jd=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,p=n.target,_=n.xOrigin,g=n.yOrigin,d=n.xOffset,m=n.yOffset,M=n.forceCSS,v=parseFloat(a),E=parseFloat(o),T,S,x,I,L;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=wr,c*=wr,T=Math.cos(l)*u,S=Math.sin(l)*u,x=Math.sin(l-c)*-f,I=Math.cos(l-c)*f,c&&(h*=wr,L=Math.tan(c-h),L=Math.sqrt(1+L*L),x*=L,I*=L,h&&(L=Math.tan(h),L=Math.sqrt(1+L*L),T*=L,S*=L)),T=de(T),S=de(S),x=de(x),I=de(I)):(T=u,I=f,S=x=0),(v&&!~(a+"").indexOf("px")||E&&!~(o+"").indexOf("px"))&&(v=vi(p,"x",a,"px"),E=vi(p,"y",o,"px")),(_||g||d||m)&&(v=de(v+_-(_*T+g*x)+d),E=de(E+g-(_*S+g*I)+m)),(i||s)&&(L=p.getBBox(),v=de(v+i/100*L.width),E=de(E+s/100*L.height)),L="matrix("+T+","+S+","+x+","+I+","+v+","+E+")",p.setAttribute("transform",L),M&&(p.style[oe]=L)},Kd=function(t,e,n,i,s){var a=360,o=we(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Ci:1),c=l-i,h=i+c+"deg",u,f;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*kl)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*kl)%a-~~(c/a)*a)),t._pt=f=new qe(t._pt,e,n,i,c,Nd),f.e=h,f.u="deg",t._props.push(n),f},Zl=function(t,e){for(var n in e)t[n]=e[n];return t},$d=function(t,e,n){var i=Zl({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,f,p,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[oe]=e,o=vs(n,1),Hi(n,oe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[oe],a[oe]=e,o=vs(n,1),a[oe]=c);for(l in jn)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(p=Ne(c),_=Ne(h),u=p!==_?vi(n,l,c,_):parseFloat(c),f=parseFloat(h),t._pt=new qe(t._pt,o,l,u,f-u,Vo),t._pt.u=_||0,t._props.push(l));Zl(o,i)};Qe("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});pa[t>1?"border"+r:r]=function(o,l,c,h,u){var f,p;if(arguments.length<4)return f=a.map(function(_){return Qn(o,_,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(h+"").split(" "),p={},a.forEach(function(_,g){return p[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,p,u)}});var Xu={name:"css",register:Wo,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,h,u,f,p,_,g,d,m,M,v,E,T,S,x,I;pl||Wo(),this.styles=this.styles||zu(t),I=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(nn[g]&&Ru(g,e,n,i,t,s)))){if(p=typeof h,_=pa[g],p==="function"&&(h=h.call(n,i,t,s),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=ps(h)),_)_(this,t,g,h,n)&&(x=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",di.lastIndex=0,di.test(c)||(d=Ne(c),m=Ne(h)),m?d!==m&&(c=vi(t,g,c,m)+m):d&&(h+=d),this.add(o,"setProperty",c,h,i,s,0,0,g),a.push(g),I.push(g,0,o[g]);else if(p!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],we(c)&&~c.indexOf("random(")&&(c=ps(c)),Ne(c+"")||c==="auto"||(c+=on.units[g]||Ne(Qn(t,g))||""),(c+"").charAt(1)==="="&&(c=Qn(t,g))):c=Qn(t,g),f=parseFloat(c),M=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),u=parseFloat(h),g in Un&&(g==="autoAlpha"&&(f===1&&Qn(t,"visibility")==="hidden"&&u&&(f=0),I.push("visibility",0,o.visibility),ci(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Un[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in jn,v){if(this.styles.save(g),E||(T=t._gsap,T.renderTransform&&!e.parseTransform||vs(t,e.parseTransform),S=e.smoothOrigin!==!1&&T.smooth,E=this._pt=new qe(this._pt,o,oe,0,1,T.renderTransform,T,0,-1),E.dep=1),g==="scale")this._pt=new qe(this._pt,T,"scaleY",T.scaleY,(M?Tr(T.scaleY,M+u):u)-T.scaleY||0,Vo),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){I.push(Je,0,o[Je]),h=Qd(h),T.svg?Yo(t,h,0,S,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==T.zOrigin&&ci(this,T,"zOrigin",T.zOrigin,m),ci(this,o,g,ma(c),ma(h)));continue}else if(g==="svgOrigin"){Yo(t,h,1,S,0,this);continue}else if(g in Hu){Kd(this,T,g,f,M?Tr(f,M+h):h);continue}else if(g==="smoothOrigin"){ci(this,T,"smooth",T.smooth,h);continue}else if(g==="force3D"){T[g]=h;continue}else if(g==="transform"){$d(this,h,t);continue}}else g in o||(g=Fr(g)||g);if(v||(u||u===0)&&(f||f===0)&&!Ud.test(h)&&g in o)d=(c+"").substr((f+"").length),u||(u=0),m=Ne(h)||(g in on.units?on.units[g]:d),d!==m&&(f=vi(t,g,c,m)),this._pt=new qe(this._pt,v?T:o,g,f,(M?Tr(f,M+u):u)-f,!v&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?Fd:Vo),this._pt.u=m||0,d!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Od);else if(g in o)Zd.call(this,t,g,c,M?M+h:h);else if(g in t)this.add(t,g,c||t[g],M?M+h:h,i,s);else if(g!=="parseTransform"){sl(g,h);continue}v||(g in o?I.push(g,0,o[g]):I.push(g,1,c||t[g])),a.push(g)}}x&&Uu(this)},render:function(t,e){if(e.tween._time||!ml())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Qn,aliases:Un,getSetter:function(t,e,n){var i=Un[e];return i&&i.indexOf(",")<0&&(e=i),e in jn&&e!==Je&&(t._gsap.x||Qn(t,"x"))?n&&Gl===n?e==="scale"?kd:Gd:(Gl=n||{})&&(e==="scale"?Vd:Hd):t.style&&!nl(t.style[e])?Bd:~e.indexOf("-")?zd:fl(t,e)},core:{_removeProperty:Hi,_getMatrix:_l}};Ke.utils.checkPrefix=Fr;Ke.core.getStyleSaver=zu;(function(r,t,e,n){var i=Qe(r+","+t+","+e,function(s){jn[s]=1});Qe(t,function(s){on.units[s]="deg",Hu[s]=1}),Un[i[13]]=r+","+t,Qe(n,function(s){var a=s.split(":");Un[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Qe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){on.units[r]="px"});Ke.registerPlugin(Xu);var Pi=Ke.registerPlugin(Xu)||Ke;Pi.core.Tween;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vl="161",$i={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},tr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},tp=0,Ql=1,ep=2,Zu=1,np=2,Xn=3,Ai=0,je=1,sn=2,pi=0,Rr=1,ql=2,Jl=3,jl=4,ip=5,Di=100,rp=101,sp=102,Kl=103,$l=104,ap=200,op=201,lp=202,cp=203,Xo=204,Zo=205,hp=206,up=207,fp=208,dp=209,pp=210,mp=211,gp=212,_p=213,vp=214,Ap=0,Mp=1,xp=2,ga=3,yp=4,Sp=5,Ep=6,Tp=7,ba=0,bp=1,wp=2,mi=0,Rp=1,Cp=2,Pp=3,Lp=4,Dp=5,Ip=6,Qu=300,Br=301,zr=302,Qo=303,qo=304,wa=306,As=1e3,En=1001,Jo=1002,Nt=1003,tc=1004,Zr=1005,Xe=1006,Wa=1007,Ni=1008,gi=1009,Up=1010,Np=1011,Al=1012,qu=1013,hi=1014,Ln=1015,Ms=1016,Ju=1017,ju=1018,Gi=1020,Op=1021,mn=1023,Fp=1024,Bp=1025,ki=1026,Gr=1027,zp=1028,Ku=1029,Gp=1030,$u=1031,tf=1033,Ya=33776,Xa=33777,Za=33778,Qa=33779,ec=35840,nc=35841,ic=35842,rc=35843,ef=36196,sc=37492,ac=37496,oc=37808,lc=37809,cc=37810,hc=37811,uc=37812,fc=37813,dc=37814,pc=37815,mc=37816,gc=37817,_c=37818,vc=37819,Ac=37820,Mc=37821,qa=36492,xc=36494,yc=36495,kp=36283,Sc=36284,Ec=36285,Tc=36286,nf=3e3,Oe=3001,Vp=3200,Hp=3201,Xi=0,Wp=1,gn="",Ee="srgb",Kn="srgb-linear",Ml="display-p3",Ra="display-p3-linear",_a="linear",ee="srgb",va="rec709",Aa="p3",er=7680,bc=519,Yp=512,Xp=513,Zp=514,rf=515,Qp=516,qp=517,Jp=518,jp=519,wc=35044,Kp=35048,Rc="300 es",jo=1035,qn=2e3,Ma=2001;class Zi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cc=1234567;const os=Math.PI/180,xs=180/Math.PI;function Hr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[r&255]+Ie[r>>8&255]+Ie[r>>16&255]+Ie[r>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function ve(r,t,e){return Math.max(t,Math.min(e,r))}function xl(r,t){return(r%t+t)%t}function $p(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function tm(r,t,e){return r!==t?(e-r)/(t-r):0}function ls(r,t,e){return(1-e)*r+e*t}function em(r,t,e,n){return ls(r,t,1-Math.exp(-e*n))}function nm(r,t=1){return t-Math.abs(xl(r,t*2)-t)}function im(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function rm(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function sm(r,t){return r+Math.floor(Math.random()*(t-r+1))}function am(r,t){return r+Math.random()*(t-r)}function om(r){return r*(.5-Math.random())}function lm(r){r!==void 0&&(Cc=r);let t=Cc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function cm(r){return r*os}function hm(r){return r*xs}function Ko(r){return(r&r-1)===0&&r!==0}function um(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function xa(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function fm(r,t,e,n,i){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),h=a((t+n)/2),u=s((t-n)/2),f=a((t-n)/2),p=s((n-t)/2),_=a((n-t)/2);switch(i){case"XYX":r.set(o*h,l*u,l*f,o*c);break;case"YZY":r.set(l*f,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*f,o*h,o*c);break;case"XZX":r.set(o*h,l*_,l*p,o*c);break;case"YXY":r.set(l*p,o*h,l*_,o*c);break;case"ZYZ":r.set(l*_,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function vr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ke(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const dm={DEG2RAD:os,RAD2DEG:xs,generateUUID:Hr,clamp:ve,euclideanModulo:xl,mapLinear:$p,inverseLerp:tm,lerp:ls,damp:em,pingpong:nm,smoothstep:im,smootherstep:rm,randInt:sm,randFloat:am,randFloatSpread:om,seededRandom:lm,degToRad:cm,radToDeg:hm,isPowerOfTwo:Ko,ceilPowerOfTwo:um,floorPowerOfTwo:xa,setQuaternionFromProperEuler:fm,normalize:ke,denormalize:vr};class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,i,s,a,o,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],_=n[8],g=i[0],d=i[3],m=i[6],M=i[1],v=i[4],E=i[7],T=i[2],S=i[5],x=i[8];return s[0]=a*g+o*M+l*T,s[3]=a*d+o*v+l*S,s[6]=a*m+o*E+l*x,s[1]=c*g+h*M+u*T,s[4]=c*d+h*v+u*S,s[7]=c*m+h*E+u*x,s[2]=f*g+p*M+_*T,s[5]=f*d+p*v+_*S,s[8]=f*m+p*E+_*x,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*s,p=c*s-a*l,_=e*u+n*f+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=f*g,t[4]=(h*e-i*l)*g,t[5]=(i*s-o*e)*g,t[6]=p*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ja.makeScale(t,e)),this}rotate(t){return this.premultiply(Ja.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ja.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ja=new Vt;function sf(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ys(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pm(){const r=ys("canvas");return r.style.display="block",r}const Pc={};function Cr(r){r in Pc||(Pc[r]=!0,console.warn(r))}const Lc=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dc=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ws={[Kn]:{transfer:_a,primaries:va,toReference:r=>r,fromReference:r=>r},[Ee]:{transfer:ee,primaries:va,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ra]:{transfer:_a,primaries:Aa,toReference:r=>r.applyMatrix3(Dc),fromReference:r=>r.applyMatrix3(Lc)},[Ml]:{transfer:ee,primaries:Aa,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Dc),fromReference:r=>r.applyMatrix3(Lc).convertLinearToSRGB()}},mm=new Set([Kn,Ra]),jt={enabled:!0,_workingColorSpace:Kn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!mm.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=ws[t].toReference,i=ws[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return ws[r].primaries},getTransfer:function(r){return r===gn?_a:ws[r].transfer}};function Pr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ja(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let nr;class af{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{nr===void 0&&(nr=ys("canvas")),nr.width=t.width,nr.height=t.height;const n=nr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=nr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ys("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Pr(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pr(e[n]/255)*255):e[n]=Pr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gm=0;class of{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=Hr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ka(i[a].image)):s.push(Ka(i[a]))}else s=Ka(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ka(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?af.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _m=0;class ze extends Zi{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,n=En,i=En,s=Xe,a=Ni,o=mn,l=gi,c=ze.DEFAULT_ANISOTROPY,h=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=Hr(),this.name="",this.source=new of(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Oe?Ee:gn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case As:t.x=t.x-Math.floor(t.x);break;case En:t.x=t.x<0?0:1;break;case Jo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case As:t.y=t.y-Math.floor(t.y);break;case En:t.y=t.y<0?0:1;break;case Jo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ee?Oe:nf}set encoding(t){Cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Oe?Ee:gn}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=Qu;ze.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,n=0,i=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],_=l[9],g=l[2],d=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-d)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+d)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,E=(p+1)/2,T=(m+1)/2,S=(h+f)/4,x=(u+g)/4,I=(_+d)/4;return v>E&&v>T?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=S/n,s=x/n):E>T?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=S/i,s=I/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=x/s,i=I/s),this.set(n,i,s,e),this}let M=Math.sqrt((d-_)*(d-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(d-_)/M,this.y=(u-g)/M,this.z=(f-h)/M,this.w=Math.acos((c+p+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vm extends Zi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Cr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Oe?Ee:gn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ze(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new of(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends vm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class lf extends ze{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Am extends ze{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _n{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=s[a+0],p=s[a+1],_=s[a+2],g=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==f||c!==p||h!==_){let d=1-o;const m=l*f+c*p+h*_+u*g,M=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const T=Math.sqrt(v),S=Math.atan2(T,m*M);d=Math.sin(d*S)/T,o=Math.sin(o*S)/T}const E=o*M;if(l=l*d+f*E,c=c*d+p*E,h=h*d+_*E,u=u*d+g*E,d===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],f=s[a+1],p=s[a+2],_=s[a+3];return t[e]=o*_+h*u+l*p-c*f,t[e+1]=l*_+h*f+c*u-o*p,t[e+2]=c*_+h*p+o*f-l*u,t[e+3]=h*_-o*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),f=l(n/2),p=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*p*_,this._y=c*p*u-f*h*_,this._z=c*h*_+f*p*u,this._w=c*h*u-f*p*_;break;case"YXZ":this._x=f*h*u+c*p*_,this._y=c*p*u-f*h*_,this._z=c*h*_-f*p*u,this._w=c*h*u+f*p*_;break;case"ZXY":this._x=f*h*u-c*p*_,this._y=c*p*u+f*h*_,this._z=c*h*_+f*p*u,this._w=c*h*u-f*p*_;break;case"ZYX":this._x=f*h*u-c*p*_,this._y=c*p*u+f*h*_,this._z=c*h*_-f*p*u,this._w=c*h*u+f*p*_;break;case"YZX":this._x=f*h*u+c*p*_,this._y=c*p*u+f*h*_,this._z=c*h*_-f*p*u,this._w=c*h*u-f*p*_;break;case"XZY":this._x=f*h*u-c*p*_,this._y=c*p*u-f*h*_,this._z=c*h*_+f*p*u,this._w=c*h*u+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ic.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ic.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $a.copy(this).projectOnVector(t),this.sub($a)}reflect(t){return this.sub($a.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $a=new C,Ic=new _n;class Qi{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,xn):xn.fromBufferAttribute(s,a),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rs.copy(n.boundingBox)),Rs.applyMatrix4(t.matrixWorld),this.union(Rs)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qr),Cs.subVectors(this.max,Qr),ir.subVectors(t.a,Qr),rr.subVectors(t.b,Qr),sr.subVectors(t.c,Qr),$n.subVectors(rr,ir),ti.subVectors(sr,rr),Ti.subVectors(ir,sr);let e=[0,-$n.z,$n.y,0,-ti.z,ti.y,0,-Ti.z,Ti.y,$n.z,0,-$n.x,ti.z,0,-ti.x,Ti.z,0,-Ti.x,-$n.y,$n.x,0,-ti.y,ti.x,0,-Ti.y,Ti.x,0];return!to(e,ir,rr,sr,Cs)||(e=[1,0,0,0,1,0,0,0,1],!to(e,ir,rr,sr,Cs))?!1:(Ps.crossVectors($n,ti),e=[Ps.x,Ps.y,Ps.z],to(e,ir,rr,sr,Cs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Gn=[new C,new C,new C,new C,new C,new C,new C,new C],xn=new C,Rs=new Qi,ir=new C,rr=new C,sr=new C,$n=new C,ti=new C,Ti=new C,Qr=new C,Cs=new C,Ps=new C,bi=new C;function to(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){bi.fromArray(r,s);const o=i.x*Math.abs(bi.x)+i.y*Math.abs(bi.y)+i.z*Math.abs(bi.z),l=t.dot(bi),c=e.dot(bi),h=n.dot(bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Mm=new Qi,qr=new C,eo=new C;class qi{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Mm.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qr.subVectors(t,this.center);const e=qr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(qr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(eo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qr.copy(t.center).add(eo)),this.expandByPoint(qr.copy(t.center).sub(eo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new C,no=new C,Ls=new C,ei=new C,io=new C,Ds=new C,ro=new C;class Ca{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){no.copy(t).add(e).multiplyScalar(.5),Ls.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(no);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ls),o=ei.dot(this.direction),l=-ei.dot(Ls),c=ei.lengthSq(),h=Math.abs(1-a*a);let u,f,p,_;if(h>0)if(u=a*l-o,f=a*o-l,_=s*h,u>=0)if(f>=-_)if(f<=_){const g=1/h;u*=g,f*=g,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(no).addScaledVector(Ls,f),p}intersectSphere(t,e){kn.subVectors(t.center,this.origin);const n=kn.dot(this.direction),i=kn.dot(kn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,i,s){io.subVectors(e,t),Ds.subVectors(n,t),ro.crossVectors(io,Ds);let a=this.direction.dot(ro),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ei.subVectors(this.origin,t);const l=o*this.direction.dot(Ds.crossVectors(ei,Ds));if(l<0)return null;const c=o*this.direction.dot(io.cross(ei));if(c<0||l+c>a)return null;const h=-o*ei.dot(ro);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,i,s,a,o,l,c,h,u,f,p,_,g,d){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,u,f,p,_,g,d)}set(t,e,n,i,s,a,o,l,c,h,u,f,p,_,g,d){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=p,m[7]=_,m[11]=g,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ar.setFromMatrixColumn(t,0).length(),s=1/ar.setFromMatrixColumn(t,1).length(),a=1/ar.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=a*h,p=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+_*c,e[5]=f-g*c,e[9]=-o*l,e[2]=g-f*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,p=l*u,_=c*h,g=c*u;e[0]=f+g*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-_,e[6]=g+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,p=l*u,_=c*h,g=c*u;e[0]=f-g*o,e[4]=-a*u,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*h,e[9]=g-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,p=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=_*c-p,e[8]=f*c+g,e[1]=l*u,e[5]=g*c+f,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-f*u,e[8]=_*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+_,e[10]=f-g*u}else if(t.order==="XZY"){const f=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+g,e[5]=a*h,e[9]=p*u-_,e[2]=_*u-p,e[6]=o*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xm,t,ym)}lookAt(t,e,n){const i=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),ni.crossVectors(n,tn),ni.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),ni.crossVectors(n,tn)),ni.normalize(),Is.crossVectors(tn,ni),i[0]=ni.x,i[4]=Is.x,i[8]=tn.x,i[1]=ni.y,i[5]=Is.y,i[9]=tn.y,i[2]=ni.z,i[6]=Is.z,i[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],_=n[2],g=n[6],d=n[10],m=n[14],M=n[3],v=n[7],E=n[11],T=n[15],S=i[0],x=i[4],I=i[8],L=i[12],A=i[1],w=i[5],V=i[9],Q=i[13],U=i[2],B=i[6],F=i[10],X=i[14],Y=i[3],Z=i[7],j=i[11],K=i[15];return s[0]=a*S+o*A+l*U+c*Y,s[4]=a*x+o*w+l*B+c*Z,s[8]=a*I+o*V+l*F+c*j,s[12]=a*L+o*Q+l*X+c*K,s[1]=h*S+u*A+f*U+p*Y,s[5]=h*x+u*w+f*B+p*Z,s[9]=h*I+u*V+f*F+p*j,s[13]=h*L+u*Q+f*X+p*K,s[2]=_*S+g*A+d*U+m*Y,s[6]=_*x+g*w+d*B+m*Z,s[10]=_*I+g*V+d*F+m*j,s[14]=_*L+g*Q+d*X+m*K,s[3]=M*S+v*A+E*U+T*Y,s[7]=M*x+v*w+E*B+T*Z,s[11]=M*I+v*V+E*F+T*j,s[15]=M*L+v*Q+E*X+T*K,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],_=t[3],g=t[7],d=t[11],m=t[15];return _*(+s*l*u-i*c*u-s*o*f+n*c*f+i*o*p-n*l*p)+g*(+e*l*p-e*c*f+s*a*f-i*a*p+i*c*h-s*l*h)+d*(+e*c*u-e*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+m*(-i*o*h-e*l*u+e*o*f+i*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],_=t[12],g=t[13],d=t[14],m=t[15],M=u*d*c-g*f*c+g*l*p-o*d*p-u*l*m+o*f*m,v=_*f*c-h*d*c-_*l*p+a*d*p+h*l*m-a*f*m,E=h*g*c-_*u*c+_*o*p-a*g*p-h*o*m+a*u*m,T=_*u*l-h*g*l-_*o*f+a*g*f+h*o*d-a*u*d,S=e*M+n*v+i*E+s*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const x=1/S;return t[0]=M*x,t[1]=(g*f*s-u*d*s-g*i*p+n*d*p+u*i*m-n*f*m)*x,t[2]=(o*d*s-g*l*s+g*i*c-n*d*c-o*i*m+n*l*m)*x,t[3]=(u*l*s-o*f*s-u*i*c+n*f*c+o*i*p-n*l*p)*x,t[4]=v*x,t[5]=(h*d*s-_*f*s+_*i*p-e*d*p-h*i*m+e*f*m)*x,t[6]=(_*l*s-a*d*s-_*i*c+e*d*c+a*i*m-e*l*m)*x,t[7]=(a*f*s-h*l*s+h*i*c-e*f*c-a*i*p+e*l*p)*x,t[8]=E*x,t[9]=(_*u*s-h*g*s-_*n*p+e*g*p+h*n*m-e*u*m)*x,t[10]=(a*g*s-_*o*s+_*n*c-e*g*c-a*n*m+e*o*m)*x,t[11]=(h*o*s-a*u*s-h*n*c+e*u*c+a*n*p-e*o*p)*x,t[12]=T*x,t[13]=(h*g*i-_*u*i+_*n*f-e*g*f-h*n*d+e*u*d)*x,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*d-e*o*d)*x,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*f+e*o*f)*x,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,f=s*c,p=s*h,_=s*u,g=a*h,d=a*u,m=o*u,M=l*c,v=l*h,E=l*u,T=n.x,S=n.y,x=n.z;return i[0]=(1-(g+m))*T,i[1]=(p+E)*T,i[2]=(_-v)*T,i[3]=0,i[4]=(p-E)*S,i[5]=(1-(f+m))*S,i[6]=(d+M)*S,i[7]=0,i[8]=(_+v)*x,i[9]=(d-M)*x,i[10]=(1-(f+g))*x,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ar.set(i[0],i[1],i[2]).length();const a=ar.set(i[4],i[5],i[6]).length(),o=ar.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],yn.copy(this);const c=1/s,h=1/a,u=1/o;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,e.setFromRotationMatrix(yn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=qn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let p,_;if(o===qn)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ma)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=qn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-s),f=(e+t)*c,p=(n+i)*h;let _,g;if(o===qn)_=(a+s)*u,g=-2*u;else if(o===Ma)_=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ar=new C,yn=new ne,xm=new C(0,0,0),ym=new C(1,1,1),ni=new C,Is=new C,tn=new C,Uc=new ne,Nc=new _n;class kr{constructor(t=0,e=0,n=0,i=kr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Uc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nc.setFromEuler(this),this.setFromQuaternion(Nc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kr.DEFAULT_ORDER="XYZ";class cf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Sm=0;const Oc=new C,or=new _n,Vn=new ne,Us=new C,Jr=new C,Em=new C,Tm=new _n,Fc=new C(1,0,0),Bc=new C(0,1,0),zc=new C(0,0,1),bm={type:"added"},wm={type:"removed"};class _e extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=Hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new C,e=new kr,n=new _n,i=new C(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new Vt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return or.setFromAxisAngle(t,e),this.quaternion.multiply(or),this}rotateOnWorldAxis(t,e){return or.setFromAxisAngle(t,e),this.quaternion.premultiply(or),this}rotateX(t){return this.rotateOnAxis(Fc,t)}rotateY(t){return this.rotateOnAxis(Bc,t)}rotateZ(t){return this.rotateOnAxis(zc,t)}translateOnAxis(t,e){return Oc.copy(t).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fc,t)}translateY(t){return this.translateOnAxis(Bc,t)}translateZ(t){return this.translateOnAxis(zc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Us.copy(t):Us.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Jr,Us,this.up):Vn.lookAt(Us,Jr,this.up),this.quaternion.setFromRotationMatrix(Vn),i&&(Vn.extractRotation(i.matrixWorld),or.setFromRotationMatrix(Vn),this.quaternion.premultiply(or.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(bm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wm)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,t,Em),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,Tm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}_e.DEFAULT_UP=new C(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new C,Hn=new C,so=new C,Wn=new C,lr=new C,cr=new C,Gc=new C,ao=new C,oo=new C,lo=new C;class Dn{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Sn.subVectors(t,e),i.cross(Sn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Sn.subVectors(i,e),Hn.subVectors(n,e),so.subVectors(t,e);const a=Sn.dot(Sn),o=Sn.dot(Hn),l=Sn.dot(so),c=Hn.dot(Hn),h=Hn.dot(so),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,p=(c*l-o*h)*f,_=(a*h-o*l)*f;return s.set(1-p-_,_,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Wn.x),l.addScaledVector(a,Wn.y),l.addScaledVector(o,Wn.z),l)}static isFrontFacing(t,e,n,i){return Sn.subVectors(n,e),Hn.subVectors(t,e),Sn.cross(Hn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),Sn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Dn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;lr.subVectors(i,n),cr.subVectors(s,n),ao.subVectors(t,n);const l=lr.dot(ao),c=cr.dot(ao);if(l<=0&&c<=0)return e.copy(n);oo.subVectors(t,i);const h=lr.dot(oo),u=cr.dot(oo);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(lr,a);lo.subVectors(t,s);const p=lr.dot(lo),_=cr.dot(lo);if(_>=0&&p<=_)return e.copy(s);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(cr,o);const d=h*_-p*u;if(d<=0&&u-h>=0&&p-_>=0)return Gc.subVectors(s,i),o=(u-h)/(u-h+(p-_)),e.copy(i).addScaledVector(Gc,o);const m=1/(d+g+f);return a=g*m,o=f*m,e.copy(n).addScaledVector(lr,a).addScaledVector(cr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Ns={h:0,s:0,l:0};function co(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class pt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=jt.workingColorSpace){if(t=xl(t,1),e=ve(e,0,1),n=ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=co(a,s,t+1/3),this.g=co(a,s,t),this.b=co(a,s,t-1/3)}return jt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ee){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){const n=hf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pr(t.r),this.g=Pr(t.g),this.b=Pr(t.b),this}copyLinearToSRGB(t){return this.r=ja(t.r),this.g=ja(t.g),this.b=ja(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return jt.fromWorkingColorSpace(Ue.copy(this),t),Math.round(ve(Ue.r*255,0,255))*65536+Math.round(ve(Ue.g*255,0,255))*256+Math.round(ve(Ue.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Ue.copy(this),e);const n=Ue.r,i=Ue.g,s=Ue.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=Ee){jt.fromWorkingColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,i=Ue.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(Ns);const n=ls(ii.h,Ns.h,e),i=ls(ii.s,Ns.s,e),s=ls(ii.l,Ns.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new pt;pt.NAMES=hf;let Rm=0;class Le extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Hr(),this.name="",this.type="Material",this.blending=Rr,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xo,this.blendDst=Zo,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=er,this.stencilZFail=er,this.stencilZPass=er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xo&&(n.blendSrc=this.blendSrc),this.blendDst!==Zo&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ga&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==er&&(n.stencilFail=this.stencilFail),this.stencilZFail!==er&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==er&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Pe extends Le{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new C,Os=new st;class Tn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Cr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Os.fromBufferAttribute(this,e),Os.applyMatrix3(t),this.setXY(e,Os.x,Os.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vr(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vr(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vr(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),i=ke(i,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wc&&(t.usage=this.usage),t}}class uf extends Tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ff extends Tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class He extends Tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Cm=0;const un=new ne,ho=new _e,hr=new C,en=new Qi,jr=new Qi,ye=new C;class bn extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Hr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sf(t)?ff:uf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Vt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return ho.lookAt(t),ho.updateMatrix(),this.applyMatrix4(ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new He(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];en.setFromBufferAttribute(s),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];jr.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(en.min,jr.min),en.expandByPoint(ye),ye.addVectors(en.max,jr.max),en.expandByPoint(ye)):(en.expandByPoint(jr.min),en.expandByPoint(jr.max))}en.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)ye.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ye));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ye.fromBufferAttribute(o,c),l&&(hr.fromBufferAttribute(t,c),ye.add(hr)),i=Math.max(i,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<o;A++)c[A]=new C,h[A]=new C;const u=new C,f=new C,p=new C,_=new st,g=new st,d=new st,m=new C,M=new C;function v(A,w,V){u.fromArray(i,A*3),f.fromArray(i,w*3),p.fromArray(i,V*3),_.fromArray(a,A*2),g.fromArray(a,w*2),d.fromArray(a,V*2),f.sub(u),p.sub(u),g.sub(_),d.sub(_);const Q=1/(g.x*d.y-d.x*g.y);isFinite(Q)&&(m.copy(f).multiplyScalar(d.y).addScaledVector(p,-g.y).multiplyScalar(Q),M.copy(p).multiplyScalar(g.x).addScaledVector(f,-d.x).multiplyScalar(Q),c[A].add(m),c[w].add(m),c[V].add(m),h[A].add(M),h[w].add(M),h[V].add(M))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let A=0,w=E.length;A<w;++A){const V=E[A],Q=V.start,U=V.count;for(let B=Q,F=Q+U;B<F;B+=3)v(n[B+0],n[B+1],n[B+2])}const T=new C,S=new C,x=new C,I=new C;function L(A){x.fromArray(s,A*3),I.copy(x);const w=c[A];T.copy(w),T.sub(x.multiplyScalar(x.dot(w))).normalize(),S.crossVectors(I,w);const Q=S.dot(h[A])<0?-1:1;l[A*4]=T.x,l[A*4+1]=T.y,l[A*4+2]=T.z,l[A*4+3]=Q}for(let A=0,w=E.length;A<w;++A){const V=E[A],Q=V.start,U=V.count;for(let B=Q,F=Q+U;B<F;B+=3)L(n[B+0]),L(n[B+1]),L(n[B+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new C,s=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let f=0,p=t.count;f<p;f+=3){const _=t.getX(f+0),g=t.getX(f+1),d=t.getX(f+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,d),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,d),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,_=0;for(let g=0,d=l.length;g<d;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*h;for(let m=0;m<h;m++)f[_++]=c[p++]}return new Tn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new bn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kc=new ne,wi=new Ca,Fs=new qi,Vc=new C,ur=new C,fr=new C,dr=new C,uo=new C,Bs=new C,zs=new st,Gs=new st,ks=new st,Hc=new C,Wc=new C,Yc=new C,Vs=new C,Hs=new C;class le extends _e{constructor(t=new bn,e=new Pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Bs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(uo.fromBufferAttribute(u,t),a?Bs.addScaledVector(uo,h):Bs.addScaledVector(uo.sub(e),h))}e.add(Bs)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(s),wi.copy(t.ray).recast(t.near),!(Fs.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Fs,Vc)===null||wi.origin.distanceToSquared(Vc)>(t.far-t.near)**2))&&(kc.copy(s).invert(),wi.copy(t.ray).applyMatrix4(kc),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const d=f[_],m=a[d.materialIndex],M=Math.max(d.start,p.start),v=Math.min(o.count,Math.min(d.start+d.count,p.start+p.count));for(let E=M,T=v;E<T;E+=3){const S=o.getX(E),x=o.getX(E+1),I=o.getX(E+2);i=Ws(this,m,t,n,c,h,u,S,x,I),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=d.materialIndex,e.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let d=_,m=g;d<m;d+=3){const M=o.getX(d),v=o.getX(d+1),E=o.getX(d+2);i=Ws(this,a,t,n,c,h,u,M,v,E),i&&(i.faceIndex=Math.floor(d/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const d=f[_],m=a[d.materialIndex],M=Math.max(d.start,p.start),v=Math.min(l.count,Math.min(d.start+d.count,p.start+p.count));for(let E=M,T=v;E<T;E+=3){const S=E,x=E+1,I=E+2;i=Ws(this,m,t,n,c,h,u,S,x,I),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=d.materialIndex,e.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let d=_,m=g;d<m;d+=3){const M=d,v=d+1,E=d+2;i=Ws(this,a,t,n,c,h,u,M,v,E),i&&(i.faceIndex=Math.floor(d/3),e.push(i))}}}}function Pm(r,t,e,n,i,s,a,o){let l;if(t.side===je?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===Ai,o),l===null)return null;Hs.copy(o),Hs.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Hs);return c<e.near||c>e.far?null:{distance:c,point:Hs.clone(),object:r}}function Ws(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,ur),r.getVertexPosition(l,fr),r.getVertexPosition(c,dr);const h=Pm(r,t,e,n,ur,fr,dr,Vs);if(h){i&&(zs.fromBufferAttribute(i,o),Gs.fromBufferAttribute(i,l),ks.fromBufferAttribute(i,c),h.uv=Dn.getInterpolation(Vs,ur,fr,dr,zs,Gs,ks,new st)),s&&(zs.fromBufferAttribute(s,o),Gs.fromBufferAttribute(s,l),ks.fromBufferAttribute(s,c),h.uv1=Dn.getInterpolation(Vs,ur,fr,dr,zs,Gs,ks,new st),h.uv2=h.uv1),a&&(Hc.fromBufferAttribute(a,o),Wc.fromBufferAttribute(a,l),Yc.fromBufferAttribute(a,c),h.normal=Dn.getInterpolation(Vs,ur,fr,dr,Hc,Wc,Yc,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new C,materialIndex:0};Dn.getNormal(ur,fr,dr,u.normal),h.face=u}return h}class Ji extends bn{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,p=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(u,2));function _(g,d,m,M,v,E,T,S,x,I,L){const A=E/x,w=T/I,V=E/2,Q=T/2,U=S/2,B=x+1,F=I+1;let X=0,Y=0;const Z=new C;for(let j=0;j<F;j++){const K=j*w-Q;for(let ot=0;ot<B;ot++){const vt=ot*A-V;Z[g]=vt*M,Z[d]=K*v,Z[m]=U,c.push(Z.x,Z.y,Z.z),Z[g]=0,Z[d]=0,Z[m]=S>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(ot/x),u.push(1-j/I),X+=1}}for(let j=0;j<I;j++)for(let K=0;K<x;K++){const ot=f+K+B*j,vt=f+K+B*(j+1),G=f+(K+1)+B*(j+1),J=f+(K+1)+B*j;l.push(ot,vt,J),l.push(vt,G,J),Y+=6}o.addGroup(p,Y,L),p+=Y,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ji(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ve(r){const t={};for(let e=0;e<r.length;e++){const n=Vr(r[e]);for(const i in n)t[i]=n[i]}return t}function Lm(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function df(r){return r.getRenderTarget()===null?r.outputColorSpace:jt.workingColorSpace}const Dm={clone:Vr,merge:Ve};var Im=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends Le{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Im,this.fragmentShader=Um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vr(t.uniforms),this.uniformsGroups=Lm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class pf extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new C,Xc=new st,Zc=new st;class pn extends pf{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,Xc,Zc),e.subVectors(Zc,Xc)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(os*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const pr=-90,mr=1;class Nm extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new pn(pr,mr,t,e);i.layers=this.layers,this.add(i);const s=new pn(pr,mr,t,e);s.layers=this.layers,this.add(s);const a=new pn(pr,mr,t,e);a.layers=this.layers,this.add(a);const o=new pn(pr,mr,t,e);o.layers=this.layers,this.add(o);const l=new pn(pr,mr,t,e);l.layers=this.layers,this.add(l);const c=new pn(pr,mr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class yl extends ze{constructor(t,e,n,i,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Br,super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Om extends Wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Cr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Oe?Ee:gn),this.texture=new yl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ji(5,5,5),s=new Fn({name:"CubemapFromEquirect",uniforms:Vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:pi});s.uniforms.tEquirect.value=e;const a=new le(i,s),o=e.minFilter;return e.minFilter===Ni&&(e.minFilter=Xe),new Nm(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const fo=new C,Fm=new C,Bm=new Vt;class ai{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=fo.subVectors(n,e).cross(Fm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(fo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Bm.getNormalMatrix(t),i=this.coplanarPoint(fo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new qi,Ys=new C;class mf{constructor(t=new ai,e=new ai,n=new ai,i=new ai,s=new ai,a=new ai){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],p=i[8],_=i[9],g=i[10],d=i[11],m=i[12],M=i[13],v=i[14],E=i[15];if(n[0].setComponents(l-s,f-c,d-p,E-m).normalize(),n[1].setComponents(l+s,f+c,d+p,E+m).normalize(),n[2].setComponents(l+a,f+h,d+_,E+M).normalize(),n[3].setComponents(l-a,f-h,d-_,E-M).normalize(),n[4].setComponents(l-o,f-u,d-g,E-v).normalize(),e===qn)n[5].setComponents(l+o,f+u,d+g,E+v).normalize();else if(e===Ma)n[5].setComponents(o,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ys.x=i.normal.x>0?t.max.x:t.min.x,Ys.y=i.normal.y>0?t.max.y:t.min.y,Ys.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gf(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function zm(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,f=c.usage,p=u.byteLength,_=r.createBuffer();r.bindBuffer(h,_),r.bufferData(h,u,f),c.onUploadCallback();let g;if(u instanceof Float32Array)g=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=r.SHORT;else if(u instanceof Uint32Array)g=r.UNSIGNED_INT;else if(u instanceof Int32Array)g=r.INT;else if(u instanceof Int8Array)g=r.BYTE;else if(u instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,h,u){const f=h.array,p=h._updateRange,_=h.updateRanges;if(r.bindBuffer(u,c),p.count===-1&&_.length===0&&r.bufferSubData(u,0,f),_.length!==0){for(let g=0,d=_.length;g<d;g++){const m=_[g];e?r.bufferSubData(u,m.start*f.BYTES_PER_ELEMENT,f,m.start,m.count):r.bufferSubData(u,m.start*f.BYTES_PER_ELEMENT,f.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}p.count!==-1&&(e?r.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):r.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}class cn extends bn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,f=e/l,p=[],_=[],g=[],d=[];for(let m=0;m<h;m++){const M=m*f-a;for(let v=0;v<c;v++){const E=v*u-s;_.push(E,-M,0),g.push(0,0,1),d.push(v/o),d.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){const v=M+c*m,E=M+c*(m+1),T=M+1+c*(m+1),S=M+1+c*m;p.push(v,E,S),p.push(E,T,S)}this.setIndex(p),this.setAttribute("position",new He(_,3)),this.setAttribute("normal",new He(g,3)),this.setAttribute("uv",new He(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Gm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,km=`#ifdef USE_ALPHAHASH
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
#endif`,Vm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ym=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xm=`#ifdef USE_AOMAP
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
#endif`,Zm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qm=`#ifdef USE_BATCHING
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
#endif`,qm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Jm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Km=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$m=`#ifdef USE_IRIDESCENCE
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
#endif`,tg=`#ifdef USE_BUMPMAP
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
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cg=`#define PI 3.141592653589793
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
} // validated`,hg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ug=`vec3 transformedNormal = objectNormal;
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
#endif`,fg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gg="gl_FragColor = linearToOutputTexel( gl_FragColor );",_g=`
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
}`,vg=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Ag=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mg=`#ifdef USE_ENVMAP
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
#endif`,xg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yg=`#ifdef USE_ENVMAP
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
#endif`,Sg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wg=`#ifdef USE_GRADIENTMAP
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
}`,Rg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Cg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dg=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Ig=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Ug=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Og=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bg=`PhysicalMaterial material;
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
#endif`,zg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Gg=`
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
#endif`,kg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Xg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Zg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jg=`#if defined( USE_POINTS_UV )
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
#endif`,jg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$g=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,e_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,n_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,i_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,r_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,s_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,l_=`#ifdef USE_NORMALMAP
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
#endif`,c_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,m_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,__=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,y_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,E_=`float getShadowMask() {
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
}`,T_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b_=`#ifdef USE_SKINNING
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
#endif`,w_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R_=`#ifdef USE_SKINNING
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
#endif`,C_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,I_=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,U_=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,N_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const z_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G_=`uniform sampler2D t2D;
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
}`,k_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y_=`#include <common>
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
}`,X_=`#if DEPTH_PACKING == 3200
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
}`,Z_=`#define DISTANCE
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
}`,Q_=`#define DISTANCE
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
}`,q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j_=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,K_=`uniform vec3 diffuse;
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
}`,$_=`#include <common>
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
}`,t0=`uniform vec3 diffuse;
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
}`,e0=`#define LAMBERT
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
}`,n0=`#define LAMBERT
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
}`,i0=`#define MATCAP
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
}`,r0=`#define MATCAP
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
}`,s0=`#define NORMAL
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
}`,a0=`#define NORMAL
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
}`,o0=`#define PHONG
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
}`,l0=`#define PHONG
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
}`,c0=`#define STANDARD
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
}`,h0=`#define STANDARD
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
}`,u0=`#define TOON
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
}`,f0=`#define TOON
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
}`,d0=`uniform float size;
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
}`,p0=`uniform vec3 diffuse;
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
}`,m0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,g0=`uniform vec3 color;
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
}`,_0=`uniform float rotation;
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
}`,v0=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:Gm,alphahash_pars_fragment:km,alphamap_fragment:Vm,alphamap_pars_fragment:Hm,alphatest_fragment:Wm,alphatest_pars_fragment:Ym,aomap_fragment:Xm,aomap_pars_fragment:Zm,batching_pars_vertex:Qm,batching_vertex:qm,begin_vertex:Jm,beginnormal_vertex:jm,bsdfs:Km,iridescence_fragment:$m,bumpmap_pars_fragment:tg,clipping_planes_fragment:eg,clipping_planes_pars_fragment:ng,clipping_planes_pars_vertex:ig,clipping_planes_vertex:rg,color_fragment:sg,color_pars_fragment:ag,color_pars_vertex:og,color_vertex:lg,common:cg,cube_uv_reflection_fragment:hg,defaultnormal_vertex:ug,displacementmap_pars_vertex:fg,displacementmap_vertex:dg,emissivemap_fragment:pg,emissivemap_pars_fragment:mg,colorspace_fragment:gg,colorspace_pars_fragment:_g,envmap_fragment:vg,envmap_common_pars_fragment:Ag,envmap_pars_fragment:Mg,envmap_pars_vertex:xg,envmap_physical_pars_fragment:Ig,envmap_vertex:yg,fog_vertex:Sg,fog_pars_vertex:Eg,fog_fragment:Tg,fog_pars_fragment:bg,gradientmap_pars_fragment:wg,lightmap_fragment:Rg,lightmap_pars_fragment:Cg,lights_lambert_fragment:Pg,lights_lambert_pars_fragment:Lg,lights_pars_begin:Dg,lights_toon_fragment:Ug,lights_toon_pars_fragment:Ng,lights_phong_fragment:Og,lights_phong_pars_fragment:Fg,lights_physical_fragment:Bg,lights_physical_pars_fragment:zg,lights_fragment_begin:Gg,lights_fragment_maps:kg,lights_fragment_end:Vg,logdepthbuf_fragment:Hg,logdepthbuf_pars_fragment:Wg,logdepthbuf_pars_vertex:Yg,logdepthbuf_vertex:Xg,map_fragment:Zg,map_pars_fragment:Qg,map_particle_fragment:qg,map_particle_pars_fragment:Jg,metalnessmap_fragment:jg,metalnessmap_pars_fragment:Kg,morphcolor_vertex:$g,morphnormal_vertex:t_,morphtarget_pars_vertex:e_,morphtarget_vertex:n_,normal_fragment_begin:i_,normal_fragment_maps:r_,normal_pars_fragment:s_,normal_pars_vertex:a_,normal_vertex:o_,normalmap_pars_fragment:l_,clearcoat_normal_fragment_begin:c_,clearcoat_normal_fragment_maps:h_,clearcoat_pars_fragment:u_,iridescence_pars_fragment:f_,opaque_fragment:d_,packing:p_,premultiplied_alpha_fragment:m_,project_vertex:g_,dithering_fragment:__,dithering_pars_fragment:v_,roughnessmap_fragment:A_,roughnessmap_pars_fragment:M_,shadowmap_pars_fragment:x_,shadowmap_pars_vertex:y_,shadowmap_vertex:S_,shadowmask_pars_fragment:E_,skinbase_vertex:T_,skinning_pars_vertex:b_,skinning_vertex:w_,skinnormal_vertex:R_,specularmap_fragment:C_,specularmap_pars_fragment:P_,tonemapping_fragment:L_,tonemapping_pars_fragment:D_,transmission_fragment:I_,transmission_pars_fragment:U_,uv_pars_fragment:N_,uv_pars_vertex:O_,uv_vertex:F_,worldpos_vertex:B_,background_vert:z_,background_frag:G_,backgroundCube_vert:k_,backgroundCube_frag:V_,cube_vert:H_,cube_frag:W_,depth_vert:Y_,depth_frag:X_,distanceRGBA_vert:Z_,distanceRGBA_frag:Q_,equirect_vert:q_,equirect_frag:J_,linedashed_vert:j_,linedashed_frag:K_,meshbasic_vert:$_,meshbasic_frag:t0,meshlambert_vert:e0,meshlambert_frag:n0,meshmatcap_vert:i0,meshmatcap_frag:r0,meshnormal_vert:s0,meshnormal_frag:a0,meshphong_vert:o0,meshphong_frag:l0,meshphysical_vert:c0,meshphysical_frag:h0,meshtoon_vert:u0,meshtoon_frag:f0,points_vert:d0,points_frag:p0,shadow_vert:m0,shadow_frag:g0,sprite_vert:_0,sprite_frag:v0},lt={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Cn={basic:{uniforms:Ve([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Ve([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new pt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Ve([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Ve([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Ve([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new pt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Ve([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Ve([lt.points,lt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Ve([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Ve([lt.common,lt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Ve([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Ve([lt.sprite,lt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Ve([lt.common,lt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Ve([lt.lights,lt.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Cn.physical={uniforms:Ve([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Xs={r:0,b:0,g:0};function A0(r,t,e,n,i,s,a){const o=new pt(0);let l=s===!0?0:1,c,h,u=null,f=0,p=null;function _(d,m){let M=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?e:t).get(v)),v===null?g(o,l):v&&v.isColor&&(g(v,1),M=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===wa)?(h===void 0&&(h=new le(new Ji(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Vr(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,S,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=jt.getTransfer(v.colorSpace)!==ee,(u!==v||f!==v.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,p=r.toneMapping),h.layers.enableAll(),d.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new le(new cn(2,2),new Fn({name:"BackgroundMaterial",uniforms:Vr(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=jt.getTransfer(v.colorSpace)!==ee,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,p=r.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function g(d,m){d.getRGB(Xs,df(r)),n.buffers.color.setClear(Xs.r,Xs.g,Xs.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(d,m=1){o.set(d),l=m,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,g(o,l)},render:_}}function M0(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=d(null);let c=l,h=!1;function u(U,B,F,X,Y){let Z=!1;if(a){const j=g(X,F,B);c!==j&&(c=j,p(c.object)),Z=m(U,X,F,Y),Z&&M(U,X,F,Y)}else{const j=B.wireframe===!0;(c.geometry!==X.id||c.program!==F.id||c.wireframe!==j)&&(c.geometry=X.id,c.program=F.id,c.wireframe=j,Z=!0)}Y!==null&&e.update(Y,r.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,I(U,B,F,X),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(U){return n.isWebGL2?r.bindVertexArray(U):s.bindVertexArrayOES(U)}function _(U){return n.isWebGL2?r.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function g(U,B,F){const X=F.wireframe===!0;let Y=o[U.id];Y===void 0&&(Y={},o[U.id]=Y);let Z=Y[B.id];Z===void 0&&(Z={},Y[B.id]=Z);let j=Z[X];return j===void 0&&(j=d(f()),Z[X]=j),j}function d(U){const B=[],F=[],X=[];for(let Y=0;Y<i;Y++)B[Y]=0,F[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:F,attributeDivisors:X,object:U,attributes:{},index:null}}function m(U,B,F,X){const Y=c.attributes,Z=B.attributes;let j=0;const K=F.getAttributes();for(const ot in K)if(K[ot].location>=0){const G=Y[ot];let J=Z[ot];if(J===void 0&&(ot==="instanceMatrix"&&U.instanceMatrix&&(J=U.instanceMatrix),ot==="instanceColor"&&U.instanceColor&&(J=U.instanceColor)),G===void 0||G.attribute!==J||J&&G.data!==J.data)return!0;j++}return c.attributesNum!==j||c.index!==X}function M(U,B,F,X){const Y={},Z=B.attributes;let j=0;const K=F.getAttributes();for(const ot in K)if(K[ot].location>=0){let G=Z[ot];G===void 0&&(ot==="instanceMatrix"&&U.instanceMatrix&&(G=U.instanceMatrix),ot==="instanceColor"&&U.instanceColor&&(G=U.instanceColor));const J={};J.attribute=G,G&&G.data&&(J.data=G.data),Y[ot]=J,j++}c.attributes=Y,c.attributesNum=j,c.index=X}function v(){const U=c.newAttributes;for(let B=0,F=U.length;B<F;B++)U[B]=0}function E(U){T(U,0)}function T(U,B){const F=c.newAttributes,X=c.enabledAttributes,Y=c.attributeDivisors;F[U]=1,X[U]===0&&(r.enableVertexAttribArray(U),X[U]=1),Y[U]!==B&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,B),Y[U]=B)}function S(){const U=c.newAttributes,B=c.enabledAttributes;for(let F=0,X=B.length;F<X;F++)B[F]!==U[F]&&(r.disableVertexAttribArray(F),B[F]=0)}function x(U,B,F,X,Y,Z,j){j===!0?r.vertexAttribIPointer(U,B,F,Y,Z):r.vertexAttribPointer(U,B,F,X,Y,Z)}function I(U,B,F,X){if(n.isWebGL2===!1&&(U.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const Y=X.attributes,Z=F.getAttributes(),j=B.defaultAttributeValues;for(const K in Z){const ot=Z[K];if(ot.location>=0){let vt=Y[K];if(vt===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(vt=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(vt=U.instanceColor)),vt!==void 0){const G=vt.normalized,J=vt.itemSize,ct=e.get(vt);if(ct===void 0)continue;const Mt=ct.buffer,mt=ct.type,_t=ct.bytesPerElement,Ht=n.isWebGL2===!0&&(mt===r.INT||mt===r.UNSIGNED_INT||vt.gpuType===qu);if(vt.isInterleavedBufferAttribute){const Ct=vt.data,N=Ct.stride,re=vt.offset;if(Ct.isInstancedInterleavedBuffer){for(let yt=0;yt<ot.locationSize;yt++)T(ot.location+yt,Ct.meshPerAttribute);U.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let yt=0;yt<ot.locationSize;yt++)E(ot.location+yt);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let yt=0;yt<ot.locationSize;yt++)x(ot.location+yt,J/ot.locationSize,mt,G,N*_t,(re+J/ot.locationSize*yt)*_t,Ht)}else{if(vt.isInstancedBufferAttribute){for(let Ct=0;Ct<ot.locationSize;Ct++)T(ot.location+Ct,vt.meshPerAttribute);U.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Ct=0;Ct<ot.locationSize;Ct++)E(ot.location+Ct);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let Ct=0;Ct<ot.locationSize;Ct++)x(ot.location+Ct,J/ot.locationSize,mt,G,J*_t,J/ot.locationSize*Ct*_t,Ht)}}else if(j!==void 0){const G=j[K];if(G!==void 0)switch(G.length){case 2:r.vertexAttrib2fv(ot.location,G);break;case 3:r.vertexAttrib3fv(ot.location,G);break;case 4:r.vertexAttrib4fv(ot.location,G);break;default:r.vertexAttrib1fv(ot.location,G)}}}}S()}function L(){V();for(const U in o){const B=o[U];for(const F in B){const X=B[F];for(const Y in X)_(X[Y].object),delete X[Y];delete B[F]}delete o[U]}}function A(U){if(o[U.id]===void 0)return;const B=o[U.id];for(const F in B){const X=B[F];for(const Y in X)_(X[Y].object),delete X[Y];delete B[F]}delete o[U.id]}function w(U){for(const B in o){const F=o[B];if(F[U.id]===void 0)continue;const X=F[U.id];for(const Y in X)_(X[Y].object),delete X[Y];delete F[U.id]}}function V(){Q(),h=!0,c!==l&&(c=l,p(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:V,resetDefaultState:Q,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:E,disableUnusedAttributes:S}}function x0(r,t,e,n){const i=n.isWebGL2;let s;function a(h){s=h}function o(h,u){r.drawArrays(s,h,u),e.update(u,s,1)}function l(h,u,f){if(f===0)return;let p,_;if(i)p=r,_="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,h,u,f),e.update(u,s,f)}function c(h,u,f){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<f;_++)this.render(h[_],u[_]);else{p.multiDrawArraysWEBGL(s,h,0,u,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];e.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function y0(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const x=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),d=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,E=a||t.has("OES_texture_float"),T=v&&E,S=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:d,maxVaryings:m,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:T,maxSamples:S}}function S0(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new ai,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const _=u.clippingPlanes,g=u.clipIntersection,d=u.clipShadows,m=r.get(u);if(!i||_===null||_.length===0||s&&!d)s?h(null):c();else{const M=s?0:n,v=M*4;let E=m.clippingState||null;l.value=E,E=h(_,f,v,p);for(let T=0;T!==v;++T)E[T]=e[T];m.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,_){const g=u!==null?u.length:0;let d=null;if(g!==0){if(d=l.value,_!==!0||d===null){const m=p+g*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(d===null||d.length<m)&&(d=new Float32Array(m));for(let v=0,E=p;v!==g;++v,E+=4)a.copy(u[v]).applyMatrix4(M,o),a.normal.toArray(d,E),d[E+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,d}}function E0(r){let t=new WeakMap;function e(a,o){return o===Qo?a.mapping=Br:o===qo&&(a.mapping=zr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Qo||o===qo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Om(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class T0 extends pf{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const yr=4,Qc=[.125,.215,.35,.446,.526,.582],Ii=20,po=new T0,qc=new pt;let mo=null,go=0,_o=0;const Li=(1+Math.sqrt(5))/2,gr=1/Li,Jc=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Li,gr),new C(0,Li,-gr),new C(gr,0,Li),new C(-gr,0,Li),new C(Li,gr,0),new C(-Li,gr,0)];class jc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){mo=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(mo,go,_o),t.scissorTest=!1,Zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Br||t.mapping===zr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mo=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:Ms,format:mn,colorSpace:Kn,depthBuffer:!1},i=Kc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=b0(s)),this._blurMaterial=w0(s,t,e)}return i}_compileMaterial(t){const e=new le(this._lodPlanes[0],t);this._renderer.compile(e,po)}_sceneToCubeUV(t,e,n,i){const o=new pn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(qc),h.toneMapping=mi,h.autoClear=!1;const p=new Pe({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),_=new le(new Ji,p);let g=!1;const d=t.background;d?d.isColor&&(p.color.copy(d),t.background=null,g=!0):(p.color.copy(qc),g=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):M===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const v=this._cubeSize;Zs(i,M*v,m>2?v:0,v,v),h.setRenderTarget(i),g&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Br||t.mapping===zr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=th()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$c());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new le(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Zs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,po)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Jc[(i-1)%Jc.length];this._blur(t,i-1,i,s,a)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new le(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ii-1),g=s/_,d=isFinite(s)?1+Math.floor(h*g):Ii;d>Ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ii}`);const m=[];let M=0;for(let x=0;x<Ii;++x){const I=x/g,L=Math.exp(-I*I/2);m.push(L),x===0?M+=L:x<d&&(M+=2*L)}for(let x=0;x<m.length;x++)m[x]=m[x]/M;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;const E=this._sizeLods[i],T=3*E*(i>v-yr?i-v+yr:0),S=4*(this._cubeSize-E);Zs(e,T,S,3*E,2*E),l.setRenderTarget(e),l.render(u,po)}}function b0(r){const t=[],e=[],n=[];let i=r;const s=r-yr+1+Qc.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-yr?l=Qc[a-r+yr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,g=3,d=2,m=1,M=new Float32Array(g*_*p),v=new Float32Array(d*_*p),E=new Float32Array(m*_*p);for(let S=0;S<p;S++){const x=S%3*2/3-1,I=S>2?0:-1,L=[x,I,0,x+2/3,I,0,x+2/3,I+1,0,x,I,0,x+2/3,I+1,0,x,I+1,0];M.set(L,g*_*S),v.set(f,d*_*S);const A=[S,S,S,S,S,S];E.set(A,m*_*S)}const T=new bn;T.setAttribute("position",new Tn(M,g)),T.setAttribute("uv",new Tn(v,d)),T.setAttribute("faceIndex",new Tn(E,m)),t.push(T),i>yr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Kc(r,t,e){const n=new Wi(r,t,e);return n.texture.mapping=wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function w0(r,t,e){const n=new Float32Array(Ii),i=new C(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Sl(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function $c(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sl(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function th(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Sl(){return`

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
	`}function R0(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Qo||l===qo,h=l===Br||l===zr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new jc(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new jc(r));const f=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function C0(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function P0(r,t,e,n){const i={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let d=0,m=g.length;d<m;d++)t.remove(g[d])}f.removeEventListener("dispose",a),delete i[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const _ in f)t.update(f[_],r.ARRAY_BUFFER);const p=u.morphAttributes;for(const _ in p){const g=p[_];for(let d=0,m=g.length;d<m;d++)t.update(g[d],r.ARRAY_BUFFER)}}function c(u){const f=[],p=u.index,_=u.attributes.position;let g=0;if(p!==null){const M=p.array;g=p.version;for(let v=0,E=M.length;v<E;v+=3){const T=M[v+0],S=M[v+1],x=M[v+2];f.push(T,S,S,x,x,T)}}else if(_!==void 0){const M=_.array;g=_.version;for(let v=0,E=M.length/3-1;v<E;v+=3){const T=v+0,S=v+1,x=v+2;f.push(T,S,S,x,x,T)}}else return;const d=new(sf(f)?ff:uf)(f,1);d.version=g;const m=s.get(u);m&&t.remove(m),s.set(u,d)}function h(u){const f=s.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function L0(r,t,e,n){const i=n.isWebGL2;let s;function a(p){s=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,_){r.drawElements(s,_,o,p*l),e.update(_,s,1)}function u(p,_,g){if(g===0)return;let d,m;if(i)d=r,m="drawElementsInstanced";else if(d=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,_,o,p*l,g),e.update(_,s,g)}function f(p,_,g){if(g===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<g;m++)this.render(p[m]/l,_[m]);else{d.multiDrawElementsWEBGL(s,_,0,o,p,0,g);let m=0;for(let M=0;M<g;M++)m+=_[M];e.update(m,s,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function D0(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function I0(r,t){return r[0]-t[0]}function U0(r,t){return Math.abs(t[1])-Math.abs(r[1])}function N0(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,a=new be,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=p!==void 0?p.length:0;let g=s.get(h);if(g===void 0||g.count!==_){let U=function(){V.dispose(),s.delete(h),h.removeEventListener("dispose",U)};g!==void 0&&g.texture.dispose();const M=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],x=h.morphAttributes.color||[];let I=0;M===!0&&(I=1),v===!0&&(I=2),E===!0&&(I=3);let L=h.attributes.position.count*I,A=1;L>t.maxTextureSize&&(A=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const w=new Float32Array(L*A*4*_),V=new lf(w,L,A,_);V.type=Ln,V.needsUpdate=!0;const Q=I*4;for(let B=0;B<_;B++){const F=T[B],X=S[B],Y=x[B],Z=L*A*4*B;for(let j=0;j<F.count;j++){const K=j*Q;M===!0&&(a.fromBufferAttribute(F,j),w[Z+K+0]=a.x,w[Z+K+1]=a.y,w[Z+K+2]=a.z,w[Z+K+3]=0),v===!0&&(a.fromBufferAttribute(X,j),w[Z+K+4]=a.x,w[Z+K+5]=a.y,w[Z+K+6]=a.z,w[Z+K+7]=0),E===!0&&(a.fromBufferAttribute(Y,j),w[Z+K+8]=a.x,w[Z+K+9]=a.y,w[Z+K+10]=a.z,w[Z+K+11]=Y.itemSize===4?a.w:1)}}g={count:_,texture:V,size:new st(L,A)},s.set(h,g),h.addEventListener("dispose",U)}let d=0;for(let M=0;M<f.length;M++)d+=f[M];const m=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(r,"morphTargetBaseInfluence",m),u.getUniforms().setValue(r,"morphTargetInfluences",f),u.getUniforms().setValue(r,"morphTargetsTexture",g.texture,e),u.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const p=f===void 0?0:f.length;let _=n[h.id];if(_===void 0||_.length!==p){_=[];for(let v=0;v<p;v++)_[v]=[v,0];n[h.id]=_}for(let v=0;v<p;v++){const E=_[v];E[0]=v,E[1]=f[v]}_.sort(U0);for(let v=0;v<8;v++)v<p&&_[v][1]?(o[v][0]=_[v][0],o[v][1]=_[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(I0);const g=h.morphAttributes.position,d=h.morphAttributes.normal;let m=0;for(let v=0;v<8;v++){const E=o[v],T=E[0],S=E[1];T!==Number.MAX_SAFE_INTEGER&&S?(g&&h.getAttribute("morphTarget"+v)!==g[T]&&h.setAttribute("morphTarget"+v,g[T]),d&&h.getAttribute("morphNormal"+v)!==d[T]&&h.setAttribute("morphNormal"+v,d[T]),i[v]=S,m+=S):(g&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),d&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const M=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(r,"morphTargetBaseInfluence",M),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function O0(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class _f extends ze{constructor(t,e,n,i,s,a,o,l,c,h){if(h=h!==void 0?h:ki,h!==ki&&h!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ki&&(n=hi),n===void 0&&h===Gr&&(n=Gi),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const vf=new ze,Af=new _f(1,1);Af.compareFunction=rf;const Mf=new lf,xf=new Am,yf=new yl,eh=[],nh=[],ih=new Float32Array(16),rh=new Float32Array(9),sh=new Float32Array(4);function Wr(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=eh[i];if(s===void 0&&(s=new Float32Array(i),eh[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Ae(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Me(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Pa(r,t){let e=nh[t];e===void 0&&(e=new Int32Array(t),nh[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function F0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function B0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;r.uniform2fv(this.addr,t),Me(e,t)}}function z0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;r.uniform3fv(this.addr,t),Me(e,t)}}function G0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;r.uniform4fv(this.addr,t),Me(e,t)}}function k0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(Ae(e,n))return;sh.set(n),r.uniformMatrix2fv(this.addr,!1,sh),Me(e,n)}}function V0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(Ae(e,n))return;rh.set(n),r.uniformMatrix3fv(this.addr,!1,rh),Me(e,n)}}function H0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(Ae(e,n))return;ih.set(n),r.uniformMatrix4fv(this.addr,!1,ih),Me(e,n)}}function W0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Y0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;r.uniform2iv(this.addr,t),Me(e,t)}}function X0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;r.uniform3iv(this.addr,t),Me(e,t)}}function Z0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;r.uniform4iv(this.addr,t),Me(e,t)}}function Q0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function q0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;r.uniform2uiv(this.addr,t),Me(e,t)}}function J0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;r.uniform3uiv(this.addr,t),Me(e,t)}}function j0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;r.uniform4uiv(this.addr,t),Me(e,t)}}function K0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Af:vf;e.setTexture2D(t||s,i)}function $0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||xf,i)}function tv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||yf,i)}function ev(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Mf,i)}function nv(r){switch(r){case 5126:return F0;case 35664:return B0;case 35665:return z0;case 35666:return G0;case 35674:return k0;case 35675:return V0;case 35676:return H0;case 5124:case 35670:return W0;case 35667:case 35671:return Y0;case 35668:case 35672:return X0;case 35669:case 35673:return Z0;case 5125:return Q0;case 36294:return q0;case 36295:return J0;case 36296:return j0;case 35678:case 36198:case 36298:case 36306:case 35682:return K0;case 35679:case 36299:case 36307:return $0;case 35680:case 36300:case 36308:case 36293:return tv;case 36289:case 36303:case 36311:case 36292:return ev}}function iv(r,t){r.uniform1fv(this.addr,t)}function rv(r,t){const e=Wr(t,this.size,2);r.uniform2fv(this.addr,e)}function sv(r,t){const e=Wr(t,this.size,3);r.uniform3fv(this.addr,e)}function av(r,t){const e=Wr(t,this.size,4);r.uniform4fv(this.addr,e)}function ov(r,t){const e=Wr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function lv(r,t){const e=Wr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function cv(r,t){const e=Wr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function hv(r,t){r.uniform1iv(this.addr,t)}function uv(r,t){r.uniform2iv(this.addr,t)}function fv(r,t){r.uniform3iv(this.addr,t)}function dv(r,t){r.uniform4iv(this.addr,t)}function pv(r,t){r.uniform1uiv(this.addr,t)}function mv(r,t){r.uniform2uiv(this.addr,t)}function gv(r,t){r.uniform3uiv(this.addr,t)}function _v(r,t){r.uniform4uiv(this.addr,t)}function vv(r,t,e){const n=this.cache,i=t.length,s=Pa(e,i);Ae(n,s)||(r.uniform1iv(this.addr,s),Me(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||vf,s[a])}function Av(r,t,e){const n=this.cache,i=t.length,s=Pa(e,i);Ae(n,s)||(r.uniform1iv(this.addr,s),Me(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||xf,s[a])}function Mv(r,t,e){const n=this.cache,i=t.length,s=Pa(e,i);Ae(n,s)||(r.uniform1iv(this.addr,s),Me(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||yf,s[a])}function xv(r,t,e){const n=this.cache,i=t.length,s=Pa(e,i);Ae(n,s)||(r.uniform1iv(this.addr,s),Me(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Mf,s[a])}function yv(r){switch(r){case 5126:return iv;case 35664:return rv;case 35665:return sv;case 35666:return av;case 35674:return ov;case 35675:return lv;case 35676:return cv;case 5124:case 35670:return hv;case 35667:case 35671:return uv;case 35668:case 35672:return fv;case 35669:case 35673:return dv;case 5125:return pv;case 36294:return mv;case 36295:return gv;case 36296:return _v;case 35678:case 36198:case 36298:case 36306:case 35682:return vv;case 35679:case 36299:case 36307:return Av;case 35680:case 36300:case 36308:case 36293:return Mv;case 36289:case 36303:case 36311:case 36292:return xv}}class Sv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=nv(e.type)}}class Ev{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=yv(e.type)}}class Tv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const vo=/(\w+)(\])?(\[|\.)?/g;function ah(r,t){r.seq.push(t),r.map[t.id]=t}function bv(r,t,e){const n=r.name,i=n.length;for(vo.lastIndex=0;;){const s=vo.exec(n),a=vo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ah(e,c===void 0?new Sv(o,r,t):new Ev(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new Tv(o),ah(e,u)),e=u}}}class oa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);bv(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function oh(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const wv=37297;let Rv=0;function Cv(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Pv(r){const t=jt.getPrimaries(jt.workingColorSpace),e=jt.getPrimaries(r);let n;switch(t===e?n="":t===Aa&&e===va?n="LinearDisplayP3ToLinearSRGB":t===va&&e===Aa&&(n="LinearSRGBToLinearDisplayP3"),r){case Kn:case Ra:return[n,"LinearTransferOETF"];case Ee:case Ml:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function lh(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Cv(r.getShaderSource(t),a)}else return i}function Lv(r,t){const e=Pv(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Dv(r,t){let e;switch(t){case Rp:e="Linear";break;case Cp:e="Reinhard";break;case Pp:e="OptimizedCineon";break;case Lp:e="ACESFilmic";break;case Ip:e="AgX";break;case Dp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Iv(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Sr).join(`
`)}function Uv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function Nv(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ov(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Sr(r){return r!==""}function ch(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Fv=/^[ \t]*#include +<([\w\d./]+)>/gm;function $o(r){return r.replace(Fv,zv)}const Bv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function zv(r,t){let e=zt[t];if(e===void 0){const n=Bv.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return $o(e)}const Gv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uh(r){return r.replace(Gv,kv)}function kv(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function fh(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	`;return r.isWebGL2&&(t+=`precision ${r.precision} sampler3D;
		precision ${r.precision} sampler2DArray;
		precision ${r.precision} sampler2DShadow;
		precision ${r.precision} samplerCubeShadow;
		precision ${r.precision} sampler2DArrayShadow;
		precision ${r.precision} isampler2D;
		precision ${r.precision} isampler3D;
		precision ${r.precision} isamplerCube;
		precision ${r.precision} isampler2DArray;
		precision ${r.precision} usampler2D;
		precision ${r.precision} usampler3D;
		precision ${r.precision} usamplerCube;
		precision ${r.precision} usampler2DArray;
		`),r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Vv(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Zu?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===np?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Xn&&(t="SHADOWMAP_TYPE_VSM"),t}function Hv(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Br:case zr:t="ENVMAP_TYPE_CUBE";break;case wa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Wv(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case zr:t="ENVMAP_MODE_REFRACTION";break}return t}function Yv(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ba:t="ENVMAP_BLENDING_MULTIPLY";break;case bp:t="ENVMAP_BLENDING_MIX";break;case wp:t="ENVMAP_BLENDING_ADD";break}return t}function Xv(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Zv(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Vv(e),c=Hv(e),h=Wv(e),u=Yv(e),f=Xv(e),p=e.isWebGL2?"":Iv(e),_=Uv(e),g=Nv(s),d=i.createProgram();let m,M,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Sr).join(`
`),m.length>0&&(m+=`
`),M=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Sr).join(`
`),M.length>0&&(M+=`
`)):(m=[fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),M=[p,fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?zt.tonemapping_pars_fragment:"",e.toneMapping!==mi?Dv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,Lv("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Sr).join(`
`)),a=$o(a),a=ch(a,e),a=hh(a,e),o=$o(o),o=ch(o,e),o=hh(o,e),a=uh(a),o=uh(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,M=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const E=v+m+a,T=v+M+o,S=oh(i,i.VERTEX_SHADER,E),x=oh(i,i.FRAGMENT_SHADER,T);i.attachShader(d,S),i.attachShader(d,x),e.index0AttributeName!==void 0?i.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d);function I(V){if(r.debug.checkShaderErrors){const Q=i.getProgramInfoLog(d).trim(),U=i.getShaderInfoLog(S).trim(),B=i.getShaderInfoLog(x).trim();let F=!0,X=!0;if(i.getProgramParameter(d,i.LINK_STATUS)===!1)if(F=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,d,S,x);else{const Y=lh(i,S,"vertex"),Z=lh(i,x,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,i.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Q+`
`+Y+`
`+Z)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(U===""||B==="")&&(X=!1);X&&(V.diagnostics={runnable:F,programLog:Q,vertexShader:{log:U,prefix:m},fragmentShader:{log:B,prefix:M}})}i.deleteShader(S),i.deleteShader(x),L=new oa(i,d),A=Ov(i,d)}let L;this.getUniforms=function(){return L===void 0&&I(this),L};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(d,wv)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rv++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=S,this.fragmentShader=x,this}let Qv=0;class qv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Jv(t),e.set(t,n)),n}}class Jv{constructor(t){this.id=Qv++,this.code=t,this.usedTimes=0}}function jv(r,t,e,n,i,s,a){const o=new cf,l=new qv,c=new Set,h=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,p=i.vertexTextures;let _=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(A){return c.add(A),A===0?"uv":`uv${A}`}function m(A,w,V,Q,U){const B=Q.fog,F=U.geometry,X=A.isMeshStandardMaterial?Q.environment:null,Y=(A.isMeshStandardMaterial?e:t).get(A.envMap||X),Z=Y&&Y.mapping===wa?Y.image.height:null,j=g[A.type];A.precision!==null&&(_=i.getMaxPrecision(A.precision),_!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",_,"instead."));const K=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ot=K!==void 0?K.length:0;let vt=0;F.morphAttributes.position!==void 0&&(vt=1),F.morphAttributes.normal!==void 0&&(vt=2),F.morphAttributes.color!==void 0&&(vt=3);let G,J,ct,Mt;if(j){const Yt=Cn[j];G=Yt.vertexShader,J=Yt.fragmentShader}else G=A.vertexShader,J=A.fragmentShader,l.update(A),ct=l.getVertexShaderID(A),Mt=l.getFragmentShaderID(A);const mt=r.getRenderTarget(),_t=U.isInstancedMesh===!0,Ht=U.isBatchedMesh===!0,Ct=!!A.map,N=!!A.matcap,re=!!Y,yt=!!A.aoMap,Rt=!!A.lightMap,At=!!A.bumpMap,Jt=!!A.normalMap,Dt=!!A.displacementMap,R=!!A.emissiveMap,y=!!A.metalnessMap,z=!!A.roughnessMap,et=A.anisotropy>0,$=A.clearcoat>0,tt=A.iridescence>0,gt=A.sheen>0,at=A.transmission>0,ut=et&&!!A.anisotropyMap,St=$&&!!A.clearcoatMap,Pt=$&&!!A.clearcoatNormalMap,q=$&&!!A.clearcoatRoughnessMap,qt=tt&&!!A.iridescenceMap,Gt=tt&&!!A.iridescenceThicknessMap,It=gt&&!!A.sheenColorMap,Tt=gt&&!!A.sheenRoughnessMap,ft=!!A.specularMap,Ft=!!A.specularColorMap,D=!!A.specularIntensityMap,rt=at&&!!A.transmissionMap,ht=at&&!!A.thicknessMap,bt=!!A.gradientMap,P=!!A.alphaMap,it=A.alphaTest>0,nt=!!A.alphaHash,xt=!!A.extensions;let wt=mi;A.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(wt=r.toneMapping);const Zt={isWebGL2:u,shaderID:j,shaderType:A.type,shaderName:A.name,vertexShader:G,fragmentShader:J,defines:A.defines,customVertexShaderID:ct,customFragmentShaderID:Mt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:_,batching:Ht,instancing:_t,instancingColor:_t&&U.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:mt===null?r.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Kn,alphaToCoverage:!!A.alphaToCoverage,map:Ct,matcap:N,envMap:re,envMapMode:re&&Y.mapping,envMapCubeUVHeight:Z,aoMap:yt,lightMap:Rt,bumpMap:At,normalMap:Jt,displacementMap:p&&Dt,emissiveMap:R,normalMapObjectSpace:Jt&&A.normalMapType===Wp,normalMapTangentSpace:Jt&&A.normalMapType===Xi,metalnessMap:y,roughnessMap:z,anisotropy:et,anisotropyMap:ut,clearcoat:$,clearcoatMap:St,clearcoatNormalMap:Pt,clearcoatRoughnessMap:q,iridescence:tt,iridescenceMap:qt,iridescenceThicknessMap:Gt,sheen:gt,sheenColorMap:It,sheenRoughnessMap:Tt,specularMap:ft,specularColorMap:Ft,specularIntensityMap:D,transmission:at,transmissionMap:rt,thicknessMap:ht,gradientMap:bt,opaque:A.transparent===!1&&A.blending===Rr&&A.alphaToCoverage===!1,alphaMap:P,alphaTest:it,alphaHash:nt,combine:A.combine,mapUv:Ct&&d(A.map.channel),aoMapUv:yt&&d(A.aoMap.channel),lightMapUv:Rt&&d(A.lightMap.channel),bumpMapUv:At&&d(A.bumpMap.channel),normalMapUv:Jt&&d(A.normalMap.channel),displacementMapUv:Dt&&d(A.displacementMap.channel),emissiveMapUv:R&&d(A.emissiveMap.channel),metalnessMapUv:y&&d(A.metalnessMap.channel),roughnessMapUv:z&&d(A.roughnessMap.channel),anisotropyMapUv:ut&&d(A.anisotropyMap.channel),clearcoatMapUv:St&&d(A.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&d(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&d(A.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&d(A.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&d(A.iridescenceThicknessMap.channel),sheenColorMapUv:It&&d(A.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&d(A.sheenRoughnessMap.channel),specularMapUv:ft&&d(A.specularMap.channel),specularColorMapUv:Ft&&d(A.specularColorMap.channel),specularIntensityMapUv:D&&d(A.specularIntensityMap.channel),transmissionMapUv:rt&&d(A.transmissionMap.channel),thicknessMapUv:ht&&d(A.thicknessMap.channel),alphaMapUv:P&&d(A.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Jt||et),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(Ct||P),fog:!!B,useFog:A.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:U.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:vt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:wt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ct&&A.map.isVideoTexture===!0&&jt.getTransfer(A.map.colorSpace)===ee,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===sn,flipSided:A.side===je,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:xt&&A.extensions.derivatives===!0,extensionFragDepth:xt&&A.extensions.fragDepth===!0,extensionDrawBuffers:xt&&A.extensions.drawBuffers===!0,extensionShaderTextureLOD:xt&&A.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xt&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:xt&&A.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Zt.vertexUv1s=c.has(1),Zt.vertexUv2s=c.has(2),Zt.vertexUv3s=c.has(3),c.clear(),Zt}function M(A){const w=[];if(A.shaderID?w.push(A.shaderID):(w.push(A.customVertexShaderID),w.push(A.customFragmentShaderID)),A.defines!==void 0)for(const V in A.defines)w.push(V),w.push(A.defines[V]);return A.isRawShaderMaterial===!1&&(v(w,A),E(w,A),w.push(r.outputColorSpace)),w.push(A.customProgramCacheKey),w.join()}function v(A,w){A.push(w.precision),A.push(w.outputColorSpace),A.push(w.envMapMode),A.push(w.envMapCubeUVHeight),A.push(w.mapUv),A.push(w.alphaMapUv),A.push(w.lightMapUv),A.push(w.aoMapUv),A.push(w.bumpMapUv),A.push(w.normalMapUv),A.push(w.displacementMapUv),A.push(w.emissiveMapUv),A.push(w.metalnessMapUv),A.push(w.roughnessMapUv),A.push(w.anisotropyMapUv),A.push(w.clearcoatMapUv),A.push(w.clearcoatNormalMapUv),A.push(w.clearcoatRoughnessMapUv),A.push(w.iridescenceMapUv),A.push(w.iridescenceThicknessMapUv),A.push(w.sheenColorMapUv),A.push(w.sheenRoughnessMapUv),A.push(w.specularMapUv),A.push(w.specularColorMapUv),A.push(w.specularIntensityMapUv),A.push(w.transmissionMapUv),A.push(w.thicknessMapUv),A.push(w.combine),A.push(w.fogExp2),A.push(w.sizeAttenuation),A.push(w.morphTargetsCount),A.push(w.morphAttributeCount),A.push(w.numDirLights),A.push(w.numPointLights),A.push(w.numSpotLights),A.push(w.numSpotLightMaps),A.push(w.numHemiLights),A.push(w.numRectAreaLights),A.push(w.numDirLightShadows),A.push(w.numPointLightShadows),A.push(w.numSpotLightShadows),A.push(w.numSpotLightShadowsWithMaps),A.push(w.numLightProbes),A.push(w.shadowMapType),A.push(w.toneMapping),A.push(w.numClippingPlanes),A.push(w.numClipIntersection),A.push(w.depthPacking)}function E(A,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),A.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),A.push(o.mask)}function T(A){const w=g[A.type];let V;if(w){const Q=Cn[w];V=Dm.clone(Q.uniforms)}else V=A.uniforms;return V}function S(A,w){let V;for(let Q=0,U=h.length;Q<U;Q++){const B=h[Q];if(B.cacheKey===w){V=B,++V.usedTimes;break}}return V===void 0&&(V=new Zv(r,w,A,s),h.push(V)),V}function x(A){if(--A.usedTimes===0){const w=h.indexOf(A);h[w]=h[h.length-1],h.pop(),A.destroy()}}function I(A){l.remove(A)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:T,acquireProgram:S,releaseProgram:x,releaseShaderCache:I,programs:h,dispose:L}}function Kv(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function $v(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function dh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ph(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,p,_,g,d){let m=r[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:p,groupOrder:_,renderOrder:u.renderOrder,z:g,group:d},r[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=p,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=g,m.group=d),t++,m}function o(u,f,p,_,g,d){const m=a(u,f,p,_,g,d);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):e.push(m)}function l(u,f,p,_,g,d){const m=a(u,f,p,_,g,d);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||$v),n.length>1&&n.sort(f||dh),i.length>1&&i.sort(f||dh)}function h(){for(let u=t,f=r.length;u<f;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function tA(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new ph,r.set(n,[a])):i>=s.length?(a=new ph,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function eA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new pt};break;case"SpotLight":e={position:new C,direction:new C,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":e={color:new pt,position:new C,halfWidth:new C,halfHeight:new C};break}return r[t.id]=e,e}}}function nA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let iA=0;function rA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function sA(r,t){const e=new eA,n=nA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new C);const s=new C,a=new ne,o=new ne;function l(h,u){let f=0,p=0,_=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let g=0,d=0,m=0,M=0,v=0,E=0,T=0,S=0,x=0,I=0,L=0;h.sort(rA);const A=u===!0?Math.PI:1;for(let V=0,Q=h.length;V<Q;V++){const U=h[V],B=U.color,F=U.intensity,X=U.distance,Y=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=B.r*F*A,p+=B.g*F*A,_+=B.b*F*A;else if(U.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(U.sh.coefficients[Z],F);L++}else if(U.isDirectionalLight){const Z=e.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity*A),U.castShadow){const j=U.shadow,K=n.get(U);K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,i.directionalShadow[g]=K,i.directionalShadowMap[g]=Y,i.directionalShadowMatrix[g]=U.shadow.matrix,E++}i.directional[g]=Z,g++}else if(U.isSpotLight){const Z=e.get(U);Z.position.setFromMatrixPosition(U.matrixWorld),Z.color.copy(B).multiplyScalar(F*A),Z.distance=X,Z.coneCos=Math.cos(U.angle),Z.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Z.decay=U.decay,i.spot[m]=Z;const j=U.shadow;if(U.map&&(i.spotLightMap[x]=U.map,x++,j.updateMatrices(U),U.castShadow&&I++),i.spotLightMatrix[m]=j.matrix,U.castShadow){const K=n.get(U);K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,i.spotShadow[m]=K,i.spotShadowMap[m]=Y,S++}m++}else if(U.isRectAreaLight){const Z=e.get(U);Z.color.copy(B).multiplyScalar(F),Z.halfWidth.set(U.width*.5,0,0),Z.halfHeight.set(0,U.height*.5,0),i.rectArea[M]=Z,M++}else if(U.isPointLight){const Z=e.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity*A),Z.distance=U.distance,Z.decay=U.decay,U.castShadow){const j=U.shadow,K=n.get(U);K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,K.shadowCameraNear=j.camera.near,K.shadowCameraFar=j.camera.far,i.pointShadow[d]=K,i.pointShadowMap[d]=Y,i.pointShadowMatrix[d]=U.shadow.matrix,T++}i.point[d]=Z,d++}else if(U.isHemisphereLight){const Z=e.get(U);Z.skyColor.copy(U.color).multiplyScalar(F*A),Z.groundColor.copy(U.groundColor).multiplyScalar(F*A),i.hemi[v]=Z,v++}}M>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=_;const w=i.hash;(w.directionalLength!==g||w.pointLength!==d||w.spotLength!==m||w.rectAreaLength!==M||w.hemiLength!==v||w.numDirectionalShadows!==E||w.numPointShadows!==T||w.numSpotShadows!==S||w.numSpotMaps!==x||w.numLightProbes!==L)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=M,i.point.length=d,i.hemi.length=v,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=S+x-I,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=L,w.directionalLength=g,w.pointLength=d,w.spotLength=m,w.rectAreaLength=M,w.hemiLength=v,w.numDirectionalShadows=E,w.numPointShadows=T,w.numSpotShadows=S,w.numSpotMaps=x,w.numLightProbes=L,i.version=iA++)}function c(h,u){let f=0,p=0,_=0,g=0,d=0;const m=u.matrixWorldInverse;for(let M=0,v=h.length;M<v;M++){const E=h[M];if(E.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),f++}else if(E.isSpotLight){const T=i.spot[_];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),_++}else if(E.isRectAreaLight){const T=i.rectArea[g];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(m),o.identity(),a.copy(E.matrixWorld),a.premultiply(m),o.extractRotation(a),T.halfWidth.set(E.width*.5,0,0),T.halfHeight.set(0,E.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const T=i.point[p];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(m),p++}else if(E.isHemisphereLight){const T=i.hemi[d];T.direction.setFromMatrixPosition(E.matrixWorld),T.direction.transformDirection(m),d++}}}return{setup:l,setupView:c,state:i}}function mh(r,t){const e=new sA(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function aA(r,t){let e=new WeakMap;function n(s,a=0){const o=e.get(s);let l;return o===void 0?(l=new mh(r,t),e.set(s,[l])):a>=o.length?(l=new mh(r,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Sf extends Le{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ef extends Le{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const oA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lA=`uniform sampler2D shadow_pass;
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
}`;function cA(r,t,e){let n=new mf;const i=new st,s=new st,a=new be,o=new Sf({depthPacking:Hp}),l=new Ef,c={},h=e.maxTextureSize,u={[Ai]:je,[je]:Ai,[sn]:sn},f=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:oA,fragmentShader:lA}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new bn;_.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new le(_,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zu;let m=this.type;this.render=function(S,x,I){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||S.length===0)return;const L=r.getRenderTarget(),A=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),V=r.state;V.setBlending(pi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const Q=m!==Xn&&this.type===Xn,U=m===Xn&&this.type!==Xn;for(let B=0,F=S.length;B<F;B++){const X=S[B],Y=X.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const Z=Y.getFrameExtents();if(i.multiply(Z),s.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Z.x),i.x=s.x*Z.x,Y.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Z.y),i.y=s.y*Z.y,Y.mapSize.y=s.y)),Y.map===null||Q===!0||U===!0){const K=this.type!==Xn?{minFilter:Nt,magFilter:Nt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Wi(i.x,i.y,K),Y.map.texture.name=X.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const j=Y.getViewportCount();for(let K=0;K<j;K++){const ot=Y.getViewport(K);a.set(s.x*ot.x,s.y*ot.y,s.x*ot.z,s.y*ot.w),V.viewport(a),Y.updateMatrices(X,K),n=Y.getFrustum(),E(x,I,Y.camera,X,this.type)}Y.isPointLightShadow!==!0&&this.type===Xn&&M(Y,I),Y.needsUpdate=!1}m=this.type,d.needsUpdate=!1,r.setRenderTarget(L,A,w)};function M(S,x){const I=t.update(g);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Wi(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(x,null,I,f,g,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(x,null,I,p,g,null)}function v(S,x,I,L){let A=null;const w=I.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(w!==void 0)A=w;else if(A=I.isPointLight===!0?l:o,r.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){const V=A.uuid,Q=x.uuid;let U=c[V];U===void 0&&(U={},c[V]=U);let B=U[Q];B===void 0&&(B=A.clone(),U[Q]=B,x.addEventListener("dispose",T)),A=B}if(A.visible=x.visible,A.wireframe=x.wireframe,L===Xn?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:u[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,I.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const V=r.properties.get(A);V.light=I}return A}function E(S,x,I,L,A){if(S.visible===!1)return;if(S.layers.test(x.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&A===Xn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,S.matrixWorld);const Q=t.update(S),U=S.material;if(Array.isArray(U)){const B=Q.groups;for(let F=0,X=B.length;F<X;F++){const Y=B[F],Z=U[Y.materialIndex];if(Z&&Z.visible){const j=v(S,Z,L,A);S.onBeforeShadow(r,S,x,I,Q,j,Y),r.renderBufferDirect(I,null,Q,j,S,Y),S.onAfterShadow(r,S,x,I,Q,j,Y)}}}else if(U.visible){const B=v(S,U,L,A);S.onBeforeShadow(r,S,x,I,Q,B,null),r.renderBufferDirect(I,null,Q,B,S,null),S.onAfterShadow(r,S,x,I,Q,B,null)}}const V=S.children;for(let Q=0,U=V.length;Q<U;Q++)E(V[Q],x,I,L,A)}function T(S){S.target.removeEventListener("dispose",T);for(const I in c){const L=c[I],A=S.target.uuid;A in L&&(L[A].dispose(),delete L[A])}}}function hA(r,t,e){const n=e.isWebGL2;function i(){let P=!1;const it=new be;let nt=null;const xt=new be(0,0,0,0);return{setMask:function(wt){nt!==wt&&!P&&(r.colorMask(wt,wt,wt,wt),nt=wt)},setLocked:function(wt){P=wt},setClear:function(wt,Zt,Yt,Kt,Re){Re===!0&&(wt*=Kt,Zt*=Kt,Yt*=Kt),it.set(wt,Zt,Yt,Kt),xt.equals(it)===!1&&(r.clearColor(wt,Zt,Yt,Kt),xt.copy(it))},reset:function(){P=!1,nt=null,xt.set(-1,0,0,0)}}}function s(){let P=!1,it=null,nt=null,xt=null;return{setTest:function(wt){wt?_t(r.DEPTH_TEST):Ht(r.DEPTH_TEST)},setMask:function(wt){it!==wt&&!P&&(r.depthMask(wt),it=wt)},setFunc:function(wt){if(nt!==wt){switch(wt){case Ap:r.depthFunc(r.NEVER);break;case Mp:r.depthFunc(r.ALWAYS);break;case xp:r.depthFunc(r.LESS);break;case ga:r.depthFunc(r.LEQUAL);break;case yp:r.depthFunc(r.EQUAL);break;case Sp:r.depthFunc(r.GEQUAL);break;case Ep:r.depthFunc(r.GREATER);break;case Tp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}nt=wt}},setLocked:function(wt){P=wt},setClear:function(wt){xt!==wt&&(r.clearDepth(wt),xt=wt)},reset:function(){P=!1,it=null,nt=null,xt=null}}}function a(){let P=!1,it=null,nt=null,xt=null,wt=null,Zt=null,Yt=null,Kt=null,Re=null;return{setTest:function(Qt){P||(Qt?_t(r.STENCIL_TEST):Ht(r.STENCIL_TEST))},setMask:function(Qt){it!==Qt&&!P&&(r.stencilMask(Qt),it=Qt)},setFunc:function(Qt,ue,Ge){(nt!==Qt||xt!==ue||wt!==Ge)&&(r.stencilFunc(Qt,ue,Ge),nt=Qt,xt=ue,wt=Ge)},setOp:function(Qt,ue,Ge){(Zt!==Qt||Yt!==ue||Kt!==Ge)&&(r.stencilOp(Qt,ue,Ge),Zt=Qt,Yt=ue,Kt=Ge)},setLocked:function(Qt){P=Qt},setClear:function(Qt){Re!==Qt&&(r.clearStencil(Qt),Re=Qt)},reset:function(){P=!1,it=null,nt=null,xt=null,wt=null,Zt=null,Yt=null,Kt=null,Re=null}}}const o=new i,l=new s,c=new a,h=new WeakMap,u=new WeakMap;let f={},p={},_=new WeakMap,g=[],d=null,m=!1,M=null,v=null,E=null,T=null,S=null,x=null,I=null,L=new pt(0,0,0),A=0,w=!1,V=null,Q=null,U=null,B=null,F=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,Z=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(j)[1]),Y=Z>=1):j.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Y=Z>=2);let K=null,ot={};const vt=r.getParameter(r.SCISSOR_BOX),G=r.getParameter(r.VIEWPORT),J=new be().fromArray(vt),ct=new be().fromArray(G);function Mt(P,it,nt,xt){const wt=new Uint8Array(4),Zt=r.createTexture();r.bindTexture(P,Zt),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Yt=0;Yt<nt;Yt++)n&&(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)?r.texImage3D(it,0,r.RGBA,1,1,xt,0,r.RGBA,r.UNSIGNED_BYTE,wt):r.texImage2D(it+Yt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,wt);return Zt}const mt={};mt[r.TEXTURE_2D]=Mt(r.TEXTURE_2D,r.TEXTURE_2D,1),mt[r.TEXTURE_CUBE_MAP]=Mt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(mt[r.TEXTURE_2D_ARRAY]=Mt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),mt[r.TEXTURE_3D]=Mt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),_t(r.DEPTH_TEST),l.setFunc(ga),Dt(!1),R(Ql),_t(r.CULL_FACE),At(pi);function _t(P){f[P]!==!0&&(r.enable(P),f[P]=!0)}function Ht(P){f[P]!==!1&&(r.disable(P),f[P]=!1)}function Ct(P,it){return p[P]!==it?(r.bindFramebuffer(P,it),p[P]=it,n&&(P===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=it),P===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=it)),!0):!1}function N(P,it){let nt=g,xt=!1;if(P)if(nt=_.get(it),nt===void 0&&(nt=[],_.set(it,nt)),P.isWebGLMultipleRenderTargets){const wt=P.texture;if(nt.length!==wt.length||nt[0]!==r.COLOR_ATTACHMENT0){for(let Zt=0,Yt=wt.length;Zt<Yt;Zt++)nt[Zt]=r.COLOR_ATTACHMENT0+Zt;nt.length=wt.length,xt=!0}}else nt[0]!==r.COLOR_ATTACHMENT0&&(nt[0]=r.COLOR_ATTACHMENT0,xt=!0);else nt[0]!==r.BACK&&(nt[0]=r.BACK,xt=!0);xt&&(e.isWebGL2?r.drawBuffers(nt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(nt))}function re(P){return d!==P?(r.useProgram(P),d=P,!0):!1}const yt={[Di]:r.FUNC_ADD,[rp]:r.FUNC_SUBTRACT,[sp]:r.FUNC_REVERSE_SUBTRACT};if(n)yt[Kl]=r.MIN,yt[$l]=r.MAX;else{const P=t.get("EXT_blend_minmax");P!==null&&(yt[Kl]=P.MIN_EXT,yt[$l]=P.MAX_EXT)}const Rt={[ap]:r.ZERO,[op]:r.ONE,[lp]:r.SRC_COLOR,[Xo]:r.SRC_ALPHA,[pp]:r.SRC_ALPHA_SATURATE,[fp]:r.DST_COLOR,[hp]:r.DST_ALPHA,[cp]:r.ONE_MINUS_SRC_COLOR,[Zo]:r.ONE_MINUS_SRC_ALPHA,[dp]:r.ONE_MINUS_DST_COLOR,[up]:r.ONE_MINUS_DST_ALPHA,[mp]:r.CONSTANT_COLOR,[gp]:r.ONE_MINUS_CONSTANT_COLOR,[_p]:r.CONSTANT_ALPHA,[vp]:r.ONE_MINUS_CONSTANT_ALPHA};function At(P,it,nt,xt,wt,Zt,Yt,Kt,Re,Qt){if(P===pi){m===!0&&(Ht(r.BLEND),m=!1);return}if(m===!1&&(_t(r.BLEND),m=!0),P!==ip){if(P!==M||Qt!==w){if((v!==Di||S!==Di)&&(r.blendEquation(r.FUNC_ADD),v=Di,S=Di),Qt)switch(P){case Rr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ql:r.blendFunc(r.ONE,r.ONE);break;case Jl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Rr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ql:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Jl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}E=null,T=null,x=null,I=null,L.set(0,0,0),A=0,M=P,w=Qt}return}wt=wt||it,Zt=Zt||nt,Yt=Yt||xt,(it!==v||wt!==S)&&(r.blendEquationSeparate(yt[it],yt[wt]),v=it,S=wt),(nt!==E||xt!==T||Zt!==x||Yt!==I)&&(r.blendFuncSeparate(Rt[nt],Rt[xt],Rt[Zt],Rt[Yt]),E=nt,T=xt,x=Zt,I=Yt),(Kt.equals(L)===!1||Re!==A)&&(r.blendColor(Kt.r,Kt.g,Kt.b,Re),L.copy(Kt),A=Re),M=P,w=!1}function Jt(P,it){P.side===sn?Ht(r.CULL_FACE):_t(r.CULL_FACE);let nt=P.side===je;it&&(nt=!nt),Dt(nt),P.blending===Rr&&P.transparent===!1?At(pi):At(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const xt=P.stencilWrite;c.setTest(xt),xt&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),z(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?_t(r.SAMPLE_ALPHA_TO_COVERAGE):Ht(r.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(P){V!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),V=P)}function R(P){P!==tp?(_t(r.CULL_FACE),P!==Q&&(P===Ql?r.cullFace(r.BACK):P===ep?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ht(r.CULL_FACE),Q=P}function y(P){P!==U&&(Y&&r.lineWidth(P),U=P)}function z(P,it,nt){P?(_t(r.POLYGON_OFFSET_FILL),(B!==it||F!==nt)&&(r.polygonOffset(it,nt),B=it,F=nt)):Ht(r.POLYGON_OFFSET_FILL)}function et(P){P?_t(r.SCISSOR_TEST):Ht(r.SCISSOR_TEST)}function $(P){P===void 0&&(P=r.TEXTURE0+X-1),K!==P&&(r.activeTexture(P),K=P)}function tt(P,it,nt){nt===void 0&&(K===null?nt=r.TEXTURE0+X-1:nt=K);let xt=ot[nt];xt===void 0&&(xt={type:void 0,texture:void 0},ot[nt]=xt),(xt.type!==P||xt.texture!==it)&&(K!==nt&&(r.activeTexture(nt),K=nt),r.bindTexture(P,it||mt[P]),xt.type=P,xt.texture=it)}function gt(){const P=ot[K];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function at(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function St(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pt(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function qt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Gt(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function It(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Tt(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ft(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ft(P){J.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),J.copy(P))}function D(P){ct.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),ct.copy(P))}function rt(P,it){let nt=u.get(it);nt===void 0&&(nt=new WeakMap,u.set(it,nt));let xt=nt.get(P);xt===void 0&&(xt=r.getUniformBlockIndex(it,P.name),nt.set(P,xt))}function ht(P,it){const xt=u.get(it).get(P);h.get(it)!==xt&&(r.uniformBlockBinding(it,xt,P.__bindingPointIndex),h.set(it,xt))}function bt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},K=null,ot={},p={},_=new WeakMap,g=[],d=null,m=!1,M=null,v=null,E=null,T=null,S=null,x=null,I=null,L=new pt(0,0,0),A=0,w=!1,V=null,Q=null,U=null,B=null,F=null,J.set(0,0,r.canvas.width,r.canvas.height),ct.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:_t,disable:Ht,bindFramebuffer:Ct,drawBuffers:N,useProgram:re,setBlending:At,setMaterial:Jt,setFlipSided:Dt,setCullFace:R,setLineWidth:y,setPolygonOffset:z,setScissorTest:et,activeTexture:$,bindTexture:tt,unbindTexture:gt,compressedTexImage2D:at,compressedTexImage3D:ut,texImage2D:Tt,texImage3D:ft,updateUBOMapping:rt,uniformBlockBinding:ht,texStorage2D:Gt,texStorage3D:It,texSubImage2D:St,texSubImage3D:Pt,compressedTexSubImage2D:q,compressedTexSubImage3D:qt,scissor:Ft,viewport:D,reset:bt}}function uA(r,t,e,n,i,s,a){const o=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,y){return p?new OffscreenCanvas(R,y):ys("canvas")}function g(R,y,z,et){let $=1;if((R.width>et||R.height>et)&&($=et/Math.max(R.width,R.height)),$<1||y===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const tt=y?xa:Math.floor,gt=tt($*R.width),at=tt($*R.height);u===void 0&&(u=_(gt,at));const ut=z?_(gt,at):u;return ut.width=gt,ut.height=at,ut.getContext("2d").drawImage(R,0,0,gt,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+gt+"x"+at+")."),ut}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function d(R){return Ko(R.width)&&Ko(R.height)}function m(R){return o?!1:R.wrapS!==En||R.wrapT!==En||R.minFilter!==Nt&&R.minFilter!==Xe}function M(R,y){return R.generateMipmaps&&y&&R.minFilter!==Nt&&R.minFilter!==Xe}function v(R){r.generateMipmap(R)}function E(R,y,z,et,$=!1){if(o===!1)return y;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let tt=y;if(y===r.RED&&(z===r.FLOAT&&(tt=r.R32F),z===r.HALF_FLOAT&&(tt=r.R16F),z===r.UNSIGNED_BYTE&&(tt=r.R8)),y===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(tt=r.R8UI),z===r.UNSIGNED_SHORT&&(tt=r.R16UI),z===r.UNSIGNED_INT&&(tt=r.R32UI),z===r.BYTE&&(tt=r.R8I),z===r.SHORT&&(tt=r.R16I),z===r.INT&&(tt=r.R32I)),y===r.RG&&(z===r.FLOAT&&(tt=r.RG32F),z===r.HALF_FLOAT&&(tt=r.RG16F),z===r.UNSIGNED_BYTE&&(tt=r.RG8)),y===r.RGBA){const gt=$?_a:jt.getTransfer(et);z===r.FLOAT&&(tt=r.RGBA32F),z===r.HALF_FLOAT&&(tt=r.RGBA16F),z===r.UNSIGNED_BYTE&&(tt=gt===ee?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(tt=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(tt=r.RGB5_A1)}return(tt===r.R16F||tt===r.R32F||tt===r.RG16F||tt===r.RG32F||tt===r.RGBA16F||tt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function T(R,y,z){return M(R,z)===!0||R.isFramebufferTexture&&R.minFilter!==Nt&&R.minFilter!==Xe?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function S(R){return R===Nt||R===tc||R===Zr?r.NEAREST:r.LINEAR}function x(R){const y=R.target;y.removeEventListener("dispose",x),L(y),y.isVideoTexture&&h.delete(y)}function I(R){const y=R.target;y.removeEventListener("dispose",I),w(y)}function L(R){const y=n.get(R);if(y.__webglInit===void 0)return;const z=R.source,et=f.get(z);if(et){const $=et[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&A(R),Object.keys(et).length===0&&f.delete(z)}n.remove(R)}function A(R){const y=n.get(R);r.deleteTexture(y.__webglTexture);const z=R.source,et=f.get(z);delete et[y.__cacheKey],a.memory.textures--}function w(R){const y=R.texture,z=n.get(R),et=n.get(y);if(et.__webglTexture!==void 0&&(r.deleteTexture(et.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(z.__webglFramebuffer[$]))for(let tt=0;tt<z.__webglFramebuffer[$].length;tt++)r.deleteFramebuffer(z.__webglFramebuffer[$][tt]);else r.deleteFramebuffer(z.__webglFramebuffer[$]);z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer[$])}else{if(Array.isArray(z.__webglFramebuffer))for(let $=0;$<z.__webglFramebuffer.length;$++)r.deleteFramebuffer(z.__webglFramebuffer[$]);else r.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&r.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let $=0;$<z.__webglColorRenderbuffer.length;$++)z.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(z.__webglColorRenderbuffer[$]);z.__webglDepthRenderbuffer&&r.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let $=0,tt=y.length;$<tt;$++){const gt=n.get(y[$]);gt.__webglTexture&&(r.deleteTexture(gt.__webglTexture),a.memory.textures--),n.remove(y[$])}n.remove(y),n.remove(R)}let V=0;function Q(){V=0}function U(){const R=V;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),V+=1,R}function B(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function F(R,y){const z=n.get(R);if(R.isVideoTexture&&Jt(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const et=R.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(z,R,y);return}}e.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+y)}function X(R,y){const z=n.get(R);if(R.version>0&&z.__version!==R.version){J(z,R,y);return}e.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+y)}function Y(R,y){const z=n.get(R);if(R.version>0&&z.__version!==R.version){J(z,R,y);return}e.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+y)}function Z(R,y){const z=n.get(R);if(R.version>0&&z.__version!==R.version){ct(z,R,y);return}e.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+y)}const j={[As]:r.REPEAT,[En]:r.CLAMP_TO_EDGE,[Jo]:r.MIRRORED_REPEAT},K={[Nt]:r.NEAREST,[tc]:r.NEAREST_MIPMAP_NEAREST,[Zr]:r.NEAREST_MIPMAP_LINEAR,[Xe]:r.LINEAR,[Wa]:r.LINEAR_MIPMAP_NEAREST,[Ni]:r.LINEAR_MIPMAP_LINEAR},ot={[Yp]:r.NEVER,[jp]:r.ALWAYS,[Xp]:r.LESS,[rf]:r.LEQUAL,[Zp]:r.EQUAL,[Jp]:r.GEQUAL,[Qp]:r.GREATER,[qp]:r.NOTEQUAL};function vt(R,y,z){if(y.type===Ln&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Xe||y.magFilter===Wa||y.magFilter===Zr||y.magFilter===Ni||y.minFilter===Xe||y.minFilter===Wa||y.minFilter===Zr||y.minFilter===Ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),z?(r.texParameteri(R,r.TEXTURE_WRAP_S,j[y.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,j[y.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,j[y.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,K[y.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,K[y.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(y.wrapS!==En||y.wrapT!==En)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,S(y.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,S(y.minFilter)),y.minFilter!==Nt&&y.minFilter!==Xe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ot[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===Nt||y.minFilter!==Zr&&y.minFilter!==Ni||y.type===Ln&&t.has("OES_texture_float_linear")===!1||o===!1&&y.type===Ms&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(r.texParameterf(R,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function G(R,y){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",x));const et=y.source;let $=f.get(et);$===void 0&&($={},f.set(et,$));const tt=B(y);if(tt!==R.__cacheKey){$[tt]===void 0&&($[tt]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),$[tt].usedTimes++;const gt=$[R.__cacheKey];gt!==void 0&&($[R.__cacheKey].usedTimes--,gt.usedTimes===0&&A(y)),R.__cacheKey=tt,R.__webglTexture=$[tt].texture}return z}function J(R,y,z){let et=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(et=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(et=r.TEXTURE_3D);const $=G(R,y),tt=y.source;e.bindTexture(et,R.__webglTexture,r.TEXTURE0+z);const gt=n.get(tt);if(tt.version!==gt.__version||$===!0){e.activeTexture(r.TEXTURE0+z);const at=jt.getPrimaries(jt.workingColorSpace),ut=y.colorSpace===gn?null:jt.getPrimaries(y.colorSpace),St=y.colorSpace===gn||at===ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Pt=m(y)&&d(y.image)===!1;let q=g(y.image,Pt,!1,i.maxTextureSize);q=Dt(y,q);const qt=d(q)||o,Gt=s.convert(y.format,y.colorSpace);let It=s.convert(y.type),Tt=E(y.internalFormat,Gt,It,y.colorSpace,y.isVideoTexture);vt(et,y,qt);let ft;const Ft=y.mipmaps,D=o&&y.isVideoTexture!==!0&&Tt!==ef,rt=gt.__version===void 0||$===!0,ht=tt.dataReady,bt=T(y,q,qt);if(y.isDepthTexture)Tt=r.DEPTH_COMPONENT,o?y.type===Ln?Tt=r.DEPTH_COMPONENT32F:y.type===hi?Tt=r.DEPTH_COMPONENT24:y.type===Gi?Tt=r.DEPTH24_STENCIL8:Tt=r.DEPTH_COMPONENT16:y.type===Ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===ki&&Tt===r.DEPTH_COMPONENT&&y.type!==Al&&y.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=hi,It=s.convert(y.type)),y.format===Gr&&Tt===r.DEPTH_COMPONENT&&(Tt=r.DEPTH_STENCIL,y.type!==Gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Gi,It=s.convert(y.type))),rt&&(D?e.texStorage2D(r.TEXTURE_2D,1,Tt,q.width,q.height):e.texImage2D(r.TEXTURE_2D,0,Tt,q.width,q.height,0,Gt,It,null));else if(y.isDataTexture)if(Ft.length>0&&qt){D&&rt&&e.texStorage2D(r.TEXTURE_2D,bt,Tt,Ft[0].width,Ft[0].height);for(let P=0,it=Ft.length;P<it;P++)ft=Ft[P],D?ht&&e.texSubImage2D(r.TEXTURE_2D,P,0,0,ft.width,ft.height,Gt,It,ft.data):e.texImage2D(r.TEXTURE_2D,P,Tt,ft.width,ft.height,0,Gt,It,ft.data);y.generateMipmaps=!1}else D?(rt&&e.texStorage2D(r.TEXTURE_2D,bt,Tt,q.width,q.height),ht&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,q.width,q.height,Gt,It,q.data)):e.texImage2D(r.TEXTURE_2D,0,Tt,q.width,q.height,0,Gt,It,q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){D&&rt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,bt,Tt,Ft[0].width,Ft[0].height,q.depth);for(let P=0,it=Ft.length;P<it;P++)ft=Ft[P],y.format!==mn?Gt!==null?D?ht&&e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,P,0,0,0,ft.width,ft.height,q.depth,Gt,ft.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,P,Tt,ft.width,ft.height,q.depth,0,ft.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ht&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,P,0,0,0,ft.width,ft.height,q.depth,Gt,It,ft.data):e.texImage3D(r.TEXTURE_2D_ARRAY,P,Tt,ft.width,ft.height,q.depth,0,Gt,It,ft.data)}else{D&&rt&&e.texStorage2D(r.TEXTURE_2D,bt,Tt,Ft[0].width,Ft[0].height);for(let P=0,it=Ft.length;P<it;P++)ft=Ft[P],y.format!==mn?Gt!==null?D?ht&&e.compressedTexSubImage2D(r.TEXTURE_2D,P,0,0,ft.width,ft.height,Gt,ft.data):e.compressedTexImage2D(r.TEXTURE_2D,P,Tt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ht&&e.texSubImage2D(r.TEXTURE_2D,P,0,0,ft.width,ft.height,Gt,It,ft.data):e.texImage2D(r.TEXTURE_2D,P,Tt,ft.width,ft.height,0,Gt,It,ft.data)}else if(y.isDataArrayTexture)D?(rt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,bt,Tt,q.width,q.height,q.depth),ht&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,Gt,It,q.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,Tt,q.width,q.height,q.depth,0,Gt,It,q.data);else if(y.isData3DTexture)D?(rt&&e.texStorage3D(r.TEXTURE_3D,bt,Tt,q.width,q.height,q.depth),ht&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,Gt,It,q.data)):e.texImage3D(r.TEXTURE_3D,0,Tt,q.width,q.height,q.depth,0,Gt,It,q.data);else if(y.isFramebufferTexture){if(rt)if(D)e.texStorage2D(r.TEXTURE_2D,bt,Tt,q.width,q.height);else{let P=q.width,it=q.height;for(let nt=0;nt<bt;nt++)e.texImage2D(r.TEXTURE_2D,nt,Tt,P,it,0,Gt,It,null),P>>=1,it>>=1}}else if(Ft.length>0&&qt){D&&rt&&e.texStorage2D(r.TEXTURE_2D,bt,Tt,Ft[0].width,Ft[0].height);for(let P=0,it=Ft.length;P<it;P++)ft=Ft[P],D?ht&&e.texSubImage2D(r.TEXTURE_2D,P,0,0,Gt,It,ft):e.texImage2D(r.TEXTURE_2D,P,Tt,Gt,It,ft);y.generateMipmaps=!1}else D?(rt&&e.texStorage2D(r.TEXTURE_2D,bt,Tt,q.width,q.height),ht&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Gt,It,q)):e.texImage2D(r.TEXTURE_2D,0,Tt,Gt,It,q);M(y,qt)&&v(et),gt.__version=tt.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ct(R,y,z){if(y.image.length!==6)return;const et=G(R,y),$=y.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+z);const tt=n.get($);if($.version!==tt.__version||et===!0){e.activeTexture(r.TEXTURE0+z);const gt=jt.getPrimaries(jt.workingColorSpace),at=y.colorSpace===gn?null:jt.getPrimaries(y.colorSpace),ut=y.colorSpace===gn||gt===at?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const St=y.isCompressedTexture||y.image[0].isCompressedTexture,Pt=y.image[0]&&y.image[0].isDataTexture,q=[];for(let P=0;P<6;P++)!St&&!Pt?q[P]=g(y.image[P],!1,!0,i.maxCubemapSize):q[P]=Pt?y.image[P].image:y.image[P],q[P]=Dt(y,q[P]);const qt=q[0],Gt=d(qt)||o,It=s.convert(y.format,y.colorSpace),Tt=s.convert(y.type),ft=E(y.internalFormat,It,Tt,y.colorSpace),Ft=o&&y.isVideoTexture!==!0,D=tt.__version===void 0||et===!0,rt=$.dataReady;let ht=T(y,qt,Gt);vt(r.TEXTURE_CUBE_MAP,y,Gt);let bt;if(St){Ft&&D&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ht,ft,qt.width,qt.height);for(let P=0;P<6;P++){bt=q[P].mipmaps;for(let it=0;it<bt.length;it++){const nt=bt[it];y.format!==mn?It!==null?Ft?rt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+P,it,0,0,nt.width,nt.height,It,nt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+P,it,ft,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+P,it,0,0,nt.width,nt.height,It,Tt,nt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+P,it,ft,nt.width,nt.height,0,It,Tt,nt.data)}}}else{bt=y.mipmaps,Ft&&D&&(bt.length>0&&ht++,e.texStorage2D(r.TEXTURE_CUBE_MAP,ht,ft,q[0].width,q[0].height));for(let P=0;P<6;P++)if(Pt){Ft?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,q[P].width,q[P].height,It,Tt,q[P].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,ft,q[P].width,q[P].height,0,It,Tt,q[P].data);for(let it=0;it<bt.length;it++){const xt=bt[it].image[P].image;Ft?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+P,it+1,0,0,xt.width,xt.height,It,Tt,xt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+P,it+1,ft,xt.width,xt.height,0,It,Tt,xt.data)}}else{Ft?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,It,Tt,q[P]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,ft,It,Tt,q[P]);for(let it=0;it<bt.length;it++){const nt=bt[it];Ft?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+P,it+1,0,0,It,Tt,nt.image[P]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+P,it+1,ft,It,Tt,nt.image[P])}}}M(y,Gt)&&v(r.TEXTURE_CUBE_MAP),tt.__version=$.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Mt(R,y,z,et,$,tt){const gt=s.convert(z.format,z.colorSpace),at=s.convert(z.type),ut=E(z.internalFormat,gt,at,z.colorSpace);if(!n.get(y).__hasExternalTextures){const Pt=Math.max(1,y.width>>tt),q=Math.max(1,y.height>>tt);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?e.texImage3D($,tt,ut,Pt,q,y.depth,0,gt,at,null):e.texImage2D($,tt,ut,Pt,q,0,gt,at,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),At(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,et,$,n.get(z).__webglTexture,0,Rt(y)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,et,$,n.get(z).__webglTexture,tt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function mt(R,y,z){if(r.bindRenderbuffer(r.RENDERBUFFER,R),y.depthBuffer&&!y.stencilBuffer){let et=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(z||At(y)){const $=y.depthTexture;$&&$.isDepthTexture&&($.type===Ln?et=r.DEPTH_COMPONENT32F:$.type===hi&&(et=r.DEPTH_COMPONENT24));const tt=Rt(y);At(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,tt,et,y.width,y.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,et,y.width,y.height)}else r.renderbufferStorage(r.RENDERBUFFER,et,y.width,y.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(y.depthBuffer&&y.stencilBuffer){const et=Rt(y);z&&At(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,et,r.DEPTH24_STENCIL8,y.width,y.height):At(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,et,r.DEPTH24_STENCIL8,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const et=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let $=0;$<et.length;$++){const tt=et[$],gt=s.convert(tt.format,tt.colorSpace),at=s.convert(tt.type),ut=E(tt.internalFormat,gt,at,tt.colorSpace),St=Rt(y);z&&At(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,St,ut,y.width,y.height):At(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,St,ut,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,ut,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function _t(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),F(y.depthTexture,0);const et=n.get(y.depthTexture).__webglTexture,$=Rt(y);if(y.depthTexture.format===ki)At(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,et,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,et,0);else if(y.depthTexture.format===Gr)At(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,et,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Ht(R){const y=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");_t(y.__webglFramebuffer,R)}else if(z){y.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[et]),y.__webglDepthbuffer[et]=r.createRenderbuffer(),mt(y.__webglDepthbuffer[et],R,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=r.createRenderbuffer(),mt(y.__webglDepthbuffer,R,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ct(R,y,z){const et=n.get(R);y!==void 0&&Mt(et.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Ht(R)}function N(R){const y=R.texture,z=n.get(R),et=n.get(y);R.addEventListener("dispose",I),R.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture()),et.__version=y.version,a.memory.textures++);const $=R.isWebGLCubeRenderTarget===!0,tt=R.isWebGLMultipleRenderTargets===!0,gt=d(R)||o;if($){z.__webglFramebuffer=[];for(let at=0;at<6;at++)if(o&&y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[at]=[];for(let ut=0;ut<y.mipmaps.length;ut++)z.__webglFramebuffer[at][ut]=r.createFramebuffer()}else z.__webglFramebuffer[at]=r.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let at=0;at<y.mipmaps.length;at++)z.__webglFramebuffer[at]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(tt)if(i.drawBuffers){const at=R.texture;for(let ut=0,St=at.length;ut<St;ut++){const Pt=n.get(at[ut]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&At(R)===!1){const at=tt?y:[y];z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ut=0;ut<at.length;ut++){const St=at[ut];z.__webglColorRenderbuffer[ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[ut]);const Pt=s.convert(St.format,St.colorSpace),q=s.convert(St.type),qt=E(St.internalFormat,Pt,q,St.colorSpace,R.isXRRenderTarget===!0),Gt=Rt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Gt,qt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,z.__webglColorRenderbuffer[ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),mt(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){e.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture),vt(r.TEXTURE_CUBE_MAP,y,gt);for(let at=0;at<6;at++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let ut=0;ut<y.mipmaps.length;ut++)Mt(z.__webglFramebuffer[at][ut],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,ut);else Mt(z.__webglFramebuffer[at],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);M(y,gt)&&v(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){const at=R.texture;for(let ut=0,St=at.length;ut<St;ut++){const Pt=at[ut],q=n.get(Pt);e.bindTexture(r.TEXTURE_2D,q.__webglTexture),vt(r.TEXTURE_2D,Pt,gt),Mt(z.__webglFramebuffer,R,Pt,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,0),M(Pt,gt)&&v(r.TEXTURE_2D)}e.unbindTexture()}else{let at=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?at=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(at,et.__webglTexture),vt(at,y,gt),o&&y.mipmaps&&y.mipmaps.length>0)for(let ut=0;ut<y.mipmaps.length;ut++)Mt(z.__webglFramebuffer[ut],R,y,r.COLOR_ATTACHMENT0,at,ut);else Mt(z.__webglFramebuffer,R,y,r.COLOR_ATTACHMENT0,at,0);M(y,gt)&&v(at),e.unbindTexture()}R.depthBuffer&&Ht(R)}function re(R){const y=d(R)||o,z=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let et=0,$=z.length;et<$;et++){const tt=z[et];if(M(tt,y)){const gt=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,at=n.get(tt).__webglTexture;e.bindTexture(gt,at),v(gt),e.unbindTexture()}}}function yt(R){if(o&&R.samples>0&&At(R)===!1){const y=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],z=R.width,et=R.height;let $=r.COLOR_BUFFER_BIT;const tt=[],gt=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=n.get(R),ut=R.isWebGLMultipleRenderTargets===!0;if(ut)for(let St=0;St<y.length;St++)e.bindFramebuffer(r.FRAMEBUFFER,at.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,at.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let St=0;St<y.length;St++){tt.push(r.COLOR_ATTACHMENT0+St),R.depthBuffer&&tt.push(gt);const Pt=at.__ignoreDepthValues!==void 0?at.__ignoreDepthValues:!1;if(Pt===!1&&(R.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),ut&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,at.__webglColorRenderbuffer[St]),Pt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[gt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[gt])),ut){const q=n.get(y[St]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,q,0)}r.blitFramebuffer(0,0,z,et,0,0,z,et,$,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ut)for(let St=0;St<y.length;St++){e.bindFramebuffer(r.FRAMEBUFFER,at.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.RENDERBUFFER,at.__webglColorRenderbuffer[St]);const Pt=n.get(y[St]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,at.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.TEXTURE_2D,Pt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}}function Rt(R){return Math.min(i.maxSamples,R.samples)}function At(R){const y=n.get(R);return o&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Jt(R){const y=a.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function Dt(R,y){const z=R.colorSpace,et=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===jo||z!==Kn&&z!==gn&&(jt.getTransfer(z)===ee?o===!1?t.has("EXT_sRGB")===!0&&et===mn?(R.format=jo,R.minFilter=Xe,R.generateMipmaps=!1):y=af.sRGBToLinear(y):(et!==mn||$!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}this.allocateTextureUnit=U,this.resetTextureUnits=Q,this.setTexture2D=F,this.setTexture2DArray=X,this.setTexture3D=Y,this.setTextureCube=Z,this.rebindTextures=Ct,this.setupRenderTarget=N,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=At}function fA(r,t,e){const n=e.isWebGL2;function i(s,a=gn){let o;const l=jt.getTransfer(a);if(s===gi)return r.UNSIGNED_BYTE;if(s===Ju)return r.UNSIGNED_SHORT_4_4_4_4;if(s===ju)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Up)return r.BYTE;if(s===Np)return r.SHORT;if(s===Al)return r.UNSIGNED_SHORT;if(s===qu)return r.INT;if(s===hi)return r.UNSIGNED_INT;if(s===Ln)return r.FLOAT;if(s===Ms)return n?r.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Op)return r.ALPHA;if(s===mn)return r.RGBA;if(s===Fp)return r.LUMINANCE;if(s===Bp)return r.LUMINANCE_ALPHA;if(s===ki)return r.DEPTH_COMPONENT;if(s===Gr)return r.DEPTH_STENCIL;if(s===jo)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===zp)return r.RED;if(s===Ku)return r.RED_INTEGER;if(s===Gp)return r.RG;if(s===$u)return r.RG_INTEGER;if(s===tf)return r.RGBA_INTEGER;if(s===Ya||s===Xa||s===Za||s===Qa)if(l===ee)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ya)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Za)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ya)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Za)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ec||s===nc||s===ic||s===rc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===ec)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===nc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ic)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===rc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ef)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===sc||s===ac)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===sc)return l===ee?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ac)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===oc||s===lc||s===cc||s===hc||s===uc||s===fc||s===dc||s===pc||s===mc||s===gc||s===_c||s===vc||s===Ac||s===Mc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===oc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===lc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===cc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===hc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===uc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===dc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===pc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===mc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===gc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_c)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===vc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ac)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Mc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===qa||s===xc||s===yc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===qa)return l===ee?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===xc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===kp||s===Sc||s===Ec||s===Tc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===qa)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Sc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ec)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Tc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Gi?n?r.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class dA extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ui extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pA={type:"move"};class Ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const d=e.getJointPose(g,n),m=this._getHandJoint(c,g);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pA)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ui;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const mA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _A{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new ze,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,i=new Fn({extensions:{fragDepth:!0},vertexShader:mA,fragmentShader:gA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new le(new cn(20,20),i)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class vA extends Zi{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,_=null;const g=new _A,d=e.getContextAttributes();let m=null,M=null;const v=[],E=[],T=new st;let S=null;const x=new pn;x.layers.enable(1),x.viewport=new be;const I=new pn;I.layers.enable(2),I.viewport=new be;const L=[x,I],A=new dA;A.layers.enable(1),A.layers.enable(2);let w=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=v[G];return J===void 0&&(J=new Ao,v[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=v[G];return J===void 0&&(J=new Ao,v[G]=J),J.getGripSpace()},this.getHand=function(G){let J=v[G];return J===void 0&&(J=new Ao,v[G]=J),J.getHandSpace()};function Q(G){const J=E.indexOf(G.inputSource);if(J===-1)return;const ct=v[J];ct!==void 0&&(ct.update(G.inputSource,G.frame,c||a),ct.dispatchEvent({type:G.type,data:G.inputSource}))}function U(){i.removeEventListener("select",Q),i.removeEventListener("selectstart",Q),i.removeEventListener("selectend",Q),i.removeEventListener("squeeze",Q),i.removeEventListener("squeezestart",Q),i.removeEventListener("squeezeend",Q),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",B);for(let G=0;G<v.length;G++){const J=E[G];J!==null&&(E[G]=null,v[G].disconnect(J))}w=null,V=null,g.reset(),t.setRenderTarget(m),p=null,f=null,u=null,i=null,M=null,vt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",Q),i.addEventListener("selectstart",Q),i.addEventListener("selectend",Q),i.addEventListener("squeeze",Q),i.addEventListener("squeezestart",Q),i.addEventListener("squeezeend",Q),i.addEventListener("end",U),i.addEventListener("inputsourceschange",B),d.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(T),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?d.antialias:!0,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Wi(p.framebufferWidth,p.framebufferHeight,{format:mn,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let J=null,ct=null,Mt=null;d.depth&&(Mt=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=d.stencil?Gr:ki,ct=d.stencil?Gi:hi);const mt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:s};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(mt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Wi(f.textureWidth,f.textureHeight,{format:mn,type:gi,depthTexture:new _f(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0});const _t=t.properties.get(M);_t.__ignoreDepthValues=f.ignoreDepthValues}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),vt.setContext(i),vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function B(G){for(let J=0;J<G.removed.length;J++){const ct=G.removed[J],Mt=E.indexOf(ct);Mt>=0&&(E[Mt]=null,v[Mt].disconnect(ct))}for(let J=0;J<G.added.length;J++){const ct=G.added[J];let Mt=E.indexOf(ct);if(Mt===-1){for(let _t=0;_t<v.length;_t++)if(_t>=E.length){E.push(ct),Mt=_t;break}else if(E[_t]===null){E[_t]=ct,Mt=_t;break}if(Mt===-1)break}const mt=v[Mt];mt&&mt.connect(ct)}}const F=new C,X=new C;function Y(G,J,ct){F.setFromMatrixPosition(J.matrixWorld),X.setFromMatrixPosition(ct.matrixWorld);const Mt=F.distanceTo(X),mt=J.projectionMatrix.elements,_t=ct.projectionMatrix.elements,Ht=mt[14]/(mt[10]-1),Ct=mt[14]/(mt[10]+1),N=(mt[9]+1)/mt[5],re=(mt[9]-1)/mt[5],yt=(mt[8]-1)/mt[0],Rt=(_t[8]+1)/_t[0],At=Ht*yt,Jt=Ht*Rt,Dt=Mt/(-yt+Rt),R=Dt*-yt;J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(R),G.translateZ(Dt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const y=Ht+Dt,z=Ct+Dt,et=At-R,$=Jt+(Mt-R),tt=N*Ct/z*y,gt=re*Ct/z*y;G.projectionMatrix.makePerspective(et,$,tt,gt,y,z),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function Z(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;g.texture!==null&&(G.near=g.depthNear,G.far=g.depthFar),A.near=I.near=x.near=G.near,A.far=I.far=x.far=G.far,(w!==A.near||V!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),w=A.near,V=A.far,x.near=w,x.far=V,I.near=w,I.far=V,x.updateProjectionMatrix(),I.updateProjectionMatrix(),G.updateProjectionMatrix());const J=G.parent,ct=A.cameras;Z(A,J);for(let Mt=0;Mt<ct.length;Mt++)Z(ct[Mt],J);ct.length===2?Y(A,x,I):A.projectionMatrix.copy(x.projectionMatrix),j(G,A,J)};function j(G,J,ct){ct===null?G.matrix.copy(J.matrixWorld):(G.matrix.copy(ct.matrixWorld),G.matrix.invert(),G.matrix.multiply(J.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=xs*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return g.texture!==null};let K=null;function ot(G,J){if(h=J.getViewerPose(c||a),_=J,h!==null){const ct=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let Mt=!1;ct.length!==A.cameras.length&&(A.cameras.length=0,Mt=!0);for(let _t=0;_t<ct.length;_t++){const Ht=ct[_t];let Ct=null;if(p!==null)Ct=p.getViewport(Ht);else{const re=u.getViewSubImage(f,Ht);Ct=re.viewport,_t===0&&(t.setRenderTargetTextures(M,re.colorTexture,f.ignoreDepthValues?void 0:re.depthStencilTexture),t.setRenderTarget(M))}let N=L[_t];N===void 0&&(N=new pn,N.layers.enable(_t),N.viewport=new be,L[_t]=N),N.matrix.fromArray(Ht.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(Ht.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),_t===0&&(A.matrix.copy(N.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Mt===!0&&A.cameras.push(N)}const mt=i.enabledFeatures;if(mt&&mt.includes("depth-sensing")){const _t=u.getDepthInformation(ct[0]);_t&&_t.isValid&&_t.texture&&g.init(t,_t,i.renderState)}}for(let ct=0;ct<v.length;ct++){const Mt=E[ct],mt=v[ct];Mt!==null&&mt!==void 0&&mt.update(Mt,J,c||a)}g.render(t,A),K&&K(G,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}const vt=new gf;vt.setAnimationLoop(ot),this.setAnimationLoop=function(G){K=G},this.dispose=function(){}}}function AA(r,t){function e(d,m){d.matrixAutoUpdate===!0&&d.updateMatrix(),m.value.copy(d.matrix)}function n(d,m){m.color.getRGB(d.fogColor.value,df(r)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function i(d,m,M,v,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(d,m):m.isMeshToonMaterial?(s(d,m),u(d,m)):m.isMeshPhongMaterial?(s(d,m),h(d,m)):m.isMeshStandardMaterial?(s(d,m),f(d,m),m.isMeshPhysicalMaterial&&p(d,m,E)):m.isMeshMatcapMaterial?(s(d,m),_(d,m)):m.isMeshDepthMaterial?s(d,m):m.isMeshDistanceMaterial?(s(d,m),g(d,m)):m.isMeshNormalMaterial?s(d,m):m.isLineBasicMaterial?(a(d,m),m.isLineDashedMaterial&&o(d,m)):m.isPointsMaterial?l(d,m,M,v):m.isSpriteMaterial?c(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.bumpMap&&(d.bumpMap.value=m.bumpMap,e(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===je&&(d.bumpScale.value*=-1)),m.normalMap&&(d.normalMap.value=m.normalMap,e(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===je&&d.normalScale.value.negate()),m.displacementMap&&(d.displacementMap.value=m.displacementMap,e(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,d.emissiveMapTransform)),m.specularMap&&(d.specularMap.value=m.specularMap,e(m.specularMap,d.specularMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const M=t.get(m).envMap;if(M&&(d.envMap.value=M,d.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap){d.lightMap.value=m.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=m.lightMapIntensity*v,e(m.lightMap,d.lightMapTransform)}m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,d.aoMapTransform))}function a(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform))}function o(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function l(d,m,M,v){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*M,d.scale.value=v*.5,m.map&&(d.map.value=m.map,e(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function c(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function h(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function u(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function f(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,d.roughnessMapTransform)),t.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function p(d,m,M){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===je&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=M.texture,d.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,m){m.matcap&&(d.matcap.value=m.matcap)}function g(d,m){const M=t.get(m).light;d.referencePosition.value.setFromMatrixPosition(M.matrixWorld),d.nearDistance.value=M.shadow.camera.near,d.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function MA(r,t,e,n){let i={},s={},a=[];const o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,v){const E=v.program;n.uniformBlockBinding(M,E)}function c(M,v){let E=i[M.id];E===void 0&&(_(M),E=h(M),i[M.id]=E,M.addEventListener("dispose",d));const T=v.program;n.updateUBOMapping(M,T);const S=t.render.frame;s[M.id]!==S&&(f(M),s[M.id]=S)}function h(M){const v=u();M.__bindingPointIndex=v;const E=r.createBuffer(),T=M.__size,S=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,T,S),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,E),E}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const v=i[M.id],E=M.uniforms,T=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let S=0,x=E.length;S<x;S++){const I=Array.isArray(E[S])?E[S]:[E[S]];for(let L=0,A=I.length;L<A;L++){const w=I[L];if(p(w,S,L,T)===!0){const V=w.__offset,Q=Array.isArray(w.value)?w.value:[w.value];let U=0;for(let B=0;B<Q.length;B++){const F=Q[B],X=g(F);typeof F=="number"||typeof F=="boolean"?(w.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,V+U,w.__data)):F.isMatrix3?(w.__data[0]=F.elements[0],w.__data[1]=F.elements[1],w.__data[2]=F.elements[2],w.__data[3]=0,w.__data[4]=F.elements[3],w.__data[5]=F.elements[4],w.__data[6]=F.elements[5],w.__data[7]=0,w.__data[8]=F.elements[6],w.__data[9]=F.elements[7],w.__data[10]=F.elements[8],w.__data[11]=0):(F.toArray(w.__data,U),U+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,V,w.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(M,v,E,T){const S=M.value,x=v+"_"+E;if(T[x]===void 0)return typeof S=="number"||typeof S=="boolean"?T[x]=S:T[x]=S.clone(),!0;{const I=T[x];if(typeof S=="number"||typeof S=="boolean"){if(I!==S)return T[x]=S,!0}else if(I.equals(S)===!1)return I.copy(S),!0}return!1}function _(M){const v=M.uniforms;let E=0;const T=16;for(let x=0,I=v.length;x<I;x++){const L=Array.isArray(v[x])?v[x]:[v[x]];for(let A=0,w=L.length;A<w;A++){const V=L[A],Q=Array.isArray(V.value)?V.value:[V.value];for(let U=0,B=Q.length;U<B;U++){const F=Q[U],X=g(F),Y=E%T;Y!==0&&T-Y<X.boundary&&(E+=T-Y),V.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=E,E+=X.storage}}}const S=E%T;return S>0&&(E+=T-S),M.__size=E,M.__cache={},this}function g(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function d(M){const v=M.target;v.removeEventListener("dispose",d);const E=a.indexOf(v.__bindingPointIndex);a.splice(E,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const M in i)r.deleteBuffer(i[M]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Tf{constructor(t={}){const{canvas:e=pm(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,d=null;const m=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ee,this._useLegacyLights=!1,this.toneMapping=mi,this.toneMappingExposure=1;const v=this;let E=!1,T=0,S=0,x=null,I=-1,L=null;const A=new be,w=new be;let V=null;const Q=new pt(0);let U=0,B=e.width,F=e.height,X=1,Y=null,Z=null;const j=new be(0,0,B,F),K=new be(0,0,B,F);let ot=!1;const vt=new mf;let G=!1,J=!1,ct=null;const Mt=new ne,mt=new st,_t=new C,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ct(){return x===null?X:1}let N=n;function re(b,O){for(let H=0;H<b.length;H++){const W=b[H],k=e.getContext(W,O);if(k!==null)return k}return null}try{const b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vl}`),e.addEventListener("webglcontextlost",bt,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",it,!1),N===null){const O=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&O.shift(),N=re(O,b),N===null)throw re(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let yt,Rt,At,Jt,Dt,R,y,z,et,$,tt,gt,at,ut,St,Pt,q,qt,Gt,It,Tt,ft,Ft,D;function rt(){yt=new C0(N),Rt=new y0(N,yt,t),yt.init(Rt),ft=new fA(N,yt,Rt),At=new hA(N,yt,Rt),Jt=new D0(N),Dt=new Kv,R=new uA(N,yt,At,Dt,Rt,ft,Jt),y=new E0(v),z=new R0(v),et=new zm(N,Rt),Ft=new M0(N,yt,et,Rt),$=new P0(N,et,Jt,Ft),tt=new O0(N,$,et,Jt),Gt=new N0(N,Rt,R),Pt=new S0(Dt),gt=new jv(v,y,z,yt,Rt,Ft,Pt),at=new AA(v,Dt),ut=new tA,St=new aA(yt,Rt),qt=new A0(v,y,z,At,tt,f,l),q=new cA(v,tt,Rt),D=new MA(N,Jt,Rt,At),It=new x0(N,yt,Jt,Rt),Tt=new L0(N,yt,Jt,Rt),Jt.programs=gt.programs,v.capabilities=Rt,v.extensions=yt,v.properties=Dt,v.renderLists=ut,v.shadowMap=q,v.state=At,v.info=Jt}rt();const ht=new vA(v,N);this.xr=ht,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const b=yt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=yt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(B,F,!1))},this.getSize=function(b){return b.set(B,F)},this.setSize=function(b,O,H=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=b,F=O,e.width=Math.floor(b*X),e.height=Math.floor(O*X),H===!0&&(e.style.width=b+"px",e.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(B*X,F*X).floor()},this.setDrawingBufferSize=function(b,O,H){B=b,F=O,X=H,e.width=Math.floor(b*H),e.height=Math.floor(O*H),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(j)},this.setViewport=function(b,O,H,W){b.isVector4?j.set(b.x,b.y,b.z,b.w):j.set(b,O,H,W),At.viewport(A.copy(j).multiplyScalar(X).floor())},this.getScissor=function(b){return b.copy(K)},this.setScissor=function(b,O,H,W){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,O,H,W),At.scissor(w.copy(K).multiplyScalar(X).floor())},this.getScissorTest=function(){return ot},this.setScissorTest=function(b){At.setScissorTest(ot=b)},this.setOpaqueSort=function(b){Y=b},this.setTransparentSort=function(b){Z=b},this.getClearColor=function(b){return b.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(b=!0,O=!0,H=!0){let W=0;if(b){let k=!1;if(x!==null){const dt=x.texture.format;k=dt===tf||dt===$u||dt===Ku}if(k){const dt=x.texture.type,Et=dt===gi||dt===hi||dt===Al||dt===Gi||dt===Ju||dt===ju,Lt=qt.getClearColor(),Ut=qt.getClearAlpha(),kt=Lt.r,Ot=Lt.g,Bt=Lt.b;Et?(p[0]=kt,p[1]=Ot,p[2]=Bt,p[3]=Ut,N.clearBufferuiv(N.COLOR,0,p)):(_[0]=kt,_[1]=Ot,_[2]=Bt,_[3]=Ut,N.clearBufferiv(N.COLOR,0,_))}else W|=N.COLOR_BUFFER_BIT}O&&(W|=N.DEPTH_BUFFER_BIT),H&&(W|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",bt,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",it,!1),ut.dispose(),St.dispose(),Dt.dispose(),y.dispose(),z.dispose(),tt.dispose(),Ft.dispose(),D.dispose(),gt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Re),ht.removeEventListener("sessionend",Qt),ct&&(ct.dispose(),ct=null),ue.stop()};function bt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const b=Jt.autoReset,O=q.enabled,H=q.autoUpdate,W=q.needsUpdate,k=q.type;rt(),Jt.autoReset=b,q.enabled=O,q.autoUpdate=H,q.needsUpdate=W,q.type=k}function it(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function nt(b){const O=b.target;O.removeEventListener("dispose",nt),xt(O)}function xt(b){wt(b),Dt.remove(b)}function wt(b){const O=Dt.get(b).programs;O!==void 0&&(O.forEach(function(H){gt.releaseProgram(H)}),b.isShaderMaterial&&gt.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,H,W,k,dt){O===null&&(O=Ht);const Et=k.isMesh&&k.matrixWorld.determinant()<0,Lt=Of(b,O,H,W,k);At.setMaterial(W,Et);let Ut=H.index,kt=1;if(W.wireframe===!0){if(Ut=$.getWireframeAttribute(H),Ut===void 0)return;kt=2}const Ot=H.drawRange,Bt=H.attributes.position;let fe=Ot.start*kt,$e=(Ot.start+Ot.count)*kt;dt!==null&&(fe=Math.max(fe,dt.start*kt),$e=Math.min($e,(dt.start+dt.count)*kt)),Ut!==null?(fe=Math.max(fe,0),$e=Math.min($e,Ut.count)):Bt!=null&&(fe=Math.max(fe,0),$e=Math.min($e,Bt.count));const xe=$e-fe;if(xe<0||xe===1/0)return;Ft.setup(k,W,Lt,H,Ut);let zn,se=It;if(Ut!==null&&(zn=et.get(Ut),se=Tt,se.setIndex(zn)),k.isMesh)W.wireframe===!0?(At.setLineWidth(W.wireframeLinewidth*Ct()),se.setMode(N.LINES)):se.setMode(N.TRIANGLES);else if(k.isLine){let Wt=W.linewidth;Wt===void 0&&(Wt=1),At.setLineWidth(Wt*Ct()),k.isLineSegments?se.setMode(N.LINES):k.isLineLoop?se.setMode(N.LINE_LOOP):se.setMode(N.LINE_STRIP)}else k.isPoints?se.setMode(N.POINTS):k.isSprite&&se.setMode(N.TRIANGLES);if(k.isBatchedMesh)se.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)se.renderInstances(fe,xe,k.count);else if(H.isInstancedBufferGeometry){const Wt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,La=Math.min(H.instanceCount,Wt);se.renderInstances(fe,xe,La)}else se.render(fe,xe)};function Zt(b,O,H){b.transparent===!0&&b.side===sn&&b.forceSinglePass===!1?(b.side=je,b.needsUpdate=!0,Ts(b,O,H),b.side=Ai,b.needsUpdate=!0,Ts(b,O,H),b.side=sn):Ts(b,O,H)}this.compile=function(b,O,H=null){H===null&&(H=b),d=St.get(H),d.init(),M.push(d),H.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),b!==H&&b.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights(v._useLegacyLights);const W=new Set;return b.traverse(function(k){const dt=k.material;if(dt)if(Array.isArray(dt))for(let Et=0;Et<dt.length;Et++){const Lt=dt[Et];Zt(Lt,H,k),W.add(Lt)}else Zt(dt,H,k),W.add(dt)}),M.pop(),d=null,W},this.compileAsync=function(b,O,H=null){const W=this.compile(b,O,H);return new Promise(k=>{function dt(){if(W.forEach(function(Et){Dt.get(Et).currentProgram.isReady()&&W.delete(Et)}),W.size===0){k(b);return}setTimeout(dt,10)}yt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Yt=null;function Kt(b){Yt&&Yt(b)}function Re(){ue.stop()}function Qt(){ue.start()}const ue=new gf;ue.setAnimationLoop(Kt),typeof self<"u"&&ue.setContext(self),this.setAnimationLoop=function(b){Yt=b,ht.setAnimationLoop(b),b===null?ue.stop():ue.start()},ht.addEventListener("sessionstart",Re),ht.addEventListener("sessionend",Qt),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(O),O=ht.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,O,x),d=St.get(b,M.length),d.init(),M.push(d),Mt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),vt.setFromProjectionMatrix(Mt),J=this.localClippingEnabled,G=Pt.init(this.clippingPlanes,J),g=ut.get(b,m.length),g.init(),m.push(g),Ge(b,O,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(Y,Z),this.info.render.frame++,G===!0&&Pt.beginShadows();const H=d.state.shadowsArray;if(q.render(H,b,O),G===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1)&&qt.render(g,b),d.setupLights(v._useLegacyLights),O.isArrayCamera){const W=O.cameras;for(let k=0,dt=W.length;k<dt;k++){const Et=W[k];bl(g,b,Et,Et.viewport)}}else bl(g,b,O);x!==null&&(R.updateMultisampleRenderTarget(x),R.updateRenderTargetMipmap(x)),b.isScene===!0&&b.onAfterRender(v,b,O),Ft.resetDefaultState(),I=-1,L=null,M.pop(),M.length>0?d=M[M.length-1]:d=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Ge(b,O,H,W){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||vt.intersectsSprite(b)){W&&_t.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Mt);const Et=tt.update(b),Lt=b.material;Lt.visible&&g.push(b,Et,Lt,H,_t.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||vt.intersectsObject(b))){const Et=tt.update(b),Lt=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),_t.copy(b.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),_t.copy(Et.boundingSphere.center)),_t.applyMatrix4(b.matrixWorld).applyMatrix4(Mt)),Array.isArray(Lt)){const Ut=Et.groups;for(let kt=0,Ot=Ut.length;kt<Ot;kt++){const Bt=Ut[kt],fe=Lt[Bt.materialIndex];fe&&fe.visible&&g.push(b,Et,fe,H,_t.z,Bt)}}else Lt.visible&&g.push(b,Et,Lt,H,_t.z,null)}}const dt=b.children;for(let Et=0,Lt=dt.length;Et<Lt;Et++)Ge(dt[Et],O,H,W)}function bl(b,O,H,W){const k=b.opaque,dt=b.transmissive,Et=b.transparent;d.setupLightsView(H),G===!0&&Pt.setGlobalState(v.clippingPlanes,H),dt.length>0&&Nf(k,dt,O,H),W&&At.viewport(A.copy(W)),k.length>0&&Es(k,O,H),dt.length>0&&Es(dt,O,H),Et.length>0&&Es(Et,O,H),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Nf(b,O,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const dt=Rt.isWebGL2;ct===null&&(ct=new Wi(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")?Ms:gi,minFilter:Ni,samples:dt?4:0})),v.getDrawingBufferSize(mt),dt?ct.setSize(mt.x,mt.y):ct.setSize(xa(mt.x),xa(mt.y));const Et=v.getRenderTarget();v.setRenderTarget(ct),v.getClearColor(Q),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),v.clear();const Lt=v.toneMapping;v.toneMapping=mi,Es(b,H,W),R.updateMultisampleRenderTarget(ct),R.updateRenderTargetMipmap(ct);let Ut=!1;for(let kt=0,Ot=O.length;kt<Ot;kt++){const Bt=O[kt],fe=Bt.object,$e=Bt.geometry,xe=Bt.material,zn=Bt.group;if(xe.side===sn&&fe.layers.test(W.layers)){const se=xe.side;xe.side=je,xe.needsUpdate=!0,wl(fe,H,W,$e,xe,zn),xe.side=se,xe.needsUpdate=!0,Ut=!0}}Ut===!0&&(R.updateMultisampleRenderTarget(ct),R.updateRenderTargetMipmap(ct)),v.setRenderTarget(Et),v.setClearColor(Q,U),v.toneMapping=Lt}function Es(b,O,H){const W=O.isScene===!0?O.overrideMaterial:null;for(let k=0,dt=b.length;k<dt;k++){const Et=b[k],Lt=Et.object,Ut=Et.geometry,kt=W===null?Et.material:W,Ot=Et.group;Lt.layers.test(H.layers)&&wl(Lt,O,H,Ut,kt,Ot)}}function wl(b,O,H,W,k,dt){b.onBeforeRender(v,O,H,W,k,dt),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(v,O,H,W,b,dt),k.transparent===!0&&k.side===sn&&k.forceSinglePass===!1?(k.side=je,k.needsUpdate=!0,v.renderBufferDirect(H,O,W,k,b,dt),k.side=Ai,k.needsUpdate=!0,v.renderBufferDirect(H,O,W,k,b,dt),k.side=sn):v.renderBufferDirect(H,O,W,k,b,dt),b.onAfterRender(v,O,H,W,k,dt)}function Ts(b,O,H){O.isScene!==!0&&(O=Ht);const W=Dt.get(b),k=d.state.lights,dt=d.state.shadowsArray,Et=k.state.version,Lt=gt.getParameters(b,k.state,dt,O,H),Ut=gt.getProgramCacheKey(Lt);let kt=W.programs;W.environment=b.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(b.isMeshStandardMaterial?z:y).get(b.envMap||W.environment),kt===void 0&&(b.addEventListener("dispose",nt),kt=new Map,W.programs=kt);let Ot=kt.get(Ut);if(Ot!==void 0){if(W.currentProgram===Ot&&W.lightsStateVersion===Et)return Cl(b,Lt),Ot}else Lt.uniforms=gt.getUniforms(b),b.onBuild(H,Lt,v),b.onBeforeCompile(Lt,v),Ot=gt.acquireProgram(Lt,Ut),kt.set(Ut,Ot),W.uniforms=Lt.uniforms;const Bt=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Bt.clippingPlanes=Pt.uniform),Cl(b,Lt),W.needsLights=Bf(b),W.lightsStateVersion=Et,W.needsLights&&(Bt.ambientLightColor.value=k.state.ambient,Bt.lightProbe.value=k.state.probe,Bt.directionalLights.value=k.state.directional,Bt.directionalLightShadows.value=k.state.directionalShadow,Bt.spotLights.value=k.state.spot,Bt.spotLightShadows.value=k.state.spotShadow,Bt.rectAreaLights.value=k.state.rectArea,Bt.ltc_1.value=k.state.rectAreaLTC1,Bt.ltc_2.value=k.state.rectAreaLTC2,Bt.pointLights.value=k.state.point,Bt.pointLightShadows.value=k.state.pointShadow,Bt.hemisphereLights.value=k.state.hemi,Bt.directionalShadowMap.value=k.state.directionalShadowMap,Bt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Bt.spotShadowMap.value=k.state.spotShadowMap,Bt.spotLightMatrix.value=k.state.spotLightMatrix,Bt.spotLightMap.value=k.state.spotLightMap,Bt.pointShadowMap.value=k.state.pointShadowMap,Bt.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Ot,W.uniformsList=null,Ot}function Rl(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=oa.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Cl(b,O){const H=Dt.get(b);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function Of(b,O,H,W,k){O.isScene!==!0&&(O=Ht),R.resetTextureUnits();const dt=O.fog,Et=W.isMeshStandardMaterial?O.environment:null,Lt=x===null?v.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:Kn,Ut=(W.isMeshStandardMaterial?z:y).get(W.envMap||Et),kt=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ot=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Bt=!!H.morphAttributes.position,fe=!!H.morphAttributes.normal,$e=!!H.morphAttributes.color;let xe=mi;W.toneMapped&&(x===null||x.isXRRenderTarget===!0)&&(xe=v.toneMapping);const zn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,se=zn!==void 0?zn.length:0,Wt=Dt.get(W),La=d.state.lights;if(G===!0&&(J===!0||b!==L)){const hn=b===L&&W.id===I;Pt.setState(W,b,hn)}let ce=!1;W.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==La.state.version||Wt.outputColorSpace!==Lt||k.isBatchedMesh&&Wt.batching===!1||!k.isBatchedMesh&&Wt.batching===!0||k.isInstancedMesh&&Wt.instancing===!1||!k.isInstancedMesh&&Wt.instancing===!0||k.isSkinnedMesh&&Wt.skinning===!1||!k.isSkinnedMesh&&Wt.skinning===!0||k.isInstancedMesh&&Wt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Wt.instancingColor===!1&&k.instanceColor!==null||Wt.envMap!==Ut||W.fog===!0&&Wt.fog!==dt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Pt.numPlanes||Wt.numIntersection!==Pt.numIntersection)||Wt.vertexAlphas!==kt||Wt.vertexTangents!==Ot||Wt.morphTargets!==Bt||Wt.morphNormals!==fe||Wt.morphColors!==$e||Wt.toneMapping!==xe||Rt.isWebGL2===!0&&Wt.morphTargetsCount!==se)&&(ce=!0):(ce=!0,Wt.__version=W.version);let xi=Wt.currentProgram;ce===!0&&(xi=Ts(W,O,k));let Pl=!1,Yr=!1,Da=!1;const De=xi.getUniforms(),yi=Wt.uniforms;if(At.useProgram(xi.program)&&(Pl=!0,Yr=!0,Da=!0),W.id!==I&&(I=W.id,Yr=!0),Pl||L!==b){De.setValue(N,"projectionMatrix",b.projectionMatrix),De.setValue(N,"viewMatrix",b.matrixWorldInverse);const hn=De.map.cameraPosition;hn!==void 0&&hn.setValue(N,_t.setFromMatrixPosition(b.matrixWorld)),Rt.logarithmicDepthBuffer&&De.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&De.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),L!==b&&(L=b,Yr=!0,Da=!0)}if(k.isSkinnedMesh){De.setOptional(N,k,"bindMatrix"),De.setOptional(N,k,"bindMatrixInverse");const hn=k.skeleton;hn&&(Rt.floatVertexTextures?(hn.boneTexture===null&&hn.computeBoneTexture(),De.setValue(N,"boneTexture",hn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(De.setOptional(N,k,"batchingTexture"),De.setValue(N,"batchingTexture",k._matricesTexture,R));const Ia=H.morphAttributes;if((Ia.position!==void 0||Ia.normal!==void 0||Ia.color!==void 0&&Rt.isWebGL2===!0)&&Gt.update(k,H,xi),(Yr||Wt.receiveShadow!==k.receiveShadow)&&(Wt.receiveShadow=k.receiveShadow,De.setValue(N,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(yi.envMap.value=Ut,yi.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),Yr&&(De.setValue(N,"toneMappingExposure",v.toneMappingExposure),Wt.needsLights&&Ff(yi,Da),dt&&W.fog===!0&&at.refreshFogUniforms(yi,dt),at.refreshMaterialUniforms(yi,W,X,F,ct),oa.upload(N,Rl(Wt),yi,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(oa.upload(N,Rl(Wt),yi,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&De.setValue(N,"center",k.center),De.setValue(N,"modelViewMatrix",k.modelViewMatrix),De.setValue(N,"normalMatrix",k.normalMatrix),De.setValue(N,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const hn=W.uniformsGroups;for(let Ua=0,zf=hn.length;Ua<zf;Ua++)if(Rt.isWebGL2){const Ll=hn[Ua];D.update(Ll,xi),D.bind(Ll,xi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xi}function Ff(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Bf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(b,O,H){Dt.get(b.texture).__webglTexture=O,Dt.get(b.depthTexture).__webglTexture=H;const W=Dt.get(b);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,O){const H=Dt.get(b);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,H=0){x=b,T=O,S=H;let W=!0,k=null,dt=!1,Et=!1;if(b){const Ut=Dt.get(b);Ut.__useDefaultFramebuffer!==void 0?(At.bindFramebuffer(N.FRAMEBUFFER,null),W=!1):Ut.__webglFramebuffer===void 0?R.setupRenderTarget(b):Ut.__hasExternalTextures&&R.rebindTextures(b,Dt.get(b.texture).__webglTexture,Dt.get(b.depthTexture).__webglTexture);const kt=b.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Et=!0);const Ot=Dt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ot[O])?k=Ot[O][H]:k=Ot[O],dt=!0):Rt.isWebGL2&&b.samples>0&&R.useMultisampledRTT(b)===!1?k=Dt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ot)?k=Ot[H]:k=Ot,A.copy(b.viewport),w.copy(b.scissor),V=b.scissorTest}else A.copy(j).multiplyScalar(X).floor(),w.copy(K).multiplyScalar(X).floor(),V=ot;if(At.bindFramebuffer(N.FRAMEBUFFER,k)&&Rt.drawBuffers&&W&&At.drawBuffers(b,k),At.viewport(A),At.scissor(w),At.setScissorTest(V),dt){const Ut=Dt.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ut.__webglTexture,H)}else if(Et){const Ut=Dt.get(b.texture),kt=O||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ut.__webglTexture,H||0,kt)}I=-1},this.readRenderTargetPixels=function(b,O,H,W,k,dt,Et){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Dt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Et!==void 0&&(Lt=Lt[Et]),Lt){At.bindFramebuffer(N.FRAMEBUFFER,Lt);try{const Ut=b.texture,kt=Ut.format,Ot=Ut.type;if(kt!==mn&&ft.convert(kt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Bt=Ot===Ms&&(yt.has("EXT_color_buffer_half_float")||Rt.isWebGL2&&yt.has("EXT_color_buffer_float"));if(Ot!==gi&&ft.convert(Ot)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ot===Ln&&(Rt.isWebGL2||yt.has("OES_texture_float")||yt.has("WEBGL_color_buffer_float")))&&!Bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-W&&H>=0&&H<=b.height-k&&N.readPixels(O,H,W,k,ft.convert(kt),ft.convert(Ot),dt)}finally{const Ut=x!==null?Dt.get(x).__webglFramebuffer:null;At.bindFramebuffer(N.FRAMEBUFFER,Ut)}}},this.copyFramebufferToTexture=function(b,O,H=0){const W=Math.pow(2,-H),k=Math.floor(O.image.width*W),dt=Math.floor(O.image.height*W);R.setTexture2D(O,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,b.x,b.y,k,dt),At.unbindTexture()},this.copyTextureToTexture=function(b,O,H,W=0){const k=O.image.width,dt=O.image.height,Et=ft.convert(H.format),Lt=ft.convert(H.type);R.setTexture2D(H,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment),O.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,W,b.x,b.y,k,dt,Et,Lt,O.image.data):O.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,W,b.x,b.y,O.mipmaps[0].width,O.mipmaps[0].height,Et,O.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,W,b.x,b.y,Et,Lt,O.image),W===0&&H.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),At.unbindTexture()},this.copyTextureToTexture3D=function(b,O,H,W,k=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const dt=b.max.x-b.min.x+1,Et=b.max.y-b.min.y+1,Lt=b.max.z-b.min.z+1,Ut=ft.convert(W.format),kt=ft.convert(W.type);let Ot;if(W.isData3DTexture)R.setTexture3D(W,0),Ot=N.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)R.setTexture2DArray(W,0),Ot=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,W.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,W.unpackAlignment);const Bt=N.getParameter(N.UNPACK_ROW_LENGTH),fe=N.getParameter(N.UNPACK_IMAGE_HEIGHT),$e=N.getParameter(N.UNPACK_SKIP_PIXELS),xe=N.getParameter(N.UNPACK_SKIP_ROWS),zn=N.getParameter(N.UNPACK_SKIP_IMAGES),se=H.isCompressedTexture?H.mipmaps[k]:H.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,se.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,se.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,b.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,b.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,b.min.z),H.isDataTexture||H.isData3DTexture?N.texSubImage3D(Ot,k,O.x,O.y,O.z,dt,Et,Lt,Ut,kt,se.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Ot,k,O.x,O.y,O.z,dt,Et,Lt,Ut,se.data)):N.texSubImage3D(Ot,k,O.x,O.y,O.z,dt,Et,Lt,Ut,kt,se),N.pixelStorei(N.UNPACK_ROW_LENGTH,Bt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,fe),N.pixelStorei(N.UNPACK_SKIP_PIXELS,$e),N.pixelStorei(N.UNPACK_SKIP_ROWS,xe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,zn),k===0&&W.generateMipmaps&&N.generateMipmap(Ot),At.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),At.unbindTexture()},this.resetState=function(){T=0,S=0,x=null,At.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ml?"display-p3":"srgb",e.unpackColorSpace=jt.workingColorSpace===Ra?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ee?Oe:nf}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Oe?Ee:Kn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class xA extends Tf{}xA.prototype.isWebGL1Renderer=!0;class yA extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class SA extends Le{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}class EA extends ze{constructor(t=null,e=1,n=1,i,s,a,o,l,c=Nt,h=Nt,u,f){super(null,a,o,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gh extends Tn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const _r=new ne,_h=new ne,Qs=[],vh=new Qi,TA=new ne,Kr=new le,$r=new qi;class bf extends le{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new gh(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,TA)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Qi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_r),vh.copy(t.boundingBox).applyMatrix4(_r),this.boundingBox.union(vh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_r),$r.copy(t.boundingSphere).applyMatrix4(_r),this.boundingSphere.union($r)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Kr.geometry=this.geometry,Kr.material=this.material,Kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$r.copy(this.boundingSphere),$r.applyMatrix4(n),t.ray.intersectsSphere($r)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,_r),_h.multiplyMatrices(n,_r),Kr.matrixWorld=_h,Kr.raycast(t,Qs);for(let a=0,o=Qs.length;a<o;a++){const l=Qs[a];l.instanceId=s,l.object=this,e.push(l)}Qs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new gh(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Lr extends Le{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ah=new C,Mh=new C,xh=new ne,Mo=new Ca,qs=new qi;class bA extends _e{constructor(t=new bn,e=new Lr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Ah.fromBufferAttribute(e,i-1),Mh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ah.distanceTo(Mh);t.setAttribute("lineDistance",new He(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(i),qs.radius+=s,t.ray.intersectsSphere(qs)===!1)return;xh.copy(i).invert(),Mo.copy(t.ray).applyMatrix4(xh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new C,h=new C,u=new C,f=new C,p=this.isLineSegments?2:1,_=n.index,d=n.attributes.position;if(_!==null){const m=Math.max(0,a.start),M=Math.min(_.count,a.start+a.count);for(let v=m,E=M-1;v<E;v+=p){const T=_.getX(v),S=_.getX(v+1);if(c.fromBufferAttribute(d,T),h.fromBufferAttribute(d,S),Mo.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const I=t.ray.origin.distanceTo(f);I<t.near||I>t.far||e.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,a.start),M=Math.min(d.count,a.start+a.count);for(let v=m,E=M-1;v<E;v+=p){if(c.fromBufferAttribute(d,v),h.fromBufferAttribute(d,v+1),Mo.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const S=t.ray.origin.distanceTo(f);S<t.near||S>t.far||e.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const yh=new C,Sh=new C;class Eh extends bA{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)yh.fromBufferAttribute(e,i),Sh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+yh.distanceTo(Sh);t.setAttribute("lineDistance",new He(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Er extends Le{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Th=new ne,tl=new Ca,Js=new qi,js=new C;class xo extends _e{constructor(t=new bn,e=new Er){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(i),Js.radius+=s,t.ray.intersectsSphere(Js)===!1)return;Th.copy(i).invert(),tl.copy(t.ray).applyMatrix4(Th);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=f,g=p;_<g;_++){const d=c.getX(_);js.fromBufferAttribute(u,d),bh(js,d,l,i,t,e,this)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=f,g=p;_<g;_++)js.fromBufferAttribute(u,_),bh(js,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function bh(r,t,e,n,i,s,a){const o=tl.distanceSqToPoint(r);if(o<e){const l=new C;tl.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class Bn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const h=n[i],f=n[i+1]-h,p=(a-h)/f;return(i+p)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=e||(a.isVector2?new st:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,i=[],s=[],a=[],o=new C,l=new ne;for(let p=0;p<=t;p++){const _=p/t;i[p]=this.getTangentAt(_,new C)}s[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(ve(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(i[p],s[p])}if(e===!0){let p=Math.acos(ve(s[0].dot(s[t]),-1,1));p/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(p=-p);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],p*_)),a[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class wf extends Bn{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){const n=e||new st,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class wA extends wf{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function El(){let r=0,t=0,e=0,n=0;function i(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let f=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,p*=h,i(a,o,f,p)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+n*o}}}const Ks=new C,yo=new El,So=new El,Eo=new El;class Rf extends Bn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){const n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(Ks.subVectors(i[0],i[1]).add(i[0]),c=Ks);const u=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Ks.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Ks),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(f),p),d=Math.pow(f.distanceToSquared(h),p);g<1e-4&&(g=1),_<1e-4&&(_=g),d<1e-4&&(d=g),yo.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,_,g,d),So.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,_,g,d),Eo.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,_,g,d)}else this.curveType==="catmullrom"&&(yo.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),So.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Eo.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(yo.calc(l),So.calc(l),Eo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function wh(r,t,e,n,i){const s=(n-t)*.5,a=(i-e)*.5,o=r*r,l=r*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*r+e}function RA(r,t){const e=1-r;return e*e*t}function CA(r,t){return 2*(1-r)*r*t}function PA(r,t){return r*r*t}function cs(r,t,e,n){return RA(r,t)+CA(r,e)+PA(r,n)}function LA(r,t){const e=1-r;return e*e*e*t}function DA(r,t){const e=1-r;return 3*e*e*r*t}function IA(r,t){return 3*(1-r)*r*r*t}function UA(r,t){return r*r*r*t}function hs(r,t,e,n,i){return LA(r,t)+DA(r,e)+IA(r,n)+UA(r,i)}class NA extends Bn{constructor(t=new st,e=new st,n=new st,i=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new st){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(hs(t,i.x,s.x,a.x,o.x),hs(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class si extends Bn{constructor(t=new C,e=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(hs(t,i.x,s.x,a.x,o.x),hs(t,i.y,s.y,a.y,o.y),hs(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class OA extends Bn{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class la extends Bn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class FA extends Bn{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(cs(t,i.x,s.x,a.x),cs(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class BA extends Bn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(cs(t,i.x,s.x,a.x),cs(t,i.y,s.y,a.y),cs(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zA extends Bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(wh(o,l.x,c.x,h.x,u.x),wh(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new st().fromArray(i))}return this}}var Rh=Object.freeze({__proto__:null,ArcCurve:wA,CatmullRomCurve3:Rf,CubicBezierCurve:NA,CubicBezierCurve3:si,EllipseCurve:wf,LineCurve:OA,LineCurve3:la,QuadraticBezierCurve:FA,QuadraticBezierCurve3:BA,SplineCurve:zA});class GA extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Rh[i.type]().fromJSON(i))}return this}}class kA extends Le{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new pt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class VA extends Fn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Cf extends Le{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xi,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class HA extends Cf{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new st(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Pf extends Le{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new pt(16777215),this.specular=new pt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xi,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class WA extends Le{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new pt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xi,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class YA extends Le{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xi,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class XA extends Le{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xi,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ZA extends Le{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new pt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xi,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}class QA extends Lr{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const ya={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class qA{constructor(t,e,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const p=c[u],_=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}}const JA=new qA;class ji{constructor(t){this.manager=t!==void 0?t:JA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ji.DEFAULT_MATERIAL_NAME="__DEFAULT";const Yn={};class jA extends Error{constructor(t,e){super(t),this.response=e}}class Lf extends ji{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=ya.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Yn[t]!==void 0){Yn[t].push({onLoad:e,onProgress:n,onError:i});return}Yn[t]=[],Yn[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Yn[t],u=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=f?parseInt(f):0,_=p!==0;let g=0;const d=new ReadableStream({start(m){M();function M(){u.read().then(({done:v,value:E})=>{if(v)m.close();else{g+=E.byteLength;const T=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:p});for(let S=0,x=h.length;S<x;S++){const I=h[S];I.onProgress&&I.onProgress(T)}m.enqueue(E),M()}})}}});return new Response(d)}else throw new jA(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{ya.add(t,c);const h=Yn[t];delete Yn[t];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Yn[t];if(h===void 0)throw this.manager.itemError(t),c;delete Yn[t];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Df extends ji{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=ya.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=ys("img");function l(){h(),ya.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){h(),i&&i(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class KA extends ji{constructor(t){super(t)}load(t,e,n,i){const s=new yl;s.colorSpace=Ee;const a=new Df(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(t[c],function(h){s.images[c]=h,o++,o===6&&(s.needsUpdate=!0,e&&e(s))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return s}}class Ye extends ji{constructor(t){super(t)}load(t,e,n,i){const s=new ze,a=new Df(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Tl extends ji{constructor(t){super(t),this.textures={}}load(t,e,n,i){const s=this,a=new Lf(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(t,function(o){try{e(s.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),s.manager.itemError(t)}},n,i)}parse(t){const e=this.textures;function n(s){return e[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),e[s]}const i=Tl.createMaterialFromType(t.type);if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=t.sheen),t.sheenColor!==void 0&&(i.sheenColor=new pt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(i.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.specularIntensity!==void 0&&(i.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.iridescence!==void 0&&(i.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(i.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(i.transmission=t.transmission),t.thickness!==void 0&&(i.thickness=t.thickness),t.attenuationDistance!==void 0&&(i.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(i.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.shadowSide!==void 0&&(i.shadowSide=t.shadowSide),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(i.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(i.depthFunc=t.depthFunc),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(i.blendSrc=t.blendSrc),t.blendDst!==void 0&&(i.blendDst=t.blendDst),t.blendEquation!==void 0&&(i.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(i.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(i.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==void 0&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(i.dithering=t.dithering),t.alphaToCoverage!==void 0&&(i.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(i.forceSinglePass=t.forceSinglePass),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const s in t.uniforms){const a=t.uniforms[s];switch(i.uniforms[s]={},a.type){case"t":i.uniforms[s].value=n(a.value);break;case"c":i.uniforms[s].value=new pt().setHex(a.value);break;case"v2":i.uniforms[s].value=new st().fromArray(a.value);break;case"v3":i.uniforms[s].value=new C().fromArray(a.value);break;case"v4":i.uniforms[s].value=new be().fromArray(a.value);break;case"m3":i.uniforms[s].value=new Vt().fromArray(a.value);break;case"m4":i.uniforms[s].value=new ne().fromArray(a.value);break;default:i.uniforms[s].value=a.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(i.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)i.extensions[s]=t.extensions[s];if(t.lights!==void 0&&(i.lights=t.lights),t.clipping!==void 0&&(i.clipping=t.clipping),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new st().fromArray(s)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(t.specularIntensityMap)),t.specularColorMap!==void 0&&(i.specularColorMap=n(t.specularColorMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new st().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(i.iridescenceMap=n(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),t.thicknessMap!==void 0&&(i.thicknessMap=n(t.thicknessMap)),t.anisotropyMap!==void 0&&(i.anisotropyMap=n(t.anisotropyMap)),t.sheenColorMap!==void 0&&(i.sheenColorMap=n(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(t.sheenRoughnessMap)),i}setTextures(t){return this.textures=t,this}static createMaterialFromType(t){const e={ShadowMaterial:kA,SpriteMaterial:SA,RawShaderMaterial:VA,ShaderMaterial:Fn,PointsMaterial:Er,MeshPhysicalMaterial:HA,MeshStandardMaterial:Cf,MeshPhongMaterial:Pf,MeshToonMaterial:WA,MeshNormalMaterial:YA,MeshLambertMaterial:XA,MeshDepthMaterial:Sf,MeshDistanceMaterial:Ef,MeshBasicMaterial:Pe,MeshMatcapMaterial:ZA,LineDashedMaterial:QA,LineBasicMaterial:Lr,Material:Le};return new e[t]}}class $A{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ch(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ch();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ch(){return(typeof performance>"u"?Date:performance).now()}class Ph{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ve(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vl);const Lh={type:"change"},To={type:"start"},Dh={type:"end"},$s=new Ca,Ih=new ai,tM=Math.cos(70*dm.DEG2RAD);class eM extends Zi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$i.ROTATE,MIDDLE:$i.DOLLY,RIGHT:$i.PAN},this.touches={ONE:tr.ROTATE,TWO:tr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",St),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",St),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Lh),n.update(),s=i.NONE},this.update=function(){const D=new C,rt=new _n().setFromUnitVectors(t.up,new C(0,1,0)),ht=rt.clone().invert(),bt=new C,P=new _n,it=new C,nt=2*Math.PI;return function(wt=null){const Zt=n.object.position;D.copy(Zt).sub(n.target),D.applyQuaternion(rt),o.setFromVector3(D),n.autoRotate&&s===i.NONE&&V(A(wt)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Yt=n.minAzimuthAngle,Kt=n.maxAzimuthAngle;isFinite(Yt)&&isFinite(Kt)&&(Yt<-Math.PI?Yt+=nt:Yt>Math.PI&&(Yt-=nt),Kt<-Math.PI?Kt+=nt:Kt>Math.PI&&(Kt-=nt),Yt<=Kt?o.theta=Math.max(Yt,Math.min(Kt,o.theta)):o.theta=o.theta>(Yt+Kt)/2?Math.max(Yt,o.theta):Math.min(Kt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&S||n.object.isOrthographicCamera?o.radius=j(o.radius):o.radius=j(o.radius*c),D.setFromSpherical(o),D.applyQuaternion(ht),Zt.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Re=!1;if(n.zoomToCursor&&S){let Qt=null;if(n.object.isPerspectiveCamera){const ue=D.length();Qt=j(ue*c);const Ge=ue-Qt;n.object.position.addScaledVector(E,Ge),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const ue=new C(T.x,T.y,0);ue.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Re=!0;const Ge=new C(T.x,T.y,0);Ge.unproject(n.object),n.object.position.sub(Ge).add(ue),n.object.updateMatrixWorld(),Qt=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Qt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Qt).add(n.object.position):($s.origin.copy(n.object.position),$s.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot($s.direction))<tM?t.lookAt(n.target):(Ih.setFromNormalAndCoplanarPoint(n.object.up,n.target),$s.intersectPlane(Ih,n.target))))}else n.object.isOrthographicCamera&&(Re=c!==1,Re&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix()));return c=1,S=!1,Re||bt.distanceToSquared(n.object.position)>a||8*(1-P.dot(n.object.quaternion))>a||it.distanceToSquared(n.target)>0?(n.dispatchEvent(Lh),bt.copy(n.object.position),P.copy(n.object.quaternion),it.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",qt),n.domElement.removeEventListener("pointerdown",R),n.domElement.removeEventListener("pointercancel",z),n.domElement.removeEventListener("wheel",tt),n.domElement.removeEventListener("pointermove",y),n.domElement.removeEventListener("pointerup",z),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",St),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new Ph,l=new Ph;let c=1;const h=new C,u=new st,f=new st,p=new st,_=new st,g=new st,d=new st,m=new st,M=new st,v=new st,E=new C,T=new st;let S=!1;const x=[],I={};let L=!1;function A(D){return D!==null?2*Math.PI/60*n.autoRotateSpeed*D:2*Math.PI/60/60*n.autoRotateSpeed}function w(D){const rt=Math.abs(D*.01);return Math.pow(.95,n.zoomSpeed*rt)}function V(D){l.theta-=D}function Q(D){l.phi-=D}const U=function(){const D=new C;return function(ht,bt){D.setFromMatrixColumn(bt,0),D.multiplyScalar(-ht),h.add(D)}}(),B=function(){const D=new C;return function(ht,bt){n.screenSpacePanning===!0?D.setFromMatrixColumn(bt,1):(D.setFromMatrixColumn(bt,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(ht),h.add(D)}}(),F=function(){const D=new C;return function(ht,bt){const P=n.domElement;if(n.object.isPerspectiveCamera){const it=n.object.position;D.copy(it).sub(n.target);let nt=D.length();nt*=Math.tan(n.object.fov/2*Math.PI/180),U(2*ht*nt/P.clientHeight,n.object.matrix),B(2*bt*nt/P.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(ht*(n.object.right-n.object.left)/n.object.zoom/P.clientWidth,n.object.matrix),B(bt*(n.object.top-n.object.bottom)/n.object.zoom/P.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function X(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(D,rt){if(!n.zoomToCursor)return;S=!0;const ht=n.domElement.getBoundingClientRect(),bt=D-ht.left,P=rt-ht.top,it=ht.width,nt=ht.height;T.x=bt/it*2-1,T.y=-(P/nt)*2+1,E.set(T.x,T.y,1).unproject(n.object).sub(n.object.position).normalize()}function j(D){return Math.max(n.minDistance,Math.min(n.maxDistance,D))}function K(D){u.set(D.clientX,D.clientY)}function ot(D){Z(D.clientX,D.clientX),m.set(D.clientX,D.clientY)}function vt(D){_.set(D.clientX,D.clientY)}function G(D){f.set(D.clientX,D.clientY),p.subVectors(f,u).multiplyScalar(n.rotateSpeed);const rt=n.domElement;V(2*Math.PI*p.x/rt.clientHeight),Q(2*Math.PI*p.y/rt.clientHeight),u.copy(f),n.update()}function J(D){M.set(D.clientX,D.clientY),v.subVectors(M,m),v.y>0?X(w(v.y)):v.y<0&&Y(w(v.y)),m.copy(M),n.update()}function ct(D){g.set(D.clientX,D.clientY),d.subVectors(g,_).multiplyScalar(n.panSpeed),F(d.x,d.y),_.copy(g),n.update()}function Mt(D){Z(D.clientX,D.clientY),D.deltaY<0?Y(w(D.deltaY)):D.deltaY>0&&X(w(D.deltaY)),n.update()}function mt(D){let rt=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?Q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),rt=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?Q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),rt=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?V(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),rt=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?V(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),rt=!0;break}rt&&(D.preventDefault(),n.update())}function _t(D){if(x.length===1)u.set(D.pageX,D.pageY);else{const rt=ft(D),ht=.5*(D.pageX+rt.x),bt=.5*(D.pageY+rt.y);u.set(ht,bt)}}function Ht(D){if(x.length===1)_.set(D.pageX,D.pageY);else{const rt=ft(D),ht=.5*(D.pageX+rt.x),bt=.5*(D.pageY+rt.y);_.set(ht,bt)}}function Ct(D){const rt=ft(D),ht=D.pageX-rt.x,bt=D.pageY-rt.y,P=Math.sqrt(ht*ht+bt*bt);m.set(0,P)}function N(D){n.enableZoom&&Ct(D),n.enablePan&&Ht(D)}function re(D){n.enableZoom&&Ct(D),n.enableRotate&&_t(D)}function yt(D){if(x.length==1)f.set(D.pageX,D.pageY);else{const ht=ft(D),bt=.5*(D.pageX+ht.x),P=.5*(D.pageY+ht.y);f.set(bt,P)}p.subVectors(f,u).multiplyScalar(n.rotateSpeed);const rt=n.domElement;V(2*Math.PI*p.x/rt.clientHeight),Q(2*Math.PI*p.y/rt.clientHeight),u.copy(f)}function Rt(D){if(x.length===1)g.set(D.pageX,D.pageY);else{const rt=ft(D),ht=.5*(D.pageX+rt.x),bt=.5*(D.pageY+rt.y);g.set(ht,bt)}d.subVectors(g,_).multiplyScalar(n.panSpeed),F(d.x,d.y),_.copy(g)}function At(D){const rt=ft(D),ht=D.pageX-rt.x,bt=D.pageY-rt.y,P=Math.sqrt(ht*ht+bt*bt);M.set(0,P),v.set(0,Math.pow(M.y/m.y,n.zoomSpeed)),X(v.y),m.copy(M);const it=(D.pageX+rt.x)*.5,nt=(D.pageY+rt.y)*.5;Z(it,nt)}function Jt(D){n.enableZoom&&At(D),n.enablePan&&Rt(D)}function Dt(D){n.enableZoom&&At(D),n.enableRotate&&yt(D)}function R(D){n.enabled!==!1&&(x.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",y),n.domElement.addEventListener("pointerup",z)),Gt(D),D.pointerType==="touch"?Pt(D):et(D))}function y(D){n.enabled!==!1&&(D.pointerType==="touch"?q(D):$(D))}function z(D){switch(It(D),x.length){case 0:n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",y),n.domElement.removeEventListener("pointerup",z),n.dispatchEvent(Dh),s=i.NONE;break;case 1:const rt=x[0],ht=I[rt];Pt({pointerId:rt,pageX:ht.x,pageY:ht.y});break}}function et(D){let rt;switch(D.button){case 0:rt=n.mouseButtons.LEFT;break;case 1:rt=n.mouseButtons.MIDDLE;break;case 2:rt=n.mouseButtons.RIGHT;break;default:rt=-1}switch(rt){case $i.DOLLY:if(n.enableZoom===!1)return;ot(D),s=i.DOLLY;break;case $i.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;vt(D),s=i.PAN}else{if(n.enableRotate===!1)return;K(D),s=i.ROTATE}break;case $i.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;K(D),s=i.ROTATE}else{if(n.enablePan===!1)return;vt(D),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(To)}function $(D){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;G(D);break;case i.DOLLY:if(n.enableZoom===!1)return;J(D);break;case i.PAN:if(n.enablePan===!1)return;ct(D);break}}function tt(D){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(D.preventDefault(),n.dispatchEvent(To),Mt(gt(D)),n.dispatchEvent(Dh))}function gt(D){const rt=D.deltaMode,ht={clientX:D.clientX,clientY:D.clientY,deltaY:D.deltaY};switch(rt){case 1:ht.deltaY*=16;break;case 2:ht.deltaY*=100;break}return D.ctrlKey&&!L&&(ht.deltaY*=10),ht}function at(D){D.key==="Control"&&(L=!0,n.domElement.getRootNode().addEventListener("keyup",ut,{passive:!0,capture:!0}))}function ut(D){D.key==="Control"&&(L=!1,n.domElement.getRootNode().removeEventListener("keyup",ut,{passive:!0,capture:!0}))}function St(D){n.enabled===!1||n.enablePan===!1||mt(D)}function Pt(D){switch(Tt(D),x.length){case 1:switch(n.touches.ONE){case tr.ROTATE:if(n.enableRotate===!1)return;_t(D),s=i.TOUCH_ROTATE;break;case tr.PAN:if(n.enablePan===!1)return;Ht(D),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case tr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;N(D),s=i.TOUCH_DOLLY_PAN;break;case tr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;re(D),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(To)}function q(D){switch(Tt(D),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;yt(D),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Rt(D),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Jt(D),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Dt(D),n.update();break;default:s=i.NONE}}function qt(D){n.enabled!==!1&&D.preventDefault()}function Gt(D){x.push(D.pointerId)}function It(D){delete I[D.pointerId];for(let rt=0;rt<x.length;rt++)if(x[rt]==D.pointerId){x.splice(rt,1);return}}function Tt(D){let rt=I[D.pointerId];rt===void 0&&(rt=new st,I[D.pointerId]=rt),rt.set(D.pageX,D.pageY)}function ft(D){const rt=D.pointerId===x[0]?x[1]:x[0];return I[rt]}n.domElement.addEventListener("contextmenu",qt),n.domElement.addEventListener("pointerdown",R),n.domElement.addEventListener("pointercancel",z),n.domElement.addEventListener("wheel",tt,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",at,{passive:!0,capture:!0}),this.update()}}const Ar=4,Dr=1024,In=4;function nM(r=1){const t=new Float32Array(Dr*In*r*Ar),e=new EA(t,Dr,In*r,mn,Ln);return e.wrapS=As,e.wrapY=As,e.magFilter=Nt,e.needsUpdate=!0,e}function iM(r,t,e=0){const n=Math.floor(Dr*(In/4));t.arcLengthDivisions=n/2,t.updateArcLengths();const i=t.getSpacedPoints(n),s=t.computeFrenetFrames(n,!0);for(let a=0;a<n;a++){const o=Math.floor(a/Dr),l=a%Dr;let c=i[a];ta(r,l,c.x,c.y,c.z,0+o+In*e),c=s.tangents[a],ta(r,l,c.x,c.y,c.z,1+o+In*e),c=s.normals[a],ta(r,l,c.x,c.y,c.z,2+o+In*e),c=s.binormals[a],ta(r,l,c.x,c.y,c.z,3+o+In*e)}r.needsUpdate=!0}function ta(r,t,e,n,i,s){const a=r.image,{data:o}=a,l=Ar*Dr*s;o[t*Ar+l+0]=e,o[t*Ar+l+1]=n,o[t*Ar+l+2]=i,o[t*Ar+l+3]=1}function rM(r){return{spineTexture:{value:r},pathOffset:{type:"f",value:0},pathSegment:{type:"f",value:1},spineOffset:{type:"f",value:161},spineLength:{type:"f",value:400},flow:{type:"i",value:1}}}function Uh(r,t,e=1){r.__ok||(r.__ok=!0,r.onBeforeCompile=n=>{if(n.__modified)return;n.__modified=!0,Object.assign(n.uniforms,t);const i=`
		uniform sampler2D spineTexture;
		uniform float pathOffset;
		uniform float pathSegment;
		uniform float spineOffset;
		uniform float spineLength;
		uniform int flow;

		float textureLayers = ${In*e}.;
		float textureStacks = ${In/4}.;

		${n.vertexShader}
		`.replace("#include <beginnormal_vertex>","").replace("#include <defaultnormal_vertex>","").replace("#include <begin_vertex>","").replace(/void\s*main\s*\(\)\s*\{/,`
void main() {
#include <beginnormal_vertex>

vec4 worldPos = modelMatrix * vec4(position, 1.);

bool bend = flow > 0;
float xWeight = bend ? 0. : 1.;

#ifdef USE_INSTANCING
float pathOffsetFromInstanceMatrix = instanceMatrix[3][2];
float spineLengthFromInstanceMatrix = instanceMatrix[3][0];
float spinePortion = bend ? (worldPos.x + spineOffset) / spineLengthFromInstanceMatrix : 0.;
float mt = (spinePortion * pathSegment + pathOffset + pathOffsetFromInstanceMatrix)*textureStacks;
#else
float spinePortion = bend ? (worldPos.x + spineOffset) / spineLength : 0.;
float mt = (spinePortion * pathSegment + pathOffset)*textureStacks;
#endif

mt = mod(mt, textureStacks);
float rowOffset = floor(mt);

#ifdef USE_INSTANCING
rowOffset += instanceMatrix[3][1] * ${In}.;
#endif

vec3 spinePos = texture2D(spineTexture, vec2(mt, (0. + rowOffset + 0.5) / textureLayers)).xyz;
vec3 a =        texture2D(spineTexture, vec2(mt, (1. + rowOffset + 0.5) / textureLayers)).xyz;
vec3 b =        texture2D(spineTexture, vec2(mt, (2. + rowOffset + 0.5) / textureLayers)).xyz;
vec3 c =        texture2D(spineTexture, vec2(mt, (3. + rowOffset + 0.5) / textureLayers)).xyz;
mat3 basis = mat3(a, b, c);

vec3 transformed = basis
	* vec3(worldPos.x * xWeight, worldPos.y * 1., worldPos.z * 1.)
	+ spinePos;

vec3 transformedNormal = normalMatrix * (basis * objectNormal);
			`).replace("#include <project_vertex>",`vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );
				gl_Position = projectionMatrix * mvPosition;`);n.vertexShader=i})}class sM{constructor(t,e=1){const n=t.clone(),i=nM(e),s=rM(i);n.traverse(function(a){if(a instanceof le||a instanceof bf)if(Array.isArray(a.material)){const o=[];for(const l of a.material){const c=l.clone();Uh(c,s,e),o.push(c)}a.material=o}else a.material=a.material.clone(),Uh(a.material,s,e)}),this.curveArray=new Array(e),this.curveLengthArray=new Array(e),this.object3D=n,this.splineTexure=i,this.uniforms=s}updateCurve(t,e){if(t>=this.curveArray.length)throw Error("Index out of range for Flow");const n=e.getLength();this.uniforms.spineLength.value=n,this.curveLengthArray[t]=n,this.curveArray[t]=e,iM(this.splineTexure,e,t)}moveAlongCurve(t){this.uniforms.pathOffset.value+=t}}const Nh=new ne;class ts extends sM{constructor(t,e,n,i){const s=new bf(n,i,t);s.instanceMatrix.setUsage(Kp),s.frustumCulled=!1,super(s,e),this.offsets=new Array(t).fill(0),this.whichCurve=new Array(t).fill(0)}writeChanges(t){Nh.makeTranslation(this.curveLengthArray[this.whichCurve[t]],this.whichCurve[t],this.offsets[t]),this.object3D.setMatrixAt(t,Nh),this.object3D.instanceMatrix.needsUpdate=!0}moveIndividualAlongCurve(t,e){this.offsets[t]+=e,this.writeChanges(t)}setCurve(t,e){if(isNaN(e))throw Error("curve index being set is Not a Number (NaN)");this.whichCurve[t]=e,this.writeChanges(t)}}const If=r=>{const t=cM(r);return{noise2D:(e,n)=>aM(t,e,n),noise3D:(e,n,i)=>oM(t,e,n,i),noise4D:(e,n,i,s)=>lM(t,e,n,i,s)}},aM=(r,t,e)=>{const{perm:n,permMod12:i}=r;let s=0,a=0,o=0;var l=(t+e)*hM,c=Math.floor(t+l),h=Math.floor(e+l),u=(c+h)*es;const f=c-u,p=h-u,_=t-f,g=e-p,d=_>g?1:0,m=_>g?0:1,M=_-d+es,v=g-m+es,E=_-1+2*es,T=g-1+2*es,S=c&255,x=h&255;let I=.5-_*_-g*g;if(I>=0){const w=i[S+n[x]]*3;I*=I,s=I*I*(Se[w]*_+Se[w+1]*g)}let L=.5-M*M-v*v;if(L>=0){const w=i[S+d+n[x+m]]*3;L*=L,a=L*L*(Se[w]*M+Se[w+1]*v)}let A=.5-E*E-T*T;if(A>=0){const w=i[S+1+n[x+1]]*3;A*=A,o=A*A*(Se[w]*E+Se[w+1]*T)}return 70*(s+a+o)},oM=(r,t,e,n)=>{const{perm:i,permMod12:s}=r;let a=0,o=0,l=0,c=0;const h=(t+e+n)*uM,u=Math.floor(t+h),f=Math.floor(e+h),p=Math.floor(n+h),_=(u+f+p)*wn,g=u-_,d=f-_,m=p-_,M=t-g,v=e-d,E=n-m;let T,S,x,I,L,A;M>=v?v>=E?(T=1,S=0,x=0,I=1,L=1,A=0):M>=E?(T=1,S=0,x=0,I=1,L=0,A=1):(T=0,S=0,x=1,I=1,L=0,A=1):v<E?(T=0,S=0,x=1,I=0,L=1,A=1):M<E?(T=0,S=1,x=0,I=0,L=1,A=1):(T=0,S=1,x=0,I=1,L=1,A=0);const w=M-T+wn,V=v-S+wn,Q=E-x+wn,U=M-I+2*wn,B=v-L+2*wn,F=E-A+2*wn,X=M-1+3*wn,Y=v-1+3*wn,Z=E-1+3*wn,j=u&255,K=f&255,ot=p&255;let vt=.6-M*M-v*v-E*E;if(vt>=0){const mt=s[j+i[K+i[ot]]]*3;vt*=vt,a=vt*vt*(Se[mt]*M+Se[mt+1]*v+Se[mt+2]*E)}let G=.6-w*w-V*V-Q*Q;if(G>=0){const mt=s[j+T+i[K+S+i[ot+x]]]*3;G*=G,o=G*G*(Se[mt]*w+Se[mt+1]*V+Se[mt+2]*Q)}let J=.6-U*U-B*B-F*F;if(J>=0){const mt=s[j+I+i[K+L+i[ot+A]]]*3;J*=J,l=J*J*(Se[mt]*U+Se[mt+1]*B+Se[mt+2]*F)}let ct=.6-X*X-Y*Y-Z*Z;if(ct>=0){var Mt=s[j+1+i[K+1+i[ot+1]]]*3;ct*=ct,c=ct*ct*(Se[Mt]*X+Se[Mt+1]*Y+Se[Mt+2]*Z)}return 32*(a+o+l+c)},lM=(r,t,e,n,i)=>{const{perm:s}=r;let a=0,o=0,l=0,c=0,h=0;const u=(t+e+n+i)*fM,f=Math.floor(t+u),p=Math.floor(e+u),_=Math.floor(n+u),g=Math.floor(i+u),d=(f+p+_+g)*Ce,m=f-d,M=p-d,v=_-d,E=g-d,T=t-m,S=e-M,x=n-v,I=i-E;let L=0,A=0,w=0,V=0;T>S?L++:A++,T>x?L++:w++,T>I?L++:V++,S>x?A++:w++,S>I?A++:V++,x>I?w++:V++;let Q,U,B,F,X,Y,Z,j,K,ot,vt,G;Q=L>=3?1:0,U=A>=3?1:0,B=w>=3?1:0,F=V>=3?1:0,X=L>=2?1:0,Y=A>=2?1:0,Z=w>=2?1:0,j=V>=2?1:0,K=L>=1?1:0,ot=A>=1?1:0,vt=w>=1?1:0,G=V>=1?1:0;const J=T-Q+Ce,ct=S-U+Ce,Mt=x-B+Ce,mt=I-F+Ce,_t=T-X+2*Ce,Ht=S-Y+2*Ce,Ct=x-Z+2*Ce,N=I-j+2*Ce,re=T-K+3*Ce,yt=S-ot+3*Ce,Rt=x-vt+3*Ce,At=I-G+3*Ce,Jt=T-1+4*Ce,Dt=S-1+4*Ce,R=x-1+4*Ce,y=I-1+4*Ce,z=f&255,et=p&255,$=_&255,tt=g&255;let gt=.6-T*T-S*S-x*x-I*I;if(gt>=0){const q=s[z+s[et+s[$+s[tt]]]]%32*4;gt*=gt,a=gt*gt*(me[q]*T+me[q+1]*S+me[q+2]*x+me[q+3]*I)}let at=.6-J*J-ct*ct-Mt*Mt-mt*mt;if(at>=0){const q=s[z+Q+s[et+U+s[$+B+s[tt+F]]]]%32*4;at*=at,o=at*at*(me[q]*J+me[q+1]*ct+me[q+2]*Mt+me[q+3]*mt)}let ut=.6-_t*_t-Ht*Ht-Ct*Ct-N*N;if(ut>=0){const q=s[z+X+s[et+Y+s[$+Z+s[tt+j]]]]%32*4;ut*=ut,l=ut*ut*(me[q]*_t+me[q+1]*Ht+me[q+2]*Ct+me[q+3]*N)}let St=.6-re*re-yt*yt-Rt*Rt-At*At;if(St>=0){const q=s[z+K+s[et+ot+s[$+vt+s[tt+G]]]]%32*4;St*=St,c=St*St*(me[q]*re+me[q+1]*yt+me[q+2]*Rt+me[q+3]*At)}let Pt=.6-Jt*Jt-Dt*Dt-R*R-y*y;if(Pt>=0){const q=s[z+1+s[et+1+s[$+1+s[tt+1]]]]%32*4;Pt*=Pt,h=Pt*Pt*(me[q]*Jt+me[q+1]*Dt+me[q+2]*R+me[q+3]*y)}return 27*(a+o+l+c+h)},cM=r=>{const t=new Uint8Array(512),e=new Uint8Array(512),n=new Uint8Array(256);for(let s=0;s<256;s++)n[s]=s;for(let s=0;s<255;s++){const a=s+~~(r()*(256-s)),o=n[a];n[a]=n[s],t[s]=t[s+256]=o,e[s]=e[s+256]=o%12}const i=n[255];return t[255]=t[511]=i,e[255]=e[511]=i%12,{perm:t,permMod12:e}},hM=.5*(Math.sqrt(3)-1),es=(3-Math.sqrt(3))/6,uM=1/3,wn=1/6,fM=(Math.sqrt(5)-1)/4,Ce=(5-Math.sqrt(5))/20,Se=new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),me=new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),dM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAACACAYAAABqZmsaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAyIDc5LmYzNTRlZmM3MCwgMjAyMy8xMS8wOS0xMjowNTo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMwQzZBRDZFRDQ1MTExRUVBNzhEODBDMjZBMDMxQkQ4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMwQzZBRDZGRDQ1MTExRUVBNzhEODBDMjZBMDMxQkQ4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzBDNkFENkNENDUxMTFFRUE3OEQ4MEMyNkEwMzFCRDgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzBDNkFENkRENDUxMTFFRUE3OEQ4MEMyNkEwMzFCRDgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Yp+IGAAABn0lEQVR42uyaUQvDMAiEo/T//+Ws2xiUsbZqTn3Y9XEM7kuMxsjJGGOOxk9H89cOsP36cc4pKAERmW07cCf++s/JIQztwL5zLvGrEKSvPC0EHnE4gFccChARhwEYxSUFYEV8GcAjfpZZ2rXyJQCv+FVd0U5xNwBa3AWQIW4GyBI3AVjEj/2D9yLbUOLRG1RRK4f2hKgik3kZwXpG7RSPAIRPeygLvsVRom4A5DvBHYJM8at3AR+nBPjz+UDlrADSkJTUgeNO7FBRvblUiFbDEQpBdjiyHia5aYiE0GjXg4LQldYLAaEnp70MQo21Ig1CL3K+BEJvCk86hKUnTIUw1YFMCHMhyoJwVcIjhOViskC4S/ET4gOCgFhuyVYhUD1hGALZlAq8EFVAQAC8KRqdD5gh5N21zo4QHFNV2gBcKcr5AAE4H+iYCZTtAP0DLYeQ/oEWAPoHLOL0D8AA6B9AipsB6B+wiNM/UN2U0j9A/0BdCOgfIAABWuYDlbMC+gfoH6B/gP4B+gfoH6B/gP4B+gfoH6B/gP4B+gf4OH0IMACs50IsaNKsXAAAAABJRU5ErkJggg==",Uf=""+new URL("screenFront-DT8GUmln.png",import.meta.url).href,pM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAABACAIAAADDDu+IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAyIDc5LmYzNTRlZmM3MCwgMjAyMy8xMS8wOS0xMjowNTo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowYmQ4MWU5OC1iYTIxLTQ1NDctODMxYy1lNTBiMjE1ZDk0OWMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTlGMUFBMEJEOUNGMTFFRUJDRTFGQzFCMkE1OUFDNEQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTlGMUFBMEFEOUNGMTFFRUJDRTFGQzFCMkE1OUFDNEQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NGM5YTEzOTEtOWEwNC02YzQxLWJmOWYtYjczYTdiNTg1ZDBkIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBiZDgxZTk4LWJhMjEtNDU0Ny04MzFjLWU1MGIyMTVkOTQ5YyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkCZIC8AAAu1SURBVHja7F1XbxRZGnVVJ9udgxMGTLZF3GUBkXYxLLCCQTDsLCAQ/AAkkkDwxgPiAXgAAS8kwQMSEhIPpB0YMUsUMAuLGGBZE8YG5Hbq4G633bkr7KFqKJXdwQG3RXXfT61W9XX1rVt1T59zvntvlakpU6YUkCAx0KDJJSBBAESCAOibDGs8PrO9nVyHDKEmlyBdmBOJqR0d9lgsrFbXmUw8RZFrQgDU1wBYal2u8kiEo6j5bjdfUFBnNpPLQgDUpzAmEovb2opYtkOrFUv+4PebEol/Oxzk4hAP1Dt6ABc1z8dUKoamxVecpodFIjWdneT6EAbKeDl4/ruWlopIhE3leKpCIdDSr1YruVAEQKlzrmUtLUaG6dRo0hmjWe3t0LIHJSXEUxMAdQsNx03z+2meD6p7uSbDw+ExwWCD0UguGgHQ76FnmLWNjWAgtm+8srqp6and/qC0lFw6AqACSzw+3e8PaDT+LzlXX8Iei4GxXlksea5l+Q4gKNccr7cyjWvOEBTPz/D5kKm9NZkIgPLXNa92Os2JBDtQFlnR3IyU7X5pKZevPJTXAKoMh8NqdVeanKvvWlbMsr1abwKgHIxGvX66MMQ8YAZSc9xLqzWkzt/LqCorK8vbk4eD+Z/ZXBaNGhgGGsT351UgYO5+Wdkzu514oDwK8E2cpqMqlfiRoemHJSXzPR4jw/D9rOqjXv+mu4OGqUI2l1d+KL8YCB37fVNTSSz2wWCQCiNqdVtR0cRAQMdxKp5X9+FVxLJOvR70I8/hjYkEKkeJq6iIACgHwxaLrWhpgeEFCSFvhwGSrI+YjUPLClmWpWlQSIYX9n/icPSYma8KhZa2tdE8XxGNAklNxcV5Mj6ULwDScNx8r7c0FisQViDA9GCjpbhY2gG4AYxGhUJangcOVGleYCl3YeFTh4Ptzj1/cbv1DEMJlVsTCSR37TodAVCOBBTnH05nRSTy+YQFfOA1Mhx2xGK/yaa0AlrtJ4OhprOzkONSYgjl2P+nYcPk6AFv/eB0wkJRwj7iF8cHg1A6pwygOesKcv62Hks8Pqu9He/J3hadDb/y1G6PfPHU4v5zvF5DkqcGtdQbDEja5egBY031+0FLfCq/1WAw/Gqz8Tl9eXM8C1Nz3AK3G2TDpvHU4A8tx/1cXi4Vdmi19UbjktZWIEbCHOppKyysM5vl6LHHYgtdLigXl6by0mgU6V5ur4XNZQYqZpiVzc2wzExGPwutcRUW/rOyUg4O8NDqpiYdy8ILqzjuvcn0LxnIECPC4b+1tmKDy+y9eP612fyopIR4IIWFOZGY5fMhq4I8xTK+sAMwZEkk4I4Z+vc1vmAOr06HlA0lDUYj0i7pTwXCkqBpHR0AXLQPlRtYViNglEiYYgLmZmlr67A+z7FTwrwYkqmbw4ZJhUjFTcL66Gc2W1RmkqBcy1paYMy5/lQOi/0yF9fC5qCEmYV7KmBN+jvDhezJp9X+XFERo9PeazAmGITFBhr4/lcOT517WpZrDITsaaqwMjUs44x+JfzT/P6XFkss1dfhuJHkx2l6YIlVufD1HFs/lFMAogTlqohEmK8YBUbqBAd9q6KiR7ktHv+uuRkZOzfg5hUU/DUSQUL32mIhEvbNhTUe/7PbDQphv3oOAZ46oNHcKyuTxoegXH/y+ajecq4+Vt6o1//icOTG+FCOMJCG4/7o9wNDgzUDBR6Cg5YAhLSrmGEGq/KxXV0ene63nLivIxcAhFx9bWNjOZSLHswbbbUysQKY7PH4IFb+d6fzQWnpL8q/V1rxAPo83uP1Qg6aB3viKS6DY4dWO+gDOZDFkFr9X7NZ0fP2igfQxEAA3BAdUM6VOeQeBa48Tg/+cwRqAgFoWauS1w8pGEBQrlVNTZbeZioGHCqel6f3ULFsHOX7pqbnNtsTxa6LVSqADAwz3efjKKq9P3cD9ivk2RzcdODrbt7IEJXhcI1Go9DxIUUCiOL52V7vqFCIzaZ7kDMQ2M4orEHL0unM9XhiNP1RttCWAChbATX5obHRFo8zWfaetAxAyMiKsgagAmGMcWVz81O7XXF5mcIAJCmXO/uT2wmZaw5qNL7sL1EdGQr5tVplaZnCALTA7a4KhZghyXvVchPNMFky0T2i1uXC2dUrZ4xRMQDSM8zS1lYwkD9rZjaDiY6qVF1DcvspDjnH67XHYk8UomXKAFAxw8wUHg3GU5SGH6JJJKq7oR664wpr8qFl75WgZQoAkIbjFrlcI8PhxNCO2MpNNNqgY9mhSzOFU4YF+/b9kAJm4ymBAJg8e36KUs5aAY/55YWZhII8C6WcNXlONImc9kA0Tdvsdq1GQ1GfFyKnZnuK8ng88Xi8vLxcpVJFo9H27v8hxWA0mk0mYR0zpdPp8NdQKFQhrDn0+/3BYDDFdVGry8rKcPRAINApPF981KhRWp2uob6eTTJDRUVFDiFpcrlccWHVB0osVistoxDqy7a4kUgk3B5PaUkJGsynt+fYGYdra2sjABpIVFdXb9iwAR2p6S11P3jwYENDw549e8xmc11d3eHDh6UOqK2tXbFihcViESH44MGDa9eulZSU7Nu3DzucP3/+3r17yRWinr1792q12suXL1+/fh3NWLx4McpxlNOnTwOv8p0nT568efNmbOzfv//jx48LFy5cvny51WoVsUKlUiJg4tChQ7t377b0trwVWN+2bRsB0EBizZo1I0aM6CNRARx4R2/RX0aQa2pqVq9ePX78ePHj+/fvr1y58vbtW2xL1aZb4iyVgyoqKytF9CDGjh27a9euY8eOtQp3FfaIWCw2bty4TZs29dpgECGaWlxcTPVmdIq/7Rvsv2kA2YVFDo2NjTdu3MhA8pAb/KDBUqIWQESgIGvXrl2wYIG4j8/nA+uAe7q5VEHR0D3J9IY/Sd0GBbEK93MBSVCo4cOHl5aW7ty58/jx406nMxl2s2fPxkYkErl06RLe0+EjLMSFCxd0shkSVC62+ebNm16vVzy7xJCMgOcmgEQa0Ov1BoOBTTMMg04CqcCpFH1ZlgVRAEmMGTNGBNPdu3fRH53d/09KV1cXOgYKtWrVqkWLFvUQGgBIK4T0USS5c+fOLV26FBABsnfs2AEeArh7ECFaiw2GYYBLOs0aNJEm0YCHDx/KyydOnCgC6PHjx83NzcREf23gJ45fP3pr48aNGXZDb504ceLly5fix6qqKunrJ0+eTKk1HR0dt2/fXrZsmU6IvjQGbhcKdebMGRDejBkz0DCRhz58+NCDvfBuNBrXr1+f2dk8e/Ys3n2dtQRZbdYWOeUXgC5evAgSGj16dIYLih86enTJkiWvX7+WJEzc32azwc/eunVLlIMeAYn59OkTfJI61SQXagBKVLKVsqhcVMlTp06BPObMmWMymcBDR44cgRglc2cG/UIgE/yKO8wIgPoWcDb4iUObNEIan+xUUIj0Z8KECRAOdLkIoHfv3oEVoE0ohPmF4vz444/gGyZpQc9/hEh5aBid6dOnA0DJMgQxPXv2LLp/3rx50Nbt27c/f/5cbIzUyGAwmBJY8uScHcK5kTwF0NSpU5FGoavSjZSgd2E8RYcLfIj9h8KrV68i51q5cmV1dTX6eN26dSAM+Gj0dLJPh2FK9tEaIbABd5XSnMEPoVXz589Hwg+eEwEN3LS0tIgStnXrVib9GjQw0NGjR5lsLlIjAPpshyVDkzmePHkiJl/YLhTWmr158wbmGiQBGDkcjpEjR27ZsgUlyOTr6+sl+QBKyrs/+Ece8E+vXr2aNGmS5Hzl/AcMgWNgq8USHBFoe/ToEYywXYgMDQask7lNUkyapgmABiGQidy/fz/zPsANNAvUAiuDhAsYklwz+hhpzosXL2pra9GdQIDobOBOpAwcCLhz544q1V1BHo8HaMAO2BCb0Zn0Ly/h0hoaGmbOnOn3+yGUBcLQ9oEDB+bOnZsZQEgDkyXM7XaLB0pJe99m5P4zEklkNchkKgkCIBIEQCQIgEjkY/xfgAEA2koOvWWpWf0AAAAASUVORK5CYII=",mM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAABACAIAAADDDu+IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAyIDc5LmYzNTRlZmM3MCwgMjAyMy8xMS8wOS0xMjowNTo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowYmQ4MWU5OC1iYTIxLTQ1NDctODMxYy1lNTBiMjE1ZDk0OWMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDFFQjFCMjREOUJGMTFFRTkxMUFFNUYzMDYyM0RGNjUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDFFQjFCMjNEOUJGMTFFRTkxMUFFNUYzMDYyM0RGNjUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YjFmYWIzMTEtMjUwNS04ZTQ5LTg5ZTYtZTZjMTRlOTkxODkxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBiZDgxZTk4LWJhMjEtNDU0Ny04MzFjLWU1MGIyMTVkOTQ5YyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pusl/vkAAACMSURBVHja7NJBEQAACMMwwM/828MDXxIJvXaSgquRAANhIAyEgcBAGAgDYSAwEAbCQBgIDISBMBAGAgNhIAyEgTAQGAgDYSAMBAbCQBgIA4GBMBAGwkBgIAyEgTAQBgIDYSAMhIHAQBgIA2EgMBAGwkAYCAyEgTAQBgIDYSAMhIEwEBgIA2EgflgBBgC3ggEHXP+QnAAAAABJRU5ErkJggg==",gM=""+new URL("track1-yaAxBdOv.png",import.meta.url).href,_M=""+new URL("track2-BVPqxE83.png",import.meta.url).href,vM=""+new URL("track3-tq09SZDv.png",import.meta.url).href,AM=""+new URL("track4-Bfh7q8nc.png",import.meta.url).href,MM=""+new URL("track5-CS9hq0FA.png",import.meta.url).href,xM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAIAAAA04/g9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAyIDc5LmYzNTRlZmM3MCwgMjAyMy8xMS8wOS0xMjowNTo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkZFRENGNzRBRDlDMzExRUU4QjJEQThCNTVBNTZGMTcxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkZFRENGNzRCRDlDMzExRUU4QjJEQThCNTVBNTZGMTcxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkVEQ0Y3NDhEOUMzMTFFRThCMkRBOEI1NUE1NkYxNzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkVEQ0Y3NDlEOUMzMTFFRThCMkRBOEI1NUE1NkYxNzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz70imkWAAAIcklEQVR42uxcT2tVVxC/kbvpThc+XD2aQihYtC5SLXQpLisFScCVmzQEP4INLiT6EUSse8EgBLsMXZZqfYvU0kUJNPJWJV2kH6Bg5965bzJ3zjlz5tx3iorn8AjJ8757Z34z85s/5zwXzp49W73P60T1nq+iwNteNf9jaWnp3Zd4f3+/uFBRoChQFCgKFAWKAkWBokBRoChQFHAams3NzXdf4hs3bnyQLrTcrowPfnBzFV7/lwJX7ozhlVeIlXbp14z3tuA1PAaUNZlMhDTw8/LphZD+8HP39pSrKq7ZuP+E7rO9vZ0niGnxZ7u+JITQEYWf0wubqK17/cHBAUdntLbTXN/+SSgsf3G9uebl47ksIFYIM1Rv9/bEi7dXsZw06nVcIS6iBYIuLi6Kf2rEWt7hHx99+3vzs7ou8Lt099f2sz3PROXhHXzo7uzOIeyDQQwmQ6vh+ufcC0tA4zp89A0oFg1WyzJGcx11lSt3/DEt3Je5xMqxB6vghXgCHupKT/aJKyBMRgGNTMK9GfAeO66MTiXURoFuPXyFH4/SDr8nYnH0LN0CevgDGOMwNgqP6XzFKbjz5K9/8mKfzEL31s83z2AEhziN9BTOUNi4b/IKO6dHFBDYh1iPSwDh++K7z0MXuwlOUCqoBK5CN5wYQihuAcQJ3J3obzclcbpCEPAo6DhG4nrmqeckO5Eo4JdpAF0G/yhk2Kg7DVEAbgqYQZKHXzgKINDRs5HuHvayygsweiNxl0kBlyt1YNxsEEKX64ZetHbxE/EggQJ+XIR+NheCx0wmxzL9cXW95ajNaDFiLKsGulC0wIymHosvocXoWaSk+6ko1SZYgBdIE3ONwAH2+qebMZJq1TqpFPU2ZUImQBF7r4PXtVFVDNaqLV2php2+nOV7aNPC+iRYQBdF79E61zrzHNQTOuOfkOYnKZVfXAFwvo7Fbq4+PfPc69aADTzYxQapqVpYiuZHcu5eNrBVAHkSGfd1kWKrl48bdG+uItikP/wJ5oK2AfWM0obOCrVGFDMa3qim3uRK2HTle78d01tkhVvsOTHZAnqX5ArE0aU6zyUGXeLh1ail2/C+g4R4+P1n4n2oBRVOo+DumgFbsV1buJ+iigtkfIA3IVApQRLDO2sXTTSdLYhPXT1s7ZtMuFSci/Xolz85HDj1UHhZU4CAP9W2c0fLo2G1rkiIwmjIzsgQ/OY80gB73dS1rZ0buYlZaayMUbR7YSq8kYtuLPJqS9L1ao/6iHIaJZjNrbY7eqERFbuP4twCBd3yCTFAkHjn7PjUEM8qAw74yOGeTCwZSgnhEq4joj74TmeN1zWKSMZXKFwhlmyJrPWElV55Y+tcuQSdTd7s4yeF/wiYui7+3IsMFmhvumIUurMG7QO09CIWsj4yz7U5BkEJFnB5wO0QomO5zrn7F3TY7215x5KZpxJJS/Fs/CdeF6KLeoUm14o2VWkK0I3oAWIsh9foT2WMtJJUNQxUIIkThsHh7byR0LpBZaoCUaEBe9xR/PTZQ7qSz+eSGmtcP/79Rk9q3vwTt8AA7N0NKFADiBj9LVTqEZXN5UKhXbpoPRMq4ygkQnbuJmJqDp55xGR4EJNrLn78r9cleLHQTlGP5eY5276MsVcrbeGcm6HeSOAhgcJNqy6clAcpapgs0NRbs/7wcn/Pff6t9jljL1oLVUI2l6cbptvb0rswL0FRFhe1UBIcplJCMW5zzayERq+99teXoXw0LFXlLCUEQhQkrWSrvIYDdLHx5dsz12JjGDdsojVSncQJJ01e+yR0sgixR74CNtMPXAgXzTDcrdyTEcebKH2vaKeiUxYV0YgMNUzNUqdp9fycoHg2cTn6AxY2Xdc2ExpzttIw5RzuEurNs5d3QrlJZyRveqFbpRJRbbSpMhXl2IeOzKBA0/6t8Ob+mrT/dGUmUBuZR+y/063t9UzIJUTJwPWxVBPaeJ0fdAtNRZH1q+q8UMzuA7jZzDc82X3GUZ+MH7s8aBcPWWzP+Rqt7eBxt5DTw4vvEVp1++EreA1PZErKbCe7YzAuXuNtLI1SKuVjnsMek/4ZQpT46R2NYbxOj7uOChGlnhiNKJC0a8JRh3AnydwU0Z192bOGeLZaSD9JCkGC+SiViLw7bggf0sO99fMYXcnj9WjyF+hePr3woN2Q5NZopvsQu/BqR4sY/di852ohzMPdfirh/mrpFb3bLUoN0sLXvH8J4Li7mKEahY6MawJ/ii1ulANk8h4x7g/nIm13lXIWQxvuNuecAgB7mzWlLtruTsT3PNPS2UQ9zWoByc2BSYnYGE5LCHnPSnidm7jVPUQj9hgVVhg87JiVNh/lmU7PfxQLc8Jsu3aamYUqdhCG0PI+RlQT7vaMALsbp6ojPe+2Az7o5/6XgGoFYGS99nxAHGD7xj2hgNy66zTykMshVUP+gnvOddTAHRdzKb3oeo8dkuvT9mtqyT1EAePd5RkhdhBXPzvupwfWuE1ts9SEwx7tMw4BXY79yFyAwPUck5DL6RVAcjV6lFLNi9C3YE/i5mSh2VzpUKju9ewE97jtaRrpGwgExK2Hryp2WjeKgqkajaYeUYFWvl0tb97oJjS+XC7UDvnSCa9XKKc77N9JxC8TwQuE4GlYdF5Ipt57nvztUvT7RKbvUgJOyIChBcxN5+EUWuPDgdQWCrBPmwuRyTjByXmTmrzoELGYX4jrQTH6blpwPJprtOhtU5ovPfTDw+1UlF26qn/0KFsiI3txU3Zn3VQWohrEwld8dqZUDcqEYS4LoIldvKEGEdbXaX5wWZWsgCUDJFU4xu2meXcpswhhX0k7yuW/ZXjbq+dCW1tbxQJFgaJAUaAoUBQoChQFigJFgaLAB9oPiP/SuVigKPAhKPCfAAMA3ED/f+AaldAAAAAASUVORK5CYII=",yM=""+new URL("rock-DL0zC1o7.png",import.meta.url).href,SM=""+new URL("displacement-akyG3I2p.png",import.meta.url).href,EM=""+new URL("collision-CD3et4KF.png",import.meta.url).href;function Oh(r,t,e=0,n=8.5){const i=us(r,new st(t.x,t.z),16);if(i){const[s,a,o]=i;return s===255&&o===255?e:o/255*(n-e)}return e}function TM(r,t,e){const n=us(r,new st(t.x,t.z),8),s=new st(e.x,e.z).angle();if(n){const[a,o]=n;if(a===255&&o===255){const l=new st(4,0).rotateAround(new st(0,0),s-Math.PI/2),c=new st(4,0).rotateAround(new st(0,0),s+Math.PI/2),[h]=us(r,new st(l.x,l.y).add(new st(t.x,t.z)),8),[u]=us(r,new st(c.x,c.y).add(new st(t.x,t.z)),8);return[h/255,u/255]}}}function us(r,t,e){const n=bM(t.x,t.y,r.width,r.height,e),i=Math.floor(n.y*r.width+n.x)*4;if(r){const s=r.data[i],a=r.data[i+1],o=r.data[i+2];return[s,a,o]}}function bo(r){return r.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1})}function wo(r){return`${bo(Math.floor(r/60))}:${bo(Math.floor(r%60))}.${bo(Math.floor(r%1*100))}`}function bM(r,t,e,n,i){return new st(Math.floor(e/2+r*i),Math.floor(n/2+t*i))}function wM(){return[[4,new pt(16777215)],[6,new pt(13421772)],[6,new pt(16764006)],[4,new pt(10075084)],[6,new pt(16764006)],[6,new pt(16777215)],[6,new pt(10075084)],[6,new pt(13421772)],[8,new pt(16772659)],[16,new pt(16750899)],[8,new pt(16772659)],[6,new pt(16777215)],[6,new pt(10075084)],[6,new pt(16777215)],[6,new pt(13421772)],[6,new pt(10075084)],[6,new pt(16777215)],[20,new pt(16777215)]].reduce((e,[n,i])=>{const s=1/(n+1),a=e[e.length-1],o=Array.from(Array(n)).map((l,c)=>a.clone().lerp(i,(c+1)*s));return[...e,...o]},[new pt(13421772)])}const RM=()=>new Promise((r,t)=>{new Ye().load(SM,function(e){const n=document.createElement("canvas");n.width=e.image.width,n.height=e.image.height;const i=n.getContext("2d");i.drawImage(e.image,0,0),r(i.getImageData(0,0,n.width,n.height))},void 0,function(){t()})}),CM=()=>new Promise((r,t)=>{new Ye().load(EM,function(e){const n=document.createElement("canvas");n.width=e.image.width,n.height=e.image.height;const i=n.getContext("2d");i.drawImage(e.image,0,0),r(i.getImageData(0,0,n.width,n.height))},void 0,function(){t()})}),ea=r=>{const t=new _e;t.position.copy(r);const e=new Ye().load(xM);e.minFilter=Nt,e.magFilter=Nt;const n=new Pe({color:1118481}),i=new Pe({color:0}),s=new Pe({color:0}),a=new Pe({color:3355443}),o=new cn(32,2),l=new cn(32,6),c=new Ji(12,12,32),h=new C,u=c.getAttribute("position");If(()=>0);for(let g=0;g<u.count;g++)h.fromBufferAttribute(u,g),h.x>0&&h.y>0&&(h.y=-2),u.setXYZ(g,h.x,h.y,h.z);c.attributes.position.needsUpdate=!0,c.computeVertexNormals();const f=new le(c,[s,s,a,s,s,s]),p=new le(o,n);p.position.set(-6,7,0),p.rotateY(Math.PI/2);const _=new le(l,i);return _.position.set(-3,8,0),_.rotateY(Math.PI/2),_.rotateX(Math.PI/2),t.add(f),t.add(p),t.add(_),t},Ro=r=>{const t=new Ye().load(dM);t.minFilter=Nt,t.magFilter=Nt;const e=new Pe({transparent:!0,map:t}),n=new Ji(1,12,1),i=new le(n,e);return i.position.copy(r),i},Co=(r,t=Uf)=>{const e=new _e,n=new Ye().load(t);n.minFilter=Nt,n.magFilter=Nt;const i=new Pe({color:13421772,map:n,side:sn});i.map.encoding=Oe;const s=new cn(10,4,1,1),a=new le(s,i);return a.position.set(r.x,r.y+4,r.z),e.add(Ro(new C(r.x+5.5,r.y,r.z))),e.add(Ro(new C(r.x-5.5,r.y,r.z))),e.add(Ro(new C(r.x,r.y+6.5,r.z)).rotateZ(Math.PI/2)),e.add(a),e},PM=()=>{const e=new cn(8,4,16,8),n=new C,i=e.attributes.position;for(let s=0;s<i.count;s++){n.fromBufferAttribute(i,s);const a=s%17;let o=n.z,l=n.x;a===0&&(l=1.6,o=-.5),a===1&&(l=-1.6,o=-.5),a===2&&(l=-2.6,o=.5),a===3&&(l=-2.5,o=.5),a===13&&(l=2.5,o=.5),a===14&&(l=2,o=2),a===15&&(l=2.6,o=.5),a===16&&(l=1.6,o=-.5),i.setXYZ(s,l,n.y,o)}return e.rotateX(Math.PI/2).rotateY(Math.PI/2),e.attributes.position.needsUpdate=!0,e.computeVertexNormals(),e},LM=()=>{const e=new cn(8,4,16,8),n=new C,i=e.attributes.position;for(let s=0;s<i.count;s++){n.fromBufferAttribute(i,s);const a=s%17;let o=n.z,l=n.x;a===0&&(l=0,o=2),a===1&&(l=-2,o=2),a===2&&(l=-2.25,o=1.25),a===3&&(l=-2.5,o=.5),a===13&&(l=2.5,o=.5),a===14&&(l=2.25,o=1.25),a===15&&(l=2,o=2),a===16&&(l=0,o=2),i.setXYZ(s,l,n.y,o)}return e.rotateX(Math.PI/2).rotateY(Math.PI/2),e.attributes.position.needsUpdate=!0,e.computeVertexNormals(),e},Fh=(r=8)=>{const n=new cn(8,4,16,8),i=new C,s=n.attributes.position;for(let a=0;a<s.count;a++){i.fromBufferAttribute(s,a);const o=a%17;let l=i.z,c=i.x;o===0&&(c=0,l=-.5),o===1&&(c=-1.6,l=-.5),o===2&&(c=-2.6,l=.5),o===3&&(c=-2.5,l=.5),o===13&&(c=2.5,l=.5),o===14&&(c=2.6,l=.5),o===15&&(c=1.6,l=-.5),o===16&&(c=0,l=-.5),s.setXYZ(a,c,i.y,l)}return n.rotateX(Math.PI/2).rotateY(Math.PI/2),n.attributes.position.needsUpdate=!0,n.computeVertexNormals(),n},DM=r=>{const t=new Ye().load(yM);t.minFilter=Nt,t.magFilter=Nt;const e=new Pe({color:10066329,map:t});e.map.encoding=Oe;const n=new cn(r.width/8,r.height/8,r.width/8,r.height/8),i=new le(n,e);i.rotateX(-Math.PI/2),i.position.set(0,-2,0);const s=new C,a=n.getAttribute("position"),o=If(()=>0);for(let l=0;l<a.count;l++){s.fromBufferAttribute(a,l);const c=Math.floor(s.x*8+r.width/2),h=Math.floor(s.y*8+r.height/2),u=Math.floor(h*r.width+c)*4,p=r.data[u]/255,_=o.noise2D(s.x/30,s.y/30);a.setXYZ(l,s.x,s.y,s.z+p*16+p*_*8)}return n.attributes.position.needsUpdate=!0,n.computeVertexNormals(),i},IM=()=>{const r=new GA;return r.add(new la(new C(16,0,0),new C(16,0,-32))),r.add(new si(new C(16,0,-32),new C(16,0,-48),new C(32,0,-40),new C(32,0,-56))),r.add(new si(new C(32,0,-56),new C(32,0,-72),new C(32,2,-72),new C(32,2,-88))),r.add(new si(new C(32,2,-88),new C(32,2,-100),new C(16,2,-100),new C(16,2,-88))),r.add(new Rf([new C(16,2,-88),new C(16,2,-80),new C(0,3,-64),new C(0,5,-48),new C(-32,4,-16),new C(-24,6,16),new C(-24,8,48),new C(-24,8,56)],!1)),r.add(new si(new C(-24,8,56),new C(-24,8,64),new C(-16,7,72),new C(-8,7,72))),r.add(new si(new C(-8,7,72),new C(8,7,72),new C(8,8,96),new C(24,8,96))),r.add(new la(new C(24,8,96),new C(32,8,96))),r.add(new si(new C(32,8,96),new C(48,8,96),new C(48,4,72),new C(32,4,72))),r.add(new si(new C(32,4,72),new C(8,4,72),new C(16,0,48),new C(16,0,32))),r.add(new la(new C(16,0,32),new C(16,0,0))),r},UM=r=>{const t=new _e;t.add(ea(new C(4,4,32))),t.add(ea(new C(4,4,-4))),t.add(ea(new C(28,4,-4)).rotateY(Math.PI)),t.add(ea(new C(28,4,32)).rotateY(Math.PI)),t.add(Co(new C(16,0,-32),mM)),t.add(Co(new C(32,2,-72),pM)),t.add(Co(new C(0,5,-48)),Uf);const e=Fh(4),n=Fh(8),i=PM(),s=LM(),a=new Ye().load(gM),o=new Ye().load(_M),l=new Ye().load(vM),c=new Ye().load(AM),h=new Ye().load(MM);a.minFilter=Nt,a.magFilter=Nt,o.minFilter=Nt,o.magFilter=Nt,l.minFilter=Nt,l.magFilter=Nt,c.minFilter=Nt,c.magFilter=Nt,h.minFilter=Nt,h.magFilter=Nt;const u=new Pe({color:10075084,map:a}),f=new Pe({color:13421772,map:o}),p=new Pe({color:13421772,map:l}),_=new Pe({color:13421772,map:c}),g=new Pe({color:13421772,map:h});u.map.encoding=Oe,f.map.encoding=Oe,p.map.encoding=Oe,_.map.encoding=Oe,g.map.encoding=Oe;const d=74,m=4,M=r.getLength(),v=M/m,E=Math.ceil(v),T=1/v,S=wM();return console.log("splineLength",M),console.log("stepCount",v),console.log("stepCountRounded",E),[new ts(E,1,e,u),new ts(E,1,i,f),new ts(E,1,n,p),new ts(E,1,s,_),new ts(E,1,e,g)].forEach((x,I)=>{if(x.updateCurve(0,r),I===0){for(let L=8;L<9;L++)x.moveIndividualAlongCurve(L,(d+L)*T%1),x.object3D.setColorAt(L,S[L%S.length]);for(let L=10;L<32;L++)x.moveIndividualAlongCurve(L,(d+L)*T%1),x.object3D.setColorAt(L,S[L%S.length]);for(let L=38;L<52;L++)x.moveIndividualAlongCurve(L,(d+L)*T%1),x.object3D.setColorAt(L,S[L%S.length]);for(let L=76;L<E;L++)x.moveIndividualAlongCurve(L,(d+L)*T%1),x.object3D.setColorAt(L,S[L%S.length])}if(I===1)for(let L=32;L<38;L++)x.moveIndividualAlongCurve(L,(d+L)*T%1),x.object3D.setColorAt(L,S[L%S.length]);if(I===2)for(let L=0;L<8;L++)x.moveIndividualAlongCurve(L,(d+L)*T%1),x.object3D.setColorAt(L,S[L%S.length]);if(I===3)for(let L=52;L<76;L++)x.moveIndividualAlongCurve(L,(d+L)*T%1),x.object3D.setColorAt(L,S[L%S.length]);if(I===4)for(let L=9;L<10;L++)x.moveIndividualAlongCurve(L,(d+L)*T%1),x.object3D.setColorAt(L,S[L%S.length]);t.add(x.object3D)}),t},NM=/^[og]\s*(.+)?/,OM=/^mtllib /,FM=/^usemtl /,BM=/^usemap /,Bh=/\s+/,zh=new C,Po=new C,Gh=new C,kh=new C,fn=new C,na=new pt;function zM(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,s){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:i||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),i&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){const i=this.vertices,s=this.object.geometry.vertices;s.push(i[t+0],i[t+1],i[t+2]),s.push(i[e+0],i[e+1],i[e+2]),s.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const i=this.normals,s=this.object.geometry.normals;s.push(i[t+0],i[t+1],i[t+2]),s.push(i[e+0],i[e+1],i[e+2]),s.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(t,e,n){const i=this.vertices,s=this.object.geometry.normals;zh.fromArray(i,t),Po.fromArray(i,e),Gh.fromArray(i,n),fn.subVectors(Gh,Po),kh.subVectors(zh,Po),fn.cross(kh),fn.normalize(),s.push(fn.x,fn.y,fn.z),s.push(fn.x,fn.y,fn.z),s.push(fn.x,fn.y,fn.z)},addColor:function(t,e,n){const i=this.colors,s=this.object.geometry.colors;i[t]!==void 0&&s.push(i[t+0],i[t+1],i[t+2]),i[e]!==void 0&&s.push(i[e+0],i[e+1],i[e+2]),i[n]!==void 0&&s.push(i[n+0],i[n+1],i[n+2])},addUV:function(t,e,n){const i=this.uvs,s=this.object.geometry.uvs;s.push(i[t+0],i[t+1]),s.push(i[e+0],i[e+1]),s.push(i[n+0],i[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,i,s,a,o,l,c){const h=this.vertices.length;let u=this.parseVertexIndex(t,h),f=this.parseVertexIndex(e,h),p=this.parseVertexIndex(n,h);if(this.addVertex(u,f,p),this.addColor(u,f,p),o!==void 0&&o!==""){const _=this.normals.length;u=this.parseNormalIndex(o,_),f=this.parseNormalIndex(l,_),p=this.parseNormalIndex(c,_),this.addNormal(u,f,p)}else this.addFaceNormal(u,f,p);if(i!==void 0&&i!==""){const _=this.uvs.length;u=this.parseUVIndex(i,_),f=this.parseUVIndex(s,_),p=this.parseUVIndex(a,_),this.addUV(u,f,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,i=t.length;n<i;n++){const s=this.parseVertexIndex(t[n],e);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let s=0,a=t.length;s<a;s++)this.addVertexLine(this.parseVertexIndex(t[s],n));for(let s=0,a=e.length;s<a;s++)this.addUVLine(this.parseUVIndex(e[s],i))}};return r.startObject("",!1),r}class GM extends ji{constructor(t){super(t),this.materials=null}load(t,e,n,i){const s=this,a=new Lf(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(s.parse(o))}catch(l){i?i(l):console.error(l),s.manager.itemError(t)}},n,i)}setMaterials(t){return this.materials=t,this}parse(t){const e=new zM;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const n=t.split(`
`);let i=[];for(let o=0,l=n.length;o<l;o++){const c=n[o].trimStart();if(c.length===0)continue;const h=c.charAt(0);if(h!=="#")if(h==="v"){const u=c.split(Bh);switch(u[0]){case"v":e.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(na.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6])).convertSRGBToLinear(),e.colors.push(na.r,na.g,na.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":e.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){const f=c.slice(1).trim().split(Bh),p=[];for(let g=0,d=f.length;g<d;g++){const m=f[g];if(m.length>0){const M=m.split("/");p.push(M)}}const _=p[0];for(let g=1,d=p.length-1;g<d;g++){const m=p[g],M=p[g+1];e.addFace(_[0],m[0],M[0],_[1],m[1],M[1],_[2],m[2],M[2])}}else if(h==="l"){const u=c.substring(1).trim().split(" ");let f=[];const p=[];if(c.indexOf("/")===-1)f=u;else for(let _=0,g=u.length;_<g;_++){const d=u[_].split("/");d[0]!==""&&f.push(d[0]),d[1]!==""&&p.push(d[1])}e.addLineGeometry(f,p)}else if(h==="p"){const f=c.slice(1).trim().split(" ");e.addPointGeometry(f)}else if((i=NM.exec(c))!==null){const u=(" "+i[0].slice(1).trim()).slice(1);e.startObject(u)}else if(FM.test(c))e.object.startMaterial(c.substring(7).trim(),e.materialLibraries);else if(OM.test(c))e.materialLibraries.push(c.substring(7).trim());else if(BM.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(i=c.split(" "),i.length>1){const f=i[1].trim().toLowerCase();e.object.smooth=f!=="0"&&f!=="off"}else e.object.smooth=!0;const u=e.object.currentMaterial();u&&(u.smooth=e.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}e.finalize();const s=new ui;if(s.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=e.objects.length;o<l;o++){const c=e.objects[o],h=c.geometry,u=c.materials,f=h.type==="Line",p=h.type==="Points";let _=!1;if(h.vertices.length===0)continue;const g=new bn;g.setAttribute("position",new He(h.vertices,3)),h.normals.length>0&&g.setAttribute("normal",new He(h.normals,3)),h.colors.length>0&&(_=!0,g.setAttribute("color",new He(h.colors,3))),h.hasUVIndices===!0&&g.setAttribute("uv",new He(h.uvs,2));const d=[];for(let M=0,v=u.length;M<v;M++){const E=u[M],T=E.name+"_"+E.smooth+"_"+_;let S=e.materials[T];if(this.materials!==null){if(S=this.materials.create(E.name),f&&S&&!(S instanceof Lr)){const x=new Lr;Le.prototype.copy.call(x,S),x.color.copy(S.color),S=x}else if(p&&S&&!(S instanceof Er)){const x=new Er({size:10,sizeAttenuation:!1});Le.prototype.copy.call(x,S),x.color.copy(S.color),x.map=S.map,S=x}}S===void 0&&(f?S=new Lr:p?S=new Er({size:1,sizeAttenuation:!1}):S=new Pf,S.name=E.name,S.flatShading=!E.smooth,S.vertexColors=_,e.materials[T]=S),d.push(S)}let m;if(d.length>1){for(let M=0,v=u.length;M<v;M++){const E=u[M];g.addGroup(E.groupStart,E.groupCount,M)}f?m=new Eh(g,d):p?m=new xo(g,d):m=new le(g,d)}else f?m=new Eh(g,d[0]):p?m=new xo(g,d[0]):m=new le(g,d[0]);m.name=c.name,s.add(m)}else if(e.vertices.length>0){const o=new Er({size:1,sizeAttenuation:!1}),l=new bn;l.setAttribute("position",new He(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(l.setAttribute("color",new He(e.colors,3)),o.vertexColors=!0);const c=new xo(l,o);s.add(c)}return s}}const kM=""+new URL("ship-BYKgiysZ.png",import.meta.url).href,VM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAgCAYAAACinX6EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAyIDc5LmYzNTRlZmM3MCwgMjAyMy8xMS8wOS0xMjowNTo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA2QzEwM0YzRDlEOTExRUU5RTlEQTI4N0E0MzE1Q0REIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA2QzEwM0Y0RDlEOTExRUU5RTlEQTI4N0E0MzE1Q0REIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDZDMTAzRjFEOUQ5MTFFRTlFOURBMjg3QTQzMTVDREQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDZDMTAzRjJEOUQ5MTFFRTlFOURBMjg3QTQzMTVDREQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4WQ3d7AAAEwUlEQVR42uSZ22scVRzHZ3Znd3aT2qaGpGnjrTXEK15AlFKEqg8qUvvgo/jX+dQHH2oR9UEtiAgieAGtFioq1ku8xFaTdJPdGb9HPyf+ss5M9nJWGzzwZU4yM785v/tl4zzPo//zSkIRiuO49Ja5OjSEGsi45/cOW0IOInPdsUIpLpkg85Zxx/SNwrJwTDgotIV1npkSNoRV4QvhovALwoiKBOG+GUIIyQSZ90iF24QXhGeEm4QW37YW0BWuCd8IrwgvCl8KnTJrCCGEZAJu5Zius/eaf1p4Xjhi7vWvBlaxX5gRfhLOCD8bS+iVucSoqxZY+zE0nWCbmPa8cEJYqGDerjrPnuDdKWgl0I4HjD2TFUCF6XvmUzQ6J9yMhgddDd6Zg0ZqhBAPEYAnawElpp9yrXP4JTQ67Frg3bah52nH/6kLVJh+HS3l7J0GHxVmR/jMLO/OQSuHdj2kK9QCab6G2abmYG5/VLiXqD/savHuUWhFJqs0ioTwrwjAStqkoDoHbvK3ux4SjhP54xEFewQah/pot3xAtWlwFCuoBQx8XjMZdPdx8NYYCmpBY5+pFr2lBQmItTGZty6QmhzttHNAmB7TTGNoHDApNOdbpS4wjBBqgzBeRNCZnv5vfT/jcE5rhzHde4zpjrKa0DgOzRbfyLzFuTMUVYNl5/7Hc1WlZAXjNvD5nJ9iqrcLz1H2zgUIVO6AP1IevyRcEn6nRHbYpFLMdLa87MxDC6CfkH8O5uO+qs+Z6a3C48Kzwn3Gb0OsDKY/Fl4W3hS+EtboIbz1ORnkVeffVQBDtLU1tL9AvnYaf5DInZrnQizfHjuNfyt8gEW8LXyPFWSjtNHxbmnEmHxkgp1rcO4STgoP0e35uj0JzHy/ELq00St0i+8L54ULtNAd32UO4hKxMe0qrfuydh7zflJ4WFjE/FMTpUMzXiQI3xl2cIPLwnvC67jJCvOFXpk1bPONhsv6ea9xV5Y+gH+fxOzbgXuJcWPEBu5wnjjxIa10p8A9/rbuAgF45pv05c7UTwtPCbeYHHw9rgyGvxZeE87iGr8SJ3YIoUgAvqNzZn0Hg4zTjLKm99i8c43RmhPCq8Ln/G97qOJ4TwomRLMENsf4Y/TlzWjvrWmKqP2M4c4SMO2EaYcAEoaVPro/QkprRHt3NeDB8XIFC/iEbNG1pbBvM2fw8yWakDTa+yuFlyV4m7Fte2Lye2w6Lpdnr5oBRx1p2mFEfJ0xmps+oYeZ99D0VXjK+njtxabQcYzeQNOxTE1/GKbXiaQ/kGo6SNHdvzv6a9a/SHo8iP+Fnjh3MeFVzuByv/sN4VPhO3OmBTQ+Q2HW4/4lgqLb/+bo/VkomSxgG5yWyfNbfHzT7LOSUtMfwHVvp4QnaIhGTZsZjdAbwjnhXaOAqol0wwxRG6ZOuOYbJwrF0jrAu0XO37vW2AWZ5E4qxlNYyNSQzK+j4XNUeJ8RwbsDzBBsPeN5yPrPX5QG+0vNUVaPKHuB/RXS6f30ELWSyW7O8xnvfyS8JbyD6a4OeKZBFVVZCocYlPo2eZ54sgwWjTVscG0brV+G4Yv47Yppe4P+KrTtAmNzW91CJ2aQ2UYo3i+3TL728WbN+OtmFeMhzv6HAAMAoT96btTOoeMAAAAASUVORK5CYII=";class HM extends ui{constructor(){super(),this._cameraTarget=new _e,this._cameraPosition=new _e;const t=new Ye().load(VM);t.minFilter=Nt,t.magFilter=Nt;const e=new Pe({transparent:!0,map:t,side:sn,opacity:.4});e.depthTest=!1;const n=new cn(.75,.375);this._shadow=new le(n,e),this._shadow.position.set(0,0,0),this._shadow.renderOrder=998,this._cameraTarget.position.setZ(-4),this._cameraTarget.position.setY(.5),this._cameraPosition.position.setZ(-.75),this._cameraPosition.position.setY(.6),this._cameraPosition.lookAt(this._cameraTarget.position),this._texture=new Ye().load(kM),this._texture.minFilter=Nt,this._texture.magFilter=Nt,this.add(this._shadow),this.add(this._cameraPosition),this.add(this._cameraTarget),this.rotateY(Math.PI),this.loadModel()}loadModel(){new GM().load("./models/model.obj",e=>{e.traverse(n=>{n instanceof le&&this.setMesh(n)}),this._mesh&&(this._mesh.scale.multiplyScalar(.06),this._mesh.rotateY(Math.PI),this._mesh.position.setY(.4),this._mesh.position.setZ(0),this._mesh.renderOrder=999,this.add(this._mesh),this.loadMaterial())})}loadMaterial(){new Tl().load("./models/material.json",e=>{e.map=this._texture,e.map.encoding=Oe,e.side=sn,this._mesh&&(this._mesh.material=e)})}setMesh(t){this._mesh=t}get cameraPosition(){return this._cameraPosition}get shadow(){return this._shadow}get model(){return this._mesh}}const WM=""+new URL("terrain-i7U-XBjT.png",import.meta.url).href;class YM extends ui{constructor(){super(),new Ye().load(WM,t=>{const e=document.createElement("canvas");e.width=t.image.width,e.height=t.image.height;const n=e.getContext("2d");n.drawImage(t.image,0,0);const i=DM(n.getImageData(0,0,e.width,e.height));this.add(i)})}}class XM{constructor(){this.isUpDown=!1,this.isDownDown=!1,this.isLeftDown=!1,this.isRightDown=!1,document.addEventListener("keydown",this.onKeyDown.bind(this),!1),document.addEventListener("keyup",this.onKeyUp.bind(this),!1)}onKeyDown(t){const e=t.which;e==87||e==38?this.isUpDown=!0:e==83||e==40?this.isDownDown=!0:e==65||e==37?this.isLeftDown=!0:(e==68||e==39)&&(this.isRightDown=!0)}onKeyUp(t){const e=t.which;e==87||e==38?this.isUpDown=!1:e==83||e==40?this.isDownDown=!1:e==65||e==37?this.isLeftDown=!1:(e==68||e==39)&&(this.isRightDown=!1)}}const ZM=""+new URL("skyleft-Bc7aI7vz.png",import.meta.url).href,QM=""+new URL("skyright-DmCUisHJ.png",import.meta.url).href,qM=""+new URL("skytop-BoQHAFQi.png",import.meta.url).href,JM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAyIDc5LmYzNTRlZmM3MCwgMjAyMy8xMS8wOS0xMjowNTo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE3QjIyMDA3REEyRTExRUU5OUE4RDQ4MjcxRTE5RTUwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE3QjIyMDA4REEyRTExRUU5OUE4RDQ4MjcxRTE5RTUwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTdCMjIwMDVEQTJFMTFFRTk5QThENDgyNzFFMTlFNTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTdCMjIwMDZEQTJFMTFFRTk5QThENDgyNzFFMTlFNTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz49AQO3AAAFn0lEQVR42uzVMQEAMAjAsDH/atCAAhThgZdEQp9GVj8A7vkSABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAGIAEAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABALAzAgwAkUkGSNTIy/sAAAAASUVORK5CYII=",jM=""+new URL("skyfront-BF2Urufm.png",import.meta.url).href,KM=""+new URL("skyback-EhndIt1M.png",import.meta.url).href,$M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAABACAIAAADDDu+IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAyIDc5LmYzNTRlZmM3MCwgMjAyMy8xMS8wOS0xMjowNTo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVDN0E0M0E5REIzODExRUVCRjVFODlCNUJDOEM5MjJFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVDN0E0M0FBREIzODExRUVCRjVFODlCNUJDOEM5MjJFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUM3QTQzQTdEQjM4MTFFRUJGNUU4OUI1QkM4QzkyMkUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUM3QTQzQThEQjM4MTFFRUJGNUU4OUI1QkM4QzkyMkUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5h06uBAAAFlUlEQVR42uydS2wbRRjH/3Xs4KRtjB0SHOdph8YSQkGySQ6J014InFClggRHAgfUK9x5IzjyOFThABy5gHgIQQUUpbaUk5OUGCKnRHk4tgMoMU6okvihMpqeQEhj78zubLPf72jZMz+P//bOzO5+BgiCIAiCIAiCIAiCIAiCIAjCTE4pbOs0kAAuAA8CI8D9wBn++N/A78Aq8CtwHUgCt2w5Fm63OxgMhkKhezltbW0ej4c9Xq1WDw8P/+IUObVajfyVBYg18TgwAzwBtDXw/EPga+Bj4Cpw2x5D39/fH41GBwYG2GcgfDIb/a2trWw2m8vl4Hh/2QBdAl4GHjb02hvAq8AXWoc+HA7HYrHOzk4Dr93d3U2n0xsbG072Nx6gYeAKMC09BN8Dl4E1y4e+o6MjkUj09fVJtrO9vZ1Kpfb3953pbzBATwMfsvegaCyY+wvApxaO/vDw8NTUVGtrq5LWKpVKMplcW1tzoH+LgcS9CbwP3KNuOFhTTwFsvveTJaM/NjY2MTHR0tKiqkHWVCQScblchULBaf4tzabnA+Alc8blPBAEvjF59CcnJ0dHR81ouaenp729nc1PHeXfXIDeBl40c3Qe4b9GP5rW/vj4uEmjf4euri72bc7n887xbyJAzwDvmv/7nOA7Rhlz5g3sl99s/2AwWC6X9/b2HOLvanzNNWvVDHGWd6d8zcJmndb4s45Ydw7xbzRAV9StuYSc5d0p/mFLJFStWYR4PB7WnUP8GwrQJRX7PU0xzTtVRTgclt8vaQrWHevUCf7iAJ3ie83W84q6E3WxWMx6/3g8Dgf4iwP0mNEzFZKM8lNsSr5Mxnb6JQkEAv39/SfeXxygGWjjWRWNRKNRXf4jIyMn3l8QoNPARX0BusgFZHC73UNDQ7r8WdeNnB6/q/0FAWJzca++AHm5gOSuhsIt/2ZhXTOBk+0vCNAFaEZSIBQK6fWXFLC/vyBAD+kOkKSA3+/X6y8pYH9/QYDO6Q6QpIDP59PrLylgf39BgLp0B0hSwOv16vWXFLC/vyBAZ3UHSFLAsu1/kwTs7+8CQUggCNCBbj9JgUqlotdfUsD+/oIA/ak7QJICR0dHev0lBezvLwjQTd0BkhQol8t6/SUF7O8vCFBGd4AkBUqlkl5/SQH7+wsCdF13gCQFisWiXn9JAfv7CwKUZEdBjQdgLiD5/uv1ui5/1rV8gGzuLwjQLeBLfQH6SroMQ61W03jr8ebmpmQZA/v7i/eBPtEXICVdr66u6vLPZrMn3l8coKvAzzrsWaffqWgnl8uZcZONENapkvIXNvcXB+g28JqOAL2urvhLOp223l9hp3b2b+hUxue8hoaV/AB8pq619fX17e1tK/3z+Tzr1An+jZ4Lu2zhaY0D3p1aUqlUtVq1xp91lEwmHeLf6OWSJfY94DU0LGDGhP2n4+Pjg4ODSCRigf/c3Jzy/Rvb+jdxvW1GxUXKQt4x7Q78Uqkkf5GykKWlpeXlZef4N3fB9jXgPmDcNPtZk6t/sEO71+vt7u42qf2VlZX5+XlH+Td9xf+3gJvX8lHOW7zykNllN9nS1OVy9fT0KG95cXHR1PTY09/ILSPX+EnyaXVFyvaB54H3rJqkFwqFcrnc29ur6o6ZSqXC5g2ZTMaB/sZvP3+A19B4VMWKna25frN8n+NOwRT2McgfVtiaRUuRTTv4y9YveJKXXjBWNOsG8IbS/R4DhMPheDweCAQMvHZ3d3dhYUHhfs/d6K+s0PhzvNB4I/cQHPFC4x/Zr9D44OBgIweFer2+ublpw0LjWvxV/tXBGb7IP8/vBjz37786+IMXrvsFmANS/BEb4vF42CKZzU/9fr/P5/vPXwWwaQdbSBeLxZ2dHcv29BzlTxAEQRAEQRAEQRAEQRAEQRD/wz8CDAArFZpE60Jm5AAAAABJRU5ErkJggg==",tx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAABACAIAAADDDu+IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAyIDc5LmYzNTRlZmM3MCwgMjAyMy8xMS8wOS0xMjowNTo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYyQzc5MzQyREIzODExRUU5OTE2OUVCODk0QzNEQUMwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYyQzc5MzQzREIzODExRUU5OTE2OUVCODk0QzNEQUMwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjJDNzkzNDBEQjM4MTFFRTk5MTY5RUI4OTRDM0RBQzAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjJDNzkzNDFEQjM4MTFFRTk5MTY5RUI4OTRDM0RBQzAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4cBRYUAAAHiklEQVR42uydX0xTVxzHv0ILRf4NBCwgaAvSxRHIYGKiRbZEZclmzNCJj0MfDK/67nS6uEf/PBB8UJ82o9H4J0aY/wJtZmYCilaRYocIbVWErlRGaSHs3Gu2uL3c23vOvacP5/PYtOd8uHx77znn3vMrIBAIBAKBQCAQCAQCgUAgEAgEAoGeLGHYVibgBJqANUAVsBzIkl9/B7wGvMBToBdwATNJeSwy0+C0o6kSa5ajqgjLs5GVLvvP4XUE3jd4+hq9Prh8mIklo7/JZLJarSUlJR/JZGRkmM1m8no8Hp+dnf1TJigzPz+fRAEiTTQDbcBWIEPF+2eBa8AZoBtYTIbv0BI0f4y2BmytRoZZhX8c1zw4cx/dz7C4mBTRKSsrczgc5eXlJEOKbybpefny5dDQ0NjYGP8AtQAHgFpNnx0ADgKXuR76lhocaEZtqSZ/Pw524fJjnv42m62urm7ZsmUaPjs5OdnX1/fixQs+AaoAOoDN1IfgJtAO+Aw/9BUF6PgWmx3U/kNovwDfW6P9c3JynE7nihUrKNsZHx93u93T09OGBqgVOEX+BkbHgrjvBc4ZePRbP8WpVuRYGPlHsfc8zvUbmP6KisbGxrS0NCatxWIxl8vl82n5FqdqSNwR4ASQzu5wkKZ2AGT4cdeQEc+Rr3CiBekmdv4m7KiFORV3nxuRnrVr165fvz41NZVVg6Qpu92ekpISCAT0DRBJz0lgvz7HZSNgBa7rnJ6T27H/C338K2DNwfWn+qZnw4YNNTU1erRcXFy8dOlSMr7WMUBHgX16Hp3P5LPRbd3aP/o19n2up3+ZdDa67dWr/YaGBp3S857CwkJyNvL7/boEaBdwTP/zs1NeMfLo0PKuOhz7Rn9/u7Ri5AnqMu4hVy69/a1WazgcnpqaUvn+FPVzrk6jRoidcnfM51ydO43yb5W6Yz7nIqNmY/xJR6Q7xgHqYDfnUiRb7o4tZMbOas6l7J8udcf4xOZ0sppzKWI2m0l3LAPUwmK9JyE2y52yoqWGwXpPYv4OqVNW2Gw2+vWehCDdkU7ZBGiJvNZsPN8zulFHZl4Hmnn4fyl1zYS6ujrj/evr69kEaIvWOxWU1Mi32OjZ4tB4p4LWv0S6xcbkZKDtTgUl+fn5ZWVlDALUBm58x6KRtnX8/BsYNOJwOHj5V1VV0QYoE9jGL0DbZAEaMtOwrZqff7UkQIPJZFq1ahUvf9K14u19hQCRsbiFX4AssgDV5MUOi5mfv1kSoMFqtTK8ZZEopGsiQBWgJnCGUqCpkrc/nUBJSQlff0UBhQBV8w4QpUB1MW9/OoG8vDy+/ooCCgFazTtAlAKrC3j70wnk5uby9VcUUAhQIe8AUQoUZvH2pxOwWCx8/RUFFAKUzTtAlALZFt7+dAKG3b7QLJACgYAChQBFePtRCkSivP3pBGIxzhuIFAUUAjTBO0CUAhPvePvTCUSjnL8BigIKARrmHSBKgeG3vP3pBMLhMF9/RQGFAHl4B4hSQI8nA40UCIVCfP0VBRQC1Ms7QJQCvT7e/nQCwSDnb4CigEKAXOQqyPECLAvQ4PIhGufnH5cEKP9/CwsLvPxJ17QBmgGu8AvQVeoyDDMxXOF3Gb7qoS3DMD8/T7n1mIbR0VHFMgzK60Bn+QWISddn7/PzZ9G11+vl5T80NKT4HuUAdQOPeNiTTrtYtNP9DI8CPPwD6HrGoJ2xsTH1m2wYQjpVU75DOUCLwCEeAfqBUfGXxUUc6uLh382s+EtfX5/x/io7VXUr45JcQ8NIbgEX2bV26ZFUQ8NQfy8uDjBrbWRkZHx83Eh/v99POmUWIMgVWAy7rRGRu2NL+wVE5ozyn0P7ecZtut3ueNyg+STpyOVSO/1V+7hkiHwP5BoaBtCmw/pT6C+MTEk1NIzw/5n9+tPc3FwkErHb7Qb49/T0qF9/SuB5Ww+Lh5QV+Um3HfieICwm2oeUlf1v4ViPLi2HQiE1DylT8vDhw8ePEyi6ltgD23eAAqBBN/tOnat/3BlGQRYaynXz/w379CzZR4YmFoulqKhIp/YHBwfv3buX0EcSfuL/BmCSa/kw50e58pDeVStvDMKUKtXyYe9/E/uv6F52k0ytU1JSiovZP+z94MGDRNOjJUDvz0PD8vZ1VkXKpoE9wHGjBunkPDQ8IW1fZ1WkbDqKPb/geI9B/oFAIBwOl5aWstrxE4vFyLjH49GyZq9993alXENjE4sZO5lzPYfRVBagYyc2VVH7e6U513MeRTYbGxtJjOgvi2TOZXSRzX/ZLpde0FaIYgA4zHS9R4t/rVR6oUbT7qsBPw7/ynK9RwM2m62+vj4/P1/DZycnJ/v7+1Wu9+gVIPxTaHy3XGhczSPkUbnQ+OkkKzS+ex22fqJqG2s0jmtPcPr3pCs0vnLlSjUXtYWFhdHR0WQpNP4hWfIkf6O8G3D1f3/q4I1cuO4JQMYJbvmVJCQrXZrkk/F1dbG0n+vDnzp48w7eCTwJoscH9x/SK0mI2Wwmk3wyvs7Ly8vNzf3fTx2QYVMoFAoGg69evTJsTVIgEAgEAoFAIBAIBAKBQCAQCAQCWv4WYAAbHEaLO85+DgAAAABJRU5ErkJggg==",ex="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAABACAIAAADDDu+IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAyIDc5LmYzNTRlZmM3MCwgMjAyMy8xMS8wOS0xMjowNTo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY4M0FBOUM5REIzODExRUVCNkM5RjU3RjVDNjM3NEQ3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY4M0FBOUNBREIzODExRUVCNkM5RjU3RjVDNjM3NEQ3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjgzQUE5QzdEQjM4MTFFRUI2QzlGNTdGNUM2Mzc0RDciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjgzQUE5QzhEQjM4MTFFRUI2QzlGNTdGNUM2Mzc0RDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Z+F/5AAAHVUlEQVR42uydW0wUVxzGf8oiWMBqRUWtNuKFhhKMl2Jit9I+IE1aTLra6FuLJhJetW9NqFaNJn3x8kBqE7VP9R6VGKHeIktqaiIVXW/oei1uVbyBxBU0dM4kJvrizM45M2ebnN/jRs/5dr6PmXOZ818wGAwGg8FgMBgMBoPBYDAYDAaDwU8GKGwrB8JQDsUwBUZBrv35U7gL7XABmiEKPWl5LXIGES6kfBLFo5gyklF55GbZ+p9zt5v2e1y4S3OcaJye3nTUH8qhIMyYcoYWM3QKg0eRaRvQ95Rnd3nczuMLJJpJRHnRk04BspqohGqogsEu/v0zaICt0AT96fA3NIDKD6kuo6qEwZku9PfREGPrKZou0Z8WX4BxlRRVM76KkAsDXjzjVgOXt3JbhQGyAYpAHUz19H/bYAXs03rxI6XUVTJ1rCf9HaxoZN85nfonRJhex3BPBjxo4/QKbuzTFKCJUA8V0pfgMNRCPPBLPzGf+m+oKJLWf5naXcQ7g9Y/ZCLhet6XNuCfw7TU0hUPNkALYbP1HRRdiy6oge0BXv2F09i8kCHZivQnqdnJ9tYA07+QTzczSJEBvV1Ea4h7MiDDQ+JWw0bIUnc5rKYWgDX8OB7IiGf1l2yMkBVSpz/EgqlkZnD8ahAjno9XM3sjGeoMsJoqXMDATO4c9zlAVno2wXJ/rswcKICDPqdn03yWf+6P/okUDOHgBX/T88kmSv0xYPQc3ing1kE/A7QWlvl5fWbad6OjvrW/9iuWfean/nHibnS03a/2y9ZS6qcBI2aKu1HHUX8CtAjW+3+HDtsrRjEfWl40nfVf+6+/UKwYxRI+jHsWMdt/AwrCPGnnoWsD3A6irTlXq7pR89vphmmq52XWnKv1e2WjZgf9z5n2s+J5mTXnirQqGzW/nb5u9kxzOy8b6LLR+qDSY5Fnd6cWa8YeTHqE/izRneIbW31A6bHIzBPducRVgCIq1ntSosLuVBWRUgXrPanpLxKdqmJCRMF6T0pY3U2IKArQAHutOXh+VLRRZ8286ip16P9CdK1k5jVdhwEz3BngHKC5XncqJCm1t9jkmVvkcadCVv8YscWm4GYw1+NOhSTvlYotNgUBqkYb36lopHqWPv1lChop0mfAFBcGONykcsCaTGRr+gJJyJd79yNnEJ1ryM7UpL+P/B+k3v0I5fBtJxmaDHiZ5Ld8h3c/HO5AYX3pwe46LDl5KdSWHqE/UwiQoSCsLT0WVtcFTgY4BKgczUgKKJ+kW7+cgDG6DXAU4BCgEt0BkhRQMlq3fjkBw3Qb4CjAIUCTdQdIUsDkfN365QS8q9sARwEOARqhO0CSAkbk6tYvJyBbtwGOAhwClKc7QJIC8rJ165cTMEi3AY4CBmIwSOAQoG7d+iQFdCd165cT0KvbAEcBDgG6rztAkgLuP9WtX05AUrcBjgIcAnRFd4AkBVzp1K1fTsAT3QY4CnAIUEx3gCQF+PFmYJACHuk2wFGAQ4CadQdIUkBzXLd+OQEJ3QY4CnAIUNTe0dT2ALYFyBCNix1Nbfr7hAAp/6JiR1MXVteJqFyAemC/vgAdkC7D0NPLfn1PgQMx2TIML3q4oc+AmwecyzA4rwNt0xcgJV1vO6VPv4qu2/UZcNlF184BaoKzOtRbnTaqaKfpEmfv6NB/h8ZLCtq53cRDHQZYnd5uVBGgflipI0A/KSr+0t/PykYd+psUFX/p57QOA067M8DVVsZeu4ZGkByBPepa23tW1NAIVH87e9qUtXZ9r6ihESQdR7juzgC3e2G1AW5rdNvdqaV2lzjvF5D+59TuVNxmS6047xcMVkdR1wa4DZA1G10aVIBqQHmVi3gnS3cEpX8HV1WvgHfFaQ7KgGgNXa4NSOFsfEzFS8qOrPPtBH4sQXZI9iVlZ/1HWH/Cl5YfxVy9pCzJmXWcS8WA1KpzHLOPSZT5pv4Xn6t/HLtCfi5l433T/yfL/CzZ13GM7HxG+mbAxV84maIBKReYOgQhu5aPctbYlYf8rlp56CKhDFHLR73+wyzf73vZzduHGBgStXyU8/caTqZuQIaXv2N7k7xCXZGyLlgCG4IaY1n3oSv3xfF1VUXKupIs+Z0NJwLSf+eY2CQfW6GsSFlvFyeWEPNkQIa3Ls/BbrsetPyIwpqxz4OgLv4r/Ql2n6G4gMLhCmbs837lRLC7tg/PcW03w4oZIm2ANWNvmkfCqwGyx//n26UXvBWiaINVStd7vOifKkovlI7xpL+DVX+oXO/xwIT5zKgT59g98KCN1lVu13v8ChCvCo0vtguNu3mFPGkXGt+SZoXGF8+i6iNXx1iTfTScZ8tfaVZofDEfVLk6xvoyyc0GLm9Jj0Ljr5NrT/Ln2KcBJ7/5Uwf37MJ15+1HVYv9SRqSmyUm+db4umS0OM/1+k8d3HtK+33OJ8SjquWa+CQNycwVk3xrfD2sRJzneuOnDu6JwnWPzotH1b8t4hODwWAwGAwGg8FgMBgMBoPBYDAY/h/8J8AAZIcEhEyhl9UAAAAASUVORK5CYII=";class nx extends ui{constructor(t){super(),this._textureIndex=0,this.position.copy(t),this._textures=[$M,tx,ex].map(i=>{const s=new Ye().load(i);return s.minFilter=Nt,s.magFilter=Nt,s}),this._material=new Pe({color:13421772,map:this.texture,side:sn}),this._material.map.encoding=Oe;const e=new cn(1.5,.5),n=new le(e,this._material);this.add(n)}setState(t){this._textureIndex=t,this._material.map=this.texture,this._material.map.needsUpdate=!0}get texture(){return this._textures[this._textureIndex]}}const ix=.5,Vh=.35,Hh=.001,rx=.002,Wh=.04,Yh=.002,ia=.005,Xh=0,Zh=8.5;class sx{constructor(t,e,n){this.cameraMode="camera",this.checkpoint=!1,this.isControllable=!1,this.lapTime=0,this.lapTimeStart=0,this.lapTimes=[],this.repulsion=new C,this.rotationY=0,this.speed=0,this.speedPrevious=0;const i=t.createElement("h3");i.innerText="LAP TIME";const s=t.createElement("h3");s.innerText="LAP RECORD";const a=t.createElement("button");a.innerText="PLAY",a.onclick=()=>{this.setCameraMode("player")},this.uiBottom=t.createElement("div"),this.uiBottom.className="ui-bottom",this.uiBottom.appendChild(a),this.uiTop=t.createElement("div"),this.uiTop.className="ui-top",this.ui=t.createElement("div"),this.ui.className="ui",this.hud=t.createElement("div"),this.hud.className="hud",this.hudData=t.createElement("div"),this.hudData.className="hud-data",this.hudTimes=t.createElement("div"),this.hudTimes.className="hud-times";const o=t.createElement("button");o.innerText="QUIT",o.onclick=()=>{this.setCameraMode("camera")},this.uiBottom2=t.createElement("div"),this.uiBottom2.className="ui-bottom2",this.uiBottom2.appendChild(o),this.timeElement=t.createElement("p"),this.timeElement.className="time-large",this.hudData.appendChild(i),this.hudData.appendChild(this.timeElement),this.hudData.appendChild(this.uiBottom2),this.hudData.appendChild(this.hudTimes),this.hudTimes.appendChild(s),Pi.set(this.hud,{x:"-100%"}),Pi.set(this.hudTimes,{x:"-50rem"}),this.hud.appendChild(this.hudData),this.hud.appendChild(this.uiBottom2),this.ui.appendChild(this.uiTop),this.ui.appendChild(this.uiBottom),this.lapTimeElements=Array.from(Array(3)).map((l,c)=>{const h=this.lapTimes[c],u=t.createElement("p");return u.className="time-small",u.style.top=`${2.8+c*2.4}rem`,h&&(u.innerText=`${c+1}. ${wo(h)}`),u}),this.lapTimeElements.forEach(l=>{this.hudTimes.appendChild(l)}),this.setLapTime(this.lapTime),this.document=t,this.document.body.appendChild(this.ui),this.document.body.appendChild(this.hud),this.actor=new HM,this.clock=new $A,this.scene=new yA,this.camera=new pn(100,e/n,.1,1e3),this.renderer=new Tf,this.renderer.setSize(e,n),this.scene.background=new KA().load([QM,ZM,qM,JM,jM,KM]),this.scene.background.minFilter=Nt,this.scene.background.magFilter=Nt,this.curve=IM(),this.controls=new eM(this.camera,this.renderer.domElement),this.keys=new XM,this.loadHeightMap(),this.loadCollisionMap(),this.init()}loadCollisionMap(){CM().then(t=>{this.collisionMap=t})}loadHeightMap(){RM().then(t=>{this.heightMap=t})}init(){this.document.body.appendChild(this.renderer.domElement),this.environment=UM(this.curve),this.lights=new nx(new C(16,2,-2)),this.scene.add(new YM),this.scene.add(this.environment),this.scene.add(this.lights),this.scene.add(this.actor),this.actor.position.set(16,0,0),this.cameraMode==="orbit"&&(this.camera.position.set(16,2,4),this.controls.update())}resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}update(){const t=this.clock.getElapsedTime(),e=20,n=t%e/e,i=(t+.001)%e/e,s=new C,a=new C;if(this.curve.getPointAt(n,s),this.curve.getPointAt(i,a),this.cameraMode==="player"){this.isControllable&&(this.setLapTime(t-this.lapTimeStart),this.updateStearing());const o=new C;this.actor.getWorldDirection(o);const c=new st(o.x,o.z).angle(),h=new st(2,0).rotateAround(new st(0,0),c),u=this.actor.position.clone().add(new C(h.x,0,h.y)),f=Oh(this.heightMap,this.actor.position,Xh,Zh),p=Oh(this.heightMap,u,Xh,Zh),_=f-p,g=this.speed-this.speedPrevious,d=new _n;d.setFromEuler(this.actor.model.rotation.clone()).slerp(new _n().setFromEuler(new kr(Math.PI+.1+_*1+g*30,-this.rotationY*5,Math.PI+this.rotationY*30)),.1);const m=new _n;m.setFromEuler(this.actor.cameraPosition.rotation.clone()).slerp(new _n().setFromEuler(new kr(this.actor.cameraPosition.rotation.x,this.actor.cameraPosition.rotation.y,Math.PI+this.rotationY*5)),.25),this.isControllable&&this.updateThrottle(),this.updateCollision(o),this.updateLap(),this.actor.rotateY(this.rotationY),this.actor.cameraPosition.rotation.setFromQuaternion(m),this.actor.model.rotation.setFromQuaternion(d),this.actor.shadow.rotation.y=-this.rotationY*5,this.actor.position.add(o.multiplyScalar(this.speed)).add(this.repulsion),this.actor.position.lerp(this.actor.position.clone().setY(f),.25),this.updateCamera()}else this.cameraMode==="camera"?(this.actor.position.copy(s),this.actor.lookAt(a),this.updateCamera()):this.cameraMode==="orbit"&&this.controls.update();this.renderer.render(this.scene,this.camera)}endLap(){this.lapTimes=this.lapTimes.reduce((t,e)=>{const n=t.pop();return e<n?[...t,e,n]:[...t,n,e]},[this.lapTime]),this.lapTimes=[...this.lapTimes].slice(0,3),console.log("this.lapTime",this.lapTime),console.log("this.lapTimes",this.lapTimes),this.setLapTimes(),this.lapTimeStart=this.clock.getElapsedTime()}setLapTime(t){this.lapTime=t,this.timeElement.innerHTML=wo(t)}updateCamera(){this.camera.position.copy(this.actor.cameraPosition.getWorldPosition(new C)),this.camera.quaternion.copy(this.actor.cameraPosition.getWorldQuaternion(new _n))}updateLap(){const t=us(this.collisionMap,new st(this.actor.position.x,this.actor.position.z),8);if(t){const[e,n,i]=t;e===0?(n===255&&this.checkpoint&&(this.checkpoint=!1,this.endLap()),i===255&&!this.checkpoint&&(this.checkpoint=!0)):e===255&&n===0&&(this.speed=ix)}}updateCollision(t){const e=TM(this.collisionMap,this.actor.position,t);if(e){const n=new C,i=Math.max(this.speed,.01),[s,a]=e;a>s?(n.x+=i,this.speedPrevious=this.speed,this.speed*=.5):a<s?(n.x+=-i,this.speedPrevious=this.speed,this.speed*=.5):(n.z+=-i,this.speedPrevious=this.speed,this.speed*=.25),this.repulsion.copy(n.applyEuler(this.actor.rotation))}else this.repulsion.lerp(new C,.1)}updateThrottle(){this.keys.isUpDown?(this.speedPrevious=this.speed,this.speed=Math.min(this.speed+Hh,Vh)):this.keys.isDownDown?(this.speedPrevious=this.speed,this.speed=Math.max(this.speed-Hh,-Vh/2)):(this.speedPrevious=this.speed,this.speed=Math.max(this.speed-rx,0))}updateStearing(){this.keys.isLeftDown&&this.keys.isRightDown?this.rotationY>0?this.rotationY=Math.max(this.rotationY-ia,0):this.rotationY<0&&(this.rotationY=Math.min(this.rotationY+ia,0)):this.keys.isLeftDown?this.rotationY=Math.min(this.rotationY+Yh,Wh):this.keys.isRightDown?this.rotationY=Math.max(this.rotationY-Yh,-Wh):this.rotationY>0?this.rotationY=Math.max(this.rotationY-ia,0):this.rotationY<0&&(this.rotationY=Math.min(this.rotationY+ia,0))}setCameraMode(t){t==="player"&&this.cameraMode!=="player"&&(this.reset(),this.cameraMode=t,this.isControllable=!1,Pi.timeline({onComplete:()=>{this.countdown()}}).to(this.uiBottom,{y:"100%",duration:1}).to(this.uiTop,{y:"-100%",duration:1},0).to(this.hud,{x:0,duration:.5,ease:"Quint.easeOut"})),t==="camera"&&this.cameraMode!=="camera"&&(this.isControllable=!1,Pi.timeline({onComplete:()=>{this.reset(),this.cameraMode=t}}).to(this.hud,{x:"-100%",duration:.5,ease:"Sine.easeIn"}).to(this.uiBottom,{y:"0",duration:1}).to(this.uiTop,{y:"0",duration:1},.5))}setLapTimes(){this.lapTimeElements.forEach((t,e)=>{const n=this.lapTimes[e];n&&(t.innerText=`${e+1}. ${wo(n)}`)}),this.lapTimes.length&&Pi.to(this.hudTimes,{x:0,duration:.5})}reset(){this.rotationY=0,this.speed=0,this.speedPrevious=0,this.checkpoint=!1,this.repulsion.copy(new C),this.actor.position.set(16,0,1),this.actor.rotation.set(0,Math.PI,0),this.actor.model.rotation.set(0,Math.PI,0),this.actor.shadow.rotation.y=0,this.setLapTime(0),this.lights.setState(0)}countdown(){const t={x:0};this.lights.setState(0),Pi.timeline({onComplete:()=>{this.lapTimeStart=this.clock.getElapsedTime(),this.isControllable=!0}}).to(t,{x:1e3,duration:1.5,onComplete:()=>{this.lights.setState(1)}}).to(t,{x:2e3,duration:1.5,onComplete:()=>{this.lights.setState(2)}})}}(function(r,t){const e=new sx(t,r.innerWidth,r.innerHeight);function n(){requestAnimationFrame(n),e.update()}r.addEventListener("resize",()=>{e.resize(r.innerWidth,r.innerHeight)},!1),r.addEventListener("fullscreen",()=>{e.resize(r.innerWidth,r.innerHeight)},!1),n()})(window,document);
