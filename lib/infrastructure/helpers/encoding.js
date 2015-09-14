'use strict';

const encodings = Symbol('encodings');

class EncodingHelper {

  static get [Symbol.species]() {
    this[encodings] = new Map([['BASE64', 'base64'], ['BINARY', 'binary'], ['HEX', 'hex'], ['UTF8', 'utf8']]);
    return this;
  }

  static isValid(encoding) {
    return this[encodings].has(encoding.toUpperCase());
  }
}

module.exports = EncodingHelper;