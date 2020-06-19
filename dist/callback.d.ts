import Message from "./message";
import Argument from "@dikac/t-function/argument/argument";
import Functions from "@dikac/t-function/functions";
import Value from "@dikac/t-value/value";
export default class Callback<Fn extends Functions> implements Readonly<Message<ReturnType<Fn>>>, Argument<Parameters<Fn>> {
    subject: Value<Fn> & Argument<Parameters<Fn>>;
    constructor(subject: Value<Fn> & Argument<Parameters<Fn>>);
    get message(): ReturnType<Fn>;
    get argument(): Parameters<Fn>;
}
