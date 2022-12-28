const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path')
const bodyParser = require('body-parser');
const Sequelize = require('sequelize') 
const sequelize = require('./config/database')

const app = express()

  sequelize.authenticate()
  .then(()=>console.log('connected with postgres database'))
  .catch((err)=>console.log('error:'+err))

app.get('/',(req,res) =>{
    res.send('INDEX_PAGE')
})







//PORT:

const port= process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`app is connected in ${port}`)
})