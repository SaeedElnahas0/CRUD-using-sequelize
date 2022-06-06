const express = require('express')
const cors = require('cors')


const app = express()


// middleware
app.use(cors({origin: "*"}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// routers
const productRouter = require('./routes/productRouter')
const reviewRouter = require('./routes/reviewRouter')
app.use('/api/products', productRouter)
app.use('/api/reviews', reviewRouter)

//static Images Folder
app.use('/Images', express.static('./Images'))


//port
const PORT = process.env.PORT || 8080

//server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})