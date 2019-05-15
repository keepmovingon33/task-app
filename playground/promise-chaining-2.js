require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5cda361cb6d0526f5f5e76a3').then((task) => {
	console.log(task)
	return Task.countDocuments({ completed: false})
}).then((result) => {
	console.log(result)
}).catch(e => {
	console.log(e)
})