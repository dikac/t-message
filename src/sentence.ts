import ValueOf from "@dikac/t-value/value-of/value-of";

export default class Sentence implements ValueOf<string> {

    constructor(
        public valid : boolean,
        public subject : string,
        public predicates: {invalid : string, valid : string},
        public object : string
    ) {
    }

    valueOf(): string {

        return this.message;
    }

    toString() : string {

        return this.message;
    }

    get message() : string {

        const messages : string[] = [];

        if(this.subject) {

            messages.push(this.subject);
        }

        const predicate = this.valid ? this.predicates.valid : this.predicates.invalid;

        if(predicate) {

            messages.push(predicate);
        }

        if(this.object) {

            messages.push(this.object);
        }

        return messages.join(' ');
    }

}
