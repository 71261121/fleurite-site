import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const products = await db.product.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: 'asc' },
    })

    const parsed = products.map((p) => ({
      ...p,
      benefits: JSON.parse(p.benefits),
    }))

    return NextResponse.json({ products: parsed })
  } catch (error) {
    console.error('Products fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}
