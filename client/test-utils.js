import React from 'react'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
import { MemoryRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

// import reducer from './reducers'

export const renderWithRedux = (
  ui,
  {
    initialState,
    initialEntries = ['/']
    // store = createStore(reducer, initialState)
  } = {}
) => {
  return {
    ...render(
      // <Provider store={store}>
      <Router initialEntries={initialEntries} initialIndex={0}>
        {ui}
      </Router>
      // </Provider>
    )
    // ,
    // store
  }
}
