import express  from 'express'
import dotenv   from 'dotenv'
import colors   from 'colors'
import connectDB from './config/db.js'
import {notFound,errorHandler} from './middlewae/errorMiddleware.js'

import productRouter from './routers/ProductRoutes.js'
import userRoutes from './routers/userRoutes.js'
import OrderRoute from './routers/OrderRoute.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('API is running')
})

app.use('/api/products',productRouter)
app.use('/api/users',userRoutes)
app.use('/api/orders', OrderRoute)


app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`server running on ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.italic))