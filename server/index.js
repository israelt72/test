import express from 'express';
import userRouter from './routes/user.js';
import cors from 'cors';

const app = express();

app.use(cors());//enable all CORS requests

app.use(express.json());

app.use("/api/users" ,userRouter);

app.listen(3000, ()  =>{
console.log('Server is running on http://localhost:3000');
});