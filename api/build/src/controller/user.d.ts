import { Request, Response } from "express";
export declare const createUserAcount: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const authenticateUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
