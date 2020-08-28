import MessageInterface from "../message";
/**
 * return {@param value} is compatible with {@link MessageInterface}
 *
 * @param value
 *
 * @param error
 * throw {@link Error} from {@param error} if {@param value} is not compatible
 */
export default function Message(value: object, error?: (value: object) => Error): MessageInterface;
