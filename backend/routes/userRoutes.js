const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.register);      // POST   /user/register
router.get('/', userController.getAll);                // GET    /user/
router.get('/:id', userController.getById);            // GET    /user/:id
router.put('/:id', userController.update);             // PUT    /user/:id
router.delete('/:id', userController.delete);          // DELETE /user/:id

module.exports = router;
    