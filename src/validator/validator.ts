import z from 'zod';

const loginSchema = z.object({
    username: z.string(),
    password: z.string()
});

const signinSchema = z.object({
    email: z.string().email(),
    username: z.string(),
    password: z.string()
});

type Login = z.infer<typeof loginSchema>;
type Signin = z.infer<typeof signinSchema>;

export const LoginValidator = async (req, res, next) => {
    const verify = loginSchema.safeParse(req.body);
    if (!verify.success) {
        return res.status(400).send({
            status: 400,
            message: "Bad Data",
            errors: verify.error.errors
        });
    }
    next();
};

export const signinValidator = async (req, res, next) => {
    const verify = signinSchema.safeParse(req.body);
    if (!verify.success) {
        return res.status(400).send({
            status: 400,
            message: "Bad Data",
            errors: verify.error.errors
        });
    }
    next();
};
