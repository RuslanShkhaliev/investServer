import {BaseEntity, defineProps, splitProps} from '@/modules/base';
import {PortfolioDto} from '@/modules/Portfolio/portfolio.dto';
import {IPortfolio} from './portfolio.model';


export class PortfolioEntity extends BaseEntity implements Partial<IPortfolio>{
    constructor(props: Partial<PortfolioDto> = {}) {
        const {parent, child} = splitProps(props)

        super(parent);

        defineProps(this, child)
    }
}
