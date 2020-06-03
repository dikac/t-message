import Message from "./message";

export default class Callback<Msg, Arguments extends any[]> implements Readonly<Message<Msg>>{

    constructor(
        public callback : (...args : Arguments) => Msg,
        public argument : Arguments,
    ) {

    }

    get message() : Msg {

        return this.callback(...this.argument);
    }
}
