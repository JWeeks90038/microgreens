import { NextResponse } from 'next/server'
import productsData from '@/data/products.json'

export async function GET() {
  try {
    return NextResponse.json(productsData)
  } catch (error) {
    console.error('Error loading products:', error)
    return NextResponse.json(
      { error: 'Failed to load products' },
      { status: 500 }
    )
  }
}