import Image from 'next/image'
import Link from 'next/link'
import 'boxicons/css/boxicons.min.css'
import { siteContent } from '@/data'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Work from '@/components/Work'
import Statistics from '@/components/Statistics'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import SignUp from '@/components/SignUp'

export default function Home() {

  const {title,connect,description} = siteContent
  
  return (
    <div id="main" className="relative">
      <div>
        <div>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Work />
          <Statistics />
          <Blog />
          <Contact />
          {/* <div
            className="h-72 bg-cover bg-center bg-no-repeat sm:h-64 md:h-72 lg:h-96"
            style={{backgroundImage: "url(/assets/img/map.png)"}}
          ></div> */}
          <SignUp />
        </div>
      </div>
    </div>
  )
}
