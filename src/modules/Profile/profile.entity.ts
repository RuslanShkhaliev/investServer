import {BaseEntity, defineProps, splitProps} from '@/modules/base';
import {IProfile} from './profile.model';


export class ProfileEntity extends BaseEntity implements Partial<IProfile> {
    constructor(props: Partial<IProfile> = {}) {
        const {parent, child} = splitProps(props)
        super(parent)
        defineProps(this, child)
    }

}
