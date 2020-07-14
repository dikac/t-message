import Message from "./message";
import Infer from "./infer/message";

export default class Readonly<
    Container extends Message = Message
> implements
    globalThis.Readonly<Message<Infer<Container>>>
{

    constructor(
        public subject: Container
    ) {

    }

    get message(): Infer<Container> {

        return <Infer<Container>> this.subject.message;
    }
}