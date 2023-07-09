import {assetRouter} from '@/modules/assets';
import {portfoliosRouter} from '@/modules/portfolios';
import {Router} from 'express';

// @ts-ignore
const appRouter = new Router();

appRouter.use('/portfolios', portfoliosRouter);
appRouter.use('/assets', assetRouter);

export default appRouter;
export * from './middlewares'
