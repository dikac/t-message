import Name from "@dikac/t-object/string/name";
import Sentences from "@dikac/t-string/message/sentences";

export default function Message(
    valid : boolean,
    value : object,
    subject : string = ''
) : string {

    let sentence = new Sentences(valid);
    sentence.subject.push(subject, `"${Name(value)}"`);
    sentence.reject.push('is not compatible with');
    sentence.accept.push('is compatible with');
    sentence.expect.push('Message type');

    return sentence.message;
}
