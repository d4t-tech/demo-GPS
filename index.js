import gpstracker from 'gpstracker'

const PORT = process.env.PORT || 3500

var server = gpstracker.create().listen(PORT, function(){
   console.log('listening your gps trackers on port', PORT)
})

server.trackers.on('connected', function(tracker){

  console.log('tracker connected with imei:', tracker.imei)

  tracker.on('help me', function(){
    console.log(tracker.imei + ' pressed the help button!!'.red)
  })

  tracker.on('position', function(position){
    console.log('tracker {' + tracker.imei +  '}: lat', position.lat, 'lng', position.lng)
  })

  tracker.trackEvery(10).seconds()
})