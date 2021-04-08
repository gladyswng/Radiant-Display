import { graphql, Link } from 'gatsby';
import React from 'react'
import Img, { FixedObject } from 'gatsby-image'
import product from '../../pages/product';

interface CategoriesProps {
  categories: {
    image: {
      asset: {
        fixed: FixedObject | FixedObject[]
      }
    }
    name: string,
    slug: {
      current: string
    }
    id: string
  } []
  // slug: string
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  console.log(categories)
  // console.log(slug)
    return (
      <div className="flex flex-wrap justify-center items-center my-4">
        {/* grid gap-4 grid-cols-3 xl:grid-cols-5 */}
        
          {categories.map(product => {
            // Object.values(yourTestObject).every(Boolean)
            if (!product.name || !product.image || !product.id) {
              return null
            }
            return (
              <Link
                to={`/category/${product.slug.current}`} className="text-rd-darkGray mt-4 hover:text-rd-yellow" key={product.id}>
              <div  className="flex flex-col justify-center items-center p-4 hover:text-rd-yellow" >
                <div className=" rounded-full flex items-center justify-center  bg-rd-lightGray" style={{ height: 160, width: 160 }}>
                    {/* <div className="pb-4 rounded-full bg-contain bg-no-repeat bg-center bg-rd-lightGray w-40 flex items-center justify-center" style={{
                  height: 150,
                  backgroundImage:`url(${product.cover.asset.fluid.src})` }}> */}
                  {/* border-rd-lightGray border-b-2  */}
                  <Img  
                  className="transform hover:scale-110"
                  imgStyle={{ objectFit: "contain" }}
                  style={{ height: 140 }}
                  fixed={product.image.asset.fixed} />


                </div>
                
                  <p>{product.name} LCD</p>
              </div>
              </Link>
            )
          })}
     
        
      
      </div>
    );
}
export default Categories



