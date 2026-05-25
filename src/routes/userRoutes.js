// Controller — like @RestController in Spring
const express = require('express')
const router = express.Router()
const userService = require('../services/userService')

router.get('/', (req, res) => {
  res.json(userService.getAll())
})

router.get('/:id', (req, res) => {
  const user = userService.getById(req.params.id)
  if (!user) return res.status(404).json({ error: 'User not found' })
  res.json(user)
})

router.post('/', (req, res) => {
  try {
    const user = userService.create(req.body)
    res.status(201).json(user)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

router.put('/:id', (req, res) => {
  const user = userService.update(req.params.id, req.body)
  if (!user) return res.status(404).json({ error: 'User not found' })
  res.json(user)
})

router.delete('/:id', (req, res) => {
  const deleted = userService.remove(req.params.id)
  if (!deleted) return res.status(404).json({ error: 'User not found' })
  res.status(204).send()
})

module.exports = router
