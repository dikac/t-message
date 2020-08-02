import Message from "./message";
import Infer from "./message/infer";

export default class Readonly<
    MessageT extends Message = Message
> implements
    globalThis.Readonly<Message<Infer<MessageT>>>
{

    constructor(
        public subject: MessageT
    ) {

    }

    get message(): Infer<MessageT> {

        return <Infer<MessageT>> this.subject.message;
    }
}
