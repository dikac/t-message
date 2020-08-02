import Message from "./message";
import Function from "@dikac/t-function/function";
import Argument from "@dikac/t-function/argument/argument";
import Callback from "./callback";

export default function CallbackFromObject<FunctionT extends Function>(
    object : Message<FunctionT> & Argument<Parameters<FunctionT>>
) : Readonly<Message<ReturnType<FunctionT>> & Argument<Parameters<FunctionT>>> {

    return new Callback(object.message, object.argument);
}
