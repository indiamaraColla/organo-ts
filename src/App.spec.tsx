import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
describe('App', () => {
  it('renders App component', () => {
    render(<App />)

    const bannerElement = screen.getByAltText('O banner principal da página do Organo')
    expect(bannerElement).toBeInTheDocument()

    const formElement = screen.getByTestId('form')
    expect(formElement).toBeInTheDocument()

    const collaboratorName = 'John Doe'
    const teamName = 'Front-End'
    const inputElement = screen.getByLabelText('Nome')
    const selectElement = screen.getByLabelText('Time')

    const addButtonElement = screen.getByText('Criar Card')

    userEvent.type(inputElement, collaboratorName)
    userEvent.selectOptions(selectElement, teamName)
    userEvent.click(addButtonElement)

    expect(inputElement).toBeInTheDocument()
    expect(selectElement).toContainElement(selectElement)
  })
})
