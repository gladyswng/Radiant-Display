import React from 'react'
import LogoName from '../svg/radisplay-logo-name.svg'
import Logo from '../svg/radisplay-logo.svg'

import PhoneIcon from '../svg/phone.svg'
import MailIcon from '../svg/email.svg'
import LocationIcon from '../svg/location.svg'
import { Link } from 'gatsby'
import ContactForm from './content/ContactForm'
interface FooterProps {

}

const Footer: React.FC<FooterProps> = ({}) => {
    return (
      <div className="bg-rd-lightGray w-full p-4 md:p-10 flex flex-col md:flex-row justify-between">
        <div className="p-4 md:w-4/12" >

          <div className="mb-4 flex">
            <Logo height="50px" width="80px" className="mr-2 inline-block"/>
            <LogoName height="50px" width="200px" className="inline-block"/>
          </div>
        
          <li className="list-none p-2">
            {/* Long Address */}
            <ul className="py-2 flex item-start">
              <div className="inline-block">

                <LocationIcon className="inline-block mr-3" fill="#828282"/>
              </div>
              <span className="font-light align-bottom inline-block leading" >Rm T,13/F., Block 1, Kinho Ind. Bldg., 14 Au Pui Wan St., Shatin N.T. Hong Kong</span>
            </ul>

            <ul className="py-2">
              <PhoneIcon className="inline-block mr-3 align-middle" fill="#828282"/>
              <span className="font-light align-bottom">+852 2687 6326</span>
            </ul>

            <ul className="py-2">
              <MailIcon className="inline-block mr-3" fill="#828282"/>
              <span className="font-light align-bottom">info@radiant-display.com</span>
            </ul>
          </li>
        </div>

        <div className="p-4 ">
          <h4 className="text-2xl text-rd-yellow font-light mb-6">Quick Links</h4>
          <Link to="/" className="block font-light hover:text-rd-yellow pb-2 text-normal">About Us</Link>
          <Link to="/" className="block font-light hover:text-rd-yellow pb-2 text-normal">Products</Link>
          <Link to="/" className="block font-light hover:text-rd-yellow pb-2 text-normal">Our Production</Link>
          <Link to="/" className="block font-light hover:text-rd-yellow pb-2 text-normal">Corporate Responsibility</Link>
          <Link to="/" className="block font-light hover:text-rd-yellow pb-2 text-normal">Contact Us</Link>
        </div>

        <div className="p-4">
          <h4 className="text-2xl text-rd-yellow font-light mb-6">Contact Us</h4>
          <ContactForm small/>
        </div>

        



        
      </div>
    )
}
export default Footer