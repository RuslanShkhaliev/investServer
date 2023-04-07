import {ErrorHandler} from '@/errorHandler';
import {AssetDto} from './asset.dto';
import {AssetEntity} from './asset.entity';
import {AssetModel, IAsset} from './asset.model';


class AssetService {
    public async createAsset(asset: Partial<IAsset>) {
        try {
            const assetEntity = new AssetEntity(asset)
            const newAsset = await AssetModel.create(assetEntity);
            if (!newAsset) {
                throw ErrorHandler.handleBadRequestError('Failed to createAsset asset')
            }
            return new AssetDto(newAsset);
        } catch (error) {
            throw ErrorHandler.handleCastError(error);
        }
    }

    public async getById(id: string) {
        try {
            const asset = await AssetModel.findById(id);
            if (!asset) {
                throw ErrorHandler.handleNotFoundError(`Asset with id ${id} not found`);
            }
            return new AssetDto(asset);
        } catch (error) {
            throw ErrorHandler.handleCastError(error);
        }
    }


    public async updateAsset(id: string, asset: Partial<IAsset>) {
        try {
            const assetEntity = new AssetEntity(asset)
            const updatedAsset = await AssetModel.findByIdAndUpdate(id, assetEntity, {new: true});
            if (!updatedAsset) {
                throw ErrorHandler.handleNotFoundError(`Asset with id ${id} not found`);
            }
            return new AssetDto(updatedAsset);
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
