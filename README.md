# Is Empty

[![Build Status](https://flat.badgen.net/travis/risan/is-empty)](https://travis-ci.org/risan/is-empty)
[![Test Coverage](https://flat.badgen.net/codeclimate/coverage/risan/is-empty)](https://codeclimate.com/github/risan/is-empty)
[![Maintainability](https://flat.badgen.net/codeclimate/maintainability/risan/is-empty)](https://codeclimate.com/github/risan/is-empty)
[![Latest Stable Version](https://flat.badgen.net/npm/v/@risan/is-empty)](https://www.npmjs.com/package/@risan/is-empty)
[![Node Version](https://flat.badgen.net/npm/node/@risan/is-empty)](https://www.npmjs.com/package/@risan/is-empty)
[![Code Style: Prettier](https://flat.badgen.net/badge/code%20style/prettier/ff69b4)](https://github.com/prettier/prettier)
[![License](https://flat.badgen.net/npm/license/@risan/is-empty)](https://github.com/risan/is-empty/blob/master/LICENSE)

Tiny function to check if a value is empty or not.

## Installation

```bash
$ npm install @risan/is-empty

# Or if you use Yarn
$ yarn add @risan/is-empty
```

Use this library directly on the browser:

```html
<!-- For development -->
<script src="https://unpkg.com/@risan/is-empty@latest/dist/is-empty.umd.js"></script>

<!-- Minified version for production -->
<script src="https://unpkg.com/@risan/is-empty@latest/dist/is-empty.umd.min.js"></script>
```

## Usage

```js
const isEmpty = require("@risan/is-empty");

// The following statements will return TRUE:
isEmpty(null);
isEmpty(undefined);
isEmpty(NaN);

// An empty string is considered empty, return TRUE.
isEmpty("");
isEmpty(" ");
isEmpty("\n\t");

// An object with no properties is considered empty, return TRUE.
isEmpty({});
isEmpty(new Object());
isEmpty(Object.create(null));

// Array, Map, or Set with no items is considered empty, return TRUE.
isEmpty([]);
isEmpty(new Map());
isEmpty(new Set());

// The following statements will return FALSE:
isEmpty(true);
isEmpty(false);
isEmpty(0);
isEmpty(-123.5);
isEmpty(Infinity);
isEmpty([1, 2, 3]);
isEmpty({ foo: "bar" });
isEmpty(new Set([1, 2]));

const myMap = new Map();
myMap.set("foo", "bar");
isEmpty(myMap);

// Function will always return FALSE:
const myFunction = () => "foo";
isPlainObj(myFunction);
isEmpty(parseInt);

// Instance of class will always return FALSE:
class Person {}
isPlainObj(new Person());
isEmpty(new Date());
```

If you load the library directly on the browser, it's available under the `isEmpty` name.

```js
window.isEmpty(null); // TRUE
window.isEmpty("   "); // TRUE
window.isEmpty(false); // FALSE
window.isEmpty(new Date()); // FALSE
```

## License

MIT © [Risan Bagja Pradana](https://bagja.net)
