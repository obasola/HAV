import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Villian extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  secretIdentity?: string;

  @property({
    type: 'string',
    default: 'Earth',
  })
  originPlanet?: string;

  @property({
    type: 'string',
  })
  sex?: string;

  @property({
    type: 'number',
  })
  age?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Villian>) {
    super(data);
  }
}

export interface VillianRelations {
  // describe navigational properties here
}

export type VillianWithRelations = Villian & VillianRelations;
