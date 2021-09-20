const axios = require('axios')
const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  mirror: x => x,
  createUser: () => {
    const user = { firstName: 'Peron' }
    user.lastName = 'Vidal'
    return user
  },
  fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.data)
    .catch(err => console.log(err))
}
// https://jsonplaceholder.typicode.com/
module.exports = functions
