import express from "express";

const PORT = 5000;

const app = express();

const logger = (req,res,next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if(url === "/protected") {
        return res.send("<h1>Not Allowed</h1>")
    }
    console.log("Allowed, you may continue.")
    next();
};

const handlehome = (req,res)=>{
    return res.send("i love middlewares");
};

const handleProtected = (req,res) => {
    return res.send("welcome to the protected loundge.");
};

app.use(logger);
app.use(privateMiddleware);
app.get("/", handlehome);
app.get("/protected",handleProtected);

const handleListening = () => 
    console.log(`Server listenting on port http://localhost:${PORT} ★`);

app.listen(PORT, handleListening) 