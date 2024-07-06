import express,{Express, Request, Response} from "express"
import dotenv from "dotenv"
import morgan from "morgan" 
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3300;

app.use(morgan("dev"))
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});