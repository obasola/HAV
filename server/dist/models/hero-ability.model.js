"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroAbility = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let HeroAbility = class HeroAbility extends repository_1.Entity {
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
], HeroAbility.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], HeroAbility.prototype, "heroId", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], HeroAbility.prototype, "ability_id", void 0);
HeroAbility = tslib_1.__decorate([
    repository_1.model({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], HeroAbility);
exports.HeroAbility = HeroAbility;
//# sourceMappingURL=hero-ability.model.js.map