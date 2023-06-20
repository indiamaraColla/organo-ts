import { render, screen } from '@testing-library/react'
import Team from './index'
import { ListProps } from './type'

describe('Team', () => {
  it('should render the Team with the text', () => {
    const collaborators = [
      {
        position: 'Position 1',
        name: 'Collaborator 1',
        image: 'https://example.com/image1.jpg',
      },
      {
        position: 'Position 2',
        name: 'Collaborator 2',
        image: 'https://example.com/image2.jpg',
      },
    ]

    const secondaryColor = 'rgb(0, 0, 0)'
    const primaryColor = 'rgb(255, 255, 255)'
    const teamName = 'Team Name'

    render(<Team name={teamName} primary={primaryColor} secondary={secondaryColor} collaborators={collaborators} />)

    const teamNameElement = screen.getByText(teamName)
    const collaborator1Element = screen.getByText('Collaborator 1')
    const collaborator2Element = screen.getByText('Collaborator 2')
    const primary = screen.getByTestId('primary')
    const secondary = screen.getByTestId('team')

    expect(teamNameElement).toBeInTheDocument()
    expect(collaborator1Element).toBeInTheDocument()
    expect(collaborator2Element).toBeInTheDocument()

    expect(primary).toHaveStyle(`border-color: ${primaryColor}`)
    expect(secondary).toHaveStyle(`background-color: ${secondaryColor}`)
  })

  it('renders nothing when no collaborators are provided', () => {
    const collaborators: ListProps[] = []
    const secondaryColor = 'rgb(0, 0, 0)'
    const primaryColor = 'rgb(255, 255, 255)'
    const teamName = 'Team Name'

    render(<Team collaborators={collaborators} secondary={secondaryColor} primary={primaryColor} name={teamName} />)
    const collaboratorElement = screen.queryByRole('collaborators')
    expect(collaboratorElement).not.toBeInTheDocument()
  })
})
