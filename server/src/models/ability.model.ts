import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Ability extends Entity {
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
  description?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Ability>) {
    super(data);
  }
}

export interface AbilityRelations {
  // describe navigational properties here
}

export type AbilityWithRelations = Ability & AbilityRelations;
