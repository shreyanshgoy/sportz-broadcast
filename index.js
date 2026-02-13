import express from "express";

const app = express();

app.use(express.json());   // to read json content from request body

// GET endpoint
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Sportz Project Server" });
});

app.listen(3000 , ()=>{
    console.log("Server is running on port 3000");
})


