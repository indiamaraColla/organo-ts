import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from './index'

describe('Form', () => {
  it('should submit the form with the entered data', () => {
    const mockOnCollaboratorCreated = jest.fn()
    const teams = ['Team 1', 'Team 2', 'Team 3']
    render(<Form onCollaboratorCreated={mockOnCollaboratorCreated} teams={teams} />)

    const nameInput = screen.getByRole('textbox', { name: /Nome/i })
    const positionInput = screen.getByRole('textbox', { name: /Cargo/i })
    const imageInput = screen.getByRole('textbox', { name: /Imagem/i })
    const teamDropdown = screen.getByRole('combobox', { name: /Time/i })
    const createButton = screen.getByRole('button', { name: /Criar Card/i })

    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    fireEvent.change(positionInput, { target: { value: 'Developer' } })
    fireEvent.change(imageInput, { target: { value: 'https://example.com/image.jpg' } })
    fireEvent.change(teamDropdown, { target: { value: 'Team 2' } })
    fireEvent.click(createButton)

    expect(mockOnCollaboratorCreated).toHaveBeenLastCalledWith({
      name: 'John Doe',
      position: 'Developer',
      image: 'https://example.com/image.jpg',
      team: 'Team 2',
    })
  })

  it('should call onSave when all required fields are filled', () => {
    const mockOnCollaboratorCreated = jest.fn()
    const teams = ['Team 1', 'Team 2', 'Team 3']

    render(<Form onCollaboratorCreated={mockOnCollaboratorCreated} teams={teams} />)

    const nomeInput = screen.getByTestId('Nome')
    const cargoInput = screen.getByTestId('Cargo')
    const timeDropdown = screen.getByTestId('Time')
    const button = screen.getByText('Criar Card')

    fireEvent.change(nomeInput, { target: { value: 'John Doe' } })
    fireEvent.change(cargoInput, { target: { value: 'Developer' } })
    fireEvent.change(timeDropdown, { target: { value: 'Team 1' } })

    fireEvent.click(button)

    expect(mockOnCollaboratorCreated).toHaveBeenCalledTimes(1)
    expect(mockOnCollaboratorCreated).toHaveBeenCalledWith({
      name: 'John Doe',
      position: 'Developer',
      image: '',
      team: 'Team 1',
    })
  })

  it('should not call onSave when required fields are missing', () => {
    const mockOnCollaboratorCreated = jest.fn()
    const teams = ['Team 1', 'Team 2', 'Team 3']

    render(<Form onCollaboratorCreated={mockOnCollaboratorCreated} teams={teams} />)

    const nomeInput = screen.getByLabelText('Nome')
    const cargoInput = screen.getByLabelText('Cargo')
    const imagemInput = screen.getByLabelText('Imagem')
    const timeDropdown = screen.getByLabelText('Time')
    const button = screen.getByText('Criar Card')

    fireEvent.click(button)

    expect(mockOnCollaboratorCreated).not.toHaveBeenCalled()

    userEvent.type(nomeInput, 'John Doe')
    fireEvent.click(button)

    expect(mockOnCollaboratorCreated).not.toHaveBeenCalled()

    userEvent.type(cargoInput, 'Developer')
    userEvent.type(imagemInput, 'https://example.com/image.png')
    userEvent.selectOptions(timeDropdown, 'Team 1')
    fireEvent.click(button)

    expect(mockOnCollaboratorCreated).toHaveBeenCalledTimes(1)
    expect(mockOnCollaboratorCreated).toHaveBeenCalledWith({
      name: 'John Doe',
      position: 'Developer',
      image: 'https://example.com/image.png',
      team: 'Team 1',
    })
  })
})
