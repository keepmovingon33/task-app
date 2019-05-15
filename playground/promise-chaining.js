require('../src/db/mongoose')
const User = require('../src/models/user')

// 5cda0d6016d2b05e32eea52f

User.findByIdAndUpdate('5cda0d6016d2b05e32eea52f', {age: 1}).then((user) => {
	console.log(user)
	return User.countDocuments({ age: 1})
}).then((result) => {
	console.log(result)
}).catch(e => {
	console.log(e)
})

