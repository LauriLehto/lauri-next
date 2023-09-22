"use client";

import {useState} from 'react'

import Menu from './Menu'
import MobileMenu from './MobileMenu';

const menuItems = [
  "About", "Services", "Portfolio", "Clients", "Work", "Statistics", "Blog", "Contact"
]

const Logo = () => (
  <div>
    <a href="/">
      <img src="/assets/img/logo.svg" className="w-24 lg:w-48" alt="logo image" />
    </a>
  </div>
)

const Header = () => {

  const [mobileMenu, setMobileMenu] = useState<boolean>(false)

  const onMobileMenuClick = () => {
    console.log('mobile menu clicked')
    setMobileMenu(!mobileMenu)
  }

  const mobileMenuClass = mobileMenu ? 'block' : 'hidden'

  const menuProps = {
    onMobileMenuClick,
    menuItems
  }

  return (
    <>
    <div className="w-full z-50 top-0 py-3 sm:py-5 absolute">
      <div className="container flex items-center justify-between">
        <Logo />
        <Menu {...menuProps} />
      </div>
    </div>
    {mobileMenu && <MobileMenu />}
    </>
  )
}

export default Header