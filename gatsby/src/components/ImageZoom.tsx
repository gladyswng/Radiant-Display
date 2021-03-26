import React, { useEffect, useRef, useState } from 'react'
import Img, { FluidObject } from 'gatsby-image'
import Modal from './Modal'

// import BackgroundImage from 'gatsby-background-image'


interface ImageZoomProps {
  currentImage: {
    asset: {
    fluid:  FluidObject
    }
  }
}

const ImageZoom: React.FC<ImageZoomProps> = ({currentImage}) => {
  const [ pointer, setPointer ] = useState(null)

  const [ backgroundImage, setBackgroundImage ] = useState({
    backgroundImage: `url(${currentImage.asset.fluid.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0% 0%'
  })
  // const [ zoom, setZoom ] = useState(true)
  // const [ imageStyle, setImageStyle ] = useState({transform: 'scale(1.0)', transformOrigin: 'none'})
  
  useEffect(() => {
    setBackgroundImage({backgroundImage: `url(${currentImage.asset.fluid.src})`, backgroundRepeat: 'no-repeat',
    backgroundPosition: '0% 0%'})
  }, [currentImage])

    const mouseMoveHandler = (e: any)=> {
    // const x = e.nativeEvent.offsetX
    // const y = e.nativeEvent.offsetY
    // setImageStyle({
    //   transform: `scale(2) translate(-${x}px, -${y}px)`,
    //   transformOrigin: '0px 0px 0px'
    // })
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100
    setBackgroundImage({ ...backgroundImage, backgroundPosition: `${x}% ${y}%` })
  }

  // console.log(zoom, imageStyle)
  // useEffect(() => {
  //   if (!zoom) {
  //     setImageStyle({transform: 'scale(1.0)', transformOrigin: 'none'})
  //   }
  // },[zoom])

  // const mouseOverHandler = () => setZoom(true)
  // const mouseOutHandler = () => {
  //   console.log('mouseout')
  //   setZoom(false)

  // }
    return (
      <div className="overflow-hidden">
        {currentImage && <div className={` md:cursor-zoom-in overflow-hidden w-8/12 z-10`} onMouseMove={mouseMoveHandler} 
        // onMouseOut={mouseOutHandler} 
        // onMouseOver={mouseOverHandler} 
        style={backgroundImage}>
          {/* ${!!pointerCoords&&pointerCoords[1]} */}
          {/*  transform: `scale(2) translate(-${pointer[1]}px, -${pointer[2]}px)`, transformOrigin: '0px 0px 0px'  */}
          {/* transform: zoom&imageStyle? {imageStyle}: 'scale(1.0)', transformOrigin: '0px 0px 0px'} */}
        <Img fluid={currentImage.asset.fluid} className="block md:hover:opacity-0 "/>
       

        </div>}

        {/* <Modal>
          <div className="w-screen">
            <Img fluid={currentImage.asset.fluid} />

          </div>
        </Modal> */}


      </div>
    )
}
export default ImageZoom