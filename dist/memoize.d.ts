import Message from "./message";
import Infer from "./infer/message";
import ObjectProperty from "@dikac/t-value/object-property";
import ValueMemoize from "@dikac/t-value/memoize";
/**
 * Wrap {@link Message} and cache its value
 *
 * suitable to cached value from heave operation
 */
export default class Memoize<Container extends Message> implements Readonly<Message<Infer<Container>>> {
    subject: Container;
    memoize: ValueMemoize<ObjectProperty<'message', Container>>;
    constructor(subject: Container);
    get message(): Infer<Container>;
}
