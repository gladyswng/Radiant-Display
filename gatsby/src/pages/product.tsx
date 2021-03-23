import { graphql } from 'gatsby'
import React, { useState } from 'react'
import SubNavbar from '../components/SubNavbar'
import Img, { FluidObject } from 'gatsby-image'  
import ProductGallery from '../components/ProductGallery'

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
        displayAddress: {
          DDRAM1: string
          DDRAM2: string
        } []
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
  const product = data.product.nodes[0]
  
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
              <h2 className="text-2xl md:text-3xl text-rd-yellow">{product.name}</h2>
             
              <p className="font-bold">Feature</p>
              {/* if display, insert unit */}
              {Object.entries(product.feature).map(([ key, data ], i) => <p key={i} className=" text-rd-darkGray text-sm"><strong>{toTitleCase(key) } :</strong>&nbsp;&nbsp; {data}</p>)}
              
            </div>
          </div>

          <table className="w-10/12 text-center text-rd-darkGray table-auto" >
              <thead className="">
                <tr>
                  <th className="font-normal p-2 bg-rd-lightGray text-left">Item</th>
                  <th className="font-normal p-2 bg-rd-lightGray">Dimension</th>
                  <th className="font-normal p-2 bg-rd-lightGray">Unit</th>
                
                </tr>
              </thead>
              <tbody className="">
                {Object.entries(product.mechanicalData).map(([key, data], i) => (
                  <tr  key={i}>
                    <td className="p-2 text-left">{toTitleCase(key) }</td>
                    <td className="font-light p-2">{data}</td>
                    <td className="font-light p-2">mm</td>
                  </tr>
                ))}
                    {/* <tr>
                      
                      <td className="p-2">Size (diagonal)</td>
                      <td className="font-light p-2">{product.size}</td>
                      <td className="font-light p-2">inch</td>
                    </tr>
                    <tr>
                      <td className=" p-2">Acitive Area</td>
                      <td className="font-light p-2">{product.activeArea}</td>
                      <td className="font-light p-2">mm</td>
                    </tr>
                    <tr>
                      <td className=" p-2">Viewing Area</td>
                      <td className="font-light p-2">{product.viewingArea}</td>
                      <td className="font-light p-2">mm</td>
                    </tr>
                    <tr>
                      <td className="p-2">Outline Dimension</td>
                      <td className="font-light p-2">{product.outlineDimension}</td>
                      <td className="font-light p-2">mm</td>
                    </tr>
                    <tr>
                      <td className="p-2">Dots Size</td>
                      <td className="font-light p-2">{product.dotSize}</td>
                      <td className="font-light p-2">mm</td>
                    </tr>
                    <tr>
                      <td className="p-2">Pixel Pitch</td>
                      <td className="font-light p-2">{product.pixelPitch}</td>
                      <td className="font-light p-2">mm</td>
                    </tr>
                    <tr>
                      <td className="p-2">Interface</td>
                      <td className="font-light p-2">{product.interface}</td>
                      <td className="font-light p-2"></td>
                    </tr>
                    <tr>
                      <td className="p-2">Display Color</td>
                      <td className="font-light p-2">{product.displayColor}</td>
                      <td className="font-light p-2"></td>
                    </tr> */}
             
              </tbody>
            </table>
            <h3 className="text-left text-2xl text-rd-yellow font-light w-10/12 py-8">Dimensional Drawing</h3>
            {/* <div className="w-10/12">

              <Img fluid={product.dimensionalDrawing.asset.fluid}/>
            </div> */}

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
      displayAddress {
        DDRAM1
        DDRAM2
      }
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