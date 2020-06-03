import Message, {Infer} from "./message";

export default class Wrapper<Container extends Message = Message> implements Readonly<Message<Infer<Container>>> {

    constructor(
        public subject: Container
    ) {

    }

    get message(): Infer<Container> {

        return this.subject.message;
    }
}
