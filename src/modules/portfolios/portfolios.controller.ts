import {NextFunction, Request, Response} from 'express';
import {portfoliosService} from './portfolios.service';


class PortfoliosController {

    public async create(req: Request, res: Response, next: NextFunction) {
        try {
            console.log({body: req.body})
            const portfolio = await portfoliosService.create(req.body);
            res.status(201).json(portfolio);
        } catch (error) {
            next(error)
        }
    }

    public async remove(req: Request, res: Response, next: NextFunction) {
        try {
            const portfolio = await portfoliosService.removeById(req.params.id);
            res.status(201).json(portfolio);
        } catch (error) {
            next(error)
        }
    }

    public async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const portfolio = await portfoliosService.getById(req.params.id);
            console.log({portfolio})
            res.json(portfolio);
        } catch (error) {
            next(error)
        }
    }

    public async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(req.cookies)
            const portfolios = await portfoliosService.getAll();
            res.json(portfolios);
        } catch (error) {
            next(error)
        }
    }

    public async getList(req: Request, res: Response, next: NextFunction) {
        try {
            const portfoliosList = await portfoliosService.getList();
            res.json(portfoliosList);
        } catch (error) {
            next(error)
        }
    }



    public async updateById(req: Request, res: Response, next: NextFunction) {
        try {
            const portfolio = await portfoliosService.updateId(req.params.id, req.body);
            res.json(portfolio);
        } catch (error) {
            next(error)
        }
    }
}

export const portfoliosController = new PortfoliosController();
