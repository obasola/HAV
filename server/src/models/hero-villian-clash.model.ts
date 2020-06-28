import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class HeroVillianClash extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  hero_id: number;

  @property({
    type: 'number',
    required: true,
  })
  villian_id: number;

  @property({
    type: 'date'
  })
  conflict_date?: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  victor: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //[prop: string]: any;

  constructor(data?: Partial<HeroVillianClash>) {
    super(data);
  }
}

export interface HeroVillianClashRelations {
  // describe navigational properties here
}

export type HeroVillianClashWithRelations = HeroVillianClash & HeroVillianClashRelations;
