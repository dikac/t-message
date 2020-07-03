import Message from "./message";
import Infer from "./infer/message";
import ObjectProperty from "@dikac/t-value/object-property";
import ValueMemoize from "@dikac/t-value/memoize";

/**
 * Wrap {@link Message} and cache its value
 *
 * suitable to cached value from heave operation
 */
export default class Memoize<
    Container extends Message
> implements
    Readonly<Message<Infer<Container>>>
{
    public memoize : ValueMemoize<ObjectProperty<'message', Container>>;

    constructor(
        public subject : Container
    ) {

        let value = new ObjectProperty(subject, 'message');
        this.memoize = new ValueMemoize(value);
    }


    get message () : Infer<Container> {

        return this.memoize.value;
    }

}
