import test from 'ava'
import isCssShorthand from './'

test('is-css-shorthand', t => {
  t.plan(5)

  t.true(isCssShorthand('background'))
  t.true(isCssShorthand('backgroUnd'))
  t.false(isCssShorthand('background-image'))

  t.true(isCssShorthand('font'))
  t.false(isCssShorthand('font-family'))
})
