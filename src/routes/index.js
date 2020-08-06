const express = require("express");
const router = express.Router();

// import user controller.
const UserController = require("../controllers/index").UserController;
const PostController = require("../controllers/index").PostController;

// API Routes for User

router.post("/user", UserController.AddUser);
router.get("/user/:id", UserController.GetUser);
router.get("/users", UserController.GetUsers);
router.put("/user/:id", UserController.UpdateUser);
router.delete("/user/:id", UserController.RemoveUser);


// API Routes for Post

router.post("/Post", PostController.AddPost);
router.get("/Post/:id", PostController.GetPost);
router.get("/Posts", PostController.GetPosts);
router.put("/Post/:id", PostController.UpdatePost);
router.delete("/Post/:id", PostController.RemovePost);



// export router;
module.exports = router;