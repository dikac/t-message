import MessageType from "../../boolean/string/message";
import Callback from "@dikac/t-function/assert/throwable/callback";

/**
 * @deprecated use {@link Callback} instead
 */
export default function Message(
    string : unknown,
    message : (valid : boolean, value : unknown)=>string = MessageType,
    error : (message:string)=>Error = (string : string) => new Error(string)
) : Error {

    return Callback([string], message, error);
}
