const {test, describe} = require('node:test')
const assert = require('node:assert')

const list_helper = require('../utils/list_helper')

test('dummy returns 1', () => {
    const blogs = []
    assert.strictEqual(list_helper.dummy(blogs), 1)
})