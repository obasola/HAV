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
import {Hero} from '../models';
import {HeroRepository} from '../repositories';

export class HeroController {
  constructor(
    @repository(HeroRepository)
    public heroRepository : HeroRepository,
  ) {}

  @post('/heroes', {
    responses: {
      '200': {
        description: 'Hero model instance',
        content: {'application/json': {schema: getModelSchemaRef(Hero)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Hero, {
            title: 'NewHero',
            exclude: ['id'],
          }),
        },
      },
    })
    hero: Omit<Hero, 'id'>,
  ): Promise<Hero> {
    return this.heroRepository.create(hero);
  }

  @get('/heroes/count', {
    responses: {
      '200': {
        description: 'Hero model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Hero) where?: Where<Hero>,
  ): Promise<Count> {
    return this.heroRepository.count(where);
  }

  @get('/heroes', {
    responses: {
      '200': {
        description: 'Array of Hero model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Hero, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Hero) filter?: Filter<Hero>,
  ): Promise<Hero[]> {
    return this.heroRepository.find(filter);
  }

  @patch('/heroes', {
    responses: {
      '200': {
        description: 'Hero PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Hero, {partial: true}),
        },
      },
    })
    hero: Hero,
    @param.where(Hero) where?: Where<Hero>,
  ): Promise<Count> {
    return this.heroRepository.updateAll(hero, where);
  }

  @get('/heroes/{id}', {
    responses: {
      '200': {
        description: 'Hero model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Hero, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Hero, {exclude: 'where'}) filter?: FilterExcludingWhere<Hero>
  ): Promise<Hero> {
    return this.heroRepository.findById(id, filter);
  }

  @patch('/heroes/{id}', {
    responses: {
      '204': {
        description: 'Hero PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Hero, {partial: true}),
        },
      },
    })
    hero: Hero,
  ): Promise<void> {
    await this.heroRepository.updateById(id, hero);
  }

  @put('/heroes/{id}', {
    responses: {
      '204': {
        description: 'Hero PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() hero: Hero,
  ): Promise<void> {
    await this.heroRepository.replaceById(id, hero);
  }

  @del('/heroes/{id}', {
    responses: {
      '204': {
        description: 'Hero DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.heroRepository.deleteById(id);
  }
}
