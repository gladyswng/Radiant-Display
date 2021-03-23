import { graphql } from 'gatsby'
import React from 'react'
import SubNavbar from '../components/SubNavbar'
import Img, { FluidObject } from 'gatsby-image'

interface ProductProps {
  data: {
    product: {
      nodes: {
        name: string
        item: string
        activeArea: string
        outlineDimension: string
        controller: string
        pixelPitch: string
        resolution: string
        size: string
        dotSize: string
        displayColor: string
        
      }[]
    }
    category: {

    }
  }
}

interface Image {
  asset: {
    fluid:  FluidObject
  }
} 

const Product: React.FC<ProductProps> = ({ data }) => {
  const product = data.product.nodes[0]
  const productList = [product, product, product, product, product, product]
  console.log(productList)

    return (
      <SubNavbar subNav="products">
        {/* <div className=""> */}

        
          <h1>{product.name} - {product.item}</h1>
          <div className="overflow-x-auto w-10/12 flex justify-center " style={{ maxHeight: '300px' }} >


            <table className="w-9/12 max-w-full text-center text-rd-darkGray relative" >
              <thead className="">
                <tr >
                  <th className="font-normal p-2 sticky top-0 bg-rd-lightGray">Size</th>
                  <th className="font-normal p-2 sticky top-0 bg-rd-lightGray">Pixel Pitch</th>
                  <th className="font-normal p-2 sticky top-0 bg-rd-lightGray">Item</th>
                  <th className="font-normal p-2 sticky top-0 bg-rd-lightGray">Active Area</th>
                  <th className="font-normal p-2 sticky top-0 bg-rd-lightGray">Outline Dimension</th>
                  <th className="font-normal p-2 sticky top-0 bg-rd-lightGray">Dots Size</th>
                  <th className="font-normal p-2 sticky top-0 bg-rd-lightGray">Controller</th>
                </tr>
              </thead>
              <tbody className="overflow-y-scroll">
                {productList.map((product, index) => {
                  return (
                    <tr key={index}>
                      <td className="font-light p-2">{product.size}</td>
                      <td className="font-light p-2">{product.pixelPitch}</td>
                      <td className="font-light p-2">{product.item}</td>
                      <td className="font-light p-2">{product.activeArea}</td>
                      <td className="font-light p-2">{product.outlineDimension}</td>
                      <td className="font-light p-2">{product.dotSize}</td>
                      <td className="font-light p-2">{product.controller}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        {/* </div> */}

      </SubNavbar>
    )
}
export default Product

export const query = graphql`
query {
  product:allSanityProduct(filter: {slug: {current: {eq: "stn-lcd-panel"}}}) {
    nodes {
     
      name
    
      imageGallery {
        asset {
          fixed(width: 140) {
          ...GatsbySanityImageFixed
          }
          
        }
      }

    }
  }

}
`