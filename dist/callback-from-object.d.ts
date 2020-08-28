import Message from "./message";
import Argument from "@dikac/t-function/argument/argument";
import Callable from "@dikac/t-function/callable";
export default function CallbackFromObject<FunctionTemplate extends Callable>(object: Message<FunctionTemplate> & Argument<Parameters<FunctionTemplate>>): Readonly<Message<ReturnType<FunctionTemplate>> & Argument<Parameters<FunctionTemplate>>>;
