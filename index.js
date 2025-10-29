const express = require('express')
const app = express()
require('dotenv').config()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Login' , (res , req)=>{
    res.send('Hello World!')
})

app.get('hot',()=>{
  res.send("hello word 3")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
