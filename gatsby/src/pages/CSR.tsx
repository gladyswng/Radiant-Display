import React from 'react'
import AboutNavbar from '../components/AboutNavbar'

interface CSRProps {

}

const CSR: React.FC<CSRProps> = ({}) => {
    return (
      <div>
        <AboutNavbar>
          <p className="text-darkGray font-light w-9/12">Our company is responsible for welfare of employees and society. We provide our own day care services for employees who have children. Our Company engages in a number of social activities: since 2005, Radiant Electronics has provided free education in Guizhou. In 2005, our company sponsored to build School of Hope in Maochang, Guizhou, which one of the poorest province in China. We also participate in taking care of the poor & needy in Henan which is one of the 5 provinces in China with the most AIDS-infection people. Since then, we have sponsored & helped more than 1000 persons who are in need. In 2008, our director Philip Wong, was honored as the Top 10 most caring figures in Shenzhen, China.</p>

        </AboutNavbar>

      </div>
    )
}
export default CSR