import jwt from "jsonwebtoken";
import { userSecretKey } from "../config.js";

export const auth = async (req, res, next) => {
    const token = req.headers.token;

    if (!token) {
        return res.status(400).send({
            status: 400,
            message: "Token is missing"
        });
    }

    try {
        const decoded = jwt.verify(token, userSecretKey);
        req.userId = decoded.userId;
    } catch (err) {
        return res.status(401).send({
            status: 401,
            message: "Token is invalid or expired"
        });
    }
};
