// 将一个string数组的所有字符变大写
export function toUpperCase(strs: Array<string>): Array<string> {
    return strs.map((str: string) => str.toUpperCase())
}

// 使用
// console.log(toUpperCase(['a',"b","C"])) // [ 'A', 'B', 'C' ]
