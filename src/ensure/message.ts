import Function from "@dikac/t-function/function";
import AssertString from "../assert/message";
import MessageError from "../assert/throwable/message";
import MessageInterface from "../message";

export default function Message(
    value : unknown,
    error : Function<[unknown], Error> = MessageError
) : MessageInterface {

    AssertString(value, error);

    return value;
}
