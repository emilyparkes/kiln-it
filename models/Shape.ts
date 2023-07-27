export interface Shape {
  shape: string
}

export interface DBShape extends Shape {
  id: number,
  in_use: boolean
}