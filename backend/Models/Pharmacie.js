const mongoose=require('mongoose')

const pharmacieSchema=mongoose.Schema ({

        nom:{
            type:String,
            required:true ,
            trim: true
        },
        
        localistaion:{
            type:String,
            required:true ,
            trim: true
        },
        garde:{
            type:Boolean,
            required:true ,
            trim: true
        },
        
                
        /*horaire:[
            {matin:[
                {
                    ouverture:{
                        type:Number,
                        required:true ,
                        trim: true
                }},
                {
                    fermeture:{
                        type:Number,
                        required:true ,
                        trim: true
                }}
            ]

            },
            {
                apres_midi:[
                {
                    ouverture:{
                        type:Number,
                        required:true ,
                        trim: true
                }},
                {
                    fermeture:{
                        type:Number,
                        required:true ,
                        trim: true
                }}
            ]

            },
        ]*/
})







module.exports=mongoose.model("Pharmacie",pharmacieSchema);