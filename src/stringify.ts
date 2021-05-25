import { replacer } from './replacer';

export function stringify(value: any) {
    return JSON.stringify(value, replacer);
}
