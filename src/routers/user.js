const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()

// router.get('/test', (req, res) => {
// 	res.send('this is from my other router')
// })


router.post('/users', async (req, res) => {
	const user = new User(req.body)

	try {
		await user.save()
		const token = await user.generateAuthToken()

		console.log('Chicago')
		res.status(201).send({user, token})
	} catch (e) {
		res.status(400).send(e)

	}
	

	// user.save().then(() => {
	// 	res.status(201).send(user)
	// }).catch((error) => {
	// 	res.status(400).send(error)
	// })
})

router.post('/users/login', async (req, res) => {
	try {
		const user = await User.findByCredentials(req.body.email, req.body.password)
		const token = await user.generateAuthToken()
		res.send({user, token})
	} catch (e) {
		console.log('usa')
		res.status(400).send()
	}
})

router.post('/users/logout', auth, async (req, res) => {
	try {
		req.user.tokens = req.user.tokens.filter(token => {
			return token.token !== req.token
		})

		await req.user.save()
		res.send()
	} catch (e) {
		res.status(500).send()
	}
})

//
// Goal: Create a way to logout of all sessions
//
// 1. Setup POST /users/logoutAll
// 2. Create the router handler to wipe the tokens array
// - send 200 or 500
// 3. Test your work
// - Login a few times and logout of all. Check database

router.post('/users/logoutALL', auth, async (req, res) => {
	try {
		req.user.tokens = []
		await req.user.save()
		res.send()
	} catch (e) {
		res.status(500).send()
	}
})

router.get('/users/me', auth, async (req, res) => {
	
	res.send(req.user)


	// try {
	// 	const users = await User.find({})
	// 	res.send(users)
	// } catch (e) {
	// 	res.status(500).send()
	// }



	// User.find({}).then((users) => {
	// 	res.send(users)
	// }).catch((e) => {
	// 	res.status(500).send()
	// })
})


	
	// User.findById(_id).then((user)=>{
	// 	if(!user) {
	// 		return res.status(404).send()
	// 	}
	// 	res.send(user)
	// }).catch(e => {
	// 	res.status(500).send()
	// })


// patch is for find and update

//
// Goal: Refactor the update profile route
//
// 1. Update the URL to /users/me
// 2. Add the authentication middleware into the mix
// 3. Use the existing user document instead of fetching via param id
// 4. Test your work in Posman


router.patch('/users/me', auth, async(req, res) => {
	const updates = Object.keys(req.body)
	const allowedUpdates = ['name', 'email', 'password', 'age']
	const isValidOperation = updates.every(update => allowedUpdates.includes(update))

	if (!isValidOperation) {
		return res.status(400).send({error: 'Invalid updates!'})
	}
//	const _id = req.params.id
	try {
//		const user = await User.findById(req.params.id)

		const user = await req.user
		updates.forEach((update) =>user[update] = req.body[update])
		await user.save()
		// const user = await User.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})

		// because this user is logged in already
		// so we don't have to check if this user is logged in or not

		// if (!user) {
		// 	return res.status(404).send()
		// }

		res.send(user)
	} catch (e) {
		res.status(400).send(e)
	}
})


router.delete('/users/me', auth, async(req, res) => {
	try {
		// const user = await User.findByIdAndDelete(req.user._id)
		
		// because this user is logged in already
		// so we don't have to check if this user is logged in or not

		// if (!user) {
		// 	return res.status(404).send()
		// }

		await req.user.remove()

		res.send(req.user.user)
	} catch(e) {
		res.status(500).send(e)

	}
})

module.exports = router