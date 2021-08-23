const express = require('express');
const router = express.Router();

const todoControllers = require('../controllers/todo-controller');

router.get('/', todoControllers.getIt);
router.post('/', todoControllers.postIt);
router.get('/:_id', todoControllers.getOne);
router.delete('/:_id', todoControllers.deletIt);
router.patch('/:_id', todoControllers.patchIt);

module.exports = router;