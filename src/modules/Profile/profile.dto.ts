import {BaseDto} from '@/modules/base';
import {IProfile, IProfileModel} from './profile.model';


export class ProfileDto extends BaseDto implements Omit<IProfile, '_id'>{
    surname: string;
    avatar: string;

    constructor(props: IProfileModel) {
        const {_id, createdAt, avatar = '', surname = '', updatedAt, name = ''} = props || {}
        super({_id, name, updatedAt, createdAt});
        this.surname = surname || '';
        this.avatar = avatar || '';
    }
}
