import React from 'react'
import PhoneIcon from '../svg/phone2.svg'
import MailIcon from '../svg/email2.svg'
import LocationIcon from '../svg/location2.svg'
import FaxIcon from '../svg/fax.svg'

interface ContactCardProps {
  company: {
    title: string
    name: string
    description: string
    location: string
    phone: string
    fax: string

  }
}



const ContactCard: React.FC<ContactCardProps> = ({ company }) => {
  const { title, name, description, location, phone, fax } = company

    return (
       <div className="leading-6 text-darkGray"  >
            <div>
              <h5 className="text-yellow text-xl font-light border-b border-yellow">{title}</h5>
              <p className="text-semibold py-2">{name}</p>
              <p className="text-gray text-sm mb-2 font-light">{description}</p>
            </div>
             <li className="list-none">
              <ul className="py-2 flex item-start">
                <div className="inline-block">

                  <LocationIcon className="inline-block mr-3" fill="#828282"/>
                </div>
                <span className="font-light align-bottom inline-block leading">{location}</span>
              </ul>

              <ul className="py-2">
                <PhoneIcon className="inline-block mr-3 align-middle" fill="#828282"/>
                <span className="font-light align-bottom">{phone}</span>
              </ul>
              <ul className="py-2">
                <FaxIcon className="inline-block mr-3 align-middle" fill="#828282"/>
                <span className="font-light align-bottom">{fax}</span>
              </ul>

              
            </li>


          </div>
    )
}
export default ContactCard