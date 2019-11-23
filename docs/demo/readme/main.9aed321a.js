(function () {var d={};Object.defineProperty(d,"__esModule",{value:!0});var G=function(t,e,r){var $=t.style;$[e]=null==r?null:r};d.setOneStyle=G;var f=function(t,e,r){null==r?t.removeAttribute(e):t.setAttribute(e,r)};d.setAttribute=f;var la=function(t,e,r){var $=t;$[e]=null==r?null:r};d.setProperty=la;var ja=function(t,e,r){if(null==r)t.removeAttribute(e);else if("string"==typeof r)f(t,e,r);else{var $=Object.keys(r).map(function(t){return t+": "+r[t]+";"}).join(" ");f(t,e,$.length&&$||null)}};d.setStyleAttribute=ja;var n=function(t,e,r){var $=t;if(null==r)$[e]=null;else{var o=!0===r||"true"===r;$[e]=o}};d.setBoolProperty=n;var x=function(t,e,r){f(t,e,!0===r||"true"===r?"true":!1===r?"false":null)};d.setEnumBoolAttribute=x;var c=function(t,e,r){f(t,e,!0===r||"true"===r?"":null)};d.setBoolAttribute=c;var z=function(t,e,r){Array.isArray(r)?f(t,e,r.join(", ")||null):f(t,e,r&&String(r)||null)};d.setCommaSeparated=z;var i=function(t,e,r){Array.isArray(r)?f(t,e,r.join(" ")||null):f(t,e,r&&String(r)||null)};d.setSpaceSeparated=i;var t={};Object.defineProperty(t,"__esModule",{value:!0});var ia={acceptcharset:"accept-charset",asattr:"as",classname:"class",httpequiv:"http-equiv",htmlfor:"for"};t.htmlAttributeNameMap=ia;var ha={"accept-charset":i,class:i,acceptcharset:i,async:c,autofocus:c,autoplay:c,checked:n,contenteditable:x,controls:c,default:c,defer:c,disabled:c,draggable:x,formnovalidate:c,headers:i,hidden:c,ismap:c,itemscope:c,loop:c,multiple:n,muted:n,nomodule:c,novalidate:c,open:c,ping:i,playsinline:c,readonly:c,rel:i,required:c,reversed:c,selected:n,sizes:z,srcset:z,style:ja,typemustmatch:c,value:la};t.htmlAttributeMap=ha;var k={},da=k&&k.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(k,"__esModule",{value:!0});var A=function(){function e(e,t,n){this.node=e,this.children=t,this.beforeDestroy=n}return e.prototype.destroy=function(){this.beforeDestroy&&this.beforeDestroy(),$(this.node);for(var e=0,t=this.children;e<t.length;e++){t[e].destroy()}},e}(),Uc=A;k.DOMBaseNodeView=Uc;var $c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.kind="static",t}return da(t,e),t}(A),B=$c;k.DOMStaticNodeView=B;var Sc=function(e){function t(t,n,r,o){var $=e.call(this,t,n,o)||this;return $.node=t,$.children=n,$.change=r,$.beforeDestroy=o,$.kind="dynamic",$}return da(t,e),t}(A),C=Sc;k.DOMDynamicNodeView=C;var F={};Object.defineProperty(F,"__esModule",{value:!0});var Oa=function(e,t){var r=e.doc.createTextNode(t||""),$=new B(r,[]);return e.append(r),$},fb=function(e,t,r){var $=e.doc.createTextNode(r(t)||""),n=new C($,[],function(e){var t=r(e)||"";$.nodeValue=t});return e.append($),n},ca=function(){function e(e){this.content=e}return e.prototype.render=function(e,t){return"function"==typeof this.content?fb(e,t,this.content):Oa(e,this.content)},e}(),Oc=ca;F.DOMText=Oc;var ba=function(e){return new ca(e)};F.text=ba;var h={};Object.defineProperty(h,"__esModule",{value:!0});var $=function(e){var t=e;t&&t.onblur&&(t.onblur=null),e&&e.parentElement&&e.parentElement.removeChild(e)};h.removeNode=$;var ta=function(e){return function(t){null!=e.parentElement&&e.parentElement.insertBefore(t,e)}};h.insertBefore=ta;var q=function(e){return e.filter(function(e){return"dynamic"===e.kind})};h.filterDynamics=q;var g=function(e){return"string"==typeof e||"function"==typeof e?ba(e):e};h.domChildToTemplate=g;var K=function(e,t,r,$){t=t.toLowerCase(),t=ia[t]||t;var o=ha[t]||f;if("function"==typeof r){$.push(function($){return o(e,t,r($))})}else o(e,t,r);return $};h.processAttribute=K;var Y=function(e,t,r,$,o){var n;e.addEventListener(t.toLowerCase(),function(t){var o=r(n,t,e);void 0!==o&&$(o)},!1);return o.push(function(e){n=e}),o};h.processEvent=Y;var W=function(e,t,r,$){if("function"==typeof r){$.push(function($){return G(e,t,r($))})}else G(e,t,r);return $};h.processStyle=W;var e={},U=e&&e.__extends||function(){var e=function(r,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])})(r,t)};return function(r,t){function n(){this.constructor=r}e(r,t),r.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var D=function(){function e(e){this.views=e}return e.prototype.destroy=function(){for(var e=0,r=this.views;e<r.length;e++){r[e].destroy()}},e}(),ua=D;e.DOMBaseFragmentView=ua;var S=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.kind="static",r}return U(r,e),r}(D),M=S;e.DOMStaticFragmentView=M;var L=function(e){function r(r,t){var n=e.call(this,r)||this;return n.change=t,n.kind="dynamic",n}return U(r,e),r}(D),H=L;e.DOMDynamicFragmentView=H;var I=function(e){var r=q(e);return r.length>0?new L(e,function(e){for(var t=0,n=r;t<n.length;t++){n[t].change(e)}}):new S(e)};e.fragmentView=I;var qa=function(){function e(e){this.children=e}return e.prototype.render=function(e,r){var t=this.children.map(function(t){return t.render(e,r)});return I(t)},e}(),Xc=qa;e.DOMFragment=Xc;var Zc=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return new qa(e.map(g))};e.fragment=Zc;var r={};Object.defineProperty(r,"__esModule",{value:!0});var bd=function(){function t(){this.listeners=[]}return t.ofOne=function(){return new t},t.ofTwo=function(){return new t},t.ofThree=function(){return new t},t.prototype.emit=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var n=0,r=this.listeners;n<r.length;n++){r[n].apply(void 0,t)}},t.prototype.on=function(t){this.listeners.push(t)},t.prototype.off=function(t){var e=this.listeners.indexOf(t);return!(e<0)&&(this.listeners.splice(e,1),!0)},t.prototype.once=function(t){var e=this,n=function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];e.off(n),t.apply(void 0,r)};this.on(n)},t}(),ed=bd;r.Emitter=ed;var sa=function(t){return function(e){var n,r=!1;return function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];n=o,r||(r=!0,setTimeout(function(){r=!1,e.apply(void 0,n)},t))}}};r.debounce=sa;var aa=function(t){var e,n=!1;return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];e=r,n||(n=!0,requestAnimationFrame(function(){n=!1,t.apply(void 0,e)}))}};r.nextFrame=aa;var l={},xa=l&&l.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();Object.defineProperty(l,"__esModule",{value:!0});var N=function(e){function t(t,r,o,n,p){var $=e.call(this,o,function(e){t.property.set(e);for(var r=0,o=n;r<o.length;r++){o[r].change(e)}})||this;return $.store=t,$.dispatch=r,$._destroy=p,$}return xa(t,e),t.prototype.destroy=function(){this._destroy(),e.prototype.destroy.call(this)},t}(H),bb=N;l.DOMComponentView=bb;var O=function(){function e(e,t,r){this.store=e,this.children=t,this.delayed=r}return e.prototype.render=function(e,t){var r=function(e){return a.change(e)};this.delayed&&(r=aa(r));var o=this.store;o.property.observable.on(r);var n=function(e){o.process(e)},p=e.withDispatch(n),$=this.children.map(function(e){return e.render(p,o.property.get())}),u=q($),a=new N(o,n,$,u,function(){o.property.observable.off(r)});return o.property.set(t),a},e}(),Lc=O;l.DOMComponent=Lc;var P=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new O(e.store,t.map(g),e.delayed||!1)};l.component=P;var Q={};Object.defineProperty(Q,"__esModule",{value:!0});var Pc=function(){function t(t,n,e,i){this.doc=t,this.append=n,this.parent=e,this.dispatch=i}return t.fromElement=function(n,e){return new t(n.ownerDocument||window&&window.document,function(t){return n.appendChild(t)},n,e)},t.prototype.mapAction=function(n){var e=this;return new t(this.doc,this.append,this.parent,function(t){return e.dispatch(n(t))})},t.prototype.conditionalMapAction=function(n){var e=this;return new t(this.doc,this.append,this.parent,function(t){var i=n(t);void 0!==i&&e.dispatch(i)})},t.prototype.withAppend=function(n){return new t(this.doc,n,this.parent,this.dispatch)},t.prototype.withParent=function(n){return new t(this.doc,this.append,n,this.dispatch)},t.prototype.withDispatch=function(n){return new t(this.doc,this.append,this.parent,n)},t}(),R=Pc;Q.DOMContext=R;var E,T={};Object.defineProperty(T,"__esModule",{value:!0});var kd;!function(e){e.renderComponent=function(e){var t=e.el,o=e.component,r=o.store,n=e.document||document,$=t||n.body,p=o.render(new R(n,function(e){return $.appendChild(e)},$,function(){}),r.property.get());return{destroy:function(){return p.destroy()},store:r}},e.render=function(t){var o=t.el,r=t.store,n=t.document,$=t.template,p=P({store:r},$);return e.renderComponent({el:o,component:p,document:n})}}(kd=E||(E={},T.Tempo=E));var j={};Object.defineProperty(j,"__esModule",{value:!0});var V=function(e,r,t){return function($,n){return e($,r,t,n)}},ad=function(e,r,t,$){return null!=e?e($,r,t):void 0},o=function(){function e(e,r,t){this.createElement=e,this.attributes=r,this.children=t}return e.prototype.render=function(e,r){var t=this.createElement(e.doc),$=void 0,n=this.attributes,a=n.attrs,m=n.events,o=n.styles,l=n.afterrender,u=n.beforechange,i=n.afterchange,p=n.beforedestroy,M=p&&function(){return p(t,e,$)},v=[];a&&Object.keys(a).forEach(function(e){return K(t,e,a[e],v)}),m&&Object.keys(m).forEach(function(r){return Y(t,r,m[r],e.dispatch,v)}),o&&Object.keys(o).forEach(function(e){return W(t,e,o[e],v)});for(var c=0,j=v;c<j.length;c++){(0,j[c])(r)}var f=e.withAppend(function(e){return t.appendChild(e)}).withParent(t),s=this.children.map(function(e){return e.render(f,r)});e.append(t),l&&($=ad(l,t,e,r));var d=q(s).map(function(e){return function(r){return e.change(r)}});if(v.push.apply(v,d),u){var h=V(u,t,e),E=function(e){$=h(e,$)};v.unshift(E)}if(i){var x=V(i,t,e);E=function(e){$=x(e,$)};v.push(E)}return v.length>0?new C(t,s,function(e){for(var r=0,t=v;r<t.length;r++){(0,t[r])(e)}},M):new B(t,s,M)},e}(),dd=o;j.DOMElement=dd;var X=function(e){return function(r){return r.createElement(e)}},ra=function(e,r){for(var t=[],$=2;$<arguments.length;$++)t[$-2]=arguments[$];return new o(X(e),r,t.map(g))};j.el=ra;var a=function(e){return function(r){for(var t=[],$=1;$<arguments.length;$++)t[$-1]=arguments[$];return new o(X(e),r,t.map(g))}};j.el2=a;var Z={svg:"http://www.w3.org/2000/svg"};j.defaultNamespaces=Z;var _=function(e,r){return function(t){return t.createElementNS(e,r)}},va=function(e,r,t){for(var $=[],n=3;n<arguments.length;n++)$[n-3]=arguments[n];var a=Z[e]||e;return new o(_(a,r),t,$.map(g))};j.elNS=va;var wa=function(e,r){return function(t){for(var $=[],n=1;n<arguments.length;n++)$[n-1]=arguments[n];return new o(_(e,r),t,$.map(g))}};j.elNS2=wa;var b={};Object.defineProperty(b,"__esModule",{value:!0});var ya=a("a");b.a=ya;var za=a("abbr");b.abbr=za;var Aa=a("address");b.address=Aa;var Ba=a("applet");b.applet=Ba;var Ca=a("area");b.area=Ca;var Da=a("article");b.article=Da;var Ea=a("aside");b.aside=Ea;var Fa=a("audio");b.audio=Fa;var Ga=a("b");b.b=Ga;var Ha=a("base");b.base=Ha;var Ia=a("basefont");b.basefont=Ia;var Ja=a("bdi");b.bdi=Ja;var Ka=a("bdo");b.bdo=Ka;var La=a("blockquote");b.blockquote=La;var Ma=a("body");b.body=Ma;var Na=a("br");b.br=Na;var u=a("button");b.button=u;var Pa=a("canvas");b.canvas=Pa;var Qa=a("caption");b.caption=Qa;var Ra=a("cite");b.cite=Ra;var Sa=a("code");b.code=Sa;var Ta=a("col");b.col=Ta;var Ua=a("colgroup");b.colgroup=Ua;var Va=a("data");b.data=Va;var Wa=a("datalist");b.datalist=Wa;var Xa=a("dd");b.dd=Xa;var Ya=a("del");b.del=Ya;var Za=a("details");b.details=Za;var $a=a("dfn");b.dfn=$a;var _a=a("dialog");b.dialog=_a;var ab=a("dir");b.dir=ab;var m=a("div");b.div=m;var cb=a("dl");b.dl=cb;var db=a("dt");b.dt=db;var eb=a("em");b.em=eb;var jd=a("embed");b.embed=jd;var gb=a("fieldset");b.fieldset=gb;var hb=a("figcaption");b.figcaption=hb;var ib=a("figure");b.figure=ib;var jb=a("font");b.font=jb;var kb=a("footer");b.footer=kb;var lb=a("form");b.form=lb;var mb=a("frame");b.frame=mb;var nb=a("frameset");b.frameset=nb;var ob=a("h1");b.h1=ob;var pb=a("h2");b.h2=pb;var qb=a("h3");b.h3=qb;var rb=a("h4");b.h4=rb;var sb=a("h5");b.h5=sb;var tb=a("h6");b.h6=tb;var ub=a("head");b.head=ub;var vb=a("header");b.header=vb;var wb=a("hgroup");b.hgroup=wb;var xb=a("hr");b.hr=xb;var yb=a("html");b.html=yb;var zb=a("i");b.i=zb;var Ab=a("iframe");b.iframe=Ab;var Bb=a("img");b.img=Bb;var Cb=a("input");b.input=Cb;var Db=a("ins");b.ins=Db;var Eb=a("kbd");b.kbd=Eb;var Fb=a("label");b.label=Fb;var Gb=a("legend");b.legend=Gb;var Hb=a("li");b.li=Hb;var Ib=a("link");b.link=Ib;var Jb=a("listing");b.listing=Jb;var Kb=a("main");b.main=Kb;var Lb=a("map");b.map=Lb;var Mb=a("mark");b.mark=Mb;var Nb=a("marquee");b.marquee=Nb;var Ob=a("menu");b.menu=Ob;var Pb=a("meta");b.meta=Pb;var Qb=a("meter");b.meter=Qb;var Rb=a("nav");b.nav=Rb;var Sb=a("noscript");b.noscript=Sb;var Tb=a("object");b.object=Tb;var Ub=a("ol");b.ol=Ub;var Vb=a("optgroup");b.optgroup=Vb;var Wb=a("option");b.option=Wb;var Xb=a("output");b.output=Xb;var Yb=a("p");b.p=Yb;var Zb=a("param");b.param=Zb;var $b=a("picture");b.picture=$b;var _b=a("pre");b.pre=_b;var ac=a("progress");b.progress=ac;var bc=a("q");b.q=bc;var cc=a("rp");b.rp=cc;var dc=a("rt");b.rt=dc;var ec=a("ruby");b.ruby=ec;var fc=a("s");b.s=fc;var gc=a("samp");b.samp=gc;var hc=a("script");b.script=hc;var ic=a("section");b.section=ic;var jc=a("select");b.select=jc;var kc=a("slot");b.slot=kc;var lc=a("small");b.small=lc;var mc=a("source");b.source=mc;var nc=a("span");b.span=nc;var oc=a("strong");b.strong=oc;var pc=a("style");b.style=pc;var qc=a("sub");b.sub=qc;var rc=a("summary");b.summary=rc;var sc=a("sup");b.sup=sc;var tc=a("table");b.table=tc;var uc=a("tbody");b.tbody=uc;var vc=a("td");b.td=vc;var wc=a("template");b.template=wc;var xc=a("textarea");b.textarea=xc;var yc=a("tfoot");b.tfoot=yc;var zc=a("th");b.th=zc;var Ac=a("thead");b.thead=Ac;var Bc=a("time");b.time=Bc;var Cc=a("title");b.title=Cc;var Dc=a("tr");b.tr=Dc;var Ec=a("track");b.track=Ec;var Fc=a("u");b.u=Fc;var Gc=a("ul");b.ul=Gc;var Hc=a("var");b.varEl=Hc;var Ic=a("video");b.video=Ic;var Jc=a("wbr");b.wbr=Jc;var Kc=a("xmp");b.xmp=Kc;var p={};Object.defineProperty(p,"__esModule",{value:!0});var ea=function(){function e(e,t){this.map=e,this.children=t}return e.prototype.render=function(e,t){var a=this.children,r=this.map,$=r(t),n=a.map(function(t){return t.render(e,$)}),p=q(n);return 0===p.length?new M(n):new H(n,function(e){for(var t=r(e),a=0,$=p;a<$.length;a++){$[a].change(t)}})},e}(),Nc=ea;p.MapStateTemplate=Nc;var fa=function(e){for(var t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];return new ea(e.map,t.map(g))};p.mapState=fa;var ga=function(){function e(e,t){this.map=e,this.children=t}return e.prototype.render=function(e,t){var a=this.children,r=this.map,$=a.map(function(a){return a.render(e.conditionalMapAction(r),t)});return I($)},e}(),Qc=ga;p.MapActionTemplate=Qc;var Rc=function(e){for(var t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];return new ga(e.map,t.map(g))};p.mapAction=Rc;var s={};Object.defineProperty(s,"__esModule",{value:!0});var Tc=function(){function t(){this.listeners=[]}return t.ofOne=function(){return new t},t.ofTwo=function(){return new t},t.ofThree=function(){return new t},t.prototype.emit=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var o=0,n=this.listeners;o<n.length;o++){n[o].apply(void 0,t)}},t.prototype.on=function(t){this.listeners.push(t)},t.prototype.off=function(t){var e=this.listeners.indexOf(t);return!(e<0)&&(this.listeners.splice(e,1),!0)},t.prototype.once=function(t){var e=this,o=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];e.off(o),t.apply(void 0,n)};this.on(o)},t}(),v=Tc;s.Emitter=v;var Vc=function(t){return function(e){var o,n=!1;return function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];o=r,n||(n=!0,setTimeout(function(){n=!1,e.apply(void 0,o)},t))}}};s.debounce=Vc;var Wc=function(t){var e,o=!1;return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];e=n,o||(o=!0,requestAnimationFrame(function(){o=!1,t.apply(void 0,e)}))}};s.nextFrame=Wc;var y={};Object.defineProperty(y,"__esModule",{value:!0});var ka=function(r,e){return r===e||r!=r&&e!=e};y.strictEqual=ka;var w=function(r,e){if(ka(r,e))return!0;if(null==r||null==e)return!1;var t=Array.isArray(r);if(t!==Array.isArray(e))return!1;if(t){var a=r,n=e;if((y=a.length)!==n.length)return!1;for(var i=0;i<y;i++)if(!w(a[i],n[i]))return!1;return!0}var u=r instanceof Date;if(u!==e instanceof Date)return!1;if(u)return+r==+e;var f=r instanceof Set;if(f!==e instanceof Set)return!1;if(f){var l=r,o=e;if(l.size!==o.size)return!1;for(var s=l.keys();;){if((x=s.next()).done)break;if(!o.has(x.value))return!1}return!0}var $=r instanceof Map;if($!==e instanceof Map)return!1;if($){var p=r,v=e;if(p.size!==v.size)return!1;for(var c=p.keys();;){var x;if((x=c.next()).done)break;if(!w(p.get(x.value),v.get(x.value)))return!1}return!0}var m="object"==typeof r;if(m!==("object"==typeof e))return!1;if(m){var y,d=r,q=e,E=Object.keys(d),b=Object.keys(q);if((y=E.length)!==b.length)return!1;for(i=0;i<y;i++){var g=E[i];if(!q.hasOwnProperty(g))return!1;if(!w(d[g],q[g]))return!1}return!0}return!1};y.deepEqual=w;var ma={};Object.defineProperty(ma,"__esModule",{value:!0});var _c=function(){function e(e,t){void 0===t&&(t=w),this.value=e,this.equal=t,this.observable=this.emitter=v.ofOne()}return e.prototype.set=function(e){return!this.equal(this.value,e)&&(this.value=e,this.emit(this.value),!0)},e.prototype.get=function(){return this.value},e.prototype.emit=function(e){this.emitter.emit(e)},e}(),na=_c;ma.Property=na;var oa={};Object.defineProperty(oa,"__esModule",{value:!0});var cd=function(){function e(e,r){this.property=e,this.reducer=r,this.observable=this.emitter=v.ofThree()}return e.ofState=function(r){return new e(new na(r.state,r.equal),r.reducer)},e.prototype.process=function(e){var r=this.reducer(this.property.get(),e),t=this.property.set(r);return this.emitter.emit(r,e,t),t},e}(),pa=cd;oa.Store=pa;var J={};Object.defineProperty(J,"__esModule",{value:!0});var fd={count:0},gd=function(){return{kind:"decrement"}},hd=function(){return{kind:"increment"}},id=function(e,t){switch(t.kind){case"increment":return{count:e.count+1};case"decrement":return{count:e.count-1};default:throw"this should never happen";}},Yc=pa.ofState({state:fd,reducer:id}),Mc=m({attrs:{className:"app"}},fa({map:function(e){return e.count}},m({attrs:{className:"count count-small"}},"count"),m({attrs:{className:"count"}},String),m({attrs:{className:"buttons"}},u({events:{click:gd},attrs:{disabled:function(e){return e<=0}}},"-"),u({events:{click:hd}},"+"))));E.render({store:Yc,template:Mc});if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=J}else if(typeof define==="function"&&define.amd){define(function(){return J})}})();