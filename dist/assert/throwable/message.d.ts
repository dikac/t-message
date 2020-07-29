import Function from "@dikac/t-function/function";
export default function Message(string: unknown, message?: Function<[boolean, unknown], string>, error?: Function<[string], Error>): Error;
