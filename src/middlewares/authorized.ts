import jwt from "jsonwebtoken";

const userSecretKey = "ThisisMyUser";

export const auth = async (req, res, next) => {
    const token = req.headers.token;

    if (!token) {
        return res.status(400).send({
            status: 400,
            message: "Token is missing"
        });
    }

    try {
        const decoded = jwt.verify(token, userSecretKey); // FIX: use jwt.verify, not token.verify
        req.userId = decoded.userId; // Set userId in request for later use
        next();
    } catch (err) {
        return res.status(401).send({
            status: 401,
            message: "Token is invalid or expired"
        });
    }
};
