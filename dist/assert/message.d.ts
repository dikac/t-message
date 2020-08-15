import Function from "@dikac/t-function/function";
import MessageInterface from "../message";
/**
 * assert {@param value} is compatible with {@link MessageInterface}
 *
 * @param value
 *
 * @param error
 * throw {@link Error} from {@param error} if  {@param value} is not compatible
 */
export default function Message(value: object, error?: Function<[object], Error>): asserts value is MessageInterface;
