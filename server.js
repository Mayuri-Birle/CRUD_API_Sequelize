// Express app dependencies.

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

// Express Router Initialize
const router = express.Router();

// Express middlewares { body-parser, cors, morgan... }
const app = express()
  .use(bodyParser.json())
  .use(morgan("dev"))
  .use(router)
  .use(
    cors({
      credentials: true,
      origin: (origin, callback) => callback(null, true),
    })
  );
app.use(express.static(path.join(__dirname, "public")));

//Database connection
const db = require("./src/db/config/database");
db.authenticate()
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Error: " + err));

// // Import API Routes.
const userRoutes = require("./src/routes/index");
// Add routes as middleware.
app.use("/api", userRoutes);

const port = process.env.PORT || 3000;

// Express Server
const server = app.listen(port, () => {
  console.log("Server listening at port %s", port);
});