# group-values-by-key

[![Build Status](https://travis-ci.org/saxjst/group-values-by-key.svg?branch=master)](https://travis-ci.org/saxjst/group-values-by-key)
[![Coverage Status](https://coveralls.io/repos/github/saxjst/group-values-by-key/badge.svg?branch=master)](https://coveralls.io/github/saxjst/group-values-by-key?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/841af7743a474bb61775/maintainability)](https://codeclimate.com/github/saxjst/group-values-by-key/maintainability)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/saxjst/group-values-by-key.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/saxjst/group-values-by-key/context:javascript)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier/)

> Group values of two objects by their key

## Install

```
$ npm install group-values-by-key
```

## Usage

```js
const groupValuesByKey = require("group-values-by-key");

const objects = [{ a: 2 }, { a: 3, b: 1 }];

groupValuesByKey(objects); //=> { a: [ 2, 3 ], b: [ 1 ] }
```

## API

### groupValuesByKey(objects) ⇒ <code>Object</code>

group values of two objects by their key

**Returns**: <code>Object</code> - object grouping values

| Param   | Type       | Description     |
| ------- | ---------- | --------------- |
| objects | `Object[]` | array of object |

**Example**

```js
groupValuesByKey({ a: 2 }, { a: 3, b: 1 }); //=> { a: [ 2, 3 ], b: [ 1 ] }
```

## License

MIT © [saxjst](https://saxjst.com)
