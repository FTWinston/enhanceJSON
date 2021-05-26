import { enhancedReplacer, enhanceReplacer, replacer } from './replacer';

export function stringify(
    value: any,
    replacer?: replacer,
    space?: string | number
) {
    const useReplacer = replacer ? enhanceReplacer(replacer) : enhancedReplacer;

    return JSON.stringify(value, useReplacer, space);
}
