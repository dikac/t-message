import Value from "@dikac/t-value/value";
import InferValue from "@dikac/t-value/value/infer";
import Message from "./message";

export default class FromValue<
    ValueT extends Value
> implements
    Readonly<Message<InferValue<ValueT>>>
{

    constructor(
        public subject : ValueT
    ) {
    }


    get message() : InferValue<ValueT> {

        return <InferValue<ValueT>> this.subject.value;
    }
}
