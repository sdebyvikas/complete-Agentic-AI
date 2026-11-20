import express from  "express"
import dotenv from "dotenv"
dotenv.config()
import { GoogleGenAI } from "@google/genai";
const app = express()

const port = process.env.PORT || 5000;


    const ai = new GoogleGenAI({
        apiKey:process.env.GEMINI_API_KEY,

    })

    const main = async () => {
        console.log("function called")
        const response = await ai.models.generateContent({
             model:"gemini-3.1-flash-lite",
             contents:"what is js"
        })
        console.log(response.text, "ai response")
    }

    main()

app.listen(port, ()=>{
 console.log("Server Started at", port)   
})


