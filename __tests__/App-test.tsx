/**
 * @format
 */

import "react-native"
import React from "react"
import App from "../App"

import { render } from "@testing-library/react-native"

it("renders correctly", () => {
  const { getByText } = render(<App />)
  const stepOne = getByText("Step One")
  expect(stepOne).toBeDefined()
})
