const express = require("express");
const router = express.Router();
const { 
    getPosts, 
    setPost, 
    deletePost, 
    updatePost,
    updatePostLikes, 
    getEntertainmentPosts, 
    getHallPosts, 
    getPrayerPosts 
} = require('../controllers/postControllers')

router.get("/", getPosts);
router.get("/entertainment", getEntertainmentPosts);
router.get("/prayer", getPrayerPosts)
router.get("/hall", getHallPosts)

router.post("/", setPost);

router.delete("/:id", deletePost);

router.put("/:id", updatePost);

router.patch('/likes/:id', updatePostLikes);

module.exports = router;
