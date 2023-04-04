import {Error} from 'mongoose';


export class ErrorHandler extends Error {
    public statusCode: number;
    public message: string;
    constructor(statusCode: number, message: string) {
        super(message)
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
        message ??= ''
        return new ErrorHandler(404, `Not Found ${message}`)
    }

    static handleInternalServerError(message?: string) {
        message ??= ''
        return new ErrorHandler(500, `Server error ${message}`)
    }


    static handleCastError(err: any) {
        if (err instanceof Error.CastError) {
            throw ErrorHandler.handleBadRequestError(err.message)
        }

        throw err
    }
}
