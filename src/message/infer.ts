import MessageInterface from "../message";

type Infer<Type> = Type extends MessageInterface<infer As> ? As : never;

export default Infer;
