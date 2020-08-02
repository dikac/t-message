import Message from "./message";
import Fn from "@dikac/t-function/function-single";
import Return from "./message/infer";
export default function MapCallback<Replace, MessageT extends Message = Message>(message: MessageT, callback: Fn<Return<MessageT>, Replace>): Readonly<Message<Replace> & {
    subject: MessageT;
}>;
