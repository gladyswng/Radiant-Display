import React from 'react'
import Img, { FluidObject } from 'gatsby-image'  
import SubNavbar from '../components/SubNavbar'
import { graphql } from 'gatsby'


interface Image {
  asset: {
    fluid:  FluidObject
  }
} 

interface managementProps {

}

const management: React.FC<managementProps> = ({data }) => {
    

  const managementGallery = data.managementGallery.nodes[0]
  console.log(managementGallery)
    return (
      <>
        <SubNavbar subNav='about'>
          <h1 className="text-rd-darkGray text-3xl md:text-4xl font-bold my-6 text-center">MANAGEMENT</h1>
            <div  className="overflow-x-auto w-full m-auto" style={{minHeight: '400px',  maxWidth: '90%' }}  >
            
              <Img key={managementGallery.name} fluid={managementGallery.imagesGallery[0].asset.fluid} imgStyle={{ objectFit: 'contain'}} style={{ minWidth:'600px' }} />


            </div>
        </SubNavbar>
      </>
    )
}
export default management

export const query = graphql`
  query {
    managementGallery: allSanityGallery(filter: {name: {eq: "Management"}}) {
      nodes {
        name
        imagesGallery {
          asset {
            fluid(maxWidth: 1300) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  
  }
`