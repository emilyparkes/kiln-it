// import { Action as AllActions } from './all'
import { Action as ClayActions } from './clay'
import { Action as CreationActions } from './creations'
import { Action as ErrorActions } from './error'
import { Action as FilterActions } from './filter'
import { Action as GlazesActions } from './glazes'
import { Action as NavutilsFocusActions } from './navutils-focus'
import { Action as SearchActions } from './search'
import { Action as ShapeActions } from './shapes'
import { Action as StatusesActions } from './statuses'


export type Action =
// | AllActions
| ClayActions
| CreationActions
| ErrorActions
| FilterActions
| GlazesActions
| NavutilsFocusActions
| SearchActions
| ShapeActions
| StatusesActions