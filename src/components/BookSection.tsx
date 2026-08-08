'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Download, Lock, ArrowRight, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function BookSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute -left-32 top-1/4 h-96 w-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(45,90,79,0.08) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.05, 1], rotate: [0, 3, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(166,127,127,0.08) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.08, 1], rotate: [0, -2, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Get Your Guide Today
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your path to relationship clarity and nervous system healing
            </p>
          </motion.div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* FREE GUIDE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative rounded-2xl border border-border/50 bg-card p-8 shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Badge */}
            <div className="absolute -top-4 left-8 bg-evergreen text-warmWhite text-xs font-bold px-4 py-1.5 rounded-full inline-block">
              FREE
            </div>

            {/* Book Cover Image */}
            <div className="relative mb-6 overflow-hidden rounded-xl h-64 bg-gradient-to-br from-evergreen to-clay">
              <Image
                src="/book-cover.png"
                alt="Why You Shrink Yourself - Free Guide"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                  Why You Shrink Yourself
                </h3>
                <p className="text-sm text-clay font-medium mt-1">
                  The 3-Day Reset for Anxious Attachment
                </p>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed">
                Understand why you shrink yourself in relationships and get a practical 3-day reset to help your nervous system relearn safety.
              </p>

              {/* Benefits List */}
              <div className="space-y-2 pt-2">
                <p className="text-xs font-semibold text-foreground uppercase tracking-wider">What you'll get:</p>
                <ul className="space-y-1.5">
                  {[
                    'Understand the shrinking pattern',
                    'Validate your nervous system response',
                    'Take action immediately',
                    'Get clarity on what comes next'
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Sparkles className="h-4 w-4 text-evergreen shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="pt-6 border-t border-border/40">
                <a href="/api/downloads/free-guide" download="the-3am-text-rescue.pdf">
                  <Button className="w-full h-12 rounded-xl bg-evergreen text-warmWhite font-semibold hover:bg-evergreen/90 transition-all group/btn flex items-center justify-center gap-2">
                    <Download className="h-5 w-5" />
                    Download Free PDF
                  </Button>
                </a>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  No email required • Instant download
                </p>
              </div>
            </div>
          </motion.div>

          {/* PAID BOOK */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative rounded-2xl border-2 border-clay bg-card p-8 shadow-lg hover:shadow-xl transition-all duration-300 ring-2 ring-clay/10"
          >
            {/* Badge */}
            <div className="absolute -top-4 left-8 bg-clay text-warmWhite text-xs font-bold px-4 py-1.5 rounded-full inline-block">
              BESTSELLER
            </div>

            {/* Book Cover Image */}
            <div className="relative mb-6 overflow-hidden rounded-xl h-64 bg-gradient-to-br from-clay to-oat">
              <Image
                src="/book-cover.png"
                alt="The Avoidant&apos;s Unwritten Rules — by Fleurite.me"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Price Badge */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                  The Avoidant&apos;s Unwritten Rules
                </h3>
                <p className="text-sm text-clay font-medium mt-1">
                  The Complete Guide with 47 Scripts
                </p>
              </div>
              <div className="text-right">
                <span className="inline-block bg-clay/10 text-clay font-bold text-lg px-3 py-1 rounded-lg">
                  $27
                </span>
                <p className="text-xs text-muted-foreground line-through mt-1">$47</p>
              </div>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed">
              The complete guide with 47 copy-paste scripts for every scenario. Learn exactly what to say when he pulls away, how to set boundaries, and most importantly—how to know if he's willing to change.
            </p>

            {/* Benefits List */}
            <div className="space-y-2 pt-4">
              <p className="text-xs font-semibold text-foreground uppercase tracking-wider">What you'll get:</p>
              <ul className="space-y-1.5">
                {[
                  '47 ready-to-use scripts',
                  'Understand his nervous system',
                  'Know if he\'ll actually change',
                  'Set real boundaries',
                  'Leave with dignity if needed',
                  'Get clarity on your relationship'
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Sparkles className="h-4 w-4 text-clay shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="pt-6 border-t border-border/40 space-y-3">
              <Link href="/checkout?product=the-avoidants-unwritten-rules">
                <Button className="w-full h-12 rounded-xl bg-clay text-warmWhite font-semibold hover:bg-clay/90 transition-all flex items-center justify-center gap-2">
                  <Lock className="h-5 w-5" />
                  Get Full Access Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <p className="text-xs text-muted-foreground text-center">
                Secure payment • Instant access after purchase
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground mb-4">
            Start with the free guide and upgrade to the full book when you're ready
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-evergreen font-medium px-4 py-2 rounded-full bg-evergreen/10">
            <Sparkles className="h-4 w-4" />
            Both guides are guaranteed to transform your approach to relationships
          </div>
        </motion.div>
      </div>
    </section>
  )
}
