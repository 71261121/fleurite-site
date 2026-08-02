'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-20 pb-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* LEFT: Emotional Hook + Book Showcase */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            {/* Micro-Level Emotional Hook */}
            <div className="inline-block mb-6">
              <p className="text-sm font-semibold text-pine-600 tracking-wide uppercase">
                It Was Never You
              </p>
            </div>

            {/* Main Headline - Direct Pain Identification */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-8 leading-tight">
              The more you shrink,{' '}
              <span className="text-clay-600">the more comfortable they get.</span>
            </h1>

            {/* Emotional Validation + Solution Promise */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Your nervous system isn't overreacting. It was injured. And you weren't born a chaser—you were trained to be one. Stop shrinking yourself. Start being the one who gets chosen.
            </p>

            {/* Two-Step CTA: Free + Paid */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => window.location.href = '/api/downloads/free-guide'}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-pine-600 text-white font-semibold hover:bg-pine-700 transition cursor-pointer"
              >
                Get the Free Guide
              </button>
              <Link
                href="/#products"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-pine-600 text-pine-600 font-semibold hover:bg-pine-50 transition"
              >
                See the Complete Book
              </Link>
            </div>

            {/* Social Proof */}
            <p className="text-sm text-muted-foreground mt-8">
              ✓ 943 shares on this exact truth  ✓ 5,000+ women transformed  ✓ 47 scripts included
            </p>
          </div>

          {/* RIGHT: Book Covers (Different Designs) */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* FREE Guide - Left, Subtle */}
              <div className="absolute left-0 top-0 w-32 md:w-40 aspect-[3/4] rounded-lg overflow-hidden shadow-lg z-10 border-2 border-muted">
                <Image
                  src="/book-cover-free.png"
                  alt="Free Guide: Why You Shrink Yourself"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>

              {/* PAID Book - Right, Prominent */}
              <div className="relative w-40 md:w-48 aspect-[3/4] rounded-xl overflow-hidden shadow-2xl ml-auto mt-8">
                <Image
                  src="/book-cover-paid.png"
                  alt="The Complete Guide: You Were Never Too Much"
                  fill
                  sizes="192px"
                  className="object-cover"
                />
                {/* Badge on Paid Book */}
                <div className="absolute top-3 right-3 bg-clay-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Bestseller
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
