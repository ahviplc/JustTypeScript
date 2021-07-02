(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./utils/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.tsTools = void 0;
    const utils_1 = require("./utils/utils");
    // 先执行一下
    utils_1.sayHello();
    const tsTools = {
        sayHello: utils_1.sayHello
    };
    exports.tsTools = tsTools;
});
