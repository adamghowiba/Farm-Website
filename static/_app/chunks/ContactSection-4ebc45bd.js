import{S as K,i as Q,s as W,e as p,k as x,t as P,j as A,c as f,a as _,n as T,g as D,d as v,m as F,b as a,f as M,E as t,o as B,x as G,u as U,v as z,F as Y}from"./vendor-77c01bab.js";import{C as R}from"./ContactInfo-37f8d3c4.js";import{B as Z}from"./Button-1df6e254.js";function ee(q){let e;return{c(){e=P("Submit")},l(s){e=D(s,"Submit")},m(s,$){M(s,e,$)},d(s){s&&v(e)}}}function te(q){let e,s,$,g,O,d,b,E,n,r,k,c,S,u,C,m,w,o,h,I,y,N;return y=new Z({props:{type:"submit",$$slots:{default:[ee]},$$scope:{ctx:q}}}),{c(){e=p("form"),s=p("input"),$=x(),g=p("input"),O=x(),d=p("input"),b=x(),E=p("div"),n=p("select"),r=p("option"),k=P("Select Option"),c=p("option"),S=P("Import"),u=p("option"),C=P("Test"),m=p("option"),w=P("Another Test"),o=x(),h=p("textarea"),I=x(),A(y.$$.fragment),this.h()},l(l){e=f(l,"FORM",{class:!0});var i=_(e);s=f(i,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0}),$=T(i),g=f(i,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0}),O=T(i),d=f(i,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0}),b=T(i),E=f(i,"DIV",{class:!0});var V=_(E);n=f(V,"SELECT",{name:!0,placeholder:!0,class:!0});var j=_(n);r=f(j,"OPTION",{id:!0});var H=_(r);k=D(H,"Select Option"),H.forEach(v),c=f(j,"OPTION",{});var L=_(c);S=D(L,"Import"),L.forEach(v),u=f(j,"OPTION",{});var X=_(u);C=D(X,"Test"),X.forEach(v),m=f(j,"OPTION",{});var J=_(m);w=D(J,"Another Test"),J.forEach(v),j.forEach(v),V.forEach(v),o=T(i),h=f(i,"TEXTAREA",{name:!0,placeholder:!0,class:!0}),_(h).forEach(v),I=T(i),F(y.$$.fragment,i),i.forEach(v),this.h()},h(){a(s,"type","text"),a(s,"name","name"),a(s,"placeholder","Name"),a(s,"class","svelte-1hkyvs2"),a(g,"type","text"),a(g,"name","email"),a(g,"placeholder","Email"),a(g,"class","svelte-1hkyvs2"),a(d,"type","text"),a(d,"name","phone"),a(d,"placeholder","Phone"),a(d,"class","svelte-1hkyvs2"),a(r,"id","test"),r.__value="Export",r.value=r.__value,r.selected=!0,r.hidden=!0,r.disabled=!0,c.__value="Import",c.value=c.__value,u.__value="Test",u.value=u.__value,m.__value="More",m.value=m.__value,a(n,"name","service"),a(n,"placeholder","service"),a(n,"class","svelte-1hkyvs2"),a(E,"class","select-wrap svelte-1hkyvs2"),a(h,"name","message"),a(h,"placeholder","message"),a(h,"class","svelte-1hkyvs2"),a(e,"class","svelte-1hkyvs2")},m(l,i){M(l,e,i),t(e,s),t(e,$),t(e,g),t(e,O),t(e,d),t(e,b),t(e,E),t(E,n),t(n,r),t(r,k),t(n,c),t(c,S),t(n,u),t(u,C),t(n,m),t(m,w),t(e,o),t(e,h),t(e,I),B(y,e,null),N=!0},p(l,[i]){const V={};i&1&&(V.$$scope={dirty:i,ctx:l}),y.$set(V)},i(l){N||(G(y.$$.fragment,l),N=!0)},o(l){U(y.$$.fragment,l),N=!1},d(l){l&&v(e),z(y)}}}class ae extends K{constructor(e){super();Q(this,e,null,te,W,{})}}function se(q){let e,s,$,g,O,d,b,E,n,r,k,c,S,u,C,m,w;return r=new R({props:{icon:"/icons/pin--white.svg",info:"44 Elmessaha Street Dokki, Giza"}}),c=new R({props:{icon:"/icons/phone--white.svg",info:"(202) 37 497 155"}}),u=new R({props:{icon:"/icons/email--white.svg",info:"ahmad@fayroozfarm.com"}}),m=new ae({}),{c(){e=p("div"),s=p("div"),$=p("div"),g=P("Get in touch"),O=x(),d=p("h2"),b=P("lets discuss what we can do for you"),E=x(),n=p("div"),A(r.$$.fragment),k=x(),A(c.$$.fragment),S=x(),A(u.$$.fragment),C=x(),A(m.$$.fragment),this.h()},l(o){e=f(o,"DIV",{class:!0});var h=_(e);s=f(h,"DIV",{class:!0});var I=_(s);$=f(I,"DIV",{class:!0});var y=_($);g=D(y,"Get in touch"),y.forEach(v),O=T(I),d=f(I,"H2",{class:!0});var N=_(d);b=D(N,"lets discuss what we can do for you"),N.forEach(v),E=T(I),n=f(I,"DIV",{class:!0});var l=_(n);F(r.$$.fragment,l),k=T(l),F(c.$$.fragment,l),S=T(l),F(u.$$.fragment,l),l.forEach(v),I.forEach(v),C=T(h),F(m.$$.fragment,h),h.forEach(v),this.h()},h(){a($,"class","subtitle"),a(d,"class","svelte-14qimri"),a(n,"class","info svelte-14qimri"),a(s,"class","heading svelte-14qimri"),a(e,"class","container spaced flex svelte-14qimri")},m(o,h){M(o,e,h),t(e,s),t(s,$),t($,g),t(s,O),t(s,d),t(d,b),t(s,E),t(s,n),B(r,n,null),t(n,k),B(c,n,null),t(n,S),B(u,n,null),t(e,C),B(m,e,null),w=!0},p:Y,i(o){w||(G(r.$$.fragment,o),G(c.$$.fragment,o),G(u.$$.fragment,o),G(m.$$.fragment,o),w=!0)},o(o){U(r.$$.fragment,o),U(c.$$.fragment,o),U(u.$$.fragment,o),U(m.$$.fragment,o),w=!1},d(o){o&&v(e),z(r),z(c),z(u),z(m)}}}class le extends K{constructor(e){super();Q(this,e,null,se,W,{})}}export{le as C};