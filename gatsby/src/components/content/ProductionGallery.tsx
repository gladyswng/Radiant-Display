import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import GalleryModal from './GalleryModal'

interface Image {
  asset: {
    fluid:  FluidObject
  }
} 

interface ProductionGalleryProps {
  productionGallery: Image[]
}


const ProductionGallery: React.FC<ProductionGalleryProps> = ({ productionGallery }) => {

  const [ modalShow, setModalShow ] = useState<boolean>(false)
  const [ currentImage, setCurrentImage ] = useState<Image>()

  const imageClickHandler = (image: Image) => {
    setModalShow(!modalShow)
    setCurrentImage(image)
  }

  return (
    <>
    {modalShow && currentImage && <GalleryModal gallery={productionGallery} initialIndex={productionGallery.findIndex(image => image.asset.fluid.src === currentImage.asset.fluid.src)} modalShow={modalShow} closeModal={()=>setModalShow(false)}/>}
    <div className="md:grid lg:grid-cols-3 md:grid-cols-2 gap-2  w-full ">
      
      {productionGallery.map((image: Image, index: number) => {
        return (
          <div key={image.asset.fluid.src} onClick={() => imageClickHandler(image)} className="cursor-zoom-in">

            <Img 
            className="m-2 md:m-0"
            fluid={image.asset.fluid} />
          </div>
      
        )
      }
      )}
    </div>
    </>
  )
}
export default ProductionGallery