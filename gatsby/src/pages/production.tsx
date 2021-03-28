import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import SubNavbar from '../components/SubNavbar'
import GalleryModal from '../components/content/GalleryModal'
import ProductionGallery from '../components/content/ProductionGallery'

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

  // const [ modalShow, setModalShow ] = useState<boolean>(false)

    return (
      <SubNavbar subNav="about">
        <div className="w-11/12 md:w-9/12 m-auto">
          <h1 className="text-rd-darkGray text-3xl md:text-4xl font-bold my-6 text-center">PRODUCTION</h1>
            <p className="text-center text-rd-darkGray font-light  mb-12">Between 2011 & 2013, our company established two automatic STN production lines. With OUR own design team & R &D dept. & a full trained we tailor made products according to customer's needs and ensure goods produced in the best environment & the best quality
            </p>
          <div className="flex flex-col justify-center items-center text-left pb-20 ">
            {/* {modalShow && <GalleryModal gallery={gallery} initialIndex={gallery.findIndex(image => image.asset.fluid.src === currentImage.asset.fluid.src)} modalShow={modalShow} closeModal={()=>setModalShow(false)}/>} */}
              <ProductionGallery productionGallery={productionGallery}/>
              {/* <div className="md:grid lg:grid-cols-3 md:grid-cols-2 gap-2  w-full ">
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
              </div> */}
    


          </div>

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