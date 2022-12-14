const router = require('express').Router();
const productsController = require('../../controllers/productsController');

// GET
router.get('/', productsController.getAll);
router.get('/:id', productsController.getById);

// POST
router.post('/', productsController.create);

// PUT
router.put('/:id', productsController.update);

// DELETE
router.delete('/:id', productsController.deleteDocument);

module.exports = router;
