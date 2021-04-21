const db = require('./db')

function createUser({ name, progress }) {
    if (!progress) {
        progress = ''
    }

    return db.getCollection('users').then((user) => {
        return user.insertOne({
            name,
            progress
        })
    })
}

function updateUser({ name, progress }) {
    return db.getCollection('users').then((user) => {
        return user.updateOne(
            {name: name},
            { $set: {progress: progress}}
        )
    })
}

function findUser({ name }) {
    return db.getCollection('users').then((users) => {
        return users.find({ name: name })
    })
}

module.exports = {
    createUser,
    findUser,
    updateUser
}