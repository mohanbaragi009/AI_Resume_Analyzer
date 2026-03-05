import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { findUserByEmail, createUser, getUserById } from "../utils/userStore.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered. Please login." });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = createUser(name, email, hashedPassword);

    res.status(201).json({ message: "Registration successful!", userId: user._id });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ token, name: user.name, email: user.email });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
