import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import userRoute from './Routes/userRoute.js'

const app = express()

//Middleware
dotenv.config();

app.use(express.json()) // to send post request
app.use(express.urlencoded({extended:true}))


//connect Database
mongoose.connect(process.env.DB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
});

const db = mongoose.connection
db.once('open', _ => {
    console.log('Database connected')
})

db.on('error', err => {
    console.error('connection error:', err)
    console.error('Mongo connection error')
})


//Route middleware
app.use('/api/user', userRoute)

app.get('/test', (req, res)=>{
    res.send('server is ready')
})

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });


app.listen(4000, () => console.log("server connected"))