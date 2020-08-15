import Function from "@dikac/t-function/function";
/**
 * @deprecated use {@link Callback} instead
 */
export default function Message(string: unknown, message?: Function<[boolean, unknown], string>, error?: Function<[string], Error>): Error;
