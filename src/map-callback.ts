import Message from "./message";
import Fn from "@dikac/t-function/function-single";
import Return from "./message/infer";

export default function MapCallback<
    Replace,
    MessageTemplate extends Message = Message
>(
    message : MessageTemplate,
    callback : Fn<Return<MessageTemplate>, Replace>
) : Readonly<Message<Replace> & {subject : MessageTemplate}> {

    return {
        get subject() {
            return message
        },
        get message() {
            return callback(<Return<MessageTemplate>>message.message)
        }
    }
}
