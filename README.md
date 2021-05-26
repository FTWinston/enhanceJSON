# treeJSON
Parse/stringify object trees to JSON, with support for Map, Set and Date.

## Usage
treeJSON is used in the same way as you'd call JSON.parse / JSON.stringify. (It actually calls those behind the scenes, with a custom reviver / replacer.)

```javascript
import * as treeJSON from 'treejson';

const data = {
  val1: 'test',
  map: new Map([[1, 'one'],[2, 'two']]);
  child: {
    sets: [
      new Set([1, 2, 3]),
      new Set(['a', 'b', 'c']),
    ],
    date: new Date(),
  }
}

const strData = treeJSON.stringify(data);
const newData = treeJSON.parse(strData);

expect(newData).toEqual(data);
```
