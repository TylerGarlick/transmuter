'use strict';

let BufferHelper = require('../../lib/infrastructure/helpers/buffer');

describe('Buffer Helper', function() {

  describe('#isStringOrBuffer(val)', function() {

    it('should be true when value is buffer or string', function() {
      expect(BufferHelper.isStringOrBuffer('hello')).to.be.true;
      expect(BufferHelper.isStringOrBuffer(new Buffer(''))).to.be.ok;
    });

  });

});