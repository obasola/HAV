import { Entity } from '@loopback/repository';
export declare class VillianLocation extends Entity {
    id?: number;
    location_id: number;
    villian_id: number;
    [prop: string]: any;
    constructor(data?: Partial<VillianLocation>);
}
export interface VillianLocationRelations {
}
export declare type VillianLocationWithRelations = VillianLocation & VillianLocationRelations;
