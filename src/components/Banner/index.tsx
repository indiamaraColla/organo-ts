import React from 'react'
import './Banner.css'

interface BannerProps {
  address: string
  text: string
}
const Banner = ({ address, text }: BannerProps) => {
  return (
    <header className="banner">
      <img src={address} alt={text} />
    </header>
  )
}

export default Banner
