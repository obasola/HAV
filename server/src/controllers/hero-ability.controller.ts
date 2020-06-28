import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {HeroAbility} from '../models';
import {HeroAbilityRepository} from '../repositories';

export class HeroAbilityController {
  constructor(
    @repository(HeroAbilityRepository)
    public heroAbilityRepository : HeroAbilityRepository,
  ) {}

  @post('/hero-abilities', {
    responses: {
      '200': {
        description: 'HeroAbility model instance',
        content: {'application/json': {schema: getModelSchemaRef(HeroAbility)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HeroAbility, {
            title: 'NewHeroAbility',
            exclude: ['id'],
          }),
        },
      },
    })
    heroAbility: Omit<HeroAbility, 'id'>,
  ): Promise<HeroAbility> {
    return this.heroAbilityRepository.create(heroAbility);
  }

  @get('/hero-abilities/count', {
    responses: {
      '200': {
        description: 'HeroAbility model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(HeroAbility) where?: Where<HeroAbility>,
  ): Promise<Count> {
    return this.heroAbilityRepository.count(where);
  }

  @get('/hero-abilities', {
    responses: {
      '200': {
        description: 'Array of HeroAbility model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(HeroAbility, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(HeroAbility) filter?: Filter<HeroAbility>,
  ): Promise<HeroAbility[]> {
    return this.heroAbilityRepository.find(filter);
  }

  @patch('/hero-abilities', {
    responses: {
      '200': {
        description: 'HeroAbility PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HeroAbility, {partial: true}),
        },
      },
    })
    heroAbility: HeroAbility,
    @param.where(HeroAbility) where?: Where<HeroAbility>,
  ): Promise<Count> {
    return this.heroAbilityRepository.updateAll(heroAbility, where);
  }

  @get('/hero-abilities/{id}', {
    responses: {
      '200': {
        description: 'HeroAbility model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(HeroAbility, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(HeroAbility, {exclude: 'where'}) filter?: FilterExcludingWhere<HeroAbility>
  ): Promise<HeroAbility> {
    return this.heroAbilityRepository.findById(id, filter);
  }

  @patch('/hero-abilities/{id}', {
    responses: {
      '204': {
        description: 'HeroAbility PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HeroAbility, {partial: true}),
        },
      },
    })
    heroAbility: HeroAbility,
  ): Promise<void> {
    await this.heroAbilityRepository.updateById(id, heroAbility);
  }

  @put('/hero-abilities/{id}', {
    responses: {
      '204': {
        description: 'HeroAbility PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() heroAbility: HeroAbility,
  ): Promise<void> {
    await this.heroAbilityRepository.replaceById(id, heroAbility);
  }

  @del('/hero-abilities/{id}', {
    responses: {
      '204': {
        description: 'HeroAbility DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.heroAbilityRepository.deleteById(id);
  }
}
