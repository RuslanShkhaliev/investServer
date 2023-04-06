import {ErrorHandler} from '@/errorHandler';
import {NextFunction, Request, Response} from 'express';
import PortfoliosService from './portfolios.service';


export class PortfoliosController {
    public async getPortfolios(req: Request, res: Response, next: NextFunction) {
        try {
            const {profileId = ''} = req.query
            if (!profileId) {
                throw ErrorHandler.handleBadRequestError('query param `profileId` is required');
            }
            const portfolios = await PortfoliosService.getPortfolios(profileId.toString());
            res.json(portfolios);
        } catch (error) {
            next(error)
        }
    }
    public async updatePortfolios(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params;
            const portfolios = await PortfoliosService.updatePortfolios(id, req.body);
            res.json(portfolios)
        } catch (error) {
            next(error)
        }
    }
}
