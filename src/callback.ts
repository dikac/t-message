import Message from "./message";
import Argument from "@dikac/t-function/argument/argument";
import Functions from "@dikac/t-function/functions";
import Call from "@dikac/t-function/any/call";
import Value from "@dikac/t-value/value";

export default class Callback<
    Fn extends Functions,
> implements Readonly<Message<ReturnType<Fn>>>
{

    constructor(
        public callback : Fn,
        public argument : Parameters<Fn>,
    ) {
    }

    get message () : ReturnType<Fn> {

        return this.callback(...this.argument);
    }


}
