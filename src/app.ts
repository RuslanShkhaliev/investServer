import {errorHandlingMiddleware} from '@/middlewares';
import AppRouter from '@/router';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use('/api', AppRouter)

app.use(errorHandlingMiddleware)

export default app
