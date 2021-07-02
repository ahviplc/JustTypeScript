"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var utils = _interopRequireWildcard(require("./utils/utils"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var total = utils.add(1, 2); // 打印输出 utils

console.log('...src/index-webpack.ts...utils', utils); // 打印

console.log('...src/index-webpack.ts...add(1,2)', total);
utils.sayHello(); // 使用
// node dist/index-webpack-bundle.js
// 输出
// add(1,2) 3
// 好像没啥效果
// export {
//     utils as tsTools
// }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC13ZWJwYWNrLnRzIl0sIm5hbWVzIjpbInRvdGFsIiwidXRpbHMiLCJhZGQiLCJjb25zb2xlIiwibG9nIiwic2F5SGVsbG8iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxLQUFLLENBQUNDLEdBQU4sQ0FBVSxDQUFWLEVBQWEsQ0FBYixDQUFkLEMsQ0FFQTs7QUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVksaUNBQVosRUFBK0NILEtBQS9DLEUsQ0FFQTs7QUFDQUUsT0FBTyxDQUFDQyxHQUFSLENBQVksb0NBQVosRUFBa0RKLEtBQWxEO0FBRUFDLEtBQUssQ0FBQ0ksUUFBTixHLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCIuL3V0aWxzL3V0aWxzXCI7XHJcblxyXG5jb25zdCB0b3RhbCA9IHV0aWxzLmFkZCgxLCAyKVxyXG5cclxuLy8g5omT5Y2w6L6T5Ye6IHV0aWxzXHJcbmNvbnNvbGUubG9nKCcuLi5zcmMvaW5kZXgtd2VicGFjay50cy4uLnV0aWxzJywgdXRpbHMpXHJcblxyXG4vLyDmiZPljbBcclxuY29uc29sZS5sb2coJy4uLnNyYy9pbmRleC13ZWJwYWNrLnRzLi4uYWRkKDEsMiknLCB0b3RhbClcclxuXHJcbnV0aWxzLnNheUhlbGxvKClcclxuXHJcbi8vIOS9v+eUqFxyXG4vLyBub2RlIGRpc3QvaW5kZXgtd2VicGFjay1idW5kbGUuanNcclxuLy8g6L6T5Ye6XHJcbi8vIGFkZCgxLDIpIDNcclxuXHJcbi8vIOWlveWDj+ayoeWVpeaViOaenFxyXG4vLyBleHBvcnQge1xyXG4vLyAgICAgdXRpbHMgYXMgdHNUb29sc1xyXG4vLyB9XHJcblxyXG4iXX0=