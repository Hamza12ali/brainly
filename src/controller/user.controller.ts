import bcrypt from "bcryptjs";
import { userModel } from "../models/user.model.js";
import jwt from "jsonwebtoken";

const genSalt = 10;
const userSecretKey = "ThisisMyUser";

// Signup
export const signinController = async (req, res) => {
    const { email, username, password } = req.body;

    try {
        const exist = await userModel.findOne({ email });
        if (exist) {
            return res.status(400).send({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, genSalt);

        const user = new userModel({ username, email, password: hashedPassword });
        await user.save();

        return res.status(201).send({ message: "User created successfully" });

    } catch (err:unknown) {
        return res.status(500).send({
            message: "Database error",
        });
    }
};

// Login
export const loginController = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await userModel.findOne({ username });
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).send({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ userId: user._id }, userSecretKey, { expiresIn: "1h" });

        res.status(200).send({ token });

    } catch (err:unknown) {
        return res.status(500).send({
            message: "Server error",
        });
    }
};

// Me
export const meController = async (req, res) => {
    try {
        const user = await userModel.findById(req.userId).select("-password"); // exclude password
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        res.status(200).send(user);
    } catch (err) {
        res.status(500).send({ message: "Error fetching user" });
    }
};
