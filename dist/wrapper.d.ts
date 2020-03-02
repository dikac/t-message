import Message from "./message";
export default class Wrapper<Msg, Container extends Message<Msg> = Message<Msg>> implements Readonly<Message<Msg>> {
    messageContainer: Container;
    constructor(messageContainer: Container);
    get message(): Msg;
}
