import MessageInterface from "../message";
/**
 * check if {@param value} is compatible with {@link MessageInterface}
 */
export default function Message(value: object): value is MessageInterface;
