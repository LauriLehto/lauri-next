"use client";

import {useState} from 'react'

import Menu from './Menu'
import MobileMenu from './MobileMenu';

import { menuItems } from '@/data'

const Logo = () => (
  <div>
    <a href="/">
      <img src="/assets/img/logo.svg" className="w-24 lg:w-48" alt="logo image" />
    </a>
  </div>
)

const Header = () => {

  const [menuOpen, openMenu] = useState<boolean>(false)

  const menuToggle = () => {
    console.log('mobile menu clicked')
    openMenu(!menuOpen)
  }

  const mobileMenuClass = menuOpen ? 'block' : 'hidden'

  const menuProps = {
    menuToggle,
    menuItems,
    menuOpen
  }

  return (
    <>
    <div className="w-full z-50 top-0 py-3 sm:py-5 absolute">
      <div className="container flex items-center justify-between">
        <Logo />
        <Menu {...menuProps} />
      </div>
    </div>
    {menuOpen && <MobileMenu {...menuProps}/>}
    </>
  )
}

export default Header