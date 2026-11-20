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
        const response = await ai.models.generateContent({
             model:"gemini-3.8-flash",
             contents:"hello"

        })
    }


app.listen(port, ()=>{
 console.log("Server Started at", port)   
})


