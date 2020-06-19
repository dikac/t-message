import Message from "./message";
import Infer from "./infer/message";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnMemoize from "@dikac/t-function/return/memoize";
import ReturnCallback from "@dikac/t-function/return/callback";
import Functions from "@dikac/t-function/functions";

/**
 * Wrap {@link Message} and cache its value
 *
 * suitable to cached value from heave operation
 */
export default class Memoize<
    Container extends Message
> implements
    Readonly<Message<Infer<Container>>>,
    Readonly<Validatable<boolean>>
{
    protected memoized : ReturnMemoize<ReturnCallback<Functions<[], Infer<Container>>>>;

    constructor(
        public subject : Container
    ) {

        let callback  = new ReturnCallback({
            value : ()=>subject.message,
            argument : []
        });

        this.memoized = new ReturnMemoize(callback);
    }

    get valid () : boolean {

        return this.memoized.valid;
    }

    /**
     * clear cached value
     */
    clear () {

        this.memoized.clear();
    }

    get message () : Infer<Container> {

        return this.memoized.return;
    }

}
