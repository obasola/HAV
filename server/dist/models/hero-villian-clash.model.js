"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroVillianClash = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let HeroVillianClash = class HeroVillianClash extends repository_1.Entity {
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
], HeroVillianClash.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], HeroVillianClash.prototype, "hero_id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], HeroVillianClash.prototype, "villian_id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date'
    }),
    tslib_1.__metadata("design:type", String)
], HeroVillianClash.prototype, "conflict_date", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], HeroVillianClash.prototype, "description", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], HeroVillianClash.prototype, "victor", void 0);
HeroVillianClash = tslib_1.__decorate([
    repository_1.model({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], HeroVillianClash);
exports.HeroVillianClash = HeroVillianClash;
//# sourceMappingURL=hero-villian-clash.model.js.map