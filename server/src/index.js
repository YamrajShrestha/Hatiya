const express = require('express')
const app = express()
const port = 4000

const cors=require('cors')
const connection=require('./db/connection')
const userRoute=require('./routes/user')
const productRoute=require('./routes/product')

app.use(express.json())
app.use(cors())
app.use(userRoute)
app.use(productRoute)
connection()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})