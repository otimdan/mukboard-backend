const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    isGeneral: {
        type: Boolean,
        default: true,
    },
    category: {
        type: String,       
    },
    content: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    noOfLikes: {
        type: Number,
        default: 0
    }
}, {   timestamps: true,  });

module.exports = mongoose.model("Post", PostSchema);
