const express = require('express');
const router = express.Router();
const workerController = require('../controllers/workerController');

router.post('/', workerController.createWorker);
router.get('/', workerController.getAllWorkers);
router.get('/:id', workerController.getWorkerById);
router.put('/:id', workerController.updateWorker);
router.delete('/:id', workerController.deleteWorker);

module.exports = router;