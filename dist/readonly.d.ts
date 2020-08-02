import Message from "./message";
import Infer from "./message/infer";
export default class Readonly<MessageT extends Message = Message> implements globalThis.Readonly<Message<Infer<MessageT>>> {
    subject: MessageT;
    constructor(subject: MessageT);
    get message(): Infer<MessageT>;
}
