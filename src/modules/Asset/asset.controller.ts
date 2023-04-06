import {AssetDto} from '@/modules/Asset/asset.model';
import {NextFunction, Request, Response} from 'express';
import AssetService from './asset.service';


export class AssetController {
    public async createAsset(req: Request, res: Response, next:NextFunction) {
        try {
            const assetDto = new AssetDto(req.body);
            const createdAsset = await AssetService.createAsset(assetDto);
            res.json(createdAsset);
        } catch (error) {
            next(error)
        }
    }

    public async updateAsset(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params;
            const updatedAsset = await AssetService.updateAsset(id, req.body);
            res.json(updatedAsset);
        } catch (error) {
            next(error)
        }
    }

    public async getAsset(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params;
            const asset = await AssetService.getAsset(id);
            res.json(asset)
        } catch (error) {
            next(error)
        }
    }

    public async removeAsset(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params;
            const deletedAsset = await AssetService.removeAsset(id);
            res.json(deletedAsset);
        } catch (error) {
            next(error)
        }
    }
}
