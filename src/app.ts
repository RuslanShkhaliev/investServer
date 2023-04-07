import {errorHandlingMiddleware} from '@/middlewares/errorHandlingMiddleware';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import {appRouter} from './router';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api', appRouter)

app.use(errorHandlingMiddleware)

export default app
