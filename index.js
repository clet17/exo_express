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

app.get('/games/:id', (request, response) => {
    const gameID = request.params.id
    
    const gameByID = games.find(game => game.id == gameID)

    if (!gameByID){
        return response.status(404).json('Game not found')
    }

    return response.status(200).json(gameByID)
})

app.listen(port, () => {
    console.log("server run on port 3000")
})

