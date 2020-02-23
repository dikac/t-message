import { Return } from "@dikac/t-object/record/map";
import Record from "@dikac/t-object/record/record";
import Message from "../message";
/**
 * extract message value, and retain the object structure
 *
 * @param object
 * @param messageValidation
 * @constructor
 */
export default function Map<Value, Container extends Record<Message<Value>>>(object: Container, messageValidation: (value: any) => value is Value): Return<Message<Value>, Value, Container>;
