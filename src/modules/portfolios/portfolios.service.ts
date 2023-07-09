import {db} from '@/db';
import {ErrorHandler} from '@/errorHandler';
import {IPortfolioCreateModel, IPortfolioModel, PortfolioModel} from './portfolio.model';


class PortfoliosService {

    public async create(portfolio: IPortfolioCreateModel) {
        try {
            console.log('[CREATE]: ', portfolio)
            const newPortfolio = new PortfolioModel(portfolio)
            await db.saveData('portfolios', newPortfolio)

            return newPortfolio
        } catch (error) {
            throw ErrorHandler.handleCastError(error)
        }
    }

    public async getById(portfolioId: string) {
        const portfolio = await db.findById('portfolios', portfolioId)
        if (!portfolio) {
            throw ErrorHandler.handleNotFoundError(`Portfolio with id ${portfolioId}`);
        }

        return portfolio
    }

    public async updateId(portfolioId: string, portfolio: Partial<IPortfolioModel>) {
        const updatedPortfolio = await db.findAndUpdate('portfolios', portfolioId, PortfolioModel.validate(portfolio))

        if (!updatedPortfolio) {
            throw ErrorHandler.handleNotFoundError(`Portfolio with id ${portfolioId} was not updated`);
        }

        return updatedPortfolio
    }

    public async removeById(portfolioId: string) {
        console.log('removeById', portfolioId)
        const deleted = await db.removeById('portfolios', portfolioId)
        if (!deleted) {
            throw ErrorHandler.handleNotFoundError(`portfolio with id ${portfolioId}`);
        }
        return deleted
    }

    public async getAll() {
        try {
            const portfolios = await db.getModel('portfolios')

            return { data: portfolios }
        } catch (error) {
            throw ErrorHandler.handleCastError(error);
        }
    }

    public async getList() {
        try {
            const portfolios = await db.getModel('portfolios')

            return { data: portfolios.map((p:any) => ({id: p.id, name: p.name, profit: p.profit, balance: p.balance})) }
        } catch (error) {
            throw ErrorHandler.handleCastError(error);
        }
    }


}

export const portfoliosService = new PortfoliosService();
