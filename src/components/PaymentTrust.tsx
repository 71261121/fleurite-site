'use client';

const methods = [
  { name: 'Visa', svg: <svg viewBox="0 0 48 32" className="h-8 w-auto"><rect width="48" height="32" rx="4" fill="#1A1F71"/><text x="24" y="20" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">VISA</text></svg> },
  { name: 'Mastercard', svg: <svg viewBox="0 0 48 32" className="h-8 w-auto"><rect width="48" height="32" rx="4" fill="#252525"/><circle cx="19" cy="16" r="8" fill="#EB001B" opacity="0.9"/><circle cx="29" cy="16" r="8" fill="#F79E1B" opacity="0.9"/></svg> },
  { name: 'Amex', svg: <svg viewBox="0 0 48 32" className="h-8 w-auto"><rect width="48" height="32" rx="4" fill="#2E77BC"/><text x="24" y="20" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">AMEX</text></svg> },
  { name: 'Apple Pay', svg: <svg viewBox="0 0 48 32" className="h-8 w-auto"><rect width="48" height="32" rx="4" fill="#000"/><text x="24" y="20" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif"> Pay</text></svg> },
  { name: 'Google Pay', svg: <svg viewBox="0 0 48 32" className="h-8 w-auto"><rect width="48" height="32" rx="4" fill="#fff" stroke="#ddd"/><text x="24" y="20" textAnchor="middle" fill="#5F6368" fontSize="8" fontWeight="bold" fontFamily="sans-serif">G Pay</text></svg> },
  { name: 'Shop Pay', svg: <svg viewBox="0 0 48 32" className="h-8 w-auto"><rect width="48" height="32" rx="4" fill="#5A31F4"/><text x="24" y="20" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Shop</text></svg> },
];

export default function PaymentTrust() {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Payment Methods */}
          <div className="flex flex-wrap justify-center gap-3 grayscale hover:grayscale-0 transition-all duration-300">
            {methods.map((method) => (
              <div key={method.name} className="opacity-60 hover:opacity-100 transition-opacity" title={method.name}>
                {method.svg}
              </div>
            ))}
          </div>

          {/* Discreet Billing Note */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Discreet billing &mdash; your statement shows &ldquo;SM Digital&rdquo;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
