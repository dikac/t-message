import Message from "./message";
import Argument from "@dikac/t-function/argument/argument";
import Function from "@dikac/t-function/function";
export default class Callback<FunctionT extends Function> implements Readonly<Message<ReturnType<FunctionT>>>, Readonly<Argument<Parameters<FunctionT>>> {
    readonly callback: FunctionT;
    readonly argument: Parameters<FunctionT>;
    constructor(callback: FunctionT, argument: Parameters<FunctionT>);
    get message(): ReturnType<FunctionT>;
}
