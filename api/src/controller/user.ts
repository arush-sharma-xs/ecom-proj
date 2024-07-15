import { Request, Response } from "express"
import { UserRegister, UserLogin } from '../../typings.d';
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken"

const prisma = new PrismaClient()

export const createUserAcount = async  (req:Request,res:Response) => {
    console.log("request Body", req.body);

    const userData : UserRegister = req.body;

    const user = await prisma.user.findFirst({ where :{
            email : userData.email
    }});

    if(!user) {
            const user = await prisma.user.create({data :userData})
            const token = jwt.sign({
                id : user.id
            }, "secret-key")

           return res.cookie("access_token", token, {
            maxAge : 7*24*60*60,
            httpOnly : true
           }).status(200).send("User Created");
    } else {
            return res.status(401).send("Account already exist.")
    }
}

export const authenticateUser = async (req:Request,res:Response) => {
    const userData : UserLogin = req.body;

    try {
        // check if user found or not
        await prisma.user.findUniqueOrThrow({ where : { 
            email : userData.email
        }})

        // if found
        try {
            const user = await prisma.user.findFirstOrThrow({where : {
                email : userData.email,
                password :userData.password
            }})
            
            const {password, ...other } = user;
            const token = jwt.sign(other, process.env.JWT_SECRET_KEY!)


           return res.cookie("x-auth-token", token, {
            httpOnly : true,
            sameSite : "lax"
           }).status(200).send(user);
       
        } catch(err) {
            return res.status(401).send("Wrong password")
        }

    } catch (err) {
        return res.status(400).send("User not found")
    }


}