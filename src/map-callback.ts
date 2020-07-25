import MessageInterface from "./message";
import Fn from "@dikac/t-function/function-single";
import Return from "./return/return";

export default function MapCallback<
    Replace,
    Message extends MessageInterface = MessageInterface
>(
    message : Message,
    callback : Fn<Return<Message>, Replace>
) : Readonly<MessageInterface<Replace> & {subject : Message}> {

    return {
        get subject() {
            return message
        },
        get message() {
            return callback(<Return<Message>>message.message)
        }
    }
}
