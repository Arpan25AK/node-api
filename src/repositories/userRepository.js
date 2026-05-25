const User = require('../models/user')


const users = []

const findAll = () =>{
  return users
}

const findById = (id) => { 
  return users.find( u => u.id === id)
}

const findByName = (name) => {
  return users.find(u => u.name === name)
}

const findByEmail = (email) =>{
  return users.find(u => u.email === email)
}

const findByPost = (position) => {
  return users.filter(u => u.position === position)
}

const findByPostAndName = (position, name) =>{
  return users.filter( u => u.position === position && u.name === name)
}

const saveUser = (id, name, email, position) => {
  const user = new User(id, name, email, position)
  users.push(user)
  return user
}