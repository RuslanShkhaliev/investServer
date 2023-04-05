import {ErrorHandler} from '@/errorHandler';
import {IPortfolios, PortfoliosModel} from '@/modules/Portfolios/portfolios.model';


export class PortfoliosService {
    public async getPortfolios(profileId: string) {
        try {
            const portfolios = await PortfoliosModel.findById(profileId);
            if (!portfolios) {
                return await PortfoliosModel.create();
            }
            return portfolios;
        } catch (error) {
            throw ErrorHandler.handleCastError(error)
        }
    }
    public async updatePortfolios(profileId: string, portfolios: Partial<IPortfolios>) {
        try {
            const updatedPortfolios = await PortfoliosModel.findByIdAndUpdate(profileId, portfolios, {new: true});
            if (!updatedPortfolios) {
                throw ErrorHandler.handleBadRequestError(`Portfolios profile ${profileId} not found`);
            }
        } catch (error) {
            throw ErrorHandler.handleCastError(error)
        }
    }
}
