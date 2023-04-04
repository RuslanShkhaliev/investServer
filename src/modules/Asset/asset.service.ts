import {ErrorHandler} from '@/errorHandler';
import {AssetDto, AssetModel, IAsset} from './asset.model';


export class AssetService {
    public async createAsset(asset: AssetDto) {
        try {
            return await AssetModel.create(asset)
        } catch (err) {
            throw ErrorHandler.handleInternalServerError('Failed to createAsset asset');
        }
    }
    public async updateAsset(id: string, asset: IAsset) {
        try {
            return AssetModel.findByIdAndUpdate(id, asset, {new: true});
        } catch (err) {
            throw ErrorHandler.handleInternalServerError('Failed to updateAsset asset');
        }
    }
    public async removeAsset(id: string) {
        try {
            const deletedAsset = await AssetModel.findByIdAndDelete(id);
            if (!deletedAsset) {
                throw ErrorHandler.handleNotFoundError(`Asset with id ${id} not found`);
            }
            return deletedAsset;
        } catch (err) {
            throw ErrorHandler.handleCastError(err);
        }
    }
    public async getAsset(id: string) {
        try {
            const asset = await AssetModel.findById(id);
            if (!asset) {
                throw ErrorHandler.handleNotFoundError(`Asset with id ${id} not found`);
            }
            return asset;
        } catch (err) {
            throw ErrorHandler.handleCastError(err);
        }
    }
}
