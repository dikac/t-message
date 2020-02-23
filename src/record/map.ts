import ObjectMap, {Return} from "@dikac/t-object/record/map";
import Record from "@dikac/t-object/record/record";
import Message from "../message";
import Type from "../boolean/type";

/**
 * extract message value, and retain the object structure
 *
 * @param object
 * @param messageValidation
 * @constructor
 */
export default function Map<Value, Container extends Record<Message<Value>>> (
    object : Container,
    messageValidation : (value : any) => value is Value
) : Return<Message<Value>, Value, Container> {

    let validation = function(value : any) : value is Message<Value>  {

        return Type<Value, Message<Value>>(value, messageValidation);
    };

    return ObjectMap<Message<Value>, Value, Container>(object, validation, (value : Message<Value>) => value.message);
}
