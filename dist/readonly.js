/**
 * construct readonly {@link Message}
 * @deprecated
 */
export default class Readonly {
    constructor(subject) {
        this.subject = subject;
    }
    get message() {
        return this.subject.message;
    }
}
//# sourceMappingURL=readonly.js.map