import {ErrorHandler} from '@/errorHandler';
import {NextFunction, Request, Response} from 'express';

export const errorHandlingMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log({err});

    if (res.headersSent) {
        return next(err);
    }
    if (err instanceof ErrorHandler) {
        return res.status(err.statusCode).json({message: err.message, status: err.statusCode});
    }

    res.status(500).json({message: 'Непредвиденная ошибка!'})
}
