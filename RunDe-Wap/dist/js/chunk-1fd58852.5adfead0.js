(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fd58852"],{7577:function(n,t,e){"use strict";var o=e("9143"),i=e.n(o);i.a},"86d6":function(n,t,e){"use strict";e.r(t);var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],staticClass:"announcement-wrap"},[e("div",{staticClass:"announcement-wrap__content-wrap"},[e("p",{staticClass:"content__title"},[n._v(n._s(n.title))]),e("p",{staticClass:"content__text"},[n._v(" "+n._s(n.info)+" ")]),e("div",{staticClass:"content__footer-button",on:{click:n.handleFooterButtonClick}},[n._v(" "+n._s(n.know)+" ")])])])},i=[],s=e("af10"),c=e("90b9"),a={name:"CommonAnnouncement",data:function(){return{info:"",isShow:!1,title:"系统公告",know:"知道了"}},watch:{info:function(n){Object(c["c"])("公告",n),this.isShow=!!n}},created:function(){this.hd=new s["a"],this.addEvents()},methods:{addEvents:function(){var n=this;this.hd.onAnnouncement((function(t){if(!t||"remove"===t.action)return n.info="",!1;n.info=t,n.bus.$emit("exitFullscreen"),Object(c["c"])("onAnnouncement exitFullscreen")}))},handleFooterButtonClick:function(){this.isShow=!1}}},u=a,r=(e("7577"),e("2877")),l=Object(r["a"])(u,o,i,!1,null,"160ae184",null);t["default"]=l.exports},9143:function(n,t,e){}}]);
//# sourceMappingURL=chunk-1fd58852.5adfead0.js.map