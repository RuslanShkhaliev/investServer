import {PortfolioDto} from '@/modules/Portfolio/portfolio.model';
import {NextFunction, Request, Response} from 'express';
import PortfolioService from './portfolio.service';


export class PortfolioController {

    public async createPortfolio(req: Request, res: Response, next: NextFunction) {
        try {
            const profileId = req.cookies.profileId;
            const portfolioDto = new PortfolioDto({profileId, ...req.body})
            const portfolio = await PortfolioService.createPortfolio(portfolioDto);
            res.json(portfolio);
        } catch (error) {
            next(error)
        }
    }

    public async getPortfolio(req: Request, res: Response, next: NextFunction) {
        try {
            const portfolio = await PortfolioService.getPortfolio(req.params.id);
            res.json(portfolio);
        } catch (error) {
            next(error)
        }
    }

    public async updatePortfolio(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params;
            const portfolio = await PortfolioService.updatePortfolio(id, req.body);
            res.json(portfolio);
        } catch (error) {
            next(error)
        }
    }

    public async removePortfolio(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params;
            await PortfolioService.removePortfolio(id);
            res.status(200).end();
        } catch (error) {
            next(error)
        }
    }

}
