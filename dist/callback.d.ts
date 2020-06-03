import Message from "./message";
export default class Callback<Msg, Arguments extends any[]> implements Readonly<Message<Msg>> {
    callback: (...args: Arguments) => Msg;
    argument: Arguments;
    constructor(callback: (...args: Arguments) => Msg, argument: Arguments);
    get message(): Msg;
}
