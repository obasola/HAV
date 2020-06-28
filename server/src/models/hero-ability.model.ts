import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class HeroAbility extends Entity {
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
  heroId: number;

  @property({
    type: 'number',
    required: true,
  })
  ability_id: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<HeroAbility>) {
    super(data);
  }
}

export interface HeroAbilityRelations {
  // describe navigational properties here
}

export type HeroAbilityWithRelations = HeroAbility & HeroAbilityRelations;
