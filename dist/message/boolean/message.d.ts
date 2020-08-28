import MessageInterface from "../../message";
export default function Message<Type>(value: MessageInterface, validation: (value: unknown) => value is Type): value is MessageInterface<Type>;
