'use strict'

const chai = require('chai')
const parser = require('..')
const chaiAsPromised = require('chai-as-promised')
const fs = require('fs')

chai.should()
chai.use(chaiAsPromised)

describe('CSS Parse File 包', function () {
  describe('#安全性检查', function () { })
  describe('#属性检查', function () { })
  describe('#行为检查', function () {
    const result = parser('./main.css')
    result.then(css => fs.writeFile('./ast.json', JSON.stringify(css), console.err))
    it('测试 main.css 并输出为 ast.json', function () {
      const media = result.then(css => css.stylesheet.rules[4])
      return Promise.all([
        media.should.eventually.have.property('type', 'media'),
        media.should.eventually.have.property('media', 'only screen and (device-width: 320px)'),
        media.then(css => css.rules).should.eventually.have.deep.property('[1].selectors[0]', '._css_main__name._css_main__textblock')
      ])
    })
  })
})