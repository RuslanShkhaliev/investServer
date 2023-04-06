import {Document, model, Schema} from 'mongoose';


export class PortfoliosDto {
    items?: Schema.Types.ObjectId[];
    profileId: string
    createdAt?: Date;
    updatedAt?: Date;

    constructor(props: Pick<PortfoliosDto, 'profileId'>) {
        this.profileId = props.profileId!;
    }
}

export interface IPortfoliosModel extends PortfoliosDto, Document {}

const PortfoliosSchema = new Schema({
    items: [{type: Schema.Types.ObjectId, ref: 'Portfolio'}],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    profileId: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }
})

export const PortfoliosModel = model<IPortfoliosModel>('Portfolios', PortfoliosSchema)
