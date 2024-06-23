import { useEffect, useState } from 'react'
import './App.css'
import Cta from './components/custom-ui/Cta'
import Input from './components/custom-ui/Input'
import Paragraph from './components/custom-ui/Paragraph'
import PrimaryHeading from './components/custom-ui/PrimaryHeading'
import BackToTop from './components/common/BackToTop'
import { useLocation } from 'react-router-dom'
import Header from './components/common/Header'
import Dummy from './components/Dummy'

function App() {
  // This function is for adding a pathname into the page title.
  const location = useLocation()
  useEffect(() => {
    const pageTitle = document.getElementById('page-title')
    const pathname = location.pathname
    pageTitle.innerHTML = `Default Name ${
      pathname !== '/'
        ? `| ${pathname
            .replace(/^\//, '')
            .replace(/-/g, ' ')
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')}`
        : ''
    }`
  }, [location])

  return (
    <>
      <Dummy />
    </>
  )
}

export default App
