import express from "express";  
//kalau pake ini, harus di package.json tambahin "type": "module", biar bisa pake import, tapi kalau pake require, gak perlu.
//const express = require("express"); //dua ini sama aja, cuma beda cara importnya, tergantung versi node yang digunakan
import notesRoutes from "./routes/notesRoutes.js"; //ini pake import, jadi harus pake "type": "module" di package.json
import {connectDB} from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import rateLimiter from "./middleware/rateLimiter.js";
import path from "path";

dotenv.config();

console.log(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve(); 

// middleware
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}
app.use(express.json()); // Middleware for parsing JSON
app.use(express.static(path.join(__dirname, "../frontend/dist"))); // Serve static files from the frontend build directory

//simple logger middleware, buat ngecek request yang masuk ke server, bisa dihapus kalau udah yakin semua jalan dengan baik
// app.use((req, res, next) => {
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//     next();
// });

app.use(rateLimiter); // Apply rate limiting middleware to all routes

app.get("/", (_, res) => {
  res.status(200).json({ message: "MERN Notes API is running" });
});

app.use("/api/notes", notesRoutes); 

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});
