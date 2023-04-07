import {PortfolioController} from '@/modules/Portfolio/portfolio.controller';
import {Router} from 'express';

const portfolioController = new PortfolioController();
//@ts-ignore
const portfolioRouter = new Router()

portfolioRouter.route('/:id')
.get(portfolioController.getById)
.patch(portfolioController.update)
.delete(portfolioController.remove)

portfolioRouter.post('/', portfolioController.create)

export {
    portfolioRouter
}
