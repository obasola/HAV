import {DefaultCrudRepository} from '@loopback/repository';
import {Ability, AbilityRelations} from '../models';
import {MysqlDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AbilityRepository extends DefaultCrudRepository<
  Ability,
  typeof Ability.prototype.id,
  AbilityRelations
> {
  constructor(
    @inject('datasources.mysqlDS') dataSource: MysqlDsDataSource,
  ) {
    super(Ability, dataSource);
  }
}
