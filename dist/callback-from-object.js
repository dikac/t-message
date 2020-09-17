import Callback from "./callback";
export default function CallbackFromObject(object) {
    return new Callback(object.message, object.argument);
}
//# sourceMappingURL=callback-from-object.js.map