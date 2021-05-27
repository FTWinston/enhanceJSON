import {
    reviver as standardReviver,
    enhanceReviver,
    reviverFunc,
} from './reviver';

export function parse(text: string, reviver?: reviverFunc) {
    const useReviver = reviver ? enhanceReviver(reviver) : standardReviver;

    return JSON.parse(text, useReviver);
}
