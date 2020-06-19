import Message from "./message";
import Infer from "./infer/message";
import Validatable from "@dikac/t-validatable/validatable";
import ValueMemoize from "@dikac/t-value/memoize";
import ValueCallback from "@dikac/t-value/callback";
import Functions from "@dikac/t-function/functions";
/**
 * Wrap {@link Message} and cache its value
 *
 * suitable to cached value from heave operation
 */
export default class Memoize<Container extends Message> implements Readonly<Message<Infer<Container>>>, Readonly<Validatable<boolean>> {
    subject: Container;
    protected memoized: ValueMemoize<ValueCallback<Functions<[], Infer<Container>>>>;
    constructor(subject: Container);
    get valid(): boolean;
    /**
     * clear cached value
     */
    clear(): void;
    get message(): Infer<Container>;
}
