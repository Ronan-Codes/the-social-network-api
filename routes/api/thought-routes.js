const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// GET ALL - /api/thoughts
router
    .route('/')
    .get(getAllThoughts)

// POST Thought - /api/thoughts/:userId
router
    .route('/:userId')
    .post(createThought);

// GET thought & PUT - /api/thoughts/:thoughtId
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    // .delete(deleteThought);

// DELETE Thought
router
    .route('/:thoughtId/:userId')
    .delete(removeThought);

// POST reactions - /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .put((addReaction))

// DELETE reactions - /api/thoughts/:thoughtId/reactions/:reactionId
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete((removeReaction))

module.exports = router;