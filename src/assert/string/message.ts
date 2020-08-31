import Sentence from "../../sentence";

const sentence = new Sentence(
    false,
    '',
    {
        invalid:'is not compatible with',
        valid:'is compatible with',
    }, 'Message type'
);

export default function Message(
    valid : boolean,
    value : unknown,
    subject : string = ''
) : string {

    sentence.valid = valid;
    sentence.subject = subject;
    return sentence.message;
}
