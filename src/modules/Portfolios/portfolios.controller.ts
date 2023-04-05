import {PortfoliosService} from '@/modules/Portfolios/portfolios.service';
import {NextFunction, Request, Response} from 'express';


export class PortfoliosController {
    private portfoliosService: PortfoliosService;
    constructor() {
        this.portfoliosService = new PortfoliosService();
    }

    public async getPortfolios(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params
            const portfolios = await this.portfoliosService.getPortfolios(id);
            res.json(portfolios);
        } catch (error) {
            res.json(error)
        }
    }
    public async updatePortfolios(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params;
            const portfolios = await this.portfoliosService.updatePortfolios(id, req.body);
            res.json(portfolios)
        } catch (error) {
            res.json(error)
        }
    }
}
