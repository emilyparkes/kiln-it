import { Glaze, DBGlaze } from './Glaze'
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
  glazes: Glaze[]
}

export interface DBCreation extends Creation {
	id: number
}