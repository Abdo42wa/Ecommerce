import Mongoose from 'mongoose'
const orderSchema = Mongoose.Schema({
    user:{
        type: Mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    orderItems:[
        {
            name:{type:String, required:true},
            qty:{type:Number, required:true},
            image:{type:String, required:true},
            price:{type:Number, required:true},
            product:{
                type:Mongoose.Schema.Types.ObjectId,
                required:true,
                ref:'Product',
            },
        },
    ],
    shippingAddress:{
            address:{type:String, required:true},
            city:{type:String, required:true},
            psotCode:{type:String, required:true},
            country:{type:String, required:true},
    },
    paymentMethod:{
        type: String,
        required: true,
    },
    paymentResult:{
     id:{type:String},
     status:{type:String},
     update_time:{type:String},
     email_address:{type:String},
    },
    taxPrice:{
        type: Number,
        required: true,
        ddefault:0.0
    },
    shppingPrice:{
        type: Number,
        required: true,
        ddefault:0.0
    },
    totalPrice:{
        type: Number,
        required: true,
        ddefault:0.0
    },
    isPaid:{
        type: Boolean,
        required: true,
        ddefault:false
    },
    paidAt:{
        type:Date
    },
    isDelivered:{
        type:Boolean,
        required:true,
        default:true
    }, 
    deliveredAt:{
        type:Date
    },
},
{
    timestamps:true
})

const Order = Mongoose.model('Order', orderSchema)


export default Order