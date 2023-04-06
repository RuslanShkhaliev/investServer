import {AssetDto, AssetSchema} from '@/modules/Asset';
import {model, Schema} from 'mongoose';


export class PortfolioDto {
    name = '';
    currentBalance? = 0; // текущий баланс
    allTimeProfit? = 0; // прибыль/убыток за все время
    bestPerformer? = 0; // лучший результат
    worstPerformer? = 0; // худший результат
    description?: string; // описание/заметка
    assets?: AssetDto[] = [] // список активов
    category?: string; // тип портфеля
    portfoliosId: Schema.Types.ObjectId;
    profileId!: Schema.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date

    constructor(props: PortfolioDto) {
        // noinspection TypeScriptValidateTypes
        Object.assign(this, props)
        this.profileId = props.profileId!;
        this.portfoliosId = props.portfoliosId!;
    }
}

export const PortfolioSchema = new Schema<PortfolioDto>({
    name: {
        type: String,
    },
    category: {
        type: String,
    },
    description: {
        type: String,
        default: '',
    },
    currentBalance: {
        type: Number,
        default: 0,
    },
    allTimeProfit: {
        type: Number,
        default: 0,
    },
    bestPerformer: {
        type: Number,
        default: 0,
    },
    worstPerformer: {
        type: Number,
        default: 0,
    },
    portfoliosId: {
      type: Schema.Types.ObjectId,
      ref: 'Portfolios',
      required: true,
    },
    profileId: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    },
    assets: [AssetSchema],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

export const PortfolioModel = model<PortfolioDto>('Portfolio', PortfolioSchema, 'portfolio');
