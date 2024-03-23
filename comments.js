// Create a web server.
//==============================================================================

// Import the express module.
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const { get } = require('http');

// Handle request
router.get('/', commentController.getComments);
router.get('/create', commentController.createComment);
router.post('/', commentController.createComment);
router.put('/', commentController.updateComment);
router.delete('/', commentController.deleteComment);

module.exports = router;