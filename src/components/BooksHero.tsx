'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download, Lock } from 'lucide-react';

export default function BooksHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f9f5f0] via-[#f9f5f0] to-[#f3ede7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* INTRO TEXT - Direct Pain Hook */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 bg-[#edd7cd] rounded-full">
            <p className="text-sm font-semibold text-[#2d2a33]">
              943 Shares • 5K+ Likes • Proven Framework
            </p>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6 leading-tight">
            "It was never that you were{' '}
            <span className="text-[#9b1c1c]">too much.</span>"
          </h2>
          
          <p className="text-lg md:text-xl text-[#2d2a33] max-w-3xl mx-auto leading-relaxed">
            The moment you realize he&apos;s avoidant — not you being needy. Then you get the exact words to say. And if he won&apos;t change, you&apos;ll know how to leave with your dignity intact.
          </p>
        </div>

        {/* BOOKS SECTION - Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT: FREE GUIDE */}
          <div className="group">
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow p-8 h-full flex flex-col">
              {/* Badge */}
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-[#f3ede7] text-[#2d2a33] text-xs font-semibold rounded-full">
                  FREE • INSTANT DOWNLOAD
                </span>
              </div>

              {/* Book Cover */}
              <div className="relative w-40 h-56 mx-auto mb-8 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/book-cover.png"
                  alt="Why You Shrink Yourself - Free Guide"
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-bold text-[#1a1a1a] mb-3">
                Why You Shrink Yourself
              </h3>
              
              <p className="text-[#2d2a33] text-sm leading-relaxed mb-4">
                The 3-Day Reset for Anxious Attachment
              </p>

              <p className="text-[#2d2a33] mb-6 text-sm leading-relaxed flex-grow">
                Understand why you shrink yourself in relationships. Validate your nervous system. Take action immediately. Get clarity on what comes next.
              </p>

              {/* Benefits */}
              <ul className="space-y-2 mb-8 text-sm text-[#2d2a33]">
                <li className="flex items-start gap-2">
                  <span className="text-[#9b1c1c] font-bold">✓</span>
                  <span>Understand the pattern that keeps you stuck</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9b1c1c] font-bold">✓</span>
                  <span>3-day nervous system reset</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9b1c1c] font-bold">✓</span>
                  <span>Clarity on your next step</span>
                </li>
              </ul>

              {/* CTA */}
              <Link
                href="/api/downloads/free-guide"
                className="w-full bg-[#9b1c1c] hover:bg-[#7f1d1d] text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors group/btn"
              >
                <Download className="w-4 h-4" />
                Download Now
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>

              <p className="text-xs text-[#2d2a33] text-center mt-3">
                No email required. Instant PDF.
              </p>
            </div>
          </div>

          {/* RIGHT: PAID BOOK */}
          <div className="group">
            <div className="bg-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow p-8 h-full flex flex-col border-2 border-[#d4af37] relative">
              {/* BESTSELLER BADGE */}
              <div className="absolute -top-3 left-6 bg-[#d4af37] text-[#2d2a33] px-4 py-1.5 rounded-full font-bold text-sm">
                BESTSELLER
              </div>

              {/* Top Badge */}
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-[#d4af37]/20 text-[#9b1c1c] text-xs font-semibold rounded-full">
                  COMPLETE SYSTEM • 47 SCRIPTS
                </span>
              </div>

              {/* Book Cover */}
              <div className="relative w-40 h-56 mx-auto mb-8 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/book-cover.png"
                  alt="Stop Shrinking Yourself - Complete Guide"
                  fill
                  className="object-cover"
                  sizes="160px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-bold text-[#1a1a1a] mb-2">
                Stop Shrinking Yourself
              </h3>
              
              <p className="text-[#9b1c1c] font-semibold text-sm mb-2">
                The Exact Words to Say + How to Know If He&apos;ll Change
              </p>

              <p className="text-[#2d2a33] text-sm leading-relaxed mb-6 flex-grow">
                47 copy-paste scripts for every scenario. Learn what to say when he pulls away. Know if this is salvageable or if you should leave with your head high.
              </p>

              {/* Benefits */}
              <ul className="space-y-2 mb-8 text-sm text-[#2d2a33]">
                <li className="flex items-start gap-2">
                  <span className="text-[#d4af37] font-bold">✓</span>
                  <span>47 copy-paste scripts (organized by scenario)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d4af37] font-bold">✓</span>
                  <span>The binary clarity framework: will he change?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d4af37] font-bold">✓</span>
                  <span>How to leave with dignity if he won&apos;t</span>
                </li>
              </ul>

              {/* Price */}
              <div className="mb-6 bg-[#f3ede7] p-4 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-[#9b1c1c]">$27</span>
                  <span className="text-sm text-[#2d2a33] line-through">$47</span>
                  <span className="text-xs bg-[#d4af37] text-[#2d2a33] px-2 py-1 rounded font-semibold">
                    42% off
                  </span>
                </div>
                <p className="text-xs text-[#2d2a33] mt-2">
                  Price goes to $47 next week.
                </p>
              </div>

              {/* CTA */}
              <a
                href="#checkout"
                className="w-full bg-[#d4af37] hover:bg-[#bfa13a] text-[#2d2a33] font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors group/btn"
              >
                <Lock className="w-4 h-4" />
                Get Access Now
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>

              <p className="text-xs text-[#2d2a33] text-center mt-3">
                Instant PDF download. Email backup included.
              </p>
            </div>
          </div>
        </div>

        {/* PROOF SECTION */}
        <div className="mt-16 bg-[#f3ede7] rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#9b1c1c] mb-2">
                47
              </div>
              <p className="text-[#2d2a33] font-semibold text-sm">
                Real Scripts for Every Scenario
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#d4af37] mb-2">
                943 Shares
              </div>
              <p className="text-[#2d2a33] font-semibold text-sm">
                On Our Top Post (6x Industry Average)
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#9b1c1c] mb-2">
                10 Mins
              </div>
              <p className="text-[#2d2a33] font-semibold text-sm">
                From Panic to Clarity + Ready to Talk
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
