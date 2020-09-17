/**
 * use callback return as {@link Message.message} value
 */
export default class Callback {
    /**
     * @param callback
     * to be used for generating {@link Message.message}
     *
     * @param argument
     * argument fon {@param callback}
     */
    constructor(callback, argument) {
        this.callback = callback;
        this.argument = argument;
    }
    /**
     * value from {@template FunctionTemplate} return
     */
    get message() {
        return this.callback(...this.argument);
    }
}
//# sourceMappingURL=callback.js.map