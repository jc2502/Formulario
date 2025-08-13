const express = require('express');
const router = express.Router();
const SolicitudesController = require('../controllers/SolicitudesController');

router.get('/', SolicitudesController.getAll);
router.get('/:id', SolicitudesController.getById);
router.post('/', SolicitudesController.create);
router.put('/:id', SolicitudesController.update);
router.delete('/:id', SolicitudesController.delete);

module.exports = router;