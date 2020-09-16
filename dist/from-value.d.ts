import Value from "@dikac/t-value/value";
import InferValue from "@dikac/t-value/value/infer";
import Message from "./message";
/**
 * @deprecated
 */
export default class FromValue<ValueTemplate extends Value> implements Readonly<Message<InferValue<ValueTemplate>>> {
    subject: ValueTemplate;
    constructor(subject: ValueTemplate);
    get message(): InferValue<ValueTemplate>;
}
