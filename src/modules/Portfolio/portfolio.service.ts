import {ErrorHandler} from '@/errorHandler';
import {PortfolioDto} from '@/modules/Portfolio/portfolio.dto';
import {Types} from 'mongoose';
import {PortfolioEntity} from './portfolio.entity';
import {IPortfolio, PortfolioModel} from './portfolio.model';


class PortfolioService {
    public async create(profileId: Types.ObjectId, portfolio: Partial<IPortfolio>) {
        try {
            const portfolioEntity = new PortfolioEntity({profileId, ...portfolio});
            const newPortfolio = await PortfolioModel.create(portfolioEntity)
            if (!newPortfolio) {
                throw ErrorHandler.handleBadRequestError('Portfolio was not created');
            }
            return new PortfolioDto(newPortfolio);
        } catch (error) {
            throw ErrorHandler.handleCastError(error);
        }
    }

    public async getById(portfolioId: string) {
        try {
            const portfolio = await PortfolioModel.findById(portfolioId).populate('assets')

            if (!portfolio) {
                throw ErrorHandler.handleNotFoundError(`Portfolio with id ${portfolioId}`);
            }
            return new PortfolioDto(portfolio);
        } catch (error) {
            throw ErrorHandler.handleCastError(error);
        }
    }

    public async update(portfolioId: string, portfolio: Partial<IPortfolio>) {
        try {
            const portfolioEntity = new PortfolioEntity(portfolio)
            const updatedPortfolio = await PortfolioModel.findByIdAndUpdate(portfolioId, portfolioEntity).populate('assets')
            if (!updatedPortfolio) {
                throw ErrorHandler.handleNotFoundError(`Portfolio with id ${portfolioId} was not updated`);
            }
            return new PortfolioDto(updatedPortfolio);
        } catch (error) {
            throw ErrorHandler.handleCastError(error);
        }
    }

    public async remove(portfolioId: string) {
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
