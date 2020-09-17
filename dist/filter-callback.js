/**
 * filter value {@param message} with given {@param callback}
 *
 * return value {@param callback} use for populate message data
 *
 * @param message
 * @param callback
 */
export default class FilterCallback {
    constructor(subject, callback) {
        this.subject = subject;
        this.callback = callback;
    }
    get message() {
        return this.callback(this.subject);
    }
}
//# sourceMappingURL=filter-callback.js.map