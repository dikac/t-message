import Message from "../message";
import TypeObject from "@dikac/t-object/boolean/object";
import Infer from "../infer/message";

export default function Type<
    Assumption extends Message
>(
    value : any,
    validation : (value : any) => value is Infer<Assumption> = (value : any) : value is Infer<Assumption> =>true
) : value is Assumption {

    if(!TypeObject<Assumption>(value)) {

        return false;
    }

    if(!validation(value.message)) {

        return false;
    }

    return true;

}
