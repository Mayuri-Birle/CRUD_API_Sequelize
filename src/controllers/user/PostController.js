const {
    okResponse,
    badRequestError
} = require("../../global_functions");

const Post = require('../../db/models/posts');

// Add post Controller
// req : HTTP Request Object
// res : HTTP Response Object
const AddPost = async (req, res) => {
    let data = req.body;
    if (!data.title) return badRequestError(res, "Enter title");
    if (!data.description) return badRequestError(res, "Enter description");

    //Insert into table
    let post_added = await Post.create(data);

    if (!post_added) return badRequestError(res, "Post not added");

    return okResponse(res, post_added, "Post Added");
};

// Get post Controller
// req : HTTP Request Object
// res : HTTP Response Object
const GetPost = async (req, res) => {
    let data = req.params;

    if (!data.id) return badRequestError(res, "Enter id");

    let post = await Post.findByPk(data.id);
    if (post === undefined) return badRequestError(res, "No post found");

    return okResponse(res, post, "post Details")
}

// Get posts Controller npm
// req : HTTP Request Object
// res : HTTP Response Object
const GetPosts = async (req, res) => {

    let posts = await Post.findAll();

    return okResponse(res, posts, "posts Details");
}

// Update post Controller
// req : HTTP Request Object
// res : HTTP Response Object
const UpdatePost = async (req, res) => {
    let data = req.params;


    let updated_post = await Post.update({
        title: req.body.title,
        description: req.body.description,
        userId: req.body.userId
    }, {
        where: {
            id: data.id
        }
    });

    if (!updated_post) return badRequestError(res, "post not updated");

    return okResponse(res, "post Updated");
}

// Remove post Controller
// req : HTTP Request Object
// res : HTTP Response Object
const RemovePost = async (req, res) => {
    let data = req.params;
    console.log(data.id);

    let removed_post = await Post.destroy({
        where: {
            id: data.id
        }
    });

    if (!removed_post) return badRequestError("post not removed");

    return okResponse(res, "post Removed");
}

// Export Controllers
module.exports = {
    AddPost,
    GetPost,
    GetPosts,
    UpdatePost,
    RemovePost
};