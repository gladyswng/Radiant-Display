import { graphql, Link } from 'gatsby'
import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import SubNavbar from '../components/SubNavbar'
interface categoryProps {
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

const catogory: React.FC<categoryProps> = ({data}) => {
  console.log(data)
  const category = data.category.nodes[0]
  const product= data.product.nodes[0]
  const productList = [product, product, product, product, product, product]
  const sortedList = productList.map(prod => {
    const { characterSize, display,  dotSize, driverIC, outlineDimension, viewingArea  } = {...prod.feature, ...prod.mechanicalData }
    return [ display.replace(/ *\([^)]*\) */g,''), prod.item, viewingArea, outlineDimension.replace(/ *\([^)]*\) */g,''), dotSize, characterSize, driverIC ]
  })
  console.log(sortedList)
  const tableHeaders = ['Display (Character x Line)', 'Item', 'ViewingArea', 'OutlineDimension (L x W x TMax) ', 'Dot Siz', 'Character Size', 'Controller']
    return (

      <SubNavbar subNav="products">
      
        <h1 className="text-rd-darkGray text-3xl md:text-4xl font-bold my-6">{category.name} PANEL</h1>

        <div className="md:grid md:grid-cols-3 md:gap-8 w-10/12">
          
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
        <div className="overflow-x-auto w-10/12 flex md:justify-center "  >


            <table className="w-full text-center text-sm lg:text-base text-rd-darkGray relative " >
              <thead className="w-full">
                <tr >
                  {tableHeaders.map(header => (
                    <th key={header} className="font-normal p-2 sticky top-0 bg-rd-lightGray pl-4">{header}</th>
                  ))}
                  
                </tr>
              </thead>
              <tbody className=" bg-rd-lightGray bg-opacity-25 w-full">
                {sortedList.map((product, index) => {
                  return (
                    <tr key={index}>
                      {product.map((data, i) => (
                        <td key={i} className="font-light p-2 whitespace-no-wrap"  >{data}</td>
                      ))}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

        
     
      </SubNavbar>
    )
}

export default catogory

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