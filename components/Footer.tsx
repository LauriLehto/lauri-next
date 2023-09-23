import React from 'react'
import Link from 'next/link'
import { socialMedia } from '@/data'

const FooterLink = ({ url, name }:{ url:string, name:string }) => (
    url && name && <Link href={url} className='pl-4'>
      <i className={`bx bxl-${name} text-2xl text-white hover:text-yellow`} />
    </Link>
)

const LinkGroup = ({ links }:{ links:{url:string, name:string}[] }) => (
  <>    
    {links.map((link) => (
      <FooterLink key={link.url} {...link} />
    ))}
  </>
)

const Footer = () => {

  const FooterProps = {
    links: socialMedia
  }
  return (
    <div className="bg-primary">
    <div className="container flex flex-col justify-between py-6 sm:flex-row">
      <p className="text-center font-body text-white md:text-left">
        © Copyright 2022. All right reserved, ATOM.
      </p>
      <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
        <LinkGroup {...FooterProps} />
      </div>
    </div>
  </div>
  )
}

export default Footer