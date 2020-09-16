import Message from "./message";
import Infer from "./message/infer";
/**
 * construct readonly {@link Message}
 * @deprecated
 */
export default class Readonly<MessageTemplate extends Message = Message> implements globalThis.Readonly<Message<Infer<MessageTemplate>>> {
    subject: MessageTemplate;
    constructor(subject: MessageTemplate);
    get message(): Infer<MessageTemplate>;
}
