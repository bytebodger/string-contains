# string-contains

This is a string inspection utility that is mindful of non-English character sets. A common pattern in JavaScript is to test for the presence of alphabetic characters like this:

```javascript
const containsOnlyLetters = (string = '') => !!string.match(/^[a-zA-Z]+$/);
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

The same problem often occurs when handling place names - even places _in English-speaking countries_.

For example, there is no city called

> Pinon Hills

in California. But there _is_ a city called

> Piñon Hills

And in Minnesota, there is a city commonly referred to as

> Lindstrom

But its proper spelling is

> Lindström

English speakers may assume that there is no harm in forcing someone with the name of "Núñez" to enter their name as "Nunez". But aside from being potentially discriminatory, these discrepancies can have systemic effects.

For example, it is perfectly valid (albeit, rare) to have non-ASCII values in an email address. So if someone's email address is núñez@somedomain.com, and your validation scripts reject any email addresses with non-ASCII letters, the user would be faced with the choice to either A) enter a non-working email, just to pass the validation, or B) abandon the form altogether.

Similarly, non-ASCII characters can absolutely be in domain names. So restricing non-ASCII characters may keep you from collecting the user's email address or the URL for their website.

## Methodology

This utility works by checking characters against a far more expansive set of Regex patterns. These patterns identify the range of _letters_ that exist far outside the normal ASCII range. This, in turn, properly identifies letters from most languages.

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

`.lowercaseLetters()` determines whether a string contains _any_ lowercase letters.

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

contains.lowercaseLetters(uppercaseRussian); // returns FALSE
contains.lowercaseLetters(mixedCaseEnglish); // returns TRUE
contains.lowercaseLetters(pi); // returns FALSE
```

### .numbers()

`.numbers()` determines whether a string contains _any_ numbers.

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

### .onlyAlphanumerics()

`.onlyAlphanumerics()` determines whether a string contains _only_ alphanumeric values.

```javascript
const API = {
   arguments: {
      string: {
         required,
         format: 'string',
      },
      ignoredCharacters: {
         optional,
         format: 'array of strings',
      },
   },
   returns: Boolean,
}
```

**Examples:**

```javascript
const pi = '3.14';
const russian = 'быстрыйленивыйлис';
const english = 'day number 1';

contains.onlyAlphanumerics(pi); // returns FALSE
contains.onlyAlphanumerics(russian); // returns TRUE
contains.onlyAlphanumerics(english); // returns FALSE (because of the spaces)
contains.onlyAlphanumerics(pi, ['.']); // returns TRUE
contains.onlyAlphanumerics(english, [' ']); // returns TRUE
```

### .onlyLetters()

`.onlyLetters()` determines whether a string contains _only_ letters.

```javascript
const API = {
   arguments: {
      string: {
         required,
         format: 'string',
      },
      ignoredCharacters: {
         optional,
         format: 'array of strings',
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

contains.onlyLetters(pi); // returns FALSE
contains.onlyLetters(russian); // returns TRUE
contains.onlyLetters(english); // returns FALSE (because of the spaces)
contains.onlyLetters(pi, ['.']); // returns FALSE
contains.onlyLetters(english, [' ']); // returns TRUE
```

### .onlyLowercaseLetters()

`.onlyLowercaseLetters()` determines whether a string contains _only_ lowercase letters.

```javascript
const API = {
   arguments: {
      string: {
         required,
         format: 'string',
      },
      ignoredCharacters: {
         optional,
         format: 'array of strings',
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

contains.onlyLowercaseLetters(pi); // returns FALSE
contains.onlyLowercaseLetters(russian); // returns FALSE
contains.onlyLowercaseLetters(english); // returns FALSE (because of the spaces)
contains.onlyLowercaseLetters(pi, ['.']); // returns FALSE
contains.onlyLowercaseLetters(english, [' ']); // returns TRUE
```

### .onlyNumbers()

`.onlyNumbers()` determines whether a string contains _only_ numbers.

```javascript
const API = {
   arguments: {
      string: {
         required,
         format: 'string',
      },
      ignoredCharacters: {
         optional,
         format: 'array of strings',
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

contains.onlyNumbers(pi); // returns FALSE
contains.onlyNumbers(russian); // returns FALSE
contains.onlyNumbers(english); // returns FALSE (because of the spaces)
contains.onlyNumbers(pi, ['.']); // returns TRUE
contains.onlyNumbers(english, [' ']); // returns FALSE
```

### .onlyUppercaseLetters()

`.onlyUppercaseLetters()` determines whether a string contains _only_ uppercase letters.

```javascript
const API = {
   arguments: {
      string: {
         required,
         format: 'string',
      },
      ignoredCharacters: {
         optional,
         format: 'array of strings',
      },
   },
   returns: Boolean,
}
```

**Examples:**

```javascript
const pi = '3.14';
const russian = 'быстрыйленивыйлис';
const english = 'DAY ONE';

contains.onlyUppercaseLetters(pi); // returns FALSE
contains.onlyUppercaseLetters(russian); // returns FALSE
contains.onlyUppercaseLetters(english); // returns FALSE (because of the space)
contains.onlyUppercaseLetters(pi, ['.']); // returns FALSE
contains.onlyUppercaseLetters(english, [' ']); // returns TRUE
```

### .specialCharacters()

`.specialCharacters()` determines whether a string contains _any_ nonalphanumeric values.

```javascript
const API = {
   arguments: {
      string: {
         required,
         format: 'string',
      },
      ignoredCharacters: {
         optional,
         format: 'array of strings',
      },
   },
   returns: Boolean,
}
```

**Examples:**

```javascript
const pi = '3.14';
const russian = 'быстрыйленивыйлис';
const english = 'DAY ONE';

contains.specialCharacters(pi); // returns TRUE
contains.specialCharacters(russian); // returns FALSE
contains.specialCharacters(english); // returns TRUE (because of the space)
contains.specialCharacters(pi, ['.']); // returns FALSE
contains.specialCharacters(english, [' ']); // returns FALSE
```

### .uppercaseLetters()

`.uppercaseLetters()` determines whether a string contains _any_ uppercase letters.

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

contains.uppercaseLetters(uppercaseRussian); // returns TRUE
contains.uppercaseLetters(mixedCaseEnglish); // returns TRUE
contains.uppercaseLetters(pi); // returns FALSE
```
