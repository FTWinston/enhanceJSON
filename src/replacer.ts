import { valueKey, typeKey } from './constants';
import { DataType } from './DataType';
import { isDate, isMap, isSet } from './typeChecks';

export function replacer(_key: string, value: any) {
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
    } else if (isDate(value)) {
        return {
            [typeKey]: DataType.Date,
            [valueKey]: value.toISOString(),
        };
    } else {
        return value;
    }
}
