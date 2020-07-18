import Message from "./message";
import Infer from "./return/return";
import ObjectProperty from "@dikac/t-object/value/property";
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
