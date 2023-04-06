import {Document, model, Schema} from 'mongoose';


export class ProfileDto {
    name?: string;
    surname?: string;
    avatar?: string;

    constructor(props: ProfileDto = {}) {
        const {
            name = 'Unknown',
            surname = 'Unknown',
            avatar = 'https://media.istockphoto.com/id/476085198/photo/businessman-silhouette-as-avatar-or-default-profile-picture.jpg?s=612x612&w=0&k=20&c=GVYAgYvyLb082gop8rg0XC_wNsu0qupfSLtO7q9wu38=',
        } = props || {};
        this.name = name;
        this.surname = surname;
        this.avatar = avatar;
    }
}

export interface IProfileModel extends ProfileDto, Document {}


export const ProfileSchema = new Schema({
    name: {
        type: String,
        default: 'Unknown'
    },
    surname: {
        type: String,
        default: 'Unknown'
    },
    avatar: {
        type: String,
    },
});

export const ProfileModel = model<ProfileDto>('Profile', ProfileSchema);
