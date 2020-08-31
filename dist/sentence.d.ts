import ValueOf from "@dikac/t-value/value-of/value-of";
export default class Sentence implements ValueOf<string> {
    valid: boolean;
    subject: string;
    predicates: {
        invalid: string;
        valid: string;
    };
    object: string;
    constructor(valid: boolean, subject: string, predicates: {
        invalid: string;
        valid: string;
    }, object: string);
    valueOf(): string;
    toString(): string;
    get message(): string;
}
