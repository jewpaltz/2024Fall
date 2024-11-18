import type { DataEnvelope, DataListEnvelope } from './dataEnvelope'
import { api } from './myFetch'

export async function getAll() {
  return api<DataListEnvelope<Product>>('products')
}

export async function getById(id: number) {
  return api<DataEnvelope<Product>>(`products/${id}`)
}

export function create(product: Product) {
  return api<DataEnvelope<Product>>('products', product)
}

export function update(product: Product) {
  return api<DataEnvelope<Product>>(`products/${product.id}`, product, 'PATCH')
}

export function remove(id: number) {
  return api<DataEnvelope<Product>>(`products/${id}`, undefined, 'DELETE')
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
