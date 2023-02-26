const { path } = require('../app')
let disponibilite= require('../Models/disponibilite')

exports.getAlldispo =async (req,res)=>{
const dispo = await disponibilite.find().populate('pharmacie_id').populate('medicament_id')
res.status(200).json({
success:true,
count:dispo.length,
dispo
})
}
exports.getdispobyid= async(req,res)=>{
    const dispid= await disponibilite.find({ medicament_id: req.params.medicament_id }).populate('pharmacie_id').populate('medicament_id')
    res.status(200).json({
        success:true,
        count:dispid.length,
        dispid
        })
}
exports.addDisponibilite = async (req,res)=>{
    const dispo = new disponibilite(req.body)
    await dispo.save()
    res.status(200).json({
        success:true,
        dispo
    })    

}

