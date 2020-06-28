import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Hero } from '../models';
import { HeroRepository } from '../repositories';
export declare class HeroController {
    heroRepository: HeroRepository;
    constructor(heroRepository: HeroRepository);
    create(hero: Omit<Hero, 'id'>): Promise<Hero>;
    count(where?: Where<Hero>): Promise<Count>;
    find(filter?: Filter<Hero>): Promise<Hero[]>;
    updateAll(hero: Hero, where?: Where<Hero>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Hero>): Promise<Hero>;
    updateById(id: number, hero: Hero): Promise<void>;
    replaceById(id: number, hero: Hero): Promise<void>;
    deleteById(id: number): Promise<void>;
}
