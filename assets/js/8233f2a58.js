(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{114:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("demo-section",[i("demo-block",{attrs:{title:t.$t("ellipsis")}},[i("div",{staticClass:"qw-ellipsis"},[t._v(t._s(t.$t("text")))])]),i("demo-block",{attrs:{title:t.$t("hairline")}},[i("div",{staticClass:"qw-hairline--top"})]),i("demo-block",{attrs:{title:t.$t("animation")}},[i("qw-switch-cell",{attrs:{title:t.$t("toggle"),border:!1},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}),i("qw-row",[i("transition",{attrs:{name:"qw-fade"}},[i("qw-col",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{span:"8"}},[t._v("Fade")])],1),i("transition",{attrs:{name:"qw-slide-bottom"}},[i("qw-col",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{span:"8"}},[t._v("Slide Bottom")])],1)],1)],1)],1)};n._withStripped=!0;var o={i18n:{"zh-CN":{hairline:"1px 边框",ellipsis:"文字省略",animation:"动画",toggle:"切换动画",text:"这是一段宽度限制 250px 的文字，后面的内容会省略"},"en-US":{hairline:"Hairline",ellipsis:"Text Ellipsis",animation:"Animation",toggle:"Switch animation",text:"This is a paragraph of 250px width limit, the back will be omitted."}},data:function(){return{show:!0}}},s=(i(92),i(0)),a=Object(s.a)(o,n,[],!1,null,null,null);a.options.__file="src/packages/style/demo/index.vue";e.default=a.exports},78:function(t,e,i){var n=i(93);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};i(4)(n,o);n.locals&&(t.exports=n.locals)},92:function(t,e,i){"use strict";var n=i(78);i.n(n).a},93:function(t,e,i){(t.exports=i(3)(!1)).push([t.i,"\n.demo-style .qw-ellipsis {\n  font-size: 13px;\n  margin-left: 15px;\n  max-width: 250px;\n}\n.demo-style .qw-hairline--top {\n  height: 30px;\n  background-color: #fff;\n}\n.demo-style .qw-hairline--top::after {\n  top: 5px;\n}\n.demo-style .qw-col {\n  height: 50px;\n  color: #fff;\n  font-size: 14px;\n  border-radius: 3px;\n  text-align: center;\n  line-height: 50px;\n  margin-left: 15px;\n  background-color: #39a9ed;\n}\n.demo-style .qw-switch-cell {\n  margin-bottom: 15px;\n}\n",""])}}]);