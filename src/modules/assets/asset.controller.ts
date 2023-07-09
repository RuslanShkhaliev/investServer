import {NextFunction, Request, Response} from 'express';
import {assetService} from './asset.service';


class AssetController {
    public async createAsset(req: Request, res: Response, next: NextFunction) {
        try {
            const updatedAsset = await assetService.updateAsset(req.params.id, req.body);
            res.json(updatedAsset);
        } catch (error) {
            next(error)
        }
    }

    public async updateAsset(req: Request, res: Response, next: NextFunction) {
        try {
            const updatedAsset = await assetService.updateAsset(req.params.id, req.body);
            res.json(updatedAsset);
        } catch (error) {
            next(error)
        }
    }

    public async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const asset = await assetService.getById(req.params.id);
            res.json(asset)
        } catch (error) {
            next(error)
        }
    }

    public async removeAsset(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params;
            const deletedAsset = await assetService.removeAsset(id);
            res.json(deletedAsset);
        } catch (error) {
            next(error)
        }
    }
}

export const assetController = new AssetController()
