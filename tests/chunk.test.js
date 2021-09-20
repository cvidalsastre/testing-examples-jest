const chunkArray = require('./chunk')

// check if fun exists
test('chunkarray function exists', () => {
  expect(chunkArray).toBeDefined()
})

test('CHunk an array of 10 values with length of 2', () => {
  const numbers = [1, 2, 3]
  const len = 1
  const chunkedArr = chunkArray(numbers, len)
  expect(chunkedArr).toEqual([[1], [2], [3]])
})
