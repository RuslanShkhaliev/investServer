import {ErrorHandler} from '@/errorHandler';
import {NextFunction, Request, Response} from 'express';

export const errorHandlingMiddleware = (err: Error | ErrorHandler, req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) {
        return next(err);
    }
    if (err instanceof ErrorHandler) {
        console.error('ABRA_KADABRA, err', err)
        return res.status(err.statusCode).json({message: err.message, statusCode: err.statusCode});
    }

    res.status(500).json({message: 'Непредвиденная ошибка!'})
}
