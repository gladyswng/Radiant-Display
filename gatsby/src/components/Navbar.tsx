import { Link } from "gatsby"
import React, { useState } from 'react'
import LogoName from "../svg/radisplay-logo-name.svg"
import Logo from "../svg/radisplay-logo.svg"


interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = ({}) => {
    const [isMenuOpen, setMenuOpen] = useState(false)
    return (
       <nav className="flex items-center justify-between flex-wrap bg-white p-2 border-b border-rd-gray ">
          <div className="flex items-center flex-shrink-0 mr-6">
            <Logo width="40px" height="40px" />
            <LogoName width="130px" height="40px" className="ml-4" />
            {/* <span className="font-semibold text-xl tracking-tight">
              Radiant Display
            </span> */}
          </div>
          <div className="block md:hidden">
            <button
              onClick={() => {
                setMenuOpen(isMenuOpen => !isMenuOpen)
              }}
              className="flex items-center px-3 py-2  hover:text-rd-yellow 
              focus:outline-none focus:ring focus:border-rd-yellow
              "
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`w-full h-0 md:h-10 overflow-hidden md:flex duration-200 transition-all ease-in-out  ${
              isMenuOpen && "h-48"
            } md:block flex-grow md:flex md:items-center md:w-auto text-center md:text-left `}
          >
            <div className="text-m md:flex-grow " onClick={() => {
                setMenuOpen(isMenuOpen => !isMenuOpen)
              }}>
              <Link
                to="/"
                className="block mt-4 md:inline-block md:mt-0  hover:text-rd-yellow md:mr-4 text-sm lg:text-base lg:text-base text-rd-yellow"
              >
                HOME
              </Link>
              <Link
                to="/about"
                className="block mt-4 md:inline-block md:mt-0 hover:text-rd-yellow md:mr-4 text-sm lg:text-base"
              >
                ABOUT
              </Link>
              <Link
                to="/category/stn-lcd"
                className="block mt-4 md:inline-block md:mt-0 hover:text-rd-yellow md:mr-4 text-sm lg:text-base"
              >
                PRODUCTS
              </Link>
              <Link
                to="/FAQ"
                className="block mt-4 md:inline-block md:mt-0 hover:text-rd-yellow md:mr-4 text-sm lg:text-base"
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className="block mt-4 md:inline-block md:mt-0 hover:text-rd-yellow md:mr-4 text-sm lg:text-base"
              >
                CONTACT US
              </Link>
            </div>
            
          </div>
        </nav>
    )
}
export default Navbar