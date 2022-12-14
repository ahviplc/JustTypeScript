(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sayHello = exports.add = void 0;
    // 加
    function add(x, y) {
        return x + y;
    }
    exports.add = add;
    // say Hello
    function sayHello() {
        console.log('Hello JustTypeScript');
    }
    exports.sayHello = sayHello;
});
