const express = require('express');
const router = express.Router();
const DetalleSolicitudController = require('../controllers/DetalleSolicitudController');

router.get('/', DetalleSolicitudController.getAll);
router.get('/:id', DetalleSolicitudController.getById);
router.post('/', DetalleSolicitudController.create);
router.put('/:id', DetalleSolicitudController.update);
router.delete('/:id', DetalleSolicitudController.delete);

module.exports = router;