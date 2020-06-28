import { Entity } from '@loopback/repository';
export declare class HeroVillianClash extends Entity {
    id?: number;
    hero_id: number;
    villian_id: number;
    conflict_date?: string;
    description: string;
    victor: string;
    constructor(data?: Partial<HeroVillianClash>);
}
export interface HeroVillianClashRelations {
}
export declare type HeroVillianClashWithRelations = HeroVillianClash & HeroVillianClashRelations;
