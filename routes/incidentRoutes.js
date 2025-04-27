const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const {
  createIncident,
  getAllIncidents,
  getIncidentById,
  updateIncident,
  deleteIncident
} = require('../controllers/incidentController');
const authMiddleware = require('../middleware/authMiddleware');

router.post(
  '/',
  authMiddleware,
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('severity').isIn(['low', 'medium', 'high']).withMessage('Severity must be low, medium or high')
  ],
  createIncident
);

router.get('/', getAllIncidents);
router.get('/:id', getIncidentById);
router.put('/:id', authMiddleware, updateIncident);
router.delete('/:id', authMiddleware, deleteIncident);

module.exports = router;