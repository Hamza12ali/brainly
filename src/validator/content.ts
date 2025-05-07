import z from 'zod';

const contentSchema = z.object({
    username: z.string(),
    password: z.string()
});


type Login = z.infer<typeof contentSchema>;

export const contentValidator = async (req, res, next) => {
    const verify = contentSchema.safeParse(req.body);
    if (!verify.success) {
        return res.status(400).send({
            status: 400,
            message: "Bad Data",
            errors: verify.error.errors
        });
    }
    next();
};
