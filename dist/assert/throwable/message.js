import MessageType from "../string/message";
import Callback from "@dikac/t-function/assert/throwable/callback";
/**
 * @deprecated use {@link Callback} instead
 */
export default function Message(string, message = MessageType, error = (string) => new Error(string)) {
    return Callback([string], message, error);
}
//# sourceMappingURL=message.js.map