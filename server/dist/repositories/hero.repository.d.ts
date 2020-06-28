import { DefaultCrudRepository } from '@loopback/repository';
import { Hero, HeroRelations } from '../models';
import { MysqlDsDataSource } from '../datasources';
export declare class HeroRepository extends DefaultCrudRepository<Hero, typeof Hero.prototype.id, HeroRelations> {
    constructor(dataSource: MysqlDsDataSource);
}
