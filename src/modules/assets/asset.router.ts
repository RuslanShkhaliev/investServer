import {validateParamMiddleware} from '@/middlewares';
import {Router} from 'express';
import {assetController} from './asset.controller';


//@ts-ignore
export const assetRouter = new Router();

assetRouter.use('/:id', validateParamMiddleware('id'))

assetRouter.route('/:id')
.get(assetController.getById)
.patch(assetController.updateAsset)
.delete(assetController.removeAsset);

