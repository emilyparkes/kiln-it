export interface Status {
  status: string
}

export interface DBStatus extends Status {
  id: number, 
}

export interface SnakeStatus {
  id: number,
  status: string
}
