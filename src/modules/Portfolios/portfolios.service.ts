import {ErrorHandler} from '@/errorHandler';
import {PortfoliosDto} from '@/modules/Portfolios/portfolios.dto';
import {PortfoliosEntity} from '@/modules/Portfolios/portfolios.entity';
import {PortfoliosModel} from './portfolios.model';


class PortfoliosService {
    public async create(profileId: string) {
        try {
            const portfoliosEntity = new PortfoliosEntity(profileId);
            const portfolios = await (await PortfoliosModel.create(portfoliosEntity)).populate('items');
            return new PortfoliosDto(portfolios)
        } catch (error) {
            throw ErrorHandler.handleBadRequestError('portfolios cannot be created');
        }
    }

    public async getByProfileId(profileId: string) {
        try {
            const portfolios = await PortfoliosModel.findOne({profileId}).populate('items');
            if (!portfolios) {
                throw ErrorHandler.handleNotFoundError(`portfolios with profileId: ${profileId}`);
            }
            return new PortfoliosDto(portfolios);
        } catch (error) {
            throw ErrorHandler.handleCastError(error);
        }
    }

    public async update(id: string, portfolios: Partial<PortfoliosDto>) {
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
