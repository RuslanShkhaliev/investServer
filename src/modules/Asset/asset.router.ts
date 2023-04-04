import {AssetController} from '@/modules/Asset/asset.controller';
import {Router} from 'express';

const assetController = new AssetController();
// @ts-ignore
const assetRouter = new Router();

assetRouter.route('/asset/:id')
.post(assetController.createAsset)
.get(assetController.getAsset)
.patch(assetController.updateAsset)
.delete(assetController.removeAsset)

export {assetRouter};
