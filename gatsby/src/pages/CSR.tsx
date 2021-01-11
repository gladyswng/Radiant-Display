import { graphql } from 'gatsby'
import React from 'react'
import SubNavbar from '../components/SubNavbar'
import Img, { FluidObject } from 'gatsby-image'  

interface CSRProps {

}
interface Image {
  asset: {
    fluid:  FluidObject
  }
} 
const CSR: React.FC<CSRProps> = ({ }) => {

    return (
      <div>
        <SubNavbar subNav="about">
          <h1 className="text-rd-darkGray text-3xl md:text-4xl font-bold my-6">SOCIAL RESPONSIBILITY</h1>
          <p className="text-rd-darkGray text-center font-light w-11/12">Our company is responsible for welfare of employees and society. We provide our own day care services for employees who have children. Our Company engages in a number of social activities: since 2005, Radiant Electronics has provided free education in Guizhou. <br/><br/> In 2005, our company sponsored to build School of Hope in Maochang, Guizhou, which one of the poorest province in China. We also participate in taking care of the poor & needy in Henan which is one of the 5 provinces in China with the most AIDS-infection people. Since then, we have sponsored & helped more than 1000 persons who are in need. In 2008, our director Philip Wong, was honored as the Top 10 most caring figures in Shenzhen, China.</p>

          
        </SubNavbar>

      </div>
    )
}
export default CSR

