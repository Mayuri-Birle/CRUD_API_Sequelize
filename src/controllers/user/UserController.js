const {
  okResponse,
  badRequestError
} = require("../../global_functions");

const User = require('../../db/models/user');

// Add user Controller
// req : HTTP Request Object
// res : HTTP Response Object
const AddUser = async (req, res) => {
  let data = req.body;
  if (!data.firstName) return badRequestError(res, "Enter firstName");
  if (!data.lastName) return badRequestError(res, "Enter lastName");
  if (!data.email) return badRequestError(res, "Enter email");

  //Insert into table
  let user_added = await User.create(data);

  if (!user_added) return badRequestError(res, "User not added");

  return okResponse(res, user_added, "User Added");
};

// Get user Controller
// req : HTTP Request Object
// res : HTTP Response Object
const GetUser = async (req, res) => {
  let data = req.params;

  if (!data.id) return badRequestError(res, "Enter id");

  let user = await User.findByPk(data.id);
  if (user === undefined) return badRequestError(res, "No user found");

  return okResponse(res, user, "User Details")
}

// Get users Controller npm
// req : HTTP Request Object
// res : HTTP Response Object
const GetUsers = async (req, res) => {

  let users = await User.findAll();

  return okResponse(res, users, "Users Details");
}

// Update user Controller
// req : HTTP Request Object
// res : HTTP Response Object
const UpdateUser = async (req, res) => {
  let data = req.params;


  let updated_user = await User.update({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  }, {
    where: {
      id: data.id
    }
  });

  if (!updated_user) return badRequestError(res, "User not updated");

  return okResponse(res, "User Updated");
}

// Remove user Controller
// req : HTTP Request Object
// res : HTTP Response Object
const RemoveUser = async (req, res) => {
  let data = req.params;
  console.log(data.id);

  let removed_user = await User.destroy({
    where: {
      id: data.id
    }
  });

  if (!removed_user) return badRequestError("User not removed");

  return okResponse(res, "User Removed");
}

// Export Controllers
module.exports = {
  AddUser,
  GetUser,
  GetUsers,
  UpdateUser,
  RemoveUser
};