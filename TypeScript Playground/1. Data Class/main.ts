export class Request {
    method: String;
    uri: String;
    version: String;
    message: String;
    response: String;
    fulfilled: Boolean;

    constructor(method: String, uri: String, version: String, message: String) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}

let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '');
console.log({
    method: myData.method,
    uri: myData.uri,
    version: myData.version,
    message: myData.message,
    response: myData.response,
    fulfilled: myData.fulfilled
});

// console.log(JSON.stringify(myData));