import { graphql } from 'gatsby'
import React, { useState } from 'react'
import SubNavbar from '../components/SubNavbar'
import Img, { FluidObject } from 'gatsby-image'  
import ProductGallery from '../components/content/ProductGallery'
import MechTable from '../components/content/MechTable'
import PinTable from '../components/content/PinTable'
import DisplayAddTable from '../components/content/DisplayAddTable'
import ElectricalTable from '../components/content/ElectricalTable'

interface ProductProps {
  data: {
    product: {
      nodes: {
        name: string
        feature: {
          display: string
          driverCondition: string
          driverIC: string
          interface: string
          lcd: string
          viewingDirection: string
        }
        mechanicalData: {
          characterSize?: string
          dotPitch: string
          dotSize: string
          outlineDimension: string
          viewingArea: string
        }
        interfacePinFunction: {
          pinNumber: string
          symbol: string
          function: string
        }[]
        electricalChar: {
          item: string
          symbol: string
          condition: string
          min: string
          type: string
          max: string
          unit: string
        }[]
        displayAddress?: string[]
        cover: {
          asset: {
            fluid: FluidObject
          }
        }
        imageGallery?: {
          asset: {
            fluid: FluidObject 
          }
        }[]

        dimensionalDrawing?: {
          asset: {
            fluid: FluidObject 
          }
        }
      }[]
    }
  }
}

const Product: React.FC<ProductProps> = ({ data }) => {
  console.log(data.product.nodes[0])
  const { name, feature, mechanicalData, interfacePinFunction, displayAddress, electricalChar, imageGallery } = data.product.nodes[0]
  const toTitleCase = (phrase: string) => {
    const str =  phrase
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    return str[0].toUpperCase() + str.substring(1)
  }

  // const newList = mechanicalData.map((key: string )=> mechanicalData[key])
  // const ekstraMechanicalData = mechanicalData.forEach(data => {
  //   if (data[0] === 'dotSize')
  // })
  console.log(imageGallery)

    return (
      <SubNavbar subNav="products">
        <div className="w-11/12 md:w-8/12 m-auto">

          <div className="lg:flex items-end justify-between pb-6 border-rd-yellow">
            {/* md:grid lg:grid-cols-2  md:gap-4 lg:gap-20 items-end */}

           {!!imageGallery?.length && <ProductGallery gallery={imageGallery}/>}
            <div className="text-rd-darkGray text-sm md:text-base leading-6 font-normal ">
              <h2 className="text-2xl md:text-3xl text-rd-yellow mb-6">{name}</h2>
             
              <p className="font-bold text-xl mb-1">Feature</p>
              {/* if display, insert unit */}
              {Object.entries(feature).map(([ key, data ], i) => <p key={i} className=" text-rd-darkGray "><strong>{toTitleCase(key) } :</strong>&nbsp;&nbsp; {data}</p>)}
              
            </div>
          </div>
          <div className="text-rd-darkGray text-left">
            <h4 className="pt-6 pb-2 font-light text-rd-yellow text-2xl">Mechanical Data</h4>
            <MechTable mechanicalData={mechanicalData}/>
            <h4 className="pt-6 pb-2 font-light text-rd-yellow text-2xl">Interface Pin Function</h4>
            <PinTable pinFunction={interfacePinFunction}/>
            {!!displayAddress?.length && (
              <>
              <h4 className="pt-6 pb-2 font-light text-rd-yellow text-2xl">Display Address</h4>
              
              <DisplayAddTable displayAddress={displayAddress}/>
              </>
            )}
            {electricalChar && <>
              <h4 className="pt-6 pb-2 font-light text-rd-yellow text-2xl">Electrical Characterisitics</h4>
              <ElectricalTable electricalChar={electricalChar}/>
            
            </>}


              <h3 className="font-light text-rd-yellow text-2xl">Dimensional Drawing</h3>
              {/* <div className=">

                <Img fluid={product.dimensionalDrawing.asset.fluid}/>
              </div> */}

          </div>
        </div>

      </SubNavbar>
    )
}
export default Product

export const query = graphql`
query($slug: String) {
  product:allSanityProduct(filter: {slug: {current: {eq: $slug }}}) {
    nodes {
 
      name
      cover {
        asset {
        fixed(width: 140) {
        ...GatsbySanityImageFixed
        }
          
        }
      }
       feature {
        display
        lcd
        driverCondition
        viewingDirection
        backlight
        interface
        driverIC
      }
      name
      displayAddress 
      interfacePinFunction {
        pinNumber
        symbol
        function
      }
      mechanicalData {
        outlineDimension
        viewingArea
        dotSize
        dotPitch
        characterSize
      }
      electricalChar {
        item
        symbol
        condition
        min
        type
        max
        unit
      }
      
 
      imageGallery {
        asset {
          fluid(maxWidth: 700) {
          ...GatsbySanityImageFluid
          }
          
        }
      }
      dimensionalDrawing {
      asset {
        fluid(maxWidth: 650) {
          ...GatsbySanityImageFluid
      }
      }
      }

     
    }
  }

}
`

   