const express = require('express');
const router = express.Router();
const ObjetosController = require('../controllers/ObjetosController');

router.get('/', ObjetosController.getAll);
router.get('/:id', ObjetosController.getById);
router.post('/', ObjetosController.create);
router.put('/:id', ObjetosController.update);
router.delete('/:id', ObjetosController.delete);

module.exports = router;