/**
 * @deprecated use {@link Callback} instead
 */
export default function Message(string: unknown, message?: (valid: boolean, value: unknown) => string, error?: (message: string) => Error): Error;
