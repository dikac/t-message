import Message from "./message";
import Infer from "./message/infer";
import ObjectProperty from "@dikac/t-object/value/property";
import ValueMemoize from "@dikac/t-value/memoize";
/**
 * Wrap {@link Message} and cache its value
 *
 * suitable to cached value from heave operation
 */
export default class Memoize<MessageT extends Message> implements Readonly<Message<Infer<MessageT>>> {
    subject: MessageT;
    memoize: ValueMemoize<ObjectProperty<'message', MessageT>>;
    constructor(subject: MessageT);
    get message(): Infer<MessageT>;
}
