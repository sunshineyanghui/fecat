(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{377:function(n,t,e){"use strict";e.r(t);var o=e(42),a=Object(o.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("html",{attrs:{lang:"en"}},[e("head",[e("meta",{attrs:{charset:"UTF-8"}}),n._v(" "),e("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1.0"}}),n._v(" "),e("title",[n._v("Document")]),n._v(" "),e("style",[n._v("\n    img {\n      width: 200px;\n      height: 200px;\n      object-fit: contain;\n      margin: 0 auto;\n      text-align: center;\n      border: 1px solid #ccc;\n      box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.52);\n    }\n    .div{\n\t\t\twidth: 200px;\n\t\t\theight: 100px;\n\t\t\tborder: 2px  solid #ff0;\n\t\t\tborder-radius: 7px;  /*圆角弧度为7px*/\n\t\t\tposition: relative;\n      background-color: #ff0;\n\t\t}\n    .div::before{\n\t\t\tcontent: '';\n\t\t\twidth: 0;\n\t\t\theight: 0;\n\t\t\tborder: 20px solid;\n\t\t\tposition: absolute;\n\t\t\tbottom: -40px;\n\t\t\tleft: 140px;\n\t\t\tborder-color:  #ff0 transparent transparent;\n\x3c!--beforebegin--\x3e<div class=\"language- extra-class\">\x3c!--afterbegin--\x3e<pre><code>\t}\n.shape {\n</code></pre>\n\x3c!--beforeend--\x3e</div>\x3c!--afterend--\x3e<p>width: 120px;\nheight: 80px;\nbackground: red;\nposition: relative;\n-moz-border-radius: 10px;\n-webkit-border-radius: 10px;\nborder-radius: 10px;\n}\n.shape:before {\ncontent:&quot;&quot;;\nposition: absolute;\nright: 100%;\ntop: 26px;\nwidth: 0;\nheight: 0;\nborder-top: 13px solid transparent;\nborder-right: 26px solid red;\nborder-bottom: 13px solid transparent;\n}\n.box {\nwidth: 300px;\nheight: 100px;\nbackground: #ccc;\nborder-radius: 10px;\nmargin: 10px;\n}</p>\n<p>.box-shadow {\nposition: relative;\nmax-width: 270px;\nbox-shadow: 0px 1px 4px rgba(0,0,0,0.3),\n0px 0px 20px rgba(0,0,0,0.1) inset;\n}</p>\n<p>.box-shadow::before,\n.box-shadow::after {\ncontent:&quot;&quot;;\nposition:absolute;\nz-index:-1;\n}</p>\n<p>.box-shadow::before,\n.box-shadow::after {\ncontent:&quot;&quot;;\nposition:absolute;\nz-index:-1;\nbottom:15px;\nleft:10px;\nwidth:50%;\nheight:20%;\n}</p>\n<p>.box-shadow::before,\n.box-shadow::after {\ncontent:&quot;&quot;;\nposition:absolute;\nz-index:-1;\nbottom:15px;\nleft:10px;\nwidth:50%;\nheight:20%;\nbox-shadow:0 15px 10px rgba(0, 0, 0, 0.7);\ntransform:rotate(-3deg);\n}</p>\n<p>.box-shadow::after{\nright:10px;\nleft:auto;\ntransform:rotate(3deg);\n}\n.box-shadow {\nbox-shadow: 0px 0px 0px 3px #F08080,\n0px 0px 0px 6px #ffff00,\n0px 0px 0px 9px #EE7AE9;\nbackground-color: #ccc;\nwidth: 100px;\nheight: 100px;\n}\n.size {\nfont-size:10px;\n-webkit-transform:scale(0.8);\ndisplay:block;\n}\n")])]),n._v(" "),e("body",[e("div",{staticClass:"size"},[n._v("我是十号字")]),n._v(" "),e("div",{staticStyle:{"justify-content":"center",display:"flex","align-items":"center",height:"100vh"}},[e("div",{staticClass:"boxbox-shadow"})]),n._v(" "),e("script",[n._v("\n// false\n// var xhr = new XMLHttpRequest()\n// xhr.open('get', 'https://api.github.com/users/sunshineyanghui')\n// xhr.send()\n// xhr.onreadystatechange = function () {\n//   if (xhr.readyState == 4 &amp;&amp; /^2\\d{2|$/.test(xhr.status)) {\n//     // 我们在这里直接打印 xhr.responseText 来查看服务端给我们返回的内容\n//     console.log(xhr.responseText)\n//   }\n// }</p>\n<p>function ajax(options) {\n// 先准备一个默认值\nvar defInfo = {\nurl: '', // 地址不需要默认值\ntype: 'GET', // 请求方式的默认值是 GET\nasync: false, // 默认值是异步\ndata: '', // 参数没有默认值\ndataType: 'string', // 默认不需要执行 json.parse\nsuccess (){} // 默认是一个函数\n}\n// 先来判断一下有没有传递 url，如果没有，直接抛出异常\nif (!options.url) {\nthrow new Error('url 必须传递')\n}\n// 有了 url 以后就，我们就把用户传递的参数和我们的默认数据合并\nfor (let key in options) {\ndefInfo[key] = options[key]\n}\n// 接下来的一切我们都是使用我们的 defInfo 就可以了\n// 第一步就是判断参数 data\n// data 可以不传递，可以为空\n// data 也可以是一个 key=value&amp;key=value 格式的字符串\n// data 也可以是一个对象\n// 否则就抛出异常\nif (!(typeof defInfo.data === 'string' &amp;&amp; /^(\\w+=\\w+&amp;?)*$/.test(defInfo.data) || Object.prototype.toString.call(defInfo.data) === '[object Object]')) {\nthrow new Error('请按照要求传递参数')\n}\n// 参数处理完毕以后，在判断 async 的数据类型\n// 只能传递 布尔数据类型\nif (typeof defInfo.async !== 'boolean') {\nthrow new Error('async 参数只接受布尔数据类型')\n}\n// 在接下来就判断 type\n// 请求方式我们只接受 GET 或着 POST\nif (!(defInfo.type.toUpperCase() === 'GET' || defInfo.type.toUpperCase() === 'POST')) {\nthrow new Error('目前本插件只接受 GET 和 POST 方式，请期待更新')\n}\n// 接下来就是判断 success 的判断，必须是一个函数\nif (Object.prototype.toString.call(defInfo.success) !== '[object Function]') {\nthrow new Error('success 只接受函数数据类型')\n}\n// 参数都没有问题了\n// 我们就要把 data 处理一下了\n// 因为 data 有可能是对象，当 data 是一个对象的时候，我们要把它转换成一个字符串\nvar str = ''\nif (Object.prototype.toString.call(defInfo.data) === '[object Object]') {\nfor (let attr in defInfo.data) {\nstr += <code>${attr}=${defInfo.data[attr]}&amp;</code>\n}\nstr = str.slice(0, -1)\ndefInfo.data = str\n}\n// 参数全部验证过了以后，我们就可以开始进行正常的 ajax 请求了\n// 1. 准备一个 ajax 对象\n//    因为要处理兼容问题，所以我们准备一个函数\nfunction createXHR() {\nif (XMLHttpRequest) {\nreturn new XMLHttpRequest()\n} else {\nreturn new ActiveXObject('Microsoft.XMLHTTP')\n}\n}\n// 2. 创建一个 ajax 对象\nvar xhr = createXHR()\n// 3. 进行 open\nxhr.open(defInfo.type, defInfo.url + (defInfo.type.toUpperCase() === 'GET' ? <code>?${defInfo.data}&amp;_=${new Date().getTime()}</code> : ''), defInfo.async)\nif (defInfo.type.toUpperCase() === 'POST') {\nxhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')\n}\n// 4. 进行 send\nxhr.send((defInfo.type.toUpperCase() === 'POST' ? <code>${defInfo.data}</code> : ''))\n// 5. 接受响应\nxhr.onreadystatechange = function () {\nif (xhr.readyState === 4 &amp;&amp; xhr.status == 200) {\n// 表示成功，我们就要执行 success\n// 但是要进行 dataType 的判断\nif (defInfo.dataType === 'json') {\ndefInfo.success(JSON.parse(xhr.responseText))\n} else {\ndefInfo.success()\n}\n}\n}\n}\nfunction formatTime(date){\nvar year = date.getFullYear()\nvar month = date.getMonth() + 1\nvar day = date.getDate()\nvar hour = date.getHours()\nvar minute = date.getMinutes()\nvar second = date.getSeconds()</p>\n\x3c!--beforebegin--\x3e<div class=\"language- extra-class\">\x3c!--afterbegin--\x3e<pre><code>function formatNumber(n){\n      n = n.toString()\n      return n[1]  ? n : '0' + n\n}\n\nreturn [year, month, day].map(formatNumber).join('/') +' '+  [hour, minute, second].map(formatNumber).join(':')\n</code></pre>\n\x3c!--beforeend--\x3e</div>\x3c!--afterend--\x3e<p>}\nvar time = new Date()\nvar newTime = formatTime(time)\n// console.log(newTime)</p>\n<p>function isEmail (email) {\nreturn /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(email)\n}\nvar email = isEmail('111888888@qq.com')\nconsole.log(email)</p>\n  ")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);