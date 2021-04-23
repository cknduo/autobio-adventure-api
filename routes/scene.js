const express = require('express')

const scenes = require('../model/scenes')

let router = express.Router()

router.get('/:sceneName', async (req, res) => {
    let sceneName = req.params.sceneName
    try {
        let scene = await scenes.findSceneByName(sceneName)
        res.send(scene)
    }
    catch(error) {
        console.log(error)
        res.status(404).send(`Scene ${sceneName} not found.`)
    }
})

module.exports = router