'use strict'

var test = require('tape')
var isCssShorthand = require('..')

test('is-css-shorthand', function (t) {
  t.plan(5)

  t.equal(isCssShorthand('background'), true)
  t.equal(isCssShorthand('backgroUnd'), true)
  t.equal(isCssShorthand('background-image'), false)

  t.equal(isCssShorthand('font'), true)
  t.equal(isCssShorthand('font-family'), false)
})
