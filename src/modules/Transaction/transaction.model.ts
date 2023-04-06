// import {model, Schema, Types} from 'mongoose';
//
//
// interface ITransaction {
//     _id: Types.ObjectId;
//     name: string;
//     quantity: number; //количество
//     price: number; //цена за еденицу
//     amount: number; //сумма операции
//     note?: string; //примечание
//     fee?: number; //коммисия
//     date: Date;
// }
//
// interface IStockTransaction extends ITransaction {
//     type: 'buy' | 'sell' | 'dividend';
//     dividend: number; //размер дивидендов
// }
//
// interface IBondTransaction extends ITransaction {
//     type: 'buy' | 'sell' | 'interest'; //тип транзакции (покупка, продажа, проценты)
//     faceValue: number; //номинальная стоимость облигации
//     interest?: number; //размер начисленных процентов
// }
//
// interface ICryptoTransaction extends ITransaction {
//     type: 'buy' | 'sell' | 'staking' | 'transfer'; //тип транзакции (покупка, продажа)
//     symbol: string; //Тикер криптовалюты
//     staked?: number; //количество стейкнутых единиц
// }
//
// interface ICurrencyTransaction extends ITransaction {
//     type: 'buy' | 'sell'; //тип транзакции (покупка, продажа)
//     currency: string; //код валюты
//     exchangeRate: number; //курс валюты
// }
//
// const TransactionSchema = new Schema<ITransaction>({
//     name: {
//         type: String,
//         required: true,
//     },
//     quantity: {
//         type: Number,
//         required: true,
//     },
//     price: {
//         type: Number,
//         required: true,
//     },
//     amount: {
//         type: Number,
//         required: true,
//     },
//     note: {
//         type: String,
//         default: null,
//     },
//     fee: {
//         type: Number,
//         default: null,
//     },
//     date: {
//         type: Date,
//         required: true,
//     },
// });
//
// export const StockTransactionSchema = new Schema({
//     type: {
//         type: String,
//         enum: ['buy', 'sell', 'dividend'],
//         required: true,
//     },
//     dividend: {
//         type: Number,
//     },
//     ...TransactionSchema.obj,
// });
//
// export const BondTransactionSchema = new Schema({
//     type: {
//         type: String,
//         enum: ['buy', 'sell', 'interest'],
//         required: true,
//     },
//     faceValue: {
//         type: Number,
//     },
//     interest: {
//         type: Number,
//     },
//     ...TransactionSchema.obj,
// });
//
// export const CryptoTransactionSchema = new Schema({
//     type: {
//         type: String,
//         enum: ['buy', 'sell', 'staking'],
//         required: true,
//     },
//     symbol: {
//         type: String,
//     },
//     staked: {
//         type: Number,
//     },
//     ...TransactionSchema.obj,
// });
//
// export const CurrencyTransactionSchema = new Schema({
//     type: {
//         type: String,
//         enum: ['buy', 'sell'],
//         required: true,
//     },
//     currency: {
//         type: String
//     },
//     exchangeRate: {
//         type: Number,
//     },
//     ...TransactionSchema.obj,
// });
//
//
// export const StockTransaction = model<IStockTransaction>('StockTransaction', StockTransactionSchema);
// export const BondTransaction = model<IBondTransaction>('BondTransaction', BondTransactionSchema);
// export const CryptoTransaction = model<ICryptoTransaction>('CryptoTransaction', CryptoTransactionSchema);
// export const CurrencyTransaction = model<ICurrencyTransaction>('CurrencyTransaction', CurrencyTransactionSchema);
//
