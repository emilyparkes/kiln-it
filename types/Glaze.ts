export interface Glaze {
  glaze: string
}

export interface DBGlaze extends Glaze{
  id: number,
  underglaze: boolean,
  inUse: boolean
}

export interface SnakeGlaze {
  id?: number,
  glaze: string,
  underglaze: boolean,
  in_use: boolean
}