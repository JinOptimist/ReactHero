import { createAction, createReducer } from "@reduxjs/toolkit"
import { ReducerWithInitialState } from "@reduxjs/toolkit/dist/createReducer"
import Hero from "../models/Hero"

export const heroUnderAttack = createAction<number>('hero/underAttack')
export const healIsHealing = createAction<number>('hero/heal')

const initialHeroState = {
  name: 'HeroFromReduce',
  hp: 12,
  maxHp: 24,
} as Hero

const heroReducer = createReducer(initialHeroState, (builder) => {
  builder
    .addCase(heroUnderAttack, (heroState, action) => {
      const newHero = { ...heroState };
      newHero.hp = newHero.hp - action.payload;
      return newHero;
    })
    .addCase(healIsHealing, (heroState, action) => {
      const newHero = { ...heroState };
      newHero.hp = newHero.hp + action.payload;
      return newHero;
    })
}) as ReducerWithInitialState<Hero>

export default heroReducer;