'use strict';

let Path = require('path');
let FileSystem = require('fs');
let Transmuter = require('../lib');

const pem = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAwixqSK4zyatnKNIxAaMqmhuGk6GP01vRmDiSn9qKBx5C2hHi
jt55U8yMxZ/KWnHlMsALUdlbHiZQ9BtCDUE3WmqJo62mYrU3c4qJBZjSHyc+vEKx
rUkz0EPlHozVNxDTKxwmjbyzW4riSE2iQYp6/YXQLdXFIkiltiatmnS4bj1YREAp
8TzMIpXTCqbISte7LJ+hzADPAxhebXIw+Oo+Y8fFGz3CGXJMLyayCrzRT4GFcXf5
l/5cpvZAeMyyDrylD3R+mGA4UUISRkgGzE5Wv9NrzVHWFH23KDiANb47AiInDtBA
398CTZKGhRWcG9NzBSejoe2zTvQAhwuJczOwewIDAQABAoIBAQCvTOf7jAJHPM6a
hQEnaEbK8LTTzdWKTOfx1IlTdjqM6J4UQHdY4rOImzAwLu3CL/drlQPjNidUFeWa
LI26Z7lwkKSIt/pyPQa98kF4Yxq4c3bpAhFkz6TOjq1ool7QIwlybyzDY6xNphpa
inRFVZ9qCQgEiW07YXjx9QNgYaYsJvTf7exZ6bfC3KOLFSq844kdD2mqOKNzy7MF
Xau1MEPb9MrPsMxQzsqOqrHkSK6KGx1y1SZqaLksmYcy/QS5LfW+KnEB4UROEf5C
5zumH9zS/S63j2doHGtjl1iBVbs0H24KrkDYcAzP7NlYmY01u7mZ0wvXS5SAQVaX
ESJzrYORAoGBAOoOZECapTXs6BPtvOwyI9mttUtHxEaNDZCO6GcDHX32yVkQ8YWE
zs27CKf09WBLWSW3mEHrTNz4UIZzaOj9EC89G6IODut3JrHYveqB3WathUs9KDKb
j2+18DpBSgfs7IF7mHWi73klmOIWK4kYe2G201kYMSJEfkdBcz4mEDqTAoGBANRg
y0qQpv3I7/uX4FQnjzqjDejEIePytBapefqLsgQ83ENx17V+MyGhUDbRvRjVfbQT
dfDQvAXvY72O3vJ871E62881TxsSSLO+dLrO0MDqQKevE5/QZpyzTAhkInTd/2ba
rm5ENrWheuOwLeWNAhBJbJz6anwkuDIvYNhDS5t5AoGAVcQmSmIgrgz80eio9Og+
qNJ1f3tx2eRwFwu276B9mx3mlEOYLTQIT+z8dAdYLwwNQ7vuCCHADazUXSBHTjEF
UDoVOSHrp68Gt97TYO5rgeeN0486fqjwO6AwwjgQd60C0UPIDztAg2Uai6ZSF6+n
7pt/AMPTpVnx6Ax8vUZXZg8CgYEAwzjyxmkvx+v0hc53XIQ8ygbmm0fna1VHq+lA
Akp1aiXTx3+XbPND5y8UwD+OVoyxD14wNRx7Ke2DPtVdJYQorP+w3MlBHT5ybB+v
x6SjCiKLKljqbiawnGzIgJIjhlAnHRH588xqig2VHEVv+ynicrw7xhT+230ZgLBC
kqlRj+kCgYAbpojhV0ub6DpO1qN/ZEreycsAX4ygcDW7mShBLj/IdZ3zWQgWVl3O
8a6C41DddhQfIqivVCbqLVyb87q2kYSUMRD5ZkJrQ36eBx6j4goq6Z7gTGBlkIZn
dPaTrKjmlD0Rf7MpC8g14Ikp2EEvbGv4PRD9psC6UCz9hNiSX8V1zQ==
-----END RSA PRIVATE KEY-----`;

describe('Transmuter', function() {

  let transmuter;
  before(function() {
    transmuter = new Transmuter(pem);
    expect(transmuter).to.be.ok;
  });

  describe('#constructor', function() {

    it('should be able to load with a valid key', function() {


    });

  });

});

