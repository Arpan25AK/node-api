const express = require('express')
const router = express.Router()
const userService = require('../services/userService')

router.get("/users", async(req, res) => {
  const result = await userService.getAllUsers()
  res.json(result)
})

router.get("/users/email", async(req, res) => {
  const result = await userService.findByEmail(req.query.email)
  res.json(result)
})

router.get("/users/position", async(req, res) => {
  const result = await userService.findByPost(req.query.position)
  res.json(result)
})

router.get("/users/searchName", async (req, res) => {
  const result = await userService.findByName(req.query.name)
  res.json(result)
})

router.get("/users/postAndName", async(req, res) => {
  const result = await userService.findByPostAndName(req.query.position, req.query.name)
  res.json(result)
})

router.get("/users/:id", async (req, res) => {
  const id = parseInt(req.params.id)
  const result = await userService.findById(id)
  res.json(result)
})

router.delete("/users/:id", async (req, res) => {
  const id = parseInt(req.params.id)
  const result = await userService.removeUser(id)
  res.json(result)
})

router.put("/users/:id", async (req, res) => {
  const { name, email, position } = req.body
  const id = parseInt(req.params.id)
  const result = await userService.updateUserById(id, name, email, position)
  res.json(result)
})

router.post("/users", async (req, res) => {
  const { id, name, email, position } = req.body
  const result = await userService.saveUser(id, name, email, position)
  res.json(result)
})

module.exports = router