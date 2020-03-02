import Message from "./message";
export default class Callback<Msg, Argument extends any[]> implements Readonly<Message<Msg>> {
    callback: (...args: Argument) => Msg;
    argument: Argument;
    constructor(callback: (...args: Argument) => Msg, argument: Argument);
    get message(): Msg;
}
