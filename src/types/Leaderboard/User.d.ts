import { LastBattle } from "./LastBattle"

export type User = {
    name: string
    rank: string
    rankTier: string
    points: number
    bio: string
    talent: string
    lastBattle: LastBattle
  }