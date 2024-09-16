const express = require('express')
const app = express()

const mongoose = require('mongoose')

const productRoutes = require('./routes/product.route')

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.use("/api/products", productRoutes)

app.get('/', (req, res) => {
    res.send('Hello from Node API')
})

mongoose.connect('mongodb+srv://kashish0mittal:IZsdfCnMNRt1vh4U@backenddb.mhk2z.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB')
    .then(() => {
        console.log('Connected!')
        app.listen(3000, () => {
            console.log('Server is listening to port 3000')
        })
    })
    .catch(() => console.log("Connection Failed!"));