import { SnakeClay, DBClay } from './Clay'
import { SnakeCreation, DBCreation } from './Creation'
import { SnakeGlaze, DBGlaze } from './Glaze'
import { SnakeShape, DBShape } from './Shape'
import { SnakeStatus, DBStatus } from './Status'

export type DBOptions = DBCreation| DBClay | DBGlaze | DBShape | DBStatus

export type SnakeOptions =  SnakeCreation | SnakeClay | SnakeGlaze | SnakeShape | SnakeStatus
