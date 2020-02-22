import Message from "./message";
export default class Standard<M> implements Message<M> {
    message: M;
    constructor(message: M);
}
