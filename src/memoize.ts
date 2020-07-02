import Message from "./message";
import Infer from "./infer/message";
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
    Readonly<Message<Infer<Container>>>
{
    protected memoize : ReturnMemoize<ReturnCallback<Functions<[], Infer<Container>>>>;

    constructor(
        public subject : Container
    ) {

        let callback  = new ReturnCallback({
            value : ()=>subject.message,
            argument : []
        });

        this.memoize = new ReturnMemoize(callback);
    }

    get memoized () : boolean {

        return this.memoize.memoized;
    }

    /**
     * clear cached value
     */
    clear () {

        this.memoize.clear();
    }

    get message () : Infer<Container> {

        return this.memoize.return;
    }

}
