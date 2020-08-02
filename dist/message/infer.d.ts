import MessageInterface from "../message";
declare type Infer<Type> = Type extends MessageInterface<infer As> ? As : never;
export default Infer;
