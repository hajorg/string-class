/* eslint no-unused-expressions: 0 */
/* eslint amd:true */
const chai = require('chai');
const expect = require('chai').expect;
require('../src/string.js');

const deepEqual = chai.deepEqual;

describe('String class', () => {
  describe('hasVowel', () => {
    it('should return true if a vowel is present in the string', () => {
      expect('boy'.hasVowels()).to.be.true;
    });

    it('should return false if a vowel is not present in the string', () => {
      expect('fly'.hasVowels()).to.be.false;
    });

    it('should return true for strings that has vowels irrespective of the case', () => {
      expect('AndEla'.hasVowels()).to.be.true;
      expect('Apple'.hasVowels()).to.be.true;
    });
  });

  describe('toUpper', () => {
    it('should return uppercase for all characters in a string', () => {
      expect('boy'.toUpper()).to.equal('BOY');
      expect('Event'.toUpper()).to.equal('EVENT');
    });

    it('should convert strings with title case to uppercase', () => {
      expect('David'.toUpper()).to.equal('DAVID');
      expect('Lady'.toUpper()).to.equal('LADY');
    });
  });

  describe('toLower', () => {
    it('should return lowercase for all characters in a string', () => {
      expect('BOY'.toLower()).to.equal('boy');
    });

    it('should return lowercase for all characters in a string', () => {
      expect('Goodison PARK'.toLower()).to.equal('goodison park');
    });
  });

  describe('ucFirst', () => {
    it('should return uppercase for first letter in a string', () => {
      expect('boy'.ucFirst()).to.equal('Boy');
    });
  });

  describe('isQuestion', () => {
    it('should return true for a valid question', () => {
      expect('Am I a boy? '.isQuestion()).to.be.true;
    });

    it('should return false for an invalid question', () => {
      expect('Is there wood? in the forest'.isQuestion()).to.be.false;
    });
  });

  describe('words', () => {
    it('should return words present in a string', () => {
      expect('Am I a boy?'.words()).to.deep.equal(['Am', 'I', 'a', 'boy']);
      expect('Is there woods? in the forest'.words()).eql(['Is', 'there', 'woods', 'in', 'the', 'forest']);
      expect('Life is good'.words()).to.be.an('array');
    });
  });

  describe('wordCount', () => {
    it('should return word count in a string', () => {
      expect('Am I a boy?'.wordCount()).equal(4);
      expect('Is there woods? in the forest'.wordCount()).eql(6);
    });
  });

  describe('toCurrency', () => {
    it('should return a number in a currency format', () => {
      expect('11111'.toCurrency()).equal('11,111.00');
      expect('11111.11'.toCurrency()).equal('11,111.11');
      expect('123456789'.toCurrency()).equal('123,456,789.00');
    });
    it('should return a message if user input is invalid', () => {
      expect('1111ty'.toCurrency()).equal('invalid input');
    });
  });

  describe('fromCurrency', () => {
    it('should return a number in a currency format', () => {
      expect('11,111.11'.fromCurrency()).equal(11111.11);
      expect('123,456,789'.fromCurrency()).equal(123456789);
    });
    it('should return a message if user input is invalid', () => {
      expect('1111ty'.fromCurrency()).equal('invalid input');
    });
  });

  describe('inverseCase', () => {
    it('should returns each letter in the string as an inverse of its current case', () => {
      expect('Mr. Ben'.inverseCase()).equal('mR. bEN');
      expect('I am Invisible 10 times'.inverseCase()).equal('i AM iNVISIBLE 10 TIMES');
    });
  });

  describe('alternatingCase', () => {
    it('should return the letters in alternating cases', () => {
      expect('Mr. Ben'.alternatingCase()).equal('mR. bEn');
      expect('Onomatopoeia'.alternatingCase()).equal('oNoMaToPoEiA');
    });
  });

  describe('getMiddle', () => {
    it('should return the character in the middle of the string', () => {
      expect('reads'.getMiddle()).equal('a');
    });

    it('should return the characters in the middle of the string', () => {
      expect('read'.getMiddle()).equal('ea');
    });
  });

  describe('numberWords', () => {
    it('should return the numbers in words', () => {
      expect('325'.numberWords()).equal('three two five');
      expect('98'.numberWords()).equal('nine eight');
    });
  });

  describe('isDigit', () => {
    it('should return true if the string is a digit', () => {
      expect('3'.isDigit()).equal(true);
    });

    it('should return false if the string is not a digit', () => {
      expect('98'.isDigit()).equal(false);
    });
  });

  describe('doubleCheck', () => {
    it('should return true if a string contains double characters(including whitespace character)', () => {
      expect('aa'.doubleCheck()).equal(true);
      expect('!!'.doubleCheck()).equal(true);
    });

    it('should return false if a string does not contain double character', () => {
      expect('abcde'.doubleCheck()).equal(false);
    });
  });
});
