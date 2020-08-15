import MessageInterface from "../message";
import ObjectProperty from "@dikac/t-object/boolean/property";

/**
 * check if {@param value} is compatible with {@link MessageInterface}
 */
export default function Message(
    value : object,
) : value is MessageInterface {

    if(!ObjectProperty(value, 'message')) {

        return false;
    }

    return true;

}
