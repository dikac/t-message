import Message from "../message";

export default function Message(object : Message<string>) : Error {

    return new Error(object.message)
}
