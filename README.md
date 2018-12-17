# Vue CLI 3 多页应用项目的搭建
> 在项目初期时，从零开始搭建和配置本地前端开发环境是一项很繁琐的工作，需要考虑到项目目录结构、项目基本配置、Webpack 配置等等。通过 Vue CLI 3 可以快速的生成一个项目，这样我们就可以专注在写应用上，而不必将大量时间花费在配置上。但是官方的 vue create 命令只能快速地建立一个单页应用的原型，想要开发多页应用还需要再配置一些东西。可同时支持less,sass。


## 说明
Vue CLI 3 多页应用项目**Git地址: https://github.com/zydemail/vue-mpa.git。

## 初始化
```bash
git clone https://github.com/zydemail/vue-mpa.git
cd vue-mpa
npm install
```

## 使用
* 开发：
    * 本地运行：`npm run serve:dev` 注：本地开发调试服务器接口需开启浏览器跨域，可在 Chrome 应用商店安装 `Allow CORS: Access-Control-Allow-Origin` 插件即可解决
    * 修复代码格式错误：`npm run lintfix`
* 打包：
    * 开发环境: `npm run dev`
    * 测试环境: `npm run build:tests`
    * 生产环境: `npm run build:prod`

## 目录结构说明 

```bash
│  .browserslistrc // 配置目标浏览器
│  .env.development // 开发环境配置，可在此配置全局变量，使用 process.env 读取，打包工具会根据不同环境自动读取变量
│  .env.localdev // 本地开发环境配置，可在此配置全局变量，使用 process.env 读取，打包工具会根据不同环境自动读取变量
│  .env.production // 生产环境配置，可在此配置全局变量，使用 process.env 读取，打包工具会根据不同环境自动读取变量
│  .env.tests // 测试环境配置，可在此配置全局变量，使用 process.env 读取，打包工具会根据不同环境自动读取变量
│  .eslintrc.js // eslint 配置
│  .gitignore
│  .postcssrc.js // postcss配置，一般不会用到，使用默认值
│  babel.config.js // babel配置，一般不会用到，使用默认值
│  package-lock.json
│  package.json
│  README.md
│  title.js // 统一配置生成页面的 title
│  vue.config.js // vue 配置，可配置 webpack 等，可参照 https://cli.vuejs.org/zh/config/
│  
├─public // 此文件夹下可以放置一些静态资源，除了index.html会经过处理外，其他文件都会原封不动的自动复制到 htdocs 根目录下，不会经过 webpack 的处理。
│      favicon.ico
│      index.html // 所有的打包页面都会经过这个文件，本模板对多页的配置采用了统一处理，当然也可以在 vue.config.js 单独配置每个页面，可参照 https://cli.vuejs.org/zh/config/#pages
│      
├─src // 源代码文件夹
│  ├─assets // 资源文件夹，可放置 css、images等
│  │      logo.png
│  │      
│  ├─components // 组件文件夹，可定义一些公共组件
│  │      Header.vue
│  │      
│  ├─pages // 页面文件夹，每个页面都是一个文件夹
│  │  ├─about // about 页面
│  │  │      app.js // 一般不做更改
│  │  │      app.vue // 页面的 html、css、js 都写在这个文件里
│  │  │      
│  │  ├─index
│  │  │      app.js
│  │  │      app.vue
│  │  │      
│  │  └─user
│  │      └─index
│  │              app.js
│  │              app.vue
│  │              
│  ├─style // 公共样式文件夹，可以定义一些公共样式，如浏览器重置样式 reset.less，此文件夹可按需求随意更改 
│  │  │  index.less
│  │  │  
│  │  └─core
│  │          index.less
│  │          reset.less
│  │          
│  └─utils // 常用 js 工具类
│      └─core
│              http.js // http 请求库，封装 axios，可直接调用
│              
└─tests // 单元测试，可忽略
    └─unit
            .eslintrc.js
```
## 参考资料
[Vue CLI 3 官方文档](https://cli.vuejs.org/zh/)

