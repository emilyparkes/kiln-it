import React from "react"
import { screen, render } from "@testing-library/react"
import "@testing-library/jest-dom"

import Home from "./Home"
import { getCreations } from "../api/api"
import { mockCreations } from "./testing/mocks"

jest.mock("../api", () => ({
  getCreations: jest.fn(),
}))

test("<> shows  from API", async () => {
  getCreations.mockImplementation(() => Promise.resolve(mockCreations))

  render(<Home />)
  const creations = await screen.findAllByTestId("creation")
  expect(creations).toHaveLength(3)
  expect(creations[1]).not.toHaveTextContent("1")
  expect(creations[1]).toHaveTextContent("2")
  expect(creations[1]).not.toHaveTextContent("3")
})
