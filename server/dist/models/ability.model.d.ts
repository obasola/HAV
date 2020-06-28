import { Entity } from '@loopback/repository';
export declare class Ability extends Entity {
    id?: number;
    name: string;
    description?: string;
    [prop: string]: any;
    constructor(data?: Partial<Ability>);
}
export interface AbilityRelations {
}
export declare type AbilityWithRelations = Ability & AbilityRelations;
