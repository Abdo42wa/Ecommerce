import Mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

//creating schema. every document in users collection will follow
//this schema structure
const userSchema = Mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        required: true,
        default:false
    },
},{
    timestamps:true
})

userSchema.methods.matchPassword = async function(enteredPassword){
   return await bcrypt.compare(enteredPassword,this.password) 
}

// incrybted password before saving data
userSchema.pre('save',async function (next){

    if(!this.isModified('password')){
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})

//creating user model. it bascially represents collection. it'll create collection
//if it doesnt exist. we pass collection name singular form it'll pluralize it auto.
//also provide userSchema by which all documents in users collection will be created
const User = Mongoose.model('User',userSchema)

export default User