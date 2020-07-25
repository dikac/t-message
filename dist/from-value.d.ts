import Value from "@dikac/t-value/value";
import InferValue from "@dikac/t-value/value/value";
import Message from "./message";
export default class FromValue<Val extends Value> implements Readonly<Message<InferValue<Val>>> {
    subject: Val;
    constructor(subject: Val);
    get message(): InferValue<Val>;
}
