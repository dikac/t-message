import Function from "@dikac/t-function/function";
import AssertString from "../assert/message";
import MessageError from "../assert/throwable/message";
import MessageInterface from "../message";

/**
 * return {@param value} is compatible with {@link MessageInterface}
 *
 * @param value
 *
 * @param error
 * throw {@link Error} from {@param error} if {@param value} is not compatible
 */
export default function Message(
    value : object,
    error : Function<[object], Error> = MessageError
) : MessageInterface {

    AssertString(value, error);

    return value;
}
