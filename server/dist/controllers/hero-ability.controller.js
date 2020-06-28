"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroAbilityController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let HeroAbilityController = class HeroAbilityController {
    constructor(heroAbilityRepository) {
        this.heroAbilityRepository = heroAbilityRepository;
    }
    async create(heroAbility) {
        return this.heroAbilityRepository.create(heroAbility);
    }
    async count(where) {
        return this.heroAbilityRepository.count(where);
    }
    async find(filter) {
        return this.heroAbilityRepository.find(filter);
    }
    async updateAll(heroAbility, where) {
        return this.heroAbilityRepository.updateAll(heroAbility, where);
    }
    async findById(id, filter) {
        return this.heroAbilityRepository.findById(id, filter);
    }
    async updateById(id, heroAbility) {
        await this.heroAbilityRepository.updateById(id, heroAbility);
    }
    async replaceById(id, heroAbility) {
        await this.heroAbilityRepository.replaceById(id, heroAbility);
    }
    async deleteById(id) {
        await this.heroAbilityRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/hero-abilities', {
        responses: {
            '200': {
                description: 'HeroAbility model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.HeroAbility) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.HeroAbility, {
                    title: 'NewHeroAbility',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HeroAbilityController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/hero-abilities/count', {
        responses: {
            '200': {
                description: 'HeroAbility model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.HeroAbility)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HeroAbilityController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/hero-abilities', {
        responses: {
            '200': {
                description: 'Array of HeroAbility model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.HeroAbility, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.HeroAbility)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HeroAbilityController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/hero-abilities', {
        responses: {
            '200': {
                description: 'HeroAbility PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.HeroAbility, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.HeroAbility)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.HeroAbility, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HeroAbilityController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/hero-abilities/{id}', {
        responses: {
            '200': {
                description: 'HeroAbility model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.HeroAbility, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.HeroAbility, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HeroAbilityController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/hero-abilities/{id}', {
        responses: {
            '204': {
                description: 'HeroAbility PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.HeroAbility, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.HeroAbility]),
    tslib_1.__metadata("design:returntype", Promise)
], HeroAbilityController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/hero-abilities/{id}', {
        responses: {
            '204': {
                description: 'HeroAbility PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.HeroAbility]),
    tslib_1.__metadata("design:returntype", Promise)
], HeroAbilityController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/hero-abilities/{id}', {
        responses: {
            '204': {
                description: 'HeroAbility DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], HeroAbilityController.prototype, "deleteById", null);
HeroAbilityController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.HeroAbilityRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.HeroAbilityRepository])
], HeroAbilityController);
exports.HeroAbilityController = HeroAbilityController;
//# sourceMappingURL=hero-ability.controller.js.map