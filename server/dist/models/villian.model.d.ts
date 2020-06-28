import { Entity } from '@loopback/repository';
export declare class Villian extends Entity {
    id?: number;
    name: string;
    secretIdentity?: string;
    originPlanet?: string;
    sex?: string;
    age?: number;
    [prop: string]: any;
    constructor(data?: Partial<Villian>);
}
export interface VillianRelations {
}
export declare type VillianWithRelations = Villian & VillianRelations;
