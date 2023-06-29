import express from 'express'
import { HandleErrors, NotFound, handleGPSTracking } from './gps/controller.js'

const server = express()

server.set('port', process.env.PORT || 3500)
server.use(express.json());
server.use(express.urlencoded({ extended: false }))

server.get('/', handleGPSTracking)
server.use(NotFound)
server.use(HandleErrors)

server.listen(server.get('port'), () => {
  console.log('⚡ Server on port', server.get('port'))
})
