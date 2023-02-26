let Pharmacie = require('../Models/Pharmacie')

exports.getAllpharmacie =async (req,res)=>{
    const pharmacies = await Pharmacie.find()
    res.status(200).json({
        success:true,
        count:pharmacies.length,
        pharmacies
     })
}

exports.getPharmacieById =async (req,res)=>{
    const phar = await Pharmacie.findOne({
    localistaion:req.params.localistaion
    })
    res.status(200).json({
    success:true,
    phar
    })
    }
exports.addPharmacie = async (req,res)=>{
    const pharma = new Pharmacie(req.body)
    await pharma.save()
    res.status(200).json({
        success:true,
        pharma
    })    

}   
exports.deletePharmacie = async(req, res)=>{
    const delete_pharma = await Pharmacie.deleteOne(
        {_id:req.params.idPharma}
    )
    res.status(200).json({
        delete:true,
        delete_pharma
    })
}
   