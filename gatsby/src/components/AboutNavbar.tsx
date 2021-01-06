import { Link } from 'gatsby'
import React from 'react'

interface AboutNavbarProps {

}

const AboutNavbar: React.FC<AboutNavbarProps> = ({ children }) => {
    return (
      <div className="flex flex-col md:flex-row items-start  mb-20">

        <div className="p-8">
          <h2 className="text-darkGray text-xl font-bold my-6 " style={{ paddingBottom: '5px' }}>ABOUT</h2>
          
          <div className=" flex flex-col justify-around pb-8 text-darkGray font-light text-lg ">
            <Link to="/about" className="block md:inline-block hover:text-yellow">WHO WE ARE</Link>
            <Link to="/production" className="block mt-2 md:inline-block hover:text-yellow">PRODUCTION</Link>
            <Link to="/certification" className="block mt-2 md:inline-block hover:text-yellow">CERTIFICATION</Link>
            <Link to="/CSR" className="block mt-2 md:inline-block hover:text-yellow">MANAGEMENT</Link>
            <Link to="/CSR" className="block mt-2 md:inline-block hover:text-yellow">SOCIAL RESPONSIBILITY</Link>

          </div>
        </div>
        <div className="w-full">
        {children}

        </div>
        
      </div>
      // <div className="flex items-center flex-col w-full mb-20">
      //   <h2 className="text-darkGray text-4xl font-bold my-6 ">ABOUT</h2>
        
      //   <div className="border-b border-darkGray w-9/12 flex justify-around mb-8 text-darkGray font-light text-lg">
      //     <Link to="/about" className="block mt-4 md:inline-block md:mt-0 hover:text-yellow">ABOUT US</Link>
      //     <Link to="/production" className="block mt-4 md:inline-block md:mt-0 hover:text-yellow">PRODUCTION</Link>
      //     <Link to="/certification" className="block mt-4 md:inline-block md:mt-0 hover:text-yellow">CERTIFICATION</Link>
      //     <Link to="/CSR" className="block mt-4 md:inline-block md:mt-0 hover:text-yellow">MANAGEMENT</Link>
      //     <Link to="/CSR" className="block mt-4 md:inline-block md:mt-0 hover:text-yellow">SOCIAL RESPONSIBILITY</Link>
      //   </div>
      //   {children}
      // </div>
    )
}
export default AboutNavbar


