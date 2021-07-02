"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toUpperCase = toUpperCase;

// 将一个string数组的所有字符变大写
function toUpperCase(strs) {
  return strs.map(function (str) {
    return str.toUpperCase();
  });
} // 使用
// console.log(toUpperCase(['a',"b","C"])) // [ 'A', 'B', 'C' ]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC1iYWJlbC50cyJdLCJuYW1lcyI6WyJ0b1VwcGVyQ2FzZSIsInN0cnMiLCJtYXAiLCJzdHIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNPLFNBQVNBLFdBQVQsQ0FBcUJDLElBQXJCLEVBQXlEO0FBQzVELFNBQU9BLElBQUksQ0FBQ0MsR0FBTCxDQUFTLFVBQUNDLEdBQUQ7QUFBQSxXQUFpQkEsR0FBRyxDQUFDSCxXQUFKLEVBQWpCO0FBQUEsR0FBVCxDQUFQO0FBQ0gsQyxDQUVEO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDlsIbkuIDkuKpzdHJpbmfmlbDnu4TnmoTmiYDmnInlrZfnrKblj5jlpKflhplcclxuZXhwb3J0IGZ1bmN0aW9uIHRvVXBwZXJDYXNlKHN0cnM6IEFycmF5PHN0cmluZz4pOiBBcnJheTxzdHJpbmc+IHtcclxuICAgIHJldHVybiBzdHJzLm1hcCgoc3RyOiBzdHJpbmcpID0+IHN0ci50b1VwcGVyQ2FzZSgpKVxyXG59XHJcblxyXG4vLyDkvb/nlKhcclxuLy8gY29uc29sZS5sb2codG9VcHBlckNhc2UoWydhJyxcImJcIixcIkNcIl0pKSAvLyBbICdBJywgJ0InLCAnQycgXVxyXG4iXX0=