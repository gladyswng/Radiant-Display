import { graphql } from 'gatsby'
import React, { useState } from 'react'
import SubNavbar from '../components/SubNavbar'
import Img, { FluidObject } from 'gatsby-image'  
import ProductGallery from '../components/content/ProductGallery'
import MechTable from '../components/content/MechTable'
import PinTable from '../components/content/PinTable'
import DisplayAddTable from '../components/content/DisplayAddTable'

interface IMechData {

  characterSize: string
  dotPitch: string
  dotSize: string
  outlineDimension: string
  viewingArea: string

}

interface productProps {
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
          characterSize: string
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
        displayAddress: string[]
        imageGallery: {
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

const product: React.FC<productProps> = ({ data }) => {
  
  const { name, feature, mechanicalData, interfacePinFunction, displayAddress } = data.product.nodes[0]
  const toTitleCase = (phrase: string) => {
    const str =  phrase
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    return str[0].toUpperCase() + str.substring(1)
  }

  // const newList = mechanicalData.map((key: string )=> mechanicalData[key])
  // const ekstraMechanicalData = mechanicalData.forEach(data => {
  //   if (data[0] === 'dotSize')
  // })

    return (
      <SubNavbar subNav="products">
          
          <div className="md:grid lg:grid-cols-2  md:gap-12 lg:gap-20 w-10/12">

            {/* <ProductGallery gallery={product.imageGallery}/> */}
            <div className="m-auto text-rd-darkGray">
              <h2 className="text-2xl md:text-3xl text-rd-yellow">{name}</h2>
             
              <p className="font-bold">Feature</p>
              {/* if display, insert unit */}
              {Object.entries(feature).map(([ key, data ], i) => <p key={i} className=" text-rd-darkGray text-sm"><strong>{toTitleCase(key) } :</strong>&nbsp;&nbsp; {data}</p>)}
              
            </div>
          </div>
          <div className="text-rd-darkGray text-left w-10/12">
            <h4 className="pt-6 pb-2 font-light text-rd-yellow text-2xl">Mechanical Data</h4>
            <MechTable mechanicalData={mechanicalData}/>
            <h4 className="pt-6 pb-2 font-light text-rd-yellow text-2xl">Interface Pin Function</h4>
            <PinTable pinFunction={interfacePinFunction}/>
            <h4 className="pt-6 pb-2 font-light text-rd-yellow text-2xl">Display Address</h4>
            {displayAddress.length > 0 && <DisplayAddTable displayAddress={displayAddress}/>}
              <h3 className="font-light text-rd-yellow text-2xl">Dimensional Drawing</h3>
              {/* <div className="w-10/12">

                <Img fluid={product.dimensionalDrawing.asset.fluid}/>
              </div> */}

          </div>

      </SubNavbar>
    )
}
export default product

export const query = graphql`
query {
  product:allSanityProduct(filter: {slug: {current: {eq: "fstd-lcd-panel"}}}) {
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
      
 
      imageGallery {
        asset {
          fluid(maxWidth: 700) {
          ...GatsbySanityImageFluid
          }
          
        }
      }

     
    }
  }

}
`

     // dimensionalDrawing {
      //   asset {
      //     fluid(maxWidth: 650) {
      //       ...GatsbySanityImageFluid
      //   }
      //   }
      // }