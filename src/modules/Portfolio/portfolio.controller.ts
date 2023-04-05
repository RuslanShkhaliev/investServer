import {ErrorHandler} from '@/errorHandler';
import {IPortfolio, PortfolioModel} from '@/modules/Portfolio/portfolio.model';


export class PortfolioController {
    public async createPortfolio(portfolio: Partial<IPortfolio>) {
        try {
            const newPortfolio = await PortfolioModel.create(portfolio)
            if (!newPortfolio) {
                throw ErrorHandler.handleBadRequestError('Portfolio was not created');
            }
        } catch (error) {
            throw ErrorHandler.handleCastError(error);
        }
    }

    public async getPortfolio(portfolioId: string) {
        try {
            const portfolio = await PortfolioModel.findById(portfolioId)

        } catch (error) {
            throw ErrorHandler.handleCastError(error);
        }
    }

    public async updatePortfolio(portfolio: any) {
        try {

        } catch (error) {
            throw ErrorHandler.handleCastError(error);
        }
    }

}
