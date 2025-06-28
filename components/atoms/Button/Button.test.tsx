import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './Button'

describe('Button', () => {
    /**
     * Scenario 1: Button render with label
     *
     * This test ensures the button renders with its required
     * properties (label).
     */
    it('includes only label', () => {
        render(<Button label="Click Me" />)
        const ButtonElement = screen.getByTestId('ral-test--button')

        expect(ButtonElement).toBeInTheDocument()
    })

    /**
     * Scenario 2: Button renders with label and icon
     *
     * This test ensures the icon element is rendered when the
     * icon prop is provided.
     */
    it('includes label and icon', () => {
        render(<Button label="Click Me" icon="add" />)
        const IconElement = screen.getByTestId('ral-test--icon')

        expect(IconElement).toBeInTheDocument()
    })

    /**
     * Scenario 3: Button click
     *
     * This test ensures the button correctly triggers the onClick
     * event when clicked.
     */
    it('triggers onClick event', () => {
        const handleClick = jest.fn()
        render(<Button label="Click Me" onClick={handleClick} />)
        const ButtonElement = screen.getByTestId('ral-test--button')

        ButtonElement.click()

        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    /**
     * Scenario 4: Button is keyboard focusable when not disabled
     *
     * This test ensures button can be focused via keyboard (tab).
     */
    it('is keyboard focusable when not disabled', async () => {
        render(<Button label="Focusable" />)
        const ButtonElement = screen.getByTestId('ral-test--button')

        ButtonElement.focus()
        expect(ButtonElement).toHaveFocus()
    })
})
