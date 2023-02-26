const express = require('express')
const router = express.Router()

const { getAlldispo, addDisponibilite, getdispobyid} = require('../Controllers/DisponibiliteController')
router.route('/disponibilite').get(getAlldispo)
router.route('/addDisponibilite').post(addDisponibilite)
router.route('/disponibilite/:medicament_id').get(getdispobyid)




module.exports = router