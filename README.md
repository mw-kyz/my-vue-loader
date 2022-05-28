# my-vue-loader
实现一个简易的 vue-loader，用来处理vue文件，然后实现简单的v-if/v-show

## 实现思路
1. 服务应用 -> node
2. .vue -> node处理 -> .js
3. es6 -> node处理 -> es5
4. Less/Sass -> node处理 -> css -> 插入html，内部样式表
5. html -> 引入js

通过以上步骤之后，浏览器就可以识别了