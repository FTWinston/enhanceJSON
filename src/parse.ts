import { enhancedReviver, enhanceReviver, reviver } from './reviver';

export function parse(text: string, reviver?: reviver) {
    const useReviver = reviver ? enhanceReviver(reviver) : enhancedReviver;

    return JSON.parse(text, useReviver);
}
