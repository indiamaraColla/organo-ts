import { render, screen } from '@testing-library/react'
import Button from './index'

describe('Button', () => {
  it('should render the Button with the text', () => {
    const text = 'Example Text'

    render(<Button>{text}</Button>)
    const label = screen.getByText(text)

    expect(label).toBeInTheDocument()
  })
})
