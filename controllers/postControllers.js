const Post = require('../models/postModel')
const mongoose = require('mongoose')

//GET ALL GENERAL POSTS
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find({ category: "general"});
        res.status(200).json({posts});
    } catch (error) {
        res.status(400).send(error);
    }
}

//GET ALL ENTERTAINMENT POSTS
const getEntertainmentPosts = async (req, res) => {
    try {
        const posts = await Post.find({ category: "entertainment"});
        res.status(200).json({posts});
    } catch (error) {
        res.status(400).send(error);
    }
}

//GET ALL PRAYER (muslim & christian ) POSTS 
const getPrayerPosts = async (req, res) => {
    try {
        const posts = await Post.find({ category: "prayer"});
        res.status(200).json({posts});
    } catch (error) {
        res.status(400).send(error);
    }
}

// GET ALL HALL POSTS
const getHallPosts = async (req, res) => {
    try {
        const posts = await Post.find({ category: "hall"});
        res.status(200).json({posts});
    } catch (error) {
        res.status(400).send(error);
    }
}


//CREATE NEW POST
const setPost = async (req, res) => {
    if(!req.body.title) {
        res.status(400)
        throw new Error("please add a field")
    }
    const post = await Post.create({
        title: req.body.title,
        content: req.body.content,
        category: req.body.category,
        imageUrl: req.body.imageUrl
    })
    await post.save()
    res.status(200).json(post)
}


//UPDATE A POST 
const updatePost = async (req, res) => {
    const post = Post.findById(req.params.id)

    if(!post){
        res.status(400)
        throw new Error("Post not found")
    }

    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    await updatedPost.save();
 
    res.status(200).json(updatedPost)
}
//UPDATE A POST Likes
const updatePostLikes = async (req, res) => {
    const post = Post.findById(req.params.id)

    if(!post){
        res.status(400)
        throw new Error("Post not found")
    }

    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body)

    await updatedPost.save();
    res.status(200).json(updatedPost) 
}


//DELETE A POST
const deletePost = async (req, res) => { 
    const post = Post.findById(req.params.id)

    if(!post){
        res.status(400)
        throw new Error("Post not found")
    }

    await post.remove()
    res.status(200).json({id: req.params.id}) 
}

module.exports = {
    getPosts,
    setPost,
    deletePost,
    updatePost, 
    getEntertainmentPosts,
    getHallPosts,
    getPrayerPosts,
    updatePostLikes,
}