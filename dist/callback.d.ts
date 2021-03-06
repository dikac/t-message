import Message from "./message";
import Argument from "@dikac/t-function/argument/argument";
import Callable from "@dikac/t-function/callable";
/**
 * use callback return as {@link Message.message} value
 */
export default class Callback<FunctionTemplate extends Callable> implements Readonly<Message<ReturnType<FunctionTemplate>>>, Readonly<Argument<Parameters<FunctionTemplate>>> {
    readonly callback: FunctionTemplate;
    readonly argument: Parameters<FunctionTemplate>;
    /**
     * @param callback
     * to be used for generating {@link Message.message}
     *
     * @param argument
     * argument fon {@param callback}
     */
    constructor(callback: FunctionTemplate, argument: Parameters<FunctionTemplate>);
    /**
     * value from {@template FunctionTemplate} return
     */
    get message(): ReturnType<FunctionTemplate>;
}
