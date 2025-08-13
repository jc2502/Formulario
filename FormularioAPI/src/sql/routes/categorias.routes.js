const express = require('express');
const router = express.Router();
const CategoriasController = require('../controllers/CategoriasController');

router.get('/', CategoriasController.getAll);
router.get('/:id', CategoriasController.getById);
router.post('/', CategoriasController.create);
router.put('/:id', CategoriasController.update);
router.delete('/:id', CategoriasController.delete);

module.exports = router;