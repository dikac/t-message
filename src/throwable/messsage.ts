import Message from "../message";
import SafeCast from "@dikac/t-string/safe-cast";
import Value from "../message/value";
import New from "@dikac/t-function/new";

export default function Message<MessageType extends Message>(
    object : MessageType,
    conversion : (result : MessageType) => string = (result)=>SafeCast(Value(result)),
    throwable : (message:string)=>Error = New(Error)
) : Error {

    return throwable(conversion(object));
}
