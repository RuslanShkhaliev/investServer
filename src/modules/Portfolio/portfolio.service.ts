import {ErrorHandler} from '@/errorHandler';
import {PortfolioDto, PortfolioModel} from './portfolio.model';


class PortfolioService {
    public async createPortfolio(portfolio: PortfolioDto) {
        try {
            const newPortfolio = await PortfolioModel.create(portfolio)
            if (!newPortfolio) {
                throw ErrorHandler.handleBadRequestError('Portfolio was not created');
            }
            return newPortfolio;
        } catch (error) {
            throw ErrorHandler.handleCastError(error);
        }
    }

    public async getPortfolio(portfolioId: string) {
        try {
            const portfolio = await PortfolioModel.findOne({_id: portfolioId}).populate('assets').exec()

            if (!portfolio) {
                throw ErrorHandler.handleNotFoundError(`Portfolio with id ${portfolioId}`);
            }
            return portfolio;
        } catch (error) {
            throw ErrorHandler.handleCastError(error);
        }
    }

    public async updatePortfolio(portfolioId: string, portfolio: Partial<PortfolioDto>) {
        try {
            const updatedPortfolio = await PortfolioModel.findByIdAndUpdate(portfolioId, portfolio).populate('assets')
            if (!updatedPortfolio) {
                throw ErrorHandler.handleNotFoundError(`Portfolio with id ${portfolioId} was not updated`);
            }
            return updatedPortfolio;
        } catch (error) {
            throw ErrorHandler.handleCastError(error);
        }
    }

    public async removePortfolio(portfolioId: string) {
        try {
            const deletedAsset = await PortfolioModel.findByIdAndDelete(portfolioId)
            if (!deletedAsset) {
                throw ErrorHandler.handleNotFoundError(`Portfolio with id ${portfolioId} was not deleted`);
            }
            return deletedAsset;
        } catch (error) {
            throw ErrorHandler.handleCastError(error);
        }
    }

} 

export default new PortfolioService();
