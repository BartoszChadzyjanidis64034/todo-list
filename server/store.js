const storage = require('azure-storage')
const service = storage.createTableService('bartoszchadzyjanidis','dLHvFAmYrIlthHs52V4WJ2sBZ9IB5hET1MRsB38sC9dq5nrmGu0w2PdnUU++kGBTm5pU7J43wQSGPttTwc7k/w==')
const table = 'tasks'

const init = async () => (
  new Promise((resolve, reject) => {
    service.createTableIfNotExists(table, (error, result, response) => {
      !error ? resolve() : reject()
    })
  })
)

module.exports = {
  init
}