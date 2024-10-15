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


app.use(express.json());
app.use(cors({
    origin: 'https://backend-deploy-chi.vercel.app/:5000',
    credentials: true,
}));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

connectDB();

app.use('/api/users', userRoutes);
app.use('/api/notes', noteRoutes);



server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


