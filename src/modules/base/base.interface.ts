import {Schema} from 'mongoose';


export interface BaseInterface {
    _id: Schema.Types.ObjectId;
    name: string;
    createdAt: string;
    updatedAt: string;
    [key: string]: any;
}
