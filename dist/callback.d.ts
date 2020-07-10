import Message from "./message";
import Argument from "@dikac/t-function/argument/argument";
import Functions from "@dikac/t-function/function";
export default class Callback<Fn extends Functions> implements Readonly<Message<ReturnType<Fn>>>, Readonly<Argument<Parameters<Fn>>> {
    readonly callback: Fn;
    readonly argument: Parameters<Fn>;
    constructor(callback: Fn, argument: Parameters<Fn>);
    get message(): ReturnType<Fn>;
}
