
const bcrypt = require("bcrypt");
const Name = require("../model/model");

const renderHome = (req, res) => {
  Name.find().then(() => {
    res.render("index");
  });
};

const addUser = async (req, res) => {
  try {
    // Get the name and password from the request body
    const { name, password } = req.body;

    // Hash the password using bcrypt
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user with the hashed password
    const newUser = new Name({
      name: name,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();
    res.redirect("/");
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).send("An error occurred while adding the user.");
  }
};

module.exports = { renderHome, addUser };