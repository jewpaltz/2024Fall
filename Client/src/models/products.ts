import data from '../data/products.json'
import type { DataListEnvelope } from './dataEnvelope'
import { rest } from './myFetch'

export async function getAll() {
  return rest<DataListEnvelope<Product>>('http://localhost:3000/api/v1/products')
}

interface Review {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

export interface Product {
  id: number
  title: string
  description: string
  category: string
  price: number
  rating: number
  tags: string[]
  brand?: string
  weight: number
  dimensions: {
    width: number
    height: number
    depth: number
  }
  reviews: Review[]
  returnPolicy: string
  minimumOrderQuantity: number
  images: string[]
  thumbnail: string
}
