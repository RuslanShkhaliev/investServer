import {Document, model, Schema, Types} from 'mongoose';


export enum AssetType {
    DEFAULT = 'default',
    STOCK = 'stock',
    BOND = 'bond',
    CRYPTO = 'crypto',
    CURRENCY = 'currency',
}

enum CallableStatus {
    IS_CALLABLE = 'callable',
    NON_CALLABLE = 'non-callable'
}

export class AssetDto {
    type: AssetType = AssetType.DEFAULT;
    name = ''; //название актива
    symbol?: string; //тикер актива
    holdings?: number; //количество
    price?: number; //цена покупки
    fee?: number; //комиссия при покупке
    tax?: number; //налог за вывод с биржи
    investmentPeriod?: number; //период вклада (лет)
    faceValue?: number; //номинальная стоимость (облигации)
    annualCouponRate?: number; //годовая купонная ставка (облигации)
    averageBuyPrice?: number; //средняя цена покупки
    paymentDate?: number; //дата выплаты процентов(облигации)
    staked?: number; //количество стейкнутых единиц(crypto)
    interest?: number; //размер начисляемых процентов
    maturityDate?: Date; //время когда долг по облигации будет погашен
    callableStatus?: CallableStatus; //является ли облигация закрытой или изменяемой
    exchangeRate?: number; //обменный курс
    dividendPerShare?: number; //размер дивиденда на акцию
    annualPercentageRate?: number; //годовая процентная ставка
    portfolioId!: Types.ObjectId; //id портфеля к которому относится

    constructor(model?: Partial<AssetDto>) {
        // noinspection TypeScriptValidateTypes
        Object.assign(this, model);
    }
}

export interface IAsset extends AssetDto, Document {}

export const AssetSchema = new Schema({
    type: {
        type: String,
        enum: Object.values(AssetType),
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    portfolioId: {
        type: Schema.Types.ObjectId,
        ref: 'Portfolio',
        required: true
    },
    symbol: {
        type: String,
    },
    holdings: {
        type: Number
    },
    price: {
        type: Number
    },
    fee: {
        type: Number
    },
    averageBuyPrice: {
        type: Number
    },
    tax: {
        type: Number
    },
    faceValue: {
        type: Number
    },
    annualCouponRate: {
        type: Number
    },
    dividendPerShare: {
        type: Number
    },
    callableStatus: {
        type: String,
        enum: Object.values(CallableStatus),
    },
    paymentDate: {
        type: Number
    },
    staked: {
        type: Number
    },
    maturityDate: {
        type: Date
    },
    exchangeRate: {
        type: Number
    },
    annualPercentageRate: {
        type: Number
    },
    investmentPeriod: {
        type: Number
    },
});

export const AssetModel = model<AssetDto>('Asset', AssetSchema);
