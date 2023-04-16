import { createAction, createReducer } from "@reduxjs/toolkit"
import { ReducerWithInitialState } from "@reduxjs/toolkit/dist/createReducer"
import Hero from "../models/Hero"

export const heroUnderAttack = createAction<number>('hero/underAttack')
export const healIsHealing = createAction<number>('hero/heal')
export const setHero = createAction<Hero>('hero/newHero')

const initialHeroState = {
  name: 'Default Redux Hero Name',
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
    .addCase(setHero, (heroState, action) => {
      return {...action.payload};
    })
}) as ReducerWithInitialState<Hero>

export default heroReducer;