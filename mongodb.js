// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:/27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString())
// console.log(id.id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
	if (error) {
		return console.log('Unable to connect to database!')
	}

	const db = client.db(databaseName)

	db.collection('task').findOne({_id: new ObjectID("5cd8c70e5f72730400329cd6")}, (error, task) => {
		if (error) {
			return console.log('Unable to fetch')
		}
		return console.log(task)
	})

	db.collection('task').find({completed: true}).toArray((error, tasks) => {
		return console.log(tasks)
	})

	// db.collection('users').findOne({_id: new ObjectID("5cd8c5b67d63a2032c5cbd29")}, (error, user) => {
	// 	if (error) {
	// 		return console.log('Unable to fetch')
	// 	}

	// 	console.log(user)
	// })

	// db.collection('users').find({ name: 'Andy' }).toArray((error, users) => {
	// 	console.log(users)
	// })

	// db.collection('users').find({ name: 'Andy' }).count((error, num) => {
	// 	console.log(num)
	// })
	// db.collection('users').insertOne({
	// 	name: 'Andy',
	// 	age: 32
	// }, (error, result) => {
	// 	if (error) {
	// 		return console.log('Unable to insert user')
	// 	}
	// 	console.log(result.ops)
	// })

	// db.collection('users').insertMany([
	// {
	// 	name: 'Leslie',
	// 	age: 26
	// }, {
	// 	name: 'Phong',
	// 	age: 33
	// }
	// ], (error, result) => {
	// 	if (error) {
	// 		return console.log('Unable to insert documents!')
	// 	}

	// 	console.log(result.ops)
	// })

	// db.collection('task').insertMany([
	// {
	// 	description: 'Finish job1',
	// 	completed: true
	// }, {
	// 	description: 'Finish job2',
	// 	completed: false
	// }, {
	// 	description: 'Finish job3',
	// 	completed: true
	// }
	// 	], (error, result) => {
	// 		if (error) {
	// 			return console.log('Unable to insert documents')
	// 		}

	// 		console.log(result.ops)
	// 	})
})