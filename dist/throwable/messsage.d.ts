import Message from "../message";
export default function Message<MessageType extends Message>(object: MessageType, conversion?: (result: MessageType) => string, throwable?: (message: string) => Error): Error;
