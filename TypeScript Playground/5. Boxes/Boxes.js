"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Box = /** @class */ (function () {
    function Box() {
        this._boxes = [];
    }
    Box.prototype.add = function (el) {
        this._boxes.push(el);
    };
    Box.prototype.remove = function () {
        this._boxes.pop();
    };
    Object.defineProperty(Box.prototype, "count", {
        get: function () {
            return this._boxes.length;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
exports.default = Box;
