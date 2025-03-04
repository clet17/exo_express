import express from 'express'

import games from './data/games.js'

const app = express()
const port = 3000


app.get('/', (request, response) => {
    return response.end('Salut par la bas')
})

app.get('/games', (request, response) => {
    return response.json(games)
})

app.listen(port, () => {
    console.log("server run on port 3000")
})

