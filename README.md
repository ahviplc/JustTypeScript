<h1 align="center">Welcome to JustWebpack 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> JustTypeScript,一个js超集语言TypeScript的小demo.

### 🏠 [Homepage-gitee](https://gitee.com/ahviplc/JustTypeScript)

### 🏠 [Homepage-github](https://github.com/ahviplc/JustTypeScript)

## Install

`安装依赖`

```sh
npm i
npm install
或者
yarn
yarn install
```

## Usage

`其他一些打包命令 具体去看` `package.json`

`起服务`

```sh
npm run dev
或者
yarn dev
```

## Links

```markdown
Babel 中文网 · Babel - 下一代 JavaScript 语法的编译器
https://www.babeljs.cn/

GitHub - babel/babel: 🐠 Babel is a compiler for writing next generation JavaScript.
https://github.com/babel/babel

webpack中文文档
https://v4.webpack.docschina.org/

A bundler for javascript and friends. Packs many modules into a few bundled assets. Code Splitting allows for loading parts of the application on demand. Through "loaders", modules can be CommonJs, AMD, ES6 modules, CSS, Images, JSON, Coffeescript, LESS, ... and your custom stuff.
https://github.com/webpack/webpack

ESLint - Pluggable JavaScript linter
https://eslint.org/

ESLint - 插件化的 JavaScript 代码检测工具 - ESLint中文文档
https://eslint.bootcss.com/

GitHub - eslint/eslint: Find and fix problems in your JavaScript code.
https://github.com/eslint/eslint

Lodash 简介 | Lodash 中文文档 | Lodash 中文网
https://www.lodashjs.com/

GitHub - lodash/lodash: A modern JavaScript utility library delivering modularity, performance, & extras.
https://github.com/lodash/lodash

json在线视图
https://www.bejson.com/jsonviewernew/
```

## Notes

### 1. 随记

#### 1.1 安装babel

```sh
npm install @babel/core @babel/cli  @babel/preset-env @babel/preset-typescript --save-dev
或
yarn add -D @babel/core @babel/cli  @babel/preset-env @babel/preset-typescript
```

#### 1.2 安装webpack

```sh
npm install --save-dev webpack webpack-cli ts-loader
或
yarn add -D webpack webpack-cli ts-loader
```

#### 1.3 安装eslint

```sh
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
或
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### 2. 注意点

```markdown
* “<T>”类型断言语法，但可以使用“x as T”语法来代替。
* 在编译TypeScript时，可以启用“--isolatedModules”编译选项，它的作用是当编译器发现无法被正确处理的语言结构时给出提示。
* 
```

### 3. 小知识

`详解AMD、CommonJS和UMD模块化规范`

```markdown
CJS: CommonJS模块可以说是当前最流行的模块定义规范。相比于AMD，它的工作效率更高、语法更简单。一开始，CommonJS模块是JavaScript服务器模块的规范。

AMD：Asynchronous Module Definition（异步模块规范），为浏览器设计的模块定义规范，最老的方式之一，专为浏览器而设计。

UMD：Universal Module Definition（通用模块规范），是由社区想出来的一种整合了CommonJS和AMD两个模块定义规范的方法。让你的模块能在javascript所有运行环境中发挥作用。
```

### 4. 代码段

```js

```

## Author

👤 **LC ahlc@sina.cn**

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_