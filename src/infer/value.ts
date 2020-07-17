import Infer from "./message";
import MessageInterface from "../message";

export default function Value<Message extends MessageInterface>(message : Message) : Infer<Message> {

    return message.message;
}
