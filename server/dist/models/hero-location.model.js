"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroLocation = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let HeroLocation = class HeroLocation extends repository_1.Entity {
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
], HeroLocation.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], HeroLocation.prototype, "hero_id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], HeroLocation.prototype, "location_id", void 0);
HeroLocation = tslib_1.__decorate([
    repository_1.model({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], HeroLocation);
exports.HeroLocation = HeroLocation;
//# sourceMappingURL=hero-location.model.js.map