import {AssetDto} from '@/modules/Asset/asset.dto';
import {BaseDto} from '@/modules/base';
import {Types} from 'mongoose';
import {IPortfolio, IPortfolioModel} from './portfolio.model';


export class PortfolioDto extends BaseDto implements Omit<IPortfolio, '_id'> {
    currentBalance: number; // текущий баланс
    allTimeProfit: number; // прибыль/убыток за все время
    bestPerformer: number; // лучший результат
    worstPerformer: number; // худший результат
    description: string; // описание/заметка
    assets: AssetDto[]; // список активов
    category: string; // тип портфеля
    profileId: Types.ObjectId;

    constructor(props: IPortfolioModel) {
        const {
            _id,
            name = '',
            createdAt,
            updatedAt,
            allTimeProfit = 0,
            assets = [],
            bestPerformer = 0,
            category = '',
            currentBalance = 0,
            description = '',
            worstPerformer = 0,
            profileId,
        } = props || {};

        super({_id, name, updatedAt, createdAt });

        this.currentBalance = currentBalance;
        this.allTimeProfit = allTimeProfit;
        this.bestPerformer = bestPerformer;
        this.worstPerformer = worstPerformer;
        this.description = description;
        this.assets = assets;
        this.category = category;
        this.profileId = profileId!
    }
}
