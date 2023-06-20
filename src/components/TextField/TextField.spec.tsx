import { fireEvent, render, screen } from '@testing-library/react'
import TextField from './index'

describe('TextField', () => {
  it('should render the TextField with the correct label and placeholder', () => {
    const toAlter = jest.fn()
    const placeholder = 'Enter your name'
    const label = 'Name'
    const value = ''
    const required = false

    render(<TextField toAlter={toAlter} placeholder={placeholder} label={label} value={value} required={required} />)

    const labelElement = screen.getByText(label)
    expect(labelElement).toBeInTheDocument()

    const inputElement = screen.getByPlaceholderText(`${placeholder}...`)
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveValue(value)
  })

  it('should call the toAlter function when input value changes', () => {
    const toAlter = jest.fn()
    const placeholder = 'Enter your name'
    const label = 'Name'
    const value = ''
    const required = false

    render(<TextField toAlter={toAlter} placeholder={placeholder} label={label} value={value} required={required} />)

    const inputElement = screen.getByTestId(label)

    fireEvent.change(inputElement, { target: { value: 'John Doe' } })

    expect(toAlter).toHaveBeenCalledTimes(1)
    expect(toAlter).toHaveBeenCalledWith('John Doe')
  })

  it('should call the toAlter function when input value change by placeholder', () => {
    const toAlter = jest.fn()
    const placeholder = 'Enter your name'
    const label = 'Name'
    const value = ''
    const required = false

    render(<TextField toAlter={toAlter} placeholder={placeholder} label={label} value={value} required={required} />)

    const inputElement = screen.getByPlaceholderText(`${placeholder}...`)

    fireEvent.change(inputElement, { target: { value: 'Maria' } })

    expect(toAlter).toHaveBeenCalledTimes(1)
    expect(toAlter).toHaveBeenCalledWith('Maria')
  })
})
