import Message from "../message";
import TypeObject from "@dikac/t-object/boolean/type";

export default function Type<V, Assumption extends Message<V>>(value : any, validation : (value : any) => value is V) : value is Assumption {

    if(!TypeObject<Assumption>(value)) {

        return false;
    }

    if(!validation(value.message)) {

        return false;
    }

    return true;

}
