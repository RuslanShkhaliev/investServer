import {ErrorHandler} from '@/errorHandler';
import {NextFunction, Request, Response} from 'express';

export const errorHandlingMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) {
        return next(err);
    }
    if (err instanceof ErrorHandler) {
        return res.status(err.statusCode).json({message: err.message});
    }

    res.status(500).json({message: 'Непредвиденная ошибка!'})
}
