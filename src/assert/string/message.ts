import Sentence from "@dikac/t-string/message/sentence";
import SentencesIs from "@dikac/t-string/message/sentences-is";
import Name from "@dikac/t-object/string/name";
import Sentences from "@dikac/t-string/message/sentences";

export default function Message(
    valid : boolean,
    value : object,
    subject : string = ''
) : string {

    let sentence = new Sentences(valid);
    sentence.value.push(subject, Name(value));
    sentence.expectation.invalid.push('is not compatible with');
    sentence.expectation.valid.push('is compatible with');
    sentence.type.push('Message type');

    return sentence.message;
}
