import React from 'react'
import { Link } from 'react-router-dom'
import Cta from '../custom-ui/Cta'
import { navLinks } from './Helper'

const Header = () => {
  return (
    <div className="container py-4">
      <nav className="flex items-center justify-between rounded-4 border border-solid border-black p-3">
        <Link to="/">Page Logo</Link>
        <div className="flex items-center gap-x-3">
          {navLinks.map((link, index) => (
            <Link
              to={`/${link.toLowerCase().replace(/ /g, '-')}`}
              key={index}
              className="text-lg font-medium capitalize common-transition hover:text-red-400"
            >
              {link}
            </Link>
          ))}
        </div>
        <Cta url="join-us">join us</Cta>
      </nav>
    </div>
  )
}

export default Header
