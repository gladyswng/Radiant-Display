
import { FluidObject } from 'gatsby-image'

export interface ICategory {
  name: string
  image: Image
  description: string
  details: string[] 
}

interface Image {
  asset: {
    fluid:  FluidObject
  }
} 

export interface IProduct {
  name: string
  item: string
  activeArea: string
  outlineDimension: string
  controller: string
  pixel: string
  resolution: string
  size: string
  dotsSize: string
  displayColor: string
}