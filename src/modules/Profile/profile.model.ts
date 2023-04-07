import {BaseInterface} from '@/modules/base';
import {Document} from 'mongodb';
import {model, Schema} from 'mongoose';


export interface IProfile extends BaseInterface {
    name: string;
    surname: string;
    avatar: string;
}
export interface IProfileModel extends IProfile, Document {}

export const ProfileSchema = new Schema({
    name: {
        type: String,
        default: 'Unknown',
    },
    surname: {
        type: String,
        default: 'Unknown',
    },
    avatar: {
        type: String,
        default: '',
    },
});

export const ProfileModel = model<IProfileModel>('Profile', ProfileSchema);
