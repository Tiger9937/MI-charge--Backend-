import express from 'express'
const app = express()

import dotenv from 'dotenv'

import DB_conect from './src/DataBase/index.js'

dotenv.config({
    path:"./env"
})


DB_conect().then(

    app.listen(process.env.PORT,()=>{
      console.log("App is runing at Port " + process.env.PORT)
    })
).catch(
  (err)=>{
    console.log("Somthing is worng app is not runing" + err)
  }
)

