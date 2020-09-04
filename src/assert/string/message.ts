import Name from "@dikac/t-object/string/name";
import Sentences from "@dikac/t-string/message/sentences";

export default function Message(
    valid : boolean,
    value : object,
    subject : string = ''
) : string {

    let sentence = new Sentences(valid);
    sentence.subject.push(subject, Name(value));
    sentence.predicate.invalid.push('is not compatible with');
    sentence.predicate.valid.push('is compatible with');
    sentence.object.push('Message type');

    return sentence.message;
}
