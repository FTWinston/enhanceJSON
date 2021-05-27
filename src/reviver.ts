import { valueKey, typeKey } from './constants';
import { DataType } from './DataType';
import { isArray, isObject } from './typeChecks';

export type reviverFunc = (this: any, key: string, value: any) => any;

function reviveMap(value: Record<any, any>) {
    const entries = value[valueKey];
    const map = new Map();
    if (entries !== undefined && isArray(entries)) {
        for (const [key, val] of entries) {
            map.set(key, val);
        }
    }
    return map;
}

function reviveSet(value: Record<any, any>) {
    const entries = value[valueKey];
    if (entries === undefined || !isArray(entries)) {
        return new Set();
    }
    return new Set(entries);
}

function reviveDate(value: Record<any, any>) {
    const strDate = value[valueKey];
    const b = strDate.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}

export function reviver(key: string, value: any): any {
    if (!isObject(value)) {
        return value;
    }

    const specifiedType = value[typeKey];

    if (!specifiedType) {
        return value;
    }

    switch (specifiedType) {
        case DataType.Map:
            return reviveMap(value);

        case DataType.Set:
            return reviveSet(value);

        case DataType.Date:
            return reviveDate(value);

        default:
            delete value[typeKey];
            return value;
    }
}

export function enhanceReviver(customReviver: reviverFunc): reviverFunc {
    return (key: string, value: any) => {
        value = reviver(key, value);
        return customReviver(key, value);
    };
}
