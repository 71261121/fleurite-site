'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Last Updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Fleurite.me ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise handle your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">We may collect information about you in the following ways:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Email Address:</strong> When you download our free guide or purchase our complete system</li>
                <li><strong>Payment Information:</strong> Processed securely through DodoPayments (we don&apos;t store full card details)</li>
                <li><strong>Usage Data:</strong> Which pages you visit, how long you stay, and what you click (via analytics)</li>
                <li><strong>Device Information:</strong> Browser type, operating system, and IP address</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Deliver the products you've purchased or requested</li>
                <li>Send you important updates about your orders or account</li>
                <li>Improve our website and services based on usage patterns</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your personal information. All payment processing is handled by DodoPayments, a PCI DSS Level 1 certified payment processor. We do not store sensitive payment information on our servers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt out of marketing emails at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Third-Party Services</h2>
              <p className="text-muted-foreground mb-4">
                We use third-party services including DodoPayments (payments) and analytics providers. We are not responsible for their privacy practices. Please review their privacy policies independently.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy periodically. We will notify you of significant changes by updating the date at the top of this page.
              </p>
            </section>

            <section className="mb-8 bg-card rounded-xl p-6 border border-muted">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:{' '}
                <a href="mailto:privacy@fleurite.me" className="text-pine-600 hover:text-pine-700">
                  privacy@fleurite.me
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
