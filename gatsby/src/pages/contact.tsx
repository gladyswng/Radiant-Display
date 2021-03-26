import React from 'react'
import ContactCard from '../components/ContactCard'
import ContactForm from '../components/ContactForm'

interface contactProps {

}

const contact: React.FC<contactProps> = ({}) => {
    const companyList = [
    {
      title: 'HEADQUATER',
      name: 'Radiant Electronics Limited',
      description: 'Estabished on 24th september, 1991. 40 mil HKD in capital.',
      location: 'Rm T,13/F., Block 1, Kinho Ind. Bldg., 14 Au Pui Wan St., Hong Kong',
      phone:'+852 2687 6326',
      fax: '+852 2687 6321'
    },
    {
      title: 'SHENZHEN PLANT',
      name: 'Shenzhen Radiant Electronics Limited',
      description:'Estabished in 1996. Now owns 250 staffs. 30 mil RMB in capital.',
      location: '13 Jintang St. Tangkeng Village Henggang S.Z. China',
      phone: '+86755 2868 5743',
      fax: '+86755 2868 5739'
    },
    {
      title: 'HUIZHOU PLANT',
      name: 'Huizhou Radiant Photo Tech Limited',
      description:'Estabished in 2007. Now has 400 staffs. 40 mil RMB in capital.',
      location: 'Banqiao Industrial Area Taimei Village Boluo District, China',
      phone: '+86752 6723 919',
      fax: '+86752 6723 829'
    }

  ]
    return (
      <div className="flex items-center flex-col w-full mb-40">
        <h1 className="text-rd-darkGray text-3xl md:text-4xl font-bold my-6">CONTACT US</h1>

        <div className="md:grid md:grid-cols-3 md:gap-16 px-9 w-9/12">
        {/* md:grid md:grid-cols-2 md:gap-16 px-9 w-8/12 */}
          <div className="col-span-2">

            <ContactForm/>
          </div>
          <div className="text-center font-light text-rd-darkGray leading-7 my-4 md:my-0">
            <h5 className="text-2xl text-rd-yellow mb-2">More Details... </h5>
            <div className="text-sm">
              <p>Use our contact form to reach us or send your inquiry directly to </p>
              <strong>info@radiant-display.com</strong>
              <p>To order, please enter your inquiry details such as product name, color, size, quantity etc.</p>

            </div>

          </div>
          {companyList.map(company =><ContactCard company={company}/>
          )}
          
        </div>
      </div>
    )
}
export default contact