const { Router } = require('express')
const { Application } = require('../models')
const {User} = require('../models')
const { authenticate } = require('../middlewares')

const routes = Router()

routes

// post an application from user side
  .post('/:type', authenticate, async (req, res) => {
    const {
      dob, address
    } = req.body
    const {
      type
    } = req.params
    try {
      await Application.create({
        user: res.locals.sub,
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

  // use(authenticateAdmin)
  .get('/getpending',async(req,res)=>{
    try{
        var response = await Application.find(
          {status:"pending"}
        ).populate('user')
        
         res.status(200).send(response)

    }catch(err){
      console.log(err)
      res.status(500)
      return
    }
  })

  // use(authenticateAdmin)
  .get('/getapproved',async(req,res)=>{
    try{
        var response = await Application.find(
          {status:"approved"}
        ).populate('user')
         res.status(200).send(response)

    }catch(err){
      console.log(err)
      res.status(500)
      return
    }
  })

  // use(authenticateAdmin)
  .get('/getinprocess',async(req,res)=>{
    try{
        var response = await Application.find(
          {status:"inprocess"}
        ).populate('user')
         res.status(200).send(response)

    }catch(err){
      console.log(err)
      res.status(500)
      return
    }
  })

  // use(authenticateAdmin)
  .get('/getrejected',async(req,res)=>{
    try{
        var response = await Application.find(
          {status:"rejected"}
        ).populate('user')
         res.status(200).send(response)

    }catch(err){
      console.log(err)
      res.status(500)
      return
    }
  })

  // .use(authenticateAdmin)
  .put('/approve', async (req, res) => {
    try {
      await Application.findOneAndUpdate(
        { user: req.body.userId },
        { status: "inprocess" }
      )
    } catch (error) {
      res.status(500)
      return
    }

    res.status(200).json({ done: true })
  })

  // .use(authenticateAdmin)
  .put('/reject', async (req, res) => {
    try {
      await Application.findOneAndUpdate(
        { user: req.body.userId },
        { status: "rejected" }
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
