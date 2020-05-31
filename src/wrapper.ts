import Message, {Infer} from "./message";

export default class Wrapper<Container extends Message = Message> implements Readonly<Message<Infer<Container>>>{

    constructor(
        public messageContainer : Container
    ) {

    }

    get message() : Infer<Container> {

        return this.messageContainer.message;
    }
}
