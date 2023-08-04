import { Clay, DBClay } from './Clay'
import { Creation, DBCreation } from './Creation'
import { Glaze, DBGlaze } from './Glaze'
import { Shape, DBShape } from './Shape'
import { Status, DBStatus } from './Status'

export type DBOptions = DBClay | DBCreation | DBGlaze | DBShape | DBStatus

export type Options = Clay | Creation | Glaze | Shape | Status
