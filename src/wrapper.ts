import Message from "./message";
import Infer from "./infer/message";

export default class Wrapper<Container extends Message = Message> implements Readonly<Message<Infer<Container>>> {

    constructor(
        public subject: Container
    ) {

    }

    get message(): Infer<Container> {

        return <Infer<Container>> this.subject.message;
    }
}
