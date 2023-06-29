import express from 'express'

const server = express()

server.set('port', process.env.PORT || 3500)
server.use(express.json());
server.use(express.urlencoded({ extended: false }))

const handleGPSTracking = (req, res) => {
  return res.status(200).json({
    message: 'fino papu'
  })
}

const NotFound = (req, res) => {
  res.status(204).json({
    message: 'Ruta no encontrada porfavor ingrese a /api'
  })
}

const HandleErrors = (err, req, res, next) => {
  console.error(err)
  res.status(500).json({
    message: 'Algo salio mal!'
  })
}

server.get('/', handleGPSTracking)
server.use(NotFound)
server.use(HandleErrors)

server.listen(server.get('port'), () => {
  console.log('⚡ Server on port', server.get('port'))
})
