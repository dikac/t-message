import MessageInterface from "../message";
import Infer from "../infer/message";
export default function Message<Assumption extends MessageInterface>(value: any, validation?: (value: any) => value is Infer<Assumption>): value is Assumption;
