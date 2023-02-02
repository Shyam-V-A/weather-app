//const request = require('request')
const geoCode = require('./utils/geoCode')
const weather = require('./utils/weather')

try{
    if(process.argv[2]){

        // geoCode(process.argv[2], (error, data)=> {
        // geoCode(process.argv[2], (error, {latitude,longitude,location})=> {
           geoCode(process.argv[2], (error, {latitude,longitude,location} = {})=> {

            if(error){
                console.log('Error :',error)
            }
            else{
                
                //console.log('data : ',data.location)
                console.log('data : ',location)

                //weather(data.longitude,data.latitude,(error,data) => {
                weather(longitude,latitude,(error,data) => {

                    if(error){
                        console.log('Error : ',error)
                    }
                    else{
                        console.log('Data :',data)
                    }
                })
                
            }
        })

    }
    else{
        console.log("please provide a valid address")
    }
    
}
catch(error){
    console.log("something went wrong ")
}
//console.log(process.argv)