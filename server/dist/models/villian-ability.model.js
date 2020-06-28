"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VillianAbility = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let VillianAbility = class VillianAbility extends repository_1.Entity {
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
], VillianAbility.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], VillianAbility.prototype, "ability_id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], VillianAbility.prototype, "villian_id", void 0);
VillianAbility = tslib_1.__decorate([
    repository_1.model({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], VillianAbility);
exports.VillianAbility = VillianAbility;
//# sourceMappingURL=villian-ability.model.js.map