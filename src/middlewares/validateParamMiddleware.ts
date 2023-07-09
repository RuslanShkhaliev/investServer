import {ErrorHandler} from '@/errorHandler';
import {NextFunction, Request, Response} from 'express';

export const validateParamMiddleware = (param: string) => (req: Request, res: Response, next: NextFunction) => {
    const p = req.params[param];
    if (!p) {
        console.log('error param ', p)
        next(ErrorHandler.handleBadRequestError(`invalid param ${p}`));
    }
    next()
}
