import { Entity } from '@loopback/repository';
export declare class HeroLocation extends Entity {
    id?: number;
    hero_id: number;
    location_id: number;
    [prop: string]: any;
    constructor(data?: Partial<HeroLocation>);
}
export interface HeroLocationRelations {
}
export declare type HeroLocationWithRelations = HeroLocation & HeroLocationRelations;
