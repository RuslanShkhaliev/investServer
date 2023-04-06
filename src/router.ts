import {assetRouter} from '@/modules/Asset';
import {portfolioRouter} from '@/modules/Portfolio/portfolio.router';
import portfoliosRouter from '@/modules/Portfolios/portfolios.router';
import {profileRouter} from '@/modules/Profile/profile.router';
import {Router} from 'express';

// @ts-ignore
const appRouter = new Router();

appRouter.use('/asset', assetRouter)
appRouter.use('/portfolios', portfoliosRouter)
appRouter.use('/portfolio', portfolioRouter)
appRouter.use('/profile', profileRouter)

export {
    appRouter
}
