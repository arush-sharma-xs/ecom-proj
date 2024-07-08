import express,{Express, Request, Response} from "express"
import dotenv from "dotenv"
import morgan from "morgan" 
import user from "./routes/user"

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3300;

app.use(morgan("dev"))

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use("/user", user)


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});