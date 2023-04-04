import {Document} from 'mongodb';
import {Schema} from 'mongoose';


interface IPortfolio {
    name: string;
    currentBalance: number; // текущий баланс
    allTimeProfit: number; // прибыль/убыток за все время
    bestPerformer: number; // лучший результат
    worstPerformer: number; // худший результат
    description?: string; // описание/заметка
    assets: string[] // список id активов
    category: string; // тип портфеля
}

export interface PortfolioModel extends IPortfolio, Document {}

export const PortfolioSchema = new Schema<PortfolioModel>({
    name: String,
    description: String,
    assets: [{type: Schema.Types.ObjectId, ref: 'Asset'}],
    currentBalance: Number,
})
