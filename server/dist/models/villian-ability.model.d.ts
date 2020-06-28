import { Entity } from '@loopback/repository';
export declare class VillianAbility extends Entity {
    id?: number;
    ability_id: number;
    villian_id: number;
    [prop: string]: any;
    constructor(data?: Partial<VillianAbility>);
}
export interface VillianAbilityRelations {
}
export declare type VillianAbilityWithRelations = VillianAbility & VillianAbilityRelations;
