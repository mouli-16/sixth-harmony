const { Router } = require('express')
const {  authenticate } = require('../middlewares')
const routes = Router()
const { getFilesFromPath } = require('web3.storage')
const storage = require('../config/web3.storage')
const db = require('../documents.json')
const {User} = require('../models')

//use authenticateAdmin
routes.post('/upload',async(req,res)=>{
    var documents = db
    for(let i in documents){
        
        let path = documents[i].path
        let aadhaar = documents[i].aadhaar

        const pathFiles = await getFilesFromPath(path)
  const files = []
  files.push(...pathFiles)
  const filename = files[0].name
  const cid = await storage.put(files)

  await User.updateOne(
    {
        aadhaar:aadhaar
    },
    {
        $push:{files:{
          "name":filename,
          "cid":cid
        }
      }
    }
   )
    }
    return res.status(200).send({
      "message": "All Files uploaded"
    })
})


module.exports=routes