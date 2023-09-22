import Image from 'next/image'

export default function Home() {
  return (
    <div id="main" className="relative">
      <div
        /* x-data="{
          triggerNavItem(id) {
              $scroll(id)
          },
          triggerMobileNavItem(id) {
              mobileMenu = false;
              this.triggerNavItem(id)
          }
      }" */
      >
  

<div
  className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden"
  /* :className="{ 'opacity-100 pointer-events-auto': mobileMenu }" */
>
  <div
    className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3"
  >
    <button
      aria-label="Button"
      className="absolute top-0 right-0 mt-4 mr-4"
      /* @click="mobileMenu = false" */
    >
      <img src="/assets/img/icon-close.svg" className="h-10 w-auto" alt="" />
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
          /* @click="triggerMobileNavItem('#portfolio')" */
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
         /*  @click="triggerMobileNavItem('#blog')" */
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


      <div><div
  className="relative bg-cover bg-center bg-no-repeat py-8"
  style={{backgroundImage: "url(/assets/img/bg-hero.jpg)"}}
>
  <div
    className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"
  ></div>

  <div
    className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48"
  >
    <div className="flex flex-col items-center justify-center lg:flex-row">
      <div className="rounded-full border-8 border-primary shadow-xl">
        <img
          src="/assets/img/blog-author.jpg"
          className="h-48 rounded-full sm:h-56"
          alt="author"
        />
      </div>
      <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
        <h1
          className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl"
        >
          Hello I'm Christy Smith!
        </h1>
        <div
          className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start"
        >
          <div
            className="flex items-center justify-center pl-0 sm:justify-start md:pl-1"
          >
            <p className="font-body text-lg uppercase text-white">Let's connect</p>
            <div className="hidden sm:block">
              <i className="bx bx-chevron-right text-3xl text-yellow"></i>
            </div>
          </div>
          <div
            className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0"
          >
            <a aria-label="Link" href="/">
              <i
                className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"
              ></i>
            </a>
            <a aria-label="Link" href="/" className="pl-4">
              <i
                className="bx bxl-twitter text-2xl text-white hover:text-yellow"
              ></i>
            </a>
            <a aria-label="Link" href="/" className="pl-4">
              <i
                className="bx bxl-dribbble text-2xl text-white hover:text-yellow"
              ></i>
            </a>
            <a aria-label="Link" href="/" className="pl-4">
              <i
                className="bx bxl-linkedin text-2xl text-white hover:text-yellow"
              ></i>
            </a>
            <a aria-label="Link" href="/" className="pl-4">
              <i
                className="bx bxl-instagram text-2xl text-white hover:text-yellow"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="bg-grey-50" id="about">
  <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
    <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
      <h2
        className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
      >
        Who am I?
      </h2>
      <h4
        className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
      >
        I'm Christy Smith, a Web Designer & Photographer
      </h4>
      <p className="pt-6 font-body leading-relaxed text-grey-20">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div
        className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start"
      >
        <div className="flex items-center justify-center sm:justify-start">
          <p className="font-body text-lg font-semibold uppercase text-grey-20">
            Connect with me
          </p>
          <div className="hidden sm:block">
            <i className="bx bx-chevron-right text-2xl text-primary"></i>
          </div>
        </div>
        <div
          className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0"
        >
          <a aria-label="Link" href="/">
            <i
              className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"
            ></i>
          </a>
          <a aria-label="Link" href="/" className="pl-4">
            <i
              className="bx bxl-twitter text-2xl text-primary hover:text-yellow"
            ></i>
          </a>
          <a aria-label="Link" href="/" className="pl-4">
            <i
              className="bx bxl-dribbble text-2xl text-primary hover:text-yellow"
            ></i>
          </a>
          <a aria-label="Link" href="/" className="pl-4">
            <i
              className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"
            ></i>
          </a>
          <a aria-label="Link" href="/" className="pl-4">
            <i
              className="bx bxl-instagram text-2xl text-primary hover:text-yellow"
            ></i>
          </a>
        </div>
      </div>
    </div>
    <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
      <div>
        <div className="flex items-end justify-between">
          <h4 className="font-body font-semibold uppercase text-black">
            HTML & CSS
          </h4>
          <h3 className="font-body text-3xl font-bold text-primary">85%</h3>
        </div>
        <div className="mt-2 h-3 w-full rounded-full bg-lila">
          <div className="h-3 rounded-full bg-primary" style={{width: "85%"}}></div>
        </div>
      </div>
      <div className="pt-6">
        <div className="flex items-end justify-between">
          <h4 className="font-body font-semibold uppercase text-black">Python</h4>
          <h3 className="font-body text-3xl font-bold text-primary">70%</h3>
        </div>
        <div className="mt-2 h-3 w-full rounded-full bg-lila">
          <div className="h-3 rounded-full bg-primary" style={{width: "70%"}}></div>
        </div>
      </div>
      <div className="pt-6">
        <div className="flex items-end justify-between">
          <h4 className="font-body font-semibold uppercase text-black">
            Javascript
          </h4>
          <h3 className="font-body text-3xl font-bold text-primary">98%</h3>
        </div>
        <div className="mt-2 h-3 w-full rounded-full bg-lila">
          <div className="h-3 rounded-full bg-primary" style={{width: "98%"}}></div>
        </div>
      </div>
      <div className="pt-6">
        <div className="flex items-end justify-between">
          <h4 className="font-body font-semibold uppercase text-black">Figma</h4>
          <h3 className="font-body text-3xl font-bold text-primary">91%</h3>
        </div>
        <div className="mt-2 h-3 w-full rounded-full bg-lila">
          <div className="h-3 rounded-full bg-primary" style={{width: "91%"}}></div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container py-16 md:py-20" id="services">
  <h2
    className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
  >
    Here's what I'm good at
  </h2>
  <h3
    className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
  >
    These are the services Ioffer
  </h3>

  <div
    className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
  >
    <div className="group rounded px-8 py-12 shadow hover:bg-primary">
      <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
        <div className="hidden group-hover:block">
          <img
            src="/assets/img/icon-development-white.svg"
            alt="development icon"
          />
        </div>
        <div className="block group-hover:hidden">
          <img
            src="/assets/img/icon-development-black.svg"
            alt="development icon"
          />
        </div>
      </div>
      <div className="text-center">
        <h3
          className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
        >
          WEB DEVELOPMENT
        </h3>
        <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </div>
    <div className="group rounded px-8 py-12 shadow hover:bg-primary">
      <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
        <div className="hidden group-hover:block">
          <img
            src="/assets/img/icon-content-white.svg"
            alt="content marketing icon"
          />
        </div>
        <div className="block group-hover:hidden">
          <img
            src="/assets/img/icon-content-black.svg"
            alt="content marketing icon"
          />
        </div>
      </div>
      <div className="text-center">
        <h3
          className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
        >
          Technical Writing
        </h3>
        <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </div>
    <div className="group rounded px-8 py-12 shadow hover:bg-primary">
      <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
        <div className="hidden group-hover:block">
          <img
            src="/assets/img/icon-mobile-white.svg"
            alt="Mobile Application icon"
          />
        </div>
        <div className="block group-hover:hidden">
          <img
            src="/assets/img/icon-mobile-black.svg"
            alt="Mobile Application icon"
          />
        </div>
      </div>
      <div className="text-center">
        <h3
          className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
        >
          Mobile Development
        </h3>
        <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </div>
    <div className="group rounded px-8 py-12 shadow hover:bg-primary">
      <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
        <div className="hidden group-hover:block">
          <img
            src="/assets/img/icon-email-white.svg"
            alt="Email Marketing icon"
          />
        </div>
        <div className="block group-hover:hidden">
          <img
            src="/assets/img/icon-email-black.svg"
            alt="Email Marketing icon"
          />
        </div>
      </div>
      <div className="text-center">
        <h3
          className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
        >
          Email Development
        </h3>
        <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </div>
    <div className="group rounded px-8 py-12 shadow hover:bg-primary">
      <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
        <div className="hidden group-hover:block">
          <img
            src="/assets/img/icon-design-white.svg"
            alt="Theme Design icon"
          />
        </div>
        <div className="block group-hover:hidden">
          <img
            src="/assets/img/icon-design-black.svg"
            alt="Theme Design icon"
          />
        </div>
      </div>
      <div className="text-center">
        <h3
          className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
        >
          Graphic Design
        </h3>
        <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </div>
    <div className="group rounded px-8 py-12 shadow hover:bg-primary">
      <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
        <div className="hidden group-hover:block">
          <img
            src="/assets/img/icon-graphics-white.svg"
            alt="Graphic Design icon"
          />
        </div>
        <div className="block group-hover:hidden">
          <img
            src="/assets/img/icon-graphics-black.svg"
            alt="Graphic Design icon"
          />
        </div>
      </div>
      <div className="text-center">
        <h3
          className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
        >
          Web Design
        </h3>
        <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </div>
  </div>
</div>

<div className="container py-16 md:py-20" id="portfolio">
  <h2
    className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
  >
    Check out my Portfolio
  </h2>
  <h3
    className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
  >
    Here's what I have done with the past
  </h3>

  <div
    className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2"
  >
    <a
      href="/"
      className="mx-auto transform transition-all hover:scale-105 md:mx-0"
    >
      <img
        src="/assets/img/portfolio-apple.jpeg"
        className="w-full shadow"
        alt="portfolio image"
      />
    </a>
    <a
      href="/"
      className="mx-auto transform transition-all hover:scale-105 md:mx-0"
    >
      <img
        src="/assets/img/portfolio-stripe.jpeg"
        className="w-full shadow"
        alt="portfolio image"
      />
    </a>
    <a
      href="/"
      className="mx-auto transform transition-all hover:scale-105 md:mx-0"
    >
      <img
        src="/assets/img/portfolio-fedex.jpeg"
        className="w-full shadow"
        alt="portfolio image"
      />
    </a>
    <a
      href="/"
      className="mx-auto transform transition-all hover:scale-105 md:mx-0"
    >
      <img
        src="/assets/img/portfolio-microsoft.jpeg"
        className="w-full shadow"
        alt="portfolio image"
      />
    </a>
  </div>
</div>

<div className="bg-grey-50" id="clients">
  <div className="container py-16 md:py-20">
    <div className="mx-auto w-full sm:w-3/4 lg:w-full">
      <h2
        className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
      >
        My latest clients
      </h2>
      <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
        <span className="m-8 block">
          <img
            src="/assets/img/logo-coca-cola.svg"
            alt="client logo"
            className="mx-auto block h-12 w-auto"
          />
        </span>
        <span className="m-8 block">
          <img
            src="/assets/img/logo-apple.svg"
            alt="client logo"
            className="mx-auto block h-12 w-auto"
          />
        </span>

        <span className="m-8 block">
          <img
            src="/assets/img/logo-netflix.svg"
            alt="client logo"
            className="mx-auto block h-12 w-auto"
          />
        </span>

        <span className="m-8 block">
          <img
            src="/assets/img/logo-amazon.svg"
            alt="client logo"
            className="mx-auto block h-12 w-auto"
          />
        </span>

        <span className="m-8 block">
          <img
            src="/assets/img/logo-stripe.svg"
            alt="client logo"
            className="mx-auto block h-12 w-auto"
          />
        </span>
      </div>
    </div>
  </div>
</div>

<div className="container py-16 md:py-20" id="work">
  <h2
    className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
  >
    My work experience
  </h2>
  <h3
    className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
  >
    Here's what I did before freelancing
  </h3>

  <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
    <span
      className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"
    ></span>

    <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
      <div className="md:w-2/5">
        <div className="flex justify-center md:justify-start">
          <span className="shrink-0">
            <img
              src="/assets/img/logo-spotify.svg"
              className="h-auto w-32"
              alt="company logo"
            />
          </span>
          <div className="relative ml-3 hidden w-full md:block">
            <span
              className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"
            ></span>
          </div>
        </div>
      </div>
      <div className="md:w-3/5">
        <div className="relative flex md:pl-18">
          <span
            className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"
          ></span>

          <div className="mt-1 flex">
            <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
            <div className="md:-mt-1 md:pl-8">
              <span className="block font-body font-bold text-grey-40"
                >Apr 2015 - Mar 2018</span
              >
              <span
                className="block pt-2 font-header text-xl font-bold uppercase text-primary"
                >Frontend Developer</span
              >
              <div className="pt-2">
                <span className="block font-body text-black"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                  venenatis enim.</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
      <div className="md:w-2/5">
        <div className="flex justify-center md:justify-start">
          <span className="shrink-0">
            <img
              src="/assets/img/logo-microsoft.svg"
              className="h-auto w-32"
              alt="company logo"
            />
          </span>
          <div className="relative ml-3 hidden w-full md:block">
            <span
              className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"
            ></span>
          </div>
        </div>
      </div>
      <div className="md:w-3/5">
        <div className="relative flex md:pl-18">
          <span
            className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"
          ></span>

          <div className="mt-1 flex">
            <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
            <div className="md:-mt-1 md:pl-8">
              <span className="block font-body font-bold text-grey-40"
                >Mar 2018 - September 2019</span
              >
              <span
                className="block pt-2 font-header text-xl font-bold uppercase text-primary"
                >Software Engineer</span
              >
              <div className="pt-2">
                <span className="block font-body text-black"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                  venenatis enim.</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
      <div className="md:w-2/5">
        <div className="flex justify-center md:justify-start">
          <span className="shrink-0">
            <img
              src="/assets/img/logo-fedex.svg"
              className="h-auto w-32"
              alt="company logo"
            />
          </span>
          <div className="relative ml-3 hidden w-full md:block">
            <span
              className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"
            ></span>
          </div>
        </div>
      </div>
      <div className="md:w-3/5">
        <div className="relative flex md:pl-18">
          <span
            className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"
          ></span>

          <div className="mt-1 flex">
            <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
            <div className="md:-mt-1 md:pl-8">
              <span className="block font-body font-bold text-grey-40"
                >October 2019 - Feb 2021</span
              >
              <span
                className="block pt-2 font-header text-xl font-bold uppercase text-primary"
                >DevOps Engineer</span>
              <div className="pt-2">
                <span className="block font-body text-black"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                  venenatis enim.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div
  className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
  style={{backgroundImage: "url(/assets/img/experience-figure.png)"}}
  id="statistics"
>
  <div className="container">
    <div
      className="mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full"
    >
      <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
        <div
          className="flex flex-col items-center justify-center text-center md:flex-row md:text-left"
        >
          <div>
            <img
              src="/assets/img/icon-project.svg"
              className="mx-auto h-12 w-auto md:h-20"
              alt="icon project"
            />
          </div>
          <div className="pt-5 md:pl-5 md:pt-0">
            <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
              12
            </h1>
            <h4
              className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl"
            >
              Finished Projects
            </h4>
          </div>
        </div>

        <div
          className="flex flex-col items-center justify-center text-center md:flex-row md:text-left"
        >
          <div>
            <img
              src="/assets/img/icon-award.svg"
              className="mx-auto h-12 w-auto md:h-20"
              alt="icon award"
            />
          </div>
          <div className="pt-5 md:pl-5 md:pt-0">
            <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
              3
            </h1>
            <h4
              className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl"
            >
              Awards Won
            </h4>
          </div>
        </div>

        <div
          className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0"
        >
          <div>
            <img
              src="/assets/img/icon-happy.svg"
              className="mx-auto h-12 w-auto md:h-20"
              alt="icon happy clients"
            />
          </div>
          <div className="pt-5 md:pl-5 md:pt-0">
            <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
              8
            </h1>
            <h4
              className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl"
            >
              Happy Clients
            </h4>
          </div>
        </div>

        <div
          className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0"
        >
          <div>
            <img
              src="/assets/img/icon-puzzle.svg"
              className="mx-auto h-12 w-auto md:h-20"
              alt="icon puzzle"
            />
          </div>
          <div className="pt-5 md:pl-5 md:pt-0">
            <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
              99
            </h1>
            <h4
              className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl"
            >
              Bugs Fixed
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="bg-grey-50" id="blog">
  <div className="container py-16 md:py-20">
    <h2
      className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
    >
      I also like to write
    </h2>
    <h4
      className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
    >
      Check out my latest posts!
    </h4>
    <div
      className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10"
    >
      <a href="/post" className="shadow">
        <div
          style={{backgroundImage: "url(/assets/img/post-01.png)"}}
          className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
        >
          <span
            className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"
          ></span>
          <span
            className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base"
            >Read More</span>
        </div>
        <div className="bg-white py-6 px-5 xl:py-8">
          <span className="block font-body text-lg font-semibold text-black"
            >How to become a frontend developer</span>
          <span className="block pt-2 font-body text-grey-20"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        </div>
      </a>
      <a href="/post" className="shadow">
        <div
          style={{backgroundImage: "url(/assets/img/post-02.png)"}}
          className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
        >
          <span
            className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"
          ></span>
          <span
            className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base"
            >Read More</span
          >
        </div>
        <div className="bg-white py-6 px-5 xl:py-8">
          <span className="block font-body text-lg font-semibold text-black"
            >My personal productivity system</span>
          <span className="block pt-2 font-body text-grey-20"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        </div>
      </a>
      <a href="/post" className="shadow">
        <div
          style={{backgroundImage: "url(/assets/img/post-03.png)"}}
          className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
        >
          <span
            className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"
          ></span>
          <span
            className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base"
            >Read More</span>
        </div>
        <div className="bg-white py-6 px-5 xl:py-8">
          <span className="block font-body text-lg font-semibold text-black"
            >My year in review 2020</span>
          <span className="block pt-2 font-body text-grey-20"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        </div>
      </a>
    </div>
  </div>
</div>

<div className="container py-16 md:py-20" id="contact">
  <h2
    className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
  >
    Here's a contact form
  </h2>
  <h4
    className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
  >
    Have Any Questions?
  </h4>
  <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
    <p className="font-body text-grey-10">
      Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit
      condimentum turpis nisl sem, viverra habitasse urna ante lobortis
      fermentum accumsan. Viverra habitasse urna ante lobortis fermentum
      accumsan.
    </p>
  </div>
  <form className="mx-auto w-full pt-10 sm:w-3/4">
    <div className="flex flex-col md:flex-row">
      <input
        className="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
        placeholder="Name"
        type="text"
        id="name"
      />
      <input
        className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
        placeholder="Email"
        type="text"
        id="email"
      />
    </div>
    <textarea
      className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
      placeholder="Message"
      id="message"
      cols={30}
      rows={10}
    ></textarea>
    <button
      className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
    >
      Send
      <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
    </button>
  </form>
  <div className="flex flex-col pt-16 lg:flex-row">
    <div
      className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3"
    >
      <div className="flex items-center">
        <i className="bx bx-phone text-2xl text-grey-40"></i>
        <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
          My Phone
        </p>
      </div>
      <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
        (+881) 111 222 333
      </p>
    </div>
    <div
      className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2"
    >
      <div className="flex items-center">
        <i className="bx bx-envelope text-2xl text-grey-40"></i>
        <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
          My Email
        </p>
      </div>
      <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
        name@mydomain.com
      </p>
    </div>
    <div
      className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2"
    >
      <div className="flex items-center">
        <i className="bx bx-map text-2xl text-grey-40"></i>
        <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
          My Address
        </p>
      </div>
      <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
        123 New York D Block 1100, 2011 USA
      </p>
    </div>
  </div>
</div>

<div
  className="h-72 bg-cover bg-center bg-no-repeat sm:h-64 md:h-72 lg:h-96"
  style={{backgroundImage: "url(/assets/img/map.png)"}}
></div>

<div
  className="relative bg-primary bg-cover bg-center bg-no-repeat py-16 bg-blend-multiply lg:py-24"
  style={{backgroundImage: "url(/assets/img/bg-cta.jpg)"}}
>
  <div className="container relative z-30">
    <h3
      className="text-center font-header text-3xl uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl"
    >
      Keep <span className="font-bold">up-to-date</span> <br />
      with what I'm up to
    </h3>
    <form className="mt-6 flex flex-col justify-center sm:flex-row">
      <input
        className="w-full rounded px-4 py-3 font-body text-black sm:w-2/5 sm:py-4 lg:w-1/3"
        type="text"
        id="email"
        placeholder="Give me your Email"
      />
      <button
        className="mt-2 rounded bg-yellow px-8 py-3 font-body text-base font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-white focus:border-transparent focus:outline-none focus:ring focus:ring-yellow sm:ml-2 sm:mt-0 sm:py-4 md:text-lg"
      >
        Join the club
      </button>
    </form>
  </div>
</div>
</div>

      <div className="bg-primary">
  <div className="container flex flex-col justify-between py-6 sm:flex-row">
    <p className="text-center font-body text-white md:text-left">
      © Copyright 2022. All right reserved, ATOM.
    </p>
    <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
      <a aria-label="Link" href="/">
        <i
          className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"
        ></i>
      </a>
      <a aria-label="Link" href="/" className="pl-4">
        <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
      </a>
      <a aria-label="Link" href="/" className="pl-4">
        <i className="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i>
      </a>
      <a aria-label="Link" href="/" className="pl-4">
        <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
      </a>
      <a aria-label="Link" href="/" className="pl-4">
        <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
      </a>
    </div>
  </div>
</div>

    {/* <main classNameName="flex min-h-screen flex-col items-center justify-between p-24">
      <div classNameName="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p classNameName="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code classNameName="font-mono font-bold">app/page.tsx</code>
        </p>
        <div classNameName="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            classNameName="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              classNameName="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div classNameName="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          classNameName="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div classNameName="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 classNameName={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 classNameName={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 classNameName={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 classNameName={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main> */}
      </div>
    </div>
    
  )
}
