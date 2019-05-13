// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:/27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id.id.length)
console.log(id.toHexString())
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
	if (error) {
		return console.log('Unable to connect to database!')
	}

	// const db = client.db(databaseName)
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