import MessageInterface from "../message";
declare type Message<Type> = Type extends MessageInterface<infer As> ? As : never;
export default Message;
