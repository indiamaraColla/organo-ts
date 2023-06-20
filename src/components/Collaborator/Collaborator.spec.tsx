import { render, screen } from '@testing-library/react'
import Collaborator from './index'

describe('Collaborator', () => {
  it('should render the Collaborator with the text', () => {
    const collaborator = {
      name: 'João',
      image: 'https://example.com/image.jpg',
      position: 'Motorista',
      backgroundColor: 'rgb(255, 255, 255)',
    }

    render(<Collaborator {...collaborator} />)

    const nameElement = screen.getByText(collaborator.name)
    const imageElement = screen.getByAltText(collaborator.name)
    const positionElement = screen.getByText(collaborator.position)
    const primaryElement = screen.getByTestId('collaborator-primary')

    expect(nameElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute('src', collaborator.image)
    expect(positionElement).toBeInTheDocument()
    expect(primaryElement).toBeInTheDocument()
    expect(primaryElement).toHaveStyle(`background-color: ${collaborator.backgroundColor}`)
  })

  it('should render the Collaborator with a different background color', () => {
    const collaborator = {
      name: 'Maria',
      image: 'https://example.com/image.jpg',
      position: 'Engenheira',
      backgroundColor: 'rgb(0, 0, 0)',
    }

    render(<Collaborator {...collaborator} />)

    const primaryElement = screen.getByTestId('collaborator-primary')

    expect(primaryElement).toBeInTheDocument()
    expect(primaryElement).toHaveStyle(`background-color: ${collaborator.backgroundColor}`)
  })

  it('should render the Collaborator with a different name and position', () => {
    const collaborator = {
      name: 'Maria',
      image: 'https://example.com/image.jpg',
      position: 'Engenheira',
      backgroundColor: 'rgb(0, 0, 0)',
    }

    render(<Collaborator {...collaborator} />)
    const nameElement = screen.getByText(collaborator.name)
    const positionElement = screen.getByText(collaborator.position)

    expect(nameElement).toBeInTheDocument()
    expect(positionElement).toBeInTheDocument()
  })
})
