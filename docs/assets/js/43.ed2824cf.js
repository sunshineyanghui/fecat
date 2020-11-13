(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{413:function(a,n,t){"use strict";t.r(n);var l=t(42),s=Object(l.a)({},(function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"call-和-apply-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#call-和-apply-的区别"}},[a._v("#")]),a._v(" call 和 apply 的区别")]),a._v(" "),t("ul",[t("li",[a._v("共同作用：call 和 apply 都是用来修改函数中 this 的指向问题；")]),a._v(" "),t("li",[a._v("区别：接收参数方式不同")])]),a._v(" "),t("p",[a._v("案例：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("function Parent(){\n\n    this.name = '123';\n\n    this.show = function(){\n\n        console.log(this.name,arguments);\n    };\n}\nvar pa = new Parent();\n\nvar obj = {\n    name: '哈哈哈哈'\n}\npa.show.call(obj,'你好','啊啊啊');//哈哈哈哈 [Arguments] { '0': '你好', '1': '啊啊啊' }\npa.show.apply(obj,['你好','啊啊啊']);//哈哈哈哈 [Arguments] { '0': '你好', '1': '啊啊啊' }\n")])])]),t("p",[t("strong",[a._v("如上所示：")])]),a._v(" "),t("ul",[t("li",[a._v("call 和 apply 接收的第一个参数是用来改变 Parent 方法中 this 指向的，而后面的传参方式就出现了区别，call 以多个参数形式传入，而 apply 以数组的形式传入，通过 arguments 输出后可见结果相同.")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("pa.show.call(obj,'你好','啊啊啊');//哈哈哈哈 [Arguments] { '0': '你好', '1': '啊啊啊' }\npa.show.apply(obj,['你好','啊啊啊']);//哈哈哈哈 [Arguments] { '0': '你好', '1': '啊啊啊' }\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);