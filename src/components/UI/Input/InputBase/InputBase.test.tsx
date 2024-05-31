
import { render } from "@testing-library/react"
import '@testing-library/jest-dom'

import InputBase from "./InputBase"

test('demo', () => {
    expect(true).toBe(true)
})

test("Renders the main page", () => {
    render(<InputBase placeholder="test" onInputChange={() => {}} />)
    expect(true).toBeTruthy()
})
