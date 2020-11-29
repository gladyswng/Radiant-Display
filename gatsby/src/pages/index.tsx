import React, { ReactElement, useState } from "react"
import { graphql } from 'gatsby'
import Categories from "../components/Categories"
import GasStationIcon from "../svg/local_gas_station.svg";

interface Props {
  data: any
}
// import styles from '../css'

const Index = ({ data }: Props): ReactElement => {
  
  
  const imageURL = data.file.publicURL
  const products = data.products.nodes
  console.log(products)
  return (
    <div className="flex flex-col items-center">

      <div className="flex justify-center bg-auto bg-center bg-cover w-screen h-xl " style={{
        backgroundImage: `
        linear-gradient(
        rgba(51, 51, 51, 0.45), 
        rgba(51, 51, 51, 0.45)
        ),
        url(${imageURL})
        ` 
      }}>
        {/* <div className="h-header w-screen bg-header"><img className="w-screen h-xl object-cover" src={imageURL} /> </div>*/}
        <div className="w-9/12 flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl  md:text-4xl font-extrabold text-white leading-none ">YOUR BEST CHOICE FOR LCD DISPLAY SCREEN</h1>
          <p className="my-8 md:my-12 md:text-lg text-white font-light">We provide long standing expertise in manufacturing, researching and designing LCD</p>

          <button className="
          text-white font-light bg-transparent border border-white w-40 p-2 focus:outline-none hover:border-yellow hover:text-yellow">About Us</button>

        </div>

       
      </div>
      {/* <div className="bg-lightGray w-screen flex items-center justify-center"> */}
        <div className="w-11/12 text-center" >
          <p className="font-semibold my-8 text-gray ">CATEGORIES</p>
          
          <Categories products={products}/>
        </div>

      {/* </div> */}

      <div className="w-11/12 text-center" >
          <p className="font-semibold my-8 text-gray ">PRODUCT APPLICATION</p>
          <p><GasStationIcon width="40px" height="40px"/></p>


          
          
        </div>
    </div>
  )
}

export default Index

export const query = graphql`
query {
  file(base: {eq: "QC2.jpg"}) {
    publicURL
  }
  products:allSanityProduct {
  
    nodes {
      id
      name
      cover {
        asset {
          fixed(width: 140) {
            ...GatsbySanityImageFixed
          }
          
        }
      }
    }
  }

 
}
`;
