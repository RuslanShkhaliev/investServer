import {PortfolioController} from '@/modules/Portfolio/portfolio.controller';
import {NextFunction, Request, Response} from 'express';


export class ProfileController {
    constructor(private portfolioController: PortfolioController) {}
    createProfile(req: Request, res: Response, next: NextFunction) {
        const userPortfolios = this.portfolioController.getPortfoliosByUserId();
    }
}
