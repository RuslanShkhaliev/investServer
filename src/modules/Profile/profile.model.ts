import {IPortfolio} from '@/modules/Portfolio/portfolio.model';
import {Document} from 'mongodb';
import {model, Schema} from 'mongoose';


export interface IProfile {
    name: string;
    portfolios: IPortfolio[];
    email?: string;
    avatar?: string;
}


export interface ProfileModel extends IProfile, Document {}


export const ProfileSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    portfolios: [{type: Schema.Types.ObjectId, ref: 'Portfolio'}],
    avatar: {
        type: String,
    }
});

export const ProfileModel = model<ProfileModel>('Profile', ProfileSchema);
