const storage = require('azure-storage')
const service = storage.createTableService('bartoszchadzyjanidis','dLHvFAmYrIlthHs52V4WJ2sBZ9IB5hET1MRsB38sC9dq5nrmGu0w2PdnUU++kGBTm5pU7J43wQSGPttTwc7k/w==')
const table = 'tasks'
const uuid = require('uuid')
const init = async () => (
  new Promise((resolve, reject) => {
    service.createTableIfNotExists(table, (error, result, response) => {
      !error ? resolve() : reject()
    })
  })
)
const addTask = async ({ title }) => (
  new Promise((resolve, reject) => {
    const gen = storage.TableUtilities.entityGenerator
    const task = {
      PartitionKey: gen.String('task'),
      RowKey: gen.String(uuid.v4()),
      title
    }

    service.insertEntity(table, task, (error) => {
      !error ? resolve() : reject()
    })
  })
)

module.exports = {
  init,
  addTask
}