const express=require('express');
const routes=express.Router();
const web3 = require('web3.storage')
require('dotenv').config()


routes.post('/upload',async(req,res)=>{
    const {path} = req.body
    const token = process.env.WEB3_TOKEN
    const storage = new web3.Web3Storage({ token })
    const files = []

    const pathFiles = await web3.getFilesFromPath(path)
    files.push(...pathFiles)


  console.log(`Uploading ${files.length} files`)
  const cid = await storage.put(files)
  console.log('Content added with CID:', cid)

  return res.status(200).send({
      "message":`File uploaded with CID ${cid}`
  })
})

// routes.post('/files',async(req,res)=>{
//   const {cid}  = req.body
//   const token = process.env.WEB3_TOKEN
//   const client = new web3.Web3Storage({ token })
//   const response = await client.get(cid)
  
//   const files = await response.files()
//   for (const file of files) {
//     console.log(`${file.cid} -- ${file.path} -- ${file.size}`)
//   }


//   return res.status(200).send(files)

// })

module.exports=routes