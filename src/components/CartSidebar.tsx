'use client'

import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { useCartStore } from '@/lib/store/cart'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ShoppingBag,
  Trash2,
  ArrowRight,
} from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const itemVariants = {
  initial: { opacity: 0, x: 60, scale: 0.95 },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 200, damping: 24 },
  },
  exit: {
    opacity: 0,
    x: 60,
    scale: 0.9,
    transition: { duration: 0.25, ease: 'easeIn' as const },
  },
}

const emptyVariants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.15, duration: 0.4, ease: 'easeOut' as const },
  },
}

interface CartSidebarProps {
  onCheckout?: () => void
}

export default function CartSidebar({ onCheckout }: CartSidebarProps) {
  const isOpen = useCartStore((s) => s.isOpen)
  const closeCart = useCartStore((s) => s.closeCart)
  const items = useCartStore((s) => s.items)
  const removeItem = useCartStore((s) => s.removeItem)
  const getTotal = useCartStore((s) => s.getTotal)
  const getTotalSavings = useCartStore((s) => s.getTotalSavings)
  const getItemCount = useCartStore((s) => s.getItemCount)

  const total = getTotal()
  const savings = getTotalSavings()
  const itemCount = getItemCount()

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent
        side="right"
        className="flex w-full flex-col bg-white sm:max-w-md p-0"
      >
        {/* ── Sticky Header ── */}
        <SheetHeader className="sticky top-0 z-10 border-b border-border/50 bg-white px-6 pb-4 pt-6">
          <SheetTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="h-5 w-5 text-rose-700" />
              <span className="font-[family-name:var(--font-playfair)] text-xl text-foreground">
                Your Cart
              </span>
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-700 text-[10px] font-bold text-white"
                >
                  {itemCount}
                </motion.span>
              )}
            </div>
            <button
              onClick={closeCart}
              className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-rose-50 hover:text-rose-700"
              aria-label="Close cart"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M1 1l12 12M13 1L1 13" />
              </svg>
            </button>
          </SheetTitle>
        </SheetHeader>

        {/* ── Scrollable Items Area ── */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <AnimatePresence mode="popLayout">
            {items.length === 0 ? (
              <motion.div
                key="empty-state"
                variants={emptyVariants}
                initial="initial"
                animate="animate"
                className="flex flex-col items-center justify-center px-4 py-16 text-center"
              >
                <ShoppingBag className="mb-4 h-16 w-16 text-muted-foreground/20" />
                <h3 className="font-[family-name:var(--font-playfair)] text-lg text-muted-foreground">
                  Your cart is empty
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground/70">
                  Explore Fleurite guides and resources
                </p>
                <Button
                  variant="outline"
                  onClick={closeCart}
                  className="mt-6 h-10 rounded-full border-rose-700 bg-transparent px-6 font-medium text-rose-700 hover:bg-rose-50 hover:text-rose-700"
                >
                  Browse Guides
                </Button>
              </motion.div>
            ) : (
              <motion.div className="flex flex-col gap-4" layout>
                <AnimatePresence initial={false}>
                  {items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      variants={itemVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      layout
                      className="flex gap-4 rounded-xl border border-border/30 bg-white p-3 transition-shadow hover:shadow-sm"
                    >
                      {/* Product Image */}
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-blush">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex flex-1 flex-col justify-between min-w-0">
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium text-foreground">
                            {item.product.name}
                          </p>
                          <p className="truncate text-xs text-muted-foreground">
                            {item.product.subtitle}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-sm font-bold text-rose-700">
                            ${item.product.price}
                          </span>
                          <motion.button
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => removeItem(item.product.id)}
                            className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground/50 transition-colors hover:bg-destructive/10 hover:text-destructive"
                            aria-label={`Remove ${item.product.name} from cart`}
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Sticky Footer ── */}
        {items.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' as const }}
            className="sticky bottom-0 z-10 border-t border-border/50 bg-white px-6 pb-6 pt-4"
          >
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Subtotal</span>
              <span className="text-lg font-bold text-foreground">${total}</span>
            </div>

            {/* Savings */}
            {savings > 0 && (
              <div className="mt-1.5 flex items-center justify-between">
                <span className="text-sm text-green-600">You save</span>
                <span className="text-sm font-bold text-green-600">
                  ${savings.toFixed(2)}
                </span>
              </div>
            )}

            {/* Checkout Button */}
            <motion.div className="mt-4" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={() => {
                  closeCart()
                  onCheckout?.()
                }}
                className="btn-glow h-12 w-full rounded-xl bg-rose-700 text-base font-semibold text-white shadow-lg transition-colors hover:bg-rose-800"
              >
                Checkout — ${total}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            {/* Secure checkout text */}
            <p className="mt-2 text-center text-xs text-muted-foreground/70">
              🔒 Secure checkout
            </p>
          </motion.div>
        )}
      </SheetContent>
    </Sheet>
  )
}
