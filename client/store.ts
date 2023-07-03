import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import type { ThunkAction as BaseThunkAction, ThunkDispatch } from 'redux-thunk'
import type { AnyAction } from 'redux'

import { Action } from './actions/index'

import reducers from './reducers'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, never, Action>
export type ThunkAction<T = unknown> = BaseThunkAction<
  Promise<T>,
  RootState,
  void,
  AnyAction
>

export default store
