import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class VillianAbility extends Entity {
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
  ability_id: number;

  @property({
    type: 'number',
    required: true,
  })
  villian_id: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<VillianAbility>) {
    super(data);
  }
}

export interface VillianAbilityRelations {
  // describe navigational properties here
}

export type VillianAbilityWithRelations = VillianAbility & VillianAbilityRelations;
