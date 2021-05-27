import { valueKey, typeKey } from './constants';
import { DataType } from './DataType';
import { isDate, isMap, isSet } from './typeChecks';

export type replacerFunc = (this: any, key: string, value: any) => any;

export function replacer(key: string, value: any) {
    if (isMap(value)) {
        return {
            [typeKey]: DataType.Map,
            [valueKey]: Array.from(value),
        };
    } else if (isSet(value)) {
        return {
            [typeKey]: DataType.Set,
            [valueKey]: Array.from(value),
        };
    } else if (typeof value === 'string') {
        // Dates have already been converted to string by Date.toJSON ...
        // Need to check if the "real" value is a date.
        const rawValue = this[key];
        if (isDate(rawValue)) {
            return {
                [typeKey]: DataType.Date,
                [valueKey]: value,
            };
        }
    }

    return value;
}

export function enhanceReplacer(customReplacer: replacerFunc): replacerFunc {
    return (key: string, value: any) => {
        value = customReplacer(key, value);
        return replacer(key, value);
    };
}
