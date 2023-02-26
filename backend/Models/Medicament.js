const mongoose=require('mongoose')

const medicamentSchema=mongoose.Schema ({

        nom:{
            type:String,
            required:true ,
            trim: true
        },
        
        description:{
            type:String,
            required:true ,
            trim: true
        },
        indication:{
            type:Boolean,
            required:true ,
            trim: true
        }
       
   
})







module.exports=mongoose.model("Medicament",medicamentSchema);