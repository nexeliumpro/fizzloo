import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, { apiVersion: '2024-06-20' })

interface CartItem { id: string; name: string; price: number; qty: number; pieces: number; emoji: string }

export async function POST(req: NextRequest) {
  try {
    const { items, locale }: { items: CartItem[], locale: string } = await req.json()
    const line_items = items.map((item: CartItem) => ({
      price_data: {
        currency: 'eur',
        product_data: { name: item.name, description: item.pieces + ' bath bombs' },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.qty,
    }))
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.fizzloo.com') + '/' + locale + '/suivi?success=true',
      cancel_url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.fizzloo.com') + '/' + locale + '/collection',
      shipping_address_collection: { allowed_countries: ['FR','BE','CH','LU','MC','DE','ES','IT','NL','PT','GB'] },
      phone_number_collection: { enabled: true },
    })
    return NextResponse.json({ url: session.url })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}