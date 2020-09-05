import Message from "./message";
import Infer from "./message/infer";
import ObjectProperty from "@dikac/t-object/value/value/property";
import ValueMemoize from "@dikac/t-value/memoize";
/**
 * Wrap {@link Message} and cache its value
 *
 * suitable to cached value from heave operation
 */
export default class Memoize<MessageTemplate extends Message> implements Readonly<Message<Infer<MessageTemplate>>> {
    subject: MessageTemplate;
    memoize: ValueMemoize<ObjectProperty<'message', MessageTemplate>>;
    constructor(subject: MessageTemplate);
    get message(): Infer<MessageTemplate>;
}
