import Message from "./message";
import Argument from "@dikac/t-function/argument/argument";
import Function from "@dikac/t-function/function";

/**
 * use callback return as {@link Message.message} value
 */
export default class Callback<
    FunctionTemplate extends Function,
> implements
    Readonly<Message<ReturnType<FunctionTemplate>>>,
    Readonly<Argument<Parameters<FunctionTemplate>>>
{
    /**
     * @param callback
     * to be used for generating {@link Message.message}
     *
     * @param argument
     * argument fon {@param callback}
     */
    constructor(
        readonly callback : FunctionTemplate,
        readonly argument : Parameters<FunctionTemplate>,
    ) {
    }

    /**
     * value from {@template FunctionTemplate} return
     */
    get message () : ReturnType<FunctionTemplate> {

        return <ReturnType<FunctionTemplate>>this.callback(...this.argument);
    }


}
