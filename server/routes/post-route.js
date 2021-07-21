const express = require('express');
const router = express.Router();
const { getAllPosts, getById, addNewPost, editPost, deletePost } = require("../controllers/posts-controller");

router.get('/', getAllPosts);
router.get('/:id', getById);
router.post('/', addNewPost);
router.put('/:id', editPost);
router.delete("/:id", deletePost);


module.exports = router;