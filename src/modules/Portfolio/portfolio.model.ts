import {AssetDto} from '@/modules/Asset';
import {model, Schema} from 'mongoose';


export interface IPortfolio {
    name: string;
    currentBalance?: number; // текущий баланс
    allTimeProfit?: number; // прибыль/убыток за все время
    bestPerformer?: number; // лучший результат
    worstPerformer?: number; // худший результат
    description?: string; // описание/заметка
    assets: AssetDto[] // список активов
    category: string; // тип портфеля
}

export const PortfolioSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    currentBalance: {
        type: Number,
        default: 0,
    },
    assets: [{type: Schema.Types.ObjectId, ref: 'Asset'}],
})

export const PortfolioModel = model<IPortfolio>('Portfolio', PortfolioSchema)
