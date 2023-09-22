import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { MenuProps } from '@/props'

const MobileListItem = ({item}:any)=>(
  <li className="py-2">
    <span
      /* @click="triggerMobileNavItem('#about')" */
      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
      >About</span>
  </li>
)

const MenuList:any = (menuItems:Array<string>) => (
  <ul className="mt-8 flex flex-col">
    {
      menuItems.map((item, index) => (
        <MobileListItem item={item} key={index} />
      ))
    }
  </ul>
)

const MobileMenu = (menuProps:MenuProps) => {
  
  const { menuToggle, menuItems } = menuProps

  return (
    <>
      <div 
        className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden"
        /* :className="{ 'opacity-100 pointer-events-auto': mobileMenu }" */
      >
      <div
        className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3"
      >
        <button
          aria-label='Button'
          className="absolute top-0 right-0 mt-4 mr-4"
          onClick={menuToggle}
          /* @click="mobileMenu = false" */
          >
          <XMarkIcon />
        </button>
      </div>
    </div>
  </>
  )
}

export default MobileMenu