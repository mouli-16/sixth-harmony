const { Router } = require('express')
const { getFilesFromPath } = require('web3.storage')
const storage = require('../config/web3.storage')
const middlewares = require('../middlewares/index')
const {User} = require('../models')
const routes = Router();
routes.use(middlewares.authenticate)

routes.post('/upload', async (req, res) => {
  const { path } = req.body

  const pathFiles = await getFilesFromPath(path)
  const files = []
  files.push(...pathFiles)
  const filename = files[0].name
  console.log(filename);
  console.log(`Uploading ${files.length} files`)
  const cid = await storage.put(files)
  console.log('Content added with CID:', cid)
   const sub = res.locals.sub
   console.log(sub);

  await User.updateOne(
    {
        _id:sub
    },
    {
        $push:{files:{
          "name":filename,
          "cid":cid
        }
      }
    }
   )

  return res.status(200).send({
    "message": `File uploaded with CID ${cid}`
  })
})

routes.get('/getfiles',async(req,res)=>{
  const sub = res.locals.sub

  try{
    const user = await User.findById(sub,'files');

  return res.status(200).send(user)
  }catch(e){
    return res.status(400).send({'message':"Error"})
  }

})

module.exports = routes
