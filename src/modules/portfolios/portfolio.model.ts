import {IAsset} from '@/modules/assets/asset.model';


const parseFields = (model: Function) => {
    const fields = model?.toString().match(/this\.\w*\s+?/gm)

    if (!fields) {
        return []
    }

    return fields.map((item:any) => item.replace(/this\.|\s/gm, ''))
}

export interface IPortfolioCreateModel {
    name: string;
    tag?: string
    description?: string;
}

export interface IPortfolioModel extends IPortfolioCreateModel {
    balance: number; // текущий баланс
    profit: number; // прибыль/убыток за все время
    bestPerformer: IPortfolioPerformer | null; // лучший результат
    worstPerformer: IPortfolioPerformer | null; // худший результат
    description: string; // описание/заметка
    assets: IAsset[]; // список активов
}

interface IPortfolioPerformer {
    assetName: string
    assetIcon: string
    percent: number
    value: number
}

export class PortfolioModel implements IPortfolioModel {
    id: number;
    name: string;
    tag: string;
    description: string; // описание/заметка
    balance: number; // текущий баланс
    profit: number; // прибыль/убыток за все время
    bestPerformer: IPortfolioPerformer | null; // лучший результат
    worstPerformer: IPortfolioPerformer | null; // худший результат
    assets: IAsset[]; // список активов


    constructor(baseModel: IPortfolioCreateModel) {
        const {name = '', tag = '', description = ''} = baseModel;

        this.id = Date.now()
        this.name = name;
        this.tag = tag;

        this.description = description;
        this.balance = 0;
        this.profit = 0;

        this.bestPerformer = null;
        this.worstPerformer = null;
        this.assets = [];
    }

    static validate(model?: any) {
        const validFields = new Set(parseFields(PortfolioModel))

        const res = Object.entries(model).reduce((result, [field, value]) => {
            if (validFields.has(field)) {
                result[field] = value
            }
            return result
        }, {} as typeof model)

        console.log(res)

        return res
    }

}


PortfolioModel.validate({ name: 5, how: 'long', tag: 'awod'})
