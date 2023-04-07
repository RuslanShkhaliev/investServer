import {NextFunction, Request, Response} from 'express';
import PortfolioService from './portfolio.service';


export class PortfolioController {

    public async create(req: Request, res: Response, next: NextFunction) {
        try {
            const profileId = req.cookies.profileId;
            const portfolio = await PortfolioService.create(profileId, req.body);
            res.status(201).json(portfolio);
        } catch (error) {
            next(error)
        }
    }

    public async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const portfolio = await PortfolioService.getById(req.params.id);
            res.json(portfolio);
        } catch (error) {
            next(error)
        }
    }

    public async update(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params;
            const portfolio = await PortfolioService.update(id, req.body);
            res.json(portfolio);
        } catch (error) {
            next(error)
        }
    }

    public async remove(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params;
            await PortfolioService.remove(id);
            res.status(200).end();
        } catch (error) {
            next(error)
        }
    }

}
