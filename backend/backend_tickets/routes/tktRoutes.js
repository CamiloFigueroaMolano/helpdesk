const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/tktController');

router.post('/', ticketController.create);              //  /tkt/            
router.get('/', ticketController.getAll);               //  /tkt/
router.get('/:id', ticketController.getById);           //  /tkt/:id
router.put('/:id', ticketController.update);            //  /tkt/:id
router.put('/close/:id', ticketController.close);       //  /tkt/closed/:id
router.delete('/:id', ticketController.delete);         //  /tkt/:id

module.exports = router;
