import { User } from 'firebase/auth'

export type FirebaseUser = User

// ----- RUNS -----

export interface RunPoint {
  distance: number
  time: number
}

export interface Run {
  date: string
  points: RunPoint[]
  totalKms: number
  totalMinutes: number
}

export type RunSet = Record<string, Run>