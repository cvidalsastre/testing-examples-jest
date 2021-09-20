// const jest = require('jest')
const functions = require('./exampleFunctions')

// run functions before or afeter every test in the file
beforeEach(() => initDatabase())
afterEach(() => closeDataBase())

// run finctions before all and after all test
beforeAll(() => console.log('TEST INITIALIZED'))
afterAll(() => console.log('TEST FINISHED'))

// RUN FUNc in especific test
const nameCheck = () => console.log('CHecking name...')
const initDatabase = () => console.log('Database Initialized...')
const closeDataBase = () => console.log('DAtabase closed')

describe('Checking Names', () => {
  let user = ''
  user = 'Jeff'
  beforeEach(() => (nameCheck()))
  test('User is Jeff', () => {
    user = 'Jeff'
    expect(user).toBe('Jeff')
  })

  test('User is Karen', () => {
    user = 'Karen'
    expect(user).toBe('Karen')
  })
})

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4)
})

test('Should be null', () => {
  expect(functions.isNull(null)).toBeNull()
})

test('Should be falsy', () => {
  expect(functions.mirror(false)).toBeFalsy()
})

test('Should be true', () => {
  expect(functions.mirror(true)).toBeTruthy()
})

// TO EQUAL
test('USER SHOULD BE PERON OBJECT', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Peron',
    lastName: 'Vidal'
  })
})

// Less than and greater than
test('should be under 1600', () => {
  const load1 = 800
  const load2 = 400
  expect(load1 + load2).toBeLessThanOrEqual(1600)
})

// REGEX
test('THERE IS NO i IN Word', () => {
  expect('team').not.toMatch(/I/i)
})

// to contain used in arrays
test('Admin should b e in usernames', () => {
  const usernames = ['JOHN', 'KAREN', 'admin']
  expect(usernames).toContain('admin')
})

test('list must contain a 0', () => {
  const usernames = [1, 2, 2, 0]
  expect(usernames).toContain(0)
})

// Working with async data
test('user fetched title should be latin', async () => {
  expect.assertions(1)
  const data = await functions.fetchUser()
  expect(data.title).toEqual('delectus aut autem')
})
