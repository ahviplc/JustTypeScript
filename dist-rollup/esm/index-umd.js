function add(x, y) {
    return x + y;
}
function sayHello() {
    console.log('Hello JustTypeScript | tsTools');
}

var utils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    add: add,
    sayHello: sayHello
});

function mathPow(x, y) {
    return Math.pow(x, y);
}

export { mathPow, utils as tsToolc };
//# sourceMappingURL=index-umd.js.map
