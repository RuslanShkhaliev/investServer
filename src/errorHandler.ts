import {Error as MongooseError} from 'mongoose';


export class ErrorHandler {
    public statusCode: number;
    public message: string;

    constructor(statusCode: number, message: string) {
        this.statusCode = statusCode;
        this.message = message;
    }

    static handleBadRequestError(message?: string) {
        message ??= ''
        return new ErrorHandler(400, `Invalid data ${message}`)
    }

    static handleUnauthorizedError(message?: string) {
        message ??= ''
        return new ErrorHandler(401, `Unauthorized ${message}`)
    }

    static handleForbiddenError(message?: string) {
        message ??= ''
        return new ErrorHandler(403, `Forbidden ${message}`)
    }

    static handleNotFoundError(message?: string) {
        console.log('HANDLE NOT FOUND ERROR ')
        message ??= ''
        return new ErrorHandler(404, `Not Found ${message}`)
    }

    static handleInternalServerError(message?: string) {
        message ??= ''
        return new ErrorHandler(500, `Server error ${message}`)
    }


    static handleCastError(err: any) {
        if (err instanceof MongooseError.CastError) {
            return ErrorHandler.handleBadRequestError(err.message)
        }

        return err
    }
}
