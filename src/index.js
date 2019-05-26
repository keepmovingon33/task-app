const express = require('express')
require('./db/mongoose')
// const User = require('./models/user')
// const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
// 	if (req.method === 'GET') {
// 		res.send('GET request disabled')
// 	} else {
// 		next()
// 	}
// })



// GOAL: Setup middleware for maintance mode
// 1. Register a new middleware function
// 2. Send back a maintenance message with a 503 status code
// 3. Try your requests from the server and confirm status/message shows

// app.use((req, res, next) => {
// 	res.status(503).send('Site is currently down. Check back soon!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

//
// Without middleware: new request -> run route handler
//
// With middleware: new request -> do something -> run route handle
//

app.listen(port, () => {
	console.log('Server is up on port ' + port)
})

const jwt = require('jsonwebtoken')

const myFunction = async () => {
	const token = jwt.sign({_id: 'abc123'}, 'thisismynewcourse', {expiresIn: '2 days'})
	console.log(token)

	const data = jwt.verify(token, 'thisismynewcourse')
	console.log(data)
}

// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
// 	const password = 'Red12345!'
// 	const hashedPassword = await bcrypt.hash(password, 8)

// 	console.log(password)
// 	console.log(hashedPassword)

// 	const isMatch = await bcrypt.compare('Red12345!', hashedPassword)
// 	console.log(isMatch)

// 	const isMatch2 = await bcrypt.compare('Red12345', hashedPassword)
// 	console.log(isMatch2)
// }

myFunction()