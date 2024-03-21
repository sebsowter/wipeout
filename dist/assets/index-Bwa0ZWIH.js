(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function Yn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Kh(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var an={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Nr={duration:.5,overwrite:!1,delay:0},il,Oe,re,gn=1e8,te=1/gn,Io=Math.PI*2,Zf=Io/4,Qf=0,$h=Math.sqrt,qf=Math.cos,Jf=Math.sin,Re=function(t){return typeof t=="string"},ue=function(t){return typeof t=="function"},Qn=function(t){return typeof t=="number"},rl=function(t){return typeof t>"u"},Un=function(t){return typeof t=="object"},Ye=function(t){return t!==!1},sl=function(){return typeof window<"u"},Rs=function(t){return ue(t)||Re(t)},tu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Be=Array.isArray,Uo=/(?:-?\.?\d|\.)+/gi,eu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,yr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Fa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nu=/[+-]=-?[.\d]+/,iu=/[^,'"\[\]\s]+/gi,jf=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,oe,bn,No,al,on={},fa={},ru,su=function(t){return(fa=Yi(t,on))&&Je},ol=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ps=function(t,e){return!e&&console.warn(t)},au=function(t,e){return t&&(on[t]=e)&&fa&&(fa[t]=e)||on},ms=function(){return 0},Kf={suppressEvents:!0,isStart:!0,kill:!1},oa={suppressEvents:!0,kill:!1},$f={suppressEvents:!0},ll={},ui=[],Oo={},ou,tn={},Ga={},Nl=30,la=[],cl="",hl=function(t){var e=t[0],n,i;if(Un(e)||ue(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=la.length;i--&&!la[i].targetTest(e););n=la[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Lu(t[i],n)))||t.splice(i,1);return t},Fi=function(t){return t._gsap||hl(_n(t))[0]._gsap},lu=function(t,e,n){return(n=t[e])&&ue(n)?t[e]():rl(n)&&t.getAttribute&&t.getAttribute(e)||n},Xe=function(t,e){return(t=t.split(",")).forEach(e)||t},me=function(t){return Math.round(t*1e5)/1e5||0},be=function(t){return Math.round(t*1e7)/1e7||0},wr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},td=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},da=function(){var t=ui.length,e=ui.slice(0),n,i;for(Oo={},ui.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},cu=function(t,e,n,i){ui.length&&!Oe&&da(),t.render(e,n,i||Oe&&e<0&&(t._initted||t._startAt)),ui.length&&!Oe&&da()},hu=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(iu).length<2?e:Re(t)?t.trim():t},uu=function(t){return t},An=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},ed=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Yi=function(t,e){for(var n in e)t[n]=e[n];return t},Ol=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Un(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},pa=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},as=function(t){var e=t.parent||oe,n=t.keyframes?ed(Be(t.keyframes)):An;if(Ye(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},nd=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},fu=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},ba=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},gi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Gi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},id=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Bo=function(t,e,n,i){return t._startAt&&(Oe?t._startAt.revert(oa):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},rd=function r(t){return!t||t._ts&&r(t.parent)},Bl=function(t){return t._repeat?Or(t._tTime,t=t.duration()+t._rDelay)*t:0},Or=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},ma=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},wa=function(t){return t._end=be(t._start+(t._tDur/Math.abs(t._ts||t._rts||te)||0))},Ra=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=be(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),wa(t),n._dirty||Gi(n,t)),t},du=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ma(t.rawTime(),e),(!e._dur||Ts(0,e.totalDuration(),n)-e._tTime>te)&&e.render(n,!0)),Gi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-te}},Rn=function(t,e,n,i){return e.parent&&gi(e),e._start=be((Qn(n)?n:n||t!==oe?fn(t,n,e):t._time)+e._delay),e._end=be(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),fu(t,e,"_first","_last",t._sort?"_start":0),Fo(e)||(t._recent=e),i||du(t,e),t._ts<0&&Ra(t,t._tTime),t},pu=function(t,e){return(on.ScrollTrigger||ol("scrollTrigger",e))&&on.ScrollTrigger.create(e,t)},mu=function(t,e,n,i,s){if(fl(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Oe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&ou!==en.frame)return ui.push(t),t._lazy=[s,i],1},sd=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Fo=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},ad=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&sd(t)&&!(!t._initted&&Fo(t))||(t._ts<0||t._dp._ts<0)&&!Fo(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=Ts(0,t._tDur,e),h=Or(l,o),t._yoyo&&h&1&&(a=1-a),h!==Or(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Oe||i||t._zTime===te||!e&&t._zTime){if(!t._initted&&mu(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?te:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Bo(t,e,n,!0),t._onUpdate&&!n&&sn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&sn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&gi(t,1),!n&&!Oe&&(sn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},od=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Br=function(t,e,n,i){var s=t._repeat,a=be(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:be(a*(s+1)+t._rDelay*s):a,o>0&&!i&&Ra(t,t._tTime=t._tDur*o),t.parent&&wa(t),n||Gi(t.parent,t),t},Fl=function(t){return t instanceof He?Gi(t):Br(t,t._dur)},ld={_start:0,endTime:ms,totalDuration:ms},fn=function r(t,e,n){var i=t.labels,s=t._recent||ld,a=t.duration()>=gn?s.endTime(!1):t._dur,o,l,c;return Re(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Be(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},os=function(t,e,n){var i=Qn(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ye(l.vars.inherit)&&l.parent;a.immediateRender=Ye(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Ae(e[0],a,e[s+1])},vi=function(t,e){return t||t===0?e(t):e},Ts=function(t,e,n){return n<t?t:n>e?e:n},Ne=function(t,e){return!Re(t)||!(e=jf.exec(t))?"":e[1]},cd=function(t,e,n){return vi(n,function(i){return Ts(t,e,i)})},Go=[].slice,gu=function(t,e){return t&&Un(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Un(t[0]))&&!t.nodeType&&t!==bn},hd=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Re(i)&&!e||gu(i,1)?(s=n).push.apply(s,_n(i)):n.push(i)})||n},_n=function(t,e,n){return re&&!e&&re.selector?re.selector(t):Re(t)&&!n&&(No||!Fr())?Go.call((e||al).querySelectorAll(t),0):Be(t)?hd(t,n):gu(t)?Go.call(t,0):t?[t]:[]},zo=function(t){return t=_n(t)[0]||ps("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return _n(e,n.querySelectorAll?n:n===t?ps("Invalid scope")||al.createElement("div"):t)}},_u=function(t){return t.sort(function(){return .5-Math.random()})},Au=function(t){if(ue(t))return t;var e=Un(t)?t:{each:t},n=zi(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,u=i;return Re(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(f,d,_){var g=(_||e).length,p=a[g],m,x,A,S,T,M,E,D,U;if(!p){if(U=e.grid==="auto"?0:(e.grid||[1,gn])[1],!U){for(E=-gn;E<(E=_[U++].getBoundingClientRect().left)&&U<g;);U<g&&U--}for(p=a[g]=[],m=l?Math.min(U,g)*h-.5:i%U,x=U===gn?0:l?g*u/U-.5:i/U|0,E=0,D=gn,M=0;M<g;M++)A=M%U-m,S=x-(M/U|0),p[M]=T=c?Math.abs(c==="y"?S:A):$h(A*A+S*S),T>E&&(E=T),T<D&&(D=T);i==="random"&&_u(p),p.max=E-D,p.min=D,p.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(U>g?g-1:c?c==="y"?g/U:U:Math.max(U,g/U))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=Ne(e.amount||e.each)||0,n=n&&g<0?Ru(n):n}return g=(p[f]-p.min)/p.max||0,be(p.b+(n?n(g):g)*p.v)+p.u}},ko=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=be(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Qn(n)?0:Ne(n))}},vu=function(t,e){var n=Be(t),i,s;return!n&&Un(t)&&(i=n=t.radius||gn,t.values?(t=_n(t.values),(s=!Qn(t[0]))&&(i*=i)):t=ko(t.increment)),vi(e,n?ue(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=gn,h=0,u=t.length,f,d;u--;)s?(f=t[u].x-o,d=t[u].y-l,f=f*f+d*d):f=Math.abs(t[u]-o),f<c&&(c=f,h=u);return h=!i||c<=i?t[h]:a,s||h===a||Qn(a)?h:h+Ne(a)}:ko(t))},Mu=function(t,e,n,i){return vi(Be(t)?!e:n===!0?!!(n=0):!i,function(){return Be(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},ud=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},fd=function(t,e){return function(n){return t(parseFloat(n))+(e||Ne(n))}},dd=function(t,e,n){return yu(t,e,0,1,n)},xu=function(t,e,n){return vi(n,function(i){return t[~~e(i)]})},pd=function r(t,e,n){var i=e-t;return Be(t)?xu(t,r(0,t.length),e):vi(n,function(s){return(i+(s-t)%i)%i+t})},md=function r(t,e,n){var i=e-t,s=i*2;return Be(t)?xu(t,r(0,t.length-1),e):vi(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},gs=function(t){for(var e=0,n="",i,s,a,o;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),o=t.charAt(i+7)==="[",s=t.substr(i+7,a-i-7).match(o?iu:Uo),n+=t.substr(e,i-e)+Mu(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},yu=function(t,e,n,i,s){var a=e-t,o=i-n;return vi(s,function(l){return n+((l-t)/a*o||0)})},gd=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var a=Re(t),o={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Be(t)&&!Be(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(_){_*=u;var g=Math.min(f,~~_);return h[g](_-g)},n=e}else i||(t=Yi(Be(t)?[]:{},t));if(!h){for(l in e)ul.call(o,t,l,"get",e[l]);s=function(_){return ml(_,o)||(a?t.p:t)}}}return vi(n,s)},Gl=function(t,e,n){var i=t.labels,s=gn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},sn=function(t,e,n){var i=t.vars,s=i[e],a=re,o=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&ui.length&&da(),o&&(re=o),h=l?s.apply(c,l):s.call(c),re=a,h},is=function(t){return gi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Oe),t.progress()<1&&sn(t,"onInterrupt"),t},Sr,Su=[],Eu=function(t){if(t)if(t=!t.name&&t.default||t,sl()||t.headless){var e=t.name,n=ue(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ms,render:ml,add:ul,kill:Dd,modifier:Ld,rawVars:0},a={targetTest:0,get:0,getSetter:pl,aliases:{},register:0};if(Fr(),t!==i){if(tn[e])return;An(i,An(pa(t,s),a)),Yi(i.prototype,Yi(s,pa(t,a))),tn[i.prop=e]=i,t.targetTest&&(la.push(i),ll[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}au(e,i),t.register&&t.register(Je,i,Ze)}else Su.push(t)},$t=255,rs={aqua:[0,$t,$t],lime:[0,$t,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,$t],navy:[0,0,128],white:[$t,$t,$t],olive:[128,128,0],yellow:[$t,$t,0],orange:[$t,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[$t,0,0],pink:[$t,192,203],cyan:[0,$t,$t],transparent:[$t,$t,$t,0]},za=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*$t+.5|0},Tu=function(t,e,n){var i=t?Qn(t)?[t>>16,t>>8&$t,t&$t]:0:rs.black,s,a,o,l,c,h,u,f,d,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),rs[t])i=rs[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&$t,i&$t,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&$t,t&$t]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Uo),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=za(l+1/3,s,a),i[1]=za(l,s,a),i[2]=za(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(eu),n&&i.length<4&&(i[3]=1),i}else i=t.match(Uo)||rs.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/$t,a=i[1]/$t,o=i[2]/$t,u=Math.max(s,a,o),f=Math.min(s,a,o),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===s?(a-o)/d+(a<o?6:0):u===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},bu=function(t){var e=[],n=[],i=-1;return t.split(fi).forEach(function(s){var a=s.match(yr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},zl=function(t,e,n){var i="",s=(t+i).match(fi),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return t;if(s=s.map(function(f){return(f=Tu(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=bu(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(fi,"1").split(yr),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(fi),u=c.length-1;o<u;o++)i+=c[o]+s[o];return i+c[u]},fi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in rs)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),_d=/hsl[a]?\(/,wu=function(t){var e=t.join(" "),n;if(fi.lastIndex=0,fi.test(e))return n=_d.test(e),t[1]=zl(t[1],n),t[0]=zl(t[0],n,bu(t[1])),!0},_s,en=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,u,f,d,_=function g(p){var m=r()-i,x=p===!0,A,S,T,M;if((m>t||m<0)&&(n+=m-e),i+=m,T=i-n,A=T-a,(A>0||x)&&(M=++u.frame,f=T-u.time*1e3,u.time=T=T/1e3,a+=A+(A>=s?4:s-A),S=1),x||(l=c(g)),S)for(d=0;d<o.length;d++)o[d](T,f,M,p)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){ru&&(!No&&sl()&&(bn=No=window,al=bn.document||{},on.gsap=Je,(bn.gsapVersions||(bn.gsapVersions=[])).push(Je.version),su(fa||bn.GreenSockGlobals||!bn.gsap&&bn||{}),Su.forEach(Eu)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(p){return setTimeout(p,a-u.time*1e3+1|0)},_s=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),_s=0,c=ms},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),a=u.time*1e3+s},add:function(p,m,x){var A=m?function(S,T,M,E){p(S,T,M,E),u.remove(A)}:p;return u.remove(p),o[x?"unshift":"push"](A),Fr(),A},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},u}(),Fr=function(){return!_s&&en.wake()},Yt={},Ad=/^[\d.\-M][\d.\-,\s]/,vd=/["']/g,Md=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(vd,"").trim():+c,i=l.substr(o+1).trim();return e},xd=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},yd=function(t){var e=(t+"").split("("),n=Yt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Md(e[1])]:xd(t).split(",").map(hu)):Yt._CE&&Ad.test(t)?Yt._CE("",t):n},Ru=function(t){return function(e){return 1-t(1-e)}},Cu=function r(t,e){for(var n=t._first,i;n;)n instanceof He?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},zi=function(t,e){return t&&(ue(t)?t:Yt[t]||yd(t))||e},Qi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Xe(t,function(o){Yt[o]=on[o]=s,Yt[a=o.toLowerCase()]=n;for(var l in s)Yt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Yt[o+"."+l]=s[l]}),s},Pu=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},ka=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Io*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Jf((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Pu(o);return s=Io/s,l.config=function(c,h){return r(t,c,h)},l},Va=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Pu(n);return i.config=function(s){return r(t,s)},i};Xe("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Qi(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Yt.Linear.easeNone=Yt.none=Yt.Linear.easeIn;Qi("Elastic",ka("in"),ka("out"),ka());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Qi("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Qi("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Qi("Circ",function(r){return-($h(1-r*r)-1)});Qi("Sine",function(r){return r===1?1:-qf(r*Zf)+1});Qi("Back",Va("in"),Va("out"),Va());Yt.SteppedEase=Yt.steps=on.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-te;return function(o){return((i*Ts(0,a,o)|0)+s)*n}}};Nr.ease=Yt["quad.out"];Xe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return cl+=r+","+r+"Params,"});var Lu=function(t,e){this.id=Qf++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:lu,this.set=e?e.getSetter:pl},As=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Br(this,+e.duration,1,1),this.data=e.data,re&&(this._ctx=re,re.data.push(this)),_s||en.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Br(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Fr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ra(this,n),!s._dp||s.parent||du(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Rn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===te||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),cu(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Bl(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Bl(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Or(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-te?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ma(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-te?0:this._rts,this.totalTime(Ts(-Math.abs(this._delay),this._tDur,s),i!==!1),wa(this),id(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Fr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==te&&(this._tTime-=te)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Rn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Ye(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ma(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=$f);var i=Oe;return Oe=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Oe=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Fl(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Fl(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(fn(this,n),Ye(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ye(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-te:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-te,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-te)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(s){var a=ue(n)?n:uu,o=function(){var c=i.then;i.then=null,ue(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){is(this)},r}();An(As.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-te,_prom:0,_ps:!1,_rts:1});var He=function(r){Kh(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ye(n.sortChildren),oe&&Rn(n.parent||oe,Yn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&pu(Yn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return os(0,arguments,this),this},e.from=function(i,s,a){return os(1,arguments,this),this},e.fromTo=function(i,s,a,o){return os(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,as(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ae(i,s,fn(this,a),1),this},e.call=function(i,s,a){return Rn(this,Ae.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Ae(i,a,fn(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,as(a).immediateRender=Ye(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},e.staggerFromTo=function(i,s,a,o,l,c,h,u){return o.startAt=a,as(o).immediateRender=Ye(o.immediateRender),this.staggerTo(i,s,o,l,c,h,u)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:be(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,p,m,x,A,S,T,M,E;if(this!==oe&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),f=h,S=this._start,A=this._ts,m=!A,u&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(M=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=be(h%p),h===l?(g=this._repeat,f=c):(g=~~(h/p),g&&g===h/p&&(f=c,g--),f>c&&(f=c)),T=Or(this._tTime,p),!o&&this._tTime&&T!==g&&this._tTime-T*p-this._dur<=0&&(T=g),M&&g&1&&(f=c-f,E=1),g!==T&&!this._lock){var D=M&&T&1,U=D===(M&&g&1);if(g<T&&(D=!D),o=D?0:h%c?c:h,this._lock=1,this.render(o||(E?0:be(g*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&sn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,U&&(this._lock=2,o=D?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Cu(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=od(this,be(o),be(f)),x&&(h-=f-(f=x._start))),this._tTime=h,this._time=f,this._act=!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!s&&!g&&(sn(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!m){x=0,_&&(h+=this._zTime=-te);break}}d=_}else{d=this._last;for(var v=i<0?i:f;d;){if(_=d._prev,(d._act||v<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,a||Oe&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!m){x=0,_&&(h+=this._zTime=v?-te:te);break}}d=_}}if(x&&!s&&(this.pause(),x.render(f>=o?0:-te)._zTime=f>=o?1:-1,this._ts))return this._start=S,wa(this),this.render(i,s,a);this._onUpdate&&!s&&sn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(S===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&gi(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(sn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(Qn(s)||(s=fn(this,s,i)),!(i instanceof As)){if(Be(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Re(i))return this.addLabel(i,s);if(ue(i))i=Ae.delayedCall(0,i);else return this}return this!==i?Rn(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-gn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ae?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Re(i)?this.removeLabel(i):ue(i)?this.killTweensOf(i):(ba(this,i),i===this._recent&&(this._recent=this._last),Gi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=be(en.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=fn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=Ae.delayedCall(0,s||ms,a);return o.data="isPause",this._hasPause=1,Rn(this,o,fn(this,i))},e.removePause=function(i){var s=this._first;for(i=fn(this,i);s;)s._start===i&&s.data==="isPause"&&gi(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ai!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=_n(i),l=this._first,c=Qn(s),h;l;)l instanceof Ae?td(l._targets,o)&&(c?(!ai||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=fn(a,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,_=Ae.to(a,An({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||te,onStart:function(){if(a.pause(),!d){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&Br(_,p,0,1).render(_._time,!0,!0),d=1}h&&h.apply(_,u||[])}},s));return f?_.render(0):_},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,An({startAt:{time:fn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Gl(this,fn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Gl(this,fn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+te)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Gi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Gi(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=gn,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Rn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Br(a,a===oe&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(oe._ts&&(cu(oe,ma(i,oe)),ou=en.frame),en.frame>=Nl){Nl+=an.autoSleep||120;var s=oe._first;if((!s||!s._ts)&&an.autoSleep&&en._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||en.sleep()}}},t}(As);An(He.prototype,{_lock:0,_hasPause:0,_forcing:0});var Sd=function(t,e,n,i,s,a,o){var l=new Ze(this._pt,t,e,0,1,Bu,null,s),c=0,h=0,u,f,d,_,g,p,m,x;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=gs(i)),a&&(x=[n,i],a(x,t,e),n=x[0],i=x[1]),f=n.match(Fa)||[];u=Fa.exec(i);)_=u[0],g=i.substring(c,u.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[h++]&&(p=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:p,c:_.charAt(1)==="="?wr(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=Fa.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(nu.test(i)||m)&&(l.e=0),this._pt=l,l},ul=function(t,e,n,i,s,a,o,l,c,h){ue(i)&&(i=i(s||0,t,a));var u=t[e],f=n!=="get"?n:ue(u)?c?t[e.indexOf("set")||!ue(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,d=ue(u)?c?Rd:Nu:dl,_;if(Re(i)&&(~i.indexOf("random(")&&(i=gs(i)),i.charAt(1)==="="&&(_=wr(f,i)+(Ne(f)||0),(_||_===0)&&(i=_))),!h||f!==i||Vo)return!isNaN(f*i)&&i!==""?(_=new Ze(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?Pd:Ou,0,d),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!u&&!(e in t)&&ol(e,i),Sd.call(this,t,e,f,i,d,l||an.stringFilter,c))},Ed=function(t,e,n,i,s){if(ue(t)&&(t=ls(t,s,e,n,i)),!Un(t)||t.style&&t.nodeType||Be(t)||tu(t))return Re(t)?ls(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=ls(t[o],s,e,n,i);return a},Du=function(t,e,n,i,s,a){var o,l,c,h;if(tn[t]&&(o=new tn[t]).init(s,o.rawVars?e[t]:Ed(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Ze(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Sr))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},ai,Vo,fl=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=t._dur,g=t._startAt,p=t._targets,m=t.parent,x=m&&m.data==="nested"?m.vars.targets:p,A=t._overwrite==="auto"&&!il,S=t.timeline,T,M,E,D,U,v,w,V,Q,I,F,B,X;if(S&&(!f||!s)&&(s="none"),t._ease=zi(s,Nr.ease),t._yEase=u?Ru(zi(u===!0?s:u,Nr.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!S&&!!i.runBackwards,!S||f&&!i.stagger){if(V=p[0]?Fi(p[0]).harness:0,B=V&&i[V.prop],T=pa(i,ll),g&&(g._zTime<0&&g.progress(1),e<0&&h&&o&&!d?g.render(-1,!0):g.revert(h&&_?oa:Kf),g._lazy=0),a){if(gi(t._startAt=Ae.set(p,An({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Ye(l),startAt:null,delay:0,onUpdate:c&&function(){return sn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Oe||!o&&!d)&&t._startAt.revert(oa),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(o=!1),E=An({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Ye(l),immediateRender:o,stagger:0,parent:m},T),B&&(E[V.prop]=B),gi(t._startAt=Ae.set(p,E)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Oe?t._startAt.revert(oa):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,te,te);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Ye(l)||l&&!_,M=0;M<p.length;M++){if(U=p[M],w=U._gsap||hl(p)[M]._gsap,t._ptLookup[M]=I={},Oo[w.id]&&ui.length&&da(),F=x===p?M:x.indexOf(U),V&&(Q=new V).init(U,B||T,t,F,x)!==!1&&(t._pt=D=new Ze(t._pt,U,Q.name,0,1,Q.render,Q,0,Q.priority),Q._props.forEach(function(Y){I[Y]=D}),Q.priority&&(v=1)),!V||B)for(E in T)tn[E]&&(Q=Du(E,T,t,F,U,x))?Q.priority&&(v=1):I[E]=D=ul.call(t,U,E,"get",T[E],F,x,0,i.stringFilter);t._op&&t._op[M]&&t.kill(U,t._op[M]),A&&t._pt&&(ai=t,oe.killTweensOf(U,I,t.globalTime(e)),X=!t.parent,ai=0),t._pt&&l&&(Oo[w.id]=1)}v&&Fu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!X,f&&e<=0&&S.render(gn,!0,!0)},Td=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(h=f[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Vo=1,t.vars[e]="+=0",fl(t,o),Vo=0,l?ps(e+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=me(n)+Ne(u.e)),u.b&&(u.b=h.s+Ne(u.b))},bd=function(t,e){var n=t[0]?Fi(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=Yi({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},wd=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(Be(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},ls=function(t,e,n,i,s){return ue(t)?t.call(e,n,i,s):Re(t)&&~t.indexOf("random(")?gs(t):t},Iu=cl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Uu={};Xe(Iu+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Uu[r]=1});var Ae=function(r){Kh(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:as(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,x=i.parent||oe,A=(Be(n)||tu(n)?Qn(n[0]):"length"in i)?[n]:_n(n),S,T,M,E,D,U,v,w;if(o._targets=A.length?hl(A):ps("GSAP target "+n+" not found. https://gsap.com",!an.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||f||Rs(c)||Rs(h)){if(i=o.vars,S=o.timeline=new He({data:"nested",defaults:g||{},targets:x&&x.data==="nested"?x.vars.targets:A}),S.kill(),S.parent=S._dp=Yn(o),S._start=0,f||Rs(c)||Rs(h)){if(E=A.length,v=f&&Au(f),Un(f))for(D in f)~Iu.indexOf(D)&&(w||(w={}),w[D]=f[D]);for(T=0;T<E;T++)M=pa(i,Uu),M.stagger=0,m&&(M.yoyoEase=m),w&&Yi(M,w),U=A[T],M.duration=+ls(c,Yn(o),T,U,A),M.delay=(+ls(h,Yn(o),T,U,A)||0)-o._delay,!f&&E===1&&M.delay&&(o._delay=h=M.delay,o._start+=h,M.delay=0),S.to(U,M,v?v(T,U,A):0),S._ease=Yt.none;S.duration()?c=h=0:o.timeline=0}else if(_){as(An(S.vars.defaults,{ease:"none"})),S._ease=zi(_.ease||i.ease||"none");var V=0,Q,I,F;if(Be(_))_.forEach(function(B){return S.to(A,B,">")}),S.duration();else{M={};for(D in _)D==="ease"||D==="easeEach"||wd(D,_[D],M,_.easeEach);for(D in M)for(Q=M[D].sort(function(B,X){return B.t-X.t}),V=0,T=0;T<Q.length;T++)I=Q[T],F={ease:I.e,duration:(I.t-(T?Q[T-1].t:0))/100*c},F[D]=I.v,S.to(A,F,V),V+=F.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return d===!0&&!il&&(ai=Yn(o),oe.killTweensOf(A),ai=0),Rn(x,Yn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!_&&o._start===be(x._time)&&Ye(u)&&rd(Yn(o))&&x.data!=="nested")&&(o._tTime=-te,o.render(Math.max(0,-h)||0)),p&&pu(Yn(o),p),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-te&&!h?l:i<te?0:i,f,d,_,g,p,m,x,A,S;if(!c)ad(this,i,s,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=u,A=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,a);if(f=be(u%g),u===l?(_=this._repeat,f=c):(_=~~(u/g),_&&_===be(u/g)&&(f=c,_--),f>c&&(f=c)),m=this._yoyo&&_&1,m&&(S=this._yEase,f=c-f),p=Or(this._tTime,g),f===o&&!a&&this._initted&&_===p)return this._tTime=u,this;_!==p&&(A&&this._yEase&&Cu(A,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==g&&this._initted&&(this._lock=a=1,this.render(be(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(mu(this,h?i:f,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(S||this._ease)(f/c),this._from&&(this.ratio=x=1-x),f&&!o&&!s&&!_&&(sn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;A&&A.render(i<0?i:A._dur*A._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Bo(this,i,s,a),sn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&sn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Bo(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&gi(this,1),!s&&!(h&&!o)&&(u||o||m)&&(sn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){_s||en.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||fl(this,c),h=this._ease(c/this._dur),Td(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(Ra(this,0),this.parent||fu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?is(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ai&&ai.vars.overwrite!==!0)._first||is(this),this.parent&&a!==this.timeline.totalDuration()&&Br(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?_n(i):o,c=this._ptLookup,h=this._pt,u,f,d,_,g,p,m;if((!s||s==="all")&&nd(o,l))return s==="all"&&(this._pt=0),is(this);for(u=this._op=this._op||[],s!=="all"&&(Re(s)&&(g={},Xe(s,function(x){return g[x]=1}),s=g),s=bd(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],s==="all"?(u[m]=s,_=f,d={}):(d=u[m]=u[m]||{},_=s);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&ba(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&h&&is(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return os(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return os(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return oe.killTweensOf(i,s,a)},t}(As);An(Ae.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Xe("staggerTo,staggerFrom,staggerFromTo",function(r){Ae[r]=function(){var t=new He,e=Go.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var dl=function(t,e,n){return t[e]=n},Nu=function(t,e,n){return t[e](n)},Rd=function(t,e,n,i){return t[e](i.fp,n)},Cd=function(t,e,n){return t.setAttribute(e,n)},pl=function(t,e){return ue(t[e])?Nu:rl(t[e])&&t.setAttribute?Cd:dl},Ou=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Pd=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Bu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},ml=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Ld=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},Dd=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?ba(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Id=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Fu=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},Ze=function(){function r(e,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Ou,this.d=l||this,this.set=c||dl,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Id,this.m=n,this.mt=s,this.tween=i},r}();Xe(cl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return ll[r]=1});on.TweenMax=on.TweenLite=Ae;on.TimelineLite=on.TimelineMax=He;oe=new He({sortChildren:!1,defaults:Nr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});an.stringFilter=wu;var ki=[],ca={},Ud=[],kl=0,Nd=0,Ha=function(t){return(ca[t]||Ud).map(function(e){return e()})},Ho=function(){var t=Date.now(),e=[];t-kl>2&&(Ha("matchMediaInit"),ki.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=bn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Ha("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),kl=t,Ha("matchMedia"))},Gu=function(){function r(e,n){this.selector=n&&zo(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Nd++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){ue(n)&&(s=i,i=n,n=ue);var a=this,o=function(){var c=re,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=zo(s)),re=a,u=i.apply(a,arguments),ue(u)&&a._r.push(u),re=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===ue?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=re;re=null,n(this),re=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ae&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof He?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ae)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=ki.length;a--;)ki[a].id===this.id&&ki.splice(a,1)},t.revert=function(n){this.kill(n||{})},r}(),Od=function(){function r(e){this.contexts=[],this.scope=e,re&&re.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Un(n)||(n={matches:n});var a=new Gu(0,s||this.scope),o=a.conditions={},l,c,h;re&&!a.selector&&(a.selector=re.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=bn.matchMedia(n[c]),l&&(ki.indexOf(a)<0&&ki.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Ho):l.addEventListener("change",Ho)));return h&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),ga={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Eu(i)})},timeline:function(t){return new He(t)},getTweensOf:function(t,e){return oe.getTweensOf(t,e)},getProperty:function(t,e,n,i){Re(t)&&(t=_n(t)[0]);var s=Fi(t||{}).get,a=n?uu:hu;return n==="native"&&(n=""),t&&(e?a((tn[e]&&tn[e].get||s)(t,e,n,i)):function(o,l,c){return a((tn[o]&&tn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=_n(t),t.length>1){var i=t.map(function(h){return Je.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var a=tn[e],o=Fi(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;Sr._pt=0,u.init(t,n?h+n:h,Sr,0,[t]),u.render(1,u),Sr._pt&&ml(1,Sr)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=Je.to(t,Yi((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return oe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=zi(t.ease,Nr.ease)),Ol(Nr,t||{})},config:function(t){return Ol(an,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!tn[o]&&!on[o]&&ps(e+" effect requires "+o+" plugin.")}),Ga[e]=function(o,l,c){return n(_n(o),An(l||{},s),c)},a&&(He.prototype[e]=function(o,l,c){return this.add(Ga[e](o,Un(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Yt[t]=zi(e)},parseEase:function(t,e){return arguments.length?zi(t,e):Yt},getById:function(t){return oe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new He(t),i,s;for(n.smoothChildTiming=Ye(t.smoothChildTiming),oe.remove(n),n._dp=0,n._time=n._tTime=oe._time,i=oe._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ae&&i.vars.onComplete===i._targets[0]))&&Rn(n,i,i._start-i._delay),i=s;return Rn(oe,n,0),n},context:function(t,e){return t?new Gu(t,e):re},matchMedia:function(t){return new Od(t)},matchMediaRefresh:function(){return ki.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ho()},addEventListener:function(t,e){var n=ca[t]||(ca[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ca[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:pd,wrapYoyo:md,distribute:Au,random:Mu,snap:vu,normalize:dd,getUnit:Ne,clamp:cd,splitColor:Tu,toArray:_n,selector:zo,mapRange:yu,pipe:ud,unitize:fd,interpolate:gd,shuffle:_u},install:su,effects:Ga,ticker:en,updateRoot:He.updateRoot,plugins:tn,globalTimeline:oe,core:{PropTween:Ze,globals:au,Tween:Ae,Timeline:He,Animation:As,getCache:Fi,_removeLinkedListItem:ba,reverting:function(){return Oe},context:function(t){return t&&re&&(re.data.push(t),t._ctx=re),re},suppressOverwrites:function(t){return il=t}}};Xe("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ga[r]=Ae[r]});en.add(He.updateRoot);Sr=ga.to({},{duration:0});var Bd=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Fd=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Bd(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},Wa=function(t,e){return{name:t,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Re(s)&&(l={},Xe(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Fd(o,s)}}}},Je=ga.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Oe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Wa("roundProps",ko),Wa("modifiers"),Wa("snap",vu))||ga;Ae.version=He.version=Je.version="3.12.5";ru=1;sl()&&Fr();Yt.Power0;Yt.Power1;Yt.Power2;Yt.Power3;Yt.Power4;Yt.Linear;Yt.Quad;Yt.Cubic;Yt.Quart;Yt.Quint;Yt.Strong;Yt.Elastic;Yt.Back;Yt.SteppedEase;Yt.Bounce;Yt.Sine;Yt.Expo;Yt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Vl,oi,Rr,gl,Oi,Hl,_l,Gd=function(){return typeof window<"u"},qn={},Li=180/Math.PI,Cr=Math.PI/180,$i=Math.atan2,Wl=1e8,Al=/([A-Z])/g,zd=/(left|right|width|margin|padding|x)/i,kd=/[\s,\(]\S/,Dn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Wo=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Vd=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Hd=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Wd=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},zu=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},ku=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Yd=function(t,e,n){return t.style[e]=n},Xd=function(t,e,n){return t.style.setProperty(e,n)},Zd=function(t,e,n){return t._gsap[e]=n},Qd=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},qd=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Jd=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},le="transform",Qe=le+"Origin",jd=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in qn&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Dn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Xn(i,o)}):this.tfm[t]=a.x?a[t]:Xn(i,t),t===Qe&&(this.tfm.zOrigin=a.zOrigin);else return Dn.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(le)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Qe,e,"")),t=le}(s||e)&&this.props.push(t,e,s[t])},Vu=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Kd=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Al,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=_l(),(!s||!s.isStart)&&!n[le]&&(Vu(n),i.zOrigin&&n[Qe]&&(n[Qe]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Hu=function(t,e){var n={target:t,props:[],revert:Kd,save:jd};return t._gsap||Je.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},Wu,Yo=function(t,e){var n=oi.createElementNS?oi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):oi.createElement(t);return n&&n.style?n:oi.createElement(t)},In=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Al,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Gr(e)||e,1)||""},Yl="O,Moz,ms,Ms,Webkit".split(","),Gr=function(t,e,n){var i=e||Oi,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Yl[a]+t in s););return a<0?null:(a===3?"ms":a>=0?Yl[a]:"")+t},Xo=function(){Gd()&&window.document&&(Vl=window,oi=Vl.document,Rr=oi.documentElement,Oi=Yo("div")||{style:{}},Yo("div"),le=Gr(le),Qe=le+"Origin",Oi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Wu=!!Gr("perspective"),_l=Je.core.reverting,gl=1)},Ya=function r(t){var e=Yo("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(Rr.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Rr.removeChild(e),this.style.cssText=s,a},Xl=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Yu=function(t){var e;try{e=t.getBBox()}catch{e=Ya.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Ya||(e=Ya.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Xl(t,["x","cx","x1"])||0,y:+Xl(t,["y","cy","y1"])||0,width:0,height:0}:e},Xu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Yu(t))},Xi=function(t,e){if(e){var n=t.style,i;e in qn&&e!==Qe&&(e=le),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Al,"-$1").toLowerCase())):n.removeAttribute(e)}},li=function(t,e,n,i,s,a){var o=new Ze(t._pt,e,n,0,1,a?ku:zu);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Zl={deg:1,rad:1,turn:1},$d={grid:1,flex:1},_i=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Oi.style,l=zd.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",_,g,p,m;if(i===a||!s||Zl[i]||Zl[a])return s;if(a!=="px"&&!f&&(s=r(t,e,n,"px")),m=t.getCTM&&Xu(t),(d||a==="%")&&(qn[e]||~e.indexOf("adius")))return _=m?t.getBBox()[l?"width":"height"]:t[h],me(d?s/_*u:s/100*_);if(o[l?"width":"height"]=u+(f?a:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===oi||!g.appendChild)&&(g=oi.body),p=g._gsap,p&&d&&p.width&&l&&p.time===en.time&&!p.uncache)return me(s/p.width*u);if(d&&(e==="height"||e==="width")){var x=t.style[e];t.style[e]=u+i,_=t[h],x?t.style[e]=x:Xi(t,e)}else(d||a==="%")&&!$d[In(g,"display")]&&(o.position=In(t,"position")),g===t&&(o.position="static"),g.appendChild(Oi),_=Oi[h],g.removeChild(Oi),o.position="absolute";return l&&d&&(p=Fi(g),p.time=en.time,p.width=g[h]),me(f?_*s/u:_&&s?u/_*s:0)},Xn=function(t,e,n,i){var s;return gl||Xo(),e in Dn&&e!=="transform"&&(e=Dn[e],~e.indexOf(",")&&(e=e.split(",")[0])),qn[e]&&e!=="transform"?(s=Ms(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Aa(In(t,Qe))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=_a[e]&&_a[e](t,e,n)||In(t,e)||lu(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?_i(t,e,s,n)+n:s},tp=function(t,e,n,i){if(!n||n==="none"){var s=Gr(e,t,1),a=s&&In(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=In(t,"borderTopColor"))}var o=new Ze(this._pt,t.style,e,0,1,Bu),l=0,c=0,h,u,f,d,_,g,p,m,x,A,S,T;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(g=t.style[e],t.style[e]=i,i=In(t,e)||i,g?t.style[e]=g:Xi(t,e)),h=[n,i],wu(h),n=h[0],i=h[1],f=n.match(yr)||[],T=i.match(yr)||[],T.length){for(;u=yr.exec(i);)p=u[0],x=i.substring(l,u.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(d=parseFloat(g)||0,S=g.substr((d+"").length),p.charAt(1)==="="&&(p=wr(d,p)+S),m=parseFloat(p),A=p.substr((m+"").length),l=yr.lastIndex-A.length,A||(A=A||an.units[e]||S,l===i.length&&(i+=A,o.e+=A)),S!==A&&(d=_i(t,e,g,A)||0),o._pt={_next:o._pt,p:x||c===1?x:",",s:d,c:m-d,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?ku:zu;return nu.test(i)&&(o.e=0),this._pt=o,o},Ql={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ep=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Ql[n]||n,e[1]=Ql[i]||i,e.join(" ")},np=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],qn[o]&&(l=1,o=o==="transformOrigin"?Qe:le),Xi(n,o);l&&(Xi(n,le),a&&(a.svg&&n.removeAttribute("transform"),Ms(n,1),a.uncache=1,Vu(i)))}},_a={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new Ze(t._pt,e,n,0,0,np);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},vs=[1,0,0,1,0,0],Zu={},Qu=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ql=function(t){var e=In(t,le);return Qu(e)?vs:e.substr(7).match(eu).map(me)},vl=function(t,e){var n=t._gsap||Fi(t),i=t.style,s=ql(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?vs:s):(s===vs&&!t.offsetParent&&t!==Rr&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,o=t.nextElementSibling,Rr.appendChild(t)),s=ql(t),l?i.display=l:Xi(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Rr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Zo=function(t,e,n,i,s,a){var o=t._gsap,l=s||vl(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],x=l[5],A=e.split(" "),S=parseFloat(A[0])||0,T=parseFloat(A[1])||0,M,E,D,U;n?l!==vs&&(E=d*p-_*g)&&(D=S*(p/E)+T*(-g/E)+(g*x-p*m)/E,U=S*(-_/E)+T*(d/E)-(d*x-_*m)/E,S=D,T=U):(M=Yu(t),S=M.x+(~A[0].indexOf("%")?S/100*M.width:S),T=M.y+(~(A[1]||A[0]).indexOf("%")?T/100*M.height:T)),i||i!==!1&&o.smooth?(m=S-c,x=T-h,o.xOffset=u+(m*d+x*g)-m,o.yOffset=f+(m*_+x*p)-x):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=T,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Qe]="0px 0px",a&&(li(a,o,"xOrigin",c,S),li(a,o,"yOrigin",h,T),li(a,o,"xOffset",u,o.xOffset),li(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",S+" "+T)},Ms=function(t,e){var n=t._gsap||new Lu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=In(t,Qe)||"0",h,u,f,d,_,g,p,m,x,A,S,T,M,E,D,U,v,w,V,Q,I,F,B,X,Y,Z,j,K,ot,At,z,J;return h=u=f=g=p=m=x=A=S=0,d=_=1,n.svg=!!(t.getCTM&&Xu(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[le]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[le]!=="none"?l[le]:"")),i.scale=i.rotate=i.translate="none"),E=vl(t,n.svg),n.svg&&(n.uncache?(Y=t.getBBox(),c=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),Zo(t,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,E)),T=n.xOrigin||0,M=n.yOrigin||0,E!==vs&&(w=E[0],V=E[1],Q=E[2],I=E[3],h=F=E[4],u=B=E[5],E.length===6?(d=Math.sqrt(w*w+V*V),_=Math.sqrt(I*I+Q*Q),g=w||V?$i(V,w)*Li:0,x=Q||I?$i(Q,I)*Li+g:0,x&&(_*=Math.abs(Math.cos(x*Cr))),n.svg&&(h-=T-(T*w+M*Q),u-=M-(T*V+M*I))):(J=E[6],At=E[7],j=E[8],K=E[9],ot=E[10],z=E[11],h=E[12],u=E[13],f=E[14],D=$i(J,ot),p=D*Li,D&&(U=Math.cos(-D),v=Math.sin(-D),X=F*U+j*v,Y=B*U+K*v,Z=J*U+ot*v,j=F*-v+j*U,K=B*-v+K*U,ot=J*-v+ot*U,z=At*-v+z*U,F=X,B=Y,J=Z),D=$i(-Q,ot),m=D*Li,D&&(U=Math.cos(-D),v=Math.sin(-D),X=w*U-j*v,Y=V*U-K*v,Z=Q*U-ot*v,z=I*v+z*U,w=X,V=Y,Q=Z),D=$i(V,w),g=D*Li,D&&(U=Math.cos(D),v=Math.sin(D),X=w*U+V*v,Y=F*U+B*v,V=V*U-w*v,B=B*U-F*v,w=X,F=Y),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=me(Math.sqrt(w*w+V*V+Q*Q)),_=me(Math.sqrt(B*B+J*J)),D=$i(F,B),x=Math.abs(D)>2e-4?D*Li:0,S=z?1/(z<0?-z:z):0),n.svg&&(X=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Qu(In(t,le)),X&&t.setAttribute("transform",X))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=me(d),n.scaleY=me(_),n.rotation=me(g)+o,n.rotationX=me(p)+o,n.rotationY=me(m)+o,n.skewX=x+o,n.skewY=A+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Qe]=Aa(c)),n.xOffset=n.yOffset=0,n.force3D=an.force3D,n.renderTransform=n.svg?rp:Wu?qu:ip,n.uncache=0,n},Aa=function(t){return(t=t.split(" "))[0]+" "+t[1]},Xa=function(t,e,n){var i=Ne(e);return me(parseFloat(e)+parseFloat(_i(t,"x",n+"px",i)))+i},ip=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,qu(t,e)},Si="0deg",Qr="0px",Ei=") ",qu=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,x=n.target,A=n.zOrigin,S="",T=m==="auto"&&t&&t!==1||m===!0;if(A&&(u!==Si||h!==Si)){var M=parseFloat(h)*Cr,E=Math.sin(M),D=Math.cos(M),U;M=parseFloat(u)*Cr,U=Math.cos(M),a=Xa(x,a,E*U*-A),o=Xa(x,o,-Math.sin(M)*-A),l=Xa(x,l,D*U*-A+A)}p!==Qr&&(S+="perspective("+p+Ei),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(T||a!==Qr||o!==Qr||l!==Qr)&&(S+=l!==Qr||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ei),c!==Si&&(S+="rotate("+c+Ei),h!==Si&&(S+="rotateY("+h+Ei),u!==Si&&(S+="rotateX("+u+Ei),(f!==Si||d!==Si)&&(S+="skew("+f+", "+d+Ei),(_!==1||g!==1)&&(S+="scale("+_+", "+g+Ei),x.style[le]=S||"translate(0, 0)"},rp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,x=n.forceCSS,A=parseFloat(a),S=parseFloat(o),T,M,E,D,U;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Cr,c*=Cr,T=Math.cos(l)*u,M=Math.sin(l)*u,E=Math.sin(l-c)*-f,D=Math.cos(l-c)*f,c&&(h*=Cr,U=Math.tan(c-h),U=Math.sqrt(1+U*U),E*=U,D*=U,h&&(U=Math.tan(h),U=Math.sqrt(1+U*U),T*=U,M*=U)),T=me(T),M=me(M),E=me(E),D=me(D)):(T=u,D=f,M=E=0),(A&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(A=_i(d,"x",a,"px"),S=_i(d,"y",o,"px")),(_||g||p||m)&&(A=me(A+_-(_*T+g*E)+p),S=me(S+g-(_*M+g*D)+m)),(i||s)&&(U=d.getBBox(),A=me(A+i/100*U.width),S=me(S+s/100*U.height)),U="matrix("+T+","+M+","+E+","+D+","+A+","+S+")",d.setAttribute("transform",U),x&&(d.style[le]=U)},sp=function(t,e,n,i,s){var a=360,o=Re(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Li:1),c=l-i,h=i+c+"deg",u,f;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*Wl)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*Wl)%a-~~(c/a)*a)),t._pt=f=new Ze(t._pt,e,n,i,c,Vd),f.e=h,f.u="deg",t._props.push(n),f},Jl=function(t,e){for(var n in e)t[n]=e[n];return t},ap=function(t,e,n){var i=Jl({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[le]=e,o=Ms(n,1),Xi(n,le),n.setAttribute("transform",c)):(c=getComputedStyle(n)[le],a[le]=e,o=Ms(n,1),a[le]=c);for(l in qn)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(d=Ne(c),_=Ne(h),u=d!==_?_i(n,l,c,_):parseFloat(c),f=parseFloat(h),t._pt=new Ze(t._pt,o,l,u,f-u,Wo),t._pt.u=_||0,t._props.push(l));Jl(o,i)};Xe("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});_a[t>1?"border"+r:r]=function(o,l,c,h,u){var f,d;if(arguments.length<4)return f=a.map(function(_){return Xn(o,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},a.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,d,u)}});var Ju={name:"css",register:Xo,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,h,u,f,d,_,g,p,m,x,A,S,T,M,E,D;gl||Xo(),this.styles=this.styles||Hu(t),D=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(tn[g]&&Du(g,e,n,i,t,s)))){if(d=typeof h,_=_a[g],d==="function"&&(h=h.call(n,i,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=gs(h)),_)_(this,t,g,h,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",fi.lastIndex=0,fi.test(c)||(p=Ne(c),m=Ne(h)),m?p!==m&&(c=_i(t,g,c,m)+m):p&&(h+=p),this.add(o,"setProperty",c,h,i,s,0,0,g),a.push(g),D.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],Re(c)&&~c.indexOf("random(")&&(c=gs(c)),Ne(c+"")||c==="auto"||(c+=an.units[g]||Ne(Xn(t,g))||""),(c+"").charAt(1)==="="&&(c=Xn(t,g))):c=Xn(t,g),f=parseFloat(c),x=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),u=parseFloat(h),g in Dn&&(g==="autoAlpha"&&(f===1&&Xn(t,"visibility")==="hidden"&&u&&(f=0),D.push("visibility",0,o.visibility),li(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Dn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),A=g in qn,A){if(this.styles.save(g),S||(T=t._gsap,T.renderTransform&&!e.parseTransform||Ms(t,e.parseTransform),M=e.smoothOrigin!==!1&&T.smooth,S=this._pt=new Ze(this._pt,o,le,0,1,T.renderTransform,T,0,-1),S.dep=1),g==="scale")this._pt=new Ze(this._pt,T,"scaleY",T.scaleY,(x?wr(T.scaleY,x+u):u)-T.scaleY||0,Wo),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){D.push(Qe,0,o[Qe]),h=ep(h),T.svg?Zo(t,h,0,M,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==T.zOrigin&&li(this,T,"zOrigin",T.zOrigin,m),li(this,o,g,Aa(c),Aa(h)));continue}else if(g==="svgOrigin"){Zo(t,h,1,M,0,this);continue}else if(g in Zu){sp(this,T,g,f,x?wr(f,x+h):h);continue}else if(g==="smoothOrigin"){li(this,T,"smooth",T.smooth,h);continue}else if(g==="force3D"){T[g]=h;continue}else if(g==="transform"){ap(this,h,t);continue}}else g in o||(g=Gr(g)||g);if(A||(u||u===0)&&(f||f===0)&&!kd.test(h)&&g in o)p=(c+"").substr((f+"").length),u||(u=0),m=Ne(h)||(g in an.units?an.units[g]:p),p!==m&&(f=_i(t,g,c,m)),this._pt=new Ze(this._pt,A?T:o,g,f,(x?wr(f,x+u):u)-f,!A&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?Wd:Wo),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Hd);else if(g in o)tp.call(this,t,g,c,x?x+h:h);else if(g in t)this.add(t,g,c||t[g],x?x+h:h,i,s);else if(g!=="parseTransform"){ol(g,h);continue}A||(g in o?D.push(g,0,o[g]):D.push(g,1,c||t[g])),a.push(g)}}E&&Fu(this)},render:function(t,e){if(e.tween._time||!_l())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Xn,aliases:Dn,getSetter:function(t,e,n){var i=Dn[e];return i&&i.indexOf(",")<0&&(e=i),e in qn&&e!==Qe&&(t._gsap.x||Xn(t,"x"))?n&&Hl===n?e==="scale"?Qd:Zd:(Hl=n||{})&&(e==="scale"?qd:Jd):t.style&&!rl(t.style[e])?Yd:~e.indexOf("-")?Xd:pl(t,e)},core:{_removeProperty:Xi,_getMatrix:vl}};Je.utils.checkPrefix=Gr;Je.core.getStyleSaver=Hu;(function(r,t,e,n){var i=Xe(r+","+t+","+e,function(s){qn[s]=1});Xe(t,function(s){an.units[s]="deg",Zu[s]=1}),Dn[i[13]]=r+","+t,Xe(n,function(s){var a=s.split(":");Dn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Xe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){an.units[r]="px"});Je.registerPlugin(Ju);var Di=Je.registerPlugin(Ju)||Je;Di.core.Tween;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ml="161",tr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},er={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},op=0,jl=1,lp=2,ju=1,cp=2,Wn=3,Ai=0,qe=1,nn=2,di=0,Pr=1,Kl=2,$l=3,tc=4,hp=5,Ui=100,up=101,fp=102,ec=103,nc=104,dp=200,pp=201,mp=202,gp=203,Qo=204,qo=205,_p=206,Ap=207,vp=208,Mp=209,xp=210,yp=211,Sp=212,Ep=213,Tp=214,bp=0,wp=1,Rp=2,va=3,Cp=4,Pp=5,Lp=6,Dp=7,Ca=0,Ip=1,Up=2,pi=0,Np=1,Op=2,Bp=3,Fp=4,Gp=5,zp=6,Ku=300,zr=301,kr=302,Jo=303,jo=304,Pa=306,xs=1e3,yn=1001,Ko=1002,he=1003,ic=1004,qr=1005,We=1006,Za=1007,Bi=1008,mi=1009,kp=1010,Vp=1011,xl=1012,$u=1013,ci=1014,Cn=1015,ys=1016,tf=1017,ef=1018,Vi=1020,Hp=1021,pn=1023,Wp=1024,Yp=1025,Hi=1026,Vr=1027,Xp=1028,nf=1029,Zp=1030,rf=1031,sf=1033,Qa=33776,qa=33777,Ja=33778,ja=33779,rc=35840,sc=35841,ac=35842,oc=35843,af=36196,lc=37492,cc=37496,hc=37808,uc=37809,fc=37810,dc=37811,pc=37812,mc=37813,gc=37814,_c=37815,Ac=37816,vc=37817,Mc=37818,xc=37819,yc=37820,Sc=37821,Ka=36492,Ec=36494,Tc=36495,Qp=36283,bc=36284,wc=36285,Rc=36286,of=3e3,Wi=3001,qp=3200,Jp=3201,qi=0,jp=1,mn="",jt="srgb",Jn="srgb-linear",yl="display-p3",La="display-p3-linear",Ma="linear",ee="srgb",xa="rec709",ya="p3",nr=7680,Cc=519,Kp=512,$p=513,tm=514,lf=515,em=516,nm=517,im=518,rm=519,Pc=35044,sm=35048,Lc="300 es",$o=1035,Zn=2e3,Sa=2001;class Ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dc=1234567;const cs=Math.PI/180,Ss=180/Math.PI;function Yr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[r&255]+Ie[r>>8&255]+Ie[r>>16&255]+Ie[r>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function ve(r,t,e){return Math.max(t,Math.min(e,r))}function Sl(r,t){return(r%t+t)%t}function am(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function om(r,t,e){return r!==t?(e-r)/(t-r):0}function hs(r,t,e){return(1-e)*r+e*t}function lm(r,t,e,n){return hs(r,t,1-Math.exp(-e*n))}function cm(r,t=1){return t-Math.abs(Sl(r,t*2)-t)}function hm(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function um(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function fm(r,t){return r+Math.floor(Math.random()*(t-r+1))}function dm(r,t){return r+Math.random()*(t-r)}function pm(r){return r*(.5-Math.random())}function mm(r){r!==void 0&&(Dc=r);let t=Dc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gm(r){return r*cs}function _m(r){return r*Ss}function tl(r){return(r&r-1)===0&&r!==0}function Am(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ea(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function vm(r,t,e,n,i){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),h=a((t+n)/2),u=s((t-n)/2),f=a((t-n)/2),d=s((n-t)/2),_=a((n-t)/2);switch(i){case"XYX":r.set(o*h,l*u,l*f,o*c);break;case"YZY":r.set(l*f,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*f,o*h,o*c);break;case"XZX":r.set(o*h,l*_,l*d,o*c);break;case"YXY":r.set(l*d,o*h,l*_,o*c);break;case"ZYZ":r.set(l*_,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Mr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ze(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Mm={DEG2RAD:cs,RAD2DEG:Ss,generateUUID:Yr,clamp:ve,euclideanModulo:Sl,mapLinear:am,inverseLerp:om,lerp:hs,damp:lm,pingpong:cm,smoothstep:hm,smootherstep:um,randInt:fm,randFloat:dm,randFloatSpread:pm,seededRandom:mm,degToRad:gm,radToDeg:_m,isPowerOfTwo:tl,ceilPowerOfTwo:Am,floorPowerOfTwo:Ea,setQuaternionFromProperEuler:vm,normalize:ze,denormalize:Mr};class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,n,i,s,a,o,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],_=n[8],g=i[0],p=i[3],m=i[6],x=i[1],A=i[4],S=i[7],T=i[2],M=i[5],E=i[8];return s[0]=a*g+o*x+l*T,s[3]=a*p+o*A+l*M,s[6]=a*m+o*S+l*E,s[1]=c*g+h*x+u*T,s[4]=c*p+h*A+u*M,s[7]=c*m+h*S+u*E,s[2]=f*g+d*x+_*T,s[5]=f*p+d*A+_*M,s[8]=f*m+d*S+_*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*s,d=c*s-a*l,_=e*u+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=f*g,t[4]=(h*e-i*l)*g,t[5]=(i*s-o*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply($a.makeScale(t,e)),this}rotate(t){return this.premultiply($a.makeRotation(-t)),this}translate(t,e){return this.premultiply($a.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $a=new kt;function cf(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Es(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function xm(){const r=Es("canvas");return r.style.display="block",r}const Ic={};function Lr(r){r in Ic||(Ic[r]=!0,console.warn(r))}const Uc=new kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nc=new kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cs={[Jn]:{transfer:Ma,primaries:xa,toReference:r=>r,fromReference:r=>r},[jt]:{transfer:ee,primaries:xa,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[La]:{transfer:Ma,primaries:ya,toReference:r=>r.applyMatrix3(Nc),fromReference:r=>r.applyMatrix3(Uc)},[yl]:{transfer:ee,primaries:ya,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Nc),fromReference:r=>r.applyMatrix3(Uc).convertLinearToSRGB()}},ym=new Set([Jn,La]),Jt={enabled:!0,_workingColorSpace:Jn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!ym.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=Cs[t].toReference,i=Cs[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Cs[r].primaries},getTransfer:function(r){return r===mn?Ma:Cs[r].transfer}};function Dr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function to(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ir;class hf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ir===void 0&&(ir=Es("canvas")),ir.width=t.width,ir.height=t.height;const n=ir.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ir}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Es("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Dr(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Dr(e[n]/255)*255):e[n]=Dr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sm=0;class uf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=Yr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(eo(i[a].image)):s.push(eo(i[a]))}else s=eo(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function eo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?hf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Em=0;class Fe extends Ji{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=yn,i=yn,s=We,a=Bi,o=pn,l=mi,c=Fe.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=Yr(),this.name="",this.source=new uf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Lr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Wi?jt:mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ku)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xs:t.x=t.x-Math.floor(t.x);break;case yn:t.x=t.x<0?0:1;break;case Ko:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xs:t.y=t.y-Math.floor(t.y);break;case yn:t.y=t.y<0?0:1;break;case Ko:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Lr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===jt?Wi:of}set encoding(t){Lr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Wi?jt:mn}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=Ku;Fe.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,e=0,n=0,i=1){we.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,S=(d+1)/2,T=(m+1)/2,M=(h+f)/4,E=(u+g)/4,D=(_+p)/4;return A>S&&A>T?A<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(A),i=M/n,s=E/n):S>T?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=M/i,s=D/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=E/s,i=D/s),this.set(n,i,s,e),this}let x=Math.sqrt((p-_)*(p-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(p-_)/x,this.y=(u-g)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tm extends Ji{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Lr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Wi?jt:mn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Fe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new uf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends Tm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ff extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=he,this.minFilter=he,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bm extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=he,this.minFilter=he,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=s[a+0],d=s[a+1],_=s[a+2],g=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==f||c!==d||h!==_){let p=1-o;const m=l*f+c*d+h*_+u*g,x=m>=0?1:-1,A=1-m*m;if(A>Number.EPSILON){const T=Math.sqrt(A),M=Math.atan2(T,m*x);p=Math.sin(p*M)/T,o=Math.sin(o*M)/T}const S=o*x;if(l=l*p+f*S,c=c*p+d*S,h=h*p+_*S,u=u*p+g*S,p===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],f=s[a+1],d=s[a+2],_=s[a+3];return t[e]=o*_+h*u+l*d-c*f,t[e+1]=l*_+h*f+c*u-o*d,t[e+2]=c*_+h*d+o*f-l*u,t[e+3]=h*_-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),f=l(n/2),d=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"YXZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"ZXY":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"ZYX":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"YZX":this._x=f*h*u+c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u-f*d*_;break;case"XZY":this._x=f*h*u-c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Oc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Oc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return no.copy(this).projectOnVector(t),this.sub(no)}reflect(t){return this.sub(no.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const no=new C,Oc=new rn;class ji{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(s,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ps.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ps.copy(n.boundingBox)),Ps.applyMatrix4(t.matrixWorld),this.union(Ps)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Jr),Ls.subVectors(this.max,Jr),rr.subVectors(t.a,Jr),sr.subVectors(t.b,Jr),ar.subVectors(t.c,Jr),Kn.subVectors(sr,rr),$n.subVectors(ar,sr),Ti.subVectors(rr,ar);let e=[0,-Kn.z,Kn.y,0,-$n.z,$n.y,0,-Ti.z,Ti.y,Kn.z,0,-Kn.x,$n.z,0,-$n.x,Ti.z,0,-Ti.x,-Kn.y,Kn.x,0,-$n.y,$n.x,0,-Ti.y,Ti.x,0];return!io(e,rr,sr,ar,Ls)||(e=[1,0,0,0,1,0,0,0,1],!io(e,rr,sr,ar,Ls))?!1:(Ds.crossVectors(Kn,$n),e=[Ds.x,Ds.y,Ds.z],io(e,rr,sr,ar,Ls))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Fn=[new C,new C,new C,new C,new C,new C,new C,new C],vn=new C,Ps=new ji,rr=new C,sr=new C,ar=new C,Kn=new C,$n=new C,Ti=new C,Jr=new C,Ls=new C,Ds=new C,bi=new C;function io(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){bi.fromArray(r,s);const o=i.x*Math.abs(bi.x)+i.y*Math.abs(bi.y)+i.z*Math.abs(bi.z),l=t.dot(bi),c=e.dot(bi),h=n.dot(bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const wm=new ji,jr=new C,ro=new C;class Ki{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):wm.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;jr.subVectors(t,this.center);const e=jr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(jr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ro.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(jr.copy(t.center).add(ro)),this.expandByPoint(jr.copy(t.center).sub(ro))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new C,so=new C,Is=new C,ti=new C,ao=new C,Us=new C,oo=new C;class Da{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){so.copy(t).add(e).multiplyScalar(.5),Is.copy(e).sub(t).normalize(),ti.copy(this.origin).sub(so);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Is),o=ti.dot(this.direction),l=-ti.dot(Is),c=ti.lengthSq(),h=Math.abs(1-a*a);let u,f,d,_;if(h>0)if(u=a*l-o,f=a*o-l,_=s*h,u>=0)if(f>=-_)if(f<=_){const g=1/h;u*=g,f*=g,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(so).addScaledVector(Is,f),d}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);const n=Gn.dot(this.direction),i=Gn.dot(Gn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,i,s){ao.subVectors(e,t),Us.subVectors(n,t),oo.crossVectors(ao,Us);let a=this.direction.dot(oo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ti.subVectors(this.origin,t);const l=o*this.direction.dot(Us.crossVectors(ti,Us));if(l<0)return null;const c=o*this.direction.dot(ao.cross(ti));if(c<0||l+c>a)return null;const h=-o*ti.dot(oo);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,i,s,a,o,l,c,h,u,f,d,_,g,p){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,u,f,d,_,g,p)}set(t,e,n,i,s,a,o,l,c,h,u,f,d,_,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/or.setFromMatrixColumn(t,0).length(),s=1/or.setFromMatrixColumn(t,1).length(),a=1/or.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=a*h,d=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+_*c,e[5]=f-g*c,e[9]=-o*l,e[2]=g-f*c,e[6]=_+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,_=c*h,g=c*u;e[0]=f+g*o,e[4]=_*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-_,e[6]=g+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,_=c*h,g=c*u;e[0]=f-g*o,e[4]=-a*u,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*h,e[9]=g-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,d=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=_*c-d,e[8]=f*c+g,e[1]=l*u,e[5]=g*c+f,e[9]=d*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-f*u,e[8]=_*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+_,e[10]=f-g*u}else if(t.order==="XZY"){const f=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+g,e[5]=a*h,e[9]=d*u-_,e[2]=_*u-d,e[6]=o*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rm,t,Cm)}lookAt(t,e,n){const i=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),ei.crossVectors(n,Ke),ei.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),ei.crossVectors(n,Ke)),ei.normalize(),Ns.crossVectors(Ke,ei),i[0]=ei.x,i[4]=Ns.x,i[8]=Ke.x,i[1]=ei.y,i[5]=Ns.y,i[9]=Ke.y,i[2]=ei.z,i[6]=Ns.z,i[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],x=n[3],A=n[7],S=n[11],T=n[15],M=i[0],E=i[4],D=i[8],U=i[12],v=i[1],w=i[5],V=i[9],Q=i[13],I=i[2],F=i[6],B=i[10],X=i[14],Y=i[3],Z=i[7],j=i[11],K=i[15];return s[0]=a*M+o*v+l*I+c*Y,s[4]=a*E+o*w+l*F+c*Z,s[8]=a*D+o*V+l*B+c*j,s[12]=a*U+o*Q+l*X+c*K,s[1]=h*M+u*v+f*I+d*Y,s[5]=h*E+u*w+f*F+d*Z,s[9]=h*D+u*V+f*B+d*j,s[13]=h*U+u*Q+f*X+d*K,s[2]=_*M+g*v+p*I+m*Y,s[6]=_*E+g*w+p*F+m*Z,s[10]=_*D+g*V+p*B+m*j,s[14]=_*U+g*Q+p*X+m*K,s[3]=x*M+A*v+S*I+T*Y,s[7]=x*E+A*w+S*F+T*Z,s[11]=x*D+A*V+S*B+T*j,s[15]=x*U+A*Q+S*X+T*K,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],_=t[3],g=t[7],p=t[11],m=t[15];return _*(+s*l*u-i*c*u-s*o*f+n*c*f+i*o*d-n*l*d)+g*(+e*l*d-e*c*f+s*a*f-i*a*d+i*c*h-s*l*h)+p*(+e*c*u-e*o*d-s*a*u+n*a*d+s*o*h-n*c*h)+m*(-i*o*h-e*l*u+e*o*f+i*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],_=t[12],g=t[13],p=t[14],m=t[15],x=u*p*c-g*f*c+g*l*d-o*p*d-u*l*m+o*f*m,A=_*f*c-h*p*c-_*l*d+a*p*d+h*l*m-a*f*m,S=h*g*c-_*u*c+_*o*d-a*g*d-h*o*m+a*u*m,T=_*u*l-h*g*l-_*o*f+a*g*f+h*o*p-a*u*p,M=e*x+n*A+i*S+s*T;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/M;return t[0]=x*E,t[1]=(g*f*s-u*p*s-g*i*d+n*p*d+u*i*m-n*f*m)*E,t[2]=(o*p*s-g*l*s+g*i*c-n*p*c-o*i*m+n*l*m)*E,t[3]=(u*l*s-o*f*s-u*i*c+n*f*c+o*i*d-n*l*d)*E,t[4]=A*E,t[5]=(h*p*s-_*f*s+_*i*d-e*p*d-h*i*m+e*f*m)*E,t[6]=(_*l*s-a*p*s-_*i*c+e*p*c+a*i*m-e*l*m)*E,t[7]=(a*f*s-h*l*s+h*i*c-e*f*c-a*i*d+e*l*d)*E,t[8]=S*E,t[9]=(_*u*s-h*g*s-_*n*d+e*g*d+h*n*m-e*u*m)*E,t[10]=(a*g*s-_*o*s+_*n*c-e*g*c-a*n*m+e*o*m)*E,t[11]=(h*o*s-a*u*s-h*n*c+e*u*c+a*n*d-e*o*d)*E,t[12]=T*E,t[13]=(h*g*i-_*u*i+_*n*f-e*g*f-h*n*p+e*u*p)*E,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*p-e*o*p)*E,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*f+e*o*f)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,f=s*c,d=s*h,_=s*u,g=a*h,p=a*u,m=o*u,x=l*c,A=l*h,S=l*u,T=n.x,M=n.y,E=n.z;return i[0]=(1-(g+m))*T,i[1]=(d+S)*T,i[2]=(_-A)*T,i[3]=0,i[4]=(d-S)*M,i[5]=(1-(f+m))*M,i[6]=(p+x)*M,i[7]=0,i[8]=(_+A)*E,i[9]=(p-x)*E,i[10]=(1-(f+g))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=or.set(i[0],i[1],i[2]).length();const a=or.set(i[4],i[5],i[6]).length(),o=or.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Mn.copy(this);const c=1/s,h=1/a,u=1/o;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,e.setFromRotationMatrix(Mn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Zn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let d,_;if(o===Zn)d=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Sa)d=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Zn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-s),f=(e+t)*c,d=(n+i)*h;let _,g;if(o===Zn)_=(a+s)*u,g=-2*u;else if(o===Sa)_=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const or=new C,Mn=new ie,Rm=new C(0,0,0),Cm=new C(1,1,1),ei=new C,Ns=new C,Ke=new C,Bc=new ie,Fc=new rn;class Hr{constructor(t=0,e=0,n=0,i=Hr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fc.setFromEuler(this),this.setFromQuaternion(Fc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hr.DEFAULT_ORDER="XYZ";class df{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Pm=0;const Gc=new C,lr=new rn,zn=new ie,Os=new C,Kr=new C,Lm=new C,Dm=new rn,zc=new C(1,0,0),kc=new C(0,1,0),Vc=new C(0,0,1),Im={type:"added"},Um={type:"removed"};class fe extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=Yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new C,e=new Hr,n=new rn,i=new C(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new kt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new df,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return lr.setFromAxisAngle(t,e),this.quaternion.multiply(lr),this}rotateOnWorldAxis(t,e){return lr.setFromAxisAngle(t,e),this.quaternion.premultiply(lr),this}rotateX(t){return this.rotateOnAxis(zc,t)}rotateY(t){return this.rotateOnAxis(kc,t)}rotateZ(t){return this.rotateOnAxis(Vc,t)}translateOnAxis(t,e){return Gc.copy(t).applyQuaternion(this.quaternion),this.position.add(Gc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zc,t)}translateY(t){return this.translateOnAxis(kc,t)}translateZ(t){return this.translateOnAxis(Vc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Os.copy(t):Os.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Kr,Os,this.up):zn.lookAt(Os,Kr,this.up),this.quaternion.setFromRotationMatrix(zn),i&&(zn.extractRotation(i.matrixWorld),lr.setFromRotationMatrix(zn),this.quaternion.premultiply(lr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Im)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Um)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,t,Lm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,Dm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}fe.DEFAULT_UP=new C(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new C,kn=new C,lo=new C,Vn=new C,cr=new C,hr=new C,Hc=new C,co=new C,ho=new C,uo=new C;class Pn{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),xn.subVectors(t,e),i.cross(xn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){xn.subVectors(i,e),kn.subVectors(n,e),lo.subVectors(t,e);const a=xn.dot(xn),o=xn.dot(kn),l=xn.dot(lo),c=kn.dot(kn),h=kn.dot(lo),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,_=(a*h-o*l)*f;return s.set(1-d-_,_,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vn.x),l.addScaledVector(a,Vn.y),l.addScaledVector(o,Vn.z),l)}static isFrontFacing(t,e,n,i){return xn.subVectors(n,e),kn.subVectors(t,e),xn.cross(kn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),xn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Pn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;cr.subVectors(i,n),hr.subVectors(s,n),co.subVectors(t,n);const l=cr.dot(co),c=hr.dot(co);if(l<=0&&c<=0)return e.copy(n);ho.subVectors(t,i);const h=cr.dot(ho),u=hr.dot(ho);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(cr,a);uo.subVectors(t,s);const d=cr.dot(uo),_=hr.dot(uo);if(_>=0&&d<=_)return e.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(hr,o);const p=h*_-d*u;if(p<=0&&u-h>=0&&d-_>=0)return Hc.subVectors(s,i),o=(u-h)/(u-h+(d-_)),e.copy(i).addScaledVector(Hc,o);const m=1/(p+g+f);return a=g*m,o=f*m,e.copy(n).addScaledVector(cr,a).addScaledVector(hr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},Bs={h:0,s:0,l:0};function fo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class pt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=jt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=Sl(t,1),e=ve(e,0,1),n=ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=fo(a,s,t+1/3),this.g=fo(a,s,t),this.b=fo(a,s,t-1/3)}return Jt.toWorkingColorSpace(this,i),this}setStyle(t,e=jt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=jt){const n=pf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Dr(t.r),this.g=Dr(t.g),this.b=Dr(t.b),this}copyLinearToSRGB(t){return this.r=to(t.r),this.g=to(t.g),this.b=to(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=jt){return Jt.fromWorkingColorSpace(Ue.copy(this),t),Math.round(ve(Ue.r*255,0,255))*65536+Math.round(ve(Ue.g*255,0,255))*256+Math.round(ve(Ue.b*255,0,255))}getHexString(t=jt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Ue.copy(this),e);const n=Ue.r,i=Ue.g,s=Ue.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=jt){Jt.fromWorkingColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,i=Ue.b;return t!==jt?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ni),this.setHSL(ni.h+t,ni.s+e,ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ni),t.getHSL(Bs);const n=hs(ni.h,Bs.h,e),i=hs(ni.s,Bs.s,e),s=hs(ni.l,Bs.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new pt;pt.NAMES=pf;let Nm=0;class Le extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Yr(),this.name="",this.type="Material",this.blending=Pr,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=qo,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nr,this.stencilZFail=nr,this.stencilZPass=nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pr&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qo&&(n.blendSrc=this.blendSrc),this.blendDst!==qo&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==va&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==nr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==nr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Me extends Le{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new C,Fs=new st;class Sn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Lr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fs.fromBufferAttribute(this,e),Fs.applyMatrix3(t),this.setXY(e,Fs.x,Fs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mr(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mr(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mr(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),i=ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),i=ze(i,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pc&&(t.usage=this.usage),t}}class mf extends Sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class gf extends Sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ve extends Sn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Om=0;const hn=new ie,po=new fe,ur=new C,$e=new ji,$r=new ji,Ee=new C;class En extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=Yr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cf(t)?gf:mf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new kt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return po.lookAt(t),po.updateMatrix(),this.applyMatrix4(po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ve(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];$e.setFromBufferAttribute(s),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];$r.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors($e.min,$r.min),$e.expandByPoint(Ee),Ee.addVectors($e.max,$r.max),$e.expandByPoint(Ee)):($e.expandByPoint($r.min),$e.expandByPoint($r.max))}$e.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Ee.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ee));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ee.fromBufferAttribute(o,c),l&&(ur.fromBufferAttribute(t,c),Ee.add(ur)),i=Math.max(i,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let v=0;v<o;v++)c[v]=new C,h[v]=new C;const u=new C,f=new C,d=new C,_=new st,g=new st,p=new st,m=new C,x=new C;function A(v,w,V){u.fromArray(i,v*3),f.fromArray(i,w*3),d.fromArray(i,V*3),_.fromArray(a,v*2),g.fromArray(a,w*2),p.fromArray(a,V*2),f.sub(u),d.sub(u),g.sub(_),p.sub(_);const Q=1/(g.x*p.y-p.x*g.y);isFinite(Q)&&(m.copy(f).multiplyScalar(p.y).addScaledVector(d,-g.y).multiplyScalar(Q),x.copy(d).multiplyScalar(g.x).addScaledVector(f,-p.x).multiplyScalar(Q),c[v].add(m),c[w].add(m),c[V].add(m),h[v].add(x),h[w].add(x),h[V].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let v=0,w=S.length;v<w;++v){const V=S[v],Q=V.start,I=V.count;for(let F=Q,B=Q+I;F<B;F+=3)A(n[F+0],n[F+1],n[F+2])}const T=new C,M=new C,E=new C,D=new C;function U(v){E.fromArray(s,v*3),D.copy(E);const w=c[v];T.copy(w),T.sub(E.multiplyScalar(E.dot(w))).normalize(),M.crossVectors(D,w);const Q=M.dot(h[v])<0?-1:1;l[v*4]=T.x,l[v*4+1]=T.y,l[v*4+2]=T.z,l[v*4+3]=Q}for(let v=0,w=S.length;v<w;++v){const V=S[v],Q=V.start,I=V.count;for(let F=Q,B=Q+I;F<B;F+=3)U(n[F+0]),U(n[F+1]),U(n[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new C,s=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),g=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*h;for(let m=0;m<h;m++)f[_++]=c[d++]}return new Sn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new En,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wc=new ie,wi=new Da,Gs=new Ki,Yc=new C,fr=new C,dr=new C,pr=new C,mo=new C,zs=new C,ks=new st,Vs=new st,Hs=new st,Xc=new C,Zc=new C,Qc=new C,Ws=new C,Ys=new C;class ne extends fe{constructor(t=new En,e=new Me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){zs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(mo.fromBufferAttribute(u,t),a?zs.addScaledVector(mo,h):zs.addScaledVector(mo.sub(e),h))}e.add(zs)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(s),wi.copy(t.ray).recast(t.near),!(Gs.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Gs,Yc)===null||wi.origin.distanceToSquared(Yc)>(t.far-t.near)**2))&&(Wc.copy(s).invert(),wi.copy(t.ray).applyMatrix4(Wc),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=a[p.materialIndex],x=Math.max(p.start,d.start),A=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let S=x,T=A;S<T;S+=3){const M=o.getX(S),E=o.getX(S+1),D=o.getX(S+2);i=Xs(this,m,t,n,c,h,u,M,E,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const x=o.getX(p),A=o.getX(p+1),S=o.getX(p+2);i=Xs(this,a,t,n,c,h,u,x,A,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=a[p.materialIndex],x=Math.max(p.start,d.start),A=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=x,T=A;S<T;S+=3){const M=S,E=S+1,D=S+2;i=Xs(this,m,t,n,c,h,u,M,E,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const x=p,A=p+1,S=p+2;i=Xs(this,a,t,n,c,h,u,x,A,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Bm(r,t,e,n,i,s,a,o){let l;if(t.side===qe?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===Ai,o),l===null)return null;Ys.copy(o),Ys.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ys);return c<e.near||c>e.far?null:{distance:c,point:Ys.clone(),object:r}}function Xs(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,fr),r.getVertexPosition(l,dr),r.getVertexPosition(c,pr);const h=Bm(r,t,e,n,fr,dr,pr,Ws);if(h){i&&(ks.fromBufferAttribute(i,o),Vs.fromBufferAttribute(i,l),Hs.fromBufferAttribute(i,c),h.uv=Pn.getInterpolation(Ws,fr,dr,pr,ks,Vs,Hs,new st)),s&&(ks.fromBufferAttribute(s,o),Vs.fromBufferAttribute(s,l),Hs.fromBufferAttribute(s,c),h.uv1=Pn.getInterpolation(Ws,fr,dr,pr,ks,Vs,Hs,new st),h.uv2=h.uv1),a&&(Xc.fromBufferAttribute(a,o),Zc.fromBufferAttribute(a,l),Qc.fromBufferAttribute(a,c),h.normal=Pn.getInterpolation(Ws,fr,dr,pr,Xc,Zc,Qc,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new C,materialIndex:0};Pn.getNormal(fr,dr,pr,u.normal),h.face=u}return h}class jn extends En{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ve(c,3)),this.setAttribute("normal",new Ve(h,3)),this.setAttribute("uv",new Ve(u,2));function _(g,p,m,x,A,S,T,M,E,D,U){const v=S/E,w=T/D,V=S/2,Q=T/2,I=M/2,F=E+1,B=D+1;let X=0,Y=0;const Z=new C;for(let j=0;j<B;j++){const K=j*w-Q;for(let ot=0;ot<F;ot++){const At=ot*v-V;Z[g]=At*x,Z[p]=K*A,Z[m]=I,c.push(Z.x,Z.y,Z.z),Z[g]=0,Z[p]=0,Z[m]=M>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(ot/E),u.push(1-j/D),X+=1}}for(let j=0;j<D;j++)for(let K=0;K<E;K++){const ot=f+K+F*j,At=f+K+F*(j+1),z=f+(K+1)+F*(j+1),J=f+(K+1)+F*j;l.push(ot,At,J),l.push(At,z,J),Y+=6}o.addGroup(d,Y,U),d+=Y,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Wr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ke(r){const t={};for(let e=0;e<r.length;e++){const n=Wr(r[e]);for(const i in n)t[i]=n[i]}return t}function Fm(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function _f(r){return r.getRenderTarget()===null?r.outputColorSpace:Jt.workingColorSpace}const Gm={clone:Wr,merge:ke};var zm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,km=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends Le{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zm,this.fragmentShader=km,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wr(t.uniforms),this.uniformsGroups=Fm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Af extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ii=new C,qc=new st,Jc=new st;class dn extends Af{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ii.x,ii.y).multiplyScalar(-t/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-t/ii.z)}getViewSize(t,e){return this.getViewBounds(t,qc,Jc),e.subVectors(Jc,qc)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(cs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const mr=-90,gr=1;class Vm extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new dn(mr,gr,t,e);i.layers=this.layers,this.add(i);const s=new dn(mr,gr,t,e);s.layers=this.layers,this.add(s);const a=new dn(mr,gr,t,e);a.layers=this.layers,this.add(a);const o=new dn(mr,gr,t,e);o.layers=this.layers,this.add(o);const l=new dn(mr,gr,t,e);l.layers=this.layers,this.add(l);const c=new dn(mr,gr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class El extends Fe{constructor(t,e,n,i,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:zr,super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hm extends Zi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Lr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Wi?jt:mn),this.texture=new El(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:We}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new jn(5,5,5),s=new Nn({name:"CubemapFromEquirect",uniforms:Wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:di});s.uniforms.tEquirect.value=e;const a=new ne(i,s),o=e.minFilter;return e.minFilter===Bi&&(e.minFilter=We),new Vm(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const go=new C,Wm=new C,Ym=new kt;class si{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=go.subVectors(n,e).cross(Wm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(go),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ym.getNormalMatrix(t),i=this.coplanarPoint(go).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Ki,Zs=new C;class vf{constructor(t=new si,e=new si,n=new si,i=new si,s=new si,a=new si){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Zn){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],_=i[9],g=i[10],p=i[11],m=i[12],x=i[13],A=i[14],S=i[15];if(n[0].setComponents(l-s,f-c,p-d,S-m).normalize(),n[1].setComponents(l+s,f+c,p+d,S+m).normalize(),n[2].setComponents(l+a,f+h,p+_,S+x).normalize(),n[3].setComponents(l-a,f-h,p-_,S-x).normalize(),n[4].setComponents(l-o,f-u,p-g,S-A).normalize(),e===Zn)n[5].setComponents(l+o,f+u,p+g,S+A).normalize();else if(e===Sa)n[5].setComponents(o,u,g,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Zs.x=i.normal.x>0?t.max.x:t.min.x,Zs.y=i.normal.y>0?t.max.y:t.min.y,Zs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mf(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Xm(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,f=c.usage,d=u.byteLength,_=r.createBuffer();r.bindBuffer(h,_),r.bufferData(h,u,f),c.onUploadCallback();let g;if(u instanceof Float32Array)g=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=r.SHORT;else if(u instanceof Uint32Array)g=r.UNSIGNED_INT;else if(u instanceof Int32Array)g=r.INT;else if(u instanceof Int8Array)g=r.BYTE;else if(u instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function s(c,h,u){const f=h.array,d=h._updateRange,_=h.updateRanges;if(r.bindBuffer(u,c),d.count===-1&&_.length===0&&r.bufferSubData(u,0,f),_.length!==0){for(let g=0,p=_.length;g<p;g++){const m=_[g];e?r.bufferSubData(u,m.start*f.BYTES_PER_ELEMENT,f,m.start,m.count):r.bufferSubData(u,m.start*f.BYTES_PER_ELEMENT,f.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}d.count!==-1&&(e?r.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}class ln extends En{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,f=e/l,d=[],_=[],g=[],p=[];for(let m=0;m<h;m++){const x=m*f-a;for(let A=0;A<c;A++){const S=A*u-s;_.push(S,-x,0),g.push(0,0,1),p.push(A/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<o;x++){const A=x+c*m,S=x+c*(m+1),T=x+1+c*(m+1),M=x+1+c*m;d.push(A,S,M),d.push(S,T,M)}this.setIndex(d),this.setAttribute("position",new Ve(_,3)),this.setAttribute("normal",new Ve(g,3)),this.setAttribute("uv",new Ve(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.width,t.height,t.widthSegments,t.heightSegments)}}var Zm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qm=`#ifdef USE_ALPHAHASH
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
#endif`,qm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Km=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$m=`#ifdef USE_AOMAP
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
#endif`,tg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eg=`#ifdef USE_BATCHING
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
#endif`,ng=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ig=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ag=`#ifdef USE_IRIDESCENCE
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
#endif`,og=`#ifdef USE_BUMPMAP
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
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,gg=`#define PI 3.141592653589793
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
} // validated`,_g=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ag=`vec3 transformedNormal = objectNormal;
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
#endif`,vg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Eg=`
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
}`,Tg=`#ifdef USE_ENVMAP
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
#endif`,bg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wg=`#ifdef USE_ENVMAP
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
#endif`,Rg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Pg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ig=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ug=`#ifdef USE_GRADIENTMAP
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
}`,Ng=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Og=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gg=`uniform bool receiveShadow;
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
#endif`,zg=`#ifdef USE_ENVMAP
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
#endif`,kg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yg=`PhysicalMaterial material;
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
#endif`,Xg=`struct PhysicalMaterial {
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
}`,Zg=`
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
#endif`,Qg=`#if defined( RE_IndirectDiffuse )
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
#endif`,qg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$g=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,t_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,n_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,i_=`#if defined( USE_POINTS_UV )
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
#endif`,r_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,s_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o_=`#ifdef USE_MORPHNORMALS
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
#endif`,l_=`#ifdef USE_MORPHTARGETS
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
#endif`,c_=`#ifdef USE_MORPHTARGETS
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
#endif`,h_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,u_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,f_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m_=`#ifdef USE_NORMALMAP
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
#endif`,g_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,__=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,M_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,y_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,E_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,T_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,L_=`float getShadowMask() {
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
}`,D_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I_=`#ifdef USE_SKINNING
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
#endif`,U_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N_=`#ifdef USE_SKINNING
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
#endif`,O_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,z_=`#ifdef USE_TRANSMISSION
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
#endif`,k_=`#ifdef USE_TRANSMISSION
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
#endif`,V_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Z_=`uniform sampler2D t2D;
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
}`,Q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,J_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K_=`#include <common>
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
}`,$_=`#if DEPTH_PACKING == 3200
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
}`,tA=`#define DISTANCE
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
}`,eA=`#define DISTANCE
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
}`,nA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rA=`uniform float scale;
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
}`,sA=`uniform vec3 diffuse;
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
}`,aA=`#include <common>
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
}`,oA=`uniform vec3 diffuse;
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
}`,lA=`#define LAMBERT
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
}`,cA=`#define LAMBERT
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
}`,hA=`#define MATCAP
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
}`,uA=`#define MATCAP
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
}`,fA=`#define NORMAL
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
}`,dA=`#define NORMAL
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
}`,pA=`#define PHONG
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
}`,mA=`#define PHONG
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
}`,gA=`#define STANDARD
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
}`,_A=`#define STANDARD
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
}`,AA=`#define TOON
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
}`,vA=`#define TOON
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
}`,MA=`uniform float size;
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
}`,xA=`uniform vec3 diffuse;
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
}`,yA=`#include <common>
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
}`,SA=`uniform vec3 color;
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
}`,EA=`uniform float rotation;
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
}`,TA=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:Zm,alphahash_pars_fragment:Qm,alphamap_fragment:qm,alphamap_pars_fragment:Jm,alphatest_fragment:jm,alphatest_pars_fragment:Km,aomap_fragment:$m,aomap_pars_fragment:tg,batching_pars_vertex:eg,batching_vertex:ng,begin_vertex:ig,beginnormal_vertex:rg,bsdfs:sg,iridescence_fragment:ag,bumpmap_pars_fragment:og,clipping_planes_fragment:lg,clipping_planes_pars_fragment:cg,clipping_planes_pars_vertex:hg,clipping_planes_vertex:ug,color_fragment:fg,color_pars_fragment:dg,color_pars_vertex:pg,color_vertex:mg,common:gg,cube_uv_reflection_fragment:_g,defaultnormal_vertex:Ag,displacementmap_pars_vertex:vg,displacementmap_vertex:Mg,emissivemap_fragment:xg,emissivemap_pars_fragment:yg,colorspace_fragment:Sg,colorspace_pars_fragment:Eg,envmap_fragment:Tg,envmap_common_pars_fragment:bg,envmap_pars_fragment:wg,envmap_pars_vertex:Rg,envmap_physical_pars_fragment:zg,envmap_vertex:Cg,fog_vertex:Pg,fog_pars_vertex:Lg,fog_fragment:Dg,fog_pars_fragment:Ig,gradientmap_pars_fragment:Ug,lightmap_fragment:Ng,lightmap_pars_fragment:Og,lights_lambert_fragment:Bg,lights_lambert_pars_fragment:Fg,lights_pars_begin:Gg,lights_toon_fragment:kg,lights_toon_pars_fragment:Vg,lights_phong_fragment:Hg,lights_phong_pars_fragment:Wg,lights_physical_fragment:Yg,lights_physical_pars_fragment:Xg,lights_fragment_begin:Zg,lights_fragment_maps:Qg,lights_fragment_end:qg,logdepthbuf_fragment:Jg,logdepthbuf_pars_fragment:jg,logdepthbuf_pars_vertex:Kg,logdepthbuf_vertex:$g,map_fragment:t_,map_pars_fragment:e_,map_particle_fragment:n_,map_particle_pars_fragment:i_,metalnessmap_fragment:r_,metalnessmap_pars_fragment:s_,morphcolor_vertex:a_,morphnormal_vertex:o_,morphtarget_pars_vertex:l_,morphtarget_vertex:c_,normal_fragment_begin:h_,normal_fragment_maps:u_,normal_pars_fragment:f_,normal_pars_vertex:d_,normal_vertex:p_,normalmap_pars_fragment:m_,clearcoat_normal_fragment_begin:g_,clearcoat_normal_fragment_maps:__,clearcoat_pars_fragment:A_,iridescence_pars_fragment:v_,opaque_fragment:M_,packing:x_,premultiplied_alpha_fragment:y_,project_vertex:S_,dithering_fragment:E_,dithering_pars_fragment:T_,roughnessmap_fragment:b_,roughnessmap_pars_fragment:w_,shadowmap_pars_fragment:R_,shadowmap_pars_vertex:C_,shadowmap_vertex:P_,shadowmask_pars_fragment:L_,skinbase_vertex:D_,skinning_pars_vertex:I_,skinning_vertex:U_,skinnormal_vertex:N_,specularmap_fragment:O_,specularmap_pars_fragment:B_,tonemapping_fragment:F_,tonemapping_pars_fragment:G_,transmission_fragment:z_,transmission_pars_fragment:k_,uv_pars_fragment:V_,uv_pars_vertex:H_,uv_vertex:W_,worldpos_vertex:Y_,background_vert:X_,background_frag:Z_,backgroundCube_vert:Q_,backgroundCube_frag:q_,cube_vert:J_,cube_frag:j_,depth_vert:K_,depth_frag:$_,distanceRGBA_vert:tA,distanceRGBA_frag:eA,equirect_vert:nA,equirect_frag:iA,linedashed_vert:rA,linedashed_frag:sA,meshbasic_vert:aA,meshbasic_frag:oA,meshlambert_vert:lA,meshlambert_frag:cA,meshmatcap_vert:hA,meshmatcap_frag:uA,meshnormal_vert:fA,meshnormal_frag:dA,meshphong_vert:pA,meshphong_frag:mA,meshphysical_vert:gA,meshphysical_frag:_A,meshtoon_vert:AA,meshtoon_frag:vA,points_vert:MA,points_frag:xA,shadow_vert:yA,shadow_frag:SA,sprite_vert:EA,sprite_frag:TA},lt={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},wn={basic:{uniforms:ke([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:ke([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new pt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:ke([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:ke([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:ke([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new pt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:ke([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:ke([lt.points,lt.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:ke([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:ke([lt.common,lt.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:ke([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:ke([lt.sprite,lt.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:ke([lt.common,lt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:ke([lt.lights,lt.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};wn.physical={uniforms:ke([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const Qs={r:0,b:0,g:0};function bA(r,t,e,n,i,s,a){const o=new pt(0);let l=s===!0?0:1,c,h,u=null,f=0,d=null;function _(p,m){let x=!1,A=m.isScene===!0?m.background:null;A&&A.isTexture&&(A=(m.backgroundBlurriness>0?e:t).get(A)),A===null?g(o,l):A&&A.isColor&&(g(A,1),x=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),A&&(A.isCubeTexture||A.mapping===Pa)?(h===void 0&&(h=new ne(new jn(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Wr(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,M,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=Jt.getTransfer(A.colorSpace)!==ee,(u!==A||f!==A.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,d=r.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new ne(new ln(2,2),new Nn({name:"BackgroundMaterial",uniforms:Wr(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(A.colorSpace)!==ee,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=A,f=A.version,d=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,m){p.getRGB(Qs,_f(r)),n.buffers.color.setClear(Qs.r,Qs.g,Qs.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),l=m,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(o,l)},render:_}}function wA(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,h=!1;function u(I,F,B,X,Y){let Z=!1;if(a){const j=g(X,B,F);c!==j&&(c=j,d(c.object)),Z=m(I,X,B,Y),Z&&x(I,X,B,Y)}else{const j=F.wireframe===!0;(c.geometry!==X.id||c.program!==B.id||c.wireframe!==j)&&(c.geometry=X.id,c.program=B.id,c.wireframe=j,Z=!0)}Y!==null&&e.update(Y,r.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,D(I,F,B,X),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(I){return n.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function _(I){return n.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function g(I,F,B){const X=B.wireframe===!0;let Y=o[I.id];Y===void 0&&(Y={},o[I.id]=Y);let Z=Y[F.id];Z===void 0&&(Z={},Y[F.id]=Z);let j=Z[X];return j===void 0&&(j=p(f()),Z[X]=j),j}function p(I){const F=[],B=[],X=[];for(let Y=0;Y<i;Y++)F[Y]=0,B[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:B,attributeDivisors:X,object:I,attributes:{},index:null}}function m(I,F,B,X){const Y=c.attributes,Z=F.attributes;let j=0;const K=B.getAttributes();for(const ot in K)if(K[ot].location>=0){const z=Y[ot];let J=Z[ot];if(J===void 0&&(ot==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),ot==="instanceColor"&&I.instanceColor&&(J=I.instanceColor)),z===void 0||z.attribute!==J||J&&z.data!==J.data)return!0;j++}return c.attributesNum!==j||c.index!==X}function x(I,F,B,X){const Y={},Z=F.attributes;let j=0;const K=B.getAttributes();for(const ot in K)if(K[ot].location>=0){let z=Z[ot];z===void 0&&(ot==="instanceMatrix"&&I.instanceMatrix&&(z=I.instanceMatrix),ot==="instanceColor"&&I.instanceColor&&(z=I.instanceColor));const J={};J.attribute=z,z&&z.data&&(J.data=z.data),Y[ot]=J,j++}c.attributes=Y,c.attributesNum=j,c.index=X}function A(){const I=c.newAttributes;for(let F=0,B=I.length;F<B;F++)I[F]=0}function S(I){T(I,0)}function T(I,F){const B=c.newAttributes,X=c.enabledAttributes,Y=c.attributeDivisors;B[I]=1,X[I]===0&&(r.enableVertexAttribArray(I),X[I]=1),Y[I]!==F&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,F),Y[I]=F)}function M(){const I=c.newAttributes,F=c.enabledAttributes;for(let B=0,X=F.length;B<X;B++)F[B]!==I[B]&&(r.disableVertexAttribArray(B),F[B]=0)}function E(I,F,B,X,Y,Z,j){j===!0?r.vertexAttribIPointer(I,F,B,Y,Z):r.vertexAttribPointer(I,F,B,X,Y,Z)}function D(I,F,B,X){if(n.isWebGL2===!1&&(I.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;A();const Y=X.attributes,Z=B.getAttributes(),j=F.defaultAttributeValues;for(const K in Z){const ot=Z[K];if(ot.location>=0){let At=Y[K];if(At===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(At=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(At=I.instanceColor)),At!==void 0){const z=At.normalized,J=At.itemSize,ct=e.get(At);if(ct===void 0)continue;const Mt=ct.buffer,mt=ct.type,_t=ct.bytesPerElement,Vt=n.isWebGL2===!0&&(mt===r.INT||mt===r.UNSIGNED_INT||At.gpuType===$u);if(At.isInterleavedBufferAttribute){const Ct=At.data,N=Ct.stride,se=At.offset;if(Ct.isInstancedInterleavedBuffer){for(let yt=0;yt<ot.locationSize;yt++)T(ot.location+yt,Ct.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let yt=0;yt<ot.locationSize;yt++)S(ot.location+yt);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let yt=0;yt<ot.locationSize;yt++)E(ot.location+yt,J/ot.locationSize,mt,z,N*_t,(se+J/ot.locationSize*yt)*_t,Vt)}else{if(At.isInstancedBufferAttribute){for(let Ct=0;Ct<ot.locationSize;Ct++)T(ot.location+Ct,At.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Ct=0;Ct<ot.locationSize;Ct++)S(ot.location+Ct);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let Ct=0;Ct<ot.locationSize;Ct++)E(ot.location+Ct,J/ot.locationSize,mt,z,J*_t,J/ot.locationSize*Ct*_t,Vt)}}else if(j!==void 0){const z=j[K];if(z!==void 0)switch(z.length){case 2:r.vertexAttrib2fv(ot.location,z);break;case 3:r.vertexAttrib3fv(ot.location,z);break;case 4:r.vertexAttrib4fv(ot.location,z);break;default:r.vertexAttrib1fv(ot.location,z)}}}}M()}function U(){V();for(const I in o){const F=o[I];for(const B in F){const X=F[B];for(const Y in X)_(X[Y].object),delete X[Y];delete F[B]}delete o[I]}}function v(I){if(o[I.id]===void 0)return;const F=o[I.id];for(const B in F){const X=F[B];for(const Y in X)_(X[Y].object),delete X[Y];delete F[B]}delete o[I.id]}function w(I){for(const F in o){const B=o[F];if(B[I.id]===void 0)continue;const X=B[I.id];for(const Y in X)_(X[Y].object),delete X[Y];delete B[I.id]}}function V(){Q(),h=!0,c!==l&&(c=l,d(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:V,resetDefaultState:Q,dispose:U,releaseStatesOfGeometry:v,releaseStatesOfProgram:w,initAttributes:A,enableAttribute:S,disableUnusedAttributes:M}}function RA(r,t,e,n){const i=n.isWebGL2;let s;function a(h){s=h}function o(h,u){r.drawArrays(s,h,u),e.update(u,s,1)}function l(h,u,f){if(f===0)return;let d,_;if(i)d=r,_="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[_](s,h,u,f),e.update(u,s,f)}function c(h,u,f){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<f;_++)this.render(h[_],u[_]);else{d.multiDrawArraysWEBGL(s,h,0,u,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];e.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function CA(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=f>0,S=a||t.has("OES_texture_float"),T=A&&S,M=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:x,vertexTextures:A,floatFragmentTextures:S,floatVertexTextures:T,maxSamples:M}}function PA(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new si,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const _=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,m=r.get(u);if(!i||_===null||_.length===0||s&&!p)s?h(null):c();else{const x=s?0:n,A=x*4;let S=m.clippingState||null;l.value=S,S=h(_,f,A,d);for(let T=0;T!==A;++T)S[T]=e[T];m.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,_){const g=u!==null?u.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let A=0,S=d;A!==g;++A,S+=4)a.copy(u[A]).applyMatrix4(x,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function LA(r){let t=new WeakMap;function e(a,o){return o===Jo?a.mapping=zr:o===jo&&(a.mapping=kr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Jo||o===jo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Hm(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class DA extends Af{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Er=4,jc=[.125,.215,.35,.446,.526,.582],Ni=20,_o=new DA,Kc=new pt;let Ao=null,vo=0,Mo=0;const Ii=(1+Math.sqrt(5))/2,_r=1/Ii,$c=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Ii,_r),new C(0,Ii,-_r),new C(_r,0,Ii),new C(-_r,0,Ii),new C(Ii,_r,0),new C(-Ii,_r,0)];class th{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ao=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ao,vo,Mo),t.scissorTest=!1,qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zr||t.mapping===kr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ao=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:ys,format:pn,colorSpace:Jn,depthBuffer:!1},i=eh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eh(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IA(s)),this._blurMaterial=UA(s,t,e)}return i}_compileMaterial(t){const e=new ne(this._lodPlanes[0],t);this._renderer.compile(e,_o)}_sceneToCubeUV(t,e,n,i){const o=new dn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Kc),h.toneMapping=pi,h.autoClear=!1;const d=new Me({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),_=new ne(new jn,d);let g=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,g=!0):(d.color.copy(Kc),g=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):x===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const A=this._cubeSize;qs(i,x*A,m>2?A:0,A,A),h.setRenderTarget(i),g&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===zr||t.mapping===kr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nh());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new ne(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;qs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,_o)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=$c[(i-1)%$c.length];this._blur(t,i-1,i,s,a)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ne(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ni-1),g=s/_,p=isFinite(s)?1+Math.floor(h*g):Ni;p>Ni&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ni}`);const m=[];let x=0;for(let E=0;E<Ni;++E){const D=E/g,U=Math.exp(-D*D/2);m.push(U),E===0?x+=U:E<p&&(x+=2*U)}for(let E=0;E<m.length;E++)m[E]=m[E]/x;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:A}=this;f.dTheta.value=_,f.mipInt.value=A-n;const S=this._sizeLods[i],T=3*S*(i>A-Er?i-A+Er:0),M=4*(this._cubeSize-S);qs(e,T,M,3*S,2*S),l.setRenderTarget(e),l.render(u,_o)}}function IA(r){const t=[],e=[],n=[];let i=r;const s=r-Er+1+jc.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Er?l=jc[a-r+Er-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,_=6,g=3,p=2,m=1,x=new Float32Array(g*_*d),A=new Float32Array(p*_*d),S=new Float32Array(m*_*d);for(let M=0;M<d;M++){const E=M%3*2/3-1,D=M>2?0:-1,U=[E,D,0,E+2/3,D,0,E+2/3,D+1,0,E,D,0,E+2/3,D+1,0,E,D+1,0];x.set(U,g*_*M),A.set(f,p*_*M);const v=[M,M,M,M,M,M];S.set(v,m*_*M)}const T=new En;T.setAttribute("position",new Sn(x,g)),T.setAttribute("uv",new Sn(A,p)),T.setAttribute("faceIndex",new Sn(S,m)),t.push(T),i>Er&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function eh(r,t,e){const n=new Zi(r,t,e);return n.texture.mapping=Pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qs(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function UA(r,t,e){const n=new Float32Array(Ni),i=new C(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function nh(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function ih(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Tl(){return`

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
	`}function NA(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Jo||l===jo,h=l===zr||l===kr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new th(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new th(r));const f=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function OA(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function BA(r,t,e,n){const i={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}f.removeEventListener("dispose",a),delete i[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const _ in f)t.update(f[_],r.ARRAY_BUFFER);const d=u.morphAttributes;for(const _ in d){const g=d[_];for(let p=0,m=g.length;p<m;p++)t.update(g[p],r.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,_=u.attributes.position;let g=0;if(d!==null){const x=d.array;g=d.version;for(let A=0,S=x.length;A<S;A+=3){const T=x[A+0],M=x[A+1],E=x[A+2];f.push(T,M,M,E,E,T)}}else if(_!==void 0){const x=_.array;g=_.version;for(let A=0,S=x.length/3-1;A<S;A+=3){const T=A+0,M=A+1,E=A+2;f.push(T,M,M,E,E,T)}}else return;const p=new(cf(f)?gf:mf)(f,1);p.version=g;const m=s.get(u);m&&t.remove(m),s.set(u,p)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function FA(r,t,e,n){const i=n.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,_){r.drawElements(s,_,o,d*l),e.update(_,s,1)}function u(d,_,g){if(g===0)return;let p,m;if(i)p=r,m="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,_,o,d*l,g),e.update(_,s,g)}function f(d,_,g){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<g;m++)this.render(d[m]/l,_[m]);else{p.multiDrawElementsWEBGL(s,_,0,o,d,0,g);let m=0;for(let x=0;x<g;x++)m+=_[x];e.update(m,s,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function GA(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function zA(r,t){return r[0]-t[0]}function kA(r,t){return Math.abs(t[1])-Math.abs(r[1])}function VA(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,a=new we,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=d!==void 0?d.length:0;let g=s.get(h);if(g===void 0||g.count!==_){let I=function(){V.dispose(),s.delete(h),h.removeEventListener("dispose",I)};g!==void 0&&g.texture.dispose();const x=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],E=h.morphAttributes.color||[];let D=0;x===!0&&(D=1),A===!0&&(D=2),S===!0&&(D=3);let U=h.attributes.position.count*D,v=1;U>t.maxTextureSize&&(v=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const w=new Float32Array(U*v*4*_),V=new ff(w,U,v,_);V.type=Cn,V.needsUpdate=!0;const Q=D*4;for(let F=0;F<_;F++){const B=T[F],X=M[F],Y=E[F],Z=U*v*4*F;for(let j=0;j<B.count;j++){const K=j*Q;x===!0&&(a.fromBufferAttribute(B,j),w[Z+K+0]=a.x,w[Z+K+1]=a.y,w[Z+K+2]=a.z,w[Z+K+3]=0),A===!0&&(a.fromBufferAttribute(X,j),w[Z+K+4]=a.x,w[Z+K+5]=a.y,w[Z+K+6]=a.z,w[Z+K+7]=0),S===!0&&(a.fromBufferAttribute(Y,j),w[Z+K+8]=a.x,w[Z+K+9]=a.y,w[Z+K+10]=a.z,w[Z+K+11]=Y.itemSize===4?a.w:1)}}g={count:_,texture:V,size:new st(U,v)},s.set(h,g),h.addEventListener("dispose",I)}let p=0;for(let x=0;x<f.length;x++)p+=f[x];const m=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(r,"morphTargetBaseInfluence",m),u.getUniforms().setValue(r,"morphTargetInfluences",f),u.getUniforms().setValue(r,"morphTargetsTexture",g.texture,e),u.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const d=f===void 0?0:f.length;let _=n[h.id];if(_===void 0||_.length!==d){_=[];for(let A=0;A<d;A++)_[A]=[A,0];n[h.id]=_}for(let A=0;A<d;A++){const S=_[A];S[0]=A,S[1]=f[A]}_.sort(kA);for(let A=0;A<8;A++)A<d&&_[A][1]?(o[A][0]=_[A][0],o[A][1]=_[A][1]):(o[A][0]=Number.MAX_SAFE_INTEGER,o[A][1]=0);o.sort(zA);const g=h.morphAttributes.position,p=h.morphAttributes.normal;let m=0;for(let A=0;A<8;A++){const S=o[A],T=S[0],M=S[1];T!==Number.MAX_SAFE_INTEGER&&M?(g&&h.getAttribute("morphTarget"+A)!==g[T]&&h.setAttribute("morphTarget"+A,g[T]),p&&h.getAttribute("morphNormal"+A)!==p[T]&&h.setAttribute("morphNormal"+A,p[T]),i[A]=M,m+=M):(g&&h.hasAttribute("morphTarget"+A)===!0&&h.deleteAttribute("morphTarget"+A),p&&h.hasAttribute("morphNormal"+A)===!0&&h.deleteAttribute("morphNormal"+A),i[A]=0)}const x=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(r,"morphTargetBaseInfluence",x),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function HA(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class xf extends Fe{constructor(t,e,n,i,s,a,o,l,c,h){if(h=h!==void 0?h:Hi,h!==Hi&&h!==Vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Hi&&(n=ci),n===void 0&&h===Vr&&(n=Vi),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:he,this.minFilter=l!==void 0?l:he,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const yf=new Fe,Sf=new xf(1,1);Sf.compareFunction=lf;const Ef=new ff,Tf=new bm,bf=new El,rh=[],sh=[],ah=new Float32Array(16),oh=new Float32Array(9),lh=new Float32Array(4);function Xr(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=rh[i];if(s===void 0&&(s=new Float32Array(i),rh[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function xe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function ye(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Ia(r,t){let e=sh[t];e===void 0&&(e=new Int32Array(t),sh[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function WA(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function YA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;r.uniform2fv(this.addr,t),ye(e,t)}}function XA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;r.uniform3fv(this.addr,t),ye(e,t)}}function ZA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;r.uniform4fv(this.addr,t),ye(e,t)}}function QA(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;lh.set(n),r.uniformMatrix2fv(this.addr,!1,lh),ye(e,n)}}function qA(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;oh.set(n),r.uniformMatrix3fv(this.addr,!1,oh),ye(e,n)}}function JA(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;ah.set(n),r.uniformMatrix4fv(this.addr,!1,ah),ye(e,n)}}function jA(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function KA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;r.uniform2iv(this.addr,t),ye(e,t)}}function $A(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;r.uniform3iv(this.addr,t),ye(e,t)}}function t0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;r.uniform4iv(this.addr,t),ye(e,t)}}function e0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function n0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;r.uniform2uiv(this.addr,t),ye(e,t)}}function i0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;r.uniform3uiv(this.addr,t),ye(e,t)}}function r0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;r.uniform4uiv(this.addr,t),ye(e,t)}}function s0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Sf:yf;e.setTexture2D(t||s,i)}function a0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Tf,i)}function o0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||bf,i)}function l0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ef,i)}function c0(r){switch(r){case 5126:return WA;case 35664:return YA;case 35665:return XA;case 35666:return ZA;case 35674:return QA;case 35675:return qA;case 35676:return JA;case 5124:case 35670:return jA;case 35667:case 35671:return KA;case 35668:case 35672:return $A;case 35669:case 35673:return t0;case 5125:return e0;case 36294:return n0;case 36295:return i0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return o0;case 36289:case 36303:case 36311:case 36292:return l0}}function h0(r,t){r.uniform1fv(this.addr,t)}function u0(r,t){const e=Xr(t,this.size,2);r.uniform2fv(this.addr,e)}function f0(r,t){const e=Xr(t,this.size,3);r.uniform3fv(this.addr,e)}function d0(r,t){const e=Xr(t,this.size,4);r.uniform4fv(this.addr,e)}function p0(r,t){const e=Xr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function m0(r,t){const e=Xr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function g0(r,t){const e=Xr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function _0(r,t){r.uniform1iv(this.addr,t)}function A0(r,t){r.uniform2iv(this.addr,t)}function v0(r,t){r.uniform3iv(this.addr,t)}function M0(r,t){r.uniform4iv(this.addr,t)}function x0(r,t){r.uniform1uiv(this.addr,t)}function y0(r,t){r.uniform2uiv(this.addr,t)}function S0(r,t){r.uniform3uiv(this.addr,t)}function E0(r,t){r.uniform4uiv(this.addr,t)}function T0(r,t,e){const n=this.cache,i=t.length,s=Ia(e,i);xe(n,s)||(r.uniform1iv(this.addr,s),ye(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||yf,s[a])}function b0(r,t,e){const n=this.cache,i=t.length,s=Ia(e,i);xe(n,s)||(r.uniform1iv(this.addr,s),ye(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Tf,s[a])}function w0(r,t,e){const n=this.cache,i=t.length,s=Ia(e,i);xe(n,s)||(r.uniform1iv(this.addr,s),ye(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||bf,s[a])}function R0(r,t,e){const n=this.cache,i=t.length,s=Ia(e,i);xe(n,s)||(r.uniform1iv(this.addr,s),ye(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Ef,s[a])}function C0(r){switch(r){case 5126:return h0;case 35664:return u0;case 35665:return f0;case 35666:return d0;case 35674:return p0;case 35675:return m0;case 35676:return g0;case 5124:case 35670:return _0;case 35667:case 35671:return A0;case 35668:case 35672:return v0;case 35669:case 35673:return M0;case 5125:return x0;case 36294:return y0;case 36295:return S0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return b0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return R0}}class P0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=c0(e.type)}}class L0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=C0(e.type)}}class D0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const xo=/(\w+)(\])?(\[|\.)?/g;function ch(r,t){r.seq.push(t),r.map[t.id]=t}function I0(r,t,e){const n=r.name,i=n.length;for(xo.lastIndex=0;;){const s=xo.exec(n),a=xo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ch(e,c===void 0?new P0(o,r,t):new L0(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new D0(o),ch(e,u)),e=u}}}class ha{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);I0(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function hh(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const U0=37297;let N0=0;function O0(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function B0(r){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(r);let n;switch(t===e?n="":t===ya&&e===xa?n="LinearDisplayP3ToLinearSRGB":t===xa&&e===ya&&(n="LinearSRGBToLinearDisplayP3"),r){case Jn:case La:return[n,"LinearTransferOETF"];case jt:case yl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function uh(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+O0(r.getShaderSource(t),a)}else return i}function F0(r,t){const e=B0(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function G0(r,t){let e;switch(t){case Np:e="Linear";break;case Op:e="Reinhard";break;case Bp:e="OptimizedCineon";break;case Fp:e="ACESFilmic";break;case zp:e="AgX";break;case Gp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function z0(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Tr).join(`
`)}function k0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tr).join(`
`)}function V0(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function H0(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Tr(r){return r!==""}function fh(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const W0=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(r){return r.replace(W0,X0)}const Y0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function X0(r,t){let e=Ft[t];if(e===void 0){const n=Y0.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return el(e)}const Z0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ph(r){return r.replace(Z0,Q0)}function Q0(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function mh(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function q0(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ju?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===cp?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function J0(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case zr:case kr:t="ENVMAP_TYPE_CUBE";break;case Pa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function j0(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case kr:t="ENVMAP_MODE_REFRACTION";break}return t}function K0(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ca:t="ENVMAP_BLENDING_MULTIPLY";break;case Ip:t="ENVMAP_BLENDING_MIX";break;case Up:t="ENVMAP_BLENDING_ADD";break}return t}function $0(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function tv(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=q0(e),c=J0(e),h=j0(e),u=K0(e),f=$0(e),d=e.isWebGL2?"":z0(e),_=k0(e),g=V0(s),p=i.createProgram();let m,x,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Tr).join(`
`),m.length>0&&(m+=`
`),x=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Tr).join(`
`),x.length>0&&(x+=`
`)):(m=[mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),x=[d,mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pi?"#define TONE_MAPPING":"",e.toneMapping!==pi?Ft.tonemapping_pars_fragment:"",e.toneMapping!==pi?G0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,F0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Tr).join(`
`)),a=el(a),a=fh(a,e),a=dh(a,e),o=el(o),o=fh(o,e),o=dh(o,e),a=ph(a),o=ph(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const S=A+m+a,T=A+x+o,M=hh(i,i.VERTEX_SHADER,S),E=hh(i,i.FRAGMENT_SHADER,T);i.attachShader(p,M),i.attachShader(p,E),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function D(V){if(r.debug.checkShaderErrors){const Q=i.getProgramInfoLog(p).trim(),I=i.getShaderInfoLog(M).trim(),F=i.getShaderInfoLog(E).trim();let B=!0,X=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(B=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,M,E);else{const Y=uh(i,M,"vertex"),Z=uh(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Q+`
`+Y+`
`+Z)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(I===""||F==="")&&(X=!1);X&&(V.diagnostics={runnable:B,programLog:Q,vertexShader:{log:I,prefix:m},fragmentShader:{log:F,prefix:x}})}i.deleteShader(M),i.deleteShader(E),U=new ha(i,p),v=H0(i,p)}let U;this.getUniforms=function(){return U===void 0&&D(this),U};let v;this.getAttributes=function(){return v===void 0&&D(this),v};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(p,U0)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=N0++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=E,this}let ev=0;class nv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new iv(t),e.set(t,n)),n}}class iv{constructor(t){this.id=ev++,this.code=t,this.usedTimes=0}}function rv(r,t,e,n,i,s,a){const o=new df,l=new nv,c=new Set,h=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,d=i.vertexTextures;let _=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,w,V,Q,I){const F=Q.fog,B=I.geometry,X=v.isMeshStandardMaterial?Q.environment:null,Y=(v.isMeshStandardMaterial?e:t).get(v.envMap||X),Z=Y&&Y.mapping===Pa?Y.image.height:null,j=g[v.type];v.precision!==null&&(_=i.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const K=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ot=K!==void 0?K.length:0;let At=0;B.morphAttributes.position!==void 0&&(At=1),B.morphAttributes.normal!==void 0&&(At=2),B.morphAttributes.color!==void 0&&(At=3);let z,J,ct,Mt;if(j){const Wt=wn[j];z=Wt.vertexShader,J=Wt.fragmentShader}else z=v.vertexShader,J=v.fragmentShader,l.update(v),ct=l.getVertexShaderID(v),Mt=l.getFragmentShaderID(v);const mt=r.getRenderTarget(),_t=I.isInstancedMesh===!0,Vt=I.isBatchedMesh===!0,Ct=!!v.map,N=!!v.matcap,se=!!Y,yt=!!v.aoMap,Rt=!!v.lightMap,vt=!!v.bumpMap,qt=!!v.normalMap,Dt=!!v.displacementMap,R=!!v.emissiveMap,y=!!v.metalnessMap,G=!!v.roughnessMap,et=v.anisotropy>0,$=v.clearcoat>0,tt=v.iridescence>0,gt=v.sheen>0,at=v.transmission>0,ut=et&&!!v.anisotropyMap,St=$&&!!v.clearcoatMap,Pt=$&&!!v.clearcoatNormalMap,q=$&&!!v.clearcoatRoughnessMap,Qt=tt&&!!v.iridescenceMap,Gt=tt&&!!v.iridescenceThicknessMap,It=gt&&!!v.sheenColorMap,Tt=gt&&!!v.sheenRoughnessMap,ft=!!v.specularMap,Ot=!!v.specularColorMap,L=!!v.specularIntensityMap,rt=at&&!!v.transmissionMap,ht=at&&!!v.thicknessMap,bt=!!v.gradientMap,P=!!v.alphaMap,it=v.alphaTest>0,nt=!!v.alphaHash,xt=!!v.extensions;let wt=pi;v.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(wt=r.toneMapping);const Xt={isWebGL2:u,shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:z,fragmentShader:J,defines:v.defines,customVertexShaderID:ct,customFragmentShaderID:Mt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:Vt,instancing:_t,instancingColor:_t&&I.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:mt===null?r.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Jn,alphaToCoverage:!!v.alphaToCoverage,map:Ct,matcap:N,envMap:se,envMapMode:se&&Y.mapping,envMapCubeUVHeight:Z,aoMap:yt,lightMap:Rt,bumpMap:vt,normalMap:qt,displacementMap:d&&Dt,emissiveMap:R,normalMapObjectSpace:qt&&v.normalMapType===jp,normalMapTangentSpace:qt&&v.normalMapType===qi,metalnessMap:y,roughnessMap:G,anisotropy:et,anisotropyMap:ut,clearcoat:$,clearcoatMap:St,clearcoatNormalMap:Pt,clearcoatRoughnessMap:q,iridescence:tt,iridescenceMap:Qt,iridescenceThicknessMap:Gt,sheen:gt,sheenColorMap:It,sheenRoughnessMap:Tt,specularMap:ft,specularColorMap:Ot,specularIntensityMap:L,transmission:at,transmissionMap:rt,thicknessMap:ht,gradientMap:bt,opaque:v.transparent===!1&&v.blending===Pr&&v.alphaToCoverage===!1,alphaMap:P,alphaTest:it,alphaHash:nt,combine:v.combine,mapUv:Ct&&p(v.map.channel),aoMapUv:yt&&p(v.aoMap.channel),lightMapUv:Rt&&p(v.lightMap.channel),bumpMapUv:vt&&p(v.bumpMap.channel),normalMapUv:qt&&p(v.normalMap.channel),displacementMapUv:Dt&&p(v.displacementMap.channel),emissiveMapUv:R&&p(v.emissiveMap.channel),metalnessMapUv:y&&p(v.metalnessMap.channel),roughnessMapUv:G&&p(v.roughnessMap.channel),anisotropyMapUv:ut&&p(v.anisotropyMap.channel),clearcoatMapUv:St&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Qt&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:It&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&p(v.sheenRoughnessMap.channel),specularMapUv:ft&&p(v.specularMap.channel),specularColorMapUv:Ot&&p(v.specularColorMap.channel),specularIntensityMapUv:L&&p(v.specularIntensityMap.channel),transmissionMapUv:rt&&p(v.transmissionMap.channel),thicknessMapUv:ht&&p(v.thicknessMap.channel),alphaMapUv:P&&p(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(qt||et),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(Ct||P),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:I.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:At,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:wt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ct&&v.map.isVideoTexture===!0&&Jt.getTransfer(v.map.colorSpace)===ee,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===nn,flipSided:v.side===qe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:xt&&v.extensions.derivatives===!0,extensionFragDepth:xt&&v.extensions.fragDepth===!0,extensionDrawBuffers:xt&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:xt&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:xt&&v.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Xt.vertexUv1s=c.has(1),Xt.vertexUv2s=c.has(2),Xt.vertexUv3s=c.has(3),c.clear(),Xt}function x(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const V in v.defines)w.push(V),w.push(v.defines[V]);return v.isRawShaderMaterial===!1&&(A(w,v),S(w,v),w.push(r.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function A(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function S(v,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),v.push(o.mask)}function T(v){const w=g[v.type];let V;if(w){const Q=wn[w];V=Gm.clone(Q.uniforms)}else V=v.uniforms;return V}function M(v,w){let V;for(let Q=0,I=h.length;Q<I;Q++){const F=h[Q];if(F.cacheKey===w){V=F,++V.usedTimes;break}}return V===void 0&&(V=new tv(r,w,v,s),h.push(V)),V}function E(v){if(--v.usedTimes===0){const w=h.indexOf(v);h[w]=h[h.length-1],h.pop(),v.destroy()}}function D(v){l.remove(v)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:T,acquireProgram:M,releaseProgram:E,releaseShaderCache:D,programs:h,dispose:U}}function sv(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function av(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function gh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function _h(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,d,_,g,p){let m=r[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},r[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=g,m.group=p),t++,m}function o(u,f,d,_,g,p){const m=a(u,f,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function l(u,f,d,_,g,p){const m=a(u,f,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||av),n.length>1&&n.sort(f||gh),i.length>1&&i.sort(f||gh)}function h(){for(let u=t,f=r.length;u<f;u++){const d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function ov(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new _h,r.set(n,[a])):i>=s.length?(a=new _h,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function lv(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new pt};break;case"SpotLight":e={position:new C,direction:new C,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":e={color:new pt,position:new C,halfWidth:new C,halfHeight:new C};break}return r[t.id]=e,e}}}function cv(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let hv=0;function uv(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function fv(r,t){const e=new lv,n=cv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new C);const s=new C,a=new ie,o=new ie;function l(h,u){let f=0,d=0,_=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let g=0,p=0,m=0,x=0,A=0,S=0,T=0,M=0,E=0,D=0,U=0;h.sort(uv);const v=u===!0?Math.PI:1;for(let V=0,Q=h.length;V<Q;V++){const I=h[V],F=I.color,B=I.intensity,X=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=F.r*B*v,d+=F.g*B*v,_+=F.b*B*v;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(I.sh.coefficients[Z],B);U++}else if(I.isDirectionalLight){const Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity*v),I.castShadow){const j=I.shadow,K=n.get(I);K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,i.directionalShadow[g]=K,i.directionalShadowMap[g]=Y,i.directionalShadowMatrix[g]=I.shadow.matrix,S++}i.directional[g]=Z,g++}else if(I.isSpotLight){const Z=e.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(F).multiplyScalar(B*v),Z.distance=X,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,i.spot[m]=Z;const j=I.shadow;if(I.map&&(i.spotLightMap[E]=I.map,E++,j.updateMatrices(I),I.castShadow&&D++),i.spotLightMatrix[m]=j.matrix,I.castShadow){const K=n.get(I);K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,i.spotShadow[m]=K,i.spotShadowMap[m]=Y,M++}m++}else if(I.isRectAreaLight){const Z=e.get(I);Z.color.copy(F).multiplyScalar(B),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),i.rectArea[x]=Z,x++}else if(I.isPointLight){const Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity*v),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){const j=I.shadow,K=n.get(I);K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,K.shadowCameraNear=j.camera.near,K.shadowCameraFar=j.camera.far,i.pointShadow[p]=K,i.pointShadowMap[p]=Y,i.pointShadowMatrix[p]=I.shadow.matrix,T++}i.point[p]=Z,p++}else if(I.isHemisphereLight){const Z=e.get(I);Z.skyColor.copy(I.color).multiplyScalar(B*v),Z.groundColor.copy(I.groundColor).multiplyScalar(B*v),i.hemi[A]=Z,A++}}x>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=_;const w=i.hash;(w.directionalLength!==g||w.pointLength!==p||w.spotLength!==m||w.rectAreaLength!==x||w.hemiLength!==A||w.numDirectionalShadows!==S||w.numPointShadows!==T||w.numSpotShadows!==M||w.numSpotMaps!==E||w.numLightProbes!==U)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=x,i.point.length=p,i.hemi.length=A,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=M+E-D,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=U,w.directionalLength=g,w.pointLength=p,w.spotLength=m,w.rectAreaLength=x,w.hemiLength=A,w.numDirectionalShadows=S,w.numPointShadows=T,w.numSpotShadows=M,w.numSpotMaps=E,w.numLightProbes=U,i.version=hv++)}function c(h,u){let f=0,d=0,_=0,g=0,p=0;const m=u.matrixWorldInverse;for(let x=0,A=h.length;x<A;x++){const S=h[x];if(S.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),f++}else if(S.isSpotLight){const T=i.spot[_];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),_++}else if(S.isRectAreaLight){const T=i.rectArea[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),o.identity(),a.copy(S.matrixWorld),a.premultiply(m),o.extractRotation(a),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const T=i.point[d];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const T=i.hemi[p];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:i}}function Ah(r,t){const e=new fv(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function dv(r,t){let e=new WeakMap;function n(s,a=0){const o=e.get(s);let l;return o===void 0?(l=new Ah(r,t),e.set(s,[l])):a>=o.length?(l=new Ah(r,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class wf extends Le{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Rf extends Le{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const pv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mv=`uniform sampler2D shadow_pass;
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
}`;function gv(r,t,e){let n=new vf;const i=new st,s=new st,a=new we,o=new wf({depthPacking:Jp}),l=new Rf,c={},h=e.maxTextureSize,u={[Ai]:qe,[qe]:Ai,[nn]:nn},f=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:pv,fragmentShader:mv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new En;_.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ne(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ju;let m=this.type;this.render=function(M,E,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const U=r.getRenderTarget(),v=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),V=r.state;V.setBlending(di),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const Q=m!==Wn&&this.type===Wn,I=m===Wn&&this.type!==Wn;for(let F=0,B=M.length;F<B;F++){const X=M[F],Y=X.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const Z=Y.getFrameExtents();if(i.multiply(Z),s.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Z.x),i.x=s.x*Z.x,Y.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Z.y),i.y=s.y*Z.y,Y.mapSize.y=s.y)),Y.map===null||Q===!0||I===!0){const K=this.type!==Wn?{minFilter:he,magFilter:he}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Zi(i.x,i.y,K),Y.map.texture.name=X.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const j=Y.getViewportCount();for(let K=0;K<j;K++){const ot=Y.getViewport(K);a.set(s.x*ot.x,s.y*ot.y,s.x*ot.z,s.y*ot.w),V.viewport(a),Y.updateMatrices(X,K),n=Y.getFrustum(),S(E,D,Y.camera,X,this.type)}Y.isPointLightShadow!==!0&&this.type===Wn&&x(Y,D),Y.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(U,v,w)};function x(M,E){const D=t.update(g);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Zi(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(E,null,D,f,g,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(E,null,D,d,g,null)}function A(M,E,D,U){let v=null;const w=D.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(w!==void 0)v=w;else if(v=D.isPointLight===!0?l:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const V=v.uuid,Q=E.uuid;let I=c[V];I===void 0&&(I={},c[V]=I);let F=I[Q];F===void 0&&(F=v.clone(),I[Q]=F,E.addEventListener("dispose",T)),v=F}if(v.visible=E.visible,v.wireframe=E.wireframe,U===Wn?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:u[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const V=r.properties.get(v);V.light=D}return v}function S(M,E,D,U,v){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&v===Wn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,M.matrixWorld);const Q=t.update(M),I=M.material;if(Array.isArray(I)){const F=Q.groups;for(let B=0,X=F.length;B<X;B++){const Y=F[B],Z=I[Y.materialIndex];if(Z&&Z.visible){const j=A(M,Z,U,v);M.onBeforeShadow(r,M,E,D,Q,j,Y),r.renderBufferDirect(D,null,Q,j,M,Y),M.onAfterShadow(r,M,E,D,Q,j,Y)}}}else if(I.visible){const F=A(M,I,U,v);M.onBeforeShadow(r,M,E,D,Q,F,null),r.renderBufferDirect(D,null,Q,F,M,null),M.onAfterShadow(r,M,E,D,Q,F,null)}}const V=M.children;for(let Q=0,I=V.length;Q<I;Q++)S(V[Q],E,D,U,v)}function T(M){M.target.removeEventListener("dispose",T);for(const D in c){const U=c[D],v=M.target.uuid;v in U&&(U[v].dispose(),delete U[v])}}}function _v(r,t,e){const n=e.isWebGL2;function i(){let P=!1;const it=new we;let nt=null;const xt=new we(0,0,0,0);return{setMask:function(wt){nt!==wt&&!P&&(r.colorMask(wt,wt,wt,wt),nt=wt)},setLocked:function(wt){P=wt},setClear:function(wt,Xt,Wt,Kt,Ce){Ce===!0&&(wt*=Kt,Xt*=Kt,Wt*=Kt),it.set(wt,Xt,Wt,Kt),xt.equals(it)===!1&&(r.clearColor(wt,Xt,Wt,Kt),xt.copy(it))},reset:function(){P=!1,nt=null,xt.set(-1,0,0,0)}}}function s(){let P=!1,it=null,nt=null,xt=null;return{setTest:function(wt){wt?_t(r.DEPTH_TEST):Vt(r.DEPTH_TEST)},setMask:function(wt){it!==wt&&!P&&(r.depthMask(wt),it=wt)},setFunc:function(wt){if(nt!==wt){switch(wt){case bp:r.depthFunc(r.NEVER);break;case wp:r.depthFunc(r.ALWAYS);break;case Rp:r.depthFunc(r.LESS);break;case va:r.depthFunc(r.LEQUAL);break;case Cp:r.depthFunc(r.EQUAL);break;case Pp:r.depthFunc(r.GEQUAL);break;case Lp:r.depthFunc(r.GREATER);break;case Dp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}nt=wt}},setLocked:function(wt){P=wt},setClear:function(wt){xt!==wt&&(r.clearDepth(wt),xt=wt)},reset:function(){P=!1,it=null,nt=null,xt=null}}}function a(){let P=!1,it=null,nt=null,xt=null,wt=null,Xt=null,Wt=null,Kt=null,Ce=null;return{setTest:function(Zt){P||(Zt?_t(r.STENCIL_TEST):Vt(r.STENCIL_TEST))},setMask:function(Zt){it!==Zt&&!P&&(r.stencilMask(Zt),it=Zt)},setFunc:function(Zt,de,Ge){(nt!==Zt||xt!==de||wt!==Ge)&&(r.stencilFunc(Zt,de,Ge),nt=Zt,xt=de,wt=Ge)},setOp:function(Zt,de,Ge){(Xt!==Zt||Wt!==de||Kt!==Ge)&&(r.stencilOp(Zt,de,Ge),Xt=Zt,Wt=de,Kt=Ge)},setLocked:function(Zt){P=Zt},setClear:function(Zt){Ce!==Zt&&(r.clearStencil(Zt),Ce=Zt)},reset:function(){P=!1,it=null,nt=null,xt=null,wt=null,Xt=null,Wt=null,Kt=null,Ce=null}}}const o=new i,l=new s,c=new a,h=new WeakMap,u=new WeakMap;let f={},d={},_=new WeakMap,g=[],p=null,m=!1,x=null,A=null,S=null,T=null,M=null,E=null,D=null,U=new pt(0,0,0),v=0,w=!1,V=null,Q=null,I=null,F=null,B=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,Z=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(j)[1]),Y=Z>=1):j.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Y=Z>=2);let K=null,ot={};const At=r.getParameter(r.SCISSOR_BOX),z=r.getParameter(r.VIEWPORT),J=new we().fromArray(At),ct=new we().fromArray(z);function Mt(P,it,nt,xt){const wt=new Uint8Array(4),Xt=r.createTexture();r.bindTexture(P,Xt),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Wt=0;Wt<nt;Wt++)n&&(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)?r.texImage3D(it,0,r.RGBA,1,1,xt,0,r.RGBA,r.UNSIGNED_BYTE,wt):r.texImage2D(it+Wt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,wt);return Xt}const mt={};mt[r.TEXTURE_2D]=Mt(r.TEXTURE_2D,r.TEXTURE_2D,1),mt[r.TEXTURE_CUBE_MAP]=Mt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(mt[r.TEXTURE_2D_ARRAY]=Mt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),mt[r.TEXTURE_3D]=Mt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),_t(r.DEPTH_TEST),l.setFunc(va),Dt(!1),R(jl),_t(r.CULL_FACE),vt(di);function _t(P){f[P]!==!0&&(r.enable(P),f[P]=!0)}function Vt(P){f[P]!==!1&&(r.disable(P),f[P]=!1)}function Ct(P,it){return d[P]!==it?(r.bindFramebuffer(P,it),d[P]=it,n&&(P===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=it),P===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=it)),!0):!1}function N(P,it){let nt=g,xt=!1;if(P)if(nt=_.get(it),nt===void 0&&(nt=[],_.set(it,nt)),P.isWebGLMultipleRenderTargets){const wt=P.texture;if(nt.length!==wt.length||nt[0]!==r.COLOR_ATTACHMENT0){for(let Xt=0,Wt=wt.length;Xt<Wt;Xt++)nt[Xt]=r.COLOR_ATTACHMENT0+Xt;nt.length=wt.length,xt=!0}}else nt[0]!==r.COLOR_ATTACHMENT0&&(nt[0]=r.COLOR_ATTACHMENT0,xt=!0);else nt[0]!==r.BACK&&(nt[0]=r.BACK,xt=!0);xt&&(e.isWebGL2?r.drawBuffers(nt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(nt))}function se(P){return p!==P?(r.useProgram(P),p=P,!0):!1}const yt={[Ui]:r.FUNC_ADD,[up]:r.FUNC_SUBTRACT,[fp]:r.FUNC_REVERSE_SUBTRACT};if(n)yt[ec]=r.MIN,yt[nc]=r.MAX;else{const P=t.get("EXT_blend_minmax");P!==null&&(yt[ec]=P.MIN_EXT,yt[nc]=P.MAX_EXT)}const Rt={[dp]:r.ZERO,[pp]:r.ONE,[mp]:r.SRC_COLOR,[Qo]:r.SRC_ALPHA,[xp]:r.SRC_ALPHA_SATURATE,[vp]:r.DST_COLOR,[_p]:r.DST_ALPHA,[gp]:r.ONE_MINUS_SRC_COLOR,[qo]:r.ONE_MINUS_SRC_ALPHA,[Mp]:r.ONE_MINUS_DST_COLOR,[Ap]:r.ONE_MINUS_DST_ALPHA,[yp]:r.CONSTANT_COLOR,[Sp]:r.ONE_MINUS_CONSTANT_COLOR,[Ep]:r.CONSTANT_ALPHA,[Tp]:r.ONE_MINUS_CONSTANT_ALPHA};function vt(P,it,nt,xt,wt,Xt,Wt,Kt,Ce,Zt){if(P===di){m===!0&&(Vt(r.BLEND),m=!1);return}if(m===!1&&(_t(r.BLEND),m=!0),P!==hp){if(P!==x||Zt!==w){if((A!==Ui||M!==Ui)&&(r.blendEquation(r.FUNC_ADD),A=Ui,M=Ui),Zt)switch(P){case Pr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Kl:r.blendFunc(r.ONE,r.ONE);break;case $l:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case tc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Pr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Kl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case $l:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case tc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,T=null,E=null,D=null,U.set(0,0,0),v=0,x=P,w=Zt}return}wt=wt||it,Xt=Xt||nt,Wt=Wt||xt,(it!==A||wt!==M)&&(r.blendEquationSeparate(yt[it],yt[wt]),A=it,M=wt),(nt!==S||xt!==T||Xt!==E||Wt!==D)&&(r.blendFuncSeparate(Rt[nt],Rt[xt],Rt[Xt],Rt[Wt]),S=nt,T=xt,E=Xt,D=Wt),(Kt.equals(U)===!1||Ce!==v)&&(r.blendColor(Kt.r,Kt.g,Kt.b,Ce),U.copy(Kt),v=Ce),x=P,w=!1}function qt(P,it){P.side===nn?Vt(r.CULL_FACE):_t(r.CULL_FACE);let nt=P.side===qe;it&&(nt=!nt),Dt(nt),P.blending===Pr&&P.transparent===!1?vt(di):vt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const xt=P.stencilWrite;c.setTest(xt),xt&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),G(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?_t(r.SAMPLE_ALPHA_TO_COVERAGE):Vt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(P){V!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),V=P)}function R(P){P!==op?(_t(r.CULL_FACE),P!==Q&&(P===jl?r.cullFace(r.BACK):P===lp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Vt(r.CULL_FACE),Q=P}function y(P){P!==I&&(Y&&r.lineWidth(P),I=P)}function G(P,it,nt){P?(_t(r.POLYGON_OFFSET_FILL),(F!==it||B!==nt)&&(r.polygonOffset(it,nt),F=it,B=nt)):Vt(r.POLYGON_OFFSET_FILL)}function et(P){P?_t(r.SCISSOR_TEST):Vt(r.SCISSOR_TEST)}function $(P){P===void 0&&(P=r.TEXTURE0+X-1),K!==P&&(r.activeTexture(P),K=P)}function tt(P,it,nt){nt===void 0&&(K===null?nt=r.TEXTURE0+X-1:nt=K);let xt=ot[nt];xt===void 0&&(xt={type:void 0,texture:void 0},ot[nt]=xt),(xt.type!==P||xt.texture!==it)&&(K!==nt&&(r.activeTexture(nt),K=nt),r.bindTexture(P,it||mt[P]),xt.type=P,xt.texture=it)}function gt(){const P=ot[K];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function at(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function St(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pt(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Qt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Gt(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function It(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Tt(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ft(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ot(P){J.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),J.copy(P))}function L(P){ct.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),ct.copy(P))}function rt(P,it){let nt=u.get(it);nt===void 0&&(nt=new WeakMap,u.set(it,nt));let xt=nt.get(P);xt===void 0&&(xt=r.getUniformBlockIndex(it,P.name),nt.set(P,xt))}function ht(P,it){const xt=u.get(it).get(P);h.get(it)!==xt&&(r.uniformBlockBinding(it,xt,P.__bindingPointIndex),h.set(it,xt))}function bt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},K=null,ot={},d={},_=new WeakMap,g=[],p=null,m=!1,x=null,A=null,S=null,T=null,M=null,E=null,D=null,U=new pt(0,0,0),v=0,w=!1,V=null,Q=null,I=null,F=null,B=null,J.set(0,0,r.canvas.width,r.canvas.height),ct.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:_t,disable:Vt,bindFramebuffer:Ct,drawBuffers:N,useProgram:se,setBlending:vt,setMaterial:qt,setFlipSided:Dt,setCullFace:R,setLineWidth:y,setPolygonOffset:G,setScissorTest:et,activeTexture:$,bindTexture:tt,unbindTexture:gt,compressedTexImage2D:at,compressedTexImage3D:ut,texImage2D:Tt,texImage3D:ft,updateUBOMapping:rt,uniformBlockBinding:ht,texStorage2D:Gt,texStorage3D:It,texSubImage2D:St,texSubImage3D:Pt,compressedTexSubImage2D:q,compressedTexSubImage3D:Qt,scissor:Ot,viewport:L,reset:bt}}function Av(r,t,e,n,i,s,a){const o=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,y){return d?new OffscreenCanvas(R,y):Es("canvas")}function g(R,y,G,et){let $=1;if((R.width>et||R.height>et)&&($=et/Math.max(R.width,R.height)),$<1||y===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const tt=y?Ea:Math.floor,gt=tt($*R.width),at=tt($*R.height);u===void 0&&(u=_(gt,at));const ut=G?_(gt,at):u;return ut.width=gt,ut.height=at,ut.getContext("2d").drawImage(R,0,0,gt,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+gt+"x"+at+")."),ut}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function p(R){return tl(R.width)&&tl(R.height)}function m(R){return o?!1:R.wrapS!==yn||R.wrapT!==yn||R.minFilter!==he&&R.minFilter!==We}function x(R,y){return R.generateMipmaps&&y&&R.minFilter!==he&&R.minFilter!==We}function A(R){r.generateMipmap(R)}function S(R,y,G,et,$=!1){if(o===!1)return y;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let tt=y;if(y===r.RED&&(G===r.FLOAT&&(tt=r.R32F),G===r.HALF_FLOAT&&(tt=r.R16F),G===r.UNSIGNED_BYTE&&(tt=r.R8)),y===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(tt=r.R8UI),G===r.UNSIGNED_SHORT&&(tt=r.R16UI),G===r.UNSIGNED_INT&&(tt=r.R32UI),G===r.BYTE&&(tt=r.R8I),G===r.SHORT&&(tt=r.R16I),G===r.INT&&(tt=r.R32I)),y===r.RG&&(G===r.FLOAT&&(tt=r.RG32F),G===r.HALF_FLOAT&&(tt=r.RG16F),G===r.UNSIGNED_BYTE&&(tt=r.RG8)),y===r.RGBA){const gt=$?Ma:Jt.getTransfer(et);G===r.FLOAT&&(tt=r.RGBA32F),G===r.HALF_FLOAT&&(tt=r.RGBA16F),G===r.UNSIGNED_BYTE&&(tt=gt===ee?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(tt=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(tt=r.RGB5_A1)}return(tt===r.R16F||tt===r.R32F||tt===r.RG16F||tt===r.RG32F||tt===r.RGBA16F||tt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function T(R,y,G){return x(R,G)===!0||R.isFramebufferTexture&&R.minFilter!==he&&R.minFilter!==We?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function M(R){return R===he||R===ic||R===qr?r.NEAREST:r.LINEAR}function E(R){const y=R.target;y.removeEventListener("dispose",E),U(y),y.isVideoTexture&&h.delete(y)}function D(R){const y=R.target;y.removeEventListener("dispose",D),w(y)}function U(R){const y=n.get(R);if(y.__webglInit===void 0)return;const G=R.source,et=f.get(G);if(et){const $=et[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&v(R),Object.keys(et).length===0&&f.delete(G)}n.remove(R)}function v(R){const y=n.get(R);r.deleteTexture(y.__webglTexture);const G=R.source,et=f.get(G);delete et[y.__cacheKey],a.memory.textures--}function w(R){const y=R.texture,G=n.get(R),et=n.get(y);if(et.__webglTexture!==void 0&&(r.deleteTexture(et.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(G.__webglFramebuffer[$]))for(let tt=0;tt<G.__webglFramebuffer[$].length;tt++)r.deleteFramebuffer(G.__webglFramebuffer[$][tt]);else r.deleteFramebuffer(G.__webglFramebuffer[$]);G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer[$])}else{if(Array.isArray(G.__webglFramebuffer))for(let $=0;$<G.__webglFramebuffer.length;$++)r.deleteFramebuffer(G.__webglFramebuffer[$]);else r.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&r.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let $=0;$<G.__webglColorRenderbuffer.length;$++)G.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(G.__webglColorRenderbuffer[$]);G.__webglDepthRenderbuffer&&r.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let $=0,tt=y.length;$<tt;$++){const gt=n.get(y[$]);gt.__webglTexture&&(r.deleteTexture(gt.__webglTexture),a.memory.textures--),n.remove(y[$])}n.remove(y),n.remove(R)}let V=0;function Q(){V=0}function I(){const R=V;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),V+=1,R}function F(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function B(R,y){const G=n.get(R);if(R.isVideoTexture&&qt(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const et=R.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(G,R,y);return}}e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+y)}function X(R,y){const G=n.get(R);if(R.version>0&&G.__version!==R.version){J(G,R,y);return}e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+y)}function Y(R,y){const G=n.get(R);if(R.version>0&&G.__version!==R.version){J(G,R,y);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+y)}function Z(R,y){const G=n.get(R);if(R.version>0&&G.__version!==R.version){ct(G,R,y);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+y)}const j={[xs]:r.REPEAT,[yn]:r.CLAMP_TO_EDGE,[Ko]:r.MIRRORED_REPEAT},K={[he]:r.NEAREST,[ic]:r.NEAREST_MIPMAP_NEAREST,[qr]:r.NEAREST_MIPMAP_LINEAR,[We]:r.LINEAR,[Za]:r.LINEAR_MIPMAP_NEAREST,[Bi]:r.LINEAR_MIPMAP_LINEAR},ot={[Kp]:r.NEVER,[rm]:r.ALWAYS,[$p]:r.LESS,[lf]:r.LEQUAL,[tm]:r.EQUAL,[im]:r.GEQUAL,[em]:r.GREATER,[nm]:r.NOTEQUAL};function At(R,y,G){if(y.type===Cn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===We||y.magFilter===Za||y.magFilter===qr||y.magFilter===Bi||y.minFilter===We||y.minFilter===Za||y.minFilter===qr||y.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),G?(r.texParameteri(R,r.TEXTURE_WRAP_S,j[y.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,j[y.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,j[y.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,K[y.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,K[y.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(y.wrapS!==yn||y.wrapT!==yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,M(y.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,M(y.minFilter)),y.minFilter!==he&&y.minFilter!==We&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ot[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===he||y.minFilter!==qr&&y.minFilter!==Bi||y.type===Cn&&t.has("OES_texture_float_linear")===!1||o===!1&&y.type===ys&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(r.texParameterf(R,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function z(R,y){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",E));const et=y.source;let $=f.get(et);$===void 0&&($={},f.set(et,$));const tt=F(y);if(tt!==R.__cacheKey){$[tt]===void 0&&($[tt]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,G=!0),$[tt].usedTimes++;const gt=$[R.__cacheKey];gt!==void 0&&($[R.__cacheKey].usedTimes--,gt.usedTimes===0&&v(y)),R.__cacheKey=tt,R.__webglTexture=$[tt].texture}return G}function J(R,y,G){let et=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(et=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(et=r.TEXTURE_3D);const $=z(R,y),tt=y.source;e.bindTexture(et,R.__webglTexture,r.TEXTURE0+G);const gt=n.get(tt);if(tt.version!==gt.__version||$===!0){e.activeTexture(r.TEXTURE0+G);const at=Jt.getPrimaries(Jt.workingColorSpace),ut=y.colorSpace===mn?null:Jt.getPrimaries(y.colorSpace),St=y.colorSpace===mn||at===ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Pt=m(y)&&p(y.image)===!1;let q=g(y.image,Pt,!1,i.maxTextureSize);q=Dt(y,q);const Qt=p(q)||o,Gt=s.convert(y.format,y.colorSpace);let It=s.convert(y.type),Tt=S(y.internalFormat,Gt,It,y.colorSpace,y.isVideoTexture);At(et,y,Qt);let ft;const Ot=y.mipmaps,L=o&&y.isVideoTexture!==!0&&Tt!==af,rt=gt.__version===void 0||$===!0,ht=tt.dataReady,bt=T(y,q,Qt);if(y.isDepthTexture)Tt=r.DEPTH_COMPONENT,o?y.type===Cn?Tt=r.DEPTH_COMPONENT32F:y.type===ci?Tt=r.DEPTH_COMPONENT24:y.type===Vi?Tt=r.DEPTH24_STENCIL8:Tt=r.DEPTH_COMPONENT16:y.type===Cn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Hi&&Tt===r.DEPTH_COMPONENT&&y.type!==xl&&y.type!==ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=ci,It=s.convert(y.type)),y.format===Vr&&Tt===r.DEPTH_COMPONENT&&(Tt=r.DEPTH_STENCIL,y.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Vi,It=s.convert(y.type))),rt&&(L?e.texStorage2D(r.TEXTURE_2D,1,Tt,q.width,q.height):e.texImage2D(r.TEXTURE_2D,0,Tt,q.width,q.height,0,Gt,It,null));else if(y.isDataTexture)if(Ot.length>0&&Qt){L&&rt&&e.texStorage2D(r.TEXTURE_2D,bt,Tt,Ot[0].width,Ot[0].height);for(let P=0,it=Ot.length;P<it;P++)ft=Ot[P],L?ht&&e.texSubImage2D(r.TEXTURE_2D,P,0,0,ft.width,ft.height,Gt,It,ft.data):e.texImage2D(r.TEXTURE_2D,P,Tt,ft.width,ft.height,0,Gt,It,ft.data);y.generateMipmaps=!1}else L?(rt&&e.texStorage2D(r.TEXTURE_2D,bt,Tt,q.width,q.height),ht&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,q.width,q.height,Gt,It,q.data)):e.texImage2D(r.TEXTURE_2D,0,Tt,q.width,q.height,0,Gt,It,q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){L&&rt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,bt,Tt,Ot[0].width,Ot[0].height,q.depth);for(let P=0,it=Ot.length;P<it;P++)ft=Ot[P],y.format!==pn?Gt!==null?L?ht&&e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,P,0,0,0,ft.width,ft.height,q.depth,Gt,ft.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,P,Tt,ft.width,ft.height,q.depth,0,ft.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ht&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,P,0,0,0,ft.width,ft.height,q.depth,Gt,It,ft.data):e.texImage3D(r.TEXTURE_2D_ARRAY,P,Tt,ft.width,ft.height,q.depth,0,Gt,It,ft.data)}else{L&&rt&&e.texStorage2D(r.TEXTURE_2D,bt,Tt,Ot[0].width,Ot[0].height);for(let P=0,it=Ot.length;P<it;P++)ft=Ot[P],y.format!==pn?Gt!==null?L?ht&&e.compressedTexSubImage2D(r.TEXTURE_2D,P,0,0,ft.width,ft.height,Gt,ft.data):e.compressedTexImage2D(r.TEXTURE_2D,P,Tt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ht&&e.texSubImage2D(r.TEXTURE_2D,P,0,0,ft.width,ft.height,Gt,It,ft.data):e.texImage2D(r.TEXTURE_2D,P,Tt,ft.width,ft.height,0,Gt,It,ft.data)}else if(y.isDataArrayTexture)L?(rt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,bt,Tt,q.width,q.height,q.depth),ht&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,Gt,It,q.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,Tt,q.width,q.height,q.depth,0,Gt,It,q.data);else if(y.isData3DTexture)L?(rt&&e.texStorage3D(r.TEXTURE_3D,bt,Tt,q.width,q.height,q.depth),ht&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,Gt,It,q.data)):e.texImage3D(r.TEXTURE_3D,0,Tt,q.width,q.height,q.depth,0,Gt,It,q.data);else if(y.isFramebufferTexture){if(rt)if(L)e.texStorage2D(r.TEXTURE_2D,bt,Tt,q.width,q.height);else{let P=q.width,it=q.height;for(let nt=0;nt<bt;nt++)e.texImage2D(r.TEXTURE_2D,nt,Tt,P,it,0,Gt,It,null),P>>=1,it>>=1}}else if(Ot.length>0&&Qt){L&&rt&&e.texStorage2D(r.TEXTURE_2D,bt,Tt,Ot[0].width,Ot[0].height);for(let P=0,it=Ot.length;P<it;P++)ft=Ot[P],L?ht&&e.texSubImage2D(r.TEXTURE_2D,P,0,0,Gt,It,ft):e.texImage2D(r.TEXTURE_2D,P,Tt,Gt,It,ft);y.generateMipmaps=!1}else L?(rt&&e.texStorage2D(r.TEXTURE_2D,bt,Tt,q.width,q.height),ht&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Gt,It,q)):e.texImage2D(r.TEXTURE_2D,0,Tt,Gt,It,q);x(y,Qt)&&A(et),gt.__version=tt.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ct(R,y,G){if(y.image.length!==6)return;const et=z(R,y),$=y.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+G);const tt=n.get($);if($.version!==tt.__version||et===!0){e.activeTexture(r.TEXTURE0+G);const gt=Jt.getPrimaries(Jt.workingColorSpace),at=y.colorSpace===mn?null:Jt.getPrimaries(y.colorSpace),ut=y.colorSpace===mn||gt===at?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const St=y.isCompressedTexture||y.image[0].isCompressedTexture,Pt=y.image[0]&&y.image[0].isDataTexture,q=[];for(let P=0;P<6;P++)!St&&!Pt?q[P]=g(y.image[P],!1,!0,i.maxCubemapSize):q[P]=Pt?y.image[P].image:y.image[P],q[P]=Dt(y,q[P]);const Qt=q[0],Gt=p(Qt)||o,It=s.convert(y.format,y.colorSpace),Tt=s.convert(y.type),ft=S(y.internalFormat,It,Tt,y.colorSpace),Ot=o&&y.isVideoTexture!==!0,L=tt.__version===void 0||et===!0,rt=$.dataReady;let ht=T(y,Qt,Gt);At(r.TEXTURE_CUBE_MAP,y,Gt);let bt;if(St){Ot&&L&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ht,ft,Qt.width,Qt.height);for(let P=0;P<6;P++){bt=q[P].mipmaps;for(let it=0;it<bt.length;it++){const nt=bt[it];y.format!==pn?It!==null?Ot?rt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+P,it,0,0,nt.width,nt.height,It,nt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+P,it,ft,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+P,it,0,0,nt.width,nt.height,It,Tt,nt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+P,it,ft,nt.width,nt.height,0,It,Tt,nt.data)}}}else{bt=y.mipmaps,Ot&&L&&(bt.length>0&&ht++,e.texStorage2D(r.TEXTURE_CUBE_MAP,ht,ft,q[0].width,q[0].height));for(let P=0;P<6;P++)if(Pt){Ot?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,q[P].width,q[P].height,It,Tt,q[P].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,ft,q[P].width,q[P].height,0,It,Tt,q[P].data);for(let it=0;it<bt.length;it++){const xt=bt[it].image[P].image;Ot?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+P,it+1,0,0,xt.width,xt.height,It,Tt,xt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+P,it+1,ft,xt.width,xt.height,0,It,Tt,xt.data)}}else{Ot?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,It,Tt,q[P]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,ft,It,Tt,q[P]);for(let it=0;it<bt.length;it++){const nt=bt[it];Ot?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+P,it+1,0,0,It,Tt,nt.image[P]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+P,it+1,ft,It,Tt,nt.image[P])}}}x(y,Gt)&&A(r.TEXTURE_CUBE_MAP),tt.__version=$.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Mt(R,y,G,et,$,tt){const gt=s.convert(G.format,G.colorSpace),at=s.convert(G.type),ut=S(G.internalFormat,gt,at,G.colorSpace);if(!n.get(y).__hasExternalTextures){const Pt=Math.max(1,y.width>>tt),q=Math.max(1,y.height>>tt);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?e.texImage3D($,tt,ut,Pt,q,y.depth,0,gt,at,null):e.texImage2D($,tt,ut,Pt,q,0,gt,at,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),vt(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,et,$,n.get(G).__webglTexture,0,Rt(y)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,et,$,n.get(G).__webglTexture,tt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function mt(R,y,G){if(r.bindRenderbuffer(r.RENDERBUFFER,R),y.depthBuffer&&!y.stencilBuffer){let et=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(G||vt(y)){const $=y.depthTexture;$&&$.isDepthTexture&&($.type===Cn?et=r.DEPTH_COMPONENT32F:$.type===ci&&(et=r.DEPTH_COMPONENT24));const tt=Rt(y);vt(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,tt,et,y.width,y.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,et,y.width,y.height)}else r.renderbufferStorage(r.RENDERBUFFER,et,y.width,y.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(y.depthBuffer&&y.stencilBuffer){const et=Rt(y);G&&vt(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,et,r.DEPTH24_STENCIL8,y.width,y.height):vt(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,et,r.DEPTH24_STENCIL8,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const et=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let $=0;$<et.length;$++){const tt=et[$],gt=s.convert(tt.format,tt.colorSpace),at=s.convert(tt.type),ut=S(tt.internalFormat,gt,at,tt.colorSpace),St=Rt(y);G&&vt(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,St,ut,y.width,y.height):vt(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,St,ut,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,ut,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function _t(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),B(y.depthTexture,0);const et=n.get(y.depthTexture).__webglTexture,$=Rt(y);if(y.depthTexture.format===Hi)vt(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,et,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,et,0);else if(y.depthTexture.format===Vr)vt(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,et,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Vt(R){const y=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");_t(y.__webglFramebuffer,R)}else if(G){y.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[et]),y.__webglDepthbuffer[et]=r.createRenderbuffer(),mt(y.__webglDepthbuffer[et],R,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=r.createRenderbuffer(),mt(y.__webglDepthbuffer,R,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ct(R,y,G){const et=n.get(R);y!==void 0&&Mt(et.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&Vt(R)}function N(R){const y=R.texture,G=n.get(R),et=n.get(y);R.addEventListener("dispose",D),R.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture()),et.__version=y.version,a.memory.textures++);const $=R.isWebGLCubeRenderTarget===!0,tt=R.isWebGLMultipleRenderTargets===!0,gt=p(R)||o;if($){G.__webglFramebuffer=[];for(let at=0;at<6;at++)if(o&&y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[at]=[];for(let ut=0;ut<y.mipmaps.length;ut++)G.__webglFramebuffer[at][ut]=r.createFramebuffer()}else G.__webglFramebuffer[at]=r.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let at=0;at<y.mipmaps.length;at++)G.__webglFramebuffer[at]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(tt)if(i.drawBuffers){const at=R.texture;for(let ut=0,St=at.length;ut<St;ut++){const Pt=n.get(at[ut]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&vt(R)===!1){const at=tt?y:[y];G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ut=0;ut<at.length;ut++){const St=at[ut];G.__webglColorRenderbuffer[ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[ut]);const Pt=s.convert(St.format,St.colorSpace),q=s.convert(St.type),Qt=S(St.internalFormat,Pt,q,St.colorSpace,R.isXRRenderTarget===!0),Gt=Rt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Gt,Qt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,G.__webglColorRenderbuffer[ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),mt(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){e.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture),At(r.TEXTURE_CUBE_MAP,y,gt);for(let at=0;at<6;at++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let ut=0;ut<y.mipmaps.length;ut++)Mt(G.__webglFramebuffer[at][ut],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,ut);else Mt(G.__webglFramebuffer[at],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);x(y,gt)&&A(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){const at=R.texture;for(let ut=0,St=at.length;ut<St;ut++){const Pt=at[ut],q=n.get(Pt);e.bindTexture(r.TEXTURE_2D,q.__webglTexture),At(r.TEXTURE_2D,Pt,gt),Mt(G.__webglFramebuffer,R,Pt,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,0),x(Pt,gt)&&A(r.TEXTURE_2D)}e.unbindTexture()}else{let at=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?at=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(at,et.__webglTexture),At(at,y,gt),o&&y.mipmaps&&y.mipmaps.length>0)for(let ut=0;ut<y.mipmaps.length;ut++)Mt(G.__webglFramebuffer[ut],R,y,r.COLOR_ATTACHMENT0,at,ut);else Mt(G.__webglFramebuffer,R,y,r.COLOR_ATTACHMENT0,at,0);x(y,gt)&&A(at),e.unbindTexture()}R.depthBuffer&&Vt(R)}function se(R){const y=p(R)||o,G=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let et=0,$=G.length;et<$;et++){const tt=G[et];if(x(tt,y)){const gt=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,at=n.get(tt).__webglTexture;e.bindTexture(gt,at),A(gt),e.unbindTexture()}}}function yt(R){if(o&&R.samples>0&&vt(R)===!1){const y=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],G=R.width,et=R.height;let $=r.COLOR_BUFFER_BIT;const tt=[],gt=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=n.get(R),ut=R.isWebGLMultipleRenderTargets===!0;if(ut)for(let St=0;St<y.length;St++)e.bindFramebuffer(r.FRAMEBUFFER,at.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,at.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let St=0;St<y.length;St++){tt.push(r.COLOR_ATTACHMENT0+St),R.depthBuffer&&tt.push(gt);const Pt=at.__ignoreDepthValues!==void 0?at.__ignoreDepthValues:!1;if(Pt===!1&&(R.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),ut&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,at.__webglColorRenderbuffer[St]),Pt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[gt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[gt])),ut){const q=n.get(y[St]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,q,0)}r.blitFramebuffer(0,0,G,et,0,0,G,et,$,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ut)for(let St=0;St<y.length;St++){e.bindFramebuffer(r.FRAMEBUFFER,at.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.RENDERBUFFER,at.__webglColorRenderbuffer[St]);const Pt=n.get(y[St]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,at.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.TEXTURE_2D,Pt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}}function Rt(R){return Math.min(i.maxSamples,R.samples)}function vt(R){const y=n.get(R);return o&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function qt(R){const y=a.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function Dt(R,y){const G=R.colorSpace,et=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===$o||G!==Jn&&G!==mn&&(Jt.getTransfer(G)===ee?o===!1?t.has("EXT_sRGB")===!0&&et===pn?(R.format=$o,R.minFilter=We,R.generateMipmaps=!1):y=hf.sRGBToLinear(y):(et!==pn||$!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),y}this.allocateTextureUnit=I,this.resetTextureUnits=Q,this.setTexture2D=B,this.setTexture2DArray=X,this.setTexture3D=Y,this.setTextureCube=Z,this.rebindTextures=Ct,this.setupRenderTarget=N,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=vt}function vv(r,t,e){const n=e.isWebGL2;function i(s,a=mn){let o;const l=Jt.getTransfer(a);if(s===mi)return r.UNSIGNED_BYTE;if(s===tf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===ef)return r.UNSIGNED_SHORT_5_5_5_1;if(s===kp)return r.BYTE;if(s===Vp)return r.SHORT;if(s===xl)return r.UNSIGNED_SHORT;if(s===$u)return r.INT;if(s===ci)return r.UNSIGNED_INT;if(s===Cn)return r.FLOAT;if(s===ys)return n?r.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Hp)return r.ALPHA;if(s===pn)return r.RGBA;if(s===Wp)return r.LUMINANCE;if(s===Yp)return r.LUMINANCE_ALPHA;if(s===Hi)return r.DEPTH_COMPONENT;if(s===Vr)return r.DEPTH_STENCIL;if(s===$o)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Xp)return r.RED;if(s===nf)return r.RED_INTEGER;if(s===Zp)return r.RG;if(s===rf)return r.RG_INTEGER;if(s===sf)return r.RGBA_INTEGER;if(s===Qa||s===qa||s===Ja||s===ja)if(l===ee)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Qa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===qa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ja)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ja)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Qa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===qa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ja)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ja)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===rc||s===sc||s===ac||s===oc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===rc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===sc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ac)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===oc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===af)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===lc||s===cc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===lc)return l===ee?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===cc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===hc||s===uc||s===fc||s===dc||s===pc||s===mc||s===gc||s===_c||s===Ac||s===vc||s===Mc||s===xc||s===yc||s===Sc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===hc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===uc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===dc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===pc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===mc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===gc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===_c)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ac)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Mc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Sc)return l===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ka||s===Ec||s===Tc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Ka)return l===ee?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ec)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Tc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Qp||s===bc||s===wc||s===Rc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Ka)return o.COMPRESSED_RED_RGTC1_EXT;if(s===bc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===wc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Rc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vi?n?r.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Mv extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class hi extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xv={type:"move"};class yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new hi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const yv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sv=`
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

}`;class Ev{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Fe,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,i=new Nn({extensions:{fragDepth:!0},vertexShader:yv,fragmentShader:Sv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ne(new ln(20,20),i)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class Tv extends Ji{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,_=null;const g=new Ev,p=e.getContextAttributes();let m=null,x=null;const A=[],S=[],T=new st;let M=null;const E=new dn;E.layers.enable(1),E.viewport=new we;const D=new dn;D.layers.enable(2),D.viewport=new we;const U=[E,D],v=new Mv;v.layers.enable(1),v.layers.enable(2);let w=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let J=A[z];return J===void 0&&(J=new yo,A[z]=J),J.getTargetRaySpace()},this.getControllerGrip=function(z){let J=A[z];return J===void 0&&(J=new yo,A[z]=J),J.getGripSpace()},this.getHand=function(z){let J=A[z];return J===void 0&&(J=new yo,A[z]=J),J.getHandSpace()};function Q(z){const J=S.indexOf(z.inputSource);if(J===-1)return;const ct=A[J];ct!==void 0&&(ct.update(z.inputSource,z.frame,c||a),ct.dispatchEvent({type:z.type,data:z.inputSource}))}function I(){i.removeEventListener("select",Q),i.removeEventListener("selectstart",Q),i.removeEventListener("selectend",Q),i.removeEventListener("squeeze",Q),i.removeEventListener("squeezestart",Q),i.removeEventListener("squeezeend",Q),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",F);for(let z=0;z<A.length;z++){const J=S[z];J!==null&&(S[z]=null,A[z].disconnect(J))}w=null,V=null,g.reset(),t.setRenderTarget(m),d=null,f=null,u=null,i=null,x=null,At.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",Q),i.addEventListener("selectstart",Q),i.addEventListener("selectend",Q),i.addEventListener("squeeze",Q),i.addEventListener("squeezestart",Q),i.addEventListener("squeezeend",Q),i.addEventListener("end",I),i.addEventListener("inputsourceschange",F),p.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(T),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Zi(d.framebufferWidth,d.framebufferHeight,{format:pn,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let J=null,ct=null,Mt=null;p.depth&&(Mt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=p.stencil?Vr:Hi,ct=p.stencil?Vi:ci);const mt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:s};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(mt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Zi(f.textureWidth,f.textureHeight,{format:pn,type:mi,depthTexture:new xf(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0});const _t=t.properties.get(x);_t.__ignoreDepthValues=f.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),At.setContext(i),At.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function F(z){for(let J=0;J<z.removed.length;J++){const ct=z.removed[J],Mt=S.indexOf(ct);Mt>=0&&(S[Mt]=null,A[Mt].disconnect(ct))}for(let J=0;J<z.added.length;J++){const ct=z.added[J];let Mt=S.indexOf(ct);if(Mt===-1){for(let _t=0;_t<A.length;_t++)if(_t>=S.length){S.push(ct),Mt=_t;break}else if(S[_t]===null){S[_t]=ct,Mt=_t;break}if(Mt===-1)break}const mt=A[Mt];mt&&mt.connect(ct)}}const B=new C,X=new C;function Y(z,J,ct){B.setFromMatrixPosition(J.matrixWorld),X.setFromMatrixPosition(ct.matrixWorld);const Mt=B.distanceTo(X),mt=J.projectionMatrix.elements,_t=ct.projectionMatrix.elements,Vt=mt[14]/(mt[10]-1),Ct=mt[14]/(mt[10]+1),N=(mt[9]+1)/mt[5],se=(mt[9]-1)/mt[5],yt=(mt[8]-1)/mt[0],Rt=(_t[8]+1)/_t[0],vt=Vt*yt,qt=Vt*Rt,Dt=Mt/(-yt+Rt),R=Dt*-yt;J.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(R),z.translateZ(Dt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const y=Vt+Dt,G=Ct+Dt,et=vt-R,$=qt+(Mt-R),tt=N*Ct/G*y,gt=se*Ct/G*y;z.projectionMatrix.makePerspective(et,$,tt,gt,y,G),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function Z(z,J){J===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(J.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;g.texture!==null&&(z.near=g.depthNear,z.far=g.depthFar),v.near=D.near=E.near=z.near,v.far=D.far=E.far=z.far,(w!==v.near||V!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,V=v.far,E.near=w,E.far=V,D.near=w,D.far=V,E.updateProjectionMatrix(),D.updateProjectionMatrix(),z.updateProjectionMatrix());const J=z.parent,ct=v.cameras;Z(v,J);for(let Mt=0;Mt<ct.length;Mt++)Z(ct[Mt],J);ct.length===2?Y(v,E,D):v.projectionMatrix.copy(E.projectionMatrix),j(z,v,J)};function j(z,J,ct){ct===null?z.matrix.copy(J.matrixWorld):(z.matrix.copy(ct.matrixWorld),z.matrix.invert(),z.matrix.multiply(J.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(J.projectionMatrix),z.projectionMatrixInverse.copy(J.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Ss*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(z){l=z,f!==null&&(f.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)},this.hasDepthSensing=function(){return g.texture!==null};let K=null;function ot(z,J){if(h=J.getViewerPose(c||a),_=J,h!==null){const ct=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let Mt=!1;ct.length!==v.cameras.length&&(v.cameras.length=0,Mt=!0);for(let _t=0;_t<ct.length;_t++){const Vt=ct[_t];let Ct=null;if(d!==null)Ct=d.getViewport(Vt);else{const se=u.getViewSubImage(f,Vt);Ct=se.viewport,_t===0&&(t.setRenderTargetTextures(x,se.colorTexture,f.ignoreDepthValues?void 0:se.depthStencilTexture),t.setRenderTarget(x))}let N=U[_t];N===void 0&&(N=new dn,N.layers.enable(_t),N.viewport=new we,U[_t]=N),N.matrix.fromArray(Vt.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(Vt.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),_t===0&&(v.matrix.copy(N.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Mt===!0&&v.cameras.push(N)}const mt=i.enabledFeatures;if(mt&&mt.includes("depth-sensing")){const _t=u.getDepthInformation(ct[0]);_t&&_t.isValid&&_t.texture&&g.init(t,_t,i.renderState)}}for(let ct=0;ct<A.length;ct++){const Mt=S[ct],mt=A[ct];Mt!==null&&mt!==void 0&&mt.update(Mt,J,c||a)}g.render(t,v),K&&K(z,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}const At=new Mf;At.setAnimationLoop(ot),this.setAnimationLoop=function(z){K=z},this.dispose=function(){}}}function bv(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,_f(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,x,A,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,x,A):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===qe&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===qe&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=t.get(m).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const A=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*A,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,A){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=A*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),t.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qe&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const x=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wv(r,t,e,n){let i={},s={},a=[];const o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,A){const S=A.program;n.uniformBlockBinding(x,S)}function c(x,A){let S=i[x.id];S===void 0&&(_(x),S=h(x),i[x.id]=S,x.addEventListener("dispose",p));const T=A.program;n.updateUBOMapping(x,T);const M=t.render.frame;s[x.id]!==M&&(f(x),s[x.id]=M)}function h(x){const A=u();x.__bindingPointIndex=A;const S=r.createBuffer(),T=x.__size,M=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,T,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,A,S),S}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const A=i[x.id],S=x.uniforms,T=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,A);for(let M=0,E=S.length;M<E;M++){const D=Array.isArray(S[M])?S[M]:[S[M]];for(let U=0,v=D.length;U<v;U++){const w=D[U];if(d(w,M,U,T)===!0){const V=w.__offset,Q=Array.isArray(w.value)?w.value:[w.value];let I=0;for(let F=0;F<Q.length;F++){const B=Q[F],X=g(B);typeof B=="number"||typeof B=="boolean"?(w.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,V+I,w.__data)):B.isMatrix3?(w.__data[0]=B.elements[0],w.__data[1]=B.elements[1],w.__data[2]=B.elements[2],w.__data[3]=0,w.__data[4]=B.elements[3],w.__data[5]=B.elements[4],w.__data[6]=B.elements[5],w.__data[7]=0,w.__data[8]=B.elements[6],w.__data[9]=B.elements[7],w.__data[10]=B.elements[8],w.__data[11]=0):(B.toArray(w.__data,I),I+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,V,w.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,A,S,T){const M=x.value,E=A+"_"+S;if(T[E]===void 0)return typeof M=="number"||typeof M=="boolean"?T[E]=M:T[E]=M.clone(),!0;{const D=T[E];if(typeof M=="number"||typeof M=="boolean"){if(D!==M)return T[E]=M,!0}else if(D.equals(M)===!1)return D.copy(M),!0}return!1}function _(x){const A=x.uniforms;let S=0;const T=16;for(let E=0,D=A.length;E<D;E++){const U=Array.isArray(A[E])?A[E]:[A[E]];for(let v=0,w=U.length;v<w;v++){const V=U[v],Q=Array.isArray(V.value)?V.value:[V.value];for(let I=0,F=Q.length;I<F;I++){const B=Q[I],X=g(B),Y=S%T;Y!==0&&T-Y<X.boundary&&(S+=T-Y),V.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=X.storage}}}const M=S%T;return M>0&&(S+=T-M),x.__size=S,x.__cache={},this}function g(x){const A={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(A.boundary=4,A.storage=4):x.isVector2?(A.boundary=8,A.storage=8):x.isVector3||x.isColor?(A.boundary=16,A.storage=12):x.isVector4?(A.boundary=16,A.storage=16):x.isMatrix3?(A.boundary=48,A.storage=48):x.isMatrix4?(A.boundary=64,A.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),A}function p(x){const A=x.target;A.removeEventListener("dispose",p);const S=a.indexOf(A.__bindingPointIndex);a.splice(S,1),r.deleteBuffer(i[A.id]),delete i[A.id],delete s[A.id]}function m(){for(const x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Cf{constructor(t={}){const{canvas:e=xm(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this._useLegacyLights=!1,this.toneMapping=pi,this.toneMappingExposure=1;const A=this;let S=!1,T=0,M=0,E=null,D=-1,U=null;const v=new we,w=new we;let V=null;const Q=new pt(0);let I=0,F=e.width,B=e.height,X=1,Y=null,Z=null;const j=new we(0,0,F,B),K=new we(0,0,F,B);let ot=!1;const At=new vf;let z=!1,J=!1,ct=null;const Mt=new ie,mt=new st,_t=new C,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ct(){return E===null?X:1}let N=n;function se(b,O){for(let H=0;H<b.length;H++){const W=b[H],k=e.getContext(W,O);if(k!==null)return k}return null}try{const b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ml}`),e.addEventListener("webglcontextlost",bt,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",it,!1),N===null){const O=["webgl2","webgl","experimental-webgl"];if(A.isWebGL1Renderer===!0&&O.shift(),N=se(O,b),N===null)throw se(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let yt,Rt,vt,qt,Dt,R,y,G,et,$,tt,gt,at,ut,St,Pt,q,Qt,Gt,It,Tt,ft,Ot,L;function rt(){yt=new OA(N),Rt=new CA(N,yt,t),yt.init(Rt),ft=new vv(N,yt,Rt),vt=new _v(N,yt,Rt),qt=new GA(N),Dt=new sv,R=new Av(N,yt,vt,Dt,Rt,ft,qt),y=new LA(A),G=new NA(A),et=new Xm(N,Rt),Ot=new wA(N,yt,et,Rt),$=new BA(N,et,qt,Ot),tt=new HA(N,$,et,qt),Gt=new VA(N,Rt,R),Pt=new PA(Dt),gt=new rv(A,y,G,yt,Rt,Ot,Pt),at=new bv(A,Dt),ut=new ov,St=new dv(yt,Rt),Qt=new bA(A,y,G,vt,tt,f,l),q=new gv(A,tt,Rt),L=new wv(N,qt,Rt,vt),It=new RA(N,yt,qt,Rt),Tt=new FA(N,yt,qt,Rt),qt.programs=gt.programs,A.capabilities=Rt,A.extensions=yt,A.properties=Dt,A.renderLists=ut,A.shadowMap=q,A.state=vt,A.info=qt}rt();const ht=new Tv(A,N);this.xr=ht,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const b=yt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=yt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(F,B,!1))},this.getSize=function(b){return b.set(F,B)},this.setSize=function(b,O,H=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=b,B=O,e.width=Math.floor(b*X),e.height=Math.floor(O*X),H===!0&&(e.style.width=b+"px",e.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(F*X,B*X).floor()},this.setDrawingBufferSize=function(b,O,H){F=b,B=O,X=H,e.width=Math.floor(b*H),e.height=Math.floor(O*H),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(v)},this.getViewport=function(b){return b.copy(j)},this.setViewport=function(b,O,H,W){b.isVector4?j.set(b.x,b.y,b.z,b.w):j.set(b,O,H,W),vt.viewport(v.copy(j).multiplyScalar(X).floor())},this.getScissor=function(b){return b.copy(K)},this.setScissor=function(b,O,H,W){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,O,H,W),vt.scissor(w.copy(K).multiplyScalar(X).floor())},this.getScissorTest=function(){return ot},this.setScissorTest=function(b){vt.setScissorTest(ot=b)},this.setOpaqueSort=function(b){Y=b},this.setTransparentSort=function(b){Z=b},this.getClearColor=function(b){return b.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor.apply(Qt,arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha.apply(Qt,arguments)},this.clear=function(b=!0,O=!0,H=!0){let W=0;if(b){let k=!1;if(E!==null){const dt=E.texture.format;k=dt===sf||dt===rf||dt===nf}if(k){const dt=E.texture.type,Et=dt===mi||dt===ci||dt===xl||dt===Vi||dt===tf||dt===ef,Lt=Qt.getClearColor(),Ut=Qt.getClearAlpha(),zt=Lt.r,Nt=Lt.g,Bt=Lt.b;Et?(d[0]=zt,d[1]=Nt,d[2]=Bt,d[3]=Ut,N.clearBufferuiv(N.COLOR,0,d)):(_[0]=zt,_[1]=Nt,_[2]=Bt,_[3]=Ut,N.clearBufferiv(N.COLOR,0,_))}else W|=N.COLOR_BUFFER_BIT}O&&(W|=N.DEPTH_BUFFER_BIT),H&&(W|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",bt,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",it,!1),ut.dispose(),St.dispose(),Dt.dispose(),y.dispose(),G.dispose(),tt.dispose(),Ot.dispose(),L.dispose(),gt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Ce),ht.removeEventListener("sessionend",Zt),ct&&(ct.dispose(),ct=null),de.stop()};function bt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=qt.autoReset,O=q.enabled,H=q.autoUpdate,W=q.needsUpdate,k=q.type;rt(),qt.autoReset=b,q.enabled=O,q.autoUpdate=H,q.needsUpdate=W,q.type=k}function it(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function nt(b){const O=b.target;O.removeEventListener("dispose",nt),xt(O)}function xt(b){wt(b),Dt.remove(b)}function wt(b){const O=Dt.get(b).programs;O!==void 0&&(O.forEach(function(H){gt.releaseProgram(H)}),b.isShaderMaterial&&gt.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,H,W,k,dt){O===null&&(O=Vt);const Et=k.isMesh&&k.matrixWorld.determinant()<0,Lt=Hf(b,O,H,W,k);vt.setMaterial(W,Et);let Ut=H.index,zt=1;if(W.wireframe===!0){if(Ut=$.getWireframeAttribute(H),Ut===void 0)return;zt=2}const Nt=H.drawRange,Bt=H.attributes.position;let pe=Nt.start*zt,je=(Nt.start+Nt.count)*zt;dt!==null&&(pe=Math.max(pe,dt.start*zt),je=Math.min(je,(dt.start+dt.count)*zt)),Ut!==null?(pe=Math.max(pe,0),je=Math.min(je,Ut.count)):Bt!=null&&(pe=Math.max(pe,0),je=Math.min(je,Bt.count));const Se=je-pe;if(Se<0||Se===1/0)return;Ot.setup(k,W,Lt,H,Ut);let Bn,ae=It;if(Ut!==null&&(Bn=et.get(Ut),ae=Tt,ae.setIndex(Bn)),k.isMesh)W.wireframe===!0?(vt.setLineWidth(W.wireframeLinewidth*Ct()),ae.setMode(N.LINES)):ae.setMode(N.TRIANGLES);else if(k.isLine){let Ht=W.linewidth;Ht===void 0&&(Ht=1),vt.setLineWidth(Ht*Ct()),k.isLineSegments?ae.setMode(N.LINES):k.isLineLoop?ae.setMode(N.LINE_LOOP):ae.setMode(N.LINE_STRIP)}else k.isPoints?ae.setMode(N.POINTS):k.isSprite&&ae.setMode(N.TRIANGLES);if(k.isBatchedMesh)ae.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)ae.renderInstances(pe,Se,k.count);else if(H.isInstancedBufferGeometry){const Ht=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ua=Math.min(H.instanceCount,Ht);ae.renderInstances(pe,Se,Ua)}else ae.render(pe,Se)};function Xt(b,O,H){b.transparent===!0&&b.side===nn&&b.forceSinglePass===!1?(b.side=qe,b.needsUpdate=!0,ws(b,O,H),b.side=Ai,b.needsUpdate=!0,ws(b,O,H),b.side=nn):ws(b,O,H)}this.compile=function(b,O,H=null){H===null&&(H=b),p=St.get(H),p.init(),x.push(p),H.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),b!==H&&b.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights(A._useLegacyLights);const W=new Set;return b.traverse(function(k){const dt=k.material;if(dt)if(Array.isArray(dt))for(let Et=0;Et<dt.length;Et++){const Lt=dt[Et];Xt(Lt,H,k),W.add(Lt)}else Xt(dt,H,k),W.add(dt)}),x.pop(),p=null,W},this.compileAsync=function(b,O,H=null){const W=this.compile(b,O,H);return new Promise(k=>{function dt(){if(W.forEach(function(Et){Dt.get(Et).currentProgram.isReady()&&W.delete(Et)}),W.size===0){k(b);return}setTimeout(dt,10)}yt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Wt=null;function Kt(b){Wt&&Wt(b)}function Ce(){de.stop()}function Zt(){de.start()}const de=new Mf;de.setAnimationLoop(Kt),typeof self<"u"&&de.setContext(self),this.setAnimationLoop=function(b){Wt=b,ht.setAnimationLoop(b),b===null?de.stop():de.start()},ht.addEventListener("sessionstart",Ce),ht.addEventListener("sessionend",Zt),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(O),O=ht.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,O,E),p=St.get(b,x.length),p.init(),x.push(p),Mt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),At.setFromProjectionMatrix(Mt),J=this.localClippingEnabled,z=Pt.init(this.clippingPlanes,J),g=ut.get(b,m.length),g.init(),m.push(g),Ge(b,O,0,A.sortObjects),g.finish(),A.sortObjects===!0&&g.sort(Y,Z),this.info.render.frame++,z===!0&&Pt.beginShadows();const H=p.state.shadowsArray;if(q.render(H,b,O),z===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1)&&Qt.render(g,b),p.setupLights(A._useLegacyLights),O.isArrayCamera){const W=O.cameras;for(let k=0,dt=W.length;k<dt;k++){const Et=W[k];Cl(g,b,Et,Et.viewport)}}else Cl(g,b,O);E!==null&&(R.updateMultisampleRenderTarget(E),R.updateRenderTargetMipmap(E)),b.isScene===!0&&b.onAfterRender(A,b,O),Ot.resetDefaultState(),D=-1,U=null,x.pop(),x.length>0?p=x[x.length-1]:p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Ge(b,O,H,W){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||At.intersectsSprite(b)){W&&_t.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Mt);const Et=tt.update(b),Lt=b.material;Lt.visible&&g.push(b,Et,Lt,H,_t.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||At.intersectsObject(b))){const Et=tt.update(b),Lt=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),_t.copy(b.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),_t.copy(Et.boundingSphere.center)),_t.applyMatrix4(b.matrixWorld).applyMatrix4(Mt)),Array.isArray(Lt)){const Ut=Et.groups;for(let zt=0,Nt=Ut.length;zt<Nt;zt++){const Bt=Ut[zt],pe=Lt[Bt.materialIndex];pe&&pe.visible&&g.push(b,Et,pe,H,_t.z,Bt)}}else Lt.visible&&g.push(b,Et,Lt,H,_t.z,null)}}const dt=b.children;for(let Et=0,Lt=dt.length;Et<Lt;Et++)Ge(dt[Et],O,H,W)}function Cl(b,O,H,W){const k=b.opaque,dt=b.transmissive,Et=b.transparent;p.setupLightsView(H),z===!0&&Pt.setGlobalState(A.clippingPlanes,H),dt.length>0&&Vf(k,dt,O,H),W&&vt.viewport(v.copy(W)),k.length>0&&bs(k,O,H),dt.length>0&&bs(dt,O,H),Et.length>0&&bs(Et,O,H),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Vf(b,O,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const dt=Rt.isWebGL2;ct===null&&(ct=new Zi(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")?ys:mi,minFilter:Bi,samples:dt?4:0})),A.getDrawingBufferSize(mt),dt?ct.setSize(mt.x,mt.y):ct.setSize(Ea(mt.x),Ea(mt.y));const Et=A.getRenderTarget();A.setRenderTarget(ct),A.getClearColor(Q),I=A.getClearAlpha(),I<1&&A.setClearColor(16777215,.5),A.clear();const Lt=A.toneMapping;A.toneMapping=pi,bs(b,H,W),R.updateMultisampleRenderTarget(ct),R.updateRenderTargetMipmap(ct);let Ut=!1;for(let zt=0,Nt=O.length;zt<Nt;zt++){const Bt=O[zt],pe=Bt.object,je=Bt.geometry,Se=Bt.material,Bn=Bt.group;if(Se.side===nn&&pe.layers.test(W.layers)){const ae=Se.side;Se.side=qe,Se.needsUpdate=!0,Pl(pe,H,W,je,Se,Bn),Se.side=ae,Se.needsUpdate=!0,Ut=!0}}Ut===!0&&(R.updateMultisampleRenderTarget(ct),R.updateRenderTargetMipmap(ct)),A.setRenderTarget(Et),A.setClearColor(Q,I),A.toneMapping=Lt}function bs(b,O,H){const W=O.isScene===!0?O.overrideMaterial:null;for(let k=0,dt=b.length;k<dt;k++){const Et=b[k],Lt=Et.object,Ut=Et.geometry,zt=W===null?Et.material:W,Nt=Et.group;Lt.layers.test(H.layers)&&Pl(Lt,O,H,Ut,zt,Nt)}}function Pl(b,O,H,W,k,dt){b.onBeforeRender(A,O,H,W,k,dt),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(A,O,H,W,b,dt),k.transparent===!0&&k.side===nn&&k.forceSinglePass===!1?(k.side=qe,k.needsUpdate=!0,A.renderBufferDirect(H,O,W,k,b,dt),k.side=Ai,k.needsUpdate=!0,A.renderBufferDirect(H,O,W,k,b,dt),k.side=nn):A.renderBufferDirect(H,O,W,k,b,dt),b.onAfterRender(A,O,H,W,k,dt)}function ws(b,O,H){O.isScene!==!0&&(O=Vt);const W=Dt.get(b),k=p.state.lights,dt=p.state.shadowsArray,Et=k.state.version,Lt=gt.getParameters(b,k.state,dt,O,H),Ut=gt.getProgramCacheKey(Lt);let zt=W.programs;W.environment=b.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(b.isMeshStandardMaterial?G:y).get(b.envMap||W.environment),zt===void 0&&(b.addEventListener("dispose",nt),zt=new Map,W.programs=zt);let Nt=zt.get(Ut);if(Nt!==void 0){if(W.currentProgram===Nt&&W.lightsStateVersion===Et)return Dl(b,Lt),Nt}else Lt.uniforms=gt.getUniforms(b),b.onBuild(H,Lt,A),b.onBeforeCompile(Lt,A),Nt=gt.acquireProgram(Lt,Ut),zt.set(Ut,Nt),W.uniforms=Lt.uniforms;const Bt=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Bt.clippingPlanes=Pt.uniform),Dl(b,Lt),W.needsLights=Yf(b),W.lightsStateVersion=Et,W.needsLights&&(Bt.ambientLightColor.value=k.state.ambient,Bt.lightProbe.value=k.state.probe,Bt.directionalLights.value=k.state.directional,Bt.directionalLightShadows.value=k.state.directionalShadow,Bt.spotLights.value=k.state.spot,Bt.spotLightShadows.value=k.state.spotShadow,Bt.rectAreaLights.value=k.state.rectArea,Bt.ltc_1.value=k.state.rectAreaLTC1,Bt.ltc_2.value=k.state.rectAreaLTC2,Bt.pointLights.value=k.state.point,Bt.pointLightShadows.value=k.state.pointShadow,Bt.hemisphereLights.value=k.state.hemi,Bt.directionalShadowMap.value=k.state.directionalShadowMap,Bt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Bt.spotShadowMap.value=k.state.spotShadowMap,Bt.spotLightMatrix.value=k.state.spotLightMatrix,Bt.spotLightMap.value=k.state.spotLightMap,Bt.pointShadowMap.value=k.state.pointShadowMap,Bt.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Nt,W.uniformsList=null,Nt}function Ll(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=ha.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Dl(b,O){const H=Dt.get(b);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function Hf(b,O,H,W,k){O.isScene!==!0&&(O=Vt),R.resetTextureUnits();const dt=O.fog,Et=W.isMeshStandardMaterial?O.environment:null,Lt=E===null?A.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Jn,Ut=(W.isMeshStandardMaterial?G:y).get(W.envMap||Et),zt=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Nt=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Bt=!!H.morphAttributes.position,pe=!!H.morphAttributes.normal,je=!!H.morphAttributes.color;let Se=pi;W.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Se=A.toneMapping);const Bn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ae=Bn!==void 0?Bn.length:0,Ht=Dt.get(W),Ua=p.state.lights;if(z===!0&&(J===!0||b!==U)){const cn=b===U&&W.id===D;Pt.setState(W,b,cn)}let ce=!1;W.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Ua.state.version||Ht.outputColorSpace!==Lt||k.isBatchedMesh&&Ht.batching===!1||!k.isBatchedMesh&&Ht.batching===!0||k.isInstancedMesh&&Ht.instancing===!1||!k.isInstancedMesh&&Ht.instancing===!0||k.isSkinnedMesh&&Ht.skinning===!1||!k.isSkinnedMesh&&Ht.skinning===!0||k.isInstancedMesh&&Ht.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ht.instancingColor===!1&&k.instanceColor!==null||Ht.envMap!==Ut||W.fog===!0&&Ht.fog!==dt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==Pt.numPlanes||Ht.numIntersection!==Pt.numIntersection)||Ht.vertexAlphas!==zt||Ht.vertexTangents!==Nt||Ht.morphTargets!==Bt||Ht.morphNormals!==pe||Ht.morphColors!==je||Ht.toneMapping!==Se||Rt.isWebGL2===!0&&Ht.morphTargetsCount!==ae)&&(ce=!0):(ce=!0,Ht.__version=W.version);let xi=Ht.currentProgram;ce===!0&&(xi=ws(W,O,k));let Il=!1,Zr=!1,Na=!1;const De=xi.getUniforms(),yi=Ht.uniforms;if(vt.useProgram(xi.program)&&(Il=!0,Zr=!0,Na=!0),W.id!==D&&(D=W.id,Zr=!0),Il||U!==b){De.setValue(N,"projectionMatrix",b.projectionMatrix),De.setValue(N,"viewMatrix",b.matrixWorldInverse);const cn=De.map.cameraPosition;cn!==void 0&&cn.setValue(N,_t.setFromMatrixPosition(b.matrixWorld)),Rt.logarithmicDepthBuffer&&De.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&De.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),U!==b&&(U=b,Zr=!0,Na=!0)}if(k.isSkinnedMesh){De.setOptional(N,k,"bindMatrix"),De.setOptional(N,k,"bindMatrixInverse");const cn=k.skeleton;cn&&(Rt.floatVertexTextures?(cn.boneTexture===null&&cn.computeBoneTexture(),De.setValue(N,"boneTexture",cn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(De.setOptional(N,k,"batchingTexture"),De.setValue(N,"batchingTexture",k._matricesTexture,R));const Oa=H.morphAttributes;if((Oa.position!==void 0||Oa.normal!==void 0||Oa.color!==void 0&&Rt.isWebGL2===!0)&&Gt.update(k,H,xi),(Zr||Ht.receiveShadow!==k.receiveShadow)&&(Ht.receiveShadow=k.receiveShadow,De.setValue(N,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(yi.envMap.value=Ut,yi.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),Zr&&(De.setValue(N,"toneMappingExposure",A.toneMappingExposure),Ht.needsLights&&Wf(yi,Na),dt&&W.fog===!0&&at.refreshFogUniforms(yi,dt),at.refreshMaterialUniforms(yi,W,X,B,ct),ha.upload(N,Ll(Ht),yi,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ha.upload(N,Ll(Ht),yi,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&De.setValue(N,"center",k.center),De.setValue(N,"modelViewMatrix",k.modelViewMatrix),De.setValue(N,"normalMatrix",k.normalMatrix),De.setValue(N,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const cn=W.uniformsGroups;for(let Ba=0,Xf=cn.length;Ba<Xf;Ba++)if(Rt.isWebGL2){const Ul=cn[Ba];L.update(Ul,xi),L.bind(Ul,xi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xi}function Wf(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Yf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(b,O,H){Dt.get(b.texture).__webglTexture=O,Dt.get(b.depthTexture).__webglTexture=H;const W=Dt.get(b);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,O){const H=Dt.get(b);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,H=0){E=b,T=O,M=H;let W=!0,k=null,dt=!1,Et=!1;if(b){const Ut=Dt.get(b);Ut.__useDefaultFramebuffer!==void 0?(vt.bindFramebuffer(N.FRAMEBUFFER,null),W=!1):Ut.__webglFramebuffer===void 0?R.setupRenderTarget(b):Ut.__hasExternalTextures&&R.rebindTextures(b,Dt.get(b.texture).__webglTexture,Dt.get(b.depthTexture).__webglTexture);const zt=b.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Et=!0);const Nt=Dt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Nt[O])?k=Nt[O][H]:k=Nt[O],dt=!0):Rt.isWebGL2&&b.samples>0&&R.useMultisampledRTT(b)===!1?k=Dt.get(b).__webglMultisampledFramebuffer:Array.isArray(Nt)?k=Nt[H]:k=Nt,v.copy(b.viewport),w.copy(b.scissor),V=b.scissorTest}else v.copy(j).multiplyScalar(X).floor(),w.copy(K).multiplyScalar(X).floor(),V=ot;if(vt.bindFramebuffer(N.FRAMEBUFFER,k)&&Rt.drawBuffers&&W&&vt.drawBuffers(b,k),vt.viewport(v),vt.scissor(w),vt.setScissorTest(V),dt){const Ut=Dt.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ut.__webglTexture,H)}else if(Et){const Ut=Dt.get(b.texture),zt=O||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ut.__webglTexture,H||0,zt)}D=-1},this.readRenderTargetPixels=function(b,O,H,W,k,dt,Et){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Dt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Et!==void 0&&(Lt=Lt[Et]),Lt){vt.bindFramebuffer(N.FRAMEBUFFER,Lt);try{const Ut=b.texture,zt=Ut.format,Nt=Ut.type;if(zt!==pn&&ft.convert(zt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Bt=Nt===ys&&(yt.has("EXT_color_buffer_half_float")||Rt.isWebGL2&&yt.has("EXT_color_buffer_float"));if(Nt!==mi&&ft.convert(Nt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Nt===Cn&&(Rt.isWebGL2||yt.has("OES_texture_float")||yt.has("WEBGL_color_buffer_float")))&&!Bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-W&&H>=0&&H<=b.height-k&&N.readPixels(O,H,W,k,ft.convert(zt),ft.convert(Nt),dt)}finally{const Ut=E!==null?Dt.get(E).__webglFramebuffer:null;vt.bindFramebuffer(N.FRAMEBUFFER,Ut)}}},this.copyFramebufferToTexture=function(b,O,H=0){const W=Math.pow(2,-H),k=Math.floor(O.image.width*W),dt=Math.floor(O.image.height*W);R.setTexture2D(O,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,b.x,b.y,k,dt),vt.unbindTexture()},this.copyTextureToTexture=function(b,O,H,W=0){const k=O.image.width,dt=O.image.height,Et=ft.convert(H.format),Lt=ft.convert(H.type);R.setTexture2D(H,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment),O.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,W,b.x,b.y,k,dt,Et,Lt,O.image.data):O.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,W,b.x,b.y,O.mipmaps[0].width,O.mipmaps[0].height,Et,O.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,W,b.x,b.y,Et,Lt,O.image),W===0&&H.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),vt.unbindTexture()},this.copyTextureToTexture3D=function(b,O,H,W,k=0){if(A.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const dt=b.max.x-b.min.x+1,Et=b.max.y-b.min.y+1,Lt=b.max.z-b.min.z+1,Ut=ft.convert(W.format),zt=ft.convert(W.type);let Nt;if(W.isData3DTexture)R.setTexture3D(W,0),Nt=N.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)R.setTexture2DArray(W,0),Nt=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,W.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,W.unpackAlignment);const Bt=N.getParameter(N.UNPACK_ROW_LENGTH),pe=N.getParameter(N.UNPACK_IMAGE_HEIGHT),je=N.getParameter(N.UNPACK_SKIP_PIXELS),Se=N.getParameter(N.UNPACK_SKIP_ROWS),Bn=N.getParameter(N.UNPACK_SKIP_IMAGES),ae=H.isCompressedTexture?H.mipmaps[k]:H.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,ae.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ae.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,b.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,b.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,b.min.z),H.isDataTexture||H.isData3DTexture?N.texSubImage3D(Nt,k,O.x,O.y,O.z,dt,Et,Lt,Ut,zt,ae.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Nt,k,O.x,O.y,O.z,dt,Et,Lt,Ut,ae.data)):N.texSubImage3D(Nt,k,O.x,O.y,O.z,dt,Et,Lt,Ut,zt,ae),N.pixelStorei(N.UNPACK_ROW_LENGTH,Bt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,pe),N.pixelStorei(N.UNPACK_SKIP_PIXELS,je),N.pixelStorei(N.UNPACK_SKIP_ROWS,Se),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Bn),k===0&&W.generateMipmaps&&N.generateMipmap(Nt),vt.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),vt.unbindTexture()},this.resetState=function(){T=0,M=0,E=null,vt.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===yl?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===La?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===jt?Wi:of}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Wi?jt:Jn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Rv extends Cf{}Rv.prototype.isWebGL1Renderer=!0;class Cv extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Pv extends Le{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}class Lv extends Fe{constructor(t=null,e=1,n=1,i,s,a,o,l,c=he,h=he,u,f){super(null,a,o,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vh extends Sn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ar=new ie,Mh=new ie,Js=[],xh=new ji,Dv=new ie,ts=new ne,es=new Ki;class Pf extends ne{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vh(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Dv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ji),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ar),xh.copy(t.boundingBox).applyMatrix4(Ar),this.boundingBox.union(xh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ar),es.copy(t.boundingSphere).applyMatrix4(Ar),this.boundingSphere.union(es)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(ts.geometry=this.geometry,ts.material=this.material,ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),es.copy(this.boundingSphere),es.applyMatrix4(n),t.ray.intersectsSphere(es)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ar),Mh.multiplyMatrices(n,Ar),ts.matrixWorld=Mh,ts.raycast(t,Js);for(let a=0,o=Js.length;a<o;a++){const l=Js[a];l.instanceId=s,l.object=this,e.push(l)}Js.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vh(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ir extends Le{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const yh=new C,Sh=new C,Eh=new ie,So=new Da,js=new Ki;class Iv extends fe{constructor(t=new En,e=new Ir){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)yh.fromBufferAttribute(e,i-1),Sh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=yh.distanceTo(Sh);t.setAttribute("lineDistance",new Ve(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(i),js.radius+=s,t.ray.intersectsSphere(js)===!1)return;Eh.copy(i).invert(),So.copy(t.ray).applyMatrix4(Eh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new C,h=new C,u=new C,f=new C,d=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){const m=Math.max(0,a.start),x=Math.min(_.count,a.start+a.count);for(let A=m,S=x-1;A<S;A+=d){const T=_.getX(A),M=_.getX(A+1);if(c.fromBufferAttribute(p,T),h.fromBufferAttribute(p,M),So.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const D=t.ray.origin.distanceTo(f);D<t.near||D>t.far||e.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,a.start),x=Math.min(p.count,a.start+a.count);for(let A=m,S=x-1;A<S;A+=d){if(c.fromBufferAttribute(p,A),h.fromBufferAttribute(p,A+1),So.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const M=t.ray.origin.distanceTo(f);M<t.near||M>t.far||e.push({distance:M,point:u.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Th=new C,bh=new C;class wh extends Iv{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Th.fromBufferAttribute(e,i),bh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Th.distanceTo(bh);t.setAttribute("lineDistance",new Ve(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class br extends Le{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Rh=new ie,nl=new Da,Ks=new Ki,$s=new C;class Eo extends fe{constructor(t=new En,e=new br){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(i),Ks.radius+=s,t.ray.intersectsSphere(Ks)===!1)return;Rh.copy(i).invert(),nl.copy(t.ray).applyMatrix4(Rh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let _=f,g=d;_<g;_++){const p=c.getX(_);$s.fromBufferAttribute(u,p),Ch($s,p,l,i,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let _=f,g=d;_<g;_++)$s.fromBufferAttribute(u,_),Ch($s,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ch(r,t,e,n,i,s,a){const o=nl.distanceSqToPoint(r);if(o<e){const l=new C;nl.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class On{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=e||(a.isVector2?new st:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,i=[],s=[],a=[],o=new C,l=new ie;for(let d=0;d<=t;d++){const _=d/t;i[d]=this.getTangentAt(_,new C)}s[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(ve(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,_))}a[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(ve(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],d*_)),a[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Lf extends On{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){const n=e||new st,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Uv extends Lf{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function bl(){let r=0,t=0,e=0,n=0;function i(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let f=(a-s)/c-(o-s)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+n*o}}}const ta=new C,To=new bl,bo=new bl,wo=new bl;class Df extends On{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){const n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(ta.subVectors(i[0],i[1]).add(i[0]),c=ta);const u=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(ta.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=ta),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),To.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,_,g,p),bo.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,_,g,p),wo.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,_,g,p)}else this.curveType==="catmullrom"&&(To.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),bo.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),wo.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(To.calc(l),bo.calc(l),wo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ph(r,t,e,n,i){const s=(n-t)*.5,a=(i-e)*.5,o=r*r,l=r*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*r+e}function Nv(r,t){const e=1-r;return e*e*t}function Ov(r,t){return 2*(1-r)*r*t}function Bv(r,t){return r*r*t}function us(r,t,e,n){return Nv(r,t)+Ov(r,e)+Bv(r,n)}function Fv(r,t){const e=1-r;return e*e*e*t}function Gv(r,t){const e=1-r;return 3*e*e*r*t}function zv(r,t){return 3*(1-r)*r*r*t}function kv(r,t){return r*r*r*t}function fs(r,t,e,n,i){return Fv(r,t)+Gv(r,e)+zv(r,n)+kv(r,i)}class Vv extends On{constructor(t=new st,e=new st,n=new st,i=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new st){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(fs(t,i.x,s.x,a.x,o.x),fs(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ri extends On{constructor(t=new C,e=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(fs(t,i.x,s.x,a.x,o.x),fs(t,i.y,s.y,a.y,o.y),fs(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Hv extends On{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ua extends On{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wv extends On{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(us(t,i.x,s.x,a.x),us(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yv extends On{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(us(t,i.x,s.x,a.x),us(t,i.y,s.y,a.y),us(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xv extends On{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Ph(o,l.x,c.x,h.x,u.x),Ph(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new st().fromArray(i))}return this}}var Lh=Object.freeze({__proto__:null,ArcCurve:Uv,CatmullRomCurve3:Df,CubicBezierCurve:Vv,CubicBezierCurve3:ri,EllipseCurve:Lf,LineCurve:Hv,LineCurve3:ua,QuadraticBezierCurve:Wv,QuadraticBezierCurve3:Yv,SplineCurve:Xv});class Zv extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Lh[i.type]().fromJSON(i))}return this}}class Qv extends Le{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new pt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class qv extends Nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class If extends Le{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qi,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jv extends If{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new st(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Uf extends Le{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new pt(16777215),this.specular=new pt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qi,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jv extends Le{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new pt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qi,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Kv extends Le{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qi,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class $v extends Le{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qi,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tM extends Le{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new pt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qi,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}class eM extends Ir{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const Ta={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Nf{constructor(t,e,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],_=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null}}}const nM=new Nf;class Mi{constructor(t){this.manager=t!==void 0?t:nM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Mi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hn={};class iM extends Error{constructor(t,e){super(t),this.response=e}}class wl extends Mi{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Ta.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Hn[t]!==void 0){Hn[t].push({onLoad:e,onProgress:n,onError:i});return}Hn[t]=[],Hn[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Hn[t],u=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,_=d!==0;let g=0;const p=new ReadableStream({start(m){x();function x(){u.read().then(({done:A,value:S})=>{if(A)m.close();else{g+=S.byteLength;const T=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let M=0,E=h.length;M<E;M++){const D=h[M];D.onProgress&&D.onProgress(T)}m.enqueue(S),x()}})}}});return new Response(p)}else throw new iM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Ta.add(t,c);const h=Hn[t];delete Hn[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=Hn[t];if(h===void 0)throw this.manager.itemError(t),c;delete Hn[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Of extends Mi{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Ta.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=Es("img");function l(){h(),Ta.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){h(),i&&i(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class rM extends Mi{constructor(t){super(t)}load(t,e,n,i){const s=new El;s.colorSpace=jt;const a=new Of(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(t[c],function(h){s.images[c]=h,o++,o===6&&(s.needsUpdate=!0,e&&e(s))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return s}}class sM extends Mi{constructor(t){super(t)}load(t,e,n,i){const s=new Fe,a=new Of(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Rl extends Mi{constructor(t){super(t),this.textures={}}load(t,e,n,i){const s=this,a=new wl(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(t,function(o){try{e(s.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),s.manager.itemError(t)}},n,i)}parse(t){const e=this.textures;function n(s){return e[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),e[s]}const i=Rl.createMaterialFromType(t.type);if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=t.sheen),t.sheenColor!==void 0&&(i.sheenColor=new pt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(i.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.specularIntensity!==void 0&&(i.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.iridescence!==void 0&&(i.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(i.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(i.transmission=t.transmission),t.thickness!==void 0&&(i.thickness=t.thickness),t.attenuationDistance!==void 0&&(i.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(i.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.shadowSide!==void 0&&(i.shadowSide=t.shadowSide),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(i.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(i.depthFunc=t.depthFunc),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(i.blendSrc=t.blendSrc),t.blendDst!==void 0&&(i.blendDst=t.blendDst),t.blendEquation!==void 0&&(i.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(i.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(i.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==void 0&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(i.dithering=t.dithering),t.alphaToCoverage!==void 0&&(i.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(i.forceSinglePass=t.forceSinglePass),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const s in t.uniforms){const a=t.uniforms[s];switch(i.uniforms[s]={},a.type){case"t":i.uniforms[s].value=n(a.value);break;case"c":i.uniforms[s].value=new pt().setHex(a.value);break;case"v2":i.uniforms[s].value=new st().fromArray(a.value);break;case"v3":i.uniforms[s].value=new C().fromArray(a.value);break;case"v4":i.uniforms[s].value=new we().fromArray(a.value);break;case"m3":i.uniforms[s].value=new kt().fromArray(a.value);break;case"m4":i.uniforms[s].value=new ie().fromArray(a.value);break;default:i.uniforms[s].value=a.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(i.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)i.extensions[s]=t.extensions[s];if(t.lights!==void 0&&(i.lights=t.lights),t.clipping!==void 0&&(i.clipping=t.clipping),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new st().fromArray(s)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(t.specularIntensityMap)),t.specularColorMap!==void 0&&(i.specularColorMap=n(t.specularColorMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new st().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(i.iridescenceMap=n(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),t.thicknessMap!==void 0&&(i.thicknessMap=n(t.thicknessMap)),t.anisotropyMap!==void 0&&(i.anisotropyMap=n(t.anisotropyMap)),t.sheenColorMap!==void 0&&(i.sheenColorMap=n(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(t.sheenRoughnessMap)),i}setTextures(t){return this.textures=t,this}static createMaterialFromType(t){const e={ShadowMaterial:Qv,SpriteMaterial:Pv,RawShaderMaterial:qv,ShaderMaterial:Nn,PointsMaterial:br,MeshPhysicalMaterial:Jv,MeshStandardMaterial:If,MeshPhongMaterial:Uf,MeshToonMaterial:jv,MeshNormalMaterial:Kv,MeshLambertMaterial:$v,MeshDepthMaterial:wf,MeshDistanceMaterial:Rf,MeshBasicMaterial:Me,MeshMatcapMaterial:tM,LineDashedMaterial:eM,LineBasicMaterial:Ir,Material:Le};return new e[t]}}let ea;class Bf{static getContext(){return ea===void 0&&(ea=new(window.AudioContext||window.webkitAudioContext)),ea}static setContext(t){ea=t}}class aM extends Mi{constructor(t){super(t)}load(t,e,n,i){const s=this,a=new wl(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){try{const c=l.slice(0);Bf.getContext().decodeAudioData(c,function(u){e(u)}).catch(o)}catch(c){o(c)}},n,i);function o(l){i?i(l):console.error(l),s.manager.itemError(t)}}}class Ff{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Dh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Dh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Dh(){return(typeof performance>"u"?Date:performance).now()}const Ci=new C,Ih=new rn,oM=new C,Pi=new C;class lM extends fe{constructor(){super(),this.type="AudioListener",this.context=Bf.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Ff}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ci,Ih,oM),Pi.set(0,0,-1).applyQuaternion(Ih),e.positionX){const i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Ci.x,i),e.positionY.linearRampToValueAtTime(Ci.y,i),e.positionZ.linearRampToValueAtTime(Ci.z,i),e.forwardX.linearRampToValueAtTime(Pi.x,i),e.forwardY.linearRampToValueAtTime(Pi.y,i),e.forwardZ.linearRampToValueAtTime(Pi.z,i),e.upX.linearRampToValueAtTime(n.x,i),e.upY.linearRampToValueAtTime(n.y,i),e.upZ.linearRampToValueAtTime(n.z,i)}else e.setPosition(Ci.x,Ci.y,Ci.z),e.setOrientation(Pi.x,Pi.y,Pi.z,n.x,n.y,n.z)}}class cM extends fe{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}class Uh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ve(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ml);const Nh={type:"change"},Ro={type:"start"},Oh={type:"end"},na=new Da,Bh=new si,hM=Math.cos(70*Mm.DEG2RAD);class uM extends Ji{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:tr.ROTATE,MIDDLE:tr.DOLLY,RIGHT:tr.PAN},this.touches={ONE:er.ROTATE,TWO:er.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",St),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",St),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Nh),n.update(),s=i.NONE},this.update=function(){const L=new C,rt=new rn().setFromUnitVectors(t.up,new C(0,1,0)),ht=rt.clone().invert(),bt=new C,P=new rn,it=new C,nt=2*Math.PI;return function(wt=null){const Xt=n.object.position;L.copy(Xt).sub(n.target),L.applyQuaternion(rt),o.setFromVector3(L),n.autoRotate&&s===i.NONE&&V(v(wt)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Wt=n.minAzimuthAngle,Kt=n.maxAzimuthAngle;isFinite(Wt)&&isFinite(Kt)&&(Wt<-Math.PI?Wt+=nt:Wt>Math.PI&&(Wt-=nt),Kt<-Math.PI?Kt+=nt:Kt>Math.PI&&(Kt-=nt),Wt<=Kt?o.theta=Math.max(Wt,Math.min(Kt,o.theta)):o.theta=o.theta>(Wt+Kt)/2?Math.max(Wt,o.theta):Math.min(Kt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&M||n.object.isOrthographicCamera?o.radius=j(o.radius):o.radius=j(o.radius*c),L.setFromSpherical(o),L.applyQuaternion(ht),Xt.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Ce=!1;if(n.zoomToCursor&&M){let Zt=null;if(n.object.isPerspectiveCamera){const de=L.length();Zt=j(de*c);const Ge=de-Zt;n.object.position.addScaledVector(S,Ge),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const de=new C(T.x,T.y,0);de.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ce=!0;const Ge=new C(T.x,T.y,0);Ge.unproject(n.object),n.object.position.sub(Ge).add(de),n.object.updateMatrixWorld(),Zt=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Zt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Zt).add(n.object.position):(na.origin.copy(n.object.position),na.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(na.direction))<hM?t.lookAt(n.target):(Bh.setFromNormalAndCoplanarPoint(n.object.up,n.target),na.intersectPlane(Bh,n.target))))}else n.object.isOrthographicCamera&&(Ce=c!==1,Ce&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix()));return c=1,M=!1,Ce||bt.distanceToSquared(n.object.position)>a||8*(1-P.dot(n.object.quaternion))>a||it.distanceToSquared(n.target)>0?(n.dispatchEvent(Nh),bt.copy(n.object.position),P.copy(n.object.quaternion),it.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Qt),n.domElement.removeEventListener("pointerdown",R),n.domElement.removeEventListener("pointercancel",G),n.domElement.removeEventListener("wheel",tt),n.domElement.removeEventListener("pointermove",y),n.domElement.removeEventListener("pointerup",G),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",St),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new Uh,l=new Uh;let c=1;const h=new C,u=new st,f=new st,d=new st,_=new st,g=new st,p=new st,m=new st,x=new st,A=new st,S=new C,T=new st;let M=!1;const E=[],D={};let U=!1;function v(L){return L!==null?2*Math.PI/60*n.autoRotateSpeed*L:2*Math.PI/60/60*n.autoRotateSpeed}function w(L){const rt=Math.abs(L*.01);return Math.pow(.95,n.zoomSpeed*rt)}function V(L){l.theta-=L}function Q(L){l.phi-=L}const I=function(){const L=new C;return function(ht,bt){L.setFromMatrixColumn(bt,0),L.multiplyScalar(-ht),h.add(L)}}(),F=function(){const L=new C;return function(ht,bt){n.screenSpacePanning===!0?L.setFromMatrixColumn(bt,1):(L.setFromMatrixColumn(bt,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(ht),h.add(L)}}(),B=function(){const L=new C;return function(ht,bt){const P=n.domElement;if(n.object.isPerspectiveCamera){const it=n.object.position;L.copy(it).sub(n.target);let nt=L.length();nt*=Math.tan(n.object.fov/2*Math.PI/180),I(2*ht*nt/P.clientHeight,n.object.matrix),F(2*bt*nt/P.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(ht*(n.object.right-n.object.left)/n.object.zoom/P.clientWidth,n.object.matrix),F(bt*(n.object.top-n.object.bottom)/n.object.zoom/P.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function X(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(L,rt){if(!n.zoomToCursor)return;M=!0;const ht=n.domElement.getBoundingClientRect(),bt=L-ht.left,P=rt-ht.top,it=ht.width,nt=ht.height;T.x=bt/it*2-1,T.y=-(P/nt)*2+1,S.set(T.x,T.y,1).unproject(n.object).sub(n.object.position).normalize()}function j(L){return Math.max(n.minDistance,Math.min(n.maxDistance,L))}function K(L){u.set(L.clientX,L.clientY)}function ot(L){Z(L.clientX,L.clientX),m.set(L.clientX,L.clientY)}function At(L){_.set(L.clientX,L.clientY)}function z(L){f.set(L.clientX,L.clientY),d.subVectors(f,u).multiplyScalar(n.rotateSpeed);const rt=n.domElement;V(2*Math.PI*d.x/rt.clientHeight),Q(2*Math.PI*d.y/rt.clientHeight),u.copy(f),n.update()}function J(L){x.set(L.clientX,L.clientY),A.subVectors(x,m),A.y>0?X(w(A.y)):A.y<0&&Y(w(A.y)),m.copy(x),n.update()}function ct(L){g.set(L.clientX,L.clientY),p.subVectors(g,_).multiplyScalar(n.panSpeed),B(p.x,p.y),_.copy(g),n.update()}function Mt(L){Z(L.clientX,L.clientY),L.deltaY<0?Y(w(L.deltaY)):L.deltaY>0&&X(w(L.deltaY)),n.update()}function mt(L){let rt=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?Q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),rt=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?Q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),rt=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?V(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),rt=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?V(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),rt=!0;break}rt&&(L.preventDefault(),n.update())}function _t(L){if(E.length===1)u.set(L.pageX,L.pageY);else{const rt=ft(L),ht=.5*(L.pageX+rt.x),bt=.5*(L.pageY+rt.y);u.set(ht,bt)}}function Vt(L){if(E.length===1)_.set(L.pageX,L.pageY);else{const rt=ft(L),ht=.5*(L.pageX+rt.x),bt=.5*(L.pageY+rt.y);_.set(ht,bt)}}function Ct(L){const rt=ft(L),ht=L.pageX-rt.x,bt=L.pageY-rt.y,P=Math.sqrt(ht*ht+bt*bt);m.set(0,P)}function N(L){n.enableZoom&&Ct(L),n.enablePan&&Vt(L)}function se(L){n.enableZoom&&Ct(L),n.enableRotate&&_t(L)}function yt(L){if(E.length==1)f.set(L.pageX,L.pageY);else{const ht=ft(L),bt=.5*(L.pageX+ht.x),P=.5*(L.pageY+ht.y);f.set(bt,P)}d.subVectors(f,u).multiplyScalar(n.rotateSpeed);const rt=n.domElement;V(2*Math.PI*d.x/rt.clientHeight),Q(2*Math.PI*d.y/rt.clientHeight),u.copy(f)}function Rt(L){if(E.length===1)g.set(L.pageX,L.pageY);else{const rt=ft(L),ht=.5*(L.pageX+rt.x),bt=.5*(L.pageY+rt.y);g.set(ht,bt)}p.subVectors(g,_).multiplyScalar(n.panSpeed),B(p.x,p.y),_.copy(g)}function vt(L){const rt=ft(L),ht=L.pageX-rt.x,bt=L.pageY-rt.y,P=Math.sqrt(ht*ht+bt*bt);x.set(0,P),A.set(0,Math.pow(x.y/m.y,n.zoomSpeed)),X(A.y),m.copy(x);const it=(L.pageX+rt.x)*.5,nt=(L.pageY+rt.y)*.5;Z(it,nt)}function qt(L){n.enableZoom&&vt(L),n.enablePan&&Rt(L)}function Dt(L){n.enableZoom&&vt(L),n.enableRotate&&yt(L)}function R(L){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",y),n.domElement.addEventListener("pointerup",G)),Gt(L),L.pointerType==="touch"?Pt(L):et(L))}function y(L){n.enabled!==!1&&(L.pointerType==="touch"?q(L):$(L))}function G(L){switch(It(L),E.length){case 0:n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",y),n.domElement.removeEventListener("pointerup",G),n.dispatchEvent(Oh),s=i.NONE;break;case 1:const rt=E[0],ht=D[rt];Pt({pointerId:rt,pageX:ht.x,pageY:ht.y});break}}function et(L){let rt;switch(L.button){case 0:rt=n.mouseButtons.LEFT;break;case 1:rt=n.mouseButtons.MIDDLE;break;case 2:rt=n.mouseButtons.RIGHT;break;default:rt=-1}switch(rt){case tr.DOLLY:if(n.enableZoom===!1)return;ot(L),s=i.DOLLY;break;case tr.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;At(L),s=i.PAN}else{if(n.enableRotate===!1)return;K(L),s=i.ROTATE}break;case tr.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;K(L),s=i.ROTATE}else{if(n.enablePan===!1)return;At(L),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ro)}function $(L){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;z(L);break;case i.DOLLY:if(n.enableZoom===!1)return;J(L);break;case i.PAN:if(n.enablePan===!1)return;ct(L);break}}function tt(L){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(L.preventDefault(),n.dispatchEvent(Ro),Mt(gt(L)),n.dispatchEvent(Oh))}function gt(L){const rt=L.deltaMode,ht={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(rt){case 1:ht.deltaY*=16;break;case 2:ht.deltaY*=100;break}return L.ctrlKey&&!U&&(ht.deltaY*=10),ht}function at(L){L.key==="Control"&&(U=!0,n.domElement.getRootNode().addEventListener("keyup",ut,{passive:!0,capture:!0}))}function ut(L){L.key==="Control"&&(U=!1,n.domElement.getRootNode().removeEventListener("keyup",ut,{passive:!0,capture:!0}))}function St(L){n.enabled===!1||n.enablePan===!1||mt(L)}function Pt(L){switch(Tt(L),E.length){case 1:switch(n.touches.ONE){case er.ROTATE:if(n.enableRotate===!1)return;_t(L),s=i.TOUCH_ROTATE;break;case er.PAN:if(n.enablePan===!1)return;Vt(L),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case er.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;N(L),s=i.TOUCH_DOLLY_PAN;break;case er.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;se(L),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ro)}function q(L){switch(Tt(L),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;yt(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Rt(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;qt(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Dt(L),n.update();break;default:s=i.NONE}}function Qt(L){n.enabled!==!1&&L.preventDefault()}function Gt(L){E.push(L.pointerId)}function It(L){delete D[L.pointerId];for(let rt=0;rt<E.length;rt++)if(E[rt]==L.pointerId){E.splice(rt,1);return}}function Tt(L){let rt=D[L.pointerId];rt===void 0&&(rt=new st,D[L.pointerId]=rt),rt.set(L.pageX,L.pageY)}function ft(L){const rt=L.pointerId===E[0]?E[1]:E[0];return D[rt]}n.domElement.addEventListener("contextmenu",Qt),n.domElement.addEventListener("pointerdown",R),n.domElement.addEventListener("pointercancel",G),n.domElement.addEventListener("wheel",tt,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",at,{passive:!0,capture:!0}),this.update()}}const fM=/^[og]\s*(.+)?/,dM=/^mtllib /,pM=/^usemtl /,mM=/^usemap /,Fh=/\s+/,Gh=new C,Co=new C,zh=new C,kh=new C,un=new C,ia=new pt;function gM(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,s){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:i||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),i&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){const i=this.vertices,s=this.object.geometry.vertices;s.push(i[t+0],i[t+1],i[t+2]),s.push(i[e+0],i[e+1],i[e+2]),s.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const i=this.normals,s=this.object.geometry.normals;s.push(i[t+0],i[t+1],i[t+2]),s.push(i[e+0],i[e+1],i[e+2]),s.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(t,e,n){const i=this.vertices,s=this.object.geometry.normals;Gh.fromArray(i,t),Co.fromArray(i,e),zh.fromArray(i,n),un.subVectors(zh,Co),kh.subVectors(Gh,Co),un.cross(kh),un.normalize(),s.push(un.x,un.y,un.z),s.push(un.x,un.y,un.z),s.push(un.x,un.y,un.z)},addColor:function(t,e,n){const i=this.colors,s=this.object.geometry.colors;i[t]!==void 0&&s.push(i[t+0],i[t+1],i[t+2]),i[e]!==void 0&&s.push(i[e+0],i[e+1],i[e+2]),i[n]!==void 0&&s.push(i[n+0],i[n+1],i[n+2])},addUV:function(t,e,n){const i=this.uvs,s=this.object.geometry.uvs;s.push(i[t+0],i[t+1]),s.push(i[e+0],i[e+1]),s.push(i[n+0],i[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,i,s,a,o,l,c){const h=this.vertices.length;let u=this.parseVertexIndex(t,h),f=this.parseVertexIndex(e,h),d=this.parseVertexIndex(n,h);if(this.addVertex(u,f,d),this.addColor(u,f,d),o!==void 0&&o!==""){const _=this.normals.length;u=this.parseNormalIndex(o,_),f=this.parseNormalIndex(l,_),d=this.parseNormalIndex(c,_),this.addNormal(u,f,d)}else this.addFaceNormal(u,f,d);if(i!==void 0&&i!==""){const _=this.uvs.length;u=this.parseUVIndex(i,_),f=this.parseUVIndex(s,_),d=this.parseUVIndex(a,_),this.addUV(u,f,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,i=t.length;n<i;n++){const s=this.parseVertexIndex(t[n],e);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let s=0,a=t.length;s<a;s++)this.addVertexLine(this.parseVertexIndex(t[s],n));for(let s=0,a=e.length;s<a;s++)this.addUVLine(this.parseUVIndex(e[s],i))}};return r.startObject("",!1),r}class _M extends Mi{constructor(t){super(t),this.materials=null}load(t,e,n,i){const s=this,a=new wl(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(s.parse(o))}catch(l){i?i(l):console.error(l),s.manager.itemError(t)}},n,i)}setMaterials(t){return this.materials=t,this}parse(t){const e=new gM;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const n=t.split(`
`);let i=[];for(let o=0,l=n.length;o<l;o++){const c=n[o].trimStart();if(c.length===0)continue;const h=c.charAt(0);if(h!=="#")if(h==="v"){const u=c.split(Fh);switch(u[0]){case"v":e.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(ia.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6])).convertSRGBToLinear(),e.colors.push(ia.r,ia.g,ia.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":e.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){const f=c.slice(1).trim().split(Fh),d=[];for(let g=0,p=f.length;g<p;g++){const m=f[g];if(m.length>0){const x=m.split("/");d.push(x)}}const _=d[0];for(let g=1,p=d.length-1;g<p;g++){const m=d[g],x=d[g+1];e.addFace(_[0],m[0],x[0],_[1],m[1],x[1],_[2],m[2],x[2])}}else if(h==="l"){const u=c.substring(1).trim().split(" ");let f=[];const d=[];if(c.indexOf("/")===-1)f=u;else for(let _=0,g=u.length;_<g;_++){const p=u[_].split("/");p[0]!==""&&f.push(p[0]),p[1]!==""&&d.push(p[1])}e.addLineGeometry(f,d)}else if(h==="p"){const f=c.slice(1).trim().split(" ");e.addPointGeometry(f)}else if((i=fM.exec(c))!==null){const u=(" "+i[0].slice(1).trim()).slice(1);e.startObject(u)}else if(pM.test(c))e.object.startMaterial(c.substring(7).trim(),e.materialLibraries);else if(dM.test(c))e.materialLibraries.push(c.substring(7).trim());else if(mM.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(i=c.split(" "),i.length>1){const f=i[1].trim().toLowerCase();e.object.smooth=f!=="0"&&f!=="off"}else e.object.smooth=!0;const u=e.object.currentMaterial();u&&(u.smooth=e.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}e.finalize();const s=new hi;if(s.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=e.objects.length;o<l;o++){const c=e.objects[o],h=c.geometry,u=c.materials,f=h.type==="Line",d=h.type==="Points";let _=!1;if(h.vertices.length===0)continue;const g=new En;g.setAttribute("position",new Ve(h.vertices,3)),h.normals.length>0&&g.setAttribute("normal",new Ve(h.normals,3)),h.colors.length>0&&(_=!0,g.setAttribute("color",new Ve(h.colors,3))),h.hasUVIndices===!0&&g.setAttribute("uv",new Ve(h.uvs,2));const p=[];for(let x=0,A=u.length;x<A;x++){const S=u[x],T=S.name+"_"+S.smooth+"_"+_;let M=e.materials[T];if(this.materials!==null){if(M=this.materials.create(S.name),f&&M&&!(M instanceof Ir)){const E=new Ir;Le.prototype.copy.call(E,M),E.color.copy(M.color),M=E}else if(d&&M&&!(M instanceof br)){const E=new br({size:10,sizeAttenuation:!1});Le.prototype.copy.call(E,M),E.color.copy(M.color),E.map=M.map,M=E}}M===void 0&&(f?M=new Ir:d?M=new br({size:1,sizeAttenuation:!1}):M=new Uf,M.name=S.name,M.flatShading=!S.smooth,M.vertexColors=_,e.materials[T]=M),p.push(M)}let m;if(p.length>1){for(let x=0,A=u.length;x<A;x++){const S=u[x];g.addGroup(S.groupStart,S.groupCount,x)}f?m=new wh(g,p):d?m=new Eo(g,p):m=new ne(g,p)}else f?m=new wh(g,p[0]):d?m=new Eo(g,p[0]):m=new ne(g,p[0]);m.name=c.name,s.add(m)}else if(e.vertices.length>0){const o=new br({size:1,sizeAttenuation:!1}),l=new En;l.setAttribute("position",new Ve(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(l.setAttribute("color",new Ve(e.colors,3)),o.vertexColors=!0);const c=new Eo(l,o);s.add(c)}return s}}const xr=4,Ur=1024,Ln=4;function AM(r=1){const t=new Float32Array(Ur*Ln*r*xr),e=new Lv(t,Ur,Ln*r,pn,Cn);return e.wrapS=xs,e.wrapY=xs,e.magFilter=he,e.needsUpdate=!0,e}function vM(r,t,e=0){const n=Math.floor(Ur*(Ln/4));t.arcLengthDivisions=n/2,t.updateArcLengths();const i=t.getSpacedPoints(n),s=t.computeFrenetFrames(n,!0);for(let a=0;a<n;a++){const o=Math.floor(a/Ur),l=a%Ur;let c=i[a];ra(r,l,c.x,c.y,c.z,0+o+Ln*e),c=s.tangents[a],ra(r,l,c.x,c.y,c.z,1+o+Ln*e),c=s.normals[a],ra(r,l,c.x,c.y,c.z,2+o+Ln*e),c=s.binormals[a],ra(r,l,c.x,c.y,c.z,3+o+Ln*e)}r.needsUpdate=!0}function ra(r,t,e,n,i,s){const a=r.image,{data:o}=a,l=xr*Ur*s;o[t*xr+l+0]=e,o[t*xr+l+1]=n,o[t*xr+l+2]=i,o[t*xr+l+3]=1}function MM(r){return{spineTexture:{value:r},pathOffset:{type:"f",value:0},pathSegment:{type:"f",value:1},spineOffset:{type:"f",value:161},spineLength:{type:"f",value:400},flow:{type:"i",value:1}}}function Vh(r,t,e=1){r.__ok||(r.__ok=!0,r.onBeforeCompile=n=>{if(n.__modified)return;n.__modified=!0,Object.assign(n.uniforms,t);const i=`
		uniform sampler2D spineTexture;
		uniform float pathOffset;
		uniform float pathSegment;
		uniform float spineOffset;
		uniform float spineLength;
		uniform int flow;

		float textureLayers = ${Ln*e}.;
		float textureStacks = ${Ln/4}.;

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
rowOffset += instanceMatrix[3][1] * ${Ln}.;
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
				gl_Position = projectionMatrix * mvPosition;`);n.vertexShader=i})}class xM{constructor(t,e=1){const n=t.clone(),i=AM(e),s=MM(i);n.traverse(function(a){if(a instanceof ne||a instanceof Pf)if(Array.isArray(a.material)){const o=[];for(const l of a.material){const c=l.clone();Vh(c,s,e),o.push(c)}a.material=o}else a.material=a.material.clone(),Vh(a.material,s,e)}),this.curveArray=new Array(e),this.curveLengthArray=new Array(e),this.object3D=n,this.splineTexure=i,this.uniforms=s}updateCurve(t,e){if(t>=this.curveArray.length)throw Error("Index out of range for Flow");const n=e.getLength();this.uniforms.spineLength.value=n,this.curveLengthArray[t]=n,this.curveArray[t]=e,vM(this.splineTexure,e,t)}moveAlongCurve(t){this.uniforms.pathOffset.value+=t}}const Hh=new ie;class vr extends xM{constructor(t,e,n,i){const s=new Pf(n,i,t);s.instanceMatrix.setUsage(sm),s.frustumCulled=!1,super(s,e),this.offsets=new Array(t).fill(0),this.whichCurve=new Array(t).fill(0)}writeChanges(t){Hh.makeTranslation(this.curveLengthArray[this.whichCurve[t]],this.whichCurve[t],this.offsets[t]),this.object3D.setMatrixAt(t,Hh),this.object3D.instanceMatrix.needsUpdate=!0}moveIndividualAlongCurve(t,e){this.offsets[t]+=e,this.writeChanges(t)}setCurve(t,e){if(isNaN(e))throw Error("curve index being set is Not a Number (NaN)");this.whichCurve[t]=e,this.writeChanges(t)}}const Gf=r=>{const t=TM(r);return{noise2D:(e,n)=>yM(t,e,n),noise3D:(e,n,i)=>SM(t,e,n,i),noise4D:(e,n,i,s)=>EM(t,e,n,i,s)}},yM=(r,t,e)=>{const{perm:n,permMod12:i}=r;let s=0,a=0,o=0;var l=(t+e)*bM,c=Math.floor(t+l),h=Math.floor(e+l),u=(c+h)*ns;const f=c-u,d=h-u,_=t-f,g=e-d,p=_>g?1:0,m=_>g?0:1,x=_-p+ns,A=g-m+ns,S=_-1+2*ns,T=g-1+2*ns,M=c&255,E=h&255;let D=.5-_*_-g*g;if(D>=0){const w=i[M+n[E]]*3;D*=D,s=D*D*(Te[w]*_+Te[w+1]*g)}let U=.5-x*x-A*A;if(U>=0){const w=i[M+p+n[E+m]]*3;U*=U,a=U*U*(Te[w]*x+Te[w+1]*A)}let v=.5-S*S-T*T;if(v>=0){const w=i[M+1+n[E+1]]*3;v*=v,o=v*v*(Te[w]*S+Te[w+1]*T)}return 70*(s+a+o)},SM=(r,t,e,n)=>{const{perm:i,permMod12:s}=r;let a=0,o=0,l=0,c=0;const h=(t+e+n)*wM,u=Math.floor(t+h),f=Math.floor(e+h),d=Math.floor(n+h),_=(u+f+d)*Tn,g=u-_,p=f-_,m=d-_,x=t-g,A=e-p,S=n-m;let T,M,E,D,U,v;x>=A?A>=S?(T=1,M=0,E=0,D=1,U=1,v=0):x>=S?(T=1,M=0,E=0,D=1,U=0,v=1):(T=0,M=0,E=1,D=1,U=0,v=1):A<S?(T=0,M=0,E=1,D=0,U=1,v=1):x<S?(T=0,M=1,E=0,D=0,U=1,v=1):(T=0,M=1,E=0,D=1,U=1,v=0);const w=x-T+Tn,V=A-M+Tn,Q=S-E+Tn,I=x-D+2*Tn,F=A-U+2*Tn,B=S-v+2*Tn,X=x-1+3*Tn,Y=A-1+3*Tn,Z=S-1+3*Tn,j=u&255,K=f&255,ot=d&255;let At=.6-x*x-A*A-S*S;if(At>=0){const mt=s[j+i[K+i[ot]]]*3;At*=At,a=At*At*(Te[mt]*x+Te[mt+1]*A+Te[mt+2]*S)}let z=.6-w*w-V*V-Q*Q;if(z>=0){const mt=s[j+T+i[K+M+i[ot+E]]]*3;z*=z,o=z*z*(Te[mt]*w+Te[mt+1]*V+Te[mt+2]*Q)}let J=.6-I*I-F*F-B*B;if(J>=0){const mt=s[j+D+i[K+U+i[ot+v]]]*3;J*=J,l=J*J*(Te[mt]*I+Te[mt+1]*F+Te[mt+2]*B)}let ct=.6-X*X-Y*Y-Z*Z;if(ct>=0){var Mt=s[j+1+i[K+1+i[ot+1]]]*3;ct*=ct,c=ct*ct*(Te[Mt]*X+Te[Mt+1]*Y+Te[Mt+2]*Z)}return 32*(a+o+l+c)},EM=(r,t,e,n,i)=>{const{perm:s}=r;let a=0,o=0,l=0,c=0,h=0;const u=(t+e+n+i)*RM,f=Math.floor(t+u),d=Math.floor(e+u),_=Math.floor(n+u),g=Math.floor(i+u),p=(f+d+_+g)*Pe,m=f-p,x=d-p,A=_-p,S=g-p,T=t-m,M=e-x,E=n-A,D=i-S;let U=0,v=0,w=0,V=0;T>M?U++:v++,T>E?U++:w++,T>D?U++:V++,M>E?v++:w++,M>D?v++:V++,E>D?w++:V++;let Q,I,F,B,X,Y,Z,j,K,ot,At,z;Q=U>=3?1:0,I=v>=3?1:0,F=w>=3?1:0,B=V>=3?1:0,X=U>=2?1:0,Y=v>=2?1:0,Z=w>=2?1:0,j=V>=2?1:0,K=U>=1?1:0,ot=v>=1?1:0,At=w>=1?1:0,z=V>=1?1:0;const J=T-Q+Pe,ct=M-I+Pe,Mt=E-F+Pe,mt=D-B+Pe,_t=T-X+2*Pe,Vt=M-Y+2*Pe,Ct=E-Z+2*Pe,N=D-j+2*Pe,se=T-K+3*Pe,yt=M-ot+3*Pe,Rt=E-At+3*Pe,vt=D-z+3*Pe,qt=T-1+4*Pe,Dt=M-1+4*Pe,R=E-1+4*Pe,y=D-1+4*Pe,G=f&255,et=d&255,$=_&255,tt=g&255;let gt=.6-T*T-M*M-E*E-D*D;if(gt>=0){const q=s[G+s[et+s[$+s[tt]]]]%32*4;gt*=gt,a=gt*gt*(_e[q]*T+_e[q+1]*M+_e[q+2]*E+_e[q+3]*D)}let at=.6-J*J-ct*ct-Mt*Mt-mt*mt;if(at>=0){const q=s[G+Q+s[et+I+s[$+F+s[tt+B]]]]%32*4;at*=at,o=at*at*(_e[q]*J+_e[q+1]*ct+_e[q+2]*Mt+_e[q+3]*mt)}let ut=.6-_t*_t-Vt*Vt-Ct*Ct-N*N;if(ut>=0){const q=s[G+X+s[et+Y+s[$+Z+s[tt+j]]]]%32*4;ut*=ut,l=ut*ut*(_e[q]*_t+_e[q+1]*Vt+_e[q+2]*Ct+_e[q+3]*N)}let St=.6-se*se-yt*yt-Rt*Rt-vt*vt;if(St>=0){const q=s[G+K+s[et+ot+s[$+At+s[tt+z]]]]%32*4;St*=St,c=St*St*(_e[q]*se+_e[q+1]*yt+_e[q+2]*Rt+_e[q+3]*vt)}let Pt=.6-qt*qt-Dt*Dt-R*R-y*y;if(Pt>=0){const q=s[G+1+s[et+1+s[$+1+s[tt+1]]]]%32*4;Pt*=Pt,h=Pt*Pt*(_e[q]*qt+_e[q+1]*Dt+_e[q+2]*R+_e[q+3]*y)}return 27*(a+o+l+c+h)},TM=r=>{const t=new Uint8Array(512),e=new Uint8Array(512),n=new Uint8Array(256);for(let s=0;s<256;s++)n[s]=s;for(let s=0;s<255;s++){const a=s+~~(r()*(256-s)),o=n[a];n[a]=n[s],t[s]=t[s+256]=o,e[s]=e[s+256]=o%12}const i=n[255];return t[255]=t[511]=i,e[255]=e[511]=i%12,{perm:t,permMod12:e}},bM=.5*(Math.sqrt(3)-1),ns=(3-Math.sqrt(3))/6,wM=1/3,Tn=1/6,RM=(Math.sqrt(5)-1)/4,Pe=(5-Math.sqrt(5))/20,Te=new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),_e=new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]);function Wh(r,t,e=0,n=8.5){const i=ds(r,new st(t.x,t.z),16);if(i){const[s,a,o]=i;return s===255&&o===255?e:o/255*(n-e)}return e}function CM(r,t,e){const n=ds(r,new st(t.x,t.z),8),s=new st(e.x,e.z).angle();if(n){const[a,o]=n;if(a===255&&o===255){const l=new st(4,0).rotateAround(new st(0,0),s-Math.PI/2),c=new st(4,0).rotateAround(new st(0,0),s+Math.PI/2),[h]=ds(r,new st(l.x,l.y).add(new st(t.x,t.z)),8),[u]=ds(r,new st(c.x,c.y).add(new st(t.x,t.z)),8);return[h/255,u/255]}}}function ds(r,t,e){const n=PM(t.x,t.y,r.width,r.height,e),i=Math.floor(n.y*r.width+n.x)*4;if(r){const s=r.data[i],a=r.data[i+1],o=r.data[i+2];return[s,a,o]}}function Po(r){return r.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1})}function PM(r,t,e,n,i){return new st(Math.floor(e/2+r*i),Math.floor(n/2+t*i))}function LM(){return[[4,new pt(16777215)],[6,new pt(13421772)],[6,new pt(16764006)],[4,new pt(10075084)],[6,new pt(16764006)],[6,new pt(16777215)],[6,new pt(10075084)],[6,new pt(13421772)],[8,new pt(16772659)],[16,new pt(16750899)],[8,new pt(16772659)],[6,new pt(16777215)],[6,new pt(10075084)],[6,new pt(16777215)],[6,new pt(13421772)],[6,new pt(10075084)],[6,new pt(16777215)],[20,new pt(16777215)]].reduce((e,[n,i])=>{const s=1/(n+1),a=e[e.length-1],o=Array.from(Array(n)).map((l,c)=>a.clone().lerp(i,(c+1)*s));return[...e,...o]},[new pt(13421772)])}const Yh=r=>{const t=document.createElement("canvas");t.width=r.image.width,t.height=r.image.height;const e=t.getContext("2d");return e.drawImage(r.image,0,0),e.getImageData(0,0,t.width,t.height)},sa=(r,t)=>{const e=new fe;e.position.copy(r);const n=new Me({color:1118481}),i=new Me({color:0}),s=new Me({color:0}),a=new Me({color:3355443}),o=new ln(32,2),l=new ln(32,6),c=new jn(12,12,32),h=new C,u=c.getAttribute("position");Gf(()=>0);for(let g=0;g<u.count;g++)h.fromBufferAttribute(u,g),h.x>0&&h.y>0&&(h.y=-2),u.setXYZ(g,h.x,h.y,h.z);c.attributes.position.needsUpdate=!0,c.computeVertexNormals(),c.computeBoundingSphere();const f=new ne(c,[s,s,a,s,s,s]),d=new ne(o,n);d.position.set(-6,7,0),d.rotateY(Math.PI/2);const _=new ne(l,i);return _.position.set(-3,8,0),_.rotateY(Math.PI/2),_.rotateX(Math.PI/2),e.add(f),e.add(d),e.add(_),e},Lo=(r,t)=>{const e=new Me({transparent:!0,map:t}),n=new jn(1,12,1),i=new ne(n,e);return i.position.copy(r),i},Do=(r,t,e)=>{const n=new fe,i=new Me({color:13421772,map:t,side:nn});i.map.colorSpace=jt;const s=new ln(10,4,1,1),a=new ne(s,i);return a.position.set(r.x,r.y+4,r.z),n.add(Lo(new C(r.x+5.5,r.y,r.z),e)),n.add(Lo(new C(r.x-5.5,r.y,r.z),e)),n.add(Lo(new C(r.x,r.y+6.5,r.z),e).rotateZ(Math.PI/2)),n.add(a),n},DM=()=>{const e=new ln(8,4,16,8),n=new C,i=e.attributes.position;for(let s=0;s<i.count;s++){n.fromBufferAttribute(i,s);const a=s%17;let o=n.z,l=n.x;a===0&&(l=1.7,o=-.5),a===1&&(l=-1.7,o=-.5),a===2&&(l=-2.7,o=.6),a===3&&(l=-2.6,o=.6),a===13&&(l=2.6,o=.6),a===14&&(l=2,o=2),a===15&&(l=2.7,o=.5),a===16&&(l=1.7,o=-.5),i.setXYZ(s,l,n.y,o)}return e.rotateX(Math.PI/2).rotateY(Math.PI/2),e.attributes.position.needsUpdate=!0,e.computeVertexNormals(),e.computeBoundingSphere(),e},IM=()=>{const e=new ln(8,4,16,8),n=new C,i=e.attributes.position;for(let s=0;s<i.count;s++){n.fromBufferAttribute(i,s);const a=s%17;let o=n.z,l=n.x;a===0&&(l=0,o=2),a===1&&(l=-2,o=2),a===2&&(l=-2.25,o=1.25),a===3&&(l=-2.6,o=.6),a===13&&(l=2.6,o=.6),a===14&&(l=2.25,o=1.25),a===15&&(l=2,o=2),a===16&&(l=0,o=2),i.setXYZ(s,l,n.y,o)}return e.rotateX(Math.PI/2).rotateY(Math.PI/2),e.attributes.position.needsUpdate=!0,e.computeVertexNormals(),e.computeBoundingSphere(),e},Xh=(r=8)=>{const n=new ln(8,4,16,8),i=new C,s=n.attributes.position;for(let a=0;a<s.count;a++){i.fromBufferAttribute(s,a);const o=a%17;let l=i.z,c=i.x;o===0&&(c=0,l=-.5),o===1&&(c=-1.7,l=-.5),o===2&&(c=-2.7,l=.6),o===3&&(c=-2.6,l=.6),o===13&&(c=2.6,l=.6),o===14&&(c=2.7,l=.6),o===15&&(c=1.7,l=-.5),o===16&&(c=0,l=-.5),s.setXYZ(a,c,i.y,l)}return n.rotateX(Math.PI/2).rotateY(Math.PI/2),n.attributes.position.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),n},UM=(r,t)=>{const e=new Me({color:10066329,map:t});e.map.colorSpace=jt;const n=new ln(r.width/8,r.height/8,r.width/8,r.height/8),i=new ne(n,e);i.rotateX(-Math.PI/2),i.position.set(0,-2,0);const s=new C,a=n.getAttribute("position"),o=Gf(()=>0);for(let l=0;l<a.count;l++){s.fromBufferAttribute(a,l);const c=Math.floor(s.x*8+r.width/2),h=Math.floor(s.y*8+r.height/2),u=Math.floor(h*r.width+c)*4,d=r.data[u]/255,_=o.noise2D(s.x/30,s.y/30);a.setXYZ(l,s.x,s.y,s.z+d*16+d*_*8)}return n.attributes.position.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere(),i},NM=()=>{const r=new Zv;return r.add(new ua(new C(16,0,0),new C(16,0,-32))),r.add(new ri(new C(16,0,-32),new C(16,0,-48),new C(32,0,-40),new C(32,0,-56))),r.add(new ri(new C(32,0,-56),new C(32,0,-72),new C(32,2,-72),new C(32,2,-88))),r.add(new ri(new C(32,2,-88),new C(32,2,-100),new C(16,2,-100),new C(16,2,-88))),r.add(new Df([new C(16,2,-88),new C(16,2,-80),new C(0,3,-64),new C(0,5,-48),new C(-32,4,-16),new C(-24,6,16),new C(-24,8,48),new C(-24,8,56)],!1)),r.add(new ri(new C(-24,8,56),new C(-24,8,64),new C(-16,7,72),new C(-8,7,72))),r.add(new ri(new C(-8,7,72),new C(8,7,72),new C(8,8,96),new C(24,8,96))),r.add(new ua(new C(24,8,96),new C(32,8,96))),r.add(new ri(new C(32,8,96),new C(48,8,96),new C(48,4,72),new C(32,4,72))),r.add(new ri(new C(32,4,72),new C(8,4,72),new C(16,0,48),new C(16,0,32))),r.add(new ua(new C(16,0,32),new C(16,0,0))),r},OM=(r,t)=>{const e=new fe;e.add(sa(new C(4,4,32),t.stand)),e.add(sa(new C(4,4,-4),t.stand)),e.add(sa(new C(28,4,-4),t.stand).rotateY(Math.PI)),e.add(sa(new C(28,4,32),t.stand).rotateY(Math.PI)),e.add(Do(new C(16,0,-32),t.screen4,t.pillar)),e.add(Do(new C(32,2,-72),t.screen2,t.pillar)),e.add(Do(new C(0,5,-48),t.screen1,t.pillar));const n=Xh(4),i=Xh(8),s=DM(),a=IM(),o=new Me({color:10075084,map:t.ground1}),l=new Me({color:13421772,map:t.ground2}),c=new Me({color:13421772,map:t.ground3}),h=new Me({color:13421772,map:t.ground4}),u=new Me({color:13421772,map:t.ground5}),f=new Me({color:65535,transparent:!0,map:t.ground6});o.map.colorSpace=jt,l.map.colorSpace=jt,c.map.colorSpace=jt,h.map.colorSpace=jt,u.map.colorSpace=jt,f.map.colorSpace=jt;const d=74,_=4,g=r.getLength(),p=g/_,m=Math.ceil(p),x=1/p,A=LM();return console.log("splineLength",g),console.log("stepCount",p),console.log("stepCountRounded",m),[new vr(m,1,n,o),new vr(m,1,s,l),new vr(m,1,i,c),new vr(m,1,a,h),new vr(m,1,n,u),new vr(m,1,n,f)].forEach((S,T)=>{if(S.updateCurve(0,r),T===0){for(let M=8;M<9;M++)S.moveIndividualAlongCurve(M,(d+M)*x%1),S.object3D.setColorAt(M,A[M%A.length]);for(let M=10;M<32;M++)S.moveIndividualAlongCurve(M,(d+M)*x%1),S.object3D.setColorAt(M,A[M%A.length]);for(let M=38;M<52;M++)S.moveIndividualAlongCurve(M,(d+M)*x%1),S.object3D.setColorAt(M,A[M%A.length]);for(let M=76;M<m;M++)S.moveIndividualAlongCurve(M,(d+M)*x%1),S.object3D.setColorAt(M,A[M%A.length])}if(T===1)for(let M=32;M<38;M++)S.moveIndividualAlongCurve(M,(d+M)*x%1),S.object3D.setColorAt(M,A[M%A.length]);if(T===2)for(let M=0;M<8;M++)S.moveIndividualAlongCurve(M,(d+M)*x%1),S.object3D.setColorAt(M,A[M%A.length]);if(T===3)for(let M=52;M<76;M++)S.moveIndividualAlongCurve(M,(d+M)*x%1),S.object3D.setColorAt(M,A[M%A.length]);if(T===4)for(let M=9;M<10;M++)S.moveIndividualAlongCurve(M,(d+M)*x%1),S.object3D.setColorAt(M,A[M%A.length]);if(T===5){for(let M=52;M<53;M++)S.moveIndividualAlongCurve(M,(d+M)*x%1);for(let M=66;M<67;M++)S.moveIndividualAlongCurve(M,(d+M)*x%1)}e.add(S.object3D)}),e};class BM extends hi{constructor(t,e,n,i){super(),this._cameraTarget=new fe,this._cameraPosition=new fe;const s=new Me({transparent:!0,map:i,side:nn,opacity:.4});s.depthTest=!1;const a=new ln(.75,.375);this._shadow=new ne(a,s),this._shadow.position.set(0,0,0),this._shadow.renderOrder=998,this._cameraTarget.position.setZ(-4),this._cameraTarget.position.setY(.5),this._cameraPosition.position.setZ(-.75),this._cameraPosition.position.setY(.6),this._cameraPosition.lookAt(this._cameraTarget.position),this.add(this._shadow),this.add(this._cameraPosition),this.add(this._cameraTarget),this.rotateY(Math.PI),t.traverse(o=>{o instanceof ne&&this.setMesh(o)}),this._mesh.scale.multiplyScalar(.06),this._mesh.rotateY(Math.PI),this._mesh.position.setY(.4),this._mesh.position.setZ(0),this._mesh.renderOrder=999,this._mesh.material=e,this.material.map=n,this.material.map.colorSpace=jt,this.add(this._mesh)}setMesh(t){this._mesh=t}get cameraPosition(){return this._cameraPosition}get material(){return this._mesh.material}get shadow(){return this._shadow}get model(){return this._mesh}}class FM extends hi{constructor(t,e){super();const n=document.createElement("canvas");n.width=t.image.width,n.height=t.image.height;const i=n.getContext("2d");i.drawImage(t.image,0,0);const s=UM(i.getImageData(0,0,n.width,n.height),e);this.add(s)}}class GM{constructor(){this.isUpDown=!1,this.isDownDown=!1,this.isLeftDown=!1,this.isRightDown=!1,document.addEventListener("keydown",this.onKeyDown.bind(this),!1),document.addEventListener("keyup",this.onKeyUp.bind(this),!1)}onKeyDown(t){const e=t.key;e=="w"||e=="ArrowUp"?this.isUpDown=!0:e=="s"||e=="ArrowDown"?this.isDownDown=!0:e=="a"||e=="ArrowLeft"?this.isLeftDown=!0:(e=="d"||e=="ArrowRight")&&(this.isRightDown=!0)}onKeyUp(t){const e=t.key;e=="w"||e=="ArrowUp"?this.isUpDown=!1:e=="s"||e=="ArrowDown"?this.isDownDown=!1:e=="a"||e=="ArrowLeft"?this.isLeftDown=!1:(e=="d"||e=="ArrowRight")&&(this.isRightDown=!1)}}class zM extends hi{constructor(t,e){super(),this._textureIndex=0,this.position.copy(t),this._textures=e,this._material=new Me({color:13421772,map:this.texture,side:nn}),this._material.map.colorSpace=jt;const n=new ln(1.5,.5),i=new ne(n,this._material);i.position.set(0,2,0);const s=new Me({color:6710886}),a=new jn(3.1,.1,.1),o=new ne(a,s);o.position.set(1.5,2.3,0);const l=new jn(.1,2.25,.1),c=new ne(l,s);c.position.set(3,1.125,0),this.add(o),this.add(c),this.add(i)}setState(t){this._textureIndex=t,this._material.map=this.texture,this._material.map.needsUpdate=!0}get texture(){return this._textures[this._textureIndex]}}class zf{constructor(t){this._container=document.createElement("div"),this._container.className="time-large",this._large=document.createElement("span"),this._large.className="time-seconds",this._small=document.createElement("span"),this._small.className="time-milliseconds",this._container.appendChild(this._large),this._container.appendChild(this._small)}setValue(t){const e=`${Po(Math.floor(t/60))}:${Po(Math.floor(t%60))}.`,n=`${Po(Math.floor(t%1*100))}`;this._large.innerText=e,this._small.innerText=n}get container(){return this._container}}class kM extends zf{constructor(t,e){super(t),this._indexN=e,this._index=document.createElement("span"),this._index.className="time-index",this._container.style.top=`${2.8+e*2.4}rem`,this._container.prepend(this._index)}setValue(t){super.setValue(t),this._index.innerText=`${this._indexN+1}.`}}const VM=""+new URL("screenFront-DT8GUmln.png",import.meta.url).href,HM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAABACAIAAADDDu+IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAyIDc5LmYzNTRlZmM3MCwgMjAyMy8xMS8wOS0xMjowNTo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowYmQ4MWU5OC1iYTIxLTQ1NDctODMxYy1lNTBiMjE1ZDk0OWMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTlGMUFBMEJEOUNGMTFFRUJDRTFGQzFCMkE1OUFDNEQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTlGMUFBMEFEOUNGMTFFRUJDRTFGQzFCMkE1OUFDNEQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NGM5YTEzOTEtOWEwNC02YzQxLWJmOWYtYjczYTdiNTg1ZDBkIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBiZDgxZTk4LWJhMjEtNDU0Ny04MzFjLWU1MGIyMTVkOTQ5YyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkCZIC8AAAu1SURBVHja7F1XbxRZGnVVJ9udgxMGTLZF3GUBkXYxLLCCQTDsLCAQ/AAkkkDwxgPiAXgAAS8kwQMSEhIPpB0YMUsUMAuLGGBZE8YG5Hbq4G633bkr7KFqKJXdwQG3RXXfT61W9XX1rVt1T59zvntvlakpU6YUkCAx0KDJJSBBAESCAOibDGs8PrO9nVyHDKEmlyBdmBOJqR0d9lgsrFbXmUw8RZFrQgDU1wBYal2u8kiEo6j5bjdfUFBnNpPLQgDUpzAmEovb2opYtkOrFUv+4PebEol/Oxzk4hAP1Dt6ABc1z8dUKoamxVecpodFIjWdneT6EAbKeDl4/ruWlopIhE3leKpCIdDSr1YruVAEQKlzrmUtLUaG6dRo0hmjWe3t0LIHJSXEUxMAdQsNx03z+2meD6p7uSbDw+ExwWCD0UguGgHQ76FnmLWNjWAgtm+8srqp6and/qC0lFw6AqACSzw+3e8PaDT+LzlXX8Iei4GxXlksea5l+Q4gKNccr7cyjWvOEBTPz/D5kKm9NZkIgPLXNa92Os2JBDtQFlnR3IyU7X5pKZevPJTXAKoMh8NqdVeanKvvWlbMsr1abwKgHIxGvX66MMQ8YAZSc9xLqzWkzt/LqCorK8vbk4eD+Z/ZXBaNGhgGGsT351UgYO5+Wdkzu514oDwK8E2cpqMqlfiRoemHJSXzPR4jw/D9rOqjXv+mu4OGqUI2l1d+KL8YCB37fVNTSSz2wWCQCiNqdVtR0cRAQMdxKp5X9+FVxLJOvR70I8/hjYkEKkeJq6iIACgHwxaLrWhpgeEFCSFvhwGSrI+YjUPLClmWpWlQSIYX9n/icPSYma8KhZa2tdE8XxGNAklNxcV5Mj6ULwDScNx8r7c0FisQViDA9GCjpbhY2gG4AYxGhUJangcOVGleYCl3YeFTh4Ptzj1/cbv1DEMJlVsTCSR37TodAVCOBBTnH05nRSTy+YQFfOA1Mhx2xGK/yaa0AlrtJ4OhprOzkONSYgjl2P+nYcPk6AFv/eB0wkJRwj7iF8cHg1A6pwygOesKcv62Hks8Pqu9He/J3hadDb/y1G6PfPHU4v5zvF5DkqcGtdQbDEja5egBY031+0FLfCq/1WAw/Gqz8Tl9eXM8C1Nz3AK3G2TDpvHU4A8tx/1cXi4Vdmi19UbjktZWIEbCHOppKyysM5vl6LHHYgtdLigXl6by0mgU6V5ur4XNZQYqZpiVzc2wzExGPwutcRUW/rOyUg4O8NDqpiYdy8ILqzjuvcn0LxnIECPC4b+1tmKDy+y9eP612fyopIR4IIWFOZGY5fMhq4I8xTK+sAMwZEkk4I4Z+vc1vmAOr06HlA0lDUYj0i7pTwXCkqBpHR0AXLQPlRtYViNglEiYYgLmZmlr67A+z7FTwrwYkqmbw4ZJhUjFTcL66Gc2W1RmkqBcy1paYMy5/lQOi/0yF9fC5qCEmYV7KmBN+jvDhezJp9X+XFERo9PeazAmGITFBhr4/lcOT517WpZrDITsaaqwMjUs44x+JfzT/P6XFkss1dfhuJHkx2l6YIlVufD1HFs/lFMAogTlqohEmK8YBUbqBAd9q6KiR7ktHv+uuRkZOzfg5hUU/DUSQUL32mIhEvbNhTUe/7PbDQphv3oOAZ46oNHcKyuTxoegXH/y+ajecq4+Vt6o1//icOTG+FCOMJCG4/7o9wNDgzUDBR6Cg5YAhLSrmGEGq/KxXV0ene63nLivIxcAhFx9bWNjOZSLHswbbbUysQKY7PH4IFb+d6fzQWnpL8q/V1rxAPo83uP1Qg6aB3viKS6DY4dWO+gDOZDFkFr9X7NZ0fP2igfQxEAA3BAdUM6VOeQeBa48Tg/+cwRqAgFoWauS1w8pGEBQrlVNTZbeZioGHCqel6f3ULFsHOX7pqbnNtsTxa6LVSqADAwz3efjKKq9P3cD9ivk2RzcdODrbt7IEJXhcI1Go9DxIUUCiOL52V7vqFCIzaZ7kDMQ2M4orEHL0unM9XhiNP1RttCWAChbATX5obHRFo8zWfaetAxAyMiKsgagAmGMcWVz81O7XXF5mcIAJCmXO/uT2wmZaw5qNL7sL1EdGQr5tVplaZnCALTA7a4KhZghyXvVchPNMFky0T2i1uXC2dUrZ4xRMQDSM8zS1lYwkD9rZjaDiY6qVF1DcvspDjnH67XHYk8UomXKAFAxw8wUHg3GU5SGH6JJJKq7oR664wpr8qFl75WgZQoAkIbjFrlcI8PhxNCO2MpNNNqgY9mhSzOFU4YF+/b9kAJm4ymBAJg8e36KUs5aAY/55YWZhII8C6WcNXlONImc9kA0Tdvsdq1GQ1GfFyKnZnuK8ng88Xi8vLxcpVJFo9H27v8hxWA0mk0mYR0zpdPp8NdQKFQhrDn0+/3BYDDFdVGry8rKcPRAINApPF981KhRWp2uob6eTTJDRUVFDiFpcrlccWHVB0osVistoxDqy7a4kUgk3B5PaUkJGsynt+fYGYdra2sjABpIVFdXb9iwAR2p6S11P3jwYENDw549e8xmc11d3eHDh6UOqK2tXbFihcViESH44MGDa9eulZSU7Nu3DzucP3/+3r17yRWinr1792q12suXL1+/fh3NWLx4McpxlNOnTwOv8p0nT568efNmbOzfv//jx48LFy5cvny51WoVsUKlUiJg4tChQ7t377b0trwVWN+2bRsB0EBizZo1I0aM6CNRARx4R2/RX0aQa2pqVq9ePX78ePHj+/fvr1y58vbtW2xL1aZb4iyVgyoqKytF9CDGjh27a9euY8eOtQp3FfaIWCw2bty4TZs29dpgECGaWlxcTPVmdIq/7Rvsv2kA2YVFDo2NjTdu3MhA8pAb/KDBUqIWQESgIGvXrl2wYIG4j8/nA+uAe7q5VEHR0D3J9IY/Sd0GBbEK93MBSVCo4cOHl5aW7ty58/jx406nMxl2s2fPxkYkErl06RLe0+EjLMSFCxd0shkSVC62+ebNm16vVzy7xJCMgOcmgEQa0Ov1BoOBTTMMg04CqcCpFH1ZlgVRAEmMGTNGBNPdu3fRH53d/09KV1cXOgYKtWrVqkWLFvUQGgBIK4T0USS5c+fOLV26FBABsnfs2AEeArh7ECFaiw2GYYBLOs0aNJEm0YCHDx/KyydOnCgC6PHjx83NzcREf23gJ45fP3pr48aNGXZDb504ceLly5fix6qqKunrJ0+eTKk1HR0dt2/fXrZsmU6IvjQGbhcKdebMGRDejBkz0DCRhz58+NCDvfBuNBrXr1+f2dk8e/Ys3n2dtQRZbdYWOeUXgC5evAgSGj16dIYLih86enTJkiWvX7+WJEzc32azwc/eunVLlIMeAYn59OkTfJI61SQXagBKVLKVsqhcVMlTp06BPObMmWMymcBDR44cgRglc2cG/UIgE/yKO8wIgPoWcDb4iUObNEIan+xUUIj0Z8KECRAOdLkIoHfv3oEVoE0ohPmF4vz444/gGyZpQc9/hEh5aBid6dOnA0DJMgQxPXv2LLp/3rx50Nbt27c/f/5cbIzUyGAwmBJY8uScHcK5kTwF0NSpU5FGoavSjZSgd2E8RYcLfIj9h8KrV68i51q5cmV1dTX6eN26dSAM+Gj0dLJPh2FK9tEaIbABd5XSnMEPoVXz589Hwg+eEwEN3LS0tIgStnXrVib9GjQw0NGjR5lsLlIjAPpshyVDkzmePHkiJl/YLhTWmr158wbmGiQBGDkcjpEjR27ZsgUlyOTr6+sl+QBKyrs/+Ece8E+vXr2aNGmS5Hzl/AcMgWNgq8USHBFoe/ToEYywXYgMDQask7lNUkyapgmABiGQidy/fz/zPsANNAvUAiuDhAsYklwz+hhpzosXL2pra9GdQIDobOBOpAwcCLhz544q1V1BHo8HaMAO2BCb0Zn0Ly/h0hoaGmbOnOn3+yGUBcLQ9oEDB+bOnZsZQEgDkyXM7XaLB0pJe99m5P4zEklkNchkKgkCIBIEQCQIgEjkY/xfgAEA2koOvWWpWf0AAAAASUVORK5CYII=",WM=""+new URL("screen3-DYfe3Wi5.png",import.meta.url).href,YM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAABACAIAAADDDu+IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAyIDc5LmYzNTRlZmM3MCwgMjAyMy8xMS8wOS0xMjowNTo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowYmQ4MWU5OC1iYTIxLTQ1NDctODMxYy1lNTBiMjE1ZDk0OWMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDFFQjFCMjREOUJGMTFFRTkxMUFFNUYzMDYyM0RGNjUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDFFQjFCMjNEOUJGMTFFRTkxMUFFNUYzMDYyM0RGNjUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YjFmYWIzMTEtMjUwNS04ZTQ5LTg5ZTYtZTZjMTRlOTkxODkxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBiZDgxZTk4LWJhMjEtNDU0Ny04MzFjLWU1MGIyMTVkOTQ5YyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pusl/vkAAACMSURBVHja7NJBEQAACMMwwM/828MDXxIJvXaSgquRAANhIAyEgcBAGAgDYSAwEAbCQBgIDISBMBAGAgNhIAyEgTAQGAgDYSAMBAbCQBgIA4GBMBAGwkBgIAyEgTAQBgIDYSAMhIHAQBgIA2EgMBAGwkAYCAyEgTAQBgIDYSAMhIEwEBgIA2EgflgBBgC3ggEHXP+QnAAAAABJRU5ErkJggg==",XM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABACAMAAADlCI9NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAyIDc5LmYzNTRlZmM3MCwgMjAyMy8xMS8wOS0xMjowNTo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFEMUFGN0Y5RDhCNjExRUU4ODQwQTFBNDBENUJFRDUzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFEMUFGN0ZBRDhCNjExRUU4ODQwQTFBNDBENUJFRDUzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUQxQUY3RjdEOEI2MTFFRTg4NDBBMUE0MEQ1QkVENTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUQxQUY3RjhEOEI2MTFFRTg4NDBBMUE0MEQ1QkVENTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6PEOR1AAAABlBMVEUAAAD///+l2Z/dAAAAIElEQVR42uzBAQEAAACCIP+vbkhAAQAAAAAAAADvJsAAIEAAAdcVaoUAAAAASUVORK5CYII=",ZM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAACACAYAAABqZmsaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAyIDc5LmYzNTRlZmM3MCwgMjAyMy8xMS8wOS0xMjowNTo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMwQzZBRDZFRDQ1MTExRUVBNzhEODBDMjZBMDMxQkQ4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMwQzZBRDZGRDQ1MTExRUVBNzhEODBDMjZBMDMxQkQ4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzBDNkFENkNENDUxMTFFRUE3OEQ4MEMyNkEwMzFCRDgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzBDNkFENkRENDUxMTFFRUE3OEQ4MEMyNkEwMzFCRDgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Yp+IGAAABn0lEQVR42uyaUQvDMAiEo/T//+Ws2xiUsbZqTn3Y9XEM7kuMxsjJGGOOxk9H89cOsP36cc4pKAERmW07cCf++s/JIQztwL5zLvGrEKSvPC0EHnE4gFccChARhwEYxSUFYEV8GcAjfpZZ2rXyJQCv+FVd0U5xNwBa3AWQIW4GyBI3AVjEj/2D9yLbUOLRG1RRK4f2hKgik3kZwXpG7RSPAIRPeygLvsVRom4A5DvBHYJM8at3AR+nBPjz+UDlrADSkJTUgeNO7FBRvblUiFbDEQpBdjiyHia5aYiE0GjXg4LQldYLAaEnp70MQo21Ig1CL3K+BEJvCk86hKUnTIUw1YFMCHMhyoJwVcIjhOViskC4S/ET4gOCgFhuyVYhUD1hGALZlAq8EFVAQAC8KRqdD5gh5N21zo4QHFNV2gBcKcr5AAE4H+iYCZTtAP0DLYeQ/oEWAPoHLOL0D8AA6B9AipsB6B+wiNM/UN2U0j9A/0BdCOgfIAABWuYDlbMC+gfoH6B/gP4B+gfoH6B/gP4B+gfoH6B/gP4B+gf4OH0IMACs50IsaNKsXAAAAABJRU5ErkJggg==",QM=""+new URL("ship-BYKgiysZ.png",import.meta.url).href,qM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAgCAYAAACinX6EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAyIDc5LmYzNTRlZmM3MCwgMjAyMy8xMS8wOS0xMjowNTo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA2QzEwM0YzRDlEOTExRUU5RTlEQTI4N0E0MzE1Q0REIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA2QzEwM0Y0RDlEOTExRUU5RTlEQTI4N0E0MzE1Q0REIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDZDMTAzRjFEOUQ5MTFFRTlFOURBMjg3QTQzMTVDREQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDZDMTAzRjJEOUQ5MTFFRTlFOURBMjg3QTQzMTVDREQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4WQ3d7AAAEwUlEQVR42uSZ22scVRzHZ3Znd3aT2qaGpGnjrTXEK15AlFKEqg8qUvvgo/jX+dQHH2oR9UEtiAgieAGtFioq1ku8xFaTdJPdGb9HPyf+ss5M9nJWGzzwZU4yM785v/tl4zzPo//zSkIRiuO49Ja5OjSEGsi45/cOW0IOInPdsUIpLpkg85Zxx/SNwrJwTDgotIV1npkSNoRV4QvhovALwoiKBOG+GUIIyQSZ90iF24QXhGeEm4QW37YW0BWuCd8IrwgvCl8KnTJrCCGEZAJu5Zius/eaf1p4Xjhi7vWvBlaxX5gRfhLOCD8bS+iVucSoqxZY+zE0nWCbmPa8cEJYqGDerjrPnuDdKWgl0I4HjD2TFUCF6XvmUzQ6J9yMhgddDd6Zg0ZqhBAPEYAnawElpp9yrXP4JTQ67Frg3bah52nH/6kLVJh+HS3l7J0GHxVmR/jMLO/OQSuHdj2kK9QCab6G2abmYG5/VLiXqD/savHuUWhFJqs0ioTwrwjAStqkoDoHbvK3ux4SjhP54xEFewQah/pot3xAtWlwFCuoBQx8XjMZdPdx8NYYCmpBY5+pFr2lBQmItTGZty6QmhzttHNAmB7TTGNoHDApNOdbpS4wjBBqgzBeRNCZnv5vfT/jcE5rhzHde4zpjrKa0DgOzRbfyLzFuTMUVYNl5/7Hc1WlZAXjNvD5nJ9iqrcLz1H2zgUIVO6AP1IevyRcEn6nRHbYpFLMdLa87MxDC6CfkH8O5uO+qs+Z6a3C48Kzwn3Gb0OsDKY/Fl4W3hS+EtboIbz1ORnkVeffVQBDtLU1tL9AvnYaf5DInZrnQizfHjuNfyt8gEW8LXyPFWSjtNHxbmnEmHxkgp1rcO4STgoP0e35uj0JzHy/ELq00St0i+8L54ULtNAd32UO4hKxMe0qrfuydh7zflJ4WFjE/FMTpUMzXiQI3xl2cIPLwnvC67jJCvOFXpk1bPONhsv6ea9xV5Y+gH+fxOzbgXuJcWPEBu5wnjjxIa10p8A9/rbuAgF45pv05c7UTwtPCbeYHHw9rgyGvxZeE87iGr8SJ3YIoUgAvqNzZn0Hg4zTjLKm99i8c43RmhPCq8Ln/G97qOJ4TwomRLMENsf4Y/TlzWjvrWmKqP2M4c4SMO2EaYcAEoaVPro/QkprRHt3NeDB8XIFC/iEbNG1pbBvM2fw8yWakDTa+yuFlyV4m7Fte2Lye2w6Lpdnr5oBRx1p2mFEfJ0xmps+oYeZ99D0VXjK+njtxabQcYzeQNOxTE1/GKbXiaQ/kGo6SNHdvzv6a9a/SHo8iP+Fnjh3MeFVzuByv/sN4VPhO3OmBTQ+Q2HW4/4lgqLb/+bo/VkomSxgG5yWyfNbfHzT7LOSUtMfwHVvp4QnaIhGTZsZjdAbwjnhXaOAqol0wwxRG6ZOuOYbJwrF0jrAu0XO37vW2AWZ5E4qxlNYyNSQzK+j4XNUeJ8RwbsDzBBsPeN5yPrPX5QG+0vNUVaPKHuB/RXS6f30ELWSyW7O8xnvfyS8JbyD6a4OeKZBFVVZCocYlPo2eZ54sgwWjTVscG0brV+G4Yv47Yppe4P+KrTtAmNzW91CJ2aQ2UYo3i+3TL728WbN+OtmFeMhzv6HAAMAoT96btTOoeMAAAAASUVORK5CYII=",JM=""+new URL("terrain-i7U-XBjT.png",import.meta.url).href,jM=""+new URL("track1-CXA997OI.png",import.meta.url).href,KM=""+new URL("track2-BVPqxE83.png",import.meta.url).href,$M=""+new URL("track3-tq09SZDv.png",import.meta.url).href,tx=""+new URL("track4-Bfh7q8nc.png",import.meta.url).href,ex=""+new URL("track5-CS9hq0FA.png",import.meta.url).href,nx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAEACAMAAADyTj5VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA31pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAyIDc5LmYzNTRlZmM3MCwgMjAyMy8xMS8wOS0xMjowNTo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5MjcyOEI3N0Q2NjIxMUUxOTRDQUVDRUMxQkI2ODM4OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDMEU3Qjk2RURDMjExMUVFQTk1REMwMzBGRjI1QzFCQSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDMEU3Qjk2RERDMjExMUVFQTk1REMwMzBGRjI1QzFCQSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NWRjMTNhMi02ODA5LTg5NGEtODg1MS1iNWYzZjIyYWY1OTQiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5YTgxMDM3Mi1kNzhlLTRkNGUtOTk2Zi05MWUzZGJmZTFhYjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5DlUUMAAAALVBMVEXCyrqelYCVgHaxqJWAbGK6uqhiRk82JjYmHy4fGCZsWFhPNkbS2soSEh/////ApFvpAAAAD3RSTlP//////////////////wDU3JihAAAKFElEQVR42uzd6XLjthKGYRFcRSW5/8sNsZHYKHHx0ii/358TjzyeOoXHLaAJQI///nj+/eX89v//BwBu5fkEwJ8GME0A+MsAnuP4BMAfBjANwwSAvwvgOc7zzRIAgJoBTEPX3SwBAKgYwHPslOrulQAAVAxgGlTTqHslAAD1AlgKQLPkXgkAQL0AlgLQLrlXAgBQLQBdAPol90oAAKoFoAuABnCvBACgVgB6CeAA3CkBAKgVwDR0qtFzgEbd6QUAoFIAz3HujIBl/Lsb7UAAVApANwG1AD3+d9qBAKgTwFoA7pYAANQJQBeAZfzNJFALuFwCAFAlAF0A9Pg/lhgBl0sAAKoEML1SAK8JAH8HwHMcUgDDxRIAgBoBTK9hjucA83CxBACgQgCmAHThKqC7XAIAUCGAyY7/IkD3AZT97/naQgAA9QEwPQDXBtLxAi6VAADUB0A/BdAxbwD2TUDnWi8AANUBsBuBlJsCummguro1CADVAZgG/avfuEWgWwiaP7pSAgBQG4ClALR9nwNY/uxKCQBAbQDsRqAigCtbgwBQGQA9A7AAVgHui+V/LpQAAFQGwJwFsBN/Pwt0X7SXzggAoC4A7ixAE64D3RfXzggAoC4ApgD49l/YCLICzpcAAFQFwMwAzO98AYB+4XQJAEBVANxZAPsAaHsL6PyjwfMLAQDUBMAcBvJbAMJJoN8ccP6YEABqAqALgN8DosJl4PrV6RIAgIoA+ALwBsDpEgCAigCYGcAHAGdLAADqAWCbgH4KEM8B1knA2YUAAOoBYJuA6yIgXgX4ZcDZXgAAqgGgjwM3wS7AdEeQ2yHYnDssDIBqAOgC0G41v1wBzItnSgAAagGwzgDezgFOzwIAUAsAWwDyeX/pqxMlAACVADAzgKMATpQAAFQCwF4IchTA8RIAgDoA6FuB49OAO3MAe1Lw+BkBANQBYBpmJ+DDKsCO//FjQgCoAoAuAE5A2AewdwTFfQAz/sdLAACqAGAKwNwVGwFZG8AIOFoCAFADAHcaUBUbAVkbQJ05KQiAGgD4K8GWQf5HJ3kA6P57e+nExWEAqACA7gGcBXC0FwCACgBMgzoP4GA7EADyAZizACoDEM4BMgDq6BkBAMgHYD8YJJ8EhquA/KWDTwQAIB6Auw8gXeslV8RkK8SDJQAA4gHYw0AqaPa00Vc7Lx0sAQCQDsB8NJiKen9N9EsfjHnYF1THPlAMANIBLAWg88nOAmUTgq1PrP/oQAkAgHAAtgB00ft84flf8pqrAQdKAACEAwhmAMkz/whA8trxWQAAZANYjwPnAMrPAqJ3hAMLAQDIBuBvBCoBKPYBgtcOHRYGgGgA641AxUEO+gA7AD6XAACIBuDOArTxJCB8m08nCOH3HtkgDADJAEwTMDoKFKz8w6ti866AmwR8LAEAkAzA3Qi0Lu390bBo3bdOA7fXgoNjn0oAAAQDcEuAqNu7jnh8UeT2LCBtDX8oAQAQDMB/OnBxEhgDKE8CD9waBAC5ANYLQR7+LshgyFMA8VfbN3+6MgQAcgGsF4IUASQng3YBfCgBABALIDkOnAGIr4rdB/C+BABALIDtOHDvb4MNfufT539xPVDRjsF3JQAAUgG448DxE//4iV/aCCp+84fDwgCQCkBvBXbNHFXqA6RXxOR9AOWaSG83CANAKAC7D+AtgPRw6D6ANyUAAEIBuALw5i3g3VfxW8C7EgAAmQBMAch3gR+9ICLZJ/6mBABAJgBdALZlX7LpZ/2UmMIX+TcbAbslAAAiAUQF4CsA7JYAAIgE4GcAbwDEjaBPAHZLAAAkAvBLgLcAwlXAZwB7JQAAEgGYAuAuBo6fBtru3nYA0PcBCq9tf9m0BndKAAAEAnCHgdzKPt8P0JY/MqYt7Qdo3fjvlQAACARgC8AKoLwjKF35l3YEhQB2SgAA5AGw9wEEANTelrD4lEDeCQwA7O0OBIA8APY+gLARmGwKfbslLLhLPmgF7t4XAABxANx9AKp02ivo7u1sCcu+1+8P2CkBABAHQG8EarPeTjSm+S7AZMnYdVnXqC1vDQKANABLAUg+HTw8C/i5EZR97/bp4qUSAABpAJYC0B8CsNMI2gfQl0oAAIQBMFuBHYDSTu/kJqiwEfRIG0H+b3sApVkAAIQBWI8DB53AnUaQvQdG7b22/W03oyxuEAaALAB6BuC28eR9ALWt9e2fzMOSufxa0gewX+QlAACyALglgFIq3xC0/ZbbQZ6H1zhN48sQ8N+dnSTtt59WWggAQBQAuwTwvZvC0t5v9W7s8C+/z09LwM8Z+2LTwGvKSwAARAHQS4Bsk9cjAfHoG+WH36gxBFTTl787/Gn5QgAAkgCYArD1dh5FAMtyLhz+gEDfFwE8tkZRXgIAIAlA9PHgGQD3pp4Nf0Sgz44RxQDSEgAAQQCijwfPHwXYm99Kwx++EYT3iOZvAdlJQQAIArB+OrAv4skqwM/8d/Z3Pv2KIFkFBJPA/KQgAOQAsKcB22Dh1iSXv74b/pxA3AewraDspCAA5ADQHw5qb3xOAahDw58QUCkA95PjTxMCgBgA9ixAAGB7C9DDdmT4AwJbJznsK5qNBlEJAIAYAPYwkH/Ap8LHO606OvzBdLANHx1FPzosAQCQAiC4D6BPDv6cGv6QQJ88Dy7cFwAAKQC2C0HckPkCcHr4w75A+tOyK0MAIARAcCOQGybzVXtp+MMqEPywR+HWIAAIARAVADdm/fXhj94IMgBBCQCADADPcc4A3Bv+aDqYAtg+WRgAMgDoTwcO5wB63n53+AMCan1W6BrLawkAgAgA9uPBg/u/my8Z/ugZQXS3+FoCACACgP14cL/L8wuHP35MFFwq5ksAACQA0DMAvbtTqa8f/pSA+WfUOgsAgAQASwFo3HGwbxj+5GGxVeZLAAAEADBLACfgW4Y/mg76KmNLAAAEAHAFQL89f9fwh4+J7L/lSgAAfh+AeQrw7cOfEnBPBADw+wD0PoCfGP6YgNsXAIDfBzDqp/c/MvzRfoFuHgEgAcCkd/D81PCHu4ZmXQIA8OsAxmH+yeHfCMzDCAABAF7DDw//SmB4AUACgNdrfP7w+C8CnuPyDwOAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAETnfwEGACZPyinJPvsgAAAAAElFTkSuQmCC",ix=""+new URL("displacement-akyG3I2p.png",import.meta.url).href,rx=""+new URL("collision-W_F5Ju-u.png",import.meta.url).href,sx=""+new URL("rock-DL0zC1o7.png",import.meta.url).href,ax=""+new URL("skyleft-Bc7aI7vz.png",import.meta.url).href,ox=""+new URL("skyright-DmCUisHJ.png",import.meta.url).href,lx=""+new URL("skytop-BoQHAFQi.png",import.meta.url).href,cx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAyIDc5LmYzNTRlZmM3MCwgMjAyMy8xMS8wOS0xMjowNTo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE3QjIyMDA3REEyRTExRUU5OUE4RDQ4MjcxRTE5RTUwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE3QjIyMDA4REEyRTExRUU5OUE4RDQ4MjcxRTE5RTUwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTdCMjIwMDVEQTJFMTFFRTk5QThENDgyNzFFMTlFNTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTdCMjIwMDZEQTJFMTFFRTk5QThENDgyNzFFMTlFNTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz49AQO3AAAFn0lEQVR42uzVMQEAMAjAsDH/atCAAhThgZdEQp9GVj8A7vkSABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAGIAEAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABALAzAgwAkUkGSNTIy/sAAAAASUVORK5CYII=",hx=""+new URL("skyfront-BF2Urufm.png",import.meta.url).href,ux=""+new URL("skyback-EhndIt1M.png",import.meta.url).href,fx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAABACAIAAADDDu+IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAyIDc5LmYzNTRlZmM3MCwgMjAyMy8xMS8wOS0xMjowNTo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVDN0E0M0E5REIzODExRUVCRjVFODlCNUJDOEM5MjJFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVDN0E0M0FBREIzODExRUVCRjVFODlCNUJDOEM5MjJFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUM3QTQzQTdEQjM4MTFFRUJGNUU4OUI1QkM4QzkyMkUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUM3QTQzQThEQjM4MTFFRUJGNUU4OUI1QkM4QzkyMkUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5h06uBAAAFlUlEQVR42uydS2wbRRjH/3Xs4KRtjB0SHOdph8YSQkGySQ6J014InFClggRHAgfUK9x5IzjyOFThABy5gHgIQQUUpbaUk5OUGCKnRHk4tgMoMU6okvihMpqeQEhj78zubLPf72jZMz+P//bOzO5+BgiCIAiCIAiCIAiCIAiCIAjCTE4pbOs0kAAuAA8CI8D9wBn++N/A78Aq8CtwHUgCt2w5Fm63OxgMhkKhezltbW0ej4c9Xq1WDw8P/+IUObVajfyVBYg18TgwAzwBtDXw/EPga+Bj4Cpw2x5D39/fH41GBwYG2GcgfDIb/a2trWw2m8vl4Hh/2QBdAl4GHjb02hvAq8AXWoc+HA7HYrHOzk4Dr93d3U2n0xsbG072Nx6gYeAKMC09BN8Dl4E1y4e+o6MjkUj09fVJtrO9vZ1Kpfb3953pbzBATwMfsvegaCyY+wvApxaO/vDw8NTUVGtrq5LWKpVKMplcW1tzoH+LgcS9CbwP3KNuOFhTTwFsvveTJaM/NjY2MTHR0tKiqkHWVCQScblchULBaf4tzabnA+Alc8blPBAEvjF59CcnJ0dHR81ouaenp729nc1PHeXfXIDeBl40c3Qe4b9GP5rW/vj4uEmjf4euri72bc7n887xbyJAzwDvmv/7nOA7Rhlz5g3sl99s/2AwWC6X9/b2HOLvanzNNWvVDHGWd6d8zcJmndb4s45Ydw7xbzRAV9StuYSc5d0p/mFLJFStWYR4PB7WnUP8GwrQJRX7PU0xzTtVRTgclt8vaQrWHevUCf7iAJ3ie83W84q6E3WxWMx6/3g8Dgf4iwP0mNEzFZKM8lNsSr5Mxnb6JQkEAv39/SfeXxygGWjjWRWNRKNRXf4jIyMn3l8QoNPARX0BusgFZHC73UNDQ7r8WdeNnB6/q/0FAWJzca++AHm5gOSuhsIt/2ZhXTOBk+0vCNAFaEZSIBQK6fWXFLC/vyBAD+kOkKSA3+/X6y8pYH9/QYDO6Q6QpIDP59PrLylgf39BgLp0B0hSwOv16vWXFLC/vyBAZ3UHSFLAsu1/kwTs7+8CQUggCNCBbj9JgUqlotdfUsD+/oIA/ak7QJICR0dHev0lBezvLwjQTd0BkhQol8t6/SUF7O8vCFBGd4AkBUqlkl5/SQH7+wsCdF13gCQFisWiXn9JAfv7CwKUZEdBjQdgLiD5/uv1ui5/1rV8gGzuLwjQLeBLfQH6SroMQ61W03jr8ebmpmQZA/v7i/eBPtEXICVdr66u6vLPZrMn3l8coKvAzzrsWaffqWgnl8uZcZONENapkvIXNvcXB+g28JqOAL2urvhLOp223l9hp3b2b+hUxue8hoaV/AB8pq619fX17e1tK/3z+Tzr1An+jZ4Lu2zhaY0D3p1aUqlUtVq1xp91lEwmHeLf6OWSJfY94DU0LGDGhP2n4+Pjg4ODSCRigf/c3Jzy/Rvb+jdxvW1GxUXKQt4x7Q78Uqkkf5GykKWlpeXlZef4N3fB9jXgPmDcNPtZk6t/sEO71+vt7u42qf2VlZX5+XlH+Td9xf+3gJvX8lHOW7zykNllN9nS1OVy9fT0KG95cXHR1PTY09/ILSPX+EnyaXVFyvaB54H3rJqkFwqFcrnc29ur6o6ZSqXC5g2ZTMaB/sZvP3+A19B4VMWKna25frN8n+NOwRT2McgfVtiaRUuRTTv4y9YveJKXXjBWNOsG8IbS/R4DhMPheDweCAQMvHZ3d3dhYUHhfs/d6K+s0PhzvNB4I/cQHPFC4x/Zr9D44OBgIweFer2+ublpw0LjWvxV/tXBGb7IP8/vBjz37786+IMXrvsFmANS/BEb4vF42CKZzU/9fr/P5/vPXwWwaQdbSBeLxZ2dHcv29BzlTxAEQRAEQRAEQRAEQRAEQRD/wz8CDAArFZpE60Jm5AAAAABJRU5ErkJggg==",dx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAABACAIAAADDDu+IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAyIDc5LmYzNTRlZmM3MCwgMjAyMy8xMS8wOS0xMjowNTo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYyQzc5MzQyREIzODExRUU5OTE2OUVCODk0QzNEQUMwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYyQzc5MzQzREIzODExRUU5OTE2OUVCODk0QzNEQUMwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjJDNzkzNDBEQjM4MTFFRTk5MTY5RUI4OTRDM0RBQzAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjJDNzkzNDFEQjM4MTFFRTk5MTY5RUI4OTRDM0RBQzAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4cBRYUAAAHiklEQVR42uydX0xTVxzHv0ILRf4NBCwgaAvSxRHIYGKiRbZEZclmzNCJj0MfDK/67nS6uEf/PBB8UJ82o9H4J0aY/wJtZmYCilaRYocIbVWErlRGaSHs3Gu2uL3c23vOvacP5/PYtOd8uHx77znn3vMrIBAIBAKBQCAQCAQCgUAgEAgEAoGeLGHYVibgBJqANUAVsBzIkl9/B7wGvMBToBdwATNJeSwy0+C0o6kSa5ajqgjLs5GVLvvP4XUE3jd4+hq9Prh8mIklo7/JZLJarSUlJR/JZGRkmM1m8no8Hp+dnf1TJigzPz+fRAEiTTQDbcBWIEPF+2eBa8AZoBtYTIbv0BI0f4y2BmytRoZZhX8c1zw4cx/dz7C4mBTRKSsrczgc5eXlJEOKbybpefny5dDQ0NjYGP8AtQAHgFpNnx0ADgKXuR76lhocaEZtqSZ/Pw524fJjnv42m62urm7ZsmUaPjs5OdnX1/fixQs+AaoAOoDN1IfgJtAO+Aw/9BUF6PgWmx3U/kNovwDfW6P9c3JynE7nihUrKNsZHx93u93T09OGBqgVOEX+BkbHgrjvBc4ZePRbP8WpVuRYGPlHsfc8zvUbmP6KisbGxrS0NCatxWIxl8vl82n5FqdqSNwR4ASQzu5wkKZ2AGT4cdeQEc+Rr3CiBekmdv4m7KiFORV3nxuRnrVr165fvz41NZVVg6Qpu92ekpISCAT0DRBJz0lgvz7HZSNgBa7rnJ6T27H/C338K2DNwfWn+qZnw4YNNTU1erRcXFy8dOlSMr7WMUBHgX16Hp3P5LPRbd3aP/o19n2up3+ZdDa67dWr/YaGBp3S857CwkJyNvL7/boEaBdwTP/zs1NeMfLo0PKuOhz7Rn9/u7Ri5AnqMu4hVy69/a1WazgcnpqaUvn+FPVzrk6jRoidcnfM51ydO43yb5W6Yz7nIqNmY/xJR6Q7xgHqYDfnUiRb7o4tZMbOas6l7J8udcf4xOZ0sppzKWI2m0l3LAPUwmK9JyE2y52yoqWGwXpPYv4OqVNW2Gw2+vWehCDdkU7ZBGiJvNZsPN8zulFHZl4Hmnn4fyl1zYS6ujrj/evr69kEaIvWOxWU1Mi32OjZ4tB4p4LWv0S6xcbkZKDtTgUl+fn5ZWVlDALUBm58x6KRtnX8/BsYNOJwOHj5V1VV0QYoE9jGL0DbZAEaMtOwrZqff7UkQIPJZFq1ahUvf9K14u19hQCRsbiFX4AssgDV5MUOi5mfv1kSoMFqtTK8ZZEopGsiQBWgJnCGUqCpkrc/nUBJSQlff0UBhQBV8w4QpUB1MW9/OoG8vDy+/ooCCgFazTtAlAKrC3j70wnk5uby9VcUUAhQIe8AUQoUZvH2pxOwWCx8/RUFFAKUzTtAlALZFt7+dAKG3b7QLJACgYAChQBFePtRCkSivP3pBGIxzhuIFAUUAjTBO0CUAhPvePvTCUSjnL8BigIKARrmHSBKgeG3vP3pBMLhMF9/RQGFAHl4B4hSQI8nA40UCIVCfP0VBRQC1Ms7QJQCvT7e/nQCwSDnb4CigEKAXOQqyPECLAvQ4PIhGufnH5cEKP9/CwsLvPxJ17QBmgGu8AvQVeoyDDMxXOF3Gb7qoS3DMD8/T7n1mIbR0VHFMgzK60Bn+QWISddn7/PzZ9G11+vl5T80NKT4HuUAdQOPeNiTTrtYtNP9DI8CPPwD6HrGoJ2xsTH1m2wYQjpVU75DOUCLwCEeAfqBUfGXxUUc6uLh382s+EtfX5/x/io7VXUr45JcQ8NIbgEX2bV26ZFUQ8NQfy8uDjBrbWRkZHx83Eh/v99POmUWIMgVWAy7rRGRu2NL+wVE5ozyn0P7ecZtut3ueNyg+STpyOVSO/1V+7hkiHwP5BoaBtCmw/pT6C+MTEk1NIzw/5n9+tPc3FwkErHb7Qb49/T0qF9/SuB5Ww+Lh5QV+Um3HfieICwm2oeUlf1v4ViPLi2HQiE1DylT8vDhw8ePEyi6ltgD23eAAqBBN/tOnat/3BlGQRYaynXz/w379CzZR4YmFoulqKhIp/YHBwfv3buX0EcSfuL/BmCSa/kw50e58pDeVStvDMKUKtXyYe9/E/uv6F52k0ytU1JSiovZP+z94MGDRNOjJUDvz0PD8vZ1VkXKpoE9wHGjBunkPDQ8IW1fZ1WkbDqKPb/geI9B/oFAIBwOl5aWstrxE4vFyLjH49GyZq9993alXENjE4sZO5lzPYfRVBagYyc2VVH7e6U513MeRTYbGxtJjOgvi2TOZXSRzX/ZLpde0FaIYgA4zHS9R4t/rVR6oUbT7qsBPw7/ynK9RwM2m62+vj4/P1/DZycnJ/v7+1Wu9+gVIPxTaHy3XGhczSPkUbnQ+OkkKzS+ex22fqJqG2s0jmtPcPr3pCs0vnLlSjUXtYWFhdHR0WQpNP4hWfIkf6O8G3D1f3/q4I1cuO4JQMYJbvmVJCQrXZrkk/F1dbG0n+vDnzp48w7eCTwJoscH9x/SK0mI2Wwmk3wyvs7Ly8vNzf3fTx2QYVMoFAoGg69evTJsTVIgEAgEAoFAIBAIBAKBQCAQCAQCWv4WYAAbHEaLO85+DgAAAABJRU5ErkJggg==",px="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAABACAIAAADDDu+IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAyIDc5LmYzNTRlZmM3MCwgMjAyMy8xMS8wOS0xMjowNTo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY4M0FBOUM5REIzODExRUVCNkM5RjU3RjVDNjM3NEQ3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY4M0FBOUNBREIzODExRUVCNkM5RjU3RjVDNjM3NEQ3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjgzQUE5QzdEQjM4MTFFRUI2QzlGNTdGNUM2Mzc0RDciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjgzQUE5QzhEQjM4MTFFRUI2QzlGNTdGNUM2Mzc0RDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Z+F/5AAAHVUlEQVR42uydW0wUVxzGf8oiWMBqRUWtNuKFhhKMl2Jit9I+IE1aTLra6FuLJhJetW9NqFaNJn3x8kBqE7VP9R6VGKHeIktqaiIVXW/oei1uVbyBxBU0dM4kJvrizM45M2ebnN/jRs/5dr6PmXOZ818wGAwGg8FgMBgMBoPBYDAYDAaDwU8GKGwrB8JQDsUwBUZBrv35U7gL7XABmiEKPWl5LXIGES6kfBLFo5gyklF55GbZ+p9zt5v2e1y4S3OcaJye3nTUH8qhIMyYcoYWM3QKg0eRaRvQ95Rnd3nczuMLJJpJRHnRk04BspqohGqogsEu/v0zaICt0AT96fA3NIDKD6kuo6qEwZku9PfREGPrKZou0Z8WX4BxlRRVM76KkAsDXjzjVgOXt3JbhQGyAYpAHUz19H/bYAXs03rxI6XUVTJ1rCf9HaxoZN85nfonRJhex3BPBjxo4/QKbuzTFKCJUA8V0pfgMNRCPPBLPzGf+m+oKJLWf5naXcQ7g9Y/ZCLhet6XNuCfw7TU0hUPNkALYbP1HRRdiy6oge0BXv2F09i8kCHZivQnqdnJ9tYA07+QTzczSJEBvV1Ea4h7MiDDQ+JWw0bIUnc5rKYWgDX8OB7IiGf1l2yMkBVSpz/EgqlkZnD8ahAjno9XM3sjGeoMsJoqXMDATO4c9zlAVno2wXJ/rswcKICDPqdn03yWf+6P/okUDOHgBX/T88kmSv0xYPQc3ing1kE/A7QWlvl5fWbad6OjvrW/9iuWfean/nHibnS03a/2y9ZS6qcBI2aKu1HHUX8CtAjW+3+HDtsrRjEfWl40nfVf+6+/UKwYxRI+jHsWMdt/AwrCPGnnoWsD3A6irTlXq7pR89vphmmq52XWnKv1e2WjZgf9z5n2s+J5mTXnirQqGzW/nb5u9kxzOy8b6LLR+qDSY5Fnd6cWa8YeTHqE/izRneIbW31A6bHIzBPducRVgCIq1ntSosLuVBWRUgXrPanpLxKdqmJCRMF6T0pY3U2IKArQAHutOXh+VLRRZ8286ip16P9CdK1k5jVdhwEz3BngHKC5XncqJCm1t9jkmVvkcadCVv8YscWm4GYw1+NOhSTvlYotNgUBqkYb36lopHqWPv1lChop0mfAFBcGONykcsCaTGRr+gJJyJd79yNnEJ1ryM7UpL+P/B+k3v0I5fBtJxmaDHiZ5Ld8h3c/HO5AYX3pwe46LDl5KdSWHqE/UwiQoSCsLT0WVtcFTgY4BKgczUgKKJ+kW7+cgDG6DXAU4BCgEt0BkhRQMlq3fjkBw3Qb4CjAIUCTdQdIUsDkfN365QS8q9sARwEOARqhO0CSAkbk6tYvJyBbtwGOAhwClKc7QJIC8rJ165cTMEi3AY4CBmIwSOAQoG7d+iQFdCd165cT0KvbAEcBDgG6rztAkgLuP9WtX05AUrcBjgIcAnRFd4AkBVzp1K1fTsAT3QY4CnAIUEx3gCQF+PFmYJACHuk2wFGAQ4CadQdIUkBzXLd+OQEJ3QY4CnAIUNTe0dT2ALYFyBCNix1Nbfr7hAAp/6JiR1MXVteJqFyAemC/vgAdkC7D0NPLfn1PgQMx2TIML3q4oc+AmwecyzA4rwNt0xcgJV1vO6VPv4qu2/UZcNlF184BaoKzOtRbnTaqaKfpEmfv6NB/h8ZLCtq53cRDHQZYnd5uVBGgflipI0A/KSr+0t/PykYd+psUFX/p57QOA067M8DVVsZeu4ZGkByBPepa23tW1NAIVH87e9qUtXZ9r6ihESQdR7juzgC3e2G1AW5rdNvdqaV2lzjvF5D+59TuVNxmS6047xcMVkdR1wa4DZA1G10aVIBqQHmVi3gnS3cEpX8HV1WvgHfFaQ7KgGgNXa4NSOFsfEzFS8qOrPPtBH4sQXZI9iVlZ/1HWH/Cl5YfxVy9pCzJmXWcS8WA1KpzHLOPSZT5pv4Xn6t/HLtCfi5l433T/yfL/CzZ13GM7HxG+mbAxV84maIBKReYOgQhu5aPctbYlYf8rlp56CKhDFHLR73+wyzf73vZzduHGBgStXyU8/caTqZuQIaXv2N7k7xCXZGyLlgCG4IaY1n3oSv3xfF1VUXKupIs+Z0NJwLSf+eY2CQfW6GsSFlvFyeWEPNkQIa3Ls/BbrsetPyIwpqxz4OgLv4r/Ql2n6G4gMLhCmbs837lRLC7tg/PcW03w4oZIm2ANWNvmkfCqwGyx//n26UXvBWiaINVStd7vOifKkovlI7xpL+DVX+oXO/xwIT5zKgT59g98KCN1lVu13v8ChCvCo0vtguNu3mFPGkXGt+SZoXGF8+i6iNXx1iTfTScZ8tfaVZofDEfVLk6xvoyyc0GLm9Jj0Ljr5NrT/Ln2KcBJ7/5Uwf37MJ15+1HVYv9SRqSmyUm+db4umS0OM/1+k8d3HtK+33OJ8SjquWa+CQNycwVk3xrfD2sRJzneuOnDu6JwnWPzotH1b8t4hODwWAwGAwGg8FgMBgMBoPBYDAY/h/8J8AAZIcEhEyhl9UAAAAASUVORK5CYII=",mx=""+new URL("Crowd-BKrdOBuu.wav",import.meta.url).href,gx=""+new URL("Engine-fjOy70sv.wav",import.meta.url).href,_x=""+new URL("RamShip-DNPJFWcg.wav",import.meta.url).href,Ax=""+new URL("Boost-BVttX6EA.wav",import.meta.url).href,vx=""+new URL("Ready-BOLBKHNv.wav",import.meta.url).href,Mx=""+new URL("Go-BWiIbUcR.wav",import.meta.url).href,xx=""+new URL("ChemicalBeats-D_igAsLj.mp3",import.meta.url).href,yx={music:xx,boost:Ax,crowd:mx,engine:gx,ramShip:_x,ready:vx,go:Mx},Sx={collisionMap:rx,ground1:jM,ground2:KM,ground3:$M,ground4:tx,ground5:ex,ground6:nx,heightMap:ix,lights1:fx,lights2:dx,lights3:px,pillar:ZM,rock:sx,screen1:VM,screen2:HM,screen3:WM,screen4:YM,ship:QM,shadow:qM,stand:XM,terrain:JM},Ex=[ox,ax,lx,cx,hx,ux],ss=.33,kf=.5,Tx=kf-ss,Zh=.001,bx=.002,Qh=.04,qh=.002,aa=.005,Jh=0,jh=8.5;class wx{constructor(t,e,n){this.cameraMode="camera",this.checkpoint=!1,this.isControllable=!1,this.isLoaded=!1,this.lapTime=0,this.lapTimeStart=0,this.lapTimes=[],this.repulsion=new C,this.rotationY=0,this.speed=0,this.speedPrevious=0,this.textures={},this.audio={};const i=t.createElement("h3");i.innerText="LAP TIME";const s=t.createElement("h3");s.innerText="LAP RECORD";const a=t.createElement("button");a.innerText="PLAY",a.onclick=()=>{this.setCameraMode("player")},this.uiBottom=t.createElement("div"),this.uiBottom.className="ui-bottom",this.uiBottom.appendChild(a),this.uiTop=t.createElement("div"),this.uiTop.className="ui-top",this.ui=t.createElement("div"),this.ui.className="ui",this.hud=t.createElement("div"),this.hud.className="hud",this.hudData=t.createElement("div"),this.hudData.className="hud-data",this.hudTimes=t.createElement("div"),this.hudTimes.className="hud-times";const o=t.createElement("button");o.innerText="QUIT",o.onclick=()=>{this.setCameraMode("camera")},this.uiBottom2=t.createElement("div"),this.uiBottom2.className="ui-bottom2",this.uiBottom2.appendChild(o),this.timeElement=new zf(0),this.hudData.appendChild(i),this.hudData.appendChild(this.timeElement.container),this.hudData.appendChild(this.uiBottom2),this.hudData.appendChild(this.hudTimes),this.hudTimes.appendChild(s),Di.set(this.hud,{x:"-100%"}),Di.set(this.hudTimes,{x:"-50rem"}),this.hud.appendChild(this.hudData),this.hud.appendChild(this.uiBottom2),this.ui.appendChild(this.uiTop),this.ui.appendChild(this.uiBottom),this.lapTimeElements=Array.from(Array(3)).map((l,c)=>{const h=this.lapTimes[c],u=new kM(h,c);return h&&u.setValue(h),u}),this.lapTimeElements.forEach(l=>{this.hudTimes.appendChild(l.container)}),this.document=t,this.document.body.appendChild(this.ui),this.document.body.appendChild(this.hud),this.clock=new Ff,this.scene=new Cv,this.camera=new dn(100,e/n,.1,1e3),this.renderer=new Cf,this.renderer.setSize(e,n),this.curve=NM(),this.controls=new uM(this.camera,this.renderer.domElement),this.keys=new GM,this.audioListener=new lM,this.camera.add(this.audioListener),this.preload()}preload(){const t=new Nf;t.onLoad=()=>this.init(),this.textures=Object.entries(Sx).reduce((i,[s,a])=>{const o=new sM(t).load(a);return o.minFilter=he,o.magFilter=he,{...i,[s]:o}},{}),Object.entries(yx).forEach(([i,s])=>new aM(t).load(s,a=>{const o=new cM(this.audioListener).setBuffer(a);this.scene.add(o),this.audio[i]=o})),this.scene.background=new rM(t).load(Ex),this.scene.background.minFilter=he,this.scene.background.magFilter=he,new _M(t).load("./models/model.obj",i=>{this.model=i}),new Rl(t).load("./models/material.json",i=>{this.material=i,this.material.side=nn})}init(){this.collisionMap=Yh(this.textures.collisionMap),this.heightMap=Yh(this.textures.heightMap),this.environment=OM(this.curve,this.textures),this.lights=new zM(new C(16,0,-2),[this.textures.lights1,this.textures.lights2,this.textures.lights3]),this.actor=new BM(this.model,this.material,this.textures.ship,this.textures.shadow),this.actor.position.set(16,0,0),this.scene.add(new FM(this.textures.terrain,this.textures.rock)),this.scene.add(this.environment),this.scene.add(this.lights),this.scene.add(this.actor),this.cameraMode==="orbit"&&(this.camera.position.set(16,2,4),this.controls.update()),this.document.body.appendChild(this.renderer.domElement),this.isLoaded=!0}resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}update(){if(this.isLoaded){const t=this.clock.getElapsedTime(),e=20,n=t%e/e,i=(t+.001)%e/e,s=new C,a=new C;if(this.curve.getPointAt(n,s),this.curve.getPointAt(i,a),this.cameraMode==="player"){this.isControllable&&(this.setLapTime(t-this.lapTimeStart),this.updateStearing());const o=new C;this.actor.getWorldDirection(o);const c=new st(o.x,o.z).angle(),h=new st(2,0).rotateAround(new st(0,0),c),u=this.actor.position.clone().add(new C(h.x,0,h.y)),f=Wh(this.heightMap,this.actor.position,Jh,jh),d=Wh(this.heightMap,u,Jh,jh),_=f-d,g=new rn().setFromEuler(this.actor.model.rotation.clone()).slerp(new rn().setFromEuler(new Hr(Math.PI+_*1,-this.rotationY*5,Math.PI+this.rotationY*30)),.1),p=new rn;p.setFromEuler(this.actor.cameraPosition.rotation.clone()).slerp(new rn().setFromEuler(new Hr(this.actor.cameraPosition.rotation.x,this.actor.cameraPosition.rotation.y,Math.PI+this.rotationY*5)),.25),this.isControllable&&this.updateThrottle(),this.updateCollision(o),this.updateLap(),this.actor.rotateY(this.rotationY),this.actor.cameraPosition.rotation.setFromQuaternion(p),this.actor.model.rotation.setFromQuaternion(g),this.actor.shadow.rotation.y=-this.actor.model.rotation.y*-2,this.actor.position.add(o.multiplyScalar(this.speed)).add(this.repulsion),this.actor.position.lerp(this.actor.position.clone().setY(f),.25),this.updateCamera()}else this.cameraMode==="camera"?(this.actor.position.copy(s),this.actor.lookAt(a),this.updateCamera()):this.cameraMode==="orbit"&&this.controls.update();this.audio.crowd.setVolume(Math.max(0,1/100*(50-this.actor.position.clone().distanceTo(new C(24,0,0)))*.5)),this.audio.engine.setDetune(-100+this.speed/ss*1e3),this.audio.engine.setVolume(.4+this.speed/ss*.3),this.renderer.render(this.scene,this.camera)}}endLap(){this.lapTimes=this.lapTimes.reduce((t,e)=>{const n=t.pop();return e<n?[...t,e,n]:[...t,n,e]},[this.lapTime]),this.lapTimes=[...this.lapTimes].slice(0,3),this.setLapTimes(),this.lapTimeStart=this.clock.getElapsedTime()}setLapTime(t){this.lapTime=t,this.timeElement.setValue(t)}updateCamera(){this.camera.position.copy(this.actor.cameraPosition.getWorldPosition(new C)),this.camera.quaternion.copy(this.actor.cameraPosition.getWorldQuaternion(new rn))}updateLap(){const t=ds(this.collisionMap,new st(this.actor.position.x,this.actor.position.z),8);if(t){const[e,n,i]=t;e===0?(n===255&&this.checkpoint&&(this.checkpoint=!1,this.endLap()),i===255&&!this.checkpoint&&(this.checkpoint=!0)):e===255&&n===0&&(this.audio.boost.play(),this.setSpeed(Math.min(this.speed+Tx,kf)))}}updateCollision(t){const e=CM(this.collisionMap,this.actor.position,t);if(e){const[n,i]=e,s=new C,a=Math.max(this.speed,.01);i>n?(s.x+=a,this.setSpeed(this.speed*.25)):i<n?(s.x+=-a,this.setSpeed(this.speed*.25)):(s.z+=-a,this.setSpeed(this.speed*.25)),this.audio.ramShip.play(),this.repulsion.copy(s.applyEuler(this.actor.rotation))}else this.repulsion.lerp(new C,.1)}updateThrottle(){this.keys.isUpDown?this.setSpeed(Math.min(this.speed+Zh,ss)):this.keys.isDownDown?this.setSpeed(Math.max(this.speed-Zh,-ss/2)):this.setSpeed(Math.max(this.speed-bx,0))}updateStearing(){this.keys.isLeftDown&&this.keys.isRightDown?this.rotationY>0?this.rotationY=Math.max(this.rotationY-aa,0):this.rotationY<0&&(this.rotationY=Math.min(this.rotationY+aa,0)):this.keys.isLeftDown?this.rotationY=Math.min(this.rotationY+qh,Qh):this.keys.isRightDown?this.rotationY=Math.max(this.rotationY-qh,-Qh):this.rotationY>0?this.rotationY=Math.max(this.rotationY-aa,0):this.rotationY<0&&(this.rotationY=Math.min(this.rotationY+aa,0))}setSpeed(t){this.speedPrevious=this.speed,this.speed=t}setCameraMode(t){t==="player"&&this.cameraMode!=="player"&&(this.reset(),this.cameraMode=t,this.isControllable=!1,this.audio.music.setVolume(.3),this.audio.ready.setVolume(.5),this.audio.go.setVolume(.5),this.audio.ramShip.setVolume(.75),this.audio.boost.setVolume(.75),this.audio.music.setLoop(!0),this.audio.crowd.setLoop(!0),this.audio.engine.setLoop(!0),this.audio.music.play(),this.audio.crowd.play(),this.audio.engine.play(),Di.timeline({onComplete:()=>{this.countdown()}}).to(this.uiBottom,{y:"100%",duration:1}).to(this.uiTop,{y:"-100%",duration:1},0).to(this.hud,{x:0,duration:.5,ease:"Quint.easeOut"})),t==="camera"&&this.cameraMode!=="camera"&&(this.isControllable=!1,this.audio.crowd.stop(),this.audio.music.stop(),this.audio.engine.stop(),Di.timeline({onComplete:()=>{this.reset(),this.cameraMode=t}}).to(this.hud,{x:"-100%",duration:.5,ease:"Sine.easeIn"}).to(this.uiBottom,{y:"0",duration:1}).to(this.uiTop,{y:"0",duration:1},.5))}setLapTimes(){this.lapTimeElements.forEach((t,e)=>{const n=this.lapTimes[e];n&&t.setValue(n)}),this.lapTimes.length&&Di.to(this.hudTimes,{x:0,duration:.5})}reset(){this.rotationY=0,this.speed=0,this.speedPrevious=0,this.checkpoint=!1,this.repulsion.copy(new C),this.actor.position.set(16,0,1),this.actor.rotation.set(0,Math.PI,0),this.actor.model.rotation.set(0,Math.PI,0),this.actor.shadow.rotation.y=0,this.setLapTime(0),this.lights.setState(0)}countdown(){const t={x:0};this.lights.setState(0),Di.timeline({onComplete:()=>{this.lapTimeStart=this.clock.getElapsedTime(),this.isControllable=!0}}).to(t,{x:1e3,duration:1.5,onComplete:()=>{this.audio.ready.play(),this.lights.setState(1)}}).to(t,{x:2e3,duration:1.5,onComplete:()=>{this.audio.go.play(),this.lights.setState(2)}})}}(function(r,t){const e=new wx(t,self.innerWidth,self.innerHeight);function n(){requestAnimationFrame(n),e.update()}function i(){e.resize(self.innerWidth,self.innerHeight);const s=t.getElementsByTagName("html")[0];self.innerWidth<600||self.innerHeight<400?s.style.fontSize="0.4em":self.innerWidth<800||self.innerHeight<600?s.style.fontSize="0.75em":s.style.fontSize="1em"}r.addEventListener("resize",()=>i(),!1),r.addEventListener("fullscreen",()=>i(),!1),i(),n()})(window,document);
