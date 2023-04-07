import {IAsset, IAssetModel} from '@/modules/Asset/asset.model';
import {BaseDto} from '@/modules/base';
import {Types} from 'mongoose';
import {AssetType, CallableStatus} from './asset.enum';


export class AssetDto extends BaseDto implements Omit<IAsset, '_id'> {
    portfolioId: Types.ObjectId;
    profileId: Types.ObjectId;
    type: AssetType;
    symbol: string;
    holdings: number;
    price: number;
    fee: number;
    tax: number;
    investmentPeriod: number;
    faceValue: number;
    annualCouponRate: number;
    averageBuyPrice: number;
    paymentDate: number;
    staked: number;
    interest: number;
    maturityDate: string;
    callableStatus?: CallableStatus;
    exchangeRate: number;
    dividendPerShare: number;
    annualPercentageRate: number;

    constructor(props: IAssetModel) {
        const {
            _id,
            annualCouponRate = 0,
            annualPercentageRate = 0,
            fee = 0,
            createdAt,
            interest = 0,
            callableStatus,
            dividendPerShare = 0,
            exchangeRate = 0,
            faceValue = 0,
            holdings = 0,
            investmentPeriod = 0,
            maturityDate = '',
            name = '',
            paymentDate = 0,
            portfolioId,
            price = 0,
            profileId,
            staked = 0,
            symbol = '',
            tax = 0,
            type = AssetType.DEFAULT,
            updatedAt,
            averageBuyPrice = 0,
        } = props || {};

        super({_id, name, updatedAt, createdAt});

        this.profileId = profileId!;
        this.portfolioId = portfolioId!;
        this.type = type;
        this.symbol = symbol;
        this.holdings = holdings;
        this.price = price;
        this.fee = fee;
        this.investmentPeriod = investmentPeriod;
        this.faceValue = faceValue;
        this.annualCouponRate = annualCouponRate;
        this.averageBuyPrice = averageBuyPrice;
        this.paymentDate = paymentDate;
        this.staked = staked;
        this.interest = interest;
        this.maturityDate = maturityDate;
        this.callableStatus = callableStatus;
        this.exchangeRate = exchangeRate;
        this.dividendPerShare = dividendPerShare;
        this.annualPercentageRate = annualPercentageRate;
        this.tax = tax;
    }
}
