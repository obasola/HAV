import { DefaultCrudRepository } from '@loopback/repository';
import { Ability, AbilityRelations } from '../models';
import { MysqlDsDataSource } from '../datasources';
export declare class AbilityRepository extends DefaultCrudRepository<Ability, typeof Ability.prototype.id, AbilityRelations> {
    constructor(dataSource: MysqlDsDataSource);
}
