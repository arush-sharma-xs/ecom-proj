import express,{Express, Request, Response} from "express"
import dotenv from "dotenv"
import morgan from "morgan" 
import user from "./routes/user"
import cors from "cors";
import bodyParser from "body-parser"

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3300;

app.use(cors({
  origin : "*",
  credentials : true
}))

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use("/user", user)


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});