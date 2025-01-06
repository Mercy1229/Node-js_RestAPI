import User from "../models/user.js";

export const postUser = async (req, res) => {
  try {
    const { name, email } = req.body
    const newUser = new User({ name, email });
    const savedUser = await newUser.save();
    res
      .status(200)
      .send({ message: "User data saved successfully!", user: savedUser });
  } catch (err) {
    console.error("Error saving user data:", err);
    res.status(500).send({ error: "Error saving user data" });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    res.status(500)
      .json({ error: error.message });
  }
};

export const getsingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500)
      .json({ error: error.message });
  }
};

