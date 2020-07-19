import MessageInterface from "../message";
import Infer from "../return/return";
import Guard from "@dikac/t-function/boolean/guard";
export default function Message<Assumption extends MessageInterface>(value: unknown, validation: Guard<unknown, Infer<Assumption>> | undefined): value is Assumption;
