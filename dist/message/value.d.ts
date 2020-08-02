import Infer from "./infer";
import MessageInterface from "../message";
export default function Value<Message extends MessageInterface>(message: Message): Infer<Message>;
