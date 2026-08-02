'use client'

import { useEffect } from 'react'
import CheckoutSheet from './CheckoutSheet'
import { useCheckoutStore } from '@/lib/store/checkout'

export default function CheckoutGateway() {
  const isOpen = useCheckoutStore((s) => s.isOpen)
  const openCheckout = useCheckoutStore((s) => s.openCheckout)
  const closeCheckout = useCheckoutStore((s) => s.closeCheckout)

  // Listen for custom event to open checkout
  useEffect(() => {
    const handleOpen = () => openCheckout()
    window.addEventListener('open-checkout', handleOpen)
    return () => window.removeEventListener('open-checkout', handleOpen)
  }, [openCheckout])

  return <CheckoutSheet isOpen={isOpen} onOpenChange={(open) => open ? openCheckout() : closeCheckout()} />
}
