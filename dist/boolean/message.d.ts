import MessageInterface from "../message";
import MessageReturn from "../message/message";
import Guard from "@dikac/t-function/boolean/guard";
export default function Message(value: unknown): value is MessageInterface;
export default function Message<Assumption extends MessageInterface>(value: unknown, validation: Guard<unknown, MessageReturn<Assumption>>): value is Assumption;
