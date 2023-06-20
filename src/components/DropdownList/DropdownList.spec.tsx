import { fireEvent, render, screen } from '@testing-library/react'
import DropdownList from './index'

describe('DropdownList', () => {
  it('should render the DropdownList with the text', () => {
    const mockToAlter = jest.fn()
    const label = 'Select Option'
    const value = 'Option 2'
    const itens = ['Option 1', 'Option 2', 'Option 3']

    render(<DropdownList toAlter={mockToAlter} label={label} value={value} itens={itens} />)

    const labelElement = screen.getByText(label)
    const selectElement = screen.getByRole('combobox')
    const options = screen.getAllByRole('option')

    expect(labelElement).toBeInTheDocument()
    expect(selectElement).toBeInTheDocument()
    expect(selectElement).toHaveValue(value)
    expect(options).toHaveLength(itens.length + 1)

    itens.forEach((item, index) => {
      expect(options[index + 1]).toHaveTextContent(item)
    })
  })

  it('should call the toAlter function with the selected value when an option is changed', () => {
    const mockToAlter = jest.fn()
    const label = 'Select Option'
    const value = 'Option 1'
    const itens = ['Option 1', 'Option 2', 'Option 3']

    render(<DropdownList toAlter={mockToAlter} label={label} value={value} itens={itens} />)

    const selectElement = screen.getByRole('combobox')

    fireEvent.change(selectElement, { target: { value: 'Option 2' } })
    expect(mockToAlter).toHaveBeenCalledTimes(1)
    expect(mockToAlter).toHaveBeenCalledWith('Option 2')
  })

  it('should render the DropdownList with the "required" attribute when the required prop is set to true', () => {
    const mockToAlter = jest.fn()
    const label = 'Select Option'
    const value = 'Option 1'
    const itens = ['Option 1', 'Option 2', 'Option 3']

    render(<DropdownList toAlter={mockToAlter} label={label} value={value} itens={itens} required={true} />)

    const selectElement = screen.getByRole('combobox')

    expect(selectElement).toBeRequired()
  })
})
