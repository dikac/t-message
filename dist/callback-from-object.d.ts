import Message from "./message";
import Function from "@dikac/t-function/function";
import Argument from "@dikac/t-function/argument/argument";
export default function CallbackFromObject<FunctionT extends Function>(object: Message<FunctionT> & Argument<Parameters<FunctionT>>): Readonly<Message<ReturnType<FunctionT>> & Argument<Parameters<FunctionT>>>;
