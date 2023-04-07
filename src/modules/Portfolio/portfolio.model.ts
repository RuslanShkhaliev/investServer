import {AssetSchema} from '@/modules/Asset';
import {AssetDto} from '@/modules/Asset/asset.dto';
import {BaseInterface} from '@/modules/base';
import {Document, model, Schema, Types} from 'mongoose';


export interface IPortfolio extends BaseInterface {
    profileId: Types.ObjectId;
    currentBalance: number; // текущий баланс
    allTimeProfit: number; // прибыль/убыток за все время
    bestPerformer: number; // лучший результат
    worstPerformer: number; // худший результат
    description: string; // описание/заметка
    assets: AssetDto[]; // список активов
    category: string; // тип портфеля
}
export interface IPortfolioModel extends IPortfolio, Document {}
export const PortfolioSchema = new Schema({
    profileId: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    },
    name: {
        type: String,
        default: '',
    },
    category: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
    },
    currentBalance: {
        type: Number,
        default: 0,
    },
    allTimeProfit: {
        type: Number,
        default: 0,
    },
    bestPerformer: {
        type: Number,
        default: 0,
    },
    worstPerformer: {
        type: Number,
        default: 0,
    },
    assets: [AssetSchema],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

export const PortfolioModel = model<IPortfolioModel>('Portfolio', PortfolioSchema, 'portfolio');
