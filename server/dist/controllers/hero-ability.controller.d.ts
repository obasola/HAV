import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { HeroAbility } from '../models';
import { HeroAbilityRepository } from '../repositories';
export declare class HeroAbilityController {
    heroAbilityRepository: HeroAbilityRepository;
    constructor(heroAbilityRepository: HeroAbilityRepository);
    create(heroAbility: Omit<HeroAbility, 'id'>): Promise<HeroAbility>;
    count(where?: Where<HeroAbility>): Promise<Count>;
    find(filter?: Filter<HeroAbility>): Promise<HeroAbility[]>;
    updateAll(heroAbility: HeroAbility, where?: Where<HeroAbility>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<HeroAbility>): Promise<HeroAbility>;
    updateById(id: number, heroAbility: HeroAbility): Promise<void>;
    replaceById(id: number, heroAbility: HeroAbility): Promise<void>;
    deleteById(id: number): Promise<void>;
}
