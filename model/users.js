const db = require('./db')

function createUser({ name }) {
    return db.getCollection('users').then((user) => {
        return user.insertOne({name: name})
    })
}

function updateUser({ name, progress }) {
    return db.getCollection('users').then((user) => {
        return user.updateOne(
            {name: name},
            {$set: {progress: progress}}
        )
    })
}

function findUserByName(userName) {
    return db.getCollection('users').then((users) => {
        return users.findOne({name: userName})
    })
}

module.exports = {
    createUser,
    updateUser,
    findUserByName
}