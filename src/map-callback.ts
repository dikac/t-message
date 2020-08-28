import Message from "./message";
import Return from "./message/infer";

export default function MapCallback<
    Replace,
    MessageTemplate extends Message = Message
>(
    message : MessageTemplate,
    callback : (message:Return<MessageTemplate>)=>Replace
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
