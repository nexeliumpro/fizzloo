import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-06-20' })

export async function POST(req: NextRequest) {
  try {
    const { items, locale } = await req.json()
    const line_items = items.map((item) => ({
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
      success_url: process.env.NEXT_PUBLIC_SITE_URL + '/' + locale + '/suivi?success=true',
      cancel_url: process.env.NEXT_PUBLIC_SITE_URL + '/' + locale + '/collection',
      shipping_address_collection: { allowed_countries: ['FR','BE','CH','LU','MC','DE','ES','IT','NL','PT','GB'] },
      phone_number_collection: { enabled: true },
    })
    return NextResponse.json({ url: session.url })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}