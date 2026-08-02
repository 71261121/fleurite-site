'use client';

interface Testimonial {
  name: string;
  age: number;
  location: string;
  text: string;
  rating: number;
  date: string;
  verified: boolean;
}

export default function SocialProof() {
  const testimonials: Testimonial[] = [
    {
      name: 'Rachel T.',
      age: 31,
      location: 'New York, NY',
      text: 'I used to check my phone constantly at night. Now I actually sleep through the night. The scripts gave me words when my mind went blank.',
      rating: 4,
      date: 'March 2024',
      verified: true,
    },
    {
      name: 'Maya R.',
      age: 27,
      location: 'Los Angeles, CA',
      text: 'The breathing exercises alone were worth it. I feel calmer in conversations, and honestly, that changes everything.',
      rating: 5,
      date: 'January 2024',
      verified: true,
    },
    {
      name: 'Lauren M.',
      age: 29,
      location: 'Chicago, IL',
      text: "I was skeptical about 'scripts' — it felt fake. But these aren't pickup lines. They're boundaries. For the first time, I felt heard.",
      rating: 5,
      date: 'December 2023',
      verified: true,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-cream to-rose-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-pine-100 text-pine-600 text-sm font-semibold mb-4">
            4.9/5 average rating
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Women Who Broke the Cycle
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from women who were exactly where you are right now
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-muted flex flex-col justify-between"
            >
              <div>
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    role="img"
                    aria-label={`${testimonial.rating} out of 5 stars`}
                    className="text-yellow-400 tracking-wider font-bold text-lg"
                  >
                    {'★'.repeat(testimonial.rating)}
                    {'☆'.repeat(5 - testimonial.rating)}
                  </span>
                  {testimonial.verified && (
                    <span className="text-xs bg-green-100 text-green-700 px-2.5 py-1 rounded-full font-medium">
                      Verified
                    </span>
                  )}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author Details & Date */}
              <div className="flex items-center pt-4 border-t border-gray-50">
                <div className="w-12 h-12 bg-gradient-to-br from-clay-400 to-clay-400 rounded-full flex items-center justify-center mr-4 shrink-0 shadow-sm">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.age} • {testimonial.location}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {testimonial.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-card/60 backdrop-blur-sm rounded-xl border border-rose-100/50 shadow-sm">
            <div className="text-3xl md:text-4xl font-bold text-pine-600 mb-2">500+</div>
            <div className="text-muted-foreground font-medium">Women helped</div>
          </div>
          <div className="p-6 bg-card/60 backdrop-blur-sm rounded-xl border border-rose-100/50 shadow-sm">
            <div className="text-3xl md:text-4xl font-bold text-pine-600 mb-2">4.9/5</div>
            <div className="text-muted-foreground font-medium">Average rating</div>
          </div>
          <div className="p-6 bg-card/60 backdrop-blur-sm rounded-xl border border-rose-100/50 shadow-sm">
            <div className="text-3xl md:text-4xl font-bold text-pine-600 mb-2">47</div>
            <div className="text-muted-foreground font-medium">Tested scripts (every scenario)</div>
          </div>
          <div className="p-6 bg-card/60 backdrop-blur-sm rounded-xl border border-rose-100/50 shadow-sm">
            <div className="text-3xl md:text-4xl font-bold text-pine-600 mb-2">$27</div>
            <div className="text-muted-foreground font-medium">One-time payment</div>
          </div>
        </div>
      </div>
    </section>
  );
}
