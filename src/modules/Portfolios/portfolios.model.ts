import {IPortfolio, PortfolioSchema} from '@/modules/Portfolio/portfolio.model';
import {Document, model, Schema} from 'mongoose';


export interface IPortfolios {
    name: string;
    items: IPortfolio[];
    createdAt: Date;
    updatedAt: Date;
}

export interface IPortfoliosModel extends IPortfolios, Document {}

const PortfoliosSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    profileId: {
        type: Schema.Types.ObjectId,
        ref: 'Profile',
        required: true,
    },
    items: [PortfolioSchema],
    createdAt: {
        type: Date,
        default: Date.now.toString(),
    },
    updatedAt: {
        type: Date,
        default: Date.now.toString(),
    }
})

export const PortfoliosModel = model<IPortfoliosModel>('Portfolios', PortfoliosSchema)
