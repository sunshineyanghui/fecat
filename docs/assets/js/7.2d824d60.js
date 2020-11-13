(window.webpackJsonp=window.webpackJsonp||[]).push([[7,74,75],{338:function(e,t,r){e.exports=r.p+"assets/img/002.1530f973.jpg"},339:function(e,t,r){e.exports=r.p+"assets/img/001.7eb10c78.jpg"},430:function(e,t,r){"use strict";r.r(t);var a=r(42),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"node实现github自动部署到云服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node实现github自动部署到云服务器"}},[e._v("#")]),e._v(" node实现github自动部署到云服务器")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/dai1254473705/autopull",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击查看源码"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"目的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目的"}},[e._v("#")]),e._v(" 目的")]),e._v(" "),a("p",[e._v("通过github管理的项目，每次push后都需要到服务器pull代码，然后手动打包，重复的操作挺糟心的。但是github提供了"),a("strong",[e._v("Webhooks")]),e._v(",可以实现本地push代码到远程后，服务器自动拉取远程代码，自动打包部署，节省大量时间。")]),e._v(" "),a("h2",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[e._v("#")]),e._v(" 原理")]),e._v(" "),a("p",[e._v("github的"),a("strong",[e._v("Webhooks")]),e._v("允许用户设置post请求的接口地址，当本地代码推送到远程分支后，github将主动调用设置的接口，并将当前修改相关信息作为请求参数给到接口。接口在服务器上被调用的时候，就知道当前远程代码库有更新，此时可以调用脚本执行更新、打包等操作。")]),e._v(" "),a("h2",{attrs:{id:"用到的技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用到的技术"}},[e._v("#")]),e._v(" 用到的技术")]),e._v(" "),a("p",[e._v("接下来我会通过"),a("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("nodejs"),a("OutboundLink")],1),e._v("及"),a("a",{attrs:{href:"https://www.npmjs.com/package/github-webhook-handler",target:"_blank",rel:"noopener noreferrer"}},[e._v("github-webhook-handler"),a("OutboundLink")],1),e._v("模块实现监听github代码push的事件，然后通过"),a("a",{attrs:{href:"https://www.runoob.com/linux/linux-shell.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("shell"),a("OutboundLink")],1),e._v("脚本实现代码更新打包的操作。")]),e._v(" "),a("h2",{attrs:{id:"前提条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[e._v("#")]),e._v(" 前提条件")]),e._v(" "),a("ul",[a("li",[e._v("具有公网ip的云服务器")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("github仓库"),a("OutboundLink")],1)])]),e._v(" "),a("blockquote",[a("p",[e._v("没有服务器的可以看这里")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://cloud.tencent.com/act/cps/redirect?redirect=1074&cps_key=e9ebcb4f44c7068bb96970971b4cce19&from=console",target:"_blank",rel:"noopener noreferrer"}},[e._v(" 腾讯云 云上盛惠，云产品限时抢购，1核2G云服务器首年88元"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.aliyun.com/1111/new?userCode=xshbseg5",target:"_blank",rel:"noopener noreferrer"}},[e._v("阿里云服务器狂欢特惠，最低仅需84.97元/年，助力轻松上云"),a("OutboundLink")],1)])])]),e._v(" "),a("h2",{attrs:{id:"提供接口给github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提供接口给github"}},[e._v("#")]),e._v(" 提供接口给github")]),e._v(" "),a("blockquote",[a("p",[e._v("接口的地址"),a("code",[e._v("path")]),e._v("通过"),a("code",[e._v("github-webhook-handler")]),e._v("模块配置产生，不需要自己额外的定义路由地址；同时需要设置"),a("code",[e._v("secret")]),e._v("，用于github校验。")])]),e._v(" "),a("div",{staticClass:"center"},[a("div",[e._v("github的webhooks")]),e._v(" "),a("img",{attrs:{src:r(339),title:"github的webhooks"}})]),e._v(" "),a("h6",{attrs:{id:"_1、通过createhandler方法-可以配置path和secret-这两个参数自己随便定义就可以。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、通过createhandler方法-可以配置path和secret-这两个参数自己随便定义就可以。"}},[e._v("#")]),e._v(" 1、通过"),a("code",[e._v("createHandler")]),e._v("方法，可以配置"),a("code",[e._v("path")]),e._v("和"),a("code",[e._v("secret")]),e._v("，这两个参数自己随便定义就可以。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const createHandler = require('github-webhook-handler')\nconst handler = createHandler({ path: '/webhook', secret: 'sdsdfssdfsdf' })\n")])])]),a("h6",{attrs:{id:"_2、监听push事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、监听push事件"}},[e._v("#")]),e._v(" 2、监听push事件")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("handler.on('push', event=> {\n   // github推送通知到接口后，会触发该方法，并拿到github请求的参数\n});\n")])])]),a("h6",{attrs:{id:"_3、监听error事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、监听error事件"}},[e._v("#")]),e._v(" 3、监听error事件")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("handler.on('error', function (err) {\n    console.error('Error:', err.message)\n});\n")])])]),a("h6",{attrs:{id:"_4、通过node的http模块启动服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、通过node的http模块启动服务"}},[e._v("#")]),e._v(" 4、通过node的http模块启动服务")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("http.createServer( (req, res)=> {\n    handler(req, res, function (err) {\n        console.log('err',err);\n        res.statusCode = 404\n        res.end('api 404')\n    });\n}).listen(3001,()=>{\n    console.log('running in http://127.0.0.1:3001/');\n});\n")])])]),a("h6",{attrs:{id:"_5、编写名为pull-sh的脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、编写名为pull-sh的脚本"}},[e._v("#")]),e._v(" 5、编写名为"),a("strong",[e._v("pull.sh")]),e._v("的脚本")]),e._v(" "),a("p",[e._v("我的文章通过vuepress编写，所以我需要做的有三个步骤：")]),e._v(" "),a("ul",[a("li",[e._v("进入到服务器上的vuepress项目")]),e._v(" "),a("li",[e._v("通过"),a("code",[e._v("git pull")]),e._v("更新代码")]),e._v(" "),a("li",[e._v("通过"),a("code",[e._v("npm run docs:build")]),e._v("打包代码")])]),e._v(" "),a("p",[e._v("当然，如果还有其他脚本也可以方进入，完整脚本如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#!/bin/bash \n# 更新代码\ncd /xxx/xxx/项目名\ngit pull\nnpm run docs:build\n")])])]),a("h6",{attrs:{id:"_6、监听到push事件后的处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、监听到push事件后的处理"}},[e._v("#")]),e._v(" 6、监听到push事件后的处理")]),e._v(" "),a("p",[e._v("当监听到push事件后，event的"),a("code",[e._v("payload")]),e._v("参数中包含了github请求接口时的参数，而我只想处理master分支代码更新后，服务器自动拉取代码，因此只判断了"),a("code",[e._v("event.payload.ref === 'refs/heads/master'")]),e._v("时运行脚本；")]),e._v(" "),a("p",[e._v("通过node的"),a("code",[e._v("require('child_process').spawn")]),e._v("方法可以运行脚本，具体使用方法可见："),a("a",{attrs:{href:"https://nodejs.org/dist/latest-v15.x/docs/api/child_process.html#child_process_child_process_spawn_command_args_options",target:"_blank",rel:"noopener noreferrer"}},[e._v("child_process spawn"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("指定运行'sh'脚本，脚本路径为"),a("code",[e._v("./bin/pull.sh")]),e._v(",即可上面写的脚本文件。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("spawn('sh', ['./bin/pull.sh']);\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("handler.on('push', event=> {\n    try {\n        const {repository,ref} = event.payload;\n        const {full_name,name,private,size} = repository;\n        const autoRun = ref === 'refs/heads/master';\n        console.info(`\n            - 接收到仓库:【${full_name}】的推送消息；\n            - 修改分支：【${ref}】;\n            - 仓库是否私有：${private};\n            - 大小：【${size}】\n            - 是否需要自动部署：${autoRun}】;\n        `);\n\n        // 判断是否需要自动部署\n        if (!autoRun) {\n            return\n        }\n\n        console.log('开始执行脚本');\n        const s = spawn('sh', ['./bin/pull.sh']);\n        s.stdout.on('data', (data) => {\n          console.log(`${name}:${data}`);\n        });\n        s.stderr.on('data', (data) => {\n          console.log(`${name}: ${data}`);\n        });\n        console.log('has rebuild');\n    } catch (e) {\n        console.log('build error',e)\n    }\n});\n")])])]),a("h6",{attrs:{id:"_7、使用pm2运行项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、使用pm2运行项目"}},[e._v("#")]),e._v(" 7、使用pm2运行项目")]),e._v(" "),a("p",[e._v("通过pm2可以让项目在服务器上一直运行，不会关闭服务器后项目就停。\n在此，通过脚本实现接口项目的启动，在源码的"),a("a",{attrs:{href:"https://github.com/dai1254473705/autopull/blob/master/bin/prod.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("bin/prod.sh"),a("OutboundLink")],1),e._v("中有如下脚本：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pm2 start npm -i 1 --name 'auto-run-github' -- run start\n")])])]),a("h6",{attrs:{id:"_8、在github的webhooks中配置接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8、在github的webhooks中配置接口"}},[e._v("#")]),e._v(" 8、在github的webhooks中配置接口")]),e._v(" "),a("p",[e._v("如下图所示")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Payload URL")]),e._v("为你的接口地址，结尾应该是"),a("code",[e._v("github-webhook-handler")]),e._v("设置的"),a("code",[e._v("path")]),e._v("参数结尾；")]),e._v(" "),a("li",[a("code",[e._v("Content type")]),e._v("选择"),a("code",[e._v("application/json")]),e._v(";")]),e._v(" "),a("li",[a("code",[e._v("Secret")]),e._v("要和github配置保持一致；")])]),e._v(" "),a("div",{staticClass:"center"},[a("img",{attrs:{src:r(338)}})]),e._v(" "),a("h2",{attrs:{id:"完整代码如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完整代码如下"}},[e._v("#")]),e._v(" 完整代码如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const http = require('http')\nconst createHandler = require('github-webhook-handler')\nconst handler = createHandler({ path: '/webhook', secret: 'sdsdfssdfsdf' })\nconst spawn = require('child_process').spawn;\n\nhandler.on('error', function (err) {\n    console.error('Error:', err.message)\n});\n\nhandler.on('push', event=> {\n    try {\n        const {repository,ref} = event.payload;\n        const {full_name,name,private,size} = repository;\n        const autoRun = ref === 'refs/heads/master';\n        console.info(`\n            - 接收到仓库:【${full_name}】的推送消息；\n            - 修改分支：【${ref}】;\n            - 仓库是否私有：${private};\n            - 大小：【${size}】\n            - 是否需要自动部署：${autoRun}】;\n        `);\n\n        // 判断是否需要自动部署\n        if (!autoRun) {\n            return\n        }\n\n        console.log('开始执行脚本');\n        const s = spawn('sh', ['./bin/pull.sh']);\n        s.stdout.on('data', (data) => {\n          console.log(`${name}:${data}`);\n        });\n        s.stderr.on('data', (data) => {\n          console.log(`${name}: ${data}`);\n        });\n        console.log('has rebuild');\n    } catch (e) {\n        console.log('build error',e)\n    }\n});\n\nhttp.createServer( (req, res)=> {\n    handler(req, res, function (err) {\n        console.log('err',err);\n        res.statusCode = 404\n        res.end('api 404')\n    });\n}).listen(3001,()=>{\n    console.log('running in http://127.0.0.1:3001/');\n});\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);