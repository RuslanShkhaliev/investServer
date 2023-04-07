export class BaseEntity {
    name?: string;
    createdAt?: string;
    updatedAt?: string;

    constructor(props: BaseEntity = {}) {
        //@ts-ignore
        Object.assign(this, props);
    }
}


export const defineProps = <T extends Record<string, any>, P extends Record<string, any>>(target: T, props: P) => {
    for (const key in props) {
        if (key !== 'id') {
            target[key as any] = props[key as any];
        }
    }
}
export const splitProps = <T extends BaseEntity>(props: T) => {
    const {name, createdAt, updatedAt, ...child} = props;
    return {
        parent: {name, createdAt, updatedAt},
        child
    }
}
