!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).duDatepicker=t()}(this,function(){"use strict";function Y(e){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,t,n){return t&&R(e.prototype,t),n&&R(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function H(e){return function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function z(e){return e&&e.Math==Math&&e}function e(e){try{return!!e()}catch(e){return!0}}function B(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}function G(e){return re(ne(e),8,-1)}function q(e){if(null==e)throw ce("Can't call method on "+e);return e}function J(e){return le(se(e))}function t(e){return"function"==typeof e}function $(e){return"object"==typeof e?null!==e:ue(e)}function U(e,t){return arguments.length<2?(n=de[e],fe(n)?n:void 0):de[e]&&de[e][t];var n}function W(e){try{return ve(e)}catch(e){return"Object"}}function n(e){if(ye(e))return e;throw we(be(e)+" is not a function")}function r(e,t){return null==(e=e[t])?void 0:Ee(e)}function K(t,n){try{Oe(ke,t,{value:n,configurable:!0,writable:!0})}catch(e){ke[t]=n}return n}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},a=z("object"==typeof globalThis&&globalThis)||z("object"==typeof window&&window)||z("object"==typeof self&&self)||z("object"==typeof a&&a)||function(){return this}()||Function("return this")(),o={},i=!e(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}),c=!e(function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}),Q=Function.prototype.call,l=c?Q.bind(Q):function(){return Q.apply(Q,arguments)},s={},u={}.propertyIsEnumerable,X=Object.getOwnPropertyDescriptor,d=X&&!u.call({1:2},1),d=(s.f=d?function(e){e=X(this,e);return!!e&&e.enumerable}:u,c),u=Function.prototype,Z=u.bind,ee=u.call,te=d&&Z.bind(ee,ee),u=d?function(e){return e&&te(e)}:function(e){return e&&function(){return ee.apply(e,arguments)}},Z=u,ne=Z({}.toString),re=Z("".slice),d=u,Z=e,ae=G,oe=a.Object,ie=d("".split),d=Z(function(){return!oe("z").propertyIsEnumerable(0)})?function(e){return"String"==ae(e)?ie(e,""):oe(e)}:oe,ce=a.TypeError,le=d,se=q,ue=t,de=a,fe=t,Z=u({}.isPrototypeOf),f=U("navigator","userAgent")||"",p=f,h=a.process,g=a.Deno,h=h&&h.versions||g&&g.version,g=h&&h.v8,h=_=!(_=g?0<(m=g.split("."))[0]&&m[0]<4?1:+(m[0]+m[1]):_)&&p&&(!(m=p.match(/Edge\/(\d+)/))||74<=m[1])&&(m=p.match(/Chrome\/(\d+)/))?+m[1]:_,pe=h,g=e,p=!!Object.getOwnPropertySymbols&&!g(function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&pe&&pe<41}),m=p&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,he=U,ge=t,me=Z,_e=a.Object,_=m?function(e){return"symbol"==typeof e}:function(e){var t=he("Symbol");return ge(t)&&me(t.prototype,_e(e))},ve=a.String,ye=t,be=W,we=a.TypeError,Ee=n,De=l,Te=t,xe=$,Se=a.TypeError,g={exports:{}},ke=a,Oe=Object.defineProperty,v=K,y="__core-js_shared__",v=a[y]||v(y,{}),Ae=v;(g.exports=function(e,t){return Ae[e]||(Ae[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.22.2",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.2/LICENSE",source:"https://github.com/zloirock/core-js"});function je(e){return Ze(Xe(e))}function Ie(e){return"Symbol("+(void 0===e?"":e)+")_"+at(++nt+rt,36)}function b(e){var t;return ot(lt,e)&&(it||"string"==typeof lt[e])||(t="Symbol."+e,it&&ot(st,e)?lt[e]=st[e]:lt[e]=(ct&&ut?ut:dt)(t)),lt[e]}function Me(e){return e=yt(e,"string"),bt(e)?e:e+""}function Le(e){return Et?wt.createElement(e):{}}function w(e){if(Mt(e))return e;throw Ct(Lt(e)+" is not an object")}function Ce(e){return Ut[e]||(Ut[e]=$t(e))}function Fe(e){return(e=+e)!=e||0==e?0:(0<e?pn:fn)(e)}function Ye(e,t){return(e=hn(e))<0?gn(e+t,0):mn(e,t)}function Pe(e){return 0<e?vn(_n(e),9007199254740991):0}function Re(e){return yn(e.length)}function Ve(c){return function(e,t,n){var r,a=bn(e),o=En(a),i=wn(n,o);if(c&&t!=t){for(;i<o;)if((r=a[i++])!=r)return!0}else for(;i<o;i++)if((c||i in a)&&a[i]===t)return c||i||0;return!c&&-1}}function He(e,t){var n,r=Tn(e),a=0,o=[];for(n in r)!Dn(Sn,n)&&Dn(r,n)&&kn(o,n);for(;t.length>a;)!Dn(r,n=t[a++])||~xn(o,n)||kn(o,n);return o}function Ne(e,t){return(e=zn[Nn(e)])==Gn||e!=Bn&&(Vn(t)?Rn(t):!!t)}function E(e,t){var n,r,a,o=e.target,i=e.global,c=e.stat,l=i?qn:c?qn[o]||Wn(o,{}):(qn[o]||{}).prototype;if(l)for(n in t){if(r=t[n],a=e.noTargetGet?(a=Jn(l,n))&&a.value:l[n],!Qn(i?n:o+(c?".":"#")+n,e.forced)&&void 0!==a){if(typeof r==typeof a)continue;Kn(r,a)}(e.sham||a&&a.sham)&&$n(r,"sham",!0),Un(l,n,r,e)}}function ze(e){if("Symbol"===rr(e))throw TypeError("Cannot convert a Symbol value to a string");return ar(e)}function Be(){var e=or(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}var Ge,qe,Je,$e,Ue,We,Ke,Qe,Xe=q,Ze=a.Object,et=je,tt=u({}.hasOwnProperty),y=Object.hasOwn||function(e,t){return tt(et(e),t)},D=u,nt=0,rt=Math.random(),at=D(1..toString),D=a,T=g.exports,ot=y,x=Ie,it=p,ct=m,lt=T("wks"),st=D.Symbol,ut=st&&st.for,dt=ct?st:st&&st.withoutSetter||x,ft=l,pt=$,ht=_,gt=r,mt=function(e,t){var n,r;if("string"===t&&Te(n=e.toString)&&!xe(r=De(n,e)))return r;if(Te(n=e.valueOf)&&!xe(r=De(n,e)))return r;if("string"!==t&&Te(n=e.toString)&&!xe(r=De(n,e)))return r;throw Se("Can't convert object to primitive value")},p=b,_t=a.TypeError,vt=p("toPrimitive"),yt=function(e,t){if(!pt(e)||ht(e))return e;var n=gt(e,vt);if(n){if(n=ft(n,e,t=void 0===t?"default":t),!pt(n)||ht(n))return n;throw _t("Can't convert object to primitive value")}return mt(e,t=void 0===t?"number":t)},bt=_,m=$,wt=a.document,Et=m(wt)&&m(wt.createElement),Dt=Le,T=!i&&!e(function(){return 7!=Object.defineProperty(Dt("div"),"a",{get:function(){return 7}}).a}),Tt=l,xt=s,St=B,kt=J,Ot=Me,At=y,jt=T,It=Object.getOwnPropertyDescriptor,D=(o.f=i?It:function(e,t){if(e=kt(e),t=Ot(t),jt)try{return It(e,t)}catch(e){}if(At(e,t))return St(!Tt(xt.f,e,t),e[t])},{}),x=i&&e(function(){return 42!=Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype}),Mt=$,Lt=a.String,Ct=a.TypeError,Ft=T,Yt=w,Pt=Me,Rt=a.TypeError,Vt=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,Nt="enumerable",zt="configurable",Bt="writable",p=(D.f=i?x?function(e,t,n){var r;return Yt(e),t=Pt(t),Yt(n),"function"==typeof e&&"prototype"===t&&"value"in n&&Bt in n&&!n[Bt]&&((r=Ht(e,t))&&r[Bt]&&(e[t]=n.value,n={configurable:(zt in n?n:r)[zt],enumerable:(Nt in n?n:r)[Nt],writable:!1})),Vt(e,t,n)}:Vt:function(e,t,n){if(Yt(e),t=Pt(t),Yt(n),Ft)try{return Vt(e,t,n)}catch(e){}if("get"in n||"set"in n)throw Rt("Accessors not supported");return"value"in n&&(e[t]=n.value),e},i),Gt=D,qt=B,_=p?function(e,t,n){return Gt.f(e,t,qt(1,n))}:function(e,t,n){return e[t]=n,e},m={exports:{}},s=t,T=v,Jt=u(Function.toString),p=(s(T.inspectSource)||(T.inspectSource=function(e){return Jt(e)}),T.inspectSource),s=t,T=p,S=a.WeakMap,s=s(S)&&/native code/.test(T(S)),T=g.exports,$t=Ie,Ut=T("keys"),S={},T=u,Wt=$,Kt=_,Qt=y,k=v,O=Ce,A=S,Xt="Object already initialized",Zt=a.TypeError,en=a.WeakMap,s=(Ke=s||k.state?(Ge=k.state||(k.state=new en),qe=T(Ge.get),Je=T(Ge.has),$e=T(Ge.set),Ue=function(e,t){if(Je(Ge,e))throw new Zt(Xt);return t.facade=e,$e(Ge,e,t),t},We=function(e){return qe(Ge,e)||{}},function(e){return Je(Ge,e)}):(A[Qe=O("state")]=!0,Ue=function(e,t){if(Qt(e,Qe))throw new Zt(Xt);return t.facade=e,Kt(e,Qe,t),t},We=function(e){return Qt(e,Qe)?e[Qe]:{}},function(e){return Qt(e,Qe)}),{set:Ue,get:We,has:Ke,enforce:function(e){return Ke(e)?We(e):Ue(e,{})},getterFor:function(t){return function(e){if(Wt(e)&&(e=We(e)).type===t)return e;throw Zt("Incompatible receiver, "+t+" required")}}}),k=i,en=y,T=Function.prototype,A=k&&Object.getOwnPropertyDescriptor,O=en(T,"name"),en={EXISTS:O,PROPER:O&&"something"===function(){}.name,CONFIGURABLE:O&&(!k||A(T,"name").configurable)},tn=a,nn=t,rn=y,an=_,on=K,cn=p,ln=en.CONFIGURABLE,sn=s.get,un=s.enforce,dn=String(String).split("String"),O=((m.exports=function(e,t,n,r){var a,o=!!r&&!!r.unsafe,i=!!r&&!!r.enumerable,c=!!r&&!!r.noTargetGet,r=r&&void 0!==r.name?r.name:t;nn(n)&&("Symbol("===String(r).slice(0,7)&&(r="["+String(r).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!rn(n,"name")||ln&&n.name!==r)&&an(n,"name",r),(a=un(n)).source||(a.source=dn.join("string"==typeof r?r:""))),e===tn?i?e[t]=n:on(t,n):(o?!c&&e[t]&&(i=!0):delete e[t],i?e[t]=n:an(e,t,n))})(Function.prototype,"toString",function(){return nn(this)&&sn(this).source||cn(this)}),{}),fn=Math.ceil,pn=Math.floor,hn=Fe,gn=Math.max,mn=Math.min,_n=Fe,vn=Math.min,yn=Pe,bn=J,wn=Ye,En=Re,k={includes:Ve(!0),indexOf:Ve(!1)},A=u,Dn=y,Tn=J,xn=k.indexOf,Sn=S,kn=A([].push),T=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],On=He,An=T.concat("length","prototype"),k=(O.f=Object.getOwnPropertyNames||function(e){return On(e,An)},{}),A=(k.f=Object.getOwnPropertySymbols,U),jn=O,In=k,Mn=w,Ln=u([].concat),O=A("Reflect","ownKeys")||function(e){var t=jn.f(Mn(e)),n=In.f;return n?Ln(t,n(e)):t},Cn=y,Fn=O,Yn=o,Pn=D,Rn=e,Vn=t,Hn=/#|\.prototype\./,Nn=Ne.normalize=function(e){return String(e).replace(Hn,".").toLowerCase()},zn=Ne.data={},Bn=Ne.NATIVE="N",Gn=Ne.POLYFILL="P",qn=a,Jn=o.f,$n=_,Un=m.exports,Wn=K,Kn=function(e,t,n){for(var r=Fn(t),a=Pn.f,o=Yn.f,i=0;i<r.length;i++){var c=r[i];Cn(e,c)||n&&Cn(n,c)||a(e,c,o(t,c))}},Qn=Ne,k={},A=(k[b("toStringTag")]="z","[object z]"===String(k)),O=a,o=A,Xn=t,Zn=G,er=b("toStringTag"),tr=O.Object,nr="Arguments"==Zn(function(){return arguments}()),k=o?Zn:function(e){var t;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(t=function(e,t){try{return e[t]}catch(e){}}(e=tr(e),er))?t:nr?Zn(e):"Object"==(t=Zn(e))&&Xn(e.callee)?"Arguments":t},rr=k,ar=a.String,or=w,O=e,ir=a.RegExp,o=O(function(){var e=ir("a","y");return e.lastIndex=2,null!=e.exec("abcd")}),j=o||O(function(){return!ir("a","y").sticky}),O={BROKEN_CARET:o||O(function(){var e=ir("^r","gy");return e.lastIndex=2,null!=e.exec("str")}),MISSED_STICKY:j,UNSUPPORTED_Y:o},j={},cr=He,lr=T,o=Object.keys||function(e){return cr(e,lr)},sr=D,ur=w,dr=J,fr=o;j.f=i&&!x?Object.defineProperties:function(e,t){ur(e);for(var n,r=dr(t),a=fr(t),o=a.length,i=0;i<o;)sr.f(e,n=a[i++],r[n]);return e};function pr(){}function hr(e){e.write(Lr("")),e.close();var t=e.parentWindow.Object;return e=null,t}function gr(n,e,t,r){var i,a=aa(n),c=!ra(function(){var e={};return e[a]=function(){return 7},7!=""[n](e)}),o=c&&!ra(function(){var e=!1,t=/a/;return"split"===n&&((t={constructor:{}}).constructor[ia]=function(){return t},t.flags="",t[a]=/./[a]),t.exec=function(){return e=!0,null},t[a](""),!e});c&&o&&!t||(i=ea(/./[a]),o=e(a,""[n],function(e,t,n,r,a){var e=ea(e),o=t.exec;return o===na||o===ca.exec?c&&!a?{done:!0,value:i(t,n,r)}:{done:!0,value:e(n,t,r)}:{done:!1}}),ta(String.prototype,n,o[0]),ta(ca,a,o[1])),r&&oa(ca[a],"sham",!0)}function mr(){}function _r(e){if(!da(e))return!1;try{return ga(mr,ha,e),!0}catch(e){return!1}}function vr(e){if(!da(e))return!1;switch(fa(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return va||!!_a(ma,pa(e))}catch(e){return!0}}function yr(a){return function(e,t){var n,e=Sa(ka(e)),t=xa(t),r=e.length;return t<0||r<=t?a?"":void 0:(n=Aa(e,t))<55296||56319<n||t+1===r||(r=Aa(e,t+1))<56320||57343<r?a?Oa(e,t):n:a?ja(e,t,t+2):r-56320+(n-55296<<10)+65536}}function br(e,t,n){return t+(n?Ia(e,t).length:1)}function wr(e,t,n){(t=Ma(t))in e?La.f(e,t,Ca(0,n)):e[t]=n}function Er(e,t,n){for(var r=Ya(e),a=Fa(t,r),o=Fa(void 0===n?r:n,r),i=Ra(Va(o-a,0)),c=0;a<o;a++,c++)Pa(i,c,e[a]);return i.length=c,i}function Dr(e,t){var n=e.exec;if(za(n))return null!==(n=Ha(n,e,t))&&Na(n),n;if("RegExp"===Ba(e))return Ha(Ga,e,t);throw qa("RegExp#exec called on incompatible receiver")}var Tr,i=U("document","documentElement"),xr=w,Sr=j,kr=T,x=S,Or=i,Ar=Le,jr="prototype",Ir="script",Mr=Ce("IE_PROTO"),Lr=function(e){return"<"+Ir+">"+e+"</"+Ir+">"},Cr=function(){try{Tr=new ActiveXObject("htmlfile")}catch(e){}Cr="undefined"==typeof document||document.domain&&Tr?hr(Tr):(e=Ar("iframe"),t="java"+Ir+":",e.style.display="none",Or.appendChild(e),e.src=String(t),(t=e.contentWindow.document).open(),t.write(Lr("document.F=Object")),t.close(),t.F);for(var e,t,n=kr.length;n--;)delete Cr[jr][kr[n]];return Cr()},j=(x[Mr]=!0,Object.create||function(e,t){var n;return null!==e?(pr[jr]=xr(e),n=new pr,pr[jr]=null,n[Mr]=e):n=Cr(),void 0===t?n:Sr.f(n,t)}),T=e,Fr=a.RegExp,S=T(function(){var e=Fr(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}),i=e,Yr=a.RegExp,x=i(function(){var e=Yr("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}),Pr=l,T=u,Rr=ze,Vr=Be,i=O,g=g.exports,Hr=j,Nr=s.get,zr=g("native-string-replace",String.prototype.replace),Br=RegExp.prototype.exec,Gr=Br,qr=T("".charAt),Jr=T("".indexOf),$r=T("".replace),Ur=T("".slice),Wr=(g=/b*/g,Pr(Br,T=/a/,"a"),Pr(Br,g,"a"),0!==T.lastIndex||0!==g.lastIndex),Kr=i.BROKEN_CARET,Qr=void 0!==/()??/.exec("")[1],T=Gr=Wr||Qr||Kr||S||x?function(e){var t,n,r,a,o,i,c=this,l=Nr(c),e=Rr(e),s=l.raw;if(s)return s.lastIndex=c.lastIndex,d=Pr(Gr,s,e),c.lastIndex=s.lastIndex,d;var u=l.groups,s=Kr&&c.sticky,d=Pr(Vr,c),l=c.source,f=0,p=e;if(s&&(d=$r(d,"y",""),-1===Jr(d,"g")&&(d+="g"),p=Ur(e,c.lastIndex),0<c.lastIndex&&(!c.multiline||c.multiline&&"\n"!==qr(e,c.lastIndex-1))&&(l="(?: "+l+")",p=" "+p,f++),t=new RegExp("^(?:"+l+")",d)),Qr&&(t=new RegExp("^"+l+"$(?!\\s)",d)),Wr&&(n=c.lastIndex),r=Pr(Br,s?t:c,p),s?r?(r.input=Ur(r.input,f),r[0]=Ur(r[0],f),r.index=c.lastIndex,c.lastIndex+=r[0].length):c.lastIndex=0:Wr&&r&&(c.lastIndex=c.global?r.index+r[0].length:n),Qr&&r&&1<r.length&&Pr(zr,r[0],t,function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(r[a]=void 0)}),r&&u)for(r.groups=o=Hr(null),a=0;a<u.length;a++)o[(i=u[a])[0]]=r[i[1]];return r}:Gr,g=(E({target:"RegExp",proto:!0,forced:/./.exec!==T},{exec:T}),c),i=Function.prototype,Xr=i.apply,Zr=i.call,S="object"==typeof Reflect&&Reflect.apply||(g?Zr.bind(Xr):function(){return Zr.apply(Xr,arguments)}),ea=u,ta=m.exports,na=T,ra=e,aa=b,oa=_,ia=aa("species"),ca=RegExp.prototype,la=$,sa=G,ua=b("match"),x=u,i=e,da=t,fa=k,pa=p,ha=[],ga=U("Reflect","construct"),ma=/^\s*(?:class|function)\b/,_a=x(ma.exec),va=!ma.exec(mr),g=(vr.sham=!0,!ga||i(function(){var e;return _r(_r.call)||!_r(Object)||!_r(function(){e=!0})||e})?vr:_r),ya=g,ba=W,wa=a.TypeError,Ea=w,Da=function(e){if(ya(e))return e;throw wa(ba(e)+" is not a constructor")},Ta=b("species"),p=u,xa=Fe,Sa=ze,ka=q,Oa=p("".charAt),Aa=p("".charCodeAt),ja=p("".slice),x={codeAt:yr(!1),charAt:yr(!0)},Ia=x.charAt,Ma=Me,La=D,Ca=B,Fa=Ye,Ya=Re,Pa=wr,Ra=a.Array,Va=Math.max,Ha=l,Na=w,za=t,Ba=G,Ga=T,qa=a.TypeError,Ja=S,$a=l,i=u,p=gr,Ua=function(e){var t;return la(e)&&(void 0!==(t=e[ua])?!!t:"RegExp"==sa(e))},Wa=w,Ka=q,Qa=function(e,t){var e=Ea(e).constructor;return void 0===e||null==(e=Ea(e)[Ta])?t:Da(e)},Xa=br,Za=Pe,eo=ze,to=r,no=Er,ro=Dr,ao=T,T=e,oo=O.UNSUPPORTED_Y,io=4294967295,co=Math.min,lo=[].push,so=i(/./.exec),uo=i(lo),fo=i("".slice),O=(p("split",function(a,h,g){var m="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||1<".".split(/()()/).length||"".split(/.?/).length?function(e,t){var n=eo(Ka(this)),r=void 0===t?io:t>>>0;if(0==r)return[];if(void 0===e)return[n];if(!Ua(e))return $a(h,n,e,r);for(var a,o,i,c=[],t=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),l=0,s=new RegExp(e.source,t+"g");(a=$a(ao,s,n))&&!(l<(o=s.lastIndex)&&(uo(c,fo(n,l,a.index)),1<a.length&&a.index<n.length&&Ja(lo,c,no(a,1)),i=a[0].length,l=o,r<=c.length));)s.lastIndex===a.index&&s.lastIndex++;return l===n.length?!i&&so(s,"")||uo(c,""):uo(c,fo(n,l)),r<c.length?no(c,0,r):c}:"0".split(void 0,0).length?function(e,t){return void 0===e&&0===t?[]:$a(h,this,e,t)}:h;return[function(e,t){var n=Ka(this),r=null==e?void 0:to(e,a);return r?$a(r,e,n,t):$a(m,eo(n),e,t)},function(e,t){var n=Wa(this),r=eo(e),e=g(m,n,r,t,m!==h);if(e.done)return e.value;var e=Qa(n,RegExp),a=n.unicode,o=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(oo?"g":"y"),i=new e(oo?"^(?:"+n.source+")":n,o),c=void 0===t?io:t>>>0;if(0==c)return[];if(0===r.length)return null===ro(i,r)?[r]:[];for(var l=0,s=0,u=[];s<r.length;){i.lastIndex=oo?0:s;var d,f=ro(i,oo?fo(r,s):r);if(null===f||(d=co(Za(i.lastIndex+(oo?s:0)),r.length))===l)s=Xa(r,s,a);else{if(uo(u,fo(r,l,s)),u.length===c)return u;for(var p=1;p<=f.length-1;p++)if(uo(u,f[p]),u.length===c)return u;s=l=d}}return uo(u,fo(r,l)),u}]},!!T(function(){var e=/(?:)/,t=e.exec,e=(e.exec=function(){return t.apply(this,arguments)},"ab".split(e));return 2!==e.length||"a"!==e[0]||"b"!==e[1]}),oo),A),po=k,i=m.exports;A||i(Object.prototype,"toString",O?{}.toString:function(){return"[object "+po(this)+"]"},{unsafe:!0});function ho(e){var p=0==e,h=1==e,g=2==e,m=3==e;return function(c,l,s){_o(c);var u=vo("Promise"),e=mo(c.next),d=0,f=void 0!==l;return!f&&p||mo(l),new u(function(n,r){var a=function(e,t){try{var n=yo(c,"return");if(n)return u.resolve(go(n,c)).then(function(){e(t)},function(e){r(e)})}catch(e){return r(e)}e(t)},o=function(e){a(r,e)},i=function(){try{if(p&&9007199254740991<d&&f)throw bo("The allowed number of iterations has been exceeded");u.resolve(_o(go(e,c))).then(function(e){try{var t;_o(e).done?p?(s.length=d,n(s)):n(!m&&(g||void 0)):(t=e.value,f?u.resolve(p?l(t,d):l(t)).then(function(e){h?i():g?e?i():a(n,!1):p?(s[d++]=e,i()):e?a(n,m||t):i()},o):(s[d++]=t,i()))}catch(e){o(e)}},o)}catch(e){o(e)}};i()})}}var go=l,mo=n,_o=w,vo=U,yo=r,bo=a.TypeError,p={toArray:ho(0),forEach:ho(1),every:ho(2),some:ho(3),find:ho(4)},T=E,wo=p.forEach;T({target:"AsyncIterator",proto:!0,real:!0,forced:!0},{forEach:function(e){return wo(this,e)}});var Eo,Do=Z,To=a.TypeError,A=!e(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}),i=a,xo=y,So=t,ko=je,O=A,Oo=Ce("IE_PROTO"),Ao=i.Object,jo=Ao.prototype,T=O?Ao.getPrototypeOf:function(e){e=ko(e);if(xo(e,Oo))return e[Oo];var t=e.constructor;return So(t)&&e instanceof t?t.prototype:e instanceof Ao?jo:null},A=e,i=t,O=T,Io=m.exports,Mo=b("iterator"),I=!1;[].keys&&("next"in(Co=[].keys())?(O=O(O(Co)))!==Object.prototype&&(Eo=O):I=!0);function Lo(){Fo(this,Yo)}i((Eo=null==Eo||A(function(){var e={};return Eo[Mo].call(e)!==e})?{}:Eo)[Mo])||Io(Eo,Mo,function(){return this});var Co={IteratorPrototype:Eo,BUGGY_SAFARI_ITERATORS:I},O=E,i=a,Fo=function(e,t){if(Do(t,e))return e;throw To("Incorrect invocation")},A=t,Io=_,I=e,M=y,L=b,Yo=Co.IteratorPrototype,L=L("toStringTag"),Po=i.Iterator,i=!A(Po)||Po.prototype!==Yo||!I(function(){Po({})});M(Yo,L)||Io(Yo,L,"Iterator"),!i&&M(Yo,"constructor")&&Yo.constructor!==Object||Io(Yo,"constructor",Lo),Lo.prototype=Yo,O({global:!0,forced:i},{Iterator:Lo});function Ro(e,t){return Ko(e),void 0===t?e:Qo?Xo(e,t):function(){return e.apply(t,arguments)}}function Vo(e){return void 0!==e&&(Zo.Array===e||ti[ei]===e)}function Ho(e){if(null!=e)return ri(e,oi)||ri(e,"@@iterator")||ai[ni(e)]}function No(e,t){if(t=arguments.length<2?ui(e):t,ci(t))return li(ii(t,e));throw di(si(e)+" is not iterable")}function zo(e,t,n){var r,a;pi(e);try{if(!(r=hi(e,"return"))){if("throw"===t)throw n;return n}r=fi(r,e)}catch(e){a=!0,r=e}if("throw"===t)throw n;if(a)throw r;return pi(r),n}function Bo(e,t){this.stopped=e,this.result=t}function Go(e,t,n){function r(e){return o&&Ti(o,"normal",e),new Bo(!0,e)}function a(e){return f?(_i(e),h?g(e[0],e[1],r):g(e[0],e[1])):h?g(e,r):g(e)}var o,i,c,l,s,u,d=n&&n.that,f=!(!n||!n.AS_ENTRIES),p=!(!n||!n.IS_ITERATOR),h=!(!n||!n.INTERRUPTED),g=gi(t,d);if(p)o=e;else{if(!(n=Di(e)))throw xi(vi(e)+" is not iterable");if(yi(n)){for(i=0,c=bi(e);i<c;i++)if((l=a(e[i]))&&wi(Si,l))return l;return new Bo(!1)}o=Ei(e,n)}for(s=o.next;!(u=mi(s,o)).done;){try{l=a(u.value)}catch(e){Ti(o,"throw",e)}if("object"==typeof l&&l&&wi(Si,l))return l}return new Bo(!1)}function qo(e,t){return new(Fi(e))(0===t?0:t)}function Jo(f){var p=1==f,h=2==f,g=3==f,m=4==f,_=6==f,v=7==f,y=5==f||_;return function(e,t,n,r){for(var a,o,i=Ri(e),c=Pi(i),l=Yi(t,n),s=Vi(c),u=0,t=r||qo,d=p?t(e,s):h||v?t(e,0):void 0;u<s;u++)if((y||u in c)&&(o=l(a=c[u],u,i),f))if(p)d[u]=o;else if(o)switch(f){case 3:return!0;case 5:return a;case 6:return u;case 2:Hi(d,a)}else switch(f){case 4:return!1;case 7:Hi(d,a)}return _?-1:g||m?m:d}}function $o(e,t){var n=[][e];return!!n&&Ni(function(){n.call(null,t||function(){return 1},1)})}function Uo(t){if(t&&t.forEach!==qi)try{Ji(t,"forEach",qi)}catch(e){t.forEach=qi}}var Wo,Ko=n,Qo=c,Xo=u(u.bind),A={},Zo=A,ei=b("iterator"),ti=Array.prototype,ni=k,ri=r,ai=A,oi=b("iterator"),ii=l,ci=n,li=w,si=W,ui=Ho,di=a.TypeError,fi=l,pi=w,hi=r,gi=Ro,mi=l,_i=w,vi=W,yi=Vo,bi=Re,wi=Z,Ei=No,Di=Ho,Ti=zo,xi=a.TypeError,Si=Bo.prototype,ki=Go,Oi=w,I=(E({target:"Iterator",proto:!0,real:!0,forced:!0},{forEach:function(e){ki(Oi(this),e,{IS_ITERATOR:!0})}}),Le("span").classList),L=I&&I.constructor&&I.constructor.prototype,M=L===Object.prototype?void 0:L,Ai=G,Io=Array.isArray||function(e){return"Array"==Ai(e)},O=a,ji=Io,Ii=g,Mi=$,Li=b("species"),Ci=O.Array,Fi=function(e){var t;return ji(e)&&(t=e.constructor,(Ii(t)&&(t===Ci||ji(t.prototype))||Mi(t)&&null===(t=t[Li]))&&(t=void 0)),void 0===t?Ci:t},Yi=Ro,Pi=d,Ri=je,Vi=Re,Hi=u([].push),i={forEach:Jo(0),map:Jo(1),filter:Jo(2),some:Jo(3),every:Jo(4),find:Jo(5),findIndex:Jo(6),filterReject:Jo(7)},Ni=e,zi=i.forEach,Bi=a,Gi={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},c=M,qi=$o("forEach")?[].forEach:function(e){return zi(this,e,1<arguments.length?arguments[1]:void 0)},Ji=_;for(Wo in Gi)Gi[Wo]&&Uo(Bi[Wo]&&Bi[Wo].prototype);Uo(c);function $i(e,t){var n=e.length,r=Qi(n/2);if(n<8){for(var a,o,i=e,c=t,l=i.length,s=1;s<l;){for(a=i[o=s];o&&0<c(i[o-1],a);)i[o]=i[--o];o!==s++&&(i[o]=a)}return i}for(var u=e,d=$i(Ki(e,0,r),t),f=$i(Ki(e,r),t),p=t,h=d.length,g=f.length,m=0,_=0;m<h||_<g;)u[m+_]=m<h&&_<g?p(d[m],f[_])<=0?d[m++]:f[_++]:m<h?d[m++]:f[_++];return u}function Ui(t){return 51<=Dc||!Ec(function(){var e=[];return(e.constructor={})[Tc]=function(){return{foo:1}},1!==e[t](Boolean).foo})}function Wi(e,t,n){for(var r in t)Sc(e,r,t[r],n);return e}var Ki=Er,Qi=Math.floor,k=$i,I=f.match(/firefox\/(\d+)/i),L=!!I&&+I[1],O=/MSIE|Trident/.test(f),M=f.match(/AppleWebKit\/(\d+)\./),c=!!M&&+M[1],I=E,f=u,Xi=n,Zi=je,ec=Re,tc=ze,M=e,nc=k,k=$o,rc=L,ac=O,oc=h,ic=c,cc=[],lc=f(cc.sort),sc=f(cc.push),L=M(function(){cc.sort(void 0)}),O=M(function(){cc.sort(null)}),c=k("sort"),uc=!M(function(){if(oc)return oc<70;if(!(rc&&3<rc)){if(ac)return!0;if(ic)return ic<603;for(var e,t,n,r="",a=65;a<76;a++){switch(e=String.fromCharCode(a),a){case 66:case 69:case 70:case 72:t=3;break;case 68:case 71:t=4;break;default:t=2}for(n=0;n<47;n++)cc.push({k:e+n,v:t})}for(cc.sort(function(e,t){return t.v-e.v}),n=0;n<cc.length;n++)e=cc[n].k.charAt(0),r.charAt(r.length-1)!==e&&(r+=e);return"DGBEFHACIJK"!==r}}),f=(I({target:"Array",proto:!0,forced:L||!O||!c||!uc},{sort:function(e){void 0!==e&&Xi(e);var t=Zi(this);if(uc)return void 0===e?lc(t):lc(t,e);for(var n,r,a=[],o=ec(t),i=0;i<o;i++)i in t&&sc(a,t[i]);for(nc(a,(r=e,function(e,t){return void 0===t?-1:void 0===e?1:void 0!==r?+r(e,t)||0:tc(e)>tc(t)?1:-1})),n=a.length,i=0;i<n;)t[i]=a[i++];for(;i<o;)delete t[i++];return t}}),E),k=a,dc=l,fc=n,pc=w,hc=U("Promise"),gc=k.TypeError,M=(f({target:"AsyncIterator",proto:!0,real:!0,forced:!0},{reduce:function(o){var e=pc(this),t=fc(e.next),i=arguments.length<2,c=i?void 0:arguments[1];return fc(o),new hc(function(n,r){function a(){try{hc.resolve(pc(dc(t,e))).then(function(e){try{var t;pc(e).done?i?r(gc("Reduce of empty iterator with no initial value")):n(c):(t=e.value,i?(i=!1,c=t,a()):hc.resolve(o(c,t)).then(function(e){c=e,a()},r))}catch(e){r(e)}},r)}catch(e){r(e)}}a()})}}),E),mc=Go,_c=n,vc=w,yc=a.TypeError,I=(M({target:"Iterator",proto:!0,real:!0,forced:!0},{reduce:function(t){vc(this),_c(t);var n=arguments.length<2,r=n?void 0:arguments[1];if(mc(this,function(e){r=n?(n=!1,e):t(r,e)},{IS_ITERATOR:!0}),n)throw yc("Reduce of empty iterator with no initial value");return r}}),E),L=d,bc=J,O=$o,wc=u([].join),c=L!=Object,k=O("join",","),Ec=(I({target:"Array",proto:!0,forced:c||!k},{join:function(e){return wc(bc(this),void 0===e?",":e)}}),e),Dc=h,Tc=b("species"),f=E,xc=i.map,Sc=(f({target:"Array",proto:!0,forced:!Ui("map")},{map:function(e){return xc(this,e,1<arguments.length?arguments[1]:void 0)}}),m.exports),M=a,d=v,L=t,O=T,I=m.exports,c="USE_FUNCTION_CONSTRUCTOR",k=b("asyncIterator"),h=M.AsyncIterator,f=d.AsyncIteratorPrototype;if(f)C=f;else if(L(h))C=h.prototype;else if(d[c]||M[c])try{pl=O(O(O(Function("return async function*(){}()")()))),O(pl)===Object.prototype&&(C=pl)}catch(e){}L((C=C||{})[k])||I(C,k,function(){return this});function kc(i,c){function e(e){e.type=Vc,e.next=Ic(e.iterator.next),e.done=!1,e.ignoreArgument=!c,Hc(this,e)}return e.prototype=Fc(Lc(Pc),{next:function(r){var a=this,o=!!arguments.length;return new Rc(function(e){var t=Nc(a),n=o?[t.ignoreArgument?void 0:r]:c?[]:[void 0];t.ignoreArgument=!1,e(t.done?{done:!0,value:void 0}:Mc(jc(i,t,Rc,n)))})},return:function(a){var o=this;return new Rc(function(t,e){var n=Nc(o),r=n.iterator,n=(n.done=!0,Yc(r,"return"));if(void 0===n)return t({done:!0,value:a});Rc.resolve(jc(n,r,a)).then(function(e){Mc(e),t({done:!0,value:a})},e)})},throw:function(a){var o=this;return new Rc(function(e,t){var n=Nc(o),r=n.iterator,n=(n.done=!0,Yc(r,"throw"));if(void 0===n)return t(a);e(jc(n,r,a))})}}),c||Cc(e.prototype,zc,"Generator"),e}function Oc(n,r){function e(e){e.type=tl,e.next=Uc(e.iterator.next),e.done=!1,e.ignoreArg=!r,nl(this,e)}return e.prototype=Xc(Kc(el),{next:function(e){var t=rl(this),e=arguments.length?[t.ignoreArg?void 0:e]:r?[]:[void 0],e=(t.ignoreArg=!1,t.done?void 0:$c(n,t,e));return{done:t.done,value:e}},return:function(e){var t=rl(this),n=t.iterator,t=(t.done=!0,Zc(n,"return"));return{done:!0,value:t?Wc($c(t,n,e)).value:e}},throw:function(e){var t=rl(this),n=t.iterator,t=(t.done=!0,Zc(n,"throw"));if(t)return $c(t,n,e);throw e}}),r||Qc(e.prototype,al,"Generator"),e}function Ac(t,e,n,r){try{return r?e(ol(n)[0],n[1]):e(n)}catch(e){il(t,"throw",e)}}var jc=l,Ic=n,Mc=w,Lc=j,Cc=_,Fc=Wi,v=b,f=s,Yc=r,Pc=C,Rc=U("Promise"),Vc="AsyncIteratorProxy",Hc=f.set,Nc=f.getterFor(Vc),zc=v("toStringTag"),h=E,Bc=S,Gc=n,qc=w,Jc=kc(function(t,e){var n=this,r=n.mapper;return t.resolve(qc(Bc(n.next,n.iterator,e))).then(function(e){return qc(e).done?{done:n.done=!0,value:void 0}:t.resolve(r(e.value)).then(function(e){return{done:!1,value:e}})})}),$c=(h({target:"AsyncIterator",proto:!0,real:!0,forced:!0},{map:function(e){return new Jc({iterator:qc(this),mapper:Gc(e)})}}),l),Uc=n,Wc=w,Kc=j,Qc=_,Xc=Wi,d=b,M=s,Zc=r,el=Co.IteratorPrototype,tl="IteratorProxy",nl=M.set,rl=M.getterFor(tl),al=d("toStringTag"),ol=w,il=zo,c=E,cl=S,ll=n,sl=w,ul=Ac,dl=Oc(function(e){var t=this.iterator,e=sl(cl(this.next,t,e));if(!(this.done=!!e.done))return ul(t,this.mapper,e.value)}),O=(c({target:"Iterator",proto:!0,real:!0,forced:!0},{map:function(e){return new dl({iterator:sl(this),mapper:ll(e)})}}),E),fl=i.filter,pl=(O({target:"Array",proto:!0,forced:!Ui("filter")},{filter:function(e){return fl(this,e,1<arguments.length?arguments[1]:void 0)}}),E),hl=S,gl=n,ml=w,_l=kc(function(o,e){var i=this,c=i.filterer;return new o(function(n,r){function a(){try{o.resolve(ml(hl(i.next,i.iterator,e))).then(function(e){try{var t;ml(e).done?(i.done=!0,n({done:!0,value:void 0})):(t=e.value,o.resolve(c(t)).then(function(e){e?n({done:!1,value:t}):a()},r))}catch(e){r(e)}},r)}catch(e){r(e)}}a()})}),L=(pl({target:"AsyncIterator",proto:!0,real:!0,forced:!0},{filter:function(e){return new _l({iterator:ml(this),filterer:gl(e)})}}),E),vl=S,yl=n,bl=w,wl=Ac,El=Oc(function(e){for(var t,n=this.iterator,r=this.filterer,a=this.next;;){if(t=bl(vl(a,n,e)),this.done=!!t.done)return;if(t=t.value,wl(n,r,t))return t}});L({target:"Iterator",proto:!0,real:!0,forced:!0},{filter:function(e){return new El({iterator:bl(this),filterer:yl(e)})}});function Dl(e){xl[Tl][e]=!0}var I=j,k=D,Tl=b("unscopables"),xl=Array.prototype,C=(null==xl[Tl]&&k.f(xl,Tl,{configurable:!0,value:I(null)}),E),Sl=i.find,f=Dl,v="find",kl=!0,h=(v in[]&&Array(1)[v](function(){kl=!1}),C({target:"Array",proto:!0,forced:kl},{find:function(e){return Sl(this,e,1<arguments.length?arguments[1]:void 0)}}),f(v),E),Ol=p.find;h({target:"AsyncIterator",proto:!0,real:!0,forced:!0},{find:function(e){return Ol(this,e)}});var Al=Go,jl=n,Il=w;E({target:"Iterator",proto:!0,real:!0,forced:!0},{find:function(n){return Il(this),jl(n),Al(this,function(e,t){if(n(e))return t(e)},{IS_ITERATOR:!0,INTERRUPTED:!0}).result}});var Ml=Ro,Ll=l,Cl=je,Fl=Ac,Yl=Vo,Pl=g,Rl=Re,Vl=wr,Hl=No,Nl=Ho,zl=a.Array,Bl=b("iterator"),Gl=!1;try{var ql=0,Jl={next:function(){return{done:!!ql++}},return:function(){Gl=!0}};Jl[Bl]=function(){return this},Array.from(Jl,function(){throw 2})}catch(e){}function $l(e){var t,n,r,a,o,i,c=Cl(e),e=Pl(this),l=1<(u=arguments.length)?arguments[1]:void 0,s=void 0!==l,u=(s&&(l=Ml(l,2<u?arguments[2]:void 0)),Nl(c)),d=0;if(!u||this==zl&&Yl(u))for(t=Rl(c),n=e?new this(t):zl(t);d<t;d++)i=s?l(c[d],d):c[d],Vl(n,d,i);else for(o=(a=Hl(c,u)).next,n=e?new this:[];!(r=Ll(o,a)).done;d++)i=s?Fl(a,l,[r.value,d],!0):r.value,Vl(n,d,i);return n.length=d,n}function Ul(e,t,n){(e=e&&!n?e.prototype:e)&&!Xl(e,Zl)&&Ql(e,Zl,{configurable:!0,value:t})}function Wl(){return this}function Kl(){return this}E({target:"Array",stat:!0,forced:!function(e,t){if(!t&&!Gl)return!1;var n=!1;try{var r={};r[Bl]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(e){}return n}(function(e){Array.from(e)})},{from:$l});var Ql=D.f,Xl=y,Zl=b("toStringTag"),es=Co.IteratorPrototype,ts=j,ns=B,rs=Ul,as=A,os=t,is=a.String,cs=a.TypeError,ls=u,ss=w,us=function(e){if("object"==typeof e||os(e))return e;throw cs("Can't set "+is(e)+" as a prototype")},M=Object.setPrototypeOf||("__proto__"in{}?function(){var n,r=!1,e={};try{(n=ls(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(e,[]),r=e instanceof Array}catch(e){}return function(e,t){return ss(e),us(t),r?n(e,t):e.__proto__=t,e}}():void 0),ds=E,fs=l,ps=t,hs=function(e,t,n,r){t+=" Iterator";return e.prototype=ts(es,{next:ns(+!r,n)}),rs(e,t,!1),as[t]=Wl,e},gs=T,ms=M,_s=Ul,vs=_,ys=m.exports,d=b,bs=A,ws=en.PROPER,Es=en.CONFIGURABLE,Ds=Co.IteratorPrototype,Ts=Co.BUGGY_SAFARI_ITERATORS,xs=d("iterator"),Ss="values",ks="entries",Os=x.charAt,As=ze,c=s,O=function(e,t,n,r,a,o,i){hs(n,t,r);function c(e){if(e===a&&p)return p;if(!Ts&&e in d)return d[e];switch(e){case"keys":case Ss:case ks:return function(){return new n(this,e)}}return function(){return new n(this)}}var l,s,r=t+" Iterator",u=!1,d=e.prototype,f=d[xs]||d["@@iterator"]||a&&d[a],p=!Ts&&f||c(a),h="Array"==t&&d.entries||f;if(h&&(h=gs(h.call(new e)))!==Object.prototype&&h.next&&(gs(h)!==Ds&&(ms?ms(h,Ds):ps(h[xs])||ys(h,xs,Kl)),_s(h,r,!0)),ws&&a==Ss&&f&&f.name!==Ss&&(Es?vs(d,"name",Ss):(u=!0,p=function(){return fs(f,this)})),a)if(l={values:c(Ss),keys:o?p:c("keys"),entries:c(ks)},i)for(s in l)!Ts&&!u&&s in d||ys(d,s,l[s]);else ds({target:t,proto:!0,forced:Ts||u},l);return d[xs]!==p&&ys(d,xs,p,{name:a}),bs[t]=p,l},js="String Iterator",Is=c.set,Ms=c.getterFor(js);O(String,"String",function(e){Is(this,{type:js,string:As(e),index:0})},function(){var e=Ms(this),t=e.string,n=e.index;return n>=t.length?{value:void 0,done:!0}:(t=Os(t,n),e.index+=t.length,{value:t,done:!1})});var pl=u([].slice),L=E,k=a,Ls=Io,Cs=g,Fs=$,Ys=Ye,Ps=Re,Rs=J,Vs=wr,I=b,Hs=pl,C=Ui("slice"),Ns=I("species"),zs=k.Array,Bs=Math.max;L({target:"Array",proto:!0,forced:!C},{slice:function(e,t){var n,r,a,o=Rs(this),i=Ps(o),c=Ys(e,i),l=Ys(void 0===t?i:t,i);if(Ls(o)&&(n=o.constructor,(n=Cs(n)&&(n===zs||Ls(n.prototype))||Fs(n)&&null===(n=n[Ns])?void 0:n)===zs||void 0===n))return Hs(o,c,l);for(r=new(void 0===n?zs:n)(Bs(l-c,0)),a=0;c<l;c++,a++)c in o&&Vs(r,a,o[c]);return r.length=a,r}});var Gs=je,qs=o,f=(E({target:"Object",stat:!0,forced:e(function(){qs(1)})},{keys:function(e){return qs(Gs(e))}}),u),Js=je,$s=Math.floor,Us=f("".charAt),Ws=f("".replace),Ks=f("".slice),Qs=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,Xs=/\$([$&'`]|\d{1,2})/g,Zs=S,eu=l,v=u,p=gr,h=e,tu=w,nu=t,ru=Fe,au=Pe,ou=ze,iu=q,cu=br,lu=r,su=function(o,i,c,l,s,e){var u=c+o.length,d=l.length,t=Xs;return void 0!==s&&(s=Js(s),t=Qs),Ws(e,t,function(e,t){var n;switch(Us(t,0)){case"$":return"$";case"&":return o;case"`":return Ks(i,0,c);case"'":return Ks(i,u);case"<":n=s[Ks(t,1,-1)];break;default:var r,a=+t;if(0==a)return e;if(d<a)return 0!==(r=$s(a/10))&&r<=d?void 0===l[r-1]?Us(t,1):l[r-1]+Us(t,1):e;n=l[a-1]}return void 0===n?"":n})},uu=Dr,du=b("replace"),fu=Math.max,pu=Math.min,hu=v([].concat),gu=v([].push),mu=v("".indexOf),_u=v("".slice),Jl="$0"==="a".replace(/./,"$0"),vu=!!/./[du]&&""===/./[du]("a","$0"),yu=(p("replace",function(e,y,b){var w=vu?"$":"$0";return[function(e,t){var n=iu(this),r=null==e?void 0:lu(e,du);return r?eu(r,e,n,t):eu(y,ou(n),e,t)},function(e,t){var n=tu(this),r=ou(e);if("string"==typeof t&&-1===mu(t,w)&&-1===mu(t,"$<")){e=b(y,n,r,t);if(e.done)return e.value}for(var a,o=nu(t),i=(o||(t=ou(t)),n.global),c=(i&&(a=n.unicode,n.lastIndex=0),[]);null!==(f=uu(n,r))&&(gu(c,f),i);)""===ou(f[0])&&(n.lastIndex=cu(r,au(n.lastIndex),a));for(var l,s="",u=0,d=0;d<c.length;d++){for(var f,p=ou((f=c[d])[0]),h=fu(pu(ru(f.index),r.length),0),g=[],m=1;m<f.length;m++)gu(g,void 0===(l=f[m])?l:String(l));var _=f.groups,v=o?(v=hu([p],g,h,r),void 0!==_&&gu(v,_),ou(Zs(t,void 0,v))):su(p,r,h,g,_,t);u<=h&&(s+=_u(r,u,h)+v,u=h+p.length)}return s+_u(r,u)}]},!!h(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})||!Jl||vu),l),bu=y,wu=Z,Eu=Be,Du=RegExp.prototype,D=en.PROPER,j=m.exports,Tu=w,xu=ze,T=e,Su=function(e){var t=e.flags;return void 0!==t||"flags"in Du||bu(e,"flags")||!wu(Du,e)?t:yu(Eu,e)},M="toString",ku=RegExp.prototype[M],_=T(function(){return"/a/b"!=ku.call({source:"a",flags:"b"})}),A=D&&ku.name!=M,Ou=((_||A)&&j(RegExp.prototype,M,function(){var e=Tu(this);return"/"+xu(e.source)+"/"+xu(Su(e))},{unsafe:!0}),l),Au=w,ju=Pe,Iu=ze,Mu=q,Lu=r,Cu=br,Fu=Dr,Co=(gr("match",function(r,c,l){return[function(e){var t=Mu(this),n=null==e?void 0:Lu(e,r);return n?Ou(n,e,t):new RegExp(e)[r](Iu(t))},function(e){var t=Au(this),n=Iu(e),e=l(c,t,n);if(e.done)return e.value;if(!t.global)return Fu(t,n);for(var r=t.unicode,a=[],o=t.lastIndex=0;null!==(i=Fu(t,n));){var i=Iu(i[0]);""===(a[o]=i)&&(t.lastIndex=Cu(n,ju(t.lastIndex),r)),o++}return 0===o?null:a}]}),E),Yu=i.findIndex,d=Dl,x="findIndex",Pu=!0,F=(x in[]&&Array(1)[x](function(){Pu=!1}),Co({target:"Array",proto:!0,forced:Pu},{findIndex:function(e){return Yu(this,e,1<arguments.length?arguments[1]:void 0)}}),d(x),{appendTo:function(e,t,n){Array.isArray(e)?e.forEach(function(e){0===n?t.insertBefore(e,t.childNodes[n]||null):t.appendChild(e)}):0===n?t.insertBefore(e,t.childNodes[n]||null):t.appendChild(e)},addEvent:function(e,t,n){function r(e,t,n){e.addEventListener(t,n,!1)}Array.isArray(e)?e.forEach(function(e){return r(e,t,n)}):r(e,t,n)},removeEvent:function(e,t,n){function r(e,t,n){e.removeEventListener(t,n,!1)}Array.isArray(e)?e.forEach(function(e){return r(e,t,n)}):r(e,t,n)},empty:function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},createElem:function(e,t,n,r){e=document.createElement(e);return void 0!==n&&(e[r?"innerHTML":"innerText"]=n),void 0!==t&&F.setAttributes(e,t),e},setAttributes:function(e,t){for(var n in t)e.setAttribute(n,t[n])},setStyles:function(e,t){for(var n in t)e.style[n]=t[n]},addClass:function(t,e){Array.isArray(e)?e.forEach(function(e){return t.classList.add(e)}):t.classList.add(e)},removeClass:function(t,e){Array.isArray(e)?e.forEach(function(e){return t.classList.remove(e)}):t.classList.remove(e)},getDaysCount:function(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()},dateDiff:function(e,t){return Math.round((t-e)/864e5)},screenDim:function(){var e=document.documentElement;return{height:Math.max(e.offsetHeight,e.clientHeight),width:Math.max(e.offsetWidth,e.clientWidth)}},calcOffset:function(e){var t=document.documentElement||document.body,n=e.getBoundingClientRect(),r=n.top+t.scrollTop,n=n.left+t.scrollLeft,t=e.offsetHeight,e=e.offsetWidth,a=F.screenDim();return{top:r+t,left:n,right:a.width-(n+e),bottom:a.height-r}},extend:function(){var e={},t=!1,n=0,r=arguments.length;for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);n<r;n++){a=void 0;var a,o=arguments[n];for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t&&"[object Object]"===Object.prototype.toString.call(o[a])?e[a]=F.extend(!0,e[a],o[a]):e[a]=o[a])}return e},formatDate:function(e,t){var n=new Date(e),r=n.getDate(),a=n.getMonth(),o=n.getFullYear(),i=this.config.i18n,c=a+1;return t.replace(/(yyyy|yy|mmmm|mmm|mm|m|DD|D|dd|d)/g,function(e){switch(e){case"d":return r;case"dd":return("00"+r).slice(-2);case"D":return i.shortDays[n.getDay()];case"DD":return i.days[n.getDay()];case"m":return c;case"mm":return("00"+c).slice(-2);case"mmm":return i.shortMonths[a];case"mmmm":return i.months[a];case"yy":return o.toString().substr(2,2);case"yyyy":return o}})},parseDate:function(t,e){var n,r,e=void 0===e?this.config.format:e,a=(e.match(/d/g)||[]).length,o=(e.match(/m/g)||[]).length,i=(e.match(/y/g)||[]).length,c=4===o,l=1===o,s=1===a,u=t.length,d=e.indexOf("m"),f=e.indexOf("d"),p=e.indexOf("y"),h="",g="",m="",_=-1;return""===t?{m:null,d:null,y:null,date:new Date("")}:(c?(_=this.config.i18n.months.findIndex(function(e){return 0<=t.indexOf(e)}),h=this.config.i18n.months[_],f=(e=e.replace("mmmm",h)).indexOf("d"),p=p<d?e.indexOf("y"):e.indexOf("y",e.indexOf(h)+h.length)):h=!s&&!l||s&&!l&&d<f?t.substr(d,o):(c=e.lastIndexOf("m"),n=e.substring(d-1,d),r=e.substring(c+1,c+2),c===e.length-1?t.substring(t.indexOf(n,d-1)+1,u):0===d?t.substring(0,t.indexOf(r,d)):t.substring(t.indexOf(n,d-1)+1,t.indexOf(r,d+1))),{m:h,d:g=!s&&!l||!s&&l&&f<d?t.substr(f,a):(o=e.lastIndexOf("d"),n=e.substring(f-1,f),r=e.substring(o+1,o+2),o===e.length-1?t.substring(t.indexOf(n,f-1)+1,u):0===f?t.substring(0,t.indexOf(r,f)):t.substring(t.indexOf(n,f-1)+1,t.indexOf(r,f+1))),y:m=!l&&!s||l&&s&&p<d&&p<f||!l&&s&&p<f||l&&!s&&p<d?t.substr(p,i):(n=e.substring(p-1,p),t.substr(t.indexOf(n,p-1)+1,i)),date:new Date(m,isNaN(parseInt(h))?_:h-1,g)})},triggerChange:function(e,t){var n=document.createEvent("Event"),r=document.createEvent("Event");n.initEvent("change",!1,!1),r.initEvent("onchange",!1,!1),e.dispatchEvent(n),e.dispatchEvent(r),e.dispatchEvent(new function(e){var t=document.createEvent("CustomEvent");return t.initCustomEvent("datechanged",!1,!1,null),t.data=e,t}(t))},daysOfWeekDOM:function(){for(var e=this.config,t=e.i18n,n=[],r=0,a=e.firstDay||t.firstDay;r<t.shorterDays.length;r++,a++)n.push(t.shorterDays[a%7]);return"<span>".concat(n.join("</span><span>"),"</span>")},jsonToDate:function(e){return new Date(e.year,e.month,e.date)},dateToJson:function(e){return e?{year:e.getFullYear(),month:e.getMonth(),date:e.getDate()}:null},isElement:function(e){return e instanceof Element}}),Ru={btnOk:"Ok",btnCancel:"Cancel",btnClear:"CLEAR"},s=V(function e(t,n,r,a,o,i,c){P(this,e),this.months=t,this.shortMonths=n||this.months.map(function(e){return e.substr(0,3)}),this.days=r,this.shortDays=a||this.days.map(function(e){return e.substr(0,3)}),this.shorterDays=o||this.days.map(function(e){return e.substr(0,2)}),this.firstDay=i,this.dict=F.extend(Ru,c)}),c={Locale:s,en:new s("January_February_March_April_May_June_July_August_September_October_November_December".split("_"),null,"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),null,null,7),ru:new s("январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),"янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),"вс_пн_вт_ср_чт_пт_сб".split("_"),"вс_пн_вт_ср_чт_пт_сб".split("_"),1,{btnCancel:"Отменить",btnClear:"Очистить"}),es:new s("enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),null,"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),"dom._lun._mar._mié._jue._vie._sáb.".split("_"),null,1,{btnOk:"Aceptar",btnCancel:"Cancelar",btnClear:"Vaciar"}),tr:new s("Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),null,"Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),"Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),"Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),1),fa:new s("ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),"ی_د_س_چ_پ_ج_ش".split("_"),1),fr:new s("janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),"dim._lun._mar._mer._jeu._ven._sam.".split("_"),"di_lu_ma_me_je_ve_sa".split("_"),1,{btnCancel:"Abandonner",btnClear:"Effacer"}),de:new s("Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),1,{btnCancel:"Stornieren",btnClear:"Löschen"}),ja:new s("一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),"日曜_月曜_火曜_水曜_木曜_金曜_土曜".split("_"),"日_月_火_水_木_金_土".split("_"),7),pt:new s("janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),null,"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),"Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),1,{btnCancel:"Cancelar",btnClear:"Clarear"}),vi:new s("tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),"Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split("_"),"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),"CN_T2_T3_T4_T5_T6_T7".split("_"),"CN_T2_T3_T4_T5_T6_T7".split("_"),1),zh:new s("一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),"周日_周一_周二_周三_周四_周五_周六".split("_"),"日_一_二_三_四_五_六".split("_"),1)},Vu=[9,112,113,114,115,116,117,118,119,120,121,122,123],Hu="_duDatepicker",Nu=".duDatepicker-input",zu={value:null,format:"mm/dd/yyyy",outFormat:null,theme:"blue",auto:!1,inline:!1,clearBtn:!1,cancelBtn:!1,overlayClose:!0,minDate:null,maxDate:null,minYear:null,maxYear:null,priorYears:50,laterYears:25,disabledDates:[],disabledDays:[],range:!1,rangeDelim:"-",fromTarget:null,toTarget:null,multiple:!1,events:{dateChanged:null,onRangeFormat:null,ready:null,shown:null,hidden:null},i18n:c.en,firstDay:null,root:"body"},Bu=function(){function f(e,t){P(this,f);var n=this,r=t.i18n;if("string"==typeof r&&(t.i18n=Gu.i18n[r]),this.config=F.extend(f.default_configs||zu,t),this.config.multiple&&0<=this.config.format.indexOf(","))throw new Error("For multiple dates mode, comma (,) should not be used in the format configuration.");r=this.config.root,"string"==typeof r?this.config.root=document.querySelector(r):F.isElement(r)||delete this.config.root,this.animating=!1,this.visible=!1,this.input=e,this.input.readOnly=!0,this.fromEl=document.querySelector(this.config.fromTarget),this.toEl=document.querySelector(this.config.toTarget),this.input.hidden=this.config.range&&(this.fromEl||this.toEl),this.viewMode="calendar",this.dict=F.extend(Ru,this.config.i18n.dict),this.datepicker={container:F.createElem("div",{class:"dcalendarpicker"}),wrapper:F.createElem("div",{class:"dudp__wrapper",tabindex:0}),header:{wrapper:F.createElem("section",{class:"dudp__calendar-header"}),selectedYear:F.createElem("span",{class:"dudp__sel-year"}),selectedDate:F.createElem("span",{class:"dcp_sel-date"})},calendarHolder:{wrapper:F.createElem("section",{class:"dudp__cal-container"}),btnPrev:F.createElem("span",{class:"dudp__btn-cal-prev",role:"button"},"&lsaquo;",!0),btnNext:F.createElem("span",{class:"dudp__btn-cal-next",role:"button"},"&rsaquo;",!0),calendarViews:{wrapper:F.createElem("div",{class:"dudp__calendar-views"}),calendars:[]},yearsView:F.createElem("div",{class:"dudp__years-view dp__hidden"}),monthsView:F.createElem("div",{class:"dudp__months-view dp__hidden"}),buttons:{wrapper:F.createElem("div",{class:"dudp__buttons"}),btnClear:F.createElem("span",{class:"dudp__button clear",role:"button"},n.dict.btnClear),btnCancel:F.createElem("span",{class:"dudp__button cancel",role:"button"},n.dict.btnCancel),btnOk:F.createElem("span",{class:"dudp__button ok",role:"button"},n.dict.btnOk)}}},!n.config.value||n.config.range||n.config.multiple||(n.input.value=n.config.value,n.input.setAttribute("value",n.config.value)),this.minDate=n.input.dataset.mindate||n.config.minDate,this.maxDate=n.input.dataset.maxdate||n.config.maxDate,t=new Date;if(n.config.range){r=n.input.value||n.config.value||"",e=r?r.split(n.config.rangeDelim):[];if(""!==r&&e.length<2)throw new Error("Invalid date range value.");var a,o,i=""===r?null:F.parseDate.call(n,e[0]).date,e=""===r?null:F.parseDate.call(n,e[1]).date,c=n._canSetValue("range",{from:i,to:e});if(!c.canSet)throw new Error(c.remarks);this.dateFrom=i,this.dateTo=e,this.rangeFrom=null,this.rangeTo=null,this.viewMonth=(i||t).getMonth(),this.viewYear=(i||t).getFullYear(),r&&(c=n.config.events&&n.config.events.onRangeFormat?n.formatRange(i,e):r,r=F.formatDate.call(n,i,n.config.format),s=F.formatDate.call(n,i,n.config.outFormat||n.config.format),a=F.formatDate.call(n,e,n.config.format),o=F.formatDate.call(n,e,n.config.outFormat||n.config.format),n.input.value=c,n.rangeFrom=F.dateToJson(i),n.rangeTo=F.dateToJson(e),F.setAttributes(n.input,{value:c,"data-range-from":s,"data-range-to":o}),n.fromEl&&(n.fromEl.value=r,F.setAttributes(n.fromEl,{value:r,"data-value":s})),n.toEl&&(n.toEl.value=a,F.setAttributes(n.toEl,{value:r,"data-value":o})))}else if(n.config.multiple){var l=[],i=(n.input.value?n.input.value.split(",").forEach(function(e){l.push(F.parseDate.call(n,e).date)}):n.config.value&&(Array.isArray(n.config.value)?n.config.value:n.config.value.split(",")).forEach(function(e){l.push(F.parseDate.call(n,e).date)}),l=l.sort(function(e,t){return t<e?1:e<t?-1:0}),n._canSetValue("multiple",l));if(!i.canSet)throw new Error(i.remarks);e=0<l.length?l.reduce(function(e,t){return e<t?e:t}):new Date;this.dates=H(l),this.selectedDates=H(l),this.viewYear=e.getFullYear(),this.viewMonth=e.getMonth(),F.setAttributes(n.input,{value:l.map(function(e){return F.formatDate.call(n,e,n.config.outFormat||n.config.format)}).join(",")})}else{var c=""===n.input.value?t:F.parseDate.call(n,n.input.value).date,s=n._canSetValue("default",c);if(!s.canSet)throw new Error(s.remarks);this.date=c,this.selected=F.dateToJson(n.date),this.viewMonth=n.selected.month,this.viewYear=n.selected.year}function u(){n.showInFromEl=n.config.inline&&n.fromEl&&this===n.fromEl,n.showInToEl=n.config.inline&&n.toEl&&this===n.toEl,n.show()}function d(e){return 13===e.keyCode&&(n.showInFromEl=n.config.inline&&n.fromEl&&this===n.fromEl,n.showInToEl=n.config.inline&&n.toEl&&this===n.toEl,n.show()),!(Vu.indexOf(e.which)<0)}this._unbindInput=function(){n.input.readOnly=!1,n.input.removeEventListener("click",u),n.input.removeEventListener("keydown",d),n.fromEl&&(n.fromEl.readOnly=!1,n.fromEl.removeEventListener("click",u),n.fromEl.removeEventListener("keydown",d)),n.toEl&&(n.toEl.readOnly=!1,n.toEl.removeEventListener("click",u),n.toEl.removeEventListener("keydown",d))},F.addEvent(n.input,"click",u),F.addEvent(n.input,"keydown",d),n.fromEl&&(n.fromEl.readOnly=!0,F.addEvent(n.fromEl,"click",u),F.addEvent(n.fromEl,"keydown",d)),n.toEl&&(n.toEl.readOnly=!0,F.addEvent(n.toEl,"click",u),F.addEvent(n.toEl,"keydown",d)),this._init(),this._setSelection()}return V(f,[{key:"_init",value:function(){var n=this,e=n.datepicker,t=e.header,r=e.calendarHolder,a=r.buttons;n.config.inline||(F.appendTo([t.selectedYear,t.selectedDate],t.wrapper),F.appendTo(t.wrapper,e.wrapper),F.addEvent(t.selectedYear,"click",function(){"years"!==n.viewMode&&n._switchView("years")}),F.addEvent(t.selectedDate,"click",function(){var e=new Date,t=n.config.range?e.getMonth():n.selected.month,e=n.config.range?e.getFullYear():n.selected.year;n.viewMonth===t&&n.viewYear===e&&"calendar"===n.viewMode||(n.viewMonth=t,n.viewYear=e,n._setupCalendar(),n._switchView("calendar"))})),n._setupMonths(),F.appendTo(n._getYears(),r.yearsView),n.config.clearBtn&&F.appendTo(a.btnClear,a.wrapper),n.config.cancelBtn&&F.appendTo(a.btnCancel,a.wrapper),n.config.auto&&!n.config.range&&!n.config.multiple||F.appendTo(a.btnOk,a.wrapper),F.appendTo([r.btnPrev,r.btnNext,r.calendarViews.wrapper,r.monthsView,r.yearsView,a.wrapper],r.wrapper),F.appendTo(r.wrapper,e.wrapper),F.appendTo(e.wrapper,e.container),F.appendTo(e.container,n.config.root),n.config.inline&&e.container.setAttribute("inline",!0),e.wrapper.dataset.theme=n.input.dataset.theme||n.config.theme,F.addEvent(e.wrapper,"keydown",function(e){27===e.keyCode?n.hide():37===e.keyCode?n._move("prev"):39===e.keyCode&&n._move("next")}),n.config.inline&&F.addEvent(e.wrapper,"blur",function(){n.hide()}),F.addEvent(r.btnPrev,"click",function(){n._move("prev")}),F.addEvent(r.btnNext,"click",function(){n._move("next")}),F.addEvent(r.calendarViews.wrapper,"click",function(e){e.target.classList.contains("cal-year")?n._switchView("years"):e.target.classList.contains("cal-month")&&n._switchView("months")}),n.config.clearBtn&&F.addEvent(a.btnClear,"click",function(){n.setValue(""),n.hide()}),n.config.overlayClose&&(F.addEvent(e.container,"click",function(){n.hide()}),F.addEvent(e.wrapper,"click",function(e){e.stopPropagation()})),n.config.cancelBtn&&F.addEvent(a.btnCancel,"click",function(){n.hide()}),F.addEvent(a.btnOk,"click",function(){if(n.config.range){if(!n.rangeFrom||!n.rangeTo)return;var e=F.jsonToDate(n.rangeFrom),t=F.jsonToDate(n.rangeTo);if(n._rangeHasDisabled())return;n.dateFrom=e,n.dateTo=t,n.setValue([F.formatDate.call(n,e,n.config.format),F.formatDate.call(n,t,n.config.format)].join(n.config.rangeDelim))}else if(n.config.multiple)n.dates=H(n.selectedDates),n.setValue(n.dates.map(function(e){return F.formatDate.call(n,e,n.config.format)}));else{e=F.jsonToDate(n.selected);if(n._dateDisabled(e))return;n.date=e,n.setValue(n.date)}n.hide()}),n.config.events&&n.config.events.ready&&n.config.events.ready.call(n,n)}},{key:"_getToday",value:function(){var e=new Date;return new Date(e.getFullYear(),e.getMonth(),e.getDate())}},{key:"_inRange",value:function(e){if(!this.config.range)return!1;var t=this.rangeFrom?F.jsonToDate(this.rangeFrom):null,n=this.rangeTo?F.jsonToDate(this.rangeTo):null;return t&&t<e&&n&&e<n}},{key:"_beyondMinMax",value:function(e){var t=this,n=t.config,r=null,a=null,o=e.getFullYear(),i=t._getToday(),c=n.minYear&&o<n.minYear,o=n.maxYear&&o>n.maxYear;return t.minDate&&(r="today"===t.minDate?i:new Date(t.minDate)),t.maxDate&&(a="today"===t.maxDate?i:new Date(t.maxDate)),r&&e<r||a&&a<e||c||o}},{key:"_dateDisabled",value:function(t){var n=this,e=n.config.disabledDates,r=n.config.disabledDays,e=0<e.filter(function(e){return 0<=e.indexOf("-")?t>=F.parseDate.call(n,e.split("-")[0]).date&&t<=F.parseDate.call(n,e.split("-")[1]).date:F.parseDate.call(n,e).date.getTime()===t.getTime()}).length,a=t.getDay(),o=n.config.i18n.days[a],i=n.config.i18n.shortDays[a],a=n.config.i18n.shorterDays[a],o=0<=r.indexOf(o)||0<=r.indexOf(i)||0<=r.indexOf(a);return e||o||n._beyondMinMax(t)}},{key:"_rangeHasDisabled",value:function(){var e=this,t=e.rangeFrom?F.jsonToDate(e.rangeFrom):null,n=e.rangeTo?F.jsonToDate(e.rangeTo):null;if(null==t||null==n)return!1;for(var r=F.jsonToDate(e.rangeFrom);r<=n;){if(e._dateDisabled(r))return!0;r.setDate(r.getDate()+1)}return!1}},{key:"_getDates",value:function(a,o){for(var s=this,n=1,r=s._getToday(),i=s.config.range||s.config.multiple?null:F.jsonToDate(s.selected),c=s.rangeFrom?F.jsonToDate(s.rangeFrom):null,l=s.rangeTo?F.jsonToDate(s.rangeTo):null,u=new Date(a,o,n),e=F.getDaysCount(u),d=1,t=[],f=s.config.firstDay||s.config.i18n.firstDay,p=(f+6)%7,h=function(e,t){s._dateDisabled(t)&&e.classList.add("disabled"),s._inRange(t)&&e.classList.add("in-range"),t.getTime()===r.getTime()&&e.classList.add("current"),(!s.config.range&&!s.config.multiple&&t.getTime()===i.getTime()||s.config.multiple&&s.dates.find(function(e){return e.getTime()===t.getTime()}))&&e.classList.add("selected"),s.config.range&&c&&t.getTime()===c.getTime()&&e.classList.add("range-from"),s.config.range&&l&&t.getTime()===l.getTime()&&e.classList.add("range-to")},g=1;g<=6;g++){for(var m=[],_=0,v=f;_<7;_++,v++)m.push(F.createElem("span",{class:"dudp__date","data-dow":v%7}));for(;n<=e;)if("break"===function(){u.setDate(n);var t=u.getDay(),e=m.find(function(e){return parseInt(e.dataset.dow)===t});return e.dataset.date=n,e.dataset.month=o,e.dataset.year=a,1===g&&t===f%7?"break":t===p?(h(e,u),e.innerText=n++,"break"):(h(e,u),void(e.innerText=n++))}())break;(1===g||4<g)&&(1===g?function(){for(var t=new Date(a,o-1,1),e=F.getDaysCount(t),n=1;n<=7;n++){t.setDate(e);var r=m.find(function(e){return parseInt(e.dataset.dow)===t.getDay()});""===r.innerText&&(e--,r.dataset.date=t.getDate(),r.dataset.month=t.getMonth(),r.dataset.year=t.getFullYear(),r.innerText=t.getDate(),r.classList.add("dudp__pm"),h(r,t))}}():4<g&&function(){for(var t=new Date(a,o+1,1),e=1;e<=7;e++){t.setDate(d);var n=m.find(function(e){return parseInt(e.dataset.dow)===t.getDay()});""===n.innerText&&(d++,n.dataset.date=t.getDate(),n.dataset.month=t.getMonth(),n.dataset.year=t.getFullYear(),n.innerText=t.getDate(),n.classList.add("dudp__nm"),h(n,t))}}()),t.push(m)}var y=[];return t.forEach(function(e){for(var t=F.createElem("div",{class:"dudp__cal-week"}),n=0;n<e.length;n++){var r=e[n];F.addEvent(r,"click",function(){var e,t,n,o=this.dataset.year,i=this.dataset.month,c=this.dataset.date,r=new Date(o,i,c),l=!1;s._dateDisabled(r)||(s.config.range?(e=s.rangeFrom?F.jsonToDate(s.rangeFrom):null,t=s.rangeTo?F.jsonToDate(s.rangeTo):null,!s.rangeFrom||s.rangeFrom&&r<e||s.rangeFrom&&s.rangeTo&&F.dateDiff(e,r)<=F.dateDiff(r,t)&&0!==F.dateDiff(e,r)||s.rangeFrom&&s.rangeTo&&t.getTime()===r.getTime()?(s.rangeFrom={year:o,month:i,date:c},l=!0):(!s.rangeTo||s.rangeTo&&t<r||s.rangeFrom&&s.rangeTo&&F.dateDiff(r,t)<F.dateDiff(e,r)&&0!==F.dateDiff(r,t)||s.rangeFrom&&s.rangeTo&&e.getTime()===r.getTime())&&(s.rangeTo={year:o,month:i,date:c},l=!1),s.datepicker.calendarHolder.calendarViews.wrapper.querySelectorAll(".dudp__date").forEach(function(e){var t=e.dataset.year,n=e.dataset.month,r=e.dataset.date,a=s._inRange(new Date(t,n,r));e.classList[o===t&&i===n&&c===r?"add":"remove"](l?"range-from":"range-to"),e.classList[a?"add":"remove"]("in-range")})):s.config.multiple?(n=this.classList.contains("selected"),s.datepicker.calendarHolder.calendarViews.wrapper.querySelectorAll('.dudp__date[data-date="'+c+'"][data-month="'+i+'"][data-year="'+o+'"]').forEach(function(e){e.classList[n?"remove":"add"]("selected")}),n?s.selectedDates=s.selectedDates.filter(function(e){return e.getTime()!==r.getTime()}):s.selectedDates.push(r),s._setSelection()):(s.datepicker.calendarHolder.calendarViews.wrapper.querySelectorAll(".dudp__date").forEach(function(e){var t=e.dataset.year,n=e.dataset.month,r=e.dataset.date;e.classList[o===t&&i===n&&c===r?"add":"remove"]("selected")}),s.selected={year:o,month:i,date:c},s._setSelection(),s.config.auto&&(s.date=r,s.setValue(s.date),s.hide())),s.datepicker.calendarHolder.wrapper.querySelectorAll(".dudp__month").forEach(function(e){var t=e.dataset.month;e.classList[t===i?"add":"remove"]("selected")}))}),F.appendTo(r,t)}y.push(t)}),y}},{key:"_getYearLimits",value:function(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0],t=this,n=null,r=null,a=t._getToday(),a=(t.minDate&&(n="today"===t.minDate?a:new Date(t.minDate)),t.maxDate&&(r="today"===t.maxDate?a:new Date(t.maxDate)),[e?t.viewYear-t.config.priorYears:null,t.config.minYear,n?n.getFullYear():null].filter(function(e){return null!=e})),n=[e?t.viewYear+t.config.laterYears:null,t.config.maxYear,r?r.getFullYear():null].filter(function(e){return null!=e});return{minYear:0<a.length?Math.max.apply(Math,H(a)):null,maxYear:0<n.length?Math.min.apply(Math,H(n)):null}}},{key:"_getYears",value:function(){for(var t=this,e=t._getYearLimits(!0),n=e.minYear,r=e.maxYear,a=[],o=n;o<=r;o++){var i=F.createElem("span",{class:"dudp__year"});o===t.viewYear&&i.classList.add("selected"),i.innerText=o,i.dataset.year=o,F.addEvent(i,"click",function(){var e=parseInt(this.dataset.year);t.viewYear=e,t.config.range||t.config.multiple||(t.selected.year=e),t._setSelection(),t._setupCalendar(),t._switchView("calendar")}),a.push(i)}return a}},{key:"_setupMonths",value:function(){var n=this,e=n.datepicker.calendarHolder,t=0,r=n.selected||new Date;F.empty(e.monthsView);for(var a=1;a<4;a++){for(var o=F.createElem("div",{class:"dudp__month-row"}),i=0;i<4;i++){var c=F.createElem("span",{class:"dudp__month"});t===r.month&&c.classList.add("selected"),c.innerText=n.config.i18n.shortMonths[t],c.dataset.month=t,F.appendTo(c,o),F.addEvent(c,"click",function(e){var t=parseInt(this.dataset.month);n.viewMonth=t,n._setupCalendar(),n._switchView("calendar")}),t++}F.appendTo(o,e.monthsView)}}},{key:"_setupCalendar",value:function(){var e=this,t=e.datepicker.calendarHolder.calendarViews,n=+e.viewYear,r=+e.viewMonth,a=(t.calendars.length=0,{wrapper:F.createElem("div",{class:"dudp__calendar"}),header:F.createElem("div",{class:"dudp__cal-month-year"}),weekDays:F.createElem("div",{class:"dudp__weekdays"},F.daysOfWeekDOM.call(e),!0),datesHolder:F.createElem("div",{class:"dudp__dates-holder"})}),o={wrapper:F.createElem("div",{class:"dudp__calendar"}),header:F.createElem("div",{class:"dudp__cal-month-year"}),weekDays:F.createElem("div",{class:"dudp__weekdays"},F.daysOfWeekDOM.call(e),!0),datesHolder:F.createElem("div",{class:"dudp__dates-holder"})},i={wrapper:F.createElem("div",{class:"dudp__calendar"}),header:F.createElem("div",{class:"dudp__cal-month-year"}),weekDays:F.createElem("div",{class:"dudp__weekdays"},F.daysOfWeekDOM.call(e),!0),datesHolder:F.createElem("div",{class:"dudp__dates-holder"})},c=0==r?11:r-1,l=11==r?0:1+r,s=0==r?n-1:n,u=11==r?1+n:n;F.appendTo([F.createElem("span",{class:"cal-month"},e.config.i18n.months[c]),F.createElem("span",{class:"cal-year"},s)],o.header),F.appendTo(e._getDates(s,c),o.datesHolder),F.appendTo([o.header,o.weekDays,o.datesHolder],o.wrapper),t.calendars.push(o),F.appendTo([F.createElem("span",{class:"cal-month"},e.config.i18n.months[r]),F.createElem("span",{class:"cal-year"},n)],a.header),F.appendTo(e._getDates(n,r),a.datesHolder),F.appendTo([a.header,a.weekDays,a.datesHolder],a.wrapper),t.calendars.push(a),F.appendTo([F.createElem("span",{class:"cal-month"},e.config.i18n.months[l]),F.createElem("span",{class:"cal-year"},u)],i.header),F.appendTo(e._getDates(u,l),i.datesHolder),F.appendTo([i.header,i.weekDays,i.datesHolder],i.wrapper),t.calendars.push(i),F.empty(t.wrapper),F.appendTo([o.wrapper,a.wrapper,i.wrapper],t.wrapper)}},{key:"_switchView",value:function(e){if("calendar"===e||"months"===e||"years"===e){var t=this,n=t.datepicker,r=n.calendarHolder.monthsView,a=n.calendarHolder.yearsView,o=n.calendarHolder.calendarViews.wrapper,i=n.calendarHolder.buttons.wrapper,c=t.viewMode,l="dp__hidden";switch(t.viewMode=e,t.viewMode){case"calendar":var s=o.querySelector(".dudp__calendar:nth-child(2)");o.classList.add("dp__animate-out"),o.classList.remove(l),"calendar"!==c&&s.classList.add("dp__zooming","dp__animate-zoom"),n.calendarHolder.btnPrev.classList.remove(l),n.calendarHolder.btnNext.classList.remove(l),i.classList.remove(l),setTimeout(function(){o.classList.remove("dp__animate-out"),"calendar"!==c&&s.classList.remove("dp__animate-zoom")},10),r.classList.add("dp__animate-out"),a.classList.add(l),setTimeout(function(){"calendar"!==c&&s.classList.remove("dp__zooming"),r.classList.add(l),r.classList.remove("dp__animate-out")},250);break;case"months":n.calendarHolder.btnPrev.classList.add(l),n.calendarHolder.btnNext.classList.add(l),i.classList.add(l),o.classList.add("dp__animate-out"),r.classList.add("dp__animate-out"),r.classList.remove(l),setTimeout(function(){r.classList.remove("dp__animate-out")},10),setTimeout(function(){o.classList.add(l),o.classList.remove("dp__animate-out")},250);break;case"years":F.empty(a),F.appendTo(t._getYears(),a);var u=a.querySelector(".dudp__year.selected");a.scrollTop=u.offsetTop-120,n.calendarHolder.btnPrev.classList.add(l),n.calendarHolder.btnNext.classList.add(l),i.classList.add(l),r.classList.add("dp__animate-out"),o.classList.add("dp__animate-out"),a.classList.remove(l),setTimeout(function(){o.classList.add(l),o.classList.remove("dp__animate-out"),r.classList.add(l),r.classList.remove("dp__animate-out")},250)}}}},{key:"_move",value:function(e){var t,n,r,a,o,i,c,l;"next"!==e&&"prev"!==e||((t=this).animating||(n=t.datepicker.calendarHolder.calendarViews,r="next"===e,e=parseInt(t.viewYear),a=parseInt(t.viewMonth),(r?11<a+1:a-1<0)&&(e+=r?1:-1),a=r?11<a+1?0:a+1:a-1<0?11:a-1,c=(i=t._getYearLimits()).minYear,i=i.maxYear,r&&i&&i<e||!r&&c&&e<c||(t.viewYear=e,t.viewMonth=a,t.animating=!0,o="dp__animate-"+(r?"left":"right"),n.wrapper.querySelectorAll(".dudp__calendar").forEach(function(e){e.classList.add(o)}),i=t.viewYear,c=r?t.viewMonth+1:t.viewMonth-1,(r?11<c:c<0)&&(c=r?0:11,i+=r?1:-1),e=t._getDates(i,c),l={wrapper:F.createElem("div",{class:"dudp__calendar"}),header:F.createElem("div",{class:"dudp__cal-month-year"}),weekDays:F.createElem("div",{class:"dudp__weekdays"},F.daysOfWeekDOM.call(t),!0),datesHolder:F.createElem("div",{class:"dudp__dates-holder"})},F.appendTo([F.createElem("span",{class:"cal-month"},t.config.i18n.months[c]),F.createElem("span",{class:"cal-year"},i)],l.header),F.appendTo(e,l.datesHolder),F.appendTo([l.header,l.weekDays,l.datesHolder],l.wrapper),setTimeout(function(){F.appendTo(l.wrapper,n.wrapper,r?void 0:0),n.wrapper.querySelectorAll(".dudp__calendar").forEach(function(e){e.classList.remove(o)}),n.wrapper.removeChild(n.calendars[r?0:2].wrapper),n.calendars[r?"shift":"pop"](),n.calendars[r?"push":"unshift"](l),t.animating=!1},250))))}},{key:"_resetSelection",value:function(){var e,r=this;r.config.range?(e=r.dateFrom||new Date,r.rangeFrom=F.dateToJson(r.dateFrom),r.rangeTo=F.dateToJson(r.dateTo),r.viewYear=e.getFullYear(),r.viewMonth=e.getMonth()):r.config.multiple?(e=0<r.dates.length?r.dates.reduce(function(e,t){return e<t?e:t}):new Date,r.selectedDates=H(r.dates),r.viewYear=e.getFullYear(),r.viewMonth=e.getMonth()):(r.selected=F.dateToJson(r.date),r.viewYear=r.selected.year,r.viewMonth=r.selected.month),r.datepicker.calendarHolder.monthsView.querySelectorAll(".dudp__month").forEach(function(e){var t=parseInt(e.dataset.month),n=r.config.range?r.dateFrom?r.dateFrom.getMonth():null:r.config.multiple?0<r.dates.length?r.dates.reduce(function(e,t){return e<t?e:t}):null:r.selected.month;e.classList[t===n?"add":"remove"]("selected")})}},{key:"_setSelection",value:function(){var e=this,t=e.datepicker,n=e.config.range?new Date:e.config.multiple?0<e.selectedDates.length?e.selectedDates.reduce(function(e,t){return e<t?e:t}):new Date:F.jsonToDate(e.selected);t.header.selectedYear.innerText=n.getFullYear(),t.header.selectedDate.innerText=F.formatDate.call(e,n,"D, mmm d")}},{key:"_canSetValue",value:function(e,t){if("range"!=e&&"multiple"!=e&&"default"!=e)return!1;var n=this,r=n.config,a=!0,o="";if("range"==e&&t.from&&t.to)n._beyondMinMax(t.from)?(a=!1,o=F.formatDate.call(n,t.from,r.format)):n._beyondMinMax(t.to)&&(a=!1,o=F.formatDate.call(n,t.to,r.format));else if("multiple"==e)for(var i=0;i<t.length;i++){var c=t[i];if(n._beyondMinMax(c)){a=!1,o=F.formatDate.call(n,c,r.format);break}}else"default"==e&&n._beyondMinMax(t)&&(a=!1,o=F.formatDate.call(n,t,r.format));return{canSet:a,remarks:'"'.concat(o,'" is beyond the selectable date(s). Kindly check minDate, maxDate, minYear or maxYear configurations.')}}},{key:"setValue",value:function(e){var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];if(void 0===e)throw new Error("Expecting a value.");var n=this,r="string"==typeof e&&""===e,a=null;if(n.config.range){var o=r?[]:e.split(n.config.rangeDelim);if(""!==e&&o.length<2)throw new Error("Invalid date range value.");var i=new Date,c=r?null:F.parseDate.call(n,o[0]).date,l=r?null:F.parseDate.call(n,o[1]).date,s=r?"":F.formatDate.call(n,c,n.config.format),u=r?"":F.formatDate.call(n,c,n.config.outFormat||n.config.format),d=r?"":F.formatDate.call(n,l,n.config.format),f=r?"":F.formatDate.call(n,l,n.config.outFormat||n.config.format),o=r?"":n.config.events&&n.config.events.onRangeFormat?n.formatRange(c,l):o[0]===o[1]?o[0]:e,p=n._canSetValue("range",{from:c,to:l});if(!p.canSet)throw new Error(p.remarks);n.dateFrom=c,n.dateTo=l,n.viewYear=(c||i).getFullYear(),n.viewMonth=(c||i).getMonth(),n.input.value=o,F.setAttributes(n.input,{value:o,"data-range-from":u,"data-range-to":f}),n.fromEl&&(n.fromEl.value=s,F.setAttributes(n.fromEl,{value:s,"data-value":u})),n.toEl&&(n.toEl.value=d,F.setAttributes(n.toEl,{value:d,"data-value":f})),a={_dateFrom:c,dateFrom:r?null:s,_dateTo:l,dateTo:r?null:d,value:o}}else if(n.config.multiple){var h=[],p=((Array.isArray(e)?e:e.split(",")).forEach(function(e){return h.push(F.parseDate.call(n,e).date)}),0<h.length?h.reduce(function(e,t){return e<t?e:t}):new Date),i=(0<h.length&&(h=h.sort(function(e,t){return t<e?1:e<t?-1:0})),n._canSetValue("multiple",h));if(!i.canSet)throw new Error(i.remarks);n.dates=H(h),n.viewYear=p.getFullYear(),n.viewMonth=p.getMonth(),F.setAttributes(n.input,{value:h.map(function(e){return F.formatDate.call(n,e,n.config.outFormat||n.config.format)}).join(",")}),a={_dates:r?[]:n.dates,dates:r?[]:n.dates.map(function(e){return F.formatDate.call(n,e,n.config.outFormat||n.config.format)})}}else{u="string"==typeof e?r?new Date:F.parseDate.call(n,e,n.config.format).date:e,f=r?"":F.formatDate.call(n,u,n.config.format),c=n._canSetValue("default",u);if(!c.canSet)throw new Error(c.remarks);n.date=u,n.viewYear=u.getFullYear(),n.viewMonth=u.getMonth(),n.input.value=f,n.input.setAttribute("value",f),a={_date:r?null:n.date,date:r?null:F.formatDate.call(n,n.date,n.config.outFormat||n.config.format)}}t&&(F.triggerChange(n.input,a),n.config.events&&n.config.events.dateChanged&&n.config.events.dateChanged.call(n,a,n))}},{key:"formatDate",value:function(e,t){return F.formatDate.call(this,e,t)}},{key:"formatRange",value:function(e,t){return this.config.events.onRangeFormat.call(this,e,t,this)}},{key:"setMinDate",value:function(e){this.config.minDate=e}},{key:"setMaxDate",value:function(e){this.config.maxDate=e}},{key:"setMinYear",value:function(e){this.config.minYear=e}},{key:"setMaxYear",value:function(e){this.config.maxYear=e}},{key:"setPriorYears",value:function(e){this.config.priorYears=e}},{key:"setLaterYears",value:function(e){this.config.laterYears=e}},{key:"setTheme",value:function(e){this.config.theme=e}},{key:"setDisabled",value:function(e){this.config.disabledDates=e}},{key:"setDisabledDays",value:function(e){this.config.disabledDays=e}},{key:"setI18n",value:function(e){var t=this,e=("string"==typeof e?t.config.i18n=Gu.i18n[e]:"object"==Y(e)&&(t.config.i18n=e),t.config.i18n),n=t.datepicker,r=(e.dict&&(t.dict=F.extend(t.dict,e.dict),n.calendarHolder.buttons.btnClear.innerText=t.dict.btnClear,n.calendarHolder.buttons.btnOk.innerText=t.dict.btnOk,n.calendarHolder.buttons.btnCancel.innerText=t.dict.btnCancel),t.config.format);t.config.range&&t.rangeFrom&&t.input.value?(e=F.jsonToDate(t.rangeFrom),n=F.jsonToDate(t.rangeTo),t.setValue([F.formatDate.call(t,e,r),F.formatDate.call(t,n,r)].join(t.config.rangeDelim),!1)):t.config.multiple&&0<t.selectedDates.length&&t.input.value?t.setValue(t.selectedDates.map(function(e){return F.formatDate.call(t,e,r)}),!1):t.selected&&t.input.value&&(e=t.selected,t.setValue(new Date(e.year,e.month,e.date),!1)),t._setupMonths(),t._setupCalendar()}},{key:"show",value:function(){var i=this;i.minDate=i.input.dataset.mindate||i.config.minDate,i.maxDate=i.input.dataset.maxdate||i.config.maxDate,i.datepicker.wrapper.dataset.theme=i.input.dataset.theme||i.config.theme,setTimeout(function(){var e,t,n,r,a,o;document.body.setAttribute("datepicker-display","on"),i._resetSelection(),i._setSelection(),i._setupCalendar(),i.datepicker.container.classList.add("dp__open"),i.config.inline&&(e=i.showInFromEl?i.fromEl:i.showInToEl?i.toEl:i.input,e=F.calcOffset(e),t=i.datepicker.wrapper.offsetHeight,n=i.datepicker.wrapper.offsetWidth,r=F.screenDim(),t=e.top+t<r.height,n=e.left+n<r.width,r={},a=window.scrollY,o=window.scrollX,r[t?"top":"bottom"]="".concat(t?e.top-a:e.bottom,"px"),r[n?"left":"right"]="".concat(n?e.left-o:e.right,"px"),i.datepicker.container.removeAttribute("style"),F.setStyles(i.datepicker.container,r)),i.datepicker.wrapper.focus(),i.visible=!0,i.input.blur(),i.config.events&&i.config.events.shown&&i.config.events.shown.call(i,i)},0)}},{key:"hide",value:function(){var e=this;e.datepicker.container.classList.add("dp__closing"),e.visible=!1,e.input.focus(),document.body.removeAttribute("datepicker-display"),setTimeout(function(){e._switchView("calendar"),F.removeClass(e.datepicker.container,["dp__closing","dp__open"]),e.config.events&&e.config.events.hidden&&e.config.events.hidden.call(e,e)},200)}},{key:"destroy",value:function(){this._unbindInput(),this.config.root.removeChild(this.datepicker.container),delete this.input[Hu]}}]),f}();function Gu(){var r=arguments,t=r[0],a=t instanceof NodeList||Array.isArray(t),o=F.isElement(t),e="string"==typeof t?document.querySelectorAll(t):a?t:o?[t]:document.querySelectorAll(Nu),i="object"!==Y(t)||a||o?r[1]&&"object"===Y(r[1])?r[1]:{}:t;Array.from(e).forEach(function(e){var n=e[Hu];n||(e[Hu]=n=new Bu(e,i)),("string"==typeof t||a||o)&&r[1]&&"string"==typeof r[1]&&"set"!=r[1]?(e=Array.prototype.slice.call(r).slice(2),n[r[1]].apply(n,e)):("string"==typeof t||a||o)&&"set"==r[1]&&r[2]&&"object"===Y(r[2])&&!Array.isArray(r[2])&&Object.keys(r[2]).forEach(function(e){var t=r[2][e];n[e].apply(n,[t])})})}return O=null,(a="default_configs")in(Io=Bu)?Object.defineProperty(Io,a,{value:O,enumerable:!0,configurable:!0,writable:!0}):Io[a]=O,Object.defineProperty(Gu,"i18n",{value:c}),Gu.defaults=function(e){Bu.default_configs=F.extend(zu,e)},Gu});
jQuery(document).ready(function($){
if($('#datalayerUserId').length > 0){
datalayerUserPush();
}
if($('.return_home').length > 0){
$(".return_home").detach().appendTo('body');
$('#moove_gdpr_save_popup_settings_button').addClass('button-cookies-ac');
if($('#dashboard-check').length > 0){
$(".return_home").remove();
}}
if($('.return_admin').length > 0){
$(".return_admin").detach().appendTo('body');
if($('.return_home').length==0){
$(".return_admin").css({ bottom: "20px" });
}}
if($('.custom-error-msg .woocommerce-error').length > 0){
if($('.lost_password_form').length > 0){
$('.custom-error-msg .woocommerce-error li').each(function(){
elm=$(this);
elm='<div class="error"><span class="acpl-warning"></span> '+elm.html()+'</div>';
$(elm).insertAfter('.lost_reset_password input[name="user_login"]');
$('.lost_reset_password input[name="user_login"]').parents('.form-row').addClass('error error1');
});
}else{
$('.custom-error-msg .woocommerce-error li div').each(function(){
elm=$(this);
id=elm.attr('data-id');
t=elm.attr('data-type');
elm='<div class="error"><span class="acpl-warning"></span> '+elm.html()+'</div>';
$('.woocommerce-form input[name="'+id+'"]').parents('.form-row').addClass('error error'+t);
$('.woocommerce-form input[name="'+id+'"]').parents('.form-row').append(elm);
});
}}
if($('.change_password_planasa').length >0){
$('body').addClass('reset-password');
}
$('.dac-interesar-ver-mas-link').click(function(){
$('.dac-interesar-ver-mas').toggle("slow", function(){
});
});
$(document).on('click', '.custom-backdrop, .modal-recommended .custom-modal-close', function(event){
$('.modal-recommended .title-video-item').html('');
$('.modal-recommended .body-modal-recommeded iframe').remove();
});
$(document).on('click', '.custom-modal-link.wrap-video-item', function(event){
action=$(this).attr('href');
t=$(this).attr('data-title');
v=$(this).attr('data-video');
$(action).find('.title-video-item').html(t);
$(action).find('.video-container').prepend('<iframe class="video" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src="https://www.youtube-nocookie.com/embed/'+v.split('.be/')[1]+'?autoplay=1&amp;autohide=1&amp;fs=1&amp;rel=0&amp;hd=1&amp;wmode=transparent&amp;enablejsapi=1&amp;html5=1" scrolling="no"></iframe>');
});
$(document).on('keyup', '.dac-search', function(event){
capl_filter($(this).val());
});
function capl_filter(text=''){
if($('.dac-interesar-carousel .dac_carousel.owl-loaded').length > 0&&$('.dac-interesar-carousel .owl-item:not(.cloned)').length==0){
return false;
}
bc=false;
html='';
b=$('#dac-interesar-back').val();
if(b==''){
bc=true;
}else{
$('.dac-interesar-carousel .owl-carousel').trigger('replace.owl.carousel', b).trigger('refresh.owl.carousel');
}
$('.dac-interesar-carousel .owl-item:not(.cloned)').each(function(){
if(bc){
b +=$(this).html();
}
if(normaliza($(this)[0].innerText).search(normaliza(text))==-1){
$(this).hide();
}else{
html +=$(this).html();
}});
if(bc){
$('#dac-interesar-back').val(b);
}
if((html==''&&$('.dac-interesar-carousel .owl-item:not(.cloned)').length > 0)||$('.dac-interesar-carousel .dac_carousel:not(.owl-loaded)').length > 0&&$('.dac-interesar-carousel .dac_carousel:not(.owl-loaded) .dac-carousel-item').length==0){
$('.dac-interesar-carousel .owl-carousel').hide();
$('.dac-interesar-no-results').show();
}else{
$('.dac-interesar-no-results').hide();
$('.dac-interesar-carousel .owl-carousel').show();
$('.dac-interesar-carousel .owl-carousel').trigger('replace.owl.carousel', html).trigger('refresh.owl.carousel');
}}
capl_filter('');
function normaliza(a){
return a=replaceCadena(
a=a.toLowerCase(), ["\xe1", "\xe0", "\xe4", "\xe2", "\xaa", "\xc1", "\xc0", "\xc2", "\xc4"], "a"),
a=replaceCadena(a, ["\xe9", "\xe8", "\xeb", "\xea", "\xc9", "\xc8", "\xca", "\xcb"], "e"),
a=replaceCadena(a, ["\xed", "\xec", "\xef", "\xee", "\xcd", "\xcc", "\xcf", "\xce"], "i"),
a=replaceCadena(a, ["\xf3", "\xf2", "\xf6", "\xf4", "\xd3", "\xd2", "\xd6", "\xd4"], "o"),
a=replaceCadena(a, ["\xfa", "\xf9", "\xfc", "\xfb", "\xda", "\xd9", "\xdb", "\xdc"], "u"),
a=replaceCadena(a, ["\xf1", "\xd1"], "n"), a=replaceCadena(a, ["\xe7", "\xc7"], "c"),
a
}
function replaceCadena(a, b, c){
for (let d of b) a=a.split(d).join(c);
return a
}
$("#selectAll").click(function(){
if(!$(this).prop('checked')){
$("input[type=checkbox].checkbox-notification").prop('checked', false);
}else{
$("input[type=checkbox].checkbox-notification:visible").prop('checked', true);
}});
$('input[type=checkbox].checkbox-notification').change(function(){
var numberOfChecked=$('.notification-message input[type=checkbox].checkbox-notification:checked').length;
var numberOfChecked=$('.notification-message input[type=checkbox].checkbox-notification:checked').length;
var totalCheckboxes=$('.notification-message input[type=checkbox].checkbox-notification').length;
var numberNotChecked=totalCheckboxes - numberOfChecked;
if(numberOfChecked==1){
$('#delete-notification').show();
$('span.label-delete-all').hide();
$('span.label-delete').show();
}else if(numberOfChecked>1){
$('#delete-notification').show();
$('span.label-delete-all').show();
$('span.label-delete').hide();
}else{
$('#delete-notification').hide();
$('span.label-delete-all').hide();
$('span.label-delete').hide();
$("#selectAll").prop("checked", false);
$('span.label-select-all').show();
$('span.label-deselect-all').hide();
}
if(numberOfChecked==totalCheckboxes){
$("#selectAll").prop("checked", true);
$('span.label-select-all').hide();
$('span.label-deselect-all').show();
}
if($(this).is(":checked")){
$(this).parents('.notification-message').addClass("messsage-green");
}else{
$(this).parents('.notification-message').removeClass("messsage-green");
}});
$('#selectAll').change(function(){
if($(this).is(":checked")){
$('span.label-deselect-all').show();
$('span.label-select-all').hide();
$('input[type=checkbox].checkbox-notification').parents('.notification-message').addClass("messsage-green");
$('#delete-notification').show();
$('span.label-delete-all').show();
$('span.label-delete').hide();
}else{
$('input[type=checkbox].checkbox-notification').parents('.notification-message').removeClass("messsage-green");
$('span.label-select-all').show();
$('span.label-deselect-all').hide();
$('#delete-notification').hide();
$('span.label-delete-all').hide();
$('span.label-delete').hide();
}});
$(".dac-toogleCollapsible-history").click(function (){
$(this).parent().parent().parent().parent().find('.dac-collapsible-history').toggleClass('show-row-dac');
$(this).toggleClass('active-row');
return false;
});
$.fn.pageMe=function(opts){
var $this=this,
defaults={
perPage: 7,
showPrevNext: false,
hidePageNumbers: false,
children:'tr'
},
settings=$.extend(defaults, opts);
var children=$this.find(settings.children);
var perPage=settings.perPage;
var pager=$('.pager');
if(typeof settings.childSelector!="undefined"){
children=listElement.find(settings.childSelector);
}
if(typeof settings.pagerSelector!="undefined"){
pager=$(settings.pagerSelector);
}
var numItems=children.size();
var numPages=Math.ceil(numItems/perPage);
pager.data("curr",0);
pager.data("numItems",numItems);
if(settings.showPrevNext){
$('<a href="javascript:void(0);" class="dac-pagination-link pag-left prev_link"><span class="acpl-pagination-left"></span></a>').appendTo(pager);
}
var curr=0;
while(numPages > curr&&(settings.hidePageNumbers==false)){
curr++;
}
if(settings.showPrevNext){
$('<a href="javascript:void(0);" class="dac-pagination-link pag-right next_link"><span class="acpl-pagination-right"></span></a>').appendTo(pager);
}
pager.find('.page_link:first').addClass('active');
pager.children().eq(1).addClass("active");
goTo(0,perPage);
pager.find('.page_link').click(function(){
var clickedPage=$(this).html().valueOf()-1;
goTo(clickedPage,perPage);
});
pager.find('.prev_link').click(function(){
previous();
});
pager.find('.next_link').click(function(){
next();
});
function previous(){
var goToPage=parseInt(pager.data("curr")) - 1;
if(goToPage>-1){goTo(goToPage);}}
function next(){
goToPage=parseInt(pager.data("curr")) + 1;
if(goToPage<numPages){ goTo(goToPage);}}
function goTo(page){
var startAt=page * perPage,
endOn=startAt + perPage;
pager.find('.counter-p > span:first').html(startAt+1+"-"+(endOn>numItems?numItems:endOn));
pager.find('.counter-p > span:last-of-type').html(numItems);
children.css('display','none').slice(startAt, endOn).show();
if(page>=1){
pager.find('.prev_link').removeClass('first-last-page');
pager.find('.prev_link').removeAttr('disabled');
}else{
pager.find('.prev_link').attr('disabled', true);
pager.find('.prev_link').addClass('first-last-page');
}
if(page<(numPages-1)){
pager.find('.next_link').removeClass('first-last-page');
pager.find('.next_link').removeAttr('disabled');
}else{
pager.find('.next_link').attr('disabled', true);
pager.find('.next_link').addClass('first-last-page');
}
pager.data("curr",page);
pager.children().removeClass("active");
pager.children().eq(page+1).addClass("active");
}};
if($('#capl-notification-page').length>0){
$(document).on('click', '.page_link', function(event){
$("input[type=checkbox].checkbox-notification").prop('checked', false).trigger('change');
});
$(document).on('click', '.prev_link', function(event){
$("input[type=checkbox].checkbox-notification").prop('checked', false).trigger('change');
});
$(document).on('click', '.next_link', function(event){
$("input[type=checkbox].checkbox-notification").prop('checked', false).trigger('change');
});
$(document).on('click', 'a', function(event){
$("input[type=checkbox].checkbox-notification").prop('checked', false).trigger('change');
});
$('a.notification-group').on('click', function(){
var noti=$(this).parent().parent();
if(!noti.parent().hasClass("message-read")){
noti.addClass("message-read");
var notifications=[];
notifications.push($(this).find('input[name="notifications[]"]').val());
message_read(notifications);
}});
if($('.checkbox-notification').length==1){
$('.label-notif').hide();
$('#dac-notifications-left').hide();
$('#dac-form-notification').hide();
$('#dac-form-notification').addClass('not-notifications');
}
function message_read(notifications=[]){
if(notifications.length==0){
$('div.notification-group:visible').each(function(e, data){
let noti=$(this).parent().parent();
if(!noti.hasClass("message-read")&&!noti.hasClass("message-read-temp")){
notifications.push($(this).find('input[name="notifications[]"]').val());
noti.addClass("message-read-temp");
}});
}
if(notifications.length>0){
$.ajax({
type:"POST",
data:{action:"message_read", notifications},
success:function(datos){
if(typeof datos.status!=='undefined'){
if(datos.value==0){$('.notification-wrap').hide();}else{ $('.notification-wrap span').html(datos.value)}}
},
dataType: 'json'
})
}}
var lastScrollTop=0;
$(window).on('scroll', function(){
st=$(this).scrollTop();
if(st > lastScrollTop){
message_read();
}
lastScrollTop=st;
});
$('#capl-notification-page').pageMe({pagerSelector:'#myPager',showPrevNext:true,hidePageNumbers:false,perPage:5, children:'.notification-message'});
}
if($('.circle-progress').length > 0){
var porcentageCompleted=$('#number-circle').attr("data-progressCircle");
var valueCircleProgress=342 - (342 * (porcentageCompleted/100));
console.log(porcentageCompleted);
document.documentElement.style.setProperty('--circle-progress', valueCircleProgress);
}
if($('.account-wrap').length > 0){
$('.account-tabs-nav a').on('click', function(event){
event.preventDefault();
$('.account-tabs-nav > li').removeClass('tab-active');
$(this).parent().addClass('tab-active');
$('.account-content > div').hide();
$($(this).attr('href')).show();
});
if(window.location.hash!=""){
var hash=window.location.hash;
console.log(hash);
$(".account-tabs-nav").find('li a[href="'+hash+'"]').click();
}else{
$('.account-content > div').hide();
$('.account-content > div:first').show();
$('.account-tabs-nav > li:first').addClass('tab-active');
}
$('#password_1').on('keyup', function(e){
$('#password_2').val($(this).val());
console.log($(this).val());
});
}
$('.select2').each(function (){
console.log($(this).attr("placeholder"));
$(this).select2({
language: "es",
placeholder: $(this).attr("placeholder"),
minimumResultsForSearch: -1,
width: '100%',
dropdownParent: $(this).parent(),
createTag: function (){
return null;
}});
});
if($('#table-orders-history').length > 0&&$('#myPager').length >0){
$('#table-orders-history tbody').pageMe({pagerSelector:'#myPager',showPrevNext:true,hidePageNumbers:false,perPage:10, children:'tr.tr-wrap-order-history'});
}
if($('#table-invoices-history').length > 0&&$('#myPager').length >0){
$('#table-invoices-history tbody').pageMe({pagerSelector:'#myPager',showPrevNext:true,hidePageNumbers:false,perPage:10, children:'tr.tr-wrap-order-history'});
}
function selectContact(id){
c=JSON.parse($('#contacts-json').val());
if(typeof(c[id].phone)!=='undefined'){
$('#contacts-phone').val(c[id].phone.phoneNumber);
}else{
$('#contacts-phone').val('');
}
if(typeof(c[id].charge)!=='undefined'){
$('#contacts-position').val(c[id].charge);
}else{
$('#contacts-position').val('');
}
if(typeof(c[id].mail)!=='undefined'){
$('#contacts-email').val(c[id].mail.nameMail);
}else{
$('#contacts-email').val('');
}}
if($('.account-wrap').length > 0){
$('#contacts-select').on('change', function(e){
selectContact($(this).val());
});
selectContact(0);
}
$(".faq-title").click(function(){
if(!$(this).hasClass('active-faq')){
$('.faq-content').slideUp('slow', function(){});
$('.active-faq').removeClass('active-faq');
}
$(this).parent().find('.faq-content').slideToggle('slow', function(){});
$(this).toggleClass('active-faq');
return !1
});
if($('.dossier-container').length > 0){
$('.license-group-wrap .dac-recomendaciones-link').on('click', function(e){
url=$(this).attr('data-pdf');
name=$(this).attr('data-name');
variety=$(this).attr('data-variety');
$('.license-group-wrap .dac-recomendaciones-link').removeClass('license-selected');
$(this).addClass('license-selected');
$('.dossier-wrap h3').html(name);
$('.dossier-wrap h4').html(variety);
$('.dossier-wrap .dossier-toolbar a').attr('href', url);
$('.dossier-wrap .dossier-toolbar a').attr('download', convertToSlug(name+' '+variety)+'.pdf');
render_dossier(url);
$('.dossier-container').show();
$([document.documentElement, document.body]).animate({
scrollTop: $(".dossier-container").offset().top
}, 1000);
});
var pdfDoc=null,
pageNum=1,
pageRendering=false,
pageNumPending=null,
scale=1,
canvas=document.getElementById('dossier-canvas'),
ctx=canvas.getContext('2d');
function render_dossier(url){
$('#dossier-canvas').css('opacity', '0');
$('.dossier-pdf').append('<div class="dossier-loader"><div class="dossier-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>')
var pdfjsLib=window['pdfjs-dist/build/pdf'];
pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
pdfjsLib.getDocument(url).promise.then(function(pdfDoc_){
pdfDoc=pdfDoc_;
$('#dossier-canvas').css('opacity', '1');
$('.dossier-pdf').find('.dossier-loader').remove();
renderPage_dossier(pageNum);
});
}
function renderPage_dossier(num){
pageRendering=true;
pdfDoc.getPage(num).then(function(page){
var viewport=page.getViewport({scale: scale});
canvas.height=viewport.height;
canvas.width=viewport.width;
var renderContext={
canvasContext: ctx,
viewport: viewport
};
var renderTask=page.render(renderContext);
renderTask.promise.then(function(){
pageRendering=false;
if(pageNumPending!==null){
renderPage_dossier(pageNumPending);
pageNumPending=null;
}});
});
}
function queueRenderPage_dossier(num){
if(pageRendering){
pageNumPending=num;
}else{
renderPage_dossier(num);
}}
function onPrevPage_dossier(){
if(pageNum <=1){
return;
}
pageNum--;
queueRenderPage_dossier(pageNum);
}
document.getElementById('prev').addEventListener('click', onPrevPage_dossier);
function onNextPage_dossier(){
if(pageNum >=pdfDoc.numPages){
return;
}
pageNum++;
queueRenderPage_dossier(pageNum);
}
document.getElementById('next').addEventListener('click', onNextPage_dossier);
function convertToSlug(Text){
return Text.toLowerCase()
.replace(/ /g, '-')
.replace(/[^\w-]+/g, '');
}}
if($('html').attr("lang")=="fr-FR"){
duDatepicker('#daterange', {
cancelBtn: true,
range: true,
format: 'dd/mm/yyyy',
fromTarget: '#range-from',
toTarget: '#range-to',
i18n: 'fr',
maxDate: 'today'
});
}
else if($('html').attr("lang")=="es-ES"){
duDatepicker('#daterange', {
cancelBtn: true,
range: true,
format: 'dd/mm/yyyy',
fromTarget: '#range-from',
toTarget: '#range-to',
i18n: 'es',
maxDate: 'today'
});
}else{
duDatepicker('#daterange', {
cancelBtn: true,
range: true,
format: 'dd/mm/yyyy',
fromTarget: '#range-from',
toTarget: '#range-to',
i18n: 'en',
maxDate: 'today'
});
}});
function datalayerUserPush(){
if(!window.hasOwnProperty('dataLayer')){
setTimeout(datalayerUserPush, 2000);
return false;
}
dataLayer.push({
'event': 'userData',
'userId':jQuery('#datalayerUserId').val(),
'userName':jQuery('#datalayerUserName').val()
})
};
!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.anime=e()}(this,function(){"use strict";var n={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},e={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},t=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],r={CSS:{},springs:{}};function a(n,e,t){return Math.min(Math.max(n,e),t)}function o(n,e){return n.indexOf(e)>-1}function u(n,e){return n.apply(null,e)}var i={arr:function(n){return Array.isArray(n)},obj:function(n){return o(Object.prototype.toString.call(n),"Object")},pth:function(n){return i.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||i.svg(n)},str:function(n){return"string"==typeof n},fnc:function(n){return"function"==typeof n},und:function(n){return void 0===n},nil:function(n){return i.und(n)||null===n},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return i.hex(n)||i.rgb(n)||i.hsl(n)},key:function(t){return!n.hasOwnProperty(t)&&!e.hasOwnProperty(t)&&"targets"!==t&&"keyframes"!==t}};function c(n){var e=/\(([^)]+)\)/.exec(n);return e?e[1].split(",").map(function(n){return parseFloat(n)}):[]}function s(n,e){var t=c(n),o=a(i.und(t[0])?1:t[0],.1,100),u=a(i.und(t[1])?100:t[1],.1,100),s=a(i.und(t[2])?10:t[2],.1,100),f=a(i.und(t[3])?0:t[3],.1,100),l=Math.sqrt(u/o),d=s/(2*Math.sqrt(u*o)),p=d<1?l*Math.sqrt(1-d*d):0,v=1,h=d<1?(d*l-f)/p:-f+l;function g(n){var t=e?e*n/1e3:n;return t=d<1?Math.exp(-t*d*l)*(v*Math.cos(p*t)+h*Math.sin(p*t)):(v+h*t)*Math.exp(-t*l),0===n||1===n?n:1-t}return e?g:function(){var e=r.springs[n];if(e)return e;for(var t=0,a=0;;)if(1===g(t+=1/6)){if(++a>=16)break}else a=0;var o=t*(1/6)*1e3;return r.springs[n]=o,o}}function f(n){return void 0===n&&(n=10),function(e){return Math.ceil(a(e,1e-6,1)*n)*(1/n)}}var l,d,p=function(){var n=11,e=1/(n-1);function t(n,e){return 1-3*e+3*n}function r(n,e){return 3*e-6*n}function a(n){return 3*n}function o(n,e,o){return((t(e,o)*n+r(e,o))*n+a(e))*n}function u(n,e,o){return 3*t(e,o)*n*n+2*r(e,o)*n+a(e)}return function(t,r,a,i){if(0<=t&&t<=1&&0<=a&&a<=1){var c=new Float32Array(n);if(t!==r||a!==i)for(var s=0;s<n;++s)c[s]=o(s*e,t,a);return function(n){return t===r&&a===i?n:0===n||1===n?n:o(f(n),r,i)}}function f(r){for(var i=0,s=1,f=n-1;s!==f&&c[s]<=r;++s)i+=e;var l=i+(r-c[--s])/(c[s+1]-c[s])*e,d=u(l,t,a);return d>=.001?function(n,e,t,r){for(var a=0;a<4;++a){var i=u(e,t,r);if(0===i)return e;e-=(o(e,t,r)-n)/i}return e}(r,l,t,a):0===d?l:function(n,e,t,r,a){for(var u,i,c=0;(u=o(i=e+(t-e)/2,r,a)-n)>0?t=i:e=i,Math.abs(u)>1e-7&&++c<10;);return i}(r,i,i+e,t,a)}}}(),v=(l={linear:function(){return function(n){return n}}},d={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var e,t=4;n<((e=Math.pow(2,--t))-1)/11;);return 1/Math.pow(4,3-t)-7.5625*Math.pow((3*e-2)/22-n,2)}},Elastic:function(n,e){void 0===n&&(n=1),void 0===e&&(e=.5);var t=a(n,1,10),r=a(e,.1,2);return function(n){return 0===n||1===n?n:-t*Math.pow(2,10*(n-1))*Math.sin((n-1-r/(2*Math.PI)*Math.asin(1/t))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach(function(n,e){d[n]=function(){return function(n){return Math.pow(n,e+2)}}}),Object.keys(d).forEach(function(n){var e=d[n];l["easeIn"+n]=e,l["easeOut"+n]=function(n,t){return function(r){return 1-e(n,t)(1-r)}},l["easeInOut"+n]=function(n,t){return function(r){return r<.5?e(n,t)(2*r)/2:1-e(n,t)(-2*r+2)/2}},l["easeOutIn"+n]=function(n,t){return function(r){return r<.5?(1-e(n,t)(1-2*r))/2:(e(n,t)(2*r-1)+1)/2}}}),l);function h(n,e){if(i.fnc(n))return n;var t=n.split("(")[0],r=v[t],a=c(n);switch(t){case"spring":return s(n,e);case"cubicBezier":return u(p,a);case"steps":return u(f,a);default:return u(r,a)}}function g(n){try{return document.querySelectorAll(n)}catch(n){return}}function m(n,e){for(var t=n.length,r=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<t;o++)if(o in n){var u=n[o];e.call(r,u,o,n)&&a.push(u)}return a}function y(n){return n.reduce(function(n,e){return n.concat(i.arr(e)?y(e):e)},[])}function b(n){return i.arr(n)?n:(i.str(n)&&(n=g(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function M(n,e){return n.some(function(n){return n===e})}function x(n){var e={};for(var t in n)e[t]=n[t];return e}function w(n,e){var t=x(n);for(var r in n)t[r]=e.hasOwnProperty(r)?e[r]:n[r];return t}function k(n,e){var t=x(n);for(var r in e)t[r]=i.und(n[r])?e[r]:n[r];return t}function O(n){return i.rgb(n)?(t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e=n))?"rgba("+t[1]+",1)":e:i.hex(n)?(r=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(n,e,t,r){return e+e+t+t+r+r}),a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r),"rgba("+parseInt(a[1],16)+","+parseInt(a[2],16)+","+parseInt(a[3],16)+",1)"):i.hsl(n)?function(n){var e,t,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),o=parseInt(a[1],10)/360,u=parseInt(a[2],10)/100,i=parseInt(a[3],10)/100,c=a[4]||1;function s(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+(e-n)*(2/3-t)*6:n}if(0==u)e=t=r=i;else{var f=i<.5?i*(1+u):i+u-i*u,l=2*i-f;e=s(l,f,o+1/3),t=s(l,f,o),r=s(l,f,o-1/3)}return"rgba("+255*e+","+255*t+","+255*r+","+c+")"}(n):void 0;var e,t,r,a}function C(n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(e)return e[1]}function P(n,e){return i.fnc(n)?n(e.target,e.id,e.total):n}function I(n,e){return n.getAttribute(e)}function D(n,e,t){if(M([t,"deg","rad","turn"],C(e)))return e;var a=r.CSS[e+t];if(!i.und(a))return a;var o=document.createElement(n.tagName),u=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;u.appendChild(o),o.style.position="absolute",o.style.width=100+t;var c=100/o.offsetWidth;u.removeChild(o);var s=c*parseFloat(e);return r.CSS[e+t]=s,s}function B(n,e,t){if(e in n.style){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=n.style[e]||getComputedStyle(n).getPropertyValue(r)||"0";return t?D(n,a,t):a}}function T(n,e){return i.dom(n)&&!i.inp(n)&&(!i.nil(I(n,e))||i.svg(n)&&n[e])?"attribute":i.dom(n)&&M(t,e)?"transform":i.dom(n)&&"transform"!==e&&B(n,e)?"css":null!=n[e]?"object":void 0}function E(n){if(i.dom(n)){for(var e,t=n.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;e=r.exec(t);)a.set(e[1],e[2]);return a}}function F(n,e,t,r){var a,u=o(e,"scale")?1:0+(o(a=e,"translate")||"perspective"===a?"px":o(a,"rotate")||o(a,"skew")?"deg":void 0),i=E(n).get(e)||u;return t&&(t.transforms.list.set(e,i),t.transforms.last=e),r?D(n,i,r):i}function A(n,e,t,r){switch(T(n,e)){case"transform":return F(n,e,r,t);case"css":return B(n,e,t);case"attribute":return I(n,e);default:return n[e]||0}}function N(n,e){var t=/^(\*=|\+=|-=)/.exec(n);if(!t)return n;var r=C(n)||0,a=parseFloat(e),o=parseFloat(n.replace(t[0],""));switch(t[0][0]){case"+":return a+o+r;case"-":return a-o+r;case"*":return a*o+r}}function S(n,e){if(i.col(n))return O(n);if(/\s/g.test(n))return n;var t=C(n),r=t?n.substr(0,n.length-t.length):n;return e?r+e:r}function L(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function j(n){for(var e,t=n.points,r=0,a=0;a<t.numberOfItems;a++){var o=t.getItem(a);a>0&&(r+=L(e,o)),e=o}return r}function q(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return o=n,2*Math.PI*I(o,"r");case"rect":return 2*I(a=n,"width")+2*I(a,"height");case"line":return L({x:I(r=n,"x1"),y:I(r,"y1")},{x:I(r,"x2"),y:I(r,"y2")});case"polyline":return j(n);case"polygon":return t=(e=n).points,j(e)+L(t.getItem(t.numberOfItems-1),t.getItem(0))}var e,t,r,a,o}function H(n,e){var t=e||{},r=t.el||function(n){for(var e=n.parentNode;i.svg(e)&&i.svg(e.parentNode);)e=e.parentNode;return e}(n),a=r.getBoundingClientRect(),o=I(r,"viewBox"),u=a.width,c=a.height,s=t.viewBox||(o?o.split(" "):[0,0,u,c]);return{el:r,viewBox:s,x:s[0]/1,y:s[1]/1,w:u,h:c,vW:s[2],vH:s[3]}}function V(n,e,t){function r(t){void 0===t&&(t=0);var r=e+t>=1?e+t:0;return n.el.getPointAtLength(r)}var a=H(n.el,n.svg),o=r(),u=r(-1),i=r(1),c=t?1:a.w/a.vW,s=t?1:a.h/a.vH;switch(n.property){case"x":return(o.x-a.x)*c;case"y":return(o.y-a.y)*s;case"angle":return 180*Math.atan2(i.y-u.y,i.x-u.x)/Math.PI}}function $(n,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=S(i.pth(n)?n.totalLength:n,e)+"";return{original:r,numbers:r.match(t)?r.match(t).map(Number):[0],strings:i.str(n)||e?r.split(t):[]}}function W(n){return m(n?y(i.arr(n)?n.map(b):b(n)):[],function(n,e,t){return t.indexOf(n)===e})}function X(n){var e=W(n);return e.map(function(n,t){return{target:n,id:t,total:e.length,transforms:{list:E(n)}}})}function Y(n,e){var t=x(e);if(/^spring/.test(t.easing)&&(t.duration=s(t.easing)),i.arr(n)){var r=n.length;2===r&&!i.obj(n[0])?n={value:n}:i.fnc(e.duration)||(t.duration=e.duration/r)}var a=i.arr(n)?n:[n];return a.map(function(n,t){var r=i.obj(n)&&!i.pth(n)?n:{value:n};return i.und(r.delay)&&(r.delay=t?0:e.delay),i.und(r.endDelay)&&(r.endDelay=t===a.length-1?e.endDelay:0),r}).map(function(n){return k(n,t)})}function Z(n,e){var t=[],r=e.keyframes;for(var a in r&&(e=k(function(n){for(var e=m(y(n.map(function(n){return Object.keys(n)})),function(n){return i.key(n)}).reduce(function(n,e){return n.indexOf(e)<0&&n.push(e),n},[]),t={},r=function(r){var a=e[r];t[a]=n.map(function(n){var e={};for(var t in n)i.key(t)?t==a&&(e.value=n[t]):e[t]=n[t];return e})},a=0;a<e.length;a++)r(a);return t}(r),e)),e)i.key(a)&&t.push({name:a,tweens:Y(e[a],n)});return t}function G(n,e){var t;return n.tweens.map(function(r){var a=function(n,e){var t={};for(var r in n){var a=P(n[r],e);i.arr(a)&&1===(a=a.map(function(n){return P(n,e)})).length&&(a=a[0]),t[r]=a}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}(r,e),o=a.value,u=i.arr(o)?o[1]:o,c=C(u),s=A(e.target,n.name,c,e),f=t?t.to.original:s,l=i.arr(o)?o[0]:f,d=C(l)||C(s),p=c||d;return i.und(u)&&(u=f),a.from=$(l,p),a.to=$(N(u,l),p),a.start=t?t.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=h(a.easing,a.duration),a.isPath=i.pth(o),a.isPathTargetInsideSVG=a.isPath&&i.svg(e.target),a.isColor=i.col(a.from.original),a.isColor&&(a.round=1),t=a,a})}var Q={css:function(n,e,t){return n.style[e]=t},attribute:function(n,e,t){return n.setAttribute(e,t)},object:function(n,e,t){return n[e]=t},transform:function(n,e,t,r,a){if(r.list.set(e,t),e===r.last||a){var o="";r.list.forEach(function(n,e){o+=e+"("+n+") "}),n.style.transform=o}}};function z(n,e){X(n).forEach(function(n){for(var t in e){var r=P(e[t],n),a=n.target,o=C(r),u=A(a,t,o,n),i=N(S(r,o||C(u)),u),c=T(a,t);Q[c](a,t,i,n.transforms,!0)}})}function _(n,e){return m(y(n.map(function(n){return e.map(function(e){return function(n,e){var t=T(n.target,e.name);if(t){var r=G(e,n),a=r[r.length-1];return{type:t,property:e.name,animatable:n,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(n,e)})})),function(n){return!i.und(n)})}function R(n,e){var t=n.length,r=function(n){return n.timelineOffset?n.timelineOffset:0},a={};return a.duration=t?Math.max.apply(Math,n.map(function(n){return r(n)+n.duration})):e.duration,a.delay=t?Math.min.apply(Math,n.map(function(n){return r(n)+n.delay})):e.delay,a.endDelay=t?a.duration-Math.max.apply(Math,n.map(function(n){return r(n)+n.duration-n.endDelay})):e.endDelay,a}var J=0;var K=[],U=function(){var n;function e(t){for(var r=K.length,a=0;a<r;){var o=K[a];o.paused?(K.splice(a,1),r--):(o.tick(t),a++)}n=a>0?requestAnimationFrame(e):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",function(){en.suspendWhenDocumentHidden&&(nn()?n=cancelAnimationFrame(n):(K.forEach(function(n){return n._onDocumentVisibility()}),U()))}),function(){n||nn()&&en.suspendWhenDocumentHidden||!(K.length>0)||(n=requestAnimationFrame(e))}}();function nn(){return!!document&&document.hidden}function en(t){void 0===t&&(t={});var r,o=0,u=0,i=0,c=0,s=null;function f(n){var e=window.Promise&&new Promise(function(n){return s=n});return n.finished=e,e}var l,d,p,v,h,g,y,b,M=(d=w(n,l=t),p=w(e,l),v=Z(p,l),h=X(l.targets),g=_(h,v),y=R(g,p),b=J,J++,k(d,{id:b,children:[],animatables:h,animations:g,duration:y.duration,delay:y.delay,endDelay:y.endDelay}));f(M);function x(){var n=M.direction;"alternate"!==n&&(M.direction="normal"!==n?"normal":"reverse"),M.reversed=!M.reversed,r.forEach(function(n){return n.reversed=M.reversed})}function O(n){return M.reversed?M.duration-n:n}function C(){o=0,u=O(M.currentTime)*(1/en.speed)}function P(n,e){e&&e.seek(n-e.timelineOffset)}function I(n){for(var e=0,t=M.animations,r=t.length;e<r;){var o=t[e],u=o.animatable,i=o.tweens,c=i.length-1,s=i[c];c&&(s=m(i,function(e){return n<e.end})[0]||s);for(var f=a(n-s.start-s.delay,0,s.duration)/s.duration,l=isNaN(f)?1:s.easing(f),d=s.to.strings,p=s.round,v=[],h=s.to.numbers.length,g=void 0,y=0;y<h;y++){var b=void 0,x=s.to.numbers[y],w=s.from.numbers[y]||0;b=s.isPath?V(s.value,l*x,s.isPathTargetInsideSVG):w+l*(x-w),p&&(s.isColor&&y>2||(b=Math.round(b*p)/p)),v.push(b)}var k=d.length;if(k){g=d[0];for(var O=0;O<k;O++){d[O];var C=d[O+1],P=v[O];isNaN(P)||(g+=C?P+C:P+" ")}}else g=v[0];Q[o.type](u.target,o.property,g,u.transforms),o.currentValue=g,e++}}function D(n){M[n]&&!M.passThrough&&M[n](M)}function B(n){var e=M.duration,t=M.delay,l=e-M.endDelay,d=O(n);M.progress=a(d/e*100,0,100),M.reversePlayback=d<M.currentTime,r&&function(n){if(M.reversePlayback)for(var e=c;e--;)P(n,r[e]);else for(var t=0;t<c;t++)P(n,r[t])}(d),!M.began&&M.currentTime>0&&(M.began=!0,D("begin")),!M.loopBegan&&M.currentTime>0&&(M.loopBegan=!0,D("loopBegin")),d<=t&&0!==M.currentTime&&I(0),(d>=l&&M.currentTime!==e||!e)&&I(e),d>t&&d<l?(M.changeBegan||(M.changeBegan=!0,M.changeCompleted=!1,D("changeBegin")),D("change"),I(d)):M.changeBegan&&(M.changeCompleted=!0,M.changeBegan=!1,D("changeComplete")),M.currentTime=a(d,0,e),M.began&&D("update"),n>=e&&(u=0,M.remaining&&!0!==M.remaining&&M.remaining--,M.remaining?(o=i,D("loopComplete"),M.loopBegan=!1,"alternate"===M.direction&&x()):(M.paused=!0,M.completed||(M.completed=!0,D("loopComplete"),D("complete"),!M.passThrough&&"Promise"in window&&(s(),f(M)))))}return M.reset=function(){var n=M.direction;M.passThrough=!1,M.currentTime=0,M.progress=0,M.paused=!0,M.began=!1,M.loopBegan=!1,M.changeBegan=!1,M.completed=!1,M.changeCompleted=!1,M.reversePlayback=!1,M.reversed="reverse"===n,M.remaining=M.loop,r=M.children;for(var e=c=r.length;e--;)M.children[e].reset();(M.reversed&&!0!==M.loop||"alternate"===n&&1===M.loop)&&M.remaining++,I(M.reversed?M.duration:0)},M._onDocumentVisibility=C,M.set=function(n,e){return z(n,e),M},M.tick=function(n){i=n,o||(o=i),B((i+(u-o))*en.speed)},M.seek=function(n){B(O(n))},M.pause=function(){M.paused=!0,C()},M.play=function(){M.paused&&(M.completed&&M.reset(),M.paused=!1,K.push(M),C(),U())},M.reverse=function(){x(),M.completed=!M.reversed,C()},M.restart=function(){M.reset(),M.play()},M.remove=function(n){rn(W(n),M)},M.reset(),M.autoplay&&M.play(),M}function tn(n,e){for(var t=e.length;t--;)M(n,e[t].animatable.target)&&e.splice(t,1)}function rn(n,e){var t=e.animations,r=e.children;tn(n,t);for(var a=r.length;a--;){var o=r[a],u=o.animations;tn(n,u),u.length||o.children.length||r.splice(a,1)}t.length||r.length||e.pause()}return en.version="3.2.1",en.speed=1,en.suspendWhenDocumentHidden=!0,en.running=K,en.remove=function(n){for(var e=W(n),t=K.length;t--;)rn(e,K[t])},en.get=A,en.set=z,en.convertPx=D,en.path=function(n,e){var t=i.str(n)?g(n)[0]:n,r=e||100;return function(n){return{property:n,el:t,svg:H(t),totalLength:q(t)*(r/100)}}},en.setDashoffset=function(n){var e=q(n);return n.setAttribute("stroke-dasharray",e),e},en.stagger=function(n,e){void 0===e&&(e={});var t=e.direction||"normal",r=e.easing?h(e.easing):null,a=e.grid,o=e.axis,u=e.from||0,c="first"===u,s="center"===u,f="last"===u,l=i.arr(n),d=l?parseFloat(n[0]):parseFloat(n),p=l?parseFloat(n[1]):0,v=C(l?n[1]:n)||0,g=e.start||0+(l?d:0),m=[],y=0;return function(n,e,i){if(c&&(u=0),s&&(u=(i-1)/2),f&&(u=i-1),!m.length){for(var h=0;h<i;h++){if(a){var b=s?(a[0]-1)/2:u%a[0],M=s?(a[1]-1)/2:Math.floor(u/a[0]),x=b-h%a[0],w=M-Math.floor(h/a[0]),k=Math.sqrt(x*x+w*w);"x"===o&&(k=-x),"y"===o&&(k=-w),m.push(k)}else m.push(Math.abs(u-h));y=Math.max.apply(Math,m)}r&&(m=m.map(function(n){return r(n/y)*y})),"reverse"===t&&(m=m.map(function(n){return o?n<0?-1*n:-n:Math.abs(y-n)}))}return g+(l?(p-d)/y:d)*(Math.round(100*m[e])/100)+v}},en.timeline=function(n){void 0===n&&(n={});var t=en(n);return t.duration=0,t.add=function(r,a){var o=K.indexOf(t),u=t.children;function c(n){n.passThrough=!0}o>-1&&K.splice(o,1);for(var s=0;s<u.length;s++)c(u[s]);var f=k(r,w(e,n));f.targets=f.targets||n.targets;var l=t.duration;f.autoplay=!1,f.direction=t.direction,f.timelineOffset=i.und(a)?l:N(a,l),c(t),t.seek(f.timelineOffset);var d=en(f);c(d),u.push(d);var p=R(u,n);return t.delay=p.delay,t.endDelay=p.endDelay,t.duration=p.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},en.easing=h,en.penner=v,en.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n},en});
if(!jQuery().nectarswiper){
var NectarSwiper=function (selector, params){
if(document.body.__defineGetter__){
var testOuterHTML=document.querySelector('div');
if(typeof testOuterHTML.outerHTML==="undefined"){
if(HTMLElement){
var element=HTMLElement.prototype;
if(element.__defineGetter__){
element.__defineGetter__("outerHTML", function (){ return new XMLSerializer().serializeToString(this); });
}}
}}
if(!window.getComputedStyle){
window.getComputedStyle=function (el, pseudo){
this.el=el;
this.getPropertyValue=function (prop){
var re=/(\-([a-z]){1})/g;
if(prop==='float') prop='styleFloat';
if(re.test(prop)){
prop=prop.replace(re, function (){
return arguments[2].toUpperCase();
});
}
return el.currentStyle[prop] ? el.currentStyle[prop]:null;
};
return this;
};}
if(!Array.prototype.indexOf){
Array.prototype.indexOf=function(obj, start){
for (var i=(start||0), j=this.length; i < j; i++){
if(this[i]===obj){ return i; }}
return -1;
};}
if(!document.querySelectorAll){
if(!window.jQuery) return;
}
function $$(selector, context){
if(document.querySelectorAll)
return (context||document).querySelectorAll(selector);
else
return jQuery(selector, context);
}
if(typeof selector==='undefined') return;
if(!(selector.nodeType)){
if($$(selector).length===0) return;
}
var _this=this;
_this.touches={
start:0,
startX:0,
startY:0,
current:0,
currentX:0,
currentY:0,
diff:0,
abs:0
};
_this.positions={
start:0,
abs:0,
diff:0,
current:0
};
_this.times={
start:0,
end:0
};
_this.id=(new Date()).getTime();
_this.container=(selector.nodeType) ? selector:$$(selector)[0];
_this.isTouched=false;
_this.isMoved=false;
_this.activeIndex=0;
_this.activeLoaderIndex=0;
_this.activeLoopIndex=0;
_this.previousIndex=null;
_this.velocity=0;
_this.snapGrid=[];
_this.slidesGrid=[];
_this.imagesToLoad=[];
_this.imagesLoaded=0;
_this.wrapperLeft=0;
_this.wrapperRight=0;
_this.wrapperTop=0;
_this.wrapperBottom=0;
var wrapper, slideSize, wrapperSize, direction, isScrolling, containerSize;
var defaults={
mode:'horizontal',
touchRatio:1,
speed:300,
freeMode:false,
freeModeFluid:false,
momentumRatio: 1,
momentumBounce: true,
momentumBounceRatio: 1,
slidesPerView:1,
slidesPerGroup:1,
simulateTouch:true,
followFinger:true,
shortSwipes:true,
moveStartThreshold:false,
autoplay: false,
onlyExternal:false,
createPagination:true,
pagination:false,
paginationElement: 'span',
paginationClickable: false,
paginationAsRange: true,
resistance:true,
scrollContainer:false,
preventLinks:true,
noSwiping:false,
noSwipingClass:'swiper-no-swiping',
initialSlide: 0,
keyboardControl: false,
mousewheelControl:false,
mousewheelDebounce: 600,
useCSS3Transforms:true,
loop:false,
loopAdditionalSlides:0,
calculateHeight: false,
updateOnImagesReady:true,
releaseFormElements:true,
watchActiveIndex: false,
visibilityFullFit:false,
offsetPxBefore:0,
offsetPxAfter:0,
offsetSlidesBefore:0,
offsetSlidesAfter:0,
centeredSlides: false,
queueStartCallbacks:false,
queueEndCallbacks:false,
autoResize:true,
resizeReInit:false,
DOMAnimation:true,
loader: {
slides:[],
slidesHTMLType:'inner',
surroundGroups: 1,
logic: 'reload',
loadAllSlides: false
},
slideElement:'div',
slideClass:'swiper-slide',
slideActiveClass:'swiper-slide-active',
slideVisibleClass:'swiper-slide-visible',
wrapperClass:'swiper-wrapper',
paginationElementClass: 'swiper-pagination-switch',
paginationActiveClass:'swiper-active-switch ar-vis',
paginationVisibleClass:'swiper-visible-switch'
};
params=params||{};
for (var prop in defaults){
if(prop in params&&typeof params[prop]==='object'){
for (var subProp in defaults[prop]){
if(! (subProp in params[prop])){
params[prop][subProp]=defaults[prop][subProp];
}}
}
else if(! (prop in params)){
params[prop]=defaults[prop];
}}
_this.params=params;
if(params.scrollContainer){
params.freeMode=true;
params.freeModeFluid=true;
}
if(params.loop){
params.resistance='100%';
}
var isH=params.mode==='horizontal';
_this.touchEvents={
touchStart:_this.support.touch||!params.simulateTouch  ? 'touchstart':(_this.browser.ie10 ? 'MSPointerDown':'mousedown'),
touchMove:_this.support.touch||!params.simulateTouch ? 'touchmove':(_this.browser.ie10 ? 'MSPointerMove':'mousemove'),
touchEnd:_this.support.touch||!params.simulateTouch ? 'touchend':(_this.browser.ie10 ? 'MSPointerUp':'mouseup')
};
for (var i=_this.container.childNodes.length - 1; i >=0; i--){
if(_this.container.childNodes[i].className){
var _wrapperClasses=_this.container.childNodes[i].className.split(/\s+/);
for (var j=0; j < _wrapperClasses.length; j++){
if(_wrapperClasses[j]===params.wrapperClass){
wrapper=_this.container.childNodes[i];
}}
}}
_this.wrapper=wrapper;
_this._extendSwiperSlide=function  (el){
el.append=function (){
if(params.loop){
el.insertAfter(_this.slides.length-_this.loopedSlides);
_this.removeLoopedSlides();
_this.calcSlides();
_this.createLoop();
}else{
_this.wrapper.appendChild(el);
}
_this.reInit();
return el;
};
el.prepend=function (){
if(params.loop){
_this.wrapper.insertBefore(el, _this.slides[_this.loopedSlides]);
_this.removeLoopedSlides();
_this.calcSlides();
_this.createLoop();
}else{
_this.wrapper.insertBefore(el, _this.wrapper.firstChild);
}
_this.reInit();
return el;
};
el.insertAfter=function (index){
if(typeof index==='undefined') return false;
var beforeSlide;
if(params.loop){
beforeSlide=_this.slides[index + 1 + _this.loopedSlides];
_this.wrapper.insertBefore(el, beforeSlide);
_this.removeLoopedSlides();
_this.calcSlides();
_this.createLoop();
}else{
beforeSlide=_this.slides[index + 1];
_this.wrapper.insertBefore(el, beforeSlide);
}
_this.reInit();
return el;
};
el.clone=function (){
return _this._extendSwiperSlide(el.cloneNode(true));
};
el.remove=function (){
_this.wrapper.removeChild(el);
_this.reInit();
};
el.html=function (html){
if(typeof html==='undefined'){
return el.innerHTML;
}else{
el.innerHTML=html;
return el;
}};
el.index=function (){
var index;
for (var i=_this.slides.length - 1; i >=0; i--){
if(el===_this.slides[i]) index=i;
}
return index;
};
el.isActive=function (){
if(el.index()===_this.activeIndex){ return true; }
else return false;
};
if(!el.swiperSlideDataStorage) el.swiperSlideDataStorage={};
el.getData=function (name){
return el.swiperSlideDataStorage[name];
};
el.setData=function (name, value){
el.swiperSlideDataStorage[name]=value;
return el;
};
el.data=function (name, value){
if(!value){
return el.getAttribute('data-'+name);
}else{
el.setAttribute('data-'+name,value);
return el;
}};
el.getWidth=function (outer){
return _this.h.getWidth(el, outer);
};
el.getHeight=function (outer){
return _this.h.getHeight(el, outer);
};
el.getOffset=function(){
return _this.h.getOffset(el);
};
return el;
};
_this.calcSlides=function (forceCalcSlides){
var oldNumber=_this.slides ? _this.slides.length:false;
_this.slides=[];
_this.displaySlides=[];
for (var i=0; i < _this.wrapper.childNodes.length; i++){
if(_this.wrapper.childNodes[i].className){
var _className=_this.wrapper.childNodes[i].className;
var _slideClasses=_className.split(' ');
for (var j=0; j < _slideClasses.length; j++){
if(_slideClasses[j]===params.slideClass){
_this.slides.push(_this.wrapper.childNodes[i]);
}}
}}
for (i=_this.slides.length - 1; i >=0; i--){
_this._extendSwiperSlide(_this.slides[i]);
}
if(!oldNumber) return;
if(oldNumber!==_this.slides.length||forceCalcSlides){
removeSlideEvents();
addSlideEvents();
_this.updateActiveSlide();
if(params.createPagination&&_this.params.pagination) _this.createPagination();
_this.callPlugins('numberOfSlidesChanged');
}};
_this.createSlide=function (html, slideClassList, el){
var slideClassList=slideClassList||_this.params.slideClass;
var el=el||params.slideElement;
var newSlide=document.createElement(el);
newSlide.innerHTML=html||'';
newSlide.className=slideClassList;
return _this._extendSwiperSlide(newSlide);
};
_this.appendSlide=function (html, slideClassList, el){
if(!html) return;
if(html.nodeType){
return _this._extendSwiperSlide(html).append();
}else{
return _this.createSlide(html, slideClassList, el).append();
}};
_this.prependSlide=function (html, slideClassList, el){
if(!html) return;
if(html.nodeType){
return _this._extendSwiperSlide(html).prepend();
}else{
return _this.createSlide(html, slideClassList, el).prepend();
}};
_this.insertSlideAfter=function (index, html, slideClassList, el){
if(typeof index==='undefined') return false;
if(html.nodeType){
return _this._extendSwiperSlide(html).insertAfter(index);
}else{
return _this.createSlide(html, slideClassList, el).insertAfter(index);
}};
_this.removeSlide=function (index){
if(_this.slides[index]){
if(params.loop){
if(!_this.slides[index+_this.loopedSlides]) return false;
_this.slides[index+_this.loopedSlides].remove();
_this.removeLoopedSlides();
_this.calcSlides();
_this.createLoop();
}
else _this.slides[index].remove();
return true;
}
else return false;
};
_this.removeLastSlide=function (){
if(_this.slides.length>0){
if(params.loop){
_this.slides[_this.slides.length - 1 - _this.loopedSlides].remove();
_this.removeLoopedSlides();
_this.calcSlides();
_this.createLoop();
}
else _this.slides[ (_this.slides.length-1) ].remove();
return true;
}else{
return false;
}};
_this.removeAllSlides=function (){
for (var i=_this.slides.length - 1; i >=0; i--){
_this.slides[i].remove();
}};
_this.getSlide=function (index){
return _this.slides[index];
};
_this.getLastSlide=function (){
return _this.slides[ _this.slides.length-1 ];
};
_this.getFirstSlide=function (){
return _this.slides[0];
};
_this.activeSlide=function (){
return _this.slides[_this.activeIndex];
};
var _plugins=[];
for (var plugin in _this.plugins){
if(params[plugin]){
var p=_this.plugins[plugin](_this, params[plugin]);
if(p) _plugins.push(p);
}}
_this.callPlugins=function(method, args){
if(!args) args={}
for (var i=0; i<_plugins.length; i++){
if(method in _plugins[i]){
_plugins[i][method](args);
}}
};
_this.fireCallback=function(){
var callback=arguments[0];
if(Object.prototype.toString.call(callback)==='[object Array]'){
for (var i=0; i < callback.length; i++){
if(typeof callback[i]==='function'){
callback[i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
}}
}else{
callback(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
}};
function isArray (obj){
"use strict";
if(Object.prototype.toString.apply(obj)==='[object Array]'){
return true;
}
return false;
}
_this.addCallback=function (callback, func){
"use strict";
var _this=this, tempFunc;
if(_this.params['on' + callback]){
if(isArray(this.params['on' + callback])){
return this.params['on' + callback].push(func);
}else if(typeof this.params['on' + callback]==='function'){
tempFunc=this.params['on' + callback];
this.params['on' + callback]=[];
this.params['on' + callback].push(tempFunc);
return this.params['on' + callback].push(func);
}}else{
this.params['on' + callback]=[];
return this.params['on' + callback].push(func);
}};
_this.removeCallbacks=function (callback){
if(_this.params['on' + callback]){
return _this.params['on' + callback]=null;
}};
if(_this.browser.ie10&&!params.onlyExternal){
_this.wrapper.classList.add('swiper-wp8-' + (isH ? 'horizontal':'vertical'));
}
if(params.freeMode){
_this.container.className+=' swiper-free-mode';
}
_this.initialized=false;
_this.init=function(force, forceCalcSlides){
var _width=_this.h.getWidth(_this.container);
var _height=_this.h.getHeight(_this.container);
if(_width===_this.width&&_height===_this.height&&!force) return;
_this.width=_width;
_this.height=_height;
containerSize=isH ? _width:_height;
var wrapper=_this.wrapper;
if(force){
_this.calcSlides(forceCalcSlides);
}
if(params.slidesPerView==='auto'){
var slidesWidth=0;
var slidesHeight=0;
if(params.slidesOffset>0){
wrapper.style.paddingLeft='';
wrapper.style.paddingRight='';
wrapper.style.paddingTop='';
wrapper.style.paddingBottom='';
}
wrapper.style.width='';
wrapper.style.height='';
if(params.offsetPxBefore>0){
if(isH) _this.wrapperLeft=params.offsetPxBefore;
else _this.wrapperTop=params.offsetPxBefore;
}
if(params.offsetPxAfter>0){
if(isH) _this.wrapperRight=params.offsetPxAfter;
else _this.wrapperBottom=params.offsetPxAfter;
}
if(params.centeredSlides){
if(isH){
_this.wrapperLeft=(containerSize - this.slides[0].getWidth(true))/2;
_this.wrapperRight=(containerSize - _this.slides[ _this.slides.length-1 ].getWidth(true))/2;
}else{
_this.wrapperTop=(containerSize - _this.slides[0].getHeight(true))/2;
_this.wrapperBottom=(containerSize - _this.slides[ _this.slides.length-1 ].getHeight(true))/2;
}}
if(isH){
if(_this.wrapperLeft>=0) wrapper.style.paddingLeft=_this.wrapperLeft+'px';
if(_this.wrapperRight>=0) wrapper.style.paddingRight=_this.wrapperRight+'px';
}else{
if(_this.wrapperTop>=0) wrapper.style.paddingTop=_this.wrapperTop+'px';
if(_this.wrapperBottom>=0) wrapper.style.paddingBottom=_this.wrapperBottom+'px';
}
var slideLeft=0;
var centeredSlideLeft=0;
_this.snapGrid=[];
_this.slidesGrid=[];
var slideMaxHeight=0;
for(var i=0; i<_this.slides.length; i++){
var slideWidth=_this.slides[i].getWidth(true);
var slideHeight=_this.slides[i].getHeight(true);
if(params.calculateHeight){
slideMaxHeight=Math.max(slideMaxHeight, slideHeight);
}
var _slideSize=isH ? slideWidth:slideHeight;
if(params.centeredSlides){
var nextSlideWidth=i===_this.slides.length-1 ? 0:_this.slides[i+1].getWidth(true);
var nextSlideHeight=i===_this.slides.length-1 ? 0:_this.slides[i+1].getHeight(true);
var nextSlideSize=isH ? nextSlideWidth:nextSlideHeight;
if(_slideSize>containerSize){
for (var j=0; j<=Math.floor(_slideSize/(containerSize+_this.wrapperLeft)); j++){
if(j===0) _this.snapGrid.push(slideLeft+_this.wrapperLeft);
else _this.snapGrid.push(slideLeft+_this.wrapperLeft+containerSize*j);
}
_this.slidesGrid.push(slideLeft+_this.wrapperLeft);
}else{
_this.snapGrid.push(centeredSlideLeft);
_this.slidesGrid.push(centeredSlideLeft);
}
centeredSlideLeft +=_slideSize/2 + nextSlideSize/2;
}else{
if(_slideSize>containerSize){
for (var j=0; j<=Math.floor(_slideSize/containerSize); j++){
_this.snapGrid.push(slideLeft+containerSize*j);
}}else{
_this.snapGrid.push(slideLeft);
}
_this.slidesGrid.push(slideLeft);
}
slideLeft +=_slideSize;
slidesWidth +=slideWidth;
slidesHeight +=slideHeight;
}
if(params.calculateHeight) _this.height=slideMaxHeight;
if(isH){
wrapperSize=slidesWidth + _this.wrapperRight + _this.wrapperLeft;
wrapper.style.width=(slidesWidth)+'px';
wrapper.style.height=(_this.height)+'px';
}else{
wrapperSize=slidesHeight + _this.wrapperTop + _this.wrapperBottom;
wrapper.style.width=(_this.width)+'px';
wrapper.style.height=(slidesHeight)+'px';
}}
else if(params.scrollContainer){
wrapper.style.width='';
wrapper.style.height='';
var wrapperWidth=_this.slides[0].getWidth(true);
var wrapperHeight=_this.slides[0].getHeight(true);
wrapperSize=isH ? wrapperWidth:wrapperHeight;
wrapper.style.width=wrapperWidth+'px';
wrapper.style.height=wrapperHeight+'px';
slideSize=isH ? wrapperWidth:wrapperHeight;
}else{
if(params.calculateHeight){
var slideMaxHeight=0;
var wrapperHeight=0;
if(!isH) _this.container.style.height='';
wrapper.style.height='';
for (var i=0; i<_this.slides.length; i++){
_this.slides[i].style.height='';
slideMaxHeight=Math.max(_this.slides[i].getHeight(true), slideMaxHeight);
if(!isH) wrapperHeight+=_this.slides[i].getHeight(true);
}
var slideHeight=slideMaxHeight;
_this.height=slideHeight;
if(isH) wrapperHeight=slideHeight;
else containerSize=slideHeight, _this.container.style.height=containerSize+'px';
}else{
var slideHeight=isH ? _this.height:_this.height/params.slidesPerView;
var wrapperHeight=isH ? _this.height:_this.slides.length*slideHeight;
}
var slideWidth=isH ? _this.width/params.slidesPerView:_this.width;
var wrapperWidth=isH ? _this.slides.length*slideWidth:_this.width;
slideSize=isH ? slideWidth:slideHeight;
if(params.offsetSlidesBefore>0){
if(isH) _this.wrapperLeft=slideSize*params.offsetSlidesBefore;
else _this.wrapperTop=slideSize*params.offsetSlidesBefore;
}
if(params.offsetSlidesAfter>0){
if(isH) _this.wrapperRight=slideSize*params.offsetSlidesAfter;
else _this.wrapperBottom=slideSize*params.offsetSlidesAfter;
}
if(params.offsetPxBefore>0){
if(isH) _this.wrapperLeft=params.offsetPxBefore;
else _this.wrapperTop=params.offsetPxBefore;
}
if(params.offsetPxAfter>0){
if(isH) _this.wrapperRight=params.offsetPxAfter;
else _this.wrapperBottom=params.offsetPxAfter;
}
if(params.centeredSlides){
if(isH){
_this.wrapperLeft=(containerSize - slideSize)/2;
_this.wrapperRight=(containerSize - slideSize)/2;
}else{
_this.wrapperTop=(containerSize - slideSize)/2;
_this.wrapperBottom=(containerSize - slideSize)/2;
}}
if(isH){
if(_this.wrapperLeft>0) wrapper.style.paddingLeft=_this.wrapperLeft+'px';
if(_this.wrapperRight>0) wrapper.style.paddingRight=_this.wrapperRight+'px';
}else{
if(_this.wrapperTop>0) wrapper.style.paddingTop=_this.wrapperTop+'px';
if(_this.wrapperBottom>0) wrapper.style.paddingBottom=_this.wrapperBottom+'px';
}
wrapperSize=isH ? wrapperWidth + _this.wrapperRight + _this.wrapperLeft:wrapperHeight + _this.wrapperTop + _this.wrapperBottom;
if(!params.cssWidthAndHeight){
if(parseFloat(wrapperWidth) > 0){
wrapper.style.width=wrapperWidth+'px';
}
if(parseFloat(wrapperHeight) > 0){
wrapper.style.height=wrapperHeight+'px';
}}
var slideLeft=0;
_this.snapGrid=[];
_this.slidesGrid=[];
for (var i=0; i<_this.slides.length; i++){
_this.snapGrid.push(slideLeft);
_this.slidesGrid.push(slideLeft);
slideLeft+=slideSize;
if(!params.cssWidthAndHeight){
if(parseFloat(slideWidth) > 0){
_this.slides[i].style.width=slideWidth+'px';
}
if(parseFloat(slideHeight) > 0){
_this.slides[i].style.height=slideHeight+'px';
}}
}}
if(!_this.initialized){
_this.callPlugins('onFirstInit');
if(params.onFirstInit) _this.fireCallback(params.onFirstInit,_this);
}else{
_this.callPlugins('onInit');
if(params.onInit) _this.fireCallback(params.onInit,_this);
}
_this.initialized=true;
};
_this.reInit=function (forceCalcSlides){
_this.init(true, forceCalcSlides);
};
_this.resizeFix=function (reInit){
_this.callPlugins('beforeResizeFix');
_this.init(params.resizeReInit||reInit);
if(!params.freeMode){
_this.swipeTo((params.loop ? _this.activeLoopIndex:_this.activeIndex), 0, false);
}
else if(_this.getWrapperTranslate() < -maxWrapperPosition()){
_this.setWrapperTransition(0);
_this.setWrapperTranslate(-maxWrapperPosition());
}
_this.callPlugins('afterResizeFix');
};
function maxWrapperPosition(){
var a=(wrapperSize - containerSize);
if(params.freeMode){
a=wrapperSize - containerSize;
}
if(params.slidesPerView > _this.slides.length) a=0;
if(a<0) a=0;
return a;
}
function minWrapperPosition(){
var a=0;
return a;
}
function initEvents(){
var bind=_this.h.addEventListener;
if(!_this.browser.ie10){
if(_this.support.touch){
bind(_this.wrapper, 'touchstart', onTouchStart);
bind(_this.wrapper, 'touchmove', onTouchMove);
bind(_this.wrapper, 'touchend', onTouchEnd);
}
if(params.simulateTouch){
bind(_this.wrapper, 'mousedown', onTouchStart);
bind(document, 'mousemove', onTouchMove);
bind(document, 'mouseup', onTouchEnd);
}}else{
bind(_this.wrapper, _this.touchEvents.touchStart, onTouchStart);
bind(document, _this.touchEvents.touchMove, onTouchMove);
bind(document, _this.touchEvents.touchEnd, onTouchEnd);
}
if(params.autoResize){
bind(window, 'resize', _this.resizeFix);
}
addSlideEvents();
_this._wheelEvent=false;
if(params.mousewheelControl){
if(document.onmousewheel!==undefined){
_this._wheelEvent="mousewheel";
}
try {
WheelEvent("wheel");
_this._wheelEvent="wheel";
} catch (e){}
if(!_this._wheelEvent){
_this._wheelEvent="DOMMouseScroll";
}
if(_this._wheelEvent){
bind(_this.container, _this._wheelEvent, handleMousewheel);
}}
if(params.keyboardControl){
bind(document, 'keydown', handleKeyboardKeys);
}
if(params.updateOnImagesReady){
_this.imagesToLoad=$$('img', _this.container);
for (var i=0; i<_this.imagesToLoad.length; i++){
_loadImage(_this.imagesToLoad[i].getAttribute('src'));
}}
function _loadImage(src){
var image=new Image();
image.onload=function(){
_this.imagesLoaded++;
if(_this.imagesLoaded==_this.imagesToLoad.length){
_this.reInit();
if(params.onImagesReady) _this.fireCallback(params.onImagesReady, _this);
}};
image.src=src;
}}
_this.destroy=function(removeResizeFix){
var unbind=_this.h.removeEventListener;
if(!_this.browser.ie10){
if(_this.support.touch){
unbind(_this.wrapper, 'touchstart', onTouchStart);
unbind(_this.wrapper, 'touchmove', onTouchMove);
unbind(_this.wrapper, 'touchend', onTouchEnd);
}
if(params.simulateTouch){
unbind(_this.wrapper, 'mousedown', onTouchStart);
unbind(document, 'mousemove', onTouchMove);
unbind(document, 'mouseup', onTouchEnd);
}}else{
unbind(_this.wrapper, _this.touchEvents.touchStart, onTouchStart);
unbind(document, _this.touchEvents.touchMove, onTouchMove);
unbind(document, _this.touchEvents.touchEnd, onTouchEnd);
}
if(params.autoResize){
unbind(window, 'resize', _this.resizeFix);
}
removeSlideEvents();
if(params.paginationClickable){
removePaginationEvents();
}
if(params.mousewheelControl&&_this._wheelEvent){
unbind(_this.container, _this._wheelEvent, handleMousewheel);
}
if(params.keyboardControl){
unbind(document, 'keydown', handleKeyboardKeys);
}
if(params.autoplay){
_this.stopAutoplay();
}
_this.callPlugins('onDestroy');
_this=null;
};
function addSlideEvents(){
var bind=_this.h.addEventListener,
i;
if(params.preventLinks){
var links=$$('a', _this.container);
for (i=0; i<links.length; i++){
bind(links[i], 'click', preventClick);
}}
if(params.releaseFormElements){
var formElements=$$('input, textarea, select', _this.container);
for (i=0; i<formElements.length; i++){
bind(formElements[i], _this.touchEvents.touchStart, releaseForms, true);
}}
if(params.onSlideClick){
for (i=0; i<_this.slides.length; i++){
bind(_this.slides[i], 'click', slideClick);
}}
if(params.onSlideTouch){
for (i=0; i<_this.slides.length; i++){
bind(_this.slides[i], _this.touchEvents.touchStart, slideTouch);
}}
}
function removeSlideEvents(){
var unbind=_this.h.removeEventListener,
i;
if(params.onSlideClick){
for (i=0; i<_this.slides.length; i++){
unbind(_this.slides[i], 'click', slideClick);
}}
if(params.onSlideTouch){
for (i=0; i<_this.slides.length; i++){
unbind(_this.slides[i], _this.touchEvents.touchStart, slideTouch);
}}
if(params.releaseFormElements){
var formElements=$$('input, textarea, select', _this.container);
for (i=0; i<formElements.length; i++){
unbind(formElements[i], _this.touchEvents.touchStart, releaseForms, true);
}}
if(params.preventLinks){
var links=$$('a', _this.container);
for (i=0; i<links.length; i++){
unbind(links[i], 'click', preventClick);
}}
}
function handleKeyboardKeys (e){
var kc=e.keyCode||e.charCode;
if(kc==37||kc==39||kc==38||kc==40){
var inView=false;
var swiperOffset=_this.h.getOffset(_this.container);
var scrollLeft=_this.h.windowScroll().left;
var scrollTop=_this.h.windowScroll().top;
var windowWidth=_this.h.windowWidth();
var windowHeight=_this.h.windowHeight();
var swiperCoord=[
[swiperOffset.left, swiperOffset.top],
[swiperOffset.left + _this.width, swiperOffset.top],
[swiperOffset.left, swiperOffset.top + _this.height],
[swiperOffset.left + _this.width, swiperOffset.top + _this.height]
];
for (var i=0; i<swiperCoord.length; i++){
var point=swiperCoord[i];
if(point[0]>=scrollLeft&&point[0]<=scrollLeft+windowWidth &&
point[1]>=scrollTop&&point[1]<=scrollTop+windowHeight
){
inView=true;
}}
if(!inView) return;
}
if(isH){
if(kc==37||kc==39){
if(e.preventDefault) e.preventDefault();
else e.returnValue=false;
}
if(kc==39) _this.swipeNext();
if(kc==37) _this.swipePrev();
}else{
if(kc==38||kc==40){
if(e.preventDefault) e.preventDefault();
else e.returnValue=false;
}
if(kc==40) _this.swipeNext();
if(kc==38) _this.swipePrev();
}}
var allowScrollChange=true;
var lastScrollTime=(new Date()).getTime();
function handleMousewheel (e){
var we=_this._wheelEvent;
var delta=0;
if(e.detail) delta=-e.detail;
else if(we=='mousewheel') delta=e.wheelDelta;
else if(we=='DOMMouseScroll') delta=-e.detail;
else if(we=='wheel'){
delta=Math.abs(e.deltaX)>Math.abs(e.deltaY) ? - e.deltaX:- e.deltaY;
}
if(!params.freeMode){
if(delta<0) _this.swipeNext();
else _this.swipePrev();
}else{
var position=_this.getWrapperTranslate() + delta;
if(position > 0) position=0;
if(position < -maxWrapperPosition()) position=-maxWrapperPosition();
_this.setWrapperTransition(0);
_this.setWrapperTranslate(position);
_this.updateActiveSlide(position);
}
if(params.autoplay) _this.stopAutoplay();
if(e.preventDefault) e.preventDefault();
else e.returnValue=false;
return false;
}
if(params.grabCursor){
var containerStyle=_this.container.style;
containerStyle.cursor='move';
containerStyle.cursor='grab';
containerStyle.cursor='-moz-grab';
containerStyle.cursor='-webkit-grab';
}
_this.allowSlideClick=true;
function slideClick(event){
if(_this.allowSlideClick){
setClickedSlide(event);
this.fireCallback(params.onSlideClick, _this, event);
}}
function slideTouch(event){
setClickedSlide(event);
_this.fireCallback(params.onSlideTouch, _this, event);
}
function setClickedSlide(event){
if(!event.currentTarget){
var element=event.srcElement;
do {
if(element.className.indexOf(params.slideClass) > -1){
break;
}}
while (element=element.parentNode);
_this.clickedSlide=element;
}else{
_this.clickedSlide=event.currentTarget;
}
_this.clickedSlideIndex=_this.slides.indexOf(_this.clickedSlide);
_this.clickedSlideLoopIndex=_this.clickedSlideIndex - (_this.loopedSlides||0);
}
_this.allowLinks=true;
function preventClick(e){
if(!_this.allowLinks){
if(e.preventDefault) e.preventDefault();
else e.returnValue=false;
return false;
}}
function releaseForms(e){
if(e.stopPropagation) e.stopPropagation();
else e.returnValue=false;
return false;
}
var isTouchEvent=false;
var allowThresholdMove;
var allowMomentumBounce=true;
function onTouchStart(event){
if(jQuery(event.target).parents('.wpb_gallery').length > 0&&jQuery(event.target).parents('.swiper-container').attr('data-desktop-swipe')=='false'&&!Modernizr.touch){
return false;
}
if(jQuery(event.target).parents('.swiper-container').find('.swiper-slide').length==1){
return false;
}
if(jQuery(event.target).parents('.swiper-container').find('.swiper-slide.duplicate-transition').length > 0) return false;
if(params.preventLinks) _this.allowLinks=true;
if(_this.isTouched||params.onlyExternal){
return false;
}
if(params.noSwiping&&(event.target||event.srcElement)&&noSwipingSlide(event.target||event.srcElement)) return false;
allowMomentumBounce=false;
_this.isTouched=true;
isTouchEvent=event.type=='touchstart';
if(!isTouchEvent||event.targetTouches.length==1){
_this.callPlugins('onTouchStartBegin');
if(!isTouchEvent){
if(event.preventDefault) event.preventDefault();
else event.returnValue=false;
}
var pageX=isTouchEvent ? event.targetTouches[0].pageX:(event.pageX||event.clientX);
var pageY=isTouchEvent ? event.targetTouches[0].pageY:(event.pageY||event.clientY);
_this.touches.startX=_this.touches.currentX=pageX;
_this.touches.startY=_this.touches.currentY=pageY;
_this.touches.start=_this.touches.current=isH ? pageX:pageY;
_this.setWrapperTransition(0);
_this.positions.start=_this.positions.current=_this.getWrapperTranslate();
_this.setWrapperTranslate(_this.positions.start);
_this.times.start=(new Date()).getTime();
isScrolling=undefined;
if(params.moveStartThreshold>0) allowThresholdMove=false;
if(params.onTouchStart) _this.fireCallback(params.onTouchStart, _this);
_this.callPlugins('onTouchStartEnd');
}}
var velocityPrevPosition, velocityPrevTime;
function onTouchMove(event){
if(!_this.isTouched||params.onlyExternal) return;
if(isTouchEvent&&event.type=='mousemove') return;
var pageX=isTouchEvent ? event.targetTouches[0].pageX:(event.pageX||event.clientX);
var pageY=isTouchEvent ? event.targetTouches[0].pageY:(event.pageY||event.clientY);
if(typeof isScrolling==='undefined'&&isH){
isScrolling = !!(isScrolling||Math.abs(pageY - _this.touches.startY) > Math.abs(pageX - _this.touches.startX) );
}
if(typeof isScrolling==='undefined'&&!isH){
isScrolling = !!(isScrolling||Math.abs(pageY - _this.touches.startY) < Math.abs(pageX - _this.touches.startX) );
}
if(isScrolling){
_this.isTouched=false;
return;
}
if(event.assignedToSwiper){
_this.isTouched=false;
return;
}
event.assignedToSwiper=true;
if(params.preventLinks){
_this.allowLinks=false;
}
if(params.onSlideClick){
_this.allowSlideClick=false;
}
if(params.autoplay){
_this.stopAutoplay();
}
if(!isTouchEvent||event.touches.length==1){
if(!_this.isMoved){
_this.callPlugins('onTouchMoveStart');
if(params.loop){
_this.fixLoop();
_this.positions.start=_this.getWrapperTranslate();
}
if(params.onTouchMoveStart) _this.fireCallback(params.onTouchMoveStart, _this);
}
_this.isMoved=true;
if(event.preventDefault) event.preventDefault();
else event.returnValue=false;
_this.touches.current=isH ? pageX:pageY ;
_this.positions.current=(_this.touches.current - _this.touches.start) * params.touchRatio + _this.positions.start;
if(_this.positions.current > 0&&params.onResistanceBefore){
_this.fireCallback(params.onResistanceBefore, _this, _this.positions.current);
}
if(_this.positions.current < -maxWrapperPosition()&&params.onResistanceAfter){
_this.fireCallback(params.onResistanceAfter, _this, Math.abs(_this.positions.current + maxWrapperPosition()));
}
if(params.resistance&&params.resistance!='100%'){
if(_this.positions.current > 0){
var resistance=1 - _this.positions.current/containerSize/2;
if(resistance < 0.5)
_this.positions.current=(containerSize/2);
else
_this.positions.current=_this.positions.current * resistance;
}
if(_this.positions.current < -maxWrapperPosition()){
var diff=(_this.touches.current - _this.touches.start)*params.touchRatio + (maxWrapperPosition()+_this.positions.start);
var resistance=(containerSize+diff)/(containerSize);
var newPos=_this.positions.current-diff*(1-resistance)/2;
var stopPos=-maxWrapperPosition() - containerSize/2;
if(newPos < stopPos||resistance<=0)
_this.positions.current=stopPos;
else
_this.positions.current=newPos;
}}
if(params.resistance&&params.resistance=='100%'){
if(_this.positions.current > 0&&!(params.freeMode&&!params.freeModeFluid)){
_this.positions.current=0;
}
if((_this.positions.current) < -maxWrapperPosition()&&!(params.freeMode&&!params.freeModeFluid)){
_this.positions.current=-maxWrapperPosition();
}}
if(!params.followFinger) return;
if(!params.moveStartThreshold){
_this.setWrapperTranslate(_this.positions.current);
}else{
if(Math.abs(_this.touches.current - _this.touches.start)>params.moveStartThreshold||allowThresholdMove){
allowThresholdMove=true;
_this.setWrapperTranslate(_this.positions.current);
}else{
_this.positions.current=_this.positions.start;
}}
if(params.freeMode||params.watchActiveIndex){
_this.updateActiveSlide(_this.positions.current);
}
if(params.grabCursor){
_this.container.style.cursor='move';
_this.container.style.cursor='grabbing';
_this.container.style.cursor='-moz-grabbing';
_this.container.style.cursor='-webkit-grabbing';
}
if(!velocityPrevPosition) velocityPrevPosition=_this.touches.current;
if(!velocityPrevTime) velocityPrevTime=(new Date).getTime();
_this.velocity=(_this.touches.current - velocityPrevPosition)/((new Date).getTime() - velocityPrevTime)/2;
if(Math.abs(_this.touches.current - velocityPrevPosition)<2) _this.velocity=0;
velocityPrevPosition=_this.touches.current;
velocityPrevTime=(new Date).getTime();
_this.callPlugins('onTouchMoveEnd');
if(params.onTouchMove) _this.fireCallback(params.onTouchMove, _this);
return false;
}}
function onTouchEnd(event){
if(isScrolling){
_this.swipeReset();
}
if(params.onlyExternal||!_this.isTouched){ return; }
_this.isTouched=false;
if(params.grabCursor){
_this.container.style.cursor='move';
_this.container.style.cursor='grab';
_this.container.style.cursor='-moz-grab';
_this.container.style.cursor='-webkit-grab';
}
if(!_this.positions.current&&_this.positions.current!==0){
_this.positions.current=_this.positions.start;
}
if(params.followFinger){
_this.setWrapperTranslate(_this.positions.current);
}
_this.times.end=(new Date()).getTime();
_this.touches.diff=_this.touches.current - _this.touches.start;
_this.touches.abs=Math.abs(_this.touches.diff);
_this.positions.diff=_this.positions.current - _this.positions.start;
_this.positions.abs=Math.abs(_this.positions.diff);
var diff=_this.positions.diff;
var diffAbs=_this.positions.abs;
var timeDiff=_this.times.end - _this.times.start;
if(diffAbs < 5&&(timeDiff) < 300&&_this.allowLinks==false){
if(!params.freeMode&&diffAbs!=0){
_this.swipeReset();
}
if(params.preventLinks){
_this.allowLinks=true;
}
if(params.onSlideClick){
_this.allowSlideClick=true;
}}
setTimeout(function (){
if(params.preventLinks){
_this.allowLinks=true;
}
if(params.onSlideClick){
_this.allowSlideClick=true;
}}, 100);
var maxPosition=maxWrapperPosition();
if(!_this.isMoved&&params.freeMode){
_this.isMoved=false;
if(params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this);
_this.callPlugins('onTouchEnd');
return;
}
if(!_this.isMoved||_this.positions.current > 0||_this.positions.current < -maxPosition){
_this.swipeReset();
if(params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this);
_this.callPlugins('onTouchEnd');
return;
}
_this.isMoved=false;
if(params.freeMode){
if(params.freeModeFluid){
var momentumDuration=1000*params.momentumRatio;
var momentumDistance=_this.velocity*momentumDuration;
var newPosition=_this.positions.current + momentumDistance;
var doBounce=false;
var afterBouncePosition;
var bounceAmount=Math.abs(_this.velocity)*20*params.momentumBounceRatio;
if(newPosition < -maxPosition){
if(params.momentumBounce&&_this.support.transitions){
if(newPosition + maxPosition < -bounceAmount) newPosition=-maxPosition-bounceAmount;
afterBouncePosition=-maxPosition;
doBounce=true;
allowMomentumBounce=true;
}
else newPosition=-maxPosition;
}
if(newPosition > 0){
if(params.momentumBounce&&_this.support.transitions){
if(newPosition>bounceAmount) newPosition=bounceAmount;
afterBouncePosition=0;
doBounce=true;
allowMomentumBounce=true;
}
else newPosition=0;
}
if(_this.velocity!=0) momentumDuration=Math.abs((newPosition - _this.positions.current)/_this.velocity);
_this.setWrapperTranslate(newPosition);
_this.setWrapperTransition(momentumDuration);
if(params.momentumBounce&&doBounce){
_this.wrapperTransitionEnd(function (){
if(!allowMomentumBounce) return;
if(params.onMomentumBounce) params.onMomentumBounce(_this);
_this.setWrapperTranslate(afterBouncePosition);
_this.setWrapperTransition(300);
});
}
_this.updateActiveSlide(newPosition);
}
if(!params.freeModeFluid||timeDiff >=300) _this.updateActiveSlide(_this.positions.current);
if(params.onTouchEnd) params.onTouchEnd(_this);
_this.callPlugins('onTouchEnd');
return;
}
direction=diff < 0 ? "toNext":"toPrev";
if(direction=="toNext"&&(timeDiff <=300) ){
if(diffAbs < 30||!params.shortSwipes) _this.swipeReset();
else _this.swipeNext(true);
}
if(direction=="toPrev"&&(timeDiff <=300) ){
if(diffAbs < 30||!params.shortSwipes) _this.swipeReset();
else _this.swipePrev(true);
}
var targetSlideSize=0;
if(params.slidesPerView=='auto'){
var currentPosition=Math.abs(_this.getWrapperTranslate());
var slidesOffset=0;
var _slideSize;
for (var i=0; i<_this.slides.length; i++){
_slideSize=isH ? _this.slides[i].getWidth(true):_this.slides[i].getHeight(true);
slidesOffset+=_slideSize;
if(slidesOffset>currentPosition){
targetSlideSize=_slideSize;
break;
}}
if(targetSlideSize>containerSize) targetSlideSize=containerSize;
}else{
targetSlideSize=slideSize * params.slidesPerView;
}
if(direction=="toNext"&&(timeDiff > 300) ){
if(diffAbs >=targetSlideSize*0.5){
_this.swipeNext(true);
}else{
_this.swipeReset();
}}
if(direction=="toPrev"&&(timeDiff > 300) ){
if(diffAbs >=targetSlideSize*0.5){
_this.swipePrev(true);
}else{
_this.swipeReset();
}}
if(params.onTouchEnd) params.onTouchEnd(_this);
_this.callPlugins('onTouchEnd');
}
function noSwipingSlide(el){
var noSwiping=false;
do{
if(el.className.indexOf(params.noSwipingClass)>-1){
noSwiping=true;
}
el=el.parentElement;
} while(!noSwiping&&el.parentElement&&el.className.indexOf(params.wrapperClass)==-1);
if(!noSwiping&&el.className.indexOf(params.wrapperClass)>-1&&el.className.indexOf(params.noSwipingClass)>-1)
noSwiping=true;
return noSwiping;
}
_this.swipeNext=function(internal){
if(!internal&&params.loop) _this.fixLoop();
_this.callPlugins('onSwipeNext');
var currentPosition=_this.getWrapperTranslate();
var newPosition=currentPosition;
if(params.slidesPerView=='auto'){
for (var i=0; i<_this.snapGrid.length; i++){
if(-currentPosition >=_this.snapGrid[i]&&-currentPosition<_this.snapGrid[i+1]){
newPosition=-_this.snapGrid[i+1];
break;
}}
}else{
var groupSize=slideSize * params.slidesPerGroup;
newPosition=-(Math.floor(Math.abs(currentPosition)/Math.floor(groupSize))*groupSize + groupSize);
}
if(newPosition < - maxWrapperPosition()){
newPosition=- maxWrapperPosition();
}
if(newPosition==currentPosition){ return false; }
swipeToPosition(newPosition, 'next');
return true;
};
_this.swipePrev=function(internal){
if(!internal&&params.loop) _this.fixLoop();
if(!internal&&params.autoplay) _this.stopAutoplay();
_this.callPlugins('onSwipePrev');
var currentPosition=Math.ceil(_this.getWrapperTranslate());
var newPosition;
if(params.slidesPerView=='auto'){
newPosition=0;
for (var i=1; i<_this.snapGrid.length; i++){
if(-currentPosition==_this.snapGrid[i]){
newPosition=-_this.snapGrid[i-1];
break;
}
if(-currentPosition > _this.snapGrid[i]&&-currentPosition<_this.snapGrid[i+1]){
newPosition=-_this.snapGrid[i];
break;
}}
}else{
var groupSize=slideSize * params.slidesPerGroup;
newPosition=-(Math.ceil(-currentPosition/groupSize)-1)*groupSize;
}
if(newPosition > 0) newPosition=0;
if(newPosition==currentPosition){
return false;
}
swipeToPosition(newPosition, 'prev');
return true;
};
_this.swipeReset=function(){
_this.callPlugins('onSwipeReset');
var currentPosition=_this.getWrapperTranslate();
var groupSize=slideSize * params.slidesPerGroup;
var newPosition;
var maxPosition=-maxWrapperPosition();
if(params.slidesPerView=='auto'){
newPosition=0;
for (var i=0; i<_this.snapGrid.length; i++){
if(-currentPosition===_this.snapGrid[i]) return;
if(-currentPosition >=_this.snapGrid[i]&&-currentPosition<_this.snapGrid[i+1]){
if(_this.positions.diff>0) newPosition=-_this.snapGrid[i+1];
else newPosition=-_this.snapGrid[i];
break;
}}
if(-currentPosition >=_this.snapGrid[_this.snapGrid.length-1]) newPosition=-_this.snapGrid[_this.snapGrid.length-1];
if(currentPosition <=-maxWrapperPosition()) newPosition=-maxWrapperPosition();
}else{
newPosition=currentPosition<0 ? Math.round(currentPosition/groupSize)*groupSize:0;
}
if(params.scrollContainer){
newPosition=currentPosition<0 ? currentPosition:0;
}
if(newPosition < -maxWrapperPosition()){
newPosition=-maxWrapperPosition();
}
if(params.scrollContainer&&(containerSize>slideSize)){
newPosition=0;
}
if(newPosition==currentPosition){ return false; }
swipeToPosition(newPosition, 'reset');
return true;
};
_this.swipeTo=function(index, speed, runCallbacks){
index=parseInt(index, 10);
_this.callPlugins('onSwipeTo', {index:index, speed:speed});
if(params.loop) index=index + _this.loopedSlides;
var currentPosition=_this.getWrapperTranslate();
if(index > (_this.slides.length-1)||index < 0){
return;
}
var newPosition;
if(params.slidesPerView=='auto'){
newPosition=-_this.slidesGrid[ index ];
}else{
newPosition=-index*slideSize;
}
if(newPosition < - maxWrapperPosition()){
newPosition=- maxWrapperPosition();
}
if(newPosition==currentPosition){
return false;
}
runCallbacks=runCallbacks===false ? false:true;
swipeToPosition(newPosition, 'to', {index:index, speed:speed, runCallbacks:runCallbacks});
return true;
};
function swipeToPosition(newPosition, action, toOptions){
var speed=(action=='to'&&toOptions.speed >=0) ? toOptions.speed:params.speed;
var timeOld=+ new Date();
if(_this.support.transitions||!params.DOMAnimation){
_this.setWrapperTranslate(newPosition);
_this.setWrapperTransition(speed);
}else{
var currentPosition=_this.getWrapperTranslate();
var animationStep=Math.ceil((newPosition - currentPosition)/speed*(1000/60));
var direction=currentPosition > newPosition ? 'toNext':'toPrev';
var condition=direction=='toNext' ? currentPosition > newPosition:currentPosition < newPosition;
if(_this._DOMAnimating) return;
anim();
}
function anim(){
var timeNew=+ new Date();
var time=timeNew - timeOld;
currentPosition +=animationStep * time / (1000/60);
condition=direction=='toNext' ? currentPosition > newPosition:currentPosition < newPosition;
if(condition){
_this.setWrapperTranslate(Math.round(currentPosition));
_this._DOMAnimating=true;
window.setTimeout(function(){
anim();
}, 1000 / 60);
}else{
if(params.onSlideChangeEnd){
_this.fireCallback(params.onSlideChangeEnd, _this);
}
_this.setWrapperTranslate(newPosition);
_this._DOMAnimating=false;
}}
_this.updateActiveSlide(newPosition);
if(params.onSlideNext&&action=='next'){
_this.fireCallback(params.onSlideNext, _this, newPosition);
}
if(params.onSlidePrev&&action=='prev'){
_this.fireCallback(params.onSlidePrev, _this, newPosition);
}
if(params.onSlideReset&&action=='reset'){
_this.fireCallback(params.onSlideReset, _this, newPosition);
}
if(action=='next'||action=='prev'||(action=='to'&&toOptions.runCallbacks==true))
slideChangeCallbacks(action);
}
_this._queueStartCallbacks=false;
_this._queueEndCallbacks=false;
function slideChangeCallbacks(direction){
_this.callPlugins('onSlideChangeStart');
if(params.onSlideChangeStart){
if(params.queueStartCallbacks&&_this.support.transitions){
if(_this._queueStartCallbacks){
return;
}
_this._queueStartCallbacks=true;
_this.fireCallback(params.onSlideChangeStart, _this, direction);
_this.wrapperTransitionEnd(function(){
_this._queueStartCallbacks=false;
});
}
else _this.fireCallback(params.onSlideChangeStart, _this, direction);
}
if(params.onSlideChangeEnd){
if(_this.support.transitions){
if(params.queueEndCallbacks){
if(_this._queueEndCallbacks){
return;
}
_this._queueEndCallbacks=true;
_this.wrapperTransitionEnd(function(swiper){
setTimeout(function(){ if(params.loop) _this.fixLoop(); },50);
_this.fireCallback(params.onSlideChangeEnd, swiper, direction);
});
}
else _this.wrapperTransitionEnd(function(swiper){
_this.fireCallback(params.onSlideChangeEnd, swiper, direction);
});
}else{
if(!params.DOMAnimation){
setTimeout(function(){
_this.fireCallback(params.onSlideChangeStart, _this, direction);
},10);
}}
}}
_this.updateActiveSlide=function(position){
if(!_this.initialized) return;
if(_this.slides.length==0) return;
_this.previousIndex=_this.activeIndex;
if(typeof position=='undefined') position=_this.getWrapperTranslate();
if(position>0) position=0;
if(params.slidesPerView=='auto'){
var slidesOffset=0;
_this.activeIndex=_this.slidesGrid.indexOf(-position);
if(_this.activeIndex<0){
for (var i=0; i<_this.slidesGrid.length-1; i++){
if(-position>_this.slidesGrid[i]&&-position<_this.slidesGrid[i+1]){
break;
}}
var leftDistance=Math.abs(_this.slidesGrid[i] + position);
var rightDistance=Math.abs(_this.slidesGrid[i+1] + position);
if(leftDistance<=rightDistance) _this.activeIndex=i;
else _this.activeIndex=i+1;
}}else{
_this.activeIndex=Math[params.visibilityFullFit ? 'ceil':'round'](-position/slideSize);
}
if(_this.activeIndex==_this.slides.length) _this.activeIndex=_this.slides.length - 1;
if(_this.activeIndex < 0) _this.activeIndex=0;
if(!_this.slides[_this.activeIndex]) return;
_this.calcVisibleSlides(position);
var activeClassRegexp=new RegExp("\\s*" + params.slideActiveClass);
var inViewClassRegexp=new RegExp("\\s*" + params.slideVisibleClass);
for (var i=0; i < _this.slides.length; i++){
_this.slides[ i ].className=_this.slides[ i ].className.replace(activeClassRegexp, '').replace(inViewClassRegexp, '');
if(_this.visibleSlides.indexOf(_this.slides[ i ])>=0){
_this.slides[ i ].className +=' ' + params.slideVisibleClass;
}}
_this.slides[ _this.activeIndex ].className +=' ' + params.slideActiveClass;
if(params.loop){
var ls=_this.loopedSlides;
_this.activeLoopIndex=_this.activeIndex - ls;
if(_this.activeLoopIndex >=_this.slides.length - ls*2){
_this.activeLoopIndex=_this.slides.length - ls*2 - _this.activeLoopIndex;
}
if(_this.activeLoopIndex<0){
_this.activeLoopIndex=_this.slides.length - ls*2 + _this.activeLoopIndex;
}}else{
_this.activeLoopIndex=_this.activeIndex;
}
if(params.pagination){
_this.updatePagination(position);
}};
_this.createPagination=function (firstInit){
if(params.paginationClickable&&_this.paginationButtons){
removePaginationEvents();
}
var paginationHTML="";
var numOfSlides=_this.slides.length;
var numOfButtons=numOfSlides;
if(params.loop){ numOfButtons -=_this.loopedSlides*2; }
for (var i=0; i < numOfButtons; i++){
paginationHTML +='<'+params.paginationElement+' class="'+params.paginationElementClass+'"></'+params.paginationElement+'>';
}
_this.paginationContainer=params.pagination.nodeType ? params.pagination:$$(params.pagination)[0];
_this.paginationContainer.innerHTML=paginationHTML;
_this.paginationButtons=$$('.'+params.paginationElementClass, _this.paginationContainer);
if(!firstInit){
_this.updatePagination();
}
_this.callPlugins('onCreatePagination');
if(params.paginationClickable){
addPaginationEvents();
}};
function removePaginationEvents(){
var pagers=_this.paginationButtons;
for (var i=0; i<pagers.length; i++){
_this.h.removeEventListener(pagers[i], 'click', paginationClick);
}}
function addPaginationEvents(){
var pagers=_this.paginationButtons;
for (var i=0; i<pagers.length; i++){
_this.h.addEventListener(pagers[i], 'click', paginationClick);
}}
function paginationClick(e){
var index;
var target=e.target||e.srcElement;
var pagers=_this.paginationButtons;
for (var i=0; i<pagers.length; i++){
if(target===pagers[i]) index=i;
}
_this.swipeTo(index);
}
_this.updatePagination=function(position){
if(!params.pagination) return;
if(_this.slides.length<1) return;
var activePagers=$$('.'+params.paginationActiveClass, _this.paginationContainer);
if(!activePagers) return;
var pagers=_this.paginationButtons;
if(pagers.length==0) return;
for (var i=0; i < pagers.length; i++){
pagers[i].className=params.paginationElementClass;
}
var indexOffset=params.loop ? _this.loopedSlides:0;
if(params.paginationAsRange){
if(!_this.visibleSlides) _this.calcVisibleSlides(position);
var visibleIndexes=[];
for (var i=0; i < _this.visibleSlides.length; i++){
var visIndex=_this.slides.indexOf(_this.visibleSlides[i]) - indexOffset
if(params.loop&&visIndex<0){
visIndex=_this.slides.length - _this.loopedSlides*2 + visIndex;
}
if(params.loop&&visIndex>=_this.slides.length-_this.loopedSlides*2){
visIndex=_this.slides.length - _this.loopedSlides*2 - visIndex;
visIndex=Math.abs(visIndex);
}
visibleIndexes.push(visIndex);
}
for (i=0; i<visibleIndexes.length; i++){
if(pagers[ visibleIndexes[i] ]) pagers[ visibleIndexes[i] ].className +=' ' + params.paginationVisibleClass;
}
if(params.loop){
pagers[ _this.activeLoopIndex ].className +=' ' + params.paginationActiveClass;
}else{
pagers[ _this.activeIndex ].className +=' ' + params.paginationActiveClass;
}}else{
if(params.loop){
pagers[ _this.activeLoopIndex ].className+=' '+params.paginationActiveClass+' '+params.paginationVisibleClass;
}else{
pagers[ _this.activeIndex ].className+=' '+params.paginationActiveClass+' '+params.paginationVisibleClass;
}}
};
_this.calcVisibleSlides=function(position){
var visibleSlides=[];
var _slideLeft=0, _slideSize=0, _slideRight=0;
if(isH&&_this.wrapperLeft>0) position=position+_this.wrapperLeft;
if(!isH&&_this.wrapperTop>0) position=position+_this.wrapperTop;
for (var i=0; i<_this.slides.length; i++){
_slideLeft +=_slideSize;
if(params.slidesPerView=='auto')
_slideSize=isH ? _this.h.getWidth(_this.slides[i],true):_this.h.getHeight(_this.slides[i],true);
else _slideSize=slideSize;
_slideRight=_slideLeft + _slideSize;
var isVisibile=false;
if(params.visibilityFullFit){
if(_slideLeft >=-position&&_slideRight <=-position+containerSize) isVisibile=true;
if(_slideLeft <=-position&&_slideRight >=-position+containerSize) isVisibile=true;
}else{
if(_slideRight > -position&&_slideRight <=((-position+containerSize))) isVisibile=true;
if(_slideLeft >=-position&&_slideLeft < ((-position+containerSize))) isVisibile=true;
if(_slideLeft < -position&&_slideRight > ((-position+containerSize))) isVisibile=true;
}
if(isVisibile) visibleSlides.push(_this.slides[i]);
}
if(visibleSlides.length==0) visibleSlides=[ _this.slides[ _this.activeIndex ] ];
_this.visibleSlides=visibleSlides;
};
_this.autoPlayIntervalId=undefined;
_this.startAutoplay=function (){
if(typeof _this.autoPlayIntervalId!=='undefined') return false;
if(params.autoplay&&!params.loop){
_this.autoPlayIntervalId=setInterval(function(){
if(!_this.swipeNext(true)) _this.swipeTo(0);
}, params.autoplay);
}
if(params.autoplay&&params.loop){
_this.autoPlayIntervalId=setInterval(function(){
_this.swipeNext();
}, params.autoplay);
}
_this.callPlugins('onAutoplayStart');
};
_this.stopAutoplay=function (){
if(_this.autoPlayIntervalId) clearInterval(_this.autoPlayIntervalId);
_this.autoPlayIntervalId=undefined;
_this.callPlugins('onAutoplayStop');
};
_this.loopCreated=false;
_this.removeLoopedSlides=function(){
if(_this.loopCreated){
for (var i=0; i<_this.slides.length; i++){
if(_this.slides[i].getData('looped')===true) _this.wrapper.removeChild(_this.slides[i]);
}}
};
_this.createLoop=function(){
if(_this.slides.length==0) return;
_this.loopedSlides=params.slidesPerView + params.loopAdditionalSlides;
if(_this.loopedSlides > _this.slides.length){
_this.loopedSlides=_this.slides.length;
}
var slideFirstHTML='',
slideLastHTML='',
i;
for (i=0; i<_this.loopedSlides; i++){
slideFirstHTML +=_this.slides[i].outerHTML;
}
for (i=_this.slides.length-_this.loopedSlides; i<_this.slides.length; i++){
slideLastHTML +=_this.slides[i].outerHTML;
}
wrapper.innerHTML=slideLastHTML + wrapper.innerHTML + slideFirstHTML;
_this.loopCreated=true;
_this.calcSlides();
for (i=0; i<_this.slides.length; i++){
if(i<_this.loopedSlides||i>=_this.slides.length-_this.loopedSlides) _this.slides[i].setData('looped', true);
}
_this.callPlugins('onCreateLoop');
};
_this.fixLoop=function(){
if(_this.params.loop==true){
var newIndex;
if(_this.activeIndex < _this.loopedSlides){
newIndex=_this.slides.length - _this.loopedSlides*3 + _this.activeIndex;
_this.swipeTo(newIndex, 0, false);
}
else if(_this.activeIndex > _this.slides.length - params.slidesPerView*2){
newIndex=-_this.slides.length + _this.activeIndex + _this.loopedSlides
_this.swipeTo(newIndex, 0, false);
}}
};
_this.loadSlides=function(){
var slidesHTML='';
_this.activeLoaderIndex=0;
var slides=params.loader.slides;
var slidesToLoad=params.loader.loadAllSlides ? slides.length:params.slidesPerView*(1+params.loader.surroundGroups);
for (var i=0; i< slidesToLoad; i++){
if(params.loader.slidesHTMLType=='outer') slidesHTML+=slides[i];
else {
slidesHTML+='<'+params.slideElement+' class="'+params.slideClass+'" data-swiperindex="'+i+'">'+slides[i]+'</'+params.slideElement+'>';
}}
_this.wrapper.innerHTML=slidesHTML;
_this.calcSlides(true);
if(!params.loader.loadAllSlides){
_this.wrapperTransitionEnd(_this.reloadSlides, true);
}};
_this.reloadSlides=function(){
var slides=params.loader.slides;
var newActiveIndex=parseInt(_this.activeSlide().data('swiperindex'),10);
if(newActiveIndex<0||newActiveIndex>slides.length-1){
return;
}
_this.activeLoaderIndex=newActiveIndex;
var firstIndex=Math.max(0, newActiveIndex - params.slidesPerView*params.loader.surroundGroups);
var lastIndex=Math.min(newActiveIndex+params.slidesPerView*(1+params.loader.surroundGroups)-1, slides.length-1);
if(newActiveIndex>0){
var newTransform=-slideSize*(newActiveIndex-firstIndex);
_this.setWrapperTranslate(newTransform);
_this.setWrapperTransition(0);
}
if(params.loader.logic==='reload'){
_this.wrapper.innerHTML='';
var slidesHTML='';
for (var i=firstIndex; i<=lastIndex; i++){
slidesHTML +=params.loader.slidesHTMLType=='outer' ? slides[i]:'<'+params.slideElement+' class="'+params.slideClass+'" data-swiperindex="'+i+'">'+slides[i]+'</'+params.slideElement+'>';
}
_this.wrapper.innerHTML=slidesHTML;
}else{
var minExistIndex=1000;
var maxExistIndex=0;
for (var i=0; i<_this.slides.length; i++){
var index=_this.slides[i].data('swiperindex');
if(index<firstIndex||index>lastIndex){
_this.wrapper.removeChild(_this.slides[i]);
}else{
minExistIndex=Math.min(index, minExistIndex);
maxExistIndex=Math.max(index, maxExistIndex);
}}
for (var i=firstIndex; i<=lastIndex; i++){
if(i<minExistIndex){
var newSlide=document.createElement(params.slideElement);
newSlide.className=params.slideClass;
newSlide.setAttribute('data-swiperindex',i);
newSlide.innerHTML=slides[i];
_this.wrapper.insertBefore(newSlide, _this.wrapper.firstChild);
}
if(i>maxExistIndex){
var newSlide=document.createElement(params.slideElement);
newSlide.className=params.slideClass;
newSlide.setAttribute('data-swiperindex',i);
newSlide.innerHTML=slides[i];
_this.wrapper.appendChild(newSlide);
}}
}
_this.reInit(true);
};
function makeSwiper(){
_this.calcSlides();
if(params.loader.slides.length>0&&_this.slides.length==0){
_this.loadSlides();
}
if(params.loop){
_this.createLoop();
}
_this.init();
initEvents();
if(params.pagination&&params.createPagination){
_this.createPagination(true);
}
if(params.loop||params.initialSlide>0){
_this.swipeTo(params.initialSlide, 0, false);
}else{
_this.updateActiveSlide(0);
}
if(params.autoplay){
_this.startAutoplay();
}}
makeSwiper();
};
NectarSwiper.prototype={
plugins:{},
wrapperTransitionEnd:function(callback, permanent){
var a=this,
el=a.wrapper,
events=['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
i;
function fireCallBack(){
callback(a);
if(a.params.queueEndCallbacks) a._queueEndCallbacks=false;
if(!permanent){
for (i=0; i<events.length; i++){
a.h.removeEventListener(el, events[i], fireCallBack);
}}
}
if(callback){
for (i=0; i<events.length; i++){
a.h.addEventListener(el, events[i], fireCallBack);
}}
},
getWrapperTranslate:function (axis){
var el=this.wrapper,
matrix, curTransform, curStyle, transformMatrix;
if(typeof axis=='undefined'){
axis=this.params.mode=='horizontal' ? 'x':'y';
}
curStyle=window.getComputedStyle(el, null);
if(window.WebKitCSSMatrix){
transformMatrix=new WebKitCSSMatrix(curStyle.webkitTransform);
}else{
transformMatrix=curStyle.MozTransform||curStyle.OTransform||curStyle.MsTransform||curStyle.msTransform||curStyle.transform||curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
matrix=transformMatrix.toString().split(',');
}
if(this.support.transforms&&this.params.useCSS3Transforms){
if(axis=='x'){
if(window.WebKitCSSMatrix)
curTransform=transformMatrix.m41;
else if(matrix.length==16)
curTransform=parseFloat(matrix[12]);
else
curTransform=parseFloat(matrix[4]);
}
if(axis=='y'){
if(window.WebKitCSSMatrix)
curTransform=transformMatrix.m42;
else if(matrix.length==16)
curTransform=parseFloat(matrix[13]);
else
curTransform=parseFloat(matrix[5]);
}}else{
if(axis=='x') curTransform=parseFloat(el.style.left,10)||0;
if(axis=='y') curTransform=parseFloat(el.style.top,10)||0;
}
return curTransform||0;
},
setWrapperTranslate:function (x, y, z){
var es=this.wrapper.style,
coords={x: 0, y: 0, z: 0},
translate;
if(arguments.length==3){
coords.x=x;
coords.y=y;
coords.z=z;
}else{
if(typeof y=='undefined'){
y=this.params.mode=='horizontal' ? 'x':'y';
}
coords[y]=x;
}
if(this.support.transforms&&this.params.useCSS3Transforms){
translate=this.support.transforms3d ? 'translate3d(' + coords.x + 'px, ' + coords.y + 'px, ' + coords.z + 'px)':'translate(' + coords.x + 'px, ' + coords.y + 'px)';
es.webkitTransform=es.MsTransform=es.msTransform=es.MozTransform=es.OTransform=es.transform=translate;
}else{
es.left=coords.x + 'px';
es.top=coords.y + 'px';
}
this.callPlugins('onSetWrapperTransform', coords);
if(this.params.onSetWrapperTransform) this.fireCallback(this.params.onSetWrapperTransform, this, coords);
},
setWrapperTransition:function (duration){
var es=this.wrapper.style;
es.webkitTransitionDuration=es.MsTransitionDuration=es.msTransitionDuration=es.MozTransitionDuration=es.OTransitionDuration=es.transitionDuration=(duration / 1000) + 's';
this.callPlugins('onSetWrapperTransition', {duration: duration});
if(this.params.onSetWrapperTransition) this.fireCallback(this.params.onSetWrapperTransition, this, duration);
},
h:{
getWidth: function (el, outer){
var width=window.getComputedStyle(el, null).getPropertyValue('width');
var returnWidth=parseFloat(width);
if(isNaN(returnWidth)||width.indexOf('%')>0){
returnWidth=el.offsetWidth - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-left')) - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-right'));
}
if(outer) returnWidth +=parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-left')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-right'));
return returnWidth;
},
getHeight: function(el, outer){
if(outer) return el.offsetHeight;
var height=window.getComputedStyle(el, null).getPropertyValue('height');
var returnHeight=parseFloat(height);
if(isNaN(returnHeight)||height.indexOf('%')>0){
returnHeight=el.offsetHeight - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-top')) - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-bottom'));
}
if(outer) returnHeight +=parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-bottom'));
return returnHeight;
},
getOffset: function(el){
var box=el.getBoundingClientRect();
var body=document.body;
var clientTop=el.clientTop||body.clientTop||0;
var clientLeft=el.clientLeft||body.clientLeft||0;
var scrollTop=window.pageYOffset||el.scrollTop;
var scrollLeft=window.pageXOffset||el.scrollLeft;
if(document.documentElement&&!window.pageYOffset){
scrollTop=document.documentElement.scrollTop;
scrollLeft=document.documentElement.scrollLeft;
}
return {
top: box.top  + scrollTop  - clientTop,
left: box.left + scrollLeft - clientLeft
};},
windowWidth:function(){
if(window.innerWidth){ return window.innerWidth; }
else if(document.documentElement&&document.documentElement.clientWidth){ return document.documentElement.clientWidth; }},
windowHeight:function(){
if(window.innerHeight){ return window.innerHeight; }
else if(document.documentElement&&document.documentElement.clientHeight){ return document.documentElement.clientHeight; }},
windowScroll:function(){
var left=0, top=0;
if(typeof pageYOffset!='undefined'){
return {
left: window.pageXOffset,
top: window.pageYOffset
};}
else if(document.documentElement){
return {
left: document.documentElement.scrollLeft,
top: document.documentElement.scrollTop
};}},
addEventListener:function (el, event, listener, useCapture){
if(typeof useCapture=='undefined'){
useCapture=false;
}
if(el.addEventListener){
el.addEventListener(event, listener, useCapture);
}
else if(el.attachEvent){
el.attachEvent('on' + event, listener);
}},
removeEventListener:function (el, event, listener, useCapture){
if(typeof useCapture=='undefined'){
useCapture=false;
}
if(el.removeEventListener){
el.removeEventListener(event, listener, useCapture);
}
else if(el.detachEvent){
el.detachEvent('on' + event, listener);
}}
},
setTransform:function (el, transform){
var es=el.style;
es.webkitTransform=es.MsTransform=es.msTransform=es.MozTransform=es.OTransform=es.transform=transform;
},
setTranslate:function (el, translate){
var es=el.style;
var pos={
x:translate.x||0,
y:translate.y||0,
z:translate.z||0
};
var transformString=this.support.transforms3d ? 'translate3d('+(pos.x)+'px,'+(pos.y)+'px,'+(pos.z)+'px)':'translate('+(pos.x)+'px,'+(pos.y)+'px)';
es.webkitTransform=es.MsTransform=es.msTransform=es.MozTransform=es.OTransform=es.transform=transformString;
if(!this.support.transforms){
es.left=pos.x+'px';
es.top=pos.y+'px';
}},
setTransition:function (el, duration){
var es=el.style;
es.webkitTransitionDuration=es.MsTransitionDuration=es.msTransitionDuration=es.MozTransitionDuration=es.OTransitionDuration=es.transitionDuration=duration+'ms';
},
support: {
touch:(window.Modernizr&&Modernizr.touch===true)||(function(){
return !!(("ontouchstart" in window)||window.DocumentTouch&&document instanceof DocumentTouch);
})(),
transforms3d:(window.Modernizr&&Modernizr.csstransforms3d===true)||(function(){
var div=document.createElement('div').style;
return ("webkitPerspective" in div||"MozPerspective" in div||"OPerspective" in div||"MsPerspective" in div||"perspective" in div);
})(),
transforms:(window.Modernizr&&Modernizr.csstransforms===true)||(function(){
var div=document.createElement('div').style;
return ('transform' in div||'WebkitTransform' in div||'MozTransform' in div||'msTransform' in div||'MsTransform' in div||'OTransform' in div);
})(),
transitions:(window.Modernizr&&Modernizr.csstransitions===true)||(function(){
var div=document.createElement('div').style;
return ('transition' in div||'WebkitTransition' in div||'MozTransition' in div||'msTransition' in div||'MsTransition' in div||'OTransition' in div);
})()
},
browser:{
ie8:(function(){
var rv=-1;
if(navigator.appName=='Microsoft Internet Explorer'){
var ua=navigator.userAgent;
var re=new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
if(re.exec(ua)!=null)
rv=parseFloat(RegExp.$1);
}
return rv!=-1&&rv < 9;
})(),
ie10:window.navigator.msPointerEnabled
}};
if(window.jQuery||window.Zepto){
(function($){
if(!jQuery().nectarswiper){
$.fn.nectarswiper=function(params){
var s=new NectarSwiper($(this)[0], params);
$(this).data('swiper',s);
return s;
};}})(window.jQuery||window.Zepto);
}
if(typeof(module)!=='undefined'){
module.exports=NectarSwiper;
}}
NectarSwiper.prototype.plugins.progress=function(a){function b(){for(var b=0;b<a.slides.length;b++){var c=a.slides[b];c.progressSlideSize=e?a.h.getWidth(c):a.h.getHeight(c),c.progressSlideOffset="offsetLeft"in c?e?c.offsetLeft:c.offsetTop:e?c.getOffset().left-a.h.getOffset(a.container).left:c.getOffset().top-a.h.getOffset(a.container).top}d=e?a.h.getWidth(a.wrapper)+a.wrapperLeft+a.wrapperRight-a.width:a.h.getHeight(a.wrapper)+a.wrapperTop+a.wrapperBottom-a.height}function c(b){var c,b=b||{x:0,y:0,z:0};c=1==a.params.centeredSlides?e?-b.x+a.width/2:-b.y+a.height/2:e?-b.x:-b.y;for(var f=0;f<a.slides.length;f++){var g=a.slides[f],h=1==a.params.centeredSlides?g.progressSlideSize/2:0,i=(c-g.progressSlideOffset-h)/g.progressSlideSize;g.progress=i}a.progress=e?-b.x/d:-b.y/d,a.params.onProgressChange&&a.fireCallback(a.params.onProgressChange,a)}var d,e="horizontal"==a.params.mode,f={onFirstInit:function(){b(),c({x:a.getWrapperTranslate("x"),y:a.getWrapperTranslate("y")})},onInit:function(){b()},onSetWrapperTransform:function(a){c(a)}};return f};
!function(n){"function"==typeof define&&define.amd?define(["jquery"],function(e){return n(e)}):"object"==typeof module&&"object"==typeof module.exports?module.exports=n(require("jquery")):n(jQuery)}(function(n){function e(n){var e=7.5625,t=2.75;return n<1/t?e*n*n:n<2/t?e*(n-=1.5/t)*n+.75:n<2.5/t?e*(n-=2.25/t)*n+.9375:e*(n-=2.625/t)*n+.984375}void 0!==n.easing&&(n.easing.jswing=n.easing.swing);var t=Math.pow,u=Math.sqrt,r=Math.sin,i=Math.cos,a=Math.PI,o=1.70158,c=1.525*o,s=2*a/3,f=2*a/4.5;return n.extend(n.easing,{def:"easeOutQuad",swing:function(e){return n.easing[n.easing.def](e)},easeInQuad:function(n){return n*n},easeOutQuad:function(n){return 1-(1-n)*(1-n)},easeInOutQuad:function(n){return n<.5?2*n*n:1-t(-2*n+2,2)/2},easeInCubic:function(n){return n*n*n},easeOutCubic:function(n){return 1-t(1-n,3)},easeInOutCubic:function(n){return n<.5?4*n*n*n:1-t(-2*n+2,3)/2},easeInQuart:function(n){return n*n*n*n},easeOutQuart:function(n){return 1-t(1-n,4)},easeInOutQuart:function(n){return n<.5?8*n*n*n*n:1-t(-2*n+2,4)/2},easeInQuint:function(n){return n*n*n*n*n},easeOutQuint:function(n){return 1-t(1-n,5)},easeInOutQuint:function(n){return n<.5?16*n*n*n*n*n:1-t(-2*n+2,5)/2},easeInSine:function(n){return 1-i(n*a/2)},easeOutSine:function(n){return r(n*a/2)},easeInOutSine:function(n){return-(i(a*n)-1)/2},easeInExpo:function(n){return 0===n?0:t(2,10*n-10)},easeOutExpo:function(n){return 1===n?1:1-t(2,-10*n)},easeInOutExpo:function(n){return 0===n?0:1===n?1:n<.5?t(2,20*n-10)/2:(2-t(2,-20*n+10))/2},easeInCirc:function(n){return 1-u(1-t(n,2))},easeOutCirc:function(n){return u(1-t(n-1,2))},easeInOutCirc:function(n){return n<.5?(1-u(1-t(2*n,2)))/2:(u(1-t(-2*n+2,2))+1)/2},easeInElastic:function(n){return 0===n?0:1===n?1:-t(2,10*n-10)*r((10*n-10.75)*s)},easeOutElastic:function(n){return 0===n?0:1===n?1:t(2,-10*n)*r((10*n-.75)*s)+1},easeInOutElastic:function(n){return 0===n?0:1===n?1:n<.5?-t(2,20*n-10)*r((20*n-11.125)*f)/2:t(2,-20*n+10)*r((20*n-11.125)*f)/2+1},easeInBack:function(n){return 2.70158*n*n*n-o*n*n},easeOutBack:function(n){return 1+2.70158*t(n-1,3)+o*t(n-1,2)},easeInOutBack:function(n){return n<.5?t(2*n,2)*(7.189819*n-c)/2:(t(2*n-2,2)*((c+1)*(2*n-2)+c)+2)/2},easeInBounce:function(n){return 1-e(1-n)},easeOutBounce:e,easeInOutBounce:function(n){return n<.5?(1-e(1-2*n))/2:(1+e(2*n-1))/2}}),n});
jQuery(document).ready(function($){
"use strict";
Array.prototype.nectarGetKeyByValue=function(value){
for(var prop in this){
if(this.hasOwnProperty(prop) ){
if(this[ prop ]===value)
return prop;
}}
}
var doneVideoInit=false;
var $captionTrans=0;
var $loading_bg_storage=$('.first-section .nectar-slider-loading').css('background-image');
function transparentheaderLoadingCalcs(){
if($('body #header-outer[data-transparent-header="true"]').length > 0){
if($('#page-header-bg').length===0){
$('.nectar-slider-wrap.first-section .swiper-container .swiper-wrapper .swiper-slide').addClass('not-loaded');
if($('.container-wrap .main-content > .row > div').find('.nectar-slider-wrap.first-section').length > 0){
$('.container-wrap .main-content > .row > div').first().css('padding-top','0');
}
if($('#header-outer[data-remove-border="true"]').length===0){
if($('.first-section .nectar-slider-wrap[data-flexible-height="true"]').length===0 &&
$('.first-section .nectar-slider-wrap[data-fullscreen="true"]').length===0){
$('.first-section .nectar-slider-loading').css({
'top': $('#header-space').height(),
'background-position':'center ' + ((($('.first-section .swiper-container').height()/2) + 15) - $('#header-space').height()) +'px'
});
$('.first-section .nectar-slider-wrap .nectar-slider-loading .loading-icon').css({
'opacity':'1',
'height':$('.first-section .swiper-container').height() - $('#header-space').height() + 'px'
});
}else{
$loading_bg_storage=$('.first-section .nectar-slider-loading').css('background-image');
$('.first-section .nectar-slider-loading').css({
'top': $('#header-space').height(),
'background-image': 'none'
});
}}
}}
}
transparentheaderLoadingCalcs();
var $onMobileBrowser=navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/);
var $smoothSrollWidth=0;
var nectarSliderKenBurns;
function prevArrowAnimation(e){
if($(this).hasClass('inactive')){
return false;
}
var i=e.data.i;
var $that=$(this);
var $timeout;
if($(this).parents('.swiper-container').attr('data-loop')!='true'){
if($(this).parents('.swiper-container').find('.swiper-slide-active').index()+1==1&&!$('html').hasClass('no-video')){
clearTimeout($timeout);
$timeout=setTimeout(function(){ $that.removeClass('inactive'); } ,700);
if($(this).parents('.nectar-slider-wrap ').attr('data-transition')!='fade'){
$that=$(this);
$(this).parents('.swiper-container').animate({
'left':25+'px'
},250,function(){
$that.parents('.swiper-container').stop().animate({
'left':0+'px'
},250);
});
}
$(this).addClass('inactive');
}}
e.preventDefault();
$nectarSliders[i].swipePrev();
if($(this).parents('.nectar-slider-wrap ').attr('data-transition')==='fade'){
clearTimeout($timeout);
$timeout=setTimeout(function(){ $that.removeClass('inactive'); } ,800);
$(this).addClass('inactive');
}}
function nextArrowAnimation(e){
if($(this).hasClass('inactive')){
return false;
}
var i=e.data.i;
var $that=$(this);
var $slideNum=$(this).parents('.swiper-container').find('.swiper-wrapper > div').length;
var $timeout;
if($(this).parents('.swiper-container').attr('data-loop')!='true'){
if($(this).parents('.swiper-container').find('.swiper-slide-active').index()+1==$slideNum&&!$('html').hasClass('no-video')){
clearTimeout($timeout);
$timeout=setTimeout(function(){ $that.removeClass('inactive'); } ,700);
if($(this).parents('.nectar-slider-wrap ').attr('data-transition')!='fade'){
$that=$(this);
$(this).parents('.swiper-container').animate({
'left':-25+'px'
},250,function(){
$that.parents('.swiper-container').stop().animate({
'left':0+'px'
},250);
});
}
$(this).addClass('inactive');
}}
e.preventDefault();
$nectarSliders[i].swipeNext();
if($(this).parents('.nectar-slider-wrap ').attr('data-transition')==='fade'){
clearTimeout($timeout);
$timeout=setTimeout(function(){ $that.removeClass('inactive'); } ,800);
$(this).addClass('inactive');
}}
function prevArrowAnimationWithPreview(e){
if($(this).hasClass('inactive')){
return false;
}
var i=e.data.i;
var $that=$(this);
var $timeout;
clearTimeout($timeout);
$timeout=setTimeout(function(){ $that.removeClass('inactive'); } ,1000);
var $timeout2;
clearTimeout($timeout2);
$timeout2=setTimeout(function(){ $that.removeClass('stophover'); } ,500);
$(this).addClass('inactive').addClass('stophover');
$(this).parents('.nectar-slider-wrap').find('.swiper-slide-active').prev('.swiper-slide').removeClass('prev-high-z-index');
$(this).parents('.nectar-slider-wrap').find('.swiper-slide-active').stop().removeClass('prev-move');
e.preventDefault();
$nectarSliders[i].swipePrev();
}
function nextArrowAnimationWithPreview(e){
if($(this).hasClass('inactive')){
return false;
}
var i=e.data.i;
var $that=$(this);
var $timeout;
clearTimeout($timeout);
$timeout=setTimeout(function(){ $that.removeClass('inactive'); } ,1000);
var $timeout2;
clearTimeout($timeout2);
$timeout2=setTimeout(function(){ $that.removeClass('stophover'); } ,500);
$(this).addClass('inactive').addClass('stophover');
$(this).parents('.nectar-slider-wrap').find('.swiper-slide-active').next('.swiper-slide').removeClass('high-z-index');
$(this).parents('.nectar-slider-wrap').find('.swiper-slide-active').stop().removeClass('next-move');
e.preventDefault();
$nectarSliders[i].swipeNext();
}
function darkSlideNextMouseOver(currentSlider, activeIndex){
var $indexAdd=($(currentSlider).find('.swiper-container').attr('data-loop')==='true') ? 2:2;
if($(currentSlider).find('.swiper-slide:nth-child('+ (activeIndex + 1) +')').attr('data-color-scheme')==='dark'){
if($(currentSlider).find('.swiper-slide:nth-child('+ (activeIndex + $indexAdd) +')').attr('data-color-scheme')==='dark'){
$(currentSlider).find('.swiper-slide:nth-child('+ (activeIndex + $indexAdd) +') .video-texture').addClass('half-light-overlay').addClass('no-trans');
}else{
$(currentSlider).find('.swiper-slide:nth-child('+ (activeIndex + $indexAdd) +') .video-texture').addClass('light-overlay').addClass('no-trans');
}}else{
if($(currentSlider).find('.swiper-slide:nth-child('+ (activeIndex + $indexAdd) +')').attr('data-color-scheme')==='light'){
$(currentSlider).find('.swiper-slide:nth-child('+ (activeIndex + $indexAdd) +') .video-texture').addClass('half-dark-overlay').addClass('no-trans');
}else{
$(currentSlider).find('.swiper-slide:nth-child('+ (activeIndex + $indexAdd) +') .video-texture').addClass('dark-overlay').addClass('no-trans');
}}
}
function darkSlidePrevMouseOver(currentSlider, activeIndex){
var $indexAdd=($(currentSlider).find('.swiper-container').attr('data-loop')==='true') ? 0:0;
if($(currentSlider).find('.swiper-slide:nth-child('+ (activeIndex + 1) +')').attr('data-color-scheme')==='dark'){
if($(currentSlider).find('.swiper-slide:nth-child('+ (activeIndex - $indexAdd) +')').attr('data-color-scheme')==='dark'){
$(currentSlider).find('.swiper-slide:nth-child('+ (activeIndex - $indexAdd) +') .video-texture').addClass('half-light-overlay').addClass('no-trans');
}else{
$(currentSlider).find('.swiper-slide:nth-child('+ (activeIndex - $indexAdd) +') .video-texture').addClass('light-overlay').addClass('no-trans');
}}else{
if($(currentSlider).find('.swiper-slide:nth-child('+ (activeIndex - $indexAdd) +')').attr('data-color-scheme')==='light'){
$(currentSlider).find('.swiper-slide:nth-child('+ (activeIndex - $indexAdd) +') .video-texture').addClass('half-dark-overlay').addClass('no-trans');
}else{
$(currentSlider).find('.swiper-slide:nth-child('+ (activeIndex - $indexAdd) +') .video-texture').addClass('dark-overlay').addClass('no-trans');
}}
}
function resetContentPos(i){
$($nectarSliders[i].container).find('.swiper-slide .content > *').css({ 'transform': 'translateX(0px)' });
}
function prevArrowAnimationDirectional(e){
if($(this).hasClass('inactive')||$(this).parents('.swiper-container').find('.slider-next').hasClass('inactive')){
return false;
}
var i=e.data.i;
var $that=$(this);
var $timeout;
clearTimeout($timeout);
$timeout=setTimeout(function(){
$that.parents('.swiper-container').removeClass('directional-trans-prev');
$that.parents('.swiper-container').find('.swiper-wrapper').css({ 'transform': 'translateX(0)', 'left': parseInt($that.parents('.swiper-container').find('.swiper-wrapper').css('left')) + $that.parents('.swiper-container').width() });
setTimeout(function(){
$nectarSliders[i].updateActiveSlide();
$nectarSliders[i].fixLoop();
$that.removeClass('inactive');
},50);
resetContentPos(i);
} ,1100);
var $timeout2;
clearTimeout($timeout2);
$timeout2=setTimeout(function(){
if($that.parents('.swiper-container').attr('data-loop')!='true'){
if($that.parents('.swiper-container').find('.swiper-slide-active').index()+1!=1){
onChangeStart($nectarSliders[i]);
}}else{
onChangeStart($nectarSliders[i]);
}} ,100);
if($(this).parents('.swiper-container').attr('data-loop')!='true'){
$(this).parents('.swiper-container').find('.swiper-wrapper').find('.swiper-slide-active .content').children().each(function(i){
anime({
targets: $(this)[0],
translateX: [0, $that.parents('.swiper-container').width()/2.5 ],
easing: 'easeInOutCubic',
duration: 850
});
});
}
$(this).addClass('inactive');
anime({
targets: $(this).parents('.swiper-container').find('.swiper-wrapper')[0],
translateX: [0, $(this).parents('.swiper-container').width() ],
easing: 'easeInOutCubic',
duration: 1000
});
if($(this).parents('.swiper-container').attr('data-loop')==='true'){
$(this).parents('.swiper-container').find('.swiper-wrapper').find('.swiper-slide-active .content > *').each(function(i){
anime({
targets: $(this)[0],
translateX: [0, $that.parents('.swiper-container').width()/2.5 ],
easing: 'easeInOutCubic',
duration: 850,
delay: i*50
});
});
}
if($that.parents('.nectar-slider-wrap').is('[data-bg-animation="ken_burns"]')){
$that.parents('.swiper-container').find('.swiper-slide').attr('data-ken-burns','active');
clearTimeout(nectarSliderKenBurns);
nectarSliderKenBurns=setTimeout(function(){
$that.parents('.swiper-container').find('.swiper-slide:not(".swiper-slide-active")').attr('data-ken-burns','inactive');
},1350);
}
$that.parents('.swiper-container').find('.swiper-wrapper').find('.swiper-slide-active').prev('.swiper-slide').find('.content > *').css({
'transform': 'translateX(-' + $that.parents('.swiper-container').width() + "px)"
}, 0);
setTimeout(function(){
$that.parents('.swiper-container').find('.swiper-wrapper').find('.swiper-slide-active').prev('.swiper-slide').find('.content > *').each(function(i){
anime({
targets: $(this)[0],
translateX: 0,
easing: 'easeInOutCubic',
duration: 700,
delay: i*50
});
});
},200);
$that.parents('.swiper-container').addClass('directional-trans-prev');
e.preventDefault();
}
function nextArrowAnimationDirectional(e){
if($(this).hasClass('inactive')||$(this).parents('.swiper-container').find('.slider-prev').hasClass('inactive')){
return false;
}
var i=e.data.i;
var $that=$(this);
var $timeout;
clearTimeout($timeout);
$timeout=setTimeout(function(){
$that.parents('.swiper-container').removeClass('directional-trans-next');
$that.parents('.swiper-container').find('.swiper-wrapper').css({ 'transform': 'translateX(0)', 'left': parseInt($that.parents('.swiper-container').find('.swiper-wrapper').css('left')) - $that.parents('.swiper-container').width() });
setTimeout(function(){
$nectarSliders[i].updateActiveSlide();
$nectarSliders[i].fixLoop();
$that.removeClass('inactive');
},50);
resetContentPos(i);
} ,1100);
var $timeout2;
clearTimeout($timeout2);
$timeout2=setTimeout(function(){
if($that.parents('.swiper-container').attr('data-loop')!='true'){
if($that.parents('.swiper-container').find('.swiper-slide-active').index()+1!=$slideNum){
onChangeStart($nectarSliders[i]);
}}else{
onChangeStart($nectarSliders[i]);
}} ,100);
var $slideNum=$(this).parents('.swiper-container').find('.swiper-wrapper > div').length;
if($(this).parents('.swiper-container').attr('data-loop')!='true'){
if($(this).parents('.swiper-container').find('.swiper-slide-active').index()+1==$slideNum&&!$('html').hasClass('no-video')){
if($(this).parents('.nectar-slider-wrap ').attr('data-transition')!='fade'){
$(this).parents('.swiper-container').find('.swiper-wrapper').stop(true,false).css('transition','none').animate({
'left':parseInt($(this).parents('.swiper-container').find('.swiper-wrapper').css('left')) - 20
},200,function(){
$(this).parents('.swiper-container').find('.swiper-wrapper').stop(true,false).css('transition','left,top');
$nectarSliders[i].swipeReset();
});
}}else{
$(this).parents('.swiper-container').find('.swiper-wrapper').find('.swiper-slide-active .content > *').each(function(i){
anime({
targets: $(this)[0],
translateX: '-' + $that.parents('.swiper-container').width()/2.5 + "px",
easing: 'easeInOutCubic',
duration: 850,
delay: i*50
});
});
}}
$(this).addClass('inactive');
anime({
targets: $(this).parents('.swiper-container').find('.swiper-wrapper')[0],
translateX: '-' + $that.parents('.swiper-container').width() + "px",
easing: 'easeInOutCubic',
duration: 1000
});
if($(this).parents('.swiper-container').attr('data-loop')==='true'){
$(this).parents('.swiper-container').find('.swiper-wrapper').find('.swiper-slide-active .content > *').each(function(i){
anime({
targets: $(this)[0],
translateX: '-' + $that.parents('.swiper-container').width()/2.5 + "px",
easing: 'easeInOutCubic',
duration: 850,
delay: i*50
});
});
}
if($that.parents('.nectar-slider-wrap').is('[data-bg-animation="ken_burns"]')){
$that.parents('.swiper-container').find('.swiper-slide').attr('data-ken-burns','active');
clearTimeout(nectarSliderKenBurns);
nectarSliderKenBurns=setTimeout(function(){
$that.parents('.swiper-container').find('.swiper-slide:not(".swiper-slide-active")').attr('data-ken-burns','inactive');
},1350);
}
$that.parents('.swiper-container').find('.swiper-wrapper').find('.swiper-slide-active').next('.swiper-slide').find('.content > *').css({
'transform': 'translateX(' + $that.parents('.swiper-container').width() + "px)"
});
setTimeout(function(){
$that.parents('.swiper-container').find('.swiper-wrapper').find('.swiper-slide-active').next('.swiper-slide').find('.content > *').each(function(i){
anime({
targets: $(this)[0],
translateX: '0px',
easing: 'easeInOutCubic',
duration: 700,
delay: i*50
});
});
},200);
$that.parents('.swiper-container').addClass('directional-trans-next');
e.preventDefault();
}
var $nectarSliders=[];
function nectarSliderMainInit(){
$nectarSliders=[];
$('.nectar-slider-wrap[data-full-width="boxed-full-width"]').each(function(){
if($(this).parents('.wpb_column').length > 0 &&
$(this).parents('.full-width-content').length > 0){
$(this).attr('data-full-width','false');
}});
$('.full-width-content .wpb_column .nectar-slider-wrap[data-full-width="true"]').attr('data-full-width', 'false');
var $leftHeaderSize=($('#header-outer[data-format="left-header"]').length > 0&&window.innerWidth >=1000) ? parseInt($('#header-outer[data-format="left-header"]').width()):0;
var $windowWidth=$(window).width() - $leftHeaderSize;
if($('body > #boxed').length===0 &&
$('.nectar-slider-wrap[data-full-width="true"]').parent().attr('id')!='portfolio-extra' &&
$('.nectar-slider-wrap[data-full-width="true"]').parents('.post-area:not(".span_12")').length===0){
$('.nectar-slider-wrap[data-full-width="true"], .parallax_slider_outer.first-section .nectar-slider-wrap')
.css({'left': -(($windowWidth-$smoothSrollWidth)/2 - $('.main-content').width()/2), 'margin-left': '0' });
$('.nectar-slider-wrap[data-full-width="true"] .swiper-container, .nectar-slider-wrap[data-full-width="true"], .parallax_slider_outer.first-section .swiper-container, .parallax_slider_outer.first-section .nectar-slider-wrap')
.css('width',$windowWidth);
}
else if($('.nectar-slider-wrap[data-full-width="true"]').parent().attr('id')==='portfolio-extra'&&$('#full_width_portfolio').length!==0){
$('.nectar-slider-wrap[data-full-width="true"], .parallax_slider_outer.first-section .nectar-slider-wrap')
.css({'left': -(($windowWidth-$smoothSrollWidth)/2 - $('.main-content').width()/2), 'margin-left': '0' });
$('.nectar-slider-wrap[data-full-width="true"] .swiper-container, .nectar-slider-wrap[data-full-width="true"], .parallax_slider_outer.first-section .swiper-container, .parallax_slider_outer.first-section .nectar-slider-wrap')
.css('width',$windowWidth);
}else{
var $container=($('body > #boxed').length===0) ? '.post-area':'.container-wrap';
if($($container).width()=='0'&&$('body > #boxed').length > 0){
$container='#boxed';
}
$('.nectar-slider-wrap[data-full-width="true"] .swiper-container, .nectar-slider-wrap[data-full-width="true"], .parallax_slider_outer.first-section .swiper-container, .parallax_slider_outer.first-section .nectar-slider-wrap')
.css('width',$($container).width());
}
$('.nectar-slider-wrap, .slide-bg-overlay').show();
$('.swiper-container, .swiper-slide').css('background-color','#000');
$('.video-texture').css('opacity','1');
$('.nectar-slider-wrap').each(function(i){
var $arrows=$(this).find('.swiper-container').attr('data-arrows');
var $bullets=$(this).find('.swiper-container').attr('data-bullets');
var $swipe=$(this).find('.swiper-container').attr('data-desktop-swipe');
var $loop=$(this).find('.swiper-container').attr('data-loop');
var $grab=1;
var $desktopSwipe=1;
if($swipe=='true'&&$('#'+$(this).attr('id') +' .swiper-wrapper > div').length > 1 &&
$(this).attr('data-overall_style')!='directional'){
$grab=1;
$desktopSwipe=1;
}else{
$grab=0;
$desktopSwipe=0;
}
if($(window).width() < 1000&&$(this).attr('data-overall_style')!='directional'){
$grab=1;
$desktopSwipe=1;
}
if($bullets=='true'&&$(this).find('.swiper-wrapper > div').length > 1 &&
$(this).attr('data-overall_style')!='directional'){
$bullets='#'+$(this).attr('id')+' .slider-pagination';
}else{
$bullets=null;
}
var $useLoop=($loop=='true'&&$(this).find('.swiper-wrapper > div').length > 1&&!$('html').hasClass('no-video')||$(this).attr('data-overall_style')==='directional'&&$(this).find('.swiper-wrapper > div').length > 1&&!$('html').hasClass('no-video')) ? true:false;
if($useLoop==false){
$(this).find('.swiper-container').attr('data-loop','false');
}
var $sliderOptions, touchRatio;
if($(this).attr('data-transition')==='fade' &&
$(this).attr('data-overall_style')!=='directional' &&
$(this).attr('data-button-styling')!=='btn_with_preview'){
var progressVar=true;
touchRatio=1.3;
$sliderOptions={
loop: $useLoop,
grabCursor: $grab,
touchRatio: touchRatio,
speed: 600,
pagination:$bullets,
simulateTouch: $desktopSwipe,
onSlideChangeEnd: nectarSlideRotateReset,
onTouchEnd: nectarSlideRotateResetTouch,
onSlideChangeStart: onChangeStart,
onTouchMove: clearAutoplay,
onFirstInit: nectarInit,
progress: progressVar,
onProgressChange: function(swiper){
if($(swiper.container).parents('.nectar-slider-wrap').hasClass('loaded')){
for (var i=0; i < swiper.slides.length; i++){
var slide=swiper.slides[i];
var progress=slide.progress;
var translate=progress*swiper.width;
var opacity=Math.max(1 - Math.abs(progress), 0);
slide.style.opacity=opacity;
swiper.setTransform(slide,'translate3d('+translate+'px,0,0)');
}}
},
onTouchStart: function(swiper){
for (var i=0; i < swiper.slides.length; i++){
swiper.setTransition(swiper.slides[i], 0);
}},
onSetWrapperTransition:  function(swiper, speed){
for (var i=0; i < swiper.slides.length; i++){
swiper.setTransition(swiper.slides[i], speed);
}}
}}else{
touchRatio=0.6;
var css3Trans=($('#'+$(this).attr('id') + '.nectar-slider-wrap[data-overall_style="directional"]').length==1) ? false: true;
$sliderOptions={
loop: $useLoop,
grabCursor: $grab,
touchRatio: touchRatio,
speed: 500,
useCSS3Transforms: css3Trans,
pagination:$bullets,
simulateTouch: $desktopSwipe,
onSlideChangeEnd: nectarSlideRotateReset,
onTouchEnd: nectarSlideRotateResetTouch,
onSlideChangeStart: onChangeStart,
onTouchMove: clearAutoplay,
onFirstInit: nectarInit
}}
$nectarSliders[i]=new NectarSwiper('#'+$(this).attr('id')+' .swiper-container', $sliderOptions);
if(isNaN($nectarSliders[i].activeIndex)){
$nectarSliders[i].activeIndex=$useLoop ? 1:-0;
}
if(isNaN($nectarSliders[i].previousIndex)){
$nectarSliders[i].previousIndex=$useLoop ? 1:0;
}
$nectarSliders[i].swipeReset();
$('#'+$(this).attr('id')).addClass('nectar-slider-enabled');
if(navigator.userAgent.indexOf('Chrome') > 0 &&
!/Edge\/12./i.test(navigator.userAgent) &&
!/Edge\/\d./i.test(navigator.userAgent)){
var webmSource, webmSource2, firstVideo, lastVideo;
if(jQuery(this).find('.swiper-slide:nth-child(2) video source[type="video/webm"]').length > 0 &&
jQuery(this).find('.swiper-container').attr('data-loop')==='true'){
webmSource=jQuery(this).find('.swiper-slide:nth-child(2) video source[type="video/webm"]').attr('src') + "?id="+Math.ceil(Math.random()*10000);
firstVideo=jQuery(this).find('.swiper-slide:nth-child(2) video').get(0);
firstVideo.src=webmSource;
firstVideo.load();
webmSource2=jQuery(this).find('.swiper-slide:last-child video source[type="video/webm"]').attr('src') + "?id="+Math.ceil(Math.random()*10000);
lastVideo=jQuery(this).find('.swiper-slide:last-child video').get(0);
lastVideo.src=webmSource2;
lastVideo.load();
}
if(jQuery(this).find('.swiper-slide:eq(-2) video source[type="video/webm"]').length > 0 &&
jQuery(this).find('.swiper-container').attr('data-loop')==='true'){
webmSource=jQuery(this).find('.swiper-slide:eq(-2) video source[type="video/webm"]').attr('src') + "?id="+Math.ceil(Math.random()*10000);
firstVideo=jQuery(this).find('.swiper-slide:eq(-2) video').get(0);
firstVideo.src=webmSource;
firstVideo.load();
webmSource2=jQuery(this).find('.swiper-slide:nth-child(1) video source[type="video/webm"]').attr('src') + "?id="+Math.ceil(Math.random()*10000);
lastVideo=jQuery(this).find('.swiper-slide:nth-child(1) video').get(0);
lastVideo.src=webmSource2;
lastVideo.load();
}}
if($('#'+$(this).attr('id') + ' [data-bullet_style="see_through_ar_visualized"]').length==1){
$('#'+$(this).attr('id'))
.find('.slider-pagination .swiper-pagination-switch')
.append('<svg width="65px" height="65px" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg"><circle stroke-width="9" fill="none" stroke-linecap="round" cx="33" cy="33" r="28"></circle> <circle class="time" stroke-width="9" fill="none" stroke-linecap="round" cx="33" cy="33" r="28"></circle></svg>');
}
if($arrows=='true'&&$('#'+$(this).attr('id') +' .swiper-wrapper > div').length > 1 &&
$('#'+$(this).attr('id') + '.nectar-slider-wrap[data-button-styling="btn_with_preview"]').length===0 &&
$('#'+$(this).attr('id') + '.nectar-slider-wrap[data-overall_style="directional"]').length===0){
$('.slide-count i').css({ 'transform': 'scale(0.5)', 'opacity': '0' });
$('body').on('mouseenter','.nectar-slider-wrap[data-button-styling="btn_with_count"][data-overall_style="classic"] .swiper-container .slider-prev, .nectar-slider-wrap[data-button-styling="btn_with_count"][data-overall_style="classic"] .swiper-container .slider-next',function(){
anime({
targets: $(this).find('.slide-count i')[0],
scale: [0,1],
translateZ: 0,
opacity: 1,
easing: 'easeOutCubic',
duration: 250,
delay: 110
});
anime({
targets: $(this)[0],
width: [50,100],
easing: 'easeOutCubic',
duration: 300
});
anime({
targets: $(this)[0].querySelectorAll('.slide-count span'),
opacity: 1,
easing: 'easeOutCubic',
duration: 225,
delay: 100
});
});
$('body').on('mouseleave','.nectar-slider-wrap[data-button-styling="btn_with_count"][data-overall_style="classic"] .swiper-container .slider-prev, .nectar-slider-wrap[data-button-styling="btn_with_count"][data-overall_style="classic"] .swiper-container .slider-next',function(){
anime.remove('.slide-count i, .slider-next, .slider-prev, .slide-count span');
anime({
targets: $(this).find('.slide-count i')[0],
scale: 0,
translateZ: 0,
opacity: 0,
easing: 'easeOutCubic',
duration: 250
});
anime({
targets: $(this)[0],
width: 50,
easing: 'easeOutCubic',
duration: 300
});
anime({
targets: $(this)[0].querySelectorAll('.slide-count span'),
opacity: 0,
easing: 'easeOutCubic',
duration: 225
});
});
var $slideCount=($(this).find('.swiper-container').attr('data-loop')!='true') ? $('#'+$(this).attr('id') + ' .swiper-wrapper > div').length:$('#'+$(this).attr('id') + ' .swiper-wrapper > div').length - 2;
if($('html').hasClass('no-video')) $slideCount=$('#'+$(this).attr('id') + ' .swiper-wrapper > div').length;
$('#'+$(this).attr('id')+' .slider-prev .slide-count .slide-total').html($slideCount);
$('#'+$(this).attr('id')+' .slider-next .slide-count .slide-total').html($slideCount);
$('body').off('click','#'+$(this).attr('id')+' .slider-prev',prevArrowAnimation);
$('body').on('click','#'+$(this).attr('id')+' .slider-prev', {i: i}, prevArrowAnimation);
$('body').off('click','#'+$(this).attr('id')+' .slider-next',  nextArrowAnimation);
$('body').on('click','#'+$(this).attr('id')+' .slider-next', {i: i}, nextArrowAnimation);
}
else if($arrows=='true'&&$('#'+$(this).attr('id') +' .swiper-wrapper > div').length > 1&&$('#'+$(this).attr('id') + '.nectar-slider-wrap[data-button-styling="btn_with_preview"]').length==1&&$('#'+$(this).attr('id') + '.nectar-slider-wrap[data-overall_style="directional"]').length==0){
$('body').off('click','#'+$(this).attr('id')+' .slider-prev', prevArrowAnimationWithPreview);
$('body').on('click','#'+$(this).attr('id')+' .slider-prev', {i: i}, prevArrowAnimationWithPreview);
$('body').off('click','#'+$(this).attr('id')+' .slider-next', nextArrowAnimationWithPreview);
$('body').on('click','#'+$(this).attr('id')+' .slider-next', {i: i}, nextArrowAnimationWithPreview);
$('body').on('mouseenter','.nectar-slider-wrap[data-button-styling="btn_with_preview"] .swiper-container .slider-next:not(.stophover)',function(){
$(this).parents('.nectar-slider-wrap')
.find('.swiper-slide-active')
.next('.swiper-slide')
.addClass('high-z-index');
$(this).parents('.nectar-slider-wrap')
.find('.swiper-slide-active')
.stop()
.addClass('next-move');
$(this).stop()
.addClass('next-arrow-move');
darkSlideNextMouseOver($(this).parents('.nectar-slider-wrap'), $(this).parents('.nectar-slider-wrap').find('.swiper-slide-active').index());
});
$('body').on('mouseleave','.nectar-slider-wrap[data-button-styling="btn_with_preview"] .swiper-container .slider-next',function(){
$(this).parents('.nectar-slider-wrap').find('.swiper-slide-active').next('.swiper-slide').removeClass('high-z-index');
$(this).parents('.nectar-slider-wrap').find('.swiper-slide-active').stop().removeClass('next-move');
$(this).stop().removeClass('next-arrow-move');
});
$('body').on('mouseenter','.nectar-slider-wrap[data-button-styling="btn_with_preview"] .swiper-container .slider-prev:not(.stophover)',function(){
$(this).parents('.nectar-slider-wrap').find('.swiper-slide-active').prev('.swiper-slide').addClass('prev-high-z-index');
$(this).parents('.nectar-slider-wrap').find('.swiper-slide-active').stop().addClass('prev-move');
$(this).stop().addClass('prev-arrow-move');
darkSlidePrevMouseOver($(this).parents('.nectar-slider-wrap'), $(this).parents('.nectar-slider-wrap').find('.swiper-slide-active').index());
});
$('body').on('mouseleave','.nectar-slider-wrap[data-button-styling="btn_with_preview"] .swiper-container .slider-prev',function(){
$(this).parents('.nectar-slider-wrap').find('.swiper-slide-active').prev('.swiper-slide').removeClass('prev-high-z-index');
$(this).parents('.nectar-slider-wrap').find('.swiper-slide-active').stop().removeClass('prev-move');
$(this).stop().removeClass('prev-arrow-move');
});
}else if($('#'+$(this).attr('id') + '.nectar-slider-wrap[data-overall_style="directional"]').length==1){
$('body').off('click','#'+$(this).attr('id')+' .slider-prev', prevArrowAnimationDirectional);
$('body').on('click','#'+$(this).attr('id')+' .slider-prev', {i: i}, prevArrowAnimationDirectional);
$('body').off('click','#'+$(this).attr('id')+' .slider-next',  nextArrowAnimationDirectional);
$('body').on('click','#'+$(this).attr('id')+' .slider-next',  {i: i}, nextArrowAnimationDirectional);
}
if($('#'+$(this).attr('id') +' .swiper-container').attr('data-bullet_style')==='scale'){
$('#'+$(this).attr('id')+' .slider-pagination .swiper-pagination-switch').append('<i />');
}
if($bullets!=null&&$('#'+$(this).attr('id') +' .swiper-wrapper > div').length > 1){
$('#'+$(this).attr('id')+' .slider-pagination .swiper-pagination-switch').on('click', function(){
$nectarSliders[i].swipeTo($(this).index());
});
}});
}
nectarSliderMainInit();
$(window).on('vc_reload', function(){
nectarSliderMainInit();
initialSlideLoad();
});
if('IntersectionObserver' in window){
var options={
rootMargin: '0px',
}
var sliderObserver=new IntersectionObserver(function(entries){
entries.forEach(function(entry){
if(entry.isIntersecting){
entry.target.classList.remove('out-of-view');
setTimeout(function(){
if($(entry.target).find('.swiper-slide-active').is('[data-color-scheme="dark"]')){
$('#header-outer.transparent').addClass('dark-slide');
}else{
$('#header-outer.transparent').removeClass('dark-slide');
}},200);
}else{
entry.target.classList.add('out-of-view');
}});
}, options);
if($('#nectar_fullscreen_rows').length==0&&$('#header-outer[data-permanent-transparent="1"]').length > 0){
$('.top-level .nectar-slider-wrap').each(function(slider){
sliderObserver.observe($(this)[0]);
});
}}
function darkFirstSlide(slider){
if(slider.parents('.parallax_slider_outer').length > 0&&slider.parents('.first-section').length > 0&&slider.find('.swiper-slide-active[data-color-scheme="dark"]').length > 0){
$('#header-outer').addClass('dark-slide');
}else if(slider.parents('.parallax_slider_outer').length > 0||slider.parents('.first-section').length > 0){
if(slider.find('.swiper-slide-active[data-color-scheme="dark"]').length > 0&&slider.parents('.first-section').length > 0&&slider.is('[data-full-width="true"]')){
}else{
$('#header-outer').removeClass('dark-slide');
}}
}
var $animating=false;
var $sliderHeights=[];
var $existingSliders=[];
var slideAnimationQueues=[];
var sliderLength=$('.swiper-container').length;
var sliderLoadedLength=0;
function initialSlideLoad(){
$animating=false;
$('.swiper-wrapper').each(function(){
if($(this).find('.swiper-slide:nth-child(2) video').length > 0) $(this).find('.swiper-slide:nth-child(2)').addClass('first_video_slide');
if($(this).parents('.nectar-slider-wrap[data-bg-animation="ken_burns"]').length > 0){
if($('#nectar_fullscreen_rows').length > 0){
var $that=$(this);
setTimeout(function(){
$that.find('.swiper-slide.swiper-slide-active').addClass('ken-burns').attr('data-ken-burns','active');
},100);
}else{
$(this).find('.swiper-slide.swiper-slide-active').addClass('ken-burns').attr('data-ken-burns','active');
}}
});
$('.nectar-slider-wrap').each(function(i){
slideAnimationQueues[i]={
sliderID: $(this).attr('id'),
captionInterval: '',
kenBurnsInterval: ''
}
var $that=$(this);
if($(this).find('.swiper-slide-active video').length > 0){
if(!$('html').hasClass('no-video')&&!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)){
showSliderControls();
resizeToCover();
slideContentPos();
sliderLoadIn($that,i);
var $timeoutDelay=0;
if($('#ajax-loading-screen[data-effect="center_mask_reveal"]').length > 0&&$that.parents('.parallax_slider_outer').length > 0 ||
$('#ajax-loading-screen[data-effect="center_mask_reveal"]').length > 0&&$that.hasClass('first-nectar-slider')){
$timeoutDelay=450;
}
setTimeout(function(){ captionTransition($nectarSliders[i]); onChangeStart($nectarSliders[i]); }, $timeoutDelay);
darkFirstSlide($that);
$that.addClass('loaded');
if($that.parents('.parallax_slider_outer').length > 0||$that.hasClass('first-nectar-slider')){
$('#ajax-loading-screen').addClass('loaded');
setTimeout(function(){ $('#ajax-loading-screen').addClass('hidden'); },1000);
}}else{
showSliderControls();
resizeToCover();
slideContentPos();
sliderLoadIn($that,i);
captionTransition($nectarSliders[i]);
darkFirstSlide($that);
}}else{
showSliderControls();
resizeToCover();
slideContentPos();
sliderLoadIn($that,i);
var $timeout=0;
if($('#ajax-loading-screen[data-effect="center_mask_reveal"]').length > 0 &&
$that.parents('.parallax_slider_outer').length > 0 &&
$that.parents('.first-section').length > 0 ||
$('#ajax-loading-screen[data-effect="center_mask_reveal"]').length > 0&&$that.hasClass('first-nectar-slider')){
$timeout=450;
}
setTimeout(function(){
captionTransition($nectarSliders[i]);
onChangeStart($nectarSliders[i]);
},$timeout);
darkFirstSlide($that);
$that.addClass('loaded');
if($that.parents('.parallax_slider_outer').length > 0 ||
$that.hasClass('first-nectar-slider')){
$('#ajax-loading-screen').addClass('loaded');
setTimeout(function(){
$('#ajax-loading-screen').addClass('hidden');
},1000);
}}
if(navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)){
$that.find('.video-wrap').each(function(){
var $videoSlide=$(this);
$(this).css('bottom','0');
$(this).find('video')[0].onplay=function(){
$videoSlide.find('video').css({'opacity':'1'});
setTimeout(function(){
$videoSlide.parents('.swiper-slide').find('.mobile-video-image').transition({'opacity':'0'},250);
anime({
targets: $videoSlide.parents('.swiper-slide').find('.mobile-video-image')[0],
opacity: 0,
easing: 'easeOutCubic',
duration: 250
});
},100);
};});
captionTransition($nectarSliders[i]);
showSliderControls();
resizeToCover();
slideContentPos();
darkFirstSlide($that);
setTimeout(function(){
resizeToCover();
slideContentPos();
},400);
$('.nectar-slider-wrap').find('.nectar-slider-loading').fadeOut(800,'easeInOutExpo');
$('.nectar-slider-wrap.first-section .swiper-container .swiper-wrapper .swiper-slide').removeClass('not-loaded');
$(this).addClass('loaded');
if($that.parents('.parallax_slider_outer').length > 0||$that.hasClass('first-nectar-slider')){
$('#ajax-loading-screen').addClass('loaded');
setTimeout(function(){ $('#ajax-loading-screen').addClass('hidden'); },1000);
}
autorotateInit($(this),i);
}
if($('header#top #logo img').length > 0){
var logoImg=new Image();
logoImg.src=$('header#top #logo img:first').attr('src');
$(logoImg).on('load', function(){
if($that.attr('data-overall_style')==='directional'){
$that.find('.swiper-container').addClass('directional-trans-current');
onChangeStart($nectarSliders[i]);
}});
}else{
if($that.attr('data-overall_style')==='directional'){
$that.find('.swiper-container').addClass('directional-trans-current');
onChangeStart($nectarSliders[i]);
}}
});
$('.swiper-container').each(function(){
if($(this).is('[data-bullet_position="left"]')){
if($(this).find('[data-x-pos="left"]').length > 0){
$(this).find('.slider-pagination-wrap').addClass('extra-room');
}}
if($(this).is('[data-bullet_position="right"]')){
if($(this).find('[data-x-pos="right"]').length > 0){
$(this).find('.slider-pagination-wrap').addClass('extra-room');
}}
});
}
function nectarInit(){
if(doneVideoInit==true){
return;
}
$('.swiper-slide iframe[data-aspectRatio]').each(function(){
var newWidth=$(this).parent().width();
var $el=$(this);
if($(this).parents('.swiper-slide').length > 0){
if($(this).is(':visible')) $el.width(newWidth).height(newWidth * $el.attr('data-aspectRatio'));
}else{
$el.width(newWidth).height(newWidth * $el.attr('data-aspectRatio'));
}});
doneVideoInit=true;
}
var autoplay=[];
var sliderAutoplayCount=0;
function nsSliderArrStore(){
$sliderHeights=[];
$existingSliders=[];
$('.swiper-container').each(function(i){
$sliderHeights[i]=parseInt($(this).attr('data-height'));
$existingSliders[i]=$(this).parent().attr('id');
});
}
nsSliderArrStore();
dynamicHeightSliders();
sliderSize();
resizeToCover();
for(var nsCount=0; nsCount<$nectarSliders.length; nsCount++){
$nectarSliders[nsCount].resizeFix();
}
$('.parallax_slider_outer .nectar-slider-wrap .slide-bg-wrap').each(function(){
if($(this).parents('.top-level').length > 0){
if($(this).find('.image-bg').length > 0){
$(this).find('.image-bg').css({'height':  Math.ceil($(this).parent().offset().top * 0.25) + $(this).outerHeight(true) });
}
if($(this).find('.video-wrap').length > 0){
$(this).find('.video-wrap').css({'height': Math.ceil($(this).parent().offset().top * 0.25) + $(this).outerHeight(true) });
}}
});
initialSlideLoad();
document.addEventListener("visibilitychange", function(){
if(document.hidden){
}else{
$('.nectar-slider-wrap').each(function(i){
if(typeof $nectarSliders[i]!='undefined'){
$nectarSliders[i].resizeFix();
}});
}});
var headerPadding=parseInt($('#header-outer').attr('data-padding'));
var shrinkNum=8;
if($('#header-outer[data-shrink-num]').length > 0){
shrinkNum=$('#header-outer').attr('data-shrink-num');
}
var feEditorStored=false;
function dynamicHeightSliders(){
var $adminBarHeight=($('#wpadminbar').length > 0) ? 28:0 ;
if($('body.compose-mode').length > 0&&feEditorStored==false){
nsSliderArrStore();
feEditorStored=true;
}
$('.nectar-slider-wrap').each(function(){
var $heightCalc, $heightCal;
var $minHeight=$('.swiper-container').attr('data-min-height');
if(window.innerWidth > 1000&&$('#ajax-content-wrap').length > 0){
$('body.material:not("[data-header-format=\'left-header\']") .parallax_slider_outer.first-section .nectar-slider-wrap').css('top',$('#ajax-content-wrap').offset().top);
}else{
$('body.material:not("[data-header-format=\'left-header\']") .parallax_slider_outer.first-section .nectar-slider-wrap').css('top','0');
}
if($(this).attr('data-fullscreen')==='true'&&$(this).attr('data-full-width')==='true' ||
$(this).attr('data-fullscreen')==='true'&&$(this).attr('data-full-width')==='boxed-full-width' ||
$(this).attr('data-fullscreen')==='true'&&$(this).parents('.full-width-content').length > 0&&$(this).parents('.vc_col-sm-12').length > 0){
if($(this).parents('#nectar_fullscreen_rows').length===0){
if($(this).hasClass('first-section')&&$(this).index()===0 ||
$(this).parents('.wpb_row').length > 0&&$(this).parents('.wpb_row').hasClass('first-section')&&$(this).index()===0&&$(this).parents('.parallax_slider_outer').length===0 ||
$(this).parents('.wpb_row').length > 0&&$(this).parents('.wpb_row').hasClass('top-level')&&$(this).parents('.parallax_slider_outer').length===0){
$heightCal=(($(window).height() - $(this).offset().top + 2) <=$minHeight) ? $minHeight:$(window).height() - $(this).offset().top + 2;
$(this).find('.swiper-container').attr('data-height',$heightCal);
}
else if($(this).parents('.first-section').length > 0&&$(this).parents('.parallax_slider_outer').length > 0&&$(this).parents('#full_width_portfolio').length===0 ||
$(this).parents('.top-level').length > 0&&$(this).parents('.parallax_slider_outer').length > 0&&$(this).parents('#full_width_portfolio').length===0){
$heightCal=(($(window).height() - $(this).offset().top + 2) <=$minHeight) ? $minHeight:$(window).height() - $(this).offset().top + 2;
$(this).find('.swiper-container').attr('data-height',$heightCal);
}
else if($(this).parents('#full_width_portfolio').length > 0&&$(this).attr('data-parallax')!='true'&&$(this).index()===0){
$heightCal=(($(window).height() - $(this).offset().top + 2) <=$minHeight) ? $minHeight:$(window).height() - $(this).offset().top + 2;
$(this).find('.swiper-container').attr('data-height',$heightCal);
}
else if($(this).parents('#full_width_portfolio').length > 0&&$(this).attr('data-parallax')==='true'){
$heightCal=(($(window).height() - $(this).offset().top + 2) <=$minHeight) ? $minHeight:$(window).height() - $(this).offset().top + 2;
$(this).find('.swiper-container').attr('data-height',$heightCal);
}else{
var headerPadding=parseInt($('#header-outer').attr('data-padding'));
var shrinkNum=8;
if($('#header-outer[data-shrink-num]').length > 0){
shrinkNum=$('#header-outer').attr('data-shrink-num');
}
var $resize=($('#header-outer[data-header-resize="0"]').length > 0) ? 0:parseInt(shrinkNum) + headerPadding*2;
var $headerSize=($('#header-outer[data-permanent-transparent="false"]').length > 0) ? $('#header-space').height() - $resize-3:-3;
if($('#nectar_fullscreen_rows').length > 0 ||
($('body[data-header-format="left-header"]').length > 0&&window.innerWidth >=1000)){
$headerSize=$adminBarHeight;
}
$heightCal=($(window).height() - $headerSize <=$minHeight) ? $minHeight:$(window).height() - $headerSize;
$(this).find('.swiper-container').attr('data-height',$heightCal);
}
if($('#header-outer[data-remove-border="true"]').length===0){
if($('body #header-outer[data-transparent-header="true"]').length > 0
&& $('.first-section .nectar-slider-wrap[data-fullscreen="true"]').length > 0 
&& $('#page-header-bg').length===0){
$('.first-section .nectar-slider-loading').css({
'background-image': $loading_bg_storage,
'background-position':'center ' + ((($(window).height() /2) + 15) - $('#header-space').height()) +'px'
});
$('.first-section .nectar-slider-wrap .nectar-slider-loading .loading-icon').css({
'opacity':'1',
'height':$(window).height() - $('#header-space').height() + 'px'
});
}}
}}
if($(this).attr('data-flexible-height')==='true' &&
$(this).attr('data-fullscreen')!=='true'){
if($(this).parents('.wpb_row.full-width-content').length===0 &&
$(this).attr('data-full-width')==='false'){
$(this).attr('data-flexible-height','false');
return false;
}
$minHeight=$('.swiper-container').attr('data-min-height');
var currentKey=$existingSliders.nectarGetKeyByValue($(this).attr('id'));
var $definedHeight=$sliderHeights[currentKey];
var dif=$(window).width() / 1600;
if(window.innerWidth > 1000&&$('#boxed').length===0){
$(this).find('.swiper-container').attr('data-height',Math.ceil($definedHeight*dif));
}else{
var $parentCol=($(this).parents('.wpb_column').length > 0) ? $(this).parents('.wpb_column'):$(this).parents('.col') ;
if($parentCol.length==0) $parentCol=$('.main-content');
if(!$parentCol.hasClass('vc_span12') &&
!$parentCol.hasClass('main-content') &&
!$parentCol.hasClass('span_12') &&
!$parentCol.hasClass('vc_col-sm-12')){
var $parentColWidth=sliderColumnDesktopWidth($parentCol);
var $parentColRatio=1100/$parentColWidth;
if($definedHeight*dif <=$minHeight){
$(this).find('.swiper-container').attr('data-height',$minHeight);
}else{
$(this).find('.swiper-container').attr('data-height',Math.ceil($parentColRatio*$definedHeight*dif));
}}
else if($('#boxed').length > 0){
dif=$('#boxed').width() / 1600;
if(window.innerWidth > 1300){
if($('body[data-ext-responsive="true"]').length > 0){
if($(this).has('[data-full-width="boxed-full-width"]')){
($('#boxed').width() < 1400) ? $(this).find('.swiper-container').attr('data-height',Math.ceil($definedHeight*dif)):$(this).find('.swiper-container').attr('data-height',$definedHeight*(1400/1600));
}}else{
if($(this).has('[data-full-width="boxed-full-width"]')){
$(this).find('.swiper-container').attr('data-height',Math.ceil($definedHeight*(1200/1600)));
}}
}else if(window.innerWidth <=1300&&window.innerWidth >=1000){
if($('body[data-ext-responsive="true"]').length > 0){
$(this).find('.swiper-container').attr('data-height',Math.ceil($definedHeight*dif));
}else{
if($(this).has('[data-full-width="boxed-full-width"]')){
$(this).find('.swiper-container').attr('data-height',Math.ceil($definedHeight*(980/1600)));
}}
}else if(window.innerWidth < 1000&&window.innerWidth > 690){
$heightCalc=($definedHeight*(679/1600) <=$minHeight) ? $minHeight:$definedHeight*(679/1600);
if($(this).has('[data-full-width="boxed-full-width"]')){
$(this).find('.swiper-container').attr('data-height',$minHeight);
}}else if(window.innerWidth <=690){
$heightCalc=($definedHeight*dif <=$minHeight) ? $minHeight:$definedHeight*dif;
if($(this).has('[data-full-width="boxed-full-width"]')){
if($(this).parents('.full-width-ns').length > 0&&$('#header-outer[data-transparent-header="true"]').length > 0){
$(this).find('.swiper-container').attr('data-height', $heightCalc + 50);
}else{
$(this).find('.swiper-container').attr('data-height', $heightCalc);
}}
}}else{
if($definedHeight*dif <=$minHeight){
$(this).find('.swiper-container').attr('data-height',$minHeight);
}else{
if(window.innerWidth < 690 &&
$(this).parents('.full-width-ns').length > 0 &&
$('#header-outer[data-transparent-header="true"]').length > 0){
$(this).find('.swiper-container').attr('data-height',Math.ceil($definedHeight*dif) + 50);
}else{
$(this).find('.swiper-container').attr('data-height',Math.ceil($definedHeight*dif));
}}
}}
if($('body #header-outer[data-transparent-header="true"]').length > 0 &&
$('.first-section .nectar-slider-wrap[data-flexible-height="true"]').length > 0){
$('.first-section .nectar-slider-loading').css({
'background-image': $loading_bg_storage,
'background-position':'center ' + (((($definedHeight*dif)/2) + 15) - $('#header-space').height()) +'px'
});
$('.first-section .nectar-slider-wrap .nectar-slider-loading .loading-icon').css({
'opacity':'1',
'height':$definedHeight*dif - $('#header-space').height() + 'px'
});
}}
});
}
var usingMobileBrowser=(navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) ? true:false;
if(!usingMobileBrowser){
$(window).on('resize', function(){
dynamicHeightSliders();
nsSliderContentResize();
});
$(window).on('smartresize', function(){
setTimeout(function(){
dynamicHeightSliders();
nsSliderContentResize();
}, 100);
});
}else{
var $windowWidth=$(window).width(), $windowHeight=$(window).height();
var $orientationChange=0;
window.addEventListener("orientationchange", function(){
$orientationChange=1;
});
$(window).on('resize', function(){
if(($(window).width()!=$windowWidth&&$(window).height!=$windowHeight)||$orientationChange==1){
dynamicHeightSliders();
nsSliderContentResize();
$(window).trigger('salient-parallax-bg-recalculate');
$windowWidth=$(window).width();
$windowHeight=$(window).height();
$orientationChange=0;
}});
}
setTimeout(function(){
dynamicHeightSliders();
},100);
function sliderColumnDesktopWidth(parentCol){
var $parentColWidth=1100;
var $columnNumberParsed=$(parentCol).attr('class').match(/\d+/);
if($columnNumberParsed=='2'){ $parentColWidth=170 }
else if($columnNumberParsed=='3'){ $parentColWidth=260 }
else if($columnNumberParsed=='4'){ $parentColWidth=340 }
else if($columnNumberParsed=='6'){ $parentColWidth=530 }
else if($columnNumberParsed=='8'){ $parentColWidth=700 }
else if($columnNumberParsed=='9'){ $parentColWidth=805 }
else if($columnNumberParsed=='10'){ $parentColWidth=916.3 }
else if($columnNumberParsed=='12'){ $parentColWidth=1100 }
return $parentColWidth;
}
$(window).on('resize', sliderSize);
function sliderSize(){
if(window.innerWidth < 1000&&window.innerWidth > 690){
var currentKey;
$('.nectar-slider-wrap[data-full-width="true"]:not([data-fullscreen="true"],[data-flexible-height="true"])').each(function(){
currentKey=$existingSliders.nectarGetKeyByValue($(this).attr('id'));
$(this).find('.swiper-container').attr('data-height',$sliderHeights[currentKey]/1.4)
});
$('.nectar-slider-wrap[data-full-width="false"]:not([data-fullscreen="true"]):not([data-flexible-height="true"])').each(function(){
currentKey=$existingSliders.nectarGetKeyByValue($(this).attr('id'));
var $currentSliderHeight=$sliderHeights[currentKey];
var $parentCol=($(this).parents('.wpb_column').length > 0) ? $(this).parents('.wpb_column'):$(this).parents('.col');
if($(this).parents('.post-area').length > 0&&$(this).parents('.vc_span12').length > 0) $parentCol=$(this).parents('.post-area');
if($parentCol.length===0){
$parentCol=$('.main-content');
}
var $parentColWidth=sliderColumnDesktopWidth($parentCol);
var $aspectRatio=$currentSliderHeight/$parentColWidth;
$(this).find('.swiper-container').attr('data-height',$aspectRatio*$parentCol.width());
});
$('.nectar-slider-wrap[data-full-width="boxed-full-width"]:not([data-flexible-height="true"]):not([data-fullscreen="true"])').each(function(){
currentKey=$existingSliders.nectarGetKeyByValue($(this).attr('id'));
$(this).find('.swiper-container').attr('data-height',$sliderHeights[currentKey]/1.9)
});
}
else if(window.innerWidth <=690){
$('.nectar-slider-wrap[data-full-width="true"]:not([data-fullscreen="true"],[data-flexible-height="true"])').each(function(){
currentKey=$existingSliders.nectarGetKeyByValue($(this).attr('id'));
if($(this).parents('.full-width-ns').length > 0&&$('#header-outer[data-transparent-header="true"]').length > 0){
$(this).find('.swiper-container').attr('data-height',($sliderHeights[currentKey]/2.7) + 50);
}else{
$(this).find('.swiper-container').attr('data-height',$sliderHeights[currentKey]/2.7)
}});
$('.nectar-slider-wrap[data-full-width="false"]:not([data-fullscreen="true"]):not([data-flexible-height="true"])').each(function(){
currentKey=$existingSliders.nectarGetKeyByValue($(this).attr('id'));
var $currentSliderHeight=$sliderHeights[currentKey];
var $parentCol=($(this).parents('.wpb_column').length > 0) ? $(this).parents('.wpb_column'):$(this).parents('.col');
if($(this).parents('.post-area').length > 0&&$(this).parents('.vc_span12').length > 0){
$parentCol=$(this).parents('.post-area');
}
if($parentCol.length===0){
$parentCol=$('.main-content');
}
var $parentColWidth=sliderColumnDesktopWidth($parentCol);
var $aspectRatio=$currentSliderHeight/$parentColWidth;
$(this).find('.swiper-container').attr('data-height',$aspectRatio*$parentCol.width());
});
$('.nectar-slider-wrap[data-full-width="boxed-full-width"]:not([data-flexible-height="true"]):not([data-fullscreen="true"])').each(function(){
currentKey=$existingSliders.nectarGetKeyByValue($(this).attr('id'));
if($(this).parents('.full-width-ns').length > 0&&$('#header-outer[data-transparent-header="true"]').length > 0){
$(this).find('.swiper-container').attr('data-height', ($sliderHeights[currentKey]/2.9) + 50);
}else{
$(this).find('.swiper-container').attr('data-height',$sliderHeights[currentKey]/2.9);
}});
}
else if(window.innerWidth < 1300&&window.innerWidth >=1000){
$('.nectar-slider-wrap[data-full-width="true"]:not([data-fullscreen="true"],[data-flexible-height="true"])').each(function(){
currentKey=$existingSliders.nectarGetKeyByValue($(this).attr('id'));
$(this).find('.swiper-container').attr('data-height',$sliderHeights[currentKey]/1.2)
});
$('.nectar-slider-wrap[data-full-width="false"]:not([data-fullscreen="true"]):not([data-flexible-height="true"])').each(function(){
currentKey=$existingSliders.nectarGetKeyByValue($(this).attr('id'));
var $currentSliderHeight=$sliderHeights[currentKey];
var $parentCol=($(this).parents('.wpb_column').length > 0) ? $(this).parents('.wpb_column'):$(this).parents('.col') ;
if($(this).parents('.post-area').length > 0&&$(this).parents('.vc_span12').length > 0){
$parentCol=$(this).parents('.post-area');
}
if($parentCol.length===0){
$parentCol=$('.main-content');
}
var $parentColWidth=sliderColumnDesktopWidth($parentCol);
var $aspectRatio=$currentSliderHeight/$parentColWidth;
$(this).find('.swiper-container').attr('data-height',$aspectRatio*$parentCol.width());
});
$('.nectar-slider-wrap[data-full-width="boxed-full-width"]:not([data-flexible-height="true"]):not([data-fullscreen="true"])').each(function(){
currentKey=$existingSliders.nectarGetKeyByValue($(this).attr('id'));
$(this).find('.swiper-container').attr('data-height',$sliderHeights[currentKey]/1.2)
});
}else{
$('.nectar-slider-wrap[data-full-width="true"]:not([data-fullscreen="true"],[data-flexible-height="true"])').each(function(){
currentKey=$existingSliders.nectarGetKeyByValue($(this).attr('id'));
if($(this).attr('data-flexible-height')!='true') $(this).find('.swiper-container').attr('data-height',$sliderHeights[currentKey])
});
$('.nectar-slider-wrap[data-full-width="false"]:not([data-fullscreen="true"]), .nectar-slider-wrap[data-full-width="boxed-full-width"]:not([data-flexible-height="true"]):not([data-fullscreen="true"])').each(function(){
currentKey=$existingSliders.nectarGetKeyByValue($(this).attr('id'));
if($(this).attr('data-flexible-height')!='true') $(this).find('.swiper-container').attr('data-height',$sliderHeights[currentKey])
});
}}
$('.nectar-slider-wrap').each(function(){
if($(this).find('.swiper-wrapper .swiper-slide').length==1){
$(this).find('.swiper-slide').addClass('no-transform');
$(this).find('.swiper-wrapper').addClass('no-transform');
}});
var min_w=1500;
var vid_w_orig;
var vid_h_orig;
vid_w_orig=1280;
vid_h_orig=720;
var $headerHeight=$('header').height()-1;
function nsSliderContentResize(){
resizeToCover();
slideContentPos();
for(var i=0; i < $nectarSliders.length; i++){
if($($nectarSliders[i].container).parent().attr('data-transition') &&
$($nectarSliders[i].container).parent().attr('data-transition')==='fade'){
for(var k=0; k < $nectarSliders[i].slides.length; k++){
$nectarSliders[i].setTransition($nectarSliders[i].slides[k], 0);
}
$('.swiper-wrapper').stop(true,true).css('transition-duration','0s');
if($('.nectar-slider-loading').css('display')==='none'){
$('.swiper-wrapper .swiper-slide.swiper-slide-active .content > *').css({
'opacity': 1,
'transform':'translateY(0)'
});
}}
$nectarSliders[i].reInit();
$nectarSliders[i].resizeFix();
}}
function resizeToCover(){
$('.nectar-slider-wrap').each(function(i){
if($(this).css('visibility')!='hidden'){
var $leftHeaderSize=($('#header-outer[data-format="left-header"]').length > 0&&window.innerWidth >=1000) ? parseInt($('#header-outer[data-format="left-header"]').width()):0;
var $windowWidth=$(window).width() - $leftHeaderSize;
if($('body > #boxed').length===0 &&
$('.nectar-slider-wrap[data-full-width="true"]').parent().attr('id')!='portfolio-extra' &&
$(this).parents('.post-area:not(".span_12")').length===0){
$('.nectar-slider-wrap[data-full-width="true"], .parallax_slider_outer.first-section .nectar-slider-wrap').css({'left': -(($windowWidth-$smoothSrollWidth)/2 - $('.main-content').width()/2), 'margin-left': '0' });
$('.nectar-slider-wrap[data-full-width="true"] .swiper-container, .nectar-slider-wrap[data-full-width="true"], .parallax_slider_outer.first-section .swiper-container, .parallax_slider_outer.first-section .nectar-slider-wrap').css('width',$windowWidth);
}
else if($('.nectar-slider-wrap[data-full-width="true"]').parent().attr('id')==='portfolio-extra' &&
$('#full_width_portfolio').length!==0){
$('.nectar-slider-wrap[data-full-width="true"], .parallax_slider_outer.first-section .nectar-slider-wrap').css({'left': -(($windowWidth-$smoothSrollWidth)/2 - $('.main-content').width()/2), 'margin-left': '0' });
$('.nectar-slider-wrap[data-full-width="true"] .swiper-container, .nectar-slider-wrap[data-full-width="true"], .parallax_slider_outer.first-section .swiper-container, .parallax_slider_outer.first-section .nectar-slider-wrap').css('width',$windowWidth);
}else{
var $container=($('body > #boxed').length===0) ? '.post-area':'.container-wrap';
if($($container).width()=='0'&&$('body > #boxed').length > 0) $container='#boxed';
$('.nectar-slider-wrap[data-full-width="true"] .swiper-container, .nectar-slider-wrap[data-full-width="true"], .parallax_slider_outer.first-section .swiper-container, .parallax_slider_outer.first-section .nectar-slider-wrap').css({'width':$($container).width(), 'margin-left': '0'});
}
var $sliderHeight=parseInt($(this).find('.swiper-container').attr('data-height'));
var $sliderMinHeight=($(this).find('.swiper-container').is('[data-min-height]')&&$(this).find('.swiper-container').attr('data-min-height').length > 0) ? parseInt($(this).find('.swiper-container').attr('data-min-height')):0;
if($sliderMinHeight > $sliderHeight){
$sliderHeight=$sliderMinHeight;
}
var isFullWidthCompatible=($(this).attr('data-full-width')==='true') ? 'true':'false';
if($(this).parent().attr('id')=='portfolio-extra'&&$('#full_width_portfolio').length===0 ||
$(this).parents('.post-area').length > 0){
isFullWidthCompatible='false';
}
var $sliderWidth=(isFullWidthCompatible==='true') ? $windowWidth-$smoothSrollWidth:$(this).width();
var lrPadding=($(this).parents('.span_12').length > 0&&parseInt($(this).parents('.span_12').css('padding-left')) > 0) ? true:false;
if($(this).parents('.full-width-content').length > 0 &&
$(this).parents('.vc_col-sm-12').length > 0 &&
$('#boxed').length===0 &&
lrPadding===false){
$sliderWidth=$windowWidth;
}
$(this).parents('.parallax_slider_outer').css('height',$sliderHeight);
$(this).css('height',$sliderHeight);
$(this).find('.swiper-container, .swiper-slide').css({'height':$sliderHeight+1});
$(this).find('.swiper-container').css('width', $sliderWidth);
if(!$(this).is('[data-parallax="true"]')){
$(this).find('.video-wrap').width($sliderWidth+2);
$(this).find('.video-wrap').height($sliderHeight+2);
var scale_h=$sliderWidth / vid_w_orig;
var scale_v=($sliderHeight - $headerHeight) / vid_h_orig;
var scale=scale_h > scale_v ? scale_h:scale_v;
min_w=1280/720 * ($sliderHeight+20);
if(scale * vid_w_orig < min_w){scale=min_w / vid_w_orig;}
$(this).find('video, .mejs-overlay, .mejs-poster').width(Math.ceil(scale * vid_w_orig +2));
$(this).find('video, .mejs-overlay, .mejs-poster').height(Math.ceil(scale * vid_h_orig +2));
$(this).find('.video-wrap').scrollLeft(($(this).find('video').width() - $sliderWidth) / 2);
$(this).find('.swiper-slide').each(function(){
if($(this).find('.video-wrap').length > 0){
if($(this).attr('data-bg-alignment')==='center'){
$(this).find('.video-wrap, .mejs-overlay, .mejs-poster').scrollTop(($(this).find('video').height() - ($sliderHeight)) / 2);
}
else if($(this).attr('data-bg-alignment')==='bottom'){
$(this).find('.video-wrap').scrollTop(($(this).find('video').height() - ($sliderHeight+2)));
}else{
$(this).find('.video-wrap').scrollTop(0);
}}
});
}}
});
}
resizeToCover();
function captionTransition(obj){
resizeToCover();
var $containerClass;
(typeof obj=='undefined') ? $containerClass='div[id^=ns-id-]':$containerClass='#'+$(obj.container).parents('.nectar-slider-wrap').attr('id');
var fromLeft=Math.abs(parseInt($($containerClass+' .swiper-wrapper').css('left')));
var currentSlide=Math.round(fromLeft/$($containerClass+' .swiper-slide').width());
var $slideNum=$($containerClass+':first .swiper-wrapper > div').length;
var captionTransString=$($containerClass).is('[data-caption-trans]') ? $($containerClass).attr('data-caption-trans'):'fade_in_from_bottom';
currentSlide=$($containerClass + ' .swiper-slide-active').index();
if($($containerClass+' .swiper-slide:nth-child('+ (currentSlide + 1) +')').find('.content *').length > 0&&captionTransString!=='reveal_title'){
if($($containerClass+' .swiper-slide:nth-child('+ (currentSlide + 1) +')').find('.content *').css('opacity')!='0'&&!$('html').hasClass('no-video')){
playVideoBG(currentSlide + 1, $containerClass);
if(!$($containerClass+' .swiper-slide:nth-child('+ (currentSlide + 1) +')').hasClass('autorotate-shown')){
return false;
}else{
$($containerClass+' .swiper-slide').removeClass('autorotate-shown');
}}
}
if($($containerClass+' .swiper-slide:nth-child('+ (currentSlide + 1) +')').find('.content .ns-heading-el').length > 0&&captionTransString==='reveal_title'){
if($($containerClass+' .swiper-slide:nth-child('+ (currentSlide + 1) +')').find('.content .ns-heading-el .word').css('opacity')!='0'&&!$('html').hasClass('no-video')){
playVideoBG(currentSlide + 1, $containerClass);
if(!$($containerClass+' .swiper-slide:nth-child('+ (currentSlide + 1) +')').hasClass('autorotate-shown')){
return false;
}else{
$($containerClass+' .swiper-slide').removeClass('autorotate-shown');
}}
}
if(!$('html').hasClass('no-video')){
if(captionTransString==='fade_in_from_bottom'){
if($($containerClass).parents('.wpb_gallery').length==0){
anime.remove($containerClass+' .swiper-slide .content p, '+$containerClass+' .swiper-slide .content h2, '+$containerClass+' .swiper-slide .content h1, '+$containerClass+' .swiper-slide .content h3, '+$containerClass+' .swiper-slide .content .buttons');
}
$($containerClass+' .swiper-slide .content p, '+$containerClass+' .swiper-slide .content h2, '+$containerClass+' .swiper-slide .content h1, '+$containerClass+' .swiper-slide .content h3, '+$containerClass+' .swiper-slide .content .buttons').stop(true,true).css({'opacity':0, 'transform':'translateZ(0) translateY(40px)'});
}else if(captionTransString==='reveal_title'){
$($containerClass+' .swiper-slide .content .ns-heading-el .word').stop(true,true).css({'opacity': '0'});
$($containerClass+' .swiper-slide .content .ns-heading-el .word > [class*="char"]').css({ 'opacity': '0'});
$($containerClass+' .swiper-slide .content .ns-heading-el .word > [class*="char"] > span').css({'transform':'scale(0) translateZ(0)'});
anime.remove($containerClass+' .swiper-slide .content p, '+$containerClass+' .swiper-slide .content .buttons');
$($containerClass+' .swiper-slide .content p, '+$containerClass+' .swiper-slide .content .buttons').stop(true,true).css({'opacity':0, 'transform':'translateZ(0) translateY(40px)'});
}}
$($containerClass+' .swiper-slide').each(function(){
if($(this).find('.video-wrap video').length > 0&&!$('html').hasClass('no-video')&&!$onMobileBrowser){
$(this).find('.video-wrap video').get(0).pause();
}});
$($containerClass+' .swiper-slide:not(".swiper-slide-active")').each(function(){
if($(this).find('.video-wrap video').length > 0){
if($(this).find('.video-wrap video').get(0).currentTime!=0){
$(this).find('.video-wrap video').get(0).currentTime=0;
}}
});
if($($containerClass +' .swiper-container').attr('data-loop')==='true'){
if($($containerClass+' .swiper-slide-active').index()+1==2 &&
$($containerClass+' .swiper-slide-active video').length > 0 &&
!$('html').hasClass('no-video')&&!$onMobileBrowser){
$($containerClass+' .swiper-slide:last-child').find('.video-wrap video').get(0).play();
$($containerClass+' .swiper-slide:last-child').find('.video-wrap video').get(0).pause();
}
if($($containerClass+' .swiper-slide-active').index()+1==$slideNum-1 &&
$($containerClass+' .swiper-slide-active video').length > 0 &&
!$('html').hasClass('no-video')&&!$onMobileBrowser){
$($containerClass+' .swiper-slide:first-child').find('.video-wrap video').get(0).play();
$($containerClass+' .swiper-slide:first-child').find('.video-wrap video').get(0).pause();
}
if($($containerClass+' .swiper-slide-active').index()+1!=2 &&
$($containerClass+' .swiper-slide:nth-child(2) video').length > 0 &&
!$('html').hasClass('no-video')&&!$onMobileBrowser){
$($containerClass+' .swiper-slide:last-child').find('.video-wrap video').get(0).play();
$($containerClass+' .swiper-slide:last-child').find('.video-wrap video').get(0).pause();
$($containerClass+' .swiper-slide:nth-child(2) video').get(0).pause();
if($($containerClass+' .swiper-slide:nth-child(2) video').get(0).currentTime!=0){
$($containerClass+' .swiper-slide:nth-child(2) video').get(0).currentTime=0;
}}
if($($containerClass).attr('data-overall_style')!='directional'){
if($($containerClass+' .swiper-slide-active').index()+1==$slideNum-1){
$($containerClass+' .swiper-slide:nth-child(1)').find('.content').children().each(function(i){
captionTransAnimation($(this),i,captionTransString);
});
}
if($($containerClass+' .swiper-slide-active').index()+1==2){
$($containerClass+' .swiper-slide:nth-child('+ ($slideNum) + ')').find('.content').children().each(function(i){
captionTransAnimation($(this),i,captionTransString);
});
}
if($($containerClass+' .swiper-slide-active').index()+1==$slideNum){
$($containerClass+' .swiper-slide:nth-child(2)').find('.content').children().each(function(i){
captionTransAnimation($(this),i,captionTransString);
});
}
if($($containerClass+' .swiper-slide-active').index()+1==1){
$($containerClass+' .swiper-slide:eq(-2)').find('.content').children().each(function(i){
captionTransAnimation($(this),i,captionTransString);
});
}}
}
setTimeout(function(){
playVideoBG($($containerClass + ' .swiper-slide-active').index() + 1, $containerClass);
},50);
if($($containerClass).attr('data-overall_style')!='directional'){
$($containerClass+' .swiper-slide:nth-child('+ (currentSlide + 1) +')').find('.content').children().each(function(i){
captionTransAnimation($(this),i,captionTransString);
});
}
$captionTrans++;
if($captionTrans==$('.swiper-wrapper').length){
$('div.first_video_slide').addClass('nulled');
}
setTimeout(function(){
if($('.slider-next').hasClass('next-arrow-move')){
$('.nectar-slider-wrap[data-button-styling="btn_with_preview"] .swiper-container .slider-next').trigger('mouseenter');
}else if($('.slider-prev').hasClass('prev-arrow-move')){
$('.nectar-slider-wrap[data-button-styling="btn_with_preview"] .swiper-container .slider-prev').trigger('mouseenter');
}
if($($containerClass).attr('data-button-styling')==='btn_with_preview'){
$($containerClass+' .swiper-slide').addClass('prev-high-z-index-static');
$($containerClass+' .swiper-slide.swiper-slide-active').removeClass('prev-high-z-index-static');
}},175);
}
function NSsplitLineText(){
$('.nectar-slider-wrap[data-caption-trans="reveal_title"] .content .ns-heading-el').each(function(){
var storedCSSOpacity=($(this).parents('.swiper-slide-active').length > 0&&$(this).find('.word').length > 0) ? $(this).find('> .word').css('opacity'):'0';
var textArr=$(this).text();
textArr=textArr.trim();
textArr=textArr.split(' ');
$(this)[0].innerHTML='';
for(var i=0;i<textArr.length;i++){
$(this)[0].innerHTML +='<span class="word">'+ textArr[i] + '</span> ';
}
$(this).find('.word').each(function(){
charming($(this)[0]);
});
$(this).find('[class*="char"]').wrapInner('<span class="char-inner" />');
if($(this).parents('.swiper-slide-active').length > 0){
$(this).find('> .word').css('opacity', storedCSSOpacity);
}});
}
function charming(element, options){
options=options||{}
element.normalize()
var splitRegex=options.splitRegex
var tagName=options.tagName||'span'
var classPrefix=options.classPrefix!=null ? options.classPrefix:'char'
var count=1
function inject (element){
var parentNode=element.parentNode
var string=element.nodeValue
var split=splitRegex ? string.split(splitRegex):string
var length=split.length
var i=-1
while (++i < length){
var node=document.createElement(tagName)
if(classPrefix){
node.className=classPrefix + count
count++
}
node.appendChild(document.createTextNode(split[i]))
node.setAttribute('aria-hidden', 'true')
parentNode.insertBefore(node, element)
}
if(string.trim()!==''){
parentNode.setAttribute('aria-label', string)
}
parentNode.removeChild(element)
}
;(function traverse (element){
if(element.nodeType===3){
return inject(element)
}
var childNodes=Array.prototype.slice.call(element.childNodes)
var length=childNodes.length
if(length===1&&childNodes[0].nodeType===3){
return inject(childNodes[0])
}
var i=-1
while (++i < length){
traverse(childNodes[i])
}})(element)
}
NSsplitLineText();
var charCount=0;
function captionTransAnimation(obj,index,animationName){
if(animationName==='reveal_title'){
if(obj.parent().find('.word').length===0) charCount=0;
if(index===0&&obj.parent().find('.word').length > 0){
charCount=obj.find('.word > [class*="char"]').length;
obj.find('.word').css('opacity','1');
obj.find('.word > [class*="char"]').each(function(i){
anime({
targets: $(this)[0],
translateY: [50,0],
translateZ: 0,
opacity: 1,
easing: 'cubicBezier(.25,.25,.1,1)',
duration: 700,
delay: i*18
});
anime({
targets: $(this).find('> span')[0],
scale: [0,1],
translateZ: 0,
easing: 'cubicBezier(.25,.25,.1,1)',
duration: 700,
delay: i*18
});
});
}else{
anime({
targets: obj[0],
translateY: [50,0],
translateZ: 0,
opacity: 1,
easing: 'cubicBezier(.25,.25,.1,1)',
duration: 850,
delay: (index*150 + (charCount*18))
});
}}else if(animationName==='fade_in_from_bottom'){
anime({
targets: obj[0],
translateY: [50,0],
translateZ: 0,
opacity: 1,
easing: 'cubicBezier(.25,.25,.1,1)',
duration: 800,
delay: (index*130)
});
}}
function playVideoBG(nthChild, containerClass){
if($(containerClass+' .swiper-slide:nth-child('+ (nthChild) +')').find('.video-wrap video').length > 0){
if(!$('html').hasClass('no-video')&&!$onMobileBrowser){
$(containerClass+' .swiper-slide:nth-child('+ (nthChild) +')').find('.video-wrap video').get(0).play();
}
if(!$(containerClass+' .swiper-slide:nth-child('+ (nthChild) +')').find('.mejs-overlay.mejs-overlay-play').hasClass('playing') &&
$(containerClass+' .swiper-slide:nth-child('+ (nthChild) +')').find('.mejs-overlay.mejs-overlay-play').hasClass('mobile-played')){
$(containerClass+' .swiper-slide:nth-child('+ (nthChild) +')').find('.mejs-overlay.mejs-overlay-play').addClass('playing');
}
if(!$(containerClass+' .swiper-slide:nth-child('+ (nthChild) +')').find('.mejs-poster').hasClass('playing') &&
$(containerClass+' .swiper-slide:nth-child('+ (nthChild) +')').find('.mejs-poster').hasClass('mobile-played')){
$(containerClass+' .swiper-slide:nth-child('+ (nthChild) +')').find('.mejs-poster').addClass('playing');
}
var $that=$(containerClass+' .swiper-slide:nth-child('+ (nthChild) +')').find('.mejs-overlay.mejs-overlay-play');
var $that2=$(containerClass+' .swiper-slide:nth-child('+ (nthChild) +')').find('.mejs-poster');
if($that.hasClass('playing')&&$that.hasClass('mobile-played')){
setTimeout(function(){
$that.addClass('behind-buttons');
$that2.addClass('behind-buttons');},200);
}else{
$that.removeClass('behind-buttons');
$that2.removeClass('behind-buttons');
}}
}
function slideContentPos(){
$('.swiper-wrapper').each(function(){
var $sliderHeight=parseInt($(this).parents('.swiper-container').attr('data-height'));
var $minimumHeight=($(this).parents('.swiper-container').css('min-height')) ? parseInt($(this).parents('.swiper-container').css('min-height')):0;
if($minimumHeight > $sliderHeight){
$sliderHeight=$minimumHeight;
}
var $transparentHeader=($('#header-outer[data-transparent-header="true"]').length > 0) ? $('#header-outer').height():0;
if($(this).parents('.first-section').length==0&&$(this).parents('.top-level').length==0||window.innerWidth < 1000){
$transparentHeader=0;
}else if($transparentHeader!=0&&$('#header-outer[data-remove-border="true"]').length > 0){
$transparentHeader=$transparentHeader/2
}
if($(this).parents('.swiper-container[data-bullet_position="right"][data-bullets="true"]').length > 0&&$transparentHeader > 0 ||
$(this).parents('.swiper-container[data-bullet_position="left"][data-bullets="true"]').length > 0&&$transparentHeader > 0){
var secondaryHeaderHeight=($('#header-secondary-outer').length > 0) ? $('#header-secondary-outer').height():0;
$(this).parents('.swiper-container').find('.slider-pagination-wrap').css({
'margin-top': ($transparentHeader + secondaryHeaderHeight)/2
});
}
$(this).find('.swiper-slide').each(function(){
var $contentHeight2=0;
$(this).find('.content > *').each(function(){
$contentHeight2 +=$(this).height() + parseInt($(this).css('margin-bottom')) + parseInt($(this).css('padding-bottom'));
});
if($(this).attr('data-y-pos')==='top'&&window.innerWidth > 690){
var secondaryHeaderHeight=($('#header-secondary-outer').length > 0) ? $('#header-secondary-outer').height():0;
var $topHeight=($transparentHeader > 0) ? $transparentHeader + secondaryHeaderHeight + 60:60;
$(this).find('.content').css('top', $topHeight + 'px');
}
else if($(this).attr('data-y-pos')==='middle'||window.innerWidth <=690){
$(this).find('.content').css('top', ((($sliderHeight + $transparentHeader)/2) - ($contentHeight2/2)) + 'px');
}else{
$(this).find('.content').css({'bottom': '75px', 'top': 'auto'});
}});
});
}
function showSliderControls(){
$('.swiper-container .slider-prev, .swiper-container .slider-next, .slider-pagination').animate({'opacity':1},550,'easeOutCubic');
}
function sliderLoadIn(slider,index){
slider.find('.nectar-slider-loading').fadeOut(800,'easeInOutExpo');
setTimeout(function(){
slider.find('.nectar-slider-loading').css('display','none');
},1000);
$('.nectar-slider-wrap.first-section .swiper-container .swiper-wrapper .swiper-slide').removeClass('not-loaded');
slider.find('span.ie-fix').remove();
if(slider.find('.swiper-container[data-bullet_style="see_through_ar_visualized"][data-bullets="true"]').length > 0){
slider.find('.swiper-active-switch').removeClass('ar-vis');
setTimeout(function(){
slider.parent().find('.swiper-active-switch').addClass('ar-vis');
},50);
}
sliderLoadedLength++;
if(!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)){ autorotateInit(slider,index); }}
$('body').on('mouseover','.swiper-slide', function(){
if(!$onMobileBrowser &&
$(this).find('video').length > 0 &&
$(this).find('video').get(0).paused==true &&
$animating==false){
$(this).find('video').get(0).play();
}});
$('body').on('click', '.mejs-overlay.mejs-overlay-play',function(){
$(this).toggleClass('playing');
$(this).addClass('mobile-played');
$(this).parent().find('.mejs-poster').toggleClass('playing');
$(this).parent().find('.mejs-poster').addClass('mobile-played');
var $that=$(this);
var $that2=$(this).parent().find('.mejs-poster');
if($(this).hasClass('playing')&&$(this).hasClass('mobile-played')){
setTimeout(function(){
$that.addClass('behind-buttons');
$that2.addClass('behind-buttons');
},200);
}else{
setTimeout(function(){
$that.removeClass('behind-buttons');
$that2.removeClass('behind-buttons');
},1);
}});
function autorotateInit(slider,num){
var $autoplayVal=slider.attr('data-autorotate');
var $sliderNum=num;
if(typeof $autoplayVal!='undefined' &&
$autoplayVal.length!='0'&&parseInt($autoplayVal)){
nectarSlideRotateInit(slider,$autoplayVal,$sliderNum);
}}
function nectarSlideRotateInit(slider,interval,sliderNum){
autoplay[sliderAutoplayCount]={
interval: setInterval(function(){ nectarSlideRotate(slider, sliderNum); } ,interval),
nectarSliderNum: sliderNum,
autoplayNum: sliderAutoplayCount,
nectarSliderID: slider.attr('id')
};
$('#'+slider.attr('id')).attr('autoplay-id',sliderAutoplayCount);
if($('#'+slider.attr('id')).find('[data-bullet_style="see_through_ar_visualized"]').length > 0){
$('#'+slider.attr('id')).find('.slider-pagination svg circle.time').css('transition', 'stroke-dashoffset '+ (parseInt(interval) + 100) +'ms linear, stroke 0.2s ease');
}
var sliderClosure=slider;
var sliderAutoplayCountClosure=sliderAutoplayCount;
var intervalClosure=interval;
var sliderNumClosure=sliderNum;
$('#'+slider.attr('id') + ' a.slider-prev, #'+slider.attr('id') + ' a.slider-next, #' + slider.attr('id') + ' .slider-pagination span:not(.swiper-active-switch)').on('click', function(){
nectarSlideRotateReset(sliderClosure, sliderAutoplayCountClosure, intervalClosure, sliderNumClosure);
});
sliderAutoplayCount++;
}
function nectarSlideRotateReset(slider, sliderAutoplayCount, interval,sliderNum){
slider=(typeof slider.activeIndex==='undefined') ? slider:$(slider.container).parent();
sliderAutoplayCount=(typeof sliderAutoplayCount!=='undefined'&&typeof sliderAutoplayCount==='number') ? sliderAutoplayCount:'unknown';
if(sliderAutoplayCount==='unknown'){
$.each(autoplay,function(k,v){
if($('body').find('#' + v.nectarSliderID).length > 0&&v.nectarSliderID==$(slider).attr('id')){
sliderAutoplayCount=v.autoplayNum;
interval=($('body').find('#' + v.nectarSliderID).attr('data-autorotate').length > 0&&parseInt($('body').find('#' + v.nectarSliderID).attr('data-autorotate')) > 1000) ? $('body').find('#' + v.nectarSliderID).attr('data-autorotate'):4000;
sliderNum=v.nectarSliderNum;
}});
}
if(sliderAutoplayCount!=='unknown'){
clearInterval(autoplay[$('#'+slider.attr('id')).attr('autoplay-id')].interval);
autoplay[sliderAutoplayCount].interval=setInterval(function(){ nectarSlideRotate(slider, sliderNum); } ,interval);
}}
var resetTouchIndex=1;
var resetTouchIndexLast='unknown';
function nectarSlideRotateResetTouch(slider){
if(Math.abs(slider.touches.diff) < 15){ return }
if(resetTouchIndexLast=='unknown'&&$(slider.container).is('[data-loop="true"]')){
resetTouchIndexLast=1;
}else if(resetTouchIndexLast=='unknown'){
resetTouchIndexLast=0;
}
resetTouchIndex=slider.activeIndex;
nectarSlideRotateReset(slider);
if($(slider.container).is('[data-bullets="true"][data-bullet_style="see_through_ar_visualized"]')&&resetTouchIndex==resetTouchIndexLast){
var dotIndexStored=$(slider.container).find('.ar-vis').index();
$(slider.container).find('.ar-vis').removeClass('ar-vis');
setTimeout(function(){
$(slider.container).find('.slider-pagination > span:nth-child('+ (dotIndexStored + 1) +')').addClass('ar-vis');
},50);
}
resetTouchIndexLast=slider.activeIndex;
}
function nectarSlideRotate(slider, sliderNum){
if($(slider).hasClass('out-of-view')){
return true;
}
if($('#nectar_fullscreen_rows').length > 0){
if($(slider).parents('.wpb_row.active').length==0){
return true;
}}
if($nectarSliders[sliderNum].activeIndex + 1 < $(slider).find('.swiper-wrapper > div.swiper-slide').length){
if($(slider).attr('data-button-styling')==='btn_with_preview'){
$(slider).find('.swiper-slide').removeClass('high-z-index').removeClass('prev-high-z-index');
$(slider).find('.swiper-slide').removeClass('next-move').removeClass('prev-move');
}
if($(slider).attr('data-overall_style')!='directional'){
$nectarSliders[sliderNum].swipeNext();
}else{
$($nectarSliders[sliderNum].container).find('.slider-next').trigger('click');
}}else{
if($(slider).find('.swiper-container').is("[data-loop]")&&$(slider).find('.swiper-container').attr('data-loop')==='true'){
if($(slider).attr('data-overall_style')!='directional'){
$nectarSliders[sliderNum].swipeNext();
}else{
$($nectarSliders[sliderNum].container).find('.slider-next').trigger('click');
}}else{
if($(slider).attr('data-overall_style')!='directional'){
$nectarSliders[sliderNum].swipeTo(0,550);
}else{
$(slider).find('.swiper-container').addClass('directional-trans-prev');
$nectarSliders[sliderNum].swipeTo(0,550);
var $timeout2;
clearTimeout($timeout2);
$timeout2=setTimeout(function(){ onChangeStart($nectarSliders[sliderNum]); } ,100);
}}
}}
function clearAutoplay(e){
var $autoplayVal=$('#'+$(e.container).parent().attr('id')).attr('data-autorotate');
if(typeof $autoplayVal!='undefined'&&$autoplayVal.length!='0'&&parseInt($autoplayVal)){
clearInterval(autoplay[$('#'+$(e.container).parent().attr('id')).attr('autoplay-id')].interval);
}}
function onChangeStart(e){
var $obj=e;
$animating=true;
var $slideNum=$($obj.container).find('.swiper-wrapper > div').length;
var $activeIndex=($($obj.container).attr('data-loop')==='true') ? $obj.activeIndex + 1: $obj.activeIndex+1;
var $activeIndex2=($($obj.container).attr('data-loop')==='true') ? $obj.activeIndex: $obj.activeIndex+1;
if($($obj.container).parent().attr('data-overall_style')!=='directional'){
if($($obj.container).parents('.first-section').length > 0&&$($obj.container).find('.swiper-slide-active[data-color-scheme="dark"]').length > 0 ||
$('#nectar_fullscreen_rows').length > 0&&$($obj.container).find('.swiper-slide-active[data-color-scheme="dark"]').length > 0){
$('#header-outer').addClass('dark-slide');
}else if($($obj.container).parents('.first-section').length > 0||$('#nectar_fullscreen_rows').length > 0){
$('#header-outer').removeClass('dark-slide');
}}else{
if($($obj.container).hasClass('directional-trans-next')){
if($($obj.container).parents('.first-section').length > 0&&$($obj.container).find('.swiper-slide-active').next('.swiper-slide').is('[data-color-scheme="dark"]')){
$('#header-outer').addClass('dark-slide');
}else{
$('#header-outer').removeClass('dark-slide');
}}
else if($($obj.container).hasClass('directional-trans-prev')){
if($($obj.container).parents('.first-section').length > 0&&$($obj.container).find('.swiper-slide-active').prev('.swiper-slide').is('[data-color-scheme="dark"]')){
$('#header-outer').addClass('dark-slide');
}else{
$('#header-outer').removeClass('dark-slide');
}}
else if($($obj.container).hasClass('directional-trans-current')){
if($($obj.container).parents('.first-section').length > 0&&$($obj.container).find('.swiper-slide-active').is('[data-color-scheme="dark"]')){
$('#header-outer').addClass('dark-slide');
}else{
$('#header-outer').removeClass('dark-slide');
}}
}
if($($obj.container).parent().attr('data-overall_style')!='directional'){
if($($obj.container).find('.swiper-slide:nth-child('+ ($activeIndex) +')').attr('data-color-scheme')==='dark'){
$($obj.container).find('.slider-pagination').addClass('dark-cs');
$($obj.container).find('.slider-prev, .slider-next').addClass('dark-cs');
}else{
$($obj.container).find('.slider-pagination').removeClass('dark-cs');
$($obj.container).find('.slider-prev, .slider-next').removeClass('dark-cs');
}}else{
if($($obj.container).hasClass('directional-trans-next')){
if($($obj.container).find('.swiper-slide:nth-child('+ ($activeIndex+1) +')').attr('data-color-scheme')==='dark'){
$($obj.container).find('.slider-pagination').addClass('dark-cs');
$($obj.container).find('.slider-prev, .slider-next').addClass('dark-cs');
}else{
$($obj.container).find('.slider-pagination').removeClass('dark-cs');
$($obj.container).find('.slider-prev, .slider-next').removeClass('dark-cs');
}}else if($($obj.container).hasClass('directional-trans-prev')){
if($($obj.container).find('.swiper-slide:nth-child('+ ($activeIndex-1) +')').attr('data-color-scheme')==='dark'){
$($obj.container).find('.slider-pagination').addClass('dark-cs');
$($obj.container).find('.slider-prev, .slider-next').addClass('dark-cs');
}else{
$($obj.container).find('.slider-pagination').removeClass('dark-cs');
$($obj.container).find('.slider-prev, .slider-next').removeClass('dark-cs');
}}else if($($obj.container).hasClass('directional-trans-current')){
if($($obj.container).find('.swiper-slide:nth-child('+ ($activeIndex) +')').attr('data-color-scheme')==='dark'){
$($obj.container).find('.slider-pagination').addClass('dark-cs');
$($obj.container).find('.slider-prev, .slider-next').addClass('dark-cs');
}else{
$($obj.container).find('.slider-pagination').removeClass('dark-cs');
$($obj.container).find('.slider-prev, .slider-next').removeClass('dark-cs');
}}
}
$($obj.container)
.find('.swiper-slide .video-texture')
.removeClass('no-trans')
.removeClass('light-overlay')
.removeClass('dark-overlay')
.removeClass('half-dark-overlay')
.removeClass('half-light-overlay');
$($obj.container).find('.slider-prev .slide-count .slide-current').html($activeIndex2);
$($obj.container).find('.slider-next .slide-count .slide-current').html($activeIndex2);
if($($obj.container).attr('data-loop')==='true'){
if($($obj.container).find('.swiper-slide-active').index()+1==1){
$($obj.container).find('.slider-next .slide-count .slide-current, .slider-prev .slide-count .slide-current').html($slideNum - 2);
}
else if($($obj.container).find('.swiper-slide-active').index()+1==$slideNum){
$($obj.container).find('.slider-next .slide-count .slide-current, .slider-prev .slide-count .slide-current').html(1);
}}
if($obj.activeIndex >=10){ $($obj.container).find('.slider-next .slide-count .slide-current').addClass('double-digits'); }else{
$($obj.container).find('.slider-next .slide-count .slide-current').removeClass('double-digits');
}
if($($obj.container).attr('data-loop')==='true'){
if($obj.previousIndex==1&&$obj.activeIndex==0||$obj.previousIndex==$slideNum - 2&&$obj.activeIndex==$slideNum - 1){
$('.swiper-slide').addClass('duplicate-transition');
}}
var sliderIndex=0;
slideAnimationQueues.forEach(function(val,index){
if(typeof val==='undefined') return;
if(val.sliderID==$($obj.container).parent().attr('id')){
sliderIndex=index;
}});
if($($obj.container).parent().is('[data-bg-animation="ken_burns"]')&&$($obj.container).parents('.nectar-slider-wrap[data-overall_style="directional"]').length===0){
$($obj.container).find('.swiper-slide').addClass('ken-burns');
clearTimeout(slideAnimationQueues[sliderIndex].kenBurnsInterval);
slideAnimationQueues[sliderIndex].kenBurnsInterval=setTimeout(function(){
$($obj.container).find('.swiper-slide:not(".swiper-slide-active")').removeClass('ken-burns');
},600);
}
var nsTimeout=($($obj.container).parents('.nectar-slider-wrap[data-transition="fade"]').length > 0) ? 350:525;
clearTimeout(slideAnimationQueues[sliderIndex].captionInterval);
if($($obj.container).parents('.nectar-slider-wrap[data-overall_style="directional"]').length===0){
slideAnimationQueues[sliderIndex].captionInterval=setTimeout(function(){
$animating=false;
if($($obj.container).attr('data-loop')==='true'){
$('.swiper-slide').removeClass('duplicate-transition');
$.each($nectarSliders,function(k){
$nectarSliders[k].updateActiveSlide();
$nectarSliders[k].fixLoop();
});
}
captionTransition($obj);
},nsTimeout);
}}
window.requestAnimationFrame=window.requestAnimationFrame
|| window.mozRequestAnimationFrame
|| window.webkitRequestAnimationFrame
|| window.msRequestAnimationFrame
|| function(f){setTimeout(f, 1000/60)}
var $sliderHeight;
function sliderParallaxUpdateHeight(){
$sliderHeight=parseInt($('.parallax_slider_outer.first-section .swiper-container').attr('data-height'));
}
var $headerNavSpace=($('body[data-header-format="left-header"]').length > 0&&$(window).width() > 1000) ? 0:$('#header-space').height();
function sliderParallaxInit(){
if($('#portfolio-extra').length > 0&&$('#full_width_portfolio').length===0){
return false;
}
$('.parallax_slider_outer').addClass('element-in-view');
if(!$onMobileBrowser){
if($('.project-title.parallax-effect').length > 0){
$('.parallax_slider_outer.first-section .swiper-slide .content, .nectar-slider-wrap.first-section .swiper-slide .content').css('margin-top','0px');
$('.swiper-container .slider-prev, .swiper-container .slider-next').css('margin-top','-28px');
}
if($('.demo_store').length > 0) $('.project-title.parallax-effect').css('margin-top','-25px');
if($('#full_width_portfolio').length > 0){
$('.parallax_slider_outer.first-section').css('margin-top','93px');
}
$(window).off('resize.nsHeightUpdate');
$(window).on('resize.nsHeightUpdate',sliderParallaxUpdateHeight);
}}
function parallaxCheck(){
$(window).off('scroll.nsParallaxScroll');
if($('.parallax_slider_outer').length > 0){
sliderParallaxInit();
if($('body[data-hhun="1"]').length > 0&&!$('#header-outer[data-remove-fixed="1"]').length > 0){
$('#header-outer').addClass('parallax-contained');
}}
}
parallaxCheck();
$('.portfolio-items a.pp:contains(Video), .swiper-container .buttons a.pp').on('click', function(){
$('.swiper-slide').each(function(){
if($(this).find('.video-wrap video').length > 0){
$(this).find('.video-wrap video').get(0).pause();
}});
});
function hexConvert(x){
return ("0" + parseInt(x).toString(16)).slice(-2);
}
$.cssHooks.backgroundColor={
get: function(elem){
var bg;
if(elem.currentStyle){
bg=elem.currentStyle["backgroundColor"];
}
else if(window.getComputedStyle){
bg=document.defaultView.getComputedStyle(elem,null).getPropertyValue("background-color");
}
if(bg.search("rgb")==-1){
return bg;
}else{
bg=bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
if(bg){
return "#" + hexConvert(bg[1]) + hexConvert(bg[2]) + hexConvert(bg[3]);
}}
}}
$('.swiper-slide.external-full-link a.entire-slide-link').attr('target', '_blank');
$('.swiper-slide.external-button-1 .buttons > div:nth-child(1) a').attr('target', '_blank');
$('.swiper-slide.external-button-2 .buttons > div:nth-child(2) a').attr('target', '_blank');
headerPadding=headerPadding - headerPadding/1.8;
$('body').on('click','.slider-down-arrow',function(){
if($(this).parents('#nectar_fullscreen_rows').length > 0){
if($('#fp-nav li .active').parent().next('li').length > 0){
$('#fp-nav li .active').parent().next('li').find('a').trigger('click');
}
return;
}
var $currentSlider=$(this).parents('.swiper-container');
var $topDistance=$currentSlider.attr('data-height');
var $offset=($currentSlider.parents('.first-section').length===0||$('#header-outer[data-transparent-header="true"]').length===0) ? $currentSlider.offset().top:0;
var materialSecondary=0;
if($('body.material').length > 0&&$('#header-secondary-outer').length > 0){ materialSecondary=$('#header-secondary-outer').height(); }
if($('body[data-permanent-transparent="1"]').length===0){
if(!$('body').hasClass('mobile')){
if($('body[data-hhun="1"]').length > 0){
$('body,html').stop().animate({
scrollTop: parseInt($topDistance) + $offset + 2
},1000,'easeInOutCubic')
}else{
if($('#header-outer[data-condense="true"]').length > 0){
var $headerSpan9=$('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9');
var $secondaryHeaderHeight=($('#header-secondary-outer').length > 0) ? $('#header-secondary-outer').height():0;
$headerNavSpace=$('#header-outer').height() - (parseInt($headerSpan9.position().top) - parseInt($('#header-outer #logo').css('margin-top'))) - parseInt($secondaryHeaderHeight);
$('body,html').stop().animate({
scrollTop: parseInt($topDistance - $headerNavSpace) + 2
},1000,'easeInOutCubic');
}else{
$('body,html').stop().animate({
scrollTop: parseInt($topDistance - $('#header-space').height()) + parseInt(shrinkNum) + headerPadding*2 + $offset + 2 + materialSecondary
},1000,'easeInOutCubic');
}}
}else{
var $scrollPos=($('#header-outer[data-mobile-fixed="1"]').length > 0) ? parseInt($topDistance) - $('#header-space').height() + parseInt($currentSlider.offset().top) + 2:parseInt($topDistance) + parseInt($currentSlider.offset().top) + 2;
$('body,html').stop().animate({
scrollTop: $scrollPos
},1000,'easeInOutCubic')
}}else{
$('body,html').stop().animate({
scrollTop: parseInt($topDistance) + parseInt($currentSlider.offset().top) + 2
},1000,'easeInOutCubic')
}
return false;
});
});
!function(n){"function"==typeof define&&define.amd?define(["jquery"],n):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),n(t),t}:n(jQuery)}(function(t){var e,n,s,p,r,o,h,f,g,m,y,v,i,a,_,s=((u=t&&t.fn&&t.fn.select2&&t.fn.select2.amd?t.fn.select2.amd:u)&&u.requirejs||(u?n=u:u={},g={},m={},y={},v={},i=Object.prototype.hasOwnProperty,a=[].slice,_=/\.js$/,h=function(e,t){var n,s,i=c(e),r=i[0],t=t[1];return e=i[1],r&&(n=x(r=l(r,t))),r?e=n&&n.normalize?n.normalize(e,(s=t,function(e){return l(e,s)})):l(e,t):(r=(i=c(e=l(e,t)))[0],e=i[1],r&&(n=x(r))),{f:r?r+"!"+e:e,n:e,pr:r,p:n}},f={require:function(e){return w(e)},exports:function(e){var t=g[e];return void 0!==t?t:g[e]={}},module:function(e){return{id:e,uri:"",exports:g[e],config:(t=e,function(){return y&&y.config&&y.config[t]||{}})};var t}},r=function(e,t,n,s){var i,r,o,a,l,c=[],u=typeof n,d=A(s=s||e);if("undefined"==u||"function"==u){for(t=!t.length&&n.length?["require","exports","module"]:t,a=0;a<t.length;a+=1)if("require"===(r=(o=h(t[a],d)).f))c[a]=f.require(e);else if("exports"===r)c[a]=f.exports(e),l=!0;else if("module"===r)i=c[a]=f.module(e);else if(b(g,r)||b(m,r)||b(v,r))c[a]=x(r);else{if(!o.p)throw new Error(e+" missing "+r);o.p.load(o.n,w(s,!0),function(t){return function(e){g[t]=e}}(r),{}),c[a]=g[r]}u=n?n.apply(g[e],c):void 0,e&&(i&&i.exports!==p&&i.exports!==g[e]?g[e]=i.exports:u===p&&l||(g[e]=u))}else e&&(g[e]=n)},e=n=o=function(e,t,n,s,i){if("string"==typeof e)return f[e]?f[e](t):x(h(e,A(t)).f);if(!e.splice){if((y=e).deps&&o(y.deps,y.callback),!t)return;t.splice?(e=t,t=n,n=null):e=p}return t=t||function(){},"function"==typeof n&&(n=s,s=i),s?r(p,e,t,n):setTimeout(function(){r(p,e,t,n)},4),o},o.config=function(e){return o(e)},e._defined=g,(s=function(e,t,n){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no module name");t.splice||(n=t,t=[]),b(g,e)||b(m,e)||(m[e]=[e,t,n])}).amd={jQuery:!0},u.requirejs=e,u.require=n,u.define=s),u.define("almond",function(){}),u.define("jquery",[],function(){var e=t||$;return null==e&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),e}),u.define("select2/utils",["jquery"],function(r){var s={};function c(e){var t,n=e.prototype,s=[];for(t in n)"function"==typeof n[t]&&"constructor"!==t&&s.push(t);return s}s.Extend=function(e,t){var n,s={}.hasOwnProperty;function i(){this.constructor=e}for(n in t)s.call(t,n)&&(e[n]=t[n]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},s.Decorate=function(s,i){var e=c(i),t=c(s);function r(){var e=Array.prototype.unshift,t=i.prototype.constructor.length,n=s.prototype.constructor;0<t&&(e.call(arguments,s.prototype.constructor),n=i.prototype.constructor),n.apply(this,arguments)}i.displayName=s.displayName,r.prototype=new function(){this.constructor=r};for(var n=0;n<t.length;n++){var o=t[n];r.prototype[o]=s.prototype[o]}for(var a=0;a<e.length;a++){var l=e[a];r.prototype[l]=function(e){var t=function(){};e in r.prototype&&(t=r.prototype[e]);var n=i.prototype[e];return function(){return Array.prototype.unshift.call(arguments,t),n.apply(this,arguments)}}(l)}return r};function e(){this.listeners={}}e.prototype.on=function(e,t){this.listeners=this.listeners||{},e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t]},e.prototype.trigger=function(e){var t=Array.prototype.slice,n=t.call(arguments,1);this.listeners=this.listeners||{},0===(n=null==n?[]:n).length&&n.push({}),(n[0]._type=e)in this.listeners&&this.invoke(this.listeners[e],t.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},e.prototype.invoke=function(e,t){for(var n=0,s=e.length;n<s;n++)e[n].apply(this,t)},s.Observable=e,s.generateChars=function(e){for(var t="",n=0;n<e;n++)t+=Math.floor(36*Math.random()).toString(36);return t},s.bind=function(e,t){return function(){e.apply(t,arguments)}},s._convertData=function(e){for(var t in e){var n=t.split("-"),s=e;if(1!==n.length){for(var i=0;i<n.length;i++){var r=n[i];(r=r.substring(0,1).toLowerCase()+r.substring(1))in s||(s[r]={}),i==n.length-1&&(s[r]=e[t]),s=s[r]}delete e[t]}}return e},s.hasScroll=function(e,t){var n=r(t),s=t.style.overflowX,i=t.style.overflowY;return(s!==i||"hidden"!==i&&"visible"!==i)&&("scroll"===s||"scroll"===i||(n.innerHeight()<t.scrollHeight||n.innerWidth()<t.scrollWidth))},s.escapeMarkup=function(e){var t={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof e?e:String(e).replace(/[&<>"'\/\\]/g,function(e){return t[e]})},s.__cache={};var n=0;return s.GetUniqueElementId=function(e){var t=e.getAttribute("data-select2-id");return null!=t||(t=e.id?"select2-data-"+e.id:"select2-data-"+(++n).toString()+"-"+s.generateChars(4),e.setAttribute("data-select2-id",t)),t},s.StoreData=function(e,t,n){e=s.GetUniqueElementId(e);s.__cache[e]||(s.__cache[e]={}),s.__cache[e][t]=n},s.GetData=function(e,t){var n=s.GetUniqueElementId(e);return t?s.__cache[n]&&null!=s.__cache[n][t]?s.__cache[n][t]:r(e).data(t):s.__cache[n]},s.RemoveData=function(e){var t=s.GetUniqueElementId(e);null!=s.__cache[t]&&delete s.__cache[t],e.removeAttribute("data-select2-id")},s.copyNonInternalCssClasses=function(e,t){var n=(n=e.getAttribute("class").trim().split(/\s+/)).filter(function(e){return 0===e.indexOf("select2-")}),t=(t=t.getAttribute("class").trim().split(/\s+/)).filter(function(e){return 0!==e.indexOf("select2-")}),t=n.concat(t);e.setAttribute("class",t.join(" "))},s}),u.define("select2/results",["jquery","./utils"],function(d,p){function s(e,t,n){this.$element=e,this.data=n,this.options=t,s.__super__.constructor.call(this)}return p.Extend(s,p.Observable),s.prototype.render=function(){var e=d('<ul class="select2-results__options" role="listbox"></ul>');return this.options.get("multiple")&&e.attr("aria-multiselectable","true"),this.$results=e},s.prototype.clear=function(){this.$results.empty()},s.prototype.displayMessage=function(e){var t=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var n=d('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),s=this.options.get("translations").get(e.message);n.append(t(s(e.args))),n[0].className+=" select2-results__message",this.$results.append(n)},s.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},s.prototype.append=function(e){this.hideLoading();var t=[];if(null!=e.results&&0!==e.results.length){e.results=this.sort(e.results);for(var n=0;n<e.results.length;n++){var s=e.results[n],s=this.option(s);t.push(s)}this.$results.append(t)}else 0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"})},s.prototype.position=function(e,t){t.find(".select2-results").append(e)},s.prototype.sort=function(e){return this.options.get("sorter")(e)},s.prototype.highlightFirstItem=function(){var e=this.$results.find(".select2-results__option--selectable"),t=e.filter(".select2-results__option--selected");(0<t.length?t:e).first().trigger("mouseenter"),this.ensureHighlightVisible()},s.prototype.setClasses=function(){var t=this;this.data.current(function(e){var s=e.map(function(e){return e.id.toString()});t.$results.find(".select2-results__option--selectable").each(function(){var e=d(this),t=p.GetData(this,"data"),n=""+t.id;null!=t.element&&t.element.selected||null==t.element&&-1<s.indexOf(n)?(this.classList.add("select2-results__option--selected"),e.attr("aria-selected","true")):(this.classList.remove("select2-results__option--selected"),e.attr("aria-selected","false"))})})},s.prototype.showLoading=function(e){this.hideLoading();e={disabled:!0,loading:!0,text:this.options.get("translations").get("searching")(e)},e=this.option(e);e.className+=" loading-results",this.$results.prepend(e)},s.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},s.prototype.option=function(e){var t=document.createElement("li");t.classList.add("select2-results__option"),t.classList.add("select2-results__option--selectable");var n,s={role:"option"},i=window.Element.prototype.matches||window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector;for(n in(null!=e.element&&i.call(e.element,":disabled")||null==e.element&&e.disabled)&&(s["aria-disabled"]="true",t.classList.remove("select2-results__option--selectable"),t.classList.add("select2-results__option--disabled")),null==e.id&&t.classList.remove("select2-results__option--selectable"),null!=e._resultId&&(t.id=e._resultId),e.title&&(t.title=e.title),e.children&&(s.role="group",s["aria-label"]=e.text,t.classList.remove("select2-results__option--selectable"),t.classList.add("select2-results__option--group")),s){var r=s[n];t.setAttribute(n,r)}if(e.children){var o=d(t),a=document.createElement("strong");a.className="select2-results__group",this.template(e,a);for(var l=[],c=0;c<e.children.length;c++){var u=e.children[c],u=this.option(u);l.push(u)}i=d("<ul></ul>",{class:"select2-results__options select2-results__options--nested",role:"none"});i.append(l),o.append(a),o.append(i)}else this.template(e,t);return p.StoreData(t,"data",e),t},s.prototype.bind=function(t,e){var i=this,n=t.id+"-results";this.$results.attr("id",n),t.on("results:all",function(e){i.clear(),i.append(e.data),t.isOpen()&&(i.setClasses(),i.highlightFirstItem())}),t.on("results:append",function(e){i.append(e.data),t.isOpen()&&i.setClasses()}),t.on("query",function(e){i.hideMessages(),i.showLoading(e)}),t.on("select",function(){t.isOpen()&&(i.setClasses(),i.options.get("scrollAfterSelect")&&i.highlightFirstItem())}),t.on("unselect",function(){t.isOpen()&&(i.setClasses(),i.options.get("scrollAfterSelect")&&i.highlightFirstItem())}),t.on("open",function(){i.$results.attr("aria-expanded","true"),i.$results.attr("aria-hidden","false"),i.setClasses(),i.ensureHighlightVisible()}),t.on("close",function(){i.$results.attr("aria-expanded","false"),i.$results.attr("aria-hidden","true"),i.$results.removeAttr("aria-activedescendant")}),t.on("results:toggle",function(){var e=i.getHighlightedResults();0!==e.length&&e.trigger("mouseup")}),t.on("results:select",function(){var e,t=i.getHighlightedResults();0!==t.length&&(e=p.GetData(t[0],"data"),t.hasClass("select2-results__option--selected")?i.trigger("close",{}):i.trigger("select",{data:e}))}),t.on("results:previous",function(){var e,t=i.getHighlightedResults(),n=i.$results.find(".select2-results__option--selectable"),s=n.index(t);s<=0||(e=s-1,0===t.length&&(e=0),(s=n.eq(e)).trigger("mouseenter"),t=i.$results.offset().top,n=s.offset().top,s=i.$results.scrollTop()+(n-t),0===e?i.$results.scrollTop(0):n-t<0&&i.$results.scrollTop(s))}),t.on("results:next",function(){var e,t=i.getHighlightedResults(),n=i.$results.find(".select2-results__option--selectable"),s=n.index(t)+1;s>=n.length||((e=n.eq(s)).trigger("mouseenter"),t=i.$results.offset().top+i.$results.outerHeight(!1),n=e.offset().top+e.outerHeight(!1),e=i.$results.scrollTop()+n-t,0===s?i.$results.scrollTop(0):t<n&&i.$results.scrollTop(e))}),t.on("results:focus",function(e){e.element[0].classList.add("select2-results__option--highlighted"),e.element[0].setAttribute("aria-selected","true")}),t.on("results:message",function(e){i.displayMessage(e)}),d.fn.mousewheel&&this.$results.on("mousewheel",function(e){var t=i.$results.scrollTop(),n=i.$results.get(0).scrollHeight-t+e.deltaY,t=0<e.deltaY&&t-e.deltaY<=0,n=e.deltaY<0&&n<=i.$results.height();t?(i.$results.scrollTop(0),e.preventDefault(),e.stopPropagation()):n&&(i.$results.scrollTop(i.$results.get(0).scrollHeight-i.$results.height()),e.preventDefault(),e.stopPropagation())}),this.$results.on("mouseup",".select2-results__option--selectable",function(e){var t=d(this),n=p.GetData(this,"data");t.hasClass("select2-results__option--selected")?i.options.get("multiple")?i.trigger("unselect",{originalEvent:e,data:n}):i.trigger("close",{}):i.trigger("select",{originalEvent:e,data:n})}),this.$results.on("mouseenter",".select2-results__option--selectable",function(e){var t=p.GetData(this,"data");i.getHighlightedResults().removeClass("select2-results__option--highlighted").attr("aria-selected","false"),i.trigger("results:focus",{data:t,element:d(this)})})},s.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},s.prototype.destroy=function(){this.$results.remove()},s.prototype.ensureHighlightVisible=function(){var e,t,n,s,i=this.getHighlightedResults();0!==i.length&&(e=this.$results.find(".select2-results__option--selectable").index(i),s=this.$results.offset().top,t=i.offset().top,n=this.$results.scrollTop()+(t-s),s=t-s,n-=2*i.outerHeight(!1),e<=2?this.$results.scrollTop(0):(s>this.$results.outerHeight()||s<0)&&this.$results.scrollTop(n))},s.prototype.template=function(e,t){var n=this.options.get("templateResult"),s=this.options.get("escapeMarkup"),e=n(e,t);null==e?t.style.display="none":"string"==typeof e?t.innerHTML=s(e):d(t).append(e)},s}),u.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),u.define("select2/selection/base",["jquery","../utils","../keys"],function(n,s,i){function r(e,t){this.$element=e,this.options=t,r.__super__.constructor.call(this)}return s.Extend(r,s.Observable),r.prototype.render=function(){var e=n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=s.GetData(this.$element[0],"old-tabindex")?this._tabindex=s.GetData(this.$element[0],"old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),e.attr("title",this.$element.attr("title")),e.attr("tabindex",this._tabindex),e.attr("aria-disabled","false"),this.$selection=e},r.prototype.bind=function(e,t){var n=this,s=e.id+"-results";this.container=e,this.$selection.on("focus",function(e){n.trigger("focus",e)}),this.$selection.on("blur",function(e){n._handleBlur(e)}),this.$selection.on("keydown",function(e){n.trigger("keypress",e),e.which===i.SPACE&&e.preventDefault()}),e.on("results:focus",function(e){n.$selection.attr("aria-activedescendant",e.data._resultId)}),e.on("selection:update",function(e){n.update(e.data)}),e.on("open",function(){n.$selection.attr("aria-expanded","true"),n.$selection.attr("aria-owns",s),n._attachCloseHandler(e)}),e.on("close",function(){n.$selection.attr("aria-expanded","false"),n.$selection.removeAttr("aria-activedescendant"),n.$selection.removeAttr("aria-owns"),n.$selection.trigger("focus"),n._detachCloseHandler(e)}),e.on("enable",function(){n.$selection.attr("tabindex",n._tabindex),n.$selection.attr("aria-disabled","false")}),e.on("disable",function(){n.$selection.attr("tabindex","-1"),n.$selection.attr("aria-disabled","true")})},r.prototype._handleBlur=function(e){var t=this;window.setTimeout(function(){document.activeElement==t.$selection[0]||n.contains(t.$selection[0],document.activeElement)||t.trigger("blur",e)},1)},r.prototype._attachCloseHandler=function(e){n(document.body).on("mousedown.select2."+e.id,function(e){var t=n(e.target).closest(".select2");n(".select2.select2-container--open").each(function(){this!=t[0]&&s.GetData(this,"element").select2("close")})})},r.prototype._detachCloseHandler=function(e){n(document.body).off("mousedown.select2."+e.id)},r.prototype.position=function(e,t){t.find(".selection").append(e)},r.prototype.destroy=function(){this._detachCloseHandler(this.container)},r.prototype.update=function(e){throw new Error("The `update` method must be defined in child classes.")},r.prototype.isEnabled=function(){return!this.isDisabled()},r.prototype.isDisabled=function(){return this.options.get("disabled")},r}),u.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(e,t,n,s){function i(){i.__super__.constructor.apply(this,arguments)}return n.Extend(i,t),i.prototype.render=function(){var e=i.__super__.render.call(this);return e[0].classList.add("select2-selection--single"),e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),e},i.prototype.bind=function(t,e){var n=this;i.__super__.bind.apply(this,arguments);var s=t.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",s).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",s),this.$selection.attr("aria-controls",s),this.$selection.on("mousedown",function(e){1===e.which&&n.trigger("toggle",{originalEvent:e})}),this.$selection.on("focus",function(e){}),this.$selection.on("blur",function(e){}),t.on("focus",function(e){t.isOpen()||n.$selection.trigger("focus")})},i.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},i.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},i.prototype.selectionContainer=function(){return e("<span></span>")},i.prototype.update=function(e){var t,n;0!==e.length?(n=e[0],t=this.$selection.find(".select2-selection__rendered"),e=this.display(n,t),t.empty().append(e),(n=n.title||n.text)?t.attr("title",n):t.removeAttr("title")):this.clear()},i}),u.define("select2/selection/multiple",["jquery","./base","../utils"],function(i,e,c){function r(e,t){r.__super__.constructor.apply(this,arguments)}return c.Extend(r,e),r.prototype.render=function(){var e=r.__super__.render.call(this);return e[0].classList.add("select2-selection--multiple"),e.html('<ul class="select2-selection__rendered"></ul>'),e},r.prototype.bind=function(e,t){var n=this;r.__super__.bind.apply(this,arguments);var s=e.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",s),this.$selection.on("click",function(e){n.trigger("toggle",{originalEvent:e})}),this.$selection.on("click",".select2-selection__choice__remove",function(e){var t;n.isDisabled()||(t=i(this).parent(),t=c.GetData(t[0],"data"),n.trigger("unselect",{originalEvent:e,data:t}))}),this.$selection.on("keydown",".select2-selection__choice__remove",function(e){n.isDisabled()||e.stopPropagation()})},r.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},r.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},r.prototype.selectionContainer=function(){return i('<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>')},r.prototype.update=function(e){if(this.clear(),0!==e.length){for(var t=[],n=this.$selection.find(".select2-selection__rendered").attr("id")+"-choice-",s=0;s<e.length;s++){var i=e[s],r=this.selectionContainer(),o=this.display(i,r),a=n+c.generateChars(4)+"-";i.id?a+=i.id:a+=c.generateChars(4),r.find(".select2-selection__choice__display").append(o).attr("id",a);var l=i.title||i.text;l&&r.attr("title",l);o=this.options.get("translations").get("removeItem"),l=r.find(".select2-selection__choice__remove");l.attr("title",o()),l.attr("aria-label",o()),l.attr("aria-describedby",a),c.StoreData(r[0],"data",i),t.push(r)}this.$selection.find(".select2-selection__rendered").append(t)}},r}),u.define("select2/selection/placeholder",[],function(){function e(e,t,n){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n)}return e.prototype.normalizePlaceholder=function(e,t){return t="string"==typeof t?{id:"",text:t}:t},e.prototype.createPlaceholder=function(e,t){var n=this.selectionContainer();n.html(this.display(t)),n[0].classList.add("select2-selection__placeholder"),n[0].classList.remove("select2-selection__choice");t=t.title||t.text||n.text();return this.$selection.find(".select2-selection__rendered").attr("title",t),n},e.prototype.update=function(e,t){var n=1==t.length&&t[0].id!=this.placeholder.id;if(1<t.length||n)return e.call(this,t);this.clear();t=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(t)},e}),u.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(i,s,a){function e(){}return e.prototype.bind=function(e,t,n){var s=this;e.call(this,t,n),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(e){s._handleClear(e)}),t.on("keypress",function(e){s._handleKeyboardClear(e,t)})},e.prototype._handleClear=function(e,t){if(!this.isDisabled()){var n=this.$selection.find(".select2-selection__clear");if(0!==n.length){t.stopPropagation();var s=a.GetData(n[0],"data"),i=this.$element.val();this.$element.val(this.placeholder.id);var r={data:s};if(this.trigger("clear",r),r.prevented)this.$element.val(i);else{for(var o=0;o<s.length;o++)if(r={data:s[o]},this.trigger("unselect",r),r.prevented)return void this.$element.val(i);this.$element.trigger("input").trigger("change"),this.trigger("toggle",{})}}}},e.prototype._handleKeyboardClear=function(e,t,n){n.isOpen()||t.which!=s.DELETE&&t.which!=s.BACKSPACE||this._handleClear(t)},e.prototype.update=function(e,t){var n,s;e.call(this,t),this.$selection.find(".select2-selection__clear").remove(),this.$selection[0].classList.remove("select2-selection--clearable"),0<this.$selection.find(".select2-selection__placeholder").length||0===t.length||(n=this.$selection.find(".select2-selection__rendered").attr("id"),s=this.options.get("translations").get("removeAllItems"),(e=i('<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>')).attr("title",s()),e.attr("aria-label",s()),e.attr("aria-describedby",n),a.StoreData(e[0],"data",t),this.$selection.prepend(e),this.$selection[0].classList.add("select2-selection--clearable"))},e}),u.define("select2/selection/search",["jquery","../utils","../keys"],function(s,a,l){function e(e,t,n){e.call(this,t,n)}return e.prototype.render=function(e){var t=this.options.get("translations").get("search"),n=s('<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>');this.$searchContainer=n,this.$search=n.find("textarea"),this.$search.prop("autocomplete",this.options.get("autocomplete")),this.$search.attr("aria-label",t());e=e.call(this);return this._transferTabIndex(),e.append(this.$searchContainer),e},e.prototype.bind=function(e,t,n){var s=this,i=t.id+"-results",r=t.id+"-container";e.call(this,t,n),s.$search.attr("aria-describedby",r),t.on("open",function(){s.$search.attr("aria-controls",i),s.$search.trigger("focus")}),t.on("close",function(){s.$search.val(""),s.resizeSearch(),s.$search.removeAttr("aria-controls"),s.$search.removeAttr("aria-activedescendant"),s.$search.trigger("focus")}),t.on("enable",function(){s.$search.prop("disabled",!1),s._transferTabIndex()}),t.on("disable",function(){s.$search.prop("disabled",!0)}),t.on("focus",function(e){s.$search.trigger("focus")}),t.on("results:focus",function(e){e.data._resultId?s.$search.attr("aria-activedescendant",e.data._resultId):s.$search.removeAttr("aria-activedescendant")}),this.$selection.on("focusin",".select2-search--inline",function(e){s.trigger("focus",e)}),this.$selection.on("focusout",".select2-search--inline",function(e){s._handleBlur(e)}),this.$selection.on("keydown",".select2-search--inline",function(e){var t;e.stopPropagation(),s.trigger("keypress",e),s._keyUpPrevented=e.isDefaultPrevented(),e.which!==l.BACKSPACE||""!==s.$search.val()||0<(t=s.$selection.find(".select2-selection__choice").last()).length&&(t=a.GetData(t[0],"data"),s.searchRemoveChoice(t),e.preventDefault())}),this.$selection.on("click",".select2-search--inline",function(e){s.$search.val()&&e.stopPropagation()});var t=document.documentMode,o=t&&t<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(e){o?s.$selection.off("input.search input.searchcheck"):s.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(e){var t;o&&"input"===e.type?s.$selection.off("input.search input.searchcheck"):(t=e.which)!=l.SHIFT&&t!=l.CTRL&&t!=l.ALT&&t!=l.TAB&&s.handleSearch(e)})},e.prototype._transferTabIndex=function(e){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},e.prototype.createPlaceholder=function(e,t){this.$search.attr("placeholder",t.text)},e.prototype.update=function(e,t){var n=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),e.call(this,t),this.resizeSearch(),n&&this.$search.trigger("focus")},e.prototype.handleSearch=function(){var e;this.resizeSearch(),this._keyUpPrevented||(e=this.$search.val(),this.trigger("query",{term:e})),this._keyUpPrevented=!1},e.prototype.searchRemoveChoice=function(e,t){this.trigger("unselect",{data:t}),this.$search.val(t.text),this.handleSearch()},e.prototype.resizeSearch=function(){this.$search.css("width","25px");var e="100%";""===this.$search.attr("placeholder")&&(e=.75*(this.$search.val().length+1)+"em"),this.$search.css("width",e)},e}),u.define("select2/selection/selectionCss",["../utils"],function(n){function e(){}return e.prototype.render=function(e){var t=e.call(this),e=this.options.get("selectionCssClass")||"";return-1!==e.indexOf(":all:")&&(e=e.replace(":all:",""),n.copyNonInternalCssClasses(t[0],this.$element[0])),t.addClass(e),t},e}),u.define("select2/selection/eventRelay",["jquery"],function(o){function e(){}return e.prototype.bind=function(e,t,n){var s=this,i=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],r=["opening","closing","selecting","unselecting","clearing"];e.call(this,t,n),t.on("*",function(e,t){var n;-1!==i.indexOf(e)&&(t=t||{},n=o.Event("select2:"+e,{params:t}),s.$element.trigger(n),-1!==r.indexOf(e)&&(t.prevented=n.isDefaultPrevented()))})},e}),u.define("select2/translation",["jquery","require"],function(t,n){function s(e){this.dict=e||{}}return s.prototype.all=function(){return this.dict},s.prototype.get=function(e){return this.dict[e]},s.prototype.extend=function(e){this.dict=t.extend({},e.all(),this.dict)},s._cache={},s.loadPath=function(e){var t;return e in s._cache||(t=n(e),s._cache[e]=t),new s(s._cache[e])},s}),u.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Œ":"OE","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","œ":"oe","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ώ":"ω","ς":"σ","’":"'"}}),u.define("select2/data/base",["../utils"],function(n){function s(e,t){s.__super__.constructor.call(this)}return n.Extend(s,n.Observable),s.prototype.current=function(e){throw new Error("The `current` method must be defined in child classes.")},s.prototype.query=function(e,t){throw new Error("The `query` method must be defined in child classes.")},s.prototype.bind=function(e,t){},s.prototype.destroy=function(){},s.prototype.generateResultId=function(e,t){e=e.id+"-result-";return e+=n.generateChars(4),null!=t.id?e+="-"+t.id.toString():e+="-"+n.generateChars(4),e},s}),u.define("select2/data/select",["./base","../utils","jquery"],function(e,a,l){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return a.Extend(n,e),n.prototype.current=function(e){var t=this;e(Array.prototype.map.call(this.$element[0].querySelectorAll(":checked"),function(e){return t.item(l(e))}))},n.prototype.select=function(i){var e,r=this;if(i.selected=!0,null!=i.element&&"option"===i.element.tagName.toLowerCase())return i.element.selected=!0,void this.$element.trigger("input").trigger("change");this.$element.prop("multiple")?this.current(function(e){var t=[];(i=[i]).push.apply(i,e);for(var n=0;n<i.length;n++){var s=i[n].id;-1===t.indexOf(s)&&t.push(s)}r.$element.val(t),r.$element.trigger("input").trigger("change")}):(e=i.id,this.$element.val(e),this.$element.trigger("input").trigger("change"))},n.prototype.unselect=function(i){var r=this;if(this.$element.prop("multiple")){if(i.selected=!1,null!=i.element&&"option"===i.element.tagName.toLowerCase())return i.element.selected=!1,void this.$element.trigger("input").trigger("change");this.current(function(e){for(var t=[],n=0;n<e.length;n++){var s=e[n].id;s!==i.id&&-1===t.indexOf(s)&&t.push(s)}r.$element.val(t),r.$element.trigger("input").trigger("change")})}},n.prototype.bind=function(e,t){var n=this;(this.container=e).on("select",function(e){n.select(e.data)}),e.on("unselect",function(e){n.unselect(e.data)})},n.prototype.destroy=function(){this.$element.find("*").each(function(){a.RemoveData(this)})},n.prototype.query=function(t,e){var n=[],s=this;this.$element.children().each(function(){var e;"option"!==this.tagName.toLowerCase()&&"optgroup"!==this.tagName.toLowerCase()||(e=l(this),e=s.item(e),null!==(e=s.matches(t,e))&&n.push(e))}),e({results:n})},n.prototype.addOptions=function(e){this.$element.append(e)},n.prototype.option=function(e){var t;e.children?(t=document.createElement("optgroup")).label=e.text:void 0!==(t=document.createElement("option")).textContent?t.textContent=e.text:t.innerText=e.text,void 0!==e.id&&(t.value=e.id),e.disabled&&(t.disabled=!0),e.selected&&(t.selected=!0),e.title&&(t.title=e.title);e=this._normalizeItem(e);return e.element=t,a.StoreData(t,"data",e),l(t)},n.prototype.item=function(e){var t={};if(null!=(t=a.GetData(e[0],"data")))return t;var n=e[0];if("option"===n.tagName.toLowerCase())t={id:e.val(),text:e.text(),disabled:e.prop("disabled"),selected:e.prop("selected"),title:e.prop("title")};else if("optgroup"===n.tagName.toLowerCase()){t={text:e.prop("label"),children:[],title:e.prop("title")};for(var s=e.children("option"),i=[],r=0;r<s.length;r++){var o=l(s[r]),o=this.item(o);i.push(o)}t.children=i}return(t=this._normalizeItem(t)).element=e[0],a.StoreData(e[0],"data",t),t},n.prototype._normalizeItem=function(e){e!==Object(e)&&(e={id:e,text:e});return null!=(e=l.extend({},{text:""},e)).id&&(e.id=e.id.toString()),null!=e.text&&(e.text=e.text.toString()),null==e._resultId&&e.id&&null!=this.container&&(e._resultId=this.generateResultId(this.container,e)),l.extend({},{selected:!1,disabled:!1},e)},n.prototype.matches=function(e,t){return this.options.get("matcher")(e,t)},n}),u.define("select2/data/array",["./select","../utils","jquery"],function(e,t,c){function s(e,t){this._dataToConvert=t.get("data")||[],s.__super__.constructor.call(this,e,t)}return t.Extend(s,e),s.prototype.bind=function(e,t){s.__super__.bind.call(this,e,t),this.addOptions(this.convertToOptions(this._dataToConvert))},s.prototype.select=function(n){var e=this.$element.find("option").filter(function(e,t){return t.value==n.id.toString()});0===e.length&&(e=this.option(n),this.addOptions(e)),s.__super__.select.call(this,n)},s.prototype.convertToOptions=function(e){var t=this,n=this.$element.find("option"),s=n.map(function(){return t.item(c(this)).id}).get(),i=[];for(var r=0;r<e.length;r++){var o,a,l=this._normalizeItem(e[r]);0<=s.indexOf(l.id)?(o=n.filter(function(e){return function(){return c(this).val()==e.id}}(l)),a=this.item(o),a=c.extend(!0,{},l,a),a=this.option(a),o.replaceWith(a)):(a=this.option(l),l.children&&(l=this.convertToOptions(l.children),a.append(l)),i.push(a))}return i},s}),u.define("select2/data/ajax",["./array","../utils","jquery"],function(e,t,r){function n(e,t){this.ajaxOptions=this._applyDefaults(t.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),n.__super__.constructor.call(this,e,t)}return t.Extend(n,e),n.prototype._applyDefaults=function(e){var t={data:function(e){return r.extend({},e,{q:e.term})},transport:function(e,t,n){e=r.ajax(e);return e.then(t),e.fail(n),e}};return r.extend({},t,e,!0)},n.prototype.processResults=function(e){return e},n.prototype.query=function(t,n){var s=this;null!=this._request&&("function"==typeof this._request.abort&&this._request.abort(),this._request=null);var i=r.extend({type:"GET"},this.ajaxOptions);function e(){var e=i.transport(i,function(e){e=s.processResults(e,t);s.options.get("debug")&&window.console&&console.error&&(e&&e.results&&Array.isArray(e.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),n(e)},function(){"status"in e&&(0===e.status||"0"===e.status)||s.trigger("results:message",{message:"errorLoading"})});s._request=e}"function"==typeof i.url&&(i.url=i.url.call(this.$element,t)),"function"==typeof i.data&&(i.data=i.data.call(this.$element,t)),this.ajaxOptions.delay&&null!=t.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(e,this.ajaxOptions.delay)):e()},n}),u.define("select2/data/tags",["jquery"],function(t){function e(e,t,n){var s=n.get("tags"),i=n.get("createTag");void 0!==i&&(this.createTag=i);i=n.get("insertTag");if(void 0!==i&&(this.insertTag=i),e.call(this,t,n),Array.isArray(s))for(var r=0;r<s.length;r++){var o=s[r],o=this._normalizeItem(o),o=this.option(o);this.$element.append(o)}}return e.prototype.query=function(e,c,u){var d=this;this._removeOldTags(),null!=c.term&&null==c.page?e.call(this,c,function e(t,n){for(var s=t.results,i=0;i<s.length;i++){var r=s[i],o=null!=r.children&&!e({results:r.children},!0);if((r.text||"").toUpperCase()===(c.term||"").toUpperCase()||o)return!n&&(t.data=s,void u(t))}if(n)return!0;var a,l=d.createTag(c);null!=l&&((a=d.option(l)).attr("data-select2-tag","true"),d.addOptions([a]),d.insertTag(s,l)),t.results=s,u(t)}):e.call(this,c,u)},e.prototype.createTag=function(e,t){if(null==t.term)return null;t=t.term.trim();return""===t?null:{id:t,text:t}},e.prototype.insertTag=function(e,t,n){t.unshift(n)},e.prototype._removeOldTags=function(e){this.$element.find("option[data-select2-tag]").each(function(){this.selected||t(this).remove()})},e}),u.define("select2/data/tokenizer",["jquery"],function(c){function e(e,t,n){var s=n.get("tokenizer");void 0!==s&&(this.tokenizer=s),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){e.call(this,t,n),this.$search=t.dropdown.$search||t.selection.$search||n.find(".select2-search__field")},e.prototype.query=function(e,t,n){var s=this;t.term=t.term||"";var i=this.tokenizer(t,this.options,function(e){var t,n=s._normalizeItem(e);s.$element.find("option").filter(function(){return c(this).val()===n.id}).length||((t=s.option(n)).attr("data-select2-tag",!0),s._removeOldTags(),s.addOptions([t])),t=n,s.trigger("select",{data:t})});i.term!==t.term&&(this.$search.length&&(this.$search.val(i.term),this.$search.trigger("focus")),t.term=i.term),e.call(this,t,n)},e.prototype.tokenizer=function(e,t,n,s){for(var i=n.get("tokenSeparators")||[],r=t.term,o=0,a=this.createTag||function(e){return{id:e.term,text:e.term}};o<r.length;){var l=r[o];-1!==i.indexOf(l)?(l=r.substr(0,o),null!=(l=a(c.extend({},t,{term:l})))?(s(l),r=r.substr(o+1)||"",o=0):o++):o++}return{term:r}},e}),u.define("select2/data/minimumInputLength",[],function(){function e(e,t,n){this.minimumInputLength=n.get("minimumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",t.term.length<this.minimumInputLength?this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),u.define("select2/data/maximumInputLength",[],function(){function e(e,t,n){this.maximumInputLength=n.get("maximumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",0<this.maximumInputLength&&t.term.length>this.maximumInputLength?this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),u.define("select2/data/maximumSelectionLength",[],function(){function e(e,t,n){this.maximumSelectionLength=n.get("maximumSelectionLength"),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var s=this;e.call(this,t,n),t.on("select",function(){s._checkIfMaximumSelected()})},e.prototype.query=function(e,t,n){var s=this;this._checkIfMaximumSelected(function(){e.call(s,t,n)})},e.prototype._checkIfMaximumSelected=function(e,t){var n=this;this.current(function(e){e=null!=e?e.length:0;0<n.maximumSelectionLength&&e>=n.maximumSelectionLength?n.trigger("results:message",{message:"maximumSelected",args:{maximum:n.maximumSelectionLength}}):t&&t()})},e}),u.define("select2/dropdown",["jquery","./utils"],function(t,e){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return e.Extend(n,e.Observable),n.prototype.render=function(){var e=t('<span class="select2-dropdown"><span class="select2-results"></span></span>');return e.attr("dir",this.options.get("dir")),this.$dropdown=e},n.prototype.bind=function(){},n.prototype.position=function(e,t){},n.prototype.destroy=function(){this.$dropdown.remove()},n}),u.define("select2/dropdown/search",["jquery"],function(r){function e(){}return e.prototype.render=function(e){var t=e.call(this),n=this.options.get("translations").get("search"),e=r('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');return this.$searchContainer=e,this.$search=e.find("input"),this.$search.prop("autocomplete",this.options.get("autocomplete")),this.$search.attr("aria-label",n()),t.prepend(e),t},e.prototype.bind=function(e,t,n){var s=this,i=t.id+"-results";e.call(this,t,n),this.$search.on("keydown",function(e){s.trigger("keypress",e),s._keyUpPrevented=e.isDefaultPrevented()}),this.$search.on("input",function(e){r(this).off("keyup")}),this.$search.on("keyup input",function(e){s.handleSearch(e)}),t.on("open",function(){s.$search.attr("tabindex",0),s.$search.attr("aria-controls",i),s.$search.trigger("focus"),window.setTimeout(function(){s.$search.trigger("focus")},0)}),t.on("close",function(){s.$search.attr("tabindex",-1),s.$search.removeAttr("aria-controls"),s.$search.removeAttr("aria-activedescendant"),s.$search.val(""),s.$search.trigger("blur")}),t.on("focus",function(){t.isOpen()||s.$search.trigger("focus")}),t.on("results:all",function(e){null!=e.query.term&&""!==e.query.term||(s.showSearch(e)?s.$searchContainer[0].classList.remove("select2-search--hide"):s.$searchContainer[0].classList.add("select2-search--hide"))}),t.on("results:focus",function(e){e.data._resultId?s.$search.attr("aria-activedescendant",e.data._resultId):s.$search.removeAttr("aria-activedescendant")})},e.prototype.handleSearch=function(e){var t;this._keyUpPrevented||(t=this.$search.val(),this.trigger("query",{term:t})),this._keyUpPrevented=!1},e.prototype.showSearch=function(e,t){return!0},e}),u.define("select2/dropdown/hidePlaceholder",[],function(){function e(e,t,n,s){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n,s)}return e.prototype.append=function(e,t){t.results=this.removePlaceholder(t.results),e.call(this,t)},e.prototype.normalizePlaceholder=function(e,t){return t="string"==typeof t?{id:"",text:t}:t},e.prototype.removePlaceholder=function(e,t){for(var n=t.slice(0),s=t.length-1;0<=s;s--){var i=t[s];this.placeholder.id===i.id&&n.splice(s,1)}return n},e}),u.define("select2/dropdown/infiniteScroll",["jquery"],function(n){function e(e,t,n,s){this.lastParams={},e.call(this,t,n,s),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return e.prototype.append=function(e,t){this.$loadingMore.remove(),this.loading=!1,e.call(this,t),this.showLoadingMore(t)&&(this.$results.append(this.$loadingMore),this.loadMoreIfNeeded())},e.prototype.bind=function(e,t,n){var s=this;e.call(this,t,n),t.on("query",function(e){s.lastParams=e,s.loading=!0}),t.on("query:append",function(e){s.lastParams=e,s.loading=!0}),this.$results.on("scroll",this.loadMoreIfNeeded.bind(this))},e.prototype.loadMoreIfNeeded=function(){var e=n.contains(document.documentElement,this.$loadingMore[0]);!this.loading&&e&&(e=this.$results.offset().top+this.$results.outerHeight(!1),this.$loadingMore.offset().top+this.$loadingMore.outerHeight(!1)<=e+50&&this.loadMore())},e.prototype.loadMore=function(){this.loading=!0;var e=n.extend({},{page:1},this.lastParams);e.page++,this.trigger("query:append",e)},e.prototype.showLoadingMore=function(e,t){return t.pagination&&t.pagination.more},e.prototype.createLoadingMore=function(){var e=n('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),t=this.options.get("translations").get("loadingMore");return e.html(t(this.lastParams)),e},e}),u.define("select2/dropdown/attachBody",["jquery","../utils"],function(u,o){function e(e,t,n){this.$dropdownParent=u(n.get("dropdownParent")||document.body),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var s=this;e.call(this,t,n),t.on("open",function(){s._showDropdown(),s._attachPositioningHandler(t),s._bindContainerResultHandlers(t)}),t.on("close",function(){s._hideDropdown(),s._detachPositioningHandler(t)}),this.$dropdownContainer.on("mousedown",function(e){e.stopPropagation()})},e.prototype.destroy=function(e){e.call(this),this.$dropdownContainer.remove()},e.prototype.position=function(e,t,n){t.attr("class",n.attr("class")),t[0].classList.remove("select2"),t[0].classList.add("select2-container--open"),t.css({position:"absolute",top:-999999}),this.$container=n},e.prototype.render=function(e){var t=u("<span></span>"),e=e.call(this);return t.append(e),this.$dropdownContainer=t},e.prototype._hideDropdown=function(e){this.$dropdownContainer.detach()},e.prototype._bindContainerResultHandlers=function(e,t){var n;this._containerResultsHandlersBound||(n=this,t.on("results:all",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:append",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:message",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("select",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("unselect",function(){n._positionDropdown(),n._resizeDropdown()}),this._containerResultsHandlersBound=!0)},e.prototype._attachPositioningHandler=function(e,t){var n=this,s="scroll.select2."+t.id,i="resize.select2."+t.id,r="orientationchange.select2."+t.id,t=this.$container.parents().filter(o.hasScroll);t.each(function(){o.StoreData(this,"select2-scroll-position",{x:u(this).scrollLeft(),y:u(this).scrollTop()})}),t.on(s,function(e){var t=o.GetData(this,"select2-scroll-position");u(this).scrollTop(t.y)}),u(window).on(s+" "+i+" "+r,function(e){n._positionDropdown(),n._resizeDropdown()})},e.prototype._detachPositioningHandler=function(e,t){var n="scroll.select2."+t.id,s="resize.select2."+t.id,t="orientationchange.select2."+t.id;this.$container.parents().filter(o.hasScroll).off(n),u(window).off(n+" "+s+" "+t)},e.prototype._positionDropdown=function(){var e=u(window),t=this.$dropdown[0].classList.contains("select2-dropdown--above"),n=this.$dropdown[0].classList.contains("select2-dropdown--below"),s=null,i=this.$container.offset();i.bottom=i.top+this.$container.outerHeight(!1);var r={height:this.$container.outerHeight(!1)};r.top=i.top,r.bottom=i.top+r.height;var o=this.$dropdown.outerHeight(!1),a=e.scrollTop(),l=e.scrollTop()+e.height(),c=a<i.top-o,e=l>i.bottom+o,a={left:i.left,top:r.bottom},l=this.$dropdownParent;"static"===l.css("position")&&(l=l.offsetParent());i={top:0,left:0};(u.contains(document.body,l[0])||l[0].isConnected)&&(i=l.offset()),a.top-=i.top,a.left-=i.left,t||n||(s="below"),e||!c||t?!c&&e&&t&&(s="below"):s="above",("above"==s||t&&"below"!==s)&&(a.top=r.top-i.top-o),null!=s&&(this.$dropdown[0].classList.remove("select2-dropdown--below"),this.$dropdown[0].classList.remove("select2-dropdown--above"),this.$dropdown[0].classList.add("select2-dropdown--"+s),this.$container[0].classList.remove("select2-container--below"),this.$container[0].classList.remove("select2-container--above"),this.$container[0].classList.add("select2-container--"+s)),this.$dropdownContainer.css(a)},e.prototype._resizeDropdown=function(){var e={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(e.minWidth=e.width,e.position="relative",e.width="auto"),this.$dropdown.css(e)},e.prototype._showDropdown=function(e){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},e}),u.define("select2/dropdown/minimumResultsForSearch",[],function(){function e(e,t,n,s){this.minimumResultsForSearch=n.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),e.call(this,t,n,s)}return e.prototype.showSearch=function(e,t){return!(function e(t){for(var n=0,s=0;s<t.length;s++){var i=t[s];i.children?n+=e(i.children):n++}return n}(t.data.results)<this.minimumResultsForSearch)&&e.call(this,t)},e}),u.define("select2/dropdown/selectOnClose",["../utils"],function(s){function e(){}return e.prototype.bind=function(e,t,n){var s=this;e.call(this,t,n),t.on("close",function(e){s._handleSelectOnClose(e)})},e.prototype._handleSelectOnClose=function(e,t){if(t&&null!=t.originalSelect2Event){var n=t.originalSelect2Event;if("select"===n._type||"unselect"===n._type)return}n=this.getHighlightedResults();n.length<1||(null!=(n=s.GetData(n[0],"data")).element&&n.element.selected||null==n.element&&n.selected||this.trigger("select",{data:n}))},e}),u.define("select2/dropdown/closeOnSelect",[],function(){function e(){}return e.prototype.bind=function(e,t,n){var s=this;e.call(this,t,n),t.on("select",function(e){s._selectTriggered(e)}),t.on("unselect",function(e){s._selectTriggered(e)})},e.prototype._selectTriggered=function(e,t){var n=t.originalEvent;n&&(n.ctrlKey||n.metaKey)||this.trigger("close",{originalEvent:n,originalSelect2Event:t})},e}),u.define("select2/dropdown/dropdownCss",["../utils"],function(n){function e(){}return e.prototype.render=function(e){var t=e.call(this),e=this.options.get("dropdownCssClass")||"";return-1!==e.indexOf(":all:")&&(e=e.replace(":all:",""),n.copyNonInternalCssClasses(t[0],this.$element[0])),t.addClass(e),t},e}),u.define("select2/dropdown/tagsSearchHighlight",["../utils"],function(s){function e(){}return e.prototype.highlightFirstItem=function(e){var t=this.$results.find(".select2-results__option--selectable:not(.select2-results__option--selected)");if(0<t.length){var n=t.first(),t=s.GetData(n[0],"data").element;if(t&&t.getAttribute&&"true"===t.getAttribute("data-select2-tag"))return void n.trigger("mouseenter")}e.call(this)},e}),u.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(e){var t=e.input.length-e.maximum,e="Please delete "+t+" character";return 1!=t&&(e+="s"),e},inputTooShort:function(e){return"Please enter "+(e.minimum-e.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(e){var t="You can only select "+e.maximum+" item";return 1!=e.maximum&&(t+="s"),t},noResults:function(){return"No results found"},searching:function(){return"Searching…"},removeAllItems:function(){return"Remove all items"},removeItem:function(){return"Remove item"},search:function(){return"Search"}}}),u.define("select2/defaults",["jquery","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/selectionCss","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./dropdown/dropdownCss","./dropdown/tagsSearchHighlight","./i18n/en"],function(l,r,o,a,c,u,d,p,h,f,g,t,m,y,v,_,b,$,w,x,A,D,S,E,O,C,L,T,q,I,e){function n(){this.reset()}return n.prototype.apply=function(e){var t;null==(e=l.extend(!0,{},this.defaults,e)).dataAdapter&&(null!=e.ajax?e.dataAdapter=v:null!=e.data?e.dataAdapter=y:e.dataAdapter=m,0<e.minimumInputLength&&(e.dataAdapter=f.Decorate(e.dataAdapter,$)),0<e.maximumInputLength&&(e.dataAdapter=f.Decorate(e.dataAdapter,w)),0<e.maximumSelectionLength&&(e.dataAdapter=f.Decorate(e.dataAdapter,x)),e.tags&&(e.dataAdapter=f.Decorate(e.dataAdapter,_)),null==e.tokenSeparators&&null==e.tokenizer||(e.dataAdapter=f.Decorate(e.dataAdapter,b))),null==e.resultsAdapter&&(e.resultsAdapter=r,null!=e.ajax&&(e.resultsAdapter=f.Decorate(e.resultsAdapter,E)),null!=e.placeholder&&(e.resultsAdapter=f.Decorate(e.resultsAdapter,S)),e.selectOnClose&&(e.resultsAdapter=f.Decorate(e.resultsAdapter,L)),e.tags&&(e.resultsAdapter=f.Decorate(e.resultsAdapter,I))),null==e.dropdownAdapter&&(e.multiple?e.dropdownAdapter=A:(t=f.Decorate(A,D),e.dropdownAdapter=t),0!==e.minimumResultsForSearch&&(e.dropdownAdapter=f.Decorate(e.dropdownAdapter,C)),e.closeOnSelect&&(e.dropdownAdapter=f.Decorate(e.dropdownAdapter,T)),null!=e.dropdownCssClass&&(e.dropdownAdapter=f.Decorate(e.dropdownAdapter,q)),e.dropdownAdapter=f.Decorate(e.dropdownAdapter,O)),null==e.selectionAdapter&&(e.multiple?e.selectionAdapter=a:e.selectionAdapter=o,null!=e.placeholder&&(e.selectionAdapter=f.Decorate(e.selectionAdapter,c)),e.allowClear&&(e.selectionAdapter=f.Decorate(e.selectionAdapter,u)),e.multiple&&(e.selectionAdapter=f.Decorate(e.selectionAdapter,d)),null!=e.selectionCssClass&&(e.selectionAdapter=f.Decorate(e.selectionAdapter,p)),e.selectionAdapter=f.Decorate(e.selectionAdapter,h)),e.language=this._resolveLanguage(e.language),e.language.push("en");for(var n=[],s=0;s<e.language.length;s++){var i=e.language[s];-1===n.indexOf(i)&&n.push(i)}return e.language=n,e.translations=this._processTranslations(e.language,e.debug),e},n.prototype.reset=function(){function a(e){return e.replace(/[^\u0000-\u007E]/g,function(e){return t[e]||e})}this.defaults={amdLanguageBase:"./i18n/",autocomplete:"off",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:f.escapeMarkup,language:{},matcher:function e(t,n){if(null==t.term||""===t.term.trim())return n;if(n.children&&0<n.children.length){for(var s=l.extend(!0,{},n),i=n.children.length-1;0<=i;i--)null==e(t,n.children[i])&&s.children.splice(i,1);return 0<s.children.length?s:e(t,s)}var r=a(n.text).toUpperCase(),o=a(t.term).toUpperCase();return-1<r.indexOf(o)?n:null},minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,scrollAfterSelect:!1,sorter:function(e){return e},templateResult:function(e){return e.text},templateSelection:function(e){return e.text},theme:"default",width:"resolve"}},n.prototype.applyFromElement=function(e,t){var n=e.language,s=this.defaults.language,i=t.prop("lang"),t=t.closest("[lang]").prop("lang"),t=Array.prototype.concat.call(this._resolveLanguage(i),this._resolveLanguage(n),this._resolveLanguage(s),this._resolveLanguage(t));return e.language=t,e},n.prototype._resolveLanguage=function(e){if(!e)return[];if(l.isEmptyObject(e))return[];if(l.isPlainObject(e))return[e];for(var t,n=Array.isArray(e)?e:[e],s=[],i=0;i<n.length;i++)s.push(n[i]),"string"==typeof n[i]&&0<n[i].indexOf("-")&&(t=n[i].split("-")[0],s.push(t));return s},n.prototype._processTranslations=function(e,t){for(var n=new g,s=0;s<e.length;s++){var i=new g,r=e[s];if("string"==typeof r)try{i=g.loadPath(r)}catch(e){try{r=this.defaults.amdLanguageBase+r,i=g.loadPath(r)}catch(e){t&&window.console&&console.warn&&console.warn('Select2: The language file for "'+r+'" could not be automatically loaded. A fallback will be used instead.')}}else i=l.isPlainObject(r)?new g(r):r;n.extend(i)}return n},n.prototype.set=function(e,t){var n={};n[l.camelCase(e)]=t;n=f._convertData(n);l.extend(!0,this.defaults,n)},new n}),u.define("select2/options",["jquery","./defaults","./utils"],function(c,n,u){function e(e,t){this.options=e,null!=t&&this.fromElement(t),null!=t&&(this.options=n.applyFromElement(this.options,t)),this.options=n.apply(this.options)}return e.prototype.fromElement=function(e){var t=["select2"];null==this.options.multiple&&(this.options.multiple=e.prop("multiple")),null==this.options.disabled&&(this.options.disabled=e.prop("disabled")),null==this.options.autocomplete&&e.prop("autocomplete")&&(this.options.autocomplete=e.prop("autocomplete")),null==this.options.dir&&(e.prop("dir")?this.options.dir=e.prop("dir"):e.closest("[dir]").prop("dir")?this.options.dir=e.closest("[dir]").prop("dir"):this.options.dir="ltr"),e.prop("disabled",this.options.disabled),e.prop("multiple",this.options.multiple),u.GetData(e[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),u.StoreData(e[0],"data",u.GetData(e[0],"select2Tags")),u.StoreData(e[0],"tags",!0)),u.GetData(e[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),e.attr("ajax--url",u.GetData(e[0],"ajaxUrl")),u.StoreData(e[0],"ajax-Url",u.GetData(e[0],"ajaxUrl")));var n={};function s(e,t){return t.toUpperCase()}for(var i=0;i<e[0].attributes.length;i++){var r=e[0].attributes[i].name,o="data-";r.substr(0,o.length)==o&&(r=r.substring(o.length),o=u.GetData(e[0],r),n[r.replace(/-([a-z])/g,s)]=o)}c.fn.jquery&&"1."==c.fn.jquery.substr(0,2)&&e[0].dataset&&(n=c.extend(!0,{},e[0].dataset,n));var a,l=c.extend(!0,{},u.GetData(e[0]),n);for(a in l=u._convertData(l))-1<t.indexOf(a)||(c.isPlainObject(this.options[a])?c.extend(this.options[a],l[a]):this.options[a]=l[a]);return this},e.prototype.get=function(e){return this.options[e]},e.prototype.set=function(e,t){this.options[e]=t},e}),u.define("select2/core",["jquery","./options","./utils","./keys"],function(t,i,r,s){var o=function(e,t){null!=r.GetData(e[0],"select2")&&r.GetData(e[0],"select2").destroy(),this.$element=e,this.id=this._generateId(e),t=t||{},this.options=new i(t,e),o.__super__.constructor.call(this);var n=e.attr("tabindex")||0;r.StoreData(e[0],"old-tabindex",n),e.attr("tabindex","-1");t=this.options.get("dataAdapter");this.dataAdapter=new t(e,this.options);n=this.render();this._placeContainer(n);t=this.options.get("selectionAdapter");this.selection=new t(e,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,n);t=this.options.get("dropdownAdapter");this.dropdown=new t(e,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,n);n=this.options.get("resultsAdapter");this.results=new n(e,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var s=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(e){s.trigger("selection:update",{data:e})}),e[0].classList.add("select2-hidden-accessible"),e.attr("aria-hidden","true"),this._syncAttributes(),r.StoreData(e[0],"select2",this),e.data("select2",this)};return r.Extend(o,r.Observable),o.prototype._generateId=function(e){return"select2-"+(null!=e.attr("id")?e.attr("id"):null!=e.attr("name")?e.attr("name")+"-"+r.generateChars(2):r.generateChars(4)).replace(/(:|\.|\[|\]|,)/g,"")},o.prototype._placeContainer=function(e){e.insertAfter(this.$element);var t=this._resolveWidth(this.$element,this.options.get("width"));null!=t&&e.css("width",t)},o.prototype._resolveWidth=function(e,t){var n=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==t){var s=this._resolveWidth(e,"style");return null!=s?s:this._resolveWidth(e,"element")}if("element"==t){s=e.outerWidth(!1);return s<=0?"auto":s+"px"}if("style"!=t)return"computedstyle"!=t?t:window.getComputedStyle(e[0]).width;e=e.attr("style");if("string"!=typeof e)return null;for(var i=e.split(";"),r=0,o=i.length;r<o;r+=1){var a=i[r].replace(/\s/g,"").match(n);if(null!==a&&1<=a.length)return a[1]}return null},o.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},o.prototype._registerDomEvents=function(){var t=this;this.$element.on("change.select2",function(){t.dataAdapter.current(function(e){t.trigger("selection:update",{data:e})})}),this.$element.on("focus.select2",function(e){t.trigger("focus",e)}),this._syncA=r.bind(this._syncAttributes,this),this._syncS=r.bind(this._syncSubtree,this),this._observer=new window.MutationObserver(function(e){t._syncA(),t._syncS(e)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})},o.prototype._registerDataEvents=function(){var n=this;this.dataAdapter.on("*",function(e,t){n.trigger(e,t)})},o.prototype._registerSelectionEvents=function(){var n=this,s=["toggle","focus"];this.selection.on("toggle",function(){n.toggleDropdown()}),this.selection.on("focus",function(e){n.focus(e)}),this.selection.on("*",function(e,t){-1===s.indexOf(e)&&n.trigger(e,t)})},o.prototype._registerDropdownEvents=function(){var n=this;this.dropdown.on("*",function(e,t){n.trigger(e,t)})},o.prototype._registerResultsEvents=function(){var n=this;this.results.on("*",function(e,t){n.trigger(e,t)})},o.prototype._registerEvents=function(){var n=this;this.on("open",function(){n.$container[0].classList.add("select2-container--open")}),this.on("close",function(){n.$container[0].classList.remove("select2-container--open")}),this.on("enable",function(){n.$container[0].classList.remove("select2-container--disabled")}),this.on("disable",function(){n.$container[0].classList.add("select2-container--disabled")}),this.on("blur",function(){n.$container[0].classList.remove("select2-container--focus")}),this.on("query",function(t){n.isOpen()||n.trigger("open",{}),this.dataAdapter.query(t,function(e){n.trigger("results:all",{data:e,query:t})})}),this.on("query:append",function(t){this.dataAdapter.query(t,function(e){n.trigger("results:append",{data:e,query:t})})}),this.on("keypress",function(e){var t=e.which;n.isOpen()?t===s.ESC||t===s.UP&&e.altKey?(n.close(e),e.preventDefault()):t===s.ENTER||t===s.TAB?(n.trigger("results:select",{}),e.preventDefault()):t===s.SPACE&&e.ctrlKey?(n.trigger("results:toggle",{}),e.preventDefault()):t===s.UP?(n.trigger("results:previous",{}),e.preventDefault()):t===s.DOWN&&(n.trigger("results:next",{}),e.preventDefault()):(t===s.ENTER||t===s.SPACE||t===s.DOWN&&e.altKey)&&(n.open(),e.preventDefault())})},o.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.isDisabled()?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},o.prototype._isChangeMutation=function(e){var t=this;if(e.addedNodes&&0<e.addedNodes.length){for(var n=0;n<e.addedNodes.length;n++)if(e.addedNodes[n].selected)return!0}else{if(e.removedNodes&&0<e.removedNodes.length)return!0;if(Array.isArray(e))return e.some(function(e){return t._isChangeMutation(e)})}return!1},o.prototype._syncSubtree=function(e){var e=this._isChangeMutation(e),t=this;e&&this.dataAdapter.current(function(e){t.trigger("selection:update",{data:e})})},o.prototype.trigger=function(e,t){var n=o.__super__.trigger,s={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(void 0===t&&(t={}),e in s){var i=s[e],s={prevented:!1,name:e,args:t};if(n.call(this,i,s),s.prevented)return void(t.prevented=!0)}n.call(this,e,t)},o.prototype.toggleDropdown=function(){this.isDisabled()||(this.isOpen()?this.close():this.open())},o.prototype.open=function(){this.isOpen()||this.isDisabled()||this.trigger("query",{})},o.prototype.close=function(e){this.isOpen()&&this.trigger("close",{originalEvent:e})},o.prototype.isEnabled=function(){return!this.isDisabled()},o.prototype.isDisabled=function(){return this.options.get("disabled")},o.prototype.isOpen=function(){return this.$container[0].classList.contains("select2-container--open")},o.prototype.hasFocus=function(){return this.$container[0].classList.contains("select2-container--focus")},o.prototype.focus=function(e){this.hasFocus()||(this.$container[0].classList.add("select2-container--focus"),this.trigger("focus",{}))},o.prototype.enable=function(e){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.');e=!(e=null==e||0===e.length?[!0]:e)[0];this.$element.prop("disabled",e)},o.prototype.data=function(){this.options.get("debug")&&0<arguments.length&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var t=[];return this.dataAdapter.current(function(e){t=e}),t},o.prototype.val=function(e){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==e||0===e.length)return this.$element.val();e=e[0];Array.isArray(e)&&(e=e.map(function(e){return e.toString()})),this.$element.val(e).trigger("input").trigger("change")},o.prototype.destroy=function(){r.RemoveData(this.$container[0]),this.$container.remove(),this._observer.disconnect(),this._observer=null,this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",r.GetData(this.$element[0],"old-tabindex")),this.$element[0].classList.remove("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),r.RemoveData(this.$element[0]),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},o.prototype.render=function(){var e=t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return e.attr("dir",this.options.get("dir")),this.$container=e,this.$container[0].classList.add("select2-container--"+this.options.get("theme")),r.StoreData(e[0],"element",this.$element),e},o}),u.define("jquery-mousewheel",["jquery"],function(e){return e}),u.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(i,e,r,t,o){var a;return null==i.fn.select2&&(a=["open","close","destroy"],i.fn.select2=function(t){if("object"==typeof(t=t||{}))return this.each(function(){var e=i.extend(!0,{},t);new r(i(this),e)}),this;if("string"!=typeof t)throw new Error("Invalid arguments for Select2: "+t);var n,s=Array.prototype.slice.call(arguments,1);return this.each(function(){var e=o.GetData(this,"select2");null==e&&window.console&&console.error&&console.error("The select2('"+t+"') method was called on an element that is not using Select2."),n=e[t].apply(e,s)}),-1<a.indexOf(t)?this:n}),null==i.fn.select2.defaults&&(i.fn.select2.defaults=t),r}),{define:u.define,require:u.require});function b(e,t){return i.call(e,t)}function l(e,t){var n,s,i,r,o,a,l,c,u,d,p=t&&t.split("/"),h=y.map,f=h&&h["*"]||{};if(e){for(t=(e=e.split("/")).length-1,y.nodeIdCompat&&_.test(e[t])&&(e[t]=e[t].replace(_,"")),"."===e[0].charAt(0)&&p&&(e=p.slice(0,p.length-1).concat(e)),c=0;c<e.length;c++)"."===(d=e[c])?(e.splice(c,1),--c):".."===d&&(0===c||1===c&&".."===e[2]||".."===e[c-1]||0<c&&(e.splice(c-1,2),c-=2));e=e.join("/")}if((p||f)&&h){for(c=(n=e.split("/")).length;0<c;--c){if(s=n.slice(0,c).join("/"),p)for(u=p.length;0<u;--u)if(i=h[p.slice(0,u).join("/")],i=i&&i[s]){r=i,o=c;break}if(r)break;!a&&f&&f[s]&&(a=f[s],l=c)}!r&&a&&(r=a,o=l),r&&(n.splice(0,o,r),e=n.join("/"))}return e}function w(t,n){return function(){var e=a.call(arguments,0);return"string"!=typeof e[0]&&1===e.length&&e.push(null),o.apply(p,e.concat([t,n]))}}function x(e){var t;if(b(m,e)&&(t=m[e],delete m[e],v[e]=!0,r.apply(p,t)),!b(g,e)&&!b(v,e))throw new Error("No "+e);return g[e]}function c(e){var t,n=e?e.indexOf("!"):-1;return-1<n&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function A(e){return e?c(e):[]}var u=s.require("jquery.select2");return t.fn.select2.amd=s,u});