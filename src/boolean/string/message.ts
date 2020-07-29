export default function Message(
    valid : boolean,
    value : unknown,
) : string {

    if(valid) {

        return `value is compatible with Message interface`;

    } else {

        return `value is not compatible with Message interface`;
    }
}
