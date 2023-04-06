import {errorHandlingMiddleware} from '@/middlewares/errorHandlingMiddleware';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import {appRouter} from './router';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api', appRouter)

app.use(errorHandlingMiddleware)

export default app
