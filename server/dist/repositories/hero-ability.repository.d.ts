import { DefaultCrudRepository } from '@loopback/repository';
import { HeroAbility, HeroAbilityRelations } from '../models';
import { MysqlDsDataSource } from '../datasources';
export declare class HeroAbilityRepository extends DefaultCrudRepository<HeroAbility, typeof HeroAbility.prototype.id, HeroAbilityRelations> {
    constructor(dataSource: MysqlDsDataSource);
}
