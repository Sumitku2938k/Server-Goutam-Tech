const { z } = require("zod");

//Creating an object Schema
const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(5, { message: "Email must be at least of 5 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(1024, { message: "Password must not be more than 1024 characters long"}),
});

const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Username must be at least of 3 characters" })
    .max(255, { message: "Username must not be more than 255 characters" }),
  phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(10, { message: "Phone number must be at least 10 digits long" })
    .max(20, { message: "Phone number must not be more than 20 digits long" }),
});


module.exports = { signupSchema, loginSchema };
