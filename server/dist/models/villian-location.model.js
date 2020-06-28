"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VillianLocation = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let VillianLocation = class VillianLocation extends repository_1.Entity {
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
], VillianLocation.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], VillianLocation.prototype, "location_id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], VillianLocation.prototype, "villian_id", void 0);
VillianLocation = tslib_1.__decorate([
    repository_1.model({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], VillianLocation);
exports.VillianLocation = VillianLocation;
//# sourceMappingURL=villian-location.model.js.map