export interface Clay {
  id: number, 
  clay: string,
}

export interface DBClay extends Clay {
  in_use: boolean
}