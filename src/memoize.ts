import Message from "./message";
import Infer from "./message/infer";
import ObjectProperty from "@dikac/t-object/value/property";
import ValueMemoize from "@dikac/t-value/memoize";

/**
 * Wrap {@link Message} and cache its value
 *
 * suitable to cached value from heave operation
 */
export default class Memoize<
    MessageT extends Message
> implements
    Readonly<Message<Infer<MessageT>>>
{
    public memoize : ValueMemoize<ObjectProperty<'message', MessageT>>;

    constructor(
        public subject : MessageT
    ) {

        let value = new ObjectProperty(subject, 'message');
        this.memoize = new ValueMemoize(value);
    }


    get message () : Infer<MessageT> {

        return <Infer<MessageT>> this.memoize.value;
    }

}
