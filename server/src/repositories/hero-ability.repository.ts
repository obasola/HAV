import {DefaultCrudRepository} from '@loopback/repository';
import {HeroAbility, HeroAbilityRelations} from '../models';
import {MysqlDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HeroAbilityRepository extends DefaultCrudRepository<
  HeroAbility,
  typeof HeroAbility.prototype.id,
  HeroAbilityRelations
> {
  constructor(
    @inject('datasources.mysqlDS') dataSource: MysqlDsDataSource,
  ) {
    super(HeroAbility, dataSource);
  }
}
