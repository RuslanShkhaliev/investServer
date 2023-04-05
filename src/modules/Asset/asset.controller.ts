import {ErrorHandler} from '@/errorHandler';
import {AssetDto} from '@/modules/Asset/asset.model';
import {NextFunction, Request, Response} from 'express';
import {AssetService} from './asset.service';


export class AssetController {
    private assetService: AssetService;

    constructor() {
        this.assetService = new AssetService();
    }

    public async createAsset(req: Request, res: Response, next:NextFunction) {
        try {
            const assetDto = new AssetDto(req.body);
            const createdAsset = await this.assetService.createAsset(assetDto);

            res.json(createdAsset);
        } catch (err:any) {
            next(new ErrorHandler(err.status, err.message))
        }
    }

    public async updateAsset(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params;
            const updatedAsset = await this.assetService.updateAsset(id, req.body);
            res.json(updatedAsset);
        } catch (err:any) {
            next(new ErrorHandler(err.status, err.message))
        }
    }

    public async removeAsset(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params;
            const deletedAsset = await this.assetService.removeAsset(id);
            res.json(deletedAsset);
        } catch (err:any) {
            next(new ErrorHandler(err.status, err.message))
        }
    }

    public async getAsset(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params;
            const asset = await this.assetService.getAsset(id);
            res.json(asset)
        } catch (err: any) {
            next(new ErrorHandler(err.status, err.message))
        }
    }
}
