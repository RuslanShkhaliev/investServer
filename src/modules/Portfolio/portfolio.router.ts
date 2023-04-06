import {PortfolioController} from '@/modules/Portfolio/portfolio.controller';
import {Router} from 'express';

const portfolioController = new PortfolioController();
//@ts-ignore
const portfolioRouter = new Router()

portfolioRouter.route('/:id')
.get(portfolioController.getPortfolio)
.patch(portfolioController.updatePortfolio)
.delete(portfolioController.removePortfolio)

portfolioRouter.post('/', portfolioController.createPortfolio)

export {
    portfolioRouter
}
