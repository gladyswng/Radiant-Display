import React, { useEffect, useRef, useState } from 'react'
import Img, { FluidObject } from 'gatsby-image'

import GalleryModal from './GalleryModal'
import useClickOutside from '../../hooks/useClickOutside'


interface ProductGalleryProps {
  gallery: {
    asset: {
    fluid:  FluidObject
    }
  }[]
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ gallery }) => {
  console.log(gallery)
  
  const [ currentImage, setCurrentImage ] = useState(gallery[0])
  const [ modalShow, setModalShow ] = useState(false)

  const modalToggleHandler = () => {
    setModalShow(!modalShow)
  }
  console.log(modalShow)
  // const onImageChange = (image) => setCurrentImage(image)
  // const mouseMoveHandler = (e: any)=> {
  //   const x = e.nativeEvent.offsetX
  //   const y = e.nativeEvent.offsetY
  //   console.log(x,y)
  //   console.log(e.target.getBoundingClientRect())
  //   // setPointer([x, y])
  // }

    return (

      <div className="">
  
        {/* <div ref={myElementRef}> */}
          {modalShow && <GalleryModal gallery={gallery} initialIndex={gallery.findIndex(image => image.asset.fluid.src === currentImage.asset.fluid.src)} modalShow={modalShow} closeModal={()=>setModalShow(false)}/>}

        {/* </div> */}
       
        <div className="max-w-sm object-cover h-64 " onClick={modalToggleHandler} >
          <Img fluid={currentImage.asset.fluid} className=" w-full h-full"/>
          

        </div>
        <div className="flex flex-start">
          {gallery.map((image, i )=> {
            return (
              <div key={i} className="w-20 bg-rd-lightGray mr-2 my-2" onClick={()=> setCurrentImage(image)}>

                  <Img fluid={image.asset.fluid} className="opacity-50 hover:opacity-100 w-full h-full" />

              </div>
            )
          })}

        </div>
      </div>
    )
}
export default ProductGallery