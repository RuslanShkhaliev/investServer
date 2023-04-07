import {AssetController} from '@/modules/Asset/asset.controller';
import {Router} from 'express';

const assetController = new AssetController();

//@ts-ignore
const assetRouter = new Router();

assetRouter.route('/:id')
.get(assetController.getById)
.patch(assetController.updateAsset)
.delete(assetController.removeAsset);

assetRouter.post('/', assetController.createAsset);
export {assetRouter};
