import Message from "../message";
import Infer from "../infer/message";
export default function Type<Assumption extends Message>(value: any, validation?: (value: any) => value is Infer<Assumption>): value is Assumption;
