import Guard from "../boolean/message";
import Function from "@dikac/t-function/function";
import Callback from "@dikac/t-function/assert/callback";
import StringError from "./throwable/message";
import MessageInterface from "../message";

export default function Message(
    value : unknown,
    error : Function<[unknown], Error> = StringError
) : asserts value is MessageInterface {

    Callback(value, Guard, error);
}
