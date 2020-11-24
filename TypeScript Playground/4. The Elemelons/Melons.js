"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Melolemonmelon = exports.Airmelon = exports.Earthmelon = exports.Firemelon = exports.Watermelon = exports.Melon = void 0;
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
    Object.defineProperty(Melon.prototype, "elementIndex", {
        get: function () {
            return this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    return Melon;
}());
exports.Melon = Melon;
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Watermelon.prototype.toString = function () {
        return ("Element: Water" +
            "\r\n" +
            ("Sort: " + this.melonSort) +
            "\r\n" +
            ("Element Index: " + this.elementIndex));
    };
    return Watermelon;
}(Melon));
exports.Watermelon = Watermelon;
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Firemelon.prototype.toString = function () {
        return ("Element: Fire" +
            "\r\n" +
            ("Sort: " + this.melonSort) +
            "\r\n" +
            ("Element Index: " + this.elementIndex));
    };
    return Firemelon;
}(Melon));
exports.Firemelon = Firemelon;
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Earthmelon.prototype.toString = function () {
        return ("Element: Earth" +
            "\r\n" +
            ("Sort: " + this.melonSort) +
            "\r\n" +
            ("Element Index: " + this.elementIndex));
    };
    return Earthmelon;
}(Melon));
exports.Earthmelon = Earthmelon;
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Airmelon.prototype.toString = function () {
        return ("Element: Air" +
            "\r\n" +
            ("Sort: " + this.melonSort) +
            "\r\n" +
            ("Element Index: " + this.elementIndex));
    };
    return Airmelon;
}(Melon));
exports.Airmelon = Airmelon;
var Melolemonmelon = /** @class */ (function (_super) {
    __extends(Melolemonmelon, _super);
    function Melolemonmelon(weight) {
        var _this = _super.call(this, weight, "Water") || this;
        _this.element = ["Fire", "Earth", "Air", "Water"];
        return _this;
    }
    Melolemonmelon.prototype.morph = function () {
        var el = this.element.shift();
        this.element.push(el);
        return el;
    };
    return Melolemonmelon;
}(Watermelon));
exports.Melolemonmelon = Melolemonmelon;
// const w: Watermelon = new Watermelon(100, "Test");
// w.elementIndex;
// const f: Firemelon = new Firemelon(100, "test");
// console.log(f.elementIndex);
var watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
var m = new Melolemonmelon(10);
console.log(m.morph());
console.log(m.morph());
console.log(m.morph());
console.log(m.morph());
console.log(m.morph());
