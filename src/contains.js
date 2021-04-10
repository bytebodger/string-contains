import { allow } from '@toolz/allow';

const Contains = () => {
   allow.setFailureBehavior('warn');
   
   const alphanumerics = (string = '') => {
      allow.aString(string);
      return letters(string) || numbers(string);
   };
   
   const letters = (string = '') => {
      allow.aString(string);
      const regex = /[\p{Letter}\p{Mark}]+$/u;
      return !!string.match(regex);
   };
   
   const lowercaseLetters = (string = '') => {
      allow.aString(string);
      if (!letters(string))
         return false;
      return string.toUpperCase() !== string;
   };
   
   const numbers = (string = '') => {
      allow.aString(string);
      return !!string.match(/[0-9]/);
   };
   
   const onlyAlphanumerics = (string = '', ignoredCharacters = []) => {
      allow.aString(string).anArrayOfStrings(ignoredCharacters);
      let nonAlphanumericFound = false;
      string.split('').forEach(character => {
         if (nonAlphanumericFound || ignoredCharacters.includes(character))
            return;
         nonAlphanumericFound = !letters(character) && !numbers(character);
      });
      return !nonAlphanumericFound;
   };
   
   const onlyLetters = (string = '', ignoredCharacters = []) => {
      allow.aString(string).anArrayOfStrings(ignoredCharacters);
      let nonLetterFound = false;
      string.split('').forEach(character => {
         if (nonLetterFound || ignoredCharacters.includes(character))
            return;
         nonLetterFound = !letters(character);
      });
      return !nonLetterFound;
   };
   
   const onlyLowercaseLetters = (string = '', ignoredCharacters = []) => {
      allow.aString(string).anArrayOfStrings(ignoredCharacters);
      let nonLowercaseLetterFound = false;
      string.split('').forEach(character => {
         if (nonLowercaseLetterFound || ignoredCharacters.includes(character))
            return;
         nonLowercaseLetterFound = !letters(character) || !lowercaseLetters(character);
      });
      return !nonLowercaseLetterFound;
   };
   
   const onlyNumbers = (string = '', ignoredCharacters = []) => {
      allow.aString(string).anArrayOfStrings(ignoredCharacters);
      let nonNumberFound = false;
      string.split('').forEach(character => {
         if (nonNumberFound || ignoredCharacters.includes(character))
            return;
         nonNumberFound = !numbers(character);
      });
      return !nonNumberFound;
   };
   
   const onlyUppercaseLetters = (string = '', ignoredCharacters = []) => {
      allow.aString(string).anArrayOfStrings(ignoredCharacters);
      let nonUppercaseLetterFound = false;
      string.split('').forEach(character => {
         if (nonUppercaseLetterFound || ignoredCharacters.includes(character))
            return;
         nonUppercaseLetterFound = !letters(character) || !uppercaseLetters(character);
      });
      return !nonUppercaseLetterFound;
   };
   
   const specialCharacters = (string = '', ignoredCharacters = []) => {
      allow.aString(string).anArrayOfStrings(ignoredCharacters);
      let specialCharacterFound = false;
      string.split('').forEach(character => {
         if (specialCharacterFound || ignoredCharacters.includes(character))
            return;
         specialCharacterFound = !alphanumerics(character);
      });
      return specialCharacterFound;
   };
   
   const uppercaseLetters = (string = '') => {
      allow.aString(string);
      if (!letters(string))
         return false;
      return string.toLowerCase() !== string;
   };
   
   return {
      alphanumerics,
      letters,
      lowercaseLetters,
      numbers,
      onlyAlphanumerics,
      onlyLetters,
      onlyLowercaseLetters,
      onlyNumbers,
      onlyUppercaseLetters,
      specialCharacters,
      uppercaseLetters,
   };
};

export const contains = Contains();
