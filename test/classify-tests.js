/* global describe, it */

'use strict'

const classify = require('../lib/classify')

const expect = require('expect.js')

describe('Testes do Clasificador', function () {
  it('instalar slack', function (done) {
    let me = classify('instalar slack')

    expect(me).to.be.ok()
    expect(me).to.have.property('action')
    expect(me).to.have.property('terms')

    expect(me.action).to.be('instalar')

    expect(me.terms).to.be('slack')

    done()
  })
})
