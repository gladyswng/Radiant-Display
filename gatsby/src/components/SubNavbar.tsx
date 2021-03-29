import { Link } from 'gatsby'
import React, { useState } from 'react'
import ExpandIcon from '../svg/expand.svg'
interface SubNavbarProps {
  // subNav: {
  //   title: string,
  //   links: {
  //     title: string,
  //     link: string
  //   }[]
  // }
  subNav: 'about' | 'products'
}

const SubNavbar: React.FC<SubNavbarProps> = ({ children, subNav }) => {

  const [ subNavOpen, setSubNavOpen ] = useState(false)

  const nav = {
    about: {
      title: 'ABOUT',
      links: [
        {
          title: 'WHO WE ARE',
          link: '/about'
        },
        {
          title: 'PRODUCTION',
          link: '/production'
        },
        {
          title: 'CERTIFICATION',
          link: '/certification'
        },
        {
          title: 'MANAGEMENT',
          link: '/management'
        },
        {
          title: 'CSR',
          link: '/CSR'
        },

      ]
    },
    products: {
      title: 'PRODUCTS',
      links: [
        {
          title: 'Character LCD',
          link: '/character'
        },
        {
          title: 'Graphic LCD',
          link: '/graphic'
        },
        {
          title: 'COG LCD',
          link: '/cog'
        },
        {
          title: 'Custom LCD',
          link: '/custom'
        }

      ]
    }

  }
  const toggleSubNav = () => {
    setSubNavOpen(!subNavOpen)
  }
 

    return (
      <div className="flex flex-col md:flex-row md:items-start items-center mb-24">

        <div className="pt-8 md:pl-8 w-44 md:text-left text-center">
          <div>
            <h2 className="text-rd-darkGray md:text-xl pb-1.5 font-bold md:my-5 inline-block " >{nav[subNav].title}</h2>
            <ExpandIcon className="inline-block md:hidden ml-2" fill="#454545" onClick={toggleSubNav} style={{ fill:"#fbc531" }}/>

          </div>
          
          <div className={`flex flex-col justify-around m-auto md:ml-0 md:pb-6 text-rd-darkGray font-light md:text-lg h-0 md:h-56 overflow-hidden ${subNavOpen&&'h-56 '} w-min md:flex duration-200 transition-all ease-in-out `}>
            
            {nav[subNav].links.map(link => {
              return (
              <Link to={link.link} key={link.link} className="block mt-2 md:inline-block hover:text-rd-yellow whitespace-nowrap">{link.title}</Link>
              )
            })}

          </div>
        </div>
        {/* <div className="flex flex-col items-center max-w-full"> */}
        {children}

        {/* </div> */}
        
      </div>
      // <div className="flex items-center flex-col w-full mb-20">
      //   <h2 className="text-rd-darkGray text-4xl font-bold my-6 ">ABOUT</h2>
        
      //   <div className="border-b border-rd-darkGray w-9/12 flex justify-around mb-8 text-rd-darkGray font-light text-lg">
      //     <Link to="/about" className="block mt-4 md:inline-block md:mt-0 hover:text-rd-yellow">ABOUT US</Link>
      //     <Link to="/production" className="block mt-4 md:inline-block md:mt-0 hover:text-rd-yellow">PRODUCTION</Link>
      //     <Link to="/certification" className="block mt-4 md:inline-block md:mt-0 hover:text-rd-yellow">CERTIFICATION</Link>
      //     <Link to="/CSR" className="block mt-4 md:inline-block md:mt-0 hover:text-rd-yellow">MANAGEMENT</Link>
      //     <Link to="/CSR" className="block mt-4 md:inline-block md:mt-0 hover:text-rd-yellow">SOCIAL RESPONSIBILITY</Link>
      //   </div>
      //   {children}
      // </div>
    )
}
export default SubNavbar


