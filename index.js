import express from "express"

const app = express();

const PORT = process.env.PORT || 8000

app.use(express.json())

app.get("/", (req, res) => {
    res.json("Hello World")
})

app.post("/", (req, res) => {
    res.json({body: req.body})
})

app.listen(PORT, () => {
    console.log("Listening to port ", PORT)   
})

