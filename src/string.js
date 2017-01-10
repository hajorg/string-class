const StringExtension = {
  /**
   * Returns true if the string contains vowels.
   * @return {Boolean}
   */
  hasVowels() {
    return /[aeiou]/i.test(this);
  },

   /**
   * Returns the String in question but with all characters in upper cases as applicable.
   * @return {String}
   */
  toUpper() {
    return this.replace(/[a-z]/g,
      char => String.fromCharCode(char.charCodeAt(0) - 32));
  },

  /**
  * Returns the String passed as lower cases
  * @return {String}
  */
  toLower() {
    return this.replace(/[A-Z]/g,
      char => String.fromCharCode(char.charCodeAt(0) + 32));
  },

  /**
   * converts strings to title case
   * @return {String} string that has been converted to title case
   */
  ucFirst() {
    return this.replace(/^(.)/, this[0].toUpper());
  },

  /**
   * Checks if the string is a question
   * @return {Boolean}
   */
  isQuestion() {
    return /\?$/.test(this.trim());
  },

  /**
   * checks for words in a string
   * @return {Array}
   */
  words() {
    return this.match(/\w+/g);
  },

  /**
   * Returns the number of words in the string
   * @return {Number}
   */
  wordCount() {
    return this.words().length;
  },

  /**
   * Returns a currency representation of the String
   * @return {String}
   */
  toCurrency() {
    try {
      const number = Number(this).toFixed(2);
      if (isNaN(number)) throw new Error('invalid input');
      return number.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    } catch (err) {
      return err.message;
    }
  },

  /**
   * Returns a number representation of the Currency String
   * @return {String}
   */
  fromCurrency() {
    try {
      const result = Number(this.replace(/,/g, ''), 10);
      if (isNaN(result)) throw new Error('invalid input');
      return result;
    } catch (e) {
      return (e.message);
    }
  },

  /**
   * Returns each letter in the string as an inverse of its current case
   * @return {String}
   */
  inverseCase() {
    return this.replace(/[a-zA-Z]/g, char =>
      (/[a-z]/.test(char) ? char.toUpper() : char.toLower()));
  },

  /**
   * Returns the letters in alternating cases. It must start with a lower case
   * @return {String}
   */
  alternatingCase() {
    return this.replace(/[a-zA-Z]/g, (char, index) =>
    (index % 2 === 0 ? char.toLower() : char.toUpper()));
  },

  /**
   * Returns the character(s) in the middle of the string
   * @return {String}
   */
  getMiddle() {
    const len = this.length;
    const middle = Math.floor(len / 2);
    if (len % 2 === 0) {
      return `${this[middle - 1]}${this[middle]}`;
    }
    return this[middle];
  },

  /**
   * Returns the numbers in words e.g 325 should return three two five.
   * @return {String}
   */
  numberWords() {
    const numbers = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten'
    };
    const string = this.replace(/[^\d]/g, '');
    return string.replace(/\d/g, x => `${numbers[x]} `).trim();
  },

   /**
   * Checks if string is single digit
   * @return {Boolean}
   */
  isDigit() {
    return /^\d{1}$/.test(this);
  },

  /**
   * Returns true if a string contains double characters(including whitespace character)
   * @return {Boolean}
   */
  doubleCheck() {
    return /(.)\1/.test(this);
  }

};
Object.assign(String.prototype, StringExtension);
