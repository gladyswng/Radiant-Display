import { graphql, Link } from 'gatsby'
import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import AboutNavbar from '../components/AboutNavbar'

interface aboutProps {
  data: {
    AboutGallery: {
      nodes: {
        imagesGallery: Image[]
     }[]
    }
  }
}

interface Image {
  asset: {
    fluid:  FluidObject
  }
} 


const about: React.FC<aboutProps> = ({ data }) => {
  console.log(data)
  const gallery = data.AboutGallery.nodes[0].imagesGallery
    return (
      // <div className="flex items-center flex-col w-full mb-40">
      //   <h2 className="text-darkGray text-4xl font-bold my-6 ">ABOUT</h2>
        
      //   <div className="border-b border-darkGray w-9/12 flex justify-around mb-8 text-darkGray font-light">
      //     <Link>ABOUT US</Link>
      //     <Link>PRODUCTION</Link>
      //     <Link>FQA</Link>
      //     <Link>CONTRIBUTIONS</Link>
      //   </div>
      <AboutNavbar>
    
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-darkGray text-4xl font-bold my-6 text-center">WHO WE ARE</h1>
          <p className="text-center font-light text-darkGray w-10/12 mb-12">Radiant Electronics Limited is a Hong Kong based company display panels. ialized in LCD Established in 1991, Starting from watch business, the company started its first LCD assembling line in 2006 and since then focusing its main business into LCD industry. <br/><br/>From its humble beginning, it has now expanded into two factories in Shen zhen & Hui zhou. Together with factiories and dormítory buildings, the company occupies more than 20000 square meters, with more than 600 workers, achieving an annual output of over 1,000,000 sets of LCD screens. </p>

        </div>
          <div className="py-4 w-full flex flex-col items-center justify-center">
            <div className="p-4 w-10/12 flex items-start flex-col md:flex-row">
              <div style={{width: "320px", maxWidth:"100%"}}>
                <Img key={gallery[0].asset.fluid.src} fluid={gallery[0].asset.fluid} imgStyle={{ objectFit: 'contain'}}/>

              </div>
              <div className="text-darkGray bg-lightGray md:ml-8 bg-opacity-50 p-6 " style={{ width:"380px", maxWidth:"100%" }}>
                <h5  className="text-yellow text-3xl font-light">Expertise</h5>
                <p className="font-light">We have over 10 years manufacturing experience in LCD, LCM, and rich experience working with world-class corporations including Casio, Fossil, Panasonic etc.</p>

              </div>

            </div>

            <div className="p-4 w-10/12 flex flex-col md:flex-row md:flex-row-reverse  items-center md:justify-start" >
              <div className="" style={{ width: '400px', maxWidth:"100%"}} >
                <Img key={gallery[1].asset.fluid.src} fluid={gallery[1].asset.fluid} imgStyle={{ objectFit: 'contain'}} />

              </div>
              <div className=" text-darkGray bg-lightGray md:mr-8 bg-opacity-50 p-6" style={{ width:"400px", maxWidth:"100%" }}>
                <h5  className="text-yellow text-3xl font-light">Qualification</h5>
                <p className="font-light">The factory passes through ISO9001: 2001 and ISO14001 standard and adopts japanese 5S management Philosophy, emphasizing high quality, high efficiency, and high standard cusomer service.</p>

              </div>
              

            </div>

            <div className="p-4 w-10/12 flex flex-col md:flex-row items-center">
              <div style={{ width:'320px', maxWidth:"100%" }}>
                <Img key={gallery[2].asset.fluid.src} fluid={gallery[2].asset.fluid} imgStyle={{ objectFit: 'contain'}} />

              </div>

              <div className="text-darkGray bg-lightGray md:ml-8 bg-opacity-50 p-6" style={{ width:"300px", maxWidth:"100%" }}>
                <h5  className="text-yellow text-3xl font-light">Service</h5>
                <p className="font-light">We provide comporehensive customized services where you can customize your own product that suits your need.</p>

              </div>
              
            </div>

            <div className="p-4 w-10/12 flex flex-col md:flex-row md:flex-row-reverse  items-start justify-end md:justify-start">
              <div style={{ width:'380px', maxWidth:"100%" }}>
                <Img key={gallery[3].asset.fluid.src} fluid={gallery[3].asset.fluid} imgStyle={{ objectFit: 'contain'}}/>

              </div>

              <div className="text-darkGray bg-lightGray md:mr-8 bg-opacity-50 p-6 " style={{ width:"400px", maxWidth:"100%" }}>
                <h5  className="text-yellow text-3xl font-light">Markets</h5>
                <p className="font-light ">Our main markets locate in North America, Western Europe, Southeast Asia and East Asia including domestic markets in China </p>

              </div>
              
              
            </div>
           


          </div>
        <div className="mt-20">
          <h2 className="text-gray font-light text-3xl text-center mb-8">FIND OUT MORE</h2>
          <div>
            <button className="font-light bg-transparent text-gray border w-40 p-2 mx-6 focus:outline-none hover:border-yellow hover:text-yellow">CONTACT US</button>
            <button className="font-light bg-transparent text-gray border w-40 p-2 mx-6 focus:outline-none hover:border-yellow hover:text-yellow">FAQ</button>
            <button className="font-light bg-transparent text-gray border w-40 p-2 mx-6 focus:outline-none hover:border-yellow hover:text-yellow">PRODUCTION</button>
            <button className="font-light bg-transparent text-gray border w-40 p-2 mx-6 focus:outline-none hover:border-yellow hover:text-yellow">CONTRIBUTIONS</button>

          </div>

        </div>

      </AboutNavbar>
    )
}
export default about

export const query = graphql`
query {
  AboutGallery: allSanityGallery(filter: {name: {eq: "About"}}) {
    nodes {
      name
      imagesGallery {
        asset {
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }

}
`

