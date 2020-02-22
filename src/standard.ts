import Message from "./message";

/**
 * standard implementation of {@link Message}
 */
export default class Standard<M> implements Message<M>  {

    constructor(
        public message : M
    ){}
}
