const db = require('./db')

function createScene(name, description, options) {
    if (!options) {
        options = []
    }
    return db.getCollection('scenes').then((scenes) => {
        return scenes.insertOne({
            name,
            description,
            options
        })
    })
}

function findSceneByName(sceneName) {
    return db.getCollection('scenes').then((scenes) => {
        return scenes.findOne({name: sceneName})
    })
}

module.exports = {
    createScene,
    findSceneByName
}