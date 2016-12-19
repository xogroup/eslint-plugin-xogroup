# Proposal - ES6 Features Styleguide and Preferences
Any performance notes are for Node and are likely drawn from the [Six-Speed](https://kpdecker.github.io/six-speed/) test.

This is primarily concerned with Node projects and may require additional notes for use with Frontend patterns.

## The language of this guide
In compliance with [RFC2119](https://tools.ietf.org/html/rfc2119),

"Must" - Required for compliance

"Should" - Required in most situations, exceptions may exist but should require consideration

"May" - Not required in any way, optional, allowable but may be ignored.

## The features

### Strict mode

```javascript
'use strict';
```

Must use

_You probably should of been using this before, but this is required for several features to operate correctly in the current Node LTS_

### Object.assign()
```javascript
let foo = Object.assign({}, {bar: true}, {untrue: false});
//foo is now {bar: true, untrue: false}
```

Should use

_This should replace most utility methods or awkward shims from ES5_

### const
```javascript
const foo = 'bar';
//foo is now fixed and can not be re-assigned
```
Should use

_Currenty offers no performance benefit but may help catch bugs. Please remember in JS this is only a constant reference, the properties of a constant object can be still be altered._

### let
```javascript
let foo = 'bar';
//foo can be reassigned, but only exists in the current scope
```
Should use when not able to use 'const'. __May not be able to enforce this via linting__

_var should never be used anymore. Let follows expected scoping rules._

### Map and Set

+ Good perf
- Useful for our codebase?

_I'm not sure if we are using any large object literals, but these offer significant performance and a clean API._

### Math/Number upgrades
[Overview here](http://www.2ality.com/2015/04/numbers-math-es6.html)

Should use

_Pretty much just additional features and improvements here. Remember JS is not appropriate for real math._

### Template Strings
```javascript
let foo = `Hello ${user.firstName},
How are you?`;
```

Should use over string concatenation in most situations, avoid any logic in templated sections.

_Template strings are only very slightly slower and much easier to read._
### Classes
```javascript
class myFoo extends Foo{
    constructor() {
        super();
        this.isMyFoo = true;
    }
    doFoo() {
        return true;
    }
}
```

Should use for Object Oriented sections.

### Object literal shorthand
```javascript
module.exports = {
    doFoo,
    doBar
};
//same as { doFoo: doFoo, doBar: doBar }
```

Should use when possible

_Significantly reduces redundant code, helps enforce good variable naming._

### Arrow Functions
```javascript
this.foo = true;
this.useFoo = ()=>{
    return this.foo;
}
```

Should use unless you require a new scope.

Parenthesis always required. Brackets required unless using as a comprehension.

```
let odds = myNumbers.filter( (num) => return num%2 )
```

May use as a comprehension (a single line anonymous function with an implicit return).

_Powerful but implicit return is a very new feature to JS and may confuse some programmers._

### Symbols
```javascript
const mySecretProperty = Symbol('secret');
someOtherFoo[mySecretProperty] = myHiddenFunction;
```

Should use when appropriate, likely not needed in our codebase (appropriate use is when decorating foreign objects, etc)

_Better then using obnoxious property names or underscores to try and hide features, but this pattern is not typical in our code base._
### Parameter defaults
```javascript
    function makeNewFoo(foo, addDate=false){
        //...
    }
```

Should use, should come after required params

__Exception:__

Redux's reducer pattern on the frontend breaks this. This is allowable.

_Redux aside, this removes silly code and is sufficiently intuitive for most developers. Optional params should always follow required ones._
### Destructuring
```javascript
    const myFoo = [1, 2];
    const [a, b] = myFoo;
    //a = 1, b = 2
```
May use, be cautious of complexity or magic behavior

_Potential for misuse here but compared to the spread operator not terribly dangerous or unwieldy._

### Spread
```javascript
    const myFoo = [1, 2, 3, 4, 5];
    const [a, b, ...rest] = myFoo;
    //a = 1, b = 2, rest = [3, 4, 5]
```

May use, be cautious of complexity or magic behavior

_Very powerful, but can be difficult to understand. No performance gain, so should only prefer in obvious cases._

### Rest
```javascript
    function myLogger(a, b, ...rest) {
        //...
    }
```
Should use over `Arguments`.

_Arguments is an array-like, and is awkward to work with. Rest is clean and fairly straightforward._

### For...of
```javascript
    const myFoo = 'a string but an array or other iterable is fine too';
    for(letter of myFoo) {
        //...
    }
```
Should use when appropriate. Should not use on hot paths or large collections (11x slower than most loops)

_For of is painfully slow, but handles a lot of awkward cases and is syntactically enjoyable. As long as it's not used on a hot path or large collections the performance hit should not affect us._

### Generators
```javascript
    function* myGenerator() {
        let x = 0;
        while( x < 10) {
            yield x++;
        }
    }
```

May use when appropriate. Beware of magic.

_Generators are a powerful but hard to grasp pattern. They may be very beneficial in some places but need to be used responsibly._
