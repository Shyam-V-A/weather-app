// console.log('Starting')

// setTimeout(() => {
//     console.log('2 sec timer')
// }, 2000)

// setTimeout(() => {
//     console.log('0 sec timer')
// }, 0000)


// console.log('Stopping')

const request = require('request')

const url = 'http://api.weatherapi.com/v1/current.json?key=cfd65f3a32bd4fd59a1103103233101&q=Bengaluru'

request({ url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    ///console.log("it is currently " +  data.current.temp_c + " degree centigrade, but it feels like " + data.current.feelslike_c + " degree centigrade")
    ///console.log(response)
})


//geo coding services
const geoCodingURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2h5YW1hcGJveCIsImEiOiJjbGRrNXF0amUwM2FuNDBvM21sNXkweHN1In0.MisUXUiTsAnSH-AXP3goRw&limit=1'

request({url: geoCodingURL}, (error,response) => {
    const data = JSON.parse(response.body)
    const latitude = data.features[0].center[0] 
    const longitude = data.features[0].center[1] 
    console.log("latitude: "+ latitude + " longitude: "+ longitude)
})

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'
