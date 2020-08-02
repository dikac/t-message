import Message from "./message";
import Infer from "./message/infer";
export default class Readonly<Container extends Message = Message> implements globalThis.Readonly<Message<Infer<Container>>> {
    subject: Container;
    constructor(subject: Container);
    get message(): Infer<Container>;
}
