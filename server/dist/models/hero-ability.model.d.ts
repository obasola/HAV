import { Entity } from '@loopback/repository';
export declare class HeroAbility extends Entity {
    id?: number;
    heroId: number;
    ability_id: number;
    [prop: string]: any;
    constructor(data?: Partial<HeroAbility>);
}
export interface HeroAbilityRelations {
}
export declare type HeroAbilityWithRelations = HeroAbility & HeroAbilityRelations;
