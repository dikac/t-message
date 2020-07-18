import MessageInterface from "../message";
import TypeObject from "@dikac/t-object/boolean/object";
import Infer from "../return/return";
import Guard from "@dikac/t-function/boolean/guard";

export default function Message<
    Assumption extends MessageInterface
>(
    value : unknown,
    validation : Guard<unknown, Infer<Assumption>> = (value : unknown) : value is Infer<Assumption> => true
) : value is Assumption {

    if(!TypeObject<Assumption>(value)) {

        return false;
    }

    if(!validation(value.message)) {

        return false;
    }

    return true;

}
