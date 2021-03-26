import React, { useState } from 'react'
import Img, { FluidObject, FixedObject } from 'gatsby-image'
import Modal from '../Modal'
import ArrowBackIcon from '../../svg/arrow_back.svg'
import ArrowForwardIcon from '../../svg/arrow_forward.svg'


interface IImage{
  asset: {
    fluid:  FluidObject
  }
}

interface GalleryModalProps {
  gallery: {
    asset: {
    fluid:  FluidObject
    }
  }[]
  initialIndex: number
  modalShow?: boolean
  closeModal?:   () => void
}



const GalleryModal: React.FC<GalleryModalProps> = ({ gallery, initialIndex, modalShow, closeModal }) => {

  const [ currentIndex, setCurrentIndex ] = useState<number>(initialIndex)
  //  const currentIndex = gallery.findIndex(image => image.asset.fluid.src === currentImage.asset.fluid.src)
  console.log(currentIndex)


  const imageNextHandler = () => {
    
    setCurrentIndex((prevState) => {
     
      if (prevState === gallery.length-1) {
    
        return 0
      } else {
        
        return prevState + 1
      } 
    })
  }

  const imageBackHandler = () => {
    
    setCurrentIndex((prevState) => {
      if (prevState === 0) {
       
        return gallery.length-1
      } else {

        return prevState -1
      }
    })
  }
  const contentClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
  }

  return (
    <div onClick={closeModal}>

      <Modal >
        <div className="bg-rd-white p-2  p-6 pb-4 flex relative rounded-lg" onClick={contentClickHandler}>
          <div className="object-cover w-full h-full  flex-grow relative">
              <Img fluid={gallery[currentIndex].asset.fluid} className=""/>
          
          </div>
          <div className="absolute top-1/2 -left-10 z-10 hover:text-rd-gray focus:text-rd-gray cursor-pointer" onClick={imageBackHandler}>
            <ArrowBackIcon className="fill-current w-12 "/>

          </div>
    
          <div className="absolute top-1/2 -right-10 z-10 cursor-pointer hover:text-rd-gray focus:text-rd-gray" onClick={imageNextHandler}>
            <ArrowForwardIcon className="fill-current w-12 "/>

          </div>


        </div>
      </Modal>
    </div>
  )
}
export default GalleryModal