export const isArray = Array.isArray;
export const isMap = (o: any): o is Map<any, any> => o instanceof Map;
export const isSet = (o: any): o is Set<any> => o instanceof Set;
export const isObject = (o: any): o is Record<any, any> =>
    o !== null && typeof o === 'object';
export const isDate = (o: any): o is Date => o instanceof Date;
