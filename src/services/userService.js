// Service — like @Service in Spring
const userRepository = require('../repositories/userRepository')

const getAll = () => userRepository.findAll()
const getById = (id) => userRepository.findById(id)
const create = (data) => {
  if (!data.name || !data.email) throw new Error('name and email are required')
  return userRepository.save(data)
}
const update = (id, data) => userRepository.update(id, data)
const remove = (id) => userRepository.remove(id)

module.exports = { getAll, getById, create, update, remove }
