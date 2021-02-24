# string-contains

This is a string inspection utility that is mindful of non-English character sets. A common pattern in JavaScript is to test for the presence of alphabetic characters like this:

```javascript
const containsLetters = (string = '') => string.match(/[A-Za-z]/);
```

But the above code is entirely Anglo-centric, because it assumes that the universe of letters consists of the capitals A-Z and the lowercases a-z. In other words, this approach only checks for the presence of letters in the ASCII range.

Even if an application is not specifically designed to be multilingual, it can be exclusionary (and potentially discriminatory) to force names (or other sensitive data) to conform to ASCII standards.

For example, when prompting a user to enter their last name, many English speakers assume that

> Calderón

Is no different than

> Calderon

Or that

> Núñez

Is no different than

> Nunez

But there are many in the Latinx community who feel otherwise.

The same problem often occurs when handling place name - even place _in English-speaking countries_.

For example, there is no city called

> Pinon Hills

in California. But there _is_ a city called

> Piñon Hills

And in Minnesota, there is a city commonly referred to as

> Lindstrom

But its proper spelling is

> Lindström

## Methodology

This utility works by checking characters against a far more expansive set of Regex patterns. These patterns identify the range of _letters_ that exist for outside the normal ASCII range. This, in turn, properly identifies letters from most languages.

## Usage

```javascript
import { contains } from '@toolz/string-contains';

const letters = 'úñóö';

const containsLetters = (string = '') => string.match(/[A-Za-z]/);
containsLetters(letters); // returns FALSE

contains.letters(letters); // returns TRUE
```

## Methods

### .alphanumerics()

`.alphanumerics()` determines whether a string contains _any_ alphanumeric values.

```javascript
const API = {
   arguments: {
      string: {
         required,
         format: 'string',
      },
   },
   returns: Boolean,
}
```

**Examples:**

```javascript
const letters = 'úñóö';
const numbers = '122';
const empty = '';
const specialCharacters = '_*%$';

contains.alphanumerics(letters); // returns TRUE
contains.alphanumerics(numbers); // returns TRUE
contains.alphanumerics(empty); // returns FALSE
contains.alphanumerics(specialCharacters); // returns FALSE
```

### .letters()

`.letters()` determines whether a string contains _any_ letters.

```javascript
const API = {
   arguments: {
      string: {
         required,
         format: 'string',
      },
   },
   returns: Boolean,
}
```

**Examples:**

```javascript
const pi = '3.14';
const russian = 'быстрыйленивыйлис';
const english = 'howdy';

contains.letters(pi); // returns FALSE
contains.letters(russian); // returns TRUE
contains.letters(english); // returns TRUE
```

### .lowercaseLetters()

`.lowercaseLetters()` determines whether a string contains _any_ lowercase letters

```javascript
const API = {
   arguments: {
      string: {
         required,
         format: 'string',
      },
   },
   returns: Boolean,
}
```

**Examples:**

```javascript
const uppercaseRussian = 'БЫСТРЫЙЛЕНИВЫЙЛИС';
const mixedCaseEnglish = 'Bill Joe Henry';
const pi = '3.14';

contains.lowercaseLetters(uppercaseRussian); // return FALSE
contains.lowercaseLetters(mixedCaseEnglish); // return TRUE
contains.lowercaseLetters(pi); // returns FALSE
```

### .numbers()

`.numbers()` determines whether a string contains _any_ numbers

```javascript
const API = {
   arguments: {
      string: {
         required,
         format: 'string',
      },
   },
   returns: Boolean,
}
```

**Examples:**

```javascript
const pi = '3.14';
const russian = 'быстрыйленивыйлис';
const english = 'day number one';

contains.numbers(pi); // returns TRUE
contains.numbers(russian); // returns FALSE
contains.numbers(english); // returns FALSE
```

