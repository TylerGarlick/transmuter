'use strict';

let Lazy = require('lazy.js');
let EncodingHelper = require('./encoding');

const DEFAULTS = { ENCODING: 'utf8' };

class BufferHelper {

  static encode(buffer, encoding) {
    if (!encoding) {
      return buffer;
    }

    if (!EncodingHelper.isValid(encoding)) {
      throw new Error('Encoding is invalid');
    }
    return buffer.toString(encoding);
  }

  static decode(val, encoding) {
    encoding = encoding || DEFAULTS.ENCODING;
    if (!BufferHelper.isStringOrBuffer(val)) {
      return val;
    }
    if (!EncodingHelper.isValid(encoding)) {
      throw new Error('Encoding is invalid');
    }
    return new Buffer(val, encoding);
  }

  static isStringOrBuffer(value) {
    return typeof(value) === 'string' || Buffer.isBuffer(value);
  }

}

module.exports = BufferHelper;