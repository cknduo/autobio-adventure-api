const express = require('express')

const users = require('../model/users')

let router = express.Router()

router.post('/create', async (req, res) => {
    let user = await users.createUser(req.body)
    res.send(user)
})

router.post('/update', async (req, res) => {
    let user = await users.updateUser(req.body)
    res.send(user)
})

router.get('/', async (req, res) => {
    try {
        let user = await users.findUserByName(req.body)
        res.send(user)
    }
    catch (error) {
        console.log(error)
        res.status(404).send(`User ${userName} not found.`)
    }
})

module.exports = router