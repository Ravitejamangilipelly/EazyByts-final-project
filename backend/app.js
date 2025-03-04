import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL, // Ensure it's defined in .env
    methods: ["GET", "POST", "OPTIONS"], // Allow preflight requests
    credentials: true,
}));

app.options("*", cors()); // Handle preflight requests

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/v1/message", messageRouter);

// Database Connection
dbConnection();

export default app;
