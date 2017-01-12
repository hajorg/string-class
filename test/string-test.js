/* eslint no-unused-expressions: 0 */
/* eslint amd:true */
const chai = require('chai');
const expect = require('chai').expect;
require('../src/string.js');

describe('String class', () => {
  describe('hasVowel', () => {
    it('should return true if a vowel is present in the string', () => {
      const word = 'boy';
      expect(word.hasVowels()).to.be.true;
    });

    it('should return false if a vowel is not present in the string', () => {
      const word = 'fly';
      expect(word.hasVowels()).to.be.false;
    });

    it(`should return true for strings that
     has vowels irrespective of the case`, () => {
      const word = 'AndEla';
      const word2 = 'Apple';
      expect(word.hasVowels()).to.be.true;
      expect(word2.hasVowels()).to.be.true;
    });
  });

  describe('toUpper', () => {
    it('should return uppercase for all characters in a string', () => {
      const word = 'boy';
      const word2 = 'Event';
      expect(word.toUpper()).to.equal('BOY');
      expect(word2.toUpper()).to.equal('EVENT');
    });

    it('should convert strings with title case to uppercase', () => {
      const word = 'David';
      const word2 = 'Lady';
      expect(word.toUpper()).to.equal('DAVID');
      expect(word2.toUpper()).to.equal('LADY');
    });
  });

  describe('toLower', () => {
    it('should return lowercase for all characters in a string', () => {
      const word = 'BOY';
      const word2 = 'Goodison PARK';
      expect(word.toLower()).to.equal('boy');
      expect(word2.toLower()).to.equal('goodison park');
    });
  });

  describe('ucFirst', () => {
    const word = 'boy';
    it('should return uppercase for first letter in a string', () => {
      expect(word.ucFirst()).to.equal('Boy');
    });
  });

  describe('isQuestion', () => {
    it('should return true for a valid question', () => {
      const word = 'Am I a boy? ';
      expect(word.isQuestion()).to.be.true;
    });

    it('should return false for an invalid question', () => {
      const word = 'Is there wood? in the forest';
      expect(word.isQuestion()).to.be.false;
    });
  });

  describe('words', () => {
    it('should return words present in a string', () => {
      const word = 'Am I a boy?';
      expect(word.words()).to.deep.equal(['Am', 'I', 'a', 'boy']);
      expect(word.words()).to.be.an('array');
    });
  });

  describe('wordCount', () => {
    it('should return word count in a string', () => {
      const word = 'Am I a boy?';
      const word2 = 'Is there woods? in the forest';
      expect(word.wordCount()).equal(4);
      expect(word2.wordCount()).eql(6);
    });
  });

  describe('toCurrency', () => {
    it('should return a number in a currency format', () => {
      const currency = '11111';
      const currency2 = '11111.11';
      const currency3 = '123456789';
      expect(currency.toCurrency()).equal('11,111.00');
      expect(currency2.toCurrency()).equal('11,111.11');
      expect(currency3.toCurrency()).equal('123,456,789.00');
    });
    it('should throw an error if user input is invalid', () => {
      const currency = '1111ty';
      expect(() => currency.toCurrency()).to.throw('invalid input');
    });
  });

  describe('fromCurrency', () => {
    it('should return a number in a currency format', () => {
      const currency = '11,111.11';
      const currency2 = '123,456,789';
      expect(currency.fromCurrency()).equal(11111.11);
      expect(currency2.fromCurrency()).equal(123456789);
    });
    it('should throw an error if user input is invalid', () => {
      const currency = '1111ty';
      expect(() => currency.fromCurrency()).to.throw('invalid input');
    });
  });

  describe('inverseCase', () => {
    it(`should returns each letter in the string
     as an inverse of its current case`, () => {
      const word = 'Mr. Ben';
      const word2 = 'I am Invisible 10 times';
      expect(word.inverseCase()).equal('mR. bEN');
      expect(word2.inverseCase()).equal('i AM iNVISIBLE 10 TIMES');
    });
  });

  describe('alternatingCase', () => {
    it('should return the letters in alternating cases', () => {
      const word = 'Mr. Ben';
      const word2 = 'Onomatopoeia';
      expect(word.alternatingCase()).equal('mR. bEn');
      expect(word2.alternatingCase()).equal('oNoMaToPoEiA');
    });
  });

  describe('getMiddle', () => {
    it('should return the character in the middle of the string', () => {
      const word = 'reads';
      expect(word.getMiddle()).equal('a');
    });

    it('should return the characters in the middle of the string', () => {
      const word = 'read';
      expect(word.getMiddle()).equal('ea');
    });
  });

  describe('numberWords', () => {
    it('should return the numbers in words', () => {
      const number = '325';
      const number2 = '98';
      const number3 = 'I am 8';
      expect(number.numberWords()).equal('three two five');
      expect(number2.numberWords()).equal('nine eight');
      expect(number3.numberWords()).equal('eight');
    });
  });

  describe('isDigit', () => {
    it('should return true if the string is a digit', () => {
      const number = '3';
      expect(number.isDigit()).equal(true);
    });

    it('should return false if the string is not a digit', () => {
      const number = '98';
      expect(number.isDigit()).equal(false);
    });
  });

  describe('doubleCheck', () => {
    it(`should return true if a string contains
     double characters(including whitespace character)`, () => {
      const characters = 'aa';
      const characters2 = '!!';
      const characters3 = '  ';
      expect(characters.doubleCheck()).equal(true);
      expect(characters2.doubleCheck()).equal(true);
      expect(characters3.doubleCheck()).equal(true);
    });

    it(`should return false if a string
     does not contain double character`, () => {
      const characters = 'abcde';
      expect(characters.doubleCheck()).equal(false);
    });
  });
});
