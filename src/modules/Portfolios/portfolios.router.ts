import {Router} from 'express';
import {PortfoliosController} from './portfolios.controller';

const portfoliosController = new PortfoliosController()

//@ts-ignore
const portfoliosRouter = new Router();

portfoliosRouter.put('/:id', portfoliosController.update)
portfoliosRouter.get('/:profileId', portfoliosController.getByProfileId);


export default portfoliosRouter;
