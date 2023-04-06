import {Document, model, Schema} from 'mongoose';


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
    portfolioId!: Schema.Types.ObjectId; //id портфеля к которому относится
    profileId!: Schema.Types.ObjectId; //id портфеля к которому относится
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
    createdAt?: Date;
    updatedAt?: Date;

    constructor(model?: Partial<AssetDto>) {
        // noinspection TypeScriptValidateTypes
        Object.assign(this, model);
    }
}

export interface IAsset extends AssetDto, Document {}

export const AssetSchema = new Schema({
    portfolioId: {
        type: Schema.Types.ObjectId,
        ref: 'Portfolio',
        required: true
    },
    profileId: {
        type: Schema.Types.ObjectId,
        ref: 'Profile',
        required: true
    },
    type: {
        type: String,
        enum: Object.values(AssetType),
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    symbol: {
        type: String,
        default: '',
    },
    holdings: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        default: 0,
    },
    fee: {
        type: Number,
        default: 0,
    },
    averageBuyPrice: {
        type: Number,
        default: 0,
    },
    tax: {
        type: Number,
        default: 0,
    },
    faceValue: {
        type: Number,
        default: 0,
    },
    annualCouponRate: {
        type: Number,
        default: 0,
    },
    dividendPerShare: {
        type: Number,
        default: 0,
    },
    callableStatus: {
        type: String,
        enum: Object.values(CallableStatus),
    },
    paymentDate: {
        type: Number,
        default: 0,
    },
    staked: {
        type: Number,
        default: 0,
    },
    maturityDate: {
        type: Date,
        default: 0,
    },
    exchangeRate: {
        type: Number,
        default: 0,
    },
    annualPercentageRate: {
        type: Number,
        default: 0,
    },
    investmentPeriod: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

export const AssetModel = model<AssetDto>('Asset', AssetSchema, 'asset');
