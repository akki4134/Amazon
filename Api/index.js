const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

//import routes
const authRoute = require('./Routes/userRoute')

dotenv.config();

//connect Database
mongoose.connect(process.env.DB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
});



//Middleware
app.use(express.json()) // to send post request

//Route middleware
app.use('/api/user', authRoute)


app.listen(8080, () => console.log("server connected"))