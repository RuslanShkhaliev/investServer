import {BaseInterface} from '@/modules/base/base.interface';
import {Schema} from 'mongoose';


export class BaseDto {
    id: Schema.Types.ObjectId;
    name: string;
    createdAt: string;
    updatedAt: string;

    constructor(props: BaseInterface) {
        this.id = props._id;
        this.name = props.name || '';
        this.createdAt = props.createdAt || new Date().toISOString();
        this.updatedAt = props.updatedAt || new Date().toISOString();
    }
}
