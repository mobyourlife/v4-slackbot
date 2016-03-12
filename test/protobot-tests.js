/* global describe, it */

'use strict'

const ProtoBot = require('../lib/protobot')

const expect = require('expect.js')

describe('Testes do ProtoBot', function () {
  describe('Saudações básicas', function () {
    it('olá', function (done) {
      let bot = new ProtoBot()
      let answer = bot.talk('olá')

      expect(answer).to.be('Olá! Em que posso ajudá-lo?')

      done()
    })
  })
})
