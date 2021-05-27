# enhanceJSON
Stringify/parse object trees to/from JSON, with support for Map, Set and Date.

enhanceJSON is a drop-in replacement for JSON.parse and JSON.stringify, with identical signatures to those methods.

## Installation
Run `npm install --save enhancejson`

## Usage
enhanceJSON is used in the same way as you'd call JSON.stringify / JSON.parse. Internally, it uses a custom replacer and reviver to handle Maps, Sets and Dates. You can specify your own replacer and/or reviver, which will be used before (for replacers) or after (for revivers) the internal ones, when calling stringify or parse.

```javascript
import * as enhanceJSON from 'enhancejson';

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

const strData = enhanceJSON.stringify(data);
const newData = enhanceJSON.parse(strData);

expect(newData).toEqual(data);
```
