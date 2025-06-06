const express=require('express')
const aiRoutes = require('./routes/ai.routes')
const app=express()
const cors=require('cors')

app.use(express.json())
app.use(cors())


app.get('/',(req,res)=>{
    res.send('Server is running')
})


app.use('/ai',aiRoutes)

module.exports=app