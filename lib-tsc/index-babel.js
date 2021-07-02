"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpperCase = void 0;
// 将一个string数组的所有字符变大写
function toUpperCase(strs) {
    return strs.map(function (str) { return str.toUpperCase(); });
}
exports.toUpperCase = toUpperCase;
// 使用
// console.log(toUpperCase(['a',"b","C"])) // [ 'A', 'B', 'C' ]
