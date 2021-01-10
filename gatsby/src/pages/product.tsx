import { graphql } from 'gatsby'
import React from 'react'
import SubNavbar from '../components/SubNavbar'

interface productProps {
  
}

const product: React.FC<productProps> = ({ data }) => {
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
                  <th className="font-normal p-2 sticky top-0 bg-rd-lightGray">Pixel</th>
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
                      <td className="font-light p-2">{product.pixel}</td>
                      <td className="font-light p-2">{product.item}</td>
                      <td className="font-light p-2">{product.activeArea}</td>
                      <td className="font-light p-2">{product.outlineDimension}</td>
                      <td className="font-light p-2">{product.dotsSize}</td>
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
export default product

export const query = graphql`
query {
  product:allSanityProduct(filter: {slug: {current: {eq: "stn-lcd-panel"}}}) {
    nodes {
      description
      name
      keywords
      imageGallery {
        asset {
          fixed(width: 140) {
          ...GatsbySanityImageFixed
          }
          
        }
      }
      activeArea
      outlineDimension
      controller
      pixel
      resolution
      size
      item
      dotsSize
      displayColor
    }
  }

}
`