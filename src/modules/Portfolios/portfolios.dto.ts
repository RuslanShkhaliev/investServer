import {BaseDto} from '@/modules/base';
import {IPortfolio} from '@/modules/Portfolio';
import {Types} from 'mongoose';
import {IPortfoliosModel} from './portfolios.model';


export class PortfoliosDto extends BaseDto {
    profileId: Types.ObjectId
    items: IPortfolio[];

    constructor(props: IPortfoliosModel) {
        super(props);
        this.profileId = props.profileId;
        this.items = props.items;
    }
}

