/**
 * multi purpose message interface
 */
export default interface Message<Message>  {

    message : Message;
}

export type Infer<Data> = Data extends Message<infer As> ? As : never;
