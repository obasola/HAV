import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Hero extends Entity {
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
    required: true,
  })
  secretIdentity: string;
  
  @property({
    type: 'string',
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
  //[prop: string]: any;

  constructor(data?: Partial<Hero>) {
    super(data);
  }
}

export interface HeroRelations {
  // describe navigational properties here
}

export type HeroWithRelations = Hero & HeroRelations;
