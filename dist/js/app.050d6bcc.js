(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],f=0,p=[];f<s.length;f++)i=s[f],o[i]&&p.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0958":function(t,e,n){},"0d0c":function(t,e,n){},"17d5":function(t,e,n){"use strict";var a=n("2ee8"),o=n.n(a);o.a},"2e93":function(t,e){},"2ee8":function(t,e,n){},"3db3":function(t,e,n){"use strict";var a=n("0d0c"),o=n.n(a);o.a},5115:function(t,e,n){"use strict";var a=n("5947"),o=n.n(a);o.a},5350:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"root"}},[n("div",{staticClass:"shell is-home"},[n("AppHeader"),n("main",{staticClass:"main"},[n("div",{staticClass:"view home"},[n("router-view")],1)]),n("AppFooter"),n("div",{staticClass:"overlay"})],1)])},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("nav",{staticClass:"nav"},[n("h1",{staticClass:"header-title"},[n("router-link",{attrs:{to:"/"}},[t._v("\n        hudsonmarinho.\n        "),n("span",[t._v("front end developer")])])],1),n("NavItem",{attrs:{name:"work",href:"/"}}),n("NavItem",{attrs:{name:"lab",href:"lab"}}),n("NavItem",{attrs:{name:"about",href:"about"}})],1)])},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-item"},[n("router-link",{attrs:{to:t.href}},[n("span",{staticClass:"nav-item-copy nav-item-copy--base"},[t._v(t._s(t.name))]),n("span",{staticClass:"nav-item-copy nav-item-copy--clone"},[t._v(t._s(t.name))])])],1)},l=[],u={name:"NavItem",props:{name:String,href:String}},f=u,p=(n("74d1"),n("2877")),d=Object(p["a"])(f,c,l,!1,null,"6a8e39b8",null);d.options.__file="NavItem.vue";var v=d.exports,m={components:{NavItem:v}},_=m,h=(n("3db3"),Object(p["a"])(_,i,s,!1,null,"7c58f33c",null));h.options.__file="Header.vue";var b=h.exports,g=n("fd2d"),C={components:{AppHeader:b,AppFooter:g["default"]}},y=C,x=(n("7972"),Object(p["a"])(y,o,r,!1,null,null,null));x.options.__file="App.vue";var w=x.exports,j=n("8c4f"),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"portfolio"},[a("slider",{ref:"slider",attrs:{options:t.options}},[t._l(t.itens,function(e,o){return a("slideritem",{key:o},[a("div",{staticClass:"portfolio-content"},[a("figure",{staticClass:"portfolio-cover"},[a("img",{attrs:{src:t.cover(e.cover),alt:e.client}})]),a("article",{staticClass:"portfolio-description"},[a("div",{staticClass:"portfolio-date"},[t._v(t._s(e.year))]),a("div",{staticClass:"portfolio-type"},[t._v(t._s(e.type))]),a("div",{staticClass:"portfolio-text"},[t._v(t._s(e.description))]),a("div",{staticClass:"portfolio-details"},[a("div",{staticClass:"portfolio-details-col"},[a("div",{staticClass:"portfolio-tags"},[a("span",[a("strong",[t._v("Client:")]),t._v(" "+t._s(e.client))]),a("span",[a("strong",[t._v("Team:")]),t._v(" "+t._s(e.team))])])]),a("div",{staticClass:"portfolio-details-col"},[a("div",{staticClass:"portfolio-tags"},t._l(e.tags.left,function(e,n){return a("span",{key:n},[t._v("#"+t._s(e))])}))]),a("div",{staticClass:"portfolio-details-col"},[a("div",{staticClass:"portfolio-tags"},t._l(e.tags.right,function(e,n){return a("span",{key:n},[t._v("#"+t._s(e))])}))])]),a("a",{staticClass:"portfolio-visit",attrs:{target:"_blank",href:e.url}},[a("span",{staticClass:"text-split"},[t._v("Visit site")]),a("span",{staticClass:"text-arrow"},[a("img",{staticClass:"portfolio-visit-arrow clone",attrs:{src:n("59e3"),role:"presentation"}}),a("img",{staticClass:"portfolio-visit-arrow",attrs:{src:n("59e3"),role:"presentation"}})])])])])])}),a("div",{attrs:{slot:"loading"},slot:"loading"},[t._v("loading...")])],2)],1)},k=[],E=n("bc3a"),$=n.n(E),S=n("b190"),T={data:function(){return{itens:null,options:{currentPage:0,thresholdDistance:500,thresholdTime:100,autoplay:5e3,loop:!0,direction:"vertical",loopedSlides:1,slidesToScroll:1,timingFunction:"ease",speed:800,centeredSlides:!1}}},components:{slider:S["slider"],slideritem:S["slideritem"]},mounted:function(){var t=this;setTimeout(function(){$.a.get("/portfolio.json").then(function(e){return t.itens=e.data.objects})},1e3)},methods:{cover:function(t){return n("d577")("./".concat(t))}}},N=T,P=(n("b469"),Object(p["a"])(N,O,k,!1,null,"4b223798",null));P.options.__file="Home.vue";var A=P.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view about"},[n("h1",[t._v("This is an about page")])])}],M={name:"about",components:{},data:function(){return{}},methods:{},mounted:function(){}},H=M,D=(n("5b33"),Object(p["a"])(H,I,F,!1,null,"f875dfd0",null));D.options.__file="About.vue";var J=D.exports,L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},U=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view lab"},[n("h1",[t._v("This is an lab page")])])}],V={name:"lab",components:{},data:function(){return{}},methods:{},mounted:function(){}},q=V,z=(n("5115"),Object(p["a"])(q,L,U,!1,null,"9eff37d0",null));z.options.__file="Lab.vue";var B=z.exports,G=[{path:"/",name:"home",component:A},{path:"/lab",name:"lab",component:B},{path:"/about",name:"about",component:J}];a["a"].use(j["a"]);var K=new j["a"]({mode:"history",routes:G});a["a"].config.productionTip=!1,new a["a"]({router:K,render:function(t){return t(w)}}).$mount("#app")},"57ed":function(t,e,n){t.exports=n.p+"img/iamaction.ab6894bd.png"},5947:function(t,e,n){},"59e3":function(t,e,n){t.exports=n.p+"img/arrow.b2473d77.svg"},"5b33":function(t,e,n){"use strict";var a=n("5350"),o=n.n(a);o.a},"6e8a":function(t,e,n){t.exports=n.p+"img/bestbuild.4406de39.png"},"6f85":function(t,e,n){t.exports=n.p+"img/givdo.49561882.jpg"},7279:function(t,e,n){t.exports=n.p+"img/twitter.1af83219.svg"},"74d1":function(t,e,n){"use strict";var a=n("0958"),o=n.n(a);o.a},"76ac":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("a",{staticClass:"footer-item",attrs:{target:"_blank",href:"http://linkedin.com/in/hudsonmarinho"}},[a("img",{attrs:{src:n("88ff"),alt:""}})]),a("a",{staticClass:"footer-item",attrs:{target:"_blank",href:"http://twitter.com/hudsonmarinho"}},[a("img",{attrs:{src:n("7279"),alt:""}})]),a("a",{staticClass:"footer-item",attrs:{target:"_blank",href:"http://github.com/hudsonmarinho"}},[a("img",{attrs:{src:n("9291"),alt:""}})])])}];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},7972:function(t,e,n){"use strict";var a=n("cdec"),o=n.n(a);o.a},"88ff":function(t,e,n){t.exports=n.p+"img/linkedin.d951e046.svg"},9291:function(t,e,n){t.exports=n.p+"img/github.fdf06a1c.svg"},"94d4":function(t,e,n){"use strict";var a=n("2e93"),o=n.n(a);e["default"]=o.a},"9dc9":function(t,e,n){},b469:function(t,e,n){"use strict";var a=n("9dc9"),o=n.n(a);o.a},cdec:function(t,e,n){},d577:function(t,e,n){var a={"./bestbuild.png":"6e8a","./galatea.png":"f729","./givdo.jpg":"6f85","./iamaction.png":"57ed"};function o(t){var e=r(t);return n(e)}function r(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(a)},o.resolve=r,t.exports=o,o.id="d577"},f729:function(t,e,n){t.exports=n.p+"img/galatea.daad08a4.png"},fd2d:function(t,e,n){"use strict";var a=n("76ac"),o=n("94d4"),r=(n("17d5"),n("2877")),i=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,"b02e8d10",null);i.options.__file="Footer.vue",e["default"]=i.exports}});
//# sourceMappingURL=app.050d6bcc.js.map