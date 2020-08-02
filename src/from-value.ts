import Value from "@dikac/t-value/value";
import InferValue from "@dikac/t-value/value/infer";
import Message from "./message";

export default class FromValue<
    Val extends Value
> implements
    Readonly<Message<InferValue<Val>>>
{

    constructor(
        public subject : Val
    ) {
    }


    get message() : InferValue<Val> {

        return <InferValue<Val>> this.subject.value;
    }
}
