// Repository — like @Repository in Spring
const { users, getNextId } = require('../models/user')

const findAll = () => users
const findById = (id) => users.find(u => u.id === Number(id))
const save = (data) => {
  const user = { id: getNextId(), ...data }
  users.push(user)
  return user
}
const update = (id, data) => {
  const index = users.findIndex(u => u.id === Number(id))
  if (index === -1) return null
  users[index] = { ...users[index], ...data }
  return users[index]
}
const remove = (id) => {
  const index = users.findIndex(u => u.id === Number(id))
  if (index === -1) return false
  users.splice(index, 1)
  return true
}
module.exports = { findAll, findById, save, update, remove }
