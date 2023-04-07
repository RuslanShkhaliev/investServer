import {BaseInterface} from '@/modules/base';
import {IPortfolio} from '@/modules/Portfolio';
import {Document, model, Schema, Types} from 'mongoose';


export interface IPortfolios extends BaseInterface {
    profileId: Types.ObjectId;
    items: IPortfolio[];
}
export interface IPortfoliosModel extends IPortfolios, Document {}

const PortfoliosSchema = new Schema({
    items: [{type: Schema.Types.ObjectId, ref: 'Portfolio'}],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    profileId: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }
})

export const PortfoliosModel = model<IPortfoliosModel>('Portfolios', PortfoliosSchema)
