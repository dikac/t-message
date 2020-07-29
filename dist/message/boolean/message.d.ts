import MessageInterface from "../../message";
import Guard from "@dikac/t-function/boolean/guard";
export default function Message<Type>(value: MessageInterface, validation: Guard<unknown, Type>): value is MessageInterface<Type>;
