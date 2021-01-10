import { graphql, Link } from 'gatsby';
import React from 'react'
import Img, { FixedObject } from 'gatsby-image'

interface CategoriesProps {
  products: {
    cover: {
      asset: {
        fixed: FixedObject | FixedObject[]
      }
    }
    name: string,
    id: string
  } []
}

const Categories: React.FC<CategoriesProps> = ({ products }) => {

    return (
      <div className="flex flex-wrap justify-center items-center my-4">
        {/* grid gap-4 grid-cols-3 xl:grid-cols-5 */}
        
          {products.map(product => {
            return (
              <div key={product.id} className="flex flex-col justify-center items-center p-4 
              " >
              <div className=" rounded-full flex items-center justify-center  bg-rd-lightGray" style={{ height: 160, width: 160 }}>
                  {/* <div className="pb-4 rounded-full bg-contain bg-no-repeat bg-center bg-rd-lightGray w-40 flex items-center justify-center" style={{
                height: 150,
                backgroundImage:`url(${product.cover.asset.fluid.src})` }}> */}
                {/* border-rd-lightGray border-b-2  */}
                <Img  
                className="transform hover:scale-105"
                imgStyle={{ objectFit: "contain" }}
                style={{ height: 140 }}
                fixed={product.cover.asset.fixed}/>


              </div>
                <Link
                to="/" className="text-rd-darkGray mt-4 hover:text-rd-yellow">{product.name}</Link>
              </div>
            )
          })}
     
        
      
      </div>
    );
}
export default Categories



