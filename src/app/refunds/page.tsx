'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RefundsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-8">
            Refunds &amp; Terms
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Last Updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. What You Are Buying</h2>
              <p className="text-muted-foreground leading-relaxed">
                &ldquo;The Avoidant&apos;s Unwritten Rules&rdquo; is a digital PDF. Access is delivered
                immediately after payment. There is no app, no login, and no subscription. Payment is a
                one-time charge of $27 processed by Dodo Payments.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Refund Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Because the product is delivered instantly as a downloadable file, it is
                non-refundable once the download has been accessed. This is stated before purchase
                so there are no surprises after.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We will issue a full refund in these cases:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>You were charged more than once for the same order.</li>
                <li>You were charged but never received a working download link.</li>
                <li>The file is corrupted or unreadable and we cannot resolve it for you.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To request a refund under any of the above, email{' '}
                <a className="text-pine-600 hover:text-pine-700" href="mailto:support@fleurite.me">
                  support@fleurite.me
                </a>{' '}
                with your order email and the date of purchase. We respond within 24-48 hours.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Delivery</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your download link is emailed to the address used at checkout and is also shown on
                the confirmation screen. If it does not arrive, check your spam folder first, then
                contact support and we will re-send it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Personal Use Licence</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your purchase grants a personal, non-transferable licence to read and use the
                material. Redistributing, reselling, or publishing the file or its scripts is not
                permitted.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Not Professional Advice</h2>
              <p className="text-muted-foreground leading-relaxed">
                This book is educational material about relationship dynamics and communication. It
                is not therapy, medical advice, or legal advice, and it is not a substitute for care
                from a licensed professional. If you are in danger, contact your local emergency
                services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Questions about an order, a refund, or these terms:{' '}
                <a className="text-pine-600 hover:text-pine-700" href="mailto:support@fleurite.me">
                  support@fleurite.me
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
