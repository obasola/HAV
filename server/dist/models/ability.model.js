"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ability = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Ability = class Ability extends repository_1.Entity {
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
], Ability.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Ability.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Ability.prototype, "description", void 0);
Ability = tslib_1.__decorate([
    repository_1.model({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Ability);
exports.Ability = Ability;
//# sourceMappingURL=ability.model.js.map