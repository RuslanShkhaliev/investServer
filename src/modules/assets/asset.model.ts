import {Types} from 'mongoose';


export enum AssetType {
    DEFAULT = 'default',
    STOCK = 'stock',
    BOND = 'bond',
    CRYPTO = 'crypto',
    CURRENCY = 'currency',
}

export enum CallableStatus {
    IS_CALLABLE = 'callable',
    NON_CALLABLE = 'non-callable'
}


export interface IAsset {
    name: string;
    portfolioId: Types.ObjectId; //id портфеля к которому относится
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
