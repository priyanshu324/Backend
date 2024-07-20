const express = require('express');
const { requireSingIn } = require('../controllers/userControllers');
const { createPostController, getAllPostsController, getUserPostsController, deletePostController, updatePostController } = require('../controllers/postControllers');

// router object
const router = express.Router()

// CREATE POST || POST
router.post('/create-post', requireSingIn, createPostController);

// get all posts
router.get('/get-all-posts', getAllPostsController)

// get user posts
router.get('/get-user-posts', requireSingIn, getUserPostsController)

// delete post
router.delete('/delete-posts/:id', requireSingIn, deletePostController)

//UPDATE POST
router.put("/update-post/:id", requireSingIn, updatePostController);

// exports
module.exports = router 