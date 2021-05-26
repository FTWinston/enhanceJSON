# enhanceJSON
Parse/stringify object trees to JSON, with support for Map, Set and Date.

enhanceJSON is a drop-in replacement for JSON.parse and JSON.stringify, with identical signatures to those methods.

## Installation
Run `npm install --save enhancejson`

## Usage
enhanceJSON is used in the same way as you'd call JSON.parse / JSON.stringify. It uses a custom reviver and replacer to handle Maps, Sets and Dates. You can specify your own reviver and/or replacer, which will be used when the value being (de)serialised isn't a Map, Set or Date.

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
