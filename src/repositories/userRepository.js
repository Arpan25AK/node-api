const {PrismaClient} = require('../generated/prisma')
const prisma = new PrismaClient()


const findAll = () =>{
  return prisma.user.findMany()
}

const findById = (id) => { 
  return prisma.user.findUnique({where : {id}})
}

const findByName = (name) => {
  return prisma.user.findMany({where : {name}})
}

const findByEmail = (email) =>{
  return prisma.user.findUnique({where : {email}})
}

const findByPost = (position) => {
  return prisma.user.findMany({where : {position}})
}

const findByPostAndName = (position, name) =>{
  return prisma.user.findMany({where : {position, name}})
}

const saveUser = (id, name, email, position) => {
  return prisma.user.create({data: {id, name, email, position}})
}

const updateUserById = (id, name, email, position) =>{
  return prisma.user.update({where : {id}, data: {id, name, email, position}})
}

const removeUser = (id) =>{
  return prisma.user.delete({where : {id}})
}


module.exports = {findAll, findById, findByName, findByEmail, findByPost, findByPostAndName, saveUser, updateUserById, removeUser}