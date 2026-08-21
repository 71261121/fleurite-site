'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong. Please email us directly.');
      }
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-foreground mb-2">Email</h3>
                  <a href="mailto:hello@fleurite.me" className="text-pine-600 hover:text-pine-700">
                    hello@fleurite.me
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">Support</h3>
                  <p className="text-muted-foreground mb-2">
                    For product support or questions about your order:
                  </p>
                  <a href="mailto:support@fleurite.me" className="text-pine-600 hover:text-pine-700">
                    support@fleurite.me
                  </a>
                </div>

                <div className="bg-card rounded-xl p-6 border border-muted mt-8">
                  <h3 className="font-bold text-foreground mb-4">Response Time</h3>
                  <p className="text-muted-foreground">
                    We aim to respond to all inquiries within 24-48 hours. Thank you for your patience!
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 border border-muted">
                <h2 className="text-2xl font-bold text-foreground mb-8">Send us a Message</h2>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-muted-foreground text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-pine-600"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-muted-foreground text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-pine-600"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-muted-foreground text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-pine-600"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-pine-600 text-white py-3 rounded-lg font-bold hover:bg-pine-700 transition-colors disabled:opacity-60"
                  >
                    {sending ? 'Sending…' : 'Send Message'}
                  </button>

                  {submitted && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-green-800 font-medium">
                        Thank you! We&apos;ve received your message and will get back to you within 24-48 hours.
                      </p>
                    </div>
                  )}

                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-800 font-medium">
                        {error} You can also email{' '}
                        <a className="underline" href="mailto:support@fleurite.me">support@fleurite.me</a>.
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
