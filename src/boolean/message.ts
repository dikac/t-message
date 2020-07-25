import MessageInterface from "../message";
import TypeObject from "@dikac/t-object/boolean/object";
import ObjectProperty from "@dikac/t-object/boolean/property";
import MessageReturn from "../return/return";
import Guard from "@dikac/t-function/boolean/guard";


export default function Message(
    value : unknown,
) : value is MessageInterface


export default function Message<
    Assumption extends MessageInterface
    >(
    value : unknown,
    validation : Guard<unknown, MessageReturn<Assumption>>
) : value is Assumption;

export default function Message<
    Assumption extends MessageInterface
>(
    value : unknown,
    validation ?: Guard<unknown, MessageReturn<Assumption>>
) : value is Assumption {

    if(!TypeObject<Assumption>(value)) {

        return false;
    }

    if(!ObjectProperty(value, 'message')) {

        return false;
    }

    if(validation) {

        if(!validation(value.message)) {

            return false;
        }
    }

    return true;

}
