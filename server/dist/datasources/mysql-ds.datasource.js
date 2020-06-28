"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlDsDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'mysqlDS',
    connector: 'mysql',
    url: 'mysql://root:keller05@localhost/mutant',
    host: '',
    port: 0,
    user: '',
    password: '',
    database: ''
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let MysqlDsDataSource = class MysqlDsDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
MysqlDsDataSource.dataSourceName = 'mysqlDS';
MysqlDsDataSource.defaultConfig = config;
MysqlDsDataSource = tslib_1.__decorate([
    core_1.lifeCycleObserver('datasource'),
    tslib_1.__param(0, core_1.inject('datasources.config.mysqlDS', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], MysqlDsDataSource);
exports.MysqlDsDataSource = MysqlDsDataSource;
//# sourceMappingURL=mysql-ds.datasource.js.map