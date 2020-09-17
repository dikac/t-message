import ObjectProperty from "@dikac/t-object/property/boolean/exists";
/**
 * check if {@param value} is compatible with {@link MessageInterface}
 */
export default function Message(value) {
    if (!ObjectProperty(value, 'message')) {
        return false;
    }
    return true;
}
//# sourceMappingURL=message.js.map