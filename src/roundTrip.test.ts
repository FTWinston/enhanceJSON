import { stringify } from './stringify';
import { parse } from './parse';

test('primitives', () => {
    const tree = {
        a: 1,
        b: '2',
        child: {
            c: 3,
            d: [4, 5, '6'],
        },
    };

    const newTree = parse(stringify(tree));

    expect(newTree).toEqual(tree);
});

test('maps', () => {
    const tree = {
        a: new Map<any, any>([
            ['a', 1],
            ['b', '2'],
            ['c', 3],
            [4, 5],
        ]),
        child: {
            a: new Map<any, any>([
                ['x', 'X'],
                ['y', 'Y'],
                ['z', 'Z'],
            ]),
            b: [
                new Map([
                    ['a', 1],
                    ['b', 2],
                ]),
                new Map([
                    [10, 'x'],
                    [11, 'y'],
                    [12, 'z'],
                ]),
            ],
        },
    };

    const newTree = parse(stringify(tree));

    expect(newTree).toEqual(tree);
});

test('sets', () => {
    const tree = {
        a: new Set<any>(['a', 1, 'b', '2', 'c', 3, 4, 5]),
        child: {
            a: new Set<any>(['x', 'X', 'y', 'Y', 'z', 'Z']),
            b: [
                new Set(['a', 1, 'b', 2]),
                new Set([10, 'x', 11, 'y', 12, 'z']),
            ],
        },
    };

    const newTree = parse(stringify(tree));

    expect(newTree).toEqual(tree);
});

test('dates', () => {
    const tree = {
        a: new Date(1999, 11, 31, 12),
        child: {
            b: new Date(2099, 11, 31, 23, 59, 59, 999),
            c: [new Date(), new Date(2000, 0, 0)],
        },
    };

    const newTree = parse(stringify(tree));

    expect(newTree).toEqual(tree);
});
