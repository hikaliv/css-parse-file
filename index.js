'use strict'

const css = require('css')
const fs = require('fs')

function parse(file, encoding) {
  const code = encoding || 'utf8'
  return new Promise((resolve, reject) => {
    fs.readFile(file, code, (err, data) => {
      if (err) reject(err)
      else resolve(css.parse(data, { source: file, silent: true }))
    })
  })
}

module.exports = parse