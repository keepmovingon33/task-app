require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')

// 5cda0d6016d2b05e32eea52f

// User.findByIdAndUpdate('5cda0d6016d2b05e32eea52f', {age: 1}).then((user) => {
// 	console.log(user)
// 	return User.countDocuments({ age: 1})
// }).then((result) => {
// 	console.log(result)
// }).catch(e => {
// 	console.log(e)
// })

const deleteTaskAndCount = async (id) => {
	const task = await Task.findByIdAndDelete(id)	
	// await Task.findByIdAndDelete(id)	
	const count = await Task.countDocuments({completed: false})
	return count
}

deleteTaskAndCount('5cdb1491d4b3bab3df7fb2bb').then(count =>{
	console.log(count)
}).catch(e => {
	console.log(e)
})

// const updateAgeAndCount = async (id, age) => {
// 	const user = await User.findByIdAndUpdate(id, {age})
// 	const count = await User.countDocuments({age})
// 	return count 
// }

// updateAgeAndCount('5cda0d6016d2b05e32eea52f', 2). then(count => {
// 	console.log(count)
// }).catch(e => {
// 	console.log(e)
// })