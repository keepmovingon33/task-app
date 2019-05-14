const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
	useNewUrlParser: true,
	useCreateIndex: true
})

const User = mongoose.model('User', {
	name: {
		type: String,
		required: true,
		trim: true
	},
	age: {
		type: Number,
		default: 0,
		validate(value) {
			if (value <0) {
				throw new Error('Age must be a positive number')
			}
		}
	},
	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error('Email is invalid')
			}
		}
	}
})

const user3 = new User({
	name: '    Andy   ',
	email: '   awfwef@FWEF.com    '
})
user3.save().then(() => {
	console.log(user3)
}).catch(error => {
	console.log(error)
})

const Task = mongoose.model('Tasks', {
	description: {
		type: String
	},
	completed: {
		type: Boolean
	}
})

const Drink = mongoose.model('Water', {
	name: {
		type: String
	},
	price: {
		type: Number
	}
})

const Feeling = mongoose.model('haPPiNeSS', {
	name: {
		type: String
	}
})

const surprise = new Feeling({
	name: "Surprise"
})

const coca = new Drink({
	name: 'Cocacola',
	price: 1
})

const task1 = new Task({
	description: 'Task1',
	completed: true
})

const task2 = new Task({
	description: 'Task2',
	completed: false
})

const pepsi = new Drink({
	price: -12
})
// pepsi.save().then(() => {
// 	console.log(pepsi)
// }).catch(error => {
// 	console.log(error)
// })

// const task3 = new Task({})
// task3.save().then(() =>{
// 	console.log(task3)
// }).catch(error => {
// 	console.log(error)
// })

// surprise.save().then(() => {
// 	console.log(surprise)
// }).catch(error => {
// 	console.log(error)
// })

// coca.save().then(() => {
// 	console.log(coca)
// }).catch(error => {
// 	console.log(error)
// })
// task1.save().then(() => {
// 	console.log(task1)
// }).catch(error => {
// 	console.log(error)
// })

// const me = new User({
// 	name: 'Andy',
// 	age: 'Mike'
// })

// me.save().then(() => {
// 	console.log(me)
// }).catch(error => {
// 	console.log(error)
// })