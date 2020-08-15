import Message from "../message";
/**
 * get {@link Message.message} type
 */
declare type Infer<Type> = Type extends Message<infer As> ? As : never;
export default Infer;
