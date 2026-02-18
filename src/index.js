import "dotenv/config";
import express from "express";

const app = express();
import { matchRouter } from "./routes/matches.js";

app.use(express.json());   // to read json content from request body

// GET endpoint
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Sportz Project Server" });
});

app.use("/matches", matchRouter);   // to use the matches router for all routes starting with /matches

app.listen(3000 , ()=>{
    console.log("Server is running on port 3000");
})



