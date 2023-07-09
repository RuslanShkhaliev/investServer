import {validateParamMiddleware} from '@/middlewares';
import {Router} from 'express';
import {portfoliosController} from './portfolios.controller';

//@ts-ignore
export const portfoliosRouter = new Router()
portfoliosRouter.use('/:id', validateParamMiddleware('id'));

portfoliosRouter.route('/list')
.get(portfoliosController.getList)

portfoliosRouter.route('/')
.post(portfoliosController.create)
.get(portfoliosController.getAll)

portfoliosRouter.route('/:id')
.get(portfoliosController.getById)
.patch(portfoliosController.updateById)
.delete(portfoliosController.remove)

