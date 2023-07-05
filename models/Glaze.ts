export interface Glaze {
  glaze: string
}

export interface DBGlaze extends Glaze{
  id: number,
  underglaze: boolean
}