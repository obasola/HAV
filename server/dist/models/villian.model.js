"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Villian = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Villian = class Villian extends repository_1.Entity {
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
], Villian.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Villian.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Villian.prototype, "secretIdentity", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        default: 'Earth',
    }),
    tslib_1.__metadata("design:type", String)
], Villian.prototype, "originPlanet", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Villian.prototype, "sex", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Villian.prototype, "age", void 0);
Villian = tslib_1.__decorate([
    repository_1.model({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Villian);
exports.Villian = Villian;
//# sourceMappingURL=villian.model.js.map