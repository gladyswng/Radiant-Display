import React, { ReactElement, useState } from "react"
import { graphql } from 'gatsby'
import Categories from "../components/Categories"
import Img, { FluidObject } from 'gatsby-image'

import ProductApplication from "../components/ProductApplication";

// import styles from '../css'

interface Props {
  data: any
}

interface Image {
  asset: {
    fluid:  FluidObject
  }
} 

const Index = ({ data }: Props): ReactElement => {
  
  
  const products = data.products.nodes
  console.log(data)
  return (
    <div className="flex flex-col items-center">

      <div className="flex justify-center bg-auto bg-center bg-cover w-screen h-xl " style={{
        backgroundImage: `
        linear-gradient(
        rgba(51, 51, 51, 0.45), 
        rgba(51, 51, 51, 0.45)
        ),
        url(${data.header.publicURL})
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
          {/* <div className="w-9/12 text-center pt-8" >
          <p className="font-semibold my-8 text-left ">PRODUCT APPLICATION</p>
          <ProductApplication />
          </div> */}
          {/* <div className="bg-lightGray w-screen flex items-center justify-center"> */}
      <div className="w-9/12 text-center py-12" >
        <h5 className="font-light text-yellow my-8 text-2xl">PRODUCTS</h5> 
        {/* font-semibold text-gray */}
        <p className="text-gray font-light my-2">With OUR own design team - a full trained quality control team, we tailor made products according to customer's needs and ensure goods produced in the best environment & the best quality.</p>
        
        <Categories products={products}/>
        {/* <p className="text-gray font-light my-4">we also provide comprehensive customize service where you can customize according to your need, with any size, color or type, to provide the best product you want.</p> */}
      </div>

      <div className="flex justify-center bg-auto bg-center bg-cover w-screen h-16"
      
      style={{
        backgroundImage: `
        linear-gradient(
        rgba(51, 51, 51, 0.45), 
        rgba(51, 51, 51, 0.45)
        ),
        url(${data.background1.publicURL})
        ` 
       }}>
    
        <div className="w-9/12 flex text-center py-8 justify-between" >
          <div className="flex flex-col ">

            <span className="text-4xl text-white font-semibold leading-none mb-2">12</span>
            <span className="text-white font-light text-lg">Years experience</span>
          </div>

          <div className="flex flex-col ">

            <span className="text-4xl text-white font-semibold leading-none mb-2">600</span>
            <span className="text-white font-light text-lg">Workers</span>
          </div>

          <div className="flex flex-col ">

            <span className="text-4xl text-white font-semibold leading-none mb-2">24</span>
            <span className="text-white font-light text-lg">Hours online</span>
          </div>

          <div className="flex flex-col ">

            <span className="text-4xl text-white font-semibold leading-none mb-2">750.000</span>
            <span className="text-white font-light text-lg">Sets annual output</span>
          </div>

        </div>

       
      </div>

      <div className="w-9/12 text-center py-12" >
        <h5 className="font-light my-8 text-2xl text-yellow">APPLICATION</h5>
        <p className="text-gray font-light my-6">On top of a wide range of options which can be applied in various fields, we also provide ODM & OEM with customize service. You may decide any color, size and type we could provide to make the finest product that suites your need.</p>
    
        <ProductApplication />
      </div>

      <div className="w-9/12 text-center mb-10" >
        <h5 className="font-light text-2xl text-yellow">FEATURED CLIENTS</h5>
        <div className="grid grid-cols-3 gap-6 py-6 m-auto">
          {data.ClientsGallery.nodes[0].imagesGallery.map((image:Image, index: number) => {
            return <Img key={index} fluid={image.asset.fluid} className="m-auto" imgStyle={{ objectFit: 'contain'}} style={{ width:'100px' }}/>
          })}

          
        </div>
        
      </div>

    


    </div>
  )
}

export default Index

export const query = graphql`
query {
  header:file(base: {eq: "QC2.jpg"}) {
    publicURL
  }
  background1:file(base: {eq: "background1.jpg"}) {
    publicURL
  }
  ClientsGallery: allSanityGallery(filter: {name: {eq: "Clients"}}) {
    nodes {
      name
      imagesGallery {
        asset {
          fluid(maxWidth: 200) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
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
`
