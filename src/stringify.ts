import {
    replacer as standardReplacer,
    enhanceReplacer,
    replacerFunc,
} from './replacer';

export function stringify(
    value: any,
    replacer?: replacerFunc,
    space?: string | number
) {
    const useReplacer = replacer ? enhanceReplacer(replacer) : standardReplacer;

    return JSON.stringify(value, useReplacer, space);
}
