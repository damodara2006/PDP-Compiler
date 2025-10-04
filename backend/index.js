import express from "express"
import cors from "cors";
import {resf} from "./Controllers/compiler.js"
const app = express()
app.use(cors());
app.use(express.json())
app.get("/", (req,res) => {
    res.send("Hello this is backend server")
})
app.post("/compile", async(req, res) => {
    const { code, language, input } = req.body
    // console.log(language)
    let data = await resf(code, language, input)
    res.send(data)
    // console.log(data)
    return;
})
const PORT = 8081
app.listen(PORT, () => {
    console.log(`Sever running on ${PORT}`);
})
