const express = require('express')
const router = express.Router()
const pharCtr = require('../Controllers/PharmacieController')
const verifyToken = require('./verifyToken')


router.get('/pharmacie',pharCtr.getAllpharmacie)
router.get('/pharmacie/:localistaion',pharCtr.getPharmacieById)
router.post('/addPharmacie',verifyToken,pharCtr.addPharmacie)
router.delete('/delete/:idPharma',verifyToken,pharCtr.deletePharmacie)







module.exports = router