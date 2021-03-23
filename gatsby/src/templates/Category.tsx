import React from 'react'
import SubNavbar from '../components/SubNavbar'
import Img, { FluidObject } from 'gatsby-image'
import { graphql } from 'gatsby'

interface CategoryProps {
  data: {
    category: {
      nodes: {
        name: string
        image: Image
        description: string
        details: string[]


      } []
    }
    product: {
      nodes: {
        name: string
        cover: Image
        imageGallery: Image[]
        description: string
        displayColor: string
        item: string
        keywords: string[]
        pixelPitch: string
        size: string
        resolution: string
        outlineDimension: string
        dotSize: string
        activeArea: string
        controller: string


      } []
    }
  }
}
interface Image {
  asset: {
    fluid:  FluidObject
  }
} 

const Category: React.FC<CategoryProps> = ({data}) => {
    console.log(data)
  const category = data.category.nodes[0]
  const product= data.product.nodes[0]
  const productList = [product, product, product, product, product, product]
    return (

      <SubNavbar subNav="products">
      {/* <div className="flex items-center flex-col w-full mb-20"> */}
         {/* <h2 className="text-rd-darkGray text-2xl font-bold my-6 ">PRODUCTS</h2>
        
        <div className="border-b border-rd-darkGray w-9/12 flex justify-around mb-8 text-rd-darkGray font-light text-lg">
          <Link to="/about" className="block mt-4 md:inline-block md:mt-0 hover:text-rd-yellow">STN</Link>
          <Link to="/production" className="block mt-4 md:inline-block md:mt-0 hover:text-rd-yellow">FSTD</Link>
          <Link to="/FAQ" className="block mt-4 md:inline-block md:mt-0 hover:text-rd-yellow">TN</Link>
          <Link to="/CSR" className="block mt-4 md:inline-block md:mt-0 hover:text-rd-yellow">HTN</Link>
          <Link to="/CSR" className="block mt-4 md:inline-block md:mt-0 hover:text-rd-yellow">VA</Link>
        </div> */}
        <h1 className="text-rd-darkGray text-3xl md:text-4xl font-bold my-6">{category.name} PANEL</h1>

        <div className="md:grid md:grid-cols-3 md:gap-8 w-10/12">
          
          <div className="w-full m-auto">
            <Img fluid={category.image.asset.fluid}/>
          </div>

          <div className="col-span-2 ">
              
              <p className="text-rd-darkGray font-light">{category.description}</p>
              <br/>
              {category.details.map((detail, index) => {
                return (
                <p key={index} className=" text-sm font-light" >&gt; &nbsp;&nbsp;{detail}</p>
                )
              })}

          </div>
         
        </div>
        <div className="overflow-x-auto w-10/12 flex md:justify-center " style={{ maxHeight: '300px' }} >


            <table className="w-full text-center text-sm lg:text-base text-rd-darkGray relative " >
              <thead className="w-full">
                <tr >
                  <th className="font-normal p-2 sticky top-0 bg-rd-lightGray pl-4">Size</th>
                  <th className="font-normal p-2 sticky top-0 bg-rd-lightGray">Pixel</th>
                  <th className="font-normal p-2 sticky top-0 bg-rd-lightGray">Item</th>
                  <th className="font-normal p-2 sticky top-0 bg-rd-lightGray">Active Area</th>
                  <th className="font-normal p-2 sticky top-0 bg-rd-lightGray">Outline Dimension</th>
                  <th className="font-normal p-2 sticky top-0 bg-rd-lightGray">Dots Size</th>
                  <th className="font-normal p-2 sticky top-0 bg-rd-lightGray pr-4">Controller</th>
                </tr>
              </thead>
              <tbody className="overflow-y-scroll bg-rd-lightGray bg-opacity-25 w-full">
                {productList.map((product, index) => {
                  return (
                    <tr key={index}>
                      <td className="font-light p-2">{product.size}</td>
                      <td className="font-light p-2">{product.pixelPitch}</td>
                      <td className="font-light p-2" style={{ whiteSpace: 'nowrap' }}>{product.item}</td>
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

        
     
      </SubNavbar>
    )
}
export default Category

export const query = graphql`
  query {
    category: allSanityCategory {
    nodes {
      name
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      details
      description
      slug {
        current
      }
    }
    }

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

// query MyQuery {
//   allSanityProduct(filter: {category: {eq: "STN"}}) {
//     nodes {
//       description
//       name
//       keywords
//       imageGallery {
//         asset {
//           fixed {
//             src
//           }
//         }
//       }
//       outlineDimension
//       pixelPitch
//       resolution
//       size
//       item
//       dotSize
//       displayColor
//       children {
//         id
//       }
//     }
//   }
// }
