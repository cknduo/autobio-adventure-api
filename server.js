// require('./model/adventure')

const sceneRoutes = require('./routes/scene')
const userRoutes = require('./routes/user')

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/scene', sceneRoutes)
app.use('/user', userRoutes)

app.listen(port, () => {
    console.log(`Game server listening at http://localhost:${port}`)
})