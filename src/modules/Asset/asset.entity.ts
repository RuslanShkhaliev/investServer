import {BaseEntity, defineProps, splitProps} from '@/modules/base';
import {IAsset} from './asset.model';


export class AssetEntity extends BaseEntity implements Partial<IAsset> {
    constructor(props: Partial<IAsset>) {
        const {parent, child} = splitProps(props)
        super(parent)

        defineProps(this, child)
    }
} 
