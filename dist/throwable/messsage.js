import SafeCast from "@dikac/t-string/safe-cast";
import Value from "../message/value";
import New from "@dikac/t-function/new";
export default function Message(object, conversion = (result) => SafeCast(Value(result)), throwable = New(Error)) {
    return throwable(conversion(object));
}
//# sourceMappingURL=messsage.js.map