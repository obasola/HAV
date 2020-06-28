import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class VillianLocation extends Entity {
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
  location_id: number;

  @property({
    type: 'number',
    required: true,
  })
  villian_id: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<VillianLocation>) {
    super(data);
  }
}

export interface VillianLocationRelations {
  // describe navigational properties here
}

export type VillianLocationWithRelations = VillianLocation & VillianLocationRelations;
