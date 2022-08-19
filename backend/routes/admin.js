const { Router } = require('express')
const { authenticate, adminOnly } = require('../middlewares')
const routes = Router()
const { getFilesFromPath } = require('web3.storage')
const storage = require('../config/web3.storage')
const db = require('../documents.json')
const { User, Admin } = require('../models')

routes.post('/upload', authenticate, adminOnly, async (req, res) => {
  var documents = db
  for (let i in documents) {

    let path = documents[i].path
    let aadhaar = documents[i].aadhaar

    const pathFiles = await getFilesFromPath(path)
    const files = []
    files.push(...pathFiles)
    const filename = files[0].name
    const cid = await storage.put(files)

    await User.updateOne(
      {
        aadhaar: aadhaar
      },
      {
        $push: {
          files: {
            "name": filename,
            "cid": cid
          }
        }
      }
    )
  }
  return res.status(200).send({
    "message": "All Files uploaded"
  })
})

routes.post('/create', authenticate, adminOnly, async (req, res) => {
  const { username, password } = req.body
  var adminUser = new Admin({
    username: username,
    password: password
  })

  try {
    var admin = await adminUser.save()
    return res.status(200).send({
      message: `User ${adminUser.username} created successfuly`
    })
  }
  catch (e) {
    return res.status(400).send({
      message: "Admin User could not be created",
    })
  }
})

module.exports = routes