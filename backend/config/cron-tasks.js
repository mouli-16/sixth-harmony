let cron = require('node-cron')
const { Application } = require('../models')

function startCronTasks() {
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
    console.log('Genera');
  })  
}

module.exports = {
  startCronTasks
}
