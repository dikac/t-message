import Guard from "../boolean/message";
import Function from "@dikac/t-function/function";
import Parameter from "@dikac/t-function/assert/parameter";
import StringError from "./throwable/message";
import MessageInterface from "../message";

export default function Message(
    value : unknown,
    error : Function<[unknown], Error> = StringError
) : asserts value is MessageInterface {

    Parameter(value, Guard, error);
}
