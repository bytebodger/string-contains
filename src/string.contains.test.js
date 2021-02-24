import { contains } from './contains';

const decimal = '3.14';
const emptyString = '';
const englishLetters = 'quick lazy fox';
const formattedDecimal = '32,991.41';
const negativeFormattedDecimal = '-32,991.41';
const negativeNumber = '-42';
const numbers = '912349';
const onlyEnglishLowercaseLetters = 'quicklazyfox';
const onlyEnglishMixedcaseLetters = 'Quicklazyfox';
const onlyEnglishUppercaseLetters = 'QUICKLAZYFOX';
const onlyRussianLowercaseLetters = 'быстрыйленивыйлис';
const onlyRussianMixedcaseLetters = 'Быстраялениваялиса';
const onlyRussianUppercaseLetters = 'БЫСТРЫЙЛЕНИВЫЙЛИС';
const russianLetters = 'быстрый ленивый лис';
const specialCharacters = `!@#$%^&*()+_{}[]|\\:";'<>?,./`;

// alphanumerics()

test('alphanumerics() returns TRUE for any value with alphanumerics', () => {
   expect(contains.alphanumerics(decimal)).toEqual(true);
   expect(contains.alphanumerics(englishLetters)).toEqual(true);
   expect(contains.alphanumerics(formattedDecimal)).toEqual(true);
   expect(contains.alphanumerics(negativeFormattedDecimal)).toEqual(true);
   expect(contains.alphanumerics(negativeNumber)).toEqual(true);
   expect(contains.alphanumerics(numbers)).toEqual(true);
   expect(contains.alphanumerics(numbers)).toEqual(true);
   expect(contains.alphanumerics(onlyEnglishLowercaseLetters)).toEqual(true);
   expect(contains.alphanumerics(onlyEnglishMixedcaseLetters)).toEqual(true);
   expect(contains.alphanumerics(onlyEnglishUppercaseLetters)).toEqual(true);
   expect(contains.alphanumerics(onlyRussianLowercaseLetters)).toEqual(true);
   expect(contains.alphanumerics(onlyRussianMixedcaseLetters)).toEqual(true);
   expect(contains.alphanumerics(onlyRussianUppercaseLetters)).toEqual(true);
   expect(contains.alphanumerics(russianLetters)).toEqual(true);
});

test('alphanumerics() returns FALSE for any value that contains no alphanumerics', () => {
   expect(contains.alphanumerics(emptyString)).toEqual(false);
   expect(contains.alphanumerics(specialCharacters)).toEqual(false);
});

// letters()

test('letters() returns TRUE for any value with letters', () => {
   expect(contains.letters(englishLetters)).toEqual(true);
   expect(contains.letters(onlyEnglishLowercaseLetters)).toEqual(true);
   expect(contains.letters(onlyEnglishMixedcaseLetters)).toEqual(true);
   expect(contains.letters(onlyEnglishUppercaseLetters)).toEqual(true);
   expect(contains.letters(onlyRussianLowercaseLetters)).toEqual(true);
   expect(contains.letters(onlyRussianMixedcaseLetters)).toEqual(true);
   expect(contains.letters(onlyRussianUppercaseLetters)).toEqual(true);
   expect(contains.letters(russianLetters)).toEqual(true);
});

test('letters() returns FALSE for any value that contains no letters', () => {
   expect(contains.letters(decimal)).toEqual(false);
   expect(contains.letters(emptyString)).toEqual(false);
   expect(contains.letters(formattedDecimal)).toEqual(false);
   expect(contains.letters(negativeFormattedDecimal)).toEqual(false);
   expect(contains.letters(negativeNumber)).toEqual(false);
   expect(contains.letters(numbers)).toEqual(false);
   expect(contains.letters(specialCharacters)).toEqual(false);
});

// lowercaseLetters()

test('lowercaseLetters() returns TRUE for any value with lowercase letters', () => {
   expect(contains.lowercaseLetters(englishLetters)).toEqual(true);
   expect(contains.lowercaseLetters(onlyEnglishLowercaseLetters)).toEqual(true);
   expect(contains.lowercaseLetters(onlyEnglishMixedcaseLetters)).toEqual(true);
   expect(contains.lowercaseLetters(onlyRussianLowercaseLetters)).toEqual(true);
   expect(contains.lowercaseLetters(onlyRussianMixedcaseLetters)).toEqual(true);
   expect(contains.lowercaseLetters(russianLetters)).toEqual(true);
});

test('lowercaseLetters() returns FALSE for any value that contains no lowercase letters', () => {
   expect(contains.lowercaseLetters(decimal)).toEqual(false);
   expect(contains.lowercaseLetters(emptyString)).toEqual(false);
   expect(contains.lowercaseLetters(formattedDecimal)).toEqual(false);
   expect(contains.lowercaseLetters(negativeFormattedDecimal)).toEqual(false);
   expect(contains.lowercaseLetters(negativeNumber)).toEqual(false);
   expect(contains.lowercaseLetters(numbers)).toEqual(false);
   expect(contains.lowercaseLetters(onlyEnglishUppercaseLetters)).toEqual(false);
   expect(contains.lowercaseLetters(onlyRussianUppercaseLetters)).toEqual(false);
   expect(contains.lowercaseLetters(specialCharacters)).toEqual(false);
});

// numbers()

test('numbers() returns TRUE for any value with numbers', () => {
   expect(contains.numbers(decimal)).toEqual(true);
   expect(contains.numbers(formattedDecimal)).toEqual(true);
   expect(contains.numbers(negativeFormattedDecimal)).toEqual(true);
   expect(contains.numbers(negativeNumber)).toEqual(true);
   expect(contains.numbers(numbers)).toEqual(true);
});

test('numbers() returns FALSE for any value that contains no numbers', () => {
   expect(contains.numbers(emptyString)).toEqual(false);
   expect(contains.numbers(englishLetters)).toEqual(false);
   expect(contains.numbers(onlyEnglishLowercaseLetters)).toEqual(false);
   expect(contains.numbers(onlyEnglishMixedcaseLetters)).toEqual(false);
   expect(contains.numbers(onlyEnglishUppercaseLetters)).toEqual(false);
   expect(contains.numbers(onlyRussianLowercaseLetters)).toEqual(false);
   expect(contains.numbers(onlyRussianMixedcaseLetters)).toEqual(false);
   expect(contains.numbers(onlyRussianUppercaseLetters)).toEqual(false);
   expect(contains.numbers(russianLetters)).toEqual(false);
   expect(contains.numbers(specialCharacters)).toEqual(false);
});

// onlyAlphanumerics()

test('onlyAlphanumerics() returns TRUE for any value that contains only alphanumerics', () => {
   expect(contains.onlyAlphanumerics(emptyString)).toEqual(true);
   expect(contains.onlyAlphanumerics(numbers)).toEqual(true);
   expect(contains.onlyAlphanumerics(onlyEnglishLowercaseLetters)).toEqual(true);
   expect(contains.onlyAlphanumerics(onlyEnglishMixedcaseLetters)).toEqual(true);
   expect(contains.onlyAlphanumerics(onlyEnglishUppercaseLetters)).toEqual(true);
   expect(contains.onlyAlphanumerics(onlyRussianLowercaseLetters)).toEqual(true);
   expect(contains.onlyAlphanumerics(onlyRussianMixedcaseLetters)).toEqual(true);
   expect(contains.onlyAlphanumerics(onlyRussianUppercaseLetters)).toEqual(true);
});

test('onlyAlphanumerics() returns TRUE when non-alphanumerics are passed in ignoredCharacters[]', () => {
   expect(contains.onlyAlphanumerics(decimal, [' ', '.', ',', '-'])).toEqual(true);
   expect(contains.onlyAlphanumerics(englishLetters, [' ', '.', ',', '-'])).toEqual(true);
   expect(contains.onlyAlphanumerics(formattedDecimal, [' ', '.', ',', '-'])).toEqual(true);
   expect(contains.onlyAlphanumerics(negativeFormattedDecimal, [' ', '.', ',', '-'])).toEqual(true);
   expect(contains.onlyAlphanumerics(negativeNumber, [' ', '.', ',', '-'])).toEqual(true);
   expect(contains.onlyAlphanumerics(russianLetters, [' ', '.', ',', '-'])).toEqual(true);
});

test('onlyAlphanumerics() returns FALSE for any value that contains any non-alphanumeric', () => {
   expect(contains.onlyAlphanumerics(decimal)).toEqual(false);
   expect(contains.onlyAlphanumerics(englishLetters)).toEqual(false);
   expect(contains.onlyAlphanumerics(formattedDecimal)).toEqual(false);
   expect(contains.onlyAlphanumerics(negativeFormattedDecimal)).toEqual(false);
   expect(contains.onlyAlphanumerics(negativeNumber)).toEqual(false);
   expect(contains.onlyAlphanumerics(russianLetters)).toEqual(false);
   expect(contains.onlyAlphanumerics(specialCharacters)).toEqual(false);
});

// onlyLetters()

test('onlyLetters() returns TRUE for any value that contains only letters', () => {
   expect(contains.onlyLetters(emptyString)).toEqual(true);
   expect(contains.onlyLetters(onlyEnglishLowercaseLetters)).toEqual(true);
   expect(contains.onlyLetters(onlyEnglishMixedcaseLetters)).toEqual(true);
   expect(contains.onlyLetters(onlyEnglishUppercaseLetters)).toEqual(true);
   expect(contains.onlyLetters(onlyRussianLowercaseLetters)).toEqual(true);
   expect(contains.onlyLetters(onlyRussianMixedcaseLetters)).toEqual(true);
   expect(contains.onlyLetters(onlyRussianUppercaseLetters)).toEqual(true);
});

test('onlyLetters() returns TRUE when non-letters are passed in ignoredCharacters[]', () => {
   expect(contains.onlyLetters(englishLetters, [' '])).toEqual(true);
   expect(contains.onlyLetters(russianLetters, [' '])).toEqual(true);
});

test('onlyLetters() returns FALSE for any value that contains any non-letter', () => {
   expect(contains.onlyLetters(decimal)).toEqual(false);
   expect(contains.onlyLetters(englishLetters)).toEqual(false);
   expect(contains.onlyLetters(formattedDecimal)).toEqual(false);
   expect(contains.onlyLetters(negativeFormattedDecimal)).toEqual(false);
   expect(contains.onlyLetters(negativeNumber)).toEqual(false);
   expect(contains.onlyLetters(numbers)).toEqual(false);
   expect(contains.onlyLetters(russianLetters)).toEqual(false);
   expect(contains.onlyLetters(specialCharacters)).toEqual(false);
});

// onlyLowercaseLetters()

test('onlyLowercaseLetters() returns TRUE for any value that contains only lowercase letters', () => {
   expect(contains.onlyLowercaseLetters(emptyString)).toEqual(true);
   expect(contains.onlyLowercaseLetters(onlyEnglishLowercaseLetters)).toEqual(true);
   expect(contains.onlyLowercaseLetters(onlyRussianLowercaseLetters)).toEqual(true);
});

test('onlyLowercaseLetters() returns TRUE when non-lowercase letters are passed in ignoredCharacters[]', () => {
   expect(contains.onlyLowercaseLetters(englishLetters, [' '])).toEqual(true);
   expect(contains.onlyLowercaseLetters(russianLetters, [' '])).toEqual(true);
});

test('onlyLowercaseLetters() returns FALSE for any value that contains any non-lowercase letter or non-letter', () => {
   expect(contains.onlyLowercaseLetters(decimal)).toEqual(false);
   expect(contains.onlyLowercaseLetters(englishLetters)).toEqual(false);
   expect(contains.onlyLowercaseLetters(formattedDecimal)).toEqual(false);
   expect(contains.onlyLowercaseLetters(negativeFormattedDecimal)).toEqual(false);
   expect(contains.onlyLowercaseLetters(negativeNumber)).toEqual(false);
   expect(contains.onlyLowercaseLetters(numbers)).toEqual(false);
   expect(contains.onlyLowercaseLetters(onlyEnglishMixedcaseLetters)).toEqual(false);
   expect(contains.onlyLowercaseLetters(onlyEnglishUppercaseLetters)).toEqual(false);
   expect(contains.onlyLowercaseLetters(onlyRussianMixedcaseLetters)).toEqual(false);
   expect(contains.onlyLowercaseLetters(onlyRussianUppercaseLetters)).toEqual(false);
   expect(contains.onlyLowercaseLetters(russianLetters)).toEqual(false);
   expect(contains.onlyLowercaseLetters(specialCharacters)).toEqual(false);
});

// onlyNumbers()

test('onlyNumbers() returns TRUE for any value that contains only numbers', () => {
   expect(contains.onlyNumbers(emptyString)).toEqual(true);
   expect(contains.onlyNumbers(numbers)).toEqual(true);
});

test('onlyNumbers() returns TRUE when non-numbers are passed in ignoredCharacters[]', () => {
   expect(contains.onlyNumbers(decimal, ['.', ',', '-'])).toEqual(true);
   expect(contains.onlyNumbers(formattedDecimal, ['.', ',', '-'])).toEqual(true);
   expect(contains.onlyNumbers(negativeFormattedDecimal, ['.', ',', '-'])).toEqual(true);
   expect(contains.onlyNumbers(negativeNumber, ['.', ',', '-'])).toEqual(true);
});

test('onlyNumbers() returns FALSE for any value that contains any non-number', () => {
   expect(contains.onlyNumbers(decimal)).toEqual(false);
   expect(contains.onlyNumbers(englishLetters)).toEqual(false);
   expect(contains.onlyNumbers(formattedDecimal)).toEqual(false);
   expect(contains.onlyNumbers(negativeFormattedDecimal)).toEqual(false);
   expect(contains.onlyNumbers(negativeNumber)).toEqual(false);
   expect(contains.onlyNumbers(onlyEnglishLowercaseLetters)).toEqual(false);
   expect(contains.onlyNumbers(onlyEnglishMixedcaseLetters)).toEqual(false);
   expect(contains.onlyNumbers(onlyEnglishUppercaseLetters)).toEqual(false);
   expect(contains.onlyNumbers(onlyRussianLowercaseLetters)).toEqual(false);
   expect(contains.onlyNumbers(onlyRussianMixedcaseLetters)).toEqual(false);
   expect(contains.onlyNumbers(onlyRussianUppercaseLetters)).toEqual(false);
   expect(contains.onlyNumbers(russianLetters)).toEqual(false);
   expect(contains.onlyNumbers(specialCharacters)).toEqual(false);
});

// onlyUppercaseLetters()

test('onlyUppercaseLetters() returns TRUE for any value that contains only uppercase letters', () => {
   expect(contains.onlyUppercaseLetters(emptyString)).toEqual(true);
   expect(contains.onlyUppercaseLetters(onlyEnglishUppercaseLetters)).toEqual(true);
   expect(contains.onlyUppercaseLetters(onlyRussianUppercaseLetters)).toEqual(true);
});

test('onlyUppercaseLetters() returns FALSE for any value that contains any non-uppercase letter or non-letter', () => {
   expect(contains.onlyUppercaseLetters(decimal)).toEqual(false);
   expect(contains.onlyUppercaseLetters(englishLetters)).toEqual(false);
   expect(contains.onlyUppercaseLetters(formattedDecimal)).toEqual(false);
   expect(contains.onlyUppercaseLetters(negativeFormattedDecimal)).toEqual(false);
   expect(contains.onlyUppercaseLetters(negativeNumber)).toEqual(false);
   expect(contains.onlyUppercaseLetters(numbers)).toEqual(false);
   expect(contains.onlyUppercaseLetters(onlyEnglishLowercaseLetters)).toEqual(false);
   expect(contains.onlyUppercaseLetters(onlyEnglishMixedcaseLetters)).toEqual(false);
   expect(contains.onlyUppercaseLetters(onlyRussianLowercaseLetters)).toEqual(false);
   expect(contains.onlyUppercaseLetters(onlyRussianMixedcaseLetters)).toEqual(false);
   expect(contains.onlyUppercaseLetters(russianLetters)).toEqual(false);
   expect(contains.onlyUppercaseLetters(specialCharacters)).toEqual(false);
});

// specialCharacters()

test('specialCharacters() returns TRUE for any value containing a non-alphanumeric character', () => {
   expect(contains.specialCharacters(decimal)).toEqual(true);
   expect(contains.specialCharacters(englishLetters)).toEqual(true);
   expect(contains.specialCharacters(formattedDecimal)).toEqual(true);
   expect(contains.specialCharacters(negativeFormattedDecimal)).toEqual(true);
   expect(contains.specialCharacters(negativeNumber)).toEqual(true);
   expect(contains.specialCharacters(specialCharacters)).toEqual(true);
});

test('specialCharacters() returns FALSE when non-special characters are passed in ignoredCharacters[]', () => {
   expect(contains.specialCharacters(decimal, ['.'])).toEqual(false);
   expect(contains.specialCharacters(englishLetters, [' '])).toEqual(false);
   expect(contains.specialCharacters(negativeNumber, ['-'])).toEqual(false);
});

test('specialCharacters() returns FALSE for any value that contains no non-alphanumerics', () => {
   expect(contains.specialCharacters(emptyString)).toEqual(false);
   expect(contains.specialCharacters(numbers)).toEqual(false);
   expect(contains.specialCharacters(onlyEnglishLowercaseLetters)).toEqual(false);
   expect(contains.specialCharacters(onlyEnglishMixedcaseLetters)).toEqual(false);
   expect(contains.specialCharacters(onlyEnglishUppercaseLetters)).toEqual(false);
   expect(contains.specialCharacters(onlyRussianLowercaseLetters)).toEqual(false);
   expect(contains.specialCharacters(onlyRussianMixedcaseLetters)).toEqual(false);
   expect(contains.specialCharacters(onlyRussianUppercaseLetters)).toEqual(false);
});

// uppercaseLetters()

test('uppercaseLetters() returns TRUE for any value with uppercase letters', () => {
   expect(contains.uppercaseLetters(onlyEnglishMixedcaseLetters)).toEqual(true);
   expect(contains.uppercaseLetters(onlyEnglishUppercaseLetters)).toEqual(true);
   expect(contains.uppercaseLetters(onlyRussianMixedcaseLetters)).toEqual(true);
   expect(contains.uppercaseLetters(onlyRussianUppercaseLetters)).toEqual(true);
});

test('uppercaseLetters() returns FALSE for any value that contains no uppercase letters', () => {
   expect(contains.uppercaseLetters(decimal)).toEqual(false);
   expect(contains.uppercaseLetters(emptyString)).toEqual(false);
   expect(contains.uppercaseLetters(englishLetters)).toEqual(false);
   expect(contains.uppercaseLetters(formattedDecimal)).toEqual(false);
   expect(contains.uppercaseLetters(negativeFormattedDecimal)).toEqual(false);
   expect(contains.uppercaseLetters(negativeNumber)).toEqual(false);
   expect(contains.uppercaseLetters(numbers)).toEqual(false);
   expect(contains.uppercaseLetters(onlyEnglishLowercaseLetters)).toEqual(false);
   expect(contains.uppercaseLetters(onlyRussianLowercaseLetters)).toEqual(false);
   expect(contains.uppercaseLetters(russianLetters)).toEqual(false);
   expect(contains.uppercaseLetters(specialCharacters)).toEqual(false);
});
