import { DBGlaze } from './Glaze'
export interface Creation {
  clayId: number,
  clay: string,
  shapeId: number,
  shape: string,
  statusId: number,
  status: string,
  weightLeatherHard: number,
  weightBoneDry: number,
  weightBisqueFired: number,
  weightGlazed: number,
  weightComplete: number,
  dateCreated: string,
  dateComplete: string,
  description: string,
  note: string,
  name: string,
  imgLeatherHard: string,
  imgBisqueFired: string,
  imgGlazed: string,
  imgComplete: string,
  imgGallery: string,
  glazes: Partial<DBGlaze>[]
}

export interface DBCreation extends Creation {
	id: number
}

export interface SnakeCreation {
  id?: number
  clay_id: number,
  clay: string,
  shape_id: number,
  shape: string,
  status_id: number,
  status: string,
  weight_leather_hard: number,
  weight_bone_dry: number,
  weight_bisque_fired: number,
  weight_glazed: number,
  weight_complete: number,
  date_created: string,
  date_complete: string,
  description: string,
  note: string,
  name: string,
  img_leather_hard: string,
  img_bisque_fired: string,
  img_glazed: string,
  img_complete: string,
  img_gallery: string,
  glazes: Partial<DBGlaze>[]
}