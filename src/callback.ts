import Message from "./message";

export default class Callback<Msg, Argument extends any[]> implements Readonly<Message<Msg>>{

    constructor(
        public callback : (...args : Argument) => Msg,
        public argument : Argument,
    ) {

    }

    get message() : Msg {

        return this.callback(...this.argument);
    }
}
