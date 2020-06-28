"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Hero = class Hero extends repository_1.Entity {
    // Define well-known properties here
    // Indexer property to allow additional data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //[prop: string]: any;
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Hero.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Hero.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Hero.prototype, "secretIdentity", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Hero.prototype, "originPlanet", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Hero.prototype, "sex", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Hero.prototype, "age", void 0);
Hero = tslib_1.__decorate([
    repository_1.model({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Hero);
exports.Hero = Hero;
//# sourceMappingURL=hero.model.js.map