/**
 * @deprecated
 */
export default class FromValue {
    constructor(subject) {
        this.subject = subject;
    }
    get message() {
        return this.subject.value;
    }
}
//# sourceMappingURL=from-value.js.map