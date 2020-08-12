// const request=require('request')

const { request } = require("express");

// const url='http://api.weatherstack.com/current?access_key=c9e3f4f1002f800d656584c450b64655&query=37.82,-122.42'

// request({url:url,json:true},(error,response)=>{
//     if(error){
//         console.log('error'+error)
//     }
//     console.log(response.body.current)
// })
const path=require('path')

const express=require('express');
const { dirname } = require("path");

const publicDirPath=path.join(__dirname,'./public')


const app=express()
app.use(express.static(publicDirPath))



app.listen(3000,()=>{
    console.log('server is running at port '+3000)
})

const practice=()=>{
    console.log('i am adding this function for practice...')
}
practice()

