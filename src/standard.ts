import Message from "./message";

export default class Standard<M> implements Message<M>  {

    constructor(
        public message : M
    ){}

}
