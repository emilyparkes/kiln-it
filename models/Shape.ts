export interface Shape {
  shape: string
}

export interface DBShape extends Shape {
  id: number,
  inUse: boolean
}

export interface SnakeShape {
  id: number,
  shape: string
  in_use: boolean
}