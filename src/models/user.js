// Entity — like @Entity in Spring
let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob',   email: 'bob@example.com'   },
]
let nextId = 3
module.exports = { users, getNextId: () => nextId++ }
