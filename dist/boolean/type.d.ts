import Message from "../message";
export default function Type<V, Assumption extends Message<V>>(value: any, validation: (value: any) => value is V): value is Assumption;
