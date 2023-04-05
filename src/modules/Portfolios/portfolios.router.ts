import {PortfoliosController} from '@/modules/Portfolios/portfolios.controller';
import {Router} from 'express';

const portfoliosController = new PortfoliosController()
const portfoliosRouter = new Router();

portfoliosRouter.route('/portfolios')
.get(portfoliosController.getPortfolios)
.put(portfoliosController.updatePortfolios)


export default portfoliosRouter;
