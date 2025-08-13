const express = require('express');
const router = express.Router();
const BrigadasController = require('../controllers/BrigadasController');

router.get('/', BrigadasController.getAll);
router.get('/:id', BrigadasController.getById);
router.post('/', BrigadasController.create);
router.put('/:id', BrigadasController.update);
router.delete('/:id', BrigadasController.delete);

module.exports = router;