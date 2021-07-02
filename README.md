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

@babel/preset-env · Babel
https://babeljs.io/docs/en/babel-preset-env.html

webpack中文文档
https://v4.webpack.docschina.org/

A bundler for javascript and friends. Packs many modules into a few bundled assets. Code Splitting allows for loading
parts of the application on demand. Through "loaders", modules can be CommonJs, AMD, ES6 modules, CSS, Images, JSON,
Coffeescript, LESS, ... and your custom stuff.
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

JSON
https://www.json.org/json-en.html

json在线视图
https://www.bejson.com/jsonviewernew/

TypeScript入门与实战-钟胜平编著-微信读书
https://weread.qq.com/web/reader/a2c321c0721cac5ea2c585fk94f328c0312c94f6d7e051b

严格模式 - JavaScript | MDN
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode

TypeScript: Documentation - tsc CLI Options
https://www.typescriptlang.org/docs/handbook/compiler-options.html

assert-type/tsconfig.base.json at main · Mister-Hope/assert-type · GitHub
https://github.com/Mister-Hope/assert-type/blob/main/tsconfig.base.json

vue-typescript-dpapp-demo/tsconfig.json at master · SimonZhangITer/vue-typescript-dpapp-demo · GitHub
https://github.com/SimonZhangITer/vue-typescript-dpapp-demo/blob/master/tsconfig.json

vue-typescript-dpapp-demo/.eslintrc.js at master · SimonZhangITer/vue-typescript-dpapp-demo · GitHub
https://github.com/SimonZhangITer/vue-typescript-dpapp-demo/blob/master/.eslintrc.js

TS声明文件 - 苍青浪 - 博客园
https://www.cnblogs.com/cangqinglang/p/11166445.html

多来查看 编译选项 · TypeScript中文网 · TypeScript——JavaScript的超集
https://www.tslang.cn/docs/handbook/compiler-options.html

尚硅谷2021版TypeScript教程（李立超老师TS新课）_哔哩哔哩_bilibili
https://www.bilibili.com/video/BV1Xy4y1v7S2?p=11

html-webpack-plugin - npm
https://www.npmjs.com/package/html-webpack-plugin

GitHub - jantimon/html-webpack-plugin: Simplifies creation of HTML files to serve your webpack bundles
https://github.com/jantimon/html-webpack-plugin

webpack-dev-server - npm
https://www.npmjs.com/package/webpack-dev-server

GitHub - webpack/webpack-dev-server: Serves a webpack app. Updates the browser on changes.
Documentation https://webpack.js.org/configuration/dev-server/.
https://github.com/webpack/webpack-dev-server

[Preview] \README.md - webpack/webpack-dev-server - GitHub1s
https://github1s.com/webpack/webpack-dev-server

clean-webpack-plugin - npm
https://www.npmjs.com/package/clean-webpack-plugin

GitHub - johnagan/clean-webpack-plugin: A webpack plugin to remove your build folder(s) before building
https://github.com/johnagan/clean-webpack-plugin

fast - GitHub - johnagan/clean-webpack-plugin: A webpack plugin to remove your build folder(s) before building
https://hub.fastgit.org/johnagan/clean-webpack-plugin

[Preview] \README.md - johnagan/clean-webpack-plugin - GitHub1s
https://github1s.com/johnagan/clean-webpack-plugin

GitHub - ahviplc/JustTampermonkey: JustTampermonkey,一个TamperMonkey工具集装箱.
https://hub.fastgit.org/ahviplc/JustTampermonkey
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

#### 1.4 安装webpack插件和其他以来

```sh
`自动生成html内置打包生成的js`
yarn add --dev html-webpack-plugin
和
yarn add -D webpack-dev-server
和
`自动清空dist再打包`
yarn add -D clean-webpack-plugin
和
`babel和webpack结合使用`
yarn add -D @babel/core @babel/preset-env babel-loader core-js
```

### 2. 注意点

```markdown
* “<T>”类型断言语法，但可以使用“x as T”语法来代替。
* 在编译TypeScript时，可以启用“--isolatedModules”编译选项，它的作用是当编译器发现无法被正确处理的语言结构时给出提示。
* 启用所有严格类型检查选项。启用 --strict相当于启用 --noImplicitAny, --noImplicitThis, --alwaysStrict， --strictNullChecks和
  --strictFunctionTypes和--strictPropertyInitialization
```

### 3. 小知识

`详解AMD、CommonJS和UMD模块化规范`

```markdown
CJS: CommonJS模块可以说是当前最流行的模块定义规范。相比于AMD，它的工作效率更高、语法更简单。一开始，CommonJS模块是JavaScript服务器模块的规范。

AMD：Asynchronous Module Definition（异步模块规范），为浏览器设计的模块定义规范，最老的方式之一，专为浏览器而设计。

UMD：Universal Module Definition（通用模块规范），是由社区想出来的一种整合了CommonJS和AMD两个模块定义规范的方法。让你的模块能在javascript所有运行环境中发挥作用。
```

`匹配规则`

```
** 表示任意层级的子目录。

/* 表示第一层级下的任意子目录或文件。

/**/* 就是任意层级下的文件。
```

### 4. 代码段

`webpack.config.js之前一个loader写法`

```js
module: {
    rules: [
        {
            // test 指定的是规则生效的文件
            test: /\.tsx?$/, // 【test: /\.ts?$/,】 【test: /\.tsx?$/,】
            // 使用的loader
            use: 'ts-loader',
            // 要排除的文件|文件夹
            exclude: /node_modules/
        }
    ]
}
```

`两个loader`

```js
    // loader的配置
module: {
    rules: [
        {
            // test 指定的是规则生效的文件
            test: /\.tsx?$/, // 【test: /\.ts?$/,】 【test: /\.tsx?$/,】
            // 使用的loader
            use: [
                // 配置babel 此写法可以进行更多的配置
                {
                    loader: "babel-loader",
                    options: {
                        // 设置预定义的环境
                        presets: [
                            [
                                // 指定环境的插件
                                "@babel/preset-env",
                                // 配置信息
                                {
                                    "targets": {
                                        // 要兼容的目标浏览器
                                        "chrome": "58",
                                        "ie": "11"
                                    },
                                    // 指定corejs的版本
                                    "corejs": "3",
                                    // 使用corejs的方式 "usage" 表示按需加载
                                    "useBuiltIns": "usage"
                                }
                            ]
                        ]
                    }
                },
                // 这个写法也是对的
                'ts-loader'
            ],
            // 要排除的文件|文件夹
            exclude: /node_modules/
        }
    ]
}
```

## Author

👤 **LC ahlc@sina.cn**

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
