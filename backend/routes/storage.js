const { Router } = require('express')
const { getFilesFromPath } = require('web3.storage')
const storage = require('../config/web3.storage')

const routes = Router();

routes.post('/upload', async (req, res) => {
  const { path } = req.body

  const pathFiles = await getFilesFromPath(path)
  const files = []
  files.push(...pathFiles)

  console.log(`Uploading ${files.length} files`)
  const cid = await storage.put(files)
  console.log('Content added with CID:', cid)

  return res.status(200).send({
    "message": `File uploaded with CID ${cid}`
  })
})

// routes.post('/files',async(req,res)=>{
//   const {cid}  = req.body
//   const response = await storage.get(cid)

//   const files = await response.files()
//   for (const file of files) {
//     console.log(`${file.cid} -- ${file.path} -- ${file.size}`)
//   }


//   return res.status(200).send(files)

// })

module.exports = routes
