import React, { useEffect, useRef, useState } from 'react'
import Img, { FluidObject } from 'gatsby-image'
import Zoom from 'react-medium-image-zoom'
import ImageZoom from './ImageZoom'


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
  const [ pointer, setPointer ] = useState(null)
  // const [ backgroundImage, setBackgroundImage ] = useState()
  const [ zoom, setZoom ] = useState(false)
  console.log(currentImage.asset.fluid.src)
  // useEffect(() => {
  //   setBackgroundImage(`url(${currentImage})`)
  // }, [currentImage] )


  // const onImageChange = (image) => setCurrentImage(image)
  // const mouseMoveHandler = (e: any)=> {
  //   const x = e.nativeEvent.offsetX
  //   const y = e.nativeEvent.offsetY
  //   console.log(x,y)
  //   console.log(e.target.getBoundingClientRect())
  //   // setPointer([x, y])
    
  // }

  // const mouseOverHandler = () => setZoom(true)
  // const mouseOutHandler = () => setZoom(false)
  
    return (

      <div className="">
        {/* <div className="overflow-hidden">
          <div className={` cursor-zoom-in overflow-hidden`} onMouseMove={mouseMoveHandler} onMouseOut={mouseOutHandler} onMouseOver={mouseOverHandler} style={{ transform: zoom? `scale(2) translate(-40px, -40px)`: 'scale(1.0)', transformOrigin: '0px 0px 0px'}} > */}
            {/* ${!!pointerCoords&&pointerCoords[1]} */}
            {/*  transform: `scale(2) translate(-${pointer[1]}px, -${pointer[2]}px)`, transformOrigin: '0px 0px 0px'  */}
          {/* <Img fluid={currentImage.asset.fluid} />

          </div>

        </div> */}
        <ImageZoom currentImage={currentImage}/>

        <div className="flex">
          {gallery.map(image => {
            return (
              <div className="w-20 bg-rd-lightGray m-2" onMouseOver={()=> setCurrentImage(image)}>

                  <Img fluid={image.asset.fluid} className="opacity-50 hover:opacity-100" />

              </div>
            )
          })}

        </div>
      </div>
    )
}
export default ProductGallery