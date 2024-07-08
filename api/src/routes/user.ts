
import express from "express"
import { authenticateUser, createUserAcount } from "../controller/user";

const router = express.Router();

router.post("/register", createUserAcount)
router.post("/login", authenticateUser)


export default router;