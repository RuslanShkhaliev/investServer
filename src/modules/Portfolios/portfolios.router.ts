import {Router} from 'express';
import {PortfoliosController} from './portfolios.controller';

const portfoliosController = new PortfoliosController()

//@ts-ignore
const portfoliosRouter = new Router();

portfoliosRouter.get('/', portfoliosController.getPortfolios)
portfoliosRouter.route('/:id').put(portfoliosController.updatePortfolios)



export default portfoliosRouter;
