const router = require('express').Router()
const user = require('../models/users')

//Get users
router.route('/').get((req,res) => {
    user.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error ' + err))
})


//Add users
router.route('/add').post((req,res) => {
    const email = req.body.email

    const newUser = new user({email})

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router
