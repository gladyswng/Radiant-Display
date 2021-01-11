import { graphql } from 'gatsby'
import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import SubNavbar from '../components/SubNavbar'

interface productionProps {
  data: {
    productionGallery: {
      nodes: {
        imageGallery: Image[]
     }[]
    }
  }
}

interface Image {
  asset: {
    fluid:  FluidObject
  }
} 


const production: React.FC<productionProps> = ({data}) => {
 
  const productionGallery = data.productionGallery.nodes[0].imageGallery
  // const production1 = productionGallery.slice(0,3)
  // const production2 = productionGallery.slice(3,6)
  // const production3 = productionGallery.slice(6,9)
  // const production4 = productionGallery.slice(9,12)

  
  //  console.log(production1)
    return (
      <SubNavbar subNav="about">
        <h1 className="text-rd-darkGray text-3xl md:text-4xl font-bold my-6 text-center">PRODUCTION</h1>
        <p className="text-center text-rd-darkGray font-light w-11/12 mb-12">Between 2011 & 2013, our company established two automatic STN production lines. With OUR own design team & R &D dept. & a full trained we tailor made products according to customer's needs and ensure goods produced in the best environment & the best quality
        </p>
      <div className="flex flex-col justify-center items-center text-left pb-20 w-11/12">
     
          
          <div className="md:grid lg:grid-cols-3 md:grid-cols-2 gap-2  w-full ">
            {productionGallery.map((image: Image, index: number) => {
              return (
                <Img 
                className="m-2 md:m-0"
                key={index}
                // imgStyle={{ objectFit: "contain" }}
                fluid={image.asset.fluid} />
            
              )
            }
            )}
          </div>
          {/* <h5 className="font-light text-rd-gray mb-4 text-lg text-left">Cleaning, Rubbing</h5> */}
       


          
          {/* <div className="md:grid md:grid-cols-3 gap-2 w-full">
            {production2.map((image: Image, index: number) => {
              return (
       
                  <Img 
                  key={index}
                  // imgStyle={{ objectFit: "contain" }}
                  fluid={image.asset.fluid} />
           
              )
            }
            )}
          </div> */}
          {/* <h5 className="font-light text-rd-gray mb-4 text-lg" >Glass Assembly, Curring</h5> */}
       

          
          {/* <div className="md:grid md:grid-cols-3 gap-2 w-full">
            {production3.map((image: Image, index: number) => {
              return (
              

                  <Img 
                  key={index}
                  // imgStyle={{ objectFit: "contain" }}
                  fluid={image.asset.fluid} />
          
              )
            }
            )}
          </div>
          <h5 className="font-light text-rd-gray mb-4 text-lg">Scribing, LC-injection, End-Sealing</h5>



  
          
          <div className="md:grid md:grid-cols-3 gap-2 w-full">
            {production4.map((image: Image, index: number) => {
              return (

                  <Img 
                  key={index}
                  // imgStyle={{ objectFit: "contain" }}
                  fluid={image.asset.fluid} />
                
              )
            }
            )}
          </div>
          <h5 className="font-light text-rd-gray mb-4 text-lg">Polarize Application, PIN Application, Packing</h5>
      */}


      </div>
      </SubNavbar>
    )
}
export default production


export const query = graphql`
  query {
  productionGallery: allSanityGallery(filter: {name: {eq: "Production"}}) {
    nodes {
      name
      imageGallery {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
  
}
`