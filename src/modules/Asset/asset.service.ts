import {ErrorHandler} from '@/errorHandler';
import {AssetDto, AssetModel, IAsset} from './asset.model';


class AssetService {
    public async createAsset(asset: AssetDto) {
        try {
            const newAsset = await AssetModel.create(asset);
            if (!newAsset) {
                throw ErrorHandler.handleBadRequestError('Failed to createAsset asset')
            }
            return newAsset;
        } catch (error) {
            throw ErrorHandler.handleCastError(error);
        }
    }

    public async getAsset(id: string) {
        try {
            const asset = await AssetModel.findById(id);
            if (!asset) {
                throw ErrorHandler.handleNotFoundError(`Asset with id ${id} not found`);
            }
            return asset;
        } catch (error) {
            throw ErrorHandler.handleCastError(error);
        }
    }


    public async updateAsset(id: string, asset: Partial<IAsset>) {
        try {
            const updatedAsset = await AssetModel.findByIdAndUpdate(id, asset, {new: true});
            if (!updatedAsset) {
                throw ErrorHandler.handleNotFoundError(`Asset with id ${id} not found`);
            }
        } catch (error) {
            throw ErrorHandler.handleCastError(error);
        }
    }


    public async removeAsset(id: string) {
        try {
            const deletedAsset = await AssetModel.findByIdAndDelete(id);
            if (!deletedAsset) {
                throw ErrorHandler.handleNotFoundError(`Asset with id ${id} not found`);
            }
            return deletedAsset;
        } catch (error) {
            throw ErrorHandler.handleCastError(error);
        }
    }
}
export default new AssetService();
