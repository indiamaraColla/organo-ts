import { render, screen } from '@testing-library/react'
import Form from './components/Form'
import { teams } from './config'

describe('Form', () => {
  it('should render teams in the dropdown list', () => {
    render(<Form onCollaboratorCreated={jest.fn()} teams={teams.map((item) => item.name)} />)

    const teamDropdown = screen.getByLabelText('Time')

    teams.forEach((team) => {
      const teamOption = screen.getByText(team.name)
      expect(teamOption).toBeInTheDocument()
      expect(teamDropdown).toContainElement(teamOption)
    })
  })
})
