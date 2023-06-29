export const handleGPSTracking = (req, res) => {
  return res.status(200).json({
    message: 'fino papu'
  })
}

export const NotFound = (req, res) => {
  res.status(204).json({
    message: 'Ruta no encontrada porfavor ingrese a /api'
  })
}

export const HandleErrors = (err, req, res, next) => {
  console.error(err)
  res.status(500).json({
    message: 'Algo salio mal!'
  })
}