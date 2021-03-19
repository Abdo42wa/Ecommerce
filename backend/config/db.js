import Mongoose from 'mongoose'

const connectDB = async () => {

    try {
        const conn = await Mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useCreateIndex:true,
            useNewUrlParser:true
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        
        console.error(`Conection Error ${error.message}`.red.underline.bold)
    }

}

export default connectDB