"use strict";
exports.__esModule = true;
exports.Request = void 0;
var Request = /** @class */ (function () {
    function Request(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
    return Request;
}());
exports.Request = Request;
var myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '');
var obj = myData;
console.log({
    method: myData.method,
    uri: myData.uri,
    version: myData.version,
    message: myData.message,
    response: myData.response,
    fulfilled: myData.fulfilled
});
console.log(JSON.stringify(myData));
