import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

const MobileListItem = (
  <li className="py-2">
    <span
      /* @click="triggerMobileNavItem('#about')" */
      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
      >About</span>
  </li>
)

const MobileMenu = () => {
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
      /* @click="mobileMenu = false" */
    >
      <XMarkIcon />
    </button>

    <ul className="mt-8 flex flex-col">
      
      <li className="py-2">
        
        <span
          /* @click="triggerMobileNavItem('#about')" */
          className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
          >About</span>
        
      </li>
      
      <li className="py-2">
        
        <span
          /* @click="triggerMobileNavItem('#services')" */
          className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
          >Services</span>
        
      </li>
      
      <li className="py-2">
        
        <span
         /*  @click="triggerMobileNavItem('#portfolio')" */
          className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
          >Portfolio</span>
        
      </li>
      
      <li className="py-2">
        
        <span
          /* @click="triggerMobileNavItem('#clients')" */
          className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
          >Clients</span>
        
      </li>
      
      <li className="py-2">
        
        <span
          /* @click="triggerMobileNavItem('#work')" */
          className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
          >Work</span>
        
      </li>
      
      <li className="py-2">
        
        <span
          /* @click="triggerMobileNavItem('#statistics')" */
          className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
          >Statistics</span>
        
      </li>
      
      <li className="py-2">
        
        <span
          /* @click="triggerMobileNavItem('#blog')" */
          className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
          >Blog</span>
        
      </li>
      
      <li className="py-2">
        
        <span
          /* @click="triggerMobileNavItem('#contact')" */
          className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
          >Contact</span>
        
      </li>
      
    </ul>
  </div>
</div>
</>
  )
}

export default MobileMenu