const Medicament = require('../Models/Medicament')
let medicament= require('../Models/Medicament')

exports.getAllMed =async (req,res)=>{
const meds = await medicament.find()
res.status(200).json({
success:true,
count:meds.length,
meds
})
}

exports.getMedById =async (req,res)=>{
    _id = req.params.idProd
    const med = await medicament.findOne({
    _id:_id
    })
    res.status(200).json({
    success:true,
    med
    })
    }

    exports.addMedicament = async (req,res)=>{
        const medi = new Medicament(req.body)
        await medi.save()
        res.status(200).json({ 
            success:true,
            medi
        })    
    
    }
    exports.deleteMedicament = async(req, res)=>{
        const delete_medi = await Medicament.deleteOne(
            {_id:req.params.idMedi}
        )
        res.status(200).json({
            delete:true,
            delete_medi
        })
    }   