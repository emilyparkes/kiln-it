export interface Glaze {
  id?: number,
  glaze: string
}

export interface DBGlaze extends Glaze{
  id: number,
  underglaze: boolean
}