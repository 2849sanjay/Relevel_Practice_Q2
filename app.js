const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dbConfig = require("./configs/db.config");
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const constants = require("../utils/constants");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes")(app);

// Setup the mongoDB connection and create on ADMIN user

mongoose.connect(dbConfig.DB_URL, async () => {
  console.log("MongoDB connected");

  await User.collection.drop(); // since the Dev setup

  const user = await User.create({
    name: "Vishwa Mohan",
    userId: "admin",
    password: bcript.hashSync("Welcome1", 8),
    email: "kvish012@gmail.com",
    userType: constant.usertype.admin,
  });
  console.log("admin created", user);
});

// Start the express server

app.listen(serverConfig.PORT, () => {
  console.log("Application has started on the port 8081", serverConfig.PORT);
});
