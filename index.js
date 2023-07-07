import express from 'express'

const server = express()

server.set('port', process.env.PORT || 3500)
server.use(express.json());
server.use(express.urlencoded({ extended: false }))

const handleGPSTracking = (req, res) => {
  console.log({ body: req.body })
  console.log({ queryParam: req.query })

  return res.status(200).json({
    body: req.body,
    queryParam: req.query
  })
}

const NotFound = (req, res) => {
  res.status(204).json({
    message: 'Ruta no encontrada porfavor ingrese a /'
  })
}

const HandleErrors = (err, req, res, next) => {
  console.error(err)
  res.status(500).json({
    message: 'Algo salio mal!',
    error: err
  })
}

server.get('/', handleGPSTracking)
server.post('/', handleGPSTracking)
server.put('/', handleGPSTracking)
server.delete('/', handleGPSTracking)
server.patch('/', handleGPSTracking)
server.use(NotFound)
server.use(HandleErrors)

server.listen(server.get('port'), () => {
  console.log('⚡ Server on port', server.get('port'))
})