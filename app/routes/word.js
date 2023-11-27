const express = require('express')
const router = express.Router()
const controller = require('../controllers/word')

const path = 'word'
/**
 * Obtener palabras
 */
router.get(
    `/${path}`,
    controller.getData
)

/**
 * Crear palabra
 */

router.post(
    `/${path}`,
    controller.sendData
)

module.exports = router;