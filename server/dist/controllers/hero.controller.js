"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let HeroController = class HeroController {
    constructor(heroRepository) {
        this.heroRepository = heroRepository;
    }
    async create(hero) {
        return this.heroRepository.create(hero);
    }
    async count(where) {
        return this.heroRepository.count(where);
    }
    async find(filter) {
        return this.heroRepository.find(filter);
    }
    async updateAll(hero, where) {
        return this.heroRepository.updateAll(hero, where);
    }
    async findById(id, filter) {
        return this.heroRepository.findById(id, filter);
    }
    async updateById(id, hero) {
        await this.heroRepository.updateById(id, hero);
    }
    async replaceById(id, hero) {
        await this.heroRepository.replaceById(id, hero);
    }
    async deleteById(id) {
        await this.heroRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/heroes', {
        responses: {
            '200': {
                description: 'Hero model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Hero) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Hero, {
                    title: 'NewHero',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HeroController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/heroes/count', {
        responses: {
            '200': {
                description: 'Hero model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Hero)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HeroController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/heroes', {
        responses: {
            '200': {
                description: 'Array of Hero model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Hero, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Hero)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HeroController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/heroes', {
        responses: {
            '200': {
                description: 'Hero PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Hero, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Hero)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Hero, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HeroController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/heroes/{id}', {
        responses: {
            '200': {
                description: 'Hero model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Hero, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Hero, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HeroController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/heroes/{id}', {
        responses: {
            '204': {
                description: 'Hero PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Hero, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Hero]),
    tslib_1.__metadata("design:returntype", Promise)
], HeroController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/heroes/{id}', {
        responses: {
            '204': {
                description: 'Hero PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Hero]),
    tslib_1.__metadata("design:returntype", Promise)
], HeroController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/heroes/{id}', {
        responses: {
            '204': {
                description: 'Hero DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], HeroController.prototype, "deleteById", null);
HeroController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.HeroRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.HeroRepository])
], HeroController);
exports.HeroController = HeroController;
//# sourceMappingURL=hero.controller.js.map