import ObjectProperty from "@dikac/t-object/value/property";
import ValueMemoize from "@dikac/t-value/memoize";
/**
 * Wrap {@link Message} and cache its value
 *
 * suitable to cached value from heave operation
 * @deprecated
 */
export default class Memoize {
    constructor(subject) {
        this.subject = subject;
        let value = new ObjectProperty(subject, 'message');
        this.memoize = new ValueMemoize(value);
    }
    get message() {
        return this.memoize.value;
    }
}
//# sourceMappingURL=memoize.js.map