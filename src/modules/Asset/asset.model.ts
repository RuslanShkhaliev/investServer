import {Document} from 'mongodb';
import {model, Schema, Types} from 'mongoose';


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

export const AssetSchema = new Schema<AssetDto>({
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
        ref: 'Portfolio'
    },
    symbol: String,
    holdings: Number,
    price: Number,
    fee: Number,
    averageBuyPrice: Number,
    tax: Number,
    faceValue: Number,
    annualCouponRate: Number,
    dividendPerShare: Number,
    callableStatus: {
        type: String,
        enum: Object.values(CallableStatus),
    },
    paymentDate: Number,
    staked: Number,
    maturityDate: Date,
    exchangeRate: Number,
    annualPercentageRate: Number,
    investmentPeriod: Number,
});

export const AssetModel = model<IAsset>('Asset', AssetSchema);
