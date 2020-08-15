import Message from "./message";
import Function from "@dikac/t-function/function";
import Argument from "@dikac/t-function/argument/argument";
export default function CallbackFromObject<FunctionTemplate extends Function>(object: Message<FunctionTemplate> & Argument<Parameters<FunctionTemplate>>): Readonly<Message<ReturnType<FunctionTemplate>> & Argument<Parameters<FunctionTemplate>>>;
