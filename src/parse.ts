import { reviver } from './reviver';

export function parse(text: string) {
    return JSON.parse(text, reviver);
}
