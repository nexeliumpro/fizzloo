'use client'
import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { useParams } from 'next/navigation'

export type CartItem = {
  id: string; name: string; price: number; qty: number; pieces: number; emoji: string
}
type CartCtx = {
  items: CartItem[]; totalItems: number; totalPrice: number
  open: boolean; setOpen: (v: boolean) => void
  addItem: (item: Omit<CartItem,'qty'>) => void
  removeItem: (id: string) => void
  updateQty: (id: string, qty: number) => void
}

const CartContext = createContext<CartCtx | null>(null)
export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be inside CartProvider')
  return ctx
}

export default function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [open, setOpen] = useState(false)
  const [checkingOut, setCheckingOut] = useState(false)
  const params = useParams()
  const locale = (params?.locale as string) || 'en'

  const addItem = useCallback((item: Omit<CartItem,'qty'>) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id)
      if (existing) return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...item, qty: 1 }]
    })
    setOpen(true)
  }, [])

  const removeItem = useCallback((id: string) => setItems(prev => prev.filter(i => i.id !== id)), [])

  const updateQty = useCallback((id: string, qty: number) => {
    if (qty <= 0) { removeItem(id); return }
    setItems(prev => prev.map(i => i.id === id ? { ...i, qty } : i))
  }, [removeItem])

  const handleCheckout = async () => {
    setCheckingOut(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items, locale }),
      })
      const data = await res.json()
      if (data.url) window.location.href = data.url
    } catch (e) {
      setCheckingOut(false)
    }
  }

  const totalItems = items.reduce((s, i) => s + i.qty, 0)
  const totalPrice = items.reduce((s, i) => s + i.price * i.qty, 0)

  return (
    <CartContext.Provider value={{ items, totalItems, totalPrice, open, setOpen, addItem, removeItem, updateQty }}>
      {children}
      {open && (
        <>
          <div className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <h2 className="font-bold text-lg">
                <span role="img" aria-label="cart">ð</span> Cart ({totalItems})
              </h2>
              <button onClick={() => setOpen(false)} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold">x</button>
            </div>
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.length === 0 ? (
                <div className="text-center py-16 text-slate-400">
                  <div className="text-5xl mb-4" role="img" aria-label="bath">ð</div>
                  <p className="font-semibold">Your cart is empty</p>
                </div>
              ) : items.map(item => (
                <div key={item.id} className="flex gap-3 p-3 rounded-2xl bg-blue-50">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-2xl flex-shrink-0" role="img" aria-label={item.name}>{item.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm truncate">{item.name}</p>
                    <p className="text-xs text-slate-500">{item.pieces} bombs</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button className="qty-btn w-7 h-7 text-sm" onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
                      <span className="font-bold text-sm w-5 text-center">{item.qty}</span>
                      <button className="qty-btn w-7 h-7 text-sm" onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button onClick={() => removeItem(item.id)} className="text-slate-300 hover:text-red-400 text-xs font-bold">x</button>
                    <span className="font-bold text-brand-600 text-sm">{(item.price * item.qty).toFixed(2)} EUR</span>
                  </div>
                </div>
              ))}
            </div>
            {items.length > 0 && (
              <div className="p-5 border-t border-slate-100 space-y-3">
                <div className="flex justify-between font-bold text-lg">
                  <span>Subtotal</span>
                  <span className="text-brand-600">{totalPrice.toFixed(2)} EUR</span>
                </div>
                <p className="text-xs text-center text-slate-400">Free shipping included</p>
                <button onClick={handleCheckout} disabled={checkingOut} className="btn-primary w-full py-4 text-base font-bold rounded-2xl flex items-center justify-center gap-2">
                  {checkingOut ? 'Redirection...' : `Checkout -- ${totalPrice.toFixed(2)} EUR`}
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </CartContext.Provider>
  )
}
