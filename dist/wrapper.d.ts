import Message, { Infer } from "./message";
export default class Wrapper<Container extends Message = Message> implements Readonly<Message<Infer<Container>>> {
    messageContainer: Container;
    constructor(messageContainer: Container);
    get message(): Infer<Container>;
}
