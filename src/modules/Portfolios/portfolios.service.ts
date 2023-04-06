import {ErrorHandler} from '@/errorHandler';
import {PortfoliosDto, PortfoliosModel} from './portfolios.model';


class PortfoliosService {
    public async createPortfolios(portfolios: PortfoliosDto) {
        try {
            return await PortfoliosModel.create(portfolios);
        } catch (error) {
            throw ErrorHandler.handleBadRequestError('portfolios cannot be created');
        }
    }

    public async getPortfolios(profileId: string) {
        try {
            const portfolios = await PortfoliosModel.findOne({profileId}).populate('items');
            if (!portfolios) {
                throw ErrorHandler.handleNotFoundError(`portfolios with profileId: ${profileId}`);
            }
            return portfolios;
        } catch (error) {
            throw ErrorHandler.handleCastError(error);
        }
    }

    public async updatePortfolios(id: string, portfolios: Partial<PortfoliosDto>) {
        try {
            const updatedPortfolios = await PortfoliosModel
            .findByIdAndUpdate(id, portfolios, {new: true})
            .populate('items');
            if (!updatedPortfolios) {
                throw ErrorHandler.handleNotFoundError(`portfolios profile ${id} was not updated`);
            }
        } catch (error) {
            throw ErrorHandler.handleCastError(error);
        }
    }
}


export default new PortfoliosService();
