import {DefaultCrudRepository} from '@loopback/repository';
import {Hero, HeroRelations} from '../models';
import {MysqlDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HeroRepository extends DefaultCrudRepository<
  Hero,
  typeof Hero.prototype.id,
  HeroRelations
> {
  constructor(
    @inject('datasources.mysqlDS') dataSource: MysqlDsDataSource,
  ) {
    super(Hero, dataSource);
  }
}
