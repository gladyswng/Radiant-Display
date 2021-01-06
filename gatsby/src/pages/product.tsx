import { graphql, Link } from 'gatsby'
import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
interface productProps {
  data: {
    category: {
      nodes: {
        name: string
        image: Image
        description: string
        details: string[]


      } []
    }
  }
}

interface Image {
  asset: {
    fluid:  FluidObject
  }
} 

const product: React.FC<productProps> = ({data}) => {
  console.log(data)
  const category = data.category.nodes[0]
    return (
      <div className="flex items-center flex-col w-full mb-20">
         <h2 className="text-darkGray text-2xl font-bold my-6 ">PRODUCTS</h2>
        
        <div className="border-b border-darkGray w-9/12 flex justify-around mb-8 text-darkGray font-light text-lg">
          <Link to="/about" className="block mt-4 md:inline-block md:mt-0 hover:text-yellow">STN</Link>
          <Link to="/production" className="block mt-4 md:inline-block md:mt-0 hover:text-yellow">FSTD</Link>
          <Link to="/FAQ" className="block mt-4 md:inline-block md:mt-0 hover:text-yellow">TN</Link>
          <Link to="/CSR" className="block mt-4 md:inline-block md:mt-0 hover:text-yellow">HTN</Link>
          <Link to="/CSR" className="block mt-4 md:inline-block md:mt-0 hover:text-yellow">VA</Link>
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-8 w-9/12">
          {/* <p className="text-xl text-darkGray ">Product</p>
          <ul>
            
            <li>STN</li>
            <li>FSTD</li>
            <li>TN</li>
            <li>HTN</li>
            <li>VA</li>
          </ul> */}
          <div className="w-full m-auto">
            <Img fluid={category.image.asset.fluid}/>
          </div>

          <div className="col-span-2 ">
              <h4 className="font-bold text-darkGray">{category.name}</h4>
              <p className="text-darkGray font-light">{category.description}</p>
              <br/>
              {category.details.map(detail => {
                return (
                <p className=" text-sm font-light" >&gt; &nbsp;&nbsp;{detail}</p>
                )
              })}

          </div>


         
        </div>
      </div>
    )
}
export default product

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
  
}
`