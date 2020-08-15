import MessageType from "../../boolean/string/message";
import Function from "@dikac/t-function/function";
import Callback from "@dikac/t-function/assert/throwable/callback";

/**
 * @deprecated use {@link Callback} instead
 */
export default function Message(
    string : unknown,
    message : Function<[boolean, unknown], string> = MessageType,
    error : Function<[string], Error> = (string : string) => new Error(string)
) : Error {

    return Callback([string], message, error);
}
