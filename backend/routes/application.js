const { Router } = require('express')
const { Application } = require('../models')
const { authenticate } = require('../middlewares')

const routes = Router()

routes
  .post('/:type', authenticate, async (req, res) => {
    const {
      dob, address
    } = req.body
    const {
      type
    } = req.params

    try {
      await Application.create({
        user: req.user,
        dob: new Date(dob),
        address,
        type
      })
    } catch (error) {
      res.status(500)
      return
    }

    res.status(201).json({ done: true })
  })

  // .use(authenticateAdmin)
  .put('/approve', async (req, res) => {
    try {
      await Application.findOneAndUpdate(
        { user: req.body.userId },
        { pending: false }
      )
    } catch (error) {
      res.status(500)
      return
    }

    res.status(200).json({ done: true })
  })
  // /* Query routes for admin dashboard */
  // .get('/q', ...)

module.exports = routes
