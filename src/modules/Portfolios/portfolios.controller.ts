import {ErrorHandler} from '@/errorHandler';
import {NextFunction, Request, Response} from 'express';
import PortfoliosService from './portfolios.service';


export class PortfoliosController {
    public async getByProfileId(req: Request, res: Response, next: NextFunction) {
        try {
            const {profileId = ''} = req.params
            if (!profileId) {
                throw ErrorHandler.handleBadRequestError('param `profileId` is required');
            }
            const portfolios = await PortfoliosService.getByProfileId(profileId);
            res.json(portfolios);
        } catch (error) {
            next(error)
        }
    }
    public async update(req: Request, res: Response, next: NextFunction) {
        try {
            const portfolios = await PortfoliosService.update(req.params.id, req.body);
            res.json(portfolios)
        } catch (error) {
            next(error)
        }
    }
}
