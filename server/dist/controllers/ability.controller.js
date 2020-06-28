"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AbilityController = class AbilityController {
    constructor(abilityRepository) {
        this.abilityRepository = abilityRepository;
    }
    async create(ability) {
        return this.abilityRepository.create(ability);
    }
    async count(where) {
        return this.abilityRepository.count(where);
    }
    async find(filter) {
        return this.abilityRepository.find(filter);
    }
    async updateAll(ability, where) {
        return this.abilityRepository.updateAll(ability, where);
    }
    async findById(id, filter) {
        return this.abilityRepository.findById(id, filter);
    }
    async updateById(id, ability) {
        await this.abilityRepository.updateById(id, ability);
    }
    async replaceById(id, ability) {
        await this.abilityRepository.replaceById(id, ability);
    }
    async deleteById(id) {
        await this.abilityRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/abilities', {
        responses: {
            '200': {
                description: 'Ability model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Ability) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Ability, {
                    title: 'NewAbility',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AbilityController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/abilities/count', {
        responses: {
            '200': {
                description: 'Ability model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Ability)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AbilityController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/abilities', {
        responses: {
            '200': {
                description: 'Array of Ability model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Ability, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Ability)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AbilityController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/abilities', {
        responses: {
            '200': {
                description: 'Ability PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Ability, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Ability)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Ability, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AbilityController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/abilities/{id}', {
        responses: {
            '200': {
                description: 'Ability model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Ability, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Ability, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AbilityController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/abilities/{id}', {
        responses: {
            '204': {
                description: 'Ability PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Ability, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Ability]),
    tslib_1.__metadata("design:returntype", Promise)
], AbilityController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/abilities/{id}', {
        responses: {
            '204': {
                description: 'Ability PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Ability]),
    tslib_1.__metadata("design:returntype", Promise)
], AbilityController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/abilities/{id}', {
        responses: {
            '204': {
                description: 'Ability DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], AbilityController.prototype, "deleteById", null);
AbilityController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.AbilityRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AbilityRepository])
], AbilityController);
exports.AbilityController = AbilityController;
//# sourceMappingURL=ability.controller.js.map