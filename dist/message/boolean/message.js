export default function Message(value, validation) {
    if (!validation(value.message)) {
        return false;
    }
    return true;
}
//# sourceMappingURL=message.js.map