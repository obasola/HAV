"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityRepository = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const datasources_1 = require("../datasources");
const core_1 = require("@loopback/core");
let AbilityRepository = class AbilityRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Ability, dataSource);
    }
};
AbilityRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.mysqlDS')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MysqlDsDataSource])
], AbilityRepository);
exports.AbilityRepository = AbilityRepository;
//# sourceMappingURL=ability.repository.js.map