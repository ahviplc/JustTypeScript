import path from 'path'
import {nodeResolve} from "@rollup/plugin-node-resolve";
import {terser} from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";
import eslint from '@rollup/plugin-eslint';
import commonjs from '@rollup/plugin-commonjs'
import ts from 'rollup-plugin-typescript2'
// import pkg from "./package.json";

// 入口文件
// input 可以保证 node环境和浏览器环境 肯定都可用 也就是不会引用了node内置模块 即使用了 也会去兼容node环境和浏览器环境
const input = ["src/index-umd.ts"];

// 要处理的文件类型后缀
const extensions = [
    '.js',
    '.ts',
    '.tsx'
]

// ts 配置 rollup-plugin-typescript2 抽取取来进行配置
// 路径处理函数 getPath
const getPath = _path => path.resolve(__dirname, _path)

const tsPlugin = ts({
    // tsconfig: getPath('./tsconfig.json'), // 导入本地ts配置文件
    tsconfig: getPath('./tsconfig-rollup.json'), // 导入本地ts配置文件 专属rollup打包ts的配置文件 去除一些rollup打包中无需ts编译(tsc)的文件
    extensions
})

// 配置 eslint 抽取取来进行配置
const esPlugin = eslint({
    throwOnError: true,
    include: ['src/**/*.ts'],
    exclude: ['node_modules/**', 'dist-rollup/**', 'dist-tsc-webpack-eslint/**', 'dist-umd/**', 'dist-webpack/**', 'lib-babel/**', 'lib-tsc/**']
})

export default [
    {
        // UMD
        // 浏览器 node 环境都支持
        // 但是
        // 可以保证 node环境和浏览器环境 肯定都可用
        input, // 和  input:input, 等价
        plugins: [
            nodeResolve(),
            commonjs(),
            babel({
                babelHelpers: "bundled",
            }),
            terser(),
            esPlugin,
            tsPlugin
        ],
        output: {
            file: `dist-rollup/JustTypeScriptToolcRollup.min.js`,
            format: "umd",
            name: "JustTypeScriptToolcRollup", // this is the name of the global object
            esModule: false,
            exports: "named",
            sourcemap: true,
        },
    },
    {
        // ESM and CJS
        // node 环境支持
        input,
        plugins: [nodeResolve(), commonjs(), esPlugin, tsPlugin],
        output: [
            {
                dir: "dist-rollup/esm",
                format: "esm",
                exports: "named",
                sourcemap: true,
            },
            {
                dir: "dist-rollup/cjs",
                format: "cjs",
                exports: "named",
                sourcemap: true,
            },
        ],
    },
];
