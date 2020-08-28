import Message from "./message";
import Return from "./message/infer";
export default function MapCallback<Replace, MessageTemplate extends Message = Message>(message: MessageTemplate, callback: (message: Return<MessageTemplate>) => Replace): Readonly<Message<Replace> & {
    subject: MessageTemplate;
}>;
