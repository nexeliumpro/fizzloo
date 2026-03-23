'use client'
import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

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
  const addItem = useCallback((item: Omit<CartItem,'qty'>) => {
    setItems(prev => {
      const ex = prev.find(i => i.id === item.id)
      if (ez) return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...item, qty: 1 }]
    })
    setOpen(true)
  }, [])
  const removeItem = useCallback((id: string) => setItems(prev => prev.filter(i => i.id !== id)), [])
  const updateQty = useCallback((id: string, qty: number) => {
    if (qty <= 0) { removeItem(id); return }
    setItems(prev => prev.map(i => i.id === id ? { ...i, qty } : i))
  }, [removeItem])
  const totalItems = items.reduce((s, i) => s + i.qty, 0)
  const totalPrice = items.reduce((s, i) => s + i.price * i.qty, 0)
  return (
    <CartContext.Provider value={{ items, totalItems, totalPrice, open, setOpen, addItem, removeItem, updateQty }}>
      {children}
      {open && (<><div className="fixed inset-0 bg-black/40 z-50"  onClick={() => setOpen(false)} /><div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col"><div className="flex items-center justify-between p-5 border-b"><h2 className="font-bold">Cart ({totalItems})</h2><button onClick={() => setOpen(false)} className="w-8 h-8 rounded-full bg-slate-100 font-bold">x</button></div><div className="flex-1 overflow-y-auto p-5">{items.length===0?<div className="text-center py-16 text-slate-400"><p>Your cart is empty</p></div>:items.map(item=>(<div key={item.id} className="flex gap-3 p-3 mb-3 rounded-2xl bg-blue-50"><div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">{item.emoji}</div><div className="flex-1"><p className="font-bold text-sm">{item.name}</p><div className="flex items-center gap-2 mt-2"><button className="qty-btn w-7 h-7 text-sm" onClick={()=>updateQty(item.id,item.qty-1)}>-</button><span>{item.qty}</span><button className="qty-btn w-7 h-7 text-sm" onClick={()=>updateQty(item.id,item.qty+1)}>+</button></div></div><span className="font-bold text-brand-600">{(item.price*'item.qty).toFixed(2)} EUR</span></div>))}</div>{items.length>0&&(<div className="p-5 border-t space-y-3"><div className="flex justify-between font-bold text-lg"><span>Subtotal</span><span className="text-brand-600">{totalPrice.toFixed(2)} EUR</span></div><button className="btn-primary w-full py-4 rounded-2xl">Checkout -- {totalPrice.toFixed(2)} EUR</button></div>)}</div></>)}</CartContext.Provider>)
}
