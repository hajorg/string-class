const StringExtension = {
  /**
   * Returns true if the string contains vowels.
   * @returns {Boolean}
   */
  hasVowels() {
    return /[aeiou]/.test(this);
  },

   /**
   * Returns the String in question but with all characters in upper cases as applicable.
   * @returns {String}
   */
  toUpper() {
    return this.replace(/[a-z]/g,
      char => String.fromCharCode(char.charCodeAt(0) - 32));
  },

  /**
  * Returns the String passed as lower cases
  * @returns {String}
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
    return /\?$/.test(this);
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
   * @returns {Number}
   */
  wordCount() {
    return this.words().length;
  },

  /**
   * Returns a currency representation of the String
   * @returns {String}
   */
  toCurrency() {
    return this.replace(/./g, (char, index, arr) =>
      (index && char !== '.' && ((arr.length - index) % 3 === 0) ? `,${char}` : char));
  },

  /**
   * Returns a number representation of the Currency String
   * @returns {String}
   */
  fromCurrency() {
    return parseInt(this.replace(/,/g, ''), 10);
  },

  /**
   * Returns each letter in the string as an inverse of its current case
   * @returns {String}
   */
  inverseCase() {
    return this.replace(/[a-zA-Z]/g, char =>
      (char === char.toLower() ? char.toUpper() : char.toLower()));
  },

  /**
   * Returns the letters in alternating cases. It must start with a lower case
   * @returns {String}
   */
  alternateCase() {
    return this.replace(/[a-zA-Z]/g, (char, index) =>
    (index % 2 === 0 ? char.toLower() : char.toUpper()));
  },

  /**
   * Returns the character(s) in the middle of the string
   * @returns {String}
   */
  getMiddle() {
    const len = this.length;
    if (len % 2 === 0) {
      return `${this[Math.floor(len / 2) - 1]}${this[Math.floor(len / 2)]}`;
    }
    return this[Math.floor(len / 2)];
  }
};
Object.assign(String.prototype, StringExtension);
module.exports = StringExtension;
