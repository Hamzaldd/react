const mongoose=require('mongoose')

const userSchema=mongoose.Schema ({

        nom:{
            type:String,
            required:true ,
            trim: true
        },
        password:{
            type:String,
            required:true ,
            trim: true
        },
 
        email:{
            type:String,
            required:true ,
            trim: true
        }
       
})







module.exports=mongoose.model("users",userSchema);