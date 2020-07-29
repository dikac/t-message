import MessageInterface from "../message";
import TypeObject from "@dikac/t-object/boolean/object";
import ObjectProperty from "@dikac/t-object/boolean/property";


export default function Message(
    value : unknown,
) : value is MessageInterface {

    if(!TypeObject(value)) {

        return false;
    }

    if(!ObjectProperty(value, 'message')) {

        return false;
    }

    return true;

}
