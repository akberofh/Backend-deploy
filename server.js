import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import noteRoutes from './routes/noteRoutes.js';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import http from 'http';
dotenv.config();
const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin: `https://backend-deploy-chi.vercel.app/:${PORT}`,
    credentials: true,
}));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


connectDB();

app.use('/api/users', userRoutes);
app.use('/api/notes', noteRoutes);

app.get("/", (req, res) => {
    res.json({
      message: "Welcome",
    });
  });

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


