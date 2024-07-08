"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUser = exports.createUserAcount = void 0;
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma = new client_1.PrismaClient();
const createUserAcount = async (req, res) => {
    const userData = req.body;
    const user = await prisma.user.findFirst({ where: {
            email: userData.email
        } });
    if (!user) {
        const user = await prisma.user.create({ data: userData });
        return res.status(200).send("User Created");
    }
    else {
        return res.status(401).send("Account already exist.");
    }
};
exports.createUserAcount = createUserAcount;
const authenticateUser = async (req, res) => {
    const userData = req.body;
    try {
        // check if user found or not
        await prisma.user.findUniqueOrThrow({ where: {
                email: userData.email
            } });
        // if found
        try {
            const user = await prisma.user.findFirstOrThrow({ where: {
                    email: userData.email,
                    password: userData.password
                } });
            const { password, ...other } = user;
            const token = jsonwebtoken_1.default.sign(other, process.env.JWT_SECRET_KEY);
            return res.cookie("x-auth-token", token, {
                httpOnly: true,
                sameSite: "lax"
            }).status(200).send(user);
        }
        catch (err) {
            return res.status(401).send("Wrong password");
        }
    }
    catch (err) {
        return res.status(400).send("User not found");
    }
};
exports.authenticateUser = authenticateUser;
//# sourceMappingURL=user.js.map