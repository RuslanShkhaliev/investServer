import {BaseEntity} from '@/modules/base';
import {Types} from 'mongoose';
import {IPortfolios} from './portfolios.model';


export class PortfoliosEntity extends BaseEntity implements Partial<IPortfolios> {
    constructor(public profileId: Types.ObjectId) {
        super()
    }
}

