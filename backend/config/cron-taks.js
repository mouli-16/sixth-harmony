var cron = require('node-cron')
const { Application } = require('../models')

cron.schedule('0 */1 * * * *', async() => {
  console.log('Approving Applications');
  
  try {
    await Application.updateMany(
      { status: "inprocess" },
      { status: "approved" }
    )
  } catch (error) {
    console.log(error)
  }

  console.log('Approved Applications');
 
});