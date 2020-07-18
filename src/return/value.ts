import Infer from "./return";
import MessageInterface from "../message";

export default function Value<Message extends MessageInterface>(message : Message) : Infer<Message> {

    return <Infer<Message>> message.message;
}
