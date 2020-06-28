import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Ability } from '../models';
import { AbilityRepository } from '../repositories';
export declare class AbilityController {
    abilityRepository: AbilityRepository;
    constructor(abilityRepository: AbilityRepository);
    create(ability: Omit<Ability, 'id'>): Promise<Ability>;
    count(where?: Where<Ability>): Promise<Count>;
    find(filter?: Filter<Ability>): Promise<Ability[]>;
    updateAll(ability: Ability, where?: Where<Ability>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Ability>): Promise<Ability>;
    updateById(id: number, ability: Ability): Promise<void>;
    replaceById(id: number, ability: Ability): Promise<void>;
    deleteById(id: number): Promise<void>;
}
