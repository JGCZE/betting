import express from 'express';
import cors from 'cors';
import betRoutes from './routes/bet.routes';
import { connectToDB } from './config/db';
import dotenv from "dotenv";

dotenv.config();

const app = express();

const allowedOrigin = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

app.use(cors({ origin: allowedOrigin }));
app.use(express.json());

app.use('/', betRoutes)

const PORT = process.env.PORT || 5001;

connectToDB().then(() => {
  console.log("Database connected. Starting server... ");
  
  app.listen(PORT, () => {
    console.log(`Server is running on port >>>>>> ${PORT} <<<<<<`);
  });
});

export default app;
