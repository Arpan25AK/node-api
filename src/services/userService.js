const userRepository = require('../repositories/userRepository')

const getAllUsers = () =>{
  return userRepository.findAll()
}

const findByEmail = (email) =>{
  return userRepository.findByEmail(email)
}

const findById = (id) =>{
  return userRepository.findById(id)
}

const findByName =(name) =>{
  return userRepository.findByName(name)
}

const findByPost = (position) =>{
  return userRepository.findByPost(position)
}

const findByPostAndName = (position, name) =>{
  return userRepository.findByPostAndName(position, name)
}

const saveUser = (id, name, email, position) =>{
  return userRepository.saveUser(id, name, email, position)
}

const removeUser = (id) =>{
  return userRepository.removeUser(id)
}

const updateUserById =(id, name, email, position) =>{
  return userRepository.updateUserById(id, name, email, position)
}

module.exports = {getAllUsers, findById, findByName, findByEmail, findByPost, findByPostAndName, saveUser, updateUserById, removeUser}