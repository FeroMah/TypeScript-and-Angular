export class Request {

    response: String;
    fulfilled: Boolean;

    constructor(method: string, uri: String, version: String, message: String) {
        this.response = undefined;
        this.fulfilled = false;

    }
    //     The first four properties(method, uri, version, message) are set trough the constructor, in the listed order.
    //     The response property is initialized to undefined and the fulfilled property is initially set to false..
}