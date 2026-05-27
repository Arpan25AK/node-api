const express = require('express')
const router = express.Router()
const userService = require('../services/userService')

router.get("/users", (req , res ) => {
  const result  = userService.getAllUsers()
  res.json(result)
})

router.get("/users/:id", (req , res ) => {
  const result  = userService.findById(req.params.id)
  res.json(result)
})

router.get("/users/email" ,(req , res ) => {
  const result  = userService.findByEmail(req.query.email)
  res.json(result)
})

router.get("/users/position", (req , res ) => {
  const result  = userService.findByPost(req.query.position)
  res.json(result)
})

router.get("/users/searchName", (req , res ) => {
  const result  = userService.findByName(req.query.name)
  res.json(result)
})

router.get("/users/postAndName", (req , res ) => {
  const result  = userService.findByPostAndName(req.query.position, req.query.name)
  res.json(result)
})

router.delete("/users/:id", (req , res ) => {
  const result  = userService.removeUser(req.params.id)
  res.json(result)
})

router.put("/users/:id", (req , res ) => {
  const {id, name, email, position} = req.body
  const result  = userService.updateUserById(req.params.id, name, email, position)
  res.json(result)
})

router.post("/users", (req , res ) => {
  const {id , name, email, position} = req.body
  const result  = userService.saveUser(id, name, email, position)
  res.json(result)
})

module.exports = router