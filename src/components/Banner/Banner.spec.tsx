import { render, screen } from '@testing-library/react'
import Banner from './index'

describe('Banner', () => {
  it('should render the banner with the correct image address and alt text', () => {
    const address = 'https://example.com/image.jpg'
    const altText = 'Example Alt Text'

    render(<Banner address={address} text={altText} />)
    const altElement = screen.getByAltText(altText)

    expect(altElement).toBeInTheDocument()
    expect(altElement).toHaveAttribute('src', address)
  })
})
