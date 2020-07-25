import MessageInterface from "../message";

type Return<Type> = Type extends MessageInterface<infer As> ? As : never;

export default Return;
