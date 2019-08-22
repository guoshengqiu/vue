# vue
结合vue-cli练习vue

<h6>#安装vue-cli 非3.0及以上版本</h6><br/>
  $ npm install -g vue-cli
  
 <h6>#用法,生成项目</h6><br/>
  $ vue init webpack my-project
  
<h6>#安装慢，使用国内镜像来安装，所以我们先设置 cnpm：</h6><br/>
  $npm install -g cnpm --registry=https://registry.npm.taobao.org

<h6>#安装失败，清除缓存在安装：</h6><br/>
  $npm cache clean

<h4>步骤</h4>
<p>
webpack 是模板名称，可以到 vue.js 的 GitHub 上查看更多的模板https://github.com/vuejs-templates <br/>
my-project 是自定义的项目名称，命令执行之后，会在当前目录生成一个以该名称命名的项目文件夹<br/>
配置如图：</p><br/>
  ![Image text](https://github.com/guoshengqiu/vue/raw/master/readme/1.jpg)<br/>
<p>配置完成后，可以看到目录下多出了一个项目文件夹，里面就是 vue-cli 创建的一个基于 webpack 的 vue.js 项目
然后进入项目目录（cd Vue-Project），使用 npm/cnpm 安装依赖:<br/>
  $npm install  <br/>
 然后运行：<br/>
  $npm run dev<br/>
 如果浏览器打开之后，没有加载出页面，有可能是本地的 8080 端口被占用，需要修改一下配置文件 config>index.js<br/>
</p>
![Image text](https://github.com/guoshengqiu/vue/raw/master/readme/2.jpg)
