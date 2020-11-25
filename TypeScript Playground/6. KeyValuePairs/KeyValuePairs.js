var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    KeyValuePair.prototype.setKeyValuePairs = function (key, value) {
        this.key = key;
        this.value = value;
    };
    KeyValuePair.prototype.display = function () {
        console.log("key = " + this.key + ", value = " + this.value);
    };
    return KeyValuePair;
}());
var kvp = new KeyValuePair();
kvp.setKeyValuePairs(1, "Steve");
kvp.display();
