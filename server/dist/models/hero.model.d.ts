import { Entity } from '@loopback/repository';
export declare class Hero extends Entity {
    id?: number;
    name: string;
    secretIdentity: string;
    originPlanet?: string;
    sex?: string;
    age?: number;
    constructor(data?: Partial<Hero>);
}
export interface HeroRelations {
}
export declare type HeroWithRelations = Hero & HeroRelations;
