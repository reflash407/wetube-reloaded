import express from "express";
import morgan from "morgan";

import globalRouter from "./routers/golbalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 5000;

const app = express();
const logger = morgan("dev");


app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use("/",globalRouter);
app.use("/video",videoRouter);
app.use("/user",userRouter);

const handleListening = () => 
    console.log(`Server listenting on port http://localhost:${PORT} ★`);

app.listen(PORT, handleListening) 