import Message from "./message";
import Function from "@dikac/t-function/function";
import Argument from "@dikac/t-function/argument/argument";
import Callback from "./callback";

export default function CallbackFromObject<FunctionTemplate extends Function>(
    object : Message<FunctionTemplate> & Argument<Parameters<FunctionTemplate>>
) : Readonly<Message<ReturnType<FunctionTemplate>> & Argument<Parameters<FunctionTemplate>>> {

    return new Callback(object.message, object.argument);
}
