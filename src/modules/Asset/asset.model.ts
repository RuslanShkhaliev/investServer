import {AssetType, CallableStatus} from '@/modules/Asset/asset.enum';
import {BaseInterface} from '@/modules/base';
import {Document, model, Schema, Types} from 'mongoose';


export interface IAsset extends BaseInterface {
    portfolioId: Types.ObjectId; //id портфеля к которому относится
    profileId: Types.ObjectId; //id портфеля к которому относится
    type: AssetType;
    symbol: string; //тикер актива
    holdings: number; //количество
    price: number; //цена покупки
    fee: number; //комиссия при покупке
    tax: number; //налог за вывод с биржи
    investmentPeriod: number; //период вклада (лет)
    faceValue: number; //номинальная стоимость (облигации)
    annualCouponRate: number; //годовая купонная ставка (облигации)
    averageBuyPrice: number; //средняя цена покупки
    paymentDate: number; //дата выплаты процентов(облигации)
    staked: number; //количество стейкнутых единиц(crypto)
    interest: number; //размер начисляемых процентов
    maturityDate: string; //дата когда долг по облигации будет погашен
    callableStatus?: CallableStatus; //является ли облигация закрытой или изменяемой
    exchangeRate: number; //обменный курс
    dividendPerShare: number; //размер дивиденда на акцию
    annualPercentageRate: number; //годовая процентная ставка
}
export interface IAssetModel extends IAsset, Document {}
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
        default: AssetType.DEFAULT,
        required: true,
    },
    callableStatus: {
        type: String,
        enum: Object.values(CallableStatus),
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
    paymentDate: {
        type: Number,
        default: 0,
    },
    staked: {
        type: Number,
        default: 0,
    },
    maturityDate: {
        type: String,
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

export const AssetModel = model<IAssetModel>('Asset', AssetSchema, 'asset');
