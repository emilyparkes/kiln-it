export interface Clay {
  id?: number,
  clay: string,
}

export interface DBClay extends Clay {
  id: number,
  inUse: boolean
}

export interface SnakeClay {
  id: number, 
  clay: string
  in_use: boolean
}