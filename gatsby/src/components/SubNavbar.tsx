import { Link } from 'gatsby'
import React from 'react'

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
          title: 'SOCIAL RESPONSIBILITY',
          link: '/CSR'
        },

      ]
    },
    products: {
      title: 'PRODUCTS',
      links: [
        {
          title: 'STN LCD',
          link: '/STN'
        },
        {
          title: 'FSTD LCD',
          link: '/FSTD'
        },
        {
          title: 'TN LCD',
          link: '/TN'
        },
        {
          title: 'HTN LCD',
          link: '/HTN'
        },
        {
          title: 'VA LCD',
          link: '/VA'
        },

      ]
    }

  }
 

    return (
      <div className="flex flex-col md:flex-row md:items-start items-center mb-24">

        <div className="pt-8 md:pl-8 w-40 md:text-left text-center">
          <h2 className="text-rd-darkGray md:text-xl font-bold md:my-5 " style={{ paddingBottom: '5px' }}>{nav[subNav].title}</h2>
          
          <div className=" flex flex-col justify-around md:pb-6 text-rd-darkGray font-light md:text-lg ">
            {nav[subNav].links.map(link => {
              return (
              <Link to={link.link} key={link.link} className="block mt-2 md:inline-block hover:text-rd-yellow">{link.title}</Link>
              )
            })}

          </div>
        </div>
        <div className="w-full flex flex-col items-center">
        {children}

        </div>
        
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

