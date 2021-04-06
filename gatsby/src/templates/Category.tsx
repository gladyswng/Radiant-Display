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
        item: string
        feature: {
          display: string
          driverIC: string
        }
        mechanicalData: {
          characterSize: string
          dotSize: string
          outlineDimension: string
          viewingArea: string
        }

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
  const productList = data.product.nodes
  const sortedList = productList.map(prod => {
  const { characterSize, display,  dotSize, driverIC, outlineDimension, viewingArea  } = {...prod.feature, ...prod.mechanicalData }
    return [ display.replace(/ *\([^)]*\) */g,''), prod.item, viewingArea, outlineDimension.replace(/ *\([^)]*\) */g,''), dotSize, characterSize, driverIC ]
  })
  console.log(sortedList)
  const tableHeaders = ['Display (C x L)', 'Item', 'ViewingArea', 'Outline Dimension', 'Dot Siz', 'Character Size', 'Controller']
  return (

    <SubNavbar subNav="products">
      <div className="m-auto w-9/12">

        <h1 className="text-rd-darkGray text-3xl md:text-4xl font-bold my-6 mx-auto text-center">{category.name} LCD PANEL</h1>

        <div className="md:grid md:grid-cols-3 md:gap-8">
          
          <div className="w-full m-auto">
            <Img fluid={category.image.asset.fluid}/>
          </div>

          <div className="col-span-2 ">
              
              <p className="text-rd-darkGray font-light">{category.description}</p>
              <br/>
              {category.details.map((detail, index) => {
                  // const [ item, words ] = detail.split(":")
                  return (
                  
                    // <p key={Math.random()} className="font-light text-rd-darkGray text-sm">&gt; &nbsp;&nbsp;<strong>{item}: </strong>{detail}</p>
                    <p key={index} className=" text-sm font-light" >&gt; &nbsp;&nbsp;{detail}</p>
                )
              })}

          </div>
        
        </div>
        <div className="overflow-x-auto  flex md:justify-center mt-10"  >


            <table className="w-full text-center text-sm lg:text-base text-rd-darkGray relative " >
              <thead className="w-full">
                <tr >
                  {tableHeaders.map(header => (
                    <th key={header} className="font-normal p-2 sticky top-0 bg-rd-lightGray pl-4">{header}</th>
                  ))}
                  
                </tr>
              </thead>
              <tbody className=" bg-rd-lightGray bg-opacity-25 w-full text-sm">
                {sortedList.map((product, index) => {
                  return (
                    <tr key={index}>
                      {product.map((data, i) => (
                        <td key={i} className="font-light p-2 whitespace-nowrap"  >{data}</td>
                      ))}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
      </div>
    

      
    
    </SubNavbar>
  )
}
export default Category

export const query = graphql`
  query($slug: String) {
    category: allSanityCategory(filter: {slug: {current: {eq: $slug }}})  {
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

    product:allSanityProduct(filter: {category: {eq: $slug}}, sort: {order: ASC, fields: name}) {
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
        driverIC
      }
      name
      item
      mechanicalData {
        outlineDimension
        viewingArea
        dotSize
       
        characterSize
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
