import { afterEach, expect } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import  { initialiseStore } from './store'
import matchers from '@testing-library/jest-dom/matchers'
import App from './components/App'

expect.extend(matchers)

afterEach(cleanup)

export default function setup(location = '/') {
  const container = render(
    <Router initialEntries={[location]}>
      <Provider store={initialiseStore()}>
        <App />
      </Provider>
    </Router>
  )

  const user = userEvent.setup()
  return { user, ...container }
}