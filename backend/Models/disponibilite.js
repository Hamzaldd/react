const mongoose=require('mongoose')

const disponibiliteSchema=mongoose.Schema ({

        quantité:{
                type:Number,
                required:true ,
                trim: true
        },

        pharmacie_id:{
            
                type:mongoose.Schema.Types.ObjectId,
                ref:"Pharmacie"
        },
        medicament_id:{
            
                type:mongoose.Schema.Types.ObjectId,
                ref:"Medicament"
        }
                
            
        
})
module.exports=mongoose.model("Disponibilite",disponibiliteSchema);
