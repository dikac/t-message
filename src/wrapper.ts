import Message from "./message";

export default class Wrapper<Msg, Container extends Message<Msg> = Message<Msg>> implements Readonly<Message<Msg>>{

    constructor(
        public messageContainer : Container
    ) {

    }

    get message() : Msg {

        return this.messageContainer.message;
    }
}
