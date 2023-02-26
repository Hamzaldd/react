const express = require('express')
const router = express.Router()
const mediCtr = require('../Controllers/MedicamentController')
const verifyToken = require('./verifyToken')


router.get('/medicament',mediCtr.getAllMed)
router.get('/medicament/:id',mediCtr.getMedById)
router.post('/addMedicament',verifyToken,mediCtr.addMedicament)
router.delete('/delete/:idMedi',verifyToken,mediCtr.deleteMedicament)
module.exports = router