import MessageInterface from "../message";

type Message<Type> = Type extends MessageInterface<infer As> ? As : never;

export default Message;
